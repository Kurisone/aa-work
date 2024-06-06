/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npx mocha test/01-avg-value-spec.js
*/

// Define a function called avgValue that takes in an array of numbers. Return
// the average number value of all the numbers in the array.
// Your code here 

function avgValue(arr){
    let sum = 0;
    if(arr.length === 0) {
        return 0;
    }
    for(let i = 0; i < arr.length; i++){
        let ele = arr[i];
        sum += ele
    }
    return sum / arr.length
}


console.log(avgValue([1, 4, 10, 21]))
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = avgValue;