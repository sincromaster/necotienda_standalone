<?php echo $header; ?>
<div class="grid_24">
    <div class="box">
        <div class="header">
            <h1><?php echo $heading_title; ?></h1>
            <div class="buttons">
                <a onclick="location = '<?php echo $insert; ?>'" class="button"><?php echo $button_insert; ?></a>
            </div>
        </div>    
          
        <div class="clear"></div><br />
        
        <h3>Filtros<span id="filters">[ Mostrar ]</span></h3>
        <form action="<?php echo $search; ?>" method="post" enctype="multipart/form-data" id="formFilter">        
            <div class="grid_11">
                <div class="row">       
                    <label>Nombre de la Lista de Contacto:</label>
                    <input type="text" name="filter_name" value="" />
                </div>
                    
                <div class="row">
                    <label>Contiene el Contacto:</label>
                    <input type="text" name="filter_contacts" value="" />
                </div>
                
                <div class="row">
                    <label>Ordernar Por:</label>
                    <select name="sort">
                        <option value="">Selecciona un campo</option>
                        <option value="cl.name">Nombre</option>
                        <option value="total_contacts">Cantidad de Contactos</option>
                        <option value="cl.date_added">Fecha Creado</option>
                    </select>
                </div>
            </div>
            
            <div class="grid_11">
                <div class="row">
                    <label>Fecha Inicial:</label>
                    <input type="date" name="filter_date_start" value="" />
                </div>
                <div class="row">
                    <label>Fecha Final:</label>
                    <input type="date" name="filter_date_end" value="" />
                </div>
                <div class="row">
                    <label>Mostrar:</label>
                    <select name="limit">
                        <option value="">Selecciona una cantidad</option>
                        <option value="10">10 Resultados por p&aacute;gina</option>
                        <option value="25">25 Resultados por p&aacute;gina</option>
                        <option value="50">50 Resultados por p&aacute;gina</option>
                        <option value="100">100 Resultados por p&aacute;gina</option>
                        <option value="150">150 Resultados por p&aacute;gina</option>
                    </select>
                </div>
            </div>
                        
            <div class="clear"></div><br />
        </form>
    </div>
</div>
<div class="clear"></div>
<?php if ($error_warning) { ?><div class="grid_24"><div class="message warning"><?php echo $error_warning; ?></div></div><?php } ?>
<?php if ($success) { ?><div class="grid_24"><div class="message success"><?php echo $success; ?></div></div><?php } ?>
<div class="grid_24" id="msg"></div>
<div class="clear"></div>
<div class="grid_24">
    <div class="box">
        <div id="gridPreloader"></div>
        <div id="gridWrapper"></div>
    </div>
</div>
<?php echo $footer; ?>