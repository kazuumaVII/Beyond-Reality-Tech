(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{8915:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Contact",function(){return a(4910)}])},4910:function(e,t,a){"use strict";a.r(t);var s=a(5893),n=a(7294),l=a(5675),c=a.n(l);let i=()=>{let[e,t]=(0,n.useState)(!0),[a,l]=(0,n.useState)(!0),[i,o]=(0,n.useState)(!1),[u,r]=(0,n.useState)(!1),[m,h]=(0,n.useState)(!1),[d,p]=(0,n.useState)({firstName:"",lastName:"",email:"",phone:"",subject:"",message:""});console.log(m,"lalalal"),(0,n.useEffect)(()=>{i&&a&&(r(!0),setTimeout(()=>{r(!1),h(!0),setTimeout(()=>{h(!1),p({firstName:"",lastName:"",email:"",phone:"",subject:"",message:""})},2e3)},4e3))},[i]),(0,n.useEffect)(()=>{l(!0)},[d.email]),(0,n.useEffect)(()=>{let e=Object.values(d);o(!1),t(e.some(e=>""===e))},[d]);let j=t=>{t.preventDefault(),e||(l(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(d.email)),o(!0))},x=e=>{let{name:t,value:a}=e.target;p(e=>({...e,[t]:a}))};return(0,s.jsx)("section",{id:"contact",className:"contact",children:(0,s.jsxs)("div",{className:"contact__container",children:[(0,s.jsxs)("div",{className:"contact__title",children:[(0,s.jsx)("h5",{children:"JOINT Beyond"}),(0,s.jsx)("div",{className:"contact__title__img",children:(0,s.jsx)(c(),{src:"./assets/lineContact.svg",alt:"Line",fill:!0})}),(0,s.jsx)("span",{children:"Let’s Build Your VR Experience"})]}),(0,s.jsxs)("form",{onSubmit:j,children:[(0,s.jsx)("input",{type:"text",placeholder:"First Name",name:"firstName",value:d.firstName,onChange:x}),(0,s.jsx)("input",{type:"text",placeholder:"Last Name",name:"lastName",value:d.lastName,onChange:x}),(0,s.jsx)("input",{className:"".concat(a?"":"error"," "),type:"text",placeholder:"Email",name:"email",value:d.email,onChange:x}),(0,s.jsx)("input",{type:"number",placeholder:"Phone",name:"phone",value:d.phone,onChange:x}),(0,s.jsx)("input",{className:"subject",type:"text",placeholder:"Subject",name:"subject",value:d.subject,onChange:x}),(0,s.jsx)("textarea",{placeholder:"Message ...",name:"message",value:d.message,onChange:x}),(0,s.jsxs)("button",{className:"".concat(u&&a&&!m?"validate":""," \n						").concat(e?"disable":"","\n						").concat(i&&!a?"mailError":"","\n						").concat(a&&m?"checkIcon":"","\n					"),type:"submit",children:[(0,s.jsx)(c(),{src:"./assets/reload.svg",className:"reload",alt:"Reload",width:20,height:20}),(0,s.jsx)(c(),{src:"./assets/check.svg",className:"check",alt:"Reload",width:30,height:30}),a?(0,s.jsx)("p",{children:"Send to email"}):(0,s.jsx)("p",{children:"invalid email"})]})]})]})})};t.default=i}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=8915)}),_N_E=e.O()}]);