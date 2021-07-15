let mysetTimeout = function(fn, await, ...args) {
  let start = Date.now();
  let loop = () => {
    let timer = window.requestAnimationFrame(loop);
    let now = Date.now();
    if(now - start >=await) {
      window.cancelAnimationFrame(timer);
      fn.apply(this, args);
    }
  }
  window.requestAnimationFrame(loop);
}

function showName(){ 
  console.log("Hello")
}
let timerID = mysetTimeout(showName, 1000);