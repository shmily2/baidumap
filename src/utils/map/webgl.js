window.TILE_VERSION = {
  ditu: {
    normal: { version: "088", updateDate: "20210406" },
    satellite: { version: "009", updateDate: "20210406" },
    normalTraffic: { version: "081", updateDate: "20210406" },
    satelliteTraffic: { version: "083", updateDate: "20210406" },
    mapJS: { version: "104", updateDate: "20210406" },
    satelliteStreet: { version: "083", updateDate: "20210406" },
    earthVector: { version: "001", updateDate: "20210406" },
  },
  webapp: {
    high_normal: { version: "001", updateDate: "20210406" },
    lower_normal: { version: "002", updateDate: "20210406" },
  },
  api_for_mobile: {
    vector: { version: "002", updateDate: "20210406" },
    vectorIcon: { version: "002", updateDate: "20210406" },
  },
};
window.MSV = {};
window.BMAP_AUTHENTIC_KEY = "PfVKGB9TGeuWXd7KBfaGVykbZjoNlv2V";
window.BMapGL = window.BMapGL || {};
(function(bp, eB) {
  var D = D || { version: "20150702", emptyFn: function() {} };
  (function() {
    D._log = [];
    var i = 0;
    var T = {};
    D.BaseClass = function(hS) {
      T[(this.hashCode = hS || D.BaseClass.guid())] = this;
    };
    D.BaseClass.guid = function() {
      return "mz_" + (i++).toString(36);
    };
    D.BaseClass.create = function() {
      var hS = new D.BaseClass();
      hS.decontrol();
      return hS;
    };
    var e = (D.instance = D.I = function(hS) {
      return T[hS];
    });
    D.BaseClass.prototype.dispose = function() {
      if (this.hashCode) {
        delete T[this.hashCode];
      }
      for (var hS in this) {
        if (typeof this[hS] != "function") {
          delete this[hS];
        }
      }
    };
    D.BaseClass.prototype.getHashCode = function() {
      if (!this.hashCode) {
        T[(this.hashCode = D.BaseClass.guid())] = this;
      }
      return this.hashCode;
    };
    D.BaseClass.prototype.decontrol = function() {
      delete T[this.hashCode];
    };
    D.BaseClass.prototype.toString = function() {
      return "[object " + (this._className || "Object") + "]";
    };
    D.BaseClass.prototype._wlog = function(hT, hU) {
      var hS = D._log;
      if (hS.length > 100) {
        hS.reverse().length = 50;
        hS.reverse();
      }
      hS[hS.length] =
        "[" +
        hT +
        "][" +
        (this._className || "Object") +
        " " +
        this.hashCode +
        "] " +
        hU;
    };
  })();
  Function.prototype.inherits = function(hS, T) {
    var e,
      hT,
      hV = this.prototype,
      hU = function() {};
    hU.prototype = hS.prototype;
    hT = this.prototype = new hU();
    if (typeof T == "string") {
      hT._className = T;
    }
    for (e in hV) {
      hT[e] = hV[e];
    }
    this.prototype.constructor = hV.constructor;
    hV = hU = null;
    return hT;
  };
  D.BaseEvent = function(e, i) {
    this.type = e;
    this.returnValue = true;
    this.target = i || null;
    this.currentTarget = this.srcElement = null;
    this.cancelBubble = false;
    this.domEvent = null;
  };
  D.BaseClass.prototype.on = D.BaseClass.prototype.addEventListener = function(
    T,
    i
  ) {
    if (typeof i !== "function") {
      return this._wlog(
        "error",
        "addEventListener:" + i + " is not a function"
      );
    }
    if (!this._listeners) {
      this._listeners = {};
    }
    var e = this._listeners;
    if (T.indexOf("on") !== 0) {
      T = "on" + T;
    }
    if (typeof e[T] !== "object") {
      e[T] = {};
    }
    var hS = i.hashCode || D.BaseClass.guid();
    i.hashCode = hS;
    if (e[T][hS]) {
      this._wlog("warning", "repeat key:" + hS);
    }
    e[T][hS] = i;
  };
  D.BaseClass.prototype.off = D.BaseClass.prototype.removeEventListener = function(
    T,
    i
  ) {
    if (typeof i == "function") {
      i = i.hashCode;
    } else {
      if (typeof i !== "string" && typeof i !== "undefined") {
        return;
      }
    }
    if (!this._listeners) {
      this._listeners = {};
    }
    if (T.indexOf("on") != 0) {
      T = "on" + T;
    }
    var e = this._listeners;
    if (!e[T]) {
      return;
    }
    if (i === undefined) {
      e[T] = {};
      return;
    }
    if (e[T][i]) {
      delete e[T][i];
    }
  };
  D.BaseClass.prototype.fire = D.BaseClass.prototype.dispatchEvent = function(
    hS
  ) {
    if (!this._listeners) {
      this._listeners = {};
    }
    var T,
      e = this._listeners,
      hT = hS.type;
    hS.target = hS.srcElement = hS.target || hS.srcElement || this;
    hS.currentTarget = this;
    if (typeof this[hT] == "function") {
      this[hT](hS);
    }
    if (typeof e[hT] == "object") {
      for (T in e[hT]) {
        if (typeof e[hT][T] == "function") {
          e[hT][T].call(this, hS);
        }
      }
    }
    return hS.returnValue;
  };
  D.BaseEvent.prototype.inherit = function(T) {
    var i = this;
    this.domEvent = T = window.event || T;
    i.clientX = T.clientX || T.pageX;
    i.clientY = T.clientY || T.pageY;
    i.offsetX = T.offsetX || T.layerX;
    i.offsetY = T.offsetY || T.layerY;
    i.screenX = T.screenX;
    i.screenY = T.screenY;
    i.ctrlKey = T.ctrlKey || T.metaKey;
    i.shiftKey = T.shiftKey;
    i.altKey = T.altKey;
    return i;
  };
  D.Browser = (function() {
    var T = navigator.userAgent;
    var hT = 0;
    var e = 0;
    var hU = 0;
    var i = 0;
    var hY = 0;
    var hW = 0;
    var hX = 0;
    var hV = 0;
    var hS = 0;
    var hZ = 0;
    if (
      typeof window.opera === "object" &&
      /Opera(\s|\/)(\d+(\.\d+)?)/.test(T)
    ) {
      hU = parseFloat(RegExp.$2);
    } else {
      if (/OPR(\/(\d+)(\..?)?)/.test(T)) {
        hU = parseInt(RegExp.$2, 10);
      } else {
        if (/Edge\/((\d+)\.\d+)/.test(T)) {
          hT = parseInt(RegExp.$2, 10);
        } else {
          if (/MSIE (\d+(\.\d+)?)/.test(T)) {
            e = parseFloat(RegExp.$1);
          } else {
            if (T.indexOf("Trident") > -1 && /rv:(\d+(\.\d+)?)/.test(T)) {
              e = parseInt(RegExp.$1, 10);
            } else {
              if (/Firefox(\s|\/)(\d+(\.\d+)?)/.test(T)) {
                hY = parseFloat(RegExp.$2);
              } else {
                if (
                  navigator.vendor === "Netscape" &&
                  /Netscape(\s|\/)(\d+(\.\d+)?)/.test(T)
                ) {
                  hX = parseFloat(RegExp.$2);
                } else {
                  if (
                    T.indexOf("Safari") > -1 &&
                    /Version\/(\d+(\.\d+)?)/.test(T)
                  ) {
                    i = parseFloat(RegExp.$1);
                  }
                }
              }
            }
          }
        }
      }
    }
    if (T.indexOf("Trident") > -1 && /Trident\/(\d+(\.\d+)?)/.test(T)) {
      hV = parseInt(RegExp.$1, 10);
    } else {
      if (
        !e &&
        !hT &&
        T.indexOf("Gecko") > -1 &&
        T.indexOf("KHTML") === -1 &&
        /rv\:(\d+(\.\d+)?)/.test(T)
      ) {
        hS = parseFloat(RegExp.$1);
      } else {
        if (!hT && /chrome\/(\d+(\.\d+)?)/i.test(T)) {
          hW = parseFloat(RegExp.$1);
        } else {
          if (!hT && /AppleWebKit\/(\d+(\.\d+)?)/.test(T)) {
            hZ = parseInt(RegExp.$1, 10);
          }
        }
      }
    }
    var h0 = {
      edge: hT,
      ie: e,
      firefox: hY,
      netscape: hX,
      opera: hU,
      safari: i,
      chrome: hW,
      gecko: hS,
      trident: hV,
      webkit: hZ,
    };
    return h0;
  })();
  window.FeBrowser = D.Browser;
  D.Dom = {};
  D.Dom.createDom = function(i, e) {
    if (D.isIE && e && e.name) {
      i = "<" + i + ' name="' + D.String.escapeHTML(e.name) + '">';
    }
    var T = document.createElement(i);
    if (e) {
      D.Dom.setProperties(T, e);
    }
    return T;
  };
  D.Dom.getOffset = function(hS) {
    var hV = D.Dom.getOwnerDocument(hS);
    var hU =
      D.isGecko > 0 &&
      hV.getBoxObjectFor &&
      D.Dom.getStyle(hS, "position") == "absolute" &&
      (hS.style.top === "" || hS.style.left === "");
    var hW = { left: 0, top: 0 };
    var i = D.isIE && !D.isStrict ? hV.body : hV.documentElement;
    if (hS == i) {
      return hW;
    }
    var T = null;
    var hT;
    if (hS.getBoundingClientRect) {
      hT = hS.getBoundingClientRect();
      hW.left =
        hT.left + Math.max(hV.documentElement.scrollLeft, hV.body.scrollLeft);
      hW.top =
        hT.top + Math.max(hV.documentElement.scrollTop, hV.body.scrollTop);
      hW.left -= hV.documentElement.clientLeft;
      hW.top -= hV.documentElement.clientTop;
      if (D.isIE && !D.isStrict) {
        hW.left -= 2;
        hW.top -= 2;
      }
    } else {
      if (hV.getBoxObjectFor && !hU) {
        hT = hV.getBoxObjectFor(hS);
        var e = hV.getBoxObjectFor(i);
        hW.left = hT.screenX - e.screenX;
        hW.top = hT.screenY - e.screenY;
      } else {
        T = hS;
        do {
          hW.left += T.offsetLeft;
          hW.top += T.offsetTop;
          if (D.isWebkit > 0 && D.Dom.getStyle(T, "position") == "fixed") {
            hW.left += hV.body.scrollLeft;
            hW.top += hV.body.scrollTop;
            break;
          }
          T = T.offsetParent;
        } while (T && T != hS);
        if (
          D.isOpera > 0 ||
          (D.isWebkit > 0 && D.Dom.getStyle(hS, "position") == "absolute")
        ) {
          hW.top -= hV.body.offsetTop;
        }
        T = hS.offsetParent;
        while (T && T != hV.body) {
          hW.left -= T.scrollLeft;
          if (!D.isOpera || T.tagName != "TR") {
            hW.top -= T.scrollTop;
          }
          T = T.offsetParent;
        }
      }
    }
    return hW;
  };
  D.Dom.getOwnerDocument = function(e) {
    return e.nodeType == 9 ? e : e.ownerDocument || e.document;
  };
  D.Dom.setProperties = function(i, e) {
    D.each(e, function(hS, T) {
      D.Dom._setProperty(i, T, hS);
    });
  };
  D.Dom._setProperty = function(i, e, T) {
    if (e == "style") {
      i.style.cssText = T;
    } else {
      if (e == "class") {
        i.className = T;
      } else {
        if (e == "for") {
          i.htmlFor = T;
        } else {
          if (e in D.Dom._DIRECT_ATTRIBUTE_MAP) {
            i.setAttribute(D.Dom._DIRECT_ATTRIBUTE_MAP[e], T);
          } else {
            i[e] = T;
          }
        }
      }
    }
  };
  D.Dom._DIRECT_ATTRIBUTE_MAP = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    rowspan: "rowSpan",
    valign: "vAlign",
    height: "height",
    width: "width",
    usemap: "useMap",
    frameborder: "frameBorder",
  };
  D.G = function() {
    for (var T = [], hS = arguments.length - 1; hS > -1; hS--) {
      var hT = arguments[hS];
      T[hS] = null;
      if (typeof hT == "object" && hT && hT.dom) {
        T[hS] = hT.dom;
      } else {
        if (
          (typeof hT == "object" && hT && hT.tagName) ||
          hT == window ||
          hT == document
        ) {
          T[hS] = hT;
        } else {
          if (typeof hT == "string" && (hT = document.getElementById(hT))) {
            T[hS] = hT;
          }
        }
      }
    }
    return T.length < 2 ? T[0] : T;
  };
  D.ac = function(e, i) {
    if (!(e = this.G(e))) {
      return;
    }
    i = this.trim(i);
    if (
      !new RegExp("(^| )" + i.replace(/(\W)/g, "\\$1") + "( |$)").test(
        e.className
      )
    ) {
      e.className = e.className
        .split(/\s+/)
        .concat(i)
        .join(" ");
    }
  };
  D.addClassName = D.ac;
  D.each = function(hU, e) {
    if (typeof e != "function") {
      return hU;
    }
    if (hU) {
      if (hU.length === undefined) {
        for (var T in hU) {
          e.call(hU[T], hU[T], T);
        }
      } else {
        for (var hS = 0, hT = hU.length; hS < hT; hS++) {
          e.call(hU[hS], hU[hS], hS);
        }
      }
    }
    return hU;
  };
  D.extend = function(hU, hS) {
    if (hU && hS && typeof hS == "object") {
      for (var hT in hS) {
        hU[hT] = hS[hT];
      }
      var T = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
      for (var e = 0, i; e < T.length; e++) {
        i = T[e];
        if (Object.prototype.hasOwnProperty.call(hS, i)) {
          hU[i] = hS[i];
        }
      }
    }
    return hU;
  };
  D.hide = function() {
    D.each(arguments, function(e) {
      if ((e = D.G(e))) {
        e.style.display = "none";
      }
    });
  };
  D.inherit = function(hW, hS, T) {
    var hV = hW.prototype;
    var hU = function() {};
    hU.prototype = hS.prototype;
    var hT = (hW.prototype = new hU());
    if (typeof T == "string") {
      hT._className = T;
    }
    for (var e in hV) {
      hT[e] = hV[e];
    }
    hW.prototype.constructor = hV.constructor;
    hV = null;
    return hT;
  };
  D.isIE = 0;
  (function() {
    if (navigator.userAgent.indexOf("MSIE") > 0 && !window.opera) {
      /MSIE (\d+(\.\d+)?)/.test(navigator.userAgent);
      D.isIE = parseFloat(RegExp.$1);
    }
  })();
  D.rc = function(e, i) {
    if (!(e = this.G(e))) {
      return;
    }
    i = this.trim(i);
    var T = e.className.replace(
      new RegExp("(^| +)" + i.replace(/(\W)/g, "\\$1") + "( +|$)", "g"),
      "$2"
    );
    if (e.className != T) {
      e.className = T;
    }
  };
  D.removeClassName = D.rc;
  D.show = function() {
    this.each(arguments, function(e) {
      if ((e = D.G(e))) {
        e.style.display = "";
      }
    });
  };
  D.trim = function(e) {
    return e.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "");
  };
  D.getElementsByClassName = function(e, i) {
    if (e.getElementsByClassName) {
      return e.getElementsByClassName(i);
    } else {
      return (function T(hZ, hX) {
        if (hX == null) {
          hX = document;
        }
        var hW = [],
          hV = hX.getElementsByTagName("*"),
          hS = hV.length,
          hY = new RegExp("(^|\\s)" + hZ + "(\\s|$)"),
          hU,
          hT;
        for (hU = 0, hT = 0; hU < hS; hU++) {
          if (hY.test(hV[hU].className)) {
            hW[hT] = hV[hU];
            hT++;
          }
        }
        return hW;
      })(i, e);
    }
  };
  D.toggleClass = function(e, i) {
    if (D.hasClass(e, i)) {
      D.removeClassName(e, i);
    } else {
      D.addClassName(e, i);
    }
  };
  D.hasClass = function(hS, T) {
    if (!hS || !hS.className || typeof hS.className != "string") {
      return false;
    }
    var i = -1;
    try {
      i =
        hS.className == T ||
        hS.className.search(new RegExp("(\\s|^)" + T + "(\\s|$)"));
    } catch (hT) {
      return false;
    }
    return i > -1;
  };
  D.insertHTML = function(hS, e, T) {
    hS = D.G(hS);
    if (hS === null) {
      return hS;
    }
    var i, hT;
    if (hS.insertAdjacentHTML) {
      hS.insertAdjacentHTML(e, T);
    } else {
      i = hS.ownerDocument.createRange();
      e = e.toUpperCase();
      if (e == "AFTERBEGIN" || e == "BEFOREEND") {
        i.selectNodeContents(hS);
        i.collapse(e == "AFTERBEGIN");
      } else {
        hT = e == "BEFOREBEGIN";
        i[hT ? "setStartBefore" : "setEndAfter"](hS);
        i.collapse(hT);
      }
      i.insertNode(i.createContextualFragment(T));
    }
    return hS;
  };
  if (
    typeof HTMLElement != "undefined" &&
    HTMLElement.prototype.__lookupGetter__ &&
    !HTMLElement.prototype.__lookupGetter__("children") &&
    !window.opera
  ) {
    try {
      HTMLElement.prototype.__defineGetter__("children", function() {
        for (
          var T = [], hS = 0, hU, hT = 0, e = this.childNodes.length;
          hT < e;
          hT++
        ) {
          hU = this.childNodes[hT];
          if (hU.nodeType == 1) {
            T[hS++] = hU;
            if (hU.name) {
              if (!T[hU.name]) {
                T[hU.name] = [];
              }
              T[hU.name][T[hU.name].length] = hU;
            }
            if (hU.id) {
              T[hU.id] = hU;
            }
          }
        }
        return T;
      });
    } catch (gx) {}
  }
  if (
    typeof HTMLElement != "undefined" &&
    !window.opera &&
    HTMLElement.prototype &&
    !HTMLElement.prototype.insertAdjacentHTML
  ) {
    HTMLElement.prototype.insertAdjacentHTML = function(i, T) {
      var hS = this.ownerDocument.createRange();
      hS.setStartBefore(this);
      hS = hS.createContextualFragment(T);
      switch (i) {
        case "beforeBegin":
          this.parentNode.insertBefore(hS, this);
          break;
        case "afterBegin":
          this.insertBefore(hS, this.firstChild);
          break;
        case "beforeEnd":
          this.appendChild(hS);
          break;
        case "afterEnd":
          if (!this.nextSibling) {
            this.parentNode.appendChild(hS);
          } else {
            this.parentNode.insertBefore(hS, this.nextSibling);
          }
          break;
      }
    };
  }
  if (typeof HTMLElement != "undefined" && !window.opera) {
    HTMLElement.prototype.contains = function(e) {
      if (e == this) {
        return true;
      }
      while ((e = e.parentNode)) {
        if (e == this) {
          return true;
        }
      }
      return false;
    };
  }
  if (!D.Browser.ie && typeof Event != "undefined" && !window.opera) {
    Event.prototype.__defineSetter__("returnValue", function(e) {
      if (!e) {
        this.preventDefault();
      }
      return e;
    });
    Event.prototype.__defineSetter__("cancelBubble", function(e) {
      if (e) {
        this.stopPropagation();
      }
      return e;
    });
  }
  D.each = function(hT, hS) {
    if (bW(hS)) {
      for (var T = 0, e = hT.length; T < e; T++) {
        if (hS.call(hT, hT[T], T) === false) {
          break;
        }
      }
    }
    return hT;
  };
  D.Platform = {
    x11: 0,
    macintosh: 0,
    windows: 0,
    android: 0,
    iphone: 0,
    ipad: 0,
  };
  for (var gt in D.Platform) {
    if (D.Platform.hasOwnProperty(gt)) {
      D.Platform[gt] = new RegExp(gt, "i").test(window.navigator.userAgent)
        ? 1
        : 0;
    }
  }
  if (typeof D.Dom === "undefined") {
    D.Dom = {};
  }
  D.Dom.getComputedStyle = function(i, e) {
    var hS = i.nodeType == 9 ? i : i.ownerDocument || i.document,
      T;
    if (hS.defaultView && hS.defaultView.getComputedStyle) {
      T = hS.defaultView.getComputedStyle(i, null);
      if (T) {
        return T[e] || T.getPropertyValue(e);
      }
    } else {
      if (i.currentStyle) {
        return i.currentStyle[e] || "";
      }
    }
    return "";
  };
  var bc = D.BaseEvent;
  var ee = D.BaseClass;
  ee.prototype.toString = function() {
    return this._className || "";
  };
  D.on = function(T, i, e) {
    if (!(T = D.G(T))) {
      return T;
    }
    i = i.replace(/^on/, "");
    if (T.addEventListener) {
      T.addEventListener(i, e, false);
    } else {
      if (T.attachEvent) {
        T.attachEvent("on" + i, e);
      }
    }
    return T;
  };
  D.un = function(T, i, e) {
    if (!(T = D.G(T))) {
      return T;
    }
    i = i.replace(/^on/, "");
    if (T.removeEventListener) {
      T.removeEventListener(i, e, false);
    } else {
      if (T.detachEvent) {
        T.detachEvent("on" + i, e);
      }
    }
    return T;
  };
  D.hc = function(hS, T) {
    if (!hS || !hS.className || typeof hS.className != "string") {
      return false;
    }
    var i = -1;
    try {
      i =
        hS.className == T ||
        hS.className.search(new RegExp("(\\s|^)" + T + "(\\s|$)"));
    } catch (hT) {
      return false;
    }
    return i > -1;
  };
  D.isEmptyObject = function(T) {
    if (Object.prototype.toString.call(T) === "[object Object]") {
      for (var e in T) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  };
  var f4 = window.location.protocol === "http:" ? "http:" : "https:";
  var eW = {
    fontFamily:
      'Arial,Helvetica,"PingFang SC","Hiragino Sans GB",STHeiti,sans-serif',
    mapStyleNameIdPair: { default: 0, "grayed-out": 1 },
    mapHost: f4 + "//map.baidu.com",
    apiHost: f4 + "//api.map.baidu.com",
    apiIMG: f4 + "//api.map.baidu.com/images",
    staticHost: f4 + "//webmap0.bdimg.com",
    imgPath: f4 + "//webmap0.bdimg.com/image/api/",
    tileDomain: [
      f4 + "//maponline0.bdimg.com",
      f4 + "//maponline1.bdimg.com",
      f4 + "//maponline2.bdimg.com",
      f4 + "//maponline3.bdimg.com",
    ],
    optDomain: "http://10.120.25.45:8017",
    rasterTilePath: "/tile/",
    vectorTilePath: "/pvd/",
    originTilePath: [f4 + "//pcor.baidu.com"],
    getIconSetPath: function(e) {
      var i = "map_icons2x/";
      if (typeof e === "string" && this.mapStyleNameIdPair[e] > 0) {
        i = "map_icons2x_" + (this.mapStyleNameIdPair[e] - 1) + "/";
      }
      return f4 + "//maponline0.bdimg.com/sty/" + i;
    },
    getMapStyleFiles: function(T) {
      var hT = true;
      if (typeof T === "string" && T !== "default") {
        hT = false;
      }
      var hU = hT ? "" : "_" + (this.mapStyleNameIdPair[T] - 1);
      var i = fA();
      var hS = "udt=" + i.udt + "&v=" + i.ver;
      var e = f4 + "//maponline0.bdimg.com/sty/";
      return [
        e + "icons_2x" + hU + ".js?" + hS,
        e + "fs" + hU + ".js?" + hS,
        e + "indoor_fs.js?" + hS,
      ];
    },
    tvc: {
      ditu: {
        normal: { version: "088", updateDate: "20210303" },
        satellite: { version: "009", updateDate: "20210303" },
        normalTraffic: { version: "081", updateDate: "20210303" },
        satelliteTraffic: { version: "083", updateDate: "20210303" },
        mapJS: { version: "104", updateDate: "20210303" },
        satelliteStreet: { version: "083", updateDate: "20210303" },
        panoClick: { version: "1033", updateDate: "20180108" },
        panoUdt: { version: "20180108", updateDate: "20180108" },
        panoSwfAPI: { version: "20150123", updateDate: "20150123" },
        panoSwfPlace: { version: "20141112", updateDate: "20141112" },
        earthVector: { version: "001", updateDate: "20210303" },
      },
    },
    msv: { mapstyle: { updateDate: "20210303", version: "001" } },
  };
  eW.imgResources = {
    blankGIF: eW.staticHost + "/res/litemapapi/v1d1/images/blank.gif?20170501",
    markerPng:
      eW.staticHost + "/res/litemapapi/v1d1/images/marker.png?20170501",
    locPng: eW.staticHost + "/res/litemapapi/v1d1/images/loc.png?20180918",
    locNewPng:
      eW.staticHost + "/res/litemapapi/v1d1/images/loc_new.png?20190314",
    zoomPng: eW.staticHost + "/res/litemapapi/v1d1/images/zoombtn.png?20180918",
    mapLogoPng:
      eW.staticHost + "/res/litemapapi/v1d1/images/logo-2x.png?20190226",
  };
  var e4 = eW;
  var a4 = "ruler.cur";
  if (D.Browser.ie || D.Browser.edge) {
    D.extend(e4, {
      distCursor: "url(" + e4.imgPath + a4 + "),crosshair",
      defaultCursor: "url(" + e4.imgPath + "openhand.cur),default",
      draggingCursor: "url(" + e4.imgPath + "closedhand.cur),move",
    });
  } else {
    if (D.Browser.firefox) {
      D.extend(e4, {
        distCursor: "url(" + e4.imgPath + a4 + "),crosshair",
        defaultCursor: "-moz-grab",
        draggingCursor: "-moz-grabbing",
      });
    } else {
      if (D.Browser.chrome || D.Browser.safari) {
        D.extend(e4, {
          distCursor: "url(" + e4.imgPath + a4 + ") 2 6,crosshair",
          defaultCursor: "url(" + e4.imgPath + "openhand.cur) 8 8,default",
          draggingCursor: "url(" + e4.imgPath + "closedhand.cur) 8 8,move",
        });
        if (D.Platform.macintosh) {
          e4.defaultCursor = "-webkit-grab";
          e4.draggingCursor = "-webkit-grabbing";
        }
      } else {
        D.extend(e4, {
          distCursor: "url(" + e4.imgPath + a4 + "),crosshair",
          defaultCursor: "url(" + e4.imgPath + "openhand.cur),default",
          draggingCursor: "url(" + e4.imgPath + "closedhand.cur),move",
        });
      }
    }
  }
  bp = bp || {};
  bp.version = "3.0";
  bp._register = [];
  bp.register = function(e) {
    this._register[this._register.length] = e;
  };
  bp.guid = 1;
  bp.getGUID = function(e) {
    return (e || "") + bp.guid++;
  };
  var gf = window.BMAP_AUTHENTIC_KEY || "";
  var o = window.BMAP_SECKEY || "";
  bp.bmapVerifyCbk = function(e) {
    if (e && e.error !== 0) {
      if (typeof map !== "undefined") {
        map.getContainer().innerHTML = "";
        map.__listeners = {};
      }
      bp = null;
      var i =
        "百度未授权使用地图API，可能是因为您提供的密钥不是有效的百度地图开放平台密钥，或此密钥未对本应用的百度地图JavaScriptAPI授权。您可以访问如下网址了解如何获取有效的密钥：https://lbs.baidu.com/apiconsole/key#。";
      console.log(e.error, i);
      switch (e.error) {
        case 101:
          i =
            "您所使用的密钥ak有问题，不支持jsapi服务，可以访问该网址了解如何获取有效密钥：http://lbsyun.baidu.com/apiconsole/key#。";
          break;
        case 102:
          i =
            "MCODE参数不存在，mobile类型MCODE参数必需，详情查看：http://lbsyun.baidu.com/apiconsole/key#。";
          break;
        case 200:
          i =
            "APP不存在，AK有误请检查再重试，详情查看：http://lbsyun.baidu.com/apiconsole/key#。";
          break;
        case 201:
          i =
            "APP被您禁用啦，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情，或联系我们了解详情。";
          break;
        case 202:
          i =
            "APP被管理员删除啦，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情，或联系我们了解详情。";
          break;
        case 203:
          i =
            "APP类型错误，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情，或联系我们了解详情。";
          break;
        case 210:
          i =
            "APP IP校验失败，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情，或联系我们了解详情。";
          break;
        case 220:
          i =
            "APP Referer校验失败。请检查该ak设置的白名单与访问所有的域名是否一致。详情查看：http://lbsyun.baidu.com/apiconsole/key#";
          break;
        case 230:
          i =
            "APP Mcode码校验失败，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情，或联系我们了解详情。";
          break;
        case 240:
          i =
            "APP服务被禁用了，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情，或联系我们了解详情。";
          break;
        case 250:
          i =
            "该用户不存在... 请登录 https://lbs.baidu.com 的控制台，注册成为开发者申请ak吧。";
          break;
        case 251:
          i =
            "该用户被自己删除啦，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看自己的应用具体详情。";
          break;
        case 252:
          i =
            "该用户被管理员删除啦，可以访问 http://lbsyun.baidu.com/apiconsole/key# 了解如何获取有效密钥，或请联系我们了解详情。";
          break;
        case 260:
          i =
            "您所使用的密钥AK不包含该服务呢，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看服务选择情况，或请联系我们了解详情。";
          break;
        case 261:
          i =
            "您所使用的密钥AK的该服务被禁用啦，可以访问 http://lbsyun.baidu.com/apiconsole/key# 查看服务选择情况，或请联系我们了解详情。";
          break;
        case 401:
          i =
            "您所使用的AK并发超限了，请登录 http://lbsyun.baidu.com/cashier/quota#/home 了解详情。";
          break;
        case 302:
          i =
            "您所使用的AK天配额超限了，请登录 http://lbsyun.baidu.com/cashier/quota#/home 了解详情。";
          break;
      }
      alert(i);
    }
  };
  window.__abbaidu_2063_cb = function(i) {
    var e = JSON.parse(i);
    o = e.data || null;
  };
  bp.verify = function() {
    var e =
      e4.apiHost +
      "/?qt=verify&v=3.0&type=webgl&ak=" +
      gf +
      "&callback=" +
      eB +
      ".bmapVerifyCbk";
    hn.load(e);
  };
  bp.getSeckey = function() {
    var e = f4 + "//dlswbr.baidu.com/heicha/mw/abclite-2063-s.js";
    hn.load(e);
  };
  bp.apiLoad = bp.apiLoad || function() {};
  function fL(i, e) {
    this._size = i;
    this._cache = [];
    this._totalGetTimes = 0;
    this._totalHitTimes = 0;
    this._options = { clearCallback: null, removeOldCallback: null };
    e = e || {};
    for (var T in e) {
      if (e.hasOwnProperty(T)) {
        this._options[T] = e[T];
      }
    }
  }
  fL.prototype.setData = function(T, hS) {
    var e = this._cache;
    var i = this._size;
    if (i === 0) {
      return;
    }
    if (e.length > i) {
      this._removeOld();
    }
    if (!e[T]) {
      e.push(hS);
    }
    e[T] = hS;
    hS._key_ = T;
  };
  fL.prototype.getHitRate = function() {
    return (
      Math.round((this._totalHitTimes / this._totalGetTimes) * 1000) / 1000
    );
  };
  fL.prototype.getData = function(i) {
    var e = this._cache[i];
    if (e) {
      this._totalHitTimes++;
    }
    this._totalGetTimes++;
    return e;
  };
  fL.prototype.removeData = function(hT) {
    if (this._options.clearCallback) {
      this._options.clearCallback(this._cache[hT]);
    }
    var T = this._cache;
    var hU = T[hT];
    for (var hS = 0, e = T.length; hS < e; hS++) {
      if (T[hS] === hU) {
        T.splice(hS, 1);
        break;
      }
    }
    delete T[hT];
  };
  fL.prototype._removeOld = function() {
    var e = this._cache;
    var hT = Math.round(this._size * 0.6);
    for (var hS = 0; hS < hT; hS++) {
      var T = e[hS]._key_;
      if (this._options.clearCallback) {
        this._options.clearCallback(e[T]);
      }
      delete e[T];
    }
    e.splice(0, hT);
    if (this._options.removeOldCallback) {
      this._options.removeOldCallback();
    }
  };
  fL.prototype.clear = function() {
    var T = this._cache;
    for (var hT = 0, e = T.length; hT < e; hT++) {
      var hS = T[hT]._key_;
      if (this._options.clearCallback) {
        this._options.clearCallback(T[hS]);
      }
      delete T[hS];
    }
    this._cache = T = [];
  };
  fL.prototype.forEach = function(hS) {
    var T = this._cache;
    for (var hU = 0, e = T.length; hU < e; hU++) {
      var hT = T[hU]._key_;
      hS(T[hT]);
    }
  };
  fL.prototype.getBatch = function(hT) {
    var e = [];
    for (var hS = 0, T = hT.length; hS < T; hS++) {
      if (this.getData(hT[hS])) {
        e[e.length] = this.getData(hT[hS]);
      }
    }
    return e;
  };
  fL.prototype.clearExcept = function(hU) {
    var T = this._cache;
    for (var e = T.length, hT = e - 1; hT >= 0; hT--) {
      var hS = this._cache[hT]._key_;
      if (!hU[hS]) {
        T.splice(hT, 1);
        if (this._options.clearCallback) {
          this._options.clearCallback(T[hS]);
        }
        delete T[hS];
      }
    }
  };
  fL.prototype.getDataCount = function() {
    return this._cache.length;
  };
  function an() {}
  D.extend(an.prototype, {
    centerAndZoomIn: function(hX, T, hY) {
      var hV = this;
      if (!hX && !T) {
        return;
      }
      hX = hX || this.centerPoint;
      T = T || this.zoomLevel;
      T = this._getProperZoom(T).zoom;
      if (this.mapType === BMAP_EARTH_MAP) {
        if (!this._earth) {
          this.mapType = BMAPGL_NORMAL_MAP;
          this.temp.originMapType = BMAP_EARTH_MAP;
          function hW() {
            hV._earth = new bp.Earth(hV, {
              showRealSunlight: hV.config.showRealSunlight,
              showMilkyway: hV.config.showMilkyway,
              earthBackground: hV.config.earthBackground,
            });
            hV._proxyEarthEvents();
            hV._changeEarthMapType(BMAP_EARTH_MAP);
            D.extend(hV, bp.EarthView.prototype);
            if (!hV._navigationCtrl && hV.config.showControls) {
              hV._navigationCtrl = new bp.NavigationControl3D(hV);
            }
            delete hV.temp.originMapType;
          }
          eb.load("earth", function() {
            if (bp["FeatureStyle" + hV.config.style]) {
              hW();
            } else {
              hV.loadMapStyleFiles(function() {
                hW();
              });
            }
          });
        }
      }
      this.lastLevel = this.zoomLevel || T;
      this.zoomLevel = T;
      var hT = new bc("onload");
      hT.point = hX;
      hT.zoom = T;
      this.centerPoint = this.restrictCenter(new ht(hX.lng, hX.lat));
      if (this.centerPoint.zoom) {
        this.zoomLevel = this.centerPoint.zoom;
      }
      this.defaultZoomLevel = this.defaultZoomLevel || this.zoomLevel;
      this.defaultCenter = this.defaultCenter || this.centerPoint;
      if (!this.loaded && !(this.temp.originMapType === BMAP_EARTH_MAP)) {
        var i = this.config.defaultMaxBounds;
        var hU = new c6(i, "baidu", this.mapType);
        var hS = new cS({
          mapType: this.mapType,
          copyright: hU,
          customLayer: false,
          baseLayer: true,
          tileTypeName: "web",
        });
        hS._isInnerLayer = true;
        this.addTileLayer(hS);
        if (
          this.mapType === BMAP_SATELLITE_MAP &&
          this._isHybridShow === true
        ) {
          this._addHybirdMap();
        }
      }
      this.dispatchEvent(hT);
      this.loaded = true;
      hY = hY || {};
      hY.callback && hY.callback();
    },
    _setPlatformPosition: function(hY, hX, h1) {
      h1 = h1 || {};
      if (hY === 0 && hX === 0 && !h1.point) {
        return;
      }
      if (isNaN(h1.initMapOffsetX)) {
        h1.initMapOffsetX = this.offsetX;
      }
      if (isNaN(h1.initMapOffsetY)) {
        h1.initMapOffsetY = this.offsetY;
      }
      var hZ = hY + h1.initMapOffsetX;
      var hW = hX + h1.initMapOffsetY;
      if (h1.point) {
        var i = this.restrictCenter(h1.point);
        if (!i.equals(this.centerPoint)) {
          this.centerPoint = i.clone();
          this.fire(new bc("oncenter_changed"));
        }
      } else {
        var hS = this.offsetX - hZ;
        var e = this.offsetY - hW;
        var T = this.getZoomUnits();
        var hV = this.centerPoint.lng;
        var hU = this.centerPoint.lat;
        var hT = new ht(hV, hU);
        this.centerPoint = this.restrictCenter(
          new ht(hT.lng + hS * T, hT.lat - e * T),
          T
        );
        this.fire(new bc("oncenter_changed"));
        if (this.zoomLevel < 10) {
          hZ = this.offsetX - (this.centerPoint.lng - hT.lng) / T;
          hW = this.offsetY + (this.centerPoint.lat - hT.lat) / T;
        }
      }
      this.offsetX = hZ;
      this.offsetY = hW;
      var h0 = this.platform.style;
      h0.left = hZ + "px";
      h0.top = hW + "px";
      this.maskLayer.style.left = -hZ + "px";
      this.maskLayer.style.top = -hW + "px";
      if (h1.dispatchEvent !== false) {
        this.dispatchEvent(new bc("onmoving"));
      }
    },
    zoomTo: function(e, hV, hZ) {
      hZ = hZ || {};
      hZ.zoomCenter = hV;
      if (hZ.noAnimation !== true) {
        this.deepZoomTo(e, hZ);
        return;
      }
      if (typeof e !== "number") {
        return;
      }
      var hT = b7[this.mapType];
      if (!hT) {
        return;
      }
      var T = e;
      e = this._getProperZoom(e).zoom;
      if (e === this.zoomLevel) {
        var hW = new bc("onzoomexceeded");
        hW.targetZoom = T;
        this.dispatchEvent(hW);
        hZ.callback && hZ.callback();
        return;
      }
      this.lastLevel = this.zoomLevel;
      if (hV) {
        this.temp._cPoint = hV;
        this.temp._cPixel = this.pointToPixelIn(hV);
      } else {
        if (this.getInfoWindow()) {
          var hY = this.getInfoWindow().getPoint();
          this.temp._cPixel = this.pointToPixelIn(hY);
          this.temp._cPoint = hY;
        }
      }
      if (this.config.zoomCenter) {
        hV = this.config.zoomCenter;
        this.temp._cPoint = hV;
        this.temp._cPixel = this.pointToPixelIn(hV);
      }
      if (hV || (this.temp.infoWin && this.temp.infoWin.isOpen())) {
        var i = this.temp._cPoint;
        var hX = this.temp._cPixel;
        var hS = this.getZoomUnits(e);
        var hU = new ht(
          i.lng + hS * (this.width / 2 - hX.x),
          i.lat - hS * (this.height / 2 - hX.y)
        );
        this.centerPoint = this.restrictCenter(hU, hS, e);
        if (this.centerPoint.zoom) {
          e = this.centerPoint.zoom;
        }
      }
      if (hZ.fireEvent !== false) {
        this.dispatchEvent(new bc("onzoomstart"));
      }
      if (e !== this.zoomLevel) {
        this.zoomLevel = e;
        this.dispatchEvent(new bc("onzooming"));
        this.dispatchEvent(new bc("onzoomstartcode"));
      }
      if (hZ.fireEvent !== false) {
        this.dispatchEvent(new bc("onzoomend"));
      }
      if (hZ.callback) {
        hZ.callback();
      }
    },
    deepZoomMedia: function(e) {
      var i = this;
      if (!i.temp.isStdCtrlBusy) {
        i.temp.isStdCtrlBusy = true;
        i.deepZoomTo(i.zoomLevel + e);
        setTimeout(function() {
          i.temp.isStdCtrlBusy = false;
        }, 400);
      }
    },
    deepZoomTo: function(hW, hS) {
      hS = hS || {};
      var hU = hW - this.zoomLevel;
      var hT = this._getProperZoom(hW);
      if (hT.exceeded) {
        var e = new bc("onzoomexceeded");
        e.targetZoom = hW;
        this.dispatchEvent(e);
        return;
      }
      var i;
      if (hS.zoomCenter) {
        i = this.pointToPixelIn(hS.zoomCenter);
      } else {
        if (this.getInfoWindow()) {
          i = this.pointToPixelIn(this.getInfoWindow().getPoint(), {
            zoom: this.lastLevel,
          });
        } else {
          var i = new ek(this.width / 2, this.height / 2);
        }
      }
      this.lastLevel = this.zoomLevel;
      var hV = this.deepZoom || new bF(this);
      var T = hU > 0 ? 1 : -1;
      hV.zoomMap(i, hU, T, null, hS);
    },
    flyToIn: function(hX, e) {
      if (e === this.zoomLevel) {
        this.panToIn(hX);
        return;
      }
      var hU = this._getProperZoom(e);
      if (hU.exceeded) {
        var hY = new bc("onzoomexceeded");
        hY.targetZoom = e;
        this.dispatchEvent(hY);
        return;
      }
      var hW = e - this.zoomLevel;
      var T = new ek(this.width / 2, this.height / 2);
      var i = this.pointToPixelIn(hX);
      var hV = new ea(i.x - T.x, i.y - T.y);
      this.lastLevel = this.zoomLevel;
      if (
        Math.abs(hW) >= 4 ||
        Math.abs(hV.width) > this.width ||
        Math.abs(hV.height) > this.height
      ) {
        this.centerAndZoomIn(hX, e);
        return;
      }
      var hT = this.deepZoom || new bF(this);
      var hS = hW > 0 ? 1 : -1;
      hT.zoomMap(i, hW, hS, hV);
    },
    panToIn: function(i, T) {
      T = T || {};
      if (!i || i.equals(this.centerPoint)) {
        T.callback && T.callback();
        return;
      }
      var hS = this.pointToPixelIn(i);
      var e = Math.round(this.width / 2);
      var hT = Math.round(this.height / 2);
      if (
        Math.abs(e - hS.x) > this.width ||
        Math.abs(hT - hS.y) > this.height ||
        T.noAnimation === true
      ) {
        this._panToIn(e - hS.x, hT - hS.y, i);
        T.callback && T.callback();
      } else {
        this._panBy(e - hS.x, hT - hS.y, T);
      }
    },
    _panToIn: function(i, e, hS) {
      var T = this.temp;
      if (T.operating === true) {
        return;
      }
      if (T.dragAni) {
        T.dragAni.stop();
        T.dragAni = null;
        this.dispatchEvent(new bc("onmoveend"));
      }
      this.dispatchEvent(new bc("onmovestart"));
      this._setPlatformPosition(i, e, { point: hS });
      this.dispatchEvent(new bc("onmoveend"));
    },
    panBy: function(i, e, T) {
      T = T || {};
      i = Math.round(i) || 0;
      e = Math.round(e) || 0;
      if (
        Math.abs(i) <= this.width &&
        Math.abs(e) <= this.height &&
        T.noAnimation !== true
      ) {
        this._panBy(i, e, T);
      } else {
        this._panToIn(i, e);
        T.callback && T.callback();
      }
    },
    _panBy: function(i, e, hT) {
      if (this.temp.operating === true) {
        return;
      }
      hT = hT || {};
      this.dispatchEvent(new bc("onmovestart"));
      var hS = this;
      var T = hS.temp;
      T.pl = hS.offsetX;
      T.pt = hS.offsetY;
      if (T.tlPan) {
        T.tlPan.cancel();
      }
      if (T.dragAni) {
        T.dragAni.stop();
        T.dragAni = null;
        this.dispatchEvent(new bc("onmoveend"));
      }
      T.tlPan = new p({
        fps: hT.fps || hS.config.fps,
        duration: hT.duration || hS.config.actionDuration,
        transition: hT.transition || co.easeInOutQuad,
        render: function(hU) {
          this.terminative = hS.temp.operating;
          if (hS.temp.operating) {
            return;
          }
          hS._setPlatformPosition(Math.ceil(i * hU), Math.ceil(e * hU), {
            initMapOffsetX: T.pl,
            initMapOffsetY: T.pt,
          });
        },
        finish: function(hU) {
          hS.dispatchEvent(new bc("onmoveend"));
          hS.temp.tlPan = false;
          if (hS.temp.stopArrow === true) {
            hS.temp.stopArrow = false;
            if (hS.temp.arrow !== 0) {
              hS._arrow();
            }
          }
          hT.callback && hT.callback();
        },
      });
    },
    getCenterIn: function() {
      return this.centerPoint;
    },
    getZoom: function() {
      return this.zoomLevel;
    },
    setTilt: function() {},
    getTilt: function() {
      return this._tilt;
    },
    setHeading: function() {},
    getHeading: function() {
      return this._heading;
    },
    restrictCenter: function(hW, hT, hX) {
      this.isRestrict = false;
      hT = hT || this.getZoomUnits();
      hX = hX || this.zoomLevel;
      var T = this.pixelToPointIn(new ek(0, 0), { center: hW, zoom: hX });
      var hU = this.pixelToPointIn(new ek(0, this.height), {
        center: hW,
        zoom: hX,
      });
      if (this.zoomLevel < 5) {
        if (T.lat > c9.MAX_LAT && hU.lat < c9.MIN_LAT) {
          this.isRestrict = true;
          var i = c9.MAX_LAT - hW.lat;
          var e = hW.lat - c9.MIN_LAT;
          var hV;
          if (i < e) {
            hV = i / (this.height / 2);
          } else {
            hV = e / (this.height / 2);
          }
          var hS = 18 - eD(hV);
          this.zoomLevel = Math.ceil(hS);
          hW.zoom = Math.ceil(hS);
          return hW;
        }
      }
      if (T.lat > c9.MAX_LAT) {
        this.isRestrict = true;
        hW.lat = c9.MAX_LAT - (this.height / 2) * hT;
      } else {
        if (hU.lat < c9.MIN_LAT) {
          this.isRestrict = true;
          hW.lat = c9.MIN_LAT + (this.height / 2) * hT;
        }
      }
      return hW;
    },
  });
  function c9(e, T) {
    if (typeof e === "string") {
      e = document.getElementById(e);
    }
    ee.call(this);
    this.container = e;
    this.width = e.clientWidth;
    this.height = e.clientHeight;
    this.offsetX = 0;
    this.offsetY = 0;
    this._setStyle(e);
    e.unselectable = "on";
    e.innerHTML = "";
    D.ac(e, "bmap-container");
    e.appendChild(this.render());
    this._initDate = new Date();
    this.platform = e.children[0];
    this.maskLayer = this.platform.children[0];
    this._panes = {};
    this.centerPoint = new ht(0, 0);
    this.zoomLevel = 0;
    this._heading = 0;
    this._tilt = 0;
    this._bounds = new dT();
    this.lastLevel = 0;
    this._lock = false;
    this._enableTiltZoom = 7;
    this._enableHeadingZoom = 7;
    this.defaultZoomLevel = null;
    this.defaultCenter = null;
    this.zoomEventStatus = "idle";
    this.currentOperation = dV.idle;
    this._setConfig(T);
    this._initMapRenderType();
    this._animationInfo = {};
    this._animationInfoUnstopable = {};
    this.suspendLoad = false;
    this._customTileLabels = [];
    if (this._renderType === "webgl") {
      this._workerMgr = new ga(this);
      this._featureMgr = new dd();
      D.extend(this, c8.prototype);
      this.jobScheduler = new fP(this);
      this.benchmark = new ad();
      this._setupWebGLMap();
      this.deviceInfo = { hardwareInfo: { renderer: "", vendor: "" } };
      if (a9.ifSupportWebGL._renderer) {
        this.deviceInfo.hardwareInfo.renderer = a9.ifSupportWebGL._renderer;
        this.deviceInfo.hardwareInfo.vendor = a9.ifSupportWebGL._vendor;
      }
    } else {
      D.extend(this, an.prototype);
    }
    if (!b7[this.config.mapType]) {
      this.config.mapType = BMAPGL_NORMAL_MAP;
    }
    if (this.config.mapType === BMAP_EARTH_MAP && !this.config.enableEarth) {
      if (this.forceEnableEarth() === false) {
        this.config.mapType = BMAPGL_NORMAL_MAP;
      }
    }
    this.mapType = this.config.mapType;
    this.preMapType = null;
    if (this.config.enableEarth) {
      var hU = this.maskLayer.style;
      hU.opacity = 0;
      hU.background = "#000";
      if (this.config.mapType === BMAP_EARTH_MAP) {
        hU.opacity = 1;
      }
      setTimeout(function() {
        hU.WebkitTransition = hU.transition = "opacity .4s";
      }, 100);
    }
    this._isHybridShow = this.config.showStreetLayer;
    this.temp = {
      operating: false,
      arrow: 0,
      lastDomMoveTime: 0,
      lastLoadTileTime: 0,
      lastMovingTime: 0,
      canKeyboard: false,
      I: function(i) {
        return D.I(i);
      },
      curSpots: [],
      curSpotsArray: [],
      curAreaSpot: null,
      spotsGuid: 1,
      registerIndex: -1,
      hoverOnSpot: null,
      isStdCtrlBusy: false,
    };
    window.InstanceCore = this.temp.I;
    this.platform.style.cursor = this.config.defaultCursor;
    this._bind();
    for (var hS = 0; hS < bp._register.length; hS++) {
      bp._register[hS](this);
    }
    this.temp.registerIndex = hS;
    var hT = this;
    if (this._renderType === "webgl") {
      eb.load("oppcgl", function() {
        hT._asyncRegister();
      });
    } else {
      eb.load("oppc", function() {
        hT._asyncRegister();
      });
    }
    if (this.config.mapType === "B_EARTH_MAP") {
      if (!bp.Earth) {
        eb.load("earth", function() {});
      } else {
        hT._syncAndChangeMapType("B_EARTH_MAP");
      }
    }
  }
  c9.MAX_TILT = 87;
  c9.MAX_DRAG_TILT = 73;
  c9.MAX_DRAG_TILT_L2 = 50;
  c9.MIN_TILT = 0;
  c9.MAX_LAT = 19431424;
  c9.MIN_LAT = -16023552;
  c9.WORLD_SIZE_MC_HALF = 20037726.372307256;
  c9.WORLD_SIZE_MC = c9.WORLD_SIZE_MC_HALF * 2;
  c9.RIGHT_EDGE_POINT = new ht(c9.WORLD_SIZE_MC_HALF, 0);
  c9.LEFT_EDGE_POINT = new ht(-c9.WORLD_SIZE_MC_HALF, 0);
  c9.HIGH_RES_MIN_RATIO = 1.2;
  c9.inherits(ee, "Map");
  D.extend(c9.prototype, {
    render: function() {
      var e = U("div", { id: "platform" });
      var hS = e.style;
      hS.overflow = "visible";
      hS.position = "absolute";
      hS.zIndex = 5;
      hS.top = hS.left = "0px";
      var i = U("div", { id: "mask", class: "BMap_mask" });
      var T = i.style;
      T.position = "absolute";
      T.top = T.left = "0px";
      T.zIndex = "9";
      T.overflow = "hidden";
      T.WebkitUserSelect = "none";
      T.width = this.width + "px";
      T.height = this.height + "px";
      e.appendChild(i);
      return e;
    },
    _initMapRenderType: function() {
      var e = this.config.forceRenderType;
      if (e === "dom") {
        this._renderType = "dom";
        return;
      } else {
        if (e === "canvas") {
          if (a9.isModernBrowser && !a9.ifCanvas2dInBlackList()) {
            this._renderType = "canvas";
            return;
          } else {
            this._renderType = "dom";
            return;
          }
        } else {
          if (e === "webgl") {
            if (a9.ifSupportWebGL()) {
              this._renderType = "webgl";
              return;
            }
          }
        }
      }
      if (a9.ifSupportWebGL() && a9.ifEnableWebGLMap()) {
        this._renderType = "webgl";
        return;
      }
      if (a9.isModernBrowser && a9.ifEnableCanvas2dMap()) {
        this._renderType = "canvas";
        return;
      }
      this._renderType = "dom";
    },
    _setConfig: function(i) {
      i = i || {};
      this.config = {
        bottomOffset: 0,
        clickInterval: 200,
        enableDragging: true,
        enableRotate: true,
        enableTilt: true,
        enableKeyboard: false,
        enableDblclickZoom: true,
        enableContinuousZoom: true,
        enableWheelZoom: false,
        enableRotateGestures: true,
        enableTiltGestures: true,
        enablePinchZoom: true,
        fixCenterWhenPinch: false,
        enableAutoResize: true,
        zoomCenter: null,
        fps: D.Browser.ie ? 30 : 60,
        zoomerDuration: 240,
        actionDuration: 450,
        defaultCursor: e4.defaultCursor,
        draggingCursor: e4.draggingCursor,
        coordType: BMAP_COORD_MERCATOR,
        mapType: BMAPGL_NORMAL_MAP,
        drawer: BMAP_SYS_DRAWER,
        enableInertialDragging: true,
        drawMargin: 500,
        drawMarginGL: 500,
        enableFulltimeSpotClick: false,
        enableResizeOnCenter: false,
        isModernBrowser: a9.isModernBrowser,
        forceRenderType: "",
        textRenderType: null,
        ratio: a7() >= c9.HIGH_RES_MIN_RATIO ? 2 : 1,
        enableEarth: a9.ifEnableEarth(),
        defaultMaxBounds: new dT(
          new ht(-21364736, -10616832),
          new ht(23855104, 15859712)
        ),
        showControls: false,
        showRealSunlight: true,
        showMilkyway: true,
        earthBackground: null,
        showStreetLayer: true,
        minZoom: null,
        maxZoom: null,
        style: "default",
        enableIconClick: false,
        autoSafeArea: false,
        ak: null,
        webgl2: false,
        restrictCenter: true,
        smaa: true,
        preserveDrawingBuffer: false,
      };
      for (var T in i) {
        if (i.hasOwnProperty(T)) {
          this.config[T] = i[T];
          if (T === "fixCenterWhenResize") {
            this.config.enableResizeOnCenter = i[T];
          }
        }
      }
      if (i.style) {
        if (i.style["styleId"] && i.style["styleId"].length < 32) {
          this.config.style = i.style["styleId"];
        } else {
          this.config.style = i.style;
        }
      }
      this._setTextRenderType();
      this._displayOptions = {
        poi: true,
        poiText: true,
        poiIcon: true,
        overlay: true,
        layer: true,
        building: true,
        indoor: true,
        street: true,
        skyColors: ["rgba(226, 237, 248, 0)", "rgba(186, 211, 252, 1)"],
        isFlat: false,
        labelMargin: 0,
      };
      if (i.displayOptions) {
        for (var e in i.displayOptions) {
          if (i.displayOptions.hasOwnProperty(e)) {
            this._displayOptions[e] = i.displayOptions[e];
          }
        }
      }
      if (this.config.restrictCenter === false) {
        this._enableTiltZoom = 0;
        this._enableHeadingZoom = 0;
      }
    },
    getMinZoom: function() {
      var T;
      if (b7[this.mapType][this._renderType]) {
        T = b7[this.mapType][this._renderType].minZoom;
      } else {
        T = b7[this.mapType].minZoom;
      }
      if (this.config.minZoom !== null && this.config.minZoom >= T) {
        T = this.config.minZoom;
      }
      if (this.mapType === "B_EARTH_MAP") {
        return T;
      }
      var i = this.getSize();
      var e = this.worldSize(T);
      while (e < i.width) {
        T++;
        e = this.worldSize(T);
      }
      return T;
    },
    getMaxZoom: function() {
      var e;
      if (b7[this.mapType][this._renderType]) {
        e = b7[this.mapType][this._renderType].maxZoom;
      } else {
        e = b7[this.mapType].maxZoom;
      }
      if (this.config.maxZoom !== null && this.config.maxZoom <= e) {
        e = this.config.maxZoom;
      } else {
        if (this._renderType === "webgl") {
          e = 21;
        }
      }
      return e;
    },
    _drawFrame: function() {
      this._webglMapScene._painter.draw();
    },
    _setupWebGLMap: function() {
      var e = this;
      eb.load("mapgl", function() {
        e._asyncRegister();
      });
    },
    _setStyle: function(i) {
      var e = i.style;
      e.overflow = "hidden";
      if (fZ(i).position !== "absolute") {
        e.position = "relative";
      }
      e.backgroundImage = "url(" + e4.imgPath + "bg.png)";
      e.textAlign = "left";
      e.touchAction = e.MSTouchAction = "none";
    },
    _bind: function() {
      var e = this;
      if (e._renderType !== "webgl") {
        e._watchSize = function() {
          var T = e.getContainerSize();
          if (e.width !== T.width || e.height !== T.height) {
            var hV = (T.width - e.width) / 2;
            var hX = (T.height - e.height) / 2;
            var hS = e.getZoomUnits();
            var hU = e.centerPoint;
            if (hU && !e.config.enableResizeOnCenter) {
              e.centerPoint = new ht(hU.lng + hV * hS, hU.lat - hX * hS);
            }
            e.maskLayer.style.width = (e.width = T.width) + "px";
            e.maskLayer.style.height = (e.height = T.height) + "px";
            var hT = new bc("onresize");
            hT.size = T;
            e.dispatchEvent(hT);
            e.fire(new bc("onsize_changed"));
            var i = parseInt(e.platform.style.left, 10) || 0;
            var hW = parseInt(e.platform.style.top, 10) || 0;
            if (
              e.currentOperation !== "undefined" &&
              e.currentOperation !== dV.idle &&
              (e.offsetX !== i || e.offsetY !== hW)
            ) {
              e._setPlatformPosition(i, hW);
            }
          }
        };
      } else {
        e._watchSize = function() {
          var i = e.getContainerSize();
          if (e.width !== i.width || e.height !== i.height) {
            var hS = e.getSize();
            e.maskLayer.style.width = (e.width = i.width) + "px";
            e.maskLayer.style.height = (e.height = i.height) + "px";
            if (a7() !== e.config.ratio) {
              e.config.ratio = a7();
            }
            var hT = new bc("onresize");
            hT.size = i;
            e.dispatchEvent(hT);
            var T = new bc("onsize_changed");
            T.size = i;
            T.oldSize = hS;
            e.fire(T);
          }
        };
      }
      if (e.config.enableAutoResize) {
        e.temp.autoResizeTimer = setInterval(e._watchSize, 16);
      }
      this.on("size_changed", function() {
        var i = e.getMinZoom();
        if (e.zoomLevel < i) {
          e.setZoomIn(i, { noAnimation: true });
        }
      });
      this.on("zoom_changed", function() {
        this.dispatchEvent(new bc("onzooming"));
      });
    },
    addControl: function(e) {
      if (e && bW(e._i)) {
        e._i(this);
        this.dispatchEvent(new bc("onaddcontrol", e));
      }
    },
    removeControl: function(e) {
      if (e && bW(e.remove)) {
        e.remove();
        this.dispatchEvent(new bc("onremovecontrol", e));
      }
    },
    addContextMenu: function(e) {
      if (e) {
        e.initialize(this);
        this.dispatchEvent(new bc("onaddcontextmenu", e));
      }
    },
    removeContextMenu: function(e) {
      if (e) {
        this.dispatchEvent(new bc("onremovecontextmenu", e));
        e.remove();
      }
    },
    addOverlay: function(i) {
      if (i && bW(i._i)) {
        var T = new bc("onbeforeaddoverlay", i);
        T.overlay = i;
        this.dispatchEvent(T);
        i._i(this);
        T = new bc("onaddoverlay", i);
        T.overlay = i;
        this.dispatchEvent(T);
      }
    },
    removeOverlay: function(i) {
      if (i && bW(i.remove)) {
        var T = new bc("onremoveoverlay", i);
        T.overlay = i;
        i.remove();
        this.dispatchEvent(T);
      }
    },
    clearOverlays: function() {
      this.dispatchEvent(new bc("onclearoverlays"));
    },
    addTileLayer: function(hT) {
      if (!hT) {
        return;
      }
      for (var hS = 0, e = this.tileMgr.tileLayers.length; hS < e; hS++) {
        var T = this.tileMgr.tileLayers[hS];
        if (T === hT || T.getMapType() === hT.getMapType()) {
          return;
        }
      }
      hT.initialize(this);
      this.dispatchEvent(new bc("onaddtilelayer", hT));
    },
    removeTileLayer: function(e) {
      if (e) {
        e.remove();
        this.dispatchEvent(new bc("onremovetilelayer", e));
      }
    },
    getTileLayer: function(e) {
      if (this.tileMgr) {
        return this.tileMgr.getTileLayer(e);
      }
      return null;
    },
    setMapType: function(e) {
      var i = this;
      if (this.mapType === e || this._mapTypeChanging) {
        return;
      }
      if (e === BMAP_EARTH_MAP && !this.config.enableEarth) {
        return;
      }
      if (this._earth && this._earth.getLock()) {
        return;
      }
      this._mapTypeChanging = true;
      this.preMapType = this.mapType;
      this._boundsInPreMapType = this.getBoundsIn();
      if (this.preMapType === BMAP_SATELLITE_MAP) {
        this._preStreetLayerShow = this._isHybridShow;
      }
      if (e === BMAP_EARTH_MAP) {
        if (!bp.Earth) {
          eb.load("earth", function() {
            i._syncAndChangeMapType(e);
          });
          return;
        }
        i._syncAndChangeMapType(e);
      } else {
        if (this.preMapType !== BMAP_EARTH_MAP) {
          this._changeFlatMapType(e);
          this._mapTypeChanging = false;
        } else {
          this._setMapTypeStatus(e, function(T, hS) {
            var hT = i._earth.getEarthCanvas();
            i._changeFlatMapType(e, this.preMapType);
            if (i._mapTypeChangAni) {
              i._mapTypeChangAni.stop();
            }
            i._mapTypeChangAni = fl.start({
              el: hT,
              style: "opacity",
              startValue: 1,
              endValue: 0,
              duration: 200,
              callback: function() {
                i._mapTypeChangAni = null;
                i._mapTypeChanging = false;
              },
            });
            T = eo.convertLL2MC(T);
            if (i._renderType === "webgl") {
              D.extend(i, c8.prototype);
              i.setCenterIn(T, { noAnimation: true });
              i.setZoomIn(hS, { noAnimation: true });
            } else {
              D.extend(i, an.prototype);
              i.centerAndZoomIn(T, hS);
            }
          });
        }
      }
    },
    _changeFlatMapType: function(hV) {
      if (!hV || !b7[hV]) {
        return;
      }
      var h3 = this.preMapType;
      this.mapType = hV;
      var hS = this.getTileLayer(h3);
      if (hS) {
        this.removeTileLayer(hS);
      }
      if (
        h3 !== BMAP_EARTH_MAP ||
        this._renderType !== "webgl" ||
        this.baseLayerAdded !== true
      ) {
        var T = new dT(
          new ht(-21364736, -10616832),
          new ht(23855104, 15859712)
        );
        var h0 = new c6(T, "baidu", hV);
        var h2 = this._renderType === "webgl" ? 2 : 1;
        var hT = new cS({
          mapType: hV,
          copyright: h0,
          dataType: h2,
          customLayer: false,
          baseLayer: true,
          tileTypeName: "na",
        });
        hT._isInnerLayer = true;
        this.addTileLayer(hT);
        if (this._renderType === "webgl" && !this.baseLayerAdded) {
          this.baseLayerAdded = true;
        }
      }
      if (h3 === BMAP_SATELLITE_MAP) {
        this._preStreetLayerShow = this._isHybridShow;
        this._removeHybirdMap();
      } else {
        if (hV === BMAP_SATELLITE_MAP) {
          if (
            this._preStreetLayerShow === true ||
            typeof this._preStreetLayerShow === "undefined"
          ) {
            this._addHybirdMap();
          }
        }
      }
      var hX = this.tileMgr.tileLayers;
      for (var hW = 0, hU = hX.length; hW < hU; hW++) {
        var hY = hX[hW];
        var h1 = hY.tilesDiv;
        if (!h1) {
          continue;
        }
        if (!hY._isInnerLayer && h1.style.visibility === "hidden") {
          h1.style.visibility = "";
        }
      }
      var hZ = new bc("onmaptypechange");
      hZ.zoomLevel = this.zoomLevel;
      hZ.mapType = hV;
      hZ.exMapType = h3;
      this.dispatchEvent(hZ);
    },
    showStreetLayer: function(e) {
      e ? this._addHybirdMap() : this._removeHybirdMap();
    },
    hideStreetLayer: function(e) {
      this._hideStreetLayerOptions = e;
      this._removeHybirdMap(e);
    },
    _addHybirdMap: function() {
      this._isHybridShow = true;
      if (this.mapType === "B_EARTH_MAP") {
        if (this._earth) {
          this._earth.showStreetLayer();
        }
        return;
      }
      if (this._hybridTileLayer) {
        this.addTileLayer(this._hybridTileLayer);
        var hU = new bc("onstreetlayer_show");
        this.dispatchEvent(hU);
        return;
      }
      var hT = new dT(new ht(-21364736, -10616832), new ht(23855104, 15859712));
      var T = new c6(hT, "", BMAP_HYBRID_MAP);
      var i = new cS({
        copyright: T,
        transparentPng: true,
        tileTypeName: "web",
      });
      i._isInnerLayer = true;
      var hS = this.isCanvasMap();
      i.getTilesUrl = function(hV, h0) {
        var hY = b7.B_STREET_MAP;
        var hZ = aE("ditu", "satelliteStreet");
        var hW = hZ.ver;
        var e = hZ.udt;
        var hX =
          hY.tileUrls[Math.abs(hV.x + hV.y) % hY.tileUrls.length] +
          "?qt=vtile&x=" +
          (hV.x + "").replace(/-/gi, "M") +
          "&y=" +
          (hV.y + "").replace(/-/gi, "M") +
          "&z=" +
          h0 +
          "&styles=sl&v=" +
          hW +
          "&udt=" +
          e +
          "$scaler=" +
          a7() +
          "&showtext=" +
          (hS ? 0 : 1);
        return hX;
      };
      this._isHybridShow = true;
      this.addTileLayer(i);
      this._hybridTileLayer = i;
      var hU = new bc("onstreetlayer_show");
      this.dispatchEvent(hU);
    },
    _removeHybirdMap: function(i) {
      this._isHybridShow = false;
      if (this.mapType === "B_EARTH_MAP") {
        if (this._earth) {
          this._earth.hideStreetLayer(i);
        }
        return;
      }
      if (this._hybridTileLayer) {
        this.removeTileLayer(this._hybridTileLayer);
        var T = new bc("onstreetlayer_hide");
        this.dispatchEvent(T);
      }
    },
    isStreetLayerShow: function() {
      return this._isHybridShow;
    },
    getTileId: function(e, hU) {
      var hS = b7[this.mapType];
      if (typeof hS !== "object") {
        return null;
      }
      var T = hS.baseUnits * Math.pow(2, hS.zoomLevelBase - hU);
      var hT = parseInt(e.lng / T, 10);
      var i = parseInt(e.lat / T, 10);
      return { row: hT, column: i, level: hU };
    },
    reset: function() {
      this.centerAndZoomIn(this.defaultCenter, this.defaultZoomLevel, true);
    },
    setOptions: function(e) {
      e = e || {};
      for (var T in e) {
        if (e.hasOwnProperty(T)) {
          var i = true;
          if (typeof e[T] !== "object") {
            i = e[T] !== this.config[T];
          }
          this.config[T] = e[T];
          if (T === "fixCenterWhenResize") {
            this.config.enableResizeOnCenter = e[T];
          }
          if (!i) {
            continue;
          }
          switch (T) {
            case "style":
            case "styleUrl":
              if (T === "style" && e.styleUrl) {
                break;
              }
              this.fire(new bc("onstyle_willchange"));
              var hS = this;
              this.loadMapStyleFiles(function() {
                hS.fire(new bc("onstyle_changed"));
              });
              break;
            case "enableAutoResize":
              if (e[T] === true) {
                this.enableAutoResize();
              } else {
                this.disableAutoResize();
              }
              break;
            case "displayOptions":
              this.setDisplayOptions(e[T]);
              break;
          }
        }
      }
    },
    enableDragging: function() {
      this.config.enableDragging = true;
    },
    disableDragging: function() {
      this.config.enableDragging = false;
    },
    enableInertialDragging: function() {
      this.config.enableInertialDragging = true;
    },
    disableInertialDragging: function() {
      this.config.enableInertialDragging = false;
    },
    enableScrollWheelZoom: function() {
      this.config.enableWheelZoom = true;
    },
    disableScrollWheelZoom: function() {
      this.config.enableWheelZoom = false;
    },
    enableContinuousZoom: function() {
      this.config.enableContinuousZoom = true;
    },
    disableContinuousZoom: function() {
      this.config.enableContinuousZoom = false;
    },
    enableResizeOnCenter: function() {
      this.config.enableResizeOnCenter = true;
    },
    disableResizeOnCenter: function() {
      this.config.enableResizeOnCenter = false;
    },
    enableDoubleClickZoom: function() {
      this.config.enableDblclickZoom = true;
    },
    disableDoubleClickZoom: function() {
      this.config.enableDblclickZoom = false;
    },
    enableKeyboard: function() {
      this.config.enableKeyboard = true;
    },
    disableKeyboard: function() {
      this.config.enableKeyboard = false;
    },
    getSize: function() {
      return new ea(this.width, this.height);
    },
    enablePinchToZoom: function() {
      this.config.enablePinchZoom = true;
    },
    disablePinchToZoom: function() {
      this.config.enablePinchZoom = false;
    },
    enableTilt: function() {
      this.config.enableTilt = true;
    },
    disableTilt: function() {
      this.config.enableTilt = false;
    },
    enableRotate: function() {
      this.config.enableRotate = true;
    },
    disableRotate: function() {
      this.config.enableRotate = false;
    },
    enableAutoResize: function() {
      this.config.enableAutoResize = true;
      this._watchSize();
      if (!this.temp.autoResizeTimer) {
        this.temp.autoResizeTimer = setInterval(this._watchSize, 16);
      }
    },
    disableAutoResize: function() {
      this.config.enableAutoResize = false;
      if (this.temp.autoResizeTimer) {
        clearInterval(this.temp.autoResizeTimer);
        this.temp.autoResizeTimer = null;
      }
    },
    checkResize: function() {
      this._watchSize();
    },
    resize: function() {
      this._watchSize();
    },
    getContainerSize: function() {
      return new ea(this.container.clientWidth, this.container.clientHeight);
    },
    _getProperZoom: function(T) {
      if (!T) {
        T = this.zoomLevel;
      }
      var i = this.getMinZoom();
      var e = this.getMaxZoom();
      var hS = false;
      if (T < i) {
        hS = true;
        T = i;
      }
      if (T > e) {
        hS = true;
        T = e;
      }
      if (this._renderType !== "webgl") {
        T = Math.round(T);
      }
      return { zoom: T, exceeded: hS };
    },
    getContainer: function() {
      return this.container;
    },
    getZoomUnits: function(T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return Math.pow(2, 18 - this._earth.getImageZoom());
      }
      var e = b7[this.mapType];
      if (typeof e !== "object") {
        return null;
      }
      var i = T || this.zoomLevel;
      return Math.pow(2, e.zoomLevelBase - i);
    },
    pointToPixelIn: function(h1, h3) {
      if (!h1) {
        return;
      }
      h3 = h3 || {};
      if (this.mapType === BMAP_EARTH_MAP) {
        var hS;
        if (!h1._llPt) {
          hS = eo.convertMC2LL(h1);
          h1._llPt = hS;
        }
        hS = h1._llPt;
        var hX = null;
        var T = null;
        if (typeof h3.zoom === "number") {
          var h0 = this._earth;
          var h2 = h0._getEarthZoomByImgZoom(h3.zoom);
          if (h2 <= 3) {
            hX = h0._generateTmpPMatrix(h2);
          }
          T = h0._generateTmpMVMatrix(h0.getCenter(), h2);
        }
        var hT = this._earth.fromLatLngToPixel(hS, {
          useRound: false,
          isCalcOnBack: true,
          matrixInfo: { modelViewMatrix: T, projectionMatrix: hX },
        });
        return hT;
      }
      if (
        (this._heading % 360 === 0 && this._tilt === 0) ||
        !this._webglMapCamera
      ) {
        var hZ = this.getZoomUnits(h3.zoom);
        var hV = h3.center || this.centerPoint;
        var i = this.width / 2;
        var hU = this.height / 2;
        var hY = (h1.lng - hV.lng) / hZ + i;
        var hW = (hV.lat - h1.lat) / hZ + hU;
        if (h3.useRound !== false) {
          hY = Math.round(hY);
          hW = Math.round(hW);
        }
        return new ek(hY, hW);
      }
      var e = this._webglMapCamera.fromMCToScreenPixel(h1.lng, h1.lat, h3);
      if (h3.useRound === false) {
        return e;
      }
      e.x = Math.round(e.x);
      e.y = Math.round(e.y);
      return e;
    },
    pixelToPointIn: function(e, hZ) {
      if (!e) {
        return;
      }
      hZ = hZ || {};
      if (this.mapType === BMAP_EARTH_MAP) {
        if (typeof hZ.zoom === "number") {
          var hX = this._earth;
          var hU = null;
          var T = null;
          var hY = hX._getEarthZoomByImgZoom(hZ.zoom);
          if (hY <= 3) {
            hU = hX._generateTmpPMatrix(hY);
          }
          T = hX._generateTmpMVMatrix(hX.getCenter(), hY);
        }
        var i = this._earth.fromPixelToLatLng(e, {
          matrixInfo: { modelViewMatrix: T, projectionMatrix: hU },
        });
        if (i === null) {
          return null;
        }
        return eo.convertLL2MC(i);
      }
      if (
        (this._heading % 360 !== 0 || this._tilt > 0) &&
        this._webglMapCamera
      ) {
        return this._webglMapCamera.fromScreenPixelToMC(e.x, e.y, hZ);
      }
      var hV = hZ.center || this.centerPoint;
      var hW = this.getZoomUnits(hZ.zoom);
      var hT = hV.lng + hW * (e.x - this.width / 2);
      var hS = hV.lat - hW * (e.y - this.height / 2);
      return new ht(hT, hS);
    },
    pointToOverlayPixelIn: function(e, hS) {
      hS = hS || {};
      var T = this.pointToPixelIn(e, {
        zoom: hS.zoom,
        center: hS.center,
        forLabel: true,
        frustumTest: true,
        useRound: hS.useRound,
      });
      if (!T) {
        return;
      }
      if (hS.fixPosition && this.mapType !== "B_EARTH_MAP") {
        var hT = this.getSize();
        var i = this.worldSize(hS.zoom);
        if (T.x > hT.width) {
          while (T.x > hT.width) {
            T.x -= i;
          }
        } else {
          if (T.x < 0) {
            while (T.x < 0) {
              T.x += i;
            }
          }
        }
      }
      if (this._renderType === "webgl") {
        return T;
      }
      T.x -= this.offsetX;
      T.y -= this.offsetY;
      return T;
    },
    overlayPixelToPointIn: function(i, e) {
      if (!i) {
        return;
      }
      var T = i.clone();
      if (this._renderType !== "webgl") {
        T.x += this.offsetX;
        T.y += this.offsetY;
      }
      return this.pixelToPointIn(T, e);
    },
    getProjection: function() {
      return new eo();
    },
    lnglatToMercator: function(e, hS) {
      var i = new ht(e, hS);
      var T = eo.convertLL2MC(i);
      return [T.lng, T.lat];
    },
    mercatorToLnglat: function(i, e) {
      if (isNaN(i) || isNaN(e)) {
        return [];
      }
      i = parseFloat(i);
      e = parseFloat(e);
      var hS = new ht(i, e);
      var T = eo.convertMC2LL(hS);
      return [T.lng, T.lat];
    },
    getBoundsIn: function() {
      var h5 = arguments[0];
      if (this.mapType === BMAP_EARTH_MAP && this._earth) {
        var hZ = this._earth.getCustomBounds();
        if (!hZ) {
          return this.config.defaultMaxBounds;
        }
        var hY = hZ.getSouthWest();
        var e = hZ.getNorthEast();
        if (hY.lng > e.lng) {
          e.lng = 180;
        }
        var io = eo.convertLL2MC(hY);
        var ic = eo.convertLL2MC(e);
        var h2 = this.config.defaultMaxBounds;
        var ib = Math.max(io.lng, h2.sw.lng);
        var ia = Math.max(io.lat, h2.sw.lat);
        var h4 = Math.min(ic.lng, h2.ne.lng);
        var h3 = Math.min(ic.lat, h2.ne.lat);
        var h7 = new dT(new ht(ib, ia), new ht(h4, h3));
        h7.pointBottomLeft = new ht(ib, ia);
        h7.pointBottomRight = new ht(h4, ia);
        h7.pointTopLeft = new ht(ib, h3);
        h7.pointTopRight = new ht(h4, h3);
        h7.setMinMax();
        h7.makeNormalizedPoint(this._earth.getHeading());
        return h7;
      }
      h5 = h5 || {};
      var hT = h5.margins || [0, 0, 0, 0];
      var ii = this.pixelToPointIn({ x: hT[3], y: this.height - hT[2] }, h5);
      var im = this.pixelToPointIn({ x: this.width - hT[1], y: hT[0] }, h5);
      var h9 =
        typeof h5.heading === "number" ? h5.heading : this._heading % 360;
      var T = typeof h5.tilt === "number" ? h5.tilt : this._tilt;
      var h1 = this._webglMapCamera;
      if ((h9 === 0 && T === 0) || !h1) {
        this._bounds.setSouthWest(ii);
        this._bounds.setNorthEast(im);
        this._bounds.pointBottomLeft = ii;
        this._bounds.pointBottomRight = new ht(im.lng, ii.lat);
        this._bounds.pointTopRight = im;
        this._bounds.pointTopLeft = new ht(ii.lng, im.lat);
        this._bounds.setMinMax();
        this._bounds.makeNormalizedPoint(h9);
        return this._bounds;
      }
      var h8 = this.pixelToPointIn({ x: hT[3], y: hT[0] }, h5);
      var hS = h1.getPosition();
      var ip = Math.sqrt(
        Math.pow(h8.lng - hS[0], 2) + Math.pow(h8.lat - hS[1], 2)
      );
      var ij = this.getZoomUnits();
      var ir = ip / ij;
      var ig = h1._frustumSideLen;
      var hX = h1._fovy;
      if (ir > ig || 90 - T < hX / 2) {
        var iq = [h8.lng - hS[0], h8.lat - hS[1]];
        if (90 - T < hX / 2) {
          iq[0] = -iq[0];
          iq[1] = -iq[1];
        }
        var ih = ig * ij;
        var hW = [(iq[0] / ip) * ih + hS[0], (iq[1] / ip) * ih + hS[1]];
        var id = [im.lng - hS[0], im.lat - hS[1]];
        if (90 - T < hX / 2) {
          id[0] = -id[0];
          id[1] = -id[1];
        }
        var hU = [(id[0] / ip) * ih + hS[0], (id[1] / ip) * ih + hS[1]];
        h8.lng = hW[0];
        h8.lat = hW[1];
        im.lng = hU[0];
        im.lat = hU[1];
      }
      var h6 = this.pixelToPointIn(
        { x: this.width - hT[1], y: this.height - hT[2] },
        h5
      );
      var ie = [ii, im, h8, h6];
      var il = ie[0].lng;
      var it = ie[0].lat;
      var hV = ie[0].lng;
      var h0 = ie[0].lat;
      for (var ik = 1; ik < 4; ik++) {
        if (ie[ik].lng < il) {
          il = ie[ik].lng;
        }
        if (ie[ik].lng > hV) {
          hV = ie[ik].lng;
        }
        if (ie[ik].lat < it) {
          it = ie[ik].lat;
        }
        if (ie[ik].lat > h0) {
          h0 = ie[ik].lat;
        }
      }
      this._bounds.setSouthWest(new ht(il, it));
      this._bounds.setNorthEast(new ht(hV, h0));
      this._bounds.pointTopLeft = h8;
      this._bounds.pointTopRight = im;
      this._bounds.pointBottomRight = h6;
      this._bounds.pointBottomLeft = ii;
      this._bounds.makeNormalizedPoint(h9);
      this._bounds.setMinMax();
      return this._bounds;
    },
    isLoaded: function() {
      return !!this.loaded;
    },
    _getBestLevel: function(i, h1) {
      var hU = 0;
      if (this._renderType === "webgl" && !f6()) {
        hU = 100;
      }
      var hV = h1.margins || [10, 10, 10, 10];
      var hS = h1.zoomFactor || 0;
      var hW = hV[1] + hV[3];
      var hT = hV[0] + hV[2];
      var e = this.getMinZoom();
      var h0 = this.getMaxZoom();
      var hZ = i.toSpan();
      var hY = hZ.width / (this.width - hW - hU);
      var hX = hZ.height / (this.height - hT - hU);
      var T = 18 - eD(Math.max(hY, hX));
      if (T < e) {
        T = e;
      }
      if (T > h0) {
        T = h0;
      }
      T += hS;
      if (this._renderType !== "webgl") {
        T = Math.floor(T);
      }
      return T;
    },
    getViewportIn: function(h3, h6) {
      if (this.mapType === BMAP_EARTH_MAP) {
        h3 = h3 || [];
        var h2 = [];
        for (var hT = 0; hT < h3.length; hT++) {
          if (!h3[hT]) {
            continue;
          }
          h2.push(eo.convertMC2LL(h3[hT]));
        }
        var h1 = this._earth.getViewportIn(h2, h6);
        var hU = h1.center;
        var hV = h1.zoom;
        var hZ = eo.convertLL2MC(hU);
        return { center: hZ, zoom: hV };
      }
      var h5 = { center: this.getCenterIn(), zoom: this.getZoom() };
      if (!h3 || h3.length === 0) {
        return h5;
      }
      h6 = h6 || {};
      var T;
      if (h3 instanceof dT) {
        T = h3;
      } else {
        var hY = h3;
        T = new dT();
        for (var hT = hY.length - 1; hT >= 0; hT--) {
          T.extend(hY[hT]);
        }
        if (T.isEmpty()) {
          return h5;
        }
      }
      var e = T.getCenter();
      var h4 = this._getBestLevel(T, h6);
      if (h6.margins) {
        var hX = h6.margins;
        var hW = (hX[1] - hX[3]) / 2;
        var h0 = (hX[0] - hX[2]) / 2;
        var hS = this.getZoomUnits(h4);
        e.lng = e.lng + hS * hW;
        e.lat = e.lat + hS * h0;
      }
      return { center: e, zoom: h4 };
    },
    setViewportIn: function(hS, hT) {
      if (this.mapType === BMAP_EARTH_MAP) {
        var hX;
        if (hS && hS.center) {
          var T = eo.convertMC2LL(hS.center);
          var hV = this._earth._getEarthZoomByImgZoom(hS.zoom, T);
          hX = { center: T, zoom: hV };
        } else {
          hX = [];
          for (var hU = 0; hU < hS.length; hU++) {
            var hW = eo.convertMC2LL(hS[hU]);
            hX[hU] = new c5(hW.lat, hW.lng);
          }
        }
        this._earth.setViewportIn(hX, hT);
        return;
      }
      var e;
      if (hS && hS.center) {
        e = hS;
      } else {
        e = this.getViewportIn(hS, hT);
      }
      hT = hT || {};
      if (this._renderType === "webgl") {
        this.centerAndZoomIn(e.center, e.zoom, hT);
        return;
      }
      if (e.zoom === this.zoomLevel && hT.enableAnimation !== false) {
        this.panToIn(e.center, { duration: 200, callback: hT.callback });
      } else {
        this.centerAndZoomIn(e.center, e.zoom, hT);
      }
    },
    addSpots: function(T, i) {
      if (!T || T.length === 0) {
        return;
      }
      i = i || {};
      var hU = i.zIndex || 0;
      var hT =
        typeof i.enableMultiResponse === "undefined"
          ? true
          : !!i.enableMultiResponse;
      this.spotsPool = this.spotsPool || {};
      var e = "sp" + this.temp.spotsGuid++;
      this.spotsPool[e] = {
        spots: T.slice(0),
        zIndex: hU,
        enableMultiResponse: hT,
      };
      var hS = this;
      eb.load("hotspot", function() {
        hS._asyncRegister();
      });
      return e;
    },
    getSpots: function(e) {
      return (this.spotsPool[e] && this.spotsPool[e].spots) || [];
    },
    removeSpots: function(e) {
      if (!e || !this.spotsPool[e]) {
        return;
      }
      delete this.spotsPool[e];
    },
    clearSpots: function() {
      delete this.spotsPool;
    },
    getIconByClickPosition: function(i) {
      if (!this.config.enableIconClick || !this._spotsMgr) {
        return null;
      }
      var e = this._spotsMgr.getSpotsByScreenPosition(i);
      if (e[0] && e[0].userdata) {
        var T = e[0].userdata;
        return { name: T.name, uid: T.uid, position: T.iconPoint || e[0].pt };
      }
      return null;
    },
    setBounds: function(e) {
      b7[this.mapType].bounds = e.clone();
    },
    getCoordType: function() {
      return this.config.coordType;
    },
    getPanes: function() {
      return this._panes;
    },
    getInfoWindow: function() {
      if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
        return this.temp.infoWin;
      }
      return null;
    },
    getDistanceIn: function(hT, e) {
      if (!hT || !e) {
        return;
      }
      if (hT.equals(e)) {
        return 0;
      }
      if (this.mapType === BMAP_EARTH_MAP) {
        var hS = eo.convertMC2LL(hT);
        var T = eo.convertMC2LL(e);
        return this._earth.getDistance(hS, T);
      }
      var i = eo.getDistanceByMC(hT, e);
      return i;
    },
    getOverlays: function() {
      var hT = [];
      var hU = this._overlays;
      var hS = this._customOverlays;
      if (hU) {
        for (var T in hU) {
          if (hU[T] instanceof cW) {
            hT.push(hU[T]);
          }
        }
      }
      if (hS) {
        for (var T = 0, e = hS.length; T < e; T++) {
          hT.push(hS[T]);
        }
      }
      return hT;
    },
    getMapType: function() {
      return this.mapType;
    },
    _asyncRegister: function() {
      for (var e = this.temp.registerIndex; e < bp._register.length; e++) {
        bp._register[e](this);
      }
      this.temp.registerIndex = e;
    },
    setDefaultCursor: function(e) {
      this.config.defaultCursor = e;
      if (this.platform) {
        this.platform.style.cursor = this.config.defaultCursor;
      }
    },
    getDefaultCursor: function() {
      return this.config.defaultCursor;
    },
    setDraggingCursor: function(e) {
      this.config.draggingCursor = e;
    },
    getDraggingCursor: function() {
      return this.config.draggingCursor;
    },
    _syncAndChangeMapType: function(e) {
      var i = this;
      if (i._renderType === "webgl" && i.getTilt() > c9.MAX_DRAG_TILT_L2) {
        i.setTilt(c9.MAX_DRAG_TILT_L2, {
          callback: function() {
            i._changeEarthMapType(e);
          },
        });
      } else {
        i._changeEarthMapType(e);
      }
    },
    _changeEarthMapType: function(T) {
      var hS = this;
      var hV = hS.tileMgr.tileLayers;
      if (this._mapTypeChangAni) {
        this._mapTypeChangAni.stop();
      }
      var hU;
      if (this._earth) {
        hU = this._earth.getEarthCanvas();
      }
      if (!this._earth) {
        this.maskLayer.style.opacity = 1;
        this.maskLayer.style.zIndex = 999;
        this.maskLayer.style.background = "#000";
      }
      this._mapTypeChangAni = new p({
        duration: 400,
        render: function(e) {
          if (!hS._earth) {
            return;
          }
          hU.style.opacity = e;
        },
        finish: function() {
          for (var e = hV.length - 1, hW = e; hW >= 0; hW--) {
            var hY = hV[hW].tilesDiv;
            if (hY) {
              hY.style.visibility = "hidden";
            }
            if (hV[hW]._isInnerLayer && hS._renderType !== "webgl") {
              hS.removeTileLayer(hV[hW]);
            }
          }
          hS._mapTypeChangAni = null;
          hS._mapTypeChanging = false;
          function hX() {
            var h2 = hS.getZoom() - 2;
            var h3 = hS.getCenterIn();
            var h0 = eo.convertMC2LL(h3);
            hS._earth = new bp.Earth(hS, {
              center: h0,
              zoom: h2,
              showRealSunlight: hS.config.showRealSunlight,
              showMilkyway: hS.config.showMilkyway,
              earthBackground: hS.config.earthBackground,
            });
            hS._proxyEarthEvents();
            var hZ = hS.mapType;
            hS.mapType = T;
            var h1 = new bc("onmaptypechange");
            h1.zoomLevel = this.zoomLevel;
            h1.mapType = T;
            h1.exMapType = hZ;
            hS.dispatchEvent(h1);
            hS._setMapTypeStatus(T);
            D.extend(hS, bp.EarthView.prototype);
            if (!hS._navigationCtrl && hS.config.showControls) {
              hS._navigationCtrl = new eV(hS);
            }
          }
          if (!hS._earth) {
            if (bp["FeatureStyle" + hS.config.style]) {
              hX();
            } else {
              hS.loadMapStyleFiles(function() {
                hX();
              });
            }
          }
          if (parseInt(hS.maskLayer.style.opacity, 10) === 1) {
            setTimeout(function() {
              hS.maskLayer.style.zIndex = 9;
              hS.maskLayer.style.opacity = 0;
            }, 1000);
          }
        },
      });
      if (!this._earth) {
        return;
      }
      var i = this.mapType;
      this.mapType = T;
      var hT = new bc("onmaptypechange");
      hT.zoomLevel = this.zoomLevel;
      hT.mapType = T;
      hT.exMapType = i;
      this.dispatchEvent(hT);
      hS._setMapTypeStatus(T);
      D.extend(hS, bp.EarthView.prototype);
    },
    getMapStyleId: function() {
      if (typeof this.config.style === "string") {
        return this.config.style;
      }
      return this.config.mapStyleId || "custom";
    },
    _setMapTypeStatus: function(T) {
      var hW = arguments[1];
      if (T === BMAP_EARTH_MAP) {
        var hU = this._earth.getEarthCanvas();
        if (hU) {
          hU.style.display = "";
        }
        var hX = { noAnimation: true };
        this._earth.setCenter(eo.convertMC2LL(this.centerPoint), hX);
        this._earth.setImageZoom(this.zoomLevel, hX);
        this._earth.setTilt(this.getTilt(), hX);
        this._earth.setHeading(this.getHeading(), hX);
      } else {
        if (this.preMapType === BMAP_EARTH_MAP && this._earth) {
          var hV = this._earth;
          var hS = hV.getMapZoom();
          var hT = hV._imageRawZoom || hS;
          var i = hT - hS;
          var e = hV.getCenter();
          if (this._renderType === "webgl") {
            this._tilt = hV.getTilt();
            if (this.zoomLevel > 7) {
              this._heading = hV.getHeading();
              hW && hW(e, hS);
              return;
            }
            if (hV.getHeading() !== 0) {
              hV.setTilt(this.getTilt());
              hV.setHeading(this.getHeading(), {
                callback: function() {
                  hW && hW(e, hS);
                },
              });
            } else {
              hW && hW(e, hS);
            }
            return;
          }
          if (i < 0.1 && hV.getTilt() === 0 && hV.getHeading() === 0) {
            hW && hW(e, hS);
            return;
          }
          hV.setTilt(0);
          hV.setHeading(0);
          hV.setZoom(hV.getZoom() - i, {
            callback: function() {
              hW && hW(e, hS);
            },
          });
        }
      }
    },
    _proxyEarthEvents: function() {
      var hT = this;
      var hU = this._earth;
      hU.on("tilesload", function(i) {
        hT.fire(i);
      });
      hU.on("centerandzoom", function(i) {
        hT.dispatchEvent(new bc("onmoveend"));
        hT.dispatchEvent(new bc("onzoomend"));
      });
      function hS(i) {
        hT.fire(i);
      }
      var e = [
        "zoomstart",
        "zoomend",
        "tilesload",
        "sunlighttime_change",
        "sunlighttime_clear",
        "centerandzoom",
        "animation_start",
        "animation_stop",
        "movestart",
        "moveend",
        "moving",
        "dragstart",
        "dragend",
        "dragging",
      ];
      for (var T = 0; T < e.length; T++) {
        hU.on(e[T], hS);
      }
    },
    forceEnableEarth: function() {
      this.config.forceEnableEarth = true;
      this.config.enableEarth = a9.ifEnableEarth(true);
      this.dispatchEvent(new bc("forceenableearth"));
      return this.config.enableEarth;
    },
    setLock: function(e) {
      if (this.mapType === BMAP_EARTH_MAP) {
        this._earth.setLock(e);
      }
      this._lock = e;
    },
    getLock: function() {
      if (this.mapType === BMAP_EARTH_MAP) {
        return this._earth.getLock();
      }
      return this._lock;
    },
    getEarth: function() {
      return this._earth;
    },
    isSupportEarth: function() {
      return this.config.enableEarth;
    },
    isCanvasMap: function() {
      return !!(
        this._renderType === "canvas" && this.getMapType() !== "B_EARTH_MAP"
      );
    },
    getCanvasMapCoordByUid: function(hT) {
      if (this._renderType === "webgl") {
        var hU = this.tileMgr.tileLayers;
        for (var hS = 0; hS < hU.length; hS++) {
          if (hU[hS].labelProcessor) {
            return hU[hS].labelProcessor.getLabelByUid(hT, "");
          }
        }
        return null;
      }
      var e = this.canvas2dMapMgr._labelClick;
      var T = e.findLabelByUid(hT);
      return T ? new ht(T.iconPos.geoX, T.iconPos.geoY) : null;
    },
    loadBizData: function(i) {
      var e = new bc("onloadbizdata");
      e.data = i;
      this.dispatchEvent(e);
    },
    unloadBizData: function() {
      var e = new bc("onunloadbizdata");
      this.dispatchEvent(e);
    },
    zoomIn: function(e) {
      this.setZoomIn(this.zoomLevel + 1, { zoomCenter: e });
    },
    zoomOut: function(e) {
      this.setZoomIn(this.zoomLevel - 1, { zoomCenter: e });
    },
    setMaxZoom: function(e) {
      if (this._renderType === "webgl") {
        this.config.maxZoom = e <= 21 ? e : 21;
      } else {
        this.config.maxZoom = e <= 19 ? e : 19;
      }
    },
    setMinZoom: function(e) {
      this.config.minZoom = e >= 3 ? e : 3;
    },
    setCenterIn: function(e, i) {
      this.panToIn(e, i);
    },
    getRenderType: function() {
      return this._renderType;
    },
    getSolarInfo: function(hS) {
      hS = hS || this._initDate;
      var T = bA(hS);
      var e = eo.convertLL2MC(new ht(T[0], T[1]));
      var h0 = e.latLng;
      var hV = bp.Projection.convertMC2LL(this.centerPoint);
      var hX = hS.getUTCHours();
      var hZ = hX + (24 * hV.lng) / 360;
      var hY = hZ - 12;
      var hW = hY * 60 * 0.25;
      var hU = Math.asin(
        Math.sin(dL(hV.lat)) * Math.sin(dL(h0.lat)) +
          Math.cos(dL(hV.lat)) * Math.cos(dL(h0.lat)) * Math.cos(dL(hW))
      );
      var hT = Math.asin(
        (Math.sin(dL(hW)) * Math.cos(dL(h0.lat))) / Math.cos(hU)
      );
      var i = "north";
      if (hV.lat < h0.lat) {
        i = "south";
      }
      return {
        zenith: e,
        solarAltitude: hU,
        solarAzimuth: hT,
        centerPosition: i,
        position: e,
      };
    },
    setDisplayOptions: function(T) {
      if (!T) {
        return;
      }
      for (var e in this._displayOptions) {
        if (this._displayOptions.hasOwnProperty(e)) {
          if (
            typeof T[e] === "boolean" ||
            (e === "skyColors" && typeof T.skyColors === "object") ||
            (e === "labelMargin" && typeof T.labelMargin === "number")
          ) {
            this._displayOptions[e] = T[e];
          }
        }
      }
      var i = this.getMapType();
      if (i === db.NORMAL) {
        this.fire(new bc("ondisplayoptions_changed"));
      } else {
        if (i === db.EARTH && this._earth) {
          this._earth.fire(new bc("ondisplayoptions_changed"));
        }
      }
    },
    getHorizonPosY: function(e) {
      if (!e || !this._webglMapCamera) {
        return null;
      }
      var i = this._webglMapCamera.fromMCToScreenPixel(e.lng, e.lat, {
        heading: 0,
      });
      return i.y;
    },
    getIndoorInfo: function() {
      if (!this._indoorMgr) {
        return;
      }
      return this._indoorMgr.getData();
    },
    showIndoor: function(e, T) {
      var i = new bc("onindoor_status_changed");
      i.uid = e;
      i.floor = T;
      this.fire(i);
    },
    addAreaSpot: function(e, T) {
      if (!e || e.length === 0) {
        return;
      }
      T = T || {};
      this.areaSpots = this.areaSpots || {};
      var i = T.id || "sp" + this.temp.spotsGuid++;
      this.areaSpots[i] = { spot: e, userData: T.userData };
      var hS = this;
      eb.load("hotspot", function() {
        hS._asyncRegister();
      });
      return i;
    },
    getAreaSpot: function(e) {
      if (this.areaSpots && this.areaSpots[e]) {
        return this.areaSpots[e];
      }
      return null;
    },
    removeAreaSpot: function(e) {
      if (!e || !this.areaSpots[e]) {
        return;
      }
      delete this.areaSpots[e];
    },
    clearAreaSpots: function() {
      this.areaSpots = {};
    },
    resetSpotStatus: function() {
      this.fire(new bc("onspot_status_reset"));
    },
    hightlightSpotByUid: function(e, T) {
      var i = new bc("onspot_highlight");
      i.uid = e;
      i.tilePosStr = T;
      this.fire(i);
    },
    setZoomIn: function(i, e) {
      e = e || {};
      this.zoomTo(i, e.zoomCenter || null, e);
    },
    getCurrentMaxTilt: function() {
      var e = this.zoomLevel;
      if (this.mapType === "B_EARTH_MAP") {
        return c9.MAX_DRAG_TILT_L2;
      }
      if (this.config.restrictCenter === false) {
        return c9.MAX_DRAG_TILT;
      }
      if (e >= 19) {
        return c9.MAX_DRAG_TILT;
      } else {
        if (e <= 18) {
          if (e < this._enableTiltZoom) {
            if (e >= this._enableTiltZoom - 2) {
              return (1 - (this._enableTiltZoom - e) / 2) * c9.MAX_DRAG_TILT_L2;
            }
            return 0;
          }
          return c9.MAX_DRAG_TILT_L2;
        } else {
          return (
            (c9.MAX_DRAG_TILT - c9.MAX_DRAG_TILT_L2) * (e - 18) +
            c9.MAX_DRAG_TILT_L2
          );
        }
      }
    },
    worldSize: function(i) {
      var e = i || this.zoomLevel;
      return c9.WORLD_SIZE_MC / this.getZoomUnits(e);
    },
    setTrafficOn: function() {
      this.addTileLayer(cf);
    },
    setTrafficOff: function() {
      this.removeTileLayer(cf);
    },
    showOverlayContainer: function() {
      this.setDisplayOptions({ overlay: true });
    },
    hideOverlayContainer: function() {
      this.setDisplayOptions({ overlay: false });
    },
    addLabelsToMapTile: function(T) {
      for (var e = 0; e < T.length; e++) {
        if (typeof T[e].type === "undefined") {
          T[e].type = "fixed";
        }
        if (typeof T[e].rank !== "number") {
          T[e].rank = 50000;
        }
        T[e].pt = T[e].position;
        T[e].custom = true;
        T[e].processedInZoom = 0;
        this._customTileLabels.push(T[e]);
      }
      this.dispatchEvent(new bc("onadd_tile_labels"));
    },
    removeLabelsFromMapTile: function(T) {
      for (var hS = 0; hS < T.length; hS++) {
        for (var e = 0; e < this._customTileLabels.length; e++) {
          if (this._customTileLabels[e].uid === T[hS]) {
            this._customTileLabels.splice(e, 1);
          }
        }
      }
      this.dispatchEvent(new bc("onremove_tile_labels"));
    },
    clearLabels: function() {
      this._customTileLabels.length = 0;
      this.dispatchEvent(new bc("onclear_labels"));
    },
    loadMapStyleFiles: function(hT) {
      var i = this.config.style;
      var hS = this.config.styleUrl;
      var T = this;
      this._setTextRenderType();
      if (typeof i === "string" && !hS) {
        if (bp["FeatureStyle" + i]) {
          T.fire(new bc("onstyle_loaded"));
          hT();
          return;
        }
        hn.load(e4.getMapStyleFiles(i), function() {
          if (T.config.style === i) {
            bp["FeatureStyle" + i] = window.FeatureStyle;
            bp["iconSetInfo" + i] = window.iconSetInfo_high;
            bp.indoorStyle = window.indoorStyle;
            T.fire(new bc("onstyle_loaded"));
            hT();
          }
        });
      } else {
        var e = i;
        f.init(T);
        f.getStyleJson(e, function(hV) {
          var h0 = gf;
          var h2 = bp.getGUID("custom");
          T.config.mapStyleId = h2;
          var hY = {};
          D.extend(hY, hV);
          var hW = Math.floor(T.getZoom());
          window.styleCbk = function(h3, h4) {
            if (h4 !== hZ) {
              return;
            }
            if (typeof h3 === "string") {
              h3 = JSON.parse(h3);
            }
            f.onStyleDataBack(h3, hW, h2, hY, h0);
            bp.customStyleLoaded = true;
            T.fire(new bc("onstyle_loaded"));
            hT();
          };
          bp.customStyleInfo = {
            zoomRegion: {},
            zoomStyleBody: [],
            zoomFrontStyle: {},
          };
          var h1 = f.getStyleUrl(hV, h0, "styleCbk", hW);
          var hU = h1.split("?")[0];
          var hZ = h1.split("?")[1];
          if (hS) {
            hU = hS;
            hZ = hU.split("?")[1];
          }
          if (!bp.iconSetInfoCustom) {
            var hX = e4.getMapStyleFiles("default");
            hX.splice(1, 1);
            hn.load(hX, function() {
              bp.iconSetInfoCustom = window.iconSetInfo_high;
              bp.indoorStyle = window.indoorStyle;
              if (hU.indexOf("jsonp") > "-1") {
                hn.load(hU);
              } else {
                bp.customStyleInfo.xhr = gB.post(hU, hZ, styleCbk);
              }
            });
          } else {
            if (hU.indexOf("jsonp") > "-1") {
              hn.load(hU);
            } else {
              bp.customStyleInfo.xhr = gB.post(hU, hZ, styleCbk);
            }
          }
        });
      }
    },
    setCopyrightOffset: function(hS, i) {
      var T = new bc("oncopyrightoffsetchange", { logo: hS, cpy: i });
      this.dispatchEvent(T);
    },
    _setTextRenderType: function(e) {
      if (e) {
        this.config.textRenderType = e;
        return;
      }
      if (this.config.textRenderType !== null) {
        return;
      }
      if (f6()) {
        this.config.textRenderType = "canvas";
      } else {
        if (typeof this.config.style === "string") {
          this.config.textRenderType = "image";
        } else {
          this.config.textRenderType = "canvas";
        }
      }
    },
    destroy: function() {
      this._destroyed = true;
      this.fire(new bc("ondestroy"));
    },
    centerAndZoom: function(e, hU, T) {
      if (Object.prototype.toString.call(hU) !== "[object Undefined]") {
        hU = parseInt(hU);
      }
      if (typeof e === "string") {
        var hS = this;
        var hT = new W();
        hT.getPoint(e, function(hV) {
          e = hV;
          var hW = eo.convertLL2MC(e);
          hS.centerAndZoomIn(hW, hU, T);
        });
      } else {
        var i = eo.convertLL2MC(e);
        this.centerAndZoomIn(i, hU, T);
      }
    },
    pointToPixel: function(e, T) {
      var i = eo.convertLL2MC(e);
      var hS = {};
      D.extend(hS, T);
      if (hS && hS.center) {
        hS.center = eo.convertLL2MC(hS.center);
      }
      return this.pointToPixelIn(i, hS);
    },
    pixelToPoint: function(T, i) {
      var hS = {};
      D.extend(hS, i);
      if (hS && hS.center) {
        hS.center = eo.convertLL2MC(hS.center);
      }
      var e = this.pixelToPointIn(T, hS);
      return eo.convertMC2LL(e);
    },
    pointToOverlayPixel: function(e, T) {
      var i = eo.convertLL2MC(e);
      var hS = {};
      D.extend(hS, T);
      if (hS && hS.center) {
        hS.center = eo.convertLL2MC(hS.center);
      }
      return this.pointToOverlayPixelIn(i, hS);
    },
    overlayPixelToPoint: function(T, i) {
      var hS = {};
      D.extend(hS, i);
      if (hS && hS.center) {
        hS.center = eo.convertLL2MC(hS.center);
      }
      var e = this.overlayPixelToPointIn(T, hS);
      return eo.convertMC2LL(e);
    },
    setViewport: function(T, hS) {
      var e;
      if (T && T.center) {
        e = {};
        D.extend(e, T);
        e.center = eo.convertLL2MC(e.center);
      } else {
        e = [];
        for (var hT = 0; hT < T.length; hT++) {
          e[hT] = eo.convertLL2MC(T[hT]);
        }
      }
      this.setViewportIn(e, hS);
    },
    getViewport: function(hU, hS) {
      var T;
      if (hU && hU.length) {
        T = [];
        for (var hT = 0; hT < hU.length; hT++) {
          T[hT] = eo.convertLL2MC(hU[hT]);
        }
      } else {
        if (hU instanceof dT) {
          T = new dT(
            eo.convertLL2MC(hU.getSouthWest()),
            eo.convertLL2MC(hU.getNorthEast())
          );
          T.setMinMax();
        }
      }
      var e = this.getViewportIn(T, hS);
      e.center = eo.convertMC2LL(e.center);
      return e;
    },
    getDistance: function(hT, T) {
      var i = eo.convertLL2MC(hT);
      var hS = eo.convertLL2MC(T);
      var e = this.getDistanceIn(i, hS);
      return e;
    },
    setCenter: function(e, T) {
      if (typeof e === "string") {
        var hS = this;
        var hT = new W();
        hT.getPoint(e, function(hU) {
          e = hU;
          var hV = eo.convertLL2MC(e);
          hS.setCenterIn(hV, T);
        });
      } else {
        var i = eo.convertLL2MC(e);
        this.setCenterIn(i, T);
      }
    },
    setZoom: function(T, e) {
      var i = {};
      D.extend(i, e);
      if (i && i.zoomCenter) {
        i.zoomCenter = eo.convertLL2MC(i.zoomCenter);
      }
      this.setZoomIn(T, i);
    },
    flyTo: function(e, hS, T) {
      var i = eo.convertLL2MC(e);
      this.flyToIn(i, hS, T);
    },
    panTo: function(e, T) {
      var i = eo.convertLL2MC(e);
      this.panToIn(i, T);
    },
    getCenter: function() {
      var e = this.getCenterIn();
      return eo.convertMC2LL(e);
    },
    getBounds: function() {
      var e = this.getBoundsIn();
      var i = new dT(
        eo.convertMC2LL(e.getSouthWest()),
        eo.convertMC2LL(e.getNorthEast())
      );
      return i;
    },
    setMapStyleV2: function(e) {
      this._setTextRenderType("canvas");
      this.setOptions({ style: e });
    },
    startViewAnimation: function(T) {
      var e = T._options.delay;
      var i = this;
      setTimeout(function() {
        T._start(i);
      }, e);
    },
    pauseViewAnimation: function(e) {
      e._pause(this);
    },
    continueViewAnimation: function(e) {
      e._continue(this);
    },
    cancelViewAnimation: function(e) {
      e._cancel(this);
    },
    getMapScreenshot: function() {
      return this._webglMapScene._painter._canvas.toDataURL();
    },
  });
  var db = {
    NORMAL: "B_NORMAL_MAP",
    EARTH: "B_EARTH_MAP",
    SATELLITE: "B_STREET_MAP",
  };
  bp.MapTypeId = db;
  window.BMAP_NORMAL_MAP = "B_NORMAL_MAP";
  window.BMAPGL_NORMAL_MAP = "B_NORMAL_MAP";
  window.BMAP_SATELLITE_MAP = "B_SATELLITE_MAP";
  window.BMAP_HYBRID_MAP = "B_STREET_MAP";
  window.BMAP_EARTH_MAP = "B_EARTH_MAP";
  window.BMAP_COORD_MERCATOR = 1;
  window.BMAP_SYS_DRAWER = 0;
  window.BMAP_SVG_DRAWER = 1;
  window.BMAP_VML_DRAWER = 2;
  window.BMAP_CANVAS_DRAWER = 3;
  var f = {
    environment: "jsapi",
    map: null,
    ontilesloaded: false,
    onstyle_loaded: false,
    init: function(i) {
      var e = this;
      e.map = i;
      this.changeCopyright();
      this.setEnvironment(e.map.config.style);
      this.resetEventListener();
    },
    resetEventListener: function() {
      var e = this;
      this.ontilesloaded = false;
      this.onstyle_loaded = false;
      e.map.addEventListener("ontilesloaded", e.checkLoadedStatus);
      e.map.addEventListener("onstyle_loaded", e.checkLoadedStatus);
    },
    checkLoadedStatus: function(i) {
      f[i.type] = true;
      if (f.ontilesloaded && f.onstyle_loaded) {
        this.dispatchEvent(new bc("onstylechangetilesloaded"));
        this.removeEventListener("ontilesloaded", f.checkLoadedStatus);
        this.removeEventListener("onstyle_loaded", f.checkLoadedStatus);
      }
    },
    changeCopyright: function() {
      var e = this;
      if (e.map.cpyCtrl) {
        e.map.cpyCtrl.hide();
        if (e.environment !== "customEditor") {
          e.map.setCopyrightOffset(new ea(1, 1));
        }
      } else {
        e.map.addEventListener("oncopyrightaddend", function() {
          e.map.cpyCtrl.hide();
          if (e.environment !== "customEditor") {
            e.map.setCopyrightOffset(new ea(1, 1));
          }
        });
      }
    },
    setEnvironment: function(e) {
      if (e.customEditor) {
        this.environment = "customEditor";
        bK.map = this.map;
      } else {
        if (e.sharing) {
          this.environment = "sharing";
        } else {
          if (e.preview) {
            this.environment = "preview";
          } else {
            this.environment = "jsapi";
          }
        }
      }
    },
    getStyleJson: function(hS, hU) {
      var hT = this;
      if (hS.styleJson) {
        hU && hU(hS.styleJson);
      } else {
        if (hS.styleId) {
          var i = hS.styleId;
          var e = (Math.random() * 100000).toFixed(0);
          bp["_cbk_si_phpui" + e] = function(hW) {
            var hV = [];
            if (
              hW.result &&
              hW.result["error"] === 0 &&
              hW.content &&
              hW.content["status"] === 0
            ) {
              hV = hT.parseJson(hW.content["data"]["json"]);
              hU && hU(hV);
            } else {
              hU && hU("default");
            }
          };
          bp["_cbk_si_api" + e] = function(hW) {
            var hV = [];
            if (hW.status === 0) {
              if (hW.info) {
                hV = hT.parseJson(hW.info["json"]);
              } else {
                hV = hT.parseJson(hW.data["json"]);
              }
              hU && hU(hV);
            } else {
              hU && hU("default");
            }
          };
          var T = "";
          switch (this.environment) {
            case "jsapi":
              T =
                eW.apiHost +
                "/?qt=custom_map&v=3.0&style_id=" +
                i +
                "&type=publish&ak=" +
                gf;
              T += "&callback=" + eB + "._cbk_si_phpui" + e;
              break;
            case "sharing":
              T += "/apiconsole/custommap/getSharingJson";
              T += "?styleid=" + i + "&type=edit";
              T += "&ck=" + eB + "._cbk_si_api" + e;
              break;
            case "preview":
              T += "/apiconsole/custommap/getJson";
              T += "?styleid=" + i + "&type=edit";
              T += "&ck=" + eB + "._cbk_si_api" + e;
              break;
          }
          hn.load(T);
        } else {
          hU && hU("default");
        }
      }
    },
    parseJson: function(T) {
      if (T === null || T === "") {
        return [];
      }
      var i = {
        t: "featureType",
        e: "elementType",
        v: "visibility",
        c: "color",
        l: "lightness",
        s: "saturation",
        w: "weight",
        z: "level",
        h: "hue",
        f: "fontsize",
        zri: "curZoomRegionId",
        zr: "curZoomRegion",
      };
      var hT = {
        all: "all",
        g: "geometry",
        "g.f": "geometry.fill",
        "g.s": "geometry.stroke",
        l: "labels",
        "l.t.f": "labels.text.fill",
        "l.t.s": "labels.text.stroke",
        "l.t": "labels.text",
        "l.i": "labels.icon",
        "g.tf": "geometry.topfill",
        "g.sf": "geometry.sidefill",
      };
      var hS = T.split(",");
      var e = hS.map(function(hX) {
        var hW = hX.split("|").map(function(h3) {
          var h1 = i[h3.split(":")[0]];
          var h0 = hT[h3.split(":")[1]]
            ? hT[h3.split(":")[1]]
            : h3.split(":")[1];
          switch (h0) {
            case "poi":
              h0 = "poilabel";
              break;
            case "districtlabel":
              h0 = "districtlabel";
              break;
          }
          var h2 = {};
          h2[h1] = h0;
          return h2;
        });
        var hU = hW[0];
        var hZ = 1;
        if (hW[1]["elementType"]) {
          hZ = 2;
          D.extend(hU, hW[1]);
        }
        var hY = {};
        for (var hV = hZ; hV < hW.length; hV++) {
          D.extend(hY, hW[hV]);
        }
        return D.extend(hU, { stylers: hY });
      });
      return e;
    },
    getStyleUrl: function(T, hT, hS, e) {
      this.styleJson = T;
      var i =
        e4.apiHost + "/custom/v2/mapstyle?version=" + 4 + "&ak=" + hT + "&";
      i += "is_all=true&is_new=1&";
      i += "styles=" + encodeURIComponent(this.styleJson2styleStringV2(T, e));
      return i;
    },
    styleJson2styleStringV2: function(e, hX) {
      var hY = {
        featureType: "t",
        elementType: "e",
        visibility: "v",
        color: "c",
        lightness: "l",
        saturation: "s",
        weight: "w",
        level: "z",
        hue: "h",
        fontsize: "f",
      };
      var h0 = {
        all: "all",
        geometry: "g",
        "geometry.fill": "g.f",
        "geometry.stroke": "g.s",
        labels: "l",
        "labels.text.fill": "l.t.f",
        "labels.text.stroke": "l.t.s",
        "labels.text": "l.t",
        "labels.icon": "l.i",
        "geometry.topfill": "g.tf",
        "geometry.sidefill": "g.sf",
      };
      var h1 = [];
      for (var hS = this.map.getMinZoom(); hS <= this.map.getMaxZoom(); hS++) {
        bp.customStyleInfo.zoomFrontStyle[hS] = {};
      }
      bp.customStyleInfo.zoomFrontStyle.main = {};
      var T = false;
      for (var hS = 0; !!e[hS]; hS++) {
        var hZ = e[hS];
        if (this.isOnlyZoomStyler(hZ)) {
          continue;
        }
        hX = this.getFrontZoom(hZ, hX);
        if (
          (hZ.featureType === "land" ||
            hZ.featureType === "all" ||
            hZ.featureType === "background") &&
          typeof hZ.elementType === "string" &&
          (hZ.elementType === "geometry" ||
            hZ.elementType === "geometry.fill" ||
            hZ.elementType === "all") &&
          hZ.stylers &&
          !T
        ) {
          if (hZ.stylers["color"]) {
            bp.customStyleInfo.bmapLandColor = hZ.stylers["color"];
          }
          if (hZ.stylers["visibility"] && hZ.stylers["visibility"] === "off") {
            bp.customStyleInfo.bmapLandColor = "#00000000";
          }
          if (hZ.featureType === "land") {
            T = true;
          }
        }
        if (
          hZ.featureType === "building" &&
          typeof hZ.elementType === "string" &&
          hZ.elementType === "geometry.fill"
        ) {
          bp.customStyleInfo.buildingFill = true;
        }
        if (
          hZ.featureType === "roadarrow" &&
          hZ.elementType === "labels.icon" &&
          hZ.stylers
        ) {
          bp.customStyleInfo.zoomFrontStyle[hX]["bmapRoadarrowVisibility"] =
            hZ.stylers["visibility"];
        }
        var hT = {};
        D.extend(hT, hZ);
        var hV = hT.stylers;
        delete hT.stylers;
        D.extend(hT, hV);
        var hU = [];
        for (var hW in hY) {
          if (hT[hW]) {
            if (this.isEditorZoomKeys(hW)) {
              continue;
            }
            if (hW === "elementType") {
              hU.push(hY[hW] + ":" + h0[hT[hW]]);
            } else {
              switch (hT[hW]) {
                case "poilabel":
                  hT[hW] = "poi";
                  break;
                case "districtlabel":
                  hT[hW] = "label";
                  break;
              }
              hU.push(hY[hW] + ":" + hT[hW]);
            }
          }
        }
        if (hU.length > 2) {
          h1.push(hU.join("|"));
        }
      }
      return h1.join(",");
    },
    getFrontZoom: function(i, e) {
      var T = i.stylers["level"];
      if (T === undefined) {
        return "main";
      } else {
        return parseInt(T, 10);
      }
    },
    isZoomConfig: function(e) {
      var i = e.stylers["level"];
      if (i === undefined) {
        return false;
      } else {
        return true;
      }
    },
    isOnlyZoomStyler: function(e) {
      var i = {};
      D.extend(i, e.stylers);
      delete i.curZoomRegionId;
      delete i.curZoomRegion;
      delete i.level;
      if (D.isEmptyObject(i)) {
        return true;
      } else {
        return false;
      }
    },
    isSelectZoom: function(i, e) {
      var T = i.stylers["level"];
      if (T === undefined) {
        return true;
      } else {
        if (T === e + "") {
          return true;
        } else {
          return false;
        }
      }
    },
    isEditorZoomKeys: function(e) {
      var i = { curZoomRegionId: true, curZoomRegion: true };
      if (i[e]) {
        return true;
      } else {
        return false;
      }
    },
    getZoomRegion: function(e, i) {
      var hS = e.stylers["level"];
      var T = {};
      D.extend(T, i);
      if (hS === undefined) {
        return T;
      } else {
        T[parseInt(hS, 10)] = true;
        return T;
      }
    },
    onStyleDataBack: function(hS, e, i, T, hU) {
      if (hS.status !== 0) {
        return;
      }
      if (hS.data.style.length === 3) {
        if (!bp.customStyleInfo.baseFs) {
          bp.customStyleInfo.baseFs = hS.data.style;
        }
        bp.StyleBody = hS.data.style[2];
      } else {
        bp.StyleBody = hS.data.style;
      }
      var hT = bp.customStyleInfo.baseFs;
      bp["FeatureStyle" + i] = hT;
      this.updateFrontFeatureStyle();
    },
    updateFrontFeatureStyle: function() {
      if (bp.customStyleInfo.zoomFrontStyle.main["bmapRoadarrowVisibility"]) {
        for (var e = this.map.getMinZoom(); e <= this.map.getMaxZoom(); e++) {
          if (
            !bp.customStyleInfo.zoomFrontStyle[e]["bmapRoadarrowVisibility"]
          ) {
            bp.customStyleInfo.zoomFrontStyle[e]["bmapRoadarrowVisibility"] =
              bp.customStyleInfo.zoomFrontStyle.main["bmapRoadarrowVisibility"];
          }
        }
      }
    },
  };
  var bK = {
    map: null,
    labelCache: {},
    calcDrawMc: function(T, i, e) {
      var hS = [];
      switch (i) {
        case "fill":
          hS = this.calcFill(T, e);
          break;
        case "line":
          break;
        case "building3d":
          hS = this.calcBuilding3d(T, e);
          break;
      }
      return hS;
    },
    calcFill: function(hT, T) {
      var hU = [];
      for (var hS = 0; hS < hT.length; hS = hS + 5) {
        var e = this.coordToMc(
          { x: hT[hS], y: hT[hS + 1] },
          T.row,
          T.col,
          T.mercatorSize,
          T.baseTileSize
        );
        hU.push(e[0], e[1]);
      }
      return hU;
    },
    calcLine: function(hT, T) {
      var hU = [];
      var hV = new Int16Array(hT.buffer);
      for (var hS = 0; hS < hV.length; hS = hS + 10) {
        var e = this.coordToMc(
          { x: hV[hS] / 10, y: hV[hS + 1] / 10 },
          T.row,
          T.col,
          T.mercatorSize,
          T.baseTileSize
        );
        hU.push(e[0], e[1]);
      }
      return hU;
    },
    calcBuilding3d: function(hU, T) {
      var hV = [];
      var hS = {};
      for (var hT = 0; hT < hU.length / 2; hT = hT + 7) {
        if (hU[hT] === hU[hT - 7] && hU[hT + 1] === hU[hT - 6]) {
          continue;
        }
        if (hS[hU[hT].toString() + hU[hT + 1].toString()]) {
          continue;
        }
        hS[hU[hT].toString() + hU[hT + 1].toString()] = true;
        var e = this.coordToMc(
          { x: hU[hT], y: hU[hT + 1] },
          T.row,
          T.col,
          T.mercatorSize,
          T.baseTileSize
        );
        hV.push(e[0], e[1]);
      }
      return hV;
    },
    coordToMc: function(hT, hS, e, i, T) {
      return [hT.x * (i / T) + e * i, hT.y * (i / T) + hS * i];
    },
    addDrawIntoAreaSpots: function(e, hT) {
      if (f.environment !== "customEditor") {
        return;
      }
      if (!hT.styleIds) {
        return;
      }
      for (var T = 0; T < hT.styleIds.length; T++) {
        var hW = 0;
        if (T > 0) {
          hW = hT.verticesLength[T - 1];
        }
        end = hT.verticesLength[T];
        var hU = [];
        var hS = "";
        if (hT.vertex) {
          hU = hT.vertex;
          hS = "building3d";
        } else {
          if (hT.data[0]) {
            hU = hT.data[0];
            hS = hT.type;
          } else {
            continue;
          }
        }
        var hV = this.calcDrawMc(hU.slice(hW, end), hS, e);
        this.map.addAreaSpot(hV, {
          userData: { styleId: hT.styleIds[T], type: "mapstyle" },
        });
      }
    },
    addLabelIntoAreaSpots: function(e) {
      if (f.environment !== "customEditor") {
        return;
      }
      for (var hT = 0; hT < e.length; hT++) {
        var hU = e[hT];
        for (var hS = 0; hS < hU.fixedLabel.length; hS++) {
          var T = hU.fixedLabel[hS];
          if (!T._mcBds) {
            continue;
          }
          var hV = [
            T._mcBds[0].lng,
            T._mcBds[0].lat,
            T._mcBds[0].lng,
            T._mcBds[1].lat,
            T._mcBds[1].lng,
            T._mcBds[1].lat,
            T._mcBds[1].lng,
            T._mcBds[0].lat,
          ];
          if (!this.labelCache[hV.join()]) {
            this.labelCache[hV.join()] = true;
            this.map.addAreaSpot(hV, {
              userData: { styleId: T.styleId, type: "mapstyle", name: T.name },
            });
          }
        }
      }
    },
  };
  function bS(i, e, hS, T) {
    this.cx = 3 * i;
    this.bx = 3 * (hS - i) - this.cx;
    this.ax = 1 - this.cx - this.bx;
    this.cy = 3 * e;
    this.by = 3 * (T - e) - this.cy;
    this.ay = 1 - this.cy - this.by;
    this.p1x = i;
    this.p1y = T;
    this.p2x = hS;
    this.p2y = T;
  }
  bS.prototype.sampleCurveX = function(e) {
    return ((this.ax * e + this.bx) * e + this.cx) * e;
  };
  bS.prototype.sampleCurveY = function(e) {
    return ((this.ay * e + this.by) * e + this.cy) * e;
  };
  bS.prototype.sampleCurveDerivativeX = function(e) {
    return (3 * this.ax * e + 2 * this.bx) * e + this.cx;
  };
  bS.prototype.solveCurveX = function(e, hX) {
    if (typeof hX === "undefined") {
      hX = 0.000001;
    }
    var hW;
    var hV;
    var hT;
    var T;
    var hS;
    for (hT = e, hS = 0; hS < 8; hS++) {
      T = this.sampleCurveX(hT) - e;
      if (Math.abs(T) < hX) {
        return hT;
      }
      var hU = this.sampleCurveDerivativeX(hT);
      if (Math.abs(hU) < 0.000001) {
        break;
      }
      hT = hT - T / hU;
    }
    hW = 0;
    hV = 1;
    hT = e;
    if (hT < hW) {
      return hW;
    }
    if (hT > hV) {
      return hV;
    }
    while (hW < hV) {
      T = this.sampleCurveX(hT);
      if (Math.abs(T - e) < hX) {
        return hT;
      }
      if (e > T) {
        hW = hT;
      } else {
        hV = hT;
      }
      hT = (hV - hW) * 0.5 + hW;
    }
    return hT;
  };
  bS.prototype.solve = function(e, i) {
    return this.sampleCurveY(this.solveCurveX(e, i));
  };
  var co = {};
  function p(T) {
    var e = {
      duration: 1000,
      fps: 30,
      delay: 0,
      transition: co.linear,
      dropLastAnimation: false,
    };
    if (T) {
      for (var hS in T) {
        e[hS] = T[hS];
      }
    }
    if (T.beginTime) {
      this._beginTime = T.beginTime;
    }
    this._callbacks = [];
    this._options = e;
    if (e.delay) {
      var hT = this;
      setTimeout(function() {
        hT._doStart();
      }, e.delay);
    } else {
      this._doStart();
    }
    this._pauseTime = 0;
  }
  p.INFINITE = "INFINITE";
  p.prototype._doStart = function() {
    if (this._isPausing) {
      var e = performance.now() || new Date().getTime();
      this._pauseTime += e - this._isPausing;
      this._isPausing = undefined;
    }
    if (window.requestAnimationFrame) {
      var i = this;
      i._timer = window.requestAnimationFrame(function(T) {
        i._loop(T);
      });
    } else {
      this._beginTime = new Date().getTime();
      if (this._options.duration === p.INFINITE) {
        this._endTime = null;
      } else {
        this._endTime = this._beginTime + this._options.duration;
      }
      this._loop();
    }
  };
  p.prototype._loop = function(hS) {
    var hV = this;
    hS = hS || new Date().getTime();
    hS = hS - this._pauseTime;
    if (!this._beginTime) {
      this._beginTime = hS;
    }
    if (!this._endTime && typeof this._options.duration === "number") {
      this._endTime = this._beginTime + this._options.duration;
    }
    if (hV._endTime !== null && hS >= hV._endTime) {
      if (hV._options.dropLastAnimation === false) {
        hV._options.render(hV._options.transition(1), 1, hS);
      }
      if (typeof hV._options.finish === "function") {
        hV._options.finish(hS, this);
      }
      for (var hU = 0, e = hV._callbacks.length; hU < e; hU++) {
        hV._callbacks[hU]();
      }
      return;
    }
    var hT;
    if (typeof hV._options.duration === "number") {
      hT = (hS - hV._beginTime) / hV._options.duration;
      hV.schedule = hV._options.transition(hT);
    } else {
      hT = hS - hV._beginTime;
      hV.schedule = 0;
    }
    hV._options.render(hV.schedule, hT, hS);
    if (!hV.terminative) {
      if (window.requestAnimationFrame) {
        hV._timer = requestAnimationFrame(function T(i) {
          hV._loop(i);
        });
      } else {
        hV._timer = setTimeout(function() {
          hV._loop();
        }, 1000 / hV._options.fps);
      }
    }
  };
  p.prototype.stop = function(i, e) {
    this.terminative = true;
    if (this._timer) {
      if (window.cancelAnimationFrame) {
        cancelAnimationFrame(this._timer);
      } else {
        clearTimeout(this._timer);
      }
      this._timer = null;
      if (typeof this._options.onStop === "function") {
        this._options.onStop(e);
      }
    }
    if (i) {
      this._endTime = this._beginTime;
      this._loop();
    }
  };
  p.prototype.pause = function() {
    if (!this._isPausing) {
      this.stop();
      this.terminative = undefined;
      this._isPausing = performance.now() || new Date().getTime();
    }
  };
  p.prototype.cancel = function() {
    this.stop();
  };
  p.prototype.append = function(e) {
    this._callbacks.push(e);
    return this;
  };
  co = {
    _p1: 1,
    _p2: 1 * 1.525,
    linear: function(e) {
      return e;
    },
    reverse: function(e) {
      return 1 - e;
    },
    easeInQuad: function(e) {
      return e * e;
    },
    easeInCubic: function(e) {
      return Math.pow(e, 3);
    },
    easeInBiquad: function(e) {
      return Math.pow(e, 4);
    },
    easeInBack: function(e) {
      return e * e * ((co._p1 + 1) * e - co._p1);
    },
    easeOutQuad: function(e) {
      return -(e * (e - 2));
    },
    easeOutCubic: function(e) {
      return Math.pow(e - 1, 3) + 1;
    },
    easeOutBiquad: function(e) {
      return 1 - Math.pow(e - 1, 4);
    },
    easeOutBack: function(e) {
      return (e = e - 1) * e * ((co._p1 + 1) * e + co._p1) + 1;
    },
    easeInOutQuad: function(e) {
      if (e < 0.5) {
        return e * e * 2;
      } else {
        return -2 * (e - 2) * e - 1;
      }
    },
    easeInOutCubic: function(e) {
      if (e < 0.5) {
        return Math.pow(e, 3) * 4;
      } else {
        return Math.pow(e - 1, 3) * 4 + 1;
      }
    },
    easeInOutBiquad: function(e) {
      if (e < 0.5) {
        return Math.pow(e, 4) * 8;
      } else {
        return 1 - Math.pow(e - 1, 4) * 8;
      }
    },
    easeInOutSine: function(e) {
      return (1 - Math.cos(Math.PI * e)) / 2;
    },
  };
  co.ease = (function() {
    var e = new bS(0.4, 0, 0.6, 1);
    return function(i) {
      return e.solve(i);
    };
  })();
  co["ease-in"] = co.easeInQuad;
  co["ease-out"] = co.easeOutQuad;
  var fl = {
    start: function(hY) {
      var hS = hY.el;
      var e = hY.style;
      var i = hY.startValue;
      var hV = hY.endValue;
      var hT = hY.duration || 1400;
      var hU = hY.transition || co.linear;
      var hX = hY.callback;
      var hW = hV - i;
      var T = hY.unit || "";
      return new p({
        fps: 60,
        duration: hT,
        transition: hU,
        render: function(hZ) {
          hS.style[e] = i + hW * hZ + T;
        },
        finish: function() {
          hX && hX();
        },
      });
    },
  };
  function cN(hT, T) {
    ee.call(this);
    this.keyframes = hT;
    var e = { duration: 1000, delay: 0, transition: co.linear, interation: 1 };
    if (T) {
      for (var hS in T) {
        e[hS] = T[hS];
      }
    }
    this._options = e;
  }
  cN.inherits(ee, "ViewAnimation");
  cN.prototype._start = function(hU) {
    var T = this;
    T.map = hU;
    var hT = new bc("onanimationstart");
    T.dispatchEvent(hT);
    this._initStatus(T.map);
    var hS = this._options.duration;
    var i = this._options.interation;
    var hV = this._options.transition;
    var hW = 0;
    T.poiStatus = T.map._displayOptions.poi;
    if (T.poiStatus) {
      T.map.setDisplayOptions({ poi: false });
    }
    T.map.viewAnimationTime = new Date().getTime();
    this.animation = new p({
      duration: hS,
      transition: hV,
      start: function(e) {},
      render: function(hX, e) {
        if (hX === 0) {
          T._initStatus(T.map);
        } else {
          T._setViewByRate(hX);
        }
      },
      finish: function(hY, hX) {
        if (++hW < i || i === "INFINITE") {
          var hZ = new bc("onanimationiterations");
          T.dispatchEvent(hZ);
          delete hX._beginTime;
          delete hX._endTime;
          hX._doStart();
        } else {
          var hZ = new bc("onanimationend");
          T.dispatchEvent(hZ);
          delete T.map.viewAnimationTime;
          T.map.setDisplayOptions({ poi: T.poiStatus });
        }
      },
    });
  };
  cN.prototype._getTotalDuration = function(e, i) {
    if (e === p.INFINITE) {
      return p.INFINITE;
    } else {
      return e * i;
    }
  };
  cN.prototype._initStatus = function(e) {
    if (this.keyframes[0]) {
      e.setCenter(this.keyframes[0].center, { noAnimation: true });
      e.setZoom(this.keyframes[0].zoom, { noAnimation: true });
      e.setTilt(this.keyframes[0].tilt, { noAnimation: true });
      e.setHeading(this.keyframes[0].heading, { noAnimation: true });
    }
  };
  cN.prototype._setViewByRate = function(hS) {
    for (var e = 0; e < this.keyframes.length - 1; e++) {
      var hT = this.keyframes[e];
      var T = this.keyframes[e + 1];
      if (hS >= hT.percentage && hS < T.percentage) {
        this.map.setHeading(this._getHeadingDelta(hT, T, hS), {
          noAnimation: true,
        });
        this.map.setTilt(this._getTiltDelta(hT, T, hS), { noAnimation: true });
        this.map.setCenter(this._getCenterDelta(hT, T, hS), {
          noAnimation: true,
        });
        this.map.setZoom(this._getZoomDelta(hT, T, hS), { noAnimation: true });
      }
    }
  };
  cN.prototype._getHeadingDelta = function(T, i, e) {
    var hT = (e - T.percentage) / (i.percentage - T.percentage);
    var hS = T.heading + (i.heading - T.heading) * hT;
    return hS;
  };
  cN.prototype._getTiltDelta = function(T, i, e) {
    var hT = (e - T.percentage) / (i.percentage - T.percentage);
    var hS = T.tilt + (i.tilt - T.tilt) * hT;
    return hS;
  };
  cN.prototype._getCenterDelta = function(T, i, e) {
    var hT = (e - T.percentage) / (i.percentage - T.percentage);
    var hS = T.center.add(i.center.sub(T.center).mult(hT));
    return hS;
  };
  cN.prototype._getZoomDelta = function(hS, T, i) {
    var hT = (i - hS.percentage) / (T.percentage - hS.percentage);
    var e = hS.zoom + (T.zoom - hS.zoom) * hT;
    return e;
  };
  cN.prototype._pause = function(e) {
    this.animation.pause();
  };
  cN.prototype._continue = function(e) {
    this.animation._doStart();
  };
  cN.prototype._cancel = function(T) {
    T.setDisplayOptions({ poi: this.poiStatus });
    this.animation.cancel();
    delete T.viewAnimationTime;
    var i = new bc("onanimationcancel");
    this.dispatchEvent(i);
  };
  var ev = undefined;
  var c1 = {
    is64Bit: function() {
      if (/Windows/.test(navigator.userAgent)) {
        if (/Win64; x64/.test(navigator.userAgent)) {
          return true;
        } else {
          if (/WOW64/.test(navigator.userAgent)) {
            return true;
          } else {
            return false;
          }
        }
      }
      return true;
    },
    isIOS112: function cR(e) {
      return /11_2/.test(navigator.userAgent);
    },
    canUseWebAssembly: function(i) {
      if (ev !== undefined) {
        i && i(ev);
        return;
      }
      if (window.WebAssembly && this.is64Bit()) {
        if (window.disableWebAssembly === true) {
          ev = false;
          i && i(ev);
        } else {
          if (!bw()) {
            ev = true;
            i && i(ev);
          } else {
            if (this.isIOS112()) {
              ev = false;
              i && i(ev);
            } else {
              var e = new Uint8Array([
                0,
                97,
                115,
                109,
                1,
                0,
                0,
                0,
                1,
                133,
                128,
                128,
                128,
                0,
                1,
                96,
                0,
                1,
                127,
                3,
                130,
                128,
                128,
                128,
                0,
                1,
                0,
                4,
                132,
                128,
                128,
                128,
                0,
                1,
                112,
                0,
                0,
                5,
                131,
                128,
                128,
                128,
                0,
                1,
                0,
                1,
                6,
                129,
                128,
                128,
                128,
                0,
                0,
                7,
                145,
                128,
                128,
                128,
                0,
                2,
                6,
                109,
                101,
                109,
                111,
                114,
                121,
                2,
                0,
                4,
                109,
                97,
                105,
                110,
                0,
                0,
                10,
                138,
                128,
                128,
                128,
                0,
                1,
                132,
                128,
                128,
                128,
                0,
                0,
                65,
                42,
                11,
              ]);
              WebAssembly.instantiate(e).then(
                function(T) {
                  ev = true;
                  i && i(ev);
                },
                function(T) {
                  ev = false;
                  i && i(ev);
                }
              );
            }
          }
        }
      } else {
        ev = false;
        i && i(ev);
      }
    },
  };
  var dx = {};
  bp.Utils = dx;
  function de(e) {
    return e.style;
  }
  function dn(i) {
    if (D.Browser.ie > 0) {
      i.unselectable = "on";
      i.selectstart = function() {
        return false;
      };
      i.onmousedown = function(T) {
        T.preventDefault();
        return false;
      };
    } else {
      var e = de(i);
      e.MozUserSelect = "none";
      e.WebkitUserSelect = "none";
      i.addEventListener(
        "mousedown",
        function(T) {
          T.preventDefault();
        },
        false
      );
    }
  }
  function he(e) {
    return e && e.parentNode && e.parentNode.nodeType !== 11;
  }
  function dJ(i, e) {
    i.insertAdjacentHTML("beforeEnd", e);
    return i.lastChild;
  }
  function hC(T, i) {
    var hS = document.createElement("div");
    hS.innerHTML = i;
    var e = hS.childNodes[0];
    return T.parentNode.insertBefore(e, T);
  }
  function h(i) {
    i = i || window.event;
    i.stopPropagation ? i.stopPropagation() : (i.cancelBubble = true);
  }
  function bV(i) {
    i = i || window.event;
    i.preventDefault ? i.preventDefault() : (i.returnValue = false);
    return false;
  }
  function dc(i) {
    h(i);
    return bV(i);
  }
  function fK() {
    var e = document.documentElement;
    var i = document.body;
    if (e && (e.scrollTop || e.scrollLeft)) {
      return [e.scrollTop, e.scrollLeft];
    } else {
      if (i) {
        return [i.scrollTop, i.scrollLeft];
      } else {
        return [0, 0];
      }
    }
  }
  function fr(hT) {
    if (!hT) {
      return;
    }
    hT.onload = hT.onerror = null;
    var T = hT.attributes,
      hS,
      e,
      hU;
    if (T) {
      e = T.length;
      for (hS = 0; hS < e; hS += 1) {
        hU = T[hS].name;
        if (typeof hT[hU] === "function") {
          hT[hU] = null;
        }
      }
    }
    T = hT.children;
    if (T) {
      e = T.length;
      for (hS = 0; hS < e; hS += 1) {
        fr(hT.children[hS]);
      }
    }
  }
  function bH(i, hV, hU) {
    var hT = hV.lng - hU.lng;
    var hS = hV.lat - hU.lat;
    if (hT === 0) {
      return Math.abs(i.lng - hV.lng);
    }
    if (hS === 0) {
      return Math.abs(i.lat - hV.lat);
    }
    var T = hS / hT;
    var e = hV.lat - T * hV.lng;
    return Math.abs(T * i.lng - i.lat + e) / Math.sqrt(T * T + 1);
  }
  function gX(i, e) {
    if (!i || !e) {
      return;
    }
    return Math.round(
      Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2))
    );
  }
  function bQ(i, e) {
    if (!i || !e) {
      return 0;
    }
    return Math.round(
      Math.sqrt(Math.pow(i.lng - e.lng, 2) + Math.pow(i.lat - e.lat, 2))
    );
  }
  function c2(T, i) {
    var e = Math.round((T.x + i.x) / 2);
    var hS = Math.round((T.y + i.y) / 2);
    return new ek(e, hS);
  }
  function hk(e, T) {
    var i = [];
    T =
      T ||
      function(hT) {
        return hT;
      };
    for (var hS in e) {
      i.push(hS + "=" + T(e[hS]));
    }
    return i.join("&");
  }
  function U(T, i, hU) {
    var hV = document.createElement(T);
    if (hU) {
      hV = document.createElementNS(hU, T);
    }
    i = i || {};
    for (var hS in i) {
      var hT = { for: "htmlFor", class: "cssClass" }[hS] || hS;
      if (hS === "style") {
        hV.style.cssText = i[hS];
        continue;
      }
      if (hS === "class") {
        D.ac(hV, i[hS]);
        continue;
      }
      if (hV.setAttribute) {
        hV.setAttribute(hT, i[hS]);
      } else {
        try {
          hV[hT] = i[hS];
        } catch (hV) {}
      }
    }
    return hV;
  }
  function fZ(e) {
    if (e.currentStyle) {
      return e.currentStyle;
    } else {
      if (e.ownerDocument && e.ownerDocument.defaultView) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null);
      }
    }
  }
  function bW(e) {
    return typeof e === "function";
  }
  var hp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  function g2(hT) {
    var T = "";
    var h0;
    var hY;
    var hW = "";
    var hZ;
    var hX;
    var hV;
    var hU = "";
    var hS = 0;
    var e = /[^A-Za-z0-9+/=]/g;
    if (!hT || e.exec(hT)) {
      return hT;
    }
    hT = hT.replace(/[^A-Za-z0-9+/=]/g, "");
    do {
      hZ = hp.indexOf(hT.charAt(hS++));
      hX = hp.indexOf(hT.charAt(hS++));
      hV = hp.indexOf(hT.charAt(hS++));
      hU = hp.indexOf(hT.charAt(hS++));
      h0 = (hZ << 2) | (hX >> 4);
      hY = ((hX & 15) << 4) | (hV >> 2);
      hW = ((hV & 3) << 6) | hU;
      T = T + String.fromCharCode(h0);
      if (hV !== 64) {
        T = T + String.fromCharCode(hY);
      }
      if (hU !== 64) {
        T = T + String.fromCharCode(hW);
      }
      h0 = hY = hW = "";
      hZ = hX = hV = hU = "";
    } while (hS < hT.length);
    return T;
  }
  (function(e) {
    if (!e.Utils) {
      e.Utils = {};
    }
    var i = e.Utils;
    i.format = (function() {
      function T(hV, hU, hW) {
        var hT = hW[+hU];
        return typeof hT === "function" ? hT(hU) : hT;
      }
      function hS(hV, hU, hW) {
        var hY = hU;
        var hZ = [];
        var hT = hU.split(":");
        if (hT.length === 2) {
          hY = hT[0];
          hZ.push(hT[1]);
        }
        var hX = typeof hW[hY];
        if (hX === "function") {
          return hW[hY].apply(undefined, hZ);
        } else {
          if (hX === "undefined") {
            return hV;
          } else {
            return String(hW[hY]);
          }
        }
      }
      return function(hT, hU) {
        var hW = hU.splice ? T : hS;
        var hV = hT.splice ? hT.join("") : hT;
        return hV.replace(/{([a-zA-Z0-9_$:.]+)}/g, function(hY, hX) {
          return hW(hY, hX, hU);
        });
      };
    })();
    i.ErrorMonitor = function(hS, T, hT) {};
    c1.canUseWebAssembly(function(T) {
      i.canUseWebAssembly = T;
    });
  })(bp);
  function f6() {
    return bw() || eC();
  }
  function bw() {
    var e = navigator.userAgent;
    if (e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1) {
      return true;
    }
    return false;
  }
  function eC() {
    var e = navigator.userAgent;
    if (e.indexOf("Android") > -1) {
      return true;
    }
    return false;
  }
  function dL(e) {
    return (e * Math.PI) / 180;
  }
  function df(e) {
    return (e / Math.PI) * 180;
  }
  function dP(e, hT) {
    var hS = Math.pow(10, hT);
    if (typeof e === "number") {
      return Math.round(e * hS) / hS;
    }
    for (var T = 0; T < e.length; T++) {
      e[T] = dP(e[T], hT);
    }
    return e;
  }
  function fG(T, i, e) {
    if (T < i) {
      T = i;
    } else {
      if (T > e) {
        T = e;
      }
    }
    return T;
  }
  function f0(e, i) {
    while (e < 0) {
      e += i;
    }
    return e % i;
  }
  function d9(i, e) {
    return (i >= 0 && e >= 0) || (i < 0 && e < 0);
  }
  function a6(i) {
    if (i._gl) {
      return i._gl;
    }
    var e = {
      alpha: true,
      antialias: false,
      failIfMajorPerformanceCaveat: false,
      preserveDrawingBuffer: false,
      stencil: false,
    };
    var T = i.getContext("webgl", e) || i.getContext("experimental-webgl", e);
    i._gl = T;
    return T;
  }
  function eL(hS, T) {
    for (var e = 0; e < T.length; e++) {
      D.on(hS, T[e], h);
    }
  }
  function hR(i, T, e) {
    T[e] = i.getUniformLocation(T, e);
  }
  function e2(hT, hU, e, T, i) {
    var hS = "";
    switch (i) {
      case "mat4":
        hT.uniformMatrix4fv(hU[e], false, T);
        return;
      case "v3":
        hS = "uniform3fv";
        break;
      case "f":
        hS = "uniform1f";
        break;
      case "i":
        hS = "uniform1i";
        break;
    }
    if (hS === "") {
      throw "error";
    }
    hT[hS](hU[e], T);
  }
  function L(h0, e) {
    while (h0 < 0) {
      h0 += 360;
    }
    h0 = h0 % 360;
    var hS = e.width;
    var hZ = e.height;
    var hV = hS;
    var T = hZ;
    if (h0 < 90) {
      var i = Math.sin(dL(h0)) * hS;
      var hX = Math.sin(dL(h0)) * hZ;
      var hY = Math.cos(dL(h0)) * hS;
      var hU = Math.cos(dL(h0)) * hZ;
      var hV = Math.ceil(hY + hX);
      var T = Math.ceil(i + hU);
    } else {
      if (h0 < 180) {
        var h0 = h0 - 90;
        var i = Math.sin(dL(h0)) * hS;
        var hX = Math.sin(dL(h0)) * hZ;
        var hY = Math.cos(dL(h0)) * hS;
        var hU = Math.cos(dL(h0)) * hZ;
        var hV = Math.ceil(i + hU);
        var T = Math.ceil(hY + hX);
      } else {
        if (h0 < 270) {
          var h0 = h0 - 180;
          var i = Math.sin(dL(h0)) * hS;
          var hX = Math.sin(dL(h0)) * hZ;
          var hY = Math.cos(dL(h0)) * hS;
          var hU = Math.cos(dL(h0)) * hZ;
          var hV = Math.ceil(hY + hX);
          var T = Math.ceil(i + hU);
        } else {
          var h0 = h0 - 270;
          var i = Math.sin(dL(h0)) * hS;
          var hX = Math.sin(dL(h0)) * hZ;
          var hY = Math.cos(dL(h0)) * hS;
          var hU = Math.cos(dL(h0)) * hZ;
          var hV = Math.ceil(i + hU);
          var T = Math.ceil(hY + hX);
        }
      }
    }
    var hW = hV - hS;
    var hT = T - hZ;
    return [0 - hW / 2, 0 - hT / 2, hS + hW / 2, hZ + hT / 2];
  }
  function gG(e) {
    if (e.toDataURL() === gG._blankData) {
      return true;
    }
    return false;
  }
  function gw(hT, hS, T) {
    var i = [T.lng - hT.lng, T.lat - hT.lat];
    var e = [hS.lng - hT.lng, hS.lat - hT.lat];
    return i[0] * e[1] - i[1] * e[0];
  }
  function ci(hU, hT, T) {
    var e;
    var hV;
    var hS;
    var i;
    if (hU.lng < hT.lng) {
      e = hU.lng;
      hS = hT.lng;
    } else {
      e = hT.lng;
      hS = hU.lng;
    }
    if (hU.lat < hT.lat) {
      hV = hU.lat;
      i = hT.lat;
    } else {
      hV = hT.lat;
      i = hU.lat;
    }
    if (T.lng < e || T.lng > hS || T.lat < hV || T.lat > i) {
      return false;
    }
    return true;
  }
  function gy(hW, hV, hU, hS) {
    var hT = gw(hU, hS, hW);
    var T = gw(hU, hS, hV);
    var i = gw(hW, hV, hU);
    var e = gw(hW, hV, hS);
    if (hT * T < 0 && i * e < 0) {
      return true;
    } else {
      if (hT === 0 && ci(hU, hS, hW)) {
        return true;
      } else {
        if (T === 0 && ci(hU, hS, hV)) {
          return true;
        } else {
          if (i === 0 && ci(hW, hV, hU)) {
            return true;
          } else {
            if (e === 0 && ci(hW, hV, hS)) {
              return true;
            } else {
              return false;
            }
          }
        }
      }
    }
  }
  function hA(T, i) {
    var e = i.parentNode;
    if (e.lastChild === i) {
      e.appendChild(T);
    } else {
      e.insertBefore(T, i.nextSibling);
    }
  }
  function hG(hY, hZ) {
    if (hZ === 0) {
      return hY;
    }
    var hX = 0;
    var hV = 0;
    if (!hY) {
      throw "异常";
    }
    if (hY.length === 0) {
      return [];
    }
    for (var hT = 1, T = hY.length - 1; hT < T; hT++) {
      var hW = bH(hY[hT], hY[0], hY[hY.length - 1]);
      if (hW > hX) {
        hV = hT;
        hX = hW;
      }
    }
    var e = [];
    if (hX >= hZ) {
      var h1 = hY.slice(0, hV);
      var h0 = hY.slice(hV, hY.length);
      var hU = hG(h1, hZ);
      var hS = hG(h0, hZ);
      for (var hT = 0, T = hU.length; hT < T; hT++) {
        e.push(hU[hT]);
      }
      for (var hT = 0, T = hS.length; hT < T; hT++) {
        e.push(hS[hT]);
      }
    } else {
      e.push(hY[0]);
      e.push(hY[hY.length - 1]);
    }
    return e;
  }
  function eD(e) {
    if (Math.log2) {
      return Math.log2(e);
    }
    return Math.log(e) / Math.LN2;
  }
  function bs(T, i, e) {
    return Math.min(e, Math.max(i, T));
  }
  function cK(e, i) {
    if (!i) {
      return e;
    }
    var hU = i[0];
    var hT = i[1];
    var hS = i[2];
    var T = i[3];
    var hW = [];
    var hV = [];
    hW[0] = T * e[0] + hS * e[2];
    hW[1] = e[1];
    hW[2] = -hS * e[0] + T * e[2];
    hV[0] = hW[0];
    hV[1] = hT * hW[1] - hU * hW[2];
    hV[2] = hU * hW[1] + hT * hW[2];
    return hV;
  }
  var aR = Math.PI / 180;
  var F = 180 / Math.PI;
  function bA(T) {
    var i = (T - Date.UTC(2000, 0, 1, 12)) / 86400000 / 36525;
    var e = ((d3.utcDay.floor(T) - T) / 86400000) * 360 - 180;
    return [e - V(i) * F, gD(i) * F];
  }
  function V(hS) {
    var hT = f8(hS);
    var i = dM(hS);
    var T = ak(hS);
    var hU = Math.tan(f3(hS) / 2);
    hU *= hU;
    return (
      hU * Math.sin(2 * T) -
      2 * hT * Math.sin(i) +
      4 * hT * hU * Math.sin(i) * Math.cos(2 * T) -
      0.5 * hU * hU * Math.sin(4 * T) -
      1.25 * hT * hT * Math.sin(2 * i)
    );
  }
  function gD(e) {
    return Math.asin(Math.sin(f3(e)) * Math.sin(g0(e)));
  }
  function g0(e) {
    return (
      bi(e) - (0.00569 + 0.00478 * Math.sin((125.04 - 1934.136 * e) * aR)) * aR
    );
  }
  function bi(e) {
    return ak(e) + dS(e);
  }
  function dM(e) {
    return (357.52911 + e * (35999.05029 - 0.0001537 * e)) * aR;
  }
  function ak(i) {
    var e = (280.46646 + i * (36000.76983 + i * 0.0003032)) % 360;
    return ((e < 0 ? e + 360 : e) / 180) * Math.PI;
  }
  function dS(i) {
    var e = dM(i);
    return (
      (Math.sin(e) * (1.914602 - i * (0.004817 + 0.000014 * i)) +
        Math.sin(e + e) * (0.019993 - 0.000101 * i) +
        Math.sin(e + e + e) * 0.000289) *
      aR
    );
  }
  function f3(e) {
    return fd(e) + 0.00256 * Math.cos((125.04 - 1934.136 * e) * aR) * aR;
  }
  function fd(e) {
    return (
      (23 +
        (26 + (21.448 - e * (46.815 + e * (0.00059 - e * 0.001813))) / 60) /
          60) *
      aR
    );
  }
  function f8(e) {
    return 0.016708634 - e * (0.000042037 + 1.267e-7 * e);
  }
  function a7() {
    return window.devicePixelRatio || 1;
  }
  function aG(T) {
    var i;
    var e;
    var hS;
    if (T >= 0) {
      hS = Math.floor(T / 65536) * 65536;
      i = hS;
      e = T - hS;
    } else {
      hS = Math.floor(-T / 65536) * 65536;
      i = -hS;
      e = T + hS;
    }
    return [i, e];
  }
  function H(e) {
    if (e.lng >= 0 && e.lat >= 0) {
      return new ht(e.lng - 10000000, e.lat - 6000000);
    }
    if (e.lng >= 0 && e.lat < 0) {
      return new ht(e.lng - 10000000, e.lat + 6000000);
    }
    if (e.lng < 0 && e.lat >= 0) {
      return new ht(e.lng + 10000000, e.lat - 6000000);
    }
    if (e.lng < 0 && e.lat < 0) {
      return new ht(e.lng + 10000000, e.lat + 6000000);
    }
  }
  var fC = null;
  if (window.performance && window.performance.now) {
    fC = function() {
      return performance.now();
    };
  } else {
    if (Date.now) {
      fC = function() {
        return Date.now();
      };
    } else {
      fC = function() {
        return new Date().getTime();
      };
    }
  }
  function bM(hS, e, i) {
    var T = "mouseWheel";
    if (D.Platform.macintosh) {
      if (!isNaN(hS) && (hS < 10 || hS !== 120) && e % 1 === 0 && e < 5) {
        T = "padScroll";
      }
      if (D.Browser.firefox && e % 1 === 0 && e < 5 && i === 0) {
        T = "padScroll";
      }
    }
    if (D.Browser.safari && hS === 12) {
      T = "mouseWheel";
    }
    return T;
  }
  function dh(h1, hW) {
    var h0 = h1[0];
    var hZ = h1[1];
    var hS = false;
    for (var hV = 0, hU = hW.length - 2; hV < hW.length; hV += 2) {
      var hY = hW[hV];
      var hT = hW[hV + 1];
      var hX = hW[hU];
      var T = hW[hU + 1];
      var e =
        hT > hZ !== T > hZ && h0 < ((hX - hY) * (hZ - hT)) / (T - hT) + hY;
      if (e) {
        hS = !hS;
      }
      hU = hV;
    }
    return hS;
  }
  function cF(T, e, i, hS) {
    hS = hS || 0.4;
    if (T > i) {
      T = Math.pow(T - i + 1, hS) + i - 1;
    } else {
      if (T < e) {
        T = e - Math.pow(e - T + 1, hS) + 1;
      }
    }
    return T;
  }
  function gm(hW) {
    var hU = "";
    for (var T = 0; T < hW.length; T++) {
      var hX = hW.charCodeAt(T) << 1;
      var e = hX.toString(2);
      var hT = e.length;
      var h0 = e;
      if (hT < 8) {
        h0 = "00000000" + e;
        h0 = h0.substr(e.length, 8);
      }
      hU += h0;
    }
    var hY = 5 - (hU.length % 5);
    var hS = [];
    for (var T = 0; T < hY; T++) {
      hS[T] = "0";
    }
    hU = hS.join("") + hU;
    var hZ = [];
    for (var T = 0; T < hU.length / 5; T++) {
      var hX = hU.substr(T * 5, 5);
      var hV = parseInt(hX, 2) + 50;
      hZ.push(String.fromCharCode(hV));
    }
    return hZ.join("") + hY.toString();
  }
  function aE(T, i) {
    var e = bp.TILE_VERSION || window.TILE_VERSION;
    if (!e || !e[T] || !e[T][i] || !e[T][i].version || !e[T][i].updateDate) {
      e = e4.tvc;
    }
    return { ver: e[T][i].version, udt: e[T][i].updateDate };
  }
  function fA() {
    var e = bp.MSV || window.MSV;
    if (!e || !e.mapstyle || !e.mapstyle.updateDate || !e.mapstyle.version) {
      e = e4.msv;
    }
    return { ver: e.mapstyle.version, udt: e.mapstyle.updateDate };
  }
  function es(e, hT) {
    var hS = e.slice(0);
    for (var T = 0; T < hS.length; T++) {
      hS[T] += hT;
    }
    return hS;
  }
  var a5 = null;
  function bz(e) {
    if (a5) {
      return;
    }
    e.fire(new bc("onloadtile"));
    a5 = setTimeout(function() {
      a5 = null;
    }, 1000);
  }
  function e1() {
    if (
      cs("//map.baidu.com") ||
      cs("//maps.baidu.com") ||
      cs("//ditu.baidu.com")
    ) {
      return true;
    }
    return false;
  }
  dx.inMapHost = e1();
  if (typeof window._inMapHost === "boolean") {
    dx.inMapHost = window._inMapHost;
  }
  function cs(i) {
    var T = window.location;
    var e = document.createElement("a");
    e.href = i;
    return (
      e.hostname === T.hostname &&
      e.port === T.port &&
      e.protocol === T.protocol
    );
  }
  function eb() {}
  D.extend(eb, {
    Request: { INITIAL: -1, WAITING: 0, LOADED: 1, COMPLETED: 2 },
    Dependency: {
      poly: ["marker"],
      hotspot: ["poly"],
      infowindow: ["marker", "hotspot"],
      simpleInfowindow: ["marker"],
      tools: ["marker", "poly"],
      mapgl: ["glcommon", "poly"],
      earth: ["glcommon"],
      control: ["scommon"],
      scommon: [],
      localSearch: ["scommon"],
      otherSearch: ["scommon"],
      route: ["scommon"],
      buslineSearch: ["route"],
      autocomplete: ["scommon"],
    },
    MD5Mapping: {
      control: "nd4xse",
      marker: "bftdjy",
      poly: "2s4nao",
      infowindow: "v04mgc",
      simpleInfowindow: "f5j2kq",
      hotspot: "cl3qm2",
      menu: "hpae4a",
      tools: "sptn3l",
      oppc: "214do0",
      oppcgl: "ycxuj5",
      mapgl: "pbumfs",
      markeranimation: "axdri1",
      earth: "pbat4r",
      glcommon: "y32ik1",
      localSearch: "bzxiov",
      scommon: "4hotq4",
      otherSearch: "20325m",
      route: "uhm2ao",
      buslineSearch: "0yxow3",
      autocomplete: "hpbanf",
    },
    Config: {
      baseUrl: e4.apiHost + "/getmodules?v=1.0&type=webgl",
      jsModPath: (dx.inMapHost ? "" : e4.mapHost) + "/res/newui/",
      timeout: 5000,
    },
    delayFlag: false,
    Module: { modules: {}, modulesNeedToLoad: [] },
    _getMd5ModsStr: function(hU) {
      var hT = [];
      for (var hW = 0, T = hU.length; hW < T; hW++) {
        var hV = hU[hW];
        var e = this.MD5Mapping[hV];
        var hS = "$" + hV + "$";
        if (e !== hS) {
          hT.push(hV + "_" + e);
        }
      }
      return hT.join(",");
    },
    load: function(i, hU, hS) {
      var e = this.getModuleInfo(i);
      if (e.status === this.Request.COMPLETED) {
        if (hS === true) {
          hU();
        }
      } else {
        if (e.status === this.Request.INITIAL) {
          this.combine(i);
          this.addToLoadQueue(i);
          var T = this;
          if (T.delayFlag === false) {
            T.delayFlag = true;
            setTimeout(function() {
              var hV =
                T.Config.baseUrl +
                "&mod=" +
                T._getMd5ModsStr(T.Module.modulesNeedToLoad);
              hn.load(hV);
              T.Module.modulesNeedToLoad.length = 0;
              T.delayFlag = false;
            }, 1);
          }
          e.status = this.Request.WAITING;
          function hT(hX) {
            var hW = T.getModuleInfo(i);
            if (hW.status !== T.Request.COMPLETED) {
              if (window.map) {
                var hV = new bc("onmod_timeout");
                hV.timeout = hX / 1000;
                hV.moduleName = i;
                window.map.fire(hV);
              }
            }
          }
          setTimeout(hT, this.Config.timeout, this.Config.timeout);
          setTimeout(hT, this.Config.timeout * 2, this.Config.timeout * 2);
        }
        if (hU) {
          e.callbacks.push(hU);
        }
      }
    },
    combine: function(e) {
      if (e && this.Dependency[e]) {
        var hS = this.Dependency[e];
        for (var T = 0; T < hS.length; T++) {
          this.combine(hS[T]);
          if (!this.Module.modules[hS[T]]) {
            this.addToLoadQueue(hS[T]);
          }
        }
      }
    },
    addToLoadQueue: function(e) {
      var i = this.getModuleInfo(e);
      if (i.status === this.Request.INITIAL) {
        i.status = this.Request.WAITING;
        this.Module.modulesNeedToLoad.push(e);
      }
    },
    run: function(T, hS) {
      var hW = this.getModuleInfo(T);
      var hZ = this.Dependency[T];
      if (hZ) {
        for (var hU = 0; hU < hZ.length; hU++) {
          var hV = this.getModuleInfo(hZ[hU]);
          if (hV.status !== this.Request.COMPLETED) {
            hV.modsNeedToRun.push({ name: T, code: hS });
            return;
          }
        }
      }
      try {
        eval(hS);
      } catch (hX) {
        return;
      }
      hW.status = this.Request.COMPLETED;
      for (var hU = 0, hT = hW.callbacks.length; hU < hT; hU++) {
        hW.callbacks[hU]();
      }
      hW.callbacks.length = 0;
      for (hU = 0; hU < hW.modsNeedToRun.length; hU++) {
        var hY = hW.modsNeedToRun[hU];
        this.run(hY.name, hY.code);
      }
      hW.modsNeedToRun.length = 0;
    },
    getModuleInfo: function(i) {
      var e;
      if (!this.Module.modules[i]) {
        this.Module.modules[i] = {
          status: this.Request.INITIAL,
          callbacks: [],
          modsNeedToRun: [],
        };
      }
      e = this.Module.modules[i];
      return e;
    },
  });
  window._jsload = function(hT, hU) {
    var i = eb.getModuleInfo(hT);
    i.status = eb.Request.LOADED;
    if (hU !== "") {
      eb.run(hT, hU);
    } else {
      if (window.map) {
        var e = new bc("ongetmodules_fail");
        e.moduleName = hT;
        window.map.fire(e);
      }
      var T = document.createElement("script");
      var hS = eb.MD5Mapping[hT];
      T.src = eb.Config.jsModPath + hT + "_" + hS + ".js";
      document.getElementsByTagName("head")[0].appendChild(T);
    }
  };
  function ad() {
    this._timeData = {};
  }
  var fa;
  if (typeof window !== "undefined") {
    fa = window;
  } else {
    fa = self;
  }
  ad.prototype.mark = function(e) {
    this._timeData[e] = this._getTime();
  };
  ad.prototype.getMark = function(e) {
    return this._timeData[e];
  };
  ad.prototype.getTime = function(i, e) {
    return parseFloat((this._timeData[e] - this._timeData[i]).toFixed(2));
  };
  ad.prototype.print = function() {};
  ad.prototype.clear = function() {
    this._timeData = {};
  };
  if (fa.performance && fa.performance.now) {
    ad.prototype._getTime = function() {
      return performance.now();
    };
  } else {
    ad.prototype._getTime = function() {
      return Date.now();
    };
  }
  !(function(i, T) {
    T((i.d3 = i.d3 || {}));
  })(window, function(iz) {
    function iR(iX, iY, T, it) {
      function e(i) {
        return iX((i = new Date(+i))), i;
      }
      return (
        (e.floor = e),
        (e.ceil = function(i) {
          return iX((i = new Date(i - 1))), iY(i, 1), iX(i), i;
        }),
        (e.round = function(i) {
          var iZ = e(i),
            i0 = e.ceil(i);
          return i0 - i > i - iZ ? iZ : i0;
        }),
        (e.offset = function(i, iZ) {
          return iY((i = new Date(+i)), null == iZ ? 1 : Math.floor(iZ)), i;
        }),
        (e.range = function(i0, i, iZ) {
          var i1 = [];
          if (
            ((i0 = e.ceil(i0)),
            (iZ = null == iZ ? 1 : Math.floor(iZ)),
            !(i > i0 && iZ > 0))
          ) {
            return i1;
          }
          do {
            i1.push(new Date(+i0));
          } while ((iY(i0, iZ), iX(i0), i > i0));
          return i1;
        }),
        (e.filter = function(i) {
          return iR(
            function(iZ) {
              for (; iX(iZ), !i(iZ); ) {
                iZ.setTime(iZ - 1);
              }
            },
            function(iZ, i0) {
              for (; --i0 >= 0; ) {
                for (; iY(iZ, 1), !i(iZ); ) {}
              }
            }
          );
        }),
        T &&
          ((e.count = function(i, iZ) {
            return (
              iB.setTime(+i),
              iF.setTime(+iZ),
              iX(iB),
              iX(iF),
              Math.floor(T(iB, iF))
            );
          }),
          (e.every = function(i) {
            return (
              (i = Math.floor(i)),
              isFinite(i) && i > 0
                ? i > 1
                  ? e.filter(
                      it
                        ? function(iZ) {
                            return it(iZ) % i === 0;
                          }
                        : function(iZ) {
                            return e.count(0, iZ) % i === 0;
                          }
                    )
                  : e
                : null
            );
          })),
        e
      );
    }
    function iG(e) {
      return iR(
        function(i) {
          i.setDate(i.getDate() - ((i.getDay() + 7 - e) % 7)),
            i.setHours(0, 0, 0, 0);
        },
        function(i, T) {
          i.setDate(i.getDate() + 7 * T);
        },
        function(i, T) {
          return (
            (T - i - (T.getTimezoneOffset() - i.getTimezoneOffset()) * iA) / iO
          );
        }
      );
    }
    function iy(e) {
      return iR(
        function(i) {
          i.setUTCDate(i.getUTCDate() - ((i.getUTCDay() + 7 - e) % 7)),
            i.setUTCHours(0, 0, 0, 0);
        },
        function(i, T) {
          i.setUTCDate(i.getUTCDate() + 7 * T);
        },
        function(i, T) {
          return (T - i) / iO;
        }
      );
    }
    var iB = new Date(),
      iF = new Date(),
      iM = iR(
        function() {},
        function(i, T) {
          i.setTime(+i + T);
        },
        function(i, T) {
          return T - i;
        }
      );
    iM.every = function(e) {
      return (
        (e = Math.floor(e)),
        isFinite(e) && e > 0
          ? e > 1
            ? iR(
                function(i) {
                  i.setTime(Math.floor(i / e) * e);
                },
                function(i, T) {
                  i.setTime(+i + T * e);
                },
                function(i, T) {
                  return (T - i) / e;
                }
              )
            : iM
          : null
      );
    };
    var iV = iM.range,
      iT = 1000,
      iA = 60000,
      iQ = 3600000,
      iI = 86400000,
      iO = 604800000,
      hY = iR(
        function(e) {
          e.setTime(Math.floor(e / iT) * iT);
        },
        function(i, T) {
          i.setTime(+i + T * iT);
        },
        function(i, T) {
          return (T - i) / iT;
        },
        function(e) {
          return e.getUTCSeconds();
        }
      ),
      iS = hY.range,
      iH = iR(
        function(e) {
          e.setTime(Math.floor(e / iA) * iA);
        },
        function(i, T) {
          i.setTime(+i + T * iA);
        },
        function(i, T) {
          return (T - i) / iA;
        },
        function(e) {
          return e.getMinutes();
        }
      ),
      h6 = iH.range,
      iu = iR(
        function(i) {
          var T = (i.getTimezoneOffset() * iA) % iQ;
          0 > T && (T += iQ), i.setTime(Math.floor((+i - T) / iQ) * iQ + T);
        },
        function(i, T) {
          i.setTime(+i + T * iQ);
        },
        function(i, T) {
          return (T - i) / iQ;
        },
        function(e) {
          return e.getHours();
        }
      ),
      iN = iu.range,
      ih = iR(
        function(e) {
          e.setHours(0, 0, 0, 0);
        },
        function(i, T) {
          i.setDate(i.getDate() + T);
        },
        function(i, T) {
          return (
            (T - i - (T.getTimezoneOffset() - i.getTimezoneOffset()) * iA) / iI
          );
        },
        function(e) {
          return e.getDate() - 1;
        }
      ),
      hX = ih.range,
      id = iG(0),
      ig = iG(1),
      hT = iG(2),
      ib = iG(3),
      h0 = iG(4),
      ix = iG(5),
      iE = iG(6),
      hV = id.range,
      iw = ig.range,
      h4 = hT.range,
      ir = ib.range,
      iJ = h0.range,
      iv = ix.range,
      iU = iE.range,
      iL = iR(
        function(e) {
          e.setDate(1), e.setHours(0, 0, 0, 0);
        },
        function(i, T) {
          i.setMonth(i.getMonth() + T);
        },
        function(i, T) {
          return (
            T.getMonth() -
            i.getMonth() +
            12 * (T.getFullYear() - i.getFullYear())
          );
        },
        function(e) {
          return e.getMonth();
        }
      ),
      iW = iL.range,
      ia = iR(
        function(e) {
          e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
        },
        function(i, T) {
          i.setFullYear(i.getFullYear() + T);
        },
        function(i, T) {
          return T.getFullYear() - i.getFullYear();
        },
        function(e) {
          return e.getFullYear();
        }
      );
    ia.every = function(e) {
      return isFinite((e = Math.floor(e))) && e > 0
        ? iR(
            function(i) {
              i.setFullYear(Math.floor(i.getFullYear() / e) * e),
                i.setMonth(0, 1),
                i.setHours(0, 0, 0, 0);
            },
            function(i, T) {
              i.setFullYear(i.getFullYear() + T * e);
            }
          )
        : null;
    };
    var h3 = ia.range,
      iC = iR(
        function(e) {
          e.setUTCSeconds(0, 0);
        },
        function(i, T) {
          i.setTime(+i + T * iA);
        },
        function(i, T) {
          return (T - i) / iA;
        },
        function(e) {
          return e.getUTCMinutes();
        }
      ),
      ij = iC.range,
      ii = iR(
        function(e) {
          e.setUTCMinutes(0, 0, 0);
        },
        function(i, T) {
          i.setTime(+i + T * iQ);
        },
        function(i, T) {
          return (T - i) / iQ;
        },
        function(e) {
          return e.getUTCHours();
        }
      ),
      ie = ii.range,
      ic = iR(
        function(e) {
          e.setUTCHours(0, 0, 0, 0);
        },
        function(i, T) {
          i.setUTCDate(i.getUTCDate() + T);
        },
        function(i, T) {
          return (T - i) / iI;
        },
        function(e) {
          return e.getUTCDate() - 1;
        }
      ),
      h9 = ic.range,
      h8 = iy(0),
      h7 = iy(1),
      h5 = iy(2),
      h2 = iy(3),
      h1 = iy(4),
      hW = iy(5),
      hU = iy(6),
      hS = h8.range,
      iq = h7.range,
      iP = h5.range,
      iD = h2.range,
      iK = h1.range,
      ip = hW.range,
      io = hU.range,
      im = iR(
        function(e) {
          e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
        },
        function(i, T) {
          i.setUTCMonth(i.getUTCMonth() + T);
        },
        function(i, T) {
          return (
            T.getUTCMonth() -
            i.getUTCMonth() +
            12 * (T.getUTCFullYear() - i.getUTCFullYear())
          );
        },
        function(e) {
          return e.getUTCMonth();
        }
      ),
      il = im.range,
      hZ = iR(
        function(e) {
          e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
        },
        function(i, T) {
          i.setUTCFullYear(i.getUTCFullYear() + T);
        },
        function(i, T) {
          return T.getUTCFullYear() - i.getUTCFullYear();
        },
        function(e) {
          return e.getUTCFullYear();
        }
      );
    hZ.every = function(e) {
      return isFinite((e = Math.floor(e))) && e > 0
        ? iR(
            function(i) {
              i.setUTCFullYear(Math.floor(i.getUTCFullYear() / e) * e),
                i.setUTCMonth(0, 1),
                i.setUTCHours(0, 0, 0, 0);
            },
            function(i, T) {
              i.setUTCFullYear(i.getUTCFullYear() + T * e);
            }
          )
        : null;
    };
    var ik = hZ.range;
    (iz.timeInterval = iR),
      (iz.timeMillisecond = iM),
      (iz.timeMilliseconds = iV),
      (iz.utcMillisecond = iM),
      (iz.utcMilliseconds = iV),
      (iz.timeSecond = hY),
      (iz.timeSeconds = iS),
      (iz.utcSecond = hY),
      (iz.utcSeconds = iS),
      (iz.timeMinute = iH),
      (iz.timeMinutes = h6),
      (iz.timeHour = iu),
      (iz.timeHours = iN),
      (iz.timeDay = ih),
      (iz.timeDays = hX),
      (iz.timeWeek = id),
      (iz.timeWeeks = hV),
      (iz.timeSunday = id),
      (iz.timeSundays = hV),
      (iz.timeMonday = ig),
      (iz.timeMondays = iw),
      (iz.timeTuesday = hT),
      (iz.timeTuesdays = h4),
      (iz.timeWednesday = ib),
      (iz.timeWednesdays = ir),
      (iz.timeThursday = h0),
      (iz.timeThursdays = iJ),
      (iz.timeFriday = ix),
      (iz.timeFridays = iv),
      (iz.timeSaturday = iE),
      (iz.timeSaturdays = iU),
      (iz.timeMonth = iL),
      (iz.timeMonths = iW),
      (iz.timeYear = ia),
      (iz.timeYears = h3),
      (iz.utcMinute = iC),
      (iz.utcMinutes = ij),
      (iz.utcHour = ii),
      (iz.utcHours = ie),
      (iz.utcDay = ic),
      (iz.utcDays = h9),
      (iz.utcWeek = h8),
      (iz.utcWeeks = hS),
      (iz.utcSunday = h8),
      (iz.utcSundays = hS),
      (iz.utcMonday = h7),
      (iz.utcMondays = iq),
      (iz.utcTuesday = h5),
      (iz.utcTuesdays = iP),
      (iz.utcWednesday = h2),
      (iz.utcWednesdays = iD),
      (iz.utcThursday = h1),
      (iz.utcThursdays = iK),
      (iz.utcFriday = hW),
      (iz.utcFridays = ip),
      (iz.utcSaturday = hU),
      (iz.utcSaturdays = io),
      (iz.utcMonth = im),
      (iz.utcMonths = il),
      (iz.utcYear = hZ),
      (iz.utcYears = ik),
      Object.defineProperty(iz, "__esModule", { value: !0 });
  });
  function go(e) {
    this._elemType = e;
    this._objCollection = {};
  }
  go.prototype.get = function() {
    var i = null;
    for (var e in this._objCollection) {
      if (this._objCollection[e] && this._objCollection[e]._free === true) {
        this._objCollection[e]._free = false;
        return this._objCollection[e];
      }
    }
    i = U(this._elemType);
    e = bp.getGUID("obj_pool_");
    this._objCollection[e] = i;
    return i;
  };
  go.prototype.free = function(e) {
    if (!e) {
      return;
    }
    e._free = true;
    if (e.tagName.toLowerCase() === "img") {
      e.src = "";
      e.crossOrigin = null;
      e.onload = e.onerror = null;
    }
  };
  go.prototype.clear = function() {
    for (var e in this._objCollection) {
      if (
        this._objCollection[e] &&
        this._objCollection[e].tagName.toLowerCase === "img"
      ) {
        this._objCollection[e].onload = this._objCollection[e].onerror = null;
      }
    }
    this._objCollection = {};
  };
  var gB = {
    get: function(i, hT, e, T) {
      var hS = new XMLHttpRequest();
      hS.open("GET", i, true);
      hS.timeout = 10000;
      hS.ontimeout = function() {
        T && T();
      };
      hS.onreadystatechange = function(hU) {
        if (this.readyState === 4) {
          if (this.status === 200) {
            hT && hT(hS.responseText);
          } else {
            e && e();
          }
        }
      };
      hS.send();
    },
    post: function(i, hU, hT, e, T) {
      var hS = new XMLHttpRequest();
      hS.open("POST", i, true);
      hS.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      hS.timeout = 10000;
      hS.ontimeout = function() {
        T && T();
      };
      hS.onreadystatechange = function(hV) {
        if (this.readyState === 4) {
          if (this.status === 200) {
            hT && hT(hS.responseText, hU);
          } else {
            e && e();
          }
        }
      };
      hS.send(hU);
      return hS;
    },
  };
  var hn = (function(e) {
    function i(hU, T, hT) {
      var hS = U("script", {
        src: hU,
        type: "text/javascript",
        charset: "utf-8",
      });
      if (hS.addEventListener) {
        hS.addEventListener(
          "load",
          function(hW) {
            var hV = hW.target;
            hV.parentNode.removeChild(hV);
            T && T();
          },
          false
        );
        hS.addEventListener(
          "error",
          function(hV) {
            hT && hT(null);
          },
          false
        );
      } else {
        if (hS.attachEvent) {
          hS.attachEvent("onreadystatechange", function(hW) {
            var hV = window.event.srcElement;
            if (
              hV &&
              (hV.readyState === "loaded" || hV.readyState === "complete")
            ) {
              hV.parentNode.removeChild(hV);
            }
            T && T();
          });
        }
      }
      e.getElementsByTagName("head")[0].appendChild(hS);
    }
    return {
      load: function(hV, T, hS) {
        if (typeof hV === "string") {
          i(hV, T, hS);
        } else {
          if (hV.length > 0) {
            var hU = hV.length;
            for (var hT = 0; hT < hU; hT++) {
              i(hV[hT], function() {
                hU--;
                if (hU === 0 && T) {
                  T();
                }
              });
            }
          }
        }
      },
    };
  })(window.document);
  function cM() {}
  cM.instances = {};
  cM.getInstance = function(i, T) {
    if (cM.instances[i]) {
      return cM.instances[i];
    }
    var e = new dj(i, T);
    cM.instances[i] = e;
    return e;
  };
  function dj(e, i) {
    this._name = e;
    this._baseZoom = 18;
    this._opts = { tileSize: 256 };
    D.extend(this._opts, i || {});
  }
  dj.mapZoomBaseIndex = [
    8,
    8,
    8,
    8,
    7,
    7,
    6,
    6,
    5,
    5,
    4,
    3,
    3,
    3,
    2,
    2,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  dj.baseScaleZoom = [19, 17, 15, 12, 10, 9, 7, 5, 3];
  dj.baseScaleZoomMercatorSize = [
    512,
    2048,
    4096,
    32768,
    65536,
    262144,
    1048576,
    4194304,
    8388608,
  ];
  dj.mapZoomBaseZoomMapping = [
    3,
    3,
    3,
    3,
    5,
    5,
    7,
    7,
    9,
    9,
    10,
    12,
    12,
    12,
    15,
    15,
    17,
    17,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
  ];
  dj.mapZoomStartZoomMapping = [
    3,
    3,
    3,
    3,
    4,
    4,
    6,
    6,
    8,
    8,
    10,
    11,
    11,
    11,
    14,
    14,
    16,
    16,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
  ];
  dj.baseScaleTileSize = [1024, 1024, 512, 512, 256, 512, 512, 512, 256];
  dj.mapZoomTileSize = [
    256,
    256,
    256,
    256,
    256,
    512,
    256,
    512,
    256,
    512,
    256,
    256,
    512,
    1024,
    256,
    512,
    512,
    1024,
    512,
    1024,
    2048,
    4096,
    4096 * 2,
    4096 * 2 * 2,
    4096 * 2 * 2 * 2,
    4096 * 2 * 2 * 2 * 2,
  ];
  dj.baseZoomInfo = {
    "3": [3],
    "5": [4, 5],
    "7": [6, 7],
    "9": [8, 9],
    "10": [10],
    "12": [11, 12, 13],
    "15": [14, 15],
    "17": [16, 17],
    "19": [18, 19, 20, 21, 22, 23, 24, 25],
  };
  dj.prototype = {
    getName: function() {
      return this._name;
    },
    getTileSize: function(e) {
      e = Math.floor(e);
      if (e < 3) {
        e = 3;
      }
      if (this._name === "na") {
        return dj.mapZoomTileSize[e];
      }
      return this._opts.tileSize;
    },
    getBaseTileSize: function(i) {
      i = Math.floor(i);
      if (this._name === "na") {
        var e = dj.mapZoomBaseZoomMapping[i];
        return dj.mapZoomTileSize[e];
      }
      return this._opts.tileSize;
    },
    getDataZoom: function(e) {
      e = Math.floor(e);
      if (this._name === "na") {
        return dj.mapZoomBaseZoomMapping[e];
      }
      return e;
    },
    getZoomUnits: function(e) {
      return Math.pow(2, this._baseZoom - e);
    },
    getMercatorSize: function(T, i) {
      if (this._name === "na") {
        T = Math.floor(T);
        var e = dj.mapZoomBaseIndex[T];
        return dj.baseScaleZoomMercatorSize[e];
      }
      return this._opts.tileSize * this.getZoomUnits(i);
    },
    getBaseZoom: function() {
      return this._baseZoom;
    },
    getParentTile: function(hS, hY, hX, T, i) {
      if (this._name === "na") {
        var hT = dj.baseZoomInfo[hX];
        T--;
        if (hT.indexOf(T) > -1) {
          return { col: hS, row: hY, zoom: hX, useZoom: T };
        } else {
          var hV = dj.mapZoomBaseIndex[hX];
          var hU = dj.baseScaleZoom[hV + 1];
          if (!hU) {
            return null;
          }
          var hW = this.getFactorByZooms(hU, hX);
          var e = dj.baseZoomInfo[hU];
          return {
            col: Math.floor(hS / hW),
            row: Math.floor(hY / hW),
            zoom: hU,
            useZoom: e[e.length - 1],
          };
        }
        return null;
      }
      if (hX - 1 < i) {
        return null;
      }
      return {
        col: Math.floor(hS / 2),
        row: Math.floor(hY / 2),
        zoom: hX - 1,
        useZoom: hX - 1,
      };
    },
    getChildTiles: function(hT, hV, e, T, h2, h8) {
      if (this._name === "na") {
        var hS = dj.baseZoomInfo[e];
        T += h8;
        if (hS.indexOf(T) > -1) {
          return [{ col: hT, row: hV, zoom: e, useZoom: T }];
        } else {
          var h6 = 0;
          var h3 = e;
          while (h6 < h8) {
            var h7 = dj.mapZoomBaseIndex[h3];
            var hX = dj.baseScaleZoom[h7 - 1];
            if (!hX) {
              return null;
            }
            var hY = dj.baseZoomInfo[hX];
            if (hY[h8 - 1]) {
              var hZ = [];
              var h1 = this.getFactorByZooms(e, hX);
              var i = hT * h1;
              var h0 = hV * h1;
              for (var h5 = 0; h5 < h1; h5++) {
                var hU = i + h5;
                for (var h4 = 0; h4 < h1; h4++) {
                  var hW = h0 + h4;
                  hZ.push({ col: hU, row: hW, zoom: hX, useZoom: hY[h8 - 1] });
                }
              }
              return hZ;
            }
            h6 += hY.length;
            if (h8 === hY.length) {
              h3 = hX;
            }
          }
        }
        return null;
      }
      var hZ = [];
      if (e + h8 > h2) {
        return null;
      }
      var h1 = Math.pow(2, h8);
      var i = hT * h1;
      var h0 = hV * h1;
      var hX = e + h8;
      var hZ = [];
      for (var h5 = 0; h5 < 2; h5++) {
        var hU = i + h5;
        for (var h4 = 0; h4 < 2; h4++) {
          var hW = h0 + h4;
          hZ.push({ col: hU, row: hW, zoom: hX, useZoom: hX });
        }
      }
      return hZ;
    },
    getFactorByZooms: function(i, hS) {
      var T = dj.mapZoomBaseIndex[i];
      var hT = dj.mapZoomBaseIndex[hS];
      var e = dj.baseScaleZoomMercatorSize[T];
      var hU = dj.baseScaleZoomMercatorSize[hT];
      return e / hU;
    },
  };
  var a9 = {};
  var ah = ["swiftshader", "microsoft basic render driver"];
  var cm = ["intel", "nvidia", "amd", "apple", "geforce"];
  function dw(e) {
    e = e.toLowerCase();
    if (ah.indexOf(e) >= 0) {
      return true;
    }
    if (e.indexOf("mobile") >= 0) {
      return true;
    }
    return false;
  }
  function fE(T) {
    T = T.toLowerCase();
    for (var e = 0; e < cm.length; e++) {
      if (T.indexOf(cm[e]) >= 0) {
        return true;
      }
    }
    return false;
  }
  function dZ(e) {
    if (!e) {
      return false;
    }
    if (dw(e)) {
      return false;
    }
    if (fE(e)) {
      return true;
    }
    return false;
  }
  a9.ifEnableEarth = function(i) {
    var e = a9.ifEnableEarth;
    if (!i && typeof e._enable === "boolean") {
      return e._enable;
    }
    if (a9.ifSupportWebGL()) {
      e._enable = true;
      return true;
    }
    e._enable = false;
    return false;
  };
  a9.ifEnableWebGLMap = function(i) {
    var e = a9.ifEnableWebGLMap;
    if (!i && typeof e._enable === "boolean") {
      return e._enable;
    }
    if (a9.ifSupportWebGL()) {
      if (dx.inMapHost) {
        e._enable = true;
        return true;
      } else {
        if (
          window.Blob ||
          window.BlobBuilder ||
          window.WebKitBlobBuilder ||
          window.MozBlobBuilder
        ) {
          e._enable = true;
          return true;
        } else {
          e._enable = false;
          return false;
        }
      }
    }
    e._enable = false;
    return false;
  };
  a9.params = {};
  a9.ifSupportWebGL = function() {
    var i = a9.ifSupportWebGL;
    if (typeof i._supportWebGL === "boolean") {
      return i._supportWebGL;
    }
    if (!window.WebGLRenderingContext) {
      i._supportWebGL = false;
      return false;
    }
    var T = document.createElement("canvas");
    T.width = 300;
    T.height = 150;
    var hT = null;
    var hZ = {
      alpha: true,
      antialias: false,
      failIfMajorPerformanceCaveat: true,
      preserveDrawingBuffer: false,
      stencil: false,
    };
    try {
      hT = T.getContext("webgl", hZ) || T.getContext("experimental-webgl", hZ);
    } catch (hV) {
      i._supportWebGL = false;
    }
    if (hT === null) {
      i._supportWebGL = false;
    } else {
      i._supportWebGL = true;
      var hX = hT.getExtension("WEBGL_debug_renderer_info");
      var hW = "";
      if (hX) {
        hW = hT.getParameter(hX.UNMASKED_RENDERER_WEBGL);
        if (dZ(hW) === true) {
          i._supportWebGL = true;
        }
        var hY = hT.getParameter(hX.UNMASKED_VENDOR_WEBGL);
        i._renderer = hW;
        i._vendor = hY;
      }
      if (!hX && D.Browser.firefox) {
        i._supportWebGL = true;
      }
      if (!hX && D.Platform.macintosh) {
        i._supportWebGL = true;
      }
      if (
        hT.drawingBufferWidth !== T.width ||
        hT.drawingBufferHeight !== T.height
      ) {
        i._supportWebGL = false;
      }
      if (hT.getParameter(hT.MAX_VERTEX_TEXTURE_IMAGE_UNITS) < 4) {
        i._supportWebGL = false;
      }
      var hS = hT.getParameter(hT.MAX_TEXTURE_SIZE);
      a9.params.maxTextureSize = hS;
      if (hS < 4096) {
        i._supportWebGL = false;
      }
      var hU = hT.getParameter(hT.MAX_TEXTURE_IMAGE_UNITS);
      if (hU < 8) {
        i._supportWebGL = false;
      }
      if (
        !hT.getShaderPrecisionFormat ||
        hT.getShaderPrecisionFormat(hT.FRAGMENT_SHADER, hT.HIGH_FLOAT)
          .precision < 23
      ) {
        i._supportWebGL = false;
      }
    }
    return i._supportWebGL;
  };
  a9.ifSupportCanvas2d = function() {
    var hT = a9.ifSupportCanvas2d;
    if (typeof hT.supportCanvas2d === "boolean") {
      return hT.supportCanvas2d;
    }
    var T = document.createElement("canvas");
    var i = null;
    try {
      i = T.getContext("2d");
    } catch (hS) {
      hT.supportCanvas2d = false;
    }
    if (i === null) {
      hT.supportCanvas2d = false;
    } else {
      hT.supportCanvas2d = true;
    }
    return hT.supportCanvas2d;
  };
  a9.ifEnableCanvas2dMap = function() {
    var i = navigator.userAgent;
    var e = 0;
    var hS = 0;
    var hT = 0;
    if (/macintosh/gi.test(i)) {
      var T = 0;
      if (
        /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(i) &&
        !/chrome/i.test(i)
      ) {
        T = parseInt(RegExp["\x241"] || RegExp["\x242"], 10);
      }
      if (T > 0) {
        return false;
      }
      return true;
    }
    if (/windows nt (\d+\.\d)/gi.test(i)) {
      hS = parseFloat(RegExp.$1);
      if (hS >= 6.1) {
        if (/chrome\/(\d+\.\d)/i.test(i)) {
          e = parseFloat(RegExp.$1);
          if (e >= 31) {
            return true;
          }
        }
        if (/MSIE (\d+(\.\d+)?)/.test(i)) {
          hT = parseFloat(RegExp.$1);
          if (hT >= 10) {
            return true;
          }
        }
        if (/Firefox/.test(i)) {
          return true;
        }
        if (/rv:11.0/gi.test(i)) {
          return true;
        }
        if (/edge/gi.test(i)) {
          return true;
        }
      }
    }
    return false;
  };
  a9.ifSupportCSS3 = function(hW, i) {
    var hV = document.createElement("div");
    var hU = "Webkit Moz O ms".split(" ");
    var e = hU.length;
    var T = "";
    var hS = hV.style;
    if (hW in hS) {
      T = hW;
    }
    hW = hW.replace(/^[a-z]/, function(hX) {
      return hX.toUpperCase();
    });
    while (e--) {
      var hT = hU[e] + hW;
      if (hT in hS) {
        T = hT;
        break;
      }
    }
    if (i) {
      return T;
    } else {
      return T.length > 0 ? true : false;
    }
  };
  a9.isModernBrowser = a9.ifSupportCanvas2d() && a9.ifSupportCSS3("transform");
  function e0(i, e) {
    this._size = i;
    this._curSize = 0;
    this._cache = {};
    this._least = null;
    this._most = null;
    this._options = { clearCallback: null, removeOldCallback: null };
    e = e || {};
    for (var T in e) {
      this._options[T] = e[T];
    }
    this._getDataTimes = 0;
    this._hitTimes = 0;
  }
  e0.prototype.setData = function(hS, hU) {
    var i = this._cache;
    var T = this._size;
    if (T === 0) {
      return;
    }
    var e = this._curSize;
    if (e === T) {
      this._removeOld();
    }
    var hT;
    if (!i[hS]) {
      hT = { key: hS, data: hU, older: null, newwer: null };
      i[hS] = hT;
      if (this._least === null) {
        this._least = hT;
      }
      if (this._most === null) {
        this._most = hT;
      }
      this._curSize++;
    } else {
      hT = i[hS];
      hT.data = hU;
      if (this._most === hT) {
        return;
      }
      hT.older && (hT.older.newer = hT.newer);
      hT.newer && (hT.newer.older = hT.older);
      if (this._least === hT) {
        this._least = hT.newer;
      }
    }
    if (this._most && this._most !== hT) {
      this._most.newer = hT;
      hT.older = this._most;
      this._most = hT;
      hT.newer = null;
    }
  };
  e0.prototype.getData = function(e) {
    var i = this._cache[e];
    this._getDataTimes++;
    if (i) {
      this._hitTimes++;
      var T = i.data;
      if (this._most === i) {
        return T;
      }
      i.older && (i.older.newer = i.newer);
      i.newer && (i.newer.older = i.older);
      if (this._least === i) {
        this._least = i.newer;
      }
      this._most.newer = i;
      i.older = this._most;
      i.newer = null;
      this._most = i;
      return T;
    }
    return null;
  };
  e0.prototype.getAllData = function() {
    return this._cache;
  };
  e0.prototype.getHitRate = function() {
    return this._hitTimes / this._getDataTimes;
  };
  e0.prototype.removeData = function(i) {
    var e = this._cache;
    var T = e[i];
    if (!T) {
      return;
    }
    if (this._options.clearCallback) {
      this._options.clearCallback(T.data, T.key);
    }
    T.older && (T.older.newer = T.newer);
    T.newer && (T.newer.older = T.older);
    if (this._least === T) {
      this._least = T.newer;
    }
    if (this._most === T) {
      this._most = T.older;
    }
    delete e[i];
    this._curSize--;
  };
  e0.prototype._removeOld = function() {
    var e = this._cache;
    var hS = Math.round(this._size * 0.6);
    var T = 0;
    while (this._least && T < hS) {
      var i = this._least;
      this._least = i.newer;
      i.newer && (i.newer.older = null);
      if (this._options.clearCallback) {
        this._options.clearCallback(i.data, i.key);
      }
      delete e[i.key];
      T++;
    }
    this._curSize -= T;
    if (this._options.removeOldCallback) {
      this._options.removeOldCallback();
    }
  };
  e0.prototype.clear = function() {
    var e = this._cache;
    var i = this._least;
    if (this._options.clearCallback) {
      while (i) {
        this._options.clearCallback(i.data, i.key);
        i = i.newer;
      }
    }
    this._least = this._most = null;
    this._cache = {};
    this._curSize = 0;
  };
  e0.prototype.forEach = function(e) {
    var i = this._least;
    while (i) {
      e(i.data);
      i = i.newer;
    }
  };
  e0.prototype.clearExcept = function(i) {
    var e = this._cache;
    var T = this._least;
    while (T) {
      if (!i[T.key]) {
        if (this._options.clearCallback) {
          this._options.clearCallback(T.data, T.key);
        }
        T.older && (T.older.newer = T.newer);
        T.newer && (T.newer.older = T.older);
        if (this._least === T) {
          this._least = T.newer;
        }
        if (this._most === T) {
          this._most = T.older;
        }
        delete e[T.key];
        this._curSize--;
      }
      T = T.newer;
    }
  };
  var g1 = {
    parseHexToRgbaArray: function(hU) {
      var hV = hU.replace("#", "");
      if (hV.length === 3) {
        hV += "f";
      } else {
        if (hV.length === 6) {
          hV += "ff";
        }
      }
      var e = [];
      var hT = hV.length;
      var hS = hT === 8 ? 2 : 1;
      for (var T = 0; T < hT; T = T + hS) {
        if (hS === 2) {
          e.push(parseInt(hV.slice(T, T + 2), 16));
        } else {
          e.push(parseInt(hV.slice(T, T + 1) + hV.slice(T, T + 1), 16));
        }
      }
      return e;
    },
    parseRgbaStrToArray: function(i) {
      var e = [0, 0, 0, 255];
      if (i.indexOf("rgba(") === 0) {
        var hS = i.replace("rgba(", "").replace(")", "");
        var T = hS.split(",");
        e[0] = parseInt(T[0], 10);
        e[1] = parseInt(T[1], 10);
        e[2] = parseInt(T[2], 10);
        e[3] = Math.round(parseFloat(T[3]) * 255);
      } else {
        if (i.indexOf("rgb(") === 0) {
          var hS = i.replace("rgb(", "").replace(")", "");
          var hT = hS.split(",");
          e[0] = parseInt(hT[0], 10);
          e[1] = parseInt(hT[1], 10);
          e[2] = parseInt(hT[2], 10);
          e[3] = 255;
        }
      }
      return e;
    },
    parseHexAndOpacityToRgbaArray: function(hT, hU) {
      var T = [];
      var hX = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      var hW = hT.toLowerCase();
      if (hX.test(hW)) {
        if (hW.length === 4) {
          var e = "#";
          for (var hV = 1; hV < 4; hV++) {
            e += hW.slice(hV, hV + 1).concat(hW.slice(hV, hV + 1));
          }
          hW = e;
        }
        for (var hS = 1; hS < 7; hS += 2) {
          T.push(parseInt(hW.slice(hS, hS + 2), 16));
        }
        T.push(hU);
      }
      return T;
    },
    parseCSSColor: function(e) {
      if (e.indexOf("#") === 0) {
        return g1.parseHexToRgbaArray(e);
      }
      return g1.parseRgbaStrToArray(e);
    },
    rgbToHSV: function(hT) {
      var e = hT[0] / 255;
      var T = hT[1] / 255;
      var hU = hT[2] / 255;
      var hX = Math.max(e, T, hU);
      var hS = Math.min(e, T, hU);
      var hW = hX - hS;
      var i;
      if (hW === 0) {
        i = 0;
      } else {
        if (hX === e) {
          i = 60 * (((T - hU) / hW) % 6);
        } else {
          if (hX === T) {
            i = 60 * ((hU - e) / hW + 2);
          } else {
            if (hX === hU) {
              i = 60 * ((e - T) / hW + 4);
            }
          }
        }
      }
      var hY = hX === 0 ? 0 : hW / hX;
      var hV = hX;
      while (i < 0) {
        i += 360;
      }
      return [i, hY, hV];
    },
    hsvToRGB: function(hS) {
      var hW = hS[2] * hS[1];
      var T = hW * (1 - Math.abs(((hS[0] / 60) % 2) - 1));
      var i = hS[2] - hW;
      var hT = hS[0];
      var hV;
      var hU;
      var e;
      if (hT >= 0 && hT < 60) {
        hV = hW;
        hU = T;
        e = 0;
      } else {
        if (hT >= 60 && hT < 120) {
          hV = T;
          hU = hW;
          e = 0;
        } else {
          if (hT >= 120 && hT < 180) {
            hV = 0;
            hU = hW;
            e = T;
          } else {
            if (hT >= 180 && hT < 240) {
              hV = 0;
              hU = T;
              e = hW;
            } else {
              if (hT >= 240 && hT < 300) {
                hV = T;
                hU = 0;
                e = hW;
              } else {
                if (hT >= 300 && hT < 360) {
                  hV = hW;
                  hU = 0;
                  e = T;
                }
              }
            }
          }
        }
      }
      hV = (hV + i) * 255 > 255 ? 255 : (hV + i) * 255;
      hU = (hU + i) * 255 > 255 ? 255 : (hU + i) * 255;
      e = (e + i) * 255 > 255 ? 255 : (e + i) * 255;
      return [Math.round(hV), Math.round(hU), Math.round(e)];
    },
  };
  var cC = {
    request: function(hV, hS, i, hX, T) {
      var hT = (Math.random() * 100000).toFixed(0);
      bp._rd["_cbk" + hT] = function(hY) {
        if (hY.result && hY.result["error"] && hY.result["error"] === 202) {
          alert("该AK因为恶意行为已经被管理员封禁！");
          return;
        }
        i = i || {};
        hV && hV(hY, i);
        delete bp._rd["_cbk" + hT];
      };
      hX = hX || "";
      var hW;
      if (i && i.useEncodeURI) {
        hW = hk(hS, encodeURI);
      } else {
        hW = hk(hS, encodeURIComponent);
      }
      var hU = this;
      var e =
        e4.apiHost + "/" + hX + "?" + hW + "&ie=utf-8&oue=1&fromproduct=jsapi";
      if (!T) {
        e += "&res=api";
      }
      e += "&callback=" + eB + "._rd._cbk" + hT;
      e += "&ak=" + gf + "&v=3.0&seckey=" + o;
      hn.load(e);
    },
  };
  bp._rd = {};
  var E = {
    request: function(hS, e) {
      if (e) {
        var T = (Math.random() * 100000).toFixed(0);
        BMapGL._rd["_cbk" + T] = function(hT) {
          e && e(hT);
          delete BMapGL._rd["_cbk" + T];
        };
        hS += "&callback=BMapGL._rd._cbk" + T;
      }
      hS += "&seckey=" + o;
      var i = U("script", {
        src: hS,
        type: "text/javascript",
        charset: "utf-8",
      });
      if (i.addEventListener) {
        i.addEventListener(
          "load",
          function(hU) {
            var hT = hU.target;
            hT.parentNode.removeChild(hT);
          },
          false
        );
        i.addEventListener(
          "error",
          function(hT) {
            e && e([, , , , ,]);
          },
          false
        );
      } else {
        if (i.attachEvent) {
          i.attachEvent("onreadystatechange", function(hU) {
            var hT = window.event.srcElement;
            if (
              hT &&
              (hT.readyState == "loaded" || hT.readyState == "complete")
            ) {
              hT.parentNode.removeChild(hT);
            }
          });
        }
      }
      document.getElementsByTagName("head")[0].appendChild(i);
      i = null;
    },
  };
  function a8() {
    this._map = null;
    this._container;
    this._type = "control";
    this.blockInfoWindow = true;
    this._visible = true;
  }
  a8.inherits(ee, "Control");
  D.extend(a8.prototype, {
    initialize: function(e) {
      this._map = e;
      if (this._container) {
        if (this._opts && this._opts.container) {
          this._opts.container.appendChild(this._container);
        } else {
          e.container.appendChild(this._container);
        }
        return this._container;
      }
      return;
    },
    _i: function(e) {
      if (!this._container && this.initialize && bW(this.initialize)) {
        this._container = this.initialize(e);
      }
      this._opts = this._opts || { printable: false };
      this._setStyle();
      this._setPosition();
      if (this._container) {
        this._container._jsobj = this;
      }
    },
    _setStyle: function() {
      var i = this._container;
      if (i) {
        var e = i.style;
        e.position = "absolute";
        e.zIndex = this._cZIndex || "10";
        e.MozUserSelect = "none";
        if (!this._opts.printable) {
          D.ac(i, "BMap_noprint");
        }
        D.on(i, "contextmenu", dc);
      }
    },
    remove: function() {
      this._map = null;
      if (!this._container) {
        return;
      }
      this._container.parentNode &&
        this._container.parentNode.removeChild(this._container);
      this._container._jsobj = null;
      this._container = null;
    },
    _render: function(e) {
      if (this._opts && this._opts.container) {
        this._container = dJ(
          this._opts.container,
          '<div unselectable="on"></div>'
        );
      } else {
        var i = '<div unselectable="on"></div>';
        if (e && e.config.autoSafeArea && bw()) {
          this._safeAreaContainer = dJ(this._map.container, i);
          this._safeAreaContainer.style.position = "absolute";
          this._safeAreaContainer.style.bottom = "env(safe-area-inset-bottom)";
          this._container = dJ(this._safeAreaContainer, i);
        } else {
          this._container = dJ(this._map.container, i);
        }
      }
      if (this._visible === false) {
        this._container.style.display = "none";
      }
      return this._container;
    },
    _setPosition: function() {
      this.setAnchor(this._opts.anchor);
    },
    setAnchor: function(hS) {
      if (
        this.anchorFixed ||
        typeof hS !== "number" ||
        isNaN(hS) ||
        hS < BMAP_ANCHOR_TOP_LEFT ||
        hS > BMAP_ANCHOR_BOTTOM_RIGHT
      ) {
        hS = this.defaultAnchor;
      }
      this._opts.offset = this._opts.offset || this.defaultOffset;
      var T = this._opts.anchor;
      this._opts.anchor = hS;
      if (!this._container) {
        return;
      }
      var hU = this._container;
      var e = this._opts.offset.width;
      var hT = this._opts.offset.height;
      hU.style.left = hU.style.top = hU.style.right = hU.style.bottom = "auto";
      switch (hS) {
        case BMAP_ANCHOR_TOP_LEFT:
          hU.style.top = hT + "px";
          hU.style.left = e + "px";
          break;
        case BMAP_ANCHOR_TOP_RIGHT:
          hU.style.top = hT + "px";
          hU.style.right = e + "px";
          break;
        case BMAP_ANCHOR_BOTTOM_LEFT:
          hU.style.bottom = hT + "px";
          hU.style.left = e + "px";
          break;
        case BMAP_ANCHOR_BOTTOM_RIGHT:
          hU.style.bottom = hT + "px";
          hU.style.right = e + "px";
          break;
        default:
          break;
      }
      var i = ["TL", "TR", "BL", "BR"];
      D.rc(this._container, "anchor" + i[T]);
      D.ac(this._container, "anchor" + i[hS]);
    },
    getAnchor: function() {
      return this._opts.anchor;
    },
    setOffset: function(e) {
      if (!e) {
        return;
      }
      this._opts = this._opts || {};
      this._opts.offset = new ea(e.width, e.height);
      if (!this._container) {
        return;
      }
      this.setAnchor(this._opts.anchor);
    },
    getOffset: function() {
      return this._opts.offset;
    },
    getDom: function() {
      return this._container;
    },
    show: function() {
      if (this._visible === true) {
        return;
      }
      this._visible = true;
      if (this._container) {
        this._container.style.display = "";
      }
      this.dispatchEvent(new bc("onshow"));
    },
    hide: function() {
      if (this._visible === false) {
        return;
      }
      this._visible = false;
      if (this._container) {
        this._container.style.display = "none";
      }
      this.dispatchEvent(new bc("onhide"));
    },
    isPrintable: function() {
      return !!this._opts.printable;
    },
    isVisible: function() {
      if (!this._container && !this._map) {
        return false;
      }
      return !!this._visible;
    },
    _asyncLoadCode: function() {
      var e = this;
      eb.load("control", function() {
        if (e._asyncDraw) {
          e._asyncDraw();
        }
      });
    },
  });
  var hE = { TOP_LEFT: 0, TOP_RIGHT: 1, BOTTOM_LEFT: 2, BOTTOM_RIGHT: 3 };
  bp.ControlAnchor = hE;
  window.BMAP_ANCHOR_TOP_LEFT = 0;
  window.BMAP_ANCHOR_TOP_RIGHT = 1;
  window.BMAP_ANCHOR_BOTTOM_LEFT = 2;
  window.BMAP_ANCHOR_BOTTOM_RIGHT = 3;
  function dI(e) {
    a8.call(this);
    e = e || {};
    this._opts = { printable: false };
    D.extend(this._opts, e);
    this._copyrightCollection = [];
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
    this.defaultOffset = new ea(5, 2);
    this.setAnchor(e.anchor);
    this._canShow = true;
    this.sateMapStyle = false;
    this.blockInfoWindow = false;
    this._asyncLoadCode();
  }
  dI.inherits(a8, "CopyrightControl");
  D.extend(dI.prototype, {
    initialize: function(e) {
      this._map = e;
      return this._container;
    },
    addCopyright: function(hS) {
      var e = { minZoom: 0, bounds: null, content: "", mapType: "" };
      for (var T in hS) {
        e[T] = hS[T];
      }
      if (this._map) {
        var hV = e.minZoom;
        if (
          hV === -1 ||
          hV < this._map.getMinZoom() ||
          hV > this._map.getMaxZoom()
        ) {
          e.minZoom = this._map.getMinZoom();
        }
        if (e.mapType !== "" && !b7[e.mapType]) {
          e.mapType = BMAPGL_NORMAL_MAP;
        }
      }
      var hT = this.getCopyright(hS.id);
      if (hT) {
        for (var hU in e) {
          hT[hU] = e[hU];
        }
      } else {
        this._copyrightCollection.push(e);
      }
    },
    getCopyright: function(hS) {
      for (var T = 0, e = this._copyrightCollection.length; T < e; T++) {
        if (this._copyrightCollection[T].id === hS) {
          return this._copyrightCollection[T];
        }
      }
    },
    addSateMapStyle: function() {
      this.sateMapStyle = true;
      if (this._container) {
        D.ac(this._container, "BMap_cpyCtrl_w");
      }
    },
    removeSateMapStyle: function() {
      this.sateMapStyle = false;
      if (this._container) {
        D.rc(this._container, "BMap_cpyCtrl_w");
      }
    },
  });
  function ec(e) {
    a8.call(this);
    e = e || {};
    this.canCheckSize = e.canCheckSize === false ? false : true;
    this.curCityName = "";
    this.curCityCode = "";
    this.defaultOffset = new ea(10, 10);
    this.defaultAnchor = hE.TOP_LEFT;
    this.onChangeBefore = [];
    this.onChangeAfter = [];
    this.onChangeSuccess = [];
    this._opts = {
      printable: false,
      offset: e.offset || this.defaultOffset,
      anchor: e.anchor || this.defaultAnchor,
      expand: !!e.expand,
    };
    if (e.onChangeBefore && bW(e.onChangeBefore)) {
      this.onChangeBefore.push(e.onChangeBefore);
    }
    if (e.onChangeAfter && bW(e.onChangeAfter)) {
      this.onChangeAfter.push(e.onChangeAfter);
    }
    if (e.onChangeSuccess && bW(e.onChangeSuccess)) {
      this.onChangeSuccess.push(e.onChangeSuccess);
    }
    this.setAnchor(e.anchor);
    this._asyncLoadCode();
  }
  ec.inherits(a8, "CityListControl");
  D.extend(ec.prototype, {
    initialize: function(e) {
      this._map = e;
      return this._container;
    },
  });
  function hi(e) {
    a8.call(this);
    e = e || {};
    this._opts = { printable: false };
    this._opts = D.extend(D.extend(this._opts, { unit: "metric" }), e);
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
    this.defaultOffset = new ea(81, 18);
    if (f6()) {
      this.defaultOffset = new ea(75, 10);
    }
    this.setAnchor(e.anchor);
    this._units = {
      metric: { name: "metric", conv: 1, incon: 1000, u1: "米", u2: "公里" },
      us: { name: "us", conv: 3.2808, incon: 5280, u1: "英尺", u2: "英里" },
    };
    this.sateMapStyle = false;
    if (!this._units[this._opts.unit]) {
      this._opts.unit = "metric";
    }
    this._scaleText = null;
    this._numberArray = {};
    this._asyncLoadCode();
  }
  window.BMAP_UNIT_METRIC = "metric";
  window.BMAP_UNIT_IMPERIAL = "us";
  hi.inherits(a8, "ScaleControl");
  D.extend(hi.prototype, {
    initialize: function(e) {
      this._map = e;
      return this._container;
    },
    setUnit: function(e) {
      this._opts.unit =
        (this._units[e] && this._units[e].name) || this._opts.unit;
    },
    getUnit: function() {
      return this._opts.unit;
    },
    addSateMapStyle: function() {
      this.sateMapStyle = true;
      var e = this._container;
      if (e) {
        D.ac(e.children[0], "dark");
      }
    },
    removeSateMapStyle: function() {
      this.sateMapStyle = false;
      var e = this._container;
      if (e) {
        D.rc(e.children[0], "dark");
      }
    },
  });
  window.BMAP_NAVIGATION_CONTROL_LARGE = 0;
  window.BMAP_NAVIGATION_CONTROL_SMALL = 1;
  window.BMAP_NAVIGATION_CONTROL_PAN = 2;
  window.BMAP_NAVIGATION_CONTROL_ZOOM = 3;
  window.BMAP_NAVIGATION_CONTROL_ANIM = 4;
  function du(e) {
    a8.call(this);
    e = e || {};
    this._opts = { printable: false };
    D.extend(this._opts, e);
    this.controlHeight = [
      {
        width: 65,
        height: 227,
        zoomHeight: 227,
        zoomWidth: 37,
        sliderHeight: 180,
      },
      {
        width: 65,
        height: 47,
        zoomHeight: this._opts.forceNew === true ? 56 : 47,
        zoomWidth: 37,
        sliderHeight: 0,
      },
      { width: 37, height: 57, zoomHeight: 0, zoomWidth: 0, sliderHeight: 0 },
      { width: 26, height: 56, zoomHeight: 56, zoomWidth: 6, sliderHeight: 0 },
      {
        width: 56,
        height: 47,
        zoomHeight: 47,
        zoomWidth: 37,
        sliderHeight: 180,
      },
    ];
    this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
    this.defaultOffset = new ea(10, 10);
    this.setAnchor(e.anchor);
    this.setType(e.type);
    this._maxTotalZoomLv = 19;
    this._minZoomLevel = -1;
    this._maxZoomLevel = -1;
    this._totalZoomLv = -1;
    this._sliderInterval = 10;
    this._sliderHeight = 180;
    this._minBarY = 1;
    this._maxBarY = -1;
    this._curBarY = -1;
    this._zoomDom = null;
    this._zoomBtnDom = null;
    this._sliderDom = null;
    this._sliderBaseDom = null;
    this._cZIndex = "1100";
    this._asyncLoadCode();
  }
  du.inherits(a8, "NavigationControl");
  D.extend(du.prototype, {
    initialize: function(e) {
      this._map = e;
      return this._container;
    },
    setType: function(e) {
      if (
        typeof e == "number" &&
        e >= BMAP_NAVIGATION_CONTROL_LARGE &&
        e <= BMAP_NAVIGATION_CONTROL_ANIM
      ) {
        this._opts.type = e;
      } else {
        this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE;
      }
    },
    getType: function() {
      return this._opts.type;
    },
  });
  function bD(i) {
    a8.call(this);
    i = i || {};
    this._opts = { printable: false };
    this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
    this.defaultOffset = new ea(10, 10);
    this.setAnchor(i.anchor);
    this._opts = D.extend(
      D.extend(this._opts, { offset: this.defaultOffset, enableSwitch: true }),
      i
    );
    var e = this;
    eb.load("control", function() {
      e._asyncDraw();
    });
  }
  bD.inherits(a8, "MapTypeControl");
  D.extend(bD.prototype, {
    initialize: function(e) {
      this._map = e;
      return this._container;
    },
    showStreetLayer: function(e) {
      this._map.showStreetLayer(e);
    },
  });
  function cz(e) {
    a8.call(this);
    e = e || {};
    this._opts = {};
    this._opts = D.extend(this._opts, e);
    this._zoomInDisabled = false;
    this._zoomOutDisabled = false;
    this._zoomInTapped = false;
    this._zoomOutTapped = false;
    this.defaultAnchor = hE.BOTTOM_RIGHT;
    this.defaultOffset = new ea(15, 20);
    this.setAnchor(e.anchor);
    this._asyncLoadCode();
  }
  cz.inherits(a8, "ZoomControl");
  D.extend(cz.prototype, {
    initialize: function(e) {
      this._map = e;
      return this._container;
    },
  });
  function bB(e) {
    a8.call(this);
    e = e || {};
    this._opts = { autoZoom: true, autoViewport: true };
    this._opts = D.extend(this._opts, e);
    this.defaultAnchor = hE.BOTTOM_LEFT;
    this.defaultOffset = new ea(10, 50);
    this.watchPosition = this._opts.watchPosition || false;
    this.useCompass = this._opts.useCompass || false;
    this.locMarker = null;
    this.locLevel = 16;
    this.setAnchor(this._opts.anchor);
    this.onLocationStart = e.onLocationStart || null;
    this._asyncLoadCode();
  }
  bB.inherits(a8, "LocationControl");
  D.extend(bB.prototype, {
    initialize: function(e) {
      this._map = e;
      return this._container;
    },
    startLocation: function() {
      this._startLocationCalled = true;
    },
    stopLocationTrace: function() {},
    setOptions: function(e) {
      e = e || {};
      D.extend(this._opts, e);
    },
  });
  function ag(e) {
    a8.call(this);
    e = e || {};
    this._opts = {};
    this._opts = D.extend(this._opts, e);
    this.defaultAnchor = hE.BOTTOM_LEFT;
    this.defaultOffset = new ea(5, 15);
    if (f6()) {
      this.defaultOffset = new ea(10, 10);
    }
    this.setAnchor(e.anchor);
  }
  ag.inherits(a8, "LogoControl");
  D.extend(ag.prototype, {
    initialize: function(i) {
      this._map = i;
      var e = (this._container = document.createElement("div"));
      e.innerHTML =
        '<img src="' +
        e4.apiHost +
        '/images/logo_hd.png"  style="height:21px;width:62px;"/>';
      i.getContainer().appendChild(e);
      return e;
    },
  });
  function gC(e, i) {
    this._map = e;
    this._indoorInfo = i;
    this._visible = true;
    this._adjustVisible = true;
    this._isMobile = f6();
    this._sizeConfig = {
      FLOOR_BTN_HEIGHT: this._isMobile ? 35 : 26,
      SWITCH_ARROW_HEIGHT: this._isMobile ? 20 : 15,
    };
    this._init();
  }
  gC.prototype._init = function() {
    this._render();
    this._bindDom();
    this._bind();
    this._adjustDisplayHeight();
    var e = new bc("onindoor_bar_show");
    e.uid = this._indoorInfo.uid;
    this._map.dispatchEvent(e);
  };
  gC.prototype._render = function() {
    if (!this._indoorInfo) {
      return;
    }
    var hW = this._isMobile;
    var e = (this._div = U("div"));
    D.ac(e, "floor-select-container");
    hW && D.ac(e, "mobile");
    hW && D.ac(e, "all-border-radius");
    var i = (this._btnTop = U("button"));
    D.ac(i, "floor-switch-top");
    D.ac(i, "top-border-radius");
    var hU = U("div");
    D.ac(hU, "floor-switch-top-icon");
    i.appendChild(hU);
    var hT = (this._btnBottom = U("button"));
    var T = U("div");
    D.ac(T, "floor-switch-bottom-icon");
    hT.appendChild(T);
    D.ac(hT, "floor-switch-bottom");
    D.ac(hT, "bottom-border-radius");
    var hS = (this._floorsContainer = U("div"));
    D.ac(hS, "floors-container");
    hS.appendChild(this._createFloorsDom());
    this._div.appendChild(i);
    this._div.appendChild(hS);
    this._div.appendChild(hT);
    var hX = 0;
    if (this._btnTop.style.display === "") {
      hX = 2 * this._sizeConfig.SWITCH_ARROW_HEIGHT;
    }
    this._div.style.height =
      parseInt(this._floorsContainer.style.height, 10) + hX + "px";
    this._map.getContainer().appendChild(this._div);
    if (!hW) {
      var hV = this;
      setTimeout(function() {
        hV._div.style.right = "20px";
      }, 20);
    }
  };
  gC.prototype._createFloorsDom = function() {
    if (!this._indoorInfo) {
      return;
    }
    var T = (this._ol = U("ol"));
    var hU = this._indoorInfo.currentFloor;
    for (var hT = this._indoorInfo.floors.length - 1; hT >= 0; hT--) {
      var hV = this._indoorInfo.floors[hT].floorName;
      var e = U("li");
      var hS = U("button");
      D.ac(hS, "btn-select-floor");
      if (hT === hU) {
        D.ac(hS, "selected");
      }
      hS.setAttribute("data-floor", hT);
      hS.innerHTML = hV;
      e.appendChild(hS);
      T.appendChild(e);
    }
    return T;
  };
  gC.prototype._updateUI = function() {
    if (!this._ol) {
      this._render();
      this._bind();
      this._adjustDisplayHeight();
      return;
    }
    this._ol = null;
    this._ol = this._createFloorsDom();
    this._floorsContainer.innerHTML = "";
    this._floorsContainer.appendChild(this._ol);
    this._adjustDisplayHeight();
  };
  gC.prototype._bindDom = function() {
    var e = this;
    D.on(this._floorsContainer, "click", function(hS) {
      var T = hS.target || hS.srcElement;
      if (T.tagName.toLowerCase() === "button") {
        e._map.showIndoor(
          e._indoorInfo.uid,
          parseInt(T.getAttribute("data-floor"), 10)
        );
        var i = new bc("onindoor_bar_click");
        i.uid = e._indoorInfo.uid;
        e._map.dispatchEvent(i);
      }
    });
    D.on(this._floorsContainer, "mouseover", function(T) {
      var i = T.target;
      if (i.tagName.toLowerCase() === "button") {
        D.ac(i, "hover");
      }
    });
    D.on(this._floorsContainer, "mouseout", function(T) {
      var i = T.target;
      if (i.tagName.toLowerCase() === "button") {
        D.rc(i, "hover");
      }
    });
    D.on(this._floorsContainer, "touchstart", function(T) {
      var i = T.target;
      if (i.tagName.toLowerCase() === "button") {
        D.ac(i, "onmousedown");
      }
    });
    D.on(this._floorsContainer, "touchend", function(T) {
      var i = T.target;
      if (i.tagName.toLowerCase() === "button") {
        D.rc(i, "onmousedown");
      }
    });
    D.on(this._btnTop, "mouseover", function(i) {
      if (this._disable) {
        return;
      }
      D.ac(this, "hover");
    });
    D.on(this._btnTop, "mouseout", function(i) {
      D.rc(this, "hover");
    });
    D.on(this._btnBottom, "mouseover", function(i) {
      if (this._disable) {
        return;
      }
      D.ac(this, "hover");
    });
    D.on(this._btnBottom, "mouseout", function(i) {
      D.rc(this, "hover");
    });
    D.on(this._btnTop, "touchstart", function(i) {
      if (this.className.indexOf("disable") > -1) {
        return;
      }
      D.ac(this, "onmousedown");
    });
    D.on(this._btnTop, "touchend", function(i) {
      D.rc(this, "onmousedown");
    });
    D.on(this._btnBottom, "touchstart", function(i) {
      if (this.className.indexOf("disable") > -1) {
        return;
      }
      D.ac(this, "onmousedown");
    });
    D.on(this._btnBottom, "touchend", function(i) {
      D.rc(this, "onmousedown");
    });
    D.on(this._btnTop, "click", function(i) {
      e._setBarSliderTop(parseInt(e._ol.style.top, 10) + 26);
    });
    D.on(this._btnBottom, "click", function(i) {
      e._setBarSliderTop(parseInt(e._ol.style.top, 10) - 26);
    });
    D.on(this._div, "mousemove", h);
    D.on(this._div, "wheel", dc);
    D.on(this._div, "mousewheel", dc);
    this._map.addEventListener("resize", function() {
      e._adjustDisplayHeight();
    });
  };
  gC.prototype._adjustDisplayHeight = function() {
    if (!this._indoorInfo) {
      return;
    }
    var hU = this._map.getSize().height;
    var hV = this._sizeConfig.FLOOR_BTN_HEIGHT;
    var hW = hU - 291 - 100;
    if (this._isMobile) {
      hW = hU - 12 - 108 - this._map.config.bottomOffset;
    }
    var e = this._indoorInfo.floors.length;
    var T = e * hV;
    var hS = e;
    var hY = 0;
    var hZ = this._floorsContainer.children[0];
    if (T > hW) {
      this._showArrow = true;
      D.rc(hZ.children[0].children[0], "top-border-radius");
      D.rc(hZ.children[e - 1].children[0], "bottom-border-radius");
    } else {
      this._showArrow = false;
      D.ac(hZ.children[0].children[0], "top-border-radius");
      D.ac(hZ.children[e - 1].children[0], "bottom-border-radius");
    }
    while (T > hW) {
      if (hS === 0) {
        break;
      }
      hS--;
      hY = 2 * this._sizeConfig.SWITCH_ARROW_HEIGHT;
      T = hS * hV + hY;
    }
    this._currentDisplayHeight = T;
    if (hS < 3) {
      this._setAdjustVisbile(false);
    } else {
      this._setAdjustVisbile(true);
    }
    this._floorsContainer.style.height = hS * hV + "px";
    var hT = this._indoorInfo.currentFloor;
    var i = e - hT;
    var hX = hT - 1;
    this._div.style.height =
      parseInt(this._floorsContainer.style.height, 10) + hY + "px";
    var h0 = -(e - (hT + Math.round(hS / 2))) * hV;
    this._setBarSliderTop(h0);
    if (hS < e) {
      D.show(this._btnTop);
      D.show(this._btnBottom);
    } else {
      D.hide(this._btnTop);
      D.hide(this._btnBottom);
      this._setBarSliderTop(0);
    }
    if (this._isMobile) {
      this._div.style.bottom = 108 + this._map.config.bottomOffset + "px";
    }
  };
  gC.prototype._setBarSliderTop = function(hS) {
    var T = 26;
    var i = this._indoorInfo.floors.length;
    var e = i * T;
    if (this._currentDisplayHeight) {
      if (this._showArrow) {
        e = this._currentDisplayHeight - 30;
      } else {
        e = this._currentDisplayHeight;
      }
    }
    if (e - hS >= i * T) {
      hS = e - i * T;
      D.ac(this._btnBottom, "disable");
      D.rc(this._btnBottom, "hover");
      this._btnBottom._disable = true;
    } else {
      D.rc(this._btnBottom, "disable");
      this._btnBottom._disable = false;
    }
    if (hS >= 0) {
      hS = 0;
      D.ac(this._btnTop, "disable");
      D.rc(this._btnTop, "hover");
      this._btnTop._disable = true;
    } else {
      D.rc(this._btnTop, "disable");
      this._btnTop._disable = false;
    }
    this._ol.style.top = hS + "px";
  };
  gC.prototype._setAdjustVisbile = function(e) {
    if (this._adjustVisible === e) {
      return;
    }
    this._adjustVisible = e;
    if (e && this._visible) {
      this._div.style.right = "20px";
    } else {
      this._div.style.right = "-30px";
    }
  };
  gC.prototype._bind = function() {
    var i = this._map;
    var e = this;
    i.on("indoor_status_changed", function(hW) {
      if (e._visible === false) {
        return;
      }
      var T = e._ol;
      var hU = hW.uid;
      if (!hU) {
        return;
      }
      var hV = hW.floor;
      for (var hT = 0; hT < T.children.length; hT++) {
        var hS = T.children[hT].children[0];
        if (parseInt(hS.getAttribute("data-floor"), 10) === hV) {
          D.ac(hS, "selected");
        } else {
          D.rc(hS, "selected");
        }
      }
    });
    i.on("zoomend", function(T) {
      if (this.getZoom() < 17) {
        e._setAdjustVisbile(false);
      } else {
        e._setAdjustVisbile(true);
      }
    });
  };
  gC.prototype.setInfo = function(e) {
    if (this._indoorInfo && this._indoorInfo.uid === e.uid) {
      return;
    }
    this._indoorInfo = e;
    this._updateUI();
  };
  gC.prototype.show = function() {
    if (this._visible === true) {
      return;
    }
    this._visible = true;
    if (!this._isMobile) {
      this._div.style.right = "20px";
    } else {
      this._div.style.display = "";
    }
    var e = new bc("onindoor_bar_show");
    e.uid = this._indoorInfo.uid;
    this._map.dispatchEvent(e);
  };
  gC.prototype.hide = function() {
    if (this._visible === false) {
      return;
    }
    this._visible = false;
    if (!this._isMobile) {
      this._div.style.right = "-30px";
    } else {
      this._div.style.display = "none";
    }
  };
  function eV() {
    this._opts = {};
    this.defaultOffset = new ea(2, 80);
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
    this._firstAnimation = true;
  }
  eV.inherits(a8, "NavigationControl3D");
  D.extend(eV.prototype, {
    initialize: function(T) {
      this._map = T;
      this._createDom();
      this._bindDom();
      this._bind();
      if (!f6()) {
        this._headingControl = new hH(this._map, this._div);
      }
      this._tiltControl = new et(this._map, this._div);
      this._render();
      var i = this._map.getMapType();
      var e = this;
      if (i === "B_EARTH_MAP" || this._map._renderType === "webgl") {
        e._div.style.opacity = "1";
        e._div.style.visibility = "visible";
      } else {
        e._div.style.opacity = "0";
        e._div.style.visibility = "hidden";
      }
      return this._container;
    },
    _createDom: function() {
      var i = (this._div = document.createElement("div"));
      this._container = i;
      var e = i.style;
      e.position = "absolute";
      e.zIndex = 5;
      e.width = "52px";
      e.height = "82px";
      e.right = "-3px";
      e.bottom = "79px";
      e.opacity = "0";
      e.visibility = "hidden";
      e.WebkitTransition = e.transition =
        "opacity .3s ease-out,visibility .3s ease-out";
    },
    _render: function() {
      var e = document.getElementById("map-operate");
      if (e) {
        e.appendChild(this._div);
      } else {
        this._map.getContainer().appendChild(this._div);
      }
    },
    _bindDom: function() {
      this._div.addEventListener("mousemove", h);
    },
    _bind: function() {
      if (this._map._renderType === "webgl") {
        return;
      }
      var e = this;
      this._map.on("maptypechange", function() {
        if (this.mapType === "B_EARTH_MAP") {
          if (e._firstAnimation) {
            e._firstAnimation = false;
            setTimeout(function() {
              e._div.style.opacity = "1";
              e._div.style.visibility = "visible";
            }, 300);
          } else {
            e._div.style.opacity = "1";
            e._div.style.visibility = "visible";
          }
        } else {
          e._div.style.opacity = "0";
          e._div.style.visibility = "hidden";
        }
      });
    },
  });
  function hH(T, i) {
    this._map = T;
    this._target = T;
    var hS = T.temp.originMapType || T.mapType;
    if (hS === "B_EARTH_MAP" && T._earth) {
      this._target = T._earth;
    }
    this._outContainer = i || T.getContainer();
    this._imgRatio = a7() >= c9.HIGH_RES_MIN_RATIO ? 2 : 1;
    this._imgPath =
      e4.imgPath +
      "earth-navi-control-pc4" +
      (this._imgRatio === 2 ? "-2x.png" : ".png");
    this._enabled = true;
    var e = this;
    this._setHeadingOptions = {
      callback: function() {
        e._target.setLock(false);
      },
    };
    this._init();
  }
  D.extend(hH.prototype, {
    _init: function() {
      this._createDom();
      this._render();
      this._bindDom();
      this._bind();
      this._updateUI();
      this._checkEnable();
    },
    _checkEnable: function() {
      if (this._target.getZoom() >= this._target._enableHeadingZoom) {
        this.enable();
      } else {
        this.disable();
      }
    },
    _createDom: function() {
      var i = (this._div = U("div"));
      var e = i.style;
      e.position = "absolute";
      e.zIndex = 5;
      e.top = "0";
      e.left = "0";
      e.width = "52px";
      e.height = "54px";
      e.background = "url(" + this._imgPath + ") no-repeat";
      e.backgroundSize = "266px auto";
      this._rotateCCW = this._createButton();
      this._rotateCCW.title = "逆时针转动";
      e = this._rotateCCW.style;
      e.left = "2px";
      e.top = "5px";
      e.zIndex = "1";
      e.width = "15px";
      e.height = "42px";
      e.backgroundPosition = "-75px -5px";
      this._rotateCW = this._createButton();
      this._rotateCW.title = "顺时针转动";
      e = this._rotateCW.style;
      e.right = "2px";
      e.top = "5px";
      e.zIndex = "1";
      e.width = "15px";
      e.height = "42px";
      e.backgroundPosition = "-75px -5px";
      e.WebkitTransform = e.transform = "scaleX(-1)";
      this._compass = this._createButton();
      this._compass.title = "恢复正北方向";
      e = this._compass.style;
      e.left = "19px";
      e.top = "4px";
      e.width = "14px";
      e.height = "44px";
      e.backgroundPosition = "-56px -4px";
      e.WebkitTransform = e.transform = "rotate(0deg)";
      this._div.appendChild(this._rotateCCW);
      this._div.appendChild(this._compass);
      this._div.appendChild(this._rotateCW);
      this._domRendered = true;
    },
    _createButton: function() {
      var e = U("button");
      var i = e.style;
      i.position = "absolute";
      i.outline = "none";
      i.border = "none";
      i.background = "url(" + this._imgPath + ") no-repeat";
      i.backgroundSize = "266px auto";
      i.cursor = "pointer";
      return e;
    },
    _render: function() {
      this._outContainer.appendChild(this._div);
    },
    enable: function() {
      this._enabled = true;
      if (this._domRendered) {
        this._rotateCCW.style.cursor = "pointer";
        this._rotateCCW.style.opacity = 1;
        this._rotateCW.style.cursor = "pointer";
        this._rotateCW.style.opacity = 1;
        this._compass.style.cursor = "pointer";
        this._compass.style.opacity = 1;
      }
    },
    disable: function() {
      this._enabled = false;
      if (this._domRendered) {
        this._rotateCCW.style.cursor = "";
        this._rotateCCW.style.opacity = 0.4;
        this._rotateCW.style.cursor = "";
        this._rotateCW.style.opacity = 0.4;
        this._compass.style.cursor = "";
        this._compass.style.opacity = 0.4;
      }
    },
    _bindDom: function() {
      eL(this._div, ["mousedown", "click", "dblclick"]);
      var i = this._map;
      var e = this;
      this._rotateCW.addEventListener(
        "click",
        function() {
          if (e._isOperating || e._enabled === false) {
            return;
          }
          if (e._target.getLock()) {
            return;
          }
          if (e._target.getHeading() === 360) {
            e._target.setHeading(0);
          }
          e._target.setLock(true);
          e._target.setHeading(
            e._target.getHeading() + 90,
            e._setHeadingOptions
          );
          i.fire(new bc("onrotatecwclick"));
        },
        false
      );
      this._rotateCCW.addEventListener(
        "click",
        function() {
          if (e._isOperating || e._enabled === false) {
            return;
          }
          if (e._target.getLock()) {
            return;
          }
          if (e._target.getHeading() === -360) {
            e._target.setHeading(0);
          }
          e._target.setLock(true);
          e._target.setHeading(
            e._target.getHeading() - 90,
            e._setHeadingOptions
          );
          i.fire(new bc("onrotateccwclick"));
        },
        false
      );
      this._rotateCW.addEventListener(
        "mouseover",
        function() {
          if (e._enabled === false) {
            return;
          }
          this.style.backgroundPosition = "-89px -5px";
        },
        false
      );
      this._rotateCW.addEventListener(
        "mouseout",
        function() {
          if (e._enabled === false) {
            return;
          }
          this.style.backgroundPosition = "-75px -5px";
        },
        false
      );
      this._rotateCCW.addEventListener(
        "mouseover",
        function() {
          if (e._enabled === false) {
            return;
          }
          this.style.backgroundPosition = "-89px -5px";
        },
        false
      );
      this._rotateCCW.addEventListener(
        "mouseout",
        function() {
          if (e._enabled === false) {
            return;
          }
          this.style.backgroundPosition = "-75px -5px";
        },
        false
      );
      this._compass.addEventListener(
        "click",
        function() {
          if (e._isOperating || e._enabled === false) {
            return;
          }
          if (e._target.getLock()) {
            return;
          }
          e._target.setLock(true);
          var T = false;
          if (e._target.getTilt() !== 0) {
            T = true;
            e._target.setTilt(0, e._setHeadingOptions);
          }
          if (e._target.getHeading() % 360 !== 0) {
            T = true;
            e._target.resetHeading(e._setHeadingOptions);
          }
          if (!T) {
            e._target.setLock(false);
          }
          i.fire(new bc("oncompassclick"));
        },
        false
      );
    },
    _bind: function() {
      var e = this;
      this._bindTarget(this._target);
      if (this._map._renderType === "webgl") {
        this._map.addEventListener("maptypechange", function(i) {
          if (this.mapType === "B_EARTH_MAP") {
            e._target = e._map._earth;
          } else {
            e._target = e._map;
          }
          e._bindTarget(e._target);
          e._checkEnable();
        });
      }
    },
    _bindTarget: function(i) {
      if (i === this._map && this._mapBinded) {
        return;
      }
      if (i === this._map._earth && this._earthBinded) {
        return;
      }
      var e = this;
      i.addEventListener("heading_changed", function(T) {
        e._updateUI();
      });
      i.addEventListener("animation_start", function(T) {
        e._isOperating = true;
      });
      i.addEventListener("animation_end", function(T) {
        e._isOperating = false;
      });
      i.on("load", function() {
        e._checkEnable();
      });
      i.on("zoom_changed", function() {
        e._checkEnable();
      });
      if (i === this._map) {
        this._mapBinded = true;
      } else {
        this._earthBinded = true;
      }
    },
    _updateUI: function() {
      var e = this._target.getHeading();
      var i = this._compass.style;
      i.WebkitTransform = i.transform = "rotate(" + e + "deg)";
    },
    hide: function() {
      this._div.style.display = "none";
    },
    show: function() {
      this._div.style.display = "block";
    },
  });
  function et(T, i) {
    this._map = T;
    this._target = T;
    var hS = T.temp.originMapType || T.mapType;
    if (hS === "B_EARTH_MAP" && T._earth) {
      this._target = T._earth;
    }
    this._outContainer = i || T.getContainer();
    this._imgRatio = a7() >= c9.HIGH_RES_MIN_RATIO ? 2 : 1;
    this._imgPath =
      e4.imgPath +
      "gl-navi-control-pc4" +
      (this._imgRatio === 2 ? "-2x.png" : ".png");
    this._enabled = true;
    var e = this;
    this._setTiltOptions = {
      callback: function() {
        e._target.setLock(false);
      },
    };
    this._init();
  }
  D.extend(et.prototype, {
    _init: function() {
      this._createDom();
      this._render();
      this._bindDom();
      this._bind();
      this._checkEnable();
    },
    _checkEnable: function() {
      if (this._target.getZoom() >= this._target._enableTiltZoom) {
        this.enable();
      } else {
        this.disable();
      }
    },
    _createDom: function() {
      var e = (this._div = U("button"));
      e.title = "倾斜";
      var i = e.style;
      i.position = "absolute";
      i.zIndex = 5;
      i.outline = "none";
      i.border = "none";
      i.cursor = "pointer";
      i.width = "26px";
      i.height = "26px";
      i.top = "56px";
      i.right = "13px";
      i.background = "url(" + this._imgPath + ") no-repeat #fff";
      i.backgroundSize = "266px auto";
      i.backgroundPosition = "-110px 1px";
      i.boxShadow = "1px 2px 1px rgba(0, 0, 0, 0.15)";
    },
    enable: function() {
      this._enabled = true;
      if (this._div) {
        this._div.style.cursor = "pointer";
      }
      this._updateUI();
    },
    disable: function() {
      this._enabled = false;
      if (this._div) {
        this._div.style.cursor = "";
      }
      this._updateUI();
    },
    _render: function() {
      this._outContainer.appendChild(this._div);
    },
    _bindDom: function() {
      var e = this;
      this._div.addEventListener(
        "mousedown",
        function(hS) {
          if (!e._enabled) {
            return;
          }
          if (e._target.getLock()) {
            return;
          }
          var i = e._target.getTilt();
          var T;
          if (i === e._map.getCurrentMaxTilt()) {
            T = "out";
          } else {
            if (i === 0) {
              T = "in";
            } else {
              T = e._preTrend ? e._preTrend : "in";
            }
          }
          e._curTrend = T;
          e._clickTimer = setTimeout(function() {
            e._map.fire(new bc("ontiltmsdown"));
            e._tiltAni = new p({
              duration: 9999999,
              render: function(hT) {
                i = e._target.getTilt();
                if (T === "in" && i < e._map.getCurrentMaxTilt()) {
                  e._target.setTilt(i + 1, { noAnimation: true });
                } else {
                  if (T === "out" && i > 0) {
                    e._target.setTilt(i - 1, { noAnimation: true });
                  }
                }
              },
              finish: function() {
                e._tiltAni = null;
              },
            });
            e._clickTimer = null;
          }, 200);
          hS.stopPropagation();
        },
        false
      );
      this._div.addEventListener(
        "mouseup",
        function(i) {
          if (!e._enabled) {
            return;
          }
          if (e._tiltAni) {
            e._tiltAni.stop();
          }
          e._preTrend = e._curTrend;
        },
        false
      );
      this._div.addEventListener(
        "click",
        function(hS) {
          if (!e._enabled) {
            return;
          }
          if (!e._clickTimer) {
            return;
          }
          if (e._target.getLock()) {
            return;
          }
          clearTimeout(e._clickTimer);
          e._map.fire(new bc("ontiltclick"));
          var i = e._target.getTilt();
          e._target.setLock(true);
          hS.stopPropagation();
          var T = e._map.getCurrentMaxTilt();
          if (e._curTrend === "in") {
            e._target.setTilt(T, e._setTiltOptions);
          } else {
            if (e._curTrend === "out") {
              e._target.setTilt(0, e._setTiltOptions);
            } else {
              if (i < T) {
                e._target.setTilt(T, e._setTiltOptions);
              } else {
                e._target.setTilt(0, e._setTiltOptions);
              }
            }
          }
        },
        false
      );
      this._div.addEventListener(
        "mouseover",
        function(i) {
          if (!e._enabled) {
            return;
          }
          e._mouseOver = true;
          e._updateUI();
        },
        false
      );
      this._div.addEventListener(
        "mouseout",
        function(i) {
          if (!e._enabled) {
            return;
          }
          e._mouseOver = false;
          e._updateUI();
        },
        false
      );
      eL(this._div, ["mousedown", "click", "dblclick"]);
    },
    _bind: function() {
      var e = this;
      var i = this._map;
      this._bindTarget(this._target);
      if (this._map._renderType === "webgl") {
        this._map.addEventListener("maptypechange", function(T) {
          if (this.mapType === "B_EARTH_MAP") {
            e._target = e._map._earth;
          } else {
            e._target = e._map;
          }
          e._bindTarget(e._target);
          e._checkEnable();
        });
      }
    },
    _bindTarget: function(i) {
      if (i === this._map && this._mapBinded) {
        return;
      }
      if (i === this._map._earth && this._earthBinded) {
        return;
      }
      var e = this;
      i.on("load", function() {
        e._checkEnable();
      });
      i.on("zoom_changed", function() {
        e._checkEnable();
      });
      i.on("tilt_changed", function() {
        e._updateUI();
      });
      if (i === this._map) {
        this._mapBinded = true;
      } else {
        this._earthBinded = true;
      }
    },
    _updateUI: function() {
      var T = this._target.getTilt();
      var i = 0;
      var hS = 0;
      var e = 0;
      if (T > 0) {
        i = 78;
      }
      if (this._mouseOver) {
        e = 52;
      }
      if (this._enabled === false) {
        hS = 26;
        e = 0;
        i = 0;
      }
      var hT = "-" + (110 + i + hS + e) + "px 1px";
      this._div && (this._div.style.backgroundPosition = hT);
      if (this._enabled) {
        if (T > 0) {
          this._div && (this._div.title = "恢复");
        } else {
          this._div && (this._div.title = "倾斜");
        }
      } else {
        this._div && (this._div.title = "请放大地图后操作");
      }
    },
    hide: function() {
      this._div.style.display = "none";
    },
    show: function() {
      this._div.style.display = "block";
    },
  });
  function cg(i) {
    ee.call(this);
    this._opts = { container: null, cursor: "default" };
    this._opts = D.extend(this._opts, i);
    this._type = "contextmenu";
    this._map = null;
    this._container;
    this._left = 0;
    this._top = 0;
    this._items = [];
    this._rItems = [];
    this._dividers = [];
    this._enable = true;
    this.curPixel = null;
    this.curPoint = null;
    this._isOpen = false;
    var e = this;
    eb.load("menu", function() {
      e._draw();
    });
  }
  cg.inherits(ee, "ContextMenu");
  D.extend(cg.prototype, {
    initialize: function(e) {
      this._map = e;
    },
    remove: function() {
      this._map = null;
    },
    addItem: function(hT, e) {
      if (!hT || hT._type != "menuitem" || hT._text == "" || hT._width <= 0) {
        return;
      }
      for (var hS = 0, T = this._items.length; hS < T; hS++) {
        if (this._items[hS] === hT) {
          return;
        }
      }
      if (e === undefined || e > this._items.length - 1) {
        e = -1;
      }
      hT._insertIndex = e;
      if (e === -1) {
        this._items.push(hT);
        this._rItems.push(hT);
      } else {
        this._items.splice(e, 0, hT);
        this._rItems.splice(e, 0, hT);
      }
    },
    removeItem: function(hS) {
      if (!hS || hS._type != "menuitem") {
        return;
      }
      for (var T = 0, e = this._items.length; T < e; T++) {
        if (this._items[T] === hS) {
          this._items[T].remove();
          this._items.splice(T, 1);
          delete hS._insertIndex;
          e--;
        }
      }
      for (var T = 0, e = this._rItems.length; T < e; T++) {
        if (this._rItems[T] === hS) {
          this._rItems[T].remove();
          this._rItems.splice(T, 1);
          delete hS._insertIndex;
          e--;
        }
      }
    },
    addSeparator: function(e) {
      if (e === undefined || e > this._items.length - 1) {
        e = -1;
      }
      var i = {
        _type: "divider",
        _dIndex: this._dividers.length,
        _insertIndex: e,
      };
      this._dividers.push({ dom: null });
      if (e === -1) {
        this._items.push(i);
      } else {
        this._items.splice(e, 0, i);
      }
    },
    removeSeparator: function(T) {
      if (!this._dividers[T]) {
        return;
      }
      for (var hS = 0, e = this._items.length; hS < e; hS++) {
        if (
          this._items[hS] &&
          this._items[hS]._type == "divider" &&
          this._items[hS]._dIndex == T
        ) {
          this._items.splice(hS, 1);
          e--;
        }
        if (
          this._items[hS] &&
          this._items[hS]._type == "divider" &&
          this._items[hS]._dIndex > T
        ) {
          this._items[hS]._dIndex--;
        }
      }
      this._dividers.splice(T, 1);
    },
    getDom: function() {
      return this._container;
    },
    show: function() {
      if (this._isOpen == true) {
        return;
      }
      this._isOpen = true;
    },
    hide: function() {
      if (this._isOpen == false) {
        return;
      }
      this._isOpen = false;
    },
    setCursor: function(e) {
      if (!e) {
        return;
      }
      this._opts.cursor = e;
    },
    getItem: function(e) {
      return this._rItems[e];
    },
    enable: function() {
      this._enable = true;
    },
    disable: function() {
      this._enable = false;
    },
  });
  function fz(T, hS, i) {
    if (!T || !hS || typeof hS != "function") {
      return;
    }
    ee.call(this);
    this._opts = { width: 100, id: "" };
    i = i || {};
    this._opts.width = i.width * 1 ? i.width : 100;
    this._opts.id = i.id ? i.id : "";
    this._text = T + "";
    this._callback = hS;
    this._map = null;
    this._type = "menuitem";
    this._contextmenu = null;
    this._container = null;
    this._enabled = true;
    var e = this;
    eb.load("menu", function() {
      e._draw();
    });
  }
  fz.inherits(ee, "MenuItem");
  D.extend(fz.prototype, {
    initialize: function(e, i) {
      this._map = e;
      this._contextmenu = i;
    },
    remove: function() {
      this._contextmenu = null;
      this._map = null;
    },
    setText: function(e) {
      if (!e) {
        return;
      }
      this._text = e + "";
    },
    getDom: function() {
      return this._container;
    },
    enable: function() {
      this._enabled = true;
    },
    disable: function() {
      this._enabled = false;
    },
  });
  function dT(e, i) {
    this.setSouthWest(e);
    this.setNorthEast(i);
  }
  D.extend(dT.prototype, {
    isEmpty: function() {
      return this.sw === null && this.ne === null;
    },
    equals: function(e) {
      if (!e || e.isEmpty() || this.isEmpty()) {
        return false;
      }
      return this.sw.equals(e.sw) && this.ne.equals(e.ne);
    },
    containsBounds: function(e) {
      if (!e || e.isEmpty() || this.isEmpty()) {
        return false;
      }
      return (
        e.sw.lng > this.sw.lng &&
        e.ne.lng < this.ne.lng &&
        e.sw.lat > this.sw.lat &&
        e.ne.lat < this.ne.lat
      );
    },
    getCenter: function() {
      if (this.isEmpty()) {
        return null;
      }
      return new ht(
        (this.sw.lng + this.ne.lng) / 2,
        (this.sw.lat + this.ne.lat) / 2
      );
    },
    intersects: function(T) {
      if (!T || T.isEmpty() || this.isEmpty()) {
        return null;
      }
      if (
        Math.max(T.sw.lng, T.ne.lng) < Math.min(this.sw.lng, this.ne.lng) ||
        Math.min(T.sw.lng, T.ne.lng) > Math.max(this.sw.lng, this.ne.lng) ||
        Math.max(T.sw.lat, T.ne.lat) < Math.min(this.sw.lat, this.ne.lat) ||
        Math.min(T.sw.lat, T.ne.lat) > Math.max(this.sw.lat, this.ne.lat)
      ) {
        return null;
      }
      var hT = Math.max(this.sw.lng, T.sw.lng);
      var i = Math.min(this.ne.lng, T.ne.lng);
      var hS = Math.max(this.sw.lat, T.sw.lat);
      var e = Math.min(this.ne.lat, T.ne.lat);
      return new dT(new ht(hT, hS), new ht(i, e));
    },
    setMinMax: function() {
      this.minX = this.sw ? this.sw.lng : null;
      this.minY = this.sw ? this.sw.lat : null;
      this.maxX = this.ne ? this.ne.lng : null;
      this.maxY = this.ne ? this.ne.lat : null;
    },
    containsPoint: function(e) {
      if (!e) {
        return;
      }
      return (
        e.lng >= this.sw.lng &&
        e.lng <= this.ne.lng &&
        e.lat >= this.sw.lat &&
        e.lat <= this.ne.lat
      );
    },
    extend: function(e) {
      if (!e) {
        return;
      }
      var i = e.lng;
      var T = e.lat;
      if (!this.sw) {
        this.sw = e.clone();
      }
      if (!this.ne) {
        this.ne = e.clone();
      }
      if (this.sw.lng > i) {
        this.sw.lng = i;
      }
      if (this.ne.lng < i) {
        this.ne.lng = i;
      }
      if (this.sw.lat > T) {
        this.sw.lat = T;
      }
      if (this.ne.lat < T) {
        this.ne.lat = T;
      }
    },
    getMin: function() {
      return this.sw;
    },
    getMax: function() {
      return this.ne;
    },
    getSouthWest: function() {
      return this.sw;
    },
    getNorthEast: function() {
      return this.ne;
    },
    setSouthWest: function(e) {
      this.sw = e ? e.clone() : null;
    },
    setNorthEast: function(e) {
      this.ne = e ? e.clone() : null;
    },
    clone: function() {
      return new dT(this.sw, this.ne);
    },
    toSpan: function() {
      if (this.isEmpty()) {
        return new ea(0, 0);
      }
      return new ea(
        Math.abs(this.ne.lng - this.sw.lng),
        Math.abs(this.ne.lat - this.sw.lat)
      );
    },
    div: function(e) {
      if (!e || e.isEmpty() || this.isEmpty()) {
        return 0;
      }
      return (
        ((this.ne.lng - this.sw.lng) * (this.ne.lat - this.sw.lat)) /
        ((e.ne.lng - e.sw.lng) * (e.ne.lat - e.sw.lat))
      );
    },
    makeNormalizedPoint: function(e) {
      this.normalizedTopLeft = this.pointTopLeft.clone();
      this.normalizedTopRight = this.pointTopRight.clone();
      this.normalizedBottomRight = this.pointBottomRight.clone();
      this.normalizedBottomLeft = this.pointBottomLeft.clone();
      while (e < 0) {
        e += 360;
      }
      e = e % 360;
      if ((e >= 0 && e < 90) || (e >= 270 && e < 360)) {
        if (this.normalizedTopRight.lng < this.normalizedTopLeft.lng) {
          this.normalizedTopRight.lng += c9.WORLD_SIZE_MC;
        }
        if (this.normalizedBottomRight.lng < this.normalizedBottomLeft.lng) {
          this.normalizedBottomRight.lng += c9.WORLD_SIZE_MC;
        }
      } else {
        if (this.normalizedTopLeft.lng < this.normalizedTopRight.lng) {
          this.normalizedTopLeft.lng += c9.WORLD_SIZE_MC;
        }
        if (this.normalizedBottomLeft.lng < this.normalizedBottomRight.lng) {
          this.normalizedBottomLeft.lng += c9.WORLD_SIZE_MC;
        }
      }
    },
    toString: function() {
      return "Bounds";
    },
  });
  function ht(e, i) {
    if (isNaN(e)) {
      e = g2(e);
      e = isNaN(e) ? 0 : e;
    }
    if (typeof e === "string") {
      e = parseFloat(e);
    }
    if (isNaN(i)) {
      i = g2(i);
      i = isNaN(i) ? 0 : i;
    }
    if (typeof i === "string") {
      i = parseFloat(i);
    }
    this.lng = e;
    this.lat = i;
  }
  ht.prototype.equals = function(i) {
    if (!i) {
      return false;
    }
    var hS = Math.abs(this.lat - i.lat);
    var T = Math.abs(this.lng - i.lng);
    var e = 1e-8;
    if (hS < e && T < e) {
      return true;
    }
    return false;
  };
  ht.prototype.clone = function() {
    return new ht(this.lng, this.lat);
  };
  ht.prototype.add = function(e) {
    return new ht(this.lng + e.lng, this.lat + e.lat);
  };
  ht.prototype.sub = function(e) {
    return new ht(this.lng - e.lng, this.lat - e.lat);
  };
  ht.prototype.mult = function(e) {
    return new ht(this.lng * e, this.lat * e);
  };
  ht.prototype.div = function(e) {
    return new ht(this.lng / e, this.lat / e);
  };
  ht.prototype.mag = function() {
    return Math.sqrt(this.lng * this.lng + this.lat * this.lat);
  };
  ht.prototype.toString = function() {
    return "Point";
  };
  function eo() {}
  D.extend(eo, {
    EARTHRADIUS: 6370996.81,
    MCBAND: [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
    LLBAND: [86, 60, 45, 30, 15, 0],
    MC2LL: [
      [
        1.410526172116255e-8,
        0.00000898305509648872,
        -1.9939833816331,
        200.9824383106796,
        -187.2403703815547,
        91.6087516669843,
        -23.38765649603339,
        2.57121317296198,
        -0.03801003308653,
        17337981.2,
      ],
      [
        -7.435856389565537e-9,
        0.000008983055097726239,
        -0.78625201886289,
        96.32687599759846,
        -1.85204757529826,
        -59.36935905485877,
        47.40033549296737,
        -16.50741931063887,
        2.28786674699375,
        10260144.86,
      ],
      [
        -3.030883460898826e-8,
        0.00000898305509983578,
        0.30071316287616,
        59.74293618442277,
        7.357984074871,
        -25.38371002664745,
        13.45380521110908,
        -3.29883767235584,
        0.32710905363475,
        6856817.37,
      ],
      [
        -1.981981304930552e-8,
        0.000008983055099779535,
        0.03278182852591,
        40.31678527705744,
        0.65659298677277,
        -4.44255534477492,
        0.85341911805263,
        0.12923347998204,
        -0.04625736007561,
        4482777.06,
      ],
      [
        3.09191371068437e-9,
        0.000008983055096812155,
        0.00006995724062,
        23.10934304144901,
        -0.00023663490511,
        -0.6321817810242,
        -0.00663494467273,
        0.03430082397953,
        -0.00466043876332,
        2555164.4,
      ],
      [
        2.890871144776878e-9,
        0.000008983055095805407,
        -3.068298e-8,
        7.47137025468032,
        -0.00000353937994,
        -0.02145144861037,
        -0.00001234426596,
        0.00010322952773,
        -0.00000323890364,
        826088.5,
      ],
    ],
    LL2MC: [
      [
        -0.0015702102444,
        111320.7020616939,
        1704480524535203,
        -10338987376042340,
        26112667856603880,
        -35149669176653700,
        26595700718403920,
        -10725012454188240,
        1800819912950474,
        82.5,
      ],
      [
        0.0008277824516172526,
        111320.7020463578,
        647795574.6671607,
        -4082003173.641316,
        10774905663.51142,
        -15171875531.51559,
        12053065338.62167,
        -5124939663.577472,
        913311935.9512032,
        67.5,
      ],
      [
        0.00337398766765,
        111320.7020202162,
        4481351.045890365,
        -23393751.19931662,
        79682215.47186455,
        -115964993.2797253,
        97236711.15602145,
        -43661946.33752821,
        8477230.501135234,
        52.5,
      ],
      [
        0.00220636496208,
        111320.7020209128,
        51751.86112841131,
        3796837.749470245,
        992013.7397791013,
        -1221952.21711287,
        1340652.697009075,
        -620943.6990984312,
        144416.9293806241,
        37.5,
      ],
      [
        -0.0003441963504368392,
        111320.7020576856,
        278.2353980772752,
        2485758.690035394,
        6070.750963243378,
        54821.18345352118,
        9540.606633304236,
        -2710.55326746645,
        1405.483844121726,
        22.5,
      ],
      [
        -0.0003218135878613132,
        111320.7020701615,
        0.00369383431289,
        823725.6402795718,
        0.46104986909093,
        2351.343141331292,
        1.58060784298199,
        8.77738589078284,
        0.37238884252424,
        7.45,
      ],
    ],
    getDistanceByMC: function(hU, hS) {
      if (!hU || !hS) {
        return 0;
      }
      var i;
      var hT;
      var e;
      var T;
      hU = this.convertMC2LL(hU);
      if (!hU) {
        return 0;
      }
      i = dL(hU.lng);
      hT = dL(hU.lat);
      hS = this.convertMC2LL(hS);
      if (!hS) {
        return 0;
      }
      e = dL(hS.lng);
      T = dL(hS.lat);
      return this.getDistance(i, e, hT, T);
    },
    getDistanceByLL: function(hU, hS) {
      if (!hU || !hS) {
        return 0;
      }
      hU.lng = this.getLoop(hU.lng, -180, 180);
      hU.lat = this.getRange(hU.lat, -80, 84);
      hS.lng = this.getLoop(hS.lng, -180, 180);
      hS.lat = this.getRange(hS.lat, -80, 84);
      var i;
      var e;
      var hT;
      var T;
      i = dL(hU.lng);
      hT = dL(hU.lat);
      e = dL(hS.lng);
      T = dL(hS.lat);
      return this.getDistance(i, e, hT, T);
    },
    proximityCovertMC2LL: function(e) {
      if (e === null) {
        return e;
      }
      if (e.lng < 180 && e.lng > -180 && e.lat < 90 && e.lat > -90) {
        return e;
      }
      return this.convertMC2LL(e);
    },
    convertMC2LL: function(e) {
      if (e === null) {
        return e;
      }
      if (!e) {
        return new ht(0, 0);
      }
      var T;
      var hT;
      T = new ht(Math.abs(e.lng), Math.abs(e.lat));
      for (var hS = 0; hS < this.MCBAND.length; hS++) {
        if (T.lat >= this.MCBAND[hS]) {
          hT = this.MC2LL[hS];
          break;
        }
      }
      var hU = this.convertor(e, hT);
      return new c5(hU.lat, hU.lng);
    },
    convertLL2MC: function(hV) {
      if (!hV) {
        return new ht(0, 0);
      }
      var hX = hV.lat;
      var hS = hV.lng;
      hS = this.getLoop(hV.lng, -180, 180);
      hX = fG(hX, -85, 85);
      var hU;
      for (var hT = 0; hT < this.LLBAND.length; hT++) {
        if (hX >= this.LLBAND[hT]) {
          hU = this.LL2MC[hT];
          break;
        }
      }
      if (!hU) {
        for (hT = 0; hT < this.LLBAND.length; hT++) {
          if (hX <= -this.LLBAND[hT]) {
            hU = this.LL2MC[hT];
            break;
          }
        }
      }
      var T = new ht(hS, hX);
      var hW = this.convertor(T, hU);
      var e = new ht(hW.lng, hW.lat);
      e.latLng = new c5(hV.lat, hV.lng);
      return e;
    },
    convertor: function(T, hS) {
      if (!T || !hS) {
        return;
      }
      var e = hS[0] + hS[1] * Math.abs(T.lng);
      var i = Math.abs(T.lat) / hS[9];
      var hT =
        hS[2] +
        hS[3] * i +
        hS[4] * i * i +
        hS[5] * i * i * i +
        hS[6] * i * i * i * i +
        hS[7] * i * i * i * i * i +
        hS[8] * i * i * i * i * i * i;
      e *= T.lng < 0 ? -1 : 1;
      hT *= T.lat < 0 ? -1 : 1;
      return new ht(e, hT);
    },
    getDistance: function(i, e, hS, T) {
      return (
        this.EARTHRADIUS *
        Math.acos(
          Math.sin(hS) * Math.sin(T) +
            Math.cos(hS) * Math.cos(T) * Math.cos(e - i)
        )
      );
    },
    getRange: function(T, i, e) {
      if (i != null) {
        T = Math.max(T, i);
      }
      if (e != null) {
        T = Math.min(T, e);
      }
      return T;
    },
    getLoop: function(T, i, e) {
      while (T > e) {
        T -= e - i;
      }
      while (T < i) {
        T += e - i;
      }
      return T;
    },
  });
  D.extend(eo.prototype, {
    lnglatToMercator: function(e) {
      return eo.convertLL2MC(e);
    },
    lngLatToPoint: function(e) {
      var i = eo.convertLL2MC(e);
      return new ek(i.lng, i.lat);
    },
    mercatorToLnglat: function(e) {
      return eo.convertMC2LL(e);
    },
    pointToLngLat: function(i) {
      var e = new ht(i.x, i.y);
      var T = eo.convertMC2LL(e);
      return new c5(T.lat, T.lng);
    },
    pointToPixel: function(i, hU, hT, hS) {
      if (!i) {
        return;
      }
      i = this.lnglatToMercator(i);
      var T = this.getZoomUnits(hU);
      var e = Math.round((i.lng - hT.lng) / T + hS.width / 2);
      var hV = Math.round((hT.lat - i.lat) / T + hS.height / 2);
      return new ek(e, hV);
    },
    mercatorToPixel: function(hU, hT, hS, T) {
      if (!hU) {
        return;
      }
      var i = this.getZoomUnits(hT);
      var e = Math.round((hU.lng - hS.lng) / i + T.width / 2);
      var hV = Math.round((hS.lat - hU.lat) / i + T.height / 2);
      return new ek(e, hV);
    },
    pixelToPoint: function(hS, hV, hU, hT) {
      if (!hS) {
        return;
      }
      var i = this.getZoomUnits(hV);
      var T = hU.lng + i * (hS.x - hT.width / 2);
      var hW = hU.lat - i * (hS.y - hT.height / 2);
      var e = new ht(T, hW);
      return this.mercatorToLnglat(e);
    },
    getZoomUnits: function(e) {
      return Math.pow(2, 18 - e);
    },
    setCoordType: function(e) {
      this.coordsType = e;
    },
  });
  function c5(i, e) {
    if (i < -90) {
      i = -90;
    } else {
      if (i > 90) {
        i = 90;
      }
    }
    while (e < -180) {
      e += 360;
    }
    while (e > 180) {
      e -= 360;
    }
    e = e || 0;
    i = i || 0;
    ht.call(this, e, i);
  }
  c5.inherits(ht, "LatLng");
  D.extend(c5.prototype, {
    equals: function(e) {
      return this.lat === e.lat && this.lng === e.lng;
    },
    clone: function() {
      return new c5(this.lat, this.lng);
    },
    add: function(e) {
      return new c5(this.lng + e.lng, this.lat + e.lat);
    },
    sub: function(e) {
      return new c5(this.lat - e.lat, this.lng - e.lng);
    },
    mult: function(e) {
      return new c5(this.lng * e, this.lat * e);
    },
    div: function(e) {
      return new c5(this.lng / e, this.lat / e);
    },
    mag: function() {
      return Math.sqrt(this.lng * this.lng + this.lat * this.lat);
    },
    getLngSpan: function(e) {
      var i = this.lng;
      var T = Math.abs(e - i);
      if (T > 180) {
        T = 360 - T;
      }
      return T;
    },
    toString: function() {
      return "LatLng";
    },
  });
  function eH(e, i) {
    if (e && !i) {
      i = e;
    }
    this._sw = this._ne = null;
    this._swLng = this._swLat = null;
    this._neLng = this._neLat = null;
    if (e) {
      this._sw = new c5(e.lat, e.lng);
      this._ne = new c5(i.lat, i.lng);
      this._swLng = e.lng;
      this._swLat = e.lat;
      this._neLng = i.lng;
      this._neLat = i.lat;
    }
  }
  D.extend(eH.prototype, {
    isEmpty: function() {
      return !this._sw || !this._ne;
    },
    equals: function(e) {
      if (this.isEmpty()) {
        return false;
      }
      return (
        this.getSouthWest().equals(e.getSouthWest()) &&
        this.getNorthEast().equals(e.getNorthEast())
      );
    },
    getSouthWest: function() {
      return this._sw;
    },
    getNorthEast: function() {
      return this._ne;
    },
    containsBounds: function(e) {
      if (this.isEmpty() || e.isEmpty()) {
        return false;
      }
      return (
        e._swLng > this._swLng &&
        e._neLng < this._neLng &&
        e._swLat > this._swLat &&
        e._neLat < this._neLat
      );
    },
    getCenter: function() {
      if (this.isEmpty()) {
        return null;
      }
      return new c5(
        (this._swLat + this._neLat) / 2,
        (this._swLng + this._neLng) / 2
      );
    },
    intersects: function(T) {
      if (
        Math.max(T._swLng, T._neLng) < Math.min(this._swLng, this._neLng) ||
        Math.min(T._swLng, T._neLng) > Math.max(this._swLng, this._neLng) ||
        Math.max(T._swLat, T._neLat) < Math.min(this._swLat, this._neLat) ||
        Math.min(T._swLat, T._neLat) > Math.max(this._swLat, this._neLat)
      ) {
        return false;
      }
      var hT = Math.max(this._swLng, T._swLng);
      var i = Math.min(this._neLng, T._neLng);
      var hS = Math.max(this._swLat, T._swLat);
      var e = Math.min(this._neLat, T._neLat);
      this._sw = new c5(hS, hT);
      this._ne = new c5(e, i);
      this._swLng = hT;
      this._swLat = hS;
      this._neLng = i;
      this._neLat = e;
      return true;
    },
    containsPoint: function(e) {
      if (this.isEmpty()) {
        return false;
      }
      return (
        e.lng >= this._swLng &&
        e.lng <= this._neLng &&
        e.lat >= this._swLat &&
        e.lat <= this._neLat
      );
    },
    extend: function(e) {
      var i = e.lng;
      var T = e.lat;
      if (!this._sw) {
        this._sw = new c5(0, 0);
      }
      if (!this._ne) {
        this._ne = new c5(0, 0);
      }
      if (!this._swLng || this._swLng > i) {
        this._sw.lng = this._swLng = i;
      }
      if (!this._neLng || this._neLng < i) {
        this._ne.lng = this._neLng = i;
      }
      if (!this._swLat || this._swLat > T) {
        this._sw.lat = this._swLat = T;
      }
      if (!this._neLat || this._neLat < T) {
        this._ne.lat = this._neLat = T;
      }
    },
    toSpan: function() {
      if (this.isEmpty()) {
        return new c5(0, 0);
      }
      return new c5(
        Math.abs(this._neLat - this._swLat),
        Math.abs(this._neLng - this._swLng)
      );
    },
    union: function(i) {
      if (i.isEmpty()) {
        return false;
      }
      var e = i.getSouthWest();
      var T = i.getNorthEast();
      if (this._swLat > e.lat) {
        this._swLat = e.lat;
      }
      if (this._swLng > e.lng) {
        this._swLng = e.lng;
      }
      if (this._neLat < T.lat) {
        this._neLat = T.lat;
      }
      if (this._neLng < T.lng) {
        this._neLng = T.lng;
      }
      this._sw = new c5(this._swLat, this._swLng);
      this._ne = new c5(this._neLat, this._neLng);
      return true;
    },
    toString: function() {
      return (
        this._swLat +
        ", " +
        this._swLng +
        ", " +
        this._neLat +
        ", " +
        this._neLng
      );
    },
  });
  window.COORDINATES_WGS84 = 1;
  window.COORDINATES_WGS84_MC = 2;
  window.COORDINATES_GCJ02 = 3;
  window.COORDINATES_GCJ02_MC = 4;
  window.COORDINATES_BD09 = 5;
  window.COORDINATES_BD09_MC = 6;
  window.COORDINATES_MAPBAR = 7;
  window.COORDINATES_51 = 8;
  function ay() {}
  ay.inherits(ee, "Convertor");
  D.extend(ay.prototype, {
    translate: function(i, hT, hS, T) {
      hT = hT || 1;
      hS = hS || 5;
      if (i.length > 10) {
        T && T({ status: 25 });
        return;
      }
      var e = e4.apiHost + "/geoconv/v1/?coords=";
      D.each(i, function(hU) {
        e += hU.lng + "," + hU.lat + ";";
      });
      e = e.replace(/;$/gi, "");
      e = e + "&from=" + hT + "&to=" + hS + "&v=3.0&type=webgl&ak=" + gf;
      E.request(e, function(hV) {
        if (hV.status === 0) {
          var hU = [];
          D.each(hV.result, function(hW) {
            hU.push(new ht(hW.x, hW.y));
          });
          delete hV.result;
          hV.points = hU;
        }
        T && T(hV);
      });
    },
  });
  var dV = {
    idle: 0,
    freeze: 1,
    zooming: 2,
    dragging: 3,
    moving: 4,
    readyToDrag: 5,
    readyToPinch: 6,
    pinching: 7,
    stdMapCtrlDrag: 8,
    KEY_LEFT: 37,
    KEY_UP: 38,
    KEY_RIGHT: 39,
    KEY_DOWN: 40,
    arrowOpCodes: { 37: 1, 38: 2, 39: 4, 40: 8 },
  };
  var ei = {
    _map: null,
    _html: "<div class='BMap_opMask' unselectable='on'></div>",
    _maskElement: null,
    _cursor: "default",
    inUse: false,
    show: function(e) {
      if (!this._map) {
        this._map = e;
      }
      this.inUse = true;
      if (!this._maskElement) {
        this._createMask(e);
      }
      this._maskElement.style.display = "block";
    },
    _createMask: function(i) {
      if (!this._map) {
        this._map = i;
      }
      if (!this._map) {
        return;
      }
      var e = (this._maskElement = dJ(this._map.container, this._html));
      D.on(e, "mouseup", function(T) {
        if (T.button == 2) {
          dc(T);
        }
      });
      D.on(e, "contextmenu", dc);
      e.style.display = "none";
    },
    getDrawPoint: function(hS, hV, hT) {
      hS = window.event || hS;
      var i = hS.offsetX || hS.layerX || 0;
      var hU = parseInt(hS.offsetY) || parseInt(hS.layerY) || 0;
      var T = hS.target || hS.srcElement;
      if (T != ei.getDom(this._map) && hV == true) {
        while (T && T != this._map.container) {
          if (
            !(
              T.clientWidth == 0 &&
              T.clientHeight == 0 &&
              T.offsetParent &&
              T.offsetParent.nodeName.toLowerCase() == "td"
            )
          ) {
            i += T.offsetLeft;
            hU += T.offsetTop;
          }
          T = T.offsetParent;
        }
      }
      if (T != ei.getDom(this._map) && T != this._map.container) {
        return;
      }
      if (typeof i === "undefined" || typeof hU === "undefined") {
        return;
      }
      if (isNaN(i) || isNaN(hU)) {
        return;
      }
      if (hT) {
        i = i + hT.x;
        hU = hU + hT.y;
      }
      return this._map.pixelToPointIn(new ek(i, hU));
    },
    hide: function() {
      if (!this._map) {
        return;
      }
      this.inUse = false;
      if (this._maskElement) {
        this._maskElement.style.display = "none";
      }
    },
    getDom: function(e) {
      if (!this._maskElement) {
        this._createMask(e);
      }
      return this._maskElement;
    },
    setCursor: function(e) {
      this._cursor = e || "default";
      if (this._maskElement) {
        this._maskElement.style.cursor = this._cursor;
      }
    },
  };
  function bm() {
    this._type = "overlay";
  }
  bm.inherits(D.BaseClass, "Overlay");
  bm.getZIndex = function(i, e) {
    i = i * 1;
    if (!i) {
      return 0;
    }
    if (e) {
      i = eo.convertMC2LL(new ht(0, i)).lat;
    }
    return (i * -100000) << 1;
  };
  D.extend(bm.prototype, {
    _i: function(e) {
      this._map = e;
      if (!this.domElement && bW(this.initialize)) {
        this.domElement = this.initialize(e);
        if (this.domElement) {
          this.domElement.style.WebkitUserSelect = "none";
        }
      }
      this.draw();
    },
    initialize: function(e) {
      throw "initialize方法未实现";
    },
    draw: function() {
      throw "draw方法未实现";
    },
    remove: function() {
      if (this.domElement && this.domElement.parentNode) {
        this.domElement.parentNode.removeChild(this.domElement);
      }
      this.domElement = null;
      this.dispatchEvent(new bc("onremove"));
    },
    hide: function() {
      this._visible = false;
      D.hide(this.domElement);
    },
    show: function() {
      this._visible = true;
      D.show(this.domElement);
    },
    getMap: function() {
      return this._map;
    },
    dispose: function() {
      D.BaseClass.prototype.decontrol.call(this);
    },
  });
  function cW() {
    D.BaseClass.call(this);
    bm.call(this);
    this._visible = true;
    this._visibleInternal = true;
    this.infoWindow = null;
    this._dblclickTime = 0;
  }
  cW.inherits(bm, "OverlayInternal");
  D.extend(cW.prototype, {
    initialize: function(e) {
      this.map = e;
      D.BaseClass.call(this, this.hashCode);
      return null;
    },
    draw: function() {},
    remove: function() {
      this.decontrol();
      bm.prototype.remove.call(this);
    },
    hide: function() {
      this._visible = false;
    },
    show: function() {
      this._visible = true;
    },
    getDom: function() {
      return this.domElement;
    },
    getContainer: function() {
      return this.domElement;
    },
    setClassName: function() {},
    setConfig: function(i) {
      if (!i) {
        return;
      }
      for (var e in i) {
        if (i.hasOwnProperty(e)) {
          this._config[e] = i[e];
        }
      }
    },
    getPoint: function(T, hS) {
      if (!T) {
        return this.point;
      } else {
        var e = hS ? hS.width : 0;
        var hT = hS ? hS.height : 0;
        if (this.map) {
          var i = this.map.pointToPixelIn(this.point);
          if (this._config && this._config.offset) {
            i.x = i.x + this._config.offset.width + e;
            i.y = i.y + this._config.offset.height + hT;
          } else {
            i.x = i.x + e;
            i.y = i.y + hT;
          }
          return this.map.pixelToPointIn(i);
        }
      }
    },
    setZIndex: function(e) {
      this.zIndex = e;
    },
    isVisible: function() {
      if (!this.domElement) {
        return false;
      }
      return !!this._visible;
    },
    enableMassClear: function() {
      this._config.enableMassClear = true;
    },
    disableMassClear: function() {
      this._config.enableMassClear = false;
    },
    showInternal: function() {
      this._visibleInternal = true;
    },
    hideInternal: function(e) {
      this._visibleInternal = false;
      this._hideInternalReason = e;
    },
  });
  function eY(e) {
    this.map = e;
    this._overlays = {};
    this._overlayArray = [];
    this._customOverlays = [];
    e._overlays = this._overlays;
    e._overlayArray = this._overlayArray;
    e._customOverlays = this._customOverlays;
    this._zoomingOrMoving = false;
    this._init();
  }
  eY.prototype._init = function() {
    if (this.map._renderType !== "webgl") {
      this._createOverlayContainers();
    } else {
      this._createWebGLOverlayContainers();
    }
    this._bind();
  };
  eY.prototype._createOverlayContainers = function() {
    var e = this.map;
    e.temp.overlayDiv = e.overlayDiv = this._createOverlayDiv(e.platform, 200);
    e.temp.overlayDivEx = e.overlayDivEx = this._createOverlayDiv(
      e.platform,
      50
    );
    e._panes.floatPane = this._createOverlayDiv(e.temp.overlayDiv, 800);
    e._panes.markerMouseTarget = this._createOverlayDiv(e.temp.overlayDiv, 700);
    e._panes.floatShadow = this._createOverlayDiv(e.temp.overlayDiv, 600);
    e._panes.labelPane = this._createOverlayDiv(e.temp.overlayDiv, 500);
    e._panes.markerPane = this._createOverlayDiv(e.temp.overlayDiv, 400);
    if (e.isCanvasMap()) {
      e._panes.mapPane = this._createOverlayDiv(e.temp.overlayDivEx, 50);
    } else {
      e._panes.mapPane = this._createOverlayDiv(e.temp.overlayDiv, 200);
    }
  };
  eY.prototype._createWebGLOverlayContainers = function() {
    var e = this.map;
    e.temp.overlayDiv = e.overlayDiv = this._createOverlayDiv(e.platform, 200);
    e._panes.floatPane = this._createOverlayDiv(e.temp.overlayDiv, 800);
    e._panes.markerMouseTarget = this._createOverlayDiv(e.temp.overlayDiv, 700);
    e._panes.floatShadow = this._createOverlayDiv(e.temp.overlayDiv, 600);
    e._panes.labelPane = this._createOverlayDiv(e.temp.overlayDiv, 500);
    e._panes.markerPane = this._createOverlayDiv(e.temp.overlayDiv, 400);
  };
  eY.prototype._createOverlayDiv = function(e, hS) {
    var T = U("div");
    var i = T.style;
    i.position = "absolute";
    i.top = i.left = i.width = i.height = "0";
    i.zIndex = hS;
    e.appendChild(T);
    return T;
  };
  eY.prototype._bind = function() {
    var hT = this.map;
    var hS = this;
    function i(hV) {
      hS.draw(hV);
    }
    if (hT._renderType !== "webgl") {
      hT.addEventListener("load", i);
      hT.addEventListener("moveend", i);
      hT.addEventListener("resize", i);
      hT.addEventListener("zoomend", i);
      hT.addEventListener("zooming_inner", i);
    } else {
      hT.on("update", i);
    }
    hT.addEventListener("zoomend", function(hV) {
      if (this.mapType === "B_EARTH_MAP") {
        if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
          this.temp.overlayDiv.style.display = "none";
          if (this.temp.overlayDivEx) {
            this.temp.overlayDivEx.style.display = "none";
          }
        } else {
          if (this.temp.overlayDiv.style.display === "none") {
            this.temp.overlayDiv.style.display = "";
            if (this.temp.overlayDivEx) {
              this.temp.overlayDivEx.style.display = "";
            }
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
              this.temp.infoWin.redraw();
            }
          }
        }
      }
    });
    hT.addEventListener("oncenterandzoom", function(hV) {
      hS.draw(hV);
      if (this.mapType === "B_EARTH_MAP") {
        if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
          this.temp.overlayDiv.style.display = "none";
          if (this.temp.overlayDivEx) {
            this.temp.overlayDivEx.style.display = "none";
          }
        } else {
          if (this.temp.overlayDiv.style.display === "none") {
            this.temp.overlayDiv.style.display = "";
            if (this.temp.overlayDivEx) {
              this.temp.overlayDivEx.style.display = "";
            }
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
              this.temp.infoWin.redraw();
            }
          }
        }
      }
    });
    hT.addEventListener("maptypechange", function(hV) {
      if (this.mapType === "B_EARTH_MAP") {
        if (this._panes.mapPane) {
          this._panes.mapPane.style.display = "none";
        }
        if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
          this.temp.overlayDiv.style.display = "none";
          if (this.temp.overlayDivEx) {
            this.temp.overlayDivEx.style.display = "none";
          }
        } else {
          if (this.temp.overlayDiv.style.display === "none") {
            this.temp.overlayDiv.style.display = "";
            if (this.temp.overlayDivEx) {
              this.temp.overlayDivEx.style.display = "";
            }
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
              this.temp.infoWin.redraw();
            }
          }
        }
        if (this._panes.markerPane) {
          this._panes.markerPane.style.display = "none";
        }
      } else {
        if (this._panes.mapPane) {
          this._panes.mapPane.style.display = "";
        }
        if (this._panes.markerPane) {
          this._panes.markerPane.style.display = "";
        }
        if (this.temp.overlayDiv.style.display === "none") {
          this.temp.overlayDiv.style.display = "";
          if (this.temp.overlayDivEx) {
            this.temp.overlayDivEx.style.display = "";
          }
          if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
            this.temp.infoWin.redraw();
          }
        }
      }
      hS.draw(hV);
    });
    hT.on("earthstatuschange", function hU(hV) {
      hS.draw(hV);
    });
    hT.addEventListener("addoverlay", function(hZ) {
      var hW = hZ.target;
      if (hW instanceof cW) {
        if (!hS._overlays[hW.hashCode]) {
          hS._overlays[hW.hashCode] = hW;
          hS._overlayArray.push(hW);
        }
      } else {
        var hY = false;
        for (var hX = 0, hV = hS._customOverlays.length; hX < hV; hX++) {
          if (hS._customOverlays[hX] === hW) {
            hY = true;
            break;
          }
        }
        if (!hY) {
          hS._customOverlays.push(hW);
        }
      }
    });
    hT.addEventListener("removeoverlay", function(hY) {
      var hW = hY.target;
      if (hW instanceof cW) {
        delete hS._overlays[hW.hashCode];
        for (var hX = 0; hX < hS._overlayArray.length; hX++) {
          if (hS._overlayArray[hX] === hW) {
            hS._overlayArray.splice(hX, 1);
            break;
          }
        }
      } else {
        for (var hX = 0, hV = hS._customOverlays.length; hX < hV; hX++) {
          if (hS._customOverlays[hX] === hW) {
            hS._customOverlays.splice(hX, 1);
            break;
          }
        }
      }
    });
    hT.addEventListener("clearoverlays", function(hX) {
      this.closeInfoWindow();
      this.closeSimpleInfoWindow();
      for (var hW in hS._overlays) {
        if (hS._overlays[hW]._config.enableMassClear) {
          this.removeOverlay(hS._overlays[hW]);
        }
      }
      for (var hV = hS._customOverlays.length - 1; hV > 0; hV--) {
        if (hS._customOverlays[hV].enableMassClear !== false) {
          this.removeOverlay(hS._customOverlays[hV]);
          hS._customOverlays.splice(hV, 1);
        }
      }
    });
    hT.addEventListener("infowindowopen", function(hW) {
      var hV = this.infoWindow;
      if (hV) {
        D.hide(hV.popDom);
        D.hide(hV.shadowDom);
      }
    });
    function T() {
      if (this.getMapType() === "B_EARTH_MAP" || this._renderType === "webgl") {
        if (hS._zoomingOrMoving === false) {
          this._panes.markerMouseTarget.style.display = "none";
          hS._zoomingOrMoving = true;
        }
      }
    }
    function e(hX) {
      if (this.getMapType() === "B_EARTH_MAP" || this._renderType === "webgl") {
        if (hS._zoomingOrMoving === true) {
          this._panes.markerMouseTarget.style.display = "";
          hS._zoomingOrMoving = false;
          for (var hW = 0; hW < hS._overlayArray.length; hW++) {
            var hV = hS._overlayArray[hW];
            if (hV instanceof ds === true) {
              hV.draw(hX);
            }
          }
        }
      }
    }
    hT.addEventListener("movestart", T);
    hT.addEventListener("moveend", e);
    hT.addEventListener("zoomstart", T);
    hT.addEventListener("zoomend", e);
    hT.addEventListener("animation_start", T);
    hT.addEventListener("animation_end", e);
    hT.addEventListener("displayoptions_changed", function(hV) {
      if (this._displayOptions.overlay === false) {
        this.temp.overlayDiv.style.display = "none";
      } else {
        this.temp.overlayDiv.style.display = "";
      }
    });
  };
  eY.prototype.draw = function(hV) {
    hV = hV || {};
    if (this.map.getMapType() === "B_EARTH_MAP") {
      for (var hT = 0; hT < this._overlayArray.length; hT++) {
        var T = this._overlayArray[hT];
        if (T instanceof x === true) {
          continue;
        }
        if (this._zoomingOrMoving) {
          if (T instanceof ds === true) {
            continue;
          }
        }
        T.draw(hV);
      }
    } else {
      for (var hT = 0, hS = this._overlayArray.length; hT < hS; hT++) {
        var T = this._overlayArray[hT];
        if (this._zoomingOrMoving && T instanceof ds === true) {
          continue;
        }
        T.draw(hV);
      }
    }
    D.each(this._customOverlays, function(e) {
      e.draw(hV);
    });
    if (this.map.temp.infoWin) {
      this.map.temp.infoWin.setPosition(hV.center, hV.zoom);
    }
    if (
      this.map.getMapType() !== "B_EARTH_MAP" &&
      this.map._renderType !== "webgl"
    ) {
      if (bp.DrawerSelector) {
        var hU = bp.DrawerSelector.getDrawer(this.map);
        hU.setPalette();
      }
    }
  };
  bp.register(function(e) {
    e._overlayMgr = new eY(e);
  });
  function x(e) {
    cW.call(this);
    this._config = {
      strokeColor: "#000",
      strokeWeight: 2,
      strokeOpacity: 1,
      strokeStyle: "solid",
      dashArray: null,
      strokeLineCap: "round",
      strokeLineJoin: "round",
      enableMassClear: true,
      getParseTolerance: null,
      getParseCacheIndex: null,
      enableParse: true,
      enableEditing: false,
      mouseOverTolerance: 5,
      geodesic: false,
      clip: true,
      texture: null,
      textureSize: null,
      textureZoomWithMap: false,
      textureRepeat: true,
    };
    this.setConfig(e);
    if (this._config.strokeOpacity < 0 || this._config.strokeOpacity > 1) {
      this._config.strokeOpacity = 1;
    }
    if (this._config.fillOpacity < 0 || this._config.fillOpacity > 1) {
      this._config.fillOpacity = 1;
    }
    if (
      this._config.strokeStyle !== "solid" &&
      this._config.strokeStyle !== "dashed" &&
      this._config.strokeStyle !== "dotted"
    ) {
      this._config.strokeStyle = "solid";
    }
    this.domElement = null;
    this._bounds = new dT();
    this.points = [];
    this.greatCirclePoints = [];
    this._parseCache = [];
    this._holesCache = [];
    this._parseCacheGL = [];
    this._parseCacheGLRaw = [];
    this._areaCacheGL = [];
    this._strokeStyleInfoForGL = [[]];
    this._fillStyleInfoForGL = "";
    this.vertexMarkers = [];
    this._temp = {};
  }
  x.JOININDEX = { miter: 0, round: 1, bevel: 2 };
  x.CAPINDEX = { round: 0, butt: 1, square: 2 };
  x.inherits(cW, "Graph");
  x.getGraphPoints = function(i) {
    var e = [];
    if (!i || i.length === 0) {
      return e;
    }
    if (typeof i === "string") {
      var T = i.split(";");
      D.each(T, function(hT) {
        var hS = hT.split(",");
        e.push(new ht(hS[0], hS[1]));
      });
    }
    if (i.constructor === Array && i.length > 0) {
      e = i;
    }
    return e;
  };
  x.parseTolerance = {
    0: [0.09, 0.005, 0.0001, 0.00001],
    1: [9000, 500, 20, 1],
  };
  D.extend(x.prototype, {
    initialize: function(e) {
      this.map = e;
      return null;
    },
    draw: function() {},
    setPoints: function(e) {
      this._clearCache();
      this.points = x.getGraphPoints(e).slice(0);
      this._calcBounds();
    },
    setPathIn: function(e) {
      this.setPoints(e);
    },
    _calcBounds: function() {
      if (!this.points) {
        return;
      }
      var e = this;
      e._bounds = new dT();
      if (!this.hasMultipleParts) {
        D.each(this.points, function(i) {
          e._bounds.extend(i);
        });
      } else {
        D.each(this.points, function(i) {
          D.each(i, function(T) {
            e._bounds.extend(T);
          });
        });
      }
    },
    getPoints: function() {
      return this.points;
    },
    getPathIn: function() {
      return this.points;
    },
    setPointAt: function(i, e) {
      if (!e || !this.points[i]) {
        return;
      }
      this._clearCache();
      this.points[i] = new ht(e.lng, e.lat);
      this._calcBounds();
    },
    setPositionAt: function(i, e) {
      if (!e || !this.points[i]) {
        return;
      }
      var T = eo.convertLL2MC(e);
      this.setPointAt(i, T);
    },
    setOptions: function(i) {
      i = i || {};
      for (var e in i) {
        if (i.hasOwnProperty(e)) {
          this._config[e] = i[e];
        }
      }
    },
    setStrokeColor: function(e) {
      this._config.strokeColor = e;
    },
    getStrokeColor: function() {
      return this._config.strokeColor;
    },
    setStrokeLineCap: function(e) {
      this._config.strokeLineCap = e;
    },
    getStrokeLineCap: function() {
      return this._config.strokeLineCap;
    },
    setStrokeLineJoin: function(e) {
      this._config.strokeLineJoin = e;
    },
    getStrokeLineJoin: function() {
      return this._config.strokeLineJoin;
    },
    setStrokeWeight: function(e) {
      if (e > 0) {
        this._config.strokeWeight = e;
      }
    },
    getStrokeWeight: function() {
      return this._config.strokeWeight;
    },
    setStrokeOpacity: function(e) {
      if (!e || e > 1 || e < 0) {
        return;
      }
      this._config.strokeOpacity = e;
    },
    getStrokeOpacity: function() {
      return this._config.strokeOpacity;
    },
    setFillOpacity: function(e) {
      if (e > 1 || e < 0) {
        return;
      }
      this._config.fillOpacity = e;
    },
    getFillOpacity: function() {
      return this._config.fillOpacity;
    },
    setStrokeStyle: function(e) {
      if (e !== "solid" && e !== "dashed" && e !== "dotted") {
        return;
      }
      this._config.strokeStyle = e;
    },
    getStrokeStyle: function() {
      return this._config.strokeStyle;
    },
    setFillColor: function(e) {
      this._config.fillColor = e || "";
    },
    getFillColor: function() {
      return this._config.fillColor;
    },
    getBoundsIn: function() {
      this._bounds.setMinMax();
      return this._bounds;
    },
    getBounds: function() {
      var e = this.getBoundsIn();
      var i = new dT(
        eo.convertMC2LL(e.getSouthWest()),
        eo.convertMC2LL(e.getNorthEast())
      );
      i.setMinMax();
      return i;
    },
    remove: function() {
      if (this.map) {
        this.map.removeEventListener("onmousemove", this._graphMouseEvent);
        this.map.removeEventListener("onclick", this._graphClickEvent);
      }
      cW.prototype.remove.call(this);
      this._clearCache();
      var e = new bc("onlineupdate");
      e.action = "remove";
      e.overlay = this;
      this.fire(e);
    },
    enableEditing: function() {
      if (this.points.length < 2) {
        return;
      }
      this._config.enableEditing = true;
      var e = this;
      eb.load(
        "poly",
        function() {
          e.addVertexs();
        },
        true
      );
    },
    disableEditing: function() {
      this._config.enableEditing = false;
      var e = this;
      eb.load(
        "poly",
        function() {
          e.clearVertexs();
        },
        true
      );
    },
    getLength: function() {
      if (typeof this._length === "number") {
        return this._length;
      }
      if (typeof this._config.totalLength === "number") {
        this._length = this._config.totalLength;
        return this._length;
      }
      var T = 0;
      if (this.points.length <= 1) {
        this._length = 0;
        return T;
      }
      for (var e = 0; e < this.points.length - 1; e++) {
        T += bQ(this.points[e], this.points[e + 1]);
      }
      this._length = T;
      return T;
    },
    getParsedPoints: function() {
      var e = this._simplification(this.points);
      if (this.hasMultipleParts) {
        return e;
      }
      return [e];
    },
    _simplification: function(hW) {
      var e = this.map;
      var hV = this.getParseCacheIndex(e.getZoom());
      var hY;
      if (this._parseCache[hV]) {
        hY = this._parseCache[hV];
      } else {
        var hT = hW;
        if (this.greatCirclePoints.length > 0) {
          hT = this.greatCirclePoints;
        }
        var hU = this.getParseTolerance(e.getZoom(), e.config.coordType);
        if (!this.hasMultipleParts) {
          var hX = hG(hT, hU);
        } else {
          var hX = [];
          for (var T = 0; T < hT.length; T++) {
            var hS = hG(hT[T], hU);
            hX.push(hS);
          }
        }
        hY = this._parseCache[hV] = hX;
      }
      return hY;
    },
    _clearCache: function() {
      this._length = null;
      this._parseCache.length = 0;
      this._parseCacheGL.length = 0;
      this._parseCacheGLRaw.length = 0;
      this._areaCacheGL.length = 0;
    },
    canRenderDataBeMerged: function() {
      var e = this._config;
      if (e.texture) {
        return false;
      }
      return true;
    },
  });
  if (D.Browser.ie && document.namespaces && !document.namespaces.olv) {
    document.namespaces.add("olv", "urn:schemas-microsoft-com:vml");
  }
  function hc(hU, hS, T) {
    if (!hU || !hS) {
      return;
    }
    this.imageUrl = null;
    this.imageDom = null;
    if (typeof hU === "string") {
      this.imageUrl = hU;
    } else {
      this.imageDom = hU;
      if (!this.imageDom.id) {
        this.imageDom.id = bp.getGUID("icon_dom_");
      }
    }
    this.size = hS;
    var hT = new ea(Math.floor(hS.width / 2), Math.floor(hS.height / 2));
    var i = { offset: hT, imageOffset: new ea(0, 0) };
    T = T || {};
    for (var e in T) {
      i[e] = T[e];
    }
    if (T.anchor) {
      i.offset = T.anchor;
    }
    this.anchor = this.offset = i.offset;
    this.imageOffset = i.imageOffset;
    this.infoWindowOffset = T.infoWindowOffset || this.offset;
    this.printImageUrl = T.printImageUrl || "";
    this.imageSize = T.imageSize || this.size;
    this.srcSetObject = {};
    this.setImageSrcset(T.srcset || T.srcSet);
  }
  hc.prototype.setImageUrl = function(e) {
    if (!e) {
      return;
    }
    this.imageUrl = e;
    this._renderData = null;
  };
  hc.prototype.getCurrentImageUrl = function() {
    if (window.devicePixelRatio > 1 && this.srcSetObject["2x"]) {
      return this.srcSetObject["2x"];
    }
    return this.imageUrl;
  };
  hc.prototype.setPrintImageUrl = function(e) {
    if (!e) {
      return;
    }
    this.printImageUrl = e;
  };
  hc.prototype.setSize = function(e) {
    if (!e) {
      return;
    }
    this.size = new ea(e.width, e.height);
    this._renderData = null;
  };
  hc.prototype.setOffset = function(e) {
    if (!e) {
      return;
    }
    this.anchor = this.offset = new ea(e.width, e.height);
    this._renderData = null;
  };
  hc.prototype.setAnchor = function(e) {
    this.setOffset(e);
  };
  hc.prototype.setImageOffset = function(e) {
    if (!e) {
      return;
    }
    this.imageOffset = new ea(e.width, e.height);
    this._renderData = null;
  };
  hc.prototype.setInfoWindowOffset = function(e) {
    if (!e) {
      return;
    }
    this.infoWindowOffset = new ea(e.width, e.height);
  };
  hc.prototype.setImageSize = function(e) {
    if (!e) {
      return;
    }
    this.imageSize = new ea(e.width, e.height);
  };
  hc.prototype.setImageSrcset = function(T) {
    var e = "";
    if (!T) {
      return;
    }
    for (var i in T) {
      if (T.hasOwnProperty(i)) {
        this.srcSetObject[i] = T[i];
        e = T[i] + " " + i + ",";
      }
    }
    this.srcSet = e;
  };
  hc.prototype.toString = function() {
    return "Icon";
  };
  hc.prototype.generateRenderData = function(hU) {
    var T = this.offset;
    var e = this.size;
    var hW = this.imageOffset;
    var hV = [];
    hV.push(-T.width, T.height - e.height, 0);
    hV.push(e.width - T.width, T.height - e.height, 0);
    hV.push(e.width - T.width, T.height, 0);
    hV.push(-T.width, T.height - e.height, 0);
    hV.push(e.width - T.width, T.height, 0);
    hV.push(-T.width, T.height, 0);
    if (hU !== 0) {
      for (var hT = 0; hT < hV.length; hT += 3) {
        var hS = vec2.fromValues(hV[hT], hV[hT + 1]);
        vec2.rotate(hS, hS, [0, 0], dL(-hU));
        hV[hT] = hS[0];
        hV[hT + 1] = hS[1];
      }
    }
    return { vertex: hV };
  };
  hc.prototype.getRenderData = function(e) {
    this._renderData = this.generateRenderData(e);
    return this._renderData;
  };
  function ao(T, i) {
    D.BaseClass.call(this);
    this.content = T;
    this.map = null;
    this._config = {
      width: 0,
      height: 0,
      maxWidth: 600,
      offset: new ea(0, 0),
      title: "",
      maxContent: "",
      enableMaximize: false,
      enableAutoPan: true,
      enableCloseOnClick: true,
      margin: [10, 10, 40, 10],
      collisions: [
        [10, 10],
        [10, 10],
        [10, 10],
        [10, 10],
      ],
      ifMaxScene: false,
      onClosing: function() {
        return true;
      },
    };
    this.setConfig(i);
    if (this._config.width !== 0) {
      if (this._config.width < 220) {
        this._config.width = 220;
      }
      if (this._config.width > 730) {
        this._config.width = 730;
      }
    }
    if (this._config.height !== 0) {
      if (this._config.height < 60) {
        this._config.height = 60;
      }
      if (this._config.height > 650) {
        this._config.height = 650;
      }
    }
    if (this._config.maxWidth !== 0) {
      if (this._config.maxWidth < 220) {
        this._config.maxWidth = 220;
      }
      if (this._config.maxWidth > 730) {
        this._config.maxWidth = 730;
      }
    }
    this.isWinMax = false;
    this.IMG_PATH = e4.imgPath;
    this.overlay = null;
    var e = this;
    eb.load("infowindow", function() {
      e._draw();
    });
  }
  ao.inherits(D.BaseClass, "InfoWindow");
  D.extend(ao.prototype, {
    setWidth: function(e) {
      e = e * 1;
      if ((!e && e !== 0) || isNaN(e) || e < 0) {
        return;
      }
      if (e !== 0) {
        if (e < 220) {
          e = 220;
        }
        if (e > 730) {
          e = 730;
        }
      }
      this._config.width = e;
    },
    setHeight: function(e) {
      e = e * 1;
      if ((!e && e !== 0) || isNaN(e) || e < 0) {
        return;
      }
      if (e !== 0) {
        if (e < 60) {
          e = 60;
        }
        if (e > 650) {
          e = 650;
        }
      }
      this._config.height = e;
    },
    setMaxWidth: function(e) {
      e = e * 1;
      if ((!e && e !== 0) || isNaN(e) || e < 0) {
        return;
      }
      if (e !== 0) {
        if (e < 220) {
          e = 220;
        }
        if (e > 730) {
          e = 730;
        }
      }
      this._config.maxWidth = e;
    },
    setTitle: function(e) {
      this._config.title = e || "";
    },
    setContent: function(e) {
      this.content = e || "";
    },
    getContent: function() {
      return this.content;
    },
    setMaxContent: function(e) {
      this._config.maxContent = e || "";
    },
    redraw: function() {},
    enableAutoPan: function() {
      this._config.enableAutoPan = true;
    },
    disableAutoPan: function() {
      this._config.enableAutoPan = false;
    },
    enableCloseOnClick: function() {
      this._config.enableCloseOnClick = true;
    },
    disableCloseOnClick: function() {
      this._config.enableCloseOnClick = false;
    },
    enableMaximize: function() {
      this._config.enableMaximize = true;
    },
    disableMaximize: function() {
      this._config.enableMaximize = false;
    },
    show: function() {
      this._visible = true;
    },
    hide: function() {
      this._visible = false;
    },
    close: function() {
      this.hide();
    },
    dispose: function() {
      D.BaseClass.prototype.decontrol.call(this);
    },
    maximize: function() {
      this.isWinMax = true;
    },
    restore: function() {
      this.isWinMax = false;
    },
    setConfig: function(i) {
      if (!i) {
        return;
      }
      for (var e in i) {
        if (typeof this._config[e] === typeof i[e]) {
          this._config[e] = i[e];
        }
      }
    },
    isVisible: function() {
      return this.isOpen();
    },
    isOpen: function() {
      return false;
    },
    getPointIn: function() {
      if (this.overlay && this.overlay.getPoint) {
        return this.overlay.getPoint();
      }
    },
    getTitle: function() {
      return this._config.title || "";
    },
    getPosition: function() {
      return this.latLng;
      var e = this.getPointIn();
      return eo.convertMC2LL(e);
    },
    getPoint: function() {
      var e = this.getPointIn();
      return eo.convertMC2LL(e);
    },
    getOffset: function() {
      return this._config.offset;
    },
    dispose: function() {
      D.BaseClass.prototype.decontrol.call(this);
    },
    toString: function() {
      return "InfoWindow";
    },
  });
  c9.prototype.openInfoWindow = function(T, e) {
    T.latLng = new c5(e.lat, e.lng);
    var i = eo.convertLL2MC(e);
    this.openInfoWindowIn(T, i);
  };
  c9.prototype.closeInfoWindow = function() {
    var e = this.temp.infoWin || this.temp._infoWin;
    if (e && e.overlay) {
      e.overlay.closeInfoWindow();
    }
  };
  c9.prototype.openInfoWindowIn = function(hS, e) {
    if (
      !hS ||
      hS.toString() !== "InfoWindow" ||
      !e ||
      e.toString() !== "Point"
    ) {
      return;
    }
    var i = this.temp;
    if (!i.marker) {
      var T = new hc(e4.imgPath + "blank.gif", { width: 1, height: 1 });
      i.marker = new ds(e, {
        icon: T,
        width: 1,
        height: 1,
        offset: new ea(0, 0),
        infoWindowOffset: new ea(0, 0),
        clickable: false,
      });
      i.marker._fromMap = 1;
    } else {
      i.marker.setPoint(e);
    }
    this.addOverlay(i.marker);
    i.marker.show();
    i.marker.openInfoWindow(hS);
  };
  cW.prototype.openInfoWindow = function(e) {
    if (this.map) {
      this.map.closeInfoWindow();
      e._visible = true;
      this.map.temp._infoWin = e;
      e.overlay = this;
      D.BaseClass.call(e, e.hashCode);
    }
  };
  cW.prototype.closeInfoWindow = function() {
    if (this.map && this.map.temp._infoWin) {
      this.map.temp._infoWin._visible = false;
      this.map.temp._infoWin.decontrol();
      this.map.temp._infoWin = null;
    }
  };
  function aO(T, i) {
    cW.call(this);
    this.content = T;
    this.map = null;
    this.domElement = null;
    this._config = {
      width: 0,
      offset: new ea(0, 0),
      styles: {
        backgroundColor: "#fff",
        border: "1px solid #f00",
        padding: "1px",
        whiteSpace: "nowrap",
        fontSize: "12px",
        zIndex: "80",
        MozUserSelect: "none",
      },
      point: null,
      enableMassClear: true,
    };
    i = i || {};
    this.setConfig(i);
    if (this._config.width < 0) {
      this._config.width = 0;
    }
    this.point = this._config.point;
    var e = this;
    eb.load("marker", function() {
      e._draw();
    });
  }
  aO.inherits(cW, "Label");
  D.extend(aO.prototype, {
    setPoint: function(e) {
      if (e && e.toString() === "Point" && !this.getMarker()) {
        this.point = this._config.point = new ht(e.lng, e.lat);
      }
    },
    setContent: function(e) {
      this.content = e;
    },
    getContent: function(e) {
      return this.content;
    },
    setOpacity: function(e) {
      if (e >= 0 && e <= 1) {
        this._config.opacity = e;
      }
    },
    setOffset: function(e) {
      if (!e || e.toString() !== "Size") {
        return;
      }
      this._config.offset = new ea(e.width, e.height);
    },
    getOffset: function() {
      return this._config.offset;
    },
    setStyle: function(e) {
      e = e || {};
      this._config.styles = D.extend(this._config.styles, e);
    },
    setStyles: function(e) {
      this.setStyle(e);
    },
    setTitle: function(e) {
      this._config.title = e || "";
    },
    getTitle: function() {
      return this._config.title;
    },
    setMarker: function(e) {
      if (this._marker && this._marker !== e) {
        this._marker._config.label = null;
      }
      this._marker = e;
      if (e) {
        this.point = this._config.point = e.getPoint();
      } else {
        this.point = this._config.point = null;
      }
    },
    getMarker: function() {
      return this._marker || null;
    },
    getPositionIn: function() {
      return this.getPoint();
    },
  });
  function fQ(T, i) {
    var hS = {};
    for (var e in i) {
      if (i.hasOwnProperty(e)) {
        if (e === "position") {
          hS.point = eo.convertLL2MC(i[e]);
          this.latLng = new c5(i[e]["lat"], i[e]["lng"]);
        } else {
          hS[e] = i[e];
        }
      }
    }
    aO.call(this, T, hS);
  }
  fQ.inherits(aO, "LabelOut");
  D.extend(fQ.prototype, {
    toString: function() {
      return "Label";
    },
    setPosition: function(e) {
      this.latLng = new c5(e.lat, e.lng);
      var i = eo.convertLL2MC(e);
      this.setPoint(i);
    },
    getPosition: function() {
      return this.latLng;
      var e = this.getPositionIn();
      return eo.convertMC2LL(e);
    },
  });
  window.BMAP_ANIMATION_DROP = 1;
  window.BMAP_ANIMATION_BOUNCE = 2;
  function ds(e, i) {
    cW.call(this);
    i = i || {};
    this.point = e;
    this._rotation = 0;
    this.map = null;
    this._animation = null;
    this.domElement = null;
    this.iconDom = null;
    this.infoWindowDom = null;
    this.siblingElement = null;
    this.textureCoord = null;
    this.textureCoordGLMap = null;
    this.collisionDetectionFailed = false;
    this._config = {
      offset: new ea(0, 0),
      opacity: 1,
      icon: null,
      title: "",
      infoWindow: null,
      label: null,
      baseZIndex: 0,
      clickable: true,
      zIndexFixed: false,
      isTop: false,
      enableMassClear: true,
      enableDragging: false,
      raiseOnDrag: false,
      restrictDraggingArea: false,
      startAnimation: "",
      enableCollisionDetection: false,
      rank: 0,
      enableDraggingMap: false,
    };
    this.setConfig(i);
    if (!i.icon) {
      this._config.icon = new hc(
        e4.imgPath + "marker_red.png",
        new ea(23, 25),
        { offset: new ea(10, 25), infoWindowOffset: new ea(10, 0) }
      );
    }
    this._isDragging = false;
    var T = this;
    eb.load("marker", function() {
      T._draw();
    });
  }
  ds.TOP_ZINDEX = bm.getZIndex(-90) + 1000000;
  ds.DRAG_ZINDEX = ds.TOP_ZINDEX + 1000000;
  ds._injectMethond = function(e) {
    D.extend(ds.prototype, e);
  };
  ds.inherits(cW, "Marker");
  D.extend(ds.prototype, {
    toString: function() {
      return "Marker";
    },
    setIcon: function(e) {
      if (e) {
        this._config.icon = e;
        this.textureCoord = this.textureCoordGLMap = null;
      }
    },
    getIcon: function() {
      return this._config.icon;
    },
    setLabel: function(e) {
      if (!(e instanceof aO)) {
        return;
      }
      this._config.label = e;
      e._config.enableMassClear = this._config.enableMassClear;
      e.setPoint(this.point);
    },
    getLabel: function() {
      return this._config.label;
    },
    enableDragging: function() {
      this._config.enableDragging = true;
    },
    disableDragging: function() {
      this._config.enableDragging = false;
    },
    setPoint: function(e) {
      if (e) {
        this.point = this._config.point = new ht(e.lng, e.lat);
        this.latLng = eo.convertMC2LL(e);
      }
    },
    setPositionIn: function(e) {
      this.setPoint(e);
    },
    getPositionIn: function() {
      return this.getPoint();
    },
    setTop: function(i, e) {
      this._config.isTop = !!i;
      if (i) {
        this._addi = e || 0;
      }
    },
    setTitle: function(e) {
      this._config.title = e || "";
    },
    getTitle: function() {
      return this._config.title;
    },
    setOffset: function(e) {
      if (e) {
        this._config.offset = e;
      }
    },
    getOffset: function() {
      return this._config.offset;
    },
    setAnimation: function(e) {
      this._animation = e;
    },
    setRank: function(e) {
      this._config.rank = e;
    },
    getRank: function() {
      return this._config.rank;
    },
    setRotation: function(e) {
      while (e < 0) {
        e += 360;
      }
      this._rotation = e % 360;
    },
    getRotation: function() {
      return this._rotation;
    },
  });
  function aD(e, T) {
    this.latLng = new c5(e.lat, e.lng);
    var i = eo.convertLL2MC(e);
    ds.call(this, i, T);
  }
  aD.inherits(ds, "MarkerOut");
  D.extend(aD.prototype, {
    toString: function() {
      return "Marker";
    },
    setPosition: function(e) {
      this.latLng = new c5(e.lat, e.lng);
      var i = eo.convertLL2MC(e);
      this.setPositionIn(i);
    },
    getPosition: function() {
      return this.latLng;
      var e = this.getPositionIn();
      return eo.convertMC2LL(e);
    },
  });
  window.BMAP_SHAPE_CIRCLE = 1;
  window.BMAP_SHAPE_RECT = 2;
  function be(i, e, T) {
    cW.call(this, e, T);
    this.domElement = null;
    this.point = i;
    T = T || {};
    this._config = {};
    this._config.height = e || 0;
    this._config.size = typeof T.size === "number" ? T.size : 50;
    this._config.fillOpacity =
      typeof T.fillOpacity === "number" ? T.fillOpacity : 0.8;
    this._config.shape = typeof T.shape === "number" ? T.shape : 1;
    fG(this._config.fillOpacity, 0, 1);
    if (T.fillColor === "") {
      this._config.fillColor = "";
    } else {
      this._config.fillColor = T.fillColor ? T.fillColor : "#f00";
    }
    this._config.icon = T.icon instanceof hc ? T.icon : "";
    this._config.enableMassClear = T.enableMassClear || true;
    var hS = this;
    eb.load("marker", function() {
      hS._draw();
    });
  }
  be.inherits(cW, "Marker3D");
  D.extend(be.prototype, {
    setPoint: function(e) {
      this.point = this._config.point = new ht(e.lng, e.lat);
      this.latLng = eo.convertMC2LL(e);
      var i = new bc("onstatus_change");
      i.overlay = this;
      i.action = "setPoint";
      this.fire(i);
    },
    setPositionIn: function(e) {
      this.setPoint(e);
    },
    getPositionIn: function() {
      return this.getPoint();
    },
    setDomAttribute: function(i, T) {
      var e = new bc("onlineupdate");
      e.overlay = this;
      this.dispatchEvent(e);
    },
  });
  function cw(i, e, hS) {
    this.latLng = new c5(i.lat, i.lng);
    var T = eo.convertLL2MC(i);
    be.call(this, T, e, hS);
  }
  cw.inherits(be, "Marker3d");
  D.extend(cw.prototype, {
    toString: function() {
      return "Marker3D";
    },
    setHeight: function(e) {
      this._config.height = Number(e);
      this.draw();
      var i = new bc("onlineupdate");
      i.overlay = this;
      this.dispatchEvent(i);
    },
    getHeight: function() {
      return this._config.height;
    },
    setFillOpacity: function(e) {
      if (e > 1 || e < 0) {
        return;
      }
      this._config.fillOpacity = e;
      this.setDomAttribute("fillopacity", e);
    },
    getFillOpacity: function() {
      return this._config.fillOpacity;
    },
    setFillColor: function(e) {
      this._config.fillColor = e || "";
      this.setDomAttribute("fillcolor", e);
    },
    getFillColor: function() {
      return this._config.fillColor;
    },
    setIcon: function(i) {
      if (!i || !this.map) {
        return;
      }
      this._config.icon = i;
      if (this._config.icon) {
        var e = this._config.icon.getCurrentImageUrl();
        var hS = i.getCurrentImageUrl() !== e;
        this._config.icon = i;
        this.textureCoord = this.textureCoordGLMap = null;
        this.draw();
        var T = new bc("onstatus_change");
        T.overlay = this;
        T.action = "setIcon";
        T.imageUrlChanged = hS;
        this.fire(T);
      }
    },
    getIcon: function() {
      return this._config.icon;
    },
    setPosition: function(e) {
      this.latLng = new c5(e.lat, e.lng);
      var i = eo.convertLL2MC(e);
      this.setPositionIn(i);
    },
    getPosition: function() {
      var e = this.getPositionIn();
      return eo.convertMC2LL(e);
    },
  });
  function a(T, e) {
    x.call(this, e);
    this._normalizedBounds = new dT();
    this.setPoints(T);
    var i = this;
    eb.load("poly", function() {
      i._draw();
    });
  }
  a.inherits(x, "Polyline");
  D.extend(a.prototype, {
    getBoundsIn: function(e) {
      if (!e) {
        this._bounds.setMinMax();
        return this._bounds;
      }
      this._normalizedBounds.setMinMax();
      return this._normalizedBounds;
    },
    setPoints: function(T) {
      this._clearCache();
      this.points = x.getGraphPoints(T).slice(0);
      if (this._config.geodesic === true) {
        this.greatCirclePoints.length = 0;
        for (var e = 0; e < this.points.length - 1; e++) {
          this.calcGreatCirclePoints(this.points[e], this.points[e + 1]);
        }
      }
      this._calcBounds();
    },
    _calcBounds: function() {
      if (!this.points) {
        return;
      }
      var e = this;
      e._bounds.setNorthEast(null);
      e._bounds.setSouthWest(null);
      if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
        D.each(e.greatCirclePoints, function(i) {
          e._bounds.extend(i);
        });
      } else {
        D.each(e.points, function(i) {
          e._bounds.extend(i);
        });
      }
      e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
      e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
      if (
        e._normalizedBounds.sw.lng < -c9.WORLD_SIZE_MC_HALF ||
        e._normalizedBounds.ne.lng > c9.WORLD_SIZE_MC_HALF
      ) {
        e._normalizedBounds.sw.lng = -c9.WORLD_SIZE_MC_HALF;
        e._normalizedBounds.ne.lng = c9.WORLD_SIZE_MC_HALF;
      }
    },
    calcGreatCirclePoints: function(hS, T) {
      var hU = hS.latLng;
      var hT = T.latLng;
      if (hU.equals(hT)) {
        return;
      }
      var e = eo.getDistance(dL(hU.lng), dL(hU.lat), dL(hT.lng), dL(hT.lat));
      if (e < 250000) {
        return;
      }
      var hY = Math.round(e / 150000);
      var h2 = this.calcAngularDistance(hU, hT);
      this.greatCirclePoints.push(hS);
      var h1 = hU.lng;
      var h0 = hS;
      for (var hV = 0; hV < hY; hV++) {
        var hX = this.calcMiddlePoint(hU, hT, hV / hY, h2);
        var hZ = eo.convertLL2MC(hX);
        var hW = hZ.lng;
        var h3 = bQ(hZ, h0);
        if (h3 > 30037726) {
          if (hZ.lng < h0.lng) {
            hZ.lng += c9.WORLD_SIZE_MC;
          } else {
            hZ.lng -= c9.WORLD_SIZE_MC;
          }
        }
        this.greatCirclePoints.push(hZ);
        h0 = hZ;
      }
      var h3 = bQ(T, h0);
      if (h3 > 30037726) {
        if (T.lng < h0.lng) {
          T.lng += c9.WORLD_SIZE_MC;
        } else {
          T.lng -= c9.WORLD_SIZE_MC;
        }
      }
      this.greatCirclePoints.push(T);
    },
    calcMiddlePoint: function(hZ, hY, h0, h4) {
      var hT = hZ.lat;
      var hS = hY.lat;
      var h3 = hZ.lng;
      var h1 = hY.lng;
      var h5 = dL(hT);
      var h2 = dL(hS);
      var i = dL(h3);
      var e = dL(h1);
      var h7 = Math.sin((1 - h0) * h4) / Math.sin(h4);
      var h6 = Math.sin(h0 * h4) / Math.sin(h4);
      var hW =
        h7 * Math.cos(h5) * Math.cos(i) + h6 * Math.cos(h2) * Math.cos(e);
      var hV =
        h7 * Math.cos(h5) * Math.sin(i) + h6 * Math.cos(h2) * Math.sin(e);
      var hU = h7 * Math.sin(h5) + h6 * Math.sin(h2);
      var T = Math.atan2(hU, Math.sqrt(Math.pow(hW, 2) + Math.pow(hV, 2)));
      var hX = Math.atan2(hV, hW);
      return new ht(df(hX), df(T));
    },
    calcAngularDistance: function(hT, i) {
      var hU = dL(hT.lat);
      var hS = dL(i.lat);
      var T = dL(hT.lng);
      var e = dL(i.lng);
      return Math.acos(
        Math.sin(hU) * Math.sin(hS) +
          Math.cos(hU) * Math.cos(hS) * Math.cos(Math.abs(e - T))
      );
    },
  });
  function al(hT, e) {
    if (!hT || hT.length === 0) {
      return;
    }
    var hS = [];
    for (var T = 0; T < hT.length; T++) {
      hS[T] = eo.convertLL2MC(hT[T]);
    }
    a.call(this, hS, e);
  }
  al.inherits(a, "PolylineOut");
  D.extend(al.prototype, {
    toString: function() {
      return "Polyline";
    },
    setPath: function(hS) {
      if (!hS || hS.length === 0) {
        return;
      }
      var T = [];
      for (var e = 0; e < hS.length; e++) {
        T[e] = eo.convertLL2MC(hS[e]);
      }
      this.setPathIn(T);
    },
    getPath: function() {
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return [];
      }
      var hS = [];
      for (var T = 0; T < e.length; T++) {
        hS[T] = eo.convertMC2LL(e[T]);
      }
      return hS;
    },
    getBounds: function(i) {
      var e = this.getBoundsIn(i);
      var T = new dT(
        eo.convertMC2LL(e.getSouthWest()),
        eo.convertMC2LL(e.getNorthEast())
      );
      return T;
    },
  });
  function eq(T, hS, e) {
    x.call(this, e);
    this._normalizedBounds = new dT();
    this._cps = hS;
    this._path = T;
    this.setPoints(T);
    var i = this;
    eb.load("poly", function() {
      i._draw();
    });
  }
  eq.inherits(a, "BezierCurve");
  D.extend(eq.prototype, {
    getBoundsIn: function(e) {
      if (!e) {
        this._bounds.setMinMax();
        return this._bounds;
      }
      this._normalizedBounds.setMinMax();
      return this._normalizedBounds;
    },
    setPoints: function(e) {
      this._clearCache();
      this.points = x.getGraphPoints(e).slice(0);
      this.points = this.calcBezierPoints(this.points, this._cps);
      this._calcBounds();
    },
    _calcBounds: function() {
      if (!this.points) {
        return;
      }
      var e = this;
      e._bounds.setNorthEast(null);
      e._bounds.setSouthWest(null);
      if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
        D.each(e.greatCirclePoints, function(i) {
          e._bounds.extend(i);
        });
      } else {
        D.each(e.points, function(i) {
          e._bounds.extend(i);
        });
      }
      e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
      e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
      if (
        e._normalizedBounds.sw.lng < -c9.WORLD_SIZE_MC_HALF ||
        e._normalizedBounds.ne.lng > c9.WORLD_SIZE_MC_HALF
      ) {
        e._normalizedBounds.sw.lng = -c9.WORLD_SIZE_MC_HALF;
        e._normalizedBounds.ne.lng = c9.WORLD_SIZE_MC_HALF;
      }
    },
    getPathIn: function() {
      return this._path;
    },
    setPathIn: function(e) {
      this._path = e;
      this.setPoints(e);
    },
    getCpsIn: function() {
      return this._cps;
    },
    setCpsIn: function(e) {
      this._cps = e;
      this.setPoints(this._path);
    },
    calcBezierPoints: function(hS, hU) {
      var T = [];
      for (var e = 0; e < hS.length - 1; e++) {
        var hT = [hS[e], hU[e][0], hU[e][1], hS[e + 1]];
        T = T.concat(this.bezierbetweenTwoP(hT));
      }
      return T;
    },
    bezierbetweenTwoP: function(hU) {
      var T = 100;
      var hT = 1 / T;
      var e = [];
      for (var hS = 0; hS < T; hS++) {
        e.push(this.getPointOnCubicBezier(hU, hS * hT));
      }
      return e;
    },
    getPointOnCubicBezier: function(hV, hZ) {
      var i;
      var hU;
      var hS;
      var h0;
      var hT;
      var T;
      var hY;
      var e;
      var hX;
      var hW;
      hS = 3 * (hV[1].lng - hV[0].lng);
      hU = 3 * (hV[2].lng - hV[1].lng) - hS;
      i = hV[3].lng - hV[0].lng - hS - hU;
      T = 3 * (hV[1].lat - hV[0].lat);
      hT = 3 * (hV[2].lat - hV[1].lat) - T;
      h0 = hV[3].lat - hV[0].lat - T - hT;
      hY = hZ * hZ;
      e = hY * hZ;
      hX = i * e + hU * hY + hS * hZ + hV[0].lng;
      hW = h0 * e + hT * hY + T * hZ + hV[0].lat;
      return new ht(hX, hW);
    },
  });
  function fo(hT, hV, e) {
    if (!hT || hT.length === 0) {
      return;
    }
    this.userPath = hT;
    this.userCps = hV;
    var hS = [];
    for (var T = 0; T < hT.length; T++) {
      hS[T] = eo.convertLL2MC(hT[T]);
    }
    if (!hV || hV.length === 0) {
      return;
    }
    var hU = [];
    for (var T = 0; T < hV.length; T++) {
      hU[T] = [];
      hU[T][0] = eo.convertLL2MC(hV[T][0]);
      if (hV[T][1]) {
        hU[T][1] = eo.convertLL2MC(hV[T][1]);
      } else {
        hU[T][1] = eo.convertLL2MC(hV[T][0]);
      }
    }
    eq.call(this, hS, hU, e);
  }
  fo.inherits(eq, "BezierCurveOut");
  D.extend(fo.prototype, {
    toString: function() {
      return "BezierCurve";
    },
    setPath: function(hS) {
      if (!hS || hS.length === 0) {
        return;
      }
      this.userPath = hS;
      var T = [];
      for (var e = 0; e < hS.length; e++) {
        T[e] = eo.convertLL2MC(hS[e]);
      }
      this.setPathIn(T);
    },
    getPath: function() {
      return this.userPath;
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return [];
      }
      var hS = [];
      for (var T = 0; T < e.length; T++) {
        hS[T] = eo.convertMC2LL(e[T]);
      }
      return hS;
    },
    getControlPoints: function() {
      return this.userCps;
      var e = this.getCpsIn();
      if (!e || e.length === 0) {
        return [];
      }
      var hS = [];
      for (var T = 0; T < e.length; T++) {
        hS[T] = [];
        hS[T][0] = eo.convertMC2LL(e[T][0]);
        hS[T][1] = eo.convertMC2LL(e[T][1]);
      }
      return hS;
    },
    setControlPoints: function(hS) {
      if (!hS || hS.length === 0) {
        return;
      }
      this.userCps = hS;
      var T = [];
      for (var e = 0; e < hS.length; e++) {
        T[e] = [];
        T[e][0] = eo.convertLL2MC(hS[e][0]);
        if (hS[e][1]) {
          T[e][1] = eo.convertLL2MC(hS[e][1]);
        } else {
          T[e][1] = eo.convertLL2MC(hS[e][0]);
        }
      }
      this.setCpsIn(T);
    },
    getBounds: function(i) {
      var e = this.getBoundsIn(i);
      var T = new dT(
        eo.convertMC2LL(e.getSouthWest()),
        eo.convertMC2LL(e.getNorthEast())
      );
      return T;
    },
  });
  function fm(e, T) {
    x.call(this, T);
    this._normalizedBounds = new dT();
    this.setPoints(e);
    var i = this;
    eb.load("poly", function() {
      i._draw();
    });
  }
  fm.inherits(a, "PolylineMultipart");
  D.extend(fm.prototype, {
    setPoints: function(e) {
      if (!e) {
        return;
      }
      this._clearCache();
      this.points = this._unifyArgs(e);
      this._calcBounds();
    },
    _unifyArgs: function(T) {
      var e = [];
      var i = [];
      if (T.constructor === Array) {
        if (T[0].constructor === ht) {
          i.push(T);
        } else {
          i = T;
        }
      } else {
        if (typeof T === "string") {
          i.push(T);
        }
      }
      D.each(i, function(hS) {
        e.push(x.getGraphPoints(hS));
      });
      return e;
    },
    setPointAt: function(i, e, T) {
      T = T || 0;
      if (!e || !this.points[T] || !this.points[T][i]) {
        return;
      }
      this._clearCache();
      this.points[T][i] = new ht(e.lng, e.lat);
      this._calcBounds();
    },
    getBoundsIn: function(e) {
      if (!e) {
        this._bounds.setMinMax();
        return this._bounds;
      }
      this._normalizedBounds.setMinMax();
      return this._normalizedBounds;
    },
    _calcBounds: function() {
      if (!this.points) {
        return;
      }
      var e = this;
      e._bounds.setNorthEast(null);
      e._bounds.setSouthWest(null);
      if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
        D.each(e.greatCirclePoints, function(i) {
          e._bounds.extend(i);
        });
      } else {
        D.each(e.points, function(i) {
          D.each(i, function(T) {
            e._bounds.extend(T);
          });
        });
      }
      e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
      e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
      if (
        e._normalizedBounds.sw.lng < -c9.WORLD_SIZE_MC_HALF ||
        e._normalizedBounds.ne.lng > c9.WORLD_SIZE_MC_HALF
      ) {
        e._normalizedBounds.sw.lng = -c9.WORLD_SIZE_MC_HALF;
        e._normalizedBounds.ne.lng = c9.WORLD_SIZE_MC_HALF;
      }
    },
  });
  function aS(T, e) {
    x.call(this, e);
    e = e || {};
    if (typeof e.fillOpacity === "number") {
      this._config.fillOpacity = e.fillOpacity;
    } else {
      this._config.fillOpacity = 0.6;
    }
    fG(this._config.fillOpacity, 0, 1);
    if (e.fillColor === "") {
      this._config.fillColor = "";
    } else {
      this._config.fillColor = e.fillColor ? e.fillColor : "#fff";
    }
    this._parseFillCacheWebGL = [];
    this.setPoints(T, e);
    var i = this;
    eb.load("poly", function() {
      i._draw();
    });
  }
  aS.inherits(x, "Polygon");
  D.extend(aS.prototype, {
    setPoints: function(hU) {
      var hS = [];
      if (
        typeof hU === "string" ||
        hU[0] instanceof ht ||
        hU[0] instanceof c5 ||
        this instanceof f9 ||
        hU.length === 0
      ) {
        var e = this._processSinglePointArray(hU);
        this._userPoints = e.userPoints;
        hS = e.innerPoints;
        this.hasMultipleParts = false;
      } else {
        this._userPoints = [];
        for (var hT = 0; hT < hU.length; hT++) {
          var T = this._processSinglePointArray(hU[hT]);
          this._userPoints.push(T.userPoints);
          hS.push(T.innerPoints);
        }
        this.hasMultipleParts = true;
      }
      x.prototype.setPoints.call(this, hS);
    },
    setPathIn: function(e) {
      this.setPoints(e);
    },
    _processSinglePointArray: function(e) {
      var i = x.getGraphPoints(e).slice(0);
      innerPoints = i.slice(0);
      if (
        innerPoints.length > 1 &&
        !innerPoints[0].equals(innerPoints[innerPoints.length - 1])
      ) {
        innerPoints.push(new ht(innerPoints[0].lng, innerPoints[0].lat));
      }
      return { userPoints: i, innerPoints: innerPoints };
    },
    setPointAt: function(i, e) {
      if (!this._userPoints[i]) {
        return;
      }
      this._clearCache();
      this._userPoints[i] = new ht(e.lng, e.lat);
      this.points[i] = new ht(e.lng, e.lat);
      if (
        i === 0 &&
        !this.points[0].equals(this.points[this.points.length - 1])
      ) {
        this.points[this.points.length - 1] = new ht(e.lng, e.lat);
      }
      this._calcBounds();
    },
    setPositionAt: function(i, e) {
      if (!this._userPoints[i]) {
        return;
      }
      var T = eo.convertLL2MC(e);
      this.setPointAt(i, T);
    },
    getPoints: function() {
      var e = this._userPoints;
      if (e.length === 0) {
        e = this.points;
      }
      return e;
    },
    getPathIn: function() {
      return this.getPoints();
    },
  });
  function g5(hX, hU) {
    if (!hX || hX.length === 0) {
      return;
    }
    var hW = [];
    if (typeof hX === "string" || hX[0] instanceof ht || hX[0] instanceof c5) {
      var e = this._processSinglePointArray(hX);
      for (var hV = 0; hV < e.innerPoints.length; hV++) {
        hW[hV] = eo.convertLL2MC(e.innerPoints[hV]);
      }
    } else {
      for (var hV = 0; hV < hX.length; hV++) {
        var T = this._processSinglePointArray(hX[hV]);
        var hT = [];
        for (var hS = 0; hS < T.innerPoints.length; hS++) {
          hT[hS] = eo.convertLL2MC(T.innerPoints[hS]);
        }
        hW.push(hT);
      }
    }
    aS.call(this, hW, hU);
  }
  g5.inherits(aS, "PolygonOut");
  D.extend(g5.prototype, {
    toString: function() {
      return "Polygon";
    },
    setPath: function(hS) {
      if (!hS || hS.length === 0) {
        return;
      }
      hS = x.getGraphPoints(hS);
      var T = [];
      for (var e = 0; e < hS.length; e++) {
        T[e] = eo.convertLL2MC(hS[e]);
      }
      this.setPathIn(T);
    },
    getPath: function() {
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return [];
      }
      var hS = [];
      for (var T = 0; T < e.length; T++) {
        hS[T] = eo.convertMC2LL(e[T]);
      }
      return hS;
    },
  });
  function f9(i, e, T) {
    this.point = i;
    this.radius = Math.abs(e);
    aS.call(this, [], T);
  }
  f9.parseTolerance = {
    0: [0.01, 0.0001, 0.00001, 0.000004],
    1: [1000, 10, 1, 0.4],
  };
  f9.inherits(aS, "Circle");
  D.extend(f9.prototype, {
    initialize: function(e) {
      this.map = e;
      this.points = this._getPerimeterPoints(this.point, this.radius);
      this._calcBounds();
      return null;
    },
    getPoint: function() {
      return this.point;
    },
    setPoint: function(e) {
      if (!e) {
        return;
      }
      this.point = e;
      this.latLng = eo.convertMC2LL(e);
    },
    setCenterIn: function(e) {
      var i = arguments[1];
      this.setPoint(e, i);
    },
    setRadius: function(e) {
      this.radius = Math.abs(e);
    },
    getCenterIn: function() {
      return this.point;
    },
    getRadius: function() {
      return this.radius;
    },
    _getPerimeterPoints: function(e, hZ) {
      if (!e || !hZ || !this.map) {
        return [];
      }
      var T = this.map;
      var hW = e.lng;
      var hU = e.lat;
      var h5 = eo.convertMC2LL(e);
      hW = h5.lng;
      hU = h5.lat;
      var h6 = [];
      var h1 = hZ / eo.EARTHRADIUS;
      var hY = (Math.PI / 180) * hU;
      var h4 = (Math.PI / 180) * hW;
      for (var hX = 0; hX < 360; hX += 9) {
        var hV = (Math.PI / 180) * hX;
        var h2 = Math.asin(
          Math.sin(hY) * Math.cos(h1) +
            Math.cos(hY) * Math.sin(h1) * Math.cos(hV)
        );
        var h0 = Math.atan2(
          Math.sin(hV) * Math.sin(h1) * Math.cos(hY),
          Math.cos(h1) - Math.sin(hY) * Math.sin(h2)
        );
        var h3 = ((h4 - h0 + Math.PI) % (2 * Math.PI)) - Math.PI;
        var hT = new c5(h2 * (180 / Math.PI), h3 * (180 / Math.PI));
        h6.push(eo.convertLL2MC(hT));
      }
      var hS = h6[0];
      h6.push(new ht(hS.lng, hS.lat));
      if (hS) {
        this._radiusMercator = Math.sqrt(
          Math.pow(hS.lng - this.point.lng, 2) +
            Math.pow(hS.lat - this.point.lat, 2)
        );
      } else {
        this._radiusMercator = this.radius;
      }
      return h6;
    },
  });
  function dG(i, e, hS) {
    this.latLng = new c5(i.lat, i.lng);
    var T = eo.convertLL2MC(i);
    f9.call(this, T, e, hS);
  }
  dG.inherits(f9, "CircleOut");
  D.extend(dG.prototype, {
    toString: function() {
      return "Circle";
    },
    setCenter: function(e) {
      this.latLng = new c5(e.lat, e.lng);
      var i = eo.convertLL2MC(e);
      this.setCenterIn(i);
    },
    getCenter: function() {
      return this.latLng;
    },
    getPath: function() {
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return [];
      }
      var hS = [];
      for (var T = 0; T < e.length; T++) {
        hS[T] = eo.convertMC2LL(e[T]);
      }
      return hS;
    },
  });
  function bt(hS, e, i) {
    x.call(this, i);
    i = i || {};
    if (typeof i.topFillOpacity === "number") {
      this._config.topFillOpacity = i.topFillOpacity;
    } else {
      this._config.topFillOpacity = 0.6;
    }
    if (typeof i.sideFillOpacity === "number") {
      this._config.sideFillOpacity = i.sideFillOpacity;
    } else {
      this._config.sideFillOpacity = 0.8;
    }
    fG(this._config.sideFillOpacity, 0, 1);
    if (i.topFillColor === "") {
      this._config.topFillColor = "";
    } else {
      this._config.topFillColor = i.topFillColor ? i.topFillColor : "#fff";
    }
    if (i.sideFillColor === "") {
      this._config.sideFillColor = "";
    } else {
      this._config.sideFillColor = i.sideFillColor ? i.sideFillColor : "#fff";
    }
    this._parseFillCacheWebGL = [];
    this.setPoints(hS, i);
    this._config.altitude = e || 0;
    var T = this;
    eb.load("poly", function() {
      T._draw();
    });
  }
  bt.inherits(x, "Prism");
  D.extend(bt.prototype, {
    setPoints: function(hU) {
      var hS = [];
      if (
        typeof hU === "string" ||
        hU[0] instanceof ht ||
        hU[0] instanceof c5 ||
        this instanceof f9 ||
        hU.length === 0
      ) {
        var e = this._processSinglePointArray(hU);
        this._userPoints = e.userPoints;
        hS = e.innerPoints;
        this.hasMultipleParts = false;
      } else {
        this._userPoints = [];
        for (var hT = 0; hT < hU.length; hT++) {
          var T = this._processSinglePointArray(hU[hT]);
          this._userPoints.push(T.userPoints);
          hS.push(T.innerPoints);
        }
        this.hasMultipleParts = true;
      }
      x.prototype.setPoints.call(this, hS);
    },
    setPathIn: function(e) {
      this.setPoints(e);
    },
    _processSinglePointArray: function(e) {
      var i = x.getGraphPoints(e).slice(0);
      innerPoints = i.slice(0);
      if (
        innerPoints.length > 1 &&
        !innerPoints[0].equals(innerPoints[innerPoints.length - 1])
      ) {
        innerPoints.push(new ht(innerPoints[0].lng, innerPoints[0].lat));
      }
      return { userPoints: i, innerPoints: innerPoints };
    },
    setPointAt: function(i, e) {
      if (!this._userPoints[i]) {
        return;
      }
      this._clearCache();
      this._userPoints[i] = new ht(e.lng, e.lat);
      this.points[i] = new ht(e.lng, e.lat);
      if (
        i === 0 &&
        !this.points[0].equals(this.points[this.points.length - 1])
      ) {
        this.points[this.points.length - 1] = new ht(e.lng, e.lat);
      }
      this._calcBounds();
    },
    getPoints: function() {
      var e = this._userPoints;
      if (e.length === 0) {
        e = this.points;
      }
      return e;
    },
    getPathIn: function() {
      return this.getPoints();
    },
    setTopFillOpacity: function(e) {
      if (e > 1 || e < 0) {
        return;
      }
      this._config.topFillOpacity = e;
      this._setDomAttribute("topfillopacity", e);
    },
    getTopFillOpacity: function() {
      return this._config.topFillOpacity;
    },
    setSideFillOpacity: function(e) {
      if (e > 1 || e < 0) {
        return;
      }
      this._config.sideFillOpacity = e;
      this._setDomAttribute("sidefillopacity", e);
    },
    getSideFillOpacity: function() {
      return this._config.sideFillOpacity;
    },
    setTopFillColor: function(e) {
      this._config.topFillColor = e || "";
      this._setDomAttribute("topfillcolor", e);
    },
    getTopFillColor: function() {
      return this._config.topFillColor;
    },
    setSideFillColor: function(e) {
      this._config.sideFillColor = e || "";
      this._setDomAttribute("sidefillcolor", e);
    },
    getSideFillColor: function() {
      return this._config.sideFillColor;
    },
    setAltitude: function(e) {
      this._config.altitude = Number(e);
      this.draw();
      var i = new bc("onlineupdate");
      i.overlay = this;
      this.dispatchEvent(i);
    },
    getAltitude: function() {
      return this._config.altitude;
    },
  });
  function ch(hW, hU, hX) {
    if (!hW || hW.length === 0) {
      return;
    }
    this.userPath = hW;
    var e = [];
    if (typeof hW === "string" || hW[0] instanceof ht || hW[0] instanceof c5) {
      var hY = this._processSinglePointArray(hW);
      for (var hT = 0; hT < hY.innerPoints.length; hT++) {
        e[hT] = eo.convertLL2MC(hY.innerPoints[hT]);
      }
    } else {
      for (var hT = 0; hT < hW.length; hT++) {
        var hV = this._processSinglePointArray(hW[hT]);
        var T = [];
        for (var hS = 0; hS < hV.innerPoints.length; hS++) {
          T[hS] = eo.convertLL2MC(hV.innerPoints[hS]);
        }
        e.push(T);
      }
    }
    bt.call(this, e, hU, hX);
  }
  ch.inherits(bt, "PrismOut");
  D.extend(ch.prototype, {
    toString: function() {
      return "Prism";
    },
    setPath: function(hS) {
      if (!hS || hS.length === 0) {
        return;
      }
      this.userPath = hS;
      var T = [];
      for (var e = 0; e < hS.length; e++) {
        T[e] = eo.convertLL2MC(hS[e]);
      }
      this.setPathIn(T);
    },
    getPath: function() {
      return this.userPath;
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return [];
      }
      var hS = [];
      for (var T = 0; T < e.length; T++) {
        hS[T] = eo.convertMC2LL(e[T]);
      }
      return hS;
    },
  });
  function dX(T, e) {
    x.call(this, e);
    e = e || {};
    this._config.type = e.type || "image";
    this._config.url = e.url || "";
    this._config.opacity = typeof e.opacity === "number" ? e.opacity : 1;
    fG(this._config.opacity, 0, 1);
    this._parseFillCacheWebGL = [];
    this.setPoints(T, e);
    var i = this;
    eb.load("poly", function() {
      i._draw();
    });
  }
  dX.inherits(x, "GroundOverlay");
  D.extend(dX.prototype, {
    setPoints: function(i) {
      var e = x.getGraphPoints(i).slice(0);
      this.hasMultipleParts = false;
      x.prototype.setPoints.call(this, e);
    },
    setPathIn: function(e) {
      this.setPoints(e);
    },
    getPoints: function() {
      return this.points;
    },
    getPathIn: function() {
      return this.getPoints();
    },
  });
  function cq(hT, T) {
    if (!hT) {
      return;
    }
    var hV = [
      new ht(hT.sw.lng, hT.ne.lat),
      new ht(hT.ne.lng, hT.ne.lat),
      new ht(hT.ne.lng, hT.sw.lat),
      new ht(hT.sw.lng, hT.sw.lat),
    ];
    var e = x.getGraphPoints(hV).slice(0);
    var hU = [];
    for (var hS = 0; hS < e.length; hS++) {
      hU[hS] = eo.convertLL2MC(e[hS]);
    }
    dX.call(this, hU, T);
  }
  cq.inherits(dX, "GroundOverlayOut");
  D.extend(cq.prototype, {
    toString: function() {
      return "GroundOverlay";
    },
  });
  var bC = {};
  function hI(T, i) {
    D.BaseClass.call(this);
    this.content = T;
    this.map = null;
    this._config = {
      width: 0,
      height: 0,
      maxWidth: 600,
      offset: new ea(0, 0),
      title: "",
      maxContent: "",
      enableMaximize: false,
      enableAutoPan: true,
      enableCloseOnClick: true,
      margin: [10, 10, 40, 10],
      collisions: [
        [10, 10],
        [10, 10],
        [10, 10],
        [10, 10],
      ],
      ifMaxScene: false,
      onClosing: function() {
        return true;
      },
    };
    this.setConfig(i);
    if (this._config.width < 50) {
      this._config.width = 50;
    }
    if (this._config.width > 730) {
      this._config.width = 730;
    }
    if (this._config.height != 0) {
      if (this._config.height < 50) {
        this._config.height = 50;
      }
      if (this._config.height > 650) {
        this._config.height = 650;
      }
    }
    if (this._config.maxWidth !== 0) {
      if (this._config.maxWidth < 50) {
        this._config.maxWidth = 50;
      }
      if (this._config.maxWidth > 730) {
        this._config.maxWidth = 730;
      }
    }
    this.isWinMax = false;
    this.IMG_PATH = e4.imgPath;
    this.overlay = null;
    var e = this;
    eb.load("simpleInfowindow", function() {
      e._draw();
    });
  }
  hI.inherits(D.BaseClass, "SimpleInfoWindow");
  D.extend(hI.prototype, {
    setWidth: function(e) {
      e = e * 1;
      if ((!e && e != 0) || isNaN(e) || e < 0) {
        return;
      }
      if (e != 0) {
        if (e < 50) {
          e = 50;
        }
        if (e > 730) {
          e = 730;
        }
      }
      this._config.width = e;
    },
    setHeight: function(e) {
      e = e * 1;
      e -= 10;
      if ((!e && e != 0) || isNaN(e) || e < 0) {
        return;
      }
      if (e != 0) {
        if (e < 50) {
          e = 50;
        }
        if (e > 650) {
          e = 650;
        }
      }
      this._config.height = e;
    },
    setMaxWidth: function(e) {
      e = e * 1;
      if ((!e && e != 0) || isNaN(e) || e < 0) {
        return;
      }
      if (e != 0) {
        if (e < 50) {
          e = 50;
        }
        if (e > 730) {
          e = 730;
        }
      }
      this._config.maxWidth = e;
    },
    setTitle: function(e) {
      this._config.title = e || "";
    },
    setContent: function(e) {
      this.content = e || "";
    },
    setMaxContent: function(e) {
      this._config.maxContent = e || "";
    },
    redraw: function() {},
    enableAutoPan: function() {
      this._config.enableAutoPan = true;
    },
    disableAutoPan: function() {
      this._config.enableAutoPan = false;
    },
    enableCloseOnClick: function() {
      this._config.enableCloseOnClick = true;
    },
    disableCloseOnClick: function() {
      this._config.enableCloseOnClick = false;
    },
    enableMaximize: function() {
      this._config.enableMaximize = true;
    },
    disableMaximize: function() {
      this._config.enableMaximize = false;
    },
    show: function() {
      this._visible = true;
    },
    hide: function() {
      this._visible = false;
    },
    close: function() {
      this.hide();
    },
    dispose: function() {
      D.BaseClass.prototype.decontrol.call(this);
    },
    maximize: function() {
      this.isWinMax = true;
    },
    restore: function() {
      this.isWinMax = false;
    },
    setConfig: function(i) {
      if (!i) {
        return;
      }
      for (var e in i) {
        if (typeof this._config[e] == typeof i[e]) {
          this._config[e] = i[e];
        }
      }
    },
    isVisible: function() {
      return this.isOpen();
    },
    isOpen: function() {
      return false;
    },
    getPoint: function() {
      if (this.overlay && this.overlay.getPoint) {
        return this.overlay.getPoint();
      }
    },
    getOffset: function() {
      return this._config.offset;
    },
    dispose: function() {
      D.BaseClass.prototype.decontrol.call(this);
    },
    toString: function() {
      return "SimpleInfoWindow";
    },
  });
  c9.prototype.openSimpleInfoWindow = function(hS, e) {
    if (
      !hS ||
      hS.toString() != "SimpleInfoWindow" ||
      !e ||
      e.toString() != "Point"
    ) {
      return;
    }
    var i = this.temp;
    if (!i.marker) {
      var T = new hc(e4.imgPath + "blank.gif", { width: 1, height: 1 });
      i.marker = new ds(e, {
        icon: T,
        width: 1,
        height: 1,
        offset: new ea(0, 0),
        infoWindowOffset: new ea(0, 0),
        clickable: false,
      });
      i.marker._fromMap = 1;
    } else {
      i.marker.setPoint(e);
    }
    this.addOverlay(i.marker);
    i.marker.show();
    i.marker.openSimpleInfoWindow(hS);
  };
  c9.prototype.closeSimpleInfoWindow = function() {
    var e = this.temp.infoWin || this.temp._infoWin;
    if (e && e.overlay) {
      e.overlay.closeSimpleInfoWindow();
    }
  };
  cW.prototype.openSimpleInfoWindow = function(e) {
    if (this.map) {
      this.map.closeSimpleInfoWindow();
      e._visible = true;
      this.map.temp._infoWin = e;
      e.overlay = this;
      D.BaseClass.call(e, e.hashCode);
    }
  };
  cW.prototype.closeSimpleInfoWindow = function() {
    if (this.map && this.map.temp._infoWin) {
      this.map.temp._infoWin._visible = false;
      this.map.temp._infoWin.decontrol();
      this.map.temp._infoWin = null;
    }
  };
  function ek(e, i) {
    e = isNaN(e) ? 0 : e;
    i = isNaN(i) ? 0 : i;
    this.x = e;
    this.y = i;
  }
  ek.prototype.equals = function(e) {
    if (!e) {
      return false;
    }
    return e.x === this.x && e.y === this.y;
  };
  ek.prototype.clone = function() {
    return new ek(this.x, this.y);
  };
  ek.prototype.toString = function() {
    return "Pixel";
  };
  function ea(i, e) {
    if (typeof i !== "number") {
      this.width = parseFloat(i);
    } else {
      this.width = i;
    }
    if (typeof e !== "number") {
      this.height = parseFloat(e);
    } else {
      this.height = e;
    }
  }
  ea.prototype.equals = function(e) {
    return !!(e && this.width === e.width && this.height === e.height);
  };
  ea.prototype.toString = function() {
    return "Size";
  };
  var bI = {
    B_NORMAL_MAP: {
      tileUrls: es(e4.tileDomain, e4.rasterTilePath),
      vectorTileUrls: es(e4.tileDomain, e4.vectorTilePath),
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 3,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      webgl: { minZoom: 3, maxZoom: 25 },
      zoomLevelBase: 18,
      errorUrl: e4.imgPath + "bg.png",
      bounds: new dT(
        new ht(-21364736, -11708041.66),
        new ht(23855104, 12474104.17)
      ),
      imgExtend: "png",
    },
    B_SATELLITE_MAP: {
      tileUrls: [
        "//maponline0.bdimg.com/starpic/?qt=satepc&",
        "//maponline1.bdimg.com/starpic/?qt=satepc&",
        "//maponline2.bdimg.com/starpic/?qt=satepc&",
        "//maponline3.bdimg.com/starpic/?qt=satepc&",
      ],
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 3,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      zoomLevelBase: 18,
      errorUrl: e4.imgPath + "bg.png",
      bounds: new dT(new ht(-21364736, -10616832), new ht(23855104, 15859712)),
      imgExtend: "png",
    },
    B_STREET_MAP: {
      tileUrls: es(e4.tileDomain, e4.rasterTilePath),
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 3,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      zoomLevelBase: 18,
      errorUrl: e4.imgPath + "bg.png",
      bounds: new dT(new ht(-21364736, -10616832), new ht(23855104, 15859712)),
      imgExtend: "png",
    },
    BMAP_CUSTOM_LAYER: {
      tileUrls: [""],
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 1,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      zoomLevelBase: 18,
      errorUrl: e4.imgPath + "blank.gif",
      bounds: new dT(new ht(-21364736, -10616832), new ht(23855104, 15859712)),
      imgExtend: "png",
    },
    B_EARTH_MAP: {
      tileUrls: [""],
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 3,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      webgl: { minZoom: 3, maxZoom: 21 },
      zoomLevelBase: 18,
      errorUrl: e4.imgPath + "blank.gif",
      bounds: new dT(new ht(-21364736, -10616832), new ht(23855104, 15859712)),
      imgExtend: "png",
    },
  };
  var b7 = bI;
  function bU(hX, i, hT, T, hS) {
    this.mgr = hX;
    this.position = hT;
    this._cbks = [];
    this.name = hX.getTileName(T, hS, hX.map.config.style);
    this.info = T;
    this._transparentPng = hS.isTransparentPng();
    var hY = U("img");
    dn(hY);
    hY.galleryImg = false;
    var hW = hY.style;
    hW.position = "absolute";
    hW.width = hX.tileSize + "px";
    hW.height = hX.tileSize + "px";
    hW.left = hT[0] + "px";
    hW.top = hT[1] + "px";
    this.img = hY;
    this.src = i;
    if (ac && hT._offsetX === 0) {
      hW.opacity = 0;
      hW.willChange = "opacity";
    }
    var hV = this;
    this.img.onload = function(h6) {
      if (!hV.mgr) {
        return;
      }
      var h1 = hV.mgr;
      var hZ = h1.bufferTiles;
      if (h1.bufferNumber > 0) {
        hZ[hV.name] = hV;
        hZ.push(hV.name);
      }
      var h3 = hZ.length - h1.bufferNumber;
      for (var h4 = 0; h3 > 0 && h4 < hZ.length; h4++) {
        var h5 = hZ[h4];
        if (!h1.mapTiles[h5]) {
          if (hZ[h5]) {
            hZ[h5].mgr = null;
            var h2 = hZ[h5].img;
            if (h2.parentNode) {
              fr(h2);
              h2.parentNode.removeChild(h2);
            }
            h2 = null;
            hZ[h5].img = null;
            hZ[h5] = null;
            delete hZ[h5];
          }
          hZ.splice(h4, 1);
          h4--;
          h3--;
        }
      }
      hV.loaded = true;
      h1.imgNumber++;
      if (!he(hV.img)) {
        if (hS.tilesDiv) {
          hS.tilesDiv.appendChild(hV.img);
        }
      }
      var h6 = new bc("onimagechange");
      h6.action = "show";
      h6.tile = hV.name;
      h1.map.dispatchEvent(h6);
      if (ac && hT._offsetX === 0) {
        var h0 = new p({
          fps: 10,
          duration: 300,
          render: function(e) {
            if (hV.img && hV.img.style) {
              hV.img.style.opacity = e * 1;
            }
          },
          finish: function() {
            if (hV.img && hV.img.style) {
              delete hV.img.style.opacity;
              hV.img.style.willChange = "auto";
            }
          },
        });
      }
      hV._callCbks();
    };
    this.img.onerror = function(h1) {
      hV.error = true;
      hV._callCbks();
      if (!hV.mgr) {
        return;
      }
      var hZ = hV.mgr;
      var h0 = b7[hS.mapType];
      if (h0.errorUrl) {
        hV.img.src = h0.errorUrl;
      }
      if (!he(hV.img)) {
        if (hS.tilesDiv) {
          hS.tilesDiv.appendChild(hV.img);
        }
      }
    };
    hY = null;
    var hU = new bc("onimagebefore");
    hU.tile = hV.name;
    hX.map.dispatchEvent(hU);
  }
  bU.prototype._addLoadCbk = function(e) {
    this._cbks.push(e);
  };
  bU.prototype._load = function() {
    if (FeBrowser.ie <= 6 && FeBrowser.ie > 0 && this._transparentPng) {
      this.img.src = e4.imgPath + "blank.gif";
    } else {
      this.img.src = this.src;
    }
  };
  bU.prototype._callCbks = function() {
    var T = this;
    for (var e = 0; e < T._cbks.length; e++) {
      T._cbks[e]();
    }
    T._cbks.length = 0;
  };
  var ac = !D.Browser.ie || D.Browser.ie > 8;
  function fe(e) {
    this.tileLayers = [];
    this.map = e;
    this.bufferNumber = 300;
    this.mapTiles = [];
    this.bufferTiles = [];
    this.config = b7[this.map.mapType];
    this.errorUrl = this.config.errorUrl;
    this.tileSize = this.config.tileSize;
    this.baseUnits = this.config.baseUnits;
    this.baseZoomLevel = this.config.zoomLevelBase;
    this.tileURLs = this.config.tileUrls;
    this.imgNumber = 0;
    this.numLoading = 0;
    this.temp = {};
  }
  bp.register(function(i) {
    if (i._renderType === "webgl") {
      return;
    }
    var e = (i.tileMgr = new fe(i));
    i.addEventListener("mousewheel", function(T) {
      e.mouseWheel(T);
    });
    i.addEventListener("dblclick", function(T) {
      e.dblClick(T);
    });
    i.addEventListener("rightdblclick", function(T) {
      e.dblClick(T);
    });
    i.addEventListener("minuspress", function(T) {
      e.keypress(T);
    });
    i.addEventListener("pluspress", function(T) {
      e.keypress(T);
    });
    i.addEventListener("load", function(T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return;
      }
      e.loadTiles();
    });
    i.addEventListener("zoomstartcode", function(T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return;
      }
      e._zoom(T);
    });
    i.addEventListener("moving", function(T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return;
      }
      e.moveGridTiles();
    });
    i.addEventListener("resize", function(T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return;
      }
      e.resizeMap(T);
    });
    i.addEventListener("addtilelayer", function(T) {
      e.addTileLayer(T);
    });
    i.addEventListener("removetilelayer", function(T) {
      e.removeTileLayer(T);
    });
  });
  D.extend(fe.prototype, {
    addTileLayer: function(hS) {
      var T = this;
      var i = hS.target;
      T.tileLayers.push(i);
      if (T.map.loaded) {
        T.moveGridTiles();
      }
    },
    removeTileLayer: function(hZ) {
      var h0 = this;
      var hX = hZ.target;
      var hV = hX.mapType;
      var hU = h0.mapTiles;
      var h2 = h0.bufferTiles;
      for (var T in h2) {
        var hS = T.split("-")[1];
        if (hS == hV) {
          delete h2[T];
        }
      }
      for (var T in hU) {
        var hS = T.split("-")[1];
        if (hS == hV) {
          delete hU[T];
        }
      }
      if (h0.zoomsDiv && h0.zoomsDiv.parentNode) {
        h0.zoomsDiv.parentNode.removeChild(h0.zoomsDiv);
        h0.zoomsDiv.innerHTML = "";
      }
      var hT = h0.map;
      if (hT.deepZoom) {
        var h1 = hT.deepZoom.preDeepZoomDiv;
        if (h1 && h1.parentNode) {
          h1.parentNode.removeChild(h1);
        }
      }
      for (var hY = 0, hW = h0.tileLayers.length; hY < hW; hY++) {
        if (hX == h0.tileLayers[hY]) {
          h0.tileLayers.splice(hY, 1);
        }
      }
      h0.moveGridTiles();
    },
    hideDeepZoomDiv: function() {
      var i = this,
        T = i.map;
      if (T.deepZoom) {
        var e = T.deepZoom.preDeepZoomDiv;
        if (e && e.style.display != "none") {
          e.style.display = "none";
        }
      }
    },
    getTileLayer: function(hT) {
      var hS = this;
      for (var T = 0, e = hS.tileLayers.length; T < e; T++) {
        tilelayer = hS.tileLayers[T];
        if (tilelayer.mapType == hT) {
          return tilelayer;
        }
      }
      return null;
    },
    _zoom: function(T) {
      var i = this;
      if (i.zoomsDiv && i.zoomsDiv.style.display != "none") {
        i.zoomsDiv.style.display = "none";
      }
      i.hideDeepZoomDiv();
      i.moveGridTiles();
    },
    resizeMap: function(i) {
      this.loaded = false;
      this.moveGridTiles();
    },
    _checkTilesLoaded: function() {
      this.numLoading--;
      var e = this;
      if (this.numLoading == 0) {
        if (this._checkLoadedTimer) {
          clearTimeout(this._checkLoadedTimer);
          this._checkLoadedTimer = null;
        }
        this._checkLoadedTimer = setTimeout(function() {
          if (e.numLoading == 0) {
            e.map.dispatchEvent(new bc("ontilesloaded"));
          }
          e._checkLoadedTimer = null;
        }, 80);
      }
    },
    getTileName: function(e, T, i) {
      var hT = T.mapType;
      var hS = "TILE-" + hT + "-" + i + "-" + e[0] + "-" + e[1] + "-" + e[2];
      return hS;
    },
    hideTile: function(hS, T) {
      var i = hS.img;
      if (he(i)) {
        if (hS.loaded) {
          this.imgNumber--;
        }
        if (i.parentNode) {
          fr(i);
          i.parentNode.removeChild(i);
        }
      }
      var hT = new bc("onimagechange");
      hT.tile = this.getTileName(hS.info, T, this.map.config.style);
      hT.action = "hide";
      delete this.mapTiles[hS.name];
      if (!hS.loaded) {
        fr(i);
        hS._callCbks();
        i = null;
        hS.img = null;
        hS.mgr = null;
      }
      this.map.dispatchEvent(hT);
    },
    loadTiles: function() {
      var i = this;
      if (D.Browser.ie) {
        try {
          document.execCommand("BackgroundImageCache", false, true);
        } catch (T) {}
      }
      if (this.zoomsDiv && this.zoomsDiv.style.display != "none") {
        this.zoomsDiv.style.display = "none";
      }
      i.hideDeepZoomDiv();
      i.moveGridTiles();
    },
    getCell: function(hT, hS) {
      var e = this.baseUnits * Math.pow(2, this.baseZoomLevel - hS);
      var T = parseInt(hT.lng / e);
      var i = parseInt(hT.lat / e);
      return [T, i, e * (T + 0.5), e * (i + 0.5)];
    },
    moveGridTiles: function() {
      var h6 = this.map,
        ih = h6.getMapType(),
        ie = this.tileLayers.length;
      var ib = h6.centerPoint;
      if (ih !== BMAP_SATELLITE_MAP) {
        ib = d5.calcLoopCenterPoint(ib);
      }
      var hX = h6.width;
      var iv = h6.getZoomUnits();
      var ic = iv * hX;
      var ij = ib.lng - ic / 2;
      var h2 = ib.lng + ic / 2;
      var h5 = d5.isAddWidth(ij, h2);
      for (var il = 0; il < ie; il++) {
        var hT = this.tileLayers[il];
        if (hT.baseLayer || ie == 1) {
          this.tilesDiv = hT.tilesDiv;
        }
        var h7 = b7[hT.mapType];
        var hS = h6.zoomLevel;
        var ip = h6.getZoomUnits(h6.zoomLevel);
        var h1 = h7.baseUnits * Math.pow(2, h7.zoomLevelBase - hS);
        var hZ = Math.floor(ib.lng / h1);
        var ik = Math.floor(ib.lat / h1);
        var h4 = h7.tileSize;
        var h8 = [
          hZ,
          ik,
          ((ib.lng - hZ * h1) / h1) * h4,
          ((ib.lat - ik * h1) / h1) * h4,
        ];
        var h0 = h5 ? (h6.width / 2) * 1.5 : h6.width / 2;
        var h3 = h8[0] - Math.ceil((h0 - h8[2]) / h4);
        var iu = h8[1] - Math.ceil((h6.height / 2 - h8[3]) / h4);
        var im = h8[0] + Math.ceil((h0 + h8[2]) / h4);
        var h9 = h8[1] + Math.ceil((h6.height / 2 + h8[3]) / h4);
        var hY = [];
        for (var ir = h3; ir < im; ir++) {
          for (var iq = iu; iq < h9; iq++) {
            hY.push([ir, iq]);
            var ig = "id_" + ir + "_" + iq + "_" + hS;
            hY[ig] = true;
          }
        }
        if (hT.mapType !== BMAP_SATELLITE_MAP) {
          hY = d5.calcLoopTiles(hY, hS);
        }
        hY.sort(
          (function(i) {
            return function(id, ix) {
              return (
                0.4 * Math.abs(id[0] - i[0]) +
                0.6 * Math.abs(id[1] - i[1]) -
                (0.4 * Math.abs(ix[0] - i[0]) + 0.6 * Math.abs(ix[1] - i[1]))
              );
            };
          })([h8[0], h8[1]])
        );
        var T = this.mapTiles;
        var e = -ib.lng / ip;
        var iw = ib.lat / ip;
        var ii = [e, iw];
        for (var ia in T) {
          var hV = T[ia];
          var it = hV.info;
          if (!it) {
            continue;
          }
          var ig = "id_" + it[0] + "_" + it[1] + "_" + it[2];
          if (!hY[ig]) {
            this.hideTile(hV, hT);
          }
        }
        var hU = -h6.offsetX + h6.width / 2;
        var hW = -h6.offsetY + h6.height / 2;
        hT.tilesDiv.style.left = Math.round(e + hU) - ii[0] + "px";
        hT.tilesDiv.style.top = Math.round(iw + hW) - ii[1] + "px";
        this.numLoading += hY.length;
        for (var ir = 0, io = hY.length; ir < io; ir++) {
          this.showTile(
            [hY[ir][0], hY[ir][1], h6.zoomLevel],
            ii,
            hT,
            ir,
            h6.config.style
          );
        }
      }
    },
    showTile: function(hV, hU, hY, h3) {
      this.centerPos = hU;
      var hW = b7[hY.mapType];
      var hZ = this.map.config.style;
      var hS = this.getTileName(hV, hY, hZ);
      var hT = hV[0] * hW.tileSize + hU[0];
      var T = (-1 - hV[1]) * hW.tileSize + hU[1];
      var h2 = [hT, T];
      var hX = null;
      if (hY.mapType !== BMAP_SATELLITE_MAP) {
        hX = d5.calcLoopParam(hV[0], hV[2]);
        var h1 = hX.offsetX;
        h2[0] += h1;
        h2._offsetX = h1;
      }
      var h6 = this;
      var h5 = this.mapTiles[hS];
      if (h5) {
        h5.img.style.left = h2[0] + "px";
        h5.img.style.top = h2[1] + "px";
        if (h5.loaded) {
          this._checkTilesLoaded();
        } else {
          h5._addLoadCbk(function() {
            h6._checkTilesLoaded();
          });
        }
        return;
      }
      h5 = this.bufferTiles[hS];
      if (h5) {
        this.imgNumber++;
        hY.tilesDiv.insertBefore(h5.img, hY.tilesDiv.lastChild);
        this.mapTiles[hS] = h5;
        h5.img.style.left = h2[0] + "px";
        h5.img.style.top = h2[1] + "px";
        if (h5.loaded) {
          this._checkTilesLoaded();
        } else {
          h5._addLoadCbk(function() {
            h6._checkTilesLoaded();
          });
        }
        var h4 = new bc("onimagechange");
        h4.action = "cache";
        h4.tile = this.getTileName(hV, hY, hZ);
        this.map.dispatchEvent(h4);
      } else {
        var h0 = new ek(hV[0], hV[1]);
        if (hX) {
          h0.x = hX.col;
        }
        var i = hY.getTilesUrl(h0, hV[2]);
        h5 = new bU(this, i, h2, hV, hY);
        h5._addLoadCbk(function() {
          h6._checkTilesLoaded();
        });
        h5._load();
        this.mapTiles[hS] = h5;
        bz(this.map);
      }
    },
    mouseWheel: function(hW) {
      var hV = this.map;
      if (!hV.config.enableWheelZoom) {
        return;
      }
      var hX = hV.zoomLevel + (hW.trend === true ? 1 : -1);
      var hT = hV._getProperZoom(hX);
      if (hT.exceeded) {
        var T = new bc("onzoomexceeded");
        T.targetZoom = hX;
        hV.dispatchEvent(T);
        return;
      }
      hV.dispatchEvent(new bc("onzoomstart"));
      hV.lastLevel = hV.zoomLevel;
      hV.zoomLevel = hT.zoom;
      var i = hW.pixel;
      var hS = hV.pixelToPointIn(i, { zoom: hV.lastLevel });
      var hU = hV.getZoomUnits(hV.zoomLevel);
      hV.centerPoint = new ht(
        hS.lng + hU * (hV.width / 2 - i.x),
        hS.lat - hU * (hV.height / 2 - i.y)
      );
      this.zoom(i);
    },
    dblClick: function(T) {
      var i = this.map;
      if (!i.config.enableDblclickZoom) {
        return;
      }
      if (i.mapType === "B_EARTH_MAP") {
        return;
      }
      if (i.currentOperation === dV.dragging) {
        return;
      }
      if (T.type == "onrightdblclick") {
        i.zoomOut(T.point);
      } else {
        i.zoomIn(T.point);
      }
    },
    keypress: function(T) {
      var i = this.map;
      if (i.getMapType() === BMAP_EARTH_MAP) {
        return;
      }
      T.type == "onpluspress" ? i.zoomIn() : i.zoomOut();
    },
  });
  function cS(hS) {
    this.opts = hS || {};
    this.copyright = this.opts.copyright || {};
    this.transparentPng = this.opts.transparentPng || false;
    this.png8 = this.opts.png8 || false;
    this.baseLayer = this.opts.baseLayer || false;
    this.dataType = this.opts.dataType || 1;
    this.isFlat = this.opts.isFlat === false ? false : true;
    this.showLabel = this.opts.showLabel === false ? false : true;
    var e = this.opts.tileTypeName || "web";
    this.tileType = cM.getInstance(e);
    this.clipTile = this.opts.clipTile || false;
    this._type = "tilelayer";
    var i = f6() ? 128 : 256;
    this.cacheSize = this.opts.cacheSize || i;
    var T = this;
    this.tileCache = new e0(this.cacheSize, {
      clearCallback: function(hT) {
        if (hT.label) {
          if (hT.label.textImageBitmap) {
            hT.label.textImageBitmap.close();
          }
          if (hT.label.indoorTextImageBitmap) {
            hT.label.indoorTextImageBitmap.close();
          }
        }
        T._removeIndoorData(hT);
      },
    });
    this.scaler = a7() >= 1.5 ? 2 : 1;
    this.normalUdt = aE("ditu", "normal").udt;
    this.numLoading = 0;
    this.useThumbData = false;
    if (this.baseLayer) {
      this.useThumbData = true;
    }
    if (typeof this.opts.customLayer === "boolean") {
      this.customLayer = this.opts.customLayer;
    } else {
      this.customLayer = true;
    }
  }
  cS.inherits(ee, "TileLayer");
  D.extend(cS.prototype, {
    isTransparentPng: function() {
      return this.transparentPng;
    },
    getTilesUrl: function(hZ, e) {
      var T = b7[this.mapType];
      if (typeof T != "object") {
        return null;
      }
      var hS = hZ.x;
      var h0 = hZ.y;
      if (this.mapType !== BMAP_SATELLITE_MAP) {
        var h0 = d5.calcLoopParam(h0, e).col;
      }
      var i = "";
      if (this.opts.tileUrlTemplate) {
        i = this.opts.tileUrlTemplate;
        i = i.replace(/\{X\}/, h0);
        i = i.replace(/\{Y\}/, hS);
        i = i.replace(/\{Z\}/, e);
      } else {
        if (this.mapType == BMAPGL_NORMAL_MAP) {
          var hY = this.isCanvasMap ? 0 : 1;
          var hU = T.tileUrls[Math.abs(h0 + hS) % T.tileUrls.length];
          if (window.offLineIPAddress) {
            hU = window.offLineIPAddress + "tile5/";
          }
          var hT = this.map.config.style;
          i =
            hU +
            "?qt=vtile&x=" +
            hS +
            "&y=" +
            h0 +
            "&z=" +
            e +
            (hT === "default" ? "" : "&styleId=" + e4.mapStyleNameIdPair[hT]) +
            "&styles=pl&udt=" +
            this.normalUdt +
            "&scaler=" +
            this.scaler +
            "&showtext=" +
            hY;
          i = i.replace(/-(\d+)/gi, "M$1");
        }
        if (this.mapType == BMAP_SATELLITE_MAP) {
          var hV = aE("ditu", "satellite");
          var hX = hV.ver;
          var hW = hV.udt;
          i =
            T.tileUrls[Math.abs(h0 + hS) % T.tileUrls.length] +
            "u=x=" +
            hS +
            ";y=" +
            h0 +
            ";z=" +
            e +
            ";v=" +
            hX +
            ";type=sate&fm=46&udt=" +
            hW;
          i = i.replace(/-(\d+)/gi, "M$1");
        }
      }
      return i;
    },
    initialize: function(hT) {
      this.map = hT;
      if (hT._renderType === "webgl") {
        var hS = null;
        if (this.customLayer !== false) {
          hS = this.getTilesUrl;
        }
        D.extend(this, fT);
        this.labelProcessor = new dk(this);
        this.callbackDataQueue = [];
        if (hS) {
          this.getTilesUrl = hS;
        }
        var e = this;
        hT.on("indoor_data_refresh", function(hU) {
          if (!e.baseLayer) {
            return;
          }
          e._refreshIndoorData(hU.uid, hU.floor);
        });
        hT.on("custom_labels_ready", function(hU) {
          if (!e.baseLayer) {
            return;
          }
          e._doWorkAfterLabelImageLoad(
            hU.virtualTile,
            hU.labelCanvas,
            null,
            hU.imgKey
          );
        });
        hT.on("glmoduleloaded", function() {
          if (!e.baseLayer) {
            return;
          }
          e.updateAllIconsTextureCoords();
        });
      }
      if (!hT.temp.layerZIndex) {
        hT.temp.layerZIndex = 0;
      }
      this.zIndex = this.zIndex || 0;
      if (this.baseLayer) {
        this.zIndex = 0;
      }
      if (!hT.temp.layid) {
        hT.temp.layid = 0;
      }
      if (!this.opts.mapType) {
        this.mapType = "BMAP_CUSTOM_LAYER_" + hT.temp.layid;
        hT.temp.layid++;
      } else {
        this.mapType = this.opts.mapType;
      }
      var i = b7[this.mapType];
      if (!i) {
        b7[this.mapType] = {
          tileUrls: [],
          tileSize: 256,
          baseUnits: 256,
          zoomLevelMin: 1,
          zoomLevelMax: 19,
          minZoom: 3,
          maxZoom: 19,
          minDataZoom: 3,
          maxDataZoom: 19,
          zoomLevelBase: 18,
          errorUrl: e4.imgPath + "/blank.gif",
          bounds: new dT(
            new ht(-21364736, -10616832),
            new ht(23855104, 15859712)
          ),
          imgExtend: "png",
        };
      }
      if (hT._renderType !== "webgl") {
        var T = dJ(
          hT.platform,
          '<div style="position:absolute;z-index:' + this.zIndex + '"></div>'
        );
        T.style.display = "";
        T.style.left = Math.ceil(-hT.offsetX + hT.width / 2) + "px";
        T.style.top = Math.ceil(-hT.offsetY + hT.height / 2) + "px";
        this.tilesDiv = T;
      }
      this.isCanvasMap = hT.isCanvasMap();
      this.lastZoom = hT.getZoom();
    },
    remove: function() {
      if (this.tilesDiv && this.tilesDiv.parentNode) {
        this.tilesDiv.innerHTML = "";
        this.tilesDiv.parentNode.removeChild(this.tilesDiv);
      }
      delete this.tilesDiv;
    },
    getCopyright: function() {
      return this.copyright;
    },
    getMapType: function() {
      return this.mapType;
    },
    setZIndex: function(e) {
      this.zIndex = e;
      if (this.tilesDiv) {
        this.tilesDiv.style.zIndex = e;
      }
    },
  });
  function c6(i, e, T) {
    this.bounds = i;
    this.content = e;
    this.mapType = T;
  }
  c6.inherits(ee, "Copyright");
  var gp = {
    get: function(e) {
      if (!gp.singleton) {
        gp.singleton = new aj(e);
      }
      return gp.singleton;
    },
  };
  function aj(i) {
    this._map = i;
    this._tileMgr = i.tileMgr;
    this._animationDiv = null;
    this._preAnimationDiv = null;
    this._animation = null;
    this._baseLayerDiv = null;
    this._transformStyleName = a9.ifSupportCSS3("transform", true);
    this._transformOriginStyleName = a9.ifSupportCSS3("transformOrigin", true);
    this._preZoomTimes = 1;
    this._preRenderTick = 1;
    this._enableCanvas2dMap = !!(i.getRenderType() === "canvas");
    this._isIE9 = !!(D.Browser.ie === 9);
    var e = this;
    i.addEventListener("maptypechange", function() {
      e.hide();
    });
    i.addEventListener("load", function() {
      e.hide();
    });
  }
  D.extend(aj.prototype, {
    prepareLayer: function() {
      var hS = this._map;
      var e = this._tileMgr;
      this._canvas2dMapMgr = hS.canvas2dMapMgr;
      var T = (this._baseLayerDiv = e.tilesDiv);
      if (!this._animationDiv) {
        var i = this._preAnimationDiv;
        if (i) {
          i.parentNode && i.parentNode.removeChild(i);
          this._preAnimationDiv = null;
        }
        this._preAnimationDiv = this._animationDiv = T.cloneNode(true);
        hS.platform.insertBefore(this._animationDiv, hS.platform.firstChild);
      }
      this.show();
    },
    prepareAniParam: function() {
      var hS = this._animationDiv;
      if (!hS) {
        return;
      }
      var e = hS.children.length;
      var T;
      this._zoomAniInfo = [];
      for (var hT = e - 1; hT > -1; hT--) {
        var hU = {};
        T = hS.children[hT].style;
        hU.top = parseInt(T.top, 10);
        hU.left = parseInt(T.left, 10);
        this._zoomAniInfo[hT] = hU;
      }
    },
    prepareLabelLayer: function() {
      var hT = this._map;
      if (this._enableCanvas2dMap && hT.canvas2dMapMgr) {
        if (this.touchZoomLabelCanvas) {
          this.touchZoomLabelCanvas.parentNode.removeChild(
            this.touchZoomLabelCanvas
          );
        }
        var i = hT.canvas2dMapMgr._labelCanvas;
        this.touchZoomLabelCanvas = i.cloneNode(false);
        var e = this.touchZoomLabelCanvas.getContext("2d");
        e.drawImage(i, 0, 0);
        hT.platform.insertBefore(
          this.touchZoomLabelCanvas,
          hT.platform.firstChild
        );
        var hS = parseInt(i.style.left, 10);
        var T = parseInt(i.style.top, 10);
        this.touchZoomLabelCanvas.style.zIndex = 9;
        this.touchZoomLabelCanvas.style[this._transformOriginStyleName] =
          this._fixPosition.x -
          (hT.offsetX + hS) +
          "px " +
          (this._fixPosition.y - (hT.offsetY + T)) +
          "px";
        i.style.visibility = "hidden";
      }
    },
    show: function() {
      if (this._animationDiv) {
        this._animationDiv.style.visibility = "";
      }
    },
    showLabel: function() {
      var i = this._map;
      if (this._enableCanvas2dMap && i.canvas2dMapMgr) {
        var e = i.canvas2dMapMgr._labelCanvas;
        if (e) {
          e.style.visibility = "";
        }
        if (this.touchZoomLabelCanvas) {
          this.touchZoomLabelCanvas.style.zIndex = -2;
          this.touchZoomLabelCanvas.style.visibility = "hidden";
        }
      }
    },
    hide: function() {
      if (this._animationDiv) {
        this._animationDiv.style.visibility = "hidden";
      }
      if (this._preAnimationDiv) {
        this._preAnimationDiv.style.visibility = "hidden";
      }
    },
    hideNonAnimationLayers: function() {
      var hS = this._map;
      if (hS.getRenderType() === "dom") {
        if (hS.overlayDiv) {
          hS.overlayDiv.style.visibility = "hidden";
        }
        if (hS.overlayDivEx) {
          hS.overlayDivEx.style.visibility = "hidden";
        }
      }
      var hU = hS.tileMgr.tileLayers;
      var hT;
      for (var T = 0, e = hU.length; T < e; T++) {
        hT = hU[T];
        hT.tilesDiv.style.visibility = "hidden";
      }
    },
    showNonAnimationLayers: function() {
      var hS = this._map;
      if (hS.getRenderType() === "dom") {
        if (hS.overlayDiv) {
          hS.overlayDiv.style.visibility = "";
        }
        if (hS.overlayDivEx) {
          hS.overlayDivEx.style.visibility = "";
        }
      }
      var hU = hS.tileMgr.tileLayers;
      var hT;
      for (var T = 0, e = hU.length; T < e; T++) {
        hT = hU[T];
        hT.tilesDiv.style.visibility = "";
      }
    },
    setFixPosition: function(e) {
      this._fixPosition = e;
    },
    setZoom: function(e, hY) {
      var hV = this._fixPosition;
      var h4 = this._map;
      var h5 = this._baseLayerDiv;
      var hW = {
        x: hV.x - parseInt(h5.style.left, 10) - h4.offsetX,
        y: hV.y - parseInt(h5.style.top, 10) - h4.offsetY,
      };
      var hS = this._animationDiv;
      if (!hS) {
        return;
      }
      var h2 = hS.children.length;
      var h0;
      var h3 = this._transformStyleName;
      var hU = this._transformOriginStyleName;
      var h6 = this;
      var h8;
      var hX;
      for (var h1 = h2 - 1; h1 > -1; h1--) {
        var hZ = this._zoomAniInfo[h1];
        h0 = hS.children[h1].style;
        var hT = hZ.left - hW.x;
        var T = hZ.top - hW.y;
        hZ.dx = hT * e - hT;
        hZ.dy = T * e - T;
        hZ.preDx = hT - hT;
        hZ.preDy = T - T;
        h8 = hZ.preDx + (hZ.dx - hZ.preDx);
        hX = hZ.preDy + (hZ.dy - hZ.preDy) + hY;
        h0.left = hZ.left + h8 + "px";
        h0.top = hZ.top + hX + "px";
        h0.width = h0.height = 256 * e + "px";
      }
      if (this._enableCanvas2dMap) {
        var h7 = !h6._isIE9
          ? "translate3d(0px, " + hY + "px, 0) scale(" + e + ")"
          : "translate(0px, " + hY + "px) scale(" + e + ")";
        this.touchZoomLabelCanvas.style[h3] = h7;
      }
    },
    setZoomFinish: function() {
      this._animationDiv = null;
    },
    startAnimation: function(hV) {
      this.prepareLayer();
      this.hideNonAnimationLayers();
      var ie = this._map;
      if (this.touchZoomLabelCanvas) {
        this.touchZoomLabelCanvas.style.display = "none";
      }
      hV = hV || {};
      var ic = hV.zoomCount || 0;
      var h0 = hV.fixPosition;
      var ia = hV.fixMCPosition;
      var hY = hV.pixOffset;
      this._zoomCount = ic;
      var hS = ie.getZoom();
      var id = hS + ic;
      var e = ie.config.enableContinuousZoom;
      var h4 = 0.5;
      var hZ = 5;
      var T = Math.pow(2, ic);
      var ih = this._baseLayerDiv;
      var h1 = {
        x: h0.x - parseInt(ih.style.left, 10) - ie.offsetX,
        y: h0.y - parseInt(ih.style.top, 10) - ie.offsetY,
      };
      var hW = this._animationDiv;
      var h8 = hW.children.length;
      var ij = this._preZoomTimes;
      var ib = [];
      var h9 = this._transformStyleName;
      var hX = this._transformOriginStyleName;
      for (var h7 = h8 - 1; h7 > -1; h7--) {
        var h5 = {};
        var h6 = hW.children[h7].style;
        h5.top = parseInt(h6.top, 10);
        h5.left = parseInt(h6.left, 10);
        var hU = h5.left - h1.x;
        var hT = h5.top - h1.y;
        h5.dx = hU * T - hU;
        h5.dy = hT * T - hT;
        h5.preDx = hU * ij - hU;
        h5.preDy = hT * ij - hT;
        ib[h7] = h5;
      }
      var ig = this;
      var h3;
      var ii;
      var h2;
      this._zoomAni = new p({
        fps: 60,
        duration: e ? 500 : 1,
        transition: function(i) {
          i = (i * hZ) / (2 * h4);
          return hZ * i - h4 * i * i;
        },
        render: function(iu) {
          iu = (iu * (4 * h4)) / (hZ * hZ);
          h3 = ij + iu * (T - ij);
          var il = hS + eD(h3);
          var ir = null;
          var iq = 0;
          var iv = 0;
          if (hV.onAnimationBeforeLooping) {
            var iw = hV.onAnimationBeforeLooping(iu, il);
            ir = iw.loopingCenter;
            iq = iw.yDiff;
            iv = iw.totalYDiff;
          }
          for (var im = ib.length - 1; im > -1; im--) {
            var io = ib[im];
            if (hW.children[im]) {
              var it = hW.children[im].style;
              ii = io.preDx + (io.dx - io.preDx) * iu - hY.width * iu;
              h2 = io.preDy + (io.dy - io.preDy) * iu - hY.height * iu + iq;
              it.left = io.left + ii + "px";
              it.top = io.top + h2 + "px";
              it.height = it.width = 256 * h3 + "px";
            }
          }
          var ik = hY.width * iu;
          var ip = hY.height * iu;
          if (ie.isRestrict) {
            ig._enableCanvas2dMap && ig._canvas2dMapMgr.clearLabel();
          } else {
            ig._enableCanvas2dMap &&
              ig._canvas2dMapMgr.drawLabel(
                h3,
                h0,
                hS,
                id,
                ic,
                iu,
                ik,
                ip,
                iv,
                iq
              );
          }
          ig._preZoomTimes = h3;
          ig._preRenderTick = iu;
          hV.onAnimationLooping && hV.onAnimationLooping(iu, il, ir);
        },
        finish: function() {
          ig._preZoomTimes = 1;
          ig._zoomAni = null;
          ig._animationDiv = null;
          hV.onAnimationFinish && hV.onAnimationFinish();
          ig.showNonAnimationLayers();
        },
      });
      return this._zoomAni;
    },
    stopAnimation: function() {
      if (this._zoomAni) {
        this._zoomAni.stop();
        this._zoomAni = null;
      }
    },
  });
  function c(e) {
    this._initVars(e);
    this._initColorCanvas();
    this._bindEvent(e);
  }
  D.extend(c.prototype, {
    _initVars: function(e) {
      this._map = e._map;
      this._canvas2dMapMgr = e;
      this._labelCtx = e._labelCtx;
      this.ratio = this._map.config.ratio;
      this.sizeRatio = this.ratio > 1 ? 2 : 1;
      this.RANK1 = 1000000;
      this.RANK2 = 2000000;
      this.RANK3 = 3000000;
      this.RANK4 = 4000000;
      this.RANK5 = 5000000;
    },
    _initColorCanvas: function() {
      var i = 256,
        T = U("canvas"),
        e = T.style;
      e.width = i + "px";
      e.height = i + "px";
      T.width = i;
      T.height = i;
      this._colorCvsSize = i;
      this._colorCvs = T;
      this._colorCtx = T.getContext("2d");
    },
    getLabelImageData: function(h5) {
      var h4 = h5.textImg;
      var T = h5.textPos;
      var h2 = this.ratio;
      var h0 = this.sizeRatio / h2;
      var hT = this._colorCtx;
      var hX = this._colorCvsSize;
      hT.clearRect(0, 0, hX, hX);
      var hZ = 0;
      var e = 0;
      var hW = 0;
      for (var hY = 0; hY < T.length; hY++) {
        if (T[hY].width > hZ) {
          hZ = T[hY].width;
          e = hY;
          hW = T[hY].drawX;
        }
      }
      hZ /= h0;
      var h1 = 0;
      for (var hY = 0, hV = T.length; hY < hV; hY++) {
        var h3 = T[hY];
        var h6;
        if (hY === e) {
          h6 = 0;
        } else {
          h6 = h3.drawX - hW;
        }
        hT.drawImage(
          h4,
          h3.srcX,
          h3.srcY,
          h3.width,
          h3.height,
          h6,
          h1,
          h3.width / h0,
          h3.height / h0
        );
        if (h3.width / h0 > hZ) {
          hZ = h3.width / h0;
        }
        h1 += h3.height / h0 + 2 * h2;
      }
      var hS = hT.getImageData(0, 0, hZ, h1);
      var hU = hT.getImageData(0, 0, hZ, h1);
      return [hS, hU];
    },
    _bindEvent: function(i) {
      var e = this,
        T = i._map;
      T.addEventListener("onspotmouseover", function(hV) {
        if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
          return;
        }
        if (hV.spots.length > 0) {
          var hU = hV.spots[0].userdata.uid;
          var hT = hV.spots[0].userdata.name;
          var hS = e.findLabelByUid(hU, hT);
          hS && e._toHighLightColor(hS);
        }
      });
      T.addEventListener("onspotmouseout", function(hV) {
        if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
          return;
        }
        if (hV.spots.length > 0) {
          var hU = hV.spots[0].userdata.uid;
          var hT = hV.spots[0].userdata.name;
          var hS = e.findLabelByUid(hU, hT);
          hS && e._toDefaultColor(hS);
        }
      });
      T.addEventListener("onspotclick", function(hV) {
        if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
          return;
        }
        if (hV.spots && hV.spots.length > 0) {
          var hU = hV.spots[0].userdata.uid;
          var hT = hV.spots[0].userdata.name;
          var hS = e.findLabelByUid(hU, hT);
          hS && e._changeBaseMapState(hS);
        } else {
          e._recoverNormalState();
        }
      });
      T.on("spot_status_reset", function() {
        e._recoverNormalState();
      });
      T.on("spot_highlight", function(hT) {
        var hS = e.findLabelByUid(hT.uid);
        hS && e._changeBaseMapState(hS);
      });
    },
    _getTextBound: function(h3) {
      if (!h3.textPos) {
        return null;
      }
      var h1 = this.ratio;
      var hZ = this.sizeRatio / h1;
      var T = h3.textPos;
      var h2 = h3.baseDrawX;
      var h0 = h3.baseDrawY;
      var hX = h2 * h1 + (T[0].drawX - h2) / hZ;
      var hV = h0 * h1 + (T[0].drawY - h0) / hZ;
      var hT = hX + T[0].width / hZ;
      var e = hV + T[0].height / hZ;
      for (var hY = 0, hW = T.length; hY < hW; hY++) {
        var h4 = T[hY];
        var hU = h2 * h1 + (h4.drawX - h2) / hZ;
        if (hU < hX) {
          hX = hU;
        }
        var hS = h0 * h1 + (h4.drawY - h0) / hZ;
        if (hS < hV) {
          hV = hS;
        }
        if (hU + h4.width > hT) {
          hT = hU + h4.width;
        }
        if (hS + h4.height > e) {
          e = hS + h4.height;
        }
      }
      return [hX, hV, hT, e];
    },
    _toHighLightColor: function(T) {
      if (T._tempRank && T._tempRank == this.RANK5) {
        return;
      }
      var hW = this._getTextBound(T);
      if (!hW) {
        return;
      }
      var hS = Math.round(hW[0]);
      var i = Math.round(hW[1]);
      var e = this.getLabelImageData(T);
      var hU = e[0];
      var hT = e[1];
      var hV = this._canvas2dMapMgr.getFilterImageData(hU, this.RANK5);
      T._oldImgData = hT;
      this._labelCtx.putImageData(hV, hS, i);
    },
    _toDefaultColor: function(e) {
      if (e._tempRank && e._tempRank == this.RANK5) {
        return;
      }
      if (e._oldImgData) {
        var i = this.sizeRatio;
        var T = this._getTextBound(e);
        if (!T) {
          return;
        }
        this._labelCtx.putImageData(
          e._oldImgData,
          Math.round(T[0]),
          Math.round(T[1])
        );
        e._oldImgData = null;
      }
    },
    _changeBaseMapState: function(hS) {
      var T = this._canvas2dMapMgr;
      var i = hS.guid;
      var e = hS.guidExt;
      var hT = { guid: i, name: hS.name, guidExt: e };
      T._labelStrategy.setStrategyInfo(hT);
      T._loadData();
    },
    _recoverNormalState: function() {
      var e = this._canvas2dMapMgr;
      e._labelStrategy.setStrategyInfo(null);
      e._loadData();
    },
    findLabelByUid: function(hU, hS) {
      var hW = this._canvas2dMapMgr,
        e = hW._computedLabel;
      for (var hT = 0, T = e.length; hT < T; hT++) {
        var hV = e[hT];
        if (!hW.isClickableLabel(hV)) {
          continue;
        }
        if (hU && hV.guid === hU) {
          return hV;
        }
        if (hS && hV.name === hS) {
          return hV;
        }
      }
      return null;
    },
  });
  function ed(e) {
    this._initVars(e);
  }
  D.extend(ed.prototype, {
    _initVars: function(e) {
      this._map = e._map;
      this._canvas2dMapMgr = e;
      this.ratio = this._map.config.ratio;
      this._strategyInfo = null;
      this.RANK1 = 1000000;
      this.RANK2 = 2000000;
      this.RANK3 = 3000000;
      this.RANK4 = 4000000;
      this.RANK5 = 5000000;
    },
    setStrategyInfo: function(e) {
      this._strategyInfo = e;
    },
    preComputeLabel: function(hY, iS, iB, ia, iM, i6) {
      var iv = [],
        h6 = hY._centerX,
        h4 = hY._centerY,
        i7 = ia * iM;
      var iH = this.ratio;
      var hX = this._map.getZoom();
      var ip = 0;
      if (hX === 5) {
        ip = 4;
      }
      if (hX === 8) {
        ip = -6;
      }
      hY.sort(function(i8, i) {
        if (i8.x * i8.y < i.x * i.y) {
          return -1;
        } else {
          return 1;
        }
      });
      for (var ir = 0, im = hY.length; ir < im; ir++) {
        var iX = hY[ir],
          ih = iX.x,
          id = iX.y,
          ib = iX.z;
        var ij = d5.calcLoopParam(ih, ib).offsetX;
        var iF = ih * i7,
          iE = (id + 1) * i7,
          hS = (iF - h6) / ia + iS / 2 + ij,
          T = (h4 - iE) / ia + iB / 2;
        for (var io = 0, i1 = iX.length; io < i1; io++) {
          var h0 = iX[io],
            h7 = undefined,
            h5 = undefined,
            iZ = undefined,
            iY = undefined;
          var iO = (h0.baseDrawX = hS + h0.baseX);
          var iN = (h0.baseDrawY = T + h0.baseY);
          if (h0.type == "fixed") {
            var iz = h0.iconPos,
              h9 = h0.textPos,
              i3 = h0.textImg;
            if (iz) {
              iz.drawX = hS + iz.destX;
              iz.drawY = T + iz.destY;
              h7 = iz.drawX;
              h5 = iz.drawY;
              iZ = iz.drawX + iz.width;
              iY = iz.drawY + iz.height;
            }
            if (h9 && i3) {
              for (var iP = 0; iP < h9.length; iP++) {
                var i2 = h9[iP];
                i2.drawX = hS + i2.destX;
                i2.drawY = T + i2.destY;
                if (!h7) {
                  h7 = i2.drawX;
                  h5 = i2.drawY;
                  iZ = i2.drawX + i2.width;
                  iY = i2.drawY + i2.height;
                } else {
                  if (i2.drawX < h7) {
                    h7 = i2.drawX;
                  }
                  if (i2.drawY < h5) {
                    h5 = i2.drawY;
                  }
                  if (i2.drawX + i2.width > iZ) {
                    iZ = i2.drawX + i2.width;
                  }
                  if (i2.drawY + i2.height > iY) {
                    iY = i2.drawY + i2.height;
                  }
                }
              }
            }
          } else {
            h0.tileX = hS;
            h0.tileY = T;
            h7 = hS + h0.minXOriginal;
            h5 = T + h0.minYOriginal;
            iZ = hS + h0.maxXOriginal;
            iY = T + h0.maxYOriginal;
          }
          if (h7 != undefined) {
            var iR = iO + (h7 - iO) / iH;
            var iQ = iN + (h5 - iN) / iH;
            var it = iO + (iZ - iO) / iH;
            var iq = iN + (iY - iN) / iH;
            h0.minX = iR;
            h0.minY = iQ;
            h0.maxX = it;
            h0.maxY = iq;
            var iV = (iR + it) / 2,
              iU = (iQ + iq) / 2,
              iC = h6 + (iV - iS / 2) * ia,
              iA = h4 + (iB / 2 - iU) * ia;
            h0.geoX = iC;
            h0.geoY = iA;
            iv.push(h0);
          }
        }
      }
      if (i6) {
        for (var ir = 0, im = i6.length; ir < im; ir++) {
          var il = i6[ir];
          var iK = il[0];
          var h1 = il[1];
          var iz = iK.iconPos;
          var hV = iz.geoX;
          var hT = iz.geoY;
          var iO = (hV - h6) / ia + iS / 2;
          var iN = (h4 - hT) / ia + iB / 2;
          var h7 = iO + iz.destX;
          var h5 = iN + iz.destY;
          var iZ = h7 + iz.width;
          var iY = h5 + iz.height;
          iK.textPos = iK.textPos || iK._textPos;
          var h9 = iK.textPos;
          var iT = h9[0];
          var ig = iO + iT.destX;
          var h3 = iN + iT.destY;
          if (h3 < h5) {
            h5 = h3;
          }
          if (ig + iT.width > iZ) {
            iZ = ig + iT.width;
          }
          if (h3 + iT.height > iY) {
            iY = h3 + iT.height;
          }
          if (h9.length === 2) {
            var ie = h9[1];
            var ic = iO + ie.destX;
            var h2 = iN + ie.destY;
            if (h2 < h5) {
              h5 = h2;
            }
            if (ic + ie.width > iZ) {
              iZ = ic + ie.width;
            }
            if (h2 + ie.height > iY) {
              iY = h2 + ie.height;
            }
          }
          iK._tempBounds = [h7, h5, iZ, iY];
          var iz = h1.iconPos;
          var hV = iz.geoX;
          var hT = iz.geoY;
          var iO = (hV - h6) / ia + iS / 2;
          var iN = (h4 - hT) / ia + iB / 2;
          var h7 = iO + iz.destX;
          var h5 = iN + iz.destY;
          var iZ = h7 + iz.width;
          var iY = h5 + iz.height;
          h1.textPos = h1.textPos || h1._textPos;
          var h9 = h1.textPos;
          var iT = h9[0];
          var ig = iO + iT.destX;
          var h3 = iN + iT.destY;
          if (ig < h7) {
            h7 = ig;
          }
          if (h3 < h5) {
            h5 = h3;
          }
          if (h3 + iT.height > iY) {
            iY = h3 + iT.height;
          }
          if (h9.length === 2) {
            var ie = h9[1];
            var ic = iO + ie.destX;
            var h2 = iN + ie.destY;
            if (ic < h7) {
              h7 = ic;
            }
            if (h2 < h5) {
              h5 = h2;
            }
            if (h2 + ie.height > iY) {
              iY = h2 + ie.height;
            }
          }
          h1._tempBounds = [h7, h5, iZ, iY];
        }
        for (var ir = 0, im = i6.length; ir < im; ir++) {
          var il = i6[ir];
          var iK = il[0];
          var h1 = il[1];
          if (ir === 0 && h1.textPos) {
            h1._textPos = h1.textPos;
            delete h1.textPos;
          }
          var iW = iK;
          if (!iK.textPos && h1.textPos) {
            iW = h1;
          }
          var i0 = iW._tempBounds;
          for (io = ir + 1; io < im; io++) {
            var ik = i6[io];
            var iw = ik[0];
            var i5 = ik[1];
            var h8 = 0;
            var i4 = iw._tempBounds;
            if (
              !(
                i0[2] < i4[0] ||
                i0[0] > i4[2] ||
                i0[3] < i4[1] ||
                i0[1] > i4[3]
              )
            ) {
              h8++;
              if (iw.textPos) {
                iw._textPos = iw.textPos;
                delete iw.textPos;
              }
            }
            var i4 = i5._tempBounds;
            if (
              !(
                i0[2] < i4[0] ||
                i0[0] > i4[2] ||
                i0[3] < i4[1] ||
                i0[1] > i4[3]
              )
            ) {
              h8++;
              if (i5.textPos) {
                i5._textPos = i5.textPos;
                delete i5.textPos;
              }
            }
            if (h8 >= 2) {
              if (iW.textPos) {
                iW._textPos = iW.textPos;
                delete iW.textPos;
              }
            }
          }
        }
        for (var ir = 0, im = i6.length; ir < im; ir++) {
          var il = i6[ir];
          var iK = il[0];
          var h1 = il[1];
          var ix = iK;
          if (!iK.textPos && h1.textPos) {
            ix = h1;
          }
          var iz = ix.iconPos;
          var hV = iz.geoX;
          var hT = iz.geoY;
          var iO = (ix.baseDrawX = (hV - h6) / ia + iS / 2);
          var iN = (ix.baseDrawY = (h4 - hT) / ia + iB / 2);
          iz.drawX = iO + iz.destX;
          iz.drawY = iN + iz.destY;
          var h7 = iz.drawX;
          var h5 = iz.drawY;
          var iZ = iz.drawX + iz.width;
          var iY = iz.drawY + iz.height;
          var h9 = ix.textPos;
          if (h9) {
            var iT = h9[0];
            iT.drawX = iO + iT.destX;
            iT.drawY = iN + iT.destY;
            if (iT.drawX < h7) {
              h7 = iT.drawX;
            }
            if (iT.drawY < h5) {
              h5 = iT.drawY;
            }
            if (iT.drawX + iT.width > iZ) {
              iZ = iT.drawX + iT.width;
            }
            if (iT.drawY + iT.height > iY) {
              iY = iT.drawY + iT.height;
            }
            if (h9.length === 2) {
              var ie = h9[1];
              ie.drawX = iO + ie.destX;
              ie.drawY = iN + ie.destY;
              if (ie.drawX < h7) {
                h7 = ie.drawX;
              }
              if (ie.drawY < h5) {
                h5 = ie.drawY;
              }
              if (ie.drawX + ie.width > iZ) {
                iZ = ie.drawX + ie.width;
              }
              if (ie.drawY + ie.height > iY) {
                iY = ie.drawY + ie.height;
              }
            }
          }
          var iR = iO + (h7 - iO) / iH;
          var iQ = iN + (h5 - iN) / iH;
          var it = iO + (iZ - iO) / iH;
          var iq = iN + (iY - iN) / iH;
          ix.minX = iR;
          ix.minY = iQ;
          ix.maxX = it;
          ix.maxY = iq;
          var iJ = (iR + it) / 2;
          var iI = (iQ + iq) / 2;
          var hW = h6 + (iJ - iS / 2) * ia;
          var hU = h4 + (iB / 2 - iI) * ia;
          ix.geoX = hW;
          ix.geoY = hU;
          iv.push(ix);
        }
      }
      var iL = this._strategyInfo;
      if (iL) {
        var iu = iL.guid;
        var iD = iL.name;
        var ii = iL.guidExt;
        for (var ir = 0, im = iv.length; ir < im; ir++) {
          var hZ = iv[ir];
          delete hZ._tempRank;
          if (
            !this._canvas2dMapMgr.isClickableLabel(hZ) ||
            (ii === 1 && !hZ.guidExt)
          ) {
            continue;
          }
          if ((iu && iu === hZ.guid) || (iD && iD === hZ.name)) {
            hZ._tempRank = this.RANK5;
          }
        }
      } else {
        for (var ir = 0, im = iv.length; ir < im; ir++) {
          var hZ = iv[ir];
          if (hZ.type == "line" || !hZ.iconPos) {
            continue;
          }
          delete hZ._tempRank;
        }
      }
      iv.sort(function(i9, i8) {
        var ja = i9._tempRank ? i9._tempRank : i9.rank,
          i = i8._tempRank ? i8._tempRank : i8.rank;
        if (ja === i) {
          return i9.baseX - i8.baseX;
        }
        return i - ja;
      });
      for (var ir = 0, im = iv.length; ir < im; ir++) {
        var iW = iv[ir];
        iW.isDel = false;
        iW.isFadeout = false;
        iW._schedule = 0;
        iW._isIgnore = false;
        iW.arrIntersectIndex = [];
        for (io = ir + 1; io < im; io++) {
          var iy = iv[io];
          if (
            !(
              iW.maxX - ip < iy.minX ||
              iW.minX > iy.maxX - ip ||
              iW.maxY - ip < iy.minY ||
              iW.minY > iy.maxY - ip
            )
          ) {
            iW.arrIntersectIndex.push(io);
          }
        }
      }
      for (var ir = 0, im = iv.length; ir < im; ir++) {
        var hZ = iv[ir];
        if (hZ.isDel == false) {
          var e = hZ.arrIntersectIndex;
          for (var io = 0, i1 = e.length; io < i1; io++) {
            var iG = iv[e[io]];
            iG.isDel = true;
            if (iG.guidExt === 1) {
              iG.isDel = false;
            }
          }
        }
      }
      return iv;
    },
  });
  function ai(e) {
    this._map = e;
    this._initCanvas();
    this._initVars();
    this._bindEvent();
    this._tileType = cM.getInstance("na");
  }
  bp.register(function(i) {
    if (i.getRenderType() === "canvas") {
      var e = i.config.style;
      if (bp["FeatureStyle" + e]) {
        i.canvas2dMapMgr = new ai(i);
      } else {
        i.loadMapStyleFiles(function() {
          i.canvas2dMapMgr = new ai(i);
          i.canvas2dMapMgr._loadData();
        });
      }
    }
  });
  D.extend(ai.prototype, {
    _initCanvas: function() {
      var hV = this._map,
        hT = hV.getSize(),
        hS = hT.width,
        i = hT.height,
        e = hV.platform,
        hW = U("canvas"),
        hU = hW.style;
      var T = (this.ratio = hV.config.ratio);
      this._width = hS;
      this._height = i;
      hU.cssText =
        "position: absolute;left:0;top:0;width:" +
        hS +
        "px;height:" +
        i +
        "px;z-index:100;";
      hW.width = hS * T;
      hW.height = i * T;
      this._labelCanvas = hW;
      this._labelCtx = hW.getContext("2d");
      e.appendChild(hW);
    },
    _initVars: function() {
      var e = aE("ditu", "normal");
      this._udt = e.udt;
      this._version = e.ver;
      this._labelDataUrls = b7.B_NORMAL_MAP.vectorTileUrls;
      this._style = bp["FeatureStyle" + this._map.config.style];
      this._labelCount = 0;
      this._vectorDrawLib = new a1(this);
      this._cache = { maxNum: 500, delNum: 50, arrCache: [] };
      this._computedLabel = null;
      this._spotData = null;
      this._labelStrategy = new ed(this);
      this._labelClick = new c(this);
      this._biz = new gO(this);
      this._map.temp.isPermitSpotOver = true;
      this.labelStyleParam = "pl";
      if (this._map.getMapType() === BMAP_SATELLITE_MAP) {
        this.labelStyleParam = "sl";
      }
      this.statRequestCount = 0;
      this.statResponseCount = 0;
    },
    _resizeHandler: function(hU) {
      var hW = this,
        i = hW._map,
        hT = i.getSize(),
        T = hT.width,
        hY = hT.height;
      var hV = this.ratio;
      var hZ = this._labelCanvas,
        hS = hZ.style;
      hS.width = T + "px";
      hS.height = hY + "px";
      hZ.width = T * hV;
      hZ.height = hY * hV;
      hW._width = T;
      hW._height = hY;
      var hX = true;
      hW._loadData(hX);
    },
    _bindEvent: function() {
      var e = this,
        i = e._map;
      i.addEventListener("load", function(T) {
        e.clearLabel();
        e._loadData();
      });
      i.addEventListener("zoomend", function(T) {
        if (!T.notClearLabel) {
          e.clearLabel();
        }
        e._loadData();
      });
      i.addEventListener("moveend", function(T) {
        e._loadData();
      });
      i.addEventListener("resize", function(T) {
        e._resizeHandler(T);
      });
      i.addEventListener("maptypechange", function(T) {
        if (T.mapType === BMAP_EARTH_MAP) {
          e.hideLabelCanvas();
        } else {
          e.showLabelCanvas();
          if (T.mapType === BMAPGL_NORMAL_MAP) {
            e.labelStyleParam = "pl";
          } else {
            if (T.mapType === BMAP_SATELLITE_MAP) {
              e.labelStyleParam = "sl";
            }
          }
          e._loadData();
        }
      });
      i.addEventListener("streetlayer_show", function(T) {
        if (this.isCanvasMap()) {
          e.showLabelCanvas();
        }
      });
      i.addEventListener("streetlayer_hide", function(T) {
        if (this.isCanvasMap()) {
          e.hideLabelCanvas();
        }
      });
      i.addEventListener("loadbizdata", function(hS) {
        var T = hS.data;
        e._biz.proecessBizData(T, function() {
          e.updateLabel();
        });
      });
      i.addEventListener("unloadbizdata", function(T) {
        e._biz.clearBizData();
        e.updateLabel();
      });
      e.isDrawText = false;
      setTimeout(function() {
        if (!e.isDrawText) {
          i.dispatchEvent(new bc("onmapwhitescreen"));
        }
      }, 10000);
    },
    getStyle: function() {
      return this._style;
    },
    _getZoomUnits: function(e) {
      return Math.pow(2, 18 - e);
    },
    _createCacheForm: function(T, hW, hV, i) {
      var hU = this;
      var e = hU._cache;
      var hS = e.arrCache;
      var hX = this._getLabelId(T, hW, hV, i);
      var hT = { id: hX, updateLabelCounter: 0 };
      hS.push(hT);
      hS[hX] = hT;
      return hT;
    },
    _getLabelId: function(i, hS, T, e) {
      return (
        "_" + i + "_" + hS + "_" + T + "_" + e + "_" + this.labelStyleParam
      );
    },
    _getCache: function(i, hS, T, e) {
      return this._cache.arrCache[this._getLabelId(i, hS, T, e)];
    },
    _setCacheValue: function(hT, h6, h4, hS, hZ) {
      var h1 = this;
      var e = h1._cache;
      var hV = e.arrCache;
      var hX = e.maxNum;
      var hU = e.delNum;
      var h5 = this._getLabelId(hT, h6, h4, hS);
      var h0 = hV[h5];
      if (hZ) {
        h0.lb = hZ;
      }
      if (hV.length > hX) {
        var T = hV.splice(0, hU);
        for (var hY = 0, hW = T.length; hY < hW; hY++) {
          var h2 = T[hY],
            h3 = h2.id;
          if (hV[h3].lb) {
            hV[h3].lb = null;
          }
          hV[h3] = null;
          delete hV[h3];
        }
        T = null;
      }
    },
    _loadData: function(h4) {
      var iq = this._map;
      if (!iq.isCanvasMap()) {
        return;
      }
      var hX = iq.getCenterIn();
      var ip = d5.calcLoopCenterPoint(hX);
      var hW = this._tileType;
      var hZ = this._width / 2;
      var ib = this._height;
      var ic = iq.getZoom();
      var h8 = hW.getDataZoom(ic);
      var h1 = iq.getZoomUnits(ic);
      var h7 = h1 * hZ;
      var io = ip.lng - h7;
      var im = ip.lng + h7;
      var h5 = d5.isAddWidth(io, im);
      hZ = h5 ? hZ * 1.5 : hZ;
      var h6 = hW.getTileSize(ic);
      var hT = hW.getMercatorSize(ic, h8);
      var h0 = Math.floor(ip.lng / hT);
      var h2 = Math.floor(ip.lat / hT);
      var hU = [
        h0,
        h2,
        ((ip.lng - h0 * hT) / hT) * h6,
        ((ip.lat - h2 * hT) / hT) * h6,
      ];
      var ig = hU[0] - Math.ceil((hZ - hU[2]) / h6);
      var ik = hU[1] - Math.ceil((ib / 2 - hU[3]) / h6);
      var ia = hU[0] + Math.ceil((hZ + hU[2]) / h6);
      var ih = hU[1] + Math.ceil((ib / 2 + hU[3]) / h6);
      iq.temp.isPermitSpotOver = false;
      var e = [];
      for (var ij = ig; ij < ia; ij++) {
        for (var ii = ik; ii < ih; ii++) {
          e.push([ij, ii, h8]);
          var h9 = "id_" + ij + "_" + ii + "_" + ic;
          e[h9] = true;
        }
      }
      e._zoom = h8;
      e = d5.calcLoopTiles(e, ic);
      e.sort(
        (function(i) {
          return function(id, it) {
            return (
              0.4 * Math.abs(id[0] - i[0]) +
              0.6 * Math.abs(id[1] - i[1]) -
              (0.4 * Math.abs(it[0] - i[0]) + 0.6 * Math.abs(it[1] - i[1]))
            );
          };
        })([hU[0], hU[1]])
      );
      var h3 = this._cache.arrCache;
      this._curViewLabels = [];
      var hS =
        "viewKey_" + Math.floor(hX.lng) + "_" + Math.floor(hX.lat) + "_" + ic;
      this.statRequestCount = 0;
      this.statResponseCount = 0;
      this._labelCount += e.length;
      var hY = ic;
      for (var ij = 0, ie = e.length; ij < ie; ij++) {
        var h0 = e[ij][0];
        var h2 = e[ij][1];
        var T = e[ij][2];
        var hV = this._getLabelId(h0, h2, T, hY);
        var il = h3[hV];
        if (!il) {
          il = this._createCacheForm(h0, h2, T, hY);
        }
        if (typeof il.lb === "undefined") {
          il.lb = null;
          this._loadLabelData(h0, h2, T, hY, h6, hS);
          this.statRequestCount++;
        } else {
          if (il.lb) {
            this._curViewLabels.push(il.lb);
            this._labelCount--;
          } else {
            if (h4) {
              this._loadLabelData(h0, h2, T, hY, h6, hS);
            }
            il.updateLabelCounter++;
          }
        }
      }
      if (this._labelCount === 0) {
        this.updateLabel();
      }
      var ir = this;
      if (ir.errorTimer) {
        clearTimeout(ir.errorTimer);
      }
      ir.errorTimer = setTimeout(function() {
        if (ir._labelCount !== 0) {
          ir._labelCount = 0;
          ir.updateLabel();
        }
        var it = new bc("onloaddatatimeout");
        var iu = 0;
        var id = 0;
        var iv = 0;
        var i = 0;
        if (ir.statRequestCount === ir.statResponseCount) {
          iu = 1;
        } else {
          id = 1;
        }
        if (id === 1) {
          i = ir.statRequestCount - ir.statResponseCount;
          iv = ir.statResponseCount;
        }
        it.noTimeoutCount = iu;
        it.timeoutCount = id;
        it.timeoutNoLoaded = i;
        it.timeoutLoaded = iv;
        ir._map.dispatchEvent(it);
      }, 500);
    },
    clearLabel: function() {
      var e = this._width;
      var T = this._height;
      var i = this.ratio;
      this._labelCtx.clearRect(0, 0, e * i, T * i);
    },
    updateLabel: function() {
      var i = this._map;
      var e = i.getCenterIn();
      var hS = this._width;
      var hV = this._height;
      var hY = i.getZoom();
      var hX = this._tileType.getTileSize(hY);
      var hW = this._getZoomUnits(hY);
      var T = this._labelCtx;
      this._labelCanvas.style.left = -i.offsetX + "px";
      this._labelCanvas.style.top = -i.offsetY + "px";
      var hU = this._curViewLabels;
      hU._centerX = e.lng;
      hU._centerY = e.lat;
      var hT = this._biz.bizLabels;
      this._computedLabel = this._labelStrategy.preComputeLabel(
        hU,
        hS,
        hV,
        hW,
        hX,
        hT
      );
      this._computedLabel._zoom = hY;
      this.clearLabel();
      this._vectorDrawLib.drawIconAndText(T, this._computedLabel, hY);
      this._addSpotData();
      i.temp.isPermitSpotOver = true;
      if (hU.length > 0) {
        this.isDrawText = true;
      }
    },
    _loadLabelData: function(h1, h0, hZ, T, h2, e) {
      var hU = h1.toString();
      var hS = h0.toString();
      var hW =
        "cbk_" +
        hU.replace("-", "_") +
        "_" +
        hS.replace("-", "__") +
        "_" +
        Math.floor(hZ);
      var h6 = eB + "." + hW;
      var h5 = this._labelDataUrls;
      var hY = Math.abs(h1 + h0) % h5.length;
      var ib = h5[hY];
      if (window.offLineIPAddress) {
        ib = window.offLineIPAddress + "pvd/";
      }
      var i = this.labelStyleParam;
      var h4 = "?qt=vtile";
      var h7 = "";
      if (this._map.config.style !== "default") {
        h7 = "&styleId=" + e4.mapStyleNameIdPair[this._map.config.style];
      }
      var h3 =
        "x={x}&y={y}&z={z}&udt={udt}&v={v}&styles={styles}" +
        h7 +
        "&textonly=1&textimg=1&scaler={scaler}&fn=" +
        encodeURIComponent(h6);
      var h8 = d5.calcLoopParam(h1, hZ).col;
      var hX = this.ratio > 1 ? 2 : 1;
      var hV = h3
        .replace(/{x}/, h8)
        .replace(/{y}/, h0)
        .replace(/{z}/, Math.floor(hZ))
        .replace(/{styles}/, i)
        .replace(/{udt}/, this._udt)
        .replace(/{v}/, this._version)
        .replace(/{scaler}/, hX);
      var hT = ib + h4 + "&param=" + window.encodeURIComponent(gm(hV));
      var ia = this;
      var h9 = ia._map;
      bp[hW] = function(ic) {
        ia._vectorDrawLib.parseLabelData(ic, h1, h0, hZ, T, h2, function(ii) {
          var ie = h9.getCenterIn();
          var ij = h9.getZoom();
          var il =
            "viewKey_" +
            Math.floor(ie.lng) +
            "_" +
            Math.floor(ie.lat) +
            "_" +
            ij;
          ia._labelCount--;
          var im = ia._getCache(h1, h0, hZ, T).updateLabelCounter;
          ia._labelCount -= im;
          var ig = ia._curViewLabels;
          if (il === e || (ia._labelCount < 0 && ij === hZ)) {
            ig.push(ii);
          }
          if (il === e) {
            ia.statResponseCount++;
          }
          if (ia._labelCount <= 0) {
            var id = new Date().getTime();
            ia.updateLabel();
            var ih = new Date().getTime();
            var ik = new bc("oncanvasmaploaded");
            ik.drawTime = ih - id;
            if (ia.statResponseCount === ia.statRequestCount) {
              ik.isAllLoadedDrawing = true;
            }
            h9.dispatchEvent(ik);
          }
          ia._setCacheValue(h1, h0, hZ, T, ii);
          delete bp[hW];
        });
      };
      hn.load(hT);
    },
    drawLabel: function(T, hS, hZ, i, hX, hT, e, hU, hY, hV) {
      var hW = this;
      if (!hW._computedLabel) {
        return;
      }
      if (hW._computedLabel._zoom !== hZ) {
        hW.clearLabel();
        return;
      }
      hW._map.temp.isPermitSpotOver = false;
      hW.clearLabel();
      hW._vectorDrawLib.zoomingIconAndText(
        this._labelCtx,
        hW._computedLabel,
        T,
        hS,
        i,
        hX,
        hT,
        e,
        hU,
        hY,
        hV
      );
    },
    _addSpotData: function() {
      this._spotData = [];
      var hZ = this._map.getZoom();
      for (var hU = 0, hT = this._computedLabel.length; hU < hT; hU++) {
        var hW = this._computedLabel[hU];
        if (
          !this.isClickableLabel(hW) ||
          (hW.guidExt === 1 && hW.startScale > hZ)
        ) {
          continue;
        }
        var hV = [];
        hV[0] = (hW.minX - hW.maxX) / 2;
        hV[1] = (hW.minY - hW.maxY) / 2;
        hV[2] = (hW.maxX - hW.minX) / 2;
        hV[3] = (hW.maxY - hW.minY) / 2;
        var hS = null;
        if (hW.iconPos) {
          hS = new ht(hW.iconPos.geoX, hW.iconPos.geoY);
        }
        var T = hW.name ? hW.name.replace("\\\\", "<br>") : "";
        if (
          hW.iconPos &&
          hW.iconPos.iconType.indexOf("ditie") > -1 &&
          this._map.getZoom() > 14
        ) {
          T = "";
        }
        var hY = {
          n: T,
          pt: new ht(hW.geoX, hW.geoY),
          userdata: {
            iconPoint: hS,
            uid: hW.guid,
            name: T,
            type: hW.iconPos ? hW.iconPos.iconType : "",
            iconImg: hW.iconImg,
            mapPoi: true,
            adver_log: hW.adver_log || "",
          },
          bd: hV,
          tag: "MAP_SPOT_INFO",
        };
        this._spotData.push(hY);
      }
      var hX = new bc("onspotsdataready");
      hX.spots = this._spotData;
      this._map._spotDataOnCanvas = this._spotData;
      this._map.dispatchEvent(hX);
    },
    isClickableLabel: function(e) {
      if (e.isDel || (!e.guid && !e.name)) {
        return false;
      }
      return true;
    },
    getFilterImageData: function(T, hV) {
      var hW = T.data,
        hU = this._labelStrategy,
        hV = parseInt(hV);
      for (var hX = 0, hT = hW.length; hX < hT; hX += 4) {
        var e = hW[hX],
          hY = hW[hX + 1],
          hZ = hW[hX + 2],
          h0 = hW[hX + 3];
        if (h0 === 0) {
          continue;
        }
        var hS = Math.round((e + hY + hZ) / 3);
        var h1 = hS - 90;
        h1 = h1 < 0 ? 0 : h1;
        if (hV === hU.RANK5) {
          hW[hX] = 51 + h1 * 1.3;
          hW[hX + 1] = 133 + h1 * 0.8;
          hW[hX + 2] = 255;
        }
      }
      return T;
    },
    showLabelCanvas: function() {
      this._labelCanvas.style.visibility = "";
    },
    hideLabelCanvas: function() {
      this._labelCanvas.style.visibility = "hidden";
    },
  });
  var ca = 5;
  var dY = 4;
  var hr = 3;
  var fg = 2;
  var hL = 1;
  var d1 = 0;
  var hO = 3;
  var hh = 5;
  var J = {
    3: { start: 3, base: 3 },
    4: { start: 4, base: 5 },
    5: { start: 4, base: 5 },
    6: { start: 6, base: 7 },
    7: { start: 6, base: 7 },
    8: { start: 8, base: 9 },
    9: { start: 8, base: 9 },
    10: { start: 10, base: 10 },
    11: { start: 11, base: 12 },
    12: { start: 11, base: 12 },
    13: { start: 11, base: 12 },
    14: { start: 14, base: 15 },
    15: { start: 14, base: 15 },
    16: { start: 16, base: 17 },
    17: { start: 16, base: 17 },
    18: { start: 18, base: 19 },
    19: { start: 18, base: 19 },
    20: { start: 18, base: 19 },
    21: { start: 18, base: 19 },
  };
  function a1(hS) {
    this._canvas2dMapMgr = hS;
    var i = (this.ratio = hS._map.config.ratio);
    this._featureStyle = null;
    this._map = hS._map;
    var T = fA();
    var e = "udt=" + T.udt + "&v=" + T.ver;
    this.sizeRatio = this.ratio > 1 ? 2 : 1;
    this._binaryCache = {};
    this._iconCache = {};
    this._initColorCanvas();
  }
  D.extend(a1.prototype, {
    _initColorCanvas: function() {
      var i = 256,
        T = U("canvas"),
        e = T.style;
      e.width = i + "px";
      e.height = i + "px";
      T.width = i;
      T.height = i;
      this._colorCvs = T;
      this._colorCtx = T.getContext("2d");
    },
    parseLabelData: function(i, hU, hT, hS, e, hX, hW) {
      if (!this._featureStyle) {
        this._featureStyle = this._canvas2dMapMgr.getStyle();
      }
      if (!i || !i[0]) {
        hW([]);
        return;
      }
      var hV = this._map.getZoomUnits();
      var T = this;
      this.loadTextPng(i, hX, hU, hT, hS, e, hV, hW);
    },
    loadTextPng: function(h9, h0, hY, hX, hV, i, hT, hS) {
      var h8 = this;
      var e = h9[5];
      var h7 = this._map;
      var h4 = h7.getZoom();
      var T = h7.getSize();
      var h5 = T.width;
      var h3 = T.height;
      var h6 = h7.getCenterIn();
      var hW = h6.lng;
      var hU = h6.lat;
      var h2 = hY * h0 * hT;
      var h1 = (hX + 1) * h0 * hT;
      if (e) {
        var hZ = new Image();
        hZ.onload = function() {
          h8.calcIconAndTextInfo(h9, hZ, h0, hY, hX, hV, i, hT, h2, h1, hS);
          delete this.onload;
        };
        hZ.src = e;
      } else {
        setTimeout(function() {
          h8.calcIconAndTextInfo(h9, null, h0, hY, hX, hV, i, hT, h2, h1, hS);
        }, 1);
      }
    },
    calcIconAndTextInfo: function(ib, h2, h3, h1, hY, hW, hS, hU, h5, h4, hT) {
      var ia = this;
      var h9 = ia._featureStyle;
      var hZ = [];
      hZ.x = h1;
      hZ.y = hY;
      hZ.z = hW;
      var h0 = ia._canvas2dMapMgr,
        T = h1 * hU * h3,
        h8 = (hY + 1) * hU * h3,
        hV = { tileLeft: T, tileTop: h8, zoomUnits: hU };
      var e = [];
      if (ib[0]) {
        for (var h6 = 0; h6 < ib[0].length; h6++) {
          if (ib[0][h6][0] === hO) {
            e.push(ib[0][h6]);
          }
        }
      }
      var hX = ib[2] || [];
      for (var h6 = 0; h6 < e.length; h6++) {
        this._getFixedLabelInfo(e[h6], h2, hS, hU, h3, h5, h4, hZ);
      }
      var h7 = Math.pow(2, hS - hW);
      for (h6 = 0; h6 < hX.length; h6++) {
        this._getLineLabelInfo(hX[h6], h2, hW, hS, hU, h3, h5, h4, h7, hZ);
      }
      hT(hZ);
    },
    _getFixedLabelInfo: function(h2, h6, hT, hX, h7, ia, h9, ic) {
      var h1 = h2[1];
      if (!h1) {
        return;
      }
      var ie = this._map.getZoom();
      var io = this._map.config.style;
      var ip = this._featureStyle;
      var hY = hT;
      if (hY === 9) {
        hY = 8;
      }
      for (var ik = 0; ik < h1.length; ik++) {
        var iq = h1[ik];
        var e = iq[0];
        var hS = em.getStyleFromCache(io, e, "point", hY, ip);
        var ij = em.getStyleFromCache(io, e, "pointText", hY, ip);
        if ((!ij || ij.length === 0) && (!hS || hS.length === 0)) {
          if (hY === 5) {
            var hW = iq[1];
            if (!hW) {
              continue;
            }
            for (var ig = 0; ig < hW.length; ig++) {
              var id = hW[ig][4];
              if (id && id[7] === "北京") {
                hS = em.getStyleFromCache(io, e, "point", 6, ip);
                ij = em.getStyleFromCache(io, e, "pointText", 6, ip);
                break;
              } else {
                continue;
              }
            }
          } else {
            continue;
          }
        }
        var hW = iq[1];
        if (!hW) {
          continue;
        }
        var il = null;
        var hZ = 1;
        var T = 0;
        var h5 = 0;
        if (hS && hS[0]) {
          hS = hS[0];
          il = hS.icon;
          hZ = hS.zoom ? hS.zoom / 100 : 1;
        } else {
          hS = null;
        }
        for (var ig = 0; ig < hW.length; ig++) {
          var id = hW[ig][4];
          if (!id) {
            continue;
          }
          var ii = id[2];
          if (!this._isVisible(ii, ie)) {
            continue;
          }
          var h0 = id[12];
          if (ij && ij.length > 0 && !h0) {
            continue;
          }
          var h4 = Math.round(id[0] / 100);
          var h3 = Math.round(id[1] / 100);
          var ih = { lng: ia + h4, lat: h9 - (h7 * hX - h3) };
          var hV = h4 / hX;
          var hU = h7 - h3 / hX;
          var h8 = id[7] || "";
          var im = id[5];
          var ib = {
            type: "fixed",
            name: h8,
            textImg: h6,
            rank: id[4],
            baseX: hV,
            baseY: hU,
            iconPos: null,
            textPos: null,
            guid: id[3] || "",
            tracer: ii,
            direction: im,
            startScale: 3,
          };
          if (((im !== dY && h0) || !h0) && il !== null) {
            ib.iconPos = this._getIconPosition(il, hZ, hV, hU, ih);
            if (ib.iconPos) {
              T = ib.iconPos.width;
              h5 = ib.iconPos.height;
            }
          }
          if (T === 0) {
            ib.direction = dY;
          }
          if (h0) {
            ib.textPos = this._getTextDrawData(id, hV, hU, T, h5);
          }
          if (ib.textPos || ib.iconPos) {
            ic.push(ib);
          }
        }
      }
    },
    _isVisible: function(e, i) {
      var hS;
      if (!this._binaryCache[e]) {
        hS = e.toString(2);
        if (hS.length < 8) {
          hS = new Array(8 - hS.length + 1).join("0") + hS;
        }
        this._binaryCache[e] = hS;
      }
      hS = this._binaryCache[e];
      var T = J[i].start;
      return hS[i - T] === "1";
    },
    _getIconPosition: function(hW, hU, T, i, e) {
      var hS = this._map.config.style;
      var hX = bp["iconSetInfo" + hS][hW];
      if (!hX) {
        if (hW.charCodeAt(0) >= 48 && hW.charCodeAt(0) <= 57) {
          hX = bp["iconSetInfo" + hS]["_" + hW];
        }
      }
      if (!hX) {
        return null;
      }
      var hT = hX[0];
      var hV = hX[1];
      hT = hT * hU;
      hV = hV * hU;
      return {
        srcX: 0,
        srcY: 0,
        destX: T - hT / 2,
        destY: i - hV / 2,
        width: hT,
        height: hV,
        geoX: e.lng,
        geoY: e.lat,
        mcPt: e,
        iconType: hW,
      };
    },
    _getTextDrawData: function(h3, h2, h1, hS, hZ) {
      var h8 = h3[5];
      if (typeof h8 !== "number") {
        h8 = 0;
      }
      var hX = this.ratio;
      var hW = hX / 2;
      hS *= hW;
      hZ *= hW;
      var hY = h3[12];
      var hT = hY.length;
      var ib = 0;
      var ia = 0;
      var h7 = [];
      var h6 = 0;
      var h9 = 0;
      for (var h5 = 0; h5 < hT; h5++) {
        h9 += Math.round(hY[h5][3]);
      }
      for (var h5 = 0; h5 < hT; h5++) {
        var hV = hY[h5];
        var hU = hV[0];
        var i = hV[1];
        var T = hV[2];
        var e = hV[3];
        var ic = 2 * hX;
        var h4 = 0;
        if (hS !== 0) {
          h4 = 2 * hX;
        }
        if (hS === 0) {
          h8 = dY;
        }
        switch (h8) {
          case hr:
            var h0 = h1 - h9 / 2 - (ic * (hT - 1)) / 2;
            ib = h2 - T - hS / 2 - h4;
            ia = h0 + h6 + ic * h5;
            break;
          case hL:
            var h0 = h1 - h9 / 2 - (ic * (hT - 1)) / 2;
            ib = h2 + hS / 2 + h4;
            ia = h0 + h6 + ic * h5;
            break;
          case fg:
            var h0 = h1 - hZ / 2 - h9 - ic * (hT - 1) - ic;
            ib = h2 - T / 2;
            ia = h0 + h6 + ic * h5;
            break;
          case d1:
            var h0 = h1 + hZ / 2 + ic / 2;
            ib = h2 - T / 2;
            ia = h0 + h6 + ic * h5;
            break;
          case dY:
            var h0 = h1 - e / 2 - (ic * (hT - 1)) / 2;
            ib = h2 - T / 2;
            ia = h0 + h6 + ic * h5;
            break;
        }
        h6 += e;
        if (T > 0 && e > 0) {
          h7.push({
            srcX: hU,
            srcY: i,
            destX: ib,
            destY: ia,
            width: T,
            height: e,
          });
        }
      }
      if (h7.length > 0) {
        return h7;
      }
      return null;
    },
    _getLineLabelInfo: function(h0, hS, hT, ig, iv, h7, id, ic, ie, h6) {
      if (h0.length !== 10) {
        return;
      }
      var ii = this.ratio;
      var T = this.ratio;
      var iq = h0[7].length;
      var h8 = h0[1];
      var it = h0[3];
      var iz = h0[8];
      var hW = h0[4];
      var e = 2;
      var hU = hW.slice(0, e);
      for (var iw = e; iw < hW.length; iw += e) {
        hU[iw] = hU[iw - e] + hW[iw];
        hU[iw + 1] = hU[iw - (e - 1)] + hW[iw + 1];
      }
      for (var iw = e; iw < hW.length; iw += e) {
        if (iw % (it * e) === 0 || iw % (it * e) === 1) {
          continue;
        }
        hU[iw] = hU[iw - e] + hW[iw] / ie;
        hU[iw + 1] = hU[iw - (e - 1)] + hW[iw + 1] / ie;
      }
      for (var iy = 0; iy < iq; iy++) {
        var iu = h0[7][iy];
        if (!this._isVisible(iu, ig)) {
          continue;
        }
        var ik = h0[6][iy];
        var h5 = iy * it * e;
        hW = hU.slice(h5, h5 + it * e);
        var h9 = [];
        var ij = undefined;
        var ih = undefined;
        var h4 = undefined;
        var h3 = undefined;
        var iz = h0[9].slice(0);
        if (ik) {
          iz.reverse();
        }
        var io;
        var il;
        for (var ix = 0; ix < it; ix++) {
          var h2 = h0[5][it * iy + ix];
          var ip = hW[ix * e] / 100;
          var im = hW[ix * e + 1] / 100;
          var h1 = iz[ix];
          var hX = h1[0];
          var hZ = h1[1];
          var hV = h1[2];
          var hY = h1[3];
          var ib;
          var ia;
          var iB;
          var iA;
          if (ix === 0) {
            io = iB = ip / iv;
            il = h7 - im / iv;
            iA = im / iv;
          } else {
            iB = ip / iv;
            iA = im / iv;
          }
          var iD = io + (iB - io) * T - hV / 2;
          var iC = il + (h7 - iA - il) * T - hY / 2;
          if (ij === undefined) {
            ij = io - hV / 2;
            ih = il - hY / 2;
            h4 = ij + hV;
            h3 = ih + hY;
          } else {
            if (iD < ij) {
              ij = iD;
            }
            if (iC < ih) {
              ih = iC;
            }
            if (iD + hV > h4) {
              h4 = iD + hV;
            }
            if (iC + hY > h3) {
              h3 = iC + hY;
            }
          }
          h9.push({
            angle: h2,
            srcX: hX,
            srcY: hZ,
            destX: iD,
            destY: iC,
            width: hV,
            height: hY,
          });
        }
        var ir = {
          type: "line",
          textImg: hS,
          rank: h8,
          baseX: io,
          baseY: il,
          arrWordPos: h9,
          minXOriginal: ij,
          minYOriginal: ih,
          maxXOriginal: h4,
          maxYOriginal: h3,
          text: "",
        };
        h6.push(ir);
      }
    },
    alterColor: function(hV, e, hU) {
      var T = this._colorCtx,
        i = this._canvas2dMapMgr;
      T.clearRect(0, 0, hV.width, hV.height);
      T.drawImage(
        e,
        hV.srcX,
        hV.srcY,
        hV.width,
        hV.height,
        0,
        0,
        hV.width,
        hV.height
      );
      var hT = T.getImageData(0, 0, hV.width, hV.height),
        hS = i.getFilterImageData(hT, hU);
      T.putImageData(hS, 0, 0);
    },
    drawIconAndText: function(h7, h6, e) {
      var hY = this.ratio;
      var hW = this.sizeRatio / hY;
      var h0 = 2 / hY;
      var ij = this;
      for (var ia = 0, h8 = h6.length; ia < h8; ia++) {
        var hZ = h6[ia];
        if (hZ.isDel == false) {
          var hT = hZ.baseDrawX;
          var hS = hZ.baseDrawY;
          if (hZ.type == "fixed") {
            var hV = hZ.iconPos,
              ib = hZ.textPos,
              h4 = hZ.textImg,
              ie = hZ.startScale;
            if (hV && ie <= e) {
              var T = this._iconCache[hV.iconType];
              if (T) {
                if (T.img) {
                  h7.drawImage(
                    T.img,
                    0,
                    0,
                    T.img.width,
                    T.img.height,
                    Math.round(hT * hY + (hV.drawX - hT) / h0),
                    Math.round(hS * hY + (hV.drawY - hS) / h0),
                    hV.width / h0,
                    hV.height / h0
                  );
                } else {
                  T.drawLabels.push(hZ);
                }
              } else {
                if (!T) {
                  this._iconCache[hV.iconType] = {
                    img: null,
                    drawLabels: [hZ],
                  };
                  var il = new Image();
                  il._iconName = hV.iconType;
                  il.onload = function() {
                    var it = ij._iconCache[this._iconName];
                    it.img = this;
                    this.onload = null;
                    for (var io = 0; io < it.drawLabels.length; io++) {
                      var iq = it.drawLabels[io];
                      var ip = iq.baseDrawX;
                      var im = iq.baseDrawY;
                      var ir = iq.iconPos;
                      h7.drawImage(
                        this,
                        0,
                        0,
                        this.width,
                        this.height,
                        Math.round(ip * hY + (ir.drawX - ip) / h0),
                        Math.round(im * hY + (ir.drawY - im) / h0),
                        ir.width / h0,
                        ir.height / h0
                      );
                    }
                    it.drawPos = [];
                  };
                  il.src =
                    e4.getIconSetPath(ij._map.config.style) +
                    hV.iconType +
                    ".png";
                }
              }
            }
            if (ib && h4 && ie <= e) {
              for (var hX = 0; hX < ib.length; hX++) {
                var h5 = ib[hX];
                if (!hZ._tempRank) {
                  h7.drawImage(
                    h4,
                    h5.srcX,
                    h5.srcY,
                    h5.width,
                    h5.height,
                    Math.round(hT * hY + (h5.drawX - hT) / hW),
                    Math.round(hS * hY + (h5.drawY - hS) / hW),
                    h5.width / hW,
                    h5.height / hW
                  );
                } else {
                  this.alterColor(h5, h4, hZ._tempRank);
                  h7.drawImage(
                    this._colorCvs,
                    0,
                    0,
                    h5.width,
                    h5.height,
                    Math.round(hT * hY + (h5.drawX - hT) / hW),
                    Math.round(hS * hY + (h5.drawY - hS) / hW),
                    h5.width / hW,
                    h5.height / hW
                  );
                }
              }
            }
          } else {
            var hU = hZ.arrWordPos,
              h4 = hZ.textImg,
              h3 = hZ.tileX,
              h1 = hZ.tileY;
            for (var h9 = 0, h2 = hU.length; h9 < h2; h9++) {
              var ic = hU[h9];
              var ik = Math.round(h3 + ic.destX);
              var ii = Math.round(h1 + ic.destY);
              var id = ic.angle;
              ik = hT * hY + ik - hT;
              ii = hS * hY + ii - hS;
              if (id > 10 && id < 350) {
                h7.save();
                var ih = Math.round(ik + ic.width / 2);
                var ig = Math.round(ii + ic.height / 2);
                h7.translate(ih, ig);
                h7.rotate((-id / 180) * Math.PI);
                h7.drawImage(
                  h4,
                  ic.srcX,
                  ic.srcY,
                  ic.width,
                  ic.height,
                  -Math.round(ic.width / 2),
                  -Math.round(ic.height / 2),
                  ic.width / hW,
                  ic.height / hW
                );
                h7.restore();
              } else {
                h7.drawImage(
                  h4,
                  ic.srcX,
                  ic.srcY,
                  ic.width,
                  ic.height,
                  ik,
                  ii,
                  ic.width / hW,
                  ic.height / hW
                );
              }
            }
          }
        }
      }
    },
    isCollide: function(hU, h3, h2, e, hW, T, hY) {
      for (var hT = 0, hS = T.length; hT < hS; hT++) {
        var hX = T[hT],
          hV = 1 / Math.pow(2, hY + 1),
          h1 = (hV * hX[3]) / 2,
          h0 = (hV * hX[4]) / 2,
          hZ = hX[0];
        if (hZ != hU) {
          if (
            !(
              h3 + e < hX[1] - h1 ||
              h3 > hX[1] + hX[3] + h1 ||
              h2 + hW < hX[2] - h0 ||
              h2 > hX[2] + hX[4] + h0
            )
          ) {
            return true;
          }
        }
      }
      return false;
    },
    zoomingIconAndText: function(ij, ic, hS, ih, ii, iM, ir, h0, iy, iq, h9) {
      var iN = this.ratio;
      var h1 = this.sizeRatio / iN;
      var iO = 2 / iN;
      var iY = iN / 2;
      var iI = ih.x;
      var iH = ih.y;
      var ik = 2 * iN;
      if (h9 !== 0) {
        iH += iq;
      }
      var h4 = undefined,
        hX = undefined,
        hU = undefined,
        hZ = undefined,
        h8 = undefined;
      var ix = iM > 0 ? true : false;
      if (!ix) {
        h4 = [];
        var iB = 1 - ir;
      }
      for (var iU = 0, iS = ic.length; iU < iS; iU++) {
        var iP = ic[iU];
        if (iP.isDel == false) {
          var iZ = iP.baseDrawX;
          var iW = iP.baseDrawY;
          ij.save();
          ij.translate(-h0 * iN, -iy * iN);
          if (iP.isFadeout) {
            if (!ix && iP._schedule <= ir && !iP._isIgnore) {
              ij.globalAlpha = iB;
              iP._schedule = ir;
            } else {
              iP._isIgnore = true;
              continue;
            }
          }
          if (iP.type == "fixed") {
            var il = iP.iconPos,
              iu = iP.textPos,
              hV = iP.textImg,
              im = iP.startScale;
            var T;
            var iF = 0;
            if (il) {
              iF = ik;
            }
            if (il && !iP.iconImg && this._iconCache[il.iconType]) {
              T = this._iconCache[il.iconType].img;
            }
            if (il && im <= ii && T) {
              hZ = il.width;
              h8 = il.height;
              hX = (iI + (iZ - iI) * hS) * iN - hZ / 2 / iO;
              hU = (iH + (iW - iH) * hS) * iN - h8 / 2 / iO + h9;
              if (!ix && this.isCollide(iU, hX, hU, hZ, h8, h4, iM)) {
                iP.isFadeout = true;
              }
              ij.drawImage(
                T,
                il.srcX,
                il.srcY,
                T.width,
                T.height,
                Math.round(hX),
                Math.round(hU),
                hZ / iO,
                h8 / iO
              );
              !ix && h4.push([iU, hX, hU, hZ, h8]);
            }
            if (iu && hV && im <= ii) {
              var it;
              var iv;
              var ib = 0;
              var ip = 0;
              if (il) {
                ib = il.width;
                ip = il.height;
              }
              var iG = iu.length;
              var h3 = 0;
              var iw = 0;
              for (var id = 0; id < iG; id++) {
                var iR = iu[id];
                iw += iR.height;
                if (h3 < iR.width) {
                  h3 = iR.width;
                }
              }
              iw += (id - 1) * ik;
              if (!ix && this.isCollide(iU, hX, hU, h3, iw, h4, iM)) {
                iP.isFadeout = true;
              }
              var iQ = 0;
              for (var id = 0; id < iG; id++) {
                var iR = iu[id];
                switch (iP.direction) {
                  case hr:
                    it = -(ib / 2 / iO + iR.width + iF);
                    iv = -iw / 2 + iQ + ik * id;
                    break;
                  case hL:
                    it = ib / 2 / iO + iF;
                    iv = -iw / 2 + iQ + ik * id;
                    break;
                  case fg:
                    it = -iR.width / 2;
                    iv = -ip / 2 / iO - iw + iQ - ik * (id + 1);
                    break;
                  case d1:
                    it = -iR.width / 2;
                    iv = ip / 2 / iO + iQ + ik * (id + 1);
                    break;
                  case dY:
                    it = -iR.width / 2;
                    iv = -iw / 2 + iQ + ik * id;
                    break;
                }
                iQ += iR.height;
                hX = (iI + (iZ - iI) * hS) * iN + it / h1;
                hU = (iH + (iW - iH) * hS) * iN + iv / h1;
                +h9;
                hZ = iR.width;
                h8 = iR.height;
                if (!iP._tempRank) {
                  ij.drawImage(
                    hV,
                    iR.srcX,
                    iR.srcY,
                    hZ,
                    h8,
                    Math.round(hX),
                    Math.round(hU),
                    hZ / h1,
                    h8 / h1
                  );
                } else {
                  this.alterColor(iR, hV, iP._tempRank);
                  ij.drawImage(
                    this._colorCvs,
                    0,
                    0,
                    hZ,
                    h8,
                    Math.round(hX),
                    Math.round(hU),
                    hZ / h1,
                    h8 / h1
                  );
                }
                !ix && h4.push([iU, hX, hU, hZ, h8]);
              }
            }
          } else {
            var ia = iP.arrWordPos,
              hV = iP.textImg,
              iX = iP.tileX,
              iV = iP.tileY;
            var h2 = ia[0];
            var hY = Math.round(iX + h2.destX);
            var hW = Math.round(iV + h2.destY);
            for (var iT = 0, iE = ia.length; iT < iE; iT++) {
              var iL = ia[iT];
              var i1 = Math.round(iX + iL.destX);
              var i0 = Math.round(iV + iL.destY);
              var ig = iL.angle;
              var iD = Math.round(
                (iI + (iZ - iI) * hS) * iN - h2.width / 2 + i1 - hY
              );
              var iC = Math.round(
                (iH + (iW - iH) * hS) * iN - h2.height / 2 + i0 - hW
              );
              hX = iD;
              hU = iC;
              hZ = iL.width;
              h8 = iL.height;
              if (!ix && this.isCollide(iU, hX, hU, hZ, h8, h4, iM)) {
                iP.isFadeout = true;
              }
              if (ig > 10 && ig < 350) {
                var iK = iD + iL.width / 2;
                var iJ = iC + iL.height / 2;
                var hT = (ig / 180) * Math.PI;
                var io = Math.cos(hT);
                var h5 = Math.sin(hT);
                var iA = io;
                var h6 = io;
                var iz = h5;
                var h7 = -h5;
                var ie = iK - iK * io - iJ * h5;
                var e = iJ + iK * h5 - iJ * io;
                ij.save();
                ij.transform(iA, h7, iz, h6, ie, e);
                ij.drawImage(
                  hV,
                  iL.srcX,
                  iL.srcY,
                  hZ,
                  h8,
                  hX,
                  hU,
                  hZ / h1,
                  h8 / h1
                );
                ij.restore();
              } else {
                ij.drawImage(
                  hV,
                  iL.srcX,
                  iL.srcY,
                  hZ,
                  h8,
                  hX,
                  hU,
                  hZ / h1,
                  h8 / h1
                );
              }
              !ix && h4.push([iU, hX, hU, hZ, h8]);
            }
          }
          ij.restore();
        }
      }
    },
  });
  function gO(e) {
    this.initVars(e);
  }
  D.extend(gO.prototype, {
    initVars: function(e) {
      this._map = e._map;
      this._canvas2dMapMgr = e;
      this.base64Prefix = "data:image/png;base64,";
      this.bizData = null;
      this.objTextsPng = null;
      this.arrIconsPng = null;
      this.bizLabels = null;
    },
    proecessBizData: function(hU, hY) {
      var hW = this;
      this.bizData = hU;
      this.objTextsPng = null;
      this.arrIconsPng = null;
      var T = hU.textsPng;
      var h0 = hU.iconsPng;
      if (!T || !h0) {
        return;
      }
      var hX = new Image();
      hX.onload = function() {
        hW.objTextsPng = this;
        hW.calcIconAndTextInfo(hY);
        this.onload = null;
      };
      hX.src = this.base64Prefix + T;
      var hZ = h0.length;
      var e = [];
      for (var hT = 0; hT < hZ; hT++) {
        var hV = h0[hT];
        var hS = new Image();
        (function(i) {
          hS.onload = function() {
            hZ--;
            e[i] = this;
            if (hZ === 0) {
              hW.arrIconsPng = e;
              hW.calcIconAndTextInfo(hY);
            }
            this.onload = null;
          };
        })(hT);
        hS.src = this.base64Prefix + hV;
      }
    },
    calcIconAndTextInfo: function(h1) {
      if (this.objTextsPng && this.arrIconsPng) {
        var hX = this.bizData;
        var hV = hX.pois;
        var e = [];
        for (var hY = 0, hU = hV.length; hY < hU; hY++) {
          var hS = hV[hY];
          var hW = this.arrIconsPng[hS.iconPng];
          var hT = hW.height / 2;
          var h0 = {
            type: "fixed",
            name: "",
            textImg: this.objTextsPng,
            iconImg: hW,
            rank: hS.rank,
            iconPos: {
              srcX: 0,
              srcY: 0,
              destX: -hW.width / 2,
              destY: -hT / 2,
              width: hW.width,
              height: hT,
              geoX: hS.x,
              geoY: hS.y,
              iconType: "vectorCustom",
            },
            textPos: this.calcTextPos(hS.pos, hW),
            startScale: hS.from < 12 ? 12 : hS.from,
            guid: hS.guid,
            guidExt: 1,
            adver_log: hS.adver_log || "",
          };
          var T = {
            type: "fixed",
            textDirLeft: "left",
            name: "",
            textImg: this.objTextsPng,
            iconImg: hW,
            rank: hS.rank,
            iconPos: {
              srcX: 0,
              srcY: 0,
              destX: -hW.width / 2,
              destY: -hT / 2,
              width: hW.width,
              height: hT,
              geoX: hS.x,
              geoY: hS.y,
              iconType: "vectorCustom",
            },
            textPos: this.calcTextPosLeft(hS.pos, hW),
            startScale: hS.from < 12 ? 12 : hS.from,
            guid: hS.guid,
            guidExt: 1,
            adver_log: hS.adver_log || "",
          };
          var hZ = [h0, T];
          e.push(hZ);
        }
        this.bizLabels = e;
        h1 && h1();
      }
    },
    calcTextPos: function(hV, T) {
      var i = [];
      var hU = hV.length / 4;
      var hT = T.width / 2;
      if (hU === 1) {
        var hS = {
          srcX: hV[0],
          srcY: hV[1],
          destX: hT,
          destY: -hV[3] / 2,
          width: hV[2],
          height: hV[3],
        };
        i.push(hS);
      } else {
        var hS = {
          srcX: hV[0],
          srcY: hV[1],
          destX: hT,
          destY: -hV[3],
          width: hV[2],
          height: hV[3],
        };
        var e = {
          srcX: hV[4],
          srcY: hV[5],
          destX: hT,
          destY: 0,
          width: hV[6],
          height: hV[7],
        };
        i.push(hS);
        i.push(e);
      }
      return i;
    },
    calcTextPosLeft: function(hV, T) {
      var i = [];
      var hU = hV.length / 4;
      var hT = T.width / 2;
      if (hU === 1) {
        var hS = {
          srcX: hV[0],
          srcY: hV[1],
          destX: -hT - hV[2],
          destY: -hV[3] / 2,
          width: hV[2],
          height: hV[3],
        };
        i.push(hS);
      } else {
        var hS = {
          srcX: hV[0],
          srcY: hV[1],
          destX: -hT - hV[2],
          destY: -hV[3],
          width: hV[2],
          height: hV[3],
        };
        var e = {
          srcX: hV[4],
          srcY: hV[5],
          destX: -hT - hV[2],
          destY: 0,
          width: hV[6],
          height: hV[7],
        };
        i.push(hS);
        i.push(e);
      }
      return i;
    },
    clearBizData: function() {
      this.bizData = null;
      this.bizLabels = null;
    },
  });
  function c8() {}
  D.extend(c8.prototype, {
    centerAndZoomIn: function(T, hY, hZ) {
      hZ = hZ || {};
      if (!this.loaded) {
        this.firstTileLoad = false;
      }
      hY = this._getProperZoom(hY).zoom;
      if (hZ.noAnimation !== true && this.loaded) {
        var hU = this._ifUseAnimation(T, hY);
        if (hU) {
          this.flyToIn(T, hY, hZ);
          return;
        }
      }
      var hW = this;
      if (!T && !hY) {
        return;
      }
      this._stopAllAnimations();
      if (T && !T.equals(this.centerPoint)) {
        this.fire(new bc("oncenter_changed"));
      }
      if (hY && hY !== this.zoomLevel) {
        this.fire(new bc("onzoom_changed"));
      }
      T = T || this.centerPoint;
      hY = hY || this.zoomLevel;
      hY = this._getProperZoom(hY).zoom;
      if (this.mapType === BMAP_EARTH_MAP) {
        if (!this._earth) {
          this.mapType = BMAPGL_NORMAL_MAP;
          this.temp.originMapType = BMAP_EARTH_MAP;
          function hX() {
            hW._earth = new bp.Earth(hW, {
              showRealSunlight: hW.config.showRealSunlight,
              showMilkyway: hW.config.showMilkyway,
              earthBackground: hW.config.earthBackground,
            });
            hW._proxyEarthEvents();
            hW._changeEarthMapType(BMAP_EARTH_MAP);
            D.extend(hW, bp.EarthView.prototype);
            delete hW.temp.originMapType;
          }
          eb.load("earth", function() {
            if (bp["FeatureStyle" + hW.config.style]) {
              hX();
            } else {
              hW.loadMapStyleFiles(function() {
                hX();
              });
            }
          });
        }
      }
      this.lastLevel = this.zoomLevel || hY;
      this.zoomLevel = hY;
      var hV = new bc("onload");
      hV.point = T;
      hV.zoom = hY;
      this.centerPoint = new ht(T.lng, T.lat);
      this.defaultZoomLevel = this.defaultZoomLevel || this.zoomLevel;
      this.defaultCenter = this.defaultCenter || this.centerPoint;
      if (this.mapType !== BMAP_EARTH_MAP) {
        this.centerPoint = this.restrictCenter(this.centerPoint);
      }
      if (!this.loaded && !(this.temp.originMapType === BMAP_EARTH_MAP)) {
        var i = this.config.defaultMaxBounds;
        var hT = new c6(i, "baidu", this.mapType);
        var hS = new cS({
          mapType: this.mapType,
          copyright: hT,
          dataType: gu,
          customLayer: false,
          baseLayer: true,
          tileTypeName: "na",
        });
        hS._isInnerLayer = true;
        this.addTileLayer(hS);
        if (
          this.mapType === BMAP_SATELLITE_MAP &&
          this._isHybridShow === true
        ) {
          this._addHybirdMap();
        }
        this.baseLayerAdded = true;
        this.on("zoom_changed", function() {
          if (this._heading === 0) {
            return;
          }
          if (this.getZoom() < 7 && this.config.restrictCenter === true) {
            hW.resetHeading();
          }
        });
      }
      this.loaded = true;
      this.dispatchEvent(hV);
      hZ.callback && hZ.callback();
    },
    _ifUseAnimation: function(hS, hX) {
      var hW = this.getSize();
      var T = { zoom: this.zoomLevel };
      var hZ = { zoom: hX };
      var hY = this.pointToPixelIn(this.centerPoint);
      var hT = this.pointToPixelIn(hS, T);
      var hV = this.pointToPixelIn(this.centerPoint, hZ);
      var h1 = this.pointToPixelIn(hS, hZ);
      var hU = Math.abs(hY.x - hT.x);
      var i = Math.abs(hY.y - hT.y);
      var e = Math.abs(hV.x - h1.x);
      var h0 = Math.abs(hV.y - h1.y);
      if (
        (hU > hW.width || i > hW.height) &&
        (e > hW.width || h0 > hW.height)
      ) {
        return false;
      }
      return true;
    },
    _setPlatformPosition: function(hZ, hY, h1) {
      h1 = h1 || {};
      if (hZ === 0 && hY === 0 && !h1.point) {
        return;
      }
      if (isNaN(h1.initMapOffsetX)) {
        h1.initMapOffsetX = this.offsetX;
      }
      if (isNaN(h1.initMapOffsetY)) {
        h1.initMapOffsetY = this.offsetY;
      }
      var hV = dL(this._heading);
      if (this._tilt > 0) {
        hY = hY / Math.cos(dL(this._tilt));
      }
      var h0 = hZ * Math.cos(hV) + hY * Math.sin(hV);
      var hX = -hZ * Math.sin(hV) + hY * Math.cos(hV);
      h0 = h0 + h1.initMapOffsetX;
      hX = hX + h1.initMapOffsetY;
      if (h1.point) {
        var i = this.restrictCenter(h1.point);
        if (!i.equals(this.centerPoint)) {
          this.centerPoint = i.clone();
          this.fire(new bc("oncenter_changed"));
        }
      } else {
        var hS = this.offsetX - h0;
        var e = this.offsetY - hX;
        var hW = this.centerPoint.lng;
        var hU = this.centerPoint.lat;
        var hT = new ht(hW, hU);
        var T = this.getZoomUnits();
        this.centerPoint = this.restrictCenter(
          new ht(hT.lng + hS * T, hT.lat - e * T),
          T
        );
        this.fire(new bc("oncenter_changed"));
      }
      this.offsetX = h0;
      this.offsetY = hX;
      this.dispatchEvent(new bc("onmoving"));
    },
    restrictCenter: function(hS, hT) {
      if (this.config.restrictCenter === false) {
        return hS;
      }
      hT = hT || this.getZoomUnits();
      var T = this.pixelToPointIn(new ek(0, 0), { center: hS });
      var i = this.pixelToPointIn(new ek(0, this.height), { center: hS });
      if (this.zoomLevel < 5) {
        if (T.lat > c9.MAX_LAT && i.lat < c9.MIN_LAT) {
          var hU = c9.MAX_LAT - hS.lat;
          var e = hS.lat - c9.MIN_LAT;
          var hW;
          if (hU < e) {
            hW = hU / (this.height / 2);
          } else {
            hW = e / (this.height / 2);
          }
          var hV = 18 - eD(hW);
          this.zoomLevel = hV;
          return hS;
        }
      }
      if (T.lat > c9.MAX_LAT) {
        hS.lat = c9.MAX_LAT - (this.height / 2) * hT;
      } else {
        if (i.lat < c9.MIN_LAT) {
          hS.lat = c9.MIN_LAT + (this.height / 2) * hT;
        }
      }
      return hS;
    },
    zoomTo: function(e, h3, h4) {
      var hZ = b7[this.mapType];
      if (!hZ) {
        return;
      }
      var hY = this._getProperZoom(e);
      e = hY.zoom;
      if (this.zoomLevel === e) {
        h4.callback && h4.callback();
        return;
      }
      var hU = e;
      this.lastLevel = this.zoomLevel;
      h4 = h4 || {};
      if (this.zoomEventStatus === "idle") {
        this.fire(new bc("onzoomstart"));
        this.zoomEventStatus = "zooming";
      }
      if (
        !h3 &&
        this.getInfoWindow() && this.temp.infoWin && this.temp.infoWin.isOpen()
      ) {
        h3 = this.getInfoWindow().getPoint();
      }
      var T = null;
      if (h4.fixPixel) {
        T = h4.fixPixel;
      } else {
        if (h3) {
          T = this.pointToPixelIn(h3, { useRound: false });
        }
      }
      var hV = this.pixelToPointIn(T);
      var hW = this.centerPoint.clone();
      this.fixPoint = h3;
      this.fixPixel = T;
      this.fixCenter = hW;
      this.mousePosMCPoint = hV;
      if (h4.noAnimation) {
        e = hY.zoom;
        this.zoomLevel = e;
        this.fire(new bc("onzoom_changed"));
        var hT = this.getCurrentMaxTilt();
        if (this._tilt > hT) {
          this._tilt = hT;
        }
        if (h3) {
          if (this._heading % 360 !== 0 || this._tilt > 0) {
            var i = this._webglMapCamera.fromScreenPixelToMC(T.x, T.y, {
              center: hW,
              zoom: this.zoomLevel,
            });
            if (i) {
              var h0 = i.sub(hV);
              var hS = hW.sub(h0);
              this.centerPoint = this.restrictCenter(hS);
            }
          } else {
            var hX = this.getZoomUnits();
            var hS = new ht(
              h3.lng - hX * (T.x - this.width / 2),
              h3.lat + hX * (T.y - this.height / 2)
            );
            this.centerPoint = this.restrictCenter(hS, hX);
          }
          this.fire(new bc("oncenter_changed"));
        }
        this._checkFireZoomend();
        h4.callback && h4.callback();
        return;
      }
      this._animationInfo.zoom = {
        current: this.zoomLevel,
        diff: e - this.zoomLevel,
        target: e,
      };
      var h1 = this;
      h1._checkFireZoomend();
      var h2 = this._tilt;
      if (this.fixPoint || h2 > c9.MAX_DRAG_TILT_L2) {
        h4.renderCallback = function() {
          var h8 = h1.getCurrentMaxTilt();
          if (h1._tilt > h8) {
            h1._tilt = h8;
          }
          var h9 = h1.fixPixel;
          if (!h1.fixPixel || !h1.fixPoint) {
            return;
          }
          var h5 = h1.fixPixel;
          var ig = h1.fixPoint;
          var ic = h1.fixCenter;
          var ia = h1.mousePosMCPoint;
          if (h1._heading % 360 !== 0 || h1._tilt > 0) {
            var h6 = h1._webglMapCamera.fromScreenPixelToMC(h5.x, h5.y, {
              center: ic,
              zoom: h1.zoomLevel,
              tilt: h1._tilt,
            });
            if (h6) {
              var ie = h6.sub(ia);
              var h7 = ic.sub(ie);
              h1.centerPoint = h1.restrictCenter(h7);
            }
          } else {
            var ib = h5;
            var id = h1.getZoomUnits();
            var h7 = new ht(
              ig.lng - id * (ib.x - h1.width / 2),
              ig.lat + id * (ib.y - h1.height / 2)
            );
            h1.centerPoint = h1.restrictCenter(h7, id);
          }
          h1.fire(new bc("oncenter_changed"));
        };
      }
      if (h4.fromMouseWheel === true) {
        this._startInfiniteZoomAnimation(h4);
        h4.callback && h4.callback();
        return;
      }
      this._startAnimation(h4);
    },
    _checkFireZoomend: function() {
      var e = this;
      if (e.fireZoomendTimer) {
        clearTimeout(e.fireZoomendTimer);
      }
      e.fireZoomendTimer = setTimeout(function() {
        if (e.zoomEventStatus === "zooming") {
          e.fire(new bc("onzoomend"));
          e.zoomEventStatus = "idle";
        }
        e.fireZoomendTimer = null;
      }, 150);
    },
    deepZoomMedia: function(e) {
      var i = this;
      if (!i.temp.isStdCtrlBusy) {
        i.temp.isStdCtrlBusy = true;
        i.deepZoomTo(i.zoomLevel + e);
        setTimeout(function() {
          i.temp.isStdCtrlBusy = false;
        }, 400);
      }
    },
    deepZoomTo: function(e) {
      this.zoomTo(e);
    },
    flyToIn: function(T, io, h7) {
      h7 = h7 || {};
      var hT = this._getProperZoom(io);
      io = hT.zoom;
      if (
        this.centerPoint.equals(T) &&
        this.zoomLevel === io &&
        typeof h7.heading !== "number" &&
        typeof h7.tilt !== "number"
      ) {
        return;
      }
      var e = this.getHeading() % 360;
      var hZ = this.getTilt();
      var h5 = 0;
      var h9 = 0;
      var h2 = this.getBounds().containsPoint(T);
      if (typeof h7.heading === "number") {
        h5 = h7.heading;
      } else {
        if (h2) {
          h5 = e;
        }
      }
      if (typeof h7.tilt === "number") {
        h9 = h7.tilt;
      } else {
        if (h2) {
          h9 = hZ;
        }
      }
      this._heading = e;
      var ik = h5 - e;
      var ig = h9 - hZ;
      var h3 = this;
      var hV = this.zoomLevel;
      var hW = 1.42;
      var ib = this.zoomScale(io - hV);
      var iq = this.getZoomUnits();
      var h1 = this.centerPoint.div(iq);
      var ir = T.div(iq);
      var ij = this.worldSize();
      var ie = hW;
      var id = Math.max(this.width, this.height);
      var ic = id / ib;
      var h0 = ir.sub(h1).mag();
      var i = ie * ie;
      function im(iu) {
        var it =
          (ic * ic - id * id + (iu ? -1 : 1) * i * i * h0 * h0) /
          (2 * (iu ? ic : id) * i * h0);
        return Math.log(Math.sqrt(it * it + 1) - it);
      }
      function hS(it) {
        return (Math.exp(it) - Math.exp(-it)) / 2;
      }
      function hX(it) {
        return (Math.exp(it) + Math.exp(-it)) / 2;
      }
      function h6(it) {
        return hS(it) / hX(it);
      }
      var hY = im(0);
      var ih = function(it) {
        return hX(hY) / hX(hY + ie * it);
      };
      var ii = function(it) {
        return (id * ((hX(hY) * h6(hY + ie * it) - hS(hY)) / i)) / h0;
      };
      var hU = (im(1) - hY) / ie;
      if (Math.abs(h0) < 0.000001 || hU === Infinity || isNaN(hU)) {
        if (Math.abs(id - ic) < 0.000001) {
          this._animationInfo.zoom = {
            current: this.zoomLevel,
            diff: io - this.zoomLevel,
          };
          this._animationInfo.center = {
            current: this.centerPoint,
            diff: T.sub(this.centerPoint),
          };
          this._animationInfo.heading = { current: e, diff: h5 - e };
          this._animationInfo.tilt = { current: hZ, diff: h9 - hZ };
          this.setLock(true);
          this._startAnimation({
            callback: function(it) {
              h3.setLock(false);
              if (h7.callback) {
                h7.callback(it);
              }
            },
            duration: h7.duration,
          });
          return;
        }
        var ip = ic < id ? -1 : 1;
        hU = Math.abs(Math.log(ic / id)) / ie;
        ii = function() {
          return 0;
        };
        ih = function(it) {
          return Math.exp(ip * ie * it);
        };
      }
      var il = 1.7;
      if (hU < 0.3) {
        il = 0.8;
      } else {
        if (hU > 5) {
          il = (hU - 5) / 2 + il;
        }
      }
      var h8 = h7.duration || (1000 * hU) / il;
      if (isNaN(h8)) {
        var ia = {};
        for (var h4 in h7) {
          ia[h4] = h7[h4];
          ia.noAnimation = true;
        }
        this.centerAndZoomIn(T, io, ia);
        return;
      }
      this.fire(new bc("onmovestart"));
      this.fire(new bc("onzoomstart"));
      this.setLock(true);
      this._startAnimation({
        duration: h8,
        renderCallback: function(it, iu) {
          var iv = it * hU;
          var iy = ii(iv);
          var ix = hV + h3.scaleZoom(1 / ih(iv));
          if (ix < h3.getMinZoom()) {
            ix = h3.getMinZoom();
          }
          if (ix > h3.getMaxZoom()) {
            ix = h3.getMaxZoom();
          }
          if (ix !== h3.zoomLevel) {
            h3.zoomLevel = ix;
            h3.fire(new bc("onzoom_changed"));
          }
          h3.centerPoint = h1.add(ir.sub(h1).mult(iy)).mult(iq);
          h3.fire(new bc("oncenter_changed"));
          if (typeof h5 === "number") {
            var iw = it / 0.7;
            if (iw > 1) {
              iw = 1;
            }
            h3.setHeading(e + ik * it, { noAnimation: true });
          }
          if (typeof h9 === "number") {
            h3.setTilt(hZ + ig * it, { noAnimation: true });
          }
        },
        callback: function(it, iu) {
          h3.setLock(false);
          if (iu && iu.stop === true) {
            h3.fire(new bc("onmoveend"));
            h3.fire(new bc("onzoomend"));
            h7.callback && h7.callback(it);
            return;
          }
          if (io !== h3.zoomLevel) {
            h3.zoomLevel = io;
            h3.fire(new bc("onzoom_changed"));
          }
          h3.fire(new bc("onmoveend"));
          h3.fire(new bc("onzoomend"));
          h7.callback && h7.callback(it);
        },
      });
    },
    zoomScale: function(e) {
      return Math.pow(2, e);
    },
    scaleZoom: function(e) {
      return Math.log(e) / Math.LN2;
    },
    panToIn: function(i, T) {
      T = T || {};
      if (!i || i.equals(this.centerPoint)) {
        T.callback && T.callback();
        return;
      }
      var hS = this.pointToPixelIn(i);
      var e = Math.round(this.width / 2);
      var hU = Math.round(this.height / 2);
      var hT = this._ifUseAnimation(i, this.zoomLevel);
      if (T.noAnimation === true || hT === false) {
        this._stopAllAnimations();
        this._panToIn(e - hS.x, hU - hS.y, i);
        T.callback && T.callback();
        return;
      }
      this.flyToIn(i, this.zoomLevel, T);
    },
    _panToIn: function(i, e, hS) {
      var T = this.temp;
      if (T.operating === true) {
        return;
      }
      if (T.dragAni) {
        T.dragAni.stop(false, { readyToMove: true });
        T.dragAni = null;
      }
      this.dispatchEvent(new bc("onmovestart"));
      this._setPlatformPosition(i, e, { point: hS });
      this.dispatchEvent(new bc("onmoveend"));
    },
    _stopAllAnimations: function(e) {
      e = e || {};
      if (this._ani) {
        this._ani.stop(!!e.goToEnd, {
          stopCurrentAnimation: e.stopCurrentAnimation,
        });
        this._ani = null;
      }
      if (this._infiniteAni) {
        this._infiniteAni.stop();
        this._infiniteAni = null;
      }
    },
    panBy: function(i, e, T) {
      i = Math.round(i) || 0;
      e = Math.round(e) || 0;
      T = T || {};
      if (
        Math.abs(i) <= this.width &&
        Math.abs(e) <= this.height &&
        T.noAnimation !== true
      ) {
        this._panBy(i, e, T);
      } else {
        this._panToIn(i, e, T.point);
        T.callback && T.callback();
      }
    },
    _panBy: function(i, e, hT) {
      if (this.temp.operating === true) {
        return;
      }
      hT = hT || {};
      this.dispatchEvent(new bc("onmovestart"));
      var hS = this;
      var T = hS.temp;
      T.pl = hS.offsetX;
      T.pt = hS.offsetY;
      if (T.tlPan) {
        T.tlPan.cancel();
      }
      if (T.dragAni) {
        T.dragAni.stop(false, { readyToMove: true });
        T.dragAni = null;
      }
      T.tlPan = new p({
        fps: hT.fps || hS.config.fps,
        duration: hT.duration || hS.config.actionDuration,
        transition: hT.transition || co.easeInOutQuad,
        render: function(hU) {
          this.terminative = hS.temp.operating;
          if (hS.temp.operating) {
            return;
          }
          hS._setPlatformPosition(i * hU, e * hU, {
            initMapOffsetX: T.pl,
            initMapOffsetY: T.pt,
          });
        },
        finish: function(hU) {
          hS.dispatchEvent(new bc("onmoveend"));
          hS.temp.tlPan = false;
          if (hS.temp.stopArrow === true) {
            hS.temp.stopArrow = false;
            if (hS.temp.arrow !== 0) {
              hS._arrow();
            }
          }
        },
      });
    },
    _startAnimation: function(i) {
      var hT = this._animationInfo;
      var T = this;
      i = i || {};
      if (T._ani) {
        T._ani.stop(!!i.goToEnd, {
          stopCurrentAnimation: i.stopCurrentAnimation,
        });
      }
      if (T._infiniteAni) {
        T._infiniteAni.stop();
        T._infiniteAni = null;
      }
      var hU = i.duration || 500;
      var hV = i.transition || co.ease;
      var e = new bc("onanimation_start");
      this.fire(e);
      if (i.unstopable) {
        hT = this._animationInfoUnstopable;
      }
      var hS = new p({
        duration: hU,
        transition: hV,
        render: function(hY, hX) {
          for (var hW in hT) {
            if (!hT.hasOwnProperty(hW)) {
              continue;
            }
            var h0 = hT[hW].current;
            var hZ = hT[hW].diff;
            T._setValueTick(hW, h0, hZ, hY);
          }
          if (i.renderCallback) {
            i.renderCallback(hY, hX);
          }
        },
        finish: function(hW) {
          T.fire(new bc("onanimation_end"));
          if (i.unstopable) {
            T._animationInfoUnstopable = {};
            T._unstopableAni = null;
          } else {
            T._ani = null;
            T._animationInfo = {};
          }
          if (i.mapNeedCbk) {
            i.mapNeedCbk();
          }
          if (i.callback) {
            i.callback(hW);
          }
        },
        onStop: function(hW) {
          hW = hW || {};
          T.fire(new bc("onanimation_end"));
          if (hW.stopCurrentAnimation) {
            T._animationInfo = {};
          }
          T._ani = null;
          if (i.mapNeedCbk) {
            i.mapNeedCbk();
          }
          if (i.callback) {
            i.callback(null, { stop: true });
          }
        },
      });
      if (i.unstopable) {
        T._unstopableAni = hS;
      } else {
        T._ani = hS;
      }
    },
    _startInfiniteZoomAnimation: function(e) {
      var i = this;
      if (i._ani) {
        i._ani.stop(!!e.goToEnd, {
          stopCurrentAnimation: e.stopCurrentAnimation,
        });
      }
      if (i._infiniteAni) {
        return;
      }
      this.fire(new bc("onanimation_start"));
      i._infiniteAni = new p({
        duration: 10000,
        transition: co.linear,
        render: function() {
          var T = i._animationInfo.zoom;
          if (Math.abs(T.current - T.target) < 0.001) {
            i._setValue("zoom", T.target);
            i._infiniteAni.stop();
            return;
          }
          T.current += (T.target - T.current) * 0.35;
          i._setValue("zoom", T.current);
          if (e.renderCallback) {
            e.renderCallback();
          }
        },
        finish: function() {
          i._infiniteAni = null;
          i._animationInfo = {};
          i.fire(new bc("onanimation_end"));
          if (e.callback) {
            e.callback();
          }
        },
        onStop: function() {
          i._infiniteAni = null;
          i._animationInfo = {};
          i.fire(new bc("onanimation_end"));
          if (e.callback) {
            e.callback();
          }
        },
      });
    },
    _setValue: function(e, T) {
      if (e === "zoom") {
        this._preZoomLevel = this.zoomLevel;
        var i = this._getProperZoom(T);
        T = i.zoom;
        if (T !== this.zoomLevel) {
          this.zoomLevel = T;
          if (T < 5) {
            this.restrictCenter(this.centerPoint);
          }
          this.fire(new bc("on" + e + "_changed"));
        }
        return;
      } else {
        if (e === "center") {
          this.centerPoint = T;
        }
      }
      this["_" + e] = T;
      this.fire(new bc("on" + e + "_changed"));
    },
    _setValueTick: function(e, hT, hS, i) {
      if (e === "center") {
        var T = new ht(hT.lng + hS.lng * i, hT.lat + hS.lat * i);
        this._setValue(e, T);
        return;
      }
      if (e === "zoom") {
        this._setValue(e, Math.pow(hT, 1 - i) * Math.pow(hT + hS, i));
        return;
      }
      this._setValue(e, hT + hS * i);
    },
    setHeading: function(hS, i) {
      i = i || {};
      if (hS === this._heading) {
        i.callback && i.callback();
        return;
      }
      var T = f0(this._heading, 360);
      var e = f0(hS, 360);
      if (e === T) {
        this._heading = hS;
        i.callback && i.callback();
        return;
      }
      if (i.noAnimation) {
        this._setValue("heading", hS);
        i.callback && i.callback();
        return;
      }
      if (i.unstopable) {
        this._animationInfoUnstopable.heading = {
          current: this._heading,
          diff: hS - this._heading,
        };
      } else {
        this._animationInfo.heading = {
          current: this._heading,
          diff: hS - this._heading,
        };
      }
      this._startAnimation(i);
    },
    resetHeading: function(e) {
      var i = this._heading;
      while (i < 0) {
        i += 360;
      }
      i = i % 360;
      if (i > 180) {
        i -= 360;
      }
      this._heading = i;
      e = e || {};
      e.unstopable = true;
      this.setHeading(0, e);
    },
    getHeading: function() {
      return this._heading;
    },
    setTilt: function(e, i) {
      i = i || {};
      if (e === this._tilt) {
        i.callback && i.callback();
        return;
      }
      if (e > c9.MAX_TILT) {
        e = c9.MAX_TILT;
      }
      if (e < c9.MIN_TILT) {
        e = c9.MIN_TILT;
      }
      if (i && i.noAnimation) {
        this._setValue("tilt", e);
        i.callback && i.callback();
        return;
      }
      this._animationInfo.tilt = { current: this._tilt, diff: e - this._tilt };
      this._startAnimation(i);
    },
    getTilt: function() {
      return this._tilt;
    },
    getCenterIn: function() {
      return this.centerPoint;
    },
    getZoom: function() {
      return this.zoomLevel;
    },
    getCameraPosition: function(T) {
      T = T || {};
      var e = T.center || this.centerPoint;
      var hS = T.zoom || this.zoomLevel;
      var hV = typeof T.heading === "number" ? T.heading : this._heading;
      var i = typeof T.tilt === "number" ? T.tilt : this._tilt;
      var hU = this._webglMapCamera.generateMVMatrix(e, hS, hV, i);
      var hT = mat4.create(Float32Array);
      mat4.invert(hT, hU);
      return this._webglMapCamera.getPosition(hT);
    },
  });
  function fP(i) {
    this._jobQueue = [];
    this._idleOnlyJobQueue = [];
    var e = this;
    this.isIdle = true;
    i.on("updateframe", function(hS) {
      var T = 12 - hS.frameTime;
      T = T < 1 ? 1 : T;
      e.isIdle = false;
      if (e.idleWorkTimer) {
        clearInterval(e.idleWorkTimer);
        e.idleWorkTimer = null;
      }
      e.runJobs(T);
    });
    this._idleWorkerTicker = (function(T) {
      return function() {
        if (T.isIdle) {
          T.runJobs();
          T.runIdleOnlyJobs();
        }
      };
    })(this);
    i.on("mapglidle", function() {
      e.isIdle = true;
      e.runJobs();
      e.runIdleOnlyJobs();
      e.idleWorkTimer = setInterval(e._idleWorkerTicker, fP.MAX_IDLE_TIME);
    });
  }
  fP.MAX_IDLE_TIME = 50;
  fP.MAX_FRAME_TIME = 6;
  fP.prototype.runJobs = function(i) {
    if (this._jobQueue.length === 0) {
      return;
    }
    var hS = fC();
    var e = 0;
    i = i || fP.MAX_FRAME_TIME;
    while (this._jobQueue.length && e < i) {
      var T = this._jobQueue.shift();
      if (T.state !== "invalid") {
        T.call();
      }
      e = fC() - hS;
    }
  };
  fP.prototype.runIdleOnlyJobs = function() {
    if (this._idleOnlyJobQueue.length === 0) {
      return;
    }
    var T = fC();
    var e = 0;
    while (this._idleOnlyJobQueue.length && e < fP.MAX_IDLE_TIME) {
      var i = this._idleOnlyJobQueue.shift();
      if (i.state !== "invalid") {
        i.call();
      }
      e = fC() - T;
    }
  };
  fP.prototype.checkIdleRunning = function() {
    if (this.isIdle && !this.idleWorkTimer) {
      this.runJobs();
      this.runIdleOnlyJobs();
      this.idleWorkTimer = setInterval(this._idleWorkerTicker, 50);
    }
  };
  fP.prototype.addJob = function(e) {
    this._jobQueue.push(e);
    this.checkIdleRunning();
  };
  fP.prototype.clearJobs = function() {
    this._jobQueue.length = 0;
    this._idleOnlyJobQueue.length = 0;
  };
  fP.prototype.addIdleOnlyJob = function(e) {
    this._idleOnlyJobQueue.push(e);
    this.checkIdleRunning();
  };
  var cc = {};
  (function(hV) {
    if (!hZ) {
      var hZ = 0.000001;
    }
    if (!i) {
      var i = typeof Float32Array !== "undefined" ? Float32Array : Array;
    }
    if (!hT) {
      var hT = Math.random;
    }
    var T = {};
    var hU = Math.PI / 180;
    T.toRadian = function(h0) {
      return h0 * hU;
    };
    var hY = {};
    hY.create = function(h1) {
      h1 = h1 || i;
      var h0 = new h1(2);
      h0[0] = 0;
      h0[1] = 0;
      return h0;
    };
    hY.clone = function(h0, h2) {
      h2 = h2 || i;
      var h1 = new h2(2);
      h1[0] = h0[0];
      h1[1] = h0[1];
      return h1;
    };
    hY.fromValues = function(h0, h3, h2) {
      h2 = h2 || i;
      var h1 = new h2(2);
      h1[0] = h0;
      h1[1] = h3;
      return h1;
    };
    hY.copy = function(h1, h0) {
      h1[0] = h0[0];
      h1[1] = h0[1];
      return h1;
    };
    hY.set = function(h1, h0, h2) {
      h1[0] = h0;
      h1[1] = h2;
      return h1;
    };
    hY.add = function(h2, h1, h0) {
      h2[0] = h1[0] + h0[0];
      h2[1] = h1[1] + h0[1];
      return h2;
    };
    hY.subtract = function(h2, h1, h0) {
      h2[0] = h1[0] - h0[0];
      h2[1] = h1[1] - h0[1];
      return h2;
    };
    hY.sub = hY.subtract;
    hY.multiply = function(h2, h1, h0) {
      h2[0] = h1[0] * h0[0];
      h2[1] = h1[1] * h0[1];
      return h2;
    };
    hY.mul = hY.multiply;
    hY.divide = function(h2, h1, h0) {
      h2[0] = h1[0] / h0[0];
      h2[1] = h1[1] / h0[1];
      return h2;
    };
    hY.div = hY.divide;
    hY.min = function(h2, h1, h0) {
      h2[0] = Math.min(h1[0], h0[0]);
      h2[1] = Math.min(h1[1], h0[1]);
      return h2;
    };
    hY.max = function(h2, h1, h0) {
      h2[0] = Math.max(h1[0], h0[0]);
      h2[1] = Math.max(h1[1], h0[1]);
      return h2;
    };
    hY.scale = function(h2, h1, h0) {
      h2[0] = h1[0] * h0;
      h2[1] = h1[1] * h0;
      return h2;
    };
    hY.scaleAndAdd = function(h2, h1, h0, h3) {
      h2[0] = h1[0] + h0[0] * h3;
      h2[1] = h1[1] + h0[1] * h3;
      return h2;
    };
    hY.distance = function(h2, h1) {
      var h0 = h1[0] - h2[0],
        h3 = h1[1] - h2[1];
      return Math.sqrt(h0 * h0 + h3 * h3);
    };
    hY.dist = hY.distance;
    hY.squaredDistance = function(h2, h1) {
      var h0 = h1[0] - h2[0],
        h3 = h1[1] - h2[1];
      return h0 * h0 + h3 * h3;
    };
    hY.sqrDist = hY.squaredDistance;
    hY.length = function(h1) {
      var h0 = h1[0],
        h2 = h1[1];
      return Math.sqrt(h0 * h0 + h2 * h2);
    };
    hY.len = hY.length;
    hY.squaredLength = function(h1) {
      var h0 = h1[0],
        h2 = h1[1];
      return h0 * h0 + h2 * h2;
    };
    hY.sqrLen = hY.squaredLength;
    hY.negate = function(h1, h0) {
      h1[0] = -h0[0];
      h1[1] = -h0[1];
      return h1;
    };
    hY.normalize = function(h3, h2) {
      var h1 = h2[0],
        h4 = h2[1];
      var h0 = h1 * h1 + h4 * h4;
      if (h0 > 0) {
        h0 = 1 / Math.sqrt(h0);
        h3[0] = h2[0] * h0;
        h3[1] = h2[1] * h0;
      }
      return h3;
    };
    hY.dot = function(h1, h0) {
      return h1[0] * h0[0] + h1[1] * h0[1];
    };
    hY.cross = function(h2, h1, h0) {
      var h3 = h1[0] * h0[1] - h1[1] * h0[0];
      h2[0] = h2[1] = 0;
      h2[2] = h3;
      return h2;
    };
    hY.lerp = function(h2, h1, h0, h3) {
      var h5 = h1[0],
        h4 = h1[1];
      h2[0] = h5 + h3 * (h0[0] - h5);
      h2[1] = h4 + h3 * (h0[1] - h4);
      return h2;
    };
    hY.random = function(h0, h2) {
      h2 = h2 || 1;
      var h1 = hT() * 2 * Math.PI;
      h0[0] = Math.cos(h1) * h2;
      h0[1] = Math.sin(h1) * h2;
      return h0;
    };
    hY.transformMat2 = function(h3, h2, h1) {
      var h0 = h2[0],
        h4 = h2[1];
      h3[0] = h1[0] * h0 + h1[2] * h4;
      h3[1] = h1[1] * h0 + h1[3] * h4;
      return h3;
    };
    hY.transformMat2d = function(h3, h2, h1) {
      var h0 = h2[0],
        h4 = h2[1];
      h3[0] = h1[0] * h0 + h1[2] * h4 + h1[4];
      h3[1] = h1[1] * h0 + h1[3] * h4 + h1[5];
      return h3;
    };
    hY.transformMat3 = function(h3, h2, h1) {
      var h0 = h2[0],
        h4 = h2[1];
      h3[0] = h1[0] * h0 + h1[3] * h4 + h1[6];
      h3[1] = h1[1] * h0 + h1[4] * h4 + h1[7];
      return h3;
    };
    hY.transformMat4 = function(h3, h2, h1) {
      var h0 = h2[0],
        h4 = h2[1];
      h3[0] = h1[0] * h0 + h1[4] * h4 + h1[12];
      h3[1] = h1[1] * h0 + h1[5] * h4 + h1[13];
      return h3;
    };
    hY.rotate = function(h3, h1, h0, h7) {
      var h6 = h1[0] - h0[0];
      var h5 = h1[1] - h0[1];
      var h2 = Math.sin(h7);
      var h4 = Math.cos(h7);
      h3[0] = h6 * h4 - h5 * h2 + h0[0];
      h3[1] = h6 * h2 + h5 * h4 + h0[1];
      return h3;
    };
    hY.forEach = (function() {
      var h0 = hY.create();
      return function(h3, h7, h8, h6, h5, h1) {
        var h4, h2;
        if (!h7) {
          h7 = 2;
        }
        if (!h8) {
          h8 = 0;
        }
        if (h6) {
          h2 = Math.min(h6 * h7 + h8, h3.length);
        } else {
          h2 = h3.length;
        }
        for (h4 = h8; h4 < h2; h4 += h7) {
          h0[0] = h3[h4];
          h0[1] = h3[h4 + 1];
          h5(h0, h0, h1);
          h3[h4] = h0[0];
          h3[h4 + 1] = h0[1];
        }
        return h3;
      };
    })();
    hY.str = function(h0) {
      return "vec2(" + h0[0] + ", " + h0[1] + ")";
    };
    hV.vec2 = hY;
    var hX = {};
    hX.create = function(h1) {
      h1 = h1 || i;
      var h0 = new h1(3);
      h0[0] = 0;
      h0[1] = 0;
      h0[2] = 0;
      return h0;
    };
    hX.clone = function(h0, h2) {
      h2 = h2 || i;
      var h1 = new h2(3);
      h1[0] = h0[0];
      h1[1] = h0[1];
      h1[2] = h0[2];
      return h1;
    };
    hX.fromValues = function(h0, h4, h2, h3) {
      h3 = h3 || i;
      var h1 = new h3(3);
      h1[0] = h0;
      h1[1] = h4;
      h1[2] = h2;
      return h1;
    };
    hX.copy = function(h1, h0) {
      h1[0] = h0[0];
      h1[1] = h0[1];
      h1[2] = h0[2];
      return h1;
    };
    hX.set = function(h1, h0, h3, h2) {
      h1[0] = h0;
      h1[1] = h3;
      h1[2] = h2;
      return h1;
    };
    hX.add = function(h2, h1, h0) {
      h2[0] = h1[0] + h0[0];
      h2[1] = h1[1] + h0[1];
      h2[2] = h1[2] + h0[2];
      return h2;
    };
    hX.subtract = function(h2, h1, h0) {
      h2[0] = h1[0] - h0[0];
      h2[1] = h1[1] - h0[1];
      h2[2] = h1[2] - h0[2];
      return h2;
    };
    hX.sub = hX.subtract;
    hX.multiply = function(h2, h1, h0) {
      h2[0] = h1[0] * h0[0];
      h2[1] = h1[1] * h0[1];
      h2[2] = h1[2] * h0[2];
      return h2;
    };
    hX.mul = hX.multiply;
    hX.divide = function(h2, h1, h0) {
      h2[0] = h1[0] / h0[0];
      h2[1] = h1[1] / h0[1];
      h2[2] = h1[2] / h0[2];
      return h2;
    };
    hX.div = hX.divide;
    hX.min = function(h2, h1, h0) {
      h2[0] = Math.min(h1[0], h0[0]);
      h2[1] = Math.min(h1[1], h0[1]);
      h2[2] = Math.min(h1[2], h0[2]);
      return h2;
    };
    hX.max = function(h2, h1, h0) {
      h2[0] = Math.max(h1[0], h0[0]);
      h2[1] = Math.max(h1[1], h0[1]);
      h2[2] = Math.max(h1[2], h0[2]);
      return h2;
    };
    hX.scale = function(h2, h1, h0) {
      h2[0] = h1[0] * h0;
      h2[1] = h1[1] * h0;
      h2[2] = h1[2] * h0;
      return h2;
    };
    hX.scaleAndAdd = function(h2, h1, h0, h3) {
      h2[0] = h1[0] + h0[0] * h3;
      h2[1] = h1[1] + h0[1] * h3;
      h2[2] = h1[2] + h0[2] * h3;
      return h2;
    };
    hX.distance = function(h2, h1) {
      var h0 = h1[0] - h2[0],
        h4 = h1[1] - h2[1],
        h3 = h1[2] - h2[2];
      return Math.sqrt(h0 * h0 + h4 * h4 + h3 * h3);
    };
    hX.dist = hX.distance;
    hX.squaredDistance = function(h2, h1) {
      var h0 = h1[0] - h2[0],
        h4 = h1[1] - h2[1],
        h3 = h1[2] - h2[2];
      return h0 * h0 + h4 * h4 + h3 * h3;
    };
    hX.sqrDist = hX.squaredDistance;
    hX.length = function(h1) {
      var h0 = h1[0],
        h3 = h1[1],
        h2 = h1[2];
      return Math.sqrt(h0 * h0 + h3 * h3 + h2 * h2);
    };
    hX.len = hX.length;
    hX.squaredLength = function(h1) {
      var h0 = h1[0],
        h3 = h1[1],
        h2 = h1[2];
      return h0 * h0 + h3 * h3 + h2 * h2;
    };
    hX.sqrLen = hX.squaredLength;
    hX.negate = function(h1, h0) {
      h1[0] = -h0[0];
      h1[1] = -h0[1];
      h1[2] = -h0[2];
      return h1;
    };
    hX.normalize = function(h3, h2) {
      var h1 = h2[0],
        h5 = h2[1],
        h4 = h2[2];
      var h0 = h1 * h1 + h5 * h5 + h4 * h4;
      if (h0 > 0) {
        h0 = 1 / Math.sqrt(h0);
        h3[0] = h2[0] * h0;
        h3[1] = h2[1] * h0;
        h3[2] = h2[2] * h0;
      }
      return h3;
    };
    hX.dot = function(h1, h0) {
      return h1[0] * h0[0] + h1[1] * h0[1] + h1[2] * h0[2];
    };
    hX.cross = function(h1, h6, h5) {
      var h0 = h6[0],
        h8 = h6[1],
        h7 = h6[2],
        h4 = h5[0],
        h3 = h5[1],
        h2 = h5[2];
      h1[0] = h8 * h2 - h7 * h3;
      h1[1] = h7 * h4 - h0 * h2;
      h1[2] = h0 * h3 - h8 * h4;
      return h1;
    };
    hX.lerp = function(h2, h1, h0, h3) {
      var h6 = h1[0],
        h5 = h1[1],
        h4 = h1[2];
      h2[0] = h6 + h3 * (h0[0] - h6);
      h2[1] = h5 + h3 * (h0[1] - h5);
      h2[2] = h4 + h3 * (h0[2] - h4);
      return h2;
    };
    hX.random = function(h0, h4) {
      h4 = h4 || 1;
      var h2 = hT() * 2 * Math.PI;
      var h3 = hT() * 2 - 1;
      var h1 = Math.sqrt(1 - h3 * h3) * h4;
      h0[0] = Math.cos(h2) * h1;
      h0[1] = Math.sin(h2) * h1;
      h0[2] = h3 * h4;
      return h0;
    };
    hX.transformMat4 = function(h3, h2, h1) {
      var h0 = h2[0],
        h5 = h2[1],
        h4 = h2[2];
      h3[0] = h1[0] * h0 + h1[4] * h5 + h1[8] * h4 + h1[12];
      h3[1] = h1[1] * h0 + h1[5] * h5 + h1[9] * h4 + h1[13];
      h3[2] = h1[2] * h0 + h1[6] * h5 + h1[10] * h4 + h1[14];
      return h3;
    };
    hX.transformMat3 = function(h3, h2, h1) {
      var h0 = h2[0],
        h5 = h2[1],
        h4 = h2[2];
      h3[0] = h0 * h1[0] + h5 * h1[3] + h4 * h1[6];
      h3[1] = h0 * h1[1] + h5 * h1[4] + h4 * h1[7];
      h3[2] = h0 * h1[2] + h5 * h1[5] + h4 * h1[8];
      return h3;
    };
    hX.transformQuat = function(h6, ic, h0) {
      var id = ic[0],
        ib = ic[1],
        ia = ic[2],
        h8 = h0[0],
        h7 = h0[1],
        h5 = h0[2],
        h9 = h0[3],
        h3 = h9 * id + h7 * ia - h5 * ib,
        h2 = h9 * ib + h5 * id - h8 * ia,
        h1 = h9 * ia + h8 * ib - h7 * id,
        h4 = -h8 * id - h7 * ib - h5 * ia;
      h6[0] = h3 * h9 + h4 * -h8 + h2 * -h5 - h1 * -h7;
      h6[1] = h2 * h9 + h4 * -h7 + h1 * -h8 - h3 * -h5;
      h6[2] = h1 * h9 + h4 * -h5 + h3 * -h7 - h2 * -h8;
      return h6;
    };
    hX.rotateX = function(h2, h1, h0, h5) {
      var h4 = [],
        h3 = [];
      h4[0] = h1[0] - h0[0];
      h4[1] = h1[1] - h0[1];
      h4[2] = h1[2] - h0[2];
      h3[0] = h4[0];
      h3[1] = h4[1] * Math.cos(h5) - h4[2] * Math.sin(h5);
      h3[2] = h4[1] * Math.sin(h5) + h4[2] * Math.cos(h5);
      h2[0] = h3[0] + h0[0];
      h2[1] = h3[1] + h0[1];
      h2[2] = h3[2] + h0[2];
      return h2;
    };
    hX.rotateY = function(h2, h1, h0, h5) {
      var h4 = [],
        h3 = [];
      h4[0] = h1[0] - h0[0];
      h4[1] = h1[1] - h0[1];
      h4[2] = h1[2] - h0[2];
      h3[0] = h4[2] * Math.sin(h5) + h4[0] * Math.cos(h5);
      h3[1] = h4[1];
      h3[2] = h4[2] * Math.cos(h5) - h4[0] * Math.sin(h5);
      h2[0] = h3[0] + h0[0];
      h2[1] = h3[1] + h0[1];
      h2[2] = h3[2] + h0[2];
      return h2;
    };
    hX.rotateZ = function(h2, h1, h0, h5) {
      var h4 = [],
        h3 = [];
      h4[0] = h1[0] - h0[0];
      h4[1] = h1[1] - h0[1];
      h4[2] = h1[2] - h0[2];
      h3[0] = h4[0] * Math.cos(h5) - h4[1] * Math.sin(h5);
      h3[1] = h4[0] * Math.sin(h5) + h4[1] * Math.cos(h5);
      h3[2] = h4[2];
      h2[0] = h3[0] + h0[0];
      h2[1] = h3[1] + h0[1];
      h2[2] = h3[2] + h0[2];
      return h2;
    };
    hX.forEach = (function() {
      var h0 = hX.create();
      return function(h3, h7, h8, h6, h5, h1) {
        var h4, h2;
        if (!h7) {
          h7 = 3;
        }
        if (!h8) {
          h8 = 0;
        }
        if (h6) {
          h2 = Math.min(h6 * h7 + h8, h3.length);
        } else {
          h2 = h3.length;
        }
        for (h4 = h8; h4 < h2; h4 += h7) {
          h0[0] = h3[h4];
          h0[1] = h3[h4 + 1];
          h0[2] = h3[h4 + 2];
          h5(h0, h0, h1);
          h3[h4] = h0[0];
          h3[h4 + 1] = h0[1];
          h3[h4 + 2] = h0[2];
        }
        return h3;
      };
    })();
    hX.str = function(h0) {
      return "vec3(" + h0[0] + ", " + h0[1] + ", " + h0[2] + ")";
    };
    hV.vec3 = hX;
    var hW = {};
    hW.create = function(h1) {
      h1 = h1 || i;
      var h0 = new h1(4);
      h0[0] = 0;
      h0[1] = 0;
      h0[2] = 0;
      h0[3] = 0;
      return h0;
    };
    hW.clone = function(h0, h2) {
      h2 = h2 || i;
      var h1 = new h2(4);
      h1[0] = h0[0];
      h1[1] = h0[1];
      h1[2] = h0[2];
      h1[3] = h0[3];
      return h1;
    };
    hW.fromValues = function(h0, h5, h3, h1, h4) {
      h4 = h4 || i;
      var h2 = new h4(4);
      h2[0] = h0;
      h2[1] = h5;
      h2[2] = h3;
      h2[3] = h1;
      return h2;
    };
    hW.copy = function(h1, h0) {
      h1[0] = h0[0];
      h1[1] = h0[1];
      h1[2] = h0[2];
      h1[3] = h0[3];
      return h1;
    };
    hW.set = function(h2, h0, h4, h3, h1) {
      h2[0] = h0;
      h2[1] = h4;
      h2[2] = h3;
      h2[3] = h1;
      return h2;
    };
    hW.add = function(h2, h1, h0) {
      h2[0] = h1[0] + h0[0];
      h2[1] = h1[1] + h0[1];
      h2[2] = h1[2] + h0[2];
      h2[3] = h1[3] + h0[3];
      return h2;
    };
    hW.subtract = function(h2, h1, h0) {
      h2[0] = h1[0] - h0[0];
      h2[1] = h1[1] - h0[1];
      h2[2] = h1[2] - h0[2];
      h2[3] = h1[3] - h0[3];
      return h2;
    };
    hW.sub = hW.subtract;
    hW.multiply = function(h2, h1, h0) {
      h2[0] = h1[0] * h0[0];
      h2[1] = h1[1] * h0[1];
      h2[2] = h1[2] * h0[2];
      h2[3] = h1[3] * h0[3];
      return h2;
    };
    hW.mul = hW.multiply;
    hW.divide = function(h2, h1, h0) {
      h2[0] = h1[0] / h0[0];
      h2[1] = h1[1] / h0[1];
      h2[2] = h1[2] / h0[2];
      h2[3] = h1[3] / h0[3];
      return h2;
    };
    hW.div = hW.divide;
    hW.min = function(h2, h1, h0) {
      h2[0] = Math.min(h1[0], h0[0]);
      h2[1] = Math.min(h1[1], h0[1]);
      h2[2] = Math.min(h1[2], h0[2]);
      h2[3] = Math.min(h1[3], h0[3]);
      return h2;
    };
    hW.max = function(h2, h1, h0) {
      h2[0] = Math.max(h1[0], h0[0]);
      h2[1] = Math.max(h1[1], h0[1]);
      h2[2] = Math.max(h1[2], h0[2]);
      h2[3] = Math.max(h1[3], h0[3]);
      return h2;
    };
    hW.scale = function(h2, h1, h0) {
      h2[0] = h1[0] * h0;
      h2[1] = h1[1] * h0;
      h2[2] = h1[2] * h0;
      h2[3] = h1[3] * h0;
      return h2;
    };
    hW.scaleAndAdd = function(h2, h1, h0, h3) {
      h2[0] = h1[0] + h0[0] * h3;
      h2[1] = h1[1] + h0[1] * h3;
      h2[2] = h1[2] + h0[2] * h3;
      h2[3] = h1[3] + h0[3] * h3;
      return h2;
    };
    hW.distance = function(h3, h1) {
      var h0 = h1[0] - h3[0],
        h5 = h1[1] - h3[1],
        h4 = h1[2] - h3[2],
        h2 = h1[3] - h3[3];
      return Math.sqrt(h0 * h0 + h5 * h5 + h4 * h4 + h2 * h2);
    };
    hW.dist = hW.distance;
    hW.squaredDistance = function(h3, h1) {
      var h0 = h1[0] - h3[0],
        h5 = h1[1] - h3[1],
        h4 = h1[2] - h3[2],
        h2 = h1[3] - h3[3];
      return h0 * h0 + h5 * h5 + h4 * h4 + h2 * h2;
    };
    hW.sqrDist = hW.squaredDistance;
    hW.length = function(h2) {
      var h0 = h2[0],
        h4 = h2[1],
        h3 = h2[2],
        h1 = h2[3];
      return Math.sqrt(h0 * h0 + h4 * h4 + h3 * h3 + h1 * h1);
    };
    hW.len = hW.length;
    hW.squaredLength = function(h2) {
      var h0 = h2[0],
        h4 = h2[1],
        h3 = h2[2],
        h1 = h2[3];
      return h0 * h0 + h4 * h4 + h3 * h3 + h1 * h1;
    };
    hW.sqrLen = hW.squaredLength;
    hW.negate = function(h1, h0) {
      h1[0] = -h0[0];
      h1[1] = -h0[1];
      h1[2] = -h0[2];
      h1[3] = -h0[3];
      return h1;
    };
    hW.normalize = function(h4, h3) {
      var h1 = h3[0],
        h6 = h3[1],
        h5 = h3[2],
        h2 = h3[3];
      var h0 = h1 * h1 + h6 * h6 + h5 * h5 + h2 * h2;
      if (h0 > 0) {
        h0 = 1 / Math.sqrt(h0);
        h4[0] = h3[0] * h0;
        h4[1] = h3[1] * h0;
        h4[2] = h3[2] * h0;
        h4[3] = h3[3] * h0;
      }
      return h4;
    };
    hW.dot = function(h1, h0) {
      return h1[0] * h0[0] + h1[1] * h0[1] + h1[2] * h0[2] + h1[3] * h0[3];
    };
    hW.lerp = function(h2, h1, h0, h3) {
      var h6 = h1[0],
        h5 = h1[1],
        h4 = h1[2],
        h7 = h1[3];
      h2[0] = h6 + h3 * (h0[0] - h6);
      h2[1] = h5 + h3 * (h0[1] - h5);
      h2[2] = h4 + h3 * (h0[2] - h4);
      h2[3] = h7 + h3 * (h0[3] - h7);
      return h2;
    };
    hW.random = function(h0, h1) {
      h1 = h1 || 1;
      h0[0] = hT();
      h0[1] = hT();
      h0[2] = hT();
      h0[3] = hT();
      hW.normalize(h0, h0);
      hW.scale(h0, h0, h1);
      return h0;
    };
    hW.transformMat4 = function(h4, h3, h1) {
      var h0 = h3[0],
        h6 = h3[1],
        h5 = h3[2],
        h2 = h3[3];
      h4[0] = h1[0] * h0 + h1[4] * h6 + h1[8] * h5 + h1[12] * h2;
      h4[1] = h1[1] * h0 + h1[5] * h6 + h1[9] * h5 + h1[13] * h2;
      h4[2] = h1[2] * h0 + h1[6] * h6 + h1[10] * h5 + h1[14] * h2;
      h4[3] = h1[3] * h0 + h1[7] * h6 + h1[11] * h5 + h1[15] * h2;
      return h4;
    };
    hW.transformQuat = function(h6, ic, h0) {
      var id = ic[0],
        ib = ic[1],
        ia = ic[2],
        h8 = h0[0],
        h7 = h0[1],
        h5 = h0[2],
        h9 = h0[3],
        h3 = h9 * id + h7 * ia - h5 * ib,
        h2 = h9 * ib + h5 * id - h8 * ia,
        h1 = h9 * ia + h8 * ib - h7 * id,
        h4 = -h8 * id - h7 * ib - h5 * ia;
      h6[0] = h3 * h9 + h4 * -h8 + h2 * -h5 - h1 * -h7;
      h6[1] = h2 * h9 + h4 * -h7 + h1 * -h8 - h3 * -h5;
      h6[2] = h1 * h9 + h4 * -h5 + h3 * -h7 - h2 * -h8;
      return h6;
    };
    hW.forEach = (function() {
      var h0 = hW.create();
      return function(h3, h7, h8, h6, h5, h1) {
        var h4, h2;
        if (!h7) {
          h7 = 4;
        }
        if (!h8) {
          h8 = 0;
        }
        if (h6) {
          h2 = Math.min(h6 * h7 + h8, h3.length);
        } else {
          h2 = h3.length;
        }
        for (h4 = h8; h4 < h2; h4 += h7) {
          h0[0] = h3[h4];
          h0[1] = h3[h4 + 1];
          h0[2] = h3[h4 + 2];
          h0[3] = h3[h4 + 3];
          h5(h0, h0, h1);
          h3[h4] = h0[0];
          h3[h4 + 1] = h0[1];
          h3[h4 + 2] = h0[2];
          h3[h4 + 3] = h0[3];
        }
        return h3;
      };
    })();
    hW.str = function(h0) {
      return "vec4(" + h0[0] + ", " + h0[1] + ", " + h0[2] + ", " + h0[3] + ")";
    };
    hV.vec4 = hW;
    var hS = {};
    hS.create = function(h1) {
      h1 = h1 || i;
      var h0 = new h1(4);
      h0[0] = 1;
      h0[1] = 0;
      h0[2] = 0;
      h0[3] = 1;
      return h0;
    };
    hS.clone = function(h0, h2) {
      h2 = h2 || i;
      var h1 = new h2(4);
      h1[0] = h0[0];
      h1[1] = h0[1];
      h1[2] = h0[2];
      h1[3] = h0[3];
      return h1;
    };
    hS.copy = function(h1, h0) {
      h1[0] = h0[0];
      h1[1] = h0[1];
      h1[2] = h0[2];
      h1[3] = h0[3];
      return h1;
    };
    hS.identity = function(h0) {
      h0[0] = 1;
      h0[1] = 0;
      h0[2] = 0;
      h0[3] = 1;
      return h0;
    };
    hS.transpose = function(h2, h1) {
      if (h2 === h1) {
        var h0 = h1[1];
        h2[1] = h1[2];
        h2[2] = h0;
      } else {
        h2[0] = h1[0];
        h2[1] = h1[2];
        h2[2] = h1[1];
        h2[3] = h1[3];
      }
      return h2;
    };
    hS.invert = function(h4, h2) {
      var h3 = h2[0],
        h1 = h2[1],
        h0 = h2[2],
        h6 = h2[3],
        h5 = h3 * h6 - h0 * h1;
      if (!h5) {
        return null;
      }
      h5 = 1 / h5;
      h4[0] = h6 * h5;
      h4[1] = -h1 * h5;
      h4[2] = -h0 * h5;
      h4[3] = h3 * h5;
      return h4;
    };
    hS.adjoint = function(h2, h0) {
      var h1 = h0[0];
      h2[0] = h0[3];
      h2[1] = -h0[1];
      h2[2] = -h0[2];
      h2[3] = h1;
      return h2;
    };
    hS.determinant = function(h0) {
      return h0[0] * h0[3] - h0[2] * h0[1];
    };
    hS.multiply = function(h4, h9, h7) {
      var h3 = h9[0],
        h2 = h9[1],
        h1 = h9[2],
        h0 = h9[3];
      var ia = h7[0],
        h8 = h7[1],
        h6 = h7[2],
        h5 = h7[3];
      h4[0] = h3 * ia + h1 * h8;
      h4[1] = h2 * ia + h0 * h8;
      h4[2] = h3 * h6 + h1 * h5;
      h4[3] = h2 * h6 + h0 * h5;
      return h4;
    };
    hS.mul = hS.multiply;
    hS.rotate = function(h4, h7, h6) {
      var h3 = h7[0],
        h2 = h7[1],
        h1 = h7[2],
        h0 = h7[3],
        h8 = Math.sin(h6),
        h5 = Math.cos(h6);
      h4[0] = h3 * h5 + h1 * h8;
      h4[1] = h2 * h5 + h0 * h8;
      h4[2] = h3 * -h8 + h1 * h5;
      h4[3] = h2 * -h8 + h0 * h5;
      return h4;
    };
    hS.scale = function(h4, h5, h7) {
      var h3 = h5[0],
        h2 = h5[1],
        h1 = h5[2],
        h0 = h5[3],
        h8 = h7[0],
        h6 = h7[1];
      h4[0] = h3 * h8;
      h4[1] = h2 * h8;
      h4[2] = h1 * h6;
      h4[3] = h0 * h6;
      return h4;
    };
    hS.str = function(h0) {
      return "mat2(" + h0[0] + ", " + h0[1] + ", " + h0[2] + ", " + h0[3] + ")";
    };
    hS.frob = function(h0) {
      return Math.sqrt(
        Math.pow(h0[0], 2) +
          Math.pow(h0[1], 2) +
          Math.pow(h0[2], 2) +
          Math.pow(h0[3], 2)
      );
    };
    hS.LDU = function(h0, h3, h2, h1) {
      h0[2] = h1[2] / h1[0];
      h2[0] = h1[0];
      h2[1] = h1[1];
      h2[3] = h1[3] - h0[2] * h2[1];
      return [h0, h3, h2];
    };
    hV.mat2 = hS;
    var e = {};
    e.create = function(h1) {
      h1 = h1 || i;
      var h0 = new h1(16);
      h0[0] = 1;
      h0[1] = 0;
      h0[2] = 0;
      h0[3] = 0;
      h0[4] = 0;
      h0[5] = 1;
      h0[6] = 0;
      h0[7] = 0;
      h0[8] = 0;
      h0[9] = 0;
      h0[10] = 1;
      h0[11] = 0;
      h0[12] = 0;
      h0[13] = 0;
      h0[14] = 0;
      h0[15] = 1;
      return h0;
    };
    e.clone = function(h0) {
      var h1 = new i(16);
      h1[0] = h0[0];
      h1[1] = h0[1];
      h1[2] = h0[2];
      h1[3] = h0[3];
      h1[4] = h0[4];
      h1[5] = h0[5];
      h1[6] = h0[6];
      h1[7] = h0[7];
      h1[8] = h0[8];
      h1[9] = h0[9];
      h1[10] = h0[10];
      h1[11] = h0[11];
      h1[12] = h0[12];
      h1[13] = h0[13];
      h1[14] = h0[14];
      h1[15] = h0[15];
      return h1;
    };
    e.copy = function(h1, h0) {
      h1[0] = h0[0];
      h1[1] = h0[1];
      h1[2] = h0[2];
      h1[3] = h0[3];
      h1[4] = h0[4];
      h1[5] = h0[5];
      h1[6] = h0[6];
      h1[7] = h0[7];
      h1[8] = h0[8];
      h1[9] = h0[9];
      h1[10] = h0[10];
      h1[11] = h0[11];
      h1[12] = h0[12];
      h1[13] = h0[13];
      h1[14] = h0[14];
      h1[15] = h0[15];
      return h1;
    };
    e.identity = function(h0) {
      h0[0] = 1;
      h0[1] = 0;
      h0[2] = 0;
      h0[3] = 0;
      h0[4] = 0;
      h0[5] = 1;
      h0[6] = 0;
      h0[7] = 0;
      h0[8] = 0;
      h0[9] = 0;
      h0[10] = 1;
      h0[11] = 0;
      h0[12] = 0;
      h0[13] = 0;
      h0[14] = 0;
      h0[15] = 1;
      return h0;
    };
    e.transpose = function(h3, h2) {
      if (h3 === h2) {
        var h7 = h2[1],
          h5 = h2[2],
          h4 = h2[3],
          h0 = h2[6],
          h6 = h2[7],
          h1 = h2[11];
        h3[1] = h2[4];
        h3[2] = h2[8];
        h3[3] = h2[12];
        h3[4] = h7;
        h3[6] = h2[9];
        h3[7] = h2[13];
        h3[8] = h5;
        h3[9] = h0;
        h3[11] = h2[14];
        h3[12] = h4;
        h3[13] = h6;
        h3[14] = h1;
      } else {
        h3[0] = h2[0];
        h3[1] = h2[4];
        h3[2] = h2[8];
        h3[3] = h2[12];
        h3[4] = h2[1];
        h3[5] = h2[5];
        h3[6] = h2[9];
        h3[7] = h2[13];
        h3[8] = h2[2];
        h3[9] = h2[6];
        h3[10] = h2[10];
        h3[11] = h2[14];
        h3[12] = h2[3];
        h3[13] = h2[7];
        h3[14] = h2[11];
        h3[15] = h2[15];
      }
      return h3;
    };
    e.invert = function(ik, iq) {
      var iv = iq[0],
        it = iq[1],
        ir = iq[2],
        io = iq[3],
        h4 = iq[4],
        h3 = iq[5],
        h2 = iq[6],
        h1 = iq[7],
        ij = iq[8],
        ii = iq[9],
        ih = iq[10],
        ig = iq[11],
        ix = iq[12],
        iw = iq[13],
        iu = iq[14],
        ip = iq[15],
        ie = iv * h3 - it * h4,
        id = iv * h2 - ir * h4,
        ic = iv * h1 - io * h4,
        ib = it * h2 - ir * h3,
        ia = it * h1 - io * h3,
        h9 = ir * h1 - io * h2,
        h8 = ij * iw - ii * ix,
        h7 = ij * iu - ih * ix,
        h6 = ij * ip - ig * ix,
        h5 = ii * iu - ih * iw,
        im = ii * ip - ig * iw,
        il = ih * ip - ig * iu,
        h0 = ie * il - id * im + ic * h5 + ib * h6 - ia * h7 + h9 * h8;
      if (!h0) {
        return null;
      }
      h0 = 1 / h0;
      ik[0] = (h3 * il - h2 * im + h1 * h5) * h0;
      ik[1] = (ir * im - it * il - io * h5) * h0;
      ik[2] = (iw * h9 - iu * ia + ip * ib) * h0;
      ik[3] = (ih * ia - ii * h9 - ig * ib) * h0;
      ik[4] = (h2 * h6 - h4 * il - h1 * h7) * h0;
      ik[5] = (iv * il - ir * h6 + io * h7) * h0;
      ik[6] = (iu * ic - ix * h9 - ip * id) * h0;
      ik[7] = (ij * h9 - ih * ic + ig * id) * h0;
      ik[8] = (h4 * im - h3 * h6 + h1 * h8) * h0;
      ik[9] = (it * h6 - iv * im - io * h8) * h0;
      ik[10] = (ix * ia - iw * ic + ip * ie) * h0;
      ik[11] = (ii * ic - ij * ia - ig * ie) * h0;
      ik[12] = (h3 * h7 - h4 * h5 - h2 * h8) * h0;
      ik[13] = (iv * h5 - it * h7 + ir * h8) * h0;
      ik[14] = (iw * id - ix * ib - iu * ie) * h0;
      ik[15] = (ij * ib - ii * id + ih * ie) * h0;
      return ik;
    };
    e.adjoint = function(h8, ib) {
      var ig = ib[0],
        id = ib[1],
        ic = ib[2],
        h9 = ib[3],
        h3 = ib[4],
        h2 = ib[5],
        h1 = ib[6],
        h0 = ib[7],
        h7 = ib[8],
        h6 = ib[9],
        h5 = ib[10],
        h4 = ib[11],
        ii = ib[12],
        ih = ib[13],
        ie = ib[14],
        ia = ib[15];
      h8[0] =
        h2 * (h5 * ia - h4 * ie) -
        h6 * (h1 * ia - h0 * ie) +
        ih * (h1 * h4 - h0 * h5);
      h8[1] = -(
        id * (h5 * ia - h4 * ie) -
        h6 * (ic * ia - h9 * ie) +
        ih * (ic * h4 - h9 * h5)
      );
      h8[2] =
        id * (h1 * ia - h0 * ie) -
        h2 * (ic * ia - h9 * ie) +
        ih * (ic * h0 - h9 * h1);
      h8[3] = -(
        id * (h1 * h4 - h0 * h5) -
        h2 * (ic * h4 - h9 * h5) +
        h6 * (ic * h0 - h9 * h1)
      );
      h8[4] = -(
        h3 * (h5 * ia - h4 * ie) -
        h7 * (h1 * ia - h0 * ie) +
        ii * (h1 * h4 - h0 * h5)
      );
      h8[5] =
        ig * (h5 * ia - h4 * ie) -
        h7 * (ic * ia - h9 * ie) +
        ii * (ic * h4 - h9 * h5);
      h8[6] = -(
        ig * (h1 * ia - h0 * ie) -
        h3 * (ic * ia - h9 * ie) +
        ii * (ic * h0 - h9 * h1)
      );
      h8[7] =
        ig * (h1 * h4 - h0 * h5) -
        h3 * (ic * h4 - h9 * h5) +
        h7 * (ic * h0 - h9 * h1);
      h8[8] =
        h3 * (h6 * ia - h4 * ih) -
        h7 * (h2 * ia - h0 * ih) +
        ii * (h2 * h4 - h0 * h6);
      h8[9] = -(
        ig * (h6 * ia - h4 * ih) -
        h7 * (id * ia - h9 * ih) +
        ii * (id * h4 - h9 * h6)
      );
      h8[10] =
        ig * (h2 * ia - h0 * ih) -
        h3 * (id * ia - h9 * ih) +
        ii * (id * h0 - h9 * h2);
      h8[11] = -(
        ig * (h2 * h4 - h0 * h6) -
        h3 * (id * h4 - h9 * h6) +
        h7 * (id * h0 - h9 * h2)
      );
      h8[12] = -(
        h3 * (h6 * ie - h5 * ih) -
        h7 * (h2 * ie - h1 * ih) +
        ii * (h2 * h5 - h1 * h6)
      );
      h8[13] =
        ig * (h6 * ie - h5 * ih) -
        h7 * (id * ie - ic * ih) +
        ii * (id * h5 - ic * h6);
      h8[14] = -(
        ig * (h2 * ie - h1 * ih) -
        h3 * (id * ie - ic * ih) +
        ii * (id * h1 - ic * h2)
      );
      h8[15] =
        ig * (h2 * h5 - h1 * h6) -
        h3 * (id * h5 - ic * h6) +
        h7 * (id * h1 - ic * h2);
      return h8;
    };
    e.determinant = function(im) {
      var it = im[0],
        iq = im[1],
        io = im[2],
        il = im[3],
        h3 = im[4],
        h2 = im[5],
        h1 = im[6],
        h0 = im[7],
        ii = im[8],
        ih = im[9],
        ig = im[10],
        ie = im[11],
        iv = im[12],
        iu = im[13],
        ir = im[14],
        ip = im[15],
        id = it * h2 - iq * h3,
        ic = it * h1 - io * h3,
        ib = it * h0 - il * h3,
        ia = iq * h1 - io * h2,
        h9 = iq * h0 - il * h2,
        h8 = io * h0 - il * h1,
        h7 = ii * iu - ih * iv,
        h6 = ii * ir - ig * iv,
        h5 = ii * ip - ie * iv,
        h4 = ih * ir - ig * iu,
        ik = ih * ip - ie * iu,
        ij = ig * ip - ie * ir;
      return id * ij - ic * ik + ib * h4 + ia * h5 - h9 * h6 + h8 * h7;
    };
    e.multiply = function(ic, ih, id) {
      var il = ih[0],
        ik = ih[1],
        ii = ih[2],
        ie = ih[3],
        h6 = ih[4],
        h4 = ih[5],
        h2 = ih[6],
        h0 = ih[7],
        ib = ih[8],
        ia = ih[9],
        h9 = ih[10],
        h8 = ih[11],
        io = ih[12],
        im = ih[13],
        ij = ih[14],
        ig = ih[15];
      var h7 = id[0],
        h5 = id[1],
        h3 = id[2],
        h1 = id[3];
      ic[0] = h7 * il + h5 * h6 + h3 * ib + h1 * io;
      ic[1] = h7 * ik + h5 * h4 + h3 * ia + h1 * im;
      ic[2] = h7 * ii + h5 * h2 + h3 * h9 + h1 * ij;
      ic[3] = h7 * ie + h5 * h0 + h3 * h8 + h1 * ig;
      h7 = id[4];
      h5 = id[5];
      h3 = id[6];
      h1 = id[7];
      ic[4] = h7 * il + h5 * h6 + h3 * ib + h1 * io;
      ic[5] = h7 * ik + h5 * h4 + h3 * ia + h1 * im;
      ic[6] = h7 * ii + h5 * h2 + h3 * h9 + h1 * ij;
      ic[7] = h7 * ie + h5 * h0 + h3 * h8 + h1 * ig;
      h7 = id[8];
      h5 = id[9];
      h3 = id[10];
      h1 = id[11];
      ic[8] = h7 * il + h5 * h6 + h3 * ib + h1 * io;
      ic[9] = h7 * ik + h5 * h4 + h3 * ia + h1 * im;
      ic[10] = h7 * ii + h5 * h2 + h3 * h9 + h1 * ij;
      ic[11] = h7 * ie + h5 * h0 + h3 * h8 + h1 * ig;
      h7 = id[12];
      h5 = id[13];
      h3 = id[14];
      h1 = id[15];
      ic[12] = h7 * il + h5 * h6 + h3 * ib + h1 * io;
      ic[13] = h7 * ik + h5 * h4 + h3 * ia + h1 * im;
      ic[14] = h7 * ii + h5 * h2 + h3 * h9 + h1 * ij;
      ic[15] = h7 * ie + h5 * h0 + h3 * h8 + h1 * ig;
      return ic;
    };
    e.mul = e.multiply;
    e.translate = function(ic, ie, h7) {
      var h6 = h7[0],
        h5 = h7[1],
        h4 = h7[2],
        ii,
        ih,
        ig,
        id,
        h3,
        h2,
        h1,
        h0,
        ib,
        ia,
        h9,
        h8;
      if (ie === ic) {
        ic[12] = ie[0] * h6 + ie[4] * h5 + ie[8] * h4 + ie[12];
        ic[13] = ie[1] * h6 + ie[5] * h5 + ie[9] * h4 + ie[13];
        ic[14] = ie[2] * h6 + ie[6] * h5 + ie[10] * h4 + ie[14];
        ic[15] = ie[3] * h6 + ie[7] * h5 + ie[11] * h4 + ie[15];
      } else {
        ii = ie[0];
        ih = ie[1];
        ig = ie[2];
        id = ie[3];
        h3 = ie[4];
        h2 = ie[5];
        h1 = ie[6];
        h0 = ie[7];
        ib = ie[8];
        ia = ie[9];
        h9 = ie[10];
        h8 = ie[11];
        ic[0] = ii;
        ic[1] = ih;
        ic[2] = ig;
        ic[3] = id;
        ic[4] = h3;
        ic[5] = h2;
        ic[6] = h1;
        ic[7] = h0;
        ic[8] = ib;
        ic[9] = ia;
        ic[10] = h9;
        ic[11] = h8;
        ic[12] = ii * h6 + h3 * h5 + ib * h4 + ie[12];
        ic[13] = ih * h6 + h2 * h5 + ia * h4 + ie[13];
        ic[14] = ig * h6 + h1 * h5 + h9 * h4 + ie[14];
        ic[15] = id * h6 + h0 * h5 + h8 * h4 + ie[15];
      }
      return ic;
    };
    e.scale = function(h3, h1, h2) {
      var h0 = h2[0],
        h5 = h2[1],
        h4 = h2[2];
      h3[0] = h1[0] * h0;
      h3[1] = h1[1] * h0;
      h3[2] = h1[2] * h0;
      h3[3] = h1[3] * h0;
      h3[4] = h1[4] * h5;
      h3[5] = h1[5] * h5;
      h3[6] = h1[6] * h5;
      h3[7] = h1[7] * h5;
      h3[8] = h1[8] * h4;
      h3[9] = h1[9] * h4;
      h3[10] = h1[10] * h4;
      h3[11] = h1[11] * h4;
      h3[12] = h1[12];
      h3[13] = h1[13];
      h3[14] = h1[14];
      h3[15] = h1[15];
      return h3;
    };
    e.rotate = function(il, iu, iw, h0) {
      var ia = h0[0],
        h9 = h0[1],
        h8 = h0[2],
        im = Math.sqrt(ia * ia + h9 * h9 + h8 * h8),
        ig,
        ir,
        ie,
        iy,
        ix,
        iv,
        it,
        h7,
        h6,
        h5,
        h4,
        ik,
        ij,
        ii,
        ih,
        id,
        ic,
        ib,
        iq,
        ip,
        io,
        h3,
        h2,
        h1;
      if (Math.abs(im) < hZ) {
        return null;
      }
      im = 1 / im;
      ia *= im;
      h9 *= im;
      h8 *= im;
      ig = Math.sin(iw);
      ir = Math.cos(iw);
      ie = 1 - ir;
      iy = iu[0];
      ix = iu[1];
      iv = iu[2];
      it = iu[3];
      h7 = iu[4];
      h6 = iu[5];
      h5 = iu[6];
      h4 = iu[7];
      ik = iu[8];
      ij = iu[9];
      ii = iu[10];
      ih = iu[11];
      id = ia * ia * ie + ir;
      ic = h9 * ia * ie + h8 * ig;
      ib = h8 * ia * ie - h9 * ig;
      iq = ia * h9 * ie - h8 * ig;
      ip = h9 * h9 * ie + ir;
      io = h8 * h9 * ie + ia * ig;
      h3 = ia * h8 * ie + h9 * ig;
      h2 = h9 * h8 * ie - ia * ig;
      h1 = h8 * h8 * ie + ir;
      il[0] = iy * id + h7 * ic + ik * ib;
      il[1] = ix * id + h6 * ic + ij * ib;
      il[2] = iv * id + h5 * ic + ii * ib;
      il[3] = it * id + h4 * ic + ih * ib;
      il[4] = iy * iq + h7 * ip + ik * io;
      il[5] = ix * iq + h6 * ip + ij * io;
      il[6] = iv * iq + h5 * ip + ii * io;
      il[7] = it * iq + h4 * ip + ih * io;
      il[8] = iy * h3 + h7 * h2 + ik * h1;
      il[9] = ix * h3 + h6 * h2 + ij * h1;
      il[10] = iv * h3 + h5 * h2 + ii * h1;
      il[11] = it * h3 + h4 * h2 + ih * h1;
      if (iu !== il) {
        il[12] = iu[12];
        il[13] = iu[13];
        il[14] = iu[14];
        il[15] = iu[15];
      }
      return il;
    };
    e.rotateX = function(h0, h7, h6) {
      var ic = Math.sin(h6),
        h5 = Math.cos(h6),
        ib = h7[4],
        ia = h7[5],
        h9 = h7[6],
        h8 = h7[7],
        h4 = h7[8],
        h3 = h7[9],
        h2 = h7[10],
        h1 = h7[11];
      if (h7 !== h0) {
        h0[0] = h7[0];
        h0[1] = h7[1];
        h0[2] = h7[2];
        h0[3] = h7[3];
        h0[12] = h7[12];
        h0[13] = h7[13];
        h0[14] = h7[14];
        h0[15] = h7[15];
      }
      h0[4] = ib * h5 + h4 * ic;
      h0[5] = ia * h5 + h3 * ic;
      h0[6] = h9 * h5 + h2 * ic;
      h0[7] = h8 * h5 + h1 * ic;
      h0[8] = h4 * h5 - ib * ic;
      h0[9] = h3 * h5 - ia * ic;
      h0[10] = h2 * h5 - h9 * ic;
      h0[11] = h1 * h5 - h8 * ic;
      return h0;
    };
    e.rotateY = function(h4, ib, ia) {
      var ic = Math.sin(ia),
        h9 = Math.cos(ia),
        h3 = ib[0],
        h2 = ib[1],
        h1 = ib[2],
        h0 = ib[3],
        h8 = ib[8],
        h7 = ib[9],
        h6 = ib[10],
        h5 = ib[11];
      if (ib !== h4) {
        h4[4] = ib[4];
        h4[5] = ib[5];
        h4[6] = ib[6];
        h4[7] = ib[7];
        h4[12] = ib[12];
        h4[13] = ib[13];
        h4[14] = ib[14];
        h4[15] = ib[15];
      }
      h4[0] = h3 * h9 - h8 * ic;
      h4[1] = h2 * h9 - h7 * ic;
      h4[2] = h1 * h9 - h6 * ic;
      h4[3] = h0 * h9 - h5 * ic;
      h4[8] = h3 * ic + h8 * h9;
      h4[9] = h2 * ic + h7 * h9;
      h4[10] = h1 * ic + h6 * h9;
      h4[11] = h0 * ic + h5 * h9;
      return h4;
    };
    e.rotateZ = function(h4, h7, h6) {
      var ic = Math.sin(h6),
        h5 = Math.cos(h6),
        h3 = h7[0],
        h2 = h7[1],
        h1 = h7[2],
        h0 = h7[3],
        ib = h7[4],
        ia = h7[5],
        h9 = h7[6],
        h8 = h7[7];
      if (h7 !== h4) {
        h4[8] = h7[8];
        h4[9] = h7[9];
        h4[10] = h7[10];
        h4[11] = h7[11];
        h4[12] = h7[12];
        h4[13] = h7[13];
        h4[14] = h7[14];
        h4[15] = h7[15];
      }
      h4[0] = h3 * h5 + ib * ic;
      h4[1] = h2 * h5 + ia * ic;
      h4[2] = h1 * h5 + h9 * ic;
      h4[3] = h0 * h5 + h8 * ic;
      h4[4] = ib * h5 - h3 * ic;
      h4[5] = ia * h5 - h2 * ic;
      h4[6] = h9 * h5 - h1 * ic;
      h4[7] = h8 * h5 - h0 * ic;
      return h4;
    };
    e.fromRotationTranslation = function(id, ib, h9) {
      var h6 = ib[0],
        h5 = ib[1],
        h4 = ib[2],
        h7 = ib[3],
        ie = h6 + h6,
        h0 = h5 + h5,
        h8 = h4 + h4,
        h3 = h6 * ie,
        h2 = h6 * h0,
        h1 = h6 * h8,
        ic = h5 * h0,
        ia = h5 * h8,
        ii = h4 * h8,
        ij = h7 * ie,
        ih = h7 * h0,
        ig = h7 * h8;
      id[0] = 1 - (ic + ii);
      id[1] = h2 + ig;
      id[2] = h1 - ih;
      id[3] = 0;
      id[4] = h2 - ig;
      id[5] = 1 - (h3 + ii);
      id[6] = ia + ij;
      id[7] = 0;
      id[8] = h1 + ih;
      id[9] = ia - ij;
      id[10] = 1 - (h3 + ic);
      id[11] = 0;
      id[12] = h9[0];
      id[13] = h9[1];
      id[14] = h9[2];
      id[15] = 1;
      return id;
    };
    e.fromQuat = function(ia, h7) {
      var h4 = h7[0],
        h3 = h7[1],
        h2 = h7[2],
        h5 = h7[3],
        ib = h4 + h4,
        h0 = h3 + h3,
        h6 = h2 + h2,
        h1 = h4 * ib,
        h9 = h3 * ib,
        h8 = h3 * h0,
        ii = h2 * ib,
        ih = h2 * h0,
        ie = h2 * h6,
        ig = h5 * ib,
        id = h5 * h0,
        ic = h5 * h6;
      ia[0] = 1 - h8 - ie;
      ia[1] = h9 + ic;
      ia[2] = ii - id;
      ia[3] = 0;
      ia[4] = h9 - ic;
      ia[5] = 1 - h1 - ie;
      ia[6] = ih + ig;
      ia[7] = 0;
      ia[8] = ii + id;
      ia[9] = ih - ig;
      ia[10] = 1 - h1 - h8;
      ia[11] = 0;
      ia[12] = 0;
      ia[13] = 0;
      ia[14] = 0;
      ia[15] = 1;
      return ia;
    };
    e.frustum = function(h4, h1, h9, h0, h8, h6, h5) {
      var h7 = 1 / (h9 - h1),
        h3 = 1 / (h8 - h0),
        h2 = 1 / (h6 - h5);
      h4[0] = h6 * 2 * h7;
      h4[1] = 0;
      h4[2] = 0;
      h4[3] = 0;
      h4[4] = 0;
      h4[5] = h6 * 2 * h3;
      h4[6] = 0;
      h4[7] = 0;
      h4[8] = (h9 + h1) * h7;
      h4[9] = (h8 + h0) * h3;
      h4[10] = (h5 + h6) * h2;
      h4[11] = -1;
      h4[12] = 0;
      h4[13] = 0;
      h4[14] = h5 * h6 * 2 * h2;
      h4[15] = 0;
      return h4;
    };
    e.perspective = function(h3, h2, h1, h4, h0) {
      var h6 = 1 / Math.tan(h2 / 2),
        h5 = 1 / (h4 - h0);
      h3[0] = h6 / h1;
      h3[1] = 0;
      h3[2] = 0;
      h3[3] = 0;
      h3[4] = 0;
      h3[5] = h6;
      h3[6] = 0;
      h3[7] = 0;
      h3[8] = 0;
      h3[9] = 0;
      h3[10] = (h0 + h4) * h5;
      h3[11] = -1;
      h3[12] = 0;
      h3[13] = 0;
      h3[14] = 2 * h0 * h4 * h5;
      h3[15] = 0;
      return h3;
    };
    e.ortho = function(h3, h1, h9, h0, h7, h6, h5) {
      var h4 = 1 / (h1 - h9),
        h8 = 1 / (h0 - h7),
        h2 = 1 / (h6 - h5);
      h3[0] = -2 * h4;
      h3[1] = 0;
      h3[2] = 0;
      h3[3] = 0;
      h3[4] = 0;
      h3[5] = -2 * h8;
      h3[6] = 0;
      h3[7] = 0;
      h3[8] = 0;
      h3[9] = 0;
      h3[10] = 2 * h2;
      h3[11] = 0;
      h3[12] = (h1 + h9) * h4;
      h3[13] = (h7 + h0) * h8;
      h3[14] = (h5 + h6) * h2;
      h3[15] = 1;
      return h3;
    };
    e.lookAt = function(ie, im, io, h6) {
      var il,
        ik,
        ii,
        h2,
        h1,
        h0,
        h9,
        h8,
        h7,
        ig,
        ij = im[0],
        ih = im[1],
        id = im[2],
        h5 = h6[0],
        h4 = h6[1],
        h3 = h6[2],
        ic = io[0],
        ib = io[1],
        ia = io[2];
      if (
        Math.abs(ij - ic) < hZ &&
        Math.abs(ih - ib) < hZ &&
        Math.abs(id - ia) < hZ
      ) {
        return e.identity(ie);
      }
      h9 = ij - ic;
      h8 = ih - ib;
      h7 = id - ia;
      ig = 1 / Math.sqrt(h9 * h9 + h8 * h8 + h7 * h7);
      h9 *= ig;
      h8 *= ig;
      h7 *= ig;
      il = h4 * h7 - h3 * h8;
      ik = h3 * h9 - h5 * h7;
      ii = h5 * h8 - h4 * h9;
      ig = Math.sqrt(il * il + ik * ik + ii * ii);
      if (!ig) {
        il = 0;
        ik = 0;
        ii = 0;
      } else {
        ig = 1 / ig;
        il *= ig;
        ik *= ig;
        ii *= ig;
      }
      h2 = h8 * ii - h7 * ik;
      h1 = h7 * il - h9 * ii;
      h0 = h9 * ik - h8 * il;
      ig = Math.sqrt(h2 * h2 + h1 * h1 + h0 * h0);
      if (!ig) {
        h2 = 0;
        h1 = 0;
        h0 = 0;
      } else {
        ig = 1 / ig;
        h2 *= ig;
        h1 *= ig;
        h0 *= ig;
      }
      ie[0] = il;
      ie[1] = h2;
      ie[2] = h9;
      ie[3] = 0;
      ie[4] = ik;
      ie[5] = h1;
      ie[6] = h8;
      ie[7] = 0;
      ie[8] = ii;
      ie[9] = h0;
      ie[10] = h7;
      ie[11] = 0;
      ie[12] = -(il * ij + ik * ih + ii * id);
      ie[13] = -(h2 * ij + h1 * ih + h0 * id);
      ie[14] = -(h9 * ij + h8 * ih + h7 * id);
      ie[15] = 1;
      return ie;
    };
    e.str = function(h0) {
      return (
        "mat4(" +
        h0[0] +
        ", " +
        h0[1] +
        ", " +
        h0[2] +
        ", " +
        h0[3] +
        ", " +
        h0[4] +
        ", " +
        h0[5] +
        ", " +
        h0[6] +
        ", " +
        h0[7] +
        ", " +
        h0[8] +
        ", " +
        h0[9] +
        ", " +
        h0[10] +
        ", " +
        h0[11] +
        ", " +
        h0[12] +
        ", " +
        h0[13] +
        ", " +
        h0[14] +
        ", " +
        h0[15] +
        ")"
      );
    };
    e.frob = function(h0) {
      return Math.sqrt(
        Math.pow(h0[0], 2) +
          Math.pow(h0[1], 2) +
          Math.pow(h0[2], 2) +
          Math.pow(h0[3], 2) +
          Math.pow(h0[4], 2) +
          Math.pow(h0[5], 2) +
          Math.pow(h0[6], 2) +
          Math.pow(h0[6], 2) +
          Math.pow(h0[7], 2) +
          Math.pow(h0[8], 2) +
          Math.pow(h0[9], 2) +
          Math.pow(h0[10], 2) +
          Math.pow(h0[11], 2) +
          Math.pow(h0[12], 2) +
          Math.pow(h0[13], 2) +
          Math.pow(h0[14], 2) +
          Math.pow(h0[15], 2)
      );
    };
    hV.mat4 = e;
  })(window);
  function dd() {
    this.result = {
      bkData: [],
      eleData: [[], [], [], [], [], [], [], [], []],
      tileLabels: [],
    };
  }
  D.extend(dd.prototype, {
    createLayer: function(T, i) {
      var e = this.result.bkData;
      i = i || {};
      if (!e[T]) {
        e[T] = [[], [], []];
      }
      e[T].dataType = i.dataType || 2;
      e[T].png8 = i.png8 || false;
      e[T].clipTile = i.clipTile || false;
    },
    removeLayer: function(i) {
      var e = this.result.bkData;
      e[i] = null;
    },
    getResult: function() {
      return this.result;
    },
    setData: function(hU, hT, hV) {
      var e = this.result.bkData;
      var T = e[hT] ? e[hT][hV] : null;
      if (!T) {
        return;
      }
      for (var hS = 0; hS < T.length; hS++) {
        if (T[hS].key && T[hS].key === hU.key) {
          T[hS] = hU;
          return;
        }
      }
      T.push(hU);
    },
    setLabelData: function(e) {
      this.result.tileLabels = e;
    },
    getLabelData: function() {
      return this.result.tileLabels;
    },
    setOverlayData: function(i, e) {
      if (!this.result.eleData[e]) {
        return;
      }
      this.result.eleData[e] = i;
    },
    clearLabelOverlayData: function() {
      this.result.eleData[2] = [];
      this.result.eleData[3] = [];
      this.result.eleData[4] = [];
    },
    clearData: function(hS) {
      var e = this.result.bkData;
      if (typeof hS === "number") {
        if (e[hS]) {
          e[hS][0] = [];
          e[hS][1] = [];
          e[hS][2] = [];
        }
        return;
      }
      for (var T = 0; T < e.length; T++) {
        if (!e[T]) {
          continue;
        }
        e[T][0] = [];
        e[T][1] = [];
        e[T][2] = [];
      }
    },
    sortThumbData: function(i) {
      var e = this.result.bkData;
      var T = e[i];
      if (!T) {
        return;
      }
      if (T[0] && T[0].length > 0) {
        T[0].sort(function(hT, hS) {
          return hT.tileInfo.useZoom - hS.tileInfo.useZoom;
        });
      }
    },
  });
  var fi = (function() {
    var h2 = new Int8Array(4);
    var T = new Int32Array(h2.buffer, 0, 1);
    var hX = new Float32Array(h2.buffer, 0, 1);
    function h4(ib) {
      T[0] = ib;
      return hX[0];
    }
    function i(ib) {
      hX[0] = ib;
      return T[0];
    }
    function hY(ib) {
      var id = (ib[3] << 24) | (ib[2] << 16) | (ib[1] << 8) | ib[0];
      var ic = h4(id & 4278190079);
      return ic;
    }
    var hT = 0;
    var hW = 1;
    var h0 = 2;
    var h8 = 0;
    var h5 = 1;
    var h3 = 2;
    var hU = 9;
    function h1(ib, ic) {
      var id;
      if (ic % 2 === 0) {
        id = [-ib[1], ib[0]];
      } else {
        id = [ib[1], -ib[0]];
      }
      return id;
    }
    function e(ib, ic, id) {
      var ie = h1(ib, ic);
      var ig;
      if (id === hW) {
        return ie;
      } else {
        if (ic === 4 || ic === 5) {
          ig = [ie[0] - ib[0], ie[1] - ib[1]];
        } else {
          ig = [ie[0] + ib[0], ie[1] + ib[1]];
        }
        if (id === hT) {
          vec2.normalize(ig, ig);
        }
        return ig;
      }
    }
    function h7(ic, ib) {
      return Math.sqrt(Math.pow(ic[0] - ib[0], 2) + Math.pow(ic[1] - ib[1], 2));
    }
    function hS(ig, ie, id, ib) {
      var ic = vec2.dot(ig, ie);
      if (id === h3 || id === h5) {
        if ((ib === 0 || ib === 1) && ic > 0) {
          return true;
        } else {
          if ((ib === 2 || ib === 3) && ic < 0) {
            return true;
          }
        }
      }
      if ((ib === 0 || ib === 1) && ic < 0) {
        return true;
      } else {
        if ((ib === 2 || ib === 3) && ic > 0) {
          return true;
        }
      }
      return false;
    }
    function hZ(ic, ii, ik) {
      var ij = h1(ic, ii);
      var ie;
      var ih = ic;
      var ig = ik;
      var im = [];
      vec2.normalize(im, [ih[0] + ig[0], ih[1] + ig[1]]);
      var il = vec2.dot(ij, [-im[1], im[0]]);
      if (Math.abs(il) < 0.1) {
        il = 1;
      }
      var id = 1 / il;
      ie = [-im[1] * id, im[0] * id];
      var ib = vec2.dot(ic, ie);
      if (ib < 0) {
        vec2.negate(ie, ie);
      }
      return { cos2: ib, offset: ie };
    }
    function ia(ic, ii, ik, ib) {
      var ij = h1(ic, ii);
      var ih;
      var ig;
      var ie;
      if (ii === 0 || ii === 1) {
        ih = ik;
        ig = ic;
      } else {
        ih = ic;
        ig = ik;
      }
      if (!ih || !ig) {
        return ij;
      }
      var im = [ih[0] + ig[0], ih[1] + ig[1]];
      if (im[0] === 0 && im[1] === 0) {
        vec2.normalize(im, ig);
      } else {
        vec2.normalize(im, im);
      }
      var io = hS(im, ij, ib, ii);
      if (io) {
        return ij;
      }
      var il = vec2.dot(ij, [-im[1], im[0]]);
      if (Math.abs(il) < 0.1) {
        il = 1;
      }
      var id = 1 / il;
      ie = [-im[1] * id, im[0] * id];
      return ie;
    }
    function h9(io, ip, ih, ig, iq, im, ie, ii, id, il) {
      var ik;
      var ic = 0;
      var ib = false;
      ik = im.length / hU - 1;
      hV(ip[0], io[0], ih[0], iq, ig, 4, ii, id, undefined, im, il);
      ik++;
      ic++;
      hV(ip[0], io[0], ih[0], iq, ig, 5, ii, id, undefined, im, il);
      ik++;
      ic++;
      for (var ij = 0; ij < io.length; ij++) {
        hV(ip[ij], io[ij], ih[ij], iq, ig, 0, ii, id, io[ij - 1], im, il);
        h6(ie, ++ik, ++ic, ib);
        hV(ip[ij], io[ij], ih[ij], iq, ig, 1, ii, id, io[ij - 1], im, il);
        h6(ie, ++ik, ++ic, ib);
        hV(
          ip[ij + 1],
          io[ij],
          ih[ij + 1],
          iq,
          ig,
          2,
          ii,
          id,
          io[ij + 1],
          im,
          il
        );
        h6(ie, ++ik, ++ic, ib);
        hV(
          ip[ij + 1],
          io[ij],
          ih[ij + 1],
          iq,
          ig,
          3,
          ii,
          id,
          io[ij + 1],
          im,
          il
        );
        h6(ie, ++ik, ++ic, ib);
        if (ig === h5 && ij !== io.length - 1) {
          hV(
            ip[ij + 1],
            io[ij],
            ih[ij + 1],
            iq,
            ig,
            8,
            ii,
            id,
            io[ij + 1],
            im,
            il
          );
          h6(ie, ++ik, ++ic, ib);
          ib = ib ? false : true;
        }
      }
      hV(
        ip[ip.length - 1],
        io[io.length - 1],
        ih[ip.length - 1],
        iq,
        ig,
        6,
        ii,
        id,
        undefined,
        im,
        il
      );
      h6(ie, ++ik, ++ic, ib);
      hV(
        ip[ip.length - 1],
        io[io.length - 1],
        ih[ip.length - 1],
        iq,
        ig,
        7,
        ii,
        id,
        undefined,
        im,
        il
      );
      h6(ie, ++ik, ++ic, ib);
    }
    function hV(iq, ie, ij, ir, id, ik, ih, ic, io, im, il) {
      var ip = ik % 2 === 0 ? 1 : -1;
      var ii;
      if (ik === 4 || ik === 5 || ik === 6 || ik === 7) {
        ii = e(ie, ik, ir);
      } else {
        if (ik === 0 || ik === 1 || ik === 2 || ik === 3) {
          ii = ia(ie, ik, io, id);
        } else {
          if (ik === 8) {
            var ig = hZ(ie, ik, io);
            ii = ig.offset;
            vec2.normalize(ii, ii);
            var ib = ig.cos2;
            if (ib < 0) {
              ip = -ip;
            }
          }
        }
      }
      im[im.length] = iq[0] * 10;
      im[im.length] = iq[1] * 10;
      im[im.length] = ii[0] * ic * 10;
      im[im.length] = ii[1] * ic * 10;
      im[im.length] = ih;
      im[im.length] = ip;
      im[im.length] = 0;
      im[im.length] = il || 0;
      im[im.length] = ij;
    }
    function h6(ig, id, ib, ie) {
      var ic;
      if (ib % 2 === 0) {
        if (ie) {
          ig[ig.length] = id - 2;
          ig[ig.length] = id - 1;
          ig[ig.length] = id;
        } else {
          ig[ig.length] = id - 1;
          ig[ig.length] = id - 2;
          ig[ig.length] = id;
        }
      } else {
        if (ie) {
          ig[ig.length] = id - 1;
          ig[ig.length] = id - 2;
          ig[ig.length] = id;
        } else {
          ig[ig.length] = id - 2;
          ig[ig.length] = id - 1;
          ig[ig.length] = id;
        }
      }
    }
    return {
      getVertexCount: function(ic, ib) {
        if (ib === h5) {
          return ic * 5 - 2;
        } else {
          return ic * 4;
        }
      },
      buildData: function(io, id, ip, ik, ib, ih, ic, il) {
        var im = [];
        var ij = 0;
        var ig = [0];
        for (var ii = 0; ii < io.length; ii++) {
          if (ii > 0) {
            ij += h7(io[ii], io[ii - 1]);
            ig.push(ij * 10);
          }
          if (ii !== io.length - 1) {
            var ie = [io[ii + 1][0] - io[ii][0], io[ii + 1][1] - io[ii][1]];
            var iq = [];
            if (ie[0] === 0 && ie[1] === 0) {
              iq = [0, 0];
            } else {
              vec2.normalize(iq, ie);
            }
            im[im.length] = [iq[0], iq[1]];
          }
        }
        return h9(im, io, ig, id, ip, ik, ib, hY(ih), ic, il);
      },
      toTileSolidLineVertices: function(ig, ic) {
        var id = new Float32Array((ig.length / hU) * 5);
        var ib = new Int16Array(id.buffer);
        var ii = 0;
        var ie = 0;
        for (var ih = 0; ih < ig.length; ih += hU) {
          ib[ii] = ~~ig[ih];
          ib[ii + 1] = ~~ig[ih + 1];
          ib[ii + 2] = ~~ig[ih + 2];
          ib[ii + 3] = ~~ig[ih + 3];
          id[ie + 2] = ig[ih + 4];
          ib[ii + 6] = ig[ih + 5];
          ib[ii + 7] = ic ? ic : 0;
          ib[ii + 8] = ig[ih + 7];
          ib[ii + 9] = 0;
          ii += 10;
          ie += 5;
        }
        return id;
      },
    };
  })();
  var eI = 1;
  var gu = 2;
  var fT = {
    drawIndex: 0,
    devicePixelRatio: a7(),
    zoomState: 1,
    curViewTilesInfo: null,
    iconSetImg: null,
    LAST_CALC_ZOOM: -1,
    LAST_LOAD_VECTOR_ZOOM_CHANGE: false,
    lastCollisionTestTime: 0,
    remove: function() {
      this.tileCache.clear();
    },
    initDrawData: function() {
      this.drawIndex = this.zIndex;
      this.map._featureMgr.createLayer(this.drawIndex, {
        dataType: this.dataType,
        png8: this.png8,
        clipTile: this.clipTile,
      });
    },
    destroyDrawData: function() {
      this.map._featureMgr.removeLayer(this.drawIndex);
    },
    setZIndex: function(e) {
      this.zIndex = e;
    },
    getTileKey: function(e, hS) {
      hS = hS || {};
      var i = typeof hS.useZoom === "number" ? hS.useZoom : e.useZoom;
      var T = e.style || this.mapStyleId || "default";
      return (
        this.mapType +
        "_" +
        T +
        "_" +
        e.col +
        "_" +
        e.row +
        "_" +
        e.zoom +
        "_" +
        i
      );
    },
    getTileRenderDataKey: function(i) {
      var T = i.col;
      var hS = i.zoom;
      var e = i.baseTileSize;
      T = d5.calcLoopParam(T, hS, e).col;
      return this.mapType + "_" + T + "_" + i.row + "_" + hS + "_" + i.useZoom;
    },
    getTileUnits: function(e) {
      var hS = this.map;
      var T = b7[hS.getMapType()];
      var i = T.baseUnits * Math.pow(2, T.zoomLevelBase - e);
      return i;
    },
    getTilesUrl: function(hT, h2, h3) {
      var i = hT.x;
      var h4 = hT.y;
      var hZ = aE("ditu", "normal");
      var hV = hZ.ver;
      var hW = hZ.udt;
      i = d5.calcLoopParam(i, h2, h3).col;
      var h1 = b7.B_NORMAL_MAP.vectorTileUrls;
      var hU = Math.abs(i + h4) % h1.length;
      var h0 = h1[hU];
      if (window.offLineIPAddress) {
        h1 = [window.offLineIPAddress + "pvd/"];
        h0 = h1[0];
      }
      var T = "x=" + i + "&y=" + h4 + "&z=" + Math.floor(h2);
      var hY = this.devicePixelRatio > 1 ? "&scaler=2" : "";
      var hX = "&textimg=1";
      if (this.map.config.textRenderType === "canvas") {
        hX = "&textimg=0";
      }
      var hS = this.map.config.style;
      if (typeof hS === "string" && hS !== "default") {
        T += "&styleId=" + e4.mapStyleNameIdPair[hS];
      }
      T += "&styles=pl" + hX + hY + "&v=" + hV + "&udt=" + hW + "&json=0";
      var e = h0 + "?qt=vtile&param=" + window.encodeURIComponent(gm(T));
      return e;
    },
    getRasterTilesUrl: function(T, hU, hS) {
      var hT = b7[this.map.mapType];
      var i = this.map.config.style;
      var e =
        hT.tileUrls[Math.abs(hU + T) % hT.tileUrls.length] +
        "?qt=tile&x=" +
        T +
        "&y=" +
        hU +
        "&z=" +
        hS +
        (i === "default" || typeof i !== "string"
          ? ""
          : "&styleId=" + e4.mapStyleNameIdPair[i]) +
        "&styles=pl&udt=" +
        this.normalUdt +
        "&scaler=" +
        this.scaler +
        "&p=1";
      e = e.replace(/-(\d+)/gi, "M$1");
      return e;
    },
    getZoomState: function() {
      var T = this.map;
      var i = T.getZoom();
      var e = i - this.lastZoom;
      if (e > 0) {
        this.zoomState = 1;
      } else {
        if (e < 0) {
          this.zoomState = -1;
        }
      }
      this.lastZoom = i;
      return this.zoomState;
    },
    releaseOutViewTileData: function(e) {
      var hT = this.map._workerMgr.releasePendingData(e);
      for (var hS = 0, T = hT.length; hS < T; hS++) {
        var hU = this.getTileKey(hT[hS]);
        this.tileCache.removeData(hU);
      }
    },
    loadLayerData: function(e, hS, i) {
      this.hasZoomChange = i;
      this.curViewTilesInfo = e;
      this.mapStyleId = this.map.getMapStyleId();
      this.releaseOutViewTileData(e);
      var T = this.getZoomState();
      if (this.dataType === gu) {
        if (hS) {
          this.getVectorLayerDataFromCache(e, T);
        } else {
          this.loadVectorLayerData(e);
        }
      } else {
        this.loadRasterLayerData(e, hS);
      }
    },
    getVectorLayerDataFromCache: function(hX, h7) {
      this.map.temp.isPermitSpotOver = false;
      this.tileLabels = [];
      if (this.baseLayer === true) {
        var h1 = this.map._customLabelMgr.virtualTile;
        if (h1 && h1.label) {
          this.tileLabels.push(h1.label);
        }
      }
      this.thumbCache = {};
      var h8 = -1;
      for (var h4 = 0, h2 = hX.length; h4 < h2; h4++) {
        var h5 = hX[h4];
        var hT = h5.col;
        var hU = h5.row;
        var T = h5.zoom;
        var h3 = this._getTileTexImgKey(h5);
        var hS = h5.useZoom;
        h8 = T;
        var hV = this.getTileKey(h5);
        var ia = this.tileCache.getData(hV);
        if (ia && ia.status === "ready") {
          var ib = ia;
          this.map._featureMgr.setData(ia, this.drawIndex, 2);
          if (ia.label) {
            if (ia.label.status === "ready") {
              ia.label.tileInfo = ia.tileInfo;
              this.tileLabels.push(ia.label);
              if (
                ia.label.textureSources &&
                ia.label.textureSources[hS] &&
                this.map._webglMapScene
              ) {
                var h9 = this.map._webglMapScene._painter;
                if (!h9._labelTextureAtlasOffset[h3]) {
                  h9._addToAsyncJob(ia.label.textureSources[hS]);
                }
              }
            } else {
              if (ia.label.status !== "processing") {
                this.processLabelData(ia);
              }
            }
          }
        } else {
          var h6 = { tileInfo: h5, dataType: gu, key: hV };
          this.map._featureMgr.setData(h6, this.drawIndex, 2);
          if (this.useThumbData) {
            this.setThumbData(hT, hU, T, hS, h7);
          }
        }
      }
      this.tileLabels.labelZoom = h8;
      this.updateLabels(h7);
      var hY = this.map.getZoom();
      var hW = Math.floor(hY);
      var h0 = hY - hW;
      var hZ = Math.floor(this.LAST_CALC_ZOOM);
      var e = this.LAST_CALC_ZOOM - hZ;
      var ic = false;
      if (this.hasZoomChange) {
        if (Math.abs(hY - this.LAST_CALC_ZOOM) >= 0.5) {
          ic = true;
        } else {
          if (h0 < 0.5 && e >= 0.5) {
            ic = true;
          } else {
            if (h0 >= 0.5 && e < 0.5) {
              ic = true;
            }
          }
        }
        if (ic) {
          this.cacheDataCollideLabels(0);
        }
        this.LAST_CALC_ZOOM = hY;
      } else {
        if (this.tileLabels.length > 0) {
          this.cacheDataCollideLabels(D.Browser.ie ? 50 : 30);
        }
      }
    },
    loadVectorLayerData: function(hY) {
      this.map.temp.isPermitSpotOver = false;
      var hX = this;
      function hW(i, hZ) {
        var h1 = hX.tileCache.getData(hZ);
        if (!h1) {
          return;
        }
        if (!i || i.error) {
          var h0 = new bc("ontileloaderror");
          i = i || {};
          h0.error = i.error || "";
          h0.message = i.message || "";
          hX.map.fire(h0);
          h1.status = "init";
          h1.reloadTimer = setTimeout(function() {
            if (h1.retry < 3) {
              h1.retry++;
              h1.status = "loading";
              hX.loadVectorTileData(i.tileInfo, hW);
            } else {
              hX.tileCache.removeData(hZ);
            }
          }, 4000);
          hX.map._featureMgr.clearData(hX.drawIndex);
          hX._checkTilesLoaded();
          hX.getVectorLayerDataFromCache(
            hX.curViewTilesInfo,
            hX.getZoomState()
          );
          return;
        }
        if (h1.reloadTimer) {
          clearTimeout(h1.reloadTimer);
          h1.reloadTimer = null;
        }
        hX.callbackDataQueue.push([i, hZ]);
        if (hX.processDataTimer) {
          return;
        }
        hX.processDataTimer = setTimeout(function() {
          while (hX.callbackDataQueue.length > 0) {
            var h2 = hX.callbackDataQueue.shift();
            hX.vectorTileDataCbk(h2[0], h2[1]);
            hX._checkTilesLoaded();
          }
          hX.map._featureMgr.clearData(hX.drawIndex);
          hX.getVectorLayerDataFromCache(
            hX.curViewTilesInfo,
            hX.getZoomState()
          );
          hX.processDataTimer = null;
        }, 200);
      }
      for (var hV = 0, hT = hY.length; hV < hT; hV++) {
        var T = hY[hV];
        var hU = this.getTileKey(T);
        var e = this.tileCache.getData(hU);
        if (!e) {
          e = { status: "init", tileInfo: T, dataType: gu, key: hU, retry: 0 };
        }
        if (e.status !== "ready" && e.status !== "loading") {
          this.numLoading++;
          e.status = "loading";
          this.tileCache.setData(hU, e);
          var hS = this.getProcessedLabelZoom(T);
          if (hS) {
            T.processedLabelZooms = hS;
          }
          this.loadVectorTileData(T, hW);
        }
      }
    },
    setThumbData: function(i, hT, hS, e, T) {
      if (T === 1) {
        if (this._findParentZoomTile(i, hT, hS, e, 8) === false) {
          this._findChildZoomTile(i, hT, hS, e, 3);
        }
      } else {
        if (T === -1) {
          if (this._findChildZoomTile(i, hT, hS, e, 3) === false) {
            this._findParentZoomTile(i, hT, hS, e, 8);
          }
        }
      }
      this.map._featureMgr.sortThumbData(this.drawIndex);
    },
    _findParentZoomTile: function(hV, h4, h3, hT, hY) {
      var hU = b7[this.getMapType()];
      var T = hU.minDataZoom;
      var e = hV;
      var h1 = h4;
      var hZ = h3;
      var h0 = hT;
      for (var hX = 1; hX <= hY; hX++) {
        var hS = this.tileType.getParentTile(e, h1, hZ, h0, T);
        if (hS === null) {
          continue;
        }
        var h2 = this.getTileKey(hS);
        var hW = this.tileCache.getData(h2);
        if (hW && hW.status === "ready") {
          if (this.thumbCache[h2]) {
            continue;
          }
          this.map._featureMgr.setData(hW, this.drawIndex, 0);
          this.thumbCache[h2] = true;
          return true;
        }
        e = hS.col;
        h1 = hS.row;
        hZ = hS.zoom;
        h0 = hS.useZoom;
      }
      return false;
    },
    _findChildZoomTile: function(hW, hY, e, hT, h7) {
      var h5 = b7[this.getMapType()];
      var h1 = h5.maxDataZoom;
      var hV = hW;
      var hX = hY;
      var hZ = e;
      var hS = hT;
      var hU = true;
      for (var h4 = 1; h4 <= h7; h4++) {
        var h2 = false;
        var T = this.tileType.getChildTiles(hV, hX, hZ, hS, h1, h4);
        if (!T) {
          continue;
        }
        for (var h3 = 0; h3 < T.length; h3++) {
          var h0 = this.getTileKey(T[h3]);
          var h6 = this.tileCache.getData(h0);
          if (h6 && h6.status === "ready") {
            if (!this.thumbCache[h0]) {
              this.map._featureMgr.setData(h6, this.drawIndex, 1);
              this.thumbCache[h0] = true;
            }
            h2 = true;
          } else {
            hU = false;
          }
        }
        if (h2) {
          break;
        }
      }
      return hU;
    },
    loadVectorTileData: function(i, hT) {
      var T = i.col;
      var hX = i.row;
      var hV = i.zoom;
      var hW = i.baseTileSize;
      var e = this.getTilesUrl(new ek(T, hX), hV, hW);
      if (!e) {
        return;
      }
      var hU = this.getTileKey(i);
      bz(this.map);
      if (!this.processData) {
        this.map._workerMgr.loadTileData(e, i, hU, hT);
        return;
      }
      var hT = "cbk" + hU.replace(/-/g, "_");
      var hS = this;
      bp[hT] = function(hY) {
        var hZ = (function(h0) {
          return function() {
            h0.tileInfo = i;
            var h6 = hS.processData(h0);
            if (!h6.road) {
              return;
            }
            var h3 = {
              tileInfo: i,
              renderData: { base: [] },
              status: "ready",
              key: hU,
              mapType: hS.mapType,
            };
            var h9 = [];
            var ic = [];
            for (var h5 = 0; h5 < h6.road.length; h5++) {
              var h8 = h6.road[h5];
              var h7 = -1;
              for (var h4 = 0; h4 < h8.length; h4++) {
                var ia = h8[h4];
                var ib = [];
                if (h9.length / 7 + ia[0].length / 2 > 65536) {
                  h3.renderData.base.push({
                    type: "line",
                    data: [
                      fi.toTileSolidLineVertices(h9, 4000),
                      new Uint16Array(ic),
                    ],
                  });
                  h9 = [];
                  ic = [];
                }
                for (var h2 = 0; h2 < ia[0].length; h2 += 2) {
                  ib[ib.length] = [ia[0][h2], ia[0][h2 + 1]];
                }
                var h1 = ia[3];
                fi.buildData(
                  ib,
                  ia[1],
                  ia[2],
                  h9,
                  ic,
                  h1,
                  ia[4],
                  h5 + 20,
                  false
                );
              }
              h3.renderData.base.push({
                type: "line",
                data: [
                  fi.toTileSolidLineVertices(h9, 4000),
                  new Uint16Array(ic),
                ],
              });
            }
            hS.tileCache.setData(hU, h3);
            hS.map._featureMgr.clearData(hS.drawIndex);
            hS.getVectorLayerDataFromCache(
              hS.curViewTilesInfo,
              hS.getZoomState()
            );
            hS.map.dispatchEvent(new bc("onrefresh"));
          };
        })(hY);
        hS.map.jobScheduler.addJob(hZ);
        delete bp[hT];
      };
      e += "&fn=" + encodeURIComponent(eB + "." + hT);
      hn.load(e);
    },
    vectorTileDataCbk: function(hS, hT) {
      var hX = new bc("ontileloaded");
      hX.perfStat = hS.perfStat || [];
      var e = this.map;
      e.fire(hX);
      var i = hS.tileInfo;
      var T = i.col;
      var h2 = i.row;
      var h1 = i.zoom;
      var h0 = i.baseTileSize;
      var hV = this.tileCache.getData(hT);
      if (!hV) {
        return;
      }
      if (!this.showLabel) {
        hS.label = null;
      }
      hV.renderData = hS;
      hV.tileInfo = i;
      var hU = d5.calcLoopParam(T, h1, h0);
      var hY = hU.geoOffsetX;
      hV.tileInfo.loopOffsetX = hY;
      hV.status = "ready";
      hV.mapType = this.mapType;
      this.tileCache.setData(hT, hV);
      hV.label = hS.label;
      hS.label = null;
      if (hS.indoorData && e._indoorMgr) {
        e._indoorMgr.setData(hS.indoorData);
      }
      var hW = "id_" + T + "_" + h2 + "_" + h1;
      if (!this.curViewTilesInfo[hW]) {
        e.fire(new bc("ontilenotinview"));
        return;
      }
      this.processLabelData(hV);
      if (hS.indoorData && e._indoorMgr && e._indoorMgr.currentUid) {
        this._refreshIndoorData(
          e._indoorMgr.currentUid,
          e._indoorMgr.currentFloor
        );
      }
      var hZ = new bc("onrefresh");
      hZ.source = "webgllayer";
      this.map.dispatchEvent(hZ);
    },
    _refreshIndoorData: function(h0, hZ) {
      var h2 = this.map._indoorMgr.getIndoorData(h0);
      var h5 = h2.tileKeys;
      var h3 = Math.floor(this.map.getZoom());
      for (var hX = 0; hX < h5.length; hX++) {
        var hU = h5[hX];
        var hW = this.tileCache.getData(hU);
        if (!hW) {
          continue;
        }
        var h4 = hW.renderData;
        h4.indoorBase = [];
        h4.indoorBaseContour = [];
        h4.indoorBorder3D = [];
        h4.indoorArea3D = [];
        hW.label.indoorLabel = [];
        this.labelProcessor.clearCollisionCache(hW.label);
        for (var hY in h4.indoorData) {
          if (hY === "tileInfo") {
            continue;
          }
          var e = h4.indoorData[hY];
          var hT = e.defaultFloor;
          if (hY === h0) {
            hT = hZ;
            e.currentFloor = hZ;
          }
          if (e.floors[hT]) {
            if (e.floors[hT].base) {
              for (var hV = 0; hV < e.floors[hT].base.length; hV++) {
                h4.indoorBase.push(e.floors[hT].base[hV]);
              }
            }
            if (e.floors[hT].contour) {
              for (var hV = 0; hV < e.floors[hT].contour.length; hV++) {
                h4.indoorBaseContour.push(e.floors[hT].contour[hV]);
              }
            }
            if (e.floors[hT].indoorBorder3D) {
              h4.indoorBorder3D.push(e.floors[hT].indoorBorder3D);
            }
            if (e.floors[hT].area3D) {
              h4.indoorArea3D.push(e.floors[hT].area3D);
            }
            if (e.floors[hT].pois) {
              hW.label.indoorLabel = hW.label.indoorLabel.concat(
                e.floors[hT].pois
              );
            }
          }
        }
        this.updateAllIconsTextureCoords(hW);
        var h1 = this;
        this.labelProcessor.loadIconImages(hW, function(i) {
          h1.updateAllIconsTextureCoords(i);
        });
        var hS = hU.split("_");
        var T = parseInt(hS[hS.length - 1], 10);
        if (T !== h3) {
          continue;
        }
        h1.map._featureMgr.setData(hW, this.drawIndex, 2);
      }
      this.dataBackCollideLabels();
      this.map.dispatchEvent(new bc("onrefresh"));
    },
    _removeIndoorData: function(i) {
      if (!i.indoorData) {
        return;
      }
      for (var e in i.indoorData) {
        if (e === "tileInfo") {
          continue;
        }
        this.map._indoorMgr.removeData(e, i.key);
      }
    },
    getProcessedLabelZoom: function(hS) {
      var hT = dj.baseZoomInfo[hS.zoom];
      if (!hT) {
        return false;
      }
      var T = [];
      for (var hU = 0; hU < hT.length; hU++) {
        var hV = this.getTileKey(hS, { useZoom: hT[hU] });
        var e = this.tileCache.getData(hV);
        if (
          e &&
          e.status === "ready" &&
          e.label &&
          e.label.status === "ready"
        ) {
          T.push(hT[hU]);
        }
      }
      if (T.length) {
        return T;
      } else {
        return false;
      }
    },
    getSameZoomDataFromCache: function(T) {
      var hS = dj.baseZoomInfo[T.zoom];
      for (var hT = 0; hT < hS.length; hT++) {
        var hU = this.getTileKey(T, { useZoom: hS[hT] });
        if (T.useZoom === hS[hT]) {
          continue;
        }
        var e = this.tileCache.getData(hU);
        if (
          e &&
          e.status === "ready" &&
          e.label &&
          e.label.status === "ready"
        ) {
          return e;
        }
      }
      return false;
    },
    hasSameLabelData: function(hS, T) {
      for (var e = 0; e < T.length; e++) {
        if (T[e].key === hS) {
          return true;
        }
      }
      return false;
    },
    getDataByFloorName: function(T, hS) {
      for (var e = 0; e < T.length; e++) {
        if (T[e].floorName === hS) {
          return T[e];
        }
      }
      return null;
    },
    mergeIndoorLabelData: function(hX, e) {
      for (var hV in hX) {
        if (hV === "tileInfo") {
          continue;
        }
        if (e[hV]) {
          var T = hX[hV].floors;
          var hY = e[hV].floors;
          for (var hT = 0; hT < T.length; hT++) {
            var hS = T[hT];
            var hW = hS.floorName;
            var hU = this.getDataByFloorName(hY, hW);
            if (hU) {
              if (hU.pois) {
                hU.pois = hU.pois.concat(hS.pois);
                hS.pois = hU.pois;
              } else {
                hU.pois = hS.pois;
              }
            }
          }
        }
      }
    },
    mergeSameZoomLabelData: function(hV) {
      var hT = hV.label;
      if (!hT) {
        return;
      }
      var e = hV.tileInfo;
      var hU = this.getSameZoomDataFromCache(e);
      if (!hU) {
        return;
      }
      var hS = hU.label;
      if (!hS) {
        return;
      }
      for (var T = 0; T < hT.fixedLabel.length; T++) {
        if (!this.hasSameLabelData(hT.fixedLabel[T].key, hS.fixedLabel)) {
          hS.hasNewData = true;
          hS.fixedLabel.push(hT.fixedLabel[T]);
        }
      }
      for (var T = 0; T < hT.lineLabel.length; T++) {
        if (!this.hasSameLabelData(hT.lineLabel[T].key, hS.lineLabel)) {
          hS.hasNewData = true;
          hS.lineLabel.push(hT.lineLabel[T]);
        }
      }
      for (var T = 0; T < hT.indoorLabel.length; T++) {
        if (!this.hasSameLabelData(hT.indoorLabel[T].key, hS.indoorLabel)) {
          hS.hasNewData = true;
          hS.indoorLabel.push(hT.indoorLabel[T]);
        }
      }
      hV.label = hS;
      if (hU.renderData.indoorData && hV.renderData.indoorData) {
        this.mergeIndoorLabelData(
          hV.renderData.indoorData,
          hU.renderData.indoorData
        );
      }
    },
    processLabelData: function(hU) {
      if (!hU.label) {
        return;
      }
      if (hU.label.status === "processing") {
        return;
      }
      hU.label.status = "processing";
      var hS = this;
      hS.updateAllIconsTextureCoords(hU);
      this.labelProcessor.loadIconImages(hU, function(hV) {
        hS.updateAllIconsTextureCoords(hV);
      });
      if (this.map.config.textRenderType === "canvas") {
        var e = this.labelProcessor.drawLabelsOnCanvas(hU, function(hX, hY) {
          var hW = hU.tileInfo;
          if (!bp.customStyleInfo) {
            hS.mergeSameZoomLabelData(hU);
          }
          if (hX) {
            if (!hU.label.textureHeights) {
              hU.label.textureHeights = [];
            }
            hU.label.textureHeights[hW.useZoom] = hX.height;
          }
          if (hY) {
            if (!hU.label.indoorTextureHeights) {
              hU.label.indoorTextureHeights = [];
            }
            hU.label.indoorTextureHeights[hW.useZoom] = hY.height;
          }
          var hV = hS._getTileTexImgKey(hW);
          hS._doWorkAfterLabelImageLoad(hU, hX, hY, hV);
        });
        return;
      }
      var T = hU.label.textImageBitmap || hU.label.textImgStr;
      var hT = hU.label.indoorTextImageBitmap || hU.label.indoorTextImgStr;
      this.labelProcessor.loadImgByStr(T, hT, function i(h0, hY) {
        var hX = hU.label.textureHeight;
        var h1 = hU.label.indoorTextureHeight;
        hU.label.textureHeight = undefined;
        hU.label.indoorTextureHeight = undefined;
        var hW = hU.tileInfo;
        hS.mergeSameZoomLabelData(hU);
        var hZ = hU.label;
        hZ.textImgStr = "";
        hZ.indoorTextImgStr && (hZ.indoorTextImgStr = "");
        if (!hZ.textureHeights) {
          hZ.textureHeights = [];
        }
        hZ.textureHeights[hW.useZoom] = hX;
        if (!hZ.indoorTextureHeights) {
          hZ.indoorTextureHeights = [];
        }
        hZ.indoorTextureHeights[hW.useZoom] = h1;
        var hV = hS._getTileTexImgKey(hW);
        hS._doWorkAfterLabelImageLoad(hU, h0, hY, hV);
      });
    },
    _getTileTexImgKey: function(i) {
      var T = i.style || this.mapStyleId || "default";
      var e = T + "_" + i.col + "_" + i.row + "_" + i.zoom;
      if (this.map.config.textRenderType === "canvas") {
        e += "_" + i.useZoom;
      }
      return e;
    },
    _doWorkAfterLabelImageLoad: function(hW, hU, hS, i) {
      var hV = this;
      var hT = hW.label;
      hT.tileInfo = hW.tileInfo;
      hT.status = "ready";
      if (hU || hS) {
        var e = hT.tileInfo;
        if (hU) {
          hU.id = i;
          if (!hT.textureSources) {
            hT.textureSources = [];
          }
          hT.textureSources[e.useZoom] = hU;
        }
        if (hS) {
          hS.id = i + "_indoor";
          if (!hT.indoorTextureSources) {
            hT.indoorTextureSources = [];
          }
          hT.indoorTextureSources[e.useZoom] = hS;
        }
        if (hV.map._webglMapScene) {
          var T = hV.map._webglMapScene._painter;
          if (hU) {
            T._addToAsyncJob(hT.textureSources[e.useZoom]);
          }
        }
      }
      if (hW.custom !== true) {
        hV.tileLabels.push(hT);
      }
      if (hV.collisionTimer) {
        return;
      }
      hV.collisionTimer = setTimeout(function() {
        hV.dataBackCollideLabels();
        hV.collisionTimer = null;
      }, 300);
    },
    _updateIconTextureCoords: function(hW, T) {
      if (!hW) {
        return;
      }
      var hV = this.map;
      for (var hS = 0; hS < hW.length; hS++) {
        var hU = hW[hS];
        if (!hU.iconPos) {
          continue;
        }
        if (hV._webglMapScene) {
          var e = hV._webglMapScene._painter;
          var hT = T + "_" + hU.iconPos.iconType;
          hU.iconPos.texcoord = e._iconTextureAtlasCoords[hT] || null;
        }
      }
    },
    updateAllIconsTextureCoords: function(hT) {
      if (this.map.viewAnimationTime) {
        return;
      }
      if (hT) {
        if (hT.label) {
          var i = hT.tileInfo.style;
          this._updateIconTextureCoords(hT.label.fixedLabel, i);
          this._updateIconTextureCoords(hT.label.indoorLabel, i);
        }
      } else {
        var hS = this.tileCache.getAllData();
        for (var T in hS) {
          var e = hS[T].data;
          if (e.status === "ready" && e.label) {
            var i = e.tileInfo.style;
            this._updateIconTextureCoords(e.label.fixedLabel, i);
            this._updateIconTextureCoords(e.label.indoorLabel, i);
          }
        }
      }
      this.updateLabels();
      this.map.dispatchEvent(new bc("onrefresh"));
    },
    cacheDataCollideLabels: function(T) {
      var hT = this;
      var i = this.map._featureMgr;
      function hS() {
        hT.cacheLabelTimer = null;
        var hU;
        var hV = hT.map.getTilt();
        var hW = hT.map.getHeading() % 360;
        if (
          hT.tileLabels.length === 0 ||
          (hT.tileLabels.length === 1 && hT.tileLabels[0].tileInfo.zoom === 0)
        ) {
          hU = i.getLabelData();
          if (hU.length > 0) {
            hU = hT.labelProcessor.collisionTest(hU, -1);
          }
        } else {
          if (hV || hW) {
            if (this._collisionTimer) {
              if (!hV) {
                clearTimeout(this._collisionTimer);
              } else {
                if (Date.now() - hT.lastCollisionTestTime > 500) {
                  hT.lastCollisionTestTime = Date.now();
                } else {
                  clearTimeout(this._collisionTimer);
                }
              }
            }
            this._collisionTimer = setTimeout(function() {
              hU = hT.labelProcessor.collisionTest(hT.tileLabels);
              if (hU) {
                i.setLabelData(hU);
              }
              hT.updateLabels();
              hT.map.dispatchEvent(new bc("onrefresh"));
              hT._collisionTimer = null;
            }, 60);
            return;
          } else {
            hU = hT.labelProcessor.getCachedLabels(hT.tileLabels);
          }
        }
        if (hU) {
          i.setLabelData(hU);
        }
        hT.updateLabels();
        hT.map.dispatchEvent(new bc("onrefresh"));
      }
      if (!T) {
        clearTimeout(hT.cacheLabelTimer);
        hS();
      } else {
        if (hT.cacheLabelTimer) {
          return;
        }
        hT.cacheLabelTimer = setTimeout(function e() {
          hS();
        }, T);
      }
    },
    dataBackCollideLabels: function() {
      var i = this;
      if (i.tileLabels && i.tileLabels.length === 0) {
        return;
      }
      var e;
      i.labelProcessor.calcLabelsCollision(i.tileLabels);
      e = i.labelProcessor.getCachedLabels(i.tileLabels);
      if (e) {
        i.map._featureMgr.setLabelData(e);
      }
      i.updateLabels();
      i.map.dispatchEvent(new bc("onrefresh"));
      if (f6()) {
        this.labelProcessor._refreshSpotData();
      }
    },
    updateLabels: function(hT) {
      var hU = this.map;
      var i = hU._featureMgr;
      var T = i.getLabelData();
      if (T.length > 0) {
        var hS = hU.getZoom();
        if (T.labelZoom - hS < 3) {
          this.labelProcessor.updateLabels(T);
          var e = this.labelProcessor.fixDataFormat(T);
          i.setOverlayData(e[0], 2);
          i.setOverlayData(e[1], 3);
          i.setOverlayData(e[2], 4);
        } else {
          i.clearLabelOverlayData();
        }
        hU.temp.isPermitSpotOver = false;
        this.labelProcessor.curSpotAdded = false;
      }
    },
    loadRasterLayerData: function(hS, hW) {
      if (hW) {
        for (var hU = 0, hT = hS.length; hU < hT; hU++) {
          var T = hS[hU];
          var hX = this.getTileKey(T);
          var e = this.tileCache.getData(hX);
          if (e && e.status === "ready") {
            this.map._featureMgr.setData(e, this.drawIndex, 2);
          }
        }
        return;
      }
      for (var hU = 0, hT = hS.length; hU < hT; hU++) {
        var T = hS[hU];
        var hX = this.getTileKey(T);
        var e = this.tileCache.getData(hX);
        if (!e) {
          this.tileCache.setData(hX, {});
          var hV = this;
          this.loadRasterTileData(T, function(i, hY) {
            hV.rasterTileDataCbk(i, hY);
          });
        }
      }
    },
    loadRasterTileData: function(i, e) {
      var hT = i.col;
      var hW = i.row;
      var hU = i.zoom;
      var hS = this.getTilesUrl(new ek(hT, hW), hU);
      if (!hS) {
        return;
      }
      var hV = this.getTileKey(i);
      var T = this.loadTileImage(hS, hV, e);
      T.tileInfo = i;
    },
    loadTileImage: function(hS, T, e) {
      var i = new Image();
      i.crossOrigin = "anonymous";
      i.onload = function() {
        e && e(this, T);
      };
      i.onerror = function() {
        e && e(null, T);
      };
      i.src = hS;
      return i;
    },
    rasterTileDataCbk: function(hU, hS) {
      if (!hU) {
        this.tileCache.removeData(hS);
        return;
      }
      var i = hU.tileInfo;
      var T = i.col;
      var h0 = i.row;
      var hZ = i.zoom;
      var e = this.tileCache.getData(hS);
      if (!e) {
        return;
      }
      var hT = d5.calcLoopParam(T, hZ);
      var hX = hT.geoOffsetX;
      hU.tileInfo.loopOffsetX = hX;
      e.textureSource = hU;
      e.dataType = eI;
      e.tileInfo = i;
      e.renderData = {
        vertexAll: [
          0,
          0,
          0,
          0,
          0,
          256,
          0,
          0,
          1,
          0,
          256,
          256,
          0,
          1,
          1,
          0,
          0,
          0,
          0,
          0,
          256,
          256,
          0,
          1,
          1,
          0,
          256,
          0,
          0,
          1,
        ],
      };
      e.status = "ready";
      this.tileCache.setData(hS, e);
      var hV = "id_" + T + "_" + h0 + "_" + hZ;
      var hW = false;
      if (this.curViewTilesInfo[hV]) {
        e.dataType = eI;
        e.png8 = this.png8 || false;
        this.map._featureMgr.setData(e, this.drawIndex, 2);
        hW = true;
      }
      if (hW) {
        var hY = new bc("onrefresh");
        hY.source = "webgllayer";
        this.map.dispatchEvent(hY);
      }
    },
    _checkTilesLoaded: function() {
      this.numLoading--;
      if (this.map.firstTileLoad === false) {
        this.map.dispatchEvent(new bc("onfirsttilesloaded"));
        this.map.firstTileLoad = true;
      }
      var e = this;
      if (this.numLoading === 0) {
        if (this._checkLoadedTimer) {
          clearTimeout(this._checkLoadedTimer);
          this._checkLoadedTimer = null;
        }
        this._checkLoadedTimer = setTimeout(function() {
          if (e.numLoading === 0) {
            e.map.dispatchEvent(new bc("ontilesloaded"));
          }
          e._checkLoadedTimer = null;
        }, 60);
      }
    },
    isClickableLabel: function(e) {
      if (e.isDel) {
        return false;
      }
      if (e.zoom > 9 && !e.guid) {
        return false;
      }
      if (e.zoom <= 9 && !e.name && !e.guid) {
        return false;
      }
      return true;
    },
  };
  var ca = 5;
  var dY = 4;
  var hr = 3;
  var fg = 2;
  var hL = 1;
  var d1 = 0;
  function w(e) {
    this._ratio = a7();
    this._iconCache = {};
    this._map = e;
    this._drawingCanvasPool = [];
    this._drawingCanvasHeight = 4096;
  }
  D.extend(w.prototype, {
    _loadIcons: function(i, hW) {
      var hU = 0;
      var hT = this;
      var T = this._map.config.style;
      for (var hV in i) {
        hU++;
        var e = new Image();
        e.id = hV;
        e.crossOrigin = "anonymous";
        e.onload = function() {
          hT._iconCache[this.id].loaded = true;
          hU--;
          if (hU === 0) {
            hW();
          }
          this.onload = null;
        };
        e.onerror = function() {
          hT._iconCache[this.id] = null;
          hU--;
          if (hU === 0) {
            hW();
          }
          this.onerror = null;
        };
        var hS = e4.getIconSetPath(T) + hV + ".png";
        e.src = hS;
        this._iconCache[hV] = { loaded: false, image: e };
      }
    },
    _getEmptyDrawingCanvas: function() {
      for (var T = 0; T < this._drawingCanvasPool.length; T++) {
        if (this._drawingCanvasPool[T]._free === true) {
          this._drawingCanvasPool[T]._free = false;
          return this._drawingCanvasPool[T];
        }
      }
      var e = this._createNewDrawingCanvas();
      this._drawingCanvasPool.push(e);
      e._free = false;
      return e;
    },
    _createNewDrawingCanvas: function() {
      var e = U("canvas");
      e.width = 512;
      e.height = this._drawingCanvasHeight;
      e._free = true;
      e._id = bp.getGUID();
      var i = e.getContext("2d");
      i.textBaseline = "bottom";
      i.lineJoin = "round";
      return e;
    },
    drawLabelsOnCanvas: function(ia, hS) {
      var h0 = ia.label.fixedLabel.slice(0);
      var h6 = ia.label.lineLabel.slice(0);
      var T = ia.label.indoorLabel.slice(0);
      if (h0.length === 0 && h6.length === 0 && T.length === 0) {
        hS();
        return;
      }
      var hV = function(ig, i) {
        return ig.styleId - i.styleId;
      };
      h0.sort(hV);
      h6.sort(hV);
      T.sort(hV);
      var h9 = {};
      var e = this._getEmptyDrawingCanvas();
      var h5 = e.getContext("2d");
      h5.clearRect(0, 0, e.width, e.height);
      var id = 0;
      var h1 = null;
      var hU = 0;
      if (h0.length > 0) {
        while (hU < h0.length && !h0[hU].styleText[0]) {
          hU++;
        }
        if (h0[hU] && h0[hU].styleText[0]) {
          h1 = h0[hU].styleText[0].fontSize + h0[hU].styleText[0].haloSize * 2;
        }
      }
      if (h1 === null && T.length > 0) {
        hU = 0;
        while (hU < T.length && !T[hU].styleText[0]) {
          hU++;
        }
        if (T[hU] && T[hU].styleText[0]) {
          h1 = T[hU].styleText[0].fontSize + T[hU].styleText[0].haloSize * 2;
        }
      }
      if (h1 === null && h6.length > 0) {
        hU = 0;
        while (hU < h6.length && !h6[hU].styleText[0]) {
          hU++;
        }
        if (h6[hU] && h6[hU].styleText[0]) {
          h1 = h6[hU].styleText[0].fontSize + h6[hU].styleText[0].haloSize * 2;
        }
      }
      if (h1 === null || isNaN(h1)) {
        hS();
        return;
      }
      var hX = 0;
      var hW = h1;
      var h3 = {};
      var ie = 0;
      var h4 = [];
      for (var h8 = 0; h8 < h0.length; h8++) {
        var hZ = h0[h8];
        var h2 = hZ.name;
        var h7 = hZ.styleText;
        if (!h2 || h7.length === 0) {
          continue;
        }
        var hT = hZ.icon;
        if (
          hZ.textOnIcon &&
          (!this._iconCache[hT] || this._iconCache[hT].loaded === false)
        ) {
          h4.push(hZ);
          ie++;
          if (!h3[hT]) {
            h3[hT] = true;
          }
          continue;
        }
        var ib = this._drawEachText(h5, hZ, id, hX, hW, h1, h9);
        if (!ib) {
          continue;
        }
        hX = ib.curX;
        hW = ib.curY;
        h1 = ib.curLineHeight;
        id = ib.styleId;
      }
      var ib = this._drawEachTypeOfLabels(h5, T, id, hX, hW, h1, h9);
      id = ib.curStyleId;
      hX = ib.curX;
      hW = ib.curY;
      h1 = ib.curLineHeight;
      var ib = this._drawEachTypeOfLabels(h5, h6, id, hX, hW, h1, h9);
      id = ib.curStyleId;
      hX = ib.curX;
      hW = ib.curY;
      h1 = ib.curLineHeight;
      if (ie > 0) {
        var ic = this;
        this._loadIcons(h3, function() {
          ib = ic._drawEachTypeOfLabels(h5, h4, id, hX, hW, h1, h9);
          id = ib.curStyleId;
          hX = ib.curX;
          hW = ib.curY;
          h1 = ib.curLineHeight;
          var i = ic._generateEachLabelCanvas(e, hW, h0, h6, T, ia);
          hS(i[0], i[1]);
        });
        return;
      }
      var hY = this._generateEachLabelCanvas(e, hW, h0, h6, T, ia);
      hS(hY[0], hY[1]);
    },
    drawCustomLabelsOnCanvas: function(hV, h1) {
      if (hV.length === 0) {
        h1();
        return;
      }
      var T = 0;
      var e = hV[0].style.fontSize + (hV[0].style.haloSize || 0) * 2 || 0;
      var hS = e;
      var hX = this._getEmptyDrawingCanvas();
      var h2 = hX.getContext("2d");
      h2.clearRect(0, 0, hX.width, hX.height);
      var hY = {};
      var h0 = -1;
      for (var hT = 0; hT < hV.length; hT++) {
        if (!hV[hT].name) {
          continue;
        }
        var hZ = this._drawEachText(h2, hV[hT], h0, T, e, hS, hY);
        if (!hZ) {
          continue;
        }
        T = hZ.curX;
        e = hZ.curY;
        hS = hZ.curLineHeight;
        h0 = hZ.styleId;
      }
      var hU = e;
      var hW = this._copyToNewCanvas(hX, hU);
      for (var hT = 0; hT < hV.length; hT++) {
        if (!hV[hT].name && hV[hT].style.iconSize) {
          this._addFixedLabelBounds(hV[hT]);
          continue;
        }
        if (!hV[hT].textSize) {
          continue;
        }
        this._updateFixedLabelCoords(hV[hT], hU);
        this._addFixedLabelBounds(hV[hT]);
      }
      h1(hW);
    },
    _drawEachTypeOfLabels: function(h1, hV, hZ, hS, T, hT, hX) {
      for (var hU = 0; hU < hV.length; hU++) {
        var hW = hV[hU];
        var h0 = hW.name;
        var e = hW.styleText;
        if (!h0 || e.length === 0) {
          continue;
        }
        var hY = this._drawEachText(h1, hW, hZ, hS, T, hT, hX);
        if (!hY) {
          continue;
        }
        hS = hY.curX;
        T = hY.curY;
        hT = hY.curLineHeight;
        hZ = hY.styleId;
        if (hY.curY > this._drawingCanvasHeight) {
          return { curX: hS, curY: T, curLineHeight: hT, curStyleId: hZ };
        }
      }
      return { curX: hS, curY: T, curLineHeight: hT, curStyleId: hZ };
    },
    _drawIndoorTextLabelOnCanvas: function(hT) {
      var e = this._getEmptyDrawingCanvas();
      var h0 = e.getContext("2d");
      h0.clearRect(0, 0, e.width, e.height);
      var h8 = 0;
      var hZ = null;
      var hY = 0;
      var hW;
      var h5 = {};
      var h4 = [];
      for (var hU in hT) {
        if (hU === "tileInfo") {
          continue;
        }
        var hS = hT[hU];
        var h3 = hS.defaultFloor;
        var hX = hS.floors;
        for (var h2 = 0; h2 < hX.length; h2++) {
          if (h2 === h3) {
            continue;
          }
          var h6 = hX[h2];
          if (!h6.pois) {
            continue;
          }
          var hV = h6.pois;
          for (var h1 = 0; h1 < hV.length; h1++) {
            if (hZ === null && hV[h1].styleText[0]) {
              hZ =
                hV[h1].styleText[0].fontSize + hV[h1].styleText[0].haloSize * 2;
              hW = hZ;
            }
            h4.push(hV[h1]);
          }
        }
      }
      if (hZ === null) {
        return null;
      }
      h4.sort(function(h9, i) {
        return i.rank - h9.rank || h9.styleId - i.styleId;
      });
      var h7 = this._drawEachTypeOfLabels(h0, h4, h8, hY, hW, hZ, h5);
      h8 = h7.curStyleId;
      hY = h7.curX;
      hW = h7.curY;
      hZ = h7.curLineHeight;
      var T = this._copyToNewCanvas(e, hW);
      return T;
    },
    _updateIndoorLabelsCoords: function(hZ, h0) {
      for (var hY in hZ) {
        if (hY === "tileInfo") {
          continue;
        }
        var e = hZ[hY];
        var hU = e.defaultFloor;
        var hV = e.floors;
        for (var hW = 0; hW < hV.length; hW++) {
          if (hW === hU) {
            continue;
          }
          var T = hV[hW];
          if (!T.pois) {
            continue;
          }
          var hT = T.pois;
          for (var hS = 0; hS < hT.length; hS++) {
            var hX = hT[hS];
            if (hX.name && (!hX.textSize || hX.textSize.length === 0)) {
              hT.splice(hS, 1);
              hS--;
              continue;
            }
            this._updateFixedLabelCoords(hX, h0);
            this._addFixedLabelBounds(hX);
          }
        }
      }
    },
    _generateEachLabelCanvas: function(hV, hU, hW, e, hY, T) {
      hU = Math.min(hU, this._drawingCanvasHeight);
      var hX = this._copyToNewCanvas(hV, hU);
      var hS = null;
      if (T.renderData.indoorData) {
        hS = this._drawIndoorTextLabelOnCanvas(T.renderData.indoorData);
        if (hS) {
          this._updateIndoorLabelsCoords(T.renderData.indoorData, hS.height);
        }
      }
      for (var hT = 0; hT < hW.length; hT++) {
        if (!hW[hT].textSize) {
          continue;
        }
        this._updateFixedLabelCoords(hW[hT], hU);
        this._addFixedLabelBounds(hW[hT]);
      }
      for (var hT = 0; hT < hY.length; hT++) {
        if (!hY[hT].textSize) {
          continue;
        }
        this._updateFixedLabelCoords(hY[hT], hU);
        this._addFixedLabelBounds(hY[hT]);
      }
      for (var hT = 0; hT < e.length; hT++) {
        this._updateLineLabelCoords(e[hT], hU);
      }
      return [hX, hS];
    },
    _copyToNewCanvas: function(T, i) {
      if (i === 0) {
        return null;
      }
      var hS = U("canvas");
      hS.width = T.width;
      hS.height = i;
      var e = hS.getContext("2d");
      e.drawImage(T, 0, 0, 512, i, 0, 0, 512, i);
      hS._id = T._id;
      T._free = true;
      return hS;
    },
    _drawEachText: function(ia, hW, T, ic, ib, ik, hT) {
      var ij = hW.name;
      var h1 = hW.styleText ? hW.styleText[0] : hW.style;
      if (!h1) {
        return null;
      }
      var h4 = h1.fontSize;
      var ip = h1.fontWeight;
      var iD = h1.haloSize || 0;
      if (!h5) {
      }
      if (h1.fontRgba) {
        var iJ = h1.fontRgba[3] / 255;
        var h0 = [];
        h0[3] = iJ;
        for (var iI = 0; iI < 3; iI++) {
          h0[iI] = h1.fontRgba[iI];
        }
      }
      if (h1.haloRgba) {
        var iJ = h1.haloRgba[3] / 255;
        var h7 = [];
        h7[3] = iJ;
        for (var iI = 0; iI < 3; iI++) {
          h7[iI] = h1.haloRgba[iI];
        }
      }
      var ix = h0 ? "rgba(" + h0.join(",") + ")" : h1.color;
      var hV = h7 ? "rgba(" + h7.join(",") + ")" : h1.strokeColor;
      var iF = hW.styleId || 0;
      if (iD > 4) {
        iD = 4;
      }
      var il = [];
      var h9 = [];
      var ih = 0;
      if (hT && !hT[iF]) {
        hT[iF] = {};
      }
      var h3 = h4 + iD * 2;
      var im = h3;
      if (hW.containDescendings) {
        im += 4;
      }
      if (iD === 0) {
        im += 2;
      }
      if (hW.textOnIcon) {
        im = Math.max(im, hW.iconSize[1]);
      }
      if (iF !== T || im > ik) {
        T = iF;
        if (ip >= 10 && ip % 10 === 0) {
          ia.font = ip * 10 + " " + h4 + "px sans-serif";
        } else {
          ia.font = h4 + "px sans-serif";
        }
        if (im > ik) {
          var ii = im - ik;
          ik += ii;
          ib += ii;
        }
        if (iD > 0) {
          ia.lineWidth = iD * 2;
          ia.strokeStyle = hV;
        }
        ia.fillStyle = ix;
      }
      if (hW.type === "line") {
        var hY = ij.split("");
        for (var iG = 0; iG < hY.length; iG++) {
          var iz = hY[iG];
          var id;
          var iq;
          if (hT[iF][iz]) {
            var h5 = hT[iF][iz];
            id = h5.displaySize;
            iq = h5.curWordPosition;
          } else {
            var hS = Math.ceil(ia.measureText(iz).width);
            if (ic + hS > 512) {
              ic = 0;
              ib += im;
              ik = im;
            }
            if (ib > this._drawingCanvasHeight) {
              return { curX: ic, curY: ib, curLineHeight: ik, styleId: iF };
            }
            var iA = ic;
            if (iD > 0) {
              hS += iD;
              iA -= Math.round(iD / 2);
              ia.strokeText(iz, ic, ib);
            }
            ia.fillText(iz, ic, ib);
            var iw = [hS, im];
            id = [Math.round(iw[0] / 2), Math.round(iw[1] / 2)];
            iq = [iA, ib - im];
            hT[iF][iz] = {
              displaySize: id,
              curWordPosition: iq,
              totalHeight: ih,
            };
            ic += hS + 2;
          }
          il.push(id);
          h9.push(iq);
        }
        ih = Math.round(il[0][1]);
      } else {
        if (hT[iF][ij]) {
          var h5 = hT[iF][ij];
          il = h5.textSize;
          h9 = h5.labelImagePosition;
          ih = h5.totalHeight;
        } else {
          var h6 = ij.split("\\");
          if (h6.length > 1 && hW.textOnIcon) {
            var iH = 0;
            var iE = 0;
            var iK = [];
            var ie = 8;
            for (var iG = 0; iG < h6.length; iG++) {
              var ij = h6[iG];
              var h2 = Math.ceil(ia.measureText(ij).width);
              if (h2 > iH) {
                iH = h2;
              }
              iK.push(Math.round(h2 / 2));
              iE += im;
            }
            var hZ = iH + 2 * ie;
            var iC = iE + 2 * ie;
            if (ic + hZ > 512) {
              ic = 0;
              ib += ik;
            }
            ib += iE - im + 2 * ie;
            var iv = ic;
            var ig = ib - iC;
            var e = Math.round(hZ / 2);
            var h8 = this._iconCache[hW.icon].image;
            this.drawStretchedIcon(ia, h8, [iv, ig], ie, iH, iE);
            for (var iG = 0; iG < h6.length; iG++) {
              var ij = h6[iG];
              var iB = iv + (e - iK[iG]);
              var iy = ig + 4 + (iG + 1) * im;
              ia.fillText(ij, iB, iy);
            }
            il.push([Math.round(hZ / 2), Math.round(iC / 2)]);
            h9.push([iv, ig]);
            ic += hZ;
            ik = iC;
            ih = Math.round(iC / 2);
          } else {
            for (var iG = 0; iG < h6.length; iG++) {
              var ij = h6[iG];
              var h2 = Math.ceil(ia.measureText(ij).width);
              var hZ = h2;
              var hU = 0;
              if (hW.textOnIcon) {
                hU = 10;
                hZ += hU * 2;
                if (hW.styleId === 519) {
                  hZ = hW.iconSize[0];
                  hU = Math.round((hZ - h2) / 2);
                }
              }
              if (ic + hZ > 512) {
                ic = 0;
                ib += im;
                ik = im;
              }
              if (ib > this._drawingCanvasHeight) {
                return { curX: ic, curY: ib, curLineHeight: ik, styleId: iF };
              }
              var iv = ic;
              var ig = ib - im;
              var iu = ic;
              var it = ib;
              if (hW.containDescendings) {
                it -= 4;
              }
              if (hW.textOnIcon) {
                var io = false;
                var h8 = this._iconCache[hW.icon].image;
                var ir = hW.iconSize.concat([]);
                if (h3 > ir[1]) {
                  ir[1] = h3;
                  io = true;
                }
                if (h2 > ir[0]) {
                  ir[0] = h2;
                  io = true;
                }
                if (hW.styleId === 519) {
                  ia.drawImage(h8, 0, 0, ir[0], ir[1], iv, ig, ir[0], ir[1]);
                } else {
                  if (io) {
                    this.drawStretchedIcon(ia, h8, [iv, ig], hU, h2, ir[1]);
                  } else {
                    this.draw3StretchedIcon(ia, h8, [iv, ig], hU, h2, ir[1]);
                  }
                }
                iu += hU;
                if (hW.iconSize[1] > h3) {
                  it -= (hW.iconSize[1] - h3) / 2 - 1;
                }
                hZ += 1;
              }
              if (iD > 0) {
                hZ += iD;
                iv -= Math.round(iD / 2);
                ig += Math.round(iD / 2);
                if (iF === 71028) {
                  im -= 2;
                }
                if (iF === 32) {
                  im -= 2;
                }
                ia.strokeText(ij, iu, it);
              }
              ia.fillText(ij, iu, it);
              var hX = [hZ, im];
              var id = [Math.round(hX[0] / 2), Math.round(hX[1] / 2)];
              il.push(id);
              h9.push([iv, ig]);
              ih += Math.round(id[1]);
              ic += hZ;
            }
          }
          hT[iF][ij] = {
            textSize: il,
            labelImagePosition: h9,
            totalHeight: ih,
          };
        }
      }
      hW.textSize = il;
      hW.labelImagePosition = h9;
      hW.totalHeight = ih;
      return { curX: ic, curY: ib, curLineHeight: ik, styleId: iF };
    },
    drawStretchedIcon: function(e, T, hS, hV, hW, i) {
      var hU = hS[0];
      var hT = hS[1];
      e.drawImage(T, 0, 0, hV, hV, hU, hT, hV, hV);
      e.drawImage(T, hV, 0, 1, hV, hU + hV, hT, hW, hV);
      e.drawImage(T, T.width - hV, 0, hV, hV, hU + hW + hV, hT, hV, hV);
      e.drawImage(T, 0, hV, hV, 1, hU, hT + hV, hV, i);
      e.drawImage(T, hV, hV, 1, 1, hU + hV, hT + hV, hW, i);
      e.drawImage(T, T.width - hV, hV, hV, 1, hU + hW + hV, hT + hV, hV, i);
      e.drawImage(T, 0, T.height - hV, hV, hV, hU, hT + i + hV, hV, hV);
      e.drawImage(T, hV, T.height - hV, 1, hV, hU + hV, hT + i + hV, hW, hV);
      e.drawImage(
        T,
        T.width - hV,
        T.height - hV,
        hV,
        hV,
        hU + hW + hV,
        hT + i + hV,
        hV,
        hV
      );
    },
    draw3StretchedIcon: function(e, i, T, hU, hW, hV) {
      var hT = T[0];
      var hS = T[1];
      e.drawImage(i, 0, 0, hU, i.height, hT, hS, hU, i.height);
      e.drawImage(i, hU, 0, 1, i.height, hT + hU, hS, hW, i.height);
      e.drawImage(
        i,
        i.width - hU,
        0,
        hU,
        i.height,
        hT + hU + hW,
        hS,
        hU,
        i.height
      );
    },
    _updateFixedLabelCoords: function(hT, h8) {
      if (h8 === 0) {
        return;
      }
      var h3 = [];
      var ig = [];
      var ih = 0;
      var h6 = hT.totalHeight;
      var iq = hT.textSize.length;
      var hU = hT.direction;
      if (typeof hU !== "number") {
        hU = 0;
      }
      for (var ii = 0; ii < iq; ii++) {
        var h9 = hT.labelImagePosition[ii];
        var h7 = hT.textSize[ii];
        var h5 = h9[0];
        var hS = h9[1];
        var hV = h7[0];
        var h0 = h7[1];
        var h2 = 0;
        var ie = 0;
        if (typeof hT.textMargin === "number") {
          ie = hT.textMargin;
        }
        var h1;
        var e;
        var hX = 0;
        var h4 = 0;
        if (!hT.iconPos) {
          if (!hT.custom) {
            hU = dY;
          }
        } else {
          hX = hT.iconPos.width;
          h4 = hT.iconPos.height;
        }
        switch (hU) {
          case hr:
            var T = h6 / 2 - h0 + (h2 * (iq - 1)) / 2;
            h1 = Math.round(-hX / 2 - hV - ie);
            e = Math.round(T - ih - h2 * ii);
            break;
          case hL:
            var T = h6 / 2 - h0 + (h2 * (iq - 1)) / 2;
            h1 = Math.round(hX / 2 + ie);
            e = Math.round(T - ih - h2 * ii);
            break;
          case fg:
            var T = h4 / 2 + h6 - h0 + h2 * iq;
            h1 = Math.round(-hV / 2);
            e = Math.round(T - ih - h2 * ii);
            break;
          case d1:
            var T = -h4 / 2 - h2 - h0;
            h1 = Math.round(-hV / 2);
            e = Math.round(T - ih - h2 * ii);
            break;
          case dY:
            var T = -h6 / 2 - (h2 * (iq - 1)) / 2;
            h1 = Math.round(-hV / 2);
            e = Math.round(T - ih - h2 * ii);
            break;
        }
        ih += h0;
        var hZ = h1 + hV;
        var ir = e;
        var hY = hZ;
        var ip = ir + h0;
        var hW = h1;
        var io = ip;
        h3.push(h1, e, hZ, ir, hY, ip, h1, e, hY, ip, hW, io);
        var im = h5 / 512;
        var id = (h8 - hS - h0 * 2) / h8;
        var il = (h5 + hV * 2) / 512;
        var ic = id;
        var ik = il;
        var ib = (h8 - hS) / h8;
        var ij = im;
        var ia = ib;
        ig.push(im, id, il, ic, ik, ib, im, id, ik, ib, ij, ia);
      }
      if (!hT.textPos) {
        hT.textPos = {};
      }
      hT.textPos.vertex = h3;
      hT.textPos.texcoord = ig;
    },
    _addFixedLabelBounds: function(hY) {
      var hU = 1000;
      var hS = 1000;
      var T = -1000;
      var e = -1000;
      if (hY.iconPos) {
        var hW = hY.iconPos["vertex"];
        for (var hX = 0, hT = hW.length; hX < hT; hX += 2) {
          var h2 = hW[hX];
          var h0 = hW[hX + 1];
          if (h2 < hU) {
            hU = h2;
          }
          if (h2 > T) {
            T = h2;
          }
          if (h0 < hS) {
            hS = h0;
          }
          if (h0 > e) {
            e = h0;
          }
        }
      }
      if (hY.custom && hY.style.iconSize && !hY.name) {
        var hZ = hY.style.iconSize;
        var h1 = hY.direction;
        switch (h1) {
          case dY:
            hU = -Math.round(hZ[0] / 2);
            hS = -Math.round(hZ[1] / 2);
            T = Math.round(hZ[0] / 2);
            e = Math.round(hZ[1] / 2);
            break;
          case fg:
            hU = -Math.round(hZ[0] / 2);
            hS = 0;
            T = Math.round(hZ[0] / 2);
            e = hZ[1];
            break;
        }
      }
      if (hY.textPos) {
        var hV = hY.textPos["vertex"];
        for (var hX = 0, hT = hV.length; hX < hT; hX += 2) {
          var h2 = hV[hX];
          var h0 = hV[hX + 1];
          if (h2 < hU) {
            hU = h2;
          }
          if (h2 > T) {
            T = h2;
          }
          if (h0 < hS) {
            hS = h0;
          }
          if (h0 > e) {
            e = h0;
          }
        }
      }
      hY.bds = [hU, hS, T, e];
    },
    _updateLineLabelCoords: function(h9, hZ) {
      if (hZ === 0) {
        return;
      }
      var hS = h9.wordsInfo;
      var h6 = h9.wordCount;
      if (!h9.labelImagePosition) {
        return;
      }
      var h1 = h9.labelImagePosition.slice(0);
      if (h9.reverse) {
        h1.reverse();
      }
      var ij = 1000;
      var ig = 1000;
      var ih = -1000;
      var ie = -1000;
      for (var ia = 0; ia < h6; ia++) {
        var ik = h1[ia];
        var ii = ik[0];
        var h7 = ik[1];
        var h5 = h9.textSize[ia];
        var hY = h5[0];
        var e = h5[1];
        var hX = ii / 512;
        var h4 = (hZ - h7 - e * 2) / hZ;
        var hV = (ii + hY * 2) / 512;
        var h3 = h4;
        var hT = hV;
        var h2 = (hZ - h7) / hZ;
        var T = hX;
        var h0 = h2;
        hS[ia].size = [hY, e];
        hS[ia].texcoord = [hX, h4, hV, h3, hT, h2, hX, h4, hT, h2, T, h0];
        var id = hS[ia].offset[0];
        var ic = hS[ia].offset[1];
        var ib = id - hY / 2;
        var hW = ic + e / 2;
        var hU = ic - e / 2;
        var h8 = id + hY / 2;
        if (ib < ij) {
          ij = ib;
        }
        if (h8 > ih) {
          ih = h8;
        }
        if (hU < ig) {
          ig = hU;
        }
        if (hW > ie) {
          ie = hW;
        }
      }
      h9.bds = [ij, ig, ih, ie];
    },
  });
  var cU = {
    0: "00000000",
    16: "00010000",
    32: "00100000",
    48: "00110000",
    64: "01000000",
    96: "01100000",
  };
  function cr(T, hS, hT) {
    var e = T.bds;
    if (!e) {
      return false;
    }
    var i = T.tracer;
    var hW;
    if (i) {
      if (!cU[i]) {
        hW = i.toString(2);
        if (hW.length < 8) {
          hW = new Array(8 - hW.length + 1).join("0") + hW;
        }
        cU[i] = hW;
      }
      hW = cU[i];
      var hV = dj.mapZoomStartZoomMapping[hS];
      return hW[hS - hV] === "1";
    }
    var hU = T.displayRange;
    if (hT >= hU[0] && hT <= hU[1]) {
      return true;
    }
    return false;
  }
  function dk(i, e) {
    this.map = i.map;
    this.layer = i;
    e = e || [];
    this.allLabels = [];
    this._spotData = [];
    this._strategyInfo = null;
    this.RANK1 = 1000000;
    this.RANK2 = 2000000;
    this.RANK3 = 3000000;
    this.RANK4 = 4000000;
    this.RANK5 = 5000000;
    this._ratio = a7();
    this._useRound = true;
    this._sharpenRender = false;
    if (this._ratio > c9.HIGH_RES_MIN_RATIO) {
      this._useRound = false;
      this._sharpenRender = true;
    }
    this._mapIsMoving = false;
    this._onMapIdleCallback = e.onMapIdleCallback;
    this.map.temp.isPermitSpotOver = true;
    this.currentSelectedLabel = null;
    this.map._labelProcessor = this;
    this.iconCache = {};
    this.fixedLabelData = [];
    this.lineLabelData = [];
    this.highlightLabelData = [];
    this._iconLoadTimer = null;
    this._labelTextCanvas = null;
    if (this.map.config.textRenderType === "canvas") {
      this._labelTextCanvas = this.map.tileMgr.getLabelTextCanvas();
    }
    this.bind();
  }
  D.extend(dk.prototype, {
    bind: function() {
      var T = this.map;
      var i = this;
      T.addEventListener("mapstatusbusy_inner", function(hS) {
        i._mapIsMoving = true;
        if (i._ratio > c9.HIGH_RES_MIN_RATIO) {
          i._sharpenRender = false;
        } else {
          i._useRound = false;
        }
      });
      T.addEventListener("mapstatusidle_inner", function(hS) {
        if (i._ratio > c9.HIGH_RES_MIN_RATIO) {
          i._sharpenRender = true;
        } else {
          i._useRound = true;
        }
        i._mapIsMoving = false;
      });
      T.addEventListener("onspotmouseover", function(hU) {
        if (!this.temp.isPermitSpotOver) {
          return;
        }
        if (hU.spots.length > 0) {
          var hT = hU.spots[0].userdata.uid;
          var hV = hU.spots[0].userdata.tilePosStr;
          var hS = i.getLabelByUid(hT, hV);
          hS && hS.formatedData && i._toHighlightColor(hS.formatedData);
        }
      });
      T.addEventListener("onspotmouseout", function(hU) {
        if (!this.temp.isPermitSpotOver) {
          return;
        }
        if (hU.spots.length > 0) {
          var hT = hU.spots[0].userdata.uid;
          var hV = hU.spots[0].userdata.tilePosStr;
          var hS = i.getLabelByUid(hT, hV);
          hS && hS.formatedData && i._toDefaultColor(hS.formatedData);
        }
      });
      T.addEventListener("spotclick", function(hU) {
        if (hU.spots && hU.spots.length > 0) {
          if (hU.spots[0].userdata.zoom < 10) {
            return;
          }
          var hT = hU.spots[0].userdata.uid;
          var hV = hU.spots[0].userdata.tilePosStr;
          if (
            i.currentSelectedLabel &&
            (i.currentSelectedLabel.uid !== hT ||
              i.currentSelectedLabel.tilePosStr !== hV)
          ) {
            i._recoverNormalState();
          }
          var hS = i.getLabelByUid(hT, hV);
          hS && i._changeBaseMapState(hS);
        } else {
          i._recoverNormalState();
        }
      });
      T.on("spot_status_reset", function() {
        i._recoverNormalState();
      });
      T.on("spot_highlight", function(hT) {
        var hS = i.getLabelByUid(hT.uid, hT.tilePosStr);
        hS && hS.formatedData && i._toHighlightColor(hS.formatedData);
      });
      T.addEventListener("mousemove", function(hS) {
        if (i.curSpotAdded) {
          return;
        }
        if (this.currentOperation !== dV.idle || i._mapIsMoving === true) {
          return;
        }
        i._refreshSpotData();
        this.temp.isPermitSpotOver = true;
        i.curSpotAdded = true;
      });
      if (f6()) {
        function e() {
          i._refreshSpotData();
        }
        T.addEventListener("mapstatusidle_inner", e);
      }
      T.on("style_loaded", function() {
        if (i.map.config.textRenderType === "canvas" && !i._labelTextCanvas) {
          i._labelTextCanvas = i.map.tileMgr.getLabelTextCanvas();
        }
      });
    },
    getLabelByUid: function(hV, hW) {
      var e = this.map._featureMgr.getResult().tileLabels;
      for (var hU = 0; hU < e.length; hU++) {
        var T = e[hU].fixedLabel;
        for (var hT = 0; hT < T.length; hT++) {
          if (
            e[hU].fixedLabel[hT].guid === hV &&
            e[hU].fixedLabel[hT].tilePosStr === hW
          ) {
            return e[hU].fixedLabel[hT];
          }
        }
        var hS = e[hU].indoorLabel;
        for (var hT = 0; hT < hS.length; hT++) {
          if (
            e[hU].indoorLabel[hT].guid === hV &&
            e[hU].indoorLabel[hT].tilePosStr === hW
          ) {
            return e[hU].indoorLabel[hT];
          }
        }
      }
      return null;
    },
    getTileByLabelUid: function(hV) {
      var e = this.map._featureMgr.getResult().tileLabels;
      for (var hU = 0; hU < e.length; hU++) {
        var T = e[hU].fixedLabel;
        for (var hT = 0; hT < T.length; hT++) {
          if (e[hU].fixedLabel[hT].guid === hV) {
            return e[hU];
          }
        }
        var hS = e[hU].indoorLabel;
        for (var hT = 0; hT < hS.length; hT++) {
          if (e[hU].indoorLabel[hT].guid === hV) {
            return e[hU];
          }
        }
      }
      return null;
    },
    _toHighlightColor: function(T) {
      if (T.tempRank && T.tempRank === this.RANK5) {
        return;
      }
      var e = this.map._featureMgr.getResult().eleData[4] || [];
      var hT = false;
      for (var hS = 0; hS < e.length; hS++) {
        if (
          e[hS] === T ||
          (e[hS].guid === T.guid &&
            e[hS].tilePosStr === T.tilePosStr &&
            e[hS].zoom === T.zoom)
        ) {
          hT = true;
          break;
        }
      }
      if (hT) {
        return;
      }
      e.push(T);
      this.map._featureMgr.setOverlayData(e, 4);
      this.map.dispatchEvent(new bc("onrefresh"));
    },
    _toDefaultColor: function(T) {
      if (T.tempRank && T.tempRank === this.RANK5) {
        return;
      }
      var e = this.map._featureMgr.getResult().eleData[4] || [];
      for (var hS = 0; hS < e.length; hS++) {
        if (
          T === e[hS] ||
          (T.guid === e[hS].guid &&
            T.tilePosStr === e[hS].tilePosStr &&
            T.zoom === e[hS].zoom)
        ) {
          e.splice(hS, 1);
          break;
        }
      }
      this.map._featureMgr.setOverlayData(e, 4);
      this.map.dispatchEvent(new bc("onrefresh"));
    },
    _changeBaseMapState: function(i) {
      var hT = i.guid;
      var hX = i.formatedData.guidExt;
      var hZ = { guid: hT, tilePosStr: i.tilePosStr, guidExt: hX };
      this._strategyInfo = hZ;
      this.currentSelectedLabel = i;
      var hS = this.map._featureMgr;
      var e = hS.getLabelData();
      e = this.collisionTest(e);
      this.updateLabels(e);
      var h0 = this.fixDataFormat(e);
      hS.setOverlayData(h0[0], 2);
      hS.setOverlayData(h0[1], 3);
      hS.setOverlayData(h0[2], 4);
      var T = this.getTileByLabelUid(hT);
      this.currentSelectedLabel.tileInfo = T.tileInfo;
      var hY = T.tileInfo.zoom;
      var hW = this.layer.tileCache.getAllData();
      for (var hV in hW) {
        var hU = hW[hV].data;
        if (!hU.label) {
          continue;
        }
        this.clearCollisionCache(hU.label);
      }
      this.map.dispatchEvent(new bc("onrefresh"));
    },
    _recoverNormalState: function() {
      this._strategyInfo = null;
      var hW = false;
      var hU = this.map._featureMgr.getLabelData();
      if (this.currentSelectedLabel) {
        var T = this.currentSelectedLabel.guid;
        this.clearCollisionCache(this.getTileByLabelUid(T));
        var hT = this.layer.tileCache.getAllData();
        for (var hS in hT) {
          var hV = hT[hS].data;
          if (!hV.label) {
            continue;
          }
          this.clearCollisionCache(hV.label);
        }
        this.currentSelectedLabel.tempRank = null;
        this.currentSelectedLabel = null;
        hW = true;
      }
      hU = this.collisionTest(hU);
      this.updateLabels(hU);
      var e = this.fixDataFormat(hU);
      var i = this.map._featureMgr;
      i.setOverlayData(e[0], 2);
      i.setOverlayData(e[1], 3);
      i.setOverlayData([], 4);
      this.map.dispatchEvent(new bc("onrefresh"));
      if (hW) {
        this.curSpotAdded = false;
        this._refreshSpotData();
      }
    },
    loadIconImages: function(hT, h4) {
      var hW = hT.label;
      var hU = hT.tileInfo.style;
      var T = hW.fixedLabel;
      var h1 = hW.indoorLabel;
      var h5 = T.length + h1.length;
      var hY = this;
      var hS = 0;
      var h3 = 200;
      for (var hV = 0; hV < h5; hV++) {
        var hX;
        if (hV < T.length) {
          hX = T[hV];
        } else {
          hX = h1[hV - T.length];
        }
        if (!hX.iconPos) {
          continue;
        }
        var h0 = hX.iconPos.iconType;
        var h2 = hU + "_" + h0;
        hS++;
        if (this.iconCache[h2]) {
          if (this.iconCache[h2].loaded) {
            h4(hT);
          }
          continue;
        }
        var hZ = new Image();
        hZ.id = h2;
        hZ.crossOrigin = "anonymous";
        hZ.onload = function() {
          hY.iconCache[this.id].loaded = true;
          hY._addToIconTexture(this);
          if (hY._iconLoadTimer === null) {
            hY._iconLoadTimer = setTimeout(function() {
              h4();
              hY._iconLoadTimer = null;
            }, h3);
          }
          this.onload = null;
        };
        hZ.onerror = function() {
          if (!hY._iconLoadTimer) {
            hY._iconLoadTimer = setTimeout(function() {
              h4();
              hY._iconLoadTimer = null;
            }, h3);
          }
          hY.iconCache[this.id] = null;
          this.onerror = null;
        };
        var e = e4.getIconSetPath(this.map.config.style) + h0 + ".png";
        hZ.src = e;
        this.iconCache[h2] = { loaded: false, image: hZ };
      }
      return hS;
    },
    _addToIconTexture: function(hU) {
      if (!this.map._webglMapScene) {
        return;
      }
      var hW = this.map._webglMapScene._painter;
      var e = hW._iconTextureAtlas.addTexture(hU);
      hW._iconTextureAtlasOffset[hU.id] = e;
      var hZ = (0 * hU.width) / 1024 + e.width;
      var hT = (0 * hU.height) / 1024 + e.height;
      var hY = hU.width / 1024 + e.width;
      var hS = hT;
      var hX = hY;
      var T = hU.height / 1024 + e.height;
      var hV = hZ;
      var i = T;
      hW._iconTextureAtlasCoords[hU.id] = [
        hZ,
        hT,
        hY,
        hS,
        hX,
        T,
        hZ,
        hT,
        hX,
        T,
        hV,
        i,
      ];
    },
    loadImgByStr: function(hS, hT, hU) {
      if (!hS && !hT) {
        hU && hU(null, null);
        return;
      }
      if (typeof hS === "object" && typeof hT === "object") {
        hU(hS, hT);
        return;
      }
      var i = 0;
      var T = null;
      var e = null;
      if (hS) {
        i++;
        T = new Image();
        T.onload = function() {
          i--;
          if (i === 0) {
            hU && hU(this, e);
          }
          this.onload = null;
        };
        T.src = hS;
      }
      if (hT) {
        i++;
        e = new Image();
        e.onload = function() {
          i--;
          if (i === 0) {
            hU && hU(T, this);
          }
          this.onload = null;
        };
        e.src = hT;
      }
    },
    collisionTest: function(hZ, iF, ii) {
      if (this.map.viewAnimationTime) {
        return [];
      }
      if (!hZ) {
        return [];
      }
      var h9 = this.map;
      var iq = h9.getHeading();
      iq = this.calcLoopHeading(iq);
      var iA = h9.height;
      var iw = this.allLabels;
      iw.length = 0;
      hZ.sort(function(iH, i) {
        var iJ = iH.tileInfo;
        var iI = i.tileInfo;
        if (iJ.col * iJ.row < iI.col * iI.row) {
          return -1;
        } else {
          return 1;
        }
      });
      var h0 = hZ.labelZoom;
      var ia = h9.getTilt();
      var h2 = h9.getZoom();
      var iv;
      if (ii) {
        iv = ii;
      } else {
        iv = this.getZoomStep();
      }
      for (var iD = 0, iB = hZ.length; iD < iB; iD++) {
        var id = hZ[iD];
        var hX = id.tileInfo;
        var hU = hX.zoom;
        var iu = hX.loopOffsetX / Math.pow(2, 18 - hU);
        if (!iq && !ia) {
          if (id.unnecessaryCollisionTest && id.unnecessaryCollisionTest[ii]) {
            continue;
          }
        }
        var il = id.fixedLabel || [];
        for (var iC = 0, ig = il.length; iC < ig; iC++) {
          var hV = il[iC];
          hV.zoom = hU;
          if (iF === -1 && hV.isDel) {
            continue;
          }
          if (!cr(hV, hX.useZoom, h2)) {
            hV.isDel = true;
            continue;
          }
          this.calcCollisionBounds(hV, iv, iu, iA);
          iw.push(hV);
        }
        var ik = id.indoorLabel || [];
        for (var iC = 0, ig = ik.length; iC < ig; iC++) {
          var hV = ik[iC];
          hV.zoom = hU;
          if (iF === -1 && hV.isDel) {
            continue;
          }
          if (!cr(hV, hX.useZoom)) {
            hV.isDel = true;
            continue;
          }
          this.calcCollisionBounds(hV, iv, iu, iA);
          iw.push(hV);
        }
        var hW = id.lineLabel || [];
        for (var iC = 0, ig = hW.length; iC < ig; iC++) {
          var hV = hW[iC];
          if (iF === -1 && hV.isDel) {
            continue;
          }
          if (!cr(hV, hX.useZoom)) {
            hV.isDel = true;
            continue;
          }
          var iG = hV.pt;
          var ih = h9.pointToPixelIn(iG, {
            zoom: iv,
            useRound: this._useRound,
          });
          var ie = ih.x + iu;
          var ic = iA - ih.y;
          var ij = hV.bds;
          var iz = ij[0];
          var ix = ij[1];
          var h7 = ij[2];
          var h6 = ij[3];
          var ir = iz;
          var ip = ix;
          var h5 = h7;
          var h4 = h6;
          if ((iq >= 0 && iq < 45) || (iq >= 315 && iq < 360)) {
            ir = iz;
            ip = ix;
            h5 = h7;
            h4 = h6;
          } else {
            if (iq >= 45 && iq < 135) {
              ir = ix;
              ip = -h7;
              h5 = h6;
              h4 = -iz;
            } else {
              if (iq >= 135 && iq < 225) {
                ir = -h7;
                ip = -h6;
                h5 = -iz;
                h4 = -ix;
              } else {
                if (iq >= 225 && iq < 315) {
                  ir = -h6;
                  ip = iz;
                  h5 = -ix;
                  h4 = h7;
                }
              }
            }
          }
          hV._tempBds = [ie + ir, ic + ip, ie + h5, ic + h4];
          var hY = h9.pixelToPointIn(new ek(hV._tempBds[0], ih.y + ip), {
            zoom: iv,
          });
          var hS = h9.pixelToPointIn(new ek(hV._tempBds[2], ih.y + h4), {
            zoom: iv,
          });
          hV._mcBds = [hY, hS];
          iw.push(hV);
        }
      }
      var it = this._strategyInfo;
      if (it) {
        var h3 = it.guid;
        var ib = it.guidExt;
        var T = false;
        for (var iD = 0, iB = iw.length; iD < iB; iD++) {
          var iy = iw[iD];
          delete iy.tempRank;
          if (!this.layer.isClickableLabel(iy) || (ib === 1 && !iy.guidExt)) {
            continue;
          }
          if (h3 === iy.guid && it.tilePosStr === iy.tilePosStr) {
            iy.tempRank = this.RANK5;
            T = true;
          }
        }
        if (!T && this.currentSelectedLabel) {
          this.currentSelectedLabel.tempRank = this.RANK5;
          var hX = this.currentSelectedLabel.tileInfo;
          var hU = hX.zoom;
          var iu = hX.loopOffsetX / Math.pow(2, 18 - hU);
          this.calcCollisionBounds(this.currentSelectedLabel, iv, iu, iA);
          iw.push(this.currentSelectedLabel);
        }
      } else {
        for (var iD = 0, iB = iw.length; iD < iB; iD++) {
          var iy = iw[iD];
          if (iy.type === "line" || !iy.iconPos) {
            continue;
          }
          delete iy.tempRank;
        }
      }
      iw.sort(function(iI, iH) {
        var iJ = iI.tempRank ? iI.tempRank : iI.rank;
        var i = iH.tempRank ? iH.tempRank : iH.rank;
        return (
          i - iJ ||
          iI.startZoom - iH.startZoom ||
          iH.pt.lng - iI.pt.lng ||
          iH.pt.lat - iI.pt.lat
        );
      });
      var hT = 0;
      if (ia > 0) {
        hT = 6;
      }
      var h2 = h9.getZoom();
      if (h2 >= 8 && h2 < 9) {
        h2 < 8.5 ? (hT = 6) : (hT = 3);
      }
      if (h9._displayOptions.labelMargin > 0) {
        hT = h9._displayOptions.labelMargin;
      }
      var e = 2;
      if (h2 < 6 && h2 >= 5) {
        e = -1;
      }
      for (var iD = 0, iB = iw.length; iD < iB; iD++) {
        var io = iw[iD];
        var h1 = io._tempBds;
        io.isDel = false;
        io._intersectIdx = [];
        for (iC = iD + 1; iC < iB; iC++) {
          var h8 = iw[iC];
          var iE = h8._tempBds;
          if (
            !(
              h1[2] + hT + e < iE[0] - hT ||
              h1[0] - hT > iE[2] + hT + e ||
              h1[3] + hT + e < iE[1] - hT ||
              h1[1] - hT > iE[3] + hT + e
            )
          ) {
            io._intersectIdx.push(iC);
          }
        }
      }
      for (var iD = 0, iB = iw.length; iD < iB; iD++) {
        var iy = iw[iD];
        if (iy.isDel === false) {
          var im = iy._intersectIdx;
          for (var iC = 0, ig = im.length; iC < ig; iC++) {
            iw[im[iC]].isDel = true;
          }
        }
      }
      return hZ;
    },
    calcCollisionBounds: function(hY, hW, i, hX) {
      var hU = hY.ptFix;
      var hS = this.map;
      var hT = hS.pointToPixelIn(hU, { zoom: hW, useRound: this._useRound });
      var T = hT.x + i;
      var h0 = hX - hT.y;
      var e = hY.bds;
      hY._tempBds = [T + e[0], h0 + e[1], T + e[2], h0 + e[3]];
      var hV = hS.pixelToPointIn(new ek(hY._tempBds[0], hT.y + e[1]), {
        zoom: hW,
      });
      var hZ = hS.pixelToPointIn(new ek(hY._tempBds[2], hT.y + e[3]), {
        zoom: hW,
      });
      hY._mcBds = [hV, hZ];
    },
    getZoomStep: function() {
      var T = this.map.getZoom();
      var e = Math.floor(T);
      var i = T - e >= 0.5 ? e + 0.5 : e;
      return i;
    },
    clearCollisionCache: function(e) {
      if (!e) {
        return;
      }
      e.cacheState = null;
      e.unnecessaryCollisionTest = null;
    },
    getCachedLabels: function(e) {
      e = e || [];
      var T = this.getZoomStep();
      var hT = [];
      var hV = false;
      for (var hS = 0; hS < e.length; hS++) {
        var hU = e[hS];
        if (!hU.cacheState || !hU.cacheState[T]) {
          hV = true;
          break;
        }
        if (hU.hasNewData) {
          hV = true;
          break;
        }
      }
      if (hV) {
        this.calcLabelsCollision(e);
      }
      return e;
    },
    calcLabelsCollision: function(T) {
      var hT = this.getZoomStep();
      var hU = {};
      var hX;
      var hS;
      T = this.collisionTest(T, undefined, hT);
      bK.addLabelIntoAreaSpots(T);
      for (var hW = 0; hW < T.length; hW++) {
        hX = T[hW];
        hS = hX.tileInfo;
        var h1 = hS.col + "," + hS.row;
        hU[h1] = 1;
      }
      var e = {};
      for (var hW = 0; hW < T.length; hW++) {
        hX = T[hW];
        if (!hX.cacheState) {
          hX.cacheState = {};
        }
        hS = hX.tileInfo;
        var h0 = hS.col;
        var hY = hS.row;
        h1 = h0 + "," + hY;
        if (hX.cacheState[hT] === "stable") {
          e[h1] = 1;
          if (!hX.hasNewData) {
            continue;
          }
        }
        for (var hV = 0; hV < hX.fixedLabel.length; hV++) {
          var hZ = hX.fixedLabel[hV];
          if (!hZ.cachedIsDel) {
            hZ.cachedIsDel = {};
          }
          hZ.cachedIsDel[hT] = hZ.isDel;
        }
        for (var hV = 0; hV < hX.indoorLabel.length; hV++) {
          var hZ = hX.indoorLabel[hV];
          if (!hZ.cachedIsDel) {
            hZ.cachedIsDel = {};
          }
          hZ.cachedIsDel[hT] = hZ.isDel;
        }
        for (var hV = 0; hV < hX.lineLabel.length; hV++) {
          var hZ = hX.lineLabel[hV];
          if (!hZ.cachedIsDel) {
            hZ.cachedIsDel = {};
          }
          hZ.cachedIsDel[hT] = hZ.isDel;
        }
        if (
          hU[h0 - 1 + "," + (hY - 1)] &&
          hU[h0 - 1 + "," + hY] &&
          hU[h0 - 1 + "," + (hY + 1)] &&
          hU[h0 + "," + (hY - 1)] &&
          hU[h0 + "," + (hY + 1)] &&
          hU[h0 + 1 + "," + (hY - 1)] &&
          hU[h0 + 1 + "," + hY] &&
          hU[h0 + 1 + "," + (hY + 1)]
        ) {
          hX.cacheState[hT] = "stable";
          e[h1] = 1;
        } else {
          if (!hX.cacheState[hT]) {
            hX.cacheState[hT] = "unstable";
          }
        }
      }
      for (var hW = 0; hW < T.length; hW++) {
        var hX = T[hW];
        hS = hX.tileInfo;
        var h1 = hS.col + "," + hS.row;
        var h0 = +hS.col;
        var hY = +hS.row;
        if (
          e[h0 - 1 + "," + (hY - 1)] &&
          e[h0 - 1 + "," + hY] &&
          e[h0 - 1 + "," + (hY + 1)] &&
          e[h0 + "," + (hY - 1)] &&
          e[h0 + "," + (hY + 1)] &&
          e[h0 + 1 + "," + (hY - 1)] &&
          e[h0 + 1 + "," + hY] &&
          e[h0 + 1 + "," + (hY + 1)]
        ) {
          if (!hX.unnecessaryCollisionTest) {
            hX.unnecessaryCollisionTest = {};
          }
          hX.unnecessaryCollisionTest[hT] = 1;
        }
      }
      T.hasNewData = false;
    },
    updateLabels: function(hS) {
      var e = this.map;
      var hY = e.getZoom();
      var h0 = e.getHeading();
      h0 = this.calcLoopHeading(h0);
      var hZ = e.getTilt();
      var hT = this.getZoomStep();
      for (var hX = 0, hU = hS.length; hX < hU; hX++) {
        var hW = hS[hX];
        var T = hW.tileInfo;
        var hV = T.loopOffsetX || 0;
        this.updateFixedLabel(hW.fixedLabel, hZ, h0, hW, hT, hY, hV);
        this.updateFixedLabel(hW.indoorLabel, hZ, h0, hW, hT, hY, 0);
        this.updateLineLabel(hW.lineLabel, hZ, h0, hW, hT);
      }
    },
    updateFixedLabel: function(hX, hZ, i, h1, hT, e, hS) {
      if (hX.length === 1) {
      }
      for (var h2 = 0, hU = hX.length; h2 < hU; h2++) {
        var hY = hX[h2];
        if (!hY.cachedIsDel) {
          continue;
        }
        if (!hZ && !i && h1.cacheState && h1.cacheState[hT]) {
          hY.isDel = hY.cachedIsDel[hT];
          if (typeof hY.isDel === "undefined") {
            hY.isDel = hY.cachedIsDel[hT] = true;
          }
        }
        if (hY.startScale > e) {
          hY.isDel = true;
        }
        if (hY.isDel) {
          continue;
        }
        var h4 = hY.pt;
        var T = hY.iconPos;
        if (T && T.texcoord) {
          if (!T.rtVertex) {
            T.rtVertex = [];
            var h6 = T.vertex;
            var hV = aG(h4.lng);
            var h3 = aG(h4.lat);
            T.rtVertex = [
              hV[0],
              h3[0],
              hV[1],
              h3[1],
              0,
              h6[0],
              h6[1],
              0,
              0,
              T.texcoord[0],
              T.texcoord[1],
              hV[0],
              h3[0],
              hV[1],
              h3[1],
              0,
              h6[2],
              h6[3],
              0,
              0,
              T.texcoord[2],
              T.texcoord[3],
              hV[0],
              h3[0],
              hV[1],
              h3[1],
              0,
              h6[4],
              h6[5],
              0,
              0,
              T.texcoord[4],
              T.texcoord[5],
              hV[0],
              h3[0],
              hV[1],
              h3[1],
              0,
              h6[6],
              h6[7],
              0,
              0,
              T.texcoord[6],
              T.texcoord[7],
              hV[0],
              h3[0],
              hV[1],
              h3[1],
              0,
              h6[8],
              h6[9],
              0,
              0,
              T.texcoord[8],
              T.texcoord[9],
              hV[0],
              h3[0],
              hV[1],
              h3[1],
              0,
              h6[10],
              h6[11],
              0,
              0,
              T.texcoord[10],
              T.texcoord[11],
            ];
          }
        }
        var h5 = hY.textPos;
        if (h5) {
          if (!h5.rtVertex) {
            h5.rtVertex = [];
            var h6 = h5.vertex;
            var hW = h5.rtVertex;
            var hV = aG(h4.lng);
            var h3 = aG(h4.lat);
            var h8 = aG(hS);
            for (var h0 = 0, h7 = h6.length; h0 < h7; h0 += 12) {
              hW.push(
                hV[0],
                h3[0],
                hV[1],
                h3[1],
                0,
                h6[h0],
                h6[h0 + 1],
                h8[0],
                h8[1],
                h5.texcoord[0],
                h5.texcoord[1]
              );
              hW.push(
                hV[0],
                h3[0],
                hV[1],
                h3[1],
                0,
                h6[h0 + 2],
                h6[h0 + 3],
                h8[0],
                h8[1],
                h5.texcoord[2],
                h5.texcoord[3]
              );
              hW.push(
                hV[0],
                h3[0],
                hV[1],
                h3[1],
                0,
                h6[h0 + 4],
                h6[h0 + 5],
                h8[0],
                h8[1],
                h5.texcoord[4],
                h5.texcoord[5]
              );
              hW.push(
                hV[0],
                h3[0],
                hV[1],
                h3[1],
                0,
                h6[h0 + 6],
                h6[h0 + 7],
                h8[0],
                h8[1],
                h5.texcoord[6],
                h5.texcoord[7]
              );
              hW.push(
                hV[0],
                h3[0],
                hV[1],
                h3[1],
                0,
                h6[h0 + 8],
                h6[h0 + 9],
                h8[0],
                h8[1],
                h5.texcoord[8],
                h5.texcoord[9]
              );
              hW.push(
                hV[0],
                h3[0],
                hV[1],
                h3[1],
                0,
                h6[h0 + 10],
                h6[h0 + 11],
                h8[0],
                h8[1],
                h5.texcoord[10],
                h5.texcoord[11]
              );
            }
          }
        }
      }
    },
    updateLineLabel: function(hX, iu, ii, ic, id) {
      hX = hX || [];
      var h7 = this.map;
      var h0 = h7.getZoomUnits();
      for (var it = 0, iq = hX.length; it < iq; it++) {
        var hW = hX[it];
        if (!hW.cachedIsDel) {
          continue;
        }
        if (!iu && !ii && ic.cacheState && ic.cacheState[id]) {
          hW.isDel = hW.cachedIsDel[id];
          if (typeof hW.isDel === "undefined") {
            hW.isDel = hW.cachedIsDel[id] = true;
          }
        }
        if (hW.isDel) {
          continue;
        }
        if (!hW.styleText || hW.styleText.length === 0) {
          continue;
        }
        var hY = hW.mcInTile;
        var il = hY.x;
        var ij = hY.y;
        var ib = hW.wordsInfo;
        var h9 = hW.labelAngle;
        var h5 = false;
        var ik = 0;
        if (ii !== 0) {
          var h6 = ib[0].angle;
          var ip = this.calcLoopHeading(h6 - ii);
          var h3 = this.calcLoopHeading(h9 - ii);
          if (ip > 45 && ip < 315) {
            if (ip > 45 && ip <= 135) {
              ik = 270;
            } else {
              if (ip > 135 && ip <= 225) {
                ik = 180;
              } else {
                if (ip > 225 && ip < 315) {
                  ik = 90;
                }
              }
            }
            if (h9 > 225 && h9 <= 315 && ik <= 180) {
              h5 = true;
            } else {
              if (
                ((h9 >= 0 && h9 <= 45) || (h9 >= 315 && h9 < 360)) &&
                ik >= 180
              ) {
                h5 = true;
              }
            }
          }
        }
        for (var ir = 0, h1 = ib.length; ir < h1; ir++) {
          var io = ib[ir];
          var h4 = io.calcInfo;
          var ih = io.offset[0];
          var ie = io.offset[1];
          if (!io.size) {
            continue;
          }
          var e = io.size[0];
          var T = io.size[1];
          var h2 = io.angle;
          if (!h4) {
            h4 = {};
          }
          if (ii !== h4.mapHeading || h0 !== h4.zoomUnits) {
            h4.mapHeading = ii;
            h4.zoomUnits = h0;
            if (h5) {
              var h8 = ib[h1 - 1 - ir];
              ih = h8.offset[0];
              ie = h8.offset[1];
              h2 = h8.angle;
            }
            var hT = il + ih * h0;
            var hS = ij + ie * h0;
            h4.rotationCenter = { lng: hT, lat: hS };
            h4.calcHeading = ik;
            h4.angle = h2;
            h4.offsetX = ih;
            h4.offsetY = ie;
            io.calcInfo = h4;
          }
          if (!io.rtVertex) {
            io.rtVertex = [];
          }
          io.rtVertex.length = 0;
          var ia = h4.calcHeading + h4.angle;
          var hU = h4.rotationCenter;
          ih = h4.offsetX;
          ie = h4.offsetY;
          var hV = Math.round(ih - e / 2);
          var im = Math.round(ih + e / 2);
          var ig = Math.round(ie + T / 2);
          var hZ = Math.round(ie - T / 2);
          io.rtVertex.push(
            il,
            ij,
            io.z,
            hV,
            hZ,
            hU.lng,
            hU.lat,
            ia,
            io.texcoord[0],
            io.texcoord[1],
            il,
            ij,
            io.z,
            im,
            hZ,
            hU.lng,
            hU.lat,
            ia,
            io.texcoord[2],
            io.texcoord[3],
            il,
            ij,
            io.z,
            im,
            ig,
            hU.lng,
            hU.lat,
            ia,
            io.texcoord[4],
            io.texcoord[5],
            il,
            ij,
            io.z,
            hV,
            hZ,
            hU.lng,
            hU.lat,
            ia,
            io.texcoord[6],
            io.texcoord[7],
            il,
            ij,
            io.z,
            im,
            ig,
            hU.lng,
            hU.lat,
            ia,
            io.texcoord[8],
            io.texcoord[9],
            il,
            ij,
            io.z,
            hV,
            ig,
            hU.lng,
            hU.lat,
            ia,
            io.texcoord[10],
            io.texcoord[11]
          );
        }
      }
    },
    calcLoopHeading: function(e) {
      while (e >= 360) {
        e -= 360;
      }
      while (e < 0) {
        e += 360;
      }
      return e;
    },
    fixDataFormat: function(h0) {
      var hS = this.fixedLabelData;
      var e = this.lineLabelData;
      var T = this.highlightLabelData;
      var h7 = 0;
      var hW = 0;
      var h5 = 0;
      var h6;
      if (this.currentSelectedLabel) {
        var hV = this.getLabelByUid(
          this.currentSelectedLabel.guid,
          this.currentSelectedLabel.tilePosStr
        );
        if (!hV || hV.isDel) {
          hS[h7] = this.currentSelectedLabel.formatedData;
          h7++;
          T[h5] = this.currentSelectedLabel.formatedData;
          h5++;
        }
      }
      for (var h4 = 0; h4 < h0.length; h4++) {
        var hY = h0[h4];
        var hX = hY.fixedLabel;
        var hT = hY.indoorLabel;
        var h3 = hY.lineLabel;
        h6 = this.fixFixedLabelDataFormat(hX, hY, hS, h7, T, h5);
        h7 = h6[0];
        h5 = h6[1];
        h6 = this.fixFixedLabelDataFormat(hT, hY, hS, h7, T, h5, true);
        h7 = h6[0];
        h5 = h6[1];
        e[hW] = { tileInfo: hY.tileInfo, lineLabels: [] };
        for (var h2 = 0; h2 < h3.length; h2++) {
          if (h3[h2].isDel) {
            continue;
          }
          var hZ = h3[h2].wordsInfo;
          if (hZ) {
            for (var h1 = 0; h1 < hZ.length; h1++) {
              if (!hZ[h1].rtVertex) {
                continue;
              }
              var hU = hZ[h1].formatedData;
              if (!hU) {
                hU = {
                  textureSource: hY.textureSources[h3[h2].processedInZoom],
                  textureHeight: hY.textureHeights[h3[h2].processedInZoom],
                  renderData: {
                    vertex: hZ[h1].rtVertex,
                    textureCoord: hZ[h1].texcoord,
                  },
                };
                hZ[h1].formatedData = hU;
              }
              e[hW].lineLabels.push(hU);
            }
          }
        }
        hW++;
      }
      hS.length = h7;
      e.length = hW;
      T.length = h5;
      return [e, hS, T];
    },
    fixFixedLabelDataFormat: function(hV, hY, hZ, hW, hT, e, hX) {
      for (var i = 0; i < hV.length; i++) {
        if (hV[i].isDel) {
          continue;
        }
        var hU = hV[i].textPos;
        var hS = hV[i].iconPos;
        var T = null;
        if (hU && hU.rtVertex) {
          if (!hV[i].formatedData) {
            T = {
              guid: hV[i].guid,
              guidExt: hV[i].guidExt,
              tilePosStr: hV[i].tilePosStr,
              zoom: hV[i].zoom,
              tempRank: hV[i].tempRank,
              textureSource: hY.textureSources[hV[i].processedInZoom],
              textureHeight: hY.textureHeights[hV[i].processedInZoom],
              renderData: { vertex: hU.rtVertex, textureCoord: hU.texcoord },
            };
            if (hX && hV[i].onDefaultFloor === false) {
              T.textureSource = hY.indoorTextureSources[hV[i].processedInZoom];
              T.textureHeight = hY.indoorTextureHeights[hV[i].processedInZoom];
            }
            hV[i].formatedData = T;
          } else {
            T = hV[i].formatedData;
            T.tempRank = hV[i].tempRank;
          }
          if (
            this.currentSelectedLabel &&
            T.guid === this.currentSelectedLabel.guid &&
            T.tilePosStr === this.currentSelectedLabel.tilePosStr
          ) {
            hT[e] = T;
            e++;
          }
        }
        if (hS && hS.rtVertex) {
          if (T) {
            if (!T.iconRenderData) {
              T.iconRenderData = {
                vertex: hS.rtVertex,
                textureCoord: hS.texcoord,
              };
            }
          } else {
            T = {
              guid: hV[i].guid,
              guidExt: hV[i].guidExt,
              zoom: hV[i].zoom,
              tempRank: hV[i].tempRank,
              iconRenderData: {
                vertex: hS.rtVertex,
                textureCoord: hS.texcoord,
              },
            };
            hV[i].formatedData = T;
          }
        }
        hZ[hW] = T;
        hW++;
      }
      return [hW, e];
    },
    _refreshSpotData: function() {
      this._spotData.length = 0;
      var hX = this.map;
      var hV = Math.floor(hX.getZoom());
      var T = this.map._featureMgr.getLabelData();
      if (T) {
        for (var hT = 0, hS = T.length; hT < hS; hT++) {
          this._addFixedSpotData(T[hT].fixedLabel, hV);
          this._addFixedSpotData(T[hT].indoorLabel, hV);
        }
      }
      var hY = this.currentSelectedLabel;
      if (hY && !this.getTileByLabelUid(hY.guid, hY.tilePosStr)) {
        var hU = this._getSpotDataFromLabel(this.currentSelectedLabel);
        if (hU) {
          this._spotData.push(hU);
        }
      }
      var hW = new bc("onspotsdataready");
      hW.spots = this._spotData;
      hX._spotDataOnCanvas = this._spotData;
      hX.dispatchEvent(hW);
    },
    _addFixedSpotData: function(hT, hS) {
      for (var e = 0; e < hT.length; e++) {
        var T = hT[e];
        if (
          !this.layer.isClickableLabel(T) ||
          (T.guidExt === 1 && T.startScale > hS)
        ) {
          continue;
        }
        var i = hT[e].spot || this._getSpotDataFromLabel(hT[e]);
        if (i) {
          this._spotData.push(i);
        }
      }
    },
    _getSpotDataFromLabel: function(T) {
      var hU = this.map;
      if (!T.bds) {
        return null;
      }
      var e = T.bds.slice(0);
      var hS = null;
      if (T.iconPos) {
        hS = new ht(T.pt.lng, T.pt.lat);
      }
      var i = T.name ? T.name.replace("\\\\", "<br>") : "";
      if (
        T.iconPos &&
        T.iconPos.iconType.indexOf("ditie") > -1 &&
        hU.getZoom() > 14
      ) {
        i = "";
      }
      var hT = {
        n: i,
        pt: new ht(T.pt.lng, T.pt.lat),
        userdata: {
          iconPoint: hS,
          uid: T.guid,
          name: i,
          mapPoi: true,
          type: T.iconPos ? T.iconPos.iconType : "",
          rank: T.rank,
          zoom: T.zoom,
          tilePosStr: T.tilePosStr,
        },
        bd: e,
        tag: "MAP_SPOT_INFO",
      };
      T.spot = hT;
      return hT;
    },
    drawLabelsOnCanvas: function(i, e) {
      if (this._labelTextCanvas) {
        this._labelTextCanvas.drawLabelsOnCanvas(i, e);
      }
    },
  });
  function fU(e) {
    this._map = e;
    this.virtualTile = {
      custom: true,
      label: {
        fixedLabel: [],
        indoorLabel: [],
        lineLabel: [],
        textureHeights: [],
        status: "ready",
      },
      tileInfo: { col: 0, row: 0, zoom: 0, useZoom: 0, loopOffsetX: 0 },
      status: "ready",
    };
    this.virtualTile.label.tileInfo = this.virtualTile.tileInfo;
    this.init();
  }
  fU.prototype.init = function() {
    var T = this._map;
    var i = this;
    function e() {
      i.updateLabels();
    }
    T.addEventListener("add_tile_labels", e);
    T.addEventListener("onremove_tile_labels", e);
    T.addEventListener("onclear_labels", e);
  };
  fU.prototype.updateLabels = function() {
    var i = this._map.tileMgr.getLabelTextCanvas();
    var T = this._map;
    var e = this;
    i.drawCustomLabelsOnCanvas(T._customTileLabels, function(hT) {
      var hS = e.virtualTile;
      if (hT) {
        hS.label.textureHeights[0] = [hT.height];
      }
      hS.label.fixedLabel = T._customTileLabels;
      var hU = new bc("oncustom_labels_ready");
      hU.virtualTile = hS;
      hU.labelCanvas = hT;
      hU.imgKey = bp.getGUID("custom_labels_");
      T.dispatchEvent(hU);
    });
  };
  bp.register(function(e) {
    e._customLabelMgr = new fU(e);
  });
  var aN = "\x31\x2e\x30\x2e\x32",
    aB = (function(ia, h9) {
      var h8 = {
        iaihe: function(T, e) {
          return T !== e;
        },
        eheix: "\x65\x65\x64\x78",
        exeme: "\x65\x69\x6c",
        iiahi: "\x64\x64\x65",
        ixcah: "\x6c\x68\x63",
        limdd: function(T, e) {
          return T(e);
        },
        acxim: "\x69\x64\x65",
        aeiam: function(T, e) {
          return T + e;
        },
        daxdi: function(T, e, ib) {
          return T(e, ib);
        },
        aaeha: "\x43\x68\x61\x72",
        hdlde: function(T, e) {
          return T + e;
        },
        aaxch: function(T, e) {
          return T + e;
        },
        mcccc: function(T, e) {
          return T + e;
        },
        ammdl: function(T, e) {
          return T < e;
        },
      };
      function h4(T, ig) {
        var id = "\x6c\x68\x63";
        while (h8["\x69\x61\x69\x68\x65"](id, h8["\x65\x68\x65\x69\x78"])) {
          switch (id) {
            case h8["\x65\x78\x65\x6d\x65"]:
              var e = [];
              id = h8["\x69\x69\x61\x68\x69"];
              break;
            case "\x69\x64\x65":
              return e;
            case h8["\x69\x78\x63\x61\x68"]:
              var ie = T["\x6c\x65\x6e\x67\x74\x68"];
              id = "\x65\x69\x6c";
              break;
            case "\x64\x64\x65":
              for (var ic = 0; ic < ie; ic++) {
                var ib = h8["\x6c\x69\x6d\x64\x64"](ig, T[ic]);
                e["\x70\x75\x73\x68"](ib);
              }
              id = h8["\x61\x63\x78\x69\x6d"];
              break;
          }
        }
      }
      var h7,
        h6,
        h5,
        h3,
        h2,
        h1 = decodeURIComponent,
        h0 = h8["\x61\x61\x65\x68\x61"],
        hZ = "";
      var hY = [aB];
      h7 = "\x64\x65";
      h6 = "\x66\x72";
      h5 = "\x6f";
      h2 = h8["\x68\x64\x6c\x64\x65"](
        h8["\x61\x61\x78\x63\x68"](h6, h5),
        "\x6d"
      );
      h3 = h8["\x6d\x63\x63\x63\x63"]("\x43\x6f", h7);
      var hX = function(e) {
        return (e + hZ)["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"][
          h8["\x61\x65\x69\x61\x6d"](h8["\x61\x65\x69\x61\x6d"](h2, h0), h3)
        ](e);
      };
      var hW = function(e) {
        return h8["\x64\x61\x78\x64\x69"](h4, e, function(T) {
          return hX(T);
        });
      };
      var hV = hW["\x63\x61\x6c\x6c"](hX, [
        39,
        34,
        37,
        96,
        60,
        120,
        97,
        65,
        98,
        66,
        99,
        67,
        100,
        68,
        101,
        69,
        102,
        70,
        103,
        110,
        109,
        111,
        112,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
      ]);
      var hU = h4([28782, 27702, 26416, 25167, 24183], function(e) {
        return h1(e);
      });
      var hT = hW["\x63\x61\x6c\x6c"](hU, [
          22354,
          22749,
          24415,
          23346,
          22257,
          22688,
          24306,
          25174,
          23595,
          25547,
          22984,
          25690,
          22212,
          27547,
          21594,
          27210,
          23090,
          29193,
          22394,
          29368,
          29532,
          29459,
          29530,
          24146,
          24500,
          26352,
          27441,
          28788,
          29370,
          27673,
          26925,
          25249,
          24430,
        ]),
        hS = {};
      hU = hW(hU);
      var i = new RegExp(hU["\x6a\x6f\x69\x6e"]("\x7c"));
      for (
        var h7 = 0;
        h8["\x61\x6d\x6d\x64\x6c"](h7, hV["\x6c\x65\x6e\x67\x74\x68"]);
        h7++
      ) {
        hS[hT[h7]] = hV[h7];
      }
      h9 = h4(h9["\x73\x70\x6c\x69\x74"](hZ), function(e) {
        return hS[e] || e;
      })["\x6a\x6f\x69\x6e"](hZ);
      return h4(h9["\x73\x70\x6c\x69\x74"](i), function(e) {
        return h1(e);
      });
    })(
      this,
      "\u5ef2\x69\u545a\u624f\u56c4\x69\u5ef2\u5ef2\u735c\u624f\u59c8\u735c\u56c4\u5ef2\x6c\u5e77\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\x49\u72b8\u56c4\u7313\u7313\x72\x53\x74\x79\x6c\u545a\u5e77\x6c\x68\u5ef2\u56c4\x69\u5e77\u735a\u7313\x69\x54\u545a\u58a0\x74\u624f\u58a0\u59c8\u59c8\u5ef2\u735c\u624f\u545a\x69\x6c\u706e\u58a0\u56c4\u58a0\u6c36\u735a\u7313\x73\x74\x4d\u545a\x73\x73\u5ef2\u577a\u545a\u6730\u545a\x6c\u545a\u706e\x69\u735c\u58a0\u706e\u5a32\u545a\u5ef2\x74\x75\x72\u545a\x53\x74\x79\x6c\u545a\u6730\u56c4\x68\u5ef2\u706e\u59c8\x6c\x6c\u545a\x69\u624f\x69\x69\x6c\x6c\x69\u5e77\u59c8\u5ef2\u5ef2\u5ef2\u5e77\x69\u545a\u545a\u735c\x69\u5e77\x69\u56c4\u5ef2\u5ef2\x68\u624f\u545a\u5ef2\u5ef2\x69\u5ef2\u706e\u577a\u545a\x74\x4d\u5ef2\u735a\x53\x74\x79\x6c\u545a\x49\u56c4\u706e\x6c\x6c\u5ef2\x6c\u5ef2\u706e\u59c8\u5ef2\u5ef2\u59c8\x69\u6730\x5f\u56c4\x69\x73\u735a\x6c\u5ef2\x79\x4f\u735a\x74\x69\u7313\u72b8\x73\u6730\u735a\u7313\x69\u6c36\u58a0\x68\u735c\x69\u5ef2\u706e\u59c8\x75\x73\x74\u7313\u735c\x53\x74\x79\x6c\u545a\x49\u72b8\u5a32\u7313\u706e\u545a\u545a\u5ef2\u735c\u5ef2\u706e\u5ef2\u5ef2\x68\x6c\u545a\u6c36\u545a\u545a\u5ef2\u545a\u5ef2\u5e77\u577a\u545a\x74\x49\u56c4\x6c\u545a\x57\u7313\x72\x6b\u545a\x72\u6730\x6c\x68\u56c4\u545a\u56c4\u6730\x6c\x6c\u58a0\u58a0\u545a\u6c36\u735c\u545a\u5ef2\u545a\u545a\u6730\u545a\u59c8\x6c\x68\u5ef2\u6c36\u7209\u545a\u5ef2\x74\x75\x72\u545a\x53\x74\x79\x6c\u545a\u706e\x68\u58a0\x68\u735c\u545a\u624f\u735c\u5ef2\x68\u5e77\u59c8\x75\x73\x74\u7313\u735c\x4d\u5ef2\u735a\x53\x74\x79\x6c\u545a\u6730\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x79\u624f\x69\u59c8\u7313\u72b8\x49\u72b8\u5a32\u7313\u706e\x68\u545a\x6c\u6730\u735c\u5ef2\u735a\x53\x74\x79\x6c\u545a\x49\u56c4\u624f\x68\x68\x69\u545a\u58a0\u706e\u5ef2\u5ef2\u545a\u5ef2\x6c\u6c36\u5ef2\u5ef2\u56c4\u5ef2\u545a\u624f\u59c8\x69\u5ef2\u6c36\x6c\x68\u5ef2\u545a\u545a\u624f\u56c4\u56c4\x69\u545a\u735c\u6730\x69\u72b8\u56c4\u7313\u7313\x72\x53\x74\x79\x6c\u545a\u624f\x6c\u56c4\x6c\u59c8\x68\u5e77\u545a\u58a0\x74\u545a\u72b8\u56c4\u6730\u735a\x72\u7313\x74\u7313\x74\x79\u735a\u545a\u706e\u545a\u56c4\u545a\u6730\u5ef2\x69\u56c4\u624f\u5ef2\x69\x69\u58a0\u706e\x68\u58a0\u58a0\u706e\u58a0\x68\x68\u5e77\u58a0\u58a0\u59c8\u56c4\u56c4\u5e77\u545a\u58a0\u5ef2\u545a\x6c\u6730\x68\x68\x69\u5e77\u58a0\u59c8\u545a\u59c8\u545a\u5e77\u58a0\u735c\u56c4\u5ef2\u58a0\u706e\u5ef2\u56c4\u735c\x6c\u5ef2\u6730\x6c\u735c\u735c\x68\u735c\u6730\u545a\u56c4\u5ef2\u58a0\u56c4\u624f\x69\u72b8\x4d\u5ef2\u735a\x48\u7313\x73\x74\u624f\u56c4\u5ef2\u5ef2\x69\u59c8\u6c36\u5ef2\u735c\x6c\u6c36\u7313\u72b8\u545a\x72\x72\u7313\x72\u6c36\u735a\x72\u545a\x76\u545a\u72b8\x74\u6b9b\u545a\u5a32\u5ef2\x75\x6c\x74\u6730\u735c\u735c\u56c4\u5ef2\u545a\u624f\u58a0\u5ef2\u545a\u6730\u5ef2\u735a\u735a\x6c\x69\u59c8\u5ef2\x74\x69\u7313\u72b8\u5f5f\u66f0\u7209\x6a\u5ef2\x76\u5ef2\x73\u59c8\x72\x69\u735a\x74\u5e77\x6c\x68\u735c\u5e77\u5ef2\u545a\u5ef2\u624f\u735c\u545a\x68\u735c\u5e77\x6c\x6c\u545a\u6730\u56c4\u5ef2\x68\u545a\u5ef2\u5e77\u59c8\x72\u545a\u5ef2\x74\u545a\x4f\u5c2b\x6a\u545a\u59c8\x74\x55\x52\x4c\u624f\u735c\x6c\u5ef2\u59c8\u545a\u624f\x68\u56c4\x68\x6c\u545a\u5e77\u5ef2\x6c\x68\u735c\x68\u5e77\x69\u735c\u735a\u7313\x72\x74\x53\u59c8\x72\x69\u735a\x74\x73\x28\u5f5f\u66f0\u66f0\u6730\u5f5f\u66f0\u66f0\x29\u5f5f\u6b31\u63cb\u6730\u5ef2\u5ef2\u5ef2\u545a\u545a\u624f\u735c\x6c\u5ef2\x68\u58a0\u6c36\x69\u56c4\x68\x69\u6730\x57\u545a\u5c2b\x4b\x69\x74\u63cb\x6c\u7313\u5c2b\u63cb\x75\x69\x6c\u56c4\u545a\x72\u624f\u58a0\u545a\u58a0\u6c36\u58a0\u735c\u5ef2\x69\u545a\u5e77\u5ef2\u735a\u735a\u545a\u72b8\u56c4\u706e\u545a\u59c8\u545a\u6730\u577a\u545a\x74\u63cb\x6c\u7313\u5c2b\u6730\u59c8\u56c4\u545a\u56c4\x68\u6c36\u59c8\u5ef2\u5ef2\u6c36\x77\u545a\u5c2b\x6b\x69\x74\x55\x52\x4c\u5e77\u5ef2\u56c4\u5ef2\u735c\u5ef2\u6c36\x69\u72b8\x69\x74\u6c36\u58a0\u545a\u545a\u624f\u56c4\x69\u58a0\u5e77\u59c8\u545a\u5ef2\u6730\u735c\x6c\u5ef2\u706e\x77\u7313\x72\x6b\u545a\x72\u735c\u577a\x72\u6730\u545a\u5ef2\u735c\x69\u624f\u59c8\u735c\u56c4\u706e\u5ef2\u56c4\u5ef2\u6730\u58a0\u735c\x6c\u706e\u56c4\u59c8\u5ef2\u706e\u5ef2\u59c8\u545a\u6c36\x6c\u5ef2\x6c\x6c\u624f\u59c8\u56c4\u5ef2\u6730\x6c\u58a0\u545a\u624f\x69\x68\x69\x69\u706e\u545a\u5ef2\u545a\u706e\u58a0\u59c8\u58a0\u5e77\u59c8\x69\u545a\u6c36\u5ef2\u58a0\u735c\u735c\u6730\u545a\x68\u5ef2\u5e77\x73\x74\x72\x69\u72b8\u577a\u6730\u59c8\u545a\x6c\x69\u706e\u58a0\u58a0\u58a0\u6730\u59c8\u735c\u59c8\u5e77\x68\x69\u545a\u6730\u56c4\x6c\u545a\u6c36\u545a\u545a\u545a\u6730\u5ef2\u735c\x68\u5e77\u545a\u735c\x68\u6c36\u5ef2\x6c\u545a\u706e\u545a\u545a\u59c8\u6730\u7313\u72b8\x73\x74\x79\x6c\u545a\x7a\u7313\u7313\u735c\x75\u735a\u56c4\u5ef2\x74\u545a\u5e77\x6c\u5ef2\u59c8\u6c36\x6c\u735c\x6c\u6730\x68\u735c\u58a0\u545a\x6c\u5e77\x68\u58a0\u545a\u5ef2\x69\u5e77\u59c8\u58a0\u5ef2\u56c4\u59c8\u5e77\x72\u5ef2\x74\x69\u7313\u624f\u59c8\u59c8\u58a0\u5ef2\u545a\u706e\u5ef2\x68\u5ef2\u545a\u58a0\u6730\u59c8\u5ef2\u72b8\x55\x73\u545a\x57\u545a\u5c2b\u6256\x73\x73\u545a\u735c\u5c2b\x6c\x79\u624f\u5ef2\u59c8\u545a\u5ef2\u545a\u706e\u59c8\u545a\x69\x68\u58a0\u706e\u59c8\u735c\u735c\u735c\u545a\u624f\u735c\u735c\u545a\u545a\u56c4\u624f\u735c\u5ef2\x69\x69\x68\u6c36\u545a\u545a\u56c4\u5e77\u59c8\u545a\u5ef2\u58a0\u5ef2\u624f\u5ef2\u545a\x6c\u6c36\u735c\u5ef2\u5ef2\u545a\x69\u706e\u59c8\x69\x69\u5e77\u58a0\u5ef2\u56c4\u6730\u735c\u5ef2\x69\u6730\x69\u58a0\u5ef2\u59c8\x6c\u5e77\x69\x6c\u545a\u706e\u5ef2\u59c8\u545a\u545a\u59c8\u6730\u59c8\u5ef2\u545a\u59c8\u5ef2\u706e\u545a\u56c4\u545a\u58a0\x69\u6730\x69\x69\u59c8\u56c4\u56c4\u706e\x69\u5ef2\x68\u735c\u59c8\u5e77\u735c\x69\u72b8\u624f\u5ef2\x72\x72\x50\u545a\u72b8\u56c4\x69\u72b8\u577a\u6b9b\u5ef2\x74\u5ef2\u6c36\x6c\u545a\u72b8\u577a\x74\x68\u5e77\x6c\u7313\u5ef2\u56c4\x54\x69\x6c\u545a\u6b9b\u5ef2\x74\u5ef2\u5e77\x75\x72\x6c\u6c36\x74\x69\x6c\u545a\x49\u72b8\u5a32\u7313\u6730\x74\x69\x6c\u545a\x4b\u545a\x79\u706e\u59c8\u5c2b\x6b\u5e77\u545a\u735c\u56c4\u56c4\u545a\u6730\x6c\u545a\u58a0\u706e\u5ef2\x6c\x69\u56c4\u545a\u624f\u58a0\u5ef2\u5ef2\x68\x68\u6730\x6c\u5ef2\x69\x6c\u545a\u5e77\u5ef2\x72\x72\x57\u7313\x72\x6b\u545a\x72\u624f\u735a\x75\x73\x68\u6730\u5ef2\u735c\x69\u545a\x69\u624f\u545a\u5ef2\u5ef2\x68\u56c4\u6730\x68\x69\x69\u545a\u58a0\u706e\u59c8\u58a0\u545a\u5ef2\x69\u6730\x5f\x69\x73\u63cb\x75\x73\x79\u6c36\x73\x68\x69\u5a32\x74\u6730\x5f\u59c8\u5c2b\x6b\u6730\u56c4\u545a\x69\u5ef2\x6c\u624f\u59c8\u735c\u545a\u545a\u56c4\u6c36\x73\u7313\x75\x72\u59c8\u545a\u624f\u5ef2\u735c\u5ef2\u56c4\x69\u6c36\u56c4\x6c\u5ef2\u545a\u5ef2\u624f\x69\u58a0\u545a\u5e77\u56c4\u5ef2\x68\x6c\u545a\u706e\u545a\u56c4\u735c\u5ef2\u5ef2\u706e\u545a\u545a\u735c\u5e77\x5f\u735a\u5ef2\x72\x73\x69\u72b8\u577a\x54\x69\x6c\u545a\x49\u72b8\u5a32\u7313\u624f\u58a0\x6c\u5ef2\u5ef2\x69\u624f\u545a\u59c8\u58a0\u706e\u5ef2\u735c\u56c4\u706e\u56c4\u5ef2\x74\u5ef2\u5e77\u545a\u5ef2\x69\u6c36\u58a0\x68\u545a\u5ef2\u59c8\u6c36\x5f\u735a\u5ef2\x72\x73\x69\u72b8\u577a\x54\x69\x6c\u545a\x4b\u545a\x79\u706e\x68\x68\u56c4\u6c36\u63cb\x72\u7313\x77\x73\u545a\x72\u706e\u735c\u545a\u58a0\u5ef2\x68\u5e77\x74\u545a\u58a0\x74\x53\x69\x7a\u545a\x52\u5ef2\x74\x69\u7313\u5e77\u5ef2\u545a\x68\u5ef2\u59c8\u6c36\u545a\u545a\u59c8\u59c8\u735c\u6730\u56c4\u545a\x73\x74\x72\u7313\x79\u624f\x74\u545a\x72\u735c\x69\u72b8\u5ef2\x74\u545a\u706e\u58a0\u56c4\u5ef2\u5ef2\x69\u6730\u735c\x69\u5ef2\u5ef2\u58a0\u6c36\u735c\u5ef2\u735a\u624f\x68\u5ef2\u5ef2\x6c\u5ef2\u624f\u7313\u72b8\x73\x74\x79\x6c\u545a\x5f\x6c\u7313\u5ef2\u56c4\u545a\u56c4\u5e77\x68\u58a0\u735c\u56c4\u545a\u6c36\u735c\u735c\u59c8\u6730\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\u645a\x75\x73\x74\u7313\u735c\x53\x74\x79\x6c\u545a\x49\u72b8\u5a32\u7313\x5a\u7313\u7313\u735c\u706e\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\u645a\x75\x73\x74\u7313\u735c\x53\x74\x79\x6c\u545a\x49\u72b8\u5a32\u7313\u706e\u735c\u5ef2\x69\u5ef2\x69\u624f\u59c8\u5ef2\u735c\u706e\u59c8\u7313\u72b8\u5a32\x69\u577a\u6730\x73\x74\x79\x6c\u545a\u706e\u58a0\x69\u56c4\u5ef2\x6c\u6730\x68\u5ef2\x72\u56c4\x77\u5ef2\x72\u545a\u645a\u7313\u72b8\u59c8\x75\x72\x72\u545a\u72b8\u59c8\x79\u6c36\u5ef2\u5ef2\u59c8\u5ef2\u735c\u624f\u59c8\u5ef2\u545a\x69\u545a\u624f\x6c\u5ef2\u56c4\u6c36\u56c4\x6c\u56c4\x6c\u58a0\u5e77\u735c\u545a\u5ef2\u59c8\u735c\u624f\u5ef2\u5ef2\x6c\u56c4\u56c4\u706e\u545a\u56c4\u545a\x69\u5ef2\u706e\u59c8\x69\x68\x69\x6c\u6730\u545a\u5ef2\u56c4\u5ef2\x6c\u6c36\x6c\u59c8\u545a\u545a\u545a\u6c36\x69\x73\x53\u545a\u72b8\u56c4\u7209\x53\u6c36\u59c8\x68\u58a0\u735c\u545a\u624f\x77\u7313\x72\u56c4\x53\u735a\u5ef2\u59c8\u545a\x52\u5ef2\x74\x69\u7313\u5e77\u545a\u56c4\x68\u6c36\u59c8\u56c4\x69\x69\u5e77\u545a\u735c\u545a\u6730\u58a0\x69\x6c\u706e\x69\x6c\u545a\x6c\u735c\u6730\x69\u56c4\u5ef2\u6730\x69\u545a\x68\x69\x6c\u6c36\u58a0\x6c\u58a0\u59c8\u59c8\u6730\x74\x69\x6c\u545a\x54\x79\u735a\u545a\x4e\u5ef2\u735c\u545a\u624f\u545a\x6c\x6c\u59c8\x6c\u6c36\u58a0\u5ef2\u58a0\u5ef2\x6c\u624f\x69\u56c4\x5f\u624f\u59c8\u7313\x6c\u624f\x72\u7313\x77\u624f\x7a\u7313\u7313\u735c\u6730\x73\u735a\x6c\x69\u59c8\u545a\u6730\u645a\x75\x73\x74\u7313\u735c\u6730\u58a0\u58a0\u56c4\u5e77\x69\u56c4\u545a\u5e77\x6c\u59c8\u58a0\u706e\x68\u58a0\u545a\u5e77\x6c\u735c\u58a0\u6c36\x69\u735c\u545a\u624f\u545a\u5ef2\u59c8\u5e77\u545a\u58a0\x68\u6c36\u545a\u545a\x68\u6c36\u58a0\x6c\u5ef2\u6c36\x69\x68\u545a\u6c36\u59c8\u56c4\x6c\u5e77\u58a0\u545a\u5ef2\u624f\u59c8\x75\x73\x74\u7313\u735c\u706e\u545a\u56c4\u735c\u624f\u59c8\u58a0\u735c\u6c36\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\u7209\u545a\u5ef2\x74\x75\x72\u545a\x53\x74\x79\x6c\u545a\u6c36\x69\u59c8\u7313\u72b8\x53\u545a\x74\x49\u72b8\u5a32\u7313\u6c36\x73\x74\x72\x69\u72b8\u577a\x69\u5a32\x69\u545a\u56c4\x49\u59c8\u7313\u72b8\x53\u545a\x74\x49\u72b8\u5a32\u7313\u706e\u5ef2\u735c\u58a0\u6730\u58a0\u58a0\u545a\u624f\x68\u56c4\u735c\u706e\u545a\u56c4\u56c4\u6c36\u545a\u5ef2\u545a\u59c8\u545a\u6c36\u5ef2\u545a\u58a0\u5ef2\x69\u6730\u545a\u735c\u5ef2\x68\u545a\u6730\x68\u545a\u545a\u545a\u735c"
    );
  (function(hS, T) {
    var i = function(e) {
      while (--e) {
        hS.push(hS.shift());
      }
    };
    i(++T);
  })(aB, 331);
  var az = function(hS, T) {
    hS = hS - 0;
    var i = aB[hS];
    return i;
  };
  function eN(hV) {
    var hU = {
      mmdae: function(hW, i) {
        return hW(i);
      },
      xxcdd: function(hW, i) {
        return hW !== i;
      },
      exael: "\x65\x6d\x64\x69",
      xcece: az("0x0"),
      xmdax: az("0x1"),
      admla: "\x78\x61\x69",
      lmmhm: az("0x2"),
      edaxd: az("0x3"),
      daaic: az("0x4"),
    };
    var hT = az("0x0");
    while (hU[az("0x5")](hT, hU[az("0x6")])) {
      switch (hT) {
        case az("0x7"):
          return hS;
        case hU[az("0x8")]:
          var hS = null;
          hT = az("0x1");
          break;
        case hU[az("0x9")]:
          try {
            var T = hU[az("0xa")];
            while (T !== hU[az("0xb")]) {
              switch (T) {
                case hU[az("0xc")]:
                  hS = new Worker(hV);
                  T = "\x61\x6d\x6c";
                  break;
                case hU[az("0xa")]:
                  T = dx[az("0xd")]
                    ? hU[az("0xc")]
                    : hU["\x64\x61\x61\x69\x63"];
                  break;
                case hU[az("0xe")]:
                  hS = u(hV);
                  T = hU[az("0xb")];
                  break;
                case az("0xf"):
                  hS[az("0x10")] = function(i) {
                    i[az("0x11")]();
                    hS = hU[az("0x12")](u, hV);
                  };
                  T = "\x61\x69\x69\x78";
                  break;
              }
            }
          } catch (e) {
            hS = u(hV);
          }
          hT = az("0x7");
          break;
      }
    }
  }
  function u(hS) {
    var T = {
      dahea: az("0x13"),
      mlace: "\x63\x61\x61",
      hdhle: "\x68\x78\x6c",
      alhmh: function(h1, h0) {
        return h1 + h0;
      },
      aaaee: az("0x14"),
      mlahx: az("0x15"),
      cidei: function(h1, h0) {
        return h1 !== h0;
      },
      xmaie: "\x78\x65\x78",
      cdedh: az("0x16"),
      cmhlm: az("0x17"),
      adama: az("0x18"),
    };
    var hZ = null;
    try {
      var hY = T[az("0x19")];
      while (hY !== az("0x17")) {
        switch (hY) {
          case az("0x18"):
            var hX = hT[az("0x1a")](i);
            hY = T[az("0x1b")];
            break;
          case T[az("0x1c")]:
            try {
              i = new Blob([T[az("0x1d")](az("0x1e"), hS) + az("0x1f")], {
                type: T[az("0x20")],
              });
            } catch (hW) {
              var hV = T[az("0x21")];
              while (T["\x63\x69\x64\x65\x69"](hV, az("0x22"))) {
                switch (hV) {
                  case az("0x15"):
                    var hU = new (window[
                      "\x42\x6c\x6f\x62\x42\x75\x69\x6c\x64\x65\x72"
                    ] ||
                      window[az("0x23")] ||
                      window[
                        "\x4d\x6f\x7a\x42\x6c\x6f\x62\x42\x75\x69\x6c\x64\x65\x72"
                      ])();
                    hV = az("0x24");
                    break;
                  case T[az("0x25")]:
                    hU[az("0x26")](
                      T["\x61\x6c\x68\x6d\x68"](
                        T["\x61\x6c\x68\x6d\x68"](az("0x1e"), hS),
                        az("0x1f")
                      )
                    );
                    hV = az("0x27");
                    break;
                  case az("0x27"):
                    i = hU[az("0x28")](az("0x14"));
                    hV = az("0x22");
                    break;
                }
              }
            }
            hY = T[az("0x29")];
            break;
          case az("0x2a"):
            hZ = new Worker(hX);
            hY = T["\x63\x6d\x68\x6c\x6d"];
            break;
          case az("0x16"):
            var hT = window["\x55\x52\x4c"] || window[az("0x2b")];
            hY = T[az("0x2c")];
            break;
          case T[az("0x19")]:
            var i;
            hY = "\x68\x78\x6c";
            break;
        }
      }
    } catch (e) {}
    return hZ;
  }
  function ga(e) {
    this[az("0x2d")](e);
  }
  var bh = {
    init: function(hT) {
      var hS = {
        aceae: "\x61\x6d\x64",
        ceihx: az("0x2e"),
        cmmme: az("0x2f"),
        mmeed: az("0x30"),
        maiih: az("0x31"),
        ceaxa: az("0x32"),
        maaei: "\x65\x63\x78",
        ixacl: az("0x33"),
        iealh: "\x6c\x65\x78",
        aceec:
          (window.location.protocol === "http:" ? "http:" : "https:") +
          "//api.map.baidu.com/res/webgl/10/worker_wasm_h4mks1.js",
        lxlam: az("0x34"),
        caeca: az("0x35"),
        edexi:
          (window.location.protocol === "http:" ? "http:" : "https:") +
          "//api.map.baidu.com/res/webgl/10/worker_asm_r1apqg.js",
        iicdd: az("0x36"),
        iahmc: function(hV, hU) {
          return hV < hU;
        },
        emdde: az("0x37"),
        alide: az("0x38"),
        xaahh: function(hV, hU) {
          return hV < hU;
        },
        laile: az("0x39"),
        amiei: "\x61\x61\x78",
        dldlx: az("0x3a"),
        lellm: az("0x3b"),
        eadal: function(hV, hU) {
          return hV !== hU;
        },
        hxmde: az("0x3c"),
        emxle: az("0x3d"),
        maiai: az("0x3e"),
        aaldd: az("0x3f"),
        edeia: az("0x40"),
        cihil: az("0x41"),
        lceee: az("0x42"),
        dclde: az("0x27"),
        hmxel: az("0x43"),
        hxeai: az("0x44"),
        cxadc: function(hU, hV) {
          return hU > hV;
        },
        ccxae: "\x65\x69\x6c",
        ahaex: az("0x2a"),
        cdxha: function(hU) {
          return hU();
        },
        mielc: function(hV, hU) {
          return hV > hU;
        },
        mexah: az("0x45"),
        aehac: az("0x46"),
        eeccm: az("0x47"),
        xdaai: az("0x48"),
        miaax: az("0x49"),
        haala: az("0x4a"),
        xidal: "\x6c\x61\x64",
        aacam: az("0x4b"),
        caeie: az("0x4c"),
        meacm: az("0x4d"),
        chxme: az("0x4e"),
      };
      var T = az("0x4f");
      while (T !== hS[az("0x50")]) {
        switch (T) {
          case hS[az("0x51")]:
            T = hS[az("0x52")](this[az("0x53")], 1)
              ? hS[az("0x54")]
              : hS[az("0x55")];
            break;
          case az("0x46"):
            c1[az("0x56")](function(h2) {
              var h1 = {
                eaahd: hS[az("0x57")],
                hiiex: "\x65\x61\x61\x63",
                cxeai: hS[az("0x58")],
                laelh: hS[az("0x59")],
                deial: hS[az("0x5a")],
                cmimx: hS[az("0x5b")],
                cmeed: az("0x5c"),
                amadi: hS[az("0x5d")],
                dlaea: az("0x5e"),
                dahle: function(h5, h4) {
                  return h5 > h4;
                },
                edmaa: hS[az("0x5f")],
                xlaai: az("0x60"),
                lalxm: az("0x61"),
                xheac: az("0x62"),
              };
              var h0 = az("0x37");
              while (h0 !== hS[az("0x63")]) {
                switch (h0) {
                  case hS["\x69\x65\x61\x6c\x68"]:
                    h0 = h2 ? az("0x64") : az("0x35");
                    break;
                  case az("0x64"):
                    hW = hS[az("0x65")];
                    h0 = hS["\x6c\x78\x6c\x61\x6d"];
                    break;
                  case hS[az("0x66")]:
                    hW = hS[az("0x67")];
                    h0 = hS["\x6c\x78\x6c\x61\x6d"];
                    break;
                  case hS[az("0x68")]:
                    for (
                      var hZ = 0;
                      hS[az("0x69")](
                        hZ,
                        Math[az("0x6a")](e[az("0x6b")][az("0x6c")], i)
                      );
                      hZ++
                    ) {
                      var hX = e[az("0x6b")]["\x73\x68\x69\x66\x74"]();
                      e[az("0x6d")](
                        hX[az("0x6e")],
                        hX[az("0x6f")],
                        hX[az("0x70")],
                        hX[az("0x71")]
                      );
                    }
                    h0 = hS[az("0x63")];
                    break;
                  case hS[az("0x72")]:
                    var hW;
                    h0 = az("0x73");
                    break;
                  case hS[az("0x74")]:
                    if (e[az("0x6b")]["\x6c\x65\x6e\x67\x74\x68"] > 0) {
                      h0 = hS[az("0x68")];
                      break;
                    }
                    h0 = "\x65\x61\x6d\x69";
                    break;
                  case hS["\x6c\x78\x6c\x61\x6d"]:
                    for (var hU = 0; hS[az("0x75")](hU, i); hU++) {
                      var hY = "\x61\x61\x78";
                      while (hY !== hS[az("0x76")]) {
                        switch (hY) {
                          case az("0x3b"):
                            e[az("0x77")][az("0x78")](hV);
                            hY = az("0x39");
                            break;
                          case hS[az("0x79")]:
                            var hV = eN(hW);
                            hY = hS["\x64\x6c\x64\x6c\x78"];
                            break;
                          case az("0x3a"):
                            hV[
                              "\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65"
                            ] = function h3(h4) {
                              var h8 = h1[az("0x7a")];
                              while (h8 !== h1[az("0x7b")]) {
                                switch (h8) {
                                  case az("0x5e"):
                                    hT["\x66\x69\x72\x65"](h5);
                                    h8 = h1[az("0x7b")];
                                    break;
                                  case h1[az("0x7c")]:
                                    this[az("0x7d")] = ![];
                                    h8 = "\x78\x61\x64";
                                    break;
                                  case h1["\x6c\x61\x65\x6c\x68"]:
                                    var h7 = e[
                                      "\x61\x72\x72\x50\x65\x6e\x64\x69\x6e\x67\x44\x61\x74\x61"
                                    ][az("0x7e")]();
                                    h8 = h1["\x64\x65\x69\x61\x6c"];
                                    break;
                                  case h1["\x63\x6d\x69\x6d\x78"]:
                                    this[az("0x7f")] &&
                                      this[az("0x7f")](
                                        null,
                                        this[
                                          "\x5f\x70\x61\x72\x73\x69\x6e\x67\x54\x69\x6c\x65\x4b\x65\x79"
                                        ]
                                      );
                                    h8 = h1[az("0x7c")];
                                    break;
                                  case h1[az("0x80")]:
                                    var h6 = h7["\x63\x62\x6b"];
                                    h8 = h1[az("0x81")];
                                    break;
                                  case az("0x62"):
                                    h5[az("0x82")] = h1[az("0x83")];
                                    h8 = h1[az("0x84")];
                                    break;
                                  case az("0x85"):
                                    if (
                                      h1[az("0x86")](
                                        e[az("0x6b")][az("0x6c")],
                                        0
                                      )
                                    ) {
                                      h8 = az("0x2f");
                                      break;
                                    }
                                    h8 = h1[az("0x87")];
                                    break;
                                  case az("0x88"):
                                    this[az("0x89")] = null;
                                    h8 = h1[az("0x8a")];
                                    break;
                                  case az("0x5c"):
                                    e[az("0x6d")](
                                      h7[az("0x6e")],
                                      h7[az("0x6f")],
                                      h7[az("0x70")],
                                      h6
                                    );
                                    h8 = az("0x8b");
                                    break;
                                  case h1["\x6c\x61\x6c\x78\x6d"]:
                                    this["\x5f\x63\x62\x6b"] = null;
                                    h8 = az("0x88");
                                    break;
                                  case az("0x8c"):
                                    h8 = h4[az("0x8d")]
                                      ? az("0x8e")
                                      : az("0x31");
                                    break;
                                  case h1["\x65\x64\x6d\x61\x61"]:
                                    var h5 = new bc(
                                      "\x6f\x6e\x72\x65\x66\x72\x65\x73\x68"
                                    );
                                    h8 = h1[az("0x8f")];
                                    break;
                                  case az("0x60"):
                                    this[az("0x90")] = null;
                                    h8 = az("0x85");
                                    break;
                                  case az("0x8e"):
                                    this["\x5f\x63\x62\x6b"] &&
                                      this[az("0x7f")](
                                        h4[az("0x8d")],
                                        this[az("0x90")]
                                      );
                                    h8 = az("0x2e");
                                    break;
                                }
                              }
                            };
                            hY = hS["\x6c\x65\x6c\x6c\x6d"];
                            break;
                        }
                      }
                    }
                    h0 = az("0x38");
                    break;
                }
              }
            });
            T = az("0x91");
            break;
          case az("0x4b"):
            if (
              (hS["\x63\x64\x78\x68\x61"](f6) || D[az("0x92")]["\x69\x65"]) &&
              hS["\x6d\x69\x65\x6c\x63"](i, 2)
            ) {
              T = hS[az("0x93")];
              break;
            }
            T = az("0x4a");
            break;
          case hS[az("0x55")]:
            this[az("0x94")] = 1;
            T = hS[az("0x95")];
            break;
          case hS["\x63\x63\x78\x61\x65"]:
            this["\x74\x65\x78\x74\x53\x69\x7a\x65\x52\x61\x74\x69\x6f"] = 2;
            T = hS[az("0x95")];
            break;
          case hS[az("0x96")]:
            hT["\x6f\x6e"](az("0x97"), function() {
              for (
                var hU = 0;
                hU < e["\x61\x72\x72\x57\x6f\x72\x6b\x65\x72"][az("0x6c")];
                hU++
              ) {
                if (e["\x61\x72\x72\x57\x6f\x72\x6b\x65\x72"][hU]) {
                  e[az("0x77")][hU][az("0x98")]();
                }
              }
              e[az("0x77")][az("0x6c")] = 0;
            });
            T = az("0x43");
            break;
          case az("0x4f"):
            var e = this;
            T = "\x61\x6d\x68";
            break;
          case az("0x4a"):
            this[az("0x77")] = [];
            T = hS[az("0x99")];
            break;
          case hS[az("0x9a")]:
            this[az("0x9b")] = hT;
            T = az("0x4c");
            break;
          case hS["\x6d\x65\x78\x61\x68"]:
            i = 2;
            T = hS[az("0x9c")];
            break;
          case az("0x91"):
            hT["\x6f\x6e"](az("0x9d"), function() {
              var hU = az("0x3e");
              while (hS["\x65\x61\x64\x61\x6c"](hU, hS[az("0x9e")])) {
                switch (hU) {
                  case az("0x9f"):
                    ga[az("0xa0")] = [];
                    hU = hS[az("0x9e")];
                    break;
                  case hS["\x65\x6d\x78\x6c\x65"]:
                    ga[az("0xa1")] = null;
                    hU = "\x6d\x6d\x63";
                    break;
                  case hS[az("0xa2")]:
                    for (
                      var hW = 0, hV = e[az("0x77")][az("0x6c")];
                      hW < hV;
                      hW++
                    ) {
                      e[az("0x77")][hW][
                        "\x69\x73\x53\x65\x6e\x64\x46\x53"
                      ] = ![];
                    }
                    hU = "\x63\x61\x6d";
                    break;
                  case az("0xa3"):
                    if (typeof this[az("0xa4")][az("0xa5")] !== az("0x42")) {
                      hU = hS["\x65\x6d\x78\x6c\x65"];
                      break;
                    }
                    hU = "\x69\x68\x69\x69";
                    break;
                }
              }
            });
            T = "\x63\x64\x61";
            break;
          case hS[az("0xa6")]:
            var i = navigator[az("0xa7")] || 4;
            T = hS[az("0xa8")];
            break;
          case hS[az("0xa9")]:
            this[az("0x6b")] = [];
            T = az("0xaa");
            break;
          case hS[az("0xab")]:
            hT["\x6f\x6e"](hS[az("0xac")], function() {
              var hW = hS[az("0xad")];
              while (hW !== hS[az("0xae")]) {
                switch (hW) {
                  case hS[az("0xaf")]:
                    if (
                      hS[az("0xb0")](
                        typeof this[az("0xa4")]["\x73\x74\x79\x6c\x65"],
                        hS[az("0xb1")]
                      )
                    ) {
                      hW = az("0x27");
                      break;
                    }
                    hW = az("0x40");
                    break;
                  case hS[az("0x72")]:
                    ga[az("0xa0")] = [];
                    hW = "\x61\x78\x6d\x6d";
                    break;
                  case hS["\x64\x63\x6c\x64\x65"]:
                    ga[az("0xa1")] = null;
                    hW = hS[az("0x72")];
                    break;
                  case az("0x3f"):
                    for (
                      var hV = 0,
                        hU = e[az("0x77")]["\x6c\x65\x6e\x67\x74\x68"];
                      hS["\x78\x61\x61\x68\x68"](hV, hU);
                      hV++
                    ) {
                      e[az("0x77")][hV][az("0xb2")] = ![];
                    }
                    hW = hS[az("0xaf")];
                    break;
                }
              }
            });
            T = az("0x47");
            break;
          case az("0x48"):
            this[az("0x53")] = a7();
            T = hS[az("0xb3")];
            break;
          case hS[az("0xb3")]:
            this[az("0xb4")] = this[az("0x53")];
            T = az("0x44");
            break;
        }
      }
    },
    getIdleWorker: function() {
      var e = {
        mcaxe: function(hV, hU) {
          return hV < hU;
        },
        ilelm: az("0xb5"),
        iaxme: "\x69\x64\x61",
        iehil: az("0xb6"),
      };
      for (
        var hT = 0, hS = this[az("0x77")][az("0x6c")];
        e["\x6d\x63\x61\x78\x65"](hT, hS);
        hT++
      ) {
        var T = az("0xb7");
        while (T !== az("0xb6")) {
          switch (T) {
            case az("0xb8"):
              i[az("0x7d")] = !![];
              T = e[az("0xb9")];
              break;
            case az("0xb5"):
              return i;
            case "\x65\x6d\x65":
              var i = this[az("0x77")][hT];
              T = az("0xba");
              break;
            case e["\x69\x61\x78\x6d\x65"]:
              if (!i[az("0x7d")]) {
                T = "\x78\x69\x6c";
                break;
              }
              T = e[az("0xbb")];
              break;
          }
        }
      }
      return null;
    },
    releasePendingData: function(hS) {
      var i = {
        xlxcc: function(hY, hX) {
          return hY !== hX;
        },
        ellcl: function(hY, hX) {
          return hY + hX;
        },
        xaxal: function(hX, hY) {
          return hX + hY;
        },
      };
      var hW = [];
      var hV = this[az("0x6b")];
      for (var hU = hV[az("0x6c")] - 1; hU >= 0; hU--) {
        var T = hV[hU];
        var e = T[az("0x6f")];
        if (
          i[az("0xbc")](
            hS[az("0xbd")],
            e["\x74\x69\x6c\x65\x54\x79\x70\x65\x4e\x61\x6d\x65"]
          )
        ) {
          continue;
        }
        var hT = i["\x65\x6c\x6c\x63\x6c"](
          i["\x65\x6c\x6c\x63\x6c"](
            i[az("0xbe")](i[az("0xbf")](az("0xc0"), e[az("0xc1")]), "\x5f"),
            e[az("0xc2")]
          ) + "\x5f",
          e[az("0xc3")]
        );
        if (!hS[hT]) {
          hV[az("0xc4")](hU, 1);
          hW[az("0x78")](e);
        }
      }
      return hW;
    },
    loadTileData: function(hU, hS, T, i) {
      var e = {
        eaece: function(h4, h3) {
          return h4 !== h3;
        },
        aexai: "\x63\x61\x61\x61",
        emahe: az("0xc5"),
        heeem: az("0xc6"),
        diaam: az("0xc7"),
        cmdal: az("0xc8"),
        lhadi: "\x61\x63\x78",
        xccam: az("0xc9"),
        hhcim: az("0xca"),
        cllei: function(h4, h3) {
          return h4 + h3;
        },
        iilli: az("0xcb"),
        ieemi: az("0xcc"),
        idaah: az("0x35"),
        eaaia: function(h4, h3) {
          return h4 + h3;
        },
        xcame: az("0xcd"),
        llala: az("0x18"),
        caaci: az("0xce"),
        xhmia: az("0xcf"),
        eeama: az("0xd0"),
        aahle: "\x64\x68\x61",
        eeaea: "\x65\x64\x64",
        xhidi: az("0xd1"),
        lhded: az("0xd2"),
        llxxe: az("0xd3"),
        meaee: "\x6c\x6c\x61",
        eclha: function(h4, h3) {
          return h4 + h3;
        },
        hxhme: az("0xd4"),
        aaeal: "\x69\x78\x61",
        maxim: az("0x30"),
        dhcme: az("0xd5"),
        hhiex: az("0xd6"),
        laile: function(h4, h3) {
          return h4 + h3;
        },
        aadae: az("0xd7"),
        lhaee: az("0xd8"),
        ddiem: az("0xd9"),
        hmldi: az("0x47"),
        dxeae: az("0xda"),
        ldlch: az("0xdb"),
      };
      var h2 = az("0xdc");
      while (e[az("0xdd")](h2, e[az("0xde")])) {
        switch (h2) {
          case az("0xc8"):
            hW = e[az("0xdf")];
            h2 = e[az("0xe0")];
            break;
          case az("0xe1"):
            hX["\x69\x73\x53\x65\x6e\x64\x46\x53"] = !![];
            h2 = e[az("0xe2")];
            break;
          case "\x78\x65\x61":
            if (hV) {
              h2 = e[az("0xe3")];
              break;
            }
            h2 = "\x78\x78\x64";
            break;
          case az("0x47"):
            if (!ga[az("0xe4")]) {
              h2 = az("0xda");
              break;
            }
            h2 = az("0xcf");
            break;
          case e[az("0xe5")]:
            var h1 = hY
              ? this[az("0x9b")][
                  "\x5f\x64\x69\x73\x70\x6c\x61\x79\x4f\x70\x74\x69\x6f\x6e\x73"
                ][az("0xe6")]
              : ![];
            h2 = e[az("0xe7")];
            break;
          case az("0xe8"):
            var h0 = { url: hU, tileInfo: hS, tileKey: T, cbk: i };
            h2 = az("0xe9");
            break;
          case e[az("0xe2")]:
            hX[az("0xea")](hT);
            h2 = e[az("0xde")];
            break;
          case e["\x68\x68\x63\x69\x6d"]:
            hX[az("0x89")] = hS;
            h2 = az("0xcc");
            break;
          case az("0xeb"):
            hX["\x5f\x63\x62\x6b"] = i;
            h2 = az("0xca");
            break;
          case az("0xec"):
            hT[az("0xed")] =
              ga[
                "\x73\x74\x72\x69\x6e\x67\x69\x66\x69\x65\x64\x46\x65\x61\x74\x75\x72\x65\x53\x74\x79\x6c\x65" +
                  hZ
              ];
            h2 = az("0xcb");
            break;
          case az("0xee"):
            if (ga[e[az("0xef")](az("0xd6"), hZ)]) {
              h2 = az("0xec");
              break;
            }
            h2 = e[az("0xf0")];
            break;
          case az("0xe9"):
            this[az("0x6b")]["\x70\x75\x73\x68"](h0);
            h2 = az("0xf1");
            break;
          case e[az("0xf2")]:
            hX[az("0x90")] = T;
            h2 = e[az("0xf3")];
            break;
          case e[az("0xf0")]:
            hT[az("0xd7")] = ga[e[az("0xf4")](az("0xd8"), hW)];
            h2 = e["\x78\x63\x61\x6d\x65"];
            break;
          case az("0xd5"):
            var hZ = this[az("0x9b")][az("0xf5")]();
            h2 = e[az("0xf6")];
            break;
          case e[az("0xf7")]:
            var hY = this["\x6d\x61\x70"][az("0xf8")][az("0xf9")];
            h2 = e[az("0xe5")];
            break;
          case e[az("0xfa")]:
            if (hV && bp[az("0xfb")]) {
              h2 = e[az("0xfc")];
              break;
            }
            h2 = e[az("0xfd")];
            break;
          case e[az("0xfe")]:
            var hX = this[az("0xff")]();
            h2 = e[az("0xf7")];
            break;
          case e["\x78\x68\x69\x64\x69"]:
            var hW = hZ;
            h2 = e[az("0x100")];
            break;
          case "\x68\x78\x65":
            h2 = hX ? az("0xeb") : az("0xe8");
            break;
          case e[az("0xf6")]:
            var hV = !!(
              hZ["\x69\x6e\x64\x65\x78\x4f\x66"](e[az("0x101")]) === 0
            );
            h2 = az("0xd1");
            break;
          case e[az("0x102")]:
            if (
              !ga[e[az("0xf4")](az("0xd6"), hZ)] &&
              bp[e[az("0x103")](az("0x104"), hZ)]
            ) {
              h2 = e[az("0x105")];
              break;
            }
            h2 = e["\x61\x61\x65\x61\x6c"];
            break;
          case az("0x106"):
            hT[az("0x107")] = ga[az("0xa1")];
            h2 = e["\x6d\x61\x78\x69\x6d"];
            break;
          case "\x68\x64\x6d":
            ga[az("0xa1")] = JSON[az("0x108")](bp[az("0xfb")]);
            h2 = "\x64\x68\x61";
            break;
          case az("0x30"):
            hT[az("0x109")] = {
              wordSpaceRatio: this[az("0xb4")],
              textSizeRatio: this[az("0x94")],
            };
            h2 = az("0x10a");
            break;
          case az("0x10a"):
            hT[az("0x10b")] = hZ;
            h2 = az("0xe1");
            break;
          case e[az("0xf3")]:
            var hT = {
              action: az("0x6d"),
              url: hU,
              tileInfo: hS,
              tileKey: T,
              isText: h1,
              isPoi: hY,
            };
            h2 = e["\x64\x68\x63\x6d\x65"];
            break;
          case "\x65\x64\x6d":
            ga[e[az("0x103")](e[az("0x10c")], hZ)] = JSON[az("0x108")](
              bp[
                e[az("0x76")](
                  "\x46\x65\x61\x74\x75\x72\x65\x53\x74\x79\x6c\x65",
                  hZ
                )
              ]
            );
            h2 = e[az("0x10d")];
            break;
          case az("0xd9"):
            ga[e["\x6c\x61\x69\x6c\x65"](az("0xd8"), hW)] = JSON[az("0x108")](
              bp[e[az("0x76")](e[az("0x10e")], hW)]
            );
            h2 = az("0x47");
            break;
          case az("0x10f"):
            if (
              hV &&
              ga[
                "\x73\x74\x72\x69\x6e\x67\x69\x66\x69\x65\x64\x43\x75\x73\x74\x6f\x6d\x53\x74\x79\x6c\x65\x49\x6e\x66\x6f"
              ]
            ) {
              h2 = "\x6d\x61\x68";
              break;
            }
            h2 = az("0x30");
            break;
          case e[az("0x10d")]:
            if (!ga[e[az("0x76")](e[az("0x110")], hW)]) {
              h2 = e[az("0x111")];
              break;
            }
            h2 = e["\x68\x6d\x6c\x64\x69"];
            break;
          case e["\x68\x65\x65\x65\x6d"]:
            if (!hX["\x69\x73\x53\x65\x6e\x64\x46\x53"]) {
              h2 = "\x6c\x6c\x61";
              break;
            }
            h2 = az("0xc7");
            break;
          case e["\x64\x78\x65\x61\x65"]:
            ga[
              "\x73\x74\x72\x69\x6e\x67\x69\x66\x69\x65\x64\x49\x6e\x64\x6f\x6f\x72\x53\x74\x79\x6c\x65"
            ] = JSON[az("0x108")](bp[az("0x112")]);
            h2 = e[az("0xfa")];
            break;
          case az("0xd0"):
            if (
              !ga[
                "\x73\x74\x72\x69\x6e\x67\x69\x66\x69\x65\x64\x43\x75\x73\x74\x6f\x6d\x53\x74\x79\x6c\x65\x49\x6e\x66\x6f"
              ]
            ) {
              h2 = e[az("0x113")];
              break;
            }
            h2 = az("0xee");
            break;
          case az("0xcd"):
            hT[az("0x112")] = ga[az("0xe4")];
            h2 = az("0x10f");
            break;
        }
      }
    },
  };
  D[az("0x114")](ga[az("0x115")], bh);
  function dU(i) {
    this.tileLayers = [];
    this.map = i;
    var e = (this.config = b7[this.map.mapType]);
    this.errorUrl = e.errorUrl;
    this.tileSize = e.tileSize;
    this.baseUnits = e.baseUnits;
    this.baseZoomLevel = e.zoomLevelBase;
    this.tileURLs = e.tileUrls;
    this.tilesInfoCache = {};
    this.loadDelay = 10;
    this._labelTextCanvas = null;
  }
  bp.register(function(i) {
    if (i._renderType !== "webgl") {
      return;
    }
    var e = (i.tileMgr = new dU(i));
    i.addEventListener("addtilelayer", function(hS) {
      e.addWebGLLayer(hS.target);
    });
    i.addEventListener("removetilelayer", function(hS) {
      e.removeWebGLLayer(hS.target);
    });
    i.on("update", function T(hS) {
      if (!bp["FeatureStyle" + this.config.style] && !bp.customStyleLoaded) {
        return;
      }
      e.loadLayersData({
        zoomChanged: hS.changedStatus.onzoom_changed ? true : false,
      });
    });
    i.on("style_changed", function() {
      e.loadLayersData();
    });
  });
  D.extend(dU.prototype, {
    addWebGLLayer: function(hS) {
      this.tileLayers.push(hS);
      hS.initDrawData();
      if (this.tileLayers.length > 1) {
        for (var T = 1; T < this.tileLayers.length; T++) {
          if (this.tileLayers[T].isFlat) {
            this.map.setDisplayOptions({ isFlat: true });
            break;
          }
        }
      }
      var e = this.map.config.style;
      if (bp["FeatureStyle" + e]) {
        this.loadLayersData();
      } else {
        var hT = this;
        this.map.loadMapStyleFiles(function() {
          hT.loadLayersData();
        });
      }
    },
    removeWebGLLayer: function(hU) {
      var hV = false;
      for (var hT = 0, hS = this.tileLayers.length; hT < hS; hT++) {
        if (hU === this.tileLayers[hT]) {
          hV = true;
          this.tileLayers.splice(hT, 1);
          break;
        }
      }
      if (hV === false) {
        return;
      }
      hU.destroyDrawData();
      if (bp["FeatureStyle" + this.map.config.style]) {
        this.loadLayersData();
      }
      if (this.tileLayers.length === 1) {
        this.map.setDisplayOptions({ isFlat: false });
      } else {
        var e = false;
        for (var hT = 1; hT < this.tileLayers.length; hT++) {
          if (this.tileLayers[hT].isFlat) {
            e = true;
            break;
          }
        }
        this.map.setDisplayOptions({ isFlat: e });
      }
      var T = new bc("onrefresh");
      T.source = "removewebgllayer";
      this.map.fire(T);
    },
    getLabelTextCanvas: function() {
      if (!this._labelTextCanvas) {
        this._labelTextCanvas = new w(this.map);
      }
      return this._labelTextCanvas;
    },
    loadLayersData: function(i) {
      if (this.map.suspendLoad) {
        return;
      }
      var hS = this;
      i = i || {};
      var T = !!i.zoomChanged;
      var e = T === true || this.map.getTilt() > 50;
      if (!e) {
        if (!this.syncLoadTimer) {
          this.syncLoadTimer = setTimeout(function() {
            hS._loadLayersFromCache(T);
            hS.syncLoadTimer = null;
          }, 40);
        }
      } else {
        this._loadLayersFromCache(T);
      }
      if (!hS.map.viewAnimationTime) {
        this.timer && window.clearTimeout(this.timer);
      }
      this.timer = window.setTimeout(function() {
        if (hS.map.viewAnimationTime) {
          if (new Date().getTime() - hS.map.viewAnimationTime < 1000) {
            return;
          }
          hS.map.viewAnimationTime = new Date().getTime();
        }
        var hU = hS.tileLayers.length;
        hS.tilesInfoCache = {};
        for (var hV = 0; hV < hU; hV++) {
          var hX = hS.tileLayers[hV];
          var hW = hX.tileType;
          var hT = null;
          if (hS.tilesInfoCache[hW.getName()]) {
            hT = hS.tilesInfoCache[hW.getName()];
          } else {
            hT = hS.calcTilesInfo(hW);
            hS.tilesInfoCache[hW.getName()] = hT;
          }
          hX.loadLayerData(hT, false, T);
        }
        hS.timer = null;
      }, this.loadDelay);
      if ((f6() || D.Browser.ie) && T) {
        this.loadDelay = 200;
      } else {
        this.loadDelay = 80;
      }
    },
    _loadLayersFromCache: function(hT) {
      this.map._featureMgr.clearData();
      var hW = this.tileLayers;
      hW.sort(function(hX, i) {
        return hX.zIndex - i.zIndex > 0;
      });
      var T = hW.length;
      this.tilesInfoCache = {};
      for (var hS = 0; hS < T; hS++) {
        var hV = hW[hS];
        var hU = hV.tileType;
        var e = null;
        if (this.tilesInfoCache[hU.getName()]) {
          e = this.tilesInfoCache[hU.getName()];
        } else {
          e = this.calcTilesInfo(hU);
          this.tilesInfoCache[hU.getName()] = e;
        }
        hV.loadLayerData(e, true, hT);
      }
    },
    calcTilesInfo: function(h4) {
      var ii = this.map;
      var ip = ii.getMapType();
      var ij = b7[ip];
      var ib = ii.getZoom();
      var e = Math.floor(ib);
      var hV = h4.getDataZoom(ib);
      var iA = h4.getName();
      hV = fG(hV, ij.minDataZoom, ij.maxDataZoom);
      var it = e;
      if (h4._name === "web") {
        it = hV;
      } else {
        if (it < 3) {
          it = 3;
        }
      }
      var ih = h4.getTileSize(ib);
      var hU = h4.getBaseTileSize(ib);
      var h8 = h4.getMercatorSize(ib, hV);
      var h7;
      var iq;
      var ig;
      var iv;
      var ik = ii.getCenterIn();
      if (ip !== BMAP_SATELLITE_MAP) {
        ik = d5.calcLoopCenterPoint(ik);
      }
      var ic = Math.floor(ik.lng / h8);
      var hX = Math.floor(ik.lat / h8);
      var ie = ii.getBoundsIn();
      var im = 0;
      var hS = 0;
      ie = d5.calcLoopMapBounds(ie, ii.getCenter());
      if (ie.ne.lng > d5._mc180X) {
        var h2 = d5.getSpaceDistanceInPixel(hV);
        im = Math.ceil(h2 / hU);
      }
      if (ie.sw.lng < d5._mcM180X) {
        var h2 = d5.getSpaceDistanceInPixel(hV);
        hS = Math.ceil(h2 / hU);
      }
      if (ie.ne.lat > 19505879.362428114 || ie.sw.lat < -15949096.637571886) {
        ie.ne.lat = 19505879.362428114;
        ie.sw.lat = -15949096.637571886;
      }
      var hZ = [Math.floor(ie.sw.lng / h8) - hS, Math.floor(ie.sw.lat / h8)];
      var iy = [Math.floor(ie.ne.lng / h8) + im, Math.floor(ie.ne.lat / h8)];
      h7 = hZ[0];
      iq = iy[0] + 1;
      ig = hZ[1];
      iv = iy[1] + 1;
      var h3 = [];
      for (var h0 = h7; h0 < iq; h0++) {
        if (d5.isTileBlank(h0, hV, hU) === true) {
          continue;
        }
        for (var h5 = ig; h5 < iv; h5++) {
          var h1 = {
            col: h0,
            row: h5,
            zoom: hV,
            useZoom: it,
            tileTypeName: iA,
            loopOffsetX: 0,
            tileSize: ih,
            baseTileSize: hU,
            mercatorSize: h8,
          };
          h3.push(h1);
          var io = "id_" + h0 + "_" + h5 + "_" + hV;
          h3[io] = true;
        }
      }
      if (ip !== BMAP_SATELLITE_MAP) {
        h3 = d5.calcLoopTiles(h3, hV, hU, h8);
      }
      if (hV === 3) {
        for (var ix = 0, iw = h3.length; ix < iw; ix++) {
          var h0 = h3[ix].col;
          var h5 = h3[ix].row;
          var ir = d5.calcLoopParam(h0, hV);
          var hW = ir.T;
          var h9 = h0 >= 0 ? h0 - hW : h0 + hW;
          var ia = "id_" + h9 + "_" + h5 + "_" + hV;
          if (!h3[ia]) {
            var h1 = {
              col: h9,
              row: h5,
              zoom: hV,
              useZoom: it,
              loopOffsetX: 0,
              tileSize: ih,
              baseTileSize: hU,
              mercatorSize: h8,
            };
            h3.push(h1);
            h3[ia] = true;
          }
        }
      }
      if (this.map._tilt > 0) {
        for (var ix = 0; ix < h3.length; ix++) {
          var hY = h3[ix];
          var iu = hY.col;
          var iz = hY.row;
          var il = [];
          il.minX = iu * h8;
          il.maxX = (iu + 1) * h8;
          il.minY = iz * h8;
          il.maxY = (iz + 1) * h8;
          var hT = new ht(0, 0);
          hT.lng = (il.minX + il.maxX) / 2;
          hT.lat = (il.minY + il.maxY) / 2;
          var h6 = ii.pointToPixelIn(hT);
          if (
            h6.x > 0 &&
            h6.x < this.map.width &&
            h6.y > 0 &&
            h6.y < this.map.height
          ) {
            continue;
          }
          if (
            il.minX < ik.lng &&
            il.maxX > ik.lng &&
            il.minY < ik.lat &&
            il.maxY > ik.lat
          ) {
            continue;
          }
          if (!this.ifTileInMapBounds(il, ie, iu, iz)) {
            h3.splice(ix, 1);
            ix--;
          }
        }
      }
      h3.sort(
        (function(i) {
          return function(T, id) {
            return (
              0.4 * Math.abs(T.col - i[0]) +
              0.6 * Math.abs(T.row - i[1]) -
              (0.4 * Math.abs(id.col - i[0]) + 0.6 * Math.abs(id.row - i[1]))
            );
          };
        })([ic, hX])
      );
      h3.zoom = hV;
      h3.tileTypeName = iA;
      return h3;
    },
    getCurrentViewTilesInfo: function(i) {
      var e = this.tilesInfoCache[i.getName()];
      if (!e) {
        return this.calcTilesInfo(i);
      }
      return e;
    },
    ifTileInMapBounds: function(e, hU, T, hT) {
      var i = hU.normalizedBottomLeft;
      var h5 = hU.normalizedTopRight;
      var hX = hU.normalizedTopLeft;
      var hV = hU.normalizedBottomRight;
      var hS = false;
      var h4 = new ht(e.minX, e.minY);
      var h1 = new ht(e.maxX, e.maxY);
      var hW = new ht(h1.lng, h4.lat);
      var h2 = new ht(h4.lng, h1.lat);
      var hZ = [h2, h1, hW, h4];
      for (var h3 = 0, hY = hZ.length; h3 < hY; h3++) {
        var h0 = h3 + 1;
        if (h0 === hY) {
          h0 = 0;
        }
        var h6 = h3;
        var h7 = gy(hZ[h0], hZ[h6], hX, i);
        if (h7) {
          hS = true;
          break;
        }
        h7 = gy(hZ[h0], hZ[h6], hV, h5);
        if (h7) {
          hS = true;
          break;
        }
        h7 = gy(hZ[h0], hZ[h6], h5, hX);
        if (h7) {
          hS = true;
          break;
        }
        h7 = gy(hZ[h0], hZ[h6], i, hV);
        if (h7) {
          hS = true;
          break;
        }
      }
      return hS;
    },
    getTileLayer: function(hT) {
      for (var hS = 0, e = this.tileLayers.length; hS < e; hS++) {
        var T = this.tileLayers[hS];
        if (T.mapType === hT) {
          return T;
        }
      }
      return null;
    },
  });
  function aT(e) {
    this._map = e;
    this._spotsId = null;
    this._init();
  }
  aT.prototype._init = function() {
    var e = this._map;
    e.addEventListener("onspotsdataready", function(T) {
      var i = T.spots;
      if (this._spotsId) {
        e.removeSpots(this._spotsId);
      }
      this._spotsId = e.addSpots(i);
    });
  };
  bp.register(function(e) {
    if (!e.config.enableIconClick) {
      return;
    }
    e._mapIcon = new aT(e);
  });
  function aW(e) {
    this._indoorData = {};
    this._map = e;
    this.currentUid = null;
    this.currentFloor = null;
    this._indoorControl = null;
    this.enterMethod = null;
    this.showMask = false;
    this._isMobile = f6();
    this._autoEnterZoom = 19;
    if (this._isMobile) {
      this._autoEnterZoom = 17;
    }
    this._init(e);
    window._indoorMgr = this;
  }
  aW.prototype._init = function(i) {
    var e = this;
    i.on("indoor_status_changed", function(hV) {
      var T = hV.uid;
      var hT = hV.floor;
      if (T === null) {
        T = e.currentUid;
        if (e._indoorData[T]) {
          hT = e._indoorData[T].defaultFloor;
        }
        if (e._indoorControl) {
          e._indoorControl.hide();
        }
        e.currentUid = null;
        e.currentFloor = null;
        e.enterMethod = null;
      } else {
        if (e._indoorData[T]) {
          var hU = e._indoorData[T];
          hT = typeof hT === "number" ? hT : hU.defaultFloor;
          if (!e._indoorControl) {
            if (i.config.showControls && i._displayOptions.indoor) {
              e._indoorControl = new gC(i, hU);
            }
          } else {
            e._indoorControl.setInfo(hU);
            e._indoorControl.show();
          }
          e.currentUid = T;
          e.currentFloor = hT;
        }
      }
      if (
        !e._indoorData ||
        !e._indoorData[T] ||
        e._indoorData[T].currentFloor === hT
      ) {
        this.fire(new bc("onrefresh"));
        return;
      }
      var hS = new bc("onindoor_data_refresh");
      hS.uid = T;
      hS.floor = hT;
      hS.tileKey = e._indoorData[T].tileKey;
      e._indoorData[T].currentFloor = hT;
      e.currentFloor = hT;
      this.fire(hS);
    });
    i.on("spotclick", function(hS) {
      var T = null;
      if (hS.curAreaSpot && this.areaSpots[hS.curAreaSpot]) {
        T = this.areaSpots[hS.curAreaSpot].userData.uid;
      }
      if (T === e.currentUid) {
        if (hS.curAreaSpot) {
          e.enterMethod = "byClick";
        }
        return;
      }
      if (T === null) {
        if (e.currentUid && e.enterMethod === "byClick") {
          i.showIndoor(null);
          e.enterMethod = null;
        }
      } else {
        e.enterMethod = "byClick";
        if (e.currentUid) {
          i.showIndoor(e.currentUid, e._indoorData[e.currentUid].defaultFloor);
        }
        i.showIndoor(T, e._indoorData[T].defaultFloor);
      }
    });
    i.on("moveend", function() {
      if (this.getZoom() >= e._autoEnterZoom) {
        e._checkIndoorByMove();
      }
    });
    i.on("zoomend", function() {
      if (this.getZoom() >= e._autoEnterZoom) {
        e._checkIndoorByMove();
      } else {
        if (e.enterMethod !== "byClick" && e.currentUid !== null) {
          this.showIndoor(null);
        }
      }
    });
  };
  aW.prototype._checkIndoorByMove = function() {
    var T = this._map;
    var hY = T.getSize();
    var h3 = { x: hY.width / 2, y: hY.height / 2 };
    var h2 = Math.max(hY.width, hY.height);
    var h4 = [];
    for (var hZ in this._indoorData) {
      var e = this._indoorData[hZ].center;
      var hS = T.pointToPixelIn(new bp.Point(e[0], e[1]));
      var hV = gX(h3, hS);
      h4.push({ uid: hZ, distance: hV });
    }
    if (h4.length === 0) {
      return;
    }
    h4.sort(function(h5, i) {
      return h5.distance - i.distance;
    });
    var hU = h4[0];
    var h0 = T.getCenterIn();
    var hT = false;
    for (var hX = 0; hX < this._indoorData[hU.uid].contour.length; hX++) {
      if (dh([h0.lng, h0.lat], this._indoorData[hU.uid].contour[hX])) {
        hT = true;
        break;
      }
    }
    if (hT === false && hU.uid === "e96b44200baa3b4082288acc") {
      var hW = this._indoorData[hU.uid].boundsMin;
      var h1 = this._indoorData[hU.uid].boundsMax;
      if (
        h0.lng > hW[0] &&
        h0.lat > hW[1] &&
        h0.lng < h1[0] &&
        h0.lat < h1[1]
      ) {
        hT = true;
      }
    }
    if (hT) {
      if (this.enterMethod !== "byClick") {
        if (this.currentUid !== null && this.currentUid !== hU.uid) {
          this._map.showIndoor(
            this.currentUid,
            this._indoorData[this.currentUid].defaultFloor
          );
        }
        if (this.currentUid !== hU.uid) {
          this._map.showIndoor(hU.uid, this._indoorData[hU.uid].defaultFloor);
        }
        this.enterMethod = "byMove";
      }
    } else {
      if (this.enterMethod !== "byClick") {
        this._map.showIndoor(null);
      }
    }
  };
  aW.prototype.setData = function(hS) {
    if (hS === null) {
      return;
    }
    for (var T in hS) {
      if (T === "tileInfo") {
        continue;
      }
      var hT = hS[T].tileKey;
      if (this._indoorData[T]) {
        if (!this._indoorData[T][hT]) {
          this._indoorData[T].tileKeys.push(hT);
          this._indoorData[T][hT] = true;
        }
      } else {
        this._indoorData[T] = hS[T];
        this._indoorData[T].tileKeys = [hS[T].tileKey];
        this._indoorData[T][hT] = true;
        for (var e = 0; e < this._indoorData[T].contour.length; e++) {
          this._map.addAreaSpot(this._indoorData[T].contour[e], {
            id: T + e,
            userData: { uid: T },
          });
        }
      }
    }
    if (this._map.getZoom() >= this._autoEnterZoom) {
      this._checkIndoorByMove();
    }
  };
  aW.prototype.removeData = function(T, hT) {
    if (!this._indoorData[T]) {
      return;
    }
    var hS = this._indoorData[T];
    for (var e = 0; e < hS.tileKeys.length; e++) {
      if (hS.tileKeys[e] === hT) {
        hS.tileKeys.splice(e, 1);
        break;
      }
    }
    delete hS[hT];
    if (hS.tileKeys.length === 0) {
      delete this._indoorData[T];
    }
  };
  aW.prototype.getIndoorData = function(e) {
    return this._indoorData[e] || null;
  };
  aW.prototype.getData = function() {
    return this._indoorData;
  };
  bp.register(function(e) {
    e._indoorMgr = new aW(e);
  });
  var em = (function() {
    var hS = {};
    var h1 = {};
    var hX = {};
    function hZ(h3) {
      if (Object.prototype.toString.call(h3) === "[object Object]") {
        for (var h2 in h3) {
          return false;
        }
        return true;
      } else {
        return false;
      }
    }
    function hY(h9, ia, id, h6, ic) {
      var h2 = h2 || null;
      h6 = h6 || h2;
      var h4;
      if (h6) {
        h4 = h0(h9, ia, id, h6);
      } else {
        h4 = T(h9, ia, id, ic);
      }
      var h8 = h4.drawId;
      var h3 = h4.style;
      var ib = h4.styleUpdate;
      var ie = [];
      if (!h8) {
        return ie;
      }
      for (var h5 = 0; h5 < h8.length; h5++) {
        var h7 = ib[h8[h5]] || h3[h8[h5]];
        if (h7) {
          switch (ia) {
            case "polygon":
              h7 = hT(h7, h9);
              break;
            case "line":
              h7 = hW(h7, h9);
              break;
            case "pointText":
              h7 = hU(h7, h9);
              break;
            case "point":
              h7 = e(h7, h9);
              break;
            case "polygon3d":
              h7 = hV(h7, h9);
              break;
          }
          if (h7) {
            h7.did = h8[h5];
            ie[ie.length] = h7;
          }
        }
      }
      return ie;
    }
    function h0(h3, h5, h6, h2) {
      var h4 = h2[2];
      switch (h5) {
        case "point":
          h4 = h4[0];
          break;
        case "pointText":
          h4 = h4[1];
          break;
        case "line":
          h4 = h4[3];
          break;
        case "polygon":
          h4 = h4[4];
          break;
        case "polygon3d":
          h4 = h4[5];
          break;
      }
      var h8 = h6 - 1;
      if (h5 === "line" && h6 === 12) {
        h8 = h6;
      }
      var h9 = h2[1][h8][0];
      var h7 = h9[h3];
      if (!h7) {
        if (h5 === "point" || h5 === "pointText") {
          h9 = h2[1][h6][0];
          h7 = h9[h3];
        }
      }
      return { drawId: h7, style: h4, styleUpdate: [] };
    }
    function T(h6, h7, ia, h9) {
      if (!h9) {
        return { drawId: null, style: [], styleUpdate: [] };
      }
      var h8;
      var h4 = h9.baseFs;
      h8 = h9.StyleBody || [];
      h8 = h9.zoomStyleBody[ia] || [];
      var h3 = h4[2];
      switch (h7) {
        case "point":
          h3 = h3[0];
          h8 = h8[0] || {};
          break;
        case "pointText":
          h3 = h3[1];
          h8 = h8[1] || {};
          break;
        case "line":
          h3 = h3[3];
          h8 = h8[3] || {};
          break;
        case "polygon":
          h3 = h3[4];
          h8 = h8[4] || {};
          break;
        case "polygon3d":
          h3 = h3[5];
          h8 = h8[5] || {};
          break;
      }
      var h2 = h4[1][ia - 1][0];
      var h5 = h2[h6];
      return { drawId: h5, style: h3, styleUpdate: h8 };
    }
    function hU(h3, h2) {
      if (!h3 || h3.length === 0) {
        return null;
      }
      return {
        sid: h2,
        fontRgba: i(h3[0]),
        haloRgba: i(h3[1]),
        backRgba: i(h3[2]),
        fontSize: h3[3],
        haloSize: h3[4],
        fontWeight: h3[5],
        fontStyle: h3[6],
        density: h3[7],
      };
    }
    function e(h3, h2) {
      return {
        sid: h2,
        rank: h3[0],
        ucflag: h3[1],
        icon: h3[2],
        iconType: h3[3],
        nineGG: h3[4],
        density: h3[5],
        zoom: h3[6],
      };
    }
    function hW(h3, h2) {
      return {
        sid: h2,
        borderRgba: i(h3[0]),
        fillRgba: i(h3[1]),
        borderWidth: h3[2],
        fillWidth: h3[3],
        borderCap: h3[4],
        fillCap: h3[5],
        haveBorderLine: h3[6],
        haveBorderTexture: h3[7],
        haveFillTexture: h3[8],
        isUseBorderRgba: h3[9],
        isUseFillRgba: h3[10],
        borderTexture: h3[11],
        fillTexture: h3[12],
        borderTextureType: h3[13],
        fillTextureType: h3[14],
        isRealWidth: h3[15],
        haveArrow: h3[16],
        needRound: h3[17],
        realBorderWidth: h3[18],
      };
    }
    function hT(h3, h2) {
      if (h2 === 2532) {
      }
      return {
        sid: h2,
        fillRgba: i(h3[0]),
        borderRgba: i(h3[1]),
        borderWidth: h3[2],
        borderTexture: h3[3],
        borderTextureType: h3[4],
        waterStyle: h3[5],
        haloStyle: h3[6],
        textureStyle: h3[7],
        thickRgba: i(h3[8]),
      };
    }
    function hV(h3, h2) {
      return {
        sid: h2,
        filter: h3[0],
        ratio: h3[1],
        haveBorder: h3[2],
        borderWidth: h3[3],
        borderRgba: i(h3[4]),
        fillTop: i(h3[5]),
        fillSide: i(h3[6]),
        polyTexture: h3[7],
      };
    }
    function i(h7) {
      var h6 = h7;
      if (hX[h6]) {
        return hX[h6];
      }
      h7 = h7 >>> 0;
      var h5 = h7 & 255;
      var h4 = (h7 >> 8) & 255;
      var h2 = (h7 >> 16) & 255;
      var h3 = (h7 >> 24) & 255;
      hX[h6] = [h5, h4, h2, h3];
      return hX[h6];
    }
    return {
      getStyleFromCache: function(h9, h4, h7, h8, h3, h6, h2) {
        h9 = h9 || "default";
        var h5 = h9 + "-" + h4 + "-" + h7 + "-" + h8;
        if (h6) {
          h5 += "-indoor";
        }
        if (h3) {
          if (!h1[h5]) {
            h1[h5] = hY(h4, h7, h8, h3);
          }
          return h1[h5];
        }
        if (!hS[h5]) {
          hS[h5] = hY(h4, h7, h8, h3, h2);
        }
        return hS[h5];
      },
    };
  })();
  bp.register(function(i) {
    var e = new dH(i);
  });
  function dH(e) {
    e.container.appendChild(this.render());
    this.bind(e);
  }
  dH.prototype.render = function() {
    var i = document.createElement("div");
    i.className = "click-ripple-container";
    var e = document.createElement("div");
    e.className = "click-ripple";
    i.appendChild(e);
    this._div = i;
    this._ripple = e;
    return i;
  };
  dH.prototype.bind = function(i) {
    var e = this;
    i.addEventListener("spotclick", function(T) {
      if (!T.spots || T.spots.length === 0) {
        return;
      }
      e._div.style.left = T.pixel.x + "px";
      e._div.style.top = T.pixel.y + "px";
      D.ac(e._ripple, "ripple-playing");
    });
    D.on(e._ripple, "transitionend", function() {
      D.rc(e._ripple, "ripple-playing");
    });
  };
  function f2(e) {
    ee.call(this);
    if (!e) {
      return;
    }
    this._opts = {};
    this._map = e;
    this._maxLat = 84.6;
    this._minLat = -80.6;
    this._maxLatMC = eo.convertLL2MC(new c5(this._maxLat, 0)).lat;
    this._minLatMC = eo.convertLL2MC(new c5(this._minLat, 0)).lat;
  }
  f2.inherits(ee, "ToolbarItem");
  D.extend(f2.prototype, {
    open: function() {
      if (this._isOpen == true) {
        return true;
      }
      if (this._map._toolInUse) {
        return false;
      }
      this._map._toolInUse = true;
      this._isOpen = true;
      return true;
    },
    close: function() {
      if (!this._isOpen) {
        return;
      }
      this._map._toolInUse = false;
      this._isOpen = false;
    },
    _checkStr: function(e) {
      if (!e) {
        return "";
      }
      return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    },
  });
  function gM(T, i) {
    f2.call(this, T);
    i = i || {};
    this._opts = D.extend(
      D.extend(this._opts || {}, {
        autoClear: false,
        tips: "测距",
        followText: "单击确定起点，双击结束绘制",
        unit: "metric",
        showResult: true,
        lineColor: "blue",
        lineStroke: 2,
        opacity: 1,
        lineStyle: "solid",
        cursor: e4.distCursor,
        styleCodes: { lnCode: 0, spCode: 0, slCode: 0, tlCode: 0 },
        enableMassClear: true,
      }),
      i
    );
    if (this._opts.showResult === false) {
      if (typeof i.tips === "undefined") {
        this._opts.tips = "绘制折线";
      }
      if (!i.cursor) {
        this._opts.cursor = "crosshair";
      }
    }
    if (this._opts.lineStroke <= 0) {
      this._opts.lineStroke = 2;
    }
    if (this._opts.opacity > 1) {
      this._opts.opacity = 1;
    } else {
      if (this._opts.opacity < 0) {
        this._opts.opacity = 0;
      }
    }
    if (this._opts.lineStyle !== "solid" && this._opts.lineStyle !== "dashed") {
      this._opts.lineStyle = "solid";
    }
    this._checked = false;
    this._drawing = null;
    this.followTitle = null;
    this._totalDis = {};
    this._points = [];
    this._paths = [];
    this._dots = [];
    this._segDistance = [];
    this._overlays = [];
    this._units = {
      metric: { name: "metric", conv: 1, incon: 1000, u1: "米", u2: "公里" },
      us: { name: "us", conv: 3.2808, incon: 5279.856, u1: "英尺", u2: "英里" },
    };
    if (!this._units[this._opts.unit]) {
      this._opts.unit = "metric";
    }
    this._dLineColor = "#ff6319";
    this._dLineStroke = 3;
    this._dOpacity = 0.8;
    this._dLineStyle = "solid";
    this._dCursor = e4.distCursor;
    if (this._opts.showResult) {
      this._opts.followText = "单击确定起点";
    }
    this._followTextM = "单击确定地点，双击结束";
    this._sectionMarkerTip = "单击可删除此点，拖拽可调整位置";
    this._movingTimerId = null;
    if (this._opts.showResult) {
      this.text = "测距";
    } else {
      this.text = "绘线";
    }
    this._isOpen = false;
    var e = this;
    eb.load("tools", function() {
      e._draw();
    });
  }
  gM.inherits(f2, "PolylineTItem");
  D.extend(gM.prototype, {
    setLineColor: function(e) {
      this._opts.lineColor = e;
    },
    setLineStroke: function(e) {
      if (Math.round(e) > 0) {
        this._opts.lineStroke = Math.round(e);
      }
    },
    setOpacity: function(e) {
      if (e >= 0 && e <= 1) {
        this._opts.opacity = e;
      }
    },
    setLineStyle: function(e) {
      if (e === "solid" || e === "dashed") {
        this._opts.lineStyle = e;
      }
    },
    clear: function() {
      for (var T = 0, e = this._overlays.length; T < e; T++) {
        if (this._overlays[T]) {
          this._map.removeOverlay(this._overlays[T]);
        }
      }
      this._overlays.length = 0;
      for (var T = 0, e = this._dots.length; T < e; T++) {
        if (this._dots[T] && this._dots[T].parentNode) {
          this._dots[T].parentNode.removeChild(this._dots[T]);
        }
      }
      this._dots.length = 0;
    },
    setCursor: function(e) {
      if (this._opts.showResult === true) {
        return;
      }
      this._opts.cursor = e;
    },
    getCursor: function() {
      if (this._opts.showResult === true) {
        return this._dCursor;
      }
      var e = this._opts.cursor.match(/^url\((.+)\)(,.*)?/);
      if (e !== null) {
        return e[1];
      } else {
        return this._opts.cursor;
      }
    },
    showResult: function(e) {
      this._opts.showResult = !!e;
    },
  });
  function cv() {
    var hT = 3;
    var h0 = 256;
    var hS = Math.pow(2, 18 - hT) * h0;
    var h1 = 2;
    var hZ = (h1 + 1) * hS;
    var T = eo.convertLL2MC(new ht(180, 0));
    var hX = T.lng;
    var hV = hZ - hX;
    var hY = -3;
    var e = hY * hS;
    var hU = eo.convertLL2MC(new ht(-180, 0));
    var hW = hU.lng;
    var i = hW - e;
    this._validPixels = hX / Math.pow(2, 18 - hT);
    this._mc180X = hX;
    this._mcM180X = hW;
    this._loopOffset = hV + i;
    this._mcTSpan = hX - hW;
    this._spaceDistance = hV;
    this._mSpaceDistance = i;
  }
  cv.prototype = {
    calcLoopParam: function(hS, i, hZ) {
      hZ = hZ || 256;
      var hW = 0;
      var hT = 3;
      var hV = 6;
      var hU = (hV * Math.pow(2, i - hT) * 256) / hZ;
      var hY = hU / 2 - 1;
      var hX = -hU / 2;
      while (hS > hY) {
        hS -= hU;
        hW -= this._loopOffset;
      }
      while (hS < hX) {
        hS += hU;
        hW += this._loopOffset;
      }
      var e = hW;
      hW = Math.round(hW / Math.pow(2, 18 - i));
      return {
        offsetX: hW,
        geoOffsetX: e,
        col: hS,
        T: hU,
        maxCol: hY,
        minCol: hX,
      };
    },
    calcLoopCenterPoint: function(i) {
      var e = i.lng;
      while (e > this._mc180X) {
        e -= this._mcTSpan;
      }
      while (e < this._mcM180X) {
        e += this._mcTSpan;
      }
      i.lng = e;
      return i;
    },
    calcLoopMapBounds: function(T, hS) {
      var i = hS || T.getCenter();
      var e = T.sw.lng;
      var hT = T.ne.lng;
      while (i.lng > this._mc180X) {
        i.lng -= this._mcTSpan;
        e -= this._mcTSpan;
        hT -= this._mcTSpan;
      }
      while (i.lng < this._mcM180X) {
        i.lng += this._mcTSpan;
        e += this._mcTSpan;
        hT += this._mcTSpan;
      }
      T.sw.lng = e;
      T.ne.lng = hT;
      if (T.pointBottomLeft) {
        T.pointBottomLeft = this.calcLoopCenterPoint(T.pointBottomLeft);
        T.pointTopLeft = this.calcLoopCenterPoint(T.pointTopLeft);
        T.pointTopRight = this.calcLoopCenterPoint(T.pointTopRight);
        T.pointBottomRight = this.calcLoopCenterPoint(T.pointBottomRight);
      }
      return T;
    },
    calcLoopTiles: function(h0, e, h4, hX) {
      h4 = h4 || 256;
      var hT = hX || Math.pow(2, 18 - e) * h4;
      var hZ = Math.floor(this._mc180X / hT);
      var hV = Math.floor(this._mcM180X / hT);
      var h1 = Math.floor(this._loopOffset / hT);
      var h2 = [];
      for (var hW = 0; hW < h0.length; hW++) {
        var h3 = h0[hW];
        var hS = h3[0];
        var h5 = h3[1];
        if (hS >= hZ) {
          var hY = hS + h1;
          if (this.isTileBlank(hY, e, h4) === true) {
            continue;
          }
          var T = "id_" + hY + "_" + h5 + "_" + e;
          if (!h0[T]) {
            h0[T] = true;
            h2.push([hY, h5, e, 0]);
          }
        } else {
          if (hS <= hV) {
            var hY = hS - h1;
            if (this.isTileBlank(hY, e, h4) === true) {
              continue;
            }
            var T = "id_" + hY + "_" + h5 + "_" + e;
            if (!h0[T]) {
              h0[T] = true;
              h2.push([hY, h5, e, 0]);
            }
          }
        }
      }
      for (var hW = 0, hU = h2.length; hW < hU; hW++) {
        h0.push(h2[hW]);
      }
      for (var hW = h0.length - 1; hW >= 0; hW--) {
        var hS = h0[hW][0];
        if (this.isTileBlank(hS, e, h4)) {
          h0.splice(hW, 1);
        }
      }
      return h0;
    },
    isTileBlank: function(T, hT, e) {
      var hU = Math.pow(2, hT - 3);
      var i = Math.round(this._validPixels * hU);
      var hS = (6 * hU * 256) / e;
      while (T > hS / 2 - 1) {
        T -= hS;
      }
      while (T < -(hS / 2)) {
        T += hS;
      }
      if (T > 0 && T * e > i) {
        return true;
      }
      if (T < 0 && Math.abs((T + 1) * e) > i) {
        return true;
      }
      return false;
    },
    isAddWidth: function(e, i) {
      return e < this._mcM180X || i > this._mc180X;
    },
    getSpaceDistanceInPixel: function(i) {
      var e = Math.round(
        (this._spaceDistance + this._mSpaceDistance) / Math.pow(2, 18 - i)
      );
      return e;
    },
  };
  var d5 = new cv();
  var cf = (function() {
    var i = true;
    var hT = 256;
    var e = true;
    var hV = aE("ditu", "normalTraffic");
    var hS = hV.udt;
    var hW = "//its.map.baidu.com/traffic/";
    var hU = [
      [2, "79,210,125,1", 3, 2, 0, [], 0, 0],
      [2, "79,210,125,1", 3, 2, 0, [], 0, 0],
      [2, "79,210,125,1", 4, 2, 0, [], 0, 0],
      [2, "79,210,125,1", 5, 2, 0, [], 0, 0],
      [2, "79,210,125,1", 6, 2, 0, [], 0, 0],
      [2, "255,208,69,1", 3, 2, 0, [], 0, 0],
      [2, "255,208,69,1", 3, 2, 0, [], 0, 0],
      [2, "255,208,69,1", 4, 2, 0, [], 0, 0],
      [2, "255,208,69,1", 5, 2, 0, [], 0, 0],
      [2, "255,208,69,1", 6, 2, 0, [], 0, 0],
      [2, "232,14,14,1", 3, 2, 0, [], 0, 0],
      [2, "232,14,14,1", 3, 2, 0, [], 0, 0],
      [2, "232,14,14,1", 4, 2, 0, [], 0, 0],
      [2, "232,14,14,1", 5, 2, 0, [], 0, 0],
      [2, "232,14,14,1", 6, 2, 0, [], 0, 0],
      [2, "181,0,0,1", 3, 2, 0, [], 0, 0],
      [2, "181,0,0,1", 3, 2, 0, [], 0, 0],
      [2, "181,0,0,1", 4, 2, 0, [], 0, 0],
      [2, "181,0,0,1", 5, 2, 0, [], 0, 0],
      [2, "181,0,0,1", 6, 2, 0, [], 0, 0],
      [2, "255,255,255,1", 4, 0, 0, [], 0, 0],
      [2, "255,255,255,1", 5.5, 0, 0, [], 0, 0],
      [2, "255,255,255,1", 7, 0, 0, [], 0, 0],
      [2, "255,255,255,1", 8.5, 0, 0, [], 0, 0],
      [2, "255,255,255,1", 10, 0, 0, [], 0, 0],
    ];
    var T = new cS({
      transparentPng: true,
      dataType: 2,
      cacheSize: 256,
      clipTile: true,
    });
    T.zIndex = 2;
    T.getTilesUrl = function(hZ, h0) {
      if (!hZ || h0 < 7) {
        return null;
      }
      var hY = hZ.x;
      var h1 = hZ.y;
      var hX =
        hW +
        "TrafficTileService?level=" +
        h0 +
        "&x=" +
        hY +
        "&y=" +
        h1 +
        "&time=" +
        +new Date();
      if (this.map.getRenderType() === "webgl") {
        hX =
          hW + "?qt=vtraffic&z=" + h0 + "&x=" + hY + "&y=" + h1 + "&udt=" + hS;
      }
      return hX;
    };
    T.setColors = function(hX) {
      for (var h0 = 0; h0 < hU.length; h0++) {
        var hZ = Math.floor(h0 / 5);
        var hY = hX[hZ];
        if (hY) {
          if (Object.prototype.toString.call(hY) === "[object String]") {
            hY = g1.parseCSSColor(hY);
          }
          hU[h0][1] = [hY[0], hY[1], hY[2], hY[3] / 255].join(",");
        }
      }
    };
    T.setEdge = function(hX) {
      e = !!hX;
    };
    T.processData = function(h0) {
      var h4 = h0.content;
      var h2 = 10;
      if (typeof h0.precision === "number") {
        h2 = h0.precision * 10;
      }
      var ib = { road: [[], []] };
      if (!h4) {
        return ib;
      }
      var h9 = h4.tf;
      if (!h9) {
        return ib;
      }
      for (var h1 = 0; h1 < h9.length; h1++) {
        var ia = h9[h1][1];
        var h8 = [];
        var h6 = 0;
        var h5 = 0;
        var h7 = hU[h9[h1][3]];
        for (var hZ = 0, hX = ia.length; hZ < hX / 2; hZ++) {
          h6 += ia[hZ * 2] / h2;
          h5 += ia[hZ * 2 + 1] / h2;
          h8.push(h6, 256 - h5);
        }
        var hY = h7[1].split(",");
        hY[3] = hY[3] * 255;
        var h3 = h7[2] / 2;
        if (e) {
          ib.road[0].push([h8, 1, 2, [255, 255, 255, 255], h3 + 2]);
        }
        ib.road[1].push([h8, 1, 2, hY, h3]);
      }
      return ib;
    };
    return T;
  })();
  bp.register(function(i) {
    if (i.config && i.config.isOverviewMap) {
      return;
    }
    if (i.isLoaded()) {
      fD(i);
    } else {
      i.addEventListener("load", function() {
        fD(this);
      });
    }
    i.cityName = "中国";
    i.cCode = "1";
    var e = {};
    e.enableRequest = true;
    e.request = function() {
      if (e.enableRequest) {
        e.enableRequest = false;
        setTimeout(function() {
          e._request();
        }, 500);
      }
    };
    e._request = function() {
      var hS = i.getBoundsIn();
      var hU = i.getZoom();
      var T = hS.getSouthWest();
      var hT = hS.getNorthEast();
      cC.request(
        function(hY) {
          if (
            hY.current_city["code"] >= 9000 &&
            hY.current_city["code"] <= 9378
          ) {
            hY.current_city["name"] = "台湾省";
          }
          if (
            hY.current_city["code"] >= 20000 &&
            hY.current_city["code"] <= 20499
          ) {
            hY.current_city["name"] = "新加坡";
          }
          if (
            hY.current_city["code"] >= 20500 &&
            hY.current_city["code"] <= 25999
          ) {
            hY.current_city["name"] = "泰国";
          }
          if (
            hY.current_city["code"] >= 26000 &&
            hY.current_city["code"] <= 29999
          ) {
            hY.current_city["name"] = "日本";
          }
          if (
            hY.current_city["code"] >= 30000 &&
            hY.current_city["code"] <= 30999
          ) {
            hY.current_city["name"] = "韩国";
          }
          if (
            hY.current_city["code"] >= 31000 &&
            hY.current_city["code"] <= 37000
          ) {
            hY.current_city["name"] = "亚太";
          }
          if (
            hY.current_city["code"] >= 46609 &&
            hY.current_city["code"] <= 52505
          ) {
            hY.current_city["name"] = "欧洲";
          }
          if (
            hY.current_city["code"] >= 39509 &&
            hY.current_city["code"] <= 53500
          ) {
            hY.current_city["name"] = "南美洲";
          }
          if (
            hY.current_city["code"] >= 54000 &&
            hY.current_city["code"] <= 70000
          ) {
            hY.current_city["name"] = "北美洲";
          }
          if (
            hY.current_city["code"] === 54003 &&
            hY.current_city["code"] >= 60731 &&
            hY.current_city["code"] <= 61123
          ) {
            hY.current_city["name"] = "美国";
          }
          if (
            hY.current_city["code"] === 54015 ||
            (hY.current_city["code"] >= 57970 &&
              hY.current_city["code"] <= 60223)
          ) {
            hY.current_city["name"] = "加拿大";
          }
          if (
            hY.current_city["code"] === 54025 ||
            (hY.current_city["code"] >= 54338 &&
              hY.current_city["code"] <= 57374)
          ) {
            hY.current_city["name"] = "墨西哥";
          }
          e.enableRequest = true;
          if (hY && hY.current_city) {
            var hX = hY.current_city["name"];
            var hW = hY.current_city["code"];
            if (hW !== i.cCode) {
              var hV = new bc("oncitychange");
              hV.name = hX;
              hV.code = hW;
              i.dispatchEvent(hV);
            }
            i.cityName = hX;
            i.cCode = hW;
            if (!f6()) {
              ew(i);
            }
          }
        },
        {
          qt: "cen",
          b: T.lng + "," + T.lat + ";" + hT.lng + "," + hT.lat,
          l: hU,
        },
        "",
        "",
        true
      );
    };
    i.addEventListener("load", function(T) {
      e.request();
    });
    i.addEventListener("moveend", function(T) {
      e.request();
    });
    i.addEventListener("zoomend", function(T) {
      e.request();
    });
    e.request();
  });
  function fD(i) {
    if (i.temp.copyadded) {
      return;
    }
    i.temp.copyadded = true;
    if (!i.cpyCtrl) {
      var hS = new ea(2, 2);
      i.config.cpyCtrlOffset = hS;
      if (f6()) {
        hS.width = 72;
        hS.height = 0;
      }
      var T = new dI({ offset: hS, printable: true });
      i.cpyCtrl = T;
    }
    if (!f6()) {
      ew(i);
      i.addEventListener("maptypechange", function() {
        ew(i);
      });
    }
    i.addControl(T);
    var e = new ag();
    e._opts = { printable: true };
    i.logoCtrl = e;
    i.addControl(e);
    i.addEventListener("resize", function() {
      if (this.getSize().width >= 300 && i.getSize().height >= 100) {
        e.show();
        T.setOffset(i.config.cpyCtrlOffset);
      } else {
        e.hide();
        T.setOffset(new ea(4, 2));
      }
    });
    if (i.getSize().width >= 300 && i.getSize().height >= 100) {
      e.show();
    } else {
      e.hide();
      T.setOffset(new ea(4, 2));
    }
    i.addEventListener("oncopyrightoffsetchange", function(hT) {
      i.logoCtrl.setOffset(hT.target.logo);
      i.cpyCtrl.setOffset(hT.target.cpy);
    });
    i.dispatchEvent(new bc("oncopyrightaddend"));
  }
  function ew(h7) {
    if (!h7.cpyCtrl) {
      var ig = new ea(2, 2);
      if (f6()) {
        ig.width = 72;
        ig.height = 0;
      }
      var ia = new dI({ offset: ig, printable: true });
      h7.cpyCtrl = ia;
    }
    var iq = h7.cityName || "中国";
    var h8 = h7.getMapType();
    var h9 = [
      "常州市",
      "南昌市",
      "乌鲁木齐市",
      "无锡市",
      "福州市",
      "泉州市",
      "珠海市",
      "贵阳市",
    ];
    var h1 = [
      "北京市",
      "上海市",
      "广州市",
      "深圳市",
      "宁波市",
      "石家庄市",
      "沈阳市",
      "长春市",
      "青岛市",
      "温州市",
      "台州市",
      "金华市",
      "佛山市",
      "中山市",
      "昆明市",
      "南宁市",
      "苏州市",
      "西安市",
      "济南市",
      "郑州市",
      "合肥市",
      "呼和浩特市",
      "杭州市",
      "成都市",
      "武汉市",
      "长沙市",
      "天津市",
      "南京市",
      "重庆市",
      "大连市",
      "东莞市",
      "厦门市",
    ];
    var h3 = ["香港特别行政区"];
    var hX = ["台湾省"];
    var ih = ["日本"];
    var io = ["韩国"];
    var ib = ["泰国"];
    var ie = ["亚太"];
    var hY = ["新加坡"];
    var ip = ["欧洲"];
    var hS = ["南美洲"];
    var ik = ["北美洲"];
    var T = ["美国"];
    var id = ["墨西哥"];
    var hV = ["加拿大"];
    for (var il in h9) {
      if (h9[il] === iq) {
        var h4 = true;
        break;
      }
    }
    for (var il in h1) {
      if (h1[il] === iq) {
        var hT = true;
        break;
      }
    }
    for (var il in h3) {
      if (h3[il] === iq) {
        var it = true;
        break;
      }
    }
    if (hX[0] === iq) {
      var ij = true;
    }
    if (hY[0] === iq) {
      var i = true;
    }
    if (ih[0] === iq) {
      var h0 = true;
    }
    if (io[0] === iq) {
      var h6 = true;
    }
    if (ib[0] === iq) {
      var h5 = true;
    }
    if (ie[0] === iq) {
      var hW = true;
    }
    if (ip[0] === iq) {
      var h2 = true;
    }
    if (hS[0] === iq) {
      var hZ = true;
    }
    if (ik[0] === iq) {
      var e = true;
    }
    if (T[0] === iq) {
      var im = true;
    }
    if (hV[0] === iq) {
      var ii = true;
    }
    if (id[0] === iq) {
      var hU = true;
    }
    var ir = [
      "&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ",
    ];
    var ic = "rgba(255, 255, 255, 0.701961)";
    if (h7.getZoom() <= 9) {
      ir = [
        "&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ",
      ];
    } else {
      if (ij) {
        ir = [
          "&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ",
        ];
      } else {
        if (h0 || h6) {
          ir = [
            "&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ",
          ];
        } else {
          if (i || h5) {
            ir = [
              "&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ",
            ];
          } else {
            if (hW) {
              ir = [
                "&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ",
              ];
            } else {
              if (h2) {
                ir = [
                  "&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ",
                ];
              } else {
                if (hZ) {
                  ir = [
                    "&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ",
                  ];
                } else {
                  if (e) {
                    ir = [
                      "&copy;&nbsp;2021 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ",
                    ];
                  }
                }
              }
            }
          }
        }
      }
    }
    if (h7.getZoom() <= 9) {
      ir.push("长地万方");
      ir.push(
        ' &amp; <a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>'
      );
      ir.push(
        ' &amp; <a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>'
      );
      if (h8 === BMAP_SATELLITE_MAP || h8 === BMAP_HYBRID_MAP) {
        ir.push(
          ' &amp; <a target="_blank" href="http://www.eso.org/public/">ESO</a>'
        );
        ic = "rgba(0,0,0,.7)";
      }
    } else {
      if (h0 || h6) {
        ir.push(
          '<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>'
        );
      } else {
        if (i || h5) {
          ir.push(
            '<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>'
          );
        } else {
          if (hW) {
            ir.push(
              '<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>'
            );
            ir.push(
              ' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>'
            );
          } else {
            if (h2) {
              ir.push(
                '<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>'
              );
              ir.push(
                ' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>'
              );
            } else {
              if (hZ) {
                ir.push(
                  '<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>'
                );
                ir.push(
                  ' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>'
                );
              } else {
                if (im || hU || ii) {
                  ir.push(
                    '<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>'
                  );
                  ir.push(
                    ' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>'
                  );
                } else {
                  if (e) {
                    ir.push(
                      '<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>'
                    );
                    ir.push(
                      ' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>'
                    );
                  } else {
                    ir.push("长地万方");
                    if (h4) {
                      ir.push(
                        ' &amp; <a target="_blank" href="http://www.palmcity.cn/palmcity/">PalmCity</a>'
                      );
                    }
                    if (it) {
                      ir.push(
                        ' &amp; <a target="_blank" href="http://www.mapking.com/HongKong/eng/home/MapKing_Webmap.html">MapKing</a>'
                      );
                    }
                    if (ij) {
                      ir.push(
                        ' &amp; <a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>'
                      );
                      ir.push(
                        ' &amp; <a target="_blank" href="http://www.localking.com.tw/about/localking.aspx">樂客LocalKing</a>'
                      );
                    }
                    if (h8 === BMAP_SATELLITE_MAP || h8 === BMAP_HYBRID_MAP) {
                      ic = "rgba(0,0,0,.7)";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    ir.unshift(
      '<span style="background: ' +
        ic +
        ';padding: 0px 1px;line-height: 16px;display: inline;height: 16px;">'
    );
    ir.push("</span>");
    ir = ir.join("");
    h7.cpyCtrl.addCopyright({ id: 1, content: ir });
  }
  window.BMAP_STATUS_SUCCESS = 0;
  window.BMAP_STATUS_CITY_LIST = 1;
  window.BMAP_STATUS_UNKNOWN_LOCATION = 2;
  window.BMAP_STATUS_UNKNOWN_ROUTE = 3;
  window.BMAP_STATUS_INVALID_KEY = 4;
  window.BMAP_STATUS_INVALID_REQUEST = 5;
  window.BMAP_STATUS_PERMISSION_DENIED = 6;
  window.BMAP_STATUS_SERVICE_UNAVAILABLE = 7;
  window.BMAP_STATUS_TIMEOUT = 8;
  window.BMAP_ROUTE_TYPE_WALKING = 2;
  window.BMAP_ROUTE_TYPE_DRIVING = 3;
  window.BMAP_ROUTE_TYPE_RIDING = 6;
  window.BMAP_ROUTE_STATUS_NORMAL = 0;
  window.BMAP_ROUTE_STATUS_EMPTY = 1;
  window.BMAP_ROUTE_STATUS_ADDRESS = 2;
  var eG = "cur";
  var b3 = "cen";
  var en = "s";
  var Q = "con";
  var dN = "bd";
  var ge = "nb";
  var hJ = "bt";
  var cQ = "nav";
  var el = "walk";
  var hF = "gc";
  var fM = "rgc";
  var ey = "dec";
  var fc = "bse";
  var fn = "nse";
  var g = "bl";
  var bd = "bsl";
  var bq = "bda";
  var Y = "sa";
  var aA = "nba";
  var b0 = "drag";
  var I = "ext";
  var aQ = "hip";
  var S = "ride";
  var fR = "drct";
  var gq = 2;
  var fO = 4;
  var g8 = 7;
  var g6 = 11;
  var fy = 12;
  var hD = 14;
  var bR = 15;
  var dK = 18;
  var ff = 20;
  var cJ = 21;
  var cp = 19;
  var e9 = 23;
  var cj = 26;
  var ap = 28;
  var ej = 31;
  var cG = 35;
  var gi = 44;
  var hQ = 45;
  var eJ = 46;
  var cE = 47;
  var gz = -1;
  var gY = 0;
  var hd = 1;
  var cn = 2;
  var b9 = 3;
  window.BMAP_POI_TYPE_NORMAL = 0;
  var R = 1;
  var cd = 2;
  BMapGL.I = D.I;
  var P = {};
  P.removeHtml = function(e) {
    e = e.replace(/<\/?[^>]*>/g, "");
    e = e.replace(/[ | ]* /g, " ");
    return e;
  };
  P.parseGeoExtReg1 = function(e) {
    return e.replace(
      /([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g,
      "$1,$2;"
    );
  };
  P.parseGeoExtReg2 = function(i, e) {
    var T = new RegExp(
      "(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" +
        e +
        "}",
      "ig"
    );
    return i.replace(T, "$1");
  };
  var fw = 0;
  var cI = 1;
  var g9 = 2;
  P.unique = function(T) {
    var hU = false;
    var hT = [];
    var hV = {};
    for (var hS = 0, e = T.length; hS < e; hS++) {
      if (!hV[T[hS]]) {
        hV[T[hS]] = true;
        hT.push(T[hS]);
      }
    }
    return hT;
  };
  P.getBestLevel = function(T, i) {
    if (i) {
      var e = Math.min(i.width / 1100, i.height / 660);
      T = Math.round(T + Math.log(e) / Math.log(2));
    }
    if (T < 1) {
      T = 1;
    }
    if (T > 21) {
      T = 21;
    }
    return T;
  };
  P.parseGeo = function(hV, hY) {
    if (typeof hV != "string" || !hV) {
      return;
    }
    var h0 = hV.split("|");
    var e;
    var hT;
    var T;
    if (h0.length == 1) {
      e = gb(hV);
    } else {
      e = gb(h0[2]);
      hT = gb(h0[0]);
      T = gb(h0[1]);
      if (!hY) {
        return e;
      }
    }
    var hW = { type: e.geoType };
    if (hY) {
      switch (hW.type) {
        case g9:
          var hX = new ht(e.geo[0][0], e.geo[0][1]);
          var hZ = eo.convertMC2LL(hX);
          hW.point = hZ;
          hW.points = [hZ];
          break;
        case cI:
          hW.points = [];
          var h1 = e.geo[0];
          for (var hU = 0, hS = h1.length - 1; hU < hS; hU += 2) {
            var h2 = new ht(h1[hU], h1[hU + 1]);
            h2 = eo.convertMC2LL(h2);
            hW.points.push(h2);
          }
          hT = new ht(hT.geo[0][0], hT.geo[0][1]);
          T = new ht(T.geo[0][0], T.geo[0][1]);
          hT = eo.convertMC2LL(hT);
          T = eo.convertMC2LL(T);
          hW.bounds = new dT(hT, T);
          break;
        default:
          break;
      }
    }
    return hW;
  };
  P.parseGeoExt = function(ib, h2) {
    if (!h2) {
      h2 = 0;
    } else {
      if (h2 < 0.25) {
        h2 = 0;
      } else {
        if (h2 > 0.25 && h2 < 1) {
          h2 = 1;
        } else {
          if (h2 > 32) {
            h2 = 32;
          }
        }
      }
    }
    var hX = ib.split("|");
    if (hX.length == 1) {
      var hS = gb(hX[0]);
      return { type: hS.type, bound: "", points: hS.geo.join(",") };
    } else {
      if (hX.length > 1) {
        var h3 = ib.split(";.=");
        var hZ = [];
        var hT = [];
        var h4 = 0;
        var h8 = h3.length;
        for (var h5 = 0; h5 < h8; h5++) {
          var ia = h3[h5];
          if (h8 > 1) {
            if (h5 == 0) {
              ia = ia + ";";
            }
            if (h5 > 0 && h5 < h8 - 1) {
              ia = ".=" + ia + ";";
            }
            if (h5 == h8 - 1) {
              ia = ".=" + ia;
            }
          }
          var hU = ia.split("|");
          var h7 = gb(hU[0]);
          var h6 = gb(hU[1]);
          hZ.push(h7.geo.join(","));
          hZ.push(h6.geo.join(","));
          var hS = gb(hU[2]);
          h4 = hS.type;
          var h9 = hS.geo.join(",");
          h9 = P.parseGeoExtReg1(h9);
          if (h2 > 0) {
            h9 = P.parseGeoExtReg2(h9, h2);
          }
          hT.push(h9);
        }
        if (h8 <= 1) {
          hT = hT.join(";");
        }
        if (h8 == 2) {
          var T = hT[0] + ";" + hT[1];
          var hV = T.split(";");
          var e = [];
          for (var h5 = 0; h5 < hV.length; h5++) {
            var hY = hV[h5].split(",")[0];
            var hW = hV[h5].split(",")[1];
            var h0 = new ht(hY, hW);
            var h1 = eo.convertMC2LL(h0);
            e.push(h1);
          }
          hT = e;
        }
        return { type: h4, bound: hZ.join(";"), points: hT };
      }
    }
  };
  P.getPoiPoint = function(e) {
    var T = [];
    var i = null;
    if (e.toString() == "Point") {
      i = e;
    } else {
      if (typeof e == "string") {
        T = D.trim(e).split(",");
        if (T.length < 2) {
          return;
        }
        T[0] = parseFloat(D.trim(T[0]));
        T[1] = parseFloat(D.trim(T[1]));
      } else {
        T = e.slice(0);
        if (T.length < 2) {
          return;
        }
      }
      i = new BMap.Point(T[0], T[1]);
    }
    return i;
  };
  P.parseGeoStr = function(T) {
    var i = T.split(",");
    var e = new ht(i[0], i[1]);
    return eo.convertMC2LL(e);
  };
  P.level = { country: 4, province: 11, city: 12, area: 13 };
  var hK = ["=", ".", "-", "*"];
  var f5 = 1 << 23;
  function gb(hY) {
    var hX = ba(hY.charAt(0));
    var T = hY.substr(1);
    var h0 = 0;
    var e = T.length;
    var h1 = [];
    var hV = [];
    var hW = [];
    while (h0 < e) {
      if (T.charAt(h0) == hK[0]) {
        if (e - h0 < 13) {
          return 0;
        }
        hW = aM(T.substr(h0, 13), h1);
        if (hW < 0) {
          return 0;
        }
        h0 += 13;
      } else {
        if (T.charAt(h0) == ";") {
          hV.push(h1.slice(0));
          h1.length = 0;
          ++h0;
        } else {
          if (e - h0 < 8) {
            return 0;
          }
          hW = c7(T.substr(h0, 8), h1);
          if (hW < 0) {
            return 0;
          }
          h0 += 8;
        }
      }
    }
    for (var hU = 0, hS = hV.length; hU < hS; hU++) {
      for (var hT = 0, hZ = hV[hU].length; hT < hZ; hT++) {
        hV[hU][hT] /= 100;
      }
    }
    return { geoType: hX, geo: hV };
  }
  function ba(i) {
    var e = -1;
    if (i == hK[1]) {
      e = g9;
    } else {
      if (i == hK[2]) {
        e = cI;
      } else {
        if (i == hK[3]) {
          e = fw;
        }
      }
    }
    return e;
  }
  function aM(hT, T) {
    var e = 0;
    var hV = 0;
    var hU = 0;
    for (var hS = 0; hS < 6; hS++) {
      hU = cP(hT.substr(1 + hS, 1));
      if (hU < 0) {
        return -1 - hS;
      }
      e += hU << (6 * hS);
      hU = cP(hT.substr(7 + hS, 1));
      if (hU < 0) {
        return -7 - hS;
      }
      hV += hU << (6 * hS);
    }
    T.push(e);
    T.push(hV);
    return 0;
  }
  function c7(hU, hS) {
    var T = hS.length;
    if (T < 2) {
      return -1;
    }
    var e = 0;
    var hW = 0;
    var hV = 0;
    for (var hT = 0; hT < 4; hT++) {
      hV = cP(hU.substr(hT, 1));
      if (hV < 0) {
        return -1 - hT;
      }
      e += hV << (6 * hT);
      hV = cP(hU.substr(4 + hT, 1));
      if (hV < 0) {
        return -5 - hT;
      }
      hW += hV << (6 * hT);
    }
    if (e > f5) {
      e = f5 - e;
    }
    if (hW > f5) {
      hW = f5 - hW;
    }
    hS.push(hS[T - 2] + e);
    hS.push(hS[T - 1] + hW);
    return 0;
  }
  function cP(i) {
    var e = i.charCodeAt(0);
    if (i >= "A" && i <= "Z") {
      return e - "A".charCodeAt(0);
    } else {
      if (i >= "a" && i <= "z") {
        return 26 + e - "a".charCodeAt(0);
      } else {
        if (i >= "0" && i <= "9") {
          return 52 + e - "0".charCodeAt(0);
        } else {
          if (i == "+") {
            return 62;
          } else {
            if (i == "/") {
              return 63;
            }
          }
        }
      }
    }
    return -1;
  }
  P.pathToPoints = function(hU) {
    var hS = [];
    if (typeof hU !== "string") {
      return hS;
    } else {
      var hT = hU.split(";");
      for (var T = 0; T < hT.length; T++) {
        var e = hT[T].split(",");
        hS.push(new ht(e[0], e[1]));
      }
    }
    return hS;
  };
  window.BMAP_POI_TYPE_NORMAL = 0;
  window.BMAP_POI_TYPE_BUSSTOP = 1;
  window.BMAP_POI_TYPE_BUSLINE = 2;
  window.BMAP_POI_TYPE_SUBSTOP = 3;
  window.BMAP_POI_TYPE_SUBLINE = 4;
  var hw = 0;
  var fX = 1;
  var c4 = {};
  window.APIPack = c4;
  function fB(i, e) {
    ee.call(this);
    this._loc = {};
    this.setLocation(i);
    e = e || {};
    e.renderOptions = e.renderOptions || {};
    this._opts = {
      renderOptions: {
        panel: e.renderOptions.panel || null,
        map: e.renderOptions.map || null,
        autoViewport: e.renderOptions.autoViewport || true,
        selectFirstResult: e.renderOptions.selectFirstResult,
        highlightMode: e.renderOptions.highlightMode,
        enableDragging: e.renderOptions.enableDragging || false,
      },
      onSearchComplete: e.onSearchComplete || function() {},
      onMarkersSet: e.onMarkersSet || function() {},
      onInfoHtmlSet: e.onInfoHtmlSet || function() {},
      onResultsHtmlSet: e.onResultsHtmlSet || function() {},
      onGetBusListComplete: e.onGetBusListComplete || function() {},
      onGetBusLineComplete: e.onGetBusLineComplete || function() {},
      onBusListHtmlSet: e.onBusListHtmlSet || function() {},
      onBusLineHtmlSet: e.onBusLineHtmlSet || function() {},
      onPolylinesSet: e.onPolylinesSet || function() {},
      reqFrom: e.reqFrom || "",
    };
    if (
      typeof e != "undefined" &&
      typeof e.renderOptions != "undefined" &&
      typeof e.renderOptions["autoViewport"] != "undefined"
    ) {
      this._opts.renderOptions.autoViewport = e.renderOptions["autoViewport"];
    } else {
      this._opts.renderOptions.autoViewport = true;
    }
    this._opts.renderOptions.panel = D.G(this._opts.renderOptions.panel);
  }
  fB.inherits(ee, "BaseSearch");
  D.extend(fB.prototype, {
    getResults: function() {
      if (!this._isMultiKey) {
        return this._results;
      } else {
        return this._arrResults;
      }
    },
    enableAutoViewport: function() {
      this._opts.renderOptions.autoViewport = true;
    },
    disableAutoViewport: function() {
      this._opts.renderOptions.autoViewport = false;
    },
    setLocation: function(e) {
      if (!e) {
        return;
      }
      this._loc.src = e;
    },
    setSearchCompleteCallback: function(e) {
      this._opts.onSearchComplete = e || function() {};
    },
    setMarkersSetCallback: function(e) {
      this._opts.onMarkersSet = e || function() {};
    },
    setPolylinesSetCallback: function(e) {
      this._opts.onPolylinesSet = e || function() {};
    },
    setInfoHtmlSetCallback: function(e) {
      this._opts.onInfoHtmlSet = e || function() {};
    },
    setResultsHtmlSetCallback: function(e) {
      this._opts.onResultsHtmlSet = e || function() {};
    },
    getStatus: function() {
      return this._status;
    },
  });
  var dO = function(T, i) {
    fB.call(this, T, i);
    i = i || {};
    i.renderOptions = i.renderOptions || {};
    this.setPageCapacity(i.pageCapacity);
    if (
      typeof i.renderOptions["selectFirstResult"] != "undefined" &&
      !i.renderOptions["selectFirstResult"]
    ) {
      this.disableFirstResultSelection();
    } else {
      this.enableFirstResultSelection();
    }
    this._overlays = [];
    this._arrPois = [];
    this._curIndex = -1;
    this._queryList = [];
    var e = this;
    eb.load(
      "localSearch",
      function() {
        e._check();
      },
      true
    );
  };
  dO.inherits(fB, "LocalSearch");
  dO.DEFAULT_PAGE_CAPACITY = 10;
  dO.MIN_PAGE_CAPACITY = 1;
  dO.MAX_PAGE_CAPACITY = 100;
  dO.DEFAULT_RADIUS = 2000;
  dO.MAX_RADIUS = 100000;
  D.extend(dO.prototype, {
    search: function(e, i) {
      this._queryList.push({ method: "search", arguments: [e, i] });
    },
    searchInBounds: function(e, T, i) {
      this._queryList.push({ method: "searchInBounds", arguments: [e, T, i] });
    },
    searchNearby: function(T, i, e, hS) {
      this._queryList.push({
        method: "searchNearby",
        arguments: [T, i, e, hS],
      });
    },
    clearResults: function() {
      delete this._json;
      delete this._status;
      delete this._results;
      delete this._ud;
      this._curIndex = -1;
      this._setStatus();
      if (this._opts.renderOptions.panel) {
        this._opts.renderOptions.panel.innerHTML = "";
      }
    },
    gotoPage: function() {},
    enableFirstResultSelection: function() {
      this._opts.renderOptions.selectFirstResult = true;
    },
    disableFirstResultSelection: function() {
      this._opts.renderOptions.selectFirstResult = false;
    },
    setPageCapacity: function(e) {
      if (typeof e == "number" && !isNaN(e)) {
        this._opts.pageCapacity =
          e < 1
            ? dO.DEFAULT_PAGE_CAPACITY
            : e > dO.MAX_PAGE_CAPACITY
            ? dO.DEFAULT_PAGE_CAPACITY
            : e;
      } else {
        this._opts.pageCapacity = dO.DEFAULT_PAGE_CAPACITY;
      }
    },
    getPageCapacity: function() {
      return this._opts.pageCapacity;
    },
    toString: function() {
      return "LocalSearch";
    },
  });
  function W(i) {
    this._opts = {};
    D.extend(this._opts, i);
    this._queryList = [];
    var e = this;
    eb.load("otherSearch", function() {
      e._asyncSearch();
    });
  }
  W.inherits(ee, "Geocoder");
  D.extend(W.prototype, {
    getPoint: function(e, T, i) {
      this._queryList.push({ method: "getPoint", arguments: [e, T, i] });
    },
    getLocation: function(e, T, i) {
      this._queryList.push({ method: "getLocation", arguments: [e, T, i] });
    },
    toString: function() {
      return "Geocoder";
    },
  });
  function cT(e) {
    e = e || {};
    this.config = {
      timeout: e.timeout || 1000 * 10,
      maximumAge: e.maximumAge || 0,
      enableHighAccuracy: e.enableHighAccuracy || false,
      SDKLocation: e.SDKLocation || false,
    };
    this._pendingCalls = [];
    var i = this;
    eb.load("otherSearch", function() {
      var T = i._pendingCalls.length;
      for (var hS = 0; hS < T; hS++) {
        var hT = i._pendingCalls[hS];
        i[hT.method].apply(i, hT.arguments);
      }
    });
  }
  D.extend(cT.prototype, {
    getCurrentPosition: function(e, i) {
      this._pendingCalls.push({
        method: "getCurrentPosition",
        arguments: arguments,
      });
    },
    getStatus: function() {
      return BMAP_STATUS_UNKNOWN_LOCATION;
    },
    enableSDKLocation: function() {
      if (f6()) {
        this.config.SDKLocation = true;
      }
    },
    disableSDKLocation: function() {
      this.config.SDKLocation = false;
    },
  });
  function gA() {
    this._queryList = [];
    var e = this;
    eb.load("otherSearch", function() {
      e._asyncSearch();
    });
  }
  gA.inherits(ee, "Boundary");
  D.extend(gA.prototype, {
    get: function(i, e) {
      this._queryList.push({ method: "get", arguments: [i, e] });
    },
    toString: function() {
      return "Boundary";
    },
  });
  function X(i) {
    i = i || {};
    i.renderOptions = i.renderOptions || {};
    this._opts = { renderOptions: { map: i.renderOptions.map || null } };
    this._queryList = [];
    var e = this;
    eb.load("otherSearch", function() {
      e._asyncSearch();
    });
  }
  X.inherits(ee, "LocalCity");
  D.extend(X.prototype, {
    get: function(e) {
      this._queryList.push({ method: "get", arguments: [e] });
    },
    toString: function() {
      return "LocalCity";
    },
  });
  function cO(e, T) {
    ee.call(this);
    this.markersList = [];
    this.destList = [];
    this.pointsList = [];
    this._opts = T;
    this.json = e;
    this.map = this._opts.renderOptions.map || null;
    this.sType = this._opts.sType;
    this.infoWindow = null;
    this.curPointIndex = 0;
    this.startName = "";
    this.endIndex = 1;
    this.endName = "";
    this.resCity = [0, 0, 0, 0, 0, 0, 0];
    this.locPois = [];
    this.curPageIndex = [1, 1, 1, 1, 1, 1, 1];
    this.totalPage = [1, 1, 1, 1, 1, 1, 1];
    this.resCount = [0, 0, 0, 0, 0, 0, 0];
    this.resType = [0, 0, 0, 0, 0, 0, 0];
    this.qInfo = [
      { n: "", c: 0, u: 0, x: 0, y: 0, t: -1 },
      { n: "", c: 0, u: 0, x: 0, y: 0, t: -1 },
      { n: "", c: 0, u: 0, x: 0, y: 0, t: -1 },
      { n: "", c: 0, u: 0, x: 0, y: 0, t: -1 },
      { n: "", c: 0, u: 0, x: 0, y: 0, t: -1 },
      { n: "", c: 0, u: 0, x: 0, y: 0, t: -1 },
      { n: "", c: 0, u: 0, x: 0, y: 0, t: -1 },
    ];
    this.curSelectedIndex = -1;
    this.tpList = [];
    this.tpListInMap = [];
    var i = this;
    eb.load("route", function() {});
  }
  cO.inherits(ee, "RouteAddr");
  function d4(T, i) {
    fB.call(this, T, i);
    this.QUERY_TYPE_BUSLIST = g;
    this.RETURN_TYPE_BUSLIST = bR;
    this.QUERY_TYPE_BUSLINE = bd;
    this.RETURN_TYPE_BUSLINE = dK;
    this._queryList = [];
    var e = this;
    eb.load("buslineSearch", function() {
      e._asyncSearch();
    });
  }
  var bo = e4.staticHost + "/wolfman/static/common/images/";
  d4._iconOpen = e4.apiIMG + "/iw_plus.gif";
  d4._iconClose = e4.apiIMG + "/iw_minus.gif";
  d4._stopUrl = bo + "new/bus-stop-1x_ddd4723.png";
  d4.inherits(fB, "BusLineSearch");
  D.extend(d4.prototype, {
    getBusList: function(e) {
      this._queryList.push({ method: "getBusList", arguments: [e] });
    },
    getBusLine: function(e) {
      this._queryList.push({ method: "getBusLine", arguments: [e] });
    },
    setGetBusListCompleteCallback: function(e) {
      this._opts.onGetBusListComplete = e || function() {};
    },
    setGetBusLineCompleteCallback: function(e) {
      this._opts.onGetBusLineComplete = e || function() {};
    },
    setBusListHtmlSetCallback: function(e) {
      this._opts.onBusListHtmlSet = e || function() {};
    },
    setBusLineHtmlSetCallback: function(e) {
      this._opts.onBusLineHtmlSet = e || function() {};
    },
    setPolylinesSetCallback: function(e) {
      this._opts.onPolylinesSet = e || function() {};
    },
  });
  function g3(i) {
    fB.call(this, i);
    i = i || {};
    this._options = {
      input: i.input || null,
      baseDom: i.baseDom || null,
      types: i.types || [],
      onSearchComplete: i.onSearchComplete || function() {},
    };
    this._loc.src = i.location || "全国";
    this._word = "";
    this._show = false;
    this._suggestion = null;
    this._inputValue = "";
    this._initialize();
    var e = this;
    eb.load(
      "autocomplete",
      function() {
        e._asyncSearch();
      },
      true
    );
  }
  g3.inherits(fB, "Autocomplete");
  D.extend(g3.prototype, {
    _initialize: function() {},
    show: function() {
      this._show = true;
    },
    hide: function() {
      this._show = false;
    },
    setTypes: function(e) {
      this._options.types = e;
    },
    setLocation: function(e) {
      this._loc.src = e;
    },
    search: function(e) {
      this._word = e;
    },
    setInputValue: function(e) {
      this._inputValue = e;
    },
    setSearchCompleteCallback: function(e) {
      this._options.onSearchComplete = e;
    },
  });
  var hg = function(i, e) {
    fB.call(this, i, e);
  };
  D.inherit(hg, fB, "BaseRoute");
  D.extend(hg.prototype, { clearResults: function() {} });
  window.BMAP_TRANSIT_POLICY_RECOMMEND = 0;
  window.BMAP_TRANSIT_POLICY_LEAST_TIME = 4;
  window.BMAP_TRANSIT_POLICY_LEAST_TRANSFER = 1;
  window.BMAP_TRANSIT_POLICY_LEAST_WALKING = 2;
  window.BMAP_TRANSIT_POLICY_AVOID_SUBWAYS = 3;
  window.BMAP_TRANSIT_POLICY_FIRST_SUBWAYS = 5;
  window.BMAP_LINE_TYPE_BUS = 0;
  window.BMAP_LINE_TYPE_SUBWAY = 1;
  window.BMAP_LINE_TYPE_FERRY = 2;
  window.BMAP_LINE_TYPE_TRAIN = 3;
  window.BMAP_LINE_TYPE_AIRPLANE = 4;
  window.BMAP_LINE_TYPE_COACH = 5;
  var dl = 3;
  var fk = 4;
  var hz = 1;
  var d0 = 2;
  var gQ = 5;
  var g7 = 6;
  window.BMAP_TRANSIT_TYPE_IN_CITY = 0;
  window.BMAP_TRANSIT_TYPE_CROSS_CITY = 1;
  window.BMAP_TRANSIT_PLAN_TYPE_ROUTE = 0;
  window.BMAP_TRANSIT_PLAN_TYPE_LINE = 1;
  window.BMAP_TRANSIT_TYPE_POLICY_TRAIN = 0;
  window.BMAP_TRANSIT_TYPE_POLICY_AIRPLANE = 1;
  window.BMAP_TRANSIT_TYPE_POLICY_COACH = 2;
  window.BMAP_INTERCITY_POLICY_LEAST_TIME = 0;
  window.BMAP_INTERCITY_POLICY_EARLY_START = 1;
  window.BMAP_INTERCITY_POLICY_CHEAP_PRICE = 2;
  function bJ(T, i) {
    hg.call(this, T, i);
    i = i || {};
    this.setPolicy(i.policy);
    this.setIntercityPolicy(i.intercityPolicy);
    this.setTransitTypePolicy(i.transitTypePolicy);
    this.setPageCapacity(i.pageCapacity);
    this.QUERY_TYPE = hJ;
    this.RETURN_TYPE = hD;
    this.ROUTE_TYPE = fX;
    this._overlays = [];
    this._curIndex = -1;
    this._opts._enableTraffic = i.enableTraffic || false;
    this._queryList = [];
    var e = this;
    eb.load(
      "route",
      function() {
        e._asyncSearch();
      },
      true
    );
  }
  bJ.MAX_PAGE_CAPACITY = 100;
  bJ.LINE_TYPE_MAPPING = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
  bJ.LINE_TYPE_MAPPING_CROSS_CITY = [0, 3, 4, 0, 0, 0, 5];
  D.inherit(bJ, hg, "TransitRoute");
  D.extend(bJ.prototype, {
    setPolicy: function(e) {
      if (
        e >= BMAP_TRANSIT_POLICY_RECOMMEND &&
        e <= BMAP_TRANSIT_POLICY_FIRST_SUBWAYS
      ) {
        this._opts.policy = e;
      } else {
        this._opts.policy = BMAP_TRANSIT_POLICY_RECOMMEND;
      }
    },
    setIntercityPolicy: function(e) {
      if (
        e >= BMAP_INTERCITY_POLICY_LEAST_TIME &&
        e <= BMAP_INTERCITY_POLICY_CHEAP_PRICE
      ) {
        this._opts.intercityPolicy = e;
      } else {
        this._opts.intercityPolicy = BMAP_INTERCITY_POLICY_LEAST_TIME;
      }
    },
    setTransitTypePolicy: function(e) {
      if (
        e >= BMAP_TRANSIT_TYPE_POLICY_TRAIN &&
        e <= BMAP_TRANSIT_TYPE_POLICY_COACH
      ) {
        this._opts.transitTypePolicy = e;
      } else {
        this._opts.transitTypePolicy = BMAP_TRANSIT_TYPE_POLICY_TRAIN;
      }
    },
    _internalSearch: function(i, e) {
      this._queryList.push({ method: "_internalSearch", arguments: [i, e] });
    },
    search: function(i, e) {
      this._queryList.push({ method: "search", arguments: [i, e] });
    },
    setPageCapacity: function(e) {
      if (typeof e === "string") {
        e = parseInt(e, 10);
        if (isNaN(e)) {
          this._opts.pageCapacity = bJ.MAX_PAGE_CAPACITY;
          return;
        }
      }
      if (typeof e !== "number") {
        this._opts.pageCapacity = bJ.MAX_PAGE_CAPACITY;
        return;
      }
      if (e >= 1 && e <= bJ.MAX_PAGE_CAPACITY) {
        this._opts.pageCapacity = Math.round(e);
      } else {
        this._opts.pageCapacity = bJ.MAX_PAGE_CAPACITY;
      }
    },
    toString: function() {
      return "TransitRoute";
    },
    _shortTitle: function(e) {
      return e.replace(/\(.*\)/, "");
    },
  });
  window.BMAP_HIGHLIGHT_STEP = 1;
  window.BMAP_HIGHLIGHT_ROUTE = 2;
  var cL = function(e, hS) {
    hg.call(this, e, hS);
    this._overlays = [];
    this._curIndex = -1;
    this._queryList = [];
    var T = this;
    var i = this._opts.renderOptions;
    if (
      i.highlightMode !== BMAP_HIGHLIGHT_STEP &&
      i.highlightMode !== BMAP_HIGHLIGHT_ROUTE
    ) {
      i.highlightMode = BMAP_HIGHLIGHT_STEP;
    }
    this._enableDragging = this._opts.renderOptions.enableDragging
      ? true
      : false;
    eb.load(
      "route",
      function() {
        T._asyncSearch();
      },
      true
    );
    if (this.init_d) {
      this.init_d();
    }
  };
  cL.ROAD_TYPE = [
    "",
    "环岛",
    "无属性道路",
    "主路",
    "高速连接路",
    "交叉点内路段",
    "连接道路",
    "停车场内部道路",
    "服务区内部道路",
    "桥",
    "步行街",
    "辅路",
    "匝道",
    "全封闭道路",
    "未定义交通区域",
    "POI连接路",
    "隧道",
    "步行道",
    "公交专用道",
    "提前右转道",
  ];
  D.inherit(cL, hg, "DWRoute");
  D.extend(cL.prototype, {
    search: function(T, e, i) {
      this._queryList.push({ method: "search", arguments: [T, e, i] });
    },
  });
  window.BMAP_DRIVING_POLICY_DEFAULT = 0;
  window.BMAP_DRIVING_POLICY_AVOID_HIGHWAYS = 3;
  window.BMAP_DRIVING_POLICY_FIRST_HIGHWAYS = 4;
  window.BMAP_DRIVING_POLICY_AVOID_CONGESTION = 5;
  window.BMAP_TRAFFICE_STATUS_NONE = 0;
  window.BMAP_TRAFFICE_STATUS_NORMAL = 1;
  window.BMAP_TRAFFICE_STATUS_SLOW = 2;
  window.BMAP_TRAFFICE_STATUS_JAM = 3;
  function fF(e, i) {
    cL.call(this, e, i);
    i = i || {};
    this._opts._enableTraffic = i.enableTraffic || false;
    this.setPolicy(i.policy);
    this.QUERY_TYPE = cQ;
    this.RETURN_TYPE = ff;
    this.ROUTE_TYPE = BMAP_ROUTE_TYPE_DRIVING;
  }
  D.inherit(fF, cL, "DrivingRoute");
  fF.prototype.setPolicy = function(e) {
    if (
      e >= BMAP_DRIVING_POLICY_DEFAULT &&
      e <= BMAP_DRIVING_POLICY_AVOID_CONGESTION
    ) {
      this._opts.policy = e;
    } else {
      this._opts.policy = BMAP_DRIVING_POLICY_DEFAULT;
    }
  };
  function bb(e, i) {
    cL.call(this, e, i);
    this.QUERY_TYPE = el;
    this.RETURN_TYPE = ej;
    this.ROUTE_TYPE = BMAP_ROUTE_TYPE_WALKING;
    this._enableDragging = false;
  }
  D.inherit(bb, cL, "WalkingRoute");
  function bn(e, i) {
    cL.call(this, e, i);
    this.QUERY_TYPE = S;
    this.ROUTE_TYPE = BMAP_ROUTE_TYPE_RIDING;
    this._enableDragging = false;
  }
  D.inherit(bn, cL, "RidingRoute");
  window.BMAP_MODE_DRIVING = "driving";
  window.BMAP_MODE_TRANSIT = "transit";
  window.BMAP_MODE_WALKING = "walking";
  window.BMAP_MODE_NAVIGATION = "navigation";
  var bf = {
    web: "//api.map.baidu.com/direction?",
    android: "bdapp://map/direction?",
    ios: "baidumap://map/direction?",
  };
  function hu(e) {
    this.opts = e || {};
  }
  D.extend(hu.prototype, {
    routeCall: function(hS, e, T) {
      var i = this;
      eb.load("route", function() {
        i._asyncSearch(hS, e, T);
      });
    },
  });
  bp.Map = c9;
  bp.MapType = b7;
  bp.Point = ht;
  bp.Pixel = ek;
  bp.Size = ea;
  bp.Bounds = dT;
  bp.TileLayer = cS;
  bp.Copyright = c6;
  bp.Projection = bp.Project = eo;
  bp.Convertor = ay;
  bp.RenderTypeUtils = a9;
  bp.Overlay = bm;
  bp.Label = fQ;
  bp.Marker = aD;
  bp.Icon = hc;
  bp.Polyline = al;
  bp.BezierCurve = fo;
  bp.PolylineMultipart = fm;
  bp.Polygon = g5;
  bp.Prism = ch;
  bp.Marker3D = cw;
  bp.GroundOverlay = cq;
  bp.InfoWindow = ao;
  bp.SimpleInfoWindow = hI;
  bp.Circle = dG;
  bp.Control = a8;
  bp.NavigationControl = du;
  bp.NavigationControl3D = eV;
  bp.CopyrightControl = dI;
  bp.ScaleControl = hi;
  bp.CityListControl = ec;
  bp.MapTypeControl = bD;
  bp.ZoomControl = cz;
  bp.LocationControl = bB;
  bp.LogoControl = ag;
  bp.DistanceTool = gM;
  bp.ContextMenu = cg;
  bp.MenuItem = fz;
  bp.OperationMask = ei;
  bp.Animation = p;
  bp.ViewAnimation = cN;
  bp.Transitions = co;
  bp.Event = bc;
  bp.trafficLayer = cf;
  bp.Geolocation = cT;
  bp.Geocoder = W;
  bp.Boundary = gA;
  bp.LocalCity = X;
  bp.LocalSearch = dO;
  bp.Autocomplete = g3;
  bp.BusLineSearch = d4;
  bp.WalkingRoute = bb;
  bp.RidingRoute = bn;
  bp.DrivingRoute = fF;
  bp.TransitRoute = bJ;
  bp.RouteSearch = hu;
  function d2(e, i) {
    for (var T in i) {
      e[T] = i[T];
    }
  }
  bp.verify();
  bp.apiLoad();
  bp.getSeckey();
})(BMapGL, "BMapGL");
