<?php

/**
 * @author Yosiet Serga
 * @copyright 2011
 * @package NecoTienda
 */
$this->load->auto('store/review');
$this->data['heading_title'] = $this->language->get('heading_title');
$this->data['button_see_product'] = $this->language->get('button_see_product');
$this->data['button_add_to_cart'] = $this->language->get('button_add_to_cart');
$this->data['products'] = array();

list($dia, $mes, $ano) = explode('-', date('d-m-Y'));
$l = ((int) $this->config->get('config_new_days') > 30) ? 30 : $this->config->get('config_new_days');
if (($dia = $dia - $l) <= 0) {
    $dia = $dia + 30;
    if ($dia <= 0)
        $dia = 1;
    $mes = $mes - 1;
    if ($mes <= 0) {
        $mes = $mes + 12;
        $ano = $ano - 1;
    }
}
if (!$this->config->get('config_customer_price') || $this->customer->isLogged() && $this->config->get('config_store_mode') === 'store') {
    $this->data['display_price'] = true;
} else {
    $this->data['display_price'] = false;
}
foreach ($results as $k => $result) {
    $image = $imageP = !empty($result['image']) ? $result['image'] : 'no_image.jpg';

    if ($this->config->get('config_review')) {
        $rating = $this->modelReview->getAverageRating($result['product_id']);
    } else {
        $rating = false;
    }

    $special = false;
    $discount = $this->modelProduct->getProductDiscount($result['product_id']);

    if ($discount) {
        $price = $this->currency->format($this->tax->calculate($discount, $result['tax_class_id'], $this->config->get('config_tax')));
    } else {
        $price = $this->currency->format($this->tax->calculate($result['price'], $result['tax_class_id'], $this->config->get('config_tax')));
        $special = $this->modelProduct->getProductSpecial($result['product_id']);
        if ($special) {
            $special = $this->currency->format($this->tax->calculate($special, $result['tax_class_id'], $this->config->get('config_tax')));
        }
    }

    $options = $this->modelProduct->getProductOptions($result['product_id']);

    if ($options) {
        $add = Url::createUrl('store/product', array('product_id' => $result['product_id']));
    } else {
        $add = Url::createUrl('checkout/cart', array('product_id' => $result['product_id']));
    }

    list($pdia, $pmes, $pano) = explode('-', date('d-m-Y', strtotime($result['created'])));

    if ($special) {
        $sticker = '<b class="oferta"></b>';
    } elseif ($discount) {
        $sticker = '<b class="descuento"></b>';
    } elseif (strtotime($dia . "-" . $mes . "-" . $ano) <= strtotime($pdia . "-" . $pmes . "-" . $pano)) {
        $sticker = '<b class="nuevo"></b>';
    } else {
        $sticker = "";
    }

    $this->load->auto('image');
    //NTImage::setWatermark($this->config->get('config_logo'));
    $this->data['products'][$k] = array(
        'product_id' => $result['product_id'],
        'name' => $result['name'],
        'model' => $result['model'],
        'overview' => $result['meta_description'],
        'rating' => $rating,
        'stars' => sprintf($this->language->get('text_stars'), $rating),
        'sticker' => $sticker,
        'options' => $options,
        'image' => NTImage::resizeAndSave($image, 38, 38),
        'lazyImage' => NTImage::resizeAndSave('no_image.jpg', $this->config->get('config_image_product_width'), $this->config->get('config_image_product_height')),
        'thumb' => NTImage::resizeAndSave($image, $this->config->get('config_image_product_width'), $this->config->get('config_image_product_height')),
        'href' => Url::createUrl('store/product', array('product_id' => $result['product_id'])),
        'add' => $add,
        'created' => $result['created']
    );

    $this->data['products'][$k]['images'] = array();
    $images = $this->modelProduct->getProductImages($product_id);
    foreach ($images as $j => $image) {
        $this->data['products'][$k]['images'][$j] = array(
            'popup' => NTImage::resizeAndSave($image['image'], $this->config->get('config_image_popup_width'), $this->config->get('config_image_popup_height')),
            'preview' => NTImage::resizeAndSave($image['image'], $this->config->get('config_image_thumb_width'), $this->config->get('config_image_thumb_height')),
            'thumb' => NTImage::resizeAndSave($image['image'], $this->config->get('config_image_additional_width'), $this->config->get('config_image_additional_height'))
        );
    }
    $j = count($this->data['products'][$k]['images']) + 1;
    $this->data['products'][$k]['images'][$j] = array(
        'popup' => NTImage::resizeAndSave($imageP, $this->config->get('config_image_popup_width'), $this->config->get('config_image_popup_height')),
        'preview' => NTImage::resizeAndSave($imageP, $this->config->get('config_image_thumb_width'), $this->config->get('config_image_thumb_height')),
        'thumb' => NTImage::resizeAndSave($imageP, $this->config->get('config_image_additional_width'), $this->config->get('config_image_additional_height'))
    );
    $this->data['products'][$k]['images'] = array_reverse($this->data['products'][$k]['images']);

    if ($this->config->get('config_store_mode') === 'store') {
        $this->data['products'][$k]['price'] = $price;
        $this->data['products'][$k]['special'] = $special;
    }
}
