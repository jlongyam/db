page.detail = function( p ) {
	var
		s_yyyy = p.yyyy,
		s_mm = p.mm,
		s_dd = p.dd,
		s_title = p.title
	;
	var s_path = s_yyyy + '/' + s_mm + '/' + s_dd + '/' + s_title;
	s_src_script = config.data + '/' + s_path + '/detail.js';
	show_page_detail = function() {
		var
			s_html_detail = s_sections = s_row_ref = '',
			a_content = detail.content,
			i
		;
		for( i = 0; i < a_content.length; i++ ) {
			var s_content = a_content[i].stripInitialWhitespace();
			s_sections += '<section>' + s_content + '</section>'
		}
		var a_meta = Object.keys( meta.line[ s_path ] ), a;
		for( a = 0; a < a_meta.length; a++ ) {
			var td_hook = '', u;
			var a_hook = meta.line[ s_path ][ a_meta[a] ];
			for( u = 0; u < a_hook.length; u++ ) {
				td_hook += '<a class="label _tag" href="#/collection/' + a_meta[a] + '/' +  a_hook[u] + '">' + a_hook[u]+ '</a>';
			}
			s_row_ref += '<div class="page_detail_meta__name"><b>' + a_meta[a] + '</b></div>';
			s_row_ref += '<div class="page_detail_meta__hook">' + td_hook + '</div>';
		}
		var
			s_article = '<main class="page_detail_main grid_cell _9-12">' + s_sections + '</main>',
			s_references = '\
				<footer class="page_detail_footer grid_cell _3-12">\
					<h3>Label</h3>\
					<div class="page_detail_meta">' + s_row_ref + '</div>\
				</footer>\
			'
		; 
		s_html_detail += '\
			<div class="grid _responsive">\
				<header class="page_detail_header grid_cell _12-12">\
				<h2>' + s_title + '</h2>\
				</header>'
				+ s_article
				+ s_references +
			'</div>'
		;
		app_main.innerHTML = s_html_detail;
		app_main.addClass( 'page_detail' );
		Prism.highlightAll();
		icon_svg_setup_all();
		table_sort_all();
		accordion_setup_all();
		tab_active_setup_all();
		local_src_setup_all( s_path );
		local_href_setup_all( s_path );
		copy_action_button_setup_all();
		editor_setup_all();
		pre_prepared_all();
	};
	if( typeof script_access == 'undefined' ) load_script( s_src_script, show_page_detail, 'script_access' );
	else load_script_swap( script_access, s_src_script, show_page_detail );
	app_bar__search.addClass( 'hidden' );
	app_bar__sort.addClass( 'hidden' );
};