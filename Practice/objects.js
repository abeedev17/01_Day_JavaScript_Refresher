// Creating an empty object
const person = {};

// Creating an objecting with values
const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle);

const person1 = {
  firstName: "James",
  lastName: "Harry",
  age: "54",
  country: "United Kingdom",
  city: "London",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

person1.nationality = "English";
person1.country = "England";
person1.title = "teacher";
person1.skills.push("Meteor");
person1.skills.push("Python");
person1.isMarried = true;

person1.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .slice(0, this.skills.length - 1)
    .join(",");
  let lastSkill = this.skills.slice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};

console.log(person1);
console.log(person1.getPersonInfo());

// Object Methods

const person2 = {
  firstName: "James",
  age: 54,
  country: "England",
  city: "London",
  skills: ["HTML", "CSS", "JavaScript"],
  title: "teacher",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "London",
  },
  getPersonInfo1: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
};

const copyPerson = Object.assign({}, person2);
console.log(copyPerson);

// Getting object keys using Object.keys()
// Object.keys: To get the keys or properties of an object as an array
const keys = Object.keys(copyPerson);
console.log(keys);
const address = Object.keys(copyPerson.address);
console.log(address);

// Getting object values using Object.values()
// Object.values:To get values of an object as an array
const values = Object.values(copyPerson);
console.log(values);

// Getting object keys and values using Object.entries()
// Object.entries:To get the keys and values in an array
const entries = Object.entries(copyPerson);
console.log(entries);
