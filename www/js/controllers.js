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
      console.log(quotes);
      $scope.test[symbol].close = quotes.data[1].close;
      $scope.test[symbol].change = quotes.data[1].close-quotes.data[0].close;
    })
  };
  $scope.getAll = function(){
    for (var key in $scope.test){
      $scope.getInfo(key);
    }
    console.log('updated');
  }
  $scope.getAll();
  setInterval($scope.getAll, 10000);
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
