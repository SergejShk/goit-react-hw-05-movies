"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[121],{4321:function(e,t,n){var r=n(3924),a=n(184);t.Z=function(){return(0,a.jsx)(r.iT,{height:80,width:80,color:"#f0463a",wrapperStyle:{},wrapperClass:"loader",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#f1806b",strokeWidth:2,strokeWidthSecondary:2})}},5121:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(885),a=n(501),c="AdditionalInfoNav_section__IFbVd",s="AdditionalInfoNav_title__DDo5y",i="AdditionalInfoNav_siteNav__m24G3",o="AdditionalInfoNav_item__MDqPq",u="AdditionalInfoNav_activeSiteNav__pLlZ3",l=n(184),v=function(e){return e.isActive?"".concat(i," ").concat(u):i},p=function(){return(0,l.jsxs)("section",{className:c,children:[(0,l.jsx)("h2",{className:s,children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:o,children:(0,l.jsx)(a.OL,{to:"cast",className:v,children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a.OL,{to:"reviews",className:v,children:"Reviews"})})]})]})},d=n(2791),f=n(6871),h=n(8183),_="MovieDetails_btnGoBack__gzWYw",m="MovieDetails_section__ISoKj",x="MovieDetails_infoContainer__qi-lo",g="MovieDetails_title__gACDf",j="MovieDetails_userScore__jztcu",w="MovieDetails_overviewTitle__UR3Il",k="MovieDetails_overview__jITDm",N="MovieDetails_genresTitle__6zs-l",b="MovieDetails_genreList__ceaAT",y=function(e){var t=e.movie;return(0,l.jsx)(l.Fragment,{children:0!==t.length&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.rU,{to:"/",className:_,children:"Go back"}),(0,l.jsxs)("section",{className:m,children:[t.poster_path&&(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}),(0,l.jsxs)("div",{className:x,children:[(0,l.jsx)("h2",{className:g,children:t.title}),(0,l.jsxs)("p",{className:j,children:["User Score: ",10*t.vote_average,"%"]}),(0,l.jsx)("p",{className:w,children:"Overview:"}),(0,l.jsx)("p",{className:k,children:t.overview}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:N,children:"Genres: "}),(0,l.jsx)("ul",{className:b,children:t.genres&&t.genres.map((function(e){return(0,l.jsx)("li",{children:e.name},e.id)}))})]})]})]})]})})},D=n(4321),S=function(){var e=(0,f.UO)().movieId,t=(0,d.useState)({}),n=(0,r.Z)(t,2),a=n[0],c=n[1];return(0,d.useEffect)((function(){(0,h.dR)(e).then(c).catch((function(e){return console.log(e)}))}),[e]),(0,l.jsxs)(l.Fragment,{children:[a&&(0,l.jsx)(y,{movie:a}),(0,l.jsx)(p,{}),(0,l.jsx)(d.Suspense,{fallback:(0,l.jsx)(D.Z,{}),children:(0,l.jsx)(f.j3,{})})]})}},8183:function(e,t,n){n.d(t,{IQ:function(){return p},JS:function(){return l},Jh:function(){return d},dR:function(){return v},xL:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),s=n(4569),i=n.n(s),o="https://api.themoviedb.org/3/",u="82c59d753050746a09d77670604a0453",l=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o,"/trending/movie/week?api_key=").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()("".concat(o,"search/movie"),{params:{api_key:u,query:t}}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=121.c8e12255.chunk.js.map