//
page.tool.index = function() {
	app_main.innerHTML = section.main();
  app_bar__context.addClass( 'hide' );
	app_main.removeClass( 'page_detail grid _responsive' );
	app_main_bar.innerHTML = '\
		<ul class="breadcrumb _fix scrollable">\
			<li class="breadcrumb_item"><a href="#/tool">Tools</a></li>\
		</ul>\
	';
	var
		tools = [ 'encoder', 'stringer', 'db' ],
		s_html = '',
		i
	;
	for( i = 0; i < tools.length; i++ ) {
		s_html += '\
			<a class="list_item" href="#/tool/' + tools[i] + '">\
				<div class="list_content">\
					<span class="list_text">' + tools[i].toUpperCaseFirst() + '</span>\
					<i class="list_icon__after icon_svg">chevron-right</i>\
				</div>\
			</a>\
		'
	} 
	list_show.innerHTML = s_html;
	icon_svg_setup_all();
	app_bar__search.addClass( 'hidden' );
	app_bar__sort.addClass( 'hidden' );
};
page.tool.encoder = function() {
	app_main.innerHTML = '<section class="app-main__bar" id="app_main_bar"></section>';
	app_main_bar.innerHTML = '\
		<ul class="breadcrumb _fix scrollable">\
			<li class="breadcrumb_item"><a href="#/tool">Tools</a></li>\
			<li class="breadcrumb_item"><a href="#/tool/encoder">Encoder</a></li>\
		</ul>\
	';
	var s_html = '';
	s_html += '\
		<div class="tab wg_tab_prism" id="tab_encoder">\
			<div class="tab-head">\
				<div class="tab-head-item active"><label for="tab_encoder_radio_1">Source</label></div>\
				<div class="tab-head-item" id="encoder_action"><label for="tab_encoder_radio_2">Result</label></div>\
			</div>\
			<div class="tab-body">\
				<input class="tab-body-item-switch" type="radio" name="tab_encoders" id="tab_encoder_radio_1" checked />\
				<div class="tab-body-item">\
					<div class="tab_source_area">\
						<div class="ta-edit">\
							<div class="ta-box" id="ta_box_encoder">\
								<textarea class="ta-box__area" id="encoder_source" data-lang="html"></textarea>\
							</div>\
						</div>\
					</div>\
          <div class="tab_control_area">\
          	<input class="button _raised" type="reset" value="Reset" id="encoder_btn_reset" />\
          </div>\
        </div>\
        <input class="tab-body-item-switch" type="radio" name="tab_encoders" id="tab_encoder_radio_2" />\
				<div class="tab-body-item">\
					<div class="tab_result_area">\
						<textarea id="encoder_result" readonly>RESULT</textarea>\
					</div>\
          <div class="tab_control_area">\
          	<input class="button _raised" type="button" value="Mark"  id="encoder_btn_mark" />\
          	<input class="button _raised" type="button" value="Select"  id="encoder_btn_select" />\
          </div>\
        </div>\
			</div>\
		</div>\
	';
	app_main.innerHTML += '<section>' + s_html + '</section>';
	tab_active_setup_el( tab_encoder );
	var string_sample = '<code>var str = \'Text\'</code>';
	encoder_source.value = string_sample;
	editor_setup_el( ta_box_encoder );
  encoder_action.addEventListener( 'click', function() {
  	encoder_result.value = encoder_source.value.encodeHTML().escapeSingleQuote();
  });
  encoder_btn_mark.addEventListener( 'click', function() {
  	insert_tag( encoder_result );
  });
  encoder_btn_reset.addEventListener( 'click', function() {
		encoder_source.value = '';
		encoder_source.focus();
	});
	encoder_btn_select.addEventListener( 'click', function() {
		encoder_result.select();
	});
};
page.tool.stringer = function() {
	app_main.innerHTML = '<section class="app-main__bar" id="app_main_bar"></section>';
	app_main_bar.innerHTML = '\
		<ul class="breadcrumb _fix scrollable">\
			<li class="breadcrumb_item"><a href="#/tool">Tools</a></li>\
			<li class="breadcrumb_item"><a href="#/tool/stringer">Stringer</a></li>\
		</ul>\
	';
	var s_html = '';
	s_html += '\
		<div class="tab wg_tab_prism" id="tab_stringer">\
			<div class="tab-head">\
				<div class="tab-head-item active"><label for="tab_stringer_radio_1">Source</label></div>\
				<div class="tab-head-item" id="stringer_action"><label for="tab_stringer_radio_2">Result</label></div>\
			</div>\
			<div class="tab-body">\
				<input class="tab-body-item-switch" type="radio" name="tab_stringers" id="tab_stringer_radio_1" checked />\
				<div class="tab-body-item">\
					<div class="tab_source_area">\
						<div class="ta-edit">\
							<div class="ta-box" id="ta_box_stringer">\
								<textarea class="ta-box__area" id="stringer_source" data-lang="javascript"></textarea>\
							</div>\
						</div>\
					</div>\
          <div class="tab_control_area">\
          	<input class="button _raised" type="reset" value="Reset" id="stringer_btn_reset" />\
          </div>\
        </div>\
        <input class="tab-body-item-switch" type="radio" name="tab_stringers" id="tab_stringer_radio_2" />\
				<div class="tab-body-item">\
					<div class="tab_result_area">\
						<textarea id="stringer_result" readonly>RESULT</textarea>\
					</div>\
           <div class="tab_control_area">\
          	<input class="button _raised" type="button" value="No-NL"  id="stringer_btn_clean" />\
          	<input class="button _raised" type="button" value="Select"  id="stringer_btn_select" />\
          </div>\
        </div>\
			</div>\
		</div>\
	';
	app_main.innerHTML += '<section>' + s_html + '</section>';
	var string_sample = 'var foo = \'<h1>Foo</h1>\'';
  stringer_source.value = string_sample;
  editor_setup_el( ta_box_stringer );
  tab_active_setup_el( tab_stringer );
	stringer_action.addEventListener( 'click', function() {
		stringer_result.value = string_multi_line( stringer_source.value.escapeSingleQuote() );
	});
	stringer_btn_reset.addEventListener( 'click', function() {
		stringer_source.value = '';
		stringer_source.focus();
	});
	stringer_btn_clean.addEventListener( 'click', function() {
		stringer_result.value = stringer_result.value.replace( new RegExp( '\\\\n', 'g' ), '' );
	});
	stringer_btn_select.addEventListener( 'click', function() {
		stringer_result.select();
	});
};
page.tool.db = function() {
  app_main.innerHTML = '<section class="app-main__bar" id="app_main_bar"></section>';
  app_main_bar.innerHTML = '\
    <ul class="breadcrumb _fix scrollable">\
      <li class="breadcrumb_item"><a href="#/tool">Tools</a></li>\
      <li class="breadcrumb_item"><a href="#/tool/db">db</a></li>\
    </ul>\
  ';
  var s_html = '';
  s_html += '\
    <div class="tab wg_tab_prism" id="tab_db">\
      <div class="tab-head">\
        <div class="tab-head-item active"><label for="tab_db_radio_1">Data</label></div>\
        <div class="tab-head-item" id="db_process_action"><label for="tab_db_radio_2">Process</label></div>\
        <div class="tab-head-item"><label for="tab_db_radio_3">Result</label></div>\
      </div>\
      <div class="tab-body">\
        <input class="tab-body-item-switch" type="radio" name="tab_db" id="tab_db_radio_1" checked />\
        <div class="tab-body-item">\
          <div class="tab_source_area">\
            <div class="ta-edit">\
              <div class="ta-box" id="ta_box_db_data">\
                <textarea class="ta-box__area" id="db_source" data-lang="javascript" readonly data-cenverted="false"></textarea>\
              </div>\
            </div>\
          </div>\
          <div class="tab_control_area">\
            <input class="button _raised" type="reset" value="Convert" id="db_btn_convert" />\
          </div>\
        </div>\
        <input class="tab-body-item-switch" type="radio" name="tab_db" id="tab_db_radio_2" />\
        <div class="tab-body-item">\
          <h3 id="db_process_warning" style="padding-top: 10px; margin-left: 20px;">Please convert first!</h3>\
        </div>\
        <input class="tab-body-item-switch" type="radio" name="tab_db" id="tab_db_radio_3" />\
        <div class="tab-body-item">\
          <div class="tab_source_area">\
            <div class="ta-edit">\
              <div class="ta-box" id="ta_box_db_result">\
                <textarea class="ta-box__area" id="db_result" data-lang="javascript" readonly>//Please convert first!\n//Click to focus! bug!</textarea>\
              </div>\
            </div>\
          </div>\
          <div class="tab_control_area">\
            <input class="button _raised" type="reset" value="Refresh" id="db_btn_refresh" />\
            <input class="button _raised" type="reset" value="Save" id="db_btn_save" />\
          </div>\
        </div>\
      </div>\
    </div>\
  '
  app_main.innerHTML += '<section>' + s_html + '</section>';
  db_source.value = 'var meta = ' + javascriptStringify( meta, 0, 2 );
  editor_setup_el( ta_box_db_data );
  tab_active_setup_el( tab_db );
  editor_setup_el( ta_box_db_result );
  db_btn_convert.addEventListener( 'click', function() {
    db_source.value = 'var txdb = ' + javascriptStringify( new_txdb, 0, 2 );
    txdb = new_txdb;
    db_source.dataset.cenverted = 'true';
    db_source.focus();
    //
    meta = new_meta;
    db_result.value = 'var meta = ' + javascriptStringify( meta, 0, 2 );
  });
  db_process_action.addEventListener( 'click', function() {
    if( db_source.dataset.cenverted == "true" ) {
      db_process_warning.textContent = "Now safe to ECRD using console!";
    }
  });
  db_btn_refresh.addEventListener( 'click', function() {
    if( db_source.dataset.cenverted == "true" ) {
      meta = new_meta;
      db_result.value = 'var meta = ' + javascriptStringify( meta, 0, 2 );
      db_result.focus();
    }
  });
  db_btn_save.addEventListener( 'click', function() {
    // db_result.select();
    var file = new File([db_result.value], "meta.js", {type: "text/plain;charset=utf-8"});
    saveAs(file);
  });
};
