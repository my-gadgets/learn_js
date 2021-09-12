function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw constructor')
  }
}

let circle = new Circle(1);

console.log("-- Iterate properties --")
for (let key in circle) {
  // Skip functinos
  if (typeof circle[key] !== 'function')
    console.log(key, circle[key])
}

const keys = Object.keys(circle);
console.log(keys)


// Private Properties & Methods
// use let instead of this. to make private
function Circle(radius) {
  // private
  let defaultLocation = { x: 0, y: 0};
  let computeOptimumLocation = function(factor) {
    // ...
  }

  // public
  this.radius = radius;
  this.getDefaultLocation = function() {
    return defaultLocation;
  }
  this.draw = function() {
    computeOptimumLocation(1);
    console.log('draw constructor')
  }

  // params: object, propertyname, key-value pairs
  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y)
        throw new Error("invalid location");
      defaultLocation = value;
    }
  })

}

let c2 = new Circle(1);
c2.draw();
c2.defaultLocation = {x:100, y:100}
console.log("defaultLocation: ", c2.defaultLocation);
