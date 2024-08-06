const display = document.getElementById("Display");

function appendtodisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression in the display
    } catch (error) {
        display.value = "Error"; // Display "Error" if the expression is invalid
    }
}

function clearDisplay() {
    display.value = ''; // Clear the display
}
