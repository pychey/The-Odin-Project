// ===== NOTE =====
//The greeting should say: "Hello! My name is Carlos Stevenson and I am 18 years old."

const birthYear = 1947;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);

//Answer :
String(thisYear - birthYear);

