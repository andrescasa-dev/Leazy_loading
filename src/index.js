import { registerTarget } from "./observer";
const API_URL = "https://randomfox.ca/images/";

const btn_addImage = document.getElementById('btn_addImage');
const image_container = document.getElementById('images_container');

function createImage(){
  //creating a img node
  const img = document.createElement('img')
  const randomNumber = Math.floor(Math.random() * 124);
  img.dataset.src = `${API_URL}/${randomNumber}.jpg`;
  img.alt = "a fox";
  
  //adding the node to the DOM
  image_container.append(img);
  registerTarget(img);
}
btn_addImage.addEventListener('click', createImage);
