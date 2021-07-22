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

let data = {
  name:'xbd',
  age:18,
  job:'CTO'
}
let templateStr = 'i am {{name}}},age {{age}},job {{job}} ';
function templateFunc(str,data){
         let computed = str.replace(/\{\{(\w+)\}\}/g,function (match,key) {
           console.log()
           return data[key];
         })
         return computed;
       }
console.log(templateFunc(templateStr,data));
