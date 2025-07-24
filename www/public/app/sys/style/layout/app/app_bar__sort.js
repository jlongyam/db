var app_bar__sort = document.querySelector( '.app-bar__sort' );
app_bar__sort.addEventListener( 'click', function() {
	this.toggleClass( 'private_action' );
	if( this.hasClass( 'private_action') ) {
		this.children[0].innerHTML = 'sort-ascending';
		icon_svg_setup( this.children[0] );
	}
	else {
		this.children[0].innerHTML = 'sort-descending';
		icon_svg_setup( this.children[0] );
	}
});