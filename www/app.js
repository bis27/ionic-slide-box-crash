angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('intro', {
    url: '/',
    templateUrl: 'intro.html',
    controller: 'IntroCtrl'
  });

  $urlRouterProvider.otherwise("/");

})


.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
  var i = 0;
  $scope.data = {
    numViewableSlides : 0,
    slideIndex : 0,
    initialInstruction : true,
    secondInstruction : false,
    slides : []
    };
            
            
    for ( i = 0; i < 30;  i++)
        $scope.data.slides.push({
            'template' : 'firstSlide.html',
            'viewable' : true
    })

})

