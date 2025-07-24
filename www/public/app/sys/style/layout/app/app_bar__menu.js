var
	app_bar__menu = document.querySelector( '.app-bar__menu' ),
	app_drawer = document.querySelector( '.app-drawer' ),
	app_drawer__layer = document.querySelector( '.app-drawer__layer' )
;
app_bar__menu.addEventListener( 'click', function(){
  app_drawer.toggleClass( 'show' );
  app_drawer__layer.toggleClass( 'show' );
});
app_drawer__layer.addEventListener( 'click', function(){
  app_drawer.toggleClass( 'show' );
  app_drawer__layer.toggleClass( 'show' );
});