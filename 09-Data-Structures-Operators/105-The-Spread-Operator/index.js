const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	orderDelivery: function ({
		starterIndex = 1,
		mainIndex = 0,
		time = "20:00",
		address,
	}) {
		console.log(`Order received ${[this.starterMenu[starterIndex]]} and 
        ${this.mainMenu[mainIndex]} will be delivered to${address} at ${time}`);
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
	},
};

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//Copying array

const mainMenuCopy = [...restaurant.mainMenu];

//Joining 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables: arrays,strings,maps,sets - NOT objects

const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters);

console.log(...str);

// console.log(`${...str} Schmedtman`); //not gonna work - tylko dla funckji
// lub jezeli budujemy nową tablicę

//Real world example

// const ingredients = [
// 	prompt("Let's make pasta! Ingredient1?"),
// 	prompt("Let's make pasta! Ingredient2?"),
// 	prompt("Let's make pasta! Ingredient3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Giuseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
