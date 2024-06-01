const countries = ["Finland", "Estonia", "Sweden", "Norway"];

countries.forEach(function (country, index, arr) {
  console.log(index, country.toUpperCase());
});

countries.forEach((country, index, arr) => {
  console.log(index, country.toLowerCase());
});

const newCountries = [];
countries.forEach((country) => {
  newCountries.push(country);
});

console.log(newCountries);

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((n) => (sum += n));

console.log(sum);
