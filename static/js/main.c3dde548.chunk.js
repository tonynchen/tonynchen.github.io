(this["webpackJsonpgithub-portfolio"]=this["webpackJsonpgithub-portfolio"]||[]).push([[0],{123:function(e){e.exports=JSON.parse('{"background":{"color":{"value":"#232741"},"position":"50% 50%","repeat":"no-repeat","size":"20%"},"fullScreen":{"enable":true,"zIndex":-1},"interactivity":{"detect_on":"window","events":{"onHover":{"enable":true,"mode":"bubble"}},"modes":{"bubble":{"distance":250,"duration":2,"opacity":0,"size":0},"grab":{"distance":400},"repulse":{"distance":400}}},"particles":{"color":{"value":"#ffffff"},"links":{"color":{"value":"#ffffff"},"distance":150,"opacity":0.4},"move":{"attract":{"rotate":{"x":600,"y":600}},"enable":true,"outModes":{"bottom":"out","left":"out","right":"out","top":"out"},"random":true,"speed":1},"number":{"density":{"enable":true},"value":160},"opacity":{"random":{"enable":true},"value":{"min":0,"max":1},"animation":{"enable":true,"speed":1}},"size":{"random":{"enable":true},"value":{"min":1,"max":3},"animation":{"speed":4,"minimumValue":0.3}}}}')},138:function(e,t,n){},139:function(e,t,n){},347:function(e,t,n){"use strict";n.r(t);var i,r,o,c,a,s,l,d,b,j,h,x,u=n(0),p=n(19),m=n.n(p),g=(n(138),n(10)),f=(n(139),n(25)),O=n(85),y=n.n(O),v=n(28),w="down",k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.initialDirection,n=e.thresholdPixels,i=e.off,r=Object(u.useState)(t),o=Object(f.a)(r,2),c=o[0],a=o[1];return Object(u.useEffect)((function(){var e=n||0,r=window.pageYOffset,o=!1,c=function(){var t=window.pageYOffset;Math.abs(t-r)<e||(a(t>r?w:"up"),r=t>0?t:0),o=!1},s=function(){o||(window.requestAnimationFrame(c),o=!0)};return i?a(t):window.addEventListener("scroll",s),function(){return window.removeEventListener("scroll",s)}}),[t,n,i]),c},z=n(11),C=n(69),S=n.n(C),I=n(112),N=function(e,t){Object(u.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])},E=n(1),F=z.b.div(i||(i=Object(g.a)(["\n  display: none;\n\n  @media (max-width: 768px) {\n    display: block;\n  }\n"]))),T=z.b.button(r||(r=Object(g.a)(["\n  display: none;\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n    margin-right: -15px;\n    padding: 15px;\n    border: 0;\n    background-color: transparent;\n    color: inherit;\n    text-transform: none;\n    transition-timing-function: linear;\n    transition-duration: 0.15s;\n    transition-property: opacity, filter;\n  }\n\n  .ham-box {\n    display: inline-block;\n    position: relative;\n    width: 30px;\n    height: 24px;\n  }\n\n  .ham-box-inner {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    width: 30px;\n    height: 2px;\n    border-radius: 4px;\n    background-color: white;\n    transition-duration: 0.22s;\n    transition-property: transform;\n    transition-delay: ",";\n    transform: rotate(",");\n    transition-timing-function: cubic-bezier(",");\n    &:before,\n    &:after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: auto;\n      right: 0;\n      width: 30px;\n      height: 2px;\n      border-radius: 4px;\n      background-color: white;\n      transition-timing-function: ease;\n      transition-duration: 0.15s;\n      transition-property: transform;\n    }\n    &:before {\n      width: ",";\n      top: ",";\n      opacity: ",";\n      transition: ",";\n    }\n    &:after {\n      width: ",";\n      bottom: ",";\n      transform: rotate(",");\n      transition: ",";\n    }\n  }\n"])),(function(e){return e.menuOpen?"0.12s":"0s"}),(function(e){return e.menuOpen?"225deg":"0deg"}),(function(e){return e.menuOpen?"0.215, 0.61, 0.355, 1":"0.55, 0.055, 0.675, 0.19"}),(function(e){return e.menuOpen?"100%":"120%"}),(function(e){return e.menuOpen?"0":"-10px"}),(function(e){return e.menuOpen?0:1}),(function(e){return e.menuOpen?"top 0.1s ease-out, opacity 0.1s ease-out 0.12s":"top 0.1s ease-in 0.25s, opacity 0.1s ease-in"}),(function(e){return e.menuOpen?"100%":"80%"}),(function(e){return e.menuOpen?"0":"-10px"}),(function(e){return e.menuOpen?"-90deg":"0"}),(function(e){return e.menuOpen?"bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s":"bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)"})),P=z.b.aside(o||(o=Object(g.a)(["\n  display: none;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    padding: 50px 10px;\n    width: min(75vw, 400px);\n    height: 100vh;\n    outline: 0;\n    background-color: #112240;\n    box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);\n    z-index: 9;\n    transform: translateX(","vw);\n    visibility: ",";\n    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    flex-direction: column;\n    color: #a8b2d1;\n    text-align: center;\n  }\n"])),(function(e){return e.menuOpen?0:100}),(function(e){return e.menuOpen?"visible":"hidden"})),A=z.b.nav(c||(c=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  color: #ccd6f6;\n  counter-reset: item 0;\n  z-index: 12;\n"]))),L=z.b.div(a||(a=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  ol {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n\n    li {\n      margin: 0 5px;\n      position: relative;\n      font-size: 13px;\n      float: left;\n\n      a {\n        padding: 10px;\n\n        &:before {\n          margin-right: 5px;\n          color: #64ffda;\n          font-size: 12px;\n          text-align: right;\n        }\n      }\n    }\n  }\n"]))),R=z.b.a(s||(s=Object(g.a)(["\n  background-color: transparent;\n  border: 1px solid #eee;\n  border-radius: 10px;\n  color: #eee;\n  font-size: 12px;\n  text-align: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1rem;\n"]))),M=function(){var e=Object(u.useState)(!1),t=Object(f.a)(e,2),n=t[0],i=t[1],r=Object(u.useRef)(null),o=function(e){e.currentTarget.innerWidth>768&&i(!1)};Object(u.useEffect)((function(){return window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}}),[]);var c=Object(u.useRef)();return N(c,(function(){return i(!1)})),Object(E.jsxs)(F,{children:[Object(E.jsx)(I.a,{children:Object(E.jsx)("body",{className:n?"blur":""})}),Object(E.jsxs)("div",{ref:c,children:[Object(E.jsx)(T,{onClick:function(){return i(!n)},menuOpen:n,ref:r,"aria-label":"Menu",children:Object(E.jsx)("div",{className:"ham-box",children:Object(E.jsx)("div",{className:"ham-box-inner"})})}),Object(E.jsx)(P,{menuOpen:n,"aria-hidden":!n,tabIndex:n?1:-1,children:Object(E.jsxs)(A,{children:[Object(E.jsx)("img",{style:{height:"50%",maxHeight:"75px",padding:"1rem"},src:"images/logo.png",alt:"logo"}),Object(E.jsx)(L,{children:Object(E.jsxs)("ol",{children:[Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#home",onClick:function(){return i(!1)},children:"Home"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#about",onClick:function(){return i(!1)},children:"About"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#experience",onClick:function(){return i(!1)},children:"Experience"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#portfolio",onClick:function(){return i(!1)},children:"Projects"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#contact",onClick:function(){return i(!1)},children:"Contact"})}),Object(E.jsx)("li",{children:Object(E.jsxs)(R,{onClick:function(){return i(!1)},style:{padding:"8px"},href:"https://drive.google.com/file/d/14Nupb9SvA5LyGL-Xim8aMUYpDO2EsH5_/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:[Object(E.jsx)(S.a,{}),Object(E.jsx)("div",{style:{marginLeft:"8px"},children:"Resume"})]})})]})})]})})]})]})},B=z.b.div(l||(l=Object(g.a)(["\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: flex;\n  top: 0;\n  position: fixed;\n  width: 100%;\n  height: 100px;\n  padding: 0px 50px;\n  background-color: rgba(10, 25, 47, 0.85);\n\n  z-index: 11;\n  filter: none !important;\n  pointer-events: auto !important;\n  user-select: auto !important;\n  backdrop-filter: blur(10px);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  @media (max-width: 1080px) {\n    padding: 0 40px;\n  }\n  @media (max-width: 768px) {\n    padding: 0 25px;\n  }\n\n  @media (prefers-reduced-motion: no-preference) {\n    ",";\n\n    ",";\n  }\n"])),(function(e){return"up"===e.scrollDirection&&!e.scrolledToTop&&Object(z.a)(d||(d=Object(g.a)(["\n        height: 70px;\n        transform: translateY(0px);\n        background-color: rgba(10, 25, 47, 0.85);\n        box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);\n      "])))}),(function(e){return"down"===e.scrollDirection&&!e.scrolledToTop&&Object(z.a)(b||(b=Object(g.a)(["\n        height: 70px;\n        transform: translateY(calc(70px * -1));\n        box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);\n      "])))})),D=z.b.nav(j||(j=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  color: #ccd6f6;\n  counter-reset: item 0;\n  z-index: 12;\n"]))),W=z.b.div(h||(h=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  @media (max-width: 768px) {\n    display: none;\n  }\n\n  ol {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    li {\n      margin: 0 5px;\n      position: relative;\n      font-size: 13px;\n      float: left;\n\n      a {\n        padding: 10px;\n\n        &:before {\n          margin-right: 5px;\n          color: #64ffda;\n          font-size: 12px;\n          text-align: right;\n        }\n      }\n    }\n  }\n"]))),U=z.b.a(x||(x=Object(g.a)(["\n  background-color: transparent;\n  border: 1px solid #eee;\n  border-radius: 10px;\n  color: #eee;\n  font-size: 12px;\n  text-align: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),q=[{name:"mail",url:"mailto: hello@tonychen.me",icon:"fas envelope"},{name:"linkedin",url:"https://www.linkedin.com/in/tonychen47/",icon:"fab linkedin"},{name:"github",url:"http://github.com/Chen2886",icon:"fab github-square"}];function _(){var e=k("down"),t=Object(u.useState)(!0),n=Object(f.a)(t,2),i=n[0],r=n[1],o=Object(u.useState)(0),c=Object(f.a)(o,2),a=c[0],s=c[1],l=Object(u.useState)(" "),d=Object(f.a)(l,2),b=d[0],j=d[1],h=function(){r(window.pageYOffset<50)};Object(u.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[]);var x=["Software Engineer","Researcher","Gamer"];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(B,{scrollDirection:e,scrolledToTop:i,children:Object(E.jsxs)(D,{id:"nav",name:"nav",children:[Object(E.jsx)("img",{style:{height:"50%",padding:"1rem"},src:"images/logo.png",alt:"logo"}),Object(E.jsx)(W,{children:Object(E.jsxs)("ol",{children:[Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#home",children:"Home"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#about",children:"About"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#experience",children:"Experience"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#portfolio",children:"Projects"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"#contact",children:"Contact"})}),Object(E.jsx)("li",{children:Object(E.jsxs)(U,{style:{padding:"8px"},href:"https://drive.google.com/file/d/14Nupb9SvA5LyGL-Xim8aMUYpDO2EsH5_/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:[Object(E.jsx)(S.a,{}),Object(E.jsx)("div",{style:{marginLeft:"8px"},children:"Resume"})]})})]})}),Object(E.jsx)(M,{})]})}),Object(E.jsxs)("div",{id:"home",children:[Object(E.jsx)("div",{className:"row banner",children:Object(E.jsxs)("div",{className:"banner-text",children:[Object(E.jsx)("h1",{className:"responsive-headline",children:"Hi, I'm Tony!"}),Object(E.jsx)("h3",{children:Object(E.jsx)(y.a,{onFinishedTyping:function(){s(a===x.length-1?0:a+1),j(Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("span",{children:x[a]}),Object(E.jsx)(y.a.Backspace,{count:x[a].length+1,delay:2e3})]}))},loop:!0,children:b})}),Object(E.jsx)("ul",{className:"social",children:q.map((function(e){return Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(E.jsx)(v.a,{icon:[e.icon.split(" ")[0],e.icon.split(" ")[1]]})})},e.name)}))})]})}),Object(E.jsx)("p",{className:"scrolldown",children:Object(E.jsx)("a",{href:"#about",children:Object(E.jsx)("i",{className:"icon-down-circle"})})})]})]})}var H,Y,J,G=n(380),V=n(390),Z=(n(167),z.b.div(H||(H=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n"])))),$=z.b.ul(Y||(Y=Object(g.a)(["\n  margin-top: 3px;\n\n  @media (max-width: 600px) {\n    padding-left: 12px;\n  } ;\n"]))),X=z.b.div(J||(J=Object(g.a)(["\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  padding: 25px 0px;\n  height: 100%;\n\n  position: relative;\n  width: 100%;\n  background-color: rgb(35, 37, 39);\n  vertical-align: middle;\n  justify-content: center;\n  align-items: stretch;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  display: flex;\n"])));function Q(){return Object(E.jsx)(X,{id:"about",name:"about",children:Object(E.jsxs)(G.a,{className:"about-grid",container:!0,justify:"center",alignItems:"center",spacing:3,children:[Object(E.jsx)(G.a,{item:!0,xs:12,style:{marginBottom:"1rem",justifyContent:"center",display:"flex"},children:Object(E.jsxs)("div",{style:{display:"inline-block"},children:[Object(E.jsx)("h2",{style:{margin:0},children:"About Me"}),Object(E.jsx)("hr",{})]})}),Object(E.jsxs)(G.a,{item:!0,md:12,lg:6,children:[Object(E.jsx)("p",{children:"I'm currently a full-time student at Purdue University studying Computer Science with a concentration in Software Engineering. I am especially interested in web and iOS development and would love to work for a Formula 1 team or a car manufacturer one day. My passion for CS comes from its versatility and because it provides the opportunity to create platforms to help others and make an impact on the world. I also enjoy the problem-solving aspect of programming and the ability to express my creativity. Here are some fun facts about me:"}),Object(E.jsxs)($,{children:[Object(E.jsx)("li",{children:"In my downtime, I like to organize hackathons, play Cities: Skylines, Apex Legends and make tiramisu!"}),Object(E.jsx)("li",{children:"I've passed the written exam for a private pilot license."}),Object(E.jsx)("li",{children:"Skydiving and participating in professional karting are at the top of my bucket list."}),Object(E.jsx)("li",{children:"During the summer of 2019, I visited the White House and toured the press conference room!"}),Object(E.jsx)("li",{children:"My newest hobby is going to Topgolf!"})]}),Object(E.jsx)("br",{})]}),Object(E.jsx)(V.a,{mdDown:!0,children:Object(E.jsx)(G.a,{item:!0,md:12,lg:6,style:{height:"100%",width:"100%"},children:Object(E.jsxs)(Z,{children:[Object(E.jsx)("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:"Profile Pic"}),Object(E.jsx)("div",{children:Object(E.jsx)("table",{style:{marginLeft:"auto",marginRight:"auto",marginBottom:"2rem",marginTop:"2rem"},children:Object(E.jsxs)("tbody",{children:[Object(E.jsx)("tr",{children:Object(E.jsx)("th",{colSpan:"9",children:Object(E.jsx)("div",{style:{textAlign:"center"},children:Object(E.jsx)("h3",{children:"Detail"})})})}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"white",children:Object(E.jsx)(v.a,{icon:"user"})}),Object(E.jsx)("td",{children:"\xa0\xa0"}),Object(E.jsx)("td",{children:"Nuo (Tony) Chen"}),Object(E.jsx)("td",{children:"\xa0\xa0\xa0\xa0"}),Object(E.jsx)("td",{children:Object(E.jsx)(v.a,{icon:"envelope"})}),Object(E.jsx)("td",{children:"\xa0\xa0"}),Object(E.jsx)("td",{children:"hello@tonychen.me"})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:Object(E.jsx)(v.a,{icon:"phone-square"})}),Object(E.jsx)("td",{children:"\xa0\xa0"}),Object(E.jsx)("td",{children:"352-274-1888"}),Object(E.jsx)("td",{children:"\xa0\xa0\xa0\xa0"}),Object(E.jsx)("td",{children:Object(E.jsx)(v.a,{icon:"address-card"})}),Object(E.jsx)("td",{children:"\xa0\xa0"}),Object(E.jsxs)("td",{children:["430 Wood St",Object(E.jsx)("br",{}),"West Lafayette, IN, 47906"]})]})]})})})]})})}),Object(E.jsx)(V.a,{lgUp:!0,children:Object(E.jsx)(G.a,{item:!0,md:12,lg:6,style:{height:"100%",width:"100%"},children:Object(E.jsx)(Z,{children:Object(E.jsxs)(G.a,{container:!0,style:{width:"100%"},justify:"center",alignItems:"center",spacing:8,children:[Object(E.jsx)(G.a,{item:!0,md:6,lg:12,style:{display:"flex",justifyContent:"center"},children:Object(E.jsx)("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:"Profile Pic"})}),Object(E.jsx)(G.a,{item:!0,md:6,lg:12,style:{display:"flex",justifyContent:"center"},children:Object(E.jsx)("div",{style:{display:"flex"},children:Object(E.jsx)("table",{style:{marginLeft:"auto",marginRight:"auto"},children:Object(E.jsxs)("tbody",{children:[Object(E.jsx)("tr",{children:Object(E.jsx)("th",{colSpan:"9",children:Object(E.jsx)("div",{style:{textAlign:"center"},children:Object(E.jsx)("h3",{children:"Detail"})})})}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"white",children:Object(E.jsx)(v.a,{icon:"user"})}),Object(E.jsx)("td",{children:"\xa0\xa0"}),Object(E.jsx)("td",{children:"Nuo (Tony) Chen"})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:Object(E.jsx)(v.a,{icon:"envelope"})}),Object(E.jsx)("td",{children:"\xa0\xa0"}),Object(E.jsx)("td",{children:"chen2886@purdue.edu"})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:Object(E.jsx)(v.a,{icon:"phone-square"})}),Object(E.jsx)("td",{children:"\xa0\xa0"}),Object(E.jsx)("td",{children:"352-274-1888"})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:Object(E.jsx)(v.a,{icon:"address-card"})}),Object(E.jsx)("td",{children:"\xa0\xa0"}),Object(E.jsxs)("td",{children:["1250 1st Street, Room 190",Object(E.jsx)("br",{}),"West Lafayette, IN, 47906"]})]})]})})})})]})})})})]})})}var K,ee=n(34),te=n(35),ne=n.n(te),ie=n(8),re=n(382),oe=n(383),ce=n(384),ae=n(389),se=n(27),le=n(381),de=z.b.div(K||(K=Object(g.a)(["\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  padding: 25px 0px;\n  height: 100%;\n  min-height: 70vh;\n\n  background-color: rgb(35, 37, 39);\n"]))),be=[{listTitle:"Zotec Partners",company:"Zotec Partners",title:"Software Engineer Intern ",years:"June 2020 - December 2020",description:"I worked within a team to develop several projects during my 6 months at the company. I thoroughly enjoyed the experience because it allowed me to apply my skills to real-life situations. One of the projects I developed was used to combat COVID-19, which received great feedback and is actively being used. Another side project I worked on required me to integrate two platforms within the company. This project allowed me to get the first-hand experience on an integration problem."},{listTitle:"Purdue University - Researcher",company:"Purdue University",title:"Undergraduate Researcher ",years:"April 2020 - Current",description:"I worked with the Slipchenko Lab Group at Purdue University to develop a user-friendly program -- iSpiEFP -- that helps chemists perform EFP calculations. This is an unique experience because once iSpiEFP is finished, the entire scientific community can benefit from this. This program significantly lowers the barrier for scientists to use the EFP calculation. Most of the scientists are unfamiliar with terminals, which is where EFP calculation is traditionally performed. Upon completing this project, numerous scientists will be able to use this robust calculation, saving them time compared to the traditional method."},{listTitle:"Purdue University - TA",company:"Purdue University",title:"Teaching Assistant ",years:"August 2019 - Current",description:"Since my sophomore year, I have been an Undergraduate Teaching Assistant for CS 240 (Programming in C) and CS 251 (Data Structures and Algorithms). I lead two labs each week to help students further understand the course material by practicing what they learned or explaining concepts in more detail. I also hold office hours which allows for more one-on-one interaction with students who need more guidance on homework and projects. Working as a TA is always the highlight of my week."}],je=Object(ie.a)((function(){return{root:{backgroundColor:"transparent"}}}))((function(e){return Object(E.jsx)(re.a,Object(ee.a)({},e))}));function he(e){return Object(E.jsx)(je,{hidden:e.value!==e.index,style:{width:"100%",marginLeft:e.isMd?"0px":"16px",marginTop:e.isMd?"16px":"0px"},elevation:0,children:Object(E.jsxs)(oe.a,{style:{padding:"0"},children:[Object(E.jsxs)("h3",{style:{marginTop:"0",textAlign:"left"},children:[be[e.index].title," @ ",be[e.index].company]}),Object(E.jsx)("p",{children:be[e.index].years}),Object(E.jsx)("p",{children:be[e.index].description})]})})}var xe=Object(ie.a)((function(e){return{root:{textTransform:"none",color:"#BFEFFF",alignItems:"center",fontSize:"15px","&:focus":{opacity:1},"&:hover":{"&:not($selected)":{color:"#bfefff",backgroundColor:ne()("#bfefff").fade(.87).toString()},"&:($selected)":{color:"black",backgroundColor:"black"}}},wrapper:{alignItems:"flex-start",fontFamily:"'Raleway', sans-serif"},"@media (max-width: 1280px)":{wrapper:{alignItems:"center"}},selected:{color:"#BFEFFF",backgroundColor:ne()("#bfefff").fade(.87).toString(),"& + $root":{zIndex:1},"& + $root:before":{opacity:0}}}}))((function(e){return Object(E.jsx)(ce.a,Object(ee.a)({disableRipple:!0},e))})),ue=Object(ie.a)({indicator:{display:"flex",justifyContent:"center",backgroundColor:"transparent",left:"0px","& > span":{maxWidth:40,width:"100%",backgroundColor:"grey"}}})((function(e){return Object(E.jsx)(ae.a,Object(ee.a)(Object(ee.a)({},e),{},{TabIndicatorProps:{children:Object(E.jsx)("span",{})}}))}));function pe(){var e=Object(u.useState)(0),t=Object(f.a)(e,2),n=t[0],i=t[1],r=Object(se.a)(),o=Object(le.a)(r.breakpoints.down("md"));return Object(E.jsx)(de,{id:"experience",name:"experience",children:Object(E.jsxs)(G.a,{className:"experience-grid",container:!0,justify:"center",alignItems:"flex-start",spacing:3,children:[Object(E.jsx)(G.a,{item:!0,xs:12,style:{marginBottom:"1rem",justifyContent:"center",display:"flex"},children:Object(E.jsxs)("div",{style:{display:"inline-block"},children:[Object(E.jsx)("h2",{style:{margin:0},children:"Experience"}),Object(E.jsx)("hr",{})]})}),Object(E.jsx)(G.a,{item:!0,xs:12,children:Object(E.jsxs)("div",{style:{display:"flex",flexGrow:"1",width:"100%",justifyContent:"center",flexDirection:o?"column":"row"},children:[Object(E.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(E.jsx)(ue,{variant:o?"scrollable":"standard",orientation:o?"horizontal":"vertical",value:n,scrollButtons:"off",onChange:function(e,t){i(t)},children:be.map((function(e,t){return Object(E.jsx)(xe,{label:e.listTitle},t)}))})}),Object(E.jsx)("div",{style:{width:o?"100%":"50%",marginTop:o?"1rem":"0"},children:be.map((function(e,t){return Object(E.jsx)(he,{value:n,index:t},t)}))})]})})]})})}var me,ge,fe=n(386),Oe=n(385),ye=[{title:"Composem",category:"PickHacks 2021 1st place winner, and best fun hack. Composem provides an innovative cloud storage solution to turn a simplistic, accessible markdown syntax into sheet music.",image:"composem.jpg",url:"https://devpost.com/software/composem"},{title:"C-City",category:"BoilerMake 8 Winning Project. Web App my team built to recommend where people to move.",image:"ccity.jpg",url:"https://devpost.com/software/c-city"},{title:"StarStats",category:"Codepath Design Winning Project. An iOS app that display BrawlStar's user statistics.",image:"starstats.jpg",url:"https://github.com/BrawlStats-Purdue/BrawlStats"},{title:"No One Eats Alone",category:"HelloWorld2k18 Winning Project. An iOS app that helps students plan events. This was my my first stab at iOS development and Hackathon!",image:"ios.jpg"}],ve=z.b.div(me||(me=Object(g.a)(["\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  padding: 25px 0px;\n  height: 100%;\n  min-height: 65vh;\n\n  background-color: rgb(35, 37, 39);\n"]))),we=Object(Oe.a)((function(e){var t=e.palette;return{root:{borderRadius:"1rem",backgroundColor:"#000000",height:"100%","&:before":{transition:"0.2s",borderRadius:"1rem",zIndex:0,bottom:0},"&:hover":{"&:before":{bottom:-6}}},cover:{width:"100%"},action:{height:"100%",display:"flex",justifyContent:"flex-start",flexDirection:"column"},content:{position:"relative",zIndex:1,borderRadius:"1rem",boxShadow:"0 6px 16px 0 ".concat(ne()("#fc7944").fade(.5)),"&:before":{content:'""',display:"block",position:"absolute",left:0,top:0,bottom:0,zIndex:0,width:"100%",height:"100%",clipPath:"polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",borderRadius:"1rem",background:"linear-gradient(to top, #fc7944, ".concat(ne()("#fc7944").rotate(24).lighten(.12),")")}},title:{color:"#fff",margin:0,textAlign:"end"},team:{fontSize:"0.75rem",color:t.text.hint},date:{color:"#fff",backgroundColor:t.text.hint,opacity:.72,fontSize:"0.75rem",padding:"0 0.5rem",borderRadius:12}}})),ke=function(e){var t=e.styles,n=e.cover,i=e.title,r=e.brand,o=e.url;return Object(E.jsxs)(re.a,{className:t.root,children:[o&&Object(E.jsxs)(fe.a,{href:o,target:"_blank",className:t.action,children:[Object(E.jsx)("img",{className:t.cover,src:n,alt:"image for "+i}),Object(E.jsxs)(oe.a,{children:[Object(E.jsx)("h3",{children:i}),Object(E.jsx)("div",{children:Object(E.jsx)("p",{children:r})})]})]}),!o&&Object(E.jsxs)("div",{className:t.nonAction,children:[Object(E.jsx)("img",{className:t.cover,src:n,alt:"image for "+i}),Object(E.jsxs)(oe.a,{children:[Object(E.jsx)("h3",{children:i}),Object(E.jsx)("div",{children:Object(E.jsx)("p",{children:r})})]})]})]})};function ze(){var e=we();return Object(E.jsx)(ve,{id:"portfolio",name:"portfolio",children:Object(E.jsxs)(G.a,{className:"portfolio-grid",container:!0,justify:"center",alignItems:"stretch",children:[Object(E.jsx)(G.a,{item:!0,xs:12,style:{marginBottom:"1rem",justifyContent:"center",display:"flex"},children:Object(E.jsxs)("div",{style:{display:"inline-block"},children:[Object(E.jsx)("h2",{style:{margin:0},children:"Award Winning Projects"}),Object(E.jsx)("hr",{})]})}),ye.map((function(t,n){return Object(E.jsx)(G.a,{item:!0,md:4,xl:3,style:{padding:"1rem",boxShadow:"border-box",display:"inline-block"},children:Object(E.jsx)(ke,{url:t.url,styles:e,brand:t.category,cover:"images/portfolio/"+t.image,title:t.title})},n)}))]})})}var Ce=[{title:"Personal Website",category:"I designed this website to showcase my resume. Instead of using a template, I decided to build one from scratch using React.",image:"personalwebsite.jpg",url:"https://chen2886.github.io"},{title:"Ez-Prez: Presentation Generator",category:"My friends and I build this project for a hackathon, BoilerMake 7. We created an iOS and Web app that converts text or voice to a google slide using ML. This was a unique project with an incredible result!",image:"ezprez.jpg",url:"https://devpost.com/software/ez-prez"},{title:"Business Management",category:"I created an application utilizing JavaFx and SQLite3 that track's a company's inventory, formula, and finances. The company was able to see a 25% efficiency increase.",image:"businessmanage.jpg",url:"https://github.com/Chen2886/Business-Management"},{title:"Circle",category:"This is a social media platform that my group created for a semester project. We used concepts from Reddit and added some of our twists to it! (The demo link works, but it takes a while to boot up.)",image:"circle.jpg",url:"https://github.com/Chen2886/Circle-Front"},{title:"Flix",category:"This is one of the first iOS apps that I created. The app displays the top movies from IMDB. My main focus for this app is to learn REST API calls using Swift and constraints. (this apps looks excellent all on all devices and orientation)",image:"ios.jpg",url:"https://github.com/Chen2886/Flix"},{title:"Shell",category:"I created my own bash shell using C++, C, Lex, and Yacc. This was a challenging project since there are a lot of intricate parts to a shell.",image:"bash.jpg"},{title:"ANN",category:"I created two ANNs to recognize mnist_10 dataset: one using TensorFlow, the other one using basic algebra.",image:"mnist.jpg",url:"https://github.com/Chen2886/CS390-lab0"}],Se=z.b.div(ge||(ge=Object(g.a)(["\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  padding: 25px 0px;\n  height: 100%;\n  min-height: 65vh;\n\n  background-color: rgb(35, 37, 39);\n"]))),Ie=Object(Oe.a)((function(e){var t=e.palette;return{root:{borderRadius:"1rem",backgroundColor:"#000000",height:"100%","&:before":{transition:"0.2s",borderRadius:"1rem",zIndex:0,bottom:0},"&:hover":{"&:before":{bottom:-6}}},cover:{width:"100%"},action:{height:"100%",display:"flex",justifyContent:"flex-start",flexDirection:"column"},nonAction:{height:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},content:{position:"relative",zIndex:1,borderRadius:"1rem",boxShadow:"0 6px 16px 0 ".concat(ne()("#fc7944").fade(.5)),"&:before":{content:'""',display:"block",position:"absolute",left:0,top:0,bottom:0,zIndex:0,width:"100%",height:"100%",clipPath:"polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",borderRadius:"1rem",background:"linear-gradient(to top, #fc7944, ".concat(ne()("#fc7944").rotate(24).lighten(.12),")")}},title:{color:"#fff",margin:0,textAlign:"end"},team:{fontSize:"0.75rem",color:t.text.hint},date:{color:"#fff",backgroundColor:t.text.hint,opacity:.72,fontSize:"0.75rem",padding:"0 0.5rem",borderRadius:12}}})),Ne=function(e){var t=e.styles,n=e.cover,i=e.title,r=e.brand,o=e.url;return Object(E.jsxs)(re.a,{className:t.root,children:[o&&Object(E.jsxs)(fe.a,{href:o,target:"_blank",className:t.action,children:[Object(E.jsx)("img",{className:t.cover,src:n,alt:"image for "+i}),Object(E.jsxs)(oe.a,{children:[Object(E.jsx)("h3",{children:i}),Object(E.jsx)("div",{children:Object(E.jsx)("p",{children:r})})]})]}),!o&&Object(E.jsxs)("div",{className:t.nonAction,children:[Object(E.jsx)("img",{className:t.cover,src:n,alt:"image for "+i}),Object(E.jsxs)(oe.a,{children:[Object(E.jsx)("h3",{children:i}),Object(E.jsx)("div",{children:Object(E.jsx)("p",{children:r})})]})]})]})};function Ee(){var e=Ie();return Object(E.jsx)(Se,{id:"second-portfolio",name:"second-portfolio",children:Object(E.jsxs)(G.a,{className:"portfolio-grid",container:!0,justify:"center",alignItems:"stretch",children:[Object(E.jsx)(G.a,{item:!0,xs:12,style:{marginBottom:"1rem",justifyContent:"center",display:"flex"},children:Object(E.jsxs)("div",{style:{display:"inline-block"},children:[Object(E.jsx)("h2",{style:{margin:0},children:"Other Projects"}),Object(E.jsx)("hr",{})]})}),Ce.map((function(t,n){return Object(E.jsx)(G.a,{item:!0,md:4,xl:3,style:{padding:"1rem",boxShadow:"border-box",display:"inline-block"},children:Object(E.jsx)(Ne,{url:t.url,styles:e,brand:t.category,cover:"images/portfolio/"+t.image,title:t.title})},n)}))]})})}var Fe,Te,Pe=n(86),Ae=z.b.div(Fe||(Fe=Object(g.a)(["\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  padding: 25px 0px;\n  height: 100%;\n  min-height: 65vh;\n\n  background-color: rgb(35, 37, 39);\n"]))),Le=z.b.div(Te||(Te=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #eee;\n  width: 100%;\n  height: 100%;\n"]))),Re=[{name:"Java",level:"85"},{name:"C",level:"95"},{name:"SQL",level:"80"},{name:"React Js",level:"95"},{name:"Python",level:"83"},{name:"Swift",level:"77"},{name:"AngularJs",level:"60"},{name:"JS",level:"88"}];function Me(){return Object(E.jsx)(Ae,{id:"skill",name:"skill",children:Object(E.jsxs)(G.a,{className:"skill-grid",container:!0,justify:"center",alignItems:"flex-start",spacing:3,children:[Object(E.jsx)(G.a,{item:!0,xs:12,style:{marginBottom:"1rem",justifyContent:"center",display:"flex"},children:Object(E.jsxs)("div",{style:{display:"inline-block"},children:[Object(E.jsx)("h2",{style:{margin:0},children:"Skills"}),Object(E.jsx)("hr",{})]})}),Object(E.jsx)(G.a,{container:!0,justify:"center",alignItems:"center",spacing:5,children:Re.map((function(e,t){return Object(E.jsx)(G.a,{item:!0,xs:5,sm:3,md:2,children:Object(E.jsx)(Le,{children:Object(E.jsx)(Pe.a,{value:e.level,background:!0,backgroundPadding:6,strokeWidth:5,styles:Object(Pe.b)({backgroundColor:"#bfefff",textColor:"red",pathColor:"rgb(35, 37, 39)",trailColor:"transparent",strokeLinecap:"butt"}),children:Object(E.jsxs)(Le,{style:{color:"rgb(35, 37, 39)"},children:[e.name,Object(E.jsx)("br",{}),e.level,"%"]})})})},t)}))})]})})}var Be,De,We,Ue=n(72),qe=n(388),_e=n(387),He=n(350),Ye=z.b.div(Be||(Be=Object(g.a)(["\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  padding: 25px 0px;\n  height: 100%;\n  min-height: 65vh;\n\n  // background-color: rgb(35, 37, 39);\n"]))),Je=z.b.div(De||(De=Object(g.a)(["\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem;\n\n  // background-color: rgb(35, 37, 39);\n"]))),Ge=[{name:"mail",url:"mailto: hello@tonychen.me",icon:"fas envelope"},{name:"linkedin",url:"https://www.linkedin.com/in/tonychen47/",icon:"fab linkedin"},{name:"github",url:"http://github.com/Chen2886",icon:"fab github-square"}],Ve=Object(ie.a)((function(){return{root:{margin:"1rem","& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:20,borderColor:"#eee"},"&:hover fieldset":{borderColor:"#BFEFFF"},"&.Mui-focused fieldset":{borderColor:"#BFEFFF"}},"& .MuiOutlinedInput-input":{marginLeft:"4px"},"& .MuiInputBase-root":{color:"white"},"& .MuiFormLabel-root":{color:"white"}}}}))((function(e){return Object(E.jsx)(qe.a,Object(ee.a)(Object(ee.a)({},e),{},{variant:"outlined"}))})),Ze=Object(ie.a)((function(){return{root:{boxShadow:"none",margin:"1rem",textTransform:"none",fontSize:16,padding:"6px 12px",border:"0 0 1px 0 solid",lineHeight:1.5,borderColor:"white",color:"white",borderRadius:20,"&:hover":{borderColor:"#BFEFFF",boxShadow:"none"}}}}))((function(e){return Object(E.jsx)(_e.a,Object(ee.a)(Object(ee.a)({},e),{},{disableRipple:!0,variant:"outlined",color:"primary"}))}));function $e(){var e=Object(u.useState)(""),t=Object(f.a)(e,2),n=t[0],i=t[1],r=Object(u.useState)(""),o=Object(f.a)(r,2),c=o[0],a=o[1],s=Object(u.useState)(""),l=Object(f.a)(s,2),d=l[0],b=l[1],j=Object(u.useState)(""),h=Object(f.a)(j,2),x=h[0],p=h[1],m=function(e){"contactName"===e.target.id?i(e.target.value):"contactEmail"===e.target.id?a(e.target.value):"contactSubject"===e.target.id?b(e.target.value):"contactMessage"===e.target.id&&p(e.target.value)};return Object(E.jsx)(Ye,{id:"contact",name:"contact",children:Object(E.jsxs)(G.a,{className:"contact-grid",container:!0,justify:"center",alignItems:"stretch",children:[Object(E.jsx)(G.a,{item:!0,xs:12,style:{marginBottom:"2rem",justifyContent:"center",display:"flex"},children:Object(E.jsxs)("div",{style:{display:"inline-block"},children:[Object(E.jsx)("h2",{style:{margin:0},children:"Contact Me"}),Object(E.jsx)("hr",{})]})}),Object(E.jsx)(G.a,{item:!0,xs:12,children:Object(E.jsx)(He.a,{style:{background:"rgb(35, 37, 39)",borderRadius:"1rem"},elevation:0,children:Object(E.jsxs)(G.a,{container:!0,justify:"center",alignItems:"stretch",spacing:3,children:[Object(E.jsx)(G.a,{item:!0,xs:12,md:6,children:Object(E.jsxs)(Je,{children:[Object(E.jsx)("h3",{children:"Send a Message"}),Object(E.jsx)(Ve,{label:"Your Name",id:"contactName",value:n,onChange:m}),Object(E.jsx)(Ve,{label:"Your Email",id:"contactEmail",value:c,onChange:m}),Object(E.jsx)(Ve,{label:"Subject",id:"contactSubject",value:d,onChange:m}),Object(E.jsx)(Ve,{multiline:!0,rows:4,label:"Message",id:"contactMessage",value:x,onChange:m}),Object(E.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(E.jsx)(Ze,{onClick:function(){var e;0!==n.length?0!==c.length?!1!==/\S+@\S+\.\S+/.test(c)?0!==x.length?(e={name:n,email:c,subject:d,message:x},Ue.a.send("service_qd7f7li","template_l76p0ih",e,"user_UJdsRqUdPt6gVajZYAFwN").then((function(e){200===e.status&&(alert("Your message has been sent, thank you!"),i(""),a(""),b(""),p(""))})).catch((function(e){alert("Failed to send. Someone probably spamed my email, sorry for the inconvenience. Please see my email on the right."),console.error("Failed to send feedback. Error: ",e)}))):alert("Message is required."):alert("Email is invalid."):alert("Email is required."):alert("Name is required.")},children:"Send"})})]})}),Object(E.jsx)(G.a,{item:!0,xs:12,md:6,children:Object(E.jsxs)(Je,{children:[Object(E.jsx)("h3",{children:"Let's Connect"}),Object(E.jsx)("p",{children:"Feel free to send me an email or connect with me on LinkedIn! I would love to discuss job opporunities, project collobration or anything in general!"}),Object(E.jsx)("ul",{className:"social",children:Ge.map((function(e){return Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(E.jsx)(v.a,{icon:[e.icon.split(" ")[0],e.icon.split(" ")[1]]})})},e.name)}))})]})})]})})})]})})}var Xe=z.b.div(We||(We=Object(g.a)(["\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  padding: 25px 0px;\n  height: 100%;\n\n  background-color: rgb(35, 37, 39);\n"])));function Qe(){return Object(E.jsx)(Xe,{id:"footer",name:"footer",children:Object(E.jsx)(G.a,{className:"footer-grid",container:!0,justify:"center",alignItems:"stretch",children:Object(E.jsx)(G.a,{item:!0,xs:12,style:{justifyContent:"center",display:"flex"},children:Object(E.jsx)("p",{style:{margin:0,color:"grey"},children:"Designed and Built by Tony Chen"})})})})}var Ke,et=n(62),tt=n(50),nt=n(124),it=n(122),rt=n.n(it),ot=n(123);var ct=function(){var e=z.b.div(Ke||(Ke=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n  "])));return tt.b.add(nt.a,et.d,et.a,et.b,et.c),Object(Ue.b)("user_UJdsRqUdPt6gVajZYAFwN"),Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(rt.a,{options:ot,style:{zIndex:-1}}),Object(E.jsxs)(e,{id:"content",children:[Object(E.jsx)(_,{}),Object(E.jsx)(Q,{}),Object(E.jsx)(pe,{}),Object(E.jsx)(Me,{}),Object(E.jsx)(ze,{}),Object(E.jsx)(Ee,{}),Object(E.jsx)($e,{}),Object(E.jsx)(Qe,{})]})]})};m.a.render(Object(E.jsx)(ct,{}),document.getElementById("root"))}},[[347,1,2]]]);
//# sourceMappingURL=main.c3dde548.chunk.js.map