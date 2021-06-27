(this["webpackJsonpresty-react"]=this["webpackJsonpresty-react"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(23),o=n.n(c),a=(n(20),n(31),n(5)),i=n(6),l=n(8),d=n(7),h=n(12),j=(n(32),n(0)),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(h.b,{className:"link_style ",to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(h.b,{className:"link_style",to:"/history",children:"History"})}),Object(j.jsx)("li",{children:Object(j.jsx)(h.b,{className:"link_style",to:"/help",children:"Help"})})]})})}}]),n}(r.Component);var u=function(){return Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"RESTy"}),Object(j.jsx)(p,{})]})};n(39);var b=function(){return Object(j.jsx)("footer",{children:Object(j.jsx)("p",{children:"\xa9 Code Fellows 2021"})})},O=n(25),x=(n(40),n(19)),y=n.n(x),f=n(26),m=(n(42),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).changeHandler=function(t){e.props.inputHandler(t.target.name,t.target.value)},e.showResults=function(){var t=Object(f.a)(y.a.mark((function t(n){var r,s,c,o,a,i,l;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,e.props.loadingHandler(!0),s={method:e.props.input.method,headers:{"Content-Type":"application/json; charset=UTF-8"}},"get"!==e.props.input.method&&(console.log(e.props.input.body),Object.defineProperty(s,"body",{value:e.props.input.body})),t.next=7,fetch(e.props.input.url,s);case 7:return r=t.sent,t.next=10,r.json();case 10:return c=t.sent,t.next=13,r.headers.get("content-type");case 13:t.t0=t.sent,o={"content-type":t.t0},e.props.formHandler(c,o),e.props.loadingHandler(!1),a=JSON.stringify({url:e.props.input.url,method:e.props.input.method,body:e.props.input.body,response:c,headers:o}),i=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},l=Object.values(localStorage).includes(a),r.ok&&!l&&localStorage.setItem(i(),a),t.next=26;break;case 23:t.prev=23,t.t1=t.catch(1),e.props.errorHandler(t.t1.message);case 26:case"end":return t.stop()}}),t,null,[[1,23]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)(s.a.Fragment,{children:Object(j.jsxs)("form",{onSubmit:this.showResults,children:[Object(j.jsxs)("section",{className:"input-sec",children:[Object(j.jsx)("input",{type:"text",name:"url",value:this.props.input.url,onChange:this.changeHandler}),Object(j.jsx)("button",{children:"GO"})]}),Object(j.jsxs)("section",{className:"btn-sec",children:[Object(j.jsx)("textarea",{name:"body",value:this.props.input.body,onChange:this.changeHandler}),Object(j.jsx)("button",{type:"button",name:"method",value:"get",onClick:this.changeHandler,children:"GET"}),Object(j.jsx)("button",{type:"button",name:"method",value:"post",onClick:this.changeHandler,children:"POST"}),Object(j.jsx)("button",{type:"button",name:"method",value:"put",onClick:this.changeHandler,children:"PUT"}),Object(j.jsx)("button",{type:"button",name:"method",value:"delete",onClick:this.changeHandler,children:"DELETE"})]})]})})}}]),n}(r.Component)),g=(n(22),n(43),n(4)),H=n(2),v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleClicked=function(e){var t=e.target.innerHTML.split(" ")[0],n=JSON.parse(localStorage.getItem(t));"home"===r.props.route?r.props.historyHandler(n):r.props.historyRouteHandler(n.response,n.headers)},r.handleRun=function(e){var t=e.target.id,n=JSON.parse(localStorage.getItem(t));r.props.historyHandler(n),r.setState({isRedirect:!0})},r.state={isRedirect:!1},r}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"history",children:[Object.values(localStorage).map((function(t,n){return Object(j.jsxs)("div",{className:"query",children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("pre",{onClick:e.handleClicked,children:[localStorage.key(n),"     ",JSON.parse(t).method,"           ",JSON.parse(t).url]}),Object(j.jsx)(g.b,{condition:"history"===e.props.route,children:Object(j.jsx)(g.c,{children:Object(j.jsx)("p",{children:JSON.parse(t).body})})})]}),Object(j.jsx)(g.b,{condition:"history"===e.props.route,children:Object(j.jsx)(g.c,{children:Object(j.jsx)("button",{onClick:e.handleRun,id:localStorage.key(n),children:"Re-run"})})})]},localStorage.key(n))})),Object(j.jsx)(g.b,{condition:this.state.isRedirect,children:Object(j.jsx)(g.c,{children:Object(j.jsx)(H.a,{to:"/"})})})]})}}]),n}(r.Component),S=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)(s.a.Fragment,{children:Object(j.jsxs)("section",{className:"results-sec",children:[Object(j.jsx)(v,{route:"home",historyHandler:this.props.historyHandler}),this.props.children]})})}}]),n}(r.Component),k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e={method:this.props.state.method,url:this.props.state.url,body:this.props.state.body};return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)(m,{loadingHandler:this.props.loadingHandler,formHandler:this.props.formHandler,inputHandler:this.props.inputHandler,errorHandler:this.props.errorHandler,input:e}),Object(j.jsxs)(S,{historyHandler:this.props.historyHandler,children:[Object(j.jsx)(g.b,{condition:this.props.state.isloading,children:Object(j.jsx)("img",{src:"https://media.tenor.com/images/5f1c57a4f18059b1bb946df247f8561d/tenor.gif",alt:"Loading"})}),Object(j.jsxs)(g.b,{condition:this.props.state.error,children:[Object(j.jsx)(g.c,{children:Object(j.jsx)("p",{children:this.props.state.error})}),Object(j.jsx)(g.a,{children:Object(j.jsx)(g.b,{condition:this.props.state.response,children:Object(j.jsx)(g.c,{children:Object(j.jsxs)("section",{className:"response",children:[Object(j.jsx)("p",{children:Object(j.jsx)("pre",{children:JSON.stringify({Headers:this.props.state.headers},null,"\t")})}),Object(j.jsx)("p",{children:Object(j.jsx)("pre",{children:JSON.stringify({Response:this.props.state.response},null,"\t")})})]})})})})]})]})]})}}]),n}(r.Component),N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)("section",{className:"results-sec",children:"App Documentation"})}}]),n}(r.Component),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).historyRouteHandler=function(e,t){console.log("hello from history view"),r.setState({response:e,headers:t})},r.state={response:null,headers:null},r}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)(s.a.Fragment,{children:Object(j.jsxs)("section",{className:"results-sec",children:[Object(j.jsx)(v,{route:"history",historyHandler:this.props.historyHandler,historyRouteHandler:this.historyRouteHandler}),Object(j.jsx)(g.b,{condition:this.state.response,children:Object(j.jsx)(g.c,{children:Object(j.jsxs)("section",{className:"response",children:[Object(j.jsx)("p",{children:Object(j.jsx)("pre",{children:JSON.stringify({Headers:this.state.headers},null,"\t")})}),Object(j.jsx)("p",{children:Object(j.jsx)("pre",{children:JSON.stringify({Response:this.state.response},null,"\t")})})]})})})]})})}}]),n}(r.Component),R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).inputHandler=function(e,t){r.setState(Object(O.a)({},e,t))},r.formHandler=function(e,t){r.setState({headers:t,response:e,error:null})},r.historyHandler=function(e){var t=e.method,n=e.url,s=e.body;r.setState({method:t,url:n,body:s})},r.loadingHandler=function(e){r.setState({isloading:e}),console.log("loading"+e)},r.errorHandler=function(e){r.setState({error:e})},r.state={method:"get",url:"/",body:"",headers:null,response:null,isloading:!1,error:null},r}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)("main",{children:Object(j.jsxs)(H.d,{children:[Object(j.jsx)(H.b,{exact:!0,path:"/",children:Object(j.jsx)(k,{inputHandler:this.inputHandler,formHandler:this.formHandler,historyHandler:this.historyHandler,loadingHandler:this.loadingHandler,errorHandler:this.errorHandler,state:this.state})}),Object(j.jsx)(H.b,{path:"/help",component:N}),Object(j.jsx)(H.b,{path:"/history",children:Object(j.jsx)(C,{historyHandler:this.historyHandler})})]})})}}]),n}(r.Component);var J=function(){return Object(j.jsxs)("div",{className:"app-style",children:[Object(j.jsx)(u,{}),Object(j.jsx)(R,{}),Object(j.jsx)(b,{})]})};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h.a,{children:Object(j.jsx)(J,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.90c6e201.chunk.js.map