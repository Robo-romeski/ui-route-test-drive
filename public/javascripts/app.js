
(function(){
console.log('init point for angular script');

//console.log(angular)
angular.module('robo', ['ui.router']);

angular.module('robo')
.run(function(){
	console.log("running")
})

angular.module('robo')
	.factory('roboFactory', roboFactory)

	//roboFactory.$inject = ['$scope'];
	roboFactory.$inject = ['$http'];

	 function roboFactory($http){
console.log("roboCtrl loaded");
	 	var service = {
	 		getUsers: getUsers
	 	}

	 	return service;
	 	function getUsers(){
	 		var data = [{
				"firstName": "Johnny",
				"lastName": "Cage",
				"profession":"Movie Star"
			},
			{
				"firstName": "Jackson",
				"lastName": "Briggs",
				"profession":"Police Officer"
			},
			{
				"firstName": "Shang",
				"lastName": "Tsung",
				"profession":"Wizard"
			}]
		return data;
	 	}

 //        function getJson(){
	// 	console.log("robo fac loaded");
	// 	return $http.get('/mock/users.json');
	// 	// .success(function(response){
	// 	// console.log(response.data);
	// 	// $scope.data = response.data;
	// 	// });	
	// }
	}

	


angular.module('robo')
.controller('roboCtrl', ['roboFactory', function (roboFactory) {
   // console.log(roboFactory);
  //  console.log($scope.data);
	console.log("roboCtrl loaded")


	var vm = this;

     // roboFactory.getUsers().then(function(res){
     // 	console.log(res)
     // },
     // function(error){
     // 	console.log(error);
     // });

     var users = roboFactory.getUsers();
     console.log(users)




}])

})();//end iife