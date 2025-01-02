//these code supposed to be written in console of website

//normal opeation
console.log((3 + 2) - 76 * (1 + 1));
//assignment
let a = 10;
console.log(a);
//let b = 7 * c; undefined c
//const operation
const max=100;
// max = max - a; will throw error

//* for multiply, ** for square
console.log(10*2);
console.log(10**2);

//== equal value, === equal value and type, !== not equal value and type, ? ternary opeation

//Bitwise Operation in telegram 2 Jan 2025 

//using float directly is not accurate
let b = 0.2;
let c = 0.1;
console.log(b+c);

//use multiply to help solve above problem
console.log((b * 10 + c * 10) / 10);

//interger and float has the same data type which is number
console.log(typeof a);
console.log(typeof b);

//comparing value and type using ===
console.log(a===10.00000000000000001); //true
console.log(a===10.00000001); //false

//writing number with e, e act like 10^n
console.log(5e2);
console.log(5e5);
console.log(5e-2);

//prefix and postfix increment/decrement
let pre_counter = 0;
let pre = ++pre_counter;
console.log(pre); //1

let post_counter = 0;
let post = post_counter++;
console.log(post); //0

//prefix and postfix could be used in operation as well
let pre_counter2 = 0;
let post_counter2 = 0;
console.log(2 * ++pre_counter2); // 2*1=2
console.log(2 * post_counter2++) // 2*0=0

//unary plus 
console.log(+"5"); //2
console.log(+"-5"); //-2
console.log(+true); //1
console.log(+false); //0
console.log(+""); //0
//unary plus used to convert string into number, where string number will simple return number but special symbol will turn 0 or 1

//unary plus is very often used, see example below
let apple = "3";
let orange = "2";
console.log(apple + orange); //32
console.log(+apple + +orange); //5

//Operator Precedence//
// when an expression has multiple operation, the excution order is defined by their precedence, it is the priority order of operators
// example * has higher precedence than +

