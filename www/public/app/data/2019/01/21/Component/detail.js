detail.content = [
	'\
		<h3>Table and Text</h3>\
		<h3>Heading 3</h3>\
		<h4>Heading 4</h4>\
		<h5>Heading 5</h5>\
		<h6>Heading 6</h6>\
		<table>\
			<caption>Caption</caption>\
			<thead>\
				<tr><th>Code</th><th>Sample</th></tr>\
			</thead>\
			<tbody>\
				<tr><td><code>&lt;a&gt;</code></td><td><a href="about:blank"  onclick="return false">blank</a>, <a href="http://example.com" onclick="return false">example.com</a></td></tr>\
				<tr><td><code>&lt;dfn&gt;</code></td><td><dfn>dfn</dfn>, <dfn title="" class="hint--top hint--no-animate" aria-label="hint title, more ...">title</dfn></td></tr>\
				<tr><td><code>&lt;kbd&gt;</code></td><td><kbd>ctrl</kbd> + <kbd>s</kbd></td></tr>\
				<tr><td><code>&lt;q&gt;</code></td><td><q>inline</q></td></tr>\
				<tr><td><code>&lt;strong&gt;</code></td><td><strong>warning</strong></td></tr>\
				<tr><td><code>&lt;var&gt;</code></td><td><var>variable</var></td></tr>\
			</tbody>\
		</table>\
	',
	'\
		<h3>Container</h3>\
		<blockquote>\
			<h5>blockquote</h5>\
			<p>paragraph</p>\
			<small>small</small>\
		</blockquote>\
		<section>\
			<details>\
				<summary>See more below ..</summary>\
				<div>\
					Content-root\
					<details>\
						<summary>Nested</summary>\
						<div>Content-nested</div>\
					</details>\
				</div>\
			</details>\
		</section>\
		<fieldset>\
			<legend>Legend</legend>\
			<div>\
				<section>\
		    	<div class="button">div</div>\
		    	<button class="button">button</button>\
		    	<input class="button" type="button" value="input" />\
		    	<input class="button" type="reset" value="reset" />\
		    	<input class="button" type="submit" value="submit" />\
		    	<a class="button" href="javascript:void(0)">link</a>\
		    	<span class="button">span</span>\
		    	<button class="button" disabled>disabled</button>\
		    </section>\
		    <section>\
		    	<button class="button _raised">raised</button>\
		    	<button class="button _raised" disabled>disabled</button>\
		    	<button class="button _outline">outline</button>\
		    	<button class="button _outline" disabled>disabled</button>\
		    </section>\
				<section>\
		    	<label class="checkbox">\
		    		<input id="checkbox_1" class="checkbox_control" type="checkbox" />\
		    		<i class="checkbox_icon__off icon_svg">checkbox-blank-outline</i>\
		    		<i class="checkbox_icon__on icon_svg">checkbox-marked</i>\
		    	</label>\
		    	<label for="checkbox_1">checkbox_1</label>\
		    	<label class="checkbox">\
		    		<input id="checkbox_2" class="checkbox_control" type="checkbox" checked />\
		    		<i class="checkbox_icon__off icon_svg">checkbox-blank-outline</i>\
		    		<i class="checkbox_icon__on icon_svg">checkbox-marked</i>\
		    	</label>\
		    	<label for="checkbox_2">checkbox_2</label>\
		    </section>\
				<section>\
		    	<label class="radio">\
		    		<input id="radio_1" class="radio_control" type="radio" name="a_radio" />\
		    		<i class="radio_icon__off icon_svg">radiobox-blank</i>\
		    		<i class="radio_icon__on icon_svg">radiobox-marked</i>\
		    	</label>\
		    	<label for="radio_1">radio_1</label>\
		    	<label class="radio">\
		    		<input id="radio_2" class="radio_control" type="radio" name="a_radio" />\
		    		<i class="radio_icon__off icon_svg">radiobox-blank</i>\
		    		<i class="radio_icon__on icon_svg">radiobox-marked</i>\
		    	</label>\
		    	<label for="radio_2">radio_2</label>\
		    </section>\
				<section>\
		    	<button class="button _raised" onclick="dialog_show( a_dialog )">Select</button>\
		    	<div id="a_dialog" class="dialog">\
		    		<div class="dialog_content">\
		    			<div class="dialog_head">\
		    				<h1 class="dialog_head_title">Select</h1>\
		    			</div>\
		    			<div id="dialog_main" class="dialog_main _scrollable">\
		    				<ul class="list">\
							    <li class="list-item" onclick="dialog_hide( a_dialog )"><span class="list_content"><span class="list_text">One</span></span></li>\
				          <li class="list-item" onclick="dialog_hide( a_dialog )"><span class="list_content"><span class="list_text">Two</span></span></li>\
				          <li class="list-item" onclick="dialog_hide( a_dialog )"><span class="list_content"><span class="list_text">Three</span></span></li>\
				        </ul>\
		    			</div>\
		    		</div>\
		    		<div class="dialog_layer"></div>\
		    	</div>\
		    </section>\
			</div>\
		</fieldset>\
		<figure>\
			<figcaption>SampleAudio_0.4mb.mp3</figcaption>\
			<div>\
				<audio class="local_src" controls src="capture/SampleAudio_0.4mb.mp3"></audio>\
			</div>\
		</figure>\
		<figure>\
			<figcaption>SampleJPGImage_50kbmb.jpg</figcaption>\
			<div class="grid _center wg_img_container"><img class="local_src" src="capture/SampleJPGImage_50kbmb.jpg" /></div>\
		</figure>\
		<figure>\
			<figcaption>SampleVideo_1280x720_1mb.mp4</figcaption>\
			<div>\
				<video controls>\
      		<source class="local_src" src="capture/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />\
    		</video>\
			</div>\
		</figure>\
    <figure>\
      <figcaption>SampleIframeTarget.html</figcaption>\
      <div class="wg_iframe_container"><iframe class="local_src" src="capture/SampleIframeTarget.html"></iframe></div>\
    </figure>\
  ',
  '\
    <h3>pre</h3>\
    <pre>\n\
      PRE_CONTENT already strip from initial\n\
        white\n\
          space\n\
    </pre>\
	',
	'\
		<h3>dl</h3>\
		  <dl>\
		    <dt>Term</dt>\
		    <dd>Definition</dd>\
		    <dt>Term2</dt>\
		    <dd>nested\
		      <dl>\
		        <dt>Sub Term</dt>\
		        <dd>Definition</dd>\
		      </dl>\
		    </dd>\
		  </dl>\
	',
	'\
	  <h3>ol</h3>\
	  <ol>\
	    <li>ol list item 1</li>\
	    <li>nested\
	      <ol type="a">\
	        <li>ol list item nested 1</li>\
	        <li>ol list item nested 2</li>\
	        <li>ol list item nested 3</li>\
	      </ol>\
	    </li>\
	    <li>ol list item 2</li>\
	  </ol>\
	',
	'\
	  <h3>ul</h3>\
	  <ul>\
	    <li>ul list item 1</li>\
	    <li>expand\
	      <ul>\
	        <li>ul list item nested 1</li>\
	        <li>ul list item nested 2</li>\
	        <li>expand\
	          <ul>\
	            <li>list expand 1</li>\
	            <li>list expand 2</li>\
	          </ul>\
	        </li>\
	        <li>ul list item nested 4</li>\
	        <li>ul list item nested 5</li>\
	      </ul>\
	    </li>\
	    <li>ul list item 2</li>\
	    <li>ul list item 3</li>\
	  </ul>\
	',
	'\
		<h3>Steps</h3>\
    <ol class="steps">\
      <li>\
        <h6>Heading 6</h6>\
        <p>Todo that, don\'t do something.<br />Bla bla bla ..</p>\
        <p>Other paragraph.</p>\
      </li>\
      <li>Little do something else</li>\
      <li>\
        <h6>Next</h6>\
        <p>Don\'t do anything.</p>\
      </li>\
      <li>Done.</li>\
    </ol>\
  ',
  '\
		<h3>Tree</h3>\
    <ul class="tree">\
    <li>Myul\
      <ul>\
        <li>demo\
          <ul>\
            <li>file.js</li>\
            <li>other.txt</li>\
          </ul>\
        </li>\
        <li>Other\
          <ul>\
            <li>Done.css</li>\
            <li>One.txt</li>\
            <li>Two.js</li>\
            <li>Three.java</li>\
          </ul>\
        </li>\
      </ul>\
    </li>\
    <li>Folder\
      <ul>\
        <li>\
          (empty)\
        </li>\
      </ul>\
    </li>\
    </ul>\
  ',
  '\
  	<h3>Accordion set</h3>\
		<div class="accordion__set">\
      <details class="accordion">\
        <summary class="accordion__title">Content</summary>\
        <div class="accordion__content">\
        	CONTENT\
        </div>\
      </details>\
      <details class="accordion">\
        <summary class="accordion__title">More</summary>\
        <div class="accordion__content">TODO</div>\
      </details>\
    </div>\
  ',
  '\
  	<h3>Tabs</h3>\
		<div class="tab">\
      <div class="tab-head">\
        <div class="tab-head-item active"><label for="tab_body_item_switch_0">Fisrt</label></div>\
        <div class="tab-head-item"><label for="tab_body_item_switch_1">Second</label></div>\
      </div>\
      <div class="tab-body">\
        <input class="tab-body-item-switch" type="radio" name="tab_body_item_switch" id="tab_body_item_switch_0" checked />\
        <div class="tab-body-item">\
        	PLAIN_TEXT\
        </div>\
        <input class="tab-body-item-switch" type="radio" name="tab_body_item_switch" id="tab_body_item_switch_1" />\
        <div class="tab-body-item">\
          <h5>Heading 5</h5>\
          <p>Paragraph</p>\
        </div>\
      </div>\
    </div>\
  ',
  '<h3>local_href</h3>\
  <a class="local_href" href="capture/SampleIframeTarget.html">SampleIframeTarget</a>\
  ',
  '<h3>More Label</h3>\
  <div>label _follow <a class="label _follow" href="#" onclick="return false">Follow</a></div>\
  <div>label _ribbon <a class="label _ribbon" href="#" onclick="return false">Ribbon</a></div>\
  '
];