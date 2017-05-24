"use strict";

angular.module("budgetApp.version", [
  "budgetApp.version.interpolate-filter",
  "budgetApp.version.version-directive"
])

.value("version", "0.1");
