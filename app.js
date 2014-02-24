
/**
 * Module dependencies.
 */

var express = require('express');

var routes = require('./routes');
var http = require('http');
var path = require('path');

var manifesto = require('./routes/manifesto');
var projects = require('./routes/projects');
var people = require('./routes/people');

var app = express();

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());

app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(app.router);

app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/manifesto', manifesto.index);
app.get('/projects', projects.index);
app.get('/people', people.index);
app.get('/notyetpublished/:project', function(req, res){
    res.render('notyetpublished', {project: req.param("project")});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
