const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  price: String,
  gender: String,
  model: String,
  link: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
})

module.exports = mongoose.model('Product' , ProductSchema)
