const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((acc, cur) => acc + cur);
console.log(sum);

const sum1 = numbers.reduce((acc, cur) => acc + cur, 5);
console.log(sum1);

const strs = ["Hello", "World", "!"];
const helloWorld = strs.reduce((acc, cur) => acc + " " + cur);
console.log(helloWorld);

const number2 = [1, 2, 3, 4, 5];
const value = number2.reduce((acc, cur) => acc * cur, 10);
console.log(value);
