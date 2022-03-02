import { registerTarget } from "./observer";
import { ObjectCounter } from "./counter";

export const img_cnt = new ObjectCounter();
export const img_load_cnt = new ObjectCounter();

const API_URL = "https://randomfox.ca/images/";
const btn_addImage = document.getElementById('btn_addImage');
const btn_clearAll = document.getElementById('btn_clear');
const bnt_add5Images = document.getElementById('btn_add5Images');
let images_container = document.getElementById('images_container');
const lbl_cnt_request = document.getElementById('cnt_requested');
const lbl_cnt_load = document.getElementById('cnt_load');

function createImageWrapper(){
  //creating a img node
  const img = document.createElement('img')
  const randomNumber = Math.floor(Math.random() * (123)) + 1;
  img.dataset.src = `${API_URL}/${randomNumber}.jpg`;

  //creating load div
  const div = document.createElement('div');
  div.className = "load_circle";

  //creating wrapper
  const imgWrapper = document.createElement('div');
  imgWrapper.className = "image_wrapper"
  imgWrapper.appendChild(div);
  imgWrapper.appendChild(img);
  
  return imgWrapper;
}



export function updateLblCounters(){
  lbl_cnt_request.textContent = img_cnt.getCount();
  lbl_cnt_load.textContent = img_load_cnt.getCount();
}

function appendImageNode(){
  //adding a imgWarper to the dom
  const imgWrapper = createImageWrapper();
  images_container.appendChild(imgWrapper);
  img_cnt.add();

  //creating a observer
  registerTarget(imgWrapper)
}

function addImage(){
  appendImageNode();
  updateLblCounters();
}

function addSomeImages(){
  for (let i = 0; i < 5; i++) {
    appendImageNode();
  }
  updateLblCounters();
}

function emptyImageContainer(){
  const imageContainer = document.createElement('div');
  imageContainer.className = "images_container"
  imageContainer.id = "images_container";
  return imageContainer
}

function clearAll(){
  //reset container images node
  const newImageContainer = emptyImageContainer();
  const parent = images_container.parentElement;
  parent.replaceChild(newImageContainer, images_container);
  images_container = newImageContainer;

  //reset counters
  img_cnt.reset();
  img_load_cnt.reset();
  updateLblCounters();
}

btn_addImage.addEventListener('click', addImage);
btn_clearAll.addEventListener('click', clearAll);
bnt_add5Images.addEventListener('click', addSomeImages)

