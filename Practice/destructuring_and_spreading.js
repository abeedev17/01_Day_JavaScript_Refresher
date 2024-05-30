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

// Skipping an Item during destructuring
const countries4 = ["Finland", "Sweden", "Iceland", "Norway", "Denmark"];
const [fin4, ice4, , den4] = countries4;
console.log(fin4, ice4, den4);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [num21, num22, num23, ...rest] = nums;

console.log(num21, num22, num23, rest);

const countries5 = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [gem, fra, ...nordicCountries] = countries5;

console.log(gem, fra, nordicCountries);

// Destructuring when we loop through arrays
const countries6 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries6) {
  console.log(country, city);
}

const fullStack1 = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const [first, second, third, fourth] of fullStack1) {
  console.log(first, second, third, fourth);
}

const [x, y] = [2, (value) => value ** 2];

// Destructuring objects
const rectangle = {
  width: 20,
  height: 10,
};

let width = rectangle.width;
let height = rectangle.height;

let width1 = rectangle[width];
let height1 = rectangle[height];

const rectangle1 = {
  width2: 11,
  height2: 113,
};

let { width2, height2 } = rectangle1;
console.log(width2, height2);

const rectangle2 = {
  width3: 221,
  height3: 12,
};

let { width3, height3, perimeter } = rectangle2;
console.log(width3, height3, perimeter);

// Default value during object destructuring
const rectangle3 = {
  width4: 113,
  height4: 112,
};

let { width4, height4, perimeter1 = 20 } = rectangle3;
console.log(width4, height4, perimeter1);

// Renaming variable names
const rectangle4 = {
  width5: 20,
  height5: 12,
};

let { width5: w, height5: h } = rectangle4;
console.log(w, h);
