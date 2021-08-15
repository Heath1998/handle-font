Array.prototype.myReduce = function (...args) {
  // 处理回调类型异常
  let arr  = this;
  if (arr.length === 0 && args.length !==2) {
    throw new TypeError();
  }
  const callbackFn = args[0];
  let acc,startIndex;
  if (args.length === 2) {
    acc = args[1];
    startIndex = 0;
  } else {
    acc = arr[0];
    startIndex = 1
  }

  for (var i = startIndex, len = arr.length; i < len; i++) {
    acc = callbackFn(acc, arr[i], i, arr);
  }
  return acc;
};

let res = [11,12,13,14,15].myReduce((pre,val, index ) => {
  console.log(pre, val, index);
  return pre + val;
}, 1)

console.log(res);