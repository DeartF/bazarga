const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const User = require('../models/User.js')

router.get('/' , (req, res , next) => {
	User.find()
		.exec((users , err) => {
			if(err) return res.send(err)
			res.send(users)
		})
})

router.get('/:id' , (req, res, next) => {
	User.findById(req.params.id)
		.exec((err, user) => {
			if(err) return res.send(err)
			res.send(user)
		})
})

router.delete('/:id' , (req, res, next) => {
	User.remove({_id: req.params.id})
		.exec((err, result) => {
			if(err) return res,send(err)
			res.send(200)
		})
})

router.put('/' , (req, res, next) => {
	User.findById(req.body._id)
		.exec((err , user) => {
			if(err) {
				return res.status.send(500)
			} else {
				user.name = req.body.name;
				user.email = req.body.email;
				user.accepted = req.body.accepted;
				user.isModerator = req.body.isModerator;
				user.save((err , result) => {
					if(err) {
						return res.send(500)
					} else {
						return res.send(200)
					}
				})
			}
		})
})

module.exports = router