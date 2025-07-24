// require 'app_bar__menu.js'
var
	app_bar__search = document.querySelector('.app-bar__search'),
	app_bar__search_icon__magnify = document.querySelector('.app-bar__search-icon--magnify'),
	app_bar__search_input = document.querySelector('.app-bar__search-input'),
	app_bar__search_input_textfiled = app_bar__search_input.children[0],
	app_bar__search_icon__close = document.querySelector('.app-bar__search-icon--close'),
	app_bar__title = document.querySelector('.app-bar__title'),
	app_bar__sort = document.querySelector('.app-bar__sort'),
	app_bar__context = document.querySelector('.app-bar__context')
;
app_bar__search_icon__magnify.addEventListener( 'click', function() {
  this.addClass( 'private_action' );
	if( this.hasClass( 'private_action') ) {
		app_bar__search.addClass('action');
		app_bar__title.addClass('search_action');
		app_bar__sort.addClass('search_action');
		app_bar__context.addClass('search_action');
		app_bar__menu.addClass('search_action');
		app_bar__search_input_textfiled.focus();
	}
	else {
		app_bar__search_input_textfiled.value = null;
		app_bar__search_input_textfiled.focus();
		// search TODO
	}
});
app_bar__search_icon__close.addEventListener( 'click', function() {
	app_bar__search_icon__magnify.removeClass( 'private_action' );
	app_bar__search.removeClass('action');
	app_bar__title.removeClass('search_action');
	app_bar__sort.removeClass('search_action');
	app_bar__context.removeClass('search_action');
	app_bar__menu.removeClass('search_action');
	app_bar__search_input_textfiled.value = null;
});