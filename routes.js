module.exports = function (app) {

  app.get('/api/ping', function (req, res, next) {
    res.send("pong");
  });
};
