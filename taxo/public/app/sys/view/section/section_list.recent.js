function recent_meta( max ) {
	var
		lines = Object.keys( meta.line )
		recent = ( max > lines.length ) ? 0 : lines.length - max,
		i = lines.length - 1,
		recents = []
	;
	for( i; i >= recent; i-- ) recents.push( lines[i] );
	return recents
}
section.list.recent = function() {
	var s_html = '', a_recent = recent_meta( config.recent ), i;
	for( i = 0; i < a_recent.length; i++ ) {
		var
			s_date = a_recent[i].substring( 0, a_recent[i].lastIndexOf( '/') ),
			s_title = a_recent[i].substring( a_recent[i].lastIndexOf( '/') + 1 )
		;
		var s_list_text =  '\
			<span class="list_text__body">' + s_title + '</span>\
			<span class="list_text__foot">' + s_date + '</span>\
		';
		s_html += '\
			<a class="list_item" href="#/detail/' + a_recent[i] + '">\
				<div class="list_content">\
					<span class="list_text">' + s_list_text + '</span>\
					<i class="list_icon__after icon_svg">chevron-right</i>\
				</div>\
			</a>\
		';
	}
	return s_html;
}