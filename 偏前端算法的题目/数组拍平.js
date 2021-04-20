function flatten(nums) {
  let res = [];
  for(let i=0;i<nums.length;i++) {
    if(Array.isArray(nums[i])) {
      res = res.concat(flatten(nums[i]));
    } else {
      res.push(nums[i]);
    }
  }
  return res;
}

console.log(flatten([1,[1,2,[2,4]],3,5]));  // [1, 1, 2, 2, 4, 3, 5]