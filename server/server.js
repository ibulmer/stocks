var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var yahooFinance = require('yahoo-finance');
var app = express();
//var apiRouter = express.Router();

// apiRouter.route('/stocks/:symbol')
//   .get(function(req, res){
//   	yahooFinance.historical({
//   	  symbol: req.params.symbol,
//   	  from: '2016-01-28',
//   	  to: '2016-01-29',
//   	  // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
//   	}, function (err, quotes) {
//   	  if(err){
//   	  	return res.json(err);
//   	  }
//   	  res.json(quotes);
//   	});

//   })

app.use(express.static(path.join(__dirname, "../www")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use('/api', apiRouter);
require('./routes.js')(app, express);

app.listen(3000, function(err){
  console.log('stocks listening on 3000');
});

