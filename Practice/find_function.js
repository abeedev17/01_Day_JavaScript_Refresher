const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstEvenNum = numbers.find((n) => n % 2 === 0);
const firstOddNum = numbers.find((n) => n % 2 !== 0);

console.log(firstEvenNum);
console.log(firstOddNum);

// find substring
const countries = ["Finland", "Estonia", "Sweden", "Norway", "Denmark"];
const countryWithWay = countries.find((country) => country.includes("way"));
console.log(countryWithWay);

// find letter
const index = countries.find((country) => country.includes("o"));
console.log(index);
