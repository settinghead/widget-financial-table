(function() {

  "use strict";

  /* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

  var chai = require("chai");
  var chaiAsPromised = require("chai-as-promised");

  chai.use(chaiAsPromised);
  var expect = chai.expect;
  browser.driver.manage().window().setSize(1024, 768);

  describe("Financial Tables Settings UI", function() {
    beforeEach(function (){
      browser.get("/src/settings-e2e.html");
    });

    it("Should correctly load default settings", function () {
      expect(element(by.id("instruments")).getAttribute("value")).
        to.eventually.equal(
        ["AA.N", "AXP.N", "BA.N", "BAC.N", "CAT.N", "CSCO.O", "CVX.N",
          "DD.N", "DIS.N", "GE.N", "HD.N", "HPQ.N", "IBM.N", "INTC.O",
          "JNJ.N", "JPM.N", "KO.N", "KRFT.O", "MCD.N", "MMM.N", "MRK.N",
          "MSFT.O", "PFE.N", "PG.N", "T.N", "TRV.N", "UTX.N", "VZ.N",
          "WMT.N", "XOM.N"].join(", ")
        );

        //scroll enabled
        expect(element(by.id("scroll-enabled")).getAttribute("checked")).
          to.eventually.not.be.ok;
        expect(element(by.id("row-padding")).getAttribute("value")).
          to.eventually.equal('0');
        expect(element(by.id("col-padding")).getAttribute("value")).
          to.eventually.equal('0');
    });

    it("Should display scroll settings when scroll is enabled", function () {
      expect(element(by.id("scroll-enabled")).getAttribute("checked")).
        to.eventually.not.be.ok;
      expect(element(by.css(".more-scroll-options")).isDisplayed()).to.eventually.be.false;
      //click on option, additional options appear
      element(by.id("scroll-enabled")).click();
      expect(element(by.css(".more-scroll-options")).isDisplayed()).to.eventually.be.true;
    });

    xit("Should correctly save settings", function (done) {
      //TODO
    });
  });
})();