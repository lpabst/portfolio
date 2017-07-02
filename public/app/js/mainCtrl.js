angular.module('app').controller('mainCtrl', function($scope){

    let mobileMenu = false;

//slides mobile menu in and out and changes ham menu to an X
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

    $scope.hideMobileMenu = function(){
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

//when window scrolls, header background shows up
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

//Scrolls page to appropriate location based on nav bar click
    $scope.nav = function(num){

        let headerHeight;
        if (window.innerWidth < 700){
            headerHeight = 60;
        }else{
            headerHeight = 68;
        }
        
        let projectsSection = document.getElementById('home_projects')
        let skillsSection = document.getElementById('home_skills');
        let aboutSection = document.getElementById('home_about');
        let contactSection = document.getElementById('home_contact');

        var landingPage = 0;
        var projectsPage = window.innerHeight - headerHeight;
        var skillsPage = projectsPage + projectsSection.scrollHeight;
        var aboutPage = skillsPage + skillsSection.scrollHeight;
        var contactPage = aboutPage + aboutSection.scrollHeight;
        console.log(aboutPage)


        if (num === 0){
            document.body.scrollTop = 0;
        }else if (num === 1){
            document.body.scrollTop = projectsPage;
        }else if (num === 2){
            document.body.scrollTop = skillsPage;
        }else if (num === 3){
            document.body.scrollTop = aboutPage;
        }else if (num === 4){
            document.body.scrollTop = contactPage;
        }

        $scope.hideMobileMenu();
    }

});