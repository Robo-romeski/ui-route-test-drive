
(function(){
console.log('init point for angular script');

//console.log(angular)
angular.module('robo', [
	'ui.router','restangular']);


angular.module('robo')
.config(function(RestangularProvider){
		RestangularProvider.setBaseUrl('http://jsonplaceholder.typicode.com/');
	});

angular.module('robo')
.run(function(){
	console.log("running")
})
// angular.module('robo')
// 	.factory('roboFactory', roboFactory)

// 	//roboFactory.$inject = ['$scope'];
// 	roboFactory.$inject = ['$http','Restangular'];
// 	//roboFactory.$inject = ['Restangular'];

// 	 function roboFactory($http){
// console.log("roboCtrl loaded");
// 	 	var service = {
// 	 		getUsers: getUsers
// 	 	}

// 	 	return service;
// 	 	function getUsers(){
// 	 		var data = [{
// 				"firstName": "Johnny",
// 				"lastName": "Cage",
// 				"profession":"Movie Star"
// 			},
// 			{
// 				"firstName": "Jackson",
// 				"lastName": "Briggs",
// 				"profession":"Police Officer"
// 			},
// 			{
// 				"firstName": "Shang",
// 				"lastName": "Tsung",
// 				"profession":"Wizard"
// 			}]
// 		return data;
// 	 	}

//  //        function getJson(){
// 	// 	console.log("robo fac loaded");
// 	// 	return $http.get('/mock/users.json');
// 	// 	// .success(function(response){
// 	// 	// console.log(response.data);
// 	// 	// $scope.data = response.data;
// 	// 	// });	
// 	// }
// 	}

	


angular.module('robo')
.controller('roboCtrl', [ 'Restangular', '$scope', function ( Restangular, $scope) {
 // var limited = 15;
// $scope.limit = limited;
// $scope.addTo = function(){
// 	$scope.limit += limited;
// };
// $scope.takeFrom = function(){
// 	if(limited > 0){
// 	$scope.limit -= limited;
// };

	$scope.loadAmount = 15;

	$scope.loadMore = function(){
		$scope.loadAmount = $scope.loadAmount + 15;
	}

	$scope.loadLess = function(){
		if($scope.loadAmount >= 15)
		$scope.loadAmount = $scope.loadAmount - 15;
	}

   // console.log(roboFactory);
  //  console.log($scope.data);
	console.log("roboCtrl loaded")
	Restangular.all('posts').getList().then(function(result){
		//console.log(result);
		$scope.posts = result;
	});
	

	var vm = this;

     // roboFactory.getUsers().then(function(res){
     // 	console.log(res)
     // },
     // function(error){
     // 	console.log(error);
     // });

     // var user = roboFactory.getUsers();
     // console.log(user)




}])

})();//end iife