// Window Scope
a = "JavaScript";
b = 10;

function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}

console.log(a, b);

// Global Scope

let a1 = "JavaScript";
let b1 = 10;

function letsLearnScope1() {
  console.log(a1, b1);
  if (true) {
    let a1 = "Python";
    let b1 = 100;
    console.log(a1, b1);
  }
  console.log(a1, b1);
}

letsLearnScope1();
console.log(a1, b1);

// Local scope
let a2 = "JavaScript";
let b2 = 10;

function letsLearnScope2() {
  console.log(a2, b2);
  let c2 = 30;
  if (true) {
    let a2 = "Python";
    let b2 = 20;
    let c2 = 40;
    console.log(a2, b2, c2);
  }

  console.log(a2, b2);
}

letsLearnScope2();
console.log(a2, b2);

function letsLearnScope3() {
  var gravity = 9.81;
  console.log(gravity);
}

if (true) {
  var gravity = 9.81;
  console.log(gravity);
}

console.log(gravity);

for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);

function letsLearnScope4() {
  const gravity1 = 9.81;
  console.log(gravity1);
}

if (true) {
  const gravity1 = 9.81;
  console.log(gravity1);
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}
