const express = require('express')
const router = express.Router()

const Product = require('../models/Product')
const Comment = require('../models/Comment')

router.post('/:id', (req, res, next) => {
	Product.findById(req.params.id).exec((err, product) => {
		if(err) return res.send(err)
		var comment = new Comment({
			text: req.body.text,
			// author: req.user,
			// author_name: req.user.name,
			product: product._id
		})

		comment.save((err, comment) => {
			if(err) return res.send(err)
			product.comments.push(comment)
			product.save((err, product) => {
				if(err) return res.send(err)
				res.send(comment)
			})	
		})
	})
})

router.delete('/:comment_id/:product_id' , (req, res, next) => {
	Comment.remove({_id: req.params.comment_id})
		.exec((err, result) => {
			if(err) return res.send(err)
			Product.findById(req.params.product_id)
				.exec((err, product) => {
					if(err) return res.send(err)
					product.comments = product.comments.filter((comment) => comment != req.params.comment_id)
					product.save((err, product) => {
						if(err) return res.send(err)
							res.send(200)
					})
				})
		})
})

module.exports = router
