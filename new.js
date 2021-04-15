
function myNew(fun, ...args) {
  let obj = {};
  obj.__proto__ = fun.prototype;
  let res = fun.apply(obj, args);
  return res instanceof Object ? res : obj;
}


function Animal(name) {
  this.name = name; 
}

let animal = myNew(Animal,'cat');

console.log(animal);