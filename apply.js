let obj = {
  name: 'jack'
}
function test(arg1, arg2, arg3) {
  console.log(this.name)   // jack
  console.log(arg1, arg2, arg3);  // 1 2 3
}


Function.prototype.myApply = function (context, args) {
  context.fn = this;
  console.log(context);
  let res;
  if (!args){
    res = context.fn();
  } else  {
    res = context.fn(...args);
  }
  delete context.fn;
  return res;
}


test.myApply(obj, [1,2,3]);
console.log(obj);