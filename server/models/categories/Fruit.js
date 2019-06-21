const mongoose = require('mongoose')

const FruitSchema = mongoose.Schema({
  title: String,
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subFruit'
  }
})

module.exports = mongoose.model('subFruit' , FruitSchema)
