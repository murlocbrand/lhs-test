
/*
 * GET project listing.
 */

var backronym = require('./backronym');

exports.index = function(req, res){
  res.render('projects', { title: backronym.getBackronym() });
};