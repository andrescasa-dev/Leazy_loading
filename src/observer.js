function action(entryDisplayed){
  console.log('I\'m watching you: ' + entryDisplayed);
  const node = entryDisplayed.target;
  observer.unobserve(node);
}


const observer = new IntersectionObserver((entries)=>{
  entries.filter(entry => entry.isIntersecting)
  .forEach(entryDisplayed => action(entryDisplayed));
});

export const registerTarget = (target) => {
  observer.observe(target);
}