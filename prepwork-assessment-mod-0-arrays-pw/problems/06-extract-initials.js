/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npx mocha test/06-extract-initials-spec.js
*/

// Define a function called extractInitials that takes in a string. Return a new
// string consisting of the first letter of every word in the argument string,
// uppercased.
// Eg: If the input string is 'john smith', then the function should return a
// string of 'JS'.
// Your code here 
function extractInitials(str){
    let result = "" 
    str = str.toUpperCase()
    let arr = str.split(" ")
    for(let i = 0; i < arr.length; i++){
    
    let ele = arr[i]
    result += ele[0]
}
return result
}

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = extractInitials;