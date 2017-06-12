// var readline = require('readline-sync');  
// var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
// var shift = parseInt(readline.question('How many letters would you like to shift? ')); 

var stringOne = "is or but why";


//function that will take a string of letters and output an incripted version of it
var ceaserShift = function(str, key){
  
  var realKey = (key % 26);
  
  if(realKey < 0){
    return ceaserShift(str, realKey + 26);
  }
  
  
  var allLowerCaseStr = str.toLowerCase();
  
  //need alphabet to shift specified amount of times
  var alphabet = " abcdefghijklmnopqrstuvwxyz";
  
  //empty string to store encripted string into
  var encriptedMessage = "";
  
  for(var i = 0; i < allLowerCaseStr.length; i++){
    
    var indexNum = alphabet.indexOf(allLowerCaseStr[i]);
    var indexNum2 = indexNum + realKey;
    var fixed = (indexNum2 % 26);
    
    if(alphabet.charAt(fixed) == 'z'){ 
      encriptedMessage += " ";
    }else{
      encriptedMessage += alphabet.charAt(fixed);
    }
    
  }
  
  return encriptedMessage;
}

console.log(ceaserShift(stringOne, 46));
console.log(ceaserShift("cmtiltvontqbs", -46));

