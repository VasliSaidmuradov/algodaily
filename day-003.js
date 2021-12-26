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
