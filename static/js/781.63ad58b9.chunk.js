"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[781],{781:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var i=t(439),n=t(791),c=t(243),s=t(87),o="Home_activeNavLink__X0KKd",r="Home_container__MGYYT",l="Home_navLink__fyK3p",m="Home_active__vw8xW",_="Home_item__KHBnP",d="Home_title__XLxL1",h=t(184);var u=function(){var e=(0,n.useState)([]),a=(0,i.Z)(e,2),t=a[0],u=a[1];return(0,n.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=b1d75cfaae6b922289a72c3eab080e3a").then((function(e){u(e.data.results)})).catch((function(e){console.error(e)}))}),[]),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:r,children:[(0,h.jsx)(s.OL,{to:"/",className:" ".concat(o),activeClassName:m,children:"Home"}),(0,h.jsx)(s.OL,{to:"/movies",className:l,activeClassName:m,children:"Movies"})]}),(0,h.jsx)("h1",{children:"Trending Movies"}),(0,h.jsx)("ul",{children:t.map((function(e){return(0,h.jsx)("li",{className:_,children:(0,h.jsx)(s.rU,{to:"/movies/".concat(e.id),children:(0,h.jsx)("h2",{className:d,children:e.title})})},e.id)}))})]})}}}]);
//# sourceMappingURL=781.63ad58b9.chunk.js.map