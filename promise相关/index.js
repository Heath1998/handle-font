// const promise1 = () => Promise.resolve(1);
// const promise2 = () => 
//   new Promise(resolve => {
//     setTimeout(() => {resolve(2)}, 2000)
// })

// const promise3 = () => 
// new Promise(resolve => {
//   setTimeout(() => {resolve(3);}, 3000);
// })

// const promiseList = [promise1, promise2, promise3];

// function promiseChain(fnArr) {
//   let promiseArr = fnArr.map(fn => fn().then((val) => {console.log(val)}));
//   return Promise.all(promiseArr);
// }

// promiseChain(promiseList).then(() => {console.log('所有promise执行完毕')});
// 期望输出
// 1//立即输出
// 2//2s后输出
// 3//3s后输出
//  所有promise执行完毕。 

// --------------------------------------------------------

//字节面试题，控制并发，并实现以下函数
// 实现scheduler的思想，控制并发
// class Scheduler {
//   constructor() {
//     this.running = 0;
//     this.pendingList = [];
//   }
//   add(promiseCreator) {
//     if (this.running < 2) {
//       this.running++;
//       promiseCreator().then(v => this.run());
//     } else {
//       this.pendingList.push(promiseCreator);
//     }
//    }

//   run() {
//     this.running--;
//     if (this.pendingList.length > 0) {
//       let cur = this.pendingList.shift();
//       this.running++;
//       cur().then(v => this.run());
//     }
//   }
//   // ...
// }
   
// const timeout = time => new Promise(resolve => {
//   setTimeout(resolve, time);
// })
  
// const scheduler = new Scheduler();
  
// const addTask = (time,order) => {
//   scheduler.add(() => timeout(time).then(()=>console.log(order)))
// }

// addTask(1000, '1');
// addTask(500, '2');
// addTask(300, '3');
// addTask(400, '4');


// --------------------------------------------------------

//如何实现 promise.map，限制 promise 并发数

// 大体实现数组映射，并且返回一个promise是all的合，限制并发数量
// pMap([1, 2, 3, 4, 5], x => Promise.resolve(x + 1), 3);

function pMap(list, mapper, count) {
  return new Promise((resolve) => {
    let index = 0;
    let res = [];
    let len = list.length;
    let num = 0
    function next() {
      let curIndex = index;
      index++;
      Promise.resolve(list[curIndex]).then(v => mapper(v)).then(o => {
        res[curIndex] = o;
        num++;
        if (index < len) {
          next();
        } else if (num === len){
          resolve(res);
        }
      })
    }

    for(let i=0;i<count && i<len;i++) {
      next();
    }
  })
}

pMap([1, 2, 3, 4, 5, 6, 7, 8], x => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(x);
      resolve(x);
    }, 1000)
  })
}, 3)