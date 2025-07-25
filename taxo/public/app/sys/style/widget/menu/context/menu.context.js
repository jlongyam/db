function menu_context_show( el ) {
	el.addClass( "show" );
  var el_layer = el.children[0];
  el_layer.addEventListener( 'click', function() {
    el.removeClass( 'show' );
  });
}
function menu_context_hide( el ) {
	el.removeClass( 'show' );
}