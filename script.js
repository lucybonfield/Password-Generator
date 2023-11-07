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
  config.len = 8;
  config.upc = false;
  config.loc = false;
  config.num = false;
  config.sym = false;

  while (true) {
    passwordLength = ask('How many charcters would you like? (8-128)', TYPE_NUMBER);
    if (passwordLength <= 128 && passwordLength >= 8) {
      config.len = passwordLength; 

      config.upc = ask('Would you like to use capital letters?', TYPE_BOOLEAN);
      config.loc = ask('Would you like to use lower case letters?', TYPE_BOOLEAN);
      config.num = ask('Would you like to use numbers?', TYPE_BOOLEAN);
      config.sym = ask('Would you like to use symbols?', TYPE_BOOLEAN);
      break;
    } else {
      alert("Password must be 8 to 128 characters long!");
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
var passwordDisplay = document.querySelector('#password');

// Add event listener to generate button
generateBtn.addEventListener('click', function() {
  getPasswordOptions();

  var password = generatePassword();
  passwordDisplay.textContent = password;
});

// Function to generate password with user input
function generatePassword() {
  const characterSets = [];
  if (config.upc) characterSets.push(upperCasedCharacters);
  if (config.loc) characterSets.push(lowerCasedCharacters);
  if (config.num) characterSets.push(numericCharacters);
  if (config.sym) characterSets.push(specialCharacters);
  if (characterSets.length === 0) {
    return "Invalid configuration"; // Handle the case where no character sets are selected.
  }
  let password = '';
  for (let i = 0; i < config.len; i++) {
    const randomSet = characterSets[Math.floor(Math.random() * characterSets.length)]; // getting a random element from an array
    password += randomSet[Math.floor(Math.random() * randomSet.length)];
  }
  return password;
}

