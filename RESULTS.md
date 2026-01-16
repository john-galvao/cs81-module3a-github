## First function
function double(n) {
  return n * 2;
}

console.log(double(4));
console.log(double(2));
console.log(double(1));

8
4
2

## Second function

function square(n) {
  return n * n;
}

console.log(square(4));
console.log(square(2));
console.log(square(1));

16
4
1

## Third function

function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(7));
console.log(isEven(0));
console.log(isEven(-4));

true
false
true
true

## Fourth function

function isOdd(n) {
  return n % 2 !== 0;
}

console.log(isOdd(10));
console.log(isOdd(4));
console.log(isOdd(3));

false
false
true

## Fifth function

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3));
console.log(multiply(3, 4));
console.log(multiply(4, 5));
console.log(multiply(5, 6));

6
12
20
30