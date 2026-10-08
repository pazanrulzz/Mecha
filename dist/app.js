(()=>{var _T=Object.create;var n_=Object.defineProperty;var ST=Object.getOwnPropertyDescriptor;var MT=Object.getOwnPropertyNames;var wT=Object.getPrototypeOf,CT=Object.prototype.hasOwnProperty;var qi=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}};var bT=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of MT(e))!CT.call(t,i)&&i!==n&&n_(t,i,{get:()=>e[i],enumerable:!(a=ST(e,i))||a.enumerable});return t};var ve=(t,e,n)=>(n=t!=null?_T(wT(t)):{},bT(e||!t||!t.__esModule?n_(n,"default",{value:t,enumerable:!0}):n,t));var YM=qi(it=>{"use strict";var sc=Symbol.for("react.element"),XD=Symbol.for("react.portal"),YD=Symbol.for("react.fragment"),KD=Symbol.for("react.strict_mode"),ZD=Symbol.for("react.profiler"),jD=Symbol.for("react.provider"),$D=Symbol.for("react.context"),JD=Symbol.for("react.forward_ref"),QD=Symbol.for("react.suspense"),e3=Symbol.for("react.memo"),t3=Symbol.for("react.lazy"),NM=Symbol.iterator;function n3(t){return t===null||typeof t!="object"?null:(t=NM&&t[NM]||t["@@iterator"],typeof t=="function"?t:null)}var OM={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zM=Object.assign,HM={};function ll(t,e,n){this.props=t,this.context=e,this.refs=HM,this.updater=n||OM}ll.prototype.isReactComponent={};ll.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ll.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function VM(){}VM.prototype=ll.prototype;function Mx(t,e,n){this.props=t,this.context=e,this.refs=HM,this.updater=n||OM}var wx=Mx.prototype=new VM;wx.constructor=Mx;zM(wx,ll.prototype);wx.isPureReactComponent=!0;var UM=Array.isArray,GM=Object.prototype.hasOwnProperty,Cx={current:null},WM={key:!0,ref:!0,__self:!0,__source:!0};function qM(t,e,n){var a,i={},r=null,s=null;if(e!=null)for(a in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(r=""+e.key),e)GM.call(e,a)&&!WM.hasOwnProperty(a)&&(i[a]=e[a]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(a in o=t.defaultProps,o)i[a]===void 0&&(i[a]=o[a]);return{$$typeof:sc,type:t,key:r,ref:s,props:i,_owner:Cx.current}}function a3(t,e){return{$$typeof:sc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bx(t){return typeof t=="object"&&t!==null&&t.$$typeof===sc}function i3(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var BM=/\/+/g;function Sx(t,e){return typeof t=="object"&&t!==null&&t.key!=null?i3(""+t.key):e.toString(36)}function Vh(t,e,n,a,i){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case sc:case XD:s=!0}}if(s)return s=t,i=i(s),t=a===""?"."+Sx(s,0):a,UM(i)?(n="",t!=null&&(n=t.replace(BM,"$&/")+"/"),Vh(i,e,n,"",function(u){return u})):i!=null&&(bx(i)&&(i=a3(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(BM,"$&/")+"/")+t)),e.push(i)),1;if(s=0,a=a===""?".":a+":",UM(t))for(var o=0;o<t.length;o++){r=t[o];var l=a+Sx(r,o);s+=Vh(r,e,n,l,i)}else if(l=n3(t),typeof l=="function")for(t=l.call(t),o=0;!(r=t.next()).done;)r=r.value,l=a+Sx(r,o++),s+=Vh(r,e,n,l,i);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Hh(t,e,n){if(t==null)return t;var a=[],i=0;return Vh(t,a,"","",function(r){return e.call(n,r,i++)}),a}function r3(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ia={current:null},Gh={transition:null},s3={ReactCurrentDispatcher:ia,ReactCurrentBatchConfig:Gh,ReactCurrentOwner:Cx};function XM(){throw Error("act(...) is not supported in production builds of React.")}it.Children={map:Hh,forEach:function(t,e,n){Hh(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hh(t,function(){e++}),e},toArray:function(t){return Hh(t,function(e){return e})||[]},only:function(t){if(!bx(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};it.Component=ll;it.Fragment=YD;it.Profiler=ZD;it.PureComponent=Mx;it.StrictMode=KD;it.Suspense=QD;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s3;it.act=XM;it.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var a=zM({},t.props),i=t.key,r=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,s=Cx.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)GM.call(e,l)&&!WM.hasOwnProperty(l)&&(a[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];a.children=o}return{$$typeof:sc,type:t.type,key:i,ref:r,props:a,_owner:s}};it.createContext=function(t){return t={$$typeof:$D,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jD,_context:t},t.Consumer=t};it.createElement=qM;it.createFactory=function(t){var e=qM.bind(null,t);return e.type=t,e};it.createRef=function(){return{current:null}};it.forwardRef=function(t){return{$$typeof:JD,render:t}};it.isValidElement=bx;it.lazy=function(t){return{$$typeof:t3,_payload:{_status:-1,_result:t},_init:r3}};it.memo=function(t,e){return{$$typeof:e3,type:t,compare:e===void 0?null:e}};it.startTransition=function(t){var e=Gh.transition;Gh.transition={};try{t()}finally{Gh.transition=e}};it.unstable_act=XM;it.useCallback=function(t,e){return ia.current.useCallback(t,e)};it.useContext=function(t){return ia.current.useContext(t)};it.useDebugValue=function(){};it.useDeferredValue=function(t){return ia.current.useDeferredValue(t)};it.useEffect=function(t,e){return ia.current.useEffect(t,e)};it.useId=function(){return ia.current.useId()};it.useImperativeHandle=function(t,e,n){return ia.current.useImperativeHandle(t,e,n)};it.useInsertionEffect=function(t,e){return ia.current.useInsertionEffect(t,e)};it.useLayoutEffect=function(t,e){return ia.current.useLayoutEffect(t,e)};it.useMemo=function(t,e){return ia.current.useMemo(t,e)};it.useReducer=function(t,e,n){return ia.current.useReducer(t,e,n)};it.useRef=function(t){return ia.current.useRef(t)};it.useState=function(t){return ia.current.useState(t)};it.useSyncExternalStore=function(t,e,n){return ia.current.useSyncExternalStore(t,e,n)};it.useTransition=function(){return ia.current.useTransition()};it.version="18.3.1"});var et=qi((gV,KM)=>{"use strict";KM.exports=YM()});var Ew=qi(kt=>{"use strict";function Ox(t,e){var n=t.length;t.push(e);e:for(;0<n;){var a=n-1>>>1,i=t[a];if(0<Jh(i,e))t[a]=e,t[n]=i,n=a;else break e}}function di(t){return t.length===0?null:t[0]}function ep(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var a=0,i=t.length,r=i>>>1;a<r;){var s=2*(a+1)-1,o=t[s],l=s+1,u=t[l];if(0>Jh(o,n))l<i&&0>Jh(u,o)?(t[a]=u,t[l]=n,a=l):(t[a]=o,t[s]=n,a=s);else if(l<i&&0>Jh(u,n))t[a]=u,t[l]=n,a=l;else break e}}return e}function Jh(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(yw=performance,kt.unstable_now=function(){return yw.now()}):(Nx=Date,_w=Nx.now(),kt.unstable_now=function(){return Nx.now()-_w});var yw,Nx,_w,Ni=[],Yr=[],p3=1,Ga=null,Xn=3,tp=!1,Ws=!1,yc=!1,ww=typeof setTimeout=="function"?setTimeout:null,Cw=typeof clearTimeout=="function"?clearTimeout:null,Sw=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function zx(t){for(var e=di(Yr);e!==null;){if(e.callback===null)ep(Yr);else if(e.startTime<=t)ep(Yr),e.sortIndex=e.expirationTime,Ox(Ni,e);else break;e=di(Yr)}}function Hx(t){if(yc=!1,zx(t),!Ws)if(di(Ni)!==null)Ws=!0,Gx(Vx);else{var e=di(Yr);e!==null&&Wx(Hx,e.startTime-t)}}function Vx(t,e){Ws=!1,yc&&(yc=!1,Cw(_c),_c=-1),tp=!0;var n=Xn;try{for(zx(e),Ga=di(Ni);Ga!==null&&(!(Ga.expirationTime>e)||t&&!Lw());){var a=Ga.callback;if(typeof a=="function"){Ga.callback=null,Xn=Ga.priorityLevel;var i=a(Ga.expirationTime<=e);e=kt.unstable_now(),typeof i=="function"?Ga.callback=i:Ga===di(Ni)&&ep(Ni),zx(e)}else ep(Ni);Ga=di(Ni)}if(Ga!==null)var r=!0;else{var s=di(Yr);s!==null&&Wx(Hx,s.startTime-e),r=!1}return r}finally{Ga=null,Xn=n,tp=!1}}var np=!1,Qh=null,_c=-1,bw=5,Iw=-1;function Lw(){return!(kt.unstable_now()-Iw<bw)}function Ux(){if(Qh!==null){var t=kt.unstable_now();Iw=t;var e=!0;try{e=Qh(!0,t)}finally{e?vc():(np=!1,Qh=null)}}else np=!1}var vc;typeof Sw=="function"?vc=function(){Sw(Ux)}:typeof MessageChannel<"u"?(Bx=new MessageChannel,Mw=Bx.port2,Bx.port1.onmessage=Ux,vc=function(){Mw.postMessage(null)}):vc=function(){ww(Ux,0)};var Bx,Mw;function Gx(t){Qh=t,np||(np=!0,vc())}function Wx(t,e){_c=ww(function(){t(kt.unstable_now())},e)}kt.unstable_IdlePriority=5;kt.unstable_ImmediatePriority=1;kt.unstable_LowPriority=4;kt.unstable_NormalPriority=3;kt.unstable_Profiling=null;kt.unstable_UserBlockingPriority=2;kt.unstable_cancelCallback=function(t){t.callback=null};kt.unstable_continueExecution=function(){Ws||tp||(Ws=!0,Gx(Vx))};kt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):bw=0<t?Math.floor(1e3/t):5};kt.unstable_getCurrentPriorityLevel=function(){return Xn};kt.unstable_getFirstCallbackNode=function(){return di(Ni)};kt.unstable_next=function(t){switch(Xn){case 1:case 2:case 3:var e=3;break;default:e=Xn}var n=Xn;Xn=e;try{return t()}finally{Xn=n}};kt.unstable_pauseExecution=function(){};kt.unstable_requestPaint=function(){};kt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Xn;Xn=t;try{return e()}finally{Xn=n}};kt.unstable_scheduleCallback=function(t,e,n){var a=kt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?a+n:a):n=a,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=n+i,t={id:p3++,callback:e,priorityLevel:t,startTime:n,expirationTime:i,sortIndex:-1},n>a?(t.sortIndex=n,Ox(Yr,t),di(Ni)===null&&t===di(Yr)&&(yc?(Cw(_c),_c=-1):yc=!0,Wx(Hx,n-a))):(t.sortIndex=i,Ox(Ni,t),Ws||tp||(Ws=!0,Gx(Vx))),t};kt.unstable_shouldYield=Lw;kt.unstable_wrapCallback=function(t){var e=Xn;return function(){var n=Xn;Xn=e;try{return t.apply(this,arguments)}finally{Xn=n}}}});var Aw=qi((O4,Tw)=>{"use strict";Tw.exports=Ew()});var FI=qi(Ra=>{"use strict";var m3=et(),Ta=Aw();function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var UC=new Set,Vc={};function ao(t,e){kl(t,e),kl(t+"Capture",e)}function kl(t,e){for(Vc[t]=e,t=0;t<e.length;t++)UC.add(e[t])}var dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h0=Object.prototype.hasOwnProperty,g3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rw={},Pw={};function x3(t){return h0.call(Pw,t)?!0:h0.call(Rw,t)?!1:g3.test(t)?Pw[t]=!0:(Rw[t]=!0,!1)}function v3(t,e,n,a){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function y3(t,e,n,a){if(e===null||typeof e>"u"||v3(t,e,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function oa(t,e,n,a,i,r,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=s}var On={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){On[t]=new oa(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];On[e]=new oa(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){On[t]=new oa(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){On[t]=new oa(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){On[t]=new oa(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){On[t]=new oa(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){On[t]=new oa(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){On[t]=new oa(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){On[t]=new oa(t,5,!1,t.toLowerCase(),null,!1,!1)});var rv=/[\-:]([a-z])/g;function sv(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rv,sv);On[e]=new oa(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rv,sv);On[e]=new oa(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rv,sv);On[e]=new oa(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){On[t]=new oa(t,1,!1,t.toLowerCase(),null,!1,!1)});On.xlinkHref=new oa("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){On[t]=new oa(t,1,!1,t.toLowerCase(),null,!0,!0)});function ov(t,e,n,a){var i=On.hasOwnProperty(e)?On[e]:null;(i!==null?i.type!==0:a||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(y3(e,n,i,a)&&(n=null),a||i===null?x3(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,a=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?t.setAttributeNS(a,e,n):t.setAttribute(e,n))))}var mr=m3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ap=Symbol.for("react.element"),xl=Symbol.for("react.portal"),vl=Symbol.for("react.fragment"),lv=Symbol.for("react.strict_mode"),p0=Symbol.for("react.profiler"),BC=Symbol.for("react.provider"),OC=Symbol.for("react.context"),uv=Symbol.for("react.forward_ref"),m0=Symbol.for("react.suspense"),g0=Symbol.for("react.suspense_list"),cv=Symbol.for("react.memo"),Zr=Symbol.for("react.lazy"),zC=Symbol.for("react.offscreen"),Dw=Symbol.iterator;function Sc(t){return t===null||typeof t!="object"?null:(t=Dw&&t[Dw]||t["@@iterator"],typeof t=="function"?t:null)}var $t=Object.assign,qx;function Tc(t){if(qx===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qx=e&&e[1]||""}return`
`+qx+t}var Xx=!1;function Yx(t,e){if(!t||Xx)return"";Xx=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var a=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){a=u}t.call(e.prototype)}else{try{throw Error()}catch(u){a=u}t()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),r=a.stack.split(`
`),s=i.length-1,o=r.length-1;1<=s&&0<=o&&i[s]!==r[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==r[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==r[o]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{Xx=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Tc(t):""}function _3(t){switch(t.tag){case 5:return Tc(t.type);case 16:return Tc("Lazy");case 13:return Tc("Suspense");case 19:return Tc("SuspenseList");case 0:case 2:case 15:return t=Yx(t.type,!1),t;case 11:return t=Yx(t.type.render,!1),t;case 1:return t=Yx(t.type,!0),t;default:return""}}function x0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vl:return"Fragment";case xl:return"Portal";case p0:return"Profiler";case lv:return"StrictMode";case m0:return"Suspense";case g0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case OC:return(t.displayName||"Context")+".Consumer";case BC:return(t._context.displayName||"Context")+".Provider";case uv:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cv:return e=t.displayName||null,e!==null?e:x0(t.type)||"Memo";case Zr:e=t._payload,t=t._init;try{return x0(t(e))}catch{}}return null}function S3(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return x0(e);case 8:return e===lv?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function us(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function HC(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function M3(t){var e=HC(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ip(t){t._valueTracker||(t._valueTracker=M3(t))}function VC(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=HC(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function Pp(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function v0(t,e){var n=e.checked;return $t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fw(t,e){var n=e.defaultValue==null?"":e.defaultValue,a=e.checked!=null?e.checked:e.defaultChecked;n=us(e.value!=null?e.value:n),t._wrapperState={initialChecked:a,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function GC(t,e){e=e.checked,e!=null&&ov(t,"checked",e,!1)}function y0(t,e){GC(t,e);var n=us(e.value),a=e.type;if(n!=null)a==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_0(t,e.type,n):e.hasOwnProperty("defaultValue")&&_0(t,e.type,us(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var a=e.type;if(!(a!=="submit"&&a!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _0(t,e,n){(e!=="number"||Pp(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ac=Array.isArray;function Tl(t,e,n,a){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&a&&(t[n].defaultSelected=!0)}else{for(n=""+us(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function S0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return $t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Ac(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:us(n)}}function WC(t,e){var n=us(e.value),a=us(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),a!=null&&(t.defaultValue=""+a)}function Uw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qC(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qC(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rp,XC=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,a,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,a,i)})}:t})(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rp=rp||document.createElement("div"),rp.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rp.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gc(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Dc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w3=["Webkit","ms","Moz","O"];Object.keys(Dc).forEach(function(t){w3.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Dc[e]=Dc[t]})});function YC(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Dc.hasOwnProperty(t)&&Dc[t]?(""+e).trim():e+"px"}function KC(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=YC(n,e[n],a);n==="float"&&(n="cssFloat"),a?t.setProperty(n,i):t[n]=i}}var C3=$t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function w0(t,e){if(e){if(C3[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function C0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var b0=null;function dv(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var I0=null,Al=null,Rl=null;function Bw(t){if(t=od(t)){if(typeof I0!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=sm(e),I0(t.stateNode,t.type,e))}}function ZC(t){Al?Rl?Rl.push(t):Rl=[t]:Al=t}function jC(){if(Al){var t=Al,e=Rl;if(Rl=Al=null,Bw(t),e)for(t=0;t<e.length;t++)Bw(e[t])}}function $C(t,e){return t(e)}function JC(){}var Kx=!1;function QC(t,e,n){if(Kx)return t(e,n);Kx=!0;try{return $C(t,e,n)}finally{Kx=!1,(Al!==null||Rl!==null)&&(JC(),jC())}}function Wc(t,e){var n=t.stateNode;if(n===null)return null;var a=sm(n);if(a===null)return null;n=a[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var L0=!1;if(dr)try{ml={},Object.defineProperty(ml,"passive",{get:function(){L0=!0}}),window.addEventListener("test",ml,ml),window.removeEventListener("test",ml,ml)}catch{L0=!1}var ml;function b3(t,e,n,a,i,r,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Fc=!1,Dp=null,Fp=!1,E0=null,I3={onError:function(t){Fc=!0,Dp=t}};function L3(t,e,n,a,i,r,s,o,l){Fc=!1,Dp=null,b3.apply(I3,arguments)}function E3(t,e,n,a,i,r,s,o,l){if(L3.apply(this,arguments),Fc){if(Fc){var u=Dp;Fc=!1,Dp=null}else throw Error(ie(198));Fp||(Fp=!0,E0=u)}}function io(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function eb(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ow(t){if(io(t)!==t)throw Error(ie(188))}function T3(t){var e=t.alternate;if(!e){if(e=io(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,a=e;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return Ow(i),t;if(r===a)return Ow(i),e;r=r.sibling}throw Error(ie(188))}if(n.return!==a.return)n=i,a=r;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,a=r;break}if(o===a){s=!0,a=i,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,a=i;break}if(o===a){s=!0,a=r,n=i;break}o=o.sibling}if(!s)throw Error(ie(189))}}if(n.alternate!==a)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function tb(t){return t=T3(t),t!==null?nb(t):null}function nb(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=nb(t);if(e!==null)return e;t=t.sibling}return null}var ab=Ta.unstable_scheduleCallback,zw=Ta.unstable_cancelCallback,A3=Ta.unstable_shouldYield,R3=Ta.unstable_requestPaint,tn=Ta.unstable_now,P3=Ta.unstable_getCurrentPriorityLevel,fv=Ta.unstable_ImmediatePriority,ib=Ta.unstable_UserBlockingPriority,kp=Ta.unstable_NormalPriority,D3=Ta.unstable_LowPriority,rb=Ta.unstable_IdlePriority,nm=null,zi=null;function F3(t){if(zi&&typeof zi.onCommitFiberRoot=="function")try{zi.onCommitFiberRoot(nm,t,void 0,(t.current.flags&128)===128)}catch{}}var gi=Math.clz32?Math.clz32:U3,k3=Math.log,N3=Math.LN2;function U3(t){return t>>>=0,t===0?32:31-(k3(t)/N3|0)|0}var sp=64,op=4194304;function Rc(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Np(t,e){var n=t.pendingLanes;if(n===0)return 0;var a=0,i=t.suspendedLanes,r=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~i;o!==0?a=Rc(o):(r&=s,r!==0&&(a=Rc(r)))}else s=n&~i,s!==0?a=Rc(s):r!==0&&(a=Rc(r));if(a===0)return 0;if(e!==0&&e!==a&&(e&i)===0&&(i=a&-a,r=e&-e,i>=r||i===16&&(r&4194240)!==0))return e;if((a&4)!==0&&(a|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=a;0<e;)n=31-gi(e),i=1<<n,a|=t[n],e&=~i;return a}function B3(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O3(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,r=t.pendingLanes;0<r;){var s=31-gi(r),o=1<<s,l=i[s];l===-1?((o&n)===0||(o&a)!==0)&&(i[s]=B3(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}}function T0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sb(){var t=sp;return sp<<=1,(sp&4194240)===0&&(sp=64),t}function Zx(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function rd(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gi(e),t[e]=n}function z3(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-gi(n),r=1<<i;e[i]=0,a[i]=-1,t[i]=-1,n&=~r}}function hv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-gi(n),i=1<<a;i&e|t[a]&e&&(t[a]|=e),n&=~i}}var Et=0;function ob(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var lb,pv,ub,cb,db,A0=!1,lp=[],ts=null,ns=null,as=null,qc=new Map,Xc=new Map,$r=[],H3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hw(t,e){switch(t){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":qc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xc.delete(e.pointerId)}}function Mc(t,e,n,a,i,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},e!==null&&(e=od(e),e!==null&&pv(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function V3(t,e,n,a,i){switch(e){case"focusin":return ts=Mc(ts,t,e,n,a,i),!0;case"dragenter":return ns=Mc(ns,t,e,n,a,i),!0;case"mouseover":return as=Mc(as,t,e,n,a,i),!0;case"pointerover":var r=i.pointerId;return qc.set(r,Mc(qc.get(r)||null,t,e,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,Xc.set(r,Mc(Xc.get(r)||null,t,e,n,a,i)),!0}return!1}function fb(t){var e=Ys(t.target);if(e!==null){var n=io(e);if(n!==null){if(e=n.tag,e===13){if(e=eb(n),e!==null){t.blockedOn=e,db(t.priority,function(){ub(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mp(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=R0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);b0=a,n.target.dispatchEvent(a),b0=null}else return e=od(n),e!==null&&pv(e),t.blockedOn=n,!1;e.shift()}return!0}function Vw(t,e,n){Mp(t)&&n.delete(e)}function G3(){A0=!1,ts!==null&&Mp(ts)&&(ts=null),ns!==null&&Mp(ns)&&(ns=null),as!==null&&Mp(as)&&(as=null),qc.forEach(Vw),Xc.forEach(Vw)}function wc(t,e){t.blockedOn===e&&(t.blockedOn=null,A0||(A0=!0,Ta.unstable_scheduleCallback(Ta.unstable_NormalPriority,G3)))}function Yc(t){function e(i){return wc(i,t)}if(0<lp.length){wc(lp[0],t);for(var n=1;n<lp.length;n++){var a=lp[n];a.blockedOn===t&&(a.blockedOn=null)}}for(ts!==null&&wc(ts,t),ns!==null&&wc(ns,t),as!==null&&wc(as,t),qc.forEach(e),Xc.forEach(e),n=0;n<$r.length;n++)a=$r[n],a.blockedOn===t&&(a.blockedOn=null);for(;0<$r.length&&(n=$r[0],n.blockedOn===null);)fb(n),n.blockedOn===null&&$r.shift()}var Pl=mr.ReactCurrentBatchConfig,Up=!0;function W3(t,e,n,a){var i=Et,r=Pl.transition;Pl.transition=null;try{Et=1,mv(t,e,n,a)}finally{Et=i,Pl.transition=r}}function q3(t,e,n,a){var i=Et,r=Pl.transition;Pl.transition=null;try{Et=4,mv(t,e,n,a)}finally{Et=i,Pl.transition=r}}function mv(t,e,n,a){if(Up){var i=R0(t,e,n,a);if(i===null)n0(t,e,a,Bp,n),Hw(t,a);else if(V3(i,t,e,n,a))a.stopPropagation();else if(Hw(t,a),e&4&&-1<H3.indexOf(t)){for(;i!==null;){var r=od(i);if(r!==null&&lb(r),r=R0(t,e,n,a),r===null&&n0(t,e,a,Bp,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else n0(t,e,a,null,n)}}var Bp=null;function R0(t,e,n,a){if(Bp=null,t=dv(a),t=Ys(t),t!==null)if(e=io(t),e===null)t=null;else if(n=e.tag,n===13){if(t=eb(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bp=t,null}function hb(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P3()){case fv:return 1;case ib:return 4;case kp:case D3:return 16;case rb:return 536870912;default:return 16}default:return 16}}var Qr=null,gv=null,wp=null;function pb(){if(wp)return wp;var t,e=gv,n=e.length,a,i="value"in Qr?Qr.value:Qr.textContent,r=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(a=1;a<=s&&e[n-a]===i[r-a];a++);return wp=i.slice(t,1<a?1-a:void 0)}function Cp(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function up(){return!0}function Gw(){return!1}function Aa(t){function e(n,a,i,r,s){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?up:Gw,this.isPropagationStopped=Gw,this}return $t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=up)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=up)},persist:function(){},isPersistent:up}),e}var Vl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xv=Aa(Vl),sd=$t({},Vl,{view:0,detail:0}),X3=Aa(sd),jx,$x,Cc,am=$t({},sd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vv,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cc&&(Cc&&t.type==="mousemove"?(jx=t.screenX-Cc.screenX,$x=t.screenY-Cc.screenY):$x=jx=0,Cc=t),jx)},movementY:function(t){return"movementY"in t?t.movementY:$x}}),Ww=Aa(am),Y3=$t({},am,{dataTransfer:0}),K3=Aa(Y3),Z3=$t({},sd,{relatedTarget:0}),Jx=Aa(Z3),j3=$t({},Vl,{animationName:0,elapsedTime:0,pseudoElement:0}),$3=Aa(j3),J3=$t({},Vl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q3=Aa(J3),eF=$t({},Vl,{data:0}),qw=Aa(eF),tF={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nF={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aF={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iF(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aF[t])?!!e[t]:!1}function vv(){return iF}var rF=$t({},sd,{key:function(t){if(t.key){var e=tF[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cp(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nF[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vv,charCode:function(t){return t.type==="keypress"?Cp(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cp(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sF=Aa(rF),oF=$t({},am,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xw=Aa(oF),lF=$t({},sd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vv}),uF=Aa(lF),cF=$t({},Vl,{propertyName:0,elapsedTime:0,pseudoElement:0}),dF=Aa(cF),fF=$t({},am,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hF=Aa(fF),pF=[9,13,27,32],yv=dr&&"CompositionEvent"in window,kc=null;dr&&"documentMode"in document&&(kc=document.documentMode);var mF=dr&&"TextEvent"in window&&!kc,mb=dr&&(!yv||kc&&8<kc&&11>=kc),Yw=" ",Kw=!1;function gb(t,e){switch(t){case"keyup":return pF.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xb(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yl=!1;function gF(t,e){switch(t){case"compositionend":return xb(e);case"keypress":return e.which!==32?null:(Kw=!0,Yw);case"textInput":return t=e.data,t===Yw&&Kw?null:t;default:return null}}function xF(t,e){if(yl)return t==="compositionend"||!yv&&gb(t,e)?(t=pb(),wp=gv=Qr=null,yl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mb&&e.locale!=="ko"?null:e.data;default:return null}}var vF={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vF[t.type]:e==="textarea"}function vb(t,e,n,a){ZC(a),e=Op(e,"onChange"),0<e.length&&(n=new xv("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var Nc=null,Kc=null;function yF(t){Tb(t,0)}function im(t){var e=Ml(t);if(VC(e))return t}function _F(t,e){if(t==="change")return e}var yb=!1;dr&&(dr?(dp="oninput"in document,dp||(Qx=document.createElement("div"),Qx.setAttribute("oninput","return;"),dp=typeof Qx.oninput=="function"),cp=dp):cp=!1,yb=cp&&(!document.documentMode||9<document.documentMode));var cp,dp,Qx;function jw(){Nc&&(Nc.detachEvent("onpropertychange",_b),Kc=Nc=null)}function _b(t){if(t.propertyName==="value"&&im(Kc)){var e=[];vb(e,Kc,t,dv(t)),QC(yF,e)}}function SF(t,e,n){t==="focusin"?(jw(),Nc=e,Kc=n,Nc.attachEvent("onpropertychange",_b)):t==="focusout"&&jw()}function MF(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return im(Kc)}function wF(t,e){if(t==="click")return im(e)}function CF(t,e){if(t==="input"||t==="change")return im(e)}function bF(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vi=typeof Object.is=="function"?Object.is:bF;function Zc(t,e){if(vi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!h0.call(e,i)||!vi(t[i],e[i]))return!1}return!0}function $w(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jw(t,e){var n=$w(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$w(n)}}function Sb(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sb(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mb(){for(var t=window,e=Pp();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pp(t.document)}return e}function _v(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IF(t){var e=Mb(),n=t.focusedElem,a=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sb(n.ownerDocument.documentElement,n)){if(a!==null&&_v(n)){if(e=a.start,t=a.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,r=Math.min(a.start,i);a=a.end===void 0?r:Math.min(a.end,i),!t.extend&&r>a&&(i=a,a=r,r=i),i=Jw(n,r);var s=Jw(n,a);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),r>a?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LF=dr&&"documentMode"in document&&11>=document.documentMode,_l=null,P0=null,Uc=null,D0=!1;function Qw(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;D0||_l==null||_l!==Pp(a)||(a=_l,"selectionStart"in a&&_v(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Uc&&Zc(Uc,a)||(Uc=a,a=Op(P0,"onSelect"),0<a.length&&(e=new xv("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=_l)))}function fp(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Sl={animationend:fp("Animation","AnimationEnd"),animationiteration:fp("Animation","AnimationIteration"),animationstart:fp("Animation","AnimationStart"),transitionend:fp("Transition","TransitionEnd")},e0={},wb={};dr&&(wb=document.createElement("div").style,"AnimationEvent"in window||(delete Sl.animationend.animation,delete Sl.animationiteration.animation,delete Sl.animationstart.animation),"TransitionEvent"in window||delete Sl.transitionend.transition);function rm(t){if(e0[t])return e0[t];if(!Sl[t])return t;var e=Sl[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wb)return e0[t]=e[n];return t}var Cb=rm("animationend"),bb=rm("animationiteration"),Ib=rm("animationstart"),Lb=rm("transitionend"),Eb=new Map,eC="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ds(t,e){Eb.set(t,e),ao(e,[t])}for(hp=0;hp<eC.length;hp++)pp=eC[hp],tC=pp.toLowerCase(),nC=pp[0].toUpperCase()+pp.slice(1),ds(tC,"on"+nC);var pp,tC,nC,hp;ds(Cb,"onAnimationEnd");ds(bb,"onAnimationIteration");ds(Ib,"onAnimationStart");ds("dblclick","onDoubleClick");ds("focusin","onFocus");ds("focusout","onBlur");ds(Lb,"onTransitionEnd");kl("onMouseEnter",["mouseout","mouseover"]);kl("onMouseLeave",["mouseout","mouseover"]);kl("onPointerEnter",["pointerout","pointerover"]);kl("onPointerLeave",["pointerout","pointerover"]);ao("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ao("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ao("onBeforeInput",["compositionend","keypress","textInput","paste"]);ao("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ao("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ao("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EF=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pc));function aC(t,e,n){var a=t.type||"unknown-event";t.currentTarget=n,E3(a,e,void 0,t),t.currentTarget=null}function Tb(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],i=a.event;a=a.listeners;e:{var r=void 0;if(e)for(var s=a.length-1;0<=s;s--){var o=a[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==r&&i.isPropagationStopped())break e;aC(i,o,u),r=l}else for(s=0;s<a.length;s++){if(o=a[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==r&&i.isPropagationStopped())break e;aC(i,o,u),r=l}}}if(Fp)throw t=E0,Fp=!1,E0=null,t}function zt(t,e){var n=e[B0];n===void 0&&(n=e[B0]=new Set);var a=t+"__bubble";n.has(a)||(Ab(e,t,2,!1),n.add(a))}function t0(t,e,n){var a=0;e&&(a|=4),Ab(n,t,a,e)}var mp="_reactListening"+Math.random().toString(36).slice(2);function jc(t){if(!t[mp]){t[mp]=!0,UC.forEach(function(n){n!=="selectionchange"&&(EF.has(n)||t0(n,!1,t),t0(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mp]||(e[mp]=!0,t0("selectionchange",!1,e))}}function Ab(t,e,n,a){switch(hb(e)){case 1:var i=W3;break;case 4:i=q3;break;default:i=mv}n=i.bind(null,e,n,t),i=void 0,!L0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function n0(t,e,n,a,i){var r=a;if((e&1)===0&&(e&2)===0&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var o=a.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=a.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;o!==null;){if(s=Ys(o),s===null)return;if(l=s.tag,l===5||l===6){a=r=s;continue e}o=o.parentNode}}a=a.return}QC(function(){var u=r,d=dv(n),f=[];e:{var c=Eb.get(t);if(c!==void 0){var p=xv,g=t;switch(t){case"keypress":if(Cp(n)===0)break e;case"keydown":case"keyup":p=sF;break;case"focusin":g="focus",p=Jx;break;case"focusout":g="blur",p=Jx;break;case"beforeblur":case"afterblur":p=Jx;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ww;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=K3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=uF;break;case Cb:case bb:case Ib:p=$3;break;case Lb:p=dF;break;case"scroll":p=X3;break;case"wheel":p=hF;break;case"copy":case"cut":case"paste":p=Q3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xw}var _=(e&4)!==0,m=!_&&t==="scroll",h=_?c!==null?c+"Capture":null:c;_=[];for(var x=u,S;x!==null;){S=x;var y=S.stateNode;if(S.tag===5&&y!==null&&(S=y,h!==null&&(y=Wc(x,h),y!=null&&_.push($c(x,y,S)))),m)break;x=x.return}0<_.length&&(c=new p(c,g,null,n,d),f.push({event:c,listeners:_}))}}if((e&7)===0){e:{if(c=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",c&&n!==b0&&(g=n.relatedTarget||n.fromElement)&&(Ys(g)||g[fr]))break e;if((p||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Ys(g):null,g!==null&&(m=io(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=Ww,y="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=Xw,y="onPointerLeave",h="onPointerEnter",x="pointer"),m=p==null?c:Ml(p),S=g==null?c:Ml(g),c=new _(y,x+"leave",p,n,d),c.target=m,c.relatedTarget=S,y=null,Ys(d)===u&&(_=new _(h,x+"enter",g,n,d),_.target=S,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,h=g,x=0,S=_;S;S=gl(S))x++;for(S=0,y=h;y;y=gl(y))S++;for(;0<x-S;)_=gl(_),x--;for(;0<S-x;)h=gl(h),S--;for(;x--;){if(_===h||h!==null&&_===h.alternate)break t;_=gl(_),h=gl(h)}_=null}else _=null;p!==null&&iC(f,c,p,_,!1),g!==null&&m!==null&&iC(f,m,g,_,!0)}}e:{if(c=u?Ml(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var w=_F;else if(Zw(c))if(yb)w=CF;else{w=MF;var C=SF}else(p=c.nodeName)&&p.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(w=wF);if(w&&(w=w(t,u))){vb(f,w,n,d);break e}C&&C(t,c,u),t==="focusout"&&(C=c._wrapperState)&&C.controlled&&c.type==="number"&&_0(c,"number",c.value)}switch(C=u?Ml(u):window,t){case"focusin":(Zw(C)||C.contentEditable==="true")&&(_l=C,P0=u,Uc=null);break;case"focusout":Uc=P0=_l=null;break;case"mousedown":D0=!0;break;case"contextmenu":case"mouseup":case"dragend":D0=!1,Qw(f,n,d);break;case"selectionchange":if(LF)break;case"keydown":case"keyup":Qw(f,n,d)}var L;if(yv)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else yl?gb(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(mb&&n.locale!=="ko"&&(yl||v!=="onCompositionStart"?v==="onCompositionEnd"&&yl&&(L=pb()):(Qr=d,gv="value"in Qr?Qr.value:Qr.textContent,yl=!0)),C=Op(u,v),0<C.length&&(v=new qw(v,t,null,n,d),f.push({event:v,listeners:C}),L?v.data=L:(L=xb(n),L!==null&&(v.data=L)))),(L=mF?gF(t,n):xF(t,n))&&(u=Op(u,"onBeforeInput"),0<u.length&&(d=new qw("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=L))}Tb(f,e)})}function $c(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Op(t,e){for(var n=e+"Capture",a=[];t!==null;){var i=t,r=i.stateNode;i.tag===5&&r!==null&&(i=r,r=Wc(t,n),r!=null&&a.unshift($c(t,r,i)),r=Wc(t,e),r!=null&&a.push($c(t,r,i))),t=t.return}return a}function gl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function iC(t,e,n,a,i){for(var r=e._reactName,s=[];n!==null&&n!==a;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===a)break;o.tag===5&&u!==null&&(o=u,i?(l=Wc(n,r),l!=null&&s.unshift($c(n,l,o))):i||(l=Wc(n,r),l!=null&&s.push($c(n,l,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var TF=/\r\n?/g,AF=/\u0000|\uFFFD/g;function rC(t){return(typeof t=="string"?t:""+t).replace(TF,`
`).replace(AF,"")}function gp(t,e,n){if(e=rC(e),rC(t)!==e&&n)throw Error(ie(425))}function zp(){}var F0=null,k0=null;function N0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var U0=typeof setTimeout=="function"?setTimeout:void 0,RF=typeof clearTimeout=="function"?clearTimeout:void 0,sC=typeof Promise=="function"?Promise:void 0,PF=typeof queueMicrotask=="function"?queueMicrotask:typeof sC<"u"?function(t){return sC.resolve(null).then(t).catch(DF)}:U0;function DF(t){setTimeout(function(){throw t})}function a0(t,e){var n=e,a=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){t.removeChild(i),Yc(e);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);Yc(e)}function is(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function oC(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gl=Math.random().toString(36).slice(2),Oi="__reactFiber$"+Gl,Jc="__reactProps$"+Gl,fr="__reactContainer$"+Gl,B0="__reactEvents$"+Gl,FF="__reactListeners$"+Gl,kF="__reactHandles$"+Gl;function Ys(t){var e=t[Oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fr]||n[Oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=oC(t);t!==null;){if(n=t[Oi])return n;t=oC(t)}return e}t=n,n=t.parentNode}return null}function od(t){return t=t[Oi]||t[fr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ml(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function sm(t){return t[Jc]||null}var O0=[],wl=-1;function fs(t){return{current:t}}function Ht(t){0>wl||(t.current=O0[wl],O0[wl]=null,wl--)}function Nt(t,e){wl++,O0[wl]=t.current,t.current=e}var cs={},jn=fs(cs),ma=fs(!1),Js=cs;function Nl(t,e){var n=t.type.contextTypes;if(!n)return cs;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===e)return a.__reactInternalMemoizedMaskedChildContext;var i={},r;for(r in n)i[r]=e[r];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ga(t){return t=t.childContextTypes,t!=null}function Hp(){Ht(ma),Ht(jn)}function lC(t,e,n){if(jn.current!==cs)throw Error(ie(168));Nt(jn,e),Nt(ma,n)}function Rb(t,e,n){var a=t.stateNode;if(e=e.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in e))throw Error(ie(108,S3(t)||"Unknown",i));return $t({},n,a)}function Vp(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cs,Js=jn.current,Nt(jn,t),Nt(ma,ma.current),!0}function uC(t,e,n){var a=t.stateNode;if(!a)throw Error(ie(169));n?(t=Rb(t,e,Js),a.__reactInternalMemoizedMergedChildContext=t,Ht(ma),Ht(jn),Nt(jn,t)):Ht(ma),Nt(ma,n)}var or=null,om=!1,i0=!1;function Pb(t){or===null?or=[t]:or.push(t)}function NF(t){om=!0,Pb(t)}function hs(){if(!i0&&or!==null){i0=!0;var t=0,e=Et;try{var n=or;for(Et=1;t<n.length;t++){var a=n[t];do a=a(!0);while(a!==null)}or=null,om=!1}catch(i){throw or!==null&&(or=or.slice(t+1)),ab(fv,hs),i}finally{Et=e,i0=!1}}return null}var Cl=[],bl=0,Gp=null,Wp=0,Wa=[],qa=0,Qs=null,lr=1,ur="";function qs(t,e){Cl[bl++]=Wp,Cl[bl++]=Gp,Gp=t,Wp=e}function Db(t,e,n){Wa[qa++]=lr,Wa[qa++]=ur,Wa[qa++]=Qs,Qs=t;var a=lr;t=ur;var i=32-gi(a)-1;a&=~(1<<i),n+=1;var r=32-gi(e)+i;if(30<r){var s=i-i%5;r=(a&(1<<s)-1).toString(32),a>>=s,i-=s,lr=1<<32-gi(e)+i|n<<i|a,ur=r+t}else lr=1<<r|n<<i|a,ur=t}function Sv(t){t.return!==null&&(qs(t,1),Db(t,1,0))}function Mv(t){for(;t===Gp;)Gp=Cl[--bl],Cl[bl]=null,Wp=Cl[--bl],Cl[bl]=null;for(;t===Qs;)Qs=Wa[--qa],Wa[qa]=null,ur=Wa[--qa],Wa[qa]=null,lr=Wa[--qa],Wa[qa]=null}var Ea=null,La=null,qt=!1,mi=null;function Fb(t,e){var n=Xa(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cC(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ea=t,La=is(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ea=t,La=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qs!==null?{id:lr,overflow:ur}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xa(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ea=t,La=null,!0):!1;default:return!1}}function z0(t){return(t.mode&1)!==0&&(t.flags&128)===0}function H0(t){if(qt){var e=La;if(e){var n=e;if(!cC(t,e)){if(z0(t))throw Error(ie(418));e=is(n.nextSibling);var a=Ea;e&&cC(t,e)?Fb(a,n):(t.flags=t.flags&-4097|2,qt=!1,Ea=t)}}else{if(z0(t))throw Error(ie(418));t.flags=t.flags&-4097|2,qt=!1,Ea=t}}}function dC(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ea=t}function xp(t){if(t!==Ea)return!1;if(!qt)return dC(t),qt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!N0(t.type,t.memoizedProps)),e&&(e=La)){if(z0(t))throw kb(),Error(ie(418));for(;e;)Fb(t,e),e=is(e.nextSibling)}if(dC(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){La=is(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}La=null}}else La=Ea?is(t.stateNode.nextSibling):null;return!0}function kb(){for(var t=La;t;)t=is(t.nextSibling)}function Ul(){La=Ea=null,qt=!1}function wv(t){mi===null?mi=[t]:mi.push(t)}var UF=mr.ReactCurrentBatchConfig;function bc(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var a=n.stateNode}if(!a)throw Error(ie(147,t));var i=a,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(s){var o=i.refs;s===null?delete o[r]:o[r]=s},e._stringRef=r,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function vp(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fC(t){var e=t._init;return e(t._payload)}function Nb(t){function e(h,x){if(t){var S=h.deletions;S===null?(h.deletions=[x],h.flags|=16):S.push(x)}}function n(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function a(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function i(h,x){return h=ls(h,x),h.index=0,h.sibling=null,h}function r(h,x,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<x?(h.flags|=2,x):S):(h.flags|=2,x)):(h.flags|=1048576,x)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,x,S,y){return x===null||x.tag!==6?(x=d0(S,h.mode,y),x.return=h,x):(x=i(x,S),x.return=h,x)}function l(h,x,S,y){var w=S.type;return w===vl?d(h,x,S.props.children,y,S.key):x!==null&&(x.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Zr&&fC(w)===x.type)?(y=i(x,S.props),y.ref=bc(h,x,S),y.return=h,y):(y=Rp(S.type,S.key,S.props,null,h.mode,y),y.ref=bc(h,x,S),y.return=h,y)}function u(h,x,S,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=f0(S,h.mode,y),x.return=h,x):(x=i(x,S.children||[]),x.return=h,x)}function d(h,x,S,y,w){return x===null||x.tag!==7?(x=$s(S,h.mode,y,w),x.return=h,x):(x=i(x,S),x.return=h,x)}function f(h,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=d0(""+x,h.mode,S),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ap:return S=Rp(x.type,x.key,x.props,null,h.mode,S),S.ref=bc(h,null,x),S.return=h,S;case xl:return x=f0(x,h.mode,S),x.return=h,x;case Zr:var y=x._init;return f(h,y(x._payload),S)}if(Ac(x)||Sc(x))return x=$s(x,h.mode,S,null),x.return=h,x;vp(h,x)}return null}function c(h,x,S,y){var w=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return w!==null?null:o(h,x,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ap:return S.key===w?l(h,x,S,y):null;case xl:return S.key===w?u(h,x,S,y):null;case Zr:return w=S._init,c(h,x,w(S._payload),y)}if(Ac(S)||Sc(S))return w!==null?null:d(h,x,S,y,null);vp(h,S)}return null}function p(h,x,S,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(S)||null,o(x,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ap:return h=h.get(y.key===null?S:y.key)||null,l(x,h,y,w);case xl:return h=h.get(y.key===null?S:y.key)||null,u(x,h,y,w);case Zr:var C=y._init;return p(h,x,S,C(y._payload),w)}if(Ac(y)||Sc(y))return h=h.get(S)||null,d(x,h,y,w,null);vp(x,y)}return null}function g(h,x,S,y){for(var w=null,C=null,L=x,v=x=0,I=null;L!==null&&v<S.length;v++){L.index>v?(I=L,L=null):I=L.sibling;var A=c(h,L,S[v],y);if(A===null){L===null&&(L=I);break}t&&L&&A.alternate===null&&e(h,L),x=r(A,x,v),C===null?w=A:C.sibling=A,C=A,L=I}if(v===S.length)return n(h,L),qt&&qs(h,v),w;if(L===null){for(;v<S.length;v++)L=f(h,S[v],y),L!==null&&(x=r(L,x,v),C===null?w=L:C.sibling=L,C=L);return qt&&qs(h,v),w}for(L=a(h,L);v<S.length;v++)I=p(L,h,v,S[v],y),I!==null&&(t&&I.alternate!==null&&L.delete(I.key===null?v:I.key),x=r(I,x,v),C===null?w=I:C.sibling=I,C=I);return t&&L.forEach(function(P){return e(h,P)}),qt&&qs(h,v),w}function _(h,x,S,y){var w=Sc(S);if(typeof w!="function")throw Error(ie(150));if(S=w.call(S),S==null)throw Error(ie(151));for(var C=w=null,L=x,v=x=0,I=null,A=S.next();L!==null&&!A.done;v++,A=S.next()){L.index>v?(I=L,L=null):I=L.sibling;var P=c(h,L,A.value,y);if(P===null){L===null&&(L=I);break}t&&L&&P.alternate===null&&e(h,L),x=r(P,x,v),C===null?w=P:C.sibling=P,C=P,L=I}if(A.done)return n(h,L),qt&&qs(h,v),w;if(L===null){for(;!A.done;v++,A=S.next())A=f(h,A.value,y),A!==null&&(x=r(A,x,v),C===null?w=A:C.sibling=A,C=A);return qt&&qs(h,v),w}for(L=a(h,L);!A.done;v++,A=S.next())A=p(L,h,v,A.value,y),A!==null&&(t&&A.alternate!==null&&L.delete(A.key===null?v:A.key),x=r(A,x,v),C===null?w=A:C.sibling=A,C=A);return t&&L.forEach(function(k){return e(h,k)}),qt&&qs(h,v),w}function m(h,x,S,y){if(typeof S=="object"&&S!==null&&S.type===vl&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ap:e:{for(var w=S.key,C=x;C!==null;){if(C.key===w){if(w=S.type,w===vl){if(C.tag===7){n(h,C.sibling),x=i(C,S.props.children),x.return=h,h=x;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Zr&&fC(w)===C.type){n(h,C.sibling),x=i(C,S.props),x.ref=bc(h,C,S),x.return=h,h=x;break e}n(h,C);break}else e(h,C);C=C.sibling}S.type===vl?(x=$s(S.props.children,h.mode,y,S.key),x.return=h,h=x):(y=Rp(S.type,S.key,S.props,null,h.mode,y),y.ref=bc(h,x,S),y.return=h,h=y)}return s(h);case xl:e:{for(C=S.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(h,x.sibling),x=i(x,S.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else e(h,x);x=x.sibling}x=f0(S,h.mode,y),x.return=h,h=x}return s(h);case Zr:return C=S._init,m(h,x,C(S._payload),y)}if(Ac(S))return g(h,x,S,y);if(Sc(S))return _(h,x,S,y);vp(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(h,x.sibling),x=i(x,S),x.return=h,h=x):(n(h,x),x=d0(S,h.mode,y),x.return=h,h=x),s(h)):n(h,x)}return m}var Bl=Nb(!0),Ub=Nb(!1),qp=fs(null),Xp=null,Il=null,Cv=null;function bv(){Cv=Il=Xp=null}function Iv(t){var e=qp.current;Ht(qp),t._currentValue=e}function V0(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Dl(t,e){Xp=t,Cv=Il=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(pa=!0),t.firstContext=null)}function Ka(t){var e=t._currentValue;if(Cv!==t)if(t={context:t,memoizedValue:e,next:null},Il===null){if(Xp===null)throw Error(ie(308));Il=t,Xp.dependencies={lanes:0,firstContext:t}}else Il=Il.next=t;return e}var Ks=null;function Lv(t){Ks===null?Ks=[t]:Ks.push(t)}function Bb(t,e,n,a){var i=e.interleaved;return i===null?(n.next=n,Lv(e)):(n.next=i.next,i.next=n),e.interleaved=n,hr(t,a)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jr=!1;function Ev(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ob(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rs(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(ct&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,hr(t,n)}return i=a.interleaved,i===null?(e.next=e,Lv(a)):(e.next=i.next,i.next=e),a.interleaved=e,hr(t,n)}function bp(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,hv(t,n)}}function hC(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?i=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?i=r=e:r=r.next=e}else i=r=e;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,effects:a.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yp(t,e,n,a){var i=t.updateQueue;jr=!1;var r=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?r=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(r!==null){var f=i.baseState;s=0,d=u=l=null,o=r;do{var c=o.lane,p=o.eventTime;if((a&c)===c){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,_=o;switch(c=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,c);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,c=typeof g=="function"?g.call(p,f,c):g,c==null)break e;f=$t({},f,c);break e;case 2:jr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,c=i.effects,c===null?i.effects=[o]:c.push(o))}else p={eventTime:p,lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,s|=c;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;c=o,o=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else r===null&&(i.shared.lanes=0);to|=s,t.lanes=s,t.memoizedState=f}}function pC(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var a=t[e],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(ie(191,i));i.call(a)}}}var ld={},Hi=fs(ld),Qc=fs(ld),ed=fs(ld);function Zs(t){if(t===ld)throw Error(ie(174));return t}function Tv(t,e){switch(Nt(ed,e),Nt(Qc,t),Nt(Hi,ld),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:M0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=M0(e,t)}Ht(Hi),Nt(Hi,e)}function Ol(){Ht(Hi),Ht(Qc),Ht(ed)}function zb(t){Zs(ed.current);var e=Zs(Hi.current),n=M0(e,t.type);e!==n&&(Nt(Qc,t),Nt(Hi,n))}function Av(t){Qc.current===t&&(Ht(Hi),Ht(Qc))}var Zt=fs(0);function Kp(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var r0=[];function Rv(){for(var t=0;t<r0.length;t++)r0[t]._workInProgressVersionPrimary=null;r0.length=0}var Ip=mr.ReactCurrentDispatcher,s0=mr.ReactCurrentBatchConfig,eo=0,jt=null,vn=null,Ln=null,Zp=!1,Bc=!1,td=0,BF=0;function Yn(){throw Error(ie(321))}function Pv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vi(t[n],e[n]))return!1;return!0}function Dv(t,e,n,a,i,r){if(eo=r,jt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ip.current=t===null||t.memoizedState===null?VF:GF,t=n(a,i),Bc){r=0;do{if(Bc=!1,td=0,25<=r)throw Error(ie(301));r+=1,Ln=vn=null,e.updateQueue=null,Ip.current=WF,t=n(a,i)}while(Bc)}if(Ip.current=jp,e=vn!==null&&vn.next!==null,eo=0,Ln=vn=jt=null,Zp=!1,e)throw Error(ie(300));return t}function Fv(){var t=td!==0;return td=0,t}function Bi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?jt.memoizedState=Ln=t:Ln=Ln.next=t,Ln}function Za(){if(vn===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=vn.next;var e=Ln===null?jt.memoizedState:Ln.next;if(e!==null)Ln=e,vn=t;else{if(t===null)throw Error(ie(310));vn=t,t={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},Ln===null?jt.memoizedState=Ln=t:Ln=Ln.next=t}return Ln}function nd(t,e){return typeof e=="function"?e(t):e}function o0(t){var e=Za(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var a=vn,i=a.baseQueue,r=n.pending;if(r!==null){if(i!==null){var s=i.next;i.next=r.next,r.next=s}a.baseQueue=i=r,n.pending=null}if(i!==null){r=i.next,a=a.baseState;var o=s=null,l=null,u=r;do{var d=u.lane;if((eo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:t(a,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,s=a):l=l.next=f,jt.lanes|=d,to|=d}u=u.next}while(u!==null&&u!==r);l===null?s=a:l.next=o,vi(a,e.memoizedState)||(pa=!0),e.memoizedState=a,e.baseState=s,e.baseQueue=l,n.lastRenderedState=a}if(t=n.interleaved,t!==null){i=t;do r=i.lane,jt.lanes|=r,to|=r,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function l0(t){var e=Za(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var a=n.dispatch,i=n.pending,r=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do r=t(r,s.action),s=s.next;while(s!==i);vi(r,e.memoizedState)||(pa=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,a]}function Hb(){}function Vb(t,e){var n=jt,a=Za(),i=e(),r=!vi(a.memoizedState,i);if(r&&(a.memoizedState=i,pa=!0),a=a.queue,kv(qb.bind(null,n,a,t),[t]),a.getSnapshot!==e||r||Ln!==null&&Ln.memoizedState.tag&1){if(n.flags|=2048,ad(9,Wb.bind(null,n,a,i,e),void 0,null),En===null)throw Error(ie(349));(eo&30)!==0||Gb(n,e,i)}return i}function Gb(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=jt.updateQueue,e===null?(e={lastEffect:null,stores:null},jt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wb(t,e,n,a){e.value=n,e.getSnapshot=a,Xb(e)&&Yb(t)}function qb(t,e,n){return n(function(){Xb(e)&&Yb(t)})}function Xb(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vi(t,n)}catch{return!0}}function Yb(t){var e=hr(t,1);e!==null&&xi(e,t,1,-1)}function mC(t){var e=Bi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nd,lastRenderedState:t},e.queue=t,t=t.dispatch=HF.bind(null,jt,t),[e.memoizedState,t]}function ad(t,e,n,a){return t={tag:t,create:e,destroy:n,deps:a,next:null},e=jt.updateQueue,e===null?(e={lastEffect:null,stores:null},jt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t)),t}function Kb(){return Za().memoizedState}function Lp(t,e,n,a){var i=Bi();jt.flags|=t,i.memoizedState=ad(1|e,n,void 0,a===void 0?null:a)}function lm(t,e,n,a){var i=Za();a=a===void 0?null:a;var r=void 0;if(vn!==null){var s=vn.memoizedState;if(r=s.destroy,a!==null&&Pv(a,s.deps)){i.memoizedState=ad(e,n,r,a);return}}jt.flags|=t,i.memoizedState=ad(1|e,n,r,a)}function gC(t,e){return Lp(8390656,8,t,e)}function kv(t,e){return lm(2048,8,t,e)}function Zb(t,e){return lm(4,2,t,e)}function jb(t,e){return lm(4,4,t,e)}function $b(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jb(t,e,n){return n=n!=null?n.concat([t]):null,lm(4,4,$b.bind(null,e,t),n)}function Nv(){}function Qb(t,e){var n=Za();e=e===void 0?null:e;var a=n.memoizedState;return a!==null&&e!==null&&Pv(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function eI(t,e){var n=Za();e=e===void 0?null:e;var a=n.memoizedState;return a!==null&&e!==null&&Pv(e,a[1])?a[0]:(t=t(),n.memoizedState=[t,e],t)}function tI(t,e,n){return(eo&21)===0?(t.baseState&&(t.baseState=!1,pa=!0),t.memoizedState=n):(vi(n,e)||(n=sb(),jt.lanes|=n,to|=n,t.baseState=!0),e)}function OF(t,e){var n=Et;Et=n!==0&&4>n?n:4,t(!0);var a=s0.transition;s0.transition={};try{t(!1),e()}finally{Et=n,s0.transition=a}}function nI(){return Za().memoizedState}function zF(t,e,n){var a=os(t);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},aI(t))iI(e,n);else if(n=Bb(t,e,n,a),n!==null){var i=sa();xi(n,t,a,i),rI(n,e,a)}}function HF(t,e,n){var a=os(t),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(aI(t))iI(e,i);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(i.hasEagerState=!0,i.eagerState=o,vi(o,s)){var l=e.interleaved;l===null?(i.next=i,Lv(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}n=Bb(t,e,i,a),n!==null&&(i=sa(),xi(n,t,a,i),rI(n,e,a))}}function aI(t){var e=t.alternate;return t===jt||e!==null&&e===jt}function iI(t,e){Bc=Zp=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rI(t,e,n){if((n&4194240)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,hv(t,n)}}var jp={readContext:Ka,useCallback:Yn,useContext:Yn,useEffect:Yn,useImperativeHandle:Yn,useInsertionEffect:Yn,useLayoutEffect:Yn,useMemo:Yn,useReducer:Yn,useRef:Yn,useState:Yn,useDebugValue:Yn,useDeferredValue:Yn,useTransition:Yn,useMutableSource:Yn,useSyncExternalStore:Yn,useId:Yn,unstable_isNewReconciler:!1},VF={readContext:Ka,useCallback:function(t,e){return Bi().memoizedState=[t,e===void 0?null:e],t},useContext:Ka,useEffect:gC,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lp(4194308,4,$b.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lp(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lp(4,2,t,e)},useMemo:function(t,e){var n=Bi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var a=Bi();return e=n!==void 0?n(e):e,a.memoizedState=a.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},a.queue=t,t=t.dispatch=zF.bind(null,jt,t),[a.memoizedState,t]},useRef:function(t){var e=Bi();return t={current:t},e.memoizedState=t},useState:mC,useDebugValue:Nv,useDeferredValue:function(t){return Bi().memoizedState=t},useTransition:function(){var t=mC(!1),e=t[0];return t=OF.bind(null,t[1]),Bi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var a=jt,i=Bi();if(qt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),En===null)throw Error(ie(349));(eo&30)!==0||Gb(a,e,n)}i.memoizedState=n;var r={value:n,getSnapshot:e};return i.queue=r,gC(qb.bind(null,a,r,t),[t]),a.flags|=2048,ad(9,Wb.bind(null,a,r,n,e),void 0,null),n},useId:function(){var t=Bi(),e=En.identifierPrefix;if(qt){var n=ur,a=lr;n=(a&~(1<<32-gi(a)-1)).toString(32)+n,e=":"+e+"R"+n,n=td++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BF++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GF={readContext:Ka,useCallback:Qb,useContext:Ka,useEffect:kv,useImperativeHandle:Jb,useInsertionEffect:Zb,useLayoutEffect:jb,useMemo:eI,useReducer:o0,useRef:Kb,useState:function(){return o0(nd)},useDebugValue:Nv,useDeferredValue:function(t){var e=Za();return tI(e,vn.memoizedState,t)},useTransition:function(){var t=o0(nd)[0],e=Za().memoizedState;return[t,e]},useMutableSource:Hb,useSyncExternalStore:Vb,useId:nI,unstable_isNewReconciler:!1},WF={readContext:Ka,useCallback:Qb,useContext:Ka,useEffect:kv,useImperativeHandle:Jb,useInsertionEffect:Zb,useLayoutEffect:jb,useMemo:eI,useReducer:l0,useRef:Kb,useState:function(){return l0(nd)},useDebugValue:Nv,useDeferredValue:function(t){var e=Za();return vn===null?e.memoizedState=t:tI(e,vn.memoizedState,t)},useTransition:function(){var t=l0(nd)[0],e=Za().memoizedState;return[t,e]},useMutableSource:Hb,useSyncExternalStore:Vb,useId:nI,unstable_isNewReconciler:!1};function hi(t,e){if(t&&t.defaultProps){e=$t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function G0(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:$t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var um={isMounted:function(t){return(t=t._reactInternals)?io(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var a=sa(),i=os(t),r=cr(a,i);r.payload=e,n!=null&&(r.callback=n),e=rs(t,r,i),e!==null&&(xi(e,t,i,a),bp(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=sa(),i=os(t),r=cr(a,i);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=rs(t,r,i),e!==null&&(xi(e,t,i,a),bp(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sa(),a=os(t),i=cr(n,a);i.tag=2,e!=null&&(i.callback=e),e=rs(t,i,a),e!==null&&(xi(e,t,a,n),bp(e,t,a))}};function xC(t,e,n,a,i,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,r,s):e.prototype&&e.prototype.isPureReactComponent?!Zc(n,a)||!Zc(i,r):!0}function sI(t,e,n){var a=!1,i=cs,r=e.contextType;return typeof r=="object"&&r!==null?r=Ka(r):(i=ga(e)?Js:jn.current,a=e.contextTypes,r=(a=a!=null)?Nl(t,i):cs),e=new e(n,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=um,t.stateNode=e,e._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=r),e}function vC(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&um.enqueueReplaceState(e,e.state,null)}function W0(t,e,n,a){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ev(t);var r=e.contextType;typeof r=="object"&&r!==null?i.context=Ka(r):(r=ga(e)?Js:jn.current,i.context=Nl(t,r)),i.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(G0(t,e,r,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&um.enqueueReplaceState(i,i.state,null),Yp(t,n,i,a),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zl(t,e){try{var n="",a=e;do n+=_3(a),a=a.return;while(a);var i=n}catch(r){i=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:i,digest:null}}function u0(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function q0(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qF=typeof WeakMap=="function"?WeakMap:Map;function oI(t,e,n){n=cr(-1,n),n.tag=3,n.payload={element:null};var a=e.value;return n.callback=function(){Jp||(Jp=!0,tv=a),q0(t,e)},n}function lI(t,e,n){n=cr(-1,n),n.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var i=e.value;n.payload=function(){return a(i)},n.callback=function(){q0(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){q0(t,e),typeof a!="function"&&(ss===null?ss=new Set([this]):ss.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function yC(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new qF;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(n)||(i.add(n),t=rk.bind(null,t,e,n),e.then(t,t))}function _C(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function SC(t,e,n,a,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=cr(-1,1),e.tag=2,rs(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var XF=mr.ReactCurrentOwner,pa=!1;function ra(t,e,n,a){e.child=t===null?Ub(e,null,n,a):Bl(e,t.child,n,a)}function MC(t,e,n,a,i){n=n.render;var r=e.ref;return Dl(e,i),a=Dv(t,e,n,a,r,i),n=Fv(),t!==null&&!pa?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pr(t,e,i)):(qt&&n&&Sv(e),e.flags|=1,ra(t,e,a,i),e.child)}function wC(t,e,n,a,i){if(t===null){var r=n.type;return typeof r=="function"&&!Wv(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=r,uI(t,e,r,a,i)):(t=Rp(n.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,(t.lanes&i)===0){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:Zc,n(s,a)&&t.ref===e.ref)return pr(t,e,i)}return e.flags|=1,t=ls(r,a),t.ref=e.ref,t.return=e,e.child=t}function uI(t,e,n,a,i){if(t!==null){var r=t.memoizedProps;if(Zc(r,a)&&t.ref===e.ref)if(pa=!1,e.pendingProps=a=r,(t.lanes&i)!==0)(t.flags&131072)!==0&&(pa=!0);else return e.lanes=t.lanes,pr(t,e,i)}return X0(t,e,n,a,i)}function cI(t,e,n){var a=e.pendingProps,i=a.children,r=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(El,Ia),Ia|=n;else{if((n&1073741824)===0)return t=r!==null?r.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Nt(El,Ia),Ia|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=r!==null?r.baseLanes:n,Nt(El,Ia),Ia|=a}else r!==null?(a=r.baseLanes|n,e.memoizedState=null):a=n,Nt(El,Ia),Ia|=a;return ra(t,e,i,n),e.child}function dI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function X0(t,e,n,a,i){var r=ga(n)?Js:jn.current;return r=Nl(e,r),Dl(e,i),n=Dv(t,e,n,a,r,i),a=Fv(),t!==null&&!pa?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pr(t,e,i)):(qt&&a&&Sv(e),e.flags|=1,ra(t,e,n,i),e.child)}function CC(t,e,n,a,i){if(ga(n)){var r=!0;Vp(e)}else r=!1;if(Dl(e,i),e.stateNode===null)Ep(t,e),sI(e,n,a),W0(e,n,a,i),a=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ka(u):(u=ga(n)?Js:jn.current,u=Nl(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==a||l!==u)&&vC(e,s,a,u),jr=!1;var c=e.memoizedState;s.state=c,Yp(e,a,s,i),l=e.memoizedState,o!==a||c!==l||ma.current||jr?(typeof d=="function"&&(G0(e,n,d,a),l=e.memoizedState),(o=jr||xC(e,n,o,a,c,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=l),s.props=a,s.state=l,s.context=u,a=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{s=e.stateNode,Ob(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:hi(e.type,o),s.props=u,f=e.pendingProps,c=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ka(l):(l=ga(n)?Js:jn.current,l=Nl(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||c!==l)&&vC(e,s,a,l),jr=!1,c=e.memoizedState,s.state=c,Yp(e,a,s,i);var g=e.memoizedState;o!==f||c!==g||ma.current||jr?(typeof p=="function"&&(G0(e,n,p,a),g=e.memoizedState),(u=jr||xC(e,n,u,a,c,g,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=g),s.props=a,s.state=g,s.context=l,a=u):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),a=!1)}return Y0(t,e,n,a,r,i)}function Y0(t,e,n,a,i,r){dI(t,e);var s=(e.flags&128)!==0;if(!a&&!s)return i&&uC(e,n,!1),pr(t,e,r);a=e.stateNode,XF.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:a.render();return e.flags|=1,t!==null&&s?(e.child=Bl(e,t.child,null,r),e.child=Bl(e,null,o,r)):ra(t,e,o,r),e.memoizedState=a.state,i&&uC(e,n,!0),e.child}function fI(t){var e=t.stateNode;e.pendingContext?lC(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lC(t,e.context,!1),Tv(t,e.containerInfo)}function bC(t,e,n,a,i){return Ul(),wv(i),e.flags|=256,ra(t,e,n,a),e.child}var K0={dehydrated:null,treeContext:null,retryLane:0};function Z0(t){return{baseLanes:t,cachePool:null,transitions:null}}function hI(t,e,n){var a=e.pendingProps,i=Zt.current,r=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Nt(Zt,i&1),t===null)return H0(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(s=a.children,t=a.fallback,r?(a=e.mode,r=e.child,s={mode:"hidden",children:s},(a&1)===0&&r!==null?(r.childLanes=0,r.pendingProps=s):r=fm(s,a,0,null),t=$s(t,a,n,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=Z0(n),e.memoizedState=K0,t):Uv(e,s));if(i=t.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return YF(t,e,s,a,o,i,n);if(r){r=a.fallback,s=e.mode,i=t.child,o=i.sibling;var l={mode:"hidden",children:a.children};return(s&1)===0&&e.child!==i?(a=e.child,a.childLanes=0,a.pendingProps=l,e.deletions=null):(a=ls(i,l),a.subtreeFlags=i.subtreeFlags&14680064),o!==null?r=ls(o,r):(r=$s(r,s,n,null),r.flags|=2),r.return=e,a.return=e,a.sibling=r,e.child=a,a=r,r=e.child,s=t.child.memoizedState,s=s===null?Z0(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},r.memoizedState=s,r.childLanes=t.childLanes&~n,e.memoizedState=K0,a}return r=t.child,t=r.sibling,a=ls(r,{mode:"visible",children:a.children}),(e.mode&1)===0&&(a.lanes=n),a.return=e,a.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=a,e.memoizedState=null,a}function Uv(t,e){return e=fm({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yp(t,e,n,a){return a!==null&&wv(a),Bl(e,t.child,null,n),t=Uv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YF(t,e,n,a,i,r,s){if(n)return e.flags&256?(e.flags&=-257,a=u0(Error(ie(422))),yp(t,e,s,a)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=a.fallback,i=e.mode,a=fm({mode:"visible",children:a.children},i,0,null),r=$s(r,i,s,null),r.flags|=2,a.return=e,r.return=e,a.sibling=r,e.child=a,(e.mode&1)!==0&&Bl(e,t.child,null,s),e.child.memoizedState=Z0(s),e.memoizedState=K0,r);if((e.mode&1)===0)return yp(t,e,s,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var o=a.dgst;return a=o,r=Error(ie(419)),a=u0(r,a,void 0),yp(t,e,s,a)}if(o=(s&t.childLanes)!==0,pa||o){if(a=En,a!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(a.suspendedLanes|s))!==0?0:i,i!==0&&i!==r.retryLane&&(r.retryLane=i,hr(t,i),xi(a,t,i,-1))}return Gv(),a=u0(Error(ie(421))),yp(t,e,s,a)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sk.bind(null,t),i._reactRetry=e,null):(t=r.treeContext,La=is(i.nextSibling),Ea=e,qt=!0,mi=null,t!==null&&(Wa[qa++]=lr,Wa[qa++]=ur,Wa[qa++]=Qs,lr=t.id,ur=t.overflow,Qs=e),e=Uv(e,a.children),e.flags|=4096,e)}function IC(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),V0(t.return,e,n)}function c0(t,e,n,a,i){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=i)}function pI(t,e,n){var a=e.pendingProps,i=a.revealOrder,r=a.tail;if(ra(t,e,a.children,n),a=Zt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&IC(t,n,e);else if(t.tag===19)IC(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Nt(Zt,a),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Kp(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),c0(e,!1,i,n,r);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Kp(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}c0(e,!0,n,null,r);break;case"together":c0(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ep(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),to|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=ls(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ls(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KF(t,e,n){switch(e.tag){case 3:fI(e),Ul();break;case 5:zb(e);break;case 1:ga(e.type)&&Vp(e);break;case 4:Tv(e,e.stateNode.containerInfo);break;case 10:var a=e.type._context,i=e.memoizedProps.value;Nt(qp,a._currentValue),a._currentValue=i;break;case 13:if(a=e.memoizedState,a!==null)return a.dehydrated!==null?(Nt(Zt,Zt.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?hI(t,e,n):(Nt(Zt,Zt.current&1),t=pr(t,e,n),t!==null?t.sibling:null);Nt(Zt,Zt.current&1);break;case 19:if(a=(n&e.childLanes)!==0,(t.flags&128)!==0){if(a)return pI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Nt(Zt,Zt.current),a)break;return null;case 22:case 23:return e.lanes=0,cI(t,e,n)}return pr(t,e,n)}var mI,j0,gI,xI;mI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};j0=function(){};gI=function(t,e,n,a){var i=t.memoizedProps;if(i!==a){t=e.stateNode,Zs(Hi.current);var r=null;switch(n){case"input":i=v0(t,i),a=v0(t,a),r=[];break;case"select":i=$t({},i,{value:void 0}),a=$t({},a,{value:void 0}),r=[];break;case"textarea":i=S0(t,i),a=S0(t,a),r=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=zp)}w0(n,a);var s;n=null;for(u in i)if(!a.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vc.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in a){var l=a[u];if(o=i?.[u],a.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(r||(r=[]),r.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(r=r||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vc.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&zt("scroll",t),r||o===l||(r=[])):(r=r||[]).push(u,l))}n&&(r=r||[]).push("style",n);var u=r;(e.updateQueue=u)&&(e.flags|=4)}};xI=function(t,e,n,a){n!==a&&(e.flags|=4)};function Ic(t,e){if(!qt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Kn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function ZF(t,e,n){var a=e.pendingProps;switch(Mv(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kn(e),null;case 1:return ga(e.type)&&Hp(),Kn(e),null;case 3:return a=e.stateNode,Ol(),Ht(ma),Ht(jn),Rv(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(xp(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,mi!==null&&(iv(mi),mi=null))),j0(t,e),Kn(e),null;case 5:Av(e);var i=Zs(ed.current);if(n=e.type,t!==null&&e.stateNode!=null)gI(t,e,n,a,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!a){if(e.stateNode===null)throw Error(ie(166));return Kn(e),null}if(t=Zs(Hi.current),xp(e)){a=e.stateNode,n=e.type;var r=e.memoizedProps;switch(a[Oi]=e,a[Jc]=r,t=(e.mode&1)!==0,n){case"dialog":zt("cancel",a),zt("close",a);break;case"iframe":case"object":case"embed":zt("load",a);break;case"video":case"audio":for(i=0;i<Pc.length;i++)zt(Pc[i],a);break;case"source":zt("error",a);break;case"img":case"image":case"link":zt("error",a),zt("load",a);break;case"details":zt("toggle",a);break;case"input":Fw(a,r),zt("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!r.multiple},zt("invalid",a);break;case"textarea":Nw(a,r),zt("invalid",a)}w0(n,r),i=null;for(var s in r)if(r.hasOwnProperty(s)){var o=r[s];s==="children"?typeof o=="string"?a.textContent!==o&&(r.suppressHydrationWarning!==!0&&gp(a.textContent,o,t),i=["children",o]):typeof o=="number"&&a.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&gp(a.textContent,o,t),i=["children",""+o]):Vc.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&zt("scroll",a)}switch(n){case"input":ip(a),kw(a,r,!0);break;case"textarea":ip(a),Uw(a);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(a.onclick=zp)}a=i,e.updateQueue=a,a!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qC(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=s.createElement(n,{is:a.is}):(t=s.createElement(n),n==="select"&&(s=t,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):t=s.createElementNS(t,n),t[Oi]=e,t[Jc]=a,mI(t,e,!1,!1),e.stateNode=t;e:{switch(s=C0(n,a),n){case"dialog":zt("cancel",t),zt("close",t),i=a;break;case"iframe":case"object":case"embed":zt("load",t),i=a;break;case"video":case"audio":for(i=0;i<Pc.length;i++)zt(Pc[i],t);i=a;break;case"source":zt("error",t),i=a;break;case"img":case"image":case"link":zt("error",t),zt("load",t),i=a;break;case"details":zt("toggle",t),i=a;break;case"input":Fw(t,a),i=v0(t,a),zt("invalid",t);break;case"option":i=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},i=$t({},a,{value:void 0}),zt("invalid",t);break;case"textarea":Nw(t,a),i=S0(t,a),zt("invalid",t);break;default:i=a}w0(n,i),o=i;for(r in o)if(o.hasOwnProperty(r)){var l=o[r];r==="style"?KC(t,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&XC(t,l)):r==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Gc(t,l):typeof l=="number"&&Gc(t,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Vc.hasOwnProperty(r)?l!=null&&r==="onScroll"&&zt("scroll",t):l!=null&&ov(t,r,l,s))}switch(n){case"input":ip(t),kw(t,a,!1);break;case"textarea":ip(t),Uw(t);break;case"option":a.value!=null&&t.setAttribute("value",""+us(a.value));break;case"select":t.multiple=!!a.multiple,r=a.value,r!=null?Tl(t,!!a.multiple,r,!1):a.defaultValue!=null&&Tl(t,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=zp)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kn(e),null;case 6:if(t&&e.stateNode!=null)xI(t,e,t.memoizedProps,a);else{if(typeof a!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Zs(ed.current),Zs(Hi.current),xp(e)){if(a=e.stateNode,n=e.memoizedProps,a[Oi]=e,(r=a.nodeValue!==n)&&(t=Ea,t!==null))switch(t.tag){case 3:gp(a.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gp(a.nodeValue,n,(t.mode&1)!==0)}r&&(e.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Oi]=e,e.stateNode=a}return Kn(e),null;case 13:if(Ht(Zt),a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(qt&&La!==null&&(e.mode&1)!==0&&(e.flags&128)===0)kb(),Ul(),e.flags|=98560,r=!1;else if(r=xp(e),a!==null&&a.dehydrated!==null){if(t===null){if(!r)throw Error(ie(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(ie(317));r[Oi]=e}else Ul(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Kn(e),r=!1}else mi!==null&&(iv(mi),mi=null),r=!0;if(!r)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Zt.current&1)!==0?yn===0&&(yn=3):Gv())),e.updateQueue!==null&&(e.flags|=4),Kn(e),null);case 4:return Ol(),j0(t,e),t===null&&jc(e.stateNode.containerInfo),Kn(e),null;case 10:return Iv(e.type._context),Kn(e),null;case 17:return ga(e.type)&&Hp(),Kn(e),null;case 19:if(Ht(Zt),r=e.memoizedState,r===null)return Kn(e),null;if(a=(e.flags&128)!==0,s=r.rendering,s===null)if(a)Ic(r,!1);else{if(yn!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=Kp(t),s!==null){for(e.flags|=128,Ic(r,!1),a=s.updateQueue,a!==null&&(e.updateQueue=a,e.flags|=4),e.subtreeFlags=0,a=n,n=e.child;n!==null;)r=n,t=a,r.flags&=14680066,s=r.alternate,s===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=s.childLanes,r.lanes=s.lanes,r.child=s.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=s.memoizedProps,r.memoizedState=s.memoizedState,r.updateQueue=s.updateQueue,r.type=s.type,t=s.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Nt(Zt,Zt.current&1|2),e.child}t=t.sibling}r.tail!==null&&tn()>Hl&&(e.flags|=128,a=!0,Ic(r,!1),e.lanes=4194304)}else{if(!a)if(t=Kp(s),t!==null){if(e.flags|=128,a=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ic(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!qt)return Kn(e),null}else 2*tn()-r.renderingStartTime>Hl&&n!==1073741824&&(e.flags|=128,a=!0,Ic(r,!1),e.lanes=4194304);r.isBackwards?(s.sibling=e.child,e.child=s):(n=r.last,n!==null?n.sibling=s:e.child=s,r.last=s)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=tn(),e.sibling=null,n=Zt.current,Nt(Zt,a?n&1|2:n&1),e):(Kn(e),null);case 22:case 23:return Vv(),a=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(e.flags|=8192),a&&(e.mode&1)!==0?(Ia&1073741824)!==0&&(Kn(e),e.subtreeFlags&6&&(e.flags|=8192)):Kn(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function jF(t,e){switch(Mv(e),e.tag){case 1:return ga(e.type)&&Hp(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ol(),Ht(ma),Ht(jn),Rv(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Av(e),null;case 13:if(Ht(Zt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Ul()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ht(Zt),null;case 4:return Ol(),null;case 10:return Iv(e.type._context),null;case 22:case 23:return Vv(),null;case 24:return null;default:return null}}var _p=!1,Zn=!1,$F=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Ll(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Jt(t,e,a)}else n.current=null}function $0(t,e,n){try{n()}catch(a){Jt(t,e,a)}}var LC=!1;function JF(t,e){if(F0=Up,t=Mb(),_v(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,u=0,d=0,f=t,c=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(o=s+i),f!==r||a!==0&&f.nodeType!==3||(l=s+a),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)c=f,f=p;for(;;){if(f===t)break t;if(c===n&&++u===i&&(o=s),c===r&&++d===a&&(l=s),(p=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(k0={focusedElem:t,selectionRange:n},Up=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){e=Ce;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:hi(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){Jt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}return g=LC,LC=!1,g}function Oc(t,e,n){var a=e.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&t)===t){var r=i.destroy;i.destroy=void 0,r!==void 0&&$0(e,n,r)}i=i.next}while(i!==a)}}function cm(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var a=n.create;n.destroy=a()}n=n.next}while(n!==e)}}function J0(t){var e=t.ref;if(e!==null){var n=t.stateNode;t.tag,t=n,typeof e=="function"?e(t):e.current=t}}function vI(t){var e=t.alternate;e!==null&&(t.alternate=null,vI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Oi],delete e[Jc],delete e[B0],delete e[FF],delete e[kF])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yI(t){return t.tag===5||t.tag===3||t.tag===4}function EC(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Q0(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zp));else if(a!==4&&(t=t.child,t!==null))for(Q0(t,e,n),t=t.sibling;t!==null;)Q0(t,e,n),t=t.sibling}function ev(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(ev(t,e,n),t=t.sibling;t!==null;)ev(t,e,n),t=t.sibling}var Un=null,pi=!1;function Kr(t,e,n){for(n=n.child;n!==null;)_I(t,e,n),n=n.sibling}function _I(t,e,n){if(zi&&typeof zi.onCommitFiberUnmount=="function")try{zi.onCommitFiberUnmount(nm,n)}catch{}switch(n.tag){case 5:Zn||Ll(n,e);case 6:var a=Un,i=pi;Un=null,Kr(t,e,n),Un=a,pi=i,Un!==null&&(pi?(t=Un,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Un.removeChild(n.stateNode));break;case 18:Un!==null&&(pi?(t=Un,n=n.stateNode,t.nodeType===8?a0(t.parentNode,n):t.nodeType===1&&a0(t,n),Yc(t)):a0(Un,n.stateNode));break;case 4:a=Un,i=pi,Un=n.stateNode.containerInfo,pi=!0,Kr(t,e,n),Un=a,pi=i;break;case 0:case 11:case 14:case 15:if(!Zn&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var r=i,s=r.destroy;r=r.tag,s!==void 0&&((r&2)!==0||(r&4)!==0)&&$0(n,e,s),i=i.next}while(i!==a)}Kr(t,e,n);break;case 1:if(!Zn&&(Ll(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(o){Jt(n,e,o)}Kr(t,e,n);break;case 21:Kr(t,e,n);break;case 22:n.mode&1?(Zn=(a=Zn)||n.memoizedState!==null,Kr(t,e,n),Zn=a):Kr(t,e,n);break;default:Kr(t,e,n)}}function TC(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $F),e.forEach(function(a){var i=ok.bind(null,t,a);n.has(a)||(n.add(a),a.then(i,i))})}}function fi(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var r=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Un=o.stateNode,pi=!1;break e;case 3:Un=o.stateNode.containerInfo,pi=!0;break e;case 4:Un=o.stateNode.containerInfo,pi=!0;break e}o=o.return}if(Un===null)throw Error(ie(160));_I(r,s,i),Un=null,pi=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Jt(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)SI(e,t),e=e.sibling}function SI(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fi(e,t),Ui(t),a&4){try{Oc(3,t,t.return),cm(3,t)}catch(_){Jt(t,t.return,_)}try{Oc(5,t,t.return)}catch(_){Jt(t,t.return,_)}}break;case 1:fi(e,t),Ui(t),a&512&&n!==null&&Ll(n,n.return);break;case 5:if(fi(e,t),Ui(t),a&512&&n!==null&&Ll(n,n.return),t.flags&32){var i=t.stateNode;try{Gc(i,"")}catch(_){Jt(t,t.return,_)}}if(a&4&&(i=t.stateNode,i!=null)){var r=t.memoizedProps,s=n!==null?n.memoizedProps:r,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&r.type==="radio"&&r.name!=null&&GC(i,r),C0(o,s);var u=C0(o,r);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?KC(i,f):d==="dangerouslySetInnerHTML"?XC(i,f):d==="children"?Gc(i,f):ov(i,d,f,u)}switch(o){case"input":y0(i,r);break;case"textarea":WC(i,r);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!r.multiple;var p=r.value;p!=null?Tl(i,!!r.multiple,p,!1):c!==!!r.multiple&&(r.defaultValue!=null?Tl(i,!!r.multiple,r.defaultValue,!0):Tl(i,!!r.multiple,r.multiple?[]:"",!1))}i[Jc]=r}catch(_){Jt(t,t.return,_)}}break;case 6:if(fi(e,t),Ui(t),a&4){if(t.stateNode===null)throw Error(ie(162));i=t.stateNode,r=t.memoizedProps;try{i.nodeValue=r}catch(_){Jt(t,t.return,_)}}break;case 3:if(fi(e,t),Ui(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Yc(e.containerInfo)}catch(_){Jt(t,t.return,_)}break;case 4:fi(e,t),Ui(t);break;case 13:fi(e,t),Ui(t),i=t.child,i.flags&8192&&(r=i.memoizedState!==null,i.stateNode.isHidden=r,!r||i.alternate!==null&&i.alternate.memoizedState!==null||(zv=tn())),a&4&&TC(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Zn=(u=Zn)||d,fi(e,t),Zn=u):fi(e,t),Ui(t),a&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&(t.mode&1)!==0)for(Ce=t,d=t.child;d!==null;){for(f=Ce=d;Ce!==null;){switch(c=Ce,p=c.child,c.tag){case 0:case 11:case 14:case 15:Oc(4,c,c.return);break;case 1:Ll(c,c.return);var g=c.stateNode;if(typeof g.componentWillUnmount=="function"){a=c,n=c.return;try{e=a,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Jt(a,n,_)}}break;case 5:Ll(c,c.return);break;case 22:if(c.memoizedState!==null){RC(f);continue}}p!==null?(p.return=c,Ce=p):RC(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=YC("display",s))}catch(_){Jt(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){Jt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:fi(e,t),Ui(t),a&4&&TC(t);break;case 21:break;default:fi(e,t),Ui(t)}}function Ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yI(n)){var a=n;break e}n=n.return}throw Error(ie(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(Gc(i,""),a.flags&=-33);var r=EC(t);ev(t,r,i);break;case 3:case 4:var s=a.stateNode.containerInfo,o=EC(t);Q0(t,o,s);break;default:throw Error(ie(161))}}catch(l){Jt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QF(t,e,n){Ce=t,MI(t,e,n)}function MI(t,e,n){for(var a=(t.mode&1)!==0;Ce!==null;){var i=Ce,r=i.child;if(i.tag===22&&a){var s=i.memoizedState!==null||_p;if(!s){var o=i.alternate,l=o!==null&&o.memoizedState!==null||Zn;o=_p;var u=Zn;if(_p=s,(Zn=l)&&!u)for(Ce=i;Ce!==null;)s=Ce,l=s.child,s.tag===22&&s.memoizedState!==null?PC(i):l!==null?(l.return=s,Ce=l):PC(i);for(;r!==null;)Ce=r,MI(r,e,n),r=r.sibling;Ce=i,_p=o,Zn=u}AC(t,e,n)}else(i.subtreeFlags&8772)!==0&&r!==null?(r.return=i,Ce=r):AC(t,e,n)}}function AC(t){for(;Ce!==null;){var e=Ce;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Zn||cm(5,e);break;case 1:var a=e.stateNode;if(e.flags&4&&!Zn)if(n===null)a.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:hi(e.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&pC(e,r,a);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pC(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Yc(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Zn||e.flags&512&&J0(e)}catch(c){Jt(e,e.return,c)}}if(e===t){Ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function RC(t){for(;Ce!==null;){var e=Ce;if(e===t){Ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function PC(t){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cm(4,e)}catch(l){Jt(e,n,l)}break;case 1:var a=e.stateNode;if(typeof a.componentDidMount=="function"){var i=e.return;try{a.componentDidMount()}catch(l){Jt(e,i,l)}}var r=e.return;try{J0(e)}catch(l){Jt(e,r,l)}break;case 5:var s=e.return;try{J0(e)}catch(l){Jt(e,s,l)}}}catch(l){Jt(e,e.return,l)}if(e===t){Ce=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ce=o;break}Ce=e.return}}var ek=Math.ceil,$p=mr.ReactCurrentDispatcher,Bv=mr.ReactCurrentOwner,Ya=mr.ReactCurrentBatchConfig,ct=0,En=null,dn=null,Bn=0,Ia=0,El=fs(0),yn=0,id=null,to=0,dm=0,Ov=0,zc=null,ha=null,zv=0,Hl=1/0,sr=null,Jp=!1,tv=null,ss=null,Sp=!1,es=null,Qp=0,Hc=0,nv=null,Tp=-1,Ap=0;function sa(){return(ct&6)!==0?tn():Tp!==-1?Tp:Tp=tn()}function os(t){return(t.mode&1)===0?1:(ct&2)!==0&&Bn!==0?Bn&-Bn:UF.transition!==null?(Ap===0&&(Ap=sb()),Ap):(t=Et,t!==0||(t=window.event,t=t===void 0?16:hb(t.type)),t)}function xi(t,e,n,a){if(50<Hc)throw Hc=0,nv=null,Error(ie(185));rd(t,n,a),((ct&2)===0||t!==En)&&(t===En&&((ct&2)===0&&(dm|=n),yn===4&&Jr(t,Bn)),xa(t,a),n===1&&ct===0&&(e.mode&1)===0&&(Hl=tn()+500,om&&hs()))}function xa(t,e){var n=t.callbackNode;O3(t,e);var a=Np(t,t===En?Bn:0);if(a===0)n!==null&&zw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=a&-a,t.callbackPriority!==e){if(n!=null&&zw(n),e===1)t.tag===0?NF(DC.bind(null,t)):Pb(DC.bind(null,t)),PF(function(){(ct&6)===0&&hs()}),n=null;else{switch(ob(a)){case 1:n=fv;break;case 4:n=ib;break;case 16:n=kp;break;case 536870912:n=rb;break;default:n=kp}n=AI(n,wI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wI(t,e){if(Tp=-1,Ap=0,(ct&6)!==0)throw Error(ie(327));var n=t.callbackNode;if(Fl()&&t.callbackNode!==n)return null;var a=Np(t,t===En?Bn:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||e)e=em(t,a);else{e=a;var i=ct;ct|=2;var r=bI();(En!==t||Bn!==e)&&(sr=null,Hl=tn()+500,js(t,e));do try{ak();break}catch(o){CI(t,o)}while(!0);bv(),$p.current=r,ct=i,dn!==null?e=0:(En=null,Bn=0,e=yn)}if(e!==0){if(e===2&&(i=T0(t),i!==0&&(a=i,e=av(t,i))),e===1)throw n=id,js(t,0),Jr(t,a),xa(t,tn()),n;if(e===6)Jr(t,a);else{if(i=t.current.alternate,(a&30)===0&&!tk(i)&&(e=em(t,a),e===2&&(r=T0(t),r!==0&&(a=r,e=av(t,r))),e===1))throw n=id,js(t,0),Jr(t,a),xa(t,tn()),n;switch(t.finishedWork=i,t.finishedLanes=a,e){case 0:case 1:throw Error(ie(345));case 2:Xs(t,ha,sr);break;case 3:if(Jr(t,a),(a&130023424)===a&&(e=zv+500-tn(),10<e)){if(Np(t,0)!==0)break;if(i=t.suspendedLanes,(i&a)!==a){sa(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=U0(Xs.bind(null,t,ha,sr),e);break}Xs(t,ha,sr);break;case 4:if(Jr(t,a),(a&4194240)===a)break;for(e=t.eventTimes,i=-1;0<a;){var s=31-gi(a);r=1<<s,s=e[s],s>i&&(i=s),a&=~r}if(a=i,a=tn()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*ek(a/1960))-a,10<a){t.timeoutHandle=U0(Xs.bind(null,t,ha,sr),a);break}Xs(t,ha,sr);break;case 5:Xs(t,ha,sr);break;default:throw Error(ie(329))}}}return xa(t,tn()),t.callbackNode===n?wI.bind(null,t):null}function av(t,e){var n=zc;return t.current.memoizedState.isDehydrated&&(js(t,e).flags|=256),t=em(t,e),t!==2&&(e=ha,ha=n,e!==null&&iv(e)),t}function iv(t){ha===null?ha=t:ha.push.apply(ha,t)}function tk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!vi(r(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jr(t,e){for(e&=~Ov,e&=~dm,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gi(e),a=1<<n;t[n]=-1,e&=~a}}function DC(t){if((ct&6)!==0)throw Error(ie(327));Fl();var e=Np(t,0);if((e&1)===0)return xa(t,tn()),null;var n=em(t,e);if(t.tag!==0&&n===2){var a=T0(t);a!==0&&(e=a,n=av(t,a))}if(n===1)throw n=id,js(t,0),Jr(t,e),xa(t,tn()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xs(t,ha,sr),xa(t,tn()),null}function Hv(t,e){var n=ct;ct|=1;try{return t(e)}finally{ct=n,ct===0&&(Hl=tn()+500,om&&hs())}}function no(t){es!==null&&es.tag===0&&(ct&6)===0&&Fl();var e=ct;ct|=1;var n=Ya.transition,a=Et;try{if(Ya.transition=null,Et=1,t)return t()}finally{Et=a,Ya.transition=n,ct=e,(ct&6)===0&&hs()}}function Vv(){Ia=El.current,Ht(El)}function js(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RF(n)),dn!==null)for(n=dn.return;n!==null;){var a=n;switch(Mv(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Hp();break;case 3:Ol(),Ht(ma),Ht(jn),Rv();break;case 5:Av(a);break;case 4:Ol();break;case 13:Ht(Zt);break;case 19:Ht(Zt);break;case 10:Iv(a.type._context);break;case 22:case 23:Vv()}n=n.return}if(En=t,dn=t=ls(t.current,null),Bn=Ia=e,yn=0,id=null,Ov=dm=to=0,ha=zc=null,Ks!==null){for(e=0;e<Ks.length;e++)if(n=Ks[e],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,r=n.pending;if(r!==null){var s=r.next;r.next=i,a.next=s}n.pending=a}Ks=null}return t}function CI(t,e){do{var n=dn;try{if(bv(),Ip.current=jp,Zp){for(var a=jt.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Zp=!1}if(eo=0,Ln=vn=jt=null,Bc=!1,td=0,Bv.current=null,n===null||n.return===null){yn=1,id=e,dn=null;break}e:{var r=t,s=n.return,o=n,l=e;if(e=Bn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,f=d.tag;if((d.mode&1)===0&&(f===0||f===11||f===15)){var c=d.alternate;c?(d.updateQueue=c.updateQueue,d.memoizedState=c.memoizedState,d.lanes=c.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=_C(s);if(p!==null){p.flags&=-257,SC(p,s,o,r,e),p.mode&1&&yC(r,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if((e&1)===0){yC(r,u,e),Gv();break e}l=Error(ie(426))}}else if(qt&&o.mode&1){var m=_C(s);if(m!==null){(m.flags&65536)===0&&(m.flags|=256),SC(m,s,o,r,e),wv(zl(l,o));break e}}r=l=zl(l,o),yn!==4&&(yn=2),zc===null?zc=[r]:zc.push(r),r=s;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var h=oI(r,l,e);hC(r,h);break e;case 1:o=l;var x=r.type,S=r.stateNode;if((r.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ss===null||!ss.has(S)))){r.flags|=65536,e&=-e,r.lanes|=e;var y=lI(r,o,e);hC(r,y);break e}}r=r.return}while(r!==null)}LI(n)}catch(w){e=w,dn===n&&n!==null&&(dn=n=n.return);continue}break}while(!0)}function bI(){var t=$p.current;return $p.current=jp,t===null?jp:t}function Gv(){(yn===0||yn===3||yn===2)&&(yn=4),En===null||(to&268435455)===0&&(dm&268435455)===0||Jr(En,Bn)}function em(t,e){var n=ct;ct|=2;var a=bI();(En!==t||Bn!==e)&&(sr=null,js(t,e));do try{nk();break}catch(i){CI(t,i)}while(!0);if(bv(),ct=n,$p.current=a,dn!==null)throw Error(ie(261));return En=null,Bn=0,yn}function nk(){for(;dn!==null;)II(dn)}function ak(){for(;dn!==null&&!A3();)II(dn)}function II(t){var e=TI(t.alternate,t,Ia);t.memoizedProps=t.pendingProps,e===null?LI(t):dn=e,Bv.current=null}function LI(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=ZF(n,e,Ia),n!==null){dn=n;return}}else{if(n=jF(n,e),n!==null){n.flags&=32767,dn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yn=6,dn=null;return}}if(e=e.sibling,e!==null){dn=e;return}dn=e=t}while(e!==null);yn===0&&(yn=5)}function Xs(t,e,n){var a=Et,i=Ya.transition;try{Ya.transition=null,Et=1,ik(t,e,n,a)}finally{Ya.transition=i,Et=a}return null}function ik(t,e,n,a){do Fl();while(es!==null);if((ct&6)!==0)throw Error(ie(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var r=n.lanes|n.childLanes;if(z3(t,r),t===En&&(dn=En=null,Bn=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Sp||(Sp=!0,AI(kp,function(){return Fl(),null})),r=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||r){r=Ya.transition,Ya.transition=null;var s=Et;Et=1;var o=ct;ct|=4,Bv.current=null,JF(t,n),SI(n,t),IF(k0),Up=!!F0,k0=F0=null,t.current=n,QF(n,t,i),R3(),ct=o,Et=s,Ya.transition=r}else t.current=n;if(Sp&&(Sp=!1,es=t,Qp=i),r=t.pendingLanes,r===0&&(ss=null),F3(n.stateNode,a),xa(t,tn()),e!==null)for(a=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(Jp)throw Jp=!1,t=tv,tv=null,t;return(Qp&1)!==0&&t.tag!==0&&Fl(),r=t.pendingLanes,(r&1)!==0?t===nv?Hc++:(Hc=0,nv=t):Hc=0,hs(),null}function Fl(){if(es!==null){var t=ob(Qp),e=Ya.transition,n=Et;try{if(Ya.transition=null,Et=16>t?16:t,es===null)var a=!1;else{if(t=es,es=null,Qp=0,(ct&6)!==0)throw Error(ie(331));var i=ct;for(ct|=4,Ce=t.current;Ce!==null;){var r=Ce,s=r.child;if((Ce.flags&16)!==0){var o=r.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Ce=u;Ce!==null;){var d=Ce;switch(d.tag){case 0:case 11:case 15:Oc(8,d,r)}var f=d.child;if(f!==null)f.return=d,Ce=f;else for(;Ce!==null;){d=Ce;var c=d.sibling,p=d.return;if(vI(d),d===u){Ce=null;break}if(c!==null){c.return=p,Ce=c;break}Ce=p}}}var g=r.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ce=r}}if((r.subtreeFlags&2064)!==0&&s!==null)s.return=r,Ce=s;else e:for(;Ce!==null;){if(r=Ce,(r.flags&2048)!==0)switch(r.tag){case 0:case 11:case 15:Oc(9,r,r.return)}var h=r.sibling;if(h!==null){h.return=r.return,Ce=h;break e}Ce=r.return}}var x=t.current;for(Ce=x;Ce!==null;){s=Ce;var S=s.child;if((s.subtreeFlags&2064)!==0&&S!==null)S.return=s,Ce=S;else e:for(s=x;Ce!==null;){if(o=Ce,(o.flags&2048)!==0)try{switch(o.tag){case 0:case 11:case 15:cm(9,o)}}catch(w){Jt(o,o.return,w)}if(o===s){Ce=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,Ce=y;break e}Ce=o.return}}if(ct=i,hs(),zi&&typeof zi.onPostCommitFiberRoot=="function")try{zi.onPostCommitFiberRoot(nm,t)}catch{}a=!0}return a}finally{Et=n,Ya.transition=e}}return!1}function FC(t,e,n){e=zl(n,e),e=oI(t,e,1),t=rs(t,e,1),e=sa(),t!==null&&(rd(t,1,e),xa(t,e))}function Jt(t,e,n){if(t.tag===3)FC(t,t,n);else for(;e!==null;){if(e.tag===3){FC(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ss===null||!ss.has(a))){t=zl(n,t),t=lI(e,t,1),e=rs(e,t,1),t=sa(),e!==null&&(rd(e,1,t),xa(e,t));break}}e=e.return}}function rk(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),e=sa(),t.pingedLanes|=t.suspendedLanes&n,En===t&&(Bn&n)===n&&(yn===4||yn===3&&(Bn&130023424)===Bn&&500>tn()-zv?js(t,0):Ov|=n),xa(t,e)}function EI(t,e){e===0&&((t.mode&1)===0?e=1:(e=op,op<<=1,(op&130023424)===0&&(op=4194304)));var n=sa();t=hr(t,e),t!==null&&(rd(t,e,n),xa(t,n))}function sk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),EI(t,n)}function ok(t,e){var n=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(ie(314))}a!==null&&a.delete(e),EI(t,n)}var TI;TI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ma.current)pa=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return pa=!1,KF(t,e,n);pa=(t.flags&131072)!==0}else pa=!1,qt&&(e.flags&1048576)!==0&&Db(e,Wp,e.index);switch(e.lanes=0,e.tag){case 2:var a=e.type;Ep(t,e),t=e.pendingProps;var i=Nl(e,jn.current);Dl(e,n),i=Dv(null,e,a,t,i,n);var r=Fv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ga(a)?(r=!0,Vp(e)):r=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ev(e),i.updater=um,e.stateNode=i,i._reactInternals=e,W0(e,a,t,n),e=Y0(null,e,a,!0,r,n)):(e.tag=0,qt&&r&&Sv(e),ra(null,e,i,n),e=e.child),e;case 16:a=e.elementType;e:{switch(Ep(t,e),t=e.pendingProps,i=a._init,a=i(a._payload),e.type=a,i=e.tag=uk(a),t=hi(a,t),i){case 0:e=X0(null,e,a,t,n);break e;case 1:e=CC(null,e,a,t,n);break e;case 11:e=MC(null,e,a,t,n);break e;case 14:e=wC(null,e,a,hi(a.type,t),n);break e}throw Error(ie(306,a,""))}return e;case 0:return a=e.type,i=e.pendingProps,i=e.elementType===a?i:hi(a,i),X0(t,e,a,i,n);case 1:return a=e.type,i=e.pendingProps,i=e.elementType===a?i:hi(a,i),CC(t,e,a,i,n);case 3:e:{if(fI(e),t===null)throw Error(ie(387));a=e.pendingProps,r=e.memoizedState,i=r.element,Ob(t,e),Yp(e,a,null,n);var s=e.memoizedState;if(a=s.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){i=zl(Error(ie(423)),e),e=bC(t,e,a,n,i);break e}else if(a!==i){i=zl(Error(ie(424)),e),e=bC(t,e,a,n,i);break e}else for(La=is(e.stateNode.containerInfo.firstChild),Ea=e,qt=!0,mi=null,n=Ub(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ul(),a===i){e=pr(t,e,n);break e}ra(t,e,a,n)}e=e.child}return e;case 5:return zb(e),t===null&&H0(e),a=e.type,i=e.pendingProps,r=t!==null?t.memoizedProps:null,s=i.children,N0(a,i)?s=null:r!==null&&N0(a,r)&&(e.flags|=32),dI(t,e),ra(t,e,s,n),e.child;case 6:return t===null&&H0(e),null;case 13:return hI(t,e,n);case 4:return Tv(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Bl(e,null,a,n):ra(t,e,a,n),e.child;case 11:return a=e.type,i=e.pendingProps,i=e.elementType===a?i:hi(a,i),MC(t,e,a,i,n);case 7:return ra(t,e,e.pendingProps,n),e.child;case 8:return ra(t,e,e.pendingProps.children,n),e.child;case 12:return ra(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(a=e.type._context,i=e.pendingProps,r=e.memoizedProps,s=i.value,Nt(qp,a._currentValue),a._currentValue=s,r!==null)if(vi(r.value,s)){if(r.children===i.children&&!ma.current){e=pr(t,e,n);break e}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){s=r.child;for(var l=o.firstContext;l!==null;){if(l.context===a){if(r.tag===1){l=cr(-1,n&-n),l.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),V0(r.return,n,e),o.lanes|=n;break}l=l.next}}else if(r.tag===10)s=r.type===e.type?null:r.child;else if(r.tag===18){if(s=r.return,s===null)throw Error(ie(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),V0(s,n,e),s=r.sibling}else s=r.child;if(s!==null)s.return=r;else for(s=r;s!==null;){if(s===e){s=null;break}if(r=s.sibling,r!==null){r.return=s.return,s=r;break}s=s.return}r=s}ra(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,a=e.pendingProps.children,Dl(e,n),i=Ka(i),a=a(i),e.flags|=1,ra(t,e,a,n),e.child;case 14:return a=e.type,i=hi(a,e.pendingProps),i=hi(a.type,i),wC(t,e,a,i,n);case 15:return uI(t,e,e.type,e.pendingProps,n);case 17:return a=e.type,i=e.pendingProps,i=e.elementType===a?i:hi(a,i),Ep(t,e),e.tag=1,ga(a)?(t=!0,Vp(e)):t=!1,Dl(e,n),sI(e,a,i),W0(e,a,i,n),Y0(null,e,a,!0,t,n);case 19:return pI(t,e,n);case 22:return cI(t,e,n)}throw Error(ie(156,e.tag))};function AI(t,e){return ab(t,e)}function lk(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xa(t,e,n,a){return new lk(t,e,n,a)}function Wv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uk(t){if(typeof t=="function")return Wv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uv)return 11;if(t===cv)return 14}return 2}function ls(t,e){var n=t.alternate;return n===null?(n=Xa(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rp(t,e,n,a,i,r){var s=2;if(a=t,typeof t=="function")Wv(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case vl:return $s(n.children,i,r,e);case lv:s=8,i|=8;break;case p0:return t=Xa(12,n,e,i|2),t.elementType=p0,t.lanes=r,t;case m0:return t=Xa(13,n,e,i),t.elementType=m0,t.lanes=r,t;case g0:return t=Xa(19,n,e,i),t.elementType=g0,t.lanes=r,t;case zC:return fm(n,i,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case BC:s=10;break e;case OC:s=9;break e;case uv:s=11;break e;case cv:s=14;break e;case Zr:s=16,a=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Xa(s,n,e,i),e.elementType=t,e.type=a,e.lanes=r,e}function $s(t,e,n,a){return t=Xa(7,t,a,e),t.lanes=n,t}function fm(t,e,n,a){return t=Xa(22,t,a,e),t.elementType=zC,t.lanes=n,t.stateNode={isHidden:!1},t}function d0(t,e,n){return t=Xa(6,t,null,e),t.lanes=n,t}function f0(t,e,n){return e=Xa(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ck(t,e,n,a,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zx(0),this.expirationTimes=Zx(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zx(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qv(t,e,n,a,i,r,s,o,l){return t=new ck(t,e,n,o,l),e===1?(e=1,r===!0&&(e|=8)):e=0,r=Xa(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ev(r),t}function dk(t,e,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xl,key:a==null?null:""+a,children:t,containerInfo:e,implementation:n}}function RI(t){if(!t)return cs;t=t._reactInternals;e:{if(io(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ga(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(ga(n))return Rb(t,n,e)}return e}function PI(t,e,n,a,i,r,s,o,l){return t=qv(n,a,!0,t,i,r,s,o,l),t.context=RI(null),n=t.current,a=sa(),i=os(n),r=cr(a,i),r.callback=e??null,rs(n,r,i),t.current.lanes=i,rd(t,i,a),xa(t,a),t}function hm(t,e,n,a){var i=e.current,r=sa(),s=os(i);return n=RI(n),e.context===null?e.context=n:e.pendingContext=n,e=cr(r,s),e.payload={element:t},a=a===void 0?null:a,a!==null&&(e.callback=a),t=rs(i,e,s),t!==null&&(xi(t,i,s,r),bp(t,i,s)),s}function tm(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function kC(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xv(t,e){kC(t,e),(t=t.alternate)&&kC(t,e)}function fk(){return null}var DI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yv(t){this._internalRoot=t}pm.prototype.render=Yv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));hm(t,e,null,null)};pm.prototype.unmount=Yv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;no(function(){hm(null,t,null,null)}),e[fr]=null}};function pm(t){this._internalRoot=t}pm.prototype.unstable_scheduleHydration=function(t){if(t){var e=cb();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$r.length&&e!==0&&e<$r[n].priority;n++);$r.splice(n,0,t),n===0&&fb(t)}};function Kv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function NC(){}function hk(t,e,n,a,i){if(i){if(typeof a=="function"){var r=a;a=function(){var u=tm(s);r.call(u)}}var s=PI(e,a,t,0,null,!1,!1,"",NC);return t._reactRootContainer=s,t[fr]=s.current,jc(t.nodeType===8?t.parentNode:t),no(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof a=="function"){var o=a;a=function(){var u=tm(l);o.call(u)}}var l=qv(t,0,!1,null,null,!1,!1,"",NC);return t._reactRootContainer=l,t[fr]=l.current,jc(t.nodeType===8?t.parentNode:t),no(function(){hm(e,l,n,a)}),l}function gm(t,e,n,a,i){var r=n._reactRootContainer;if(r){var s=r;if(typeof i=="function"){var o=i;i=function(){var l=tm(s);o.call(l)}}hm(e,s,t,i)}else s=hk(n,e,t,i,a);return tm(s)}lb=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Rc(e.pendingLanes);n!==0&&(hv(e,n|1),xa(e,tn()),(ct&6)===0&&(Hl=tn()+500,hs()))}break;case 13:no(function(){var a=hr(t,1);if(a!==null){var i=sa();xi(a,t,1,i)}}),Xv(t,1)}};pv=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=sa();xi(e,t,134217728,n)}Xv(t,134217728)}};ub=function(t){if(t.tag===13){var e=os(t),n=hr(t,e);if(n!==null){var a=sa();xi(n,t,e,a)}Xv(t,e)}};cb=function(){return Et};db=function(t,e){var n=Et;try{return Et=t,e()}finally{Et=n}};I0=function(t,e,n){switch(e){case"input":if(y0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var i=sm(a);if(!i)throw Error(ie(90));VC(a),y0(a,i)}}}break;case"textarea":WC(t,n);break;case"select":e=n.value,e!=null&&Tl(t,!!n.multiple,e,!1)}};$C=Hv;JC=no;var pk={usingClientEntryPoint:!1,Events:[od,Ml,sm,ZC,jC,Hv]},Lc={findFiberByHostInstance:Ys,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mk={bundleType:Lc.bundleType,version:Lc.version,rendererPackageName:Lc.rendererPackageName,rendererConfig:Lc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tb(t),t===null?null:t.stateNode},findFiberByHostInstance:Lc.findFiberByHostInstance||fk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ec.isDisabled&&Ec.supportsFiber))try{nm=Ec.inject(mk),zi=Ec}catch{}var Ec;Ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pk;Ra.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kv(e))throw Error(ie(200));return dk(t,e,null,n)};Ra.createRoot=function(t,e){if(!Kv(t))throw Error(ie(299));var n=!1,a="",i=DI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=qv(t,1,!1,null,null,n,!1,a,i),t[fr]=e.current,jc(t.nodeType===8?t.parentNode:t),new Yv(e)};Ra.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=tb(e),t=t===null?null:t.stateNode,t};Ra.flushSync=function(t){return no(t)};Ra.hydrate=function(t,e,n){if(!mm(e))throw Error(ie(200));return gm(null,t,e,!0,n)};Ra.hydrateRoot=function(t,e,n){if(!Kv(t))throw Error(ie(405));var a=n!=null&&n.hydratedSources||null,i=!1,r="",s=DI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=PI(e,null,t,1,n??null,i,!1,r,s),t[fr]=e.current,jc(t),a)for(t=0;t<a.length;t++)n=a[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pm(e)};Ra.render=function(t,e,n){if(!mm(e))throw Error(ie(200));return gm(null,t,e,!1,n)};Ra.unmountComponentAtNode=function(t){if(!mm(t))throw Error(ie(40));return t._reactRootContainer?(no(function(){gm(null,null,t,!1,function(){t._reactRootContainer=null,t[fr]=null})}),!0):!1};Ra.unstable_batchedUpdates=Hv;Ra.unstable_renderSubtreeIntoContainer=function(t,e,n,a){if(!mm(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return gm(t,e,n,!1,a)};Ra.version="18.3.1-next-f1338f8080-20240426"});var xm=qi((H4,NI)=>{"use strict";function kI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kI)}catch(t){console.error(t)}}kI(),NI.exports=FI()});var BI=qi(Zv=>{"use strict";var UI=xm();Zv.createRoot=UI.createRoot,Zv.hydrateRoot=UI.hydrateRoot;var V4});var aL=qi(ym=>{"use strict";var Mk=et(),wk=Symbol.for("react.element"),Ck=Symbol.for("react.fragment"),bk=Object.prototype.hasOwnProperty,Ik=Mk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lk={key:!0,ref:!0,__self:!0,__source:!0};function nL(t,e,n){var a,i={},r=null,s=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(s=e.ref);for(a in e)bk.call(e,a)&&!Lk.hasOwnProperty(a)&&(i[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps,e)i[a]===void 0&&(i[a]=e[a]);return{$$typeof:wk,type:t,key:r,ref:s,props:i,_owner:Ik.current}}ym.Fragment=Ck;ym.jsx=nL;ym.jsxs=nL});var xt=qi((EG,iL)=>{"use strict";iL.exports=aL()});var kr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},F_=0,yg=1,k_=2;var Du=1,Pf=2,Yo=3,Li=0,Fn=1,fn=2,Ua=0,Ko=1,si=2,_g=3,Sg=4,N_=5;var Ts=100,U_=101,B_=102,O_=103,z_=104,H_=200,V_=201,G_=202,W_=203,Mg=204,wg=205,q_=206,X_=207,Y_=208,K_=209,Z_=210,j_=211,$_=212,J_=213,Q_=214,$d=0,Jd=1,Qd=2,Po=3,ef=4,tf=5,nf=6,af=7,Cg=0,eS=1,tS=2,oi=0,Fu=1,ku=2,Nu=3,As=4,Uu=5,Bu=6,Ou=7;var bg=300,Ur=301,Rs=302,Df=303,Ff=304,zu=306,Do=1e3,Ci=1001,rf=1002,en=1003,nS=1004;var Hu=1005;var on=1006,kf=1007;var Br=1008;var ca=1009,Ig=1010,Lg=1011,Zo=1012,Nf=1013,li=1014,Ba=1015,un=1016,Uf=1017,Bf=1018,jo=1020,Eg=35902,Tg=35899,Ag=1021,Rg=1022,Oa=1023,bi=1026,Or=1027,Of=1028,zf=1029,zr=1030,Hf=1031;var Vf=1033,Vu=33776,Gu=33777,Wu=33778,qu=33779,Gf=35840,Wf=35841,qf=35842,Xf=35843,Yf=36196,Kf=37492,Zf=37496,jf=37488,$f=37489,Xu=37490,Jf=37491,Qf=37808,eh=37809,th=37810,nh=37811,ah=37812,ih=37813,rh=37814,sh=37815,oh=37816,lh=37817,uh=37818,ch=37819,dh=37820,fh=37821,hh=36492,ph=36494,mh=36495,gh=36283,xh=36284,Yu=36285,vh=36286;var ou=2300,sf=2301,Zd=2302,ug=2303,cg=2400,dg=2401,fg=2402;var aS=3200,Pg=3201;var yh=0,iS=1,tr="",Sa="srgb",lu="srgb-linear",uu="linear",ft="srgb";var jd=7680;var rS=519,sS=512,oS=513,lS=514,_h=515,uS=516,cS=517,Sh=518,dS=519,fS=35044,Hr=35048;var Dg="300 es",ii=2e3,Fo=2001;function IT(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function LT(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function cu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hS(){let t=cu("canvas");return t.style.display="block",t}var a_={},ko=null;function Fg(...t){let e="THREE."+t.shift();ko?ko("log",e,...t):console.log(e,...t)}function pS(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=pS(t);let e="THREE."+t.shift();if(ko)ko("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ve(...t){t=pS(t);let e="THREE."+t.shift();if(ko)ko("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function bs(...t){let e=t.join(" ");e in a_||(a_[e]=!0,Be(...t))}function mS(t,e,n){return new Promise(function(a,i){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:a()}}setTimeout(r,n)})}var gS={[$d]:Jd,[Qd]:nf,[ef]:af,[Po]:tf,[Jd]:$d,[nf]:Qd,[af]:ef,[tf]:Po},ri=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){let a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){let a=this._listeners;if(a===void 0)return;let i=a[e];if(i!==void 0){let r=i.indexOf(n);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let a=n[e.type];if(a!==void 0){e.target=this;let i=a.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],i_=1234567,au=Math.PI/180,No=180/Math.PI;function $o(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Gn[t&255]+Gn[t>>8&255]+Gn[t>>16&255]+Gn[t>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[n&63|128]+Gn[n>>8&255]+"-"+Gn[n>>16&255]+Gn[n>>24&255]+Gn[a&255]+Gn[a>>8&255]+Gn[a>>16&255]+Gn[a>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function kg(t,e){return(t%e+e)%e}function ET(t,e,n,a,i){return a+(t-e)*(i-a)/(n-e)}function TT(t,e,n){return t!==e?(n-t)/(e-t):0}function iu(t,e,n){return(1-n)*t+n*e}function AT(t,e,n,a){return iu(t,e,1-Math.exp(-n*a))}function RT(t,e=1){return e-Math.abs(kg(t,e*2)-e)}function PT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function DT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function FT(t,e){return t+Math.floor(Math.random()*(e-t+1))}function kT(t,e){return t+Math.random()*(e-t)}function NT(t){return t*(.5-Math.random())}function UT(t){t!==void 0&&(i_=t);let e=i_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BT(t){return t*au}function OT(t){return t*No}function zT(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function HT(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function VT(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function GT(t,e,n,a,i){let r=Math.cos,s=Math.sin,o=r(n/2),l=s(n/2),u=r((e+a)/2),d=s((e+a)/2),f=r((e-a)/2),c=s((e-a)/2),p=r((a-e)/2),g=s((a-e)/2);switch(i){case"XYX":t.set(o*d,l*f,l*c,o*u);break;case"YZY":t.set(l*c,o*d,l*f,o*u);break;case"ZXZ":t.set(l*f,l*c,o*d,o*u);break;case"XZX":t.set(o*d,l*g,l*p,o*u);break;case"YXY":t.set(l*p,o*d,l*g,o*u);break;case"ZYZ":t.set(l*g,l*p,o*d,o*u);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var kn={DEG2RAD:au,RAD2DEG:No,generateUUID:$o,clamp:$e,euclideanModulo:kg,mapLinear:ET,inverseLerp:TT,lerp:iu,damp:AT,pingpong:RT,smoothstep:PT,smootherstep:DT,randInt:FT,randFloat:kT,randFloatSpread:NT,seededRandom:UT,degToRad:BT,radToDeg:OT,isPowerOfTwo:zT,ceilPowerOfTwo:HT,floorPowerOfTwo:VT,setQuaternionFromProperEuler:GT,normalize:Jn,denormalize:Ao},ae=class t{static{t.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,a=this.y,i=e.elements;return this.x=i[0]*n+i[3]*a+i[6],this.y=i[1]*n+i[4]*a+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){let a=this.length();return this.divideScalar(a||1).multiplyScalar($e(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let a=this.dot(e)/n;return Math.acos($e(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let a=Math.cos(n),i=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*a-s*i+e.x,this.y=r*i+s*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ma=class{constructor(e=0,n=0,a=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=i}static slerpFlat(e,n,a,i,r,s,o){let l=a[i+0],u=a[i+1],d=a[i+2],f=a[i+3],c=r[s+0],p=r[s+1],g=r[s+2],_=r[s+3];if(f!==_||l!==c||u!==p||d!==g){let m=l*c+u*p+d*g+f*_;m<0&&(c=-c,p=-p,g=-g,_=-_,m=-m);let h=1-o;if(m<.9995){let x=Math.acos(m),S=Math.sin(x);h=Math.sin(h*x)/S,o=Math.sin(o*x)/S,l=l*h+c*o,u=u*h+p*o,d=d*h+g*o,f=f*h+_*o}else{l=l*h+c*o,u=u*h+p*o,d=d*h+g*o,f=f*h+_*o;let x=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=x,u*=x,d*=x,f*=x}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,a,i,r,s){let o=a[i],l=a[i+1],u=a[i+2],d=a[i+3],f=r[s],c=r[s+1],p=r[s+2],g=r[s+3];return e[n]=o*g+d*f+l*p-u*c,e[n+1]=l*g+d*c+u*f-o*p,e[n+2]=u*g+d*p+o*c-l*f,e[n+3]=d*g-o*f-l*c-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,i){return this._x=e,this._y=n,this._z=a,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let a=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(a/2),d=o(i/2),f=o(r/2),c=l(a/2),p=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=c*d*f+u*p*g,this._y=u*p*f-c*d*g,this._z=u*d*g+c*p*f,this._w=u*d*f-c*p*g;break;case"YXZ":this._x=c*d*f+u*p*g,this._y=u*p*f-c*d*g,this._z=u*d*g-c*p*f,this._w=u*d*f+c*p*g;break;case"ZXY":this._x=c*d*f-u*p*g,this._y=u*p*f+c*d*g,this._z=u*d*g+c*p*f,this._w=u*d*f-c*p*g;break;case"ZYX":this._x=c*d*f-u*p*g,this._y=u*p*f+c*d*g,this._z=u*d*g-c*p*f,this._w=u*d*f+c*p*g;break;case"YZX":this._x=c*d*f+u*p*g,this._y=u*p*f+c*d*g,this._z=u*d*g-c*p*f,this._w=u*d*f-c*p*g;break;case"XZY":this._x=c*d*f-u*p*g,this._y=u*p*f-c*d*g,this._z=u*d*g+c*p*f,this._w=u*d*f+c*p*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let a=n/2,i=Math.sin(a);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,a=n[0],i=n[4],r=n[8],s=n[1],o=n[5],l=n[9],u=n[2],d=n[6],f=n[10],c=a+o+f;if(c>0){let p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-u)*p,this._z=(s-i)*p}else if(a>o&&a>f){let p=2*Math.sqrt(1+a-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+u)/p}else if(o>f){let p=2*Math.sqrt(1+o-a-f);this._w=(r-u)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+f-a-o);this._w=(s-i)/p,this._x=(r+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){let a=this.angleTo(e);if(a===0)return this;let i=Math.min(1,n/a);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let a=e._x,i=e._y,r=e._z,s=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=a*d+s*o+i*u-r*l,this._y=i*d+s*l+r*o-a*u,this._z=r*d+s*u+a*l-i*o,this._w=s*d-a*o-i*l-r*u,this._onChangeCallback(),this}slerp(e,n){let a=e._x,i=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(a=-a,i=-i,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){let u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,n=Math.sin(n*u)/d,this._x=this._x*l+a*n,this._y=this._y*l+i*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+a*n,this._y=this._y*l+i*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),i=Math.sqrt(1-a),r=Math.sqrt(a);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class t{static{t.prototype.isVector3=!0}constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(r_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(r_.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,a=this.y,i=this.z,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6]*i,this.y=r[1]*n+r[4]*a+r[7]*i,this.z=r[2]*n+r[5]*a+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,a=this.y,i=this.z,r=e.elements,s=1/(r[3]*n+r[7]*a+r[11]*i+r[15]);return this.x=(r[0]*n+r[4]*a+r[8]*i+r[12])*s,this.y=(r[1]*n+r[5]*a+r[9]*i+r[13])*s,this.z=(r[2]*n+r[6]*a+r[10]*i+r[14])*s,this}applyQuaternion(e){let n=this.x,a=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,u=2*(s*i-o*a),d=2*(o*n-r*i),f=2*(r*a-s*n);return this.x=n+l*u+s*f-o*d,this.y=a+l*d+o*u-r*f,this.z=i+l*f+r*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,a=this.y,i=this.z,r=e.elements;return this.x=r[0]*n+r[4]*a+r[8]*i,this.y=r[1]*n+r[5]*a+r[9]*i,this.z=r[2]*n+r[6]*a+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){let a=this.length();return this.divideScalar(a||1).multiplyScalar($e(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let a=e.x,i=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=i*l-r*o,this.y=r*s-a*l,this.z=a*o-i*s,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Om.copy(this).projectOnVector(e),this.sub(Om)}reflect(e){return this.sub(Om.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let a=this.dot(e)/n;return Math.acos($e(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,a=this.y-e.y,i=this.z-e.z;return n*n+a*a+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){let i=Math.sin(n)*e;return this.x=i*Math.sin(a),this.y=Math.cos(n)*e,this.z=i*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Om=new T,r_=new Ma,Ge=class t{static{t.prototype.isMatrix3=!0}constructor(e,n,a,i,r,s,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,i,r,s,o,l,u)}set(e,n,a,i,r,s,o,l,u){let d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=a,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let a=e.elements,i=n.elements,r=this.elements,s=a[0],o=a[3],l=a[6],u=a[1],d=a[4],f=a[7],c=a[2],p=a[5],g=a[8],_=i[0],m=i[3],h=i[6],x=i[1],S=i[4],y=i[7],w=i[2],C=i[5],L=i[8];return r[0]=s*_+o*x+l*w,r[3]=s*m+o*S+l*C,r[6]=s*h+o*y+l*L,r[1]=u*_+d*x+f*w,r[4]=u*m+d*S+f*C,r[7]=u*h+d*y+f*L,r[2]=c*_+p*x+g*w,r[5]=c*m+p*S+g*C,r[8]=c*h+p*y+g*L,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],a=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*s*d-n*o*u-a*r*d+a*o*l+i*r*u-i*s*l}invert(){let e=this.elements,n=e[0],a=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=d*s-o*u,c=o*l-d*r,p=u*r-s*l,g=n*f+a*c+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(i*u-d*a)*_,e[2]=(o*a-i*s)*_,e[3]=c*_,e[4]=(d*n-i*l)*_,e[5]=(i*r-o*n)*_,e[6]=p*_,e[7]=(a*l-u*n)*_,e[8]=(s*n-a*r)*_,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,i,r,s,o){let l=Math.cos(r),u=Math.sin(r);return this.set(a*l,a*u,-a*(l*s+u*o)+s+e,-i*u,i*l,-i*(-u*s+l*o)+o+n,0,0,1),this}scale(e,n){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zm.makeScale(e,n)),this}rotate(e){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zm.makeRotation(-e)),this}translate(e,n){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zm.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,a=e.elements;for(let i=0;i<9;i++)if(n[i]!==a[i])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){let a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zm=new Ge,s_=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o_=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WT(){let t={enabled:!0,workingColorSpace:lu,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ft&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ft&&(i.r=Ro(i.r),i.g=Ro(i.g),i.b=Ro(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===tr?uu:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return t.define({[lu]:{primaries:e,whitePoint:a,transfer:uu,toXYZ:s_,fromXYZ:o_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Sa},outputColorSpaceConfig:{drawingBufferColorSpace:Sa}},[Sa]:{primaries:e,whitePoint:a,transfer:ft,toXYZ:s_,fromXYZ:o_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Sa}}}),t}var nt=WT();function $i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ro(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var go,of=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{go===void 0&&(go=cu("canvas")),go.width=e.width,go.height=e.height;let i=go.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),a=go}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=cu("canvas");n.width=e.width,n.height=e.height;let a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);let i=a.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=$i(r[s]/255)*255;return a.putImageData(i,0,0),n}else if(e.data){let n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor($i(n[a]/255)*255):n[a]=$i(n[a]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qT=0,Uo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let a={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Hm(i[s].image)):r.push(Hm(i[s]))}else r=Hm(i);a.url=r}return n||(e.images[this.uuid]=a),a}};function Hm(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?of.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var XT=0,Vm=new T,ta=class t extends ri{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,a=Ci,i=Ci,r=on,s=Br,o=Oa,l=ca,u=t.DEFAULT_ANISOTROPY,d=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=$o(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vm).x}get height(){return this.source.getSize(Vm).y}get depth(){return this.source.getSize(Vm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let a=e[n];if(a===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let i=this[n];if(i===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}i&&a&&i.isVector2&&a.isVector2||i&&a&&i.isVector3&&a.isVector3||i&&a&&i.isMatrix3&&a.isMatrix3?i.copy(a):this[n]=a}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ta.DEFAULT_IMAGE=null;ta.DEFAULT_MAPPING=bg;ta.DEFAULT_ANISOTROPY=1;var Gt=class t{static{t.prototype.isVector4=!0}constructor(e=0,n=0,a=0,i=1){this.x=e,this.y=n,this.z=a,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,i){return this.x=e,this.y=n,this.z=a,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,a=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*a+s[8]*i+s[12]*r,this.y=s[1]*n+s[5]*a+s[9]*i+s[13]*r,this.z=s[2]*n+s[6]*a+s[10]*i+s[14]*r,this.w=s[3]*n+s[7]*a+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,i,r,l=e.elements,u=l[0],d=l[4],f=l[8],c=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(d-c)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+c)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(u+1)/2,y=(p+1)/2,w=(h+1)/2,C=(d+c)/4,L=(f+_)/4,v=(g+m)/4;return S>y&&S>w?S<.01?(a=0,i=.707106781,r=.707106781):(a=Math.sqrt(S),i=C/a,r=L/a):y>w?y<.01?(a=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),a=C/i,r=v/i):w<.01?(a=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),a=L/r,i=v/r),this.set(a,i,r,n),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(c-d)*(c-d));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(c-d)/x,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){let a=this.length();return this.divideScalar(a||1).multiplyScalar($e(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lf=class extends ri{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n),this.textures=[];let i={width:e,height:n,depth:a.depth},r=new ta(i),s=a.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=a,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let i=Object.assign({},e.textures[n].image);this.textures[n].source=new Uo(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends lf{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}},du=class extends ta{constructor(e=null,n=1,a=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var uf=class extends ta{constructor(e=null,n=1,a=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var He=class t{static{t.prototype.isMatrix4=!0}constructor(e,n,a,i,r,s,o,l,u,d,f,c,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,i,r,s,o,l,u,d,f,c,p,g,_,m)}set(e,n,a,i,r,s,o,l,u,d,f,c,p,g,_,m){let h=this.elements;return h[0]=e,h[4]=n,h[8]=a,h[12]=i,h[1]=r,h[5]=s,h[9]=o,h[13]=l,h[2]=u,h[6]=d,h[10]=f,h[14]=c,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){let n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,a=e.elements,i=1/xo.setFromMatrixColumn(e,0).length(),r=1/xo.setFromMatrixColumn(e,1).length(),s=1/xo.setFromMatrixColumn(e,2).length();return n[0]=a[0]*i,n[1]=a[1]*i,n[2]=a[2]*i,n[3]=0,n[4]=a[4]*r,n[5]=a[5]*r,n[6]=a[6]*r,n[7]=0,n[8]=a[8]*s,n[9]=a[9]*s,n[10]=a[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,a=e.x,i=e.y,r=e.z,s=Math.cos(a),o=Math.sin(a),l=Math.cos(i),u=Math.sin(i),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let c=s*d,p=s*f,g=o*d,_=o*f;n[0]=l*d,n[4]=-l*f,n[8]=u,n[1]=p+g*u,n[5]=c-_*u,n[9]=-o*l,n[2]=_-c*u,n[6]=g+p*u,n[10]=s*l}else if(e.order==="YXZ"){let c=l*d,p=l*f,g=u*d,_=u*f;n[0]=c+_*o,n[4]=g*o-p,n[8]=s*u,n[1]=s*f,n[5]=s*d,n[9]=-o,n[2]=p*o-g,n[6]=_+c*o,n[10]=s*l}else if(e.order==="ZXY"){let c=l*d,p=l*f,g=u*d,_=u*f;n[0]=c-_*o,n[4]=-s*f,n[8]=g+p*o,n[1]=p+g*o,n[5]=s*d,n[9]=_-c*o,n[2]=-s*u,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){let c=s*d,p=s*f,g=o*d,_=o*f;n[0]=l*d,n[4]=g*u-p,n[8]=c*u+_,n[1]=l*f,n[5]=_*u+c,n[9]=p*u-g,n[2]=-u,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){let c=s*l,p=s*u,g=o*l,_=o*u;n[0]=l*d,n[4]=_-c*f,n[8]=g*f+p,n[1]=f,n[5]=s*d,n[9]=-o*d,n[2]=-u*d,n[6]=p*f+g,n[10]=c-_*f}else if(e.order==="XZY"){let c=s*l,p=s*u,g=o*l,_=o*u;n[0]=l*d,n[4]=-f,n[8]=u*d,n[1]=c*f+_,n[5]=s*d,n[9]=p*f-g,n[2]=g*f-p,n[6]=o*d,n[10]=_*f+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YT,e,KT)}lookAt(e,n,a){let i=this.elements;return ya.subVectors(e,n),ya.lengthSq()===0&&(ya.z=1),ya.normalize(),Sr.crossVectors(a,ya),Sr.lengthSq()===0&&(Math.abs(a.z)===1?ya.x+=1e-4:ya.z+=1e-4,ya.normalize(),Sr.crossVectors(a,ya)),Sr.normalize(),Ld.crossVectors(ya,Sr),i[0]=Sr.x,i[4]=Ld.x,i[8]=ya.x,i[1]=Sr.y,i[5]=Ld.y,i[9]=ya.y,i[2]=Sr.z,i[6]=Ld.z,i[10]=ya.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let a=e.elements,i=n.elements,r=this.elements,s=a[0],o=a[4],l=a[8],u=a[12],d=a[1],f=a[5],c=a[9],p=a[13],g=a[2],_=a[6],m=a[10],h=a[14],x=a[3],S=a[7],y=a[11],w=a[15],C=i[0],L=i[4],v=i[8],I=i[12],A=i[1],P=i[5],k=i[9],z=i[13],R=i[2],U=i[6],V=i[10],H=i[14],j=i[3],X=i[7],O=i[11],te=i[15];return r[0]=s*C+o*A+l*R+u*j,r[4]=s*L+o*P+l*U+u*X,r[8]=s*v+o*k+l*V+u*O,r[12]=s*I+o*z+l*H+u*te,r[1]=d*C+f*A+c*R+p*j,r[5]=d*L+f*P+c*U+p*X,r[9]=d*v+f*k+c*V+p*O,r[13]=d*I+f*z+c*H+p*te,r[2]=g*C+_*A+m*R+h*j,r[6]=g*L+_*P+m*U+h*X,r[10]=g*v+_*k+m*V+h*O,r[14]=g*I+_*z+m*H+h*te,r[3]=x*C+S*A+y*R+w*j,r[7]=x*L+S*P+y*U+w*X,r[11]=x*v+S*k+y*V+w*O,r[15]=x*I+S*z+y*H+w*te,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],a=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],u=e[13],d=e[2],f=e[6],c=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15],x=l*p-u*c,S=o*p-u*f,y=o*c-l*f,w=s*p-u*d,C=s*c-l*d,L=s*f-o*d;return n*(_*x-m*S+h*y)-a*(g*x-m*w+h*C)+i*(g*S-_*w+h*L)-r*(g*y-_*C+m*L)}determinantAffine(){let e=this.elements,n=e[0],a=e[4],i=e[8],r=e[1],s=e[5],o=e[9],l=e[2],u=e[6],d=e[10];return n*(s*d-o*u)-a*(r*d-o*l)+i*(r*u-s*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=a),this}invert(){let e=this.elements,n=e[0],a=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=e[9],c=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],x=n*o-a*s,S=n*l-i*s,y=n*u-r*s,w=a*l-i*o,C=a*u-r*o,L=i*u-r*l,v=d*_-f*g,I=d*m-c*g,A=d*h-p*g,P=f*m-c*_,k=f*h-p*_,z=c*h-p*m,R=x*z-S*k+y*P+w*A-C*I+L*v;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/R;return e[0]=(o*z-l*k+u*P)*U,e[1]=(i*k-a*z-r*P)*U,e[2]=(_*L-m*C+h*w)*U,e[3]=(c*C-f*L-p*w)*U,e[4]=(l*A-s*z-u*I)*U,e[5]=(n*z-i*A+r*I)*U,e[6]=(m*y-g*L-h*S)*U,e[7]=(d*L-c*y+p*S)*U,e[8]=(s*k-o*A+u*v)*U,e[9]=(a*A-n*k-r*v)*U,e[10]=(g*C-_*y+h*x)*U,e[11]=(f*y-d*C-p*x)*U,e[12]=(o*I-s*P-l*v)*U,e[13]=(n*P-a*I+i*v)*U,e[14]=(_*S-g*w-m*x)*U,e[15]=(d*w-f*S+c*x)*U,this}scale(e){let n=this.elements,a=e.x,i=e.y,r=e.z;return n[0]*=a,n[4]*=i,n[8]*=r,n[1]*=a,n[5]*=i,n[9]*=r,n[2]*=a,n[6]*=i,n[10]*=r,n[3]*=a,n[7]*=i,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,i))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let a=Math.cos(n),i=Math.sin(n),r=1-a,s=e.x,o=e.y,l=e.z,u=r*s,d=r*o;return this.set(u*s+a,u*o-i*l,u*l+i*o,0,u*o+i*l,d*o+a,d*l-i*s,0,u*l-i*o,d*l+i*s,r*l*l+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,i,r,s){return this.set(1,a,r,0,e,1,s,0,n,i,1,0,0,0,0,1),this}compose(e,n,a){let i=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,u=r+r,d=s+s,f=o+o,c=r*u,p=r*d,g=r*f,_=s*d,m=s*f,h=o*f,x=l*u,S=l*d,y=l*f,w=a.x,C=a.y,L=a.z;return i[0]=(1-(_+h))*w,i[1]=(p+y)*w,i[2]=(g-S)*w,i[3]=0,i[4]=(p-y)*C,i[5]=(1-(c+h))*C,i[6]=(m+x)*C,i[7]=0,i[8]=(g+S)*L,i[9]=(m-x)*L,i[10]=(1-(c+_))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,a){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return a.set(1,1,1),n.identity(),this;let s=xo.set(i[0],i[1],i[2]).length(),o=xo.set(i[4],i[5],i[6]).length(),l=xo.set(i[8],i[9],i[10]).length();r<0&&(s=-s),ti.copy(this);let u=1/s,d=1/o,f=1/l;return ti.elements[0]*=u,ti.elements[1]*=u,ti.elements[2]*=u,ti.elements[4]*=d,ti.elements[5]*=d,ti.elements[6]*=d,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,n.setFromRotationMatrix(ti),a.x=s,a.y=o,a.z=l,this}makePerspective(e,n,a,i,r,s,o=ii,l=!1){let u=this.elements,d=2*r/(n-e),f=2*r/(a-i),c=(n+e)/(n-e),p=(a+i)/(a-i),g,_;if(l)g=r/(s-r),_=s*r/(s-r);else if(o===ii)g=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===Fo)g=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,a,i,r,s,o=ii,l=!1){let u=this.elements,d=2/(n-e),f=2/(a-i),c=-(n+e)/(n-e),p=-(a+i)/(a-i),g,_;if(l)g=1/(s-r),_=s/(s-r);else if(o===ii)g=-2/(s-r),_=-(s+r)/(s-r);else if(o===Fo)g=-1/(s-r),_=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let n=this.elements,a=e.elements;for(let i=0;i<16;i++)if(n[i]!==a[i])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){let a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}},xo=new T,ti=new He,YT=new T(0,0,0),KT=new T(1,1,1),Sr=new T,Ld=new T,ya=new T,l_=new He,u_=new Ma,Ji=class t{constructor(e=0,n=0,a=0,i=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,i=this._order){return this._x=e,this._y=n,this._z=a,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){let i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],u=i[5],d=i[9],f=i[2],c=i[6],p=i[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return l_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l_,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return u_.setFromEuler(this),this.setFromQuaternion(u_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ji.DEFAULT_ORDER="XYZ";var Bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ZT=0,c_=new T,vo=new Ma,Xi=new He,Ed=new T,$l=new T,jT=new T,$T=new Ma,d_=new T(1,0,0),f_=new T(0,1,0),h_=new T(0,0,1),p_={type:"added"},JT={type:"removed"},yo={type:"childadded",child:null},Gm={type:"childremoved",child:null},Dn=class t extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new T,n=new Ji,a=new Ma,i=new T(1,1,1);function r(){a.setFromEuler(n,!1)}function s(){n.setFromQuaternion(a,void 0,!1)}n._onChange(r),a._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new Ge}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(d_,e)}rotateY(e){return this.rotateOnAxis(f_,e)}rotateZ(e){return this.rotateOnAxis(h_,e)}translateOnAxis(e,n){return c_.copy(e).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(d_,e)}translateY(e){return this.translateOnAxis(f_,e)}translateZ(e){return this.translateOnAxis(h_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Ed.copy(e):Ed.set(e,n,a);let i=this.parent;this.updateWorldMatrix(!0,!1),$l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt($l,Ed,this.up):Xi.lookAt(Ed,$l,this.up),this.quaternion.setFromRotationMatrix(Xi),i&&(Xi.extractRotation(i.matrixWorld),vo.setFromRotationMatrix(Xi),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(p_),yo.child=e,this.dispatchEvent(yo),yo.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(JT),Gm.child=e,this.dispatchEvent(Gm),Gm.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(p_),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,i=this.children.length;a<i;a++){let s=this.children[a].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($l,e,jT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($l,$T,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let n=this.children;for(let a=0,i=n.length;a<i;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let a=0,i=n.length;a<i;a++)n[a].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,a=e.y,i=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*a-r[8]*i,r[13]+=a-r[1]*n-r[5]*a-r[9]*i,r[14]+=i-r[2]*n-r[6]*a-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let a=0,i=n.length;a<i;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,a)}}toJSON(e){let n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(n){let o=s(e.geometries),l=s(e.materials),u=s(e.textures),d=s(e.images),f=s(e.shapes),c=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(a.geometries=o),l.length>0&&(a.materials=l),u.length>0&&(a.textures=u),d.length>0&&(a.images=d),f.length>0&&(a.shapes=f),c.length>0&&(a.skeletons=c),p.length>0&&(a.animations=p),g.length>0&&(a.nodes=g)}return a.object=i,a;function s(o){let l=[];for(let u in o){let d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){let i=e.children[a];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Dn.DEFAULT_UP=new T(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ea=class extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},QT={type:"move"},Oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let i=null,r=null,s=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(let _ of e.hand.values()){let m=n.getJointPose(_,a),h=this._getHandJoint(u,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],c=d.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&c>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=n.getPose(e.targetRaySpace,a),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(QT)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let a=new ea;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}},xS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Td={h:0,s:0,l:0};function Wm(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ie=class{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Sa){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,i=nt.workingColorSpace){return this.r=e,this.g=n,this.b=a,nt.colorSpaceToWorking(this,i),this}setHSL(e,n,a,i=nt.workingColorSpace){if(e=kg(e,1),n=$e(n,0,1),a=$e(a,0,1),n===0)this.r=this.g=this.b=a;else{let r=a<=.5?a*(1+n):a+n-a*n,s=2*a-r;this.r=Wm(s,r,e+1/3),this.g=Wm(s,r,e),this.b=Wm(s,r,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,n=Sa){function a(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Sa){let a=xS[e.toLowerCase()];return a!==void 0?this.setHex(a,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sa){return nt.workingToColorSpace(Wn.copy(this),e),Math.round($e(Wn.r*255,0,255))*65536+Math.round($e(Wn.g*255,0,255))*256+Math.round($e(Wn.b*255,0,255))}getHexString(e=Sa){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.workingToColorSpace(Wn.copy(this),n);let a=Wn.r,i=Wn.g,r=Wn.b,s=Math.max(a,i,r),o=Math.min(a,i,r),l,u,d=(o+s)/2;if(o===s)l=0,u=0;else{let f=s-o;switch(u=d<=.5?f/(s+o):f/(2-s-o),s){case a:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-a)/f+2;break;case r:l=(a-i)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=nt.workingColorSpace){return nt.workingToColorSpace(Wn.copy(this),n),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Sa){nt.workingToColorSpace(Wn.copy(this),e);let n=Wn.r,a=Wn.g,i=Wn.b;return e!==Sa?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(i*255)})`}offsetHSL(e,n,a){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+n,Mr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Mr),e.getHSL(Td);let a=iu(Mr.h,Td.h,n),i=iu(Mr.s,Td.s,n),r=iu(Mr.l,Td.l,n);return this.setHSL(a,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,a=this.g,i=this.b,r=e.elements;return this.r=r[0]*n+r[3]*a+r[6]*i,this.g=r[1]*n+r[4]*a+r[7]*i,this.b=r[2]*n+r[5]*a+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new Ie;Ie.NAMES=xS;var zo=class extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},ni=new T,Yi=new T,qm=new T,Ki=new T,_o=new T,So=new T,m_=new T,Xm=new T,Ym=new T,Km=new T,Zm=new Gt,jm=new Gt,$m=new Gt,Ir=class t{constructor(e=new T,n=new T,a=new T){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,i){i.subVectors(a,n),ni.subVectors(e,n),i.cross(ni);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,n,a,i,r){ni.subVectors(i,n),Yi.subVectors(a,n),qm.subVectors(e,n);let s=ni.dot(ni),o=ni.dot(Yi),l=ni.dot(qm),u=Yi.dot(Yi),d=Yi.dot(qm),f=s*u-o*o;if(f===0)return r.set(0,0,0),null;let c=1/f,p=(u*l-o*d)*c,g=(s*d-o*l)*c;return r.set(1-p-g,g,p)}static containsPoint(e,n,a,i){return this.getBarycoord(e,n,a,i,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,n,a,i,r,s,o,l){return this.getBarycoord(e,n,a,i,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ki.x),l.addScaledVector(s,Ki.y),l.addScaledVector(o,Ki.z),l)}static getInterpolatedAttribute(e,n,a,i,r,s){return Zm.setScalar(0),jm.setScalar(0),$m.setScalar(0),Zm.fromBufferAttribute(e,n),jm.fromBufferAttribute(e,a),$m.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Zm,r.x),s.addScaledVector(jm,r.y),s.addScaledVector($m,r.z),s}static isFrontFacing(e,n,a,i){return ni.subVectors(a,n),Yi.subVectors(e,n),ni.cross(Yi).dot(i)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,i){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,a,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),ni.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,i,r){return t.getInterpolation(e,this.a,this.b,this.c,n,a,i,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let a=this.a,i=this.b,r=this.c,s,o;_o.subVectors(i,a),So.subVectors(r,a),Xm.subVectors(e,a);let l=_o.dot(Xm),u=So.dot(Xm);if(l<=0&&u<=0)return n.copy(a);Ym.subVectors(e,i);let d=_o.dot(Ym),f=So.dot(Ym);if(d>=0&&f<=d)return n.copy(i);let c=l*f-d*u;if(c<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(a).addScaledVector(_o,s);Km.subVectors(e,r);let p=_o.dot(Km),g=So.dot(Km);if(g>=0&&p<=g)return n.copy(r);let _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),n.copy(a).addScaledVector(So,o);let m=d*g-p*f;if(m<=0&&f-d>=0&&p-g>=0)return m_.subVectors(r,i),o=(f-d)/(f-d+(p-g)),n.copy(i).addScaledVector(m_,o);let h=1/(m+_+c);return s=_*h,o=c*h,n.copy(a).addScaledVector(_o,s).addScaledVector(So,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ka=class{constructor(e=new T(1/0,1/0,1/0),n=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let a=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let a=e.geometry;if(a!==void 0){let r=a.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,ai):ai.fromBufferAttribute(r,s),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ad.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ad.copy(a.boundingBox)),Ad.applyMatrix4(e.matrixWorld),this.union(Ad)}let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jl),Rd.subVectors(this.max,Jl),Mo.subVectors(e.a,Jl),wo.subVectors(e.b,Jl),Co.subVectors(e.c,Jl),wr.subVectors(wo,Mo),Cr.subVectors(Co,wo),Ss.subVectors(Mo,Co);let n=[0,-wr.z,wr.y,0,-Cr.z,Cr.y,0,-Ss.z,Ss.y,wr.z,0,-wr.x,Cr.z,0,-Cr.x,Ss.z,0,-Ss.x,-wr.y,wr.x,0,-Cr.y,Cr.x,0,-Ss.y,Ss.x,0];return!Jm(n,Mo,wo,Co,Rd)||(n=[1,0,0,0,1,0,0,0,1],!Jm(n,Mo,wo,Co,Rd))?!1:(Pd.crossVectors(wr,Cr),n=[Pd.x,Pd.y,Pd.z],Jm(n,Mo,wo,Co,Rd))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new T,new T,new T,new T,new T,new T,new T,new T],ai=new T,Ad=new ka,Mo=new T,wo=new T,Co=new T,wr=new T,Cr=new T,Ss=new T,Jl=new T,Rd=new T,Pd=new T,Ms=new T;function Jm(t,e,n,a,i){for(let r=0,s=t.length-3;r<=s;r+=3){Ms.fromArray(t,r);let o=i.x*Math.abs(Ms.x)+i.y*Math.abs(Ms.y)+i.z*Math.abs(Ms.z),l=e.dot(Ms),u=n.dot(Ms),d=a.dot(Ms);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}var sn=new T,Dd=new ae,eA=0,ht=class extends ri{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=fS,this.updateRanges=[],this.gpuType=Ba,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=n.array[a+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Dd.fromBufferAttribute(this,n),Dd.applyMatrix3(e),this.setXY(n,Dd.x,Dd.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ao(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Jn(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,i){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),i=Jn(i,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=i,this}setXYZW(e,n,a,i,r){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),i=Jn(i,this.array),r=Jn(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var fu=class extends ht{constructor(e,n,a){super(new Uint16Array(e),n,a)}};var hu=class extends ht{constructor(e,n,a){super(new Uint32Array(e),n,a)}};var St=class extends ht{constructor(e,n,a){super(new Float32Array(e),n,a)}},tA=new ka,Ql=new T,Qm=new T,Qi=class{constructor(e=new T,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let a=this.center;n!==void 0?a.copy(n):tA.setFromPoints(e).getCenter(a);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,a.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ql.subVectors(e,this.center);let n=Ql.lengthSq();if(n>this.radius*this.radius){let a=Math.sqrt(n),i=(a-this.radius)*.5;this.center.addScaledVector(Ql,i/a),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ql.copy(e.center).add(Qm)),this.expandByPoint(Ql.copy(e.center).sub(Qm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nA=0,Fa=new He,eg=new Dn,bo=new T,_a=new ka,eu=new ka,Cn=new T,Wt=class t extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nA++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(IT(e)?hu:fu)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let a=this.attributes.normal;if(a!==void 0){let r=new Ge().getNormalMatrix(e);a.applyNormalMatrix(r),a.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fa.makeRotationFromQuaternion(e),this.applyMatrix4(Fa),this}rotateX(e){return Fa.makeRotationX(e),this.applyMatrix4(Fa),this}rotateY(e){return Fa.makeRotationY(e),this.applyMatrix4(Fa),this}rotateZ(e){return Fa.makeRotationZ(e),this.applyMatrix4(Fa),this}translate(e,n,a){return Fa.makeTranslation(e,n,a),this.applyMatrix4(Fa),this}scale(e,n,a){return Fa.makeScale(e,n,a),this.applyMatrix4(Fa),this}lookAt(e){return eg.lookAt(e),eg.updateMatrix(),this.applyMatrix4(eg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let a=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];a.push(s.x,s.y,s.z||0)}this.setAttribute("position",new St(a,3))}else{let a=Math.min(e.length,n.count);for(let i=0;i<a;i++){let r=e[i];n.setXYZ(i,r.x,r.y,r.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ka);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,i=n.length;a<i;a++){let r=n[a];_a.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,_a.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,_a.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(_a.min),this.boundingBox.expandByPoint(_a.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let a=this.boundingSphere.center;if(_a.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){let o=n[r];eu.setFromBufferAttribute(o),this.morphTargetsRelative?(Cn.addVectors(_a.min,eu.min),_a.expandByPoint(Cn),Cn.addVectors(_a.max,eu.max),_a.expandByPoint(Cn)):(_a.expandByPoint(eu.min),_a.expandByPoint(eu.max))}_a.getCenter(a);let i=0;for(let r=0,s=e.count;r<s;r++)Cn.fromBufferAttribute(e,r),i=Math.max(i,a.distanceToSquared(Cn));if(n)for(let r=0,s=n.length;r<s;r++){let o=n[r],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Cn.fromBufferAttribute(o,u),l&&(bo.fromBufferAttribute(e,u),Cn.add(bo)),i=Math.max(i,a.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let a=n.position,i=n.normal,r=n.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==a.count)&&(s=new ht(new Float32Array(4*a.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let v=0;v<a.count;v++)o[v]=new T,l[v]=new T;let u=new T,d=new T,f=new T,c=new ae,p=new ae,g=new ae,_=new T,m=new T;function h(v,I,A){u.fromBufferAttribute(a,v),d.fromBufferAttribute(a,I),f.fromBufferAttribute(a,A),c.fromBufferAttribute(r,v),p.fromBufferAttribute(r,I),g.fromBufferAttribute(r,A),d.sub(u),f.sub(u),p.sub(c),g.sub(c);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(P),o[v].add(_),o[I].add(_),o[A].add(_),l[v].add(m),l[I].add(m),l[A].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,I=x.length;v<I;++v){let A=x[v],P=A.start,k=A.count;for(let z=P,R=P+k;z<R;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let S=new T,y=new T,w=new T,C=new T;function L(v){w.fromBufferAttribute(i,v),C.copy(w);let I=o[v];S.copy(I),S.sub(w.multiplyScalar(w.dot(I))).normalize(),y.crossVectors(C,I);let P=y.dot(l[v])<0?-1:1;s.setXYZW(v,S.x,S.y,S.z,P)}for(let v=0,I=x.length;v<I;++v){let A=x[v],P=A.start,k=A.count;for(let z=P,R=P+k;z<R;z+=3)L(e.getX(z+0)),L(e.getX(z+1)),L(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new ht(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let c=0,p=a.count;c<p;c++)a.setXYZ(c,0,0,0);let i=new T,r=new T,s=new T,o=new T,l=new T,u=new T,d=new T,f=new T;if(e)for(let c=0,p=e.count;c<p;c+=3){let g=e.getX(c+0),_=e.getX(c+1),m=e.getX(c+2);i.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,m),d.subVectors(s,r),f.subVectors(i,r),d.cross(f),o.fromBufferAttribute(a,g),l.fromBufferAttribute(a,_),u.fromBufferAttribute(a,m),o.add(d),l.add(d),u.add(d),a.setXYZ(g,o.x,o.y,o.z),a.setXYZ(_,l.x,l.y,l.z),a.setXYZ(m,u.x,u.y,u.z)}else for(let c=0,p=n.count;c<p;c+=3)i.fromBufferAttribute(n,c+0),r.fromBufferAttribute(n,c+1),s.fromBufferAttribute(n,c+2),d.subVectors(s,r),f.subVectors(i,r),d.cross(f),a.setXYZ(c+0,d.x,d.y,d.z),a.setXYZ(c+1,d.x,d.y,d.z),a.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Cn.fromBufferAttribute(e,n),Cn.normalize(),e.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(o,l){let u=o.array,d=o.itemSize,f=o.normalized,c=new u.constructor(l.length*d),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*d;for(let h=0;h<d;h++)c[g++]=u[p++]}return new ht(c,d,f)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,a=this.index.array,i=this.attributes;for(let o in i){let l=i[o],u=e(l,a);n.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let l=[],u=r[o];for(let d=0,f=u.length;d<f;d++){let c=u[d],p=e(c,a);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let u=s[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let a=this.attributes;for(let l in a){let u=a[l];e.data.attributes[l]=u.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],d=[];for(let f=0,c=u.length;f<c;f++){let p=u[f];d.push(p.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let a=e.index;a!==null&&this.setIndex(a.clone());let i=e.attributes;for(let u in i){let d=i[u];this.setAttribute(u,d.clone(n))}let r=e.morphAttributes;for(let u in r){let d=[],f=r[u];for(let c=0,p=f.length;c<p;c++)d.push(f[c].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let u=0,d=s.length;u<d;u++){let f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tg=new T,aA=new T,iA=new Ge,Qn=class{constructor(e=new T(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,i){return this.normal.set(e,n,a),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){let i=tg.subVectors(a,n).cross(aA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){let i=e.delta(tg),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return a===!0&&(s<0||s>1)?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let a=n||iA.getNormalMatrix(e),i=this.coplanarPoint(tg).applyMatrix4(e),r=this.normal.applyMatrix3(a).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rA=0,er=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Ko,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mg,this.blendDst=wg,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jd,this.stencilZFail=jd,this.stencilZPass=jd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let a=e[n];if(a===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}let i=this[n];if(i===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(a):i&&i.isVector2&&a&&a.isVector2||i&&i.isEuler&&a&&a.isEuler||i&&i.isVector3&&a&&a.isVector3?i.copy(a):this[n]=a}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function i(r){let s=[];for(let o in r){let l=r[o];delete l.metadata,s.push(l)}return s}if(n){let r=i(e.textures),s=i(e.images);r.length>0&&(a.textures=r),s.length>0&&(a.images=s)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(a=>new Qn().fromJSON(a))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new ae().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,a=null;if(n!==null){let i=n.length;a=new Array(i);for(let r=0;r!==i;++r)a[r]=n[r].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ji=new T,ng=new T,Fd=new T,kd=new T,Lr=class{constructor(e=new T,n=new T(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=ji.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,n),ji.distanceToSquared(e))}distanceSqToSegment(e,n,a,i){ng.copy(e).add(n).multiplyScalar(.5),Fd.copy(n).sub(e).normalize(),kd.copy(this.origin).sub(ng);let r=e.distanceTo(n)*.5,s=-this.direction.dot(Fd),o=kd.dot(this.direction),l=-kd.dot(Fd),u=kd.lengthSq(),d=Math.abs(1-s*s),f,c,p,g;if(d>0)if(f=s*l-o,c=s*o-l,g=r*d,f>=0)if(c>=-g)if(c<=g){let _=1/d;f*=_,c*=_,p=f*(f+s*c+2*o)+c*(s*f+c+2*l)+u}else c=r,f=Math.max(0,-(s*c+o)),p=-f*f+c*(c+2*l)+u;else c=-r,f=Math.max(0,-(s*c+o)),p=-f*f+c*(c+2*l)+u;else c<=-g?(f=Math.max(0,-(-s*r+o)),c=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+c*(c+2*l)+u):c<=g?(f=0,c=Math.min(Math.max(-r,-l),r),p=c*(c+2*l)+u):(f=Math.max(0,-(s*r+o)),c=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+c*(c+2*l)+u);else c=s>0?-r:r,f=Math.max(0,-(s*c+o)),p=-f*f+c*(c+2*l)+u;return a&&a.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ng).addScaledVector(Fd,c),p}intersectSphere(e,n){if(e.radius<0)return null;ji.subVectors(e.center,this.origin);let a=ji.dot(this.direction),i=ji.dot(ji)-a*a,r=e.radius*e.radius;if(i>r)return null;let s=Math.sqrt(r-i),o=a-s,l=a+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){let a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,i,r,s,o,l,u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,c=this.origin;return u>=0?(a=(e.min.x-c.x)*u,i=(e.max.x-c.x)*u):(a=(e.max.x-c.x)*u,i=(e.min.x-c.x)*u),d>=0?(r=(e.min.y-c.y)*d,s=(e.max.y-c.y)*d):(r=(e.max.y-c.y)*d,s=(e.min.y-c.y)*d),a>s||r>i||((r>a||isNaN(a))&&(a=r),(s<i||isNaN(i))&&(i=s),f>=0?(o=(e.min.z-c.z)*f,l=(e.max.z-c.z)*f):(o=(e.max.z-c.z)*f,l=(e.min.z-c.z)*f),a>l||o>i)||((o>a||a!==a)&&(a=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(a>=0?a:i,n)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,n,a,i,r){let s=this.origin,o=this.direction,l=o.x,u=o.y,d=o.z,f=e.x-s.x,c=e.y-s.y,p=e.z-s.z,g=n.x-s.x,_=n.y-s.y,m=n.z-s.z,h=a.x-s.x,x=a.y-s.y,S=a.z-s.z,y=Math.abs(l),w=Math.abs(u),C=Math.abs(d),L,v,I,A,P,k,z,R,U,V,H,j;if(y>=w&&y>=C?(I=l,k=f,U=g,j=h,l>=0?(L=u,v=d,A=c,P=p,z=_,R=m,V=x,H=S):(L=d,v=u,A=p,P=c,z=m,R=_,V=S,H=x)):w>=C?(I=u,k=c,U=_,j=x,u>=0?(L=d,v=l,A=p,P=f,z=m,R=g,V=S,H=h):(L=l,v=d,A=f,P=p,z=g,R=m,V=h,H=S)):(I=d,k=p,U=m,j=S,d>=0?(L=l,v=u,A=f,P=c,z=g,R=_,V=h,H=x):(L=u,v=l,A=c,P=f,z=_,R=g,V=x,H=h)),I===0)return null;let X=L/I,O=v/I,te=1/I,Te=A-X*k,ye=P-O*k,qe=z-X*U,ke=R-O*U,ze=V-X*j,K=H-O*j,Q=ze*ke-K*qe,se=Te*K-ye*ze,Xe=qe*ye-ke*Te;if(i){if(Q<0||se<0||Xe<0)return null}else if((Q<0||se<0||Xe<0)&&(Q>0||se>0||Xe>0))return null;let ge=Q+se+Xe;if(ge===0)return null;let Ke=te*(Q*k+se*U+Xe*j);return(ge>0?Ke<0:Ke>0)?null:this.at(Ke/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ua=class extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},g_=new He,ws=new Lr,Nd=new Qi,x_=new T,Ud=new T,Bd=new T,Od=new T,ag=new T,zd=new T,v_=new T,Hd=new T,gt=class extends Dn{constructor(e=new Wt,n=new ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){let i=n[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){let a=this.geometry,i=a.attributes.position,r=a.morphAttributes.position,s=a.morphTargetsRelative;n.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){zd.set(0,0,0);for(let l=0,u=r.length;l<u;l++){let d=o[l],f=r[l];d!==0&&(ag.fromBufferAttribute(f,e),s?zd.addScaledVector(ag,d):zd.addScaledVector(ag.sub(n),d))}n.add(zd)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let a=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Nd.copy(a.boundingSphere),Nd.applyMatrix4(r),ws.copy(e.ray).recast(e.near),!(Nd.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Nd,x_)===null||ws.origin.distanceToSquared(x_)>(e.far-e.near)**2))&&(g_.copy(r).invert(),ws.copy(e.ray).applyMatrix4(g_),!(a.boundingBox!==null&&ws.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,ws)))}_computeIntersections(e,n,a){let i,r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,c=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=c.length;g<_;g++){let m=c[g],h=s[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,w=S;y<w;y+=3){let C=o.getX(y),L=o.getX(y+1),v=o.getX(y+2);i=Vd(this,h,e,a,u,d,f,C,L,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let x=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);i=Vd(this,s,e,a,u,d,f,x,S,y),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=c.length;g<_;g++){let m=c[g],h=s[m.materialIndex],x=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,w=S;y<w;y+=3){let C=y,L=y+1,v=y+2;i=Vd(this,h,e,a,u,d,f,C,L,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){let x=m,S=m+1,y=m+2;i=Vd(this,s,e,a,u,d,f,x,S,y),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}}};function sA(t,e,n,a,i,r,s,o){let l;if(e.side===Fn?l=a.intersectTriangle(s,r,i,!0,o):l=a.intersectTriangle(i,r,s,e.side===Li,o),l===null)return null;Hd.copy(o),Hd.applyMatrix4(t.matrixWorld);let u=n.ray.origin.distanceTo(Hd);return u<n.near||u>n.far?null:{distance:u,point:Hd.clone(),object:t}}function Vd(t,e,n,a,i,r,s,o,l,u){t.getVertexPosition(o,Ud),t.getVertexPosition(l,Bd),t.getVertexPosition(u,Od);let d=sA(t,e,n,a,Ud,Bd,Od,v_);if(d){let f=new T;Ir.getBarycoord(v_,Ud,Bd,Od,f),i&&(d.uv=Ir.getInterpolatedAttribute(i,o,l,u,f,new ae)),r&&(d.uv1=Ir.getInterpolatedAttribute(r,o,l,u,f,new ae)),s&&(d.normal=Ir.getInterpolatedAttribute(s,o,l,u,f,new T),d.normal.dot(a.direction)>0&&d.normal.multiplyScalar(-1));let c={a:o,b:l,c:u,normal:new T,materialIndex:0};Ir.getNormal(Ud,Bd,Od,c.normal),d.face=c,d.barycoord=f}return d}var pu=class extends ta{constructor(e=null,n=1,a=1,i,r,s,o,l,u=en,d=en,f,c){super(null,s,o,l,u,d,i,r,f,c),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mu=class extends ht{constructor(e,n,a,i=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Io=new He,y_=new He,Gd=[],__=new ka,oA=new He,tu=new gt,nu=new Qi,Is=class extends gt{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new mu(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<a;i++)this.setMatrixAt(i,oA)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ka),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Io),__.copy(e.boundingBox).applyMatrix4(Io),this.boundingBox.union(__)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Io),nu.copy(e.boundingSphere).applyMatrix4(Io),this.boundingSphere.union(nu)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let a=n.morphTargetInfluences,i=this.morphTexture.source.data.data,r=a.length+1,s=e*r+1;for(let o=0;o<a.length;o++)a[o]=i[s+o]}raycast(e,n){let a=this.matrixWorld,i=this.count;if(tu.geometry=this.geometry,tu.material=this.material,tu.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nu.copy(this.boundingSphere),nu.applyMatrix4(a),e.ray.intersectsSphere(nu)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Io),y_.multiplyMatrices(a,Io),tu.matrixWorld=y_,tu.raycast(e,Gd);for(let s=0,o=Gd.length;s<o;s++){let l=Gd[s];l.instanceId=r,l.object=this,n.push(l)}Gd.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new mu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let a=n.morphTargetInfluences,i=a.length+1;this.morphTexture===null&&(this.morphTexture=new pu(new Float32Array(i*this.count),i,this.count,Of,Ba));let r=this.morphTexture.source.data.data,s=0;for(let u=0;u<a.length;u++)s+=a[u];let o=this.geometry.morphTargetsRelative?1:1-s,l=i*e;return r[l]=o,r.set(a,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cs=new Qi,lA=new ae(.5,.5),Wd=new T,Ho=class{constructor(e=new Qn,n=new Qn,a=new Qn,i=new Qn,r=new Qn,s=new Qn){this.planes=[e,n,a,i,r,s]}set(e,n,a,i,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(a),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){let n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ii,a=!1){let i=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],u=r[3],d=r[4],f=r[5],c=r[6],p=r[7],g=r[8],_=r[9],m=r[10],h=r[11],x=r[12],S=r[13],y=r[14],w=r[15];if(i[0].setComponents(u-s,p-d,h-g,w-x).normalize(),i[1].setComponents(u+s,p+d,h+g,w+x).normalize(),i[2].setComponents(u+o,p+f,h+_,w+S).normalize(),i[3].setComponents(u-o,p-f,h-_,w-S).normalize(),a)i[4].setComponents(l,c,m,y).normalize(),i[5].setComponents(u-l,p-c,h-m,w-y).normalize();else if(i[4].setComponents(u-l,p-c,h-m,w-y).normalize(),n===ii)i[5].setComponents(u+l,p+c,h+m,w+y).normalize();else if(n===Fo)i[5].setComponents(l,c,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);let n=lA.distanceTo(e.center);return Cs.radius=.7071067811865476+n,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let n=this.planes,a=e.center,i=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(a)<i)return!1;return!0}intersectsBox(e){let n=this.planes;for(let a=0;a<6;a++){let i=n[a];if(Wd.x=i.normal.x>0?e.max.x:e.min.x,Wd.y=i.normal.y>0?e.max.y:e.min.y,Wd.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wd)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cf=class extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},S_=new He,hg=new Lr,qd=new Qi,Xd=new T,gu=class extends Dn{constructor(e=new Wt,n=new cf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let a=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),qd.copy(a.boundingSphere),qd.applyMatrix4(i),qd.radius+=r,e.ray.intersectsSphere(qd)===!1)return;S_.copy(i).invert(),hg.copy(e.ray).applyMatrix4(S_);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=a.index,f=a.attributes.position;if(u!==null){let c=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let g=c,_=p;g<_;g++){let m=u.getX(g);Xd.fromBufferAttribute(f,m),M_(Xd,m,l,i,e,n,this)}}else{let c=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let g=c,_=p;g<_;g++)Xd.fromBufferAttribute(f,g),M_(Xd,g,l,i,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){let i=n[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function M_(t,e,n,a,i,r,s){let o=hg.distanceSqToPoint(t);if(o<n){let l=new T;hg.closestPointToPoint(t,l),l.applyMatrix4(a);let u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var xu=class extends ta{constructor(e=[],n=Ur,a,i,r,s,o,l,u,d){super(e,n,a,i,r,s,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ls=class extends ta{constructor(e,n,a,i,r,s,o,l,u){super(e,n,a,i,r,s,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Er=class extends ta{constructor(e,n,a=li,i,r,s,o=en,l=en,u,d=bi,f=1){if(d!==bi&&d!==Or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:e,height:n,depth:f};super(c,i,r,s,o,l,d,a,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},df=class extends Er{constructor(e,n=li,a=Ur,i,r,s=en,o=en,l,u=bi){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,n,a,i,r,s,o,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},vu=class extends ta{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},wa=class t extends Wt{constructor(e=1,n=1,a=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:i,heightSegments:r,depthSegments:s};let o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let l=[],u=[],d=[],f=[],c=0,p=0;g("z","y","x",-1,-1,a,n,e,s,r,0),g("z","y","x",1,-1,a,n,-e,s,r,1),g("x","z","y",1,1,e,a,n,i,s,2),g("x","z","y",1,-1,e,a,-n,i,s,3),g("x","y","z",1,-1,e,n,a,i,r,4),g("x","y","z",-1,-1,e,n,-a,i,r,5),this.setIndex(l),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(f,2));function g(_,m,h,x,S,y,w,C,L,v,I){let A=y/L,P=w/v,k=y/2,z=w/2,R=C/2,U=L+1,V=v+1,H=0,j=0,X=new T;for(let O=0;O<V;O++){let te=O*P-z;for(let Te=0;Te<U;Te++){let ye=Te*A-k;X[_]=ye*x,X[m]=te*S,X[h]=R,u.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[h]=C>0?1:-1,d.push(X.x,X.y,X.z),f.push(Te/L),f.push(1-O/v),H+=1}}for(let O=0;O<v;O++)for(let te=0;te<L;te++){let Te=c+te+U*O,ye=c+te+U*(O+1),qe=c+(te+1)+U*(O+1),ke=c+(te+1)+U*O;l.push(Te,ye,ke),l.push(ye,qe,ke),j+=6}o.addGroup(p,j,I),p+=j,c+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var yu=class t extends Wt{constructor(e=1,n=32,a=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:a,thetaLength:i},n=Math.max(3,n);let r=[],s=[],o=[],l=[],u=new T,d=new ae;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,c=3;f<=n;f++,c+=3){let p=a+f/n*i;u.x=e*Math.cos(p),u.y=e*Math.sin(p),s.push(u.x,u.y,u.z),o.push(0,0,1),d.x=(s[c]/e+1)/2,d.y=(s[c+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new St(s,3)),this.setAttribute("normal",new St(o,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ii=class t extends Wt{constructor(e=1,n=1,a=1,i=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:a,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};let u=this;i=Math.floor(i),r=Math.floor(r);let d=[],f=[],c=[],p=[],g=0,_=[],m=a/2,h=0;x(),s===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new St(f,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(p,2));function x(){let y=new T,w=new T,C=0,L=(n-e)/a;for(let v=0;v<=r;v++){let I=[],A=v/r,P=A*(n-e)+e;for(let k=0;k<=i;k++){let z=k/i,R=z*l+o,U=Math.sin(R),V=Math.cos(R);w.x=P*U,w.y=-A*a+m,w.z=P*V,f.push(w.x,w.y,w.z),y.set(U,L,V).normalize(),c.push(y.x,y.y,y.z),p.push(z,1-A),I.push(g++)}_.push(I)}for(let v=0;v<i;v++)for(let I=0;I<r;I++){let A=_[I][v],P=_[I+1][v],k=_[I+1][v+1],z=_[I][v+1];(e>0||I!==0)&&(d.push(A,P,z),C+=3),(n>0||I!==r-1)&&(d.push(P,k,z),C+=3)}u.addGroup(h,C,0),h+=C}function S(y){let w=g,C=new ae,L=new T,v=0,I=y===!0?e:n,A=y===!0?1:-1;for(let k=1;k<=i;k++)f.push(0,m*A,0),c.push(0,A,0),p.push(.5,.5),g++;let P=g;for(let k=0;k<=i;k++){let R=k/i*l+o,U=Math.cos(R),V=Math.sin(R);L.x=I*V,L.y=m*A,L.z=I*U,f.push(L.x,L.y,L.z),c.push(0,A,0),C.x=U*.5+.5,C.y=V*.5*A+.5,p.push(C.x,C.y),g++}for(let k=0;k<i;k++){let z=w+k,R=P+k;y===!0?d.push(R,R+1,z):d.push(R+1,R,z),v+=3}u.addGroup(h,v,y===!0?1:2),h+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Na=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,n){let a=this.getUtoTmapping(e);return this.getPoint(a,n)}getPoints(e=5){let n=[];for(let a=0;a<=e;a++)n.push(this.getPoint(a/e));return n}getSpacedPoints(e=5){let n=[];for(let a=0;a<=e;a++)n.push(this.getPointAt(a/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],a,i=this.getPoint(0),r=0;n.push(0);for(let s=1;s<=e;s++)a=this.getPoint(s/e),r+=a.distanceTo(i),n.push(r),i=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){let a=this.getLengths(),i=0,r=a.length,s;n?s=n:s=e*a[r-1];let o=0,l=r-1,u;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),u=a[i]-s,u<0)o=i+1;else if(u>0)l=i-1;else{l=i;break}if(i=l,a[i]===s)return i/(r-1);let d=a[i],c=a[i+1]-d,p=(s-d)/c;return(i+p)/(r-1)}getTangent(e,n){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),l=n||(s.isVector2?new ae:new T);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,n){let a=this.getUtoTmapping(e);return this.getTangent(a,n)}computeFrenetFrames(e,n=!1){let a=new T,i=[],r=[],s=[],o=new T,l=new He;for(let p=0;p<=e;p++){let g=p/e;i[p]=this.getTangentAt(g,new T)}r[0]=new T,s[0]=new T;let u=Number.MAX_VALUE,d=Math.abs(i[0].x),f=Math.abs(i[0].y),c=Math.abs(i[0].z);d<=u&&(u=d,a.set(1,0,0)),f<=u&&(u=f,a.set(0,1,0)),c<=u&&a.set(0,0,1),o.crossVectors(i[0],a).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos($e(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}s[p].crossVectors(i[p],r[p])}if(n===!0){let p=Math.acos($e(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),s[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_u=class extends Na{constructor(e=0,n=0,a=1,i=1,r=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=a,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new ae){let a=n,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),c=l-this.aX,p=u-this.aY;l=c*d-p*f+this.aX,u=c*f+p*d+this.aY}return a.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ff=class extends _u{constructor(e,n,a,i,r,s){super(e,n,a,a,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Ng(){let t=0,e=0,n=0,a=0;function i(r,s,o,l){t=r,e=o,n=-3*r+3*s-2*o-l,a=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,u){i(s,o,u*(o-r),u*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,u,d,f){let c=(s-r)/u-(o-r)/(u+d)+(o-s)/d,p=(o-s)/d-(l-s)/(d+f)+(l-o)/f;c*=d,p*=d,i(s,o,c,p)},calc:function(r){let s=r*r,o=s*r;return t+e*r+n*s+a*o}}}var w_=new T,C_=new T,ig=new Ng,rg=new Ng,sg=new Ng,Tr=class extends Na{constructor(e=[],n=!1,a="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=a,this.tension=i}getPoint(e,n=new T){let a=n,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let u,d;this.closed||o>0?u=i[(o-1)%r]:(C_.subVectors(i[0],i[1]).add(i[0]),u=C_);let f=i[o%r],c=i[(o+1)%r];if(this.closed||o+2<r?d=i[(o+2)%r]:(w_.subVectors(i[r-1],i[r-2]).add(i[r-1]),d=w_),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(u.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(c),p),m=Math.pow(c.distanceToSquared(d),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ig.initNonuniformCatmullRom(u.x,f.x,c.x,d.x,g,_,m),rg.initNonuniformCatmullRom(u.y,f.y,c.y,d.y,g,_,m),sg.initNonuniformCatmullRom(u.z,f.z,c.z,d.z,g,_,m)}else this.curveType==="catmullrom"&&(ig.initCatmullRom(u.x,f.x,c.x,d.x,this.tension),rg.initCatmullRom(u.y,f.y,c.y,d.y,this.tension),sg.initCatmullRom(u.z,f.z,c.z,d.z,this.tension));return a.set(ig.calc(l),rg.calc(l),sg.calc(l)),a}copy(e){super.copy(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){let i=e.points[n];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,a=this.points.length;n<a;n++){let i=this.points[n];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){let i=e.points[n];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function b_(t,e,n,a,i){let r=(a-e)*.5,s=(i-n)*.5,o=t*t,l=t*o;return(2*n-2*a+r+s)*l+(-3*n+3*a-2*r-s)*o+r*t+n}function uA(t,e){let n=1-t;return n*n*e}function cA(t,e){return 2*(1-t)*t*e}function dA(t,e){return t*t*e}function ru(t,e,n,a){return uA(t,e)+cA(t,n)+dA(t,a)}function fA(t,e){let n=1-t;return n*n*n*e}function hA(t,e){let n=1-t;return 3*n*n*t*e}function pA(t,e){return 3*(1-t)*t*t*e}function mA(t,e){return t*t*t*e}function su(t,e,n,a,i){return fA(t,e)+hA(t,n)+pA(t,a)+mA(t,i)}var hf=class extends Na{constructor(e=new ae,n=new ae,a=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=a,this.v3=i}getPoint(e,n=new ae){let a=n,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return a.set(su(e,i.x,r.x,s.x,o.x),su(e,i.y,r.y,s.y,o.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pf=class extends Na{constructor(e=new T,n=new T,a=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=a,this.v3=i}getPoint(e,n=new T){let a=n,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return a.set(su(e,i.x,r.x,s.x,o.x),su(e,i.y,r.y,s.y,o.y),su(e,i.z,r.z,s.z,o.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mf=class extends Na{constructor(e=new ae,n=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ae){let a=n;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ae){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gf=class extends Na{constructor(e=new T,n=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new T){let a=n;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new T){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xf=class extends Na{constructor(e=new ae,n=new ae,a=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=a}getPoint(e,n=new ae){let a=n,i=this.v0,r=this.v1,s=this.v2;return a.set(ru(e,i.x,r.x,s.x),ru(e,i.y,r.y,s.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Su=class extends Na{constructor(e=new T,n=new T,a=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=a}getPoint(e,n=new T){let a=n,i=this.v0,r=this.v1,s=this.v2;return a.set(ru(e,i.x,r.x,s.x),ru(e,i.y,r.y,s.y),ru(e,i.z,r.z,s.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vf=class extends Na{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ae){let a=n,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,l=i[s===0?s:s-1],u=i[s],d=i[s>i.length-2?i.length-1:s+1],f=i[s>i.length-3?i.length-1:s+2];return a.set(b_(o,l.x,u.x,d.x,f.x),b_(o,l.y,u.y,d.y,f.y)),a}copy(e){super.copy(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){let i=e.points[n];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,a=this.points.length;n<a;n++){let i=this.points[n];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){let i=e.points[n];this.points.push(new ae().fromArray(i))}return this}},gA=Object.freeze({__proto__:null,ArcCurve:ff,CatmullRomCurve3:Tr,CubicBezierCurve:hf,CubicBezierCurve3:pf,EllipseCurve:_u,LineCurve:mf,LineCurve3:gf,QuadraticBezierCurve:xf,QuadraticBezierCurve3:Su,SplineCurve:vf});var Es=class t extends Wt{constructor(e=1,n=1,a=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:i};let r=e/2,s=n/2,o=Math.floor(a),l=Math.floor(i),u=o+1,d=l+1,f=e/o,c=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<d;h++){let x=h*c-s;for(let S=0;S<u;S++){let y=S*f-r;g.push(y,-x,0),_.push(0,0,1),m.push(S/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<o;x++){let S=x+u*h,y=x+u*(h+1),w=x+1+u*(h+1),C=x+1+u*h;p.push(S,y,C),p.push(y,w,C)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var Mu=class t extends Wt{constructor(e=1,n=32,a=16,i=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:a,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));let l=Math.min(s+o,Math.PI),u=0,d=[],f=new T,c=new T,p=[],g=[],_=[],m=[];for(let h=0;h<=a;h++){let x=[],S=h/a,y=s+S*o,w=e*Math.cos(y),C=Math.sqrt(e*e-w*w),L=0;h===0&&s===0?L=.5/n:h===a&&l===Math.PI&&(L=-.5/n);for(let v=0;v<=n;v++){let I=v/n,A=i+I*r;f.x=-C*Math.cos(A),f.y=w,f.z=C*Math.sin(A),g.push(f.x,f.y,f.z),c.copy(f).normalize(),_.push(c.x,c.y,c.z),m.push(I+L,1-S),x.push(u++)}d.push(x)}for(let h=0;h<a;h++)for(let x=0;x<n;x++){let S=d[h][x+1],y=d[h][x],w=d[h+1][x],C=d[h+1][x+1];(h!==0||s>0)&&p.push(S,y,C),(h!==a-1||l<Math.PI)&&p.push(y,w,C)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wu=class t extends Wt{constructor(e=1,n=.4,a=12,i=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:a,tubularSegments:i,arc:r,thetaStart:s,thetaLength:o},a=Math.floor(a),i=Math.floor(i);let l=[],u=[],d=[],f=[],c=new T,p=new T,g=new T;for(let _=0;_<=a;_++){let m=s+_/a*o;for(let h=0;h<=i;h++){let x=h/i*r;p.x=(e+n*Math.cos(m))*Math.cos(x),p.y=(e+n*Math.cos(m))*Math.sin(x),p.z=n*Math.sin(m),u.push(p.x,p.y,p.z),c.x=e*Math.cos(x),c.y=e*Math.sin(x),g.subVectors(p,c).normalize(),d.push(g.x,g.y,g.z),f.push(h/i),f.push(_/a)}}for(let _=1;_<=a;_++)for(let m=1;m<=i;m++){let h=(i+1)*_+m-1,x=(i+1)*(_-1)+m-1,S=(i+1)*(_-1)+m,y=(i+1)*_+m;l.push(h,x,y),l.push(x,S,y)}this.setIndex(l),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Cu=class t extends Wt{constructor(e=new Su(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),n=64,a=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:a,radialSegments:i,closed:r};let s=e.computeFrenetFrames(n,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new T,l=new T,u=new ae,d=new T,f=[],c=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new St(f,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(p,2));function _(){for(let S=0;S<n;S++)m(S);m(r===!1?n:0),x(),h()}function m(S){d=e.getPointAt(S/n,d);let y=s.normals[S],w=s.binormals[S];for(let C=0;C<=i;C++){let L=C/i*Math.PI*2,v=Math.sin(L),I=-Math.cos(L);l.x=I*y.x+v*w.x,l.y=I*y.y+v*w.y,l.z=I*y.z+v*w.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=d.x+a*l.x,o.y=d.y+a*l.y,o.z=d.z+a*l.z,f.push(o.x,o.y,o.z)}}function h(){for(let S=1;S<=n;S++)for(let y=1;y<=i;y++){let w=(i+1)*(S-1)+(y-1),C=(i+1)*S+(y-1),L=(i+1)*S+y,v=(i+1)*(S-1)+y;g.push(w,C,v),g.push(C,L,v)}}function x(){for(let S=0;S<=n;S++)for(let y=0;y<=i;y++)u.x=S/n,u.y=y/i,p.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new t(new gA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ps(t){let e={};for(let n in t){e[n]={};for(let a in t[n]){let i=t[n][a];if(I_(i))i.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=i.clone();else if(Array.isArray(i))if(I_(i[0])){let r=[];for(let s=0,o=i.length;s<o;s++)r[s]=i[s].clone();e[n][a]=r}else e[n][a]=i.slice();else e[n][a]=i}}return e}function qn(t){let e={};for(let n=0;n<t.length;n++){let a=Ps(t[n]);for(let i in a)e[i]=a[i]}return e}function I_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function xA(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ug(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var nr={clone:Ps,merge:qn},vA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mt=class extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vA,this.fragmentShader=yA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=xA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?n.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[i]={type:"m4",value:s.toArray()}:n.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let a={};for(let i in this.extensions)this.extensions[i]===!0&&(a[i]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let a in e.uniforms){let i=e.uniforms[a];switch(this.uniforms[a]={},i.type){case"t":this.uniforms[a].value=n[i.value]||null;break;case"c":this.uniforms[a].value=new Ie().setHex(i.value);break;case"v2":this.uniforms[a].value=new ae().fromArray(i.value);break;case"v3":this.uniforms[a].value=new T().fromArray(i.value);break;case"v4":this.uniforms[a].value=new Gt().fromArray(i.value);break;case"m3":this.uniforms[a].value=new Ge().fromArray(i.value);break;case"m4":this.uniforms[a].value=new He().fromArray(i.value);break;default:this.uniforms[a].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vo=class extends Mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ln=class extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Go=class extends ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Wo=class extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yf=class extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Lo(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function og(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var Ar=class{constructor(e,n,a,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,a=this._cachedIndex,i=n[a],r=n[a-1];e:{t:{let s;n:{a:if(!(e<i)){for(let o=a+2;;){if(i===void 0){if(e<r)break a;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===o)break;if(r=i,i=n[++a],e<i)break t}s=n.length;break n}if(!(e>=r)){let o=n[1];e<o&&(a=2,r=o);for(let l=a-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===l)break;if(i=r,r=n[--a-1],e>=r)break t}s=a,a=0;break n}break e}for(;a<s;){let o=a+s>>>1;e<n[o]?s=o:a=o+1}if(i=n[a],r=n[a-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,r,i)}return this.interpolate_(a,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,a=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)n[s]=a[r+s];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_f=class extends Ar{constructor(e,n,a,i){super(e,n,a,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cg,endingEnd:cg}}intervalChanged_(e,n,a){let i=this.parameterPositions,r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case dg:r=e,o=2*n-a;break;case fg:r=i.length-2,o=n+i[r]-i[r+1];break;default:r=e,o=a}if(l===void 0)switch(this.getSettings_().endingEnd){case dg:s=e,l=2*a-n;break;case fg:s=1,l=a+i[1]-i[0];break;default:s=e-1,l=n}let u=(a-n)*.5,d=this.valueSize;this._weightPrev=u/(n-o),this._weightNext=u/(l-a),this._offsetPrev=r*d,this._offsetNext=s*d}interpolate_(e,n,a,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this._offsetPrev,f=this._offsetNext,c=this._weightPrev,p=this._weightNext,g=(a-n)/(i-n),_=g*g,m=_*g,h=-c*m+2*c*_-c*g,x=(1+c)*m+(-1.5-2*c)*_+(-.5+c)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let w=0;w!==o;++w)r[w]=h*s[d+w]+x*s[u+w]+S*s[l+w]+y*s[f+w];return r}},Sf=class extends Ar{constructor(e,n,a,i){super(e,n,a,i)}interpolate_(e,n,a,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=(a-n)/(i-n),f=1-d;for(let c=0;c!==o;++c)r[c]=s[u+c]*f+s[l+c]*d;return r}},Mf=class extends Ar{constructor(e,n,a,i){super(e,n,a,i)}interpolate_(e){return this.copySampleValue_(e-1)}},wf=class extends Ar{interpolate_(e,n,a,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this.inTangents,f=this.outTangents;if(!d||!f){let g=(a-n)/(i-n),_=1-g;for(let m=0;m!==o;++m)r[m]=s[u+m]*_+s[l+m]*g;return r}let c=o*2,p=e-1;for(let g=0;g!==o;++g){let _=s[u+g],m=s[l+g],h=p*c+g*2,x=f[h],S=f[h+1],y=e*c+g*2,w=d[y],C=d[y+1],L=SA(a,n,x,w,i);r[g]=vS(L,_,S,C,m)}return r}};function vS(t,e,n,a,i){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*a+t*t*t*i}function _A(t,e,n,a,i){let r=1-t;return 3*r*r*(n-e)+6*r*t*(a-n)+3*t*t*(i-a)}function SA(t,e,n,a,i){let r=(t-e)/(i-e);for(let s=0;s<8;s++){let o=vS(r,e,n,a,i)-t;if(Math.abs(o)<1e-10)break;let l=_A(r,e,n,a,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ca=class{constructor(e,n,a,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lo(n,this.TimeBufferType),this.values=Lo(a,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:Lo(e.times,Array),values:Lo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(a.interpolation=i),og(e.settings)&&(a.settings={inTangents:Lo(e.settings.inTangents,Array),outTangents:Lo(e.settings.outTangents,Array)})}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new Mf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _f(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new wf(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case ou:n=this.InterpolantFactoryMethodDiscrete;break;case sf:n=this.InterpolantFactoryMethodLinear;break;case Zd:n=this.InterpolantFactoryMethodSmooth;break;case ug:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Be("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ou;case this.InterpolantFactoryMethodLinear:return sf;case this.InterpolantFactoryMethodSmooth:return Zd;case this.InterpolantFactoryMethodBezier:return ug}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let a=0,i=n.length;a!==i;++a)n[a]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let a=0,i=n.length;a!==i;++a)n[a]*=e;og(this.settings)&&(L_(this.settings.inTangents,e),L_(this.settings.outTangents,e))}return this}trim(e,n){let a=this.times,i=a.length,r=0,s=i-1;for(;r!==i&&a[r]<e;)++r;for(;s!==-1&&a[s]>n;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=a.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let a=this.times,i=this.values,r=a.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){let l=a[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&LT(i))for(let o=0,l=i.length;o!==l;++o){let u=i[o];if(isNaN(u)){Ve("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),i=this.getInterpolation()===Zd,r=e.length-1,s=1;for(let o=1;o<r;++o){let l=!1,u=e[o],d=e[o+1];if(u!==d&&(o!==1||u!==e[0]))if(i)l=!0;else{let f=o*a,c=f-a,p=f+a;for(let g=0;g!==a;++g){let _=n[f+g];if(_!==n[c+g]||_!==n[p+g]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];let f=o*a,c=s*a;for(let p=0;p!==a;++p)n[c+p]=n[f+p]}++s}}if(r>0){e[s]=e[r];for(let o=r*a,l=s*a,u=0;u!==a;++u)n[l+u]=n[o+u];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=n.slice(0,s*a)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),a=this.constructor,i=new a(this.name,e,n);return i.createInterpolant=this.createInterpolant,og(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function L_(t,e){for(let n=0,a=t.length;n!==a;n+=2)t[n]*=e}Ca.prototype.ValueTypeName="";Ca.prototype.TimeBufferType=Float32Array;Ca.prototype.ValueBufferType=Float32Array;Ca.prototype.DefaultInterpolation=sf;var Rr=class extends Ca{constructor(e,n,a){super(e,n,a)}};Rr.prototype.ValueTypeName="bool";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=ou;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cf=class extends Ca{constructor(e,n,a,i){super(e,n,a,i)}};Cf.prototype.ValueTypeName="color";var bf=class extends Ca{constructor(e,n,a,i){super(e,n,a,i)}};bf.prototype.ValueTypeName="number";var If=class extends Ar{constructor(e,n,a,i){super(e,n,a,i)}interpolate_(e,n,a,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(a-n)/(i-n),u=e*o;for(let d=u+o;u!==d;u+=4)Ma.slerpFlat(r,0,s,u-o,s,u,l);return r}},bu=class extends Ca{constructor(e,n,a,i){super(e,n,a,i)}InterpolantFactoryMethodLinear(e){return new If(this.times,this.values,this.getValueSize(),e)}};bu.prototype.ValueTypeName="quaternion";bu.prototype.InterpolantFactoryMethodSmooth=void 0;var Pr=class extends Ca{constructor(e,n,a){super(e,n,a)}};Pr.prototype.ValueTypeName="string";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=ou;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Lf=class extends Ca{constructor(e,n,a,i){super(e,n,a,i)}};Lf.prototype.ValueTypeName="vector";var Ef=class{constructor(e,n,a){let i=this,r=!1,s=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(d){o++,r===!1&&i.onStart!==void 0&&i.onStart(d,s,o),r=!0},this.itemEnd=function(d){s++,i.onProgress!==void 0&&i.onProgress(d,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return u.push(d,f),this},this.removeHandler=function(d){let f=u.indexOf(d);return f!==-1&&u.splice(f,2),this},this.getHandler=function(d){for(let f=0,c=u.length;f<c;f+=2){let p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yS=new Ef,Tf=class{constructor(e){this.manager=e!==void 0?e:yS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let a=this;return new Promise(function(i,r){a.load(e,i,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Tf.DEFAULT_MATERIAL_NAME="__DEFAULT";var qo=class extends Dn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Iu=class extends qo{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){let n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}},lg=new He,E_=new T,T_=new T,Lu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=ca,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera;E_.setFromMatrixPosition(e.matrixWorld),n.position.copy(E_),T_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(T_),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,a,i){lg.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a.setFromProjectionMatrix(lg,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,u=i?i.y/r.y:0;e.coordinateSystem===Fo||e.reversedDepth?n.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):n.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),n.multiply(lg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yd=new T,Kd=new Ma,wi=new T,Eu=class extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yd,Kd,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yd,Kd,wi.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(Yd,Kd,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yd,Kd,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},br=new T,A_=new ae,R_=new ae,Pn=class extends Eu{constructor(e=50,n=1,a=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,n){return this.getViewBounds(e,A_,R_),n.subVectors(R_,A_)}setViewOffset(e,n,a,i,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(au*.5*this.fov)/this.zoom,a=2*n,i=this.aspect*a,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,u=s.fullHeight;r+=s.offsetX*i/l,n-=s.offsetY*a/u,i*=s.width/l,a*=s.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var pg=class extends Lu{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0}},Tu=class extends qo{constructor(e,n,a=0,i=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=i,this.shadow=new pg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},Dr=class extends Eu{constructor(e=-1,n=1,a=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=a-e,s=a+e,o=i+n,l=i-n;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,s=r+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},mg=class extends Lu{constructor(){super(new Dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fr=class extends qo{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new mg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var Eo=-90,To=1,Af=class extends Dn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Pn(Eo,To,e,n);i.layers=this.layers,this.add(i);let r=new Pn(Eo,To,e,n);r.layers=this.layers,this.add(r);let s=new Pn(Eo,To,e,n);s.layers=this.layers,this.add(s);let o=new Pn(Eo,To,e,n);o.layers=this.layers,this.add(o);let l=new Pn(Eo,To,e,n);l.layers=this.layers,this.add(l);let u=new Pn(Eo,To,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[a,i,r,s,o,l]=n;for(let u of n)this.remove(u);if(e===ii)a.up.set(0,1,0),a.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)a.up.set(0,-1,0),a.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:a,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,l,u,d]=this.children,f=e.getRenderTarget(),c=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(a,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(a,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(a,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(a,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(a,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),a.texture.generateMipmaps=_,e.setRenderTarget(a,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(f,c,p),e.xr.enabled=g,a.texture.needsPMREMUpdate=!0}},Rf=class extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Au=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=MA.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function MA(){this._document.hidden===!1&&this.reset()}var Bg="\\[\\]\\.:\\/",wA=new RegExp("["+Bg+"]","g"),Og="[^"+Bg+"]",CA="[^"+Bg.replace("\\.","")+"]",bA=/((?:WC+[\/:])*)/.source.replace("WC",Og),IA=/(WCOD+)?/.source.replace("WCOD",CA),LA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Og),EA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Og),TA=new RegExp("^"+bA+IA+LA+EA+"$"),AA=["material","materials","bones","map"],gg=class{constructor(e,n,a){let i=a||Bt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,i)}getValue(e,n){this.bind();let a=this._targetGroup.nCachedObjects_,i=this._bindings[a];i!==void 0&&i.getValue(e,n)}setValue(e,n){let a=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=a.length;i!==r;++i)a[i].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}},Bt=class t{constructor(e,n,a){this.path=n,this.parsedPath=a||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,a):new t(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wA,"")}static parseTrackName(e){let n=TA.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},i=a.nodeName&&a.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=a.nodeName.substring(i+1);AA.indexOf(r)!==-1&&(a.nodeName=a.nodeName.substring(0,i),a.objectName=r)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){let a=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===n||o.uuid===n)return o;let l=a(o.children);if(l)return l}return null},i=a(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let a=this.resolvedProperty;for(let i=0,r=a.length;i!==r;++i)e[n++]=a[i]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let a=this.resolvedProperty;for(let i=0,r=a.length;i!==r;++i)a[i]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let a=this.resolvedProperty;for(let i=0,r=a.length;i!==r;++i)a[i]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let a=this.resolvedProperty;for(let i=0,r=a.length;i!==r;++i)a[i]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,a=n.objectName,i=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let u=n.objectIndex;switch(a){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(u!==void 0){if(e[u]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let s=e[i];if(s===void 0){let u=n.nodeName;Ve("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=gg;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tB=new Float32Array(1);var P_=new He,Ru=class{constructor(e,n,a=0,i=1/0){this.ray=new Lr(e,n),this.near=a,this.far=i,this.camera=null,this.layers=new Bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ve("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return P_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(P_),this}intersectObject(e,n=!0,a=[]){return xg(e,this,a,n),a.sort(D_),a}intersectObjects(e,n=!0,a=[]){for(let i=0,r=e.length;i<r;i++)xg(e[i],this,a,n);return a.sort(D_),a}};function D_(t,e){return t.distance-e.distance}function xg(t,e,n,a){let i=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(i=!1),i===!0&&a===!0){let r=t.children;for(let s=0,o=r.length;s<o;s++)xg(r[s],e,n,!0)}}var Xo=class{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos($e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vg=class t{static{t.prototype.isMatrix2=!0}constructor(e,n,a,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,i){let r=this.elements;return r[0]=e,r[2]=n,r[1]=a,r[3]=i,this}};var Pu=class extends ri{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function zg(t,e,n,a){let i=RA(a);switch(n){case Ag:return t*e;case Of:return t*e/i.components*i.byteLength;case zf:return t*e/i.components*i.byteLength;case zr:return t*e*2/i.components*i.byteLength;case Hf:return t*e*2/i.components*i.byteLength;case Rg:return t*e*3/i.components*i.byteLength;case Oa:return t*e*4/i.components*i.byteLength;case Vf:return t*e*4/i.components*i.byteLength;case Vu:case Gu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wu:case qu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wf:case Xf:return Math.max(t,16)*Math.max(e,8)/4;case Gf:case qf:return Math.max(t,8)*Math.max(e,8)/2;case Yf:case Kf:case jf:case $f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zf:case Xu:case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case th:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case uh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case fh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case hh:case ph:case mh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gh:case xh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yu:case vh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RA(t){switch(t){case ca:case Ig:return{byteLength:1,components:1};case Zo:case Lg:case un:return{byteLength:2,components:1};case Uf:case Bf:return{byteLength:2,components:4};case li:case Nf:case Ba:return{byteLength:4,components:1};case Eg:case Tg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function HS(){let t=null,e=!1,n=null,a=null;function i(r,s){a=t.requestAnimationFrame(i),n(r,s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(a=t.requestAnimationFrame(i),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function DA(t){let e=new WeakMap;function n(o,l){let u=o.array,d=o.usage,f=u.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,u,d),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function a(o,l,u){let d=l.array,f=l.updateRanges;if(t.bindBuffer(u,o),f.length===0)t.bufferSubData(u,0,d);else{f.sort((p,g)=>p.start-g.start);let c=0;for(let p=1;p<f.length;p++){let g=f[c],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++c,f[c]=_)}f.length=c+1;for(let p=0,g=f.length;p<g;p++){let _=f[p];t.bufferSubData(u,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,o,l),u.version=o.version}}return{get:i,remove:r,update:s}}var FA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,GA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,e1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,t1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,n1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,a1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,i1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,r1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c1="gl_FragColor = linearToOutputTexel( gl_FragColor );",d1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,M1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,I1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,L1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,P1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,U1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,aR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_R=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ER=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,FR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,WR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$R=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:FA,alphahash_pars_fragment:kA,alphamap_fragment:NA,alphamap_pars_fragment:UA,alphatest_fragment:BA,alphatest_pars_fragment:OA,aomap_fragment:zA,aomap_pars_fragment:HA,batching_pars_vertex:VA,batching_vertex:GA,begin_vertex:WA,beginnormal_vertex:qA,bsdfs:XA,iridescence_fragment:YA,bumpmap_pars_fragment:KA,clipping_planes_fragment:ZA,clipping_planes_pars_fragment:jA,clipping_planes_pars_vertex:$A,clipping_planes_vertex:JA,color_fragment:QA,color_pars_fragment:e1,color_pars_vertex:t1,color_vertex:n1,common:a1,cube_uv_reflection_fragment:i1,defaultnormal_vertex:r1,displacementmap_pars_vertex:s1,displacementmap_vertex:o1,emissivemap_fragment:l1,emissivemap_pars_fragment:u1,colorspace_fragment:c1,colorspace_pars_fragment:d1,envmap_fragment:f1,envmap_common_pars_fragment:h1,envmap_pars_fragment:p1,envmap_pars_vertex:m1,envmap_physical_pars_fragment:I1,envmap_vertex:g1,fog_vertex:x1,fog_pars_vertex:v1,fog_fragment:y1,fog_pars_fragment:_1,gradientmap_pars_fragment:S1,lightmap_pars_fragment:M1,lights_lambert_fragment:w1,lights_lambert_pars_fragment:C1,lights_pars_begin:b1,lights_toon_fragment:L1,lights_toon_pars_fragment:E1,lights_phong_fragment:T1,lights_phong_pars_fragment:A1,lights_physical_fragment:R1,lights_physical_pars_fragment:P1,lights_fragment_begin:D1,lights_fragment_maps:F1,lights_fragment_end:k1,lightprobes_pars_fragment:N1,logdepthbuf_fragment:U1,logdepthbuf_pars_fragment:B1,logdepthbuf_pars_vertex:O1,logdepthbuf_vertex:z1,map_fragment:H1,map_pars_fragment:V1,map_particle_fragment:G1,map_particle_pars_fragment:W1,metalnessmap_fragment:q1,metalnessmap_pars_fragment:X1,morphinstance_vertex:Y1,morphcolor_vertex:K1,morphnormal_vertex:Z1,morphtarget_pars_vertex:j1,morphtarget_vertex:$1,normal_fragment_begin:J1,normal_fragment_maps:Q1,normal_pars_fragment:eR,normal_pars_vertex:tR,normal_vertex:nR,normalmap_pars_fragment:aR,clearcoat_normal_fragment_begin:iR,clearcoat_normal_fragment_maps:rR,clearcoat_pars_fragment:sR,iridescence_pars_fragment:oR,opaque_fragment:lR,packing:uR,premultiplied_alpha_fragment:cR,project_vertex:dR,dithering_fragment:fR,dithering_pars_fragment:hR,roughnessmap_fragment:pR,roughnessmap_pars_fragment:mR,shadowmap_pars_fragment:gR,shadowmap_pars_vertex:xR,shadowmap_vertex:vR,shadowmask_pars_fragment:yR,skinbase_vertex:_R,skinning_pars_vertex:SR,skinning_vertex:MR,skinnormal_vertex:wR,specularmap_fragment:CR,specularmap_pars_fragment:bR,tonemapping_fragment:IR,tonemapping_pars_fragment:LR,transmission_fragment:ER,transmission_pars_fragment:TR,uv_pars_fragment:AR,uv_pars_vertex:RR,uv_vertex:PR,worldpos_vertex:DR,background_vert:FR,background_frag:kR,backgroundCube_vert:NR,backgroundCube_frag:UR,cube_vert:BR,cube_frag:OR,depth_vert:zR,depth_frag:HR,distance_vert:VR,distance_frag:GR,equirect_vert:WR,equirect_frag:qR,linedashed_vert:XR,linedashed_frag:YR,meshbasic_vert:KR,meshbasic_frag:ZR,meshlambert_vert:jR,meshlambert_frag:$R,meshmatcap_vert:JR,meshmatcap_frag:QR,meshnormal_vert:eP,meshnormal_frag:tP,meshphong_vert:nP,meshphong_frag:aP,meshphysical_vert:iP,meshphysical_frag:rP,meshtoon_vert:sP,meshtoon_frag:oP,points_vert:lP,points_frag:uP,shadow_vert:cP,shadow_frag:dP,sprite_vert:fP,sprite_frag:hP},he={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Ti={basic:{uniforms:qn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:qn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:qn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:qn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:qn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:qn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:qn([he.points,he.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:qn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:qn([he.common,he.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:qn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:qn([he.sprite,he.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:qn([he.common,he.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:qn([he.lights,he.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Ti.physical={uniforms:qn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Mh={r:0,b:0,g:0},pP=new He,VS=new Ge;VS.set(-1,0,0,0,1,0,0,0,1);function mP(t,e,n,a,i,r){let s=new Ie(0),o=i===!0?0:1,l,u,d=null,f=0,c=null;function p(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){let y=x.backgroundBlurriness>0;S=e.get(S,y)}return S}function g(x){let S=!1,y=p(x);y===null?m(s,o):y&&y.isColor&&(m(y,1),S=!0);let w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(x,S){let y=p(S);y&&(y.isCubeTexture||y.mapping===zu)?(u===void 0&&(u=new gt(new wa(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:Ps(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pP.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(VS),u.material.toneMapped=nt.getTransfer(y.colorSpace)!==ft,(d!==y||f!==y.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,c=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new gt(new Es(2,2),new Mt({name:"BackgroundMaterial",uniforms:Ps(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=nt.getTransfer(y.colorSpace)!==ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,c=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,S){x.getRGB(Mh,Ug(t)),n.buffers.color.setClear(Mh.r,Mh.g,Mh.b,S,r)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,S=1){s.set(x),o=S,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(s,o)},render:g,addToRenderList:_,dispose:h}}function gP(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),a={},i=c(null),r=i,s=!1;function o(P,k,z,R,U){let V=!1,H=f(P,R,z,k);r!==H&&(r=H,u(r.object)),V=p(P,R,z,U),V&&g(P,R,z,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,y(P,k,z,R),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function d(P){return t.deleteVertexArray(P)}function f(P,k,z,R){let U=R.wireframe===!0,V=a[k.id];V===void 0&&(V={},a[k.id]=V);let H=P.isInstancedMesh===!0?P.id:0,j=V[H];j===void 0&&(j={},V[H]=j);let X=j[z.id];X===void 0&&(X={},j[z.id]=X);let O=X[U];return O===void 0&&(O=c(l()),X[U]=O),O}function c(P){let k=[],z=[],R=[];for(let U=0;U<n;U++)k[U]=0,z[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:R,object:P,attributes:{},index:null}}function p(P,k,z,R){let U=r.attributes,V=k.attributes,H=0,j=z.getAttributes();for(let X in j)if(j[X].location>=0){let te=U[X],Te=V[X];if(Te===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(Te=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(Te=P.instanceColor)),te===void 0||te.attribute!==Te||Te&&te.data!==Te.data)return!0;H++}return r.attributesNum!==H||r.index!==R}function g(P,k,z,R){let U={},V=k.attributes,H=0,j=z.getAttributes();for(let X in j)if(j[X].location>=0){let te=V[X];te===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));let Te={};Te.attribute=te,te&&te.data&&(Te.data=te.data),U[X]=Te,H++}r.attributes=U,r.attributesNum=H,r.index=R}function _(){let P=r.newAttributes;for(let k=0,z=P.length;k<z;k++)P[k]=0}function m(P){h(P,0)}function h(P,k){let z=r.newAttributes,R=r.enabledAttributes,U=r.attributeDivisors;z[P]=1,R[P]===0&&(t.enableVertexAttribArray(P),R[P]=1),U[P]!==k&&(t.vertexAttribDivisor(P,k),U[P]=k)}function x(){let P=r.newAttributes,k=r.enabledAttributes;for(let z=0,R=k.length;z<R;z++)k[z]!==P[z]&&(t.disableVertexAttribArray(z),k[z]=0)}function S(P,k,z,R,U,V,H){H===!0?t.vertexAttribIPointer(P,k,z,U,V):t.vertexAttribPointer(P,k,z,R,U,V)}function y(P,k,z,R){_();let U=R.attributes,V=z.getAttributes(),H=k.defaultAttributeValues;for(let j in V){let X=V[j];if(X.location>=0){let O=U[j];if(O===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),O!==void 0){let te=O.normalized,Te=O.itemSize,ye=e.get(O);if(ye===void 0)continue;let qe=ye.buffer,ke=ye.type,ze=ye.bytesPerElement,K=ke===t.INT||ke===t.UNSIGNED_INT||O.gpuType===Nf;if(O.isInterleavedBufferAttribute){let Q=O.data,se=Q.stride,Xe=O.offset;if(Q.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)h(X.location+ge,Q.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let ge=0;ge<X.locationSize;ge++)S(X.location+ge,Te/X.locationSize,ke,te,se*ze,(Xe+Te/X.locationSize*ge)*ze,K)}else{if(O.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)h(X.location+Q,O.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let Q=0;Q<X.locationSize;Q++)S(X.location+Q,Te/X.locationSize,ke,te,Te*ze,Te/X.locationSize*Q*ze,K)}}else if(H!==void 0){let te=H[j];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(X.location,te);break;case 3:t.vertexAttrib3fv(X.location,te);break;case 4:t.vertexAttrib4fv(X.location,te);break;default:t.vertexAttrib1fv(X.location,te)}}}}x()}function w(){I();for(let P in a){let k=a[P];for(let z in k){let R=k[z];for(let U in R){let V=R[U];for(let H in V)d(V[H].object),delete V[H];delete R[U]}}delete a[P]}}function C(P){if(a[P.id]===void 0)return;let k=a[P.id];for(let z in k){let R=k[z];for(let U in R){let V=R[U];for(let H in V)d(V[H].object),delete V[H];delete R[U]}}delete a[P.id]}function L(P){for(let k in a){let z=a[k];for(let R in z){let U=z[R];if(U[P.id]===void 0)continue;let V=U[P.id];for(let H in V)d(V[H].object),delete V[H];delete U[P.id]}}}function v(P){for(let k in a){let z=a[k],R=P.isInstancedMesh===!0?P.id:0,U=z[R];if(U!==void 0){for(let V in U){let H=U[V];for(let j in H)d(H[j].object),delete H[j];delete U[V]}delete z[R],Object.keys(z).length===0&&delete a[k]}}}function I(){A(),s=!0,r!==i&&(r=i,u(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfObject:v,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function xP(t,e,n){let a;function i(l){a=l}function r(l,u){t.drawArrays(a,l,u),n.update(u,a,1)}function s(l,u,d){d!==0&&(t.drawArraysInstanced(a,l,u,d),n.update(u,a,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,l,0,u,0,d);let c=0;for(let p=0;p<d;p++)c+=u[p];n.update(c,a,1)}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function vP(t,e,n,a){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){return!(L!==Oa&&a.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let v=L===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ca&&L!==Ba&&!v&&a.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp",d=l(u);d!==u&&(Be("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let f=n.logarithmicDepthBuffer===!0,c=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&c===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:c,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,maxSamples:w,samples:C}}function yP(t){let e=this,n=null,a=0,i=!1,r=!1,s=new Qn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,c){let p=f.length!==0||c||a!==0||i;return i=c,a=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,c){n=d(f,c,0)},this.setState=function(f,c,p){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!i||g===null||g.length===0||r&&!m)r?d(null):u();else{let x=r?0:a,S=x*4,y=h.clippingState||null;l.value=y,y=d(g,c,S,p);for(let w=0;w!==S;++w)y[w]=n[w];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function d(f,c,p,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let h=p+_*4,x=c.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,y=p;S!==_;++S,y+=4)s.copy(f[S]).applyMatrix4(x,o),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Qo=4,_P=6,SP=20,MP=256,Ku=new Dr,_S=new Ie,Hg=null,Vg=0,Gg=0,Wg=!1,wP=new T,Ds=new T,tl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,i=100,r={}){let{size:s=256,position:o=wP}=r;Hg=this._renderer.getRenderTarget(),Vg=this._renderer.getActiveCubeFace(),Gg=this._renderer.getActiveMipmapLevel(),Wg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,a,i,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=MS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hg,Vg,Gg),this._renderer.xr.enabled=Wg,e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ur||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hg=this._renderer.getRenderTarget(),Vg=this._renderer.getActiveCubeFace(),Gg=this._renderer.getActiveMipmapLevel(),Wg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:on,minFilter:on,generateMipmaps:!1,type:un,format:Oa,colorSpace:lu,depthBuffer:!1},i=SS(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=SS(e,n,a);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=CP(r)),this._blurMaterial=IP(r,e,n),this._ggxMaterial=bP(r,e,n)}return i}_compileMaterial(e){let n=new gt(new Wt,e);this._renderer.compile(n,Ku)}_sceneToCubeUV(e,n,a,i,r){let l=new Pn(90,1,n,a),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,c=f.autoClear,p=f.toneMapping;f.getClearColor(_S),f.toneMapping=oi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new wa,new ua({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,h=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,h=!0):(m.color.copy(_S),h=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,u[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[S],r.y,r.z)):y===1?(l.up.set(0,0,u[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[S],r.z)):(l.up.set(0,u[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[S]));let w=this._cubeSize;Jo(i,y*w,S>2?w:0,w,w),f.setRenderTarget(i),h&&f.render(_,l),f.render(e,l)}f.toneMapping=p,f.autoClear=c,e.background=x}_textureToCubeUV(e,n){let a=this._renderer,i=e.mapping===Ur||e.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=MS());let r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Jo(n,0,0,3*l,2*l),a.setRenderTarget(n),a.render(s,Ku)}_applyPMREM(e){let n=this._renderer,a=n.autoClear;n.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=a}_applyGGXFilter(e,n,a){let i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[a];o.material=s;let l=s.uniforms,u=a/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),f=Math.sqrt(u*u-d*d),c=u*1.25,p=f*c,{_lodMax:g}=this,_=this._sizeLods[a],m=3*_*(a>g-Qo?a-g+Qo:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Jo(r,m,h,3*_,2*_),i.setRenderTarget(r),i.render(o,Ku),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-a,Jo(e,m,h,3*_,2*_),i.setRenderTarget(e),i.render(o,Ku)}_blur(e,n,a,i){let r=this._pingPongRenderTarget,s=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,n,a,s),this._blurPass(r,e,a,a,s)}_blurPass(e,n,a,i,r){let s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-a;let d=this._sizeLods[i],f=3*d*(i>this._lodMax-Qo?i-this._lodMax+Qo:0),c=4*(this._cubeSize-d);Jo(n,f,c,3*d,2*d),s.setRenderTarget(n),s.render(l,Ku)}};function CP(t){let e=[],n=[],a=t,i=t-Qo+1+_P;for(let r=0;r<i;r++){let s=Math.pow(2,a);e.push(s);let o=1/(s-2),l=-o,u=1+o,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,c=6,p=3,g=new Float32Array(p*c*f),_=new Float32Array(p*c*f);for(let h=0;h<f;h++){let x=h%3*2/3-1,S=h>2?0:-1,y=[x,S,0,x+2/3,S,0,x+2/3,S+1,0,x,S,0,x+2/3,S+1,0,x,S+1,0];g.set(y,p*c*h);for(let w=0;w<c;w++){let C=d[w*2]*2-1,L=d[w*2+1]*2-1;h===0?Ds.set(1,L,C):h===1?Ds.set(-C,1,-L):h===2?Ds.set(-C,L,1):h===3?Ds.set(-1,L,-C):h===4?Ds.set(-C,-1,L):Ds.set(C,L,-1),Ds.toArray(_,(h*c+w)*p)}}let m=new Wt;m.setAttribute("position",new ht(g,p)),m.setAttribute("outputDirection",new ht(_,p)),n.push(new gt(m,null)),a>Qo&&a--}return{lodMeshes:n,sizeLods:e}}function SS(t,e,n){let a=new Ot(t,e,n);return a.texture.mapping=zu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Jo(t,e,n,a,i){t.viewport.set(e,n,a,i),t.scissor.set(e,n,a,i)}function bP(t,e,n){return new Mt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ih(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function IP(t,e,n){return new Mt({name:"SphericalGaussianBlur",defines:{SAMPLES:SP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ih(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function MS(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function wS(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Ih(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ch=class extends Ot{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let a={width:e,height:e,depth:1},i=[a,a,a,a,a,a];this.texture=new xu(i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new wa(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:Ps(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Fn,blending:Ua});r.uniforms.tEquirect.value=n;let s=new gt(i,r),o=n.minFilter;return n.minFilter===Br&&(n.minFilter=on),new Af(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,a=!0,i=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,a,i);e.setRenderTarget(r)}};function LP(t){let e=new WeakMap,n=new WeakMap,a=null;function i(c,p=!1){return c==null?null:p?s(c):r(c)}function r(c){if(c&&c.isTexture){let p=c.mapping;if(p===Df||p===Ff)if(e.has(c)){let g=e.get(c).texture;return o(g,c.mapping)}else{let g=c.image;if(g&&g.height>0){let _=new Ch(g.height);return _.fromEquirectangularTexture(t,c),e.set(c,_),c.addEventListener("dispose",u),o(_.texture,c.mapping)}else return null}}return c}function s(c){if(c&&c.isTexture){let p=c.mapping,g=p===Df||p===Ff,_=p===Ur||p===Rs;if(g||_){let m=n.get(c),h=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==h)return a===null&&(a=new tl(t)),m=g?a.fromEquirectangular(c,m):a.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,n.set(c,m),m.texture;if(m!==void 0)return m.texture;{let x=c.image;return g&&x&&x.height>0||_&&x&&l(x)?(a===null&&(a=new tl(t)),m=g?a.fromEquirectangular(c):a.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,n.set(c,m),c.addEventListener("dispose",d),m.texture):null}}}return c}function o(c,p){return p===Df?c.mapping=Ur:p===Ff&&(c.mapping=Rs),c}function l(c){let p=0,g=6;for(let _=0;_<g;_++)c[_]!==void 0&&p++;return p===g}function u(c){let p=c.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(c){let p=c.target;p.removeEventListener("dispose",d);let g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:i,dispose:f}}function EP(t){let e={};function n(a){if(e[a]!==void 0)return e[a];let i=t.getExtension(a);return e[a]=i,i}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){let i=n(a);return i===null&&bs("WebGLRenderer: "+a+" extension not supported."),i}}}function TP(t,e,n,a){let i={},r=new WeakMap;function s(f){let c=f.target;c.index!==null&&e.remove(c.index);for(let g in c.attributes)e.remove(c.attributes[g]);c.removeEventListener("dispose",s),delete i[c.id];let p=r.get(c);p&&(e.remove(p),r.delete(c)),a.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function o(f,c){return i[c.id]===!0||(c.addEventListener("dispose",s),i[c.id]=!0,n.memory.geometries++),c}function l(f){let c=f.attributes;for(let p in c)e.update(c[p],t.ARRAY_BUFFER)}function u(f){let c=[],p=f.index,g=f.attributes.position,_=0;if(g===void 0)return;if(p!==null){let x=p.array;_=p.version;for(let S=0,y=x.length;S<y;S+=3){let w=x[S+0],C=x[S+1],L=x[S+2];c.push(w,C,C,L,L,w)}}else{let x=g.array;_=g.version;for(let S=0,y=x.length/3-1;S<y;S+=3){let w=S+0,C=S+1,L=S+2;c.push(w,C,C,L,L,w)}}let m=new(g.count>=65535?hu:fu)(c,1);m.version=_;let h=r.get(f);h&&e.remove(h),r.set(f,m)}function d(f){let c=r.get(f);if(c){let p=f.index;p!==null&&c.version<p.version&&u(f)}else u(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function AP(t,e,n){let a;function i(f){a=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,c){t.drawElements(a,c,r,f*s),n.update(c,a,1)}function u(f,c,p){p!==0&&(t.drawElementsInstanced(a,c,r,f*s,p),n.update(c,a,p))}function d(f,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,c,0,r,f,0,p);let _=0;for(let m=0;m<p;m++)_+=c[m];n.update(_,a,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function RP(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",s);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:a}}function PP(t,e,n){let a=new WeakMap,i=new Gt;function r(s,o,l){let u=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0,c=a.get(o);if(c===void 0||c.count!==f){let I=function(){L.dispose(),a.delete(o),o.removeEventListener("dispose",I)};c!==void 0&&c.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let y=o.attributes.position.count*S,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*w*4*f),L=new du(C,y,w,f);L.type=Ba,L.needsUpdate=!0;let v=S*4;for(let A=0;A<f;A++){let P=m[A],k=h[A],z=x[A],R=y*w*4*A;for(let U=0;U<P.count;U++){let V=U*v;p===!0&&(i.fromBufferAttribute(P,U),C[R+V+0]=i.x,C[R+V+1]=i.y,C[R+V+2]=i.z,C[R+V+3]=0),g===!0&&(i.fromBufferAttribute(k,U),C[R+V+4]=i.x,C[R+V+5]=i.y,C[R+V+6]=i.z,C[R+V+7]=0),_===!0&&(i.fromBufferAttribute(z,U),C[R+V+8]=i.x,C[R+V+9]=i.y,C[R+V+10]=i.z,C[R+V+11]=z.itemSize===4?i.w:1)}}c={count:f,texture:L,size:new ae(y,w)},a.set(o,c),o.addEventListener("dispose",I)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:r}}function DP(t,e,n,a,i){let r=new WeakMap;function s(u){let d=i.render.frame,f=u.geometry,c=e.get(u,f);if(r.get(c)!==d&&(e.update(c),r.set(c,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==d&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){let p=u.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return c}function o(){r=new WeakMap}function l(u){let d=u.target;d.removeEventListener("dispose",l),a.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:o}}var FP={[Fu]:"LINEAR_TONE_MAPPING",[ku]:"REINHARD_TONE_MAPPING",[Nu]:"CINEON_TONE_MAPPING",[As]:"ACES_FILMIC_TONE_MAPPING",[Bu]:"AGX_TONE_MAPPING",[Ou]:"NEUTRAL_TONE_MAPPING",[Uu]:"CUSTOM_TONE_MAPPING"};function kP(t,e,n,a,i,r){let s=new Ot(e,n,{type:t,depthBuffer:i,stencilBuffer:r,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,u=new Wt;u.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new St([0,2,0,0,2,0],2));let d=new Vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new gt(u,d),c=new Dr(-1,1,1,-1,0,1),p=null,g=null,_=!1,m,h=null,x=[],S=!1;this.setSize=function(y,w){s.setSize(y,w),o!==null&&o.setSize(y,w),l!==null&&l.setSize(y,w);for(let C=0;C<x.length;C++){let L=x[C];L.setSize&&L.setSize(y,w)}},this.setEffects=function(y){x=y,S=x.length>0&&x[0].isRenderPass===!0;let w=s.width,C=s.height;x.length>0&&o===null&&(o=new Ot(w,C,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new Ot(w,C,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<x.length;L++){let v=x[L];v.setSize&&v.setSize(w,C)}},this.begin=function(y,w){if(_||y.toneMapping===oi&&x.length===0)return!1;if(h=w,w!==null){let C=w.width,L=w.height;(s.width!==C||s.height!==L)&&this.setSize(C,L)}return S===!1&&y.setRenderTarget(s),m=y.toneMapping,y.toneMapping=oi,!0},this.hasRenderPass=function(){return S},this.end=function(y,w){y.toneMapping=m,_=!0;let C=s,L=o;for(let v=0;v<x.length;v++){let I=x[v];I.enabled!==!1&&(I.render(y,L,C,w),I.needsSwap!==!1&&(C=L,L=L===o?l:o))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,d.defines={},nt.getTransfer(p)===ft&&(d.defines.SRGB_TRANSFER="");let v=FP[g];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=C.texture,y.setRenderTarget(h),y.render(f,c),h=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var GS=new ta,Yg=new Er(1,1),WS=new du,qS=new uf,XS=new xu,CS=[],bS=[],IS=new Float32Array(16),LS=new Float32Array(9),ES=new Float32Array(4);function nl(t,e,n){let a=t[0];if(a<=0||a>0)return t;let i=e*n,r=CS[i];if(r===void 0&&(r=new Float32Array(i),CS[i]=r),e!==0){a.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function hn(t,e){if(t.length!==e.length)return!1;for(let n=0,a=t.length;n<a;n++)if(t[n]!==e[n])return!1;return!0}function pn(t,e){for(let n=0,a=e.length;n<a;n++)t[n]=e[n]}function Lh(t,e){let n=bS[e];n===void 0&&(n=new Int32Array(e),bS[e]=n);for(let a=0;a!==e;++a)n[a]=t.allocateTextureUnit();return n}function NP(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UP(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;t.uniform2fv(this.addr,e),pn(n,e)}}function BP(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(hn(n,e))return;t.uniform3fv(this.addr,e),pn(n,e)}}function OP(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;t.uniform4fv(this.addr,e),pn(n,e)}}function zP(t,e){let n=this.cache,a=e.elements;if(a===void 0){if(hn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),pn(n,e)}else{if(hn(n,a))return;ES.set(a),t.uniformMatrix2fv(this.addr,!1,ES),pn(n,a)}}function HP(t,e){let n=this.cache,a=e.elements;if(a===void 0){if(hn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),pn(n,e)}else{if(hn(n,a))return;LS.set(a),t.uniformMatrix3fv(this.addr,!1,LS),pn(n,a)}}function VP(t,e){let n=this.cache,a=e.elements;if(a===void 0){if(hn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),pn(n,e)}else{if(hn(n,a))return;IS.set(a),t.uniformMatrix4fv(this.addr,!1,IS),pn(n,a)}}function GP(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WP(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;t.uniform2iv(this.addr,e),pn(n,e)}}function qP(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(hn(n,e))return;t.uniform3iv(this.addr,e),pn(n,e)}}function XP(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;t.uniform4iv(this.addr,e),pn(n,e)}}function YP(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function KP(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;t.uniform2uiv(this.addr,e),pn(n,e)}}function ZP(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(hn(n,e))return;t.uniform3uiv(this.addr,e),pn(n,e)}}function jP(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;t.uniform4uiv(this.addr,e),pn(n,e)}}function $P(t,e,n){let a=this.cache,i=n.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i);let r;this.type===t.SAMPLER_2D_SHADOW?(Yg.compareFunction=n.isReversedDepthBuffer()?Sh:_h,r=Yg):r=GS,n.setTexture2D(e||r,i)}function JP(t,e,n){let a=this.cache,i=n.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i),n.setTexture3D(e||qS,i)}function QP(t,e,n){let a=this.cache,i=n.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i),n.setTextureCube(e||XS,i)}function e2(t,e,n){let a=this.cache,i=n.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i),n.setTexture2DArray(e||WS,i)}function t2(t){switch(t){case 5126:return NP;case 35664:return UP;case 35665:return BP;case 35666:return OP;case 35674:return zP;case 35675:return HP;case 35676:return VP;case 5124:case 35670:return GP;case 35667:case 35671:return WP;case 35668:case 35672:return qP;case 35669:case 35673:return XP;case 5125:return YP;case 36294:return KP;case 36295:return ZP;case 36296:return jP;case 35678:case 36198:case 36298:case 36306:case 35682:return $P;case 35679:case 36299:case 36307:return JP;case 35680:case 36300:case 36308:case 36293:return QP;case 36289:case 36303:case 36311:case 36292:return e2}}function n2(t,e){t.uniform1fv(this.addr,e)}function a2(t,e){let n=nl(e,this.size,2);t.uniform2fv(this.addr,n)}function i2(t,e){let n=nl(e,this.size,3);t.uniform3fv(this.addr,n)}function r2(t,e){let n=nl(e,this.size,4);t.uniform4fv(this.addr,n)}function s2(t,e){let n=nl(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function o2(t,e){let n=nl(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function l2(t,e){let n=nl(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function u2(t,e){t.uniform1iv(this.addr,e)}function c2(t,e){t.uniform2iv(this.addr,e)}function d2(t,e){t.uniform3iv(this.addr,e)}function f2(t,e){t.uniform4iv(this.addr,e)}function h2(t,e){t.uniform1uiv(this.addr,e)}function p2(t,e){t.uniform2uiv(this.addr,e)}function m2(t,e){t.uniform3uiv(this.addr,e)}function g2(t,e){t.uniform4uiv(this.addr,e)}function x2(t,e,n){let a=this.cache,i=e.length,r=Lh(n,i);hn(a,r)||(t.uniform1iv(this.addr,r),pn(a,r));let s;this.type===t.SAMPLER_2D_SHADOW?s=Yg:s=GS;for(let o=0;o!==i;++o)n.setTexture2D(e[o]||s,r[o])}function v2(t,e,n){let a=this.cache,i=e.length,r=Lh(n,i);hn(a,r)||(t.uniform1iv(this.addr,r),pn(a,r));for(let s=0;s!==i;++s)n.setTexture3D(e[s]||qS,r[s])}function y2(t,e,n){let a=this.cache,i=e.length,r=Lh(n,i);hn(a,r)||(t.uniform1iv(this.addr,r),pn(a,r));for(let s=0;s!==i;++s)n.setTextureCube(e[s]||XS,r[s])}function _2(t,e,n){let a=this.cache,i=e.length,r=Lh(n,i);hn(a,r)||(t.uniform1iv(this.addr,r),pn(a,r));for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||WS,r[s])}function S2(t){switch(t){case 5126:return n2;case 35664:return a2;case 35665:return i2;case 35666:return r2;case 35674:return s2;case 35675:return o2;case 35676:return l2;case 5124:case 35670:return u2;case 35667:case 35671:return c2;case 35668:case 35672:return d2;case 35669:case 35673:return f2;case 5125:return h2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return x2;case 35679:case 36299:case 36307:return v2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return _2}}var Kg=class{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=t2(n.type)}},Zg=class{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=S2(n.type)}},jg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(e,n[o.id],a)}}},qg=/(\w+)(\])?(\[|\.)?/g;function TS(t,e){t.seq.push(e),t.map[e.id]=e}function M2(t,e,n){let a=t.name,i=a.length;for(qg.lastIndex=0;;){let r=qg.exec(a),s=qg.lastIndex,o=r[1],l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===i){TS(n,u===void 0?new Kg(o,t,e):new Zg(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new jg(o),TS(n,f)),n=f}}}var el=class{constructor(e,n){this.seq=[],this.map={};let a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){let o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);M2(o,l,this)}let i=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(e,n,a,i){let r=this.map[n];r!==void 0&&r.setValue(e,a,i)}setOptional(e,n,a){let i=n[a];i!==void 0&&this.setValue(e,a,i)}static upload(e,n,a,i){for(let r=0,s=n.length;r!==s;++r){let o=n[r],l=a[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,n){let a=[];for(let i=0,r=e.length;i!==r;++i){let s=e[i];s.id in n&&a.push(s)}return a}};function AS(t,e,n){let a=t.createShader(e);return t.shaderSource(a,n),t.compileShader(a),a}var w2=37297,C2=0;function b2(t,e){let n=t.split(`
`),a=[],i=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=i;s<r;s++){let o=s+1;a.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return a.join(`
`)}var RS=new Ge;function I2(t){nt._getMatrix(RS,nt.workingColorSpace,t);let e=`mat3( ${RS.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case uu:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function PS(t,e,n){let a=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(a&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+b2(t.getShaderSource(e),o)}else return r}function L2(t,e){let n=I2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var E2={[Fu]:"Linear",[ku]:"Reinhard",[Nu]:"Cineon",[As]:"ACESFilmic",[Bu]:"AgX",[Ou]:"Neutral",[Uu]:"Custom"};function T2(t,e){let n=E2[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var wh=new T;function A2(){nt.getLuminanceCoefficients(wh);let t=wh.x.toFixed(4),e=wh.y.toFixed(4),n=wh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ju).join(`
`)}function P2(t){let e=[];for(let n in t){let a=t[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function D2(t,e){let n={},a=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<a;i++){let r=t.getActiveAttrib(e,i),s=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function ju(t){return t!==""}function DS(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function FS(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var F2=/^[ \t]*#include +<([\w\d./]+)>/gm;function $g(t){return t.replace(F2,N2)}var k2=new Map;function N2(t,e){let n=Qe[e];if(n===void 0){let a=k2.get(e);if(a!==void 0)n=Qe[a],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $g(n)}var U2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kS(t){return t.replace(U2,B2)}function B2(t,e,n,a){let i="";for(let r=parseInt(e);r<parseInt(n);r++)i+=a.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function NS(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var O2={[Du]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function z2(t){return O2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H2={[Ur]:"ENVMAP_TYPE_CUBE",[Rs]:"ENVMAP_TYPE_CUBE",[zu]:"ENVMAP_TYPE_CUBE_UV"};function V2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":H2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var G2={[Rs]:"ENVMAP_MODE_REFRACTION"};function W2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":G2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var q2={[Cg]:"ENVMAP_BLENDING_MULTIPLY",[eS]:"ENVMAP_BLENDING_MIX",[tS]:"ENVMAP_BLENDING_ADD"};function X2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":q2[t.combine]||"ENVMAP_BLENDING_NONE"}function Y2(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function K2(t,e,n,a){let i=t.getContext(),r=n.defines,s=n.vertexShader,o=n.fragmentShader,l=z2(n),u=V2(n),d=W2(n),f=X2(n),c=Y2(n),p=R2(n),g=P2(r),_=i.createProgram(),m,h,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ju).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ju).join(`
`),h.length>0&&(h+=`
`)):(m=[NS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ju).join(`
`),h=[NS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?Qe.tonemapping_pars_fragment:"",n.toneMapping!==oi?T2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,L2("linearToOutputTexel",n.outputColorSpace),A2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ju).join(`
`)),s=$g(s),s=DS(s,n),s=FS(s,n),o=$g(o),o=DS(o,n),o=FS(o,n),s=kS(s),o=kS(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=x+m+s,y=x+h+o,w=AS(i,i.VERTEX_SHADER,S),C=AS(i,i.FRAGMENT_SHADER,y);i.attachShader(_,w),i.attachShader(_,C),n.index0AttributeName!==void 0?i.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function L(P){if(t.debug.checkShaderErrors){let k=i.getProgramInfoLog(_)||"",z=i.getShaderInfoLog(w)||"",R=i.getShaderInfoLog(C)||"",U=k.trim(),V=z.trim(),H=R.trim(),j=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,_,w,C);else{let O=PS(i,w,"vertex"),te=PS(i,C,"fragment");Ve("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+O+`
`+te)}else U!==""?Be("WebGLProgram: Program Info Log:",U):(V===""||H==="")&&(X=!1);X&&(P.diagnostics={runnable:j,programLog:U,vertexShader:{log:V,prefix:m},fragmentShader:{log:H,prefix:h}})}i.deleteShader(w),i.deleteShader(C),v=new el(i,_),I=D2(i,_)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let I;this.getAttributes=function(){return I===void 0&&L(this),I};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(_,w2)),A},this.destroy=function(){a.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=C2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=C,this}var Z2=0,Jg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){let i=this._getShaderCacheForMaterial(e);return i.has(n)===!1&&(i.add(n),n.usedTimes++),i.has(a)===!1&&(i.add(a),a.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){let n=this.shaderCache,a=n.get(e);return a===void 0&&(a=new Qg(e),n.set(e,a)),a}},Qg=class{constructor(e){this.id=Z2++,this.code=e,this.usedTimes=0}};function j2(t){return t===zr||t===Xu||t===Yu}function $2(t,e,n,a,i,r){let s=new Bo,o=new Jg,l=new Set,u=[],d=new Map,f=a.logarithmicDepthBuffer,c=a.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,I,A,P,k,z){let R=P.fog,U=k.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||V,H),X=j&&j.mapping===zu?j.image.height:null,O=p[v.type];v.precision!==null&&(c=a.getMaxPrecision(v.precision),c!==v.precision&&Be("WebGLProgram.getParameters:",v.precision,"not supported, using",c,"instead."));let te=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Te=te!==void 0?te.length:0,ye=0;U.morphAttributes.position!==void 0&&(ye=1),U.morphAttributes.normal!==void 0&&(ye=2),U.morphAttributes.color!==void 0&&(ye=3);let qe,ke,ze,K;if(O){let Dt=Ti[O];qe=Dt.vertexShader,ke=Dt.fragmentShader}else{qe=v.vertexShader,ke=v.fragmentShader;let Dt=o.getVertexShaderStage(v),yt=o.getFragmentShaderStage(v);o.update(v,Dt,yt),ze=Dt.id,K=yt.id}let Q=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),Xe=k.isInstancedMesh===!0,ge=k.isBatchedMesh===!0,Ke=!!v.map,Yt=!!v.matcap,Ze=!!j,dt=!!v.aoMap,Pt=!!v.lightMap,rt=!!v.bumpMap&&v.wireframe===!1,Vt=!!v.normalMap,wn=!!v.displacementMap,la=!!v.emissiveMap,Kt=!!v.metalnessMap,an=!!v.roughnessMap,N=v.anisotropy>0,Hn=v.clearcoat>0,bt=v.dispersion>0,E=v.retroreflectivity>0,M=v.iridescence>0,B=v.sheen>0,q=v.transmission>0,Z=N&&!!v.anisotropyMap,re=Hn&&!!v.clearcoatMap,oe=Hn&&!!v.clearcoatNormalMap,$=Hn&&!!v.clearcoatRoughnessMap,ee=M&&!!v.iridescenceMap,le=M&&!!v.iridescenceThicknessMap,De=B&&!!v.sheenColorMap,fe=B&&!!v.sheenRoughnessMap,ue=!!v.specularMap,Fe=!!v.specularColorMap,Ue=!!v.specularIntensityMap,je=q&&!!v.transmissionMap,F=q&&!!v.thicknessMap,ce=!!v.gradientMap,J=!!v.alphaMap,de=v.alphaTest>0,xe=!!v.alphaHash,ne=!!v.extensions,Ne=oi;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ne=t.toneMapping);let Ae={shaderID:O,shaderType:v.type,shaderName:v.name,vertexShader:qe,fragmentShader:ke,defines:v.defines,customVertexShaderID:ze,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:c,batching:ge,batchingColor:ge&&k._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&k.instanceColor!==null,instancingMorph:Xe&&k.morphTexture!==null,outputColorSpace:Q===null?t.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ke,matcap:Yt,envMap:Ze,envMapMode:Ze&&j.mapping,envMapCubeUVHeight:X,aoMap:dt,lightMap:Pt,bumpMap:rt,normalMap:Vt,displacementMap:wn,emissiveMap:la,normalMapObjectSpace:Vt&&v.normalMapType===iS,normalMapTangentSpace:Vt&&v.normalMapType===yh,packedNormalMap:Vt&&v.normalMapType===yh&&j2(v.normalMap.format),metalnessMap:Kt,roughnessMap:an,anisotropy:N,anisotropyMap:Z,clearcoat:Hn,clearcoatMap:re,clearcoatNormalMap:oe,clearcoatRoughnessMap:$,dispersion:bt,retroreflection:E,iridescence:M,iridescenceMap:ee,iridescenceThicknessMap:le,sheen:B,sheenColorMap:De,sheenRoughnessMap:fe,specularMap:ue,specularColorMap:Fe,specularIntensityMap:Ue,transmission:q,transmissionMap:je,thicknessMap:F,gradientMap:ce,opaque:v.transparent===!1&&v.blending===Ko&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:xe,combine:v.combine,mapUv:Ke&&g(v.map.channel),aoMapUv:dt&&g(v.aoMap.channel),lightMapUv:Pt&&g(v.lightMap.channel),bumpMapUv:rt&&g(v.bumpMap.channel),normalMapUv:Vt&&g(v.normalMap.channel),displacementMapUv:wn&&g(v.displacementMap.channel),emissiveMapUv:la&&g(v.emissiveMap.channel),metalnessMapUv:Kt&&g(v.metalnessMap.channel),roughnessMapUv:an&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:re&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(v.sheenRoughnessMap.channel),specularMapUv:ue&&g(v.specularMap.channel),specularColorMapUv:Fe&&g(v.specularColorMap.channel),specularIntensityMapUv:Ue&&g(v.specularIntensityMap.channel),transmissionMapUv:je&&g(v.transmissionMap.channel),thicknessMapUv:F&&g(v.thicknessMap.channel),alphaMapUv:J&&g(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Vt||N),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!U.attributes.uv&&(Ke||J),fog:!!R,useFog:v.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&Vt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:se,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ye,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ke&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:la&&v.emissiveMap.isVideoTexture===!0&&nt.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===fn,flipSided:v.side===Fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function m(v){let I=[];if(v.shaderID?I.push(v.shaderID):(I.push(v.customVertexShaderID),I.push(v.customFragmentShaderID)),v.defines!==void 0)for(let A in v.defines)I.push(A),I.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(h(I,v),x(I,v),I.push(t.outputColorSpace)),I.push(v.customProgramCacheKey),I.join()}function h(v,I){v.push(I.precision),v.push(I.outputColorSpace),v.push(I.envMapMode),v.push(I.envMapCubeUVHeight),v.push(I.mapUv),v.push(I.alphaMapUv),v.push(I.lightMapUv),v.push(I.aoMapUv),v.push(I.bumpMapUv),v.push(I.normalMapUv),v.push(I.displacementMapUv),v.push(I.emissiveMapUv),v.push(I.metalnessMapUv),v.push(I.roughnessMapUv),v.push(I.anisotropyMapUv),v.push(I.clearcoatMapUv),v.push(I.clearcoatNormalMapUv),v.push(I.clearcoatRoughnessMapUv),v.push(I.iridescenceMapUv),v.push(I.iridescenceThicknessMapUv),v.push(I.sheenColorMapUv),v.push(I.sheenRoughnessMapUv),v.push(I.specularMapUv),v.push(I.specularColorMapUv),v.push(I.specularIntensityMapUv),v.push(I.transmissionMapUv),v.push(I.thicknessMapUv),v.push(I.combine),v.push(I.fogExp2),v.push(I.sizeAttenuation),v.push(I.morphTargetsCount),v.push(I.morphAttributeCount),v.push(I.numSunLights),v.push(I.numDirLights),v.push(I.numPointLights),v.push(I.numSpotLights),v.push(I.numSpotLightMaps),v.push(I.numHemiLights),v.push(I.numRectAreaLights),v.push(I.numSunLightShadows),v.push(I.numDirLightShadows),v.push(I.numPointLightShadows),v.push(I.numSpotLightShadows),v.push(I.numSpotLightShadowsWithMaps),v.push(I.numLightProbes),v.push(I.shadowMapType),v.push(I.toneMapping),v.push(I.numClippingPlanes),v.push(I.numClipIntersection),v.push(I.depthPacking)}function x(v,I){s.disableAll(),I.instancing&&s.enable(0),I.instancingColor&&s.enable(1),I.instancingMorph&&s.enable(2),I.matcap&&s.enable(3),I.envMap&&s.enable(4),I.normalMapObjectSpace&&s.enable(5),I.normalMapTangentSpace&&s.enable(6),I.clearcoat&&s.enable(7),I.iridescence&&s.enable(8),I.alphaTest&&s.enable(9),I.vertexColors&&s.enable(10),I.vertexAlphas&&s.enable(11),I.vertexUv1s&&s.enable(12),I.vertexUv2s&&s.enable(13),I.vertexUv3s&&s.enable(14),I.vertexTangents&&s.enable(15),I.anisotropy&&s.enable(16),I.alphaHash&&s.enable(17),I.batching&&s.enable(18),I.dispersion&&s.enable(19),I.retroreflection&&s.enable(24),I.batchingColor&&s.enable(20),I.gradientMap&&s.enable(21),I.packedNormalMap&&s.enable(22),I.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),I.fog&&s.enable(0),I.useFog&&s.enable(1),I.flatShading&&s.enable(2),I.logarithmicDepthBuffer&&s.enable(3),I.reversedDepthBuffer&&s.enable(4),I.skinning&&s.enable(5),I.morphTargets&&s.enable(6),I.morphNormals&&s.enable(7),I.morphColors&&s.enable(8),I.premultipliedAlpha&&s.enable(9),I.shadowMapEnabled&&s.enable(10),I.doubleSided&&s.enable(11),I.flipSided&&s.enable(12),I.useDepthPacking&&s.enable(13),I.dithering&&s.enable(14),I.transmission&&s.enable(15),I.sheen&&s.enable(16),I.opaque&&s.enable(17),I.pointsUvs&&s.enable(18),I.decodeVideoTexture&&s.enable(19),I.decodeVideoTextureEmissive&&s.enable(20),I.alphaToCoverage&&s.enable(21),I.numLightProbeGrids>0&&s.enable(22),I.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function S(v){let I=p[v.type],A;if(I){let P=Ti[I];A=nr.clone(P.uniforms)}else A=v.uniforms;return A}function y(v,I){let A=d.get(I);return A!==void 0?++A.usedTimes:(A=new K2(t,I,v,i),u.push(A),d.set(I,A)),A}function w(v){if(--v.usedTimes===0){let I=u.indexOf(v);u[I]=u[u.length-1],u.pop(),d.delete(v.cacheKey),v.destroy()}}function C(v){o.remove(v)}function L(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:L}}function J2(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function a(s){t.delete(s)}function i(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:a,update:i,dispose:r}}function Q2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function US(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function BS(){let t=[],e=0,n=[],a=[],i=[];function r(){e=0,n.length=0,a.length=0,i.length=0}function s(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,g,_,m,h){let x=t[e];return x===void 0?(x={id:c.id,object:c,geometry:p,material:g,materialVariant:s(c),groupOrder:_,renderOrder:c.renderOrder,z:m,group:h},t[e]=x):(x.id=c.id,x.object=c,x.geometry=p,x.material=g,x.materialVariant=s(c),x.groupOrder=_,x.renderOrder=c.renderOrder,x.z=m,x.group=h),e++,x}function l(c,p,g,_,m,h,x){x.reversedDepth===!0&&(m=-m);let S=o(c,p,g,_,m,h);g.transmission>0?a.push(S):g.transparent===!0?i.push(S):n.push(S)}function u(c,p,g,_,m,h){let x=o(c,p,g,_,m,h);g.transmission>0?a.unshift(x):g.transparent===!0?i.unshift(x):n.unshift(x)}function d(c,p){n.length>1&&n.sort(c||Q2),a.length>1&&a.sort(p||US),i.length>1&&i.sort(p||US)}function f(){for(let c=e,p=t.length;c<p;c++){let g=t[c];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:a,transparent:i,init:r,push:l,unshift:u,finish:f,sort:d}}function eD(){let t=new WeakMap;function e(a,i){let r=t.get(a),s;return r===void 0?(s=new BS,t.set(a,[s])):i>=r.length?(s=new BS,r.push(s)):s=r[i],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function tD(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new T,color:new Ie};break;case"SpotLight":n={position:new T,direction:new T,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new T,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new T,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":n={color:new Ie,position:new T,halfWidth:new T,halfHeight:new T};break}return t[e.id]=n,n}}}function nD(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var aD=0;function iD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rD(t){let e=new tD,n=nD(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)a.probe.push(new T);let i=new T,r=new He,s=new He;function o(u){let d=0,f=0,c=0;for(let k=0;k<9;k++)a.probe[k].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,x=0,S=0,y=0,w=0,C=0,L=0,v=0,I=0,A=0;u.sort(iD);for(let k=0,z=u.length;k<z;k++){let R=u[k],U=R.color,V=R.intensity,H=R.distance,j=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===zr?j=R.shadow.map.texture:j=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=U.r*V,f+=U.g*V,c+=U.b*V;else if(R.isLightProbe){for(let X=0;X<9;X++)a.probe[X].addScaledVector(R.sh.coefficients[X],V);A++}else if(R.isSunLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let O=R.shadow,te=n.get(R);te.shadowIntensity=O.intensity,te.shadowBias=O.bias,te.shadowNormalBias=O.normalBias,te.shadowRadius=O.radius,te.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),a.sunShadow[g]=te,a.sunShadowMap[g]=j;let Te=O.getViewportCount();for(let ye=0;ye<Te;ye++)a.sunShadowMatrix[_+ye]=O.getMatrix(ye),a.sunShadowCascade[_+ye]=O._cascadeData[ye];_+=Te,g++}a.sun[p]=X,p++}else if(R.isDirectionalLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let O=R.shadow,te=n.get(R);te.shadowIntensity=O.intensity,te.shadowBias=O.bias,te.shadowNormalBias=O.normalBias,te.shadowRadius=O.radius,te.shadowMapSize=O.mapSize,a.directionalShadow[m]=te,a.directionalShadowMap[m]=j,a.directionalShadowMatrix[m]=R.shadow.matrix,w++}a.directional[m]=X,m++}else if(R.isSpotLight){let X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(U).multiplyScalar(V),X.distance=H,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,a.spot[x]=X;let O=R.shadow;if(R.map&&(a.spotLightMap[v]=R.map,v++,O.updateMatrices(R),R.castShadow&&I++),a.spotLightMatrix[x]=O.matrix,R.castShadow){let te=n.get(R);te.shadowIntensity=O.intensity,te.shadowBias=O.bias,te.shadowNormalBias=O.normalBias,te.shadowRadius=O.radius,te.shadowMapSize=O.mapSize,a.spotShadow[x]=te,a.spotShadowMap[x]=j,L++}x++}else if(R.isRectAreaLight){let X=e.get(R);X.color.copy(U).multiplyScalar(V),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),a.rectArea[S]=X,S++}else if(R.isPointLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let O=R.shadow,te=n.get(R);te.shadowIntensity=O.intensity,te.shadowBias=O.bias,te.shadowNormalBias=O.normalBias,te.shadowRadius=O.radius,te.shadowMapSize=O.mapSize,te.shadowCameraNear=O.camera.near,te.shadowCameraFar=O.camera.far,a.pointShadow[h]=te,a.pointShadowMap[h]=j,a.pointShadowMatrix[h]=R.shadow.matrix,C++}a.point[h]=X,h++}else if(R.isHemisphereLight){let X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(V),X.groundColor.copy(R.groundColor).multiplyScalar(V),a.hemi[y]=X,y++}}S>0&&(t.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=he.LTC_FLOAT_1,a.rectAreaLTC2=he.LTC_FLOAT_2):(a.rectAreaLTC1=he.LTC_HALF_1,a.rectAreaLTC2=he.LTC_HALF_2)),a.ambient[0]=d,a.ambient[1]=f,a.ambient[2]=c;let P=a.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==h||P.spotLength!==x||P.rectAreaLength!==S||P.hemiLength!==y||P.numSunShadows!==g||P.numDirectionalShadows!==w||P.numPointShadows!==C||P.numSpotShadows!==L||P.numSpotMaps!==v||P.numLightProbes!==A)&&(a.sun.length=p,a.directional.length=m,a.spot.length=x,a.rectArea.length=S,a.point.length=h,a.hemi.length=y,a.sunShadow.length=g,a.sunShadowMap.length=g,a.sunShadowMatrix.length=_,a.sunShadowCascade.length=_,a.directionalShadow.length=w,a.directionalShadowMap.length=w,a.directionalShadowMatrix.length=w,a.pointShadow.length=C,a.pointShadowMap.length=C,a.pointShadowMatrix.length=C,a.spotShadow.length=L,a.spotShadowMap.length=L,a.spotLightMatrix.length=L+v-I,a.spotLightMap.length=v,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=A,P.sunLength=p,P.directionalLength=m,P.pointLength=h,P.spotLength=x,P.rectAreaLength=S,P.hemiLength=y,P.numSunShadows=g,P.numDirectionalShadows=w,P.numPointShadows=C,P.numSpotShadows=L,P.numSpotMaps=v,P.numLightProbes=A,a.version=aD++)}function l(u,d){let f=0,c=0,p=0,g=0,_=0,m=0,h=d.matrixWorldInverse;for(let x=0,S=u.length;x<S;x++){let y=u[x];if(y.isSunLight){let w=a.sun[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(h),f++}else if(y.isDirectionalLight){let w=a.directional[c];w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(h),c++}else if(y.isSpotLight){let w=a.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(h),g++}else if(y.isRectAreaLight){let w=a.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),s.identity(),r.copy(y.matrixWorld),r.premultiply(h),s.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),_++}else if(y.isPointLight){let w=a.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){let w=a.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(h),m++}}}return{setup:o,setupView:l,state:a}}function OS(t){let e=new rD(t),n=[],a=[],i=[];function r(c){f.camera=c,n.length=0,a.length=0,i.length=0}function s(c){n.push(c)}function o(c){a.push(c)}function l(c){i.push(c)}function u(){e.setup(n)}function d(c){e.setupView(n,c)}let f={lightsArray:n,shadowsArray:a,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:u,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function sD(t){let e=new WeakMap;function n(i,r=0){let s=e.get(i),o;return s===void 0?(o=new OS(t),e.set(i,[o])):r>=s.length?(o=new OS(t),s.push(o)):o=s[r],o}function a(){e=new WeakMap}return{get:n,dispose:a}}var oD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,uD=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],cD=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],zS=new He,Zu=new T,Xg=new T;function dD(t,e,n){let a=new Ho,i=new ae,r=new ae,s=new Gt,o=new Wo,l=new yf,u={},d=n.maxTextureSize,f={[Li]:Fn,[Fn]:Li,[fn]:fn},c=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:oD,fragmentShader:lD}),p=c.clone();p.defines.HORIZONTAL_PASS=1;let g=new Wt;g.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new gt(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let h=this.type;this.render=function(C,L,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===Pf&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Du);let I=t.getRenderTarget(),A=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Ua),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let z=h!==this.type;z&&L.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(U=>U.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,U=C.length;R<U;R++){let V=C[R],H=V.shadow;if(H===void 0){Be("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let j=H.getFrameExtents();i.multiply(j),r.copy(H.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/j.x),i.x=r.x*j.x,H.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/j.y),i.y=r.y*j.y,H.mapSize.y=r.y));let X=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Yo){if(V.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ot(i.x,i.y,{format:zr,type:un,minFilter:on,magFilter:on,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new Er(i.x,i.y,Ba),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=bi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en}else V.isPointLight?(H.map=new Ch(i.x),H.map.depthTexture=new df(i.x,li)):(H.map=new Ot(i.x,i.y),H.map.depthTexture=new Er(i.x,i.y,li)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=bi,this.type===Du?(H.map.depthTexture.compareFunction=X?Sh:_h,H.map.depthTexture.minFilter=on,H.map.depthTexture.magFilter=on):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let O=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();V.isPointLight!==!0&&H.updateMatrices(V,v);for(let te=0;te<O;te++){let Te=H.getCamera(te);if(V.isPointLight){let ye=H.camera,qe=H.matrix,ke=V.distance||ye.far;ke!==ye.far&&(ye.far=ke,ye.updateProjectionMatrix()),Zu.setFromMatrixPosition(V.matrixWorld),ye.position.copy(Zu),Xg.copy(ye.position),Xg.add(uD[te]),ye.up.copy(cD[te]),ye.lookAt(Xg),ye.updateMatrixWorld(),qe.makeTranslation(-Zu.x,-Zu.y,-Zu.z),zS.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),H._frustum.setFromProjectionMatrix(zS,ye.coordinateSystem,ye.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,te),t.clear();else{te===0&&(t.setRenderTarget(H.map),t.clear());let ye=H.getViewport(te);s.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),k.viewport(s)}a=H.getFrustum(te),y(L,v,Te,V,this.type)}H.isPointLightShadow!==!0&&this.type===Yo&&x(H,v),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(I,A,P)};function x(C,L){let v=e.update(_);c.defines.VSM_SAMPLES!==C.blurSamples&&(c.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null?C.mapPass=new Ot(i.x,i.y,{format:zr,type:un}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),c.uniforms.shadow_pass.value=C.map.depthTexture,c.uniforms.resolution.value.set(C.map.width,C.map.height),c.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(L,null,v,c,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value.set(C.map.width,C.map.height),p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(L,null,v,p,_,null)}function S(C,L,v,I){let A=null,P=v.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)A=P;else if(A=v.isPointLight===!0?l:o,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let k=A.uuid,z=L.uuid,R=u[k];R===void 0&&(R={},u[k]=R);let U=R[z];U===void 0&&(U=A.clone(),R[z]=U,L.addEventListener("dispose",w)),A=U}if(A.visible=L.visible,A.wireframe=L.wireframe,I===Yo?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:f[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let k=t.properties.get(A);k.light=v}return A}function y(C,L,v,I,A){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===Yo)&&(!C.frustumCulled||C.intersectsFrustum(a))){C.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,C.matrixWorld);let z=e.update(C),R=C.material;if(Array.isArray(R)){let U=z.groups;for(let V=0,H=U.length;V<H;V++){let j=U[V],X=R[j.materialIndex];if(X&&X.visible){let O=S(C,X,I,A);C.onBeforeShadow(t,C,L,v,z,O,j),t.renderBufferDirect(v,null,z,O,C,j),C.onAfterShadow(t,C,L,v,z,O,j)}}}else if(R.visible){let U=S(C,R,I,A);C.onBeforeShadow(t,C,L,v,z,U,null),t.renderBufferDirect(v,null,z,U,C,null),C.onAfterShadow(t,C,L,v,z,U,null)}}let k=C.children;for(let z=0,R=k.length;z<R;z++)y(k[z],L,v,I,A)}function w(C){C.target.removeEventListener("dispose",w);for(let v in u){let I=u[v],A=C.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function fD(t,e){function n(){let F=!1,ce=new Gt,J=null,de=new Gt(0,0,0,0);return{setMask:function(xe){J!==xe&&!F&&(t.colorMask(xe,xe,xe,xe),J=xe)},setLocked:function(xe){F=xe},setClear:function(xe,ne,Ne,Ae,Dt){Dt===!0&&(xe*=Ae,ne*=Ae,Ne*=Ae),ce.set(xe,ne,Ne,Ae),de.equals(ce)===!1&&(t.clearColor(xe,ne,Ne,Ae),de.copy(ce))},reset:function(){F=!1,J=null,de.set(-1,0,0,0)}}}function a(){let F=!1,ce=!1,J=null,de=null,xe=null;return{setReversed:function(ne){if(ce!==ne){let Ne=e.get("EXT_clip_control");ne?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ce=ne;let Ae=xe;xe=null,this.setClear(Ae)}},getReversed:function(){return ce},setTest:function(ne){ne?Q(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(ne){J!==ne&&!F&&(t.depthMask(ne),J=ne)},setFunc:function(ne){if(ce&&(ne=gS[ne]),de!==ne){switch(ne){case $d:t.depthFunc(t.NEVER);break;case Jd:t.depthFunc(t.ALWAYS);break;case Qd:t.depthFunc(t.LESS);break;case Po:t.depthFunc(t.LEQUAL);break;case ef:t.depthFunc(t.EQUAL);break;case tf:t.depthFunc(t.GEQUAL);break;case nf:t.depthFunc(t.GREATER);break;case af:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=ne}},setLocked:function(ne){F=ne},setClear:function(ne){xe!==ne&&(xe=ne,ce&&(ne=1-ne),t.clearDepth(ne))},reset:function(){F=!1,J=null,de=null,xe=null,ce=!1}}}function i(){let F=!1,ce=null,J=null,de=null,xe=null,ne=null,Ne=null,Ae=null,Dt=null;return{setTest:function(yt){F||(yt?Q(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(yt){ce!==yt&&!F&&(t.stencilMask(yt),ce=yt)},setFunc:function(yt,ei,Si){(J!==yt||de!==ei||xe!==Si)&&(t.stencilFunc(yt,ei,Si),J=yt,de=ei,xe=Si)},setOp:function(yt,ei,Si){(ne!==yt||Ne!==ei||Ae!==Si)&&(t.stencilOp(yt,ei,Si),ne=yt,Ne=ei,Ae=Si)},setLocked:function(yt){F=yt},setClear:function(yt){Dt!==yt&&(t.clearStencil(yt),Dt=yt)},reset:function(){F=!1,ce=null,J=null,de=null,xe=null,ne=null,Ne=null,Ae=null,Dt=null}}}let r=new n,s=new a,o=new i,l=new WeakMap,u=new WeakMap,d={},f={},c={},p=new WeakMap,g=[],_=null,m=!1,h=null,x=null,S=null,y=null,w=null,C=null,L=null,v=new Ie(0,0,0),I=0,A=!1,P=null,k=null,z=null,R=null,U=null,V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=j>=2);let O=null,te={},Te=t.getParameter(t.SCISSOR_BOX),ye=t.getParameter(t.VIEWPORT),qe=new Gt().fromArray(Te),ke=new Gt().fromArray(ye);function ze(F,ce,J,de){let xe=new Uint8Array(4),ne=t.createTexture();t.bindTexture(F,ne),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<J;Ne++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ce+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return ne}let K={};K[t.TEXTURE_2D]=ze(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=ze(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=ze(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=ze(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Q(t.DEPTH_TEST),s.setFunc(Po),rt(!1),Vt(yg),Q(t.CULL_FACE),dt(Ua);function Q(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function se(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function Xe(F,ce){return c[F]!==ce?(t.bindFramebuffer(F,ce),c[F]=ce,F===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=ce),F===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function ge(F,ce){let J=g,de=!1;if(F){J=p.get(ce),J===void 0&&(J=[],p.set(ce,J));let xe=F.textures;if(J.length!==xe.length||J[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Ne=xe.length;ne<Ne;ne++)J[ne]=t.COLOR_ATTACHMENT0+ne;J.length=xe.length,de=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,de=!0);de&&t.drawBuffers(J)}function Ke(F){return _!==F?(t.useProgram(F),_=F,!0):!1}let Yt={[Ts]:t.FUNC_ADD,[U_]:t.FUNC_SUBTRACT,[B_]:t.FUNC_REVERSE_SUBTRACT};Yt[O_]=t.MIN,Yt[z_]=t.MAX;let Ze={[H_]:t.ZERO,[V_]:t.ONE,[G_]:t.SRC_COLOR,[Mg]:t.SRC_ALPHA,[Z_]:t.SRC_ALPHA_SATURATE,[Y_]:t.DST_COLOR,[q_]:t.DST_ALPHA,[W_]:t.ONE_MINUS_SRC_COLOR,[wg]:t.ONE_MINUS_SRC_ALPHA,[K_]:t.ONE_MINUS_DST_COLOR,[X_]:t.ONE_MINUS_DST_ALPHA,[j_]:t.CONSTANT_COLOR,[$_]:t.ONE_MINUS_CONSTANT_COLOR,[J_]:t.CONSTANT_ALPHA,[Q_]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(F,ce,J,de,xe,ne,Ne,Ae,Dt,yt){if(F===Ua){m===!0&&(se(t.BLEND),m=!1);return}if(m===!1&&(Q(t.BLEND),m=!0),F!==N_){if(F!==h||yt!==A){if((x!==Ts||w!==Ts)&&(t.blendEquation(t.FUNC_ADD),x=Ts,w=Ts),yt)switch(F){case Ko:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case si:t.blendFunc(t.ONE,t.ONE);break;case _g:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ve("WebGLState: Invalid blending: ",F);break}else switch(F){case Ko:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case si:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case _g:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sg:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",F);break}S=null,y=null,C=null,L=null,v.set(0,0,0),I=0,h=F,A=yt}return}xe=xe||ce,ne=ne||J,Ne=Ne||de,(ce!==x||xe!==w)&&(t.blendEquationSeparate(Yt[ce],Yt[xe]),x=ce,w=xe),(J!==S||de!==y||ne!==C||Ne!==L)&&(t.blendFuncSeparate(Ze[J],Ze[de],Ze[ne],Ze[Ne]),S=J,y=de,C=ne,L=Ne),(Ae.equals(v)===!1||Dt!==I)&&(t.blendColor(Ae.r,Ae.g,Ae.b,Dt),v.copy(Ae),I=Dt),h=F,A=!1}function Pt(F,ce){F.side===fn?se(t.CULL_FACE):Q(t.CULL_FACE);let J=F.side===Fn;ce&&(J=!J),rt(J),F.blending===Ko&&F.transparent===!1?dt(Ua):dt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);let de=F.stencilWrite;o.setTest(de),de&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),la(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function rt(F){P!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),P=F)}function Vt(F){F!==F_?(Q(t.CULL_FACE),F!==k&&(F===yg?t.cullFace(t.BACK):F===k_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),k=F}function wn(F){F!==z&&(H&&t.lineWidth(F),z=F)}function la(F,ce,J){F?(Q(t.POLYGON_OFFSET_FILL),(R!==ce||U!==J)&&(R=ce,U=J,s.getReversed()&&(ce=-ce),t.polygonOffset(ce,J))):se(t.POLYGON_OFFSET_FILL)}function Kt(F){F?Q(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function an(F){F===void 0&&(F=t.TEXTURE0+V-1),O!==F&&(t.activeTexture(F),O=F)}function N(F,ce,J){J===void 0&&(O===null?J=t.TEXTURE0+V-1:J=O);let de=te[J];de===void 0&&(de={type:void 0,texture:void 0},te[J]=de),(de.type!==F||de.texture!==ce)&&(O!==J&&(t.activeTexture(J),O=J),t.bindTexture(F,ce||K[F]),de.type=F,de.texture=ce)}function Hn(){let F=te[O];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function bt(){try{t.compressedTexImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function E(){try{t.compressedTexImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function M(){try{t.texSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function B(){try{t.texSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function re(){try{t.texStorage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function oe(){try{t.texStorage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function $(){try{t.texImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function ee(){try{t.texImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function le(F){return f[F]!==void 0?f[F]:t.getParameter(F)}function De(F,ce){f[F]!==ce&&(t.pixelStorei(F,ce),f[F]=ce)}function fe(F){qe.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),qe.copy(F))}function ue(F){ke.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),ke.copy(F))}function Fe(F,ce){let J=u.get(ce);J===void 0&&(J=new WeakMap,u.set(ce,J));let de=J.get(F);de===void 0&&(de=t.getUniformBlockIndex(ce,F.name),J.set(F,de))}function Ue(F,ce){let de=u.get(ce).get(F);l.get(ce)!==de&&(t.uniformBlockBinding(ce,de,F.__bindingPointIndex),l.set(ce,de))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},f={},O=null,te={},c={},p=new WeakMap,g=[],_=null,m=!1,h=null,x=null,S=null,y=null,w=null,C=null,L=null,v=new Ie(0,0,0),I=0,A=!1,P=null,k=null,z=null,R=null,U=null,qe.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Q,disable:se,bindFramebuffer:Xe,drawBuffers:ge,useProgram:Ke,setBlending:dt,setMaterial:Pt,setFlipSided:rt,setCullFace:Vt,setLineWidth:wn,setPolygonOffset:la,setScissorTest:Kt,activeTexture:an,bindTexture:N,unbindTexture:Hn,compressedTexImage2D:bt,compressedTexImage3D:E,texImage2D:$,texImage3D:ee,pixelStorei:De,getParameter:le,updateUBOMapping:Fe,uniformBlockBinding:Ue,texStorage2D:re,texStorage3D:oe,texSubImage2D:M,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:Z,scissor:fe,viewport:ue,reset:je}}function hD(t,e,n,a,i,r,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ae,d=new WeakMap,f=new Set,c,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,M){return g?new OffscreenCanvas(E,M):cu("canvas")}function m(E,M,B){let q=1,Z=bt(E);if((Z.width>B||Z.height>B)&&(q=B/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let re=Math.floor(q*Z.width),oe=Math.floor(q*Z.height);c===void 0&&(c=_(re,oe));let $=M?_(re,oe):c;return $.width=re,$.height=oe,$.getContext("2d").drawImage(E,0,0,re,oe),Be("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+re+"x"+oe+")."),$}else return"data"in E&&Be("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function h(E){return E.generateMipmaps}function x(E){t.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(E,M,B,q,Z,re=!1){if(E!==null){if(t[E]!==void 0)return t[E];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe;q&&(oe=e.get("EXT_texture_norm16"),oe||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=M;if(M===t.RED&&(B===t.FLOAT&&($=t.R32F),B===t.HALF_FLOAT&&($=t.R16F),B===t.UNSIGNED_BYTE&&($=t.R8),B===t.UNSIGNED_SHORT&&oe&&($=oe.R16_EXT),B===t.SHORT&&oe&&($=oe.R16_SNORM_EXT)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.R8UI),B===t.UNSIGNED_SHORT&&($=t.R16UI),B===t.UNSIGNED_INT&&($=t.R32UI),B===t.BYTE&&($=t.R8I),B===t.SHORT&&($=t.R16I),B===t.INT&&($=t.R32I)),M===t.RG&&(B===t.FLOAT&&($=t.RG32F),B===t.HALF_FLOAT&&($=t.RG16F),B===t.UNSIGNED_BYTE&&($=t.RG8),B===t.UNSIGNED_SHORT&&oe&&($=oe.RG16_EXT),B===t.SHORT&&oe&&($=oe.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RG8UI),B===t.UNSIGNED_SHORT&&($=t.RG16UI),B===t.UNSIGNED_INT&&($=t.RG32UI),B===t.BYTE&&($=t.RG8I),B===t.SHORT&&($=t.RG16I),B===t.INT&&($=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGB8UI),B===t.UNSIGNED_SHORT&&($=t.RGB16UI),B===t.UNSIGNED_INT&&($=t.RGB32UI),B===t.BYTE&&($=t.RGB8I),B===t.SHORT&&($=t.RGB16I),B===t.INT&&($=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGBA8UI),B===t.UNSIGNED_SHORT&&($=t.RGBA16UI),B===t.UNSIGNED_INT&&($=t.RGBA32UI),B===t.BYTE&&($=t.RGBA8I),B===t.SHORT&&($=t.RGBA16I),B===t.INT&&($=t.RGBA32I)),M===t.RGB&&(B===t.UNSIGNED_SHORT&&oe&&($=oe.RGB16_EXT),B===t.SHORT&&oe&&($=oe.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),M===t.RGBA){let ee=re?uu:nt.getTransfer(Z);B===t.FLOAT&&($=t.RGBA32F),B===t.HALF_FLOAT&&($=t.RGBA16F),B===t.UNSIGNED_BYTE&&($=ee===ft?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&oe&&($=oe.RGBA16_EXT),B===t.SHORT&&oe&&($=oe.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(E,M){let B;return E?M===null||M===li||M===jo?B=t.DEPTH24_STENCIL8:M===Ba?B=t.DEPTH32F_STENCIL8:M===Zo&&(B=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===li||M===jo?B=t.DEPTH_COMPONENT24:M===Ba?B=t.DEPTH_COMPONENT32F:M===Zo&&(B=t.DEPTH_COMPONENT16),B}function C(E,M){return h(E)===!0||E.isFramebufferTexture&&E.minFilter!==en&&E.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function L(E){let M=E.target;M.removeEventListener("dispose",L),I(M),M.isVideoTexture&&d.delete(M),M.isHTMLTexture&&f.delete(M)}function v(E){let M=E.target;M.removeEventListener("dispose",v),P(M)}function I(E){let M=a.get(E);if(M.__webglInit===void 0)return;let B=E.source,q=p.get(B);if(q){let Z=q[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(E),Object.keys(q).length===0&&p.delete(B)}a.remove(E)}function A(E){let M=a.get(E);t.deleteTexture(M.__webglTexture);let B=E.source,q=p.get(B);delete q[M.__cacheKey],s.memory.textures--}function P(E){let M=a.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),a.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Z=0;Z<M.__webglFramebuffer[q].length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[q][Z]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=E.textures;for(let q=0,Z=B.length;q<Z;q++){let re=a.get(B[q]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),s.memory.textures--),a.remove(B[q])}a.remove(E)}let k=0;function z(){k=0}function R(){return k}function U(E){k=E}function V(){let E=k;return E>=i.maxTextures&&Be("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+i.maxTextures),k+=1,E}function H(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function j(E,M){let B=a.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let q=E.image;if(q===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{se(B,E,M);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function X(E,M){let B=a.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){se(B,E,M);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function O(E,M){let B=a.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){se(B,E,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function te(E,M){let B=a.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){Xe(B,E,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}let Te={[Do]:t.REPEAT,[Ci]:t.CLAMP_TO_EDGE,[rf]:t.MIRRORED_REPEAT},ye={[en]:t.NEAREST,[nS]:t.NEAREST_MIPMAP_NEAREST,[Hu]:t.NEAREST_MIPMAP_LINEAR,[on]:t.LINEAR,[kf]:t.LINEAR_MIPMAP_NEAREST,[Br]:t.LINEAR_MIPMAP_LINEAR},qe={[sS]:t.NEVER,[dS]:t.ALWAYS,[oS]:t.LESS,[_h]:t.LEQUAL,[lS]:t.EQUAL,[Sh]:t.GEQUAL,[uS]:t.GREATER,[cS]:t.NOTEQUAL};function ke(E,M){if(M.type===Ba&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===on||M.magFilter===kf||M.magFilter===Hu||M.magFilter===Br||M.minFilter===on||M.minFilter===kf||M.minFilter===Hu||M.minFilter===Br)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,Te[M.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,Te[M.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,Te[M.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,ye[M.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,ye[M.minFilter]),M.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,qe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==Hu&&M.minFilter!==Br||M.type===Ba&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function ze(E,M){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",L));let q=M.source,Z=p.get(q);Z===void 0&&(Z={},p.set(q,Z));let re=H(M);if(re!==E.__cacheKey){Z[re]===void 0&&(Z[re]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,B=!0),Z[re].usedTimes++;let oe=Z[E.__cacheKey];oe!==void 0&&(Z[E.__cacheKey].usedTimes--,oe.usedTimes===0&&A(M)),E.__cacheKey=re,E.__webglTexture=Z[re].texture}return B}function K(E,M,B){return Math.floor(Math.floor(E/B)/M)}function Q(E,M,B,q){let re=E.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,B,q,M.data);else{re.sort((De,fe)=>De.start-fe.start);let oe=0;for(let De=1;De<re.length;De++){let fe=re[oe],ue=re[De],Fe=fe.start+fe.count,Ue=K(ue.start,M.width,4),je=K(fe.start,M.width,4);ue.start<=Fe+1&&Ue===je&&K(ue.start+ue.count-1,M.width,4)===Ue?fe.count=Math.max(fe.count,ue.start+ue.count-fe.start):(++oe,re[oe]=ue)}re.length=oe+1;let $=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),le=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let De=0,fe=re.length;De<fe;De++){let ue=re[De],Fe=Math.floor(ue.start/4),Ue=Math.ceil(ue.count/4),je=Fe%M.width,F=Math.floor(Fe/M.width),ce=Ue,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,je),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,je,F,ce,J,B,q,M.data)}E.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,le)}}function se(E,M,B){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);let Z=ze(E,M),re=M.source;n.bindTexture(q,E.__webglTexture,t.TEXTURE0+B);let oe=a.get(re);if(re.version!==oe.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let J=nt.getPrimaries(nt.workingColorSpace),de=M.colorSpace===tr?null:nt.getPrimaries(M.colorSpace),xe=M.colorSpace===tr||J===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let ee=m(M.image,!1,i.maxTextureSize);ee=Hn(M,ee);let le=r.convert(M.format,M.colorSpace),De=r.convert(M.type),fe=y(M.internalFormat,le,De,M.normalized,M.colorSpace,M.isVideoTexture);ke(q,M);let ue,Fe=M.mipmaps,Ue=M.isVideoTexture!==!0,je=oe.__version===void 0||Z===!0,F=re.dataReady,ce=C(M,ee);if(M.isDepthTexture)fe=w(M.format===Or,M.type),je&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,fe,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,fe,ee.width,ee.height,0,le,De,null));else if(M.isDataTexture)if(Fe.length>0){Ue&&je&&n.texStorage2D(t.TEXTURE_2D,ce,fe,Fe[0].width,Fe[0].height);for(let J=0,de=Fe.length;J<de;J++)ue=Fe[J],Ue?F&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ue.width,ue.height,le,De,ue.data):n.texImage2D(t.TEXTURE_2D,J,fe,ue.width,ue.height,0,le,De,ue.data);M.generateMipmaps=!1}else Ue?(je&&n.texStorage2D(t.TEXTURE_2D,ce,fe,ee.width,ee.height),F&&Q(M,ee,le,De)):n.texImage2D(t.TEXTURE_2D,0,fe,ee.width,ee.height,0,le,De,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,fe,Fe[0].width,Fe[0].height,ee.depth);for(let J=0,de=Fe.length;J<de;J++)if(ue=Fe[J],M.format!==Oa)if(le!==null)if(Ue){if(F)if(M.layerUpdates.size>0){let xe=zg(ue.width,ue.height,M.format,M.type);for(let ne of M.layerUpdates){let Ne=ue.data.subarray(ne*xe/ue.data.BYTES_PER_ELEMENT,(ne+1)*xe/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,ne,ue.width,ue.height,1,le,Ne)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,ee.depth,le,ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,fe,ue.width,ue.height,ee.depth,0,ue.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,ee.depth,le,De,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,fe,ue.width,ue.height,ee.depth,0,le,De,ue.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ue&&je&&n.texStorage2D(t.TEXTURE_2D,ce,fe,Fe[0].width,Fe[0].height);for(let J=0,de=Fe.length;J<de;J++)ue=Fe[J],M.format!==Oa?le!==null?Ue?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,ue.width,ue.height,le,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,J,fe,ue.width,ue.height,0,ue.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?F&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ue.width,ue.height,le,De,ue.data):n.texImage2D(t.TEXTURE_2D,J,fe,ue.width,ue.height,0,le,De,ue.data)}else if(M.isDataArrayTexture)if(Ue){if(je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,fe,ee.width,ee.height,ee.depth),F)if(M.layerUpdates.size>0){let J=zg(ee.width,ee.height,M.format,M.type);for(let de of M.layerUpdates){let xe=ee.data.subarray(de*J/ee.data.BYTES_PER_ELEMENT,(de+1)*J/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,ee.width,ee.height,1,le,De,xe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,De,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,le,De,ee.data);else if(M.isData3DTexture)Ue?(je&&n.texStorage3D(t.TEXTURE_3D,ce,fe,ee.width,ee.height,ee.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,De,ee.data)):n.texImage3D(t.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,le,De,ee.data);else if(M.isFramebufferTexture){if(je)if(Ue)n.texStorage2D(t.TEXTURE_2D,ce,fe,ee.width,ee.height);else{let J=ee.width,de=ee.height;for(let xe=0;xe<ce;xe++)n.texImage2D(t.TEXTURE_2D,xe,fe,J,de,0,le,De,null),J>>=1,de>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){let J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),f.add(M),J.onpaint=de=>{let xe=de.changedElements;for(let ne of f)xe.includes(ne.image)&&(ne.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{let xe=t.RGBA,ne=t.RGBA,Ne=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,ne,Ne,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ue&&je){let J=bt(Fe[0]);n.texStorage2D(t.TEXTURE_2D,ce,fe,J.width,J.height)}for(let J=0,de=Fe.length;J<de;J++)ue=Fe[J],Ue?F&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,le,De,ue):n.texImage2D(t.TEXTURE_2D,J,fe,le,De,ue);M.generateMipmaps=!1}else if(Ue){if(je){let J=bt(ee);n.texStorage2D(t.TEXTURE_2D,ce,fe,J.width,J.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,De,ee)}else n.texImage2D(t.TEXTURE_2D,0,fe,le,De,ee);h(M)&&x(q),oe.__version=re.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Xe(E,M,B){if(M.image.length!==6)return;let q=ze(E,M),Z=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+B);let re=a.get(Z);if(Z.version!==re.__version||q===!0){n.activeTexture(t.TEXTURE0+B);let oe=nt.getPrimaries(nt.workingColorSpace),$=M.colorSpace===tr?null:nt.getPrimaries(M.colorSpace),ee=M.colorSpace===tr||oe===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let le=M.isCompressedTexture||M.image[0].isCompressedTexture,De=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let ne=0;ne<6;ne++)!le&&!De?fe[ne]=m(M.image[ne],!0,i.maxCubemapSize):fe[ne]=De?M.image[ne].image:M.image[ne],fe[ne]=Hn(M,fe[ne]);let ue=fe[0],Fe=r.convert(M.format,M.colorSpace),Ue=r.convert(M.type),je=y(M.internalFormat,Fe,Ue,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,ce=re.__version===void 0||q===!0,J=Z.dataReady,de=C(M,ue);ke(t.TEXTURE_CUBE_MAP,M);let xe;if(le){F&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,je,ue.width,ue.height);for(let ne=0;ne<6;ne++){xe=fe[ne].mipmaps;for(let Ne=0;Ne<xe.length;Ne++){let Ae=xe[Ne];M.format!==Oa?Fe!==null?F?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne,0,0,Ae.width,Ae.height,Fe,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne,je,Ae.width,Ae.height,0,Ae.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne,0,0,Ae.width,Ae.height,Fe,Ue,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne,je,Ae.width,Ae.height,0,Fe,Ue,Ae.data)}}}else{if(xe=M.mipmaps,F&&ce){xe.length>0&&de++;let ne=bt(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,je,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(De){F?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,fe[ne].width,fe[ne].height,Fe,Ue,fe[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,je,fe[ne].width,fe[ne].height,0,Fe,Ue,fe[ne].data);for(let Ne=0;Ne<xe.length;Ne++){let Dt=xe[Ne].image[ne].image;F?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne+1,0,0,Dt.width,Dt.height,Fe,Ue,Dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne+1,je,Dt.width,Dt.height,0,Fe,Ue,Dt.data)}}else{F?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Fe,Ue,fe[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,je,Fe,Ue,fe[ne]);for(let Ne=0;Ne<xe.length;Ne++){let Ae=xe[Ne];F?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne+1,0,0,Fe,Ue,Ae.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne+1,je,Fe,Ue,Ae.image[ne])}}}h(M)&&x(t.TEXTURE_CUBE_MAP),re.__version=Z.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ge(E,M,B,q,Z,re){let oe=r.convert(B.format,B.colorSpace),$=r.convert(B.type),ee=y(B.internalFormat,oe,$,B.normalized,B.colorSpace),le=a.get(M),De=a.get(B);if(De.__renderTarget=M,!le.__hasExternalTextures){let fe=Math.max(1,M.width>>re),ue=Math.max(1,M.height>>re);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,re,ee,fe,ue,M.depth,0,oe,$,null):n.texImage2D(Z,re,ee,fe,ue,0,oe,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),an(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Z,De.__webglTexture,0,Kt(M)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Z,De.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ke(E,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,E),M.depthBuffer){let q=M.depthTexture,Z=q&&q.isDepthTexture?q.type:null,re=w(M.stencilBuffer,Z),oe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;an(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Kt(M),re,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Kt(M),re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,E)}else{let q=M.textures;for(let Z=0;Z<q.length;Z++){let re=q[Z],oe=r.convert(re.format,re.colorSpace),$=r.convert(re.type),ee=y(re.internalFormat,oe,$,re.normalized,re.colorSpace);an(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Kt(M),ee,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Kt(M),ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Yt(E,M,B){let q=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=a.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",L)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ke(t.TEXTURE_CUBE_MAP,M.depthTexture);let le=r.convert(M.depthTexture.format),De=r.convert(M.depthTexture.type),fe;M.depthTexture.format===bi?fe=t.DEPTH_COMPONENT24:M.depthTexture.format===Or&&(fe=t.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,fe,M.width,M.height,0,le,De,null)}}else j(M.depthTexture,0);let re=Z.__webglTexture,oe=Kt(M),$=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,ee=M.depthTexture.format===Or?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===bi)an(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,$,re,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,ee,$,re,0);else if(M.depthTexture.format===Or)an(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,$,re,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,ee,$,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(E){let M=a.get(E),B=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){let q=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=q}if(E.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)Yt(M.__webglFramebuffer[q],E,q);else{let q=E.texture.mipmaps;q&&q.length>0?Yt(M.__webglFramebuffer[0],E,0):Yt(M.__webglFramebuffer,E,0)}else if(B){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=t.createRenderbuffer(),Ke(M.__webglDepthbuffer[q],E,!1);else{let Z=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,re)}}else{let q=E.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Ke(M.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function dt(E,M,B){let q=a.get(E);M!==void 0&&ge(q.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ze(E)}function Pt(E){let M=E.texture,B=a.get(E),q=a.get(M);E.addEventListener("dispose",v);let Z=E.textures,re=E.isWebGLCubeRenderTarget===!0,oe=Z.length>1;if(oe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,s.memory.textures++),re){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let ee=0;ee<M.mipmaps.length;ee++)B.__webglFramebuffer[$][ee]=t.createFramebuffer()}else B.__webglFramebuffer[$]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<M.mipmaps.length;$++)B.__webglFramebuffer[$]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(oe)for(let $=0,ee=Z.length;$<ee;$++){let le=a.get(Z[$]);le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture(),s.memory.textures++)}if(E.samples>0&&an(E)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<Z.length;$++){let ee=Z[$];B.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let le=r.convert(ee.format,ee.colorSpace),De=r.convert(ee.type),fe=y(ee.internalFormat,le,De,ee.normalized,ee.colorSpace,E.isXRRenderTarget===!0),ue=Kt(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,fe,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,B.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ke(B.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ke(t.TEXTURE_CUBE_MAP,M);for(let $=0;$<6;$++)if(M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)ge(B.__webglFramebuffer[$][ee],E,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ee);else ge(B.__webglFramebuffer[$],E,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);h(M)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let $=0,ee=Z.length;$<ee;$++){let le=Z[$],De=a.get(le),fe=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,De.__webglTexture),ke(fe,le),ge(B.__webglFramebuffer,E,le,t.COLOR_ATTACHMENT0+$,fe,0),h(le)&&x(fe)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,q.__webglTexture),ke($,M),M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)ge(B.__webglFramebuffer[ee],E,M,t.COLOR_ATTACHMENT0,$,ee);else ge(B.__webglFramebuffer,E,M,t.COLOR_ATTACHMENT0,$,0);h(M)&&x($),n.unbindTexture()}E.depthBuffer&&Ze(E)}function rt(E){let M=E.textures;for(let B=0,q=M.length;B<q;B++){let Z=M[B];if(h(Z)){let re=S(E),oe=a.get(Z).__webglTexture;n.bindTexture(re,oe),x(re),n.unbindTexture()}}}let Vt=[],wn=[];function la(E){if(E.samples>0){if(an(E)===!1){let M=E.textures,B=E.width,q=E.height,Z=t.COLOR_BUFFER_BIT,re=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=a.get(E),$=M.length>1;if($)for(let le=0;le<M.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let ee=E.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<M.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let De=a.get(M[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,B,q,0,0,B,q,Z,t.NEAREST),l===!0&&(Vt.length=0,wn.length=0,Vt.push(t.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(Vt.push(re),wn.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,wn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Vt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let le=0;le<M.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let De=a.get(M[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let M=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Kt(E){return Math.min(i.maxSamples,E.samples)}function an(E){let M=a.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function N(E){let M=s.render.frame;d.get(E)!==M&&(d.set(E,M),E.update())}function Hn(E,M){let B=E.colorSpace,q=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==lu&&B!==tr&&(nt.getTransfer(B)===ft?(q!==Oa||Z!==ca)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",B)),M}function bt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.getTextureUnits=R,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=O,this.setTextureCube=te,this.rebindTextures=dt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=la,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=an,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function pD(t,e){function n(a,i=tr){let r,s=nt.getTransfer(i);if(a===ca)return t.UNSIGNED_BYTE;if(a===Uf)return t.UNSIGNED_SHORT_4_4_4_4;if(a===Bf)return t.UNSIGNED_SHORT_5_5_5_1;if(a===Eg)return t.UNSIGNED_INT_5_9_9_9_REV;if(a===Tg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(a===Ig)return t.BYTE;if(a===Lg)return t.SHORT;if(a===Zo)return t.UNSIGNED_SHORT;if(a===Nf)return t.INT;if(a===li)return t.UNSIGNED_INT;if(a===Ba)return t.FLOAT;if(a===un)return t.HALF_FLOAT;if(a===Ag)return t.ALPHA;if(a===Rg)return t.RGB;if(a===Oa)return t.RGBA;if(a===bi)return t.DEPTH_COMPONENT;if(a===Or)return t.DEPTH_STENCIL;if(a===Of)return t.RED;if(a===zf)return t.RED_INTEGER;if(a===zr)return t.RG;if(a===Hf)return t.RG_INTEGER;if(a===Vf)return t.RGBA_INTEGER;if(a===Vu||a===Gu||a===Wu||a===qu)if(s===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===Vu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Gu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Wu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===qu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===Vu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Gu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Wu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===qu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Gf||a===Wf||a===qf||a===Xf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===Gf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Wf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===qf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Xf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Yf||a===Kf||a===Zf||a===jf||a===$f||a===Xu||a===Jf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(a===Yf||a===Kf)return s===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===Zf)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(a===jf)return r.COMPRESSED_R11_EAC;if(a===$f)return r.COMPRESSED_SIGNED_R11_EAC;if(a===Xu)return r.COMPRESSED_RG11_EAC;if(a===Jf)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Qf||a===eh||a===th||a===nh||a===ah||a===ih||a===rh||a===sh||a===oh||a===lh||a===uh||a===ch||a===dh||a===fh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(a===Qf)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===eh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===th)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===nh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ah)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ih)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===rh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===sh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===oh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===lh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===uh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ch)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===dh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===fh)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===hh||a===ph||a===mh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(a===hh)return s===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ph)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===mh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===gh||a===xh||a===Yu||a===vh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(a===gh)return r.COMPRESSED_RED_RGTC1_EXT;if(a===xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Yu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===jo?t.UNSIGNED_INT_24_8:t[a]!==void 0?t[a]:null}return{convert:n}}var mD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ex=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let a=new vu(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,a=new Mt({vertexShader:mD,fragmentShader:gD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gt(new Es(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tx=class extends ri{constructor(e,n){super();let a=this,i=null,r=1,s=null,o="local-floor",l=1,u=null,d=null,f=null,c=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new ex,h={},x=n.getContextAttributes(),S=null,y=null,w=[],C=[],L=new ae,v=null,I=null,A=new Pn;A.viewport=new Gt;let P=new Pn;P.viewport=new Gt;let k=[A,P],z=new Rf,R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=w[K];return Q===void 0&&(Q=new Oo,w[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=w[K];return Q===void 0&&(Q=new Oo,w[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=w[K];return Q===void 0&&(Q=new Oo,w[K]=Q),Q.getHandSpace()};function V(K){let Q=C.indexOf(K.inputSource);if(Q===-1)return;let se=w[Q];se!==void 0&&(se.update(K.inputSource,K.frame,u||s),se.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",j);for(let K=0;K<w.length;K++){let Q=C[K];Q!==null&&(C[K]=null,w[K].disconnect(Q))}R=null,U=null,m.reset();for(let K in h)delete h[K];if(e.setRenderTarget(S),p=null,c=null,f=null,i=null,y=null,ze.stop(),a.isPresenting=!1,e.setPixelRatio(v),e.setSize(L.width,L.height,!1),I!==null){let K=I.camera;K.fov=I.fov,K.zoom=I.zoom,K.updateProjectionMatrix(),I=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,a.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,a.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,n)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",H),i.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Xe=null,ge=null;x.depth&&(ge=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=x.stencil?Or:bi,Xe=x.stencil?jo:li);let Ke={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:r};f=this.getBinding(),c=f.createProjectionLayer(Ke),i.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),y=new Ot(c.textureWidth,c.textureHeight,{format:Oa,type:ca,depthTexture:new Er(c.textureWidth,c.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{let se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,n,se),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ot(p.framebufferWidth,p.framebufferHeight,{format:Oa,type:ca,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await i.requestReferenceSpace(o),ze.setContext(i),ze.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(K){for(let Q=0;Q<K.removed.length;Q++){let se=K.removed[Q],Xe=C.indexOf(se);Xe>=0&&(C[Xe]=null,w[Xe].disconnect(se))}for(let Q=0;Q<K.added.length;Q++){let se=K.added[Q],Xe=C.indexOf(se);if(Xe===-1){for(let Ke=0;Ke<w.length;Ke++)if(Ke>=C.length){C.push(se),Xe=Ke;break}else if(C[Ke]===null){C[Ke]=se,Xe=Ke;break}if(Xe===-1)break}let ge=w[Xe];ge&&ge.connect(se)}}let X=new T,O=new T;function te(K,Q,se){X.setFromMatrixPosition(Q.matrixWorld),O.setFromMatrixPosition(se.matrixWorld);let Xe=X.distanceTo(O),ge=Q.projectionMatrix.elements,Ke=se.projectionMatrix.elements,Yt=ge[14]/(ge[10]-1),Ze=ge[14]/(ge[10]+1),dt=(ge[9]+1)/ge[5],Pt=(ge[9]-1)/ge[5],rt=(ge[8]-1)/ge[0],Vt=(Ke[8]+1)/Ke[0],wn=Yt*rt,la=Yt*Vt,Kt=Xe/(-rt+Vt),an=Kt*-rt;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(an),K.translateZ(Kt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ge[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let N=Yt+Kt,Hn=Ze+Kt,bt=wn-an,E=la+(Xe-an),M=dt*Ze/Hn*N,B=Pt*Ze/Hn*N;K.projectionMatrix.makePerspective(bt,E,M,B,N,Hn),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Te(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let Q=K.near,se=K.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(se=m.depthFar)),z.near=P.near=A.near=Q,z.far=P.far=A.far=se,(R!==z.near||U!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),R=z.near,U=z.far),z.layers.mask=K.layers.mask|6,A.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let Xe=K.parent,ge=z.cameras;Te(z,Xe);for(let Ke=0;Ke<ge.length;Ke++)Te(ge[Ke],Xe);ge.length===2?te(z,A,P):z.projectionMatrix.copy(A.projectionMatrix),I===null&&K.isPerspectiveCamera&&(I={camera:K,fov:K.fov,zoom:K.zoom}),ye(K,z,Xe)};function ye(K,Q,se){se===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(se.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=No*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(c===null&&p===null))return l},this.setFoveation=function(K){l=K,c!==null&&(c.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(K){return h[K]};let qe=null;function ke(K,Q){if(d=Q.getViewerPose(u||s),g=Q,d!==null){let se=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Xe=!1;se.length!==z.cameras.length&&(z.cameras.length=0,Xe=!0);for(let Ze=0;Ze<se.length;Ze++){let dt=se[Ze],Pt=null;if(p!==null)Pt=p.getViewport(dt);else{let Vt=f.getViewSubImage(c,dt);Pt=Vt.viewport,Ze===0&&(e.setRenderTargetTextures(y,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(y))}let rt=k[Ze];rt===void 0&&(rt=new Pn,rt.layers.enable(Ze),rt.viewport=new Gt,k[Ze]=rt),rt.matrix.fromArray(dt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(dt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Ze===0&&(z.matrix.copy(rt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Xe===!0&&z.cameras.push(rt)}let ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=a.getBinding();let Ze=f.getDepthInformation(se[0]);Ze&&Ze.isValid&&Ze.texture&&m.init(Ze,i.renderState)}if(ge&&ge.includes("camera-access")&&_){e.state.unbindTexture(),f=a.getBinding();for(let Ze=0;Ze<se.length;Ze++){let dt=se[Ze].camera;if(dt){let Pt=h[dt];Pt||(Pt=new vu,h[dt]=Pt);let rt=f.getCameraImage(dt);Pt.sourceTexture=rt}}}}for(let se=0;se<w.length;se++){let Xe=C[se],ge=w[se];Xe!==null&&ge!==void 0&&ge.update(Xe,Q,u||s)}qe&&qe(K,Q),Q.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ze=new HS;ze.setAnimationLoop(ke),this.setAnimationLoop=function(K){qe=K},this.dispose=function(){}}},xD=new He,YS=new Ge;YS.set(-1,0,0,0,1,0,0,0,1);function vD(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function a(m,h){h.color.getRGB(m.fogColor.value,Ug(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,x,S,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(m,h):h.isMeshLambertMaterial?(r(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),d(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(m,h),c(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),_(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,x,S):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Fn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Fn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let x=e.get(h),S=x.envMap,y=x.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(xD.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(YS),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=S*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function c(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Fn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){let x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:i}}function yD(t,e,n,a){let i={},r={},s=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let C=w.program;a.uniformBlockBinding(y,C)}function u(y,w){let C=i[y.id];C===void 0&&(m(y),C=d(y),i[y.id]=C,y.addEventListener("dispose",x));let L=w.program;a.updateUBOMapping(y,L);let v=e.render.frame;r[y.id]!==v&&(c(y),r[y.id]=v)}function d(y){let w=f();y.__bindingPointIndex=w;let C=t.createBuffer(),L=y.__size,v=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,C),t.bufferData(t.UNIFORM_BUFFER,L,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,C),C}function f(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(y){let w=i[y.id],C=y.uniforms,L=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let v=0,I=C.length;v<I;v++){let A=C[v];if(Array.isArray(A))for(let P=0,k=A.length;P<k;P++)p(A[P],v,P,L);else p(A,v,0,L)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,w,C,L){if(_(y,w,C,L)===!0){let v=y.__offset,I=y.value;if(Array.isArray(I)){let A=0;for(let P=0;P<I.length;P++){let k=I[P],z=h(k);g(k,y.__data,A),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(A+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(I,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,y.__data)}}function g(y,w,C){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,C)}function _(y,w,C,L){let v=y.value,I=w+"_"+C;if(L[I]===void 0)return typeof v=="number"||typeof v=="boolean"?L[I]=v:ArrayBuffer.isView(v)?L[I]=v.slice():L[I]=v.clone(),!0;{let A=L[I];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return L[I]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function m(y){let w=y.uniforms,C=0,L=16;for(let I=0,A=w.length;I<A;I++){let P=Array.isArray(w[I])?w[I]:[w[I]];for(let k=0,z=P.length;k<z;k++){let R=P[k],U=Array.isArray(R.value)?R.value:[R.value];for(let V=0,H=U.length;V<H;V++){let j=U[V],X=h(j),O=C%L,te=O%X.boundary,Te=O+te;C+=te,Te!==0&&L-Te<X.storage&&(C+=L-Te),R.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=C,C+=X.storage}}}let v=C%L;return v>0&&(C+=L-v),y.__size=C,y.__cache={},this}function h(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",y),w}function x(y){let w=y.target;w.removeEventListener("dispose",x);let C=s.indexOf(w.__bindingPointIndex);s.splice(C,1),t.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function S(){for(let y in i)t.deleteBuffer(i[y]);s=[],i={},r={}}return{bind:l,update:u,dispose:S}}var _D=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function SD(){return Ei===null&&(Ei=new pu(_D,16,16,zr,un),Ei.name="DFG_LUT",Ei.minFilter=on,Ei.magFilter=on,Ei.wrapS=Ci,Ei.wrapT=Ci,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var bh=class{constructor(e={}){let{canvas:n=hS(),context:a=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:c=!1,outputBufferType:p=ca}=e;this.isWebGLRenderer=!0;let g;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=a.getContextAttributes().alpha}else g=s;let _=p,m=new Set([Vf,Hf,zf]),h=new Set([ca,li,Zo,jo,Uf,Bf]),x=new Uint32Array(4),S=new Int32Array(4),y=new T,w=null,C=null,L=[],v=[],I=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,k=null,z=null,R=null,U=null;this._outputColorSpace=Sa;let V=0,H=0,j=null,X=-1,O=null,te=new Gt,Te=new Gt,ye=null,qe=new Ie(0),ke=0,ze=n.width,K=n.height,Q=1,se=null,Xe=null,ge=new Gt(0,0,ze,K),Ke=new Gt(0,0,ze,K),Yt=!1,Ze=new Ho,dt=!1,Pt=!1,rt=new He,Vt=new T,wn=new Gt,la={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function an(){return j===null?Q:1}let N=a;function Hn(b,D){return n.getContext(b,D)}let bt,E,M,B,q,Z,re,oe,$,ee,le,De,fe,ue,Fe,Ue,je,F,ce,J,de,xe,ne;try{let b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",Dt,!1),n.addEventListener("webglcontextrestored",yt,!1),n.addEventListener("webglcontextcreationerror",ei,!1),N===null){let D="webgl2";if(N=Hn(D,b),N===null)throw Hn(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(b){throw n.removeEventListener("webglcontextlost",Dt,!1),n.removeEventListener("webglcontextrestored",yt,!1),n.removeEventListener("webglcontextcreationerror",ei,!1),Ve("WebGLRenderer: "+b.message),b}function Ne(){bt=new EP(N),bt.init(),de=new pD(N,bt),E=new vP(N,bt,e,de),M=new fD(N,bt),E.reversedDepthBuffer&&c&&M.buffers.depth.setReversed(!0),z=N.createFramebuffer(),R=N.createFramebuffer(),U=N.createFramebuffer(),B=new RP(N),q=new J2,Z=new hD(N,bt,M,q,E,de,B),re=new LP(A),oe=new DA(N),xe=new gP(N,oe),$=new TP(N,oe,B,xe),ee=new DP(N,$,oe,xe,B),F=new PP(N,E,Z),Fe=new yP(q),le=new $2(A,re,bt,E,xe,Fe),De=new vD(A,q),fe=new eD,ue=new sD(bt),je=new mP(A,re,M,ee,g,l),Ue=new dD(A,ee,E),ne=new yD(N,B,E,M),ce=new xP(N,bt,B),J=new AP(N,bt,B),B.programs=le.programs,A.capabilities=E,A.extensions=bt,A.properties=q,A.renderLists=fe,A.shadowMap=Ue,A.state=M,A.info=B}_!==ca&&(I=new kP(_,n.width,n.height,o,i,r));let Ae=new tx(A,N);this.xr=Ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(ze,K,!1))},this.getSize=function(b){return b.set(ze,K)},this.setSize=function(b,D,Y=!0){if(Ae.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=b,K=D,n.width=Math.floor(b*Q),n.height=Math.floor(D*Q),Y===!0&&(n.style.width=b+"px",n.style.height=D+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(ze*Q,K*Q).floor()},this.setDrawingBufferSize=function(b,D,Y){ze=b,K=D,Q=Y,n.width=Math.floor(b*Y),n.height=Math.floor(D*Y),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(_===ca){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(te)},this.getViewport=function(b){return b.copy(ge)},this.setViewport=function(b,D,Y,G){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,D,Y,G),M.viewport(te.copy(ge).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(Ke)},this.setScissor=function(b,D,Y,G){b.isVector4?Ke.set(b.x,b.y,b.z,b.w):Ke.set(b,D,Y,G),M.scissor(Te.copy(Ke).multiplyScalar(Q).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(b){M.setScissorTest(Yt=b)},this.setOpaqueSort=function(b){se=b},this.setTransparentSort=function(b){Xe=b},this.getClearColor=function(b){return b.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,Y=!0){let G=0;if(b){let W=!1;if(j!==null){let me=j.texture.format;W=m.has(me)}if(W){let me=j.texture.type,we=h.has(me),pe=je.getClearColor(),Le=je.getClearAlpha(),Re=pe.r,Je=pe.g,at=pe.b;we?(x[0]=Re,x[1]=Je,x[2]=at,x[3]=Le,N.clearBufferuiv(N.COLOR,0,x)):(S[0]=Re,S[1]=Je,S[2]=at,S[3]=Le,N.clearBufferiv(N.COLOR,0,S))}else G|=N.COLOR_BUFFER_BIT}D&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),k=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Dt,!1),n.removeEventListener("webglcontextrestored",yt,!1),n.removeEventListener("webglcontextcreationerror",ei,!1),je.dispose(),fe.dispose(),ue.dispose(),q.dispose(),re.dispose(),ee.dispose(),xe.dispose(),ne.dispose(),le.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Yy),Ae.removeEventListener("sessionend",Ky),_s.stop()};function Dt(b){b.preventDefault(),Fg("WebGLRenderer: Context Lost."),P=!0}function yt(){Fg("WebGLRenderer: Context Restored."),P=!1;let b=B.autoReset,D=Ue.enabled,Y=Ue.autoUpdate,G=Ue.needsUpdate,W=Ue.type;Ne(),B.autoReset=b,Ue.enabled=D,Ue.autoUpdate=Y,Ue.needsUpdate=G,Ue.type=W}function ei(b){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Si(b){let D=b.target;D.removeEventListener("dispose",Si),hT(D)}function hT(b){pT(b),q.remove(b)}function pT(b){let D=q.get(b).programs;D!==void 0&&(D.forEach(function(Y){le.releaseProgram(Y)}),b.isShaderMaterial&&le.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,Y,G,W,me){D===null&&(D=la);let we=W.isMesh&&W.matrixWorld.determinantAffine()<0,pe=xT(b,D,Y,G,W);M.setMaterial(G,we);let Le=Y.index,Re=1;if(G.wireframe===!0){if(Le=$.getWireframeAttribute(Y),Le===void 0)return;Re=2}let Je=Y.drawRange,at=Y.attributes.position,Ee=Je.start*Re,_t=(Je.start+Je.count)*Re;me!==null&&(Ee=Math.max(Ee,me.start*Re),_t=Math.min(_t,(me.start+me.count)*Re)),Le!==null?(Ee=Math.max(Ee,0),_t=Math.min(_t,Le.count)):at!=null&&(Ee=Math.max(Ee,0),_t=Math.min(_t,at.count));let rn=_t-Ee;if(rn<0||rn===1/0)return;xe.setup(W,G,pe,Y,Le);let Ut,At=ce;if(Le!==null&&(Ut=oe.get(Le),At=J,At.setIndex(Ut)),W.isMesh)G.wireframe===!0?(M.setLineWidth(G.wireframeLinewidth*an()),At.setMode(N.LINES)):At.setMode(N.TRIANGLES);else if(W.isLine){let Vn=G.linewidth;Vn===void 0&&(Vn=1),M.setLineWidth(Vn*an()),W.isLineSegments?At.setMode(N.LINES):W.isLineLoop?At.setMode(N.LINE_LOOP):At.setMode(N.LINE_STRIP)}else W.isPoints?At.setMode(N.POINTS):W.isSprite&&At.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))At.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Vn=W._multiDrawStarts,Se=W._multiDrawCounts,$n=W._multiDrawCount,lt=Le?oe.get(Le).bytesPerElement:1,Da=q.get(G).currentProgram.getUniforms();for(let Mi=0;Mi<$n;Mi++)Da.setValue(N,"_gl_DrawID",Mi),At.render(Vn[Mi]/lt,Se[Mi])}else if(W.isInstancedMesh)At.renderInstances(Ee,rn,W.count);else if(Y.isInstancedBufferGeometry){let Vn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Se=Math.min(Y.instanceCount,Vn);At.renderInstances(Ee,rn,Se)}else At.render(Ee,rn)};function Xy(b,D,Y,G){k!==null&&b.isNodeMaterial&&k.setObject(G,b),dt===!0&&Fe.setState(b,Y,!1),b.transparent===!0&&b.side===fn&&b.forceSinglePass===!1?(b.side=Fn,b.needsUpdate=!0,Id(b,D,G),b.side=Li,b.needsUpdate=!0,Id(b,D,G),b.side=fn):Id(b,D,G)}this.compile=function(b,D,Y=null){Y===null&&(Y=b),k!==null&&k.renderStart(b,D,Y),C=ue.get(Y),C.init(D),v.push(C),Y.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(C.pushLight(W),W.castShadow&&C.pushShadow(W))}),b!==Y&&b.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(C.pushLight(W),W.castShadow&&C.pushShadow(W))}),C.setupLights(),k!==null&&k.updateLights(C.state.lightsArray),Pt=this.localClippingEnabled,dt=Fe.init(this.clippingPlanes,Pt),dt===!0&&Fe.setGlobalState(this.clippingPlanes,D),k!==null&&Ue.render(C.state.shadowsArray,Y,D);let G=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let me=W.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){let pe=me[we];Xy(pe,Y,D,W),G.add(pe)}else Xy(me,Y,D,W),G.add(me)}),C=v.pop(),k!==null&&k.renderEnd(),G},this.compileAsync=function(b,D,Y=null){let G=this.compile(b,D,Y);return new Promise(W=>{function me(){if(G.forEach(function(we){let Le=q.get(we).currentProgram;(Le===void 0||Le.isReady())&&G.delete(we)}),G.size===0){W(b);return}setTimeout(me,10)}bt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Um=null;function mT(b){Um&&Um(b)}function Yy(){_s.stop()}function Ky(){_s.start()}let _s=new HS;_s.setAnimationLoop(mT),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(b){Um=b,Ae.setAnimationLoop(b),b===null?_s.stop():_s.start()},Ae.addEventListener("sessionstart",Yy),Ae.addEventListener("sessionend",Ky),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(b,D);let Y=Ae.enabled===!0&&Ae.isPresenting===!0,G=I!==null&&(j===null||Y)&&I.begin(A,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(D),D=Ae.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,D,j),C=ue.get(b,v.length),C.init(D),C.state.textureUnits=Z.getTextureUnits(),v.push(C),rt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ze.setFromProjectionMatrix(rt,ii,D.reversedDepth),Pt=this.localClippingEnabled,dt=Fe.init(this.clippingPlanes,Pt),w=fe.get(b,L.length),w.init(),L.push(w),Ae.enabled===!0&&Ae.isPresenting===!0){let we=A.xr.getDepthSensingMesh();we!==null&&Bm(we,D,-1/0,A.sortObjects)}Bm(b,D,0,A.sortObjects),w.finish(),k!==null&&k.updateLights(C.state.lightsArray),A.sortObjects===!0&&w.sort(se,Xe),Kt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Kt&&je.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&Fe.beginShadows();let W=C.state.shadowsArray;if(Ue.render(W,b,D),dt===!0&&Fe.endShadows(),(G&&I.hasRenderPass())===!1){let we=w.opaque,pe=w.transmissive;if(C.setupLights(),D.isArrayCamera){let Le=D.cameras;if(pe.length>0)for(let Re=0,Je=Le.length;Re<Je;Re++){let at=Le[Re];jy(we,pe,b,at)}Kt&&je.render(b);for(let Re=0,Je=Le.length;Re<Je;Re++){let at=Le[Re];Zy(w,b,at,at.viewport)}}else pe.length>0&&jy(we,pe,b,D),Kt&&je.render(b),Zy(w,b,D)}j!==null&&H===0&&(Z.updateMultisampleRenderTarget(j),Z.updateRenderTargetMipmap(j)),G&&I.end(A),b.isScene===!0&&b.onAfterRender(A,b,D),xe.resetDefaultState(),X=-1,O=null,v.pop(),v.length>0?(C=v[v.length-1],Z.setTextureUnits(C.state.textureUnits),dt===!0&&Fe.setGlobalState(A.clippingPlanes,C.state.camera)):C=null,L.pop(),L.length>0?w=L[L.length-1]:w=null,k!==null&&k.renderEnd()};function Bm(b,D,Y,G){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)C.pushLightProbeGrid(b);else if(b.isLight)C.pushLight(b),b.castShadow&&C.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Ze)){G&&wn.setFromMatrixPosition(b.matrixWorld).applyMatrix4(rt);let we=ee.update(b),pe=b.material;pe.visible&&w.push(b,we,pe,Y,wn.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Ze))){let we=ee.update(b),pe=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),wn.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),wn.copy(we.boundingSphere.center)),wn.applyMatrix4(b.matrixWorld).applyMatrix4(rt)),Array.isArray(pe)){let Le=we.groups;for(let Re=0,Je=Le.length;Re<Je;Re++){let at=Le[Re],Ee=pe[at.materialIndex];Ee&&Ee.visible&&w.push(b,we,Ee,Y,wn.z,at,D)}}else pe.visible&&w.push(b,we,pe,Y,wn.z,null,D)}}let me=b.children;for(let we=0,pe=me.length;we<pe;we++)Bm(me[we],D,Y,G)}function Zy(b,D,Y,G){let{opaque:W,transmissive:me,transparent:we}=b;C.setupLightsView(Y),dt===!0&&Fe.setGlobalState(A.clippingPlanes,Y),G&&M.viewport(te.copy(G)),W.length>0&&bd(W,D,Y),me.length>0&&bd(me,D,Y),we.length>0&&bd(we,D,Y),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function jy(b,D,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[G.id]===void 0){let Ee=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[G.id]=new Ot(1,1,{generateMipmaps:!0,type:Ee?un:ca,minFilter:Br,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let me=C.state.transmissionRenderTarget[G.id],we=G.viewport||te;me.setSize(we.z*A.transmissionResolutionScale,we.w*A.transmissionResolutionScale);let pe=A.getRenderTarget(),Le=A.getActiveCubeFace(),Re=A.getActiveMipmapLevel();A.setRenderTarget(me),A.getClearColor(qe),ke=A.getClearAlpha(),ke<1&&A.setClearColor(16777215,.5),A.clear(),Kt&&je.render(Y);let Je=A.toneMapping;A.toneMapping=oi;let at=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),C.setupLightsView(G),dt===!0&&Fe.setGlobalState(A.clippingPlanes,G),bd(b,Y,G),Z.updateMultisampleRenderTarget(me),Z.updateRenderTargetMipmap(me),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let _t=0,rn=D.length;_t<rn;_t++){let Ut=D[_t],{object:At,geometry:Vn,material:Se,group:$n}=Ut;if(Se.side===fn&&At.layers.test(G.layers)){let lt=Se.side;Se.side=Fn,Se.needsUpdate=!0,$y(At,Y,G,Vn,Se,$n),Se.side=lt,Se.needsUpdate=!0,Ee=!0}}Ee===!0&&(Z.updateMultisampleRenderTarget(me),Z.updateRenderTargetMipmap(me))}A.setRenderTarget(pe,Le,Re),A.setClearColor(qe,ke),at!==void 0&&(G.viewport=at),A.toneMapping=Je}function bd(b,D,Y){let G=D.isScene===!0?D.overrideMaterial:null;for(let W=0,me=b.length;W<me;W++){let we=b[W],{object:pe,geometry:Le,group:Re}=we,Je=we.material;Je.allowOverride===!0&&G!==null&&(Je=G),pe.layers.test(Y.layers)&&$y(pe,D,Y,Le,Je,Re)}}function $y(b,D,Y,G,W,me){k!==null&&W.isNodeMaterial&&k.setObject(b,W),b.onBeforeRender(A,D,Y,G,W,me),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(A,D,Y,G,b,me),W.transparent===!0&&W.side===fn&&W.forceSinglePass===!1?(W.side=Fn,W.needsUpdate=!0,A.renderBufferDirect(Y,D,G,W,b,me),W.side=Li,W.needsUpdate=!0,A.renderBufferDirect(Y,D,G,W,b,me),W.side=fn):A.renderBufferDirect(Y,D,G,W,b,me),b.onAfterRender(A,D,Y,G,W,me)}function Id(b,D,Y){D.isScene!==!0&&(D=la);let G=q.get(b),W=C.state.lights,me=C.state.shadowsArray,we=W.state.version,pe=le.getParameters(b,W.state,me,D,Y,C.state.lightProbeGridArray),Le=le.getProgramCacheKey(pe),Re=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,G.fog=D.fog;let Je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=re.get(b.envMap||G.environment,Je),G.envMapRotation=G.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",Si),Re=new Map,G.programs=Re);let at=Re.get(Le);if(at!==void 0){if(G.currentProgram===at&&G.lightsStateVersion===we)return Qy(b,pe),at}else pe.uniforms=le.getUniforms(b),k!==null&&b.isNodeMaterial&&k.build(b,Y,pe),b.onBeforeCompile(pe,A),at=le.acquireProgram(pe,Le),Re.set(Le,at),G.uniforms=pe.uniforms;let Ee=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ee.clippingPlanes=Fe.uniform),Qy(b,pe),G.needsLights=yT(b),G.lightsStateVersion=we,G.needsLights&&(Ee.ambientLightColor.value=W.state.ambient,Ee.lightProbe.value=W.state.probe,Ee.sunLights.value=W.state.sun,Ee.sunLightShadows.value=W.state.sunShadow,Ee.directionalLights.value=W.state.directional,Ee.directionalLightShadows.value=W.state.directionalShadow,Ee.spotLights.value=W.state.spot,Ee.spotLightShadows.value=W.state.spotShadow,Ee.rectAreaLights.value=W.state.rectArea,Ee.ltc_1.value=W.state.rectAreaLTC1,Ee.ltc_2.value=W.state.rectAreaLTC2,Ee.pointLights.value=W.state.point,Ee.pointLightShadows.value=W.state.pointShadow,Ee.hemisphereLights.value=W.state.hemi,Ee.sunShadowMatrix.value=W.state.sunShadowMatrix,Ee.sunShadowCascade.value=W.state.sunShadowCascade,Ee.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ee.spotLightMatrix.value=W.state.spotLightMatrix,Ee.spotLightMap.value=W.state.spotLightMap,Ee.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=C.state.lightProbeGridArray.length>0,G.currentProgram=at,G.uniformsList=null,at}function Jy(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=el.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Qy(b,D){let Y=q.get(b);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function gT(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let Y=0,G=b.length;Y<G;Y++){let W=b[Y];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function xT(b,D,Y,G,W){D.isScene!==!0&&(D=la),Z.resetTextureUnits();let me=D.fog,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?D.environment:null,pe=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:nt.workingColorSpace,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Re=re.get(G.envMap||we,Le),Je=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,at=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ee=!!Y.morphAttributes.position,_t=!!Y.morphAttributes.normal,rn=!!Y.morphAttributes.color,Ut=oi;G.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ut=A.toneMapping);let At=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Vn=At!==void 0?At.length:0,Se=q.get(G),$n=C.state.lights;if(dt===!0&&(Pt===!0||b!==O)){let Ft=b===O&&G.id===X;Fe.setState(G,b,Ft)}let lt=!1;G.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==$n.state.version||Se.outputColorSpace!==pe||W.isBatchedMesh&&Se.batching===!1||!W.isBatchedMesh&&Se.batching===!0||W.isBatchedMesh&&Se.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Se.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Se.instancing===!1||!W.isInstancedMesh&&Se.instancing===!0||W.isSkinnedMesh&&Se.skinning===!1||!W.isSkinnedMesh&&Se.skinning===!0||W.isInstancedMesh&&Se.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Se.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Se.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Se.instancingMorph===!1&&W.morphTexture!==null||Se.envMap!==Re||G.fog===!0&&Se.fog!==me||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Fe.numPlanes||Se.numIntersection!==Fe.numIntersection)||Se.vertexAlphas!==Je||Se.vertexTangents!==at||Se.morphTargets!==Ee||Se.morphNormals!==_t||Se.morphColors!==rn||Se.toneMapping!==Ut||Se.morphTargetsCount!==Vn||!!Se.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Se.__version=G.version);let Da=Se.currentProgram;lt===!0&&(Da=Id(G,D,W),k&&G.isNodeMaterial&&k.onUpdateProgram(G,Da,Se));let Mi=!1,vr=!1,po=!1,Tt=Da.getUniforms(),Qt=Se.uniforms;if(M.useProgram(Da.program)&&(Mi=!0,vr=!0,po=!0),G.id!==X&&(X=G.id,vr=!0),Se.needsLights){let Ft=gT(C.state.lightProbeGridArray,W);Se.lightProbeGrid!==Ft&&(Se.lightProbeGrid=Ft,vr=!0)}if(Mi||O!==b){M.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Tt.setValue(N,"projectionMatrix",b.projectionMatrix),Tt.setValue(N,"viewMatrix",b.matrixWorldInverse);let _r=Tt.map.cameraPosition;_r!==void 0&&_r.setValue(N,Vt.setFromMatrixPosition(b.matrixWorld)),E.logarithmicDepthBuffer&&Tt.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),O!==b&&(O=b,vr=!0,po=!0)}if(Se.needsLights&&($n.state.sunShadowMap.length>0&&Tt.setValue(N,"sunShadowMap",$n.state.sunShadowMap,Z),$n.state.directionalShadowMap.length>0&&Tt.setValue(N,"directionalShadowMap",$n.state.directionalShadowMap,Z),$n.state.spotShadowMap.length>0&&Tt.setValue(N,"spotShadowMap",$n.state.spotShadowMap,Z),$n.state.pointShadowMap.length>0&&Tt.setValue(N,"pointShadowMap",$n.state.pointShadowMap,Z)),W.isSkinnedMesh){Tt.setOptional(N,W,"bindMatrix"),Tt.setOptional(N,W,"bindMatrixInverse");let Ft=W.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Tt.setValue(N,"boneTexture",Ft.boneTexture,Z))}W.isBatchedMesh&&(Tt.setOptional(N,W,"batchingTexture"),Tt.setValue(N,"batchingTexture",W._matricesTexture,Z),Tt.setOptional(N,W,"batchingIdTexture"),Tt.setValue(N,"batchingIdTexture",W._indirectTexture,Z),Tt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&Tt.setValue(N,"batchingColorTexture",W._colorsTexture,Z));let yr=Y.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0)&&F.update(W,Y,Da),(vr||Se.receiveShadow!==W.receiveShadow)&&(Se.receiveShadow=W.receiveShadow,Tt.setValue(N,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&D.environment!==null&&(Qt.envMapIntensity.value=D.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=SD()),vr){if(Tt.setValue(N,"toneMappingExposure",A.toneMappingExposure),Se.needsLights&&vT(Qt,po),me&&G.fog===!0&&De.refreshFogUniforms(Qt,me),De.refreshMaterialUniforms(Qt,G,Q,K,C.state.transmissionRenderTarget[b.id]),Se.needsLights&&Se.lightProbeGrid){let Ft=Se.lightProbeGrid;Qt.probesSH.value=Ft.texture,Qt.probesMin.value.copy(Ft.boundingBox.min),Qt.probesMax.value.copy(Ft.boundingBox.max),Qt.probesResolution.value.copy(Ft.resolution)}el.upload(N,Jy(Se),Qt,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(el.upload(N,Jy(Se),Qt,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(N,"center",W.center),Tt.setValue(N,"modelViewMatrix",W.modelViewMatrix),Tt.setValue(N,"normalMatrix",W.normalMatrix),Tt.setValue(N,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Ft=G.uniformsGroups;for(let _r=0,mo=Ft.length;_r<mo;_r++){let t_=Ft[_r];ne.update(t_,Da),ne.bind(t_,Da)}}return Da}function vT(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function yT(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,D,Y){let G=q.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(b.texture).__webglTexture=D,q.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let Y=q.get(b);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,Y=0){j=b,V=D,H=Y;let G=null,W=!1,me=!1;if(b){let pe=q.get(b);if(pe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(N.FRAMEBUFFER,pe.__webglFramebuffer),te.copy(b.viewport),Te.copy(b.scissor),ye=b.scissorTest,M.viewport(te),M.scissor(Te),M.setScissorTest(ye),X=-1;return}else if(pe.__webglFramebuffer===void 0)Z.setupRenderTarget(b);else if(pe.__hasExternalTextures)Z.rebindTextures(b,q.get(b.texture).__webglTexture,q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Je=b.depthTexture;if(pe.__boundDepthTexture!==Je){if(Je!==null&&q.has(Je)&&(b.width!==Je.image.width||b.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(b)}}let Le=b.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(me=!0);let Re=q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?G=Re[D][Y]:G=Re[D],W=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?G=q.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?G=Re[Y]:G=Re,te.copy(b.viewport),Te.copy(b.scissor),ye=b.scissorTest}else te.copy(ge).multiplyScalar(Q).floor(),Te.copy(Ke).multiplyScalar(Q).floor(),ye=Yt;if(Y!==0&&(G=z),M.bindFramebuffer(N.FRAMEBUFFER,G)&&M.drawBuffers(b,G),M.viewport(te),M.scissor(Te),M.setScissorTest(ye),W){let pe=q.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,Y)}else if(me){let pe=D;for(let Le=0;Le<b.textures.length;Le++){let Re=q.get(b.textures[Le]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Le,Re.__webglTexture,Y,pe)}}else if(b!==null&&Y!==0){let pe=q.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pe.__webglTexture,Y)}X=-1};function e_(b){let D=q.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=E.textureFormatReadable(b.format),D.__typeReadable=E.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,Y,G,W,me,we,pe=0){if(!(b&&b.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){M.bindFramebuffer(N.FRAMEBUFFER,Le);try{let Re=b.textures[pe],Je=Re.format,at=Re.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe);let Ee=e_(Re);if(Ee.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-G&&Y>=0&&Y<=b.height-W&&N.readPixels(D,Y,G,W,de.convert(Je),de.convert(at),me)}finally{let Re=j!==null?q.get(j).__webglFramebuffer:null;M.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,D,Y,G,W,me,we,pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le)if(D>=0&&D<=b.width-G&&Y>=0&&Y<=b.height-W){M.bindFramebuffer(N.FRAMEBUFFER,Le);let Re=b.textures[pe],Je=Re.format,at=Re.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe);let Ee=e_(Re);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),N.readPixels(D,Y,G,W,de.convert(Je),de.convert(at),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let rn=j!==null?q.get(j).__webglFramebuffer:null;M.bindFramebuffer(N.FRAMEBUFFER,rn);let Ut=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await mS(N,Ut,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(_t),N.deleteSync(Ut),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(b.image.width*G),me=Math.floor(b.image.height*G),we=D!==null?D.x:0,pe=D!==null?D.y:0;Z.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,we,pe,W,me),M.unbindTexture()},this.copyTextureToTexture=function(b,D,Y=null,G=null,W=0,me=0){let we,pe,Le,Re,Je,at,Ee,_t,rn,Ut=b.isCompressedTexture?b.mipmaps[me]:b.image;if(Y!==null)we=Y.max.x-Y.min.x,pe=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,Re=Y.min.x,Je=Y.min.y,at=Y.isBox3?Y.min.z:0;else{let Qt=Math.pow(2,-W);we=Math.floor(Ut.width*Qt),pe=Math.floor(Ut.height*Qt),b.isDataArrayTexture?Le=Ut.depth:b.isData3DTexture?Le=Math.floor(Ut.depth*Qt):Le=1,Re=0,Je=0,at=0}G!==null?(Ee=G.x,_t=G.y,rn=G.z):(Ee=0,_t=0,rn=0);let At=de.convert(D.format),Vn=de.convert(D.type),Se;D.isData3DTexture?(Z.setTexture3D(D,0),Se=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Z.setTexture2DArray(D,0),Se=N.TEXTURE_2D_ARRAY):(Z.setTexture2D(D,0),Se=N.TEXTURE_2D),M.activeTexture(N.TEXTURE0),M.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),M.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),M.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let $n=M.getParameter(N.UNPACK_ROW_LENGTH),lt=M.getParameter(N.UNPACK_IMAGE_HEIGHT),Da=M.getParameter(N.UNPACK_SKIP_PIXELS),Mi=M.getParameter(N.UNPACK_SKIP_ROWS),vr=M.getParameter(N.UNPACK_SKIP_IMAGES);M.pixelStorei(N.UNPACK_ROW_LENGTH,Ut.width),M.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ut.height),M.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),M.pixelStorei(N.UNPACK_SKIP_ROWS,Je),M.pixelStorei(N.UNPACK_SKIP_IMAGES,at);let po=b.isDataArrayTexture||b.isData3DTexture,Tt=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let Qt=q.get(b),yr=q.get(D),Ft=q.get(Qt.__renderTarget),_r=q.get(yr.__renderTarget);M.bindFramebuffer(N.READ_FRAMEBUFFER,Ft.__webglFramebuffer),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let mo=0;mo<Le;mo++)po&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(b).__webglTexture,W,at+mo),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(D).__webglTexture,me,rn+mo)),N.blitFramebuffer(Re,Je,we,pe,Ee,_t,we,pe,N.DEPTH_BUFFER_BIT,N.NEAREST);M.bindFramebuffer(N.READ_FRAMEBUFFER,null),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||q.has(b)){let Qt=q.get(b),yr=q.get(D);M.bindFramebuffer(N.READ_FRAMEBUFFER,R),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,U);for(let Ft=0;Ft<Le;Ft++)po?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Qt.__webglTexture,W,at+Ft):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Qt.__webglTexture,W),Tt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yr.__webglTexture,me,rn+Ft):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yr.__webglTexture,me),W!==0?N.blitFramebuffer(Re,Je,we,pe,Ee,_t,we,pe,N.COLOR_BUFFER_BIT,N.NEAREST):Tt?N.copyTexSubImage3D(Se,me,Ee,_t,rn+Ft,Re,Je,we,pe):N.copyTexSubImage2D(Se,me,Ee,_t,Re,Je,we,pe);M.bindFramebuffer(N.READ_FRAMEBUFFER,null),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Tt?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Se,me,Ee,_t,rn,we,pe,Le,At,Vn,Ut.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Se,me,Ee,_t,rn,we,pe,Le,At,Ut.data):N.texSubImage3D(Se,me,Ee,_t,rn,we,pe,Le,At,Vn,Ut):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,me,Ee,_t,we,pe,At,Vn,Ut.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,me,Ee,_t,Ut.width,Ut.height,At,Ut.data):N.texSubImage2D(N.TEXTURE_2D,me,Ee,_t,we,pe,At,Vn,Ut);M.pixelStorei(N.UNPACK_ROW_LENGTH,$n),M.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt),M.pixelStorei(N.UNPACK_SKIP_PIXELS,Da),M.pixelStorei(N.UNPACK_SKIP_ROWS,Mi),M.pixelStorei(N.UNPACK_SKIP_IMAGES,vr),me===0&&D.generateMipmaps&&N.generateMipmap(Se),M.unbindTexture()},this.initRenderTarget=function(b){q.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),M.unbindTexture()},this.resetState=function(){V=0,H=0,j=null,M.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}};var KS={type:"change"},ax={type:"start"},jS={type:"end"},Eh=new Lr,ZS=new Qn,MD=Math.cos(70*kn.DEG2RAD),gn=new T,da=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nx=1e-6,Th=class extends Pu{constructor(e,n=null){super(e,n),this.state=It.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Nr.ROTATE,TWO:Nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Ma,this._lastTargetPosition=new T,this._quat=new Ma().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xo,this._sphericalDelta=new Xo,this._scale=1,this._panOffset=new T,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new T,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=CD.bind(this),this._onPointerDown=wD.bind(this),this._onPointerUp=bD.bind(this),this._onContextMenu=PD.bind(this),this._onMouseWheel=ED.bind(this),this._onKeyDown=TD.bind(this),this._onTouchStart=AD.bind(this),this._onTouchMove=RD.bind(this),this._onMouseDown=ID.bind(this),this._onMouseMove=LD.bind(this),this._interceptControlDown=DD.bind(this),this._interceptControlUp=FD.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=It.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(KS),this.update(),this.state=It.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let n=this.object.position;gn.copy(n).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(a)&&isFinite(i)&&(a<-Math.PI?a+=da:a>Math.PI&&(a-=da),i<-Math.PI?i+=da:i>Math.PI&&(i-=da),a<=i?this._spherical.theta=Math.max(a,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+i)/2?Math.max(a,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),n.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){let o=gn.length();s=this._clampDistance(o*this._scale);let l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new T(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let u=new T(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),s=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Eh.origin.copy(this.object.position),Eh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eh.direction))<MD?this.object.lookAt(this.target):(ZS.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eh.intersectPlane(ZS,this.target))))}else if(this.object.isOrthographicCamera){let s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nx||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nx||this._lastTargetPosition.distanceToSquared(this.target)>nx?(this.dispatchEvent(KS),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?da/60*this.autoRotateSpeed*e:da/60/60*this.autoRotateSpeed}_getZoomScale(e){let n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){gn.setFromMatrixColumn(n,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,n){this.screenSpacePanning===!0?gn.setFromMatrixColumn(n,1):(gn.setFromMatrixColumn(n,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,n){let a=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;gn.copy(i).sub(this.target);let r=gn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/a.clientHeight,this.object.matrix),this._panUp(2*n*r/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let a=this.domElement.getBoundingClientRect(),i=e-a.left,r=n-a.top,s=a.width,o=a.height;this._mouse.x=i/s*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(da*this._rotateDelta.x/n.clientHeight),this._rotateUp(da*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(da*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-da*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(da*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-da*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),i=.5*(e.pageY+n.y);this._rotateStart.set(a,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),i=.5*(e.pageY+n.y);this._panStart.set(a,i)}}_handleTouchStartDolly(e){let n=this._getSecondPointerPosition(e),a=e.pageX-n.x,i=e.pageY-n.y,r=Math.sqrt(a*a+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let a=this._getSecondPointerPosition(e),i=.5*(e.pageX+a.x),r=.5*(e.pageY+a.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(da*this._rotateDelta.x/n.clientHeight),this._rotateUp(da*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),i=.5*(e.pageY+n.y);this._panEnd.set(a,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let n=this._getSecondPointerPosition(e),a=e.pageX-n.x,i=e.pageY-n.y,r=Math.sqrt(a*a+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let s=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ae,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){let n=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}};function wD(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function CD(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function bD(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jS),this.state=It.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function ID(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=It.DOLLY;break;case kr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=It.ROTATE}break;case kr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(ax)}function LD(t){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function ED(t){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(t.preventDefault(),this.dispatchEvent(ax),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(jS))}function TD(t){this.enabled!==!1&&this._handleKeyDown(t)}function AD(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=It.TOUCH_ROTATE;break;case Nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case Nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=It.TOUCH_DOLLY_PAN;break;case Nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(ax)}function RD(t){switch(this._trackPointer(t),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=It.NONE}}function PD(t){this.enabled!==!1&&t.preventDefault()}function DD(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function FD(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Vr=document.getElementById("c"),ut=new bh({canvas:Vr,antialias:!0,powerPreference:"high-performance"});ut.setPixelRatio(Math.min(window.devicePixelRatio||1,2));ut.setClearColor(0,1);ut.shadowMap.enabled=!0;ut.shadowMap.type=Pf;ut.toneMapping=As;ut.toneMappingExposure=1;ut.localClippingEnabled=!0;var Lt=new zo;Lt.background=new Ie(0);function kD(){let t=new zo;t.add(new gt(new wa(100,100,100),new ua({color:328966,side:Fn})));let e=(n,a,i,r,s)=>{let o=new gt(new Es(n,a),new ua({color:new Ie(i).multiplyScalar(r),side:fn}));o.position.set(...s),o.lookAt(0,0,0),t.add(o)};return e(46,30,16777215,7,[0,44,0]),e(10,60,12572415,5,[-46,8,6]),e(10,60,16767408,4,[46,8,-6]),e(50,8,16777215,3,[0,14,-46]),e(40,6,16757370,1.4,[0,-10,46]),t}var ND=new tl(ut);Lt.environment=ND.fromScene(kD(),.035).texture;Lt.environmentIntensity=1;Lt.add(new Iu(12570879,1708040,.25));var Rt=new Pn(34,1,1,2500);Rt.position.set(80,50,110);var wt=new Th(Rt,Vr);wt.target.set(0,14,0);wt.enableDamping=!0;wt.dampingFactor=.07;wt.minDistance=35;wt.maxDistance=640;wt.rotateSpeed=.8;wt.zoomSpeed=.9;wt.autoRotate=!0;wt.autoRotateSpeed=.9;wt.addEventListener("start",()=>{wt.autoRotate=!1});wt.update();var Ai=new Fr(16773600,1.9);Ai.position.set(90,170,110);Ai.castShadow=!0;Ai.shadow.mapSize.set(4096,4096);Object.assign(Ai.shadow.camera,{left:-62,right:62,top:62,bottom:-62,near:20,far:420});Ai.shadow.bias=-4e-4;Ai.shadow.normalBias=.25;Ai.shadow.radius=2.5;Lt.add(Ai);var $S=new Fr(10470655,1.7);$S.position.set(-130,70,-120);Lt.add($S);var JS=new Fr(16770768,.7);JS.position.set(-120,30,120);Lt.add(JS);var QS=new Fr(16734780,.45);QS.position.set(20,-80,60);Lt.add(QS);var na={idle:800,max:8900};var Pe={rpm:na.idle,target:na.idle,heat:0,crank:0},_e={cutOn:!1,part:null,fly:null,selected:null,panelOpen:window.innerWidth>720,time:0,W:window.innerWidth,H:window.innerHeight},eM=()=>kn.clamp((Pe.rpm-na.idle)/(na.max-na.idle),0,1),ot=(t,e=0)=>t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}),$u=()=>Math.round(240+Pe.heat*720);function ix(t,e){let n=document.createElement("canvas");n.width=n.height=t;let a=n.getContext("2d");return a.fillStyle="#808080",a.fillRect(0,0,t,t),a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",e.forEach(([i,r])=>{let s=document.createElement("canvas");s.width=s.height=i;let o=s.getContext("2d"),l=o.createImageData(i,i);for(let u=0;u<i*i;u++){let d=Math.random()*255;l.data[u*4]=l.data[u*4+1]=l.data[u*4+2]=d,l.data[u*4+3]=255}o.putImageData(l,0,0),a.globalAlpha=r,a.drawImage(s,0,0,t,t)}),a.globalAlpha=1,n}function Ah(t){let e=new Ls(t);return e.wrapS=e.wrapT=Do,e.anisotropy=ut.capabilities.getMaxAnisotropy(),e}function tM(t,e){let n=ix(256,[[64,.6],[128,.5],[256,.4]]),a=document.createElement("canvas");a.width=a.height=256;let i=a.getContext("2d"),r=Math.round(t*255);return i.fillStyle=`rgb(${r},${r},${r})`,i.fillRect(0,0,256,256),i.globalAlpha=e,i.drawImage(n,0,0),a}var nM=Ah(ix(512,[[128,.8],[256,.6],[64,.5],[512,.35]])),aM=Ah(tM(.22,.28)),rx=Ah(tM(.42,.4)),sx=Ah(ix(256,[[64,.7],[128,.6],[256,.5]]));var Ju={value:0};function Rh(t){return t.onBeforeCompile=e=>{e.uniforms.uHeat=Ju,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aHeat;
varying float vHeat;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vHeat = aHeat;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uHeat;
varying float vHeat;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float hh = clamp(uHeat * vHeat * 1.1 - 0.08, 0.0, 1.0);
        vec3 hc = mix(vec3(0.42, 0.02, 0.0), vec3(1.0, 0.16, 0.01), smoothstep(0.0, 0.6, hh));
        hc = mix(hc, vec3(1.0, 0.34, 0.05), smoothstep(0.6, 1.0, hh));
        diffuseColor.rgb *= (1.0 - 0.9 * smoothstep(0.05, 0.8, hh));
        totalEmissiveRadiance += hc * pow(max(hh, 0.0001), 1.4) * 2.0;`)},t.customProgramCacheKey=()=>"heat",t}function Fs(t,e){let n=t.attributes.position,a=new Float32Array(n.count);for(let i=0;i<n.count;i++)a[i]=e(n.getX(i),n.getY(i),n.getZ(i));return t.setAttribute("aHeat",new ht(a,1)),t}var Oe={alu:new ln({color:14343650,metalness:1,roughness:1,roughnessMap:aM,envMapIntensity:1.1}),castAlu:new ln({color:10264485,metalness:.92,roughness:1,roughnessMap:rx,bumpMap:sx,bumpScale:.6}),darkAlu:new ln({color:4869458,metalness:.9,roughness:1,roughnessMap:rx,bumpMap:sx,bumpScale:.5}),red:new Go({color:11011849,metalness:.15,roughness:.5,bumpMap:nM,bumpScale:2.2,clearcoat:.5,clearcoatRoughness:.45}),plenumRed:new Go({color:10816012,metalness:.2,roughness:.32,clearcoat:.8,clearcoatRoughness:.12}),pistonAlu:new ln({color:15132908,metalness:1,roughness:.22}),black:new ln({color:723724,metalness:.2,roughness:.55}),steel:new ln({color:13093583,metalness:1,roughness:.28}),darkSteel:new ln({color:5593182,metalness:1,roughness:.38,side:fn}),inox:new ln({color:16777215,vertexColors:!0,metalness:1,roughness:.3}),brass:new ln({color:13214795,metalness:1,roughness:.35}),gasket:new ln({color:3947842,metalness:.85,roughness:.42}),copper:new ln({color:12088115,metalness:1,roughness:.3})};Rh(Oe.inox);Oe.steelHot=Rh(Oe.steel.clone());var Gr=new Mt({uniforms:{uAmt:{value:0},uColor:{value:new Ie(1,.34,.06)}},transparent:!0,depthWrite:!1,blending:si,vertexShader:`varying vec3 vN; varying vec3 vV;
    void main(){ vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.0); vV = -mv.xyz; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uAmt; uniform vec3 uColor; varying vec3 vN; varying vec3 vV;
    void main(){ float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.2);
      gl_FragColor = vec4(uColor * f * uAmt * 1.0, 1.0); }`});var aa=250,ui=1.1,Ph=new ea;Lt.add(Ph);var Ct=new ea;Ct.matrixAutoUpdate=!1;Ct.matrix.copy(new He().makeRotationY(Math.PI).multiply(new He().makeScale(.1,.1,.1)).multiply(new He().makeTranslation(-aa,-ui,360)));Ph.add(Ct);var Dh=-(94+ui)*.1-.4,st={ready:!1,pistons:[],rot:[]},bn={pipes:[],colls:[]},pt={e:0,recs:[],lin:new Ge,zMid:-359,floor:null,dolly:1,ty:0};pt.w=t=>t.clone().applyMatrix3(pt.lin).multiplyScalar(pt.e);var Ri=1500,ks=new Float32Array(Ri*3),za=new Float32Array(Ri*3),Fh=new Float32Array(Ri).fill(99),ux=new Float32Array(Ri).fill(1),iM=new Float32Array(Ri),rM=new Float32Array(Ri),cx=new Float32Array(Ri),sM=new Float32Array(Ri),ar=new Wt;ar.setAttribute("position",new ht(ks,3).setUsage(Hr));ar.setAttribute("aSize",new ht(rM,1).setUsage(Hr));ar.setAttribute("aAlpha",new ht(cx,1).setUsage(Hr));ar.setAttribute("aAge",new ht(sM,1).setUsage(Hr));var Qu=new Mt({uniforms:{uScale:{value:500}},transparent:!0,depthWrite:!1,blending:si,vertexShader:`attribute float aSize; attribute float aAlpha; attribute float aAge; uniform float uScale;
    varying float vA; varying float vAge;
    void main(){ vA=aAlpha; vAge=aAge; vec4 mv=modelViewMatrix*vec4(position,1.0);
      gl_PointSize=aSize*uScale/max(-mv.z,1.0); gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying float vA; varying float vAge;
    void main(){ float d=length(gl_PointCoord-0.5); float a=smoothstep(0.5,0.0,d); a*=a;
      vec3 hot=vec3(1.0,0.42,0.10); vec3 cool=vec3(0.34,0.30,0.28);
      vec3 c=mix(hot,cool,smoothstep(0.0,0.8,vAge));
      float k=clamp(vA,0.0,1.0); gl_FragColor=vec4(c*a*k,a*k); }`}),oM=new gu(ar,Qu);oM.frustumCulled=!1;Lt.add(oM);var ox=0,lx=0;function UD(){if(!bn.pipes.length)return;let t=ox;ox=(ox+1)%Ri;let e,n=null;if(Math.random()<.65||!bn.colls.length){let i=bn.pipes[Math.random()*bn.pipes.length|0];e=i[Math.random()*i.length|0],n=i.ex}else{let i=bn.colls[Math.random()*bn.colls.length|0];e=i[0].clone().lerp(i[1],Math.random()),n=i.ex}pt.e>0&&n&&(e=e.clone().add(pt.w(n)));let a=Math.sign(e.x)||1;ks[t*3]=e.x+(Math.random()-.5)*1.5,ks[t*3+1]=e.y+Math.random()*1.2,ks[t*3+2]=e.z+(Math.random()-.5)*1.5,za[t*3]=a*(.5+Math.random()*3),za[t*3+1]=7+Math.random()*11,za[t*3+2]=(Math.random()-.5)*3,Fh[t]=0,ux[t]=1.6+Math.random()*1.8,iM[t]=1.4+Math.random()*1.6}function lM(t){let e=Pe.heat;if(e>.06)for(lx+=t*380*Math.pow(e,1.5);lx>=1;)lx-=1,UD();let n=.06*Math.min(1,e*1.3);for(let a=0;a<Ri;a++){if(Fh[a]>=ux[a]){cx[a]=0;continue}Fh[a]+=t;let i=Math.min(Fh[a]/ux[a],1);za[a*3+1]+=3.5*t,za[a*3]+=Math.sin(_e.time*2.1+a)*6*t,za[a*3+2]+=Math.cos(_e.time*1.7+a*1.3)*5*t;let r=1-.55*t;za[a*3]*=r,za[a*3+1]*=r,za[a*3+2]*=r,ks[a*3]+=za[a*3]*t,ks[a*3+1]+=za[a*3+1]*t,ks[a*3+2]+=za[a*3+2]*t,rM[a]=iM[a]*(1+1.8*i),sM[a]=i,cx[a]=n*Math.pow(Math.max(0,1-i),1.6)*Math.min(1,i/.08)}ar.attributes.position.needsUpdate=!0,ar.attributes.aSize.needsUpdate=!0,ar.attributes.aAlpha.needsUpdate=!0,ar.attributes.aAge.needsUpdate=!0}var Ns=[-1,1].map(t=>{let e=new Tu(16734744,0,0,2);return e.position.set(t*44,-3,0),Lt.add(e),e}),dx=Ns.map(t=>t.position.clone());function BD(t,e,n){let a=(s,o,l)=>new T(s,o,l),i=n||Math.sign(e.x-aa)||1,r=s=>a(i*.7071*s,.7071*s,0);switch(t){case"FERRARI_ENGINE_BLOCK":return a(0,0,0);case"FERRARI_PISTON":case"FERRARI_GUDGEON_PIN":case"FERRARI_CONROD":return r(110);case"FERRARI_CRANKSHAFT":return a(0,-90,0);case"FERRARI_GEAR_FOR_CRANKSHAFT":return a(0,-90,-170);case"FERRARI_CRANKSHAFT_CAP2":case"FERRARI_CRANKSHAFT_CAP5":return a(0,-170,0);case"FERRARI_DRIVERS_FOR_BLOCK_CCAPS":return a(0,-235,0);case"FERRARI_OIL_CAP_CARTER":return a(0,-290,0);case"FERRARI_SCREW_MEBLOCK_CARTER":return a(0,-350,0);case"FERRARI_NUT_7":return a(0,-410,0);case"FERRARI_SCREW_BLOCK_CARTER":return a(0,-120,-60);case"FERRARI_MEBLOCK_VBLOCK_DRIVER":return r(150);case"FERRARI_VALVE":return r(175);case"FERRARI_VALVE_BLOCK_LEFTFG":case"FERRARI_VALVE_BLOCK_RIGHTFG":return r(240);case"FERRAR_VALVE_SPRING":case"VALVE_WASHER":case"FERRARI_VALVES_PLATES":return r(305);case"FERRARI_NUT_10":return r(330);case"FERRARI_SPARKPLUG":return r(350);case"FERRARI_CAMSHAFT_LEFT":case"FERRARI_CAMSHAFT_RIGHT":return r(400);case"FERRARI_GEAR_FOR_CAMSHAFT":return r(400).add(a(0,0,-170));case"FERRARI_CAMSHAFT_CAPS":case"FERRARI_CAM_CAP_SIDE":return r(450);case"FERRARI_SCREW_CAM_CAP":case"FERRARI_SCREW_CAP_SIDE":case"FERRARI_SCREW_HEAD_CAM_CAP":return r(510);case"FERRARI_LEFTVALVEB_CAP":case"FERRARI_RIGHTVALVEB_CAP":return r(560);case"FERRARI_INJECTION_PIPES":return a(0,150,0);case"FERRARI_MAININJECTION_CAP":return a(0,330,0);case"FERRARI_INJECTION_SIDE_CAPS":return a(i*150,330,0);case"FERRARI_INTAKE_SYSTEM":return a(i*260,330,0);case"FERRARI_SCREW_INJECTION_BLOCK":return a(0,230,0);case"FERRARI_BELT_DRIVER":return a(0,0,-300);case"FERRARI_BELT_DRIVER_SCREW":return a(0,0,-370);default:return a(0,0,0)}}function uM(t){pt.lin.setFromMatrix4(Ct.matrix);let e=new Set;st.pistons.forEach(a=>{e.add(st.pmesh.uuid+":"+a.pi.i),e.add(st.nmesh.uuid+":"+a.ni.i),e.add(st.rmesh.uuid+":"+a.ri.i)}),st.rot.forEach(a=>e.add(a.mesh.uuid+":"+a.it.i));let n=new Map;st.pistons.forEach(a=>{let i=Math.sign(a.a.x)||1;n.set(st.pmesh.uuid+":"+a.pi.i,i),n.set(st.nmesh.uuid+":"+a.ni.i,i),n.set(st.rmesh.uuid+":"+a.ri.i,i)}),t.forEach(a=>{a.list.forEach(i=>{let r=a.im.uuid+":"+i.i,s=a.geo.boundingBox.getCenter(new T).applyMatrix4(i.M0);pt.recs.push({im:a.im,i:i.i,M0:i.M0,off:BD(a.name,s,n.get(r)),kin:e.has(r),name:a.name,c:s})})})}var al=new He;function OD(){let t=pt.e,e=new Set;pt.recs.forEach(n=>{if(n.kin)return;al.copy(n.M0);let a=al.elements;a[12]+=n.off.x*t,a[13]+=n.off.y*t,a[14]+=n.off.z*t,n.im.setMatrixAt(n.i,al),e.add(n.im)}),e.forEach(n=>{n.instanceMatrix.needsUpdate=!0}),Ct.children.forEach(n=>{let a=n.userData.ex;a&&n.position.copy(a.base).addScaledVector(a.off,t)})}function cM(){let t=pt.e,e=new Set;pt.recs.forEach(n=>{if(!n.kin)return;n.im.getMatrixAt(n.i,al);let a=al.elements;a[12]+=n.off.x*t,a[13]+=n.off.y*t,a[14]+=n.off.z*t,n.im.setMatrixAt(n.i,al),e.add(n.im)}),e.forEach(n=>{n.instanceMatrix.needsUpdate=!0})}function dM(t){t=kn.clamp(t,0,1),pt.e=t,OD(),fx(t,pt.floor,Dh),Ns.forEach((e,n)=>{e.position.copy(dx[n]);let a=bn.colls.find(i=>Math.sign(i[0].x)===Math.sign(dx[n].x));a&&a.ex&&e.position.add(pt.w(a.ex))})}function fx(t,e,n){e&&(e.position.y=n-42*t);let a=Ai.shadow.camera,i=62+60*t;Object.assign(a,{left:-i,right:i,top:i,bottom:-i,far:420+200*t}),a.updateProjectionMatrix();let r=1+1.05*t,s=r/pt.dolly;pt.dolly=r;let o=-6*(t-pt.ty);pt.ty=t,Rt.position.sub(wt.target).multiplyScalar(s).add(wt.target),wt.target.y+=o,Rt.position.y+=o,_e.fly&&_e.fly.toP.sub(_e.fly.toT).multiplyScalar(s).add(_e.fly.toT)}var Ha=new He,kh=new He,ci=new He;function fM(t){if(!st.ready)return;st.pistons.forEach(n=>{let a=n.th0+t,i=n.r*Math.cos(a),r=n.r*Math.sin(a),s=aa+i,o=ui+r,l=i*n.a.x+r*n.a.y,u=i*n.b.x+r*n.b.y,d=l+Math.sqrt(Math.max(n.l*n.l-(n.off-u)*(n.off-u),0)),f=aa+n.a.x*d+n.b.x*n.off,c=ui+n.a.y*d+n.b.y*n.off;ci.makeTranslation(f-n.P0.x,c-n.P0.y,0),Ha.multiplyMatrices(ci,n.pi.M0),st.pmesh.setMatrixAt(n.pi.i,Ha),Ha.multiplyMatrices(ci,n.ni.M0),st.nmesh.setMatrixAt(n.ni.i,Ha);let p=Math.atan2(c-o,f-s)-n.phi0;ci.makeTranslation(-n.Q0.x,-n.Q0.y,0),Ha.multiplyMatrices(ci,n.ri.M0),kh.makeRotationZ(p),Ha.premultiply(kh),ci.makeTranslation(s,o,0),Ha.premultiply(ci),st.rmesh.setMatrixAt(n.ri.i,Ha)}),st.pmesh.instanceMatrix.needsUpdate=st.rmesh.instanceMatrix.needsUpdate=st.nmesh.instanceMatrix.needsUpdate=!0;let e=new Set;st.rot.forEach(n=>{ci.makeTranslation(-n.cx,-n.cy,0),Ha.multiplyMatrices(ci,n.it.M0),kh.makeRotationZ(t*n.ratio),Ha.premultiply(kh),ci.makeTranslation(n.cx,n.cy,0),Ha.premultiply(ci),n.mesh.setMatrixAt(n.it.i,Ha),e.add(n.mesh)}),e.forEach(n=>{n.instanceMatrix.needsUpdate=!0}),pt.e>0&&cM()}var ec=new T;function Va(t,e,n,a,i,r){let s=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;ec.copy(e),ec[a]=0,ec.normalize();let u=.5*s/(s+o),d=1-ec.angleTo(t)/l;return Math.sign(ec[n])===1?d*u:o/(s+o)+u+u*(1-d)}var Nh=class t extends wa{constructor(e=1,n=1,a=1,i=2,r=.1){let s=i*2+1;if(r=Math.min(e/2,n/2,a/2,r),super(1,1,1,s,s,s),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:a,segments:i,radius:r},s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new T,u=new T,d=new T(e,n,a).divideScalar(2).subScalar(r),f=this.attributes.position.array,c=this.attributes.normal.array,p=this.attributes.uv.array,g=f.length/6,_=new T,m=.5/s;for(let h=0,x=0;h<f.length;h+=3,x+=2)switch(l.fromArray(f,h),u.copy(l),u.x-=Math.sign(u.x)*m,u.y-=Math.sign(u.y)*m,u.z-=Math.sign(u.z)*m,u.normalize(),f[h+0]=d.x*Math.sign(l.x)+u.x*r,f[h+1]=d.y*Math.sign(l.y)+u.y*r,f[h+2]=d.z*Math.sign(l.z)+u.z*r,c[h+0]=u.x,c[h+1]=u.y,c[h+2]=u.z,Math.floor(h/g)){case 0:_.set(1,0,0),p[x+0]=Va(_,u,"z","y",r,a),p[x+1]=1-Va(_,u,"y","z",r,n);break;case 1:_.set(-1,0,0),p[x+0]=1-Va(_,u,"z","y",r,a),p[x+1]=1-Va(_,u,"y","z",r,n);break;case 2:_.set(0,1,0),p[x+0]=1-Va(_,u,"x","z",r,e),p[x+1]=Va(_,u,"z","x",r,a);break;case 3:_.set(0,-1,0),p[x+0]=1-Va(_,u,"x","z",r,e),p[x+1]=1-Va(_,u,"z","x",r,a);break;case 4:_.set(0,0,1),p[x+0]=1-Va(_,u,"x","y",r,e),p[x+1]=1-Va(_,u,"y","x",r,n);break;case 5:_.set(0,0,-1),p[x+0]=Va(_,u,"x","y",r,e),p[x+1]=1-Va(_,u,"y","x",r,n);break}}static fromJSON(e){return new t(e.width,e.height,e.depth,e.segments,e.radius)}};var ir={},Wr=(t,e,n)=>new T(t,e,n);function tc(t,e=.1){let n=t.attributes.position,a=t.attributes.normal,i=new Float32Array(n.count*2);for(let r=0;r<n.count;r++){let s=Math.abs(a.getX(r)),o=Math.abs(a.getY(r)),l=Math.abs(a.getZ(r)),u,d;s>=o&&s>=l?(u=n.getZ(r),d=n.getY(r)):o>=l?(u=n.getX(r),d=n.getZ(r)):(u=n.getX(r),d=n.getY(r)),i[r*2]=u*e,i[r*2+1]=d*e}return t.setAttribute("uv",new ht(i,2)),t}var Uh=(t,e,n,a=.5,i=3,r=.1)=>tc(new Nh(t,e,n,i,Math.max(.01,Math.min(a,Math.min(t,e,n)/2-.01))),r),il=(t,e,n,a=40)=>{let i=new Ii(t,e,n,a);return i.rotateX(Math.PI/2),i};function Pi(t,e,n,a=0,i=0,r=0){let s=new gt(e,n);return _e.part&&(s.userData.part=_e.part,(ir[_e.part]||=[]).push(s)),s.position.set(a,i,r),s.castShadow=!0,s.receiveShadow=!0,t.add(s),s}function hx(t,e,{segs:n=80,radial:a=20,colorFn:i=null,heatFn:r=null}={}){let s=new Tr(t,!1,"centripetal"),o=new Cu(s,n,1,a,!1),l=o.attributes.position,u=a+1,d=i?new Float32Array(l.count*3):null;for(let f=0;f<l.count;f++){let c=Math.floor(f/u)/n,p=s.getPointAt(c),g=e(c);if(l.setXYZ(f,p.x+(l.getX(f)-p.x)*g,p.y+(l.getY(f)-p.y)*g,p.z+(l.getZ(f)-p.z)*g),d){let _=i(c);d[f*3]=_.r,d[f*3+1]=_.g,d[f*3+2]=_.b}}if(d&&o.setAttribute("color",new ht(d,3)),r){let f=new Float32Array(l.count);for(let c=0;c<l.count;c++)f[c]=r(Math.floor(c/u)/n);o.setAttribute("aHeat",new ht(f,1))}return o.computeVertexNormals(),o}var Di=new Qn(new T(.7071,.7071,0),1e6),px=new T(-.7071,.7071,0).transformDirection(new He().extractRotation(Ct.matrix)),hM=px.clone();function pM(t){hM.copy(t)}var Us=new Set,mx=[];function mM(t){t.clippingPlanes=[Di],t.clipShadows=!0,Us.add(t)}function Bh(t){let e=t.onBeforeCompile,n=t.customProgramCacheKey?t.customProgramCacheKey():"";t.onBeforeCompile=(a,i)=>{e&&e(a,i),a.fragmentShader=a.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if (!gl_FrontFacing) { gl_FragColor = vec4(0.55, 0.035, 0.03, 1.0); }`)},t.customProgramCacheKey=()=>n+"|cut",t.clippingPlanes=[Di],t.clipShadows=!0,Us.add(t)}function rl(t){_e.cutOn=t,Di.normal.copy(hM),Di.constant=t?0:1e6,mx.forEach(e=>e(t)),Us.forEach(e=>{e.side=t?fn:Li,e.needsUpdate=!0})}function gM(){let t=st.pistons.map(a=>a.P0.z),e=Math.min(...t),n=Math.max(...t);[1,-1].forEach(a=>{let i=new ae(a*.7071,.7071),r=new ae(a*.7071,-.7071),s=(U,V)=>new ae(aa+i.x*U+r.x*V,ui+i.y*U+r.y*V);_e.part="head-gasket";let o=s(203,-2),l=Pi(Ct,Uh(150,3,668,1,2,.01),Oe.gasket,o.x,o.y,-360);l.rotation.z=-a*Math.PI/4;let u=Pi(Ct,Uh(153,1.1,671,.5,2,.01),Oe.copper,o.x,o.y,-360);u.rotation.z=-a*Math.PI/4,[l,u].forEach(U=>{U.userData.ex={base:U.position.clone(),off:new T(i.x*30,i.y*30,0)}});let d=new T(i.x*240,i.y*240,0),f=d.clone().add(new T(r.x*110,r.y*110,0)),c=d.clone().add(new T(r.x*270,r.y*270,110)),p=(U,V)=>{for(let H=U;H<Ct.children.length;H++){let j=Ct.children[H];j.userData.ex={base:j.position.clone(),off:V}}};_e.part="exhaust-primaries";let g=st.pistons.filter(U=>Math.sign(U.a.x)===a),_=a>0?8.75:-9,m=new Ie,h=new Ie(13619928),x=new Ie(3820694),S=new Ie(13804869),y=new Ie(5978995),w=U=>U<.12?m.copy(y).lerp(x,U/.12).clone():U<.3?m.copy(x).lerp(S,(U-.12)/.18).clone():m.copy(S).lerp(h,Math.min(1,(U-.3)/.25)).clone(),C=aa+a*262,L=-52;g.forEach(U=>{let V=U.P0.z+_,H=Ct.children.length,j=s(225,92),X=s(225,132),O=[Wr(j.x,j.y,V),Wr(X.x,X.y,V),Wr(aa+a*292,46,V),Wr(aa+a*288,-8,V),Wr(C+a*3,L+14,V)];Pi(Ct,Uh(20,56,52,3,2,.01),Oe.steel,s(225,87).x,s(225,87).y,V).rotation.z=-a*Math.PI/4,Pi(Ct,hx(O,()=>14.5,{segs:60,radial:20,colorFn:qe=>w(qe),heatFn:qe=>1-.32*qe}),Oe.inox);let te=new gt(hx(O,()=>24,{segs:40,radial:16}),Gr);te.renderOrder=5,Ct.add(te),p(H,f);let ye=new Tr(O,!1,"centripetal").getSpacedPoints(24).map(qe=>qe.clone().applyMatrix4(Ct.matrix));ye.ex=f,bn.pipes.push(ye)}),_e.part="exhaust-collector";let v=e-70,I=n+60,A=I-v+60,P=Ct.children.length;Pi(Ct,Fs(il(30,30,A,40),(U,V,H)=>.55+.3*(H+A/2)/A),Oe.steelHot,C,L,(v+I)/2),Pi(Ct,Fs(new Mu(30,32,16),()=>.5),Oe.steelHot,C,L,v-30),Pi(Ct,Fs(il(38,38,12,40),()=>.7),Oe.steelHot,C,L,I+36),Pi(Ct,Fs(il(30,30,120,40),()=>.6),Oe.steelHot,C,L,I+102),[v+120,v+260,I-200].forEach((U,V)=>Pi(Ct,new wu(31,2.2,10,40),V%2?Oe.brass:Oe.darkSteel,C,L,U));let k=new gt(il(46,46,A,32),Gr);k.position.set(C,L,(v+I)/2),k.renderOrder=5,Ct.add(k);let z=new gt(il(46,46,130,32),Gr);z.position.set(C,L,I+100),z.renderOrder=5,Ct.add(z),p(P,c);let R=[Wr(C,L+24,v).applyMatrix4(Ct.matrix),Wr(C,L+24,I+110).applyMatrix4(Ct.matrix)];R.ex=c,bn.colls.push(R)}),_e.part=null,pt.floor=gx(Dh)}function gx(t){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d"),a=n.createRadialGradient(256,256,0,256,256,256);a.addColorStop(0,"#ffffff"),a.addColorStop(.3,"#505050"),a.addColorStop(.65,"#101010"),a.addColorStop(1,"#000000"),n.fillStyle=a,n.fillRect(0,0,512,512);let i=new gt(new yu(120,96),new ln({color:723725,metalness:.55,roughness:.3,transparent:!0,alphaMap:new Ls(e),envMapIntensity:.4}));return i.rotation.x=-Math.PI/2,i.position.y=t,i.receiveShadow=!0,Lt.add(i),i}var sl=new T(-14,-15,-60),ac=.2,MM=(-86-sl.y)*ac-.6,rc=new ea;rc.visible=!1;Lt.add(rc);var qr=new ea;qr.matrixAutoUpdate=!1;qr.matrix.copy(new He().makeRotationY(Math.PI/2).multiply(new He().makeScale(ac,ac,ac)).multiply(new He().makeTranslation(-sl.x,-sl.y,-sl.z)));rc.add(qr);var wM=new Ge().setFromMatrix4(qr.matrix),Nn={ready:!1,shaft:null,floor:null,wisps:[],recs:[],kin:null},CM={},Bs=(t,e)=>e.forEach(n=>{CM[n]=t});Bs("db-block",[4]);Bs("db-gear",[38]);Bs("db-shaft",[54]);Bs("db-frame",[0,102,3,114]);Bs("db-stacks",[19,20,21,22,23,94,95,96,97,98]);Bs("db-top",[49,60,53,31,75]);Bs("db-housing",[5,86]);var zD=t=>CM[t]||"db-fittings",nc=(t,e,n={})=>Object.assign(t.clone(),{color:new Ie(e)},n),ol={"db-block":nc(Oe.castAlu,8225161),"db-gear":nc(Oe.darkAlu,6448749),"db-shaft":Oe.steel.clone(),"db-frame":nc(Oe.steel,9212054),"db-stacks":Rh(new ln({color:5921889,metalness:1,roughness:.42,vertexColors:!1})),"db-top":nc(Oe.alu,12172482),"db-housing":nc(Oe.darkAlu,5593439),"db-fittings":Oe.brass.clone()},HD={"db-block":.02,"db-top":.03,"db-housing":.03,"db-gear":.03};function VD(t,e){let n=e.x<sl.x?-1:1,a=(i,r,s)=>new T(i,r,s);switch(t){case"db-block":return a(0,0,0);case"db-gear":return a(0,0,70);case"db-shaft":return a(0,0,190);case"db-frame":return a(n*95,-25,0);case"db-stacks":return a(n*120,0,0);case"db-top":return a(0,95,0);case"db-housing":return a(n*75,55,0);default:{let i=new ae(e.x-sl.x,e.y+13).normalize();return a(i.x*85+n*15,i.y*85,(e.z+60)*.12)}}}async function GD(){let t=window.DB605_DATA;if(!t)throw new Error("data/db605-data.js was not loaded");let e=Uint8Array.from(atob(t),a=>a.charCodeAt(0)),n=new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"));return new Response(n).arrayBuffer()}function WD(){return new Promise((t,e)=>{if(window.DB605_DATA)return t();let n=document.createElement("script");n.src="data/db605-data.js",n.onload=t,n.onerror=()=>e(new Error("data/db605-data.js was not found")),document.head.appendChild(n)})}async function bM(){if(Nn.ready)return;await WD();let t=await GD(),e=new DataView(t).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,e))),a=4+e;n.prods.forEach(r=>{let s=zD(r.id),o=r.nv,l=new Uint16Array(t,a+r.op,o*3),u=new Int8Array(t,a+r.on,o*3),d=new Float32Array(o*3),f=new Float32Array(o*3);for(let x=0;x<o;x++)for(let S=0;S<3;S++)d[x*3+S]=r.bmin[S]+l[x*3+S]*r.sc[S],f[x*3+S]=u[x*3+S]/127;let c=r.idx16?new Uint16Array(t,a+r.oi,r.nt*3):new Uint32Array(t,a+r.oi,r.nt*3),p=new Wt;if(p.setAttribute("position",new ht(d,3)),p.setAttribute("normal",new ht(f,3)),p.setIndex(new ht(r.idx16?new Uint16Array(c):new Uint32Array(c),1)),tc(p,HD[s]??.05),s==="db-stacks"){let x=r.bb[1],S=r.bb[4];Fs(p,(y,w)=>.7+.3*(w-x)/Math.max(.01,S-x))}let g=new T(...r.c),_=null;s==="db-shaft"&&(_=new ae((r.bb[0]+r.bb[3])/2,(r.bb[1]+r.bb[4])/2),p.translate(-_.x,-_.y,0)),p.computeBoundingBox(),p.computeBoundingSphere();let m=new gt(p,ol[s]);m.userData.part=s,m.castShadow=r.nt>300,m.receiveShadow=!0,_&&(m.position.set(_.x,_.y,0),Nn.shaft=m);let h=VD(s,g);if(m.userData.ex={base:m.position.clone(),off:h},qr.add(m),(ir[s]||=[]).push(m),Nn.recs.push(m),s==="db-stacks"){let x=new T((r.bb[0]+r.bb[3])/2,r.bb[4],(r.bb[2]+r.bb[5])/2).applyMatrix4(qr.matrix),S=[x.clone(),x.clone().add(new T(0,0,1.4)),x.clone().add(new T(0,0,-1.4))];S.ex=h,Nn.wisps.push(S)}}),qD();let i=["db-block","db-gear","db-housing","db-top"];Object.entries(ol).forEach(([r,s])=>{Us.has(s)||(i.includes(r)?mM(s):Bh(s))}),mx.push(r=>{i.forEach(s=>{let o=ol[s];o.transparent=r,o.opacity=r?.16:1,o.depthWrite=!r,o.needsUpdate=!0}),Nn.recs.forEach(s=>{i.includes(s.userData.part)&&(s.castShadow=!r)})}),Nn.floor=gx(MM),Nn.floor.visible=!1,Nn.ready=!0}var fa=new ae(-14,-12.5),ic=10.5,xM=36,vM=-150,yM=29.1,_M=41*Math.PI/180,IM=[0,240,120,120,240,0].map(t=>t*Math.PI/180),LM=new T(0,1,0);function xx(t,e){let n=t.clone();return n.color=new Ie(e),n}function qD(){let t=xx(Oe.darkSteel,9080469),e=xx(Oe.pistonAlu,14672616),n=xx(Oe.steel,12106948);ol["db-crank"]=t,ol["db-pistons"]=e,ol["db-rods"]=n;let a=(f,c,p,g=qr)=>{let _=new gt(f,c);return _.userData.part=p,g.add(_),(ir[p]||=[]).push(_),_},i=Nn.kin={crank:new ea,pistons:[],pins:[],rods:[]};i.crank.position.set(fa.x,fa.y,0),qr.add(i.crank);let r=new Ii(5,5,175,24);r.rotateX(Math.PI/2),a(r,t,"db-crank",i.crank).position.z=-78;let s=new wa(ic+20,12,3),o=new Ii(4,4,15,20);o.rotateX(Math.PI/2);for(let f=0;f<6;f++){let c=vM+yM*f,p=new ea;p.rotation.z=IM[f],p.position.z=c,i.crank.add(p),[-6.5,6.5].forEach(g=>{a(s,t,"db-crank",p).position.set((ic-12)/2,0,g)}),a(o,t,"db-crank",p).position.set(ic,0,0)}let l=new Ii(11,11,18,28),u=new Ii(2.4,2.4,21,14);u.rotateX(Math.PI/2);let d=new wa(5,1,3.4);[-1,1].forEach(f=>{let c=new ae(f*Math.sin(_M),-Math.cos(_M));for(let p=0;p<6;p++){let g=vM+yM*p,_=a(l,e,"db-pistons"),m=a(u,e,"db-pistons"),h=a(d,n,"db-rods");_.quaternion.setFromUnitVectors(LM,new T(c.x,c.y,0)),i.pistons.push({p:_,n:m,r:h,d:c,zc:g,zr:g+f*3.5,k:p})}})}var vx=new T,SM=new T,Oh=new T;function EM(t){let e=Nn.kin;if(!e)return;let n=pt.e;e.crank.rotation.z=t,e.crank.position.set(fa.x,fa.y+90*n,0),e.pistons.forEach(a=>{let i=t+IM[a.k],r=fa.x+ic*Math.cos(i),s=fa.y+ic*Math.sin(i),o=r-fa.x,l=s-fa.y,u=o*-a.d.y+l*a.d.x,d=o*a.d.x+l*a.d.y+Math.sqrt(xM*xM-u*u),f=a.d.x*55*n,c=a.d.y*55*n;a.p.position.set(fa.x+a.d.x*(d-1)+f,fa.y+a.d.y*(d-1)+c,a.zc),a.n.position.set(fa.x+a.d.x*d+f,fa.y+a.d.y*d+c,a.zc),vx.set(r,s,a.zr),SM.set(fa.x+a.d.x*d,fa.y+a.d.y*d,a.zc),Oh.subVectors(SM,vx);let p=Oh.length();a.r.position.copy(vx).addScaledVector(Oh,.5),a.r.position.x+=a.d.x*28*n,a.r.position.y+=a.d.y*28*n,a.r.quaternion.setFromUnitVectors(LM,Oh.divideScalar(p)),a.r.scale.set(1,p,1)})}function TM(t){t=kn.clamp(t,0,1),pt.e=t,Nn.recs.forEach(e=>{let n=e.userData.ex;e.position.copy(n.base).addScaledVector(n.off,t)}),fx(t,Nn.floor,MM),Ns.forEach((e,n)=>{e.position.set(0,-1,(n?1:-1)*15).addScaledVector(new T(0,0,n?1:-1),55*t*ac)})}function AM(t){Nn.shaft&&(Nn.shaft.rotation.z=t)}var Os={pos:new T(68,38,92),target:new T(2,3,0),cutPos:new T(50,14,78),cutTarget:new T(0,2,0),cutNormal:new T(0,0,-1)};var zs={block:{name:"Cylinder block",tag:"Structure",desc:"The aluminium casting that holds everything together. Two banks of six cylinders sit at 90\xB0 to each other around one crankshaft, and every bore is surrounded by water jackets that carry heat away. Head studs clamp the cylinder heads down onto its deck.",specs:[["Layout","90\xB0 V12 (2 \xD7 6)"],["Cylinder pitch","100 mm"],["Bore \xD7 stroke","\u2248 90 \xD7 75.2 mm"],["Displacement","\u2248 5.7 L (from model)"],["Material","Aluminium alloy"]]},"head-gasket":{name:"Head gasket",tag:"Sealing",desc:"A thin multi-layer steel sheet clamped between block and head. It seals three things at once: combustion pressure well over 100 bar, the coolant passages and the oil galleries. Overheating is what usually kills one, letting coolant and oil mix or leak into a cylinder. (This part is drawn in by hand; the CAD file omitted it.)",specs:[["Type","Multi-layer steel (MLS)"],["Seals","Combustion \xB7 coolant \xB7 oil"],["Peak cylinder pressure","> 100 bar"],["Quantity","2 (one per bank)"],["Clamping","Head studs, torqued in sequence"]]},head:{name:"Cylinder head",tag:"Valvetrain",desc:"Houses the valves, camshafts and the roof of each combustion chamber. The intake ports face the V and the exhaust ports face outward toward the manifolds. Two exhaust ports per cylinder are visible on the outer face.",specs:[["Valves","48 (4 per cylinder)"],["Camshafts","4 \xB7 DOHC"],["Camshaft speed",()=>ot(Pe.rpm/2)+" rpm"],["Valve events / s (all)",()=>ot(Pe.rpm/120*48)],["Material","Aluminium alloy"]]},"valve-cover":{name:"Valve covers",tag:"Valvetrain",desc:"Finished in red crackle paint, the Ferrari trademark, these covers seal the top of each head and keep oil around the camshafts and valve gear.",specs:[["Covers","2 (one per bank)"],["Finish","Red crackle paint"],["Underneath","Camshafts, valves, springs"]]},"spark-plug":{name:"Spark plugs",tag:"Ignition",desc:"One plug per cylinder sits in the centre of the combustion chamber. A pulse of tens of thousands of volts makes a spark jump the electrode gap at exactly the right crank angle to light the compressed air\u2013fuel mixture.",specs:[["Quantity","12 \xB7 one per cylinder"],["Coil voltage","\u2248 30\u201340 kV"],["Tip","Iridium / platinum"],["Sparks / cylinder / s",()=>ot(Pe.rpm/120,1)],["Total sparks / s",()=>ot(Pe.rpm/120*12)]]},valve:{name:"Valves",tag:"Valvetrain",desc:"Four per cylinder: two intake valves let the fresh charge in, two exhaust valves let the burnt gas out. Each opens and closes once every two crankshaft turns, driven by the camshafts. (Drawn static in this model.)",specs:[["Quantity","48"],["Layout","2 intake + 2 exhaust per cylinder"],["Opening events / s (each)",()=>ot(Pe.rpm/120,1)]]},"valve-spring":{name:"Valve springs & retainers",tag:"Valvetrain",desc:"Coil springs snap each valve shut against its seat. At high revs they have to control the valve within a fraction of a millisecond, which is why they are one of the limits on maximum engine speed.",specs:[["Springs","48 (one per valve)"],["Includes","Washers / spring plates"]]},camshaft:{name:"Camshafts",tag:"Valvetrain",desc:"Four overhead camshafts, two per bank, whose lobes push the valves open. They turn at exactly half crankshaft speed because each valve only opens once per two-revolution cycle.",specs:[["Count","4 (DOHC, 2 per bank)"],["Speed",()=>ot(Pe.rpm/2)+" rpm"],["Ratio to crank","1 : 2"]]},"cam-caps":{name:"Camshaft bearing caps",tag:"Valvetrain",desc:"Aluminium caps bolted over each camshaft journal, holding the shafts in their bearings while allowing them to spin freely in an oil film.",specs:[["Caps","12 + 4 end caps"],["Fasteners","Cap-head screws"]]},crankshaft:{name:"Crankshaft",tag:"Rotating assembly",desc:"Converts the up-and-down thrust of the pistons into rotation. It has six throws, and each throw carries two connecting rods, one from each bank. The counterweights cancel the vibration of the moving parts. (You can watch it turn in the cutaway view.)",specs:[["Throws","6 (two rods each)"],["Stroke","75.2 mm"],["Speed",()=>ot(Pe.rpm)+" rpm"],["Power pulses / s",()=>ot(Pe.rpm/60*6)]]},"crank-caps":{name:"Main bearing caps",tag:"Structure",desc:"Bolted under the block, these caps hold the crankshaft in its main bearings and take the full load of every combustion event.",specs:[["Count","7"],["Bearing","Plain shell, oil-fed"]]},piston:{name:"Pistons & gudgeon pins",tag:"Rotating assembly",desc:"The pistons are pushed down by the burning mixture and drive the crank through the connecting rods. Each is attached with a hollow steel gudgeon pin. At redline a piston stops and reverses direction 300 times a second. Switch to the cutaway view to see them move.",specs:[["Quantity","12"],["Diameter","\u2248 90 mm"],["Stroke","75.2 mm"],["Mean piston speed",()=>ot(2*.0752*Pe.rpm/60,1)+" m/s"],["Direction changes / s",()=>ot(Pe.rpm/60*2*1)]]},conrod:{name:"Connecting rods",tag:"Rotating assembly",desc:"Forged steel links between each piston and the crankshaft. They swing as the crank turns while the piston moves in a straight line, so they carry huge tension and compression loads at high revs.",specs:[["Quantity","12"],["Length (centre to centre)","\u2248 137 mm"],["Material","Forged steel"]]},"timing-gears":{name:"Timing gears",tag:"Drive",desc:"Gears at the front of the engine link the crankshaft to the four camshafts and keep them in perfect step, so valves open at the exact crank angle every time.",specs:[["Gears","1 crank + 4 cam"],["Cam : crank","1 : 2"],["Crank gear",()=>ot(Pe.rpm)+" rpm"]]},"oil-pan":{name:"Crankcase & oil pan",tag:"Lubrication",desc:"The lower casting encloses the crankshaft and collects the oil that drains back from the engine. Ribs on it stiffen the bottom end.",specs:[["Material","Cast aluminium"],["Holds","Crankshaft, oil sump"]]},plenum:{name:"Intake plenum",tag:"Air",desc:"The large red air box on top of the V. It feeds all twelve intake runners and evens out pressure pulses so each cylinder draws the same amount of air.",specs:[["Outlets","12 runners"],["Air drawn (approx.)",()=>ot(5.7*.95*Pe.rpm/2/1e3,1)+" m\xB3/min"]]},runners:{name:"Intake runners / injection pipes",tag:"Air & fuel",desc:"Individually tuned tubes carry air from the plenum to each cylinder\u2019s intake ports. Their length uses pressure waves to ram in extra air at particular engine speeds, and the fuel injectors are mounted on them.",specs:[["Count","12"],["Material","Cast aluminium"]]},throttle:{name:"Throttle bodies",tag:"Air",desc:"Butterfly valves that meter the air entering the plenum, one at each end. Opening them wider lets in more air, and the engine adds fuel to match.",specs:[["Quantity","2"],["Idle speed","\u2248 800 rpm"],["Opening",()=>ot(4+eM()*92)+" %"]]},"exhaust-primaries":{name:"Exhaust manifold \xB7 primary pipes",tag:"Exhaust",desc:"One tube per cylinder carries burnt gas from the exhaust ports on the outside of each head. Gas leaves the port at close to 1,000 \xB0C, so at high load the metal glows orange from the port outward. The blue and gold tint is heat oxidising the stainless steel. (Drawn in by hand; the CAD file had no exhaust.)",specs:[["Pipes","12 (6 per bank)"],["Material","Stainless / Inconel"],["Gas temperature (est.)",()=>ot($u())+" \xB0C"],["Glow",()=>ot(Pe.heat*100)+" %"]]},"exhaust-collector":{name:"Exhaust collector",tag:"Exhaust",desc:"Merges each bank\u2019s six primary pipes into a single outlet that runs back toward the catalysts and silencers. It sees the highest sustained temperatures and glows strongest toward the rear.",specs:[["Collectors","2"],["Outlet","Rear flange \u2192 catalysts"],["Gas temperature (est.)",()=>ot($u())+" \xB0C"],["Glow",()=>ot(Pe.heat*100)+" %"]]},pulleys:{name:"Accessory pulleys",tag:"Drive",desc:"Three belt pulleys at the front of the engine drive accessories such as the water pump and alternator.",specs:[["Quantity","3"],["Speed (approx.)",()=>ot(Pe.rpm*2)+" rpm"]]},"head-studs":{name:"Head studs & nuts",tag:"Hardware",desc:"Long steel studs screw into the block and clamp each head down through the gasket. Torquing them evenly, in sequence, is what keeps the head gasket sealed under enormous pressure.",specs:[["Studs","28"],["Nuts","28"]]},fasteners:{name:"Fasteners",tag:"Hardware",desc:"Screws, bolts and nuts that hold the block, bearing caps, sump and intake together.",specs:[["Count","100+"]]}};Object.assign(zs,{"db-block":{name:"Crankcase & cylinder banks",tag:"Structure",desc:"One large casting that holds the whole engine together: the crankcase, the two banks of six cylinders and the heads sit in a 60\xB0 V. The DB 605 is an inverted V12, meaning the crankshaft is on top and the cylinders hang below it. That keeps the propeller shaft high, gives the pilot a better view over the nose, and lets a cannon fire through the hollow shaft.",specs:[["Layout","60\xB0 inverted V12"],["Bore \xD7 stroke","154 \xD7 160 mm"],["Displacement","35.7 L"],["Cooling","Liquid (glycol)"],["Dry weight","\u2248 750 kg"]]},"db-gear":{name:"Propeller reduction gear",tag:"Drivetrain",desc:"A propeller turns best at much lower speed than a crankshaft, so a gear train in the nose slows it down. The crankshaft spins about 1.55 times for every turn of the propeller, which keeps the blade tips below the speed of sound.",specs:[["Reduction ratio","\u2248 1 : 1.55"],["Crankshaft speed",()=>ot(Pe.rpm)+" rpm"],["Propeller speed",()=>ot(Pe.rpm/1.55)+" rpm"],["Type","Spur gears"]]},"db-shaft":{name:"Propeller shaft",tag:"Drivetrain",desc:"The output shaft that carries the propeller hub. It is hollow so a 30 mm cannon could fire straight through the centre of the spinner (the Motorkanone fitted to some Bf 109s). It turns whenever the engine is running.",specs:[["Speed",()=>ot(Pe.rpm/1.55)+" rpm"],["Construction","Hollow steel"],["Fits","Variable-pitch propeller"]]},"db-frame":{name:"Mounting frame",tag:"Structure",desc:"The tubular cradle and feet that carry the engine. In the aircraft the engine is bolted to a pair of bearers on the fuselage; this frame stands in for them and keeps the model upright on a table.",specs:[["Type","Tubular cradle"],["Purpose","Carries the engine weight and thrust"],["In the aircraft","Bolted to the fuselage bearers"]]},"db-stacks":{name:"Exhaust stacks",tag:"Exhaust",desc:"Short ejector stubs on each side that carry the burnt gas out of the cylinders. They sit in the open airflow, and at high power they get hot enough to glow dull red; at night the pilot could see the glow. Raise the revs to see them heat up.",specs:[["Fitted","5 per side (paired cylinders)"],["Exhaust temp",()=>ot(240+Pe.heat*720)+" \xB0C"],["Thrust bonus","\u2248 40 kgf at full power"],["Material","Heat-resistant steel"]]},"db-top":{name:"Top covers & breather",tag:"Auxiliary",desc:"Covers on the upper crankcase and the round fittings fixed to them. They give access to the oil system and let crankcase vapour escape through a breather.",specs:[["Position","Top of the crankcase"],["Contains","Oil breather, filler access"],["Material","Aluminium alloy"]]},"db-housing":{name:"Accessory housings",tag:"Auxiliary",desc:"Gear-driven housings on each side of the crankcase that carry the engine accessories: pumps and, on the real engine, the magnetos for the two spark plugs in each cylinder. Dual ignition meant the engine would keep running if one system failed.",specs:[["Fitted","2 (one per side)"],["Ignition","2 plugs per cylinder (24)"],["Sparks / s",()=>ot(Pe.rpm/120*24)]]},"db-crank":{name:"Crankshaft",tag:"Rotating assembly",desc:"Turns the push of the pistons into rotation. Six throws carry two connecting rods each, one from each bank. The counterweights opposite each throw balance the moving parts. Switch to Cutaway to watch it turn.",specs:[["Throws","6 (two rods each)"],["Stroke","160 mm"],["Speed",()=>ot(Pe.rpm)+" rpm"],["Power pulses / s",()=>ot(Pe.rpm/60*6)]]},"db-pistons":{name:"Pistons & gudgeon pins",tag:"Rotating assembly",desc:"Twelve aluminium pistons, 154 mm across, slide in the cylinders and take the pressure of each combustion. Each is joined to its connecting rod by a hollow steel gudgeon pin.",specs:[["Quantity","12 (6 per bank)"],["Bore","154 mm"],["Mean piston speed",()=>ot(2*.16*Pe.rpm/60,1)+" m/s"],["Material","Forged aluminium"]]},"db-rods":{name:"Connecting rods",tag:"Rotating assembly",desc:"Steel rods link each piston to the crankshaft. Two rods share every crank pin, one from the left bank and one from the right, so the banks sit side by side along the crank.",specs:[["Quantity","12"],["Shared pins","6 (one rod per bank)"],["Material","Forged steel"]]},"db-fittings":{name:"Pipes, fittings & bolts",tag:"Auxiliary",desc:"Everything small: coolant and oil connections, plug leads, bolts and brackets. The kit models them as separate pieces, so they can fly apart in the exploded view.",specs:[["Pieces","\u2248 90"],["Includes","Coolant, oil and fuel fittings"],["Material","Steel and brass"]]}});var RM="Real engine figures are for the DB 605 family. The 3D model groups the kit parts loosely, so its part names are approximate.";var zh=(t,e,n)=>new T(t,e,n),yx={ferrari:{id:"ferrari",label:"Ferrari V12",brand:"V12 Engine",sub:"Interactive 3D model",title:"Ferrari V12 Engine",root:Ph,idle:800,max:8900,presets:[800,4500,8900],vis:.012,sparkK:12,stroke:.0752,note:"Figures are approximate reference values for a modern 6.5 L V12; the model is stylised.",cam:{pos:zh(80,50,110),target:zh(0,14,0),cutPos:zh(-100,2,80),cutTarget:zh(-12,12,0),cutNormal:null},lin:pt.lin,credit:"",load:null,frame:()=>fM(Pe.crank),setExplode:dM,floor:()=>pt.floor,emit:null},db605:{id:"db605",label:"Mercedes DB 605",brand:"DB 605 Engine",sub:"Mercedes-Benz \xB7 1942 \xB7 Bf 109",title:"Mercedes-Benz DB 605 Engine",root:rc,idle:600,max:2800,presets:[600,2300,2800],vis:.038,sparkK:24,stroke:.16,note:RM,cam:Os&&{pos:Os.pos,target:Os.target,cutPos:Os.cutPos,cutTarget:Os.cutTarget,cutNormal:Os.cutNormal},lin:wM,credit:'Model: <a href="https://www.thingiverse.com/thing:6028826" target="_blank" rel="noopener">DB 605D by HQUARTAROLO</a> (Josep Calvo) \xB7 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY</a>',load:bM,frame:()=>{AM(Pe.crank/1.55),EM(Pe.crank)},setExplode:TM,floor:()=>Nn.floor,emit:{pipes:Nn.wisps,colls:[]}}},cn={e:yx.ferrari};function PM(t){return t==="FERRARI_ENGINE_BLOCK"?"block":t==="FERRARI_CRANKSHAFT"?"crankshaft":t.startsWith("FERRARI_CRANKSHAFT_CAP")?"crank-caps":t.startsWith("FERRARI_GEAR_FOR")?"timing-gears":t==="FERRARI_PISTON"||t==="FERRARI_GUDGEON_PIN"?"piston":t==="FERRARI_CONROD"?"conrod":t.startsWith("FERRARI_VALVE_BLOCK")?"head":t.endsWith("VALVEB_CAP")?"valve-cover":t==="FERRARI_SPARKPLUG"?"spark-plug":t==="FERRARI_VALVE"?"valve":t==="FERRAR_VALVE_SPRING"||t==="VALVE_WASHER"||t==="FERRARI_VALVES_PLATES"?"valve-spring":t.startsWith("FERRARI_CAMSHAFT_L")||t.startsWith("FERRARI_CAMSHAFT_R")?"camshaft":t==="FERRARI_CAMSHAFT_CAPS"||t==="FERRARI_CAM_CAP_SIDE"||t.includes("CAM_CAP")||t==="FERRARI_SCREW_CAP_SIDE"?"cam-caps":t==="FERRARI_OIL_CAP_CARTER"?"oil-pan":t==="FERRARI_INJECTION_PIPES"?"runners":t==="FERRARI_MAININJECTION_CAP"||t==="FERRARI_INJECTION_SIDE_CAPS"?"plenum":t==="FERRARI_INTAKE_SYSTEM"?"throttle":t.startsWith("FERRARI_BELT_DRIVER")?"pulleys":t==="FERRARI_MEBLOCK_VBLOCK_DRIVER"||t==="FERRARI_NUT_10"||t==="FERRARI_DRIVERS_FOR_BLOCK_CCAPS"?"head-studs":"fasteners"}var DM={"valve-cover":.03,plenum:.016,throttle:.02},_x={block:Oe.castAlu,"oil-pan":Oe.darkAlu,head:Oe.alu,"valve-cover":Oe.red,crankshaft:Oe.darkSteel,"crank-caps":Oe.castAlu,"timing-gears":Oe.darkSteel,piston:Oe.pistonAlu,conrod:Oe.steel,valve:Oe.steel,"valve-spring":Oe.brass,camshaft:Oe.steel,"cam-caps":Oe.alu,"spark-plug":Oe.alu,runners:Oe.alu,plenum:Oe.plenumRed,throttle:Oe.alu,pulleys:Oe.darkAlu,"head-studs":Oe.steel,fasteners:Oe.steel},FM=new Set(["valve-spring","fasteners","head-studs","cam-caps"]);function kM(){return new Set([...Object.values(_x),Oe.copper,Oe.gasket,Oe.inox,Oe.steelHot,Oe.black])}var ZM=ve(et()),Ix={panelOpen:window.innerWidth>720,engine:{id:"ferrari",label:"Ferrari V12",brand:"V12 Engine",sub:"",note:"",idle:800,max:8900,presets:[800,4500,8900],credit:!1},view:"solid",rev:800,explode:0,selected:null,read:{rpm:800,temp:240,spark:0,piston:0,heat:0},loading:{text:"Loading engine\u2026",status:"active"}},jM={...Ix},Lx=new Set;function xn(t){Object.assign(Ix,t),jM={...Ix},Lx.forEach(e=>e())}function In(t){return(0,ZM.useSyncExternalStore)(e=>(Lx.add(e),()=>Lx.delete(e)),()=>t(jM))}async function o3(){let t=window.ENGINE_DATA;if(!t)throw new Error("data/engine-data.js was not loaded");let e=Uint8Array.from(atob(t),a=>a.charCodeAt(0)),n=new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"));return new Response(n).arrayBuffer()}async function $M(){let t=await o3(),e=new DataView(t).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,e))),a=4+e,i={};n.insts.forEach(s=>{(i[s.key]||=[]).push(s)});let r=[];n.prods.forEach(s=>{let o=i[s.key];if(!o)return;let l=s.nv,u=new Uint16Array(t,a+s.op,l*3),d=new Int8Array(t,a+s.on,l*3),f=new Float32Array(l*3),c=new Float32Array(l*3);for(let x=0;x<l;x++)for(let S=0;S<3;S++)f[x*3+S]=s.bmin[S]+u[x*3+S]*s.sc[S],c[x*3+S]=d[x*3+S]/127;let p=s.idx16?new Uint16Array(t,a+s.oi,s.nt*3):new Uint32Array(t,a+s.oi,s.nt*3),g=new Wt;g.setAttribute("position",new ht(f,3)),g.setAttribute("normal",new ht(c,3)),g.setIndex(new ht(s.idx16?new Uint16Array(p):new Uint32Array(p),1));let _=PM(s.name);tc(g,DM[_]??.012),g.computeBoundingBox(),g.computeBoundingSphere();let m=new Is(g,_x[_],o.length);m.userData.part=_,m.userData.name=s.name,m.castShadow=!FM.has(_),m.receiveShadow=!0,m.frustumCulled=!1;let h=[];o.forEach((x,S)=>{let y=x.m,w=new He().set(y[0],y[3],y[6],y[9],y[1],y[4],y[7],y[10],y[2],y[5],y[8],y[11],0,0,0,1);m.setMatrixAt(S,w),h.push({i:S,M0:w,path:x.path})}),m.instanceMatrix.needsUpdate=!0,m.instanceMatrix.setUsage(Hr),Ct.add(m),(ir[_]||=[]).push(m),r.push({name:s.name,im:m,list:h,geo:g})}),kM().forEach(s=>{Us.has(s)||Bh(s)}),l3(r),gM(),uM(r),st.ready=!0,xn({loading:null}),window.__anim=st}function l3(t){let e=f=>t.find(c=>c.name===f),n=f=>new T().setFromMatrixPosition(f),a=(f,c)=>new T().setFromMatrixColumn(f,c),i=e("FERRARI_PISTON"),r=e("FERRARI_CONROD"),s=e("FERRARI_GUDGEON_PIN"),o=24.1;i.list.forEach(f=>{let c=n(f.M0),p=a(f.M0,1),g=new ae(p.x,p.y).normalize(),_=new ae(-g.y,g.x),m=null,h=1e9;r.list.forEach(L=>{let v=n(L.M0),I=a(L.M0,1),A=Math.hypot(v.x+I.x*(o+136.8)-c.x,v.y+I.y*(o+136.8)-c.y,v.z-c.z);A<h&&(h=A,m=L)});let x=a(m.M0,1),S=n(m.M0),y=new ae(S.x+x.x*o,S.y+x.y*o),w=new ae(c.x-aa,c.y-ui),C=s.list.reduce((L,v)=>n(v.M0).distanceTo(c)<n(L.M0).distanceTo(c)?v:L);st.pistons.push({pi:f,ri:m,ni:C,a:g,b:_,P0:c,O0:S,Q0:y,r:Math.hypot(y.x-aa,y.y-ui),l:Math.hypot(c.x-y.x,c.y-y.y),th0:Math.atan2(y.y-ui,y.x-aa),off:w.dot(_),s0:w.dot(g),phi0:Math.atan2(x.y,x.x),oq:new T(S.x-y.x,S.y-y.y,0)})}),st.pmesh=i.im,st.rmesh=r.im,st.nmesh=s.im;let l=(f,c)=>f.geo.boundingBox.getCenter(new T).applyMatrix4(c),u=(f,c)=>{let p=e(f);p&&p.list.forEach(g=>{let _=l(p,g.M0);st.rot.push({mesh:p.im,it:g,ratio:c,cx:_.x,cy:_.y})})};u("FERRARI_CRANKSHAFT",1),u("FERRARI_GEAR_FOR_CRANKSHAFT",1),u("FERRARI_CAMSHAFT_LEFT",.5),u("FERRARI_CAMSHAFT_RIGHT",.5),u("FERRARI_GEAR_FOR_CAMSHAFT",.5),u("FERRARI_BELT_DRIVER",2);let d=e("FERRARI_BELT_DRIVER_SCREW");d&&d.list.forEach(f=>{let c=n(f.M0),p=null,g=1e9;st.rot.filter(_=>_.mesh.userData.name==="FERRARI_BELT_DRIVER").forEach(_=>{let m=Math.hypot(_.cx-c.x,_.cy-c.y);m<g&&(g=m,p=_)}),p&&st.rot.push({mesh:d.im,it:f,ratio:2,cx:p.cx,cy:p.cy})})}var ul={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ba=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},u3=new Dr(-1,1,1,-1,0,1),Ex=class extends Wt{constructor(){super(),this.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new St([0,2,0,0,2,0],2))}},c3=new Ex,Fi=class{constructor(e){this._mesh=new gt(c3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,u3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var cl=class extends ba{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=nr.clone(e.uniforms),this.material=new Mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Fi(this.material)}render(e,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var oc=class extends ba{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,a){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Wh=class extends ba{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var lc=class{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){let a=e.getSize(new ae);this._width=a.width,this._height=a.height,n=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cl(ul),this.copyPass.material.blending=Ua,this.timer=new Au}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let n=this.renderer.getRenderTarget(),a=!1;for(let i=0,r=this.passes.length;i<r;i++){let s=this.passes[i];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),s.needsSwap){if(a){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}oc!==void 0&&(s instanceof oc?a=!0:s instanceof Wh&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){let n=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;let a=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(a,i),this.renderTarget2.setSize(a,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(a,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var uc=class extends ba{constructor(e,n,a=null,i=null,r=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=a,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ie}render(e,n,a){let i=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=i}};var JM={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var dl=class t extends ba{constructor(e,n=1,a,i){super(),this.strength=n,this.radius=a,this.threshold=i,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new Ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,s,{type:un,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new Ot(r,s,{type:un,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let c=new Ot(r,s,{type:un,depthBuffer:!1});c.texture.name="UnrealBloomPass.v"+d,c.texture.generateMipmaps=!1,this.renderTargetsVertical.push(c),r=Math.round(r/2),s=Math.round(s/2)}let o=JM;this.highPassUniforms=nr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ae(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=nr.clone(ul.uniforms),this.blendMaterial=new Mt({uniforms:this.copyUniforms,vertexShader:ul.vertexShader,fragmentShader:ul.fragmentShader,premultipliedAlpha:!0,blending:si,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ie,this._oldClearAlpha=1,this._basic=new ua,this._fsQuad=new Fi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let a=Math.round(e/2),i=Math.round(n/2);this.renderTargetBright.setSize(a,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(a,i),this.renderTargetsVertical[r].setSize(a,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/a,1/i),a=Math.round(a/2),i=Math.round(i/2)}render(e,n,a,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=t.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=t.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let n=[],a=e/3;for(let s=0;s<e;s++)n.push(.39894*Math.exp(-.5*s*s/(a*a))/a);let i=[],r=[];for(let s=1;s<e;s+=2){let o=n[s],l=s+1<e?n[s+1]:0,u=o+l;i.push((s*o+(s+1)*l)/u),r.push(u)}return new Mt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},centerWeight:{value:n[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};dl.BlurDirectionX=new ae(1,0);dl.BlurDirectionY=new ae(0,1);var cc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var qh=class extends ba{constructor(){super(),this.isOutputPass=!0,this.uniforms=nr.clone(cc.uniforms),this.material=new Vo({name:cc.name,uniforms:this.uniforms,vertexShader:cc.vertexShader,fragmentShader:cc.fragmentShader}),this._fsQuad=new Fi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ku?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===As?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Uu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var QM=new ua({color:0,side:fn});QM.clippingPlanes=[Di];var ew=new Wo({depthPacking:Pg,side:fn});ew.clippingPlanes=[Di];var d3=new Mt({uniforms:{uHeat:Ju},clipping:!0,vertexShader:`attribute float aHeat; varying float vHeat;
    #include <common>
    #include <clipping_planes_pars_vertex>
    void main(){ vHeat = aHeat; vec4 mvPosition = modelViewMatrix * vec4(position,1.0);
      gl_Position = projectionMatrix * mvPosition;
      #include <clipping_planes_vertex>
    }`,fragmentShader:`uniform float uHeat; varying float vHeat;
    #include <common>
    #include <clipping_planes_pars_fragment>
    void main(){
      #include <clipping_planes_fragment>
      float hh = clamp(uHeat * vHeat * 1.1 - 0.08, 0.0, 1.0);
      vec3 hc = mix(vec3(0.42, 0.02, 0.0), vec3(1.0, 0.16, 0.01), smoothstep(0.0, 0.6, hh));
      hc = mix(hc, vec3(1.0, 0.34, 0.05), smoothstep(0.6, 1.0, hh));
      gl_FragColor = vec4(hc * pow(max(hh, 0.0001), 1.4) * 1.3, 1.0);
    }`}),Xh=new Ot(4,4,{minFilter:en,magFilter:en}),rr=[0,1].map(()=>new Ot(4,4,{minFilter:on,magFilter:on,depthBuffer:!1})),tw=[];for(let t=0;t<14;t++){let e=new T(Math.random()*2-1,Math.random()*2-1,Math.random()).normalize(),n=(t+1)/14;e.multiplyScalar(.15+.85*n*n),tw.push(e)}var hc=new Mt({uniforms:{tDepth:{value:Xh.texture},uProj:{value:new He},uProjInv:{value:new He},uKernel:{value:tw},uRadius:{value:3},uInt:{value:1.5},uRes:{value:new ae(1,1)}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDepth; uniform mat4 uProj, uProjInv; uniform vec3 uKernel[14];
    uniform float uRadius, uInt; uniform vec2 uRes; varying vec2 vUv;
    #include <packing>
    float rawDepth(vec2 uv){ return unpackRGBAToDepth(texture2D(tDepth, uv)); }
    vec3 viewPos(vec2 uv, float d){ vec4 p = uProjInv * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0); return p.xyz / p.w; }
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      float d = rawDepth(vUv);
      if (d > 0.9999) { gl_FragColor = vec4(1.0); return; }
      vec3 P = viewPos(vUv, d);
      // find the surface direction from the neighbouring pixels
      vec3 px = viewPos(vUv + vec2(1.0/uRes.x, 0.0), rawDepth(vUv + vec2(1.0/uRes.x, 0.0)));
      vec3 nx = viewPos(vUv - vec2(1.0/uRes.x, 0.0), rawDepth(vUv - vec2(1.0/uRes.x, 0.0)));
      vec3 py = viewPos(vUv + vec2(0.0, 1.0/uRes.y), rawDepth(vUv + vec2(0.0, 1.0/uRes.y)));
      vec3 ny = viewPos(vUv - vec2(0.0, 1.0/uRes.y), rawDepth(vUv - vec2(0.0, 1.0/uRes.y)));
      vec3 dx = abs(px.z - P.z) < abs(nx.z - P.z) ? px - P : P - nx;
      vec3 dy = abs(py.z - P.z) < abs(ny.z - P.z) ? py - P : P - ny;
      vec3 N = normalize(cross(dx, dy)); if (dot(N, -P) < 0.0) N = -N;
      // random rotation per pixel (hides banding)
      float a = hash(gl_FragCoord.xy) * 6.2831853;
      vec3 rv = vec3(cos(a), sin(a), 0.0);
      vec3 T = normalize(rv - N * dot(rv, N)); vec3 B = cross(N, T);
      // count how many sample points are inside other geometry
      float occ = 0.0;
      for (int i = 0; i < 14; i++) {
        vec3 k = uKernel[i];
        vec3 sp = P + (T * k.x + B * k.y + N * k.z) * uRadius;
        vec4 pp = uProj * vec4(sp, 1.0); vec2 suv = pp.xy / pp.w * 0.5 + 0.5;
        float sd = rawDepth(suv);
        if (sd > 0.9999) continue;
        float sz = viewPos(suv, sd).z;
        float diff = sz - sp.z;
        occ += step(0.03 * uRadius, diff) * smoothstep(0.0, 1.0, uRadius / max(abs(P.z - sz), 0.0001));
      }
      float ao = 1.0 - clamp(occ / 14.0 * uInt, 0.0, 1.0);
      gl_FragColor = vec4(vec3(ao), 1.0);
    }`}),dc=new Mt({uniforms:{tAO:{value:null},tDepth:{value:Xh.texture},uDir:{value:new ae}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tAO, tDepth; uniform vec2 uDir; varying vec2 vUv;
    #include <packing>
    void main(){
      float d0 = unpackRGBAToDepth(texture2D(tDepth, vUv));
      float sum = 0.0, w = 0.0;
      for (int i = -3; i <= 3; i++) {
        vec2 uv = vUv + uDir * float(i);
        float d = unpackRGBAToDepth(texture2D(tDepth, uv));
        float wt = (1.0 - abs(float(i)) / 4.0) * (abs(d - d0) < 0.0006 ? 1.0 : 0.0);
        sum += texture2D(tAO, uv).r * wt; w += wt;
      }
      gl_FragColor = vec4(vec3(sum / max(w, 0.0001)), 1.0);
    }`}),fc=new Fi(hc),Hs=new lc(ut,new Ot(4,4,{type:un}));Hs.renderToScreen=!1;Hs.addPass(new uc(Lt,Rt));Hs.addPass(new dl(new ae(256,256),.5,.35,.05));var nw=new cl(new Mt({uniforms:{tDiffuse:{value:null},tAO:{value:rr[0].texture},tBloom:{value:Hs.renderTarget2.texture},uAO:{value:1},uBloom:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse, tAO, tBloom; uniform float uAO, uBloom; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float ao = texture2D(tAO, vUv).r;
      c.rgb *= mix(1.0, ao, uAO);
      c.rgb += texture2D(tBloom, vUv).rgb * uBloom;
      gl_FragColor = c;
    }`}),"tDiffuse"),f3=new Ot(4,4,{type:un,samples:4}),fl=new lc(ut,f3);fl.addPass(new uc(Lt,Rt));fl.addPass(nw);fl.addPass(new qh);function aw(){let t=Pe.heat>.02,e=Lt.background;ut.shadowMap.autoUpdate=!1;let n=[];Lt.traverse(r=>{(r.isPoints||r.isMesh&&r.material===Gr)&&r.visible&&(r.visible=!1,n.push(r))}),Lt.background=null,Lt.overrideMaterial=ew;let a=new Ie;ut.getClearColor(a);let i=ut.getClearAlpha();if(ut.setClearColor(16777215,1),ut.setRenderTarget(Xh),ut.clear(),ut.render(Lt,Rt),Lt.overrideMaterial=null,n.forEach(r=>{r.visible=!0}),hc.uniforms.uProj.value.copy(Rt.projectionMatrix),hc.uniforms.uProjInv.value.copy(Rt.projectionMatrixInverse),fc.material=hc,ut.setRenderTarget(rr[0]),fc.render(ut),dc.uniforms.tAO.value=rr[0].texture,dc.uniforms.uDir.value.set(1/rr[1].width,0),fc.material=dc,ut.setRenderTarget(rr[1]),fc.render(ut),dc.uniforms.tAO.value=rr[1].texture,dc.uniforms.uDir.value.set(0,1/rr[0].height),ut.setRenderTarget(rr[0]),fc.render(ut),ut.setClearColor(a,i),t){let r=[];Lt.traverse(s=>{!(s.isMesh||s.isPoints)||!s.visible||s.material!==Qu&&(r.push([s,s.material]),s.material=s.geometry&&s.geometry.attributes.aHeat&&!s.isInstancedMesh?d3:QM)}),Lt.background=null,Hs.render(),r.forEach(([s,o])=>{s.material=o})}nw.uniforms.uBloom.value=t?1:0,Lt.background=e,ut.shadowMap.autoUpdate=!0,ut.setRenderTarget(null),fl.render()}function iw(){let t=ut.getPixelRatio(),e=Math.max(2,Math.floor(_e.W*t/2)),n=Math.max(2,Math.floor(_e.H*t/2));Xh.setSize(e,n),rr.forEach(a=>a.setSize(e,n)),hc.uniforms.uRes.value.set(e,n),Hs.setPixelRatio(t*.5),Hs.setSize(_e.W,_e.H),fl.setPixelRatio(t),fl.setSize(_e.W,_e.H)}var pc={onSelect:()=>{},onZoom:()=>{}};function rw(){_e.panelOpen=!0,xn({panelOpen:!0})}function Yh(){_e.panelOpen=!_e.panelOpen,xn({panelOpen:_e.panelOpen})}function Kh(){let t=document.getElementById("panel");return _e.panelOpen&&_e.W>720&&t?Math.min(t.offsetWidth,_e.W*.5):0}function mc(t){Pe.target=kn.clamp(t,na.idle,na.max),xn({rev:Pe.target})}function hl(t){cn.e.setExplode(t),xn({explode:t})}function sw(t){xn({selected:t})}function ow(t){xn({read:{rpm:Math.round(t/10)*10,temp:$u(),spark:t/120*cn.e.sparkK,piston:2*cn.e.stroke*t/60,heat:Pe.heat}})}function Tx(t){Pe.rpm=Pe.target=t.idle,xn({engine:{id:t.id,label:t.label,brand:t.brand,sub:t.sub,note:t.note,idle:t.idle,max:t.max,presets:t.presets,credit:!!t.credit},rev:t.idle,selected:null})}function lw(t){pc.onSelect=t.onSelect,pc.onZoom=t.onZoom,Tx(cn.e)}var ki,Ax,gc,Xr=null,jh=0,uw=()=>{},Zh=new T,Vs=null;function cw(t,e){clearTimeout(jh),(!Xr||Xr.key!==t)&&(ki.innerHTML=`${zs[t].name}<small>Click for details</small>`),Xr={key:t,point:e.clone()},ki.hidden=!1,Px()}function pl(t=350){clearTimeout(jh),jh=setTimeout(Rx,t)}function Rx(){Xr=null,Vs=null,ki.hidden=!0,Ax.setAttribute("points",""),gc.setAttribute("cx",-10),gc.setAttribute("cy",-10)}function Px(){if(!Xr)return;if(Zh.copy(Xr.point).project(Rt),Zh.z>1){Rx();return}let t=(Zh.x+1)/2*_e.W,e=(1-Zh.y)/2*_e.H,n=ki.offsetWidth,a=ki.offsetHeight,i=_e.W-Kh(),r=72,s=-72;t+r+n>i-10&&(r=-72-n),e+s-a<10&&(s=72+a);let o=t+r,l=e+s-a/2;ki.style.transform=`translate(${Math.round(o)}px, ${Math.round(l)}px)`;let u=r>0?o:o+n,d=l+a/2;Ax.setAttribute("points",`${t},${e} ${u-Math.sign(r)*14},${d} ${u},${d}`),gc.setAttribute("cx",t),gc.setAttribute("cy",e),Vs={x0:Math.min(t,o)-24,x1:Math.max(t,o+n)+24,y0:Math.min(e,l)-24,y1:Math.max(e,l+a)+24}}function dw(t,e){return!!Vs&&t>Vs.x0&&t<Vs.x1&&e>Vs.y0&&e<Vs.y1}function fw(t){ki=document.getElementById("tipbox"),Ax=document.getElementById("tipline"),gc=document.getElementById("tipdot"),uw=t,ki.addEventListener("click",()=>{if(!Xr)return;let e=Xr.key;Rx(),uw(e)}),ki.addEventListener("pointerenter",()=>clearTimeout(jh)),ki.addEventListener("pointerleave",()=>pl(250))}var xc=new ua({color:3116287,transparent:!0,opacity:.3,blending:si,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});xc.clippingPlanes=[Di];var Dx=[];function h3(t){Dx.forEach(e=>e.parent&&e.parent.remove(e)),Dx=[],t&&(ir[t]||[]).forEach(e=>{let n;e.isInstancedMesh?(n=new Is(e.geometry,xc,e.count),n.instanceMatrix=e.instanceMatrix):n=new gt(e.geometry,xc),n.raycast=()=>{},n.frustumCulled=!1,e.add(n),Dx.push(n)})}function Gs(t,e=!1){_e.selected=t,h3(t),sw(t),t&&(wt.autoRotate=!1,e&&Fx(t),!_e.panelOpen&&window.innerWidth>720&&rw())}function Fx(t){cn.e.root.updateMatrixWorld(!0);let e=new ka;if((ir[t]||[]).forEach(s=>e.expandByObject(s)),e.isEmpty())return;let n=e.getCenter(new T),a=e.getSize(new T),i=kn.clamp(a.length()*1.15,55,230),r=Rt.position.clone().sub(wt.target).normalize();_e.fly={t:0,fromT:wt.target.clone(),fromP:Rt.position.clone(),toT:n,toP:n.clone().addScaledVector(r,i)},wt.autoRotate=!1}var hw=new Ru,pw=new ae;function mw(t){let e=Vr.getBoundingClientRect();pw.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),hw.setFromCamera(pw,Rt);let n=hw.intersectObject(cn.e.root,!0);for(let a of n){if(_e.cutOn&&Di.distanceToPoint(a.point)<0)continue;let i=a.object;if(i.userData&&i.userData.part)return{key:i.userData.part,point:a.point}}return null}function gw(){fw(n=>Gs(n));let t=0;Vr.addEventListener("pointermove",n=>{if(n.buttons||_e.fly||dw(n.clientX,n.clientY))return;let a=performance.now();if(a-t<70)return;t=a;let i=mw(n);i?cw(i.key,i.point):pl()}),Vr.addEventListener("pointerleave",()=>pl());let e=null;Vr.addEventListener("pointerdown",n=>{pl(0),e={x:n.clientX,y:n.clientY,t:performance.now()}}),Vr.addEventListener("pointerup",n=>{if(!e)return;let a=Math.hypot(n.clientX-e.x,n.clientY-e.y),i=performance.now()-e.t;if(e=null,a<5&&i<500){let r=mw(n),s=r?r.key:null;pl(0),Gs(s===_e.selected?null:s)}})}function xw(t){let e=t==="cut";xn({view:e?"cut":"solid"}),rl(e),wt.autoRotate=!1,_e.fly={t:0,fromT:wt.target.clone(),fromP:Rt.position.clone(),toT:(e?cn.e.cam.cutTarget:cn.e.cam.target).clone(),toP:(e?cn.e.cam.cutPos:cn.e.cam.pos).clone()}}var $h=!1;async function kx(t){let e=yx[t];if(!e||e===cn.e||$h)return;if($h=!0,hl(0),Gs(null),rl(!1),xn({view:"solid"}),_e.fly=null,e.load){xn({loading:{text:"Loading "+e.label+"\u2026",status:"active"}});try{await e.load()}catch(a){console.error(a),xn({loading:{text:"Could not load "+e.label+": "+a.message,status:"error"}}),$h=!1;return}xn({loading:null})}let n=cn.e;n.emit={pipes:bn.pipes,colls:bn.colls},n.root.visible=!1,n.root.position.set(0,0,0),n.floor()&&(n.floor().visible=!1),cn.e=e,e.root.visible=!0,e.floor()&&(e.floor().visible=!0),bn.pipes=e.emit.pipes,bn.colls=e.emit.colls,pM(e.cam.cutNormal||px),na.idle=e.idle,na.max=e.max,Tx(e),Pe.heat=0,e.setExplode(0),document.title=e.title,wt.autoRotate=!0,_e.fly={t:0,fromT:wt.target.clone(),fromP:Rt.position.clone(),toT:e.cam.target.clone(),toP:e.cam.pos.clone()},$h=!1}function vw(){window.__switch=kx}var FW=ve(et()),sT=ve(BI()),oT=ve(xm());var rT=ve(et());var vm=ve(et(),1);var OI=t=>t?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function zI(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:OI(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}var HI=t=>{let e="",n=!1;for(let a of t){if(a==="-"||a==="_"||a<=" "){n=e.length>0;continue}e.length===0?e+=a.toLowerCase():e+=n?a.toUpperCase():a,n=!1}return e};var VI=t=>{let e=HI(t);return e.charAt(0).toUpperCase()+e.slice(1)};var cd=ve(et(),1);var ud=(...t)=>t.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim();var ps={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function jv(t){return t!=null}function GI(t,e={}){let n=e.attributeNames??{},a=c=>n[c]??c,i=t.size??t.width??ps.width,r=t.size??t.height??ps.height,s=t.aliases?.filter(c=>typeof c=="string"&&c.trim()!=="").map(c=>`lucide-${c}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...s],l=e.className?.split(" ").filter(Boolean)??[],u=e.includeDefaultClasses===!1?ud(...l):ud("lucide",...o,...l),d=e.absoluteStrokeWidth?Number(e.strokeWidth??ps["stroke-width"])*Number(t.size??t.width??ps.width)/Number(e.size??e.width??ps.width):e.strokeWidth??ps["stroke-width"];return["svg",{...Object.entries(ps).reduce((c,[p,g])=>(c[a(p)]=g,c),{}),..."color"in e&&e.color&&{[a("stroke")]:e.color},..."size"in e&&jv(e.size)&&{[a("width")]:e.size,[a("height")]:e.size},..."width"in e&&jv(e.width)&&{[a("width")]:e.width},..."height"in e&&jv(e.height)&&{[a("height")]:e.height},[a("stroke-width")]:d,...u&&{[a("class")]:u},[a("viewBox")]:`0 0 ${i} ${r}`,...e.hasA11yProp===!1?{[a("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(c=>{let[p,g,_]=c,m=e.nonScalingStroke?{[a("vector-effect")]:"non-scaling-stroke",...g}:g;return _?[p,m,_]:[p,m]})]}function WI(t,e={}){return GI(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var qI=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var Wl=ve(et(),1);var gk=(0,Wl.createContext)({});var XI=()=>(0,Wl.useContext)(gk);var YI=(0,cd.forwardRef)(({color:t,size:e,width:n,height:a,strokeWidth:i,absoluteStrokeWidth:r,nonScalingStroke:s,className:o="",children:l,iconNode:u=[],icon:d={node:u,aliases:[],size:24},...f},c)=>{let{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:_=!1,nonScalingStroke:m=!1,color:h="currentColor",className:x=""}=XI()??{},S=!!l||qI(f),[y,w,C=[]]=WI(d,{color:t??h,width:n??e??p,height:a??e??p,strokeWidth:i??g,absoluteStrokeWidth:r??_,nonScalingStroke:s??m,className:ud(x,o),hasA11yProp:S,attributes:f});return(0,cd.createElement)(y,{ref:c,...w},[...C.map(([L,v])=>(0,cd.createElement)(L,v)),...Array.isArray(l)?l:[l]])});function ql(t,e=[],n=[]){let a=typeof t=="string"?zI(t,e,n):t,i=(0,vm.forwardRef)(({className:r,...s},o)=>(0,vm.createElement)(YI,{ref:o,icon:a,className:r,...s}));return a.name&&(i.displayName=VI(a.name)),i}var KI={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};KI.node;var ms=ql(KI);var ZI={name:"panel-right-open",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]};ZI.node;var dd=ql(ZI);var jI={name:"panel-right-close",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]};jI.node;var fd=ql(jI);var B5=ve(et());var xE=ve(et());var vt=ve(et(),1);var xk=Object.defineProperty,vk=(t,e)=>xk(t,"name",{value:e,configurable:!0});function hd(t,[e,n]){return Math.min(n,Math.max(e,t))}vk(hd,"clamp");var yk=Object.defineProperty,Xl=(t,e)=>yk(t,"name",{value:e,configurable:!0}),$I=!!(typeof window<"u"&&window.document&&window.document.createElement);function _n(t,e,{checkForDefaultPrevented:n=!0}={}){return Xl(function(i){if(t?.(i),n===!1||!i||!i.defaultPrevented)return e?.(i)},"handleEvent")}Xl(_n,"composeEventHandlers");function _k(t){if(!$I)throw new Error("Cannot access window outside of the DOM");return t?.ownerDocument?.defaultView??window}Xl(_k,"getOwnerWindow");function $v(t){if(!$I)throw new Error("Cannot access document outside of the DOM");return t?.ownerDocument??document}Xl($v,"getOwnerDocument");function JI(t,e=!1){let{activeElement:n}=$v(t);if(!n?.nodeName)return null;if(QI(n)&&n.contentDocument)return JI(n.contentDocument.body,e);if(e){let a=n.getAttribute("aria-activedescendant");if(a){let i=$v(n).getElementById(a);if(i)return i}}return n}Xl(JI,"getActiveElement");function QI(t){return t.tagName==="IFRAME"}Xl(QI,"isFrame");var eL=ve(et(),1),Sk=Object.defineProperty,Qv=(t,e)=>Sk(t,"name",{value:e,configurable:!0});function Jv(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}Qv(Jv,"setRef");function tL(...t){return e=>{let n=!1,a=t.map(i=>{let r=Jv(i,e);return!n&&typeof r=="function"&&(n=!0),r});if(n)return()=>{for(let i=0;i<a.length;i++){let r=a[i];typeof r=="function"?r():Jv(t[i],null)}}}}Qv(tL,"composeRefs");function Sn(...t){return eL.useCallback(tL(...t),t)}Qv(Sn,"useComposedRefs");var $a=ve(et(),1),ey=ve(xt(),1),Ek=Object.defineProperty,ja=(t,e)=>Ek(t,"name",{value:e,configurable:!0});function Tk(t,e){let n=$a.createContext(e);n.displayName=t+"Context";let a=ja(r=>{let{children:s,...o}=r,l=$a.useMemo(()=>o,Object.values(o));return(0,ey.jsx)(n.Provider,{value:l,children:s})},"Provider");a.displayName=t+"Provider";function i(r,s={}){let{optional:o=!1}=s,l=$a.useContext(n);if(l)return l;if(e!==void 0)return e;if(!o)throw new Error(`\`${r}\` must be used within \`${t}\``)}return ja(i,"useContext"),[a,i]}ja(Tk,"createContext");function Pa(t,e=[]){let n=[];function a(r,s){let o=$a.createContext(s);o.displayName=r+"Context";let l=n.length;n=[...n,s];let u=ja(f=>{let{scope:c,children:p,...g}=f,_=c?.[t]?.[l]||o,m=$a.useMemo(()=>g,Object.values(g));return(0,ey.jsx)(_.Provider,{value:m,children:p})},"Provider");u.displayName=r+"Provider";function d(f,c,p={}){let{optional:g=!1}=p,_=c?.[t]?.[l]||o,m=$a.useContext(_);if(m)return m;if(s!==void 0)return s;if(!g)throw new Error(`\`${f}\` must be used within \`${r}\``)}return ja(d,"useContext"),[u,d]}ja(a,"createContext");let i=ja(()=>{let r=n.map(s=>$a.createContext(s));return ja(function(o){let l=o?.[t]||r;return $a.useMemo(()=>({[`__scope${t}`]:{...o,[t]:l}}),[o,l])},"useScope")},"createScope");return i.scopeName=t,[a,rL(i,...e)]}ja(Pa,"createContextScope");function rL(...t){let e=t[0];if(t.length===1)return e;let n=ja(()=>{let a=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return ja(function(r){let s=a.reduce((o,{useScope:l,scopeName:u})=>{let f=l(r)[`__scope${u}`];return{...o,...f}},{});return $a.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])},"useComposedScopes")},"createScope");return n.scopeName=e.scopeName,n}ja(rL,"composeContextScopes");var Ja=ve(et(),1);var _m=!1;var sL=ve(et(),1),Vi=globalThis?.document?sL.useLayoutEffect:()=>{};var yi=ve(et(),1);var Yl=ve(et(),1),Ak=Object.defineProperty,Rk=(t,e)=>Ak(t,"name",{value:e,configurable:!0}),oL=Yl[" useEffectEvent ".trim().toString()],lL=Yl[" useInsertionEffect ".trim().toString()];function ty(t){if(typeof oL=="function")return oL(t);let e=Yl.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof lL=="function"?lL(()=>{e.current=t}):Vi(()=>{e.current=t}),Yl.useMemo(()=>((...n)=>e.current?.(...n)),[])}Rk(ty,"useEffectEvent");var Pk=Object.defineProperty,pd=(t,e)=>Pk(t,"name",{value:e,configurable:!0}),Dk=Ja[" useInsertionEffect ".trim().toString()]||Vi;function ro({prop:t,defaultProp:e,onChange:n=pd(()=>{},"onChange"),caller:a}){let[i,r,s]=cL({defaultProp:e,onChange:n}),o=t!==void 0,l=o?t:i;if(_m){let d=Ja.useRef(t!==void 0);Ja.useEffect(()=>{let f=d.current;f!==o&&console.warn(`${a} is changing from ${f?"controlled":"uncontrolled"} to ${o?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=o},[o,a])}let u=Ja.useCallback(d=>{if(o){let f=dL(d)?d(t):d;f!==t&&s.current?.(f)}else r(d)},[o,t,r,s]);return[l,u]}pd(ro,"useControllableState");function cL({defaultProp:t,onChange:e}){let[n,a]=Ja.useState(t),i=Ja.useRef(n),r=Ja.useRef(e);return Dk(()=>{r.current=e},[e]),Ja.useEffect(()=>{i.current!==n&&(r.current?.(n),i.current=n)},[n,i]),[n,a,r]}pd(cL,"useUncontrolledState");function dL(t){return typeof t=="function"}pd(dL,"isFunction");var uL=Symbol("RADIX:SYNC_STATE");function Fk(t,e,n,a){let{prop:i,defaultProp:r,onChange:s,caller:o}=e,l=i!==void 0,u=ty(s);if(_m){let m=yi.useRef(i!==void 0);yi.useEffect(()=>{let h=m.current;h!==l&&console.warn(`${o} is changing from ${h?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=l},[l,o])}let d=[{...n,state:r}];a&&d.push(a);let[f,c]=yi.useReducer((m,h)=>{if(h.type===uL)return{...m,state:h.state};let x=t(m,h);return l&&!Object.is(x.state,m.state)&&u(x.state),x},...d),p=f.state,g=yi.useRef(p);yi.useEffect(()=>{g.current!==p&&(g.current=p,l||u(p))},[p,g,l]);let _=yi.useMemo(()=>i!==void 0?{...f,state:i}:f,[f,i]);return yi.useEffect(()=>{l&&!Object.is(i,f.state)&&c({type:uL,state:i})},[i,f.state,l]),[_,c]}pd(Fk,"useControllableStateReducer");var Sm=ve(et(),1),Uk=ve(xt(),1),kk=Object.defineProperty,Nk=(t,e)=>kk(t,"name",{value:e,configurable:!0}),Bk={LTR:"ltr",RTL:"rtl"},Ok=Sm.createContext(void 0);function so(t){let e=Sm.useContext(Ok);return t||e||Bk.LTR}Nk(so,"useDirection");var Mm=ve(et(),1),zk=Object.defineProperty,Hk=(t,e)=>zk(t,"name",{value:e,configurable:!0});function ny(t){let e=Mm.useRef({value:t,previous:t});return Mm.useMemo(()=>(e.current.value!==t&&(e.current.previous=e.current.value,e.current.value=t),e.current.previous),[t])}Hk(ny,"usePrevious");var fL=ve(et(),1);var Vk=Object.defineProperty,Gk=(t,e)=>Vk(t,"name",{value:e,configurable:!0});function ay(t){let[e,n]=fL.useState(void 0);return Vi(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});let a=0,i=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let s=r[0];window.cancelAnimationFrame(a),a=window.requestAnimationFrame(()=>{let o,l;if("borderBoxSize"in s){let u=s.borderBoxSize,d=Array.isArray(u)?u[0]:u;o=d.inlineSize,l=d.blockSize}else o=t.offsetWidth,l=t.offsetHeight;n({width:o,height:l})})});return i.observe(t,{box:"border-box"}),()=>{window.cancelAnimationFrame(a),i.unobserve(t)}}else n(void 0)},[t]),e}Gk(ay,"useSize");var _L=ve(et(),1),SL=ve(xm(),1);var zn=ve(et(),1);var Wk=Object.defineProperty,Qa=(t,e)=>Wk(t,"name",{value:e,configurable:!0});function Gi(t){let e=zn.forwardRef((n,a)=>{let{children:i,...r}=n,s=null,o=!1,l=[];iy(i)&&typeof wm=="function"&&(i=wm(i._payload)),zn.Children.forEach(i,c=>{if(xL(c)){o=!0;let p=c,g="child"in p.props?p.props.child:p.props.children;iy(g)&&typeof wm=="function"&&(g=wm(g._payload)),s=Xk(p,g),l.push(s?.props?.children)}else l.push(c)}),s?s=zn.cloneElement(s,void 0,l):!o&&zn.Children.count(i)===1&&zn.isValidElement(i)&&(s=i);let u=s?gL(s):void 0,d=Sn(a,u);if(!s){if(i||i===0)throw new Error(o?Zk(t):Kk(t));return i}let f=mL(r,s.props??{});return s.type!==zn.Fragment&&(f.ref=a?d:u),zn.cloneElement(s,f)});return e.displayName=`${t}.Slot`,e}Qa(Gi,"createSlot");var hL=Gi("Slot"),pL=Symbol.for("radix.slottable");function qk(t){let e=Qa(n=>"child"in n?n.children(n.child):n.children,"Slottable");return e.displayName=`${t}.Slottable`,e.__radixId=pL,e}Qa(qk,"createSlottable");var Xk=Qa((t,e)=>{if("child"in t.props){let n=t.props.child;return zn.isValidElement(n)?zn.cloneElement(n,void 0,t.props.children(n.props.children)):null}return zn.isValidElement(e)?e:null},"getSlottableElementFromSlottable");function mL(t,e){let n={...e};for(let a in e){let i=t[a],r=e[a];/^on[A-Z]/.test(a)?i&&r?n[a]=(...o)=>{let l=r(...o);return i(...o),l}:i&&(n[a]=i):a==="style"?n[a]={...i,...r}:a==="className"?n[a]=[i,r].filter(Boolean).join(" "):a==="aria-describedby"&&(n[a]=yL(r,i))}return{...t,...n}}Qa(mL,"mergeProps");function gL(t){let e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}Qa(gL,"getElementRef");function xL(t){return zn.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===pL}Qa(xL,"isSlottable");var Yk=Symbol.for("react.lazy");function iy(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===Yk&&"_payload"in t&&vL(t._payload)}Qa(iy,"isLazyComponent");function vL(t){return typeof t=="object"&&t!==null&&"then"in t}Qa(vL,"isPromiseLike");function yL(...t){let e=new Set;for(let n of t)if(typeof n=="string")for(let a of String(n).trim().split(/\s+/))a&&e.add(a);return e.size>0?Array.from(e).join(" "):void 0}Qa(yL,"concatAriaDescribedby");var Kk=Qa(t=>`${t} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Zk=Qa(t=>`${t} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),wm=zn[" use ".trim().toString()];var ML=ve(xt(),1),jk=Object.defineProperty,$k=(t,e)=>jk(t,"name",{value:e,configurable:!0}),Jk=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Tn=Jk.reduce((t,e)=>{let n=Gi(`Primitive.${e}`),a=_L.forwardRef((i,r)=>{let{asChild:s,...o}=i,l=s?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,ML.jsx)(l,{...o,ref:r})});return a.displayName=`Primitive.${e}`,{...t,[e]:a}},{});function Qk(t,e){t&&SL.flushSync(()=>t.dispatchEvent(e))}$k(Qk,"dispatchDiscreteCustomEvent");var _i=ve(et(),1);var Cm=ve(xt(),1),va=ve(et(),1);var oo=ve(xt(),1),eN=Object.defineProperty,An=(t,e)=>eN(t,"name",{value:e,configurable:!0});function md(t){let e=t+"CollectionProvider",[n,a]=Pa(e),[i,r]=n(e,{collectionRef:{current:null},itemMap:new Map}),s=An(_=>{let{scope:m,children:h}=_,x=_i.useRef(null),S=_i.useRef(new Map).current;return(0,Cm.jsx)(i,{scope:m,itemMap:S,collectionRef:x,children:h})},"CollectionProvider");s.displayName=e;let o=t+"CollectionSlot",l=Gi(o),u=_i.forwardRef((_,m)=>{let{scope:h,children:x}=_,S=r(o,h),y=Sn(m,S.collectionRef);return(0,Cm.jsx)(l,{ref:y,children:x})});u.displayName=o;let d=t+"CollectionItemSlot",f="data-radix-collection-item",c=Gi(d),p=_i.forwardRef((_,m)=>{let{scope:h,children:x,...S}=_,y=_i.useRef(null),w=Sn(m,y),C=r(d,h);return _i.useEffect(()=>(C.itemMap.set(y,{ref:y,...S}),()=>{C.itemMap.delete(y)})),(0,Cm.jsx)(c,{[f]:"",ref:w,children:x})});p.displayName=d;function g(_){let m=r(t+"CollectionConsumer",_);return _i.useCallback(()=>{let x=m.collectionRef.current;if(!x)return[];let S=Array.from(x.querySelectorAll(`[${f}]`));return Array.from(m.itemMap.values()).sort((C,L)=>S.indexOf(C.ref.current)-S.indexOf(L.ref.current))},[m.collectionRef,m.itemMap])}return An(g,"useCollection"),[{Provider:s,Slot:u,ItemSlot:p},g,a]}An(md,"createCollection");var wL=new WeakMap,ry=class gs extends Map{static{An(this,"OrderedDict")}#e;constructor(e){super(e),this.#e=[...super.keys()],wL.set(this,!0)}set(e,n){return wL.get(this)&&(this.has(e)?this.#e[this.#e.indexOf(e)]=e:this.#e.push(e)),super.set(e,n),this}insert(e,n,a){let i=this.has(n),r=this.#e.length,s=oy(e),o=s>=0?s:r+s,l=o<0||o>=r?-1:o;if(l===this.size||i&&l===this.size-1||l===-1)return this.set(n,a),this;let u=this.size+(i?0:1);s<0&&o++;let d=[...this.#e],f,c=!1;for(let p=o;p<u;p++)if(o===p){let g=d[p];d[p]===n&&(g=d[p+1]),i&&this.delete(n),f=this.get(g),this.set(n,a)}else{!c&&d[p-1]===n&&(c=!0);let g=d[c?p:p-1],_=f;f=this.get(g),this.delete(g),this.set(g,_)}return this}with(e,n,a){let i=new gs(this);return i.insert(e,n,a),i}before(e){let n=this.#e.indexOf(e)-1;if(!(n<0))return this.entryAt(n)}setBefore(e,n,a){let i=this.#e.indexOf(e);return i===-1?this:this.insert(i,n,a)}after(e){let n=this.#e.indexOf(e);if(n=n===-1||n===this.size-1?-1:n+1,n!==-1)return this.entryAt(n)}setAfter(e,n,a){let i=this.#e.indexOf(e);return i===-1?this:this.insert(i+1,n,a)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return this.#e=[],super.clear()}delete(e){let n=super.delete(e);return n&&this.#e.splice(this.#e.indexOf(e),1),n}deleteAt(e){let n=this.keyAt(e);return n!==void 0?this.delete(n):!1}at(e){let n=bm(this.#e,e);if(n!==void 0)return this.get(n)}entryAt(e){let n=bm(this.#e,e);if(n!==void 0)return[n,this.get(n)]}indexOf(e){return this.#e.indexOf(e)}keyAt(e){return bm(this.#e,e)}from(e,n){let a=this.indexOf(e);if(a===-1)return;let i=a+n;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.at(i)}keyFrom(e,n){let a=this.indexOf(e);if(a===-1)return;let i=a+n;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.keyAt(i)}find(e,n){let a=0;for(let i of this){if(Reflect.apply(e,n,[i,a,this]))return i;a++}}findIndex(e,n){let a=0;for(let i of this){if(Reflect.apply(e,n,[i,a,this]))return a;a++}return-1}filter(e,n){let a=[],i=0;for(let r of this)Reflect.apply(e,n,[r,i,this])&&a.push(r),i++;return new gs(a)}map(e,n){let a=[],i=0;for(let r of this)a.push([r[0],Reflect.apply(e,n,[r,i,this])]),i++;return new gs(a)}reduce(...e){let[n,a]=e,i=0,r=a??this.at(0);for(let s of this)i===0&&e.length===1?r=s:r=Reflect.apply(n,this,[r,s,i,this]),i++;return r}reduceRight(...e){let[n,a]=e,i=a??this.at(-1);for(let r=this.size-1;r>=0;r--){let s=this.at(r);r===this.size-1&&e.length===1?i=s:i=Reflect.apply(n,this,[i,s,r,this])}return i}toSorted(e){let n=[...this.entries()].sort(e);return new gs(n)}toReversed(){let e=new gs;for(let n=this.size-1;n>=0;n--){let a=this.keyAt(n),i=this.get(a);e.set(a,i)}return e}toSpliced(...e){let n=[...this.entries()];return n.splice(...e),new gs(n)}slice(e,n){let a=new gs,i=this.size-1;if(e===void 0)return a;e<0&&(e=e+this.size),n!==void 0&&n>0&&(i=n-1);for(let r=e;r<=i;r++){let s=this.keyAt(r),o=this.get(s);a.set(s,o)}return a}every(e,n){let a=0;for(let i of this){if(!Reflect.apply(e,n,[i,a,this]))return!1;a++}return!0}some(e,n){let a=0;for(let i of this){if(Reflect.apply(e,n,[i,a,this]))return!0;a++}return!1}};function bm(t,e){if("at"in Array.prototype)return Array.prototype.at.call(t,e);let n=CL(t,e);return n===-1?void 0:t[n]}An(bm,"at");function CL(t,e){let n=t.length,a=oy(e),i=a>=0?a:n+a;return i<0||i>=n?-1:i}An(CL,"toSafeIndex");function oy(t){return t!==t||t===0?0:Math.trunc(t)}An(oy,"toSafeInteger");function tN(t){let e=t+"CollectionProvider",[n,a]=Pa(e),[i,r]=n(e,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new ry,setItemMap:An(()=>{},"setItemMap")}),s=An(({state:S,...y})=>S?(0,oo.jsx)(l,{...y,state:S}):(0,oo.jsx)(o,{...y}),"CollectionProvider");s.displayName=e;let o=An(S=>{let y=m();return(0,oo.jsx)(l,{...S,state:y})},"CollectionInit");o.displayName=e+"Init";let l=An(S=>{let{scope:y,children:w,state:C}=S,L=va.useRef(null),[v,I]=va.useState(null),A=Sn(L,I),[P,k]=C;return va.useEffect(()=>{if(!v)return;let z=LL(()=>{});return z.observe(v,{childList:!0,subtree:!0}),()=>{z.disconnect()}},[v]),(0,oo.jsx)(i,{scope:y,itemMap:P,setItemMap:k,collectionRef:A,collectionRefObject:L,collectionElement:v,children:w})},"CollectionProviderImpl");l.displayName=e+"Impl";let u=t+"CollectionSlot",d=Gi(u),f=va.forwardRef((S,y)=>{let{scope:w,children:C}=S,L=r(u,w),v=Sn(y,L.collectionRef);return(0,oo.jsx)(d,{ref:v,children:C})});f.displayName=u;let c=t+"CollectionItemSlot",p="data-radix-collection-item",g=Gi(c),_=va.forwardRef((S,y)=>{let{scope:w,children:C,...L}=S,v=va.useRef(null),[I,A]=va.useState(null),P=Sn(y,v,A),k=r(c,w),{setItemMap:z}=k,R=va.useRef(L);bL(R.current,L)||(R.current=L);let U=R.current;return va.useEffect(()=>{let V=U;return z(H=>I?H.has(I)?H.set(I,{...V,element:I}).toSorted(sy):(H.set(I,{...V,element:I}),H.toSorted(sy)):H),()=>{z(H=>!I||!H.has(I)?H:(H.delete(I),new ry(H)))}},[I,U,z]),(0,oo.jsx)(g,{[p]:"",ref:P,children:C})});_.displayName=c;function m(){return va.useState(new ry)}An(m,"useInitCollection");function h(S){let{itemMap:y}=r(t+"CollectionConsumer",S);return y}return An(h,"useCollection"),[{Provider:s,Slot:f,ItemSlot:_},{createCollectionScope:a,useCollection:h,useInitCollection:m}]}An(tN,"createCollection");function bL(t,e){if(t===e)return!0;if(typeof t!="object"||typeof e!="object"||t==null||e==null)return!1;let n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(let i of n)if(!Object.prototype.hasOwnProperty.call(e,i)||t[i]!==e[i])return!1;return!0}An(bL,"shallowEqual");function IL(t,e){return!!(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING)}An(IL,"isElementPreceding");function sy(t,e){return!t[1].element||!e[1].element?0:IL(t[1].element,e[1].element)?-1:1}An(sy,"sortByDocumentPosition");function LL(t){return new MutationObserver(n=>{for(let a of n)if(a.type==="childList"){t();return}})}An(LL,"getChildListObserver");var Xt=ve(xt(),1),nN=Object.defineProperty,mt=(t,e)=>nN(t,"name",{value:e,configurable:!0}),EL={Vertical:"vertical",Horizontal:"horizontal"},aN={LTR:"ltr",RTL:"rtl"},AL=["PageUp","PageDown"],RL=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],PL={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},xd="Slider",[uy,iN,rN]=md(xd),[cy,c5]=Pa(xd,[rN]),[sN,vd]=cy(xd),DL=vt.forwardRef(mt(function(e,n){let{name:a,min:i=0,max:r=100,step:s=1,orientation:o=EL.Horizontal,disabled:l=!1,minStepsBetweenThumbs:u=0,preserveThumbOrder:d=!1,defaultValue:f=[i],value:c,onValueChange:p=mt(()=>{},"onValueChange"),onValueCommit:g=mt(()=>{},"onValueCommit"),inverted:_=!1,form:m,...h}=e,x=vt.useRef(new Set),S=vt.useRef(0),y=vt.useRef(!1),C=o===EL.Horizontal?oN:lN,[L,v]=vt.useState(null),I=Sn(n,v),[A=[],P]=ro({prop:c,defaultProp:f,onChange:mt(j=>{[...x.current][S.current]?.focus({preventScroll:!0,focusVisible:y.current}),y.current=!1,p(j)},"onChange")}),k=vt.useRef(A),z=vt.useRef(A);vt.useEffect(()=>{let j=m?L?.ownerDocument.getElementById(m):L?.closest("form");if(j instanceof HTMLFormElement){let X=mt(()=>P(z.current),"reset");return j.addEventListener("reset",X),()=>j.removeEventListener("reset",X)}},[L,m,P]);function R(j){let X=WL(A,j);H(j,X)}mt(R,"handleSlideStart");function U(j){H(j,S.current)}mt(U,"handleSlideMove");function V(){String(A)!==String(k.current)&&g(A)}mt(V,"handleSlideEnd");function H(j,X,{commit:O}={commit:!1}){let te=fy(s),Te=gd(Math.round((j-i)/s)*s+i,te),ye=hd(Te,[i,r]);P((qe=[])=>{let ke=u*s,ze=d?hd(ye,[qe[X-1]===void 0?i:qe[X-1]+ke,qe[X+1]===void 0?r:qe[X+1]-ke]):ye,K=VL(qe,ze,X);if(YL(K,ke)){S.current=d?X:K.indexOf(ze);let Q=String(K)!==String(qe);return Q&&O&&g(K),Q?K:qe}else return qe})}return mt(H,"updateValues"),(0,Xt.jsx)(sN,{scope:e.__scopeSlider,name:a,disabled:l,min:i,max:r,valueIndexToChangeRef:S,thumbs:x.current,values:A,orientation:o,form:m,children:(0,Xt.jsx)(uy.Provider,{scope:e.__scopeSlider,children:(0,Xt.jsx)(uy.Slot,{scope:e.__scopeSlider,children:(0,Xt.jsx)(C,{"aria-disabled":l,"data-disabled":l?"":void 0,...h,ref:I,onPointerDown:_n(h.onPointerDown,()=>{l||(k.current=A,y.current=!1)}),min:i,max:r,inverted:_,onSlideStart:l?void 0:R,onSlideMove:l?void 0:U,onSlideEnd:l?void 0:V,onHomeKeyDown:()=>{l||(y.current=!0,H(i,0,{commit:!0}))},onEndKeyDown:()=>{l||(y.current=!0,H(r,A.length-1,{commit:!0}))},onStepKeyDown:({event:j,direction:X})=>{if(!l){y.current=!0;let Te=AL.includes(j.key)||j.shiftKey&&RL.includes(j.key)?10:1,ye=S.current,qe=A[ye],ke=KL(qe,{min:i,step:s,direction:X,multiplier:Te});H(ke,ye,{commit:!0})}}})})})})},"Slider")),[FL,kL]=cy(xd,{startEdge:"left",endEdge:"right",size:"width",direction:1}),oN=vt.forwardRef(mt(function(e,n){let{min:a,max:i,dir:r,inverted:s,onSlideStart:o,onSlideMove:l,onSlideEnd:u,onStepKeyDown:d,...f}=e,[c,p]=vt.useState(null),g=Sn(n,p),_=vt.useRef(void 0),m=so(r),h=m===aN.LTR,x=h&&!s||!h&&s;function S(y){let w=_.current||c.getBoundingClientRect(),C=[0,w.width],v=Im(C,x?[a,i]:[i,a]);return _.current=w,v(y-w.left)}return mt(S,"getValueFromPointer"),(0,Xt.jsx)(FL,{scope:e.__scopeSlider,startEdge:x?"left":"right",endEdge:x?"right":"left",direction:x?1:-1,size:"width",children:(0,Xt.jsx)(NL,{dir:m,"data-orientation":"horizontal",...f,ref:g,style:{...f.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:y=>{let w=S(y.clientX);o?.(w)},onSlideMove:y=>{let w=S(y.clientX);l?.(w)},onSlideEnd:()=>{_.current=void 0,u?.()},onStepKeyDown:y=>{let C=PL[x?"from-left":"from-right"].includes(y.key);d?.({event:y,direction:C?-1:1})}})})},"SliderHorizontal")),lN=vt.forwardRef(mt(function(e,n){let{min:a,max:i,inverted:r,onSlideStart:s,onSlideMove:o,onSlideEnd:l,onStepKeyDown:u,...d}=e,f=vt.useRef(null),c=Sn(n,f),p=vt.useRef(void 0),g=!r;function _(m){let h=p.current||f.current.getBoundingClientRect(),x=[0,h.height],y=Im(x,g?[i,a]:[a,i]);return p.current=h,y(m-h.top)}return mt(_,"getValueFromPointer"),(0,Xt.jsx)(FL,{scope:e.__scopeSlider,startEdge:g?"bottom":"top",endEdge:g?"top":"bottom",size:"height",direction:g?1:-1,children:(0,Xt.jsx)(NL,{"data-orientation":"vertical",...d,ref:c,style:{...d.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:m=>{let h=_(m.clientY);s?.(h)},onSlideMove:m=>{let h=_(m.clientY);o?.(h)},onSlideEnd:()=>{p.current=void 0,l?.()},onStepKeyDown:m=>{let x=PL[g?"from-bottom":"from-top"].includes(m.key);u?.({event:m,direction:x?-1:1})}})})},"SliderVertical")),NL=vt.forwardRef(mt(function(e,n){let{__scopeSlider:a,onSlideStart:i,onSlideMove:r,onSlideEnd:s,onHomeKeyDown:o,onEndKeyDown:l,onStepKeyDown:u,...d}=e,f=vd(xd,a);return(0,Xt.jsx)(Tn.span,{...d,ref:n,onKeyDown:_n(e.onKeyDown,c=>{c.key==="Home"?(o(c),c.preventDefault()):c.key==="End"?(l(c),c.preventDefault()):AL.concat(RL).includes(c.key)&&(u(c),c.preventDefault())}),onPointerDown:_n(e.onPointerDown,c=>{let p=c.target;p.setPointerCapture(c.pointerId),c.preventDefault(),f.thumbs.has(p)?p.focus({preventScroll:!0,focusVisible:!1}):i(c)}),onPointerMove:_n(e.onPointerMove,c=>{c.target.hasPointerCapture(c.pointerId)&&r(c)}),onPointerUp:_n(e.onPointerUp,c=>{let p=c.target;p.hasPointerCapture(c.pointerId)&&(p.releasePointerCapture(c.pointerId),s(c))})})},"SliderImpl")),uN="SliderTrack",UL=vt.forwardRef(mt(function(e,n){let{__scopeSlider:a,...i}=e,r=vd(uN,a);return(0,Xt.jsx)(Tn.span,{"data-disabled":r.disabled?"":void 0,"data-orientation":r.orientation,...i,ref:n})},"SliderTrack")),TL="SliderRange",BL=vt.forwardRef(mt(function(e,n){let{__scopeSlider:a,...i}=e,r=vd(TL,a),s=kL(TL,a),o=vt.useRef(null),l=Sn(n,o),u=r.values.length,d=r.values.map(p=>dy(p,r.min,r.max)),f=u>1?Math.min(...d):0,c=100-Math.max(...d);return(0,Xt.jsx)(Tn.span,{"data-orientation":r.orientation,"data-disabled":r.disabled?"":void 0,...i,ref:l,style:{...e.style,[s.startEdge]:f+"%",[s.endEdge]:c+"%"}})},"SliderRange")),cN="SliderThumb",[dN,OL]=cy(cN),fN="SliderThumbProvider";function zL(t){let{__scopeSlider:e,name:n,children:a,internal_do_not_use_render:i}=t,r=vd(fN,e),s=iN(e),[o,l]=vt.useState(null),u=vt.useMemo(()=>o?s().findIndex(m=>m.ref.current===o):-1,[s,o]),d=ay(o),f=o?!!r.form||!!o.closest("form"):!0,c=r.values[u],p=n??(r.name?r.name+(r.values.length>1?"[]":""):void 0),g=c===void 0?0:dy(c,r.min,r.max);vt.useEffect(()=>{if(o)return r.thumbs.add(o),()=>{r.thumbs.delete(o)}},[o,r.thumbs]);let _={value:c,name:p,form:r.form,isFormControl:f,index:u,thumb:o,onThumbChange:l,percent:g,size:d};return(0,Xt.jsx)(dN,{scope:e,..._,children:ZL(i)?i(_):a})}mt(zL,"SliderThumbProvider");var ly="SliderThumbTrigger",hN=vt.forwardRef(mt(function(e,n){let{__scopeSlider:a,...i}=e,r=vd(ly,a),s=kL(ly,a),{index:o,value:l,percent:u,size:d,onThumbChange:f}=OL(ly,a),c=Sn(n,f),p=GL(o,r.values.length),g=d?.[s.size],_=g?qL(g,u,s.direction):0;return(0,Xt.jsx)("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[s.startEdge]:`calc(${u}% + ${_}px)`},children:(0,Xt.jsx)(uy.ItemSlot,{scope:a,children:(0,Xt.jsx)(Tn.span,{role:"slider","aria-label":e["aria-label"]||p,"aria-valuemin":r.min,"aria-valuenow":l,"aria-valuemax":r.max,"aria-orientation":r.orientation,"data-orientation":r.orientation,"data-disabled":r.disabled?"":void 0,tabIndex:r.disabled?void 0:0,...i,ref:c,style:l===void 0?{display:"none"}:e.style,onFocus:_n(e.onFocus,()=>{r.valueIndexToChangeRef.current=o})})})})},"SliderThumbTrigger")),HL=vt.forwardRef(mt(function(e,n){let{__scopeSlider:a,name:i,...r}=e;return(0,Xt.jsx)(zL,{__scopeSlider:a,name:i,internal_do_not_use_render:({index:s,isFormControl:o})=>(0,Xt.jsxs)(Xt.Fragment,{children:[(0,Xt.jsx)(hN,{...r,ref:n,__scopeSlider:a}),o?(0,Xt.jsx)(mN,{__scopeSlider:a},s):null]})})},"SliderThumb")),pN="SliderBubbleInput",mN=vt.forwardRef(mt(function({__scopeSlider:e,...n},a){let{value:i,name:r,form:s}=OL(pN,e),o=vt.useRef(null),l=Sn(o,a),u=ny(i);return vt.useEffect(()=>{let d=o.current;if(!d)return;let f=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(f,"value").set;if(u!==i&&p){let g=new Event("input",{bubbles:!0});p.call(d,i),d.dispatchEvent(g)}},[u,i]),(0,Xt.jsx)(Tn.input,{style:{display:"none"},name:r,form:s,...n,ref:l,defaultValue:i})},"SliderBubbleInput"));function VL(t=[],e,n){let a=[...t];return a[n]=e,a.sort((i,r)=>i-r)}mt(VL,"getNextSortedValues");function dy(t,e,n){let r=100/(n-e)*(t-e);return hd(r,[0,100])}mt(dy,"convertValueToPercentage");function GL(t,e){return e>2?`Value ${t+1} of ${e}`:e===2?["Minimum","Maximum"][t]:void 0}mt(GL,"getLabel");function WL(t,e){if(t.length===1)return 0;let n=t.map(i=>Math.abs(i-e)),a=Math.min(...n);return n.indexOf(a)}mt(WL,"getClosestValueIndex");function qL(t,e,n){let a=t/2,r=Im([0,50],[0,a]);return(a-r(e)*n)*n}mt(qL,"getThumbInBoundsOffset");function XL(t){return t.slice(0,-1).map((e,n)=>t[n+1]-e)}mt(XL,"getStepsBetweenValues");function YL(t,e){if(e>0){let n=XL(t);return Math.min(...n)>=e}return!0}mt(YL,"hasMinStepsBetweenValues");function Im(t,e){return n=>{if(t[0]===t[1]||e[0]===e[1])return e[0];let a=(e[1]-e[0])/(t[1]-t[0]);return e[0]+a*(n-t[0])}}mt(Im,"linearScale");function fy(t){if(!Number.isFinite(t))return 0;let e=t.toString();if(e.includes("e")){let[a,i]=e.split("e"),r=a.split(".")[1]||"",s=Number(i);return Math.max(0,r.length-s)}let n=e.split(".")[1];return n?n.length:0}mt(fy,"getDecimalCount");function gd(t,e){let n=Math.pow(10,e);return Math.round(t*n)/n}mt(gd,"roundValue");function KL(t,{min:e,step:n,direction:a,multiplier:i}){let r=fy(n),s=(t-e)/n,o=Math.round(s),l=gd(o*n+e,r)===gd(t,r),u;return l?u=o+i*a:a>0?u=Math.ceil(s):u=Math.floor(s),gd(u*n+e,r)}mt(KL,"getNextStepValue");function ZL(t){return typeof t=="function"}mt(ZL,"isFunction");function jL(t){var e,n,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=jL(t[e]))&&(a&&(a+=" "),a+=n)}else for(n in t)t[n]&&(a&&(a+=" "),a+=n);return a}function Lm(){for(var t,e,n=0,a="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=jL(t))&&(a&&(a+=" "),a+=e);return a}var xN=(t,e)=>{let n=new Array(t.length+e.length);for(let a=0;a<t.length;a++)n[a]=t[a];for(let a=0;a<e.length;a++)n[t.length+a]=e[a];return n},vN=(t,e)=>({classGroupId:t,validator:e}),nE=(t=new Map,e=null,n)=>({nextPart:t,validators:e,classGroupId:n});var $L=[],yN="arbitrary..",_N=t=>{let e=MN(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:a}=t;return{getClassGroupId:s=>{if(s.startsWith("[")&&s.endsWith("]"))return SN(s);let o=s.split("-"),l=o[0]===""&&o.length>1?1:0;return aE(o,l,e)},getConflictingClassGroupIds:(s,o)=>{if(o){let l=a[s],u=n[s];return l?u?xN(u,l):l:u||$L}return n[s]||$L}}},aE=(t,e,n)=>{if(t.length-e===0)return n.classGroupId;let i=t[e],r=n.nextPart.get(i);if(r){let u=aE(t,e+1,r);if(u)return u}let s=n.validators;if(s===null)return;let o=e===0?t.join("-"):t.slice(e).join("-"),l=s.length;for(let u=0;u<l;u++){let d=s[u];if(d.validator(o))return d.classGroupId}},SN=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{let e=t.slice(1,-1),n=e.indexOf(":"),a=e.slice(0,n);return a?yN+a:void 0})(),MN=t=>{let{theme:e,classGroups:n}=t;return wN(n,e)},wN=(t,e)=>{let n=nE();for(let a in t){let i=t[a];py(i,n,a,e)}return n},py=(t,e,n,a)=>{let i=t.length;for(let r=0;r<i;r++){let s=t[r];CN(s,e,n,a)}},CN=(t,e,n,a)=>{if(typeof t=="string"){bN(t,e,n);return}if(typeof t=="function"){IN(t,e,n,a);return}LN(t,e,n,a)},bN=(t,e,n)=>{let a=t===""?e:iE(e,t);a.classGroupId=n},IN=(t,e,n,a)=>{if(EN(t)){py(t(a),e,n,a);return}e.validators===null&&(e.validators=[]),e.validators.push(vN(n,t))},LN=(t,e,n,a)=>{let i=Object.entries(t),r=i.length;for(let s=0;s<r;s++){let[o,l]=i[s];py(l,iE(e,o),n,a)}},iE=(t,e)=>{let n=t,a=e.split("-"),i=a.length;for(let r=0;r<i;r++){let s=a[r],o=n.nextPart.get(s);o||(o=nE(),n.nextPart.set(s,o)),n=o}return n},EN=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,TN=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),a=Object.create(null),i=(r,s)=>{n[r]=s,e++,e>t&&(e=0,a=n,n=Object.create(null))};return{get(r){let s=n[r];if(s!==void 0)return s;if((s=a[r])!==void 0)return i(r,s),s},set(r,s){r in n?n[r]=s:i(r,s)}}};var AN=[],JL=(t,e,n,a,i)=>({modifiers:t,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:a,isExternal:i}),RN=t=>{let{prefix:e,experimentalParseClassName:n}=t,a=i=>{let r=[],s=0,o=0,l=0,u,d=i.length;for(let _=0;_<d;_++){let m=i[_];if(s===0&&o===0){if(m===":"){r.push(i.slice(l,_)),l=_+1;continue}if(m==="/"){u=_;continue}}m==="["?s++:m==="]"?s--:m==="("?o++:m===")"&&o--}let f=r.length===0?i:i.slice(l),c=f,p=!1;f.endsWith("!")?(c=f.slice(0,-1),p=!0):f.startsWith("!")&&(c=f.slice(1),p=!0);let g=u&&u>l?u-l:void 0;return JL(r,p,c,g)};if(e){let i=e+":",r=a;a=s=>s.startsWith(i)?r(s.slice(i.length)):JL(AN,!1,s,void 0,!0)}if(n){let i=a;a=r=>n({className:r,parseClassName:i})}return a},PN=t=>{let e=new Map;return t.orderSensitiveModifiers.forEach((n,a)=>{e.set(n,1e6+a)}),n=>{let a=[],i=[];for(let r=0;r<n.length;r++){let s=n[r],o=s[0]==="[",l=e.has(s);o||l?(i.length>0&&(i.sort(),a.push(...i),i=[]),a.push(s)):i.push(s)}return i.length>0&&(i.sort(),a.push(...i)),a}},DN=t=>({cache:TN(t.cacheSize),parseClassName:RN(t),sortModifiers:PN(t),postfixLookupClassGroupIds:FN(t),..._N(t)}),FN=t=>{let e=Object.create(null),n=t.postfixLookupClassGroups;if(n)for(let a=0;a<n.length;a++)e[n[a]]=!0;return e},kN=/\s+/,NN=(t,e)=>{let{parseClassName:n,getClassGroupId:a,getConflictingClassGroupIds:i,sortModifiers:r,postfixLookupClassGroupIds:s}=e,o=[],l=t.trim().split(kN),u="";for(let d=l.length-1;d>=0;d-=1){let f=l[d],{isExternal:c,modifiers:p,hasImportantModifier:g,baseClassName:_,maybePostfixModifierPosition:m}=n(f);if(c){u=f+(u.length>0?" "+u:u);continue}let h=!!m,x;if(h){let L=_.substring(0,m);x=a(L);let v=x&&s[x]?a(_):void 0;v&&v!==x&&(x=v,h=!1)}else x=a(_);if(!x){if(!h){u=f+(u.length>0?" "+u:u);continue}if(x=a(_),!x){u=f+(u.length>0?" "+u:u);continue}h=!1}let S=p.length===0?"":p.length===1?p[0]:r(p).join(":"),y=g?S+"!":S,w=y+x;if(o.indexOf(w)>-1)continue;o.push(w);let C=i(x,h);for(let L=0;L<C.length;++L){let v=C[L];o.push(y+v)}u=f+(u.length>0?" "+u:u)}return u},UN=(...t)=>{let e=0,n,a,i="";for(;e<t.length;)(n=t[e++])&&(a=rE(n))&&(i&&(i+=" "),i+=a);return i},rE=t=>{if(typeof t=="string")return t;let e,n="";for(let a=0;a<t.length;a++)t[a]&&(e=rE(t[a]))&&(n&&(n+=" "),n+=e);return n},BN=(t,...e)=>{let n,a,i,r,s=l=>{let u=e.reduce((d,f)=>f(d),t());return n=DN(u),a=n.cache.get,i=n.cache.set,r=o,o(l)},o=l=>{let u=a(l);if(u)return u;let d=NN(l,n);return i(l,d),d};return r=s,(...l)=>r(UN(...l))},ON=[],Mn=t=>{let e=n=>n[t]||ON;return e.isThemeGetter=!0,e.themeKey=t,e},sE=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,oE=/^\((?:(\w[\w-]*):)?(.+)\)$/i,zN=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,HN=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,VN=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,GN=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,WN=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,qN=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,xs=t=>zN.test(t),tt=t=>!!t&&!Number.isNaN(Number(t)),Wi=t=>!!t&&Number.isInteger(Number(t)),hy=t=>t.endsWith("%")&&tt(t.slice(0,-1)),gr=t=>HN.test(t),lE=()=>!0,XN=t=>VN.test(t)&&!GN.test(t),my=()=>!1,YN=t=>WN.test(t),KN=t=>qN.test(t),ZN=t=>!Me(t)&&!be(t),jN=t=>t.startsWith("@container")&&(t[10]==="/"&&t[11]!==void 0||t[11]==="s"&&t[16]!==void 0&&t.startsWith("-size/",10)||t[11]==="n"&&t[18]!==void 0&&t.startsWith("-normal/",10)),$N=t=>vs(t,dE,my),Me=t=>sE.test(t),lo=t=>vs(t,fE,XN),QL=t=>vs(t,rU,tt),JN=t=>vs(t,pE,lE),QN=t=>vs(t,hE,my),eE=t=>vs(t,uE,my),eU=t=>vs(t,cE,KN),Em=t=>vs(t,mE,YN),be=t=>oE.test(t),yd=t=>uo(t,fE),tU=t=>uo(t,hE),tE=t=>uo(t,uE),nU=t=>uo(t,dE),aU=t=>uo(t,cE),Tm=t=>uo(t,mE,!0),iU=t=>uo(t,pE,!0),vs=(t,e,n)=>{let a=sE.exec(t);return a?a[1]?e(a[1]):n(a[2]):!1},uo=(t,e,n=!1)=>{let a=oE.exec(t);return a?a[1]?e(a[1]):n:!1},uE=t=>t==="position"||t==="percentage",cE=t=>t==="image"||t==="url",dE=t=>t==="length"||t==="size"||t==="bg-size",fE=t=>t==="length",rU=t=>t==="number",hE=t=>t==="family-name",pE=t=>t==="number"||t==="weight",mE=t=>t==="shadow";var sU=()=>{let t=Mn("color"),e=Mn("font"),n=Mn("text"),a=Mn("font-weight"),i=Mn("tracking"),r=Mn("leading"),s=Mn("breakpoint"),o=Mn("container"),l=Mn("spacing"),u=Mn("radius"),d=Mn("shadow"),f=Mn("inset-shadow"),c=Mn("text-shadow"),p=Mn("drop-shadow"),g=Mn("blur"),_=Mn("perspective"),m=Mn("aspect"),h=Mn("ease"),x=Mn("animate"),S=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...y(),be,Me],C=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto","contain","none"],v=()=>[be,Me,l],I=()=>[xs,"full","auto",...v()],A=()=>[Wi,"none","subgrid",be,Me],P=()=>["auto",{span:["full",Wi,be,Me]},Wi,be,Me],k=()=>[Wi,"auto",be,Me],z=()=>["auto","min","max","fr",be,Me],R=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],U=()=>["start","end","center","stretch","center-safe","end-safe"],V=()=>["auto",...v()],H=()=>[xs,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...v()],j=()=>[o,xs,"screen","full","dvw","lvw","svw","min","max","fit",...v()],X=()=>[xs,"screen","full","lh","dvh","lvh","svh","min","max","fit",...v()],O=()=>[t,be,Me],te=()=>[...y(),tE,eE,{position:[be,Me]}],Te=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ye=()=>["auto","cover","contain",nU,$N,{size:[be,Me]}],qe=()=>[hy,yd,lo],ke=()=>["","none","full",u,be,Me],ze=()=>["",tt,yd,lo],K=()=>["solid","dashed","dotted","double"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],se=()=>[tt,hy,tE,eE],Xe=()=>["","none",g,be,Me],ge=()=>["none",tt,be,Me],Ke=()=>["none",tt,be,Me],Yt=()=>[tt,be,Me],Ze=()=>[xs,"full",...v()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[gr],breakpoint:[gr],color:[lE],container:[gr],"drop-shadow":[gr],ease:["in","out","in-out"],font:[ZN],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[gr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[gr],shadow:[gr],spacing:["px",tt],text:[gr],"text-shadow":[gr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",xs,Me,be,m]}],container:["container"],"container-type":[{"@container":["","normal","size",be,Me]}],"container-named":[jN],columns:[{columns:[tt,"auto",Me,be,o]}],"break-after":[{"break-after":S()}],"break-before":[{"break-before":S()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:I()}],"inset-x":[{"inset-x":I()}],"inset-y":[{"inset-y":I()}],start:[{"inset-s":I(),start:I()}],end:[{"inset-e":I(),end:I()}],"inset-bs":[{"inset-bs":I()}],"inset-be":[{"inset-be":I()}],top:[{top:I()}],right:[{right:I()}],bottom:[{bottom:I()}],left:[{left:I()}],visibility:["visible","invisible","collapse"],z:[{z:[Wi,"auto",be,Me]}],basis:[{basis:[xs,"full","auto",o,...v()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[tt,xs,"auto","initial","none",Me]}],grow:[{grow:["",tt,be,Me]}],shrink:[{shrink:["",tt,be,Me]}],order:[{order:[Wi,"first","last","none",be,Me]}],"grid-cols":[{"grid-cols":A()}],"col-start-end":[{col:P()}],"col-start":[{"col-start":k()}],"col-end":[{"col-end":k()}],"grid-rows":[{"grid-rows":A()}],"row-start-end":[{row:P()}],"row-start":[{"row-start":k()}],"row-end":[{"row-end":k()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":z()}],"auto-rows":[{"auto-rows":z()}],gap:[{gap:v()}],"gap-x":[{"gap-x":v()}],"gap-y":[{"gap-y":v()}],"justify-content":[{justify:[...R(),"normal"]}],"justify-items":[{"justify-items":[...U(),"normal"]}],"justify-self":[{"justify-self":["auto",...U()]}],"align-content":[{content:["normal",...R()]}],"align-items":[{items:[...U(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...U(),{baseline:["","last"]}]}],"place-content":[{"place-content":R()}],"place-items":[{"place-items":[...U(),"baseline"]}],"place-self":[{"place-self":["auto",...U()]}],p:[{p:v()}],px:[{px:v()}],py:[{py:v()}],ps:[{ps:v()}],pe:[{pe:v()}],pbs:[{pbs:v()}],pbe:[{pbe:v()}],pt:[{pt:v()}],pr:[{pr:v()}],pb:[{pb:v()}],pl:[{pl:v()}],m:[{m:V()}],mx:[{mx:V()}],my:[{my:V()}],ms:[{ms:V()}],me:[{me:V()}],mbs:[{mbs:V()}],mbe:[{mbe:V()}],mt:[{mt:V()}],mr:[{mr:V()}],mb:[{mb:V()}],ml:[{ml:V()}],"space-x":[{"space-x":v()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":v()}],"space-y-reverse":["space-y-reverse"],size:[{size:H()}],"inline-size":[{inline:["auto",...j()]}],"min-inline-size":[{"min-inline":["auto",...j()]}],"max-inline-size":[{"max-inline":["none",...j()]}],"block-size":[{block:["auto",...X()]}],"min-block-size":[{"min-block":["auto",...X()]}],"max-block-size":[{"max-block":["none",...X()]}],w:[{w:[o,"screen",...H()]}],"min-w":[{"min-w":[o,"screen","none",...H()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[s]},...H()]}],h:[{h:["screen","lh",...H()]}],"min-h":[{"min-h":["screen","lh","none",...H()]}],"max-h":[{"max-h":["screen","lh","none",...H()]}],"font-size":[{text:["base",n,yd,lo]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,iU,JN]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",hy,Me]}],"font-family":[{font:[tU,QN,e]}],"font-features":[{"font-features":[Me]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,be,Me]}],"line-clamp":[{"line-clamp":[tt,"none",be,QL]}],leading:[{leading:["none",r,...v()]}],"list-image":[{"list-image":["none",be,Me]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",be,Me]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:O()}],"text-color":[{text:O()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...K(),"wavy"]}],"text-decoration-thickness":[{decoration:[tt,"from-font","auto",be,lo]}],"text-decoration-color":[{decoration:O()}],"underline-offset":[{"underline-offset":[tt,"auto",be,Me]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:v()}],"tab-size":[{tab:[Wi,be,Me]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",be,Me]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",be,Me]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:te()}],"bg-repeat":[{bg:Te()}],"bg-size":[{bg:ye()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Wi,be,Me],radial:["",be,Me],conic:["",Wi,be,Me]},aU,eU]}],"bg-color":[{bg:O()}],"gradient-from-pos":[{from:qe()}],"gradient-via-pos":[{via:qe()}],"gradient-to-pos":[{to:qe()}],"gradient-from":[{from:O()}],"gradient-via":[{via:O()}],"gradient-to":[{to:O()}],rounded:[{rounded:ke()}],"rounded-s":[{"rounded-s":ke()}],"rounded-e":[{"rounded-e":ke()}],"rounded-t":[{"rounded-t":ke()}],"rounded-r":[{"rounded-r":ke()}],"rounded-b":[{"rounded-b":ke()}],"rounded-l":[{"rounded-l":ke()}],"rounded-ss":[{"rounded-ss":ke()}],"rounded-se":[{"rounded-se":ke()}],"rounded-ee":[{"rounded-ee":ke()}],"rounded-es":[{"rounded-es":ke()}],"rounded-tl":[{"rounded-tl":ke()}],"rounded-tr":[{"rounded-tr":ke()}],"rounded-br":[{"rounded-br":ke()}],"rounded-bl":[{"rounded-bl":ke()}],"border-w":[{border:ze()}],"border-w-x":[{"border-x":ze()}],"border-w-y":[{"border-y":ze()}],"border-w-s":[{"border-s":ze()}],"border-w-e":[{"border-e":ze()}],"border-w-bs":[{"border-bs":ze()}],"border-w-be":[{"border-be":ze()}],"border-w-t":[{"border-t":ze()}],"border-w-r":[{"border-r":ze()}],"border-w-b":[{"border-b":ze()}],"border-w-l":[{"border-l":ze()}],"divide-x":[{"divide-x":ze()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ze()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...K(),"hidden","none"]}],"divide-style":[{divide:[...K(),"hidden","none"]}],"border-color":[{border:O()}],"border-color-x":[{"border-x":O()}],"border-color-y":[{"border-y":O()}],"border-color-s":[{"border-s":O()}],"border-color-e":[{"border-e":O()}],"border-color-bs":[{"border-bs":O()}],"border-color-be":[{"border-be":O()}],"border-color-t":[{"border-t":O()}],"border-color-r":[{"border-r":O()}],"border-color-b":[{"border-b":O()}],"border-color-l":[{"border-l":O()}],"divide-color":[{divide:O()}],"outline-style":[{outline:[...K(),"none","hidden"]}],"outline-offset":[{"outline-offset":[tt,be,Me]}],"outline-w":[{outline:["",tt,yd,lo]}],"outline-color":[{outline:O()}],shadow:[{shadow:["","inner","none",d,Tm,Em]}],"shadow-color":[{shadow:O()}],"inset-shadow":[{"inset-shadow":["none",f,Tm,Em]}],"inset-shadow-color":[{"inset-shadow":O()}],"ring-w":[{ring:ze()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:O()}],"ring-offset-w":[{"ring-offset":[tt,lo]}],"ring-offset-color":[{"ring-offset":O()}],"inset-ring-w":[{"inset-ring":ze()}],"inset-ring-color":[{"inset-ring":O()}],"text-shadow":[{"text-shadow":["none",c,Tm,Em]}],"text-shadow-color":[{"text-shadow":O()}],opacity:[{opacity:[tt,be,Me]}],"mix-blend":[{"mix-blend":[...Q(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Q()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[tt]}],"mask-image-linear-from-pos":[{"mask-linear-from":se()}],"mask-image-linear-to-pos":[{"mask-linear-to":se()}],"mask-image-linear-from-color":[{"mask-linear-from":O()}],"mask-image-linear-to-color":[{"mask-linear-to":O()}],"mask-image-t-from-pos":[{"mask-t-from":se()}],"mask-image-t-to-pos":[{"mask-t-to":se()}],"mask-image-t-from-color":[{"mask-t-from":O()}],"mask-image-t-to-color":[{"mask-t-to":O()}],"mask-image-r-from-pos":[{"mask-r-from":se()}],"mask-image-r-to-pos":[{"mask-r-to":se()}],"mask-image-r-from-color":[{"mask-r-from":O()}],"mask-image-r-to-color":[{"mask-r-to":O()}],"mask-image-b-from-pos":[{"mask-b-from":se()}],"mask-image-b-to-pos":[{"mask-b-to":se()}],"mask-image-b-from-color":[{"mask-b-from":O()}],"mask-image-b-to-color":[{"mask-b-to":O()}],"mask-image-l-from-pos":[{"mask-l-from":se()}],"mask-image-l-to-pos":[{"mask-l-to":se()}],"mask-image-l-from-color":[{"mask-l-from":O()}],"mask-image-l-to-color":[{"mask-l-to":O()}],"mask-image-x-from-pos":[{"mask-x-from":se()}],"mask-image-x-to-pos":[{"mask-x-to":se()}],"mask-image-x-from-color":[{"mask-x-from":O()}],"mask-image-x-to-color":[{"mask-x-to":O()}],"mask-image-y-from-pos":[{"mask-y-from":se()}],"mask-image-y-to-pos":[{"mask-y-to":se()}],"mask-image-y-from-color":[{"mask-y-from":O()}],"mask-image-y-to-color":[{"mask-y-to":O()}],"mask-image-radial":[{"mask-radial":[be,Me]}],"mask-image-radial-from-pos":[{"mask-radial-from":se()}],"mask-image-radial-to-pos":[{"mask-radial-to":se()}],"mask-image-radial-from-color":[{"mask-radial-from":O()}],"mask-image-radial-to-color":[{"mask-radial-to":O()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":y()}],"mask-image-conic-pos":[{"mask-conic":[tt]}],"mask-image-conic-from-pos":[{"mask-conic-from":se()}],"mask-image-conic-to-pos":[{"mask-conic-to":se()}],"mask-image-conic-from-color":[{"mask-conic-from":O()}],"mask-image-conic-to-color":[{"mask-conic-to":O()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:te()}],"mask-repeat":[{mask:Te()}],"mask-size":[{mask:ye()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",be,Me]}],filter:[{filter:["","none",be,Me]}],blur:[{blur:Xe()}],brightness:[{brightness:[tt,be,Me]}],contrast:[{contrast:[tt,be,Me]}],"drop-shadow":[{"drop-shadow":["","none",p,Tm,Em]}],"drop-shadow-color":[{"drop-shadow":O()}],grayscale:[{grayscale:["",tt,be,Me]}],"hue-rotate":[{"hue-rotate":[tt,be,Me]}],invert:[{invert:["",tt,be,Me]}],saturate:[{saturate:[tt,be,Me]}],sepia:[{sepia:["",tt,be,Me]}],"backdrop-filter":[{"backdrop-filter":["","none",be,Me]}],"backdrop-blur":[{"backdrop-blur":Xe()}],"backdrop-brightness":[{"backdrop-brightness":[tt,be,Me]}],"backdrop-contrast":[{"backdrop-contrast":[tt,be,Me]}],"backdrop-grayscale":[{"backdrop-grayscale":["",tt,be,Me]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[tt,be,Me]}],"backdrop-invert":[{"backdrop-invert":["",tt,be,Me]}],"backdrop-opacity":[{"backdrop-opacity":[tt,be,Me]}],"backdrop-saturate":[{"backdrop-saturate":[tt,be,Me]}],"backdrop-sepia":[{"backdrop-sepia":["",tt,be,Me]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":v()}],"border-spacing-x":[{"border-spacing-x":v()}],"border-spacing-y":[{"border-spacing-y":v()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",be,Me]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[tt,"initial",be,Me]}],ease:[{ease:["linear","initial",h,be,Me]}],delay:[{delay:[tt,be,Me]}],animate:[{animate:["none",x,be,Me]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[_,be,Me]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:ge()}],"rotate-x":[{"rotate-x":ge()}],"rotate-y":[{"rotate-y":ge()}],"rotate-z":[{"rotate-z":ge()}],scale:[{scale:Ke()}],"scale-x":[{"scale-x":Ke()}],"scale-y":[{"scale-y":Ke()}],"scale-z":[{"scale-z":Ke()}],"scale-3d":["scale-3d"],skew:[{skew:Yt()}],"skew-x":[{"skew-x":Yt()}],"skew-y":[{"skew-y":Yt()}],transform:[{transform:[be,Me,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ze()}],"translate-x":[{"translate-x":Ze()}],"translate-y":[{"translate-y":Ze()}],"translate-z":[{"translate-z":Ze()}],"translate-none":["translate-none"],zoom:[{zoom:[Wi,be,Me]}],accent:[{accent:O()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:O()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",be,Me]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scrollbar-thumb-color":[{"scrollbar-thumb":O()}],"scrollbar-track-color":[{"scrollbar-track":O()}],"scrollbar-gutter":[{"scrollbar-gutter":["auto","stable","both"]}],"scrollbar-w":[{scrollbar:["auto","thin","none"]}],"scroll-m":[{"scroll-m":v()}],"scroll-mx":[{"scroll-mx":v()}],"scroll-my":[{"scroll-my":v()}],"scroll-ms":[{"scroll-ms":v()}],"scroll-me":[{"scroll-me":v()}],"scroll-mbs":[{"scroll-mbs":v()}],"scroll-mbe":[{"scroll-mbe":v()}],"scroll-mt":[{"scroll-mt":v()}],"scroll-mr":[{"scroll-mr":v()}],"scroll-mb":[{"scroll-mb":v()}],"scroll-ml":[{"scroll-ml":v()}],"scroll-p":[{"scroll-p":v()}],"scroll-px":[{"scroll-px":v()}],"scroll-py":[{"scroll-py":v()}],"scroll-ps":[{"scroll-ps":v()}],"scroll-pe":[{"scroll-pe":v()}],"scroll-pbs":[{"scroll-pbs":v()}],"scroll-pbe":[{"scroll-pbe":v()}],"scroll-pt":[{"scroll-pt":v()}],"scroll-pr":[{"scroll-pr":v()}],"scroll-pb":[{"scroll-pb":v()}],"scroll-pl":[{"scroll-pl":v()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",be,Me]}],fill:[{fill:["none",...O()]}],"stroke-w":[{stroke:[tt,yd,lo,QL]}],stroke:[{stroke:["none",...O()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{"container-named":["container-type"],overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["start","end","right","left"],"inset-y":["inset-bs","inset-be","top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["ps","pe","pr","pl"],py:["pbs","pbe","pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["ms","me","mr","ml"],my:["mbs","mbe","mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-s","border-w-e","border-w-r","border-w-l"],"border-w-y":["border-w-bs","border-w-be","border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-s","border-color-e","border-color-r","border-color-l"],"border-color-y":["border-color-bs","border-color-be","border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-ms","scroll-me","scroll-mr","scroll-ml"],"scroll-my":["scroll-mbs","scroll-mbe","scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-ps","scroll-pe","scroll-pr","scroll-pl"],"scroll-py":["scroll-pbs","scroll-pbe","scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},postfixLookupClassGroups:["container-type"],orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}};var gE=BN(sU);function nn(...t){return gE(Lm(t))}var Kl=ve(xt()),_d=xE.forwardRef(({className:t,...e},n)=>(0,Kl.jsxs)(DL,{ref:n,className:nn("relative flex w-full touch-none select-none items-center",t),...e,children:[(0,Kl.jsx)(UL,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",children:(0,Kl.jsx)(BL,{className:"absolute h-full bg-primary"})}),(0,Kl.jsx)(HL,{className:"block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"})]}));_d.displayName="Slider";var _E=ve(et());var vE=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,yE=Lm,Am=(t,e)=>n=>{var a;if(e?.variants==null)return yE(t,n?.class,n?.className);let{variants:i,defaultVariants:r}=e,s=Object.keys(i).map(u=>{let d=n?.[u],f=r?.[u];if(d===null)return null;let c=vE(d)||vE(f);return i[u][c]}),o=n&&Object.entries(n).reduce((u,d)=>{let[f,c]=d;return c===void 0||(u[f]=c),u},{}),l=e==null||(a=e.compoundVariants)===null||a===void 0?void 0:a.reduce((u,d)=>{let{class:f,className:c,...p}=d;return Object.entries(p).every(g=>{let[_,m]=g;return Array.isArray(m)?m.includes({...r,...o}[_]):{...r,...o}[_]===m})?[...u,f,c]:u},[]);return yE(t,s,l,n?.class,n?.className)};var SE=ve(xt()),Rm=Am("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),co=_E.forwardRef(({className:t,variant:e,size:n,asChild:a=!1,...i},r)=>(0,SE.jsx)(a?hL:"button",{className:nn(Rm({variant:e,size:n,className:t})),ref:r,...i}));co.displayName="Button";var gy=ve(et());var yy=ve(xt()),xy=gy.forwardRef(({className:t,...e},n)=>(0,yy.jsx)("div",{ref:n,className:nn("rounded-xl border bg-card text-card-foreground shadow",t),...e}));xy.displayName="Card";var vy=gy.forwardRef(({className:t,...e},n)=>(0,yy.jsx)("div",{ref:n,className:nn("p-3",t),...e}));vy.displayName="CardContent";var EE=ve(et());var My=ve(et(),1);var Pm=ve(xt(),1),oU=Object.defineProperty,xr=(t,e)=>oU(t,"name",{value:e,configurable:!0}),ME="Progress",wy=100,[lU,E5]=Pa(ME),[uU,cU]=lU(ME),wE=My.forwardRef(xr(function(e,n){let{__scopeProgress:a,value:i=null,max:r,getValueLabel:s=bE,...o}=e;(r||r===0)&&!_y(r)&&console.error(IE(`${r}`,"Progress"));let l=_y(r)?r:wy;i!==null&&!Sy(i,l)&&console.error(LE(`${i}`,"Progress"));let u=Sy(i,l)?i:null,d=Sd(u)?s(u,l):void 0;return(0,Pm.jsx)(uU,{scope:a,value:u,max:l,children:(0,Pm.jsx)(Tn.div,{"aria-valuemax":l,"aria-valuemin":0,"aria-valuenow":Sd(u)?u:void 0,"aria-valuetext":d,role:"progressbar","data-state":Cy(u,l),"data-value":u??void 0,"data-max":l,...o,ref:n})})},"Progress")),dU="ProgressIndicator",CE=My.forwardRef(xr(function(e,n){let{__scopeProgress:a,...i}=e,r=cU(dU,a);return(0,Pm.jsx)(Tn.div,{"data-state":Cy(r.value,r.max),"data-value":r.value??void 0,"data-max":r.max,...i,ref:n})},"ProgressIndicator"));function bE(t,e){return`${Math.round(t/e*100)}%`}xr(bE,"defaultGetValueLabel");function Cy(t,e){return t==null?"indeterminate":t===e?"complete":"loading"}xr(Cy,"getProgressState");function Sd(t){return typeof t=="number"}xr(Sd,"isNumber");function _y(t){return Sd(t)&&!isNaN(t)&&t>0}xr(_y,"isValidMaxNumber");function Sy(t,e){return Sd(t)&&!isNaN(t)&&t<=e&&t>=0}xr(Sy,"isValidValueNumber");function IE(t,e){return`Invalid prop \`max\` of value \`${t}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${wy}\`.`}xr(IE,"getInvalidMaxError");function LE(t,e){return`Invalid prop \`value\` of value \`${t}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${wy} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}xr(LE,"getInvalidValueError");var by=ve(xt()),Iy=EE.forwardRef(({className:t,value:e,indicatorClassName:n,...a},i)=>(0,by.jsx)(wE,{ref:i,className:nn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",t),...a,children:(0,by.jsx)(CE,{className:nn("h-full w-full flex-1 bg-primary transition-all",n),style:{transform:`translateX(-${100-(e||0)}%)`}})}));Iy.displayName="Progress";var R5=ve(et());var AE=ve(xt()),hU=Am("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow",secondary:"border-transparent bg-secondary text-secondary-foreground",destructive:"border-transparent bg-destructive text-destructive-foreground shadow",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function TE({className:t,variant:e,...n}){return(0,AE.jsx)("div",{className:nn(hU({variant:e}),t),...n})}var UE=ve(et());var DE=ve(et(),1);var FE=ve(xt(),1),pU=Object.defineProperty,PE=(t,e)=>pU(t,"name",{value:e,configurable:!0}),Ly={Horizontal:"horizontal",Vertical:"vertical"},RE=Ly.Horizontal,mU=Object.values(Ly),kE=DE.forwardRef(PE(function(e,n){let{decorative:a,orientation:i=RE,...r}=e,s=NE(i)?i:RE,o=s===Ly.Vertical?s:void 0,l=a?{role:"none"}:{"aria-orientation":o,role:"separator"};return(0,FE.jsx)(Tn.div,{"data-orientation":s,...l,...r,ref:n})},"Separator"));function NE(t){return mU.includes(t)}PE(NE,"isValidOrientation");var BE=ve(xt()),Dm=UE.forwardRef(({className:t,orientation:e="horizontal",decorative:n=!0,...a},i)=>(0,BE.jsx)(kE,{ref:i,decorative:n,orientation:e,className:nn("shrink-0 bg-border",e==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",t),...a}));Dm.displayName="Separator";var Ye=ve(xt()),Ey="min(360px, 88vw)",xU=({children:t})=>(0,Ye.jsx)("p",{className:"mb-1 text-xs uppercase tracking-[0.16em] text-muted-foreground",children:t});function vU(){let t=In(i=>i.engine),e=In(i=>i.rev),n=In(i=>i.read),a=n.heat>.6?"Glowing":n.heat>.15?"Warming":"Cold";return(0,Ye.jsxs)("section",{className:"p-4",children:[(0,Ye.jsx)(xU,{children:"Engine speed"}),(0,Ye.jsxs)("div",{className:"flex items-baseline gap-2 tabular-nums",children:[(0,Ye.jsx)("span",{className:"text-5xl font-light leading-none",children:ot(n.rpm)}),(0,Ye.jsx)("small",{className:"text-xs uppercase tracking-widest text-muted-foreground",children:"rpm"})]}),(0,Ye.jsx)(_d,{className:"mt-5","aria-label":"Engine speed",min:t.idle,max:t.max,step:10,value:[e],onValueChange:([i])=>mc(i)}),(0,Ye.jsxs)("div",{className:"mt-2 flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground",children:[(0,Ye.jsx)("span",{children:"Idle"}),(0,Ye.jsx)("span",{children:"Redline"})]}),(0,Ye.jsx)("div",{className:"mt-4 grid grid-cols-3 gap-2",children:["Idle","Cruise","Max"].map((i,r)=>(0,Ye.jsx)(co,{variant:"outline",size:"sm",onClick:()=>mc(t.presets[r]),children:i},i))}),(0,Ye.jsx)("div",{className:"mt-4 grid grid-cols-3 gap-2",children:[[ot(n.temp),"Exhaust \xB0C"],[ot(n.spark),"Sparks / s"],[ot(n.piston,1),"Piston m/s"]].map(([i,r])=>(0,Ye.jsx)(xy,{children:(0,Ye.jsxs)(vy,{children:[(0,Ye.jsx)("b",{className:"block text-xl font-medium tabular-nums",children:i}),(0,Ye.jsx)("span",{className:"text-[10px] uppercase tracking-wide text-muted-foreground",children:r})]})},r))}),(0,Ye.jsxs)("div",{className:"mt-4 flex justify-between text-xs",children:[(0,Ye.jsx)("span",{className:"text-muted-foreground",children:"Exhaust heat"}),(0,Ye.jsx)("span",{children:a})]}),(0,Ye.jsx)(Iy,{className:"mt-2 h-1.5",value:Math.round(n.heat*100),indicatorClassName:"bg-gradient-to-r from-orange-900 via-orange-500 to-amber-200"})]})}function yU(){let t=In(a=>a.selected),e=In(a=>a.engine.note);if(In(a=>a.read),!t||!zs[t])return(0,Ye.jsx)("section",{className:"p-4",children:(0,Ye.jsxs)("p",{className:"text-sm leading-relaxed text-muted-foreground",children:[(0,Ye.jsx)("b",{className:"text-foreground",children:"Hover any component"})," to see its name, then click the label (or the part) to read about it here. Raise the revs to watch the exhaust heat up."]})});let n=zs[t];return(0,Ye.jsxs)("section",{className:"p-4",children:[(0,Ye.jsx)(TE,{variant:"outline",className:"border-red-500/60 uppercase tracking-widest text-red-400",children:n.tag}),(0,Ye.jsx)("h2",{className:"mb-2 mt-3 text-xl font-semibold tracking-tight",children:n.name}),(0,Ye.jsx)("p",{className:"mb-4 text-sm leading-relaxed text-muted-foreground",children:n.desc}),(0,Ye.jsx)("div",{className:"text-sm",children:n.specs.map(([a,i])=>(0,Ye.jsxs)("div",{className:"flex justify-between gap-3 border-t py-2",children:[(0,Ye.jsx)("span",{className:"text-muted-foreground",children:a}),(0,Ye.jsx)("b",{className:"text-right font-medium tabular-nums",children:typeof i=="function"?i():i})]},a))}),(0,Ye.jsxs)("div",{className:"mt-4 flex gap-2",children:[(0,Ye.jsx)(co,{size:"sm",className:"flex-1",onClick:()=>pc.onZoom(t),children:"Zoom to part"}),(0,Ye.jsx)(co,{size:"sm",variant:"secondary",className:"flex-1",onClick:()=>pc.onSelect(null),children:"Clear"})]}),(0,Ye.jsx)("p",{className:"mt-3 text-[11px] leading-snug text-muted-foreground/70",children:e})]})}function Ty(){let t=In(n=>n.panelOpen),e=In(n=>n.engine);return(0,Ye.jsxs)("aside",{id:"panel","aria-hidden":!t,className:"fixed bottom-0 right-0 top-12 z-20 overflow-y-auto border-l bg-background/95 backdrop-blur transition-transform duration-300 "+(t?"":"translate-x-full"),style:{width:Ey},children:[(0,Ye.jsxs)("header",{className:"px-4 pb-3 pt-4",children:[(0,Ye.jsx)("h1",{className:"text-sm font-semibold uppercase tracking-[0.16em]",children:e.brand}),(0,Ye.jsx)("p",{className:"mt-0.5 text-xs text-muted-foreground",children:e.sub})]}),(0,Ye.jsx)(Dm,{}),(0,Ye.jsx)(vU,{}),(0,Ye.jsx)(Dm,{}),(0,Ye.jsx)(yU,{})]})}var Oy=ve(et());var jl=ve(et(),1);var Rn=ve(et(),1);var Ay=ve(et(),1);var _U=Object.defineProperty,SU=(t,e)=>_U(t,"name",{value:e,configurable:!0}),MU=Ay[" useId ".trim().toString()]||(()=>{}),wU=0;function Md(t){let[e,n]=Ay.useState(MU());return Vi(()=>{t||n(a=>a??String(wU++))},[t]),t||(e?`radix-${e}`:"")}SU(Md,"useId");var Zl=ve(et(),1),CU=Object.defineProperty,bU=(t,e)=>CU(t,"name",{value:e,configurable:!0});function Ry(t){let e=Zl.useRef(t);return Zl.useEffect(()=>{e.current=t}),Zl.useMemo(()=>((...n)=>e.current?.(...n)),[])}bU(Ry,"useCallbackRef");var LU=ve(et(),1),Fm=ve(et(),1),IU=Object.defineProperty,Dy=(t,e)=>IU(t,"name",{value:e,configurable:!0}),Py=!1;function OE(){let[t,e]=Fm.useState(Py);return Fm.useEffect(()=>{Py||(Py=!0,e(!0))},[]),t}Dy(OE,"useIsHydrated");var zE=LU[" useSyncExternalStore ".trim().toString()];function HE(){return()=>{}}Dy(HE,"subscribe");function VE(){return zE(HE,()=>!0,()=>!1)}Dy(VE,"useIsHydratedModern");var GE=typeof zE=="function"?VE:OE;var ys=ve(xt(),1),EU=Object.defineProperty,fo=(t,e)=>EU(t,"name",{value:e,configurable:!0}),Fy="rovingFocusGroup.onEntryFocus",TU={bubbles:!1,cancelable:!0},km="RovingFocusGroup",[ky,qE,AU]=md(km),[RU,Ny]=Pa(km,[AU]),WE={Vertical:"vertical",Horizontal:"horizontal"},PU={LTR:"ltr",RTL:"rtl"},[DU,FU]=RU(km),XE=Rn.forwardRef(fo(function(e,n){return(0,ys.jsx)(ky.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,ys.jsx)(ky.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,ys.jsx)(kU,{...e,ref:n})})})},"RovingFocusGroup")),kU=Rn.forwardRef(fo(function(e,n){let{__scopeRovingFocusGroup:a,orientation:i,loop:r=!1,dir:s,currentTabStopId:o,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:u,onEntryFocus:d,preventScrollOnEntryFocus:f=!1,...c}=e,p=Rn.useRef(null),g=Sn(n,p),_=so(s),[m,h]=ro({prop:o,defaultProp:l??null,onChange:u,caller:km}),[x,S]=Rn.useState(!1),y=Ry(d),w=qE(a),C=Rn.useRef(!1),[L,v]=Rn.useState(0);return Rn.useEffect(()=>{let I=p.current;if(I)return I.addEventListener(Fy,y),()=>I.removeEventListener(Fy,y)},[y]),(0,ys.jsx)(DU,{scope:a,orientation:i,dir:_,loop:r,currentTabStopId:m,onItemFocus:Rn.useCallback(I=>h(I),[h]),onItemShiftTab:Rn.useCallback(()=>S(!0),[]),onFocusableItemAdd:Rn.useCallback(()=>v(I=>I+1),[]),onFocusableItemRemove:Rn.useCallback(()=>v(I=>I-1),[]),children:(0,ys.jsx)(Tn.div,{tabIndex:x||L===0?-1:0,"data-orientation":i,...c,ref:g,style:{outline:"none",...e.style},onMouseDown:_n(e.onMouseDown,()=>{C.current=!0}),onFocus:_n(e.onFocus,I=>{let A=!C.current;if(I.target===I.currentTarget&&A&&!x){let P=new CustomEvent(Fy,TU);if(I.currentTarget.dispatchEvent(P),!P.defaultPrevented){let k=w().filter(H=>H.focusable),z=k.find(H=>H.active),R=k.find(H=>H.id===m),V=[z,R,...k].filter(Boolean).map(H=>H.ref.current);Uy(V,f)}}C.current=!1}),onBlur:_n(e.onBlur,()=>S(!1))})})},"RovingFocusGroupImpl")),NU="RovingFocusGroupItem",YE=Rn.forwardRef(fo(function(e,n){let{__scopeRovingFocusGroup:a,focusable:i=!0,active:r=!1,tabStopId:s,children:o,...l}=e,u=Md(),d=s||u,f=FU(NU,a),c=f.currentTabStopId===d,p=qE(a),{onFocusableItemAdd:g,onFocusableItemRemove:_,currentTabStopId:m}=f,h=GE();return Vi(()=>{if(!(!h||!i))return g(),()=>_()},[h,i,g,_]),Rn.useEffect(()=>{if(!(h||!i))return g(),()=>_()},[h,i,g,_]),(0,ys.jsx)(ky.ItemSlot,{scope:a,id:d,focusable:i,active:r,children:(0,ys.jsx)(Tn.span,{tabIndex:c?0:-1,"data-orientation":f.orientation,...l,ref:n,onMouseDown:_n(e.onMouseDown,x=>{i?f.onItemFocus(d):x.preventDefault()}),onFocus:_n(e.onFocus,()=>f.onItemFocus(d)),onKeyDown:_n(e.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){f.onItemShiftTab();return}if(x.target!==x.currentTarget)return;let S=ZE(x,f.orientation,f.dir);if(S!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let w=p().filter(C=>C.focusable).map(C=>C.ref.current);if(S==="last")w.reverse();else if(S==="prev"||S==="next"){S==="prev"&&w.reverse();let C=w.indexOf(x.currentTarget);w=f.loop?jE(w,C+1):w.slice(C+1)}setTimeout(()=>Uy(w))}}),children:typeof o=="function"?o({isCurrentTabStop:c,hasTabStop:m!=null}):o})})},"RovingFocusGroupItem")),UU={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function KE(t,e){return e!==PU.RTL?t:t==="ArrowLeft"?"ArrowRight":t==="ArrowRight"?"ArrowLeft":t}fo(KE,"getDirectionAwareKey");function ZE(t,e,n){let a=KE(t.key,n);if(!(e===WE.Vertical&&["ArrowLeft","ArrowRight"].includes(a))&&!(e===WE.Horizontal&&["ArrowUp","ArrowDown"].includes(a)))return UU[a]}fo(ZE,"getFocusIntent");function Uy(t,e=!1){let n=document.activeElement;for(let a of t)if(a===n||(a.focus({preventScroll:e}),document.activeElement!==n))return}fo(Uy,"focusFirst");function jE(t,e){return t.map((n,a)=>t[(e+a)%t.length])}fo(jE,"wrapArray");var ho=ve(xt(),1),OU=Object.defineProperty,wd=(t,e)=>OU(t,"name",{value:e,configurable:!0}),$E={Automatic:"automatic",Manual:"manual"},By="Tabs",[zU,_W]=Pa(By,[Ny]),JE=Ny(),[HU,QE]=zU(By),eT=jl.forwardRef(wd(function(e,n){let{__scopeTabs:a,value:i,onValueChange:r,defaultValue:s,orientation:o="horizontal",dir:l,activationMode:u=$E.Automatic,...d}=e,f=so(l),[c,p]=ro({prop:i,onChange:r,defaultProp:s??"",caller:By});return(0,ho.jsx)(HU,{scope:a,baseId:Md(),value:c,onValueChange:p,orientation:o,dir:f,activationMode:u,children:(0,ho.jsx)(Tn.div,{dir:f,"data-orientation":o,...d,ref:n})})},"Tabs")),VU="TabsList",tT=jl.forwardRef(wd(function(e,n){let{__scopeTabs:a,loop:i=!0,...r}=e,s=QE(VU,a),o=JE(a);return(0,ho.jsx)(XE,{asChild:!0,...o,orientation:s.orientation,dir:s.dir,loop:i,children:(0,ho.jsx)(Tn.div,{role:"tablist","aria-orientation":s.orientation,...r,ref:n})})},"TabsList")),GU="TabsTrigger",nT=jl.forwardRef(wd(function(e,n){let{__scopeTabs:a,value:i,disabled:r=!1,...s}=e,o=QE(GU,a),l=JE(a),u=aT(o.baseId,i),d=iT(o.baseId,i),f=i===o.value;return(0,ho.jsx)(YE,{asChild:!0,...l,focusable:!r,active:f,children:(0,ho.jsx)(Tn.button,{type:"button",role:"tab","aria-selected":f,"aria-controls":d,"data-state":f?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:u,...s,ref:n,onMouseDown:_n(e.onMouseDown,c=>{!r&&c.button===0&&c.ctrlKey===!1?(c.currentTarget.focus(),o.onValueChange(i)):c.preventDefault()}),onKeyDown:_n(e.onKeyDown,c=>{r||c.target!==c.currentTarget||[" ","Enter"].includes(c.key)&&o.onValueChange(i)}),onFocus:_n(e.onFocus,()=>{let c=o.activationMode!==$E.Manual;!f&&!r&&c&&o.onValueChange(i)})})})},"TabsTrigger"));function aT(t,e){return`${t}-trigger-${e}`}wd(aT,"makeTriggerId");function iT(t,e){return`${t}-content-${e}`}wd(iT,"makeContentId");var Hy=ve(xt()),zy=eT,Nm=Oy.forwardRef(({className:t,...e},n)=>(0,Hy.jsx)(tT,{ref:n,className:nn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",t),...e}));Nm.displayName="TabsList";var Cd=Oy.forwardRef(({className:t,...e},n)=>(0,Hy.jsx)(nT,{ref:n,className:nn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",t),...e}));Cd.displayName="TabsTrigger";var We=ve(xt()),qU=[["ferrari","Ferrari V12"],["db605","Mercedes DB 605"]];function XU(){let t=In(n=>n.engine.id),e=In(n=>n.panelOpen);return(0,We.jsxs)("header",{className:"fixed inset-x-0 top-0 z-30 flex h-12 items-center gap-4 border-b bg-background/90 px-4 backdrop-blur",children:[(0,We.jsxs)("span",{className:"text-sm font-semibold tracking-tight",children:[(0,We.jsx)("span",{className:"text-muted-foreground",children:"3D"})," Engine Viewer"]}),(0,We.jsx)(zy,{value:t,onValueChange:kx,children:(0,We.jsx)(Nm,{className:"h-8",children:qU.map(([n,a])=>(0,We.jsx)(Cd,{value:n,className:"h-6",children:a},n))})}),(0,We.jsx)(co,{variant:"ghost",size:"icon",className:"ml-auto","aria-label":e?"Hide details panel":"Show details panel",title:e?"Hide details panel":"Show details panel",onClick:Yh,children:e?(0,We.jsx)(fd,{}):(0,We.jsx)(dd,{})})]})}function Vy({className:t,children:e}){let n=In(a=>a.panelOpen);return(0,We.jsx)("div",{className:nn("pointer-events-none fixed left-0 z-10 flex justify-center transition-[right] duration-300",t),style:{right:n?Ey:0},children:e})}function YU(){let t=In(e=>e.view);return(0,We.jsx)(Vy,{className:"top-[4.25rem]",children:(0,We.jsx)(zy,{value:t,onValueChange:xw,className:"pointer-events-auto",children:(0,We.jsxs)(Nm,{className:"border bg-background/90 backdrop-blur",children:[(0,We.jsx)(Cd,{value:"solid",className:"w-24",children:"Solid"}),(0,We.jsx)(Cd,{value:"cut",className:"w-24",children:"Cutaway"})]})})})}function KU(){let t=In(e=>e.explode);return(0,We.jsx)(Vy,{className:"bottom-6",children:(0,We.jsxs)("div",{className:"pointer-events-auto w-[min(520px,calc(100%-2rem))] rounded-xl border bg-background/90 px-4 py-3 backdrop-blur",children:[(0,We.jsxs)("div",{className:"mb-3 flex justify-between text-xs uppercase tracking-widest text-muted-foreground",children:[(0,We.jsx)("span",{children:"Exploded view"}),(0,We.jsxs)("span",{className:"tabular-nums text-foreground",children:[Math.round(t*100),"%"]})]}),(0,We.jsx)(_d,{"aria-label":"Exploded view",min:0,max:100,step:.5,value:[t*100],onValueChange:([e])=>hl(e/100)}),(0,We.jsxs)("div",{className:"mt-2 flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground",children:[(0,We.jsx)("span",{children:"Assembled"}),(0,We.jsx)("span",{children:"Exploded"})]})]})})}function ZU(){if(In(n=>n.engine.id)!=="db605")return null;let e=nn(Rm({variant:"link"}),"h-auto p-0 text-xs");return(0,We.jsxs)("p",{className:"fixed left-4 top-[4.25rem] z-10 max-w-[220px] text-xs leading-relaxed text-muted-foreground",children:["Model: ",(0,We.jsx)("a",{className:e,href:"https://www.thingiverse.com/thing:6028826",target:"_blank",rel:"noopener",children:"DB 605D by HQUARTAROLO"})," (Josep Calvo) \xB7"," ",(0,We.jsx)("a",{className:e,href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener",children:"CC BY"})]})}function jU(){let t=In(n=>n.loading),e=In(n=>n.panelOpen);return t?(0,We.jsx)(Vy,{className:"inset-y-0 items-center",children:(0,We.jsxs)("div",{className:nn("flex items-center gap-2 text-sm",t.status==="error"?"text-red-400":"text-muted-foreground"),children:[t.status!=="error"&&(0,We.jsx)(ms,{className:"size-4 animate-spin"}),t.text]})}):null}var $U=rT.default.memo(function(){return(0,We.jsxs)(We.Fragment,{children:[(0,We.jsxs)("svg",{id:"tipsvg","aria-hidden":"true",children:[(0,We.jsx)("polyline",{id:"tipline",points:""}),(0,We.jsx)("circle",{id:"tipdot",r:"4",cx:"-10",cy:"-10"})]}),(0,We.jsx)("button",{id:"tipbox",type:"button",className:Rm({variant:"default"}),hidden:!0})]})});function Gy(){return(0,We.jsxs)(We.Fragment,{children:[(0,We.jsx)(XU,{}),(0,We.jsx)(YU,{}),(0,We.jsx)(ZU,{}),(0,We.jsx)(jU,{}),(0,We.jsx)($U,{}),(0,We.jsx)(KU,{}),(0,We.jsx)(Ty,{})]})}var uT=ve(xt());function lT(){document.documentElement.classList.add("dark");let t=document.getElementById("ui");(0,oT.flushSync)(()=>(0,sT.createRoot)(t).render((0,uT.jsx)(Gy,{})))}function dT(){_e.W=window.innerWidth,_e.H=window.innerHeight,ut.setSize(_e.W,_e.H,!1),Rt.aspect=_e.W/_e.H,Rt.updateProjectionMatrix(),iw(),Qu.uniforms.uScale.value=ut.domElement.height/(2*Math.tan(kn.degToRad(Rt.fov/2)))}window.addEventListener("resize",dT);dT();var JU=(t,e,n)=>{let a=kn.clamp((n-t)/(e-t),0,1);return a*a*(3-2*a)},QU=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,cT=performance.now(),Wy=0,qy=0;function fT(){let t=performance.now(),e=Math.min((t-cT)/1e3,.05);cT=t,_e.time+=e,Pe.rpm+=(Pe.target-Pe.rpm)*(1-Math.exp(-e*2.6));let n=Pe.target<1e3?Math.sin(_e.time*9)*14+Math.sin(_e.time*23)*7:0,a=Pe.rpm+n,i=kn.clamp((Pe.rpm-na.idle)/(na.max-na.idle),0,1);Pe.crank+=a*Math.PI*2/60*cn.e.vis*e,cn.e.frame();let r=JU(.28,.95,i);Pe.heat+=(r-Pe.heat)*(1-Math.exp(-e*(r>Pe.heat?.55:.32))),Ju.value=Pe.heat,Gr.uniforms.uAmt.value=Math.pow(Pe.heat,1.5),Ns.forEach(l=>{l.intensity=380*Math.pow(Pe.heat,1.8)}),lM(e);let s=.012+.11*Math.pow(i,1.6),o=cn.e.root;if(o.position.set((Math.random()-.5)*s*2,(Math.random()-.5)*s*2,0),o.rotation.z=(Math.random()-.5)*s*.004,_e.fly){let l=_e.fly;l.t=Math.min(1,l.t+e/.9);let u=QU(l.t);wt.target.lerpVectors(l.fromT,l.toT,u),Rt.position.lerpVectors(l.fromP,l.toP,u),l.t>=1&&(_e.fly=null)}xc.opacity=.2+.12*Math.sin(_e.time*4.5),qy+=(Kh()/2-qy)*(1-Math.exp(-e*8)),Rt.setViewOffset(_e.W,_e.H,qy,0,_e.W,_e.H),Wy+=e,Wy>.06&&(Wy=0,ow(a)),wt.update(),Px(),aw(),requestAnimationFrame(fT)}lT();lw({onSelect:Gs,onZoom:Fx});gw();vw();$M().catch(t=>{console.error(t),xn({loading:{text:"Could not load the engine data: "+t.message,status:"error"}})});fT();window.__ready=!0;Object.assign(window,{__cam:Rt,__controls:wt,__S:Pe,__A:st,__EX:pt,__select:Gs,__getSel:()=>_e.selected,__setRev:mc,__togglePanel:Yh,__cut:rl,__setExplode:hl});})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/loader-circle.mjs:
lucide-react/dist/esm/icons/panel-right-open.mjs:
lucide-react/dist/esm/icons/panel-right-close.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.53.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
