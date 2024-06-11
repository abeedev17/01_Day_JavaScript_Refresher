const countries = ["Finland", "Poland", "France", "Spain", "Sweden"];
const countriesWithLand = countries.filter((country) =>
  country.includes("land")
);

console.log(countriesWithLand);

const countiresWithoutLand = countries.filter(
  (country) => !country.includes("land")
);

console.log(countiresWithoutLand);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter((number) => number % 2 === 0);
const odds = numbers.filter((number) => number % 2 === 1);

console.log(evens);
console.log(odds);
