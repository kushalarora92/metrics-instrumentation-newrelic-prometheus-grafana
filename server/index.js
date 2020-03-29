require('newrelic');

const express = require('express'),
  path = require('path'),
  cors = require('cors'),
  morgan = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  
  // routes = require('./helper/routes'),
  // db = require('./helper/db'),
  // errorHandler = require('./helper/error-handler'),
  // jwt = require('./helper/jwt')

  app = express();

  /**
 * This creates the module that we created in the step before.
 * In my case it is stored in the util folder.
 */
const Prometheus = require('./util/prometheus'); 

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
// app.use(jwt());

/**
 * The below arguments start the counter functions
 */
app.use(Prometheus.requestCounters);  
app.use(Prometheus.responseCounters);

/**
 * Enable metrics endpoint
 */
Prometheus.injectMetricsRoute(app);

/**
 * Enable collection of default metrics
 */
Prometheus.startCollection(); 

app.use('/api', require('./routes'));

// app.use(errorHandler);

module.exports = app;