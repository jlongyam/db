//
page.index = function() {
	app_main.innerHTML = section.main();
  app_bar__context.addClass( 'hide' );
	app_main.removeClass( 'page_detail grid _responsive' );
	app_main_bar.removeClass( 'scrollable_area' );
	app_main_bar.innerHTML = '\
		<div class="app-main__bar__left grid_cell _6-12">\
			<h2 id="main_bar_heading">Recent</h2>\
		</div>\
	  <div class="app-main__bar__right grid_cell _6-12">\
	  	<button class="button _raised" id="main_bar_button">All</button>\
	  </div>\
	';
	list_show.innerHTML = section.list.recent();
	icon_svg_setup_all();
	event__main_bar_button();
	app_bar__search.removeClass( 'hidden' );
	app_bar__sort.removeClass( 'hidden' );
};
