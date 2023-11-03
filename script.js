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

const TYPE_NUMBER = 0;
const TYPE_BOOLEAN = 1;
const TYPE_STRING = 2;

const config = {
  len: 8,
  upc: false,
  loc: false,
  num: false,
  sym: false
};

// Function to prompt user for password options
function ask(msg, type) {
  let result;
  if (type === TYPE_BOOLEAN) {
    result = confirm(msg);
  } else if (type === TYPE_NUMBER) {
    result = parseInt(prompt(msg));
  } else if (type === TYPE_STRING) {
    result = prompt(msg);
  } else {
    result = "";
  }
  return result;
}

function getPasswordOptions() {
  while (true) {
    passwordLength = ask('How many charcters would you like? (8-128)', TYPE_NUMBER);
    if (passwordLength <= 128 && passwordLength >= 8) {
      config.passwordLength = passwordLength; 
      return passwordLength;
    } else {
      alert("Password must be 8 to 128 characters long!");
    }
  }
}
getPasswordOptions();

const upc = ask('Would you like to use Capital letters?', TYPE_BOOLEAN);
if (upc) { config.upc = upc; }
const loc = ask('Would you like to use lower case letters?', TYPE_BOOLEAN);
if (loc) { config.loc = loc; }
const num = ask('Would you like to use Numbers?', TYPE_BOOLEAN);
if (num) { config.num = num; }
const sym = ask('Would you like to use symbols?', TYPE_BOOLEAN);
if (sym) { config.sym = sym; }

// Function to generate password with user input
function generatePassword(length) {
  const characterSets = [];
  if (upc) characterSets.push(upperCasedCharacters);
  if (loc) characterSets.push(lowerCasedCharacters);
  if (num) characterSets.push(numericCharacters);
  if (sym) characterSets.push(specialCharacters);
  if (characterSets.length === 0) {
    return "Invalid configuration"; // Handle the case where no character sets are selected.
  }
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomSet = characterSets[Math.floor(Math.random() * characterSets.length)]; // getting a random element from an array
    password += randomSet[Math.floor(Math.random() * randomSet.length)];
  }
  return password;
}
console.log(generatePassword(passwordLength));

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