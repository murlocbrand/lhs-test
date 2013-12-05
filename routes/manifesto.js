
/*
 * GET manifesto listing.
 */

var backronym = require('./backronym');

exports.index = function(req, res){
  res.render('manifesto', { title: backronym.getBackronym() });
};