module.exports = (function(DEBUG){
/*----------------------------------------------------------------------------*/

  //top level module, no shortcuts
  var root = require('dsb-root'),
      has = require('dsb-has-lite');

/******************************************************************************/

  var node = ( has( root, 'process') && root.process.version );
  var isNode = ( node ? 'node' : 'browser' );

/******************************************************************************/

  return isNode;

/*----------------------------------------------------------------------------*/
}(0));
