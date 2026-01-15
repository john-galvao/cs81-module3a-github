// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
}

// Returns the cube of a number
function cube(x) {
  return x * x * x;
}

// Returns true if the number is even, otherwise false
function isEven(n) {
  return n % 2 === 0;
}
// Subtracts b from a. If b is missing, returns the negative of a
function subtract(a, b) {
  if (b === undefined) {
    return -a;
  } else {
    return a - b;
  }
}