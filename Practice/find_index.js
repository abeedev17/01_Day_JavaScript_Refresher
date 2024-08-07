// find the index of the first even number and the index of the first odd number in the numbers array
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstEvenIndex = numbers.findIndex((n) => n % 2 === 0);
const firstOddIndex = numbers.findIndex((n) => n % 2 !== 0);
console.log(firstEvenIndex);
console.log(firstOddIndex);

// find the index of the first country in the array which has exactly six characters
const countries = [
  "Finland",
  "Spain",
  "Estonia",
  "Sweden",
  "Norway",
  "Iceland",
];
const index = countries.findIndex((country) => country.length === 5);
console.log(index);

// find the index of the first country in the array which has the letter 'o'.
const index1 = countries.findIndex((country) => country.includes("c"));
console.log(index1);
