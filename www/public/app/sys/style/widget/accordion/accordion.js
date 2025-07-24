function close_rest_opened( o_accordion_set, o_child_exceptional ) {
  var o_accordions = o_accordion_set.children, u;
  for( u = 0; u < o_accordions.length; u++ ) {
    if( o_accordions[u] == o_child_exceptional ) continue;
    if( o_accordions[u].open ) o_accordions[u].removeAttribute( 'open' );
  }
}
function accordion_setup_el( el ) {
  var accordions = el.children, a;
  for( a = 0; a < accordions.length; a++ ) {
    accordions[a].addEventListener( 'click', function() {
      if( !this.open ) close_rest_opened( this.parentElement, this );
    });
  }
}
function accordion_setup_all() {
  var accordion_set = document.querySelectorAll( '.accordion__set' ), i;
  for( i = 0; i < accordion_set.length; i++) {
    accordion_setup_el( accordion_set[i] )
  }
}
accordion_setup_all()