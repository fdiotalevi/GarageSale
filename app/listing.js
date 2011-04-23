var configurations = require('./conf.js');
var mongo = require('./storage');
var storage = new mongo.Storage();

this.render = function(req,res) {
	var items = storage.withItems(function(err, items) {
		res.render('index', {
		    title: configurations.title,
			description: configurations.description,
			items: items
		});		
	});	
}