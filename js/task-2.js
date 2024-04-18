const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];
const galleryList = document.querySelector('.gallery');
const fragment = document.createDocumentFragment();
galeryListCssBilder (galleryList);

function galeryListCssBilder(galleryList){
galleryList.style.listStyle = "none";
galleryList.style.display = "flex";

galleryList.style.height = "300px";
galleryList.style.flexWrap = "wrap";
galleryList.style.gap = "48px 24px";
galleryList.style.padding = "0";
galleryList.style.margin = "0";
galleryList.style.width = "1128px";
galleryList.style.marginTop= "10%";
galleryList.style.marginLeft = "auto"; // Центрируем элемент
  galleryList.style.marginRight = "auto";
  
}
function createAndAsignCssForLi (img){
  const li = document.createElement('li');
  li.style.width = "360px";
  li.style.height ="300px";
  li.appendChild(img);
  fragment.appendChild(li);
}
images.forEach(image => {
  const img = createAndAsignCssForImg(image);
  createAndAsignCssForLi(img);
});
function createAndAsignCssForImg(image){
  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.alt;
  img.style.width = "360px";
  img.style.height ="300px";
  img.style.margin = "0";
  img.style.padding = "0";
  return img;
}
galleryList.appendChild(fragment);

