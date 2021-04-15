function myInstanceOf(l, r) {
  var prototype = r.prototype;
  var l = l.__proto__;
  while(true) {
    if(!l) return false;
    if(l === prototype) {
      return true;
    }
    l = l.__proto__;
  }
}

console.log(myInstanceOf([], Array));  // true