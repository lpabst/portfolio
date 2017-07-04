angular.module("app")
.controller("projectsCtrl", function($scope, $stateParams) {
  
    $scope.image1, 
    $scope.image2, 
    $scope.image3, 
    $scope.projectExplanation;
    let projectId = $stateParams.projectid;
    console.log($stateParams)

    if (projectId == 'youtube'){
        $scope.image1 = './img/youtube_plus.png', 
        $scope.image2 = './img/youtube_search.png', 
        $scope.image3 = './img/youtube_home.png', 
        $scope.projectExplanation = 'We built a YouTube clone in React for a group project. '
        + 'Here we see pictures of the +YouTube page, the search results page, and the home '
        + 'page. One of the challenges of this project was learning to use the YouTube API in '
        + 'conjunction with React components and the React Router. This project was an amazing '
        + 'experience where I not only solidified my understanding of React, but learned Github version '
        + 'control while working in a team!';
    }else if (projectId == 'calculator'){
        $scope.image1 = './img/calculator.png', 
        $scope.image2 = './img/calculator.png', 
        $scope.image3 = './img/calculator.png', 
        $scope.projectExplanation = 'This was one of my earlier projects. I wanted to build something that would allow me to learn and '
        + 'use Javascript in a new way, so I decided to build a fully functioning calculator using '
        + 'Angular. One of the challenges with this project was understanding how to allow the user '
        + 'to type a long string of commands and then evaluate what they entered at the end. I had a '
        + 'blast building this one, and it helped me learn quite a bit about Javascript!';
    }else if (projectId == 'tutorials'){
        $scope.image1 = './img/tut_angular.png', 
        $scope.image2 = './img/tut_jquery.png', 
        $scope.image3 = './img/tut_greensock_code.png', 
        $scope.projectExplanation = 'This animation tutorials website took me a little over a week to build. '
        + 'This was my first full stack app using Angular, and this one really helped me solidify my understanding '
        + 'of many Angular concepts. One of the challenges with this website was making it fully responsive on all '
        + 'of the views. I really enjoyed this project, I got to teach myself a few new languages, and put them into '
        + 'practice right away. Learning to do animations also helped me practice skills that will be useful in '
        + 'the workplace!';
    }else if (projectId == 'connect4'){
        $scope.image1 = './img/connect4.png', 
        $scope.image2 = './img/connect4.png', 
        $scope.image3 = './img/connect4.png', 
        $scope.projectExplanation = 'This is the most technical project I\'ve done yet. Building this app '
        + 'really helped my understanding of data flow, as well as programming concepts in general. Keeping '
        + 'track of the different variables and controlling the user experience through modular functions '
        + 'was a huge step in my learning curve! After building this project I took a React course, and I '
        + 'I think going through this beforehand helped me understand the React data flow and lifecycle quite '
        + 'a bit better!';
    }


});
