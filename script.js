let string = "";
let press = document.querySelectorAll(".but");
Array.from(press).forEach((but) => {
  but.addEventListener("click", (a) => {
    if (a.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (a.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(a.target);
      string = string + a.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
