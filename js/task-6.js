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

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");
const input = document.querySelector("input[type='number']");
const getControls = document.querySelector("#controls");

//------------Стилізація Дів для створених елемнтів----------------//
boxesContainer.style.width ="426px";
boxesContainer.style.height ="70px";
boxesContainer.style.marginTop ="16px";
boxesContainer.style.backgroundColor = "#F6F6FE";
boxesContainer.style.borderRadius ="8px";
boxesContainer.style.gap="44px";
boxesContainer.style.display="flex";
boxesContainer.style.alignItems="flex-start";
boxesContainer.style.padding="32px 28px 32px 32px";















//-------------------Глобально Область----------------//
getControls.style.width = "486px";
getControls.style.height = "104px";
getControls.style.backgroundColor = "#F6F6FE";
getControls.style.borderRadius = "8px";
getControls.style.gap = "16px";
//---------------------Поле для вводу----------------//
input.style.margin= " 32px 16px 32px 32px";
input.style.borderRadius = "8px";
input.style.border = "solid 1px #808080 ";
input.style.width = "150px";
input.style.height = "40px";
input.style.fontFamily = "Montserrat";
input.style.fontSize = "16px";
input.style.lineHeight = "24px";
input.style.letterSpacing = "4%";
input.style.fontWeight = "400px";
input.style.color = "#2E2F42";
input.style.textAlign = "center";

//----------------Стилизация кнопки разрушить---------------//
destroyButton.style.borderRadius = "8px";
destroyButton.style.border = "solid 0px ";
destroyButton.style.width = "120px";
destroyButton.style.height = "40px";
destroyButton.style.padding = " 8px 16px 8px 16px";
destroyButton.style.backgroundColor = "#FF4E4E";
destroyButton.style.fontFamily = "Montserrat";
destroyButton.style.fontSize = "16px";
destroyButton.style.lineHeight = "24px";
destroyButton.style.letterSpacing = "4%";
destroyButton.style.fontWeight = "500px";
destroyButton.style.color =   "#FFFFFF";
destroyButton.style.marginRight= "16px";
//----------------Ховер на кнопки разрушить----------------//
destroyButton.addEventListener("mouseenter", function() {
  destroyButton.style.backgroundColor = "  #FF7070"; 
});

destroyButton.addEventListener("mouseleave", function() {
  destroyButton.style.backgroundColor = "#FF4E4E"; 
});
//----------------Стилизация кнопки создать----------------//
createButton.style.borderRadius = "8px";
createButton.style.border = "solid 0px ";
createButton.style.width = "120px";
createButton.style.height = "40px";
createButton.style.padding = " 8px 16px 8px 16px";
createButton.style.backgroundColor = "#4E75FF";
createButton.style.fontFamily = "Montserrat";
createButton.style.fontSize = "16px";
createButton.style.lineHeight = "24px";
createButton.style.letterSpacing = "4%";
createButton.style.fontWeight = "500px";
createButton.style.color =   "#FFFFFF";
createButton.style.marginRight= "16px";
//----------------Ховер на кнопки создать----------------//
createButton.addEventListener("mouseenter", function() {
  createButton.style.backgroundColor = "#6C8CFF"; 
});

createButton.addEventListener("mouseleave", function() {
  createButton.style.backgroundColor = "#4E75FF"; 
});



createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return;
  }

  clearBoxes();
  
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }

  input.value = '';
}

function clearBoxes() {
  boxesContainer.innerHTML = '';
  
}
function destroyBoxes() {
  clearBoxes();
}