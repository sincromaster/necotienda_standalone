<?php
/**
 * ModelSaleCoupon
 * 
 * @package NecoTienda powered by opencart
 * @author Yosiet Serga
 * @copyright Inversiones Necoyoad, C.A.
 * @version 1.0.0
 * @access public
 * @see Model
 */
class ModelSaleCoupon extends Model {
	/**
	 * ModelSaleCoupon::addCoupon()
	 * 
	 * @param mixed $data
     * @see DB
	 * @return void
	 */
	public function addCoupon($data) {
      	$this->db->query("INSERT INTO " . DB_PREFIX . "coupon SET code = '" . $this->db->escape($data['code']) . "', discount = '" . (float)$data['discount'] . "', type = '" . $this->db->escape($data['type']) . "', total = '" . (float)$data['total'] . "', logged = '" . (int)$data['logged'] . "', shipping = '" . (int)$data['shipping'] . "', date_start = '" . $this->db->escape($data['date_start']) . "', date_end = '" . $this->db->escape($data['date_end']) . "', uses_total = '" . (int)$data['uses_total'] . "', uses_customer = '" . (int)$data['uses_customer'] . "', status = '" . (int)$data['status'] . "', date_added = NOW()");

      	$coupon_id = $this->db->getLastId();

      	foreach ($data['coupon_description'] as $language_id => $value) {
        	$this->db->query("INSERT INTO " . DB_PREFIX . "coupon_description SET coupon_id = '" . (int)$coupon_id . "', language_id = '" . (int)$language_id . "', name = '" . $this->db->escape($value['name']) . "', description = '" . $this->db->escape($value['description']) . "'");
      	}
		
		if (isset($data['coupon_product'])) {
      		foreach ($data['coupon_product'] as $product_id) {
        		$this->db->query("INSERT INTO " . DB_PREFIX . "coupon_product SET coupon_id = '" . (int)$coupon_id . "', product_id = '" . (int)$product_id . "'");
      		}			
		}
	}
	
	/**
	 * ModelSaleCoupon::editCoupon()
	 * 
	 * @param int $coupon_id
	 * @param mixed $data
     * @see DB
	 * @return void
	 */
	public function editCoupon($coupon_id, $data) {
		$this->db->query("UPDATE " . DB_PREFIX . "coupon SET code = '" . $this->db->escape($data['code']) . "', discount = '" . (float)$data['discount'] . "', type = '" . $this->db->escape($data['type']) . "', total = '" . (float)$data['total'] . "', logged = '" . (int)$data['logged'] . "', shipping = '" . (int)$data['shipping'] . "', date_start = '" . $this->db->escape($data['date_start']) . "', date_end = '" . $this->db->escape($data['date_end']) . "', uses_total = '" . (int)$data['uses_total'] . "', uses_customer = '" . (int)$data['uses_customer'] . "', status = '" . (int)$data['status'] . "' WHERE coupon_id = '" . (int)$coupon_id . "'");

		$this->db->query("DELETE FROM " . DB_PREFIX . "coupon_description WHERE coupon_id = '" . (int)$coupon_id . "'");

      	foreach ($data['coupon_description'] as $language_id => $value) {
        	$this->db->query("INSERT INTO " . DB_PREFIX . "coupon_description SET coupon_id = '" . (int)$coupon_id . "', language_id = '" . (int)$language_id . "', name = '" . $this->db->escape($value['name']) . "', description = '" . $this->db->escape($value['description']) . "'");
      	}
		
		$this->db->query("DELETE FROM " . DB_PREFIX . "coupon_product WHERE coupon_id = '" . (int)$coupon_id . "'");
		
		if (isset($data['coupon_product'])) {
      		foreach ($data['coupon_product'] as $product_id) {
				$this->db->query("INSERT INTO " . DB_PREFIX . "coupon_product SET coupon_id = '" . (int)$coupon_id . "', product_id = '" . (int)$product_id . "'");
      		}
		}		
	}
	
	/**
	 * ModelSaleCoupon::deleteCoupon()
	 * 
	 * @param int $coupon_id
     * @see DB
	 * @return void
	 */
	public function deleteCoupon($coupon_id) {
      	$this->db->query("DELETE FROM " . DB_PREFIX . "coupon WHERE coupon_id = '" . (int)$coupon_id . "'");
      	$this->db->query("DELETE FROM " . DB_PREFIX . "coupon_description WHERE coupon_id = '" . (int)$coupon_id . "'");
		$this->db->query("DELETE FROM " . DB_PREFIX . "coupon_product WHERE coupon_id = '" . (int)$coupon_id . "'");		
	}
	
	/**
	 * ModelSaleCoupon::getCoupon()
	 * 
	 * @param int $coupon_id
     * @see DB
	 * @return void
	 */
	public function getCoupon($coupon_id) {
      	$query = $this->db->query("SELECT DISTINCT * FROM " . DB_PREFIX . "coupon WHERE coupon_id = '" . (int)$coupon_id . "'");
		
		return $query->row;
	}
	
	/**
	 * ModelSaleCoupon::getCoupons()
	 * 
	 * @param mixed $data
     * @see DB
	 * @return array sql records
	 */
	public function getCoupons($data = array()) {
		$sql = "SELECT c.coupon_id, cd.name, c.code, c.discount, c.date_start, c.date_end, c.status FROM " . DB_PREFIX . "coupon c LEFT JOIN " . DB_PREFIX . "coupon_description cd ON (c.coupon_id = cd.coupon_id) WHERE cd.language_id = '" . (int)$this->config->get('config_language_id') . "'";
		
		$sort_data = array(
			'cd.name',
			'c.code',
			'c.discount',
			'c.date_start',
			'c.date_end',
			'c.status'
		);	
			
		if (isset($data['sort']) && in_array($data['sort'], $sort_data)) {
			$sql .= " ORDER BY " . $data['sort'];	
		} else {
			$sql .= " ORDER BY cd.name";	
		}
			
		if (isset($data['order']) && ($data['order'] == 'DESC')) {
			$sql .= " DESC";
		} else {
			$sql .= " ASC";
		}
		
		if (isset($data['start']) || isset($data['limit'])) {
			if ($data['start'] < 0) {
				$data['start'] = 0;
			}			

			if ($data['limit'] < 1) {
				$data['limit'] = 20;
			}	
			
			$sql .= " LIMIT " . (int)$data['start'] . "," . (int)$data['limit'];
		}		
		
		$query = $this->db->query($sql);
		
		return $query->rows;
	}
	
	/**
	 * ModelSaleCoupon::getCouponDescriptions()
	 * 
	 * @param int $coupon_id
     * @see DB
	 * @return array sql records
	 */
	public function getCouponDescriptions($coupon_id) {
		$coupon_description_data = array();
		
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "coupon_description WHERE coupon_id = '" . (int)$coupon_id . "'");
		
		foreach ($query->rows as $result) {
			$coupon_description_data[$result['language_id']] = array(
				'name'        => $result['name'],
				'description' => $result['description']
			);
		}
		
		return $coupon_description_data;
	}

	/**
	 * ModelSaleCoupon::getCouponProducts()
	 * 
	 * @param int $coupon_id
     * @see DB
	 * @return array sql records
	 */
	public function getCouponProducts($coupon_id) {
		$coupon_product_data = array();
		
		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "coupon_product WHERE coupon_id = '" . (int)$coupon_id . "'");
		
		foreach ($query->rows as $result) {
			$coupon_product_data[] = $result['product_id'];
		}
		
		return $coupon_product_data;
	}
	
	/**
	 * ModelSaleCoupon::getTotalCoupons()
	 * 
     * @see DB
	 * @return int Count sql records
	 */
	public function getTotalCoupons() {
      	$query = $this->db->query("SELECT COUNT(*) AS total FROM " . DB_PREFIX . "coupon");
		
		return $query->row['total'];
	}		
}
