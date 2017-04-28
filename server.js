var express = require('express');
var srv = require('http').createServer(app);
var bodyParser = require('body-parser');


var app = module.exports = express();
app.use(bodyParser.json());
app.use(express.static('dist'))

app.post('/', function (req, res, next) {
  res.send('You POSTed to the micro-service!');
});

srv.listen(3000, function () {
  console.log('Listening on 3000');
});
