var ub=Object.defineProperty;var dg=n=>{throw TypeError(n)};var fb=(n,t,e)=>t in n?ub(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var qi=(n,t,e)=>fb(n,typeof t!="symbol"?t+"":t,e),pg=(n,t,e)=>t.has(n)||dg("Cannot "+e);var Ue=(n,t,e)=>(pg(n,t,"read from private field"),e?e.call(n):t.get(n)),Yi=(n,t,e)=>t.has(n)?dg("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),Ss=(n,t,e,i)=>(pg(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e);var mg=(n,t,e,i)=>({set _(s){Ss(n,t,s,e)},get _(){return Ue(n,t,i)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function md(n,t){const e=new Set(n.split(","));return i=>e.has(i)}const Qe={},Uo=[],Ai=()=>{},hb=()=>!1,eu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),gd=n=>n.startsWith("onUpdate:"),In=Object.assign,_d=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},db=Object.prototype.hasOwnProperty,Re=(n,t)=>db.call(n,t),le=Array.isArray,No=n=>nu(n)==="[object Map]",p0=n=>nu(n)==="[object Set]",fe=n=>typeof n=="function",gn=n=>typeof n=="string",as=n=>typeof n=="symbol",Ze=n=>n!==null&&typeof n=="object",m0=n=>(Ze(n)||fe(n))&&fe(n.then)&&fe(n.catch),g0=Object.prototype.toString,nu=n=>g0.call(n),pb=n=>nu(n).slice(8,-1),_0=n=>nu(n)==="[object Object]",vd=n=>gn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Da=md(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),iu=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},mb=/-(\w)/g,ki=iu(n=>n.replace(mb,(t,e)=>e?e.toUpperCase():"")),gb=/\B([A-Z])/g,Xs=iu(n=>n.replace(gb,"-$1").toLowerCase()),ru=iu(n=>n.charAt(0).toUpperCase()+n.slice(1)),Cf=iu(n=>n?`on${ru(n)}`:""),rs=(n,t)=>!Object.is(n,t),Pf=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},v0=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},_b=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let gg;const x0=()=>gg||(gg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yr(n){if(le(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=gn(i)?Sb(i):yr(i);if(s)for(const a in s)t[a]=s[a]}return t}else if(gn(n)||Ze(n))return n}const vb=/;(?![^(]*\))/g,xb=/:([^]+)/,Mb=/\/\*[^]*?\*\//g;function Sb(n){const t={};return n.replace(Mb,"").split(vb).forEach(e=>{if(e){const i=e.split(xb);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function su(n){let t="";if(gn(n))t=n;else if(le(n))for(let e=0;e<n.length;e++){const i=su(n[e]);i&&(t+=i+" ")}else if(Ze(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const yb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Eb=md(yb);function M0(n){return!!n||n===""}const S0=n=>!!(n&&n.__v_isRef===!0),bn=n=>gn(n)?n:n==null?"":le(n)||Ze(n)&&(n.toString===g0||!fe(n.toString))?S0(n)?bn(n.value):JSON.stringify(n,y0,2):String(n),y0=(n,t)=>S0(t)?y0(n,t.value):No(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],a)=>(e[Lf(i,a)+" =>"]=s,e),{})}:p0(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Lf(e))}:as(t)?Lf(t):Ze(t)&&!le(t)&&!_0(t)?String(t):t,Lf=(n,t="")=>{var e;return as(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ni;class Ab{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ni,!t&&Ni&&(this.index=(Ni.scopes||(Ni.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=Ni;try{return Ni=this,t()}finally{Ni=e}}}on(){Ni=this}off(){Ni=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function bb(n,t=Ni){t&&t.active&&t.effects.push(n)}function Tb(){return Ni}let Hs;class xd{constructor(t,e,i,s){this.fn=t,this.trigger=e,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,bb(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ls();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(wb(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),cs()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ts,e=Hs;try{return ts=!0,Hs=this,this._runnings++,_g(this),this.fn()}finally{vg(this),this._runnings--,Hs=e,ts=t}}stop(){this.active&&(_g(this),vg(this),this.onStop&&this.onStop(),this.active=!1)}}function wb(n){return n.value}function _g(n){n._trackId++,n._depsLength=0}function vg(n){if(n.deps.length>n._depsLength){for(let t=n._depsLength;t<n.deps.length;t++)E0(n.deps[t],n);n.deps.length=n._depsLength}}function E0(n,t){const e=n.get(t);e!==void 0&&t._trackId!==e&&(n.delete(t),n.size===0&&n.cleanup())}let ts=!0,mh=0;const A0=[];function ls(){A0.push(ts),ts=!1}function cs(){const n=A0.pop();ts=n===void 0?!0:n}function Md(){mh++}function Sd(){for(mh--;!mh&&gh.length;)gh.shift()()}function b0(n,t,e){if(t.get(n)!==n._trackId){t.set(n,n._trackId);const i=n.deps[n._depsLength];i!==t?(i&&E0(i,n),n.deps[n._depsLength++]=t):n._depsLength++}}const gh=[];function T0(n,t,e){Md();for(const i of n.keys()){let s;i._dirtyLevel<t&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&gh.push(i.scheduler)))}Sd()}const w0=(n,t)=>{const e=new Map;return e.cleanup=n,e.computed=t,e},_h=new WeakMap,ks=Symbol(""),vh=Symbol("");function ti(n,t,e){if(ts&&Hs){let i=_h.get(n);i||_h.set(n,i=new Map);let s=i.get(e);s||i.set(e,s=w0(()=>i.delete(e))),b0(Hs,s)}}function br(n,t,e,i,s,a){const l=_h.get(n);if(!l)return;let c=[];if(t==="clear")c=[...l.values()];else if(e==="length"&&le(n)){const f=Number(i);l.forEach((h,d)=>{(d==="length"||!as(d)&&d>=f)&&c.push(h)})}else switch(e!==void 0&&c.push(l.get(e)),t){case"add":le(n)?vd(e)&&c.push(l.get("length")):(c.push(l.get(ks)),No(n)&&c.push(l.get(vh)));break;case"delete":le(n)||(c.push(l.get(ks)),No(n)&&c.push(l.get(vh)));break;case"set":No(n)&&c.push(l.get(ks));break}Md();for(const f of c)f&&T0(f,4);Sd()}const Rb=md("__proto__,__v_isRef,__isVue"),R0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(as)),xg=Cb();function Cb(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const i=Fe(this);for(let a=0,l=this.length;a<l;a++)ti(i,"get",a+"");const s=i[t](...e);return s===-1||s===!1?i[t](...e.map(Fe)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){ls(),Md();const i=Fe(this)[t].apply(this,e);return Sd(),cs(),i}}),n}function Pb(n){as(n)||(n=String(n));const t=Fe(this);return ti(t,"has",n),t.hasOwnProperty(n)}class C0{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,a=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return a;if(e==="__v_raw")return i===(s?a?Vb:D0:a?I0:L0).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const l=le(t);if(!s){if(l&&Re(xg,e))return Reflect.get(xg,e,i);if(e==="hasOwnProperty")return Pb}const c=Reflect.get(t,e,i);return(as(e)?R0.has(e):Rb(e))||(s||ti(t,"get",e),a)?c:ei(c)?l&&vd(e)?c:c.value:Ze(c)?s?N0(c):Ka(c):c}}class P0 extends C0{constructor(t=!1){super(!1,t)}set(t,e,i,s){let a=t[e];if(!this._isShallow){const f=Gs(a);if(!Vo(i)&&!Gs(i)&&(a=Fe(a),i=Fe(i)),!le(t)&&ei(a)&&!ei(i))return f?!1:(a.value=i,!0)}const l=le(t)&&vd(e)?Number(e)<t.length:Re(t,e),c=Reflect.set(t,e,i,s);return t===Fe(s)&&(l?rs(i,a)&&br(t,"set",e,i):br(t,"add",e,i)),c}deleteProperty(t,e){const i=Re(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&br(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!as(e)||!R0.has(e))&&ti(t,"has",e),i}ownKeys(t){return ti(t,"iterate",le(t)?"length":ks),Reflect.ownKeys(t)}}class Lb extends C0{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Ib=new P0,Db=new Lb,Ub=new P0(!0);const yd=n=>n,ou=n=>Reflect.getPrototypeOf(n);function Kl(n,t,e=!1,i=!1){n=n.__v_raw;const s=Fe(n),a=Fe(t);e||(rs(t,a)&&ti(s,"get",t),ti(s,"get",a));const{has:l}=ou(s),c=i?yd:e?bd:Ha;if(l.call(s,t))return c(n.get(t));if(l.call(s,a))return c(n.get(a));n!==s&&n.get(t)}function Zl(n,t=!1){const e=this.__v_raw,i=Fe(e),s=Fe(n);return t||(rs(n,s)&&ti(i,"has",n),ti(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function jl(n,t=!1){return n=n.__v_raw,!t&&ti(Fe(n),"iterate",ks),Reflect.get(n,"size",n)}function Mg(n,t=!1){!t&&!Vo(n)&&!Gs(n)&&(n=Fe(n));const e=Fe(this);return ou(e).has.call(e,n)||(e.add(n),br(e,"add",n,n)),this}function Sg(n,t,e=!1){!e&&!Vo(t)&&!Gs(t)&&(t=Fe(t));const i=Fe(this),{has:s,get:a}=ou(i);let l=s.call(i,n);l||(n=Fe(n),l=s.call(i,n));const c=a.call(i,n);return i.set(n,t),l?rs(t,c)&&br(i,"set",n,t):br(i,"add",n,t),this}function yg(n){const t=Fe(this),{has:e,get:i}=ou(t);let s=e.call(t,n);s||(n=Fe(n),s=e.call(t,n)),i&&i.call(t,n);const a=t.delete(n);return s&&br(t,"delete",n,void 0),a}function Eg(){const n=Fe(this),t=n.size!==0,e=n.clear();return t&&br(n,"clear",void 0,void 0),e}function Jl(n,t){return function(i,s){const a=this,l=a.__v_raw,c=Fe(l),f=t?yd:n?bd:Ha;return!n&&ti(c,"iterate",ks),l.forEach((h,d)=>i.call(s,f(h),f(d),a))}}function Ql(n,t,e){return function(...i){const s=this.__v_raw,a=Fe(s),l=No(a),c=n==="entries"||n===Symbol.iterator&&l,f=n==="keys"&&l,h=s[n](...i),d=e?yd:t?bd:Ha;return!t&&ti(a,"iterate",f?vh:ks),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Hr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Nb(){const n={get(a){return Kl(this,a)},get size(){return jl(this)},has:Zl,add:Mg,set:Sg,delete:yg,clear:Eg,forEach:Jl(!1,!1)},t={get(a){return Kl(this,a,!1,!0)},get size(){return jl(this)},has:Zl,add(a){return Mg.call(this,a,!0)},set(a,l){return Sg.call(this,a,l,!0)},delete:yg,clear:Eg,forEach:Jl(!1,!0)},e={get(a){return Kl(this,a,!0)},get size(){return jl(this,!0)},has(a){return Zl.call(this,a,!0)},add:Hr("add"),set:Hr("set"),delete:Hr("delete"),clear:Hr("clear"),forEach:Jl(!0,!1)},i={get(a){return Kl(this,a,!0,!0)},get size(){return jl(this,!0)},has(a){return Zl.call(this,a,!0)},add:Hr("add"),set:Hr("set"),delete:Hr("delete"),clear:Hr("clear"),forEach:Jl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{n[a]=Ql(a,!1,!1),e[a]=Ql(a,!0,!1),t[a]=Ql(a,!1,!0),i[a]=Ql(a,!0,!0)}),[n,e,t,i]}const[Fb,Ob,Bb,zb]=Nb();function Ed(n,t){const e=t?n?zb:Bb:n?Ob:Fb;return(i,s,a)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Re(e,s)&&s in i?e:i,s,a)}const Hb={get:Ed(!1,!1)},kb={get:Ed(!1,!0)},Gb={get:Ed(!0,!1)};const L0=new WeakMap,I0=new WeakMap,D0=new WeakMap,Vb=new WeakMap;function Wb(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xb(n){return n.__v_skip||!Object.isExtensible(n)?0:Wb(pb(n))}function Ka(n){return Gs(n)?n:Ad(n,!1,Ib,Hb,L0)}function U0(n){return Ad(n,!1,Ub,kb,I0)}function N0(n){return Ad(n,!0,Db,Gb,D0)}function Ad(n,t,e,i,s){if(!Ze(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const a=s.get(n);if(a)return a;const l=Xb(n);if(l===0)return n;const c=new Proxy(n,l===2?i:e);return s.set(n,c),c}function Ua(n){return Gs(n)?Ua(n.__v_raw):!!(n&&n.__v_isReactive)}function Gs(n){return!!(n&&n.__v_isReadonly)}function Vo(n){return!!(n&&n.__v_isShallow)}function F0(n){return n?!!n.__v_raw:!1}function Fe(n){const t=n&&n.__v_raw;return t?Fe(t):n}function qb(n){return Object.isExtensible(n)&&v0(n,"__v_skip",!0),n}const Ha=n=>Ze(n)?Ka(n):n,bd=n=>Ze(n)?N0(n):n;class O0{constructor(t,e,i,s){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new xd(()=>t(this._value),()=>Rc(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=Fe(this);return(!t._cacheable||t.effect.dirty)&&rs(t._value,t._value=t.effect.run())&&Rc(t,4),B0(t),t.effect._dirtyLevel>=2&&Rc(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Yb(n,t,e=!1){let i,s;const a=fe(n);return a?(i=n,s=Ai):(i=n.get,s=n.set),new O0(i,s,a||!s,e)}function B0(n){var t;ts&&Hs&&(n=Fe(n),b0(Hs,(t=n.dep)!=null?t:n.dep=w0(()=>n.dep=void 0,n instanceof O0?n:void 0)))}function Rc(n,t=4,e,i){n=Fe(n);const s=n.dep;s&&T0(s,t)}function ei(n){return!!(n&&n.__v_isRef===!0)}function Pe(n){return z0(n,!1)}function $b(n){return z0(n,!0)}function z0(n,t){return ei(n)?n:new Kb(n,t)}class Kb{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Fe(t),this._value=e?t:Ha(t)}get value(){return B0(this),this._value}set value(t){const e=this.__v_isShallow||Vo(t)||Gs(t);t=e?t:Fe(t),rs(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=e?t:Ha(t),Rc(this,4))}}function _e(n){return ei(n)?n.value:n}const Zb={get:(n,t,e)=>_e(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return ei(s)&&!ei(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function H0(n){return Ua(n)?n:new Proxy(n,Zb)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function es(n,t,e,i){try{return i?n(...i):n()}catch(s){au(s,t,e)}}function Hi(n,t,e,i){if(fe(n)){const s=es(n,t,e,i);return s&&m0(s)&&s.catch(a=>{au(a,t,e)}),s}if(le(n)){const s=[];for(let a=0;a<n.length;a++)s.push(Hi(n[a],t,e,i));return s}}function au(n,t,e,i=!0){const s=t?t.vnode:null;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](n,l,c)===!1)return}a=a.parent}const f=t.appContext.config.errorHandler;if(f){ls(),es(f,null,10,[n,l,c]),cs();return}}jb(n,e,s,i)}function jb(n,t,e,i=!0){console.error(n)}let ka=!1,xh=!1;const Pn=[];let tr=0;const Fo=[];let $r=null,Ds=0;const k0=Promise.resolve();let Td=null;function Jo(n){const t=Td||k0;return n?t.then(this?n.bind(this):n):t}function Jb(n){let t=tr+1,e=Pn.length;for(;t<e;){const i=t+e>>>1,s=Pn[i],a=Ga(s);a<n||a===n&&s.pre?t=i+1:e=i}return t}function wd(n){(!Pn.length||!Pn.includes(n,ka&&n.allowRecurse?tr+1:tr))&&(n.id==null?Pn.push(n):Pn.splice(Jb(n.id),0,n),G0())}function G0(){!ka&&!xh&&(xh=!0,Td=k0.then(W0))}function Qb(n){const t=Pn.indexOf(n);t>tr&&Pn.splice(t,1)}function tT(n){le(n)?Fo.push(...n):(!$r||!$r.includes(n,n.allowRecurse?Ds+1:Ds))&&Fo.push(n),G0()}function Ag(n,t,e=ka?tr+1:0){for(;e<Pn.length;e++){const i=Pn[e];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Pn.splice(e,1),e--,i()}}}function V0(n){if(Fo.length){const t=[...new Set(Fo)].sort((e,i)=>Ga(e)-Ga(i));if(Fo.length=0,$r){$r.push(...t);return}for($r=t,Ds=0;Ds<$r.length;Ds++){const e=$r[Ds];e.active!==!1&&e()}$r=null,Ds=0}}const Ga=n=>n.id==null?1/0:n.id,eT=(n,t)=>{const e=Ga(n)-Ga(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function W0(n){xh=!1,ka=!0,Pn.sort(eT);try{for(tr=0;tr<Pn.length;tr++){const t=Pn[tr];t&&t.active!==!1&&es(t,t.i,t.i?15:14)}}finally{tr=0,Pn.length=0,V0(),ka=!1,Td=null,(Pn.length||Fo.length)&&W0()}}let Oi=null,lu=null;function kc(n){const t=Oi;return Oi=n,lu=n&&n.type.__scopeId||null,t}function Rd(n){lu=n}function Cd(){lu=null}function Mh(n,t=Oi,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Ug(-1);const a=kc(t);let l;try{l=n(...s)}finally{kc(a),i._d&&Ug(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function ys(n,t,e,i){const s=n.dirs,a=t&&t.dirs;for(let l=0;l<s.length;l++){const c=s[l];a&&(c.oldValue=a[l].value);let f=c.dir[i];f&&(ls(),Hi(f,e,8,[n.el,c,n,t]),cs())}}function X0(n,t){n.shapeFlag&6&&n.component?X0(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function q0(n,t){return fe(n)?In({name:n.name},t,{setup:n}):n}const Cc=n=>!!n.type.__asyncLoader,Y0=n=>n.type.__isKeepAlive;function nT(n,t){$0(n,"a",t)}function iT(n,t){$0(n,"da",t)}function $0(n,t,e=Ln){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(cu(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Y0(s.parent.vnode)&&rT(i,t,e,s),s=s.parent}}function rT(n,t,e,i){const s=cu(t,n,i,!0);Ld(()=>{_d(i[t],s)},e)}function cu(n,t,e=Ln,i=!1){if(e){const s=e[n]||(e[n]=[]),a=t.__weh||(t.__weh=(...l)=>{ls();const c=Za(e),f=Hi(t,e,n,l);return c(),cs(),f});return i?s.unshift(a):s.push(a),a}}const Rr=n=>(t,e=Ln)=>{(!hu||n==="sp")&&cu(n,(...i)=>t(...i),e)},sT=Rr("bm"),us=Rr("m"),oT=Rr("bu"),aT=Rr("u"),Pd=Rr("bum"),Ld=Rr("um"),lT=Rr("sp"),cT=Rr("rtg"),uT=Rr("rtc");function fT(n,t=Ln){cu("ec",n,t)}const K0="components";function bg(n,t){return dT(K0,n,!0,t)||n}const hT=Symbol.for("v-ndc");function dT(n,t,e=!0,i=!1){const s=Oi||Ln;if(s){const a=s.type;if(n===K0){const c=sw(a,!1);if(c&&(c===t||c===ki(t)||c===ru(ki(t))))return a}const l=Tg(s[n]||a[n],t)||Tg(s.appContext[n],t);return!l&&i?a:l}}function Tg(n,t){return n&&(n[t]||n[ki(t)]||n[ru(ki(t))])}function jr(n,t,e,i){let s;const a=e;if(le(n)||gn(n)){s=new Array(n.length);for(let l=0,c=n.length;l<c;l++)s[l]=t(n[l],l,void 0,a)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=t(l+1,l,void 0,a)}else if(Ze(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>t(l,c,void 0,a));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,f=l.length;c<f;c++){const h=l[c];s[c]=t(n[h],h,c,a)}}else s=[];return s}const Sh=n=>n?dv(n)?Fd(n):Sh(n.parent):null,Na=In(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Sh(n.parent),$root:n=>Sh(n.root),$emit:n=>n.emit,$options:n=>Id(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,wd(n.update)}),$nextTick:n=>n.n||(n.n=Jo.bind(n.proxy)),$watch:n=>OT.bind(n)}),If=(n,t)=>n!==Qe&&!n.__isScriptSetup&&Re(n,t),pT={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:a,accessCache:l,type:c,appContext:f}=n;let h;if(t[0]!=="$"){const _=l[t];if(_!==void 0)switch(_){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return a[t]}else{if(If(i,t))return l[t]=1,i[t];if(s!==Qe&&Re(s,t))return l[t]=2,s[t];if((h=n.propsOptions[0])&&Re(h,t))return l[t]=3,a[t];if(e!==Qe&&Re(e,t))return l[t]=4,e[t];yh&&(l[t]=0)}}const d=Na[t];let p,m;if(d)return t==="$attrs"&&ti(n.attrs,"get",""),d(n);if((p=c.__cssModules)&&(p=p[t]))return p;if(e!==Qe&&Re(e,t))return l[t]=4,e[t];if(m=f.config.globalProperties,Re(m,t))return m[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:a}=n;return If(s,t)?(s[t]=e,!0):i!==Qe&&Re(i,t)?(i[t]=e,!0):Re(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(a[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:a}},l){let c;return!!e[l]||n!==Qe&&Re(n,l)||If(t,l)||(c=a[0])&&Re(c,l)||Re(i,l)||Re(Na,l)||Re(s.config.globalProperties,l)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Re(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function wg(n){return le(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let yh=!0;function mT(n){const t=Id(n),e=n.proxy,i=n.ctx;yh=!1,t.beforeCreate&&Rg(t.beforeCreate,n,"bc");const{data:s,computed:a,methods:l,watch:c,provide:f,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:M,activated:S,deactivated:x,beforeDestroy:v,beforeUnmount:w,destroyed:A,unmounted:L,render:$,renderTracked:N,renderTriggered:z,errorCaptured:Q,serverPrefetch:D,expose:P,inheritAttrs:k,components:ht,directives:ot,filters:yt}=t;if(h&&gT(h,i,null),l)for(const lt in l){const tt=l[lt];fe(tt)&&(i[lt]=tt.bind(e))}if(s){const lt=s.call(e,e);Ze(lt)&&(n.data=Ka(lt))}if(yh=!0,a)for(const lt in a){const tt=a[lt],Ot=fe(tt)?tt.bind(e,e):fe(tt.get)?tt.get.bind(e,e):Ai,Bt=!fe(tt)&&fe(tt.set)?tt.set.bind(e):Ai,Nt=nn({get:Ot,set:Bt});Object.defineProperty(i,lt,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Qt=>Nt.value=Qt})}if(c)for(const lt in c)Z0(c[lt],i,e,lt);if(f){const lt=fe(f)?f.call(e):f;Reflect.ownKeys(lt).forEach(tt=>{Pc(tt,lt[tt])})}d&&Rg(d,n,"c");function ut(lt,tt){le(tt)?tt.forEach(Ot=>lt(Ot.bind(e))):tt&&lt(tt.bind(e))}if(ut(sT,p),ut(us,m),ut(oT,_),ut(aT,M),ut(nT,S),ut(iT,x),ut(fT,Q),ut(uT,N),ut(cT,z),ut(Pd,w),ut(Ld,L),ut(lT,D),le(P))if(P.length){const lt=n.exposed||(n.exposed={});P.forEach(tt=>{Object.defineProperty(lt,tt,{get:()=>e[tt],set:Ot=>e[tt]=Ot})})}else n.exposed||(n.exposed={});$&&n.render===Ai&&(n.render=$),k!=null&&(n.inheritAttrs=k),ht&&(n.components=ht),ot&&(n.directives=ot)}function gT(n,t,e=Ai){le(n)&&(n=Eh(n));for(const i in n){const s=n[i];let a;Ze(s)?"default"in s?a=Tr(s.from||i,s.default,!0):a=Tr(s.from||i):a=Tr(s),ei(a)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[i]=a}}function Rg(n,t,e){Hi(le(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Z0(n,t,e,i){const s=i.includes(".")?cv(e,i):()=>e[i];if(gn(n)){const a=t[n];fe(a)&&Lc(s,a)}else if(fe(n))Lc(s,n.bind(e));else if(Ze(n))if(le(n))n.forEach(a=>Z0(a,t,e,i));else{const a=fe(n.handler)?n.handler.bind(e):t[n.handler];fe(a)&&Lc(s,a,n)}}function Id(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:a,config:{optionMergeStrategies:l}}=n.appContext,c=a.get(t);let f;return c?f=c:!s.length&&!e&&!i?f=t:(f={},s.length&&s.forEach(h=>Gc(f,h,l,!0)),Gc(f,t,l)),Ze(t)&&a.set(t,f),f}function Gc(n,t,e,i=!1){const{mixins:s,extends:a}=t;a&&Gc(n,a,e,!0),s&&s.forEach(l=>Gc(n,l,e,!0));for(const l in t)if(!(i&&l==="expose")){const c=_T[l]||e&&e[l];n[l]=c?c(n[l],t[l]):t[l]}return n}const _T={data:Cg,props:Pg,emits:Pg,methods:Pa,computed:Pa,beforeCreate:On,created:On,beforeMount:On,mounted:On,beforeUpdate:On,updated:On,beforeDestroy:On,beforeUnmount:On,destroyed:On,unmounted:On,activated:On,deactivated:On,errorCaptured:On,serverPrefetch:On,components:Pa,directives:Pa,watch:xT,provide:Cg,inject:vT};function Cg(n,t){return t?n?function(){return In(fe(n)?n.call(this,this):n,fe(t)?t.call(this,this):t)}:t:n}function vT(n,t){return Pa(Eh(n),Eh(t))}function Eh(n){if(le(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function On(n,t){return n?[...new Set([].concat(n,t))]:t}function Pa(n,t){return n?In(Object.create(null),n,t):t}function Pg(n,t){return n?le(n)&&le(t)?[...new Set([...n,...t])]:In(Object.create(null),wg(n),wg(t??{})):t}function xT(n,t){if(!n)return t;if(!t)return n;const e=In(Object.create(null),n);for(const i in t)e[i]=On(n[i],t[i]);return e}function j0(){return{app:null,config:{isNativeTag:hb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let MT=0;function ST(n,t){return function(i,s=null){fe(i)||(i=In({},i)),s!=null&&!Ze(s)&&(s=null);const a=j0(),l=new WeakSet;let c=!1;const f=a.app={_uid:MT++,_component:i,_props:s,_container:null,_context:a,_instance:null,version:aw,get config(){return a.config},set config(h){},use(h,...d){return l.has(h)||(h&&fe(h.install)?(l.add(h),h.install(f,...d)):fe(h)&&(l.add(h),h(f,...d))),f},mixin(h){return a.mixins.includes(h)||a.mixins.push(h),f},component(h,d){return d?(a.components[h]=d,f):a.components[h]},directive(h,d){return d?(a.directives[h]=d,f):a.directives[h]},mount(h,d,p){if(!c){const m=$e(i,s);return m.appContext=a,p===!0?p="svg":p===!1&&(p=void 0),d&&t?t(m,h):n(m,h,p),c=!0,f._container=h,h.__vue_app__=f,Fd(m.component)}},unmount(){c&&(n(null,f._container),delete f._container.__vue_app__)},provide(h,d){return a.provides[h]=d,f},runWithContext(h){const d=Oo;Oo=f;try{return h()}finally{Oo=d}}};return f}}let Oo=null;function Pc(n,t){if(Ln){let e=Ln.provides;const i=Ln.parent&&Ln.parent.provides;i===e&&(e=Ln.provides=Object.create(i)),e[n]=t}}function Tr(n,t,e=!1){const i=Ln||Oi;if(i||Oo){const s=Oo?Oo._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&fe(t)?t.call(i&&i.proxy):t}}const J0={},Q0=()=>Object.create(J0),tv=n=>Object.getPrototypeOf(n)===J0;function yT(n,t,e,i=!1){const s={},a=Q0();n.propsDefaults=Object.create(null),ev(n,t,s,a);for(const l in n.propsOptions[0])l in s||(s[l]=void 0);e?n.props=i?s:U0(s):n.type.props?n.props=s:n.props=a,n.attrs=a}function ET(n,t,e,i){const{props:s,attrs:a,vnode:{patchFlag:l}}=n,c=Fe(s),[f]=n.propsOptions;let h=!1;if((i||l>0)&&!(l&16)){if(l&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(uu(n.emitsOptions,m))continue;const _=t[m];if(f)if(Re(a,m))_!==a[m]&&(a[m]=_,h=!0);else{const M=ki(m);s[M]=Ah(f,c,M,_,n,!1)}else _!==a[m]&&(a[m]=_,h=!0)}}}else{ev(n,t,s,a)&&(h=!0);let d;for(const p in c)(!t||!Re(t,p)&&((d=Xs(p))===p||!Re(t,d)))&&(f?e&&(e[p]!==void 0||e[d]!==void 0)&&(s[p]=Ah(f,c,p,void 0,n,!0)):delete s[p]);if(a!==c)for(const p in a)(!t||!Re(t,p))&&(delete a[p],h=!0)}h&&br(n.attrs,"set","")}function ev(n,t,e,i){const[s,a]=n.propsOptions;let l=!1,c;if(t)for(let f in t){if(Da(f))continue;const h=t[f];let d;s&&Re(s,d=ki(f))?!a||!a.includes(d)?e[d]=h:(c||(c={}))[d]=h:uu(n.emitsOptions,f)||(!(f in i)||h!==i[f])&&(i[f]=h,l=!0)}if(a){const f=Fe(e),h=c||Qe;for(let d=0;d<a.length;d++){const p=a[d];e[p]=Ah(s,f,p,h[p],n,!Re(h,p))}}return l}function Ah(n,t,e,i,s,a){const l=n[e];if(l!=null){const c=Re(l,"default");if(c&&i===void 0){const f=l.default;if(l.type!==Function&&!l.skipFactory&&fe(f)){const{propsDefaults:h}=s;if(e in h)i=h[e];else{const d=Za(s);i=h[e]=f.call(null,t),d()}}else i=f}l[0]&&(a&&!c?i=!1:l[1]&&(i===""||i===Xs(e))&&(i=!0))}return i}const AT=new WeakMap;function nv(n,t,e=!1){const i=e?AT:t.propsCache,s=i.get(n);if(s)return s;const a=n.props,l={},c=[];let f=!1;if(!fe(n)){const d=p=>{f=!0;const[m,_]=nv(p,t,!0);In(l,m),_&&c.push(..._)};!e&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!a&&!f)return Ze(n)&&i.set(n,Uo),Uo;if(le(a))for(let d=0;d<a.length;d++){const p=ki(a[d]);Lg(p)&&(l[p]=Qe)}else if(a)for(const d in a){const p=ki(d);if(Lg(p)){const m=a[d],_=l[p]=le(m)||fe(m)?{type:m}:In({},m),M=_.type;let S=!1,x=!0;if(le(M))for(let v=0;v<M.length;++v){const w=M[v],A=fe(w)&&w.name;if(A==="Boolean"){S=!0;break}else A==="String"&&(x=!1)}else S=fe(M)&&M.name==="Boolean";_[0]=S,_[1]=x,(S||Re(_,"default"))&&c.push(p)}}const h=[l,c];return Ze(n)&&i.set(n,h),h}function Lg(n){return n[0]!=="$"&&!Da(n)}const iv=n=>n[0]==="_"||n==="$stable",Dd=n=>le(n)?n.map(Ji):[Ji(n)],bT=(n,t,e)=>{if(t._n)return t;const i=Mh((...s)=>Dd(t(...s)),e);return i._c=!1,i},rv=(n,t,e)=>{const i=n._ctx;for(const s in n){if(iv(s))continue;const a=n[s];if(fe(a))t[s]=bT(s,a,i);else if(a!=null){const l=Dd(a);t[s]=()=>l}}},sv=(n,t)=>{const e=Dd(t);n.slots.default=()=>e},ov=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},TT=(n,t,e)=>{const i=n.slots=Q0();if(n.vnode.shapeFlag&32){const s=t._;s?(ov(i,t,e),e&&v0(i,"_",s,!0)):rv(t,i)}else t&&sv(n,t)},wT=(n,t,e)=>{const{vnode:i,slots:s}=n;let a=!0,l=Qe;if(i.shapeFlag&32){const c=t._;c?e&&c===1?a=!1:ov(s,t,e):(a=!t.$stable,rv(t,s)),l=t}else t&&(sv(n,t),l={default:1});if(a)for(const c in s)!iv(c)&&l[c]==null&&delete s[c]};function bh(n,t,e,i,s=!1){if(le(n)){n.forEach((m,_)=>bh(m,t&&(le(t)?t[_]:t),e,i,s));return}if(Cc(i)&&!s)return;const a=i.shapeFlag&4?Fd(i.component):i.el,l=s?null:a,{i:c,r:f}=n,h=t&&t.r,d=c.refs===Qe?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==f&&(gn(h)?(d[h]=null,Re(p,h)&&(p[h]=null)):ei(h)&&(h.value=null)),fe(f))es(f,c,12,[l,d]);else{const m=gn(f),_=ei(f);if(m||_){const M=()=>{if(n.f){const S=m?Re(p,f)?p[f]:d[f]:f.value;s?le(S)&&_d(S,a):le(S)?S.includes(a)||S.push(a):m?(d[f]=[a],Re(p,f)&&(p[f]=d[f])):(f.value=[a],n.k&&(d[n.k]=f.value))}else m?(d[f]=l,Re(p,f)&&(p[f]=l)):_&&(f.value=l,n.k&&(d[n.k]=l))};l?(M.id=-1,$n(M,e)):M()}}}const RT=Symbol("_vte"),CT=n=>n.__isTeleport,$n=XT;function PT(n){return LT(n)}function LT(n,t){const e=x0();e.__VUE__=!0;const{insert:i,remove:s,patchProp:a,createElement:l,createText:c,createComment:f,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=Ai,insertStaticContent:M}=n,S=(I,U,W,et=null,rt=null,ct=null,mt=void 0,R=null,y=!!U.dynamicChildren)=>{if(I===U)return;I&&!Ma(I,U)&&(et=X(I),Qt(I,rt,ct,!0),I=null),U.patchFlag===-2&&(y=!1,U.dynamicChildren=null);const{type:O,ref:j,shapeFlag:nt}=U;switch(O){case fu:x(I,U,W,et);break;case Va:v(I,U,W,et);break;case Ic:I==null&&w(U,W,et,mt);break;case cn:ht(I,U,W,et,rt,ct,mt,R,y);break;default:nt&1?$(I,U,W,et,rt,ct,mt,R,y):nt&6?ot(I,U,W,et,rt,ct,mt,R,y):(nt&64||nt&128)&&O.process(I,U,W,et,rt,ct,mt,R,y,Rt)}j!=null&&rt&&bh(j,I&&I.ref,ct,U||I,!U)},x=(I,U,W,et)=>{if(I==null)i(U.el=c(U.children),W,et);else{const rt=U.el=I.el;U.children!==I.children&&h(rt,U.children)}},v=(I,U,W,et)=>{I==null?i(U.el=f(U.children||""),W,et):U.el=I.el},w=(I,U,W,et)=>{[I.el,I.anchor]=M(I.children,U,W,et,I.el,I.anchor)},A=({el:I,anchor:U},W,et)=>{let rt;for(;I&&I!==U;)rt=m(I),i(I,W,et),I=rt;i(U,W,et)},L=({el:I,anchor:U})=>{let W;for(;I&&I!==U;)W=m(I),s(I),I=W;s(U)},$=(I,U,W,et,rt,ct,mt,R,y)=>{U.type==="svg"?mt="svg":U.type==="math"&&(mt="mathml"),I==null?N(U,W,et,rt,ct,mt,R,y):D(I,U,rt,ct,mt,R,y)},N=(I,U,W,et,rt,ct,mt,R)=>{let y,O;const{props:j,shapeFlag:nt,transition:J,dirs:Ct}=I;if(y=I.el=l(I.type,ct,j&&j.is,j),nt&8?d(y,I.children):nt&16&&Q(I.children,y,null,et,rt,Df(I,ct),mt,R),Ct&&ys(I,null,et,"created"),z(y,I,I.scopeId,mt,et),j){for(const wt in j)wt!=="value"&&!Da(wt)&&a(y,wt,null,j[wt],ct,et);"value"in j&&a(y,"value",null,j.value,ct),(O=j.onVnodeBeforeMount)&&$i(O,et,I)}Ct&&ys(I,null,et,"beforeMount");const gt=IT(rt,J);gt&&J.beforeEnter(y),i(y,U,W),((O=j&&j.onVnodeMounted)||gt||Ct)&&$n(()=>{O&&$i(O,et,I),gt&&J.enter(y),Ct&&ys(I,null,et,"mounted")},rt)},z=(I,U,W,et,rt)=>{if(W&&_(I,W),et)for(let ct=0;ct<et.length;ct++)_(I,et[ct]);if(rt){let ct=rt.subTree;if(U===ct){const mt=rt.vnode;z(I,mt,mt.scopeId,mt.slotScopeIds,rt.parent)}}},Q=(I,U,W,et,rt,ct,mt,R,y=0)=>{for(let O=y;O<I.length;O++){const j=I[O]=R?Kr(I[O]):Ji(I[O]);S(null,j,U,W,et,rt,ct,mt,R)}},D=(I,U,W,et,rt,ct,mt)=>{const R=U.el=I.el;let{patchFlag:y,dynamicChildren:O,dirs:j}=U;y|=I.patchFlag&16;const nt=I.props||Qe,J=U.props||Qe;let Ct;if(W&&Es(W,!1),(Ct=J.onVnodeBeforeUpdate)&&$i(Ct,W,U,I),j&&ys(U,I,W,"beforeUpdate"),W&&Es(W,!0),(nt.innerHTML&&J.innerHTML==null||nt.textContent&&J.textContent==null)&&d(R,""),O?P(I.dynamicChildren,O,R,W,et,Df(U,rt),ct):mt||tt(I,U,R,null,W,et,Df(U,rt),ct,!1),y>0){if(y&16)k(R,nt,J,W,rt);else if(y&2&&nt.class!==J.class&&a(R,"class",null,J.class,rt),y&4&&a(R,"style",nt.style,J.style,rt),y&8){const gt=U.dynamicProps;for(let wt=0;wt<gt.length;wt++){const zt=gt[wt],At=nt[zt],Ut=J[zt];(Ut!==At||zt==="value")&&a(R,zt,At,Ut,rt,W)}}y&1&&I.children!==U.children&&d(R,U.children)}else!mt&&O==null&&k(R,nt,J,W,rt);((Ct=J.onVnodeUpdated)||j)&&$n(()=>{Ct&&$i(Ct,W,U,I),j&&ys(U,I,W,"updated")},et)},P=(I,U,W,et,rt,ct,mt)=>{for(let R=0;R<U.length;R++){const y=I[R],O=U[R],j=y.el&&(y.type===cn||!Ma(y,O)||y.shapeFlag&70)?p(y.el):W;S(y,O,j,null,et,rt,ct,mt,!0)}},k=(I,U,W,et,rt)=>{if(U!==W){if(U!==Qe)for(const ct in U)!Da(ct)&&!(ct in W)&&a(I,ct,U[ct],null,rt,et);for(const ct in W){if(Da(ct))continue;const mt=W[ct],R=U[ct];mt!==R&&ct!=="value"&&a(I,ct,R,mt,rt,et)}"value"in W&&a(I,"value",U.value,W.value,rt)}},ht=(I,U,W,et,rt,ct,mt,R,y)=>{const O=U.el=I?I.el:c(""),j=U.anchor=I?I.anchor:c("");let{patchFlag:nt,dynamicChildren:J,slotScopeIds:Ct}=U;Ct&&(R=R?R.concat(Ct):Ct),I==null?(i(O,W,et),i(j,W,et),Q(U.children||[],W,j,rt,ct,mt,R,y)):nt>0&&nt&64&&J&&I.dynamicChildren?(P(I.dynamicChildren,J,W,rt,ct,mt,R),(U.key!=null||rt&&U===rt.subTree)&&av(I,U,!0)):tt(I,U,W,j,rt,ct,mt,R,y)},ot=(I,U,W,et,rt,ct,mt,R,y)=>{U.slotScopeIds=R,I==null?U.shapeFlag&512?rt.ctx.activate(U,W,et,mt,y):yt(U,W,et,rt,ct,mt,y):Mt(I,U,y)},yt=(I,U,W,et,rt,ct,mt)=>{const R=I.component=tw(I,et,rt);if(Y0(I)&&(R.ctx.renderer=Rt),ew(R,!1,mt),R.asyncDep){if(rt&&rt.registerDep(R,ut,mt),!I.el){const y=R.subTree=$e(Va);v(null,y,U,W)}}else ut(R,I,U,W,rt,ct,mt)},Mt=(I,U,W)=>{const et=U.component=I.component;if(GT(I,U,W))if(et.asyncDep&&!et.asyncResolved){lt(et,U,W);return}else et.next=U,Qb(et.update),et.effect.dirty=!0,et.update();else U.el=I.el,et.vnode=U},ut=(I,U,W,et,rt,ct,mt)=>{const R=()=>{if(I.isMounted){let{next:j,bu:nt,u:J,parent:Ct,vnode:gt}=I;{const ae=lv(I);if(ae){j&&(j.el=gt.el,lt(I,j,mt)),ae.asyncDep.then(()=>{I.isUnmounted||R()});return}}let wt=j,zt;Es(I,!1),j?(j.el=gt.el,lt(I,j,mt)):j=gt,nt&&Pf(nt),(zt=j.props&&j.props.onVnodeBeforeUpdate)&&$i(zt,Ct,j,gt),Es(I,!0);const At=Uf(I),Ut=I.subTree;I.subTree=At,S(Ut,At,p(Ut.el),X(Ut),I,rt,ct),j.el=At.el,wt===null&&VT(I,At.el),J&&$n(J,rt),(zt=j.props&&j.props.onVnodeUpdated)&&$n(()=>$i(zt,Ct,j,gt),rt)}else{let j;const{el:nt,props:J}=U,{bm:Ct,m:gt,parent:wt}=I,zt=Cc(U);if(Es(I,!1),Ct&&Pf(Ct),!zt&&(j=J&&J.onVnodeBeforeMount)&&$i(j,wt,U),Es(I,!0),nt&&B){const At=()=>{I.subTree=Uf(I),B(nt,I.subTree,I,rt,null)};zt?U.type.__asyncLoader().then(()=>!I.isUnmounted&&At()):At()}else{const At=I.subTree=Uf(I);S(null,At,W,et,I,rt,ct),U.el=At.el}if(gt&&$n(gt,rt),!zt&&(j=J&&J.onVnodeMounted)){const At=U;$n(()=>$i(j,wt,At),rt)}(U.shapeFlag&256||wt&&Cc(wt.vnode)&&wt.vnode.shapeFlag&256)&&I.a&&$n(I.a,rt),I.isMounted=!0,U=W=et=null}},y=I.effect=new xd(R,Ai,()=>wd(O),I.scope),O=I.update=()=>{y.dirty&&y.run()};O.i=I,O.id=I.uid,Es(I,!0),O()},lt=(I,U,W)=>{U.component=I;const et=I.vnode.props;I.vnode=U,I.next=null,ET(I,U.props,et,W),wT(I,U.children,W),ls(),Ag(I),cs()},tt=(I,U,W,et,rt,ct,mt,R,y=!1)=>{const O=I&&I.children,j=I?I.shapeFlag:0,nt=U.children,{patchFlag:J,shapeFlag:Ct}=U;if(J>0){if(J&128){Bt(O,nt,W,et,rt,ct,mt,R,y);return}else if(J&256){Ot(O,nt,W,et,rt,ct,mt,R,y);return}}Ct&8?(j&16&&Ft(O,rt,ct),nt!==O&&d(W,nt)):j&16?Ct&16?Bt(O,nt,W,et,rt,ct,mt,R,y):Ft(O,rt,ct,!0):(j&8&&d(W,""),Ct&16&&Q(nt,W,et,rt,ct,mt,R,y))},Ot=(I,U,W,et,rt,ct,mt,R,y)=>{I=I||Uo,U=U||Uo;const O=I.length,j=U.length,nt=Math.min(O,j);let J;for(J=0;J<nt;J++){const Ct=U[J]=y?Kr(U[J]):Ji(U[J]);S(I[J],Ct,W,null,rt,ct,mt,R,y)}O>j?Ft(I,rt,ct,!0,!1,nt):Q(U,W,et,rt,ct,mt,R,y,nt)},Bt=(I,U,W,et,rt,ct,mt,R,y)=>{let O=0;const j=U.length;let nt=I.length-1,J=j-1;for(;O<=nt&&O<=J;){const Ct=I[O],gt=U[O]=y?Kr(U[O]):Ji(U[O]);if(Ma(Ct,gt))S(Ct,gt,W,null,rt,ct,mt,R,y);else break;O++}for(;O<=nt&&O<=J;){const Ct=I[nt],gt=U[J]=y?Kr(U[J]):Ji(U[J]);if(Ma(Ct,gt))S(Ct,gt,W,null,rt,ct,mt,R,y);else break;nt--,J--}if(O>nt){if(O<=J){const Ct=J+1,gt=Ct<j?U[Ct].el:et;for(;O<=J;)S(null,U[O]=y?Kr(U[O]):Ji(U[O]),W,gt,rt,ct,mt,R,y),O++}}else if(O>J)for(;O<=nt;)Qt(I[O],rt,ct,!0),O++;else{const Ct=O,gt=O,wt=new Map;for(O=gt;O<=J;O++){const Zt=U[O]=y?Kr(U[O]):Ji(U[O]);Zt.key!=null&&wt.set(Zt.key,O)}let zt,At=0;const Ut=J-gt+1;let ae=!1,jt=0;const Vt=new Array(Ut);for(O=0;O<Ut;O++)Vt[O]=0;for(O=Ct;O<=nt;O++){const Zt=I[O];if(At>=Ut){Qt(Zt,rt,ct,!0);continue}let ve;if(Zt.key!=null)ve=wt.get(Zt.key);else for(zt=gt;zt<=J;zt++)if(Vt[zt-gt]===0&&Ma(Zt,U[zt])){ve=zt;break}ve===void 0?Qt(Zt,rt,ct,!0):(Vt[ve-gt]=O+1,ve>=jt?jt=ve:ae=!0,S(Zt,U[ve],W,null,rt,ct,mt,R,y),At++)}const ee=ae?DT(Vt):Uo;for(zt=ee.length-1,O=Ut-1;O>=0;O--){const Zt=gt+O,ve=U[Zt],G=Zt+1<j?U[Zt+1].el:et;Vt[O]===0?S(null,ve,W,G,rt,ct,mt,R,y):ae&&(zt<0||O!==ee[zt]?Nt(ve,W,G,2):zt--)}}},Nt=(I,U,W,et,rt=null)=>{const{el:ct,type:mt,transition:R,children:y,shapeFlag:O}=I;if(O&6){Nt(I.component.subTree,U,W,et);return}if(O&128){I.suspense.move(U,W,et);return}if(O&64){mt.move(I,U,W,Rt);return}if(mt===cn){i(ct,U,W);for(let nt=0;nt<y.length;nt++)Nt(y[nt],U,W,et);i(I.anchor,U,W);return}if(mt===Ic){A(I,U,W);return}if(et!==2&&O&1&&R)if(et===0)R.beforeEnter(ct),i(ct,U,W),$n(()=>R.enter(ct),rt);else{const{leave:nt,delayLeave:J,afterLeave:Ct}=R,gt=()=>i(ct,U,W),wt=()=>{nt(ct,()=>{gt(),Ct&&Ct()})};J?J(ct,gt,wt):wt()}else i(ct,U,W)},Qt=(I,U,W,et=!1,rt=!1)=>{const{type:ct,props:mt,ref:R,children:y,dynamicChildren:O,shapeFlag:j,patchFlag:nt,dirs:J,cacheIndex:Ct}=I;if(nt===-2&&(rt=!1),R!=null&&bh(R,null,W,I,!0),Ct!=null&&(U.renderCache[Ct]=void 0),j&256){U.ctx.deactivate(I);return}const gt=j&1&&J,wt=!Cc(I);let zt;if(wt&&(zt=mt&&mt.onVnodeBeforeUnmount)&&$i(zt,U,I),j&6)Tt(I.component,W,et);else{if(j&128){I.suspense.unmount(W,et);return}gt&&ys(I,null,U,"beforeUnmount"),j&64?I.type.remove(I,U,W,Rt,et):O&&!O.hasOnce&&(ct!==cn||nt>0&&nt&64)?Ft(O,U,W,!1,!0):(ct===cn&&nt&384||!rt&&j&16)&&Ft(y,U,W),et&&xe(I)}(wt&&(zt=mt&&mt.onVnodeUnmounted)||gt)&&$n(()=>{zt&&$i(zt,U,I),gt&&ys(I,null,U,"unmounted")},W)},xe=I=>{const{type:U,el:W,anchor:et,transition:rt}=I;if(U===cn){dt(W,et);return}if(U===Ic){L(I);return}const ct=()=>{s(W),rt&&!rt.persisted&&rt.afterLeave&&rt.afterLeave()};if(I.shapeFlag&1&&rt&&!rt.persisted){const{leave:mt,delayLeave:R}=rt,y=()=>mt(W,ct);R?R(I.el,ct,y):y()}else ct()},dt=(I,U)=>{let W;for(;I!==U;)W=m(I),s(I),I=W;s(U)},Tt=(I,U,W)=>{const{bum:et,scope:rt,update:ct,subTree:mt,um:R,m:y,a:O}=I;Ig(y),Ig(O),et&&Pf(et),rt.stop(),ct&&(ct.active=!1,Qt(mt,I,U,W)),R&&$n(R,U),$n(()=>{I.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},Ft=(I,U,W,et=!1,rt=!1,ct=0)=>{for(let mt=ct;mt<I.length;mt++)Qt(I[mt],U,W,et,rt)},X=I=>{if(I.shapeFlag&6)return X(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const U=m(I.anchor||I.el),W=U&&U[RT];return W?m(W):U};let vt=!1;const pt=(I,U,W)=>{I==null?U._vnode&&Qt(U._vnode,null,null,!0):S(U._vnode||null,I,U,null,null,null,W),U._vnode=I,vt||(vt=!0,Ag(),V0(),vt=!1)},Rt={p:S,um:Qt,m:Nt,r:xe,mt:yt,mc:Q,pc:tt,pbc:P,n:X,o:n};let $t,B;return{render:pt,hydrate:$t,createApp:ST(pt,$t)}}function Df({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Es({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function IT(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function av(n,t,e=!1){const i=n.children,s=t.children;if(le(i)&&le(s))for(let a=0;a<i.length;a++){const l=i[a];let c=s[a];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[a]=Kr(s[a]),c.el=l.el),!e&&c.patchFlag!==-2&&av(l,c)),c.type===fu&&(c.el=l.el)}}function DT(n){const t=n.slice(),e=[0];let i,s,a,l,c;const f=n.length;for(i=0;i<f;i++){const h=n[i];if(h!==0){if(s=e[e.length-1],n[s]<h){t[i]=s,e.push(i);continue}for(a=0,l=e.length-1;a<l;)c=a+l>>1,n[e[c]]<h?a=c+1:l=c;h<n[e[a]]&&(a>0&&(t[i]=e[a-1]),e[a]=i)}}for(a=e.length,l=e[a-1];a-- >0;)e[a]=l,l=t[l];return e}function lv(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:lv(t)}function Ig(n){if(n)for(let t=0;t<n.length;t++)n[t].active=!1}const UT=Symbol.for("v-scx"),NT=()=>Tr(UT);function FT(n,t){return Ud(n,null,t)}const tc={};function Lc(n,t,e){return Ud(n,t,e)}function Ud(n,t,{immediate:e,deep:i,flush:s,once:a,onTrack:l,onTrigger:c}=Qe){if(t&&a){const N=t;t=(...z)=>{N(...z),$()}}const f=Ln,h=N=>i===!0?N:Us(N,i===!1?1:void 0);let d,p=!1,m=!1;if(ei(n)?(d=()=>n.value,p=Vo(n)):Ua(n)?(d=()=>h(n),p=!0):le(n)?(m=!0,p=n.some(N=>Ua(N)||Vo(N)),d=()=>n.map(N=>{if(ei(N))return N.value;if(Ua(N))return h(N);if(fe(N))return es(N,f,2)})):fe(n)?t?d=()=>es(n,f,2):d=()=>(_&&_(),Hi(n,f,3,[M])):d=Ai,t&&i){const N=d;d=()=>Us(N())}let _,M=N=>{_=A.onStop=()=>{es(N,f,4),_=A.onStop=void 0}},S;if(hu)if(M=Ai,t?e&&Hi(t,f,3,[d(),m?[]:void 0,M]):d(),s==="sync"){const N=NT();S=N.__watcherHandles||(N.__watcherHandles=[])}else return Ai;let x=m?new Array(n.length).fill(tc):tc;const v=()=>{if(!(!A.active||!A.dirty))if(t){const N=A.run();(i||p||(m?N.some((z,Q)=>rs(z,x[Q])):rs(N,x)))&&(_&&_(),Hi(t,f,3,[N,x===tc?void 0:m&&x[0]===tc?[]:x,M]),x=N)}else A.run()};v.allowRecurse=!!t;let w;s==="sync"?w=v:s==="post"?w=()=>$n(v,f&&f.suspense):(v.pre=!0,f&&(v.id=f.uid),w=()=>wd(v));const A=new xd(d,Ai,w),L=Tb(),$=()=>{A.stop(),L&&_d(L.effects,A)};return t?e?v():x=A.run():s==="post"?$n(A.run.bind(A),f&&f.suspense):A.run(),S&&S.push($),$}function OT(n,t,e){const i=this.proxy,s=gn(n)?n.includes(".")?cv(i,n):()=>i[n]:n.bind(i,i);let a;fe(t)?a=t:(a=t.handler,e=t);const l=Za(this),c=Ud(s,a.bind(i),e);return l(),c}function cv(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}function Us(n,t=1/0,e){if(t<=0||!Ze(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,ei(n))Us(n.value,t,e);else if(le(n))for(let i=0;i<n.length;i++)Us(n[i],t,e);else if(p0(n)||No(n))n.forEach(i=>{Us(i,t,e)});else if(_0(n)){for(const i in n)Us(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Us(n[i],t,e)}return n}const BT=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${ki(t)}Modifiers`]||n[`${Xs(t)}Modifiers`];function zT(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let s=e;const a=t.startsWith("update:"),l=a&&BT(i,t.slice(7));l&&(l.trim&&(s=e.map(d=>gn(d)?d.trim():d)),l.number&&(s=e.map(_b)));let c,f=i[c=Cf(t)]||i[c=Cf(ki(t))];!f&&a&&(f=i[c=Cf(Xs(t))]),f&&Hi(f,n,6,s);const h=i[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Hi(h,n,6,s)}}function uv(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const a=n.emits;let l={},c=!1;if(!fe(n)){const f=h=>{const d=uv(h,t,!0);d&&(c=!0,In(l,d))};!e&&t.mixins.length&&t.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}return!a&&!c?(Ze(n)&&i.set(n,null),null):(le(a)?a.forEach(f=>l[f]=null):In(l,a),Ze(n)&&i.set(n,l),l)}function uu(n,t){return!n||!eu(t)?!1:(t=t.slice(2).replace(/Once$/,""),Re(n,t[0].toLowerCase()+t.slice(1))||Re(n,Xs(t))||Re(n,t))}function Uf(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[a],slots:l,attrs:c,emit:f,render:h,renderCache:d,props:p,data:m,setupState:_,ctx:M,inheritAttrs:S}=n,x=kc(n);let v,w;try{if(e.shapeFlag&4){const L=s||i,$=L;v=Ji(h.call($,L,d,p,_,m,M)),w=c}else{const L=t;v=Ji(L.length>1?L(p,{attrs:c,slots:l,emit:f}):L(p,null)),w=t.props?c:HT(c)}}catch(L){Fa.length=0,au(L,n,1),v=$e(Va)}let A=v;if(w&&S!==!1){const L=Object.keys(w),{shapeFlag:$}=A;L.length&&$&7&&(a&&L.some(gd)&&(w=kT(w,a)),A=Wo(A,w,!1,!0))}return e.dirs&&(A=Wo(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&(A.transition=e.transition),v=A,kc(x),v}const HT=n=>{let t;for(const e in n)(e==="class"||e==="style"||eu(e))&&((t||(t={}))[e]=n[e]);return t},kT=(n,t)=>{const e={};for(const i in n)(!gd(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function GT(n,t,e){const{props:i,children:s,component:a}=n,{props:l,children:c,patchFlag:f}=t,h=a.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return i?Dg(i,l,h):!!l;if(f&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(l[m]!==i[m]&&!uu(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:i===l?!1:i?l?Dg(i,l,h):!0:!!l;return!1}function Dg(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const a=i[s];if(t[a]!==n[a]&&!uu(e,a))return!0}return!1}function VT({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const WT=n=>n.__isSuspense;function XT(n,t){t&&t.pendingBranch?le(n)?t.effects.push(...n):t.effects.push(n):tT(n)}const cn=Symbol.for("v-fgt"),fu=Symbol.for("v-txt"),Va=Symbol.for("v-cmt"),Ic=Symbol.for("v-stc"),Fa=[];let hi=null;function He(n=!1){Fa.push(hi=n?null:[])}function qT(){Fa.pop(),hi=Fa[Fa.length-1]||null}let Wa=1;function Ug(n){Wa+=n,n<0&&hi&&(hi.hasOnce=!0)}function fv(n){return n.dynamicChildren=Wa>0?hi||Uo:null,qT(),Wa>0&&hi&&hi.push(n),n}function ke(n,t,e,i,s,a){return fv(Pt(n,t,e,i,s,a,!0))}function YT(n,t,e,i,s){return fv($e(n,t,e,i,s,!0))}function Th(n){return n?n.__v_isVNode===!0:!1}function Ma(n,t){return n.type===t.type&&n.key===t.key}const hv=({key:n})=>n??null,Dc=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?gn(n)||ei(n)||fe(n)?{i:Oi,r:n,k:t,f:!!e}:n:null);function Pt(n,t=null,e=null,i=0,s=null,a=n===cn?0:1,l=!1,c=!1){const f={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&hv(t),ref:t&&Dc(t),scopeId:lu,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Oi};return c?(Nd(f,e),a&128&&n.normalize(f)):e&&(f.shapeFlag|=gn(e)?8:16),Wa>0&&!l&&hi&&(f.patchFlag>0||a&6)&&f.patchFlag!==32&&hi.push(f),f}const $e=$T;function $T(n,t=null,e=null,i=0,s=null,a=!1){if((!n||n===hT)&&(n=Va),Th(n)){const c=Wo(n,t,!0);return e&&Nd(c,e),Wa>0&&!a&&hi&&(c.shapeFlag&6?hi[hi.indexOf(n)]=c:hi.push(c)),c.patchFlag=-2,c}if(ow(n)&&(n=n.__vccOpts),t){t=KT(t);let{class:c,style:f}=t;c&&!gn(c)&&(t.class=su(c)),Ze(f)&&(F0(f)&&!le(f)&&(f=In({},f)),t.style=yr(f))}const l=gn(n)?1:WT(n)?128:CT(n)?64:Ze(n)?4:fe(n)?2:0;return Pt(n,t,e,i,s,l,a,!0)}function KT(n){return n?F0(n)||tv(n)?In({},n):n:null}function Wo(n,t,e=!1,i=!1){const{props:s,ref:a,patchFlag:l,children:c,transition:f}=n,h=t?jT(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&hv(h),ref:t&&t.ref?e&&a?le(a)?a.concat(Dc(t)):[a,Dc(t)]:Dc(t):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==cn?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:f,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Wo(n.ssContent),ssFallback:n.ssFallback&&Wo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return f&&i&&X0(d,f.clone(d)),d}function wh(n=" ",t=0){return $e(fu,null,n,t)}function ZT(n,t){const e=$e(Ic,null,n);return e.staticCount=t,e}function Ji(n){return n==null||typeof n=="boolean"?$e(Va):le(n)?$e(cn,null,n.slice()):typeof n=="object"?Kr(n):$e(fu,null,String(n))}function Kr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Wo(n)}function Nd(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(le(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Nd(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!tv(t)?t._ctx=Oi:s===3&&Oi&&(Oi.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else fe(t)?(t={default:t,_ctx:Oi},e=32):(t=String(t),i&64?(e=16,t=[wh(t)]):e=8);n.children=t,n.shapeFlag|=e}function jT(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=su([t.class,i.class]));else if(s==="style")t.style=yr([t.style,i.style]);else if(eu(s)){const a=t[s],l=i[s];l&&a!==l&&!(le(a)&&a.includes(l))&&(t[s]=a?[].concat(a,l):l)}else s!==""&&(t[s]=i[s])}return t}function $i(n,t,e,i=null){Hi(n,t,7,[e,i])}const JT=j0();let QT=0;function tw(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||JT,a={uid:QT++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ab(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nv(i,s),emitsOptions:uv(i,s),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=zT.bind(null,a),n.ce&&n.ce(a),a}let Ln=null,Vc,Rh;{const n=x0(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),a=>{s.length>1?s.forEach(l=>l(a)):s[0](a)}};Vc=t("__VUE_INSTANCE_SETTERS__",e=>Ln=e),Rh=t("__VUE_SSR_SETTERS__",e=>hu=e)}const Za=n=>{const t=Ln;return Vc(n),n.scope.on(),()=>{n.scope.off(),Vc(t)}},Ng=()=>{Ln&&Ln.scope.off(),Vc(null)};function dv(n){return n.vnode.shapeFlag&4}let hu=!1;function ew(n,t=!1,e=!1){t&&Rh(t);const{props:i,children:s}=n.vnode,a=dv(n);yT(n,i,a,t),TT(n,s,e);const l=a?nw(n,t):void 0;return t&&Rh(!1),l}function nw(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,pT);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?rw(n):null,a=Za(n);ls();const l=es(i,n,0,[n.props,s]);if(cs(),a(),m0(l)){if(l.then(Ng,Ng),t)return l.then(c=>{Fg(n,c,t)}).catch(c=>{au(c,n,0)});n.asyncDep=l}else Fg(n,l,t)}else pv(n,t)}function Fg(n,t,e){fe(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ze(t)&&(n.setupState=H0(t)),pv(n,e)}let Og;function pv(n,t,e){const i=n.type;if(!n.render){if(!t&&Og&&!i.render){const s=i.template||Id(n).template;if(s){const{isCustomElement:a,compilerOptions:l}=n.appContext.config,{delimiters:c,compilerOptions:f}=i,h=In(In({isCustomElement:a,delimiters:c},l),f);i.render=Og(s,h)}}n.render=i.render||Ai}{const s=Za(n);ls();try{mT(n)}finally{cs(),s()}}}const iw={get(n,t){return ti(n,"get",""),n[t]}};function rw(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,iw),slots:n.slots,emit:n.emit,expose:t}}function Fd(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(H0(qb(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Na)return Na[e](n)},has(t,e){return e in t||e in Na}})):n.proxy}function sw(n,t=!0){return fe(n)?n.displayName||n.name:n.name||t&&n.__name}function ow(n){return fe(n)&&"__vccOpts"in n}const nn=(n,t)=>Yb(n,t,hu);function mv(n,t,e){const i=arguments.length;return i===2?Ze(t)&&!le(t)?Th(t)?$e(n,null,[t]):$e(n,t):$e(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Th(e)&&(e=[e]),$e(n,t,e))}const aw="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const lw="http://www.w3.org/2000/svg",cw="http://www.w3.org/1998/Math/MathML",Mr=typeof document<"u"?document:null,Bg=Mr&&Mr.createElement("template"),uw={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Mr.createElementNS(lw,n):t==="mathml"?Mr.createElementNS(cw,n):e?Mr.createElement(n,{is:e}):Mr.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Mr.createTextNode(n),createComment:n=>Mr.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Mr.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,a){const l=e?e.previousSibling:t.lastChild;if(s&&(s===a||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===a||!(s=s.nextSibling)););else{Bg.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const c=Bg.content;if(i==="svg"||i==="mathml"){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}t.insertBefore(c,e)}return[l?l.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},fw=Symbol("_vtc");function hw(n,t,e){const i=n[fw];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const zg=Symbol("_vod"),dw=Symbol("_vsh"),pw=Symbol(""),mw=/(^|;)\s*display\s*:/;function gw(n,t,e){const i=n.style,s=gn(e);let a=!1;if(e&&!s){if(t)if(gn(t))for(const l of t.split(";")){const c=l.slice(0,l.indexOf(":")).trim();e[c]==null&&Uc(i,c,"")}else for(const l in t)e[l]==null&&Uc(i,l,"");for(const l in e)l==="display"&&(a=!0),Uc(i,l,e[l])}else if(s){if(t!==e){const l=i[pw];l&&(e+=";"+l),i.cssText=e,a=mw.test(e)}}else t&&n.removeAttribute("style");zg in n&&(n[zg]=a?i.display:"",n[dw]&&(i.display="none"))}const Hg=/\s*!important$/;function Uc(n,t,e){if(le(e))e.forEach(i=>Uc(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=_w(n,t);Hg.test(e)?n.setProperty(Xs(i),e.replace(Hg,""),"important"):n[i]=e}}const kg=["Webkit","Moz","ms"],Nf={};function _w(n,t){const e=Nf[t];if(e)return e;let i=ki(t);if(i!=="filter"&&i in n)return Nf[t]=i;i=ru(i);for(let s=0;s<kg.length;s++){const a=kg[s]+i;if(a in n)return Nf[t]=a}return t}const Gg="http://www.w3.org/1999/xlink";function Vg(n,t,e,i,s,a=Eb(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Gg,t.slice(6,t.length)):n.setAttributeNS(Gg,t,e):e==null||a&&!M0(e)?n.removeAttribute(t):n.setAttribute(t,a?"":as(e)?String(e):e)}function vw(n,t,e,i){if(t==="innerHTML"||t==="textContent"){if(e==null)return;n[t]=e;return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?n.getAttribute("value")||"":n.value,c=e==null?"":String(e);(l!==c||!("_value"in n))&&(n.value=c),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const l=typeof n[t];l==="boolean"?e=M0(e):e==null&&l==="string"?(e="",a=!0):l==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(t)}function xw(n,t,e,i){n.addEventListener(t,e,i)}function Mw(n,t,e,i){n.removeEventListener(t,e,i)}const Wg=Symbol("_vei");function Sw(n,t,e,i,s=null){const a=n[Wg]||(n[Wg]={}),l=a[t];if(i&&l)l.value=i;else{const[c,f]=yw(t);if(i){const h=a[t]=bw(i,s);xw(n,c,h,f)}else l&&(Mw(n,c,l,f),a[t]=void 0)}}const Xg=/(?:Once|Passive|Capture)$/;function yw(n){let t;if(Xg.test(n)){t={};let i;for(;i=n.match(Xg);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Xs(n.slice(2)),t]}let Ff=0;const Ew=Promise.resolve(),Aw=()=>Ff||(Ew.then(()=>Ff=0),Ff=Date.now());function bw(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Hi(Tw(i,e.value),t,5,[i])};return e.value=n,e.attached=Aw(),e}function Tw(n,t){if(le(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const qg=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ww=(n,t,e,i,s,a)=>{const l=s==="svg";t==="class"?hw(n,i,l):t==="style"?gw(n,e,i):eu(t)?gd(t)||Sw(n,t,e,i,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rw(n,t,i,l))?(vw(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Vg(n,t,i,l,a,t!=="value")):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Vg(n,t,i,l))};function Rw(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&qg(t)&&fe(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qg(t)&&gn(e)?!1:t in n}const Cw=In({patchProp:ww},uw);let Yg;function Pw(){return Yg||(Yg=PT(Cw))}const Lw=(...n)=>{const t=Pw().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Dw(i);if(!s)return;const a=t._component;!fe(a)&&!a.render&&!a.template&&(a.template=s.innerHTML),s.innerHTML="";const l=e(s,!1,Iw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t};function Iw(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Dw(n){return gn(n)?document.querySelector(n):n}const Cr=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Uw={name:"App"},Nw={id:"router-box"},Fw={id:"router"};function Ow(n,t,e,i,s,a){const l=bg("router-link"),c=bg("router-view");return He(),ke(cn,null,[Pt("div",Nw,[Pt("nav",Fw,[$e(l,{to:"/"},{default:Mh(()=>[wh("Home")]),_:1}),$e(l,{to:"/apple"},{default:Mh(()=>[wh("apple")]),_:1})])]),$e(c)],64)}const Bw=Cr(Uw,[["render",Ow]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Lo=typeof document<"u";function gv(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function zw(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&gv(n.default)}const ze=Object.assign;function Of(n,t){const e={};for(const i in t){const s=t[i];e[i]=Gi(s)?s.map(n):n(s)}return e}const Oa=()=>{},Gi=Array.isArray,_v=/#/g,Hw=/&/g,kw=/\//g,Gw=/=/g,Vw=/\?/g,vv=/\+/g,Ww=/%5B/g,Xw=/%5D/g,xv=/%5E/g,qw=/%60/g,Mv=/%7B/g,Yw=/%7C/g,Sv=/%7D/g,$w=/%20/g;function Od(n){return encodeURI(""+n).replace(Yw,"|").replace(Ww,"[").replace(Xw,"]")}function Kw(n){return Od(n).replace(Mv,"{").replace(Sv,"}").replace(xv,"^")}function Ch(n){return Od(n).replace(vv,"%2B").replace($w,"+").replace(_v,"%23").replace(Hw,"%26").replace(qw,"`").replace(Mv,"{").replace(Sv,"}").replace(xv,"^")}function Zw(n){return Ch(n).replace(Gw,"%3D")}function jw(n){return Od(n).replace(_v,"%23").replace(Vw,"%3F")}function Jw(n){return n==null?"":jw(n).replace(kw,"%2F")}function Xa(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Qw=/\/$/,tR=n=>n.replace(Qw,"");function Bf(n,t,e="/"){let i,s={},a="",l="";const c=t.indexOf("#");let f=t.indexOf("?");return c<f&&c>=0&&(f=-1),f>-1&&(i=t.slice(0,f),a=t.slice(f+1,c>-1?c:t.length),s=n(a)),c>-1&&(i=i||t.slice(0,c),l=t.slice(c,t.length)),i=rR(i??t,e),{fullPath:i+(a&&"?")+a+l,path:i,query:s,hash:Xa(l)}}function eR(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function $g(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function nR(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&Xo(t.matched[i],e.matched[s])&&yv(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Xo(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function yv(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!iR(n[e],t[e]))return!1;return!0}function iR(n,t){return Gi(n)?Kg(n,t):Gi(t)?Kg(t,n):n===t}function Kg(n,t){return Gi(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function rR(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let a=e.length-1,l,c;for(l=0;l<i.length;l++)if(c=i[l],c!==".")if(c==="..")a>1&&a--;else break;return e.slice(0,a).join("/")+"/"+i.slice(l).join("/")}const kr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qa;(function(n){n.pop="pop",n.push="push"})(qa||(qa={}));var Ba;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ba||(Ba={}));function sR(n){if(!n)if(Lo){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),tR(n)}const oR=/^[^#]+#/;function aR(n,t){return n.replace(oR,"#")+t}function lR(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const du=()=>({left:window.scrollX,top:window.scrollY});function cR(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=lR(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Zg(n,t){return(history.state?history.state.position-t:-1)+n}const Ph=new Map;function uR(n,t){Ph.set(n,t)}function fR(n){const t=Ph.get(n);return Ph.delete(n),t}let hR=()=>location.protocol+"//"+location.host;function Ev(n,t){const{pathname:e,search:i,hash:s}=t,a=n.indexOf("#");if(a>-1){let c=s.includes(n.slice(a))?n.slice(a).length:1,f=s.slice(c);return f[0]!=="/"&&(f="/"+f),$g(f,"")}return $g(e,n)+i+s}function dR(n,t,e,i){let s=[],a=[],l=null;const c=({state:m})=>{const _=Ev(n,location),M=e.value,S=t.value;let x=0;if(m){if(e.value=_,t.value=m,l&&l===M){l=null;return}x=S?m.position-S.position:0}else i(_);s.forEach(v=>{v(e.value,M,{delta:x,type:qa.pop,direction:x?x>0?Ba.forward:Ba.back:Ba.unknown})})};function f(){l=e.value}function h(m){s.push(m);const _=()=>{const M=s.indexOf(m);M>-1&&s.splice(M,1)};return a.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(ze({},m.state,{scroll:du()}),"")}function p(){for(const m of a)m();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:f,listen:h,destroy:p}}function jg(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?du():null}}function pR(n){const{history:t,location:e}=window,i={value:Ev(n,e)},s={value:t.state};s.value||a(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(f,h,d){const p=n.indexOf("#"),m=p>-1?(e.host&&document.querySelector("base")?n:n.slice(p))+f:hR()+n+f;try{t[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),e[d?"replace":"assign"](m)}}function l(f,h){const d=ze({},t.state,jg(s.value.back,f,s.value.forward,!0),h,{position:s.value.position});a(f,d,!0),i.value=f}function c(f,h){const d=ze({},s.value,t.state,{forward:f,scroll:du()});a(d.current,d,!0);const p=ze({},jg(i.value,f,null),{position:d.position+1},h);a(f,p,!1),i.value=f}return{location:i,state:s,push:c,replace:l}}function mR(n){n=sR(n);const t=pR(n),e=dR(n,t.state,t.location,t.replace);function i(a,l=!0){l||e.pauseListeners(),history.go(a)}const s=ze({location:"",base:n,go:i,createHref:aR.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function gR(n){return typeof n=="string"||n&&typeof n=="object"}function Av(n){return typeof n=="string"||typeof n=="symbol"}const bv=Symbol("");var Jg;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Jg||(Jg={}));function qo(n,t){return ze(new Error,{type:n,[bv]:!0},t)}function dr(n,t){return n instanceof Error&&bv in n&&(t==null||!!(n.type&t))}const Qg="[^/]+?",_R={sensitive:!1,strict:!1,start:!0,end:!0},vR=/[.+*?^${}()[\]/\\]/g;function xR(n,t){const e=ze({},_R,t),i=[];let s=e.start?"^":"";const a=[];for(const h of n){const d=h.length?[]:[90];e.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(e.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(vR,"\\$&"),_+=40;else if(m.type===1){const{value:M,repeatable:S,optional:x,regexp:v}=m;a.push({name:M,repeatable:S,optional:x});const w=v||Qg;if(w!==Qg){_+=10;try{new RegExp(`(${w})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${M}" (${w}): `+L.message)}}let A=S?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;p||(A=x&&h.length<2?`(?:/${A})`:"/"+A),x&&(A+="?"),s+=A,_+=20,x&&(_+=-8),S&&(_+=-20),w===".*"&&(_+=-50)}d.push(_)}i.push(d)}if(e.strict&&e.end){const h=i.length-1;i[h][i[h].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const l=new RegExp(s,e.sensitive?"":"i");function c(h){const d=h.match(l),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",M=a[m-1];p[M.name]=_&&M.repeatable?_.split("/"):_}return p}function f(h){let d="",p=!1;for(const m of n){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:M,repeatable:S,optional:x}=_,v=M in h?h[M]:"";if(Gi(v)&&!S)throw new Error(`Provided param "${M}" is an array but it is not repeatable (* or + modifiers)`);const w=Gi(v)?v.join("/"):v;if(!w)if(x)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${M}"`);d+=w}}return d||"/"}return{re:l,score:i,keys:a,parse:c,stringify:f}}function MR(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Tv(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const a=MR(i[e],s[e]);if(a)return a;e++}if(Math.abs(s.length-i.length)===1){if(t_(i))return 1;if(t_(s))return-1}return s.length-i.length}function t_(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const SR={type:0,value:""},yR=/[a-zA-Z0-9_]/;function ER(n){if(!n)return[[]];if(n==="/")return[[SR]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(_){throw new Error(`ERR (${e})/"${h}": ${_}`)}let e=0,i=e;const s=[];let a;function l(){a&&s.push(a),a=[]}let c=0,f,h="",d="";function p(){h&&(e===0?a.push({type:0,value:h}):e===1||e===2||e===3?(a.length>1&&(f==="*"||f==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:h,regexp:d,repeatable:f==="*"||f==="+",optional:f==="*"||f==="?"})):t("Invalid state to consume buffer"),h="")}function m(){h+=f}for(;c<n.length;){if(f=n[c++],f==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:f==="/"?(h&&p(),l()):f===":"?(p(),e=1):m();break;case 4:m(),e=i;break;case 1:f==="("?e=2:yR.test(f)?m():(p(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&c--);break;case 2:f===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+f:e=3:d+=f;break;case 3:p(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&c--,d="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${h}"`),p(),l(),s}function AR(n,t,e){const i=xR(ER(n.path),e),s=ze(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function bR(n,t){const e=[],i=new Map;t=r_({strict:!1,end:!0,sensitive:!1},t);function s(p){return i.get(p)}function a(p,m,_){const M=!_,S=n_(p);S.aliasOf=_&&_.record;const x=r_(t,p),v=[S];if("alias"in p){const L=typeof p.alias=="string"?[p.alias]:p.alias;for(const $ of L)v.push(n_(ze({},S,{components:_?_.record.components:S.components,path:$,aliasOf:_?_.record:S})))}let w,A;for(const L of v){const{path:$}=L;if(m&&$[0]!=="/"){const N=m.record.path,z=N[N.length-1]==="/"?"":"/";L.path=m.record.path+($&&z+$)}if(w=AR(L,m,x),_?_.alias.push(w):(A=A||w,A!==w&&A.alias.push(w),M&&p.name&&!i_(w)&&l(p.name)),wv(w)&&f(w),S.children){const N=S.children;for(let z=0;z<N.length;z++)a(N[z],w,_&&_.children[z])}_=_||w}return A?()=>{l(A)}:Oa}function l(p){if(Av(p)){const m=i.get(p);m&&(i.delete(p),e.splice(e.indexOf(m),1),m.children.forEach(l),m.alias.forEach(l))}else{const m=e.indexOf(p);m>-1&&(e.splice(m,1),p.record.name&&i.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function c(){return e}function f(p){const m=RR(p,e);e.splice(m,0,p),p.record.name&&!i_(p)&&i.set(p.record.name,p)}function h(p,m){let _,M={},S,x;if("name"in p&&p.name){if(_=i.get(p.name),!_)throw qo(1,{location:p});x=_.record.name,M=ze(e_(m.params,_.keys.filter(A=>!A.optional).concat(_.parent?_.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),p.params&&e_(p.params,_.keys.map(A=>A.name))),S=_.stringify(M)}else if(p.path!=null)S=p.path,_=e.find(A=>A.re.test(S)),_&&(M=_.parse(S),x=_.record.name);else{if(_=m.name?i.get(m.name):e.find(A=>A.re.test(m.path)),!_)throw qo(1,{location:p,currentLocation:m});x=_.record.name,M=ze({},m.params,p.params),S=_.stringify(M)}const v=[];let w=_;for(;w;)v.unshift(w.record),w=w.parent;return{name:x,path:S,params:M,matched:v,meta:wR(v)}}n.forEach(p=>a(p));function d(){e.length=0,i.clear()}return{addRoute:a,resolve:h,removeRoute:l,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function e_(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function n_(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:TR(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function TR(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function i_(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function wR(n){return n.reduce((t,e)=>ze(t,e.meta),{})}function r_(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function RR(n,t){let e=0,i=t.length;for(;e!==i;){const a=e+i>>1;Tv(n,t[a])<0?i=a:e=a+1}const s=CR(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function CR(n){let t=n;for(;t=t.parent;)if(wv(t)&&Tv(n,t)===0)return t}function wv({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function PR(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const a=i[s].replace(vv," "),l=a.indexOf("="),c=Xa(l<0?a:a.slice(0,l)),f=l<0?null:Xa(a.slice(l+1));if(c in t){let h=t[c];Gi(h)||(h=t[c]=[h]),h.push(f)}else t[c]=f}return t}function s_(n){let t="";for(let e in n){const i=n[e];if(e=Zw(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Gi(i)?i.map(a=>a&&Ch(a)):[i&&Ch(i)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+e,a!=null&&(t+="="+a))})}return t}function LR(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Gi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const IR=Symbol(""),o_=Symbol(""),Bd=Symbol(""),Rv=Symbol(""),Lh=Symbol("");function Sa(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Zr(n,t,e,i,s,a=l=>l()){const l=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((c,f)=>{const h=m=>{m===!1?f(qo(4,{from:e,to:t})):m instanceof Error?f(m):gR(m)?f(qo(2,{from:t,to:m})):(l&&i.enterCallbacks[s]===l&&typeof m=="function"&&l.push(m),c())},d=a(()=>n.call(i&&i.instances[s],t,e,h));let p=Promise.resolve(d);n.length<3&&(p=p.then(h)),p.catch(m=>f(m))})}function zf(n,t,e,i,s=a=>a()){const a=[];for(const l of n)for(const c in l.components){let f=l.components[c];if(!(t!=="beforeRouteEnter"&&!l.instances[c]))if(gv(f)){const d=(f.__vccOpts||f)[t];d&&a.push(Zr(d,e,i,l,c,s))}else{let h=f();a.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${l.path}"`);const p=zw(d)?d.default:d;l.mods[c]=d,l.components[c]=p;const _=(p.__vccOpts||p)[t];return _&&Zr(_,e,i,l,c,s)()}))}}return a}function a_(n){const t=Tr(Bd),e=Tr(Rv),i=nn(()=>{const f=_e(n.to);return t.resolve(f)}),s=nn(()=>{const{matched:f}=i.value,{length:h}=f,d=f[h-1],p=e.matched;if(!d||!p.length)return-1;const m=p.findIndex(Xo.bind(null,d));if(m>-1)return m;const _=l_(f[h-2]);return h>1&&l_(d)===_&&p[p.length-1].path!==_?p.findIndex(Xo.bind(null,f[h-2])):m}),a=nn(()=>s.value>-1&&FR(e.params,i.value.params)),l=nn(()=>s.value>-1&&s.value===e.matched.length-1&&yv(e.params,i.value.params));function c(f={}){return NR(f)?t[_e(n.replace)?"replace":"push"](_e(n.to)).catch(Oa):Promise.resolve()}return{route:i,href:nn(()=>i.value.href),isActive:a,isExactActive:l,navigate:c}}const DR=q0({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:a_,setup(n,{slots:t}){const e=Ka(a_(n)),{options:i}=Tr(Bd),s=nn(()=>({[c_(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[c_(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const a=t.default&&t.default(e);return n.custom?a:mv("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},a)}}}),UR=DR;function NR(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function FR(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Gi(s)||s.length!==i.length||i.some((a,l)=>a!==s[l]))return!1}return!0}function l_(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const c_=(n,t,e)=>n??t??e,OR=q0({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Tr(Lh),s=nn(()=>n.route||i.value),a=Tr(o_,0),l=nn(()=>{let h=_e(a);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=nn(()=>s.value.matched[l.value]);Pc(o_,nn(()=>l.value+1)),Pc(IR,c),Pc(Lh,s);const f=Pe();return Lc(()=>[f.value,c.value,n.name],([h,d,p],[m,_,M])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!Xo(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(S=>S(h))},{flush:"post"}),()=>{const h=s.value,d=n.name,p=c.value,m=p&&p.components[d];if(!m)return u_(e.default,{Component:m,route:h});const _=p.props[d],M=_?_===!0?h.params:typeof _=="function"?_(h):_:null,x=mv(m,ze({},M,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(p.instances[d]=null)},ref:f}));return u_(e.default,{Component:x,route:h})||x}}});function u_(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const BR=OR;function zR(n){const t=bR(n.routes,n),e=n.parseQuery||PR,i=n.stringifyQuery||s_,s=n.history,a=Sa(),l=Sa(),c=Sa(),f=$b(kr);let h=kr;Lo&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Of.bind(null,X=>""+X),p=Of.bind(null,Jw),m=Of.bind(null,Xa);function _(X,vt){let pt,Rt;return Av(X)?(pt=t.getRecordMatcher(X),Rt=vt):Rt=X,t.addRoute(Rt,pt)}function M(X){const vt=t.getRecordMatcher(X);vt&&t.removeRoute(vt)}function S(){return t.getRoutes().map(X=>X.record)}function x(X){return!!t.getRecordMatcher(X)}function v(X,vt){if(vt=ze({},vt||f.value),typeof X=="string"){const U=Bf(e,X,vt.path),W=t.resolve({path:U.path},vt),et=s.createHref(U.fullPath);return ze(U,W,{params:m(W.params),hash:Xa(U.hash),redirectedFrom:void 0,href:et})}let pt;if(X.path!=null)pt=ze({},X,{path:Bf(e,X.path,vt.path).path});else{const U=ze({},X.params);for(const W in U)U[W]==null&&delete U[W];pt=ze({},X,{params:p(U)}),vt.params=p(vt.params)}const Rt=t.resolve(pt,vt),$t=X.hash||"";Rt.params=d(m(Rt.params));const B=eR(i,ze({},X,{hash:Kw($t),path:Rt.path})),I=s.createHref(B);return ze({fullPath:B,hash:$t,query:i===s_?LR(X.query):X.query||{}},Rt,{redirectedFrom:void 0,href:I})}function w(X){return typeof X=="string"?Bf(e,X,f.value.path):ze({},X)}function A(X,vt){if(h!==X)return qo(8,{from:vt,to:X})}function L(X){return z(X)}function $(X){return L(ze(w(X),{replace:!0}))}function N(X){const vt=X.matched[X.matched.length-1];if(vt&&vt.redirect){const{redirect:pt}=vt;let Rt=typeof pt=="function"?pt(X):pt;return typeof Rt=="string"&&(Rt=Rt.includes("?")||Rt.includes("#")?Rt=w(Rt):{path:Rt},Rt.params={}),ze({query:X.query,hash:X.hash,params:Rt.path!=null?{}:X.params},Rt)}}function z(X,vt){const pt=h=v(X),Rt=f.value,$t=X.state,B=X.force,I=X.replace===!0,U=N(pt);if(U)return z(ze(w(U),{state:typeof U=="object"?ze({},$t,U.state):$t,force:B,replace:I}),vt||pt);const W=pt;W.redirectedFrom=vt;let et;return!B&&nR(i,Rt,pt)&&(et=qo(16,{to:W,from:Rt}),Nt(Rt,Rt,!0,!1)),(et?Promise.resolve(et):P(W,Rt)).catch(rt=>dr(rt)?dr(rt,2)?rt:Bt(rt):tt(rt,W,Rt)).then(rt=>{if(rt){if(dr(rt,2))return z(ze({replace:I},w(rt.to),{state:typeof rt.to=="object"?ze({},$t,rt.to.state):$t,force:B}),vt||W)}else rt=ht(W,Rt,!0,I,$t);return k(W,Rt,rt),rt})}function Q(X,vt){const pt=A(X,vt);return pt?Promise.reject(pt):Promise.resolve()}function D(X){const vt=dt.values().next().value;return vt&&typeof vt.runWithContext=="function"?vt.runWithContext(X):X()}function P(X,vt){let pt;const[Rt,$t,B]=HR(X,vt);pt=zf(Rt.reverse(),"beforeRouteLeave",X,vt);for(const U of Rt)U.leaveGuards.forEach(W=>{pt.push(Zr(W,X,vt))});const I=Q.bind(null,X,vt);return pt.push(I),Ft(pt).then(()=>{pt=[];for(const U of a.list())pt.push(Zr(U,X,vt));return pt.push(I),Ft(pt)}).then(()=>{pt=zf($t,"beforeRouteUpdate",X,vt);for(const U of $t)U.updateGuards.forEach(W=>{pt.push(Zr(W,X,vt))});return pt.push(I),Ft(pt)}).then(()=>{pt=[];for(const U of B)if(U.beforeEnter)if(Gi(U.beforeEnter))for(const W of U.beforeEnter)pt.push(Zr(W,X,vt));else pt.push(Zr(U.beforeEnter,X,vt));return pt.push(I),Ft(pt)}).then(()=>(X.matched.forEach(U=>U.enterCallbacks={}),pt=zf(B,"beforeRouteEnter",X,vt,D),pt.push(I),Ft(pt))).then(()=>{pt=[];for(const U of l.list())pt.push(Zr(U,X,vt));return pt.push(I),Ft(pt)}).catch(U=>dr(U,8)?U:Promise.reject(U))}function k(X,vt,pt){c.list().forEach(Rt=>D(()=>Rt(X,vt,pt)))}function ht(X,vt,pt,Rt,$t){const B=A(X,vt);if(B)return B;const I=vt===kr,U=Lo?history.state:{};pt&&(Rt||I?s.replace(X.fullPath,ze({scroll:I&&U&&U.scroll},$t)):s.push(X.fullPath,$t)),f.value=X,Nt(X,vt,pt,I),Bt()}let ot;function yt(){ot||(ot=s.listen((X,vt,pt)=>{if(!Tt.listening)return;const Rt=v(X),$t=N(Rt);if($t){z(ze($t,{replace:!0}),Rt).catch(Oa);return}h=Rt;const B=f.value;Lo&&uR(Zg(B.fullPath,pt.delta),du()),P(Rt,B).catch(I=>dr(I,12)?I:dr(I,2)?(z(I.to,Rt).then(U=>{dr(U,20)&&!pt.delta&&pt.type===qa.pop&&s.go(-1,!1)}).catch(Oa),Promise.reject()):(pt.delta&&s.go(-pt.delta,!1),tt(I,Rt,B))).then(I=>{I=I||ht(Rt,B,!1),I&&(pt.delta&&!dr(I,8)?s.go(-pt.delta,!1):pt.type===qa.pop&&dr(I,20)&&s.go(-1,!1)),k(Rt,B,I)}).catch(Oa)}))}let Mt=Sa(),ut=Sa(),lt;function tt(X,vt,pt){Bt(X);const Rt=ut.list();return Rt.length?Rt.forEach($t=>$t(X,vt,pt)):console.error(X),Promise.reject(X)}function Ot(){return lt&&f.value!==kr?Promise.resolve():new Promise((X,vt)=>{Mt.add([X,vt])})}function Bt(X){return lt||(lt=!X,yt(),Mt.list().forEach(([vt,pt])=>X?pt(X):vt()),Mt.reset()),X}function Nt(X,vt,pt,Rt){const{scrollBehavior:$t}=n;if(!Lo||!$t)return Promise.resolve();const B=!pt&&fR(Zg(X.fullPath,0))||(Rt||!pt)&&history.state&&history.state.scroll||null;return Jo().then(()=>$t(X,vt,B)).then(I=>I&&cR(I)).catch(I=>tt(I,X,vt))}const Qt=X=>s.go(X);let xe;const dt=new Set,Tt={currentRoute:f,listening:!0,addRoute:_,removeRoute:M,clearRoutes:t.clearRoutes,hasRoute:x,getRoutes:S,resolve:v,options:n,push:L,replace:$,go:Qt,back:()=>Qt(-1),forward:()=>Qt(1),beforeEach:a.add,beforeResolve:l.add,afterEach:c.add,onError:ut.add,isReady:Ot,install(X){const vt=this;X.component("RouterLink",UR),X.component("RouterView",BR),X.config.globalProperties.$router=vt,Object.defineProperty(X.config.globalProperties,"$route",{enumerable:!0,get:()=>_e(f)}),Lo&&!xe&&f.value===kr&&(xe=!0,L(s.location).catch($t=>{}));const pt={};for(const $t in kr)Object.defineProperty(pt,$t,{get:()=>f.value[$t],enumerable:!0});X.provide(Bd,vt),X.provide(Rv,U0(pt)),X.provide(Lh,f);const Rt=X.unmount;dt.add(X),X.unmount=function(){dt.delete(X),dt.size<1&&(h=kr,ot&&ot(),ot=null,f.value=kr,xe=!1,lt=!1),Rt()}}};function Ft(X){return X.reduce((vt,pt)=>vt.then(()=>D(pt)),Promise.resolve())}return Tt}function HR(n,t){const e=[],i=[],s=[],a=Math.max(t.matched.length,n.matched.length);for(let l=0;l<a;l++){const c=t.matched[l];c&&(n.matched.find(h=>Xo(h,c))?i.push(c):e.push(c));const f=n.matched[l];f&&(t.matched.find(h=>Xo(h,f))||s.push(f))}return[e,i,s]}function kR(n){const t=Pe(window.innerWidth-n*2),e=Pe(window.innerHeight-n*2),i=()=>{t.value=window.innerWidth-n*2,e.value=window.innerHeight-n*2};return us(()=>{window.addEventListener("resize",i)}),Pd(()=>{window.removeEventListener("resize",i)}),FT(()=>{i()}),{width:t,height:e}}function GR(n){return new Worker("/vite-vue/assets/worker-xmTTMwkA.js",{name:n==null?void 0:n.name})}function VR(){this.works=[],this.pixelX=window.innerWidth,this.pixelY=window.innerWidth,this.setPixel=function(n,t){this.pixelX=n,this.pixelY=t},this.draw=function(n){let t=n.ctx;this.pixelX,this.pixelY;let e=n.x,i=n.y,s=n.r,a=n.x2,l=n.y2,c=n.text,f=n.size,h=n.color,d=n.a,p=n.b,m=n.angle;if(t)switch(n.name){case"circle":_();break;case"point":M();break;case"line":S();break;case"crescent":x();break;case"text":v()}function _(){if(e+i+s=="NaN"){console.warn("drawCircle failed: missing parameter");return}t.beginPath(),t.arc(e,i,s,0,2*Math.PI,!1),t.fillStyle=h,t.fill()}function M(){if(e+i+f=="NaN"){console.warn("drawPoint failed: missing parameter");return}t.fillStyle=h,t.fillRect(e-f/2,i-f/2,f,f)}function S(){if(e+i+a+l=="NaN"){console.warn("drawLine failed: missing parameter");return}t.beginPath(),t.moveTo(e,i),t.lineTo(a,l),t.strokeStyle=h,t.lineWidth=f||1,t.stroke()}function x(){if(e+i+d+p+m+f=="NaN"){console.warn("drawCrescent failed: missing parameter");return}let w=Math.sqrt(d*d+p*p),A=Math.atan(d/p),L=Math.cos(m+Math.PI/2)*d*f,$=Math.sin(m+Math.PI/2)*d*f;t.beginPath(),t.arc(e,i,p*f,m,Math.PI+m,!0),t.arc(e+L,i+$,w*f,Math.PI+m+A,m-A,!1),t.fillStyle=h,t.fill()}function v(){e=Math.round(e),i=Math.round(i),t.font=f+"px Comic Sans MS",t.textBaseline="middle",t.textAlign="center",t.fillStyle=h,t.fillText(c,e,i)}}}const ln=class ln{static resetPath(t=1,e=0,i=0){t+e+i!=1&&console.warn("sum of parameter is recommend to be 1"),ln.linear=t,ln.easein=e,ln.easeout=i}static resetLeap(t=0,e=0,i=0){ln.leapLinear=t,ln.leapEasein=e,ln.leapEaseout=i}getPath(){return[ln.linear,ln.easein,ln.easeout]}getLeap(){return[ln.leapLinear,ln.leapEasein,ln.leapEaseout]}};qi(ln,"linear",-1),qi(ln,"easein",0),qi(ln,"easeout",2),qi(ln,"leapLinear",0),qi(ln,"leapEasein",-2),qi(ln,"leapEaseout",2);let Wc=ln;class Bo extends Wc{constructor(e=0,i=0){super();qi(this,"NewTarget",function(e,i,s){this.targetX=e,this.targetY=i,this.originX=this.pointX,this.originY=this.pointY,this.timer=s,this.period=s});qi(this,"ResetTo",function(e=e,i=i){this.pointX=e,this.pointY=i,this.timer=0});qi(this,"NextFrame",(function(){if(this.timer>0){this.timer--;const i=this.targetX-this.originX,s=this.targetY-this.originY,a=this.timer,l=this.period,c=1/l,f=Math.pow((a+1)/l,2)-Math.pow(a/l,2),h=Math.pow(1-(a-1)/l,2)-Math.pow(1-a/l,2),[d,p,m]=this.getPath(),[_,M,S]=this.getLeap();this.pointX+=(d*c+p*h+m*f)*i,this.pointY+=(d*c+p*h+m*f)*s+(_*c+M*h+S*f)*(-i/5+10*-i/Math.abs(i==0?1:i))}else this.timer==0&&(this.timer--,this.pointX=this.targetX,this.pointY=this.targetY)}).bind(this));this.pointX=e,this.pointY=i,this.originX=e,this.originY=i,this.targetX=e,this.targetY=i,this.period=90,this.timer=0}getPath(){return super.getPath()}getLeap(){return super.getLeap()}}const Io=new Bo;function WR(n){n.fillStyle="black",n.fillRect(0,0,n.canvas.width,n.canvas.height)}function XR(){const n=new VR;this.transitionRadian=0,this.trasitionOmega=Math.PI/1e4,this.alpha=5,this.beta=10,this.gamma=5,this.delta=10,this.dlength=.01,this.speed=1,this.useMouse=!0,this.isTransform=!0,this.updateData=e=>{this.useMouse=e.useMouse,this.isTransform=e.isTransform,this.alpha=e.alpha,this.beta=e.beta,this.gamma=e.gamma,this.delta=e.delta,this.dlength=e.dlength*.001,this.speed=e.speed},this.render=e=>{WR(e),e.save(),e.translate(-e.canvas.width*.25,0),n.works.forEach(i=>{n.draw(i)}),n.works=[],e.restore()},this.update=(e,i,s)=>{this.transitionRadian+=this.trasitionOmega*this.speed,this.motion(i,s),this.addTexture(i,s,e),this.updateFps(i,s,e)},this.reset=(e,i)=>{this.data=[];for(let l=0;l<2e3;l++){const h=1+Math.pow(.5,1),d=Math.pow(a(.5,1),1),p=Math.pow(a(0,.5),1),m={d:(h-d-p)*e,r:a(0,Math.PI*2),fakeX:e/2,fakeY:i/2,x:e/2,y:i/2,vx:[],vy:[]};m.x+=m.d*Math.cos(m.r),m.y+=m.d*Math.sin(m.r),m.fakeX=m.x,m.fakeY=m.y,this.data.push(m)}function a(l,c){return Math.random()*(c*100-l*100+1)/100+l}},this.motion=(e,i)=>{const s=this.data;for(let f=0;f<s.length;f++){const h=s[f],d=this.transitionRadian,p=Math.sin(d),m=Math.sin(d*2),_=this.isTransform?h.d/2:h.d/3*(.05+.95*(1-m)),M=_*p*.1;h.r+=Math.PI/1e3,h.x-=h.fakeX,h.y-=h.fakeY,h.fakeX=e/2+_*Math.cos(h.r+M),h.fakeY=i/2+_*Math.sin(h.r+M),h.x+=h.fakeX,h.y+=h.fakeY}for(let f=0;f<s.length;f++){const h=s[f];let d=0,p=0,m=0,_=0;for(let S=f+1;S<s.length;S++){const x=s[S],v=a(h.x,h.y,x.x,x.y),w=0;if(v<w){let A;v<w*.1&&(A=-1),v<w*.55&&(A=1*(v-w*.1)/(w*.45)),v<w&&(A=1*(w-v)/(w*.45)),d+=x.x>h.x?1:-1*A,p+=h.x>x.x?1:-1*A,m+=x.y>h.y?1:-1*A,_+=h.y>x.y?1:-1*A}}h.x+=c(h.vx),h.y+=c(h.vy);const M=100;d+=e*.5+M/2>h.x?1:-1*M,d-=e*.5-M/2<h.x?1:-1*M,m+=i/2+M/2>h.y?1:-1*M,m-=i/2-M/2<h.y?1:-1*M,l(h.vx,d),l(h.vy,m)}function a(f,h,d,p){return Math.sqrt(Math.pow(f-d,2)+Math.pow(h-p,2))}function l(f,h){f.splice(1,0,h),f.splice(60,1)}function c(f){let h=0;return f.forEach(d=>{h+=d/f.length/20}),h}},this.addTexture=(e,i,s)=>{const a=this.data;for(let l=0;l<a.length;l++){const c=a[l],f=c.x,h=c.y,d=f/e,p=h/i,m=this.equation1(d,p,i)*e,_=this.equation2(d,p,e)*i,M=h/e*255,S=f/e*255,x=Math.sin(this.transitionRadian)*255,v="rgb("+Math.abs(x).toString()+","+Math.abs(S).toString()+","+Math.abs(M).toString()+")",w={name:"point",ctx:s,size:2,x:f,y:h,color:v};n.works.push(w);const A={name:"line",ctx:s,size:2,x:f,y:h,x2:f+this.dlength*m,y2:h+this.dlength*_,color:v};n.works.push(A)}},this.equation1=(e,i,s)=>{if(this.useMouse){const a=Io.pointY/s>.2?Io.pointY/s:.2;return this.alpha*e-1/a*this.alpha*e*i}return this.alpha*e-this.beta*e*i},this.equation2=(e,i,s)=>this.useMouse?1/(Io.pointX/s>.2?Io.pointX/s:.2)*this.gamma*e*i-this.gamma*i:this.delta*e*i-this.gamma*i,this.timeBefore=Date.now();const t=new Array(100);return t.fill(16),this.updateFps=(e,i,s)=>{const a=Date.now()-this.timeBefore;this.timeBefore=Date.now(),t.push(a),t.shift();const l=t.reduce((Q,D)=>Q+D,0),c=Math.round(1e3/(l/t.length)),f=Math.PI*(Date.now()%3e3)/1500,h=(i+e)*.003,d=e*.5,p=i-h*20,m=p/e*255,_=d/e*255,M=Math.sin(this.transitionRadian)*255,S="rgb("+Math.abs(M).toString()+","+Math.abs(_).toString()+","+Math.abs(m).toString()+")",x="rgb("+Math.abs(M*.3).toString()+","+Math.abs(_*.2).toString()+","+Math.abs(m*.4).toString()+")",v={name:"circle",ctx:s,r:h*10,x:d,y:p,color:x},w={name:"crescent",ctx:s,size:h,a:1,b:9,angle:f*3,x:d,y:p,color:S},A={name:"crescent",ctx:s,size:h,a:1,b:8,angle:f*2,x:d,y:p,color:S},L={name:"crescent",ctx:s,size:h,a:1,b:7,angle:f*1,x:d,y:p,color:S},$={name:"text",ctx:s,text:"fps",size:h*4,x:d,y:p-h*3,color:S},N={name:"text",ctx:s,text:c,size:h*4,x:d,y:p+h*3,color:S},z={name:"text",ctx:s,text:"Res: "+Math.round(e)+" x "+Math.round(i),size:h*4,x:d,y:p+h*13,color:S};n.works.push(v,w,A,L,$,N,z)},this}const qR=function(){const n=new GR;return this.algorithm=new XR,this.setCanvas=(t,e)=>{this.algorithm.reset(t.width,t.height),this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.bitmap=e;const i=e.transferControlToOffscreen();n.postMessage({name:"transferControlToOffscreen",canvas:i},[i]),window.addEventListener("resize",function(){n.postMessage({name:"setOffscreen",w:t.width,h:t.height})},!1)},this.pauseWorker=t=>{n.postMessage({name:t?"requestAnimation":"cancelAnimation"})},this.render=(function(){this.algorithm.render(this.ctx)}).bind(this),this.update=(function(){this.algorithm.update(this.ctx,this.canvas.width,this.canvas.height)}).bind(this),this},ho=new qR,YR=function(){return this.validId=["dev"],this.lastId="",this.lastRequestName=[],this.request={},this.getRequestById=n=>{if(typeof isSomethingHappended<"u")return null;const t=[];for(let e in this.request)e.includes(n)&&t.push(e);return t},this.updateRequestAnimation=n=>{const t=this.getRequestById(n);t!==null&&(this.lastId=n,this.lastRequestName.forEach(e=>{cancelAnimationFrame(this.request[e].ID)}),this.lastRequestName=t,t.forEach(e=>{if(typeof this.request[e]>"u")return console.warn("invalid request");if(typeof this.request[e].method>"u")return console.warn("invalid requestMethod");this.request[e].isPause||(this.request[e].ID=requestAnimationFrame(this.request[e].method))}))},this.pauseAnimationByName=n=>{cancelAnimationFrame(this.request[n].ID),this.request[n].isPause=!0},this.resumeAnimationByName=n=>{this.request[n].isPause=!1,cancelAnimationFrame(this.request[n].ID),this.request[n].ID=requestAnimationFrame(this.request[n].method)},this.addAnimationCallback=n=>{const t=n.name||"#"+Math.random(),e=t.match(" ")?t.split(" ")[1]:t;this.request[e]=this.request[e]||{},this.request[e].method=(function s(){n(),this.request[e].ID=requestAnimationFrame(s.bind(this))}).bind(this),this.validId.some(s=>e.includes(s))||console.warn("naming issue: "+e+" should include one of following letters: "+this.validId)},this.registerAnimationCallback=(n,t)=>{this.request[n]=this.request[n]||{},this.request[n].method=(function i(){t(),this.request[n].ID=requestAnimationFrame(i.bind(this))}).bind(this),this.validId.some(i=>n.includes(i))||console.warn("naming issue: "+n+" should include one of following letters: "+this.validId)},this.io=new IntersectionObserver(n=>{n.forEach(t=>{t.intersectionRatio!==0&&this.updateRequestAnimation(t.target.id)})}),this.addSubjectElements=n=>{n.forEach(t=>{this.validId.push(t.id),this.io.unobserve(t),this.io.observe(t)})},this},nr=new YR,Cv={__name:"SlideMenuBtn",props:{menu:Object,direction:{type:String,default:"left"}},setup(n){const t=n,e=Pe(!0),i=s=>{e.value=!e.value;const a=t.menu,l=s.target,c=a.getBoundingClientRect(),f=l.getBoundingClientRect(),h={left:f.x-c.x,top:f.y-c.y};a.style[t.direction]=e.value?"":"-"+h[t.direction]+"px"};return(s,a)=>(He(),ke("button",{onClick:i,class:"slideMenu"},bn(e.value?"收起△":"展開▽"),1))}},Pr=n=>(Rd("data-v-fc951c82"),n=n(),Cd(),n),$R=["width","height"],KR=["width","height"],ZR=Pr(()=>Pt("header",{id:"header"},[Pt("h3",null,"Lotka Volterra 實驗場 + Web Woker")],-1)),jR={class:"parameter"},JR=Pr(()=>Pt("label",null,"Alpha",-1)),QR=["value"],tC=Pr(()=>Pt("label",null,"Beta",-1)),eC=["value"],nC=Pr(()=>Pt("label",null,"Gamma",-1)),iC=["value"],rC=Pr(()=>Pt("label",null,"Delta",-1)),sC=["value"],oC=Pr(()=>Pt("label",null,"Vector Size",-1)),aC=["value"],lC=Pr(()=>Pt("label",null,"Transform Speed",-1)),cC=["value"],uC={class:"controlpanel"},fC=Pr(()=>Pt("label",null,"★",-1)),hC=["value"],dC=["value"],pC=Pr(()=>Pt("div",{id:"dialogbox"},[Pt("p",{id:"dialog"},"∫此微分方程用於描述捕食者和獵物的此消彼長，沿著中心點呈現漩渦紋理")],-1)),mC={__name:"CanvasSectionS1",props:{max:Number,ratio:Number},setup(n,{expose:t}){const e=Pe(null);t({section:e});const i=Pe(null),s=Pe(null);us(async()=>{ho.setCanvas(i.value,s.value),await Jo(),nr.registerAnimationCallback("renderS1",ho.render),nr.registerAnimationCallback("updateS1",ho.update)});const a=Ka({useMouse:0,isTransform:0,alpha:5,beta:10,gamma:5,delta:10,dlength:10,speed:10});ho.algorithm.updateData(a);const l=m=>{const _=m.target.id,M=m.target.value;if(a[_]==null){console.warn("invalid key(ID): "+_+", check whether it is in object state");return}a[_]=M*1,ho.algorithm.updateData(a)},c=Pe(!0),f=Pe(!0),h=()=>{c.value=!c.value;const m=(c.value?"resume":"pause")+"AnimationByName";nr[m]("renderS1"),nr[m]("updateS1")},d=()=>{f.value=!f.value,ho.pauseWorker(f.value)},p=Pe(null);return(m,_)=>(He(),ke("section",{ref_key:"section",ref:e,class:"section",id:"S1"},[Pt("canvas",{id:"canvasS1",ref_key:"canvas",ref:i,width:n.max*n.ratio,height:n.ratio*n.max*n.ratio},null,8,$R),Pt("canvas",{id:"bitmap",ref_key:"bitmap",ref:s,width:n.max*n.ratio,height:n.ratio*n.max*n.ratio},null,8,KR),Pt("div",{ref_key:"menu",ref:p,class:"gamemenu"},[ZR,Pt("div",jR,[JR,Pt("input",{onInput:l,type:"number",id:"alpha",value:a.alpha},null,40,QR),tC,Pt("input",{onInput:l,type:"number",id:"beta",value:a.beta},null,40,eC),nC,Pt("input",{onInput:l,type:"number",id:"gamma",value:a.gamma},null,40,iC),rC,Pt("input",{onInput:l,type:"number",id:"delta",value:a.delta},null,40,sC),oC,Pt("input",{onInput:l,type:"number",id:"dlength",value:a.dlength},null,40,aC),lC,Pt("input",{onInput:l,type:"number",id:"speed",value:a.speed},null,40,cC)]),Pt("div",uC,[fC,Pt("button",{onClick:l,id:"useMouse",value:a.useMouse?0:1},bn(a.useMouse?"取消跟隨":"跟隨滑鼠"),9,hC),Pt("button",{onClick:l,id:"isTransform",value:a.isTransform?0:1},bn(a.isTransform=="1"?"取消縮}放":"加入縮放"),9,dC),Pt("button",{onClick:h,id:"pauseMain"},bn(c.value?"停止(左)":"開始(左)"),1),Pt("button",{onClick:d,id:"pauseWorker"},bn(f.value?"停止(右)":"開始(右)"),1)]),pC,$e(Cv,{menu:p.value},null,8,["menu"])],512)],512))}},gC=Cr(mC,[["__scopeId","data-v-fc951c82"]]),_C="/vite-vue/assets/Lovely%20Piano%20Song-D2Oyr38W.mp3";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="167",vC=0,f_=1,xC=2,Pv=1,MC=2,xr=3,ss=0,jn=1,Sr=2,ns=0,zo=1,h_=2,d_=3,p_=4,SC=5,Ns=100,yC=101,EC=102,AC=103,bC=104,TC=200,wC=201,RC=202,CC=203,Ih=204,Dh=205,PC=206,LC=207,IC=208,DC=209,UC=210,NC=211,FC=212,OC=213,BC=214,zC=0,HC=1,kC=2,Xc=3,GC=4,VC=5,WC=6,XC=7,Lv=0,qC=1,YC=2,is=0,$C=1,KC=2,ZC=3,jC=4,JC=5,QC=6,tP=7,Iv=300,Yo=301,$o=302,Uh=303,Nh=304,pu=306,Fh=1e3,Os=1001,Oh=1002,bi=1003,eP=1004,ec=1005,Fi=1006,Hf=1007,Bs=1008,wr=1009,Dv=1010,Uv=1011,Ya=1012,Hd=1013,Vs=1014,Er=1015,ja=1016,kd=1017,Gd=1018,Ko=1020,Nv=35902,Fv=1021,Ov=1022,Bi=1023,Bv=1024,zv=1025,Ho=1026,Zo=1027,Hv=1028,Vd=1029,kv=1030,Wd=1031,Xd=1033,Nc=33776,Fc=33777,Oc=33778,Bc=33779,Bh=35840,zh=35841,Hh=35842,kh=35843,Gh=36196,Vh=37492,Wh=37496,Xh=37808,qh=37809,Yh=37810,$h=37811,Kh=37812,Zh=37813,jh=37814,Jh=37815,Qh=37816,td=37817,ed=37818,nd=37819,id=37820,rd=37821,zc=36492,sd=36494,od=36495,Gv=36283,ad=36284,ld=36285,cd=36286,nP=3200,iP=3201,rP=0,sP=1,Jr="",Zi="srgb",fs="srgb-linear",qd="display-p3",mu="display-p3-linear",qc="linear",Ye="srgb",Yc="rec709",$c="p3",po=7680,m_=519,oP=512,aP=513,lP=514,Vv=515,cP=516,uP=517,fP=518,hP=519,g_=35044,__=35048,v_="300 es",Ar=2e3,Kc=2001;class Qo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kf=Math.PI/180,ud=180/Math.PI;function Ja(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[e&63|128]+Rn[e>>8&255]+"-"+Rn[e>>16&255]+Rn[e>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function Zn(n,t,e){return Math.max(t,Math.min(e,n))}function dP(n,t){return(n%t+t)%t}function Gf(n,t,e){return(1-e)*n+e*t}function ya(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(t=0,e=0){Oe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,l=this.y-t.y;return this.x=a*i-l*s+t.x,this.y=a*s+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class me{constructor(t,e,i,s,a,l,c,f,h){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,l,c,f,h)}set(t,e,i,s,a,l,c,f,h){const d=this.elements;return d[0]=t,d[1]=s,d[2]=c,d[3]=e,d[4]=a,d[5]=f,d[6]=i,d[7]=l,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,l=i[0],c=i[3],f=i[6],h=i[1],d=i[4],p=i[7],m=i[2],_=i[5],M=i[8],S=s[0],x=s[3],v=s[6],w=s[1],A=s[4],L=s[7],$=s[2],N=s[5],z=s[8];return a[0]=l*S+c*w+f*$,a[3]=l*x+c*A+f*N,a[6]=l*v+c*L+f*z,a[1]=h*S+d*w+p*$,a[4]=h*x+d*A+p*N,a[7]=h*v+d*L+p*z,a[2]=m*S+_*w+M*$,a[5]=m*x+_*A+M*N,a[8]=m*v+_*L+M*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],l=t[4],c=t[5],f=t[6],h=t[7],d=t[8];return e*l*d-e*c*h-i*a*d+i*c*f+s*a*h-s*l*f}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],l=t[4],c=t[5],f=t[6],h=t[7],d=t[8],p=d*l-c*h,m=c*f-d*a,_=h*a-l*f,M=e*p+i*m+s*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=p*S,t[1]=(s*h-d*i)*S,t[2]=(c*i-s*l)*S,t[3]=m*S,t[4]=(d*e-s*f)*S,t[5]=(s*a-c*e)*S,t[6]=_*S,t[7]=(i*f-h*e)*S,t[8]=(l*e-i*a)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,l,c){const f=Math.cos(a),h=Math.sin(a);return this.set(i*f,i*h,-i*(f*l+h*c)+l+t,-s*h,s*f,-s*(-h*l+f*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Vf.makeScale(t,e)),this}rotate(t){return this.premultiply(Vf.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vf=new me;function Wv(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Zc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pP(){const n=Zc("canvas");return n.style.display="block",n}const x_={};function za(n){n in x_||(x_[n]=!0,console.warn(n))}function mP(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}const M_=new me().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),S_=new me().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ea={[fs]:{transfer:qc,primaries:Yc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Zi]:{transfer:Ye,primaries:Yc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[mu]:{transfer:qc,primaries:$c,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(S_),fromReference:n=>n.applyMatrix3(M_)},[qd]:{transfer:Ye,primaries:$c,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(S_),fromReference:n=>n.applyMatrix3(M_).convertLinearToSRGB()}},gP=new Set([fs,mu]),Ne={enabled:!0,_workingColorSpace:fs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!gP.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Ea[t].toReference,s=Ea[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Ea[n].primaries},getTransfer:function(n){return n===Jr?qc:Ea[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Ea[t].luminanceCoefficients)}};function ko(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let mo;class _P{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mo===void 0&&(mo=Zc("canvas")),mo.width=t.width,mo.height=t.height;const i=mo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=mo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zc("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=ko(a[l]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ko(e[i]/255)*255):e[i]=ko(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vP=0;class Xv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vP++}),this.uuid=Ja(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,c=s.length;l<c;l++)s[l].isDataTexture?a.push(Xf(s[l].image)):a.push(Xf(s[l]))}else a=Xf(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function Xf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_P.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xP=0;class Jn extends Qo{constructor(t=Jn.DEFAULT_IMAGE,e=Jn.DEFAULT_MAPPING,i=Os,s=Os,a=Fi,l=Bs,c=Bi,f=wr,h=Jn.DEFAULT_ANISOTROPY,d=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xP++}),this.uuid=Ja(),this.name="",this.source=new Xv(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=f,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fh:t.x=t.x-Math.floor(t.x);break;case Os:t.x=t.x<0?0:1;break;case Oh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fh:t.y=t.y-Math.floor(t.y);break;case Os:t.y=t.y<0?0:1;break;case Oh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Iv;Jn.DEFAULT_ANISOTROPY=1;class Sn{constructor(t=0,e=0,i=0,s=1){Sn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*s+l[12]*a,this.y=l[1]*e+l[5]*i+l[9]*s+l[13]*a,this.z=l[2]*e+l[6]*i+l[10]*s+l[14]*a,this.w=l[3]*e+l[7]*i+l[11]*s+l[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const f=t.elements,h=f[0],d=f[4],p=f[8],m=f[1],_=f[5],M=f[9],S=f[2],x=f[6],v=f[10];if(Math.abs(d-m)<.01&&Math.abs(p-S)<.01&&Math.abs(M-x)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+S)<.1&&Math.abs(M+x)<.1&&Math.abs(h+_+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(h+1)/2,L=(_+1)/2,$=(v+1)/2,N=(d+m)/4,z=(p+S)/4,Q=(M+x)/4;return A>L&&A>$?A<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(A),s=N/i,a=z/i):L>$?L<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(L),i=N/s,a=Q/s):$<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt($),i=z/a,s=Q/a),this.set(i,s,a,e),this}let w=Math.sqrt((x-M)*(x-M)+(p-S)*(p-S)+(m-d)*(m-d));return Math.abs(w)<.001&&(w=1),this.x=(x-M)/w,this.y=(p-S)/w,this.z=(m-d)/w,this.w=Math.acos((h+_+v-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MP extends Qo{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Sn(0,0,t,e),this.scissorTest=!1,this.viewport=new Sn(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Jn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const l=i.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xv(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ws extends MP{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class qv extends Jn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=bi,this.minFilter=bi,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class SP extends Jn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=bi,this.minFilter=bi,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qa{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,l,c){let f=i[s+0],h=i[s+1],d=i[s+2],p=i[s+3];const m=a[l+0],_=a[l+1],M=a[l+2],S=a[l+3];if(c===0){t[e+0]=f,t[e+1]=h,t[e+2]=d,t[e+3]=p;return}if(c===1){t[e+0]=m,t[e+1]=_,t[e+2]=M,t[e+3]=S;return}if(p!==S||f!==m||h!==_||d!==M){let x=1-c;const v=f*m+h*_+d*M+p*S,w=v>=0?1:-1,A=1-v*v;if(A>Number.EPSILON){const $=Math.sqrt(A),N=Math.atan2($,v*w);x=Math.sin(x*N)/$,c=Math.sin(c*N)/$}const L=c*w;if(f=f*x+m*L,h=h*x+_*L,d=d*x+M*L,p=p*x+S*L,x===1-c){const $=1/Math.sqrt(f*f+h*h+d*d+p*p);f*=$,h*=$,d*=$,p*=$}}t[e]=f,t[e+1]=h,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,s,a,l){const c=i[s],f=i[s+1],h=i[s+2],d=i[s+3],p=a[l],m=a[l+1],_=a[l+2],M=a[l+3];return t[e]=c*M+d*p+f*_-h*m,t[e+1]=f*M+d*m+h*p-c*_,t[e+2]=h*M+d*_+c*m-f*p,t[e+3]=d*M-c*p-f*m-h*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,l=t._order,c=Math.cos,f=Math.sin,h=c(i/2),d=c(s/2),p=c(a/2),m=f(i/2),_=f(s/2),M=f(a/2);switch(l){case"XYZ":this._x=m*d*p+h*_*M,this._y=h*_*p-m*d*M,this._z=h*d*M+m*_*p,this._w=h*d*p-m*_*M;break;case"YXZ":this._x=m*d*p+h*_*M,this._y=h*_*p-m*d*M,this._z=h*d*M-m*_*p,this._w=h*d*p+m*_*M;break;case"ZXY":this._x=m*d*p-h*_*M,this._y=h*_*p+m*d*M,this._z=h*d*M+m*_*p,this._w=h*d*p-m*_*M;break;case"ZYX":this._x=m*d*p-h*_*M,this._y=h*_*p+m*d*M,this._z=h*d*M-m*_*p,this._w=h*d*p+m*_*M;break;case"YZX":this._x=m*d*p+h*_*M,this._y=h*_*p+m*d*M,this._z=h*d*M-m*_*p,this._w=h*d*p-m*_*M;break;case"XZY":this._x=m*d*p-h*_*M,this._y=h*_*p-m*d*M,this._z=h*d*M+m*_*p,this._w=h*d*p+m*_*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],l=e[1],c=e[5],f=e[9],h=e[2],d=e[6],p=e[10],m=i+c+p;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(d-f)*_,this._y=(a-h)*_,this._z=(l-s)*_}else if(i>c&&i>p){const _=2*Math.sqrt(1+i-c-p);this._w=(d-f)/_,this._x=.25*_,this._y=(s+l)/_,this._z=(a+h)/_}else if(c>p){const _=2*Math.sqrt(1+c-i-p);this._w=(a-h)/_,this._x=(s+l)/_,this._y=.25*_,this._z=(f+d)/_}else{const _=2*Math.sqrt(1+p-i-c);this._w=(l-s)/_,this._x=(a+h)/_,this._y=(f+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,l=t._w,c=e._x,f=e._y,h=e._z,d=e._w;return this._x=i*d+l*c+s*h-a*f,this._y=s*d+l*f+a*c-i*h,this._z=a*d+l*h+i*f-s*c,this._w=l*d-i*c-s*f-a*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,a=this._z,l=this._w;let c=l*t._w+i*t._x+s*t._y+a*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=l,this._x=i,this._y=s,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const _=1-e;return this._w=_*l+e*this._w,this._x=_*i+e*this._x,this._y=_*s+e*this._y,this._z=_*a+e*this._z,this.normalize(),this}const h=Math.sqrt(f),d=Math.atan2(h,c),p=Math.sin((1-e)*d)/h,m=Math.sin(e*d)/h;return this._w=l*p+this._w*m,this._x=i*p+this._x*m,this._y=s*p+this._y*m,this._z=a*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,i=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(y_.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(y_.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,l=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*l,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*l,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*l,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,l=t.y,c=t.z,f=t.w,h=2*(l*s-c*i),d=2*(c*e-a*s),p=2*(a*i-l*e);return this.x=e+f*h+l*p-c*d,this.y=i+f*d+c*h-a*p,this.z=s+f*p+a*d-l*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,l=e.x,c=e.y,f=e.z;return this.x=s*f-a*c,this.y=a*l-i*f,this.z=i*c-s*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return qf.copy(this).projectOnVector(t),this.sub(qf)}reflect(t){return this.sub(qf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qf=new K,y_=new Qa;class tl{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)t.isMesh===!0?t.getVertexPosition(l,Ii):Ii.fromBufferAttribute(a,l),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nc.copy(i.boundingBox)),nc.applyMatrix4(t.matrixWorld),this.union(nc)}const s=t.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Aa),ic.subVectors(this.max,Aa),go.subVectors(t.a,Aa),_o.subVectors(t.b,Aa),vo.subVectors(t.c,Aa),Gr.subVectors(_o,go),Vr.subVectors(vo,_o),As.subVectors(go,vo);let e=[0,-Gr.z,Gr.y,0,-Vr.z,Vr.y,0,-As.z,As.y,Gr.z,0,-Gr.x,Vr.z,0,-Vr.x,As.z,0,-As.x,-Gr.y,Gr.x,0,-Vr.y,Vr.x,0,-As.y,As.x,0];return!Yf(e,go,_o,vo,ic)||(e=[1,0,0,0,1,0,0,0,1],!Yf(e,go,_o,vo,ic))?!1:(rc.crossVectors(Gr,Vr),e=[rc.x,rc.y,rc.z],Yf(e,go,_o,vo,ic))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pr=[new K,new K,new K,new K,new K,new K,new K,new K],Ii=new K,nc=new tl,go=new K,_o=new K,vo=new K,Gr=new K,Vr=new K,As=new K,Aa=new K,ic=new K,rc=new K,bs=new K;function Yf(n,t,e,i,s){for(let a=0,l=n.length-3;a<=l;a+=3){bs.fromArray(n,a);const c=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),f=t.dot(bs),h=e.dot(bs),d=i.dot(bs);if(Math.max(-Math.max(f,h,d),Math.min(f,h,d))>c)return!1}return!0}const yP=new tl,ba=new K,$f=new K;class el{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):yP.setFromPoints(t).getCenter(i);let s=0;for(let a=0,l=t.length;a<l;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ba.subVectors(t,this.center);const e=ba.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ba,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($f.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ba.copy(t.center).add($f)),this.expandByPoint(ba.copy(t.center).sub($f))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mr=new K,Kf=new K,sc=new K,Wr=new K,Zf=new K,oc=new K,jf=new K;class Yd{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mr.copy(this.origin).addScaledVector(this.direction,e),mr.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Kf.copy(t).add(e).multiplyScalar(.5),sc.copy(e).sub(t).normalize(),Wr.copy(this.origin).sub(Kf);const a=t.distanceTo(e)*.5,l=-this.direction.dot(sc),c=Wr.dot(this.direction),f=-Wr.dot(sc),h=Wr.lengthSq(),d=Math.abs(1-l*l);let p,m,_,M;if(d>0)if(p=l*f-c,m=l*c-f,M=a*d,p>=0)if(m>=-M)if(m<=M){const S=1/d;p*=S,m*=S,_=p*(p+l*m+2*c)+m*(l*p+m+2*f)+h}else m=a,p=Math.max(0,-(l*m+c)),_=-p*p+m*(m+2*f)+h;else m=-a,p=Math.max(0,-(l*m+c)),_=-p*p+m*(m+2*f)+h;else m<=-M?(p=Math.max(0,-(-l*a+c)),m=p>0?-a:Math.min(Math.max(-a,-f),a),_=-p*p+m*(m+2*f)+h):m<=M?(p=0,m=Math.min(Math.max(-a,-f),a),_=m*(m+2*f)+h):(p=Math.max(0,-(l*a+c)),m=p>0?a:Math.min(Math.max(-a,-f),a),_=-p*p+m*(m+2*f)+h);else m=l>0?-a:a,p=Math.max(0,-(l*m+c)),_=-p*p+m*(m+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Kf).addScaledVector(sc,m),_}intersectSphere(t,e){mr.subVectors(t.center,this.origin);const i=mr.dot(this.direction),s=mr.dot(mr)-i*i,a=t.radius*t.radius;if(s>a)return null;const l=Math.sqrt(a-s),c=i-l,f=i+l;return f<0?null:c<0?this.at(f,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,l,c,f;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(i=(t.min.x-m.x)*h,s=(t.max.x-m.x)*h):(i=(t.max.x-m.x)*h,s=(t.min.x-m.x)*h),d>=0?(a=(t.min.y-m.y)*d,l=(t.max.y-m.y)*d):(a=(t.max.y-m.y)*d,l=(t.min.y-m.y)*d),i>l||a>s||((a>i||isNaN(i))&&(i=a),(l<s||isNaN(s))&&(s=l),p>=0?(c=(t.min.z-m.z)*p,f=(t.max.z-m.z)*p):(c=(t.max.z-m.z)*p,f=(t.min.z-m.z)*p),i>f||c>s)||((c>i||i!==i)&&(i=c),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,mr)!==null}intersectTriangle(t,e,i,s,a){Zf.subVectors(e,t),oc.subVectors(i,t),jf.crossVectors(Zf,oc);let l=this.direction.dot(jf),c;if(l>0){if(s)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Wr.subVectors(this.origin,t);const f=c*this.direction.dot(oc.crossVectors(Wr,oc));if(f<0)return null;const h=c*this.direction.dot(Zf.cross(Wr));if(h<0||f+h>l)return null;const d=-c*Wr.dot(jf);return d<0?null:this.at(d/l,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(t,e,i,s,a,l,c,f,h,d,p,m,_,M,S,x){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,l,c,f,h,d,p,m,_,M,S,x)}set(t,e,i,s,a,l,c,f,h,d,p,m,_,M,S,x){const v=this.elements;return v[0]=t,v[4]=e,v[8]=i,v[12]=s,v[1]=a,v[5]=l,v[9]=c,v[13]=f,v[2]=h,v[6]=d,v[10]=p,v[14]=m,v[3]=_,v[7]=M,v[11]=S,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/xo.setFromMatrixColumn(t,0).length(),a=1/xo.setFromMatrixColumn(t,1).length(),l=1/xo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,l=Math.cos(i),c=Math.sin(i),f=Math.cos(s),h=Math.sin(s),d=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){const m=l*d,_=l*p,M=c*d,S=c*p;e[0]=f*d,e[4]=-f*p,e[8]=h,e[1]=_+M*h,e[5]=m-S*h,e[9]=-c*f,e[2]=S-m*h,e[6]=M+_*h,e[10]=l*f}else if(t.order==="YXZ"){const m=f*d,_=f*p,M=h*d,S=h*p;e[0]=m+S*c,e[4]=M*c-_,e[8]=l*h,e[1]=l*p,e[5]=l*d,e[9]=-c,e[2]=_*c-M,e[6]=S+m*c,e[10]=l*f}else if(t.order==="ZXY"){const m=f*d,_=f*p,M=h*d,S=h*p;e[0]=m-S*c,e[4]=-l*p,e[8]=M+_*c,e[1]=_+M*c,e[5]=l*d,e[9]=S-m*c,e[2]=-l*h,e[6]=c,e[10]=l*f}else if(t.order==="ZYX"){const m=l*d,_=l*p,M=c*d,S=c*p;e[0]=f*d,e[4]=M*h-_,e[8]=m*h+S,e[1]=f*p,e[5]=S*h+m,e[9]=_*h-M,e[2]=-h,e[6]=c*f,e[10]=l*f}else if(t.order==="YZX"){const m=l*f,_=l*h,M=c*f,S=c*h;e[0]=f*d,e[4]=S-m*p,e[8]=M*p+_,e[1]=p,e[5]=l*d,e[9]=-c*d,e[2]=-h*d,e[6]=_*p+M,e[10]=m-S*p}else if(t.order==="XZY"){const m=l*f,_=l*h,M=c*f,S=c*h;e[0]=f*d,e[4]=-p,e[8]=h*d,e[1]=m*p+S,e[5]=l*d,e[9]=_*p-M,e[2]=M*p-_,e[6]=c*d,e[10]=S*p+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(EP,t,AP)}lookAt(t,e,i){const s=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Xr.crossVectors(i,ui),Xr.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Xr.crossVectors(i,ui)),Xr.normalize(),ac.crossVectors(ui,Xr),s[0]=Xr.x,s[4]=ac.x,s[8]=ui.x,s[1]=Xr.y,s[5]=ac.y,s[9]=ui.y,s[2]=Xr.z,s[6]=ac.z,s[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,l=i[0],c=i[4],f=i[8],h=i[12],d=i[1],p=i[5],m=i[9],_=i[13],M=i[2],S=i[6],x=i[10],v=i[14],w=i[3],A=i[7],L=i[11],$=i[15],N=s[0],z=s[4],Q=s[8],D=s[12],P=s[1],k=s[5],ht=s[9],ot=s[13],yt=s[2],Mt=s[6],ut=s[10],lt=s[14],tt=s[3],Ot=s[7],Bt=s[11],Nt=s[15];return a[0]=l*N+c*P+f*yt+h*tt,a[4]=l*z+c*k+f*Mt+h*Ot,a[8]=l*Q+c*ht+f*ut+h*Bt,a[12]=l*D+c*ot+f*lt+h*Nt,a[1]=d*N+p*P+m*yt+_*tt,a[5]=d*z+p*k+m*Mt+_*Ot,a[9]=d*Q+p*ht+m*ut+_*Bt,a[13]=d*D+p*ot+m*lt+_*Nt,a[2]=M*N+S*P+x*yt+v*tt,a[6]=M*z+S*k+x*Mt+v*Ot,a[10]=M*Q+S*ht+x*ut+v*Bt,a[14]=M*D+S*ot+x*lt+v*Nt,a[3]=w*N+A*P+L*yt+$*tt,a[7]=w*z+A*k+L*Mt+$*Ot,a[11]=w*Q+A*ht+L*ut+$*Bt,a[15]=w*D+A*ot+L*lt+$*Nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],l=t[1],c=t[5],f=t[9],h=t[13],d=t[2],p=t[6],m=t[10],_=t[14],M=t[3],S=t[7],x=t[11],v=t[15];return M*(+a*f*p-s*h*p-a*c*m+i*h*m+s*c*_-i*f*_)+S*(+e*f*_-e*h*m+a*l*m-s*l*_+s*h*d-a*f*d)+x*(+e*h*p-e*c*_-a*l*p+i*l*_+a*c*d-i*h*d)+v*(-s*c*d-e*f*p+e*c*m+s*l*p-i*l*m+i*f*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],l=t[4],c=t[5],f=t[6],h=t[7],d=t[8],p=t[9],m=t[10],_=t[11],M=t[12],S=t[13],x=t[14],v=t[15],w=p*x*h-S*m*h+S*f*_-c*x*_-p*f*v+c*m*v,A=M*m*h-d*x*h-M*f*_+l*x*_+d*f*v-l*m*v,L=d*S*h-M*p*h+M*c*_-l*S*_-d*c*v+l*p*v,$=M*p*f-d*S*f-M*c*m+l*S*m+d*c*x-l*p*x,N=e*w+i*A+s*L+a*$;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return t[0]=w*z,t[1]=(S*m*a-p*x*a-S*s*_+i*x*_+p*s*v-i*m*v)*z,t[2]=(c*x*a-S*f*a+S*s*h-i*x*h-c*s*v+i*f*v)*z,t[3]=(p*f*a-c*m*a-p*s*h+i*m*h+c*s*_-i*f*_)*z,t[4]=A*z,t[5]=(d*x*a-M*m*a+M*s*_-e*x*_-d*s*v+e*m*v)*z,t[6]=(M*f*a-l*x*a-M*s*h+e*x*h+l*s*v-e*f*v)*z,t[7]=(l*m*a-d*f*a+d*s*h-e*m*h-l*s*_+e*f*_)*z,t[8]=L*z,t[9]=(M*p*a-d*S*a-M*i*_+e*S*_+d*i*v-e*p*v)*z,t[10]=(l*S*a-M*c*a+M*i*h-e*S*h-l*i*v+e*c*v)*z,t[11]=(d*c*a-l*p*a-d*i*h+e*p*h+l*i*_-e*c*_)*z,t[12]=$*z,t[13]=(d*S*s-M*p*s+M*i*m-e*S*m-d*i*x+e*p*x)*z,t[14]=(M*c*s-l*S*s-M*i*f+e*S*f+l*i*x-e*c*x)*z,t[15]=(l*p*s-d*c*s+d*i*f-e*p*f-l*i*m+e*c*m)*z,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,l=t.x,c=t.y,f=t.z,h=a*l,d=a*c;return this.set(h*l+i,h*c-s*f,h*f+s*c,0,h*c+s*f,d*c+i,d*f-s*l,0,h*f-s*c,d*f+s*l,a*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,l){return this.set(1,i,a,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,l=e._y,c=e._z,f=e._w,h=a+a,d=l+l,p=c+c,m=a*h,_=a*d,M=a*p,S=l*d,x=l*p,v=c*p,w=f*h,A=f*d,L=f*p,$=i.x,N=i.y,z=i.z;return s[0]=(1-(S+v))*$,s[1]=(_+L)*$,s[2]=(M-A)*$,s[3]=0,s[4]=(_-L)*N,s[5]=(1-(m+v))*N,s[6]=(x+w)*N,s[7]=0,s[8]=(M+A)*z,s[9]=(x-w)*z,s[10]=(1-(m+S))*z,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let a=xo.set(s[0],s[1],s[2]).length();const l=xo.set(s[4],s[5],s[6]).length(),c=xo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Di.copy(this);const h=1/a,d=1/l,p=1/c;return Di.elements[0]*=h,Di.elements[1]*=h,Di.elements[2]*=h,Di.elements[4]*=d,Di.elements[5]*=d,Di.elements[6]*=d,Di.elements[8]*=p,Di.elements[9]*=p,Di.elements[10]*=p,e.setFromRotationMatrix(Di),i.x=a,i.y=l,i.z=c,this}makePerspective(t,e,i,s,a,l,c=Ar){const f=this.elements,h=2*a/(e-t),d=2*a/(i-s),p=(e+t)/(e-t),m=(i+s)/(i-s);let _,M;if(c===Ar)_=-(l+a)/(l-a),M=-2*l*a/(l-a);else if(c===Kc)_=-l/(l-a),M=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=h,f[4]=0,f[8]=p,f[12]=0,f[1]=0,f[5]=d,f[9]=m,f[13]=0,f[2]=0,f[6]=0,f[10]=_,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,s,a,l,c=Ar){const f=this.elements,h=1/(e-t),d=1/(i-s),p=1/(l-a),m=(e+t)*h,_=(i+s)*d;let M,S;if(c===Ar)M=(l+a)*p,S=-2*p;else if(c===Kc)M=a*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-m,f[1]=0,f[5]=2*d,f[9]=0,f[13]=-_,f[2]=0,f[6]=0,f[10]=S,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const xo=new K,Di=new on,EP=new K(0,0,0),AP=new K(1,1,1),Xr=new K,ac=new K,ui=new K,E_=new on,A_=new Qa;class zn{constructor(t=0,e=0,i=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],l=s[4],c=s[8],f=s[1],h=s[5],d=s[9],p=s[2],m=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(Zn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Zn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Zn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Zn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Zn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-Zn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return E_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(E_,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return A_.setFromEuler(this),this.setFromQuaternion(A_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Yv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bP=0;const b_=new K,Mo=new Qa,gr=new on,lc=new K,Ta=new K,TP=new K,wP=new Qa,T_=new K(1,0,0),w_=new K(0,1,0),R_=new K(0,0,1),C_={type:"added"},RP={type:"removed"},So={type:"childadded",child:null},Jf={type:"childremoved",child:null};class Hn extends Qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bP++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new K,e=new zn,i=new Qa,s=new K(1,1,1);function a(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new on},normalMatrix:{value:new me}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mo.setFromAxisAngle(t,e),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(t,e){return Mo.setFromAxisAngle(t,e),this.quaternion.premultiply(Mo),this}rotateX(t){return this.rotateOnAxis(T_,t)}rotateY(t){return this.rotateOnAxis(w_,t)}rotateZ(t){return this.rotateOnAxis(R_,t)}translateOnAxis(t,e){return b_.copy(t).applyQuaternion(this.quaternion),this.position.add(b_.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(T_,t)}translateY(t){return this.translateOnAxis(w_,t)}translateZ(t){return this.translateOnAxis(R_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?lc.copy(t):lc.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(Ta,lc,this.up):gr.lookAt(lc,Ta,this.up),this.quaternion.setFromRotationMatrix(gr),s&&(gr.extractRotation(s.matrixWorld),Mo.setFromRotationMatrix(gr),this.quaternion.premultiply(Mo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(C_),So.child=t,this.dispatchEvent(So),So.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(RP),Jf.child=t,this.dispatchEvent(Jf),Jf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gr.multiply(t.parent.matrixWorld)),t.applyMatrix4(gr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(C_),So.child=t,this.dispatchEvent(So),So.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,t,TP),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,wP,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let h=0,d=f.length;h<d;h++){const p=f[h];a(t.shapes,p)}else a(t.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,h=this.material.length;f<h;f++)c.push(a(t.materials,this.material[f]));s.material=c}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];s.animations.push(a(t.animations,f))}}if(e){const c=l(t.geometries),f=l(t.materials),h=l(t.textures),d=l(t.images),p=l(t.shapes),m=l(t.skeletons),_=l(t.animations),M=l(t.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=s,i;function l(c){const f=[];for(const h in c){const d=c[h];delete d.metadata,f.push(d)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Hn.DEFAULT_UP=new K(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new K,_r=new K,Qf=new K,vr=new K,yo=new K,Eo=new K,P_=new K,th=new K,eh=new K,nh=new K;class er{constructor(t=new K,e=new K,i=new K){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ui.subVectors(t,e),s.cross(Ui);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){Ui.subVectors(s,e),_r.subVectors(i,e),Qf.subVectors(t,e);const l=Ui.dot(Ui),c=Ui.dot(_r),f=Ui.dot(Qf),h=_r.dot(_r),d=_r.dot(Qf),p=l*h-c*c;if(p===0)return a.set(0,0,0),null;const m=1/p,_=(h*f-c*d)*m,M=(l*d-c*f)*m;return a.set(1-_-M,M,_)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(t,e,i,s,a,l,c,f){return this.getBarycoord(t,e,i,s,vr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,vr.x),f.addScaledVector(l,vr.y),f.addScaledVector(c,vr.z),f)}static isFrontFacing(t,e,i,s){return Ui.subVectors(i,e),_r.subVectors(t,e),Ui.cross(_r).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),Ui.cross(_r).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return er.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return er.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return er.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return er.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return er.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let l,c;yo.subVectors(s,i),Eo.subVectors(a,i),th.subVectors(t,i);const f=yo.dot(th),h=Eo.dot(th);if(f<=0&&h<=0)return e.copy(i);eh.subVectors(t,s);const d=yo.dot(eh),p=Eo.dot(eh);if(d>=0&&p<=d)return e.copy(s);const m=f*p-d*h;if(m<=0&&f>=0&&d<=0)return l=f/(f-d),e.copy(i).addScaledVector(yo,l);nh.subVectors(t,a);const _=yo.dot(nh),M=Eo.dot(nh);if(M>=0&&_<=M)return e.copy(a);const S=_*h-f*M;if(S<=0&&h>=0&&M<=0)return c=h/(h-M),e.copy(i).addScaledVector(Eo,c);const x=d*M-_*p;if(x<=0&&p-d>=0&&_-M>=0)return P_.subVectors(a,s),c=(p-d)/(p-d+(_-M)),e.copy(s).addScaledVector(P_,c);const v=1/(x+S+m);return l=S*v,c=m*v,e.copy(i).addScaledVector(yo,l).addScaledVector(Eo,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},cc={h:0,s:0,l:0};function ih(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ie{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ne.workingColorSpace){if(t=dP(t,1),e=Zn(e,0,1),i=Zn(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,l=2*i-a;this.r=ih(l,a,t+1/3),this.g=ih(l,a,t),this.b=ih(l,a,t-1/3)}return Ne.toWorkingColorSpace(this,s),this}setStyle(t,e=Zi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const l=s[1],c=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zi){const i=$v[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ko(t.r),this.g=ko(t.g),this.b=ko(t.b),this}copyLinearToSRGB(t){return this.r=Wf(t.r),this.g=Wf(t.g),this.b=Wf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zi){return Ne.fromWorkingColorSpace(Cn.copy(this),t),Math.round(Zn(Cn.r*255,0,255))*65536+Math.round(Zn(Cn.g*255,0,255))*256+Math.round(Zn(Cn.b*255,0,255))}getHexString(t=Zi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ne.workingColorSpace){Ne.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,s=Cn.g,a=Cn.b,l=Math.max(i,s,a),c=Math.min(i,s,a);let f,h;const d=(c+l)/2;if(c===l)f=0,h=0;else{const p=l-c;switch(h=d<=.5?p/(l+c):p/(2-l-c),l){case i:f=(s-a)/p+(s<a?6:0);break;case s:f=(a-i)/p+2;break;case a:f=(i-s)/p+4;break}f/=6}return t.h=f,t.s=h,t.l=d,t}getRGB(t,e=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(Cn.copy(this),e),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=Zi){Ne.fromWorkingColorSpace(Cn.copy(this),t);const e=Cn.r,i=Cn.g,s=Cn.b;return t!==Zi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(qr),this.setHSL(qr.h+t,qr.s+e,qr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qr),t.getHSL(cc);const i=Gf(qr.h,cc.h,e),s=Gf(qr.s,cc.s,e),a=Gf(qr.l,cc.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ie;Ie.NAMES=$v;let CP=0;class ta extends Qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CP++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=zo,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Dh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(i.blending=this.blending),this.side!==ss&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ih&&(i.blendSrc=this.blendSrc),this.blendDst!==Dh&&(i.blendDst=this.blendDst),this.blendEquation!==Ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==po&&(i.stencilFail=this.stencilFail),this.stencilZFail!==po&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==po&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}if(e){const a=s(t.textures),l=s(t.images);a.length>0&&(i.textures=a),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class $d extends ta{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new K,uc=new Oe;class mn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=g_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Er,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return za("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)uc.fromBufferAttribute(this,e),uc.applyMatrix3(t),this.setXY(e,uc.x,uc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyMatrix3(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ya(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ya(e,this.array)),e}setX(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ya(e,this.array)),e}setY(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ya(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ya(e,this.array)),e}setW(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Yn(e,this.array),i=Yn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Yn(e,this.array),i=Yn(i,this.array),s=Yn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=Yn(e,this.array),i=Yn(i,this.array),s=Yn(s,this.array),a=Yn(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==g_&&(t.usage=this.usage),t}}class Kv extends mn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Zv extends mn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Qn extends mn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let PP=0;const yi=new on,rh=new Hn,Ao=new K,fi=new tl,wa=new tl,Mn=new K;class ni extends Qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PP++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wv(t)?Zv:Kv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new me().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,i){return yi.makeTranslation(t,e,i),this.applyMatrix4(yi),this}scale(t,e,i){return yi.makeScale(t,e,i),this.applyMatrix4(yi),this}lookAt(t){return rh.lookAt(t),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Qn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];fi.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),e)for(let a=0,l=e.length;a<l;a++){const c=e[a];wa.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(fi.min,wa.min),fi.expandByPoint(Mn),Mn.addVectors(fi.max,wa.max),fi.expandByPoint(Mn)):(fi.expandByPoint(wa.min),fi.expandByPoint(wa.max))}fi.getCenter(i);let s=0;for(let a=0,l=t.count;a<l;a++)Mn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Mn));if(e)for(let a=0,l=e.length;a<l;a++){const c=e[a],f=this.morphTargetsRelative;for(let h=0,d=c.count;h<d;h++)Mn.fromBufferAttribute(c,h),f&&(Ao.fromBufferAttribute(t,h),Mn.add(Ao)),s=Math.max(s,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),c=[],f=[];for(let Q=0;Q<i.count;Q++)c[Q]=new K,f[Q]=new K;const h=new K,d=new K,p=new K,m=new Oe,_=new Oe,M=new Oe,S=new K,x=new K;function v(Q,D,P){h.fromBufferAttribute(i,Q),d.fromBufferAttribute(i,D),p.fromBufferAttribute(i,P),m.fromBufferAttribute(a,Q),_.fromBufferAttribute(a,D),M.fromBufferAttribute(a,P),d.sub(h),p.sub(h),_.sub(m),M.sub(m);const k=1/(_.x*M.y-M.x*_.y);isFinite(k)&&(S.copy(d).multiplyScalar(M.y).addScaledVector(p,-_.y).multiplyScalar(k),x.copy(p).multiplyScalar(_.x).addScaledVector(d,-M.x).multiplyScalar(k),c[Q].add(S),c[D].add(S),c[P].add(S),f[Q].add(x),f[D].add(x),f[P].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let Q=0,D=w.length;Q<D;++Q){const P=w[Q],k=P.start,ht=P.count;for(let ot=k,yt=k+ht;ot<yt;ot+=3)v(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const A=new K,L=new K,$=new K,N=new K;function z(Q){$.fromBufferAttribute(s,Q),N.copy($);const D=c[Q];A.copy(D),A.sub($.multiplyScalar($.dot(D))).normalize(),L.crossVectors(N,D);const k=L.dot(f[Q])<0?-1:1;l.setXYZW(Q,A.x,A.y,A.z,k)}for(let Q=0,D=w.length;Q<D;++Q){const P=w[Q],k=P.start,ht=P.count;for(let ot=k,yt=k+ht;ot<yt;ot+=3)z(t.getX(ot+0)),z(t.getX(ot+1)),z(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,_=i.count;m<_;m++)i.setXYZ(m,0,0,0);const s=new K,a=new K,l=new K,c=new K,f=new K,h=new K,d=new K,p=new K;if(t)for(let m=0,_=t.count;m<_;m+=3){const M=t.getX(m+0),S=t.getX(m+1),x=t.getX(m+2);s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,S),l.fromBufferAttribute(e,x),d.subVectors(l,a),p.subVectors(s,a),d.cross(p),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),h.fromBufferAttribute(i,x),c.add(d),f.add(d),h.add(d),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(S,f.x,f.y,f.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,_=e.count;m<_;m+=3)s.fromBufferAttribute(e,m+0),a.fromBufferAttribute(e,m+1),l.fromBufferAttribute(e,m+2),d.subVectors(l,a),p.subVectors(s,a),d.cross(p),i.setXYZ(m+0,d.x,d.y,d.z),i.setXYZ(m+1,d.x,d.y,d.z),i.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Mn.fromBufferAttribute(t,e),Mn.normalize(),t.setXYZ(e,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(c,f){const h=c.array,d=c.itemSize,p=c.normalized,m=new h.constructor(f.length*d);let _=0,M=0;for(let S=0,x=f.length;S<x;S++){c.isInterleavedBufferAttribute?_=f[S]*c.data.stride+c.offset:_=f[S]*d;for(let v=0;v<d;v++)m[M++]=h[_++]}return new mn(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ni,i=this.index.array,s=this.attributes;for(const c in s){const f=s[c],h=t(f,i);e.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const f=[],h=a[c];for(let d=0,p=h.length;d<p;d++){const m=h[d],_=t(m,i);f.push(_)}e.morphAttributes[c]=f}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,f=l.length;c<f;c++){const h=l[c];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(t[h]=f[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const f in i){const h=i[f];t.data.attributes[f]=h.toJSON(t.data)}const s={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],d=[];for(let p=0,m=h.length;p<m;p++){const _=h[p];d.push(_.toJSON(t.data))}d.length>0&&(s[f]=d,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(e))}const a=t.morphAttributes;for(const h in a){const d=[],p=a[h];for(let m=0,_=p.length;m<_;m++)d.push(p[m].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let h=0,d=l.length;h<d;h++){const p=l[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const L_=new on,Ts=new Yd,fc=new el,I_=new K,bo=new K,To=new K,wo=new K,sh=new K,hc=new K,dc=new Oe,pc=new Oe,mc=new Oe,D_=new K,U_=new K,N_=new K,gc=new K,_c=new K;class zi extends Hn{constructor(t=new ni,e=new $d){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const c=this.morphTargetInfluences;if(a&&c){hc.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const d=c[f],p=a[f];d!==0&&(sh.fromBufferAttribute(p,t),l?hc.addScaledVector(sh,d):hc.addScaledVector(sh.sub(e),d))}e.add(hc)}return e}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(a),Ts.copy(t.ray).recast(t.near),!(fc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(fc,I_)===null||Ts.origin.distanceToSquared(I_)>(t.far-t.near)**2))&&(L_.copy(a).invert(),Ts.copy(t.ray).applyMatrix4(L_),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,i){let s;const a=this.geometry,l=this.material,c=a.index,f=a.attributes.position,h=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,m=a.groups,_=a.drawRange;if(c!==null)if(Array.isArray(l))for(let M=0,S=m.length;M<S;M++){const x=m[M],v=l[x.materialIndex],w=Math.max(x.start,_.start),A=Math.min(c.count,Math.min(x.start+x.count,_.start+_.count));for(let L=w,$=A;L<$;L+=3){const N=c.getX(L),z=c.getX(L+1),Q=c.getX(L+2);s=vc(this,v,t,i,h,d,p,N,z,Q),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const M=Math.max(0,_.start),S=Math.min(c.count,_.start+_.count);for(let x=M,v=S;x<v;x+=3){const w=c.getX(x),A=c.getX(x+1),L=c.getX(x+2);s=vc(this,l,t,i,h,d,p,w,A,L),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let M=0,S=m.length;M<S;M++){const x=m[M],v=l[x.materialIndex],w=Math.max(x.start,_.start),A=Math.min(f.count,Math.min(x.start+x.count,_.start+_.count));for(let L=w,$=A;L<$;L+=3){const N=L,z=L+1,Q=L+2;s=vc(this,v,t,i,h,d,p,N,z,Q),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const M=Math.max(0,_.start),S=Math.min(f.count,_.start+_.count);for(let x=M,v=S;x<v;x+=3){const w=x,A=x+1,L=x+2;s=vc(this,l,t,i,h,d,p,w,A,L),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}}function LP(n,t,e,i,s,a,l,c){let f;if(t.side===jn?f=i.intersectTriangle(l,a,s,!0,c):f=i.intersectTriangle(s,a,l,t.side===ss,c),f===null)return null;_c.copy(c),_c.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(_c);return h<e.near||h>e.far?null:{distance:h,point:_c.clone(),object:n}}function vc(n,t,e,i,s,a,l,c,f,h){n.getVertexPosition(c,bo),n.getVertexPosition(f,To),n.getVertexPosition(h,wo);const d=LP(n,t,e,i,bo,To,wo,gc);if(d){s&&(dc.fromBufferAttribute(s,c),pc.fromBufferAttribute(s,f),mc.fromBufferAttribute(s,h),d.uv=er.getInterpolation(gc,bo,To,wo,dc,pc,mc,new Oe)),a&&(dc.fromBufferAttribute(a,c),pc.fromBufferAttribute(a,f),mc.fromBufferAttribute(a,h),d.uv1=er.getInterpolation(gc,bo,To,wo,dc,pc,mc,new Oe)),l&&(D_.fromBufferAttribute(l,c),U_.fromBufferAttribute(l,f),N_.fromBufferAttribute(l,h),d.normal=er.getInterpolation(gc,bo,To,wo,D_,U_,N_,new K),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:c,b:f,c:h,normal:new K,materialIndex:0};er.getNormal(bo,To,wo,p.normal),d.face=p}return d}class nl extends ni{constructor(t=1,e=1,i=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:l};const c=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const f=[],h=[],d=[],p=[];let m=0,_=0;M("z","y","x",-1,-1,i,e,t,l,a,0),M("z","y","x",1,-1,i,e,-t,l,a,1),M("x","z","y",1,1,t,i,e,s,l,2),M("x","z","y",1,-1,t,i,-e,s,l,3),M("x","y","z",1,-1,t,e,i,s,a,4),M("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(f),this.setAttribute("position",new Qn(h,3)),this.setAttribute("normal",new Qn(d,3)),this.setAttribute("uv",new Qn(p,2));function M(S,x,v,w,A,L,$,N,z,Q,D){const P=L/z,k=$/Q,ht=L/2,ot=$/2,yt=N/2,Mt=z+1,ut=Q+1;let lt=0,tt=0;const Ot=new K;for(let Bt=0;Bt<ut;Bt++){const Nt=Bt*k-ot;for(let Qt=0;Qt<Mt;Qt++){const xe=Qt*P-ht;Ot[S]=xe*w,Ot[x]=Nt*A,Ot[v]=yt,h.push(Ot.x,Ot.y,Ot.z),Ot[S]=0,Ot[x]=0,Ot[v]=N>0?1:-1,d.push(Ot.x,Ot.y,Ot.z),p.push(Qt/z),p.push(1-Bt/Q),lt+=1}}for(let Bt=0;Bt<Q;Bt++)for(let Nt=0;Nt<z;Nt++){const Qt=m+Nt+Mt*Bt,xe=m+Nt+Mt*(Bt+1),dt=m+(Nt+1)+Mt*(Bt+1),Tt=m+(Nt+1)+Mt*Bt;f.push(Qt,xe,Tt),f.push(xe,dt,Tt),tt+=6}c.addGroup(_,tt,D),_+=tt,m+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Bn(n){const t={};for(let e=0;e<n.length;e++){const i=jo(n[e]);for(const s in i)t[s]=i[s]}return t}function IP(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function jv(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const DP={clone:jo,merge:Bn};var UP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class os extends ta{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UP,this.fragmentShader=NP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jo(t.uniforms),this.uniformsGroups=IP(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Jv extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Ar}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new K,F_=new Oe,O_=new Oe;class Ei extends Jv{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ud*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ud*2*Math.atan(Math.tan(kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yr.x,Yr.y).multiplyScalar(-t/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yr.x,Yr.y).multiplyScalar(-t/Yr.z)}getViewSize(t,e){return this.getViewBounds(t,F_,O_),e.subVectors(O_,F_)}setViewOffset(t,e,i,s,a,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kf*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;a+=l.offsetX*s/f,e-=l.offsetY*i/h,s*=l.width/f,i*=l.height/h}const c=this.filmOffset;c!==0&&(a+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ro=-90,Co=1;class FP extends Hn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ei(Ro,Co,t,e);s.layers=this.layers,this.add(s);const a=new Ei(Ro,Co,t,e);a.layers=this.layers,this.add(a);const l=new Ei(Ro,Co,t,e);l.layers=this.layers,this.add(l);const c=new Ei(Ro,Co,t,e);c.layers=this.layers,this.add(c);const f=new Ei(Ro,Co,t,e);f.layers=this.layers,this.add(f);const h=new Ei(Ro,Co,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,l,c,f]=e;for(const h of e)this.remove(h);if(t===Ar)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===Kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,f,h,d]=this.children,p=t.getRenderTarget(),m=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,l),t.setRenderTarget(i,2,s),t.render(e,c),t.setRenderTarget(i,3,s),t.render(e,f),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),t.render(e,d),t.setRenderTarget(p,m,_),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Qv extends Jn{constructor(t,e,i,s,a,l,c,f,h,d){t=t!==void 0?t:[],e=e!==void 0?e:Yo,super(t,e,i,s,a,l,c,f,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class OP extends Ws{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Qv(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nl(5,5,5),a=new os({name:"CubemapFromEquirect",uniforms:jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jn,blending:ns});a.uniforms.tEquirect.value=e;const l=new zi(s,a),c=e.minFilter;return e.minFilter===Bs&&(e.minFilter=Fi),new FP(1,10,this).update(t,l),e.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,i,s){const a=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,s);t.setRenderTarget(a)}}const oh=new K,BP=new K,zP=new me;class Ls{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=oh.subVectors(i,e).cross(BP.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(oh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||zP.getNormalMatrix(t),s=this.coplanarPoint(oh).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new el,xc=new K;class tx{constructor(t=new Ls,e=new Ls,i=new Ls,s=new Ls,a=new Ls,l=new Ls){this.planes=[t,e,i,s,a,l]}set(t,e,i,s,a,l){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(s),c[4].copy(a),c[5].copy(l),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ar){const i=this.planes,s=t.elements,a=s[0],l=s[1],c=s[2],f=s[3],h=s[4],d=s[5],p=s[6],m=s[7],_=s[8],M=s[9],S=s[10],x=s[11],v=s[12],w=s[13],A=s[14],L=s[15];if(i[0].setComponents(f-a,m-h,x-_,L-v).normalize(),i[1].setComponents(f+a,m+h,x+_,L+v).normalize(),i[2].setComponents(f+l,m+d,x+M,L+w).normalize(),i[3].setComponents(f-l,m-d,x-M,L-w).normalize(),i[4].setComponents(f-c,m-p,x-S,L-A).normalize(),e===Ar)i[5].setComponents(f+c,m+p,x+S,L+A).normalize();else if(e===Kc)i[5].setComponents(c,p,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(xc.x=s.normal.x>0?t.max.x:t.min.x,xc.y=s.normal.y>0?t.max.y:t.min.y,xc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ex(){let n=null,t=!1,e=null,i=null;function s(a,l){e(a,l),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function HP(n){const t=new WeakMap;function e(c,f){const h=c.array,d=c.usage,p=h.byteLength,m=n.createBuffer();n.bindBuffer(f,m),n.bufferData(f,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function i(c,f,h){const d=f.array,p=f._updateRange,m=f.updateRanges;if(n.bindBuffer(h,c),p.count===-1&&m.length===0&&n.bufferSubData(h,0,d),m.length!==0){for(let _=0,M=m.length;_<M;_++){const S=m[_];n.bufferSubData(h,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}f.clearUpdateRanges()}p.count!==-1&&(n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count),p.count=-1),f.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=t.get(c);f&&(n.deleteBuffer(f.buffer),t.delete(c))}function l(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const d=t.get(c);(!d||d.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=t.get(c);if(h===void 0)t.set(c,e(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,f),h.version=c.version}}return{get:s,remove:a,update:l}}class gu extends ni{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,l=e/2,c=Math.floor(i),f=Math.floor(s),h=c+1,d=f+1,p=t/c,m=e/f,_=[],M=[],S=[],x=[];for(let v=0;v<d;v++){const w=v*m-l;for(let A=0;A<h;A++){const L=A*p-a;M.push(L,-w,0),S.push(0,0,1),x.push(A/c),x.push(1-v/f)}}for(let v=0;v<f;v++)for(let w=0;w<c;w++){const A=w+h*v,L=w+h*(v+1),$=w+1+h*(v+1),N=w+1+h*v;_.push(A,L,N),_.push(L,$,N)}this.setIndex(_),this.setAttribute("position",new Qn(M,3)),this.setAttribute("normal",new Qn(S,3)),this.setAttribute("uv",new Qn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gu(t.width,t.height,t.widthSegments,t.heightSegments)}}var kP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GP=`#ifdef USE_ALPHAHASH
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
#endif`,VP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YP=`#ifdef USE_AOMAP
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
#endif`,$P=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KP=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ZP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QP=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t2=`#ifdef USE_IRIDESCENCE
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
#endif`,e2=`#ifdef USE_BUMPMAP
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
#endif`,n2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,u2=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,f2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,h2=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_2="gl_FragColor = linearToOutputTexel( gl_FragColor );",v2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S2=`#ifdef USE_ENVMAP
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
#endif`,y2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R2=`#ifdef USE_GRADIENTMAP
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
}`,C2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I2=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,D2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,U2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,z2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H2=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z2=`#if defined( USE_POINTS_UV )
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
#endif`,j2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nL=`#ifdef USE_MORPHTARGETS
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
#endif`,iL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cL=`#ifdef USE_NORMALMAP
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
#endif`,uL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mL=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_L=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ML=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,EL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,AL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,bL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,TL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wL=`#ifdef USE_SKINNING
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
#endif`,RL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CL=`#ifdef USE_SKINNING
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
#endif`,PL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DL=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UL=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NL=`#ifdef USE_TRANSMISSION
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
#endif`,FL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kL=`uniform sampler2D t2D;
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
}`,GL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qL=`#include <common>
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
}`,YL=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$L=`#define DISTANCE
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
}`,KL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JL=`uniform float scale;
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
}`,QL=`uniform vec3 diffuse;
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
}`,tI=`#include <common>
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
}`,eI=`uniform vec3 diffuse;
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
}`,nI=`#define LAMBERT
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
}`,iI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,rI=`#define MATCAP
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
}`,sI=`#define MATCAP
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
}`,oI=`#define NORMAL
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
}`,aI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lI=`#define PHONG
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
}`,cI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,uI=`#define STANDARD
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
}`,fI=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,hI=`#define TOON
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
}`,dI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,pI=`uniform float size;
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
}`,mI=`uniform vec3 diffuse;
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
}`,gI=`#include <common>
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
}`,_I=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,xI=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:kP,alphahash_pars_fragment:GP,alphamap_fragment:VP,alphamap_pars_fragment:WP,alphatest_fragment:XP,alphatest_pars_fragment:qP,aomap_fragment:YP,aomap_pars_fragment:$P,batching_pars_vertex:KP,batching_vertex:ZP,begin_vertex:jP,beginnormal_vertex:JP,bsdfs:QP,iridescence_fragment:t2,bumpmap_pars_fragment:e2,clipping_planes_fragment:n2,clipping_planes_pars_fragment:i2,clipping_planes_pars_vertex:r2,clipping_planes_vertex:s2,color_fragment:o2,color_pars_fragment:a2,color_pars_vertex:l2,color_vertex:c2,common:u2,cube_uv_reflection_fragment:f2,defaultnormal_vertex:h2,displacementmap_pars_vertex:d2,displacementmap_vertex:p2,emissivemap_fragment:m2,emissivemap_pars_fragment:g2,colorspace_fragment:_2,colorspace_pars_fragment:v2,envmap_fragment:x2,envmap_common_pars_fragment:M2,envmap_pars_fragment:S2,envmap_pars_vertex:y2,envmap_physical_pars_fragment:D2,envmap_vertex:E2,fog_vertex:A2,fog_pars_vertex:b2,fog_fragment:T2,fog_pars_fragment:w2,gradientmap_pars_fragment:R2,lightmap_pars_fragment:C2,lights_lambert_fragment:P2,lights_lambert_pars_fragment:L2,lights_pars_begin:I2,lights_toon_fragment:U2,lights_toon_pars_fragment:N2,lights_phong_fragment:F2,lights_phong_pars_fragment:O2,lights_physical_fragment:B2,lights_physical_pars_fragment:z2,lights_fragment_begin:H2,lights_fragment_maps:k2,lights_fragment_end:G2,logdepthbuf_fragment:V2,logdepthbuf_pars_fragment:W2,logdepthbuf_pars_vertex:X2,logdepthbuf_vertex:q2,map_fragment:Y2,map_pars_fragment:$2,map_particle_fragment:K2,map_particle_pars_fragment:Z2,metalnessmap_fragment:j2,metalnessmap_pars_fragment:J2,morphinstance_vertex:Q2,morphcolor_vertex:tL,morphnormal_vertex:eL,morphtarget_pars_vertex:nL,morphtarget_vertex:iL,normal_fragment_begin:rL,normal_fragment_maps:sL,normal_pars_fragment:oL,normal_pars_vertex:aL,normal_vertex:lL,normalmap_pars_fragment:cL,clearcoat_normal_fragment_begin:uL,clearcoat_normal_fragment_maps:fL,clearcoat_pars_fragment:hL,iridescence_pars_fragment:dL,opaque_fragment:pL,packing:mL,premultiplied_alpha_fragment:gL,project_vertex:_L,dithering_fragment:vL,dithering_pars_fragment:xL,roughnessmap_fragment:ML,roughnessmap_pars_fragment:SL,shadowmap_pars_fragment:yL,shadowmap_pars_vertex:EL,shadowmap_vertex:AL,shadowmask_pars_fragment:bL,skinbase_vertex:TL,skinning_pars_vertex:wL,skinning_vertex:RL,skinnormal_vertex:CL,specularmap_fragment:PL,specularmap_pars_fragment:LL,tonemapping_fragment:IL,tonemapping_pars_fragment:DL,transmission_fragment:UL,transmission_pars_fragment:NL,uv_pars_fragment:FL,uv_pars_vertex:OL,uv_vertex:BL,worldpos_vertex:zL,background_vert:HL,background_frag:kL,backgroundCube_vert:GL,backgroundCube_frag:VL,cube_vert:WL,cube_frag:XL,depth_vert:qL,depth_frag:YL,distanceRGBA_vert:$L,distanceRGBA_frag:KL,equirect_vert:ZL,equirect_frag:jL,linedashed_vert:JL,linedashed_frag:QL,meshbasic_vert:tI,meshbasic_frag:eI,meshlambert_vert:nI,meshlambert_frag:iI,meshmatcap_vert:rI,meshmatcap_frag:sI,meshnormal_vert:oI,meshnormal_frag:aI,meshphong_vert:lI,meshphong_frag:cI,meshphysical_vert:uI,meshphysical_frag:fI,meshtoon_vert:hI,meshtoon_frag:dI,points_vert:pI,points_frag:mI,shadow_vert:gI,shadow_frag:_I,sprite_vert:vI,sprite_frag:xI},kt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Qi={basic:{uniforms:Bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Bn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Bn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Bn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Bn([kt.points,kt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Bn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Bn([kt.common,kt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Bn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Bn([kt.sprite,kt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Bn([kt.common,kt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Bn([kt.lights,kt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Qi.physical={uniforms:Bn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Mc={r:0,b:0,g:0},Rs=new zn,MI=new on;function SI(n,t,e,i,s,a,l){const c=new Ie(0);let f=a===!0?0:1,h,d,p=null,m=0,_=null;function M(w){let A=w.isScene===!0?w.background:null;return A&&A.isTexture&&(A=(w.backgroundBlurriness>0?e:t).get(A)),A}function S(w){let A=!1;const L=M(w);L===null?v(c,f):L&&L.isColor&&(v(L,1),A=!0);const $=n.xr.getEnvironmentBlendMode();$==="additive"?i.buffers.color.setClear(0,0,0,1,l):$==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(w,A){const L=M(A);L&&(L.isCubeTexture||L.mapping===pu)?(d===void 0&&(d=new zi(new nl(1,1,1),new os({name:"BackgroundCubeMaterial",uniforms:jo(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function($,N,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Rs.copy(A.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(MI.makeRotationFromEuler(Rs)),d.material.toneMapped=Ne.getTransfer(L.colorSpace)!==Ye,(p!==L||m!==L.version||_!==n.toneMapping)&&(d.material.needsUpdate=!0,p=L,m=L.version,_=n.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new zi(new gu(2,2),new os({name:"BackgroundMaterial",uniforms:jo(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Ne.getTransfer(L.colorSpace)!==Ye,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(p!==L||m!==L.version||_!==n.toneMapping)&&(h.material.needsUpdate=!0,p=L,m=L.version,_=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function v(w,A){w.getRGB(Mc,jv(n)),i.buffers.color.setClear(Mc.r,Mc.g,Mc.b,A,l)}return{getClearColor:function(){return c},setClearColor:function(w,A=1){c.set(w),f=A,v(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(w){f=w,v(c,f)},render:S,addToRenderList:x}}function yI(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null);let a=s,l=!1;function c(P,k,ht,ot,yt){let Mt=!1;const ut=p(ot,ht,k);a!==ut&&(a=ut,h(a.object)),Mt=_(P,ot,ht,yt),Mt&&M(P,ot,ht,yt),yt!==null&&t.update(yt,n.ELEMENT_ARRAY_BUFFER),(Mt||l)&&(l=!1,L(P,k,ht,ot),yt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(yt).buffer))}function f(){return n.createVertexArray()}function h(P){return n.bindVertexArray(P)}function d(P){return n.deleteVertexArray(P)}function p(P,k,ht){const ot=ht.wireframe===!0;let yt=i[P.id];yt===void 0&&(yt={},i[P.id]=yt);let Mt=yt[k.id];Mt===void 0&&(Mt={},yt[k.id]=Mt);let ut=Mt[ot];return ut===void 0&&(ut=m(f()),Mt[ot]=ut),ut}function m(P){const k=[],ht=[],ot=[];for(let yt=0;yt<e;yt++)k[yt]=0,ht[yt]=0,ot[yt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ht,attributeDivisors:ot,object:P,attributes:{},index:null}}function _(P,k,ht,ot){const yt=a.attributes,Mt=k.attributes;let ut=0;const lt=ht.getAttributes();for(const tt in lt)if(lt[tt].location>=0){const Bt=yt[tt];let Nt=Mt[tt];if(Nt===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(Nt=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(Nt=P.instanceColor)),Bt===void 0||Bt.attribute!==Nt||Nt&&Bt.data!==Nt.data)return!0;ut++}return a.attributesNum!==ut||a.index!==ot}function M(P,k,ht,ot){const yt={},Mt=k.attributes;let ut=0;const lt=ht.getAttributes();for(const tt in lt)if(lt[tt].location>=0){let Bt=Mt[tt];Bt===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(Bt=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(Bt=P.instanceColor));const Nt={};Nt.attribute=Bt,Bt&&Bt.data&&(Nt.data=Bt.data),yt[tt]=Nt,ut++}a.attributes=yt,a.attributesNum=ut,a.index=ot}function S(){const P=a.newAttributes;for(let k=0,ht=P.length;k<ht;k++)P[k]=0}function x(P){v(P,0)}function v(P,k){const ht=a.newAttributes,ot=a.enabledAttributes,yt=a.attributeDivisors;ht[P]=1,ot[P]===0&&(n.enableVertexAttribArray(P),ot[P]=1),yt[P]!==k&&(n.vertexAttribDivisor(P,k),yt[P]=k)}function w(){const P=a.newAttributes,k=a.enabledAttributes;for(let ht=0,ot=k.length;ht<ot;ht++)k[ht]!==P[ht]&&(n.disableVertexAttribArray(ht),k[ht]=0)}function A(P,k,ht,ot,yt,Mt,ut){ut===!0?n.vertexAttribIPointer(P,k,ht,yt,Mt):n.vertexAttribPointer(P,k,ht,ot,yt,Mt)}function L(P,k,ht,ot){S();const yt=ot.attributes,Mt=ht.getAttributes(),ut=k.defaultAttributeValues;for(const lt in Mt){const tt=Mt[lt];if(tt.location>=0){let Ot=yt[lt];if(Ot===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(Ot=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(Ot=P.instanceColor)),Ot!==void 0){const Bt=Ot.normalized,Nt=Ot.itemSize,Qt=t.get(Ot);if(Qt===void 0)continue;const xe=Qt.buffer,dt=Qt.type,Tt=Qt.bytesPerElement,Ft=dt===n.INT||dt===n.UNSIGNED_INT||Ot.gpuType===Hd;if(Ot.isInterleavedBufferAttribute){const X=Ot.data,vt=X.stride,pt=Ot.offset;if(X.isInstancedInterleavedBuffer){for(let Rt=0;Rt<tt.locationSize;Rt++)v(tt.location+Rt,X.meshPerAttribute);P.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Rt=0;Rt<tt.locationSize;Rt++)x(tt.location+Rt);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Rt=0;Rt<tt.locationSize;Rt++)A(tt.location+Rt,Nt/tt.locationSize,dt,Bt,vt*Tt,(pt+Nt/tt.locationSize*Rt)*Tt,Ft)}else{if(Ot.isInstancedBufferAttribute){for(let X=0;X<tt.locationSize;X++)v(tt.location+X,Ot.meshPerAttribute);P.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let X=0;X<tt.locationSize;X++)x(tt.location+X);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let X=0;X<tt.locationSize;X++)A(tt.location+X,Nt/tt.locationSize,dt,Bt,Nt*Tt,Nt/tt.locationSize*X*Tt,Ft)}}else if(ut!==void 0){const Bt=ut[lt];if(Bt!==void 0)switch(Bt.length){case 2:n.vertexAttrib2fv(tt.location,Bt);break;case 3:n.vertexAttrib3fv(tt.location,Bt);break;case 4:n.vertexAttrib4fv(tt.location,Bt);break;default:n.vertexAttrib1fv(tt.location,Bt)}}}}w()}function $(){Q();for(const P in i){const k=i[P];for(const ht in k){const ot=k[ht];for(const yt in ot)d(ot[yt].object),delete ot[yt];delete k[ht]}delete i[P]}}function N(P){if(i[P.id]===void 0)return;const k=i[P.id];for(const ht in k){const ot=k[ht];for(const yt in ot)d(ot[yt].object),delete ot[yt];delete k[ht]}delete i[P.id]}function z(P){for(const k in i){const ht=i[k];if(ht[P.id]===void 0)continue;const ot=ht[P.id];for(const yt in ot)d(ot[yt].object),delete ot[yt];delete ht[P.id]}}function Q(){D(),l=!0,a!==s&&(a=s,h(a.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:Q,resetDefaultState:D,dispose:$,releaseStatesOfGeometry:N,releaseStatesOfProgram:z,initAttributes:S,enableAttribute:x,disableUnusedAttributes:w}}function EI(n,t,e){let i;function s(h){i=h}function a(h,d){n.drawArrays(i,h,d),e.update(d,i,1)}function l(h,d,p){p!==0&&(n.drawArraysInstanced(i,h,d,p),e.update(d,i,p))}function c(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,p);let _=0;for(let M=0;M<p;M++)_+=d[M];e.update(_,i,1)}function f(h,d,p,m){if(p===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<h.length;M++)l(h[M],d[M],m[M]);else{_.multiDrawArraysInstancedWEBGL(i,h,0,d,0,m,0,p);let M=0;for(let S=0;S<p;S++)M+=d[S];for(let S=0;S<m.length;S++)e.update(M,i,m[S])}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function AI(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(N){return!(N!==Bi&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const z=N===ja&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==wr&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Er&&!z)}function f(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=f(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const p=e.logarithmicDepthBuffer===!0,m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,$=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:A,vertexTextures:L,maxSamples:$}}function bI(n){const t=this;let e=null,i=0,s=!1,a=!1;const l=new Ls,c=new me,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const _=p.length!==0||m||i!==0||s;return s=m,i=p.length,_},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,m){e=d(p,m,0)},this.setState=function(p,m,_){const M=p.clippingPlanes,S=p.clipIntersection,x=p.clipShadows,v=n.get(p);if(!s||M===null||M.length===0||a&&!x)a?d(null):h();else{const w=a?0:i,A=w*4;let L=v.clippingState||null;f.value=L,L=d(M,m,A,_);for(let $=0;$!==A;++$)L[$]=e[$];v.clippingState=L,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function h(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,m,_,M){const S=p!==null?p.length:0;let x=null;if(S!==0){if(x=f.value,M!==!0||x===null){const v=_+S*4,w=m.matrixWorldInverse;c.getNormalMatrix(w),(x===null||x.length<v)&&(x=new Float32Array(v));for(let A=0,L=_;A!==S;++A,L+=4)l.copy(p[A]).applyMatrix4(w,c),l.normal.toArray(x,L),x[L+3]=l.constant}f.value=x,f.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,x}}function TI(n){let t=new WeakMap;function e(l,c){return c===Uh?l.mapping=Yo:c===Nh&&(l.mapping=$o),l}function i(l){if(l&&l.isTexture){const c=l.mapping;if(c===Uh||c===Nh)if(t.has(l)){const f=t.get(l).texture;return e(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const h=new OP(f.height);return h.fromEquirectangularTexture(n,l),t.set(l,h),l.addEventListener("dispose",s),e(h.texture,l.mapping)}else return null}}return l}function s(l){const c=l.target;c.removeEventListener("dispose",s);const f=t.get(c);f!==void 0&&(t.delete(c),f.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class wI extends Jv{constructor(t=-1,e=1,i=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,l=i+t,c=s+e,f=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,c-=d*this.view.offsetY,f=c-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Do=4,B_=[.125,.215,.35,.446,.526,.582],Fs=20,ah=new wI,z_=new Ie;let lh=null,ch=0,uh=0,fh=!1;const Is=(1+Math.sqrt(5))/2,Po=1/Is,H_=[new K(-Is,Po,0),new K(Is,Po,0),new K(-Po,0,Is),new K(Po,0,Is),new K(0,Is,-Po),new K(0,Is,Po),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class k_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lh,ch,uh),this._renderer.xr.enabled=fh,t.scissorTest=!1,Sc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yo||t.mapping===$o?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:ja,format:Bi,colorSpace:fs,depthBuffer:!1},s=G_(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G_(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RI(a)),this._blurMaterial=CI(a,t,e)}return s}_compileMaterial(t){const e=new zi(this._lodPlanes[0],t);this._renderer.compile(e,ah)}_sceneToCubeUV(t,e,i,s){const c=new Ei(90,1,e,i),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(z_),d.toneMapping=is,d.autoClear=!1;const _=new $d({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),M=new zi(new nl,_);let S=!1;const x=t.background;x?x.isColor&&(_.color.copy(x),t.background=null,S=!0):(_.color.copy(z_),S=!0);for(let v=0;v<6;v++){const w=v%3;w===0?(c.up.set(0,f[v],0),c.lookAt(h[v],0,0)):w===1?(c.up.set(0,0,f[v]),c.lookAt(0,h[v],0)):(c.up.set(0,f[v],0),c.lookAt(0,0,h[v]));const A=this._cubeSize;Sc(s,w*A,v>2?A:0,A,A),d.setRenderTarget(s),S&&d.render(M,c),d.render(t,c)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=m,d.autoClear=p,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Yo||t.mapping===$o;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=W_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V_());const a=s?this._cubemapMaterial:this._equirectMaterial,l=new zi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=t;const f=this._cubeSize;Sc(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(l,ah)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=H_[(s-a-1)%H_.length];this._blur(t,a-1,a,l,c)}e.autoClear=i}_blur(t,e,i,s,a){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,i,s,"latitudinal",a),this._halfBlur(l,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,l,c){const f=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new zi(this._lodPlanes[s],h),m=h.uniforms,_=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Fs-1),S=a/M,x=isFinite(a)?1+Math.floor(d*S):Fs;x>Fs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Fs}`);const v=[];let w=0;for(let z=0;z<Fs;++z){const Q=z/S,D=Math.exp(-Q*Q/2);v.push(D),z===0?w+=D:z<x&&(w+=2*D)}for(let z=0;z<v.length;z++)v[z]=v[z]/w;m.envMap.value=t.texture,m.samples.value=x,m.weights.value=v,m.latitudinal.value=l==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:A}=this;m.dTheta.value=M,m.mipInt.value=A-i;const L=this._sizeLods[s],$=3*L*(s>A-Do?s-A+Do:0),N=4*(this._cubeSize-L);Sc(e,$,N,3*L,2*L),f.setRenderTarget(e),f.render(p,ah)}}function RI(n){const t=[],e=[],i=[];let s=n;const a=n-Do+1+B_.length;for(let l=0;l<a;l++){const c=Math.pow(2,s);e.push(c);let f=1/c;l>n-Do?f=B_[l-n+Do-1]:l===0&&(f=0),i.push(f);const h=1/(c-2),d=-h,p=1+h,m=[d,d,p,d,p,p,d,d,p,p,d,p],_=6,M=6,S=3,x=2,v=1,w=new Float32Array(S*M*_),A=new Float32Array(x*M*_),L=new Float32Array(v*M*_);for(let N=0;N<_;N++){const z=N%3*2/3-1,Q=N>2?0:-1,D=[z,Q,0,z+2/3,Q,0,z+2/3,Q+1,0,z,Q,0,z+2/3,Q+1,0,z,Q+1,0];w.set(D,S*M*N),A.set(m,x*M*N);const P=[N,N,N,N,N,N];L.set(P,v*M*N)}const $=new ni;$.setAttribute("position",new mn(w,S)),$.setAttribute("uv",new mn(A,x)),$.setAttribute("faceIndex",new mn(L,v)),t.push($),s>Do&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function G_(n,t,e){const i=new Ws(n,t,e);return i.texture.mapping=pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sc(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function CI(n,t,e){const i=new Float32Array(Fs),s=new K(0,1,0);return new os({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function V_(){return new os({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kd(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function W_(){return new os({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Kd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PI(n){let t=new WeakMap,e=null;function i(c){if(c&&c.isTexture){const f=c.mapping,h=f===Uh||f===Nh,d=f===Yo||f===$o;if(h||d){let p=t.get(c);const m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return e===null&&(e=new k_(n)),p=h?e.fromEquirectangular(c,p):e.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{const _=c.image;return h&&_&&_.height>0||d&&_&&s(_)?(e===null&&(e=new k_(n)),p=h?e.fromEquirectangular(c):e.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c}function s(c){let f=0;const h=6;for(let d=0;d<h;d++)c[d]!==void 0&&f++;return f===h}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=t.get(f);h!==void 0&&(t.delete(f),h.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:l}}function LI(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&za("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function II(n,t,e,i){const s={},a=new WeakMap;function l(p){const m=p.target;m.index!==null&&t.remove(m.index);for(const M in m.attributes)t.remove(m.attributes[M]);for(const M in m.morphAttributes){const S=m.morphAttributes[M];for(let x=0,v=S.length;x<v;x++)t.remove(S[x])}m.removeEventListener("dispose",l),delete s[m.id];const _=a.get(m);_&&(t.remove(_),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(p,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,e.memory.geometries++),m}function f(p){const m=p.attributes;for(const M in m)t.update(m[M],n.ARRAY_BUFFER);const _=p.morphAttributes;for(const M in _){const S=_[M];for(let x=0,v=S.length;x<v;x++)t.update(S[x],n.ARRAY_BUFFER)}}function h(p){const m=[],_=p.index,M=p.attributes.position;let S=0;if(_!==null){const w=_.array;S=_.version;for(let A=0,L=w.length;A<L;A+=3){const $=w[A+0],N=w[A+1],z=w[A+2];m.push($,N,N,z,z,$)}}else if(M!==void 0){const w=M.array;S=M.version;for(let A=0,L=w.length/3-1;A<L;A+=3){const $=A+0,N=A+1,z=A+2;m.push($,N,N,z,z,$)}}else return;const x=new(Wv(m)?Zv:Kv)(m,1);x.version=S;const v=a.get(p);v&&t.remove(v),a.set(p,x)}function d(p){const m=a.get(p);if(m){const _=p.index;_!==null&&m.version<_.version&&h(p)}else h(p);return a.get(p)}return{get:c,update:f,getWireframeAttribute:d}}function DI(n,t,e){let i;function s(m){i=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function f(m,_){n.drawElements(i,_,a,m*l),e.update(_,i,1)}function h(m,_,M){M!==0&&(n.drawElementsInstanced(i,_,a,m*l,M),e.update(_,i,M))}function d(m,_,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,a,m,0,M);let x=0;for(let v=0;v<M;v++)x+=_[v];e.update(x,i,1)}function p(m,_,M,S){if(M===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<m.length;v++)h(m[v]/l,_[v],S[v]);else{x.multiDrawElementsInstancedWEBGL(i,_,0,a,m,0,S,0,M);let v=0;for(let w=0;w<M;w++)v+=_[w];for(let w=0;w<S.length;w++)e.update(v,i,S[w])}}this.setMode=s,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function UI(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,l,c){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=c*(a/3);break;case n.LINES:e.lines+=c*(a/2);break;case n.LINE_STRIP:e.lines+=c*(a-1);break;case n.LINE_LOOP:e.lines+=c*a;break;case n.POINTS:e.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function NI(n,t,e){const i=new WeakMap,s=new Sn;function a(l,c,f){const h=l.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0;let m=i.get(c);if(m===void 0||m.count!==p){let P=function(){Q.dispose(),i.delete(c),c.removeEventListener("dispose",P)};var _=P;m!==void 0&&m.texture.dispose();const M=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let L=0;M===!0&&(L=1),S===!0&&(L=2),x===!0&&(L=3);let $=c.attributes.position.count*L,N=1;$>t.maxTextureSize&&(N=Math.ceil($/t.maxTextureSize),$=t.maxTextureSize);const z=new Float32Array($*N*4*p),Q=new qv(z,$,N,p);Q.type=Er,Q.needsUpdate=!0;const D=L*4;for(let k=0;k<p;k++){const ht=v[k],ot=w[k],yt=A[k],Mt=$*N*4*k;for(let ut=0;ut<ht.count;ut++){const lt=ut*D;M===!0&&(s.fromBufferAttribute(ht,ut),z[Mt+lt+0]=s.x,z[Mt+lt+1]=s.y,z[Mt+lt+2]=s.z,z[Mt+lt+3]=0),S===!0&&(s.fromBufferAttribute(ot,ut),z[Mt+lt+4]=s.x,z[Mt+lt+5]=s.y,z[Mt+lt+6]=s.z,z[Mt+lt+7]=0),x===!0&&(s.fromBufferAttribute(yt,ut),z[Mt+lt+8]=s.x,z[Mt+lt+9]=s.y,z[Mt+lt+10]=s.z,z[Mt+lt+11]=yt.itemSize===4?s.w:1)}}m={count:p,texture:Q,size:new Oe($,N)},i.set(c,m),c.addEventListener("dispose",P)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const S=c.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function FI(n,t,e,i){let s=new WeakMap;function a(f){const h=i.render.frame,d=f.geometry,p=t.get(f,d);if(s.get(p)!==h&&(t.update(p),s.set(p,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),s.get(f)!==h&&(e.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,n.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const m=f.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return p}function l(){s=new WeakMap}function c(f){const h=f.target;h.removeEventListener("dispose",c),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:l}}class nx extends Jn{constructor(t,e,i,s,a,l,c,f,h,d=Ho){if(d!==Ho&&d!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ho&&(i=Vs),i===void 0&&d===Zo&&(i=Ko),super(null,s,a,l,c,f,d,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:bi,this.minFilter=f!==void 0?f:bi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ix=new Jn,X_=new nx(1,1),rx=new qv,sx=new SP,ox=new Qv,q_=[],Y_=[],$_=new Float32Array(16),K_=new Float32Array(9),Z_=new Float32Array(4);function ea(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let a=q_[s];if(a===void 0&&(a=new Float32Array(s),q_[s]=a),t!==0){i.toArray(a,0);for(let l=1,c=0;l!==t;++l)c+=e,n[l].toArray(a,c)}return a}function _n(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function vn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _u(n,t){let e=Y_[t];e===void 0&&(e=new Int32Array(t),Y_[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function OI(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function BI(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;n.uniform2fv(this.addr,t),vn(e,t)}}function zI(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_n(e,t))return;n.uniform3fv(this.addr,t),vn(e,t)}}function HI(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;n.uniform4fv(this.addr,t),vn(e,t)}}function kI(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_n(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),vn(e,t)}else{if(_n(e,i))return;Z_.set(i),n.uniformMatrix2fv(this.addr,!1,Z_),vn(e,i)}}function GI(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_n(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),vn(e,t)}else{if(_n(e,i))return;K_.set(i),n.uniformMatrix3fv(this.addr,!1,K_),vn(e,i)}}function VI(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_n(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),vn(e,t)}else{if(_n(e,i))return;$_.set(i),n.uniformMatrix4fv(this.addr,!1,$_),vn(e,i)}}function WI(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function XI(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;n.uniform2iv(this.addr,t),vn(e,t)}}function qI(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;n.uniform3iv(this.addr,t),vn(e,t)}}function YI(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;n.uniform4iv(this.addr,t),vn(e,t)}}function $I(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function KI(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;n.uniform2uiv(this.addr,t),vn(e,t)}}function ZI(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;n.uniform3uiv(this.addr,t),vn(e,t)}}function jI(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;n.uniform4uiv(this.addr,t),vn(e,t)}}function JI(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(X_.compareFunction=Vv,a=X_):a=ix,e.setTexture2D(t||a,s)}function QI(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||sx,s)}function tD(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ox,s)}function eD(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||rx,s)}function nD(n){switch(n){case 5126:return OI;case 35664:return BI;case 35665:return zI;case 35666:return HI;case 35674:return kI;case 35675:return GI;case 35676:return VI;case 5124:case 35670:return WI;case 35667:case 35671:return XI;case 35668:case 35672:return qI;case 35669:case 35673:return YI;case 5125:return $I;case 36294:return KI;case 36295:return ZI;case 36296:return jI;case 35678:case 36198:case 36298:case 36306:case 35682:return JI;case 35679:case 36299:case 36307:return QI;case 35680:case 36300:case 36308:case 36293:return tD;case 36289:case 36303:case 36311:case 36292:return eD}}function iD(n,t){n.uniform1fv(this.addr,t)}function rD(n,t){const e=ea(t,this.size,2);n.uniform2fv(this.addr,e)}function sD(n,t){const e=ea(t,this.size,3);n.uniform3fv(this.addr,e)}function oD(n,t){const e=ea(t,this.size,4);n.uniform4fv(this.addr,e)}function aD(n,t){const e=ea(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function lD(n,t){const e=ea(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function cD(n,t){const e=ea(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function uD(n,t){n.uniform1iv(this.addr,t)}function fD(n,t){n.uniform2iv(this.addr,t)}function hD(n,t){n.uniform3iv(this.addr,t)}function dD(n,t){n.uniform4iv(this.addr,t)}function pD(n,t){n.uniform1uiv(this.addr,t)}function mD(n,t){n.uniform2uiv(this.addr,t)}function gD(n,t){n.uniform3uiv(this.addr,t)}function _D(n,t){n.uniform4uiv(this.addr,t)}function vD(n,t,e){const i=this.cache,s=t.length,a=_u(e,s);_n(i,a)||(n.uniform1iv(this.addr,a),vn(i,a));for(let l=0;l!==s;++l)e.setTexture2D(t[l]||ix,a[l])}function xD(n,t,e){const i=this.cache,s=t.length,a=_u(e,s);_n(i,a)||(n.uniform1iv(this.addr,a),vn(i,a));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||sx,a[l])}function MD(n,t,e){const i=this.cache,s=t.length,a=_u(e,s);_n(i,a)||(n.uniform1iv(this.addr,a),vn(i,a));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||ox,a[l])}function SD(n,t,e){const i=this.cache,s=t.length,a=_u(e,s);_n(i,a)||(n.uniform1iv(this.addr,a),vn(i,a));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||rx,a[l])}function yD(n){switch(n){case 5126:return iD;case 35664:return rD;case 35665:return sD;case 35666:return oD;case 35674:return aD;case 35675:return lD;case 35676:return cD;case 5124:case 35670:return uD;case 35667:case 35671:return fD;case 35668:case 35672:return hD;case 35669:case 35673:return dD;case 5125:return pD;case 36294:return mD;case 36295:return gD;case 36296:return _D;case 35678:case 36198:case 36298:case 36306:case 35682:return vD;case 35679:case 36299:case 36307:return xD;case 35680:case 36300:case 36308:case 36293:return MD;case 36289:case 36303:case 36311:case 36292:return SD}}class ED{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=nD(e.type)}}class AD{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yD(e.type)}}class bD{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const c=s[a];c.setValue(t,e[c.id],i)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function j_(n,t){n.seq.push(t),n.map[t.id]=t}function TD(n,t,e){const i=n.name,s=i.length;for(hh.lastIndex=0;;){const a=hh.exec(i),l=hh.lastIndex;let c=a[1];const f=a[2]==="]",h=a[3];if(f&&(c=c|0),h===void 0||h==="["&&l+2===s){j_(e,h===void 0?new ED(c,n,t):new AD(c,n,t));break}else{let p=e.map[c];p===void 0&&(p=new bD(c),j_(e,p)),e=p}}}class Hc{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);TD(a,l,this)}}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,l=e.length;a!==l;++a){const c=e[a],f=i[c.id];f.needsUpdate!==!1&&c.setValue(t,f.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const l=t[s];l.id in e&&i.push(l)}return i}}function J_(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const wD=37297;let RD=0;function CD(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let l=s;l<a;l++){const c=l+1;i.push(`${c===t?">":" "} ${c}: ${e[l]}`)}return i.join(`
`)}function PD(n){const t=Ne.getPrimaries(Ne.workingColorSpace),e=Ne.getPrimaries(n);let i;switch(t===e?i="":t===$c&&e===Yc?i="LinearDisplayP3ToLinearSRGB":t===Yc&&e===$c&&(i="LinearSRGBToLinearDisplayP3"),n){case fs:case mu:return[i,"LinearTransferOETF"];case Zi:case qd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Q_(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+CD(n.getShaderSource(t),l)}else return s}function LD(n,t){const e=PD(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ID(n,t){let e;switch(t){case $C:e="Linear";break;case KC:e="Reinhard";break;case ZC:e="OptimizedCineon";break;case jC:e="ACESFilmic";break;case QC:e="AgX";break;case tP:e="Neutral";break;case JC:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const yc=new K;function DD(){Ne.getLuminanceCoefficients(yc);const n=yc.x.toFixed(4),t=yc.y.toFixed(4),e=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function ND(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function FD(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(t,s),l=a.name;let c=1;a.type===n.FLOAT_MAT2&&(c=2),a.type===n.FLOAT_MAT3&&(c=3),a.type===n.FLOAT_MAT4&&(c=4),e[l]={type:a.type,location:n.getAttribLocation(t,l),locationSize:c}}return e}function La(n){return n!==""}function t0(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function e0(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const OD=/^[ \t]*#include +<([\w\d./]+)>/gm;function fd(n){return n.replace(OD,zD)}const BD=new Map;function zD(n,t){let e=pe[t];if(e===void 0){const i=BD.get(t);if(i!==void 0)e=pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return fd(e)}const HD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(n){return n.replace(HD,kD)}function kD(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function i0(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function GD(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pv?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===MC?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xr&&(t="SHADOWMAP_TYPE_VSM"),t}function VD(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yo:case $o:t="ENVMAP_TYPE_CUBE";break;case pu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function WD(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $o:t="ENVMAP_MODE_REFRACTION";break}return t}function XD(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lv:t="ENVMAP_BLENDING_MULTIPLY";break;case qC:t="ENVMAP_BLENDING_MIX";break;case YC:t="ENVMAP_BLENDING_ADD";break}return t}function qD(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function YD(n,t,e,i){const s=n.getContext(),a=e.defines;let l=e.vertexShader,c=e.fragmentShader;const f=GD(e),h=VD(e),d=WD(e),p=XD(e),m=qD(e),_=UD(e),M=ND(a),S=s.createProgram();let x,v,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(La).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(La).join(`
`),v.length>0&&(v+=`
`)):(x=[i0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),v=[i0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==is?"#define TONE_MAPPING":"",e.toneMapping!==is?pe.tonemapping_pars_fragment:"",e.toneMapping!==is?ID("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,LD("linearToOutputTexel",e.outputColorSpace),DD(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(La).join(`
`)),l=fd(l),l=t0(l,e),l=e0(l,e),c=fd(c),c=t0(c,e),c=e0(c,e),l=n0(l),c=n0(c),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",e.glslVersion===v_?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===v_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const A=w+x+l,L=w+v+c,$=J_(s,s.VERTEX_SHADER,A),N=J_(s,s.FRAGMENT_SHADER,L);s.attachShader(S,$),s.attachShader(S,N),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function z(k){if(n.debug.checkShaderErrors){const ht=s.getProgramInfoLog(S).trim(),ot=s.getShaderInfoLog($).trim(),yt=s.getShaderInfoLog(N).trim();let Mt=!0,ut=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Mt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,$,N);else{const lt=Q_(s,$,"vertex"),tt=Q_(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ht+`
`+lt+`
`+tt)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(ot===""||yt==="")&&(ut=!1);ut&&(k.diagnostics={runnable:Mt,programLog:ht,vertexShader:{log:ot,prefix:x},fragmentShader:{log:yt,prefix:v}})}s.deleteShader($),s.deleteShader(N),Q=new Hc(s,S),D=FD(s,S)}let Q;this.getUniforms=function(){return Q===void 0&&z(this),Q};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,wD)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=RD++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=$,this.fragmentShader=N,this}let $D=0;class KD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),l=this._getShaderCacheForMaterial(t);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ZD(t),e.set(t,i)),i}}class ZD{constructor(t){this.id=$D++,this.code=t,this.usedTimes=0}}function jD(n,t,e,i,s,a,l){const c=new Yv,f=new KD,h=new Set,d=[],p=s.logarithmicDepthBuffer,m=s.vertexTextures;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(D){return h.add(D),D===0?"uv":`uv${D}`}function x(D,P,k,ht,ot){const yt=ht.fog,Mt=ot.geometry,ut=D.isMeshStandardMaterial?ht.environment:null,lt=(D.isMeshStandardMaterial?e:t).get(D.envMap||ut),tt=lt&&lt.mapping===pu?lt.image.height:null,Ot=M[D.type];D.precision!==null&&(_=s.getMaxPrecision(D.precision),_!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",_,"instead."));const Bt=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,Nt=Bt!==void 0?Bt.length:0;let Qt=0;Mt.morphAttributes.position!==void 0&&(Qt=1),Mt.morphAttributes.normal!==void 0&&(Qt=2),Mt.morphAttributes.color!==void 0&&(Qt=3);let xe,dt,Tt,Ft;if(Ot){const Ae=Qi[Ot];xe=Ae.vertexShader,dt=Ae.fragmentShader}else xe=D.vertexShader,dt=D.fragmentShader,f.update(D),Tt=f.getVertexShaderID(D),Ft=f.getFragmentShaderID(D);const X=n.getRenderTarget(),vt=ot.isInstancedMesh===!0,pt=ot.isBatchedMesh===!0,Rt=!!D.map,$t=!!D.matcap,B=!!lt,I=!!D.aoMap,U=!!D.lightMap,W=!!D.bumpMap,et=!!D.normalMap,rt=!!D.displacementMap,ct=!!D.emissiveMap,mt=!!D.metalnessMap,R=!!D.roughnessMap,y=D.anisotropy>0,O=D.clearcoat>0,j=D.dispersion>0,nt=D.iridescence>0,J=D.sheen>0,Ct=D.transmission>0,gt=y&&!!D.anisotropyMap,wt=O&&!!D.clearcoatMap,zt=O&&!!D.clearcoatNormalMap,At=O&&!!D.clearcoatRoughnessMap,Ut=nt&&!!D.iridescenceMap,ae=nt&&!!D.iridescenceThicknessMap,jt=J&&!!D.sheenColorMap,Vt=J&&!!D.sheenRoughnessMap,ee=!!D.specularMap,Zt=!!D.specularColorMap,ve=!!D.specularIntensityMap,G=Ct&&!!D.transmissionMap,Lt=Ct&&!!D.thicknessMap,St=!!D.gradientMap,Et=!!D.alphaMap,Dt=D.alphaTest>0,re=!!D.alphaHash,ye=!!D.extensions;let tn=is;D.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(tn=n.toneMapping);const un={shaderID:Ot,shaderType:D.type,shaderName:D.name,vertexShader:xe,fragmentShader:dt,defines:D.defines,customVertexShaderID:Tt,customFragmentShaderID:Ft,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:_,batching:pt,batchingColor:pt&&ot._colorsTexture!==null,instancing:vt,instancingColor:vt&&ot.instanceColor!==null,instancingMorph:vt&&ot.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:fs,alphaToCoverage:!!D.alphaToCoverage,map:Rt,matcap:$t,envMap:B,envMapMode:B&&lt.mapping,envMapCubeUVHeight:tt,aoMap:I,lightMap:U,bumpMap:W,normalMap:et,displacementMap:m&&rt,emissiveMap:ct,normalMapObjectSpace:et&&D.normalMapType===sP,normalMapTangentSpace:et&&D.normalMapType===rP,metalnessMap:mt,roughnessMap:R,anisotropy:y,anisotropyMap:gt,clearcoat:O,clearcoatMap:wt,clearcoatNormalMap:zt,clearcoatRoughnessMap:At,dispersion:j,iridescence:nt,iridescenceMap:Ut,iridescenceThicknessMap:ae,sheen:J,sheenColorMap:jt,sheenRoughnessMap:Vt,specularMap:ee,specularColorMap:Zt,specularIntensityMap:ve,transmission:Ct,transmissionMap:G,thicknessMap:Lt,gradientMap:St,opaque:D.transparent===!1&&D.blending===zo&&D.alphaToCoverage===!1,alphaMap:Et,alphaTest:Dt,alphaHash:re,combine:D.combine,mapUv:Rt&&S(D.map.channel),aoMapUv:I&&S(D.aoMap.channel),lightMapUv:U&&S(D.lightMap.channel),bumpMapUv:W&&S(D.bumpMap.channel),normalMapUv:et&&S(D.normalMap.channel),displacementMapUv:rt&&S(D.displacementMap.channel),emissiveMapUv:ct&&S(D.emissiveMap.channel),metalnessMapUv:mt&&S(D.metalnessMap.channel),roughnessMapUv:R&&S(D.roughnessMap.channel),anisotropyMapUv:gt&&S(D.anisotropyMap.channel),clearcoatMapUv:wt&&S(D.clearcoatMap.channel),clearcoatNormalMapUv:zt&&S(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&S(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&S(D.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&S(D.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&S(D.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&S(D.sheenRoughnessMap.channel),specularMapUv:ee&&S(D.specularMap.channel),specularColorMapUv:Zt&&S(D.specularColorMap.channel),specularIntensityMapUv:ve&&S(D.specularIntensityMap.channel),transmissionMapUv:G&&S(D.transmissionMap.channel),thicknessMapUv:Lt&&S(D.thicknessMap.channel),alphaMapUv:Et&&S(D.alphaMap.channel),vertexTangents:!!Mt.attributes.tangent&&(et||y),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!Mt.attributes.uv&&(Rt||Et),fog:!!yt,useFog:D.fog===!0,fogExp2:!!yt&&yt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:ot.isSkinnedMesh===!0,morphTargets:Mt.morphAttributes.position!==void 0,morphNormals:Mt.morphAttributes.normal!==void 0,morphColors:Mt.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Qt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:D.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:tn,decodeVideoTexture:Rt&&D.map.isVideoTexture===!0&&Ne.getTransfer(D.map.colorSpace)===Ye,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Sr,flipSided:D.side===jn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ye&&D.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&D.extensions.multiDraw===!0||pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return un.vertexUv1s=h.has(1),un.vertexUv2s=h.has(2),un.vertexUv3s=h.has(3),h.clear(),un}function v(D){const P=[];if(D.shaderID?P.push(D.shaderID):(P.push(D.customVertexShaderID),P.push(D.customFragmentShaderID)),D.defines!==void 0)for(const k in D.defines)P.push(k),P.push(D.defines[k]);return D.isRawShaderMaterial===!1&&(w(P,D),A(P,D),P.push(n.outputColorSpace)),P.push(D.customProgramCacheKey),P.join()}function w(D,P){D.push(P.precision),D.push(P.outputColorSpace),D.push(P.envMapMode),D.push(P.envMapCubeUVHeight),D.push(P.mapUv),D.push(P.alphaMapUv),D.push(P.lightMapUv),D.push(P.aoMapUv),D.push(P.bumpMapUv),D.push(P.normalMapUv),D.push(P.displacementMapUv),D.push(P.emissiveMapUv),D.push(P.metalnessMapUv),D.push(P.roughnessMapUv),D.push(P.anisotropyMapUv),D.push(P.clearcoatMapUv),D.push(P.clearcoatNormalMapUv),D.push(P.clearcoatRoughnessMapUv),D.push(P.iridescenceMapUv),D.push(P.iridescenceThicknessMapUv),D.push(P.sheenColorMapUv),D.push(P.sheenRoughnessMapUv),D.push(P.specularMapUv),D.push(P.specularColorMapUv),D.push(P.specularIntensityMapUv),D.push(P.transmissionMapUv),D.push(P.thicknessMapUv),D.push(P.combine),D.push(P.fogExp2),D.push(P.sizeAttenuation),D.push(P.morphTargetsCount),D.push(P.morphAttributeCount),D.push(P.numDirLights),D.push(P.numPointLights),D.push(P.numSpotLights),D.push(P.numSpotLightMaps),D.push(P.numHemiLights),D.push(P.numRectAreaLights),D.push(P.numDirLightShadows),D.push(P.numPointLightShadows),D.push(P.numSpotLightShadows),D.push(P.numSpotLightShadowsWithMaps),D.push(P.numLightProbes),D.push(P.shadowMapType),D.push(P.toneMapping),D.push(P.numClippingPlanes),D.push(P.numClipIntersection),D.push(P.depthPacking)}function A(D,P){c.disableAll(),P.supportsVertexTextures&&c.enable(0),P.instancing&&c.enable(1),P.instancingColor&&c.enable(2),P.instancingMorph&&c.enable(3),P.matcap&&c.enable(4),P.envMap&&c.enable(5),P.normalMapObjectSpace&&c.enable(6),P.normalMapTangentSpace&&c.enable(7),P.clearcoat&&c.enable(8),P.iridescence&&c.enable(9),P.alphaTest&&c.enable(10),P.vertexColors&&c.enable(11),P.vertexAlphas&&c.enable(12),P.vertexUv1s&&c.enable(13),P.vertexUv2s&&c.enable(14),P.vertexUv3s&&c.enable(15),P.vertexTangents&&c.enable(16),P.anisotropy&&c.enable(17),P.alphaHash&&c.enable(18),P.batching&&c.enable(19),P.dispersion&&c.enable(20),P.batchingColor&&c.enable(21),D.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.skinning&&c.enable(4),P.morphTargets&&c.enable(5),P.morphNormals&&c.enable(6),P.morphColors&&c.enable(7),P.premultipliedAlpha&&c.enable(8),P.shadowMapEnabled&&c.enable(9),P.doubleSided&&c.enable(10),P.flipSided&&c.enable(11),P.useDepthPacking&&c.enable(12),P.dithering&&c.enable(13),P.transmission&&c.enable(14),P.sheen&&c.enable(15),P.opaque&&c.enable(16),P.pointsUvs&&c.enable(17),P.decodeVideoTexture&&c.enable(18),P.alphaToCoverage&&c.enable(19),D.push(c.mask)}function L(D){const P=M[D.type];let k;if(P){const ht=Qi[P];k=DP.clone(ht.uniforms)}else k=D.uniforms;return k}function $(D,P){let k;for(let ht=0,ot=d.length;ht<ot;ht++){const yt=d[ht];if(yt.cacheKey===P){k=yt,++k.usedTimes;break}}return k===void 0&&(k=new YD(n,P,D,a),d.push(k)),k}function N(D){if(--D.usedTimes===0){const P=d.indexOf(D);d[P]=d[d.length-1],d.pop(),D.destroy()}}function z(D){f.remove(D)}function Q(){f.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:L,acquireProgram:$,releaseProgram:N,releaseShaderCache:z,programs:d,dispose:Q}}function JD(){let n=new WeakMap;function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function e(a){n.delete(a)}function i(a,l,c){n.get(a)[l]=c}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function QD(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function r0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function s0(){const n=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function l(p,m,_,M,S,x){let v=n[t];return v===void 0?(v={id:p.id,object:p,geometry:m,material:_,groupOrder:M,renderOrder:p.renderOrder,z:S,group:x},n[t]=v):(v.id=p.id,v.object=p,v.geometry=m,v.material=_,v.groupOrder=M,v.renderOrder=p.renderOrder,v.z=S,v.group=x),t++,v}function c(p,m,_,M,S,x){const v=l(p,m,_,M,S,x);_.transmission>0?i.push(v):_.transparent===!0?s.push(v):e.push(v)}function f(p,m,_,M,S,x){const v=l(p,m,_,M,S,x);_.transmission>0?i.unshift(v):_.transparent===!0?s.unshift(v):e.unshift(v)}function h(p,m){e.length>1&&e.sort(p||QD),i.length>1&&i.sort(m||r0),s.length>1&&s.sort(m||r0)}function d(){for(let p=t,m=n.length;p<m;p++){const _=n[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:c,unshift:f,finish:d,sort:h}}function tU(){let n=new WeakMap;function t(i,s){const a=n.get(i);let l;return a===void 0?(l=new s0,n.set(i,[l])):s>=a.length?(l=new s0,a.push(l)):l=a[s],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function eU(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new Ie};break;case"SpotLight":e={position:new K,direction:new K,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":e={color:new Ie,position:new K,halfWidth:new K,halfHeight:new K};break}return n[t.id]=e,e}}}function nU(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let iU=0;function rU(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function sU(n){const t=new eU,e=nU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new K);const s=new K,a=new on,l=new on;function c(h){let d=0,p=0,m=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let _=0,M=0,S=0,x=0,v=0,w=0,A=0,L=0,$=0,N=0,z=0;h.sort(rU);for(let D=0,P=h.length;D<P;D++){const k=h[D],ht=k.color,ot=k.intensity,yt=k.distance,Mt=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=ht.r*ot,p+=ht.g*ot,m+=ht.b*ot;else if(k.isLightProbe){for(let ut=0;ut<9;ut++)i.probe[ut].addScaledVector(k.sh.coefficients[ut],ot);z++}else if(k.isDirectionalLight){const ut=t.get(k);if(ut.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const lt=k.shadow,tt=e.get(k);tt.shadowIntensity=lt.intensity,tt.shadowBias=lt.bias,tt.shadowNormalBias=lt.normalBias,tt.shadowRadius=lt.radius,tt.shadowMapSize=lt.mapSize,i.directionalShadow[_]=tt,i.directionalShadowMap[_]=Mt,i.directionalShadowMatrix[_]=k.shadow.matrix,w++}i.directional[_]=ut,_++}else if(k.isSpotLight){const ut=t.get(k);ut.position.setFromMatrixPosition(k.matrixWorld),ut.color.copy(ht).multiplyScalar(ot),ut.distance=yt,ut.coneCos=Math.cos(k.angle),ut.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ut.decay=k.decay,i.spot[S]=ut;const lt=k.shadow;if(k.map&&(i.spotLightMap[$]=k.map,$++,lt.updateMatrices(k),k.castShadow&&N++),i.spotLightMatrix[S]=lt.matrix,k.castShadow){const tt=e.get(k);tt.shadowIntensity=lt.intensity,tt.shadowBias=lt.bias,tt.shadowNormalBias=lt.normalBias,tt.shadowRadius=lt.radius,tt.shadowMapSize=lt.mapSize,i.spotShadow[S]=tt,i.spotShadowMap[S]=Mt,L++}S++}else if(k.isRectAreaLight){const ut=t.get(k);ut.color.copy(ht).multiplyScalar(ot),ut.halfWidth.set(k.width*.5,0,0),ut.halfHeight.set(0,k.height*.5,0),i.rectArea[x]=ut,x++}else if(k.isPointLight){const ut=t.get(k);if(ut.color.copy(k.color).multiplyScalar(k.intensity),ut.distance=k.distance,ut.decay=k.decay,k.castShadow){const lt=k.shadow,tt=e.get(k);tt.shadowIntensity=lt.intensity,tt.shadowBias=lt.bias,tt.shadowNormalBias=lt.normalBias,tt.shadowRadius=lt.radius,tt.shadowMapSize=lt.mapSize,tt.shadowCameraNear=lt.camera.near,tt.shadowCameraFar=lt.camera.far,i.pointShadow[M]=tt,i.pointShadowMap[M]=Mt,i.pointShadowMatrix[M]=k.shadow.matrix,A++}i.point[M]=ut,M++}else if(k.isHemisphereLight){const ut=t.get(k);ut.skyColor.copy(k.color).multiplyScalar(ot),ut.groundColor.copy(k.groundColor).multiplyScalar(ot),i.hemi[v]=ut,v++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_FLOAT_1,i.rectAreaLTC2=kt.LTC_FLOAT_2):(i.rectAreaLTC1=kt.LTC_HALF_1,i.rectAreaLTC2=kt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=m;const Q=i.hash;(Q.directionalLength!==_||Q.pointLength!==M||Q.spotLength!==S||Q.rectAreaLength!==x||Q.hemiLength!==v||Q.numDirectionalShadows!==w||Q.numPointShadows!==A||Q.numSpotShadows!==L||Q.numSpotMaps!==$||Q.numLightProbes!==z)&&(i.directional.length=_,i.spot.length=S,i.rectArea.length=x,i.point.length=M,i.hemi.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=L+$-N,i.spotLightMap.length=$,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=z,Q.directionalLength=_,Q.pointLength=M,Q.spotLength=S,Q.rectAreaLength=x,Q.hemiLength=v,Q.numDirectionalShadows=w,Q.numPointShadows=A,Q.numSpotShadows=L,Q.numSpotMaps=$,Q.numLightProbes=z,i.version=iU++)}function f(h,d){let p=0,m=0,_=0,M=0,S=0;const x=d.matrixWorldInverse;for(let v=0,w=h.length;v<w;v++){const A=h[v];if(A.isDirectionalLight){const L=i.directional[p];L.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(x),p++}else if(A.isSpotLight){const L=i.spot[_];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(x),_++}else if(A.isRectAreaLight){const L=i.rectArea[M];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(x),l.identity(),a.copy(A.matrixWorld),a.premultiply(x),l.extractRotation(a),L.halfWidth.set(A.width*.5,0,0),L.halfHeight.set(0,A.height*.5,0),L.halfWidth.applyMatrix4(l),L.halfHeight.applyMatrix4(l),M++}else if(A.isPointLight){const L=i.point[m];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(x),m++}else if(A.isHemisphereLight){const L=i.hemi[S];L.direction.setFromMatrixPosition(A.matrixWorld),L.direction.transformDirection(x),S++}}}return{setup:c,setupView:f,state:i}}function o0(n){const t=new sU(n),e=[],i=[];function s(d){h.camera=d,e.length=0,i.length=0}function a(d){e.push(d)}function l(d){i.push(d)}function c(){t.setup(e)}function f(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:l}}function oU(n){let t=new WeakMap;function e(s,a=0){const l=t.get(s);let c;return l===void 0?(c=new o0(n),t.set(s,[c])):a>=l.length?(c=new o0(n),l.push(c)):c=l[a],c}function i(){t=new WeakMap}return{get:e,dispose:i}}class aU extends ta{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lU extends ta{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fU(n,t,e){let i=new tx;const s=new Oe,a=new Oe,l=new Sn,c=new aU({depthPacking:iP}),f=new lU,h={},d=e.maxTextureSize,p={[ss]:jn,[jn]:ss,[Sr]:Sr},m=new os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:cU,fragmentShader:uU}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const M=new ni;M.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new zi(M,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pv;let v=this.type;this.render=function(N,z,Q){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;const D=n.getRenderTarget(),P=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),ht=n.state;ht.setBlending(ns),ht.buffers.color.setClear(1,1,1,1),ht.buffers.depth.setTest(!0),ht.setScissorTest(!1);const ot=v!==xr&&this.type===xr,yt=v===xr&&this.type!==xr;for(let Mt=0,ut=N.length;Mt<ut;Mt++){const lt=N[Mt],tt=lt.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);const Ot=tt.getFrameExtents();if(s.multiply(Ot),a.copy(tt.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/Ot.x),s.x=a.x*Ot.x,tt.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/Ot.y),s.y=a.y*Ot.y,tt.mapSize.y=a.y)),tt.map===null||ot===!0||yt===!0){const Nt=this.type!==xr?{minFilter:bi,magFilter:bi}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Ws(s.x,s.y,Nt),tt.map.texture.name=lt.name+".shadowMap",tt.camera.updateProjectionMatrix()}n.setRenderTarget(tt.map),n.clear();const Bt=tt.getViewportCount();for(let Nt=0;Nt<Bt;Nt++){const Qt=tt.getViewport(Nt);l.set(a.x*Qt.x,a.y*Qt.y,a.x*Qt.z,a.y*Qt.w),ht.viewport(l),tt.updateMatrices(lt,Nt),i=tt.getFrustum(),L(z,Q,tt.camera,lt,this.type)}tt.isPointLightShadow!==!0&&this.type===xr&&w(tt,Q),tt.needsUpdate=!1}v=this.type,x.needsUpdate=!1,n.setRenderTarget(D,P,k)};function w(N,z){const Q=t.update(S);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ws(s.x,s.y)),m.uniforms.shadow_pass.value=N.map.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(z,null,Q,m,S,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(z,null,Q,_,S,null)}function A(N,z,Q,D){let P=null;const k=Q.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)P=k;else if(P=Q.isPointLight===!0?f:c,n.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ht=P.uuid,ot=z.uuid;let yt=h[ht];yt===void 0&&(yt={},h[ht]=yt);let Mt=yt[ot];Mt===void 0&&(Mt=P.clone(),yt[ot]=Mt,z.addEventListener("dispose",$)),P=Mt}if(P.visible=z.visible,P.wireframe=z.wireframe,D===xr?P.side=z.shadowSide!==null?z.shadowSide:z.side:P.side=z.shadowSide!==null?z.shadowSide:p[z.side],P.alphaMap=z.alphaMap,P.alphaTest=z.alphaTest,P.map=z.map,P.clipShadows=z.clipShadows,P.clippingPlanes=z.clippingPlanes,P.clipIntersection=z.clipIntersection,P.displacementMap=z.displacementMap,P.displacementScale=z.displacementScale,P.displacementBias=z.displacementBias,P.wireframeLinewidth=z.wireframeLinewidth,P.linewidth=z.linewidth,Q.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const ht=n.properties.get(P);ht.light=Q}return P}function L(N,z,Q,D,P){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&P===xr)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,N.matrixWorld);const ot=t.update(N),yt=N.material;if(Array.isArray(yt)){const Mt=ot.groups;for(let ut=0,lt=Mt.length;ut<lt;ut++){const tt=Mt[ut],Ot=yt[tt.materialIndex];if(Ot&&Ot.visible){const Bt=A(N,Ot,D,P);N.onBeforeShadow(n,N,z,Q,ot,Bt,tt),n.renderBufferDirect(Q,null,ot,Bt,N,tt),N.onAfterShadow(n,N,z,Q,ot,Bt,tt)}}}else if(yt.visible){const Mt=A(N,yt,D,P);N.onBeforeShadow(n,N,z,Q,ot,Mt,null),n.renderBufferDirect(Q,null,ot,Mt,N,null),N.onAfterShadow(n,N,z,Q,ot,Mt,null)}}const ht=N.children;for(let ot=0,yt=ht.length;ot<yt;ot++)L(ht[ot],z,Q,D,P)}function $(N){N.target.removeEventListener("dispose",$);for(const Q in h){const D=h[Q],P=N.target.uuid;P in D&&(D[P].dispose(),delete D[P])}}}function hU(n){function t(){let G=!1;const Lt=new Sn;let St=null;const Et=new Sn(0,0,0,0);return{setMask:function(Dt){St!==Dt&&!G&&(n.colorMask(Dt,Dt,Dt,Dt),St=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,re,ye,tn,un){un===!0&&(Dt*=tn,re*=tn,ye*=tn),Lt.set(Dt,re,ye,tn),Et.equals(Lt)===!1&&(n.clearColor(Dt,re,ye,tn),Et.copy(Lt))},reset:function(){G=!1,St=null,Et.set(-1,0,0,0)}}}function e(){let G=!1,Lt=null,St=null,Et=null;return{setTest:function(Dt){Dt?Ft(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(Dt){Lt!==Dt&&!G&&(n.depthMask(Dt),Lt=Dt)},setFunc:function(Dt){if(St!==Dt){switch(Dt){case zC:n.depthFunc(n.NEVER);break;case HC:n.depthFunc(n.ALWAYS);break;case kC:n.depthFunc(n.LESS);break;case Xc:n.depthFunc(n.LEQUAL);break;case GC:n.depthFunc(n.EQUAL);break;case VC:n.depthFunc(n.GEQUAL);break;case WC:n.depthFunc(n.GREATER);break;case XC:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=Dt}},setLocked:function(Dt){G=Dt},setClear:function(Dt){Et!==Dt&&(n.clearDepth(Dt),Et=Dt)},reset:function(){G=!1,Lt=null,St=null,Et=null}}}function i(){let G=!1,Lt=null,St=null,Et=null,Dt=null,re=null,ye=null,tn=null,un=null;return{setTest:function(Ae){G||(Ae?Ft(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(Ae){Lt!==Ae&&!G&&(n.stencilMask(Ae),Lt=Ae)},setFunc:function(Ae,Ti,di){(St!==Ae||Et!==Ti||Dt!==di)&&(n.stencilFunc(Ae,Ti,di),St=Ae,Et=Ti,Dt=di)},setOp:function(Ae,Ti,di){(re!==Ae||ye!==Ti||tn!==di)&&(n.stencilOp(Ae,Ti,di),re=Ae,ye=Ti,tn=di)},setLocked:function(Ae){G=Ae},setClear:function(Ae){un!==Ae&&(n.clearStencil(Ae),un=Ae)},reset:function(){G=!1,Lt=null,St=null,Et=null,Dt=null,re=null,ye=null,tn=null,un=null}}}const s=new t,a=new e,l=new i,c=new WeakMap,f=new WeakMap;let h={},d={},p=new WeakMap,m=[],_=null,M=!1,S=null,x=null,v=null,w=null,A=null,L=null,$=null,N=new Ie(0,0,0),z=0,Q=!1,D=null,P=null,k=null,ht=null,ot=null;const yt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Mt=!1,ut=0;const lt=n.getParameter(n.VERSION);lt.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(lt)[1]),Mt=ut>=1):lt.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),Mt=ut>=2);let tt=null,Ot={};const Bt=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),Qt=new Sn().fromArray(Bt),xe=new Sn().fromArray(Nt);function dt(G,Lt,St,Et){const Dt=new Uint8Array(4),re=n.createTexture();n.bindTexture(G,re),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<St;ye++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Lt,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(Lt+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return re}const Tt={};Tt[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),Tt[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Tt[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Ft(n.DEPTH_TEST),a.setFunc(Xc),W(!1),et(f_),Ft(n.CULL_FACE),I(ns);function Ft(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function X(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function vt(G,Lt){return d[G]!==Lt?(n.bindFramebuffer(G,Lt),d[G]=Lt,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Lt),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Lt),!0):!1}function pt(G,Lt){let St=m,Et=!1;if(G){St=p.get(Lt),St===void 0&&(St=[],p.set(Lt,St));const Dt=G.textures;if(St.length!==Dt.length||St[0]!==n.COLOR_ATTACHMENT0){for(let re=0,ye=Dt.length;re<ye;re++)St[re]=n.COLOR_ATTACHMENT0+re;St.length=Dt.length,Et=!0}}else St[0]!==n.BACK&&(St[0]=n.BACK,Et=!0);Et&&n.drawBuffers(St)}function Rt(G){return _!==G?(n.useProgram(G),_=G,!0):!1}const $t={[Ns]:n.FUNC_ADD,[yC]:n.FUNC_SUBTRACT,[EC]:n.FUNC_REVERSE_SUBTRACT};$t[AC]=n.MIN,$t[bC]=n.MAX;const B={[TC]:n.ZERO,[wC]:n.ONE,[RC]:n.SRC_COLOR,[Ih]:n.SRC_ALPHA,[UC]:n.SRC_ALPHA_SATURATE,[IC]:n.DST_COLOR,[PC]:n.DST_ALPHA,[CC]:n.ONE_MINUS_SRC_COLOR,[Dh]:n.ONE_MINUS_SRC_ALPHA,[DC]:n.ONE_MINUS_DST_COLOR,[LC]:n.ONE_MINUS_DST_ALPHA,[NC]:n.CONSTANT_COLOR,[FC]:n.ONE_MINUS_CONSTANT_COLOR,[OC]:n.CONSTANT_ALPHA,[BC]:n.ONE_MINUS_CONSTANT_ALPHA};function I(G,Lt,St,Et,Dt,re,ye,tn,un,Ae){if(G===ns){M===!0&&(X(n.BLEND),M=!1);return}if(M===!1&&(Ft(n.BLEND),M=!0),G!==SC){if(G!==S||Ae!==Q){if((x!==Ns||A!==Ns)&&(n.blendEquation(n.FUNC_ADD),x=Ns,A=Ns),Ae)switch(G){case zo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case h_:n.blendFunc(n.ONE,n.ONE);break;case d_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case p_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case zo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case h_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case d_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case p_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}v=null,w=null,L=null,$=null,N.set(0,0,0),z=0,S=G,Q=Ae}return}Dt=Dt||Lt,re=re||St,ye=ye||Et,(Lt!==x||Dt!==A)&&(n.blendEquationSeparate($t[Lt],$t[Dt]),x=Lt,A=Dt),(St!==v||Et!==w||re!==L||ye!==$)&&(n.blendFuncSeparate(B[St],B[Et],B[re],B[ye]),v=St,w=Et,L=re,$=ye),(tn.equals(N)===!1||un!==z)&&(n.blendColor(tn.r,tn.g,tn.b,un),N.copy(tn),z=un),S=G,Q=!1}function U(G,Lt){G.side===Sr?X(n.CULL_FACE):Ft(n.CULL_FACE);let St=G.side===jn;Lt&&(St=!St),W(St),G.blending===zo&&G.transparent===!1?I(ns):I(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);const Et=G.stencilWrite;l.setTest(Et),Et&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ct(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ft(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function W(G){D!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),D=G)}function et(G){G!==vC?(Ft(n.CULL_FACE),G!==P&&(G===f_?n.cullFace(n.BACK):G===xC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),P=G}function rt(G){G!==k&&(Mt&&n.lineWidth(G),k=G)}function ct(G,Lt,St){G?(Ft(n.POLYGON_OFFSET_FILL),(ht!==Lt||ot!==St)&&(n.polygonOffset(Lt,St),ht=Lt,ot=St)):X(n.POLYGON_OFFSET_FILL)}function mt(G){G?Ft(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function R(G){G===void 0&&(G=n.TEXTURE0+yt-1),tt!==G&&(n.activeTexture(G),tt=G)}function y(G,Lt,St){St===void 0&&(tt===null?St=n.TEXTURE0+yt-1:St=tt);let Et=Ot[St];Et===void 0&&(Et={type:void 0,texture:void 0},Ot[St]=Et),(Et.type!==G||Et.texture!==Lt)&&(tt!==St&&(n.activeTexture(St),tt=St),n.bindTexture(G,Lt||Tt[G]),Et.type=G,Et.texture=Lt)}function O(){const G=Ot[tt];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ct(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function gt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ut(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(G){Qt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Qt.copy(G))}function Vt(G){xe.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),xe.copy(G))}function ee(G,Lt){let St=f.get(Lt);St===void 0&&(St=new WeakMap,f.set(Lt,St));let Et=St.get(G);Et===void 0&&(Et=n.getUniformBlockIndex(Lt,G.name),St.set(G,Et))}function Zt(G,Lt){const Et=f.get(Lt).get(G);c.get(Lt)!==Et&&(n.uniformBlockBinding(Lt,Et,G.__bindingPointIndex),c.set(Lt,Et))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},tt=null,Ot={},d={},p=new WeakMap,m=[],_=null,M=!1,S=null,x=null,v=null,w=null,A=null,L=null,$=null,N=new Ie(0,0,0),z=0,Q=!1,D=null,P=null,k=null,ht=null,ot=null,Qt.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:Ft,disable:X,bindFramebuffer:vt,drawBuffers:pt,useProgram:Rt,setBlending:I,setMaterial:U,setFlipSided:W,setCullFace:et,setLineWidth:rt,setPolygonOffset:ct,setScissorTest:mt,activeTexture:R,bindTexture:y,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:nt,texImage2D:Ut,texImage3D:ae,updateUBOMapping:ee,uniformBlockBinding:Zt,texStorage2D:zt,texStorage3D:At,texSubImage2D:J,texSubImage3D:Ct,compressedTexSubImage2D:gt,compressedTexSubImage3D:wt,scissor:jt,viewport:Vt,reset:ve}}function a0(n,t,e,i){const s=dU(i);switch(e){case Fv:return n*t;case Bv:return n*t;case zv:return n*t*2;case Hv:return n*t/s.components*s.byteLength;case Vd:return n*t/s.components*s.byteLength;case kv:return n*t*2/s.components*s.byteLength;case Wd:return n*t*2/s.components*s.byteLength;case Ov:return n*t*3/s.components*s.byteLength;case Bi:return n*t*4/s.components*s.byteLength;case Xd:return n*t*4/s.components*s.byteLength;case Nc:case Fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zh:case kh:return Math.max(n,16)*Math.max(t,8)/4;case Bh:case Hh:return Math.max(n,8)*Math.max(t,8)/2;case Gh:case Vh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $h:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Qh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case td:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ed:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case nd:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case id:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rd:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case zc:case sd:case od:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Gv:case ad:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ld:case cd:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dU(n){switch(n){case wr:case Dv:return{byteLength:1,components:1};case Ya:case Uv:case ja:return{byteLength:2,components:1};case kd:case Gd:return{byteLength:2,components:4};case Vs:case Hd:case Er:return{byteLength:4,components:1};case Nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function pU(n,t,e,i,s,a,l){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Oe,d=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,y){return _?new OffscreenCanvas(R,y):Zc("canvas")}function S(R,y,O){let j=1;const nt=mt(R);if((nt.width>O||nt.height>O)&&(j=O/Math.max(nt.width,nt.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(j*nt.width),Ct=Math.floor(j*nt.height);p===void 0&&(p=M(J,Ct));const gt=y?M(J,Ct):p;return gt.width=J,gt.height=Ct,gt.getContext("2d").drawImage(R,0,0,J,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+Ct+")."),gt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function x(R){return R.generateMipmaps&&R.minFilter!==bi&&R.minFilter!==Fi}function v(R){n.generateMipmap(R)}function w(R,y,O,j,nt=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=y;if(y===n.RED&&(O===n.FLOAT&&(J=n.R32F),O===n.HALF_FLOAT&&(J=n.R16F),O===n.UNSIGNED_BYTE&&(J=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.R8UI),O===n.UNSIGNED_SHORT&&(J=n.R16UI),O===n.UNSIGNED_INT&&(J=n.R32UI),O===n.BYTE&&(J=n.R8I),O===n.SHORT&&(J=n.R16I),O===n.INT&&(J=n.R32I)),y===n.RG&&(O===n.FLOAT&&(J=n.RG32F),O===n.HALF_FLOAT&&(J=n.RG16F),O===n.UNSIGNED_BYTE&&(J=n.RG8)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.RG8UI),O===n.UNSIGNED_SHORT&&(J=n.RG16UI),O===n.UNSIGNED_INT&&(J=n.RG32UI),O===n.BYTE&&(J=n.RG8I),O===n.SHORT&&(J=n.RG16I),O===n.INT&&(J=n.RG32I)),y===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),y===n.RGBA){const Ct=nt?qc:Ne.getTransfer(j);O===n.FLOAT&&(J=n.RGBA32F),O===n.HALF_FLOAT&&(J=n.RGBA16F),O===n.UNSIGNED_BYTE&&(J=Ct===Ye?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function A(R,y){let O;return R?y===null||y===Vs||y===Ko?O=n.DEPTH24_STENCIL8:y===Er?O=n.DEPTH32F_STENCIL8:y===Ya&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Vs||y===Ko?O=n.DEPTH_COMPONENT24:y===Er?O=n.DEPTH_COMPONENT32F:y===Ya&&(O=n.DEPTH_COMPONENT16),O}function L(R,y){return x(R)===!0||R.isFramebufferTexture&&R.minFilter!==bi&&R.minFilter!==Fi?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function $(R){const y=R.target;y.removeEventListener("dispose",$),z(y),y.isVideoTexture&&d.delete(y)}function N(R){const y=R.target;y.removeEventListener("dispose",N),D(y)}function z(R){const y=i.get(R);if(y.__webglInit===void 0)return;const O=R.source,j=m.get(O);if(j){const nt=j[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&Q(R),Object.keys(j).length===0&&m.delete(O)}i.remove(R)}function Q(R){const y=i.get(R);n.deleteTexture(y.__webglTexture);const O=R.source,j=m.get(O);delete j[y.__cacheKey],l.memory.textures--}function D(R){const y=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let nt=0;nt<y.__webglFramebuffer[j].length;nt++)n.deleteFramebuffer(y.__webglFramebuffer[j][nt]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=R.textures;for(let j=0,nt=O.length;j<nt;j++){const J=i.get(O[j]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),l.memory.textures--),i.remove(O[j])}i.remove(R)}let P=0;function k(){P=0}function ht(){const R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function ot(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function yt(R,y){const O=i.get(R);if(R.isVideoTexture&&rt(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(O,R,y);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function Mt(R,y){const O=i.get(R);if(R.version>0&&O.__version!==R.version){xe(O,R,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function ut(R,y){const O=i.get(R);if(R.version>0&&O.__version!==R.version){xe(O,R,y);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function lt(R,y){const O=i.get(R);if(R.version>0&&O.__version!==R.version){dt(O,R,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}const tt={[Fh]:n.REPEAT,[Os]:n.CLAMP_TO_EDGE,[Oh]:n.MIRRORED_REPEAT},Ot={[bi]:n.NEAREST,[eP]:n.NEAREST_MIPMAP_NEAREST,[ec]:n.NEAREST_MIPMAP_LINEAR,[Fi]:n.LINEAR,[Hf]:n.LINEAR_MIPMAP_NEAREST,[Bs]:n.LINEAR_MIPMAP_LINEAR},Bt={[oP]:n.NEVER,[hP]:n.ALWAYS,[aP]:n.LESS,[Vv]:n.LEQUAL,[lP]:n.EQUAL,[fP]:n.GEQUAL,[cP]:n.GREATER,[uP]:n.NOTEQUAL};function Nt(R,y){if(y.type===Er&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Fi||y.magFilter===Hf||y.magFilter===ec||y.magFilter===Bs||y.minFilter===Fi||y.minFilter===Hf||y.minFilter===ec||y.minFilter===Bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,tt[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,tt[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,tt[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ot[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ot[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Bt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===bi||y.minFilter!==ec&&y.minFilter!==Bs||y.type===Er&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Qt(R,y){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",$));const j=y.source;let nt=m.get(j);nt===void 0&&(nt={},m.set(j,nt));const J=ot(y);if(J!==R.__cacheKey){nt[J]===void 0&&(nt[J]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,O=!0),nt[J].usedTimes++;const Ct=nt[R.__cacheKey];Ct!==void 0&&(nt[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&Q(y)),R.__cacheKey=J,R.__webglTexture=nt[J].texture}return O}function xe(R,y,O){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);const nt=Qt(R,y),J=y.source;e.bindTexture(j,R.__webglTexture,n.TEXTURE0+O);const Ct=i.get(J);if(J.version!==Ct.__version||nt===!0){e.activeTexture(n.TEXTURE0+O);const gt=Ne.getPrimaries(Ne.workingColorSpace),wt=y.colorSpace===Jr?null:Ne.getPrimaries(y.colorSpace),zt=y.colorSpace===Jr||gt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let At=S(y.image,!1,s.maxTextureSize);At=ct(y,At);const Ut=a.convert(y.format,y.colorSpace),ae=a.convert(y.type);let jt=w(y.internalFormat,Ut,ae,y.colorSpace,y.isVideoTexture);Nt(j,y);let Vt;const ee=y.mipmaps,Zt=y.isVideoTexture!==!0,ve=Ct.__version===void 0||nt===!0,G=J.dataReady,Lt=L(y,At);if(y.isDepthTexture)jt=A(y.format===Zo,y.type),ve&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,jt,At.width,At.height):e.texImage2D(n.TEXTURE_2D,0,jt,At.width,At.height,0,Ut,ae,null));else if(y.isDataTexture)if(ee.length>0){Zt&&ve&&e.texStorage2D(n.TEXTURE_2D,Lt,jt,ee[0].width,ee[0].height);for(let St=0,Et=ee.length;St<Et;St++)Vt=ee[St],Zt?G&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,Vt.width,Vt.height,Ut,ae,Vt.data):e.texImage2D(n.TEXTURE_2D,St,jt,Vt.width,Vt.height,0,Ut,ae,Vt.data);y.generateMipmaps=!1}else Zt?(ve&&e.texStorage2D(n.TEXTURE_2D,Lt,jt,At.width,At.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At.width,At.height,Ut,ae,At.data)):e.texImage2D(n.TEXTURE_2D,0,jt,At.width,At.height,0,Ut,ae,At.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Zt&&ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,jt,ee[0].width,ee[0].height,At.depth);for(let St=0,Et=ee.length;St<Et;St++)if(Vt=ee[St],y.format!==Bi)if(Ut!==null)if(Zt){if(G)if(y.layerUpdates.size>0){const Dt=a0(Vt.width,Vt.height,y.format,y.type);for(const re of y.layerUpdates){const ye=Vt.data.subarray(re*Dt/Vt.data.BYTES_PER_ELEMENT,(re+1)*Dt/Vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,re,Vt.width,Vt.height,1,Ut,ye,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,0,Vt.width,Vt.height,At.depth,Ut,Vt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,St,jt,Vt.width,Vt.height,At.depth,0,Vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,St,0,0,0,Vt.width,Vt.height,At.depth,Ut,ae,Vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,St,jt,Vt.width,Vt.height,At.depth,0,Ut,ae,Vt.data)}else{Zt&&ve&&e.texStorage2D(n.TEXTURE_2D,Lt,jt,ee[0].width,ee[0].height);for(let St=0,Et=ee.length;St<Et;St++)Vt=ee[St],y.format!==Bi?Ut!==null?Zt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,St,0,0,Vt.width,Vt.height,Ut,Vt.data):e.compressedTexImage2D(n.TEXTURE_2D,St,jt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?G&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,Vt.width,Vt.height,Ut,ae,Vt.data):e.texImage2D(n.TEXTURE_2D,St,jt,Vt.width,Vt.height,0,Ut,ae,Vt.data)}else if(y.isDataArrayTexture)if(Zt){if(ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,jt,At.width,At.height,At.depth),G)if(y.layerUpdates.size>0){const St=a0(At.width,At.height,y.format,y.type);for(const Et of y.layerUpdates){const Dt=At.data.subarray(Et*St/At.data.BYTES_PER_ELEMENT,(Et+1)*St/At.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Et,At.width,At.height,1,Ut,ae,Dt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ut,ae,At.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,jt,At.width,At.height,At.depth,0,Ut,ae,At.data);else if(y.isData3DTexture)Zt?(ve&&e.texStorage3D(n.TEXTURE_3D,Lt,jt,At.width,At.height,At.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ut,ae,At.data)):e.texImage3D(n.TEXTURE_3D,0,jt,At.width,At.height,At.depth,0,Ut,ae,At.data);else if(y.isFramebufferTexture){if(ve)if(Zt)e.texStorage2D(n.TEXTURE_2D,Lt,jt,At.width,At.height);else{let St=At.width,Et=At.height;for(let Dt=0;Dt<Lt;Dt++)e.texImage2D(n.TEXTURE_2D,Dt,jt,St,Et,0,Ut,ae,null),St>>=1,Et>>=1}}else if(ee.length>0){if(Zt&&ve){const St=mt(ee[0]);e.texStorage2D(n.TEXTURE_2D,Lt,jt,St.width,St.height)}for(let St=0,Et=ee.length;St<Et;St++)Vt=ee[St],Zt?G&&e.texSubImage2D(n.TEXTURE_2D,St,0,0,Ut,ae,Vt):e.texImage2D(n.TEXTURE_2D,St,jt,Ut,ae,Vt);y.generateMipmaps=!1}else if(Zt){if(ve){const St=mt(At);e.texStorage2D(n.TEXTURE_2D,Lt,jt,St.width,St.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ut,ae,At)}else e.texImage2D(n.TEXTURE_2D,0,jt,Ut,ae,At);x(y)&&v(j),Ct.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function dt(R,y,O){if(y.image.length!==6)return;const j=Qt(R,y),nt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+O);const J=i.get(nt);if(nt.version!==J.__version||j===!0){e.activeTexture(n.TEXTURE0+O);const Ct=Ne.getPrimaries(Ne.workingColorSpace),gt=y.colorSpace===Jr?null:Ne.getPrimaries(y.colorSpace),wt=y.colorSpace===Jr||Ct===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const zt=y.isCompressedTexture||y.image[0].isCompressedTexture,At=y.image[0]&&y.image[0].isDataTexture,Ut=[];for(let Et=0;Et<6;Et++)!zt&&!At?Ut[Et]=S(y.image[Et],!0,s.maxCubemapSize):Ut[Et]=At?y.image[Et].image:y.image[Et],Ut[Et]=ct(y,Ut[Et]);const ae=Ut[0],jt=a.convert(y.format,y.colorSpace),Vt=a.convert(y.type),ee=w(y.internalFormat,jt,Vt,y.colorSpace),Zt=y.isVideoTexture!==!0,ve=J.__version===void 0||j===!0,G=nt.dataReady;let Lt=L(y,ae);Nt(n.TEXTURE_CUBE_MAP,y);let St;if(zt){Zt&&ve&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,ee,ae.width,ae.height);for(let Et=0;Et<6;Et++){St=Ut[Et].mipmaps;for(let Dt=0;Dt<St.length;Dt++){const re=St[Dt];y.format!==Bi?jt!==null?Zt?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Dt,0,0,re.width,re.height,jt,re.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Dt,ee,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Dt,0,0,re.width,re.height,jt,Vt,re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Dt,ee,re.width,re.height,0,jt,Vt,re.data)}}}else{if(St=y.mipmaps,Zt&&ve){St.length>0&&Lt++;const Et=mt(Ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,ee,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(At){Zt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Ut[Et].width,Ut[Et].height,jt,Vt,Ut[Et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ee,Ut[Et].width,Ut[Et].height,0,jt,Vt,Ut[Et].data);for(let Dt=0;Dt<St.length;Dt++){const ye=St[Dt].image[Et].image;Zt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Dt+1,0,0,ye.width,ye.height,jt,Vt,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Dt+1,ee,ye.width,ye.height,0,jt,Vt,ye.data)}}else{Zt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,jt,Vt,Ut[Et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ee,jt,Vt,Ut[Et]);for(let Dt=0;Dt<St.length;Dt++){const re=St[Dt];Zt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Dt+1,0,0,jt,Vt,re.image[Et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Dt+1,ee,jt,Vt,re.image[Et])}}}x(y)&&v(n.TEXTURE_CUBE_MAP),J.__version=nt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Tt(R,y,O,j,nt,J){const Ct=a.convert(O.format,O.colorSpace),gt=a.convert(O.type),wt=w(O.internalFormat,Ct,gt,O.colorSpace);if(!i.get(y).__hasExternalTextures){const At=Math.max(1,y.width>>J),Ut=Math.max(1,y.height>>J);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,wt,At,Ut,y.depth,0,Ct,gt,null):e.texImage2D(nt,J,wt,At,Ut,0,Ct,gt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),et(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,nt,i.get(O).__webglTexture,0,W(y)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,nt,i.get(O).__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(R,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){const j=y.depthTexture,nt=j&&j.isDepthTexture?j.type:null,J=A(y.stencilBuffer,nt),Ct=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=W(y);et(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt,J,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,J,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,J,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,R)}else{const j=y.textures;for(let nt=0;nt<j.length;nt++){const J=j[nt],Ct=a.convert(J.format,J.colorSpace),gt=a.convert(J.type),wt=w(J.internalFormat,Ct,gt,J.colorSpace),zt=W(y);O&&et(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,wt,y.width,y.height):et(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt,wt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,wt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function X(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),yt(y.depthTexture,0);const j=i.get(y.depthTexture).__webglTexture,nt=W(y);if(y.depthTexture.format===Ho)et(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(y.depthTexture.format===Zo)et(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function vt(R){const y=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");X(y.__webglFramebuffer,R)}else if(O){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]=n.createRenderbuffer(),Ft(y.__webglDepthbuffer[j],R,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Ft(y.__webglDepthbuffer,R,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(R,y,O){const j=i.get(R);y!==void 0&&Tt(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&vt(R)}function Rt(R){const y=R.texture,O=i.get(R),j=i.get(y);R.addEventListener("dispose",N);const nt=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ct=nt.length>1;if(Ct||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,l.memory.textures++),J){O.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[gt]=[];for(let wt=0;wt<y.mipmaps.length;wt++)O.__webglFramebuffer[gt][wt]=n.createFramebuffer()}else O.__webglFramebuffer[gt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)O.__webglFramebuffer[gt]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let gt=0,wt=nt.length;gt<wt;gt++){const zt=i.get(nt[gt]);zt.__webglTexture===void 0&&(zt.__webglTexture=n.createTexture(),l.memory.textures++)}if(R.samples>0&&et(R)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let gt=0;gt<nt.length;gt++){const wt=nt[gt];O.__webglColorRenderbuffer[gt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[gt]);const zt=a.convert(wt.format,wt.colorSpace),At=a.convert(wt.type),Ut=w(wt.internalFormat,zt,At,wt.colorSpace,R.isXRRenderTarget===!0),ae=W(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,Ut,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,O.__webglColorRenderbuffer[gt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Nt(n.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)Tt(O.__webglFramebuffer[gt][wt],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt);else Tt(O.__webglFramebuffer[gt],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(y)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let gt=0,wt=nt.length;gt<wt;gt++){const zt=nt[gt],At=i.get(zt);e.bindTexture(n.TEXTURE_2D,At.__webglTexture),Nt(n.TEXTURE_2D,zt),Tt(O.__webglFramebuffer,R,zt,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,0),x(zt)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let gt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(gt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(gt,j.__webglTexture),Nt(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)Tt(O.__webglFramebuffer[wt],R,y,n.COLOR_ATTACHMENT0,gt,wt);else Tt(O.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,gt,0);x(y)&&v(gt),e.unbindTexture()}R.depthBuffer&&vt(R)}function $t(R){const y=R.textures;for(let O=0,j=y.length;O<j;O++){const nt=y[O];if(x(nt)){const J=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ct=i.get(nt).__webglTexture;e.bindTexture(J,Ct),v(J),e.unbindTexture()}}}const B=[],I=[];function U(R){if(R.samples>0){if(et(R)===!1){const y=R.textures,O=R.width,j=R.height;let nt=n.COLOR_BUFFER_BIT;const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(R),gt=y.length>1;if(gt)for(let wt=0;wt<y.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let wt=0;wt<y.length;wt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),gt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[wt]);const zt=i.get(y[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,zt,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,nt,n.NEAREST),f===!0&&(B.length=0,I.length=0,B.push(n.COLOR_ATTACHMENT0+wt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(B.push(J),I.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,B))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<y.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[wt]);const zt=i.get(y[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&f){const y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function W(R){return Math.min(s.maxSamples,R.samples)}function et(R){const y=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function rt(R){const y=l.render.frame;d.get(R)!==y&&(d.set(R,y),R.update())}function ct(R,y){const O=R.colorSpace,j=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==fs&&O!==Jr&&(Ne.getTransfer(O)===Ye?(j!==Bi||nt!==wr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=ht,this.resetTextureUnits=k,this.setTexture2D=yt,this.setTexture2DArray=Mt,this.setTexture3D=ut,this.setTextureCube=lt,this.rebindTextures=pt,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=et}function mU(n,t){function e(i,s=Jr){let a;const l=Ne.getTransfer(s);if(i===wr)return n.UNSIGNED_BYTE;if(i===kd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dv)return n.BYTE;if(i===Uv)return n.SHORT;if(i===Ya)return n.UNSIGNED_SHORT;if(i===Hd)return n.INT;if(i===Vs)return n.UNSIGNED_INT;if(i===Er)return n.FLOAT;if(i===ja)return n.HALF_FLOAT;if(i===Fv)return n.ALPHA;if(i===Ov)return n.RGB;if(i===Bi)return n.RGBA;if(i===Bv)return n.LUMINANCE;if(i===zv)return n.LUMINANCE_ALPHA;if(i===Ho)return n.DEPTH_COMPONENT;if(i===Zo)return n.DEPTH_STENCIL;if(i===Hv)return n.RED;if(i===Vd)return n.RED_INTEGER;if(i===kv)return n.RG;if(i===Wd)return n.RG_INTEGER;if(i===Xd)return n.RGBA_INTEGER;if(i===Nc||i===Fc||i===Oc||i===Bc)if(l===Ye)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Nc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Nc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bh||i===zh||i===Hh||i===kh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Bh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gh||i===Vh||i===Wh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Gh||i===Vh)return l===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Wh)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xh||i===qh||i===Yh||i===$h||i===Kh||i===Zh||i===jh||i===Jh||i===Qh||i===td||i===ed||i===nd||i===id||i===rd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Xh)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qh)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yh)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$h)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kh)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zh)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jh)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jh)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qh)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===td)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ed)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nd)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===id)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rd)return l===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zc||i===sd||i===od)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===zc)return l===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===od)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gv||i===ad||i===ld||i===cd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===zc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ad)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ld)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ko?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class gU extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ia extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _U={type:"move"};class dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,l=null;const c=this._targetRay,f=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){l=!0;for(const S of t.hand.values()){const x=e.getJointPose(S,i),v=this._getHandJoint(h,S);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=d.position.distanceTo(p.position),_=.02,M=.005;h.inputState.pinching&&m>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&m<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(_U)))}return c!==null&&(c.visible=s!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ia;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const vU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xU=`
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

}`;class MU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Jn,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new os({vertexShader:vU,fragmentShader:xU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zi(new gu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SU extends Qo{constructor(t,e){super();const i=this;let s=null,a=1,l=null,c="local-floor",f=1,h=null,d=null,p=null,m=null,_=null,M=null;const S=new MU,x=e.getContextAttributes();let v=null,w=null;const A=[],L=[],$=new Oe;let N=null;const z=new Ei;z.layers.enable(1),z.viewport=new Sn;const Q=new Ei;Q.layers.enable(2),Q.viewport=new Sn;const D=[z,Q],P=new gU;P.layers.enable(1),P.layers.enable(2);let k=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(dt){let Tt=A[dt];return Tt===void 0&&(Tt=new dh,A[dt]=Tt),Tt.getTargetRaySpace()},this.getControllerGrip=function(dt){let Tt=A[dt];return Tt===void 0&&(Tt=new dh,A[dt]=Tt),Tt.getGripSpace()},this.getHand=function(dt){let Tt=A[dt];return Tt===void 0&&(Tt=new dh,A[dt]=Tt),Tt.getHandSpace()};function ot(dt){const Tt=L.indexOf(dt.inputSource);if(Tt===-1)return;const Ft=A[Tt];Ft!==void 0&&(Ft.update(dt.inputSource,dt.frame,h||l),Ft.dispatchEvent({type:dt.type,data:dt.inputSource}))}function yt(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",yt),s.removeEventListener("inputsourceschange",Mt);for(let dt=0;dt<A.length;dt++){const Tt=L[dt];Tt!==null&&(L[dt]=null,A[dt].disconnect(Tt))}k=null,ht=null,S.reset(),t.setRenderTarget(v),_=null,m=null,p=null,s=null,w=null,xe.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize($.width,$.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(dt){a=dt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(dt){c=dt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(dt){h=dt},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(dt){if(s=dt,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",yt),s.addEventListener("inputsourceschange",Mt),x.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize($),s.renderState.layers===void 0){const Tt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),w=new Ws(_.framebufferWidth,_.framebufferHeight,{format:Bi,type:wr,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Tt=null,Ft=null,X=null;x.depth&&(X=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=x.stencil?Zo:Ho,Ft=x.stencil?Ko:Vs);const vt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:a};p=new XRWebGLBinding(s,e),m=p.createProjectionLayer(vt),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),w=new Ws(m.textureWidth,m.textureHeight,{format:Bi,type:wr,depthTexture:new nx(m.textureWidth,m.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await s.requestReferenceSpace(c),xe.setContext(s),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Mt(dt){for(let Tt=0;Tt<dt.removed.length;Tt++){const Ft=dt.removed[Tt],X=L.indexOf(Ft);X>=0&&(L[X]=null,A[X].disconnect(Ft))}for(let Tt=0;Tt<dt.added.length;Tt++){const Ft=dt.added[Tt];let X=L.indexOf(Ft);if(X===-1){for(let pt=0;pt<A.length;pt++)if(pt>=L.length){L.push(Ft),X=pt;break}else if(L[pt]===null){L[pt]=Ft,X=pt;break}if(X===-1)break}const vt=A[X];vt&&vt.connect(Ft)}}const ut=new K,lt=new K;function tt(dt,Tt,Ft){ut.setFromMatrixPosition(Tt.matrixWorld),lt.setFromMatrixPosition(Ft.matrixWorld);const X=ut.distanceTo(lt),vt=Tt.projectionMatrix.elements,pt=Ft.projectionMatrix.elements,Rt=vt[14]/(vt[10]-1),$t=vt[14]/(vt[10]+1),B=(vt[9]+1)/vt[5],I=(vt[9]-1)/vt[5],U=(vt[8]-1)/vt[0],W=(pt[8]+1)/pt[0],et=Rt*U,rt=Rt*W,ct=X/(-U+W),mt=ct*-U;Tt.matrixWorld.decompose(dt.position,dt.quaternion,dt.scale),dt.translateX(mt),dt.translateZ(ct),dt.matrixWorld.compose(dt.position,dt.quaternion,dt.scale),dt.matrixWorldInverse.copy(dt.matrixWorld).invert();const R=Rt+ct,y=$t+ct,O=et-mt,j=rt+(X-mt),nt=B*$t/y*R,J=I*$t/y*R;dt.projectionMatrix.makePerspective(O,j,nt,J,R,y),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert()}function Ot(dt,Tt){Tt===null?dt.matrixWorld.copy(dt.matrix):dt.matrixWorld.multiplyMatrices(Tt.matrixWorld,dt.matrix),dt.matrixWorldInverse.copy(dt.matrixWorld).invert()}this.updateCamera=function(dt){if(s===null)return;S.texture!==null&&(dt.near=S.depthNear,dt.far=S.depthFar),P.near=Q.near=z.near=dt.near,P.far=Q.far=z.far=dt.far,(k!==P.near||ht!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),k=P.near,ht=P.far,z.near=k,z.far=ht,Q.near=k,Q.far=ht,z.updateProjectionMatrix(),Q.updateProjectionMatrix(),dt.updateProjectionMatrix());const Tt=dt.parent,Ft=P.cameras;Ot(P,Tt);for(let X=0;X<Ft.length;X++)Ot(Ft[X],Tt);Ft.length===2?tt(P,z,Q):P.projectionMatrix.copy(z.projectionMatrix),Bt(dt,P,Tt)};function Bt(dt,Tt,Ft){Ft===null?dt.matrix.copy(Tt.matrixWorld):(dt.matrix.copy(Ft.matrixWorld),dt.matrix.invert(),dt.matrix.multiply(Tt.matrixWorld)),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.updateMatrixWorld(!0),dt.projectionMatrix.copy(Tt.projectionMatrix),dt.projectionMatrixInverse.copy(Tt.projectionMatrixInverse),dt.isPerspectiveCamera&&(dt.fov=ud*2*Math.atan(1/dt.projectionMatrix.elements[5]),dt.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(m===null&&_===null))return f},this.setFoveation=function(dt){f=dt,m!==null&&(m.fixedFoveation=dt),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=dt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(P)};let Nt=null;function Qt(dt,Tt){if(d=Tt.getViewerPose(h||l),M=Tt,d!==null){const Ft=d.views;_!==null&&(t.setRenderTargetFramebuffer(w,_.framebuffer),t.setRenderTarget(w));let X=!1;Ft.length!==P.cameras.length&&(P.cameras.length=0,X=!0);for(let pt=0;pt<Ft.length;pt++){const Rt=Ft[pt];let $t=null;if(_!==null)$t=_.getViewport(Rt);else{const I=p.getViewSubImage(m,Rt);$t=I.viewport,pt===0&&(t.setRenderTargetTextures(w,I.colorTexture,m.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(w))}let B=D[pt];B===void 0&&(B=new Ei,B.layers.enable(pt),B.viewport=new Sn,D[pt]=B),B.matrix.fromArray(Rt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Rt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set($t.x,$t.y,$t.width,$t.height),pt===0&&(P.matrix.copy(B.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),X===!0&&P.cameras.push(B)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const pt=p.getDepthInformation(Ft[0]);pt&&pt.isValid&&pt.texture&&S.init(t,pt,s.renderState)}}for(let Ft=0;Ft<A.length;Ft++){const X=L[Ft],vt=A[Ft];X!==null&&vt!==void 0&&vt.update(X,Tt,h||l)}Nt&&Nt(dt,Tt),Tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Tt}),M=null}const xe=new ex;xe.setAnimationLoop(Qt),this.setAnimationLoop=function(dt){Nt=dt},this.dispose=function(){}}}const Cs=new zn,yU=new on;function EU(n,t){function e(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function i(x,v){v.color.getRGB(x.fogColor.value,jv(n)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function s(x,v,w,A,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(x,v):v.isMeshToonMaterial?(a(x,v),p(x,v)):v.isMeshPhongMaterial?(a(x,v),d(x,v)):v.isMeshStandardMaterial?(a(x,v),m(x,v),v.isMeshPhysicalMaterial&&_(x,v,L)):v.isMeshMatcapMaterial?(a(x,v),M(x,v)):v.isMeshDepthMaterial?a(x,v):v.isMeshDistanceMaterial?(a(x,v),S(x,v)):v.isMeshNormalMaterial?a(x,v):v.isLineBasicMaterial?(l(x,v),v.isLineDashedMaterial&&c(x,v)):v.isPointsMaterial?f(x,v,w,A):v.isSpriteMaterial?h(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,e(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===jn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,e(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===jn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,e(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,e(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const w=t.get(v),A=w.envMap,L=w.envMapRotation;A&&(x.envMap.value=A,Cs.copy(L),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),x.envMapRotation.value.setFromMatrix4(yU.makeRotationFromEuler(Cs)),x.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,x.aoMapTransform))}function l(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform))}function c(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function f(x,v,w,A){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*w,x.scale.value=A*.5,v.map&&(x.map.value=v.map,e(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function p(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function m(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function _(x,v,w){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===jn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,v){v.matcap&&(x.matcap.value=v.matcap)}function S(x,v){const w=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function AU(n,t,e,i){let s={},a={},l=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(w,A){const L=A.program;i.uniformBlockBinding(w,L)}function h(w,A){let L=s[w.id];L===void 0&&(M(w),L=d(w),s[w.id]=L,w.addEventListener("dispose",x));const $=A.program;i.updateUBOMapping(w,$);const N=t.render.frame;a[w.id]!==N&&(m(w),a[w.id]=N)}function d(w){const A=p();w.__bindingPointIndex=A;const L=n.createBuffer(),$=w.__size,N=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,$,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,L),L}function p(){for(let w=0;w<c;w++)if(l.indexOf(w)===-1)return l.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const A=s[w.id],L=w.uniforms,$=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let N=0,z=L.length;N<z;N++){const Q=Array.isArray(L[N])?L[N]:[L[N]];for(let D=0,P=Q.length;D<P;D++){const k=Q[D];if(_(k,N,D,$)===!0){const ht=k.__offset,ot=Array.isArray(k.value)?k.value:[k.value];let yt=0;for(let Mt=0;Mt<ot.length;Mt++){const ut=ot[Mt],lt=S(ut);typeof ut=="number"||typeof ut=="boolean"?(k.__data[0]=ut,n.bufferSubData(n.UNIFORM_BUFFER,ht+yt,k.__data)):ut.isMatrix3?(k.__data[0]=ut.elements[0],k.__data[1]=ut.elements[1],k.__data[2]=ut.elements[2],k.__data[3]=0,k.__data[4]=ut.elements[3],k.__data[5]=ut.elements[4],k.__data[6]=ut.elements[5],k.__data[7]=0,k.__data[8]=ut.elements[6],k.__data[9]=ut.elements[7],k.__data[10]=ut.elements[8],k.__data[11]=0):(ut.toArray(k.__data,yt),yt+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ht,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(w,A,L,$){const N=w.value,z=A+"_"+L;if($[z]===void 0)return typeof N=="number"||typeof N=="boolean"?$[z]=N:$[z]=N.clone(),!0;{const Q=$[z];if(typeof N=="number"||typeof N=="boolean"){if(Q!==N)return $[z]=N,!0}else if(Q.equals(N)===!1)return Q.copy(N),!0}return!1}function M(w){const A=w.uniforms;let L=0;const $=16;for(let z=0,Q=A.length;z<Q;z++){const D=Array.isArray(A[z])?A[z]:[A[z]];for(let P=0,k=D.length;P<k;P++){const ht=D[P],ot=Array.isArray(ht.value)?ht.value:[ht.value];for(let yt=0,Mt=ot.length;yt<Mt;yt++){const ut=ot[yt],lt=S(ut),tt=L%$,Ot=tt%lt.boundary,Bt=tt+Ot;L+=Ot,Bt!==0&&$-Bt<lt.storage&&(L+=$-Bt),ht.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),ht.__offset=L,L+=lt.storage}}}const N=L%$;return N>0&&(L+=$-N),w.__size=L,w.__cache={},this}function S(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function x(w){const A=w.target;A.removeEventListener("dispose",x);const L=l.indexOf(A.__bindingPointIndex);l.splice(L,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete a[A.id]}function v(){for(const w in s)n.deleteBuffer(s[w]);l=[],s={},a={}}return{bind:f,update:h,dispose:v}}class bU{constructor(t={}){const{canvas:e=pP(),context:i=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=l;const _=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const v=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zi,this.toneMapping=is,this.toneMappingExposure=1;const A=this;let L=!1,$=0,N=0,z=null,Q=-1,D=null;const P=new Sn,k=new Sn;let ht=null;const ot=new Ie(0);let yt=0,Mt=e.width,ut=e.height,lt=1,tt=null,Ot=null;const Bt=new Sn(0,0,Mt,ut),Nt=new Sn(0,0,Mt,ut);let Qt=!1;const xe=new tx;let dt=!1,Tt=!1;const Ft=new on,X=new K,vt=new Sn,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function $t(){return z===null?lt:1}let B=i;function I(C,q){return e.getContext(C,q)}try{const C={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zd}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),B===null){const q="webgl2";if(B=I(q,C),B===null)throw I(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let U,W,et,rt,ct,mt,R,y,O,j,nt,J,Ct,gt,wt,zt,At,Ut,ae,jt,Vt,ee,Zt,ve;function G(){U=new LI(B),U.init(),ee=new mU(B,U),W=new AI(B,U,t,ee),et=new hU(B),rt=new UI(B),ct=new JD,mt=new pU(B,U,et,ct,W,ee,rt),R=new TI(A),y=new PI(A),O=new HP(B),Zt=new yI(B,O),j=new II(B,O,rt,Zt),nt=new FI(B,j,O,rt),ae=new NI(B,W,mt),zt=new bI(ct),J=new jD(A,R,y,U,W,Zt,zt),Ct=new EU(A,ct),gt=new tU,wt=new oU(U),Ut=new SI(A,R,y,et,nt,m,f),At=new fU(A,nt,W),ve=new AU(B,rt,W,et),jt=new EI(B,U,rt),Vt=new DI(B,U,rt),rt.programs=J.programs,A.capabilities=W,A.extensions=U,A.properties=ct,A.renderLists=gt,A.shadowMap=At,A.state=et,A.info=rt}G();const Lt=new SU(A,B);this.xr=Lt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=U.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=U.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(C){C!==void 0&&(lt=C,this.setSize(Mt,ut,!1))},this.getSize=function(C){return C.set(Mt,ut)},this.setSize=function(C,q,it=!0){if(Lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=C,ut=q,e.width=Math.floor(C*lt),e.height=Math.floor(q*lt),it===!0&&(e.style.width=C+"px",e.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(Mt*lt,ut*lt).floor()},this.setDrawingBufferSize=function(C,q,it){Mt=C,ut=q,lt=it,e.width=Math.floor(C*it),e.height=Math.floor(q*it),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(Bt)},this.setViewport=function(C,q,it,st){C.isVector4?Bt.set(C.x,C.y,C.z,C.w):Bt.set(C,q,it,st),et.viewport(P.copy(Bt).multiplyScalar(lt).round())},this.getScissor=function(C){return C.copy(Nt)},this.setScissor=function(C,q,it,st){C.isVector4?Nt.set(C.x,C.y,C.z,C.w):Nt.set(C,q,it,st),et.scissor(k.copy(Nt).multiplyScalar(lt).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(C){et.setScissorTest(Qt=C)},this.setOpaqueSort=function(C){tt=C},this.setTransparentSort=function(C){Ot=C},this.getClearColor=function(C){return C.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(C=!0,q=!0,it=!0){let st=0;if(C){let Z=!1;if(z!==null){const It=z.texture.format;Z=It===Xd||It===Wd||It===Vd}if(Z){const It=z.texture.type,Gt=It===wr||It===Vs||It===Ya||It===Ko||It===kd||It===Gd,qt=Ut.getClearColor(),Xt=Ut.getClearAlpha(),se=qt.r,oe=qt.g,Jt=qt.b;Gt?(_[0]=se,_[1]=oe,_[2]=Jt,_[3]=Xt,B.clearBufferuiv(B.COLOR,0,_)):(M[0]=se,M[1]=oe,M[2]=Jt,M[3]=Xt,B.clearBufferiv(B.COLOR,0,M))}else st|=B.COLOR_BUFFER_BIT}q&&(st|=B.DEPTH_BUFFER_BIT),it&&(st|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),gt.dispose(),wt.dispose(),ct.dispose(),R.dispose(),y.dispose(),nt.dispose(),Zt.dispose(),ve.dispose(),J.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",di),Lt.removeEventListener("sessionend",il),wi.stop()};function St(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const C=rt.autoReset,q=At.enabled,it=At.autoUpdate,st=At.needsUpdate,Z=At.type;G(),rt.autoReset=C,At.enabled=q,At.autoUpdate=it,At.needsUpdate=st,At.type=Z}function Dt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function re(C){const q=C.target;q.removeEventListener("dispose",re),ye(q)}function ye(C){tn(C),ct.remove(C)}function tn(C){const q=ct.get(C).programs;q!==void 0&&(q.forEach(function(it){J.releaseProgram(it)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,it,st,Z,It){q===null&&(q=pt);const Gt=Z.isMesh&&Z.matrixWorld.determinant()<0,qt=vu(C,q,it,st,Z);et.setMaterial(st,Gt);let Xt=it.index,se=1;if(st.wireframe===!0){if(Xt=j.getWireframeAttribute(it),Xt===void 0)return;se=2}const oe=it.drawRange,Jt=it.attributes.position;let be=oe.start*se,We=(oe.start+oe.count)*se;It!==null&&(be=Math.max(be,It.start*se),We=Math.min(We,(It.start+It.count)*se)),Xt!==null?(be=Math.max(be,0),We=Math.min(We,Xt.count)):Jt!=null&&(be=Math.max(be,0),We=Math.min(We,Jt.count));const Xe=We-be;if(Xe<0||Xe===1/0)return;Zt.setup(Z,st,qt,it,Xt);let Dn,Ce=jt;if(Xt!==null&&(Dn=O.get(Xt),Ce=Vt,Ce.setIndex(Dn)),Z.isMesh)st.wireframe===!0?(et.setLineWidth(st.wireframeLinewidth*$t()),Ce.setMode(B.LINES)):Ce.setMode(B.TRIANGLES);else if(Z.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),et.setLineWidth(Kt*$t()),Z.isLineSegments?Ce.setMode(B.LINES):Z.isLineLoop?Ce.setMode(B.LINE_LOOP):Ce.setMode(B.LINE_STRIP)}else Z.isPoints?Ce.setMode(B.POINTS):Z.isSprite&&Ce.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ce.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(U.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,fn=Z._multiDrawCounts,Te=Z._multiDrawCount,kn=Xt?O.get(Xt).bytesPerElement:1,ir=ct.get(st).currentProgram.getUniforms();for(let yn=0;yn<Te;yn++)ir.setValue(B,"_gl_DrawID",yn),Ce.render(Kt[yn]/kn,fn[yn])}else if(Z.isInstancedMesh)Ce.renderInstances(be,Xe,Z.count);else if(it.isInstancedBufferGeometry){const Kt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,fn=Math.min(it.instanceCount,Kt);Ce.renderInstances(be,Xe,fn)}else Ce.render(be,Xe)};function un(C,q,it){C.transparent===!0&&C.side===Sr&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,$s(C,q,it),C.side=ss,C.needsUpdate=!0,$s(C,q,it),C.side=Sr):$s(C,q,it)}this.compile=function(C,q,it=null){it===null&&(it=C),x=wt.get(it),x.init(q),w.push(x),it.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),C!==it&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights();const st=new Set;return C.traverse(function(Z){const It=Z.material;if(It)if(Array.isArray(It))for(let Gt=0;Gt<It.length;Gt++){const qt=It[Gt];un(qt,it,Z),st.add(qt)}else un(It,it,Z),st.add(It)}),w.pop(),x=null,st},this.compileAsync=function(C,q,it=null){const st=this.compile(C,q,it);return new Promise(Z=>{function It(){if(st.forEach(function(Gt){ct.get(Gt).currentProgram.isReady()&&st.delete(Gt)}),st.size===0){Z(C);return}setTimeout(It,10)}U.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Ae=null;function Ti(C){Ae&&Ae(C)}function di(){wi.stop()}function il(){wi.start()}const wi=new ex;wi.setAnimationLoop(Ti),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(C){Ae=C,Lt.setAnimationLoop(C),C===null?wi.stop():wi.start()},Lt.addEventListener("sessionstart",di),Lt.addEventListener("sessionend",il),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(q),q=Lt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,q,z),x=wt.get(C,w.length),x.init(q),w.push(x),Ft.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),xe.setFromProjectionMatrix(Ft),Tt=this.localClippingEnabled,dt=zt.init(this.clippingPlanes,Tt),S=gt.get(C,v.length),S.init(),v.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){const It=A.xr.getDepthSensingMesh();It!==null&&ia(It,q,-1/0,A.sortObjects)}ia(C,q,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(tt,Ot),Rt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Rt&&Ut.addToRenderList(S,C),this.info.render.frame++,dt===!0&&zt.beginShadows();const it=x.state.shadowsArray;At.render(it,C,q),dt===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=S.opaque,Z=S.transmissive;if(x.setupLights(),q.isArrayCamera){const It=q.cameras;if(Z.length>0)for(let Gt=0,qt=It.length;Gt<qt;Gt++){const Xt=It[Gt];rl(st,Z,C,Xt)}Rt&&Ut.render(C);for(let Gt=0,qt=It.length;Gt<qt;Gt++){const Xt=It[Gt];qs(S,C,Xt,Xt.viewport)}}else Z.length>0&&rl(st,Z,C,q),Rt&&Ut.render(C),qs(S,C,q);z!==null&&(mt.updateMultisampleRenderTarget(z),mt.updateRenderTargetMipmap(z)),C.isScene===!0&&C.onAfterRender(A,C,q),Zt.resetDefaultState(),Q=-1,D=null,w.pop(),w.length>0?(x=w[w.length-1],dt===!0&&zt.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,v.pop(),v.length>0?S=v[v.length-1]:S=null};function ia(C,q,it,st){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)it=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||xe.intersectsSprite(C)){st&&vt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ft);const Gt=nt.update(C),qt=C.material;qt.visible&&S.push(C,Gt,qt,it,vt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||xe.intersectsObject(C))){const Gt=nt.update(C),qt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),vt.copy(C.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),vt.copy(Gt.boundingSphere.center)),vt.applyMatrix4(C.matrixWorld).applyMatrix4(Ft)),Array.isArray(qt)){const Xt=Gt.groups;for(let se=0,oe=Xt.length;se<oe;se++){const Jt=Xt[se],be=qt[Jt.materialIndex];be&&be.visible&&S.push(C,Gt,be,it,vt.z,Jt)}}else qt.visible&&S.push(C,Gt,qt,it,vt.z,null)}}const It=C.children;for(let Gt=0,qt=It.length;Gt<qt;Gt++)ia(It[Gt],q,it,st)}function qs(C,q,it,st){const Z=C.opaque,It=C.transmissive,Gt=C.transparent;x.setupLightsView(it),dt===!0&&zt.setGlobalState(A.clippingPlanes,it),st&&et.viewport(P.copy(st)),Z.length>0&&Ys(Z,q,it),It.length>0&&Ys(It,q,it),Gt.length>0&&Ys(Gt,q,it),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function rl(C,q,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[st.id]===void 0&&(x.state.transmissionRenderTarget[st.id]=new Ws(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")||U.has("EXT_color_buffer_float")?ja:wr,minFilter:Bs,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const It=x.state.transmissionRenderTarget[st.id],Gt=st.viewport||P;It.setSize(Gt.z,Gt.w);const qt=A.getRenderTarget();A.setRenderTarget(It),A.getClearColor(ot),yt=A.getClearAlpha(),yt<1&&A.setClearColor(16777215,.5),A.clear(),Rt&&Ut.render(it);const Xt=A.toneMapping;A.toneMapping=is;const se=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),x.setupLightsView(st),dt===!0&&zt.setGlobalState(A.clippingPlanes,st),Ys(C,it,st),mt.updateMultisampleRenderTarget(It),mt.updateRenderTargetMipmap(It),U.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let Jt=0,be=q.length;Jt<be;Jt++){const We=q[Jt],Xe=We.object,Dn=We.geometry,Ce=We.material,Kt=We.group;if(Ce.side===Sr&&Xe.layers.test(st.layers)){const fn=Ce.side;Ce.side=jn,Ce.needsUpdate=!0,sl(Xe,it,st,Dn,Ce,Kt),Ce.side=fn,Ce.needsUpdate=!0,oe=!0}}oe===!0&&(mt.updateMultisampleRenderTarget(It),mt.updateRenderTargetMipmap(It))}A.setRenderTarget(qt),A.setClearColor(ot,yt),se!==void 0&&(st.viewport=se),A.toneMapping=Xt}function Ys(C,q,it){const st=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,It=C.length;Z<It;Z++){const Gt=C[Z],qt=Gt.object,Xt=Gt.geometry,se=st===null?Gt.material:st,oe=Gt.group;qt.layers.test(it.layers)&&sl(qt,q,it,Xt,se,oe)}}function sl(C,q,it,st,Z,It){C.onBeforeRender(A,q,it,st,Z,It),C.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.transparent===!0&&Z.side===Sr&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,A.renderBufferDirect(it,q,st,Z,C,It),Z.side=ss,Z.needsUpdate=!0,A.renderBufferDirect(it,q,st,Z,C,It),Z.side=Sr):A.renderBufferDirect(it,q,st,Z,C,It),C.onAfterRender(A,q,it,st,Z,It)}function $s(C,q,it){q.isScene!==!0&&(q=pt);const st=ct.get(C),Z=x.state.lights,It=x.state.shadowsArray,Gt=Z.state.version,qt=J.getParameters(C,Z.state,It,q,it),Xt=J.getProgramCacheKey(qt);let se=st.programs;st.environment=C.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(C.isMeshStandardMaterial?y:R).get(C.envMap||st.environment),st.envMapRotation=st.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,se===void 0&&(C.addEventListener("dispose",re),se=new Map,st.programs=se);let oe=se.get(Xt);if(oe!==void 0){if(st.currentProgram===oe&&st.lightsStateVersion===Gt)return al(C,qt),oe}else qt.uniforms=J.getUniforms(C),C.onBeforeCompile(qt,A),oe=J.acquireProgram(qt,Xt),se.set(Xt,oe),st.uniforms=qt.uniforms;const Jt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Jt.clippingPlanes=zt.uniform),al(C,qt),st.needsLights=ll(C),st.lightsStateVersion=Gt,st.needsLights&&(Jt.ambientLightColor.value=Z.state.ambient,Jt.lightProbe.value=Z.state.probe,Jt.directionalLights.value=Z.state.directional,Jt.directionalLightShadows.value=Z.state.directionalShadow,Jt.spotLights.value=Z.state.spot,Jt.spotLightShadows.value=Z.state.spotShadow,Jt.rectAreaLights.value=Z.state.rectArea,Jt.ltc_1.value=Z.state.rectAreaLTC1,Jt.ltc_2.value=Z.state.rectAreaLTC2,Jt.pointLights.value=Z.state.point,Jt.pointLightShadows.value=Z.state.pointShadow,Jt.hemisphereLights.value=Z.state.hemi,Jt.directionalShadowMap.value=Z.state.directionalShadowMap,Jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Jt.spotShadowMap.value=Z.state.spotShadowMap,Jt.spotLightMatrix.value=Z.state.spotLightMatrix,Jt.spotLightMap.value=Z.state.spotLightMap,Jt.pointShadowMap.value=Z.state.pointShadowMap,Jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),st.currentProgram=oe,st.uniformsList=null,oe}function ol(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Hc.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function al(C,q){const it=ct.get(C);it.outputColorSpace=q.outputColorSpace,it.batching=q.batching,it.batchingColor=q.batchingColor,it.instancing=q.instancing,it.instancingColor=q.instancingColor,it.instancingMorph=q.instancingMorph,it.skinning=q.skinning,it.morphTargets=q.morphTargets,it.morphNormals=q.morphNormals,it.morphColors=q.morphColors,it.morphTargetsCount=q.morphTargetsCount,it.numClippingPlanes=q.numClippingPlanes,it.numIntersection=q.numClipIntersection,it.vertexAlphas=q.vertexAlphas,it.vertexTangents=q.vertexTangents,it.toneMapping=q.toneMapping}function vu(C,q,it,st,Z){q.isScene!==!0&&(q=pt),mt.resetTextureUnits();const It=q.fog,Gt=st.isMeshStandardMaterial?q.environment:null,qt=z===null?A.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:fs,Xt=(st.isMeshStandardMaterial?y:R).get(st.envMap||Gt),se=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,oe=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Jt=!!it.morphAttributes.position,be=!!it.morphAttributes.normal,We=!!it.morphAttributes.color;let Xe=is;st.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Xe=A.toneMapping);const Dn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Ce=Dn!==void 0?Dn.length:0,Kt=ct.get(st),fn=x.state.lights;if(dt===!0&&(Tt===!0||C!==D)){const Gn=C===D&&st.id===Q;zt.setState(st,C,Gn)}let Te=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==fn.state.version||Kt.outputColorSpace!==qt||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Xt||st.fog===!0&&Kt.fog!==It||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==zt.numPlanes||Kt.numIntersection!==zt.numIntersection)||Kt.vertexAlphas!==se||Kt.vertexTangents!==oe||Kt.morphTargets!==Jt||Kt.morphNormals!==be||Kt.morphColors!==We||Kt.toneMapping!==Xe||Kt.morphTargetsCount!==Ce)&&(Te=!0):(Te=!0,Kt.__version=st.version);let kn=Kt.currentProgram;Te===!0&&(kn=$s(st,q,Z));let ir=!1,yn=!1,ra=!1;const je=kn.getUniforms(),ii=Kt.uniforms;if(et.useProgram(kn.program)&&(ir=!0,yn=!0,ra=!0),st.id!==Q&&(Q=st.id,yn=!0),ir||D!==C){je.setValue(B,"projectionMatrix",C.projectionMatrix),je.setValue(B,"viewMatrix",C.matrixWorldInverse);const Gn=je.map.cameraPosition;Gn!==void 0&&Gn.setValue(B,X.setFromMatrixPosition(C.matrixWorld)),W.logarithmicDepthBuffer&&je.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&je.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,yn=!0,ra=!0)}if(Z.isSkinnedMesh){je.setOptional(B,Z,"bindMatrix"),je.setOptional(B,Z,"bindMatrixInverse");const Gn=Z.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),je.setValue(B,"boneTexture",Gn.boneTexture,mt))}Z.isBatchedMesh&&(je.setOptional(B,Z,"batchingTexture"),je.setValue(B,"batchingTexture",Z._matricesTexture,mt),je.setOptional(B,Z,"batchingIdTexture"),je.setValue(B,"batchingIdTexture",Z._indirectTexture,mt),je.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&je.setValue(B,"batchingColorTexture",Z._colorsTexture,mt));const Ks=it.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&ae.update(Z,it,kn),(yn||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,je.setValue(B,"receiveShadow",Z.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(ii.envMap.value=Xt,ii.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(ii.envMapIntensity.value=q.environmentIntensity),yn&&(je.setValue(B,"toneMappingExposure",A.toneMappingExposure),Kt.needsLights&&xu(ii,ra),It&&st.fog===!0&&Ct.refreshFogUniforms(ii,It),Ct.refreshMaterialUniforms(ii,st,lt,ut,x.state.transmissionRenderTarget[C.id]),Hc.upload(B,ol(Kt),ii,mt)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Hc.upload(B,ol(Kt),ii,mt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&je.setValue(B,"center",Z.center),je.setValue(B,"modelViewMatrix",Z.modelViewMatrix),je.setValue(B,"normalMatrix",Z.normalMatrix),je.setValue(B,"modelMatrix",Z.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Gn=st.uniformsGroups;for(let Zs=0,cl=Gn.length;Zs<cl;Zs++){const js=Gn[Zs];ve.update(js,kn),ve.bind(js,kn)}}return kn}function xu(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function ll(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(C,q,it){ct.get(C.texture).__webglTexture=q,ct.get(C.depthTexture).__webglTexture=it;const st=ct.get(C);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,q){const it=ct.get(C);it.__webglFramebuffer=q,it.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,it=0){z=C,$=q,N=it;let st=!0,Z=null,It=!1,Gt=!1;if(C){const Xt=ct.get(C);Xt.__useDefaultFramebuffer!==void 0?(et.bindFramebuffer(B.FRAMEBUFFER,null),st=!1):Xt.__webglFramebuffer===void 0?mt.setupRenderTarget(C):Xt.__hasExternalTextures&&mt.rebindTextures(C,ct.get(C.texture).__webglTexture,ct.get(C.depthTexture).__webglTexture);const se=C.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Gt=!0);const oe=ct.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(oe[q])?Z=oe[q][it]:Z=oe[q],It=!0):C.samples>0&&mt.useMultisampledRTT(C)===!1?Z=ct.get(C).__webglMultisampledFramebuffer:Array.isArray(oe)?Z=oe[it]:Z=oe,P.copy(C.viewport),k.copy(C.scissor),ht=C.scissorTest}else P.copy(Bt).multiplyScalar(lt).floor(),k.copy(Nt).multiplyScalar(lt).floor(),ht=Qt;if(et.bindFramebuffer(B.FRAMEBUFFER,Z)&&st&&et.drawBuffers(C,Z),et.viewport(P),et.scissor(k),et.setScissorTest(ht),It){const Xt=ct.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+q,Xt.__webglTexture,it)}else if(Gt){const Xt=ct.get(C.texture),se=q||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xt.__webglTexture,it||0,se)}Q=-1},this.readRenderTargetPixels=function(C,q,it,st,Z,It,Gt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=ct.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(qt=qt[Gt]),qt){et.bindFramebuffer(B.FRAMEBUFFER,qt);try{const Xt=C.texture,se=Xt.format,oe=Xt.type;if(!W.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-st&&it>=0&&it<=C.height-Z&&B.readPixels(q,it,st,Z,ee.convert(se),ee.convert(oe),It)}finally{const Xt=z!==null?ct.get(z).__webglFramebuffer:null;et.bindFramebuffer(B.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(C,q,it,st,Z,It,Gt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=ct.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(qt=qt[Gt]),qt){et.bindFramebuffer(B.FRAMEBUFFER,qt);try{const Xt=C.texture,se=Xt.format,oe=Xt.type;if(!W.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=C.width-st&&it>=0&&it<=C.height-Z){const Jt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Jt),B.bufferData(B.PIXEL_PACK_BUFFER,It.byteLength,B.STREAM_READ),B.readPixels(q,it,st,Z,ee.convert(se),ee.convert(oe),0),B.flush();const be=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);await mP(B,be,4);try{B.bindBuffer(B.PIXEL_PACK_BUFFER,Jt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,It)}finally{B.deleteBuffer(Jt),B.deleteSync(be)}return It}}finally{const Xt=z!==null?ct.get(z).__webglFramebuffer:null;et.bindFramebuffer(B.FRAMEBUFFER,Xt)}}},this.copyFramebufferToTexture=function(C,q=null,it=0){C.isTexture!==!0&&(za("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1]);const st=Math.pow(2,-it),Z=Math.floor(C.image.width*st),It=Math.floor(C.image.height*st),Gt=q!==null?q.x:0,qt=q!==null?q.y:0;mt.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,it,0,0,Gt,qt,Z,It),et.unbindTexture()},this.copyTextureToTexture=function(C,q,it=null,st=null,Z=0){C.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,C=arguments[1],q=arguments[2],Z=arguments[3]||0,it=null);let It,Gt,qt,Xt,se,oe;it!==null?(It=it.max.x-it.min.x,Gt=it.max.y-it.min.y,qt=it.min.x,Xt=it.min.y):(It=C.image.width,Gt=C.image.height,qt=0,Xt=0),st!==null?(se=st.x,oe=st.y):(se=0,oe=0);const Jt=ee.convert(q.format),be=ee.convert(q.type);mt.setTexture2D(q,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const We=B.getParameter(B.UNPACK_ROW_LENGTH),Xe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Dn=B.getParameter(B.UNPACK_SKIP_PIXELS),Ce=B.getParameter(B.UNPACK_SKIP_ROWS),Kt=B.getParameter(B.UNPACK_SKIP_IMAGES),fn=C.isCompressedTexture?C.mipmaps[Z]:C.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,fn.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fn.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,qt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Xt),C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Z,se,oe,It,Gt,Jt,be,fn.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Z,se,oe,fn.width,fn.height,Jt,fn.data):B.texSubImage2D(B.TEXTURE_2D,Z,se,oe,It,Gt,Jt,be,fn),B.pixelStorei(B.UNPACK_ROW_LENGTH,We),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Dn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ce),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Kt),Z===0&&q.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(C,q,it=null,st=null,Z=0){C.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,C=arguments[2],q=arguments[3],Z=arguments[4]||0);let It,Gt,qt,Xt,se,oe,Jt,be,We;const Xe=C.isCompressedTexture?C.mipmaps[Z]:C.image;it!==null?(It=it.max.x-it.min.x,Gt=it.max.y-it.min.y,qt=it.max.z-it.min.z,Xt=it.min.x,se=it.min.y,oe=it.min.z):(It=Xe.width,Gt=Xe.height,qt=Xe.depth,Xt=0,se=0,oe=0),st!==null?(Jt=st.x,be=st.y,We=st.z):(Jt=0,be=0,We=0);const Dn=ee.convert(q.format),Ce=ee.convert(q.type);let Kt;if(q.isData3DTexture)mt.setTexture3D(q,0),Kt=B.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)mt.setTexture2DArray(q,0),Kt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const fn=B.getParameter(B.UNPACK_ROW_LENGTH),Te=B.getParameter(B.UNPACK_IMAGE_HEIGHT),kn=B.getParameter(B.UNPACK_SKIP_PIXELS),ir=B.getParameter(B.UNPACK_SKIP_ROWS),yn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Xe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xt),B.pixelStorei(B.UNPACK_SKIP_ROWS,se),B.pixelStorei(B.UNPACK_SKIP_IMAGES,oe),C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Kt,Z,Jt,be,We,It,Gt,qt,Dn,Ce,Xe.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(Kt,Z,Jt,be,We,It,Gt,qt,Dn,Xe.data):B.texSubImage3D(Kt,Z,Jt,be,We,It,Gt,qt,Dn,Ce,Xe),B.pixelStorei(B.UNPACK_ROW_LENGTH,fn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Te),B.pixelStorei(B.UNPACK_SKIP_PIXELS,kn),B.pixelStorei(B.UNPACK_SKIP_ROWS,ir),B.pixelStorei(B.UNPACK_SKIP_IMAGES,yn),Z===0&&q.generateMipmaps&&B.generateMipmap(Kt),et.unbindTexture()},this.initRenderTarget=function(C){ct.get(C).__webglFramebuffer===void 0&&mt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?mt.setTextureCube(C,0):C.isData3DTexture?mt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?mt.setTexture2DArray(C,0):mt.setTexture2D(C,0),et.unbindTexture()},this.resetState=function(){$=0,N=0,z=null,et.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===qd?"display-p3":"srgb",e.unpackColorSpace=Ne.workingColorSpace===mu?"display-p3":"srgb"}}class TU extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ax extends ta{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jc=new K,Jc=new K,l0=new on,Ra=new Yd,Ec=new el,ph=new K,c0=new K;class wU extends Hn{constructor(t=new ni,e=new ax){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)jc.fromBufferAttribute(e,s-1),Jc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=jc.distanceTo(Jc);t.setAttribute("lineDistance",new Qn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(s),Ec.radius+=a,t.ray.intersectsSphere(Ec)===!1)return;l0.copy(s).invert(),Ra.copy(t.ray).applyMatrix4(l0);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,h=this.isLineSegments?2:1,d=i.index,m=i.attributes.position;if(d!==null){const _=Math.max(0,l.start),M=Math.min(d.count,l.start+l.count);for(let S=_,x=M-1;S<x;S+=h){const v=d.getX(S),w=d.getX(S+1),A=Ac(this,t,Ra,f,v,w);A&&e.push(A)}if(this.isLineLoop){const S=d.getX(M-1),x=d.getX(_),v=Ac(this,t,Ra,f,S,x);v&&e.push(v)}}else{const _=Math.max(0,l.start),M=Math.min(m.count,l.start+l.count);for(let S=_,x=M-1;S<x;S+=h){const v=Ac(this,t,Ra,f,S,S+1);v&&e.push(v)}if(this.isLineLoop){const S=Ac(this,t,Ra,f,M-1,_);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Ac(n,t,e,i,s,a){const l=n.geometry.attributes.position;if(jc.fromBufferAttribute(l,s),Jc.fromBufferAttribute(l,a),e.distanceSqToSegment(jc,Jc,ph,c0)>i)return;ph.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(ph);if(!(f<t.near||f>t.far))return{distance:f,point:c0.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const u0=new K,f0=new K;class RU extends wU{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,a=e.count;s<a;s+=2)u0.fromBufferAttribute(e,s),f0.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+u0.distanceTo(f0);t.setAttribute("lineDistance",new Qn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zd extends ta{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const h0=new on,hd=new Yd,bc=new el,Tc=new K;class lx extends Hn{constructor(t=new ni,e=new Zd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(s),bc.radius+=a,t.ray.intersectsSphere(bc)===!1)return;h0.copy(s).invert(),hd.copy(t.ray).applyMatrix4(h0);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,h=i.index,p=i.attributes.position;if(h!==null){const m=Math.max(0,l.start),_=Math.min(h.count,l.start+l.count);for(let M=m,S=_;M<S;M++){const x=h.getX(M);Tc.fromBufferAttribute(p,x),d0(Tc,x,f,s,t,e,this)}}else{const m=Math.max(0,l.start),_=Math.min(p.count,l.start+l.count);for(let M=m,S=_;M<S;M++)Tc.fromBufferAttribute(p,M),d0(Tc,M,f,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function d0(n,t,e,i,s,a,l){const c=hd.distanceSqToPoint(n);if(c<e){const f=new K;hd.closestPointToPoint(n,f),f.applyMatrix4(i);const h=s.ray.origin.distanceTo(f);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:f,index:t,face:null,object:l})}}class jd extends ni{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:l,thetaLength:c},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const f=Math.min(l+c,Math.PI);let h=0;const d=[],p=new K,m=new K,_=[],M=[],S=[],x=[];for(let v=0;v<=i;v++){const w=[],A=v/i;let L=0;v===0&&l===0?L=.5/e:v===i&&f===Math.PI&&(L=-.5/e);for(let $=0;$<=e;$++){const N=$/e;p.x=-t*Math.cos(s+N*a)*Math.sin(l+A*c),p.y=t*Math.cos(l+A*c),p.z=t*Math.sin(s+N*a)*Math.sin(l+A*c),M.push(p.x,p.y,p.z),m.copy(p).normalize(),S.push(m.x,m.y,m.z),x.push(N+L,1-A),w.push(h++)}d.push(w)}for(let v=0;v<i;v++)for(let w=0;w<e;w++){const A=d[v][w+1],L=d[v][w],$=d[v+1][w],N=d[v+1][w+1];(v!==0||l>0)&&_.push(A,L,N),(v!==i-1||f<Math.PI)&&_.push(L,$,N)}this.setIndex(_),this.setAttribute("position",new Qn(M,3)),this.setAttribute("normal",new Qn(S,3)),this.setAttribute("uv",new Qn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class CU extends RU{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new ni;s.setAttribute("position",new Qn(e,3)),s.setAttribute("color",new Qn(i,3));const a=new ax({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(t,e,i){const s=new Ie,a=this.geometry.attributes.color.array;return s.set(t),s.toArray(a,0),s.toArray(a,3),s.set(e),s.toArray(a,6),s.toArray(a,9),s.set(i),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);var Kn,zs,Qr,Go,ji,$a,tu,dd,pd;class PU{constructor(){Yi(this,Kn);Yi(this,zs,new Float32Array(new Array(6*2*1e3).fill(0).map(()=>.4+Math.random()*.6)));Yi(this,Qr,0);Yi(this,Go);Yi(this,ji);Yi(this,$a,0);Yi(this,tu,Math.PI/300);Yi(this,dd,Date.now());Yi(this,pd,new K(0,0,0));Ss(this,Kn,new ni);const t=new mn(Ue(this,zs),3);t.setUsage(__),Ue(this,Kn).setAttribute("position",t),Ue(this,Kn).setAttribute("color",t),window.fac=Ue(this,ji),Ss(this,Go,new $d({vertexColors:!0})),this.mesh=new zi(Ue(this,Kn),Ue(this,Go)),Ss(this,ji,new Array(180).fill(0).map(()=>this.createFactory())),this.n=.5}createFactory(){const t={vertices:new Float32Array,attribute:new mn(new Float32Array,3),geometry:new ni,mesh:null};return t.mesh=new zi(t.geometry,Ue(this,Go)),this.mesh.add(t.mesh),t}transformData(t){const e=Ue(this,ji)[0],i=this.getPosition(t);e.vertices=new Float32Array(this.getVertices(i)),e.attribute=new mn(e.vertices,3),e.geometry.setAttribute("position",e.attribute);const s=new Float32Array(t.reduce((l,c)=>l.concat(...new Array(6*2*3).fill(0).map(f=>{const h=.2+c/255*.6159999999999999,d=.329+c/255*(.59-.329)*Math.sin(Ue(this,$a));return[.584+c/255*(.949-.584),h,d]})),[])),a=new mn(s,3);e.geometry.setAttribute("color",a),Ue(this,ji).splice(0,1),Ue(this,ji).push(e)}updataFactorys(){const t=Ue(this,ji).length;Ue(this,ji).forEach((e,i)=>{e.mesh.position.set(0,0,1*(i-t))})}setPosition(t){Ue(this,Kn).setAttribute("position",new mn(new Float32Array(t),3))}addPosition(t){t.forEach(i=>{Ue(this,zs)[Ue(this,Qr)]=i,mg(this,Qr)._++,Ue(this,Qr)>=Ue(this,zs).length&&Ss(this,Qr,0)}),Ue(this,Kn).attributes.position.needsUpdate="true",window.index=Ue(this,Qr);const e=new mn(Ue(this,zs),3);e.setUsage(__),Ue(this,Kn).setAttribute("position",e)}setColor(t){Ue(this,Kn).setAttribute("color",new mn(new Float32Array(t),3))}addColor(t){const e=Ue(this,Kn).attributes.color.array||[],i=new Float32Array([...t,...e]);Ue(this,Kn).setAttribute("color",new mn(new Float32Array(i),3))}getBuffer(t,e,i){const s=[];for(let a=0;a<t.length;a++)e&&t[a].applyEuler(e),i&&t[a].add(i),s.push(...t[a]);return s}getSphereVertices(t){const e=[];for(let i=0;i<t.length-1;i++){const s=t[i].length;for(let a=0;a<s-1;a++)e.push(...t[i][a]),e.push(...t[i+1][a]),e.push(...t[i+1][a+1]),e.push(...t[i][a]),e.push(...t[i+1][a+1]),e.push(...t[i][a+1]);e.push(...t[i][s-1]),e.push(...t[i+1][s-1]),e.push(...t[i+1][0]),e.push(...t[i][s-1]),e.push(...t[i+1][0]),e.push(...t[i][0])}return e}getSpherePosition(t=100,e=100){const i=new Array,s=new Array;if(typeof Cube_WhichMakeSense<"u"){const d=[new zn(0,0,0,"XYZ"),new zn(0,Math.PI/2,0,"XYZ"),new zn(0,Math.PI,0,"XYZ"),new zn(0,-Math.PI/2,0,"XYZ"),new zn(Math.PI/2,0,0,"XYZ"),new zn(-Math.PI/2,0,0,"XYZ")],p=[new K(0,0,0),new K(t,0,0),new K(t,0,-t),new K(0,0,-t),new K(0,0,-t),new K(0,t,0)];for(let m=0;m<6;m++){const _=[];_[0]=new K(0,0,0),_[1]=new K(t,0,0),_[2]=new K(t,e,0),_[3]=new K(0,0,0),_[4]=new K(t,e,0),_[5]=new K(0,e,0),i.push(...this.getBuffer(_,d[m],p[m]));let M=[];M=[m/4,.5,.5,.2,m/8+.5,.5,.2,.5,m/8+.5],s.push(...M)}}s.push(i.map(d=>.2+Math.abs(d/100)));const a=[],l=20;for(let d=0;d<=l*2;d++){a[d]=[];const p=100,m=Math.sqrt(Math.abs(p*p*(d/l-1)))*(d>l?-1:1);for(let _=0;_<l;_++){const M=Math.sqrt(p*p-m*m),S=M*Math.cos(2*Math.PI/l*(_+.5)),x=M*Math.sin(2*Math.PI/l*(_+.5));a[d].push(new K(S,x,m))}}const c=this.getSphereVertices(a);i.push(...c),s.push(...c.map(d=>.2+Math.abs(d/100)+Math.random()*.5));const f=new Float32Array([...i]);this.setPosition(f);const h=new Float32Array([...s]);this.setColor(h)}getMusicData(t){const e=this.getPosition(t);this.getVertices(e).map((s,a)=>a%3==2?.2+s/50:.2+Math.random()*.5),window.buffer=Ue(this,Kn).attributes.position.array.length/3}getPosition(t){const i=[];for(let l=0;l<t.length;l++){const c=t[l]/3,f=[],h=()=>f.push(new K(2*l,0,1*1)),d=()=>f.push(new K(2*(l+1),0,1*1)),p=()=>f.push(new K(2*(l+1),c,1*1)),m=()=>f.push(new K(2*l,c,1*1)),_=()=>f.push(new K(2*l,0,1*0)),M=()=>f.push(new K(2*l,c,1*0)),S=()=>f.push(new K(2*(l+1),c,1*0)),x=()=>f.push(new K(2*(l+1),0,1*0));h(),d(),p(),m(),_(),M(),S(),x(),h(),m(),M(),_(),d(),x(),S(),p(),p(),S(),M(),m(),h(),_(),x(),d(),i.push(f)}return i}getVertices(t){const e=[];for(let i=0;i<t.length;i++)for(let s=0;s<6;s++)for(let a=s*4;a<s*4+2;a++)e.push(...t[i][s*4]),e.push(...t[i][a+1]),e.push(...t[i][a+2]);return e}update(){Ss(this,$a,Ue(this,$a)+Ue(this,tu)),this.updataFactorys()}}Kn=new WeakMap,zs=new WeakMap,Qr=new WeakMap,Go=new WeakMap,ji=new WeakMap,$a=new WeakMap,tu=new WeakMap,dd=new WeakMap,pd=new WeakMap;const cx=new ni;cx.setAttribute("position",new mn(new Float32Array([0,0,0]),3));function LU(n=1,t=null){return new Zd({size:n,map:t,color:16777215,transparent:!0})}function IU(n,t){return new lx(cx,LU(n,t))}function DU(n=15,t=32,e=16,i=.005,s=16776960){const a=new jd(n,t,e),l=new Zd({size:i,color:s});return new lx(a,l)}function UU(n){const t=window.AudioContext||window.webkitAudioContext,e=new t,i=e.createMediaElementSource(n),s=e.createGain(),a=e.createAnalyser();return i.connect(s),s.connect(a),a.connect(e.destination),s.gain.value=1,a.fftSize=1024,a}class ux{constructor(t=60){this.length=t,this.value=new Array(t).fill(.0167),this.index=0,this.average=.0167,this.fps=60}updateValue(t){this.value[this.index]=t,this.index=++this.index>=this.length?0:this.index}getAverage(){return this.average=1/this.length*this.value.reduce((t,e)=>t+e),this.average}getFPS(){return this.fps=1/this.getAverage(),this.fps}}const NU=function(){return new ux(60),this.firstTime=!0,this.buff=new PU,this.getAnalyser=n=>{const t=n.target;this.firstTime&&(this.analyser=UU(t)),this.firstTime=!1},this.setCanvas=n=>{this.canvas=n,this.scene=new TU,this.camera=new Ei(75,n.width/n.height,.1,1e3),this.renderer=new bU({alpha:!0,canvas:n}),this.axis=new CU(300),this.scene.add(this.axis);const t=200;this.camera.position.set(t/4,t/2,t/2),this.camera.rotation.set(-.5,0,0),this.group1=new Ia,this.scene.add(this.group1),this.group1.add(DU(t,30,15,t/500),IU(10)),this.group1.add(this.buff.mesh)},this.resize=()=>{const[n,t]=[this.canvas.width,this.canvas.height];this.renderer.setSize(n,t),this.camera.aspect=n/t,this.camera.updateProjectionMatrix()},this.update=()=>{if(this.analyser){const n=this.analyser.frequencyBinCount,t=new Uint8Array(n);this.analyser.getByteFrequencyData(t);const e=[...t].splice(0,128);this.buff.transformData(e)}this.buff.update()},this.render=()=>{this.renderer.render(this.scene,this.camera)},this},Ps=new NU,FU=["width","height"],OU=["src"],BU={__name:"CanvasSectionS2",props:{myMouse:Object,max:Number,ratio:Number},setup(n,{expose:t}){const e=Pe(null);us(async()=>{Ps.setCanvas(e.value),await Jo(),nr.registerAnimationCallback("updateS2",Ps.update),nr.registerAnimationCallback("renderS2",Ps.render),window.addEventListener("resize",Ps.resize,!1)}),Pd(()=>{window.removeEventListener("resize",Ps.resize,!1)});const i=Pe(null);return t({section:i}),Pe(null),(s,a)=>(He(),ke("section",{ref_key:"section",ref:i,class:"section",id:"S2"},[Pt("canvas",{id:"canvasS2",ref_key:"canvas",ref:e,width:n.max*n.ratio,height:n.ratio*n.max*n.ratio},null,8,FU),Pt("audio",{onPlay:a[0]||(a[0]=(...l)=>_e(Ps).getAnalyser&&_e(Ps).getAnalyser(...l)),ref:"audio",controls:"",id:"myAudio"},[Pt("source",{src:_e(_C)},null,8,OU)],544)],512))}},zU=Cr(BU,[["__scopeId","data-v-e528278e"]]);class pn{constructor(){this.secondColumns=[],this.sortFunction=function(){},this.isSorting=!1,this.log=document.createElement("div")}setLog(){this.log=log}start(t,e){this.secondColumns=[],this.send(t+" is processing"),this.sortFunction=this[t],this.timesEveryFrame=Math.ceil(e.length/25),this.isSorting=!0,this[t+"Setting"](e)}update(t){if(this.isSorting){for(this.times=this.timesEveryFrame;this.times--;)if(this.sortFunction(t)===!0){[this.isStoping,this.times]=[!0,0];const i=this.sortFunction.name+" is done.";this.send(i)}this.isStoping&&(this.isSorting=!1,this.isStoping=!1)}}send(t){this.log.innerText=t}static swapColumn(t,e,i){[t.path.pointX,e.path.pointX]=[e.path.pointX,t.path.pointX],[t.path.pointY,e.path.pointY]=[e.path.pointY,t.path.pointY],t.path.NewTarget(t.x,t.y,i),e.path.NewTarget(e.x,e.y,i),[t.height,e.height]=[e.height,t.height]}bubbleSortSetting(t){this.i=0,this.j=0}bubbleSort(t){const e=t.length,i=this.i,s=this.j;if(i==e-1)return!0;if(s==e-1-i)return this.j=0,this.i++,!1;const a=t[s],l=t[s+1];a.height>l.height&&pn.swapColumn(a,l,30),this.j++}selectionSortSetting(){this.i=0,this.j=1,this.minIndex=0}selectionSort(t){const e=t.length,i=this.i,s=this.j,a=this.minIndex;if(i==e-1)return!0;if(s==e){if(this.i++,this.minIndex=this.i,this.j=this.i+1,i==this.minIndex)return!1;const l=t[i],c=t[a];return pn.swapColumn(l,c,60),!1}t[this.minIndex].height>t[s].height&&(this.minIndex=s),this.j++}insertionSortSetting(t){this.i=1,this.key=t[1].height,this.j=0}insertionSort(t){const e=t.length,i=this.i,s=this.j;if(i<e)if(s>=0&&t[s].height>t[s+1].height){const a=t[s+1],l=t[s],c=30+Math.ceil((this.timesEveryFrame-this.times)*20/this.timesEveryFrame);pn.swapColumn(a,l,c),this.j--}else{if(this.i++,this.i>=e)return!0;this.j=this.i-1}else return!0}quickSortSetting(t){this.stack=[{left:0,right:t.length-1}],this.partitionPhase="0.SetPivot",this.pivot=Math.floor(t.length-1),this.j=0}quickSort(t){const e=this.stack.length,{left:i,right:s}=this.stack[e-1],a=this.pivot,l=60;switch(this.partitionPhase){case"0.SetPivot":const c=t[Math.floor((i+s)/2)],f=t[s];pn.swapColumn(c,f,l),this.leftBound=i,this.rightBound=s-1,this.pivot=s,this.partitionPhase="1.FindLeftBound",this.j=0;break;case"1.FindLeftBound":if(t[this.leftBound+this.j].height>=t[a].height){this.leftBound=this.leftBound+this.j,this.partitionPhase="2.FindRightBound",this.j=0;break}this.j++;break;case"2.FindRightBound":if(t[a].height>=t[this.rightBound-this.j].height||this.rightBound-this.j<=this.leftBound){this.rightBound=this.rightBound-this.j,this.partitionPhase="3.SwapBoth";break}this.j++;break;case"3.SwapBoth":if(this.leftBound<this.rightBound){const h=t[this.leftBound],d=t[this.rightBound];pn.swapColumn(h,d,l),this.partitionPhase="1.FindLeftBound",this.j=0,this.leftBound++,this.rightBound--}else{const h=t[this.leftBound],d=t[a];pn.swapColumn(h,d,l),this.partitionPhase="4.EndPartition",this.pivot=this.leftBound}break;case"4.EndPartition":if(this.stack.pop(),i<a-1&&this.stack.push({left:i,right:a-1}),a+1<s&&this.stack.push({left:a+1,right:s}),this.stack.length==0)return!0;this.partitionPhase="0.SetPivot";break}}mergeSortSetting(t){const e=t.map(i=>i.height);this.height=Math.max(...e),this.stack=[[],[]],this.stack[0][0]={left:0,right:t.length-1},this.mergePhase="0.Split",this.i=0,this.j=0}mergeSort(t){const e=this.stack[0].length,i=this.stack[1].length,{min:s,mid:a,max:l}=this.stack[1][i-1]?this.stack[1][i-1]:{},c=this.i,f=a-s+this.j,h=this.secondColumns.slice(s,l+1),d=Math.min(30+Math.floor((l-f+a-c)/(e+i)),90);switch(this.mergePhase){case"0.Split":if(e==0){this.mergePhase="1.Copy",this.timesEveryFrame=1,this.secondColumns=JSON.parse(JSON.stringify(t.slice(0,t.length+1))),this.secondColumns.forEach((M,S)=>{M.path=new Bo(M.x,M.y),M.path.NewTarget(M.x,M.y-this.height,20),M.width/=3});return}const{left:p,right:m}=this.stack[0][e-1],_=Math.ceil((p+m)/2);this.stack[0].pop(),p!=m&&(this.stack[0].push({left:p,right:_-1}),this.stack[0].push({left:_,right:m}),this.stack[1].push({min:p,mid:_,max:m}));break;case"1.Copy":if(i==0)return!0;h.forEach((M,S)=>{M.height=t[s+S].height,M.width=t[s+S].width/2,M.path.NewTarget(M.x,M.y-this.height,20)}),this.mergePhase="2.Merge";break;case"2.Merge":if(h[c].height>h[f].height){const M=h[f],S=t[s+this.i+this.j];pn.swapColumn(M,S,d),M.height=0,this.j++,this.j>l-a&&(this.mergePhase="3.MergeLeft")}else{const M=h[c],S=t[s+this.i+this.j];pn.swapColumn(M,S,d),M.height=0,this.i++,this.i>a-s&&(this.i--,this.j++),this.i>=a-s&&(this.mergePhase="4.MergeRight")}break;case"3.MergeLeft":if(c>=a-s){if(this.i=0,this.j=0,this.stack[1].pop(),this.stack[1].length==0){this.isStoping=!0;return}this.mergePhase="1.Copy",h.forEach((M,S)=>{M.height=t[s+S].height,M.path.NewTarget(M.x,M.y-this.height,20),M.width/=3})}else{const M=h[c],S=t[s+this.i+this.j];pn.swapColumn(M,S,d),M.height=0,this.i++}break;case"4.MergeRight":if(f>l-s){if(this.i=0,this.j=0,this.stack[1].pop(),this.stack[1].length==0){this.isStoping=!0;return}this.mergePhase="1.Copy",h.forEach((M,S)=>{M.height=t[s+S].height,M.path.NewTarget(M.x,M.y-this.height,20),M.width/=3})}else{const M=h[f],S=t[s+this.i+this.j];pn.swapColumn(M,S,d),M.height=0,this.j++}break}}static heapify(t,e,i){let s=i;const a=2*i+1,l=2*i+2;if(a<e&&t[a].height>t[s].height&&(s=a),l<e&&t[l].height>t[s].height&&(s=l),s!==i){const c=t[i],f=t[s];return pn.swapColumn(c,f,60),s}return-1}heapSortSetting(t){this.i=Math.floor(t.length/2)-1,this.j=this.i,this.heapPhase="1.build"}heapSort(t){const e=t.length,i=this.i,s=this.j;switch(this.heapPhase){case"1.build":this.j=pn.heapify(t,e,s),this.j==-1&&(this.i--,this.j=this.i,this.i<0&&(this.i=e-1,this.j=0,this.heapPhase="2.swap"));break;case"2.swap":const a=t[0],l=t[i];pn.swapColumn(a,l,60),this.heapPhase="3.sort";break;case"3.sort":if(this.j=pn.heapify(t,i,s),this.j==-1&&(this.j=0,this.i--,this.heapPhase="2.swap",this.i<0))return!0;break}}shellSortSetting(t){this.gap=Math.floor(t.length/2),this.i=this.gap,this.j=this.i}shellSort(t){const e=t.length,i=this.gap,s=this.i,a=this.j;if(i>0)if(s<e)if(a>=i&&t[a-i].height>t[a].height){const l=t[a],c=t[a-i];pn.swapColumn(l,c,60),this.j-=i}else this.i++,this.j=this.i;else this.gap=Math.floor(i/2),this.i=this.gap,this.j=this.i;else return}countingSortSetting(t){const e=t.map(i=>i.height);this.maxValue=Math.max(...e),this.count=new Array(Math.floor(this.maxValue)).fill(0),this.secondColumns=new Array(t.length),this.i=0,this.countingPhase="1.count"}countingSort(t){const e=t.length,i=this.i;switch(this.countingPhase){case"1.count":this.count[Math.round(t[i].height)]++,this.i++,this.i>=e&&(this.i=1,this.countingPhase="2.sum");break;case"2.sum":this.count[i]+=this.count[i-1],this.i++,this.i>this.maxValue&&(this.i=e-1,this.countingPhase="3.build",this.timesEveryFrame=1);break;case"3.build":const s=this.count[Math.round(t[i].height)-1];this.secondColumns[s]=JSON.parse(JSON.stringify(t[i])),this.secondColumns[s].y=t[i].y-this.height,this.secondColumns[s].width/=2,this.secondColumns[s].path=new Bo(t[i].x,t[i].y),this.secondColumns[s].path.NewTarget(t[s].x,t[i].y-400,60+Math.round(i/e*60)),this.count[t[i]]--,this.i--,this.i<0&&(this.i=0,this.countingPhase="4.output");break;case"4.output":const a=this.secondColumns[i],l=t[i];if(pn.swapColumn(a,l,30+Math.round(i/e*60)),a.height=0,this.i++,this.i>=e)return!0;break}}randomSortSetting(){this.i=0,this.j=0,this.timesEveryFrame=1}randomSort(t){const e=t.length,i=this.i,s=this.j;if(i>=e)return!0;if(s>=e)return this.i=this.i*this.i+1,this.j=i,!1;const a=t[s],l=t[(s*s+1)%e];pn.swapColumn(a,l,60-this.timesEveryFrame*2),this.j=this.i+this.j+1}instantRandomSortSetting(){this.i=0,this.j=0,this.timesEveryFrame=30}instantRandomSort(t){return this.randomSort(t)}}class HU{constructor(t,e){this.sort=new pn,this.x=t,this.y=e,this.slow=.999,this.friction=.997,this.i=0,this.j=0,this.maxValue=865*.4;const i=Math.floor(t-200),s=Math.max(Math.floor(t*2/i),.5);this.columns=new Array(i).fill().map((f,h)=>this.createColumn(t-s*i/2+s*h,e*1.8,s,(h+1)/i*this.maxValue)),this.walls=new Array(5).fill().map((f,h)=>this.createWall("arc",t,e-t/2,865/2/25*(1+h*h),3,0+Math.PI/16*(4-h),Math.PI/16*(12+h),Math.PI/15*h,865/2/25));const a=Math.min(i*2,500),l=2+Math.floor(s/3);this.balls=new Array(a).fill().map((f,h)=>{const d=Math.pow(Math.random(),.6)*865/4,p=Math.random()*2*Math.PI;return this.createBall(t+d*Math.cos(p),.5*e+d*Math.sin(p),l)}),this.rects=[{left:0,top:0,right:t*2,bottom:10},{left:0,top:e*2-10,right:t*2,bottom:e*2},{left:0,top:0,right:10,bottom:e*2},{left:t*2-10,top:0,right:t*2,bottom:e*2}];const c=Math.floor(this.x/15);this.texts={log:{text:"Welcome to Sorting Algorithm animation",fontpx:c,x:this.x,y:this.y*2-c*1}}}createColumn(t,e,i,s){const a=new Bo(t,e);return{x:t,y:e,width:i,height:s,path:a}}createWall(t="arc",e,i,s,a=5,l=0,c=2*Math.PI,f=0,h){return h||(h=s/20),{type:t,centerX:e,centerY:i,x:e,y:i,thick:a,length:s,startAngle:l,endAngle:c,period:f,swing:h}}createBall(t=this.x,e=this.y,i=3){const s=Math.random()*100-50,a=Math.random()*100-50,l=0,c=9.8*10;return{x:t,y:e,r:i,vx:s,vy:a,ax:l,ay:c}}getDist(t,e){const i=t.x-e.x,s=t.y-e.y;return Math.sqrt(i*i+s*s)}isCollide(t,e){if(e.type=="arc"){const i=t.x-e.x,s=t.y-e.y,a=Math.sqrt(i*i+s*s);return a+t.r>=e.length-e.thick&&a<e.length+e.thick?a:0}return 0}handleBallCollision(t,e,i){const s=(t.x+e.x)/2,a=(t.y+e.y)/2;t.x=s+(t.x-s)/(i/2)*t.r,t.y=a+(t.y-a)/(i/2)*t.r,e.x=s+(e.x-s)/(i/2)*e.r,e.y=a+(e.y-a)/(i/2)*e.r;const l=(t.vx-e.vx)/2,c=(t.vy-e.vy)/2,f=(t.vx+e.vx)/2,h=(t.vy+e.vy)/2,d=Math.atan((t.y-a)/(t.x-s)),p=-l*Math.sin(d)+c*Math.cos(d),m=-1*(l*Math.cos(d)+c*Math.sin(d)),_=-p*Math.sin(d)+m*Math.cos(d),M=p*Math.cos(d)+m*Math.sin(d);t.vx=(f+_)*this.friction,t.vy=(h+M)*this.friction,e.vx=(f-_)*this.friction,e.vy=(h-M)*this.friction}handleWallCollision(t,e,i){const s=e.x+(t.x-e.x)/i*e.length,a=e.y+(t.y-e.y)/i*e.length,l=Math.atan((a-e.y)/(s-e.x)),c=l>0?l:l+Math.PI,f=a>e.y?c:c+Math.PI;if(f>e.endAngle||f<e.startAngle)return;const h=i<=e.length?1:-1;t.x=s+(t.x-s)/(e.length-i)*(t.r+e.thick)*h,t.y=a+(t.y-a)/(e.length-i)*(t.r+e.thick)*h;const d=Math.atan((t.y-a)/(t.x-s)),p=-t.vx*Math.sin(d)+t.vy*Math.cos(d),m=-1*(t.vx*Math.cos(d)+t.vy*Math.sin(d));t.vx=(-p*Math.sin(d)+m*Math.cos(d))*this.friction,t.vy=(p*Math.cos(d)+m*Math.sin(d))*this.friction}handleColumnCollision(t,e){const i=e.path.pointY-e.height,s=e.path.pointY,a=e.path.pointX-e.width/2,l=e.path.pointX+e.width/2;if(t.x+t.r>a&&t.x-t.r<l&&t.y+t.r>i&&t.y-t.r<s){const c=Math.min(t.x+t.r-a,l-t.x+t.r),f=Math.min(t.y+t.r-i,s-t.y+t.r);c<f?(t.vx=-t.vx*this.friction,t.x<e.path.pointX?t.x=a-t.r:t.x=l+t.r):(t.vy=-t.vy*this.friction,t.y<e.path.pointY?t.y=i-t.r:t.y=s+t.r)}}handleRectCollision(t,e){if(t.x+t.r>e.left&&t.x-t.r<e.right&&t.y+t.r>e.top&&t.y-t.r<e.bottom){const i=Math.min(t.x+t.r-e.left,e.right-t.x+t.r),s=Math.min(t.y+t.r-e.top,e.bottom-t.y+t.r);i<s?(t.vx=-t.vx*this.friction,t.x<(e.left+e.right)/2?t.x=e.left-t.r:t.x=e.right+t.r):(t.vy=-t.vy*this.friction,t.y<(e.top+e.bottom)/2?t.y=e.top-t.r:t.y=e.bottom+t.r)}}update(){this.sort.update(this.columns),this.texts.log.text=this.sort.log.innerText,this.columns.forEach(t=>{t.path!=null&&t.path.__proto__.constructor==Bo&&t.path.NextFrame()}),this.sort.secondColumns.forEach((t,e)=>{if(t.path==null)return;if(t.path.__proto__.constructor!=Bo)return console.warn("the path of columns[ "+e+" ] was never constructed by Path");t.path.NextFrame()}),this.walls.forEach(t=>{t.period+=.25*2*Math.PI/60,t.x=t.centerX+t.swing*Math.cos(t.period),t.y=t.centerY+t.swing*Math.sin(t.period)}),this.balls.forEach(t=>{t.x=t.x+t.vx/60,t.y=t.y+t.vy/60,t.vx=(t.vx+t.ax/60)*this.slow,t.vy=(t.vy+t.ay/60)*this.slow,this.balls.forEach((e,i)=>{if(t==e)return;const s=this.getDist(t,e);s<t.r+e.r&&this.handleBallCollision(t,e,s)}),this.walls.forEach(e=>{const i=this.isCollide(t,e);i>0&&this.handleWallCollision(t,e,i)}),this.columns.forEach(e=>{this.handleColumnCollision(t,e)}),this.sort.secondColumns.forEach(e=>{this.handleColumnCollision(t,e)}),this.rects.forEach(e=>{this.handleRectCollision(t,e)})})}getRender(t){t.fillStyle="black",t.fillRect(0,0,t.canvas.width,t.canvas.height),this.walls.forEach(i=>{t.beginPath(),t.arc(i.x,i.y,i.length,i.startAngle,i.endAngle,!1),t.strokeStyle="rgba(40, 60, 80, 1)",t.lineWidth=i.thick*2,t.stroke()});function e(i){t.beginPath(),t.moveTo(i.path.pointX,i.path.pointY),t.lineTo(i.path.pointX,i.path.pointY-i.height);const s=i.height/865*2,a=246+s*-51,l=211+s*-51,c=101+s*32;t.strokeStyle="rgba("+a+","+l+","+c+",1)",t.lineWidth=i.width,t.stroke()}this.columns.forEach(i=>{e(i)}),this.sort.secondColumns&&this.sort.secondColumns.forEach(i=>{e(i)}),this.balls.forEach(i=>{t.beginPath(),t.arc(i.x,i.y,i.r,0,2*Math.PI,!1),t.fillStyle="#FFFFFF",t.fill()}),Object.keys(this.texts).forEach(i=>{const s=this.texts[i];t.beginPath(),t.fillStyle="#FFFFFF",t.font=s.fontpx+"px IBM Plex Sans",t.fillText(s.text,s.x,s.y)})}}const kU=function(){return new ux(60),this.setCanvas=(n,t)=>{this.system=new HU(n.width/2,n.height/2),this.system.sort.log=t,this.ctx=n.getContext("2d"),this.ctx.lineCap="butt",this.ctx.textAlign="center"},this.update=()=>{this.system.update()},this.render=()=>{this.system.getRender(this.ctx)},this.start=n=>{console.log(n.target.id);const t=n.target.id;if(!this.system.sort[t]){console.warn("invalid function name. Button id "+t+" is not any of sortFunctions");return}this.system.sort.start(t,this.system.columns)},this.cancel=()=>{this.system.sort.isSorting=!1,this.system.sort.send(name+" is interrupted!")},this.stepByStep=()=>{this.system.sort.isSorting=!0,this.system.sort.isStoping=!0,this.system.sort.send(name+" is proceeding step by step. Click again!")},this.setPath=n=>{const t=n.target.id;Wc[t]=n.target.value},this},we=new kU,na=n=>(Rd("data-v-0437c610"),n=n(),Cd(),n),GU=["width","height"],VU=na(()=>Pt("header",null,[Pt("h3",null,"粒子系統")],-1)),WU={id:"pathConfig",class:"parameter"},XU=na(()=>Pt("label",null,"linear :",-1)),qU=na(()=>Pt("label",null,"easein :",-1)),YU=na(()=>Pt("label",null,"easeout :",-1)),$U={ref:"controlpanel",class:"controlpanel"},KU=na(()=>Pt("label",null,"★",-1)),ZU=na(()=>Pt("p",null,"碰撞模擬和重力引擎",-1)),jU=[ZU],JU={__name:"CanvasSectionS3",props:{myMouse:Object,max:Number,ratio:Number},setup(n,{expose:t}){const e=Pe(null);t({section:e});const i=Pe(null),s=Pe(null),a=Pe(null);return us(async()=>{we.setCanvas(a.value,s.value),await Jo(),nr.registerAnimationCallback("updateS3",we.update),nr.registerAnimationCallback("renderS3",we.render)}),(l,c)=>(He(),ke("section",{ref_key:"section",ref:e,class:"section",id:"S3"},[Pt("canvas",{id:"canvasS3",ref_key:"canvas",ref:a,width:n.max*n.ratio,height:n.ratio*n.max*n.ratio},null,8,GU),Pt("div",{ref_key:"menu",ref:i,class:"gamemenu"},[VU,Pt("div",WU,[XU,Pt("input",{onChange:c[0]||(c[0]=(...f)=>_e(we).setPath&&_e(we).setPath(...f)),type:"number",id:"leapLinear",value:"0"},null,32),qU,Pt("input",{onChange:c[1]||(c[1]=(...f)=>_e(we).setPath&&_e(we).setPath(...f)),type:"number",id:"leapEasein",value:"-2"},null,32),YU,Pt("input",{onChange:c[2]||(c[2]=(...f)=>_e(we).setPath&&_e(we).setPath(...f)),type:"number",id:"leapEaseout",value:"2"},null,32)]),Pt("div",$U,[KU,Pt("button",{onClick:c[3]||(c[3]=(...f)=>_e(we).start&&_e(we).start(...f)),id:"bubbleSort"},"泡沫排序"),Pt("button",{onClick:c[4]||(c[4]=(...f)=>_e(we).start&&_e(we).start(...f)),id:"selectionSort"},"選擇排序"),Pt("button",{onClick:c[5]||(c[5]=(...f)=>_e(we).start&&_e(we).start(...f)),id:"insertionSort"},"插入排序"),Pt("button",{onClick:c[6]||(c[6]=(...f)=>_e(we).start&&_e(we).start(...f)),id:"quickSort"},"快速排序"),Pt("button",{onClick:c[7]||(c[7]=(...f)=>_e(we).start&&_e(we).start(...f)),id:"mergeSort"},"合併排序"),Pt("button",{onClick:c[8]||(c[8]=(...f)=>_e(we).start&&_e(we).start(...f)),id:"heapSort"},"堆排序"),Pt("button",{onClick:c[9]||(c[9]=(...f)=>_e(we).start&&_e(we).start(...f)),id:"shellSort"},"希爾排序"),Pt("button",{onClick:c[10]||(c[10]=(...f)=>_e(we).start&&_e(we).start(...f)),id:"countingSort"},"計數排序"),Pt("button",{onClick:c[11]||(c[11]=(...f)=>_e(we).start&&_e(we).start(...f)),id:"randomSort"},"打亂"),Pt("button",{onClick:c[12]||(c[12]=(...f)=>_e(we).start&&_e(we).start(...f)),id:"instantRandomSort"},"立刻打亂"),Pt("button",{onClick:c[13]||(c[13]=(...f)=>_e(we).cancel&&_e(we).cancel(...f)),id:"cancelSort"},"取消"),Pt("button",{onClick:c[14]||(c[14]=(...f)=>_e(we).stepByStep&&_e(we).stepByStep(...f)),id:"stepByStep"},"一步一步來")],512),Pt("div",{ref_key:"log",ref:s,id:"sortLog"},jU,512),$e(Cv,{menu:i.value},null,8,["menu"])],512)],512))}},QU=Cr(JU,[["__scopeId","data-v-0437c610"]]),t3={class:"pagination"},e3={class:"pagDescription"},n3=["disabled"],i3=["disabled"],r3=["disabled"],s3=["disabled"],o3={__name:"Pagination",props:{activePage:Number,count:Number,rowsPerPage:Number,totalPages:Number},emits:["update:activePage"],setup(n,{emit:t}){const e=n;Pe({}),Pe({order:"asc",orderBy:"id"}),Pe("");const i=nn(()=>e.activePage===1?1:e.rowsPerPage*(e.activePage-1)+1),s=nn(()=>e.activePage===e.totalPages?e.count:i.value+e.rowsPerPage-1),a=nn(()=>e.activePage===1),l=nn(()=>e.activePage===e.totalPages),c=t,f=h=>{c("update:activePage",h),console.log(e.rowsPerPage,e.activePage)};return(h,d)=>(He(),ke("div",t3,[Pt("div",e3,[Pt("p",null,"Page "+bn(n.activePage)+" of "+bn(n.totalPages),1),Pt("p",null,"Rows: "+bn(i.value===s.value?s.value:i.value+"-"+s.value)+" of "+bn(n.count),1)]),Pt("button",{class:"button",disabled:a.value,style:yr({opacity:a.value?.2:1}),onClick:d[0]||(d[0]=p=>f(1))},"🢀🢀 First",12,n3),Pt("button",{class:"button",disabled:a.value,style:yr({opacity:a.value?.2:1}),onClick:d[1]||(d[1]=p=>f(n.activePage-1))},"🢀 Previous",12,i3),Pt("button",{class:"button",disabled:l.value,style:yr({opacity:l.value?.2:1}),onClick:d[2]||(d[2]=p=>f(n.activePage+1))},"Next 🢂",12,r3),Pt("button",{class:"button",disabled:l.value,style:yr({opacity:l.value?.2:1}),onClick:d[3]||(d[3]=p=>f(n.totalPages))},"Last 🢂🢂",12,s3)]))}},a3=Cr(o3,[["__scopeId","data-v-682b6599"]]);var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function l3(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qc={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Qc.exports;(function(n,t){(function(){var e,i="4.17.21",s=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",h=500,d="__lodash_placeholder__",p=1,m=2,_=4,M=1,S=2,x=1,v=2,w=4,A=8,L=16,$=32,N=64,z=128,Q=256,D=512,P=30,k="...",ht=800,ot=16,yt=1,Mt=2,ut=3,lt=1/0,tt=9007199254740991,Ot=17976931348623157e292,Bt=NaN,Nt=4294967295,Qt=Nt-1,xe=Nt>>>1,dt=[["ary",z],["bind",x],["bindKey",v],["curry",A],["curryRight",L],["flip",D],["partial",$],["partialRight",N],["rearg",Q]],Tt="[object Arguments]",Ft="[object Array]",X="[object AsyncFunction]",vt="[object Boolean]",pt="[object Date]",Rt="[object DOMException]",$t="[object Error]",B="[object Function]",I="[object GeneratorFunction]",U="[object Map]",W="[object Number]",et="[object Null]",rt="[object Object]",ct="[object Promise]",mt="[object Proxy]",R="[object RegExp]",y="[object Set]",O="[object String]",j="[object Symbol]",nt="[object Undefined]",J="[object WeakMap]",Ct="[object WeakSet]",gt="[object ArrayBuffer]",wt="[object DataView]",zt="[object Float32Array]",At="[object Float64Array]",Ut="[object Int8Array]",ae="[object Int16Array]",jt="[object Int32Array]",Vt="[object Uint8Array]",ee="[object Uint8ClampedArray]",Zt="[object Uint16Array]",ve="[object Uint32Array]",G=/\b__p \+= '';/g,Lt=/\b(__p \+=) '' \+/g,St=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Et=/&(?:amp|lt|gt|quot|#39);/g,Dt=/[&<>"']/g,re=RegExp(Et.source),ye=RegExp(Dt.source),tn=/<%-([\s\S]+?)%>/g,un=/<%([\s\S]+?)%>/g,Ae=/<%=([\s\S]+?)%>/g,Ti=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,di=/^\w*$/,il=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wi=/[\\^$.*+?()[\]{}|]/g,ia=RegExp(wi.source),qs=/^\s+/,rl=/\s/,Ys=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,sl=/\{\n\/\* \[wrapped with (.+)\] \*/,$s=/,? & /,ol=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,al=/[()=,{}\[\]\/\s]/,vu=/\\(\\)?/g,xu=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ll=/\w*$/,C=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,it=/^\[object .+?Constructor\]$/,st=/^0o[0-7]+$/i,Z=/^(?:0|[1-9]\d*)$/,It=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Gt=/($^)/,qt=/['\n\r\u2028\u2029\\]/g,Xt="\\ud800-\\udfff",se="\\u0300-\\u036f",oe="\\ufe20-\\ufe2f",Jt="\\u20d0-\\u20ff",be=se+oe+Jt,We="\\u2700-\\u27bf",Xe="a-z\\xdf-\\xf6\\xf8-\\xff",Dn="\\xac\\xb1\\xd7\\xf7",Ce="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Kt="\\u2000-\\u206f",fn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Te="A-Z\\xc0-\\xd6\\xd8-\\xde",kn="\\ufe0e\\ufe0f",ir=Dn+Ce+Kt+fn,yn="['’]",ra="["+Xt+"]",je="["+ir+"]",ii="["+be+"]",Ks="\\d+",Gn="["+We+"]",Zs="["+Xe+"]",cl="[^"+Xt+ir+Ks+We+Xe+Te+"]",js="\\ud83c[\\udffb-\\udfff]",hx="(?:"+ii+"|"+js+")",Jd="[^"+Xt+"]",Mu="(?:\\ud83c[\\udde6-\\uddff]){2}",Su="[\\ud800-\\udbff][\\udc00-\\udfff]",Js="["+Te+"]",Qd="\\u200d",tp="(?:"+Zs+"|"+cl+")",dx="(?:"+Js+"|"+cl+")",ep="(?:"+yn+"(?:d|ll|m|re|s|t|ve))?",np="(?:"+yn+"(?:D|LL|M|RE|S|T|VE))?",ip=hx+"?",rp="["+kn+"]?",px="(?:"+Qd+"(?:"+[Jd,Mu,Su].join("|")+")"+rp+ip+")*",mx="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",gx="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",sp=rp+ip+px,_x="(?:"+[Gn,Mu,Su].join("|")+")"+sp,vx="(?:"+[Jd+ii+"?",ii,Mu,Su,ra].join("|")+")",xx=RegExp(yn,"g"),Mx=RegExp(ii,"g"),yu=RegExp(js+"(?="+js+")|"+vx+sp,"g"),Sx=RegExp([Js+"?"+Zs+"+"+ep+"(?="+[je,Js,"$"].join("|")+")",dx+"+"+np+"(?="+[je,Js+tp,"$"].join("|")+")",Js+"?"+tp+"+"+ep,Js+"+"+np,gx,mx,Ks,_x].join("|"),"g"),yx=RegExp("["+Qd+Xt+be+kn+"]"),Ex=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ax=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],bx=-1,qe={};qe[zt]=qe[At]=qe[Ut]=qe[ae]=qe[jt]=qe[Vt]=qe[ee]=qe[Zt]=qe[ve]=!0,qe[Tt]=qe[Ft]=qe[gt]=qe[vt]=qe[wt]=qe[pt]=qe[$t]=qe[B]=qe[U]=qe[W]=qe[rt]=qe[R]=qe[y]=qe[O]=qe[J]=!1;var Ve={};Ve[Tt]=Ve[Ft]=Ve[gt]=Ve[wt]=Ve[vt]=Ve[pt]=Ve[zt]=Ve[At]=Ve[Ut]=Ve[ae]=Ve[jt]=Ve[U]=Ve[W]=Ve[rt]=Ve[R]=Ve[y]=Ve[O]=Ve[j]=Ve[Vt]=Ve[ee]=Ve[Zt]=Ve[ve]=!0,Ve[$t]=Ve[B]=Ve[J]=!1;var Tx={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},wx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Rx={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Cx={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Px=parseFloat,Lx=parseInt,op=typeof Ca=="object"&&Ca&&Ca.Object===Object&&Ca,Ix=typeof self=="object"&&self&&self.Object===Object&&self,En=op||Ix||Function("return this")(),Eu=t&&!t.nodeType&&t,hs=Eu&&!0&&n&&!n.nodeType&&n,ap=hs&&hs.exports===Eu,Au=ap&&op.process,pi=function(){try{var V=hs&&hs.require&&hs.require("util").types;return V||Au&&Au.binding&&Au.binding("util")}catch{}}(),lp=pi&&pi.isArrayBuffer,cp=pi&&pi.isDate,up=pi&&pi.isMap,fp=pi&&pi.isRegExp,hp=pi&&pi.isSet,dp=pi&&pi.isTypedArray;function ri(V,ft,at){switch(at.length){case 0:return V.call(ft);case 1:return V.call(ft,at[0]);case 2:return V.call(ft,at[0],at[1]);case 3:return V.call(ft,at[0],at[1],at[2])}return V.apply(ft,at)}function Dx(V,ft,at,Wt){for(var ce=-1,Le=V==null?0:V.length;++ce<Le;){var hn=V[ce];ft(Wt,hn,at(hn),V)}return Wt}function mi(V,ft){for(var at=-1,Wt=V==null?0:V.length;++at<Wt&&ft(V[at],at,V)!==!1;);return V}function Ux(V,ft){for(var at=V==null?0:V.length;at--&&ft(V[at],at,V)!==!1;);return V}function pp(V,ft){for(var at=-1,Wt=V==null?0:V.length;++at<Wt;)if(!ft(V[at],at,V))return!1;return!0}function Lr(V,ft){for(var at=-1,Wt=V==null?0:V.length,ce=0,Le=[];++at<Wt;){var hn=V[at];ft(hn,at,V)&&(Le[ce++]=hn)}return Le}function ul(V,ft){var at=V==null?0:V.length;return!!at&&Qs(V,ft,0)>-1}function bu(V,ft,at){for(var Wt=-1,ce=V==null?0:V.length;++Wt<ce;)if(at(ft,V[Wt]))return!0;return!1}function Ke(V,ft){for(var at=-1,Wt=V==null?0:V.length,ce=Array(Wt);++at<Wt;)ce[at]=ft(V[at],at,V);return ce}function Ir(V,ft){for(var at=-1,Wt=ft.length,ce=V.length;++at<Wt;)V[ce+at]=ft[at];return V}function Tu(V,ft,at,Wt){var ce=-1,Le=V==null?0:V.length;for(Wt&&Le&&(at=V[++ce]);++ce<Le;)at=ft(at,V[ce],ce,V);return at}function Nx(V,ft,at,Wt){var ce=V==null?0:V.length;for(Wt&&ce&&(at=V[--ce]);ce--;)at=ft(at,V[ce],ce,V);return at}function wu(V,ft){for(var at=-1,Wt=V==null?0:V.length;++at<Wt;)if(ft(V[at],at,V))return!0;return!1}var Fx=Ru("length");function Ox(V){return V.split("")}function Bx(V){return V.match(ol)||[]}function mp(V,ft,at){var Wt;return at(V,function(ce,Le,hn){if(ft(ce,Le,hn))return Wt=Le,!1}),Wt}function fl(V,ft,at,Wt){for(var ce=V.length,Le=at+(Wt?1:-1);Wt?Le--:++Le<ce;)if(ft(V[Le],Le,V))return Le;return-1}function Qs(V,ft,at){return ft===ft?Zx(V,ft,at):fl(V,gp,at)}function zx(V,ft,at,Wt){for(var ce=at-1,Le=V.length;++ce<Le;)if(Wt(V[ce],ft))return ce;return-1}function gp(V){return V!==V}function _p(V,ft){var at=V==null?0:V.length;return at?Pu(V,ft)/at:Bt}function Ru(V){return function(ft){return ft==null?e:ft[V]}}function Cu(V){return function(ft){return V==null?e:V[ft]}}function vp(V,ft,at,Wt,ce){return ce(V,function(Le,hn,Ge){at=Wt?(Wt=!1,Le):ft(at,Le,hn,Ge)}),at}function Hx(V,ft){var at=V.length;for(V.sort(ft);at--;)V[at]=V[at].value;return V}function Pu(V,ft){for(var at,Wt=-1,ce=V.length;++Wt<ce;){var Le=ft(V[Wt]);Le!==e&&(at=at===e?Le:at+Le)}return at}function Lu(V,ft){for(var at=-1,Wt=Array(V);++at<V;)Wt[at]=ft(at);return Wt}function kx(V,ft){return Ke(ft,function(at){return[at,V[at]]})}function xp(V){return V&&V.slice(0,Ep(V)+1).replace(qs,"")}function si(V){return function(ft){return V(ft)}}function Iu(V,ft){return Ke(ft,function(at){return V[at]})}function sa(V,ft){return V.has(ft)}function Mp(V,ft){for(var at=-1,Wt=V.length;++at<Wt&&Qs(ft,V[at],0)>-1;);return at}function Sp(V,ft){for(var at=V.length;at--&&Qs(ft,V[at],0)>-1;);return at}function Gx(V,ft){for(var at=V.length,Wt=0;at--;)V[at]===ft&&++Wt;return Wt}var Vx=Cu(Tx),Wx=Cu(wx);function Xx(V){return"\\"+Cx[V]}function qx(V,ft){return V==null?e:V[ft]}function to(V){return yx.test(V)}function Yx(V){return Ex.test(V)}function $x(V){for(var ft,at=[];!(ft=V.next()).done;)at.push(ft.value);return at}function Du(V){var ft=-1,at=Array(V.size);return V.forEach(function(Wt,ce){at[++ft]=[ce,Wt]}),at}function yp(V,ft){return function(at){return V(ft(at))}}function Dr(V,ft){for(var at=-1,Wt=V.length,ce=0,Le=[];++at<Wt;){var hn=V[at];(hn===ft||hn===d)&&(V[at]=d,Le[ce++]=at)}return Le}function hl(V){var ft=-1,at=Array(V.size);return V.forEach(function(Wt){at[++ft]=Wt}),at}function Kx(V){var ft=-1,at=Array(V.size);return V.forEach(function(Wt){at[++ft]=[Wt,Wt]}),at}function Zx(V,ft,at){for(var Wt=at-1,ce=V.length;++Wt<ce;)if(V[Wt]===ft)return Wt;return-1}function jx(V,ft,at){for(var Wt=at+1;Wt--;)if(V[Wt]===ft)return Wt;return Wt}function eo(V){return to(V)?Qx(V):Fx(V)}function Ri(V){return to(V)?tM(V):Ox(V)}function Ep(V){for(var ft=V.length;ft--&&rl.test(V.charAt(ft)););return ft}var Jx=Cu(Rx);function Qx(V){for(var ft=yu.lastIndex=0;yu.test(V);)++ft;return ft}function tM(V){return V.match(yu)||[]}function eM(V){return V.match(Sx)||[]}var nM=function V(ft){ft=ft==null?En:no.defaults(En.Object(),ft,no.pick(En,Ax));var at=ft.Array,Wt=ft.Date,ce=ft.Error,Le=ft.Function,hn=ft.Math,Ge=ft.Object,Uu=ft.RegExp,iM=ft.String,gi=ft.TypeError,dl=at.prototype,rM=Le.prototype,io=Ge.prototype,pl=ft["__core-js_shared__"],ml=rM.toString,Be=io.hasOwnProperty,sM=0,Ap=function(){var r=/[^.]+$/.exec(pl&&pl.keys&&pl.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),gl=io.toString,oM=ml.call(Ge),aM=En._,lM=Uu("^"+ml.call(Be).replace(wi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_l=ap?ft.Buffer:e,Ur=ft.Symbol,vl=ft.Uint8Array,bp=_l?_l.allocUnsafe:e,xl=yp(Ge.getPrototypeOf,Ge),Tp=Ge.create,wp=io.propertyIsEnumerable,Ml=dl.splice,Rp=Ur?Ur.isConcatSpreadable:e,oa=Ur?Ur.iterator:e,ds=Ur?Ur.toStringTag:e,Sl=function(){try{var r=vs(Ge,"defineProperty");return r({},"",{}),r}catch{}}(),cM=ft.clearTimeout!==En.clearTimeout&&ft.clearTimeout,uM=Wt&&Wt.now!==En.Date.now&&Wt.now,fM=ft.setTimeout!==En.setTimeout&&ft.setTimeout,yl=hn.ceil,El=hn.floor,Nu=Ge.getOwnPropertySymbols,hM=_l?_l.isBuffer:e,Cp=ft.isFinite,dM=dl.join,pM=yp(Ge.keys,Ge),dn=hn.max,Tn=hn.min,mM=Wt.now,gM=ft.parseInt,Pp=hn.random,_M=dl.reverse,Fu=vs(ft,"DataView"),aa=vs(ft,"Map"),Ou=vs(ft,"Promise"),ro=vs(ft,"Set"),la=vs(ft,"WeakMap"),ca=vs(Ge,"create"),Al=la&&new la,so={},vM=xs(Fu),xM=xs(aa),MM=xs(Ou),SM=xs(ro),yM=xs(la),bl=Ur?Ur.prototype:e,ua=bl?bl.valueOf:e,Lp=bl?bl.toString:e;function b(r){if(en(r)&&!ue(r)&&!(r instanceof Se)){if(r instanceof _i)return r;if(Be.call(r,"__wrapped__"))return Im(r)}return new _i(r)}var oo=function(){function r(){}return function(o){if(!Je(o))return{};if(Tp)return Tp(o);r.prototype=o;var u=new r;return r.prototype=e,u}}();function Tl(){}function _i(r,o){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=e}b.templateSettings={escape:tn,evaluate:un,interpolate:Ae,variable:"",imports:{_:b}},b.prototype=Tl.prototype,b.prototype.constructor=b,_i.prototype=oo(Tl.prototype),_i.prototype.constructor=_i;function Se(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Nt,this.__views__=[]}function EM(){var r=new Se(this.__wrapped__);return r.__actions__=Vn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Vn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Vn(this.__views__),r}function AM(){if(this.__filtered__){var r=new Se(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function bM(){var r=this.__wrapped__.value(),o=this.__dir__,u=ue(r),g=o<0,E=u?r.length:0,T=OS(0,E,this.__views__),F=T.start,H=T.end,Y=H-F,_t=g?H:F-1,xt=this.__iteratees__,bt=xt.length,Ht=0,Yt=Tn(Y,this.__takeCount__);if(!u||!g&&E==Y&&Yt==Y)return em(r,this.__actions__);var ne=[];t:for(;Y--&&Ht<Yt;){_t+=o;for(var de=-1,ie=r[_t];++de<bt;){var Me=xt[de],Ee=Me.iteratee,li=Me.type,Fn=Ee(ie);if(li==Mt)ie=Fn;else if(!Fn){if(li==yt)continue t;break t}}ne[Ht++]=ie}return ne}Se.prototype=oo(Tl.prototype),Se.prototype.constructor=Se;function ps(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var g=r[o];this.set(g[0],g[1])}}function TM(){this.__data__=ca?ca(null):{},this.size=0}function wM(r){var o=this.has(r)&&delete this.__data__[r];return this.size-=o?1:0,o}function RM(r){var o=this.__data__;if(ca){var u=o[r];return u===f?e:u}return Be.call(o,r)?o[r]:e}function CM(r){var o=this.__data__;return ca?o[r]!==e:Be.call(o,r)}function PM(r,o){var u=this.__data__;return this.size+=this.has(r)?0:1,u[r]=ca&&o===e?f:o,this}ps.prototype.clear=TM,ps.prototype.delete=wM,ps.prototype.get=RM,ps.prototype.has=CM,ps.prototype.set=PM;function rr(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var g=r[o];this.set(g[0],g[1])}}function LM(){this.__data__=[],this.size=0}function IM(r){var o=this.__data__,u=wl(o,r);if(u<0)return!1;var g=o.length-1;return u==g?o.pop():Ml.call(o,u,1),--this.size,!0}function DM(r){var o=this.__data__,u=wl(o,r);return u<0?e:o[u][1]}function UM(r){return wl(this.__data__,r)>-1}function NM(r,o){var u=this.__data__,g=wl(u,r);return g<0?(++this.size,u.push([r,o])):u[g][1]=o,this}rr.prototype.clear=LM,rr.prototype.delete=IM,rr.prototype.get=DM,rr.prototype.has=UM,rr.prototype.set=NM;function sr(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var g=r[o];this.set(g[0],g[1])}}function FM(){this.size=0,this.__data__={hash:new ps,map:new(aa||rr),string:new ps}}function OM(r){var o=zl(this,r).delete(r);return this.size-=o?1:0,o}function BM(r){return zl(this,r).get(r)}function zM(r){return zl(this,r).has(r)}function HM(r,o){var u=zl(this,r),g=u.size;return u.set(r,o),this.size+=u.size==g?0:1,this}sr.prototype.clear=FM,sr.prototype.delete=OM,sr.prototype.get=BM,sr.prototype.has=zM,sr.prototype.set=HM;function ms(r){var o=-1,u=r==null?0:r.length;for(this.__data__=new sr;++o<u;)this.add(r[o])}function kM(r){return this.__data__.set(r,f),this}function GM(r){return this.__data__.has(r)}ms.prototype.add=ms.prototype.push=kM,ms.prototype.has=GM;function Ci(r){var o=this.__data__=new rr(r);this.size=o.size}function VM(){this.__data__=new rr,this.size=0}function WM(r){var o=this.__data__,u=o.delete(r);return this.size=o.size,u}function XM(r){return this.__data__.get(r)}function qM(r){return this.__data__.has(r)}function YM(r,o){var u=this.__data__;if(u instanceof rr){var g=u.__data__;if(!aa||g.length<s-1)return g.push([r,o]),this.size=++u.size,this;u=this.__data__=new sr(g)}return u.set(r,o),this.size=u.size,this}Ci.prototype.clear=VM,Ci.prototype.delete=WM,Ci.prototype.get=XM,Ci.prototype.has=qM,Ci.prototype.set=YM;function Ip(r,o){var u=ue(r),g=!u&&Ms(r),E=!u&&!g&&zr(r),T=!u&&!g&&!E&&uo(r),F=u||g||E||T,H=F?Lu(r.length,iM):[],Y=H.length;for(var _t in r)(o||Be.call(r,_t))&&!(F&&(_t=="length"||E&&(_t=="offset"||_t=="parent")||T&&(_t=="buffer"||_t=="byteLength"||_t=="byteOffset")||cr(_t,Y)))&&H.push(_t);return H}function Dp(r){var o=r.length;return o?r[$u(0,o-1)]:e}function $M(r,o){return Hl(Vn(r),gs(o,0,r.length))}function KM(r){return Hl(Vn(r))}function Bu(r,o,u){(u!==e&&!Pi(r[o],u)||u===e&&!(o in r))&&or(r,o,u)}function fa(r,o,u){var g=r[o];(!(Be.call(r,o)&&Pi(g,u))||u===e&&!(o in r))&&or(r,o,u)}function wl(r,o){for(var u=r.length;u--;)if(Pi(r[u][0],o))return u;return-1}function ZM(r,o,u,g){return Nr(r,function(E,T,F){o(g,E,u(E),F)}),g}function Up(r,o){return r&&Wi(o,xn(o),r)}function jM(r,o){return r&&Wi(o,Xn(o),r)}function or(r,o,u){o=="__proto__"&&Sl?Sl(r,o,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[o]=u}function zu(r,o){for(var u=-1,g=o.length,E=at(g),T=r==null;++u<g;)E[u]=T?e:Mf(r,o[u]);return E}function gs(r,o,u){return r===r&&(u!==e&&(r=r<=u?r:u),o!==e&&(r=r>=o?r:o)),r}function vi(r,o,u,g,E,T){var F,H=o&p,Y=o&m,_t=o&_;if(u&&(F=E?u(r,g,E,T):u(r)),F!==e)return F;if(!Je(r))return r;var xt=ue(r);if(xt){if(F=zS(r),!H)return Vn(r,F)}else{var bt=wn(r),Ht=bt==B||bt==I;if(zr(r))return rm(r,H);if(bt==rt||bt==Tt||Ht&&!E){if(F=Y||Ht?{}:Em(r),!H)return Y?RS(r,jM(F,r)):wS(r,Up(F,r))}else{if(!Ve[bt])return E?r:{};F=HS(r,bt,H)}}T||(T=new Ci);var Yt=T.get(r);if(Yt)return Yt;T.set(r,F),Jm(r)?r.forEach(function(ie){F.add(vi(ie,o,u,ie,r,T))}):Zm(r)&&r.forEach(function(ie,Me){F.set(Me,vi(ie,o,u,Me,r,T))});var ne=_t?Y?of:sf:Y?Xn:xn,de=xt?e:ne(r);return mi(de||r,function(ie,Me){de&&(Me=ie,ie=r[Me]),fa(F,Me,vi(ie,o,u,Me,r,T))}),F}function JM(r){var o=xn(r);return function(u){return Np(u,r,o)}}function Np(r,o,u){var g=u.length;if(r==null)return!g;for(r=Ge(r);g--;){var E=u[g],T=o[E],F=r[E];if(F===e&&!(E in r)||!T(F))return!1}return!0}function Fp(r,o,u){if(typeof r!="function")throw new gi(l);return va(function(){r.apply(e,u)},o)}function ha(r,o,u,g){var E=-1,T=ul,F=!0,H=r.length,Y=[],_t=o.length;if(!H)return Y;u&&(o=Ke(o,si(u))),g?(T=bu,F=!1):o.length>=s&&(T=sa,F=!1,o=new ms(o));t:for(;++E<H;){var xt=r[E],bt=u==null?xt:u(xt);if(xt=g||xt!==0?xt:0,F&&bt===bt){for(var Ht=_t;Ht--;)if(o[Ht]===bt)continue t;Y.push(xt)}else T(o,bt,g)||Y.push(xt)}return Y}var Nr=cm(Vi),Op=cm(ku,!0);function QM(r,o){var u=!0;return Nr(r,function(g,E,T){return u=!!o(g,E,T),u}),u}function Rl(r,o,u){for(var g=-1,E=r.length;++g<E;){var T=r[g],F=o(T);if(F!=null&&(H===e?F===F&&!ai(F):u(F,H)))var H=F,Y=T}return Y}function tS(r,o,u,g){var E=r.length;for(u=he(u),u<0&&(u=-u>E?0:E+u),g=g===e||g>E?E:he(g),g<0&&(g+=E),g=u>g?0:tg(g);u<g;)r[u++]=o;return r}function Bp(r,o){var u=[];return Nr(r,function(g,E,T){o(g,E,T)&&u.push(g)}),u}function An(r,o,u,g,E){var T=-1,F=r.length;for(u||(u=GS),E||(E=[]);++T<F;){var H=r[T];o>0&&u(H)?o>1?An(H,o-1,u,g,E):Ir(E,H):g||(E[E.length]=H)}return E}var Hu=um(),zp=um(!0);function Vi(r,o){return r&&Hu(r,o,xn)}function ku(r,o){return r&&zp(r,o,xn)}function Cl(r,o){return Lr(o,function(u){return ur(r[u])})}function _s(r,o){o=Or(o,r);for(var u=0,g=o.length;r!=null&&u<g;)r=r[Xi(o[u++])];return u&&u==g?r:e}function Hp(r,o,u){var g=o(r);return ue(r)?g:Ir(g,u(r))}function Un(r){return r==null?r===e?nt:et:ds&&ds in Ge(r)?FS(r):KS(r)}function Gu(r,o){return r>o}function eS(r,o){return r!=null&&Be.call(r,o)}function nS(r,o){return r!=null&&o in Ge(r)}function iS(r,o,u){return r>=Tn(o,u)&&r<dn(o,u)}function Vu(r,o,u){for(var g=u?bu:ul,E=r[0].length,T=r.length,F=T,H=at(T),Y=1/0,_t=[];F--;){var xt=r[F];F&&o&&(xt=Ke(xt,si(o))),Y=Tn(xt.length,Y),H[F]=!u&&(o||E>=120&&xt.length>=120)?new ms(F&&xt):e}xt=r[0];var bt=-1,Ht=H[0];t:for(;++bt<E&&_t.length<Y;){var Yt=xt[bt],ne=o?o(Yt):Yt;if(Yt=u||Yt!==0?Yt:0,!(Ht?sa(Ht,ne):g(_t,ne,u))){for(F=T;--F;){var de=H[F];if(!(de?sa(de,ne):g(r[F],ne,u)))continue t}Ht&&Ht.push(ne),_t.push(Yt)}}return _t}function rS(r,o,u,g){return Vi(r,function(E,T,F){o(g,u(E),T,F)}),g}function da(r,o,u){o=Or(o,r),r=wm(r,o);var g=r==null?r:r[Xi(Mi(o))];return g==null?e:ri(g,r,u)}function kp(r){return en(r)&&Un(r)==Tt}function sS(r){return en(r)&&Un(r)==gt}function oS(r){return en(r)&&Un(r)==pt}function pa(r,o,u,g,E){return r===o?!0:r==null||o==null||!en(r)&&!en(o)?r!==r&&o!==o:aS(r,o,u,g,pa,E)}function aS(r,o,u,g,E,T){var F=ue(r),H=ue(o),Y=F?Ft:wn(r),_t=H?Ft:wn(o);Y=Y==Tt?rt:Y,_t=_t==Tt?rt:_t;var xt=Y==rt,bt=_t==rt,Ht=Y==_t;if(Ht&&zr(r)){if(!zr(o))return!1;F=!0,xt=!1}if(Ht&&!xt)return T||(T=new Ci),F||uo(r)?Mm(r,o,u,g,E,T):US(r,o,Y,u,g,E,T);if(!(u&M)){var Yt=xt&&Be.call(r,"__wrapped__"),ne=bt&&Be.call(o,"__wrapped__");if(Yt||ne){var de=Yt?r.value():r,ie=ne?o.value():o;return T||(T=new Ci),E(de,ie,u,g,T)}}return Ht?(T||(T=new Ci),NS(r,o,u,g,E,T)):!1}function lS(r){return en(r)&&wn(r)==U}function Wu(r,o,u,g){var E=u.length,T=E,F=!g;if(r==null)return!T;for(r=Ge(r);E--;){var H=u[E];if(F&&H[2]?H[1]!==r[H[0]]:!(H[0]in r))return!1}for(;++E<T;){H=u[E];var Y=H[0],_t=r[Y],xt=H[1];if(F&&H[2]){if(_t===e&&!(Y in r))return!1}else{var bt=new Ci;if(g)var Ht=g(_t,xt,Y,r,o,bt);if(!(Ht===e?pa(xt,_t,M|S,g,bt):Ht))return!1}}return!0}function Gp(r){if(!Je(r)||WS(r))return!1;var o=ur(r)?lM:it;return o.test(xs(r))}function cS(r){return en(r)&&Un(r)==R}function uS(r){return en(r)&&wn(r)==y}function fS(r){return en(r)&&ql(r.length)&&!!qe[Un(r)]}function Vp(r){return typeof r=="function"?r:r==null?qn:typeof r=="object"?ue(r)?qp(r[0],r[1]):Xp(r):fg(r)}function Xu(r){if(!_a(r))return pM(r);var o=[];for(var u in Ge(r))Be.call(r,u)&&u!="constructor"&&o.push(u);return o}function hS(r){if(!Je(r))return $S(r);var o=_a(r),u=[];for(var g in r)g=="constructor"&&(o||!Be.call(r,g))||u.push(g);return u}function qu(r,o){return r<o}function Wp(r,o){var u=-1,g=Wn(r)?at(r.length):[];return Nr(r,function(E,T,F){g[++u]=o(E,T,F)}),g}function Xp(r){var o=lf(r);return o.length==1&&o[0][2]?bm(o[0][0],o[0][1]):function(u){return u===r||Wu(u,r,o)}}function qp(r,o){return uf(r)&&Am(o)?bm(Xi(r),o):function(u){var g=Mf(u,r);return g===e&&g===o?Sf(u,r):pa(o,g,M|S)}}function Pl(r,o,u,g,E){r!==o&&Hu(o,function(T,F){if(E||(E=new Ci),Je(T))dS(r,o,F,u,Pl,g,E);else{var H=g?g(hf(r,F),T,F+"",r,o,E):e;H===e&&(H=T),Bu(r,F,H)}},Xn)}function dS(r,o,u,g,E,T,F){var H=hf(r,u),Y=hf(o,u),_t=F.get(Y);if(_t){Bu(r,u,_t);return}var xt=T?T(H,Y,u+"",r,o,F):e,bt=xt===e;if(bt){var Ht=ue(Y),Yt=!Ht&&zr(Y),ne=!Ht&&!Yt&&uo(Y);xt=Y,Ht||Yt||ne?ue(H)?xt=H:rn(H)?xt=Vn(H):Yt?(bt=!1,xt=rm(Y,!0)):ne?(bt=!1,xt=sm(Y,!0)):xt=[]:xa(Y)||Ms(Y)?(xt=H,Ms(H)?xt=eg(H):(!Je(H)||ur(H))&&(xt=Em(Y))):bt=!1}bt&&(F.set(Y,xt),E(xt,Y,g,T,F),F.delete(Y)),Bu(r,u,xt)}function Yp(r,o){var u=r.length;if(u)return o+=o<0?u:0,cr(o,u)?r[o]:e}function $p(r,o,u){o.length?o=Ke(o,function(T){return ue(T)?function(F){return _s(F,T.length===1?T[0]:T)}:T}):o=[qn];var g=-1;o=Ke(o,si(te()));var E=Wp(r,function(T,F,H){var Y=Ke(o,function(_t){return _t(T)});return{criteria:Y,index:++g,value:T}});return Hx(E,function(T,F){return TS(T,F,u)})}function pS(r,o){return Kp(r,o,function(u,g){return Sf(r,g)})}function Kp(r,o,u){for(var g=-1,E=o.length,T={};++g<E;){var F=o[g],H=_s(r,F);u(H,F)&&ma(T,Or(F,r),H)}return T}function mS(r){return function(o){return _s(o,r)}}function Yu(r,o,u,g){var E=g?zx:Qs,T=-1,F=o.length,H=r;for(r===o&&(o=Vn(o)),u&&(H=Ke(r,si(u)));++T<F;)for(var Y=0,_t=o[T],xt=u?u(_t):_t;(Y=E(H,xt,Y,g))>-1;)H!==r&&Ml.call(H,Y,1),Ml.call(r,Y,1);return r}function Zp(r,o){for(var u=r?o.length:0,g=u-1;u--;){var E=o[u];if(u==g||E!==T){var T=E;cr(E)?Ml.call(r,E,1):ju(r,E)}}return r}function $u(r,o){return r+El(Pp()*(o-r+1))}function gS(r,o,u,g){for(var E=-1,T=dn(yl((o-r)/(u||1)),0),F=at(T);T--;)F[g?T:++E]=r,r+=u;return F}function Ku(r,o){var u="";if(!r||o<1||o>tt)return u;do o%2&&(u+=r),o=El(o/2),o&&(r+=r);while(o);return u}function ge(r,o){return df(Tm(r,o,qn),r+"")}function _S(r){return Dp(fo(r))}function vS(r,o){var u=fo(r);return Hl(u,gs(o,0,u.length))}function ma(r,o,u,g){if(!Je(r))return r;o=Or(o,r);for(var E=-1,T=o.length,F=T-1,H=r;H!=null&&++E<T;){var Y=Xi(o[E]),_t=u;if(Y==="__proto__"||Y==="constructor"||Y==="prototype")return r;if(E!=F){var xt=H[Y];_t=g?g(xt,Y,H):e,_t===e&&(_t=Je(xt)?xt:cr(o[E+1])?[]:{})}fa(H,Y,_t),H=H[Y]}return r}var jp=Al?function(r,o){return Al.set(r,o),r}:qn,xS=Sl?function(r,o){return Sl(r,"toString",{configurable:!0,enumerable:!1,value:Ef(o),writable:!0})}:qn;function MS(r){return Hl(fo(r))}function xi(r,o,u){var g=-1,E=r.length;o<0&&(o=-o>E?0:E+o),u=u>E?E:u,u<0&&(u+=E),E=o>u?0:u-o>>>0,o>>>=0;for(var T=at(E);++g<E;)T[g]=r[g+o];return T}function SS(r,o){var u;return Nr(r,function(g,E,T){return u=o(g,E,T),!u}),!!u}function Ll(r,o,u){var g=0,E=r==null?g:r.length;if(typeof o=="number"&&o===o&&E<=xe){for(;g<E;){var T=g+E>>>1,F=r[T];F!==null&&!ai(F)&&(u?F<=o:F<o)?g=T+1:E=T}return E}return Zu(r,o,qn,u)}function Zu(r,o,u,g){var E=0,T=r==null?0:r.length;if(T===0)return 0;o=u(o);for(var F=o!==o,H=o===null,Y=ai(o),_t=o===e;E<T;){var xt=El((E+T)/2),bt=u(r[xt]),Ht=bt!==e,Yt=bt===null,ne=bt===bt,de=ai(bt);if(F)var ie=g||ne;else _t?ie=ne&&(g||Ht):H?ie=ne&&Ht&&(g||!Yt):Y?ie=ne&&Ht&&!Yt&&(g||!de):Yt||de?ie=!1:ie=g?bt<=o:bt<o;ie?E=xt+1:T=xt}return Tn(T,Qt)}function Jp(r,o){for(var u=-1,g=r.length,E=0,T=[];++u<g;){var F=r[u],H=o?o(F):F;if(!u||!Pi(H,Y)){var Y=H;T[E++]=F===0?0:F}}return T}function Qp(r){return typeof r=="number"?r:ai(r)?Bt:+r}function oi(r){if(typeof r=="string")return r;if(ue(r))return Ke(r,oi)+"";if(ai(r))return Lp?Lp.call(r):"";var o=r+"";return o=="0"&&1/r==-lt?"-0":o}function Fr(r,o,u){var g=-1,E=ul,T=r.length,F=!0,H=[],Y=H;if(u)F=!1,E=bu;else if(T>=s){var _t=o?null:IS(r);if(_t)return hl(_t);F=!1,E=sa,Y=new ms}else Y=o?[]:H;t:for(;++g<T;){var xt=r[g],bt=o?o(xt):xt;if(xt=u||xt!==0?xt:0,F&&bt===bt){for(var Ht=Y.length;Ht--;)if(Y[Ht]===bt)continue t;o&&Y.push(bt),H.push(xt)}else E(Y,bt,u)||(Y!==H&&Y.push(bt),H.push(xt))}return H}function ju(r,o){return o=Or(o,r),r=wm(r,o),r==null||delete r[Xi(Mi(o))]}function tm(r,o,u,g){return ma(r,o,u(_s(r,o)),g)}function Il(r,o,u,g){for(var E=r.length,T=g?E:-1;(g?T--:++T<E)&&o(r[T],T,r););return u?xi(r,g?0:T,g?T+1:E):xi(r,g?T+1:0,g?E:T)}function em(r,o){var u=r;return u instanceof Se&&(u=u.value()),Tu(o,function(g,E){return E.func.apply(E.thisArg,Ir([g],E.args))},u)}function Ju(r,o,u){var g=r.length;if(g<2)return g?Fr(r[0]):[];for(var E=-1,T=at(g);++E<g;)for(var F=r[E],H=-1;++H<g;)H!=E&&(T[E]=ha(T[E]||F,r[H],o,u));return Fr(An(T,1),o,u)}function nm(r,o,u){for(var g=-1,E=r.length,T=o.length,F={};++g<E;){var H=g<T?o[g]:e;u(F,r[g],H)}return F}function Qu(r){return rn(r)?r:[]}function tf(r){return typeof r=="function"?r:qn}function Or(r,o){return ue(r)?r:uf(r,o)?[r]:Lm(De(r))}var yS=ge;function Br(r,o,u){var g=r.length;return u=u===e?g:u,!o&&u>=g?r:xi(r,o,u)}var im=cM||function(r){return En.clearTimeout(r)};function rm(r,o){if(o)return r.slice();var u=r.length,g=bp?bp(u):new r.constructor(u);return r.copy(g),g}function ef(r){var o=new r.constructor(r.byteLength);return new vl(o).set(new vl(r)),o}function ES(r,o){var u=o?ef(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.byteLength)}function AS(r){var o=new r.constructor(r.source,ll.exec(r));return o.lastIndex=r.lastIndex,o}function bS(r){return ua?Ge(ua.call(r)):{}}function sm(r,o){var u=o?ef(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.length)}function om(r,o){if(r!==o){var u=r!==e,g=r===null,E=r===r,T=ai(r),F=o!==e,H=o===null,Y=o===o,_t=ai(o);if(!H&&!_t&&!T&&r>o||T&&F&&Y&&!H&&!_t||g&&F&&Y||!u&&Y||!E)return 1;if(!g&&!T&&!_t&&r<o||_t&&u&&E&&!g&&!T||H&&u&&E||!F&&E||!Y)return-1}return 0}function TS(r,o,u){for(var g=-1,E=r.criteria,T=o.criteria,F=E.length,H=u.length;++g<F;){var Y=om(E[g],T[g]);if(Y){if(g>=H)return Y;var _t=u[g];return Y*(_t=="desc"?-1:1)}}return r.index-o.index}function am(r,o,u,g){for(var E=-1,T=r.length,F=u.length,H=-1,Y=o.length,_t=dn(T-F,0),xt=at(Y+_t),bt=!g;++H<Y;)xt[H]=o[H];for(;++E<F;)(bt||E<T)&&(xt[u[E]]=r[E]);for(;_t--;)xt[H++]=r[E++];return xt}function lm(r,o,u,g){for(var E=-1,T=r.length,F=-1,H=u.length,Y=-1,_t=o.length,xt=dn(T-H,0),bt=at(xt+_t),Ht=!g;++E<xt;)bt[E]=r[E];for(var Yt=E;++Y<_t;)bt[Yt+Y]=o[Y];for(;++F<H;)(Ht||E<T)&&(bt[Yt+u[F]]=r[E++]);return bt}function Vn(r,o){var u=-1,g=r.length;for(o||(o=at(g));++u<g;)o[u]=r[u];return o}function Wi(r,o,u,g){var E=!u;u||(u={});for(var T=-1,F=o.length;++T<F;){var H=o[T],Y=g?g(u[H],r[H],H,u,r):e;Y===e&&(Y=r[H]),E?or(u,H,Y):fa(u,H,Y)}return u}function wS(r,o){return Wi(r,cf(r),o)}function RS(r,o){return Wi(r,Sm(r),o)}function Dl(r,o){return function(u,g){var E=ue(u)?Dx:ZM,T=o?o():{};return E(u,r,te(g,2),T)}}function ao(r){return ge(function(o,u){var g=-1,E=u.length,T=E>1?u[E-1]:e,F=E>2?u[2]:e;for(T=r.length>3&&typeof T=="function"?(E--,T):e,F&&Nn(u[0],u[1],F)&&(T=E<3?e:T,E=1),o=Ge(o);++g<E;){var H=u[g];H&&r(o,H,g,T)}return o})}function cm(r,o){return function(u,g){if(u==null)return u;if(!Wn(u))return r(u,g);for(var E=u.length,T=o?E:-1,F=Ge(u);(o?T--:++T<E)&&g(F[T],T,F)!==!1;);return u}}function um(r){return function(o,u,g){for(var E=-1,T=Ge(o),F=g(o),H=F.length;H--;){var Y=F[r?H:++E];if(u(T[Y],Y,T)===!1)break}return o}}function CS(r,o,u){var g=o&x,E=ga(r);function T(){var F=this&&this!==En&&this instanceof T?E:r;return F.apply(g?u:this,arguments)}return T}function fm(r){return function(o){o=De(o);var u=to(o)?Ri(o):e,g=u?u[0]:o.charAt(0),E=u?Br(u,1).join(""):o.slice(1);return g[r]()+E}}function lo(r){return function(o){return Tu(cg(lg(o).replace(xx,"")),r,"")}}function ga(r){return function(){var o=arguments;switch(o.length){case 0:return new r;case 1:return new r(o[0]);case 2:return new r(o[0],o[1]);case 3:return new r(o[0],o[1],o[2]);case 4:return new r(o[0],o[1],o[2],o[3]);case 5:return new r(o[0],o[1],o[2],o[3],o[4]);case 6:return new r(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new r(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var u=oo(r.prototype),g=r.apply(u,o);return Je(g)?g:u}}function PS(r,o,u){var g=ga(r);function E(){for(var T=arguments.length,F=at(T),H=T,Y=co(E);H--;)F[H]=arguments[H];var _t=T<3&&F[0]!==Y&&F[T-1]!==Y?[]:Dr(F,Y);if(T-=_t.length,T<u)return gm(r,o,Ul,E.placeholder,e,F,_t,e,e,u-T);var xt=this&&this!==En&&this instanceof E?g:r;return ri(xt,this,F)}return E}function hm(r){return function(o,u,g){var E=Ge(o);if(!Wn(o)){var T=te(u,3);o=xn(o),u=function(H){return T(E[H],H,E)}}var F=r(o,u,g);return F>-1?E[T?o[F]:F]:e}}function dm(r){return lr(function(o){var u=o.length,g=u,E=_i.prototype.thru;for(r&&o.reverse();g--;){var T=o[g];if(typeof T!="function")throw new gi(l);if(E&&!F&&Bl(T)=="wrapper")var F=new _i([],!0)}for(g=F?g:u;++g<u;){T=o[g];var H=Bl(T),Y=H=="wrapper"?af(T):e;Y&&ff(Y[0])&&Y[1]==(z|A|$|Q)&&!Y[4].length&&Y[9]==1?F=F[Bl(Y[0])].apply(F,Y[3]):F=T.length==1&&ff(T)?F[H]():F.thru(T)}return function(){var _t=arguments,xt=_t[0];if(F&&_t.length==1&&ue(xt))return F.plant(xt).value();for(var bt=0,Ht=u?o[bt].apply(this,_t):xt;++bt<u;)Ht=o[bt].call(this,Ht);return Ht}})}function Ul(r,o,u,g,E,T,F,H,Y,_t){var xt=o&z,bt=o&x,Ht=o&v,Yt=o&(A|L),ne=o&D,de=Ht?e:ga(r);function ie(){for(var Me=arguments.length,Ee=at(Me),li=Me;li--;)Ee[li]=arguments[li];if(Yt)var Fn=co(ie),ci=Gx(Ee,Fn);if(g&&(Ee=am(Ee,g,E,Yt)),T&&(Ee=lm(Ee,T,F,Yt)),Me-=ci,Yt&&Me<_t){var sn=Dr(Ee,Fn);return gm(r,o,Ul,ie.placeholder,u,Ee,sn,H,Y,_t-Me)}var Li=bt?u:this,hr=Ht?Li[r]:r;return Me=Ee.length,H?Ee=ZS(Ee,H):ne&&Me>1&&Ee.reverse(),xt&&Y<Me&&(Ee.length=Y),this&&this!==En&&this instanceof ie&&(hr=de||ga(hr)),hr.apply(Li,Ee)}return ie}function pm(r,o){return function(u,g){return rS(u,r,o(g),{})}}function Nl(r,o){return function(u,g){var E;if(u===e&&g===e)return o;if(u!==e&&(E=u),g!==e){if(E===e)return g;typeof u=="string"||typeof g=="string"?(u=oi(u),g=oi(g)):(u=Qp(u),g=Qp(g)),E=r(u,g)}return E}}function nf(r){return lr(function(o){return o=Ke(o,si(te())),ge(function(u){var g=this;return r(o,function(E){return ri(E,g,u)})})})}function Fl(r,o){o=o===e?" ":oi(o);var u=o.length;if(u<2)return u?Ku(o,r):o;var g=Ku(o,yl(r/eo(o)));return to(o)?Br(Ri(g),0,r).join(""):g.slice(0,r)}function LS(r,o,u,g){var E=o&x,T=ga(r);function F(){for(var H=-1,Y=arguments.length,_t=-1,xt=g.length,bt=at(xt+Y),Ht=this&&this!==En&&this instanceof F?T:r;++_t<xt;)bt[_t]=g[_t];for(;Y--;)bt[_t++]=arguments[++H];return ri(Ht,E?u:this,bt)}return F}function mm(r){return function(o,u,g){return g&&typeof g!="number"&&Nn(o,u,g)&&(u=g=e),o=fr(o),u===e?(u=o,o=0):u=fr(u),g=g===e?o<u?1:-1:fr(g),gS(o,u,g,r)}}function Ol(r){return function(o,u){return typeof o=="string"&&typeof u=="string"||(o=Si(o),u=Si(u)),r(o,u)}}function gm(r,o,u,g,E,T,F,H,Y,_t){var xt=o&A,bt=xt?F:e,Ht=xt?e:F,Yt=xt?T:e,ne=xt?e:T;o|=xt?$:N,o&=~(xt?N:$),o&w||(o&=~(x|v));var de=[r,o,E,Yt,bt,ne,Ht,H,Y,_t],ie=u.apply(e,de);return ff(r)&&Rm(ie,de),ie.placeholder=g,Cm(ie,r,o)}function rf(r){var o=hn[r];return function(u,g){if(u=Si(u),g=g==null?0:Tn(he(g),292),g&&Cp(u)){var E=(De(u)+"e").split("e"),T=o(E[0]+"e"+(+E[1]+g));return E=(De(T)+"e").split("e"),+(E[0]+"e"+(+E[1]-g))}return o(u)}}var IS=ro&&1/hl(new ro([,-0]))[1]==lt?function(r){return new ro(r)}:Tf;function _m(r){return function(o){var u=wn(o);return u==U?Du(o):u==y?Kx(o):kx(o,r(o))}}function ar(r,o,u,g,E,T,F,H){var Y=o&v;if(!Y&&typeof r!="function")throw new gi(l);var _t=g?g.length:0;if(_t||(o&=~($|N),g=E=e),F=F===e?F:dn(he(F),0),H=H===e?H:he(H),_t-=E?E.length:0,o&N){var xt=g,bt=E;g=E=e}var Ht=Y?e:af(r),Yt=[r,o,u,g,E,xt,bt,T,F,H];if(Ht&&YS(Yt,Ht),r=Yt[0],o=Yt[1],u=Yt[2],g=Yt[3],E=Yt[4],H=Yt[9]=Yt[9]===e?Y?0:r.length:dn(Yt[9]-_t,0),!H&&o&(A|L)&&(o&=~(A|L)),!o||o==x)var ne=CS(r,o,u);else o==A||o==L?ne=PS(r,o,H):(o==$||o==(x|$))&&!E.length?ne=LS(r,o,u,g):ne=Ul.apply(e,Yt);var de=Ht?jp:Rm;return Cm(de(ne,Yt),r,o)}function vm(r,o,u,g){return r===e||Pi(r,io[u])&&!Be.call(g,u)?o:r}function xm(r,o,u,g,E,T){return Je(r)&&Je(o)&&(T.set(o,r),Pl(r,o,e,xm,T),T.delete(o)),r}function DS(r){return xa(r)?e:r}function Mm(r,o,u,g,E,T){var F=u&M,H=r.length,Y=o.length;if(H!=Y&&!(F&&Y>H))return!1;var _t=T.get(r),xt=T.get(o);if(_t&&xt)return _t==o&&xt==r;var bt=-1,Ht=!0,Yt=u&S?new ms:e;for(T.set(r,o),T.set(o,r);++bt<H;){var ne=r[bt],de=o[bt];if(g)var ie=F?g(de,ne,bt,o,r,T):g(ne,de,bt,r,o,T);if(ie!==e){if(ie)continue;Ht=!1;break}if(Yt){if(!wu(o,function(Me,Ee){if(!sa(Yt,Ee)&&(ne===Me||E(ne,Me,u,g,T)))return Yt.push(Ee)})){Ht=!1;break}}else if(!(ne===de||E(ne,de,u,g,T))){Ht=!1;break}}return T.delete(r),T.delete(o),Ht}function US(r,o,u,g,E,T,F){switch(u){case wt:if(r.byteLength!=o.byteLength||r.byteOffset!=o.byteOffset)return!1;r=r.buffer,o=o.buffer;case gt:return!(r.byteLength!=o.byteLength||!T(new vl(r),new vl(o)));case vt:case pt:case W:return Pi(+r,+o);case $t:return r.name==o.name&&r.message==o.message;case R:case O:return r==o+"";case U:var H=Du;case y:var Y=g&M;if(H||(H=hl),r.size!=o.size&&!Y)return!1;var _t=F.get(r);if(_t)return _t==o;g|=S,F.set(r,o);var xt=Mm(H(r),H(o),g,E,T,F);return F.delete(r),xt;case j:if(ua)return ua.call(r)==ua.call(o)}return!1}function NS(r,o,u,g,E,T){var F=u&M,H=sf(r),Y=H.length,_t=sf(o),xt=_t.length;if(Y!=xt&&!F)return!1;for(var bt=Y;bt--;){var Ht=H[bt];if(!(F?Ht in o:Be.call(o,Ht)))return!1}var Yt=T.get(r),ne=T.get(o);if(Yt&&ne)return Yt==o&&ne==r;var de=!0;T.set(r,o),T.set(o,r);for(var ie=F;++bt<Y;){Ht=H[bt];var Me=r[Ht],Ee=o[Ht];if(g)var li=F?g(Ee,Me,Ht,o,r,T):g(Me,Ee,Ht,r,o,T);if(!(li===e?Me===Ee||E(Me,Ee,u,g,T):li)){de=!1;break}ie||(ie=Ht=="constructor")}if(de&&!ie){var Fn=r.constructor,ci=o.constructor;Fn!=ci&&"constructor"in r&&"constructor"in o&&!(typeof Fn=="function"&&Fn instanceof Fn&&typeof ci=="function"&&ci instanceof ci)&&(de=!1)}return T.delete(r),T.delete(o),de}function lr(r){return df(Tm(r,e,Nm),r+"")}function sf(r){return Hp(r,xn,cf)}function of(r){return Hp(r,Xn,Sm)}var af=Al?function(r){return Al.get(r)}:Tf;function Bl(r){for(var o=r.name+"",u=so[o],g=Be.call(so,o)?u.length:0;g--;){var E=u[g],T=E.func;if(T==null||T==r)return E.name}return o}function co(r){var o=Be.call(b,"placeholder")?b:r;return o.placeholder}function te(){var r=b.iteratee||Af;return r=r===Af?Vp:r,arguments.length?r(arguments[0],arguments[1]):r}function zl(r,o){var u=r.__data__;return VS(o)?u[typeof o=="string"?"string":"hash"]:u.map}function lf(r){for(var o=xn(r),u=o.length;u--;){var g=o[u],E=r[g];o[u]=[g,E,Am(E)]}return o}function vs(r,o){var u=qx(r,o);return Gp(u)?u:e}function FS(r){var o=Be.call(r,ds),u=r[ds];try{r[ds]=e;var g=!0}catch{}var E=gl.call(r);return g&&(o?r[ds]=u:delete r[ds]),E}var cf=Nu?function(r){return r==null?[]:(r=Ge(r),Lr(Nu(r),function(o){return wp.call(r,o)}))}:wf,Sm=Nu?function(r){for(var o=[];r;)Ir(o,cf(r)),r=xl(r);return o}:wf,wn=Un;(Fu&&wn(new Fu(new ArrayBuffer(1)))!=wt||aa&&wn(new aa)!=U||Ou&&wn(Ou.resolve())!=ct||ro&&wn(new ro)!=y||la&&wn(new la)!=J)&&(wn=function(r){var o=Un(r),u=o==rt?r.constructor:e,g=u?xs(u):"";if(g)switch(g){case vM:return wt;case xM:return U;case MM:return ct;case SM:return y;case yM:return J}return o});function OS(r,o,u){for(var g=-1,E=u.length;++g<E;){var T=u[g],F=T.size;switch(T.type){case"drop":r+=F;break;case"dropRight":o-=F;break;case"take":o=Tn(o,r+F);break;case"takeRight":r=dn(r,o-F);break}}return{start:r,end:o}}function BS(r){var o=r.match(sl);return o?o[1].split($s):[]}function ym(r,o,u){o=Or(o,r);for(var g=-1,E=o.length,T=!1;++g<E;){var F=Xi(o[g]);if(!(T=r!=null&&u(r,F)))break;r=r[F]}return T||++g!=E?T:(E=r==null?0:r.length,!!E&&ql(E)&&cr(F,E)&&(ue(r)||Ms(r)))}function zS(r){var o=r.length,u=new r.constructor(o);return o&&typeof r[0]=="string"&&Be.call(r,"index")&&(u.index=r.index,u.input=r.input),u}function Em(r){return typeof r.constructor=="function"&&!_a(r)?oo(xl(r)):{}}function HS(r,o,u){var g=r.constructor;switch(o){case gt:return ef(r);case vt:case pt:return new g(+r);case wt:return ES(r,u);case zt:case At:case Ut:case ae:case jt:case Vt:case ee:case Zt:case ve:return sm(r,u);case U:return new g;case W:case O:return new g(r);case R:return AS(r);case y:return new g;case j:return bS(r)}}function kS(r,o){var u=o.length;if(!u)return r;var g=u-1;return o[g]=(u>1?"& ":"")+o[g],o=o.join(u>2?", ":" "),r.replace(Ys,`{
/* [wrapped with `+o+`] */
`)}function GS(r){return ue(r)||Ms(r)||!!(Rp&&r&&r[Rp])}function cr(r,o){var u=typeof r;return o=o??tt,!!o&&(u=="number"||u!="symbol"&&Z.test(r))&&r>-1&&r%1==0&&r<o}function Nn(r,o,u){if(!Je(u))return!1;var g=typeof o;return(g=="number"?Wn(u)&&cr(o,u.length):g=="string"&&o in u)?Pi(u[o],r):!1}function uf(r,o){if(ue(r))return!1;var u=typeof r;return u=="number"||u=="symbol"||u=="boolean"||r==null||ai(r)?!0:di.test(r)||!Ti.test(r)||o!=null&&r in Ge(o)}function VS(r){var o=typeof r;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?r!=="__proto__":r===null}function ff(r){var o=Bl(r),u=b[o];if(typeof u!="function"||!(o in Se.prototype))return!1;if(r===u)return!0;var g=af(u);return!!g&&r===g[0]}function WS(r){return!!Ap&&Ap in r}var XS=pl?ur:Rf;function _a(r){var o=r&&r.constructor,u=typeof o=="function"&&o.prototype||io;return r===u}function Am(r){return r===r&&!Je(r)}function bm(r,o){return function(u){return u==null?!1:u[r]===o&&(o!==e||r in Ge(u))}}function qS(r){var o=Wl(r,function(g){return u.size===h&&u.clear(),g}),u=o.cache;return o}function YS(r,o){var u=r[1],g=o[1],E=u|g,T=E<(x|v|z),F=g==z&&u==A||g==z&&u==Q&&r[7].length<=o[8]||g==(z|Q)&&o[7].length<=o[8]&&u==A;if(!(T||F))return r;g&x&&(r[2]=o[2],E|=u&x?0:w);var H=o[3];if(H){var Y=r[3];r[3]=Y?am(Y,H,o[4]):H,r[4]=Y?Dr(r[3],d):o[4]}return H=o[5],H&&(Y=r[5],r[5]=Y?lm(Y,H,o[6]):H,r[6]=Y?Dr(r[5],d):o[6]),H=o[7],H&&(r[7]=H),g&z&&(r[8]=r[8]==null?o[8]:Tn(r[8],o[8])),r[9]==null&&(r[9]=o[9]),r[0]=o[0],r[1]=E,r}function $S(r){var o=[];if(r!=null)for(var u in Ge(r))o.push(u);return o}function KS(r){return gl.call(r)}function Tm(r,o,u){return o=dn(o===e?r.length-1:o,0),function(){for(var g=arguments,E=-1,T=dn(g.length-o,0),F=at(T);++E<T;)F[E]=g[o+E];E=-1;for(var H=at(o+1);++E<o;)H[E]=g[E];return H[o]=u(F),ri(r,this,H)}}function wm(r,o){return o.length<2?r:_s(r,xi(o,0,-1))}function ZS(r,o){for(var u=r.length,g=Tn(o.length,u),E=Vn(r);g--;){var T=o[g];r[g]=cr(T,u)?E[T]:e}return r}function hf(r,o){if(!(o==="constructor"&&typeof r[o]=="function")&&o!="__proto__")return r[o]}var Rm=Pm(jp),va=fM||function(r,o){return En.setTimeout(r,o)},df=Pm(xS);function Cm(r,o,u){var g=o+"";return df(r,kS(g,jS(BS(g),u)))}function Pm(r){var o=0,u=0;return function(){var g=mM(),E=ot-(g-u);if(u=g,E>0){if(++o>=ht)return arguments[0]}else o=0;return r.apply(e,arguments)}}function Hl(r,o){var u=-1,g=r.length,E=g-1;for(o=o===e?g:o;++u<o;){var T=$u(u,E),F=r[T];r[T]=r[u],r[u]=F}return r.length=o,r}var Lm=qS(function(r){var o=[];return r.charCodeAt(0)===46&&o.push(""),r.replace(il,function(u,g,E,T){o.push(E?T.replace(vu,"$1"):g||u)}),o});function Xi(r){if(typeof r=="string"||ai(r))return r;var o=r+"";return o=="0"&&1/r==-lt?"-0":o}function xs(r){if(r!=null){try{return ml.call(r)}catch{}try{return r+""}catch{}}return""}function jS(r,o){return mi(dt,function(u){var g="_."+u[0];o&u[1]&&!ul(r,g)&&r.push(g)}),r.sort()}function Im(r){if(r instanceof Se)return r.clone();var o=new _i(r.__wrapped__,r.__chain__);return o.__actions__=Vn(r.__actions__),o.__index__=r.__index__,o.__values__=r.__values__,o}function JS(r,o,u){(u?Nn(r,o,u):o===e)?o=1:o=dn(he(o),0);var g=r==null?0:r.length;if(!g||o<1)return[];for(var E=0,T=0,F=at(yl(g/o));E<g;)F[T++]=xi(r,E,E+=o);return F}function QS(r){for(var o=-1,u=r==null?0:r.length,g=0,E=[];++o<u;){var T=r[o];T&&(E[g++]=T)}return E}function ty(){var r=arguments.length;if(!r)return[];for(var o=at(r-1),u=arguments[0],g=r;g--;)o[g-1]=arguments[g];return Ir(ue(u)?Vn(u):[u],An(o,1))}var ey=ge(function(r,o){return rn(r)?ha(r,An(o,1,rn,!0)):[]}),ny=ge(function(r,o){var u=Mi(o);return rn(u)&&(u=e),rn(r)?ha(r,An(o,1,rn,!0),te(u,2)):[]}),iy=ge(function(r,o){var u=Mi(o);return rn(u)&&(u=e),rn(r)?ha(r,An(o,1,rn,!0),e,u):[]});function ry(r,o,u){var g=r==null?0:r.length;return g?(o=u||o===e?1:he(o),xi(r,o<0?0:o,g)):[]}function sy(r,o,u){var g=r==null?0:r.length;return g?(o=u||o===e?1:he(o),o=g-o,xi(r,0,o<0?0:o)):[]}function oy(r,o){return r&&r.length?Il(r,te(o,3),!0,!0):[]}function ay(r,o){return r&&r.length?Il(r,te(o,3),!0):[]}function ly(r,o,u,g){var E=r==null?0:r.length;return E?(u&&typeof u!="number"&&Nn(r,o,u)&&(u=0,g=E),tS(r,o,u,g)):[]}function Dm(r,o,u){var g=r==null?0:r.length;if(!g)return-1;var E=u==null?0:he(u);return E<0&&(E=dn(g+E,0)),fl(r,te(o,3),E)}function Um(r,o,u){var g=r==null?0:r.length;if(!g)return-1;var E=g-1;return u!==e&&(E=he(u),E=u<0?dn(g+E,0):Tn(E,g-1)),fl(r,te(o,3),E,!0)}function Nm(r){var o=r==null?0:r.length;return o?An(r,1):[]}function cy(r){var o=r==null?0:r.length;return o?An(r,lt):[]}function uy(r,o){var u=r==null?0:r.length;return u?(o=o===e?1:he(o),An(r,o)):[]}function fy(r){for(var o=-1,u=r==null?0:r.length,g={};++o<u;){var E=r[o];g[E[0]]=E[1]}return g}function Fm(r){return r&&r.length?r[0]:e}function hy(r,o,u){var g=r==null?0:r.length;if(!g)return-1;var E=u==null?0:he(u);return E<0&&(E=dn(g+E,0)),Qs(r,o,E)}function dy(r){var o=r==null?0:r.length;return o?xi(r,0,-1):[]}var py=ge(function(r){var o=Ke(r,Qu);return o.length&&o[0]===r[0]?Vu(o):[]}),my=ge(function(r){var o=Mi(r),u=Ke(r,Qu);return o===Mi(u)?o=e:u.pop(),u.length&&u[0]===r[0]?Vu(u,te(o,2)):[]}),gy=ge(function(r){var o=Mi(r),u=Ke(r,Qu);return o=typeof o=="function"?o:e,o&&u.pop(),u.length&&u[0]===r[0]?Vu(u,e,o):[]});function _y(r,o){return r==null?"":dM.call(r,o)}function Mi(r){var o=r==null?0:r.length;return o?r[o-1]:e}function vy(r,o,u){var g=r==null?0:r.length;if(!g)return-1;var E=g;return u!==e&&(E=he(u),E=E<0?dn(g+E,0):Tn(E,g-1)),o===o?jx(r,o,E):fl(r,gp,E,!0)}function xy(r,o){return r&&r.length?Yp(r,he(o)):e}var My=ge(Om);function Om(r,o){return r&&r.length&&o&&o.length?Yu(r,o):r}function Sy(r,o,u){return r&&r.length&&o&&o.length?Yu(r,o,te(u,2)):r}function yy(r,o,u){return r&&r.length&&o&&o.length?Yu(r,o,e,u):r}var Ey=lr(function(r,o){var u=r==null?0:r.length,g=zu(r,o);return Zp(r,Ke(o,function(E){return cr(E,u)?+E:E}).sort(om)),g});function Ay(r,o){var u=[];if(!(r&&r.length))return u;var g=-1,E=[],T=r.length;for(o=te(o,3);++g<T;){var F=r[g];o(F,g,r)&&(u.push(F),E.push(g))}return Zp(r,E),u}function pf(r){return r==null?r:_M.call(r)}function by(r,o,u){var g=r==null?0:r.length;return g?(u&&typeof u!="number"&&Nn(r,o,u)?(o=0,u=g):(o=o==null?0:he(o),u=u===e?g:he(u)),xi(r,o,u)):[]}function Ty(r,o){return Ll(r,o)}function wy(r,o,u){return Zu(r,o,te(u,2))}function Ry(r,o){var u=r==null?0:r.length;if(u){var g=Ll(r,o);if(g<u&&Pi(r[g],o))return g}return-1}function Cy(r,o){return Ll(r,o,!0)}function Py(r,o,u){return Zu(r,o,te(u,2),!0)}function Ly(r,o){var u=r==null?0:r.length;if(u){var g=Ll(r,o,!0)-1;if(Pi(r[g],o))return g}return-1}function Iy(r){return r&&r.length?Jp(r):[]}function Dy(r,o){return r&&r.length?Jp(r,te(o,2)):[]}function Uy(r){var o=r==null?0:r.length;return o?xi(r,1,o):[]}function Ny(r,o,u){return r&&r.length?(o=u||o===e?1:he(o),xi(r,0,o<0?0:o)):[]}function Fy(r,o,u){var g=r==null?0:r.length;return g?(o=u||o===e?1:he(o),o=g-o,xi(r,o<0?0:o,g)):[]}function Oy(r,o){return r&&r.length?Il(r,te(o,3),!1,!0):[]}function By(r,o){return r&&r.length?Il(r,te(o,3)):[]}var zy=ge(function(r){return Fr(An(r,1,rn,!0))}),Hy=ge(function(r){var o=Mi(r);return rn(o)&&(o=e),Fr(An(r,1,rn,!0),te(o,2))}),ky=ge(function(r){var o=Mi(r);return o=typeof o=="function"?o:e,Fr(An(r,1,rn,!0),e,o)});function Gy(r){return r&&r.length?Fr(r):[]}function Vy(r,o){return r&&r.length?Fr(r,te(o,2)):[]}function Wy(r,o){return o=typeof o=="function"?o:e,r&&r.length?Fr(r,e,o):[]}function mf(r){if(!(r&&r.length))return[];var o=0;return r=Lr(r,function(u){if(rn(u))return o=dn(u.length,o),!0}),Lu(o,function(u){return Ke(r,Ru(u))})}function Bm(r,o){if(!(r&&r.length))return[];var u=mf(r);return o==null?u:Ke(u,function(g){return ri(o,e,g)})}var Xy=ge(function(r,o){return rn(r)?ha(r,o):[]}),qy=ge(function(r){return Ju(Lr(r,rn))}),Yy=ge(function(r){var o=Mi(r);return rn(o)&&(o=e),Ju(Lr(r,rn),te(o,2))}),$y=ge(function(r){var o=Mi(r);return o=typeof o=="function"?o:e,Ju(Lr(r,rn),e,o)}),Ky=ge(mf);function Zy(r,o){return nm(r||[],o||[],fa)}function jy(r,o){return nm(r||[],o||[],ma)}var Jy=ge(function(r){var o=r.length,u=o>1?r[o-1]:e;return u=typeof u=="function"?(r.pop(),u):e,Bm(r,u)});function zm(r){var o=b(r);return o.__chain__=!0,o}function Qy(r,o){return o(r),r}function kl(r,o){return o(r)}var tE=lr(function(r){var o=r.length,u=o?r[0]:0,g=this.__wrapped__,E=function(T){return zu(T,r)};return o>1||this.__actions__.length||!(g instanceof Se)||!cr(u)?this.thru(E):(g=g.slice(u,+u+(o?1:0)),g.__actions__.push({func:kl,args:[E],thisArg:e}),new _i(g,this.__chain__).thru(function(T){return o&&!T.length&&T.push(e),T}))});function eE(){return zm(this)}function nE(){return new _i(this.value(),this.__chain__)}function iE(){this.__values__===e&&(this.__values__=Qm(this.value()));var r=this.__index__>=this.__values__.length,o=r?e:this.__values__[this.__index__++];return{done:r,value:o}}function rE(){return this}function sE(r){for(var o,u=this;u instanceof Tl;){var g=Im(u);g.__index__=0,g.__values__=e,o?E.__wrapped__=g:o=g;var E=g;u=u.__wrapped__}return E.__wrapped__=r,o}function oE(){var r=this.__wrapped__;if(r instanceof Se){var o=r;return this.__actions__.length&&(o=new Se(this)),o=o.reverse(),o.__actions__.push({func:kl,args:[pf],thisArg:e}),new _i(o,this.__chain__)}return this.thru(pf)}function aE(){return em(this.__wrapped__,this.__actions__)}var lE=Dl(function(r,o,u){Be.call(r,u)?++r[u]:or(r,u,1)});function cE(r,o,u){var g=ue(r)?pp:QM;return u&&Nn(r,o,u)&&(o=e),g(r,te(o,3))}function uE(r,o){var u=ue(r)?Lr:Bp;return u(r,te(o,3))}var fE=hm(Dm),hE=hm(Um);function dE(r,o){return An(Gl(r,o),1)}function pE(r,o){return An(Gl(r,o),lt)}function mE(r,o,u){return u=u===e?1:he(u),An(Gl(r,o),u)}function Hm(r,o){var u=ue(r)?mi:Nr;return u(r,te(o,3))}function km(r,o){var u=ue(r)?Ux:Op;return u(r,te(o,3))}var gE=Dl(function(r,o,u){Be.call(r,u)?r[u].push(o):or(r,u,[o])});function _E(r,o,u,g){r=Wn(r)?r:fo(r),u=u&&!g?he(u):0;var E=r.length;return u<0&&(u=dn(E+u,0)),Yl(r)?u<=E&&r.indexOf(o,u)>-1:!!E&&Qs(r,o,u)>-1}var vE=ge(function(r,o,u){var g=-1,E=typeof o=="function",T=Wn(r)?at(r.length):[];return Nr(r,function(F){T[++g]=E?ri(o,F,u):da(F,o,u)}),T}),xE=Dl(function(r,o,u){or(r,u,o)});function Gl(r,o){var u=ue(r)?Ke:Wp;return u(r,te(o,3))}function ME(r,o,u,g){return r==null?[]:(ue(o)||(o=o==null?[]:[o]),u=g?e:u,ue(u)||(u=u==null?[]:[u]),$p(r,o,u))}var SE=Dl(function(r,o,u){r[u?0:1].push(o)},function(){return[[],[]]});function yE(r,o,u){var g=ue(r)?Tu:vp,E=arguments.length<3;return g(r,te(o,4),u,E,Nr)}function EE(r,o,u){var g=ue(r)?Nx:vp,E=arguments.length<3;return g(r,te(o,4),u,E,Op)}function AE(r,o){var u=ue(r)?Lr:Bp;return u(r,Xl(te(o,3)))}function bE(r){var o=ue(r)?Dp:_S;return o(r)}function TE(r,o,u){(u?Nn(r,o,u):o===e)?o=1:o=he(o);var g=ue(r)?$M:vS;return g(r,o)}function wE(r){var o=ue(r)?KM:MS;return o(r)}function RE(r){if(r==null)return 0;if(Wn(r))return Yl(r)?eo(r):r.length;var o=wn(r);return o==U||o==y?r.size:Xu(r).length}function CE(r,o,u){var g=ue(r)?wu:SS;return u&&Nn(r,o,u)&&(o=e),g(r,te(o,3))}var PE=ge(function(r,o){if(r==null)return[];var u=o.length;return u>1&&Nn(r,o[0],o[1])?o=[]:u>2&&Nn(o[0],o[1],o[2])&&(o=[o[0]]),$p(r,An(o,1),[])}),Vl=uM||function(){return En.Date.now()};function LE(r,o){if(typeof o!="function")throw new gi(l);return r=he(r),function(){if(--r<1)return o.apply(this,arguments)}}function Gm(r,o,u){return o=u?e:o,o=r&&o==null?r.length:o,ar(r,z,e,e,e,e,o)}function Vm(r,o){var u;if(typeof o!="function")throw new gi(l);return r=he(r),function(){return--r>0&&(u=o.apply(this,arguments)),r<=1&&(o=e),u}}var gf=ge(function(r,o,u){var g=x;if(u.length){var E=Dr(u,co(gf));g|=$}return ar(r,g,o,u,E)}),Wm=ge(function(r,o,u){var g=x|v;if(u.length){var E=Dr(u,co(Wm));g|=$}return ar(o,g,r,u,E)});function Xm(r,o,u){o=u?e:o;var g=ar(r,A,e,e,e,e,e,o);return g.placeholder=Xm.placeholder,g}function qm(r,o,u){o=u?e:o;var g=ar(r,L,e,e,e,e,e,o);return g.placeholder=qm.placeholder,g}function Ym(r,o,u){var g,E,T,F,H,Y,_t=0,xt=!1,bt=!1,Ht=!0;if(typeof r!="function")throw new gi(l);o=Si(o)||0,Je(u)&&(xt=!!u.leading,bt="maxWait"in u,T=bt?dn(Si(u.maxWait)||0,o):T,Ht="trailing"in u?!!u.trailing:Ht);function Yt(sn){var Li=g,hr=E;return g=E=e,_t=sn,F=r.apply(hr,Li),F}function ne(sn){return _t=sn,H=va(Me,o),xt?Yt(sn):F}function de(sn){var Li=sn-Y,hr=sn-_t,hg=o-Li;return bt?Tn(hg,T-hr):hg}function ie(sn){var Li=sn-Y,hr=sn-_t;return Y===e||Li>=o||Li<0||bt&&hr>=T}function Me(){var sn=Vl();if(ie(sn))return Ee(sn);H=va(Me,de(sn))}function Ee(sn){return H=e,Ht&&g?Yt(sn):(g=E=e,F)}function li(){H!==e&&im(H),_t=0,g=Y=E=H=e}function Fn(){return H===e?F:Ee(Vl())}function ci(){var sn=Vl(),Li=ie(sn);if(g=arguments,E=this,Y=sn,Li){if(H===e)return ne(Y);if(bt)return im(H),H=va(Me,o),Yt(Y)}return H===e&&(H=va(Me,o)),F}return ci.cancel=li,ci.flush=Fn,ci}var IE=ge(function(r,o){return Fp(r,1,o)}),DE=ge(function(r,o,u){return Fp(r,Si(o)||0,u)});function UE(r){return ar(r,D)}function Wl(r,o){if(typeof r!="function"||o!=null&&typeof o!="function")throw new gi(l);var u=function(){var g=arguments,E=o?o.apply(this,g):g[0],T=u.cache;if(T.has(E))return T.get(E);var F=r.apply(this,g);return u.cache=T.set(E,F)||T,F};return u.cache=new(Wl.Cache||sr),u}Wl.Cache=sr;function Xl(r){if(typeof r!="function")throw new gi(l);return function(){var o=arguments;switch(o.length){case 0:return!r.call(this);case 1:return!r.call(this,o[0]);case 2:return!r.call(this,o[0],o[1]);case 3:return!r.call(this,o[0],o[1],o[2])}return!r.apply(this,o)}}function NE(r){return Vm(2,r)}var FE=yS(function(r,o){o=o.length==1&&ue(o[0])?Ke(o[0],si(te())):Ke(An(o,1),si(te()));var u=o.length;return ge(function(g){for(var E=-1,T=Tn(g.length,u);++E<T;)g[E]=o[E].call(this,g[E]);return ri(r,this,g)})}),_f=ge(function(r,o){var u=Dr(o,co(_f));return ar(r,$,e,o,u)}),$m=ge(function(r,o){var u=Dr(o,co($m));return ar(r,N,e,o,u)}),OE=lr(function(r,o){return ar(r,Q,e,e,e,o)});function BE(r,o){if(typeof r!="function")throw new gi(l);return o=o===e?o:he(o),ge(r,o)}function zE(r,o){if(typeof r!="function")throw new gi(l);return o=o==null?0:dn(he(o),0),ge(function(u){var g=u[o],E=Br(u,0,o);return g&&Ir(E,g),ri(r,this,E)})}function HE(r,o,u){var g=!0,E=!0;if(typeof r!="function")throw new gi(l);return Je(u)&&(g="leading"in u?!!u.leading:g,E="trailing"in u?!!u.trailing:E),Ym(r,o,{leading:g,maxWait:o,trailing:E})}function kE(r){return Gm(r,1)}function GE(r,o){return _f(tf(o),r)}function VE(){if(!arguments.length)return[];var r=arguments[0];return ue(r)?r:[r]}function WE(r){return vi(r,_)}function XE(r,o){return o=typeof o=="function"?o:e,vi(r,_,o)}function qE(r){return vi(r,p|_)}function YE(r,o){return o=typeof o=="function"?o:e,vi(r,p|_,o)}function $E(r,o){return o==null||Np(r,o,xn(o))}function Pi(r,o){return r===o||r!==r&&o!==o}var KE=Ol(Gu),ZE=Ol(function(r,o){return r>=o}),Ms=kp(function(){return arguments}())?kp:function(r){return en(r)&&Be.call(r,"callee")&&!wp.call(r,"callee")},ue=at.isArray,jE=lp?si(lp):sS;function Wn(r){return r!=null&&ql(r.length)&&!ur(r)}function rn(r){return en(r)&&Wn(r)}function JE(r){return r===!0||r===!1||en(r)&&Un(r)==vt}var zr=hM||Rf,QE=cp?si(cp):oS;function t1(r){return en(r)&&r.nodeType===1&&!xa(r)}function e1(r){if(r==null)return!0;if(Wn(r)&&(ue(r)||typeof r=="string"||typeof r.splice=="function"||zr(r)||uo(r)||Ms(r)))return!r.length;var o=wn(r);if(o==U||o==y)return!r.size;if(_a(r))return!Xu(r).length;for(var u in r)if(Be.call(r,u))return!1;return!0}function n1(r,o){return pa(r,o)}function i1(r,o,u){u=typeof u=="function"?u:e;var g=u?u(r,o):e;return g===e?pa(r,o,e,u):!!g}function vf(r){if(!en(r))return!1;var o=Un(r);return o==$t||o==Rt||typeof r.message=="string"&&typeof r.name=="string"&&!xa(r)}function r1(r){return typeof r=="number"&&Cp(r)}function ur(r){if(!Je(r))return!1;var o=Un(r);return o==B||o==I||o==X||o==mt}function Km(r){return typeof r=="number"&&r==he(r)}function ql(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=tt}function Je(r){var o=typeof r;return r!=null&&(o=="object"||o=="function")}function en(r){return r!=null&&typeof r=="object"}var Zm=up?si(up):lS;function s1(r,o){return r===o||Wu(r,o,lf(o))}function o1(r,o,u){return u=typeof u=="function"?u:e,Wu(r,o,lf(o),u)}function a1(r){return jm(r)&&r!=+r}function l1(r){if(XS(r))throw new ce(a);return Gp(r)}function c1(r){return r===null}function u1(r){return r==null}function jm(r){return typeof r=="number"||en(r)&&Un(r)==W}function xa(r){if(!en(r)||Un(r)!=rt)return!1;var o=xl(r);if(o===null)return!0;var u=Be.call(o,"constructor")&&o.constructor;return typeof u=="function"&&u instanceof u&&ml.call(u)==oM}var xf=fp?si(fp):cS;function f1(r){return Km(r)&&r>=-tt&&r<=tt}var Jm=hp?si(hp):uS;function Yl(r){return typeof r=="string"||!ue(r)&&en(r)&&Un(r)==O}function ai(r){return typeof r=="symbol"||en(r)&&Un(r)==j}var uo=dp?si(dp):fS;function h1(r){return r===e}function d1(r){return en(r)&&wn(r)==J}function p1(r){return en(r)&&Un(r)==Ct}var m1=Ol(qu),g1=Ol(function(r,o){return r<=o});function Qm(r){if(!r)return[];if(Wn(r))return Yl(r)?Ri(r):Vn(r);if(oa&&r[oa])return $x(r[oa]());var o=wn(r),u=o==U?Du:o==y?hl:fo;return u(r)}function fr(r){if(!r)return r===0?r:0;if(r=Si(r),r===lt||r===-lt){var o=r<0?-1:1;return o*Ot}return r===r?r:0}function he(r){var o=fr(r),u=o%1;return o===o?u?o-u:o:0}function tg(r){return r?gs(he(r),0,Nt):0}function Si(r){if(typeof r=="number")return r;if(ai(r))return Bt;if(Je(r)){var o=typeof r.valueOf=="function"?r.valueOf():r;r=Je(o)?o+"":o}if(typeof r!="string")return r===0?r:+r;r=xp(r);var u=q.test(r);return u||st.test(r)?Lx(r.slice(2),u?2:8):C.test(r)?Bt:+r}function eg(r){return Wi(r,Xn(r))}function _1(r){return r?gs(he(r),-tt,tt):r===0?r:0}function De(r){return r==null?"":oi(r)}var v1=ao(function(r,o){if(_a(o)||Wn(o)){Wi(o,xn(o),r);return}for(var u in o)Be.call(o,u)&&fa(r,u,o[u])}),ng=ao(function(r,o){Wi(o,Xn(o),r)}),$l=ao(function(r,o,u,g){Wi(o,Xn(o),r,g)}),x1=ao(function(r,o,u,g){Wi(o,xn(o),r,g)}),M1=lr(zu);function S1(r,o){var u=oo(r);return o==null?u:Up(u,o)}var y1=ge(function(r,o){r=Ge(r);var u=-1,g=o.length,E=g>2?o[2]:e;for(E&&Nn(o[0],o[1],E)&&(g=1);++u<g;)for(var T=o[u],F=Xn(T),H=-1,Y=F.length;++H<Y;){var _t=F[H],xt=r[_t];(xt===e||Pi(xt,io[_t])&&!Be.call(r,_t))&&(r[_t]=T[_t])}return r}),E1=ge(function(r){return r.push(e,xm),ri(ig,e,r)});function A1(r,o){return mp(r,te(o,3),Vi)}function b1(r,o){return mp(r,te(o,3),ku)}function T1(r,o){return r==null?r:Hu(r,te(o,3),Xn)}function w1(r,o){return r==null?r:zp(r,te(o,3),Xn)}function R1(r,o){return r&&Vi(r,te(o,3))}function C1(r,o){return r&&ku(r,te(o,3))}function P1(r){return r==null?[]:Cl(r,xn(r))}function L1(r){return r==null?[]:Cl(r,Xn(r))}function Mf(r,o,u){var g=r==null?e:_s(r,o);return g===e?u:g}function I1(r,o){return r!=null&&ym(r,o,eS)}function Sf(r,o){return r!=null&&ym(r,o,nS)}var D1=pm(function(r,o,u){o!=null&&typeof o.toString!="function"&&(o=gl.call(o)),r[o]=u},Ef(qn)),U1=pm(function(r,o,u){o!=null&&typeof o.toString!="function"&&(o=gl.call(o)),Be.call(r,o)?r[o].push(u):r[o]=[u]},te),N1=ge(da);function xn(r){return Wn(r)?Ip(r):Xu(r)}function Xn(r){return Wn(r)?Ip(r,!0):hS(r)}function F1(r,o){var u={};return o=te(o,3),Vi(r,function(g,E,T){or(u,o(g,E,T),g)}),u}function O1(r,o){var u={};return o=te(o,3),Vi(r,function(g,E,T){or(u,E,o(g,E,T))}),u}var B1=ao(function(r,o,u){Pl(r,o,u)}),ig=ao(function(r,o,u,g){Pl(r,o,u,g)}),z1=lr(function(r,o){var u={};if(r==null)return u;var g=!1;o=Ke(o,function(T){return T=Or(T,r),g||(g=T.length>1),T}),Wi(r,of(r),u),g&&(u=vi(u,p|m|_,DS));for(var E=o.length;E--;)ju(u,o[E]);return u});function H1(r,o){return rg(r,Xl(te(o)))}var k1=lr(function(r,o){return r==null?{}:pS(r,o)});function rg(r,o){if(r==null)return{};var u=Ke(of(r),function(g){return[g]});return o=te(o),Kp(r,u,function(g,E){return o(g,E[0])})}function G1(r,o,u){o=Or(o,r);var g=-1,E=o.length;for(E||(E=1,r=e);++g<E;){var T=r==null?e:r[Xi(o[g])];T===e&&(g=E,T=u),r=ur(T)?T.call(r):T}return r}function V1(r,o,u){return r==null?r:ma(r,o,u)}function W1(r,o,u,g){return g=typeof g=="function"?g:e,r==null?r:ma(r,o,u,g)}var sg=_m(xn),og=_m(Xn);function X1(r,o,u){var g=ue(r),E=g||zr(r)||uo(r);if(o=te(o,4),u==null){var T=r&&r.constructor;E?u=g?new T:[]:Je(r)?u=ur(T)?oo(xl(r)):{}:u={}}return(E?mi:Vi)(r,function(F,H,Y){return o(u,F,H,Y)}),u}function q1(r,o){return r==null?!0:ju(r,o)}function Y1(r,o,u){return r==null?r:tm(r,o,tf(u))}function $1(r,o,u,g){return g=typeof g=="function"?g:e,r==null?r:tm(r,o,tf(u),g)}function fo(r){return r==null?[]:Iu(r,xn(r))}function K1(r){return r==null?[]:Iu(r,Xn(r))}function Z1(r,o,u){return u===e&&(u=o,o=e),u!==e&&(u=Si(u),u=u===u?u:0),o!==e&&(o=Si(o),o=o===o?o:0),gs(Si(r),o,u)}function j1(r,o,u){return o=fr(o),u===e?(u=o,o=0):u=fr(u),r=Si(r),iS(r,o,u)}function J1(r,o,u){if(u&&typeof u!="boolean"&&Nn(r,o,u)&&(o=u=e),u===e&&(typeof o=="boolean"?(u=o,o=e):typeof r=="boolean"&&(u=r,r=e)),r===e&&o===e?(r=0,o=1):(r=fr(r),o===e?(o=r,r=0):o=fr(o)),r>o){var g=r;r=o,o=g}if(u||r%1||o%1){var E=Pp();return Tn(r+E*(o-r+Px("1e-"+((E+"").length-1))),o)}return $u(r,o)}var Q1=lo(function(r,o,u){return o=o.toLowerCase(),r+(u?ag(o):o)});function ag(r){return yf(De(r).toLowerCase())}function lg(r){return r=De(r),r&&r.replace(It,Vx).replace(Mx,"")}function tA(r,o,u){r=De(r),o=oi(o);var g=r.length;u=u===e?g:gs(he(u),0,g);var E=u;return u-=o.length,u>=0&&r.slice(u,E)==o}function eA(r){return r=De(r),r&&ye.test(r)?r.replace(Dt,Wx):r}function nA(r){return r=De(r),r&&ia.test(r)?r.replace(wi,"\\$&"):r}var iA=lo(function(r,o,u){return r+(u?"-":"")+o.toLowerCase()}),rA=lo(function(r,o,u){return r+(u?" ":"")+o.toLowerCase()}),sA=fm("toLowerCase");function oA(r,o,u){r=De(r),o=he(o);var g=o?eo(r):0;if(!o||g>=o)return r;var E=(o-g)/2;return Fl(El(E),u)+r+Fl(yl(E),u)}function aA(r,o,u){r=De(r),o=he(o);var g=o?eo(r):0;return o&&g<o?r+Fl(o-g,u):r}function lA(r,o,u){r=De(r),o=he(o);var g=o?eo(r):0;return o&&g<o?Fl(o-g,u)+r:r}function cA(r,o,u){return u||o==null?o=0:o&&(o=+o),gM(De(r).replace(qs,""),o||0)}function uA(r,o,u){return(u?Nn(r,o,u):o===e)?o=1:o=he(o),Ku(De(r),o)}function fA(){var r=arguments,o=De(r[0]);return r.length<3?o:o.replace(r[1],r[2])}var hA=lo(function(r,o,u){return r+(u?"_":"")+o.toLowerCase()});function dA(r,o,u){return u&&typeof u!="number"&&Nn(r,o,u)&&(o=u=e),u=u===e?Nt:u>>>0,u?(r=De(r),r&&(typeof o=="string"||o!=null&&!xf(o))&&(o=oi(o),!o&&to(r))?Br(Ri(r),0,u):r.split(o,u)):[]}var pA=lo(function(r,o,u){return r+(u?" ":"")+yf(o)});function mA(r,o,u){return r=De(r),u=u==null?0:gs(he(u),0,r.length),o=oi(o),r.slice(u,u+o.length)==o}function gA(r,o,u){var g=b.templateSettings;u&&Nn(r,o,u)&&(o=e),r=De(r),o=$l({},o,g,vm);var E=$l({},o.imports,g.imports,vm),T=xn(E),F=Iu(E,T),H,Y,_t=0,xt=o.interpolate||Gt,bt="__p += '",Ht=Uu((o.escape||Gt).source+"|"+xt.source+"|"+(xt===Ae?xu:Gt).source+"|"+(o.evaluate||Gt).source+"|$","g"),Yt="//# sourceURL="+(Be.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++bx+"]")+`
`;r.replace(Ht,function(ie,Me,Ee,li,Fn,ci){return Ee||(Ee=li),bt+=r.slice(_t,ci).replace(qt,Xx),Me&&(H=!0,bt+=`' +
__e(`+Me+`) +
'`),Fn&&(Y=!0,bt+=`';
`+Fn+`;
__p += '`),Ee&&(bt+=`' +
((__t = (`+Ee+`)) == null ? '' : __t) +
'`),_t=ci+ie.length,ie}),bt+=`';
`;var ne=Be.call(o,"variable")&&o.variable;if(!ne)bt=`with (obj) {
`+bt+`
}
`;else if(al.test(ne))throw new ce(c);bt=(Y?bt.replace(G,""):bt).replace(Lt,"$1").replace(St,"$1;"),bt="function("+(ne||"obj")+`) {
`+(ne?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(H?", __e = _.escape":"")+(Y?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+bt+`return __p
}`;var de=ug(function(){return Le(T,Yt+"return "+bt).apply(e,F)});if(de.source=bt,vf(de))throw de;return de}function _A(r){return De(r).toLowerCase()}function vA(r){return De(r).toUpperCase()}function xA(r,o,u){if(r=De(r),r&&(u||o===e))return xp(r);if(!r||!(o=oi(o)))return r;var g=Ri(r),E=Ri(o),T=Mp(g,E),F=Sp(g,E)+1;return Br(g,T,F).join("")}function MA(r,o,u){if(r=De(r),r&&(u||o===e))return r.slice(0,Ep(r)+1);if(!r||!(o=oi(o)))return r;var g=Ri(r),E=Sp(g,Ri(o))+1;return Br(g,0,E).join("")}function SA(r,o,u){if(r=De(r),r&&(u||o===e))return r.replace(qs,"");if(!r||!(o=oi(o)))return r;var g=Ri(r),E=Mp(g,Ri(o));return Br(g,E).join("")}function yA(r,o){var u=P,g=k;if(Je(o)){var E="separator"in o?o.separator:E;u="length"in o?he(o.length):u,g="omission"in o?oi(o.omission):g}r=De(r);var T=r.length;if(to(r)){var F=Ri(r);T=F.length}if(u>=T)return r;var H=u-eo(g);if(H<1)return g;var Y=F?Br(F,0,H).join(""):r.slice(0,H);if(E===e)return Y+g;if(F&&(H+=Y.length-H),xf(E)){if(r.slice(H).search(E)){var _t,xt=Y;for(E.global||(E=Uu(E.source,De(ll.exec(E))+"g")),E.lastIndex=0;_t=E.exec(xt);)var bt=_t.index;Y=Y.slice(0,bt===e?H:bt)}}else if(r.indexOf(oi(E),H)!=H){var Ht=Y.lastIndexOf(E);Ht>-1&&(Y=Y.slice(0,Ht))}return Y+g}function EA(r){return r=De(r),r&&re.test(r)?r.replace(Et,Jx):r}var AA=lo(function(r,o,u){return r+(u?" ":"")+o.toUpperCase()}),yf=fm("toUpperCase");function cg(r,o,u){return r=De(r),o=u?e:o,o===e?Yx(r)?eM(r):Bx(r):r.match(o)||[]}var ug=ge(function(r,o){try{return ri(r,e,o)}catch(u){return vf(u)?u:new ce(u)}}),bA=lr(function(r,o){return mi(o,function(u){u=Xi(u),or(r,u,gf(r[u],r))}),r});function TA(r){var o=r==null?0:r.length,u=te();return r=o?Ke(r,function(g){if(typeof g[1]!="function")throw new gi(l);return[u(g[0]),g[1]]}):[],ge(function(g){for(var E=-1;++E<o;){var T=r[E];if(ri(T[0],this,g))return ri(T[1],this,g)}})}function wA(r){return JM(vi(r,p))}function Ef(r){return function(){return r}}function RA(r,o){return r==null||r!==r?o:r}var CA=dm(),PA=dm(!0);function qn(r){return r}function Af(r){return Vp(typeof r=="function"?r:vi(r,p))}function LA(r){return Xp(vi(r,p))}function IA(r,o){return qp(r,vi(o,p))}var DA=ge(function(r,o){return function(u){return da(u,r,o)}}),UA=ge(function(r,o){return function(u){return da(r,u,o)}});function bf(r,o,u){var g=xn(o),E=Cl(o,g);u==null&&!(Je(o)&&(E.length||!g.length))&&(u=o,o=r,r=this,E=Cl(o,xn(o)));var T=!(Je(u)&&"chain"in u)||!!u.chain,F=ur(r);return mi(E,function(H){var Y=o[H];r[H]=Y,F&&(r.prototype[H]=function(){var _t=this.__chain__;if(T||_t){var xt=r(this.__wrapped__),bt=xt.__actions__=Vn(this.__actions__);return bt.push({func:Y,args:arguments,thisArg:r}),xt.__chain__=_t,xt}return Y.apply(r,Ir([this.value()],arguments))})}),r}function NA(){return En._===this&&(En._=aM),this}function Tf(){}function FA(r){return r=he(r),ge(function(o){return Yp(o,r)})}var OA=nf(Ke),BA=nf(pp),zA=nf(wu);function fg(r){return uf(r)?Ru(Xi(r)):mS(r)}function HA(r){return function(o){return r==null?e:_s(r,o)}}var kA=mm(),GA=mm(!0);function wf(){return[]}function Rf(){return!1}function VA(){return{}}function WA(){return""}function XA(){return!0}function qA(r,o){if(r=he(r),r<1||r>tt)return[];var u=Nt,g=Tn(r,Nt);o=te(o),r-=Nt;for(var E=Lu(g,o);++u<r;)o(u);return E}function YA(r){return ue(r)?Ke(r,Xi):ai(r)?[r]:Vn(Lm(De(r)))}function $A(r){var o=++sM;return De(r)+o}var KA=Nl(function(r,o){return r+o},0),ZA=rf("ceil"),jA=Nl(function(r,o){return r/o},1),JA=rf("floor");function QA(r){return r&&r.length?Rl(r,qn,Gu):e}function tb(r,o){return r&&r.length?Rl(r,te(o,2),Gu):e}function eb(r){return _p(r,qn)}function nb(r,o){return _p(r,te(o,2))}function ib(r){return r&&r.length?Rl(r,qn,qu):e}function rb(r,o){return r&&r.length?Rl(r,te(o,2),qu):e}var sb=Nl(function(r,o){return r*o},1),ob=rf("round"),ab=Nl(function(r,o){return r-o},0);function lb(r){return r&&r.length?Pu(r,qn):0}function cb(r,o){return r&&r.length?Pu(r,te(o,2)):0}return b.after=LE,b.ary=Gm,b.assign=v1,b.assignIn=ng,b.assignInWith=$l,b.assignWith=x1,b.at=M1,b.before=Vm,b.bind=gf,b.bindAll=bA,b.bindKey=Wm,b.castArray=VE,b.chain=zm,b.chunk=JS,b.compact=QS,b.concat=ty,b.cond=TA,b.conforms=wA,b.constant=Ef,b.countBy=lE,b.create=S1,b.curry=Xm,b.curryRight=qm,b.debounce=Ym,b.defaults=y1,b.defaultsDeep=E1,b.defer=IE,b.delay=DE,b.difference=ey,b.differenceBy=ny,b.differenceWith=iy,b.drop=ry,b.dropRight=sy,b.dropRightWhile=oy,b.dropWhile=ay,b.fill=ly,b.filter=uE,b.flatMap=dE,b.flatMapDeep=pE,b.flatMapDepth=mE,b.flatten=Nm,b.flattenDeep=cy,b.flattenDepth=uy,b.flip=UE,b.flow=CA,b.flowRight=PA,b.fromPairs=fy,b.functions=P1,b.functionsIn=L1,b.groupBy=gE,b.initial=dy,b.intersection=py,b.intersectionBy=my,b.intersectionWith=gy,b.invert=D1,b.invertBy=U1,b.invokeMap=vE,b.iteratee=Af,b.keyBy=xE,b.keys=xn,b.keysIn=Xn,b.map=Gl,b.mapKeys=F1,b.mapValues=O1,b.matches=LA,b.matchesProperty=IA,b.memoize=Wl,b.merge=B1,b.mergeWith=ig,b.method=DA,b.methodOf=UA,b.mixin=bf,b.negate=Xl,b.nthArg=FA,b.omit=z1,b.omitBy=H1,b.once=NE,b.orderBy=ME,b.over=OA,b.overArgs=FE,b.overEvery=BA,b.overSome=zA,b.partial=_f,b.partialRight=$m,b.partition=SE,b.pick=k1,b.pickBy=rg,b.property=fg,b.propertyOf=HA,b.pull=My,b.pullAll=Om,b.pullAllBy=Sy,b.pullAllWith=yy,b.pullAt=Ey,b.range=kA,b.rangeRight=GA,b.rearg=OE,b.reject=AE,b.remove=Ay,b.rest=BE,b.reverse=pf,b.sampleSize=TE,b.set=V1,b.setWith=W1,b.shuffle=wE,b.slice=by,b.sortBy=PE,b.sortedUniq=Iy,b.sortedUniqBy=Dy,b.split=dA,b.spread=zE,b.tail=Uy,b.take=Ny,b.takeRight=Fy,b.takeRightWhile=Oy,b.takeWhile=By,b.tap=Qy,b.throttle=HE,b.thru=kl,b.toArray=Qm,b.toPairs=sg,b.toPairsIn=og,b.toPath=YA,b.toPlainObject=eg,b.transform=X1,b.unary=kE,b.union=zy,b.unionBy=Hy,b.unionWith=ky,b.uniq=Gy,b.uniqBy=Vy,b.uniqWith=Wy,b.unset=q1,b.unzip=mf,b.unzipWith=Bm,b.update=Y1,b.updateWith=$1,b.values=fo,b.valuesIn=K1,b.without=Xy,b.words=cg,b.wrap=GE,b.xor=qy,b.xorBy=Yy,b.xorWith=$y,b.zip=Ky,b.zipObject=Zy,b.zipObjectDeep=jy,b.zipWith=Jy,b.entries=sg,b.entriesIn=og,b.extend=ng,b.extendWith=$l,bf(b,b),b.add=KA,b.attempt=ug,b.camelCase=Q1,b.capitalize=ag,b.ceil=ZA,b.clamp=Z1,b.clone=WE,b.cloneDeep=qE,b.cloneDeepWith=YE,b.cloneWith=XE,b.conformsTo=$E,b.deburr=lg,b.defaultTo=RA,b.divide=jA,b.endsWith=tA,b.eq=Pi,b.escape=eA,b.escapeRegExp=nA,b.every=cE,b.find=fE,b.findIndex=Dm,b.findKey=A1,b.findLast=hE,b.findLastIndex=Um,b.findLastKey=b1,b.floor=JA,b.forEach=Hm,b.forEachRight=km,b.forIn=T1,b.forInRight=w1,b.forOwn=R1,b.forOwnRight=C1,b.get=Mf,b.gt=KE,b.gte=ZE,b.has=I1,b.hasIn=Sf,b.head=Fm,b.identity=qn,b.includes=_E,b.indexOf=hy,b.inRange=j1,b.invoke=N1,b.isArguments=Ms,b.isArray=ue,b.isArrayBuffer=jE,b.isArrayLike=Wn,b.isArrayLikeObject=rn,b.isBoolean=JE,b.isBuffer=zr,b.isDate=QE,b.isElement=t1,b.isEmpty=e1,b.isEqual=n1,b.isEqualWith=i1,b.isError=vf,b.isFinite=r1,b.isFunction=ur,b.isInteger=Km,b.isLength=ql,b.isMap=Zm,b.isMatch=s1,b.isMatchWith=o1,b.isNaN=a1,b.isNative=l1,b.isNil=u1,b.isNull=c1,b.isNumber=jm,b.isObject=Je,b.isObjectLike=en,b.isPlainObject=xa,b.isRegExp=xf,b.isSafeInteger=f1,b.isSet=Jm,b.isString=Yl,b.isSymbol=ai,b.isTypedArray=uo,b.isUndefined=h1,b.isWeakMap=d1,b.isWeakSet=p1,b.join=_y,b.kebabCase=iA,b.last=Mi,b.lastIndexOf=vy,b.lowerCase=rA,b.lowerFirst=sA,b.lt=m1,b.lte=g1,b.max=QA,b.maxBy=tb,b.mean=eb,b.meanBy=nb,b.min=ib,b.minBy=rb,b.stubArray=wf,b.stubFalse=Rf,b.stubObject=VA,b.stubString=WA,b.stubTrue=XA,b.multiply=sb,b.nth=xy,b.noConflict=NA,b.noop=Tf,b.now=Vl,b.pad=oA,b.padEnd=aA,b.padStart=lA,b.parseInt=cA,b.random=J1,b.reduce=yE,b.reduceRight=EE,b.repeat=uA,b.replace=fA,b.result=G1,b.round=ob,b.runInContext=V,b.sample=bE,b.size=RE,b.snakeCase=hA,b.some=CE,b.sortedIndex=Ty,b.sortedIndexBy=wy,b.sortedIndexOf=Ry,b.sortedLastIndex=Cy,b.sortedLastIndexBy=Py,b.sortedLastIndexOf=Ly,b.startCase=pA,b.startsWith=mA,b.subtract=ab,b.sum=lb,b.sumBy=cb,b.template=gA,b.times=qA,b.toFinite=fr,b.toInteger=he,b.toLength=tg,b.toLower=_A,b.toNumber=Si,b.toSafeInteger=_1,b.toString=De,b.toUpper=vA,b.trim=xA,b.trimEnd=MA,b.trimStart=SA,b.truncate=yA,b.unescape=EA,b.uniqueId=$A,b.upperCase=AA,b.upperFirst=yf,b.each=Hm,b.eachRight=km,b.first=Fm,bf(b,function(){var r={};return Vi(b,function(o,u){Be.call(b.prototype,u)||(r[u]=o)}),r}(),{chain:!1}),b.VERSION=i,mi(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){b[r].placeholder=b}),mi(["drop","take"],function(r,o){Se.prototype[r]=function(u){u=u===e?1:dn(he(u),0);var g=this.__filtered__&&!o?new Se(this):this.clone();return g.__filtered__?g.__takeCount__=Tn(u,g.__takeCount__):g.__views__.push({size:Tn(u,Nt),type:r+(g.__dir__<0?"Right":"")}),g},Se.prototype[r+"Right"]=function(u){return this.reverse()[r](u).reverse()}}),mi(["filter","map","takeWhile"],function(r,o){var u=o+1,g=u==yt||u==ut;Se.prototype[r]=function(E){var T=this.clone();return T.__iteratees__.push({iteratee:te(E,3),type:u}),T.__filtered__=T.__filtered__||g,T}}),mi(["head","last"],function(r,o){var u="take"+(o?"Right":"");Se.prototype[r]=function(){return this[u](1).value()[0]}}),mi(["initial","tail"],function(r,o){var u="drop"+(o?"":"Right");Se.prototype[r]=function(){return this.__filtered__?new Se(this):this[u](1)}}),Se.prototype.compact=function(){return this.filter(qn)},Se.prototype.find=function(r){return this.filter(r).head()},Se.prototype.findLast=function(r){return this.reverse().find(r)},Se.prototype.invokeMap=ge(function(r,o){return typeof r=="function"?new Se(this):this.map(function(u){return da(u,r,o)})}),Se.prototype.reject=function(r){return this.filter(Xl(te(r)))},Se.prototype.slice=function(r,o){r=he(r);var u=this;return u.__filtered__&&(r>0||o<0)?new Se(u):(r<0?u=u.takeRight(-r):r&&(u=u.drop(r)),o!==e&&(o=he(o),u=o<0?u.dropRight(-o):u.take(o-r)),u)},Se.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Se.prototype.toArray=function(){return this.take(Nt)},Vi(Se.prototype,function(r,o){var u=/^(?:filter|find|map|reject)|While$/.test(o),g=/^(?:head|last)$/.test(o),E=b[g?"take"+(o=="last"?"Right":""):o],T=g||/^find/.test(o);E&&(b.prototype[o]=function(){var F=this.__wrapped__,H=g?[1]:arguments,Y=F instanceof Se,_t=H[0],xt=Y||ue(F),bt=function(Me){var Ee=E.apply(b,Ir([Me],H));return g&&Ht?Ee[0]:Ee};xt&&u&&typeof _t=="function"&&_t.length!=1&&(Y=xt=!1);var Ht=this.__chain__,Yt=!!this.__actions__.length,ne=T&&!Ht,de=Y&&!Yt;if(!T&&xt){F=de?F:new Se(this);var ie=r.apply(F,H);return ie.__actions__.push({func:kl,args:[bt],thisArg:e}),new _i(ie,Ht)}return ne&&de?r.apply(this,H):(ie=this.thru(bt),ne?g?ie.value()[0]:ie.value():ie)})}),mi(["pop","push","shift","sort","splice","unshift"],function(r){var o=dl[r],u=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",g=/^(?:pop|shift)$/.test(r);b.prototype[r]=function(){var E=arguments;if(g&&!this.__chain__){var T=this.value();return o.apply(ue(T)?T:[],E)}return this[u](function(F){return o.apply(ue(F)?F:[],E)})}}),Vi(Se.prototype,function(r,o){var u=b[o];if(u){var g=u.name+"";Be.call(so,g)||(so[g]=[]),so[g].push({name:o,func:u})}}),so[Ul(e,v).name]=[{name:"wrapper",func:e}],Se.prototype.clone=EM,Se.prototype.reverse=AM,Se.prototype.value=bM,b.prototype.at=tE,b.prototype.chain=eE,b.prototype.commit=nE,b.prototype.next=iE,b.prototype.plant=sE,b.prototype.reverse=oE,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=aE,b.prototype.first=b.prototype.head,oa&&(b.prototype[oa]=rE),b},no=nM();hs?((hs.exports=no)._=no,Eu._=no):En._=no}).call(Ca)})(Qc,Qc.exports);var c3=Qc.exports;const Ki=l3(c3),u3={style:{overflow:"auto",margin:"0"}},f3={class:"table"},h3=["placeholder","value","onInput"],d3=["onClick"],wc=8,p3={__name:"Table",props:{rows:Array,columns:Array},setup(n){const t=n,e=(S,x)=>Ki.isEmpty(x)?S:S.filter(v=>Object.keys(x).every(w=>{const A=v[w],L=x[w];return Ki.isString(A)?Ki.toLower(A).includes(Ki.toLower(L)):Ki.isBoolean(A)?L==="true"&&A||L==="false"&&!A||L==!0&&A||L==!1&&!A:Ki.isNumber(A)?A==L:!1})),i=(S,x)=>S.sort((v,w)=>{const{order:A,orderBy:L}=x;if(Ki.isNil(v[L]))return 1;if(Ki.isNil(w[L]))return-1;const $=v[L]+"",N=w[L]+"";return A==="asc"?$.localeCompare(N,"en",{numeric:Ki.isNumber(w[L])}):N.localeCompare($,"en",{numeric:Ki.isNumber(v[L])})}),s=Pe(1),a=Pe({}),l=Pe({order:"asc",orderBy:"id"}),c=nn(()=>e(t.rows,a.value)),f=nn(()=>i(c.value,l.value)),h=nn(()=>f.value.slice((s.value-1)*wc,s.value*wc)),d=nn(()=>c.value.length),p=nn(()=>Math.ceil(d.value/wc)),m=(S,x)=>{if(s.value=1,S)a.value={...a.value,[x]:S};else{const{[x]:v,...w}=a.value;a.value=w}console.log(a.value)},_=S=>{s.value=1,l.value={order:l.value.order==="desc"&&l.value.orderBy===S?"asc":"desc",orderBy:S}},M=S=>{s.value=S};return(S,x)=>(He(),ke(cn,null,[Pt("div",u3,[Pt("table",f3,[Pt("thead",null,[Pt("tr",null,[(He(!0),ke(cn,null,jr(n.columns,v=>(He(),ke("th",{key:v.accessor},bn(v.label),1))),128))]),Pt("tr",null,[(He(!0),ke(cn,null,jr(n.columns,v=>(He(),ke("th",{key:v.accessor},[Pt("label",null,[(He(),ke("input",{class:"input",key:"${column.accessor}-search",type:"search",placeholder:`搜尋${v.label}`,value:a.value[v.accessor]||"",onInput:w=>m(w.target.value,v.accessor)},null,40,h3))])]))),128))]),Pt("tr",null,[(He(!0),ke(cn,null,jr(n.columns,v=>(He(),ke("th",{key:v.accessor},[Pt("button",{onClick:w=>_(v.accessor)},bn(v.accessor===l.value.orderBy?l.value.order==="asc"?"升序🟢":"降序🔴":"️排序⚪"),9,d3)]))),128))])]),Pt("tbody",null,[(He(!0),ke(cn,null,jr(h.value,v=>(He(),ke("tr",{key:v.id},[(He(!0),ke(cn,null,jr(n.columns,w=>(He(),ke("td",{key:w},bn(w.format?w.format(v[w.accessor]):v[w.accessor]),1))),128))]))),128))])])]),$e(a3,{"onUpdate:activePage":M,activePage:s.value,rowsPerPage:wc,count:d.value,totalPages:p.value},null,8,["activePage","count","totalPages"])],64))}},m3=Cr(p3,[["__scopeId","data-v-b5f54972"]]),g3={class:"section",id:"cookie"},_3={__name:"CookieTable",setup(n){const t=[],e=Pe([]),i=[{accessor:"price",label:"售價"},{accessor:"name",label:"品名"},{accessor:"onsale",label:"在架上",format:s=>s?"✔️":"  "},{accessor:"tag",label:"標籤"},{accessor:"rate",label:"顧客評價"},{accessor:"expiryDate",label:"有效期限"},{accessor:"category",label:"類別"},{accessor:"stock",label:"庫存"}];return us(()=>{const s=t.concat([{id:1,name:"potatochip 洋芋片",price:"50",onsale:!0,tag:"salty crispy delicious",rate:"⭐️⭐️⭐️⭐️",expiryDate:"2025-01-01",category:"snack",stock:100},{id:2,name:"chocolate 巧克力",price:"30",onsale:!1,tag:"sweet rich smooth",rate:"⭐️⭐️⭐️⭐️⭐️",expiryDate:"2024-12-15",category:"dessert",stock:150},{id:3,name:"biscuit 餅乾",price:"25",onsale:!0,tag:"crunchy light buttery",rate:"⭐️",expiryDate:"2024-11-30",category:"snack",stock:200},{id:4,name:"nuts 堅果",price:"60",onsale:!0,tag:"healthy crunchy tasty",rate:"⭐️⭐️⭐️⭐️",expiryDate:"2025-03-01",category:"snack",stock:180},{id:5,name:"driedfruit 果乾",price:"35",onsale:!1,tag:"sweet chewy fruity",rate:"⭐️⭐️⭐️",expiryDate:"2025-01-20",category:"snack",stock:220},{id:6,name:"candy 糖果",price:"40",onsale:!0,tag:"sweet colorful chewy",rate:"⭐️⭐️⭐️⭐️",expiryDate:"2024-10-05",category:"dessert",stock:250},{id:7,name:"popcorn 爆米花",price:"55",onsale:!1,tag:"salty sweet crispy",rate:"⭐️⭐️⭐️⭐️",expiryDate:"2024-09-15",category:"snack",stock:80},{id:8,name:"beefjerky 牛肉乾",price:"45",onsale:!0,tag:"savory chewy spicy",rate:"⭐️⭐️⭐️⭐️⭐️",expiryDate:"2024-11-10",category:"snack",stock:90},{id:9,name:"jelly 果凍",price:"20",onsale:!1,tag:"sweet fruity soft",rate:"⭐️⭐️⭐️",expiryDate:"2025-02-05",category:"dessert",stock:300},{id:10,name:"cracker 薄脆餅",price:"28",onsale:!0,tag:"light crispy savory",rate:"⭐️⭐️⭐️",expiryDate:"2025-01-15",category:"snack",stock:120},{id:11,name:"cookies 曲奇餅",price:"32",onsale:!1,tag:"sweet buttery soft",rate:"⭐️⭐️⭐️⭐️",expiryDate:"2024-12-20",category:"dessert",stock:170},{id:12,name:"seaweed 海苔",price:"38",onsale:!0,tag:"salty crispy healthy",rate:"⭐️⭐️⭐️⭐️",expiryDate:"2025-04-01",category:"snack",stock:140},{id:13,name:"mints 薄荷糖",price:"22",onsale:!1,tag:"refreshing sweet cool",rate:"⭐️⭐️",expiryDate:"2025-06-05",category:"candy",stock:160},{id:14,name:"cerealbar 穀物棒",price:"42",onsale:!0,tag:"healthy filling crunchy",rate:"⭐️⭐️⭐️⭐️",expiryDate:"2025-03-25",category:"snack",stock:130},{id:15,name:"pudding 布丁",price:"33",onsale:!1,tag:"sweet smooth creamy",rate:"⭐️⭐️⭐️",expiryDate:"2025-02-01",category:"dessert",stock:180},{id:16,name:"granola 格蘭諾拉",price:"50",onsale:!0,tag:"crunchy healthy sweet",rate:"⭐️⭐️⭐️⭐️",expiryDate:"2025-03-10",category:"snack",stock:90},{id:17,name:"trailmix 綜合果仁",price:"65",onsale:!1,tag:"savory sweet healthy",rate:"⭐️⭐️⭐️⭐️",expiryDate:"2025-01-25",category:"snack",stock:100},{id:18,name:"fruitchips 果片",price:"36",onsale:!0,tag:"crunchy fruity sweet",rate:"⭐️⭐️",expiryDate:"2024-09-30",category:"snack",stock:70},{id:19,name:"caramelpopcorn 焦糖爆米花",price:"58",onsale:!1,tag:"sweet crispy rich",rate:"⭐️⭐️⭐️⭐️",expiryDate:"2025-05-01",category:"snack",stock:200},{id:20,name:"yogurt 雪酪",price:"48",onsale:!0,tag:"creamy tangy sweet",rate:"⭐️⭐️⭐️⭐️",expiryDate:"2024-12-05",category:"dessert",stock:110},{id:21,name:"mochi 麻糬",price:"70",onsale:!0,tag:"chewy sweet soft",rate:"⭐️⭐️⭐️⭐️⭐️",expiryDate:"2024-10-01",category:"dessert",stock:150},{id:22,name:"ricecracker 米餅",price:"29",onsale:!1,tag:"crunchy salty light",rate:"⭐️⭐️⭐️",expiryDate:"2025-01-10",category:"snack",stock:200},{id:23,name:"energybar 能量棒",price:"55",onsale:!0,tag:"filling healthy chewy",rate:"⭐️⭐️⭐️⭐️",expiryDate:"2025-03-20",category:"snack",stock:100}]);e.value=s.map((a,l)=>({url:a.url,id:l,price:a.price,name:a.name,onsale:a.onsale,tag:a.tag,rate:a.rate}))}),(s,a)=>(He(),ke("section",g3,[$e(m3,{columns:i,rows:e.value},null,8,["rows"])]))}},v3=["href","id"],x3={__name:"NavigationBar",props:{width:Number,divRef:Object},setup(n){const t=n,e=Pe(!1),i=()=>e.value=!e.value;function s(){const l=window.location.hash;if(!l)return;const c=document.querySelector(l);c&&c.scrollIntoView({behavior:"smooth"})}const a=Pe([]);return us(async()=>{await Jo();const l=t.divRef.getElementsByTagName("section");a.value=Array.from(l).map(c=>({id:c.id})),s(),window.addEventListener("hashchange",s)}),Ld(()=>{window.removeEventListener("hashchange",s)}),(l,c)=>(He(),ke("nav",{id:"nav",style:yr({left:e.value?"0":-n.width+"px"})},[(He(!0),ke(cn,null,jr(a.value,f=>(He(),ke("div",{key:f.id},[Pt("a",{href:"#"+f.id,id:"to"+f.id,class:"list"},bn(f.id),9,v3)]))),128)),Pt("div",{onClick:i,id:"navSlider"},[Pt("p",null,bn(e.value?"X":"≡"),1)])],4))}},M3=Cr(x3,[["__scopeId","data-v-f471d543"]]),S3={__name:"Playground",props:{margin:Number},setup(n){const t=n,e=992-t.margin*2,{width:i,height:s}=kR(t.margin),a=nn(()=>c(i.value,s.value)),l=nn(()=>i.value>e?1:2);function c(_,M){return _>e?_<M?_:M:_*2<M?_:M/2}function f(_){const M=_.target.getBoundingClientRect(),S=l.value*(_.pageX-M.x),x=l.value*(_.pageY-M.y);Io.NewTarget(S,x,30)}const h=Pe(null),d=Pe(null),p=Pe(null);us(()=>{const _=[h,d,p].map(M=>{if(M.value.section)return M.value.section});nr.addSubjectElements(_),nr.registerAnimationCallback("validIn:S1,S2,S3",Io.NextFrame)});const m=Pe(null);return(_,M)=>(He(),ke("div",{id:"playground",ref_key:"divRef",ref:m,onMousemove:f,style:yr({width:a.value+"px",height:a.value*l.value+"px",margin:n.margin+"px auto"})},[$e(gC,{ref_key:"sectionRef1",ref:h,max:a.value,ratio:l.value},null,8,["max","ratio"]),$e(zU,{ref_key:"sectionRef2",ref:d,max:a.value,ratio:l.value},null,8,["max","ratio"]),$e(QU,{ref_key:"sectionRef3",ref:p,max:a.value,ratio:l.value},null,8,["max","ratio"]),$e(_3),$e(M3,{width:250,divRef:m.value},null,8,["divRef"])],36))}},y3=Cr(S3,[["__scopeId","data-v-9d5778c2"]]),E3={__name:"HomePage",setup(n){return(t,e)=>(He(),YT(y3,{margin:20}))}},A3="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e",b3=n=>(Rd("data-v-d62d692b"),n=n(),Cd(),n),T3=ZT('<header data-v-d62d692b><nav data-v-d62d692b><div id="navContent" data-v-d62d692b><div class="logo" data-v-d62d692b><img src="'+A3+'" alt="Apple Logo" data-v-d62d692b></div><ul data-v-d62d692b><li data-v-d62d692b><a href="#" data-v-d62d692b>Mac</a></li><li data-v-d62d692b><a href="#" data-v-d62d692b>iPad</a></li><li data-v-d62d692b><a href="#" data-v-d62d692b>iPhone</a></li><li data-v-d62d692b><a href="#" data-v-d62d692b>Watch</a></li><li data-v-d62d692b><a href="#" data-v-d62d692b>AirPods</a></li><li data-v-d62d692b><a href="#" data-v-d62d692b>TV &amp; Home</a></li><li data-v-d62d692b><a href="#" data-v-d62d692b>Only on Apple</a></li><li data-v-d62d692b><a href="#" data-v-d62d692b>Accessories</a></li><li data-v-d62d692b><a href="#" data-v-d62d692b>Support</a></li></ul></div></nav></header>',1),w3={class:"main"},R3={class:"hero-content"},C3=["href"],P3=["href"],L3={class:"products"},I3=["src","alt"],D3=["href"],U3=["href"],N3=b3(()=>Pt("footer",null,[Pt("div",{class:"footer-content"},[Pt("p",null,"© 2024 Apple Inc. 保留一切權利。")])],-1)),F3={__name:"ApplePage",setup(n){const t=Pe({iphone16pro:{learn:"learn/iphone16pro",buy:"buy/iphone16pro"},iphone16:{learn:"learn/iphone16",buy:"buy/iphone16"},watch10:{learn:"learn/watch10",buy:"buy/watch10"}}),e=Pe({MacBookPro:{h2:"MacBook Pro",p:"極致效能，無限創意可能。",src:"/vite-vue/src/assets/banner-snowflask.jpg",alt:"MacBook",learn:"learn/MacBookPro",buy:"buy/MacBookPro",style:"p-white p-top"},iPhone16Pro:{h2:"iPhone 16 Pro",p:"搭載最先進的科技，捕捉每一刻。",src:"/vite-vue/src/assets/banner-snowflask.jpg",alt:"iPhone 16 Pro",learn:"learn/iPhone16Pro",buy:"buy/iPhone16Pro",style:"p-white p-bottom"},iPhone16:{h2:"iPhone 16",p:"精美設計，功能強大，隨時隨地連接。",src:"/vite-vue/src/assets/banner-snowflask.jpg",alt:"iPhone 16",learn:"learn/iPhone16",buy:"buy/iPhone16",style:"p-white p-top"},AppleWatch10:{h2:"Apple Watch 10",p:"你的健康伴侶，隨時掌握身體狀況。",src:"/vite-vue/src/assets/banner-snowflask.jpg",alt:"Apple Watch 10",learn:"learn/AppleWatch10",buy:"buy/AppleWatch10",style:"p-black p-top"},iPadPro:{h2:"iPad Pro",p:"強大的性能，隨時隨地創造。",src:"/vite-vue/src/assets/banner-snowflask.jpg",alt:"iPad Pro",learn:"learn/iPadPro",buy:"buy/iPadPro",style:"p-white p-top"},AirPodsPro:{h2:"AirPods Pro",p:"無線音樂，卓越音質，沉浸式體驗。",src:"/vite-vue/src/assets/banner-snowflask.jpg",alt:"AirPods Pro",learn:"learn/AirPodsPro",buy:"buy/AirPodsPro",style:"p-white p-top"}});return(i,s)=>(He(),ke(cn,null,[T3,Pt("div",w3,[Pt("section",null,[(He(!0),ke(cn,null,jr(t.value,(a,l)=>(He(),ke("div",{class:"hero",key:l},[Pt("div",R3,[Pt("a",{href:a.learn,class:"cta"},"了解更多",8,C3),Pt("a",{href:a.buy,class:"cta buy"},"購買",8,P3)])]))),128))]),Pt("section",L3,[(He(!0),ke(cn,null,jr(e.value,(a,l)=>(He(),ke("div",{class:"product-item",key:l},[Pt("img",{src:a.src,alt:a.alt},null,8,I3),Pt("div",{class:su("product-description "+a.style)},[Pt("h2",null,bn(a.h2),1),Pt("p",null,bn(a.p),1),Pt("a",{href:a.learn,class:"cta"},"了解更多",8,D3),Pt("a",{href:a.buy,class:"cta buy"},"購買",8,U3)],2)]))),128))]),N3])],64))}},O3=Cr(F3,[["__scopeId","data-v-d62d692b"]]),B3=[{path:"/",component:E3},{path:"/apple",component:O3}],z3=zR({history:mR(),routes:B3}),fx=Lw(Bw);fx.use(z3);fx.mount("#app");
