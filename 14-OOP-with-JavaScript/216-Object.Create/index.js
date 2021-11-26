"use strict";

const PersonProto = {
	calcAge() {
		console.log(2037 - this.birthYear);
	},

	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	},
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);
console.log(PersonProto);
console.log(steven.__proto__ === PersonProto);

const sara = Object.create(PersonProto);

sara.init("Sarah", 1979);
sara.calcAge();

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current 
speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current 
speed in mi/h (but converts it to km/h before storing the 
value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and 
brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/

//1.
class Car {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}
	accelerate() {
		console.log((this.speed += 10));
	}

	//3.
	brake() {
		console.log((this.speed -= 5));
	}

	get speedUS() {
		return this.speed / 1.6;
	}
	set speedUS(speed) {
		this.speed = speed * 1.6;
	}
}

const ford = new Car("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
