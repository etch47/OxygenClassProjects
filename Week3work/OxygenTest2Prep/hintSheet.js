
<!DOCTYPE html>
<HTML>
	<Head>
		<Title> Name your web page here </Title>
		<link rel="stylesheet" type="text/css" href="nameofyourstylesheet.css">
	</Head>
	<Body>
		<script src = ".js"></script>
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

function factorialize(num) {
    var count = num; 
    for(var i=1; i<count; i++) {
        num=num*i;
    } 
    return num; 
}--------------------------------------------------------------------------------------
console.log(factorialize());

function findLongestWord(str) {

    var arrayOfStrings= str.split(" ");
    //create an array of strings breaking up every space
    var longestString = '';
    //temp place holder for longest string 
    for (var i = 0; i < arrayOfStrings.length; 1++){
    //iterate through the array and compare longest string with current string 
    if(longestString.length<arrayOfStrings[i].length){
    //iterate through the array and compare longest string with current string
    longestString= arrayOfStrings[i];
    }
}    str = longestString;
    return str.length;
}

--------------------------------------------------------------------------------------------
function titleCase(str) {
    var arrayOfStrings = str.split(" ");

    for (var i = 0; i < arrayOfStrings.length; i++) {
        var placeHolder = arrayOfStrings[i];
        var upLetter = placeHolder.charAt(0).toUpperCase();
        placeHolder = placeHolder.slice(1.placeHolder.length).toLowerCase();
        arrayOfStrings[i] = upLetter.concat(placeHolder);
        }
        str = arrayOfStrings.join(' ');
        return str;
    }

-------------------------------------------------------------------------------------------------
function largestOfFour(arr) {
    var largestArray= [];
//creat an empty array to fill later
    for (var i = 0; i < arr.length; i++){

    var largestNumber=0;
     //place holder to find largest number
     for(var j=0; j<arr.length; j++){
         if(largestNumber<arr[i][j]){
             largestNumber=arr[i][j];
         }
     }
     largestArray.push(largestNumber);
     //add largest number to new array 
 }
 return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

-------------------------------------------------------------------------------------------------------

function end(str, target) {
    var start = str.length-(target.length);
    //compare end of string.
    if (str.substring(start,str.length)==target) {
    //compares end of string with target string
    return true;
}    return false; 
}

---------------------------------------------------------------------------------------------------------
end("Bastian", "n");*/

function repeat(str, num) {
    var holderArray=[];
//create empty array to store strings
for (var i = 0; i < num; i++) {

    holderArray.push(str);
//dd strings based on how many times requested
}

str = holderArray.join(" ");
 //turn array of strings into sings string
 return str; 
}

repeat("abc", 3)

----------------------------------------------------------------------------------------------------------


function truncate(str, num) {

    if (num < 4) {
        str = str.slice(0, num);
        str = str + '...';}

    else if (num > 3 && num < str.length) {
            num = num - 3; 
            str = str.slice(0, num);
            str = str + '...';
            return str;
    } else {
            str = str;
            console.log("hi")
        }   return str;
    }
---------------------------------------------------------------------------------------------------------------------
    function chunk(arr, size) {
        var holderArray= [];
         //empty array we will add values to
         var count=0;
         //while loop counter plus indes counter
         while(count<arr.length){
         holderArray.push(arr.slice(count, count = count+size)
         //add to holderarray values between current index and size
         count = count + size;
         //increase count
         }
         return holderArray;
 }

 chunk(["a", "b", "c", "d"], 2);
 
 
 ------------------------------------------------------------------------------------------------------------------------------------------------
 
 “  ”.length

//   comments

confirm   ( “     “);                             ask for user interaction 
prompt    (“      “);                            both of these make pop up input boxes appear
document.write  writes to a web page
numbers just type the number

strings need quotes    

console.log       will take whatever is inside the parentheses and log it to the console below 
                         your code. 

 >
<
>=
<=
*            ===        EQUAL TO
*            !==         NOT EQUAL TO   



                      
+
-
*
/

%  MODULO     returns remainder only



++   increment by one               i ++
--    decrement by one               i --

+=   increment by variable         i  += x
-=    decrement by variable       i    -= x


----------------------------------------------------------------------------------------------------

SUBSTRING
"some word".substring(x, y)where x is where you start chopping and y is where you finish chopping the original string.
 To select  the "he" in "hello", you would write this:
"hello". substring(0, 2);
number to right is one above the place you need to chop
variables

var  variableName = value

-----------------------------------------------------------------------
-First off, a quick review of what if statements look like.
A typical if () statement looks like this. Depending on what you are checking for, the else if and else blocks may not be needed. Note how the { }, ( ) and ; are used.
if (this condition is true) {
    do something;
} else if {
    do this other thing;
} else if {
    do this awesome thing;
} else {
    do something different;
}



if ( a < b) {
    do something here;
}
else if (a > b) {
    do this other thing;
}
else {
    do something different;
}

------------------------------------------------------------------------

functions 

First declare a function using var, and then give it a name 
var name = function(parameter) {
do something      parameter ;                                                        semicolon
};                                                                                                    semicolon


At the end of each line of code (within the { }) and after the entire function (after the {}), 
put a semi-colon. 



example 
var foodDemand = function(food)
{
    console.log("I want to eat" + " " + food)
};

foodDemand("pizza")

another function example

var orangeCost = function(cost){
    var orangeTotal = cost * 5;
    console.log (orangeTotal);
};
    orangeCost(5.00)

--------------------------------------------------------------------------------------------










one more example

var quarter = function(number){
    return number / 4;

    }; 
if (quarter(120) % 3 === 0 ) {
 console.log("The statement is true");                                  (this statement is true)
} else {                                                                                   120 / 4  = 30
  console.log("The statement is false");                                 30 % 3 === 0
}



function example with if / else statement

var compare = function(choice1, choice2){

    if (choice1 === choice2){
    
        return "The result is a tie!";                                       semicolon
    }
};                                                                                       semicolon



function if else
var functionName = function(parameter, parameter) {
  if (condition1) {
    //do something
  }
  else if (condition2) {
    //do something
  }
  else {
    //do something
  }
}









 
-----------------------------------------------------------------------------------------
two parameter example
var perimeterBox = function(length, width){
    var rectangle = length + length + width + width;
    return rectangle;
};

perimeterBox(94, 47)



------------------------------------------------------------------------------------------

 






global scope


var my_number = 7;                  //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;  if I use “var” here, this becomes a new local variable.                               console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);

----------------------------------------------------------------------------------

FOR LOOPS  

for (start; end; increment) {
    // Do something!
}


for (var i = 100; i>=5; i-=5){      this loop starts at 100, counts down in increments of five,
    console.log(i);                         and ends at the number five.   
}




ARRAYS   

Syntax:
var arrayName = [data, data, data];

uses  [   ]    
store lists of data
can store different data types
are ordered. each piece of data is fixed.

The position of things in arrays is fixed. So we just need to know the array name 
 and the position of the data we want. The position (or the index) of each bit of data is counted starting from 0, not 1.


var names = ['Dave', 'Tom', 'John', 'Eric', 'Peter'];                     array
for (var i = 0; i < names.length; i ++){                                        starts at zero, increments
    console.log("I know someone called " + names[i]);               through list by one
}



WHILE LOOPS   
'While' loops are like 'for' loops, only they don't need a counter—they continue to run until their condition is met.
The while loop is ideal when you want to use a loop, but you don't know how many times you'll have to execute that loop.
WHILE LOOP SYNTAX 
 while(condition){
    // Do something!
}
-----------------------------------------------------------------------------------
DO/ WHILE LOOPS:
Will do something once then check to see if the condition is true. in this example the DO is executed once, then it stops because the bool is false

var loopCondition = false;
do {
          console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);



isNaN  



---------------------------------------------------------------------------------------------------------


/*jshint multistr:true */

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}




















 
