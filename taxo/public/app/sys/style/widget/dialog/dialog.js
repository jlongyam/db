// require 'cssclass.js'
function dialog_hide( o ) {
	o.removeClass( 'show' )
	}
function dialog_show( o ) {
	o.addClass( 'show' );
	var dlg_layer = o.children[1];
	dlg_layer.onclick = function() {
		dialog_hide( o );
	};
	var btn_cancel = o.children[0].lastElementChild.children[0];
	if( typeof btn_cancel == 'undefined' ) return; 
	if( btn_cancel.hasClass( 'dialog_button_cancel' ) ) {
		btn_cancel.onclick = function() {
			dialog_hide( o )
		}
	}
	var btn_action = o.children[0].lastElementChild.lastElementChild;
	if( typeof btn_action == 'undefined' ) return; 
	if( btn_action.hasClass( 'dialog_button_action' ) ) {
		btn_action.addEventListener( 'click', function() {
			dialog_hide( o )
		});
	}
	}
