// let currying = (fn, args) => {
//   let len = fn.length;
//   args = args || [];
//   return function () {
//     let newArgs = args.concat(Array.prototype.slice.call(arguments));
//     if (newArgs.length < len) {
//       return currying.call(this, fn, newArgs);
//     } else {
//       return fn.apply(this, newArgs);
//     }
//   }
// }

// let test = currying((a,b,c) => {
//   return a+b+c;
// });
// console.log(test(1)(2)(3));



// const func = componse(a, b,c,d);
// func('xxx');


function curry(add) {
  let args = [];
  function test(...newArgs) {
    args = [...args, ...newArgs];
    return test;
  }
  test.valueOf = function() {
    return add(args);
  };
  return test;
}

function add(arr) {
  return arr.reduce((acc, val) => {
    return acc + val;
  })
}

let sum = curry(add);

console.log(sum(1)(2)(3) + 0);