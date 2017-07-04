angular.module("app")
.controller("homeCtrl", function($scope, scrollService) {

    let setScroll = function(){
        document.body.scrollTop = scrollService.homeScroll;
        console.log(scrollService.homeScroll)
    }

    setScroll();
  
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

//keeps track of current scroll position for user to return to same spot on page
    let findScroll = function(){
        scrollService.setHomeScroll(document.body.scrollTop);
        console.log(scrollService.homeScroll)
    }

    document.addEventListener('scroll', findScroll);

});
