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


// function clone(target, weakMap = new WeakMap) {
//   if (typeof target === 'object') {
//     let res = Array.isArray(target) ? [] : {};
//     if (weakMap.has(target)) {
//       return weakMap.get(target);
//     }
//     weakMap.set(target, res);
//     for( var key in target) {
//       res[key] = clone(target[key],weakMap);
//     }
//     return res;
//   } else {
//     return target;
//   }
// }


// var a  ={hello: 123};
// var b = {middle:a};

// let d = clone(b);
// d.abc = '1235546';
// console.log(d);
// console.log(b);

// function myInstance(l,r) {
//   l = l.__proto__;
//   r= r.prototype;
//   while(l) {
//     if (l === r) {
//       return true;
//     }
//     l = l.__proto__;
//   }
//   return false;
// }

// let a ={};
// console.log(myInstance({}, Array));



// function *hello() {
//   yield 2;
//   yield 3;
// }

// let a = hello();
// console.log(a);
// let b = a.next();
// console.log(b);
// let c = a.next();
// console.log(c);
// console.log(a.next());

// function last() {
//   last();
// }

// last();

// console.log(isNaN(parseInt('asdas21312')));


// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4) {
//     console.log(xhr.responseText);
//   } 
// }

// xhr.open('GET', 'https://www.baidu.com/');

// xhr.send();

// function resolvePromise(promise2, x, resolve) {
//   if (promise2 === x) {
//     return;
//   }
//   if (typeof x === 'object') {
//     let then = x.then;
//     if (typeof then === 'function') {
//       then.call(x, (y) => {
//         resolvePromise(x, y, resolve);
//       })
//     } else {
//       resolve(x);
//     }
//   } else {
//     resolve(x);
//   }
// }

// class myPromise{
//   constructor(executor) {
//     this.status = 'pending';
//     this.callBacks = [];
//     this.value = undefined;
//     let resolve = (value) => {
//       if (this.status === 'pending') {
//         this.status = 'fulfilled';
//         this.value = value
//         this.callBacks.forEach(fn => fn());
//       }
//     }
//     executor(resolve);
//   }
//   then(onFulfilled) {
//     onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    
//     let promise2 = new myPromise((resolve) => {
//       if (this.status === 'pending') {
//         this.callBacks.push(() => {
//           setTimeout(() => {
//             let x = onFulfilled(this.value);
//             resolvePromise(promise2 ,x, resolve);
//           }, 0);
//         })
//       } else if (this.status === 'fulfilled') {
//         setTimeout(() => {
//           let x = onFulfilled(this.value);
//           resolvePromise(promise2 ,x, resolve);
//         }, 0);
//       }
//     })
//     return promise2;
//   }
// }


// let a = new myPromise((resolve) => {
//   resolve('123');
// })

// a.then((val) => {
//   console.log(val);
//   return new myPromise((resolve) => {
//     resolve('test2');
//   });
// }).then(val2 => {
//   console.log(val2);
// })


// myPromise.race = function(promiseArr) {
//   return new Promise((resolve) => {
//     for(let i=0;i<promiseArr.length;i++) {
//       promiseArr[i].then((value) => {
//         resolve(value);
//       })
//     }
//   })
// }

// myPromise.all = function(promiseArr) {
//   let total = 0;
//   let resArr = [];
//   function compiste(index, value, resolve) {
//     resArr[index] = value;
//     total++;
//     if (total === promiseArr.length) {
//       resolve(resArr);
//     }
//   }
//   return newPromise(resolve => {
//     for(let i=0;i<promiseArr.lenghth;i++) {
//       promiseArr[i].then((val) => compiste(i, val, resolve));
//     }
//   })
// }

// Function.myApply = function(context, ...args) {
//   let symbol = Symbol();
//   context[symbol] = this;
//   let res = context[symbol](...args);
//   delete contetx[symbol];
//   return res;
// }


// Function.prototype.mybind = function (context, ...args) {
//   let FNOP = function() {}
  
//   let fn = this;
//   FNOP.prototype = fn.prototype;
//   let res = function(...newArgs) {
//     return fn.apply(this instanceof FNOP ? this: context, [...args, ...newArgs]);
//   }
//   res.prototype = new FNOP();
//   return res;
// }


// function curry(fn, args) {
//   let len = fn.length;
//   args = args || [];
//   return function(...innerArgs) {
//     let newArgs = [...args, ...innerArgs];
//     if (newArgs.length < len) {
//       return curry(fn, newArgs);
//     } else {
//       return fn.apply(this, newArgs);
//     }
//   }
// }


// let sum = (a,b) => {
//   return a+b;
// }
// let res = curry(sum);

// console.log(res(1,2));


// function throttle(fn, await) {
//   let timer = null;
//   let context = this;
//   return function() {
//     if (!timer) {
//       setTimeout(() => {
//         fn.apply(context, args);
//         timer = null;
//       }, await);
//     }
//   } 
// }



// class myPromise{
//   constructor(excutor) {
//     this.callbacks = [];
//     this.status = 'pending';
//     this.value = '';
//     let resolve = (value) => {
//       if (this.status === 'pending') {
//         this.status = 'fulfilled';
//         this.value = value;
//         this.callbacks.forEach(fn => fn());
//       }
//     }
//     excutor(resolve);
//   }

//   then(onfulFn) {
//     onfulFn = typeof onfulFn === 'function' ? onfulFn : val => val;

//     let promise2 = new myPromise((resolve) => {
//       if (this.status === 'pending') {
//         this.callbacks.push(() => {
//           setTimeout(() => {
//             let value = onfulFn(this.value);
//             resolve(value);
//           },0)
//         })
//       }
//       if (this.status === 'fulfilled') {
//         setTimeout(() => {
//           let value = onfulFn(this.value);
//           resolve(value);
//         }, 0);
//       }
//     });
//     return promise2;
//   }
// }

