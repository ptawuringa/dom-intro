describe("The calculate bill factory function", function () {

    it("|should be able to set the call cost", function () {
        assert.equal(8.25,calculateBillEvent('call,call,call'));
    })
    it("should be able to set sms cost",function(){
        assert.equal(3,calculateBillEvent('sms,sms,sms,sms'));
    })

    });
