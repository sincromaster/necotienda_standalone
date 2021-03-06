<?php echo $header; ?>
<?php echo $navigation; ?>
<div class="container">
    
    <?php if ($breadcrumbs) { ?>
    <ul class="breadcrumb">
        <?php foreach ($breadcrumbs as $breadcrumb) { ?>
        <li><a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a></li>
        <?php } ?>
    </ul>
    <?php } ?>
    
    <?php if ($success) { ?><div class="grid_12"><div class="message success"><?php echo $success; ?></div></div><?php } ?>
    <?php if ($msg || $error_warning) { ?><div class="grid_12"><div class="message warning"><?php echo ($msg) ? $msg : $error_warning; ?></div></div><?php } ?>
    <?php if ($error) { ?><div class="grid_12"><div class="message error"><?php echo $error; ?></div></div><?php } ?>
    <div class="grid_12" id="msg"></div>
    
    <div class="box">
        <h1><?php echo $Language->get('heading_title'); ?></h1>
        <?php if ($post_id) { ?><a href="<?php echo $Url::createUrl("content/post",array('post_id'=>$post_id),'NONSSL',HTTP_CATALOG); ?>" target="_blank"><?php echo $Language->get('text_see_post_in_frontstore'); ?></a><?php } ?>
        <div class="buttons">
            <a onclick="saveAndExit();$('#form').submit();" class="button"><?php echo $Language->get('button_save_and_exit'); ?></a>
            <a onclick="saveAndKeep();$('#form').submit();" class="button"><?php echo $Language->get('button_save_and_keep'); ?></a>
            <a onclick="saveAndNew();$('#form').submit();" class="button"><?php echo $Language->get('button_save_and_new'); ?></a>
            <a onclick="location = '<?php echo $cancel; ?>';" class="button"><?php echo $Language->get('button_cancel'); ?></a>
        </div>
        
        <div class="clear"></div>
                                
        <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data" id="form">

            <div id="languages" class="htabs">
                <?php foreach ($languages as $language) { ?>
                <a tab="#language<?php echo $language['language_id']; ?>" class="htab"><img src="image/flags/<?php echo $language['image']; ?>" title="<?php echo $language['name']; ?>" /> <?php echo $language['name']; ?></a>
                <?php } ?>
                <?php foreach ($languages as $language) { ?>
                <div id="language<?php echo $language['language_id']; ?>">

                    <div class="row">
                        <label><?php echo $Language->get('entry_title'); ?></label>
                        <input class="post" id="description_<?php echo $language['language_id']; ?>_title" name="post_description[<?php echo $language['language_id']; ?>][title]" value="<?php echo isset($post_description[$language['language_id']]) ? $post_description[$language['language_id']]['title'] : ''; ?>" required="true" style="width:40%" />
                    </div>

                    <div class="clear"></div>

                    <div class="row">
                        <label><?php echo $Language->get('entry_meta_description'); ?></label>
                        <textarea title="<?php echo $Language->get('help_meta_description'); ?>" name="post_description[<?php echo $language['language_id']; ?>][meta_description]" cols="40" rows="5" style="width:40%"><?php echo isset($post_description[$language[ 'language_id']]) ? $post_description[$language[ 'language_id']][ 'meta_description'] : ''; ?></textarea>
                    </div>

                    <div class="row">
                        <label><?php echo $Language->get('entry_meta_keywords'); ?></label>
                        <textarea title="<?php echo $Language->get('help_meta_keywords'); ?>" name="post_description[<?php echo $language['language_id']; ?>][meta_keywords]" cols="40" rows="5" style="width:40%"><?php echo isset($post_description[$language[ 'language_id']]) ? $post_description[$language[ 'language_id']][ 'meta_keywords'] : ''; ?></textarea>
                    </div>

                    <div class="clear"></div>

                    <div class="row">
                        <label>SEO Url <b style="font:normal 10px verdana;color:#999;"><?php echo HTTP_CATALOG; ?></b></label>
                        <input type="text" id="description_<?php echo $language['language_id']; ?>_keyword" name="post_description[<?php echo $language['language_id']; ?>][keyword]" value="<?php echo isset($post_description[$language[ 'language_id']]) ? $post_description[$language[ 'language_id']][ 'keyword'] : ''; ?>" style="width:40%" />
                    </div>

                    <div class="clear"></div>

                    <div class="row">
                        <label><?php echo $Language->get('entry_description'); ?></label>
                        <div class="clear"></div>
                        <textarea title="<?php echo $Language->get('help_description'); ?>" name="post_description[<?php echo $language['language_id']; ?>][description]" id="description<?php echo $language['language_id']; ?>"><?php echo isset($post_description[$language[ 'language_id']]) ? $post_description[$language[ 'language_id']][ 'description'] : ''; ?></textarea>
                    </div>

                    <div class="clear"></div>

                </div>
                <?php } ?>
            </div>

            <div class="clear"></div><br />

            <div class="row">
                <label><?php echo $Language->get('Allow Comments'); ?></label>
                <input name="allow_reviews" value="1" type="checkbox"<?php if (!empty($allow_reviews) || !isset($allow_reviews)) { echo ' checked="checked"'; } ?> />
            </div>

            <div class="clear"></div>

            <div class="row">
                <label><?php echo $Language->get('entry_view'); ?></label>
                <select name="view">
                    <option value=""<?php if (empty($layout)) { echo ' selected="selected"'; } ?>><?php echo $Language->get('text_default'); ?></option>
                    <?php foreach ($views as $key => $value) { ?>
                    <optgroup label="<?php echo $value['folder']; ?>">
                        <?php foreach ($value['files'] as $k => $v) { ?>
                        <option value="<?php echo basename($value['folder']) ."/". basename($v); ?>"<?php if ($layout==basename($value['folder']) ."/". basename($v)) { echo ' selected="selected"'; } ?>><?php echo basename($v); ?></option>
                        <?php } ?>
                    </optgroup>
                    <?php } ?>
                </select>
            </div>

            <div class="clear"></div>

            <?php if ($customerGroups) { ?>
            <div class="row">
                <label><?php echo $Language->get('entry_customer_group'); ?></label>
                <input type="text" placeholder="Filtrar listado" value="" name="q" id="qCustomerGroups" />
                
                <div class="clear"></div>
                
                <ul id="customerGroupsWrapper" class="scrollbox" data-scrollbox="1">
                    <li>
                        <input id="scrollboxCustomerGroups0" type="checkbox" name="customer_groups[]" value="0"<?php if (in_array(0, $customer_groups) || !$post_id) { ?> checked="checked"<?php } ?> showquick="off" onchange="$('.customerGroups input').prop('checked', this.checked);" />
                        <label for="scrollboxCustomerGroups0"><?php echo $Language->get('text_all_public'); ?></label>
                    </li>
                    <?php foreach ($customerGroups as $group) { ?>
                    <li class="customerGroups">
                        <input id="scrollboxCustomerGroups<?php echo (int)$group['customer_group_id']; ?>" type="checkbox" name="customer_groups[]" value="<?php echo $group['customer_group_id']; ?>"<?php if (in_array($group['customer_group_id'], $customer_groups) || in_array(0, $customer_groups) || !$post_id) { ?> checked="checked"<?php } ?> showquick="off" />
                        <label for="scrollboxCustomerGroups<?php echo (int)$group['customer_group_id']; ?>"><?php echo $group['name']; ?></label>
                    </li>
                    <?php } ?>
                </ul>
            </div>
            <?php } else { ?>
            <input type="hidden" name="customer_groups[]" value="0" />
            <?php } ?>
    
            <div class="clear"></div>
            
            <div class="row">
                <label><?php echo $Language->get('entry_image'); ?></label>
                <a class="filemanager" data-fancybox-type="iframe" href="<?php echo $Url::createAdminUrl("common/filemanager"); ?>&amp;field=image&amp;preview=preview">
                <img src="<?php echo $preview; ?>" id="preview" class="image necoImage" width="100" />
                </a>
                <input type="hidden" name="image" value="<?php echo $image; ?>" id="image" onchange="$('#preview').attr('src', this.value);" />
                <br />
                <a class="filemanager" data-fancybox-type="iframe" href="<?php echo $Url::createAdminUrl("common/filemanager"); ?>&amp;field=image&amp;preview=preview" style="margin-left: 220px;color:#FFA500;font-size:10px">[ Cambiar ]</a>
                <a onclick="image_delete('image', 'preview');" style="color:#FFA500;font-size:10px">[ Quitar ]</a>
            </div>

            <div class="clear"></div><br />

            <div class="row">
                <label><?php echo $Language->get('Publicado'); ?></label>
                <input name="publish" value="1" type="checkbox"<?php if (!empty($publish) || !isset($publish)) { echo ' checked="checked"'; } ?> />
            </div>

            <div class="clear"></div>

            <div class="row">
                <label><?php echo $Language->get('entry_date_start'); ?></label>
                <input type="necoDate" name="date_publish_start" id="date_publish_start" value="<?php echo isset($date_publish_start) ? $date_publish_start : ''; ?>" style="width:40%" />
            </div>
            
            <div class="clear"></div>
            
            <div class="row">
                <label><?php echo $Language->get('entry_date_end'); ?></label>
                <input type="necoDate" name="date_publish_end" id="date_publish_end" value="<?php echo isset($date_publish_end) ? $date_publish_end : ''; ?>" style="width:40%" />
            </div>

            <div class="clear"></div>

            <div class="row">
                <label><?php echo $Language->get('entry_category'); ?></label>
                <input type="text" placeholder="Filtrar listado" value="" name="q" id="q" />
                <div class="clear"></div>
                <ul id="categoriesWrapper" class="scrollbox necoCategory">
                    <?php foreach ($categories as $category) { ?>
                    <li class="categories">
                        <input id="scrollboxCategories<?php echo (int)$category['post_category_id']; ?>" title="<?php echo $Language->get('help_category'); ?>" type="checkbox" name="post_category[]" value="<?php echo $category['post_category_id']; ?>"<?php if (in_array($category['post_category_id'], $post_category)) { ?> checked="checked"<?php } ?> showquick="off" />
                        <label for="scrollboxCategories<?php echo (int)$category['post_category_id']; ?>"><?php echo $category['name']; ?></label>
                    </li>
                    <?php } ?>
                </ul>
            </div>

            <?php if ($stores) { ?>
            <div class="clear"></div>
            <div class="row">
                <label><?php echo $Language->get('entry_store'); ?></label><br />
                <input type="text" title="Filtrar listado de tiendas y sucursales" value="" name="q" id="q" placeholder="Filtrar Tiendas" />
                <div class="clear"></div>
                <a onclick="$('#storesWrapper input[type=checkbox]').attr('checked','checked');">Seleccionar Todos</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a onclick="$('#storesWrapper input[type=checkbox]').removeAttr('checked');">Seleccionar Ninguno</a>
                <div class="clear"></div>
                <ul id="storesWrapper" class="scrollbox" data-scrollbox="1">
                    <li class="stores">
                        <input id="scrollboxStores0" type="checkbox" name="stores[]" value="0"<?php if (in_array(0, $_stores)) { ?> checked="checked"<?php } ?> showquick="off" />
                        <label for="scrollboxStores0"><?php echo $Language->get('text_default'); ?></label>
                        <div class="clear"></div>
                    </li>
                <?php foreach ($stores as $store) { ?>
                    <li class="stores">
                        <input id="scrollboxStores<?php echo (int)$store['store_id']; ?>" type="checkbox" name="stores[]" value="<?php echo (int)$store['store_id']; ?>"<?php if (in_array($store['store_id'], $_stores)) { ?> checked="checked"<?php } ?> showquick="off" />
                        <label for="scrollboxStores<?php echo (int)$store['store_id']; ?>"><?php echo $store['name']; ?></label>
                        <div class="clear"></div>
                    </li>
                <?php } ?>
                </ul>
            </div> 
            <?php } else { ?>
                <input type="hidden" name="stores[]" value="0" />
            <?php } ?>
            
            <div class="clear"></div><br />
            
        </form>
    </div>
</div>
<div class="sidebar" id="feedbackPanel">
    <div class="tab"></div>
    <div class="content">
        <h2>Sugerencias</h2>
        <p style="margin: -10px auto 0px auto;">Tu opini&oacute;n es muy importante, dinos que quieres cambiar.</p>
        <form id="feedbackForm">
            <textarea name="feedback" id="feedback" cols="60" rows="10"></textarea>
            <input type="hidden" name="account_id" id="account_id" value="<?php echo C_CODE; ?>" />
            <input type="hidden" name="domain" id="domain" value="<?php echo HTTP_CATALOG; ?>" />
            <input type="hidden" name="server_ip" id="server_ip" value="<?php echo $_SERVER['SERVER_ADDR']; ?>" />
            <input type="hidden" name="remote_ip" id="remote_ip" value="<?php echo $_SERVER['REMOTE_ADDR']; ?>" />
            <input type="hidden" name="server" id="server" value="<?php echo serialize($_SERVER); ?>" />
            <div class="clear"></div>
            <br />
            <div class="buttons"><a class="button" onclick="sendFeedback()">Enviar Sugerencia</a></div>
        </form>
    </div>
</div>
<div class="sidebar" id="toolPanel">
    <div class="tab"></div>
    <div class="content">
        <h2>Herramientas</h2>
        <p>S&aacute;cale provecho a NecoTienda y aumenta tus ventas.</p>
        <ul>
            <li><a onclick="$('#addsWrapper').slideDown();$('html, body').animate({scrollTop:$('#addsWrapper').offset().top}, 'slow');">Agregar Productos</a></li>
            <li><a class="trends" data-fancybox-type="iframe" href="http://www.necotienda.com/index.php?route=api/trends&q=samsung&geo=VE">Evaluar Palabras Claves</a></li>
            <li><a>Eliminar Esta Categor&iacute;a</a></li>
        </ul>
        <div class="toolWrapper"></div>
    </div>
</div>
<div id="jsWrapper"></div>
<script>
$(function() {
    if (!$.fn.fancybox) {
        $(document.createElement('script')).attr({
            src:'js/vendor/jquery.fancybox.pack.js',
            type:'text/javascript'
        }).appendTo('#jsWrapper');
    }
    if ($('link[href="<?php echo HTTP_HOME; ?>css/vendor/fancybox/jquery.fancybox.css"]')) {
        $(document.createElement('link')).attr({
            href:'<?php echo HTTP_HOME; ?>css/vendor/fancybox/jquery.fancybox.css',
            rel:'stylesheet'
        }).appendTo('head');
    }
    
    var height = $(window).height() * 0.8;
    var width = $(window).width() * 0.8;
    
    $(".filemanager").fancybox({
            maxWidth	: width,
            maxHeight	: height,
            fitToView	: false,
            width	: '90%',
            height	: '90%',
            autoSize	: false,
            closeClick	: false,
            openEffect	: 'none',
            closeEffect	: 'none'
    });
});
</script>
<?php echo $footer; ?>