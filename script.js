"use strict";
function myFunction() {
  // Get the value of the input field with id="progi"
  let x = document.getElementById("numb").value;
  // input validation
  let text;
  if (isNaN(x) || x < 1) {
    text = "Input not valid";
  } else {
    // fibonacci calculation itself
    let a = 0,
      b = 1,
      c,
      result;
    for (let i = 1; i <= x; i++) {
      result = a + b;
      a = b;
      b = result;
    }
    text = b - a;
  }
  document.getElementById("progi").innerHTML =
    text === Number(text) ? `the result is ${text}` : text;
}
