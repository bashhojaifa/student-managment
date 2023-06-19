"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[8900],{283:function(e,t,n){n.d(t,{Z:function(){return j}});var s=n(3433),i=n(1413),a=n(5987),r=n(9439),o=n(2791),l=n(1358),c=n(1694),u=n.n(c),d=n(1087),p=n(6053),f=n(184),x=function(e){var t=e.tableProps,n=e.sizePerPageList,s=e.link,i=(0,o.useState)(t.pageCount),a=(0,r.Z)(i,2),l=a[0],c=a[1],x=(0,o.useState)(t.state.pageIndex),h=(0,r.Z)(x,2),v=h[0],m=h[1];(0,o.useEffect)((function(){c(t.pageCount),m(t.state.pageIndex)}),[t.pageCount,t.state.pageIndex]);var j=(0,o.useCallback)((function(e,t){return e.filter((function(e){return e<=l}))}),[l]),g=(0,o.useCallback)((function(e,t){return t<7?j([1,2,3,4,5,6],t):e%5>=0&&e>4&&e+2<t?[1,e-1,e,e+1,t]:e%5>=0&&e>4&&e+2>=t?[1,t-3,t-2,t-1,t]:[1,2,3,4,5,t]}),[j]),b=function(e){if(e!==v+1){var n=g(e,l);C(j(n,l)),t.gotoPage(e-1)}};(0,o.useEffect)((function(){var e=g(0,l);C(e)}),[l,g]);var Z=(0,o.useState)(g(0,l)),N=(0,r.Z)(Z,2),y=N[0],C=N[1],k=v+1;return(0,f.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[n.length>0&&(0,f.jsxs)("div",{className:"d-inline-block me-3",children:[(0,f.jsx)("label",{className:"me-1",children:"Display :"}),(0,f.jsx)("select",{value:t.state.pageSize,onChange:function(e){t.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(n||[]).map((function(e,t){return(0,f.jsx)("option",{value:e.value,children:e.text},t)}))})]}),(0,f.jsxs)("span",{className:"me-3",children:["Page"," ",(0,f.jsxs)("strong",{children:[v+1," of ",t.pageOptions.length]})," "]}),(0,f.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,f.jsx)("label",{children:"Go to page : "}),(0,f.jsx)("input",{type:"number",value:v+1,min:"1",onChange:function(e){var n=e.target.value?Number(e.target.value)-1:0;t.gotoPage(n),m(t.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),(0,f.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,f.jsx)("li",{className:u()("page-item","paginate_button","previous",{disabled:1===k}),onClick:function(){1!==k&&b(k-1)},children:(0,f.jsx)(d.rU,{to:s,className:"page-link",children:(0,f.jsx)(p.Ugn,{})})},"prevpage"),(y||[]).map((function(e,t,n){return n[t-1]+1<e?(0,f.jsxs)(o.Fragment,{children:[(0,f.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,f.jsx)(d.rU,{to:s,className:"page-link",children:"..."})}),(0,f.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:k===e}),onClick:function(t){return b(e)},children:(0,f.jsx)(d.rU,{to:s,className:"page-link",children:e})})]},e):(0,f.jsx)("li",{className:u()("page-item","d-none","d-xl-inline-block",{active:k===e}),onClick:function(t){return b(e)},children:(0,f.jsx)(d.rU,{to:s,className:"page-link",children:e})},e)})),(0,f.jsx)("li",{className:u()("page-item","paginate_button","next",{disabled:k===t.pageCount}),onClick:function(){k!==t.pageCount&&b(k+1)},children:(0,f.jsx)(d.rU,{to:s,className:"page-link",children:(0,f.jsx)(p.ULj,{})})},"nextpage")]})]})},h=["indeterminate"],v=function(e){var t=e.preGlobalFilteredRows,n=e.globalFilter,s=e.setGlobalFilter,i=e.searchBoxClass,a=t.length,c=o.useState(n),d=(0,r.Z)(c,2),p=d[0],x=d[1],h=(0,l.useAsyncDebounce)((function(e){s(e||void 0)}),200);return(0,f.jsx)("div",{className:u()(i),children:(0,f.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,f.jsx)("input",{value:p||"",onChange:function(e){x(e.target.value),h(e.target.value)},placeholder:"".concat(a," records..."),className:"form-control w-auto ms-1"})]})})},m=(0,o.forwardRef)((function(e,t){var n=e.indeterminate,s=(0,a.Z)(e,h),r=(0,o.useRef)(),l=t||r;return(0,o.useEffect)((function(){l.current.indeterminate=n}),[l,n]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:"form-check",children:[(0,f.jsx)("input",(0,i.Z)({type:"checkbox",className:"form-check-input",ref:l},s)),(0,f.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),j=function(e){var t=e.isSearchable||!1,n=e.isSortable||!1,a=e.pagination||!1,r=e.isSelectable||!1,o=e.isExpandable||!1,c=(0,l.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},t&&l.useGlobalFilter,n&&l.useSortBy,o&&l.useExpanded,a&&l.usePagination,r&&l.useRowSelect,(function(e){r&&e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllPageRowsSelectedProps;return(0,f.jsx)("div",{children:(0,f.jsx)(m,(0,i.Z)({},t()))})},Cell:function(e){var t=e.row;return(0,f.jsx)("div",{children:(0,f.jsx)(m,(0,i.Z)({},t.getToggleRowSelectedProps()))})}}].concat((0,s.Z)(e))})),o&&e.visibleColumns.push((function(e){return[{id:"expander",Header:function(e){var t=e.getToggleAllRowsExpandedProps,n=e.isAllRowsExpanded;return(0,f.jsx)("span",(0,i.Z)((0,i.Z)({},t()),{},{children:n?"-":"+"}))},Cell:function(e){var t=e.row;return t.canExpand?(0,f.jsx)("span",(0,i.Z)((0,i.Z)({},t.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*t.depth,"rem")}})),{},{children:t.isExpanded?"-":"+"})):null}}].concat((0,s.Z)(e))}))})),d=a?c.page:c.rows;return(0,f.jsxs)(f.Fragment,{children:[t&&(0,f.jsx)(v,{preGlobalFilteredRows:c.preGlobalFilteredRows,globalFilter:c.state.globalFilter,setGlobalFilter:c.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,f.jsx)("div",{className:"table-responsive",children:(0,f.jsxs)("table",(0,i.Z)((0,i.Z)({},c.getTableProps()),{},{className:u()("table table-centered react-table",e.tableClass),children:[(0,f.jsx)("thead",{className:e.theadClass,children:c.headerGroups.map((function(e){return(0,f.jsx)("tr",(0,i.Z)((0,i.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,f.jsx)("th",(0,i.Z)((0,i.Z)({},e.getHeaderProps(e.sort&&e.getSortByToggleProps())),{},{className:u()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")}))}))}))}))}),(0,f.jsx)("tbody",(0,i.Z)((0,i.Z)({},c.getTableBodyProps()),{},{children:(d||[]).map((function(e,t){return c.prepareRow(e),(0,f.jsx)("tr",(0,i.Z)((0,i.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,f.jsx)("td",(0,i.Z)((0,i.Z)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}),a&&(0,f.jsx)(x,{link:e.link,tableProps:c,sizePerPageList:e.sizePerPageList})]})}},1828:function(e,t,n){var s=n(1413),i=n(5671),a=n(3144),r=n(1830),o=n.n(r),l=n(6787),c=function(){function e(){(0,i.Z)(this,e)}return(0,a.Z)(e,null,[{key:"Delete",value:function(e,t){return o().fire({title:l.Z.t("Are you sure?"),text:l.Z.t("You won't be able to revert this!"),icon:l.Z.t("warning"),showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:l.Z.t("Cancel")}).then((function(n){if(n.isConfirmed)return t(e).then((function(e){if(e)return!0}))}))}},{key:"DeleteHistory",value:function(e,t,n){return o().fire({title:l.Z.t("Are you sure?"),text:l.Z.t("You won't be able to revert this!"),icon:l.Z.t("warning"),showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:l.Z.t("Cancel")}).then((function(s){if(s.isConfirmed)return n({id:e,hid:t}).then((function(e){if(e)return!0}))}))}},{key:"Update",value:function(e,t){return o().fire({title:"Do you want to enrolled courses?",showCancelButton:!0,confirmButtonText:"yes"}).then((function(n){if(n.isConfirmed)return t({coursesID:e}).then((function(e){return o().fire("enrolled!","","success"),window.location.reload(),e}));n.isDenied&&o().fire("Changes are not saved","","info")}))}},{key:"StatusUpdate",value:function(e,t,n){return o().fire({title:"Change Status",input:"select",inputOptions:{PENDING:"PENDING",REJECTED:"REJECTED",APPROVED:"APPROVED"}}).then((function(i){if(i.isConfirmed)return n({id:e,postBody:(0,s.Z)((0,s.Z)({},t),{},{status:i.value})}).then((function(e){return e}))}))}}]),e}();t.Z=c},38:function(e,t,n){n.d(t,{Ek:function(){return c},VS:function(){return o},ir:function(){return u},tK:function(){return l}});var s=n(4165),i=n(5861),a=n(7218),r=a.E.injectEndpoints({endpoints:function(e){return{subjectRepetitionList:e.query({query:function(){return{url:"subjectRepetition/subjectRepetitionList",method:"GET"}}}),subjectRepetitionCreate:e.mutation({query:function(e){return{url:"subjectRepetition/subjectRepetitionCreate",method:"POST",body:e}},onQueryStarted:function(e,t){return(0,i.Z)((0,s.Z)().mark((function e(){var n,i,r,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,i=t.queryFulfilled,e.prev=1,e.next=4,i;case 4:r=e.sent,o=r.data,n(a.E.util.updateQueryData("subjectRepetitionList",void 0,(function(e){e.data.push(o.data)}))),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}),subjectRepetitionUpdate:e.mutation({query:function(e){var t=e.id,n=e.postBody;return{url:"subjectRepetition/subjectRepetitionUpdate/".concat(t),method:"PATCH",body:n}},onQueryStarted:function(e,t){return(0,i.Z)((0,s.Z)().mark((function n(){var i,r,o,l,c,u;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e.id,r=e.postBody,o=t.dispatch,l=t.queryFulfilled,n.prev=2,n.next=5,l;case 5:c=n.sent,u=c.data,o(a.E.util.updateQueryData("subjectRepetitionList",void 0,(function(e){var t,n=e.data.findIndex((function(e){return e.id===i}));e.data[n].rollNo=r.rollNo,e.data[n].session=r.session,e.data[n].sessionCGPA=r.sessionCGPA,e.data[n].sessionRegistration=r.sessionRegistration,e.data[n].status=null===u||void 0===u||null===(t=u.data)||void 0===t?void 0:t.status,e.data[n].studentID=r.studentID,e.data[n].studentName=r.studentName,e.data[n].subject=r.subject}))),n.next=12;break;case 10:n.prev=10,n.t0=n.catch(2);case 12:case"end":return n.stop()}}),n,null,[[2,10]])})))()}}),subjectRepetitionDelete:e.mutation({query:function(e){return{url:"subjectRepetition/subjectRepetitionDelete/".concat(e),method:"DELETE"}},onQueryStarted:function(e,t){return(0,i.Z)((0,s.Z)().mark((function n(){var i,r,o;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.dispatch,r=t.queryFulfilled,o=i(a.E.util.updateQueryData("subjectRepetitionList",void 0,(function(t){t.data=t.data.filter((function(t){return t.id!==e}))}))),n.prev=2,n.next=5,r;case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),o.undo();case 10:case"end":return n.stop()}}),n,null,[[2,7]])})))()}})}}}),o=r.useSubjectRepetitionCreateMutation,l=r.useSubjectRepetitionListQuery,c=r.useSubjectRepetitionUpdateMutation,u=r.useSubjectRepetitionDeleteMutation},8900:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var s=n(5987),i=n(9439),a=n(2791),r=n(5736),o=n(7798),l=n(2576),c=n(3360),u=n(7022),d=n(9140),p=n(9743),f=n(2677),x=n(4849),h=n(9230),v=n(8820),m=n(1087),j=n(9126),g=n(6053),b=n(1724),Z=n(38),N=n(283),y=n(1828),C=n(396),k=n(5316),P=n(184),w=function(e){var t=e.show,n=e.handleClose,s=e.singleSubjectRepetition;console.log(s);var i=(0,h.$G)().t;return(0,P.jsxs)(k.Z,{show:t,onHide:n,children:[(0,P.jsx)(k.Z.Header,{closeButton:!0,children:(0,P.jsxs)(k.Z.Title,{children:[i("id"),": ",s.studentID]})}),(0,P.jsxs)(k.Z.Body,{children:[(0,P.jsxs)("p",{children:[i("name"),": ",s.studentName]}),(0,P.jsxs)("p",{children:[i("session CGPA"),": ",s.sessionCGPA]}),(0,P.jsxs)("p",{children:[i("roll No"),": ",s.rollNo]}),(0,P.jsxs)("p",{children:[i("session"),": ",s.session]}),(0,P.jsxs)("p",{children:[i("session registration"),": ",s.sessionRegistration]})]}),(0,P.jsx)(k.Z.Footer,{children:(0,P.jsx)(c.Z,{variant:"primary",onClick:n,children:i("close")})})]})},D=n(2969),R=["id","createdAt","updatedAt","studentID"],S=function(){var e,t=(0,a.useState)(!1),n=(0,i.Z)(t,2),k=n[0],S=n[1],E=(0,a.useState)({}),T=(0,i.Z)(E,2),A=T[0],G=T[1],I=(0,C.IQ)().data,B=(0,Z.Ek)(),U=(0,i.Z)(B,1)[0],F=(0,h.$G)().t,H=(0,Z.tK)(),L=H.data,z=H.isLoading,O=(0,Z.ir)(),q=(0,i.Z)(O,1)[0],M=(null===L||void 0===L?void 0:L.data)||[],Q=function(e){G(e),S(!0)},_=[{Header:"#",accessor:function(e,t){return t+1},sort:!0},{Header:F("student id"),accessor:function(e){return(0,P.jsxs)("span",{className:"ms-1",children:[" ",e.studentID]})},sort:!0},{Header:F("name"),accessor:function(e){return(0,P.jsxs)("span",{className:"ms-1",children:[" ",e.studentName]})},sort:!0},{Header:F("roll"),accessor:function(e){return e.rollNo},sort:!0},{Header:F("session"),accessor:function(e){return e.session},sort:!0},{Header:F("session registration"),accessor:function(e){return(0,P.jsxs)("span",{className:"ms-1",children:[" ",e.sessionRegistration]})},sort:!0},{Header:F("session CGPA"),accessor:function(e){return(0,P.jsxs)("span",{className:"ms-1",children:[" ",e.sessionCGPA]})},sort:!0},{Header:F("status"),accessor:function(e){return(0,P.jsx)("div",{className:"bodySmall",children:"PENDING"===(null===e||void 0===e?void 0:e.status)?(0,P.jsx)(r.Z,{bg:"primary",pill:!0,children:(0,P.jsx)("span",{className:"ms-1",children:F(null===e||void 0===e?void 0:e.status)})}):"REJECTED"===(null===e||void 0===e?void 0:e.status)?(0,P.jsx)(r.Z,{bg:"danger",pill:!0,children:(0,P.jsx)("span",{className:"ms-1",children:F(null===e||void 0===e?void 0:e.status)})}):"APPROVED"===(null===e||void 0===e?void 0:e.status)?(0,P.jsx)(r.Z,{bg:"success",pill:!0,children:(0,P.jsx)("span",{className:"ms-1",children:F(null===e||void 0===e?void 0:e.status)})}):""})},sort:!0},{Header:F("action"),accessor:function(e){var t,n,i,a,r;return(0,P.jsxs)("div",{className:"bodySmall",children:[(0,P.jsx)(o.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,P.jsx)(l.Z,{id:"button-tooltip",children:F("view")}),children:(0,P.jsx)(c.Z,{variant:"primary",style:{padding:"5px 10px"},onClick:function(){return Q(e)},children:(0,P.jsx)(v.$aU,{})})}),"STUDENT"!==(null===I||void 0===I||null===(t=I.data)||void 0===t?void 0:t.role)&&(0,P.jsx)(o.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,P.jsx)(l.Z,{id:"button-tooltip",children:F("status")}),children:(0,P.jsx)(c.Z,{className:"mr-10",variant:"warning",style:{padding:"5px 10px"},onClick:function(){return function(e){var t=e.id,n=(e.createdAt,e.updatedAt,e.studentID,(0,s.Z)(e,R));y.Z.StatusUpdate(t,n,U)}(e)},children:(0,P.jsx)(g.aXP,{})})}),(0,P.jsx)(o.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,P.jsx)(l.Z,{id:"button-tooltip",children:F("edit")}),children:(0,P.jsx)(m.rU,{to:"/subject-repetition-create-update?id=".concat(null===e||void 0===e?void 0:e.id),onClick:function(t){var n,s;return"PENDING"!==(null===e||void 0===e?void 0:e.status)&&"STUDENT"===(null===I||void 0===I||null===(n=I.data)||void 0===n?void 0:n.role)||"ADMIN"===(null===I||void 0===I||null===(s=I.data)||void 0===s?void 0:s.role)?t.preventDefault():void 0},children:(0,P.jsx)(c.Z,{variant:"primary",style:{padding:"5px 10px"},className:"me-1",disabled:"PENDING"!==(null===e||void 0===e?void 0:e.status)&&"STUDENT"===(null===I||void 0===I||null===(n=I.data)||void 0===n?void 0:n.role)||"ADMIN"===(null===I||void 0===I||null===(i=I.data)||void 0===i?void 0:i.role),children:(0,P.jsx)(v.$iz,{})})})}),(0,P.jsx)(o.Z,{placement:"top",delay:{show:250,hide:400},overlay:(0,P.jsx)(l.Z,{id:"button-tooltip",children:F("delete")}),children:(0,P.jsx)(c.Z,{variant:"danger",style:{padding:"5px 10px"},onClick:function(){return t=e.id,void y.Z.Delete(t,q);var t},disabled:"PENDING"!==(null===e||void 0===e?void 0:e.status)&&"STUDENT"===(null===I||void 0===I||null===(a=I.data)||void 0===a?void 0:a.role)||"ADMIN"===(null===I||void 0===I||null===(r=I.data)||void 0===r?void 0:r.role),children:(0,P.jsx)(j.yvY,{})})})]})}}],V=[{text:F("5"),value:5},{text:F("10"),value:10},{text:F("25"),value:25},{text:F("all"),value:null===M||void 0===M?void 0:M.length}];return(0,P.jsxs)(b.Z,{children:[(0,P.jsx)(u.Z,{children:(0,P.jsx)(d.Z,{children:(0,P.jsx)(d.Z.Body,{children:(0,P.jsxs)(p.Z,{children:[(0,P.jsxs)(f.Z,{className:"d-flex justify-content-between p-2",sm:12,children:[(0,P.jsx)("h5",{children:F("subject repetition")}),(0,P.jsxs)("div",{children:[(0,P.jsx)(m.rU,{to:"/subject-repetition-create-update",onClick:function(e){var t;return"ADMIN"===(null===I||void 0===I||null===(t=I.data)||void 0===t?void 0:t.role)?e.preventDefault():void 0},children:(0,P.jsx)(c.Z,{size:"sm",variant:"primary",disabled:"ADMIN"===(null===I||void 0===I||null===(e=I.data)||void 0===e?void 0:e.role),children:F("create subject repetition")})}),(0,P.jsx)(c.Z,{className:"mx-2",size:"sm",variant:"primary",onClick:function(){return(0,D.Z)(M,"subject-repetition-report","xls")},children:F("download report")})]})]}),(0,P.jsx)(f.Z,{sm:12,children:z?(0,P.jsx)(x.Z,{size:"lg",variant:"primary"}):null!==M&&void 0!==M&&M.length?(0,P.jsx)(N.Z,{columns:_,data:M,pageSize:5,sizePerPageList:V,isSortable:!0,pagination:!0}):F("no data found")})]})})})}),(0,P.jsx)(w,{singleSubjectRepetition:A,show:k,handleClose:function(){return S(!1)}})]})}},2969:function(e,t,n){var s=n(4942),i=n(3433),a=n(3589);t.Z=function(e,t,n){var r=e.map((function(t){return Object.assign.apply(Object,[{}].concat((0,i.Z)(function e(t){var n;return(n=[]).concat.apply(n,(0,i.Z)(Object.keys(t).map((function(n){return"object"===typeof t[n]?e(t[n]):(0,s.Z)({},n,t[n])}))))}(e))))}));if("csv"===n){var o=a.Z.types.csv;return(0,a.Z)({data:r,fileName:t,exportType:o})}if("xls"===n){var l=a.Z.types.xls;return(0,a.Z)({data:r,fileName:t,exportType:l})}}}}]);
//# sourceMappingURL=8900.86cb26d1.chunk.js.map