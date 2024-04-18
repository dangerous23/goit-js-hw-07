loadFontStyles();
function loadFontStyles() {
  var linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href =
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap";
  document.head.appendChild(linkElement);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//---------------Доступ до елементів-------------------------//
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const widget = document.querySelector(".widget");
const paragrafWidget = document.querySelector(".widget p");


widget.style.width = "169px";
widget.style.height = "80px";
widget.style.position = "fixed";
widget.style.top = "50%";
widget.style.left = "50%";
widget.style.transform = "translate(-50%, -50%)";


paragrafWidget.style.fontFamily = "Montserrat";
paragrafWidget.style.fontSize = "16px";
paragrafWidget.style.lineHeight = "24px";
paragrafWidget.style.letterSpacing = "4%";
paragrafWidget.style.fontWeight = "400px";
paragrafWidget.style.color =   "#2E2F42";
paragrafWidget.style.margin = "0px";
paragrafWidget.style.paddingBottom = "16px";

//------------------------------------------Button----------------------------//

changeColorButton.style.width = "148px";
changeColorButton.style.height = "40px";
changeColorButton.style.border= "0px";
changeColorButton.style.backgroundColor = "#4E75FF";
changeColorButton.style.borderRadius = "8px";
changeColorButton.style.color= "#ffffff";
changeColorButton.style.fontFamily = "Montserrat";
changeColorButton.style.fontSize = "16px";
changeColorButton.style.lineHeight = "24px";
changeColorButton.style.letterSpacing = "4%";
changeColorButton.style.fontWeight = "500px";













changeColorButton.addEventListener("click", function() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});