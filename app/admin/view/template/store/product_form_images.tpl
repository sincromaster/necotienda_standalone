<div>
    <table id="images" class="list">
        <thead>
            <tr>
                <th><?php echo $Language->get('entry_image'); ?></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        <?php foreach ($product_images as $image_row => $product_image) { ?>
            <tr id="image_row<?php echo $image_row; ?>">
                <td>
                    <input type="hidden" name="product_image[<?php echo $image_row; ?>]" value="<?php echo $product_image['file']; ?>" id="image<?php echo $image_row; ?>">
                    <img src="<?php echo $product_image['preview']; ?>" id="preview<?php echo $image_row; ?>" class="image" onclick="image_upload('image<?php echo $image_row; ?>', 'preview<?php echo $image_row; ?>');">
                </td>
                <td><a onclick="$('#image_row<?php echo $image_row; ?>').remove();" class="button"><?php echo $Language->get('button_remove'); ?></a></td>
            </tr>
            <?php $image_row++; ?>
        <?php } ?>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td><a onclick="addImage();" class="button"><?php echo $Language->get('button_add_image'); ?></a></td>
            </tr>
        </tfoot>
    </table>
</div>
<script type="text/javascript">
var image_row = <?php echo (int)$image_row++; ?>;

function addImage() {
    html  = '<tr id="image_row' + image_row + '">';
	html += '<td class="left"><input type="hidden" name="product_image[' + image_row + ']" value="" id="image' + image_row + '"><img src="<?php echo $no_image; ?>" id="preview' + image_row + '" class="image" onclick="image_upload(\'image' + image_row + '\', \'preview' + image_row + '\');"></td>';
	html += '<td class="left"><a onclick="$(\'#image_row' + image_row  + '\').remove();" class="button"><span><?php echo $Language->get('button_remove'); ?></span></a></td>';
	html += '</tr>';
	
	$('#images tbody').append(html);
	
	image_row++;
}
</script>