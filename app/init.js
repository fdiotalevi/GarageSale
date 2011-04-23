var configurations = require('./conf.js');
var mongo = require('./storage.js');

this.init = function() {
	
	var storage = new mongo.Storage();
	storage.createUser(configurations.authentication.username, configurations.authentication.password);
	
}