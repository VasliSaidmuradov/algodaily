// Majority Element (Easy)

// Good evening, Vasli! Here's our prompt for today.

// Suppose we're given an array of numbers like the following:

// [4, 2, 4]

// Could you find the majority element? A majority is defined as "the greater part, or more than half, of the total. It is a subset of a set consisting of more than half of the set's elements."

// Let's assume that the array length is always at least one, and that there's always a majority element.

// In the example above, the majority element would be 4.


// Constraints
// Length of the array <= 100000
// The array will always contain integer values between -1000000000 and 1000000000
// Expected time complexity : O(n)
// Expected space complexity : O(n)


/**
 * @param {number[]} nums
 * @return {number}
 */

// Solutions:

// #1
function majorityElement(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let [prop, val] of map){
    if (map.get(prop) > nums.length / 2) return prop;
  }
}

// #2
function majorityElement(nums) {
  const map = new Map()
  const len = Math.floor(nums.length / 2)

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }

    if (map.get(nums[i]) > len) return nums[i]
  }
}

// #3
function majorityElement(nums) {
  const sortedNums = nums.sort((a, b) => a - b)

  return sortedNums[Math.floor(sortedNums.length / 2)]
}
