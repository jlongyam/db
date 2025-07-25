// Internal
config.admin = true;
// Kodular, it's work!
//window.Kodular.getWebViewString()
//window.Kodular.setWebViewString( 'Kodular' );

// for 'yyyy/mm/dd/Title/detail.js'
detail = {};
// show body when ready
window.addEventListener( 'DOMContentLoaded', ( event ) => {
  document.body.removeClass( 'hide' );
});
//
title_bar.textContent = document.title = title_drawer.textContent = config.title;
// This code for old android browser
//if( platform.os.family == 'Android' ) load_css( 'sys/style/config/fallback.css' );
if( location.hash.length == 0 ) location = '#';
if( !config.admin ) {
  the_context.addClass( 'hide' );
  admin_tool.addClass( 'hide' );
  app_info.addClass( 'hide' );
}
var router = new Navigo(null, true, '#');
router.on({
	'/': page.index,
	'/collection': page.collection.index,
	'/collection/:index': page.collection.meta,
	'/collection/:index/:meta': page.collection.line,
	'/tool': page.tool.index,
	'/tool/encoder': page.tool.encoder,
	'/tool/stringer': page.tool.stringer,
  '/tool/db': page.tool.db,
	'/detail/:yyyy/:mm/:dd/:title': page.detail,
	'/edit': page.edit,
});
//
router.resolve();
//
