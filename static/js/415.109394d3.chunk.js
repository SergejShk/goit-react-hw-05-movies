"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{9181:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(501),c=n(6871),a={section:"MovieList_section__ZU5Of",title:"MovieList_title__pdk93",item:"MovieList_item__cNdaG"},u=n(184),i=function(t){var e=t.title,n=t.films,i=(0,c.TH)();return(0,u.jsxs)("section",{className:a.section,children:[e&&(0,u.jsx)("h2",{className:a.title,children:e}),(0,u.jsx)("ul",{className:a.list,children:n.map((function(t){return(0,u.jsx)("li",{className:a.item,children:(0,u.jsx)(r.rU,{to:"/movies/".concat(t.id),state:i,children:t.title})},t.id)}))})]})}},5415:function(t,e,n){n.r(e);var r=n(885),c=n(2791),a=n(8183),u=n(9181),i=n(184);e.default=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1];return(0,c.useEffect)((function(){(0,a.JS)().then((function(t){return o(t.results)})).catch((function(t){return console.log(t)}))}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(u.Z,{title:"Trending today",films:n})})}},8183:function(t,e,n){n.d(e,{IQ:function(){return f},JS:function(){return l},Jh:function(){return v},dR:function(){return p},xL:function(){return h}});var r=n(5861),c=n(7757),a=n.n(c),u=n(4569),i=n.n(u),o="https://api.themoviedb.org/3/",s="82c59d753050746a09d77670604a0453",l=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("".concat(o,"/trending/movie/week?api_key=").concat(s));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i().get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i()("".concat(o,"search/movie"),{params:{api_key:s,query:e}}).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.109394d3.chunk.js.map