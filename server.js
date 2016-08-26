var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

var port = 5001;

require('./routes')(app);


app.listen(port, function () {
  console.log('Listening on ' + port)
});
