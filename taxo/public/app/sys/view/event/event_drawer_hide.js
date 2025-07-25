function event__drawer_hide() {
	if( app_drawer__layer.hasClass( 'show') ) {
		app_drawer.toggleClass( 'show' );
  	app_drawer__layer.toggleClass( 'show' );
	}
}
var
	app_drawer__content = document.querySelector( '.app-drawer__content' ),
	app_drawer__list = app_drawer__content.children,
	i
;
for( i = 0; i < app_drawer__list.length; i++ ) {
	app_drawer__list[i].addEventListener( 'click', event__drawer_hide );
}