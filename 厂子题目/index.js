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




// fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']

// function fn(arr) {
//   let res = [];
//   function backTracking(curRes, index) {
//     if (curRes.length === arr.length) {
//       res.push(curRes.join(''));
//       return;
//     }
//     for(let i = 0;i<2;i++) {
//       curRes.push(arr[index][i]);
//       backTracking(curRes, index+1);
//       curRes.pop();
//     }
//   }
//   backTracking([], 0);
//   return res;
// }
// let a = fn([['a', 'b'], ['n', 'm'], ['0', '1']]);
// console.log(a);

// f(['ab', 'c', 'd', 'ab', 'c']) => ['ab1', 'c1', 'd', 'ab2', 'c2']

// function f(arr) {
//   let map = new Map();
//   let res = [];
//   for(let i=0;i<arr.length;i++) {
//     if (map.has(arr[i])) {
//       let cur = map.get(arr[i]) + 1;
//       map.set(arr[i], cur);
//       res.push(arr[i] + cur);
//     } else {
//       map.set(arr[i], 1);
//       res.push(arr[i] + 1);
//     }
//   }
//   return res;
// }
// console.log(f(['ab', 'c', 'd', 'ab', 'c']))

// 输入 n，给出 1~n 的所有排列，不要求输出有序子集
// 即 输入 3，输出 1，2，3，12，13，23，123
// 有没有大佬会用java实现一下给个答案？


function count(nums) {

  let res = [];
  function dfs(index, curRes) {
    if (index === nums+1) {
      res.push(curRes.slice());
      return;
    }
    for(let i = 0;i<=1;i++) {
      if (i === 0) {
        dfs(index+1,curRes);
      } else {
        curRes.push(index);
        dfs(index+1,curRes);
        curRes.pop();
      }
    }
  }

  dfs(1, []);
  return res;
}

console.log(count(3));