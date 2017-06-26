'use strict'

const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// module.exports = app;

// server logging
app.use(morgan('dev'));
// req.body parsing
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
// static files
app.use(express.static(path.join(__dirname, '../public')))

// app.use('/api', require('./api'));

app.get('/*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../public/index.html'))
})

// start server
app.listen(8080, () => {
	console.log('server is listening on 8080')
})
