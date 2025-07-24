function table_sort_el( el ) {
	new Tablesort( el, { descending: true });
}
function table_sort_all() {
	var __table = document.querySelectorAll('table'), i;
	for( i = 0; i < __table.length; i++ )
		table_sort_el( __table[i] )
}
table_sort_all()
