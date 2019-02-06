const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

// Push - adds to end - O(1)
strings.push('e');

// Pop - removes from end - O(1)
strings.pop();

// Unshift - adds to beginning - O(n)
strings.unshift('x');

// Splice - adds to the middle - O(n/2) = O(n)
strings.splice(2, 0, 'middle');

console.log(strings);