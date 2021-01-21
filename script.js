  

var number = ["0", "1", "2","3","4","5","6","7","8","0"];
var specialChar = ["!",".","/", "%","&",",","*","+","~",">","<","-","?"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength="";
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialCharacter;
var confirmNumericCharavter;
var passwordCharacters = []
var randomPassword=""

var generateBtn = document.querySelector("#generate");



function generatePassword(){
  var confirmLength = (prompt("how many characters would you like your password have?"));

  if(confirmLength<=7 || confirmLength>=129){
    alert("Password length must be between 8-128 characters")
    var confirmLength = (prompt("how many characters would you like your password have?"));
  }
  var confirmLowerCase = confirm("Press OK if you would like to have lowercase inside of password");
  var confirmUpperCase = confirm("Press OK if you would like to have uppercase inside of password"); 
  var confirmNumericCharacter = confirm("Press OK if you would like to have numeric inside of password");     
  var confirmSpecialCharacter = confirm("Press OK if you would like to have special characters inside of password");
 
  if(confirmLowerCase){
    passwordCharacters = [...passwordCharacters,...charLower]
  }
  if(confirmUpperCase){
    passwordCharacters = [...passwordCharacters,...charaUpper]
  }
  if(confirmNumericCharacter){
    passwordCharacters = [...passwordCharacters,...number]
  }
  if(confirmSpecialCharacter){
    passwordCharacters =[...passwordCharacters,...specialChar]
  }
   
  for(var i=0; i< confirmLength; i++){
     randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
   return randomPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

