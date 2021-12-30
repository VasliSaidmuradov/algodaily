// Implement a Hash Map (Easy)
// Good afternoon, Vasli! Here's our prompt for today.

// Arrays are amazing for looking up elements at specific indices as all elements in memory are contiguous, allowing for O(1) or constant time lookups. But often we don't, or can't, perform lookups via indices. Hash maps and hash tables are a way around this, enabling us to lookup via keys instead.

// Can you implement the Map class from scratch? Only two methods are necessary-- get and set. Many programming languages have a built-in hash or dictionary primitive (like Javascript Objects and {} notation), but we don't want to use that for this exercise.


// Note: Regular Javascript objects and the Map class are both simple key-value hash tables/associative arrays, with a few key differences:

// A Map object can iterate through its elements in insertion order, whereas JavaScript's Objects don't guarantee order. In addition, Objects have default keys due to their prototype, and Maps don't come with default keys. Here's a good breakdown of the two. For the purpose of this exercise, let's assume the same functionality for both.

// For the two methods you'll define:

// get(key: string) should be given a key, and return the value for that key.
// set(key: string, val: string) should take a key and a value as parameters, and store the pair.
// Additionally, we've supplied the below hashing function hashStr. It tries to avoid collision, but is not perfect. It takes in a string value and returns an integer.

// JAVASCRIPT
// function hashStr(str) {
// 	let finalHash = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		const charCode = str.charCodeAt(i);
// 		finalHash += charCode;
// 	}
// 	return finalHash;
// }

// console.log(hashStr('testKey'))
// Let's call our new class the Hashmap class, and use it like such:

// JAVASCRIPT
// const m = new Hashmap();
// m.set('name', 'Jake');
// console.log(m.get('name'));
// Constraints
// Sum of lengths of the string <= 10000
// The string will consist of ASCII characters
// Expected time complexity for inserting a key,value pair and retrieving a value : O(1)
// Expected space complexity : O(n)

// Solution:

class Hashmap {
  constructor() {
    this._storage = []
  }

  hashStr(str) {
    let finalHash = 0;
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      finalHash += charCode;
    }

    return finalHash;
  }

  set(key, val) {
    let idx = this.hashStr(key)

    if (!this._storage[idx]) {
      this._storage[idx] = [];
    }

    this._storage[idx].push([key, val]);
  }

  get(key) {
    let idx = this.hashStr(key);

    if (!this._storage[idx]) {
      return undefined;
    }

    for (let keyVal of this._storage[idx]) {
      if (keyVal[0] === key) {
        return keyVal[1];
      }
    }
  }
}