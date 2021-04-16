

function deepClone(obj) {
  // 先判断是对象还是数组
  let copy = obj instanceof Array ? [] : {};
  var keys = Object.keys(obj);
  keys.forEach((key) => {
    copy[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]; 
  })

  return copy;
}


var a = JSON.stringify({hell:{day:123}});
console.log(a);

var b = JSON.parse(a);
console.log(b);

var c = {
  hello: {
    data: 123
  }
}
var d = deepClone(c);

console.log(d);
console.log(c);
d.hello.data = 345;
console.log(d);
console.log(c);


var obj = {
  one:123
}

var fn = function() {
  console.log(this.one);
}

fn.call(obj)