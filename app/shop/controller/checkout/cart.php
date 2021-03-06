<?php

class ControllerCheckoutCart extends Controller {

    private $error = array();

    public function index() {
        $Url = new Url($this->registry);
        if ($this->config->get('config_store_mode') != 'store') {
            $this->redirect(HTTP_HOME);
        }
        $this->language->load('account/register');
        $this->language->load('checkout/cart');
        $this->load->model('localisation/country');
        $this->load->library('image');

        $this->session->set('redirect', Url::createUrl('checkout/cart'));

        if ($this->request->server['REQUEST_METHOD'] == 'GET' && isset($this->request->get['product_id'])) {

            if (isset($this->request->get['option'])) {
                $option = $this->request->get['option'];
            } else {
                $option = array();
            }

            if (isset($this->request->get['quantity'])) {
                $quantity = $this->request->get['quantity'];
            } else {
                $quantity = 1;
            }

            $this->session->clear('shipping_methods');
            $this->session->clear('shipping_method');
            $this->session->clear('payment_methods');
            $this->session->clear('payment_method');

            $this->cart->add($this->request->get['product_id'], $quantity, $option);
            $this->redirect(Url::createUrl("checkout/cart"));
        }

        if ($this->request->server['REQUEST_METHOD'] == 'POST') {

            if (isset($this->request->post['quantity'])) {
                if (!is_array($this->request->post['quantity'])) {
                    if (isset($this->request->post['option'])) {
                        $option = $this->request->post['option'];
                    } else {
                        $option = array();
                    }

                    $this->cart->add($this->request->post['product_id'], $this->request->post['quantity'], $option);
                } else {
                    foreach ($this->request->post['quantity'] as $key => $value) {
                        $this->cart->update($key, $value);
                    }
                }

                $this->session->clear('shipping_methods');
                $this->session->clear('shipping_method');
                $this->session->clear('payment_methods');
                $this->session->clear('payment_method');
            }

            if (isset($this->request->post['redirect'])) {
                $this->session->set('redirect', $this->request->post['redirect']);
            }

            $this->redirect(Url::createUrl("checkout/cart"));
        }

        $this->document->title = $this->data['heading_title'] = $this->language->get('heading_title');

        $this->document->breadcrumbs = array();
        $this->document->breadcrumbs[] = array(
            'href' => Url::createUrl("common/home"),
            'text' => $this->language->get('text_home'),
            'separator' => false
        );

        $this->document->breadcrumbs[] = array(
            'href' => Url::createUrl("checkout/cart"),
            'text' => $this->language->get('text_basket'),
            'separator' => $this->language->get('text_separator')
        );
        $this->data['breadcrumbs'] = $this->document->breadcrumbs;
        if ($this->cart->hasProducts()) {
            if (isset($this->error['warning'])) {
                $this->data['error_warning'] = $this->error['warning'];
            } elseif (!$this->cart->hasStock() && !$this->config->get('config_stock_checkout')) {
                $this->data['error_warning'] = $this->language->get('error_stock');
            } else {
                $this->data['error_warning'] = '';
            }

            $this->data['action'] = Url::createUrl('checkout/confirm');

            $this->data['products'] = array();

            foreach ($this->cart->getProducts() as $result) {
                $option_data = array();

                foreach ($result['option'] as $option) {
                    $option_data[] = array(
                        'name' => $option['name'],
                        'value' => $option['value']
                    );
                }

                if ($result['image']) {
                    $image = $result['image'];
                } else {
                    $image = 'no_image.jpg';
                }

                $this->data['products'][] = array(
                    'key' => $result['key'],
                    'product_id' => $result['key'],
                    'name' => $result['name'],
                    'model' => $result['model'],
                    'thumb' => NTImage::resizeAndSave($image, $this->config->get('config_image_cart_width'), $this->config->get('config_image_cart_height')),
                    'option' => $option_data,
                    'attributes' => $result['attributes'],
                    'quantity' => $result['quantity'],
                    'stock' => $result['stock'],
                    'price' => $this->currency->format($this->tax->calculate($result['price'], $result['tax_class_id'], $this->config->get('config_tax'))),
                    'total' => $this->currency->format($this->tax->calculate($result['total'], $result['tax_class_id'], $this->config->get('config_tax'))),
                    'href' => Url::createUrl("store/product", array("product_id" => $result['product_id']))
                );
            }

            if (!$this->config->get('config_customer_price') || $this->customer->isLogged()) {
                $this->data['display_price'] = true;
            } else {
                $this->data['display_price'] = false;
            }

            if ($this->config->get('config_cart_weight')) {
                $this->data['weight'] = $this->weight->format($this->cart->getWeight(), $this->config->get('config_weight_class'));
            } else {
                $this->data['weight'] = false;
            }

            $total_data = array();
            $total = 0;
            $taxes = $this->cart->getTaxes();

            $this->load->model('checkout/extension');

            $sort_order = array();

            $results = $this->modelExtension->getExtensions('total');
            foreach ($results as $key => $value) {
                $sort_order[$key] = $this->config->get($value['key'] . '_sort_order');
            }

            array_multisort($sort_order, SORT_ASC, $results);
            foreach ($results as $result) {
                $this->load->model('total/' . $result['key']);

                $this->{'model_total_' . $result['key']}->getTotal($total_data, $total, $taxes);
            }

            $sort_order = array();
            foreach ($total_data as $key => $value) {
                $sort_order[$key] = $value['sort_order'];
            }

            array_multisort($sort_order, SORT_ASC, $total_data);
            $this->data['totals'] = $total_data;

            if ($this->session->has('message')) {
                $this->data['message'] = $this->session->get('message');
                $this->session->clear('message');
            }

            $this->data['countries'] = $this->modelCountry->getCountries();

            if ($this->customer->isLogged()) {
                $this->data['email'] = $this->customer->getEmail();
                $this->data['firstname'] = $this->customer->getFirstName();
                $this->data['lastname'] = $this->customer->getLastName();
                $this->data['company'] = $this->customer->getCompany();
                $this->data['telephone'] = $this->customer->getTelephone();
                $this->data['rif_type'] = substr($this->customer->getRif(), 0, 1);
                $this->data['rif'] = substr($this->customer->getRif(), 1);
                $this->data['riff'] = $this->customer->getRif();
                $this->data['isLogged'] = $this->customer->isLogged();

                $this->load->auto('account/address');
                $address = $this->modelAddress->getAddress($this->customer->getAddressId());
                if ($address) {
                    $this->data['payment_country_id'] = $address['country_id'];
                    $this->data['payment_zone_id'] = $address['zone_id'];
                    $this->data['payment_city'] = $address['city'];
                    $this->data['payment_street'] = $address['street'];
                    $this->data['payment_address_1'] = $address['address_1'];
                    $this->data['payment_postcode'] = $address['postcode'];
                    $this->data['payment_address'] = $address['address_1'] . " " . $address['street'] . ", " . $address['city'] . ". " . $address['zone'] . " - " . $address['country'];
                    $this->session->set('payment_address_id', $this->customer->getAddressId());


                    $this->data['shipping_country_id'] = $address['country_id'];
                    $this->data['shipping_zone_id'] = $address['zone_id'];
                    $this->data['shipping_city'] = $address['city'];
                    $this->data['shipping_street'] = $address['street'];
                    $this->data['shipping_address_1'] = $address['address_1'];
                    $this->data['shipping_postcode'] = $address['postcode'];
                    $this->data['shipping_address'] = $address['address_1'] . " " . $address['street'] . ", " . $address['city'] . ". " . $address['zone'] . " - " . $address['country'];
                    $this->session->set('shipping_address_id', $this->customer->getAddressId());
                } else {
                    $this->data['no_address'] = true;
                }

                $this->tax->setZone($address['country_id'], $address['zone_id']);
            } else {
                $this->tax->setZone($this->config->get('config_country_id'), $this->config->get('config_zone_id'));
            }

            /*             * ****************** shipping methods ********************** */
            $quote_data = array();
            $results = $this->modelExtension->getExtensions('shipping');
            foreach ($results as $result) {
                $this->load->model('shipping/' . $result['key']);

                $quote = $this->{'model_shipping_' . $result['key']}->getQuote($address);

                if ($quote) {
                    $quote_data[$result['key']] = array(
                        'title' => $quote['title'],
                        'quote' => $quote['quote'],
                        'sort_order' => $quote['sort_order'],
                        'error' => $quote['error']
                    );
                }
            }

            $sort_order = array();

            foreach ($quote_data as $key => $value) {
                $sort_order[$key] = $value['sort_order'];
            }

            array_multisort($sort_order, SORT_ASC, $quote_data);

            $this->session->set('shipping_methods', $quote_data);
            $this->data['shipping_methods'] = $quote_data;

            $script = "";
            // SCRIPTS
            if (!$this->customer->isLogged()) {
                $scripts[] = array('id' => 'custom_0_Cart', 'method' => 'ready', 'script' =>
                    "$('#email').on('change',function(e){
                	$.post('" . Url::createUrl("account/register/checkemail") . "', {email: $(this).val()},
                  		function(response){
                  		    $('#tempLink').remove();
                  		    var data = $.parseJSON(response);
                			if (typeof data.error != 'undefined') {
                				$('#email').removeClass('neco-input-success').addClass('neco-input-error');
                                $('#email').parent().find('.neco-form-error').attr({'title':\"Este email ya existe!\"});
                                $('#email').closest('.property').after('<p id=\"tempLink\" class=\"error\">'+ data.msg +'</p>');
                			} else {
                				$('#email').addClass('neco-input-success').removeClass('neco-input-error');
                                $('#email').parent().find('.neco-form-error').attr({'title':\"No hay errores en este campo\"});
                                $('#tempLink').remove();
                			}
                  	});
                });");

                //TODO: cargar los nombres de los paises y estados en la tabla de confirmacion
                $script = "if (!$('#email').attr('disabled')) { 
                    $.post('" . Url::createUrl("account/register/register") . "', {
                        email: $('#email').val(),
                        firstname: $('#firstname').val(),
                        lastname: $('#lastname').val(),
                        company: $('#company').val(),
                        rif: $('#rif').val(),
                        telephone: $('#telephone').val(),
                        country_id: $('#payment_country_id').val(),
                        zone_id: $('#payment_zone_id').val(),
                        city: $('#payment_city').val(),
                        street: $('#payment_street').val(),
                        postcode: $('#payment_postcode').val(),
                        address_1: $('#payment_address_1').val(),
                        session_address_var: 'shipping_address_id'
                    }).done(function(data) {
                        $.post('" . Url::createUrl("checkout/cart/islogged") . "')
                        .done(function(data){
                            if (data) { 
                                $('#email').attr('disabled','disabled');
                                $('#firstname').attr('disabled','disabled');
                                $('#lastname').attr('disabled','disabled');
                                $('#company').attr('disabled','disabled');
                                $('#rif').attr('disabled','disabled');
                                $('#telephone').attr('disabled','disabled');
                                
                                $('#shipping_country_id').val( $('#payment_country_id').val() );
                                $('#shipping_zone_id').load('" . Url::createUrl("account/register/zone") . "&country_id='+ $('#payment_country_id').val() +'&zone_id='+ $('#payment_zone_id').val());
                                $('#shipping_street').val( $('#payment_street').val() );
                                $('#shipping_city').val( $('#payment_city').val() );
                                $('#shipping_postcode').val( $('#payment_postcode').val() );
                                $('#shipping_address_1').val( $('#payment_address_1').val() );
                                
                                $('#confirmCompany').text($('#company').val());
                                $('#confirmRif').text($('#rif').val());
                                
                               var confirmPaymentAddress = $('#payment_address_1').val() +' '+ $('#payment_street').val() +', '+ $('#payment_city').val() +'.';
                                $('#confirmPaymentAddress').text(confirmPaymentAddress);
                                $('#confirmShippingAddress').text(confirmPaymentAddress);
                            }
                        });
                    });
                    }";
                $scriptShippingAddress = "$.post('" . Url::createUrl("account/register/addAddress") . "', {
                        country_id: $('#shipping_country_id').val(),
                        zone_id: $('#shipping_zone_id').val(),
                        street: $('#shipping_street').val(),
                        city: $('#shipping_city').val(),
                        postcode: $('#shipping_postcode').val(),
                        address_1: $('#shipping_address_1').val(),
                        session_address_var: 'shipping_address_id'
                    })
                    .done(function(data) {
                        hasAddress = 1;
                        var confirmShippingAddress = $('#shipping_address_1').val()  +' '+ $('#payment_street').val() +', '+ $('#shipping_city').val() +'.';
                        $('#confirmShippingAddress').text(confirmShippingAddress);
                    });";
            } elseif ($this->customer->isLogged() && !$this->data['shipping_country_id']) {
                $script = "$.post('" . Url::createUrl("account/register/addAddress") . "', {
                        country_id: $('#shipping_country_id').val(),
                        zone_id: $('#shipping_zone_id').val(),
                        street: $('#shipping_street').val(),
                        city: $('#shipping_city').val(),
                        postcode: $('#shipping_postcode').val(),
                        address_1: $('#shipping_address_1').val(),
                        session_address_var: 'shipping_address_id'
                    })
                    .done(function(data) {
                        hasAddress = 1;
                        $('#payment_country_id').val($('#shipping_country_id').val());
                        $('#payment_zone_id').val($('#shipping_zone_id').val());
                        $('#payment_street').val($('#shipping_street').val());
                        $('#payment_city').val($('#shipping_city').val());
                        $('#payment_postcode').val($('#shipping_postcode').val());
                        $('#payment_address_1').val($('#shipping_address_1').val());
                        
                        var confirmShippingAddress = $('#shipping_address_1').val() +', '+ $('#shipping_city').val() +'.';
                        
                        $('#confirmShippingAddress').text(confirmShippingAddress);
                        $('#confirmPaymentAddress').text(confirmShippingAddress);
                    });";
            }

            $scripts[] = array('id' => 'scriptsCart', 'method' => 'ready', 'script' =>
                "$('#orderForm').ntForm({
                lockButton: false,
                cancelButton: false,
                submitButton: false
            });
            
            $('select[name=\'payment_zone_id\']').load('" . Url::createUrl("account/register/zone") . "&country_id=" . $address['country_id'] . "&zone_id=" . $address['zone_id'] . "');
            $('select[name=\'shipping_zone_id\']').load('" . Url::createUrl("account/register/zone") . "&country_id=" . $address['country_id'] . "&zone_id=" . $address['zone_id'] . "');
            
            var shippingMethods = " . (int) $this->data['shipping_methods'] . ";
            var isLogged = " . (int) $this->customer->isLogged() . ";
            var hasAddress = " . (int) $this->data['shipping_country_id'] . ";
            $('#contentWrapper').ntWizard({
                next:function(data) {
                    var stepId = $('.neco-wizard-step-active').attr('id');
                    $(data.element).find('.neco-wizard-next').text('Siguiente');
                    $(data.element).find('.neco-wizard-prev').show();
                    
                    if (stepId == 'necoWizardStep_1') {
                        $(this).find('.neco-wizard-next').text('" . $this->data['button_checkout'] . "');
                        return false;
                    }
                            
                    
                    if (stepId == 'necoWizardStep_2') {
                        var error = false;
                        
                        $(data.element).find('.neco-wizard-prev').show();
                        
                        /* si hay metodos de envios configurados y debe seleccionar uno */
                        if (shippingMethods && isLogged) {
                            var isChecked = $('input[name=shipping_method]:checked').val();
                                
                            if (!isChecked) {
                                error = true;
                                alert('Debes seleccionar un m\u00E9todo de env\u00EDo');
                            }
                        }
                        
                        if (!isLogged) {
                            $('#email,#firstname,#lastname,#company,#rif,#telephone,#city,#postcode,#address_1').each(function(e){
                                var value    = !!$(this).val();
                                var required = $(this).attr('required');
                                var type     = $(this).attr('type');
                                var top      = $(this).offset().top;
                                
                                if (!value) {
                                    error = true;
                                    $(\"#tempError\").remove();
                                    msg = $(document.createElement('p')).attr('id','tempError').addClass('neco-submit-error').text('Debes rellenar todos los campos obligatorios identificados con asterisco (*)');
                                    $(this).removeClass('neco-input-success').addClass('neco-input-error')
                                        .parent()
                                        .find('.neco-form-error')
                                        .attr({'title':'Debes rellenar este campo con la informaci\u00F3n correspondiente'});
                                }
                                    
                                var pattern = new RegExp(/.[\"\\\/\{\}\[\]\+']/i);
                                if (pattern.test($(this).val()) && !error) {
                                    error = true;
                                    $(\"#tempError\").remove();
                                    msg = $(document.createElement('p')).attr('id','tempError').addClass('neco-submit-error').text('No se permiten ninguno de estos caracteres especiales [\"#$/\'+}{\u003C\u003E] en este formulario');
                                    $(this).removeClass('neco-input-success').addClass('neco-input-error')
                                        .parent()
                                        .find('.neco-form-error')
                                        .attr({'title':'No se permiten ninguno de estos caracteres especiales [\"#$&/?\'+}{\u003C\u003E] en este campo'});
                                        top = $(this).offset().top;
                                }
                                    
                                if (type == 'email' && $(this).val()=='@') {
                                    error = true;
                                    $(this).removeClass('neco-input-success').addClass('neco-input-error')
                                        .parent()
                                        .find('.neco-form-error')
                                        .attr({'title':'Debes ingresar una direcci\u00F3n de email v\u00E1lida'});
                                }
                                
                                if (type == 'email') {
                                    pattern = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,4})|(aero|coop|info|museum|name))$/i;
                                    $(this).on('change',function(event){
                                        err = checkPattern(pattern,$(this).val());
                                        if (!err) {
                                            $(this).removeClass('neco-input-success').addClass('neco-input-error');
                                            $(this).parent().find('.neco-form-error').attr({'title':\"Debes ingresar una direcci\u00F3n de email v\u00E1lida y que exista realmente\"});
                                            error = true;
                                        } else {
                                            $(this).parent().find('.neco-form-error').attr({'title':\"No hay errores en este campo\"});
                                            $(this).addClass('neco-input-success').removeClass('neco-input-error');
                                        }
                                    });
                                }
                                    
                                if (type == 'rif') {
                                    var pattern = /\b[JGVE]-[0-9]{8}-[0-9]{1}\b/i;
                                    $(this).on('change',function(event){
                                        err = checkPattern(pattern,$(this).val());
                                        if (!err) {
                                            $(this).parent().find('.neco-form-error').attr({'title':\"Debes ingresar un n\u00FAmero de C\u00E9dula o RIF v\u00E1lido para poder continuar\"});
                                            $(this).removeClass('neco-input-success').addClass('neco-input-error');
                                            error = true;
                                        } else {
                                            $(this).parent().find('.neco-form-error').attr({'title':\"No hay errores en este campo\"});
                                            $(this).addClass('neco-input-success').removeClass('neco-input-error');
                                        }
                                    });
                                }
                                    
                                if ($(this).hasClass('neco-input-error') && !error) {
                                    error = true;
                                    $(\"#tempError\").remove();
                                    msg = $(document.createElement('p')).attr('id','tempError').addClass('neco-submit-error').text('Hay errores en el formulario, por favor revise y corr\u00EDjalos todos para poder continuar');
                                }                        
                            });
                                
                            if (!error) { " . $script . " }
                        } else if (isLogged && !hasAddress) {
                            $('#shipping_country_id,#shipping_zone_id,#shipping_city,#shipping_street,#shipping_postcode,#shipping_address_1').each(function(e){
                                var value    = !!$(this).val();
                                var required = $(this).attr('required');
                                var type     = $(this).attr('type');
                                var top      = $(this).offset().top;
                                
                                if (!value) {
                                    error = true;
                                    $(\"#tempError\").remove();
                                    msg = $(document.createElement('p')).attr('id','tempError').addClass('neco-submit-error').text('Debes rellenar todos los campos obligatorios identificados con asterisco (*)');
                                    $(this).removeClass('neco-input-success').addClass('neco-input-error')
                                        .parent()
                                        .find('.neco-form-error')
                                        .attr({'title':'Debes rellenar este campo con la informaci\u00F3n correspondiente'});
                                }
                                
                                var pattern = new RegExp(/.[\"\\\/\{\}\[\]\+']/i);
                                if (pattern.test($(this).val()) && !error) {
                                    error = true;
                                    $(\"#tempError\").remove();
                                    msg = $(document.createElement('p')).attr('id','tempError').addClass('neco-submit-error').text('No se permiten ninguno de estos caracteres especiales [\"#$/\'+}{\u003C\u003E] en este formulario');
                                    $(this).removeClass('neco-input-success').addClass('neco-input-error')
                                        .parent()
                                        .find('.neco-form-error')
                                        .attr({'title':'No se permiten ninguno de estos caracteres especiales [\"#$&/?\'+}{\u003C\u003E] en este campo'});
                                    top = $(this).offset().top;
                                }
                                
                                if ($(this).hasClass('neco-input-error') && !error) {
                                    error = true;
                                    $(\"#tempError\").remove();
                                    msg = $(document.createElement('p')).attr('id','tempError').addClass('neco-submit-error').text('Hay errores en el formulario, por favor revise y corr\u00EDjalos todos para poder continuar');
                                }                        
                            });
                            
                            if (!error) { " . $script . " }
                                
                        } else if(isLogged && hasAddress && !shippingMethods && !error) {
                            $.post('" . Url::createUrl("checkout/confirm") . "&resp=json',
                                $('#orderForm').serialize(),
                                function(data) {
                                    data = $.parseJSON(data);
                                    location.href = '" . Url::createUrl("checkout/success") . "&order_id='+ data.order_id;
                                }
                            );
                        }
                        return error;
                    } 

                    if (stepId == 'necoWizardStep_3') {
                        var error = false;
                        
                        /* si hay metodos de envios configurados y debe seleccionar uno */
                        if (shippingMethods) {
                            var isChecked = $('input[name=shipping_method]:checked').val();
                                
                            if (!isChecked) {
                                error = true;
                                alert('Debes seleccionar un m\u00E9todo de env\u00EDo');
                            }
                        }
                        
                        if (isLogged === 0 || hasAddress === 0) {
                            $('#shipping_country_id,#shipping_zone_id,#shipping_city,#shipping_street,#shipping_postcode,#shipping_address_1').each(function(e){
                                var value    = !!$(this).val();
                                var required = $(this).attr('required');
                                var type     = $(this).attr('type');
                                var top      = $(this).offset().top;
                                
                                if (!value) {
                                    error = true;
                                    $(\"#tempError\").remove();
                                    msg = $(document.createElement('p')).attr('id','tempError').addClass('neco-submit-error').text('Debes rellenar todos los campos obligatorios identificados con asterisco (*)');
                                    $(this).removeClass('neco-input-success').addClass('neco-input-error')
                                        .parent()
                                        .find('.neco-form-error')
                                        .attr({'title':'Debes rellenar este campo con la informaci\u00F3n correspondiente'});
                                }
                                    
                                var pattern = new RegExp(/.[\"\\\/\{\}\[\]\+']/i);
                                if (pattern.test($(this).val()) && !error) {
                                    error = true;
                                    $(\"#tempError\").remove();
                                    msg = $(document.createElement('p')).attr('id','tempError').addClass('neco-submit-error').text('No se permiten ninguno de estos caracteres especiales [\"#$/\'+}{\u003C\u003E] en este formulario');
                                    $(this).removeClass('neco-input-success').addClass('neco-input-error')
                                        .parent()
                                        .find('.neco-form-error')
                                        .attr({'title':'No se permiten ninguno de estos caracteres especiales [\"#$&/?\'+}{\u003C\u003E] en este campo'});
                                        top = $(this).offset().top;
                                }
                                    
                                if ($(this).hasClass('neco-input-error') && !error) {
                                    error = true;
                                    $(\"#tempError\").remove();
                                    msg = $(document.createElement('p')).attr('id','tempError').addClass('neco-submit-error').text('Hay errores en el formulario, por favor revise y corr\u00EDjalos todos para poder continuar');
                                }                        
                            });
                            
                            if (!error) { " . $scriptShippingAddress . " }
                        } else if (!error) {
                            $.post('" . Url::createUrl("checkout/confirm") . "&resp=json',
                                $('#orderForm').serialize(),
                                function(data) {
                                    data = $.parseJSON(data);
                                    location.href = '" . Url::createUrl("checkout/success") . "&order_id='+ data.order_id;
                                }
                            );
                        }
                        return error;
                    }

                    console.log('iLogged', isLogged);
                    console.log('stepId', stepId);
                    console.log('error', error);
                    if (!error && (stepId == 'necoWizardStep_4')) {
                        var error = false;
                        $.post('" . Url::createUrl("checkout/confirm") . "&resp=json',
                            $('#orderForm').serialize())
                        .done(function(data) {
                            data = $.parseJSON(data);
                            location.href = '" . Url::createUrl("checkout/success") . "&order_id='+ data.order_id;
                        });
                        return error;
                    }
                },
                prev:function(data) {
                    var stepId = $('.neco-wizard-step-active').attr('id');
                    if (stepId == 'necoWizardStep_2') {
                        $('#contentWrapper').find('.neco-wizard-prev').hide();
                        $('#contentWrapper').find('.neco-wizard-next').text('Procesar Pedido');
                        $(this).find('.neco-wizard-next').text('" . $this->data['button_checkout'] . "');
                    }
                    if (stepId == 'necoWizardStep_3') {
                        $('input').each(function(){ 
                            $(this).removeClass('neco-input-success'); 
                        }); 
                    }
                },
                create: function(e) {
                    $(e).find('.neco-wizard-next').text('" . $this->data['button_checkout'] . "');
                }
            }).find('.neco-wizard-next').text('Procesar Pedido');
            $('#contentWrapper').find('.neco-wizard-prev').hide();
                    
            $('input[name=shipping_method]').on('change',function(e){
                var tr = $('input[name=shipping_method]:checked').closest('tr');
                var title = tr.find('[data-shipping_title]').text();
                var price = tr.find('[data-shipping_price]').text();
                $('#shipping_method').html(title + ' ' + price);
            });
            ");

            $scripts[] = array('id' => 'functionsCart', 'method' => 'function', 'script' =>
                "function deleteCart(e,k) {
                $('#totals').html('<img src=\"" . HTTP_IMAGE . "load.gif\" alt=\"Cargando...\" />'); 
                $(e).closest('tr').remove();
                $('#confirmItem'+ k).remove();
                $.getJSON('" . Url::createUrl('checkout/cart/delete') . "',
                    {
                        key:k
                    },
                    function(data){
                        if (!data.error) { 
                            $('#weight').html(data.weight);
                            $('#totals').html(data.totals);
                            $('#totalsConfirm').html(data.totals); 
                        } else { 
                            $('#cart').html(data.error); 
                            $('#weight').html('0.00kg');
                        } 
                    }
                );
            }
            function refreshCart(e,k) {
                $('#totals').html('<img src=\"" . HTTP_IMAGE . "load.gif\" alt=\"Cargando...\" />'); 
                if (e.tagName != 'INPUT') {
                    e = $(e).prev('input');
                }
                var price = $(e).closest('tr').find('td:nth-child(6)');
                
                var values = price.text().split(',');
                values[0] = values[0].replace(/\./g,'').replace(/\D+/,'');
                var intValue = Number( values[0].replace(/[^0-9\.]+/g,'') );
                var floatValue = parseInt( Number( values[1].replace(/[^0-9\.]+/g,'') ) );
                price = parseFloat( intValue + '.' + floatValue );
                var totalValue = Math.round( (parseInt( $(e).val() ) * price) * 100) / 100;
                $(e).closest('tr').find('td:nth-child(7)').text('Bs. ' + totalValue );
                
                $('#confirmTotal'+ k).text( 'Bs. ' + totalValue );
                $('#confirmQty'+ k).text( $(e).val() );
                
                $.getJSON('" . Url::createUrl('checkout/cart/refresh') . "',
                    {
                        key:k,
                        quantity:$(e).val()
                    },
                    function(data){
                        if (!data.error) { 
                            $('#weight').html(data.weight);
                            $('#totals').html(data.totals); 
                            $('#totalsConfirm').html(data.totals); 
                        } else { 
                            $('#cart').html(data.error); 
                            $('#weight').html('0.00kg');
                        } 
                    }
                );
            }
            function checkPattern(pat,value) {
                pattern = new RegExp(pat);
                return pattern.test(value);  
            }");

            $this->scripts = array_merge($this->scripts, $scripts);

            // javascript files
            $jspath = defined("CDN_JS") ? CDN_JS : HTTP_JS;
            $javascripts[] = $jspath . "necojs/neco.form.js";
            $javascripts[] = $jspath . "necojs/neco.wizard.js";
            $javascripts[] = $jspath . "vendor/jquery-ui.min.js";
            $this->javascripts = array_merge($this->javascripts, $javascripts);

            // style files
            $csspath = defined("CDN") ? CDN . CSS : HTTP_CSS;
            $styles[] = array('media' => 'all', 'href' => $csspath . 'jquery-ui/jquery-ui.min.css');
            $styles[] = array('media' => 'all', 'href' => $csspath . 'neco.form.css');
            $styles[] = array('media' => 'all', 'href' => $csspath . 'neco.wizard.css');
            $this->data['styles'] = $this->styles = array_merge($this->styles, $styles);
            
            $this->loadWidgets();

            if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/checkout/cart.tpl')) {
                $this->template = $this->config->get('config_template') . '/checkout/cart.tpl';
            } else {
                $this->template = 'cuyagua/checkout/cart.tpl';
            }
        } else {
            $this->data['heading_title'] = $this->language->get('heading_title');
            $this->data['text_error'] = $this->language->get('text_error');
            $this->data['button_continue'] = $this->language->get('button_continue');
            $this->data['continue'] = Url::createUrl("common/home");

            $this->loadWidgets();

            if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/error/not_found.tpl')) {
                $this->template = $this->config->get('config_template') . '/error/not_found.tpl';
            } else {
                $this->template = 'cuyagua/error/not_found.tpl';
            }
        }
        
        $this->children[] = 'common/column_left';
        $this->children[] = 'common/column_right';
        $this->children[] = 'common/nav';
        $this->children[] = 'common/header';
        $this->children[] = 'common/footer';

        $this->response->setOutput($this->render(true), $this->config->get('config_compression'));
    }

    public function json() {
        $Url = new Url($this->registry);
        if ($this->config->get('config_store_mode') != 'store') {
            $this->redirect(Url::createUrl('common/home'));
        }
        $this->language->load('checkout/cart');

        if ($this->request->hasQuery('product_id')) {
            $product_id = $this->request->getQuery('product_id');
        } elseif ($this->request->hasPost('product_id')) {
            $product_id = $this->request->getPost('product_id');
        }

        if ($this->request->hasQuery('quantity')) {
            $quantity = $this->request->getQuery('quantity');
        } elseif ($this->request->hasPost('quantity')) {
            $quantity = $this->request->getPost('quantity');
        } else {
            $quantity = 1;
        }

        if ($this->request->hasQuery('option')) {
            $option = $this->request->getQuery('option');
        } elseif ($this->request->hasPost('option')) {
            $option = $this->request->getPost('option');
        } else {
            $option = array();
        }

        if ($product_id) {
            if (!is_array($quantity)) {
                $this->cart->add($product_id, $quantity, $option);
            } else {
                foreach ($quantity as $key => $value) {
                    $this->cart->update($key, $value);
                }
            }

            $this->session->clear('shipping_methods');
            $this->session->clear('shipping_method');
            $this->session->clear('payment_methods');
            $this->session->clear('payment_method');

            $json['success'] = 1;
            $json['urlToCart'] = Url::createUrl('checkout/cart');

            $products_html = '';
            $products_array = array();
            foreach ($this->cart->getProducts() as $product) {
                $products_html .= '<tr>';
                //$products_html .= '<td class="cartRemove" id="remove_ ' . $product['key'] . '">&nbsp;</td>';
                $products_html .= '<td>' . $product['quantity'] . '&nbsp;x&nbsp;' . $this->currency->format($this->tax->calculate($product['price'], $product['tax_class_id'], $this->config->get('config_tax'))) . '</td>';
                $products_html .= '<td>';
                $products_html .= '<a href="' . Url::createUrl("store/product", array("product_id" => $product['product_id'])) . '">' . $product['name'] . '</a>';

                $products_array['quantity'] = $product['quantity'];
                $products_array['price'] = $this->currency->format($this->tax->calculate($product['price'], $product['tax_class_id'], $this->config->get('config_tax')));
                $products_array['product_link'] = Url::createUrl("store/product", array("product_id" => $product['product_id']));

                if ($product['option']) {
                    $products_html .= '<div>';
                    foreach ($product['option'] as $l => $option) {
                        $products_html .= ' - <small>' . $option['name'] . ' ' . $option['value'] . '</small><br />';
                        $products_array['options'][$l]['options'] = $option['name'];
                        $products_array['options'][$l]['options'] = $option['value'];
                    }
                    $products_html .= '</div>';
                }
                $products_html .= '</td>';
                $products_html .= '</tr>';
            }

            $total = 0;
            $taxes = $this->cart->getTaxes();

            $this->load->model('checkout/extension');
            $sort_order = array();
            $results = $this->modelExtension->getExtensions('total');
            foreach ($results as $key => $value) {
                $sort_order[$key] = $this->config->get($value['key'] . '_sort_order');
            }
            array_multisort($sort_order, SORT_ASC, $results);
            foreach ($results as $result) {
                $this->load->model('total/' . $result['key']);
                $this->{'model_total_' . $result['key']}->getTotal($total_data, $total, $taxes);
            }
            $sort_order = array();
            foreach ($total_data as $key => $value) {
                $sort_order[$key] = $value['sort_order'];
            }
            array_multisort($sort_order, SORT_ASC, $total_data);

            $total_html = '';
            foreach ($total_data as $total) {
                $total_html .= '<tr>';
                $total_html .= '<td>' . $total['title'] . '</td>';
                $total_html .= '<td>' . $total['text'] . '</td>';
                $total_html .= '</tr>';
            }

            $url_go_to_cart = $Url::createUrl("checkout/cart");
            $url_go_to_checkout = $Url::createUrl('checkout/confirm');

            $button_go_to_cart = '<a class="button%s" href="' . $url_go_to_cart . '">' . $this->language->get('text_go_to_cart') . '</a>';
            $button_go_to_checkout = '<a class="button%s" href="' . $url_go_to_checkout . '">' . $this->language->get('text_buy') . '</a>';

            $this->load->library('BarcodeQR');
            $this->load->library('Barcode39');

            $qr = new BarcodeQR;
            $barcode = new Barcode39(C_CODE);

            $qrStore = "cache/" . str_replace(array("."," "), "_", $this->config->get('config_owner')) . '.jpg';
            $eanStore = "cache/" . str_replace(array("."," "), "_", $this->config->get('config_owner')) . '.gif';

            $qr->url(HTTP_HOME);
            $qr->draw(150, DIR_IMAGE . $qrStore);
            $barcode->draw(DIR_IMAGE . $eanStore);

            $json['data'] = array(
                'qrtore' => $qrStore,
                'eanstore' => $eanStore,
                'products' => $products_array,
                'totals' => $total_data,
                'url_go_to_checkout' => $url_go_to_checkout,
                'url_go_to_cart' => $url_go_to_cart
            );

            if ($this->config->get('marketing_page_add_to_cart')) {
                $this->load->model("marketing/newsletter");
                $result = $this->modelNewsletter->getById($this->config->get('marketing_page_add_to_cart'));
                $json['html'] = html_entity_decode($result['htmlbody']);

                $json['html'] = str_replace("{%store_logo%}", '<img src="' . HTTP_IMAGE . $this->config->get('config_logo') . '" alt="' . $this->config->get('config_name') . '" />', $json['html']);
                $json['html'] = str_replace("{%store_url%}", HTTP_HOME, $json['html']);
                $json['html'] = str_replace("{%store_owner%}", $this->config->get('config_owner'), $json['html']);
                $json['html'] = str_replace("{%store_name%}", $this->config->get('config_name'), $json['html']);
                $json['html'] = str_replace("{%store_rif%}", $this->config->get('config_rif'), $json['html']);
                $json['html'] = str_replace("{%store_email%}", $this->config->get('config_email'), $json['html']);
                $json['html'] = str_replace("{%store_telephone%}", $this->config->get('config_telephone'), $json['html']);
                $json['html'] = str_replace("{%store_address%}", $this->config->get('config_address'), $json['html']);
                $json['html'] = str_replace("{%products%}", $products_html, $json['html']);
                $json['html'] = str_replace("{%url_go_to_cart%}", $url_go_to_cart, $json['html']);
                $json['html'] = str_replace("{%url_go_to_checkout%}", $url_go_to_checkout, $json['html']);
                $json['html'] = str_replace("{%button_go_to_cart%}", $button_go_to_cart, $json['html']);
                $json['html'] = str_replace("{%button_go_to_cart%}", $button_go_to_cart, $json['html']);
                $json['html'] = str_replace("{%totals%}", $total_html, $json['html']);
                $json['html'] = str_replace("{%qr_code_store%}", '<img src="' . HTTP_IMAGE . $qrStore . '" alt="QR Code" />', $json['html']);
                $json['html'] = str_replace("{%barcode_store%}", '<img src="' . HTTP_IMAGE . $eanStore . '" alt="EAN Code" />', $json['html']);
            } else {
                $json['html'] = '<table>';
                $json['html'] .= $products_html;
                $json['html'] .= '</table>';
                $json['html'] .= '<br />';

                $json['html'] .= '<hr /><table>';
                $json['html'] .= $total_html;
                $json['html'] .= '</table>';
                $json['html'] .= '<div class="message success">Se ha agregado el producto al carrito satisfactoriamente.</div>';
                $json['html'] .= '<div class="clear"></div><br />';

                $json['html'] .= $button_go_to_cart;
                $json['html'] .= $button_go_to_checkout;
            }

            $this->session->set('redirect', Url::createUrl('checkout/confirm'));

            $json['msg'] = $this->language->get('text_add_to_cart_success');
        } else {
            $json['error'] = 1;
            $json['msg'] = $this->language->get('error_add_to_cart');
        }

        $this->load->library('json');
        $this->response->setOutput(Json::encode($json), $this->config->get('config_compression'));
    }

    protected function updateCart() {
        $this->load->auto('weight');
        $this->load->auto('cart');
        $this->load->auto('json');
        $this->load->auto('checkout/extension');
        $data = array();
        if ($this->cart->getProducts()) {
            if ($this->config->get('config_cart_weight')) {
                $data['weight'] = $this->weight->format($this->cart->getWeight(), $this->config->get('config_weight_class'));
            } else {
                $data['weight'] = false;
            }

            $total_data = array();
            $total = 0;
            $taxes = $this->cart->getTaxes();


            $sort_order = array();

            $results = $this->modelExtension->getExtensions('total');

            foreach ($results as $key => $value) {
                $sort_order[$key] = $this->config->get($value['key'] . '_sort_order');
            }

            array_multisort($sort_order, SORT_ASC, $results);

            foreach ($results as $result) {
                $this->load->model('total/' . $result['key']);
                $this->{'model_total_' . $result['key']}->getTotal($total_data, $total, $taxes);
            }
            $sort_order = array();
            foreach ($total_data as $key => $value) {
                $sort_order[$key] = $value['sort_order'];
            }

            array_multisort($sort_order, SORT_ASC, $total_data);
            $output = "";
            foreach ($total_data as $value) {
                $output .= "<tr>";
                $output .= "<td><b>" . $value['title'] . "</b></td>";
                $output .= "<td>" . $value['text'] . "</td>";
                $output .= "</tr>";
            }
            $data['totals'] = $output;
        } else {
            $data['error'] = "No hay productos en el carrito";
        }
        return Json::encode($data);
    }

    public function callback() {
        $this->language->load('module/cart');

        $output = '<li>';

        if ($this->cart->getProducts()) {
            foreach ($this->cart->getProducts() as $product) {
                $output .= '<div>';
                //$output .= '<td class="cartRemove" id="remove_ ' . $product['key'] . '">&nbsp;</td>';
                if ((!$this->config->get('config_customer_price') || $this->customer->isLogged()) && $this->config->get('config_store_mode') == 'store') {
                    $output .= '<p>' . $product['quantity'] . '&nbsp;x&nbsp;' . $this->currency->format($this->tax->calculate($product['price'], $product['tax_class_id'], $this->config->get('config_tax'))) . '</p>';
                } else {
                    $output .= '<p>' . $product['quantity'] . '</p>';
                }
                $output .= '<p>';
                $output .= '<a href="' . Url::createUrl("store/product", array("product_id" => $product['product_id'])) . '">' . $product['name'] . '</a>';

                if ($product['option']) {
                    $output .= '<div>';
                    foreach ($product['option'] as $option) {
                        $output .= ' - <small>' . $option['name'] . ' ' . $option['value'] . '</small><br />';
                    }
                    $output .= '</div>';
                }
                $output .= '</p>';
                $output .= '</div>';
            }

            $total = 0;
            $taxes = $this->cart->getTaxes();

            if ((!$this->config->get('config_customer_price') || $this->customer->isLogged()) && $this->config->get('config_store_mode') == 'store') {
                $this->load->model('checkout/extension');
                $sort_order = array();
                $results = $this->modelExtension->getExtensions('total');
                foreach ($results as $key => $value) {
                    $sort_order[$key] = $this->config->get($value['key'] . '_sort_order');
                }
                array_multisort($sort_order, SORT_ASC, $results);
                foreach ($results as $result) {
                    $this->load->model('total/' . $result['key']);

                    $this->{'model_total_' . $result['key']}->getTotal($total_data, $total, $taxes);
                }
                $sort_order = array();
                foreach ($total_data as $key => $value) {
                    $sort_order[$key] = $value['sort_order'];
                }
                array_multisort($sort_order, SORT_ASC, $total_data);

                $output .= '<table>';
                foreach ($total_data as $total) {
                    $output .= '<tr>';
                    $output .= '<td><strong>' . $total['title'] . '</strong></td>';
                    $output .= '<td>' . $total['text'] . '</td>';
                    $output .= '</tr>';
                }
                $output .= '</table>';
            }
            $output .= '<div><a style="width:95%" class="button" href="' . Url::createUrl("checkout/cart") . '">' . $this->language->get('text_cart') . '</a></div>';

            $output .= '</li>';
        } else {
            $output .= '<li style="text-align: center;">' . $this->language->get('text_empty') . '</li>';
        }

        $this->response->setOutput($output, $this->config->get('config_compression'));
    }

    public function refresh() {
        if ($this->config->get('config_store_mode') != 'store') {
            $this->redirect(Url::createUrl('common/home'));
        }
        $this->cart->update($this->request->get['key'], $this->request->get['quantity']);
        $this->response->setOutput($this->updateCart(), $this->config->get('config_compression'));
    }

    public function delete() {
        if ($this->config->get('config_store_mode') != 'store') {
            $this->redirect(Url::createUrl('common/home'));
        }
        $this->cart->remove($_GET['key']);
        $this->response->setOutput($this->updateCart(), $this->config->get('config_compression'));
    }

    public function islogged() {
        echo (int) $this->customer->islogged();
    }

    protected function loadWidgets() {
        $this->load->helper('widgets');
        $widgets = new NecoWidget($this->registry, $this->Route);
        foreach ($widgets->getWidgets('main') as $widget) {
            $settings = (array) unserialize($widget['settings']);
            if ($settings['asyn']) {
                $url = Url::createUrl("{$settings['route']}", $settings['params']);
                $scripts[$widget['name']] = array(
                    'id' => $widget['name'],
                    'method' => 'ready',
                    'script' =>
                    "$(document.createElement('div'))
                        .attr({
                            id:'" . $widget['name'] . "'
                        })
                        .html(makeWaiting())
                        .load('" . $url . "')
                        .appendTo('" . $settings['target'] . "');"
                );
            } else {
                if (isset($settings['route'])) {
                    if (($this->browser->isMobile() && $settings['showonmobile']) || (!$this->browser->isMobile() && $settings['showondesktop'])) {
                        if ($settings['autoload']) {
                            $this->data['widgets'][] = $widget['name'];
                        }
                        
                        $this->children[$widget['name']] = $settings['route'];
                        $this->widget[$widget['name']] = $widget;
                    }
                }
            }
        }

        foreach ($widgets->getWidgets('featuredContent') as $widget) {
            $settings = (array) unserialize($widget['settings']);
            if ($settings['asyn']) {
                $url = Url::createUrl("{$settings['route']}", $settings['params']);
                $scripts[$widget['name']] = array(
                    'id' => $widget['name'],
                    'method' => 'ready',
                    'script' =>
                    "$(document.createElement('div'))
                        .attr({
                            id:'" . $widget['name'] . "'
                        })
                        .html(makeWaiting())
                        .load('" . $url . "')
                        .appendTo('" . $settings['target'] . "');"
                );
            } else {
                if (isset($settings['route'])) {
                    if (($this->browser->isMobile() && $settings['showonmobile']) || (!$this->browser->isMobile() && $settings['showondesktop'])) {
                        if ($settings['autoload']) {
                            $this->data['featuredWidgets'][] = $widget['name'];
                        }
                        
                        $this->children[$widget['name']] = $settings['route'];
                        $this->widget[$widget['name']] = $widget;
                    }
                }
            }
        }
        
        foreach ($widgets->getWidgets('featuredFooter') as $widget) {
            $settings = (array) unserialize($widget['settings']);
            if ($settings['asyn']) {
                $url = Url::createUrl("{$settings['route']}", $settings['params']);
                $scripts[$widget['name']] = array(
                    'id' => $widget['name'],
                    'method' => 'ready',
                    'script' =>
                    "$(document.createElement('div'))
                        .attr({
                            id:'" . $widget['name'] . "'
                        })
                        .html(makeWaiting())
                        .load('" . $url . "')
                        .appendTo('" . $settings['target'] . "');"
                );
            } else {
                if (isset($settings['route'])) {
                    if (($this->browser->isMobile() && $settings['showonmobile']) || (!$this->browser->isMobile() && $settings['showondesktop'])) {
                        if ($settings['autoload']) {
                            $this->data['featuredFooterWidgets'][] = $widget['name'];
                        }
                        
                        $this->children[$widget['name']] = $settings['route'];
                        $this->widget[$widget['name']] = $widget;
                    }
                }
            }
        }
    }

}
