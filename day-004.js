// Is An Anagram (Easy)
// Good afternoon, Vasli! Here's our prompt for today.

// Here's the definition of an anagram: a word, phrase, or name formed by rearranging the letters of another: such as cinema, formed from iceman.

// We are given two strings like "cinema" and "iceman" as inputs. Can you write a method isAnagram(str1, str2) that will return true or false depending on whether the strings are anagrams of each other?

// Constraints
// Length of both the strings <= 100000
// The strings will contain only alphanumeric characters (a-z , A-Z, 0-9)
// The strings can be empty
// Expected time complexity : O(nlogn)
// Expected space complexity : O(n)


// Solutions:

// #1
function isAnagram(str1, str2) {
  return [...str1.toLowerCase()].sort().join('') === [...str2.toLowerCase()].sort().join('');
}


// #2

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (const char of str1.toLowerCase()) {
    obj1[char] = (obj1[char] || 0) + 1;
  }

  for (const char of str2.toLowerCase()) {
    obj2[char] = (obj2[char] || 0) + 1;
  }

  for (const prop in obj1) {
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
}

// #3
function isAnagram(str1, str2) {
  let a = str1.toLowerCase();
  let b = str2.toLowerCase();

  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}