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