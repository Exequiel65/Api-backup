const db = require('../database/models')

const controller = {
	index: (req, res) => {
		db.User.findAll()
		.then((users)=>{
			res.json({
				users
			})
		})
	},

};

module.exports = controller;
