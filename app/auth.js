var mongo = require('./storage');
var storage = new mongo.Storage();

this.login = function(req, res) {
	res.render('login', {
		title: 'Login'
	});
}

this.doLogin = function(req, res) {
	storage.authorizeUser(req.body.username, req.body.password, function(user) {
		if (user != null) {
			console.log('add user in session')
			req.session.user = user;
			res.redirect('/admin');
		}
		else
		{
			res.redirect('/login?success=false');
		}
	});
}


this.logout = function(req, res) {
	req.session.user = null;
	res.redirect('/');
}

this.isUserLogged = function(req) {
	console.log(req.session);
	return req.session != undefined && req.session!= null && req.session.user != undefined && req.session.user != null;
}
