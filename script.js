let firstNumber = '';
let operator = '';
let secondNumber = '';

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;            
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    } else {
        return a / b;
    }
}

function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value;
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (button.id === 'clear') {
            firstNumber = '';
            operator = '';
            secondNumber - '';
            updateDisplay('0');
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
        } else if (value === '=') {
            if (firstNumber && operator && secondNumber) {
                const result = operate(operator, firstNumber, secondNumber);
                updateDisplay(result);
                firstNumber = result;
                operator = '';
                secondNumber = '';
            }
        } else {
            if (operator) {
                secondNumber += value;
                updateDisplay(secondNumber);
            } else {
                firstNumber += value;
                updateDisplay(firstNumber);
            }
        }
    });
});

console.log(add(2, 3));
console.log(subtract(5, 2));
console.log(multiply(4, 3));
console.log(divide(10, 2));
console.log(divide(10, 0));