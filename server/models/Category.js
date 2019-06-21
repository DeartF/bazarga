const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
  title: String,
  category: {
		type: mongoose.Schema.Types.ObjectId,
  	ref: 'Category'
  }
})

module.exports = mongoose.model('Category' , CategorySchema)
