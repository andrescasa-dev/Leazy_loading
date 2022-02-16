import { registerTarget } from "./observer";
const API_URL = "https://randomfox.ca/images/";

const btn_addImage = document.getElementById('btn_addImage');
const btn_clearAll = document.getElementById('btn_clear');
let images_container = document.getElementById('images_container');

function createImageWrapper(){
  //creating a img node
  const img = document.createElement('img')
  const randomNumber = Math.floor(Math.random() * 124);
  img.dataset.src = `${API_URL}/${randomNumber}.jpg`;
  // img.alt = "a fox";

  //creating wrapper
  const imgWrapper = document.createElement('div');
  imgWrapper.style.width = "300px"
  imgWrapper.style.height = "300px"
  imgWrapper.style.borderRadius = "5px"
  imgWrapper.appendChild(img);
  imgWrapper.style.backgroundColor = "#6e6e6e6e";
  
  return imgWrapper;
}

// Agregar un cuadro gris al momento de darle a "crear una imagen" check
// Botón de "limpiar" check
// Crear reporte de "total imagenes:" "Imagenes cargadas"


// para guardar los contadores podria usar un cluster.

// crear contador de imagenes pedidas.
// 	aumenta cuando le doy al boton
// 	cuando aumenta se imprime el valor
	
// crear contador de imagenes cargas
// 	aumenta cuando se ejecuta la accion del observer
// 	cuando aumenta se imprime el valor


function addImage(ct_img){
  const imgWrapper = createImageWrapper();
  //adding to the DOM
  images_container.appendChild(imgWrapper);
  //creating a observer
  registerTarget(imgWrapper)
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
btn_clearAll.addEventListener('click', clearAll)

