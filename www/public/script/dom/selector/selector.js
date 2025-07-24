// require 'type.js' 
function $( expr, con ) { return type( expr ) === 'string' ? ( con || document ).querySelector( expr ) : expr }
function $$( expr, con ) {
  var elements = ( con || document ).querySelectorAll( expr )  
  try {
    return Array.prototype.slice.call( elements )
    } catch(e) {
    var arr = Array( elements.length )
    for (var i = elements.length; i-- > 0; ) arr[i] = elements[i]
    return arr
    }
  }
  $$('[id]').forEach(function(element) { window[element.id] = element; })
