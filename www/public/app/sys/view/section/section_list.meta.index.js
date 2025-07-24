section.list.meta.index = function() {
	var s_html = '', i;
	for( i = 0; i < meta.index.length; i++ ) {
		var s_list_meta_index = '\
			<div class="list_content">\
				<span class="list_text">' + meta.index[i] + '</span>\
				<i class="list_icon__after icon_svg">chevron-right</i>\
			</div>\
		';
		s_html += '<a class="list_item" href="#/collection/' + meta.index[i] + '">' + s_list_meta_index + '</a>';
	}
	return s_html
}