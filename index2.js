const displayPreviousValue = document.getElementById("previousValue");
const displayCurrentValue = document.getElementById("currentValue");
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");

const display = new Display(displayPreviousValue, displayCurrentValue);

buttonNumbers.forEach(button => {
    button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

buttonOperators.forEach(button => {
    button.addEventListener("click", () => display.computar(button.value))
});





