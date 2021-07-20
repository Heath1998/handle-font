// class obj  {
//   constructor(){

//     this.state = 'pending',
//     this.b = () => {
//       console.log(this.state);
//     }
//   }  
//   a  = () => {
//     test((fn) => {
//       console.log(this.state);
//       fn();
//     })
//   } 
// }

// function test(fn) {

//   fn(function() {
//     console.log('inner');
//   })
// }

// var a =new obj();
// a.b()
// a.a()

// var a = new Promise((resolve) => {
//   resolve(1)
// });

// var b = a.then(() => {
//   return new Promise((resolve) => {
//     resolve('hello');
//   })
// });

// b.then((value) => {
//   console.log(value);
// })


// for(var i=0;i<5;i++) {
//   (function(j) {
//     setTimeout(() => {
//       console.log(j);
//     },1000 * j);
//   })(i)

// }


// for(var i= 0;i<8;i++) {
//   console.log('123345');
//   console.log('asdsadsa');
// }
// let a = 2;
// console.log(a);

// function test() {
//   console.log('123');
// }

function resolvePromise(promise2, x, resolve) {
  if (x === promise2) {
    return ;
  }
  if (typeof x === 'object') {
    let then = x.then;
    if(typeof then === 'function') {
      then.call(x, y=>{
        resolvePromise(x, y, resolve);
      })
    } else {
      resolve(x);
    }
  } else {
    resolve(x);
  }
}


class myPromise{
  constructor(excutor) {
    this.status = 'pending';
    this.value = undefined;
    this.callbacks = [];

    let resolve  = (value) => {
      if(this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.callbacks.forEach(fn => fn());
      }
    }
    excutor(resolve);
  }


  then(onFulfilled) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val; 
    let promise2 = new myPromise((resolve) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          let val = onFulfilled(this.value);
          resolvePromise(promise2, val,resolve);
        },0);
      } else if(this.status === 'pending') {
        this.callbacks.push(() => {
          setTimeout(() => {
            let val = onFulfilled(this.value);
            resolvePromise(promise2, val,resolve);
          },0)
        })
      }
    })
    return promise2;
  }
}


// let a = new myPromise((resolve) => {
//   resolve('fanzehong');
// }).then((val) => {
//   console.log(val);
//   // let z = 12312
//   let z = new myPromise((c) => {
//     c('last')
//   });
//   console.log(z);
//   return z;
// }).then((m) => {
//   console.log(m);
// })

class myEventEmitter{
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [];
      this.events[eventName].push(callback);
    }
  }
  emit(eventName, ...args) {
    this.events[eventName].forEach(fn => fn.apply(this, args));
  }
  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(fn => fn!==callback);
    }
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

// function dealVersion(arr) {
//   let ver = arr.map(val => val.split('.'));
//   ver.sort((a, b) => {
//     if (a[0] === b[0] ) {
//       if (a[1] === b[1]) {
//         return a[2] < b[2] ? -1 : 1;
//       } else {
//         return a[1] < b[1] ? -1 : 1;
//       }
//     } else {
//       return a[0] < b[0] ? -1 : 1;
//     }
//   });
//   return ver.map(val => val.join('.'));
// }

// console.log(dealVersion(['2.1.2','1.1.1','1.0.0','0.21.211','0.211.211']));

// var cc= ['2','1','12312','12'].sort((a,b) => {return a < b ? -1 : 1});
// console.log(cc);

// function debounce(fn, wait) {
//   let timer;
//   return function() {
//     let args = arguments;
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//       // clearTimeout(timer);
//     })
//   }
// }

// function throttle(fn, wait) {
//   let timer;
//   return function() {
//     let args = arguments;
//     if (!timer) {
//       timer = setTimeout(() => {
//         fn.apply(this, args);
//         timer = null;
//       }, wait);
//     }
//   }
// }

// var b = throttle((a) => {console.log('fanzeh',a)}, 1000);
// b(123);
// b(123);
// b(123);

// let ccc = setTimeout(() => {

// },0)

// let c = /as/g;
// let a;
// while(a = c.exec('asdsdssdsas')){
//   console.log(a instanceof Array);
//   console.log(a.index);
//   console.log(a);
// }

// let m = 'asddddasd'.match(c);
// console.log(m);

// console.log(c.test('asddsa'));

// console.log('dasaaaaaaaaaaaaaasa'.replace(c, '12'))

// //第k大的数

// function getK(arr, left, right, k) {
//   if (left <= right) {
//     let mid = pariation(arr, left, right);
//     console.log(mid);
//     console.log(arr);
//     if (mid === k-1) {
//       return arr[mid];
//     } else {
//       return mid > k-1 ? getK(arr, left, mid-1,k) :getK(arr, mid+1,right,k);
//     }
//   }
// }

// function pariation(arr,left, right) {
//   let pivotIndex = left;
//   let pivotValue = arr[right];
//   for(let i=left;i<right;i++) {
//     if (arr[i] > pivotValue) {
//       [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
//       pivotIndex++;
//     }
//   }
//   [arr[pivotIndex],arr[right]] = [arr[right], arr[pivotIndex]];
//   return pivotIndex;
// }

// console.log(getK([3,1,5,4,6],0,4,2));

// var obj = {
//   b: '456'
// }

// function test() {
//   this.a = '123';
//   console.log(this.b);
// }
// Function.prototype.bind1 = function (oThis) {
//   // oThis = null;
//   if (typeof this !== "function") {
//       // 与 ECMAScript 5 最接近的
//       // 内部 IsCallable 函数
//       throw new TypeError(
//           "Function.proptotype.bind  -  what is trying " +
//           "to be bound is not callable"
//       );
//   }
//   var aArgs = Array.prototype.slice.call(arguments, 1),
//       fToBind = this, // foo函数体
//       fNOP = function () {},
//       fBound = function () {
//           // this instanceof fNOP === true时,说明返回的fBound被当做new的构造函数调用
          
//           return fToBind.apply(
//               (
//                   this instanceof fNOP ? this : oThis
//               ),
//               aArgs.concat(
//                   Array.prototype.slice.call(arguments)
//               )
//           );
//       };

//   // 维护原型关系
//   if (this.prototype) {
//       // Function.prototype doesn't have a prototype property
//       fNOP.prototype = this.prototype;
//   }
//   // 下行的代码使fBound.prototype是fNOP的实例,因此
//   // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,
//   // 新对象的__proto__就是fNOP的实例
//   fBound.prototype = new fNOP();
//   return fBound;
// }
// var newTest = test.bind1(obj);
// test.prototype.hello = '11111';

// var res = new newTest();
// console.log(res);




// }

// function debounce(fn, wait) {
//   let timer;
//   return function() {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     let context = this;
//     timer = setTimeout(() => {
//       fn();
//       timer = null;
//     }, wait);
//   }
// }

// var num = 55;

// function Obj (){
//     this.num = 1,
//     this.getNum = function(){
//         console.log(this.num);
//     },
//     this.getNumLater = function(){
//         setTimeout(() => {
//             console.log(this.num);
//         }, 3000)    //箭头函数中的this总是指向外层调用者，也就是Obj
//     }
// }
// var obj = new Obj; 
// obj.getNum();//1　　打印的是obj.num，值为1
// obj.getNumLater()//1　　打印的是obj.num，值为1

// var d ={num: 'fanze'}

// var c = obj.getNumLater;
// c();
// d.c = c;
// d.c();

// function deepClone(target, map = new WeakMap()) {
//   if (typeof target === 'object') {
//     let resTarget = target instanceof Array ? [] : {};
//     if (map.get(target)) {
//       return map.get(target);
//     }
//     map.set(target, resTarget);
//     for(var key in target) {
//       resTarget[key] = deepClone(target[key], map);
//     }
//     return resTarget;
//   } else {
//     return target;
//   }
// }


// var a = {
//   one: {
//     hello:123,
//     helloArray: [1,2,3],
//   },
//   two: 2,
// }

// a.three = a;

// var b = deepClone(a);
// console.log(b);
// console.log(a);

function resolvePromise2(promise2, x, resolve) {
  if (promise2 === x) {
    return;
  } 
  if (typeof x !== null && typeof x === 'object') {
    let then = x.then;
    if (typeof then === 'function') {
      then.call(x, y=> {
        resolvePromise2(promise2, y, resolve);
      })
    } else {
      resolve(x);
    }
  } else {
    resolve(x);
  }
}

class Promise2 {
  constructor(excutor) {
    this.callbacks = [];
    this.state = 'pending';
    this.value = undefined;
    let resolve = (value) => {
      if (this.state === 'pending'){
        this.value = value;
        this.state = 'fulfilled';
        this.callbacks.forEach(fn => fn());
      }
    }
    excutor(resolve);
  }

  then(onFulfilled) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : onFulfilled => onFulfilled;
    let promise2 = new Promise2((resolve) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          let val = onFulfilled(this.value);
          resolvePromise2(promise2, val, resolve);
        },0);
      } else if (this.state === 'pending') {
        this.callbacks.push(() => {
          setTimeout(() => {
            let val = onFulfilled(this.value);
            resolvePromise2(promise2, val, resolve);
          },0);
        })
      }
    })
    return promise2;
  }
}

let sada = new Promise2((resolve) => {
  resolve('fanzehong');
}).then((val) => {
  console.log(val);
  // let z = 12312
  let z = new Promise2((c) => {
    c('last')
  });
  console.log(z);
  return z;
}).then((m) => {
  console.log(m);
})
a.three = a;

// var b = deepClone(a);
// console.log(b);
// console.log(a);


var name = 'window'; 

var A = {
   name: 'A',
   sayHello: function(){
     console.log(this.name, 'outter');
      var s = () => console.log(this.name)
      s();
   }
}

var sayHello = A.sayHello;
A.sayHello();
sayHello();// 输出A 

var B = {
   name: 'B'
}
B.sayHello = sayHello;

B.sayHello();
sayHello.call(B); //还是A
sayHello.call(); //还是
var b = deepClone(a);
console.log(b);
// console.log(a);
