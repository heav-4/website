parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"xJOT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.app=exports.h=exports.Lazy=void 0;var e=1,n=2,r=3,t={},o=[],i=o.map,l=Array.isArray,u="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,f=function(e){var n="";if("string"==typeof e)return e;if(l(e)&&e.length>0)for(var r,t=0;t<e.length;t++)""!==(r=f(e[t]))&&(n+=(n&&" ")+r);else for(var t in e)e[t]&&(n+=(n&&" ")+t);return n},a=function(e,n){var r={};for(var t in e)r[t]=e[t];for(var t in n)r[t]=n[t];return r},s=function(e){return e.reduce(function(e,n){return e.concat(n&&!0!==n?"function"==typeof n[0]?[n]:s(n):0)},o)},c=function(e,n){return l(e)&&l(n)&&e[0]===n[0]&&"function"==typeof e[0]},d=function(e,n){if(e!==n)for(var r in a(e,n)){if(e[r]!==n[r]&&!c(e[r],n[r]))return!0;n[r]=e[r]}},p=function(e,n,r){for(var t,o,i=0,l=[];i<e.length||i<n.length;i++)t=e[i],o=n[i],l.push(o?!t||o[0]!==t[0]||d(o[1],t[1])?[o[0],o[1],o[0](r,o[1]),t&&t[2]()]:t:t&&t[2]());return l},v=function(e,n,r,t,o,i){if("key"===n);else if("style"===n)for(var l in a(r,t))r=null==t||null==t[l]?"":t[l],"-"===l[0]?e[n].setProperty(l,r):e[n][l]=r;else"o"===n[0]&&"n"===n[1]?((e.actions||(e.actions={}))[n=n.slice(2).toLowerCase()]=t)?r||e.addEventListener(n,o):e.removeEventListener(n,o):!i&&"list"!==n&&n in e?e[n]=null==t?"":t:null==t||!1===t||"class"===n&&!(t=f(t))?e.removeAttribute(n):e.setAttribute(n,t)},y=function(e,n,t){var o=e.props,i=e.type===r?document.createTextNode(e.name):(t=t||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:o.is}):document.createElement(e.name,{is:o.is});for(var l in o)v(i,l,null,o[l],n,t);for(var u=0,f=e.children.length;u<f;u++)i.appendChild(y(e.children[u]=z(e.children[u]),n,t));return e.node=i},h=function(e){return null==e?null:e.key},m=function(n,t,o,i,l,u){if(o===i);else if(null!=o&&o.type===r&&i.type===r)o.name!==i.name&&(t.nodeValue=i.name);else if(null==o||o.name!==i.name)t=n.insertBefore(y(i=z(i),l,u),t),null!=o&&n.removeChild(o.node);else{var f,s,c,d,p=o.props,g=i.props,w=o.children,x=i.children,C=0,k=0,A=w.length-1,L=x.length-1;for(var b in u=u||"svg"===i.name,a(p,g))("value"===b||"selected"===b||"checked"===b?t[b]:p[b])!==g[b]&&v(t,b,p[b],g[b],l,u);for(;k<=L&&C<=A&&null!=(c=h(w[C]))&&c===h(x[k]);)m(t,w[C].node,w[C],x[k]=z(x[k++],w[C++]),l,u);for(;k<=L&&C<=A&&null!=(c=h(w[A]))&&c===h(x[L]);)m(t,w[A].node,w[A],x[L]=z(x[L--],w[A--]),l,u);if(C>A)for(;k<=L;)t.insertBefore(y(x[k]=z(x[k++]),l,u),(s=w[C])&&s.node);else if(k>L)for(;C<=A;)t.removeChild(w[C++].node);else{b=C;for(var N={},E={};b<=A;b++)null!=(c=w[b].key)&&(N[c]=w[b]);for(;k<=L;)c=h(s=w[C]),d=h(x[k]=z(x[k],s)),E[c]||null!=d&&d===h(w[C+1])?(null==c&&t.removeChild(s.node),C++):null==d||o.type===e?(null==c&&(m(t,s&&s.node,s,x[k],l,u),k++),C++):(c===d?(m(t,s.node,s,x[k],l,u),E[d]=!0,C++):null!=(f=N[d])?(m(t,t.insertBefore(f.node,s&&s.node),f,x[k],l,u),E[d]=!0):m(t,s&&s.node,null,x[k],l,u),k++);for(;C<=A;)null==h(s=w[C++])&&t.removeChild(s.node);for(var b in N)null==E[b]&&t.removeChild(N[b].node)}}return i.node=t},g=function(e,n){for(var r in e)if(e[r]!==n[r])return!0;for(var r in n)if(e[r]!==n[r])return!0},w=function(e){return"object"==typeof e?e:C(e)},z=function(e,r){return e.type===n?((!r||r.type!==n||g(r.lazy,e.lazy))&&((r=w(e.lazy.view(e.lazy))).lazy=e.lazy),r):e},x=function(e,n,r,t,o,i){return{name:e,props:n,children:r,node:t,type:i,key:o}},C=function(e,n){return x(e,t,o,n,void 0,r)},k=function(n){return n.nodeType===r?C(n.nodeValue,n):x(n.nodeName.toLowerCase(),t,i.call(n.childNodes,k),n,void 0,e)},A=function(e){return{lazy:e,type:n}};exports.Lazy=A;var L=function(e,n){for(var r,o=[],i=[],u=arguments.length;u-- >2;)o.push(arguments[u]);for(;o.length>0;)if(l(r=o.pop()))for(u=r.length;u-- >0;)o.push(r[u]);else!1===r||!0===r||null==r||i.push(w(r));return n=n||t,"function"==typeof e?e(n,i):x(e,n,i,void 0,n.key)};exports.h=L;var b=function(e){var n={},r=!1,t=e.view,o=e.node,i=o&&k(o),f=e.subscriptions,a=[],c=function(e){v(this.actions[e.type],e)},d=function(e){return n!==e&&(n=e,f&&(a=p(a,s([f(n)]),v)),t&&!r&&u(y,r=!0)),n},v=(e.middleware||function(e){return e})(function(e,r){return"function"==typeof e?v(e(n,r)):l(e)?"function"==typeof e[0]||l(e[0])?v(e[0],"function"==typeof e[1]?e[1](r):e[1]):(s(e.slice(1)).map(function(e){e&&e[0](v,e[1])},d(e[0])),n):d(e)}),y=function(){r=!1,o=m(o.parentNode,o,i,i=w(t(n)),c)};v(e.init)};exports.app=b;
},{}],"K9GO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Parser=a,exports.toValue=exports.toPromise=exports.takeLeft=exports.takeRight=exports.recursiveParser=exports.optionalWhitespace=exports.whitespace=exports.endOfInput=exports.skip=exports.possibly=exports.lookAhead=exports.anythingExcept=exports.everythingUntil=exports.between=exports.choice=exports.sepBy1=exports.sepBy=exports.sequenceOf=exports.namedSequenceOf=exports.anyOfString=exports.letters=exports.letter=exports.digits=exports.digit=exports.regex=exports.str=exports.char=exports.errorMapTo=exports.mapTo=exports.many1=exports.many=exports.coroutine=exports.either=exports.succeedWith=exports.fail=exports.decide=exports.parse=exports.tapParser=exports.composeParsers=exports.pipeParsers=exports.withData=exports.mapData=exports.setData=exports.getData=void 0;const r=/[0-9]/,t=/^[0-9]+/,n=/[a-zA-Z]/,e=/^[a-zA-Z]+/,o=/^\s+/,s=(r,t=null)=>({isError:!1,error:null,target:r,data:t,index:0,result:null}),i=(r,t)=>({...r,isError:!0,error:t}),u=(r,t)=>({...r,result:t}),c=(r,t)=>({...r,data:t}),p=(r,t,n)=>({...r,result:t,index:n});function a(r){this.p=r}a.prototype.run=function(r){const t=s(r,null),n=this.p(t);return n.isError?{isError:!0,error:n.error,index:n.index,data:n.data}:{isError:!1,result:n.result,index:n.index,data:n.data}},a.prototype.fork=function(r,t,n){const e=s(r),o=this.p(e);return o.isError?t(o.error,o):n(o.result,o)},a.prototype["fantasy-land/map"]=function(r){const t=this.p;return new a(function(n){const e=t(n);return e.isError?e:u(e,r(e.result))})},a.prototype["fantasy-land/chain"]=function(r){const t=this.p;return new a(function(n){const e=t(n);return e.isError?e:r(e.result).p(e)})},a.prototype["fantasy-land/ap"]=function(r){const t=this.p;return new a(function(n){if(n.isError)return n;const e=t(n);if(e.isError)return e;const o=r.p(e);return o.isError?o:u(o,o.result(e.result))})},a.prototype.errorMap=function(r){const t=this.p;return new a(function(n){const e=t(n);return e.isError?i(e,r(e.error,e.index,e.data)):e})},a.prototype.errorChain=function(r){const t=this.p;return new a(function(n){const e=t(n);if(e.isError){const{error:t,index:n,data:o}=e;return r({error:t,index:n,data:o}).p({...e,isError:!1})}return e})},a.prototype.mapFromData=function(r){const t=this.p;return new a(function(n){const e=t(n);return e.error?e:u(e,r({result:e.result,data:e.data}))})},a.prototype.chainFromData=function(r){const t=this.p;return new a(function(n){const e=t(n);return e.error?e:r({result:e.result,data:e.data}).p(e)})},a.prototype.mapData=function(r){const t=this.p;return new a(function(n){const e=t(n);return c(e,r(e.data))})},a["fantasy-land/of"]=function(r){return new a(t=>u(t,r))},a.prototype.map=a.prototype["fantasy-land/map"],a.prototype.ap=a.prototype["fantasy-land/ap"],a.prototype.chain=a.prototype["fantasy-land/chain"],a.of=a["fantasy-land/of"];const f=new a(function(r){return r.isError?r:u(r,r.data)});exports.getData=f;const x=function(r){return new a(function(t){return t.isError?t:c(t,r)})};exports.setData=x;const l=function(r){return new a(function(t){return t.isError?t:c(t,r(t.data))})};exports.mapData=l;const E=function(r){return function(t){return x(t).chain(()=>r)}};exports.withData=E;const g=function(r){return new a(function(t){let n=t;for(const e of r)n=e.p(n);return n})};exports.pipeParsers=g;const d=function(r){return new a(function(t){return g([...r].reverse()).p(t)})};exports.composeParsers=d;const h=function(r){return new a(function(t){return r(t),t})};exports.tapParser=h;const w=function(r){return function(t){return r.run(t)}};exports.parse=w;const y=function(r){return new a(function(t){if(t.isError)return t;return r(t.result).p(t)})};exports.decide=y;const m=function(r){return new a(function(t){return t.isError?t:i(t,r)})};exports.fail=m;const $=a.of;exports.succeedWith=$;const P=function(r){return new a(function(t){if(t.isError)return t;const n=r.p(t);return u({...n,isError:!1},{isError:n.isError,value:n.isError?n.error:n.result})})};exports.either=P;const b=function(r){return a.of().chain(t=>{const n=r(),e=r=>{const t=n.next(r),o=t.value,s=t.done;if(!(s||o&&"function"==typeof o.chain))throw new Error(`[coroutine] yielded values must be Parsers, got ${t.value}.`);return s?a.of(o):o.chain(e)};return e()})};exports.coroutine=b;const v=function(r){return new a(function(t){if(t.isError)return t;const n=[];let e=t;for(;;){const t=r.p(e);if(t.isError)break;if(e=t,n.push(e.result),e.index>=e.target.length)break}return u(e,n)})};exports.many=v;const k=function(r){return new a(function(t){if(t.isError)return t;const n=v(r).p(t);return n.result.length?n:i(t,`ParseError 'many1' (position ${t.index}): Expecting to match at least one value`)})};exports.many1=k;const D=function(r){return new a(function(t){return t.isError?t:u(t,r(t.result))})};exports.mapTo=D;const O=r=>new a(t=>t.isError?i(t,r(t.error,t.index,t.data)):t);exports.errorMapTo=O;const M=function(r){if(!r||1!==r.length)throw new TypeError(`char must be called with a single character, but got ${r}`);return new a(function(t){if(t.isError)return t;const{target:n,index:e}=t;return e<n.length?n[e]===r?p(t,r,e+1):i(t,`ParseError (position ${e}): Expecting character '${r}', got '${n[e]}'`):i(t,`ParseError (position ${e}): Expecting character '${r}', but got end of input.`)})};exports.char=M;const T=function(r){if(!r||r.length<1)throw new TypeError(`str must be called with a string with length > 1, but got ${r}`);return new a(function(t){const{target:n,index:e}=t,o=n.slice(e);return o.length>=1?o.startsWith(r)?p(t,r,e+r.length):i(t,`ParseError (position ${e}): Expecting string '${r}', got '${o.slice(0,r.length)}...'`):i(t,`ParseError (position ${e}): Expecting string '${r}', but got end of input.`)})};exports.str=T;const S=function(r){const t=Object.prototype.toString.call(r);if("[object RegExp]"!==t)throw new TypeError(`regex must be called with a Regular Expression, but got ${t}`);if("^"!==r.toString()[1])throw new Error("regex parsers must contain '^' start assertion.");return new a(function(t){if(t.isError)return t;const{target:n,index:e}=t,o=n.slice(e);if(o.length>=1){const n=o.match(r);return n?p(t,n[0],e+n[0].length):i(t,`ParseError (position ${e}): Expecting string matching '${r}', got '${o.slice(0,5)}...'`)}return i(t,`ParseError (position ${e}): Expecting string matching '${r}', but got end of input.`)})};exports.regex=S;const j=new a(function(t){if(t.isError)return t;const{target:n,index:e}=t;return n.length>e?n.length&&n[e]&&r.test(n[e])?p(t,n[e],e+1):i(t,`ParseError (position ${e}): Expecting digit, got '${n[e]}'`):i(t,`ParseError (position ${e}): Expecting digit, but got end of input.`)});exports.digit=j;const A=S(t).errorMap((r,t)=>`ParseError (position ${t}): Expecting digits`);exports.digits=A;const B=new a(function(r){if(r.isError)return r;const{index:t,target:e}=r;return e.length>t?e.length&&e[t]&&n.test(e[t])?p(r,e[t],t+1):i(r,`ParseError (position ${t}): Expecting letter, got '${e[t]}'`):i(r,`ParseError (position ${t}): Expecting letter, but got end of input.`)});exports.letter=B;const W=S(e).errorMap((r,t)=>`ParseError (position ${t}): Expecting letters`);exports.letters=W;const q=function(r){return new a(function(t){if(t.isError)return t;const{target:n,index:e}=t;return n.length>e?r.includes(n[e])?p(t,n[e],e+1):i(t,`ParseError (position ${e}): Expecting any of the string "${r}", got ${n[e]}`):i(t,`ParseError (position ${e}): Expecting any of the string "${r}", but got end of input.`)})};exports.anyOfString=q;const I=function(r){return new a(function(t){if(t.isError)return t;const n={};let e=t;for(const[o,s]of r){const r=s.p(e);if(r.isError)return r;e=r,n[o]=r.result}return u(e,n)})};exports.namedSequenceOf=I;const R=function(r){return new a(function(t){if(t.isError)return t;const n=r.length,e=new Array(n);let o=t;for(let s=0;s<n;s++){const t=r[s].p(o);if(t.isError)return t;o=t,e[s]=t.result}return u(o,e)})};exports.sequenceOf=R;const U=function(r){return function(t){return new a(function(n){if(n.isError)return n;let e=n,o=null;const s=[];for(;;){const n=t.p(e),i=r.p(n);if(n.isError){o=n;break}if(s.push(n.result),i.isError){e=n;break}e=i}return o?0===s.length?u(n,s):o:u(e,s)})}};exports.sepBy=U;const z=function(r){return function(t){return new a(function(n){if(n.isError)return n;const e=U(r)(t).p(n);return e.isError?e:0===e.result.length?i(n,`ParseError 'sepBy1' (position ${n.index}): Expecting to match at least one separated value`):e})}};exports.sepBy1=z;const F=function(r){return new a(function(t){if(t.isError)return t;let n=null;for(const e of r){const r=e.p(t);if(!r.isError)return r;(!n||n&&r.index>n.index)&&(n=r)}return n})};exports.choice=F;const L=function(r){return function(t){return function(n){return R([r,n,t]).map(([r,t])=>t)}}};exports.between=L;const V=function(r){return new a(t=>{if(t.isError)return t;const n=[];let e=t;for(;;){if(!r.p(e).isError)break;{const{index:r,target:t}=e,o=t[r];if(!o)return i(e,`ParseError 'everythingUntil' (position ${e.index}): Unexpected end of input.`);n.push(o),e=p(e,o,r+1)}}return u(e,n.join(""))})};exports.everythingUntil=V;const Z=function(r){return new a(function(t){if(t.isError)return t;const{target:n,index:e}=t,o=r.p(t);return o.isError?p(t,n[e],e+1):i(t,`ParseError 'anythingExcept' (position ${e}): Matched '${o.result}' from the exception parser`)})};exports.anythingExcept=Z;const _=function(r){return new a(function(t){if(t.isError)return t;const n=r.p(t);return n.isError?i(t,n.error):u(t,n.result)})};exports.lookAhead=_;const C=function(r){return new a(function(t){if(t.isError)return t;const n=r.p(t);return n.isError?u(t,null):n})};exports.possibly=C;const G=function(r){return new a(function(t){if(t.isError)return t;const n=r.p(t);return n.isError?n:u(n,t.result)})};exports.skip=G;const H=new a(function(r){if(r.isError)return r;const{target:t,index:n}=r;return n!==t.length?i(r,`ParseError 'endOfInput' (position ${n}): Expected end of input but got '${t.slice(n,n+1)}'`):u(r,null)});exports.endOfInput=H;const J=S(o).errorMap((r,t)=>`ParseError 'many1' (position ${t}): Expecting to match at least one value`);exports.whitespace=J;const K=C(J).map(r=>r||"");exports.optionalWhitespace=K;const N=function(r){return new a(function(t){return r().p(t)})};exports.recursiveParser=N;const Q=r=>t=>r.chain(()=>t);exports.takeRight=Q;const X=r=>t=>r.chain(r=>t.map(()=>r));exports.takeLeft=X;const Y=r=>r.isError?Promise.reject({error:r.error,index:r.index,data:r.data}):Promise.resolve(r.result);exports.toPromise=Y;const rr=r=>{if(r.isError){const t=new Error(r.error);throw t.parseIndex=r.index,t.data=r.data,t}return r.result};exports.toValue=rr;
},{}],"Vs7J":[function(require,module,exports) {
function e(e,n,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(n-e)*o:o<.5?n:o<2/3?e+(n-e)*(2/3-o)*6:e}module.exports=e;
},{}],"t5c7":[function(require,module,exports) {
var r=require("./hueToRgb");function e(e,u,o){var a,i,n;if(e/=360,o/=100,0===(u/=100))a=i=n=o;else{var t=o<.5?o*(1+u):o+u-o*u,v=2*o-t;a=r(v,t,e+1/3),i=r(v,t,e),n=r(v,t,e-1/3)}return{r:255*a,g:255*i,b:255*n}}module.exports=e;
},{"./hueToRgb":"Vs7J"}],"zHQl":[function(require,module,exports) {
function t(t,r,n){var o=(((255&Math.round(t))<<16)+((255&Math.round(r))<<8)+(255&Math.round(n))).toString(16).toUpperCase();return"#"+("000000".substring(o.length)+o)}module.exports=t;
},{}],"kNPt":[function(require,module,exports) {
var r=require("./hslToRgb"),e=require("./rgbToHex");function o(o,u,b){var g=r(o,u,b);return e(g.r,g.g,g.b)}module.exports=o;
},{"./hslToRgb":"t5c7","./rgbToHex":"zHQl"}],"ftKW":[function(require,module,exports) {
var e=require("tie-dye/hslToHex");function r(r,t,a){var n,c;if(t=t||50,a=a||50,-1!=[null,void 0,[],{},"",new RegExp].indexOf(r))return e(0,0,a);switch(r.constructor){case Function:case RegExp:n=r.toString();break;case Object:case Array:n=JSON.stringify(r);break;case Number:c=r;break;case Boolean:return e(r?120:0,t,a);case String:default:n=r}return void 0===c&&(c=0,n.split("").forEach(function(e){c+=e.charCodeAt(0)})),c=Math.abs(c*c),e(c%360,t,a)}module.exports=r;
},{"tie-dye/hslToHex":"kNPt"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("hyperapp"),t=s(require("arcsecond")),r=o(require("hashbow"));function o(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var i=o?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(r,s,i):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}const i=t.digits.map(parseInt),n=t.coroutine(function*(){const e=(yield t.possibly(t.choice([t.char("+"),t.char("-")])))||"+",r=yield t.digits;return parseInt(e+r)}),c=t.coroutine(function*(){const e=(yield t.possibly(i))||1;yield t.choice([t.char("d"),t.char("u")]);return{numDice:e,die:yield i,offset:(yield t.possibly(n))||0}}),u=({numDice:e,die:t,offset:r})=>{let o=r;for(let l=0;l<e;l++)o+=Math.floor(Math.random()*t)+1;return o},a=e=>{const t=new Map;for(let r=1;r<=e;r++)t.set(r,1/e);return t},d=(e,t)=>{const r=new Map;for(const[o,l]of e)for(const[e,s]of t){const t=o+e;r.set(t,(r.get(t)||0)+l*s)}return r},h=(e,t)=>{const r=new Map;for(const[o,l]of e)r.set(o+t,l);return r},f=({numDice:e,die:t,offset:r})=>{const o=e+r,l=e*t+r,s=a(t);let i=s;for(let n=1;n<e;n++)i=d(i,s);return{upperBound:l,lowerBound:o,probabilities:i=h(i,r)}},p=e=>`${(100*e).toFixed(1)}%`,y=t=>{let r=[],o=0;for(const[e,s]of t)s>o&&(o=s);let l=0;for(const[s,i]of t){const t=i/o;r.push((0,e.h)("rect",{x:50*l,y:100-100*t,width:49,height:100*t,style:{fill:`rgb(0, 0, ${255*t})`}},[(0,e.h)("title",{},p(i))])),r.push((0,e.h)("text",{x:50*l+25,y:120,width:50,"text-anchor":"middle"},s)),l++}return(0,e.h)("svg",{height:130,width:50*l+50,class:"distribution"},r)},b=e=>null===e.dice?{...e,rolls:[]}:{...e,rolls:[{result:u(e.dice),dice:e.dice}].concat(e.rolls).slice(0,50)},w=(e,t)=>{const r=c.run(t);return console.log(r),r.isError?{...e,rawDice:t,error:r.error,dice:null}:(r.result.stats=f(r.result),r.result.raw=t,{...e,rawDice:t,error:null,dice:r.result})},g=t=>{const o=t.dice.raw;return(0,e.h)("tr",{},[(0,e.h)("td",{class:"raw-dice",style:{color:(0,r.default)(o)},onClick:e=>w(e,o)},o),(0,e.h)("td",{class:"result"},t.result),(0,e.h)("td",{class:"outcome-probability"},p(t.dice.stats.probabilities.get(t.result)))])},v=(e,t)=>w(e,t.target.value);(0,e.app)({init:w({rolls:[]},"d6"),view:t=>(0,e.h)("div",{},[(0,e.h)("div",{class:"controls"},[(0,e.h)("input",{type:"text",value:t.rawDice,onInput:v}),(0,e.h)("button",{onClick:b,class:"roll-button"},"Roll")]),null!==t.error?(0,e.h)("div",{class:"error"},t.error):null,t.dice&&t.dice.stats&&t.dice.stats.probabilities&&y(t.dice.stats.probabilities),t.rolls.length>0?(0,e.h)("h1",{},t.rolls[0].result):null,(0,e.h)("table",{class:"previous-rolls"},[(0,e.h)("tr",{},[(0,e.h)("th",{},"Dice"),(0,e.h)("th",{},"Result"),(0,e.h)("th",{},"Chance")])].concat(t.rolls.map(g)))]),node:document.getElementById("app")});
},{"hyperapp":"xJOT","arcsecond":"K9GO","hashbow":"ftKW"}]},{},["Focm"], null)
//# sourceMappingURL=src.3854b3a8.js.map