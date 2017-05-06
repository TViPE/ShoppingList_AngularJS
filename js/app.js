var app = angular.module("shoppingList", []);
app.controller("shoppingListCtrl", function($scope){
	$scope.lists = ["Milk", "Bread", "Cheese"];
	$scope.displayError = false;
	
	$scope.addNewItem = function(){
		$scope.errorMessage = "";
		// Error 1 - Adding empty value item 
		if(!$scope.newItem){
			return;
		}
		// Error 2 - Adding the item that is already existed in the array
		if($scope.lists.indexOf($scope.newItem) == -1){ // New Item is not in the array
			$scope.lists.push($scope.newItem);
			$scope.newItem = "";
		} else {
			$scope.errorMessage = "Item is already existed";
			$scope.displayError = true;
		}
		
	}
	$scope.removeItem = function(index){
		$scope.lists.splice(index, 1);
	}	
});