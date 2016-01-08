

function getPalindrome(mirror){

/*make lowercase, ignore whitespace and some punctuation*/
var flipChar 
var lowerChar
var testPalindrome
flipChar = mirror.replace(/[\s"'.,^A-Z0-9]/ig, "");
lowerChar = mirror.toLowerCase();
testPalindrome = flipChar.split('').reverse().join(''); /* reverse and compare*/

/* Check if mirror(parameter) is a Palindrome*/
if(flipChar === testPalindrome){
    console.log("<div>"+ mirror + " IS a Palindrome <div>");
}else{
    console.log("<div>" + mirror + " IS NOT a Palindrome </div>");
}
}
getPalindrome("Go hang a salami");
getPalindrome("I'm a lasagna hog");
getPalindrome("rabbit");
