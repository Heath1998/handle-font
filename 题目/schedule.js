class Scheduler {
  constructor() {
    this.arr = [];
    this.cur = [];
  }
  async add(promiseFunc){
    console.log(this.cur)
    if(this.cur.length < 2) {
      this.cur.push(1);
      return promiseFunc();
    } else {
      this.arr.unshift(promiseFunc)
    }
  }
}
const scheduler = new Scheduler();

const timeout = (time) => {
  return new Promise((r) => setTimeout(r, time));
};

const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => {
    console.log(order);
    scheduler.cur.pop();
    if(scheduler.arr.length===0) return;
    scheduler.add(scheduler.arr.pop());
  });
};

addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4); // log: 2 3 1 4