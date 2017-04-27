cat <<EOF > index.js
var app = require('express')();
var srv = require('http').createServer(app);
var bodyParser = require('body-parser');

app.post('/', function (req, res, next) {
  res.send('You POSTed to the micro-service!');
});

srv.listen(3000, function () {
  console.log('Listening on 3000');
});
EOF