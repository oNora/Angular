(function  () {

    'use strict';

    angular.module('CookingBookApp', [
        'ui.router',
        'LocalStorageModule',
        'cookingBook.formRecipe',
        'cookingBook.recipe',
        'cookingBook.search'
    ]);

})();