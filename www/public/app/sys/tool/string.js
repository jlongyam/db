String.prototype.toUpperCaseFirst = function() {
  return this.substring( 0, 1 ).toUpperCase() + this.substring( 1 );
};
String.prototype.encodeHTML = function() {
  var map = {
    '<': '&lt;',
    '>': '&gt;'
  };
  return this.replace( /[<>]/g, function( m ) { return map[m] } );
};
String.prototype.stripInitialWhitespace = function() {
  var
    pttrn = /^\s*(?=[^\s]+)/mg,
    indentLen = this.match( pttrn ).reduce( function( min, line ) { return Math.min( min, line.length ) }, Infinity ),
    indent = new RegExp('^\\s{' + indentLen + '}', 'mg')
  ;
  return indentLen > 0 ? this.replace( indent, '' ) : this;
};
String.prototype.escapeSingleQuote = function() {
  var map = { '"': '"', "'": '\\\'' };
  return this.replace( /"|'/g, function( m ) { return map[m] } );
};