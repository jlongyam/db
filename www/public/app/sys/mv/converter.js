// conversi from 'meta' for new 'txdb'

var new_txdb = {
  family: meta.index,
  member: meta.of,
  summary: meta.line
}
var new_meta = {
  index: new_txdb.family,
  of: new_txdb.member,
  line: new_txdb.summary
}
