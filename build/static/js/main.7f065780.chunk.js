(this["webpackJsonptest-front-end-dev"]=this["webpackJsonptest-front-end-dev"]||[]).push([[0],{26:function(e,t,a){},55:function(e,t,a){e.exports=a(88)},60:function(e,t,a){},86:function(e,t,a){e.exports=a.p+"static/media/Path 1.a8922ec5.png"},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),c=(a(60),a(26),a(4)),s=a(6),m=a(44),i=a(15),u=a(45),f=a(46),E=a(47),p=a.n(E),d=a(19),b={name:"",info:"",country:"",result:0,user:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NAME_COUNTRY":return Object(d.a)({},e,{name:t.payload});case"GET_INFO":return Object(d.a)({},e,{info:t.payload});case"GET_COUNTRIES":return Object(d.a)({},e,{country:t.payload});case"GET_RESULT":return Object(d.a)({},e,{result:t.payload});case"SAVE_USER":return Object(d.a)({},e,{user:t.payload});default:return e}},g=Object(i.c)({root:h}),y=a(49),v=a.n(y),N=a(33),O={key:"root",storage:v.a},j=Object(N.a)(O,g),w=[u.a,p.a,f.a],S=Object(i.d)(j,i.a.apply(void 0,w)),x=Object(N.b)(S),T=a(8),C=a(3),q=a(5),R=a.n(q),k=a(12),A=a(68).default,B=function(e){return function(){var t=Object(k.a)(R.a.mark((function t(a){var n,r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A({method:"get",url:"https://restcountries.eu/rest/v2/name/".concat(e)}).catch((function(e){return n=e}));case 2:r=t.sent,a(n?{type:"GET_INFO",payload:"Error"}:{type:"GET_INFO",payload:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return function(){var e=Object(k.a)(R.a.mark((function e(t){var a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A({method:"get",url:"https://restcountries.eu/rest/v2/all"}).catch((function(e){return a=e}));case 2:n=e.sent,t(a?{type:"GET_COUNTRIES",payload:"Error"}:{type:"GET_COUNTRIES",payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(e){return console.log(e),{type:"GET_RESULT",payload:e}},I=Object(T.b)((function(e){return{test:e.root.info.data}}),{getInfo:B})((function(e){var t=Object(n.useState)(""),a=Object(C.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)(e.test),m=Object(C.a)(s,2),i=m[0],u=m[1];Object(n.useEffect)((function(){u(e.test)}),[e.test]);return r.a.createElement("div",{className:"top-section",style:{height:"52em"}},r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.getInfo(l),u(e.test),console.log(e.test)}(t)},className:"offset-1"},r.a.createElement("div",{className:"title",style:{marginBottom:"1.5em"}},"Add a name of a country to search"),r.a.createElement("div",null,r.a.createElement("label",{style:{color:"white",marginRight:20}},"Name"),r.a.createElement("input",{type:"text",name:"name",onChange:function(e){return function(e){o(e.target.value)}(e)}}))),r.a.createElement("div",{className:"offset-1"},r.a.createElement("div",{style:{marginTop:20}}," Result of the search:"),i?i.map((function(e){return r.a.createElement("div",null,r.a.createElement("div",null,"Native Name: ",e.nativeName),r.a.createElement("div",null,"Capital: ",e.capital),r.a.createElement("div",null,"Demonym: ",e.demonym),r.a.createElement("div",null,"Region: ",e.region),r.a.createElement("div",null,"subregion: ",e.subregion),r.a.createElement("div",null,"borders:",e.borders.join(",")))})):null),r.a.createElement(c.b,{to:"/question2",className:"offset-1"},r.a.createElement("button",{style:{marginTop:"20em"}},"Next question")),r.a.createElement(c.b,{to:"/",className:"offset-1"},r.a.createElement("button",{style:{marginTop:"20em"}},"Home")))})),G=Object(T.b)((function(e){return{countries:e.root.country.data}}),(function(e){return{getAllCountries:function(){return e(U())}}}))((function(e){var t=Object(n.useState)(e.countries),a=Object(C.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)(7),m=Object(C.a)(s,2),i=m[0],u=m[1],f=Object(n.useState)(0),E=Object(C.a)(f,2),p=E[0],d=E[1],b=Object(n.useState)(""),h=Object(C.a)(b,2),g=h[0],y=h[1];return Object(n.useEffect)((function(){e.getAllCountries(),o(e.countries)}),[e.countries]),r.a.createElement("div",{className:"top-section",style:{height:"52em"}},r.a.createElement("div",{className:"col-12"},r.a.createElement(c.b,{to:"/question4",className:"offset-1",style:{marginRight:20}},r.a.createElement("button",null,"Next question")),r.a.createElement(c.b,{to:"/",className:"offset-1"},r.a.createElement("button",null,"Home")),r.a.createElement("form",{className:"offset-1",style:{marginTop:20,marginBottom:20}},r.a.createElement("div",null,r.a.createElement("label",{style:{marginRight:20}},"Name"),r.a.createElement("input",{type:"text",name:"name",onChange:function(e){return y(e.target.value)}}))),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Native Name"),r.a.createElement("th",{scope:"col"},"Capital"),r.a.createElement("th",{scope:"col"},"Demonym"),r.a.createElement("th",{scope:"col"},"Region"),r.a.createElement("th",{scope:"col"},"Sub region"),r.a.createElement("th",{scope:"col"},"Borders"))),r.a.createElement("tbody",null,l?""!==g?l.filter((function(e){return e.name.toUpperCase().includes(g.toUpperCase())})).map((function(e,t){return t>=p&&t<=i?r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.nativeName),r.a.createElement("td",null,e.capital),r.a.createElement("td",null,e.demonym),r.a.createElement("td",null,e.region),r.a.createElement("td",null,e.subregion),r.a.createElement("td",null,e.borders.join(","))):null})):l.map((function(e,t){return t>=p&&t<=i?r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.nativeName),r.a.createElement("td",null,e.capital),r.a.createElement("td",null,e.demonym),r.a.createElement("td",null,e.region),r.a.createElement("td",null,e.subregion),r.a.createElement("td",null,e.borders.join(","))):null})):null)),r.a.createElement("button",{onClick:function(){return p>0?(d(p-8),u(i-8)):null}}," Before"),r.a.createElement("button",{style:{marginLeft:30},onClick:function(){return i>=7&&!(i>250)?(u(i+8),d(p+8)):null}}," After")))})),L=a(50),z=a(51),M=a(53),H=a(54),Q=a(24),D=a.n(Q),J=a(52),P=function(e){Object(H.a)(a,e);var t=Object(M.a)(a);function a(){var e;return Object(L.a)(this,a),(e=t.call(this)).handleClick=function(t){t.preventDefault();if(!(e.state.results>0))return r.a.createElement(J.a,null,"Ops! You don't have enought coins!");e.setState({target1:Math.floor(Math.random()*e.state.reel1.length),target2:Math.floor(Math.random()*e.state.reel2.length),target3:Math.floor(Math.random()*e.state.reel3.length),results:e.state.results-1},(function(){var e=[this.state.reel1[this.state.target1],this.state.reel2[this.state.target2],this.state.reel3[this.state.target3]];this.props.getResult(e)}))},e.state={target:1,times:1,duration:3e3,turn:!0,reel1:[{name:"cherry"},{name:"lemon"},{name:"apple"},{name:"lemon"},{name:"banana"},{name:"banana"},{name:"lemon"},{name:"lemon"}],reel2:[{name:"lemon"},{name:"apple"},{name:"lemon"},{name:"lemon"},{name:"cherry"},{name:"apple"},{name:"banana"},{name:"lemon"}],reel3:[{name:"lemon"},{name:"apple"},{name:"lemon"},{name:"apple"},{name:"cherry"},{name:"lemon"},{name:"banana"},{name:"lemon"}],results:20},e}return Object(z.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"top-section",style:{height:"52em"}},r.a.createElement("style",{jsx:!0},"\n            .slot {\n              font-size: 30;\n              height: 50px;\n            }\n            .slot-item {\n              height: 100%;\n              width: 100%;\n            }\n            label {\n              display: block;\n              margin: 1em 0;\n            }\n            .box {\n                background-color:white;\n                width:10rem;\n                text-align:center;\n            }\n          "),r.a.createElement("div",{style:{marginLeft:180,marginRight:90,marginBottom:30}},"Coins: ",this.state.results),r.a.createElement(c.b,{to:"/question5",style:{marginLeft:180,marginRight:90}},r.a.createElement("button",{className:"button"},"Next question")),r.a.createElement(c.b,{to:"/",className:"offset-1",style:{marginRight:70}},r.a.createElement("button",null,"Home")),r.a.createElement("button",{className:"offset-1",onClick:function(t){return e.handleClick(t)}},"set random"),r.a.createElement("div",{className:"row justify-content-center",style:{marginTop:100}},r.a.createElement(D.a,{className:"slot",duration:4e3,target:this.state.target1,times:7,onEnd:function(){return e.setState({results:e.props.result+e.state.results})}},this.state.reel1.map((function(e){var t=e.name;return r.a.createElement("div",{className:"box"},t.split("\n").map((function(e){return r.a.createElement("div",{style:{fontSize:30}},e)})))}))),r.a.createElement(D.a,{className:"slot",duration:4e3,target:this.state.target2,times:7},this.state.reel2.map((function(e){var t=e.name;return r.a.createElement("div",{className:"box"},t.split("\n").map((function(e){return r.a.createElement("div",{style:{fontSize:30}},e)})))}))),r.a.createElement(D.a,{className:"slot",duration:4e3,target:this.state.target3,times:7},this.state.reel3.map((function(e){var t=e.name;return r.a.createElement("div",{className:"box"},t.split("\n").map((function(e){return r.a.createElement("div",{style:{fontSize:30}},e)})))})))))}}]),a}(r.a.Component),Z=Object(T.b)((function(e){return{result:e.root.result}}),{getResult:function(e){return function(t){if(e[0])if(e[0].name===e[1].name&&e[1].name===e[2].name){if("cherry"===e[0].name)return t(_(50));if("apple"===e[0].name)return t(_(20));if("banana"===e[0].name)return t(_(15));if("lemon"===e[0].name)return t(_(3))}else if(e[0].name===e[1].name){if("cherry"===e[0].name)return t(_(40));if("apple"===e[0].name)return t(_(10));if("banana"===e[0].name)return t(_(5))}else if(e[1].name===e[2].name){if("cherry"===e[1].name)return t(_(40));if("apple"===e[1].name)return t(_(10));if("banana"===e[1].name)return t(_(5))}else if(e[0]===e[2]){if("cherry"===e[0].name)return t(_(40));if("apple"===e[0].name)return t(_(10));if("banana"===e[0].name)return t(_(5))}else t(_(0))}}})(P),$=a(29),F=Object(T.b)((function(e){return{result:e.root.result}}),{saveUser:function(e){return function(){var t=Object(k.a)(R.a.mark((function t(a){var n,r,l,o,c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.name,r=e.password,l=JSON.stringify({username:n,password:r}),o={method:"post",url:"".concat("https://test-login-server.herokuapp.com","/question5/login"),headers:{"Content-Type":"application/json"},data:l},c=A(o).then((function(e){console.log(JSON.stringify(e.data))})).catch((function(e){console.log(e)})),console.log(c),a({type:"SAVE_USER",payload:e});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object($.a)({defaultValues:{name:"",email:"",password:""}}),a=t.register,n=t.handleSubmit,l=(t.watch,t.errors);return r.a.createElement("div",{className:"top-section",style:{height:"52em"}},r.a.createElement("form",{onSubmit:n((function(t){e.saveUser(t)})),className:"offset-1"},r.a.createElement("h3",{style:{marginBottom:30}},"Sign up form"),r.a.createElement("div",{class:"input-container"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{name:"name",ref:a({required:!0,pattern:/^[A-Za-z\s]+$/i}),style:{marginLeft:20}}),l&&l.name&&r.a.createElement("span",{class:"input-error"},"Name is a required field")),r.a.createElement("div",{class:"input-container"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",style:{marginLeft:20},ref:a({required:!0,pattern:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}),l&&l.email&&r.a.createElement("span",{class:"input-error"},"Email is a invalid")),r.a.createElement("div",{class:"input-container"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",style:{marginLeft:20},ref:a({required:!0,pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/})}),l&&l.password&&r.a.createElement("span",{class:"input-error"},"Password must contain: one number and one uppercase and lowercase letter, and at least 8 or more characters")),r.a.createElement("button",{className:"popupButton",type:"submit",style:{marginTop:20},onPress:!0},"Save"),r.a.createElement(c.b,{to:"/question6",style:{marginLeft:180,marginRight:90}},r.a.createElement("button",{className:"button"},"Sign in")),r.a.createElement(c.b,{to:"/",className:"offset-1",style:{marginRight:70}},r.a.createElement("button",null,"Home"))))})),V=function(e){return r.a.createElement("div",{className:"top-section"},"Test page 7777")},W=Object(T.b)((function(e){return{test:e.root.info.data}}),{getInfo:B})((function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"top-section "},r.a.createElement("div",{className:"offset-1 align-self-center title"}," Hello! Here is my test."),r.a.createElement("div",{className:"offset-1 align-self-center title"},"Select one of these buttons to go to the next page")),r.a.createElement("img",{src:a(86)}),r.a.createElement("div",{className:"container",style:{marginTop:"5%"}},r.a.createElement("div",{className:"row justify-content-between",style:{marginBottom:20}},r.a.createElement(c.b,{to:"/question1",className:"col-sm-4 col-12"},r.a.createElement("button",null,"Question 1")),r.a.createElement(c.b,{to:"/question2",className:"col-sm-4 col-12"},r.a.createElement("button",null,"Question 2")),r.a.createElement(c.b,{to:"/question3",className:"col-sm-4 col-12"},r.a.createElement("button",null,"Question 3"))),r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement(c.b,{to:"/question4",className:"col-sm-4 col-12"},r.a.createElement("button",null,"Question 4")),r.a.createElement(c.b,{to:"/question5",className:"col-sm-4 col-12"},r.a.createElement("button",null,"Question 5")),r.a.createElement(c.b,{to:"/question6",className:"col-sm-4 col-12"},r.a.createElement("button",null,"Question 6")))))})),Y=(a(87),Object(T.b)((function(e){return{countries:e.root.country.data}}),(function(e){return{getAllCountries:function(){return e(U())}}}))((function(e){var t=Object(n.useState)(7),a=Object(C.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)(0),m=Object(C.a)(s,2),i=m[0],u=m[1],f=Object(n.useState)([]),E=Object(C.a)(f,2),p=E[0],d=E[1],b=Object(n.useState)(!1),h=Object(C.a)(b,2),g=(h[0],h[1]),y=Object(n.useState)(e.countries),v=Object(C.a)(y,2),N=(v[0],v[1]);Object(n.useEffect)((function(){e.getAllCountries(),g(!0),N(e.countries)}));var O=function(e){var t=p;t[e.target.name]=e.target.value,d(t)};return r.a.createElement("div",{className:"top-section",style:{height:"52em"}},r.a.createElement("form",{className:"offset-1"},r.a.createElement(c.b,{to:"/question3",className:"offset-1"},r.a.createElement("button",null,"Next question")),r.a.createElement(c.b,{to:"/",className:"offset-1"},r.a.createElement("button",null,"Home")),r.a.createElement("div",{className:"title",style:{marginBottom:"1.5em"}},"The array is formed of 3 names. Write the 3 names here"),r.a.createElement("div",null,r.a.createElement("label",{style:{color:"white",marginRight:20}},"Text 1"),r.a.createElement("input",{type:"text",name:0,onChange:function(e){return O(e)}})),r.a.createElement("div",null,r.a.createElement("label",{style:{color:"white",marginRight:20}},"Text 2"),r.a.createElement("input",{type:"text",name:1,onChange:function(e){return O(e)}})),r.a.createElement("div",null,r.a.createElement("label",{style:{color:"white",marginRight:20}},"Text 3"),r.a.createElement("input",{type:"text",name:2,onChange:function(e){return O(e)}}))),r.a.createElement("div",{className:"offset-1"},r.a.createElement("div",null," Result:"),null),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return i>0?(u(i-8),o(l-8)):null}}," Before"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return l>=7&&!(l>250)?(o(l+8),u(i+8)):null}}," After"))}))),K=function(e){return r.a.createElement(T.a,{store:S},r.a.createElement(m.a,{loading:null,persistor:x},r.a.createElement(c.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(W,e)),r.a.createElement(s.a,{exact:!0,path:"/question1"},r.a.createElement(I,e)),r.a.createElement(s.a,{exact:!0,path:"/question2"},r.a.createElement(Y,e)),r.a.createElement(s.a,{exact:!0,path:"/question3"},r.a.createElement(G,e)),r.a.createElement(s.a,{exact:!0,path:"/question4"},r.a.createElement(Z,e)),r.a.createElement(s.a,{exact:!0,path:"/question5"},r.a.createElement(F,e)),r.a.createElement(s.a,{exact:!0,path:"/question6"},r.a.createElement(V,e))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);