(function  () {
    'use strict';

    var app = angular.module("cookingBook.singleView");

    app.controller("CookingBookRecipe",
        ['$scope', '$stateParams', 'cbSingleViewService', '$location',
        function($scope, $stateParams, cbSingleViewService, $location){
        // get the id
        var currentRecipeId = $stateParams.recipeID;
        var currentRecipe = cbSingleViewService.findRecipe(currentRecipeId, $scope.recipeList);

        console.log('currentRecipe', currentRecipe);

        if(currentRecipe === undefined ) {
            $location.path('/404');
        }

        $scope.name = currentRecipe.name;
        $scope.ingredients = currentRecipe.ingredients;
        $scope.description = currentRecipe.description;
        $scope.id = currentRecipeId;

        $scope.getLength = function(obj) {
            return Object.keys(obj).length;
        };

    }]);
})();