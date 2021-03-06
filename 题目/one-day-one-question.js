//  给一个不重复，无序的data，取出n个数字和为sum
// 回溯法时间复杂度为O(n*子问题个数)
function selectN(data, n,sum) {
  let arr = [], state = new Array(data.length).fill(false);
  let res = undefined;
  track(0);
  return res;
  function track(index) {
    if(arr.length === n) {
      if(arr.reduce((pre, val) => pre + val,0) === sum) {
        res = arr;
        return;
      } else {
        return;
      }
    }
    for(let i= index;i<data.length;i++) {
      if(state[i] === true) continue;
      state[i] = true;
      arr.push(data[i]);
      track(i+1);
      if(res) {
        return;
      }
      arr.pop();
      state[i] = false;
    }
  }
}

// let arr = [3,5,1,7,6,9];
// console.log(selectN(arr, 3, 14));


// 最长不重复子串
function lengthSubstring(str) {
  let arr = str.split('');
  let cur = [];
  let res = [];
  let obj = {};
  let left = 0, right = 0 
  while(left <= right && right<arr.length) {
    let val = arr[right];
    if(obj[val] === undefined) {
      obj[val] = 1;
    } else {
      obj[val] = 2;
      if(res.length < cur.length) {
        res = cur.slice();
      }
    }
    cur.push(val);
    while(obj[val] === 2) {
      if (arr[left] === val) {
        obj[val] = 1;
      }
      cur.shift();
      left++;
    }
    right++;
  }
  if(cur.length > res.length) {
    res = cur.slice();
  }
  return res.join('');
}

// console.log(lengthSubstring('lllodddabcdfr'));
// console.log(lengthSubstring('lllodddabcdfr'));


// 分割数组成两个最接近的数组，如两列瀑布流
function twoWaterfall(arr) {
  let sum = Math.floor(arr.reduce((pre,val) => pre + val, 0) / 2);
  let dp = new Array(arr.length+1).fill(0).map(() => new Array(sum+1).fill(0));
  let state = new Array(arr.length+1).fill(0).map(() => new Array(sum+1).fill([]));
  for(let i=0;i<=arr.length;i++) {
    dp[i][0] = 0;
    state[i][0] = [];
  }
  for(let j=1;j<=sum;j++) {
    dp[0][j] = 0; 
    state[0][j] = [];
  }
  for(let i=1;i<=arr.length;i++)
    for(let j = 1;j<=sum;j++) {
      if(arr[i-1] <= j) {
        if(dp[i-1][j-arr[i-1]] + arr[i-1] > dp[i-1][j]) {
          dp[i][j] = dp[i-1][j-arr[i-1]] + arr[i-1];
          state[i][j] = state[i-1][j-arr[i-1]].slice();
          state[i][j].push(arr[i-1])
        } else {
          dp[i][j] = dp[i-1][j];
          state[i][j] = state[i-1][j].slice();
        }
        // dp[i][j] = Math.max(dp[i-1][j-arr[i-1]] + arr[i-1], dp[i-1][j]);
      } else {
        dp[i][j] = dp[i-1][j];
        state[i][j] = state[i-1][j].slice();
      }

    }
  return state[arr.length][sum];
}

// console.log(twoWaterfall([55,66,1,45,7,8,16]));
// console.log(twoWaterfall([7,4,1,2,3]));


// function makeAlmostEqual (arr, part) {
//   let orderedArr = arr.sort((a,b) => b - a)
//   let res = Array(part).fill(void(0)).map(() => [])
//   orderedArr.forEach(value => {
//     let minArrIndex = getMinArrIndex(res)
//     res[minArrIndex].push(value)
//   })
//   return res
// }
  
// function getSum (arr) {
//   return arr.reduce((sum, v) => sum + v, 0)
// }
  
// function getMinArrIndex (arrs) {
//   let minArrIndex = 0
//   arrs.forEach((arr, index) => {
//   if (getSum(arrs[minArrIndex]) > getSum(arrs[index])) {
//     minArrIndex = index
//   }
//   })
//   console.log(arrs)
//   return minArrIndex
// }
  
// var a = makeAlmostEqual([1, 65, 4, 32, 95, 33, 9, 3], 3);
// var a = makeAlmostEqual([55,66,1,45,7,8,16], 3);
// console.log(a);



// 瀑布流用排序算法，可以分任意个part，核心贪心算法
function  waterFall(arr, part) {
  arr = arr.sort((a, b) => b - a);
  let res = new Array(part).fill(0).map(() => []);
  arr.forEach((val) => {
    let midIndex = 0;
    res.forEach((nums,resIndex)=> {
      if(res[midIndex].reduce((pre, val) => pre+val, 0) > res[resIndex].reduce((pre, val) => pre+val , 0)) {
        midIndex = resIndex;
      }
    })
    res[midIndex].push(val);
  });
  return res;
}

// var a = waterFall([1, 65, 4, 32, 95, 33, 9, 3], 3);
// // var a = makeAlmostEqual([55,66,1,45,7,8,16], 3);
// console.log(a);

//  排序离数字N最近的数
function sortN(arr, N){
  return arr.sort((a, b) => {
    return Math.abs(a-N) - Math.abs(b-N);
  })
}

// console.log(sortN([4,5,2,67,1,9], 8));

// 返回二进制1的个数
function binaryOneNum(num) {
  return num.toString(2).replace(/0/g, '').length;
}

// var a=1
// console.log(binaryOneNum(9));
// console.log(a.toString(2));

//  获取10-100的随机数10个不相等的并且排序
function getRandom() {
  let res = [];
  for(let i=0;i<10;i++) {
    let ran = Math.floor((Math.random()*(91))) + 10;
    res.indexOf(ran) === -1 ? res.push(ran) : i--;
  }
  return res.sort((a,b) => a-b);
}

// console.log(getRandom());
// 找出现次数大于n/2次的数
function findMode(arr) {
  let sum = 1;
  let mid = arr[0];
  for(let i=1;i<arr.length;i++) {
    if(sum === 0) {
      sum++;
      mid = arr[i];
    }
    else if (arr[i] === mid) {
      sum++;
    } else {
     sum--;
    }
  }
  return mid;
}


// console.log(findMode([2,2,2,4,4,5]))
// O(n)
// 因为真实遍历次数是n + n/2 + n/4 +...2;等比求和为2n即时间复杂度O（n）；
function findMaxK(arr, k, left, right) {
  if(left < right) {
    let mid = partition(arr,left,right);
    console.log(arr);
    console.log(mid);
    if(mid === k-1) {
      return arr[mid];
    } else {
      return mid > k - 1 ? findMaxK(arr, k, left,mid-1): findMaxK(arr,k,mid+1,right);
    }
  }
}

function partition(arr,left,right) {
  let pivot = left;
  let pivotValue = arr[right];
  for(let i=left;i<right;i++) {
    if(arr[i] > pivotValue) {
      [arr[i],arr[pivot]] = [arr[pivot], arr[i]];
      pivot++;
    }
  }
  [arr[pivot], arr[right]] = [arr[right],arr[pivot]];
  return pivot;
}
// var arr = [4,2,1,7,8];
// console.log(findMaxK(arr,2,0,arr.length-1));

function adjustHeap(arr, i, len) {
  let right = i*2+1;
  let left = i*2;
  let mid = i;
  if(left < len && arr[mid] < arr[left]) {
    mid = left;
  } 
  if(right < len && arr[mid] < arr[right]) {
    mid = right;
  }
  [arr[mid],arr[i]] = [arr[i],arr[mid]];
  if(mid !== i && mid < len) {
    adjustHeap(arr, mid, len);
  }
}


function  findKHeap(arr, k) {
  let n = Math.floor(arr.length/2);
  for(let i=n;i>=0;i--) {
    adjustHeap(arr, i, arr.length);
  }
  console.log(arr);
  for(let j=0;j<k;j++) {
    [arr[0], arr[arr.length-1-j]] = [arr[arr.length-1-j], arr[0]];
    adjustHeap(arr, 0, arr.length-1-j);
  }
  console.log(arr[arr.length-k]);
  return arr[arr.length-k];
} 


// var arr = [4,2,1,7,8];
// console.log(findKHeap(arr,2));


function divideSort(arr, left, right) {
  if(left < right) {
    let mid = Math.floor( (left + right) / 2);
    console.log(mid);
    console.log(left,right)
    divideSort(arr, left, mid);
    divideSort(arr, mid+1, right);
    mergeSort(arr,left,right, mid);
  }
}

function mergeSort(arr, left, right, mid) {
  let i=left,j=mid+1;
  let cur = left;
  let instead = [];
  while(i<=mid&&j<=right) {
    if(arr[i] > arr[j]) {
      instead[cur++] = arr[j++];
    } else {
      instead[cur++] = arr[i++];
    }
  }
  while(i<=mid) {
    instead[cur++] = arr[i++];
  }
  while(j<=right) {
    instead[cur++] = arr[j++];
  }
  for(let z=left;z<=right;z++) {
    arr[z] = instead[z];
  }
}

// var arr = [2,1,8,6,4,6,0,9,8];
// divideSort(arr,0,arr.length-1);
// console.log(arr);