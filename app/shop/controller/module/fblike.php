<?php

class ControllerModuleFBLike extends Controller {

    protected function index($widget = null) {
        if (isset($widget)) {
            $this->data['settings'] = $settings = (array) unserialize($widget['settings']);
            $this->data['widget_hook'] = $this->data['widgetName'] = $widget['name'];
        }
        $this->language->load('module/fblike');

        if (isset($settings['title'])) {
            $this->data['heading_title'] = $settings['title'];
        } else {
            $this->data['heading_title'] = $this->language->get('heading_title');
        }

        $this->data['pageid'] = html_entity_decode($settings['fblike_pageid']);
        $this->data['totalconnection'] = html_entity_decode($settings['fblike_totalconnection']);
        $this->data['width'] = html_entity_decode($settings['fblike_width']);
        $this->data['height'] = html_entity_decode($settings['fblike_height']);
        $this->data['stream'] = html_entity_decode($settings['fblike_stream']);
        $this->data['header'] = html_entity_decode($settings['fblike_header']);

        $this->loadAssets();

        if ($scripts)
            $this->scripts = array_merge($this->scripts, $scripts);

        $this->id = 'fblike';

        if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/module/fblike.tpl')) {
            $this->template = $this->config->get('config_template') . '/module/fblike.tpl';
        } else {
            $this->template = 'cuyagua/module/fblike.tpl';
        }

        $this->render();
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
