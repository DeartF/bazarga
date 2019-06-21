const mongoose = require('mongoose')

const MeatShema = mongoose.Schema({
  title: String,
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subMeat'
  }
})

module.exports = mongoose.model('Meat' , MeatShema)
