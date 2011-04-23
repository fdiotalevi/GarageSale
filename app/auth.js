var mongo = require('./storage');
var storage = new mongo.Storage();

var self = this;

this.login = function(req, res) {	
	res.render('login', {
		title: 'Login',
		error: self.isInError(req)
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
	return req.session != undefined && req.session!= null && req.session.user != undefined && req.session.user != null;
}

this.isInError = function(req) {
	return req.query != undefined && req.query != null && req.query['success'] == 'false';
}


this.changePassword = function(req, res) {
	if (!self.isUserLogged(req)) {
		res.redirect('/login');
		return;
	}
	
	res.render('change_password', {
		title: 'Change Password',
		error: false
	});
}

this.doChangePassword = function(req, res) {
	if (!self.isUserLogged(req)) {
		res.redirect('/login');
		return;
	}
	
	if (req.body.password != req.body.confirm_password) {
		res.render('change_password', {
			title: 'Change Password',
			error: true
		});		
	}
	else {
		console.log('changed password');
		storage.changePassword(req.session.user['_id'], req.body.password);
		res.redirect('/admin');
	}
}