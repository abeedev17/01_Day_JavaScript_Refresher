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
