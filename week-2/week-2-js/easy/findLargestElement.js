/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let ans=numbers[0];
    for(let number of numbers){
        if(number>ans){
            ans=number;
        }
    }
    console.log(ans);
    return ans;
}
module.exports = findLargestElement;