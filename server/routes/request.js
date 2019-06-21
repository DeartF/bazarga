const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const Request = require('.././models/Request.js')

router.post('/' , (req, res, next) => {
	var request = new Request({
		descriptionRequest: req.body.descriptionRequest,
		companyRequest: req.body.companyRequest,
	})

	console.log(req.body)

	request.save((err , request) => {
			if(err) return res.send(err)
			res.send(request)
			console.log(req.body)
		})
})

router.get('/' , (req, res, next) => {
	Request.find()
		.exec((err , requests) => {
			if(err) return res.send(err)
			res.send(requests)
		})
})

module.exports = router