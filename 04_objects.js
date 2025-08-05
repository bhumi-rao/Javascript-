let student = {
  name: "Kruthika",
  age: 21,
  isEnrolled: true
};

// Accessing Object Properties
console.log(student.name);      // Dot notation
console.log(student["age"]);    // Bracket notation

// Adding / Updating / Deleting Properties
student.grade = "A";         // Add new property
student.age = 22;            // Update property
delete student.isEnrolled;  // Remove property

// Object with Methods
let user = {
  name: "Kruthika",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

user.greet(); // Output: Hello, Kruthika


