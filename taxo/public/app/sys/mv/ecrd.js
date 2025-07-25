//------------------------------------------------------
// ECRD
// Exists, Create, Rename, Delete
//------------------------------------------------------
//ecrd-family-VALUE
  function txdb_family_value_exists( target_value ) {
    if( txdb.family.indexOf( target_value ) != -1 )
      return true;
    else return false;
    }
  function txdb_family_value_create( new_value ) {
    if( txdb_family_value_exists( new_value ) == false )
      txdb.family.push( new_value );
    }
  function txdb_family_value_rename( old_value, new_value ) {
    if( txdb_family_value_exists( old_value ) ) {
      let i_pos = txdb.family.indexOf( old_value );
      txdb.family[ i_pos ] = new_value;
      }
    }
  function txdb_family_value_delete( target_value ) {
    if( txdb_family_value_exists( target_value ) ) {
      let arr_buffer = [], i = 0;
      for( i; i < txdb.family.length; i++ ) {
        if( txdb.family[i] == target_value )
          continue;
        arr_buffer.push( txdb.family[i] );
        }
      txdb.family = arr_buffer;
      }
    }
//ecrd-member-KEY
  function txdb_member_key_exists( target_key ) {
    if( Object.keys( txdb.member ).indexOf( target_key ) != -1 )
      return true;
    else return false;
    }
  function txdb_member_key_create( new_key ) {
    if( txdb_member_key_exists( new_key ) == false )
      txdb.member[ new_key ] = [];
    }
  function txdb_member_key_rename( old_key, new_key ) {
    if( txdb_member_key_exists( old_key ) ) {
      let
        member_keys = Object.keys( txdb.member ),
        obj_buffer = {},
        i_pos = member_keys.indexOf( old_key ),
        i = 0
      ;
      for( i; i < member_keys.length; i++ ) {
        if( member_keys[i] == old_key )
          obj_buffer[ new_key ] = txdb.member[ member_keys[i] ];
        else obj_buffer[ member_keys[i] ] = txdb.member[ member_keys[i] ];
        }
      txdb.member = obj_buffer;
      }
    }
  function txdb_member_key_delete( target_key ) {
    if( txdb_member_key_exists( target_key ) )
      delete txdb.member[ target_key ];
    }
//ecrd-member-VALUE
  function txdb_member_value_exists( key_name, target_value ) {
    if( txdb.member[ key_name ].indexOf( target_value ) != -1 )
      return true;
    else return false;
    }
  function txdb_member_value_create( key_name, new_value ) {
    if( txdb_member_value_exists( key_name, new_value ) == false )
      txdb.member[ key_name ].push( new_value );
    }
  function txdb_member_value_rename( key_name, old_value, new_value ) {
    if( txdb_member_value_exists( key_name, old_value ) ) {
      let i_pos = txdb.member[ key_name ].indexOf( old_value );
      txdb.member[ key_name ][ i_pos ] = new_value;
      }
    }
  function txdb_member_value_delete( key_name, target_value ) {
    if( txdb_member_value_exists( key_name, target_value ) ) {
      let i_pos = txdb.member[ key_name ].indexOf( target_value );
      txdb.member[ key_name ].splice( i_pos, 1 );
      }
    }
//ecrd-summary-ID
  function txdb_summary_id_exists( target_id ) {
    if( Object.keys( txdb.summary ).indexOf( target_id ) != -1 )
      return true;
    else return false;
    }
  function txdb_summary_id_create( new_id ) {
    if( txdb_summary_id_exists( new_id ) == false  ) {
      let summary_ids = Object.keys( txdb.summary );
      txdb.summary[ new_id ] = {};
      }
    }
  function txdb_summary_id_rename( old_id, new_id ) {
    if(  txdb_summary_id_exists( old_id ) ) {
      let
        summary_ids = Object.keys( txdb.summary ),
        obj_buffer = {},
        i_pos = summary_ids.indexOf( old_id ),
        i = 0
        ;
      for( i; i < summary_ids.length; i++ ) {
        if( summary_ids[i] == old_id )
          obj_buffer[ new_id ] = txdb.summary[ summary_ids[i] ];
        else obj_buffer[ summary_ids[i] ] = txdb.summary[ summary_ids[i] ];
        }
      txdb.summary = obj_buffer;
      }
    }
  function txdb_summary_id_delete( target_id ) {
    if( txdb_summary_id_exists( target_id ) )
      delete txdb.summary[ target_id ];
    }
//ecrd-summary-KEY
  function txdb_summary_key_exists( id_name, target_key ) {
    if( Object.keys( txdb.summary[ id_name ] ).indexOf( target_key ) != -1 )
      return true;
    else return false;
    }
  function txdb_summary_key_create( id_name, new_key ) {
    if( txdb_summary_key_exists( id_name, new_key ) == false )
      txdb.summary[ id_name ][ new_key ] = [];
    }
  function txdb_summary_key_rename( id_name, old_key, new_key ) {
    if( txdb_summary_key_exists( id_name, old_key ) ) {
      let
        summary_keys = Object.keys( txdb.summary[ id_name ] ),
        i_pos = summary_keys.indexOf( old_key )
      ;
      if( i_pos != -1 ) {
        let
          obj_buffer = {},
          i = 0 
        ;
        for( i; i < summary_keys.length; i++ ) {
          if( summary_keys[i] == old_key ) {
            obj_buffer[ new_key ] = txdb.summary[ id_name ][ summary_keys[i] ];
            }
          else {
            obj_buffer[ summary_keys[i] ] = txdb.summary[ id_name ][ summary_keys[i] ];
            }
          }
        txdb.summary[ id_name ] = obj_buffer;
        }
      }
    }
  function txdb_summary_key_delete( id_name, target_key ) {
    if( txdb_summary_key_exists( id_name, target_key ) )
      delete txdb.summary[ id_name ][ target_key ];
    }
//ecrd-summary-VALUE
  function txdb_summary_value_exists( id_name, key_name, target_value ) {
    if( txdb.summary[ id_name ][ key_name ].indexOf( target_value ) != -1 )
      return true;
    else return false;
    }
  function txdb_summary_value_create( id_name, key_name, new_value ) {
    if( txdb_summary_value_exists( id_name, key_name, new_value ) == false )
      txdb.summary[ id_name ][ key_name ].push( new_value );
    }
  function txdb_summary_value_rename( id_name, key_name, old_value, new_value ) {
    if( txdb_summary_value_exists( id_name, key_name, old_value ) ) {
      let i_pos = txdb.summary[ id_name ][ key_name ].indexOf( old_value );
      if( i_pos != -1 )
        txdb.summary[ id_name ][ key_name ].splice( i_pos, 1, new_value );
      }
    }
  function txdb_summary_value_delete( id_name, key_name, target_value ) {
    if( txdb_summary_value_exists( id_name, key_name, target_value ) ) {
      let i_pos = txdb.summary[ id_name ][ key_name ].indexOf( target_value );
      txdb.summary[ id_name ][ key_name ].splice( i_pos, 1 );
      }
    }
//------------------------------------------------------
// SYNC
//------------------------------------------------------
//sync-family-VALUE
  function txdb_family_value_create_sync( new_value ) {
    txdb_family_value_create( new_value );
    txdb_member_key_create( new_value );
    }
  function txdb_family_value_rename_sync( old_value, new_value ) {
    txdb_family_value_rename( old_value, new_value );
    txdb_member_key_rename( old_value, new_value );
    let ids = Object.keys( txdb.summary ), i = 0 ;
    for( i; i < ids.length; i++ ) {
      let keys = Object.keys( txdb.summary[ ids[i] ] ), a = 0;
      for( a; a < keys.length; a++ ) {
        if( keys[a] == old_value )
          txdb_summary_key_rename( ids[i], keys[a], new_value );
        }
      }
    }
  function txdb_family_value_delete_sync( target_value ) {
    txdb_family_value_delete( target_value );
    txdb_member_key_delete( target_value );
    let ids = Object.keys( txdb.summary ), i = 0 ;
    for( i; i < ids.length; i++ ) {
      let keys = Object.keys( txdb.summary[ ids[i] ] ), a = 0;
      for( a; a < keys.length; a++ ) {
        if( keys[a] == target_value )
          txdb_summary_key_delete( ids[i], target_value );
        }
      }
    }
//sync-member-KEY
  function txdb_member_key_create_sync( new_key ) {
    txdb_member_key_create( new_key );
    txdb_family_value_create( new_key );
    }
  function txdb_member_key_rename_sync( old_key, new_key ) {
    txdb_member_key_rename( old_key, new_key );
    txdb_family_value_rename( old_key, new_key );
    let ids = Object.keys( txdb.summary ), i = 0 ;
    for( i; i < ids.length; i++ ) {
      let keys = Object.keys( txdb.summary[ ids[i] ] ), a = 0;
      for( a; a < keys.length; a++ ) {
        if( keys[a] == old_key )
          txdb_summary_key_rename( ids[i], keys[a], new_key )
        }
      }
    }
  function txdb_member_key_delete_sync( target_key ) {
    txdb_member_key_delete( target_key );
    txdb_family_value_delete( target_key );
    let ids = Object.keys( txdb.summary ), i = 0 ;
    for( i; i < ids.length; i++ ) {
      let keys = Object.keys( txdb.summary[ ids[i] ] ), a = 0;
      for( a; a < keys.length; a++ ) {
        if( keys[a] == target_key )
          txdb_summary_key_delete( ids[i], target_key );
        }
      }
    }
//sync-member-VALUE
  function txdb_member_value_rename_sync( key_name, old_value, new_value ) {
    txdb_member_value_rename( key_name, old_value, new_value );
    let ids = Object.keys( txdb.summary ), i = 0 ;
    for( i; i < ids.length; i++ ) {
      let keys = Object.keys( txdb.summary[ ids[i] ] ), a = 0;
      for( a; a < keys.length; a++ ) {
        if( keys[a] == key_name )
          txdb_summary_value_rename( ids[i], key_name, old_value, new_value );
        }
      }
    }
  function txdb_member_value_delete_sync( key_name, target_value ) {
    txdb_member_value_delete( key_name, target_value );
    let ids = Object.keys( txdb.summary ), i = 0 ;
    for( i; i < ids.length; i++ ) {
      let keys = Object.keys( txdb.summary[ ids[i] ] ), a = 0;
      for( a; a < keys.length; a++ ) {
        if( keys[a] == key_name )
          txdb_summary_value_delete( ids[i], key_name, target_value )
        }
      }
    }
//sync-summary-KEY
  function txdb_summary_key_create_sync( id_name, new_key ) {
    txdb_summary_key_create( id_name, new_key );
    txdb_member_key_create( new_key );
    txdb_family_value_create( new_key );
    }
  function txdb_summary_key_rename_sync( id_name, old_key, new_key ) {
    txdb_summary_key_rename( id_name, old_key, new_key );
    txdb_member_key_rename( old_key, new_key );
    txdb_family_value_rename( old_key, new_key );
    }
  function txdb_summary_key_delete_sync( id_name, target_key ) {
    txdb_summary_key_delete( id_name, target_key );
    txdb_member_key_delete( target_key );
    txdb_family_value_delete( target_key );
    }
//sync-summary-VALUE
  function txdb_summary_value_create_sync( id_name, key_name, new_value ) {
    txdb_summary_value_create( id_name, key_name, new_value );
    txdb_member_value_create( key_name, new_value );
    }
  function txdb_summary_value_rename_sync( id_name, key_name, old_value, new_value ) {
    txdb_summary_value_rename( id_name, key_name, old_value, new_value )
    txdb_member_value_rename( key_name, old_value, new_value );
    }
  function txdb_summary_value_delete_sync( id_name, key_name, target_value ) {
    txdb_summary_value_delete( id_name, key_name, target_value );
    txdb_member_value_delete( key_name, target_value );
    }
