(this["webpackJsonpgithub-jobs-app"]=this["webpackJsonpgithub-jobs-app"]||[]).push([[0],{167:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),s=a.n(c),r=a(20),o=a.n(r),i=a(27),j=a(9),l=a(16),b=a(17),u=a.n(b),d="https://flask-cors-proxy-ska.herokuapp.com//https://jobs.github.com/positions.json",h="make-request",O="get-data",x="error",p="update-has-next-page",m=function(e,t){switch(t.type){case h:return{loading:!0,jobs:[]};case O:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,jobs:t.payload.jobs});case x:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.payload.error,jobs:[]});case p:return Object(j.a)(Object(j.a)({},e),{},{hasNextPage:t.payload.hasNextPage});default:return e}},g=function(e,t){var a=Object(c.useReducer)(m,{jobs:[],loading:!0}),n=Object(l.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){var a=u.a.CancelToken.source();r({type:h}),console.log(t),u.a.get(d,{cancelToken:a.token,params:Object(j.a)({markdown:!0,page:t},e)}).then((function(e){r({type:O,payload:{jobs:e.data}})})).catch((function(e){u.a.isCancel(e)||r({type:x,payload:{error:e}})}));var n=u.a.CancelToken.source();return u.a.get(d,{cancelToken:n.token,params:Object(j.a)({markdown:!0,page:t+1},e)}).then((function(e){r({type:p,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){u.a.isCancel(e)||r({type:x,payload:{error:e}})})),function(){a.cancel(),n.cancel()}}),[e,t]),s},f=a(171),y=a(174),k=a(169),v=a(170),C=a(172),N=a(39),P=a.n(N),w=function(e){var t=e.job,a=Object(c.useState)(!1),s=Object(l.a)(a,2),r=s[0],o=s[1];return Object(n.jsx)(y.a,{className:"mb-3",children:Object(n.jsxs)(y.a.Body,{children:[Object(n.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)(y.a.Title,{children:[t.title," -"," ",Object(n.jsx)("span",{className:"text-muted font-weight-light",children:t.company})]}),Object(n.jsx)(y.a.Subtitle,{className:"text-muted mb-2",children:new Date(t.created_at).toLocaleDateString()}),Object(n.jsx)(k.a,{variant:"secondary",className:"mr-2",children:t.type}),Object(n.jsx)(k.a,{variant:"secondary",children:t.location}),Object(n.jsx)("div",{style:{wordBreak:"break-all"},children:Object(n.jsx)(P.a,{source:t.how_to_apply})})]}),Object(n.jsx)("img",{className:"d-none d-md-block",height:"50",src:t.company_logo,alt:t.company})]}),Object(n.jsx)(y.a.Text,{children:Object(n.jsx)(v.a,{onClick:function(){return o((function(e){return!e}))},vairant:"primary",children:r?"Hide Details":"View Details"})}),Object(n.jsx)(C.a,{in:r,children:Object(n.jsx)("div",{className:"mt-4",children:Object(n.jsx)(P.a,{source:t.description})})})]})})},T=a(175),L=function(e){var t=e.page,a=e.setPage,c=e.hasNextPage,s=function(e){a((function(t){return t+e}))};return Object(n.jsxs)(T.a,{children:[1!==t&&Object(n.jsx)(T.a.Prev,{onClick:function(){return s(-1)}}),1!==t&&Object(n.jsx)(T.a.Item,{onClick:function(){return a(1)},children:"1"}),t>2&&Object(n.jsx)(T.a.Ellipsis,{}),t>2&&Object(n.jsx)(T.a.Item,{onClick:function(){return s(-1)},children:t-1}),Object(n.jsx)(T.a.Item,{active:!0,children:t}),c&&Object(n.jsx)(T.a.Item,{onClick:function(){return s(1)},children:t+1}),c&&Object(n.jsx)(T.a.Next,{onClick:function(){return s(1)}})]})},S=a(173),D=a(65),I=function(e){var t=e.params,a=e.onParamChange;return Object(n.jsx)(S.a,{className:"mb-4",children:Object(n.jsxs)(S.a.Row,{className:"align-items-end",children:[Object(n.jsxs)(S.a.Group,{as:D.a,children:[Object(n.jsx)(S.a.Label,{children:"Description"}),Object(n.jsx)(S.a.Control,{onChange:a,value:t.description,name:"description",type:"text"})]}),Object(n.jsxs)(S.a.Group,{as:D.a,children:[Object(n.jsx)(S.a.Label,{children:"Location"}),Object(n.jsx)(S.a.Control,{onChange:a,value:t.location,name:"location",type:"text"})]}),Object(n.jsx)(S.a.Group,{as:D.a,xs:"auto",className:"ml-2",children:Object(n.jsx)(S.a.Check,{onChange:a,value:t.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"checkbox",className:"mb-2"})})]})})},_=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(1),o=Object(l.a)(r,2),b=o[0],u=o[1],d=g(a,b),h=d.jobs,O=d.loading,x=d.error,p=d.hasNextPage;return Object(n.jsxs)(f.a,{className:"my-4",children:[Object(n.jsx)("h1",{className:"mb-4",children:"Github Jobs"}),Object(n.jsx)(I,{params:a,onParamChange:function(e){var t=e.target.name,a=e.target.value;u(1),s((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(i.a)({},t,a))}))}}),Object(n.jsx)(L,{page:b,setPage:u,hasNextPage:p}),O&&Object(n.jsx)("h1",{children:"Loading..."}),x&&Object(n.jsx)("h1",{children:"Error. Try refreshing"}),h.map((function(e){return Object(n.jsx)(w,{job:e},e.id)})),Object(n.jsx)(L,{page:b,setPage:u,hasNextPage:p})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,176)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root")),F()}},[[167,1,2]]]);
//# sourceMappingURL=main.b4f389a0.chunk.js.map