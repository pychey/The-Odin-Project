//assigning comparision
let result = 5 > 4;
console.log(result); //true

//comparing string
console.log('a' > 'A'); 
console.log("GLOW" > "GLEE"); //comparision stops when O is larger than E

//comparing string number with number
console.log('01' == 1); //string number will convert to number value when comparing

//might cause confusion
console.log(Boolean(0)); //false
console.log(Boolean('0')); //true
console.log('0' == 0); //true 
//because == convert string number to number, boolen use different rule

//== equality's problem
console.log(0 == false); //true
console.log('' == false); //true
//== cant tell the different becuase == convert different type to number, including false become zero, '' become zero and more

//strict equality ===
console.log(0 === false); //false
console.log('' === false); //false
//=== use longer bits to write but make it less room for errors

//undefined and null
console.log(null == undefined); //true
console.log(null === undefined); //false

//null and 0
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0) //true
console.log(null <= 0) //true
//== works different from <=,>=,> // == dont convert null, but >=, > does convert it to zero

//undefined and 0
console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0) //false
console.log(undefined <= 0) //false
//undefined only equal to null in ==, > convert it to NaN but >= convert it to what? idk

//To avoid these problems :
//Treat any comparison with undefined/null except the strict equality === with exceptional care.
//Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.