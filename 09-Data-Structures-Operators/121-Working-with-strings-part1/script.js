"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
	//B and E are middle seats
	const s = seat.slice(-1);
	if (s === "B" || s === "E") console.log("You got the middle seat :)");
	else console.log("You got lucky yeah");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

//How it works behind the scenes

console.log(new String("jonas"));
console.log(typeof new String("jonas")); // object

console.log(typeof String("jonas").slice(1)); //string
