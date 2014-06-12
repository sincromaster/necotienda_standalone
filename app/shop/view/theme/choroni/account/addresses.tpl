<?php echo $header; ?>
<?php echo $navigation; ?>
<div class="container">
    <section id="maincontent">
        <section id="content">
    
        <?php if ($column_left) { ?><aside id="column_left" class="grid_3"><?php echo $column_left; ?></aside><?php } ?>
        
        <?php if ($column_left && $column_right) { ?>
        <div class="grid_6">
        <?php } elseif ($column_left || $column_right) { ?>
        <div class="grid_9">
        <?php } else { ?>
        <div class="grid_12">
        <?php } ?>
            
			<h1><?php echo $heading_title; ?></h1>
            <?php if ($success) { ?><div class="success"><?php echo $success; ?></div><?php } ?>
            <?php if ($error) { ?><div class="warning"><?php echo $error; ?></div><?php } ?>
              
            <div class="clear"></div>
            
            <?php foreach ($addresses as $result) { ?>
            <div class="content">
              <table>
                <tr>
                  <td><?php echo $result['address']; if ($result['default']) { echo " (Predeterminada)"; } ?></td>
                  <td style="text-align: right;width:200px;"><a title="<?php echo $button_edit; ?>" onclick="location = '<?php echo str_replace('&', '&amp;', $result['update']); ?>'" class="button"><span><?php echo $button_edit; ?></span></a>&nbsp;<a title="<?php echo $button_delete; ?>" onclick="location = '<?php echo str_replace('&', '&amp;', $result['delete']); ?>'" class="button"><span><?php echo $button_delete; ?></span></a></td>
                </tr>
              </table>
            </div>
            <?php } ?>
            <a title="<?php echo $button_new_address; ?>" onclick="location = '<?php echo str_replace('&', '&amp;', $insert); ?>'" class="button"><?php echo $button_new_address; ?></a>
            
        </div>
        
        <?php if ($column_right) { ?><aside id="column_right" class="grid_3"><?php echo $column_right; ?></aside><?php } ?>

        </section>
    </section>
</div>
<?php echo $footer; ?>