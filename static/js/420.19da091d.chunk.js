"use strict";(self.webpackChunkmarycona_portal=self.webpackChunkmarycona_portal||[]).push([[420],{2390:(e,t,s)=>{s.d(t,{B9:()=>a,Lg:()=>n,qy:()=>i,xc:()=>l});const r=s(97).F.injectEndpoints({endpoints:e=>({getMovies:e.query({query:e=>({url:e?`/v1.4/movie?${e}`:"/v1.4/movie",method:"GET"}),transformResponse:e=>{const t=[];for(const r of e.docs){var s;t.push({id:r.id,name:r.name||r.alternativeName||"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",posterUrl:(null===(s=r.poster)||void 0===s?void 0:s.url)||null,rating:r.rating.imdb,year:r.year,countries:r.countries})}return{moviesList:t,limit:e.limit,page:e.page,pages:e.pages,total:e.total}}}),getMoviesWithSearch:e.query({query:e=>({url:e?`/v1.4/movie/search?${e}`:"/v1.4/movie/search",method:"GET"}),transformResponse:e=>{const t=[];for(const r of e.docs){var s;t.push({id:r.id,name:r.name||r.alternativeName||"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",posterUrl:(null===(s=r.poster)||void 0===s?void 0:s.url)||null,rating:r.rating.imdb,year:r.year,countries:r.countries})}return{moviesList:t,limit:e.limit,page:e.page,pages:e.pages,total:e.total}}}),getPossibleValuesForFilters:e.query({query:e=>({url:e?`/v1/movie/possible-values-by-field?${e}`:"/v1/movie/possible-values-by-field",method:"GET"})}),getMovieById:e.query({query:e=>({url:`/v1.4/movie/${e}`,method:"GET"})})})}),{useGetMoviesQuery:n,useGetMoviesWithSearchQuery:a,useGetPossibleValuesForFiltersQuery:l,useGetMovieByIdQuery:i}=r},614:(e,t,s)=>{s.d(t,{A:()=>m});var r=s(5043),n=s(1969),a=s(3198),l=s(3955),i=s(1957),o=s(5475),c=s(3884),d=s(579);const m=e=>{let{movieInfo:t}=e;const{id:s,name:m,posterUrl:u,rating:x,year:p,countries:g}=t,h=(0,c.G)((e=>{var t,s;return null===(t=e.user)||void 0===t||null===(s=t.user)||void 0===s?void 0:s.login})),v=(0,c.G)((e=>{var t,r;return h?null===(t=e.favorite.movies)||void 0===t||null===(r=t[h])||void 0===r?void 0:r.find((e=>e.id===s)):null})),[f,j]=(0,r.useState)(!1),b=u?{backgroundImage:`url(${u})`,backgroundSize:"cover"}:{};return(0,d.jsxs)(o.N_,{to:`/${s}`,onMouseOver:()=>j(!0),onMouseOut:()=>j(!1),children:[(0,d.jsxs)("div",{style:b,className:"w-40 h-60 relative rounded bg-gradient-to-b\n           from-amber-500 to-lime-500 dark:from-amber-600 dark:to-lime-600",children:[(v||f)&&(0,d.jsx)("div",{className:"absolute flex justify-end w-8 top-2 left-3",children:(0,d.jsx)(i.A,{movieInfo:t})}),!u&&(0,d.jsx)(l.A,{}),(0,d.jsx)("div",{className:"absolute right-1 top-2/3",children:(0,d.jsx)(n.A,{rating:x})})]}),(0,d.jsx)("h3",{className:"font-bold text-sm",children:m}),(0,d.jsxs)("p",{children:[null===g||void 0===g?void 0:g.map((e=>`${e.name}, `)),(0,d.jsx)("span",{className:"text-md",children:p||a.F6.noYear})]})]})}},4420:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var r=s(5043),n=s(2390);const a=["alternativeName","id","name","poster","rating","year","countries"];var l=s(614),i=s(3884),o=s(1430),c=s(579);const d=e=>{let{page:t,pages:s,changeMode:r}=e;const n=(0,i.j)(),a=e=>{let r;"prev"===e&&t>1&&(r=t-1),"next"===e.toString()&&t<s&&(r=t+1),r&&n((0,o.an)(r))};return(0,c.jsxs)("div",{className:"flex gap-3 text-2xl",children:[(0,c.jsx)("p",{onClick:()=>{a("prev")},className:`w-10 h-10 font-bold \n                    text-center rounded-full\n                    bg-yellow-200\n                    ${1===t?"cursor-not-allowed":"cursor-pointer"}\n                    `,children:"\u2b38"}),(0,c.jsx)("div",{onClick:r,className:"min-w-10 max-w-min h-10 px-2 flex\n        cursor-pointer rounded-full items-center justify-center\n        bg-yellow-300",children:(0,c.jsx)("p",{className:"font-bold",children:t})}),(0,c.jsx)("p",{onClick:()=>{a("next")},className:`w-10 h-10 font-bold \n                    text-center rounded-full \n                    ${t===s?"cursor-not-allowed":"cursor-pointer"}\n                    bg-yellow-200`,children:"\u2911"})]})},m=e=>{let{page:t,pages:s,changeMode:n}=e;const[a,l]=(0,r.useState)(t),d=(0,i.j)();return(0,c.jsxs)("div",{className:"flex flex-col justify-center mb-3 max-w-min",children:[(0,c.jsxs)("p",{className:"h-10 rounded-full max-w-min\n        flex items-center text-xl\n        bg-lime-300 dark:bg-lime-700",children:[(0,c.jsx)("input",{type:"number",inputMode:"numeric",min:"1",max:s,value:a,onChange:e=>(e=>{if(e.target.value){const t=+e.target.value;l(t>0&&t<=s?t:s),t<=0&&l(1)}else l("")})(e),className:"bg-transparent outline-none text-right"}),(0,c.jsx)("span",{onClick:()=>{a&&"number"===typeof a&&a!==t&&(d((0,o.an)(a)),n())},className:(a?"cursor-pointer":"cursor-not-allowed")+" pr-2 font-bold text-lime-900 dark:text-lime-200",children:"\u2713"})]}),(0,c.jsxs)("p",{className:"text-xs self-center text-amber-950 dark:text-amber-600",children:["\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c ",s]})]})},u=e=>{const{limit:t,page:s,pages:n,total:a}=e,[l,i]=(0,r.useState)(!1);return(0,c.jsxs)("div",{className:"flex flex-col items-center max-w-min h-28 dark:text-slate-950",children:[l?(0,c.jsx)(m,{page:s,pages:n,changeMode:()=>i((e=>!e))}):(0,c.jsx)("div",{className:"h-16 mb-1"}),(0,c.jsx)(d,{page:s,pages:n,changeMode:()=>i((e=>!e))})]})};var x=s(3198),p=s(8182);const g=e=>{const t=(0,i.G)((e=>e.pageSizes.mainPageSize.toString())),s=(0,i.j)(),r=e=>{const r=x.tn.findIndex((e=>e===+t));let n;"prev"===e&&r>0&&(n=x.tn[r-1]),"next"===e&&r<x.tn[x.tn.length-1]&&(n=x.tn[r+1]),n&&s((0,p._F)(n))},n="w-10 h-10 leading-10 text-center rounded-full bg-lime-300";return(0,c.jsxs)("div",{className:"flex items-end gap-3 mb-1 text-2xl dark:text-slate-950",children:[(0,c.jsx)("p",{onClick:()=>{r("prev")},className:`${n}\n                    ${+t===x.tn[0]?"cursor-not-allowed":"cursor-pointer"}\n                    `,children:"\u300a"}),(0,c.jsx)("div",{className:"min-w-10 max-w-min h-10 px-2 flex\n        cursor-pointer rounded-full items-center justify-center\n        bg-lime-400",children:(0,c.jsx)("p",{className:"font-bold",children:t})}),(0,c.jsx)("p",{onClick:()=>{r("next")},className:`${n}\n                    ${+t===x.tn[x.tn.length-1]?"cursor-not-allowed":"cursor-pointer"}`,children:"\u300b"})]})};var h=s(5777);const v=e=>{var t;let{genreFilter:s}=e;const r=(0,i.G)((e=>e.pageNumbers.mainPageNumber.toString())),o=(0,i.G)((e=>e.pageSizes.mainPageSize.toString())),d=new URLSearchParams(a.map((e=>["selectFields",e])));d.append("page",r),d.append("limit",o),s&&d.append("genres.name",s);const{data:m,isFetching:x,isError:p}=(0,n.Lg)(d.toString());return(0,c.jsxs)(c.Fragment,{children:[!p&&!x&&!(null===m||void 0===m||null===(t=m.moviesList)||void 0===t||!t.length)&&(0,c.jsxs)("div",{className:"grid grid-cols-1 grid-rows-[1fr_112px]",children:[(0,c.jsx)("div",{style:{height:"calc(100vh - 350px)"},className:"grid gap-5 mt-5 mb-2 grid-cols-grid-cards overflow-y-auto",children:m.moviesList.map((e=>(0,c.jsx)(l.A,{movieInfo:e},e.id)))}),(0,c.jsxs)("div",{className:"flex justify-between",children:[(0,c.jsx)(u,{total:m.total,limit:m.limit,page:m.page,pages:m.pages}),(0,c.jsx)(g,{})]})]}),x&&(0,c.jsx)("div",{style:{height:"calc(100vh - 350px)"},className:"flex items-center justify-center",children:(0,c.jsx)(h.A,{})}),p&&(0,c.jsx)("div",{style:{height:"calc(100vh - 350px)"},className:"flex items-center justify-center",children:(0,c.jsx)("p",{className:"text-2xl text-amber-600",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"})})]})};var f=s(3623);const j=e=>{let{setSearchInput:t}=e;const[s,n]=(0,r.useState)(""),a=(0,f.A)(s);return r.useEffect((()=>{t(a)}),[a]),(0,c.jsxs)("div",{className:"h-14 w-1/4 flex flex-col justify-between",children:[(0,c.jsx)("h6",{className:"text-sm font-bold truncate text-amber-600 dark:text-amber-500",children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"}),(0,c.jsx)("input",{placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442...",type:"text",value:s,onChange:e=>n(e.target.value),className:"h-10 w-full px-2 rounded outline-none\n            text-slate-950\n            focus-visible:border-2 border-amber-500 dark:border-amber-600\n             bg-yellow-200"})]})},b=e=>{let{isSearchInput:t,setGenreFilter:s}=e;const r=new URLSearchParams;r.append("field","genres.name");const{data:a,isLoading:l,isError:i}=(0,n.xc)(r.toString());return(0,c.jsxs)("div",{className:"h-14 w-1/4 flex flex-col justify-between",children:[(0,c.jsx)("h6",{className:"text-sm font-bold truncate text-amber-600 dark:text-amber-500",children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0436\u0430\u043d\u0440\u0443"}),(0,c.jsxs)("select",{disabled:t,defaultValue:"",onChange:e=>(e=>{s(e.target.value)})(e),className:"h-10 w-full px-2 rounded outline-none\n          text-slate-950\n            focus-visible:border-2 border-amber-500 dark:border-amber-600\n          bg-yellow-200\n        ",children:[(0,c.jsx)("option",{value:"",className:"appearance-none bg-yellow-200",children:"\u0412\u0441\u0435"}),l&&(0,c.jsx)("option",{disabled:!0,value:"",className:"appearance-none bg-yellow-200",children:"\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b..."}),i&&(0,c.jsx)("option",{disabled:!0,value:"",className:"appearance-none bg-yellow-200",children:"\u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u0433\u0440\u0443\u0437\u0438\u0442\u044c, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043f\u043e\u0438\u0441\u043a\u043e\u043c"}),!i&&!l&&!(null===a||void 0===a||!a.length)&&a.map((e=>(0,c.jsx)("option",{value:e.name,children:e.name},e.slug)))]})]})},y=e=>{let{setSearchInput:t,isSearchInput:s,setGenreFilter:r}=e;return(0,c.jsxs)("div",{className:"flex gap-x-4",children:[(0,c.jsx)(j,{setSearchInput:t}),(0,c.jsx)(b,{isSearchInput:s,setGenreFilter:r})]})},N=e=>{var t;let{searchInput:s}=e;const r=(0,i.G)((e=>e.pageSizes.mainPageSize.toString())),a=new URLSearchParams;a.append("limit",r),a.append("query",s);const{data:o,isFetching:d,isError:m}=(0,n.B9)(a.toString(),{refetchOnMountOrArgChange:!0,skip:!s});return(0,c.jsxs)(c.Fragment,{children:[!m&&!d&&!(null===o||void 0===o||null===(t=o.moviesList)||void 0===t||!t.length)&&(0,c.jsxs)("div",{className:"grid grid-cols-1 grid-rows-[1fr_112px]",children:[(0,c.jsx)("div",{style:{height:"calc(100vh - 350px)"},className:"grid gap-5 mt-5 mb-2 grid-cols-grid-cards overflow-y-auto",children:o.moviesList.map((e=>(0,c.jsx)(l.A,{movieInfo:e},e.id)))}),(0,c.jsxs)("div",{className:"flex justify-between",children:[(0,c.jsx)(u,{total:o.total,limit:o.limit,page:o.page,pages:o.pages}),(0,c.jsx)(g,{})]})]}),d&&(0,c.jsx)("div",{style:{height:"calc(100vh - 350px)"},className:"flex items-center justify-center",children:(0,c.jsx)(h.A,{})}),m&&(0,c.jsx)("div",{style:{height:"calc(100vh - 350px)"},className:"flex items-center justify-center",children:(0,c.jsx)("p",{className:"text-2xl text-amber-600",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"})})]})},w=()=>{const[e,t]=(0,r.useState)(""),[s,n]=(0,r.useState)("");return(0,c.jsxs)("section",{className:"flex flex-col w-5/6 mx-auto row-start-2",children:[(0,c.jsx)(y,{isSearchInput:!!e,setSearchInput:t,setGenreFilter:n}),e?(0,c.jsx)(N,{searchInput:e}):(0,c.jsx)(v,{genreFilter:s})]})}},3623:(e,t,s)=>{s.d(t,{A:()=>n});var r=s(5043);const n=function(e,t){const[s,n]=(0,r.useState)(e);return(0,r.useEffect)((()=>{const s=setTimeout((()=>n(e)),t||500);return()=>{clearTimeout(s)}}),[e,t]),s}}}]);
//# sourceMappingURL=420.19da091d.chunk.js.map