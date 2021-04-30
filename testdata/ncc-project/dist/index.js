require('./sourcemap-register.js');module.exports=(()=>{var __webpack_modules__={955:(e,t,r)=>{"use strict";var n=r(112);var a=r(148);var i=r(442);var o=r(987);function _interopDefaultLegacy(e){return e&&typeof e==="object"&&"default"in e?e:{default:e}}var u=_interopDefaultLegacy(n);var s=_interopDefaultLegacy(a);var l=_interopDefaultLegacy(i);var c=_interopDefaultLegacy(o);u["default"].extend(s["default"]);u["default"].extend(l["default"]);u["default"].extend(c["default"]);var f=function(e,t){return!t?e:function(){var r=[];for(var n=0;n<arguments.length;n++){r[n]=arguments[n]}return e.apply(void 0,r).locale(t)}};var d={normalDateWithWeekday:"ddd, MMM D",normalDate:"D MMMM",shortDate:"MMM D",monthAndDate:"MMMM D",dayOfMonth:"D",year:"YYYY",month:"MMMM",monthShort:"MMM",monthAndYear:"MMMM YYYY",weekday:"dddd",weekdayShort:"ddd",minutes:"mm",hours12h:"hh",hours24h:"HH",seconds:"ss",fullTime:"LT",fullTime12h:"hh:mm A",fullTime24h:"HH:mm",fullDate:"ll",fullDateWithWeekday:"dddd, LL",fullDateTime:"lll",fullDateTime12h:"ll hh:mm A",fullDateTime24h:"ll HH:mm",keyboardDate:"L",keyboardDateTime:"L LT",keyboardDateTime12h:"L hh:mm A",keyboardDateTime24h:"L HH:mm"};var h=function(){function DayjsUtils(e){var t=this;var r=e===void 0?{}:e,n=r.locale,a=r.formats,i=r.instance;this.lib="dayjs";this.is12HourCycleInCurrentLocale=function(){var e,r;return/A|a/.test((r=(e=t.rawDayJsInstance.Ls[t.locale||"en"])===null||e===void 0?void 0:e.formats)===null||r===void 0?void 0:r.LT)};this.getCurrentLocaleCode=function(){return t.locale||"en"};this.getFormatHelperText=function(e){var r=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?)|./g;return e.match(r).map(function(e){var r,n;var a=e[0];if(a==="L"){return(n=(r=t.rawDayJsInstance.Ls[t.locale||"en"])===null||r===void 0?void 0:r.formats[e])!==null&&n!==void 0?n:e}return e}).join("").replace(/a/gi,"(a|p)m").toLocaleLowerCase()};this.parse=function(e,r){if(e===""){return null}return t.dayjs(e,r,t.locale)};this.date=function(e){if(e===null){return null}return t.dayjs(e)};this.toJsDate=function(e){return e.toDate()};this.isValid=function(e){return t.dayjs(e).isValid()};this.isNull=function(e){return e===null};this.getDiff=function(e,t,r){return e.diff(t,r)};this.isAfter=function(e,t){return e.isAfter(t)};this.isBefore=function(e,t){return e.isBefore(t)};this.isAfterDay=function(e,t){return e.isAfter(t,"day")};this.isBeforeDay=function(e,t){return e.isBefore(t,"day")};this.isBeforeYear=function(e,t){return e.isBefore(t,"year")};this.isAfterYear=function(e,t){return e.isAfter(t,"year")};this.startOfDay=function(e){return e.clone().startOf("day")};this.endOfDay=function(e){return e.clone().endOf("day")};this.format=function(e,r){return t.formatByString(e,t.formats[r])};this.formatByString=function(e,r){return t.dayjs(e).format(r)};this.formatNumber=function(e){return e};this.getHours=function(e){return e.hour()};this.addSeconds=function(e,t){return t<0?e.subtract(Math.abs(t),"second"):e.add(t,"second")};this.addMinutes=function(e,t){return t<0?e.subtract(Math.abs(t),"minute"):e.add(t,"minute")};this.addHours=function(e,t){return t<0?e.subtract(Math.abs(t),"hour"):e.add(t,"hour")};this.addDays=function(e,t){return t<0?e.subtract(Math.abs(t),"day"):e.add(t,"day")};this.addWeeks=function(e,t){return t<0?e.subtract(Math.abs(t),"week"):e.add(t,"week")};this.addMonths=function(e,t){return t<0?e.subtract(Math.abs(t),"month"):e.add(t,"month")};this.setMonth=function(e,t){return e.set("month",t)};this.setHours=function(e,t){return e.set("hour",t)};this.getMinutes=function(e){return e.minute()};this.setMinutes=function(e,t){return e.clone().set("minute",t)};this.getSeconds=function(e){return e.second()};this.setSeconds=function(e,t){return e.clone().set("second",t)};this.getMonth=function(e){return e.month()};this.getDaysInMonth=function(e){return e.daysInMonth()};this.isSameDay=function(e,t){return e.isSame(t,"day")};this.isSameMonth=function(e,t){return e.isSame(t,"month")};this.isSameYear=function(e,t){return e.isSame(t,"year")};this.isSameHour=function(e,t){return e.isSame(t,"hour")};this.getMeridiemText=function(e){return e==="am"?"AM":"PM"};this.startOfMonth=function(e){return e.clone().startOf("month")};this.endOfMonth=function(e){return e.clone().endOf("month")};this.startOfWeek=function(e){return e.clone().startOf("week")};this.endOfWeek=function(e){return e.clone().endOf("week")};this.getNextMonth=function(e){return e.clone().add(1,"month")};this.getPreviousMonth=function(e){return e.clone().subtract(1,"month")};this.getMonthArray=function(e){var r=e.clone().startOf("year");var n=[r];while(n.length<12){var a=n[n.length-1];n.push(t.getNextMonth(a))}return n};this.getYear=function(e){return e.year()};this.setYear=function(e,t){return e.clone().set("year",t)};this.mergeDateAndTime=function(e,t){return e.hour(t.hour()).minute(t.minute()).second(t.second())};this.getWeekdays=function(){var e=t.dayjs().startOf("week");return[0,1,2,3,4,5,6].map(function(r){return t.formatByString(e.add(r,"day"),"dd")})};this.isEqual=function(e,r){if(e===null&&r===null){return true}return t.dayjs(e).isSame(r)};this.getWeekArray=function(e){var r=t.dayjs(e).clone().startOf("month").startOf("week");var n=t.dayjs(e).clone().endOf("month").endOf("week");var a=0;var i=r;var o=[];while(i.isBefore(n)){var u=Math.floor(a/7);o[u]=o[u]||[];o[u].push(i);i=i.clone().add(1,"day");a+=1}return o};this.getYearRange=function(e,r){var n=t.dayjs(e).startOf("year");var a=t.dayjs(r).endOf("year");var i=[];var o=n;while(o.isBefore(a)){i.push(o);o=o.clone().add(1,"year")}return i};this.isWithinRange=function(e,t){var r=t[0],n=t[1];return e.isBetween(r,n,null,"[]")};this.rawDayJsInstance=i||u["default"];this.dayjs=f(this.rawDayJsInstance,n);this.locale=n;this.formats=Object.assign({},d,a)}return DayjsUtils}();e.exports=h},65:(e,t)=>{t=e.exports=trim;function trim(e){if(e.trim)return e.trim();return t.right(t.left(e))}t.left=function(e){if(e.trimLeft)return e.trimLeft();return e.replace(/^\s\s*/,"")};t.right=function(e){if(e.trimRight)return e.trimRight();var t=/\s/,r=e.length;while(t.test(e.charAt(--r)));return e.slice(0,r+1)}},399:(e,t,r)=>{"use strict";r.r(t);var n=r(65);var a=r.n(n);var i=r(955);var o=r.n(i);console.log(a()("    hello world    "));console.log(process.env);const u=new(o());const s=u.date("2021/04/06");console.log(u.format(s,"fullDateTime24h"))},112:module=>{module.exports=eval("require")("dayjs")},148:module=>{module.exports=eval("require")("dayjs/plugin/customParseFormat")},987:module=>{module.exports=eval("require")("dayjs/plugin/isBetween")},442:module=>{module.exports=eval("require")("dayjs/plugin/localizedFormat")}};var __webpack_module_cache__={};function __nccwpck_require__(e){if(__webpack_module_cache__[e]){return __webpack_module_cache__[e].exports}var t=__webpack_module_cache__[e]={exports:{}};var r=true;try{__webpack_modules__[e](t,t.exports,__nccwpck_require__);r=false}finally{if(r)delete __webpack_module_cache__[e]}return t.exports}(()=>{__nccwpck_require__.n=(e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;__nccwpck_require__.d(t,{a:t});return t})})();(()=>{__nccwpck_require__.d=((e,t)=>{for(var r in t){if(__nccwpck_require__.o(t,r)&&!__nccwpck_require__.o(e,r)){Object.defineProperty(e,r,{enumerable:true,get:t[r]})}}})})();(()=>{__nccwpck_require__.o=((e,t)=>Object.prototype.hasOwnProperty.call(e,t))})();(()=>{__nccwpck_require__.r=(e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})})})();__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(399)})();
//# sourceMappingURL=index.js.map