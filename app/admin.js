var mongo = require('./storage');
var storage = new mongo.Storage();
var auth = require('./auth');



this.newItem = function(req,res) {
	if (!auth.isUserLogged(req)) {
		res.redirect('/login');
		return;
	} 
	
	res.render('new_item', {
		title: 'Create a new item',
		item: {}
	});
}

this.saveItem = function(req, res) {
	if (!auth.isUserLogged(req)) {
		res.redirect('/login');
		return;
	} 
		
	var item = req.body.item;
	
	if (item['id'] == '') {
		console.log('saving new item');
		delete item['id'];
		storage.storeItem(item, logError);
	}
	else {
		var objectId = item['id'];
		delete item['id'];		
		storage.updateItem(objectId, item, logError);
	}	
	
	res.redirect('/admin');
}

this.listItems = function(req, res) {
	if (!auth.isUserLogged(req)) {
		res.redirect('/login');
		return;
	} 
	
	storage.withItems(function(err, items) {
		
		console.log(items);
		
		res.render('list_items', {
			title: 'Administration panel',
			items: items
		});
	});
}

this.modifyItem = function(req,res) {
	if (!auth.isUserLogged(req)) {
		res.redirect('/login');
		return;
	} 
		
	storage.getItem(req.params.id, function(err, item) {
		res.render('new_item', {
			title: 'Create a new item',
			item: item
		});		
	});	
}

this.deleteItem = function(req,res) {	
	if (!auth.isUserLogged(req)) {
		res.redirect('/login');
		return;
	} 
	
	storage.removeItem(req.params.id, function(err, item) {		
		res.redirect('/admin');
	});	
}


var logError = function(err, data) {
	if (err != null)
		console.log(err);
}