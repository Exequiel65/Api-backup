const fs = require('fs');
const path = require('path');

const controller = {
	index: (req, res) => {
		res.send('Conectado')
	},

};

module.exports = controller;
