
let timeMap = {};
let id = 0;

function myInterval(cb, time) {
  let timer = id;
  id++;
  let fn = () => {
    cb();
    timeMap[timer] = setTimeout(() => {
      fn();
    }, time);
  }
  timeMap[timer] = setTimeout(fn, time);
  return timer;
}

myInterval(()=> {}, 300);
const myClearInterval = (id) => {
  clearTimeout(timeMap[id]) // 通过timeMap[id]获取真正的id
  delete timeMap[id]
}

let res = myInterval(()=>{console.log('123')}, 3000);
