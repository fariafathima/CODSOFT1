let result = document.getElementById('result');
let currentInput = '';

function appendToResult(value) {
    currentInput += value;
    result.innerText = currentInput;
}

function clearResult() {
    currentInput = '';
    result.innerText = '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        result.innerText = currentInput;
    } catch (error) {
        result.innerText = 'Error';
        currentInput = '';
    }
}
