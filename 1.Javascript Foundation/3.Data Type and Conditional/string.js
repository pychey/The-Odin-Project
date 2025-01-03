//in javascript, you can choose single quotes ('), double quotes ("), or backticks (`) to wrap your strings in
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;
console.log(single);
console.log(double);
console.log(backtick);

/* single and double quote stirng are the same, backtick string is a special kind of string is called templete literal.
backtick string is also normal most case but it has some special properties such:
you can embed JavaScript in them
you can declare template literals over multiple lines */ 

//embedding using ${}
const name1 = "Chris";
const greeting1 = `Hello, ${name1}`;
console.log(greeting1); // "Hello, Chris"
//normal string would need to use +
const greeting2 = "Hello";
const name2 = "Chris";
console.log(greeting2 + ", " + name2); // "Hello, Chris"
//templete literal give more readable code

//including expression
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${ (score / highestScore) * 100 }%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

//multiple lines
const newline1 = `One day you finally knew
what you had to do, and began,`;
console.log(newline1); //2 lines
//Template literals respect the line breaks in the source code

//normal string
const newline2 = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline2);

//quote
console.log('quote : "what is the purpose of life"');
console.log(`quote : "what is the purpose of life"`);
console.log("quote : \"what is the purpose of life\"");

// '\' is an escape character used to make sure they are reconized as text not part of the code.

//converting string and number
console.log(typeof Number("123")); //number
console.log(typeof String(123)); //string