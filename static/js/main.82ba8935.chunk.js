(this.webpackJsonppierfrancescopasini=this.webpackJsonppierfrancescopasini||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n(1),a=n.n(o),r=n(22),s=n.n(r),c=(n(34),n(2)),d=n(3),l=n(5),h=n(4),u=(n(35),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={showPhone:!1,showMail:!1,showSocial:!1,onPhone:!1,onMail:!1,onSocial:!1},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e={transition:"0.4s",backgroundColor:"#F5F5F5",color:"#282c34",borderRadius:"3px",marginRight:"5.5px",marginLeft:"5.5px",marginTop:"5.5px",marginBottom:"5.5px",fontSize:"20px"},n=20,o=!1;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(o=!0,n=window.matchMedia("(orientation: portrait)").matches?window.innerWidth/20:window.innerWidth/40,e.fontSize=n),Object(i.jsxs)("div",{id:"contacts",className:"container",children:[Object(i.jsxs)("div",{style:{marginBottom:"0.5cm"},children:[Object(i.jsx)("span",{style:{fontSize:n},children:"|"}),Object(i.jsx)("span",{style:this.state.showPhone||this.state.onPhone?e:{transition:"0.4s",fontSize:n},onClick:function(){setTimeout((function(){window.scrollTo(0,window.outerHeight+20)}),20),t.setState((function(t){return{showPhone:!t.showPhone,showMail:!1,showSocial:!1}}))},onMouseEnter:function(){t.setState({onPhone:!0})},onMouseLeave:function(){t.setState({onPhone:!1})},children:"Phone  "}),Object(i.jsx)("span",{style:{fontSize:n},children:"|"}),Object(i.jsx)("span",{style:this.state.showMail||this.state.onMail?e:{transition:"0.4s",fontSize:n},onClick:function(){setTimeout((function(){window.scrollTo(0,window.outerHeight+20)}),20),t.setState((function(t){return{showPhone:!1,showMail:!t.showMail,showSocial:!1}}))},onMouseEnter:function(){t.setState({onMail:!0})},onMouseLeave:function(){t.setState({onMail:!1})},children:"Email  "}),Object(i.jsx)("span",{style:{fontSize:n},children:"|"}),Object(i.jsx)("span",{style:this.state.showSocial||this.state.onSocial?e:{transition:"0.4s",fontSize:n},onClick:function(){setTimeout((function(){window.scrollTo(0,window.outerHeight+window.outerHeight/5)}),20),t.setState((function(t){return{showPhone:!1,showMail:!1,showSocial:!t.showSocial}}))},onMouseEnter:function(){t.setState({onSocial:!0})},onMouseLeave:function(){t.setState({onSocial:!1})},children:"Socials "})]}),Object(i.jsxs)("div",{children:[this.state.showPhone?Object(i.jsx)("div",{className:"downmovers",style:{fontSize:n,marginBottom:"2%"},children:"(+39)  3343777058 "}):Object(i.jsx)("div",{}),this.state.showMail?Object(i.jsx)("div",{className:"downmovers",onClick:function(){window.location.href="mailto:pierfrancesco.pasini@gmail.com"},style:{fontSize:n,marginBottom:"2%",cursor:"pointer"},children:"pierfrancesco.pasini@gmail.com "}):Object(i.jsx)("div",{}),this.state.showSocial?Object(i.jsxs)("div",{className:"downmovers",style:o?{}:{bottom:"8%"},children:[Object(i.jsx)("div",{style:{marginBottom:"1%"},children:Object(i.jsx)("a",{className:"social-lnk",style:{fontFamily:"Oleo Script",fontSize:1.2*n},href:"https://www.instagram.com/pierfrancescopasini/",children:"Instagram  "})}),Object(i.jsx)("div",{style:{marginBottom:"1%"},children:Object(i.jsx)("a",{className:"social-lnk",style:{fontFamily:"Neue Helvetica",fontSize:1.2*n},href:"https://it-it.facebook.com/pierfrancesco.pasini",children:"facebook   "})})]}):Object(i.jsx)("div",{})]})]})}}]),n}(a.a.Component)),j=n(23),w=n.n(j),p=(n(36),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=window.innerWidth/22.5,e=3*t,n=t/2,o=3.5*n,a=window.innerWidth/2-10*t,r=window.innerHeight/12,s=a+t-n/2,c=10*Math.random(),d=10*Math.random(),l=t+window.innerWidth/230;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&window.matchMedia("(orientation: portrait)").matches&&(t=window.innerWidth/15,e=4*t,o=3.5*(n=t/1.5),a=window.outerWidth/2-6*t,r=window.innerHeight/20,s=a+t-n/2,c=10*Math.random(),d=10*Math.random(),l=t+window.innerWidth/230);return Object(i.jsx)("div",{children:Object(i.jsx)(w.a,{setup:function(n,i){n.createCanvas(12*t+a,e+r+window.innerWidth/20).parent(i)},draw:function(i){i.frameRate(12),i.background("#282c34"),i.noStroke();for(var h=0;h<10;h++)c=1.5*Math.random(),d=2.5*Math.random(),i.fill("white"),i.rect(a+c+l*h,r+d,t,e,20);for(var u=0;u<9;u++)2!==u&&6!==u&&(c=1.5*Math.random(),d=2.5*Math.random(),i.fill("#282c34"),i.rect(s+c+l*u,r+d,n,o,20))},windowResized:function(n){n.resizeCanvas(12*t+a,e+r+window.innerWidth/20)}})})}}]),n}(a.a.Component)),b=n(13),f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={mouseOver:!1},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e={transition:"1.2s",borderRadius:"10px",backgroundColor:"#282c34",width:144,heigth:"100%",marginLeft:"auto",marginRight:"auto",fontSize:"22px"};return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(e.width="auto",e.height="auto",window.matchMedia("(orientation: portrait)").matches?e.fontSize=window.innerWidth/20:e.fontSize=window.innerWidth/25),Object(i.jsx)(b.b,{className:"lnk",to:this.props.path,onMouseEnter:function(){t.setState({mouseOver:!0})},onMouseLeave:function(){t.setState({mouseOver:!1})},children:this.state.mouseOver?Object(i.jsxs)("div",{className:"lnk",style:{transition:"0.8s",backgroundColor:"#F5F5F5",color:"#282c34",borderRadius:"10px",width:205,heigth:"100%",marginLeft:"auto",marginRight:"auto",fontSize:"22px"},children:[this.props.name,"        ",Object(i.jsx)("i",{className:"arrow right"})," "]}):Object(i.jsx)("div",{style:e,children:this.props.name})})}}]),n}(a.a.Component),m=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"videoscontactslink",children:[Object(i.jsx)("div",{style:{marginBottom:"20px"},children:Object(i.jsx)(f,{name:"About Me",path:"/about"})}),Object(i.jsx)("div",{style:{marginBottom:"20px"},children:Object(i.jsx)(f,{name:"Videos",path:"/videos"})}),Object(i.jsx)("div",{style:{marginBottom:"20px"},children:Object(i.jsx)(f,{name:"Projects",path:"/projects"})})]})}}]),n}(a.a.Component),O=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t,e;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.matchMedia("(orientation: portrait)").matches?(t={fontSize:window.outerWidth/12},e={fontSize:window.outerWidth/18}):(t={fontSize:window.outerWidth/20},e={fontSize:window.outerWidth/25})),Object(i.jsxs)("div",{id:"centerall",className:"container",children:[Object(i.jsx)("h1",{style:t,id:"nameTitle",children:"Pierfrancesco Pasini"}),Object(i.jsx)("h2",{style:e,id:"musician",children:"Musician"}),Object(i.jsx)(p,{}),Object(i.jsx)(m,{}),Object(i.jsx)(u,{})]})}}]),n}(a.a.Component),y=n.p+"static/media/pierpiero.64f785bd.jpeg",v=n(28),g=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={percent:0},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.setState((function(e){return{percent:e.percent+t.props.progress.amount}}))}),this.props.progress.time)}},{key:"render",value:function(){return Object(i.jsx)(v.a,{percent:this.state.percent,style:this.props.styleBar,strokeWidth:"1.5",strokeColor:"#F5F5F5"})}}]),n}(a.a.Component),x=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("p",{id:"aboutme",style:{backgroundColor:"#F5F5F5",color:"#282c34",width:this.props.width,fontSize:this.props.fontsize,borderRadius:"10px",textAlign:"center"},children:"I play da sweet piano, da kool guitar, and I make da sweet love to you."})}}]),n}(a.a.Component),S=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={stylePage:{display:"none"},styleLoad:{display:"block"}},t.componentDidMount=function(){setTimeout((function(){t.setState({stylePage:{display:"block"},styleLoad:{display:"none"}})}),800),window.addEventListener("load",(function(){t.setState({stylePage:{display:"block"},styleLoad:{display:"none"}})}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=window.outerWidth/4,e=window.outerWidth/40,n=window.outerWidth/50;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.matchMedia("(orientation: portrait)").matches?(e=window.outerWidth/15,n=window.outerWidth/20,t=window.outerHeight/5):(e=window.outerWidth/25,n=window.outerWidth/35)),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{style:this.state.styleLoad,id:"barVid",children:[Object(i.jsx)("h1",{style:{borderRadius:"10px",width:"100%",fontWeight:"500",fontSize:e},children:"About Me:"}),Object(i.jsx)(g,{progress:{amount:1,time:10},styleBar:{width:t,height:t}})]}),Object(i.jsxs)("div",{style:this.state.stylePage,children:[Object(i.jsx)("h1",{style:{borderRadius:"10px",width:"100%",fontWeight:"500",fontSize:e},children:"About Me:"}),Object(i.jsx)("img",{style:{float:"right",borderRadius:"10px",width:"40%",marginBottom:"5px"},src:y,alt:"profile"}),Object(i.jsx)(x,{width:"50%",fontsize:n})]})]})}}]),n}(a.a.Component),M=n(25),k=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("orientationchange",(function(){window.location.reload()}))}},{key:"render",value:function(){var t={width:window.innerWidth/2.5,height:window.innerHeight/2,playerVars:{color:"white",autoplay:0}};/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(t=window.matchMedia("(orientation: portrait)").matches?{width:window.innerWidth/2.3,height:window.innerHeight/4,playerVars:{color:"white",autoplay:0}}:{width:window.innerWidth/2.3,height:window.innerHeight/1.5,playerVars:{color:"white",autoplay:0}});return Object(i.jsx)("div",{id:"videoGrid",children:[{text:"Mecna",link:"LJtOZH701ZI"},{text:"ChiamamiFaro",link:"nmRxDltsFZY"},{text:"Carolina",link:"HzTJkXgs44c"},{text:"Carolina",link:"Lex3FXEpr0Y"}].map((function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(M.a,{className:"customYT",videoId:e.link,opts:t}),Object(i.jsx)("span",{style:{color:"#F5F5F5",textTransform:"uppercase"},children:e.text})]},e.link)}))})}}]),n}(a.a.Component),P=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={styleVideos:{display:"none"},styleLoad:{display:"block"}},t.reload=function(){window.location.reload()},t.componentDidMount=function(){setTimeout((function(){t.setState({styleVideos:{display:"block"},styleLoad:{display:"none"}})}),2e3),window.addEventListener("load",(function(){t.setState({stylePage:{display:"block"},styleLoad:{display:"none"}})}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=window.outerWidth/4;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&window.matchMedia("(orientation: portrait)").matches&&(t=window.outerHeight/5),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Videos"}),Object(i.jsx)("div",{style:this.state.styleVideos,children:Object(i.jsx)(k,{})}),Object(i.jsx)("div",{style:this.state.styleLoad,id:"barVid",children:Object(i.jsx)(g,{progress:{amount:1,time:10},styleBar:{width:t,height:t}})})]})}}]),n}(a.a.Component),B=n(19),C=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={styleCards:{display:"flex",flexDirection:"row"}},t.componentDidMount=function(){},t}return Object(d.a)(n,[{key:"render",value:function(){window.outerWidth;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&window.matchMedia("(orientation: portrait)").matches&&window.outerHeight;var t,e,n=["5e33d90hvAsPdOrC0dtskP","0HUDXbFaRlxFJuFRSftwJA","5dCIrLEY5lUgntCR9F9yit","5uaOfLTa1aXHxPYmXytiq2","7xF0gCFzeJdGvVjWkDPvKJ","60mrAm82z03UQ3W85rO8GF"],o=["2lQGFIpD5MRghyrjW91LoR","6QXCvzyzpLQsI6M99Qyalm","2HgF0tqyua6zRU5ig6MPJV","5EMAHTk9IDzUVnXqcWzEj1","43ZztZLSJdEm2RjX0aKhEq","0LlOJWcJZbJRCc2vVJkR9S","5E3dBXdNPpE5vK4EAK4wdR","58adZaMwhvrHJ2rclo24gB","4KXlKIfIPR85EOf9uamnUf","3QqYhjrVvZwMoV9r4aBYBG","1N928MHssSvFI6TEVxVRQF","3zYgLrwKQBei7f6FxKVc6W"];return t=""+window.innerWidth/4.5,e=""+window.innerHeight/3,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.matchMedia("(orientation: portrait)").matches?(e=""+window.innerHeight/3.5,t=""+window.innerHeight/3):(t=""+window.innerWidth/4,e=""+window.innerHeight/2)),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Albums"}),Object(i.jsx)("div",{id:"album-scroll",className:"spotifyGrid"}),Object(i.jsx)(B.a,{dataLength:n.length,style:this.state.styleCards,scrollableTarget:"single-scroll",children:n.map((function(n){return Object(i.jsx)("div",{style:{marginInline:"5px",marginRight:"5px"},children:Object(i.jsx)("iframe",{className:"spotifyCard",src:"https://open.spotify.com/embed/album/"+n,width:t,height:e,frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",title:n})},n)}))}),Object(i.jsx)("h4",{children:"Singles"}),Object(i.jsx)("div",{id:"singles-scroll",className:"spotifyGrid"}),Object(i.jsx)(B.a,{dataLength:o.length,style:this.state.styleCards,scrollableTarget:"single-scroll",children:o.map((function(n){return Object(i.jsx)("div",{style:{marginInline:"5px",marginRight:"5px"},children:Object(i.jsx)("iframe",{className:"spotifyCard",src:"https://open.spotify.com/embed/track/"+n,width:t,height:e,frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",title:n})},n)}))})]})}}]),n}(a.a.Component),W=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={styleSpotify:{display:"none"},styleLoad:{display:"block"}},t.reload=function(){window.location.reload()},t.componentDidMount=function(){setTimeout((function(){t.setState({styleSpotify:{display:"block"},styleLoad:{display:"none"}})}),2e3),window.addEventListener("load",(function(){t.setState({stylePage:{display:"block"},styleLoad:{display:"none"}})}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=window.outerWidth/4;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Projects"}),Object(i.jsx)("div",{style:this.state.styleSpotify,children:Object(i.jsx)(C,{})}),Object(i.jsx)("div",{style:this.state.styleLoad,children:Object(i.jsx)(g,{progress:{amount:.2,time:1},styleBar:{width:t,height:t}})})]})}}]),n}(a.a.Component),z=n(6),A=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).reload=function(){window.location.reload()},t.componentDidMount=function(){window.addEventListener("resize",(function(e){e.preventDefault(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?setTimeout((function(){t.setState({})}),20):t.setState({})})),window.addEventListener("orientationchange",(function(e){e.preventDefault(),setTimeout((function(){t.setState({})}),20)}))},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)(b.a,{children:Object(i.jsxs)(z.c,{children:[Object(i.jsx)(z.a,{exact:!0,path:"/about",component:S}),Object(i.jsx)(z.a,{exact:!0,path:"/videos",component:P}),Object(i.jsx)(z.a,{exact:!0,path:"/projects",component:W}),Object(i.jsx)(z.a,{exact:!0,path:"/",component:O})]})})}}]),n}(a.a.Component),L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),i(t),o(t),a(t),r(t)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(A,{})}),document.getElementById("root")),L()}},[[54,1,2]]]);
//# sourceMappingURL=main.82ba8935.chunk.js.map