const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const Fruit = require('.././models/categories/Fruit.js')
const Meat = require('.././models/categories/Meat.js')
const Category = require('.././models/Category.js')


router.get('/categories' , (req, res, next) => {

})


module.exports = router
