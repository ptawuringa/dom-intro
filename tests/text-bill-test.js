describe("The text bill factory function", function() {

    it("should be able to set the call cost", function(){

        let settingsBill = BillWithSettings();
        
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(1.85);
        assert.equal(1.85,settingsBill.getCallCost());

        let settingsBill2= BillWithSettings();
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75,settingsBill2.getCallCost());
    
    });

    it("should be able to set the sms cost", function(){

        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.85);


        assert.equal(0.85,settingsBill.getSmsCost());
        assert.equal(2.75,settingsBill.getCallCost());

        let settingsBill2= BillWithSettings();
        settingsBill2.setSmsCost(0.75);
        assert.equal(0.75,settingsBill2.getSmsCost());

        
    });

    it("sholud be able to set the sms and call cost",function(){
       let settingsBill= BillWithSettings();
       settingsBill.setSmsCost(0.85);
       settingsBill.setCallCost(1.85);

       assert.equal(0.85, settingsBill.getSmsCost());
       assert.equal(1.85, settingsBill.getCallCost());

       let settingsBill2= BillWithSettings();
       settingsBill2.setSmsCost(0.55);
       settingsBill2.setCallCost(2.55);

       assert.equal(0.55, settingsBill2.getSmsCost());
       assert.equal(2.55, settingsBill2.getCallCost());
    
});

it("should be able to set the warning level",function(){
    let settingsBill = BillWithSettings();
    
    settingsBill.setWarningLevel(30);


    assert.equal(30, settingsBill.getWarningLevel());


})

});