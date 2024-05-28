// Destructuring arrays
// Accessing array items using a loop
const numbers = [1, 2, 3];
const countries = ["Finland", "Sweden", "Norway"];

for (const number of numbers) {
  console.log(number);
}

for (const country of countries) {
  console.log(country);
}

// Accessing array items manually
const numbers1 = [1, 2, 3];
let num1 = numbers1[0];
let num2 = numbers1[1];
let num3 = numbers1[2];

console.log(num1, num2, num3);

const countries1 = ["Finland", "Sweden", "Norway"];
let fin = countries1[0];
let swe = countries1[1];
let nor = countries1[2];

console.log(fin, swe, nor);

// Accessing array items using destructuring
const numbers2 = [1, 2, 3];
const [num11, num12, num13] = numbers;
console.log(num11, num12, num13);

const constants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravity, bodyTemp, boilingTemp] = constants;
console.log(e, pi, gravity, bodyTemp, boilingTemp);

const countries2 = ["Finland", "Sweden", "Norway"];
const [fin1, swe1, nor1] = countries2;
console.log(fin, swe, nor);

const [fin2, swe2, nor2, den2] = countries2;
console.log(den2);

const countries3 = ["Finland", "Sweden", undefined, "Norway"];
const [fin3, swe3, ice3 = "Iceland", nor3, den3 = "Denmark"] = countries3;
console.log(fin3, swe3, ice3, nor3, den3);

// Destructuring Nested arrays
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

const [frontEnd, backEnd] = fullStack;
console.log(frontEnd, backEnd);

const fruitsAndVegetables = [
  ["banana", "orange", "mango", "lemon"],
  ["Tomato", "Potato", "Cabbage", "Onion"],
];

const [fruits, vegatables] = fruitsAndVegetables;
console.log(fruits, vegatables);
