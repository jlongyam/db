var content = [
	'\
		&lt;h1&gt;Hello Word&lt;/h1&gt;\n\
		&lt;p&gt;Word is different than world&lt;/p&gt;\n\
		&lt;p&gt;&lt;strong&gt;Do Something ..&lt;/strong&gt;&lt;/p&gt;\
	',
	'h1 { color: navy }',
	'document.querySelector(\'h1\').textContent += \'!\'',
	'\
		&lt;!doctype html&gt;\
		&lt;html&gt;\
		&lt;head&gt;\
		&lt;meta charset=\\\'utf-8\\\' /&gt;\
		&lt;style&gt;\
	',
	'\
		&lt;/style&gt;\
		&lt;/head&gt;\
		&lt;body&gt;\
	',
	'&lt;script&gt;',
	'\
		&lt;/script&gt;\
		&lt;/body&gt;\
		&lt;/html&gt;\
	'
];
detail.content = [
	'<fieldset>\
		<legend>Paste Area</legend>\
		<form>\
			<textarea placeholder="paste here" rows="5"></textarea><br />\
  		<input class="button _raised" type="reset" value="reset" />\
  	</form>\
  	</fieldset>\
  ',
	'<p><strong>Note</strong>: set <b>preview</b> and <b>copy</b> manually.</p>',
	'\
		<h3>Tab Single Source</h3>\
		<div class="tab wg_tab_preview">\
      <div class="tab-head">\
        <div class="tab-head-item active"><label for="tab_a0">Source</label></div>\
        <div class="tab-head-item" onclick="preview( ta_preview_0.value ).in_frame( \'ifr_preview_0\' )"><label for="tab_a1">Result in iframe</label></div>\
        <div class="tab-head-item" onclick="preview( ta_preview_0.value ).in_element( div_preview_0 )"><label for="tab_a2">Result in div</label></div>\
        <div class="tab-head-item" onclick="preview( ta_preview_0.value ).in_window()"><label>Open in new window</label></div>\
      </div>\
      <div class="tab-body">\
        <input class="tab-body-item-switch" type="radio" name="tabs_a" id="tab_a0" checked />\
        <div class="tab-body-item">\
        	<div class="tab_source_area">\
						<div class="ta-edit">\
							<div class="ta-box">\
								<textarea class="ta-box__area" id="ta_preview_0" data-lang="html">' + content[0] + '</textarea>\
							</div>\
						</div>\
					</div>\
		    	<div class="tab_control_area">\
		    		<span class="copy_info hide">Copied ..</span>\
						<button class="button _raised _copy_action" onclick="copyToClipboard( ta_preview_0.textContent )">copy</button>\
		    	</div>\
        </div>\
        <input class="tab-body-item-switch" type="radio" name="tabs_a" id="tab_a1" />\
        <div class="tab-body-item">\
        	<iframe id="ifr_preview_0" class="wg_tab_preview_result_iframe"></iframe>\
        </div>\
        <input class="tab-body-item-switch" type="radio" name="tabs_a" id="tab_a2" />\
        <div class="tab-body-item">\
        	<div id="div_preview_0" class="wg_tab_preview_result_div"></div>\
        </div>\
      </div>\
    </div>\
	',
	'\
		<h3>Tab Multi Source</h3>\
		<div class="tab wg_tab_preview">\
      <div class="tab-head">\
        <div class="tab-head-item active"><label for="tab_b0">HTML</label></div>\
        <div class="tab-head-item"><label for="tab_b1">CSS</label></div>\
        <div class="tab-head-item"><label for="tab_b2">JS</label></div>\
        <div class="tab-head-item"><label for="tab_b3" onclick="preview( [ \''+ content[3]+'\', ta_preview_2.value, \''+ content[4]+'\', ta_preview_1.value, \''+ content[5]+'\', ta_preview_3.value, \''+ content[6]+'\' ] ).in_frame( \'ifr_preview_1\' )">Result</label></div>\
        <div class="tab-head-item"><label for="tab_b3" onclick="preview( [ \''+ content[3]+'\', ta_preview_2.value, \''+ content[4]+'\', ta_preview_1.value, \''+ content[5]+'\', ta_preview_3.value, \''+ content[6]+'\' ] ).in_window()">Open</label></div>\
      </div>\
      <div class="tab-body">\
        <input class="tab-body-item-switch" type="radio" name="tabs_b" id="tab_b0" checked />\
        <div class="tab-body-item">\
        	<div class="tab_source_area">\
						<div class="ta-edit">\
							<div class="ta-box">\
								<textarea class="ta-box__area" id="ta_preview_1" data-lang="html">' + content[0] + '</textarea>\
							</div>\
						</div>\
					</div>\
		    	<div class="tab_control_area">\
		    		<span class="copy_info hide">Copied ..</span>\
						<button class="button _raised _copy_action" onclick="copyToClipboard( ta_preview_1.value )">copy</button>\
		    	</div>\
        </div>\
        <input class="tab-body-item-switch" type="radio" name="tabs_b" id="tab_b1" />\
        <div class="tab-body-item">\
        	<div class="tab_source_area">\
						<div class="ta-edit">\
							<div class="ta-box">\
								<textarea class="ta-box__area" id="ta_preview_2" data-lang="css">' + content[1] + '</textarea>\
							</div>\
						</div>\
					</div>\
		    	<div class="tab_control_area">\
		    		<span class="copy_info hide">Copied ..</span>\
						<button class="button _raised _copy_action" onclick="copyToClipboard( ta_preview_2.value )">copy</button>\
		    	</div>\
        </div>\
        <input class="tab-body-item-switch" type="radio" name="tabs_b" id="tab_b2" />\
        <div class="tab-body-item">\
        	<div class="tab_source_area">\
						<div class="ta-edit">\
							<div class="ta-box">\
								<textarea class="ta-box__area" id="ta_preview_3" data-lang="js">' + content[2] + '</textarea>\
							</div>\
						</div>\
					</div>\
		    	<div class="tab_control_area">\
		    		<span class="copy_info hide">Copied ..</span>\
						<button class="button _raised _copy_action" onclick="copyToClipboard( ta_preview_3.value )">copy</button>\
		    	</div>\
        </div>\
        <input class="tab-body-item-switch" type="radio" name="tabs_b" id="tab_b3" />\
        <div class="tab-body-item">\
        	<iframe id="ifr_preview_1" class="wg_tab_preview_result_iframe"></iframe>\
        </div>\
      </div>\
    </div>\
	'
];
