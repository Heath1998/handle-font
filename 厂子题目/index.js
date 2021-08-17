// 给出data不重复且无序数组，n个数，和为sum
// function test(data, n, sum) {
//   if(data.length < n) return false;
//   var res = undefined;
//   data = data.sort((a,b) =>a-b);
//   var cur = [], state = new Array(data.length).fill(false);
//   recall(0);
//   return res;
//   function recall(index) {
//     if(cur.length === n) {
//       if(cur.reduce((init, val) => init + val,0) === sum) {
//         res = cur;
//       } else {
//         return;
//       }
//     }
//     for(let i=index;i<data.length;i++) {
//       if(state[i] === true) continue;
//       state[i] = true;
//       cur.push(data[i]);
//       recall(i+1);
//       if(res) {
//         return;
//       }
//       cur.pop();
//       state[i] = false;
//     }
//   }

// }
// const arr = [1,5,6,2,4,3];
// const a = test(arr,3,10);
// console.log(a);


// var length = 10;
// function fn() {
//  return this.length + 1;
// }
// var obj1 = {
//  length: 5,
//    test1: function() {
//      return fn()
//  }
// }
// obj1.test2 = fn;
// console.log(obj1.test1.call())
// console.log(obj1.test1())
// console.log(obj1.test2.call())
// console.log(obj1.test2())