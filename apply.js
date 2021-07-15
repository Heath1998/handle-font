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

Function.prototype.esApply = function(obj, args) {
  let oself = this;
  obj.fn = oself;
  let val;
  let cur = 'val = obj.fn(';
  for(let i=0; i<args.length;i++) {
    cur += (args.length - 1 === i ? `args[${i}]` : `args[${i}],`); 
  }
  cur += ')'; 
  eval(cur);
  // let val = obj.fn();
  delete obj.fn;
  return val;
}

function test() {
  for(var a of arguments) {
    console.log(a);
  }
  return arguments[0];
}

var res = test.esApply({}, [1,2,3,{hell:'fas'}]);
console.log(res);