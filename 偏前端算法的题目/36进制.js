
function threeSix(str1, str2) {
  function change(aloneStr) {
    if (!aloneStr) {
      return 0;
    }
    if(/[0-9]/.test(aloneStr)) {
      return parseInt(aloneStr);
    } else {
      return  10 + aloneStr.charCodeAt() - 'a'.charCodeAt();
    }
  }

  function ascToChar(num) {
    if (num < 10) {
      return num + '';
    } else {
      return String.fromCharCode(num - 10 + 'a'.charCodeAt());
    }
  }
  let len = Math.max(str1.length, str2.length);
  let arr1 = str1.split('').reverse();
  let arr2 = str2.split('').reverse();
  let res = [];
  let c = 0;
  for(let i=0;i<len;i++) {
    let total = change(arr1[i]) + change(arr2[i]) + c;
    res[i] = total % 36;
    c = total >= 36 ? 1 : 0;
  }
  if (c === 1) {
    res.push(1);
  }
  return res.reverse().map(val => ascToChar(val)).join('');
}


console.log(threeSix('11b', '2x'));