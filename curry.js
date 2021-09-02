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
// console.log(test(1)(2)(3));



const func = componse(a, b,c,d);
func('xxx');


// 这个是函数为固定参数的
function curry1(fn, args) {
  args = args || [];
  let len = fn.length;
  return function(...newArgs) {
    let curArgs = [...args, ...newArgs];
    if(curArgs.length < len) {
      return curry1(fn, curArgs);
    } else {
      return fn.apply(null, curArgs);
    }
  }
}

function sum(a, b,c) {
  return a+b+c;
}

let cur1 = curry1(sum);
console.log(cur1(1))
console.log(cur1(1)(2))
console.log(cur1(1)(2,3));

// 当想实现sum(1),sum(1)(2)为值时

function curry2(fn) {
  let args = [];
  let resFn = function(...newArgs) {
    args = [...args, ...newArgs];
    return resFn;
  }
  resFn.valueOf = function() {
    return fn(args);
  }
  return resFn;
}

function add(arr) {
  return arr.reduce((acc, val) => {
    return acc+val;
  })
}

let sum = curry2(add);

console.log(sum(1)(2) + 0);
console.log(sum(1)(2)(3));