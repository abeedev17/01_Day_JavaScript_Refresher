// Function Declaration
// Function without a parameter and return
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}

square();

function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}

addTwoNumbers();

function printFullName() {
  let firstName = "James";
  let lastName = "Harry";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}

printFullName();

// Function returning value
function printFullName1() {
  let firstName = "James";
  let lastName = "Harry";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}

console.log(printFullName1());

function addTwoNumbers1() {
  let numOne = 2;
  let numTwo = 3;
  let total = numOne + numTwo;
  return total;
}

console.log(addTwoNumbers1());

// Function with a parameter
function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}

console.log(areaOfCircle(10));

function square1(number) {
  return number * number;
}

console.log(square1(10));

// Function with two parameters
function sumTwoNumbers1(numOne, numTwo) {
  let sum = numOne + numTwo;
  console.log(sum);
}

sumTwoNumbers1(10, 20);

function sumTwoNumbers2(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}

console.log(sumTwoNumbers2(10, 201));

function printFullName2(firstName, secondName) {
  return `${firstName} ${secondName}`;
}

console.log(printFullName2("James", "Harry"));

// Function with many parameters
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];

console.log(sumArrayValues(numbers));

const areaOfCircle1 = (radius) => {
  let area = Math.PI * radius * radius;
  return area;
};

console.log(areaOfCircle1(10));

// Function with unlimited number of parameters
// Unlimited number of parameters in regular function
function sumAllNums() {
  console.log(arguments);
}

sumAllNums(1, 2, 3, 4);

function sumAllNums1() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums1(1, 2, 3, 4));
console.log(sumAllNums1(1, 4, 6, 12, 30));

// Unlimited number of parameters in arrow function
const sumAllNums2 = (...args) => {
  console.log(args);
};

sumAllNums2(1, 2, 3, 4);

const sumAllNums3 = (...args) => {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum;
};

console.log(sumAllNums3(1, 4, 6, 8));

// Anonymous Function
const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};

// Expression Function
const square2 = function (n) {
  return n * n;
};

console.log(square2(2));

// Self Invoking Functions
(function (n) {
  console.log(n * n);
})(2);

let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);
