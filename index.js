// homework 1
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Choose the operation (+, -, *, /):");
var output;

console.log(output); // undefined
var n = 2
switch(operation) {
    case '+': output = num1 + num2;break;
    case '-': output = num1 - num2 ;break;
    case '*': output = num1 * num2 ;break;
    case '/': 
        if (num2 !== 0) {
            output = num1 / num2
        } else {
            output = 'zero value';
        }
    ;
    default: output = 'invalid input';
}




// homework2 

var day = prompt('please input day');
day = day.toLowerCase();

var translatedDay;
switch(day) {
    case 'monday': translatedDay = 'Երկուշաբթի'; break;
    default:  translatedDay = 'wrong day';
}


// homework3

var month = +prompt('please input month');

var output;
if (month === 12 || month === 1 || month === 2) {
    output = 'Winter'
} else if (month === 3 || month === 4 || month === 5) {
    output = 'Spring'
} else {
    output = 'wrong month'
}



// homework3

// 
var n = 2;

if (n % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}


var isActive = false;

var buttonValue = isActive ? 'off' : 'on';


console.log(buttonValue, 'buttonValue');



