function deepClone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    let resTarget = target instanceof Array ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, resTarget);
    for(var key in target) {
      resTarget[key] = deepClone(target[key], map);
    }
    return resTarget;
  } else {
    return target;
  }
}


var a = {
  one: {
    hello:123,
    helloArray: [1,2,3],
  },
  two: 2,
}

a.three = a;