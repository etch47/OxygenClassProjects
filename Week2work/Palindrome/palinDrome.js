

function getPalindrome(mirror){

/*make lowercase, ignore whitespace and some punctuation*/
var flipChar = mirror.replace(/[\s"'.,^A-Z0-9]/ig, "").toLowerCase();

/* reverse and compare*/
var testPalindrome = flipChar.split('').reverse().join('');

/* Check if mirror(parameter) is a Palindrome*/
if(flipChar === testPalindrome){
  
  document.write("<div>"+ mirror + " is a Palindrome <div>");
}else{
  
  document.write("<div>" + mirror + " is not a Palindrome </div>");
}
}
getPalindrome("Go hang a salami");
getPalindrome("I'm a lasagna hog");
getPalindrome("Rabbits");
