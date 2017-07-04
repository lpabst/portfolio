angular.module("app")
.controller("homeCtrl", function($scope, scrollService) {

//keeps track of current scroll position for user to return to same spot on page
    $scope.setReturnScroll = function(offset){
        let headerHeight;
        if (window.innerWidth < 700){
            headerHeight = 60;
        }else{
            headerHeight = 68;
            offset = 0;
        }
        scrollService.setHomeScroll(window.innerHeight - headerHeight + offset);
    }

//sets the home screen scroll to the value saved previously
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




});
