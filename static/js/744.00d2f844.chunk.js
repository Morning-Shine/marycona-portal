"use strict";(self.webpackChunkmarycona_meow_portal=self.webpackChunkmarycona_meow_portal||[]).push([[744],{2390:(e,i,l)=>{l.d(i,{B9:()=>t,Lg:()=>r,qy:()=>n,xc:()=>o});const s=l(97).F.injectEndpoints({endpoints:e=>({getMovies:e.query({query:e=>({url:e?`/v1.4/movie?${e}`:"/v1.4/movie",method:"GET"}),transformResponse:e=>{const i=[];for(const s of e.docs){var l;i.push({id:s.id,name:s.name||s.alternativeName||"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",posterUrl:(null===(l=s.poster)||void 0===l?void 0:l.url)||null,rating:s.rating.imdb,year:s.year,countries:s.countries})}return{moviesList:i,limit:e.limit,page:e.page,pages:e.pages,total:e.total}}}),getMoviesWithSearch:e.query({query:e=>({url:e?`/v1.4/movie/search?${e}`:"/v1.4/movie/search",method:"GET"}),transformResponse:e=>{const i=[];for(const s of e.docs){var l;i.push({id:s.id,name:s.name||s.alternativeName||"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",posterUrl:(null===(l=s.poster)||void 0===l?void 0:l.url)||null,rating:s.rating.imdb,year:s.year,countries:s.countries})}return{moviesList:i,limit:e.limit,page:e.page,pages:e.pages,total:e.total}}}),getPossibleValuesForFilters:e.query({query:e=>({url:e?`/v1/movie/possible-values-by-field?${e}`:"/v1/movie/possible-values-by-field",method:"GET"})}),getMovieById:e.query({query:e=>({url:`/v1.4/movie/${e}`,method:"GET"})})})}),{useGetMoviesQuery:r,useGetMoviesWithSearchQuery:t,useGetPossibleValuesForFiltersQuery:o,useGetMovieByIdQuery:n}=s},1744:(e,i,l)=>{l.r(i),l.d(i,{default:()=>x});var s=l(3216),r=l(2390),t=l(1969),o=l(3955),n=(l(5043),l(3884)),a=l(1957),d=l(579);const u=e=>{let{movieInfo:i}=e;const l=(0,n.G)((e=>{var i;return null===(i=e.user.user)||void 0===i?void 0:i.login})),s=(0,n.G)((e=>l?e.favorite.movies[l]:null)),r=null===s||void 0===s?void 0:s.find((e=>e.id===i.id));return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"absolute top-5 flex justify-center gap-4 h-8",children:[(0,d.jsx)("div",{className:"w-8 h-8 cursor-pointer flex "+(r?"":"opacity-65 hover:opacity-100"),children:(0,d.jsx)(a.A,{movieInfo:i})}),r?(0,d.jsx)("h6",{className:"text-nowrap text-lg font-medium border rounded px-2\n          text-[#C40C0E] border-[#C40C0E]",children:"\u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u043c"}):null]})})};var v=l(5777);const c=()=>{var e,i,l,n,a,c,m;const{id:x=""}=(0,s.g)(),{data:h,isLoading:p,isError:g}=(0,r.qy)(x,{skip:!x}),f=null!==(e=null!==(i=null===h||void 0===h?void 0:h.name)&&void 0!==i?i:null===h||void 0===h?void 0:h.alternativeName)&&void 0!==e?e:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",y=null!==h&&void 0!==h&&null!==(l=h.poster)&&void 0!==l&&l.url?{backgroundImage:`url(${h.poster.url})`,backgroundSize:"cover"}:{},j=(null===h||void 0===h||null===(n=h.rating)||void 0===n?void 0:n.imdb)||"0",b=(null===h||void 0===h?void 0:h.description)||"",N=(null===h||void 0===h?void 0:h.shortDescription)||"",w=null!==h&&void 0!==h&&h.persons?h.persons.length<=5?null===h||void 0===h?void 0:h.persons:null===h||void 0===h?void 0:h.persons.slice(0,5):null;return(0,d.jsxs)(d.Fragment,{children:[!g&&!p&&!!h&&(0,d.jsxs)("div",{className:"grid grid-rows-1 grid-cols-[320px_1fr]\n                      xl:grid-cols-[320px_1fr_1fr] gap-3",children:[(0,d.jsxs)("div",{className:"flex flex-col h-full",children:[(0,d.jsx)("h2",{className:"my-3 text-2xl font-bold text-amber-600 dark:text-amber-500",children:f}),(null===h||void 0===h?void 0:h.countries)&&h.countries.map(((e,i)=>{var l;return(0,d.jsxs)("span",{className:"text-lg",children:[e.name,", ",null!==(l=null===h||void 0===h?void 0:h.year)&&void 0!==l?l:"\u0433\u043e\u0434 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"]},e.name)})),(0,d.jsxs)("div",{style:y,className:"w-60 h-80 xl:w-80 xl:h-[30rem]\n                my-3 relative rounded bg-gradient-to-b\n              from-amber-500 to-lime-500 dark:from-amber-600 dark:to-lime-600",children:[!y&&(0,d.jsx)(o.A,{}),(0,d.jsx)("div",{className:"absolute right-1 top-2/3",children:(0,d.jsx)(t.A,{rating:j})})]}),(0,d.jsx)("p",{className:"text-sm text-justify",children:N}),!!w&&!!w.length&&(0,d.jsxs)("div",{className:"mt-2 text-xs",children:[(0,d.jsx)("b",{children:"\u0412 \u0440\u043e\u043b\u044f\u0445: "}),w.map(((e,i)=>{var l;return(0,d.jsxs)("span",{children:[null!==(l=e.name)&&void 0!==l?l:e.enName,i<w.length-1?", ":"."]},e.id)}))]})]}),(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsx)(u,{movieInfo:{id:h.id,name:h.name||h.alternativeName||"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",posterUrl:(null===(a=h.poster)||void 0===a?void 0:a.url)||null,rating:null!==(c=null===h||void 0===h||null===(m=h.rating)||void 0===m?void 0:m.imdb)&&void 0!==c?c:0,year:null===h||void 0===h?void 0:h.year,countries:null===h||void 0===h?void 0:h.countries}}),(0,d.jsx)("p",{className:"mt-24 text-justify",children:b})]})]}),p&&(0,d.jsx)("div",{style:{height:"calc(100vh - 350px)"},className:"flex items-center justify-center",children:(0,d.jsx)(v.A,{})}),g&&(0,d.jsx)("div",{style:{height:"calc(100vh - 350px)"},className:"flex items-center justify-center",children:(0,d.jsxs)("p",{className:"text-2xl text-amber-600",children:["\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0444\u0438\u043b\u044c\u043c\u0443 \u0441 id ",x]})})]})};var m=l(5089);const x=()=>{const{id:e=""}=(0,s.g)(),i=e.match(/^\d+$/);return(0,d.jsx)("section",{className:"flex flex-col w-5/6 mx-auto row-start-2",children:i?(0,d.jsx)(c,{}):(0,d.jsx)("div",{className:"flex flex-col w-full h-full items-center justify-center",children:(0,d.jsx)(m.A,{notificationMsg:`\u0444\u0438\u043b\u044c\u043c \u0441 id ${e} \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442`})})})}}}]);
//# sourceMappingURL=744.00d2f844.chunk.js.map