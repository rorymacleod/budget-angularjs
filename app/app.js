"use strict";

// Declare app level module which depends on views, and components
angular.module("budgetApp", [
    "ngMaterial",
    "ngRoute",
    "budgetApp.view1",
    "budgetApp.view2",
    "budgetApp.version"
]).
config([
    "$locationProvider",
    "$mdThemingProvider",
    "$routeProvider",
    function ($locationProvider, $mdThemingProvider, $routeProvider) {
        $locationProvider.hashPrefix("!");

        $mdThemingProvider
            .theme("default")
            .primaryPalette("green")
            .accentPalette("cyan");

        $routeProvider.otherwise({ redirectTo: "/view1" });
    }
]);
