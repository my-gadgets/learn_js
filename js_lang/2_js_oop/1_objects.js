// 1. Object Literals
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw');
  }
};


// 2. Factory Function: explicit return
function createCircle(radius) {
  return {
    radius,         // if key and value is same
    draw: function() {
      console.log('draw factory');
    },
  }
}

const circle2 = createCircle(1);
circle2.draw();

// 3. Constructor Function: this + new
function Circle(radius) {
  // this is a reference to the object
  // that is executing this piece of code
  this.radius = radius;
  this.draw = function() {
    console.log('draw constructor')
  }
}

// 1. new will create an emptye object {}
// 2. and set this to that object
// 3. return that object from Contructor Function (notice no return statement)
const circle3 = new Circle(1);
circle3.draw()

// anothor way to use Constructor Function
let circle4 = {}
Circle.call(circle4, 1);  // this will be circle4
circle4.draw();
// .apply is like call, except args are passed as an array


// every object has a property called contructor
// and that references the function that was used to create that object
circle.constructor;    // built-in contructor function
circle2.constructor;   // built-in contructor function
circle3.constructor;   // custom contructor function

// first two circle is created in using build-in constructor
// let x = {}
// will translate to
// let x = new Object();

// other built-in contructor
// - new String();
// - new Boolean();
// - new Number();
// - new Function();    functions itself are objects

// use new to create Constructor Function
const Circle2 = new Function('radius', `
this.radius = radius;
this.draw = function() {
  console.log('draw constructor in Function')
}
`);

let circle5 = new Circle2(1);
circle5.draw();
