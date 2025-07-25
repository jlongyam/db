function textarea_prepared_el( el ) {
	el.value = el.value.stripInitialWhitespace().trim();
  el.spellcheck = false;
  el.wrap = 'off';
}
function textarea_prepared_all() {
	var __textarea = document.querySelectorAll('textarea'), i;
	for( i = 0; i < __textarea.length; i++ ) textarea_prepared_el( __textarea[i] )
}
textarea_prepared_all()
