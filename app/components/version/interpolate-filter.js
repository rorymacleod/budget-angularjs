"use strict";

angular.module("budgetApp.version.interpolate-filter", [])

.filter("interpolate", ["version", function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);
