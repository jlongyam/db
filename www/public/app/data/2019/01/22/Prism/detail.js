//
var content = [
	'&lt;code&gt;var <mark>str</mark> = \'Text\'&lt;/code&gt;',
	'\
		&lt;h5&gt;Hello Word&lt;/h5&gt;\n\
		&lt;p&gt;Word is different than world&lt;/p&gt;\n\
		&lt;p&gt;&lt;strong&gt;Do Something ..&lt;/strong&gt;&lt;/p&gt;\
	',
	'\
		$ ls <mark>-1</mark>\n\
		<mark class="blue">data</mark>/\n\
		index.html\n\
		README.md\
	'
]
detail.content = [
	'\
		<h3>standalone</h3>\
		<pre><code class="language-html">' + content[0] + '</code></pre>\
	',
	'<p><strong>Note</strong>: Don\'t use inside <code>fieldset</code> element.</p>',
	'<fieldset>\
		<legend>Paste Area</legend>\
		<form>\
			<textarea placeholder="paste here" rows="5"></textarea><br />\
  		<input class="button _raised" type="reset" value="reset" />\
  	</form>\
  	</fieldset>\
  ',
	'\
		<h3>figure mix</h3>\
		<figure>\
			<figcaption>Source</figcaption>\
			<pre id="content_0"><code class="language-html">' + content[1] + '</code></pre>\
			<div class="figure_control_area">\
				<span class="copy_info hide">Copied ..</span>\
				<button class="button _raised _copy_action" onclick="copyToClipboard( content_0.textContent )">copy</button>\
			</div>\
		</figure>\
	',
	'\
		<h3>wg_console</h3>\
		<figure class="wg_console">\
			<figcaption class="wg_console_title">Bash</figcaption>\
			<pre class="wg_console_content">\
				<code class="language-bash">' + content[2] + '</code>\
			</pre>\
		</figure>\
	',
	'\
		<h3>wg_accordion_prism</h3>\
		<div class="accordion__set wg_accordion_prism">\
      <details class="accordion">\
        <summary class="accordion__title">Source</summary>\
        <div class="accordion__content">\
        	<pre id="content_1"><code class="language-html">' + content[1] + '</code></pre>\
        	<div class="accordion_control_area">\
		    		<span class="copy_info hide">Copied ..</span>\
						<button class="button _raised _copy_action" onclick="copyToClipboard( content_0.textContent )">copy</button>\
		    	</div>\
        </div>\
      </details>\
      <details class="accordion">\
        <summary class="accordion__title">Console</summary>\
        <div class="accordion__content">\
        	<pre class="wg_console_content">\
						<code class="language-bash">' + content[2] + '</code>\
					</pre>\
        </div>\
      </details>\
    </div>\
	',
	'\
		<h3>wg_tab_prism</h3>\
		<div class="tab wg_tab_prism">\
      <div class="tab-head">\
        <div class="tab-head-item active"><label for="tab_a0">Source</label></div>\
        <div class="tab-head-item"><label for="tab_a1">Console</label></div>\
      </div>\
      <div class="tab-body">\
        <input class="tab-body-item-switch" type="radio" name="tabs_a" id="tab_a0" checked />\
        <div class="tab-body-item">\
		    	<pre id="content_2"><code class="language-html">' + content[1] + '</code></pre>\
		    	<div class="tab_control_area">\
		    		<span class="copy_info hide">Copied ..</span>\
						<button class="button _raised _copy_action" onclick="copyToClipboard( content_2.textContent )">copy</button>\
		    	</div>\
        </div>\
        <input class="tab-body-item-switch" type="radio" name="tabs_a" id="tab_a1" />\
        <div class="tab-body-item">\
        	<pre class="wg_console_content">\
						<code class="language-bash">' + content[2] + '</code>\
					</pre>\
        </div>\
      </div>\
    </div>\
	'
];