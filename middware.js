const http = require('http');

function compose(middleWareList) {
  return function(ctx) {
    function dispatch(i) {
      let fn = middleWareList[i];
      if(!fn) {
        return Promise.resolve();
      }
      try{
        return Promise.resolve(fn(ctx, dispatch.bind(null,i+1)));
      }catch(err){
        return Promise.reject(err);
      }
    }

    return dispatch(0);
  };
}

class koaMiddleWare {
  constructor() {
    this.middleWareList = [];
  } 

  handleRequest(ctx, middleWareFn) {
    middleWareFn(ctx);
  }

  callback() {
    let fn = compose(this.middleWareList);
    return (req, res) => {
      let ctx = {
        req,
        res
      }
      this.handleRequest(ctx, fn);
    }
  }

  listen(...args) {
    const serve = http.createServer(this.callback());
    serve.listen(...args);
  }

  //
  use(fn) {
    this.middleWareList.push(fn);
    return this;
  }

}


let serve = new koaMiddleWare();
serve.use(async function(ctx, next) {
  console.log('fan1-head');
  await next();
  console.log('fan1-back');
});

serve.use(async function(ctx, next) {
  console.log('fan2-head');
  await next();
  console.log('fan2-back');
});



serve.listen(3000);

// module.exports = koaMiddleWare;