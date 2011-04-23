this.title = "Filippo's Garage Sale";
this.description= "Welcome! That's not (yet) a real garage sale, so don't contact me if you need a microwave! It's just an Express/Node.js test app";

this.authentication = {
	username: 'garagesale',
	password: 'g4r4ges4le'
}

this.mongo_uri = process.env['DUOSTACK_DB_MONGODB'] || 'mongodb://localhost:27017/garagesale';



