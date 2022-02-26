export function myCounter(){
  let itemToCount = 0;
  return () => ++itemToCount
}

export class ObjectCounter{
  constructor(){
    this.itemToCount = 0;
  }

  add(){
    this.itemToCount++;
  }

  getCount(){
    return this.itemToCount;
  }

  reset(){
    this.itemToCount = 0;
  }
}