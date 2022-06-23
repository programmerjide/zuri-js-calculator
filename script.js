// build calculator in javascript and display result using function

let firstNumber = prompt('Enter the first number: ');
let secondNumber = prompt('Enter the second number: ');
let operator = prompt('Enter the operator from the options (+, -, *, and /): ');

// check if firstNumber is not numeric
if (isNaN(firstNumber || secondNumber)) {
    alert('Invalid first number!!! Enter a numeric value');
}

if(isNaN(secondNumber)) {
    alert('Invalid second number!!! Enter a numeric value');
}

if(isNaN(firstNumber && secondNumber)) {
    alert('Invalid first number and second number!!! Enter a numeric value');
} 

function calculate(firstNumber, secondNumber, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = parseInt(firstNumber) + parseInt(secondNumber);
            break;
        case '-':
            result = parseInt(firstNumber) - parseInt(secondNumber);
            break;
        case '*':
            result = parseInt(firstNumber) * parseInt(secondNumber);
            break;
        case '/':
            result = parseInt(firstNumber) / parseInt(secondNumber);
            break;
        default:
            result = 'Invalid operator try again (+, -, *, and /)';
    }
    return result;
}

console.log(`${firstNumber} ${operator} ${secondNumber} = ${calculate(firstNumber, secondNumber, operator)}`);
