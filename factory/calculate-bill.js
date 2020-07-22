function calculateBillEvent(billList){
    var total = 0 ;
    var calls = 0;
    var smss = 0
    var bills = billList.split(',');
    for(var i= 0 ; i < bills.length ; i++ ){
       if(bills[i].startsWith('c')){
          calls += 2.75;
       }
       else if(bills[i].startsWith('s')){
          smss += 0.75;
       }
    }
    total = calls + smss;
    return total.toFixed(2);
 }
 
 calculateBtn.addEventListener('click', function(){
    calculateBtnClicked();
 });