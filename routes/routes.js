//fetching all routes files.
var api = require('./api');

var routes = function(app){
	//Initializing routes
	api(app);
};

module.exports = routes;
