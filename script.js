// Append value to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Calculate and display the result
function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert("Invalid expression");
    }
}

// Square the current number
function squareNumber() {
    let currentValue = document.getElementById('display').value;
    if (currentValue) {
        document.getElementById('display').value = Math.pow(parseFloat(currentValue), 2);
    }
}
