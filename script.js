function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  // Matches: "Hello, my name is Alice and I am 25 years old."
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  // Inherit properties from Person
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit Person's prototype
Employee.prototype = Object.create(Person.prototype);
// Correct the constructor reference
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  // Matches: "Hello, my name is Bob, I am 30 years old, and my job title is Manager."
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

