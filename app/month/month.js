"use strict";

angular
    .module("budgetApp.month", ["ngRoute"])

    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/month", {
                templateUrl: "/month/month.html",
                controller: "MonthController"
            });
    }])

    .controller("MonthController", [
        function() {

        }
    ])