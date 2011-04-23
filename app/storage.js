var mongo = require('mongoskin');
var crypto = require('crypto');


this.Storage = function () {
	var self = this;
	var items = 'items';
	var users = 'users';
	
	var connection = mongo.db('localhost:27017/garagesale');
	
	var logError = function(err, data) {
		if (err != null)
			console.log(err);
	}
	
	var encrypt = function(data) {
		return crypto.createHash('md5').update(data).digest("hex");
	}
	
	this.withItems = function(func) {
		connection.collection(items).find().toArray(func);
	}
	
	this.storeItem = function(hash, func) {
		connection.collection(items).insert(hash, func);
	}
	
	this.getItem = function(id, func) {
		connection.collection(items).findById(id, func);
	}
	
	this.updateItem = function(id, newdata, func) {
		connection.collection(items).updateById(id, newdata, func);
	}
	
	this.removeItem = function(id, func) {
		var objectId = connection.collection(items).id(id);
		connection.collection(items).remove({_id: objectId}, func);
	}
	
	this.authorizeUser = function(username, password, func) {
		connection.collection(users).find({username: username, password: encrypt(password)}).toArray(function(err, items) {
			if (items.length > 0) {
				console.log('authenticated');
				func(items[0]);
			}
			else
				func(null);
		});		
	}

	this.createUser = function(username, password) {
		connection.collection(users).find().toArray(function(err, items) {
			if (items.length == 0) {
				console.log('creating user: '+username);
				connection.collection(users).insert({username: username, password: encrypt(password)}, logError);		
			}
		});
	}
	
}
