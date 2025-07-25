//
event__app_bar__sort = function( s_sort_class ) {
	var list_area__target = new List( list_show.parentElement, {
		valueNames: [ s_sort_class ]
	});
	app_bar__sort.addEventListener( 'click', function() {
		if( this.hasClass( 'private_action') ) {
			list_area__target.sort( s_sort_class, {
				order: 'asc'
			})
		}
		else {
			list_area__target.sort( s_sort_class, {
				order: 'desc'
			})
		}
	});
}
