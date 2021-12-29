// Power of Three (Easy)
// Good afternoon, Vasli! Here's our prompt for today.

// Given an integer num, write a method to determine if it is a power of 3.


// The method will be called as follows:

// JAVASCRIPT
// console.log(powerOfThree(9));
// // true

// console.log(powerOfThree(7));
// // false
// Constraints
// The given would be a non zero positive integer in the range between 1 and 2147483647
// Expected time complexity : O(logn)
// Expected space complexity : O(1)


// Solutions:

// #1
function powerOfThree(num) {
  if (num === 3 || num === 1) return true
  if (num < 1) return false

  return powerOfThree(num / 3)
}

// #2
function powerOfThree(num) {
  if (num <= 0) return false

  while (num % 3 === 0) {
    num = num / 3
  }

  return num === 1
}