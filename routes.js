module.exports = function (app) {

  app.get('/api/ping', function (req, res, next) {
    res.send("pong");
  });

  var uploadCsvHandler = require('./app/handlers/upload-csv-handler');

  app.post('/api/upload-csv', uploadCsvHandler.upload);


};
