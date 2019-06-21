const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({
	question: String,
	comapny: String
})

module.exports = mongoose.model('Question' , QuestionSchema)