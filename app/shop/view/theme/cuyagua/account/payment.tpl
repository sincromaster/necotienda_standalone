<?php echo $header; ?>
<?php echo $navigation; ?>
<section id="maincontent" class="row">
    <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/columns-start.tpl"); ?>
    <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/message.tpl"); ?>
    <h1>Pagos</h1>

    <div class="filter-form simple-form">
        <input type="text" name="filter_list" id="filter_list" value="" placeholder="Buscar por ID de Pago" />
        <input type="text" name="filter_order" id="filter_order" value="" placeholder="Buscar por ID de Pedido" />
        <select name="filter_status" id="filter_status">
            <option value="">Todos</option>
            <?php foreach ($statuses as $status) { ?>
            <option value="<?php echo $status['order_payment_status_id']; ?>"><?php echo $status['name']; ?></option>
            <?php } ?>
        </select>
        <select name="filter_limit" id="filter_limit">
            <option value="5">5 por p&aacute;gina</option>
            <option value="10">10 por p&aacute;gina</option>
            <option value="20">20 por p&aacute;gina</option>
            <option value="50">50 por p&aacute;gina</option>
        </select>
        <div class="action-button">
            <a onclick="filter()" id="filter" class="filter-action">Filtrar</a>
        </div>
    </div>
    <div class="tabulated-form">
        <form action="<?php echo str_replace('&', '&amp;', $action); ?>" method="post" enctype="multipart/form-data" id="form">
            <?php if ($payments) { ?>
            <table>
                <thead>
                <tr>
                    <th>ID del Pago</th>
                    <th>ID del Pedido</th>
                    <th><?php echo $text_status; ?></th>
                    <th><?php echo $text_date_added; ?></th>
                    <th><?php echo $text_total; ?></th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <?php foreach ($payments as $value) { ?>
                <tr id="pid_<?php echo $value['order_payment_id']; ?>">
                    <td><b>#<?php echo $value['order_payment_id']; ?></b></td>
                    <td><a href="<?php echo $Url::createUrl("account/invoice",array('order_id'=>$value['order_id'])); ?>"><?php echo $value['order_id']; ?></a></td>
                    <td><?php echo $value['status']; ?></td>
                    <td><?php echo $value['date_added']; ?></td>
                    <td><b><?php echo $value['amount']; ?></b></td>
                    <td><a href="<?php echo $Url::createUrl("account/payment/receipt",array('payment_id'=>$value['order_payment_id'])); ?>" class="button">Ver Recibo</a></td>
                </tr>
                <?php } ?>
                <a class="action-button register-payment-action"href="<?php echo $Url::createUrl("account/payment/register"); ?>">Registrar Pago</a>
            </table>
            <?php if ($pagination) { ?><div class="pagination"><?php echo $pagination; ?></div><?php } ?>
            <?php } else { ?>
                <div class="no-info">No tiene ning&uacute;n pago registrado <a class="suggestion-action" href="<?php echo $Url::createUrl("account/payment/register"); ?>">¿Deasea registrar uno?</a></div>
            <?php } ?>
        </form>
    </div>
    <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/columns-end.tpl"); ?>
</section>
<script>
function filter() {
     var url = '';
    
    if ($('#filter_order').val()){
        url += '&order_id=' + $('#filter_order').val();
    }
    
    if ($('#filter_list').val()){
        url += '&payment_id=' + $('#filter_list').val();
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
    
    window.location.href = '<?php echo $Url::createUrl("account/payment"); ?>' + url;
    
    return false;
}
$('#filter').on('click',function(e){
    filter();
    return false;
});
$('#filter_list').on('keydown',function(e) {
    if (e.keyCode == 13) {
        filter();
    }
});
</script>
<?php echo $footer; ?>