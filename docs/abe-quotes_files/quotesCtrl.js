/*global todomvc, angular, Firebase */
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the $firebase service
 * - provides a way to add new data
 */
quotes.controller('QuotesCtrl', function QuotesCtrl($scope, $location, $firebase) {
   // Bind the quotes to the firebase provider.


  var url = 'https://abequotes.firebaseio.com/quotes';
  var fireRef = new Firebase(url);
  $scope.quotes = $firebase(fireRef).$asArray();
  $scope.areQuotesLoaded = false;

  var months = [
  	"Jan",
  	"Feb",
  	"Mar",
  	"Apr",
  	"May",
  	"Jun",
  	"July",
  	"Aug",
  	"Sept",
  	"Oct",
  	"Nov",
  	"Dec"
  ];


  var monthMap = {
  	"January": 0,
  	"February": 1,
  	"March": 2,
  	"April": 3,
  	"May": 4,
  	"June": 5,
  	"July": 6,
  	"August": 7,
  	"September": 8,
  	"October": 9,
  	"November": 10,
  	"December": 11
  }




  var tabs = [];
  //return quotesToDisplay.slice().reverse();
  for (var i=0; i < months.length; i++) {
    var monthInfo = {};
    monthInfo.title = months[i];
    monthInfo.quotes = [];
    tabs.push(monthInfo);
  }


  $scope.quotes.$loaded().then(function(){
    angular.forEach($scope.quotes, function(quote) {
      var dateObject = new Date(quote.creation_date);
      var tabIdx = dateObject.getMonth();
      tabs[tabIdx].quotes.unshift(quote);
      $scope.areQuotesLoaded = true;
    })
  });

  var selected = null;
  var previous = null;
  $scope.tabs = tabs;
  $scope.selectedIndex = 0;
  $scope.$watch('selectedIndex', function(current, old){
    previous = selected;
    selected = tabs[current];
  });
});
