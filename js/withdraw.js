document.getElementById('withdraw-btn').addEventListener("click", function(){
   
   //step 2: get the amount you want to withdraw and convert to number
   const withdrawFeild = document.getElementById('withdraw-feild'); 
   const newWithdrawValueString = withdrawFeild.value; 
   const newWithdrawValue = parseFloat(newWithdrawValueString); 
   

   // step 3: get the previous withdraw amount and covert string to number 
   
   const withdrawValue =document.getElementById('amount-withdraw'); 
   const previousWithdrawValueString = withdrawValue.innerText ; 
   const previousWithdrawValue = parseFloat(previousWithdrawValueString); 
   //step4 : add new and previous withdraw value and dispaly the total value ; 
   const totalWithdraw = previousWithdrawValue + newWithdrawValue; 
   
   // step 5 : set the value to total 
   withdrawValue.innerText  = totalWithdraw; 


   //step 6: get the previous withdraw value and calculate and get current balace 
   const balance = document.getElementById('balance'); 
   const previousBalanceString = balance.innerText; 
   const previousBalance = parseFloat(previousBalanceString); 

   //Step 7: Calculate totalBalance  and set result to total balance 
   const totalBalance = previousBalance - newWithdrawValue; 
   balance.innerText = totalBalance; 

   withdrawFeild.value = ""; 

})