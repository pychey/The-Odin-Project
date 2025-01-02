//string and number
let x = 10;
let y = 20;
let k = "10";
//10+20=30
console.log(x + y);
//10+"10"=1010
console.log(x + k);
//"10"+10+20=101020
console.log(k + x + y);
//10+20+"10"=3010
console.log(x + y + k);
//Note: javascript interpret from left to right, once string, num will also turn string

//string and number operation
console.log(x * k);
console.log(x / k);
console.log(x - k);
console.log(x + k);
//beside + as concatenate opeation, * / - will turn string into number

//NaN, Not a Number
console.log(100 / "10");
console.log(100 / "apple");
//when dealing with string that is not number, it will return NaN

//use isNaN() to check if its NaN
console.log(isNaN(100/ "10"));
console.log(isNaN(100/"apple"));

//NaN + number will return NaN
console.log(10+NaN);

//NaN + string consider concatenate
console.log("10"+NaN);

//typeof used to tell type of variable
console.log(typeof x);
console.log(typeof k);
console.log(typeof NaN); // NaN is a number

//Infinity or (-Infinity)
console.log(Infinity);
console.log(-Infinity);
console.log(2/0);
console.log(-2/0);
console.log(typeof Infinity); //Infinity is a numebr

//Hexadecimal using 0x
console.log(0xFF);

//By using toString() method, we can convert number base 10 on default to other base from base 2 to base 36
let base_number = 100;
console.log(base_number.toString(2)); //binary
console.log(base_number.toString(8)); //octal
console.log(base_number.toString(10)); //decimal
console.log(base_number.toString(16)); //hexadecimal 
console.log(base_number.toString(32)); //base 32
console.log(base_number.toString(19)); //random base between 2 to 36 //100 = 5*19^1 + 5*19^0 = 55 in base 19

//Number as Object
let p = 10; //primitive value
let q = new Number(10); //number object
console.log(p);
console.log(q);
//Number objects arent really used
//The new keyword complicates the code and slows down execution speed. Number Objects can produce unexpected results:

//number object value and type
console.log(typeof q); //object
console.log(p==q); //same value
console.log(p===q); //but different type

//comaparing 2 objects always return false
let r = new Number(10);
console.log(q==r); //false

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
