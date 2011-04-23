var storage = require('./storage.js');
var admin = require('./admin.js');
var auth = require('./auth.js');
var listing = require('./listing.js');

this.define = function(app) {
	app.get('/', listing.render);
	app.get('/admin/new', admin.newItem);
	app.post('/admin/save', admin.saveItem);
	app.get('/admin', admin.listItems);
	app.get('/edit/:id', admin.modifyItem);
	app.get('/delete/:id', admin.deleteItem);
	app.get('/login', auth.login);
	app.post('/login', auth.doLogin);	
	app.get('/logout', auth.logout);
}
