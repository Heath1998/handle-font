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

var a = new Promise((resolve) => {
  resolve(1)
});

var b = a.then(() => {
  return new Promise((resolve) => {
    resolve('hello');
  })
});

b.then((value) => {
  console.log(value);
})

