
/*
 * GET users listing.
 */

var backronym = require('./backronym');

exports.index = function(req, res){
	// !! INSERT DATABASE QUERY!!
	var smeets = {name: "Axel Smeets", github: "https://github.com/MurlocBrand/"};
	var cblgh = {name: "Alexander Cobleigh", github: "https://github.com/cblgh"};
	var johnny = {name: "Johnny Hoang", github: "https://github.com/invalid"};
	var axel = {name: "Axel Mårtensson", github: "https://github.com/axelm/"};
	var timmy = {name: "Timmy Larsson", github: "https://github.com/invalid/"};
	var kasper = {name: "Kasper Socha", github: "https://github.com/invalid/"};
	var magnus = {name: "Magnus Tullberg", github: "https://github.com/invalid/"};

	var members = [smeets, cblgh, johnny, axel, timmy, kasper, magnus];

	res.render('people', { title: backronym.getBackronym(), members: members });
};