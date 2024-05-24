let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.innerText = currentInput;
    } catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '';
}
