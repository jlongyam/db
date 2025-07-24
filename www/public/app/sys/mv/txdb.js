//===================================
//txdb: taxonomy database
//author: jlong yam | JL
//===================================
var txdb = {
  family: /*value*/[ 'Unknown'/*[1]*/ ],
  member: {
    /*key*/'Unknown'/*[1]*/: /*value*/[ 'Example', 'Other'/*[2]*/ ]
    },
  summary: {
    /*id*/'unique_id': {
      /*key*/'Unknown'/*[1]*/: /*value*/[ 'Example', 'Other'/*[2]*/ ]
      }
    },
  /* EXTEND, read-only, override, global-namespace */
  detail: {
    /*id*/'unique_id': /*value*/[ 'DYNAMIC_CONTENT' ]
    }
  };
//------------------------------------------------------
/* Relation
  [1] syncronize deep 1
    [a] family/create  -> member/create
    [b] family/rename  -> member/rename & summary/rename
    [c] family/delete  -> member/delete & summary/delete     
    [d] member/create  -> family/create
    [e] member/rename  -> family/rename & summary/rename
    [f] member/delete  -> family/delete & summary/delete
    [g] summary/create -> family/create & member/create
    [h] summary/rename -> family/rename & member/rename
    [i] summary/delete -> family/delete & member/delete
  [2] syncronize deep 2
    [a] member/create  ->
    [b] member/rename  -> summary/rename
    [c] member/delete  -> summary/delete
    [d] summary/create -> member/create
    [e] summary/rename -> member/rename
    [f] summary/delete -> member/delete
    */
