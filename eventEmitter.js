class myEventEmitter {
  constructor() {
    this.events = {};
  }
  on (eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
  }
  emit(eventName, ...args) {
    this.events[eventName].forEach(fn => fn.apply(this, args));
  }
  off(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter(fn => fn !== callback);
  }
  once(eventName, callback) {
    const fn = () => {
      callback();
      this.off(eventName, fn);
    }
    this.on(eventName, fn);
  }
}

let a = new myEventEmitter();
var fn = (num)=> {
  console.log('test1', num);
}
a.on('test', fn)
a.emit('test', 12345678);

a.once('test:once', () => {
  console.log('test:once');
})

a.emit('test:once');
a.emit('test:once');

a.off('test', fn);
a.emit('test', 12345678);