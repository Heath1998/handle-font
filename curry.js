let currying = (fn, args) => {
  let len = fn.length;
  args = args || [];
  return function () {
    let newArgs = args.concat(Array.prototype.slice.call(arguments));
    if (newArgs.length < len) {
      return currying.call(this, fn, newArgs);
    } else {
      return fn.apply(this, newArgs);
    }
  }
}

let test = currying((a,b,c) => {
  return a+b+c;
});
console.log(test(1)(2)(3));