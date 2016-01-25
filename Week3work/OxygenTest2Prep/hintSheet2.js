<!DOCTYPE html>
<HTML>
	<Head>
		<Title> Name your web page here </Title>
		<link rel="stylesheet" type="text/css" href="nameofyourstylesheet.css">
	</Head>
	<Body>
		<script src = "LemonadeStand.js"></script>
	</Body>
</HTML>
----------------------------------------------------------------------------------------------------------------------------------------------------

A SUBSTITUTE FOR CONSOLE.LOG IN ORDER TO PRINT TO WEB PAGE

document.write("This would be on the web page");

-------------------------------------------------------------------------------------------------------------------------------------------------------

NICKS PALINDROME EXAMPLE

function getWord(){
	var wordBeingEntered;
	wordBeingEntered = prompt("Type a word to see if it is a palindrome.")
	return wordBeingEntered
	}
	
function eliminateSpaces(wordBeingEntered){
	var wordWithoutSpaces;
	wordWithoutSpaces = wordBeingEntered.replace(/\s/g, '');
	return wordWithoutSpaces
}
	
function reverse(wordWithoutSpaces){
    console.log(wordWithoutSpaces.split("").reverse().join(""));
	return wordWithoutSpaces.split("").reverse().join("");
	}
	
function checkIfPalindrome(wordWithoutSpaces, reversedWord){
	if (wordWithoutSpaces === reversedWord){
	console.log("Your word is, in fact, a palindrome.")
	}
	else {
	console.log("That is not a palindrome.")
	}
}

function main(){
	var word;
	word = getWord();
	var wordWithoutSpaces;
	wordWithoutSpaces = eliminateSpaces(word);
	var reversedWord;
	reversedWord = reverse(wordWithoutSpaces);
	return checkIfPalindrome(wordWithoutSpaces, reversedWord);
}

main();

------------------------------------------------------------------------------------------------

ADAMS ROMAN NUMERAL EXAMPLE

var numberToConvert;
var myNumberArray;

function inputCheck(userInputNumber)
{
    var x = parseInt(userInputNumber);
    console.log(x);
    if(isNaN(x))
    {
        userInput();
    }
    else
    {
        return x;
    }
}

function makeNumberArray(stringNumber)
{
    var numberArray;
    var x;
    numberArray=stringNumber.split('');
    while(x=0,x<numberArray.length-1,x++)
    {
        numberArray[x]=Number(numberArray[x]);
        console.log(numberArray[x]);
    }
    
    return numberArray;
}

function userInput()
{
    var number;
    var numberArray;
    number = prompt ("enter the number you want to convert");
   inputCheck(number);
   return number;
}


function convertToRomenNumeral(numberArray)
{
    var myArrayLength;
    var numberFormat;
    var romanFormat;
    var spotInArray;
    var romanFormatArray=[];
    var romanArrayCounter;
    var IntToRomenTranslationKey;
    romanArrayCounter=0;
    spotInArray=0;
    myArrayLength=numberArray.length;
    IntToRomenTranslationKey={1:"I",2:"II",3:"III",4:"IV",5:"V",6:"VI",7:"VII",8:"VIII",9:"IX",10:"X",20:"XX",30:"XXX",40:"XL",50:"L",60:"LX",70:"LXX",80:"LXX",90:"XC",100:"C",200:"CC",300:"CCC",400:"CD",500:"D",600:"DC",700:"DCC",800:"DCCC",900:"CM",1000:"M"};
   console.log(numberArray);
   while(spotInArray<myArrayLength)//make into for loop
   {
       numberArray[spotInArray]=numberArray[spotInArray]*(Math.pow(10,numberArray.length-(spotInArray+1)));
       spotInArray++;
       console.log(numberArray);
   }
   for(var x=0;x<myArrayLength;x++)
   {
       romanFormatArray[x]=IntToRomenTranslationKey[numberArray[x]];//numberFormat.indexOf(numberArray[x]);
       console.log(romanFormatArray);
   }
}

numberToConvert=userInput();
myNumberArray=makeNumberArray(numberToConvert);
convertToRomenNumeral(myNumberArray);

-------------------------------------------------------------------------------------------------------------------------------

NICKS ROMAN NUM EXAMPLE

function checkUserNumber(){
	while (true){
	var userNumber;
	userNumber = prompt("Enter a positive number to convert to Roman Numeral.");
	if(isNaN(userNumber) || (userNumber === "") || (userNumber <= 0)) {
	console.log("I said a positive NUMBER, fool!");
	}
	else {
	return(userNumber);
	}
	}
	}

	
function convertToRomanNumeral(userNumber){
	var romanNumber;
	romanNumber = ""
	var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	for (var i = 0; i < decimals.length; i++){
		while (userNumber >= decimals[i]){
		romanNumber += romans[i];
		userNumber -= decimals[i];
		}
	}
	console.log(romanNumber);
}

var userNumber;
userNumber = checkUserNumber();
convertToRomanNumeral(userNumber);

----------------------------------------------------------------------------------------------------------------------------------------------------

HEATHER'S EXAMPLE TO GET USER DATA

function getUserData(message) {
   var userData;
   userData = window.prompt(message);
   return userData;
}

------------------------------------------------------------------------------------------------------------------------------------------------------

NICKS EXAMPLE OF FIZZBUZZ

var counter;
var item;


for(counter=0; counter<=100; counter++){
console.log(counter)

if (counter % 3 === 0){
console.log("fizz") 
if (counter % 5 === 0){
console.log("buzz")
if (counter % 15 === 0){
console.log("fizzbuzz")
}
}
}
}

-------------------------------------------------------------------------------------------------------------------------------------------------------------

NICKS EXAMPLE OF GETELEMENTBYID


<!DOCTYPE html>
<HTML>
	<Head>
		<Title> External JavaScript Example Page </Title>
	</Head>
	<Body>
	
	<p id="namedisplay"></p>
	<p id="dolladolla"></p>
	<p id="OT"></p>
	
	
		<script src = "JavaScriptPayCalculator.js"></script>
		
	</Body>
</HTML>

function calculateRegularPay(hours, wage){
	if (hours <= 40){
	document.getElementById("OT").innerHTML = ((Math.round(("hours * wage= ", hours*wage)*100)/100));
	}
}


-------------------------------------------------------------------------------------------------------------------------------------------------------

NICKS EXAMPLE OF GETTING RANDOM NUMBER

function getRandomDiceRoll() {
    var randDice;
    randDice= 1 + Math.floor(Math.random()*6);
    return randDice; 
}

-----------------------------------------------------------------------------------------------------------------------------------------------

String Methods
Method	Description
charAt()	Returns the character at the specified index (position)
charCodeAt()	Returns the Unicode of the character at the specified index
concat()	Joins two or more strings, and returns a new joined strings
fromCharCode()	Converts Unicode values to characters
indexOf()	Returns the position of the first found occurrence of a specified value in a string
lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a match against a regular expression, and returns the matches
replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
search()	Searches a string for a specified value, or regular expression, and returns the position of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring()	Extracts the characters from a string, between two specified indices
toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
toLowerCase()	Converts a string to lowercase letters
toString()	Returns the value of a String object
toUpperCase()	Converts a string to uppercase letters
trim()	Removes whitespace from both ends of a string
valueOf()	Returns the primitive value of a String object

----------------------------------------------------------------------------------------------------------------------------------------------------------

JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

Operator	Example	Same As
=		x = y		x = y
+=		x += y		x = x + y
-=		x -= y		x = x - y
*=		x *= y		x = x * y
/=		x /= y		x = x / y
%=		x %= y		x = x % y

--------------------------------------------------------------------------------------------------------------------------------------------------------


