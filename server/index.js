// Declarations 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//Create the Application 
var app = express();

//Add middleware necessary for REST API's
app.use(bodyParser.urlencoded({ectended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS Support
app.use(function(req, res, nex){
    res.header('')
})

//Connect to MongoDb
mongoose.connect('mongodb://localhost/SMU Class Folder/final-project');
mongoose.connection.once('open', function() {

    console.log("it fucking WORKS BRUH");
    app.listen(3000);
});
 