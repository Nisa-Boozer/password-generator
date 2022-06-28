// Assignment code here

 var upperCase= ["A", "B", "C", "D", "E","F", "G", "H","I", "J", "K", "L", "N", "O", "P", "Q", "R","T", "U", "V", "W", "X", "Y", "Z"];
 var lowerCase = ["a","b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y","z"];
 var numbers =[1,2,3,4,5,6,7,8,9,0];
 var specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "?"];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var length = prompt("password length");
  console.log(length);
    useLowerCase = confirm("include lowercase characters");
    useUpperCase = confirm("include uppercase charaters");
    useNumbers = confirm("include numerical characters");
    useSpecialChaacters = confirm("include special charaters");
  
  
  
  var randomCharacters = [];
  if( length  < 8 || length > 128 ) {
    alert(" **Password must have 8 - 128 charaters")
    return null;
    
  }
   if(!useLowerCase && !useUpperCase && !useNumbers && !useSpecialChaacters){
    alert("You must Chose at least one option!")
    return null;
   }
   if(useLowerCase) {
 randomCharacters = randomCharacters.concat(lowerCase);
  }
  //my commit isnt working 
  if(useUpperCase) {
    randomCharacters = randomCharacters.concat(upperCase);
     }
     
    if(useNumbers) {
    randomCharacters = randomCharacters.concat(numbers);
     }
     
   if(useSpecialChaacters) {
    randomCharacters = randomCharacters.concat(specialCharacters);
     }
     console.log(randomCharacters);
    
     //console.log(randomCharacters[Math.floor(Math.random()*randomCharacters.length)]);
     var password = "";

     for ( var i = 0; i < length; i ++){
     
    

      password += randomCharacters[Math.floor(Math.random()*randomCharacters.length)];
      


     };
      return password;
     
//for loops math.random
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
     // wireframing 

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
