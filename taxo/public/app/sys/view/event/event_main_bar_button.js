//
event__main_bar_button = function() {
	main_bar_button.addEventListener( 'click', function() {
		if( this.textContent == 'All' ) this.textContent = 'Recent';
		else this.textContent = 'All';
		if( main_bar_heading.textContent == 'Recent' ) main_bar_heading.textContent = 'All';
		else main_bar_heading.textContent = 'Recent';
		list_show.toggleClass( '_index' );
		if( list_show.hasClass( '_index' ) ) list_show.innerHTML = section.list.index();
		else list_show.innerHTML = section.list.recent();
		icon_svg_setup_all();
		event__app_bar__search( 'list_text__body' );
		event__app_bar__sort( 'list_text__body' );
	});
}
