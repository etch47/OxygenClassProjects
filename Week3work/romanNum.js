//take a number (user input)
//convert number to roman numeral
//ensure program doesn't crash if user inputs other than a number
//convert both ways
function convertToRoman(digit) {
  var romList;
  var roman;   
romList = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      roman = '';
  for ( i in romList ) {
    while ( digit >= romList[i] ) {
      roman += i;
      digit -= romList[i];
    }
  }
  console.log(roman);
  return roman;
}


convertToRoman(47);















/*
function convertToNumber(letter) {
  var numbList;
  var number;   
numbList = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      number = '';
  for ( string in numbList ) {
    while ( letter >= numbList[string] ) {
      number += (string);
      letter -= numbList[string];
    }
  }
  console.log(number);
  return number;
}



convertToNumber('  XX');
*/
