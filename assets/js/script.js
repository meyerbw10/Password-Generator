// Assignment Code
var generateBtn = document.querySelector("#generate");


var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var CapLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var symbols = "!@#$%^&*()-_".split("");
var globalSet = [];
var generatedPassword = '';

function generatePassword() {
  
  var passwordLength = parseInt(window.prompt("We are generating a password of at least 8 characters and no more than 128 characters."));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Criterea not met!");
    generatePassword();
  } else {
    var wantsLowercase = window.confirm("Do you want to include lowercase letters in your password?");
    var wantsUppercase = window.confirm("Do you want to include uppercase letters in your password?");
    var wantsNumbers = window.confirm("Do you want to include numbers in your password?");
    var wantsSymbols = window.confirm("Do you want to include symbols in your password?");
    if (wantsLowercase === true) {
      globalSet = globalSet.concat(letters);
    }
    if (wantsUppercase === true) {
      globalSet = globalSet.concat(CapLetters);
    }
    if (wantsNumbers === true) {
      globalSet = globalSet.concat(numbers);
    }
    if (wantsSymbols === true) {
      globalSet = globalSet.concat(symbols);
    }

    for (var i = 0; i < passwordLength; i++) {
      let currentChar = Math.floor(Math.random() * globalSet.length);
      generatedPassword += currentChar;
    }

    return generatedPassword;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page