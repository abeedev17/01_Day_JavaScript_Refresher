// find the index of the first even number and the index of the first odd number in the numbers array
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstEvenIndex = numbers.findIndex((n) => n % 2 === 0);
const firstOddIndex = numbers.findIndex((n) => n % 2 !== 0);
console.log(firstEvenIndex);
console.log(firstOddIndex);
