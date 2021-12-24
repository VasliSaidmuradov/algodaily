// Reverse a String (Easy)
// Good evening, Vasli! Here's our prompt for today.

// Hey there, welcome to the challenges portion of the AlgoDaily technical interview course! Over the next few days, you'll get some hands-on experience with the essential data structures and algorithms that will help you nail your interview, and land your dream software engineering job.

// The only way to get better at solving these problems is to power through a few.

// We covered the best ways to prepare in this lesson, in this one, and here. Be sure to visit those if you need some more guidance. Otherwise, let's jump into it.

// Reverse a String
// Let's reverse a string!


// We'll usually start with a simple prompt, as you would in a regular technical interview. Like most, this one will be intentionally open-ended.

// Prompt
// Can you write a function that reverses an inputted string without using the built-in Array#reverse method?

// Let's look at some examples. So, calling:

// reverseString("jake") should return "ekaj".

// reverseString("reverseastring") should return "gnirtsaesrever".


// Constraints
// Do not use the built-in #reverse() method or [::-1] if Python
// Ideal solution would run in O(n) time complexity and O(1) space complexity




// Solutions:


// #1
function reverseString(str) {
  let reversedStr = '';

  for (let i = str.length - 1; i>= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}


// #2
function reverseString(str) {
  let arr = [...str];
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    swap(arr, i, j);

    i++;
    j--;
  }

  return arr.join('');
}

const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];

  return arr;
}