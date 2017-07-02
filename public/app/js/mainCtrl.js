angular.module('app').controller('mainCtrl', function($scope){

    let mobileMenu = false;
    // $scope.showHam = true;

    $scope.toggleMobileMenu = () => {
        if (!mobileMenu){
            mobileMenu = true;
            $('.mobileMenu').css({
                'height': '260px',
            });
            $('#line_one').css({
                'transform': 'rotate(45deg)'
            })
            $('#line_three').css({
                'transform': 'rotate(-45deg)'
            })
            $('#line_two').css({
                'width': '0px'
            })
        }else{
            mobileMenu = false;
            $('.mobileMenu').css({
                'height': '0px',
            });
            $('#line_one').css({
                'transform': 'rotate(0deg)'
            })
            $('#line_three').css({
                'transform': 'rotate(0deg)'
            })
            $('#line_two').css({
                'width': '22px'
            })
        }
    }


//when the page is scrolled down, the desktop header fills the top
//of the page
    function changeHeaderCss(){
        var dHeader = $('.desktop_header');
        if (this.scrollY > 50){
            dHeader.css({
                "background": "#333",
            });
        }else{
            dHeader.css({
                "background": "none",
            });
        }
    }
    
    window.addEventListener("scroll", changeHeaderCss, false);

});