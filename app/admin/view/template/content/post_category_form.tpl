<?php echo $header; ?>
<?php if ($error_warning) { ?><div class="warning"><?php echo $error_warning; ?></div><?php } ?>
<div class="box">
        <h1><?php echo $heading_title; ?></h1>
        <div class="buttons">
            <a onclick="saveAndExit();$('#form').submit();" class="button"><?php echo $button_save_and_exit; ?></a>
            <a onclick="saveAndKeep();$('#form').submit();" class="button"><?php echo $button_save_and_keep; ?></a>
            <a onclick="saveAndNew();$('#form').submit();" class="button"><?php echo $button_save_and_new; ?></a>
            <a onclick="location = '<?php echo $cancel; ?>';" class="button"><?php echo $button_cancel; ?></a>
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
                            <label><?php echo $entry_name; ?></label>
                            <input class="category" id="category_description_<?php echo $language['language_id']; ?>_name" name="category_description[<?php echo $language['language_id']; ?>][name]" value="<?php echo isset($category_description[$language['language_id']]) ? $category_description[$language['language_id']]['name'] : ''; ?>" required="true" />
                        </div>
                        
                        <div class="clear"></div>
                        
                        <div class="row">
                            <label><?php echo $entry_meta_description; ?></label>
                            <textarea title="<?php echo $help_meta_description; ?>" name="category_description[<?php echo $language['language_id']; ?>][meta_description]" cols="40" rows="5"><?php echo isset($category_description[$language[ 'language_id']]) ? $category_description[$language[ 'language_id']][ 'meta_description'] : ''; ?></textarea>
                        </div>
                        
                        <div class="row">
                            <label><?php echo $entry_meta_keywords; ?></label>
                            <textarea title="<?php echo $help_meta_keywords; ?>" name="category_keywords[<?php echo $language['language_id']; ?>][meta_keywords]" cols="40" rows="5"><?php echo isset($category_keywords[$language[ 'language_id']]) ? $category_keywords[$language[ 'language_id']][ 'meta_keywords'] : ''; ?></textarea>
                        </div>
                        
                        <div class="clear"></div>
                                    
                        <div class="row">
                            <label><?php echo $entry_description; ?></label>
                            <div class="clear"></div>
                            <textarea title="<?php echo $help_description; ?>" name="category_description[<?php echo $language['language_id']; ?>][description]" id="description<?php echo $language['language_id']; ?>"><?php echo isset($category_description[$language[ 'language_id']]) ? $category_description[$language[ 'language_id']][ 'description'] : ''; ?></textarea>
                        </div>
                        
                        <div class="clear"></div>
                                    
                    </div>
            <?php } ?>
            </div>
            
            <div class="clear"></div>
            
            <div class="row">
                <label>Slug (<b style="font:normal 10px verdana;color:#999;"><?php echo HTTP_CATALOG; ?>/</b>)</label>
                <input type="text" id="slug" name="keyword" value="<?php echo $keyword; ?>" />
            </div>
            
            <div class="clear"></div>
            
            <div class="row">
                <label><?php echo $entry_category; ?></label>
                <select name="parent_id">
                    <option value="0"><?php echo $text_none; ?></option>
	           <?php foreach ($categories as $category) { ?>
                    <?php if ($category[ 'category_id']==$parent_id) { ?>
					<option value="<?php echo $category['category_id']; ?>" selected="selected"><?php echo $category[ 'name']; ?></option>
                    <?php } else { ?>
					<option value="<?php echo $category['category_id']; ?>"><?php echo $category[ 'name']; ?></option>
                    <?php } ?>
               <?php } ?>
               </select>
            </div>
            
            <div class="clear"></div>
            
            <div class="row">
                <label><?php echo $entry_image; ?></label>
                <input type="hidden" name="image" value="<?php echo $image; ?>" id="image" />
                <img alt="Imagen de la categor&iacute;a" src="<?php echo $preview; ?>" id="preview" class="image" onclick="image_upload('image', 'preview');" />
            </div>
                   
            <div class="clear"></div><br />
            
            <div id="addProductsPanel"><b>Agregar / Eliminar Productos</b></div>
            <div id="addProductsWrapper"><img src="image/nt_loader.gif" alt="Cargando..." /></div>
            
            <div class="clear"></div><br />
            
        </form>
</div>
<div class="sidebar" id="feedbackPanel">
    <div class="tab"></div>
    <div class="content">
        <h2>Sugerencias</h2>
        <p style="margin: -10px auto 0px auto;">Tu opini&oacute;n es muy importante, dinos que quieres cambiar.</p>
        <form id="feedbackForm">
            <textarea name="feedback" id="feedback" cols="60" rows="10"></textarea>
            <input type="hidden" name="account_id" id="account_id" value="<?php echo C_CODE; ?>" />
            <input type="hidden" name="domain" id="domain" value="<?php echo HTTP_DOMAIN; ?>" />
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
            <li><a onclick="$('#addProductsWrapper').slideDown();$('html, body').animate({scrollTop:$('#addProductsWrapper').offset().top}, 'slow');">Agregar Productos</a></li>
            <li><a class="trends" data-fancybox-type="iframe" href="http://www.necotienda.com/index.php?route=api/trends&q=samsung&geo=VE">Evaluar Palabras Claves</a></li>
            <li><a>Eliminar Esta Categor&iacute;a</a></li>
        </ul>
        <div class="toolWrapper"></div>
    </div>
</div>
<div class="sidebar" id="helpPanel">
    <div class="tab"></div>
    <div class="content">
        <h2>Ayuda</h2>
        <p>No entres en p&aacute;nico, todo tiene una soluci&oacute;n.</p>
        <ul>
            <li><a>&iquest;C&oacute;mo se come esto?</a></li>
            <li><a>&iquest;C&oacute;mo relleno este formulario?</a></li>
            <li><a>&iquest;Qu&eacute; significan las figuritas al lado de los campos?</a></li>
            <li><a>&iquest;C&oacute;mo me desplazo a trav&eacute;s de las pesta&ntilde;as?</a></li>
            <li><a>&iquest;Pierdo la informaci&oacute;n si me cambio de pesta&ntilde;a?</a></li>
            <li><a>Preguntas Frecuentes</a></li>
            <li><a>Manual de Usuario</a></li>
            <li><a>Videos Tutoriales</a></li>
            <li><a>Auxilio, por favor ay&uacute;denme!</a></li>
        </ul>
    </div>
</div>
<?php echo $footer; ?>