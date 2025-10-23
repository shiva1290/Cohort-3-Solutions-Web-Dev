/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let i=0;
  let j=str.length-1;
  while(i<=j){
    while(i<str.length && !(str[i].toLowerCase()>='a' && str[i].toLowerCase()<='z')){
      i++;
    }
    while(j>=0 && !(str[j].toLowerCase()>='a' && str[j].toLowerCase()<='z')){
      j--;
    }
    if(i>j) break;
    let first=str[i].toLowerCase();
    let second=str[j].toLowerCase();
    if(first!=second){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
