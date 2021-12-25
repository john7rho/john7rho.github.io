(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports=a(155)},107:function(e,t,a){},108:function(e,t,a){},115:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(48),c=a.n(r),i=(a(107),a(14)),o=a(21),s=a(18),m=a(17),u=a(19),d=a(36),h=a(28),p=a(24),f=a.n(p),E=a(43),b=a.n(E),g=a(101),v=a.n(g),y=(a(108),a(25)),w=a.n(y),k=a(33),N=a.n(k);var x=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(f.a,{fluid:!0},l.a.createElement(w.a,{className:"border-top justify-content-between p-3"},l.a.createElement(N.a,{className:"p-0",md:3,sm:12},"Copyright John Rho 2021"))))},T=a(13),j=a(161),I=a(79),C=a.n(I);var S=function(e){return l.a.createElement(C.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(f.a,{fluid:!0},l.a.createElement(w.a,{className:"justify-content-center py-5"},l.a.createElement(N.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},O=a(30),B=a(67);var A=function(e){var t=Object(B.b)({opacity:1,from:{opacity:0}});return l.a.createElement(B.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var z=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(A,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},W=a(80),L=a.n(W),H=a(81),R=a.n(H),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleCardClick=function(e,t){var n=Object(O.a)(a.state.items);n[e].selected=!n[e].selected,n.forEach(function(t){t.id!==e&&(t.selected=!1)}),a.setState({items:n})},a.makeItems=function(e){return e.map(function(e){return l.a.createElement(z,{item:e,click:function(t){return a.handleCardClick(e.id,t)},key:e.id})})},a.state={items:[{id:0,title:"ListenIn",subTitle:"AI, BCI hearing aid to address cocktail party problem",imgSrc:L.a,link:"https://www.youtube.com/watch?v=0SOuqN3godo",selected:!1},{id:1,title:"Orpheus",subTitle:"Dynamic music stem splitter and player",imgSrc:R.a,link:"https://www.youtube.com/watch?v=A0xaP308D7I",selected:!1}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,{fluid:!0},l.a.createElement(w.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),t}(l.a.Component),M=T.a.create({baseText:{fontWeight:"bold",fontSize:36},innerText:{fontWeight:"100",color:"gray",fontSize:26,fontStyle:"italic"},baseTextAlt:{fontWeight:"bold",fontSize:36,color:"blue"},fillerText:{fontSize:20,color:"clear"}});var P=function(e){return l.a.createElement("div",null,l.a.createElement(j.a,{style:T.a.fillerText},"\n"),l.a.createElement(j.a,{style:M.baseText},"Welcome to my "),l.a.createElement(j.a,{style:M.baseTextAlt},"website ","\n"," "),l.a.createElement(j.a,{style:M.innerText},"Here are some things I'm exploring"),l.a.createElement(J,null))};var _=function(e){return l.a.createElement(f.a,{fluid:!0},l.a.createElement(w.a,{className:"justify-content-center"},l.a.createElement(N.a,{md:8},e.children)))},G=a(63),q=a(162),D=a(98),Y=a.n(D),K=T.a.create({container:{paddingTop:20,paddingBottom:50},picture:{width:100,height:100}});var U=function(e){return l.a.createElement("div",null,l.a.createElement(S,{title:e.title}),l.a.createElement(G.a,{style:K.container},l.a.createElement(G.a,null,l.a.createElement(q.a,{style:{resizeMode:"cover",height:300,width:300,alignSelf:"center"},source:Y.a}))),l.a.createElement(_,null,l.a.createElement("p",null,"Hey, I'm John. I'm currently building skills in React and Python for fun."),l.a.createElement("p",null,"I am currently a student at Harvard College (Class of 2025) considering Econ, CS, and Mind Brain Behavior."),l.a.createElement("p",null,"In the past, I've worked on deep learning projects to help make more intelligent hearing aids that can address the cocktail party problem."),l.a.createElement("p",null,"I've co-founded organizations like ",l.a.createElement("a",{href:"https://cashclubcorp.info",target:"_blank",rel:"noopener noreferrer"},"CASH Club Corp.")," and ",l.a.createElement("a",{href:"https://aysi.org",target:"_blank",rel:"noopener noreferrer"},"the Association for Young Scientists and Innovators."),".")))};var V=function(e){return l.a.createElement("div",null,l.a.createElement(S,{title:e.title}),l.a.createElement(_,null,l.a.createElement("p",null,"Open to any emails! I will respond as soon as I have some free time."),l.a.createElement("p",null,"Email: john.rho [at] cashclubcorp [dot] info ")))},X=(a(114),a(163)),$=a(164);a(115),T.a.create({container:{paddingTop:20,paddingBottom:50},picture:{width:100,height:100}});var F=function(e){return l.a.createElement("div",null,l.a.createElement(S,{title:e.title}),l.a.createElement(X.a,{style:{width:"18rem"}},l.a.createElement(X.a.Img,{variant:"top",src:"https://source.unsplash.com/user/erondu/600x400"}),l.a.createElement(X.a.Body,null,l.a.createElement(X.a.Title,null,"Blog #000001"),l.a.createElement(X.a.Text,null,"The Start"),l.a.createElement($.a,{variant:"primary"},"Coming Soon"))))},Q=a(64),Z=a(65);function ee(){return l.a.createElement("div",{class:"social-container",className:"justify-content-right py-3",fluid:!0},l.a.createElement("a",{href:"https://www.linkedin.com/in/rhojohn/",className:"linkedin social"},l.a.createElement(Q.a,{icon:Z.b,size:"3x"})),l.a.createElement("a",{href:"https://www.instagram.com/john7rho/?hl=en",className:"instagram social"},l.a.createElement(Q.a,{icon:Z.a,size:"3x"})))}var te=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={title:"",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Blog",path:"/blog"},{title:"Contact",path:"/contact"},{title:"Resume",path:"/resume"}],home:{title:"Innovate to inspire",subTitle:"Welcome to my website! (Work In Progress)",text:"Checkout some stuff I am working on below"},about:{title:"About Me"},contact:{title:"Let's Chat!"}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement(f.a,{className:"p-3",fluid:!0},l.a.createElement(b.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(b.a.Brand,null)," ",l.a.createElement(b.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(b.a.Collapse,{id:"navbar-toggle"},l.a.createElement(v.a,{className:"ml-auto"},l.a.createElement(d.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(d.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(d.b,{className:"nav-link",to:"/blog"},"Blog"),l.a.createElement(d.b,{className:"nav-link",to:"/resume"},"Resume")))),l.a.createElement(h.a,{path:"/",exact:!0,render:function(){return l.a.createElement(P,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(h.a,{path:"/about",render:function(){return l.a.createElement(U,{title:e.state.about.title})}}),l.a.createElement(h.a,{path:"/blog",render:function(){return l.a.createElement(F,{title:"My Blog"})}}),l.a.createElement(h.a,{path:"/contact",render:function(){return l.a.createElement(V,{title:e.state.contact.title})}}),l.a.createElement(h.a,{path:"/resume",component:function(){return window.location.href="https://docs.google.com/document/d/15hKXYGbtROTUrAzjA-PeGGlcLu7p2dNSyvm-61EaL1o/edit?usp=sharing",null}}),l.a.createElement(x,null),l.a.createElement(ee,null)))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(154);c.a.render(l.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){e.exports=a.p+"static/media/ListenIn.dbbf02b6.png"},81:function(e,t,a){e.exports=a.p+"static/media/OrpheusLogo_square.a5ea04eb.png"},98:function(e,t,a){e.exports=a.p+"static/media/Rho-John-5.00f03f3d.jpg"}},[[102,1,2]]]);
//# sourceMappingURL=main.445cafa5.chunk.js.map