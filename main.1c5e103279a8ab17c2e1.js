(()=>{"use strict";var e,t,a,n={618:(e,t,a)=>{var n=a(848),c=a(540),r=a(338),o=a(468),i=o.wA,s=o.d4,l=a(879),d=function(e,t,a){if(a||2===arguments.length)for(var n,c=0,r=t.length;c<r;c++)!n&&c in t||(n||(n=Array.prototype.slice.call(t,0,c)),n[c]=t[c]);return e.concat(n||Array.prototype.slice.call(t))};function u(e){var t=e.month,a=e.year,n=e.day;if(!(t>11||t<0||a>3e3||a<1e3||n>31||n<1)){var c=a+"",r="".concat(t).length<2?"0"+"".concat(t+1):"".concat(t+1),o="".concat(n).length<2?"0"+"".concat(n):"".concat(n);if(new Date(Date.parse(c+"-"+r+"-"+o)).getDate()===n)return Number(c+r+o)}}function h(e){var t=e.day,a=e.isBefore;if(!(t<0||t>6)){0===t&&(t=7);for(var n=[],c=0;a?c<t-1:c<7-t;c++)n=d(d([],n,!0),[0],!1);return n}}function y(e,t){if(!(t>11||t<0||e>3e3||e<1e3))return new Date(e,t+1,0).getDate()}function v(e){if(null!==e.month){var t=y(e.year,e.month),a=new Date(e.year,e.month,1).getDay(),n=new Date(e.year,e.month,t).getDay(),c=h({day:a,isBefore:!0}),r=h({day:n,isBefore:!1}),o=function(e){for(var t=[],a=0;a<e;a++)t=d(d([],t,!0),[a+1],!1);return t}(t);return function(e){if(e.length%7==0){for(var t=e.length/7,a=[],n=0,c=7,r=0;r<t;r++)a=d(d([],a,!0),[e.slice(n,c)],!1),n+=7,c+=7;return a}console.log("неверное количество дней в массиве (не делится на 7)")}(d(d(d([],c,!0),o,!0),r,!0))}}var m,f=function(){return f=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var c in t=arguments[a])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},f.apply(this,arguments)},p={activeDate:{day:null,year:null,month:null,daysInMonth:null},todayDate:{day:null,year:null,month:null},selectedDate:{day:null,year:null,month:null}},b=(0,l.Z0)({name:"date",initialState:p,reducers:{setTodayDate:function(e,t){e.todayDate=t.payload.today},setSelectedDate:function(e,t){e.selectedDate=t.payload.selected},resetSelectedDate:function(e){e.selectedDate=p.selectedDate},setActiveDate:function(e,t){e.activeDate=f(f({},t.payload.active),{daysInMonth:y(t.payload.active.year,t.payload.active.month)})},setNextDay:function(e){if(e.activeDate.day===e.activeDate.daysInMonth&&11===e.activeDate.month){var t=0,a=e.activeDate.year+1;return e.activeDate.day=1,e.activeDate.month=t,e.activeDate.year=a,void(e.activeDate.daysInMonth=y(a,t))}if(e.activeDate.day===e.activeDate.daysInMonth)return t=e.activeDate.month+1,e.activeDate.day=1,e.activeDate.month=t,void(e.activeDate.daysInMonth=y(e.activeDate.year,t));e.activeDate.day=e.activeDate.day+1},setPreviousDay:function(e){if(1===e.activeDate.day&&0===e.activeDate.month){var t=11,a=e.activeDate.year-1;return e.activeDate.day=y(a,t),e.activeDate.month=t,e.activeDate.year=a,void(e.activeDate.daysInMonth=y(a,t))}if(1===e.activeDate.day)return t=e.activeDate.month-1,e.activeDate.day=y(e.activeDate.year,t),e.activeDate.month=t,void(e.activeDate.daysInMonth=y(e.activeDate.year,t));e.activeDate.day=e.activeDate.day-1}}}),D=(m=b.actions).setTodayDate,x=m.setActiveDate,j=m.setNextDay,g=m.setPreviousDay,_=m.setSelectedDate,S=m.resetSelectedDate;const C=b.reducer;var O,N=function(){return N=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var c in t=arguments[a])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},N.apply(this,arguments)},w=(0,l.Z0)({name:"activeMonth",initialState:{activeMonthArr:[],date:{year:null,month:null}},reducers:{setMonth:function(e,t){e.activeMonthArr=v(t.payload.date),e.date=t.payload.date},monthIncrement:function(e){if(11===e.date.month){var t=e.date.year+1;return e.date=N(N({},e.date),{month:0,year:t}),void(e.activeMonthArr=v({month:0,year:t}))}var a=e.date.month+1;e.date=N(N({},e.date),{month:a}),e.activeMonthArr=v({month:a,year:e.date.year})},monthDecrement:function(e){if(0===e.date.month){var t=e.date.year-1;return e.date=N(N({},e.date),{month:11,year:t}),void(e.activeMonthArr=v({month:11,year:t}))}var a=e.date.month-1;e.date=N(N({},e.date),{month:a}),e.activeMonthArr=v({month:a,year:e.date.year})}}}),M=(O=w.actions).setMonth,k=O.monthIncrement,I=O.monthDecrement;const E=w.reducer,A="ilBOjqgW",z={table_data:"v0EDza9q",table_data_today:"sX6003Ux",table_data_active:"Mmioc5n5",table_data_selected:"Fh8qLGKY",table_button:"jWENOsdS",table_button_red:"iRQLQAgT",table_button_disabled:"nc7DAovz",table_button_text:"C4BI5iWK",table_button_text_gray:"Y4IXcajb",table_button_text_green:"NyJEqxKs",table_button_text_yellow:"q_YgXyae"},P=function(e){var t=e.day,a=e.index,r=s((function(e){return e.dateSlice.activeDate})),o=s((function(e){return e.dateSlice.selectedDate})),l=s((function(e){return e.activeMonthsEnumlice.date})),d=s((function(e){return e.dateSlice.todayDate})),h=s((function(e){return e.savedChoicesSlice.savedChoices})),y=i(),v=(0,c.useState)("gray"),m=v[0],f=v[1],p=(0,c.useState)(!1),b=p[0],D=p[1];(0,c.useEffect)((function(){var e=u({month:d.month,year:d.year,day:d.day}),a=u({month:l.month,year:l.year,day:t});D(e<a)}),[l.month,l.year,t,d.day,d.month,d.year]),(0,c.useEffect)((function(){var e=h.filter((function(e){return e.date===u({month:l.month,year:l.year,day:t})}));e.length>0?e.forEach((function(e){f(e.choice)})):f("gray")}),[l.month,l.year,t,h]);var x=r.day===t&&r.month===l.month&&r.year===l.year,j=d.day===t&&d.month===l.month&&d.year===l.year,g=o.day===t&&o.month===l.month&&o.year===l.year;return(0,n.jsx)("td",{className:"".concat(z.table_data," ").concat(j&&z.table_data_today," ").concat(x&&z.table_data_active," ").concat(g&&z.table_data_selected),children:(0,n.jsx)("button",{onClick:function(){y(_({selected:{month:l.month,year:l.year,day:t}}))},disabled:b,className:"".concat(z.table_button," ").concat((5===a||6===a)&&z.table_button_red," ").concat(b&&z.table_button_disabled),children:(0,n.jsx)("p",{className:"".concat(z.table_button_text," ").concat(!b&&z["table_button_text_".concat(m)]),children:t})})})},H=function(e){var t=e.weekArr,a=s((function(e){return e.activeMonthsEnumlice.date}));return(0,n.jsx)("tr",{children:t.map((function(e,t){return 0!==e?(0,n.jsx)(P,{day:e,index:t},u({month:a.month,year:a.year,day:e})+t):(0,n.jsx)("td",{},u({month:a.month,year:a.year,day:e})+t)}))})};var q,B;!function(e){e[e["Январь"]=0]="Январь",e[e["Февраль"]=1]="Февраль",e[e["Март"]=2]="Март",e[e["Апрель"]=3]="Апрель",e[e["Май"]=4]="Май",e[e["Июнь"]=5]="Июнь",e[e["Июль"]=6]="Июль",e[e["Август"]=7]="Август",e[e["Сентябрь"]=8]="Сентябрь",e[e["Октябрь"]=9]="Октябрь",e[e["Ноябрь"]=10]="Ноябрь",e[e["Декабрь"]=11]="Декабрь"}(q||(q={})),function(e){e[e["Января"]=0]="Января",e[e["Февраля"]=1]="Февраля",e[e["Марта"]=2]="Марта",e[e["Апреля"]=3]="Апреля",e[e["Мая"]=4]="Мая",e[e["Июня"]=5]="Июня",e[e["Июля"]=6]="Июля",e[e["Августа"]=7]="Августа",e[e["Сентября"]=8]="Сентября",e[e["Октября"]=9]="Октября",e[e["Ноября"]=10]="Ноября",e[e["Декабря"]=11]="Декабря"}(B||(B={}));var K;function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},T.apply(this,arguments)}const L=function(e){return c.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:"1em",height:"1em",fill:"cuurent",viewBox:"0 0 330 330"},e),K||(K=c.createElement("path",{d:"m250.606 154.389-150-149.996c-5.857-5.858-15.355-5.858-21.213.001-5.857 5.858-5.857 15.355.001 21.213l139.393 139.39L79.393 304.394c-5.857 5.858-5.857 15.355.001 21.213C82.322 328.536 86.161 330 90 330s7.678-1.464 10.607-4.394l149.999-150.004a14.996 14.996 0 0 0 0-21.213"})))},J=function(e){var t=e.extraStyles,a=e.onClick,c=e.isArrowLeft,r=void 0!==c&&c,o=e.disabled,i=void 0!==o&&o;return(0,n.jsx)("button",{disabled:i,type:"button",className:"".concat("q2OEhHeI"," ").concat(t," ").concat(!i&&"_9qJbKUZ"),onClick:a,children:(0,n.jsx)(L,{className:"".concat("cSxJfI5C"," ").concat(i&&"bTp1krPd"," ").concat(r&&"g8xspUBf")})})},Q=function(e){var t=e.onClick,a=e.text,c=e.disabled;return(0,n.jsx)("button",{disabled:c,className:"".concat("sNS8Y5Ii"," ").concat(c&&"lKThlKpY"),onClick:t,children:(0,n.jsx)("p",{className:"seKXS_rL",children:a})})},X=function(e){var t=e.setIsPopupOpened,a=(0,c.useState)(!1),r=a[0],o=a[1],l=s((function(e){return e.activeMonthsEnumlice})),d=s((function(e){return e.dateSlice.todayDate})),u=s((function(e){return e.dateSlice.selectedDate})),h=i();return(0,c.useEffect)((function(){l.date.month===d.month&&l.date.year===d.year?o(!0):o(!1)}),[l.date.month,l.date.year,d.month,d.year]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("article",{onClick:function(e){e.stopPropagation()},className:"L334LnJe",children:[(0,n.jsx)("h2",{className:"Wyv_ZKqM",children:"Календарь"}),(0,n.jsxs)("div",{className:"fUTQkZSQ",children:[(0,n.jsx)(J,{onClick:function(){h(I())},isArrowLeft:!0}),(0,n.jsx)("h3",{className:"zGCJ9y0H",children:q[l.date.month]}),(0,n.jsx)(J,{disabled:r,onClick:function(){h(k())}})]}),(0,n.jsx)("div",{className:"iDwTL2jl",children:(0,n.jsxs)("table",{className:"GR97xylR",children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:["пн","вт","ср","чт","пт","сб","вс"].map((function(e){return(0,n.jsx)("th",{className:"eMr9EM4B",children:e},e)}))})}),(0,n.jsx)("tbody",{className:"body",children:l.activeMonthArr&&l.activeMonthArr.map((function(e,t){return(0,n.jsx)(H,{weekArr:e},t)}))})]})}),(0,n.jsx)(Q,{text:"Выбрать",onClick:function(){h(x({active:u})),h(S()),t(!1)},disabled:null===u.day})]})})};var Z;function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},U.apply(this,arguments)}const Y=function(e){return c.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 122.88 122.88",width:"1em",height:"1em"},e),Z||(Z=c.createElement("path",{d:"M81.61 4.73c0-2.61 2.58-4.73 5.77-4.73s5.77 2.12 5.77 4.73v20.72c0 2.61-2.58 4.73-5.77 4.73s-5.77-2.12-5.77-4.73zm-15.5 99.08c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2H81.9c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2zM15.85 67.09c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2H81.9c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2zm25.14 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2zm-75.4 18.36c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2H81.9c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2zm25.14 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2zm-75.4 18.36c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2zm25.13 0c-.34 0-.61-1.43-.61-3.2s.27-3.2.61-3.2h15.79c.34 0 .61 1.43.61 3.2s-.27 3.2-.61 3.2zM29.61 4.73c0-2.61 2.58-4.73 5.77-4.73s5.77 2.12 5.77 4.73v20.72c0 2.61-2.58 4.73-5.77 4.73s-5.77-2.12-5.77-4.73zM6.4 45.32h110.07V21.47c0-.8-.33-1.53-.86-2.07-.53-.53-1.26-.86-2.07-.86H103c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2h10.55c2.57 0 4.9 1.05 6.59 2.74a9.3 9.3 0 0 1 2.74 6.59v92.09c0 2.57-1.05 4.9-2.74 6.59a9.3 9.3 0 0 1-6.59 2.74H9.33c-2.57 0-4.9-1.05-6.59-2.74a9.34 9.34 0 0 1-2.74-6.6V21.47c0-2.57 1.05-4.9 2.74-6.59a9.3 9.3 0 0 1 6.59-2.74H20.6c1.77 0 3.2 1.43 3.2 3.2s-1.43 3.2-3.2 3.2H9.33c-.8 0-1.53.33-2.07.86-.53.53-.86 1.26-.86 2.07zm110.08 6.41H6.4v61.82c0 .8.33 1.53.86 2.07.53.53 1.26.86 2.07.86h104.22c.8 0 1.53-.33 2.07-.86.53-.53.86-1.26.86-2.07zM50.43 18.54c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2h21.49c1.77 0 3.2 1.43 3.2 3.2s-1.43 3.2-3.2 3.2z"})))},V=function(e){var t=e.setIsPopupOpened,a=s((function(e){return e.dateSlice})),r=i(),o=(0,c.useState)(!1),l=o[0],d=o[1];return(0,c.useEffect)((function(){a.activeDate.day===a.todayDate.day&&a.activeDate.month===a.todayDate.month&&a.activeDate.year===a.todayDate.year?d(!0):d(!1)}),[a.activeDate.day,a.activeDate.month,a.activeDate.year,a.todayDate.day,a.todayDate.month,a.todayDate.year]),(0,n.jsxs)("div",{className:"F0Px_Txs",children:[(0,n.jsx)(J,{onClick:function(){r(g())},isArrowLeft:!0}),(0,n.jsxs)("button",{onClick:function(){t(!0),r(M({date:{month:a.activeDate.month,year:a.activeDate.year}}))},className:"qmu7_XQ2",children:[(0,n.jsx)(Y,{className:"xM4Q5aru"}),(0,n.jsx)("p",{className:"i__6hMd6",children:"".concat(a.activeDate.day," ").concat(B[a.activeDate.month])})]}),(0,n.jsx)(J,{onClick:function(){r(j())},disabled:l})]})};var W,F=function(e,t,a){if(a||2===arguments.length)for(var n,c=0,r=t.length;c<r;c++)!n&&c in t||(n||(n=Array.prototype.slice.call(t,0,c)),n[c]=t[c]);return e.concat(n||Array.prototype.slice.call(t))},G=(0,l.Z0)({name:"savedChoices",initialState:{savedChoices:[]},reducers:{setSavedChoices:function(e,t){e.savedChoices=t.payload.saved},setNewChoice:function(e,t){var a=F(F([],e.savedChoices,!0),[t.payload.choice],!1);e.savedChoices=a,localStorage.setItem("savedChoices",JSON.stringify(a))},deleteChoice:function(e,t){var a=e.savedChoices.filter((function(e){return e.date!==t.payload.date}));e.savedChoices=a,localStorage.setItem("savedChoices",JSON.stringify(a))}}}),R=(W=G.actions).setSavedChoices,$=W.setNewChoice,ee=W.deleteChoice;const te=G.reducer,ae=function(){var e=(0,c.useState)(!1),t=e[0],a=e[1],r=(0,c.useState)("empty"),o=r[0],l=r[1],d=i(),h=s((function(e){return e.dateSlice.activeDate})),y=s((function(e){return e.savedChoicesSlice.savedChoices}));(0,c.useEffect)((function(){var e=y.filter((function(e){return e.date===u({month:h.month,year:h.year,day:h.day})}));e.length>0?e.forEach((function(e){l(e.choice)})):l("empty")}),[h.day,h.month,h.year,y]);var v=function(e){if("empty"===o){var t=e.currentTarget.name,a=u({month:h.month,year:h.year,day:h.day});d($({choice:{choice:t,date:a}})),l(t)}};return(0,n.jsxs)("section",{className:"F3VKWZuR",children:[(0,n.jsx)("p",{className:"VrzRjtX1",children:"<- Placeholder"}),(0,n.jsx)(V,{setIsPopupOpened:a}),(0,n.jsx)("div",{className:"ixutb3Zj",children:(0,n.jsxs)("div",{className:"ySrs6qzQ",children:[("empty"===o||"green"===o)&&(0,n.jsx)("button",{name:"green",type:"button",onClick:v,className:"".concat(A," ").concat("INGUGquh"),children:"hello world"}),("empty"===o||"yellow"===o)&&(0,n.jsx)("button",{name:"yellow",type:"button",onClick:v,className:"".concat(A," ").concat("U86YX4nH"),children:"hello world"}),("empty"===o||"gray"===o)&&(0,n.jsx)("button",{name:"gray",type:"button",onClick:v,className:"".concat(A," ").concat("_8VWwQ29"),children:"hello world"}),"empty"!==o&&(0,n.jsx)("button",{name:"empty",type:"button",onClick:function(){var e=u({month:h.month,year:h.year,day:h.day});d(ee({date:e})),l("empty")},className:"".concat("V3fBQbkC"),children:"hello world?"})]})}),(0,n.jsx)("div",{onClick:function(){a(!1)},className:"".concat("mpOXN6aC"," ").concat(t&&"koK18NI0"),children:(0,n.jsx)(X,{setIsPopupOpened:a})})]})};var ne=(0,l.U1)({reducer:{dateSlice:C,activeMonthsEnumlice:E,savedChoicesSlice:te}}),ce=document.getElementById("root");if(!ce)throw new Error("root not found");(0,r.H)(ce).render((0,n.jsx)(c.StrictMode,{children:(0,n.jsx)(o.Kq,{store:ne,children:(0,n.jsx)((function(){var e=i();return(0,c.useEffect)((function(){var t=new Date,a={day:t.getDate(),month:t.getMonth(),year:t.getFullYear()};e(D({today:a}),e(x({active:a}))),e(M({date:a}));var n=JSON.parse(localStorage.getItem("savedChoices"));null!==n?e(R({saved:n})):localStorage.setItem("savedChoices",JSON.stringify([]))}),[]),(0,n.jsx)("main",{className:"XgHir4h8",children:(0,n.jsx)(ae,{})})}),{})})}))}},c={};function r(e){var t=c[e];if(void 0!==t)return t.exports;var a=c[e]={exports:{}};return n[e](a,a.exports,r),a.exports}r.m=n,e=[],r.O=(t,a,n,c)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){for(var[a,n,c]=e[d],i=!0,s=0;s<a.length;s++)(!1&c||o>=c)&&Object.keys(r.O).every((e=>r.O[e](a[s])))?a.splice(s--,1):(i=!1,c<o&&(o=c));if(i){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[a,n,c]},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var o={};t=t||[null,a({}),a([]),a(a)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=a(i))Object.getOwnPropertyNames(i).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,r.d(c,o),c},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,c,[o,i,s]=a,l=0;if(o.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(s)var d=s(r)}for(t&&t(a);l<o.length;l++)c=o[l],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(d)},a=self.webpackChunkcalendar_nutri=self.webpackChunkcalendar_nutri||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=r.O(void 0,[532],(()=>r(618)));o=r.O(o)})();