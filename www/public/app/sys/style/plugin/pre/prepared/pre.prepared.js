function pre_prepared_el( el ) {
	el.innerHTML = el.innerHTML.stripInitialWhitespace().trim();
}
function pre_prepared_all() {
	var __pre = document.querySelectorAll('pre'), i;
	for( i = 0; i < __pre.length; i++ ) pre_prepared_el( __pre[i] )
}
pre_prepared_all()
