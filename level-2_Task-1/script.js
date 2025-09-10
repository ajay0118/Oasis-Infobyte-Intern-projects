const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "C") {
      display.value = "";
    } else if (btn.innerText === "←") {
      display.value = display.value.slice(0, -1);
    } else if (btn.innerText === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += btn.innerText;
    }
  });
});
