/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npx mocha test/04-reverse-word-spec.js
*/

// RESEARCH: Use MDN to look up how the following methods work, then use them
// when doing the problem below:
// - String.prototype.split
// - Array.prototype.reverse
// - Array.prototype.join

// Define a function called reverseWord that takes in a word string. Reverse
// the characters in the word and return it as a string. Use the methods
// researched from MDN above.
// Your code here 

// OPTIONAL CHALLENGE: Define a function called reverseWordChallenge that takes
// in a word string. Reverse the characters in the word and return it as a
// string WITHOUT using the methods researched from MDN above.
// Your code here 
function reverseWord(str){
    str = str.split("");
    let backwards = str.reverse()
    let join = backwards.join("")
    return join
}

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseWord;