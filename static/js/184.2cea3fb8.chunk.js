"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[184],{956:function(e,r,t){var n=t(689),a=t(87),c=t(184);r.Z=function(e){var r=e.films,t=(0,n.TH)();return(0,c.jsx)("ul",{children:r&&r.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})}},639:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(691),a="Loader_loader__+lRPl",c=t(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.ko,{height:"100",width:"100",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"#F4442E",barColor:"#51E5FF"})})}},51:function(e,r,t){t.r(r);var n=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(87),o=t(364),f=t(639),p=t(956),l=t(184);r.default=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],v=(0,s.useState)(!1),d=(0,a.Z)(v,2),h=d[0],g=d[1],m=(0,i.lr)({}),w=(0,a.Z)(m,2),x=w[0],y=w[1],Z=x.get("query");return(0,s.useEffect)((function(){if(Z){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,o.Z.fetchSearchByKeyword(Z);case 4:r=e.sent,c(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[Z]),(0,l.jsxs)("main",{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y({query:e.target.elements.query.value.toLowerCase()})},children:[(0,l.jsx)("input",{type:"text",name:"query",autoFocus:!0}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),h&&(0,l.jsx)(f.Z,{}),t&&(0,l.jsx)(p.Z,{films:t})]})}},364:function(e,r,t){var n=t(861),a=t(757),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="cf08ee35fdbd112f763f3dc28ef143a6",i=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(r,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v={fetchTrending:i,fetchSearchByKeyword:o,fetchMovieDetalis:f,fetchActors:p,fetchReviews:l};r.Z=v}}]);
//# sourceMappingURL=184.2cea3fb8.chunk.js.map