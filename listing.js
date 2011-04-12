var configurations = require('./contents/contents.js');

this.render = function(req,res) {
	res.render('index', {
	    title: configurations.title,
		description: configurations.description,
		items: configurations.items
	});
}