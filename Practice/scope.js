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
