(this.webpackJsonpinspire=this.webpackJsonpinspire||[]).push([[0],{105:function(e,t,c){},130:function(e,t,c){var n={"./day-1.jpg":131,"./day-10.jpg":132,"./day-2.jpg":133,"./day-3.jpg":134,"./day-4.jpg":135,"./day-5.jpg":136,"./day-6.jpg":137,"./day-7.jpg":138,"./day-8.jpg":139,"./day-9.jpg":140,"./night-1.jpg":141,"./night-10.jpg":142,"./night-2.jpg":143,"./night-3.jpg":144,"./night-4.jpg":145,"./night-5.jpg":146,"./night-6.jpg":147,"./night-7.jpg":148,"./night-8.jpg":149,"./night-9.jpg":150};function a(e){var t=s(e);return c(t)}function s(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=130},131:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/day-1.f905905e.jpg"},132:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/day-10.69e277d9.jpg"},133:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/day-2.d78865dc.jpg"},134:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/day-3.05ddd86a.jpg"},135:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/day-4.f789c553.jpg"},136:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/day-5.4a8fac67.jpg"},137:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/day-6.1e2d33fd.jpg"},138:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/day-7.8908c0ec.jpg"},139:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/day-8.f805f2ec.jpg"},140:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/day-9.e3553af5.jpg"},141:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/night-1.2bd50a97.jpg"},142:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/night-10.ca752afe.jpg"},143:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/night-2.3b49767a.jpg"},144:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/night-3.bef711f7.jpg"},145:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/night-4.30cbbdf1.jpg"},146:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/night-5.ea2cc660.jpg"},147:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/night-6.eb79ea87.jpg"},148:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/night-7.28c70ed9.jpg"},149:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/night-8.adda68b1.jpg"},150:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/night-9.9533b806.jpg"},151:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),s=c(10),r=c.n(s),i=(c(105),c(12)),u=c(14),o=c(13),d={getModalState:function(){var e=f("modalState");!1!==e&&(e=!0);return e},removeModal:function(){l("modalState",!1)},saveUserPrefs:function(e){l("userPrefs",e)},loadUserPrefs:function(){var e=f("userPrefs");e||(e=j);return e},clearUserPrefs:function(){localStorage.removeItem("userPrefs",j)},updateUnits:function(){var e=f("userPrefs");e||(e={isF:!1});var t=e.isF;l("userPrefs",Object(o.a)(Object(o.a)({},e),{},{isF:!t}))},saveImgNum:function(e){l("imgNum",e)},loadImgNum:function(){var e=f("imgNum");e||(e=1);return e}},j={};function l(e,t){localStorage.setItem(e,JSON.stringify(t))}function f(e){var t=localStorage.getItem(e);return JSON.parse(t)}function b(e){return d.saveUserPrefs(e),function(t){t({type:"SET_USER_PREFS",userPrefs:e})}}var O=c(23),h=c.n(O);function m(){return Object(n.jsxs)("div",{className:"days container flex",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"header",children:"WEEKDAY"}),Object(n.jsx)("p",{children:h()().format("dddd")})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"header",children:"MONTH"}),Object(n.jsx)("p",{children:h()().format("MMMM")})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"header",children:"WEEK NUMER"}),Object(n.jsx)("p",{children:h()().week()})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"header",children:"DAY OF THE YEAR"}),Object(n.jsx)("p",{children:h()().dayOfYear()})]})]})}function p(e){var t,c=e.day,a=e.isShowingC,s=Object(u.c)((function(e){return e.userReducer.time.hours})),r=s>=18||s<6;return Object(n.jsxs)("div",{className:"weather-card",children:[Object(n.jsx)("img",{src:function(){var e=c["".concat(r?"Night":"Day")].Icon;return e<10&&(e="0"+e),"https://developer.accuweather.com/sites/default/files/".concat(e,"-s.png")}(),alt:""}),Object(n.jsx)("h3",{children:h()(c.Date).format("ddd DD/MM/YY")}),Object(n.jsx)("p",{children:c["".concat(r?"Night":"Day")].IconPhrase}),Object(n.jsxs)("p",{className:"temperature",children:[a?c.Temperature["".concat(r?"Minimum":"Maximum")].Value:(t=c.Temperature["".concat(r?"Minimum":"Maximum")].Value,9*t/5+32).toFixed(1),"\xb0",a?"C":"F"]})]})}function g(e){var t=e.days,c=e.isShowingC;return Object(n.jsx)("div",{className:"weather-list container flex",children:t.DailyForecasts.map((function(e,t){return Object(n.jsx)(p,{day:e,isShowingC:c},t)}))})}function x(e){var t=e.isSeeMore,c=e.days,a=Object(u.c)((function(e){return!e.userReducer.userPrefs.isF}))||!d.loadUserPrefs().isF,s=Object(u.b)();return c?Object(n.jsxs)("div",{className:"more-details ".concat(t?"more":"less"),children:[Object(n.jsx)(g,{days:c,isShowingC:a}),Object(n.jsxs)("div",{className:"message-show container flex space-between",children:[Object(n.jsx)("p",{className:"message",children:c.Headline.Text}),Object(n.jsxs)("p",{className:"show",onClick:function(){s((d.updateUnits(),function(e){e({type:"TOGGLE_UNITS"})}))},children:["SHOW IN \xb0",a?"F":"C"]})]}),Object(n.jsx)(m,{})]}):"Loading"}function v(e){var t=e.quote,c=e.getNewQuote;return t.author||(t.author="Anonymous"),Object(n.jsxs)("div",{className:"quotes flex space-between",children:[Object(n.jsxs)("div",{className:"body",children:[Object(n.jsxs)("p",{className:"quote",children:[Object(n.jsx)("span",{children:"\u201c"}),t.text,Object(n.jsx)("span",{children:"\u201d"})]}),Object(n.jsx)("p",{className:"author",children:t.author})]}),Object(n.jsx)("div",{className:"new-quote",children:Object(n.jsx)("i",{className:"fas fa-sync-alt",onClick:c})})]})}var N=c(37),y=c.n(N),E={getLocation:function(){return y.a.get("https://ipapi.co/json/").then(S)}},S=function(e){return e.data};function w(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){E.getLocation().then((function(e){"Peta\u1e96 Tiqwa"===e.city&&(e.city="tel aviv"),s(e)}))}),[]),c?Object(n.jsx)("div",{className:"location",children:Object(n.jsxs)("p",{children:["IN ",c.city,", ",c.country_name]})}):"Loading"}function M(){var e=Object(a.useState)(),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(),o=Object(i.a)(r,2),j=o[0],l=o[1],f=Object(a.useState)(),b=Object(i.a)(f,2),O=b[0],h=b[1],m=Object(a.useRef)(null),p=Object(u.b)(),g=Object(u.c)((function(e){return e.userReducer.userPrefs.name}))||d.loadUserPrefs().name;function x(){var e,t=new Date,c=t.getHours(),n=t.getMinutes(),a=t.getSeconds();n=n<10?"0"+n:n,a=a<10?"0"+a:a,s(c),l(n),h(a),p((e={hours:c,mins:n,secs:a},function(t){t({type:"SET_TIME",time:e})}))}return Object(a.useEffect)((function(){return x(),m.current=setInterval((function(){x()}),1e3),function(){clearInterval(m.current)}}),[]),Object(n.jsxs)("div",{className:"greet-time-location",children:[Object(n.jsxs)("div",{className:"greet flex",children:[Object(n.jsx)("i",{className:"fas fa-sun ".concat(c>=6&&c<=17?"":"hide")}),Object(n.jsx)("i",{className:"fas fa-moon ".concat(c<=5||c>=18?"":"hide")}),Object(n.jsxs)("p",{className:"greet-line",children:["GOOD ",c>=6&&c<=11?"MORNING":c>=12&&c<=17?"AFTERNOON":c>=18&&c<=21?"EVENING":"NIGHT",g,", IT'S CURRENTLY"]})]}),Object(n.jsxs)("div",{className:"time flex",children:[Object(n.jsxs)("p",{children:[c,":",j]}),Object(n.jsx)("p",{className:"secounds",children:O})]}),Object(n.jsx)(w,{})]})}var C=c(35),P=c.n(C),T=c(46),I={getQuotes:function(){return F.apply(this,arguments)}};function F(){return(F=Object(T.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://type.fit/api/quotes");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function R(e){var t=e.isSeeMore,c=e.seeMore;return Object(n.jsxs)("div",{className:"more-less-btn flex",onClick:c,children:[Object(n.jsx)("p",{className:"more-less",children:t?"LESS":"MORE"}),Object(n.jsx)("p",{className:"arrow",children:Object(n.jsx)("i",{className:"fas fa-angle-".concat(t?"down":"up")})})]})}var U={getWeather:function(){return L.apply(this,arguments)}},k="FlOJUbbCEJZEONxsV2wo2Qp0dUoV1Uy6",D=function(e){return e.data};function L(){return(L=Object(T.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:return t=e.sent,e.abrupt("return",y.a.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t[0].Key,"?apikey=").concat(k,"&metric=true")).then(D));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return q.apply(this,arguments)}function q(){return(q=Object(T.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getLocation().then((function(e){return e.city}));case 2:return"Peta\u1e96 Tiqwa"===(t=e.sent)&&(t="tel aviv"),e.next=6,y.a.get("https://dataservice.accuweather.com/locations/v1/cities/search?apikey=".concat(k,"&q=").concat(t)).then(D);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y={on:function(e,t){var c=function(e){var c=e.detail;t(c)};return window.addEventListener(e,c),function(){window.removeEventListener(e,c)}},emit:function(e,t){window.dispatchEvent(new CustomEvent(e,{detail:t}))}};function A(){var e=Object(u.c)((function(e){return e.userReducer.userPrefs.birthdate}))||d.loadUserPrefs().birthdate,t=Object(a.useState)(),c=Object(i.a)(t,2),s=c[0],r=c[1],o=Object(a.useRef)(null),j=Object(u.b)();function l(){var t=h()(new Date).diff(h()(e),"days");r((36525-t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}function f(){Y.emit("openModal")}return Object(a.useEffect)((function(){return l(),o.current=setInterval((function(){l()}),6e4),function(){clearInterval(o.current)}}),[]),Object(n.jsxs)("div",{className:"days-count",children:[!e&&Object(n.jsx)("p",{className:"btn connect-btn",onClick:f,children:"CONNECT"}),e&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{className:"days-to-go",children:[s," days to go"]}),Object(n.jsx)("small",{children:"(YES, WE BELIEVE YOU'LL MAKE IT TO THE AGE OF 100)"}),Object(n.jsx)("p",{className:"days-to-go",children:"make every second count"}),Object(n.jsxs)("div",{className:"btns",children:[Object(n.jsx)("p",{className:"btn edit-btn",onClick:f,children:"EDIT"}),Object(n.jsx)("p",{className:"btn logout-btn",onClick:function(){j((d.clearUserPrefs(),function(e){e({type:"CLEAR_USER_PREFS"})}))},children:"DISCONNECT"})]})]})]})}function G(){var e=Object(a.useState)(d.loadImgNum()),t=Object(i.a)(e,2),s=t[0],r=t[1],o=Object(u.c)((function(e){return e.userReducer.time.hours}));function j(e){var t=s+e;0===t&&(t=10),11===t&&(t=1),r(t),d.saveImgNum(t)}return Object(n.jsxs)("div",{className:"background",children:[Object(n.jsx)("p",{className:"left",onClick:function(){return j(-1)},children:Object(n.jsx)("i",{className:"fas fa-angle-left"})}),Object(n.jsx)("img",{src:c(130)("./".concat(o>=18||o<6?"night":"day","-").concat(s,".jpg")).default,alt:""}),Object(n.jsx)("p",{className:"right",onClick:function(){return j(1)},children:Object(n.jsx)("i",{className:"fas fa-angle-right"})})]})}var H=c(45),V=c(81),J=c(176),W=c(184),B=c(189),K=c(181),Q=c(19),X=c(183),$=c(80);function Z(){var e=Object(a.useState)({name:"",birthdate:null,isF:!1}),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(!1),j=Object(i.a)(r,2),l=j[0],f=j[1],O=Object(a.useState)(!1),m=Object(i.a)(O,2),p=m[0],g=m[1],x=Object(u.b)();function v(){s({name:"",birthdate:null,isF:!1}),Y.emit("closeModal"),d.removeModal(),Y.emit("showContent")}function N(e){if(e){var t,n=(t=h()(c.birthdate).format("DD/MM/YYYY"),/(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/.test(String(t)));c.name||f(!0),c.birthdate||g(!0),c.name&&c.birthdate&&n&&e&&(c.name=" "+c.name,x(b(c)),v())}else v()}var y=Object(V.a)({palette:{primary:{main:"#4169e1"}},typography:{fontFamily:"montserrat"}});return Object(n.jsxs)("form",{className:"form",noValidate:!0,autoComplete:"off",children:[Object(n.jsx)("p",{className:"header header-first",children:"ENTER YOUR DETAILS"}),Object(n.jsx)("p",{className:"header header-second",children:"AND ENJOY THE FULL EXPERIENCE"}),Object(n.jsxs)(J.a,{theme:y,children:[Object(n.jsxs)("div",{className:"form-field",children:[Object(n.jsx)(W.a,{id:"first-name",name:"name",label:"First Name",style:{width:300},value:c.name,onChange:function(e){var t=e.target,c=t.name,n=t.value;n?n&&f(!1):f(!0),s((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(H.a)({},c,n))}))},inputProps:{maxLength:10},helperText:"".concat(c.name.length,"/").concat(10)}),Object(n.jsx)("p",{className:"required name-required ".concat(l?"":"hide"),children:"This field is required"})]}),Object(n.jsxs)("div",{className:"form-field date-field",children:[Object(n.jsx)(Q.a,{utils:$.a,children:Object(n.jsx)(X.a,{style:{width:300},id:"birthdate",name:"birthdate",label:"Birthdate",format:"dd/MM/yyyy",value:c.birthdate,onChange:function(e){e?e&&g(!1):g(!0),s((function(t){return Object(o.a)(Object(o.a)({},t),{},{birthdate:e})}))},KeyboardButtonProps:{"aria-label":"change date"},maxDate:new Date})}),Object(n.jsx)("p",{className:"required birthdate-required ".concat(p?"":"hide"),children:"This field is required"})]})]}),Object(n.jsxs)("div",{className:"form-field",children:[Object(n.jsx)("p",{className:"units",children:"Preffered Units"}),Object(n.jsxs)("div",{className:"degSwitch",children:[Object(n.jsx)("p",{className:"".concat(c.isF?"":"color"),children:"\xb0C"}),Object(n.jsx)(B.a,{checked:c.isF,onChange:function(e){var t=e.target,c=t.name,n=t.checked;s((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(H.a)({},c,n))}))},color:"default",name:"isF"}),Object(n.jsx)("p",{className:"".concat(c.isF?"color":""),children:"\xb0F"})]})]}),Object(n.jsxs)("div",{className:"form-field btns",children:[Object(n.jsx)(K.a,{variant:"outlined",onClick:function(){return N(!0)},children:"OK"}),Object(n.jsx)(K.a,{variant:"outlined",onClick:function(){return N(!1)},children:"CANCEL"})]})]})}function z(){var e=d.getModalState(),t=Object(a.useState)(e),c=Object(i.a)(t,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){return Y.on("closeModal",(function(){r(!1)})),Y.on("openModal",(function(){r(!0)})),function(){}}),[]),Object(n.jsx)("div",{className:"modal-wrapper ".concat(s?"":"hide"),children:Object(n.jsx)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:Object(n.jsx)(Z,{})})})}function ee(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(null),o=Object(i.a)(r,2),j=o[0],l=o[1],f=Object(a.useState)(!1),O=Object(i.a)(f,2),h=O[0],m=O[1],p=Object(a.useState)(),g=Object(i.a)(p,2),N=g[0],y=g[1],E=Object(a.useState)(!1),S=Object(i.a)(E,2),w=S[0],C=S[1],P=Object(a.useState)(!1),T=Object(i.a)(P,2),F=(T[0],T[1]),k=d.getModalState(),D=Object(u.b)(),L=Object(a.useRef)(null);function _(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}return Object(a.useEffect)((function(){return D(b(d.loadUserPrefs())),I.getQuotes().then((function(e){s(e),l(e[_(0,e.length-1)])})),U.getWeather().then((function(e){y(e)})),Y.on("showContent",(function(){F(!0)})),L.current=setInterval((function(){!function(){var e=(new Date).getHours();0!==e||w?1===e&&C(!1):(U.getWeather().then((function(e){y(e)})),C(!0))}()}),6e4),function(){clearInterval(L.current)}}),[]),j?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"desktop-only",children:["Inspire is a desktop only app ",Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{})," Thank you for your interest"]}),Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)(G,{}),Object(n.jsx)(z,{}),Object(n.jsx)("div",{className:"container",children:!k&&Object(n.jsxs)("div",{className:"content ".concat(h?"up":"down"),children:[Object(n.jsx)(v,{quote:j,getNewQuote:function(){l(c[_(0,c.length-1)])}}),Object(n.jsx)(A,{}),Object(n.jsx)(M,{}),Object(n.jsx)(R,{isSeeMore:h,seeMore:function(){m(!h)}})]})}),Object(n.jsx)(x,{isSeeMore:h,days:N})]})]}):null}var te=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(ee,{})})},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,190)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},ne=c(32),ae=c(79),se={userPrefs:{},time:{}};var re=Object(ne.c)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_PREFS":return Object(o.a)(Object(o.a)({},e),{},{userPrefs:t.userPrefs});case"CLEAR_USER_PREFS":return Object(o.a)(Object(o.a)({},e),{},{userPrefs:{}});case"TOGGLE_UNITS":var c=Object(o.a)(Object(o.a)({},e.userPrefs),{},{isF:!e.userPrefs.isF});return Object(o.a)(Object(o.a)({},e),{},{userPrefs:c});case"SET_TIME":return Object(o.a)(Object(o.a)({},e),{},{time:t.time});default:return e}}}),ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.d,ue=Object(ne.e)(re,ie(Object(ne.a)(ae.a)));r.a.render(Object(n.jsx)(u.a,{store:ue,children:Object(n.jsx)(te,{})}),document.getElementById("root")),ce()}},[[151,1,2]]]);
//# sourceMappingURL=main.389e2fd3.chunk.js.map