"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];

//slice

//begin parameter
// console.log(arr.slice(2));

//begin and end parameter

// console.log(arr.slice(2, 4));

//negative begin parameter (last (two) parameters)

// console.log(arr.slice(-2));
// console.log(arr.slice(-1));

// console.log(arr.slice(1, -1));

//we can use slice to create hallow copy of the array

// console.log(arr.slice());

//SPLICE

// console.log(arr.splice(2));

// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);

// console.log(arr);

//REVERSE

// const arr2 = ["j", "i", "h", "g", "f"];

// arr2.reverse();

// console.log(arr2);

//CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);

// console.log([...arr, ...arr2]);

//JOIN
// console.log(letters.join("-"));

//AT METHOD
// const arr1 = [23, 11, 64];
// console.log(arr1[0]);
// console.log(arr1.at(0));

//getting last arry element - 3 methods
// console.log(arr1[arr1.length - 1]);
// console.log(arr1.slice(-1)[0]);
// console.log(arr1.at(-1));

//at method works also on string

// console.log("jonas".at(0));

// for (const movement of movements) {
// 	if (movement > 0) {
// 		console.log("You deposited ${movement}");
// 	} else console.log("You withdrew ${Math.abs(movement)");
// }

// console.log("-------forEach--------");
// movements.forEach(function (movement) {
// 	if (movement > 0) {
// 		console.log("You deposited ${movement}");
// 	} else console.log("You withdrew ${Math.abs(movement)");
// });

//counter variable

//forOf

// for (const [i, movement] of movements.entries()) {
// 	if (movement > 0) {
// 		console.log(`Movement ${i + 1}: You deposited ${movement}`);
// 	} else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// }

// console.log("----forEach-------");
// //forEach
// movements.forEach(function (mov, i, arr) {
// 	if (mov > 0) {
// 		console.log(`Movement ${i + 1}: You deposited ${mov}`);
// 	} else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
// });

//Map
const currencies = new Map([
	["USD", "United States dollar"],
	["EUR", "Euro"],
	["GBP", "Pound sterling"],
]);

console.log(currencies);

currencies.forEach(function (value, key, map) {
	console.log(`${key}: ${value}`);
});

//set

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
	console.log(`${key}: ${value}`);
});
