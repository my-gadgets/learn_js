// OLD JS
var user = {
  name: "siria",
  age: 18,
  sayName: function() {
    console.log("My name is " + this.name);
    var sayFullName = function() {
      // this in sayFullName is not user
      console.log("My name is " + this.name + " and age is " + this.name);
      console.log(this)
    }
    sayFullName();
  }
}
user.sayName();

// ES6
console.log("=== ES6 ===")

let user2 = {
  name: "siria",
  age: 18,
  sayName: function() {
    console.log(`My name is ${this.name}`)
    const sayFullName = () => {
      // arrow function can know what this means
      console.log(`My name is ${this.name} and age is ${this.age}`)
      console.log(this)
    }
    sayFullName();
  }
}
user2.sayName();

