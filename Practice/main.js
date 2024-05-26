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
