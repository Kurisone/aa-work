/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npx mocha test/03-pit-pat-spec.js
*/

// Define a function called pitPat that takes in a minimum number and a maximum
// number as two parameters. Return an array containing all the numbers between
// the minimum and maximum numbers (inclusive) that are divisible by 4 or 6, but
// not by both.
// Your code here 

function pitPat(min, max){
    let result = [];
    let i = min
    while(i <= max) {
        if(i % 4 === 0 && i % 6 === 0) {
            console.log(i)
        }else if(i % 4 === 0 || i % 6 === 0){
            result.push(i)
        }
        i++
        }
        return result
}

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pitPat;