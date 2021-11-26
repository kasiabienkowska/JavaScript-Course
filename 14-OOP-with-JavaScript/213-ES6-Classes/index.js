"use strict";
//class expression
// const PersonCl = class{}

//class declaration
class PersonCl {
	constructor(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}
	//Methods will be added to prototype property
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	greet() {
		console.log(`Hey ${this.firstName}`);
	}
}

const jessica = new PersonCl("Jessica", 1996);

console.log(jessica);

jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
// 	console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

//1. Classes are not hoisted
//2. Classes are first-class citizens just like functions
//3. Classes are executed in strict mode
