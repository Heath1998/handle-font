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


function lengthSubstring(str) {
  let arr = str.split('');
  let cur = [];
  let res = [];
  let obj = {};
  let left = 0, right = 0 
  while(left <= right && right<arr.length) {
    let val = arr[left];
    if(obj[val] !== 1) {
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

console.log(lengthSubstring('loddda'));