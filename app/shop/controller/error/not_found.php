<?php   
class ControllerErrorNotFound extends Controller {
	public function index() {		
		$this->response->addHeader($this->request->server['SERVER_PROTOCOL'] . '/1.1 404 Not Found');

		$this->language->load('error/not_found');
		
		$this->document->title = $this->language->get('heading_title');
		
		$this->document->breadcrumbs = array();
 
      	$this->document->breadcrumbs[] = array(
        	'href'      => HTTP_HOME . 'index.php?r=common/home',
        	'text'      => $this->language->get('text_home'),
        	'separator' => false
      	);		
		
		if (isset($this->request->get['r'])) {
       		$this->document->breadcrumbs[] = array(
        		'href'      => HTTP_HOME . 'index.php?r=' . $this->request->get['r'],
        		'text'      => $this->language->get('text_error'),
        		'separator' => $this->language->get('text_separator')
      		);	   	
		}
		
		$this->data['heading_title'] = $this->language->get('heading_title');
		
		$this->data['text_error'] = $this->language->get('text_error');
		
		$this->data['button_continue'] = $this->language->get('button_continue');
		
		$this->data['continue'] = HTTP_HOME . 'index.php?r=common/home';
		
		if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/error/not_found.tpl')) {
			$this->template = $this->config->get('config_template') . '/error/not_found.tpl';
		} else {
			$this->template = 'default/error/not_found.tpl';
		}
		
		$this->children = array(
			'common/column_right',
			'common/footer',
			'common/column_left',
			'common/header'
		);
		
		$this->response->setOutput($this->render(true), $this->config->get('config_compression'));		
  	}
}
