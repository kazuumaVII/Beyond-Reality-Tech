(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2711:function(e){e.exports=function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=(i(n(1)),n(6)),o=i(s),r=i(n(7)),c=i(n(8)),l=i(n(9)),d=i(n(10)),u=i(n(11)),h=i(n(14)),m=[],f=!1,p={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(f=!0),f)return m=(0,u.default)(m,p),(0,d.default)(m,p.once),m},g=function(){m=(0,h.default)(),v()},b=function(){m.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})};e.exports={init:function(e){p=a(p,e),m=(0,h.default)();var t,n=document.all&&!window.atob;return!0===(t=p.disable)||"mobile"===t&&l.default.mobile()||"phone"===t&&l.default.phone()||"tablet"===t&&l.default.tablet()||"function"==typeof t&&!0===t()||n?b():(p.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),p.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",p.easing),document.querySelector("body").setAttribute("data-aos-duration",p.duration),document.querySelector("body").setAttribute("data-aos-delay",p.delay),"DOMContentLoaded"===p.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===p.startEvent?window.addEventListener(p.startEvent,function(){v(!0)}):document.addEventListener(p.startEvent,function(){v(!0)}),window.addEventListener("resize",(0,r.default)(v,p.debounceDelay,!0)),window.addEventListener("orientationchange",(0,r.default)(v,p.debounceDelay,!0)),window.addEventListener("scroll",(0,o.default)(function(){(0,d.default)(m,p.once)},p.throttleDelay)),p.disableMutationObserver||c.default.ready("[data-aos]",g),m)},refresh:v,refreshHard:g}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}function i(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":a(t))||t&&"object"==(void 0===t?"undefined":a(t))&&v.call(t)==r)return o;if(n(e)){var t,i="function"==typeof e.valueOf?e.valueOf():e;e=n(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;var s=d.test(e=e.replace(c,""));return s||u.test(e)?h(e.slice(2),s?2:8):l.test(e)?o:+e}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",o=NaN,r="[object Symbol]",c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,u=/^0o[0-7]+$/i,h=parseInt,m="object"==(void 0===t?"undefined":a(t))&&t&&t.Object===Object&&t,f="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,p=m||f||Function("return this")(),v=Object.prototype.toString,g=Math.max,b=Math.min,x=function(){return p.Date.now()};e.exports=function(e,t,a){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(s);return n(a)&&(o="leading"in a?!!a.leading:o,r="trailing"in a?!!a.trailing:r),function(e,t,a){function o(t){var n=u,i=h;return u=h=void 0,j=t,f=e.apply(i,n)}function r(e){var n=e-v,i=e-j;return void 0===v||n>=t||n<0||w&&i>=m}function c(){var e,n,i,a=x();return r(a)?l(a):void(p=setTimeout(c,(e=a-v,n=a-j,i=t-e,w?b(i,m-n):i)))}function l(e){return p=void 0,y&&u?o(e):(u=h=void 0,f)}function d(){var e,n=x(),i=r(n);if(u=arguments,h=this,v=n,i){if(void 0===p)return j=e=v,p=setTimeout(c,t),_?o(e):f;if(w)return p=setTimeout(c,t),o(v)}return void 0===p&&(p=setTimeout(c,t)),f}var u,h,m,f,p,v,j=0,_=!1,w=!1,y=!0;if("function"!=typeof e)throw TypeError(s);return t=i(t)||0,n(a)&&(_=!!a.leading,m=(w="maxWait"in a)?g(i(a.maxWait)||0,t):m,y="trailing"in a?!!a.trailing:y),d.cancel=function(){void 0!==p&&clearTimeout(p),j=0,u=v=h=p=void 0},d.flush=function(){return void 0===p?f:l(x())},d}(e,t,{leading:o,maxWait:t,trailing:r})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e){var t=void 0===e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}function i(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":a(t))||t&&"object"==(void 0===t?"undefined":a(t))&&p.call(t)==o)return s;if(n(e)){var t,i="function"==typeof e.valueOf?e.valueOf():e;e=n(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;var h=l.test(e=e.replace(r,""));return h||d.test(e)?u(e.slice(2),h?2:8):c.test(e)?s:+e}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,u=parseInt,h="object"==(void 0===t?"undefined":a(t))&&t&&t.Object===Object&&t,m="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,f=h||m||Function("return this")(),p=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return f.Date.now()};e.exports=function(e,t,a){function s(t){var n=d,i=u;return d=u=void 0,x=t,m=e.apply(i,n)}function o(e){var n=e-p,i=e-x;return void 0===p||n>=t||n<0||_&&i>=h}function r(){var e,n,i,a=b();return o(a)?c(a):void(f=setTimeout(r,(e=a-p,n=a-x,i=t-e,_?g(i,h-n):i)))}function c(e){return f=void 0,w&&d?s(e):(d=u=void 0,m)}function l(){var e,n=b(),i=o(n);if(d=arguments,u=this,p=n,i){if(void 0===f)return x=e=p,f=setTimeout(r,t),j?s(e):m;if(_)return f=setTimeout(r,t),s(p)}return void 0===f&&(f=setTimeout(r,t)),m}var d,u,h,m,f,p,x=0,j=!1,_=!1,w=!0;if("function"!=typeof e)throw TypeError("Expected a function");return t=i(t)||0,n(a)&&(j=!!a.leading,h=(_="maxWait"in a)?v(i(a.maxWait)||0,t):h,w="trailing"in a?!!a.trailing:w),l.cancel=function(){void 0!==f&&clearTimeout(f),x=0,d=p=u=f=void 0},l.flush=function(){return void 0===f?m:c(b())},l}}).call(t,function(){return this}())},function(e,t){"use strict";function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,i=void 0;for(n=0;n<t.length;n+=1)if((i=t[n]).dataset&&i.dataset.aos||i.children&&e(i.children))return!0;return!1}(t.concat(n)))return a()})}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){};t.default={isSupported:function(){return!!n()},ready:function(e,t){var s=window.document,o=new(n())(i);a=t,o.observe(s.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e)}return i(e,[{key:"phone",value:function(){var e=n();return!(!a.test(e)&&!s.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!o.test(e)&&!r.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var i=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0===i||"false"!==i&&(n||"true"===i)||e.node.classList.remove("aos-animate")};t.default=function(e,t){var i=window.pageYOffset,a=window.innerHeight;e.forEach(function(e,s){n(e,a+i,t)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=(i=n(12))&&i.__esModule?i:{default:i};t.default=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,a.default)(e.node,t.offset)}),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=(i=n(13))&&i.__esModule?i:{default:i};t.default=function(e,t){var n=0,i=0,s=window.innerHeight,o={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(o.offset&&!isNaN(o.offset)&&(i=parseInt(o.offset)),o.anchor&&document.querySelectorAll(o.anchor)&&(e=document.querySelectorAll(o.anchor)[0]),n=(0,a.default)(e).top,o.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=s/2;break;case"bottom-center":n+=s/2+e.offsetHeight;break;case"center-center":n+=s/2+e.offsetHeight/2;break;case"top-top":n+=s;break;case"bottom-top":n+=e.offsetHeight+s;break;case"center-top":n+=e.offsetHeight/2+s}return o.anchorPlacement||o.offset||isNaN(t)||(i=t),n+i}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2730)}])},4506:function(e,t,n){"use strict";n.d(t,{oU:function(){return r},pR:function(){return o}});var i=n(5893);n(7294);var a=n(5675),s=n.n(a);n(6276);let o=e=>{let{title:t,description:n,pathImg:a}=e;return(0,i.jsxs)("div",{className:"mainCardsInfo",children:[(0,i.jsx)("div",{className:"mainCardsInfo__img",children:a&&(0,i.jsx)(s(),{src:a,alt:"Image vr",fill:!0})}),(0,i.jsx)("h5",{children:t}),(0,i.jsx)("hr",{}),(0,i.jsx)("p",{children:n}),(0,i.jsx)("button",{children:"TRY IT NOW"})]})},r=e=>{let{title:t,description:n,index:a}=e;return(0,i.jsxs)("div",{className:"circleNumber",children:[(0,i.jsx)("div",{className:"circleNumber__circle",children:(0,i.jsx)("div",{className:"circleNumber__circle__wrapper",children:(0,i.jsx)("h5",{children:t})})}),(0,i.jsxs)("div",{className:"circleNumber__info",children:[(0,i.jsx)(s(),{src:"/assets/arrow.svg",alt:"Fleche",width:23,height:23}),(0,i.jsx)("p",{children:n})]})]})}},6276:function(e,t,n){"use strict";n.d(t,{L:function(){return s},a:function(){return a}});var i=n(7294);let a=e=>{let[t,n]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let i=window.matchMedia(e);i.matches!==t&&n(i.matches);let a=()=>{n(i.matches)};return i.addEventListener("change",a),()=>{i.removeEventListener("change",a)}},[e,t]),t},s=e=>{let[t,n]=(0,i.useState)("");return(0,i.useEffect)(()=>{let t=()=>{var t,i;let a=(null===(t=e.current)||void 0===t?void 0:t.scrollTop)||0,s=(null===(i=e.current)||void 0===i?void 0:i.querySelectorAll("section"))||[],o=document.querySelectorAll(".header__nav a");s.forEach(e=>{let t=e.offsetTop-200,i=t+e.offsetHeight,s=document.querySelector('.header__nav a[data-scroll="'.concat(e.id,'"]'));a>=t&&a<i&&(n(e.id),s&&(o.forEach(e=>e.classList.remove("active")),s.classList.add("active")))})};if(e.current)return e.current.addEventListener("scroll",t),()=>{var n;return null===(n=e.current)||void 0===n?void 0:n.removeEventListener("scroll",t)}},[e]),t}},5778:function(e,t,n){"use strict";n.r(t);var i=n(5893);n(7294);var a=n(5675),s=n.n(a);let o=()=>(0,i.jsx)("section",{id:"about",className:"mainAbout",children:(0,i.jsxs)("div",{className:"topContainer",children:[(0,i.jsxs)("div",{className:"topContainer__info",id:"left",children:[(0,i.jsxs)("div",{className:"topContainer__info__text",children:[(0,i.jsxs)("h3",{id:"titleAbout",children:[(0,i.jsx)("span",{className:"firstLinear",children:"Dive"})," Into The Depths Of"," ",(0,i.jsx)("span",{className:"secondLinear",children:"Virtual Reality"})]}),(0,i.jsx)("p",{children:"Step into a universe where the tangible and intangible merge, where every step takes you to new worlds, and where the magic of virtual reality redefines your perception of existence."})]}),(0,i.jsxs)("div",{className:"topContainer__info__button",children:[(0,i.jsx)("button",{children:"BUID YOUR WORLD"}),(0,i.jsx)("div",{className:"topContainer__info__button__img",children:(0,i.jsx)(s(),{src:"/assets/arrowRight.svg",alt:"Fleche",fill:!0})})]})]}),(0,i.jsx)("div",{className:"topContainer__image",id:"right",children:(0,i.jsx)(s(),{src:"/assets/girlVr.png",alt:"Image vr",fill:!0})})]})});t.default=o},4910:function(e,t,n){"use strict";n.r(t);var i=n(5893),a=n(7294),s=n(5675),o=n.n(s);let r=()=>{let[e,t]=(0,a.useState)(!0),[n,s]=(0,a.useState)(!0),[r,c]=(0,a.useState)(!1),[l,d]=(0,a.useState)(!1),[u,h]=(0,a.useState)(!1),[m,f]=(0,a.useState)({firstName:"",lastName:"",email:"",phone:"",subject:"",message:""});console.log(u,"lalalal"),(0,a.useEffect)(()=>{r&&n&&(d(!0),setTimeout(()=>{d(!1),h(!0),setTimeout(()=>{h(!1),f({firstName:"",lastName:"",email:"",phone:"",subject:"",message:""})},2e3)},4e3))},[r]),(0,a.useEffect)(()=>{s(!0)},[m.email]),(0,a.useEffect)(()=>{let e=Object.values(m);c(!1),t(e.some(e=>""===e))},[m]);let p=t=>{t.preventDefault(),e||(s(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(m.email)),c(!0))},v=e=>{let{name:t,value:n}=e.target;f(e=>({...e,[t]:n}))};return(0,i.jsx)("section",{id:"contact",className:"contact",children:(0,i.jsxs)("div",{className:"contact__container",children:[(0,i.jsxs)("div",{className:"contact__title",children:[(0,i.jsx)("h5",{children:"JOINT Beyond"}),(0,i.jsx)("div",{className:"contact__title__img",children:(0,i.jsx)(o(),{src:"/assets/lineContact.svg",alt:"Line",fill:!0})}),(0,i.jsx)("span",{children:"Let’s Build Your VR Experience"})]}),(0,i.jsxs)("form",{onSubmit:p,children:[(0,i.jsx)("input",{type:"text",placeholder:"First Name",name:"firstName",value:m.firstName,onChange:v}),(0,i.jsx)("input",{type:"text",placeholder:"Last Name",name:"lastName",value:m.lastName,onChange:v}),(0,i.jsx)("input",{className:"".concat(n?"":"error"," "),type:"text",placeholder:"Email",name:"email",value:m.email,onChange:v}),(0,i.jsx)("input",{type:"number",placeholder:"Phone",name:"phone",value:m.phone,onChange:v}),(0,i.jsx)("input",{className:"subject",type:"text",placeholder:"Subject",name:"subject",value:m.subject,onChange:v}),(0,i.jsx)("textarea",{placeholder:"Message ...",name:"message",value:m.message,onChange:v}),(0,i.jsxs)("button",{className:"".concat(l&&n&&!u?"validate":""," \n						").concat(e?"disable":"","\n						").concat(r&&!n?"mailError":"","\n						").concat(n&&u?"checkIcon":"","\n					"),type:"submit",children:[(0,i.jsx)(o(),{src:"/assets/reload.svg",className:"reload",alt:"Reload",width:20,height:20}),(0,i.jsx)(o(),{src:"/assets/check.svg",className:"check",alt:"Reload",width:30,height:30}),n?(0,i.jsx)("p",{children:"Send to email"}):(0,i.jsx)("p",{children:"invalid email"})]})]})]})})};t.default=r},9786:function(e,t,n){"use strict";n.r(t);var i=n(5893);n(7294);var a=n(5675),s=n.n(a),o=n(2478);let r=()=>(0,i.jsxs)("div",{className:"footer",children:[(0,i.jsxs)("div",{className:"footer__top",children:[(0,i.jsx)("div",{className:"footer__top__imgLogo",children:(0,i.jsx)("div",{className:"footer__top__imgLogo__img",children:(0,i.jsx)(s(),{src:"/assets/logo2.png",alt:"logo",fill:!0})})}),(0,i.jsx)("div",{className:"footer__top__separator",children:(0,i.jsx)(s(),{src:"/assets/separatorVertical.png",alt:"logo",fill:!0})}),(0,i.jsxs)("div",{className:"footer__top__text",children:[(0,i.jsx)("h5",{children:"F.A.Q"}),(0,i.jsx)("h5",{children:"SITEMAP"}),(0,i.jsx)("h5",{children:"CONDITIONS"}),(0,i.jsx)("h5",{children:"LICENSES"})]}),(0,i.jsx)("div",{className:"footer__top__separator",children:(0,i.jsx)(s(),{src:"/assets/separatorVertical.png",alt:"logo",fill:!0})}),(0,i.jsxs)("div",{className:"footer__top__media",children:[(0,i.jsx)("h5",{children:"SOCIALIZE WITH BEYOND"}),(0,i.jsx)("div",{className:"footer__top__media__web",children:o.pX.map(e=>(0,i.jsx)("div",{className:"footer__top__media__web__item",children:(0,i.jsx)(s(),{src:e.pathImg,alt:"logo",fill:!0})}))})]})]}),(0,i.jsx)("div",{className:"footer__separator",children:(0,i.jsx)(s(),{src:"/assets/lineContact.svg",alt:"logo",fill:!0})}),(0,i.jsx)("div",{className:"footer__bottom",children:(0,i.jsxs)("div",{className:"footer__bottom__text",children:[(0,i.jsx)("h5",{children:"2023"}),(0,i.jsx)("h5",{children:"\xa9"}),(0,i.jsx)("h5",{children:"-"}),(0,i.jsx)("h5",{children:"BEYOND FAKE LANDING PAGE"}),(0,i.jsx)("h5",{children:"-"}),(0,i.jsx)("h5",{children:"NO COMMERCIAL PURPOSE"})]})})]});t.default=r},9407:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(5893),a=n(7294),s=n(5675),o=n.n(s),r=n(2478),c=n(4506),l=n(6276),d=n(6523),u=n(2546);n(4950),n(4233),n(4256);let h=e=>{let{Component:t,data:n}=e;(0,a.useRef)();let s=(0,l.a)("(min-width: 950px) and (max-width: 1200px)"),r=(0,l.a)("(min-width: 701px) and (max-width: 950px)"),c=(0,l.a)("(min-width: 0px) and (max-width: 700px)"),[h,m]=(0,a.useState)(4);return(0,a.useEffect)(()=>{s?m(3):r?m(2):c?m(1):m(4)},[s,r,c]),(0,i.jsxs)("div",{className:"containerCarousel",children:[(0,i.jsx)(u.tq,{className:"carousel",slidesPerView:h,spaceBetween:20,pagination:{clickable:!1},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},modules:[d.tl,d.W_],children:n.map((e,n)=>(0,i.jsx)(u.o5,{id:"carousel-".concat(n),children:a.createElement(t,{title:e.title,description:e.description,pathImg:e.pathImg})},n))}),(0,i.jsx)("button",{className:"swiper-button-next  ".concat(h===n.length?"disable":""," "),id:"swipper",children:(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(o(),{src:"/assets/shortArrowRight.svg",alt:"Fleche",width:30,height:30})})}),(0,i.jsx)("button",{className:"swiper-button-prev  ".concat(h===n.length?"disable":""," "),id:"swipper",children:(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(o(),{src:"/assets/shortArrowLeft.svg",alt:"Fleche",width:30,height:30})})})]})},m=()=>{let e=(0,a.useRef)(null);return(0,i.jsxs)("section",{id:"services",className:"mainIntroduction",ref:e,children:[(0,i.jsxs)("div",{className:"containerArrowInfo itemText",id:"arrowInfoTop",children:[(0,i.jsxs)("div",{className:"containerArrowInfo__left",children:[(0,i.jsx)("h4",{children:"INTRODUCTION"}),(0,i.jsxs)("div",{className:"containerArrowInfo__left__arrow",children:[(0,i.jsx)("h5",{children:"TO BEYOND VR"}),(0,i.jsx)(o(),{src:"/assets/longArrowRight.svg",alt:"Fleche",width:200,height:80})]})]}),(0,i.jsxs)("div",{className:"containerArrowInfo__right",children:[(0,i.jsx)("p",{children:"Welcome to \"Beyond VR\", the next frontier of immersive experience. In this exceptional realm, we've fused cutting-edge technology with the boundaries of human imagination to bring you an adventure that transcends anything you've known before."}),(0,i.jsx)("p",{children:"Imagine worlds where every detail is so vivid it gives you goosebumps, digital landscapes that surpass the majesty of nature itself, and interactive scenarios that immerse you in stories of unmatched depth and complexity."})]})]}),(0,i.jsxs)("div",{className:"containerImage itemText",children:[(0,i.jsx)("div",{className:"containerImage__image",children:(0,i.jsx)(o(),{src:"/assets/menVr.png",alt:"Image vr",fill:!0})}),(0,i.jsxs)("div",{className:"containerImage__right",children:[(0,i.jsx)("h4",{children:"ABOUT"}),(0,i.jsx)("h5",{children:"BEYOND VR"}),(0,i.jsx)("p",{children:"Beyond VR\" is more than just a virtual reality platform; it's the culmination of years of research, passion, and innovation. From our earliest forays into the world of VR, we've always had a clear vision: to push conventional boundaries and deliver experiences that transcend reality."}),(0,i.jsx)("p",{children:'Our team, consisting of visionary engineers, talented content creators, and passionate designers, is committed to reimagining what\'s possible in the virtual space. With state-of-the-art technologies, collaborations with industry leaders, and insatiable curiosity, "Beyond VR" has crafted worlds that exceed imagination, offering an immersion so deep it blurs the line between the virtual and the real.'}),(0,i.jsx)("p",{children:'Whether you\'re a VR enthusiast or a curious novice, "Beyond VR" promises to take you on a journey that will awaken your senses, ignite your imagination, and forever change your perception of reality.'}),(0,i.jsx)("button",{id:"buttonLeft",children:"LET’S GET IN TOUCH"})]})]}),(0,i.jsxs)("div",{className:"containerArrowInfo itemText",children:[(0,i.jsxs)("div",{className:"containerArrowInfo__left",children:[(0,i.jsx)("h4",{children:"WHY BUILD"}),(0,i.jsxs)("div",{className:"containerArrowInfo__left__arrow",children:[(0,i.jsx)("h5",{children:"WITH BEYOND ?"}),(0,i.jsx)(o(),{src:"/assets/longArrowRight.svg",alt:"Fleche",width:200,height:80,className:"arrowRight"})]})]}),(0,i.jsx)("div",{className:"containerArrowInfo__right",id:"textArrow",children:(0,i.jsx)("p",{children:'Building with "Beyond VR" means embracing the future of immersive reality. Our platform provides unmatched tools to turn your ideas into tangible experiences. With cutting-edge technology and unwavering support, "Beyond VR" is the perfect partner for those looking to redefine the horizons of virtual reality.'})})]}),(0,i.jsx)("div",{className:"containerCards",children:(0,i.jsx)(h,{Component:c.pR,data:r.o_})})]})};var f=m},5056:function(e,t,n){"use strict";n.r(t);var i=n(5893),a=n(7294),s=n(5675),o=n.n(s),r=n(4506),c=n(2478);let l=()=>{let e=(0,a.useRef)(null),[t,n]=(0,a.useState)(!1);return(0,i.jsxs)("section",{id:"techno",className:"technologie",ref:e,children:[(0,i.jsxs)("div",{className:"technologie__container",children:[(0,i.jsx)("div",{className:"technologie__container__wrapper",children:(0,i.jsx)(o(),{src:"/assets/backgroundContainer.png",alt:"Background",fill:!0})}),(0,i.jsxs)("div",{className:"technologie__container__absolute",children:[(0,i.jsx)("h5",{id:"titleCase",children:"TECHNOLOGIES & HARDWARE"}),(0,i.jsx)("span",{id:"subTitleCase",children:"USED BY BEYOND VR"})]}),(0,i.jsx)("button",{onClick:()=>n(!t),className:"technologie__container__button",children:(0,i.jsx)("div",{className:"technologie__container__button__wrapper ".concat(t?"listDisplay":"disable"," "),children:(0,i.jsx)("div",{className:"technologie__container__button__wrapper__img",children:(0,i.jsx)(o(),{src:"/assets/arrowBottom.svg",alt:"Fleche",fill:!0})})})}),(0,i.jsxs)("div",{className:"technologie__container__list ".concat(t?"display":""," "),children:[(0,i.jsx)(o(),{src:"/assets/unreal.png",alt:"Unreal logo",width:80,height:80}),(0,i.jsx)(o(),{src:"/assets/unity.png",alt:"Unity logo",width:120,height:120}),(0,i.jsx)(o(),{src:"/assets/oculus.png",alt:"Oculus logo",width:120,height:120}),(0,i.jsx)(o(),{src:"/assets/vive.png",alt:"Vive logo",width:120,height:120})]})]}),(0,i.jsxs)("div",{className:"technologie__build ".concat(t?"remove":""," "),children:[(0,i.jsxs)("div",{className:"technologie__build__left",children:[(0,i.jsx)("h4",{children:"HOW WE BUILD"}),(0,i.jsxs)("div",{className:"technologie__build__left__arrow",children:[(0,i.jsx)("h5",{children:"WITH BEYOND VR?"}),(0,i.jsx)(o(),{src:"/assets/longArrowRight.svg",alt:"Fleche",width:200,height:80,className:"arrowRight"})]})]}),(0,i.jsx)("div",{className:"technologie__build__right",id:"textArrow",children:(0,i.jsx)("p",{children:'At "Beyond VR", our building process blends artistic passion with innovative technology. Collaborating closely, our teams turn bold visions into immersive realities using state-of-the-art tools. Every detail is user-optimized, ensuring seamless immersion. With "Beyond VR", we\'re offering not just an experience, but a journey into the uncharted.'})})]}),(0,i.jsx)("div",{className:"technologie__containerCirlceNumbers",children:c.OP.map((e,t)=>(0,i.jsx)(r.oU,{title:e.title,description:e.description,index:t},t))})]})};t.default=l},2730:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var i=n(5893),a=n(7294),s=n(5675),o=n.n(s),r=n(6276);let c=()=>{let[e,t]=(0,a.useState)("burger-bar unclicked"),[n,s]=(0,a.useState)("menu hidden"),[o,r]=(0,a.useState)(!1),c=()=>{o?(t("burger-bar unclicked"),s("menu hidden")):(t("burger-bar clicked"),s("menu visible")),r(!o)},l=(e,n)=>{t("burger-bar unclicked"),s("menu hidden"),r(!1),e.preventDefault();let i=document.getElementById(n);i&&i.scrollIntoView({behavior:"smooth",block:"start"})};return console.log(o,"isMenuClicked"),(0,i.jsxs)("div",{className:"burgerNav",children:[(0,i.jsx)("nav",{children:(0,i.jsxs)("div",{className:"burger-menu",onClick:c,children:[(0,i.jsx)("div",{className:e}),(0,i.jsx)("div",{className:e}),(0,i.jsx)("div",{className:e})]})}),(0,i.jsx)("div",{className:n,children:(0,i.jsxs)("nav",{children:[(0,i.jsxs)("a",{"data-scroll":"about",href:"#about",onClick:e=>l(e,"about"),children:["About",(0,i.jsx)("hr",{className:"bottom"})]}),(0,i.jsxs)("a",{"data-scroll":"services",href:"#services",onClick:e=>l(e,"services"),children:["Services",(0,i.jsx)("hr",{className:"bottom"})]}),(0,i.jsxs)("a",{"data-scroll":"techno",href:"#techno",onClick:e=>l(e,"techno"),children:["Technologies",(0,i.jsx)("hr",{className:"bottom"})]}),(0,i.jsxs)("a",{"data-scroll":"contact",href:"#contact",onClick:e=>l(e,"contact"),children:["Contact",(0,i.jsx)("hr",{className:"bottom"})]})]})})]})},l=e=>{let{homepageOverflowRef:t}=e,n=(0,r.L)(t),a=(e,t)=>{e.preventDefault();let n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},s=e=>"about"!==e||n?e===n?"active":"":"active";return(0,i.jsx)("div",{className:"navBar",children:(0,i.jsxs)("nav",{children:[(0,i.jsxs)("a",{className:"nav ".concat(s("about")),"data-scroll":"about",href:"#about",onClick:e=>a(e,"about"),children:["About",(0,i.jsx)("hr",{className:"top"}),(0,i.jsx)("hr",{className:"bottom"})]}),(0,i.jsxs)("a",{className:"nav ".concat(s("services")),"data-scroll":"services",href:"#services",onClick:e=>a(e,"services"),children:["Services",(0,i.jsx)("hr",{className:"top"}),(0,i.jsx)("hr",{className:"bottom"})]}),(0,i.jsxs)("a",{className:"nav ".concat(s("techno")),"data-scroll":"techno",href:"#techno",onClick:e=>a(e,"techno"),children:["Technologies",(0,i.jsx)("hr",{className:"top"}),(0,i.jsx)("hr",{className:"bottom"})]}),(0,i.jsxs)("a",{className:"nav ".concat(s("contact")),"data-scroll":"contact",href:"#contact",onClick:e=>a(e,"contact"),children:["Contact",(0,i.jsx)("hr",{className:"top"}),(0,i.jsx)("hr",{className:"bottom"})]})]})})};function d(e){let{homepageOverflowRef:t}=e,n=(0,r.a)("(max-width: 1100px)");return(0,i.jsxs)("div",{className:"header",children:[(0,i.jsxs)("div",{className:"header__logo",children:[(0,i.jsx)("div",{className:"header__logo__img",children:(0,i.jsx)("div",{className:"header__logo__img__wrapper",children:(0,i.jsx)(o(),{src:"/assets/logo2.png",alt:"logo",fill:!0})})}),(0,i.jsx)("div",{className:"header__logo__text",children:(0,i.jsx)("h1",{children:"BEYOND"})})]}),n?(0,i.jsx)(c,{}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{homepageOverflowRef:t}),(0,i.jsx)("div",{className:"header__button",children:(0,i.jsx)("button",{className:"header__button__try",children:"JOIN BEYOND"})})]})]})}var u=n(5778),h=n(9407),m=n(5056),f=n(4910),p=n(9786),v=n(2711),g=n.n(v);function b(){let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{g().init()},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{id:"App",children:(0,i.jsxs)("div",{className:"homepage",children:[(0,i.jsx)(d,{homepageOverflowRef:e}),(0,i.jsxs)("div",{className:"homepage__overflow",id:"overflowScroll",ref:e,children:[(0,i.jsx)(u.default,{}),(0,i.jsx)(h.default,{}),(0,i.jsx)(m.default,{}),(0,i.jsx)(f.default,{}),(0,i.jsx)(p.default,{})]})]})})})}n(3497)},2478:function(e,t,n){"use strict";n.d(t,{OP:function(){return a},o_:function(){return i},pX:function(){return s}});let i=[{index:0,title:"Simulation",description:"Embodies realism at its peak. Dive into meticulously crafted worlds and experience moments strikingly true to life.",pathImg:"/assets/simulation.png"},{index:1,title:"Education",description:"Turns learning into an immersive adventure. Explore complex subjects with unparalleled clarity and engage in lessons that leave a lasting impression.",pathImg:"/assets/education.png"},{index:2,title:"Self-Care",description:"Is a virtual oasis of well-being. Discover soothing spaces, guided meditations, and relaxation sessions to nourish the mind and soul.",pathImg:"/assets/selfcare.png"},{index:3,title:"Outdoor",description:"Takes you on natural escapades without leaving your living room. Experience the grandeur of nature, from mountain peaks to mysterious ocean depths.",pathImg:"/assets/outdoor.png"}],a=[{title:"01",description:"3D Conception & Design"},{title:"02",description:"Interaction Design"},{title:"03",description:"VR WorldUser Testing"},{title:"04",description:"Beyond VR Deploy"}],s=[{pathImg:"/assets/facebook.svg"},{pathImg:"./assets/instagram.svg"},{pathImg:"./assets/twitter.svg"},{pathImg:"./assets/youtube.svg"},{pathImg:"./assets/linkedin.svg"},{pathImg:"./assets/pinterest.svg"}]},3497:function(){}},function(e){e.O(0,[675,615,476,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);