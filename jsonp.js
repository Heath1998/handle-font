/**
* jsonp获取请求数据
* @param {string}url
* @param {object}params
* @param {function}callback
*/
function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
      let script = document.createElement('script');
      params = JSON.parse(JSON.stringify(params));
      let arrs = [];
      for (let key in params) {
          arrs.push(`${key}=${params[key]}`);
      }
      arrs.push(`callback=${callback}`);
      script.src = `${url}?${arrs.join('&')}`;
      document.body.appendChild(script);
      window[callback] = function (data) {
          resolve(data);
          document.body.removeChild(script);
      }
  })
}
