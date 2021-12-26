// Reverse Only Alphabetical (Easy)
// Good morning, Vasli! Here's our prompt for today.


// You are given a string that contains alphabetical characters (a - z, A - Z) and some other characters ($, !, etc.). For example, one input may be:

// 'sea!$hells3'

// Can you reverse only the alphabetical ones?

// JAVASCRIPT
// reverseOnlyAlphabetical('sea!$hells3');
// // 'sll!$ehaes3'

// Constraints
// Length of the given string <= 100000
// The string comprises of ASCII characters
// Expected time complexity : O(n)
// Expected space complexity : O(n)


// Solutions:

// #1
function reverseOnlyAlphabetical(str) {
  const re = /[a-zA-Z]/;
  let arr = [...str];
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (re.test(arr[i]) && re.test(arr[j])) {
      swap(i, j, arr);
      i++;
      j--;
    }

    else if (!re.test(arr[i])) {
      i++;
    }

    else if (!re.test(arr[j])) {
      j--;
    }
  }

  return arr.join('');
}

const swap = (i, j, arr) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];

  return arr;
};


// #2
function isAlpha(c) {
  return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
}

function swap(arr, a, b) {
  let t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}

function reverseOnlyAlphabetical(str) {
  const result = str.split("");
  let left = 0;
  let right = result.length - 1;

  while (left < right) {
    if (!isAlpha(result[left].charCodeAt())) {
      left++;
    } else if (!isAlpha(result[right].charCodeAt())) {
      right--;
    } else {
      swap(result, left++, right--);
    }
  }

  return result.join("");
}


// #3
function reverseOnlyAlphabetical(str) {
  const alphaChars = [];
  str = str.split(""); // strings are immutable in JS

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      alphaChars.push(char);
    }
  }

  const reversedAlpha = reverseArray(alphaChars);

  let idxRA = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      str[i] = reversedAlpha[idxRA++];
    }
  }

  return str.join("");
}

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}
