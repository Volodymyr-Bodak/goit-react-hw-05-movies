"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[357],{357:function(e,t,n){n.r(t);var r=n(439),c=n(791),i=n(243),s=n(184);t.default=function(e){var t=e.movieId,n=(0,c.useState)([]),a=(0,r.Z)(n,2),o=a[0],h=a[1];return(0,c.useEffect)((function(){i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=b1d75cfaae6b922289a72c3eab080e3a")).then((function(e){h(e.data.results)})).catch((function(e){console.error(e)}))}),[t]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Reviews"}),o.length>0?(0,s.jsx)("ul",{children:o.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{children:e.content}),(0,s.jsxs)("p",{children:["Author: ",e.author]})]},e.id)}))}):(0,s.jsx)("p",{children:"No reviews found."})]})}}}]);
//# sourceMappingURL=357.b2681855.chunk.js.map