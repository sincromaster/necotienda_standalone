<form id="<?php echo $name; ?>_form">
    <p style="text-align:center;font-size:10px;">{%<?php echo $name; ?>%}</p>
    <div class="row">
        <label for="<?php echo $name; ?>SettingsTitle"><?php echo $Language->get('entry_title'); ?></label>
        <input id="<?php echo $name; ?>SettingsTitle" name="Widgets[<?php echo $name; ?>][settings][title]" value="<?php echo isset($settings['title']) ? $settings['title'] : $Language->get('heading_title'); ?>" />
    </div>
    
    <div class="row">
        <label for="<?php echo $name; ?>SettingsClass"><?php echo $Language->get('entry_class'); ?></label>
        <input id="<?php echo $name; ?>SettingsClass" name="Widgets[<?php echo $name; ?>][settings][class]" value="<?php echo isset($settings['class']) ? $settings['class'] : ''; ?>" />
    </div>
    
    <div class="row">
        <label for="<?php echo $name; ?>SettingsAutoload"><?php echo $Language->get('entry_load'); ?></label>
        <input id="<?php echo $name; ?>SettingsAutoload" type="checkbox" name="Widgets[<?php echo $name; ?>][settings][autoload]" value="1" checked="checked" />
    </div>
    
    <div class="row">
        <label for="<?php echo $name; ?>SettingsShowonmobile"><?php echo $Language->get('Show On Mobile'); ?></label>
        <input id="<?php echo $name; ?>SettingsShowonmobile" type="checkbox" name="Widgets[<?php echo $name; ?>][settings][showonmobile]" value="1" checked="checked" />
    </div>

    <div class="row">
        <label for="<?php echo $name; ?>SettingsShowondesktop"><?php echo $Language->get('Show On Desktop'); ?></label>
        <input id="<?php echo $name; ?>SettingsShowondesktop" type="checkbox" name="Widgets[<?php echo $name; ?>][settings][showondesktop]" value="1" checked="checked" />
    </div>

    <div class="row">
        <label><?php echo $Language->get('entry_pageid'); ?></label>
        <input title="<?php echo $Language->get('help_pageid'); ?>" type="text" name="Widgets[<?php echo $name; ?>][settings][fblike_pageid]" value="<?php echo isset($settings['fblike_pageid']) ? $settings['fblike_pageid'] : ''; ?>" />
    </div>
    
    <div class="row">
        <label><?php echo $Language->get('entry_totalconnection'); ?></label>
        <input title="<?php echo $Language->get('help_totalconnection'); ?>" type="necoNumber" name="Widgets[<?php echo $name; ?>][settings][fblike_totalconnection]" value="<?php echo isset($settings['fblike_totalconnection']) ? $settings['fblike_totalconnection'] : 8; ?>" style="width: 40px;" />
    </div>
    
    <div class="row">
        <label><?php echo $Language->get('entry_width'); ?></label>
        <input title="<?php echo $Language->get('help_width'); ?>" type="necoNumber" name="Widgets[<?php echo $name; ?>][settings][fblike_width]" value="<?php echo isset($settings['fblike_width']) ? $settings['fblike_width'] : 200; ?>" style="width: 40px;" />
    </div>
    
    <div class="row">
        <label><?php echo $Language->get('entry_height'); ?></label>
        <input title="<?php echo $Language->get('help_height'); ?>" type="necoNumber" name="Widgets[<?php echo $name; ?>][settings][fblike_height]" value="<?php echo isset($settings['fblike_height']) ? $settings['fblike_height'] : 250; ?>" style="width: 40px;" />
    </div>
    
    <div class="row">
        <label><?php echo $Language->get('entry_stream'); ?></label>
        <select name="Widgets[<?php echo $name; ?>][settings][fblike_stream]">
            <option value="1"<?php if (isset($settings['fblike_stream'])) { ?> selected="selected"<?php } ?>><?php echo $Language->get('text_true'); ?></option>
            <option value="0"<?php if (!isset($settings['fblike_stream'])) { ?> selected="selected"<?php } ?>><?php echo $Language->get('text_false'); ?></option>
        </select>
    </div>
            
    <div class="row">
        <label><?php echo $Language->get('entry_header'); ?></label>
        <select name="Widgets[<?php echo $name; ?>][settings][fblike_header]">
            <option value="1"<?php if (isset($settings['fblike_header'])) { ?> selected="selected"<?php } ?>><?php echo $Language->get('text_true'); ?></option>
            <option value="0"<?php if (!isset($settings['fblike_header'])) { ?> selected="selected"<?php } ?>><?php echo $Language->get('text_false'); ?></option>
        </select>
    </div>
                  
    <div class="row">
        <label><?php echo $Language->get('entry_landing_page'); ?></label>
        <ul class="scrollbox" data-scrollbox="1">
            <li>
                <input id="<?php echo $name; ?>Settingslanding_pageall" type="checkbox" name="Widgets[<?php echo $name; ?>][landing_page][]" value="all"<?php if (empty($landing_pages)) { ?> checked="checked"<?php } ?> showquick="off" onchange="$('input.<?php echo $name; ?>_landing_pages').prop({ 'checked':this.checked, 'disabled':this.checked })" />
                <label for="<?php echo $name; ?>Settingslanding_pageall">Todo el sitio</label>
            </li>
        <?php foreach ($routes as $text_var => $landing_page) { ?>
            <li>
                <input id="<?php echo $name; ?>Settingslanding_page<?php echo $landing_page; ?>" class="<?php echo $name; ?>_landing_pages" type="checkbox" name="Widgets[<?php echo $name; ?>][landing_page][]" value="<?php echo $landing_page; ?>"<?php if (in_array($landing_page, $landing_pages)) { ?> checked="checked"<?php } elseif (empty($landing_pages)) { ?> checked="checked"<?php } ?> showquick="off" />
                <label for="<?php echo $name; ?>Settingslanding_page<?php echo $landing_page; ?>"><?php echo $Language->get($text_var); ?></label>
            </li>
        <?php } ?>
        </ul>
    </div>
    <input type="hidden" name="Widgets[<?php echo $name; ?>][settings][route]" value="module/fblike" />
</form>
<script>
$(function(){

});
</script>