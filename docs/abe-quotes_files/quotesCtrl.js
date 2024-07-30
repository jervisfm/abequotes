/*global todomvc, angular, Firebase */
'use strict';

/**
 * Loads abe quotes json data and invokes the given provided callback with
 * the loaded data on success. 
 * 
 * Callback would be invoked with a JSON quote array of responses
 */
function loadJsonData(callback) {
  
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Configure it: GET-request for the URL /abe-quotes-data.json
  // Note: Need to include github repo in path, otherwise path 404s.
  xhr.open('GET', '/abequotes/abe-quotes-data.json', true);

  // Set the response type to JSON
  xhr.responseType = 'json';

  // Send the request over the network
  xhr.send();

  // This will be called after the response is received
  xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP response status
      console.error(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
      callback(xhr.response);
      console.log(xhr.response); // response is the server's response
    }
  };

  xhr.onerror = function() {
    callback(undefined);
    console.error("Request failed");
  };

  
}

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the $firebase service
 * - provides a way to add new data
 */
quotes.controller('QuotesCtrl', function QuotesCtrl($scope, $location, $firebase) {
   // Bind the quotes to the firebase provider.


  //var url = 'https://abequotes.firebaseio.com/quotes';
  //var fireRef = new Firebase(url);
  
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

  loadJsonData((arrayResponse) => {
    if (!arrayResponse) {
      console.error("Loading JSON data failed");
      alert("Data loading failed - site won't render");
    }
    angular.forEach(arrayResponse, function(quote) {
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
