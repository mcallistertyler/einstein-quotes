(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/einstein-1.b0932b34.jpg"},109:function(e,t,a){e.exports=a.p+"static/media/einstein-2.06653dbb.jpg"},110:function(e,t,a){e.exports=a.p+"static/media/einstein-3.61187d6c.jpg"},111:function(e,t,a){e.exports=a.p+"static/media/einstein-4.69c2f86a.jpg"},112:function(e,t,a){e.exports=a.p+"static/media/einstein-5.385d6f74.jpg"},113:function(e,t,a){e.exports=a.p+"static/media/relativity-formulae.2384305a.svg"},118:function(e,t,a){e.exports=a(326)},123:function(e,t,a){},132:function(e,t,a){},248:function(e,t){},326:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(13),r=a.n(i),l=(a(123),a(102)),s=a(48),c=a.n(s),u=a(103),m=a(104),d=a(105),h=a(116),g=a(106),f=a(16),p=a(117),b=a(107),w=a.n(b),E=a(108),v=a.n(E),y=a(109),k=a.n(y),C=a(110),j=a.n(C),I=a(111),S=a.n(I),x=a(112),z=a.n(x),O=[{original:v.a},{original:k.a},{original:j.a},{original:S.a},{original:z.a}],B=a(113),F=a.n(B),_=(a(131),a(132),a(14)),A=a.n(_),L=a(115),M=a.n(L),N=a(114),Y=a.n(N),D=a(31),H=a.n(D),J=a(154),P=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).state={font:"Ubuntu",fontSize:12,message:"Default statement",imageIndex:0,show:!1,returnedImage:"",loading:!1},a.generateImage=a.generateImage.bind(Object(f.a)(a)),a.handleSelect=a.handleSelect.bind(Object(f.a)(a)),a.handleImage=a.handleImage.bind(Object(f.a)(a)),a.modalClose=a.modalClose.bind(Object(f.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"generateImage",value:function(){var e=Object(u.a)(c.a.mark(function e(t){var a=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(O[this.state.imageIndex].original).then(function(e){return e.blob()}).then(function(e){J.upload([e],{params:{auth:{key:"ee723b70d56f11e8b7809f4882ea3f24"},steps:{":original":{robot:"/upload/handle"},resized:{use:[":original"],robot:"/image/resize",result:!1,height:500,imagemagick_stack:"v1.0.0",resize_strategy:"fit",width:500,zoom:!1},watermarked:{use:["resized"],robot:"/image/resize",result:!0,imagemagick_stack:"v1.0.0",text:[{text:a.state.message,size:parseInt(a.state.fontSize),font:a.state.font,color:"#eeeeee",valign:"bottom",align:"right",x_offset:16,y_offset:-10}]}}},waitForEncoding:!0}).then(function(e){fetch(e.successful[0].meta.assembly_url).then(function(e){return e.json()}).then(function(e){a.setState({show:!0,loading:!1,returnedImage:e.results.watermarked[0].ssl_url})})})}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleSelect",value:function(e){e.preventDefault();var t=e.target.name,a=e.target.value;this.setState(Object(l.a)({},t,a))}},{key:"handleImage",value:function(e){this.setState({imageIndex:e})}},{key:"modalClose",value:function(){this.setState({show:!1})}},{key:"render",value:function(){var e=this;return this.state.loading?o.a.createElement(Y.a,{type:"CradleLoader",color:"#000000",height:"100",width:"100"}):o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:F.a,className:"App-logo",alt:"logo"})),o.a.createElement("h1",null,"Select An Einstein"),o.a.createElement(H.a,{show:this.state.show,onHide:this.modalClose,size:"lg"},o.a.createElement(H.a.Header,{closeButton:!0},o.a.createElement(H.a.Body,null,o.a.createElement("img",{src:this.state.returnedImage,alt:"new"})))),o.a.createElement(w.a,{onSlide:function(t){return e.handleImage(t)},items:O,showThumbnails:!1,showFullscreenButton:!1,showPlayButton:!1}),o.a.createElement(A.a,null,o.a.createElement(A.a.Label,null,"Font"),o.a.createElement(A.a.Control,{name:"font",as:"select",onChange:function(t){return e.handleSelect(t)}},o.a.createElement("option",null,"Ubuntu"),o.a.createElement("option",null,"Arial"),o.a.createElement("option",null,"Comic Sans MS")),o.a.createElement(A.a.Label,null,"Font Size"),o.a.createElement(A.a.Control,{name:"fontSize",as:"select",onChange:function(t){return e.handleSelect(t)}},o.a.createElement("option",null,"12"),o.a.createElement("option",null,"18"),o.a.createElement("option",null,"24")),o.a.createElement(A.a.Label,null,"Personal Message"),o.a.createElement(A.a.Control,{type:"input",placeholder:"Your message"}),o.a.createElement("br",null)),o.a.createElement(M.a,{onClick:function(t){return e.generateImage(t)},variant:"outline-primary"},"Create My Einstein"),o.a.createElement("br",null),o.a.createElement("div",null,"Icons made by ",o.a.createElement("a",{href:"https://www.freepik.com/",title:"Freepik"},"Freepik")," from ",o.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",o.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0"},"CC 3.0 BY")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,1,2]]]);
//# sourceMappingURL=main.5e49fa09.chunk.js.map