
/*
 * GET project listing.
 */

var backronym = require('./backronym');

exports.index = function(req, res){
    var projects = [];

    projects.push(
    {
        "title" : "Piratradio",
        "desc" : "Listen to user created playlists with tunes from bandcamp, soundcloud and youtube!",
        "authors" : "Axel Smeets<br>Alexander Cobleigh<br>Axel Mårtensson",
        "link" : "http://piratrad.io"
    });

    projects.push(
    {
        "title" : "Flaskpost",
        "desc" : "Write letters and throw them out into the sea to be read by other people!",
        "authors" : "Axel Smeets<br>Alexander Cobleigh",
        "link" : "http://flaskpost.lhs.nu"
    });

    projects.push(
    {
        "title" : "Backronym Generator",
        "desc" : "A python script that generates backronyms. Descriptive title innit?",
        "authors" : "Alexander Cobleigh",
        "link" : "http://www.github.com/cblgh/backronym-gen.py"
    });

    projects.push(
    {
        "title" : "Hush",
        "desc" : "Mute your phone during google calendar meetings, because they are that important.",
        "authors" : "Axel Mårtensson",
        "link" : "http://www.github.com/axelmartensson/hush"
    });


    projects.push(
    {
        "title" : "LD Theme Generator & Timer",
        "desc" : "A mix between theme generator and timer, for all your game jam needs.",
        "authors" : "Alexander Cobleigh",
        "link" : "http://jam.cblgh.org"
    });


  res.render('projects', { title: backronym.getBackronym(), projects : projects });
};
