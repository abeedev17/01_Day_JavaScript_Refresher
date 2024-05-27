// For
for (let i = 0; i < 6; i++) {
  console.log(i);
}

let sum = 0;
for (let i = 0; i < 101; i++) {
  sum += i;
}

console.log(sum);

let sum1 = 0;
for (let i = 0; i < 101; i += 2) {
  sum1 += i;
}

console.log(sum1);

let total = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0) {
    total += i;
  }
}

console.log(total);

const nums = [1, 2, 3, 4, 5];
for (let i = 0; i < 6; i++) {
  console.log(nums[i]);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

const nums1 = [1, 2, 3, 4, 5];
const lastIndex = nums.length - 1;
const newArray = [];
for (let i = lastIndex; i >= 0; i--) {
  newArray.push(nums[i]);
}

console.log(newArray);

// while
let count = prompt("Enter a positive number: ");
while (count > 0) {
  console.log(count);
  count--;
}

// do while
let count1 = 0;
do {
  console.log("do while", count1);
  count1++;
} while (count1 < 11);

let count2 = 11;
do {
  console.log(count2);
  count2++;
} while (count2 < 11);

// for of
const numbers1 = [1, 2, 3, 4, 5];
for (const number of numbers1) {
  console.log(number);
}

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
for (const country of countries) {
  console.log(country.toUpperCase());
}

// forEach
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((number, i) => {
  console.log(number, i);
});

const countries1 = ["Finland", "Sweden", "Norway", "Denmark", " Iceland"];
countries1.forEach((country, i, arr) => {
  console.log(i, country.toUpperCase());
});
