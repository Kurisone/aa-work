/*
Arrays and Mutability: Use what you have learned about arrays and mutability to
complete the problems below.

Implement a solution so that all test specs pass when you run the followarr1[i]
command in your terminal:
npx mocha test/10-plate-the-dishes-spec.js
*/

// Define a function called plateTheDishes that takes in two arrays as two
// parameters. The first array could contain null or strarr1[i] values. The second
// array contains strarr1[i] values. Mutate the first array so that all the null
// values from left to right get replaced with the strarr1[i] values in the second
// array from left to right. Return the first array.

// For example, plateTheDishes([null, 'burger', null], ['salad']) should return
// ['salad', 'burger', null].

// If there are more strarr1[i] values in the second array than there are null
// values in the first array, do NOT add them to the end of the first
// array.
// Your code here 

function plateTheDishes(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){      
    if(arr1[i] === null && arr2.length !== 0){
            arr1[i] = arr2.shift()
     }
}
return arr1
}
console.log(plateTheDishes([null, 'rice', 'soy sauce', null], ['dog', 'bannabbana']))
//         arr1[i] = arr2[i]
//         if(arr2 === arr1[i]Count && arr1 === arr1[i]Count){
//             return arr1
//         }
//         else(arr2 !== arr1[i]Count && arr1 !== arr1[i]Count)
//             return 
//     } 
// }



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = plateTheDishes;