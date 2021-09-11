// find length of string
var myName = 'siria';
console.log(myName.length);

// find last char of string
console.log(myName[myName.length-1])

// immutability of strings
myName[0] = 'l';
console.log(myName[0])  // not changed
console.log(myName)
