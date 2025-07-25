function tab_head_item_activation( el ) {
	var o_parent_child = el.parentElement.children, i;
	for( i = 0; i < o_parent_child.length; i++ ) {
		if( o_parent_child[i] == el ) {
			if( el.hasClass( 'active' ) ) continue;
			else el.addClass( 'active' );
			continue;
		}
		o_parent_child[i].removeClass( 'active' );
	}
}
function tab_active_setup_el( o_tab ) {
	var tab_head_items = o_tab.children[0].children, i;
	for( i = 0; i < tab_head_items.length; i++ ) {
		tab_head_items[i].addEventListener( 'click', function() {
			tab_head_item_activation( this )
		});
	}
}
function tab_active_setup_all() {
	var tabs = document.querySelectorAll( '.tab' ), i;
	for( i = 0; i < tabs.length; i++ ) tab_active_setup_el( tabs[i] );
}
tab_active_setup_all()
