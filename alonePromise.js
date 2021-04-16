
// 用来解决then(函数中的promise需要获取最后resolve的值)；
// promise.then(new Promise(resolve => {
//   resolve(new Promise((resolve) => {
//     resolve('inner')
//   }))
// }) )
//用来获取内部inner值
function resolvePromise(promise2, x, resolve) {
  if (x === promise2) return;
  if(x !== null && (typeof x === 'function' || typeof x === 'object')) {
    let then = x.then;
    console.log(then)
    if(typeof then === 'function') {
      then.call(x, y => {
        console.log(y);
        resolvePromise(promise2, y, resolve);
      })
    } else {
      resolve(x);
    }
  } else {
    resolve(x);
  }
}


class myPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.onResolveCallbcaks = [];
    let resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onResolveCallbcaks.forEach(fn => fn());
      }
    }
    try{
      executor(resolve ); 
    } catch {

    }
  }


  then(onFulfilled) {
    // onFulfilled需要是函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    
    let promise2 = new myPromise((resolve) => {
      if (this.state === 'fulfilled') {
        // 异步
        setTimeout(() => {
          try{
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve);
          } catch {

          }
        }, 0);
      }


      if (this.state === 'pending') {
        this.onResolveCallbcaks.push(() => {
          setTimeout(() => {
            try{
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve);
            } catch {
  
            }
          }, 0);
        })
      }


    });
    return promise2;
  }
} 

// 返回最快完成的一个promise
myPromise.race = function(promises) {
  return new Promise((resolve) => {
    for(let i=0;i<promises.length;i++) {
      promises[i].then(resolve);
    }
  })
}

// all方法获取所有promise的结果返回
myPromise.all = function(promises) {
  let i = 0;
  let arr = [];
  function processData(index, data, resolve) {
    arr[index] = data;
    i++;
    if(i === promises.length) {
      resolve(arr)
    }
  }
  return new Promise((resolve) => {
    for(let i=0;i<promises.length;i++) {
      promises[i].then(data => {
        processData(i, data, resolve);
      })
    }
  })
}


var a = new myPromise((resolve) => {
  resolve(1)
}).then((value) => {
  console.log(value);
  return value+1;
}).then((value) => {
  console.log(value);
})

var b = new myPromise((resolve) => {
  resolve('hello')
}).then((value) => {
  return new myPromise((resolve) => {

      resolve('i am inner')

  })
}).then((value) => {
  console.log(value);
})

var arr = [new Promise(resolve => {resolve(4)}),new Promise(resolve => {resolve(5)})];

var z = myPromise.all(arr).then((value)=> {
  console.log(value);
});
console.log(z);