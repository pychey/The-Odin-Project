//if, if else, else //switch is at bottom
if (true == true) {
    //
} else if (false == false) {
    //
} else {
    //
}

//conditional or question mark operator, or ternary because it has three operands(inputs)
let age = 20;
let AcceesAllowance = age > 18 ? true : false;
//if true, it picks the first value

//multiple ?
console.log((age < 3) ? 'Hi, baby!' :
            (age < 18) ? 'Hello!' :
            (age < 100) ? 'Greetings!' :
            'What an unusual age!');

//assigning logical operation
let result1 = true || true || false;
console.log(result1);
let result2 = true && true && false;
console.log(result2);

//null and undefined logical operation
console.log(2 || 8 || undefined || 1) //2
console.log(null || 0); //0
console.log(0 || null); //null
console.log(null || undefined); //undefined
console.log(undefined || null); //null
//when all false, it return the last value
//when true, it return the first value

//getting the first true value from a list of data or expressions
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder
//OR || choose the one that has the data or "Anonymous" if nothing set)

//“short-circuit” evaluation, another feature of OR
console.log(true || console.log("not printed"));
console.log(false || console.log("printed"));
//it checks until the first true value is true , then returns it immediately without touching other argument

//AND &&
console.log(1 && 5) //5
console.log(0 && null) //0
console.log(2 && 88 && 10) //10
console.log(2 && 18 && null && 10) //null
//&& return the first false value.
//if all true, it return the last value

//&& has higher precedence than || 
console.log(true && true || false && false); //true

//&& could work like if, but not recommend because if is more readable
let x = 5;
(x > 0) && console.log("dont use && for if");

//NOT ! convert the operand (input) to boolean type true/false
console.log(!false) //true
console.log(!1) //false
console.log(!0) //true

//Double NOT !! is sometimes used to convert a value to boolean type
console.log(!!null) //false
console.log(!!"Non-Empty String") //true
//a better way to do this is to used built in function Boolean()
console.log(Boolean(null));
console.log(Boolean("Non-Empty String"));

//switch
switch (age) {
    case 19: //if (age === 19)
        console.log( "case 19" );
        break;
    case 20: //if (age === 20)
        console.log( "case 20" );
        break;
    case 21:
        console.log( "case 21" );
        break;
    default:
        console.log( "default" );
        break;
}
//note: in switch, if one case is matched, code will excute until break
//meaning that if there was no break in the switch above, all code in case 20, 21 and default will all be excuted, cuz once case is matched, it stop comapring

//Any expression can be switch/case argument
switch (+"1") {
    case 0 + 1:
      console.log(`this runs, because +"1" is 1, exactly equals 0+1`);
      break;

    default:
      console.log("this doesn't run");
}

//Grouping cases
let num = '5';
switch (num) {
    case '1':
    case '3':
    case '5':
        console.log("Odd");
        break;
    case '2':
    case '4':
        console.log("Even");
        break;
    default:
        console.log("Not 1-5");
        break;
}

//Type matters
switch (5) {
    case '5':
        console.log("this won't run because 5 is number and case '5' is string");
        break;
    default:
        console.log("default will run");
        break;
}