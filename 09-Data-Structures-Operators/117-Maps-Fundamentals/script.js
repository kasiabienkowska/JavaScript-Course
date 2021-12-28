"use strict";

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
