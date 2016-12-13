"use strict";
var app = angular.module('emailApp',[]);

var controller = app.controller('emailController', function($scope,$sce){
    $scope.to = 'sample@optrustcom; sample2@optrust.com';
    $scope.cc = 'additiona@optrust.com';
    $scope.subject = 'Sample subject';
    $scope.body = 'Sample body,\n\nitems:1\nmodel: Osx#124\n\nRegards,\nDenis Molodtsov';


    $scope.$watch('[to,cc,subject,body]',function(){
        var mailtto = 'mailto:'+$scope.to +
            '?cc='+$scope.cc +
            '&subject='+$scope.subject +
            '&body='+$scope.body;
             $scope.link = encodeURI(mailtto);
    }, true);
});
