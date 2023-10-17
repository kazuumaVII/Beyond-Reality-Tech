(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[109],{8645:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Introduction",function(){return i(9407)}])},4506:function(e,t,i){"use strict";i.d(t,{oU:function(){return o},pR:function(){return a}});var n=i(5893);i(7294);var s=i(5675),r=i.n(s);i(6276);let a=e=>{let{title:t,description:i,pathImg:s}=e;return(0,n.jsxs)("div",{className:"mainCardsInfo",children:[(0,n.jsx)("div",{className:"mainCardsInfo__img",children:s&&(0,n.jsx)(r(),{src:s,alt:"Image vr",fill:!0})}),(0,n.jsx)("h5",{children:t}),(0,n.jsx)("hr",{}),(0,n.jsx)("p",{children:i}),(0,n.jsx)("button",{children:"TRY IT NOW"})]})},o=e=>{let{title:t,description:i,index:s}=e;return(0,n.jsxs)("div",{className:"circleNumber",children:[(0,n.jsx)("div",{className:"circleNumber__circle",children:(0,n.jsx)("div",{className:"circleNumber__circle__wrapper",children:(0,n.jsx)("h5",{children:t})})}),(0,n.jsxs)("div",{className:"circleNumber__info",children:[(0,n.jsx)(r(),{src:"/assets/arrow.svg",alt:"Fleche",width:23,height:23}),(0,n.jsx)("p",{children:i})]})]})}},6276:function(e,t,i){"use strict";i.d(t,{L:function(){return r},a:function(){return s}});var n=i(7294);let s=e=>{let[t,i]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let n=window.matchMedia(e);n.matches!==t&&i(n.matches);let s=()=>{i(n.matches)};return n.addEventListener("change",s),()=>{n.removeEventListener("change",s)}},[e,t]),t},r=e=>{let[t,i]=(0,n.useState)("");return(0,n.useEffect)(()=>{let t=()=>{var t,n;let s=(null===(t=e.current)||void 0===t?void 0:t.scrollTop)||0,r=(null===(n=e.current)||void 0===n?void 0:n.querySelectorAll("section"))||[],a=document.querySelectorAll(".header__nav a");r.forEach(e=>{let t=e.offsetTop-200,n=t+e.offsetHeight,r=document.querySelector('.header__nav a[data-scroll="'.concat(e.id,'"]'));s>=t&&s<n&&(i(e.id),r&&(a.forEach(e=>e.classList.remove("active")),r.classList.add("active")))})};if(e.current)return e.current.addEventListener("scroll",t),()=>{var i;return null===(i=e.current)||void 0===i?void 0:i.removeEventListener("scroll",t)}},[e]),t}},9407:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return p}});var n=i(5893),s=i(7294),r=i(5675),a=i.n(r),o=i(2478),l=i(4506),c=i(6276),d=i(6523),h=i(2546);i(4950),i(4233),i(4256);let u=e=>{let{Component:t,data:i}=e;(0,s.useRef)();let r=(0,c.a)("(min-width: 950px) and (max-width: 1200px)"),o=(0,c.a)("(min-width: 701px) and (max-width: 950px)"),l=(0,c.a)("(min-width: 0px) and (max-width: 700px)"),[u,m]=(0,s.useState)(4);return(0,s.useEffect)(()=>{r?m(3):o?m(2):l?m(1):m(4)},[r,o,l]),(0,n.jsxs)("div",{className:"containerCarousel",children:[(0,n.jsx)(h.tq,{className:"carousel",slidesPerView:u,spaceBetween:20,pagination:{clickable:!1},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},modules:[d.tl,d.W_],children:i.map((e,i)=>(0,n.jsx)(h.o5,{id:"carousel-".concat(i),children:s.createElement(t,{title:e.title,description:e.description,pathImg:e.pathImg})},i))}),(0,n.jsx)("button",{className:"swiper-button-next  ".concat(u===i.length?"disable":""," "),id:"swipper",children:(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(a(),{src:"/assets/shortArrowRight.svg",alt:"Fleche",width:30,height:30})})}),(0,n.jsx)("button",{className:"swiper-button-prev  ".concat(u===i.length?"disable":""," "),id:"swipper",children:(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(a(),{src:"/assets/shortArrowLeft.svg",alt:"Fleche",width:30,height:30})})})]})},m=()=>{let e=(0,s.useRef)(null);return(0,n.jsxs)("section",{id:"services",className:"mainIntroduction",ref:e,children:[(0,n.jsxs)("div",{className:"containerArrowInfo itemText",id:"arrowInfoTop",children:[(0,n.jsxs)("div",{className:"containerArrowInfo__left",children:[(0,n.jsx)("h4",{children:"INTRODUCTION"}),(0,n.jsxs)("div",{className:"containerArrowInfo__left__arrow",children:[(0,n.jsx)("h5",{children:"TO BEYOND VR"}),(0,n.jsx)(a(),{src:"/assets/longArrowRight.svg",alt:"Fleche",width:200,height:80})]})]}),(0,n.jsxs)("div",{className:"containerArrowInfo__right",children:[(0,n.jsx)("p",{children:"Welcome to \"Beyond VR\", the next frontier of immersive experience. In this exceptional realm, we've fused cutting-edge technology with the boundaries of human imagination to bring you an adventure that transcends anything you've known before."}),(0,n.jsx)("p",{children:"Imagine worlds where every detail is so vivid it gives you goosebumps, digital landscapes that surpass the majesty of nature itself, and interactive scenarios that immerse you in stories of unmatched depth and complexity."})]})]}),(0,n.jsxs)("div",{className:"containerImage itemText",children:[(0,n.jsx)("div",{className:"containerImage__image",children:(0,n.jsx)(a(),{src:"/assets/menVr.png",alt:"Image vr",fill:!0})}),(0,n.jsxs)("div",{className:"containerImage__right",children:[(0,n.jsx)("h4",{children:"ABOUT"}),(0,n.jsx)("h5",{children:"BEYOND VR"}),(0,n.jsx)("p",{children:"Beyond VR\" is more than just a virtual reality platform; it's the culmination of years of research, passion, and innovation. From our earliest forays into the world of VR, we've always had a clear vision: to push conventional boundaries and deliver experiences that transcend reality."}),(0,n.jsx)("p",{children:'Our team, consisting of visionary engineers, talented content creators, and passionate designers, is committed to reimagining what\'s possible in the virtual space. With state-of-the-art technologies, collaborations with industry leaders, and insatiable curiosity, "Beyond VR" has crafted worlds that exceed imagination, offering an immersion so deep it blurs the line between the virtual and the real.'}),(0,n.jsx)("p",{children:'Whether you\'re a VR enthusiast or a curious novice, "Beyond VR" promises to take you on a journey that will awaken your senses, ignite your imagination, and forever change your perception of reality.'}),(0,n.jsx)("button",{id:"buttonLeft",children:"LET’S GET IN TOUCH"})]})]}),(0,n.jsxs)("div",{className:"containerArrowInfo itemText",children:[(0,n.jsxs)("div",{className:"containerArrowInfo__left",children:[(0,n.jsx)("h4",{children:"WHY BUILD"}),(0,n.jsxs)("div",{className:"containerArrowInfo__left__arrow",children:[(0,n.jsx)("h5",{children:"WITH BEYOND ?"}),(0,n.jsx)(a(),{src:"/assets/longArrowRight.svg",alt:"Fleche",width:200,height:80,className:"arrowRight"})]})]}),(0,n.jsx)("div",{className:"containerArrowInfo__right",id:"textArrow",children:(0,n.jsx)("p",{children:'Building with "Beyond VR" means embracing the future of immersive reality. Our platform provides unmatched tools to turn your ideas into tangible experiences. With cutting-edge technology and unwavering support, "Beyond VR" is the perfect partner for those looking to redefine the horizons of virtual reality.'})})]}),(0,n.jsx)("div",{className:"containerCards",children:(0,n.jsx)(u,{Component:l.pR,data:o.o_})})]})};var p=m},2478:function(e,t,i){"use strict";i.d(t,{OP:function(){return s},o_:function(){return n},pX:function(){return r}});let n=[{index:0,title:"Simulation",description:"Embodies realism at its peak. Dive into meticulously crafted worlds and experience moments strikingly true to life.",pathImg:"/assets/simulation.png"},{index:1,title:"Education",description:"Turns learning into an immersive adventure. Explore complex subjects with unparalleled clarity and engage in lessons that leave a lasting impression.",pathImg:"/assets/education.png"},{index:2,title:"Self-Care",description:"Is a virtual oasis of well-being. Discover soothing spaces, guided meditations, and relaxation sessions to nourish the mind and soul.",pathImg:"/assets/selfcare.png"},{index:3,title:"Outdoor",description:"Takes you on natural escapades without leaving your living room. Experience the grandeur of nature, from mountain peaks to mysterious ocean depths.",pathImg:"/assets/outdoor.png"}],s=[{title:"01",description:"3D Conception & Design"},{title:"02",description:"Interaction Design"},{title:"03",description:"VR WorldUser Testing"},{title:"04",description:"Beyond VR Deploy"}],r=[{pathImg:"/assets/facebook.svg"},{pathImg:"./assets/instagram.svg"},{pathImg:"./assets/twitter.svg"},{pathImg:"./assets/youtube.svg"},{pathImg:"./assets/linkedin.svg"},{pathImg:"./assets/pinterest.svg"}]}},function(e){e.O(0,[675,615,774,888,179],function(){return e(e.s=8645)}),_N_E=e.O()}]);