<?php echo $header; ?>
<?php if ($error_warning) { ?><div class="grid_24"><div class="message warning"><?php echo $error_warning; ?></div></div><?php } ?>
<?php if ($success) { ?><div class="grid_24"><div class="message success"><?php echo $success; ?></div></div><?php } ?>
<div class="box">
    <h1><?php echo $heading_title; ?></h1>
    <div class="buttons">
        <a onclick="saveAndExit();$('#form').submit();" class="button"><?php echo $button_save; ?></a>
        <a onclick="location = '<?php echo $cancel; ?>';" class="button"><?php echo $button_cancel; ?></a>
    </div>
        
    <div class="clear"></div>
                                
    <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data" id="form">
        <div class="htabs product_tabs">
            <a data-target="#general" class="htab"><?php echo $tab_general; ?></a>
            <a data-target="#store" class="htab"><?php echo $tab_store; ?></a>
            <a data-target="#local" class="htab"><?php echo $tab_local; ?></a>
            <a data-target="#option" class="htab"><?php echo $tab_option; ?></a>
            <a data-target="#image" class="htab"><?php echo $tab_image; ?></a>
            <a data-target="#mail" class="htab"><?php echo $tab_mail; ?></a>
            <a data-target="#server" class="htab"><?php echo $tab_server; ?></a>
        </div>
        
        <div class="product_tab" id="general"><?php require_once(dirname(__FILE__)."/setting_form_general.tpl"); ?></div>
        <div class="product_tab" id="store"><?php require_once(dirname(__FILE__)."/setting_form_store.tpl"); ?></div>
        <div class="product_tab" id="local"><?php require_once(dirname(__FILE__)."/setting_form_local.tpl"); ?></div>
        <div class="product_tab" id="option"><?php require_once(dirname(__FILE__)."/setting_form_option.tpl"); ?></div>
        <div class="product_tab" id="image"><?php require_once(dirname(__FILE__)."/setting_form_images.tpl"); ?></div>
        <div class="product_tab" id="mail"><?php require_once(dirname(__FILE__)."/setting_form_mail.tpl"); ?></div>
        <div class="product_tab" id="server"><?php require_once(dirname(__FILE__)."/setting_form_server.tpl"); ?></div>
    </form>
</div>

<script type="text/javascript">
$(document).ready(function() {
	jQuery('input[type=text],input[type=url],textarea,select,td:first-child').css({'width':'40%'});
	jQuery('input[type=number]').css({'width':'50px'});
	if (jQuery('#process_bounce:checked').val() != null) {
		jQuery("#bounce_process").show();
	} else {
		jQuery("#bounce_process").hide();
	}
	if (jQuery('#bounce_extraoption:checked').val() != null) {
		jQuery("#bounce_extra_sttings").show();
	} else {
		jQuery("#bounce_extra_sttings").hide();
	}
});
function other_setting(){
	if (jQuery('#extramail_others:checked').val() != null) {
		jQuery('#other').attr('disabled',false); 
	} else {
		jQuery('#other').attr('disabled',true); 
		jQuery('#other').val() = '';
	}
}
function show_bounce_settings() {
	var check = jQuery('#process_bounce:checked').val();
	if (jQuery('#process_bounce:checked').val() != null) {
		jQuery("#bounce_process").fadeIn();
	} else {
		jQuery("#bounce_process").fadeOut();
	}
}
jQuery("#bounce_extraoption").bind('click',function() {
	var check = jQuery('#bounce_extraoption:checked').val();
	if (jQuery('#bounce_extraoption:checked').val() != null) {
		jQuery("#bounce_extra_sttings").fadeIn();
	} else {
		jQuery("#bounce_extra_sttings").fadeOut();
	}
});
function bounce() {
	jQuery("#cmdTestBounce").fancybox({
				'width'				: '50%',
				'height'			: '50%',
				'autoScale'			: false,
				'type'				: 'ajax',
				'showCloseButton'   : true,
				'hideOnOverlayClick': false,
				'href'				: 'index.php?r=email/bounce/test&token=<?php echo $token; ?>&config_bounce_server=' + encodeURIComponent(jQuery("input[name='config_bounce_server']").val()) 
				+ '&config_bounce_username=' + encodeURIComponent(jQuery("input[name='config_bounce_username']").val()) 
				+ '&config_bounce_password=' + encodeURIComponent(jQuery("input[name='config_bounce_password']").val()) 
				+ '&config_bounce_protocol=' + encodeURIComponent(jQuery("select[name='config_bounce_protocol']").val()) 
				+ '&extra_mail_nossl=' + a("input[name='extra_mail_nossl']") 
				+ '&extra_mail_notls=' + a("input[name='extra_mail_notls']") 
				+ '&extra_mail_novalidate=' + a("input[name='extra_mail_novalidate']")
				+ '&extra_mail_others=' + encodeURIComponent(jQuery("input[name='extra_mail_others']").val())
				+ '&config_bounce_agree_delete=' + encodeURIComponent(jQuery("input[name='config_bounce_agree_delete']").val())
			});
}
function a(e) {
	if (jQuery(e+":checked").val() != null) {
		return encodeURIComponent(jQuery(e+":checked").val());
	} else {
		return '';
	}
}
</script>
<script type="text/javascript">
$('#template').load('index.php?r=setting/setting/template&token=<?php echo $token; ?>&template=' + encodeURIComponent($('select[name=\'config_template\']').attr('value')));
$("#_textos").click(function(){
    $("#textos").slideToggle();
    if ($(this).hasClass('slideOff')) {
        $(this).removeClass().addClass("slideOn");
    } else {
        $(this).removeClass().addClass("slideOff");
    }
});
$("#_fondos").click(function(){
    $("#fondos").slideToggle();
    if ($(this).hasClass('slideOff')) {
        $(this).removeClass().addClass("slideOn");
    } else {
        $(this).removeClass().addClass("slideOff");
    }
});
$("#_bordes").click(function(){
    $("#bordes").slideToggle();
    if ($(this).hasClass('slideOff')) {
        $(this).removeClass().addClass("slideOn");
    } else {
        $(this).removeClass().addClass("slideOff");
    }
});
$("#_imagenes").click(function(){
    $("#imagenes").slideToggle();
    if ($(this).hasClass('slideOff')) {
        $(this).removeClass().addClass("slideOn");
    } else {
        $(this).removeClass().addClass("slideOff");
    }
});
$("#_sombras").click(function(){
    $("#sombras").slideToggle();
    if ($(this).hasClass('slideOff')) {
        $(this).removeClass().addClass("slideOn");
    } else {
        $(this).removeClass().addClass("slideOff");
    }
});
$("#_botones").click(function(){
    $("#botones").slideToggle();
    if ($(this).hasClass('slideOff')) {
        $(this).removeClass().addClass("slideOn");
    } else {
        $(this).removeClass().addClass("slideOff");
    }
});
$('#zone').load('index.php?r=setting/setting/zone&token=<?php echo $token; ?>&country_id=<?php echo $config_country_id; ?>&zone_id=<?php echo $config_zone_id; ?>');
</script>
<?php echo $footer; ?>