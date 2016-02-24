var express = require('express');
var apiRouter = express.Router();
var yahooFinance = require('yahoo-finance');

module.exports = function (app, express){

  app.get('/api/stocks/:symbol',function(req, res){
    yahooFinance.historical({
      symbol: req.params.symbol,
      from: '2016-01-01',
      to: '2016-01-29',
      // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    }, function (err, quotes) {
      if(err){
        return res.json(err);
      }
      res.json(quotes);
    });

  })

};