"use strict";
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	[weekdays[5]]: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

const rest = new Map();

rest.set("name", "Classico Italiano");
rest.set(1, "Firenze,Italy");
rest.set(2, "Lisbon,Portugal");

rest
	.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
	.set("open", 11)
	.set("closed", 23)
	.set(true, "We are open")
	.set(false, "we are closed");

console.log(rest);

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("closed")));

console.log(rest.has("categories"));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
// console.log(rest.clear);

const question = new Map([
	["question", "What is the best programming language in the world?"],
	[1, "C"],
	[2, "Java"],
	[3, "Javascript"],
	["correct", 3],
	[true, "Correct!!!"],
	[false, "Try again ;("],
]);

console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get("question"));
for (const [key, value] of question) {
	if (typeof key === "number") console.log(`Answer ${key}:${value}`);
}

const answer = Number(prompt("Your answer"));

console.log(answer);

console.log(question.get(question.get("correct") === answer));

//Convert map back to an array

console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
