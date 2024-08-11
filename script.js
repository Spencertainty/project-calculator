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
        const action = button.dataset.action;
        const number = button.dataset.number;
        const operatorValue = button.dataset.operator;

        if (action) {
            switch (action) {
                case 'clear':
                    firstNumber = '';
                    operator = '';
                    secondNumber = '';
                    resultDisplayed = false;
                    updateDisplay('0');
                    break;
                case 'percent':
                    handlePercent();
                    break;
                case 'negate':
                    handleNegate();
                    break;
                case 'backspace':
                    handleBackspace();
                    break;
                case 'dot':
                    if (operator) {
                        if (!secondNumber.includes('.')) {
                            secondNumber += '.';
                            updateDisplay(secondNumber);
                        }
                    } else {
                        if (!firstNumber.includes('.')) {
                        firstNumber += '.';
                        updateDisplay(firstNumber);
                        }
                    }
                    break;
                case 'equals':
                    if (firstNumber && operator && secondNumber) {
                        const result = operate(operator, firstNumber, secondNumber);
                        updateDisplay(result);
                        firstNumber = result.toString();
                        operator = '';
                        secondNumber = '';
                        resultDisplayed = true;
                    }
                    break;
            }        
        } else if (number) { 
            if (resultDisplayed) {
                firstNumber = '';
                resultDisplayed = false;
            }
            if (operator) {
                secondNumber += number;
                updateDisplay(secondNumber);
            } else {
                firstNumber += number;
                updateDisplay(firstNumber);
            }
        } else if (operatorValue) {
            if (firstNumber && operator && secondNumber) {
                firstNumber = operate(operator, firstNumber, secondNumber).toString();
                secondNumber = '';
                updateDisplay(firstNumber);
            }
            operator = operatorValue;
            resultDisplayed = false;
        }
    });
});