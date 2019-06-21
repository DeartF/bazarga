const mongoose = require('mongoose')

const RequestSchema = mongoose.Schema({
	descriptionRequest: String,
	companyRequest: String
})

module.exports = mongoose.model('Request' , RequestSchema)