/*const myRedButton = document.getElementById("myRedButton");
const color = document.getElementById("color");*/

/*myRedButton.addEventListener("click", () => {
  headings.style.color = color.value;
});*/
const page = document.querySelector("html");
const input = document.querySelector("input");
const p = document.querySelector("p.description");
const buttonb = document.querySelector(".buttonb");
const buttona = document.querySelector(".putDescription");
const hidden = document.querySelector("div.hidden");
const list = document.querySelector("ul");
const body = document.querySelector("body");

buttona.title = "change the page to a color you like";
input.title = "input the color you want to chnage your page to";

buttonb.addEventListener("click", () => {
  if (hidden.style.display === "none") {
    hidden.style.display = "block";
    buttonb.textContent = "hide";
  } else {
    hidden.style.display = "none";
    buttonb.textContent = "show";
  }
});

buttona.addEventListener("click", () => {
  p.textContent = input.value + " :";
  /*p.style.color = input.value;
  list.style.color = input.value;*/
  page.style.backgroundColor = input.value;
});
