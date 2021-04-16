function add(a, b) {
  var str1 = a.split('').reverse();
  var str2 = b.split('').reverse();
  
  let MaxLen = Math.max(str1.length, str2.length);

  let res = [];
  for(let i =0;i<MaxLen;i++) {
    if (str1[i] === undefined) {
      str1[i] = 0;
    } 
    if (str2[i] === undefined) {
      str2[i] = 0;
    }
    res[i] = parseInt(str1[i]) + parseInt(str2[i]); 
  }
  for(let i=0;i<MaxLen;i++) {
    if(res[i] >= 10) {
      if(res[i+1] === undefined) {
        res[i+1] = 0
      }
      res[i] -= 10;
      res[i+1] += 1;  
    }
  }
  return res.reverse().join('');
}


console.log(add('1234567','1'));