// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var length = prompt("password length");
  console.log(length);
    useLowerCase = confirm("include lowercase characters");
    upperCase = confirm("include uppercase charaters");
    UseNumbers = confirm("include numerical characters");
    useSpecialChaacters = confirm("include special charaters");
  
  
  
  
  if( length  < 8 || length > 128 ) {
    alert(" **Password must have 8 - 128 charaters")
    return null;
    
  }
  else if(!useLowerCase && !upperCase && !UseNumbers && !useSpecialChaacters){
    alert("You must Chose at least one option!")
    return null;
   }
   

  // confirms in the same function * 
  //into else statements 
    //if else for lenght* 
      //if they chose less than 8 charater return **
      //if they chose more than 128 characters return **
    // if they chose dont chose at least one charater set return 
     // && or =||
     //if they choose Upper case 
        // need something to generate andom uppercase same for lowercase numbers and special charaters 
     // arrays 

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
