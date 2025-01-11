function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
};

function Employee(name, age, jobTitle) {
  // Call Person's constructor to initialize name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Set Employee's prototype to be an object created from Person's prototype
Employee.prototype = Object.create(Person.prototype);
// Ensure the constructor property points back to Employee
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`
  );
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

