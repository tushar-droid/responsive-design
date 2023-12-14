(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),p=t(667),c=t.n(p),s=new URL(t(426),t.b),l=i()(o()),f=c()(s);l.push([n.id,`@font-face {\n    font-family: 'bebas';\n    src: url(${f});\n    font-weight: 900;\n    font-style: bold;\n}\n\n\n\n\n\n*{\n    padding: 0;\n    margin: 0;\n    font-family: 'bebas';\n}\n\n\n.header{\n    min-height: 100vh;\n    background: linear-gradient(170deg, #00b2ca 75%, white 25%);\n    \n}\n\n.header-left{\n    float: left;\n    margin-left: 10rem;\n    margin-top: 5rem;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    position: relative;\n    /* background-color: black; */\n    width: 32%;\n    \n}\n\n.profile{\n    width: 100%;\n    min-width: 250px;\n    display: block;\n}\n\n.name{\n    color: white;\n    position: absolute;\n    bottom: 2%;\n    left: 50%;\n    transform: translateX(-30%);\n    font-size: 6vw;\n    width: 100%;\n    font-weight: 100;\n}\n\n.header-right h2{\n    color: #000500;\n}\n.header-right{\n    background-color: white;\n    color: #8d9499;\n    margin-top: 7%;\n    font-size: 2.5vw;\n    margin-left: calc(10rem + 32%);\n    margin-right: 10rem;\n    padding: 5rem 2rem 1rem 2rem;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n.icons-container{\n    margin-left: auto;\n    max-width: 50%;\n}\n.icons{\n    display: flex;\n    list-style: none;\n    gap:4%;\n    justify-content: flex-end;\n    color: #000500\n}\n\n\n.projects{\n    margin-top: 5%;\n    font-size: 2.5vw;\n    padding: 2% 5% 8% 5%;\n}\n\n.projects-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\n    \n    grid-gap: 2em;\n    margin-top: 2%;\n    /* row-gap: 6.667%; */\n}\n\n.project-card{\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    height: 65vh;\n    \n}\n\n.top{\n    height: 60%;\n    background-color: #593f62;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #f2e8cf;\n    font-size: 3rem;\n}\n\n.details{    \n    padding:2%  10% ;\n    height: 40%;\n}\n\n.details-title{\n    display: flex;\n    font-weight: 100;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.details-text{\n    margin-top: 10%;\n    font-size:x-large;\n    color: #8d9499;\n}\n\n.icons-list{\n    flex: 1;\n    list-style: none;\n    display: flex;\n    justify-content: flex-end;\n    gap: 10%;\n}\n\n.icons-list > li{\n    line-height: 0;\n}\n\n\nfooter{\n    background-color: #00b2ca;\n    padding:5% 10%;\n    display: flex;\n    color: #f2e8cf;\n}\n.footer-heading{\n    font-size: 4rem;\n}\n\n.footer-left{\n    flex:2;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    font-size: 2rem;\n    margin-right: 20%;\n    justify-content: center;\n\n}\n.footer-right{\n    flex: 4;\n}\n\n.footer-icons{\n    display: flex;\n    list-style: none;\n    gap:4rem;\n    color: #000500;\n    font-size: 4rem;\n}\n.footer-img{\n    width: 100%;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n\n}\n\n.footer-connect-icons{\n    fill: #f2e8cf; \n    height:2.5rem;\n    transform: translateY(30%);\n    padding-right: 0.6rem;\n}\n\n@media only screen and (max-width: 1200px) {\n    .header{\n        min-height: 70vh;\n    }\n    .header-right{\n        margin-right: 5%;\n        margin-top: 12rem;\n        margin-left: 16rem;   \n        padding-top: 10%;\n    }\n\n    .header-left{\n        margin-right: 1rem;\n        margin-left: 5%;\n        width: 40%;\n    }\n\n    .name{\n        top:3rem;\n        left: 120%;    \n    }\n\n    .projects-container{\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(350px, 0.8fr));\n        grid-gap: 2em;\n        margin-top: 2%;\n        justify-content: center;        \n    }\n\n    .footer-right{\n        flex: 3;\n    }\n    \n    .footer-right > img{        \n        height: 100%;\n        object-fit: cover;\n    }\n\n    .footer-left h2{\n        font-size: 6vw;\n    }\n\n    .footer-left{\n        font-size: 2vw;\n        margin-right: 10%;\n\n    }\n    .footer{\n        padding-left: 5%;\n        padding-right: 5%;\n    }\n\n    .footer-icons{\n        font-size: 4vw;\n        gap:2rem;\n    }\n  }\n\n  /* For mobile phones */\n  @media only screen and (max-width: 600px) {\n    \n  }`,""]);const d=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var p=0;p<this.length;p++){var c=this[p][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],p=0;p<n.length;p++){var c=n[p],s=r.base?c[0]+r.base:c[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var d=t(f),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(g);else{var u=o(g,r);r.byIndex=p,e.splice(p,0,{identifier:f,updater:u,references:1})}i.push(f)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var p=t(a[i]);e[p].references--}for(var c=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},426:(n,e,t)=>{n.exports=t.p+"12e3683f9192436a7be8.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),p=t(565),c=t.n(p),s=t(216),l=t.n(s),f=t(589),d=t.n(f),g=t(28),u={};u.styleTagTransform=d(),u.setAttributes=c(),u.insert=i().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=l(),e()(g.Z,u),g.Z&&g.Z.locals&&g.Z.locals;const m=t.p+"0589d66f0f53258a32e5.jpg",h=t.p+"569b2b2c36dd15a4689c.jpg",x=document.querySelector(".profile"),b=document.querySelector(".footer-img");x.src=m,b.src=h})()})();