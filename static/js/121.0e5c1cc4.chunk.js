"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[121],{121:function(e,t,n){n.r(t);var i=n(439),r=n(791),c=n(243),a=n(87),s=n(184);t.default=function(){var e=(0,r.useState)([]),t=(0,i.Z)(e,2),n=t[0],o=t[1];return(0,r.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=b1d75cfaae6b922289a72c3eab080e3a").then((function(e){o(e.data.results)})).catch((function(e){console.error(e)}))}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Trending Movies"}),(0,s.jsx)("ul",{children:n.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsxs)(a.rU,{to:"/movies/".concat(e.id),children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title}),(0,s.jsx)("h2",{children:e.title})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=121.0e5c1cc4.chunk.js.map