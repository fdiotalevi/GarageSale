var storage = require('./storage.js');
var admin = require('./admin.js');
var auth = require('./auth.js');
var listing = require('./listing.js');

var staticRoute = function(title, template) {
	return function(req, res) {
		res.render(template, {
			title: title
		});
	}
}


this.define = function(app) {
	app.get('/', listing.render);
	app.get('/show/:id', listing.show);
	app.get('/admin/new', admin.newItem);
	app.post('/admin/save', admin.saveItem);
	app.get('/admin', admin.listItems);
	app.get('/edit/:id', admin.modifyItem);
	app.get('/delete/:id', admin.deleteItem);
	app.get('/login', auth.login);
	app.post('/login', auth.doLogin);	
	app.get('/logout', auth.logout);
	app.get('/change', auth.changePassword);
	app.post('/change', auth.doChangePassword);
	app.get('/info', staticRoute('More Info', 'info'));
	app.get('/about', staticRoute('About This Website', 'about'));	
}
