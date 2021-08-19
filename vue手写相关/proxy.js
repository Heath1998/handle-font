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
    }
  })
}

test(dd, '0', 1);

dd[0] = 234;