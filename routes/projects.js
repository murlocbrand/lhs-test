
/*
 * GET project listing.
 */

var backronym = require('./backronym');

exports.index = function(req, res){
    var projects = [];

    projects.push(
    {
        "title" : "Piratradio",
        "desc" : "Lyssna på all gratismusik som finns, och lite till - kanske?",
        "authors" : "Axel Smeets<br>Alexander Cobleigh<br>Axel Mårtensson",
        "link" : "notyetpublished/piratrad.io"
    });

    projects.push(
    {
        "title" : "Backronym Generator",
        "desc" : "Mannen har gjort det igen. Använder sig av Python 2.7",
        "authors" : "Alexander Cobleigh",
        "link" : "http://www.github.com/cblgh/backronym-gen.py"
    });

    projects.push(
    {
        "title" : "Hush",
        "desc" : "Byter 90-tals tränden mot sent 2013, alla har appar."
                + "<br>Appar som stör möten...",
        "authors" : "Axel Mårtensson",
        "link" : "http://www.github.com/axelmartensson/hush"
    });


  res.render('projects', { title: backronym.getBackronym(), projects : projects });
};