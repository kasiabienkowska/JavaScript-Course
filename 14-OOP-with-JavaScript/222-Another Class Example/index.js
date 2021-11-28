"use strict";

class Account {
	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this.pin = pin;
		this.movements = [];
		this.local = navigator.language;

		console.log(`Thanks for opening an account, ${owner}`);
	}
	//Public interface
	deposit(value) {
		this.movements.push(value);
	}
	withdraw(value) {
		this.deposit(-value);
	}

	approveLoan(valuue) {
		return true;
	}

	requestLoan(value) {
		if (this.approveLoan(value)) {
			this.deposit(value);
			console.log(`Loan approved`);
		}
	}
}

const account1 = new Account("Jonas", "euro", 1111);
console.log(account1);

// account1.movements.push(250);
// account1.movements.push(-140);

account1.deposit(250);
account1.withdraw(140);
account1.requestLoan(1000);
account1.approveLoan(1000);
console.log(account1);

console.log(account1.pin);
