// 最大连续子数组和
function maxSubArray(nums) {
  let max = nums[0];
  let dp = new Array(nums.length).fill(-Number.MAX_VALUE);
  dp[0] = nums[0];
  for(let i=1;i<nums.length;i++) {
    dp[i] = Math.max(dp[i-1]+nums[i], nums[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
}

let test = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(test));