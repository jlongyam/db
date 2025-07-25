// require 'cssclass.js'
//
function close_other_list_showed( o_except ) {
	var o_root_childs = o_except.parentElement.children, i;
	for( i = 0; i < o_root_childs.length; i++ ) {
		if( o_root_childs[i] == o_except ) continue;
		var el_item_child = o_root_childs[i].children, a;
		for( a = 0; a < el_item_child.length; a++ ) {
			if( el_item_child[a].hasClass( 'list' ) ) {
				// close
				el_item_child[a].addClass('hide');
				// iconizr
				var o_i_icon = el_item_child[a].previousElementSibling.lastElementChild;
				o_i_icon.removeClass('private_action');
				o_i_icon.innerHTML = 'chevron-left';
        icon_svg_setup( o_i_icon );
			}
		}
	}
}
function list_dropdown_el( el ) {
	var el_items = el.children, i;
	for( i = 0; i < el_items.length; i++ ) {
		var el_item_child = el_items[i].children, a;
		for( a = 0; a <  el_item_child.length; a++ ) {
			if( el_item_child[a].hasClass( 'list' ) ) {
				el_item_child[a].addClass( 'hide' );
				var o_toggler = el_item_child[a].parentElement.firstElementChild;
				o_toggler.addEventListener( 'click', function() {
					this.nextElementSibling.toggleClass( 'hide' );
					// autoclose
					close_other_list_showed( this.parentElement );
					// iconizr
					var o_i_icon = this.lastElementChild;
					o_i_icon.toggleClass('private_action');
					if( o_i_icon.hasClass('private_action') ) o_i_icon.innerHTML = 'chevron-down';
          else o_i_icon.innerHTML = 'chevron-left';
          icon_svg_setup( o_i_icon );
				});

			}
		}
	}
}
function list_dropdown_all() {
	var __list = document.querySelectorAll('.list_dropdown'), i;
	for( i = 0; i < __list.length; i++ ) list_dropdown_el( __list[i]);
}
list_dropdown_all();