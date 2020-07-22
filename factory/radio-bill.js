function addRadioBill(){
var callTotal=0,
var smsTotal=0,
var total=0,

    function addTotals(billItemType){
        if(billItemType ==='call'){
          callTotal += 2.75;
          total += 2.75;
        }
        else if(billItemType === 'sms'){
          smsTotal += 0.75;
          total += 0.75;

        }
    }
function addClassList(){

    if (hasReachedWarningLevel()) {
        return "danger"
    }


    else if (getTotalCost() >= getWarningLevel()) {
        return "warning"
    }

}


function callTotal(){
return callTotal;

}

function smsTotal(){
    return smsTotal;
}

return {
     addClassList,
    addTotals,
    callTotal,
    smsTotal,
    addClassList,

}
}