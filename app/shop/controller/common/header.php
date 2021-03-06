<?php

class ControllerCommonHeader extends Controller {

    protected function index() {
        $this->load->library('browser');
        $Url = new Url($this->registry);
        $browser = new Browser;
        if ($browser->getBrowser() == 'Internet Explorer' && $browser->getVersion() <= 9) {
            $this->redirect($Url::createUrl("page/deprecated"));
        }

        if ($this->request->hasQuery('hl') || $this->request->hasQuery('cc')) {

            if ($this->request->hasQuery('_route_')) {
                $this->session->set('redirect', HTTP_HOME . $this->request->getQuery('_route_'));
            } elseif ($this->request->hasQuery('r')) {
                $data = $this->request->get;
                unset($data['_route_']);
                $route = $data['r'];
                unset($data['r']);
                unset($data['cc']);
                unset($data['hl']);
                $url = '';

                if ($data) {
                    $url = '&' . urldecode(http_build_query($data));
                }

                $this->session->set('redirect', $Url::createUrl($route, $url));
            } else {
                $this->session->set('redirect', HTTP_HOME);
            }
        }

        if ($this->request->hasQuery('hl')) {
            $this->session->set('language', $this->request->getQuery('hl'));
            if (!$this->request->hasQuery('cc')) {
                if ($this->session->has('redirect')) {
                    $this->redirect($this->session->get('redirect'));
                } else {
                    $this->redirect(HTTP_HOME);
                }
            }
        }

        if ($this->request->hasQuery('cc')) {
            $this->currency->set($this->request->getQuery('cc'));
            $this->session->clear('shipping_methods');
            $this->session->clear('shipping_method');
            if ($this->session->has('redirect')) {
                $this->redirect($this->session->get('redirect'));
            } else {
                $this->redirect(HTTP_HOME);
            }
        }

        if (!$this->session->has('token')) {
            $this->session->set('token', md5(rand()));
        }

        $this->data['token'] = $this->session->get('token');

        if (isset($this->request->server['HTTPS']) && (($this->request->server['HTTPS'] == 'on') || ($this->request->server['HTTPS'] == '1'))) {
            $this->data['base'] = HTTPS_HOME;
        } else {
            $this->data['base'] = HTTP_HOME;
        }

        if ($this->config->get('config_icon') && file_exists(DIR_IMAGE . $this->config->get('config_icon'))) {
            $this->data['icon'] = HTTP_IMAGE . $this->config->get('config_icon');
        } else {
            $this->data['icon'] = '';
        }

        if ($this->config->get('config_logo') && file_exists(DIR_IMAGE . $this->config->get('config_logo'))) {
            $this->data['logo'] = HTTP_IMAGE . $this->config->get('config_logo');
        } else {
            $this->data['logo'] = '';
        }

        $this->data['title'] = $this->document->title;
        $this->data['keywords'] = $this->document->keywords;
        $this->data['description'] = $this->document->description;
        $this->data['template'] = $this->config->get('config_template');
        $this->data['charset'] = $this->language->get('charset');
        $this->data['lang'] = $this->language->get('code');
        $this->data['direction'] = $this->language->get('direction');
        $this->data['links'] = $this->document->links;
        $this->data['breadcrumbs'] = $this->document->breadcrumbs;

        $this->load->library('user');
        if ($this->user->getId()) {
            $this->data['is_admin'] = true;
            $this->language->load('common/admin');
            if ($this->request->hasQuery('theme_editor')) {
                $this->data['theme_editor'] = true;
                if ($this->request->hasQuery('template') && file_exists(DIR_TEMPLATE . $this->request->getQuery('template') . '/common/header.tpl')) {
                    $this->config->set('config_template', $this->request->getQuery('template'));

                    $this->data['new_theme']= Url::createAdminUrl('style/theme/insert',array(),'NONSSL',HTTP_ADMIN);
                    $this->data['save_theme']= Url::createAdminUrl('style/theme/save',array('theme_id'=>$this->request->getQuery('theme_id'),'template'=>$this->request->getQuery('template')),'NONSSL',HTTP_ADMIN);
                    $this->data['download_theme']= Url::createAdminUrl('style/theme/download',array('theme_id'=>$this->request->getQuery('theme_id'),'template'=>$this->request->getQuery('template')),'NONSSL',HTTP_ADMIN);
                }
            }
        }

        $this->loadAssets();

        $this->loadCss();
        $this->loadJs();

        $this->data['store'] = $this->config->get('config_name');
        $this->data['isLogged'] = $this->customer->isLogged();

        if ($this->customer->isLogged()) {
            $this->data['greetings'] = 'Bienvenido(a), ' . ucwords($this->customer->getFirstName() . ' ' . $this->customer->getLastName());
        }

        if (isset($this->request->get['q'])) {
            $this->data['q'] = $this->request->get['q'];
        } else {
            $this->data['q'] = '';
        }

        if (isset($this->request->get['category_id'])) {
            $this->data['category_id'] = $this->request->get['category_id'];
        } elseif (isset($this->request->get['path'])) {
            $path = explode('_', $this->request->get['path']);
            $this->data['category_id'] = end($path);
        } else {
            $this->data['category_id'] = 0;
        }

        if (isset($this->request->get['product_id'])) {
            $this->data['product_id'] = $this->request->get['product_id'];
        } else {
            $this->data['product_id'] = 0;
        }

        if (isset($this->request->get['manufacturer_id'])) {
            $this->data['manufacturer_id'] = $this->request->get['manufacturer_id'];
        } else {
            $this->data['manufacturer_id'] = 0;
        }

        /*
          // Auto suggest through email and while is online
          $this->track->autoSuggest(array(
          'category_id'       =>$this->data['category_id'],
          'product_id'        =>$this->data['product_id'],
          'manufacturer_id'   =>$this->data['manufacturer_id'],
          'q'                 =>$this->data['q']
          ));
         */

        if (!isset($this->request->get['r'])) {
            $this->session->set('redirect', HTTP_HOME);
        } else {
            $data = $this->request->get;
            unset($data['_route_']);
            $route = $data['r'];
            unset($data['r']);
            $url = '';

            if ($data) {
                $url = '&' . urldecode(http_build_query($data));
            }

            $this->session->set('redirect', Url::createUrl($route, $url));
        }
        $this->data['current_url'] = $this->session->get('redirect');

        $this->data['language_code'] = $this->session->get('language');
        $this->data['languages'] = array();
        $results = $this->modelLanguage->getLanguages();

        foreach ($results as $result) {
            if ($result['status']) {
                $this->data['languages'][] = array(
                    'name' => $result['name'],
                    'code' => $result['code'],
                    'image' => HTTP_IMAGE . "flags/" . $result['image']
                );
            }
        }

        $this->data['currency_code'] = $this->currency->getCode();
        $this->data['currencies'] = array();
        $results = $this->modelCurrency->getCurrencies();

        foreach ($results as $result) {
            if ($result['status']) {
                $this->data['currencies'][] = array(
                    'title' => $result['title'],
                    'code' => $result['code']
                );
            }
        }

        $this->session->set('state', md5(rand()));
        $this->data['google_analytics_code'] = $this->config->get('google_analytics_code');
        $this->data['live_client_id'] = $this->config->get('social_live_client_id');
        $this->data['google_client_id'] = $this->config->get('social_google_client_id');
        $this->data['facebook_app_id'] = $this->config->get('social_facebook_app_id');
        $this->data['twitter_oauth_token_secret'] = $this->config->get('social_twitter_oauth_token_secret');

        $this->load->helper('widgets');
        $widgets = new NecoWidget($this->registry, $this->Route);
        foreach ($widgets->getWidgets('header') as $widget) {
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

        $this->id = 'header';
        if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/common/header.tpl')) {
            $this->template = $this->config->get('config_template') . '/common/header.tpl';
        } else {
            $this->template = 'cuyagua/common/header.tpl';
        }

        $this->render();
    }

    public function getLanguages() {
        $this->data['languages'] = array();
        $this->load->auto('localisation/language');
        $results = $this->modelLanguage->getLanguages();

        foreach ($results as $result) {
            if ($result['status']) {
                $this->data['languages'][] = array(
                    'name' => $result['name'],
                    'code' => $result['code'],
                    'image' => HTTP_IMAGE . "flags/" . $result['image']
                );
            }
        }

        $this->data['redirect'] = $this->session->get('redirect');

        if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/localisation/languages.tpl')) {
            $this->template = $this->config->get('config_template') . '/localisation/languages.tpl';
        } else {
            $this->template = 'cuyagua/localisation/languages.tpl';
        }

        $this->response->setOutput($this->render(true), $this->config->get('config_compression'));
    }

    public function getCurrencies() {
        $this->load->auto('localisation/currency');
        $this->data['currencies'] = array();
        $results = $this->modelCurrency->getCurrencies();

        foreach ($results as $result) {
            if ($result['status']) {
                $this->data['currencies'][] = array(
                    'title' => $result['title'],
                    'code' => $result['code']
                );
            }
        }

        $this->data['redirect'] = $this->session->get('redirect');

        if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/localisation/currencies.tpl')) {
            $this->template = $this->config->get('config_template') . '/localisation/currencies.tpl';
        } else {
            $this->template = 'cuyagua/localisation/currencies.tpl';
        }

        $this->response->setOutput($this->render(true), $this->config->get('config_compression'));
    }

    protected function loadJs() {
        $f_output = '';
        if ($this->config->get('config_render_js_in_file')) {
            $done = array();
            foreach ($this->header_javascripts as $key => $js) {
                if (in_array($js, $done)) continue;
                $done[] = $js;
                $f_output .= file_get_contents($js);
            }
            $this->header_javascripts = null;
        }

        $this->data['scripts'] .= ($f_output) ? "<script> \n " . $f_output . " </script>" : "";
    }

    protected function loadCss() {
        $this->data['css'] = "";

        $csspath = defined("CDN") ? CDN_CSS : HTTP_THEME_CSS;
        if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/common/header.tpl')) {
            $csspath = str_replace("%theme%", $this->config->get('config_template'), $csspath);
            $cssFolder = str_replace("%theme%", $this->config->get('config_template'), DIR_THEME_CSS);
        } else {
            $csspath = str_replace("%theme%", "cuyagua", $csspath);
            $cssFolder = str_replace("%theme%", "cuyagua", DIR_THEME_CSS);
        }

        if (file_exists($cssFolder . 'theme.css')) {
            if ($this->config->get('config_render_css_in_file')) {
                $this->data['css'] .= file_get_contents($cssFolder . 'theme.css');
            } else {
                $styles['theme.css'] = array('media' => 'all', 'href' => $csspath . 'theme.css');
            }
        }

        if (file_exists($cssFolder . 'vendor.css')) {
            if ($this->config->get('config_render_css_in_file')) {
                $this->data['css'] .= file_get_contents($cssFolder . 'vendor.css');
            } else {
                $styles['vendor.css'] = array('media' => 'all', 'href' => $csspath . 'vendor.css');
            }
        }

        if (file_exists($cssFolder . str_replace('/', '', strtolower($this->Route) . '.css'))) {
            if ($this->config->get('config_render_css_in_file')) {
                $this->data['css'] .= file_get_contents($cssFolder . str_replace('/', '', strtolower($this->Route) . '.css'));
            } else {
                $styles['vendor.css'] = array('media' => 'all', 'href' => $csspath . str_replace('/', '', strtolower($this->Route) . '.css'));
            }
        }

        if (count($styles)) {
            $this->styles = array_merge($this->styles, $styles);
        }

        if ($this->config->get('config_render_css_in_file')) {
            $done = array();
            foreach ($this->styles as $k => $css) {
                if (in_array($css['href'], $done)) continue;
                $done[] = $css['href'];
                $this->data['css'] .= file_get_contents($css['href']);
            }
            $this->styles = null;
            $styles = null;
        }

        $this->load->auto('style/theme');
        $cssmainpath = defined("CDN_CSS") ? CDN_CSS : HTTP_CSS;
        $theme = $this->modelTheme->getById($this->config->get('theme_default_id'));
        if ($theme['theme_id']) {
            if (file_exists(DIR_CSS . "custom-" . $theme['theme_id'] . "-" . $this->config->get('config_template') . ".css")) {
                $this->data['css'] .= file_get_contents($cssmainpath . "custom-" . $theme['theme_id'] . "-" . $this->config->get('config_template') . ".css");
            } elseif (file_exists($cssFolder . "custom-" . $theme['theme_id'] . "-" . $this->config->get('config_template') . ".css")) {
                $this->data['css'] .= file_get_contents($csspath . "custom-" . $theme['theme_id'] . "-" . $this->config->get('config_template') . ".css");
            }

        }

        if ($this->data['css']) {
            $this->data['css'] = str_replace("../../../images/", HTTP_IMAGE, $this->data['css']);
            $this->data['css'] = str_replace("../images/", str_replace('%theme%', $this->config->get('config_template'), HTTP_THEME_IMAGE), $this->data['css']);
            $this->data['css'] = str_replace("../fonts/", str_replace('%theme%', $this->config->get('config_template'), HTTP_THEME_FONT), $this->data['css']);
        }

        $this->load->library('user');
        if ($this->user->getId()) {
            $this->data['is_admin'] = true;
            $styles[] = array('media' => 'screen', 'href' => HTTP_ADMIN . 'css/front/admin.css');
            if ($this->request->hasQuery('theme_editor') && $this->request->hasQuery('template')) {
                $styles[] = array('media' => 'screen', 'href' => $cssmainpath . 'neco.colorpicker.css');
            }
        }

        if ($styles)
            $this->styles = array_merge($this->styles, $styles);
        $this->data['styles'] = $this->styles;
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