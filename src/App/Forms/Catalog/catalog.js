"use strict";
var app = angular.module('opApp',[]);
app.controller('opController', function($scope){

    $scope.catalog = {};
    $scope.catalog.staticLinks = [
        {
            title:'Service 1',
            url:'',
            icon:'',
            category: 'IT'
        },
        {
            title:'Service 2',
            url:'',
            icon:'',
            category: 'IT'
        },
        {
            title:'Service 3',
            url:'',
            icon:'',
            category: 'IT'
        },
    ];
});