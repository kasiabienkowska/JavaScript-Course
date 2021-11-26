"use strict";

const Person = function (firstName, birthYear) {
	//Instance properties
	this.firstName = firstName;
	this.birthYear = birthYear;
	// Never use method inside constructor
	// this.calcAge = function () {
	// 	console.log(2037 - this.birthYear);
	// };
};

Person.hey = function () {
	console.log("Hey there!");
	console.log(this);
};

Person.hey();

//class expression
// const PersonCl = class{}

//class declaration
class PersonCl {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}
	//Instance methods
	//Methods will be added to prototype property
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	greet() {
		console.log(`Hey ${this.firstName}`);
	}

	get age() {
		return 2037 - this.birthYear;
	}

	//Set a property that already exists

	set fullName(name) {
		console.log(name);
		if (name.includes(" ")) this._fullName = name;
		else alert(`${name} is not a full name`);
	}

	get fullName() {
		return this._fullName;
	}

	//Static methods
	static hey() {
		console.log("Hey there!");
		console.log(this);
	}
}

PersonCl.hey();
