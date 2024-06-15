/*
Define a function firstAndLast that takes in an array and |returns the
sum of the first and last element| if there is an even number of elements in the
array.| If there is an odd number of elements in the array, then the function
should return subtract between the first and last elements of the array.
*/

// Your code here 
function firstAndLast(arr){
    if (arr.length % 2 === 0){
        return arr[0] + arr[arr.length - 1]
    } else{
        return arr[0] - arr[arr.length - 1]
    }
}

// console.log(firstAndLast([1, 2, 3, 4]));    // 5
// console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
// console.log(firstAndLast([12, 5]));         // 17
// console.log(firstAndLast([12]));            // 0
// console.log(firstAndLast([7, 11, 3]));      // 4

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstAndLast;