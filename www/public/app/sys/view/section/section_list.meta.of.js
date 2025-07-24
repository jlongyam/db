section.list.meta.of = function( s_index ) {
	var s_html = '', a_meta_of = meta.of[ s_index ], a;
	for( a = 0; a < a_meta_of.length; a++ ) {
		s_html += '\
			<a class="list_item" href="#/collection/' + s_index + '/' + a_meta_of[a] + '">\
				<div class="list_content">\
					<span class="list_text">' + a_meta_of[a] + '</span>\
					<i class="list_icon__after icon_svg">chevron-right</i>\
				</div>\
			</a>\
		'
	}
	return s_html
}
