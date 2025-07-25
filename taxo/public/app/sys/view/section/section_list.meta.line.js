section.list.meta.line = function( s_index, s_of ) {
	var s_html = '', a_line = Object.keys( meta.line ), i, o_temp = {};
	for( i = 0; i < a_line.length; i++ ) { 
		if( s_index in meta.line[ a_line[i] ] ) {
			if( meta.line[ a_line[i] ][ s_index ].indexOf( s_of ) > -1 ) {
				o_temp[ a_line[i] ] = meta.line[ a_line[i] ];
			}
		}
	}
	var a, a_temp = Object.keys( o_temp );
	for( a = 0; a < a_temp.length; a++ ) {
		var
			s_date = a_temp[a].substring( 0, a_temp[a].lastIndexOf( '/') ),
			s_title = a_temp[a].substring( a_temp[a].lastIndexOf( '/') + 1 )
		;
		var s_list_text =  '\
			<span class="list_text__body">' + s_title + '</span>\
			<span class="list_text__foot">' + s_date + '</span>\
		';
		s_html += '\
			<a class="list_item" href="#/detail/' + a_temp[a] + '">\
				<div class="list_content">\
					<span class="list_text">' + s_list_text + '</span>\
					<i class="list_icon__after icon_svg">chevron-right</i>\
				</div>\
			</a>\
		';
	}
	return s_html
}
