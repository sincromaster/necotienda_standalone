<?php

class ControllerPaymentCod extends Controller {

	protected function index() {
		$this->language->load('payment/cod');
		$this->load->library('image');
        $this->data['Image'] = new NTImage;
        
        $this->load->model("marketing/newsletter");
        $result = $this->modelNewsletter->getById($this->config->get('cod_newsletter_id'));
        $this->data['instructions'] = html_entity_decode($result['htmlbody']);
                
		$this->load->model('account/order');
        foreach ($this->modelOrder->getOrders(array('limit'=>1000)) as $key => $result) {
        	$this->data['orders'][] = array(
                'order_id'   => $result['order_id'],
          		'date_added' => date('d/m/Y', strtotime($result['dateAdded'])),
          		'total'      => $this->currency->format($result['total'], $result['currency'], $result['value'])
  		    );
        }
        
        if ($this->session->has('order_id')) {
            $this->data['order_id'] = $this->session->get('order_id');
        } elseif ($this->request->hasQuery('order_id')) {
            $this->data['order_id'] = $this->request->getQuery('order_id');
        } else {
            $this->data['order_id'] = 0;
        }
        
		$this->id = 'payment';

        $this->loadAssets();

		if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/payment/cod.tpl')) {
			$this->template = $this->config->get('config_template') . '/payment/cod.tpl';
		} else {
			$this->template = 'cuyagua/payment/cod.tpl';
		}	
		
		$this->render();
	}
	
	public function confirm() {
		$this->language->load('payment/cod');
		$this->load->model('account/order');
		$this->load->model('account/payment');
        $this->load->library('email/mailer');
        
        if ($this->session->has('order_id')) {
            $this->data['order_id'] = $this->session->get('order_id');
        } elseif ($this->request->hasQuery('order_id')) {
            $this->data['order_id'] = $this->request->getQuery('order_id');
        } elseif ($this->request->hasPost('cod_order_id')) {
            $this->data['order_id'] = $this->request->getPost('cod_order_id');
        } else {
            $this->data['order_id'] = 0;
        }
        
        $order_info = $this->modelOrder->getOrder($this->data['order_id']);
        
        if ($order_info && $this->customer->isLogged()) {
            
            $total_payment = $this->modelPayment->getSumPayments(array(
                'order_id'=>$order_info['order_id'],
                'limit'=>1000
            ));
                
            $total = $order_info['total'] - $total_payment;
                
            $amount = explode(",",$this->request->getPost('cod_amount'));
            $payment = round(str_replace(".","",$amount[0]) .".". $amount[1],2);
            
            $data['order_id']       = $order_info['order_id'];
            $data['payment_method'] = $this->language->get('text_title');
            $data['amount']         = $payment;
            $data['comment']        = $this->language->get('text_date_of_payment') .": ". $this->request->getPost('cod_date_of_payment') ."\n";
            $data['comment']       .= $this->language->get('text_payment_method_on_delivery') .": ". $this->request->getPost('cod_payment_method_on_delivery') ."\n";
            $data['comment']       .= "\n".$this->request->getPost('cod_comment');
            $data['order_status_id']= $this->config->get('cod_order_status_id');
            $data['order_payment_status_id'] = $this->config->get('config_payment_status_id');
            
            $json['payment_id'] = $payment_id = $this->modelPayment->add($data);
            
            $this->modelOrder->addOrderHistory($order_info['order_id'],$data);
            $this->modelOrder->updateStatus($order_info['order_id'],$this->config->get('cod_order_status_id'));
            $this->modelOrder->updatePaymentMethod($order_info['order_id'],$this->language->get('text_title'));
            
            $diff = $payment - $total;
            if ($diff < 0) { //falta dinero
                $diff = $diff * -1;
                $json['warning'] = 1;
                $json['msg'] = str_replace('{%payment_receipt%}',Url::createUrl("account/payment"),$this->language->get('error_moneyless'));
                $json['msg'] = str_replace('{%invoice%}',Url::createUrl("account/invoice",array('order_id'=>$order_info['order_id'])),$json['msg']);
                $json['msg'] = str_replace('{%diff%}',$this->currency->format($diff),$json['msg']);
            } elseif ($diff > 0) { //sobra dinero
                $json['warning'] = 1;
                $json['msg'] = str_replace('{%payment_receipt%}',Url::createUrl("account/payment"),$this->language->get('error_moneymore'));
                $json['msg'] = str_replace('{%invoice%}',Url::createUrl("account/invoice",array('order_id'=>$order_info['order_id'])),$json['msg']);
                $json['msg'] = str_replace('{%diff%}',$this->currency->format($diff),$json['msg']);
            } else {
                $json['success'] = 1;
                $json['msg'] = $this->language->get('text_success'); 
            }
            
            $mailer = new Mailer;
            if ($this->config->get('cod_newsletter_id')) {
                $this->load->model("marketing/newsletter");
                $this->load->library('BarcodeQR');
                $this->load->library('Barcode39');
                $qr         = new BarcodeQR;
                $barcode    = new Barcode39(C_CODE);
          		$totals     = $this->modelOrder->getOrderTotals($order_id);
	   
                $text = $this->config->get('config_owner') . "\n";
                $text .= "Pago ID: " . $payment_id . "\n";
                $text .= "Pedido ID: " . $order_id . "\n";
                $text .= "Fecha Emision del Pedido: " . date('d-m-Y h:i A',strtotime($order_info['date_added'])) . "\n"; 
                $text .= "Cliente: " . $this->customer->getCompany() . "\n"; 
                $text .= "RIF: " . $this->customer->getRif() . "\n";
                $text .= "Direccion IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
                
                $qrStore = "cache/" . str_replace(".","_",$this->config->get('config_owner')).'.jpg';
                $qrPayment = "cache/" . str_replace(" ","_",$this->config->get('config_owner') ."_qr_code_payment_" . $payment_id) . '.jpg';
                $eanStore = "cache/" . str_replace(" ","_",$this->config->get('config_owner') ."_barcode_39_order_id_" . $order_id) . '.gif';
                
                $qr->text($text);
                $qr->draw(150,DIR_IMAGE . $qrPayment);
                $qr->url(HTTP_HOME);
                $qr->draw(150,DIR_IMAGE . $qrStore);
                $barcode->draw(DIR_IMAGE . $eanStore);

                $payment_text = '<h1>'. $this->config->get('config_owner') . "</h1>";
                $payment_text .= "Pago ID: " . $payment_id . "<br />";
                $payment_text .= "Pedido ID: " . $order_id . "<br />";
                $payment_text .= "Fecha Emision del Pedido: " . date('d-m-Y h:i A',strtotime($order_info['date_added'])) . "<br />";
                $payment_text .= "Cliente: " . $this->customer->getCompany() . "<br />";
                $payment_text .= "RIF: " . $this->customer->getRif() . "<br />";
                $payment_text .= "Direccion IP: " . $_SERVER['REMOTE_ADDR'] . "<br />";
                
	            $total_html = "<div class=\"clear:both;float:none;\"></div><br /><table>";
          		foreach ($totals as $total) {
                    $total_html .= "<tr>";
                    $total_html .= "<td style=\"text-align:right;\">".$total['title']."</td>";
                    $total_html .= "<td style=\"text-align:right;\">".$total['text']."</td>";
                    $total_html .= "</tr>";
          		}
	            $total_html .= "</table>";
                $payment_text .= $total_html;
                
                $result = $this->modelNewsletter->getById($this->config->get('cod_newsletter_id'));
                $message = $result['htmlbody'];

                $message = str_replace("{%title%}",'Pago N&deg; ' . $payment_id . " - " . $this->config->get('config_name'),$message);
                $message = str_replace("{%store_logo%}",'<img src="'. HTTP_IMAGE . $this->config->get('config_logo') .'" alt="'. $this->config->get('config_name') .'" />',$message);
                $message = str_replace("{%store_url%}",HTTP_HOME,$message);
                $message = str_replace("{%store_owner%}",$this->config->get('config_owner'),$message);
                $message = str_replace("{%store_name%}",$this->config->get('config_name'),$message);
                $message = str_replace("{%store_rif%}",$this->config->get('config_rif'),$message);
                $message = str_replace("{%store_email%}",$this->config->get('config_email'),$message);
                $message = str_replace("{%store_telephone%}",$this->config->get('config_telephone'),$message);
                $message = str_replace("{%store_address%}",$this->config->get('config_address'),$message);
                $message = str_replace("{%totals%}",$total_html,$message);
                $message = str_replace("{%order_id%}",$this->config->get('config_invoice_prefix') . $order_id,$message);
                $message = str_replace("{%invoice_id%}",$this->config->get('config_invoice_prefix') . $invoice_id,$message);
                $message = str_replace("{%rif%}",$this->customer->getRif(),$message);
                $message = str_replace("{%fullname%}",$this->customer->getFirstName() ." ". $this->customer->getFirstName(),$message);
                $message = str_replace("{%company%}",$this->customer->getCompany(),$message);
                $message = str_replace("{%email%}",$this->customer->getEmail(),$message);
                $message = str_replace("{%telephone%}",$this->customer->getTelephone(),$message);
                $message = str_replace("{%payment%}",$payment_text,$message);
                $message = str_replace("{%payment_method%}",$order_info['payment_method'],$message);
                $message = str_replace("{%date_added%}",date('d-m-Y h:i A',strtotime($order_info['date_added'])),$message);
                $message = str_replace("{%ip%}",$_SERVER['REMOTE_ADDR'],$message);
                $message = str_replace("{%qr_code_store%}",'<img src="'. HTTP_IMAGE . $qrStore .'" alt="QR Code" />',$message);
                $message = str_replace("{%comment%}",$order_info['comment'],$message);
                $message = str_replace("{%qr_code_payment%}",'<img src="'. HTTP_IMAGE . $qrPayment .'" alt="QR Code" />',$message);
                $message = str_replace("{%barcode_39_order_id%}",'<img src="'. HTTP_IMAGE . $eanStore .'" alt="QR Code" />',$message);
                
                $message .= "<p style=\"text-align:center\">Powered By Necotienda&reg; ". date('Y') ."</p>";
            } else {
                $message = $this->config->get('config_owner') . "\n";
                $message .= "Pago ID: " . $payment_id . "\n";
                $message .= "Pedido ID: " . $order_id . "\n";
                $message .= "Fecha Emision: " . date('d-m-Y h:i A',strtotime($order_info['date_added'])) . "\n"; 
                $message .= "Cliente: " . $this->customer->getCompany() . "\n"; 
                $message .= "RIF: " . $this->customer->getRif() . "\n";
                $message .= "Direccion IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
                $message .= "\n". "Powered By Necotienda&reg; ". date('Y') . "\n";
            }
            
            if ($message) {
                if ($this->config->get('config_smtp_method')=='smtp') {
                    $mailer->IsSMTP();
            		$mailer->Host = $this->config->get('config_smtp_host');
            		$mailer->Username = $this->config->get('config_smtp_username');
            		$mailer->Password = base64_decode($this->config->get('config_smtp_password'));
            		$mailer->Port     = $this->config->get('config_smtp_port');
                    $mailer->Timeout  = $this->config->get('config_smtp_timeout');
                    $mailer->SMTPSecure = $this->config->get('config_smtp_ssl');
                    $mailer->SMTPAuth = ($this->config->get('config_smtp_auth')) ? true : false;          
                } elseif ($this->config->get('config_smtp_method')=='sendmail') {
                    $mailer->IsSendmail();
                } else {
                    $mailer->IsMail();
                }
    	   
                $mailer->IsHTML();
        		$mailer->AddAddress($this->customer->getEmail(),$this->customer->getCompany());
        		$mailer->AddBCC($this->config->get('config_email'),$this->config->get('config_name'));
        		$mailer->SetFrom($this->config->get('config_email'),$this->config->get('config_name'));
        		$mailer->Subject = $this->config->get('config_owner') ." ". $this->language->get('text_new_payment') ." #". $payment_id;
        		$mailer->Body = html_entity_decode(htmlspecialchars_decode($message));
        		$mailer->Send();
            }
        } elseif (!$this->customer->isLogged()) {
            $json['error'] = 1;
            $json['msg'] = $this->language->get('error_not_logged');
	   } else {
            $json['error'] = 1;
            $json['msg'] = $this->language->get('error_payment');
        }
        
        $this->load->library('json');
		$this->response->setOutput(Json::encode($json), $this->config->get('config_compression'));
	}

    protected function loadAssets() {
        $csspath = defined("CDN") ? CDN_CSS : HTTP_THEME_CSS;
        $jspath = defined("CDN") ? CDN_JS : HTTP_THEME_JS;
        if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/common/header.tpl')) {
            $csspath = str_replace("%theme%", $this->config->get('config_template'), $csspath);
            $cssFolder = str_replace("%theme%", $this->config->get('config_template'), DIR_THEME_CSS);

            $jspath = str_replace("%theme%", $this->config->get('config_template'), $jspath);
            $jsFolder = str_replace("%theme%", $this->config->get('config_template'), DIR_THEME_JS);
        } else {
            $csspath = str_replace("%theme%", "default", $csspath);
            $cssFolder = str_replace("%theme%", "default", DIR_THEME_CSS);

            $jspath = str_replace("%theme%", "default", $jspath);
            $jsFolder = str_replace("%theme%", "default", DIR_THEME_JS);
        }

        if (file_exists($cssFolder . strtolower(__CLASS__) . '.css')) {
            if ($this->config->get('config_render_css_in_file')) {
                $this->data['css'] .= file_get_contents($cssFolder . strtolower(__CLASS__) .'.css');
            } else {
                $styles[strtolower(__CLASS__) .'.css'] = array('media' => 'all', 'href' => $csspath . strtolower(__CLASS__) .'.css');
            }
        }

        if (file_exists($jsFolder . str_replace('controller', '', strtolower(__CLASS__) . '.js'))) {
            if ($this->config->get('config_render_js_in_file')) {
                $javascripts[] = $jsFolder . str_replace('controller', '', strtolower(__CLASS__) . '.js');
            } else {
                $javascripts[] = $jspath . str_replace('controller', '', strtolower(__CLASS__) . '.js');
            }
        }

        if (count($styles)) {
            $this->data['styles'] = $this->styles = array_merge($this->styles, $styles);
        }

        if (count($javascripts)) {
            $this->javascripts = array_merge($this->javascripts, $javascripts);
        }
    }
}