import { imgLoaded_ct, img_ct } from "./index";

function loadImage(entryDisplayed){
  const imgWrapper = entryDisplayed.target;
  const img = imgWrapper.querySelector('img');
  const src = img.dataset.src;
  img.src = src;
  observer.unobserve(imgWrapper);
  
  //count loaded
  imgLoaded_ct.add();

  console.log(
    `🌑 img requested: ${img_ct.getCount()}
🟢 img loaded: ${imgLoaded_ct.getCount()}`);
}

const observer = new IntersectionObserver((entries)=>{
  const entry = entries[0]; //there is always only one entry
  if(entry.isIntersecting){
    loadImage(entry);
  }
});

export const registerTarget = (target) => {
  observer.observe(target);
}