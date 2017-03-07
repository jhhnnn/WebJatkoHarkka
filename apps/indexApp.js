var indexApp = angular.module("indexApp",["ngRoute"]);

indexApp.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when("/Etusivu",{
				templateUrl: "pages/Etusivu.html",
				controller: "eController"
			})
			.when("/Varaus",{
				templateUrl: "pages/Varaus.html",
				controller: "vController"
			})
			.when("/Tietoa",{
				templateUrl: "pages/Tietoa.html",
				controller: "tController"
			})
			.otherwise({
				redirectTo: "/"
			});
}]);

indexApp.controller("pageController",function($scope,$http){
	
});