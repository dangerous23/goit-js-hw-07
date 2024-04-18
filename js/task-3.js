loadFontStyles();
function loadFontStyles(){
    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
  linkElement.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap';
  document.head.appendChild(linkElement);
  }   
const textInput = document.getElementById("name-input");
const output = document.getElementById ("name-output");
const titelInput = document.querySelector("h1");
textInput.classList.add("custom-placeholder-color");
 bilderInputElement(textInput);
 createElementH2(titelInput);

function bilderInputElement(textInput){
const lastInput = textInput.style;
lastInput.width = "360px";
lastInput.height ="40px";
lastInput.borderRadius = "4px";
lastInput.border = "solid 1px #808080";
lastInput.paddingLeft = "16px";
lastInput.fontFamily = "Montserrat";
lastInput.color = "#2E2F42";
}

function createElementH2 (titelInput){
titelInput.style.marginTop = "16px";
titelInput.style.marginBottom = "0px";
titelInput.style.fontFamily = "Montserrat";
titelInput.style.fontSize = '16px';
titelInput.style.lineHeight = '32px';
titelInput.style.height = "32px";
titelInput.style.letterSpacing = '4%';
titelInput.style.fontWeight = '600px';
titelInput.style.color = "#2E2F42";
}


textInput.addEventListener('input', (ev) => {
    const trimmedValue = textInput.value.trim(); // Очистка от пробелов по краям

    if (trimmedValue === '') {
        output.textContent = 'Anonymous'; // Если значение пустое или содержит только пробелы
    } else {
       output.textContent = trimmedValue; // Иначе выводим текущее значение
    }console.log(textInput.value);
});
