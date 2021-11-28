"use strict";

class Account {
	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		//protected property
		this._pin = pin;
		this._movements = [];
		this.local = navigator.language;

		console.log(`Thanks for opening an account, ${owner}`);
	}
	//Public interface

	getMovements() {
		return this._movements;
	}

	deposit(value) {
		this._movements.push(value);
	}
	withdraw(value) {
		this.deposit(-value);
	}

	_approveLoan(value) {
		return true;
	}

	requestLoan(value) {
		if (this._approveLoan(value)) {
			this.deposit(value);
			console.log(`Loan approved`);
		}
	}
}

const account1 = new Account("Jonas", "euro", 1111);
console.log(account1);

// account1._movements.push(250);
// account1._movements.push(-140);

account1.deposit(250);
account1.withdraw(140);
account1.requestLoan(1000);
account1._approveLoan(1000);
console.log(account1.getMovements);

console.log(account1);

console.log(account1.pin);
