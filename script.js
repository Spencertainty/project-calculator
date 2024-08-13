// Global Variables
let firstNumber = '';
let operator = '';
let secondNumber = '';

// Hooks into the HTML Document
const display = document.getElementById('display');
const buttons = document.getElementById('buttons')

// Create all the button controls
document.addEventListener('DOMContentLoaded', function() {
    console.log('The page has loaded!');
    data.forEach(button => {
        html = document.createElement("button");
        html.className = button.class;
        html.innerText = button.text;
        html.addEventListener('click',button.click)
        buttons.appendChild(html);
    });
});


// Function for Clear button
function clearAll() {
    console.log("ClearAll");
    firstNumber = "0";
    secondNumber = "0";
    operator = ""
    display.innerText = secondNumber;
}

// Function to handle digit buttons 0-9
function digit(value) {
    console.log("Digit", value);
    if (operator == "=") {
        operator = "";
        secondNumber = "0";
    }
    if (secondNumber == "0") {
        secondNumber = value;
    } else {
        secondNumber += value;
    }
    display.innerText = secondNumber;
}

// Function for Backspace button
function backspace() {
    console.log("Backspace");
    if (secondNumber.length > 0) {
        secondNumber = secondNumber.slice(0, -1);
    }
    if (secondNumber.length == 0) {
        secondNumber = "0"
    }
    display.innerText = secondNumber;
}

// Function for decimal point button
function dot() {
    console.log("dot");
    if (!secondNumber.includes('.')) {
        secondNumber += '.';
        display.innerText = secondNumber;
    }
}

// Function for Percentage button
function percent() {
    console.log("percent");
    secondNumber = (parseFloat(secondNumber) / 100).toString();
    display.innerText = secondNumber;
}

// Function for +/- button
function negate() {
    console.log("negate");
    secondNumber = (parseFloat(secondNumber) * -1).toString();
    display.innerText = secondNumber;
}

// Function to handle operators (+-/*)
function operate(value) {
    console.log("Operate", value);
    if (operator == "" || operator == "=") {
        firstNumber = secondNumber;
    } else {
        firstNumber = calculate();
    }
    display.innerText = firstNumber;
    secondNumber = "0";
    operator = value;
}

// Function to handle equals button
function equals() {
    console.log("Equals");
    secondNumber = calculate();
    display.innerText = secondNumber;
    operator = "=";
}

// Function to calculate a value
function calculate() {
    console.log("Calculate ", firstNumber, operator, secondNumber);
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
