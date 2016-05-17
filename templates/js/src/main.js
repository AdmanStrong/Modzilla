"use strict";
(function(w,d){
  let doToAll = function (elems, fn) {
    var len = elems.length,
        i = -1;
    while (++i < len) {
      fn(elems[i]);
    }
  },
  addClass = function (elem, cn) {
    if (elem.className.indexOf(cn) < 0) {
      elem.className += ' ' + cn;
    }
  },
  removeClass = function (elem, cn) {
    var classname = elem.className,
        rgx = new RegExp(`\s*${cn}`);
    elem.className = classname.replace(rgx, '');
  },
  toggleClass = function (elem, cn) {
    if (elem.className.indexOf(cn) > -1) {
      removeClass(elem, cn);
    } else {
      addClass(elem, cn);
    }
  },
  getRequest = (url, next) => {
    let req = new XMLHttpRequest();

    req.open("GET", url)
    req.setRequestHeader("Content-type", "application/json;charset=UTF-8")

    req.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        let resp = req.response && req.response.length ? req.response : req.responseText
        if(next) next(resp)
      } else {
        //fail
      }
    }
    req.send()
  },
  postRequest = (url, content, next) => {
    let req = new XMLHttpRequest();

    req.open("POST", url)
    req.setRequestHeader("Content-type", "application/json;charset=UTF-8")

    req.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        let resp = req.response && req.response.length ? req.response : req.responseText
        if(next) next(resp)
      } else {
        //fail
      }
    }
    req.send(content)
  }

}(window, document))
