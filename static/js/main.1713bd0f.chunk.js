(this.webpackJsonpclubReact=this.webpackJsonpclubReact||[]).push([[0],{14:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(2),a=i(3),r=i(5),c=i(4),o=i(1),l=i.n(o),j=i(8),d=i.n(j);var h=function(e){function t(t){return t==e.showmenu?"active":""}var i,s=Object(n.jsx)("li",{className:t("home"),onClick:function(){return e.loadingcomp(null,"home")},children:Object(n.jsx)("a",{children:"Home"})}),a=Object(n.jsx)("li",{className:t("login"),onClick:function(){return e.loadingcomp(null,"login")},children:Object(n.jsx)("a",{children:"Login"})}),r=Object(n.jsx)("li",{className:t("activities"),onClick:function(){return e.loadingcomp(null,"activities")},children:Object(n.jsx)("a",{children:"Activities"})}),c=Object(n.jsx)("li",{className:t("apply"),onClick:function(){return e.loadingcomp(null,"apply")},children:Object(n.jsx)("a",{children:"Apply Now"})}),o=Object(n.jsx)("li",{className:t("profile"),onClick:function(){return e.loadingcomp(null,"profile")},children:Object(n.jsx)("a",{children:"Profile"})}),l=Object(n.jsx)("li",{className:t("logout"),onClick:function(){return e.loadingcomp(null,"logout")},children:Object(n.jsx)("a",{children:"Logout"})}),j=Object(n.jsx)("li",{className:t("users"),onClick:function(){return e.loadingcomp(null,"users")},children:Object(n.jsx)("a",{children:"Users"})}),d=Object(n.jsx)("li",{className:t("manageact"),onClick:function(){return e.loadingcomp(null,"manageact")},children:Object(n.jsx)("a",{children:"Manage Activities"})});switch(e.user){case"member":i=Object(n.jsxs)("ul",{children:[s,r,o,l]});break;case"guest":i=Object(n.jsxs)("ul",{children:[s,a,r,c]});break;case"admin":i=Object(n.jsxs)("ul",{children:[s,r,j,d,l]})}var h="";0!=Object.keys(e.sessionVar).length&&(h=e.sessionVar.firstName+" "+e.sessionVar.lastName+" ("+e.sessionVar.id+"), role : "+e.sessionVar.role);var u=Object(n.jsx)("nav",{children:i});return Object(n.jsxs)("header",{children:[u,Object(n.jsx)("h1",{children:e.heading}),Object(n.jsx)("h2",{children:h})]})},u=i.p+"static/media/homepage_1.8688c322.jpg",b=Object(n.jsx)("img",{src:u,alt:"home page image"}),m=Object(n.jsx)("figcaption",{children:"Canvas painting"}),p=Object(n.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"home page image"}),x=Object(n.jsx)("figcaption",{children:"Lets Begin!!!"}),A=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("figure",{className:"leftfloating",children:[b,m]}),Object(n.jsx)("h1",{children:"What is Doodling?  \ud83c\udfa8"}),Object(n.jsx)("p",{children:"Doodling just does not mean to scribble. It says more about our personalities than we may even realise. It simply means to express your emotions like when you are happy or bored or angry or more in the form of art. Something you do in your spare time or Something you do all the time! "}),Object(n.jsx)("h2",{children:"Reasons to doodle?  \ud83e\udd14"}),Object(n.jsx)("p",{children:"Artistic and creative expression offers many benefits. Here\u2019s our top ten:"}),Object(n.jsxs)("ol",{type:"1",children:[Object(n.jsx)("li",{children:"It\u2019s okay to make a mess! : Leave the set up and cleanup of all those art supplies to us. Our studio is bright, open, and it can handle the drops of paints, splatters of glue, and scraps of fabric all over the floor when creativity is happening. So go ahead and let the kids (or you) make a mess."}),Object(n.jsx)("li",{children:"It relieves stress : Your life is busy, but it\u2019s important to remember to take some time for yourself. A recent study found that 45 minutes of creative activity significantly lessens stress in the body, regardless of artistic experience or talent. (Study published in Art Therapy: Journal of the American Art Therapy Association, titled \u201cReduction of Cortisol Levels and Participants\u2019 Responses Following Art Making\u201d 2016)."}),Object(n.jsx)("li",{children:"It exercises a new part of your brain : Is the creative part of your brain underfed? If you work in a highly analytical environment, then an art class is an excellent way to give your brain\u2019s right side a rest and stretch the left side."}),Object(n.jsx)("li",{children:"It prepares kids for the future : Art enhances fine motor skills, hand-eye coordination, problem solving skills, lateral thinking, complex analysis and critical thinking skills. And art education increases creativity and open-mindedness. Creativity is cited by business leaders as the top leadership competency for the future. "}),Object(n.jsx)("li",{children:"You\u2019ll look at the world in new ways : Art makes you look at things anew \u2013 even mundane ordinary aspects of the world. Communicating with color, shape, and form awakens your imagination."}),Object(n.jsx)("li",{children:"Get UNSTUCK : Our inner voices make harsh critics that can stop us before we even begin. Art teaches risk taking, learning from one\u2019s mistakes, and being open to other possibilities. The camaraderie and support of fellow classmates and an encouraging instructor can be the push that you need to just start making!"}),Object(n.jsx)("li",{children:"Challenge yourself : Learn something new! Whether it\u2019s a new technique, a new medium, or if art in general is something you\u2019ve never done before \u2013 learning new things strengthens us and gives us more confidence."}),Object(n.jsx)("li",{children:"Decorate your house/apartment : You\u2019ll get so much joy from creating something yourself and having it be a unique addition to your home. And when someone compliments you on the art, you can tell people YOU made it!"}),Object(n.jsx)("li",{children:"Meet new people : Taking a class together helps you learn new things about old friends and gives you something new to talk about when you go out. And you\u2019ll meet cool new people you otherwise may have never known. Art reaches across racial stereotypes, religious barriers, and socio-economical levels and prejudices. Seeing other culture\u2019s creative expression allows everyone to be more connected and less isolated."}),Object(n.jsx)("li",{children:"Rekindle your passion : Jealous of what kids made in summer camp and you want to make something, too? Nowadays, you\u2019ve become too busy to keep old hobbies; however, indulging in an old passion could be the perfect remedy for refreshing your spirit."})]}),Object(n.jsxs)("figure",{className:"rightfloating",children:[p,x]}),Object(n.jsx)("h2",{children:"Why this club?  \ud83d\ude2f"}),Object(n.jsx)("p",{children:"We encourage different art forms like drawing, sketching, painting, many more and welcome one and all. No age barriers"}),Object(n.jsx)("h2",{children:"Want to have fun doodling? \ud83d\udd8c"}),Object(n.jsx)("p",{children:"Yaay!!! Come forward and join us! We are excited to have you :) "}),Object(n.jsx)("h2",{children:"So what are you waiting for?"}),Object(n.jsx)("h2",{children:"Lets doodle together!!! \ud83d\udc9c"})]});var O,g=function(){return Object(n.jsx)("main",{children:A})},v=i(6),f=function(e){Object(r.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={username:"",password:"",msg:""},O=e.t,n}return Object(a.a)(i,[{key:"username",value:function(e){this.setState({username:e.currentTarget.value})}},{key:"password",value:function(e){this.setState({password:e.currentTarget.value})}},{key:"checkLogin",value:function(){var e=this;fetch(v.url+"/login",{method:"POST",body:JSON.stringify({email:this.state.username,password:this.state.password}),headers:{"Content-Type":"application/json"}}).then((function(t){200==t.status?t.json().then((function(e){e=e.data,O.setState({role:e.role,show:"home",sessionVar:e})})):e.setState({msg:"User/Password Error"})}))}},{key:"render",value:function(){var e=Object(n.jsxs)(n.Fragment,{children:[" ",Object(n.jsx)("label",{children:"Email: "}),Object(n.jsx)("input",{type:"email",name:"username",id:"username",value:this.state.username,onChange:this.username.bind(this),required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Password: "}),Object(n.jsx)("input",{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.password.bind(this),required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{type:"button",id:"clickLogin",onClick:this.checkLogin.bind(this),children:"Login"}),Object(n.jsx)("label",{className:"checkResponse",children:this.state.msg})]}),t=Object(n.jsx)("form",{method:"POST",className:"loginForm",children:e});return Object(n.jsx)("main",{id:"LoginPage",children:t})}}]),i}(l.a.Component),y=Object(n.jsxs)(n.Fragment,{children:[" ",Object(n.jsx)("label",{children:"Name: "}),Object(n.jsx)("input",{type:"text",name:"username",id:"username",required:!0,minLength:"3",maxLength:"20"}),Object(n.jsx)("label",{children:"Email: "}),Object(n.jsx)("input",{type:"email",name:"emailid",id:"emailid",required:!0,minLength:"5",maxLength:"50"}),Object(n.jsx)("label",{children:"Password: "}),Object(n.jsx)("input",{type:"password",name:"password",id:"password",required:!0,minLength:"6",maxLength:"10"}),Object(n.jsx)("label",{children:"Interested In: "}),Object(n.jsxs)("select",{name:"activities",id:"activities",children:[Object(n.jsx)("option",{value:"Drawing for kids",children:"Drawing for kids"}),Object(n.jsx)("option",{value:"Sketching session",children:"Sketching session"}),Object(n.jsx)("option",{value:"Outdoor painting",children:"Outdoor painting"}),Object(n.jsx)("option",{value:"Knife painting",children:"Knife painting"}),Object(n.jsx)("option",{value:"Other",children:"Other"})]}),Object(n.jsx)("button",{type:"button",id:"applyNow",children:"Apply now!!!"})]}),k=Object(n.jsx)("form",{method:"POST",className:"applicationForm",children:y});var S,w=function(){return Object(n.jsx)("main",{id:"applicationForm",children:k})},K=i.p+"static/media/activitiesPage.62bfcffc.jpg",U=function(e){Object(r.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={events:[{}]},n}return Object(a.a)(i,[{key:"componentDidMount",value:function(){var e=this;fetch(v.url+"/activities/info").then((function(e){return e.json()})).then((function(t){return e.setState({events:t.data}),t.data}))}},{key:"render",value:function(){var e,t=Object(n.jsx)("img",{src:K,alt:"activities page image"}),i=Object(n.jsx)("figcaption",{children:"Oil Painting"}),s=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h2",{children:[Object(n.jsx)("svg",{height:"25",viewBox:"0 0 21 15",width:"21",children:Object(n.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#2a2e3b",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(2 2)",children:[Object(n.jsx)("circle",{cx:"8.5",cy:"8.5",r:"8"}),Object(n.jsx)("path",{d:"m5.5 9.5 2 2 5-5"})]})})," Scheduled Activities"]}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Drawing for kids"}),Object(n.jsx)("li",{children:"Sketching session"}),Object(n.jsx)("li",{children:"Outdoor painting"})]}),Object(n.jsxs)("h2",{children:[Object(n.jsx)("svg",{height:"25",viewBox:"0 0 21 13",width:"21",children:Object(n.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(2 2)",children:[Object(n.jsx)("path",{d:"m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z",stroke:"#2a2e3b",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"m.5 4.5h16",stroke:"#2a2e3b",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsxs)("g",{fill:"#2a2e3b",children:[Object(n.jsxs)("g",{children:[Object(n.jsx)("circle",{cx:"8.5",cy:"8.5",r:"1"}),Object(n.jsx)("circle",{cx:"4.5",cy:"8.5",r:"1"}),Object(n.jsx)("circle",{cx:"12.5",cy:"8.5",r:"1"})]}),Object(n.jsxs)("g",{children:[Object(n.jsx)("circle",{cx:"8.5",cy:"12.5",r:"1"}),Object(n.jsx)("circle",{cx:"4.5",cy:"12.5",r:"1"}),Object(n.jsx)("circle",{cx:"12.5",cy:"12.5",r:"1"})]})]})]})})," Upcoming Activities"]}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Knife Painting"}),Object(n.jsx)("li",{children:"Wall Painting"}),Object(n.jsx)("li",{children:"Nature Drawing"})]}),Object(n.jsxs)("figure",{children:[t,i]}),Object(n.jsx)("svg",{height:"25",viewBox:"0 0 21 13",width:"21",children:Object(n.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#2a2e3b",strokeLinecap:"round",strokeLinejoin:"round",transform:"matrix(-1 0 0 1 20 2)",children:[Object(n.jsx)("path",{d:"m8.5 2.56534572h2c3.3137085 0 6 2.6862915 6 6v1.93465428c0 3.3137085-2.6862915 6-6 6h-2c-3.3137085 0-6-2.6862915-6-6v-1.93465428c0-3.3137085 2.6862915-6 6-6z"}),Object(n.jsx)("path",{d:"m3.94265851-.12029102c-1.05323083.28505997-1.86575682 1.17688618-1.86575682 2.30840383 0 1.16606183.73081563 2.21070886 1.78973019 2.50733508",transform:"matrix(.62932039 .77714596 -.77714596 .62932039 2.893856 -1.491094)"}),Object(n.jsx)("path",{d:"m16.9295345-.10708618c-1.0898445.26224883-1.9419712 1.17003523-1.9419712 2.3284815 0 1.16644061.7312905 2.21138754 1.7907622 2.50762392",transform:"matrix(-.62932039 .77714596 .77714596 .62932039 24.205765 -11.545558)"}),Object(n.jsx)("path",{d:"m9.5 5.5v4h-3.5"}),Object(n.jsx)("path",{d:"m15 15 2 2"}),Object(n.jsx)("path",{d:"m2 15 2 2",transform:"matrix(-1 0 0 1 6 0)"})]})})," Check here for frequent updates"]}),a=this.state.events.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.description}),Object(n.jsx)("td",{children:e.dates})]},"event"+t)}));return e=Object(n.jsxs)("table",{children:[Object(n.jsx)("caption",{children:"Activities Info"}),Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Description"}),Object(n.jsx)("th",{children:"Timimngs"})]})}),Object(n.jsx)("tbody",{id:"activitiesBody",children:a})]}),Object(n.jsxs)("main",{children:[Object(n.jsx)("h3",{children:" -- Work in progeress --"}),e,s]})}}]),i}(l.a.Component),B=function(e){Object(r.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={name:"",description:"",dates:"",events:[{}],amsg:"",dmsg:""},n}return Object(a.a)(i,[{key:"loadActivities",value:function(){var e=this;fetch(v.url+"/activities/info").then((function(e){return e.json()})).then((function(t){return e.setState({events:t.data}),t.data}))}},{key:"componentDidMount",value:function(){this.loadActivities()}},{key:"nameChange",value:function(e){this.setState({name:e.currentTarget.value})}},{key:"descriptionChange",value:function(e){this.setState({description:e.currentTarget.value})}},{key:"timimngsChange",value:function(e){this.setState({dates:e.currentTarget.value})}},{key:"addEvent",value:function(){var e=this;fetch(v.url+"/activities/addNew",{method:"post",body:JSON.stringify({name:this.state.name,description:this.state.description,dates:this.state.dates}),headers:{"Content-Type":"application/json"}}).then((function(t){200==t.status?(e.setState({amsg:"Activity Added"}),e.loadActivities()):e.setState({amsg:"Error"})}))}},{key:"deleteEvent",value:function(e){var t=this;fetch(v.url+"/activities/delete/"+e,{method:"delete",headers:{"Content-Type":"application/json"}}).then((function(e){200==e.status?(t.setState({dmsg:"Activity Deleted"}),t.loadActivities()):t.setState({dmsg:"Error"})}))}},{key:"render",value:function(){var e,t=this,i=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h2",{children:[Object(n.jsx)("svg",{height:"21",viewBox:"0 0 21 21",width:"21",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#2d9284",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(2 3)",children:[Object(n.jsx)("path",{d:"m8 16c4.4380025 0 8-3.5262833 8-7.96428571 0-4.43800246-3.5619975-8.03571429-8-8.03571429-4.43800245 0-8 3.59771183-8 8.03571429 0 4.43800241 3.56199755 7.96428571 8 7.96428571z"}),Object(n.jsx)("path",{d:"m4 8h8"}),Object(n.jsx)("path",{d:"m8 12.0563492v-8.0563492z"})]})})," Add Activity"]}),Object(n.jsxs)("div",{id:"addNewEvent",children:[Object(n.jsx)("label",{children:"Name: "}),Object(n.jsx)("input",{type:"text",name:"name",id:"name",required:!0,minLength:"5",value:this.state.name,onChange:this.nameChange.bind(this)}),Object(n.jsx)("label",{children:"Description: "}),Object(n.jsx)("input",{type:"text",name:"description",id:"description",required:!0,minLength:"10",value:this.state.description,onChange:this.descriptionChange.bind(this)}),Object(n.jsx)("label",{children:"Dates: "}),Object(n.jsx)("input",{type:"text",name:"dates",id:"dates",required:!0,minLength:"5",value:this.state.dates,onChange:this.timimngsChange.bind(this)}),Object(n.jsx)("button",{type:"button",id:"addEvent",onClick:this.addEvent.bind(this),children:"Add"}),Object(n.jsx)("label",{id:"amsg",className:"checkResponse",children:this.state.amsg})]}),Object(n.jsx)("label",{id:"dmsg",className:"checkResponse",children:this.state.dmsg})]});e=this.state.events.map((function(e,i){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("button",{type:"button",className:"deleteRow",onClick:t.deleteEvent.bind(t,e.id),children:"Delete"})}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.description}),Object(n.jsx)("td",{children:e.dates})]},"event"+i)}));var s=Object(n.jsxs)("table",{children:[Object(n.jsx)("caption",{children:"Activities Info"}),Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Description"}),Object(n.jsx)("th",{children:"Timimngs"})]})}),Object(n.jsx)("tbody",{id:"activitiesBody",children:e})]});return Object(n.jsxs)("main",{children:[i,s]})}}]),i}(l.a.Component),C=function(e){Object(r.a)(i,e);var t=Object(c.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return Object(n.jsx)("main",{children:Object(n.jsx)("h3",{children:" -- Work in progeress -- "})})}}]),i}(l.a.Component),V=function(e){Object(r.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),n=t.call(this,e),S=e.t,n}return Object(a.a)(i,[{key:"componentDidMount",value:function(){fetch(v.url+"/logout").then((function(e){200==e.status?(console.log("Success"),S.setState({role:"guest",show:"home",sessionVar:{}})):console.log("Failed")}))}},{key:"render",value:function(){return Object(n.jsx)("main",{})}}]),i}(l.a.Component),N=function(e){Object(r.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={role:"guest",show:"home",sessionVar:{}},n}return Object(a.a)(i,[{key:"loadComponent",value:function(e,t){this.setState({show:t})}},{key:"render",value:function(){var e=null,t=null;switch(this.state.show){case"home":e=Object(n.jsx)(g,{}),t="The Doodlers Club!";break;case"login":e=Object(n.jsx)(f,{t:this}),t="Login";break;case"activities":e=Object(n.jsx)(U,{}),t="Activities to engage in!";break;case"apply":e=Object(n.jsx)(w,{}),t="Apply";break;case"manageact":e=Object(n.jsx)(B,{}),t="Activities Management";break;case"logout":e=Object(n.jsx)(V,{t:this}),t="Logout";break;default:e=Object(n.jsx)(C,{}),t="OOPS!"}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h,{heading:t,user:this.state.role,showmenu:this.state.show,sessionVar:this.state.sessionVar,loadingcomp:this.loadComponent.bind(this)}),e]})}}]),i}(l.a.Component);d.a.render(Object(n.jsx)(N,{}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('{"url":"https://clubserver.glitch.me"}')}},[[14,1,2]]]);
//# sourceMappingURL=main.1713bd0f.chunk.js.map