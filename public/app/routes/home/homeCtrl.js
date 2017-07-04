angular.module("app")
.controller("homeCtrl", function($scope) {
  
    $scope.submitContactEmail = function(){
        let body = $scope.contactContent;
        if ($scope.contactName){
            body = 'Hi, my name is ' + $scope.contactName + '. ' + body;
        }
        if ($scope.contactEmailOrPhone){
            body = body + '. You can contact me back at ' + $scope.contactEmailOrPhone;
        }
        
        let emailStr = 'mailto:lorenpabst@gmail.com?'
        + `subject=${$scope.contactSubject}`
        + '&body=' + body

        window.location.href = emailStr;
    }


});
