function multiply(num1, num2) {
  let res = [];
  for(let i=num1.length-1;i>=0;i--) 
    for(let j = num2.length-1;j>=0;j--) {
      let index1 = i + j;
      let index2 = i + j + 1;
      let sum = num1[i] * num2[j] + (res[index2] || 0);
      res[index1] = Math.floor(sum / 10) + (res[index1] || 0);
      res[index2] =  sum%10;
    }

  return res.join('').replace(/^0+/,'');
}

var a = multiply('789','98765');
console.log(a);

var multiply2 = function(num1, num2) {
  if(num1=='0'||num2=='0')
      return '0';
  let len1 = num1.length;
  let len2 = num2.length;
  let res = new Array(len1+len2).fill(0);
  num1 = num1.split('').reverse();
  num2 = num2.split('').reverse();
  for(let i=0;i<len1;++i)
      for(let j=0;j<len2;++j)
      {
          res[i+j]+=num1[i]*num2[j];
      }
  for(let i=0;i<len1+len2-1;++i)
  {
      res[i+1] += Math.floor(res[i]/10);
      res[i] = res[i]%10;
  }
  return res.reverse().join('').replace(/^0+/,'');
};