// require
// - 'widget/menu/context/menu.context.js'
// - 'app_bar__search.js'
//
var app_bar__context__area = document.querySelector( '.app-bar__context_area' );

app_bar__context.addEventListener( 'click', function() {
	app_bar__context__area.removeClass( 'hide' );
	var app_bar_menu_context = app_bar__context__area.children[0];
	menu_context_show( app_bar_menu_context );
	el_layer = app_bar_menu_context.children[0];
	el_layer.addEventListener( 'click', function() {
		app_bar__context__area.addClass( 'hide' );
	});
})