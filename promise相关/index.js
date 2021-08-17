const promise1 = () => Promise.resolve(1);
const promise2 = () => 
  new Promise(resolve => {
    setTimeout(() => {resolve(2)}, 2000)
})

const promise3 = () => 
new Promise(resolve => {
  setTimeout(() => {resolve(3);}, 3000);
})

const promiseList = [promise1, promise2, promise3];

function promiseChain(fnArr) {
  let promiseArr = fnArr.map(fn => fn().then((val) => {console.log(val)}));
  return Promise.all(promiseArr);
}

promiseChain(promiseList).then(() => {console.log('所有promise执行完毕')});
// 期望输出
// 1//立即输出
// 2//2s后输出
// 3//3s后输出
//  所有promise执行完毕。 