const mongoose = require('mongoose')

const BidSchema = mongoose.Schema({
	human: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	date: {
		type: Date,
		default: Date.now
	},
	products: String
})

module.exports = mongoose.model('Bid' , BidSchema)