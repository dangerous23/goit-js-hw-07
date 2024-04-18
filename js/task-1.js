handleCssStyles();
function handleCssStyles(){
  const outerUl = document.getElementById("categories");
  const liWithClassItem = outerUl.querySelectorAll("li.item");
  loadFontStyles();
  outerUlBuilder(outerUl);
  logging(liWithClassItem);
  liWithClassItem.forEach((singleLiWithItemClass) => {
    const h2Tag = singleLiWithItemClass.querySelector("h2");
    const innerUl = singleLiWithItemClass.querySelector("ul");
    const innerLi = singleLiWithItemClass.querySelectorAll("ul > li");
    liWithClassItemStyleBuilder(singleLiWithItemClass.style);
    h2TagStyleBuilder(h2Tag.style);
    innerUlStyleBuilder(innerUl.style);
    innerLi.forEach((singleInnerLi)=>{
      innerLiStyleBuilder(singleInnerLi.style);
    });
  });
}
function innerUlStyleBuilder(innerUlStyle){
  innerUlStyle.width = '360px';
  innerUlStyle.padding = '0px';
}
function liWithClassItemStyleBuilder(liWithClassItemStyle){
  liWithClassItemStyle.listStyle = "none";
  liWithClassItemStyle.borderRadius = '8px';
  liWithClassItemStyle.margin = '24px';
  liWithClassItemStyle.padding = '16px';
  liWithClassItemStyle.backgroundColor = '#F6F6FE';
}

export function loadFontStyles(linkElement){
  var linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
linkElement.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap';
document.head.appendChild(linkElement);
}
function outerUlBuilder(outerUl){
  outerUl.style.borderRadius = '8px';
  outerUl.style.padding = '24px';
  outerUl.style.gap = '24px';
  outerUl.style.width = '440px';
  outerUl.style.height = '888px';
}
function h2TagStyleBuilder(h2TagStyle){
  h2TagStyle.fontFamily = "Montserrat";
  h2TagStyle.fontWeight = "600";
  h2TagStyle.fontSize = "24px";
  h2TagStyle.lineHeight = "32px";
  h2TagStyle.letterSpacing = "4%";
  h2TagStyle.color = "#2E2F42";
  h2TagStyle.margin = "0";
  h2TagStyle.marginBottom = "16px";
}
function innerLiStyleBuilder(innerLiStyle) {
  innerLiStyle.width = '344px';
  innerLiStyle.height = '40px';
  innerLiStyle.borderRadius = '4px';
  innerLiStyle.border = '1px solid #808080';
  innerLiStyle.fontFamily = "Montserrat";
  innerLiStyle.fontSize = '16px';
  innerLiStyle.lineHeight = '24px';
  innerLiStyle.letterSpacing = '4%';
  innerLiStyle.fontWeight = '400px';
  innerLiStyle.marginTop = '8px';
  innerLiStyle.listStyle = "none";
  innerLiStyle.paddingLeft = "16px";
  innerLiStyle.display = "flex";
  innerLiStyle.alignItems = "center";
}
function logging(liWithClassItem){
  console.log("Number of categories:" +liWithClassItem.length);
liWithClassItem.forEach((singleLiWithItemClass) => {
  const h2Tag = singleLiWithItemClass.querySelector("h2");
  console.log("Category: " + h2Tag.textContent);
  const innerLi = singleLiWithItemClass.querySelectorAll("ul > li");
  console.log("Elements: " + innerLi.length);
})}