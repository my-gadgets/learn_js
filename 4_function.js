// Scope refers to the visibility of variables

// Variables which are defined outside of a function block have global scope
var myGlobal = 10;

function func1() {
  // no var, the scope is global
  oopsGlobal1 = 5;

  // add var will scope variable to this function
  var oopsGlobal2 = 5;
}

function func2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal1 != "undefined") {
    output += ", oopsGlobal1: " + oopsGlobal1;
  }
  if (typeof oopsGlobal2 != "undefined") {
    output += ", oopsGlobal2: " + oopsGlobal2;
  }
  console.log(output);
}

func1();
func2();

console.log(typeof aa)   // this works
console.log(aa)          // this craps
