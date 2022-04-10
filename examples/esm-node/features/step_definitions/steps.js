import assert from "assert";
import { When, Then } from "@cucumber/cucumber";
import { Greeter } from "../../src/index.js";

When("the greeter says hello", function () {
  this.whatIHeard = new Greeter().sayHello();
});

Then(
  "I should have heard {string}",
  function (expectedResponse) {
    assert.equal(this.whatIHeard, expectedResponse);
  }
);
