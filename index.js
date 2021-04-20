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
    this.status = 'pending';
    this.onResolveCallback = [];
    this.value = ''
    let resolve = (value) => {
      if(this.status === 'pending') {
        this.status = 'fulfilled'
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
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          let x = onFulFilled(this.value);
          console.log('inner',x);
          resolvePromise(promise2, x, resolve);
        },0)
      }

      if (this.status === 'pending') {
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


// new Promise((resolve,reject) => {
//   reject(1);
// }).then(()=> {},(value)=> {
//   console.log('reject');
  
// }).then(()=> {
//   console.log('last-resolve');
// }) 

new myPromise((resolve) => {
  console.log('begin')
  resolve('hello')
}).then(val=>{
  console.log(val);
  return 2;
}).then(val=>{
  console.log(val);
})