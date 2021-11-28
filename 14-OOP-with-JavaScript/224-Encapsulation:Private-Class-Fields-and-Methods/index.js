"use strict";

//1)Public fields(instances)
//2)Private fields
//3)Public methods
//4)Private methods
//(there is also the static version)

class Account {
	//This is how we define public fields
	//1)Public fields
	locale = navigator.language;

	//2)Private fields(instances)
	#movements = [];
	#pin;

	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		//protected property
		this.#pin = pin;
		// this._movements = [];
		// this.local = navigator.language;

		console.log(`Thanks for opening an account, ${owner}`);
	}

	//3)Public methods

	//Public interface

	getMovements() {
		return this.#movements;
	}

	deposit(value) {
		this.#movements.push(value);
	}
	withdraw(value) {
		this.deposit(-value);
	}

	requestLoan(value) {
		if (this._approveLoan(value)) {
			this.deposit(value);
			console.log(`Loan approved`);
		}
	}

	static helper() {
		console.log("Helper");
	}

	//4)Private methods (this is not supported by any browser)
	// #approveLoan(value) {
	_approveLoan(value) {
		return true;
	}
}

const account1 = new Account("Jonas", "euro", 1111);
console.log(account1);

// account1._movements.push(250);
// account1._movements.push(-140);

account1.deposit(250);
account1.withdraw(140);
account1.requestLoan(1000);
// account1.#approveLoan(1000);
console.log(account1.getMovements);

console.log(account1);

// console.log(account1.pin);

// console.log(account1.#movements);
// console.log(account1.#pin);

// console.log(account1._approveLoan(100));

Account.helper();
