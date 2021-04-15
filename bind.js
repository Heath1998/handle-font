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