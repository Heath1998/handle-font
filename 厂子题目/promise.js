// u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')

// class Upromise{
//   constructor() {
//     this.promise = Promise.resolve();
//   }
//   console(val) {
//     this.promise = this.promise.then(() => {
//       console.log(val);
//     })
//     return this;
//   }
//   setTimeout(await) {
//     this.promise = this.promise.then(() => {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve();
//         }, await);
//       })
//     });
//     return this;
//   }
// }
// let u = new Upromise();
// console.log(u)
// u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner');

