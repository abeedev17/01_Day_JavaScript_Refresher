// Callback
const Callback = (n) => {
  return n ** 2;
};

function cube(Callback, n) {
  return Callback(n) * n;
}

console.log(cube(Callback, 3));
