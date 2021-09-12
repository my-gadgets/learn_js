// string cannot be modified by []
// but array can
var myArr = [1,2,3];
myArr[0] = 10;
console.log(myArr);

// push & pop: at end
myArr.push(100);
console.log("push 100: ", myArr);
myArr.pop();
console.log("pop: ", myArr);

// shift & unshift: end beginning
myArr.shift();
console.log("shift: ", myArr);
myArr.unshift(123);
console.log("unshift 123: ", myArr);
