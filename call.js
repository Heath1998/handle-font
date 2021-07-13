Function.prototype.myCall = function (context, ...args) {
  let fnSymbol = new Symbol();

  context[fnSymbol] = this;
  var result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
}

// test
let obj = {
  name: 'jack'
}
function test(arg1, arg2, arg3) {
  console.log(this.name)   // jack
  console.log(arg1, arg2, arg3);  // 1 2 3
}
test.myCall(obj, 1,2,3);