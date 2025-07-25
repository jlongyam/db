// base: '.sys/view/dialog.js'
// html: '<span class="list_item" id="app_info">'

dialog_info__show = function() {
	dialog_clear();
  dialog_create();
  app_dialog_title.textContent = 'Info';
	app_dialog_cancel.style.visibility = 'hidden';
	var
		o_info = {
			'OS': platform.os.family + '-' + platform.os.version + ' x' + platform.os.architecture,
			'Browser': platform.name + ' ' + platform.version
		},
		s_info_row = '',
		a_info = Object.keys( o_info ),
		i
	;
	for( i = 0; i < a_info.length; i++ ) {
		s_info_row += '\
			<tr>\
				<td><b>' + a_info[i] + '</b></td>\
				<td>' + o_info[ a_info[i] ] + '</td>\
			</tr>\
		'
	}
	var s_info = '<table><tbody>' + s_info_row + '</tbody></table>';
	app_dialog_content.innerHTML = s_info;
	app_dialog_foot.innerHTML = '<button class="button dialog_button_action" id="app_dialog_action">OK</button>';
  dialog_show( app_dialog );
};
