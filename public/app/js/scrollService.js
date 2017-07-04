angular.module("app")
.service("scrollService", function() {

    this.homeScroll = 0;

    this.setHomeScroll = function(newScroll){
        this.homeScroll = newScroll;
    }

});