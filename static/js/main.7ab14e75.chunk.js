(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){e.exports=a.p+"static/media/einstein-1.3e8bda34.jpg"},117:function(e,t,a){e.exports=a.p+"static/media/einstein-2.944b8ce3.jpg"},118:function(e,t,a){e.exports=a.p+"static/media/einstein-3.e5d64e3d.jpg"},119:function(e,t,a){e.exports=a.p+"static/media/einstein-4.b7a03820.jpg"},120:function(e,t,a){e.exports=a.p+"static/media/einstein-5.f9b354ed.jpg"},129:function(e,t,a){e.exports=a(293)},134:function(e,t,a){},143:function(e,t,a){},244:function(e,t){},293:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(12),s=a.n(o),r=(a(134),a(110)),l=a(57),d=a.n(l),u=a(111),c=a(112),h=a(113),m=a(127),g=a(114),p=a(8),f=a(128),y=a(115),b=a.n(y),v=a(116),w=a.n(v),I=a(117),k=a.n(I),E=a(118),x=a.n(E),j=a(119),O=a.n(j),S=a(120),A=a.n(S),N=a(59),H=a.n(N),M=[{original:w.a},{original:k.a},{original:x.a},{original:O.a},{original:A.a}],z=["I\u2019ve got a feeling we\u2019re not in kansas anymore.","I\u2019ll have what she\u2019s having.","There are 10 types of people: \n those who understand binary, \n and those who don\u2019t.","The concept of global warming was \n created by and for the Chinese","Leave your stupid comments in your pocket!","Don\u2019t try it, Anakin. I have the high ground!","A medium dry martini,\nlemon peel. Shaken, not stirred","Float like a butteryfly sting like a bee","Sure there have\nbeen injuries and \n deaths in boxing - but none of them serious.","I owe a lot to my parents, especially my\nmother and father.","I may be dumb, but I\u2019m not stupid.","Smoking kills. If you\u2019re killed, \n you\u2019ve lost a very important part of your life.","I say no to drugs, but they don\u2019t listen.","How can mirrors be real\nif our eyes aren\u2019t real","If you can dream it, you can achieve it.","You miss 100% of the\nshots you don\u2019t take","Eighty percent of success is showing up.","Accept who you are.\nUnless you\u2019re a serial killer.","It\u2019s okay if you don\u2019t like me.\nNot everyone has good taste.","The four most beautiful words\nin our common language: \n I told you so.","Rice is great when you\u2019re\nhungry and you want 2000 of something.","I\u2019m writing a book. I\u2019ve\ngot the page numbers done.","When nothing is going right, go left.","I\u2019d like to live like a\npoor man \u2013 only with lots of money.","I look like a casual, laid-back guy, but \n it\u2019s like a circus in my head.","My brain has too many tabs open.","I don\u2019t even believe myself when I \n say I\u2019ll be ready in 5 minutes.","I\u2019m not shy, I\u2019m holding back my \n awesomeness so I don\u2019t intimidate you.","You\u2019ll never be as lazy as whoever \n named the fireplace.","Am I perfect? No. But am I\nstriving to be a better person\nevery day? Also no.","I\u2019m not arguing. I\u2019m simply\nexplaining why I\u2019m right.","My career plans were much\nmore exciting when I was 5.","The best way to appreciate your job\nis to imagine yourself without one.","Don\u2019t yell at your kids!\n Lean in real close and whisper,\nit\u2019s much scarier.","Marriage\u2026it\u2019s not a word,\nit\u2019s a sentence.","Don\u2019t think about your errors or failures,\n otherwise you\u2019ll never do a thing.","The advice I would give to someone\nis to not take anyone\u2019s advice.","If you try to fail, and succeed,\nwhich have you done? ","What is a date, really, but a job\ninterview that lasts all night?","I don\u2019t even read the papers.\n I read \u2018USA Today\u2019 because it has color photos.","The best advice I\u2019ve ever received is:\nNo one else knows what they\u2019re doing either.","Mondays are fine. It\u2019s your life that sucks.","If you spend your days doing what\nyou love, it is impossible to fail. ","Ah, yes, divorce\u2026 from the Latin word\nmeaning to rip out a man\u2019s genitals\nthrough his wallet.","Confidence is 10% work and 90% delusion","Alcohol is like Photoshop for real life.","I failed kindergarten because\nI couldn\u2019t spell my last name.","The word abbreviation sure\nis long for what it means.","Sex is the most fun you\ncan have without laughing.","Life doesn\u2019t imitate art,\nit imitates bad television.","Do I look like I know what a JPEG is? \n I just want a picture of a god-dang hot dog!"];a(142),a(143);var C=a(298),Q=a(295),T=a(296),B=a(299),q=a(297),D=a(121),F=a.n(D),Y=a(150),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={message:"",imageIndex:0,isHidden:!0,modalIsOpen:!1,returnedImage:"",error:!1,loading:!1},a.generateImage=a.generateImage.bind(Object(p.a)(a)),a.handleSelect=a.handleSelect.bind(Object(p.a)(a)),a.handleImage=a.handleImage.bind(Object(p.a)(a)),a.handleModal=a.handleModal.bind(Object(p.a)(a)),a.handleHidden=a.handleHidden.bind(Object(p.a)(a)),a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleQuote=a.handleQuote.bind(Object(p.a)(a)),a.handleOriginalQuote=a.handleOriginalQuote.bind(Object(p.a)(a)),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"generateImage",value:function(){var e=Object(u.a)(d.a.mark(function e(){var t=this;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.abrupt("return",fetch(M[this.state.imageIndex].original).then(function(e){return e.blob()}).then(function(e){e.name=M[t.state.imageIndex].original.toString(),Y.upload([e],{params:{auth:{key:"ee723b70d56f11e8b7809f4882ea3f24"},steps:{":original":{robot:"/upload/handle"},resized:{use:[":original"],robot:"/image/resize",result:!1,height:600,imagemagick_stack:"v1.0.0",resize_strategy:"fit",width:600,zoom:!1},watermarked:{use:["resized"],robot:"/image/resize",result:!0,imagemagick_stack:"v1.0.0",text:[{text:t.state.message,size:18.1,font:"fixed",color:"black",valign:"bottom",align:"left",x_offset:10},{text:t.state.message,size:17.8,font:"fixed",color:"white",valign:"bottom",align:"left",x_offset:9}]}}},waitForEncoding:!0}).then(function(e){0===e.failed.length?t.setState({modalIsOpen:!0,loading:!1,message:"",returnedImage:e.results[0].ssl_url}):t.setState({loading:!1,modalIsOpen:!1,message:"",error:!0})})}));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"handleSelect",value:function(e){e.preventDefault();var t=e.target.name,a=e.target.value;this.setState(Object(r.a)({},t,a))}},{key:"handleOriginalQuote",value:function(){this.setState({message:this.state.message.replace(/'/g,"\u2019")+" - Albert Einstein",isHidden:!0}),this.generateImage()}},{key:"handleQuote",value:function(){this.setState({message:"\u201c"+z[Math.floor(Math.random()*z.length)]+"\u201d - Albert Einstein",isHidden:!0}),this.generateImage()}},{key:"handleImage",value:function(e){this.setState({imageIndex:e})}},{key:"handleModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"handleInput",value:function(e){this.setState({message:e.target.value})}},{key:"render",value:function(){var e=this;return i.a.createElement(F.a,{active:this.state.loading,spinner:!0,text:"Generating quote..."},i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:H.a,className:"App-logo",alt:"logo"}),i.a.createElement("div",{className:"header-title"},'"Definitely the best webpage ever made." - Albert Einstein')),i.a.createElement("div",{className:"App-page"},"Generate your own Einstein quote! (Quotes possibly not said by Einstein)"),i.a.createElement("div",{className:"App-gallery"},i.a.createElement(C.a,{id:"modal-size",centered:!0,show:this.state.modalIsOpen,onHide:this.handleModal},i.a.createElement(C.a.Body,null,i.a.createElement("img",{src:this.state.returnedImage,alt:"generated-einstein"}))),i.a.createElement(b.a,{onSlide:function(t){return e.handleImage(t)},items:M,showThumbnails:!1,showFullscreenButton:!1,showPlayButton:!1})),i.a.createElement("div",{className:"App-form"},i.a.createElement(Q.a,{disabled:this.state.loading,onClick:function(){return e.handleQuote()},variant:"outline-primary"},"Generate a random quote!"),i.a.createElement("div",{className:"divider"}),i.a.createElement(Q.a,{disabled:this.state.loading,onClick:function(){return e.handleHidden()},variant:"outline-primary"},"Make your own quote!"),!this.state.isHidden&&i.a.createElement("div",{className:"App-userinput"},i.a.createElement(T.a,{className:"mb-3",onInput:function(t){return e.handleInput(t)}},i.a.createElement(B.a,{placeholder:"Your quote","aria-label":"Your quote","aria-describedby":"basic-addon1",maxLength:"50",disabled:this.state.loading}),i.a.createElement(T.a.Append,null,i.a.createElement(Q.a,{disabled:this.state.loading,onClick:function(t){return e.handleOriginalQuote(t)},variant:"outline-primary"},"Submit"))))),i.a.createElement(q.a,{variant:"danger",show:this.state.error},i.a.createElement(q.a.Heading,null,"\"It's not a bug...it's a feature\" - Albert Einstein"),i.a.createElement("p",null,"Seems like an unexpected error occurred, contact the owner of this site and let them know about it!")),i.a.createElement("footer",{className:"App-footer"},"Icons made by ",i.a.createElement("a",{href:"https://www.freepik.com/",title:"Freepik"},"Freepik")," from ",i.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",i.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0"},"CC 3.0 BY"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,a){e.exports=a.p+"static/media/relativity-formulae.2384305a.svg"}},[[129,1,2]]]);
//# sourceMappingURL=main.7ab14e75.chunk.js.map