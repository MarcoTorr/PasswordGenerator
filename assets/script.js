// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
// criteria 
  var passwordLength = prompt("Choose a password length between 8 and 128 characters");
  while (passwordLength<8 || passwordLength>128){
      alert("Please pick a number between 8 and 128");
      var passwordLength = prompt("Choose a password length between 8 and 128 characters");
  }
  var numberPasswordLength= Number(passwordLength);

  var  criteriaPassword = prompt("Do you want to include lowercase, uppercase, numeric, and/or special characters? (yes/no)");
  
  //This stuff not working why?
  //while (criteriaPassword !=("yes") || criteriaPassword !=("no")){
    //alert("Please write 'yes' or 'no'");
    //var  criteriaPassword = prompt("Do you want to include lowercase, uppercase, numeric, and/or special characters? (yes/no)");
  //}  

  if (criteriaPassword ==="yes"){
      var uppercaseLetters = prompt ("How many letters should be uppercase(?)? 0-128");
      var numberUpperCase= Number(uppercaseLetters);

      while ((numberUpperCase<0)|| numberUpperCase> numberPasswordLength){
          alert("Please pick 0 or an integer positive number lower than your chosen password length");
          var uppercaseLetters = prompt ("How many letters should be uppercase? 0-128");
          var numberUpperCase= Number(uppercaseLetters);
        }  
      var newLengthAvailable= numberPasswordLength-numberUpperCase;
      var numericCharacters = prompt ("How many characters should be numeric? 0-128");
      var numberNumericCharacters= Number(numericCharacters);
      while (numberNumericCharacters<0||numberNumericCharacters> newLengthAvailable){
        alert("Please pick a lower integer number or a positive number");
        var numericCharacters = prompt ("How many characters should be numeric? 0-128");
        var numberNumericCharacters= Number(numericCharacters);
      }  
      var newLengthAvailable= newLengthAvailable-numberNumericCharacters;
      var specialCharacters = prompt ("How many characters should be special characters? 0-128");
      var numberSpecialCharacters= Number(specialCharacters);
      while (numberSpecialCharacters<0||numberSpecialCharacters> newLengthAvailable){
        alert("Please pick a lower integer number or a positive number");
        var specialCharacters = prompt ("How many characters should be special characters? 0-128");
        var numberSpecialCharacters= Number(specialCharacters);
      }     
  }
  else{
    var numberUpperCase= 0;
    var numberNumericCharacters=0;
    var numberSpecialCharacters= 0;

  }
 //creating the password 
 var password=[];

 // numeric values
 
 for (i=0; i<numericCharacters; i++){
     var numbersRandom = [Math.floor(Math.random()*10)];
     password.push(numbersRandom)
 }
 
 //uppercase
var letterAlphabetUppercase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

for (i=0; i<uppercaseLetters; i++){
    var letterRandom = letterAlphabetUppercase[Math.floor(Math.random()*letterAlphabetUppercase.length)];
    password.push(letterRandom)
}
//special characters
var specialList=['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','{','|','}','~'];

for (i=0; i<specialCharacters; i++){
    var specialRandom = specialList[Math.floor(Math.random()*specialList.length)];
    password.push(specialRandom)
}
//rest of the password
var letterAlphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var finalLengthLowercase= (numberPasswordLength - numberNumericCharacters -numberSpecialCharacters - numberUpperCase);
for (i=0; i<finalLengthLowercase; i++){
    var lowercaseRandom = letterAlphabet[Math.floor(Math.random()*letterAlphabet.length)];
    password.push(lowercaseRandom)
}

//shuffle

  var shufflePassword=password.sort((a, b) => 0.5 - Math.random());

  passwordText.value = shufflePassword.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);