document.getElementById('submit-btn').addEventListener('click', function(){
   //step:2 get email address value with dom 
   //always remember to get input value with .value 
   const userEmail = document.getElementById('user-email'); 
   const email = userEmail.value ; 
   // get the password form input field 
   const userPassword = document.getElementById('user-password'); 
   const password = userPassword.value; 
  
   
   //Danger: Do use this system on client site website  for validation email and password
   if(email== "mostafiz@gmail.com" && password=="mostafiz"){
      window.location.href = "bank.html"; 
   }else{
      window.alert("tui password vul korcos tk pabi na");  
   }

}); 

