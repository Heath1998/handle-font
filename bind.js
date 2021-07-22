var a = {
  b: 123,
  fn1: function(name,hello) {
    console.log(this.b);
    console.log(name, hello);
  }
}

var newFn1 = a.fn1.bind(a, 'testName');

newFn1('testHello');

Function.prototype.newBind = function(context ,...args) {
  return (...newArgs) => this.apply(context, [...args, ...newArgs]);
}

var newBind = a.fn1.newBind(a, 'testNewBindName');

newBind('testNewBindHello')



Function.prototype.myBind2 = function(context, ...args) {
  let fn = this;
  let fBound = function(...newArgs) {
    return fn.apply(this instanceof fn ? this : context, [...args, ...newArgs]);
  }
  fBound.prototype = fn.prototype;
  return fBound;
}


Function.prototype.myBind3 = function(context, ...args) {
  let selfFn = this;
  let fONP = function() {};
  function fBound(...newArgs) {
    return selfFn.apply(this instanceof fONP ? this: context, [...args, ...newArgs]);
  }
  fONP.prototype = selfFn.prototype;
  fBound.prototype = new fONP();
  return fBound;
}

