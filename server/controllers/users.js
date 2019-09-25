const User = require("../models/usersModel");

const getAllUsers = (req, res) => {
	User.find((err, data)=>{
		if(err)
			res.json(err)
		else
			res.json(data);
	})
};

const addNewUser = (req, res) => {
	let newUser = new User({
		name: req.body.name
	})
	
	newUser.save().then(data=>res.json(data));
};

const findUser = (req, res) => {
	User.findOne({name: req.body.name}, (err, data) => {
		if(err)
			res.json(err)
		else
			res.json(data)
	})
}

module.exports = {getAllUsers, addNewUser, findUser};