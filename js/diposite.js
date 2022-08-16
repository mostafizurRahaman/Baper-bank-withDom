// add event listener on diposite button and get the value 
document.getElementById('diposite-btn').addEventListener('click', function(){
   //step-1: fisrt get the amount want to diposite string and convert to number
   const dipositeField = document.getElementById('diposite-feild'); 
   const newDipositeValueString = dipositeField.value ; 
   const newDipositeValue = parseFloat(newDipositeValueString); 
   
   //step-2: get the current amount and convert to number 
   // then add currentvalue and newvalue = totalcurrect  value diposite; 
   const diposite = document.getElementById('amount-diposite'); 
   console.log(diposite.innerText); 
   const oldDipositeValueString = diposite.innerText; 
   const oldDipositeValue = parseFloat(oldDipositeValueString); 
   diposite.innerText  = newDipositeValue + oldDipositeValue; 
   
   // step-3; get the previous balance and convert string to float 
   // add with new diposite value
   // then get the current total balance
   const balance = document.getElementById('balance'); 
   const currentBalanceString = balance.innerText; 
   const currentBalance  = parseFloat(currentBalanceString); 
   balance.innerText = currentBalance + newDipositeValue; 

   //to clear input field of diposite; 
   dipositeField.value = "";  
}); 