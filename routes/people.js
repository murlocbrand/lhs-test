
/*
 * GET users listing.
 */

var backronym = require('./backronym');

exports.index = function(req, res){
  res.render('people', { title: backronym.getBackronym() });
};