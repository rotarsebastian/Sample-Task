parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"sU2v":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3];Object.defineProperty(exports,"__esModule",{value:!0});var e=exports._gsScope="undefined"!=typeof window?window:"undefined"!=typeof module&&module.exports&&void 0!==t?t:{},i=exports.TweenLite=function(t,e){"use strict";var i={},s=t.document,r=t.GreenSockGlobals=t.GreenSockGlobals||t;if(r.TweenLite)return r.TweenLite;var n,a,o,l,h,_,u,p=function(t){var e,i=t.split("."),s=r;for(e=0;e<i.length;e++)s[i[e]]=s=s[i[e]]||{};return s},c=p("com.greensock"),f=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=function(){},d=(_=Object.prototype.toString,u=_.call([]),function(t){return null!=t&&(t instanceof Array||"object"==typeof t&&!!t.push&&_.call(t)===u)}),v={},g=function(t,e,s,n){this.sc=v[t]?v[t].sc:[],v[t]=this,this.gsClass=null,this.func=s;var a=[];this.check=function(o){for(var l,h,_,u,c=e.length,f=c;--c>-1;)(l=v[e[c]]||new g(e[c],[])).gsClass?(a[c]=l.gsClass,f--):o&&l.sc.push(this);if(0===f&&s)for(_=(h=("com.greensock."+t).split(".")).pop(),u=p(h.join("."))[_]=this.gsClass=s.apply(s,a),n&&(r[_]=i[_]=u),c=0;c<this.sc.length;c++)this.sc[c].check()},this.check(!0)},T=t._gsDefine=function(t,e,i,s){return new g(t,e,i,s)},y=c._class=function(t,e,i){return e=e||function(){},T(t,[],function(){return e},i),e};T.globals=r;var w=[0,0,1,1],P=y("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?w.concat(e):w},!0),b=P.map={},k=P.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),h=l.length,_=(i||"easeIn,easeOut,easeInOut").split(",");--h>-1;)for(n=l[h],r=s?y("easing."+n,null,!0):c.easing[n]||{},a=_.length;--a>-1;)o=_[a],b[n+"."+o]=b[o+n]=r[o]=t.getRatio?t:t[o]||new t};for((o=P.prototype)._calcEnd=!1,o.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:t<.5?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:t<.5?s/2:1-s/2},a=(n=["Linear","Quad","Cubic","Quart","Quint,Strong"]).length;--a>-1;)o=n[a]+",Power"+a,k(new P(null,null,1,a),o,"easeOut",!0),k(new P(null,null,2,a),o,"easeIn"+(0===a?",easeNone":"")),k(new P(null,null,3,a),o,"easeInOut");b.linear=c.easing.Linear.easeIn,b.swing=c.easing.Quad.easeInOut;var S=y("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});(o=S.prototype).addEventListener=function(t,e,i,s,r){r=r||0;var n,a,o=this._listeners[t],_=0;for(this!==l||h||l.wake(),null==o&&(this._listeners[t]=o=[]),a=o.length;--a>-1;)(n=o[a]).c===e&&n.s===i?o.splice(a,1):0===_&&n.pr<r&&(_=a+1);o.splice(_,0,{c:e,s:i,up:s,pr:r})},o.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return void s.splice(i,1)},o.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for((e=r.length)>1&&(r=r.slice(0)),i=this._eventTarget;--e>-1;)(s=r[e])&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var A=t.requestAnimationFrame,x=t.cancelAnimationFrame,R=Date.now||function(){return(new Date).getTime()},C=R();for(a=(n=["ms","moz","webkit","o"]).length;--a>-1&&!A;)A=t[n[a]+"RequestAnimationFrame"],x=t[n[a]+"CancelAnimationFrame"]||t[n[a]+"CancelRequestAnimationFrame"];y("Ticker",function(t,e){var i,r,n,a,o,_=this,u=R(),p=!(!1===e||!A)&&"auto",c=500,f=33,d=function(t){var e,s,l=R()-C;l>c&&(u+=l-f),C+=l,_.time=(C-u)/1e3,e=_.time-o,(!i||e>0||!0===t)&&(_.frame++,o+=e+(e>=a?.004:a-e),s=!0),!0!==t&&(n=r(d)),s&&_.dispatchEvent("tick")};S.call(_),_.time=_.frame=0,_.tick=function(){d(!0)},_.lagSmoothing=function(t,e){if(!arguments.length)return c<1e10;c=t||1e10,f=Math.min(e,c,0)},_.sleep=function(){null!=n&&(p&&x?x(n):clearTimeout(n),r=m,n=null,_===l&&(h=!1))},_.wake=function(t){null!==n?_.sleep():t?u+=-C+(C=R()):_.frame>10&&(C=R()-c+5),r=0===i?m:p&&A?A:function(t){return setTimeout(t,1e3*(o-_.time)+1|0)},_===l&&(h=!0),d(2)},_.fps=function(t){if(!arguments.length)return i;a=1/((i=t)||60),o=this.time+a,_.wake()},_.useRAF=function(t){if(!arguments.length)return p;_.sleep(),p=t,_.fps(i)},_.fps(t),setTimeout(function(){"auto"===p&&_.frame<5&&"hidden"!==(s||{}).visibilityState&&_.useRAF(!1)},1500)}),(o=c.Ticker.prototype=new c.events.EventDispatcher).constructor=c.Ticker;var D=y("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=!0===e.immediateRender,this.data=e.data,this._reversed=!0===e.reversed,V){h||l.wake();var i=this.vars.useFrames?J:V;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});l=D.ticker=new c.Ticker,(o=D.prototype)._dirty=o._gc=o._initted=o._paused=!1,o._totalTime=o._time=0,o._rawPrevTime=-1,o._next=o._last=o._onUpdate=o._timeline=o.timeline=null,o._paused=!1;var E=function(){h&&R()-C>2e3&&("hidden"!==(s||{}).visibilityState||!l.lagSmoothing())&&l.wake();var t=setTimeout(E,2e3);t.unref&&t.unref()};E(),o.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},o.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},o.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},o.seek=function(t,e){return this.totalTime(Number(t),!1!==e)},o.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,!1!==e,!0)},o.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},o.render=function(t,e,i){},o.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,!this._gc&&this.timeline||this._enabled(!0),this},o.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime(!0))>=i&&t<i+this.totalDuration()/this._timeScale-1e-7},o._enabled=function(t,e){return h||l.wake(),this._gc=!t,this._active=this.isActive(),!0!==e&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},o._kill=function(t,e){return this._enabled(!1,!1)},o.kill=function(t,e){return this._kill(t,e),this},o._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},o._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},o._callback=function(t){var e=this.vars,i=e[t],s=e[t+"Params"],r=e[t+"Scope"]||e.callbackScope||this;switch(s?s.length:0){case 0:i.call(r);break;case 1:i.call(r,s[0]);break;case 2:i.call(r,s[0],s[1]);break;default:i.apply(r,s)}},o.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=d(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},o.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},o.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},o.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},o.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},o.totalTime=function(t,e,i){if(h||l.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(t<0&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),this._totalTime===t&&0!==this._duration||(F.length&&X(),this.render(t,e,!1),F.length&&X())}return this},o.progress=o.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},o.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},o.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},o.timeScale=function(t){if(!arguments.length)return this._timeScale;var e,i;for(t=t||1e-10,this._timeline&&this._timeline.smoothChildTiming&&(i=(e=this._pauseTime)||0===e?e:this._timeline.totalTime(),this._startTime=i-(i-this._startTime)*this._timeScale/t),this._timeScale=t,i=this.timeline;i&&i.timeline;)i._dirty=!0,i.totalDuration(),i=i.timeline;return this},o.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},o.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(h||t||l.wake(),i=(e=s.rawTime())-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&(e=s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var I=y("core.SimpleTimeline",function(t){D.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});(o=I.prototype=new D).constructor=I,o.kill()._gc=!1,o._first=o._last=o._recent=null,o._sortChildren=!1,o.add=o.insert=function(t,e,i,s){var r,n;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=this.rawTime()-(t._timeline.rawTime()-t._pauseTime)),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),r=this._last,this._sortChildren)for(n=t._startTime;r&&r._startTime>n;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=r,this._recent=t,this._timeline&&this._uncache(!0),this},o._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},o.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused&&!r._gc)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},o.rawTime=function(){return h||l.wake(),this._totalTime};var O=y("TweenLite",function(e,i,s){if(D.call(this,i,s),this.render=O.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:O.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?H[O.defaultOverwrite]:"number"==typeof l?l>>0:H[l],(o||e instanceof Array||e.push&&d(e))&&"number"!=typeof e[0])for(this._targets=a=f(e),this._propLookup=[],this._siblings=[],r=0;r<a.length;r++)(n=a[r])?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(f(n))):(this._siblings[r]=Y(n,this,!1),1===l&&this._siblings[r].length>1&&tt(n,this,null,1,this._siblings[r])):"string"==typeof(n=a[r--]=O.selector(n))&&a.splice(r+1,1):a.splice(r--,1);else this._propLookup={},this._siblings=Y(e,this,!1),1===l&&this._siblings.length>1&&tt(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-1e-10,this.render(Math.min(0,-this._delay)))},!0),z=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)};(o=O.prototype=new D).constructor=O,o.kill()._gc=!1,o.ratio=0,o._firstPT=o._targets=o._overwrittenProps=o._startAt=null,o._notifyPluginsOfEnabled=o._lazy=!1,O.version="2.0.2",O.defaultEase=o._ease=new P(null,null,1,1),O.defaultOverwrite="auto",O.ticker=l,O.autoSleep=120,O.lagSmoothing=function(t,e){l.lagSmoothing(t,e)},O.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(O.selector=i,i(e)):(s||(s=t.document),s?s.querySelectorAll?s.querySelectorAll(e):s.getElementById("#"===e.charAt(0)?e.substr(1):e):e)};var F=[],L={},U=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,N=/[\+-]=-?[\.\d]/,j=function(t){for(var e,i=this._firstPT;i;)e=i.blob?1===t&&null!=this.end?this.end:t?this.join(""):this.start:i.c*t+i.s,i.m?e=i.m.call(this._tween,e,this._target||i.t,this._tween):e<1e-6&&e>-1e-6&&!i.blob&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},G=function(t,e,i,s){var r,n,a,o,l,h,_,u=[],p=0,c="",f=0;for(u.start=t,u.end=e,t=u[0]=t+"",e=u[1]=e+"",i&&(i(u),t=u[0],e=u[1]),u.length=0,r=t.match(U)||[],n=e.match(U)||[],s&&(s._next=null,s.blob=1,u._firstPT=u._applyPT=s),l=n.length,o=0;o<l;o++)_=n[o],c+=(h=e.substr(p,e.indexOf(_,p)-p))||!o?h:",",p+=h.length,f?f=(f+1)%5:"rgba("===h.substr(-5)&&(f=1),_===r[o]||r.length<=o?c+=_:(c&&(u.push(c),c=""),a=parseFloat(r[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*parseFloat(_.substr(2)):parseFloat(_)-a)||0,f:0,m:f&&f<4?Math.round:0}),p+=_.length;return(c+=e.substr(p))&&u.push(c),u.setRatio=j,N.test(e)&&(u.end=null),u},Q=function(t,e,i,s,r,n,a,o,l){"function"==typeof s&&(s=s(l||0,t));var h=typeof t[e],_="function"!==h?"":e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),u="get"!==i?i:_?a?t[_](a):t[_]():t[e],p="string"==typeof s&&"="===s.charAt(1),c={t:t,p:e,s:u,f:"function"===h,pg:0,n:r||e,m:n?"function"==typeof n?n:Math.round:0,pr:0,c:p?parseInt(s.charAt(0)+"1",10)*parseFloat(s.substr(2)):parseFloat(s)-u||0};if(("number"!=typeof u||"number"!=typeof s&&!p)&&(a||isNaN(u)||!p&&isNaN(s)||"boolean"==typeof u||"boolean"==typeof s?(c.fp=a,c={t:G(u,p?parseFloat(c.s)+c.c+(c.s+"").replace(/[0-9\-\.]/g,""):s,o||O.defaultStringFilter,c),p:"setRatio",s:0,c:1,f:2,pg:0,n:r||e,pr:0,m:0}):(c.s=parseFloat(u),p||(c.c=parseFloat(s)-c.s||0))),c.c)return(c._next=this._firstPT)&&(c._next._prev=c),this._firstPT=c,c},q=O._internals={isArray:d,isSelector:z,lazyTweens:F,blobDif:G},M=O._plugins={},B=q.tweenLookup={},$=0,K=q.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},H={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},J=D._rootFramesTimeline=new I,V=D._rootTimeline=new I,W=30,X=q.lazyRender=function(){var t,e=F.length;for(L={};--e>-1;)(t=F[e])&&!1!==t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);F.length=0};V._startTime=l.time,J._startTime=l.frame,V._active=J._active=!0,setTimeout(X,1),D._updateRoot=O.render=function(){var t,e,i;if(F.length&&X(),V.render((l.time-V._startTime)*V._timeScale,!1,!1),J.render((l.frame-J._startTime)*J._timeScale,!1,!1),F.length&&X(),l.frame>=W){for(i in W=l.frame+(parseInt(O.autoSleep,10)||120),B){for(t=(e=B[i].tweens).length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete B[i]}if((!(i=V._first)||i._paused)&&O.autoSleep&&!J._first&&1===l._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||l.sleep()}}},l.addEventListener("tick",D._updateRoot);var Y=function(t,e,i){var s,r,n=t._gsTweenID;if(B[n||(t._gsTweenID=n="t"+$++)]||(B[n]={target:t,tweens:[]}),e&&((s=B[n].tweens)[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return B[n].tweens},Z=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),(a=O.onOverwrite)&&(n=a(t,e,i,s)),!1!==r&&!1!==n},tt=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;n<l;n++)if((o=r[n])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var h,_=e._startTime+1e-10,u=[],p=0,c=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||et(e,0,c),0===et(o,h,c)&&(u[p++]=o)):o._startTime<=_&&o._startTime+o.totalDuration()/o._timeScale>_&&((c||!o._initted)&&_-o._startTime<=2e-10||(u[p++]=o)));for(n=p;--n>-1;)if(l=(o=u[n])._firstPT,2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted&&l){if(2!==s&&!Z(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},et=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return(n/=r)>e?n-e:i&&n===e||!t._initted&&n-e<2e-10?1e-10:(n+=t.totalDuration()/t._timeScale/r)>e+1e-10?0:n-e-1e-10};o._init=function(){var t,e,i,s,r,n,a=this.vars,o=this._overwrittenProps,l=this._duration,h=!!a.immediateRender,_=a.ease;if(a.startAt){for(s in this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={},a.startAt)r[s]=a.startAt[s];if(r.data="isStart",r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&!1!==a.lazy,r.startAt=r.delay=null,r.onUpdate=a.onUpdate,r.onUpdateParams=a.onUpdateParams,r.onUpdateScope=a.onUpdateScope||a.callbackScope||this,this._startAt=O.to(this.target||{},0,r),h)if(this._time>0)this._startAt=null;else if(0!==l)return}else if(a.runBackwards&&0!==l)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{for(s in 0!==this._time&&(h=!1),i={},a)K[s]&&"autoCSS"!==s||(i[s]=a[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&!1!==a.lazy,i.immediateRender=h,this._startAt=O.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=_=_?_ instanceof P?_:"function"==typeof _?new P(_,a.easeParams):b[_]||O.defaultEase:O.defaultEase,a.easeParams instanceof Array&&_.config&&(this._ease=_.config.apply(_,a.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(n=this._targets.length,t=0;t<n;t++)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],o?o[t]:null,t)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,o,0);if(e&&O._onPluginEvent("_onInitAllProps",this),o&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),a.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=a.onUpdate,this._initted=!0},o._initProps=function(e,i,s,r,n){var a,o,l,h,_,u;if(null==e)return!1;for(a in L[e._gsTweenID]&&X(),this.vars.css||e.style&&e!==t&&e.nodeType&&M.css&&!1!==this.vars.autoCSS&&function(t,e){var i,s={};for(i in t)K[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!M[i]||M[i]&&M[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s}(this.vars,e),this.vars)if(u=this.vars[a],K[a])u&&(u instanceof Array||u.push&&d(u))&&-1!==u.join("").indexOf("{self}")&&(this.vars[a]=u=this._swapSelfInParams(u,this));else if(M[a]&&(h=new M[a])._onInitTween(e,this.vars[a],this,n)){for(this._firstPT=_={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:1,n:a,pg:1,pr:h._priority,m:0},o=h._overwriteProps.length;--o>-1;)i[h._overwriteProps[o]]=this._firstPT;(h._priority||h._onInitAllProps)&&(l=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0),_._next&&(_._next._prev=_)}else i[a]=Q.call(this,e,a,"get",u,a,0,null,this.vars.stringFilter,n);return r&&this._kill(r,e)?this._initProps(e,i,s,r,n):this._overwrite>1&&this._firstPT&&s.length>1&&tt(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r,n)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(L[e._gsTweenID]=!0),l)},o.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l-1e-7&&t>=0)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(h<0||t<=0&&t>=-1e-7||1e-10===h&&"isPause"!==this.data)&&h!==t&&(i=!0,h>1e-10&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:1e-10);else if(t<1e-7)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0)&&(r="onReverseComplete",s=this._reversed),t<0&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(1e-10!==h||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:1e-10)),(!this._initted||this._startAt&&this._startAt.progress())&&(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/l,u=this._easeType,p=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===p?_*=_:2===p?_*=_*_:3===p?_*=_*_*_:4===p&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:t/l<.5?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,F.push(this),void(this._lazy=[t,e]);this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,!0,i):r||(r="_dummyGS")),this.vars.onStart&&(0===this._time&&0!==l||e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(t<0&&this._startAt&&-1e-4!==t&&this._startAt.render(t,!0,i),e||(this._time!==o||s||i)&&this._callback("onUpdate")),r&&(this._gc&&!i||(t<0&&this._startAt&&!this._onUpdate&&-1e-4!==t&&this._startAt.render(t,!0,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===l&&1e-10===this._rawPrevTime&&1e-10!==a&&(this._rawPrevTime=0)))}},o._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:O.selector(e)||e;var s,r,n,a,o,l,h,_,u,p=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline,c=this._firstPT;if((d(e)||z(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(O.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u||(u=[]),u.push(n));if((u||!t)&&!Z(this,i,e,u))return!1}for(n in h)(a=o[n])&&(p&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&c&&this._enabled(!1,!1)}}return l},o.invalidate=function(){return this._notifyPluginsOfEnabled&&O._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-1e-10,this.render(Math.min(0,-this._delay))),this},o._enabled=function(t,e){if(h||l.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=Y(s[i],this,!0);else this._siblings=Y(this.target,this,!0)}return D.prototype._enabled.call(this,t,e),!(!this._notifyPluginsOfEnabled||!this._firstPT)&&O._onPluginEvent(t?"_onEnable":"_onDisable",this)},O.to=function(t,e,i){return new O(t,e,i)},O.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new O(t,e,i)},O.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new O(t,e,s)},O.delayedCall=function(t,e,i,s,r){return new O(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},O.set=function(t,e){return new O(t,0,e)},O.getTweensOf=function(t,e){if(null==t)return[];var i,s,r,n;if(t="string"!=typeof t?t:O.selector(t)||t,(d(t)||z(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(O.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else if(t._gsTweenID)for(i=(s=Y(t).concat()).length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s||[]},O.killTweensOf=O.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=O.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var it=y("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=it.prototype},!0);if(o=it.prototype,it.version="1.19.0",it.API=2,o._firstPT=null,o._addTween=Q,o.setRatio=j,o._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},o._mod=o._roundProps=function(t){for(var e,i=this._firstPT;i;)(e=t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&"function"==typeof e&&(2===i.f?i.t._applyPT.m=e:i.m=e),i=i._next},O._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},it.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===it.API&&(M[(new t[e])._propName]=t[e]);return!0},T.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},a=y("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){it.call(this,i,s),this._overwriteProps=r||[]},!0===t.global),o=a.prototype=new it(i);for(e in o.constructor=a,a.API=t.API,n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,it.activate([a]),a},n=t._gsQueue){for(a=0;a<n.length;a++)n[a]();for(o in v)v[o].func||t.console.log("GSAP encountered missing dependency: "+o)}return h=!1,O}(e),s=exports.globals=e.GreenSockGlobals,r=s.com.greensock;exports.default=i;var n=exports.SimpleTimeline=r.core.SimpleTimeline,a=exports.Animation=r.core.Animation,o=exports.Ease=s.Ease,l=exports.Linear=s.Linear,h=exports.Power0=l,_=exports.Power1=s.Power1,u=exports.Power2=s.Power2,p=exports.Power3=s.Power3,c=exports.Power4=s.Power4,f=exports.TweenPlugin=s.TweenPlugin,m=exports.EventDispatcher=r.events.EventDispatcher;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("gsap/TweenLite"),t=void 0,n=void 0,r=void 0;function a(e){e.blur();var t=e.parentElement.querySelector(".task-description");document.title=t.textContent,document.querySelector("#title-task").textContent=t.textContent}function o(e){var t=document.querySelector("body"),n=document.querySelector("#tasks-container"),r=document.querySelector("#title-task");n.style.opacity="0.85",t.classList.add("change-background"),"Light"==e.textContent?(r.style.color="#57a0a5",t.style.backgroundImage="url('imgs/background.jpeg')"):"Medium"==e.textContent?(r.style.color="#495057",t.style.backgroundImage="url('imgs/medium.jpeg')"):"Dark"==e.textContent&&(r.style.color="#ebf1f3",t.style.backgroundImage="url('imgs/dark.jpeg')")}function c(){fetch("http://gitlab.wd-agency.com/snippets/2/raw").then(function(e){return e.json()}).then(function(e){return s(e)})}function s(e){e.forEach(u)}function u(n){if(n.day==t){var a=document.querySelector("#tasks-container"),o=document.querySelector("#tasks-template").content.cloneNode(!0);o.querySelector(".task-time").textContent=n.time,o.querySelector(".task-description").textContent=n.description;var c=parseInt(r),s=n.time.slice(0,2),u=parseInt(s);(u+=2)>=24&&(24==u&&(u=0),25==u&&(u=1)),c>u&&(o.querySelector(".task-status").textContent="unavailable",o.querySelector(".task-status").classList.add("task-unavailable")),e.TweenLite.to(o,1.5,{attr:{height:"200px"},delay:.05*i,ease:Circ.easeOut,y:-500}),a.appendChild(o)}}function l(){var e=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],a=document.querySelector(".real-day"),o=document.querySelector(".real-time"),c=void 0,i=void 0,s=new Date,u=s.toString();n=s.getTime();var l=s.getHours(),d=s.getMinutes();r=l,l>12?((l-=12)<10&&(l="0"+l),d<10&&(d="0"+d),i=(i=l)+"."+d+" PM"):(d<10&&(d="0"+d),i=(i=l)+"."+d+" AM"),o.textContent=i;for(var y=u.slice(0,3),m=0;m<e.length;m++){e[m].slice(0,3)==y&&(c=e[m],t=e[m])}"01"==u.slice(8,10)?c+=" 1st":"02"==u.slice(8,10)?c+=" 2nd":"03"==u.slice(8,10)?c+=" 3rd":c="0"==u.slice(8,9)?c+" "+u.slice(9,10)+"th":c+" "+u.slice(8,10)+"th",c=c+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][s.getMonth()]+" "+s.getFullYear(),a.textContent="Today is "+c}l(),c(),setInterval(l,900);
},{"gsap/TweenLite":"sU2v"}]},{},["Focm"], null)
//# sourceMappingURL=/sample-task.bae6fc0c.map