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
// var data = [
//   {userId: 8,  title: 'title1'},
//   {userId: 11, title: 'other'},
//   {userId: 15, title: null},
//   {userId: 19, title: 'title2'}
// ];
// var find = function(origin) {
//   // your code are here...
//   class inner{
//     constructor(data) {
//       this.curData = data;
//     }
//     where(checkObj) {
//       for(var key in checkObj) {
//         this.curData = this.curData.filter(obj => checkObj[key].test(obj[key]));
//       }
//       return this;
//     }
//     orderBy(id, type) {
//       if (type === 'desc') {
//         this.curData = this.curData.sort((aObj,bObj) => {
//           return aObj[id] - bObj[id];
//         })
//       }
//       return this.curData
//     }
//   }

//   return new inner(origin);
// }


// // 查找 data 中，符合条件的数据，并进行排序
// var result = find(data).where({
//   'title': /\d$/
// }).orderBy('userId', 'desc');

// console.log(result);// [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];


// function repeat(func, times, wait) {
//   // TODO
//   let i = 0;
//   function fn() {
//     if (i <4) {
//       i++;
//       alert('helloworld');
//       setTimeout(fn, wait);
//     }
//   }
//   setTimeout(fn, wait);
// }

// // // 调用这个 repeatFunc ("hellworld")，会 alert 4次 helloworld，每次间隔3秒
// const repeatFunc = repeat(alert, 4, 3000);


// let timeMap = {};
// let id = 0;

// function myInterval(fn, await) {
//   id++;
//   let curFn = () => {
//     fn();
//     timeMap[id] = setTimeout(curFn, await);
//   }
//   timeMap[id] = setTimeout(curFn, await);
//   return id;
// }

// function myclearInterval(timerId) {
//   return clearTimeout(timeMap[timerId]);
// }

// let one = myInterval(() => {
//   console.log('2');
// }, 2000);

// let two = myclearInterval(one);

// var _createClass = function () {
//   function defineProperties(target, props) {
//       for (var i = 0; i < props.length; i++) {
//           var descriptor = props[i];
//           descriptor.enumerable = descriptor.enumerable || false;
//           descriptor.configurable = true;
//           if ("value" in descriptor) descriptor.writable = true;
//           Object.defineProperty(target, descriptor.key, descriptor);
//       }
//   }

//   return function (Constructor, protoProps, staticProps) {
//       if (protoProps) defineProperties(Constructor.prototype, protoProps);
//       if (staticProps) defineProperties(Constructor, staticProps);
//       return Constructor;
//   };
// }();

// function _possibleConstructorReturn(self, call) {
//   if (!self) {
//       throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//   }
//   console.log(call, 'innertwo');
//   return call && (typeof call === "object" || typeof call === "function") ? call : self;
// }

// function _inherits(subClass, superClass) {
//   if (typeof superClass !== "function" && superClass !== null) {
//       throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
//   }
//   subClass.prototype = Object.create(superClass && superClass.prototype, {
//       constructor: {
//           value: subClass,
//           enumerable: false,
//           writable: true,
//           configurable: true
//       }
//   });
//   if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
// }

// function _classCallCheck(instance, Constructor) {
//   if (!(instance instanceof Constructor)) {
//       throw new TypeError("Cannot call a class as a function");
//   }
// }

// var Parent = function () {
//   function Parent(name, age) {
//       _classCallCheck(this, Parent);

//       this.name = name;
//       this.age = age;
//   }

//   _createClass(Parent, [{
//       key: "speakSomething",
//       value: function speakSomething() {
//           console.log("I can speek chinese");
//       }
//   }]);

//   return Parent;
// }();

// Parent.height = 12;

// Parent.prototype.color = 'yellow';

//定义子类，继承父类

// var Child = function (_Parent) {
//   _inherits(Child, _Parent);

//   function Child(name, age) {
//       _classCallCheck(this, Child);

//       let midres =  _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name, age));
//       console.log('inner',( Object.getPrototypeOf(Child)).call(this, name, age));
//       console.log('inner',typeof Child.__proto__);
//       console.log(midres);
//       midres.filed4 = 1;

//       return midres;
//     }

//   _createClass(Child, [{
//       key: "coding",
//       value: function coding() {
//           console.log("I can code JS");
//       }
//   }]);

//   return Child;
// }(Parent);

// Child.width = 18;


// var c = new Child("job", 30);
// console.log(c);
// c.coding();



// function tets(martix) {

// }

// dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);


// Function.prototype.myBind = function (context, ...args) {
//   let fn = this;
//   function fNop() {}

//   function resFn(...newArgs) {
//     return fn.apply(this instanceof fNop ? this : context, [...args, ...newArgs]);
//   }

//   fNop.prototype = fn.prototype;
//   resFn.prototype = new fNop();
//   return resFn;
// } 

// let id = 0;
// let timeMap = {};

// function myInterval(cb, time) {
//   let timer = id
//   id++;
//   const fn = () => {
//     cb();
//     timeMap[timer] = setTimeout(fn, time);
//   }
//   timeMap[timer] = setTimeout(fn, timeout);
//   return timer;
// }

// const myClearInterval = (timerId) => {
//   clearTimeout(timeMap[timerId]);
// }


// function curry(fn) {
//   let params = [];
//   function sum(...args) {
//     params = [...params, ...args];
//     return sum;
//   }
//   sum.toString = function() {
//     fn(params);
//   }
//   return sum;
// }

// function add(arr) {
//   return arr.reduce((acc, val) => {
//     return acc+val;
//   })
// }

// let sum = curry(add);

// console.log(sum(1)(2));

// function sum(){
//   var cur = [].slice.call(arguments).reduce(function(a,b){return a+b;},0);
//   function innerSum(){
//     var next = [].slice.call(arguments).reduce(function(a,b){return a+b;},0);
//     cur += next;
//     return innerSum;
//   }
//   innerSum.toString = function(){
//     return cur;
//   }
//   return innerSum;
// }
// console.log(sum(1,2,3));       //6
// console.log(sum(2,3)(2));      //7
// console.log(sum(1)(2)(3)(4));  //10
// console.log(sum(2)(4,1)(2));   //9


// 这个是函数为固定参数的
// function curry1(fn, args) {
//   args = args || [];
//   let len = fn.length;
//   return function(...newArgs) {
//     let curArgs = [...args, ...newArgs];
//     if(curArgs.length < len) {
//       return curry1(fn, curArgs);
//     } else {
//       return fn.apply(null, curArgs);
//     }
//   }
// }

// function sum(a, b,c) {
//   return a+b+c;
// }

// let cur1 = curry1(sum);
// console.log(cur1(1))
// console.log(cur1(1)(2))
// console.log(cur1(1)(2,3));


// 当想实现sum(1),sum(1)(2)为值时

// function curry2(fn) {
//   let args = [];
//   let resFn = function(...newArgs) {
//     args = [...args, ...newArgs];
//     return resFn;
//   }
//   resFn.valueOf = function() {
//     return fn(args);
//   }
//   return resFn;
// }

// function add(arr) {
//   return arr.reduce((acc, val) => {
//     return acc+val;
//   })
// }

// let sum = curry2(add);

// console.log(sum(1)(2) + 0);
// console.log(sum(1)(2)(3));


// 字节面试题，控制并发，并实现以下函数
// 实现scheduler的思想，控制并发
class Scheduler {
  constructor() {
    this.max = 2;
    this.pendingList = [];
    this.task = [];
  }
  add(promiseCreator) {
    if (this.task.length < this.max) {
      this.runWork(promiseCreator)
    } else {
      this.pendingList.push(promiseCreator);
    }
   }

   runWork(promiseCreator) {
    this.task.push(promiseCreator);
    promiseCreator().then(() => {
      this.task.splice(this.task.indexOf(promiseCreator), 1);
      if (this.pendingList.length) {
        this.runWork(this.pendingList.shift());
      } 
    })
  }
  // ...
}
   
const timeout = time => new Promise(resolve => {
  setTimeout(resolve, time);
})
  
const scheduler = new Scheduler();
  
const addTask = (time,order) => {
  scheduler.add(() => timeout(time).then(()=>console.log(order)))
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');