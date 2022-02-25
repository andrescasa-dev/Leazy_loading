import { registerTarget } from "./observer";
import { ObjectCounter } from "./counter";

const API_URL = "https://randomfox.ca/images/";
const btn_addImage = document.getElementById('btn_addImage');
const btn_clearAll = document.getElementById('btn_clear');
let images_container = document.getElementById('images_container');
export const img_ct = new ObjectCounter();
export const imgLoaded_ct = new ObjectCounter();


function createImageWrapper(){
  //creating a img node
  const img = document.createElement('img')
  const randomNumber = Math.floor(Math.random() * 124);
  img.dataset.src = `${API_URL}/${randomNumber}.jpg`;
  img.alt = "a fox";

  //creating wrapper
  const imgWrapper = document.createElement('div');
  imgWrapper.style.width = "250px"
  imgWrapper.style.height = "250px"
  imgWrapper.style.borderRadius = "5px"
  imgWrapper.appendChild(img);
  imgWrapper.style.backgroundColor = "#6e6e6e6e";
  
  return imgWrapper;
}

function addImage(){
  //adding a imgWarper to the dom
  const imgWrapper = createImageWrapper();
  images_container.appendChild(imgWrapper);
  
  //Count a new img
  img_ct.add();

  //creating a observer
  registerTarget(imgWrapper)
  
  console.log(
    `🌑 img requested: ${img_ct.getCount()}
🟢 img loaded: ${imgLoaded_ct.getCount()}`);
}

function emptyImageContainer(){
  const div = document.createElement('div');
  div.className = "images_container"
  div.id = "images_container";
  return div
}

function clearAll(){
  const newImageContainer = emptyImageContainer();
  const parent = images_container.parentElement;
  parent.replaceChild(newImageContainer, images_container);
  images_container = newImageContainer;
}
btn_addImage.addEventListener('click', addImage);
btn_clearAll.addEventListener('click', clearAll);

