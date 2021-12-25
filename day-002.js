// Fizz Buzz (Easy)
// Good evening, Vasli! Here's our prompt for today.

// Fizz Buzz is a classic interview question that apparently many engineering candidates can't solve! Let's cover it today.

// We're given a number in the form of an integer n.

// Write a function that returns the string representation of all numbers from 1 to n based on the following rules:

// If it's a multiple of 3, represent it as "fizz".

// If it's a multiple of 5, represent it as "buzz".

// If it's a multiple of both 3 and 5, represent it as "fizzbuzz".

// If it's neither, just return the number itself.


// As such, fizzBuzz(15) would result in '12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz'.

// Constraints
// Maximum value of Integer n <= 1000
// n will always be a non zero integer (possibly 0)
// Expected time complexity : O(n)
// Expected space complexity : O(1)
// AlgoDaily partner CodeTips.co.uk has kindly provided a guide on solving Fizz Buzz in Go and Javascript. Check it out for even deeper coverage of this problem.


// Solutions: 

// #1
function fizzBuzz(n) {
  let str = ''

  for (let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) str += 'fizzbuzz'
    else if(i % 3 === 0) str += 'fizz'
    else if(i % 5 === 0) str += 'buzz'
    else str += i
  }
  
  return str;
}