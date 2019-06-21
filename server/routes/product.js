const express = require('express')
const router = express.Router()
const multer  = require('multer')
const fs = require('fs')
const path = require('path')
const upload = multer({ dest: 'uploads/' })

const Product = require('.././models/Product.js')
const Comment = require('.././models/Comment.js')

// Connect all routers

router.get('/' , (req, res, next) => {
	Product.find()
		.exec((err, products) => {
			if(err) return res.send(err)
			res.send(products)
		})
})

router.get('/:id' , ( req , res , next ) => {
	Product.findById(req.params.id).populate('comments')
		.exec(( err , product ) => {
			if( err ) return res.send( err )
			res.send( product)
		})
})

router.post('/' , upload.single('file'), (req, res, next) => {
	var product = new Product({
		price: req.body.price,
		gender: req.body.gender,
		model: req.body.model,
	})

	let tempPath = req.file.path;
	let targetPath = path.resolve(`productImages/uploads/${product._id}.${req.file.originalname.split('.').pop()}`)
	fs.rename(tempPath , targetPath , (err) => {
		if(err) return res.send(err)
		product.link = `/productImages/uploads/${product._id}.${req.file.originalname.split('.').pop()}`
		product.save((err , product) => {
			if(err) return res.send(err)
			res.send(product)
		})
	})

})

router.delete('/:id' , (req, res, next) => {
	Product.remove({_id: req.params.id})
		.exec((err, result) => {
			if(err) return res,send(err)
			res.send(200)
		})
})

router.put('/' , (req, res, next) => {
	Product.findById(req.body._id)
		.exec((err , product) => {
			if(err) {
				return res.status.send(500)
			} else {
				product.price = req.body.price;
				product.gender = req.body.gender;
				product.model = req.body.model;
				product.save((err , result) => {
					if(err) {
						return res.send(500)
					} else {
						return res.send(200)
					}
				})
			}
		})
})

router.get('/:id' , (req, res, next) => {
	Product.findById(req.params.id)
		.exec((err, product) => {
			if(err) return res.send(err)
			res.send(product)
		})
})

module.exports = router
