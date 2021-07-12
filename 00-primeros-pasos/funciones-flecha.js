const x = 10;
const y = 2;

// x + y
var sum = (x, y) => x + y;

// x - y
var subtraction = (x, y) => x - y;

// x / y
var division = (x, y) => x / y;

// x * y
var multiplication = (x, y) => x * y;


console.log("NUMBERS:", "X =", x, "; Y =", y);
console.log("SUM:", sum(x, y));
console.log("SUBTRACTION:", subtraction(x, y));
console.log("DIVISION:", division(x, y));
console.log("MULTIPLICATION:", multiplication(x, y));