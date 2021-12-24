// Array Intersection (Easy)
// Good evening, Vasli! Here's our prompt for today.

// As we ease our way into the course, we'll want to start with the basic data structures and their operations. However, don't be fooled how fundamental these things are!

// Interviewers will often test you on things that are deceptively easy. We saw this in Reverse a String, and will see more in future challenges. But sometimes you might get tested on a concept that, while a bit trivial, is really useful in day to day software engineering.

// One of those things is array manipulation, or basically doing things to an array that creates some kind of transformation.

// Prompt
// Can you write a function that takes two arrays as inputs and returns to us their intersection? We can call the method intersection. Let's return the intersection of the two inputs in the form of an array. As a reminder, the definition of an intersection of two sets A and B is the set containing all elements of A that also belong to B (or equivalently, all elements of B that also belong to A).


// Note that all elements in the final result should be unique. Here's one example:

// JAVASCRIPT
// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

// intersection(nums1, nums2);
// // [2]
// And here's another one:

// JAVASCRIPT
// const nums1 = [4,9,5];
// const nums2 = [9,4,9,8,4];

// intersection(nums1, nums2);
// // [9, 4]
// Constraints
// Length of the array <= 100000
// The values in the array will be in the range -1000000000 and 1000000000
// Expected time complexity: O(n+m) where n and m are the lengths of the array.
// Expected space complexity: O(max(n,m)).


// Solutions:

// #1
function intersection(nums1, nums2) {
  const arr = [];
  const obj1 = {};
  const obj2 = {};
  
  for (const key of nums1) {
    obj1[key] = 1; 
  }
  
  for (const key of nums2) {
    obj2[key] = 1; 
  }

  for (const prop in obj1) {
    if (obj1[prop] === obj2[prop]) {
      arr.push(+prop);
    }
  }

  return arr;
}

// #2
function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

	const intersection = new Set([...set1].filter(x => set2.has(x)));
  
  return [...intersection];
}