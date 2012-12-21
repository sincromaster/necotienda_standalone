<?php  
/**
 * ControllerStoreDownload
 * 
 * @package NecoTienda powered by opencart
 * @author Yosiet Serga
 * @copyright Inversiones Necoyoad, C.A.
 * @version 1.0.0
 * @access public
 * @see Controller
 */
class ControllerStoreDownload extends Controller {  
	private $error = array();
   
  	/**
  	 * ControllerStoreDownload::index()
     * 
  	 * @see Load
     * @see Document
     * @see Language
     * @see getList
  	 * @return void
  	 */
  	public function index() {
    	$this->document->title = $this->language->get('heading_title');
    	$this->getList();
  	}
  	        
  	/**
  	 * ControllerStoreDownload::insert()
  	 * 
  	 * @see Load
     * @see Document
     * @see Language
     * @see Model
     * @see getForm
  	 * @return void
  	 */
  	public function insert() {
    	$this->document->title = $this->language->get('heading_title');
		if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validateForm()) {
			$data = array();
			
			if (is_uploaded_file($this->request->files['download']['tmp_name'])) {
				$filename = $this->request->files['download']['name'] . '.' . md5(rand());
				
				move_uploaded_file($this->request->files['download']['tmp_name'], DIR_DOWNLOAD . $filename);

				if (file_exists(DIR_DOWNLOAD . $filename)) {
					$data['download'] = $filename;
					$data['mask'] = $this->request->files['download']['name'];
				}
			}

			$this->modelDownload->addDownload(array_merge($this->request->post, $data));
   	  		
			$this->session->set('success',$this->language->get('text_success'));
	  
			$url = array();
			
			if (isset($this->request->get['page'])) {
				$url['page'] = $this->request->get['page'];
			}

			if (isset($this->request->get['sort'])) {
				$url['sort'] = $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url['order'] = $this->request->get['order'];
			}
			
			$this->redirect(Url::createAdminUrl('store/download',$url));
		}
	
    	$this->getForm();
  	}

  	/**
  	 * ControllerStoreDownload::update()
  	 * 
  	 * @see Load
     * @see Document
     * @see Language
     * @see Model
     * @see getForm
  	 * @return void
  	 */
  	public function update() {
		$this->document->title = $this->language->get('heading_title');
		if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validateForm()) {
			$data = array();
			
			if (is_uploaded_file($this->request->files['download']['tmp_name'])) {
				$filename = $this->request->files['download']['name'] . '.' . md5(rand());
				
				move_uploaded_file($this->request->files['download']['tmp_name'], DIR_DOWNLOAD . $filename);

				if (file_exists(DIR_DOWNLOAD . $filename)) {
					$data['download'] = $filename;
					$data['mask'] = $this->request->files['download']['name'];
				}
			}
			
			$this->modelDownload->editDownload($this->request->get['download_id'], array_merge($this->request->post, $data));
	  		
			$this->session->set('success',$this->language->get('text_success'));
	      
			$url = array();
			
			if (isset($this->request->get['page'])) {
				$url['page'] = $this->request->get['page'];
			}

			if (isset($this->request->get['sort'])) {
				$url['sort'] = $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url['order'] = $this->request->get['order'];
			}
			
			$this->redirect(Url::createAdminUrl('store/download',$url));
		}
		
    	$this->getForm();
  	}

  	/**
  	 * ControllerStoreDownload::delete()
  	 * 
  	 * @see Load
     * @see Document
     * @see Language
     * @see Model
     * @see Session
     * @see Redirect
     * @see getList
  	 * @return void
  	 */
  	public function delete() {
    	$this->document->title = $this->language->get('heading_title');
    	if (isset($this->request->post['selected']) && $this->validateDelete()) {	  
			foreach ($this->request->post['selected'] as $download_id) {
				$this->modelDownload->deleteDownload($download_id);
			}
			
			$this->session->set('success',$this->language->get('text_success'));

			$url = array();
			
			if (isset($this->request->get['page'])) {
				$url['page'] = $this->request->get['page'];
			}

			if (isset($this->request->get['sort'])) {
				$url['sort'] = $this->request->get['sort'];
			}

			if (isset($this->request->get['order'])) {
				$url['order'] = $this->request->get['order'];
			}
			
			$this->redirect(Url::createAdminUrl('store/download',$url));
    	}

    	$this->getList();
  	}
    
  	/**
  	 * ControllerStoreDownload::getList()
  	 * 
  	 * @see Load
     * @see Document
     * @see Language
     * @see Model
     * @see Session
     * @see Redirect
     * @see Pagination
  	 * @return void
  	 */
  	private function getList() {
  		$this->document->breadcrumbs = array();

   		$this->document->breadcrumbs[] = array(
       		'href'      => Url::createAdminUrl('common/home'),
       		'text'      => $this->language->get('text_home'),
      		'separator' => false
   		);

   		$this->document->breadcrumbs[] = array(
       		'href'      => Url::createAdminUrl('store/download',$url),
       		'text'      => $this->language->get('heading_title'),
      		'separator' => ' :: '
   		);
							
		$this->data['insert'] = Url::createAdminUrl('store/download/insert',$url);
		$this->data['delete'] = Url::createAdminUrl('store/download/delete',$url);	

		$this->data['heading_title']      = $this->language->get('heading_title');
		$this->data['button_insert']      = $this->language->get('button_insert');
		$this->data['button_delete']      = $this->language->get('button_delete');
 
 		$this->data['error_warning'] = isset($this->error['warning']) ? $this->error['warning'] : '';
 		$this->data['success'] = $this->session->has('success') ? $this->session->get('success') : '';
        $this->session->clear('success');
		
        // SCRIPTS
        $scripts[] = array('id'=>'downloadList','method'=>'function','script'=>
            "function activate(e) {
                $.getJSON('". Url::createAdminUrl("store/download/activate") ."',{
                    id:e
                },function(data){
                    if (data > 0) {
                        $('#img_' + e).attr('src','image/good.png');
                    } else {
                        $('#img_' + e).attr('src','image/minus.png');
                    }
                });
            }
            function borrar() {
                $('#gridWrapper').html('<img src=\"image/nt_loader.gif\" alt=\"Cargando...\" />');
                $.post('". Url::createAdminUrl("store/download/delete") ."',$('#formGrid').serialize(),function(){
                    $('#gridWrapper').load('". Url::createAdminUrl("store/download/grid") ."');
                });
            } 
            function eliminar(e) {    
                $('#tr_' + e).hide();
                if (confirm('�Desea eliminar este objeto?')) {
                	$.getJSON('". Url::createAdminUrl("store/download/eliminar") ."',{
                            id:e
                        },
                        function(data) {
                            if (data > 0) {
                                $('#tr_' + e).remove();
                            } else {
                                alert('No se pudo eliminar el objeto, posiblemente tenga otros objetos relacionados');
                                $('#tr_' + e).show().effect('shake', { times:3 }, 300);;
                            }
                	});
                }
             }");
        $scripts[] = array('id'=>'sortable','method'=>'ready','script'=>
            "$('#gridWrapper').load('". Url::createAdminUrl("store/download/grid") ."',function(e){
                $('#gridPreloader').hide();
                $('#list tbody').sortable({
                    opacity: 0.6, 
                    cursor: 'move',
                    handle: '.move',
                    update: function() {
                        $.ajax({
                            'type':'post',
                            'dateType':'json',
                            'url':'". Url::createAdminUrl("store/download/sortable") ."',
                            'data': $(this).sortable('serialize'),
                            'success': function(data) {
                                if (data > 0) {
                                    var msj = '<div class=\"messagesuccess\">Se han ordenado los objetos correctamente</div>';
                                } else {
                                    var msj = '<div class=\"messagewarning\">Hubo un error al intentar ordenar los objetos, por favor intente m&aacute;s tarde</div>';
                                }
                                $('#msg').fadeIn().append(msj).delay(3600).fadeOut();
                            }
                        });
                    }
                }).disableSelection();
                $('.move').css('cursor','move');
            });
                
            $('#formFilter').ntForm({
                lockButton:false,
                ajax:true,
                type:'get',
                dataType:'html',
                url:'". Url::createAdminUrl("store/download/grid") ."',
                beforeSend:function(){
                    $('#gridWrapper').hide();
                    $('#gridPreloader').show();
                },
                success:function(data){
                    $('#gridPreloader').hide();
                    $('#gridWrapper').html(data).show();
                }
            });");
             
        $this->scripts = array_merge($this->scripts,$scripts);
        
		$this->template = 'store/download_list.tpl';
		$this->children = array(
			'common/header',	
			'common/footer'	
		);
		
		$this->response->setOutput($this->render(true), $this->config->get('config_compression'));
  	}
  
  	/**
  	 * ControllerStoreDownload::grid()
  	 * 
  	 * @see Load
     * @see Document
     * @see Language
     * @see Model
     * @see Session
     * @see Redirect
     * @see Pagination
  	 * @return void
  	 */
  	public function grid() {
  	 
		$filter_name = isset($this->request->get['filter_name']) ? $this->request->get['filter_name'] : null;
		$filter_product = isset($this->request->get['filter_product']) ? $this->request->get['filter_product'] : null;
		$filter_date_start = isset($this->request->get['filter_date_start']) ? $this->request->get['filter_date_start'] : null;
		$filter_date_end = isset($this->request->get['filter_date_end']) ? $this->request->get['filter_date_end'] : null;
		$page = isset($this->request->get['page']) ? $this->request->get['page'] : 1;
		$sort = isset($this->request->get['sort']) ? $this->request->get['sort'] : 'name';
		$order = isset($this->request->get['order']) ? $this->request->get['order'] : 'ASC';
		
        $url = array();
        
		if (isset($this->request->get['filter_name'])) { $url['filter_name'] = $this->request->get['filter_name']; }
		if (isset($this->request->get['filter_product'])) { $url['filter_product'] = $this->request->get['filter_product']; }
		if (isset($this->request->get['filter_date_start'])) { $url['filter_date_start'] = $this->request->get['filter_date_start']; }
		if (isset($this->request->get['filter_date_end'])) { $url['filter_date_end'] = $this->request->get['filter_date_end']; }
		if (isset($this->request->get['page'])) { $url['page'] = $this->request->get['page']; }
		if (isset($this->request->get['sort'])) { $url['sort'] = $this->request->get['sort']; }
		if (isset($this->request->get['order'])) { $url['order'] = $this->request->get['order']; }
		
		$this->data['downloads'] = array();

		$data = array(
			'filter_name'	  => $filter_name, 
			'filter_product'  => $filter_product,
			'filter_date_start'=> $filter_date_start, 
			'filter_date_end' => $filter_date_end, 
			'sort'  => $sort,
			'order' => $order,
			'start' => ($page - 1) * $this->config->get('config_admin_limit'),
			'limit' => $this->config->get('config_admin_limit')
		);
		
		$download_total = $this->modelDownload->getTotalDownloads();
		$results = $this->modelDownload->getDownloads($data);
 
    	foreach ($results as $result) {
			
			$action = array(
                'activate'  => array(
                        'text'  => $this->language->get('text_activate'),
                        'href'  =>Url::createAdminUrl('store/download/activate',array_merge(array('download_id'=>$result['download_id']),$url)),
                        'img'   => 'good.png'
                ),
                'edit'      => array(
                        'text'  => $this->language->get('text_edit'),
                        'href'  =>Url::createAdminUrl('store/download/update',array_merge(array('download_id'=>$result['download_id']),$url)),
                        'img'   => 'edit.png'
                ),
                'delete'    => array(
                        'text'  => $this->language->get('text_delete'),
                        'href'  =>Url::createAdminUrl('store/download/delete',array_merge(array('download_id'=>$result['download_id']),$url)),
                        'img'   => 'delete.png'
                )
            );	
						
			$this->data['downloads'][] = array(
				'download_id' => $result['download_id'],
				'name'        => $result['name'],
				'remaining'   => $result['remaining'],
				'selected'    => isset($this->request->post['selected']) && in_array($result['download_id'], $this->request->post['selected']),
				'action'      => $action
			);
		}	
	
		$this->data['text_no_results']    = $this->language->get('text_no_results');
		$this->data['column_name']        = $this->language->get('column_name');
		$this->data['column_remaining']   = $this->language->get('column_remaining');
		$this->data['column_action']      = $this->language->get('column_action');	

		$this->data['sort_name'] = Url::createAdminUrl('store/download/grid',array_merge(array('sort'=>'dd.name'),$url));
		$this->data['sort_remaining'] = Url::createAdminUrl('store/download/grid',array_merge(array('sort'=>'d.remaining'),$url));

		$pagination = new Pagination();
		$pagination->total = $download_total;
		$pagination->page = $page;
		$pagination->limit = $this->config->get('config_admin_limit');
		$pagination->text = $this->language->get('text_pagination');
		$pagination->url = Url::createAdminUrl('store/download/grid',array_merge($url,array('page'=>'{page}')));

		$this->data['pagination'] = $pagination->render();
		$this->data['sort'] = $sort;
		$this->data['order'] = $order;
		
		$this->template = 'store/download_grid.tpl';
		$this->response->setOutput($this->render(true), $this->config->get('config_compression'));
  	}
  
  	/**
  	 * ControllerStoreDownload::getForm()
  	 * 
  	 * @see Load
     * @see Document
     * @see Language
     * @see Model
     * @see Session
     * @see Redirect
     * @see Pagination
  	 * @return void
  	 */
  	private function getForm() {
    	$this->data['heading_title']   = $this->language->get('heading_title');
    	$this->data['entry_name']      = $this->language->get('entry_name');
    	$this->data['entry_filename']  = $this->language->get('entry_filename');
    	$this->data['entry_remaining'] = $this->language->get('entry_remaining');
    	$this->data['entry_update']    = $this->language->get('entry_update');
    	$this->data['help_name']       = $this->language->get('help_name');
    	$this->data['help_filename']   = $this->language->get('help_filename');
    	$this->data['help_remaining']  = $this->language->get('help_remaining');
    	$this->data['help_update']     = $this->language->get('help_update');
    	$this->data['button_save']     = $this->language->get('button_save');
    	$this->data['button_cancel']   = $this->language->get('button_cancel');
  
 		$this->data['error_warning'] = isset($this->error['warning']) ? $this->error['warning'] : '';
 		$this->data['error_name'] = isset($this->error['name']) ? $this->error['name'] : '';
 		$this->data['error_download'] = isset($this->error['download']) ? $this->error['download'] : '';
        
        $url = array();
		if (isset($this->request->get['page'])) {
			$url['page'] = $this->request->get['page'];
		}
		
		if (isset($this->request->get['sort'])) {
			$url['sort'] = $this->request->get['sort'];
		}
		
		if (isset($this->request->get['order'])) {
			$url['order'] = $this->request->get['order'];
		}
		
  		$this->document->breadcrumbs = array();

   		$this->document->breadcrumbs[] = array(
       		'href'      => Url::createAdminUrl('common/home'),
       		'text'      => $this->language->get('text_home'),
      		'separator' => false
   		);

   		$this->document->breadcrumbs[] = array(
       		'href'      => Url::createAdminUrl('store/download',$url),
       		'text'      => $this->language->get('heading_title'),
      		'separator' => ' :: '
   		);
							
		if (!isset($this->request->get['download_id'])) {
			$this->data['action'] = Url::createAdminUrl('store/download/insert',$url);
		} else {
			$this->data['action'] = Url::createAdminUrl('store/download/update',array_merge($url,array('download_id'=>$this->request->get['download_id'])));
		}
		
		$this->data['cancel'] = Url::createAdminUrl('store/download',$url);
 		
		$this->data['languages'] = $this->modelLanguage->getLanguages();

    	if (isset($this->request->get['download_id']) && ($this->request->server['REQUEST_METHOD'] != 'POST')) {
			$download_info = $this->modelDownload->getDownload($this->request->get['download_id']);
    	}
        
        $this->setvar("filename",$download_info);
        $this->setvar("remaining",$download_info,1);
        $this->setvar("update",$download_info,false);
        
    	$this->data['show_update'] = isset($this->request->get['download_id']) ? true : false;

		if (isset($this->request->post['download_description'])) {
			$this->data['download_description'] = $this->request->post['download_description'];
		} elseif (isset($this->request->get['download_id'])) {
			$this->data['download_description'] = $this->modelDownload->getDownloadDescriptions($this->request->get['download_id']);
		} else {
			$this->data['download_description'] = array();
		}   	
		
		$this->template = 'store/download_form.tpl';
		$this->children = array(
			'common/header',	
			'common/footer'	
		);
		
		$this->response->setOutput($this->render(true), $this->config->get('config_compression'));	
  	}

  	/**
  	 * ControllerStoreDownload::validateForm()
  	 * 
     * @see User
     * @see Request
     * @see Language
  	 * @return bool
  	 */
  	private function validateForm() { 
    	if (!$this->user->hasPermission('modify', 'store/download')) {
      		$this->error['warning'] = $this->language->get('error_permission');
    	}
        //TODO: Colocar validaciones propias
	
    	foreach ($this->request->post['download_description'] as $language_id => $value) {
      		if ((strlen(utf8_decode($value['name'])) < 3) || (strlen(utf8_decode($value['name']))> 64)) {
        		$this->error['name'][$language_id] = $this->language->get('error_name');
      		}
    	}	

		if ($this->request->files['download']['name']) {
			if ((strlen(utf8_decode($this->request->files['download']['name'])) < 3) || (strlen(utf8_decode($this->request->files['download']['name']))> 128)) {
        		$this->error['download'] = $this->language->get('error_filename');
	  		}	  	
			
			if (substr(strrchr($this->request->files['download']['name'], '.'), 1) == 'php') {
       	   		$this->error['download'] = $this->language->get('error_filetype');
       		}	
						
			if ($this->request->files['download']['error'] != UPLOAD_ERR_OK) {
				$this->error['warning'] = $this->language->get('error_upload_' . $this->request->files['download']['error']);
			}
		}
		
		if (!$this->error) {
	  		return true;
		} else {
	  		return false;
		}
  	}

  	/**
  	 * ControllerStoreDownload::validateDelete()
  	 * 
     * @see User
     * @see Request
     * @see Language
  	 * @return bool
  	 */
  	private function validateDelete() {
    	if (!$this->user->hasPermission('modify', 'store/download')) {
      		$this->error['warning'] = $this->language->get('error_permission');
    	}	
		
		$this->load->auto('store/product');

		foreach ($this->request->post['selected'] as $download_id) {
  			$product_total = $this->modelProduct->getTotalProductsByDownloadId($download_id);
    
			if ($product_total) {
	  			$this->error['warning'] = sprintf($this->language->get('error_product'), $product_total);	
			}	
		}	
			  	  	 
		if (!$this->error) {
	  		return true;
		} else {
	  		return false;
		} 
  	}
}