// 大数相加
function add(num1, num2) {
  num1 = num1.split('').reverse();
  num2 = num2.split('').reverse();
  let maxlen = Math.max(num1.length, num2.length);
  let res = new Array(maxlen+1).fill(0);
  for(let i=0;i<maxlen;i++) {
    if(num1[i] ===undefined) {
      num1[i] = 0;
    }
    if(num2[i] === undefined) {
      num2[i] = 0;
    }
    res[i] = parseInt(num1[i]) + parseInt(num2[i]);
  }
  for(let i=0;i<maxlen;i++) {
    if(res[i] >= 10) {
      res[i+1] += 1;
      res[i] = res[i]%10; 
    }
  }
  return res.reverse().join('').replace(/^0+/, '');
}

// console.log(add('123456','999999'));

//  大整数相乘
function multipy(num1,num2) {
  num1 = num1.split('').reverse();
  num2 = num2.split('').reverse();
  let len = num1.length + num2.length;
  let res = new Array(len).fill(0);
  for(let i=0;i<num1.length;i++) 
    for(let j=0;j<num2.length;j++) {
      res[i+j] += (num1[i] * num2[j]);
    }

  for(let i=0;i<len-1;i++) {
    res[i+1] += Math.floor(res[i]/10);
    res[i] = res[i]%10;
  }
  // console.log(res);
  return res.reverse().join('').replace(/^0+/, '');
}

// console.log(multipy('999990','123456'));

//数组拍平
function flatten(arr) {
  var res = [];
  for(let i=0;i<arr.length;i++) {
    console.log(arr[i])
    if(Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

// console.log(flatten([1,[2,3,[4,5,6]],9]));

//深克隆
function clone(obj) {
  let res = Array.isArray(obj) ? [] : {};
  let keys = Object.keys(obj);
  keys.forEach((key) => {
    if(typeof obj[key] === 'object') {
      res[key] = clone(obj[key]);
    } else {
      res[key] = obj[key];
    }
  })
  return res;
}
// var a ={hello:{data:123}};
// var b = clone(a);
// console.log(b);
// b.hello.data =456;
// console.log(b);
// console.log(a);


function resolvePromise(promise2, x, resolve) {
  if (promise2 === x) return;
  if(x !== null && (typeof x === 'function' || typeof x === 'object')) {
    let then = x.then;
    if(then === 'function') {
      then.call(x, y => {
        resolvePromise(promise2, y, resolve);
      })
    } else {
      resolve(x);
    }
  } else {
    resolve(x);
  }
}

class myPromise{
  constructor(executor) {
    this.state = 'pending';
    this.onResolveCallback = [];
    this.value = ''
    let resolve = (value) => {
      if(this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value;
        this.onResolveCallback.forEach(fn => fn());
      }
    }
    try{
      executor(resolve)
    } 
    catch{

    }
  }
  then(onFulFilled) {
    onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : onFulFilled => onFulFilled;
    let promise2 = new myPromise((resolve) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          let x = onFulFilled(this.value);
          resolvePromise(promise2, x, resolve);
        },0)
      }

      if (this.state === 'pending') {
        this.onResolveCallback.push(() => {
          setTimeout(() => {
            let x = onFulFilled(this.value);
            resolvePromise(promise2, x, resolve);
          },0)
        })
      }
    });
    return promise2;
  }
}


myPromise.race = function(promises) {
  return new Promise(resolve => {
    for(let i=0;i<promises.length;i++) {
      promises[i].then(resolve);
    }
  })
}

myPromise.all = function(promises) {
  let res = [];
  let x = 0;
  return new myPromise(resolve => {
    for(let i=0;i<promises.length;i++) {
      promises[i].then(val => {
        res[i] = val;
        x++;
        if(x === promises.length) {
          resolve(res);
        }
      });
    }
  })
}



// var arr = [new myPromise(resolve => {setTimeout(() => {
//   resolve(1)
// },1000) }), new myPromise(resolve => resolve(2)), new myPromise(resolve => resolve(3))];

// // myPromise.race(arr).then(val => console.log(val));
// myPromise.all(arr).then((val) => {
//   console.log(val);
// })

// new Promise((resolve,reject) => {
//   reject(1);
// }).then(()=> {},(value)=> {
//   console.log('reject');
  
// }).then(()=> {
//   console.log('last-resolve');
// }) 

// new myPromise((resolve) => {
//   console.log('begin')
//   resolve('hello')
// }).then(val=>{
//   console.log(val);
//   return 2;
// }).then(val=>{
//   console.log(val);
// })

Function.prototype.myApply = function (context, args) {
  context.fn = this;
  let res;
  if(args) {
    res = context.fn(...args);
  } else {
    res = context.fn();
  }
  delete context.fn;
  return res;
}

// var obj = {
//   test: function() {
//     console.log(this.num);
//   }
// }
// var obj1 = {
//   num:123
// }
// bj.test.myApply(obj1);

Function.prototype.myBind = function(context, ...args) {
  let fn = this;
  return (...newArgs) => fn.apply(context, [...args, ...newArgs]);
}

// var a = {
//   b: 123,
//   fn1: function(name,hello) {
//     console.log(this.b);
//     console.log(name, hello);
//   }
// }

// var b = {
//   b: 'hello'
// }

// var newFn1 = a.fn1.myBind(b, 'testName','hlllll');
// newFn1();

Function.prototype.call = function(context, ...args) {
  context.fn = this;
  let res = context.fn(...args);
  delete context.fn;
  return res;
}

function debounce(fn, wait) {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}


function throttle(fn, wait) {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    if(!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context,args);
      }, wait)
    }
  }
}

class myEventEmitter{
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    this.events[eventName] = this.events[eventName] ? this.events[eventName] : [];
    this.events[eventName].push(callback);
  }
  emit(eventName, ...args) {
    this.events[eventName].forEach(fn => fn(...args));
  }
  off(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter(fn => fn !== callback)
  }
  once(eventName, callback) {
    let fn = () => {
      callback();
      this.off(eventName, fn);
    }
    this.on(eventName, fn);
  }
}

// let a = new myEventEmitter();
// var fn = (num)=> {
//   console.log('test1', num);
// }
// a.on('test', fn)
// a.emit('test', 12345678);

// a.once('test:once', () => {
//   console.log('test:once');
// })

// a.emit('test:once');
// a.emit('test:once');

// a.off('test', fn);
// a.emit('test', 12345678);

function instance(l, r) {
  let prototype = r.prototype;
  while(1) {
    if(l.__proto__  === prototype) {
      console.log(prototype)
      return true;
    }
    if(!l) {
      console.log(l);
      return false;
    }
    l = l.__propto__;
  }
}

var a = {tste:123};
instance(a, Object)