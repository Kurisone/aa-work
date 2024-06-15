/*
Define a function called minVal that takes in an array of numbers as a
parameter. The function should return the smallest number of the array. If the
array is empty, the function should return null.
*/

// Your code here 
function minVal(arr){
    if(arr.length === 0){
        return null;
    } else {
        let smallest = arr[0]
        for(i = 1; i < arr.length; i++){
            if(arr[i] < smallest){
                smallest = arr[i]
            }
        }return smallest
    }
}

// function minVal(arr){
//     if(arr.length === 0){
//         return null;
//     }else{
//         arr.sort()
//     }return arr[0]
// }
console.log(minVal([4, 6, 3, 5, 2, 12])); // 2
// console.log(minVal([-2, -3, -7, 3 ]));   // -7
// console.log(minVal([])); //null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = minVal;