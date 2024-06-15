/*
Define a function lastIndex that takes in an array and a character. The
function should return the last index where the character can be found in the
array.  If no character exists in the array, return -1.
*/

// Your code here 
function lastIndex(arr, char){
    for(let i = 0; i < arr.length; i++){
        if(char !== arr[i]){
        return -1
        }
        else{
             for(let i = arr.length; i <= arr.length; i--){
              if(char === arr[i]){
              return i //arr[i] == [3] == arr[3] == a
}
}
}
}
}
console.log(lastIndex(["a", "b", "c", "a"], "e")); // ==> 3
//=> 3
// console.log(lastIndex(["m", "i", "s", "s", "i", "s", "s", "i", "p", "i"], "i"));
//=> 9
// console.log(lastIndex(["o", "c", "t", "a", "g", "o", "n"], "o"));
//=> 5
// console.log(lastIndex(["p", "r", "o", "g", "r", "a", "m", "m", "i", "n", "g"], "m"));
//=> 7
// console.log(lastIndex(["a", "b", "c", "a"], "z"));
//=> -1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = lastIndex;