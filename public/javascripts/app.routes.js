angular.module('robo').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/home');

$stateProvider
	.state('app',{
		abstract: true,
		templateUrl: "../templates/home.view.html",
		controller: 'roboCtrl',
		controllerAs: 'app'
	})

	.state('app.home', {
		url: '/home'
	})

	.state('app.users', {
		url: '/users',
		controller: "roboCtrl",
		controllerAs: "app",
		template: "<h3> from users state</h3>"

	})
	
}])