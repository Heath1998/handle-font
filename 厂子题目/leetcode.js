// 约瑟夫环
function circle(n, m) {
  let res = [0,0];
  for(let i=2;i<=n;i++) {
    res[i] = (res[i-1] + m) % i;
  }
}