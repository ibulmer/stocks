angular.module('starter.controllers', [])

// .controller('StocksCtrl', function($scope) {
//   $scope.test = "hello sdfionic"
// })

.controller('StocksCtrl', function ($scope, stocks) {
  $scope.test = {
    AAPL:{
      close:'no info',
      change:'no info',
    },
    GOOG:{
      close:'no info',
      change:'no info',
    },
    YHOO:{
      close:'no info',
      change:'no info',
    },
    '^GSPC':{
      close:'no info',
      change:'no info',
    },
    MSFT:{
      close:'no info',
      change:'no info'
    }

  };


  $scope.getInfo = function(symbol){
    stocks.getOne(symbol).then(function(quotes){
      //console.log(quotes);
      $scope.test[symbol].close = quotes.data[1].close;
      $scope.test[symbol].change = quotes.data[1].close-quotes.data[0].close;

      // console.log("===========",$scope.buyerData.datasets[0].data);
      // $scope.buyerData.datasets[0].datam.push(quotes.data[0].close);
      // $scope.buyerData.datasets[0].datam.push(quotes.data[1].close);
    })
  };
  var getAll = function(){
    for (var key in $scope.test){
      $scope.getInfo(key);
    }
    console.log('updated');
  }


  $scope.buyerData = {
  labels : [],
  datasets : [
    {
      fillColor : "rgba(172,194,132,0.4)",
      strokeColor : "#ACC26D",
      pointColor : "#fff",
      pointStrokeColor : "#9DB86D",
      data : []
    }
  ]
  }
  getAll();

  var currentSymbol = 'AAPL';

  var updateChart = function(symbol){
    console.log('updated');
    stocks.getOne(symbol).then(function (quotes){
      var buyers = document.getElementById('buyers').getContext('2d');
      $scope.buyerData.labels = [];
      $scope.buyerData.datasets[0].data = [];
      for (var i=0; i<quotes.data.length; i++){
        $scope.buyerData.labels.push(quotes.data[i].date.substring(0,7));
        $scope.buyerData.datasets[0].data.push(quotes.data[i].close.toFixed(2));
        console.log("quotes.data[i] ",quotes.data[i]);
      }
      //$scope.buyerData.datasets[0].data.push(quotes.data[0]);
      //$scope.buyerData.datasets[0].data.push(quotes.data[1]);
      new Chart(buyers).Line($scope.buyerData);

    })
  }

  $scope.changeGraph = function(input){
    currentSymbol = (input);
    updateChart(currentSymbol);
    console.log(currentSymbol);
  }

  updateChart(currentSymbol);
  $scope.getAll;


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
