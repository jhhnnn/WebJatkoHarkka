indexApp.controller("vController",function($scope,$http){
	
	$scope.pyorat = [];
	$scope.success = true;
	$scope.err_info = "";
	
	
	$scope.getPyorat = function(){
		var url = "http://home.tamk.fi/~e4jheino/Bikes.json";
		$http.get(url)
			.then(function(resp){
				$scope.pyorat = resp.data;
				$scope.success = true;
				console.log($scope.pyorat);
			},function errorCallback(resp){
				console.log(resp);
                $scope.success = false;
                $scope.err_info = "Data not found!";
			});
	};
	$scope.getPyorat();
	
	$scope.viewPyorat = function(index){
		$scope.viewIndex = index;
	};
});