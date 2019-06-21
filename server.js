const express = require('express')
var history = require('connect-history-api-fallback');
const bodyParser = require('body-parser') // Для чтения данных с frontend
const morgan = require('morgan') // Библиотека для логирования
const cookieParser = require('cookie-parser') // Хранилище
const mongoose = require('mongoose') //Подключение к базе данных
const path = require('path')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const api = require('./server/routes/')

mongoose.connect('mongodb://localhost/project', { useNewUrlParser: true })

const app = express()

app.use(express.static(path.join(__dirname, './')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({limit: '5mb'}))
app.use(cookieParser())
app.use(history({
    rewrites:[
        {from: /^\/api\/.*$/, to: function(context){
            return context.parsedUrl.pathname;
        }},
        {from: /\/.*/, to: '/'}
    ]
}))
app.use(morgan('dev'))
app.use(session({
	resave: true, // изминение сесси в любое время
	secret: 'secret', // Passowrd
	saveUnintialized: true, // Помогает хранить сессии навсегда
	key: 'key',
	store: new MongoStore({mongooseConnection: mongoose.connection})
}))

app.use('/api' , api)

app.get('*', (req, res, next) => {
	res.redirect('/#' + req.originalUrl)
})

app.use(express.static('routes'))

app.listen(8080 , () => {
	console.log('Server listening on port 8080')
})

