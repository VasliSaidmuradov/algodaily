// Single Lonely Number (Easy)
// Good evening, Vasli! Here's our prompt for today.

// In a given array of numbers, one element will show up once and the others will each show up twice. Can you find the number that only appears once in O(n) linear time? Bonus points if you can do it in O(1) space as well.


// JAVASCRIPT
// lonelyNumber([4, 4, 6, 1, 3, 1, 3])
// // 6

// lonelyNumber([3, 3, 9])
// // 9
// Constraints
// Length of the array <= 100000
// The values of the array will be between -1000000000 and 1000000000


// Solutions:

// #1
function lonelyNumber(nums) {
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) return nums[i]
    i++
  }
}

// #2
function singleNumber(nums) {
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] ^ nums[i + 1]) return nums[i]
    i++
  }
}

// #3
const singleNumber = function(nums) {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0)+ 1
  }

  for (const prop in obj) {
    if (obj[prop] === 1) return prop
  }
}

// #4
singleNumber = function(nums) {
  let num = nums[0]

  for (let i = 1; i < nums.length; i++) {
    num ^= nums[i]
  }

  return num
}