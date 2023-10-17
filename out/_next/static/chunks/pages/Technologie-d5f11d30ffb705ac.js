(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{1773:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Technologie",function(){return s(5056)}])},4506:function(e,t,s){"use strict";s.d(t,{oU:function(){return l},pR:function(){return a}});var i=s(5893);s(7294);var n=s(5675),r=s.n(n);s(6276);let a=e=>{let{title:t,description:s,pathImg:n}=e;return(0,i.jsxs)("div",{className:"mainCardsInfo",children:[(0,i.jsx)("div",{className:"mainCardsInfo__img",children:n&&(0,i.jsx)(r(),{src:n,alt:"Image vr",fill:!0})}),(0,i.jsx)("h5",{children:t}),(0,i.jsx)("hr",{}),(0,i.jsx)("p",{children:s}),(0,i.jsx)("button",{children:"TRY IT NOW"})]})},l=e=>{let{title:t,description:s,index:n}=e;return(0,i.jsxs)("div",{className:"circleNumber",children:[(0,i.jsx)("div",{className:"circleNumber__circle",children:(0,i.jsx)("div",{className:"circleNumber__circle__wrapper",children:(0,i.jsx)("h5",{children:t})})}),(0,i.jsxs)("div",{className:"circleNumber__info",children:[(0,i.jsx)(r(),{src:"/assets/arrow.svg",alt:"Fleche",width:23,height:23}),(0,i.jsx)("p",{children:s})]})]})}},6276:function(e,t,s){"use strict";s.d(t,{L:function(){return r},a:function(){return n}});var i=s(7294);let n=e=>{let[t,s]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let i=window.matchMedia(e);i.matches!==t&&s(i.matches);let n=()=>{s(i.matches)};return i.addEventListener("change",n),()=>{i.removeEventListener("change",n)}},[e,t]),t},r=e=>{let[t,s]=(0,i.useState)("");return(0,i.useEffect)(()=>{let t=()=>{var t,i;let n=(null===(t=e.current)||void 0===t?void 0:t.scrollTop)||0,r=(null===(i=e.current)||void 0===i?void 0:i.querySelectorAll("section"))||[],a=document.querySelectorAll(".header__nav a");r.forEach(e=>{let t=e.offsetTop-200,i=t+e.offsetHeight,r=document.querySelector('.header__nav a[data-scroll="'.concat(e.id,'"]'));n>=t&&n<i&&(s(e.id),r&&(a.forEach(e=>e.classList.remove("active")),r.classList.add("active")))})};if(e.current)return e.current.addEventListener("scroll",t),()=>{var s;return null===(s=e.current)||void 0===s?void 0:s.removeEventListener("scroll",t)}},[e]),t}},5056:function(e,t,s){"use strict";s.r(t);var i=s(5893),n=s(7294),r=s(5675),a=s.n(r),l=s(4506),o=s(2478);let c=()=>{let e=(0,n.useRef)(null),[t,s]=(0,n.useState)(!1);return(0,i.jsxs)("section",{id:"techno",className:"technologie",ref:e,children:[(0,i.jsxs)("div",{className:"technologie__container",children:[(0,i.jsx)("div",{className:"technologie__container__wrapper",children:(0,i.jsx)(a(),{src:"/assets/backgroundContainer.png",alt:"Background",fill:!0})}),(0,i.jsxs)("div",{className:"technologie__container__absolute",children:[(0,i.jsx)("h5",{id:"titleCase",children:"TECHNOLOGIES & HARDWARE"}),(0,i.jsx)("span",{id:"subTitleCase",children:"USED BY BEYOND VR"})]}),(0,i.jsx)("button",{onClick:()=>s(!t),className:"technologie__container__button",children:(0,i.jsx)("div",{className:"technologie__container__button__wrapper ".concat(t?"listDisplay":"disable"," "),children:(0,i.jsx)("div",{className:"technologie__container__button__wrapper__img",children:(0,i.jsx)(a(),{src:"/assets/arrowBottom.svg",alt:"Fleche",fill:!0})})})}),(0,i.jsxs)("div",{className:"technologie__container__list ".concat(t?"display":""," "),children:[(0,i.jsx)(a(),{src:"/assets/unreal.png",alt:"Unreal logo",width:80,height:80}),(0,i.jsx)(a(),{src:"/assets/unity.png",alt:"Unity logo",width:120,height:120}),(0,i.jsx)(a(),{src:"/assets/oculus.png",alt:"Oculus logo",width:120,height:120}),(0,i.jsx)(a(),{src:"/assets/vive.png",alt:"Vive logo",width:120,height:120})]})]}),(0,i.jsxs)("div",{className:"technologie__build ".concat(t?"remove":""," "),children:[(0,i.jsxs)("div",{className:"technologie__build__left",children:[(0,i.jsx)("h4",{children:"HOW WE BUILD"}),(0,i.jsxs)("div",{className:"technologie__build__left__arrow",children:[(0,i.jsx)("h5",{children:"WITH BEYOND VR?"}),(0,i.jsx)(a(),{src:"/assets/longArrowRight.svg",alt:"Fleche",width:200,height:80,className:"arrowRight"})]})]}),(0,i.jsx)("div",{className:"technologie__build__right",id:"textArrow",children:(0,i.jsx)("p",{children:'At "Beyond VR", our building process blends artistic passion with innovative technology. Collaborating closely, our teams turn bold visions into immersive realities using state-of-the-art tools. Every detail is user-optimized, ensuring seamless immersion. With "Beyond VR", we\'re offering not just an experience, but a journey into the uncharted.'})})]}),(0,i.jsx)("div",{className:"technologie__containerCirlceNumbers",children:o.OP.map((e,t)=>(0,i.jsx)(l.oU,{title:e.title,description:e.description,index:t},t))})]})};t.default=c},2478:function(e,t,s){"use strict";s.d(t,{OP:function(){return n},o_:function(){return i},pX:function(){return r}});let i=[{index:0,title:"Simulation",description:"Embodies realism at its peak. Dive into meticulously crafted worlds and experience moments strikingly true to life.",pathImg:"/assets/simulation.png"},{index:1,title:"Education",description:"Turns learning into an immersive adventure. Explore complex subjects with unparalleled clarity and engage in lessons that leave a lasting impression.",pathImg:"/assets/education.png"},{index:2,title:"Self-Care",description:"Is a virtual oasis of well-being. Discover soothing spaces, guided meditations, and relaxation sessions to nourish the mind and soul.",pathImg:"/assets/selfcare.png"},{index:3,title:"Outdoor",description:"Takes you on natural escapades without leaving your living room. Experience the grandeur of nature, from mountain peaks to mysterious ocean depths.",pathImg:"/assets/outdoor.png"}],n=[{title:"01",description:"3D Conception & Design"},{title:"02",description:"Interaction Design"},{title:"03",description:"VR WorldUser Testing"},{title:"04",description:"Beyond VR Deploy"}],r=[{pathImg:"/assets/facebook.svg"},{pathImg:"./assets/instagram.svg"},{pathImg:"./assets/twitter.svg"},{pathImg:"./assets/youtube.svg"},{pathImg:"./assets/linkedin.svg"},{pathImg:"./assets/pinterest.svg"}]}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=1773)}),_N_E=e.O()}]);