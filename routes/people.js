
/*
 * GET users listing.
 */

var backronym = require('./backronym');

function createMember(thumb, name, link, note) {
	var member = {
		"name": name,
		"link": link,
		"note": note
	};
	return member;
	
}

exports.index = function(req, res){
	var members = [];

	members.push(createMember(
		"path-to-icodn",
		"Axel Smeets",
		["http://www.github.com/MurlocBrand", "https://www.twitter.com/bazookarice"],
		"Smeets jobbar fan bara med det som är kul, men slavar som få för vår"
		+ " nya sida!"
	));

	members.push(createMember(
		"path-to-icon",
		"Alexander Cobleigh",
		["http://www.github.com/cblgh", "https://www.twitter.com/cblgh", "http://www.cblgh.org"],
		"Denna mannen sysslar alldeles för mycket med slideToggles..."
	));

	members.push(createMember(
		"path-to-icon",
		"Axel Mårtenson",
		["http://www.github.com/axelmartensson"],
		"Självutnämnd designer extraordinär, hämtar inspiration från 90-talet"
		+ " samt grundpelarna i Matrix: svart & grönt."
	));

	members.push(createMember(
		"path-to-icon",
		"Johnny Hoang",
		["http://www.dansband.it"],
		"Ingen vet varifrån Johnny kom, inget vet vart han är på väg. Alla vet"
		+ " att man ska passa sig för pojken."
	));

	res.render('people', { title: backronym.getBackronym(), members: members });
};