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
