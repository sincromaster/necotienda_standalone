<select id="batch">
    <option value="">Procesamiento en lote</option>
    <!--
    <option value="editAll">Editar</option>
    <option value="addToList">Agregar a una lista</option>
    -->
    <option value="copyAll">Copiar</option>
    <option value="deleteAll">Eliminar</option>
</select>
<a href="#" title="Ejecutar acci&oacute;n por lote" onclick="if ($('#batch').val().length <= 0) { return false; } else { window[$('#batch').val()](); return false;}" style="margin-left: 10px;font-size: 10px;">[ Ejecutar ]</a>
<div class="clear"></div><br />
    <div class="pagination"><?php echo $pagination; ?></div>
    <form action="<?php echo $delete; ?>" method="post" enctype="multipart/form-data" id="form">
      <table id="list">
        <thead>
          <tr>
            <th><input title="Seleccionar Todos" type="checkbox" onclick="$('input[name*=\'selected\']').attr('checked', this.checked);"></th>
            <th><?php echo $column_image; ?></th>
            <th><?php if ($sort == 'pd.name') { ?>
              <a onclick="$('#gridWrapper').load('<?php echo $sort_name; ?>')" class="<?php echo strtolower($order); ?>"><?php echo $column_name; ?></a>
              <?php } else { ?>
              <a onclick="$('#gridWrapper').load('<?php echo $sort_name; ?>')"><?php echo $column_name; ?></a>
              <?php } ?></th>
            <th><?php if ($sort == 'p.model') { ?>
              <a onclick="$('#gridWrapper').load('<?php echo $sort_model; ?>')" class="<?php echo strtolower($order); ?>"><?php echo $column_model; ?></a>
              <?php } else { ?>
              <a onclick="$('#gridWrapper').load('<?php echo $sort_model; ?>')"><?php echo $column_model; ?></a>
              <?php } ?></th>
            <th><?php if ($sort == 'p.quantity') { ?>
              <a onclick="$('#gridWrapper').load('<?php echo $sort_quantity; ?>')" class="<?php echo strtolower($order); ?>"><?php echo $column_quantity; ?></a>
              <?php } else { ?>
              <a onclick="$('#gridWrapper').load('<?php echo $sort_quantity; ?>')"><?php echo $column_quantity; ?></a>
              <?php } ?></th>
            <th><?php if ($sort == 'p.status') { ?>
              <a onclick="$('#gridWrapper').load('<?php echo $sort_status; ?>')" class="<?php echo strtolower($order); ?>"><?php echo $column_status; ?></a>
              <?php } else { ?>
              <a onclick="$('#gridWrapper').load('<?php echo $sort_status; ?>')"><?php echo $column_status; ?></a>
              <?php } ?></th>
            <th><?php if ($sort == 'p.sort_order') { ?>
              <a onclick="$('#gridWrapper').load('<?php echo $sort_order; ?>')" class="<?php echo strtolower($order); ?>"><?php echo $column_sort_order; ?></a>
              <?php } else { ?>
              <a onclick="$('#gridWrapper').load('<?php echo $sort_order; ?>')"><?php echo $column_sort_order; ?></a>
              <?php } ?></th>
            <th><?php echo $column_action; ?></th>
          </tr>
        </thead>
        <tbody>
          <?php  print_r($results); if ($products) { ?>
          <?php foreach ($products as $product) { ?>
          <tr id="tr_<?php echo $product['product_id']; ?>">
            <td style="text-align: center;">
              <input title="Seleccionar para una acci&oacute;n" type="checkbox" name="selected[]" value="<?php echo $product['product_id']; ?>"<?php if ($product['selected']) { ?> checked="checked"<?php } ?> />
            </td>
            <td class="center"><img alt="<?php echo $product['name']; ?>" src="<?php echo $product['image']; ?>" style="padding: 1px; border: 1px solid #000;" /></td>
            <td><?php echo $product['name']; ?></td>
            <td><?php echo $product['model']; ?></td>
            <td><?php if ($product['quantity'] <= 0) { ?>
              <span style="color: #FF0000;"><?php echo $product['quantity']; ?></span>
              <?php } elseif ($product['quantity'] <= 5) { ?>
              <span style="color: #FFA500;"><?php echo $product['quantity']; ?></span>
              <?php } else { ?>
              <span style="color: #008000;"><?php echo $product['quantity']; ?></span>
              <?php } ?></td>
            <td><?php echo $product['status']; ?></td>
            <td class="move"><img src="image/move.png" alt="Posicionar" title="Posicionar" style="text-align:center" /></td>
            <td><?php foreach ($product['action'] as $action) { ?>
            <?php 
                if ($action['action'] == "activate") { 
                    $jsfunction = "activate(". $product['product_id'] .")";
                    $href = "";
                } elseif ($action['action'] == "delete") {
                    $jsfunction = "eliminar(". $product['product_id'] .")";
                    $href = "";
                } elseif ($action['action'] == "edit") {
                    $href = "href='" . $action['href'] ."'";
                    $jsfunction = "";
                } elseif ($action['action'] == "duplicate") {
                    $jsfunction = "copy(". $product['product_id'] .")";
                    $href = "";
                } 
            ?>
              <a title="<?php echo $action['text']; ?>" <?php echo $href; ?> onclick="<?php echo $jsfunction; ?>"><img id="img_<?php echo $product['product_id']; ?>" src="image/<?php echo $action['img']; ?>" alt="<?php echo $action['text']; ?>" /></a>
              <?php } ?></td>
          </tr>
          <?php } ?>
          <?php } else { ?>
          <tr>
            <td colspan="8"><?php echo $text_no_results; ?></td>
          </tr>
          <?php } ?>
        </tbody>
      </table>
    </form>
    <div class="pagination"><?php echo $pagination; ?></div>
<form action="<?php echo $Url::createAdminUrl("tool/excel"); ?>" name="excel_form" id="excel_form" method="post">
	<input  type='hidden' value='<?php echo $content_excel; ?>' name='excel_data' id='excel_data'>
</form>
<form action="<?php echo $Url::createAdminUrl("tool/csv"); ?>" name="csv_form" id="csv_form" method="post">
	<input  type='hidden' value='<?php echo $content_csv; ?>' name='csv_data' id='csv_data'>
</form>
<script type="text/javascript">
function filter() {
	url = 'index.php?r=store/product/grid&token=<?php echo $token; ?>';
	
	var filter_name = $('input[name=\'filter_name\']').attr('value');
	
	if (filter_name) {
		url += '&filter_name=' + encodeURIComponent(filter_name);
	}
	
	var filter_model = $('input[name=\'filter_model\']').attr('value');
	
	if (filter_model) {
		url += '&filter_model=' + encodeURIComponent(filter_model);
	}
	
	var filter_quantity = $('input[name=\'filter_quantity\']').attr('value');
	
	if (filter_quantity) {
		url += '&filter_quantity=' + encodeURIComponent(filter_quantity);
	}
	
	var filter_status = $('select[name=\'filter_status\']').attr('value');
	
	if (filter_status != '*') {
		url += '&filter_status=' + encodeURIComponent(filter_status);
	}	

	location = url;
}
</script>
<?php echo $footer; ?>