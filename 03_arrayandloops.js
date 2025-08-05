//array
let fruits = ["Apple", "Banana", "Cherry"];

// For loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// For...of loop
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// forEach loop
fruits.forEach(function (fruit, index) {
  console.log(index, fruit);
});

// functions
// function declaration

function greet(name) {
  return "Hello, " + name;
}

console.log(greet("bhumi"));

//function expression 
const add = function (a, b) {
  return a + b;
};

console.log("Sum:", add(5, 3));

//arrow function
const square = (num) => {
  return num * num;
};

console.log("Square:", square(4));

// arrow function
const cube = num => num * num * num;
console.log("Cube:", cube(3));


