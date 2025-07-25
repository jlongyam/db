function type( obj, fullClass ) {
  if( fullClass ) return ( obj === null ) ? '[object Null]' : Object.prototype.toString.call( obj )
  if( obj == null ) return ( obj + '' ).toLowerCase()
  var deepType = Object.prototype.toString.call( obj ).slice( 8, -1 ).toLowerCase()
  if( deepType === 'generatorfunction' ) return 'function'
  return deepType.match(/^(array|bigint|date|error|function|generator|regexp|symbol)$/) ? deepType : ( typeof obj === 'object' || typeof obj === 'function') ? 'object' : typeof obj
  }
