var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var apiRouter = express.Router();




app.use(express.static(path.join(__dirname, "../www")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
require('./routes.js')(app, express);

app.listen(3000, function(err){
  console.log('stocks listening on 3000');
});

