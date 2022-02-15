function action(entryDisplayed){
  console.log('I\'m watching you: ' + entryDisplayed);
  const node = entryDisplayed.target;
  observer.unobserve(node);
}

const observer = new IntersectionObserver((entries)=>{
  const entry = entries[0]; //there is always only one entry
  if(entry.isIntersecting){
    action(entry);
  }
});

export const registerTarget = (target) => {
  observer.observe(target);
}