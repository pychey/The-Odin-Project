let string = " Hello Pychey Hello "

//length
console.log(string.length);

//position
console.log(string.charAt(1));
console.log(string.at(1));
//at() is new addition to javascirpt.
//at allow negative index while charAt do not, 
//So you can use myString.at(-2) instead of charAt(myString.length-2).

//toUpperCase, toLowerCase
console.log(string.toUpperCase());
console.log(string.toLowerCase());

//repeat
console.log(string.repeat(4));

//trim cut out white spcace
console.log(string.trim()); //both side
console.log(string.trimStart()); //front 
console.log(string.trimEnd()); //back 

//slice
console.log(string.slice(7,13));

//replace
console.log(string.replace("Hello", "Hi")); //sensitive case Hello matches, no need regular expression which is /i
console.log(string.replace(/HELLO/i, "Hi")); //insensitive case HELLO doesnt match, need regular expression which is /i
console.log(string.replace(/Hello/g, "Hi")); //replace all Hello with Hi
console.log(string.replaceAll("Hello", "Hi")); //same with above but less writing and more readable

//split turn string into arrays
console.log(string.split(" "));
console.log(string.split("H"));
console.log(string.split("")); //return every single char of string

//padStart, padEnd
let text = "5";
console.log(text.padStart(4,"x"));
console.log(text.padEnd(4,"x"));
//it pads string "0" until text reaches the length 4

//there are also more string methods such as search, etc