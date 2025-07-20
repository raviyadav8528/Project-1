const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      try {
        display.value = eval(display.value); // calculate expression
      } catch {
        display.value = "Error";
      }
    } else if (button.textContent === "C") {
      display.value = ""; // clear screen
    } else {
      display.value += button.textContent; // append button value
    }
  });
});