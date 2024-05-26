// Variables
let firstName = "James";
firstName = "Adam";

const PI = 3.14;
// Arrays
// Using Array constructor
// syntax
const arr1 = Array();
// or
// let arr = new Array();
console.log(arr1);
// Using square brackets([])
// syntax
// This the most recommended way to create an empty list
const arr2 = [];
console.log(arr2);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mongo", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
const webTechs = ["HTML", "CSs", "JS", "React", "Redux", "Node", "MongoDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// Print the array and its length
console.log("Numbers: ", numbers);
console.log("Number of numbers: ", numbers.length);

console.log("Fruits: ", fruits);
console.log("Number of fruits: ", fruits.length);

console.log("Vegetables: ", vegetables);
console.log("Number of vegetables: ", vegetables.length);

console.log("Animal products: ", animalProducts);
console.log("Number of animal products: ", animalProducts.length);

console.log("Web technologies: ", webTechs);
console.log("Number of web technologies: ", webTechs.length);

console.log("Countries: ", countries);
console.log("Number of countries: ", countries.length);

// Array can have items of different data types
const arr3 = [
  "James",
  250,
  true,
  { country: "Finland", city: "Helsink" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; //arr3 containing different data types
console.log(arr3);

// Creating an array using split
let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript);

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

console.log(companies);

let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);

// Accessing array items using index
const fruits1 = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[0];

console.log(firstFruit);

secondFruit = fruits[1];
console.log(secondFruit);

let lastFruit = fruits[3];
console.log(lastFruit);

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit);

const numbers1 = [0, 3.14, 9.81, 37, 98.6, 100]; // set of numbers

console.log(numbers.length); // to know the size of the array, which is 6
console.log(numbers); // returns array
console.log(numbers[0]); // first array item
console.log(numbers[5]); // fifth array item

let lastIndex1 = numbers.length - 1;
console.log(numbers[lastIndex1]);

const webTechs1 = [
  "HTML",
  "CSs",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webTechs);
console.log(webTechs.length);
console.log(webTechs[0]);
console.log(webTechs[6]);

let lastIndex2 = webTechs1.length - 1;
console.log(webTechs[lastIndex2]);

const countries1 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

console.log(countries);
console.log(countries[0]);
console.log(countries[10]);

let lastIndex3 = countries.length - 1;
console.log(countries[lastIndex3]);

const shoppingCart = [
  "Milk",
  "Mango",
  "Tomato",
  "Potato",
  "Avocado",
  "Meat",
  "Eggs",
  "Sugar",
];

console.log(shoppingCart);
console.log(shoppingCart[0]);
console.log(shoppingCart[7]);

let lastIndex4 = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex4]);

// Modifying array element
const numbers2 = [1, 2, 3, 4, 5];
numbers2[0] = 10;
numbers2[1] = 20;

console.log(numbers);

const countries2 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

countries[0] = "Italy";
let lastIndex5 = countries.length - 1;
countries[lastIndex] = "France";

console.log(countries);

// Methods to manipulate array
// Array Constructor
// Array:To create an array.
const arr4 = Array();
console.log(arr4);

const eightEmptyValues = Array(8);
console.log(eightEmptyValues);

// Creating static values with fill
// fill: Fill all the array elements with a static value
const arr5 = Array();
console.log(arr5);

const eightXvalues = Array(8).fill("X");
console.log(eightXvalues);

const eight0values = Array(8).fill("0");
console.log(eight0values);

const four4values = Array(4).fill(4);
console.log(four4values);

// Concatenating array using concat
// concat:To concatenate two arrays.

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList);

const fruits2 = ["banana", "orange", "mango", "lemon"];
const vegetables2 = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
const fruitsAndVegetables = fruits.concat(vegetables);

console.log(fruitsAndVegetables);

// Getting array length
// Length:To know the size of the array
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3.length);

// Getting index of an element in an array
// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
const numbers4 = [1, 2, 3, 4, 5];

console.log(numbers4.indexOf(5));
console.log(numbers4.indexOf(0));
console.log(numbers4.indexOf(1));
console.log(numbers4.indexOf(6));

// Check an element if it exist in an array.
// Check items in a list
const fruits3 = ["banana", "orange", "mango", "lemon"];
let index = fruits3.indexOf("banana");

if (index != -1) {
  console.log("This fruit does exist in the array");
} else {
  console.log("This fruit does not exist in the array");
}

index != -1
  ? console.log("This fruit does exist in the array")
  : console.log("This fruit does not exist in the array");

let indexOfAvocado = fruits.indexOf("avocado");

if (indexOfAvocado != -1) {
  console.log("This fruit does exist in the array");
} else {
  console.log("This fruit does not exist in the array");
}

// Getting last index of an element in array
// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
const numbers5 = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers5.lastIndexOf(2));
console.log(numbers5.lastIndexOf(0));
console.log(numbers5.lastIndexOf(1));
console.log(numbers5.lastIndexOf(4));
console.log(numbers5.lastIndexOf(6));

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
const numbers6 = [1, 2, 3, 4, 5];

console.log(numbers6.includes(5));
console.log(numbers6.includes(0));
console.log(numbers6.includes(1));
console.log(numbers6.includes(6));

const webTechs2 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webTechs2.includes("Node"));
console.log(webTechs2.includes("C"));

// Checking array
// Array.isArray:To check if the data type is an array
const numbers7 = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers7));

const number = 100;
console.log(Array.isArray(number));

// Converting array to string
// toString:Converts array to string
const numbers8 = [1, 2, 3, 4, 5];
console.log(numbers8.toString());

const names = ["James", "John", "Adam", "Brook"];
console.log(names.toString());

// Joining array elements
const numbers9 = [1, 2, 3, 4, 5];
console.log(numbers9.join());

const names1 = ["James", "John", "Adam", "Brook"];
console.log(names1.join());
console.log(names1.join(""));
console.log(names1.join(" "));
console.log(names1.join(", "));
console.log(names1.join(" # "));

const webTechs3 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webTechs3.join());
console.log(webTechs3.join(" # "));

// Slice array elements
const numbers10 = [1, 2, 3, 4, 5];

console.log(numbers10.slice());
console.log(numbers10.slice(0));
console.log(numbers10.slice(0, numbers10.length));
console.log(numbers10.slice(1, 4));

// Splice method in array
const numbers11 = [1, 2, 3, 4, 5];
console.log(numbers11.splice());

const numbers12 = [1, 2, 3, 4, 5];
console.log(numbers12.splice(0, 2));

const numbers13 = [1, 2, 3, 4, 5, 6];
console.log(numbers13.splice(3, 3, 7, 8, 9));
console.log(numbers13);

// Adding item to an array using push
// Push: adding item in the end. To add item to the end of an existing array we use the push method.
// syntax
const arr = ["item1", "item2", "item3"];
arr.push("new item");

console.log(arr);

const numbers14 = [1, 2, 3, 4, 5];
numbers14.push(6);

console.log(numbers14);

numbers14.pop();
console.log(numbers14);

let fruits4 = ["banana", " orange", "mango", "lemon"];
fruits4.push("apple");

console.log(fruits4);

fruits4.push("lime");
console.log(fruits4);

// Removing the end element using pop
const numbers15 = [1, 2, 3, 4, 5];
numbers15.pop();

console.log(numbers15);

// Removing an element from the beginning
// shift: Removing one array element in the beginning of the array.
const numbers16 = [1, 2, 3, 4, 5];
numbers16.shift();

console.log(numbers16);

// Add an element from the beginning
const numbers17 = [1, 2, 3, 4, 5];
numbers17.unshift(0);

console.log(numbers17);
