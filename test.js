module.exports = (function(DEBUG){
/*----------------------------------------------------------------------------*/

  var env = require('./index'),
    debug = require('dsb-debug-mini').create('env'),
     root = require('dsb-root'),
      has = require('dsb-has-lite');

/******************************************************************************/

  var node = ( has( root, 'process') && root.process.version );

  if( node )
    debug.test( 'env: node', env, 'node' );
  else
    debug.test( 'env: browser', env, 'browser' );

/******************************************************************************/

  return debug.complete();

/*----------------------------------------------------------------------------*/
}(0));
