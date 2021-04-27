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

console.log(twoWaterfall([55,66,1,45,7,8,16]));
// console.log(twoWaterfall([7,4,1,2,3]));


