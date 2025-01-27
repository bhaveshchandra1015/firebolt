// JavaScript for calculator functionality
let displayValue = '';
let currentOperation = null;
let firstOperand = null;

const display = document.getElementById('display');

function appendNumber(number) {
  displayValue += number;
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  currentOperation = null;
  firstOperand = null;
  display.value = '';
}

function performOperation(operator) {
  if (currentOperation && displayValue) {
    calculate(); // Perform the previous operation
  }
  firstOperand = parseFloat(displayValue);
  currentOperation = operator;
  displayValue = ''; // Reset the display value for the next operand
}

function calculate() {
  if (currentOperation && firstOperand !== null) {
    const secondOperand = parseFloat(displayValue);
    switch (currentOperation) {
      case '+':
        displayValue = firstOperand + secondOperand;
        break;
      case '-':
        displayValue = firstOperand - secondOperand;
        break;
      case '*':
        displayValue = firstOperand * secondOperand;
        break;
      case '/':
        displayValue = firstOperand / secondOperand;
        break;
    }
    display.value = displayValue;
    firstOperand = null;
    currentOperation = null;
  }
}
