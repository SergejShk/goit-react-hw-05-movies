"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[607],{9181:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(501),a={section:"MovieList_section__ZU5Of",title:"MovieList_title__pdk93",item:"MovieList_item__cNdaG"},c=n(184),u=function(t){var e=t.title,n=t.films;return(0,c.jsxs)("section",{className:a.section,children:[e&&(0,c.jsx)("h2",{className:a.title,children:e}),(0,c.jsx)("ul",{className:a.list,children:n.map((function(t){return(0,c.jsx)("li",{className:a.item,children:(0,c.jsx)(r.rU,{to:"/movies/".concat(t.id),children:t.title})},t.id)}))})]})}},5607:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(885),a=n(9181),c=n(2791),u=n(6871),s="SearchBar_form__kK3vK",o="SearchBar_input__du0TV",i="SearchBar_button__EK7vJ",l=n(184),p=function(){var t=(0,u.s0)(),e=(0,u.TH)(),n=(0,c.useState)(""),a=(0,r.Z)(n,2),p=a[0],f=a[1];return(0,l.jsxs)("form",{className:s,onSubmit:function(n){n.preventDefault(),t("?q=".concat(p),{state:e.state})},children:[(0,l.jsx)("input",{className:o,type:"text",name:"query",autoComplete:"off",placeholder:"Movie search",onChange:function(t){var e=t.target.value.trim();f(e)}}),(0,l.jsx)("button",{className:i,type:"submit",children:"Search"})]})},f=n(501),v=n(8183),h=function(){var t=(0,f.lr)(),e=(0,r.Z)(t,1)[0],n=(0,c.useState)([]),u=(0,r.Z)(n,2),s=u[0],o=u[1];return(0,c.useEffect)((function(){var t=e.get("q");t&&(0,v.xL)(t).then((function(t){return o(t.results)})).catch((function(t){return console.log(t)}))}),[e,o]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{}),s&&(0,l.jsx)(a.Z,{films:s})]})}},8183:function(t,e,n){n.d(e,{IQ:function(){return f},JS:function(){return l},Jh:function(){return v},dR:function(){return p},xL:function(){return h}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),o="https://api.themoviedb.org/3/",i="82c59d753050746a09d77670604a0453",l=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("".concat(o,"/trending/movie/week?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("".concat(o,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("".concat(o,"search/movie"),{params:{api_key:i,query:e}}).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=607.a474c993.chunk.js.map