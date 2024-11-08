let leftside = document.querySelector(".left");
let rightside = document.querySelector(".right");
let bgcolorInput = document.querySelector("#bgcolor");
let textcolorInput = document.querySelector("#textcolor");
let rightBgColorInput = document.querySelector("#r-bgcolor");
let rightTextColorInput = document.querySelector("#r-textcolor");
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
