const express = require('express');

var user = require('../models/user');
const route = express.Router(); //routes in separate module


route.post('/login', (req, res) => {

	console.log("Body -----> ",req.body);

	user.findOne({ username: req.body.username }, (err, db) => {
		var message = "";

		console.log("Result set -----> ",db);
		
		if(err)
			throw err;

		else if(db == null){
			res.json({ status: 500, message: "Internal Server Error"});
			console.log("Internal Server Error");
		}

		else if(db.password != req.body.password){
			res.json({ status: 401, message: "Username or Password incorrect"});
		}
		else {
			res.json({ status: 200, message: "Login success"});
		}
	});

});

route.post('/register', (req, res) => {

});

module.exports = route;