let currentInput = '0';
let operator = null;
let previousInput = null;

function inputDigit(digit) {
    if (currentInput === '0') {
        currentInput = String(digit);
    } else {
        currentInput += digit;
    }
    updateDisplay();
}

function setOperator(nextOperator) {
    if (operator !== null) {
        calculate();
    }
    previousInput = currentInput;
    currentInput = '0';
    operator = nextOperator;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = String(result);
    operator = null;
    previousInput = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentInput;
}
