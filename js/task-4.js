loadFontStyles();
function loadFontStyles() {
  var linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href =
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap";
  document.head.appendChild(linkElement);
}
// -----------------------Доступ до елементів------------------------------//
const regForm = document.querySelector(".login-form");
regForm.addEventListener("submit", sentForm);
const emailInput = document.querySelector('.login-form input[type="email"]');
const passwordInput = document.querySelector(
  '.login-form input[type="password"]'
);
const loginButton = document.querySelector('button');
const label = document.querySelectorAll("label");
 
// -----------------------Форми для вводу---------------------------------//

regForm.style.display = "flex";
regForm.style.flexDirection = "column";
regForm.style.width = "408px";
regForm.style.height = "256px";

// -----------------------Стилізація форми ввводу пошти-------------------//
emailInput.style.border = 'none';
emailInput.style.outline = 'none';
emailInput.style.marginTop = "8px";
emailInput.style.marginBottom = "8px";
emailInput.style.width = "360px";
emailInput.style.border = "solid 1px #808080";
emailInput.style.borderRadius = "4px";
emailInput.style.height = "40px";
emailInput.style.padding = "0px";


emailInput.addEventListener("mouseenter", function() {
  emailInput.style.border = "solid 1px #000000"; 
});

emailInput.addEventListener("mouseleave", function() {
  emailInput.style.border = "solid 1px #808080"; 
});
// инпут активен---------------------------------------
emailInput.addEventListener('focus', function() {
emailInput.setAttribute('placeholder', 'Type area',"solid 1px #2E2F42");
emailInput.style.border = "solid 1px #808080"; 
emailInput.style. paddingLeft = "16px";
emailInput.style.width = "344px";
emailInput.style.fontFamily = "Montserrat";
emailInput.style.fontSize = "16px";
emailInput.style.lineHeight = "24px";
emailInput.style.letterSpacing = "4%";
emailInput.style.fontWeight = "400px";
emailInput.style.color =   "#2E2F42";
});
// -----------------------Стилізація форми ввводу пошти-------------------//

passwordInput.style.marginTop = "8px";
passwordInput.style.marginBottom = "16px";
passwordInput.style.width = "360px";
passwordInput.style.height = "40px";
passwordInput.style.border = "solid 1px #808080";
passwordInput.style.borderRadius = "4px";
passwordInput.style.padding = "0px";

// -----------------------Стилізація підписів полів вводу-----------------//

label.forEach((label) => {
  label.style.display = "flex";
  label.style.flexDirection = "column";
  label.style.fontFamily = "Montserrat";
  label.style.fontSize = "16px";
  label.style.lineHeight = "24px";
  label.style.letterSpacing = "4%";
  label.style.fontWeight = "400px";
  label.style.color =   "#2E2F42";
});

// -----------------------Стилізація кнопки------------------------------//

loginButton.style.width = "86px";
loginButton.style.height = "40px";
loginButton.style.border = "solid 0px";
loginButton.style.borderRadius = "8px";
loginButton.style.backgroundColor = "#4E75FF";
loginButton.style.fontFamily = "Montserrat";
loginButton.style.fontSize = "16px";
loginButton.style.lineHeight = "24px";
loginButton.style.letterSpacing = "4%";
loginButton.style.fontWeight = "400px";
loginButton.style.color = "#FFFFFF";


// Добавляем обработчик события для наведения курсора
loginButton.addEventListener("mouseenter", function() {
  loginButton.style.backgroundColor = "#6C8CFF"; // Изменяем цвет на красный при наведении
});

// Добавляем обработчик события для ухода курсора
loginButton.addEventListener("mouseleave", function() {
  loginButton.style.backgroundColor = "#4E75FF"; // Возвращаем исходный цвет при уходе курсора
});
const buttonText = loginButton.textContent;

// Разделение текста кнопки на две части
const firstPart = buttonText.slice(0, 3);
const secondPart = buttonText.slice(3, 5);
loginButton.textContent = firstPart + "\u00A0" + secondPart;

// -----------------------Функціонал------------------------------------//
function sentForm(event) {
  event.preventDefault();
  const form = event.target;
  const emailInput = form.elements.email.value;
  const passwordInput = form.elements.password.value;
  const email = emailInput.trim();
  const password = passwordInput.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);
  form.reset();
}


