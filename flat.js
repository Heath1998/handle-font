// 实现flat

function flat(arr, deep) {
  let res = [];
  for(let i=0;i<arr.length;i++) {
    if (deep > 0 && Array.isArray(arr[i])) {
      res = res.concat(flat(arr[i], deep - 1));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

// console.log(flat([0,1,2,[[[3,4]]]],0));
console.log(flat([0,1,2,[[[3,4]]]],4));
// console.log(flat([0,1,2,[[[3,4]]]],2));
console.log(flat([[[3,4]]], 0))
