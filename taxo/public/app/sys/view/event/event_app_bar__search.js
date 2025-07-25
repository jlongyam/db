//
event__app_bar__search = function( s_sort_class ) {
	var list_area__target = new List( list_show.parentElement, {
		valueNames: [ s_sort_class ]
	});
	app_bar__search_input_textfiled.addEventListener( 'keyup', function() {
		list_area__target.search( this.value );
	});
	app_bar__search_icon__close.addEventListener( 'click', function() {
		list_area__target.search();
	});
};