const express = require('express')
const router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const nodemailer = require('nodemailer')

const User = require('../models/User')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'sendmaildec@gmail.com', // generated ethereal user
        pass: 'mzshhgfvldztgnem' // generated ethereal password
    }
})

passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, next) => {
	User.findOne({email: email, accepted: true}).exec((err, user) => {
		if(err) return next(err, null)
		if(!user) return next(err, null)
		user.comparePassword(password, (err, isEqual) => {
			if(err) return next(err, null)
			if(isEqual) return	next(null, user)
			return next(null, false)
		})
	})
}))

passport.serializeUser((user, next) => {
	return next(null ,user._id)
})

passport.deserializeUser((id, next) => {
	User.findById(id).exec((err, user) => {
		return next(err, user)
	})
})

router.use(passport.initialize())
router.use(passport.session())







router.post('/login', passport.authenticate('local'), (req, res, next) => {

	res.cookie('session', JSON.stringify(req.user))
    res.send(req.user)

})

router.post('/logout', (req, res, next) => {
	res.clearCookie('session')
	res.send(200)
})


router.post('/registration', (req, res, next) => {
	var user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	})

	user.save((err, user) => {
		if(err) return res.send(err)
		let mailOptions = {
	        from: '"Завершите регистрацию" <sendmaildec@gmail.com>', // sender address
	        to: user.email, // list of receivers
	        subject: 'Bazarza', // Subject line
	        html: `<p> Здраствуйте ${user.name} , пожаулйста завершите регистрацию на Bazarza. Мы рады что вы решили присоединиться к нам!</p>
          <br></br>
          <button style = "background-color: #31c309;
          border: none;
          border-radius: 3px;
          padding: 12px 8px;
          font-size: 24px;
          transition: .3s;
          cursor: pointer;">
          <a href="http://localhost:3000/api/accept/${user._id}" style = "text-decoration:none; color: #fff;">Завершить регистрацию</a>
          </button>
          <br></br>
          <h5>С уважением, aдминистрация Bazarza</h3>
          <br></br>
          <p>+77472334431</p>
          <br></br>
          <p>infobazarza@gmail.com</p>` // html body
	    }

	    transporter.sendMail(mailOptions, (err, info) => {
	    	if(err) return res.status(401).send(err)
			res.send(200)
	    })
	})
})

router.get('/accept/:id' , (req, res, next) => {
	User.findById(req.params.id)
		.exec(function( err, user) {
			if ( err ) return res.send(err)
				user.accepted = true
			user.save(function(err , user) {
				if ( err ) return res.send(err)
					res.redirect('/login')
			})
		})
})





// подключаем все роуты
router.use('/post', require('./product'))
router.use('/comment', require('./comment'))
router.use('/user' , require('./user'))
router.use('/bid' , require('./bid'))
router.use('/request' , require('./request'))
router.use('/question' , require('./question'))

module.exports = router
