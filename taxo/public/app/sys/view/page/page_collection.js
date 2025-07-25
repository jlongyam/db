//
page.collection.index = function() {
	app_main.innerHTML = section.main();
  app_bar__context.removeClass( 'hide' );
	app_main.removeClass( 'page_detail grid _responsive' );
	app_main_bar.innerHTML = '\
		<ul class="breadcrumb scrollable">\
			<li class="breadcrumb_item"><a href="#/collection">Collection</a></li>\
		</ul>\
	';
	list_show.innerHTML = section.list.meta.index();
	icon_svg_setup_all();
	event__app_bar__search( 'list_text' );
	event__app_bar__sort( 'list_text' );
	app_bar__search.removeClass( 'hidden' );
	app_bar__sort.removeClass( 'hidden' );
};
page.collection.meta = function( o ) {
	var s_index = o.index;
	app_main.innerHTML = section.main();
	app_main.removeClass( 'page_detail grid _responsive' );
	app_main_bar.innerHTML = '\
		<ul class="breadcrumb scrollable">\
			<li class="breadcrumb_item"><a href="#/collection">Collection</a></li>\
			<li class="breadcrumb_item"><a href="#/collection/' + s_index + '">' + s_index + '</a></li>\
		</ul>\
	';
	list_show.innerHTML = section.list.meta.of( s_index );
	icon_svg_setup_all();
	event__app_bar__search( 'list_text' );
	event__app_bar__sort( 'list_text' );
	app_bar__search.removeClass( 'hidden' );
	app_bar__sort.removeClass( 'hidden' );
};
page.collection.line = function( o ) {
	var s_index = o.index;
	var s_meta = o.meta;
	app_main.innerHTML = section.main();
	app_main.removeClass( 'page_detail grid _responsive' );
	app_main_bar.innerHTML = '\
		<ul class="breadcrumb scrollable">\
			<li class="breadcrumb_item"><a href="#/collection">Collection</a></li>\
			<li class="breadcrumb_item"><a href="#/collection/' + s_index + '">' + s_index + '</a></li>\
			<li class="breadcrumb_item"><a href="#/collection/' + s_index + '/' + s_meta + '">' + s_meta + '</a></li>\
		</ul>\
	';
	list_show.innerHTML = section.list.meta.line( s_index, s_meta );
	icon_svg_setup_all();
	event__app_bar__search( 'list_text__body' );
	event__app_bar__sort( 'list_text__body' );
	app_bar__search.removeClass( 'hidden' );
	app_bar__sort.removeClass( 'hidden' );
};
