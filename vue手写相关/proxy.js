let o = {
  a: '123',
  b: [{name:1},{name:2}]
}

let dd = [1,2,3,4,5,6];
function test(obj,key, value) {

  Object.defineProperty(obj, key, {
    get() {
      console.log(value, 'get')
      return value;
    },
    set(newValue) {
      value = value;
      console.log(newValue)
const obj = {
  name: 'app',
  age: '18',
  a: {
      b: 1,
      c: 2,
  },
}
const p = new Proxy(obj, {
  get(target, propKey, receiver) {
      console.log('你访问了' + propKey);
      return Reflect.get(target, propKey, receiver);
  },
  set(target, propKey, value, receiver) {
      console.log('你设置了' + propKey);
      console.log('新的' + propKey + '=' + value);
      Reflect.set(target, propKey, value, receiver);
  }
});
// p.age = '20';
console.log(p.age);
// p.newPropKey = '新属性';
// console.log(p.newPropKey);
// p.a.d = '这是obj中a的属性';
// console.log(p.a.d);


let target = {
  a: 123
}

function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    get() {
      console.log('get',value);
      return value;
    },
    set(newValue) {
      value =newValue;
      console.log('set',value);
      return value;
    }
  })
}

test(dd, '0', 1);

dd[0] = 234;
def(target, 'a', 123);
target.a;
target.a = 123;
