"use strict";(self.webpackChunkblip_screen_templates=self.webpackChunkblip_screen_templates||[]).push([[3089],{3089:function(e,t,n){n.r(t),n.d(t,{a:function(){return s},b:function(){return a},c:function(){return r},d:function(){return f},g:function(){return o},p:function(){return i}});var o=function e(t){return null===t?null:t.classList.contains("element_scrolled")||"BODY"===(null===t||void 0===t?void 0:t.tagName)?t:e(t.offsetParent)};function f(e){var t=e.actionElement,n=e.changedElement,o=e.intoView,f=o||document.body,i=f.offsetParent,r=!!f.classList.contains("element_scrolled"),s=r?t.offsetTop-f.scrollTop+i.offsetTop:t.offsetTop-window.scrollY,a=r?t.offsetLeft+i.offsetLeft:t.offsetLeft,c=(null===n||void 0===n?void 0:n.offsetHeight)>window.innerHeight-s?s-(null===n||void 0===n?void 0:n.offsetHeight)-16:s+(null===t||void 0===t?void 0:t.offsetHeight)+16,l=(null===n||void 0===n?void 0:n.offsetWidth)>window.innerWidth-a?a+(null===t||void 0===t?void 0:t.offsetWidth)-(null===n||void 0===n?void 0:n.offsetWidth):a,u=window.innerHeight-(null===n||void 0===n?void 0:n.offsetHeight),d=window.innerWidth-(null===n||void 0===n?void 0:n.offsetWidth);return{top:c<8?8:c>u?u-8:c,left:l<0?0:l>d?d:l}}function i(e){var t=e.actionElement,n=e.changedElement,o=e.intoView,f=o||document.body,i=f.offsetHeight<n.offsetHeight?window.screen.height:f.offsetHeight,r=f.offsetWidth<n.offsetWidth?window.screen.width:f.offsetWidth,s=i-t.offsetTop,a=r-t.offsetLeft;return{y:s<n.offsetHeight+t.offsetHeight?"top":"bottom",x:a<n.offsetWidth?"right":"left"}}var r=function(e){for(var t=[],n=1;n<=e;){var o={id:n,label:"Frame - ".concat(n)};t.push(o),n++}return t},s=function(e){var t=Math.max.apply(null,e.map((function(e){return e.offsetHeight})));return e.filter((function(e){return e.offsetHeight==t})).map((function(e){return e.offsetHeight}))},a=function(e){var t;switch(e){case"none":default:t=0;break;case"half":t=4;break;case"1":t=8;break;case"2":t=16;break;case"3":t=24;break;case"4":t=32;break;case"5":t=40;break;case"6":t=48;break;case"7":t=56;break;case"8":t=64;break;case"9":t=72;break;case"10":t=80;break;case"11":t=88;break;case"12":t=96}return t}}}]);
//# sourceMappingURL=3089.4246d3cf.chunk.js.map