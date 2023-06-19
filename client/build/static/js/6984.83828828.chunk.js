"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[6984],{283:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(3433),r=n(1413),i=n(5987),l=n(9439),s=n(2791),o=n(1358),d=n(1694),u=n.n(d),c=n(1087),v=n(6053),p=n(184),f=function(e){var t=e.tableProps,n=e.sizePerPageList,a=e.link,r=(0,s.useState)(t.pageCount),i=(0,l.Z)(r,2),o=i[0],d=i[1],f=(0,s.useState)(t.state.pageIndex),h=(0,l.Z)(f,2),x=h[0],m=h[1];(0,s.useEffect)((function(){d(t.pageCount),m(t.state.pageIndex)}),[t.pageCount,t.state.pageIndex]);var g=(0,s.useCallback)((function(e,t){return e.filter((function(e){return e<=o}))}),[o]),j=(0,s.useCallback)((function(e,t){return t<7?g([1,2,3,4,5,6],t):e%5>=0&&e>4&&e+2<t?[1,e-1,e,e+1,t]:e%5>=0&&e>4&&e+2>=t?[1,t-3,t-2,t-1,t]:[1,2,3,4,5,t]}),[g]),Z=function(e){if(e!==x+1){var n=j(e,o);C(g(n,o)),t.gotoPage(e-1)}};(0,s.useEffect)((function(){var e=j(0,o);C(e)}),[o,j]);var b=(0,s.useState)(j(0,o)),y=(0,l.Z)(b,2),N=y[0],C=y[1],D=x+1;return(0,p.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[n.length>0&&(0,p.jsxs)("div",{className:"d-inline-block me-3",children:[(0,p.jsx)("label",{className:"me-1",children:"Display :"}),(0,p.jsx)("select",{value:t.state.pageSize,onChange:function(e){t.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(n||[]).map((function(e,t){return(0,p.jsx)("option",{value:e.value,children:e.text},t)}))})]}),(0,p.jsxs)("span",{className:"me-3",children:["Page"," ",(0,p.jsxs)("strong",{children:[x+1," of ",t.pageOptions.length]})," "]}),(0,p.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,p.jsx)("label",{children:"Go to page : "}),(0,p.jsx)("input",{type:"number",value:x+1,min:"1",onChange:function(e){var n=e.target.value?Number(e.target.value)-1:0;t.gotoPage(n),m(t.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),(0,p.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,p.jsx)("li",{className:u()("page-item","paginate_button","previous",{disabled:1===D}),onClick:function(){1!==D&&Z(D-1)},children:(0,p.jsx)(c.rU,{to:a,className:"page-link",children:(0,p.jsx)(v.Ugn,{})})},"prevpage"),(N||[]).map((function(e,t,n){return n[t-1]+1<e?(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,p.jsx)(c.rU,{to:a,className:"page-link",children:"..."})}),(0,p.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:D===e}),onClick:function(t){return Z(e)},children:(0,p.jsx)(c.rU,{to:a,className:"page-link",children:e})})]},e):(0,p.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:D===e}),onClick:function(t){return Z(e)},children:(0,p.jsx)(c.rU,{to:a,className:"page-link",children:e})},e)})),(0,p.jsx)("li",{className:u()("page-item","paginate_button","next",{disabled:D===t.pageCount}),onClick:function(){D!==t.pageCount&&Z(D+1)},children:(0,p.jsx)(c.rU,{to:a,className:"page-link",children:(0,p.jsx)(v.ULj,{})})},"nextpage")]})]})},h=["indeterminate"],x=function(e){var t=e.preGlobalFilteredRows,n=e.globalFilter,a=e.setGlobalFilter,r=e.searchBoxClass,i=t.length,d=s.useState(n),c=(0,l.Z)(d,2),v=c[0],f=c[1],h=(0,o.useAsyncDebounce)((function(e){a(e||void 0)}),200);return(0,p.jsx)("div",{className:u()(r),children:(0,p.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,p.jsx)("input",{value:v||"",onChange:function(e){f(e.target.value),h(e.target.value)},placeholder:"".concat(i," records..."),className:"form-control w-auto ms-1"})]})})},m=(0,s.forwardRef)((function(e,t){var n=e.indeterminate,a=(0,i.Z)(e,h),l=(0,s.useRef)(),o=t||l;return(0,s.useEffect)((function(){o.current.indeterminate=n}),[o,n]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"form-check",children:[(0,p.jsx)("input",(0,r.Z)({type:"checkbox",className:"form-check-input",ref:o},a)),(0,p.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),g=function(e){var t=e.isSearchable||!1,n=e.isSortable||!1,i=e.pagination||!1,l=e.isSelectable||!1,s=e.isExpandable||!1,d=(0,o.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},t&&o.useGlobalFilter,n&&o.useSortBy,s&&o.useExpanded,i&&o.usePagination,l&&o.useRowSelect,(function(e){l&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllPageRowsSelectedProps;return(0,p.jsx)("div",{children:(0,p.jsx)(m,(0,r.Z)({},t()))})},Cell:function(e){var t=e.row;return(0,p.jsx)("div",{children:(0,p.jsx)(m,(0,r.Z)({},t.getToggleRowSelectedProps()))})}}].concat((0,a.Z)(e))})),s&&e.visibleColumns.push((function(e){return[{id:"expander",Header:function(e){var t=e.getToggleAllRowsExpandedProps,n=e.isAllRowsExpanded;return(0,p.jsx)("span",(0,r.Z)((0,r.Z)({},t()),{},{children:n?"-":"+"}))},Cell:function(e){var t=e.row;return t.canExpand?(0,p.jsx)("span",(0,r.Z)((0,r.Z)({},t.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*t.depth,"rem")}})),{},{children:t.isExpanded?"-":"+"})):null}}].concat((0,a.Z)(e))}))})),c=i?d.page:d.rows;return(0,p.jsxs)(p.Fragment,{children:[t&&(0,p.jsx)(x,{preGlobalFilteredRows:d.preGlobalFilteredRows,globalFilter:d.state.globalFilter,setGlobalFilter:d.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,p.jsx)("div",{className:"table-responsive",children:(0,p.jsxs)("table",(0,r.Z)((0,r.Z)({},d.getTableProps()),{},{className:u()("table table-centered react-table",e.tableClass),children:[(0,p.jsx)("thead",{className:e.theadClass,children:d.headerGroups.map((function(e){return(0,p.jsx)("tr",(0,r.Z)((0,r.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,p.jsx)("th",(0,r.Z)((0,r.Z)({},e.getHeaderProps(e.sort&&e.getSortByToggleProps())),{},{className:u()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")}))}))}))}))}),(0,p.jsx)("tbody",(0,r.Z)((0,r.Z)({},d.getTableBodyProps()),{},{children:(c||[]).map((function(e,t){return d.prepareRow(e),(0,p.jsx)("tr",(0,r.Z)((0,r.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,p.jsx)("td",(0,r.Z)((0,r.Z)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}),i&&(0,p.jsx)(f,{link:e.link,tableProps:d,sizePerPageList:e.sizePerPageList})]})}},1828:function(e,t,n){var a=n(1413),r=n(5671),i=n(3144),l=n(1830),s=n.n(l),o=n(6787),d=function(){function e(){(0,r.Z)(this,e)}return(0,i.Z)(e,null,[{key:"Delete",value:function(e,t){return s().fire({title:o.Z.t("Are you sure?"),text:o.Z.t("You won't be able to revert this!"),icon:o.Z.t("warning"),showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:o.Z.t("Cancel")}).then((function(n){if(n.isConfirmed)return t(e).then((function(e){if(e)return!0}))}))}},{key:"DeleteHistory",value:function(e,t,n){return s().fire({title:o.Z.t("Are you sure?"),text:o.Z.t("You won't be able to revert this!"),icon:o.Z.t("warning"),showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:o.Z.t("Cancel")}).then((function(a){if(a.isConfirmed)return n({id:e,hid:t}).then((function(e){if(e)return!0}))}))}},{key:"Update",value:function(e,t){return s().fire({title:"Do you want to enrolled courses?",showCancelButton:!0,confirmButtonText:"yes"}).then((function(n){if(n.isConfirmed)return t({coursesID:e}).then((function(e){return s().fire("enrolled!","","success"),window.location.reload(),e}));n.isDenied&&s().fire("Changes are not saved","","info")}))}},{key:"StatusUpdate",value:function(e,t,n){return s().fire({title:"Change Status",input:"select",inputOptions:{PENDING:"PENDING",REJECTED:"REJECTED",APPROVED:"APPROVED"}}).then((function(r){if(r.isConfirmed)return n({id:e,postBody:(0,a.Z)((0,a.Z)({},t),{},{status:r.value})}).then((function(e){return e}))}))}}]),e}();t.Z=d},916:function(e,t,n){n.d(t,{op:function(){return s},sW:function(){return u},tb:function(){return d},wS:function(){return o}});var a=n(4165),r=n(5861),i=n(7218),l=i.E.injectEndpoints({endpoints:function(e){return{leaveList:e.query({query:function(){return{url:"leave/leaveList",method:"GET"}}}),leaveCreate:e.mutation({query:function(e){return{url:"leave/leaveCreate",method:"POST",body:e}},onQueryStarted:function(e,t){return(0,r.Z)((0,a.Z)().mark((function e(){var n,r,l,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,r=t.queryFulfilled,e.prev=1,e.next=4,r;case 4:l=e.sent,s=l.data,n(i.E.util.updateQueryData("leaveList",void 0,(function(e){e.data.push(s.data)}))),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}),leaveUpdate:e.mutation({query:function(e){var t=e.id,n=e.postBody;return{url:"leave/leaveUpdate/".concat(t),method:"PATCH",body:n}},onQueryStarted:function(e,t){return(0,r.Z)((0,a.Z)().mark((function n(){var r,l,s,o,d;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,e.postBody,l=t.dispatch,s=t.queryFulfilled,n.prev=2,n.next=5,s;case 5:o=n.sent,d=o.data,l(i.E.util.updateQueryData("leaveList",void 0,(function(e){var t,n,a,i,l,s,o,u=e.data.findIndex((function(e){return e.id===r}));e.data[u].duration=null===d||void 0===d||null===(t=d.data)||void 0===t?void 0:t.duration,e.data[u].endDate=null===d||void 0===d||null===(n=d.data)||void 0===n?void 0:n.endDate,e.data[u].reason=null===d||void 0===d||null===(a=d.data)||void 0===a?void 0:a.reason,e.data[u].startDate=null===d||void 0===d||null===(i=d.data)||void 0===i?void 0:i.startDate,e.data[u].status=null===d||void 0===d||null===(l=d.data)||void 0===l?void 0:l.status,e.data[u].studentID=null===d||void 0===d||null===(s=d.data)||void 0===s?void 0:s.studentID,e.data[u].subject=null===d||void 0===d||null===(o=d.data)||void 0===o?void 0:o.subject}))),n.next=12;break;case 10:n.prev=10,n.t0=n.catch(2);case 12:case"end":return n.stop()}}),n,null,[[2,10]])})))()}}),leaveDelete:e.mutation({query:function(e){return{url:"leave/leaveDelete/".concat(e),method:"DELETE"}},onQueryStarted:function(e,t){return(0,r.Z)((0,a.Z)().mark((function n(){var r,l,s;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.dispatch,l=t.queryFulfilled,s=r(i.E.util.updateQueryData("leaveList",void 0,(function(t){t.data=t.data.filter((function(t){return t.id!==e}))}))),n.prev=2,n.next=5,l;case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),s.undo();case 10:case"end":return n.stop()}}),n,null,[[2,7]])})))()}})}}}),s=l.useLeaveCreateMutation,o=l.useLeaveListQuery,d=l.useLeaveUpdateMutation,u=l.useLeaveDeleteMutation},6984:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var a=n(5987),r=n(9439),i=n(2791),l=n(5736),s=n(7798),o=n(2576),d=n(3360),u=n(7022),c=n(9140),v=n(9743),p=n(2677),f=n(4849),h=n(9230),x=n(8820),m=n(1087),g=n(9126),j=n(6053),Z=n(1724),b=n(916),y=n(283),N=n(1828),C=n(1239),D=n(396),w=n(5316),k=n(184),P=function(e){var t=e.show,n=e.handleClose,a=e.singleLeave,r=(0,h.$G)().t;return(0,k.jsxs)(w.Z,{show:t,onHide:n,children:[(0,k.jsx)(w.Z.Header,{closeButton:!0,children:(0,k.jsxs)(w.Z.Title,{children:[r("subject"),": ",a.subject]})}),(0,k.jsxs)(w.Z.Body,{children:[(0,k.jsxs)("p",{children:[r("reason"),": ",a.reason]}),(0,k.jsxs)("p",{children:[r("start date"),": ",a.startDate]}),(0,k.jsxs)("p",{children:[r("end date"),": ",a.endDate]}),(0,k.jsxs)("p",{children:[r("duration"),": ",a.duration]})]}),(0,k.jsx)(w.Z.Footer,{children:(0,k.jsx)(d.Z,{variant:"primary",onClick:n,children:r("close")})})]})},E=n(2969),S=["id","createdAt","updatedAt","studentID"],T=function(){var e,t=(0,i.useState)({}),n=(0,r.Z)(t,2),w=n[0],T=n[1],I=(0,i.useState)(!1),B=(0,r.Z)(I,2),F=B[0],L=B[1],U=(0,h.$G)().t,A=(0,b.wS)(),G=A.data,R=A.isLoading,H=(0,b.sW)(),z=(0,r.Z)(H,1)[0],M=(null===G||void 0===G?void 0:G.data)||[],O=(0,D.IQ)().data,q=(0,b.tb)(),Q=(0,r.Z)(q,1)[0],Y=function(e){T(e),L(!0)},_=[{Header:"#",accessor:function(e,t){return t+1},sort:!0},{Header:U("student id"),accessor:function(e){return(0,k.jsxs)("span",{className:"ms-1",children:[" ",e.studentID]})},sort:!0},{Header:U("subject"),accessor:function(e){return(0,k.jsxs)("span",{className:"ms-1",children:[" ",e.subject]})},sort:!0},{Header:U("status"),accessor:function(e){return(0,k.jsx)("div",{className:"bodySmall",children:"PENDING"===(null===e||void 0===e?void 0:e.status)?(0,k.jsx)(l.Z,{bg:"primary",pill:!0,children:(0,k.jsx)("span",{className:"ms-1",children:U(null===e||void 0===e?void 0:e.status)})}):"REJECTED"===(null===e||void 0===e?void 0:e.status)?(0,k.jsx)(l.Z,{bg:"danger",pill:!0,children:(0,k.jsx)("span",{className:"ms-1",children:U(null===e||void 0===e?void 0:e.status)})}):"APPROVED"===(null===e||void 0===e?void 0:e.status)?(0,k.jsx)(l.Z,{bg:"success",pill:!0,children:(0,k.jsx)("span",{className:"ms-1",children:U(null===e||void 0===e?void 0:e.status)})}):""})},sort:!0},{Header:U("start date"),accessor:function(e){return(0,C.ZP)(null===e||void 0===e?void 0:e.startDate)},sort:!0},{Header:U("end date"),accessor:function(e){return(0,C.ZP)(null===e||void 0===e?void 0:e.endDate)},sort:!0},{Header:U("duration"),accessor:function(e){return(0,k.jsxs)("span",{className:"ms-1",children:[" ",e.duration]})},sort:!0},{Header:U("action"),accessor:function(e){var t,n,r,i,l;return(0,k.jsxs)("div",{className:"bodySmall",children:[(0,k.jsx)(s.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,k.jsx)(o.Z,{id:"button-tooltip",children:U("view")}),children:(0,k.jsx)(d.Z,{variant:"primary",style:{padding:"5px 10px"},onClick:function(){return Y(e)},children:(0,k.jsx)(x.$aU,{})})}),"STUDENT"!==(null===O||void 0===O||null===(t=O.data)||void 0===t?void 0:t.role)&&(0,k.jsx)(s.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,k.jsx)(o.Z,{id:"button-tooltip",children:U("status")}),children:(0,k.jsx)(d.Z,{className:"mr-10",variant:"warning",style:{padding:"5px 10px"},onClick:function(){return function(e){var t=e.id,n=(e.createdAt,e.updatedAt,e.studentID,(0,a.Z)(e,S));N.Z.StatusUpdate(t,n,Q)}(e)},children:(0,k.jsx)(j.aXP,{})})}),(0,k.jsx)(s.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,k.jsx)(o.Z,{id:"button-tooltip",children:U("edit")}),children:(0,k.jsx)(m.rU,{to:"/leave-create-update?id=".concat(null===e||void 0===e?void 0:e.id),onClick:function(t){var n,a;return"PENDING"!==(null===e||void 0===e?void 0:e.status)&&"STUDENT"===(null===O||void 0===O||null===(n=O.data)||void 0===n?void 0:n.role)||"ADMIN"===(null===O||void 0===O||null===(a=O.data)||void 0===a?void 0:a.role)?t.preventDefault():void 0},children:(0,k.jsx)(d.Z,{variant:"primary",style:{padding:"5px 10px"},className:"me-1",disabled:"PENDING"!==(null===e||void 0===e?void 0:e.status)&&"STUDENT"===(null===O||void 0===O||null===(n=O.data)||void 0===n?void 0:n.role)||"ADMIN"===(null===O||void 0===O||null===(r=O.data)||void 0===r?void 0:r.role),children:(0,k.jsx)(x.$iz,{})})})}),(0,k.jsx)(s.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,k.jsx)(o.Z,{id:"button-tooltip",children:U("delete")}),children:(0,k.jsx)(d.Z,{variant:"danger",style:{padding:"5px 10px"},onClick:function(){return t=e.id,void N.Z.Delete(t,z);var t},disabled:"PENDING"!==(null===e||void 0===e?void 0:e.status)&&"STUDENT"===(null===O||void 0===O||null===(i=O.data)||void 0===i?void 0:i.role)||"ADMIN"===(null===O||void 0===O||null===(l=O.data)||void 0===l?void 0:l.role),children:(0,k.jsx)(g.yvY,{})})})]})}}],$=[{text:U("5"),value:5},{text:U("10"),value:10},{text:U("25"),value:25},{text:U("all"),value:null===M||void 0===M?void 0:M.length}];return(0,k.jsxs)(Z.Z,{children:[(0,k.jsx)(u.Z,{children:(0,k.jsx)(c.Z,{children:(0,k.jsx)(c.Z.Body,{children:(0,k.jsxs)(v.Z,{children:[(0,k.jsxs)(p.Z,{className:"d-flex justify-content-between p-2",sm:12,children:[(0,k.jsx)("h5",{children:U("leave")}),(0,k.jsxs)("div",{children:[(0,k.jsx)(m.rU,{to:"/leave-create-update",onClick:function(e){var t;return"ADMIN"===(null===O||void 0===O||null===(t=O.data)||void 0===t?void 0:t.role)?e.preventDefault():void 0},children:(0,k.jsx)(d.Z,{size:"sm",variant:"primary",disabled:"ADMIN"===(null===O||void 0===O||null===(e=O.data)||void 0===e?void 0:e.role),children:U("create leave")})}),(0,k.jsx)(d.Z,{className:"mx-2",size:"sm",variant:"primary",onClick:function(){return(0,E.Z)(M,"leave-report","xls")},children:U("download report")})]})]}),(0,k.jsx)(p.Z,{sm:12,children:R?(0,k.jsx)(f.Z,{size:"lg",variant:"primary"}):null!==M&&void 0!==M&&M.length?(0,k.jsx)(y.Z,{columns:_,data:M,pageSize:5,sizePerPageList:$,isSortable:!0,pagination:!0}):U("no data found")})]})})})}),(0,k.jsx)(P,{singleLeave:w,show:F,handleClose:function(){return L(!1)}})]})}},1239:function(e,t,n){n.d(t,{p6:function(){return l}});n(2791);var a=n(6431),r=n.n(a),i=n(184);function l(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[r,n,a].join("-")}t.ZP=function(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r(),{format:"D MMM YYYY",withTitle:!0,children:e})," ",(0,i.jsx)("br",{})]})}},2969:function(e,t,n){var a=n(4942),r=n(3433),i=n(3589);t.Z=function(e,t,n){var l=e.map((function(t){return Object.assign.apply(Object,[{}].concat((0,r.Z)(function e(t){var n;return(n=[]).concat.apply(n,(0,r.Z)(Object.keys(t).map((function(n){return"object"===typeof t[n]?e(t[n]):(0,a.Z)({},n,t[n])}))))}(e))))}));if("csv"===n){var s=i.Z.types.csv;return(0,i.Z)({data:l,fileName:t,exportType:s})}if("xls"===n){var o=i.Z.types.xls;return(0,i.Z)({data:l,fileName:t,exportType:o})}}}}]);
//# sourceMappingURL=6984.83828828.chunk.js.map