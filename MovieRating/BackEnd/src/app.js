var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apisRouter = require('./routes/apis');

var app = express();


import config from './config';
import loaders from './loaders';

app.config = config;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1', apisRouter);


async function startApp() {
  const providers = await loaders.init({ config, expressApp: app });
}

startApp();


module.exports = app;
