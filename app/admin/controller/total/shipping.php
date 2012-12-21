<?php 
class ControllerTotalShipping extends Controller { 
	private $error = array(); 
	 
	public function index() { 
		$this->load->language('total/shipping');

		$this->document->title = $this->language->get('heading_title');
		
		$this->load->auto('setting/setting');
		
		if (($this->request->server['REQUEST_METHOD'] == 'POST') && ($this->validate())) {
			$this->modelSetting->editSetting('shipping', $this->request->post);
		
			$this->session->set('success',$this->language->get('text_success'));
			
			$this->redirect(Url::createAdminUrl('extension/total'));
		}
		
		$this->data['heading_title'] = $this->language->get('heading_title');

		$this->data['text_enabled'] = $this->language->get('text_enabled');
		$this->data['text_disabled'] = $this->language->get('text_disabled');
		
		$this->data['entry_status'] = $this->language->get('entry_status');
		$this->data['entry_sort_order'] = $this->language->get('entry_sort_order');
					
		$this->data['button_save'] = $this->language->get('button_save');
		$this->data['button_cancel'] = $this->language->get('button_cancel');
 
		$this->data['tab_general'] = $this->language->get('tab_general');

 		if (isset($this->error['warning'])) {
			$this->data['error_warning'] = $this->error['warning'];
		} else {
			$this->data['error_warning'] = '';
		}

   		$this->document->breadcrumbs = array();

   		$this->document->breadcrumbs[] = array(
       		'href'      => Url::createAdminUrl('common/home'),
       		'text'      => $this->language->get('text_home'),
      		'separator' => false
   		);

   		$this->document->breadcrumbs[] = array(
       		'href'      => Url::createAdminUrl('extension/total'),
       		'text'      => $this->language->get('text_total'),
      		'separator' => ' :: '
   		);
		
   		$this->document->breadcrumbs[] = array(
       		'href'      => Url::createAdminUrl('total/shipping'),
       		'text'      => $this->language->get('heading_title'),
      		'separator' => ' :: '
   		);
		
		$this->data['action'] = Url::createAdminUrl('total/shipping');
		
		$this->data['cancel'] = Url::createAdminUrl('extension/total');

		if (isset($this->request->post['shipping_status'])) {
			$this->data['shipping_status'] = $this->request->post['shipping_status'];
		} else {
			$this->data['shipping_status'] = $this->config->get('shipping_status');
		}

		if (isset($this->request->post['shipping_sort_order'])) {
			$this->data['shipping_sort_order'] = $this->request->post['shipping_sort_order'];
		} else {
			$this->data['shipping_sort_order'] = $this->config->get('shipping_sort_order');
		}
																				
		$this->template = 'total/shipping.tpl';
		$this->children = array(
			'common/header',	
			'common/footer'	
		);
		
		$this->response->setOutput($this->render(true), $this->config->get('config_compression'));
	}

	private function validate() {
		if (!$this->user->hasPermission('modify', 'total/shipping')) {
			$this->error['warning'] = $this->language->get('error_permission');
		}
		
		if (!$this->error) {
			return true;
		} else {
			return false;
		}	
	}
}
