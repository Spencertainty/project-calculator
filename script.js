let firstNumber = '';
let operator = '';
let secondNumber = '';
let resultDisplayed = false;

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    let result;
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            return null;            
    }
    return typeof result === 'number' ? roundResult(result) : result
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
        return "Snarky Message: Can't divide by zero, silly";
    } else {
        return a / b;
    }
}

function roundResult(result) {
    return Math.round(result * 1000000000) / 1000000000;
}

function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value;
}

function handleBackspace() {
    if (operator) {
        secondNumber = secondNumber.slice(0, -1);
        updateDisplay(secondNumber || '0');
    } else {
        firstNumber = firstNumber.slice(0, -1);
        updateDisplay(firstNumber || '0');
    }
}

function handleNegate() {
    if (operator) {
        secondNumber = (parseFloat(secondNumber) * -1).toString();
        updateDisplay(secondNumber);
    } else {
        firstNumber = (parseFloat(firstNumber) * -1).toString();
        updateDisplay(firstNumber);
    }
}

function handlePercent() {
    if (operator) {
        secondNumber = (parseFloat(secondNumber) / 100).toString();
        updateDisplay(secondNumber);
    } else {
        firstNumber = (parseFloat(firstNumber) / 100).toString();
        updateDisplay(firstNumber);
    }
}

console.log({ firstNumber, operator, secondNumber, resultDisplayed });

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (button.id === 'clear') {
            firstNumber = '';
            operator = '';
            secondNumber = '';
            resultDisplayed = false;
            updateDisplay('0');
        } else if (button.id === 'percent') {
            handlePercent();
        } else if (button.id === 'negate') {
            handleNegate();
        } else if (button.id === 'backspace') {
            handleBackspace();
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (firstNumber && operator && secondNumber) {
                firstNumber = operate(operator, firstNumber, secondNumber).toString();
                secondNumber = '';
                updateDisplay(firstNumber);
            }
            operator = value;
            resultDisplayed = false;
        } else if (value === '=') {
            if (firstNumber && operator && secondNumber) {
                const result = operate(operator, firstNumber, secondNumber);
                updateDisplay(result);
                firstNumber = result.toString();
                operator = '';
                secondNumber = '';
                resultDisplayed = true;
            }
        } else {
            if (resultDisplayed) {
                firstNumber = '';
                resultDisplayed = false;
            }
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