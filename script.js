"use strict";

function calculateFibonacci() {
  const inputElement = document.getElementById("numb");
  const resultElement = document.getElementById("progi");

  // Get the value of the input field
  const inputValue = Number(inputElement.value);

  // Validate input
  if (isNaN(inputValue) || inputValue < 1) {
    resultElement.innerHTML = "Input not valid. Please enter a positive number.";
    return;
  }

  // Fibonacci calculation
  let a = 0, b = 1;
  for (let i = 1; i < inputValue; i++) {
    [a, b] = [b, a + b];
  }

  // Display the result
  resultElement.innerHTML = `<strong>The Fibonacci number at position ${inputValue} is: ${b}</strong>`;
}
