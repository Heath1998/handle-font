// function mySetTimeout(fn, await) {
//   let nowDate = Date.now();
//   let loop = () => {
//     let cur = Date.now();
//     if (cur - nowDate >= await) {
//       fn();
//     } else {
//       requestAnimationFrame(() => {
//         loop();
//       })
//     }
//   } 
//   requestAnimationFrame(loop);
// }

// mySetTimeout(()=> {console.log('end')}, 5000); 

// function curry(fn, args) {
//   let len = fn.length;
//   args = args || [];
//   return function() {
//     let newArgs = args.concat(Array.prototype.slice.call(arguments));
//     if (len > newArgs.length) {
//       return curry(fn, newArgs);
//     } else {
//       return fn.apply(null, newArgs);
//     }
//   }
// }

// function sum(a,b,c) {
//   return a+b+c;
// }

// let res = curry(sum);
// console.log(res(1)(2)(3));
// console.log(res(1,2)(3));
// console.log(res(1,2));

// Function.prototype.mybind = function (context, ...args) {
//   let fn = this;
//   let fNop = function() {}
//   let resFn = function (...newArgs) {
//     return fn.apply(this instanceof fNop ? this : context, [...args, ...newArgs]);
//   }
//   fNop.prototype = fn.prototype;
//   resFn.prototype = new fNop();
//   return resFn;
// }

// function hello() {
//   this.a = '123';
//   console.log(this, 'inner');
// }

// let one = hello.mybind({a:11222222,b:'123'}, 1);
// one();
// new one();
// let two = hello.bind({a:1222223, b:'456'}, 1);
// two();
// new two();


// Promise.myAll = function(promiseArr) {
//   let cur = 0;
//   let resArr = [];
//   function col(index, value, solve) {
//     cur++;
//     resArr[index] = value;
//     if (cur === promiseArr.length) {
//       solve(resArr);
//     }
//   }
//   return new Promise((resolve) => {
//     for(let i=0;i<promiseArr.length;i++) {
//       promiseArr[i].then((val) => {
//         col(i, val, resolve);
//       })
//     }
//   })
// }

// Promise.myRice = function(promiseArr) {
//   return new Promise((resolve) => {
//     for(let i=0;i< promiseArr.length;i++) {
//       promiseArr[i].then((val) => {
//         resolve(val);
//       })
//     }
//   })
// }

// let a = Promise.resolve('123');
// let b = Promise.resolve('1234567');
// Promise.myAll([a, b]).then((val) => {
//   console.log(val);
// })
// Promise.myRice([a, b]).then((val) => {
//   console.log(val);
// })


function clone(target, weakMap = new WeakMap) {
  if (typeof target === 'object') {
    let res = Array.isArray(target) ? [] : {};
    if (weakMap.has(target)) {
      return weakMap.get(target);
    }
    weakMap.set(target, res);
    for( var key in target) {

      res[key] = clone(target[key],weakMap);
    }
    return res;
  } else {
    return target;
  }
}


var a  ={hello: 123};
var b = {middle:a};

let d = clone(b);
d.abc = '1235546';
console.log(d);
console.log(b);