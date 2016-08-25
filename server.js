var restify = require('restify');

var port = 5001;

var server = restify.createServer();

server.use(restify.bodyParser());

require('./routes')(server);


server.listen(port, function () { console.log('Listening on ' + server.address().port) });
