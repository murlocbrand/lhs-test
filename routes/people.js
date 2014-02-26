
/*
 * GET users listing.
 */

var backronym = require('./backronym');

function createMember(name, link, note) {
	var member = {
		"name": name,
		"link": link,
		"note": note
	};
	return member;
	
}

exports.index = function(req, res){
	var members = [];

	// HAHAHAHAHAHAHAHAHAHAA
	var onelinerscriptforsmeets  = 	"<script>function mixit(){";
		onelinerscriptforsmeets += 		"var permutation = $('#smeetsdesc').text().split(' ');";
		onelinerscriptforsmeets += 		"for(var i = 0; i < permutation.length; i++){";
		onelinerscriptforsmeets += 			"var tmp = permutation[i];";
		onelinerscriptforsmeets += 			"var other = Math.floor(Math.random() * permutation.length);";
		onelinerscriptforsmeets += 			"permutation[i] = permutation[other];"
		onelinerscriptforsmeets += 			"permutation[other] = tmp;";
		onelinerscriptforsmeets += 		"}";
		onelinerscriptforsmeets += 		"$('#smeetsdesc').fadeOut(function(){";
		onelinerscriptforsmeets += 			"$('#smeetsdesc').text(permutation.join(' ')); $(this).fadeIn();";
		onelinerscriptforsmeets += 		"});";
		onelinerscriptforsmeets += 		"setTimeout(mixit, Math.floor(Math.random() * 5000 + 5000));";
		onelinerscriptforsmeets += "}";
		onelinerscriptforsmeets += "$(setTimeout(mixit, Math.floor(Math.random() * 5000 + 5000)));";
		onelinerscriptforsmeets += "</script>";

	members.push(createMember(
		"Axel Smeets",
		["http://www.github.com/MurlocBrand", "https://www.twitter.com/bazookarice"],
		"<p id='smeetsdesc'>R&D god of LHS; never stay long, always start new.</p>" + onelinerscriptforsmeets
	));

	members.push(createMember(
		"Alexander Cobleigh",
		["http://www.github.com/cblgh", "https://www.twitter.com/cblgh", "http://www.cblgh.org"],
		"<a onclick='$(this).slideToggle();' style='color: white;'>Idea engine, starter & literal fire that fuels projects until completion. The yin to Smeets yang.</a>"
	));

	// OOHOHOHOHOH I'm going insane over here :3:3
	var onelinerscriptformarten2 = "<script>" + 
		"var height = 300;" +  // this needs to be larger than the member div
		"var width = 300;" + 

		"var drop_size = 12;" + // pixels
		"var columns = width/drop_size;" + 

		"var chinese = 'ムタ123モラキ450シリエ6789スハヌトユABC二コクDEF';" + 
		"chinese = chinese.split('');" + 

		"var drops = [];" + 
		"for(var i = 0; i < columns; i++)" + 
			"drops[i] = 1;" +

		"ctx = document.getCSSCanvasContext('2d', 'squares', width, height);" + 

		"function draw()" + 
		"{"+
			"ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';"+
			"ctx.fillRect(0, 0, width, height);"+

			"ctx.fillStyle = '#0f0';"+
			"ctx.font= drop_size + 'px arial';"+
			"for(var i = 0; i < drops.length; i++)"+
			"{"+
				"text = chinese[Math.floor(Math.random()*chinese.length)];"+
				"ctx.fillText(text, i*drop_size, drops[i]*drop_size);"+

				"if(drops[i]*drop_size > height && Math.random() > 0.975)"+
					"drops[i] = 0;"+

				"drops[i]++;"+
			"}"+

		"}"+

		"setInterval(draw, 33);"+

	"</script>";

	members.push(createMember(
		"Axel Mårtenson",
		["http://www.github.com/axelmartensson"],
		"<script>$(function(){$('#marten').parent().parent().css('background', '-webkit-canvas(squares)');});</script>" + onelinerscriptformarten2 + "<p id='marten'>Self-proclaimed designer extraordinaire. With a profound respect for the 90s and the pillars behind modern programming: black & green.</p>"
	));

	members.push(createMember(
		"Johnny Hoang",
		["http://www.dansband.it"],
		"Putting the ludicrous in LHS."
	));

	res.render('people', { title: backronym.getBackronym(), members: members });
};
