import { img_load_cnt , updateLblCounters } from "./index";


function loadImage(entryDisplayed){
  //remove load div
  const imgWrapper = entryDisplayed.target;
  const div = imgWrapper.querySelector('div');
  div.remove();

  //get img and unobserve it
  const img = imgWrapper.querySelector('img');
  const src = img.dataset.src;
  img.src = src;
  observer.unobserve(imgWrapper);
  

  //count loaded
  img_load_cnt.add();
  updateLblCounters();

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