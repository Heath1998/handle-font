// class obj  {
//   constructor(){

//     this.state = 'pending',
//     this.b = () => {
//       console.log(this.state);
//     }
//   }  
//   a  = () => {
//     test((fn) => {
//       console.log(this.state);
//       fn();
//     })
//   } 
// }

// function test(fn) {

//   fn(function() {
//     console.log('inner');
//   })
// }

// var a =new obj();
// a.b()
// a.a()

// var a = new Promise((resolve) => {
//   resolve(1)
// });

// var b = a.then(() => {
//   return new Promise((resolve) => {
//     resolve('hello');
//   })
// });

// b.then((value) => {
//   console.log(value);
// })


// for(var i=0;i<5;i++) {
//   (function(j) {
//     setTimeout(() => {
//       console.log(j);
//     },1000 * j);
//   })(i)

// }

function debounce(fn, wait) {
  let timer;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    let context = this;
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, wait);
  }
}

var num = 55;

function Obj (){
    this.num = 1,
    this.getNum = function(){
        console.log(this.num);
    },
    this.getNumLater = function(){
        setTimeout(() => {
            console.log(this.num);
        }, 3000)    //箭头函数中的this总是指向外层调用者，也就是Obj
    }
}
var obj = new Obj; 
// obj.getNum();//1　　打印的是obj.num，值为1
// obj.getNumLater()//1　　打印的是obj.num，值为1

var d ={num: 'fanze'}

var c = obj.getNumLater;
c();
d.c = c;
d.c();
