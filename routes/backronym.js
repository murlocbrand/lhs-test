exports.getBackronym = function(){
	var words = ['Lunds',   'Hacker', '#space' ,
				 'Large',   'Homo'  , 'Society',
				 'Long' ,   'Happy' , 'Smiley' ,
				 'Limited', 'Hyper' , 'Squid'  ];

	var rows = words.length / 3;

	var l = words[Math.floor(Math.random() * rows) * 3];
	var h = words[Math.floor(Math.random() * rows) * 3 + 1];
	var s = words[Math.floor(Math.random() * rows) * 3 + 2];

	var lhs = l + " " + h + " " + s;

	return lhs.replace(" #", "");
}