section.list.index = function() {
	var s_html = '', a_line = Object.keys( meta.line ), i;
	for( i = 0; i < a_line.length; i++ ) {
		var
			s_date = a_line[i].substring( 0, a_line[i].lastIndexOf( '/') ),
			s_title = a_line[i].substring( a_line[i].lastIndexOf( '/') + 1 )
		;
		var s_list_text =  '\
			<span class="list_text__body">' + s_title + '</span>\
			<span class="list_text__foot">' + s_date + '</span>\
		';
		s_html += '\
			<a class="list_item" href="#/detail/' + a_line[i] + '">\
				<div class="list_content">\
					<span class="list_text">' + s_list_text + '</span>\
					<i class="list_icon__after icon_svg">chevron-right</i>\
				</div>\
			</a>\
		';
	}
	return s_html;
}