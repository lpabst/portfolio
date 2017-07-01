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

    // $scope.hideMobileMenu = () => {
    //     $scope.mobileMenu = false;
    //     learnSubMenu = false;
    // }


//slides out the mobile learn submenu
    $scope.showLearnSubMenu = () => {
        if (!learnSubMenu){
            $('.learn_submenu_mobile').css({
                'left': '200px',
                'height': '260px'
            });
            learnSubMenu = true;
        }else{
            $('.learn_submenu_mobile').css({
                'left': '0px',
                'height': '0px'
            });
            learnSubMenu = false;
        }

    }

//when the page is scrolled down, the desktop header fills the top
//of the page
    function changeHeaderCss(){
        var dHeader = $('.desktop_header');
        var learnHeader = $('.learn_subheader');
        if (this.scrollY > 50){
            dHeader.css({
                "width": "100%",
                'left': '0',
                'top': '0',
                'border-radius': '0'
            });
            $('.desktop_nav').css('right', '7.2%');
            learnHeader.css('top', '68px');
        }else{
            dHeader.css({
                "width": "94%",
                'left': '3%',
                'top': '20px',
                'border-radius': '6px'
            });
            $('.desktop_nav').css('right', '50px');
            learnHeader.css('top', 'calc(3% + 68px)');
        }
    }
    
    window.addEventListener("scroll", changeHeaderCss, false);

});