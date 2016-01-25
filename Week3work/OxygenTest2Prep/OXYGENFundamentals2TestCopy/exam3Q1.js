/* Write a function that returns a list or string of the unique characters inside a string./ 
A unique character is defined as a character that only occurs once within a string*/



function checkStory(story){
var myWord = "A";
var found = [];
for(var i = 0; i < story.length; i++){
    if(story[i] === "A"){
        for(var j = i; j < (myWord.length + i); j ++){
            found.push(story[j]);
        }    
    }
}
if(found.length === 0){
    console.log("None found");
} else{
    console.log(found);
    }
}
checkStory("Once Upon A Time");
/* I am searching for the character "A" It will be on the console!*/