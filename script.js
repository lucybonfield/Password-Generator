// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLengthQuery = prompt("How long do you want your password to be? Must be between 8 and 128 characters.");
  passwordLengthQuery = parseInt(passwordLengthQuery);
  if (passwordLengthQuery < 8 || passwordLengthQuery > 128) {
    alert("Password must be at least 8 characters, but not more than 128");
    getPasswordOptions();
  }
  let lowercaseQuery =  confirm("Do you want it to include lowercase letters?");
  let uppercaseQuery =  confirm("Do you want it to include uppercase letters?");
  let numericQuery =  confirm("Do you want it to include numbers?");
  let specialCharactersQuery =  confirm("Do you want it to include special characters?");
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomSpecialCharacters = Math.floor(Math.random() * specialCharacters.length);
  const randomNumericCharacters = Math.floor(Math.random() * numericCharacters.length);
  const randomLowerCasedCharacters = Math.floor(Math.random() * lowerCasedCharacters.length);
  const randomUpperCasedCharacters = Math.floor(Math.random() * upperCasedCharacters.length);
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);