//
function local_src_setup_all( s_ref ) {
	var o_links = document.querySelectorAll('.local_src'), i;
	for( i = 0; i < o_links.length; i++ ) {
		o_src_real = o_links[i].getAttribute( 'src' );
		o_links[i].src = config.data + '/' + s_ref + '/' + o_src_real;
	}
}// usage: local_links_setup_all( 'yyyy/mm/dd/Title' )
function local_href_setup_all( s_ref ) {
	var o_hrefs = document.querySelectorAll('.local_href'), i;
	for( i = 0; i < o_hrefs.length; i++ ) {
		o_href_real = o_hrefs[i].getAttribute( 'href' );
		o_hrefs[i].href = config.data + '/' + s_ref + '/' + o_href_real;
	}
}
function copy_action_button_setup_all() {
	var _copy_action = document.querySelectorAll( '._copy_action'), i;
	for( i = 0; i < _copy_action.length; i++ ) {
		_copy_action[i].addEventListener( 'click', function() {
			var copy_popup = this.previousElementSibling;
			copy_popup.removeClass( 'hide' );
			setTimeout(function(){
				copy_popup.addClass( 'hide' );
			}, 1500 );
		});
	}
}