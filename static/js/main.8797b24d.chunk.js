(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){e.exports=a.p+"static/media/einstein-1.b0932b34.jpg"},110:function(e,t,a){e.exports=a.p+"static/media/einstein-2.874de77e.jpg"},111:function(e,t,a){e.exports=a.p+"static/media/einstein-3.61187d6c.jpg"},112:function(e,t,a){e.exports=a.p+"static/media/einstein-4.69c2f86a.jpg"},113:function(e,t,a){e.exports=a.p+"static/media/einstein-5.385d6f74.jpg"},114:function(e,t,a){e.exports=a.p+"static/media/relativity-formulae.2384305a.svg"},120:function(e,t,a){e.exports=a(303)},125:function(e,t,a){},134:function(e,t,a){},238:function(e,t){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(11),r=a.n(i),s=(a(125),a(103)),l=a(46),c=a.n(l),u=a(104),d=a(105),h=a(106),m=a(118),g=a(107),p=a(15),y=a(119),f=a(108),b=a.n(f),w=a(109),v=a.n(w),I=a(110),k=a.n(I),E=a(111),j=a.n(E),A=a(112),x=a.n(A),S=a(113),O=a.n(S),z=[{original:v.a},{original:k.a},{original:j.a},{original:x.a},{original:O.a}],N=["I\u2019ve got a feeling we\u2019re not in kansas anymore.","I\u2019ll have what she\u2019s having.","There are 10 types of people: \n those who understand binary, \n and those who don\u2019t.","The concept of global warming was \n created by and for the Chinese","Leave your stupid comments in your pocket!","Don\u2019t try it, Anakin. I have the high ground!","A medium dry martini,\nlemon peel. Shaken, not stirred","Float like a butteryfly sting like a bee","Sure there have\nbeen injuries and \n deaths in boxing - but none of them serious.","I owe a lot to my parents, especially my\nmother and father.","I may be dumb, but I\u2019m not stupid.","Smoking kills. If you\u2019re killed, \n you\u2019ve lost a very important part of your life.","I say no to drugs, but they don\u2019t listen.","How can mirrors be real\nif our eyes aren\u2019t real","If you can dream it, you can achieve it.","You miss 100% of the\nshots you don\u2019t take","Eighty percent of success is showing up.","Accept who you are.\nUnless you\u2019re a serial killer.","It\u2019s okay if you don\u2019t like me.\nNot everyone has good taste.","The four most beautiful words\nin our common language: \n I told you so.","Rice is great when you\u2019re\nhungry and you want 2000 of something.","I\u2019m writing a book. I\u2019ve\ngot the page numbers done.","When nothing is going right, go left.","I\u2019d like to live like a\npoor man \u2013 only with lots of money.","I look like a casual, laid-back guy, but \n it\u2019s like a circus in my head.","My brain has too many tabs open.","I don\u2019t even believe myself when I \n say I\u2019ll be ready in 5 minutes.","I\u2019m not shy, I\u2019m holding back my \n awesomeness so I don\u2019t intimidate you.","You\u2019ll never be as lazy as whoever named the fireplace.","You\u2019ll never be as lazy as whoever named the fireplace.","Am I perfect? No. But am I\nstriving to be a better person\nevery day? Also no.","I\u2019m not arguing. I\u2019m simply\nexplaining why I\u2019m right.","My career plans were much\nmore exciting when I was 5.","The best way to appreciate your job\nis to imagine yourself without one.","Don\u2019t yell at your kids!\n Lean in real close and whisper,\nit\u2019s much scarier.","Marriage\u2026it\u2019s not a word,\nit\u2019s a sentence.","Don\u2019t think about your errors or failures,\n otherwise you\u2019ll never do a thing.","The advice I would give to someone\nis to not take anyone\u2019s advice.","If you try to fail, and succeed,\nwhich have you done? ","What is a date, really, but a job\ninterview that lasts all night?","I don\u2019t even read the papers.\n I read \u2018USA Today\u2019 because it has color photos.","The best advice I\u2019ve ever received is:\nNo one else knows what they\u2019re doing either.","Mondays are fine. It\u2019s your life that sucks.","If you spend your days doing what\nyou love, it is impossible to fail. ","Ah, yes, divorce\u2026 from the Latin word\nmeaning to rip out a man\u2019s genitals\nthrough his wallet.","Confidence is 10% work and 90% delusion","Alcohol is like Photoshop for real life.","I failed kindergarten because\nI couldn\u2019t spell my last name.","The word abbreviation sure\nis long for what it means.","Sex is the most fun you\ncan have without laughing.","Life doesn\u2019t imitate art,\nit imitates bad television."];var M=a(114),T=a.n(M),B=(a(133),a(134),a(117)),C=a.n(B),F=(a(135),a(115)),Y=a(116),D=a(48),L=a.n(D),W=a(144),_=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={font:"Ubuntu",fontSize:16,message:" - Albert Einstein",imageIndex:0,modalIsOpen:!1,returnedImage:"",loading:!1},a.generateImage=a.generateImage.bind(Object(p.a)(a)),a.handleSelect=a.handleSelect.bind(Object(p.a)(a)),a.handleImage=a.handleImage.bind(Object(p.a)(a)),a.handleModal=a.handleModal.bind(Object(p.a)(a)),a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"generateImage",value:function(){var e=Object(u.a)(c.a.mark(function e(t){var a=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),this.setState({message:"\u201c"+N[Math.floor(Math.random()*N.length)]+"\u201d"+this.state.message}),e.abrupt("return",fetch(z[this.state.imageIndex].original).then(function(e){return e.blob()}).then(function(e){W.upload([e],{params:{auth:{key:"ee723b70d56f11e8b7809f4882ea3f24"},steps:{":original":{robot:"/upload/handle"},resized:{use:[":original"],robot:"/image/resize",result:!1,height:600,imagemagick_stack:"v1.0.0",resize_strategy:"fit",width:600,zoom:!1},watermarked:{use:["resized"],robot:"/image/resize",result:!0,imagemagick_stack:"v1.0.0",text:[{text:a.state.message,size:parseInt(a.state.fontSize),font:a.state.font,color:"#eeeeee",valign:"bottom",align:"right"}]}}},waitForEncoding:!0}).then(function(e){a.setState({modalIsOpen:!0,loading:!1,message:" - Albert Einstein",returnedImage:e.results[0].ssl_url})})}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleSelect",value:function(e){e.preventDefault();var t=e.target.name,a=e.target.value;this.setState(Object(s.a)({},t,a))}},{key:"handleImage",value:function(e){this.setState({imageIndex:e})}},{key:"handleModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:T.a,className:"App-logo",alt:"logo"}),o.a.createElement("div",{className:"header-title"},'"Probably the best webpage ever made" - Albert Einstein')),o.a.createElement("div",{className:"App-page"},"Generate your own Einstein quote! (Quotes possibly not said by Einstein)"),o.a.createElement("div",{className:"App-gallery"},o.a.createElement(L.a,{id:"modal-size",centered:!0,show:this.state.modalIsOpen,onHide:this.handleModal},o.a.createElement(L.a.Body,null,o.a.createElement("img",{src:this.state.returnedImage,alt:"new"}),o.a.createElement("a",{href:this.state.returnedImage,download:!0},o.a.createElement(F.a,{icon:Y.a})))),o.a.createElement(b.a,{onSlide:function(t){return e.handleImage(t)},items:z,showThumbnails:!1,showFullscreenButton:!1,showPlayButton:!1})),o.a.createElement("div",{className:"App-form"},o.a.createElement(C.a,{disabled:this.state.loading,onClick:function(t){return e.generateImage(t)},variant:"outline-primary"},"Generate A Quote!")),o.a.createElement("footer",{className:"App-footer"},"Icons made by ",o.a.createElement("a",{href:"https://www.freepik.com/",title:"Freepik"},"Freepik")," from ",o.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",o.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0"},"CC 3.0 BY")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[120,1,2]]]);
//# sourceMappingURL=main.8797b24d.chunk.js.map