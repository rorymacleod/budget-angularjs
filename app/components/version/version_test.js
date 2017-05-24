"use strict";

describe("budgetApp.version module", function() {
  beforeEach(module("budgetApp.version"));

  describe("version service", function() {
    it("should return current version", inject(function(version) {
      expect(version).toEqual("0.1");
    }));
  });
});
