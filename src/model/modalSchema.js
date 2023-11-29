const mongoose = require('mongoose')
const MenuSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	price: {
		type: Number,
		require: true,
	},
	rating : {
		type: Number,
		require: true,
	},
	description: {
		type: String,
		require: true,
	},
})
module.exports = new mongoose.model('Food', MenuSchema)