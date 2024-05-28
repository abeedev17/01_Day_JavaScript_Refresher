// Callback
const Callback = (n) => {
  return n ** 2;
};

function cube(Callback, n) {
  return Callback(n) * n;
}

console.log(cube(Callback, 3));

// Returning function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};

console.log(higherOrder(2)(3)(10));

const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};

console.log(sumArray(numbers));

const sumArray1 = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });

  return sum;
};

console.log(sumArray1(numbers));

// Setting time
// setInterval
function sayHello() {
  console.log("Hello");
}

setInterval(sayHello, 2000);

// setTimeout
function sayHello1() {
  console.log("Hello setTimeout");
}

setTimeout(sayHello1, 2000);
