<?php echo $header; ?>
<?php echo $navigation; ?>
<section id="maincontent" class="row">
    <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/breadcumbs.tpl"); ?>
    <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/messages.tpl"); ?>
    <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/feature-widgets.tpl"); ?>

    <div class="large-12 medium-12 small-12 columns break">
        <span id="loginAction"></span>
        <span id="registerAction"></span>
        <div class="account-heading">
            <h1><?php echo $Language->get('text_account'); ?></h1>
        </div>
        <ul class="account-form-tabs tabs" data-tabs="account">
            <li class="tab login-tab">
                <a href="javascript:;" data-show="login" class="tab-item"><?php echo $Language->get('text_returning_customer'); ?></a>
            </li>
            <li class="tab register-tab">
                <a href="javascript:;" data-show="register" class="tab-item"><?php echo $Language->get('text_i_am_new_customer'); ?></a>
            </li>
        </ul>
        <div class="access-actions">
            <div id="loginForm" data-section="login" class="access-action simple-form">
                <form action="<?php echo str_replace('&', '&amp;', $action); ?>" method="post" enctype="multipart/form-data" id="login">
                    <?php echo isset($fkey)? $fkey : ''; ?>
                        <div class="login-entry form-entry">
                            <input type="text" name="email" id="loginEmail" placeholder="Email" />
                        </div>
                        <div class="password-entry form-entry">
                            <input type="password" name="password" id="password" autocomplete="off" placeholder="Contrase&ntilde;a" />
                        </div>

                    <?php if (isset($_GET['ri'])) { ?>
                    <div class="property">
                        <script type="text/javascript" src="http://www.google.com/recaptcha/api/challenge?k=6Le5f8cSAAAAANKTNJfbv88ufw7p06EJn32gzm8I"></script>
                        <div class="field">
                            <noscript>
                               <iframe src="http://www.google.com/recaptcha/api/noscript?k=6Le5f8cSAAAAANKTNJfbv88ufw7p06EJn32gzm8I" height="300" width="500" frameborder="0"></iframe><br />
                               <textarea name="recaptcha_challenge_field" rows="3" cols="40"></textarea>
                               <input type="hidden" name="recaptcha_response_field" value="manual_challenge" />
                            </noscript>
                            <div id="ntCaptcha"></div>
                        </div>
                    </div>
                    <?php } ?>
                    <div class="action-button action-login">
                        <a title="<?php echo $Language->get('button_login'); ?>" onclick="$('#login').submit();"><?php echo $Language->get('button_login'); ?></a>
                    </div>
                    <a class="action-forgotten" title="<?php echo $Language->get('text_forgotten_password'); ?>" href="<?php echo str_replace('&', '&amp;', $forgotten); ?>"><?php echo $Language->get('text_forgotten_password'); ?></a>
                    <?php if ($redirect) { ?>
                        <input type="hidden" name="redirect" value="<?php echo str_replace('&', '&amp;', $redirect); ?>" />
                    <?php } ?>
                </form>

                <?php if ($facebook_app_id) { ?>
                <a class="socialButton facebookButton" href="<?php echo $Url::createUrl("api/facebook",array('redirect'=>'login')); ?>"><?php echo $Language->get('button_login_with_facebook'); ?></a>
                <?php } ?>

                <?php if ($twitter_oauth_token_secret) { ?>
                <a class="socialButton twitterButton" href="<?php echo $Url::createUrl("api/twitter",array('redirect'=>'login')); ?>"><?php echo $Language->get('button_login_with_twitter'); ?></a>
                <?php } ?>

                <?php if ($google_client_id) { ?>
                <a class="socialButton googleButton" href="<?php echo $Url::createUrl("api/google",array('redirect'=>'login')); ?>"><?php echo $Language->get('button_login_with_google'); ?></a>
                <?php } ?>

                <?php if ($live_client_id) { ?>
                <a class="socialButton liveButton" href="<?php echo $Url::createUrl("api/live",array('redirect'=>'login')); ?>"><?php echo $Language->get('button_login_with_live'); ?></a>
                <?php } ?>
            </div>
            <div id="registerForm" data-section="register" class="access-action">
                <form action="<?php echo str_replace('&', '&amp;', $Url::createUrl('account/register')); ?>" method="post" enctype="multipart/form-data" id="create">
                    <div class="info-form">
                        <fieldset>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fragment/form-details-heading.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/email.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/name.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/lastname.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/company.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/rif.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/birthday.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/telephone.tpl"); ?>
                        </fieldset>
                    </div>

                    <div class="info-form">
                        <fieldset>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fragment/form-address-heading.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/country.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/zone.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/city.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/street.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/postcode.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/extra-address.tpl"); ?>
                        </fieldset>
                    </div>
                    <div class="info-form">
                        <fieldset>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fragment/form-password-heading.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/password.tpl"); ?>
                            <?php include(DIR_TEMPLATE. $this->config->get('config_template') ."/shared/fields/confirm.tpl"); ?>
                        </fieldset>
                    </div>

                    <p class="reminder">
                        <?php echo $Language->get('text_agree');?>
                        <a href='<?php echo $Url::createUrl("content/page", array("page_id"=>$page_legal_terms_id)); ?>'> Legales y de
                        &nbsp;<a href='<?php echo $Url::createUrl("content/page", array("page_id"=>$page_privacy_terms_id)); ?>'>Privacidad</a>
                    </p>

                    <input type="hidden" name="activation_code" value="<?php echo md5(rand(1000000,99999999)); ?>" />
                </form>
            </div>
        </div>
    </div>
  <!--/IMPLEMENTS MOBILE-DETECTED TO HANDLE NAVS-->
</section>
<script type="text/javascript">
$(function(){
    var $accountTabs = $("*[data-tabs='account']");
    var targetCache = {target: null};
    var emailField = $('#email'); 
    var companyField = $('#company');
    var namesFields = $('#firstname, #lastname');
    var firstNameField = $(namesFields[0]);
    var lastNameField = $(namesFields[1]);

    if (!$.fn.ntForm) {
        $(document.createElement('script')).attr({
            'src':'<?php echo HTTP_JS; ?>necojs/neco.form.js',
            'type':'text/javascript',
            'async':1
        }).appendTo('head');

    }
    if (!$.fn.ui) {
        $(document.createElement('script')).attr({
            'src':'<?php echo HTTP_JS; ?>vendor/jquery-ui.min.js',
            'type':'text/javascript',
            'async':1
        }).appendTo('head');
        
        $(document.createElement('link')).attr({
            'href':'<?php echo HTTP_CSS; ?>jquery-ui/jquery-ui.min.css',
            'rel':'stylesheet',
            'media':'all'
        }).appendTo('head');
    }
    
    $('#login input').keydown(function(e) {
    	if (e.keyCode == 13) {
            if ($('#email').val().length > 0 && $('#password').val().length > 0) {
                $('#login').submit();
            }
    	}
    });

    var showInputErrorFeedback = function (target, message) {
        var formEntry = target.parent();
        var messageElement = $('<p>').attr({
            id: 'emailCheckError',
        })
        .addClass('neco-submit-error')
        .html(message);

        target.removeClass('neco-input-success')
              .addClass('neco-input-error');
        formEntry.append(messageElement);
    };

    $('#create').ntForm({
        lockButton:false,
        url:'<?php echo str_replace('&', '&amp;', $Url::createUrl('account/register')); ?>'
    });

    var showInputSuccessFeedback = function (target) {
        var messageElement = $('#emailCheckError');
        target.removeClass('neco-input-error')
              .addClass('neco-input-success');
        if (messageElement.length !== 0) {
            messageElement.remove();
        }
    };

    emailField.on('change',function(e){
        $.post('<?php echo Url::createUrl("account/register/checkemail");?>', {email: $(this).val()},
            function(response){
                $('#tempLink').remove();
                var data = $.parseJSON(response);
                if (typeof data.error !== 'undefined') {
                    showInputErrorFeedback(emailField, data.msg);
                } else {
                    showInputSuccessFeedback(emailField);
                }
            });
        }
    );
    namesFields.on('change',function(e){
        var firstNameText = firstNameField.val();
        var lastNameText = lastNameField.val();
        var companyText = companyField.val();

        if (firstNameText.length !== 0 && lastNameText.length !== 0) {
           if (companyText.length === 0 ) {
              companyField.val(firstNameText.concat(' ')
                                            .concat(lastNameText))
                                            .trigger("keypress");
           }
        }
    });

    $accountTabs.on('click', function (e) {
        e.stopPropagation();
        var target = e.target;
        var $target = $(target);
        var show = target.dataset.show;
        var $sections = $("*[data-section]");

        if (targetCache[target]) {
           $(targetCache[target]).removeClass("active")
        }
        if (show) {
            $sections.each(function (i, section) {
                var $section = $(section);
                if (section.dataset.section === show) {
                    $section.css('display', 'block');
                } else {
                    $section.css('display', 'none');
                }
            });
            $target.addClass("active");
            targetCache[target] = target;
        }
    });

});
</script>
<?php echo $footer; ?>