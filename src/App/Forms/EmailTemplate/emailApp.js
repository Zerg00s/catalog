"use strict";
var app = angular.module('emailApp',[]);

var controller = app.controller('emailController', function($scope,$sce){
    $scope.to = 'zergoos@zergoos.onmicrosoft.com; sample2@optrust.com';
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

var subject = "SUBJECT OF THE MAIL";
var mailContent = "<h3>Some Heading for the mail</h3><p>Content</p><div>Content</div>";
var toList = ["zergoos@zergoos.onmicrosoft.com"]
 
//Send email message over REST
function sendMail(toList, subject, mailContent) {
    var restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/SP.Utilities.Utility.SendEmail",
    restHeaders = {
        "Accept": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
        "Content-Type": "application/json;odata=verbose"
    },
    mailObject = {
        'properties': {
            '__metadata': {
                'type': 'SP.Utilities.EmailProperties'
            },
            'To': {
                'results': toList
            },
            'From': 'zergoos@zergoos.onmicrosoft.com"', // Important Note: this property does not work in SharePoint Online.
                                                        // the <from> field will always be "no-reply@sharepointonline.com"
            'Subject': subject,
            'Body': mailContent,
            "AdditionalHeaders":
                {
                    "__metadata":
                       { "type": "Collection(SP.KeyValue)" },
                    "results":
                    [
                        {
                            "__metadata": {
                                "type": 'SP.KeyValue'
                            },
                            "Key": "content-type",
                            "Value": 'text/html',
                            "ValueType": "Edm.String"
                        }
                    ]
                }
        }
    };
    return $.ajax({
        contentType: "application/json",
        url: restUrl,
        type: "POST",
        data: JSON.stringify(mailObject),
        headers: restHeaders
    });

} 

$(function(){
    sendMail(toList, subject, mailContent).then(function(data){console.log(data.d)})
})