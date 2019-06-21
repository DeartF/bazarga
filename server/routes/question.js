const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const Question = require('.././models/Question.js')

router.post('/' , (req, res, next) => {
	var question = new Question({
		question: req.body.question,
		company: req.body.company
	})

	question.save((err , question) => {
		if(err) return res.send(err)
		res.send(question)
	})
})

router.get('/' , (req, res, next) => {
	Question.find()
		.exec((err , questions) => {
			if(err) return res.send(err)
			res.send(questions)
		})
})

module.exports = router