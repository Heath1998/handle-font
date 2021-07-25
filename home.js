// function testThis() {
//   console.log(this);
//   let a = () => {console.log(this.one)}
//   return a;
// }

// let testA = {
//   one: 'testA'
// }
// let testB = {
//   one: 'testB'
// }

// let testC = {
//   one: 'testC'
// }

// let resThis = testThis.call(testA);
// let resThisB = testThis.call(testB);
// resThis();

// let resThisC = testThis.bind(testC)();

// resThisC();

// let data = {
//   name:'xbd',
//   age:18,
//   job:'CTO'
// }
// let templateStr = 'i am {{name}}},age {{age}},job {{job}} ';
// function templateFunc(str,data){
//          let computed = str.replace(/\{\{(\w+)\}\}/g,function (match,key) {
//            console.log()
//            return data[key];
//          })
//          return computed;
//        }
// console.log(templateFunc(templateStr,data));


// function bigAdd(str1, str2) {
//   let arr1 = str1.split('').reverse();
//   let arr2 = str2.split('').reverse();
//   let len = Math.max(arr1.length, arr2.length);
//   let res = [];
//   console.log(arr1,arr2);
//   for(let i=0;i<len;i++) {
//     let a = arr1[i] || 0;
//     let b = arr2[i] || 0;
//     let total =  (a-0) + (b-0)+(res[i]||0);
//     res[i] = total % 10;
//     res[i+1] = total >=10 ? 1 : 0;
//   }
//   console.log(res);
//   return res.reverse().join('').replace(/^0/, '');
// }

// console.log(bigAdd('999999999','33333'));



// function bigMult(str1, str2) {
//   let arr1 = str1.split('').reverse().map(val => parseInt(val));
//   let arr2 = str2.split('').reverse().map(val => parseInt(val));
//   let n = arr1.length+arr2.length;
//   let res = new Array(n).fill(0);
//   for(let i=0;i<arr1.length;i++) {
//     for(let j=0;j<arr2.length;j++) {
//       res[i+j] += (arr1[i] * arr2[j]); 
//     }
//   }
//   for(let i =0;i<n-1;i++) {
//     res[i+1] += (Math.floor(res[i] / 10));
//     res[i] = res[i] %10;
//   }
//   return res.reverse().join('').replace(/^0/, '');
// }

// console.log(bigMult('12345', '54321'));
// let name = '123';
// let value = '123';
// let a = "${name}: ${value}";
// function template(str, obj) {
//   return str.replace(/\$\{(\w+)\}/g, function(match,key) {
//     return eval(key);
//   })
// }

// console.log(template(a, {name:'test',value: 'hello'}))
// var sStr='讨论一下正则表达式中的replace的正则表达式用法';
// let dd = sStr.replace(/(正则).+?(式)/g,function() {
//     console.log(arguments[0]);
//     return arguments[0] + 'a';
// });
// console.log(dd);


// 约定：
// title数据类型为String
// userId为主键，数据类型为Number
var data = [
  {userId: 8,  title: 'title1'},
  {userId: 11, title: 'other'},
  {userId: 15, title: null},
  {userId: 19, title: 'title2'}
];
var find = function(origin) {
  // your code are here...
  function inner(data) {

  }
}


// 查找 data 中，符合条件的数据，并进行排序
var result = find(data).where({
  'title': /\d$/
}).orderBy('userId', 'desc');

console.log(result);// [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];


function repeat(func, times, wait) {
  // TODO
  setTimeout(() => {
    if ()
  })
}

// 调用这个 repeatFunc ("hellworld")，会 alert 4次 helloworld，每次间隔3秒
const repeatFunc = repeat(alert, 4, 3000);