var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "the drink": "water",
  16: "Montana"
};

// Two ways to access object properties
var a = testObj.hat;
var b = testObj["the drink"];
var c = testObj[16];

console.log(a);
console.log(b);
console.log(c);

// Add new property to an object use dot/bracket notation

testObj.user = "siria";
testObj["age"] = 18;
console.log(testObj);

// Delete a property from an object
delete testObj.hat;
console.log(testObj);

// Test object property
console.log('testObj.hasOwnProperty("user")', testObj.hasOwnProperty("user"));
