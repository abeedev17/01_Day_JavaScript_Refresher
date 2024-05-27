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
