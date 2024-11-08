let leftside = document.querySelector(".left") as HTMLElement;
let rightside = document.querySelector(".right") as HTMLElement;
let bgcolorInput = document.querySelector("#bgcolor") as HTMLInputElement;
let textcolorInput = document.querySelector("#textcolor") as HTMLInputElement;
let rightBgColorInput = document.querySelector(
  "#r-bgcolor"
) as HTMLInputElement;
let rightTextColorInput = document.querySelector(
  "#r-textcolor"
) as HTMLInputElement;

function changeBgColor() {
  leftside.style.backgroundColor = bgcolorInput.value;
  leftside.style.color = textcolorInput.value;
}
bgcolorInput.addEventListener("change", changeBgColor);
textcolorInput.addEventListener("change", changeBgColor);



function changeColor() {
  rightside.style.backgroundColor = rightBgColorInput.value;
  rightside.style.color = rightTextColorInput.value;
}
rightBgColorInput.addEventListener("change", changeColor);
rightTextColorInput.addEventListener("change", changeColor);

