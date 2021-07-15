var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(xhr.respone);
  }
}

//异步
xhr.open('POST', 'https://www.baidu.com/', true);
xhr.send();