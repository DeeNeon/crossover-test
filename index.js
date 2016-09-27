//requiring NPM modeles
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
var app = express();
var cors = require('cors');

app.options(cors({origin:'*'}));  //Use your origins.
app.use(cors({origin:'*'}));      //Use your origins.

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With, Authorization");
  next();
});

db.on('error', console.error);

//requiring local models
var configs = require('./config');
var routes = require('./routes/routes');
var userModel = require('./models/users');
var helperFunctions = require('./helpers/helperFunctions');


// Uncomment the following lines to start logging requests to consoles.
app.use(morgan('combined'));
// parse application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json.
app.use(bodyParser.json());

//connecting to mongoDB
mongoose.connect('mongodb://'+configs.dbHost+'/'+configs.dbName);
//populating data if DB is not already populated.
helperFunctions.populateDb();

//Initializing routes.
routes(app);

// serve video files.
app.use('/videos',express.static('videos'));
// serve client side code.
//app.use('/',express.static('dist'));

//Finally starting the listener
app.listen(configs.applicationPort, function () {
  console.log('Example app listening on port '+configs.applicationPort+'!');
});

//mongodb : mongod --dbpath=/data --port 27017
