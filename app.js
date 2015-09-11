'use strict';

// Declare app level module which depends on views, and components
var contact=angular.module('contactListApp', []);
contact.controller('contactListCtrl', function($scope) {
  $scope.contacts = [
    {'first': 'len','last': 'Payne','extension':3418},
	{'first': 'Nimya','last': 'Gurusivagnanam','extension':'c0646039'}
	
    
  ];

  $scope.orderProp = 'age';
});
