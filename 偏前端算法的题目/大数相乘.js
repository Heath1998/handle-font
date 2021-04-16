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