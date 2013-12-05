
/*
 * GET home page.
 */
var backronym = require('./backronym');

exports.index = function(req, res){
  res.render('index', { title: backronym.getBackronym() });
};