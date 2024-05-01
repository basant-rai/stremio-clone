// Data type

// number;
// string;
// Boolean;
// Array;
// Object;


// Operator;
// ++;
// --;
// >
// < 
// ==;
// ===;



// Keywords
// const;
// let;
// var

// Global scoped
// var global variable
var a = 0;
var a = 5;
// Can be redeclare 

// block scoped
// Cannot redeclared in same block
{
  let b = "Inside block";
  // console.log(b)
}
let b = "This is outside block";
// 


// Data type
var x = 12;
const y = "12";

const z = true;
const s = undefined;

const o = {
  value: "aaa"
}

const add = x + y + z
// console.log(add)

// Only check structure
// equalsto ==

// Check type and structure
// ===

// power
const opr = x ** 3

// % Modulus
// x = x % y
// console.log(x %= y)

// logical operator
// &&
// ||

if (x ?? y == 12) {
  console.log(true)
} else {
  console.log(false)
}

// console.log(x || y == 12)

(x = y)

// console.log(x %= y)

// left shift operator 

const d = 8;
// console.log(d << 2);

// right
console.log(d >> 2);

// 2 * 8=value * 2

// XOR ^
// console.log(2 ^ 5)
// 0010
// 0101
// 0111

// 00001010(10)
// 0010
// 10100000(40)

// statement (if,else)

// let age = 40;

// if (age >= 18) {
//   console.log("Eligible")
// } else {
//   console.log("Ta bacha chas")
// }


// nested if,Else
// if (age >= 18 && age <= 40) {
//   console.log("Eligible")
// } else if (age >= 40) {
//   console.log("c")
// } else {
//   console.log("Ta bacha chas")
// }

let age = 100;

// Switch 
switch (true) {
  case (age >= 18 && age <= 40):
    console.log("Eligible");
    break;
  case (age > 40 && age < 60):
    console.log("Budo");
    break;
  case age >= 60:
    console.log("expire");
    break;
  default:
    console.log("baccha");
    break;
}

const exp = new Date().getDay()

console.log(exp)

switch (exp) {
  case 0:
    day = "Sunday";
    console.log("Sunday")
    break;
  case 1:
    day = "Monday";
    console.log("Monday")

    break;
  case 2:
    day = "Tuesday";
    console.log("Tuesday")

    break;
  case 3:
    day = "Wednesday";
    console.log("Wednesday")

    break;
  case 4:
    day = "Thursday";
    console.log("Thursday")

    break;
  case 5:
    day = "Friday";
    console.log("Friday")

    break;
  case 6:
    day = "Saturday";
    console.log("Saturday")

}

// loop

// for loop ,
// let i = 0
// syntax

// 10 10>5;9

// 0 0<9; 1;
// 1 1<9; 2;
// 9
// for (let i = 10; i > 5; i--) {
//   for (let j = 0; j < i; j++) {
//     console.log(j)
//   }
// }
// while loop,

// let h = 0;
// while (h < 10) {
//   h++
//   console.log(h)
// }
// do while loop,

let text = ""
let k = 0;
do {
  // let text=;
  text = "The number is " + k;
  k++;
  console.log(k, text)
}
while (k < 10);












