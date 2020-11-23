var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var indexRouter = require('./routes/index');
var apisRouter = require('./routes/apis');

var app = express();


import config from './config';
import loaders from './loaders';
import serviceSupplier from './services/supplier';

app.config = config;

const corsOptions = {
  credentials: true,
  origin: config.cors.origin,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/api/v1', apisRouter);


async function startApp() {
  const providers = await loaders.init({ config, expressApp: app });

  await serviceSupplier.initServices({ providers });
}

startApp();


module.exports = app;
