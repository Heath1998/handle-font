// // 1,Array,url;
// // 2.2数量
// // // 3.回调函数。

// // function check(brr) {
// //   if (brr.length === 0 ) return true;
// //   return false;
// // }

// // function control(arr, total, fn, res = []) {

// //   for(let i=0;i<arr.length;i++) {
// //     if (res.length < total &&  arr[i] !== undefined) {
// //       let cur = axios(arr[i]);
// //         res.push(cur);
// //       arr[i] = undefined;
// //       cur.then(() => {
// //         res.pop();
// //         if (check(res)) {
// //           fn();
// //         } else {
// //           control(arr,total, fn, res);
// //         }
// //       })
// //     }
// //   }
// // }

// // function test(arr, total, fn) {
// //   arr.then(() => {

// //   })
// // }


// class EventEmitter{
//   constructor() {
//     this.events = {}
//   }
//   on(name, fn) {
//     if (this.events[name]) {
//       this.events[name] = [fn];
//     } else {
//       this.events[name].push(fn);
//     }
//   }
//   emit(name) {
//     this.events[name].forEach((curFn) => curFn());
//   }
//   off(name, fn) {
//     this.events[name] = this.events[name].filter(curFn => curFn !== fn);
//   }
//   once(name, fn) {
//     let curFn = () => {
//       fn();
//       this.off(name, curFn);
//     }
//     this.on(name, curFn);
//   }
// }

// 给定一个非空数组，找出出现次数最多的数字
// 如：[4, 12, 8, 99, 4, 16, 35, 8]，输出4和8


// function findMaxNumFromArray(array) {
//   // TODO 代码实现
//   let map = {};
//   for(var i=0;i<array.length;i++) {
//     let cur = array[i];
//     if (map[cur] === undefined) {
//       map[cur] = 1;
//     } else {
//       map[cur]++;
//     }
//   }
//   let res = [];
//   let max = -1;
//   console.log(map);

//   for(var key in map) {
//     if (max < map[key]) {
//       max = map[key];
//       res = [key];
//     } else if (max === map[key]) {
//       res.push(key);
//     }
//   }
//   res.forEach((val) => {
//     console.log(val);
//   })
// }

// let nums = [4, 12, 8, 99, 4, 16, 35, 8]
// findMaxNumFromArray(nums);
// // 输出4和8

// 数组中第k大的数
function findK(arr, K, left,right) {
  let par = parition(arr, left,right);
  if (par === K-1) {
    return arr[par];
  } else {
    return par < K-1 ? findK(arr, K,par+1, right) : findK(arr,K, left,par-1);
  }
}

function parition(arr, left, right) {
  let last = right;
  let pValue = arr[last];
  let par = left;
  console.log(left);
  console.log(right);
  for(let i =left;i<right;i++) {
    if (arr[i] >  pValue) {
      [arr[i], arr[par]] = [arr[par],arr[i]];
      par++;
    }
  }
  [arr[par],arr[last]] = [arr[last], arr[par]];
  console.log(arr);
  return par;
}

let nums = [2,3,1,5,3,6,7];
console.log(findK(nums, 2, 0, nums.length-1));