"use strict";

//Constructor function

const Person = function (firstName, birthYear) {
	//Instance properties
	this.firstName = firstName;
	this.birthYear = birthYear;
	// Never use method inside constructor
	// this.calcAge = function () {
	// 	console.log(2037 - this.birthYear);
	// };
};

const jonas = new Person("Jonas", 1991);

console.log(jonas);

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype - new is creating proto property (__proto__)
//4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1988);

console.log(matilda, jack);

const jay = "Jay";

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

//Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
	console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";

console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));
