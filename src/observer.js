function loadImage(entryDisplayed){
  console.log('I\'m watching you: ' + entryDisplayed);
  const img = entryDisplayed.target;
  const src = img.dataset.src
  img.src = src;
  observer.unobserve(img);
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