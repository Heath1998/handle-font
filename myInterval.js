function myInterval(fn, time) {
  setTimeout(() => {
    fn()
    myInterval(fn, time);
  }, time);
}
