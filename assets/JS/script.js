// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assigned variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\\+=";
var chosenCharacters = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate password function gets called in writePassword function, and it should return the final password
function generatePassword(){

  //do random generation here and return the final password in the end
  var result = "";

  //ask the user how many characters they want password to be
  var length = prompt("How many characters in your random password? (between 8 and 128)");
  if(isNaN(length)){
    alert("You must input a number!");
    return generatePassword()
}
  if(length<8 || length> 128){
    alert("Please choose numbers BETWEEN 8 and 128!");
    return generatePassword()
}

//ask the user if they want to include upper, lower, numerical, and/or special characters?
var hasUpper = confirm("Include upper case letters? (ABC)");
var hasLower = confirm("Include lower case letters? (abc)");
var hasNumbers = confirm("Include numbers? (0-9)");
var hasSpecial = confirm("Include special characters? (!@#$%&*)");

if(!hasUpper&&!hasLower&&!hasNumbers&&!hasSpecial){
  alert("You must choose at least 1 character type!");
  return generatePassword()
}

if(hasUpper){
  chosenCharacters += upper
}

if(hasLower){
  chosenCharacters += lower
}

if(hasNumbers) {
  chosenCharacters += numbers
}

if(hasSpecial) {
  chosenCharacters += special
}

for (var i = 0; i < length; i++) {
result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}

return result;
}
