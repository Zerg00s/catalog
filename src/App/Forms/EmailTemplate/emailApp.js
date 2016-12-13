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


var sendEmail = function(){
            
    var requestHeaders = {
        "Accept":"application/json;odata=verbose",
        "content-type":"application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val()
    }

    var restEndPointUrl = _spPageContextInfo.webServerRelativeUrl + "/_api/SP.Utilities.Utility.SendEmail";
    $.ajax({
        contentType: 'application/json',
        url: restEndPointUrl,
        type: "POST",
        data: JSON.stringify({
            'properties': {
                '__metadata': { 
                    'type': 'SP.Utilities.EmailProperties' 
                },
                'From': 'admin@optrust.onmicrosoft.com',
                'To': { 'results': ['admin@optrust.onmicrosoft.com'] },
                'Body': 'Body message',
                'Subject': 'subject text'
            }
        }
    ),
        headers: requestHeaders,
        success: function (data) {
            console.log("An email was sent.");
        },
        error: function (args) {
            console.log("We had a problem and an email was not sent.");
            console.log(args);
        }
    });
}