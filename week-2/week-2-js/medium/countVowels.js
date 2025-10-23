/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(ch){
  let c=ch.toLowerCase();
  if(c=="a" || c=="e" || c=="i" || c=="o" || c=="u"){
    return true;
  }
  return false;
}
function countVowels(str) {
  let count=0;
   for(let char of str){
    if(isVowel(char)){
      count++;
    }
   }
   console.log(count);
   return count
}

module.exports = countVowels;