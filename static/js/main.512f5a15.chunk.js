(this.webpackJsonppierfrancescopasini=this.webpackJsonppierfrancescopasini||[]).push([[0],{40:function(t,e,n){},41:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n(1),a=n.n(o),s=n(19),r=n.n(s),c=(n(40),n(3)),d=n(4),l=n(6),h=n(5),p=(n(41),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={showPhone:!1,showMail:!1,showSocial:!1,onPhone:!1,onMail:!1,onSocial:!1},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e={transition:"0.4s",backgroundColor:"#F5F5F5",color:"#282c34",borderRadius:"3px",marginRight:"5.5px",marginLeft:"5.5px",marginTop:"5.5px",marginBottom:"5.5px",fontSize:"20px"},n=20,o=!1;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(o=!0,n=window.matchMedia("(orientation: portrait)").matches?window.innerWidth/20:window.innerWidth/40,e.fontSize=n),Object(i.jsxs)("div",{id:"contacts",className:"container",children:[Object(i.jsxs)("div",{style:{marginBottom:"0.5cm"},children:[Object(i.jsx)("span",{style:{fontSize:n},children:"|"}),Object(i.jsx)("span",{style:this.state.showPhone||this.state.onPhone?e:{transition:"0.4s",fontSize:n},onClick:function(){t.setState((function(t){return{showPhone:!t.showPhone,showMail:!1,showSocial:!1}}))},onMouseEnter:function(){t.setState({onPhone:!0})},onMouseLeave:function(){t.setState({onPhone:!1})},children:"Phone  "}),Object(i.jsx)("span",{style:{fontSize:n},children:"|"}),Object(i.jsx)("span",{style:this.state.showMail||this.state.onMail?e:{transition:"0.4s",fontSize:n},onClick:function(){t.setState((function(t){return{showPhone:!1,showMail:!t.showMail,showSocial:!1}}))},onMouseEnter:function(){t.setState({onMail:!0})},onMouseLeave:function(){t.setState({onMail:!1})},children:"Email  "}),Object(i.jsx)("span",{style:{fontSize:n},children:"|"}),Object(i.jsx)("span",{style:this.state.showSocial||this.state.onSocial?e:{transition:"0.4s",fontSize:n},onClick:function(){t.setState((function(t){return{showPhone:!1,showMail:!1,showSocial:!t.showSocial}}))},onMouseEnter:function(){t.setState({onSocial:!0})},onMouseLeave:function(){t.setState({onSocial:!1})},children:"Socials "})]}),Object(i.jsxs)("div",{children:[this.state.showPhone?Object(i.jsx)("div",{className:"downmovers",style:{fontSize:n,marginBottom:"2%"},children:"(+39)  3343777058 "}):Object(i.jsx)("div",{}),this.state.showMail?Object(i.jsx)("div",{className:"downmovers",onClick:function(){window.location.href="mailto:pierfrancesco.pasini@gmail.com"},style:{fontSize:n,marginBottom:"2%",cursor:"pointer"},children:"pierfrancesco.pasini@gmail.com "}):Object(i.jsx)("div",{}),this.state.showSocial?Object(i.jsxs)("div",{className:"downmovers",style:o?{}:{bottom:"8%"},children:[Object(i.jsx)("span",{style:{marginRight:"1%"},children:Object(i.jsx)("a",{className:"social-lnk",style:{fontFamily:"Oleo Script",fontSize:1.2*n},href:"https://www.instagram.com/pierfrancescopasini/",children:"Instagram  "})}),Object(i.jsx)("span",{style:{marginRight:"1%"},children:Object(i.jsx)("a",{className:"social-lnk",style:{fontFamily:"Neue Helvetica",fontSize:1.2*n},href:"https://it-it.facebook.com/pierfrancesco.pasini",children:"facebook   "})})]}):Object(i.jsx)("div",{})]})]})}}]),n}(a.a.Component)),m=n(27),v=n.n(m),w=(n(42),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).componentDidMount=function(){window.addEventListener("resize",(function(){setTimeout((function(){t.setState({})}),200)})),window.addEventListener("orientationchange",(function(){window.location.reload()}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=window.innerWidth/22.5,e=3*t,n=t/2,o=3.5*n,a=window.innerWidth/2-10*t,s=window.innerHeight/12,r=a+t-n/2,c=10*Math.random(),d=10*Math.random(),l=t+window.innerWidth/230;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&window.matchMedia("(orientation: portrait)").matches&&(t=window.innerWidth/15,e=4*t,o=3.5*(n=t/1.5),a=window.outerWidth/2-6*t,s=window.innerHeight/20,r=a+t-n/2,c=10*Math.random(),d=10*Math.random(),l=t+window.innerWidth/230);return Object(i.jsx)("div",{children:Object(i.jsx)(v.a,{setup:function(n,i){n.createCanvas(12*t+a,e+s+window.innerWidth/20).parent(i)},draw:function(i){i.frameRate(12),i.background("#282c34"),i.noStroke();for(var h=0;h<10;h++)c=1.5*Math.random(),d=2.5*Math.random(),i.fill("white"),i.rect(a+c+l*h,s+d,t,e,20);for(var p=0;p<9;p++)2!==p&&6!==p&&(c=1.5*Math.random(),d=2.5*Math.random(),i.fill("#282c34"),i.rect(r+c+l*p,s+d,n,o,20))},windowResized:function(n){n.resizeCanvas(12*t+a,e+s+window.innerWidth/20)}})})}}]),n}(a.a.Component)),j=n(34),u=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={percent:0},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.setState((function(e){return{percent:e.percent+t.props.progress.amount}}))}),this.props.progress.time)}},{key:"render",value:function(){return Object(i.jsx)(j.a,{percent:this.state.percent,style:this.props.styleBar,strokeWidth:"1.5",strokeColor:"#F5F5F5"})}}]),n}(a.a.Component),b=n(13),g=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={mouseOver:!1},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e={transition:"1.2s",borderRadius:"10px",backgroundColor:"#282c34",width:144,heigth:"100%",marginLeft:"auto",marginRight:"auto",fontSize:"22px"},n={transition:"1.2s",borderRadius:"10px",backgroundColor:"#282c34",width:144,heigth:"100%",marginLeft:"auto",marginRight:"auto",fontSize:"22px"};this.props.home&&(n.color="#282c34",n.backgroundColor="#f5f5f5",e.color="#282c34",e.backgroundColor="#f5f5f5");var o=!1;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(e.width="auto",e.height="auto",window.matchMedia("(orientation: portrait)").matches?e.fontSize=window.innerWidth/20:e.fontSize=window.innerWidth/25,o=!0),Object(i.jsx)(b.b,{className:"lnk",to:this.props.path,onMouseEnter:function(){t.setState({mouseOver:!0})},onMouseLeave:function(){t.setState({mouseOver:!1})},children:this.state.mouseOver||o?Object(i.jsxs)("div",{className:"lnk",style:o?n:{transition:"0.8s",backgroundColor:"#F5F5F5",color:"#282c34",borderRadius:"10px",width:205,heigth:"100%",marginLeft:"auto",marginRight:"auto",fontSize:"22px"},children:[this.props.name,"        ",Object(i.jsx)("i",{style:o&&!this.props.home?{border:" solid #F5F5F5",borderWidth:"0px 1px 1px 0px"}:{},className:"arrow right"})," "]}):Object(i.jsx)("div",{style:e,children:this.props.name})})}}]),n}(a.a.Component),f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={mouseOver:!1},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e={transition:"1.2s",borderRadius:"10px",backgroundColor:"#282c34",width:144,heigth:"100%",marginLeft:"auto",marginRight:"auto",fontSize:"22px"};this.props.home&&(e.color="#282c34",e.backgroundColor="#f5f5f5");var n=!1;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(e.width="auto",e.height="auto",window.matchMedia("(orientation: portrait)").matches?e.fontSize=window.innerWidth/20:e.fontSize=window.innerWidth/25,n=!0),Object(i.jsx)("div",{className:"lnk",to:this.props.path,onMouseEnter:function(){t.setState({mouseOver:!0})},onMouseLeave:function(){t.setState({mouseOver:!1})},onTouchEnd:function(){window.scrollTo(t.props.scroll)},onClick:function(){window.scrollTo(t.props.scroll)},children:this.state.mouseOver||n?Object(i.jsxs)("div",{className:"lnk",style:n?{transition:"1.2s",borderRadius:"10px",backgroundColor:"#282c34",width:144,heigth:"100%",marginLeft:"auto",marginRight:"auto",fontSize:"22px"}:{transition:"0.8s",backgroundColor:"#F5F5F5",color:"#282c34",borderRadius:"10px",width:205,heigth:"100%",marginLeft:"auto",marginRight:"auto",fontSize:"22px"},children:[this.props.name,"        ",Object(i.jsx)("i",{style:n?{border:" solid #F5F5F5",borderWidth:"0px 1px 1px 0px"}:{},className:"arrow right"})," "]}):Object(i.jsx)("div",{style:e,children:this.props.name})})}}]),n}(a.a.Component),y=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={mouseOverVideos:!1,mouseOverSpotify:!1,mouseOverAbout:!1},t}return Object(d.a)(n,[{key:"render",value:function(){var t=1.135*window.innerHeight;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.matchMedia("(orientation: portrait)").matches||(t=2*window.screen.height)),Object(i.jsxs)("div",{id:"videoscontactslink",children:[Object(i.jsx)("div",{style:{marginBottom:"20px"},children:Object(i.jsx)(g,{name:"About Me",path:"/about"})}),Object(i.jsx)("div",{style:{marginBottom:"20px"},children:Object(i.jsx)(f,{name:"Videos",scroll:{top:1*t,left:0,behavior:"smooth"}})}),Object(i.jsx)("div",{style:{marginBottom:"20px"},children:Object(i.jsx)(f,{name:"Spotify",scroll:{top:2*t,left:0,behavior:"smooth"}})}),Object(i.jsx)("div",{style:{marginBottom:"20px"},children:Object(i.jsx)(f,{name:"Events",scroll:{top:3*t,left:0,behavior:"smooth"}})})]})}}]),n}(a.a.Component),O=n(22),E=["5e33d90hvAsPdOrC0dtskP","0HUDXbFaRlxFJuFRSftwJA","5dCIrLEY5lUgntCR9F9yit","5uaOfLTa1aXHxPYmXytiq2","7xF0gCFzeJdGvVjWkDPvKJ","60mrAm82z03UQ3W85rO8GF"],k=["2lQGFIpD5MRghyrjW91LoR","6QXCvzyzpLQsI6M99Qyalm","2HgF0tqyua6zRU5ig6MPJV","5EMAHTk9IDzUVnXqcWzEj1","43ZztZLSJdEm2RjX0aKhEq","0LlOJWcJZbJRCc2vVJkR9S","5E3dBXdNPpE5vK4EAK4wdR","58adZaMwhvrHJ2rclo24gB","4KXlKIfIPR85EOf9uamnUf","3QqYhjrVvZwMoV9r4aBYBG","1N928MHssSvFI6TEVxVRQF","3zYgLrwKQBei7f6FxKVc6W"],x=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={styleCards:{display:"flex",flexDirection:"row",left:0,right:0}},t.componentDidMount=function(){window.addEventListener("orientationchange",(function(){t.setState({})}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;console.log(this.props);var e,n,o=E,a=k;e=""+window.innerWidth/4.5,n=""+window.innerHeight/3;var s=!1;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.matchMedia("(orientation: portrait)").matches?(n=""+window.innerHeight/3.5,e=""+window.innerHeight/3):(e=""+window.innerWidth/4,n=""+window.innerHeight/2),s=!0),o=o.slice(0,this.props.nAlbums),a=a.slice(0,this.props.nTracks),Object(i.jsx)("div",{children:this.props.displayAlbums?Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Albums"}),Object(i.jsx)("div",{id:"album-scroll",className:"spotifyGrid"}),Object(i.jsx)(O.a,{dataLength:o.length,style:this.state.styleCards,scrollableTarget:"single-scroll",children:o.map((function(t){return Object(i.jsx)("div",{style:{marginInline:"5px",marginRight:"5px"},children:Object(i.jsx)("iframe",{className:"spotifyCard",src:"https://open.spotify.com/embed/album/"+t,width:e,height:n,frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",title:t})},t)}))}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Singles"}),Object(i.jsx)("div",{id:"singles-scroll",className:"spotifyGrid"}),Object(i.jsx)(O.a,{dataLength:a.length,style:this.state.styleCards,scrollableTarget:"single-scroll",children:a.map((function(t){return Object(i.jsx)("div",{style:{marginInline:"5px",marginRight:"5px"},children:Object(i.jsx)("iframe",{className:"spotifyCard",src:"https://open.spotify.com/embed/track/"+t,width:e,height:n,frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",title:t})},t)}))})]})]}):Object(i.jsxs)("div",{style:{width:"100%"},children:[Object(i.jsx)("h4",{children:"Singles"}),Object(i.jsx)("div",{className:"spotifyGrid",style:{left:"auto"},children:a.map((function(o){return Object(i.jsx)("div",{style:{marginInline:"5px",marginRight:"5px"},children:Object(i.jsx)("iframe",{className:"spotifyCard",src:"https://open.spotify.com/embed/track/"+o,width:t.props.displayAlbums||s?e:window.outerWidth/4.5,height:t.props.displayAlbums||s?n:window.outerWidth/4.5,frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",title:o})},o)}))}),Object(i.jsx)("div",{style:{width:"100%",height:"100%",marginTop:"10%"},children:Object(i.jsx)(g,{path:"/projects",name:"See More",home:!0})})]})})}}]),n}(a.a.Component),S=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={styleSpotify:{display:"none"},styleLoad:{display:"block"}},t.componentDidMount=function(){setTimeout((function(){t.setState({styleSpotify:{display:"block"},styleLoad:{display:"none"}})}),2e3),window.addEventListener("load",(function(){t.setState({stylePage:{display:"block"},styleLoad:{display:"none"}})})),window.addEventListener("resize",(function(){setTimeout((function(){t.setState({})}),200)}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=window.outerWidth/4,e=3;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(e=2),Object(i.jsxs)("div",{style:{},children:[Object(i.jsx)("h1",{style:{color:"#282c34"},children:"Spotify"}),Object(i.jsx)("div",{style:this.state.styleSpotify,children:Object(i.jsx)(x,{nTracks:e,nAlbums:0,displayAlbums:!1})}),Object(i.jsx)("div",{style:this.state.styleLoad,children:Object(i.jsx)(u,{progress:{amount:.2,time:1},styleBar:{width:t,height:t}})})]})}}]),n}(a.a.Component),M=n(29),P=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("resize",(function(){})),window.addEventListener("orientationchange",(function(){setTimeout((function(){t.setState({})}),200)}))}},{key:"render",value:function(){var t={width:window.innerWidth/2.5,height:window.innerHeight/2,playerVars:{color:"white",autoplay:0}};/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(t=window.matchMedia("(orientation: portrait)").matches?{width:window.innerWidth/2.7,height:window.innerHeight/4,playerVars:{color:"white",autoplay:0}}:{width:window.innerWidth/2.3,height:window.innerHeight/1.5,playerVars:{color:"white",autoplay:0}});var e=[{text:"Mecna",link:"LJtOZH701ZI"},{text:"ChiamamiFaro",link:"nmRxDltsFZY"},{text:"Carolina",link:"HzTJkXgs44c"},{text:"Carolina",link:"Lex3FXEpr0Y"}];return e=e.slice(0,this.props.nVids),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{id:"videoGrid",children:e.map((function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(M.a,{className:"customYT",videoId:e.link,opts:t}),Object(i.jsx)("span",{style:{color:"#F5F5F5",textTransform:"uppercase"},children:e.text})]},e.link)}))}),Object(i.jsx)("div",{children:this.props.home?Object(i.jsx)("div",{style:{marginTop:"10%",width:"100%",height:"100%"},children:Object(i.jsx)(g,{path:"/videos",name:"See More",home:!1})}):Object(i.jsx)("div",{})})]})}}]),n}(a.a.Component),B=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={styleVid:{display:"none"},styleLoad:{display:"block"}},t.componentDidMount=function(){setTimeout((function(){t.setState({styleVid:{display:"block"},styleLoad:{display:"none"}})}),2e3),window.addEventListener("load",(function(){t.setState({stylePage:{display:"block"},styleLoad:{display:"none"}})}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=window.outerWidth/4;return Object(i.jsxs)("div",{id:"",children:[Object(i.jsx)("h1",{style:{},children:"Videos"}),Object(i.jsx)("div",{style:this.state.styleVid,children:Object(i.jsx)(P,{nVids:2,home:!0})}),Object(i.jsx)("div",{style:this.state.styleLoad,children:Object(i.jsx)(u,{progress:{amount:.2,time:1},styleBar:{width:t,height:t}})})]})}}]),n}(a.a.Component),L=n.p+"static/media/Evento1.ef8afa57.jpg",C={Evento1:L,Evento2:n.p+"static/media/Evento2.564c04c4.jpg",Evento3:n.p+"static/media/Evento3.132f5d8b.jpg",Evento4:n.p+"static/media/Evento4.2ac3bcba.jpg",Evento5:n.p+"static/media/Evento5.f26200f9.jpg",Evento6:n.p+"static/media/Evento6.c1320312.jpg",Evento7:n.p+"static/media/Evento7.07fb2587.jpg",Evento8:n.p+"static/media/Evento8.fa7fa3ab.jpg",Evento9:n.p+"static/media/Evento9.6cde5f1e.jpg",Evento10:n.p+"static/media/Evento10.defe97ad.jpg",Evento11:n.p+"static/media/Evento11.073b05d8.jpg",Evento12:n.p+"static/media/Evento12.d486df86.jpg",Evento13:n.p+"static/media/Evento13.eae25eb2.jpg",Evento14:n.p+"static/media/Evento14.66d102bc.jpg",Evento15:L,Evento16:n.p+"static/media/Evento16.00e88e90.jpg",Evento17:n.p+"static/media/Evento17.680dfb0e.jpg",Evento18:n.p+"static/media/Evento18.b09e0b0c.jpg",Evento19:n.p+"static/media/Evento19.bd30a900.jpg",Evento20:n.p+"static/media/Evento20.4710cedb.jpg",Evento21:n.p+"static/media/Evento21.1b9f806f.jpg",Evento22:n.p+"static/media/Evento22.4cb373c8.jpg",Evento23:n.p+"static/media/Evento23.c0179e04.jpg",Evento24:n.p+"static/media/Evento24.d9cdb2fc.png",Evento25:n.p+"static/media/Evento25.e7306e80.jpg",Evento26:n.p+"static/media/Evento26.7fe24270.jpg",Evento27:n.p+"static/media/Evento27.adafceba.jpg",Evento28:n.p+"static/media/Evento28.de6bc2ce.jpg",Evento29:n.p+"static/media/Evento29.9bbf5905.jpg",Evento30:n.p+"static/media/Evento30.d4d7f6e4.jpg",Evento31:n.p+"static/media/Evento31.39cbb690.jpg",Evento32:n.p+"static/media/Evento32.c7c63fb0.jpg",Evento33:n.p+"static/media/Evento33.d97d4bbb.jpg"},A=window.innerWidth/8,W=window.innerWidth/10,z=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={mouseOver:!1},t.componentDidMount=function(){window.addEventListener("orientationchange",(function(){t.setState({})}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=!1;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(W=window.matchMedia("(orientation: portrait)").matches?.7*window.innerWidth:.3*window.innerWidth,e=!0),Object(i.jsxs)("div",{style:this.state.mouseOver&&!e?{width:A,color:"#282c34",borderRadius:"10px",backgroundColor:"#f5f5f5",marginTop:"5px",transition:"0.5s"}:{width:W,color:"#282c34",borderRadius:"10px",backgroundColor:"#f5f5f5",marginTop:"5px",transition:"0.5s"},onClick:function(){window.location=t.props.link},onMouseEnter:function(){t.setState({mouseOver:!0})},onMouseLeave:function(){t.setState({mouseOver:!1})},children:["Go To Event ",(this.state.mouseOver||e)&&Object(i.jsx)("i",{className:"arrow right"})]})}}]),n}(a.a.Component),F=n(32),T=(n(69),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={lightBox:!1,showtoLink:!1},t.componentDidMount=function(){},t.componentDidUpdate=function(){setTimeout((function(){var t=document.getElementsByClassName("ril-image-current ril__image");console.log(t.length);for(var e=0;e<t.length;e++)t[e].addEventListener("mouseover",(function(){console.log("Mouse me all like I am your bitch");var t=document.createElement("div"),e=document.createTextNode("This is new.");t.appendChild(e)}))}),100)},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:this.props.src,alt:"",style:{width:"95%",height:"95%"},onClick:function(){t.setState({lightBox:!0})}}),this.state.lightBox?Object(i.jsx)("div",{className:"stupidme",children:Object(i.jsx)(F.a,{wrapperClassName:"stupidme",id:"weirdshit",enableZoom:!1,mainSrc:this.props.src,style:{width:"100%"},onCloseRequest:function(){t.setState({lightBox:!1})},toolbarButtons:[Object(i.jsx)(z,{link:this.props.link,name:"Go To Event"})]})}):Object(i.jsx)("div",{})]})}}]),n}(a.a.Component)),R=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.events.slice(this.props.sEl,this.props.sEl+this.props.nElem);return Object(i.jsx)("div",{className:"column",children:t.map((function(t){return Object(i.jsx)("div",{children:Object(i.jsx)(T,{src:C[t.name],link:t.link,style:{width:"100%"}})},t.name)}))})}}]),n}(a.a.Component),I=[{name:"Evento1",date:"12/12/2017",img:"Evento1.jpg",link:"https://www.facebook.com/events/1991748301073144/"},{name:"Evento2",date:"20/03/2018",img:"Evento2.jpg",link:"https://www.facebook.com/events/197104491060399/"},{name:"Evento3",date:"17/04/2018",img:"Evento3.jpg",link:"https://www.facebook.com/sofarsoundsbrescia/videos/1899838816742940"},{name:"Evento4",date:"12/05/2018",img:"Evento4.jpg",link:"https://www.facebook.com/redtheaterfactory/videos/279675422886096"},{name:"Evento5",date:"16/06/2018",img:"Evento5.jpg",link:"https://www.facebook.com/events/157015425143286"},{name:"Evento6",date:"03/07/2018",img:"Evento6.jpg",link:"https://www.facebook.com/events/1151672108305986/"},{name:"Evento7",date:"10/07/2018",img:"Evento7.jpg",link:"https://www.facebook.com/events/2043520079004979?active_tab=about"},{name:"Evento8",date:"29/07/2018",img:"Evento8.jpg",link:"https://www.facebook.com/events/433378647177679"},{name:"Evento9",date:"19/08/2018",img:"Evento9.jpg",link:"https://www.facebook.com/events/1649391045116622"},{name:"Evento10",date:"20/10/2018",img:"Evento10.jpg",link:"https://www.facebook.com/events/2495464117138249/"},{name:"Evento11",date:"08/11/2018",img:"Evento11.jpg",link:"https://www.facebook.com/events/561715560929538/"},{name:"Evento12",date:"17/11/2018",img:"Evento12.jpg",link:"https://www.facebook.com/studiouno.viterbo/photos/a.386556811764096/598803500539425/"},{name:"Evento13",date:"18/11/2018",img:"Evento13.jpg",link:"https://www.facebook.com/events/265737337416474"},{name:"Evento14",date:"19/11/2018",img:"Evento14.jpg",link:"https://www.facebook.com/events/496891380811657"},{name:"Evento15",date:"27/12/2018",img:"Evento15.jpg",link:"https://www.facebook.com/events/321655621755726/"},{name:"Evento16",date:"28/01/2019",img:"Evento16.jpg",link:"https://www.facebook.com/events/794081037595198"},{name:"Evento17",date:"09/04/2019",img:"Evento17.jpg",link:"https://www.facebook.com/events/1001597576896803/"},{name:"Evento18",date:"19/04/2019",img:"Evento18.jpg",link:"https://www.facebook.com/events/575958749565750/"},{name:"Evento19",date:"04/06/2019",img:"Evento19.jpg",link:"https://www.facebook.com/events/2948309968542639"},{name:"Evento20",date:"13/06/2019",img:"Evento20.jpg",link:"https://www.facebook.com/events/354438341857122"},{name:"Evento21",date:"21/06/2019",img:"Evento21.jpg",link:"https://www.facebook.com/events/2591105770900702"},{name:"Evento22",date:"05/07/2019",img:"Evento22.jpg",link:"https://www.facebook.com/events/309420343327004"},{name:"Evento23",date:"26/07/2019",img:"Evento23.jpg",link:"https://www.facebook.com/events/843183662726268"},{name:"Evento24",date:"19/08/2019",img:"Evento24.png",link:""},{name:"Evento25",date:"19/08/2019",img:"Evento25.jpg",link:"https://www.facebook.com/events/806197759754983"},{name:"Evento26",date:"15/11/2019",img:"Evento26.jpg",link:"https://www.facebook.com/events/2511300922528403/"},{name:"Evento27",date:"21/11/2019",img:"Evento27.jpg",link:"https://www.facebook.com/events/2756241184419110"},{name:"Evento28",date:"23/11/2019",img:"Evento28.jpg",link:"https://www.facebook.com/events/1662300497238760/"},{name:"Evento29",date:"16/07/2020",img:"Evento29.jpg",link:"https://dice.fm/event/obqyg-cuori-impavidi-generic-animal-irbis-37-post-nebbia-altri-16th-jul-tribune-idroscalo-milano-tickets"},{name:"Evento30",date:"23/07/2020",img:"Evento30.jpg",link:"https://dice.fm/event/7yq69-cuori-impavidi-eugenio-in-via-gioia-in-concerti-leggeri-altri-2-spettacolo-23rd-jul-tribune-idroscalo-milano-tickets"},{name:"Evento31",date:"19/11/2020",img:"Evento31.jpg",link:"https://www.youtube.com/watch?v=LJtOZH701ZI&t=2286s"},{name:"Evento32",date:"26/11/2020",img:"Evento32.jpg",link:"https://www.youtube.com/watch?v=05sFO3zOdcg&t=3s"},{name:"Evento33",date:"25/12/2020",img:"Evento33.jpg",link:"https://dice.fm/event/lyp8r-mecna-xmas-live-streaming-from-dolomiti-25th-dec-antenna-sala-virtuale-bologna-tickets"}],N=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(t=!0);var e=I.slice(I.length-3,I.length);return e=e.sort((function(t,e){console.log(t),console.log(e)})),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Events"}),Object(i.jsx)("div",{style:{width:"80%",height:"80%",margin:"auto"},children:Object(i.jsx)("div",{className:"row",style:t?{height:"40%",margin:"auto"}:{width:"80%",margin:"auto"},children:t?Object(i.jsx)("div",{style:{width:"60%",margin:"auto"},children:Object(i.jsx)(R,{nElem:2,sEl:1,events:e})}):e.map((function(t,n){return Object(i.jsx)(R,{nElem:1,sEl:n,events:e},t.name)}))})}),Object(i.jsx)("div",{style:{marginTop:"5%"},children:Object(i.jsx)(g,{path:"/events",name:"See More"})})]})}}]),n}(a.a.Component),D=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={display:{display:"none"},displayBar:{display:"block"}},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;window.scrollTo({top:0,left:0,behavior:"smooth"}),setTimeout((function(){t.setState({display:{display:"block"},displayBar:{display:"none"}})}),600),window.addEventListener("load",(function(){t.setState({display:{display:"block"},displayBar:{display:"none"}})})),window.addEventListener("resize",(function(){t.setState({})})),window.addEventListener("onfullscreenchange",(function(){window.location.reload()}))}},{key:"render",value:function(){var t,e,n=1.1*window.innerHeight;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.matchMedia("(orientation: portrait)").matches?(t={fontSize:window.outerWidth/12},e={fontSize:window.outerWidth/18}):(t={fontSize:window.outerWidth/20},e={fontSize:window.outerWidth/25},n=2*window.screen.height)),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{style:this.state.display,children:[Object(i.jsxs)("div",{style:{height:n,width:"100%",marginTop:0,marginBottom:0},children:[Object(i.jsx)("h1",{style:t,id:"nameTitle",children:"Pierfrancesco Pasini"}),Object(i.jsx)("h2",{style:e,id:"musician",children:"Musician"}),Object(i.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(i.jsx)(w,{})}),Object(i.jsx)(y,{}),Object(i.jsx)("div",{style:{width:"100%",height:"10%"},children:Object(i.jsx)(p,{})})]}),Object(i.jsx)("div",{id:"homeVideos",style:{height:n,width:"100%",marginTop:0,marginBottom:0},children:Object(i.jsx)(B,{})}),Object(i.jsx)("div",{id:"homeProjects",style:{height:n,width:"100%",marginTop:0,marginBottom:0},children:Object(i.jsx)(S,{})}),Object(i.jsx)("div",{id:"homeEvents",style:{height:n,width:"100%",marginTop:0,marginBottom:0},children:Object(i.jsx)(N,{})})]}),Object(i.jsx)("div",{style:this.state.displayBar,children:Object(i.jsx)(u,{progress:{amount:.3,time:10},styleBar:{width:window.outerWidth/4,height:window.outerWidth/4}})})]})}}]),n}(a.a.Component),V=n.p+"static/media/pierpiero.64f785bd.jpeg",H=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("p",{id:"aboutme",style:{backgroundColor:"#F5F5F5",color:"#282c34",width:this.props.width,fontSize:this.props.fontsize,borderRadius:"10px",textAlign:"center"},children:"I play da sweet piano, da kool guitar, and I make da sweet love to you."})}}]),n}(a.a.Component),J=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={stylePage:{display:"none"},styleLoad:{display:"block"}},t.componentDidMount=function(){window.scrollTo({top:0,left:0,behavior:"smooth"}),setTimeout((function(){t.setState({stylePage:{display:"block"},styleLoad:{display:"none"}})}),800),window.addEventListener("load",(function(){t.setState({stylePage:{display:"block"},styleLoad:{display:"none"}})}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=window.outerWidth/4,e=window.outerWidth/40,n=window.outerWidth/50;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.matchMedia("(orientation: portrait)").matches?(e=window.outerWidth/15,n=window.outerWidth/20,t=window.outerHeight/5):(e=window.outerWidth/25,n=window.outerWidth/35)),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{style:this.state.styleLoad,id:"barVid",children:[Object(i.jsx)("h1",{style:{borderRadius:"10px",width:"100%",fontWeight:"500",fontSize:e},children:"About Me:"}),Object(i.jsx)(u,{progress:{amount:1,time:10},styleBar:{width:t,height:t}})]}),Object(i.jsxs)("div",{style:this.state.stylePage,children:[Object(i.jsx)("h1",{style:{borderRadius:"10px",width:"100%",fontWeight:"500",fontSize:e},children:"About Me:"}),Object(i.jsx)("img",{style:{float:"right",borderRadius:"10px",width:"40%",marginBottom:"5px"},src:V,alt:"profile"}),Object(i.jsx)(H,{width:"50%",fontsize:n})]})]})}}]),n}(a.a.Component),Z=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={styleVideos:{display:"none"},styleLoad:{display:"block"}},t.componentDidMount=function(){window.scrollTo({top:0,left:0,behavior:"smooth"}),setTimeout((function(){t.setState({styleVideos:{display:"block"},styleLoad:{display:"none"}})}),2e3),window.addEventListener("load",(function(){t.setState({stylePage:{display:"block"},styleLoad:{display:"none"}})})),window.addEventListener("orientationchange",(function(){window.location.reload()}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=window.outerWidth/4;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&window.matchMedia("(orientation: portrait)").matches&&(t=window.outerHeight/5),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Videos"}),Object(i.jsx)("div",{style:this.state.styleVideos,children:Object(i.jsx)(P,{nVids:100,home:!1})}),Object(i.jsx)("div",{style:this.state.styleLoad,id:"barVid",children:Object(i.jsx)(u,{progress:{amount:1,time:10},styleBar:{width:t,height:t}})})]})}}]),n}(a.a.Component),Y=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={styleSpotify:{display:"none"},styleLoad:{display:"block"}},t.componentDidMount=function(){window.scrollTo({top:0,left:0,behavior:"smooth"}),setTimeout((function(){t.setState({styleSpotify:{display:"block"},styleLoad:{display:"none"}})}),2e3),window.addEventListener("load",(function(){t.setState({styleSpotify:{display:"block"},styleLoad:{display:"none"}})})),window.addEventListener("resize",(function(){})),window.addEventListener("orientationchange",(function(){window.location.reload()}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=window.outerWidth/4;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Spotify"}),Object(i.jsx)("div",{style:this.state.styleSpotify,children:Object(i.jsx)(x,{nTracks:100,nAlbums:100,displayAlbums:!0})}),Object(i.jsx)("div",{style:this.state.styleLoad,children:Object(i.jsx)(u,{progress:{amount:.2,time:1},styleBar:{width:t,height:t}})})]})}}]),n}(a.a.Component),q=[{name:"Evento1",date:"12/12/2017",img:"Evento1.jpg",link:"https://www.facebook.com/events/1991748301073144/"},{name:"Evento2",date:"20/03/2018",img:"Evento2.jpg",link:"https://www.facebook.com/events/197104491060399/"},{name:"Evento3",date:"17/04/2018",img:"Evento3.jpg",link:"https://www.facebook.com/sofarsoundsbrescia/videos/1899838816742940"},{name:"Evento4",date:"12/05/2018",img:"Evento4.jpg",link:"https://www.facebook.com/redtheaterfactory/videos/279675422886096"},{name:"Evento5",date:"16/06/2018",img:"Evento5.jpg",link:"https://www.facebook.com/events/157015425143286"},{name:"Evento6",date:"03/07/2018",img:"Evento6.jpg",link:"https://www.facebook.com/events/1151672108305986/"},{name:"Evento7",date:"10/07/2018",img:"Evento7.jpg",link:"https://www.facebook.com/events/2043520079004979?active_tab=about"},{name:"Evento8",date:"29/07/2018",img:"Evento8.jpg",link:"https://www.facebook.com/events/433378647177679"},{name:"Evento9",date:"19/08/2018",img:"Evento9.jpg",link:"https://www.facebook.com/events/1649391045116622"},{name:"Evento10",date:"20/10/2018",img:"Evento10.jpg",link:"https://www.facebook.com/events/2495464117138249/"},{name:"Evento11",date:"08/11/2018",img:"Evento11.jpg",link:"https://www.facebook.com/events/561715560929538/"},{name:"Evento12",date:"17/11/2018",img:"Evento12.jpg",link:"https://www.facebook.com/studiouno.viterbo/photos/a.386556811764096/598803500539425/"},{name:"Evento13",date:"18/11/2018",img:"Evento13.jpg",link:"https://www.facebook.com/events/265737337416474"},{name:"Evento14",date:"19/11/2018",img:"Evento14.jpg",link:"https://www.facebook.com/events/496891380811657"},{name:"Evento15",date:"27/12/2018",img:"Evento15.jpg",link:"https://www.facebook.com/events/321655621755726/"},{name:"Evento16",date:"28/01/2019",img:"Evento16.jpg",link:"https://www.facebook.com/events/794081037595198"},{name:"Evento17",date:"09/04/2019",img:"Evento17.jpg",link:"https://www.facebook.com/events/1001597576896803/"},{name:"Evento18",date:"19/04/2019",img:"Evento18.jpg",link:"https://www.facebook.com/events/575958749565750/"},{name:"Evento19",date:"04/06/2019",img:"Evento19.jpg",link:"https://www.facebook.com/events/2948309968542639"},{name:"Evento20",date:"13/06/2019",img:"Evento20.jpg",link:"https://www.facebook.com/events/354438341857122"},{name:"Evento21",date:"21/06/2019",img:"Evento21.jpg",link:"https://www.facebook.com/events/2591105770900702"},{name:"Evento22",date:"05/07/2019",img:"Evento22.jpg",link:"https://www.facebook.com/events/309420343327004"},{name:"Evento23",date:"26/07/2019",img:"Evento23.jpg",link:"https://www.facebook.com/events/843183662726268"},{name:"Evento24",date:"19/08/2019",img:"Evento24.png",link:""},{name:"Evento25",date:"19/08/2019",img:"Evento25.jpg",link:"https://www.facebook.com/events/806197759754983"},{name:"Evento26",date:"15/11/2019",img:"Evento26.jpg",link:"https://www.facebook.com/events/2511300922528403/"},{name:"Evento27",date:"21/11/2019",img:"Evento27.jpg",link:"https://www.facebook.com/events/2756241184419110"},{name:"Evento28",date:"23/11/2019",img:"Evento28.jpg",link:"https://www.facebook.com/events/1662300497238760/"},{name:"Evento29",date:"16/07/2020",img:"Evento29.jpg",link:"https://dice.fm/event/obqyg-cuori-impavidi-generic-animal-irbis-37-post-nebbia-altri-16th-jul-tribune-idroscalo-milano-tickets"},{name:"Evento30",date:"23/07/2020",img:"Evento30.jpg",link:"https://dice.fm/event/7yq69-cuori-impavidi-eugenio-in-via-gioia-in-concerti-leggeri-altri-2-spettacolo-23rd-jul-tribune-idroscalo-milano-tickets"},{name:"Evento31",date:"19/11/2020",img:"Evento31.jpg",link:"https://www.youtube.com/watch?v=LJtOZH701ZI&t=2286s"},{name:"Evento32",date:"26/11/2020",img:"Evento32.jpg",link:"https://www.youtube.com/watch?v=05sFO3zOdcg&t=3s"},{name:"Evento33",date:"25/12/2020",img:"Evento33.jpg",link:"https://dice.fm/event/lyp8r-mecna-xmas-live-streaming-from-dolomiti-25th-dec-antenna-sala-virtuale-bologna-tickets"}],G=!1,X=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={displayBar:{display:"block"},displayPage:{display:"none"}},t.deriveData=function(){if(!G){var t=null,e=null;try{for(var n=0;n<q.length;n++)console.log(q[n].date),t=(e=q[n].date.split("/"))[1]+"/"+e[0]+"/"+e[2],t=new Date(t),q[n].date=t}catch(i){}G=!0}},t.componentDidMount=function(){setTimeout((function(){t.setState({displayPage:{display:"block"},displayBar:{display:"none"}})}),500),window.scrollTo({top:0,left:0,behavior:"smooth"}),window.addEventListener("load",(function(){t.setState({displayPage:{display:"block"},displayBar:{display:"none"}})}))},t}return Object(d.a)(n,[{key:"render",value:function(){this.deriveData();var t=Math.floor(q.length/3);return q=q.sort((function(t,e){return t.date.getFullYear()-e.date.getFullYear()!==0?e.date.getFullYear()-t.date.getFullYear():t.date.getMonth()-e.date.getMonth()!==0?e.date.getMonth()-t.date.getMonth():e.date.getDate()-t.date.getDate()})),document.body.style.backgroundColor="#282c34",Object(i.jsxs)("div",{style:{backgroundColor:"#282c34",width:window.outerWidth,height:2*window.outerHeight},children:[Object(i.jsx)("h1",{style:{backgroundColor:"#282c34",color:"#f5f5f5"},children:"Events"}),Object(i.jsx)("div",{style:this.state.displayPage,children:Object(i.jsx)("div",{style:{width:"100%",backgroundColor:"#282c34",left:0,right:0},children:Object(i.jsxs)("div",{className:"row",style:{width:"80%",height:"80%",margin:"auto"},children:[Object(i.jsx)(R,{nElem:t,sEl:2*t,events:q}),Object(i.jsx)(R,{nElem:t,sEl:t,events:q}),Object(i.jsx)(R,{nElem:t,sEl:0,events:q})]})})}),Object(i.jsx)("div",{style:this.state.displayBar,children:Object(i.jsx)(u,{progress:{amount:.8,time:1},styleBar:{width:window.innerWidth/4,height:window.innerWidth/4}})})]})}}]),n}(a.a.Component),K=n(7),Q=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).reload=function(){window.location.reload()},t.componentDidMount=function(){window.addEventListener("resize",(function(e){e.preventDefault(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||t.setState({})})),window.addEventListener("orientationchange",(function(e){e.preventDefault(),t.reload()}))},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(K.a,{exact:!0,path:"/about",component:J}),Object(i.jsx)(K.a,{exact:!0,path:"/videos",component:Z}),Object(i.jsx)(K.a,{exact:!0,path:"/projects",component:Y}),Object(i.jsx)(K.a,{exact:!0,path:"/events",component:X}),Object(i.jsx)(K.a,{exact:!0,path:"/",component:D})]})}}]),n}(a.a.Component);r.a.render(Object(i.jsx)(b.a,{children:Object(i.jsx)(Q,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.512f5a15.chunk.js.map