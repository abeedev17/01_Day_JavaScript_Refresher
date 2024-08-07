const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const someAreEvens = numbers.some((n) => n % 2 === 0);
const someAreOdds = numbers.some((n) => n % 2 !== 0);
console.log(someAreEvens);
console.log(someAreOdds);
