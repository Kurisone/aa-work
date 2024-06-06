/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npx mocha test/02-exclusive-range-spec.js
*/

// Define a function called exclusiveRange that takes in a minimum number and a
// maximum number as two parameters. Return an array containing all the numbers
// between the minimum and maximum numbers, not including the minimum and
// maximum numbers.
// Eg: If the minimum number is 2 and the maximum number is 5, then the function
// should return an array of [3, 4].
// Your code here 
function exclusiveRange (min, max) {
    let result = [];
    let i = min + 1
    while(i <= max - 1) {
        result.push(i)
        i++
    }
    return result
    }
console.log(exclusiveRange(5, 10))

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = exclusiveRange;