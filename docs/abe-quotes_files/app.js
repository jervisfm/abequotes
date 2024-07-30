/*global angular */
/*jshint unused:false */
'use strict';

/**
 * The main quotes app module
 *
 * @type {angular.Module}
 */
var quotes = angular.module('quotes', ['firebase', 'ngMaterial']);

// Directive for filtering dates
// Backend stores date as string, angular prefers date
// object for filtering hence conversion is necessary.
quotes.filter('customDateFilter', function($filter) {
  var angularDateFilter = $filter('date');
  return function(backendDate) {
  	var dateObject = new Date(backendDate);
    return angularDateFilter(dateObject, 'MMM dd');
  }
});
