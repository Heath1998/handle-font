function debounce(fn, wait) {
  let timeout = null;
  return function() {
    let args = arguments;
    let context = this;
    if(timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}

function throttle(fn, wait) {
  let timeout = null;
  return function() {
    let args = arguments;
    let context = this;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        fn.apply(context, args);
      }, wait);
    } 
  }
}