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

console.log(jonas.__proto__);
//Object.prototype(top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 3]; //new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
	return [...new Set(this)];
};

console.log(arr.unique());
console.dir((x) => x + 1);

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car 
has a make and a speed property. The speed property is 
the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase 
the car's speed by 10, and log the new speed to the 
console;
3. Implement a 'brake' method that will decrease the 
car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 
'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀

*/

//1.

const Car = function (speed, make) {
	this.speed = speed;
	this.make = make;
};

//2.

Car.prototype.accelerate = function () {
	console.log((this.speed += 10));
};

//3.
Car.prototype.brake = function () {
	console.log((this.speed -= 5));
};

//4.

const car1 = new Car(120, "BMW");
const car2 = new Car(95, "Mercedes");

console.log(car1, car2);

car1.accelerate();
car1.accelerate();
car2.accelerate();

car1.brake();
car2.brake();
