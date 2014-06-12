<?php 
class ControllerAccountLogin extends Controller {
	private $error = array();
	
	public function index() {
        if ($this->customer->isLogged()) {  
      		$this->redirect(Url::createUrl("account/account"));
    	}
        
        $this->activarUser();
    	$this->language->load('account/login');
    	$this->document->title = $this->language->get('heading_title');
        
        if ($this->request->server['REQUEST_METHOD'] == 'POST' 
        && !empty($this->request->post['email']) 
        && !empty($this->request->post['password']) 
        && $this->validate()) 
        {
            if (isset($this->request->post['redirect'])) {
                $this->redirect($this->request->post['redirect']);
      		} elseif ($this->session->has('redirect')) {
                $this->redirect($this->session->get('redirect'));
      		} else {
                $this->redirect(Url::createUrl("common/home"));
      		}
    	}  
		
      	$this->document->breadcrumbs = array();
      	$this->document->breadcrumbs[] = array(
        	'href'      => Url::createUrl("common/home"),
        	'text'      => $this->language->get('text_home'),
        	'separator' => false
      	);
      	$this->document->breadcrumbs[] = array(
        	'href'      => Url::createUrl("account/account"),
        	'text'      => $this->language->get('text_account'),
        	'separator' => $this->language->get('text_separator')
      	);
      	$this->document->breadcrumbs[] = array(
        	'href'      => Url::createUrl("account/login"),
        	'text'      => $this->language->get('text_login'),
        	'separator' => $this->language->get('text_separator')
      	);
		
		$this->data['breadcrumbs'] = $this->document->breadcrumbs;
        
		$this->data['error'] = isset($this->error['message']) ? $this->error['message'] : '';
		$this->data['action'] = Url::createUrl("account/login");
		$this->data['register'] = Url::createUrl("account/register");

    	if (isset($this->request->post['redirect'])) {
			$this->data['redirect'] = $this->request->post['redirect'];
		} elseif ($this->session->has('redirect')) {
      		$this->data['redirect'] = $this->session->get('redirect');	  	
    	} else {
			$this->data['redirect'] = '';
		}
        
        if ($this->request->hasQuery('error')) {
            $this->data['error'] = $this->language->get('error_login');
        }
        
		if ($this->session->has('success')) {
    		$this->data['success'] = $this->session->get('success');
	  		$this->session->clear('success');	
		} else {
			$this->data['success'] = '';
		}
		
		if ($this->session->has('account')) {
			$this->data['account'] = $this->session->get('account');
		} else {
			$this->data['account'] = 'register';
		}
		
        $this->load->model('localisation/country');
       	$this->data['countries'] = $this->modelCountry->getCountries();
        $this->data['page_legal_terms_id'] = ($this->config->get('config_account_id')) ? $this->config->get('config_account_id') : 0;
        $this->data['page_privacy_terms_id'] = ($this->config->get('config_account_id')) ? $this->config->get('config_account_id') : 0;
        
        $this->session->set('state',md5(rand()));
        $this->data['live_client_id'] = $this->config->get('social_live_client_id');
        $this->data['google_client_id'] = $this->config->get('social_google_client_id');
        $this->data['facebook_app_id']  = $this->config->get('social_facebook_app_id');
        $this->data['twitter_oauth_token_secret'] = $this->config->get('social_twitter_oauth_token_secret');
        
    	$this->data['forgotten'] = Url::createUrl("account/forgotten");

        $this->loadWidgets();

        if ($scripts) $this->scripts = array_merge($this->scripts,$scripts);
            
    	$this->children[] = 'common/column_left';
    	$this->children[] = 'common/column_right';
    	$this->children[] = 'common/nav';
    	$this->children[] = 'common/header';
    	$this->children[] = 'common/footer';
        
        $template = ($this->config->get('default_view_account_login')) ? $this->config->get('default_view_account_login') : 'account/login.tpl';
        if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') .'/'. $template)) {
            $this->template = $this->config->get('config_template') .'/'. $template;
       	} else {
            $this->template = 'choroni/'. $template;
       	}
        
		$this->response->setOutput($this->render(true), $this->config->get('config_compression'));
  	}
    
    private function activarUser() {
        $arrValor = array();
        $codigo = $_SERVER['QUERY_STRING'];
        $arrCodigo = explode('&amp;',$codigo);
        foreach($arrCodigo as $key => $value) {
            $arrValor[] = explode('=',$value);
        }
        foreach ($arrValor as $key => $value) {
                foreach ($value as $key2 => $value2) {
                    if ($key2 == '1') $arrFinal[] = $value2;
            }
        }
        if (!empty($arrFinal[3])) {
        $email = $arrFinal[1];
        $password = $arrFinal[2];
        $codigo = $arrFinal[3];
        if ($this->customer->activateUser($codigo)) {
        echo "<center><div style='background:#fff88d top center;display:block;width:1000px;height:15px;font:bold 11px verdana;color:#e47202;'>Su cuenta ha sido activada, Ya puede acceder y disfrutar de nuestros servicios.</div></center>";
        }}
    }
  
  	private function validate() {
    	$this->language->load('account/login');
    	if (!$this->customer->login($this->request->post['email'], $this->request->post['password'])) {
      		$this->error['message'] = $this->language->get('error_login');
    	}     	
	
    	if (!$this->error) {
      		return true;
    	} else {
      		return false;
    	}  	
  	}
    
    public function header() {
        header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); 
        header("Last-Modified: " . gmdate( "D, d M Y H:i:s" ) . "GMT"); 
        header("Cache-Control: no-cache, must-revalidate"); 
        header("Pragma: no-cache");
        header("Content-type: application/json");
        
    	$this->language->load('account/login');
        if (!$this->request->hasPost("email") && !$this->request->hasPost("password")) {
            $json['error'] = 1;
            $json['message'] = $this->language->get('error_login');
        }
        
        if (!$this->request->hasPost("token") && $this->request->getPost("token") != $this->session->get('token')) {
            $json['error'] = 1;
            $json['message'] = $this->language->get('error_login');
        }
        
        if (!$this->customer->login($this->request->getPost("email"), $this->request->getPost("password"), false)) {
      		$json['error'] = 1;
            $json['message'] = $this->language->get('error_login');
    	} 
        
        if (!$json['error']) {
            $json['success'] = 1;
        }
        
        $this->load->auto('json');
		$this->response->setOutput(Json::encode($json), $this->config->get('config_compression'));  
    }
    
    protected function loadWidgets() {
        $csspath = defined("CDN") ? CDN_CSS : HTTP_THEME_CSS;
        if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/common/header.tpl')) {
            $csspath = str_replace("%theme%",$this->config->get('config_template'),$csspath);
       	} else {
            $csspath = str_replace("%theme%","default",$csspath);
       	}
        if (fopen($csspath.str_replace('controller','',strtolower(__CLASS__) . '.css'),'r')) {
            $styles[] = array('media'=>'all','href'=>$csspath.str_replace('controller','',strtolower(__CLASS__) . '.css'));
        }
        if (count($styles)) {
            $this->data['styles'] = $this->styles = array_merge($this->styles,$styles);
        }
        $this->load->helper('widgets');
        $widgets = new NecoWidget($this->registry,$this->Route);
        foreach ($widgets->getWidgets('main') as $widget) {
            $settings = (array)unserialize($widget['settings']);
            if ($settings['asyn']) {
                $url = Url::createUrl("{$settings['route']}",$settings['params']);
                $scripts[$widget['name']] = array(
                    'id'=>$widget['name'],
                    'method'=>'ready',
                    'script'=>
                    "$(document.createElement('div'))
                        .attr({
                            id:'".$widget['name']."'
                        })
                        .html(makeWaiting())
                        .load('". $url . "')
                        .appendTo('".$settings['target']."');"
                );
            } else {
                if (isset($settings['route'])) {
                    if ($settings['autoload']) $this->data['widgets'][] = $widget['name'];
                    $this->children[$widget['name']] = $settings['route'];
                    $this->widget[$widget['name']] = $widget;
                }
            }
        }
            
        foreach ($widgets->getWidgets('featuredContent') as $widget) {
            $settings = (array)unserialize($widget['settings']);
            if ($settings['asyn']) {
                $url = Url::createUrl("{$settings['route']}",$settings['params']);
                $scripts[$widget['name']] = array(
                    'id'=>$widget['name'],
                    'method'=>'ready',
                    'script'=>
                    "$(document.createElement('div'))
                        .attr({
                            id:'".$widget['name']."'
                        })
                        .html(makeWaiting())
                        .load('". $url . "')
                        .appendTo('".$settings['target']."');"
                );
            } else {
                if (isset($settings['route'])) {
                    if ($settings['autoload']) $this->data['featuredWidgets'][] = $widget['name'];
                    $this->children[$widget['name']] = $settings['route'];
                    $this->widget[$widget['name']] = $widget;
                }
            }
        }
    }
}
