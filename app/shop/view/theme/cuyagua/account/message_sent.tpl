<?php echo $header; ?>
<?php echo $navigation; ?>
<section id="maincontent" class="row">

    <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/columns-start.tpl"); ?>
    <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/message.tpl"); ?>
    <div class="simple-form">
        <div class="form-entry">
            <label for="filter_subject"><?php echo $Language->get('text_search');?></label>
            <input type="text" name="filter_subject" id="filter_subject" value="" placeholder="Buscar..." />
        </div>
        <div class="form-entry">
            <label for="filter_status"><?php echo $Language->get('text_status');?></label>
            <select name="filter_status" id="filter_status">
                <option value=""><?php echo $Language->get('select_option_all');?></option>
                <option value="1"><?php echo $text_read; ?></option>
                <option value="2"><?php echo $text_non_read; ?></option>
                <option value="-1"><?php echo $text_spam; ?></option>
            </select>
        </div>
        <div class="form-entry">
        <label for="filter_status"><?php echo $Language->get('text_search');?></label>
            <select name="filter_limit" id="filter_limit">
                <option value="5"><?php echo $Language->get('select_option_5_per_page');?></option>
                <option value="10"><?php echo $Language->get('select_option_10_per_page');?></option>
                <option value="20"><?php echo $Language->get('select_option_20_per_page');?></option>
                <option value="50"><?php echo $Language->get('select_option_50_per_page');?></option>
            </select>
        </div>
        <?php echo $text_sort; ?>
        <div class="action-button action-success filter-action">
            <a href="#" id="filter"><?php echo $Language->get('text_filter');?></a>
        </div>
    </div>

    <div class="tabulate-data">
        <form action="<?php echo str_replace('&', '&amp;', $action); ?>" method="post" enctype="multipart/form-data" id="form">
            <?php if ($messages) { ?>
            <table>
                <thead>
                <tr>
                    <th><input title="Seleccionar Todos" type="checkbox" onclick="$('input[name*=\'selected\']').attr('checked', this.checked);" /></th>
                    <th><?php echo $Language->get('table_head_subject');?></th>
                    <th><?php echo $Language->get('table_head_message');?></th>
                    <th><?php echo $Language->get('table_head_sent');?></th>
                    <th><?php echo $Language->get('table_head_actions');?></th>
                </tr>
                </thead>
                <?php foreach ($messages as $value) { ?>
                <tr id="pid_<?php echo $value['message_id']; ?>">
                    <td><input type="checkbox" name="selected[]" value="<?php echo $value['message_id']; ?>"<?php if ($value['selected']) { ?> checked="checked"<?php } ?> /></td>
                    <td>
                        <a href="<?php echo $Url::createUrl("account/message/read",array("message_id"=>$value['message_id'])); ?>" title="Leer Mensaje"><?php echo $value['subject']; ?></a>
                    </td>
                    <td><?php echo substr($value['message'],0,150) . "..."; ?></td>
                    <td><?php echo $value['date_added']; ?></td>
                    <td>
                        <a href="#" onclick="if (confirm('Seguro que desea eliminarlo?')) { $.getJSON('<?php echo $Url::createUrl("account/message/delete",array("id"=>$value['message_id'])); ?>',function(){ $('#pid_<?php echo $value['message_id']; ?>').remove(); }); } return false;" title="Finalizar">Eliminar</a>
                    </td>
                </tr>
                <?php } ?>
            </table>
            <?php if ($pagination) { ?><div class="pagination"><?php echo $pagination; ?></div><?php } ?>
            <?php } else { ?>
            <div class="no-info"><?php echo $Language->get('text_empty_data');?>&nbsp;<a href="<?php echo $Url::createUrl("account/message/create"); ?>"><?php echo $Language->get('text_help');?></a></div>
            <?php } ?>
        </form>
    </div>
    <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/columns-end.tpl"); ?>
</section>
<script>
function filterProducts() {
     var url = '';
    
    if ($('#filter_subject').val()){
        url += '&keyword=' + $('#filter_subject').val();
    }
    
    if ($('#filter_sort').val()){
        url += '&sort=' + $('#filter_sort').val();
    }
    
    if ($('#filter_status').val()){
        url += '&status=' + $('#filter_status').val();
    }
    
    if ($('#filter_limit').val()){
        url += '&limit=' + $('#filter_limit').val();
    }
    
    window.location.href = '<?php echo $Url::createUrl("account/message/sent"); ?>' + url;
    
    return false;
}
$('#filter').on('click',function(e){
    filterProducts();
    return false;
});
$('#filter_customer_product').on('keydown',function(e) {
    if (e.keyCode == 13) {
        filterProducts();
    }
});
</script>
<?php echo $footer; ?>