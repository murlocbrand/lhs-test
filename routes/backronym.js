exports.getBackronym = function(){
	var words_l = [ 'Lunds', 'Large', 'Limited', 'Lakrits', 'Latent'];
	var words_h = [ 'Horticultural', 'Happy', 'Hacker', 'Horse'];
	var words_s = [ 'Society', 'Squad', '#space', 'Smiley', 'Squid', 'Swarm'];

	var l = words_l[Math.floor(Math.random() * words_l.length)];
	var h = words_h[Math.floor(Math.random() * words_h.length)];
	var s = words_s[Math.floor(Math.random() * words_s.length)];

	return (l + " " + h + " " + s).replace(" #", "");
}