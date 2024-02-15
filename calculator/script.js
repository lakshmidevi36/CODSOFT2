let display = document.getElementById('display');
let currentInput = '';
let result = 0;
let operator = null;

function appendToDisplay(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
    result = 0;
    operator = null;
}

function operation(op) {
    if (currentInput !== '') {
        if (operator === null) {
            result = parseFloat(currentInput);
        } else {
            result = evaluate(result, parseFloat(currentInput), operator);
        }
        operator = op;
        currentInput = '';
        display.innerText = result;
    }
}

function evaluate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

function calculate() {
    if (operator !== null && currentInput !== '') {
        let expression = `${result} ${operator} ${currentInput}`;
        result = evaluate(result, parseFloat(currentInput), operator);
        display.innerText = `${expression} = ${result}`;
        currentInput = '';
        operator = null;
    }
}
