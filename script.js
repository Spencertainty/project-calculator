let firstNumber = '';
let operator = '';
let secondNumber = '';
const display = document.getElementById('display');

function clearAll() {
    firstNumber = "0";
    secondNumber = "0";
    operator = ""
    display.innerText = secondNumber;
}

function digit(value) {
    if (operator == "=") {
        operator = "";
        secondNumber = "0";
    } 
    if(secondNumber == "0") {
        secondNumber = value;
    } else {
        secondNumber += value;
    }
    display.innerText = secondNumber;
}

function backspace() {
    if (secondNumber.length > 0) {
        secondNumber = secondNumber.slice(0, -1);
    }
    if (secondNumber.length == 0) {
        secondNumber = "0"
    }
    display.innerText = secondNumber;
}

function dot() {
    if (!secondNumber.includes('.')) {
        secondNumber += '.';
        display.innerText = secondNumber;
    }
}

function percent() {
    secondNumber = (parseFloat(secondNumber) / 100).toString();
    display.innerText = secondNumber;        
}

function negate() {
    secondNumber = (parseFloat(secondNumber) * -1).toString();
    display.innerText = secondNumber;        
}

function operate(value) {
    if (operator == "" || operator == "=") {
        firstNumber = secondNumber;
    } else {
        firstNumber = calculate();
    }
    display.innerText = firstNumber;
    secondNumber = 0;
    operator = value;
}

function equals() {
    secondNumber = calculate();
    display.innerText = secondNumber;
    operator = "=";
}

function calculate() {
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);
    switch (operator) {
        case '+':
            return (a + b).toString();
        case '-':
            return (a - b).toString();
        case '*':
            return (a * b).toString();
        case '/':
            answer = Math.round((a / b) * 1000000000) / 1000000000;
            return answer.toString();
        default:
            console.log("Error, invalid operator")
    }
}
