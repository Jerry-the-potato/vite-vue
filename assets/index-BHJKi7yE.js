var QT=Object.defineProperty;var Om=n=>{throw TypeError(n)};var tA=(n,t,e)=>t in n?QT(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Vi=(n,t,e)=>tA(n,typeof t!="symbol"?t+"":t,e),Bm=(n,t,e)=>t.has(n)||Om("Cannot "+e);var De=(n,t,e)=>(Bm(n,t,"read from private field"),e?e.call(n):t.get(n)),ki=(n,t,e)=>t.has(n)?Om("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),hs=(n,t,e,i)=>(Bm(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e);var zm=(n,t,e,i)=>({set _(s){hs(n,t,s,e)},get _(){return De(n,t,i)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function kh(n,t){const e=new Set(n.split(","));return i=>e.has(i)}const $e={},bo=[],Ei=()=>{},eA=()=>!1,Oc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Wh=n=>n.startsWith("onUpdate:"),On=Object.assign,Xh=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},nA=Object.prototype.hasOwnProperty,we=(n,t)=>nA.call(n,t),le=Array.isArray,wo=n=>Bc(n)==="[object Map]",x_=n=>Bc(n)==="[object Set]",pe=n=>typeof n=="function",hn=n=>typeof n=="string",jr=n=>typeof n=="symbol",Ke=n=>n!==null&&typeof n=="object",M_=n=>(Ke(n)||pe(n))&&pe(n.then)&&pe(n.catch),S_=Object.prototype.toString,Bc=n=>S_.call(n),iA=n=>Bc(n).slice(8,-1),y_=n=>Bc(n)==="[object Object]",qh=n=>hn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ya=kh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zc=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},rA=/-(\w)/g,Ds=zc(n=>n.replace(rA,(t,e)=>e?e.toUpperCase():"")),sA=/\B([A-Z])/g,Os=zc(n=>n.replace(sA,"-$1").toLowerCase()),E_=zc(n=>n.charAt(0).toUpperCase()+n.slice(1)),uf=zc(n=>n?`on${E_(n)}`:""),Kr=(n,t)=>!Object.is(n,t),ff=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},T_=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},oA=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Hm;const A_=()=>Hm||(Hm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vr(n){if(le(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=hn(i)?uA(i):vr(i);if(s)for(const a in s)t[a]=s[a]}return t}else if(hn(n)||Ke(n))return n}const aA=/;(?![^(]*\))/g,lA=/:([^]+)/,cA=/\/\*[^]*?\*\//g;function uA(n){const t={};return n.replace(cA,"").split(aA).forEach(e=>{if(e){const i=e.split(lA);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Yh(n){let t="";if(hn(n))t=n;else if(le(n))for(let e=0;e<n.length;e++){const i=Yh(n[e]);i&&(t+=i+" ")}else if(Ke(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const fA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hA=kh(fA);function b_(n){return!!n||n===""}const w_=n=>!!(n&&n.__v_isRef===!0),$n=n=>hn(n)?n:n==null?"":le(n)||Ke(n)&&(n.toString===S_||!pe(n.toString))?w_(n)?$n(n.value):JSON.stringify(n,C_,2):String(n),C_=(n,t)=>w_(t)?C_(n,t.value):wo(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],a)=>(e[hf(i,a)+" =>"]=s,e),{})}:x_(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>hf(e))}:jr(t)?hf(t):Ke(t)&&!le(t)&&!y_(t)?String(t):t,hf=(n,t="")=>{var e;return jr(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ui;class dA{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ui,!t&&Ui&&(this.index=(Ui.scopes||(Ui.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=Ui;try{return Ui=this,t()}finally{Ui=e}}}on(){Ui=this}off(){Ui=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function pA(n,t=Ui){t&&t.active&&t.effects.push(n)}function mA(){return Ui}let Ls;class $h{constructor(t,e,i,s){this.fn=t,this.trigger=e,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,pA(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Qr();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(gA(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ts()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Xr,e=Ls;try{return Xr=!0,Ls=this,this._runnings++,Gm(this),this.fn()}finally{Vm(this),this._runnings--,Ls=e,Xr=t}}stop(){this.active&&(Gm(this),Vm(this),this.onStop&&this.onStop(),this.active=!1)}}function gA(n){return n.value}function Gm(n){n._trackId++,n._depsLength=0}function Vm(n){if(n.deps.length>n._depsLength){for(let t=n._depsLength;t<n.deps.length;t++)R_(n.deps[t],n);n.deps.length=n._depsLength}}function R_(n,t){const e=n.get(t);e!==void 0&&t._trackId!==e&&(n.delete(t),n.size===0&&n.cleanup())}let Xr=!0,Kf=0;const P_=[];function Qr(){P_.push(Xr),Xr=!1}function ts(){const n=P_.pop();Xr=n===void 0?!0:n}function Kh(){Kf++}function Zh(){for(Kf--;!Kf&&Zf.length;)Zf.shift()()}function L_(n,t,e){if(t.get(n)!==n._trackId){t.set(n,n._trackId);const i=n.deps[n._depsLength];i!==t?(i&&R_(i,n),n.deps[n._depsLength++]=t):n._depsLength++}}const Zf=[];function I_(n,t,e){Kh();for(const i of n.keys()){let s;i._dirtyLevel<t&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Zf.push(i.scheduler)))}Zh()}const D_=(n,t)=>{const e=new Map;return e.cleanup=n,e.computed=t,e},Jf=new WeakMap,Is=Symbol(""),jf=Symbol("");function jn(n,t,e){if(Xr&&Ls){let i=Jf.get(n);i||Jf.set(n,i=new Map);let s=i.get(e);s||i.set(e,s=D_(()=>i.delete(e))),L_(Ls,s)}}function Sr(n,t,e,i,s,a){const l=Jf.get(n);if(!l)return;let u=[];if(t==="clear")u=[...l.values()];else if(e==="length"&&le(n)){const f=Number(i);l.forEach((h,d)=>{(d==="length"||!jr(d)&&d>=f)&&u.push(h)})}else switch(e!==void 0&&u.push(l.get(e)),t){case"add":le(n)?qh(e)&&u.push(l.get("length")):(u.push(l.get(Is)),wo(n)&&u.push(l.get(jf)));break;case"delete":le(n)||(u.push(l.get(Is)),wo(n)&&u.push(l.get(jf)));break;case"set":wo(n)&&u.push(l.get(Is));break}Kh();for(const f of u)f&&I_(f,4);Zh()}const _A=kh("__proto__,__v_isRef,__isVue"),U_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(jr)),km=vA();function vA(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const i=Ne(this);for(let a=0,l=this.length;a<l;a++)jn(i,"get",a+"");const s=i[t](...e);return s===-1||s===!1?i[t](...e.map(Ne)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){Qr(),Kh();const i=Ne(this)[t].apply(this,e);return Zh(),ts(),i}}),n}function xA(n){jr(n)||(n=String(n));const t=Ne(this);return jn(t,"has",n),t.hasOwnProperty(n)}class N_{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const s=this._isReadonly,a=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return a;if(e==="__v_raw")return i===(s?a?IA:z_:a?B_:O_).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const l=le(t);if(!s){if(l&&we(km,e))return Reflect.get(km,e,i);if(e==="hasOwnProperty")return xA}const u=Reflect.get(t,e,i);return(jr(e)?U_.has(e):_A(e))||(s||jn(t,"get",e),a)?u:Qn(u)?l&&qh(e)?u:u.value:Ke(u)?s?H_(u):Gc(u):u}}class F_ extends N_{constructor(t=!1){super(!1,t)}set(t,e,i,s){let a=t[e];if(!this._isShallow){const f=Us(a);if(!No(i)&&!Us(i)&&(a=Ne(a),i=Ne(i)),!le(t)&&Qn(a)&&!Qn(i))return f?!1:(a.value=i,!0)}const l=le(t)&&qh(e)?Number(e)<t.length:we(t,e),u=Reflect.set(t,e,i,s);return t===Ne(s)&&(l?Kr(i,a)&&Sr(t,"set",e,i):Sr(t,"add",e,i)),u}deleteProperty(t,e){const i=we(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Sr(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!jr(e)||!U_.has(e))&&jn(t,"has",e),i}ownKeys(t){return jn(t,"iterate",le(t)?"length":Is),Reflect.ownKeys(t)}}class MA extends N_{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const SA=new F_,yA=new MA,EA=new F_(!0);const Jh=n=>n,Hc=n=>Reflect.getPrototypeOf(n);function Dl(n,t,e=!1,i=!1){n=n.__v_raw;const s=Ne(n),a=Ne(t);e||(Kr(t,a)&&jn(s,"get",t),jn(s,"get",a));const{has:l}=Hc(s),u=i?Jh:e?td:wa;if(l.call(s,t))return u(n.get(t));if(l.call(s,a))return u(n.get(a));n!==s&&n.get(t)}function Ul(n,t=!1){const e=this.__v_raw,i=Ne(e),s=Ne(n);return t||(Kr(n,s)&&jn(i,"has",n),jn(i,"has",s)),n===s?e.has(n):e.has(n)||e.has(s)}function Nl(n,t=!1){return n=n.__v_raw,!t&&jn(Ne(n),"iterate",Is),Reflect.get(n,"size",n)}function Wm(n,t=!1){!t&&!No(n)&&!Us(n)&&(n=Ne(n));const e=Ne(this);return Hc(e).has.call(e,n)||(e.add(n),Sr(e,"add",n,n)),this}function Xm(n,t,e=!1){!e&&!No(t)&&!Us(t)&&(t=Ne(t));const i=Ne(this),{has:s,get:a}=Hc(i);let l=s.call(i,n);l||(n=Ne(n),l=s.call(i,n));const u=a.call(i,n);return i.set(n,t),l?Kr(t,u)&&Sr(i,"set",n,t):Sr(i,"add",n,t),this}function qm(n){const t=Ne(this),{has:e,get:i}=Hc(t);let s=e.call(t,n);s||(n=Ne(n),s=e.call(t,n)),i&&i.call(t,n);const a=t.delete(n);return s&&Sr(t,"delete",n,void 0),a}function Ym(){const n=Ne(this),t=n.size!==0,e=n.clear();return t&&Sr(n,"clear",void 0,void 0),e}function Fl(n,t){return function(i,s){const a=this,l=a.__v_raw,u=Ne(l),f=t?Jh:n?td:wa;return!n&&jn(u,"iterate",Is),l.forEach((h,d)=>i.call(s,f(h),f(d),a))}}function Ol(n,t,e){return function(...i){const s=this.__v_raw,a=Ne(s),l=wo(a),u=n==="entries"||n===Symbol.iterator&&l,f=n==="keys"&&l,h=s[n](...i),d=e?Jh:t?td:wa;return!t&&jn(a,"iterate",f?jf:Is),{next(){const{value:g,done:m}=h.next();return m?{value:g,done:m}:{value:u?[d(g[0]),d(g[1])]:d(g),done:m}},[Symbol.iterator](){return this}}}}function Ur(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function TA(){const n={get(a){return Dl(this,a)},get size(){return Nl(this)},has:Ul,add:Wm,set:Xm,delete:qm,clear:Ym,forEach:Fl(!1,!1)},t={get(a){return Dl(this,a,!1,!0)},get size(){return Nl(this)},has:Ul,add(a){return Wm.call(this,a,!0)},set(a,l){return Xm.call(this,a,l,!0)},delete:qm,clear:Ym,forEach:Fl(!1,!0)},e={get(a){return Dl(this,a,!0)},get size(){return Nl(this,!0)},has(a){return Ul.call(this,a,!0)},add:Ur("add"),set:Ur("set"),delete:Ur("delete"),clear:Ur("clear"),forEach:Fl(!0,!1)},i={get(a){return Dl(this,a,!0,!0)},get size(){return Nl(this,!0)},has(a){return Ul.call(this,a,!0)},add:Ur("add"),set:Ur("set"),delete:Ur("delete"),clear:Ur("clear"),forEach:Fl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{n[a]=Ol(a,!1,!1),e[a]=Ol(a,!0,!1),t[a]=Ol(a,!1,!0),i[a]=Ol(a,!0,!0)}),[n,e,t,i]}const[AA,bA,wA,CA]=TA();function jh(n,t){const e=t?n?CA:wA:n?bA:AA;return(i,s,a)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(we(e,s)&&s in i?e:i,s,a)}const RA={get:jh(!1,!1)},PA={get:jh(!1,!0)},LA={get:jh(!0,!1)};const O_=new WeakMap,B_=new WeakMap,z_=new WeakMap,IA=new WeakMap;function DA(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function UA(n){return n.__v_skip||!Object.isExtensible(n)?0:DA(iA(n))}function Gc(n){return Us(n)?n:Qh(n,!1,SA,RA,O_)}function NA(n){return Qh(n,!1,EA,PA,B_)}function H_(n){return Qh(n,!0,yA,LA,z_)}function Qh(n,t,e,i,s){if(!Ke(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const a=s.get(n);if(a)return a;const l=UA(n);if(l===0)return n;const u=new Proxy(n,l===2?i:e);return s.set(n,u),u}function Ea(n){return Us(n)?Ea(n.__v_raw):!!(n&&n.__v_isReactive)}function Us(n){return!!(n&&n.__v_isReadonly)}function No(n){return!!(n&&n.__v_isShallow)}function G_(n){return n?!!n.__v_raw:!1}function Ne(n){const t=n&&n.__v_raw;return t?Ne(t):n}function FA(n){return Object.isExtensible(n)&&T_(n,"__v_skip",!0),n}const wa=n=>Ke(n)?Gc(n):n,td=n=>Ke(n)?H_(n):n;class V_{constructor(t,e,i,s){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new $h(()=>t(this._value),()=>hc(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=Ne(this);return(!t._cacheable||t.effect.dirty)&&Kr(t._value,t._value=t.effect.run())&&hc(t,4),k_(t),t.effect._dirtyLevel>=2&&hc(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function OA(n,t,e=!1){let i,s;const a=pe(n);return a?(i=n,s=Ei):(i=n.get,s=n.set),new V_(i,s,a||!s,e)}function k_(n){var t;Xr&&Ls&&(n=Ne(n),L_(Ls,(t=n.dep)!=null?t:n.dep=D_(()=>n.dep=void 0,n instanceof V_?n:void 0)))}function hc(n,t=4,e,i){n=Ne(n);const s=n.dep;s&&I_(s,t)}function Qn(n){return!!(n&&n.__v_isRef===!0)}function Be(n){return BA(n,!1)}function BA(n,t){return Qn(n)?n:new zA(n,t)}class zA{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Ne(t),this._value=e?t:wa(t)}get value(){return k_(this),this._value}set value(t){const e=this.__v_isShallow||No(t)||Us(t);t=e?t:Ne(t),Kr(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=e?t:wa(t),hc(this,4))}}function Se(n){return Qn(n)?n.value:n}const HA={get:(n,t,e)=>Se(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Qn(s)&&!Qn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function W_(n){return Ea(n)?n:new Proxy(n,HA)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qr(n,t,e,i){try{return i?n(...i):n()}catch(s){Vc(s,t,e)}}function Bi(n,t,e,i){if(pe(n)){const s=qr(n,t,e,i);return s&&M_(s)&&s.catch(a=>{Vc(a,t,e)}),s}if(le(n)){const s=[];for(let a=0;a<n.length;a++)s.push(Bi(n[a],t,e,i));return s}}function Vc(n,t,e,i=!0){const s=t?t.vnode:null;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](n,l,u)===!1)return}a=a.parent}const f=t.appContext.config.errorHandler;if(f){Qr(),qr(f,null,10,[n,l,u]),ts();return}}GA(n,e,s,i)}function GA(n,t,e,i=!0){console.error(n)}let Ca=!1,Qf=!1;const wn=[];let Zi=0;const Co=[];let Gr=null,Ts=0;const X_=Promise.resolve();let ed=null;function kc(n){const t=ed||X_;return n?t.then(this?n.bind(this):n):t}function VA(n){let t=Zi+1,e=wn.length;for(;t<e;){const i=t+e>>>1,s=wn[i],a=Ra(s);a<n||a===n&&s.pre?t=i+1:e=i}return t}function nd(n){(!wn.length||!wn.includes(n,Ca&&n.allowRecurse?Zi+1:Zi))&&(n.id==null?wn.push(n):wn.splice(VA(n.id),0,n),q_())}function q_(){!Ca&&!Qf&&(Qf=!0,ed=X_.then($_))}function kA(n){const t=wn.indexOf(n);t>Zi&&wn.splice(t,1)}function WA(n){le(n)?Co.push(...n):(!Gr||!Gr.includes(n,n.allowRecurse?Ts+1:Ts))&&Co.push(n),q_()}function $m(n,t,e=Ca?Zi+1:0){for(;e<wn.length;e++){const i=wn[e];if(i&&i.pre){if(n&&i.id!==n.uid)continue;wn.splice(e,1),e--,i()}}}function Y_(n){if(Co.length){const t=[...new Set(Co)].sort((e,i)=>Ra(e)-Ra(i));if(Co.length=0,Gr){Gr.push(...t);return}for(Gr=t,Ts=0;Ts<Gr.length;Ts++){const e=Gr[Ts];e.active!==!1&&e()}Gr=null,Ts=0}}const Ra=n=>n.id==null?1/0:n.id,XA=(n,t)=>{const e=Ra(n)-Ra(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function $_(n){Qf=!1,Ca=!0,wn.sort(XA);try{for(Zi=0;Zi<wn.length;Zi++){const t=wn[Zi];t&&t.active!==!1&&qr(t,t.i,t.i?15:14)}}finally{Zi=0,wn.length=0,Y_(),Ca=!1,ed=null,(wn.length||Co.length)&&$_()}}let ji=null,Wc=null;function Ec(n){const t=ji;return ji=n,Wc=n&&n.type.__scopeId||null,t}function K_(n){Wc=n}function Z_(){Wc=null}function qA(n,t=ji,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ng(-1);const a=Ec(t);let l;try{l=n(...s)}finally{Ec(a),i._d&&ng(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function ds(n,t,e,i){const s=n.dirs,a=t&&t.dirs;for(let l=0;l<s.length;l++){const u=s[l];a&&(u.oldValue=a[l].value);let f=u.dir[i];f&&(Qr(),Bi(f,e,8,[n.el,u,n,t]),ts())}}function J_(n,t){n.shapeFlag&6&&n.component?J_(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}const dc=n=>!!n.type.__asyncLoader,j_=n=>n.type.__isKeepAlive;function YA(n,t){Q_(n,"a",t)}function $A(n,t){Q_(n,"da",t)}function Q_(n,t,e=Nn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Xc(t,i,e),e){let s=e.parent;for(;s&&s.parent;)j_(s.parent.vnode)&&KA(i,t,e,s),s=s.parent}}function KA(n,t,e,i){const s=Xc(t,n,i,!0);t0(()=>{Xh(i[t],s)},e)}function Xc(n,t,e=Nn,i=!1){if(e){const s=e[n]||(e[n]=[]),a=t.__weh||(t.__weh=(...l)=>{Qr();const u=Ua(e),f=Bi(t,e,n,l);return u(),ts(),f});return i?s.unshift(a):s.push(a),a}}const Er=n=>(t,e=Nn)=>{(!$c||n==="sp")&&Xc(n,(...i)=>t(...i),e)},ZA=Er("bm"),es=Er("m"),JA=Er("bu"),jA=Er("u"),id=Er("bum"),t0=Er("um"),QA=Er("sp"),tb=Er("rtg"),eb=Er("rtc");function nb(n,t=Nn){Xc("ec",n,t)}const ib=Symbol.for("v-ndc");function va(n,t,e,i){let s;const a=e;if(le(n)||hn(n)){s=new Array(n.length);for(let l=0,u=n.length;l<u;l++)s[l]=t(n[l],l,void 0,a)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=t(l+1,l,void 0,a)}else if(Ke(n))if(n[Symbol.iterator])s=Array.from(n,(l,u)=>t(l,u,void 0,a));else{const l=Object.keys(n);s=new Array(l.length);for(let u=0,f=l.length;u<f;u++){const h=l[u];s[u]=t(n[h],h,u,a)}}else s=[];return s}const th=n=>n?_0(n)?ld(n):th(n.parent):null,Ta=On(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>th(n.parent),$root:n=>th(n.root),$emit:n=>n.emit,$options:n=>rd(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,nd(n.update)}),$nextTick:n=>n.n||(n.n=kc.bind(n.proxy)),$watch:n=>Cb.bind(n)}),df=(n,t)=>n!==$e&&!n.__isScriptSetup&&we(n,t),rb={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:a,accessCache:l,type:u,appContext:f}=n;let h;if(t[0]!=="$"){const x=l[t];if(x!==void 0)switch(x){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return a[t]}else{if(df(i,t))return l[t]=1,i[t];if(s!==$e&&we(s,t))return l[t]=2,s[t];if((h=n.propsOptions[0])&&we(h,t))return l[t]=3,a[t];if(e!==$e&&we(e,t))return l[t]=4,e[t];eh&&(l[t]=0)}}const d=Ta[t];let g,m;if(d)return t==="$attrs"&&jn(n.attrs,"get",""),d(n);if((g=u.__cssModules)&&(g=g[t]))return g;if(e!==$e&&we(e,t))return l[t]=4,e[t];if(m=f.config.globalProperties,we(m,t))return m[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:a}=n;return df(s,t)?(s[t]=e,!0):i!==$e&&we(i,t)?(i[t]=e,!0):we(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(a[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:a}},l){let u;return!!e[l]||n!==$e&&we(n,l)||df(t,l)||(u=a[0])&&we(u,l)||we(i,l)||we(Ta,l)||we(s.config.globalProperties,l)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:we(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Km(n){return le(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let eh=!0;function sb(n){const t=rd(n),e=n.proxy,i=n.ctx;eh=!1,t.beforeCreate&&Zm(t.beforeCreate,n,"bc");const{data:s,computed:a,methods:l,watch:u,provide:f,inject:h,created:d,beforeMount:g,mounted:m,beforeUpdate:x,updated:M,activated:E,deactivated:v,beforeDestroy:_,beforeUnmount:P,destroyed:A,unmounted:I,render:$,renderTracked:F,renderTriggered:B,errorCaptured:j,serverPrefetch:L,expose:R,inheritAttrs:G,components:ft,directives:ot,filters:vt}=t;if(h&&ob(h,i,null),l)for(const at in l){const Q=l[at];pe(Q)&&(i[at]=Q.bind(e))}if(s){const at=s.call(e,e);Ke(at)&&(n.data=Gc(at))}if(eh=!0,a)for(const at in a){const Q=a[at],Pt=pe(Q)?Q.bind(e,e):pe(Q.get)?Q.get.bind(e,e):Ei,Ot=!pe(Q)&&pe(Q.set)?Q.set.bind(e):Ei,Lt=yi({get:Pt,set:Ot});Object.defineProperty(i,at,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:ie=>Lt.value=ie})}if(u)for(const at in u)e0(u[at],i,e,at);if(f){const at=pe(f)?f.call(e):f;Reflect.ownKeys(at).forEach(Q=>{hb(Q,at[Q])})}d&&Zm(d,n,"c");function ct(at,Q){le(Q)?Q.forEach(Pt=>at(Pt.bind(e))):Q&&at(Q.bind(e))}if(ct(ZA,g),ct(es,m),ct(JA,x),ct(jA,M),ct(YA,E),ct($A,v),ct(nb,j),ct(eb,F),ct(tb,B),ct(id,P),ct(t0,I),ct(QA,L),le(R))if(R.length){const at=n.exposed||(n.exposed={});R.forEach(Q=>{Object.defineProperty(at,Q,{get:()=>e[Q],set:Pt=>e[Q]=Pt})})}else n.exposed||(n.exposed={});$&&n.render===Ei&&(n.render=$),G!=null&&(n.inheritAttrs=G),ft&&(n.components=ft),ot&&(n.directives=ot)}function ob(n,t,e=Ei){le(n)&&(n=nh(n));for(const i in n){const s=n[i];let a;Ke(s)?"default"in s?a=pc(s.from||i,s.default,!0):a=pc(s.from||i):a=pc(s),Qn(a)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[i]=a}}function Zm(n,t,e){Bi(le(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function e0(n,t,e,i){const s=i.includes(".")?p0(e,i):()=>e[i];if(hn(n)){const a=t[n];pe(a)&&mf(s,a)}else if(pe(n))mf(s,n.bind(e));else if(Ke(n))if(le(n))n.forEach(a=>e0(a,t,e,i));else{const a=pe(n.handler)?n.handler.bind(e):t[n.handler];pe(a)&&mf(s,a,n)}}function rd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:a,config:{optionMergeStrategies:l}}=n.appContext,u=a.get(t);let f;return u?f=u:!s.length&&!e&&!i?f=t:(f={},s.length&&s.forEach(h=>Tc(f,h,l,!0)),Tc(f,t,l)),Ke(t)&&a.set(t,f),f}function Tc(n,t,e,i=!1){const{mixins:s,extends:a}=t;a&&Tc(n,a,e,!0),s&&s.forEach(l=>Tc(n,l,e,!0));for(const l in t)if(!(i&&l==="expose")){const u=ab[l]||e&&e[l];n[l]=u?u(n[l],t[l]):t[l]}return n}const ab={data:Jm,props:jm,emits:jm,methods:xa,computed:xa,beforeCreate:In,created:In,beforeMount:In,mounted:In,beforeUpdate:In,updated:In,beforeDestroy:In,beforeUnmount:In,destroyed:In,unmounted:In,activated:In,deactivated:In,errorCaptured:In,serverPrefetch:In,components:xa,directives:xa,watch:cb,provide:Jm,inject:lb};function Jm(n,t){return t?n?function(){return On(pe(n)?n.call(this,this):n,pe(t)?t.call(this,this):t)}:t:n}function lb(n,t){return xa(nh(n),nh(t))}function nh(n){if(le(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function In(n,t){return n?[...new Set([].concat(n,t))]:t}function xa(n,t){return n?On(Object.create(null),n,t):t}function jm(n,t){return n?le(n)&&le(t)?[...new Set([...n,...t])]:On(Object.create(null),Km(n),Km(t??{})):t}function cb(n,t){if(!n)return t;if(!t)return n;const e=On(Object.create(null),n);for(const i in t)e[i]=In(n[i],t[i]);return e}function n0(){return{app:null,config:{isNativeTag:eA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ub=0;function fb(n,t){return function(i,s=null){pe(i)||(i=On({},i)),s!=null&&!Ke(s)&&(s=null);const a=n0(),l=new WeakSet;let u=!1;const f=a.app={_uid:ub++,_component:i,_props:s,_container:null,_context:a,_instance:null,version:jb,get config(){return a.config},set config(h){},use(h,...d){return l.has(h)||(h&&pe(h.install)?(l.add(h),h.install(f,...d)):pe(h)&&(l.add(h),h(f,...d))),f},mixin(h){return a.mixins.includes(h)||a.mixins.push(h),f},component(h,d){return d?(a.components[h]=d,f):a.components[h]},directive(h,d){return d?(a.directives[h]=d,f):a.directives[h]},mount(h,d,g){if(!u){const m=Sn(i,s);return m.appContext=a,g===!0?g="svg":g===!1&&(g=void 0),d&&t?t(m,h):n(m,h,g),u=!0,f._container=h,h.__vue_app__=f,ld(m.component)}},unmount(){u&&(n(null,f._container),delete f._container.__vue_app__)},provide(h,d){return a.provides[h]=d,f},runWithContext(h){const d=Ro;Ro=f;try{return h()}finally{Ro=d}}};return f}}let Ro=null;function hb(n,t){if(Nn){let e=Nn.provides;const i=Nn.parent&&Nn.parent.provides;i===e&&(e=Nn.provides=Object.create(i)),e[n]=t}}function pc(n,t,e=!1){const i=Nn||ji;if(i||Ro){const s=Ro?Ro._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&pe(t)?t.call(i&&i.proxy):t}}const i0={},r0=()=>Object.create(i0),s0=n=>Object.getPrototypeOf(n)===i0;function db(n,t,e,i=!1){const s={},a=r0();n.propsDefaults=Object.create(null),o0(n,t,s,a);for(const l in n.propsOptions[0])l in s||(s[l]=void 0);e?n.props=i?s:NA(s):n.type.props?n.props=s:n.props=a,n.attrs=a}function pb(n,t,e,i){const{props:s,attrs:a,vnode:{patchFlag:l}}=n,u=Ne(s),[f]=n.propsOptions;let h=!1;if((i||l>0)&&!(l&16)){if(l&8){const d=n.vnode.dynamicProps;for(let g=0;g<d.length;g++){let m=d[g];if(qc(n.emitsOptions,m))continue;const x=t[m];if(f)if(we(a,m))x!==a[m]&&(a[m]=x,h=!0);else{const M=Ds(m);s[M]=ih(f,u,M,x,n,!1)}else x!==a[m]&&(a[m]=x,h=!0)}}}else{o0(n,t,s,a)&&(h=!0);let d;for(const g in u)(!t||!we(t,g)&&((d=Os(g))===g||!we(t,d)))&&(f?e&&(e[g]!==void 0||e[d]!==void 0)&&(s[g]=ih(f,u,g,void 0,n,!0)):delete s[g]);if(a!==u)for(const g in a)(!t||!we(t,g))&&(delete a[g],h=!0)}h&&Sr(n.attrs,"set","")}function o0(n,t,e,i){const[s,a]=n.propsOptions;let l=!1,u;if(t)for(let f in t){if(ya(f))continue;const h=t[f];let d;s&&we(s,d=Ds(f))?!a||!a.includes(d)?e[d]=h:(u||(u={}))[d]=h:qc(n.emitsOptions,f)||(!(f in i)||h!==i[f])&&(i[f]=h,l=!0)}if(a){const f=Ne(e),h=u||$e;for(let d=0;d<a.length;d++){const g=a[d];e[g]=ih(s,f,g,h[g],n,!we(h,g))}}return l}function ih(n,t,e,i,s,a){const l=n[e];if(l!=null){const u=we(l,"default");if(u&&i===void 0){const f=l.default;if(l.type!==Function&&!l.skipFactory&&pe(f)){const{propsDefaults:h}=s;if(e in h)i=h[e];else{const d=Ua(s);i=h[e]=f.call(null,t),d()}}else i=f}l[0]&&(a&&!u?i=!1:l[1]&&(i===""||i===Os(e))&&(i=!0))}return i}const mb=new WeakMap;function a0(n,t,e=!1){const i=e?mb:t.propsCache,s=i.get(n);if(s)return s;const a=n.props,l={},u=[];let f=!1;if(!pe(n)){const d=g=>{f=!0;const[m,x]=a0(g,t,!0);On(l,m),x&&u.push(...x)};!e&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!a&&!f)return Ke(n)&&i.set(n,bo),bo;if(le(a))for(let d=0;d<a.length;d++){const g=Ds(a[d]);Qm(g)&&(l[g]=$e)}else if(a)for(const d in a){const g=Ds(d);if(Qm(g)){const m=a[d],x=l[g]=le(m)||pe(m)?{type:m}:On({},m),M=x.type;let E=!1,v=!0;if(le(M))for(let _=0;_<M.length;++_){const P=M[_],A=pe(P)&&P.name;if(A==="Boolean"){E=!0;break}else A==="String"&&(v=!1)}else E=pe(M)&&M.name==="Boolean";x[0]=E,x[1]=v,(E||we(x,"default"))&&u.push(g)}}const h=[l,u];return Ke(n)&&i.set(n,h),h}function Qm(n){return n[0]!=="$"&&!ya(n)}const l0=n=>n[0]==="_"||n==="$stable",sd=n=>le(n)?n.map($i):[$i(n)],gb=(n,t,e)=>{if(t._n)return t;const i=qA((...s)=>sd(t(...s)),e);return i._c=!1,i},c0=(n,t,e)=>{const i=n._ctx;for(const s in n){if(l0(s))continue;const a=n[s];if(pe(a))t[s]=gb(s,a,i);else if(a!=null){const l=sd(a);t[s]=()=>l}}},u0=(n,t)=>{const e=sd(t);n.slots.default=()=>e},f0=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},_b=(n,t,e)=>{const i=n.slots=r0();if(n.vnode.shapeFlag&32){const s=t._;s?(f0(i,t,e),e&&T_(i,"_",s,!0)):c0(t,i)}else t&&u0(n,t)},vb=(n,t,e)=>{const{vnode:i,slots:s}=n;let a=!0,l=$e;if(i.shapeFlag&32){const u=t._;u?e&&u===1?a=!1:f0(s,t,e):(a=!t.$stable,c0(t,s)),l=t}else t&&(u0(n,t),l={default:1});if(a)for(const u in s)!l0(u)&&l[u]==null&&delete s[u]};function rh(n,t,e,i,s=!1){if(le(n)){n.forEach((m,x)=>rh(m,t&&(le(t)?t[x]:t),e,i,s));return}if(dc(i)&&!s)return;const a=i.shapeFlag&4?ld(i.component):i.el,l=s?null:a,{i:u,r:f}=n,h=t&&t.r,d=u.refs===$e?u.refs={}:u.refs,g=u.setupState;if(h!=null&&h!==f&&(hn(h)?(d[h]=null,we(g,h)&&(g[h]=null)):Qn(h)&&(h.value=null)),pe(f))qr(f,u,12,[l,d]);else{const m=hn(f),x=Qn(f);if(m||x){const M=()=>{if(n.f){const E=m?we(g,f)?g[f]:d[f]:f.value;s?le(E)&&Xh(E,a):le(E)?E.includes(a)||E.push(a):m?(d[f]=[a],we(g,f)&&(g[f]=d[f])):(f.value=[a],n.k&&(d[n.k]=f.value))}else m?(d[f]=l,we(g,f)&&(g[f]=l)):x&&(f.value=l,n.k&&(d[n.k]=l))};l?(M.id=-1,Xn(M,e)):M()}}}const xb=Symbol("_vte"),Mb=n=>n.__isTeleport,Xn=Fb;function Sb(n){return yb(n)}function yb(n,t){const e=A_();e.__VUE__=!0;const{insert:i,remove:s,patchProp:a,createElement:l,createText:u,createComment:f,setText:h,setElementText:d,parentNode:g,nextSibling:m,setScopeId:x=Ei,insertStaticContent:M}=n,E=(D,O,J,tt=null,lt=null,st=null,dt=void 0,w=null,S=!!O.dynamicChildren)=>{if(D===O)return;D&&!ca(D,O)&&(tt=Ht(D),ie(D,lt,st,!0),D=null),O.patchFlag===-2&&(S=!1,O.dynamicChildren=null);const{type:N,ref:K,shapeFlag:et}=O;switch(N){case Yc:v(D,O,J,tt);break;case Pa:_(D,O,J,tt);break;case _f:D==null&&P(O,J,tt,dt);break;case bn:ft(D,O,J,tt,lt,st,dt,w,S);break;default:et&1?$(D,O,J,tt,lt,st,dt,w,S):et&6?ot(D,O,J,tt,lt,st,dt,w,S):(et&64||et&128)&&N.process(D,O,J,tt,lt,st,dt,w,S,oe)}K!=null&&lt&&rh(K,D&&D.ref,st,O||D,!O)},v=(D,O,J,tt)=>{if(D==null)i(O.el=u(O.children),J,tt);else{const lt=O.el=D.el;O.children!==D.children&&h(lt,O.children)}},_=(D,O,J,tt)=>{D==null?i(O.el=f(O.children||""),J,tt):O.el=D.el},P=(D,O,J,tt)=>{[D.el,D.anchor]=M(D.children,O,J,tt,D.el,D.anchor)},A=({el:D,anchor:O},J,tt)=>{let lt;for(;D&&D!==O;)lt=m(D),i(D,J,tt),D=lt;i(O,J,tt)},I=({el:D,anchor:O})=>{let J;for(;D&&D!==O;)J=m(D),s(D),D=J;s(O)},$=(D,O,J,tt,lt,st,dt,w,S)=>{O.type==="svg"?dt="svg":O.type==="math"&&(dt="mathml"),D==null?F(O,J,tt,lt,st,dt,w,S):L(D,O,lt,st,dt,w,S)},F=(D,O,J,tt,lt,st,dt,w)=>{let S,N;const{props:K,shapeFlag:et,transition:Z,dirs:Tt}=D;if(S=D.el=l(D.type,st,K&&K.is,K),et&8?d(S,D.children):et&16&&j(D.children,S,null,tt,lt,pf(D,st),dt,w),Tt&&ds(D,null,tt,"created"),B(S,D,D.scopeId,dt,tt),K){for(const Et in K)Et!=="value"&&!ya(Et)&&a(S,Et,null,K[Et],st,tt);"value"in K&&a(S,"value",null,K.value,st),(N=K.onVnodeBeforeMount)&&Wi(N,tt,D)}Tt&&ds(D,null,tt,"beforeMount");const pt=Eb(lt,Z);pt&&Z.beforeEnter(S),i(S,O,J),((N=K&&K.onVnodeMounted)||pt||Tt)&&Xn(()=>{N&&Wi(N,tt,D),pt&&Z.enter(S),Tt&&ds(D,null,tt,"mounted")},lt)},B=(D,O,J,tt,lt)=>{if(J&&x(D,J),tt)for(let st=0;st<tt.length;st++)x(D,tt[st]);if(lt){let st=lt.subTree;if(O===st){const dt=lt.vnode;B(D,dt,dt.scopeId,dt.slotScopeIds,lt.parent)}}},j=(D,O,J,tt,lt,st,dt,w,S=0)=>{for(let N=S;N<D.length;N++){const K=D[N]=w?Vr(D[N]):$i(D[N]);E(null,K,O,J,tt,lt,st,dt,w)}},L=(D,O,J,tt,lt,st,dt)=>{const w=O.el=D.el;let{patchFlag:S,dynamicChildren:N,dirs:K}=O;S|=D.patchFlag&16;const et=D.props||$e,Z=O.props||$e;let Tt;if(J&&ps(J,!1),(Tt=Z.onVnodeBeforeUpdate)&&Wi(Tt,J,O,D),K&&ds(O,D,J,"beforeUpdate"),J&&ps(J,!0),(et.innerHTML&&Z.innerHTML==null||et.textContent&&Z.textContent==null)&&d(w,""),N?R(D.dynamicChildren,N,w,J,tt,pf(O,lt),st):dt||Q(D,O,w,null,J,tt,pf(O,lt),st,!1),S>0){if(S&16)G(w,et,Z,J,lt);else if(S&2&&et.class!==Z.class&&a(w,"class",null,Z.class,lt),S&4&&a(w,"style",et.style,Z.style,lt),S&8){const pt=O.dynamicProps;for(let Et=0;Et<pt.length;Et++){const It=pt[Et],St=et[It],Rt=Z[It];(Rt!==St||It==="value")&&a(w,It,St,Rt,lt,J)}}S&1&&D.children!==O.children&&d(w,O.children)}else!dt&&N==null&&G(w,et,Z,J,lt);((Tt=Z.onVnodeUpdated)||K)&&Xn(()=>{Tt&&Wi(Tt,J,O,D),K&&ds(O,D,J,"updated")},tt)},R=(D,O,J,tt,lt,st,dt)=>{for(let w=0;w<O.length;w++){const S=D[w],N=O[w],K=S.el&&(S.type===bn||!ca(S,N)||S.shapeFlag&70)?g(S.el):J;E(S,N,K,null,tt,lt,st,dt,!0)}},G=(D,O,J,tt,lt)=>{if(O!==J){if(O!==$e)for(const st in O)!ya(st)&&!(st in J)&&a(D,st,O[st],null,lt,tt);for(const st in J){if(ya(st))continue;const dt=J[st],w=O[st];dt!==w&&st!=="value"&&a(D,st,w,dt,lt,tt)}"value"in J&&a(D,"value",O.value,J.value,lt)}},ft=(D,O,J,tt,lt,st,dt,w,S)=>{const N=O.el=D?D.el:u(""),K=O.anchor=D?D.anchor:u("");let{patchFlag:et,dynamicChildren:Z,slotScopeIds:Tt}=O;Tt&&(w=w?w.concat(Tt):Tt),D==null?(i(N,J,tt),i(K,J,tt),j(O.children||[],J,K,lt,st,dt,w,S)):et>0&&et&64&&Z&&D.dynamicChildren?(R(D.dynamicChildren,Z,J,lt,st,dt,w),(O.key!=null||lt&&O===lt.subTree)&&h0(D,O,!0)):Q(D,O,J,K,lt,st,dt,w,S)},ot=(D,O,J,tt,lt,st,dt,w,S)=>{O.slotScopeIds=w,D==null?O.shapeFlag&512?lt.ctx.activate(O,J,tt,dt,S):vt(O,J,tt,lt,st,dt,S):Mt(D,O,S)},vt=(D,O,J,tt,lt,st,dt)=>{const w=D.component=qb(D,tt,lt);if(j_(D)&&(w.ctx.renderer=oe),Yb(w,!1,dt),w.asyncDep){if(lt&&lt.registerDep(w,ct,dt),!D.el){const S=w.subTree=Sn(Pa);_(null,S,O,J)}}else ct(w,D,O,J,lt,st,dt)},Mt=(D,O,J)=>{const tt=O.component=D.component;if(Db(D,O,J))if(tt.asyncDep&&!tt.asyncResolved){at(tt,O,J);return}else tt.next=O,kA(tt.update),tt.effect.dirty=!0,tt.update();else O.el=D.el,tt.vnode=O},ct=(D,O,J,tt,lt,st,dt)=>{const w=()=>{if(D.isMounted){let{next:K,bu:et,u:Z,parent:Tt,vnode:pt}=D;{const se=d0(D);if(se){K&&(K.el=pt.el,at(D,K,dt)),se.asyncDep.then(()=>{D.isUnmounted||w()});return}}let Et=K,It;ps(D,!1),K?(K.el=pt.el,at(D,K,dt)):K=pt,et&&ff(et),(It=K.props&&K.props.onVnodeBeforeUpdate)&&Wi(It,Tt,K,pt),ps(D,!0);const St=gf(D),Rt=D.subTree;D.subTree=St,E(Rt,St,g(Rt.el),Ht(Rt),D,lt,st),K.el=St.el,Et===null&&Ub(D,St.el),Z&&Xn(Z,lt),(It=K.props&&K.props.onVnodeUpdated)&&Xn(()=>Wi(It,Tt,K,pt),lt)}else{let K;const{el:et,props:Z}=O,{bm:Tt,m:pt,parent:Et}=D,It=dc(O);if(ps(D,!1),Tt&&ff(Tt),!It&&(K=Z&&Z.onVnodeBeforeMount)&&Wi(K,Et,O),ps(D,!0),et&&z){const St=()=>{D.subTree=gf(D),z(et,D.subTree,D,lt,null)};It?O.type.__asyncLoader().then(()=>!D.isUnmounted&&St()):St()}else{const St=D.subTree=gf(D);E(null,St,J,tt,D,lt,st),O.el=St.el}if(pt&&Xn(pt,lt),!It&&(K=Z&&Z.onVnodeMounted)){const St=O;Xn(()=>Wi(K,Et,St),lt)}(O.shapeFlag&256||Et&&dc(Et.vnode)&&Et.vnode.shapeFlag&256)&&D.a&&Xn(D.a,lt),D.isMounted=!0,O=J=tt=null}},S=D.effect=new $h(w,Ei,()=>nd(N),D.scope),N=D.update=()=>{S.dirty&&S.run()};N.i=D,N.id=D.uid,ps(D,!0),N()},at=(D,O,J)=>{O.component=D;const tt=D.vnode.props;D.vnode=O,D.next=null,pb(D,O.props,tt,J),vb(D,O.children,J),Qr(),$m(D),ts()},Q=(D,O,J,tt,lt,st,dt,w,S=!1)=>{const N=D&&D.children,K=D?D.shapeFlag:0,et=O.children,{patchFlag:Z,shapeFlag:Tt}=O;if(Z>0){if(Z&128){Ot(N,et,J,tt,lt,st,dt,w,S);return}else if(Z&256){Pt(N,et,J,tt,lt,st,dt,w,S);return}}Tt&8?(K&16&&zt(N,lt,st),et!==N&&d(J,et)):K&16?Tt&16?Ot(N,et,J,tt,lt,st,dt,w,S):zt(N,lt,st,!0):(K&8&&d(J,""),Tt&16&&j(et,J,tt,lt,st,dt,w,S))},Pt=(D,O,J,tt,lt,st,dt,w,S)=>{D=D||bo,O=O||bo;const N=D.length,K=O.length,et=Math.min(N,K);let Z;for(Z=0;Z<et;Z++){const Tt=O[Z]=S?Vr(O[Z]):$i(O[Z]);E(D[Z],Tt,J,null,lt,st,dt,w,S)}N>K?zt(D,lt,st,!0,!1,et):j(O,J,tt,lt,st,dt,w,S,et)},Ot=(D,O,J,tt,lt,st,dt,w,S)=>{let N=0;const K=O.length;let et=D.length-1,Z=K-1;for(;N<=et&&N<=Z;){const Tt=D[N],pt=O[N]=S?Vr(O[N]):$i(O[N]);if(ca(Tt,pt))E(Tt,pt,J,null,lt,st,dt,w,S);else break;N++}for(;N<=et&&N<=Z;){const Tt=D[et],pt=O[Z]=S?Vr(O[Z]):$i(O[Z]);if(ca(Tt,pt))E(Tt,pt,J,null,lt,st,dt,w,S);else break;et--,Z--}if(N>et){if(N<=Z){const Tt=Z+1,pt=Tt<K?O[Tt].el:tt;for(;N<=Z;)E(null,O[N]=S?Vr(O[N]):$i(O[N]),J,pt,lt,st,dt,w,S),N++}}else if(N>Z)for(;N<=et;)ie(D[N],lt,st,!0),N++;else{const Tt=N,pt=N,Et=new Map;for(N=pt;N<=Z;N++){const qt=O[N]=S?Vr(O[N]):$i(O[N]);qt.key!=null&&Et.set(qt.key,N)}let It,St=0;const Rt=Z-pt+1;let se=!1,Yt=0;const Bt=new Array(Rt);for(N=0;N<Rt;N++)Bt[N]=0;for(N=Tt;N<=et;N++){const qt=D[N];if(St>=Rt){ie(qt,lt,st,!0);continue}let ge;if(qt.key!=null)ge=Et.get(qt.key);else for(It=pt;It<=Z;It++)if(Bt[It-pt]===0&&ca(qt,O[It])){ge=It;break}ge===void 0?ie(qt,lt,st,!0):(Bt[ge-pt]=N+1,ge>=Yt?Yt=ge:se=!0,E(qt,O[ge],J,null,lt,st,dt,w,S),St++)}const Jt=se?Tb(Bt):bo;for(It=Jt.length-1,N=Rt-1;N>=0;N--){const qt=pt+N,ge=O[qt],V=qt+1<K?O[qt+1].el:tt;Bt[N]===0?E(null,ge,J,V,lt,st,dt,w,S):se&&(It<0||N!==Jt[It]?Lt(ge,J,V,2):It--)}}},Lt=(D,O,J,tt,lt=null)=>{const{el:st,type:dt,transition:w,children:S,shapeFlag:N}=D;if(N&6){Lt(D.component.subTree,O,J,tt);return}if(N&128){D.suspense.move(O,J,tt);return}if(N&64){dt.move(D,O,J,oe);return}if(dt===bn){i(st,O,J);for(let et=0;et<S.length;et++)Lt(S[et],O,J,tt);i(D.anchor,O,J);return}if(dt===_f){A(D,O,J);return}if(tt!==2&&N&1&&w)if(tt===0)w.beforeEnter(st),i(st,O,J),Xn(()=>w.enter(st),lt);else{const{leave:et,delayLeave:Z,afterLeave:Tt}=w,pt=()=>i(st,O,J),Et=()=>{et(st,()=>{pt(),Tt&&Tt()})};Z?Z(st,pt,Et):Et()}else i(st,O,J)},ie=(D,O,J,tt=!1,lt=!1)=>{const{type:st,props:dt,ref:w,children:S,dynamicChildren:N,shapeFlag:K,patchFlag:et,dirs:Z,cacheIndex:Tt}=D;if(et===-2&&(lt=!1),w!=null&&rh(w,null,J,D,!0),Tt!=null&&(O.renderCache[Tt]=void 0),K&256){O.ctx.deactivate(D);return}const pt=K&1&&Z,Et=!dc(D);let It;if(Et&&(It=dt&&dt.onVnodeBeforeUnmount)&&Wi(It,O,D),K&6)At(D.component,J,tt);else{if(K&128){D.suspense.unmount(J,tt);return}pt&&ds(D,null,O,"beforeUnmount"),K&64?D.type.remove(D,O,J,oe,tt):N&&!N.hasOnce&&(st!==bn||et>0&&et&64)?zt(N,O,J,!1,!0):(st===bn&&et&384||!lt&&K&16)&&zt(S,O,J),tt&&ye(D)}(Et&&(It=dt&&dt.onVnodeUnmounted)||pt)&&Xn(()=>{It&&Wi(It,O,D),pt&&ds(D,null,O,"unmounted")},J)},ye=D=>{const{type:O,el:J,anchor:tt,transition:lt}=D;if(O===bn){ht(J,tt);return}if(O===_f){I(D);return}const st=()=>{s(J),lt&&!lt.persisted&&lt.afterLeave&&lt.afterLeave()};if(D.shapeFlag&1&&lt&&!lt.persisted){const{leave:dt,delayLeave:w}=lt,S=()=>dt(J,st);w?w(D.el,st,S):S()}else st()},ht=(D,O)=>{let J;for(;D!==O;)J=m(D),s(D),D=J;s(O)},At=(D,O,J)=>{const{bum:tt,scope:lt,update:st,subTree:dt,um:w,m:S,a:N}=D;tg(S),tg(N),tt&&ff(tt),lt.stop(),st&&(st.active=!1,ie(dt,D,O,J)),w&&Xn(w,O),Xn(()=>{D.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},zt=(D,O,J,tt=!1,lt=!1,st=0)=>{for(let dt=st;dt<D.length;dt++)ie(D[dt],O,J,tt,lt)},Ht=D=>{if(D.shapeFlag&6)return Ht(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const O=m(D.anchor||D.el),J=O&&O[xb];return J?m(J):O};let Kt=!1;const re=(D,O,J)=>{D==null?O._vnode&&ie(O._vnode,null,null,!0):E(O._vnode||null,D,O,null,null,null,J),O._vnode=D,Kt||(Kt=!0,$m(),Y_(),Kt=!1)},oe={p:E,um:ie,m:Lt,r:ye,mt:vt,mc:j,pc:Q,pbc:R,n:Ht,o:n};let Le,z;return{render:re,hydrate:Le,createApp:fb(re,Le)}}function pf({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ps({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function Eb(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function h0(n,t,e=!1){const i=n.children,s=t.children;if(le(i)&&le(s))for(let a=0;a<i.length;a++){const l=i[a];let u=s[a];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=s[a]=Vr(s[a]),u.el=l.el),!e&&u.patchFlag!==-2&&h0(l,u)),u.type===Yc&&(u.el=l.el)}}function Tb(n){const t=n.slice(),e=[0];let i,s,a,l,u;const f=n.length;for(i=0;i<f;i++){const h=n[i];if(h!==0){if(s=e[e.length-1],n[s]<h){t[i]=s,e.push(i);continue}for(a=0,l=e.length-1;a<l;)u=a+l>>1,n[e[u]]<h?a=u+1:l=u;h<n[e[a]]&&(a>0&&(t[i]=e[a-1]),e[a]=i)}}for(a=e.length,l=e[a-1];a-- >0;)e[a]=l,l=t[l];return e}function d0(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:d0(t)}function tg(n){if(n)for(let t=0;t<n.length;t++)n[t].active=!1}const Ab=Symbol.for("v-scx"),bb=()=>pc(Ab);function wb(n,t){return od(n,null,t)}const Bl={};function mf(n,t,e){return od(n,t,e)}function od(n,t,{immediate:e,deep:i,flush:s,once:a,onTrack:l,onTrigger:u}=$e){if(t&&a){const F=t;t=(...B)=>{F(...B),$()}}const f=Nn,h=F=>i===!0?F:As(F,i===!1?1:void 0);let d,g=!1,m=!1;if(Qn(n)?(d=()=>n.value,g=No(n)):Ea(n)?(d=()=>h(n),g=!0):le(n)?(m=!0,g=n.some(F=>Ea(F)||No(F)),d=()=>n.map(F=>{if(Qn(F))return F.value;if(Ea(F))return h(F);if(pe(F))return qr(F,f,2)})):pe(n)?t?d=()=>qr(n,f,2):d=()=>(x&&x(),Bi(n,f,3,[M])):d=Ei,t&&i){const F=d;d=()=>As(F())}let x,M=F=>{x=A.onStop=()=>{qr(F,f,4),x=A.onStop=void 0}},E;if($c)if(M=Ei,t?e&&Bi(t,f,3,[d(),m?[]:void 0,M]):d(),s==="sync"){const F=bb();E=F.__watcherHandles||(F.__watcherHandles=[])}else return Ei;let v=m?new Array(n.length).fill(Bl):Bl;const _=()=>{if(!(!A.active||!A.dirty))if(t){const F=A.run();(i||g||(m?F.some((B,j)=>Kr(B,v[j])):Kr(F,v)))&&(x&&x(),Bi(t,f,3,[F,v===Bl?void 0:m&&v[0]===Bl?[]:v,M]),v=F)}else A.run()};_.allowRecurse=!!t;let P;s==="sync"?P=_:s==="post"?P=()=>Xn(_,f&&f.suspense):(_.pre=!0,f&&(_.id=f.uid),P=()=>nd(_));const A=new $h(d,Ei,P),I=mA(),$=()=>{A.stop(),I&&Xh(I.effects,A)};return t?e?_():v=A.run():s==="post"?Xn(A.run.bind(A),f&&f.suspense):A.run(),E&&E.push($),$}function Cb(n,t,e){const i=this.proxy,s=hn(n)?n.includes(".")?p0(i,n):()=>i[n]:n.bind(i,i);let a;pe(t)?a=t:(a=t.handler,e=t);const l=Ua(this),u=od(s,a.bind(i),e);return l(),u}function p0(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}function As(n,t=1/0,e){if(t<=0||!Ke(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,Qn(n))As(n.value,t,e);else if(le(n))for(let i=0;i<n.length;i++)As(n[i],t,e);else if(x_(n)||wo(n))n.forEach(i=>{As(i,t,e)});else if(y_(n)){for(const i in n)As(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&As(n[i],t,e)}return n}const Rb=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Ds(t)}Modifiers`]||n[`${Os(t)}Modifiers`];function Pb(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||$e;let s=e;const a=t.startsWith("update:"),l=a&&Rb(i,t.slice(7));l&&(l.trim&&(s=e.map(d=>hn(d)?d.trim():d)),l.number&&(s=e.map(oA)));let u,f=i[u=uf(t)]||i[u=uf(Ds(t))];!f&&a&&(f=i[u=uf(Os(t))]),f&&Bi(f,n,6,s);const h=i[u+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[u])return;n.emitted[u]=!0,Bi(h,n,6,s)}}function m0(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const a=n.emits;let l={},u=!1;if(!pe(n)){const f=h=>{const d=m0(h,t,!0);d&&(u=!0,On(l,d))};!e&&t.mixins.length&&t.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}return!a&&!u?(Ke(n)&&i.set(n,null),null):(le(a)?a.forEach(f=>l[f]=null):On(l,a),Ke(n)&&i.set(n,l),l)}function qc(n,t){return!n||!Oc(t)?!1:(t=t.slice(2).replace(/Once$/,""),we(n,t[0].toLowerCase()+t.slice(1))||we(n,Os(t))||we(n,t))}function gf(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[a],slots:l,attrs:u,emit:f,render:h,renderCache:d,props:g,data:m,setupState:x,ctx:M,inheritAttrs:E}=n,v=Ec(n);let _,P;try{if(e.shapeFlag&4){const I=s||i,$=I;_=$i(h.call($,I,d,g,x,m,M)),P=u}else{const I=t;_=$i(I.length>1?I(g,{attrs:u,slots:l,emit:f}):I(g,null)),P=t.props?u:Lb(u)}}catch(I){Aa.length=0,Vc(I,n,1),_=Sn(Pa)}let A=_;if(P&&E!==!1){const I=Object.keys(P),{shapeFlag:$}=A;I.length&&$&7&&(a&&I.some(Wh)&&(P=Ib(P,a)),A=Fo(A,P,!1,!0))}return e.dirs&&(A=Fo(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&(A.transition=e.transition),_=A,Ec(v),_}const Lb=n=>{let t;for(const e in n)(e==="class"||e==="style"||Oc(e))&&((t||(t={}))[e]=n[e]);return t},Ib=(n,t)=>{const e={};for(const i in n)(!Wh(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Db(n,t,e){const{props:i,children:s,component:a}=n,{props:l,children:u,patchFlag:f}=t,h=a.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return i?eg(i,l,h):!!l;if(f&8){const d=t.dynamicProps;for(let g=0;g<d.length;g++){const m=d[g];if(l[m]!==i[m]&&!qc(h,m))return!0}}}else return(s||u)&&(!u||!u.$stable)?!0:i===l?!1:i?l?eg(i,l,h):!0:!!l;return!1}function eg(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const a=i[s];if(t[a]!==n[a]&&!qc(e,a))return!0}return!1}function Ub({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Nb=n=>n.__isSuspense;function Fb(n,t){t&&t.pendingBranch?le(n)?t.effects.push(...n):t.effects.push(n):WA(n)}const bn=Symbol.for("v-fgt"),Yc=Symbol.for("v-txt"),Pa=Symbol.for("v-cmt"),_f=Symbol.for("v-stc"),Aa=[];let ui=null;function tn(n=!1){Aa.push(ui=n?null:[])}function Ob(){Aa.pop(),ui=Aa[Aa.length-1]||null}let La=1;function ng(n){La+=n,n<0&&ui&&(ui.hasOnce=!0)}function Bb(n){return n.dynamicChildren=La>0?ui||bo:null,Ob(),La>0&&ui&&ui.push(n),n}function en(n,t,e,i,s,a){return Bb(Nt(n,t,e,i,s,a,!0))}function zb(n){return n?n.__v_isVNode===!0:!1}function ca(n,t){return n.type===t.type&&n.key===t.key}const g0=({key:n})=>n??null,mc=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?hn(n)||Qn(n)||pe(n)?{i:ji,r:n,k:t,f:!!e}:n:null);function Nt(n,t=null,e=null,i=0,s=null,a=n===bn?0:1,l=!1,u=!1){const f={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&g0(t),ref:t&&mc(t),scopeId:Wc,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ji};return u?(ad(f,e),a&128&&n.normalize(f)):e&&(f.shapeFlag|=hn(e)?8:16),La>0&&!l&&ui&&(f.patchFlag>0||a&6)&&f.patchFlag!==32&&ui.push(f),f}const Sn=Hb;function Hb(n,t=null,e=null,i=0,s=null,a=!1){if((!n||n===ib)&&(n=Pa),zb(n)){const u=Fo(n,t,!0);return e&&ad(u,e),La>0&&!a&&ui&&(u.shapeFlag&6?ui[ui.indexOf(n)]=u:ui.push(u)),u.patchFlag=-2,u}if(Jb(n)&&(n=n.__vccOpts),t){t=Gb(t);let{class:u,style:f}=t;u&&!hn(u)&&(t.class=Yh(u)),Ke(f)&&(G_(f)&&!le(f)&&(f=On({},f)),t.style=vr(f))}const l=hn(n)?1:Nb(n)?128:Mb(n)?64:Ke(n)?4:pe(n)?2:0;return Nt(n,t,e,i,s,l,a,!0)}function Gb(n){return n?G_(n)||s0(n)?On({},n):n:null}function Fo(n,t,e=!1,i=!1){const{props:s,ref:a,patchFlag:l,children:u,transition:f}=n,h=t?kb(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&g0(h),ref:t&&t.ref?e&&a?le(a)?a.concat(mc(t)):[a,mc(t)]:mc(t):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:u,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==bn?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:f,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fo(n.ssContent),ssFallback:n.ssFallback&&Fo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return f&&i&&J_(d,f.clone(d)),d}function Vb(n=" ",t=0){return Sn(Yc,null,n,t)}function $i(n){return n==null||typeof n=="boolean"?Sn(Pa):le(n)?Sn(bn,null,n.slice()):typeof n=="object"?Vr(n):Sn(Yc,null,String(n))}function Vr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fo(n)}function ad(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(le(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ad(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!s0(t)?t._ctx=ji:s===3&&ji&&(ji.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else pe(t)?(t={default:t,_ctx:ji},e=32):(t=String(t),i&64?(e=16,t=[Vb(t)]):e=8);n.children=t,n.shapeFlag|=e}function kb(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Yh([t.class,i.class]));else if(s==="style")t.style=vr([t.style,i.style]);else if(Oc(s)){const a=t[s],l=i[s];l&&a!==l&&!(le(a)&&a.includes(l))&&(t[s]=a?[].concat(a,l):l)}else s!==""&&(t[s]=i[s])}return t}function Wi(n,t,e,i=null){Bi(n,t,7,[e,i])}const Wb=n0();let Xb=0;function qb(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Wb,a={uid:Xb++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new dA(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:a0(i,s),emitsOptions:m0(i,s),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:i.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Pb.bind(null,a),n.ce&&n.ce(a),a}let Nn=null,Ac,sh;{const n=A_(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),a=>{s.length>1?s.forEach(l=>l(a)):s[0](a)}};Ac=t("__VUE_INSTANCE_SETTERS__",e=>Nn=e),sh=t("__VUE_SSR_SETTERS__",e=>$c=e)}const Ua=n=>{const t=Nn;return Ac(n),n.scope.on(),()=>{n.scope.off(),Ac(t)}},ig=()=>{Nn&&Nn.scope.off(),Ac(null)};function _0(n){return n.vnode.shapeFlag&4}let $c=!1;function Yb(n,t=!1,e=!1){t&&sh(t);const{props:i,children:s}=n.vnode,a=_0(n);db(n,i,a,t),_b(n,s,e);const l=a?$b(n,t):void 0;return t&&sh(!1),l}function $b(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,rb);const{setup:i}=e;if(i){const s=n.setupContext=i.length>1?Zb(n):null,a=Ua(n);Qr();const l=qr(i,n,0,[n.props,s]);if(ts(),a(),M_(l)){if(l.then(ig,ig),t)return l.then(u=>{rg(n,u,t)}).catch(u=>{Vc(u,n,0)});n.asyncDep=l}else rg(n,l,t)}else v0(n,t)}function rg(n,t,e){pe(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ke(t)&&(n.setupState=W_(t)),v0(n,e)}let sg;function v0(n,t,e){const i=n.type;if(!n.render){if(!t&&sg&&!i.render){const s=i.template||rd(n).template;if(s){const{isCustomElement:a,compilerOptions:l}=n.appContext.config,{delimiters:u,compilerOptions:f}=i,h=On(On({isCustomElement:a,delimiters:u},l),f);i.render=sg(s,h)}}n.render=i.render||Ei}{const s=Ua(n);Qr();try{sb(n)}finally{ts(),s()}}}const Kb={get(n,t){return jn(n,"get",""),n[t]}};function Zb(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Kb),slots:n.slots,emit:n.emit,expose:t}}function ld(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(W_(FA(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ta)return Ta[e](n)},has(t,e){return e in t||e in Ta}})):n.proxy}function Jb(n){return pe(n)&&"__vccOpts"in n}const yi=(n,t)=>OA(n,t,$c),jb="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Qb="http://www.w3.org/2000/svg",t1="http://www.w3.org/1998/Math/MathML",gr=typeof document<"u"?document:null,og=gr&&gr.createElement("template"),e1={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?gr.createElementNS(Qb,n):t==="mathml"?gr.createElementNS(t1,n):e?gr.createElement(n,{is:e}):gr.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>gr.createTextNode(n),createComment:n=>gr.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>gr.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,a){const l=e?e.previousSibling:t.lastChild;if(s&&(s===a||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===a||!(s=s.nextSibling)););else{og.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const u=og.content;if(i==="svg"||i==="mathml"){const f=u.firstChild;for(;f.firstChild;)u.appendChild(f.firstChild);u.removeChild(f)}t.insertBefore(u,e)}return[l?l.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},n1=Symbol("_vtc");function i1(n,t,e){const i=n[n1];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ag=Symbol("_vod"),r1=Symbol("_vsh"),s1=Symbol(""),o1=/(^|;)\s*display\s*:/;function a1(n,t,e){const i=n.style,s=hn(e);let a=!1;if(e&&!s){if(t)if(hn(t))for(const l of t.split(";")){const u=l.slice(0,l.indexOf(":")).trim();e[u]==null&&gc(i,u,"")}else for(const l in t)e[l]==null&&gc(i,l,"");for(const l in e)l==="display"&&(a=!0),gc(i,l,e[l])}else if(s){if(t!==e){const l=i[s1];l&&(e+=";"+l),i.cssText=e,a=o1.test(e)}}else t&&n.removeAttribute("style");ag in n&&(n[ag]=a?i.display:"",n[r1]&&(i.display="none"))}const lg=/\s*!important$/;function gc(n,t,e){if(le(e))e.forEach(i=>gc(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=l1(n,t);lg.test(e)?n.setProperty(Os(i),e.replace(lg,""),"important"):n[i]=e}}const cg=["Webkit","Moz","ms"],vf={};function l1(n,t){const e=vf[t];if(e)return e;let i=Ds(t);if(i!=="filter"&&i in n)return vf[t]=i;i=E_(i);for(let s=0;s<cg.length;s++){const a=cg[s]+i;if(a in n)return vf[t]=a}return t}const ug="http://www.w3.org/1999/xlink";function fg(n,t,e,i,s,a=hA(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ug,t.slice(6,t.length)):n.setAttributeNS(ug,t,e):e==null||a&&!b_(e)?n.removeAttribute(t):n.setAttribute(t,a?"":jr(e)?String(e):e)}function c1(n,t,e,i){if(t==="innerHTML"||t==="textContent"){if(e==null)return;n[t]=e;return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?n.getAttribute("value")||"":n.value,u=e==null?"":String(e);(l!==u||!("_value"in n))&&(n.value=u),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const l=typeof n[t];l==="boolean"?e=b_(e):e==null&&l==="string"?(e="",a=!0):l==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(t)}function u1(n,t,e,i){n.addEventListener(t,e,i)}function f1(n,t,e,i){n.removeEventListener(t,e,i)}const hg=Symbol("_vei");function h1(n,t,e,i,s=null){const a=n[hg]||(n[hg]={}),l=a[t];if(i&&l)l.value=i;else{const[u,f]=d1(t);if(i){const h=a[t]=g1(i,s);u1(n,u,h,f)}else l&&(f1(n,u,l,f),a[t]=void 0)}}const dg=/(?:Once|Passive|Capture)$/;function d1(n){let t;if(dg.test(n)){t={};let i;for(;i=n.match(dg);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Os(n.slice(2)),t]}let xf=0;const p1=Promise.resolve(),m1=()=>xf||(p1.then(()=>xf=0),xf=Date.now());function g1(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Bi(_1(i,e.value),t,5,[i])};return e.value=n,e.attached=m1(),e}function _1(n,t){if(le(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const pg=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,v1=(n,t,e,i,s,a)=>{const l=s==="svg";t==="class"?i1(n,i,l):t==="style"?a1(n,e,i):Oc(t)?Wh(t)||h1(n,t,e,i,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):x1(n,t,i,l))?(c1(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&fg(n,t,i,l,a,t!=="value")):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),fg(n,t,i,l))};function x1(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&pg(t)&&pe(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return pg(t)&&hn(e)?!1:t in n}const M1=On({patchProp:v1},e1);let mg;function S1(){return mg||(mg=Sb(M1))}const y1=(...n)=>{const t=S1().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=T1(i);if(!s)return;const a=t._component;!pe(a)&&!a.render&&!a.template&&(a.template=s.innerHTML),s.innerHTML="";const l=e(s,!1,E1(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t};function E1(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function T1(n){return hn(n)?document.querySelector(n):n}function A1(n){const t=Be(window.innerWidth-n*2),e=Be(window.innerHeight-n*2),i=()=>{t.value=window.innerWidth-n*2,e.value=window.innerHeight-n*2};return es(()=>{window.addEventListener("resize",i)}),id(()=>{window.removeEventListener("resize",i)}),wb(()=>{i()}),{width:t,height:e}}function b1(n){return new Worker("/vite-vue/assets/worker-xmTTMwkA.js",{name:n==null?void 0:n.name})}function w1(){this.works=[],this.pixelX=window.innerWidth,this.pixelY=window.innerWidth,this.setPixel=function(n,t){this.pixelX=n,this.pixelY=t},this.draw=function(n){let t=n.ctx;this.pixelX,this.pixelY;let e=n.x,i=n.y,s=n.r,a=n.x2,l=n.y2,u=n.text,f=n.size,h=n.color,d=n.a,g=n.b,m=n.angle;if(t)switch(n.name){case"circle":x();break;case"point":M();break;case"line":E();break;case"crescent":v();break;case"text":_()}function x(){if(e+i+s=="NaN"){console.warn("drawCircle failed: missing parameter");return}t.beginPath(),t.arc(e,i,s,0,2*Math.PI,!1),t.fillStyle=h,t.fill()}function M(){if(e+i+f=="NaN"){console.warn("drawPoint failed: missing parameter");return}t.fillStyle=h,t.fillRect(e-f/2,i-f/2,f,f)}function E(){if(e+i+a+l=="NaN"){console.warn("drawLine failed: missing parameter");return}t.beginPath(),t.moveTo(e,i),t.lineTo(a,l),t.strokeStyle=h,t.lineWidth=f||1,t.stroke()}function v(){if(e+i+d+g+m+f=="NaN"){console.warn("drawCrescent failed: missing parameter");return}let P=Math.sqrt(d*d+g*g),A=Math.atan(d/g),I=Math.cos(m+Math.PI/2)*d*f,$=Math.sin(m+Math.PI/2)*d*f;t.beginPath(),t.arc(e,i,g*f,m,Math.PI+m,!0),t.arc(e+I,i+$,P*f,Math.PI+m+A,m-A,!1),t.fillStyle=h,t.fill()}function _(){e=Math.round(e),i=Math.round(i),t.font=f+"px Comic Sans MS",t.textBaseline="middle",t.textAlign="center",t.fillStyle=h,t.fillText(u,e,i)}}}const sn=class sn{static resetPath(t=1,e=0,i=0){t+e+i!=1&&console.warn("sum of parameter is recommend to be 1"),sn.linear=t,sn.easein=e,sn.easeout=i}static resetLeap(t=0,e=0,i=0){sn.leapLinear=t,sn.leapEasein=e,sn.leapEaseout=i}getPath(){return[sn.linear,sn.easein,sn.easeout]}getLeap(){return[sn.leapLinear,sn.leapEasein,sn.leapEaseout]}};Vi(sn,"linear",-1),Vi(sn,"easein",0),Vi(sn,"easeout",2),Vi(sn,"leapLinear",0),Vi(sn,"leapEasein",-2),Vi(sn,"leapEaseout",2);let bc=sn;class Po extends bc{constructor(e=0,i=0){super();Vi(this,"NewTarget",function(e,i,s){this.targetX=e,this.targetY=i,this.originX=this.pointX,this.originY=this.pointY,this.timer=s,this.period=s});Vi(this,"ResetTo",function(e=e,i=i){this.pointX=e,this.pointY=i,this.timer=0});Vi(this,"NextFrame",(function(){if(this.timer>0){this.timer--;const i=this.targetX-this.originX,s=this.targetY-this.originY,a=this.timer,l=this.period,u=1/l,f=Math.pow((a+1)/l,2)-Math.pow(a/l,2),h=Math.pow(1-(a-1)/l,2)-Math.pow(1-a/l,2),[d,g,m]=this.getPath(),[x,M,E]=this.getLeap();this.pointX+=(d*u+g*h+m*f)*i,this.pointY+=(d*u+g*h+m*f)*s+(x*u+M*h+E*f)*(-i/5+10*-i/Math.abs(i==0?1:i))}else this.timer==0&&(this.timer--,this.pointX=this.targetX,this.pointY=this.targetY)}).bind(this));this.pointX=e,this.pointY=i,this.originX=e,this.originY=i,this.targetX=e,this.targetY=i,this.period=90,this.timer=0}getPath(){return super.getPath()}getLeap(){return super.getLeap()}}const To=new Po;function C1(n){n.fillStyle="black",n.fillRect(0,0,n.canvas.width,n.canvas.height)}function R1(){const n=new w1;this.transitionRadian=0,this.trasitionOmega=Math.PI/1e4,this.alpha=5,this.beta=10,this.gamma=5,this.delta=10,this.dlength=.01,this.speed=1,this.useMouse=!0,this.isTransform=!0,this.updateData=e=>{this.useMouse=e.useMouse,this.isTransform=e.isTransform,this.alpha=e.alpha,this.beta=e.beta,this.gamma=e.gamma,this.delta=e.delta,this.dlength=e.dlength*.001,this.speed=e.speed},this.render=e=>{C1(e),e.save(),e.translate(-e.canvas.width*.25,0),n.works.forEach(i=>{n.draw(i)}),n.works=[],e.restore()},this.update=(e,i,s)=>{this.transitionRadian+=this.trasitionOmega*this.speed,this.motion(i,s),this.addTexture(i,s,e),this.updateFps(i,s,e)},this.reset=(e,i)=>{this.data=[];for(let l=0;l<2e3;l++){const h=1+Math.pow(.5,1),d=Math.pow(a(.5,1),1),g=Math.pow(a(0,.5),1),m={d:(h-d-g)*e,r:a(0,Math.PI*2),fakeX:e/2,fakeY:i/2,x:e/2,y:i/2,vx:[],vy:[]};m.x+=m.d*Math.cos(m.r),m.y+=m.d*Math.sin(m.r),m.fakeX=m.x,m.fakeY=m.y,this.data.push(m)}function a(l,u){return Math.random()*(u*100-l*100+1)/100+l}},this.motion=(e,i)=>{const s=this.data;for(let f=0;f<s.length;f++){const h=s[f],d=this.transitionRadian,g=Math.sin(d),m=Math.sin(d*2),x=this.isTransform?h.d/2:h.d/3*(.05+.95*(1-m)),M=x*g*.1;h.r+=Math.PI/1e3,h.x-=h.fakeX,h.y-=h.fakeY,h.fakeX=e/2+x*Math.cos(h.r+M),h.fakeY=i/2+x*Math.sin(h.r+M),h.x+=h.fakeX,h.y+=h.fakeY}for(let f=0;f<s.length;f++){const h=s[f];let d=0,g=0,m=0,x=0;for(let E=f+1;E<s.length;E++){const v=s[E],_=a(h.x,h.y,v.x,v.y),P=0;if(_<P){let A;_<P*.1&&(A=-1),_<P*.55&&(A=1*(_-P*.1)/(P*.45)),_<P&&(A=1*(P-_)/(P*.45)),d+=v.x>h.x?1:-1*A,g+=h.x>v.x?1:-1*A,m+=v.y>h.y?1:-1*A,x+=h.y>v.y?1:-1*A}}h.x+=u(h.vx),h.y+=u(h.vy);const M=100;d+=e*.5+M/2>h.x?1:-1*M,d-=e*.5-M/2<h.x?1:-1*M,m+=i/2+M/2>h.y?1:-1*M,m-=i/2-M/2<h.y?1:-1*M,l(h.vx,d),l(h.vy,m)}function a(f,h,d,g){return Math.sqrt(Math.pow(f-d,2)+Math.pow(h-g,2))}function l(f,h){f.splice(1,0,h),f.splice(60,1)}function u(f){let h=0;return f.forEach(d=>{h+=d/f.length/20}),h}},this.addTexture=(e,i,s)=>{const a=this.data;for(let l=0;l<a.length;l++){const u=a[l],f=u.x,h=u.y,d=f/e,g=h/i,m=this.equation1(d,g,i)*e,x=this.equation2(d,g,e)*i,M=h/e*255,E=f/e*255,v=Math.sin(this.transitionRadian)*255,_="rgb("+Math.abs(v).toString()+","+Math.abs(E).toString()+","+Math.abs(M).toString()+")",P={name:"point",ctx:s,size:2,x:f,y:h,color:_};n.works.push(P);const A={name:"line",ctx:s,size:2,x:f,y:h,x2:f+this.dlength*m,y2:h+this.dlength*x,color:_};n.works.push(A)}},this.equation1=(e,i,s)=>{if(this.useMouse){const a=To.pointY/s>.2?To.pointY/s:.2;return this.alpha*e-1/a*this.alpha*e*i}return this.alpha*e-this.beta*e*i},this.equation2=(e,i,s)=>this.useMouse?1/(To.pointX/s>.2?To.pointX/s:.2)*this.gamma*e*i-this.gamma*i:this.delta*e*i-this.gamma*i,this.timeBefore=Date.now();const t=new Array(100);return t.fill(16),this.updateFps=(e,i,s)=>{const a=Date.now()-this.timeBefore;this.timeBefore=Date.now(),t.push(a),t.shift();const l=t.reduce((j,L)=>j+L,0),u=Math.round(1e3/(l/t.length)),f=Math.PI*(Date.now()%3e3)/1500,h=(i+e)*.003,d=e*.5,g=i-h*20,m=g/e*255,x=d/e*255,M=Math.sin(this.transitionRadian)*255,E="rgb("+Math.abs(M).toString()+","+Math.abs(x).toString()+","+Math.abs(m).toString()+")",v="rgb("+Math.abs(M*.3).toString()+","+Math.abs(x*.2).toString()+","+Math.abs(m*.4).toString()+")",_={name:"circle",ctx:s,r:h*10,x:d,y:g,color:v},P={name:"crescent",ctx:s,size:h,a:1,b:9,angle:f*3,x:d,y:g,color:E},A={name:"crescent",ctx:s,size:h,a:1,b:8,angle:f*2,x:d,y:g,color:E},I={name:"crescent",ctx:s,size:h,a:1,b:7,angle:f*1,x:d,y:g,color:E},$={name:"text",ctx:s,text:"fps",size:h*4,x:d,y:g-h*3,color:E},F={name:"text",ctx:s,text:u,size:h*4,x:d,y:g+h*3,color:E},B={name:"text",ctx:s,text:"Res: "+Math.round(e)+" x "+Math.round(i),size:h*4,x:d,y:g+h*13,color:E};n.works.push(_,P,A,I,$,F,B)},this}const P1=function(){const n=new b1;return this.algorithm=new R1,this.setCanvas=(t,e)=>{this.algorithm.reset(t.width,t.height),this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.bitmap=e;const i=e.transferControlToOffscreen();n.postMessage({name:"transferControlToOffscreen",canvas:i},[i]),window.addEventListener("resize",function(){n.postMessage({name:"setOffscreen",w:t.width,h:t.height})},!1)},this.pauseWorker=t=>{n.postMessage({name:t?"requestAnimation":"cancelAnimation"})},this.render=(function(){this.algorithm.render(this.ctx)}).bind(this),this.update=(function(){this.algorithm.update(this.ctx,this.canvas.width,this.canvas.height)}).bind(this),this},so=new P1,L1=function(){return this.validId=["dev"],this.lastId="",this.lastRequestName=[],this.request={},this.getRequestById=n=>{if(typeof isSomethingHappended<"u")return null;const t=[];for(let e in this.request)e.includes(n)&&t.push(e);return t},this.updateRequestAnimation=n=>{const t=this.getRequestById(n);t!==null&&(this.lastId=n,this.lastRequestName.forEach(e=>{cancelAnimationFrame(this.request[e].ID)}),this.lastRequestName=t,t.forEach(e=>{if(typeof this.request[e]>"u")return console.warn("invalid request");if(typeof this.request[e].method>"u")return console.warn("invalid requestMethod");this.request[e].isPause||(this.request[e].ID=requestAnimationFrame(this.request[e].method))}))},this.pauseAnimationByName=n=>{cancelAnimationFrame(this.request[n].ID),this.request[n].isPause=!0},this.resumeAnimationByName=n=>{this.request[n].isPause=!1,cancelAnimationFrame(this.request[n].ID),this.request[n].ID=requestAnimationFrame(this.request[n].method)},this.addAnimationCallback=n=>{const t=n.name||"#"+Math.random(),e=t.match(" ")?t.split(" ")[1]:t;this.request[e]=this.request[e]||{},this.request[e].method=(function s(){n(),this.request[e].ID=requestAnimationFrame(s.bind(this))}).bind(this),this.validId.some(s=>e.includes(s))||console.warn("naming issue: "+e+" should include one of following letters: "+this.validId)},this.registerAnimationCallback=(n,t)=>{this.request[n]=this.request[n]||{},this.request[n].method=(function i(){t(),this.request[n].ID=requestAnimationFrame(i.bind(this))}).bind(this),this.validId.some(i=>n.includes(i))||console.warn("naming issue: "+n+" should include one of following letters: "+this.validId)},this.io=new IntersectionObserver(n=>{n.forEach(t=>{t.intersectionRatio!==0&&this.updateRequestAnimation(t.target.id)})}),this.addSubjectElements=n=>{n.forEach(t=>{this.validId.push(t.id),this.io.unobserve(t),this.io.observe(t)})},this},Qi=new L1,x0={__name:"SlideMenuBtn",props:{menu:Object},setup(n){const t=n,e=i=>{const s=t.menu,a=i.target,l=s.getBoundingClientRect(),f=a.getBoundingClientRect().y-l.y;a.innerText=="△"?(s.style.top="-"+f+"px",a.innerText="▽"):(s.style.top="1%",a.innerText="△")};return(i,s)=>(tn(),en("button",{onClick:e,class:"slideMenu"},"△"))}},Bs=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Tr=n=>(K_("data-v-fc951c82"),n=n(),Z_(),n),I1=["width","height"],D1=["width","height"],U1=Tr(()=>Nt("header",{id:"header"},[Nt("h3",null,"Lotka Volterra 實驗場 + Web Woker")],-1)),N1={class:"parameter"},F1=Tr(()=>Nt("label",null,"Alpha",-1)),O1=["value"],B1=Tr(()=>Nt("label",null,"Beta",-1)),z1=["value"],H1=Tr(()=>Nt("label",null,"Gamma",-1)),G1=["value"],V1=Tr(()=>Nt("label",null,"Delta",-1)),k1=["value"],W1=Tr(()=>Nt("label",null,"Vector Size",-1)),X1=["value"],q1=Tr(()=>Nt("label",null,"Transform Speed",-1)),Y1=["value"],$1={class:"controlpanel"},K1=Tr(()=>Nt("label",null,"★",-1)),Z1=["value"],J1=["value"],j1=Tr(()=>Nt("div",{id:"dialogbox"},[Nt("p",{id:"dialog"},"∫此微分方程用於描述捕食者和獵物的此消彼長，沿著中心點呈現漩渦紋理")],-1)),Q1={__name:"CanvasSectionS1",props:{max:Number,ratio:Number},setup(n,{expose:t}){const e=Be(null);t({section:e});const i=Be(null),s=Be(null);es(async()=>{so.setCanvas(i.value,s.value),await kc(),Qi.registerAnimationCallback("renderS1",so.render),Qi.registerAnimationCallback("updateS1",so.update)});const a=Gc({useMouse:0,isTransform:0,alpha:5,beta:10,gamma:5,delta:10,dlength:10,speed:10});so.algorithm.updateData(a);const l=m=>{const x=m.target.id,M=m.target.value;if(a[x]==null){console.warn("invalid key(ID): "+x+", check whether it is in object state");return}a[x]=M*1,so.algorithm.updateData(a)},u=Be(!0),f=Be(!0),h=()=>{u.value=!u.value;const m=(u.value?"resume":"pause")+"AnimationByName";Qi[m]("renderS1"),Qi[m]("updateS1")},d=()=>{f.value=!f.value,so.pauseWorker(f.value)},g=Be(null);return(m,x)=>(tn(),en("section",{ref_key:"section",ref:e,class:"section",id:"S1"},[Nt("canvas",{id:"canvasS1",ref_key:"canvas",ref:i,width:n.max*n.ratio,height:n.ratio*n.max*n.ratio},null,8,I1),Nt("canvas",{id:"bitmap",ref_key:"bitmap",ref:s,width:n.max*n.ratio,height:n.ratio*n.max*n.ratio},null,8,D1),Nt("div",{ref_key:"menu",ref:g,class:"gamemenu"},[U1,Nt("div",N1,[F1,Nt("input",{onInput:l,type:"number",id:"alpha",value:a.alpha},null,40,O1),B1,Nt("input",{onInput:l,type:"number",id:"beta",value:a.beta},null,40,z1),H1,Nt("input",{onInput:l,type:"number",id:"gamma",value:a.gamma},null,40,G1),V1,Nt("input",{onInput:l,type:"number",id:"delta",value:a.delta},null,40,k1),W1,Nt("input",{onInput:l,type:"number",id:"dlength",value:a.dlength},null,40,X1),q1,Nt("input",{onInput:l,type:"number",id:"speed",value:a.speed},null,40,Y1)]),Nt("div",$1,[K1,Nt("button",{onClick:l,id:"useMouse",value:a.useMouse?0:1},$n(a.useMouse?"取消跟隨":"跟隨滑鼠"),9,Z1),Nt("button",{onClick:l,id:"isTransform",value:a.isTransform?0:1},$n(a.isTransform=="1"?"取消縮}放":"加入縮放"),9,J1),Nt("button",{onClick:h,id:"pauseMain"},$n(u.value?"停止(左)":"開始(左)"),1),Nt("button",{onClick:d,id:"pauseWorker"},$n(f.value?"停止(右)":"開始(右)"),1)]),j1,Sn(x0,{menu:g.value},null,8,["menu"])],512)],512))}},tw=Bs(Q1,[["__scopeId","data-v-fc951c82"]]),ew="/vite-vue/assets/Lovely%20Piano%20Song-D2Oyr38W.mp3";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cd="167",nw=0,gg=1,iw=2,M0=1,rw=2,mr=3,Zr=0,Kn=1,_r=2,Yr=0,Lo=1,_g=2,vg=3,xg=4,sw=5,bs=100,ow=101,aw=102,lw=103,cw=104,uw=200,fw=201,hw=202,dw=203,oh=204,ah=205,pw=206,mw=207,gw=208,_w=209,vw=210,xw=211,Mw=212,Sw=213,yw=214,Ew=0,Tw=1,Aw=2,wc=3,bw=4,ww=5,Cw=6,Rw=7,S0=0,Pw=1,Lw=2,$r=0,Iw=1,Dw=2,Uw=3,Nw=4,Fw=5,Ow=6,Bw=7,y0=300,Oo=301,Bo=302,lh=303,ch=304,Kc=306,uh=1e3,Cs=1001,fh=1002,Ti=1003,zw=1004,zl=1005,Ni=1006,Mf=1007,Rs=1008,yr=1009,E0=1010,T0=1011,Ia=1012,ud=1013,Ns=1014,xr=1015,Na=1016,fd=1017,hd=1018,zo=1020,A0=35902,b0=1021,w0=1022,Fi=1023,C0=1024,R0=1025,Io=1026,Ho=1027,P0=1028,dd=1029,L0=1030,pd=1031,md=1033,_c=33776,vc=33777,xc=33778,Mc=33779,hh=35840,dh=35841,ph=35842,mh=35843,gh=36196,_h=37492,vh=37496,xh=37808,Mh=37809,Sh=37810,yh=37811,Eh=37812,Th=37813,Ah=37814,bh=37815,wh=37816,Ch=37817,Rh=37818,Ph=37819,Lh=37820,Ih=37821,Sc=36492,Dh=36494,Uh=36495,I0=36283,Nh=36284,Fh=36285,Oh=36286,Hw=3200,Gw=3201,Vw=0,kw=1,kr="",qi="srgb",ns="srgb-linear",gd="display-p3",Zc="display-p3-linear",Cc="linear",We="srgb",Rc="rec709",Pc="p3",oo=7680,Mg=519,Ww=512,Xw=513,qw=514,D0=515,Yw=516,$w=517,Kw=518,Zw=519,Sg=35044,yg=35048,Eg="300 es",Mr=2e3,Lc=2001;class Vo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,t);t.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sf=Math.PI/180,Bh=180/Math.PI;function Fa(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function Yn(n,t,e){return Math.max(t,Math.min(e,n))}function Jw(n,t){return(n%t+t)%t}function yf(n,t,e){return(1-e)*n+e*t}function ua(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(t=0,e=0){Fe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,l=this.y-t.y;return this.x=a*i-l*s+t.x,this.y=a*s+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(t,e,i,s,a,l,u,f,h){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,l,u,f,h)}set(t,e,i,s,a,l,u,f,h){const d=this.elements;return d[0]=t,d[1]=s,d[2]=u,d[3]=e,d[4]=a,d[5]=f,d[6]=i,d[7]=l,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,l=i[0],u=i[3],f=i[6],h=i[1],d=i[4],g=i[7],m=i[2],x=i[5],M=i[8],E=s[0],v=s[3],_=s[6],P=s[1],A=s[4],I=s[7],$=s[2],F=s[5],B=s[8];return a[0]=l*E+u*P+f*$,a[3]=l*v+u*A+f*F,a[6]=l*_+u*I+f*B,a[1]=h*E+d*P+g*$,a[4]=h*v+d*A+g*F,a[7]=h*_+d*I+g*B,a[2]=m*E+x*P+M*$,a[5]=m*v+x*A+M*F,a[8]=m*_+x*I+M*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],l=t[4],u=t[5],f=t[6],h=t[7],d=t[8];return e*l*d-e*u*h-i*a*d+i*u*f+s*a*h-s*l*f}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],l=t[4],u=t[5],f=t[6],h=t[7],d=t[8],g=d*l-u*h,m=u*f-d*a,x=h*a-l*f,M=e*g+i*m+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=g*E,t[1]=(s*h-d*i)*E,t[2]=(u*i-s*l)*E,t[3]=m*E,t[4]=(d*e-s*f)*E,t[5]=(s*a-u*e)*E,t[6]=x*E,t[7]=(i*f-h*e)*E,t[8]=(l*e-i*a)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,l,u){const f=Math.cos(a),h=Math.sin(a);return this.set(i*f,i*h,-i*(f*l+h*u)+l+t,-s*h,s*f,-s*(-h*l+f*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(Ef.makeScale(t,e)),this}rotate(t){return this.premultiply(Ef.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ef.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ef=new de;function U0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ic(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jw(){const n=Ic("canvas");return n.style.display="block",n}const Tg={};function ba(n){n in Tg||(Tg[n]=!0,console.warn(n))}function Qw(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}const Ag=new de().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bg=new de().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fa={[ns]:{transfer:Cc,primaries:Rc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[qi]:{transfer:We,primaries:Rc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Zc]:{transfer:Cc,primaries:Pc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(bg),fromReference:n=>n.applyMatrix3(Ag)},[gd]:{transfer:We,primaries:Pc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(bg),fromReference:n=>n.applyMatrix3(Ag).convertLinearToSRGB()}},tC=new Set([ns,Zc]),Ue={enabled:!0,_workingColorSpace:ns,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!tC.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=fa[t].toReference,s=fa[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return fa[n].primaries},getTransfer:function(n){return n===kr?Cc:fa[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(fa[t].luminanceCoefficients)}};function Do(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ao;class eC{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ao===void 0&&(ao=Ic("canvas")),ao.width=t.width,ao.height=t.height;const i=ao.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ao}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ic("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=Do(a[l]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Do(e[i]/255)*255):e[i]=Do(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nC=0;class N0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nC++}),this.uuid=Fa(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?a.push(Af(s[l].image)):a.push(Af(s[l]))}else a=Af(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function Af(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iC=0;class Zn extends Vo{constructor(t=Zn.DEFAULT_IMAGE,e=Zn.DEFAULT_MAPPING,i=Cs,s=Cs,a=Ni,l=Rs,u=Fi,f=yr,h=Zn.DEFAULT_ANISOTROPY,d=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iC++}),this.uuid=Fa(),this.name="",this.source=new N0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==y0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uh:t.x=t.x-Math.floor(t.x);break;case Cs:t.x=t.x<0?0:1;break;case fh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uh:t.y=t.y-Math.floor(t.y);break;case Cs:t.y=t.y<0?0:1;break;case fh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=y0;Zn.DEFAULT_ANISOTROPY=1;class _n{constructor(t=0,e=0,i=0,s=1){_n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*s+l[12]*a,this.y=l[1]*e+l[5]*i+l[9]*s+l[13]*a,this.z=l[2]*e+l[6]*i+l[10]*s+l[14]*a,this.w=l[3]*e+l[7]*i+l[11]*s+l[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const f=t.elements,h=f[0],d=f[4],g=f[8],m=f[1],x=f[5],M=f[9],E=f[2],v=f[6],_=f[10];if(Math.abs(d-m)<.01&&Math.abs(g-E)<.01&&Math.abs(M-v)<.01){if(Math.abs(d+m)<.1&&Math.abs(g+E)<.1&&Math.abs(M+v)<.1&&Math.abs(h+x+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(h+1)/2,I=(x+1)/2,$=(_+1)/2,F=(d+m)/4,B=(g+E)/4,j=(M+v)/4;return A>I&&A>$?A<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(A),s=F/i,a=B/i):I>$?I<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(I),i=F/s,a=j/s):$<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt($),i=B/a,s=j/a),this.set(i,s,a,e),this}let P=Math.sqrt((v-M)*(v-M)+(g-E)*(g-E)+(m-d)*(m-d));return Math.abs(P)<.001&&(P=1),this.x=(v-M)/P,this.y=(g-E)/P,this.z=(m-d)/P,this.w=Math.acos((h+x+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rC extends Vo{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _n(0,0,t,e),this.scissorTest=!1,this.viewport=new _n(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Zn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const l=i.count;for(let u=0;u<l;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new N0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fs extends rC{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class F0 extends Zn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sC extends Zn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,l,u){let f=i[s+0],h=i[s+1],d=i[s+2],g=i[s+3];const m=a[l+0],x=a[l+1],M=a[l+2],E=a[l+3];if(u===0){t[e+0]=f,t[e+1]=h,t[e+2]=d,t[e+3]=g;return}if(u===1){t[e+0]=m,t[e+1]=x,t[e+2]=M,t[e+3]=E;return}if(g!==E||f!==m||h!==x||d!==M){let v=1-u;const _=f*m+h*x+d*M+g*E,P=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const $=Math.sqrt(A),F=Math.atan2($,_*P);v=Math.sin(v*F)/$,u=Math.sin(u*F)/$}const I=u*P;if(f=f*v+m*I,h=h*v+x*I,d=d*v+M*I,g=g*v+E*I,v===1-u){const $=1/Math.sqrt(f*f+h*h+d*d+g*g);f*=$,h*=$,d*=$,g*=$}}t[e]=f,t[e+1]=h,t[e+2]=d,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,s,a,l){const u=i[s],f=i[s+1],h=i[s+2],d=i[s+3],g=a[l],m=a[l+1],x=a[l+2],M=a[l+3];return t[e]=u*M+d*g+f*x-h*m,t[e+1]=f*M+d*m+h*g-u*x,t[e+2]=h*M+d*x+u*m-f*g,t[e+3]=d*M-u*g-f*m-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,l=t._order,u=Math.cos,f=Math.sin,h=u(i/2),d=u(s/2),g=u(a/2),m=f(i/2),x=f(s/2),M=f(a/2);switch(l){case"XYZ":this._x=m*d*g+h*x*M,this._y=h*x*g-m*d*M,this._z=h*d*M+m*x*g,this._w=h*d*g-m*x*M;break;case"YXZ":this._x=m*d*g+h*x*M,this._y=h*x*g-m*d*M,this._z=h*d*M-m*x*g,this._w=h*d*g+m*x*M;break;case"ZXY":this._x=m*d*g-h*x*M,this._y=h*x*g+m*d*M,this._z=h*d*M+m*x*g,this._w=h*d*g-m*x*M;break;case"ZYX":this._x=m*d*g-h*x*M,this._y=h*x*g+m*d*M,this._z=h*d*M-m*x*g,this._w=h*d*g+m*x*M;break;case"YZX":this._x=m*d*g+h*x*M,this._y=h*x*g+m*d*M,this._z=h*d*M-m*x*g,this._w=h*d*g-m*x*M;break;case"XZY":this._x=m*d*g-h*x*M,this._y=h*x*g-m*d*M,this._z=h*d*M+m*x*g,this._w=h*d*g+m*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],l=e[1],u=e[5],f=e[9],h=e[2],d=e[6],g=e[10],m=i+u+g;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(d-f)*x,this._y=(a-h)*x,this._z=(l-s)*x}else if(i>u&&i>g){const x=2*Math.sqrt(1+i-u-g);this._w=(d-f)/x,this._x=.25*x,this._y=(s+l)/x,this._z=(a+h)/x}else if(u>g){const x=2*Math.sqrt(1+u-i-g);this._w=(a-h)/x,this._x=(s+l)/x,this._y=.25*x,this._z=(f+d)/x}else{const x=2*Math.sqrt(1+g-i-u);this._w=(l-s)/x,this._x=(a+h)/x,this._y=(f+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,l=t._w,u=e._x,f=e._y,h=e._z,d=e._w;return this._x=i*d+l*u+s*h-a*f,this._y=s*d+l*f+a*u-i*h,this._z=a*d+l*h+i*f-s*u,this._w=l*d-i*u-s*f-a*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,a=this._z,l=this._w;let u=l*t._w+i*t._x+s*t._y+a*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=l,this._x=i,this._y=s,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const x=1-e;return this._w=x*l+e*this._w,this._x=x*i+e*this._x,this._y=x*s+e*this._y,this._z=x*a+e*this._z,this.normalize(),this}const h=Math.sqrt(f),d=Math.atan2(h,u),g=Math.sin((1-e)*d)/h,m=Math.sin(e*d)/h;return this._w=l*g+this._w*m,this._x=i*g+this._x*m,this._y=s*g+this._y*m,this._z=a*g+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,i=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wg.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,l=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*l,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*l,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*l,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,l=t.y,u=t.z,f=t.w,h=2*(l*s-u*i),d=2*(u*e-a*s),g=2*(a*i-l*e);return this.x=e+f*h+l*g-u*d,this.y=i+f*d+u*h-a*g,this.z=s+f*g+a*d-l*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,l=e.x,u=e.y,f=e.z;return this.x=s*f-a*u,this.y=a*l-i*f,this.z=i*u-s*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bf.copy(this).projectOnVector(t),this.sub(bf)}reflect(t){return this.sub(bf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bf=new q,wg=new Oa;class Ba{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let l=0,u=a.count;l<u;l++)t.isMesh===!0?t.getVertexPosition(l,Li):Li.fromBufferAttribute(a,l),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hl.copy(i.boundingBox)),Hl.applyMatrix4(t.matrixWorld),this.union(Hl)}const s=t.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ha),Gl.subVectors(this.max,ha),lo.subVectors(t.a,ha),co.subVectors(t.b,ha),uo.subVectors(t.c,ha),Nr.subVectors(co,lo),Fr.subVectors(uo,co),ms.subVectors(lo,uo);let e=[0,-Nr.z,Nr.y,0,-Fr.z,Fr.y,0,-ms.z,ms.y,Nr.z,0,-Nr.x,Fr.z,0,-Fr.x,ms.z,0,-ms.x,-Nr.y,Nr.x,0,-Fr.y,Fr.x,0,-ms.y,ms.x,0];return!wf(e,lo,co,uo,Gl)||(e=[1,0,0,0,1,0,0,0,1],!wf(e,lo,co,uo,Gl))?!1:(Vl.crossVectors(Nr,Fr),e=[Vl.x,Vl.y,Vl.z],wf(e,lo,co,uo,Gl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ur),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ur=[new q,new q,new q,new q,new q,new q,new q,new q],Li=new q,Hl=new Ba,lo=new q,co=new q,uo=new q,Nr=new q,Fr=new q,ms=new q,ha=new q,Gl=new q,Vl=new q,gs=new q;function wf(n,t,e,i,s){for(let a=0,l=n.length-3;a<=l;a+=3){gs.fromArray(n,a);const u=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),f=t.dot(gs),h=e.dot(gs),d=i.dot(gs);if(Math.max(-Math.max(f,h,d),Math.min(f,h,d))>u)return!1}return!0}const oC=new Ba,da=new q,Cf=new q;class za{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):oC.setFromPoints(t).getCenter(i);let s=0;for(let a=0,l=t.length;a<l;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;da.subVectors(t,this.center);const e=da.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(da,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(da.copy(t.center).add(Cf)),this.expandByPoint(da.copy(t.center).sub(Cf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fr=new q,Rf=new q,kl=new q,Or=new q,Pf=new q,Wl=new q,Lf=new q;class _d{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fr.copy(this.origin).addScaledVector(this.direction,e),fr.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Rf.copy(t).add(e).multiplyScalar(.5),kl.copy(e).sub(t).normalize(),Or.copy(this.origin).sub(Rf);const a=t.distanceTo(e)*.5,l=-this.direction.dot(kl),u=Or.dot(this.direction),f=-Or.dot(kl),h=Or.lengthSq(),d=Math.abs(1-l*l);let g,m,x,M;if(d>0)if(g=l*f-u,m=l*u-f,M=a*d,g>=0)if(m>=-M)if(m<=M){const E=1/d;g*=E,m*=E,x=g*(g+l*m+2*u)+m*(l*g+m+2*f)+h}else m=a,g=Math.max(0,-(l*m+u)),x=-g*g+m*(m+2*f)+h;else m=-a,g=Math.max(0,-(l*m+u)),x=-g*g+m*(m+2*f)+h;else m<=-M?(g=Math.max(0,-(-l*a+u)),m=g>0?-a:Math.min(Math.max(-a,-f),a),x=-g*g+m*(m+2*f)+h):m<=M?(g=0,m=Math.min(Math.max(-a,-f),a),x=m*(m+2*f)+h):(g=Math.max(0,-(l*a+u)),m=g>0?a:Math.min(Math.max(-a,-f),a),x=-g*g+m*(m+2*f)+h);else m=l>0?-a:a,g=Math.max(0,-(l*m+u)),x=-g*g+m*(m+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Rf).addScaledVector(kl,m),x}intersectSphere(t,e){fr.subVectors(t.center,this.origin);const i=fr.dot(this.direction),s=fr.dot(fr)-i*i,a=t.radius*t.radius;if(s>a)return null;const l=Math.sqrt(a-s),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,l,u,f;const h=1/this.direction.x,d=1/this.direction.y,g=1/this.direction.z,m=this.origin;return h>=0?(i=(t.min.x-m.x)*h,s=(t.max.x-m.x)*h):(i=(t.max.x-m.x)*h,s=(t.min.x-m.x)*h),d>=0?(a=(t.min.y-m.y)*d,l=(t.max.y-m.y)*d):(a=(t.max.y-m.y)*d,l=(t.min.y-m.y)*d),i>l||a>s||((a>i||isNaN(i))&&(i=a),(l<s||isNaN(s))&&(s=l),g>=0?(u=(t.min.z-m.z)*g,f=(t.max.z-m.z)*g):(u=(t.max.z-m.z)*g,f=(t.min.z-m.z)*g),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,fr)!==null}intersectTriangle(t,e,i,s,a){Pf.subVectors(e,t),Wl.subVectors(i,t),Lf.crossVectors(Pf,Wl);let l=this.direction.dot(Lf),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;Or.subVectors(this.origin,t);const f=u*this.direction.dot(Wl.crossVectors(Or,Wl));if(f<0)return null;const h=u*this.direction.dot(Pf.cross(Or));if(h<0||f+h>l)return null;const d=-u*Or.dot(Lf);return d<0?null:this.at(d/l,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(t,e,i,s,a,l,u,f,h,d,g,m,x,M,E,v){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,l,u,f,h,d,g,m,x,M,E,v)}set(t,e,i,s,a,l,u,f,h,d,g,m,x,M,E,v){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=s,_[1]=a,_[5]=l,_[9]=u,_[13]=f,_[2]=h,_[6]=d,_[10]=g,_[14]=m,_[3]=x,_[7]=M,_[11]=E,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/fo.setFromMatrixColumn(t,0).length(),a=1/fo.setFromMatrixColumn(t,1).length(),l=1/fo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(s),h=Math.sin(s),d=Math.cos(a),g=Math.sin(a);if(t.order==="XYZ"){const m=l*d,x=l*g,M=u*d,E=u*g;e[0]=f*d,e[4]=-f*g,e[8]=h,e[1]=x+M*h,e[5]=m-E*h,e[9]=-u*f,e[2]=E-m*h,e[6]=M+x*h,e[10]=l*f}else if(t.order==="YXZ"){const m=f*d,x=f*g,M=h*d,E=h*g;e[0]=m+E*u,e[4]=M*u-x,e[8]=l*h,e[1]=l*g,e[5]=l*d,e[9]=-u,e[2]=x*u-M,e[6]=E+m*u,e[10]=l*f}else if(t.order==="ZXY"){const m=f*d,x=f*g,M=h*d,E=h*g;e[0]=m-E*u,e[4]=-l*g,e[8]=M+x*u,e[1]=x+M*u,e[5]=l*d,e[9]=E-m*u,e[2]=-l*h,e[6]=u,e[10]=l*f}else if(t.order==="ZYX"){const m=l*d,x=l*g,M=u*d,E=u*g;e[0]=f*d,e[4]=M*h-x,e[8]=m*h+E,e[1]=f*g,e[5]=E*h+m,e[9]=x*h-M,e[2]=-h,e[6]=u*f,e[10]=l*f}else if(t.order==="YZX"){const m=l*f,x=l*h,M=u*f,E=u*h;e[0]=f*d,e[4]=E-m*g,e[8]=M*g+x,e[1]=g,e[5]=l*d,e[9]=-u*d,e[2]=-h*d,e[6]=x*g+M,e[10]=m-E*g}else if(t.order==="XZY"){const m=l*f,x=l*h,M=u*f,E=u*h;e[0]=f*d,e[4]=-g,e[8]=h*d,e[1]=m*g+E,e[5]=l*d,e[9]=x*g-M,e[2]=M*g-x,e[6]=u*d,e[10]=E*g+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(aC,t,lC)}lookAt(t,e,i){const s=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),Br.crossVectors(i,li),Br.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Br.crossVectors(i,li)),Br.normalize(),Xl.crossVectors(li,Br),s[0]=Br.x,s[4]=Xl.x,s[8]=li.x,s[1]=Br.y,s[5]=Xl.y,s[9]=li.y,s[2]=Br.z,s[6]=Xl.z,s[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,l=i[0],u=i[4],f=i[8],h=i[12],d=i[1],g=i[5],m=i[9],x=i[13],M=i[2],E=i[6],v=i[10],_=i[14],P=i[3],A=i[7],I=i[11],$=i[15],F=s[0],B=s[4],j=s[8],L=s[12],R=s[1],G=s[5],ft=s[9],ot=s[13],vt=s[2],Mt=s[6],ct=s[10],at=s[14],Q=s[3],Pt=s[7],Ot=s[11],Lt=s[15];return a[0]=l*F+u*R+f*vt+h*Q,a[4]=l*B+u*G+f*Mt+h*Pt,a[8]=l*j+u*ft+f*ct+h*Ot,a[12]=l*L+u*ot+f*at+h*Lt,a[1]=d*F+g*R+m*vt+x*Q,a[5]=d*B+g*G+m*Mt+x*Pt,a[9]=d*j+g*ft+m*ct+x*Ot,a[13]=d*L+g*ot+m*at+x*Lt,a[2]=M*F+E*R+v*vt+_*Q,a[6]=M*B+E*G+v*Mt+_*Pt,a[10]=M*j+E*ft+v*ct+_*Ot,a[14]=M*L+E*ot+v*at+_*Lt,a[3]=P*F+A*R+I*vt+$*Q,a[7]=P*B+A*G+I*Mt+$*Pt,a[11]=P*j+A*ft+I*ct+$*Ot,a[15]=P*L+A*ot+I*at+$*Lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],l=t[1],u=t[5],f=t[9],h=t[13],d=t[2],g=t[6],m=t[10],x=t[14],M=t[3],E=t[7],v=t[11],_=t[15];return M*(+a*f*g-s*h*g-a*u*m+i*h*m+s*u*x-i*f*x)+E*(+e*f*x-e*h*m+a*l*m-s*l*x+s*h*d-a*f*d)+v*(+e*h*g-e*u*x-a*l*g+i*l*x+a*u*d-i*h*d)+_*(-s*u*d-e*f*g+e*u*m+s*l*g-i*l*m+i*f*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],l=t[4],u=t[5],f=t[6],h=t[7],d=t[8],g=t[9],m=t[10],x=t[11],M=t[12],E=t[13],v=t[14],_=t[15],P=g*v*h-E*m*h+E*f*x-u*v*x-g*f*_+u*m*_,A=M*m*h-d*v*h-M*f*x+l*v*x+d*f*_-l*m*_,I=d*E*h-M*g*h+M*u*x-l*E*x-d*u*_+l*g*_,$=M*g*f-d*E*f-M*u*m+l*E*m+d*u*v-l*g*v,F=e*P+i*A+s*I+a*$;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/F;return t[0]=P*B,t[1]=(E*m*a-g*v*a-E*s*x+i*v*x+g*s*_-i*m*_)*B,t[2]=(u*v*a-E*f*a+E*s*h-i*v*h-u*s*_+i*f*_)*B,t[3]=(g*f*a-u*m*a-g*s*h+i*m*h+u*s*x-i*f*x)*B,t[4]=A*B,t[5]=(d*v*a-M*m*a+M*s*x-e*v*x-d*s*_+e*m*_)*B,t[6]=(M*f*a-l*v*a-M*s*h+e*v*h+l*s*_-e*f*_)*B,t[7]=(l*m*a-d*f*a+d*s*h-e*m*h-l*s*x+e*f*x)*B,t[8]=I*B,t[9]=(M*g*a-d*E*a-M*i*x+e*E*x+d*i*_-e*g*_)*B,t[10]=(l*E*a-M*u*a+M*i*h-e*E*h-l*i*_+e*u*_)*B,t[11]=(d*u*a-l*g*a-d*i*h+e*g*h+l*i*x-e*u*x)*B,t[12]=$*B,t[13]=(d*E*s-M*g*s+M*i*m-e*E*m-d*i*v+e*g*v)*B,t[14]=(M*u*s-l*E*s-M*i*f+e*E*f+l*i*v-e*u*v)*B,t[15]=(l*g*s-d*u*s+d*i*f-e*g*f-l*i*m+e*u*m)*B,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,l=t.x,u=t.y,f=t.z,h=a*l,d=a*u;return this.set(h*l+i,h*u-s*f,h*f+s*u,0,h*u+s*f,d*u+i,d*f-s*l,0,h*f-s*u,d*f+s*l,a*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,l){return this.set(1,i,a,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,l=e._y,u=e._z,f=e._w,h=a+a,d=l+l,g=u+u,m=a*h,x=a*d,M=a*g,E=l*d,v=l*g,_=u*g,P=f*h,A=f*d,I=f*g,$=i.x,F=i.y,B=i.z;return s[0]=(1-(E+_))*$,s[1]=(x+I)*$,s[2]=(M-A)*$,s[3]=0,s[4]=(x-I)*F,s[5]=(1-(m+_))*F,s[6]=(v+P)*F,s[7]=0,s[8]=(M+A)*B,s[9]=(v-P)*B,s[10]=(1-(m+E))*B,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let a=fo.set(s[0],s[1],s[2]).length();const l=fo.set(s[4],s[5],s[6]).length(),u=fo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Ii.copy(this);const h=1/a,d=1/l,g=1/u;return Ii.elements[0]*=h,Ii.elements[1]*=h,Ii.elements[2]*=h,Ii.elements[4]*=d,Ii.elements[5]*=d,Ii.elements[6]*=d,Ii.elements[8]*=g,Ii.elements[9]*=g,Ii.elements[10]*=g,e.setFromRotationMatrix(Ii),i.x=a,i.y=l,i.z=u,this}makePerspective(t,e,i,s,a,l,u=Mr){const f=this.elements,h=2*a/(e-t),d=2*a/(i-s),g=(e+t)/(e-t),m=(i+s)/(i-s);let x,M;if(u===Mr)x=-(l+a)/(l-a),M=-2*l*a/(l-a);else if(u===Lc)x=-l/(l-a),M=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=d,f[9]=m,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,s,a,l,u=Mr){const f=this.elements,h=1/(e-t),d=1/(i-s),g=1/(l-a),m=(e+t)*h,x=(i+s)*d;let M,E;if(u===Mr)M=(l+a)*g,E=-2*g;else if(u===Lc)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-m,f[1]=0,f[5]=2*d,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=E,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const fo=new q,Ii=new nn,aC=new q(0,0,0),lC=new q(1,1,1),Br=new q,Xl=new q,li=new q,Cg=new nn,Rg=new Oa;class Un{constructor(t=0,e=0,i=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],l=s[4],u=s[8],f=s[1],h=s[5],d=s[9],g=s[2],m=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(Yn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Yn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Yn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Yn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Yn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-d,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Cg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cg,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rg.setFromEuler(this),this.setFromQuaternion(Rg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class O0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cC=0;const Pg=new q,ho=new Oa,hr=new nn,ql=new q,pa=new q,uC=new q,fC=new Oa,Lg=new q(1,0,0),Ig=new q(0,1,0),Dg=new q(0,0,1),Ug={type:"added"},hC={type:"removed"},po={type:"childadded",child:null},If={type:"childremoved",child:null};class Fn extends Vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cC++}),this.uuid=Fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const t=new q,e=new Un,i=new Oa,s=new q(1,1,1);function a(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nn},normalMatrix:{value:new de}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ho.setFromAxisAngle(t,e),this.quaternion.multiply(ho),this}rotateOnWorldAxis(t,e){return ho.setFromAxisAngle(t,e),this.quaternion.premultiply(ho),this}rotateX(t){return this.rotateOnAxis(Lg,t)}rotateY(t){return this.rotateOnAxis(Ig,t)}rotateZ(t){return this.rotateOnAxis(Dg,t)}translateOnAxis(t,e){return Pg.copy(t).applyQuaternion(this.quaternion),this.position.add(Pg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lg,t)}translateY(t){return this.translateOnAxis(Ig,t)}translateZ(t){return this.translateOnAxis(Dg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ql.copy(t):ql.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(pa,ql,this.up):hr.lookAt(ql,pa,this.up),this.quaternion.setFromRotationMatrix(hr),s&&(hr.extractRotation(s.matrixWorld),ho.setFromRotationMatrix(hr),this.quaternion.premultiply(ho.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ug),po.child=t,this.dispatchEvent(po),po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hC),If.child=t,this.dispatchEvent(If),If.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hr.multiply(t.parent.matrixWorld)),t.applyMatrix4(hr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ug),po.child=t,this.dispatchEvent(po),po.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,t,uC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,fC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,d=f.length;h<d;h++){const g=f[h];a(t.shapes,g)}else a(t.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(t.materials,this.material[f]));s.material=u}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(a(t.animations,f))}}if(e){const u=l(t.geometries),f=l(t.materials),h=l(t.textures),d=l(t.images),g=l(t.shapes),m=l(t.skeletons),x=l(t.animations),M=l(t.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=s,i;function l(u){const f=[];for(const h in u){const d=u[h];delete d.metadata,f.push(d)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Fn.DEFAULT_UP=new q(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new q,dr=new q,Df=new q,pr=new q,mo=new q,go=new q,Ng=new q,Uf=new q,Nf=new q,Ff=new q;class Ji{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Di.subVectors(t,e),s.cross(Di);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){Di.subVectors(s,e),dr.subVectors(i,e),Df.subVectors(t,e);const l=Di.dot(Di),u=Di.dot(dr),f=Di.dot(Df),h=dr.dot(dr),d=dr.dot(Df),g=l*h-u*u;if(g===0)return a.set(0,0,0),null;const m=1/g,x=(h*f-u*d)*m,M=(l*d-u*f)*m;return a.set(1-x-M,M,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(t,e,i,s,a,l,u,f){return this.getBarycoord(t,e,i,s,pr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,pr.x),f.addScaledVector(l,pr.y),f.addScaledVector(u,pr.z),f)}static isFrontFacing(t,e,i,s){return Di.subVectors(i,e),dr.subVectors(t,e),Di.cross(dr).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Di.cross(dr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ji.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return Ji.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return Ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let l,u;mo.subVectors(s,i),go.subVectors(a,i),Uf.subVectors(t,i);const f=mo.dot(Uf),h=go.dot(Uf);if(f<=0&&h<=0)return e.copy(i);Nf.subVectors(t,s);const d=mo.dot(Nf),g=go.dot(Nf);if(d>=0&&g<=d)return e.copy(s);const m=f*g-d*h;if(m<=0&&f>=0&&d<=0)return l=f/(f-d),e.copy(i).addScaledVector(mo,l);Ff.subVectors(t,a);const x=mo.dot(Ff),M=go.dot(Ff);if(M>=0&&x<=M)return e.copy(a);const E=x*h-f*M;if(E<=0&&h>=0&&M<=0)return u=h/(h-M),e.copy(i).addScaledVector(go,u);const v=d*M-x*g;if(v<=0&&g-d>=0&&x-M>=0)return Ng.subVectors(a,s),u=(g-d)/(g-d+(x-M)),e.copy(s).addScaledVector(Ng,u);const _=1/(v+E+m);return l=E*_,u=m*_,e.copy(i).addScaledVector(mo,l).addScaledVector(go,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const B0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function Of(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Pe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ue.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ue.workingColorSpace){if(t=Jw(t,1),e=Yn(e,0,1),i=Yn(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,l=2*i-a;this.r=Of(l,a,t+1/3),this.g=Of(l,a,t),this.b=Of(l,a,t-1/3)}return Ue.toWorkingColorSpace(this,s),this}setStyle(t,e=qi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qi){const i=B0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Do(t.r),this.g=Do(t.g),this.b=Do(t.b),this}copyLinearToSRGB(t){return this.r=Tf(t.r),this.g=Tf(t.g),this.b=Tf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qi){return Ue.fromWorkingColorSpace(An.copy(this),t),Math.round(Yn(An.r*255,0,255))*65536+Math.round(Yn(An.g*255,0,255))*256+Math.round(Yn(An.b*255,0,255))}getHexString(t=qi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ue.workingColorSpace){Ue.fromWorkingColorSpace(An.copy(this),e);const i=An.r,s=An.g,a=An.b,l=Math.max(i,s,a),u=Math.min(i,s,a);let f,h;const d=(u+l)/2;if(u===l)f=0,h=0;else{const g=l-u;switch(h=d<=.5?g/(l+u):g/(2-l-u),l){case i:f=(s-a)/g+(s<a?6:0);break;case s:f=(a-i)/g+2;break;case a:f=(i-s)/g+4;break}f/=6}return t.h=f,t.s=h,t.l=d,t}getRGB(t,e=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=qi){Ue.fromWorkingColorSpace(An.copy(this),t);const e=An.r,i=An.g,s=An.b;return t!==qi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(zr),this.setHSL(zr.h+t,zr.s+e,zr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(zr),t.getHSL(Yl);const i=yf(zr.h,Yl.h,e),s=yf(zr.s,Yl.s,e),a=yf(zr.l,Yl.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Pe;Pe.NAMES=B0;let dC=0;class ko extends Vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dC++}),this.uuid=Fa(),this.name="",this.type="Material",this.blending=Lo,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=ah,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=wc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(i.blending=this.blending),this.side!==Zr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oh&&(i.blendSrc=this.blendSrc),this.blendDst!==ah&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}if(e){const a=s(t.textures),l=s(t.images);a.length>0&&(i.textures=a),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class vd extends ko{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=S0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new q,$l=new Fe;class fn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ba("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$l.fromBufferAttribute(this,e),$l.applyMatrix3(t),this.setXY(e,$l.x,$l.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ua(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ua(e,this.array)),e}setX(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ua(e,this.array)),e}setY(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ua(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ua(e,this.array)),e}setW(t,e){return this.normalized&&(e=Wn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Wn(e,this.array),i=Wn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Wn(e,this.array),i=Wn(i,this.array),s=Wn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=Wn(e,this.array),i=Wn(i,this.array),s=Wn(s,this.array),a=Wn(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sg&&(t.usage=this.usage),t}}class z0 extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class H0 extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Jn extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let pC=0;const Mi=new nn,Bf=new Fn,_o=new q,ci=new Ba,ma=new Ba,gn=new q;class ti extends Vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pC++}),this.uuid=Fa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(U0(t)?H0:z0)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new de().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,i){return Mi.makeTranslation(t,e,i),this.applyMatrix4(Mi),this}scale(t,e,i){return Mi.makeScale(t,e,i),this.applyMatrix4(Mi),this}lookAt(t){return Bf.lookAt(t),Bf.updateMatrix(),this.applyMatrix4(Bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Jn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ba);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];ci.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let a=0,l=e.length;a<l;a++){const u=e[a];ma.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(ci.min,ma.min),ci.expandByPoint(gn),gn.addVectors(ci.max,ma.max),ci.expandByPoint(gn)):(ci.expandByPoint(ma.min),ci.expandByPoint(ma.max))}ci.getCenter(i);let s=0;for(let a=0,l=t.count;a<l;a++)gn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(gn));if(e)for(let a=0,l=e.length;a<l;a++){const u=e[a],f=this.morphTargetsRelative;for(let h=0,d=u.count;h<d;h++)gn.fromBufferAttribute(u,h),f&&(_o.fromBufferAttribute(t,h),gn.add(_o)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),u=[],f=[];for(let j=0;j<i.count;j++)u[j]=new q,f[j]=new q;const h=new q,d=new q,g=new q,m=new Fe,x=new Fe,M=new Fe,E=new q,v=new q;function _(j,L,R){h.fromBufferAttribute(i,j),d.fromBufferAttribute(i,L),g.fromBufferAttribute(i,R),m.fromBufferAttribute(a,j),x.fromBufferAttribute(a,L),M.fromBufferAttribute(a,R),d.sub(h),g.sub(h),x.sub(m),M.sub(m);const G=1/(x.x*M.y-M.x*x.y);isFinite(G)&&(E.copy(d).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(G),v.copy(g).multiplyScalar(x.x).addScaledVector(d,-M.x).multiplyScalar(G),u[j].add(E),u[L].add(E),u[R].add(E),f[j].add(v),f[L].add(v),f[R].add(v))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let j=0,L=P.length;j<L;++j){const R=P[j],G=R.start,ft=R.count;for(let ot=G,vt=G+ft;ot<vt;ot+=3)_(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const A=new q,I=new q,$=new q,F=new q;function B(j){$.fromBufferAttribute(s,j),F.copy($);const L=u[j];A.copy(L),A.sub($.multiplyScalar($.dot(L))).normalize(),I.crossVectors(F,L);const G=I.dot(f[j])<0?-1:1;l.setXYZW(j,A.x,A.y,A.z,G)}for(let j=0,L=P.length;j<L;++j){const R=P[j],G=R.start,ft=R.count;for(let ot=G,vt=G+ft;ot<vt;ot+=3)B(t.getX(ot+0)),B(t.getX(ot+1)),B(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,x=i.count;m<x;m++)i.setXYZ(m,0,0,0);const s=new q,a=new q,l=new q,u=new q,f=new q,h=new q,d=new q,g=new q;if(t)for(let m=0,x=t.count;m<x;m+=3){const M=t.getX(m+0),E=t.getX(m+1),v=t.getX(m+2);s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,E),l.fromBufferAttribute(e,v),d.subVectors(l,a),g.subVectors(s,a),d.cross(g),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,v),u.add(d),f.add(d),h.add(d),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(v,h.x,h.y,h.z)}else for(let m=0,x=e.count;m<x;m+=3)s.fromBufferAttribute(e,m+0),a.fromBufferAttribute(e,m+1),l.fromBufferAttribute(e,m+2),d.subVectors(l,a),g.subVectors(s,a),d.cross(g),i.setXYZ(m+0,d.x,d.y,d.z),i.setXYZ(m+1,d.x,d.y,d.z),i.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(u,f){const h=u.array,d=u.itemSize,g=u.normalized,m=new h.constructor(f.length*d);let x=0,M=0;for(let E=0,v=f.length;E<v;E++){u.isInterleavedBufferAttribute?x=f[E]*u.data.stride+u.offset:x=f[E]*d;for(let _=0;_<d;_++)m[M++]=h[x++]}return new fn(m,d,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ti,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],h=t(f,i);e.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let d=0,g=h.length;d<g;d++){const m=h[d],x=t(m,i);f.push(x)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const h=l[u];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(t[h]=f[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const f in i){const h=i[f];t.data.attributes[f]=h.toJSON(t.data)}const s={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],d=[];for(let g=0,m=h.length;g<m;g++){const x=h[g];d.push(x.toJSON(t.data))}d.length>0&&(s[f]=d,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(e))}const a=t.morphAttributes;for(const h in a){const d=[],g=a[h];for(let m=0,x=g.length;m<x;m++)d.push(g[m].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let h=0,d=l.length;h<d;h++){const g=l[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fg=new nn,_s=new _d,Kl=new za,Og=new q,vo=new q,xo=new q,Mo=new q,zf=new q,Zl=new q,Jl=new Fe,jl=new Fe,Ql=new Fe,Bg=new q,zg=new q,Hg=new q,tc=new q,ec=new q;class Oi extends Fn{constructor(t=new ti,e=new vd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const u=this.morphTargetInfluences;if(a&&u){Zl.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const d=u[f],g=a[f];d!==0&&(zf.fromBufferAttribute(g,t),l?Zl.addScaledVector(zf,d):Zl.addScaledVector(zf.sub(e),d))}e.add(Zl)}return e}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kl.copy(i.boundingSphere),Kl.applyMatrix4(a),_s.copy(t.ray).recast(t.near),!(Kl.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Kl,Og)===null||_s.origin.distanceToSquared(Og)>(t.far-t.near)**2))&&(Fg.copy(a).invert(),_s.copy(t.ray).applyMatrix4(Fg),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,i){let s;const a=this.geometry,l=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,d=a.attributes.uv1,g=a.attributes.normal,m=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(l))for(let M=0,E=m.length;M<E;M++){const v=m[M],_=l[v.materialIndex],P=Math.max(v.start,x.start),A=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let I=P,$=A;I<$;I+=3){const F=u.getX(I),B=u.getX(I+1),j=u.getX(I+2);s=nc(this,_,t,i,h,d,g,F,B,j),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(u.count,x.start+x.count);for(let v=M,_=E;v<_;v+=3){const P=u.getX(v),A=u.getX(v+1),I=u.getX(v+2);s=nc(this,l,t,i,h,d,g,P,A,I),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let M=0,E=m.length;M<E;M++){const v=m[M],_=l[v.materialIndex],P=Math.max(v.start,x.start),A=Math.min(f.count,Math.min(v.start+v.count,x.start+x.count));for(let I=P,$=A;I<$;I+=3){const F=I,B=I+1,j=I+2;s=nc(this,_,t,i,h,d,g,F,B,j),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let v=M,_=E;v<_;v+=3){const P=v,A=v+1,I=v+2;s=nc(this,l,t,i,h,d,g,P,A,I),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}}function mC(n,t,e,i,s,a,l,u){let f;if(t.side===Kn?f=i.intersectTriangle(l,a,s,!0,u):f=i.intersectTriangle(s,a,l,t.side===Zr,u),f===null)return null;ec.copy(u),ec.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(ec);return h<e.near||h>e.far?null:{distance:h,point:ec.clone(),object:n}}function nc(n,t,e,i,s,a,l,u,f,h){n.getVertexPosition(u,vo),n.getVertexPosition(f,xo),n.getVertexPosition(h,Mo);const d=mC(n,t,e,i,vo,xo,Mo,tc);if(d){s&&(Jl.fromBufferAttribute(s,u),jl.fromBufferAttribute(s,f),Ql.fromBufferAttribute(s,h),d.uv=Ji.getInterpolation(tc,vo,xo,Mo,Jl,jl,Ql,new Fe)),a&&(Jl.fromBufferAttribute(a,u),jl.fromBufferAttribute(a,f),Ql.fromBufferAttribute(a,h),d.uv1=Ji.getInterpolation(tc,vo,xo,Mo,Jl,jl,Ql,new Fe)),l&&(Bg.fromBufferAttribute(l,u),zg.fromBufferAttribute(l,f),Hg.fromBufferAttribute(l,h),d.normal=Ji.getInterpolation(tc,vo,xo,Mo,Bg,zg,Hg,new q),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const g={a:u,b:f,c:h,normal:new q,materialIndex:0};Ji.getNormal(vo,xo,Mo,g.normal),d.face=g}return d}class Ha extends ti{constructor(t=1,e=1,i=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:l};const u=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const f=[],h=[],d=[],g=[];let m=0,x=0;M("z","y","x",-1,-1,i,e,t,l,a,0),M("z","y","x",1,-1,i,e,-t,l,a,1),M("x","z","y",1,1,t,i,e,s,l,2),M("x","z","y",1,-1,t,i,-e,s,l,3),M("x","y","z",1,-1,t,e,i,s,a,4),M("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(f),this.setAttribute("position",new Jn(h,3)),this.setAttribute("normal",new Jn(d,3)),this.setAttribute("uv",new Jn(g,2));function M(E,v,_,P,A,I,$,F,B,j,L){const R=I/B,G=$/j,ft=I/2,ot=$/2,vt=F/2,Mt=B+1,ct=j+1;let at=0,Q=0;const Pt=new q;for(let Ot=0;Ot<ct;Ot++){const Lt=Ot*G-ot;for(let ie=0;ie<Mt;ie++){const ye=ie*R-ft;Pt[E]=ye*P,Pt[v]=Lt*A,Pt[_]=vt,h.push(Pt.x,Pt.y,Pt.z),Pt[E]=0,Pt[v]=0,Pt[_]=F>0?1:-1,d.push(Pt.x,Pt.y,Pt.z),g.push(ie/B),g.push(1-Ot/j),at+=1}}for(let Ot=0;Ot<j;Ot++)for(let Lt=0;Lt<B;Lt++){const ie=m+Lt+Mt*Ot,ye=m+Lt+Mt*(Ot+1),ht=m+(Lt+1)+Mt*(Ot+1),At=m+(Lt+1)+Mt*Ot;f.push(ie,ye,At),f.push(ye,ht,At),Q+=6}u.addGroup(x,Q,L),x+=Q,m+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Go(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Dn(n){const t={};for(let e=0;e<n.length;e++){const i=Go(n[e]);for(const s in i)t[s]=i[s]}return t}function gC(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function G0(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const _C={clone:Go,merge:Dn};var vC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jr extends ko{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vC,this.fragmentShader=xC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Go(t.uniforms),this.uniformsGroups=gC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class V0 extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Mr}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new q,Gg=new Fe,Vg=new Fe;class Si extends V0{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bh*2*Math.atan(Math.tan(Sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hr.x,Hr.y).multiplyScalar(-t/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-t/Hr.z)}getViewSize(t,e){return this.getViewBounds(t,Gg,Vg),e.subVectors(Vg,Gg)}setViewOffset(t,e,i,s,a,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sf*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;a+=l.offsetX*s/f,e-=l.offsetY*i/h,s*=l.width/f,i*=l.height/h}const u=this.filmOffset;u!==0&&(a+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const So=-90,yo=1;class MC extends Fn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Si(So,yo,t,e);s.layers=this.layers,this.add(s);const a=new Si(So,yo,t,e);a.layers=this.layers,this.add(a);const l=new Si(So,yo,t,e);l.layers=this.layers,this.add(l);const u=new Si(So,yo,t,e);u.layers=this.layers,this.add(u);const f=new Si(So,yo,t,e);f.layers=this.layers,this.add(f);const h=new Si(So,yo,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,l,u,f]=e;for(const h of e)this.remove(h);if(t===Mr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===Lc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,l,u,f,h,d]=this.children,g=t.getRenderTarget(),m=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,l),t.setRenderTarget(i,2,s),t.render(e,u),t.setRenderTarget(i,3,s),t.render(e,f),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),t.render(e,d),t.setRenderTarget(g,m,x),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class k0 extends Zn{constructor(t,e,i,s,a,l,u,f,h,d){t=t!==void 0?t:[],e=e!==void 0?e:Oo,super(t,e,i,s,a,l,u,f,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class SC extends Fs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new k0(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ni}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ha(5,5,5),a=new Jr({name:"CubemapFromEquirect",uniforms:Go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kn,blending:Yr});a.uniforms.tEquirect.value=e;const l=new Oi(s,a),u=e.minFilter;return e.minFilter===Rs&&(e.minFilter=Ni),new MC(1,10,this).update(t,l),e.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,i,s){const a=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,s);t.setRenderTarget(a)}}const Hf=new q,yC=new q,EC=new de;class ys{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Hf.subVectors(i,e).cross(yC.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Hf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||EC.getNormalMatrix(t),s=this.coplanarPoint(Hf).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new za,ic=new q;class W0{constructor(t=new ys,e=new ys,i=new ys,s=new ys,a=new ys,l=new ys){this.planes=[t,e,i,s,a,l]}set(t,e,i,s,a,l){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(l),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mr){const i=this.planes,s=t.elements,a=s[0],l=s[1],u=s[2],f=s[3],h=s[4],d=s[5],g=s[6],m=s[7],x=s[8],M=s[9],E=s[10],v=s[11],_=s[12],P=s[13],A=s[14],I=s[15];if(i[0].setComponents(f-a,m-h,v-x,I-_).normalize(),i[1].setComponents(f+a,m+h,v+x,I+_).normalize(),i[2].setComponents(f+l,m+d,v+M,I+P).normalize(),i[3].setComponents(f-l,m-d,v-M,I-P).normalize(),i[4].setComponents(f-u,m-g,v-E,I-A).normalize(),e===Mr)i[5].setComponents(f+u,m+g,v+E,I+A).normalize();else if(e===Lc)i[5].setComponents(u,g,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ic.x=s.normal.x>0?t.max.x:t.min.x,ic.y=s.normal.y>0?t.max.y:t.min.y,ic.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ic)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function X0(){let n=null,t=!1,e=null,i=null;function s(a,l){e(a,l),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function TC(n){const t=new WeakMap;function e(u,f){const h=u.array,d=u.usage,g=h.byteLength,m=n.createBuffer();n.bindBuffer(f,m),n.bufferData(f,h,d),u.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,f,h){const d=f.array,g=f._updateRange,m=f.updateRanges;if(n.bindBuffer(h,u),g.count===-1&&m.length===0&&n.bufferSubData(h,0,d),m.length!==0){for(let x=0,M=m.length;x<M;x++){const E=m[x];n.bufferSubData(h,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}f.clearUpdateRanges()}g.count!==-1&&(n.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count),g.count=-1),f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=t.get(u);f&&(n.deleteBuffer(f.buffer),t.delete(u))}function l(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const d=t.get(u);(!d||d.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=t.get(u);if(h===void 0)t.set(u,e(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:s,remove:a,update:l}}class Jc extends ti{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,l=e/2,u=Math.floor(i),f=Math.floor(s),h=u+1,d=f+1,g=t/u,m=e/f,x=[],M=[],E=[],v=[];for(let _=0;_<d;_++){const P=_*m-l;for(let A=0;A<h;A++){const I=A*g-a;M.push(I,-P,0),E.push(0,0,1),v.push(A/u),v.push(1-_/f)}}for(let _=0;_<f;_++)for(let P=0;P<u;P++){const A=P+h*_,I=P+h*(_+1),$=P+1+h*(_+1),F=P+1+h*_;x.push(A,I,F),x.push(I,$,F)}this.setIndex(x),this.setAttribute("position",new Jn(M,3)),this.setAttribute("normal",new Jn(E,3)),this.setAttribute("uv",new Jn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.width,t.height,t.widthSegments,t.heightSegments)}}var AC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bC=`#ifdef USE_ALPHAHASH
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
#endif`,wC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LC=`#ifdef USE_AOMAP
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
#endif`,IC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DC=`#ifdef USE_BATCHING
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
#endif`,UC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BC=`#ifdef USE_IRIDESCENCE
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
#endif`,zC=`#ifdef USE_BUMPMAP
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
#endif`,HC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$C=`#define PI 3.141592653589793
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
} // validated`,KC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZC=`vec3 transformedNormal = objectNormal;
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
#endif`,JC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eR="gl_FragColor = linearToOutputTexel( gl_FragColor );",nR=`
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
}`,iR=`#ifdef USE_ENVMAP
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
#endif`,rR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sR=`#ifdef USE_ENVMAP
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
#endif`,oR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aR=`#ifdef USE_ENVMAP
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
#endif`,lR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hR=`#ifdef USE_GRADIENTMAP
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
}`,dR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gR=`uniform bool receiveShadow;
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
#endif`,_R=`#ifdef USE_ENVMAP
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
#endif`,vR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yR=`PhysicalMaterial material;
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
#endif`,ER=`struct PhysicalMaterial {
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
}`,TR=`
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
#endif`,AR=`#if defined( RE_IndirectDiffuse )
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
#endif`,bR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UR=`#if defined( USE_POINTS_UV )
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
#endif`,NR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HR=`#ifdef USE_MORPHTARGETS
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
#endif`,GR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YR=`#ifdef USE_NORMALMAP
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
#endif`,$R=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cP=`float getShadowMask() {
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
}`,uP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fP=`#ifdef USE_SKINNING
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
#endif`,hP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dP=`#ifdef USE_SKINNING
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
#endif`,pP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_P=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vP=`#ifdef USE_TRANSMISSION
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
#endif`,xP=`#ifdef USE_TRANSMISSION
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
#endif`,MP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AP=`uniform sampler2D t2D;
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
}`,bP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PP=`#include <common>
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
}`,LP=`#if DEPTH_PACKING == 3200
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
}`,IP=`#define DISTANCE
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
}`,DP=`#define DISTANCE
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
}`,UP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FP=`uniform float scale;
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
}`,OP=`uniform vec3 diffuse;
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
}`,BP=`#include <common>
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
}`,zP=`uniform vec3 diffuse;
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
}`,HP=`#define LAMBERT
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
}`,GP=`#define LAMBERT
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
}`,VP=`#define MATCAP
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
}`,kP=`#define MATCAP
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
}`,WP=`#define NORMAL
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
}`,XP=`#define NORMAL
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
}`,qP=`#define PHONG
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
}`,YP=`#define PHONG
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
}`,$P=`#define STANDARD
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
}`,KP=`#define STANDARD
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
}`,ZP=`#define TOON
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
}`,JP=`#define TOON
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
}`,jP=`uniform float size;
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
}`,QP=`uniform vec3 diffuse;
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
}`,tL=`#include <common>
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
}`,eL=`uniform vec3 color;
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
}`,nL=`uniform float rotation;
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
}`,iL=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:AC,alphahash_pars_fragment:bC,alphamap_fragment:wC,alphamap_pars_fragment:CC,alphatest_fragment:RC,alphatest_pars_fragment:PC,aomap_fragment:LC,aomap_pars_fragment:IC,batching_pars_vertex:DC,batching_vertex:UC,begin_vertex:NC,beginnormal_vertex:FC,bsdfs:OC,iridescence_fragment:BC,bumpmap_pars_fragment:zC,clipping_planes_fragment:HC,clipping_planes_pars_fragment:GC,clipping_planes_pars_vertex:VC,clipping_planes_vertex:kC,color_fragment:WC,color_pars_fragment:XC,color_pars_vertex:qC,color_vertex:YC,common:$C,cube_uv_reflection_fragment:KC,defaultnormal_vertex:ZC,displacementmap_pars_vertex:JC,displacementmap_vertex:jC,emissivemap_fragment:QC,emissivemap_pars_fragment:tR,colorspace_fragment:eR,colorspace_pars_fragment:nR,envmap_fragment:iR,envmap_common_pars_fragment:rR,envmap_pars_fragment:sR,envmap_pars_vertex:oR,envmap_physical_pars_fragment:_R,envmap_vertex:aR,fog_vertex:lR,fog_pars_vertex:cR,fog_fragment:uR,fog_pars_fragment:fR,gradientmap_pars_fragment:hR,lightmap_pars_fragment:dR,lights_lambert_fragment:pR,lights_lambert_pars_fragment:mR,lights_pars_begin:gR,lights_toon_fragment:vR,lights_toon_pars_fragment:xR,lights_phong_fragment:MR,lights_phong_pars_fragment:SR,lights_physical_fragment:yR,lights_physical_pars_fragment:ER,lights_fragment_begin:TR,lights_fragment_maps:AR,lights_fragment_end:bR,logdepthbuf_fragment:wR,logdepthbuf_pars_fragment:CR,logdepthbuf_pars_vertex:RR,logdepthbuf_vertex:PR,map_fragment:LR,map_pars_fragment:IR,map_particle_fragment:DR,map_particle_pars_fragment:UR,metalnessmap_fragment:NR,metalnessmap_pars_fragment:FR,morphinstance_vertex:OR,morphcolor_vertex:BR,morphnormal_vertex:zR,morphtarget_pars_vertex:HR,morphtarget_vertex:GR,normal_fragment_begin:VR,normal_fragment_maps:kR,normal_pars_fragment:WR,normal_pars_vertex:XR,normal_vertex:qR,normalmap_pars_fragment:YR,clearcoat_normal_fragment_begin:$R,clearcoat_normal_fragment_maps:KR,clearcoat_pars_fragment:ZR,iridescence_pars_fragment:JR,opaque_fragment:jR,packing:QR,premultiplied_alpha_fragment:tP,project_vertex:eP,dithering_fragment:nP,dithering_pars_fragment:iP,roughnessmap_fragment:rP,roughnessmap_pars_fragment:sP,shadowmap_pars_fragment:oP,shadowmap_pars_vertex:aP,shadowmap_vertex:lP,shadowmask_pars_fragment:cP,skinbase_vertex:uP,skinning_pars_vertex:fP,skinning_vertex:hP,skinnormal_vertex:dP,specularmap_fragment:pP,specularmap_pars_fragment:mP,tonemapping_fragment:gP,tonemapping_pars_fragment:_P,transmission_fragment:vP,transmission_pars_fragment:xP,uv_pars_fragment:MP,uv_pars_vertex:SP,uv_vertex:yP,worldpos_vertex:EP,background_vert:TP,background_frag:AP,backgroundCube_vert:bP,backgroundCube_frag:wP,cube_vert:CP,cube_frag:RP,depth_vert:PP,depth_frag:LP,distanceRGBA_vert:IP,distanceRGBA_frag:DP,equirect_vert:UP,equirect_frag:NP,linedashed_vert:FP,linedashed_frag:OP,meshbasic_vert:BP,meshbasic_frag:zP,meshlambert_vert:HP,meshlambert_frag:GP,meshmatcap_vert:VP,meshmatcap_frag:kP,meshnormal_vert:WP,meshnormal_frag:XP,meshphong_vert:qP,meshphong_frag:YP,meshphysical_vert:$P,meshphysical_frag:KP,meshtoon_vert:ZP,meshtoon_frag:JP,points_vert:jP,points_frag:QP,shadow_vert:tL,shadow_frag:eL,sprite_vert:nL,sprite_frag:iL},Ut={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Ki={basic:{uniforms:Dn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Dn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Pe(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Dn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Dn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Dn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Pe(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Dn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Dn([Ut.points,Ut.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Dn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Dn([Ut.common,Ut.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Dn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Dn([Ut.sprite,Ut.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Dn([Ut.common,Ut.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Dn([Ut.lights,Ut.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ki.physical={uniforms:Dn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const rc={r:0,b:0,g:0},xs=new Un,rL=new nn;function sL(n,t,e,i,s,a,l){const u=new Pe(0);let f=a===!0?0:1,h,d,g=null,m=0,x=null;function M(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?e:t).get(A)),A}function E(P){let A=!1;const I=M(P);I===null?_(u,f):I&&I.isColor&&(_(I,1),A=!0);const $=n.xr.getEnvironmentBlendMode();$==="additive"?i.buffers.color.setClear(0,0,0,1,l):$==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(P,A){const I=M(A);I&&(I.isCubeTexture||I.mapping===Kc)?(d===void 0&&(d=new Oi(new Ha(1,1,1),new Jr({name:"BackgroundCubeMaterial",uniforms:Go(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function($,F,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),xs.copy(A.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),d.material.uniforms.envMap.value=I,d.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(rL.makeRotationFromEuler(xs)),d.material.toneMapped=Ue.getTransfer(I.colorSpace)!==We,(g!==I||m!==I.version||x!==n.toneMapping)&&(d.material.needsUpdate=!0,g=I,m=I.version,x=n.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null)):I&&I.isTexture&&(h===void 0&&(h=new Oi(new Jc(2,2),new Jr({name:"BackgroundMaterial",uniforms:Go(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=I,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Ue.getTransfer(I.colorSpace)!==We,I.matrixAutoUpdate===!0&&I.updateMatrix(),h.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||m!==I.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,g=I,m=I.version,x=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function _(P,A){P.getRGB(rc,G0(n)),i.buffers.color.setClear(rc.r,rc.g,rc.b,A,l)}return{getClearColor:function(){return u},setClearColor:function(P,A=1){u.set(P),f=A,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,_(u,f)},render:E,addToRenderList:v}}function oL(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null);let a=s,l=!1;function u(R,G,ft,ot,vt){let Mt=!1;const ct=g(ot,ft,G);a!==ct&&(a=ct,h(a.object)),Mt=x(R,ot,ft,vt),Mt&&M(R,ot,ft,vt),vt!==null&&t.update(vt,n.ELEMENT_ARRAY_BUFFER),(Mt||l)&&(l=!1,I(R,G,ft,ot),vt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function f(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function d(R){return n.deleteVertexArray(R)}function g(R,G,ft){const ot=ft.wireframe===!0;let vt=i[R.id];vt===void 0&&(vt={},i[R.id]=vt);let Mt=vt[G.id];Mt===void 0&&(Mt={},vt[G.id]=Mt);let ct=Mt[ot];return ct===void 0&&(ct=m(f()),Mt[ot]=ct),ct}function m(R){const G=[],ft=[],ot=[];for(let vt=0;vt<e;vt++)G[vt]=0,ft[vt]=0,ot[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ft,attributeDivisors:ot,object:R,attributes:{},index:null}}function x(R,G,ft,ot){const vt=a.attributes,Mt=G.attributes;let ct=0;const at=ft.getAttributes();for(const Q in at)if(at[Q].location>=0){const Ot=vt[Q];let Lt=Mt[Q];if(Lt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Lt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Lt=R.instanceColor)),Ot===void 0||Ot.attribute!==Lt||Lt&&Ot.data!==Lt.data)return!0;ct++}return a.attributesNum!==ct||a.index!==ot}function M(R,G,ft,ot){const vt={},Mt=G.attributes;let ct=0;const at=ft.getAttributes();for(const Q in at)if(at[Q].location>=0){let Ot=Mt[Q];Ot===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Ot=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Ot=R.instanceColor));const Lt={};Lt.attribute=Ot,Ot&&Ot.data&&(Lt.data=Ot.data),vt[Q]=Lt,ct++}a.attributes=vt,a.attributesNum=ct,a.index=ot}function E(){const R=a.newAttributes;for(let G=0,ft=R.length;G<ft;G++)R[G]=0}function v(R){_(R,0)}function _(R,G){const ft=a.newAttributes,ot=a.enabledAttributes,vt=a.attributeDivisors;ft[R]=1,ot[R]===0&&(n.enableVertexAttribArray(R),ot[R]=1),vt[R]!==G&&(n.vertexAttribDivisor(R,G),vt[R]=G)}function P(){const R=a.newAttributes,G=a.enabledAttributes;for(let ft=0,ot=G.length;ft<ot;ft++)G[ft]!==R[ft]&&(n.disableVertexAttribArray(ft),G[ft]=0)}function A(R,G,ft,ot,vt,Mt,ct){ct===!0?n.vertexAttribIPointer(R,G,ft,vt,Mt):n.vertexAttribPointer(R,G,ft,ot,vt,Mt)}function I(R,G,ft,ot){E();const vt=ot.attributes,Mt=ft.getAttributes(),ct=G.defaultAttributeValues;for(const at in Mt){const Q=Mt[at];if(Q.location>=0){let Pt=vt[at];if(Pt===void 0&&(at==="instanceMatrix"&&R.instanceMatrix&&(Pt=R.instanceMatrix),at==="instanceColor"&&R.instanceColor&&(Pt=R.instanceColor)),Pt!==void 0){const Ot=Pt.normalized,Lt=Pt.itemSize,ie=t.get(Pt);if(ie===void 0)continue;const ye=ie.buffer,ht=ie.type,At=ie.bytesPerElement,zt=ht===n.INT||ht===n.UNSIGNED_INT||Pt.gpuType===ud;if(Pt.isInterleavedBufferAttribute){const Ht=Pt.data,Kt=Ht.stride,re=Pt.offset;if(Ht.isInstancedInterleavedBuffer){for(let oe=0;oe<Q.locationSize;oe++)_(Q.location+oe,Ht.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Ht.meshPerAttribute*Ht.count)}else for(let oe=0;oe<Q.locationSize;oe++)v(Q.location+oe);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let oe=0;oe<Q.locationSize;oe++)A(Q.location+oe,Lt/Q.locationSize,ht,Ot,Kt*At,(re+Lt/Q.locationSize*oe)*At,zt)}else{if(Pt.isInstancedBufferAttribute){for(let Ht=0;Ht<Q.locationSize;Ht++)_(Q.location+Ht,Pt.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let Ht=0;Ht<Q.locationSize;Ht++)v(Q.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Ht=0;Ht<Q.locationSize;Ht++)A(Q.location+Ht,Lt/Q.locationSize,ht,Ot,Lt*At,Lt/Q.locationSize*Ht*At,zt)}}else if(ct!==void 0){const Ot=ct[at];if(Ot!==void 0)switch(Ot.length){case 2:n.vertexAttrib2fv(Q.location,Ot);break;case 3:n.vertexAttrib3fv(Q.location,Ot);break;case 4:n.vertexAttrib4fv(Q.location,Ot);break;default:n.vertexAttrib1fv(Q.location,Ot)}}}}P()}function $(){j();for(const R in i){const G=i[R];for(const ft in G){const ot=G[ft];for(const vt in ot)d(ot[vt].object),delete ot[vt];delete G[ft]}delete i[R]}}function F(R){if(i[R.id]===void 0)return;const G=i[R.id];for(const ft in G){const ot=G[ft];for(const vt in ot)d(ot[vt].object),delete ot[vt];delete G[ft]}delete i[R.id]}function B(R){for(const G in i){const ft=i[G];if(ft[R.id]===void 0)continue;const ot=ft[R.id];for(const vt in ot)d(ot[vt].object),delete ot[vt];delete ft[R.id]}}function j(){L(),l=!0,a!==s&&(a=s,h(a.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:j,resetDefaultState:L,dispose:$,releaseStatesOfGeometry:F,releaseStatesOfProgram:B,initAttributes:E,enableAttribute:v,disableUnusedAttributes:P}}function aL(n,t,e){let i;function s(h){i=h}function a(h,d){n.drawArrays(i,h,d),e.update(d,i,1)}function l(h,d,g){g!==0&&(n.drawArraysInstanced(i,h,d,g),e.update(d,i,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,g);let x=0;for(let M=0;M<g;M++)x+=d[M];e.update(x,i,1)}function f(h,d,g,m){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)l(h[M],d[M],m[M]);else{x.multiDrawArraysInstancedWEBGL(i,h,0,d,0,m,0,g);let M=0;for(let E=0;E<g;E++)M+=d[E];for(let E=0;E<m.length;E++)e.update(M,i,m[E])}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function lL(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(F){return!(F!==Fi&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const B=F===Na&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==yr&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==xr&&!B)}function f(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=f(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const g=e.logarithmicDepthBuffer===!0,m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),E=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=x>0,$=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,maxTextures:m,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:E,maxAttributes:v,maxVertexUniforms:_,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:I,maxSamples:$}}function cL(n){const t=this;let e=null,i=0,s=!1,a=!1;const l=new ys,u=new de,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const x=g.length!==0||m||i!==0||s;return s=m,i=g.length,x},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,m){e=d(g,m,0)},this.setState=function(g,m,x){const M=g.clippingPlanes,E=g.clipIntersection,v=g.clipShadows,_=n.get(g);if(!s||M===null||M.length===0||a&&!v)a?d(null):h();else{const P=a?0:i,A=P*4;let I=_.clippingState||null;f.value=I,I=d(M,m,A,x);for(let $=0;$!==A;++$)I[$]=e[$];_.clippingState=I,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function h(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(g,m,x,M){const E=g!==null?g.length:0;let v=null;if(E!==0){if(v=f.value,M!==!0||v===null){const _=x+E*4,P=m.matrixWorldInverse;u.getNormalMatrix(P),(v===null||v.length<_)&&(v=new Float32Array(_));for(let A=0,I=x;A!==E;++A,I+=4)l.copy(g[A]).applyMatrix4(P,u),l.normal.toArray(v,I),v[I+3]=l.constant}f.value=v,f.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,v}}function uL(n){let t=new WeakMap;function e(l,u){return u===lh?l.mapping=Oo:u===ch&&(l.mapping=Bo),l}function i(l){if(l&&l.isTexture){const u=l.mapping;if(u===lh||u===ch)if(t.has(l)){const f=t.get(l).texture;return e(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const h=new SC(f.height);return h.fromEquirectangularTexture(n,l),t.set(l,h),l.addEventListener("dispose",s),e(h.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class fL extends V0{constructor(t=-1,e=1,i=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,l=i+t,u=s+e,f=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,u-=d*this.view.offsetY,f=u-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ao=4,kg=[.125,.215,.35,.446,.526,.582],ws=20,Gf=new fL,Wg=new Pe;let Vf=null,kf=0,Wf=0,Xf=!1;const Es=(1+Math.sqrt(5))/2,Eo=1/Es,Xg=[new q(-Es,Eo,0),new q(Es,Eo,0),new q(-Eo,0,Es),new q(Eo,0,Es),new q(0,Es,-Eo),new q(0,Es,Eo),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class qg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Vf=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vf,kf,Wf),this._renderer.xr.enabled=Xf,t.scissorTest=!1,sc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oo||t.mapping===Bo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vf=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),Wf=this._renderer.getActiveMipmapLevel(),Xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Na,format:Fi,colorSpace:ns,depthBuffer:!1},s=Yg(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yg(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hL(a)),this._blurMaterial=dL(a,t,e)}return s}_compileMaterial(t){const e=new Oi(this._lodPlanes[0],t);this._renderer.compile(e,Gf)}_sceneToCubeUV(t,e,i,s){const u=new Si(90,1,e,i),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,g=d.autoClear,m=d.toneMapping;d.getClearColor(Wg),d.toneMapping=$r,d.autoClear=!1;const x=new vd({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),M=new Oi(new Ha,x);let E=!1;const v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,E=!0):(x.color.copy(Wg),E=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(u.up.set(0,f[_],0),u.lookAt(h[_],0,0)):P===1?(u.up.set(0,0,f[_]),u.lookAt(0,h[_],0)):(u.up.set(0,f[_],0),u.lookAt(0,0,h[_]));const A=this._cubeSize;sc(s,P*A,_>2?A:0,A,A),d.setRenderTarget(s),E&&d.render(M,u),d.render(t,u)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=m,d.autoClear=g,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Oo||t.mapping===Bo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const a=s?this._cubemapMaterial:this._equirectMaterial,l=new Oi(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=t;const f=this._cubeSize;sc(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(l,Gf)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Xg[(s-a-1)%Xg.length];this._blur(t,a-1,a,l,u)}e.autoClear=i}_blur(t,e,i,s,a){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,i,s,"latitudinal",a),this._halfBlur(l,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,l,u){const f=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,g=new Oi(this._lodPlanes[s],h),m=h.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*ws-1),E=a/M,v=isFinite(a)?1+Math.floor(d*E):ws;v>ws&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ws}`);const _=[];let P=0;for(let B=0;B<ws;++B){const j=B/E,L=Math.exp(-j*j/2);_.push(L),B===0?P+=L:B<v&&(P+=2*L)}for(let B=0;B<_.length;B++)_[B]=_[B]/P;m.envMap.value=t.texture,m.samples.value=v,m.weights.value=_,m.latitudinal.value=l==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:A}=this;m.dTheta.value=M,m.mipInt.value=A-i;const I=this._sizeLods[s],$=3*I*(s>A-Ao?s-A+Ao:0),F=4*(this._cubeSize-I);sc(e,$,F,3*I,2*I),f.setRenderTarget(e),f.render(g,Gf)}}function hL(n){const t=[],e=[],i=[];let s=n;const a=n-Ao+1+kg.length;for(let l=0;l<a;l++){const u=Math.pow(2,s);e.push(u);let f=1/u;l>n-Ao?f=kg[l-n+Ao-1]:l===0&&(f=0),i.push(f);const h=1/(u-2),d=-h,g=1+h,m=[d,d,g,d,g,g,d,d,g,g,d,g],x=6,M=6,E=3,v=2,_=1,P=new Float32Array(E*M*x),A=new Float32Array(v*M*x),I=new Float32Array(_*M*x);for(let F=0;F<x;F++){const B=F%3*2/3-1,j=F>2?0:-1,L=[B,j,0,B+2/3,j,0,B+2/3,j+1,0,B,j,0,B+2/3,j+1,0,B,j+1,0];P.set(L,E*M*F),A.set(m,v*M*F);const R=[F,F,F,F,F,F];I.set(R,_*M*F)}const $=new ti;$.setAttribute("position",new fn(P,E)),$.setAttribute("uv",new fn(A,v)),$.setAttribute("faceIndex",new fn(I,_)),t.push($),s>Ao&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Yg(n,t,e){const i=new Fs(n,t,e);return i.texture.mapping=Kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sc(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function dL(n,t,e){const i=new Float32Array(ws),s=new q(0,1,0);return new Jr({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xd(),fragmentShader:`

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
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function $g(){return new Jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

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
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function Kg(){return new Jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function xd(){return`

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
	`}function pL(n){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===lh||f===ch,d=f===Oo||f===Bo;if(h||d){let g=t.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return e===null&&(e=new qg(n)),g=h?e.fromEquirectangular(u,g):e.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return h&&x&&x.height>0||d&&x&&s(x)?(e===null&&(e=new qg(n)),g=h?e.fromEquirectangular(u):e.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let f=0;const h=6;for(let d=0;d<h;d++)u[d]!==void 0&&f++;return f===h}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=t.get(f);h!==void 0&&(t.delete(f),h.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:l}}function mL(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ba("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gL(n,t,e,i){const s={},a=new WeakMap;function l(g){const m=g.target;m.index!==null&&t.remove(m.index);for(const M in m.attributes)t.remove(m.attributes[M]);for(const M in m.morphAttributes){const E=m.morphAttributes[M];for(let v=0,_=E.length;v<_;v++)t.remove(E[v])}m.removeEventListener("dispose",l),delete s[m.id];const x=a.get(m);x&&(t.remove(x),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function u(g,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,e.memory.geometries++),m}function f(g){const m=g.attributes;for(const M in m)t.update(m[M],n.ARRAY_BUFFER);const x=g.morphAttributes;for(const M in x){const E=x[M];for(let v=0,_=E.length;v<_;v++)t.update(E[v],n.ARRAY_BUFFER)}}function h(g){const m=[],x=g.index,M=g.attributes.position;let E=0;if(x!==null){const P=x.array;E=x.version;for(let A=0,I=P.length;A<I;A+=3){const $=P[A+0],F=P[A+1],B=P[A+2];m.push($,F,F,B,B,$)}}else if(M!==void 0){const P=M.array;E=M.version;for(let A=0,I=P.length/3-1;A<I;A+=3){const $=A+0,F=A+1,B=A+2;m.push($,F,F,B,B,$)}}else return;const v=new(U0(m)?H0:z0)(m,1);v.version=E;const _=a.get(g);_&&t.remove(_),a.set(g,v)}function d(g){const m=a.get(g);if(m){const x=g.index;x!==null&&m.version<x.version&&h(g)}else h(g);return a.get(g)}return{get:u,update:f,getWireframeAttribute:d}}function _L(n,t,e){let i;function s(m){i=m}let a,l;function u(m){a=m.type,l=m.bytesPerElement}function f(m,x){n.drawElements(i,x,a,m*l),e.update(x,i,1)}function h(m,x,M){M!==0&&(n.drawElementsInstanced(i,x,a,m*l,M),e.update(x,i,M))}function d(m,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,m,0,M);let v=0;for(let _=0;_<M;_++)v+=x[_];e.update(v,i,1)}function g(m,x,M,E){if(M===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<m.length;_++)h(m[_]/l,x[_],E[_]);else{v.multiDrawElementsInstancedWEBGL(i,x,0,a,m,0,E,0,M);let _=0;for(let P=0;P<M;P++)_+=x[P];for(let P=0;P<E.length;P++)e.update(_,i,E[P])}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function vL(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,l,u){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=u*(a/3);break;case n.LINES:e.lines+=u*(a/2);break;case n.LINE_STRIP:e.lines+=u*(a-1);break;case n.LINE_LOOP:e.lines+=u*a;break;case n.POINTS:e.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function xL(n,t,e){const i=new WeakMap,s=new _n;function a(l,u,f){const h=l.morphTargetInfluences,d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let m=i.get(u);if(m===void 0||m.count!==g){let R=function(){j.dispose(),i.delete(u),u.removeEventListener("dispose",R)};var x=R;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let I=0;M===!0&&(I=1),E===!0&&(I=2),v===!0&&(I=3);let $=u.attributes.position.count*I,F=1;$>t.maxTextureSize&&(F=Math.ceil($/t.maxTextureSize),$=t.maxTextureSize);const B=new Float32Array($*F*4*g),j=new F0(B,$,F,g);j.type=xr,j.needsUpdate=!0;const L=I*4;for(let G=0;G<g;G++){const ft=_[G],ot=P[G],vt=A[G],Mt=$*F*4*G;for(let ct=0;ct<ft.count;ct++){const at=ct*L;M===!0&&(s.fromBufferAttribute(ft,ct),B[Mt+at+0]=s.x,B[Mt+at+1]=s.y,B[Mt+at+2]=s.z,B[Mt+at+3]=0),E===!0&&(s.fromBufferAttribute(ot,ct),B[Mt+at+4]=s.x,B[Mt+at+5]=s.y,B[Mt+at+6]=s.z,B[Mt+at+7]=0),v===!0&&(s.fromBufferAttribute(vt,ct),B[Mt+at+8]=s.x,B[Mt+at+9]=s.y,B[Mt+at+10]=s.z,B[Mt+at+11]=vt.itemSize===4?s.w:1)}}m={count:g,texture:j,size:new Fe($,F)},i.set(u,m),u.addEventListener("dispose",R)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let M=0;for(let v=0;v<h.length;v++)M+=h[v];const E=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function ML(n,t,e,i){let s=new WeakMap;function a(f){const h=i.render.frame,d=f.geometry,g=t.get(f,d);if(s.get(g)!==h&&(t.update(g),s.set(g,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==h&&(e.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,n.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const m=f.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return g}function l(){s=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:l}}class q0 extends Zn{constructor(t,e,i,s,a,l,u,f,h,d=Io){if(d!==Io&&d!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Io&&(i=Ns),i===void 0&&d===Ho&&(i=zo),super(null,s,a,l,u,f,d,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:Ti,this.minFilter=f!==void 0?f:Ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Y0=new Zn,Zg=new q0(1,1),$0=new F0,K0=new sC,Z0=new k0,Jg=[],jg=[],Qg=new Float32Array(16),t_=new Float32Array(9),e_=new Float32Array(4);function Wo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let a=Jg[s];if(a===void 0&&(a=new Float32Array(s),Jg[s]=a),t!==0){i.toArray(a,0);for(let l=1,u=0;l!==t;++l)u+=e,n[l].toArray(a,u)}return a}function dn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function pn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function jc(n,t){let e=jg[t];e===void 0&&(e=new Int32Array(t),jg[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function SL(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function yL(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2fv(this.addr,t),pn(e,t)}}function EL(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;n.uniform3fv(this.addr,t),pn(e,t)}}function TL(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4fv(this.addr,t),pn(e,t)}}function AL(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,i))return;e_.set(i),n.uniformMatrix2fv(this.addr,!1,e_),pn(e,i)}}function bL(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,i))return;t_.set(i),n.uniformMatrix3fv(this.addr,!1,t_),pn(e,i)}}function wL(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,i))return;Qg.set(i),n.uniformMatrix4fv(this.addr,!1,Qg),pn(e,i)}}function CL(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function RL(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2iv(this.addr,t),pn(e,t)}}function PL(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;n.uniform3iv(this.addr,t),pn(e,t)}}function LL(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4iv(this.addr,t),pn(e,t)}}function IL(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function DL(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2uiv(this.addr,t),pn(e,t)}}function UL(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;n.uniform3uiv(this.addr,t),pn(e,t)}}function NL(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4uiv(this.addr,t),pn(e,t)}}function FL(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(Zg.compareFunction=D0,a=Zg):a=Y0,e.setTexture2D(t||a,s)}function OL(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||K0,s)}function BL(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Z0,s)}function zL(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$0,s)}function HL(n){switch(n){case 5126:return SL;case 35664:return yL;case 35665:return EL;case 35666:return TL;case 35674:return AL;case 35675:return bL;case 35676:return wL;case 5124:case 35670:return CL;case 35667:case 35671:return RL;case 35668:case 35672:return PL;case 35669:case 35673:return LL;case 5125:return IL;case 36294:return DL;case 36295:return UL;case 36296:return NL;case 35678:case 36198:case 36298:case 36306:case 35682:return FL;case 35679:case 36299:case 36307:return OL;case 35680:case 36300:case 36308:case 36293:return BL;case 36289:case 36303:case 36311:case 36292:return zL}}function GL(n,t){n.uniform1fv(this.addr,t)}function VL(n,t){const e=Wo(t,this.size,2);n.uniform2fv(this.addr,e)}function kL(n,t){const e=Wo(t,this.size,3);n.uniform3fv(this.addr,e)}function WL(n,t){const e=Wo(t,this.size,4);n.uniform4fv(this.addr,e)}function XL(n,t){const e=Wo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function qL(n,t){const e=Wo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function YL(n,t){const e=Wo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $L(n,t){n.uniform1iv(this.addr,t)}function KL(n,t){n.uniform2iv(this.addr,t)}function ZL(n,t){n.uniform3iv(this.addr,t)}function JL(n,t){n.uniform4iv(this.addr,t)}function jL(n,t){n.uniform1uiv(this.addr,t)}function QL(n,t){n.uniform2uiv(this.addr,t)}function t2(n,t){n.uniform3uiv(this.addr,t)}function e2(n,t){n.uniform4uiv(this.addr,t)}function n2(n,t,e){const i=this.cache,s=t.length,a=jc(e,s);dn(i,a)||(n.uniform1iv(this.addr,a),pn(i,a));for(let l=0;l!==s;++l)e.setTexture2D(t[l]||Y0,a[l])}function i2(n,t,e){const i=this.cache,s=t.length,a=jc(e,s);dn(i,a)||(n.uniform1iv(this.addr,a),pn(i,a));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||K0,a[l])}function r2(n,t,e){const i=this.cache,s=t.length,a=jc(e,s);dn(i,a)||(n.uniform1iv(this.addr,a),pn(i,a));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||Z0,a[l])}function s2(n,t,e){const i=this.cache,s=t.length,a=jc(e,s);dn(i,a)||(n.uniform1iv(this.addr,a),pn(i,a));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||$0,a[l])}function o2(n){switch(n){case 5126:return GL;case 35664:return VL;case 35665:return kL;case 35666:return WL;case 35674:return XL;case 35675:return qL;case 35676:return YL;case 5124:case 35670:return $L;case 35667:case 35671:return KL;case 35668:case 35672:return ZL;case 35669:case 35673:return JL;case 5125:return jL;case 36294:return QL;case 36295:return t2;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return s2}}class a2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=HL(e.type)}}class l2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o2(e.type)}}class c2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const u=s[a];u.setValue(t,e[u.id],i)}}}const qf=/(\w+)(\])?(\[|\.)?/g;function n_(n,t){n.seq.push(t),n.map[t.id]=t}function u2(n,t,e){const i=n.name,s=i.length;for(qf.lastIndex=0;;){const a=qf.exec(i),l=qf.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&l+2===s){n_(e,h===void 0?new a2(u,n,t):new l2(u,n,t));break}else{let g=e.map[u];g===void 0&&(g=new c2(u),n_(e,g)),e=g}}}class yc{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);u2(a,l,this)}}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,l=e.length;a!==l;++a){const u=e[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const l=t[s];l.id in e&&i.push(l)}return i}}function i_(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const f2=37297;let h2=0;function d2(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let l=s;l<a;l++){const u=l+1;i.push(`${u===t?">":" "} ${u}: ${e[l]}`)}return i.join(`
`)}function p2(n){const t=Ue.getPrimaries(Ue.workingColorSpace),e=Ue.getPrimaries(n);let i;switch(t===e?i="":t===Pc&&e===Rc?i="LinearDisplayP3ToLinearSRGB":t===Rc&&e===Pc&&(i="LinearSRGBToLinearDisplayP3"),n){case ns:case Zc:return[i,"LinearTransferOETF"];case qi:case gd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function r_(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+d2(n.getShaderSource(t),l)}else return s}function m2(n,t){const e=p2(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function g2(n,t){let e;switch(t){case Iw:e="Linear";break;case Dw:e="Reinhard";break;case Uw:e="OptimizedCineon";break;case Nw:e="ACESFilmic";break;case Ow:e="AgX";break;case Bw:e="Neutral";break;case Fw:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const oc=new q;function _2(){Ue.getLuminanceCoefficients(oc);const n=oc.x.toFixed(4),t=oc.y.toFixed(4),e=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function x2(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function M2(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(t,s),l=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),e[l]={type:a.type,location:n.getAttribLocation(t,l),locationSize:u}}return e}function Ma(n){return n!==""}function s_(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function o_(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S2=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(n){return n.replace(S2,E2)}const y2=new Map;function E2(n,t){let e=he[t];if(e===void 0){const i=y2.get(t);if(i!==void 0)e=he[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zh(e)}const T2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(n){return n.replace(T2,A2)}function A2(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function l_(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function b2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===M0?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===rw?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mr&&(t="SHADOWMAP_TYPE_VSM"),t}function w2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Oo:case Bo:t="ENVMAP_TYPE_CUBE";break;case Kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function C2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Bo:t="ENVMAP_MODE_REFRACTION";break}return t}function R2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case S0:t="ENVMAP_BLENDING_MULTIPLY";break;case Pw:t="ENVMAP_BLENDING_MIX";break;case Lw:t="ENVMAP_BLENDING_ADD";break}return t}function P2(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function L2(n,t,e,i){const s=n.getContext(),a=e.defines;let l=e.vertexShader,u=e.fragmentShader;const f=b2(e),h=w2(e),d=C2(e),g=R2(e),m=P2(e),x=v2(e),M=x2(a),E=s.createProgram();let v,_,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ma).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ma).join(`
`),_.length>0&&(_+=`
`)):(v=[l_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),_=[l_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$r?"#define TONE_MAPPING":"",e.toneMapping!==$r?he.tonemapping_pars_fragment:"",e.toneMapping!==$r?g2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,m2("linearToOutputTexel",e.outputColorSpace),_2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ma).join(`
`)),l=zh(l),l=s_(l,e),l=o_(l,e),u=zh(u),u=s_(u,e),u=o_(u,e),l=a_(l),u=a_(u),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",e.glslVersion===Eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=P+v+l,I=P+_+u,$=i_(s,s.VERTEX_SHADER,A),F=i_(s,s.FRAGMENT_SHADER,I);s.attachShader(E,$),s.attachShader(E,F),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function B(G){if(n.debug.checkShaderErrors){const ft=s.getProgramInfoLog(E).trim(),ot=s.getShaderInfoLog($).trim(),vt=s.getShaderInfoLog(F).trim();let Mt=!0,ct=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(Mt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,$,F);else{const at=r_(s,$,"vertex"),Q=r_(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ft+`
`+at+`
`+Q)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(ot===""||vt==="")&&(ct=!1);ct&&(G.diagnostics={runnable:Mt,programLog:ft,vertexShader:{log:ot,prefix:v},fragmentShader:{log:vt,prefix:_}})}s.deleteShader($),s.deleteShader(F),j=new yc(s,E),L=M2(s,E)}let j;this.getUniforms=function(){return j===void 0&&B(this),j};let L;this.getAttributes=function(){return L===void 0&&B(this),L};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(E,f2)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h2++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=$,this.fragmentShader=F,this}let I2=0;class D2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),l=this._getShaderCacheForMaterial(t);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new U2(t),e.set(t,i)),i}}class U2{constructor(t){this.id=I2++,this.code=t,this.usedTimes=0}}function N2(n,t,e,i,s,a,l){const u=new O0,f=new D2,h=new Set,d=[],g=s.logarithmicDepthBuffer,m=s.vertexTextures;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(L){return h.add(L),L===0?"uv":`uv${L}`}function v(L,R,G,ft,ot){const vt=ft.fog,Mt=ot.geometry,ct=L.isMeshStandardMaterial?ft.environment:null,at=(L.isMeshStandardMaterial?e:t).get(L.envMap||ct),Q=at&&at.mapping===Kc?at.image.height:null,Pt=M[L.type];L.precision!==null&&(x=s.getMaxPrecision(L.precision),x!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",x,"instead."));const Ot=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,Lt=Ot!==void 0?Ot.length:0;let ie=0;Mt.morphAttributes.position!==void 0&&(ie=1),Mt.morphAttributes.normal!==void 0&&(ie=2),Mt.morphAttributes.color!==void 0&&(ie=3);let ye,ht,At,zt;if(Pt){const Ee=Ki[Pt];ye=Ee.vertexShader,ht=Ee.fragmentShader}else ye=L.vertexShader,ht=L.fragmentShader,f.update(L),At=f.getVertexShaderID(L),zt=f.getFragmentShaderID(L);const Ht=n.getRenderTarget(),Kt=ot.isInstancedMesh===!0,re=ot.isBatchedMesh===!0,oe=!!L.map,Le=!!L.matcap,z=!!at,D=!!L.aoMap,O=!!L.lightMap,J=!!L.bumpMap,tt=!!L.normalMap,lt=!!L.displacementMap,st=!!L.emissiveMap,dt=!!L.metalnessMap,w=!!L.roughnessMap,S=L.anisotropy>0,N=L.clearcoat>0,K=L.dispersion>0,et=L.iridescence>0,Z=L.sheen>0,Tt=L.transmission>0,pt=S&&!!L.anisotropyMap,Et=N&&!!L.clearcoatMap,It=N&&!!L.clearcoatNormalMap,St=N&&!!L.clearcoatRoughnessMap,Rt=et&&!!L.iridescenceMap,se=et&&!!L.iridescenceThicknessMap,Yt=Z&&!!L.sheenColorMap,Bt=Z&&!!L.sheenRoughnessMap,Jt=!!L.specularMap,qt=!!L.specularColorMap,ge=!!L.specularIntensityMap,V=Tt&&!!L.transmissionMap,bt=Tt&&!!L.thicknessMap,_t=!!L.gradientMap,xt=!!L.alphaMap,Ct=L.alphaTest>0,te=!!L.alphaHash,xe=!!L.extensions;let Ze=$r;L.toneMapped&&(Ht===null||Ht.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const on={shaderID:Pt,shaderType:L.type,shaderName:L.name,vertexShader:ye,fragmentShader:ht,defines:L.defines,customVertexShaderID:At,customFragmentShaderID:zt,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:x,batching:re,batchingColor:re&&ot._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&ot.instanceColor!==null,instancingMorph:Kt&&ot.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ht===null?n.outputColorSpace:Ht.isXRRenderTarget===!0?Ht.texture.colorSpace:ns,alphaToCoverage:!!L.alphaToCoverage,map:oe,matcap:Le,envMap:z,envMapMode:z&&at.mapping,envMapCubeUVHeight:Q,aoMap:D,lightMap:O,bumpMap:J,normalMap:tt,displacementMap:m&&lt,emissiveMap:st,normalMapObjectSpace:tt&&L.normalMapType===kw,normalMapTangentSpace:tt&&L.normalMapType===Vw,metalnessMap:dt,roughnessMap:w,anisotropy:S,anisotropyMap:pt,clearcoat:N,clearcoatMap:Et,clearcoatNormalMap:It,clearcoatRoughnessMap:St,dispersion:K,iridescence:et,iridescenceMap:Rt,iridescenceThicknessMap:se,sheen:Z,sheenColorMap:Yt,sheenRoughnessMap:Bt,specularMap:Jt,specularColorMap:qt,specularIntensityMap:ge,transmission:Tt,transmissionMap:V,thicknessMap:bt,gradientMap:_t,opaque:L.transparent===!1&&L.blending===Lo&&L.alphaToCoverage===!1,alphaMap:xt,alphaTest:Ct,alphaHash:te,combine:L.combine,mapUv:oe&&E(L.map.channel),aoMapUv:D&&E(L.aoMap.channel),lightMapUv:O&&E(L.lightMap.channel),bumpMapUv:J&&E(L.bumpMap.channel),normalMapUv:tt&&E(L.normalMap.channel),displacementMapUv:lt&&E(L.displacementMap.channel),emissiveMapUv:st&&E(L.emissiveMap.channel),metalnessMapUv:dt&&E(L.metalnessMap.channel),roughnessMapUv:w&&E(L.roughnessMap.channel),anisotropyMapUv:pt&&E(L.anisotropyMap.channel),clearcoatMapUv:Et&&E(L.clearcoatMap.channel),clearcoatNormalMapUv:It&&E(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&E(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&E(L.iridescenceMap.channel),iridescenceThicknessMapUv:se&&E(L.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&E(L.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&E(L.sheenRoughnessMap.channel),specularMapUv:Jt&&E(L.specularMap.channel),specularColorMapUv:qt&&E(L.specularColorMap.channel),specularIntensityMapUv:ge&&E(L.specularIntensityMap.channel),transmissionMapUv:V&&E(L.transmissionMap.channel),thicknessMapUv:bt&&E(L.thicknessMap.channel),alphaMapUv:xt&&E(L.alphaMap.channel),vertexTangents:!!Mt.attributes.tangent&&(tt||S),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!Mt.attributes.uv&&(oe||xt),fog:!!vt,useFog:L.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:ot.isSkinnedMesh===!0,morphTargets:Mt.morphAttributes.position!==void 0,morphNormals:Mt.morphAttributes.normal!==void 0,morphColors:Mt.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:L.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:oe&&L.map.isVideoTexture===!0&&Ue.getTransfer(L.map.colorSpace)===We,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===_r,flipSided:L.side===Kn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:xe&&L.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&L.extensions.multiDraw===!0||re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return on.vertexUv1s=h.has(1),on.vertexUv2s=h.has(2),on.vertexUv3s=h.has(3),h.clear(),on}function _(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const G in L.defines)R.push(G),R.push(L.defines[G]);return L.isRawShaderMaterial===!1&&(P(R,L),A(R,L),R.push(n.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function P(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function A(L,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),L.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.skinning&&u.enable(4),R.morphTargets&&u.enable(5),R.morphNormals&&u.enable(6),R.morphColors&&u.enable(7),R.premultipliedAlpha&&u.enable(8),R.shadowMapEnabled&&u.enable(9),R.doubleSided&&u.enable(10),R.flipSided&&u.enable(11),R.useDepthPacking&&u.enable(12),R.dithering&&u.enable(13),R.transmission&&u.enable(14),R.sheen&&u.enable(15),R.opaque&&u.enable(16),R.pointsUvs&&u.enable(17),R.decodeVideoTexture&&u.enable(18),R.alphaToCoverage&&u.enable(19),L.push(u.mask)}function I(L){const R=M[L.type];let G;if(R){const ft=Ki[R];G=_C.clone(ft.uniforms)}else G=L.uniforms;return G}function $(L,R){let G;for(let ft=0,ot=d.length;ft<ot;ft++){const vt=d[ft];if(vt.cacheKey===R){G=vt,++G.usedTimes;break}}return G===void 0&&(G=new L2(n,R,L,a),d.push(G)),G}function F(L){if(--L.usedTimes===0){const R=d.indexOf(L);d[R]=d[d.length-1],d.pop(),L.destroy()}}function B(L){f.remove(L)}function j(){f.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:I,acquireProgram:$,releaseProgram:F,releaseShaderCache:B,programs:d,dispose:j}}function F2(){let n=new WeakMap;function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function e(a){n.delete(a)}function i(a,l,u){n.get(a)[l]=u}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function O2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function c_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function u_(){const n=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function l(g,m,x,M,E,v){let _=n[t];return _===void 0?(_={id:g.id,object:g,geometry:m,material:x,groupOrder:M,renderOrder:g.renderOrder,z:E,group:v},n[t]=_):(_.id=g.id,_.object=g,_.geometry=m,_.material=x,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=E,_.group=v),t++,_}function u(g,m,x,M,E,v){const _=l(g,m,x,M,E,v);x.transmission>0?i.push(_):x.transparent===!0?s.push(_):e.push(_)}function f(g,m,x,M,E,v){const _=l(g,m,x,M,E,v);x.transmission>0?i.unshift(_):x.transparent===!0?s.unshift(_):e.unshift(_)}function h(g,m){e.length>1&&e.sort(g||O2),i.length>1&&i.sort(m||c_),s.length>1&&s.sort(m||c_)}function d(){for(let g=t,m=n.length;g<m;g++){const x=n[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:u,unshift:f,finish:d,sort:h}}function B2(){let n=new WeakMap;function t(i,s){const a=n.get(i);let l;return a===void 0?(l=new u_,n.set(i,[l])):s>=a.length?(l=new u_,a.push(l)):l=a[s],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function z2(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new Pe};break;case"SpotLight":e={position:new q,direction:new q,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":e={color:new Pe,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function H2(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let G2=0;function V2(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function k2(n){const t=new z2,e=H2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new q);const s=new q,a=new nn,l=new nn;function u(h){let d=0,g=0,m=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let x=0,M=0,E=0,v=0,_=0,P=0,A=0,I=0,$=0,F=0,B=0;h.sort(V2);for(let L=0,R=h.length;L<R;L++){const G=h[L],ft=G.color,ot=G.intensity,vt=G.distance,Mt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)d+=ft.r*ot,g+=ft.g*ot,m+=ft.b*ot;else if(G.isLightProbe){for(let ct=0;ct<9;ct++)i.probe[ct].addScaledVector(G.sh.coefficients[ct],ot);B++}else if(G.isDirectionalLight){const ct=t.get(G);if(ct.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const at=G.shadow,Q=e.get(G);Q.shadowIntensity=at.intensity,Q.shadowBias=at.bias,Q.shadowNormalBias=at.normalBias,Q.shadowRadius=at.radius,Q.shadowMapSize=at.mapSize,i.directionalShadow[x]=Q,i.directionalShadowMap[x]=Mt,i.directionalShadowMatrix[x]=G.shadow.matrix,P++}i.directional[x]=ct,x++}else if(G.isSpotLight){const ct=t.get(G);ct.position.setFromMatrixPosition(G.matrixWorld),ct.color.copy(ft).multiplyScalar(ot),ct.distance=vt,ct.coneCos=Math.cos(G.angle),ct.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ct.decay=G.decay,i.spot[E]=ct;const at=G.shadow;if(G.map&&(i.spotLightMap[$]=G.map,$++,at.updateMatrices(G),G.castShadow&&F++),i.spotLightMatrix[E]=at.matrix,G.castShadow){const Q=e.get(G);Q.shadowIntensity=at.intensity,Q.shadowBias=at.bias,Q.shadowNormalBias=at.normalBias,Q.shadowRadius=at.radius,Q.shadowMapSize=at.mapSize,i.spotShadow[E]=Q,i.spotShadowMap[E]=Mt,I++}E++}else if(G.isRectAreaLight){const ct=t.get(G);ct.color.copy(ft).multiplyScalar(ot),ct.halfWidth.set(G.width*.5,0,0),ct.halfHeight.set(0,G.height*.5,0),i.rectArea[v]=ct,v++}else if(G.isPointLight){const ct=t.get(G);if(ct.color.copy(G.color).multiplyScalar(G.intensity),ct.distance=G.distance,ct.decay=G.decay,G.castShadow){const at=G.shadow,Q=e.get(G);Q.shadowIntensity=at.intensity,Q.shadowBias=at.bias,Q.shadowNormalBias=at.normalBias,Q.shadowRadius=at.radius,Q.shadowMapSize=at.mapSize,Q.shadowCameraNear=at.camera.near,Q.shadowCameraFar=at.camera.far,i.pointShadow[M]=Q,i.pointShadowMap[M]=Mt,i.pointShadowMatrix[M]=G.shadow.matrix,A++}i.point[M]=ct,M++}else if(G.isHemisphereLight){const ct=t.get(G);ct.skyColor.copy(G.color).multiplyScalar(ot),ct.groundColor.copy(G.groundColor).multiplyScalar(ot),i.hemi[_]=ct,_++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ut.LTC_FLOAT_1,i.rectAreaLTC2=Ut.LTC_FLOAT_2):(i.rectAreaLTC1=Ut.LTC_HALF_1,i.rectAreaLTC2=Ut.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=g,i.ambient[2]=m;const j=i.hash;(j.directionalLength!==x||j.pointLength!==M||j.spotLength!==E||j.rectAreaLength!==v||j.hemiLength!==_||j.numDirectionalShadows!==P||j.numPointShadows!==A||j.numSpotShadows!==I||j.numSpotMaps!==$||j.numLightProbes!==B)&&(i.directional.length=x,i.spot.length=E,i.rectArea.length=v,i.point.length=M,i.hemi.length=_,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=I+$-F,i.spotLightMap.length=$,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=B,j.directionalLength=x,j.pointLength=M,j.spotLength=E,j.rectAreaLength=v,j.hemiLength=_,j.numDirectionalShadows=P,j.numPointShadows=A,j.numSpotShadows=I,j.numSpotMaps=$,j.numLightProbes=B,i.version=G2++)}function f(h,d){let g=0,m=0,x=0,M=0,E=0;const v=d.matrixWorldInverse;for(let _=0,P=h.length;_<P;_++){const A=h[_];if(A.isDirectionalLight){const I=i.directional[g];I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(v),g++}else if(A.isSpotLight){const I=i.spot[x];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(v),I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(v),x++}else if(A.isRectAreaLight){const I=i.rectArea[M];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(v),l.identity(),a.copy(A.matrixWorld),a.premultiply(v),l.extractRotation(a),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(l),I.halfHeight.applyMatrix4(l),M++}else if(A.isPointLight){const I=i.point[m];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(v),m++}else if(A.isHemisphereLight){const I=i.hemi[E];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(v),E++}}}return{setup:u,setupView:f,state:i}}function f_(n){const t=new k2(n),e=[],i=[];function s(d){h.camera=d,e.length=0,i.length=0}function a(d){e.push(d)}function l(d){i.push(d)}function u(){t.setup(e)}function f(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:l}}function W2(n){let t=new WeakMap;function e(s,a=0){const l=t.get(s);let u;return l===void 0?(u=new f_(n),t.set(s,[u])):a>=l.length?(u=new f_(n),l.push(u)):u=l[a],u}function i(){t=new WeakMap}return{get:e,dispose:i}}class X2 extends ko{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class q2 extends ko{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Y2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$2=`uniform sampler2D shadow_pass;
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
}`;function K2(n,t,e){let i=new W0;const s=new Fe,a=new Fe,l=new _n,u=new X2({depthPacking:Gw}),f=new q2,h={},d=e.maxTextureSize,g={[Zr]:Kn,[Kn]:Zr,[_r]:_r},m=new Jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Y2,fragmentShader:$2}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const M=new ti;M.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Oi(M,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=M0;let _=this.type;this.render=function(F,B,j){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||F.length===0)return;const L=n.getRenderTarget(),R=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),ft=n.state;ft.setBlending(Yr),ft.buffers.color.setClear(1,1,1,1),ft.buffers.depth.setTest(!0),ft.setScissorTest(!1);const ot=_!==mr&&this.type===mr,vt=_===mr&&this.type!==mr;for(let Mt=0,ct=F.length;Mt<ct;Mt++){const at=F[Mt],Q=at.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);const Pt=Q.getFrameExtents();if(s.multiply(Pt),a.copy(Q.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/Pt.x),s.x=a.x*Pt.x,Q.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/Pt.y),s.y=a.y*Pt.y,Q.mapSize.y=a.y)),Q.map===null||ot===!0||vt===!0){const Lt=this.type!==mr?{minFilter:Ti,magFilter:Ti}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Fs(s.x,s.y,Lt),Q.map.texture.name=at.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const Ot=Q.getViewportCount();for(let Lt=0;Lt<Ot;Lt++){const ie=Q.getViewport(Lt);l.set(a.x*ie.x,a.y*ie.y,a.x*ie.z,a.y*ie.w),ft.viewport(l),Q.updateMatrices(at,Lt),i=Q.getFrustum(),I(B,j,Q.camera,at,this.type)}Q.isPointLightShadow!==!0&&this.type===mr&&P(Q,j),Q.needsUpdate=!1}_=this.type,v.needsUpdate=!1,n.setRenderTarget(L,R,G)};function P(F,B){const j=t.update(E);m.defines.VSM_SAMPLES!==F.blurSamples&&(m.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Fs(s.x,s.y)),m.uniforms.shadow_pass.value=F.map.texture,m.uniforms.resolution.value=F.mapSize,m.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(B,null,j,m,E,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(B,null,j,x,E,null)}function A(F,B,j,L){let R=null;const G=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)R=G;else if(R=j.isPointLight===!0?f:u,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ft=R.uuid,ot=B.uuid;let vt=h[ft];vt===void 0&&(vt={},h[ft]=vt);let Mt=vt[ot];Mt===void 0&&(Mt=R.clone(),vt[ot]=Mt,B.addEventListener("dispose",$)),R=Mt}if(R.visible=B.visible,R.wireframe=B.wireframe,L===mr?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:g[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ft=n.properties.get(R);ft.light=j}return R}function I(F,B,j,L,R){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===mr)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const ot=t.update(F),vt=F.material;if(Array.isArray(vt)){const Mt=ot.groups;for(let ct=0,at=Mt.length;ct<at;ct++){const Q=Mt[ct],Pt=vt[Q.materialIndex];if(Pt&&Pt.visible){const Ot=A(F,Pt,L,R);F.onBeforeShadow(n,F,B,j,ot,Ot,Q),n.renderBufferDirect(j,null,ot,Ot,F,Q),F.onAfterShadow(n,F,B,j,ot,Ot,Q)}}}else if(vt.visible){const Mt=A(F,vt,L,R);F.onBeforeShadow(n,F,B,j,ot,Mt,null),n.renderBufferDirect(j,null,ot,Mt,F,null),F.onAfterShadow(n,F,B,j,ot,Mt,null)}}const ft=F.children;for(let ot=0,vt=ft.length;ot<vt;ot++)I(ft[ot],B,j,L,R)}function $(F){F.target.removeEventListener("dispose",$);for(const j in h){const L=h[j],R=F.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function Z2(n){function t(){let V=!1;const bt=new _n;let _t=null;const xt=new _n(0,0,0,0);return{setMask:function(Ct){_t!==Ct&&!V&&(n.colorMask(Ct,Ct,Ct,Ct),_t=Ct)},setLocked:function(Ct){V=Ct},setClear:function(Ct,te,xe,Ze,on){on===!0&&(Ct*=Ze,te*=Ze,xe*=Ze),bt.set(Ct,te,xe,Ze),xt.equals(bt)===!1&&(n.clearColor(Ct,te,xe,Ze),xt.copy(bt))},reset:function(){V=!1,_t=null,xt.set(-1,0,0,0)}}}function e(){let V=!1,bt=null,_t=null,xt=null;return{setTest:function(Ct){Ct?zt(n.DEPTH_TEST):Ht(n.DEPTH_TEST)},setMask:function(Ct){bt!==Ct&&!V&&(n.depthMask(Ct),bt=Ct)},setFunc:function(Ct){if(_t!==Ct){switch(Ct){case Ew:n.depthFunc(n.NEVER);break;case Tw:n.depthFunc(n.ALWAYS);break;case Aw:n.depthFunc(n.LESS);break;case wc:n.depthFunc(n.LEQUAL);break;case bw:n.depthFunc(n.EQUAL);break;case ww:n.depthFunc(n.GEQUAL);break;case Cw:n.depthFunc(n.GREATER);break;case Rw:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=Ct}},setLocked:function(Ct){V=Ct},setClear:function(Ct){xt!==Ct&&(n.clearDepth(Ct),xt=Ct)},reset:function(){V=!1,bt=null,_t=null,xt=null}}}function i(){let V=!1,bt=null,_t=null,xt=null,Ct=null,te=null,xe=null,Ze=null,on=null;return{setTest:function(Ee){V||(Ee?zt(n.STENCIL_TEST):Ht(n.STENCIL_TEST))},setMask:function(Ee){bt!==Ee&&!V&&(n.stencilMask(Ee),bt=Ee)},setFunc:function(Ee,Ai,fi){(_t!==Ee||xt!==Ai||Ct!==fi)&&(n.stencilFunc(Ee,Ai,fi),_t=Ee,xt=Ai,Ct=fi)},setOp:function(Ee,Ai,fi){(te!==Ee||xe!==Ai||Ze!==fi)&&(n.stencilOp(Ee,Ai,fi),te=Ee,xe=Ai,Ze=fi)},setLocked:function(Ee){V=Ee},setClear:function(Ee){on!==Ee&&(n.clearStencil(Ee),on=Ee)},reset:function(){V=!1,bt=null,_t=null,xt=null,Ct=null,te=null,xe=null,Ze=null,on=null}}}const s=new t,a=new e,l=new i,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,m=[],x=null,M=!1,E=null,v=null,_=null,P=null,A=null,I=null,$=null,F=new Pe(0,0,0),B=0,j=!1,L=null,R=null,G=null,ft=null,ot=null;const vt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Mt=!1,ct=0;const at=n.getParameter(n.VERSION);at.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(at)[1]),Mt=ct>=1):at.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),Mt=ct>=2);let Q=null,Pt={};const Ot=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),ie=new _n().fromArray(Ot),ye=new _n().fromArray(Lt);function ht(V,bt,_t,xt){const Ct=new Uint8Array(4),te=n.createTexture();n.bindTexture(V,te),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<_t;xe++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(bt,0,n.RGBA,1,1,xt,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(bt+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return te}const At={};At[n.TEXTURE_2D]=ht(n.TEXTURE_2D,n.TEXTURE_2D,1),At[n.TEXTURE_CUBE_MAP]=ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[n.TEXTURE_2D_ARRAY]=ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),At[n.TEXTURE_3D]=ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),zt(n.DEPTH_TEST),a.setFunc(wc),J(!1),tt(gg),zt(n.CULL_FACE),D(Yr);function zt(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function Ht(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function Kt(V,bt){return d[V]!==bt?(n.bindFramebuffer(V,bt),d[V]=bt,V===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=bt),V===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=bt),!0):!1}function re(V,bt){let _t=m,xt=!1;if(V){_t=g.get(bt),_t===void 0&&(_t=[],g.set(bt,_t));const Ct=V.textures;if(_t.length!==Ct.length||_t[0]!==n.COLOR_ATTACHMENT0){for(let te=0,xe=Ct.length;te<xe;te++)_t[te]=n.COLOR_ATTACHMENT0+te;_t.length=Ct.length,xt=!0}}else _t[0]!==n.BACK&&(_t[0]=n.BACK,xt=!0);xt&&n.drawBuffers(_t)}function oe(V){return x!==V?(n.useProgram(V),x=V,!0):!1}const Le={[bs]:n.FUNC_ADD,[ow]:n.FUNC_SUBTRACT,[aw]:n.FUNC_REVERSE_SUBTRACT};Le[lw]=n.MIN,Le[cw]=n.MAX;const z={[uw]:n.ZERO,[fw]:n.ONE,[hw]:n.SRC_COLOR,[oh]:n.SRC_ALPHA,[vw]:n.SRC_ALPHA_SATURATE,[gw]:n.DST_COLOR,[pw]:n.DST_ALPHA,[dw]:n.ONE_MINUS_SRC_COLOR,[ah]:n.ONE_MINUS_SRC_ALPHA,[_w]:n.ONE_MINUS_DST_COLOR,[mw]:n.ONE_MINUS_DST_ALPHA,[xw]:n.CONSTANT_COLOR,[Mw]:n.ONE_MINUS_CONSTANT_COLOR,[Sw]:n.CONSTANT_ALPHA,[yw]:n.ONE_MINUS_CONSTANT_ALPHA};function D(V,bt,_t,xt,Ct,te,xe,Ze,on,Ee){if(V===Yr){M===!0&&(Ht(n.BLEND),M=!1);return}if(M===!1&&(zt(n.BLEND),M=!0),V!==sw){if(V!==E||Ee!==j){if((v!==bs||A!==bs)&&(n.blendEquation(n.FUNC_ADD),v=bs,A=bs),Ee)switch(V){case Lo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _g:n.blendFunc(n.ONE,n.ONE);break;case vg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Lo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _g:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,P=null,I=null,$=null,F.set(0,0,0),B=0,E=V,j=Ee}return}Ct=Ct||bt,te=te||_t,xe=xe||xt,(bt!==v||Ct!==A)&&(n.blendEquationSeparate(Le[bt],Le[Ct]),v=bt,A=Ct),(_t!==_||xt!==P||te!==I||xe!==$)&&(n.blendFuncSeparate(z[_t],z[xt],z[te],z[xe]),_=_t,P=xt,I=te,$=xe),(Ze.equals(F)===!1||on!==B)&&(n.blendColor(Ze.r,Ze.g,Ze.b,on),F.copy(Ze),B=on),E=V,j=!1}function O(V,bt){V.side===_r?Ht(n.CULL_FACE):zt(n.CULL_FACE);let _t=V.side===Kn;bt&&(_t=!_t),J(_t),V.blending===Lo&&V.transparent===!1?D(Yr):D(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const xt=V.stencilWrite;l.setTest(xt),xt&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),st(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?zt(n.SAMPLE_ALPHA_TO_COVERAGE):Ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(V){L!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),L=V)}function tt(V){V!==nw?(zt(n.CULL_FACE),V!==R&&(V===gg?n.cullFace(n.BACK):V===iw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ht(n.CULL_FACE),R=V}function lt(V){V!==G&&(Mt&&n.lineWidth(V),G=V)}function st(V,bt,_t){V?(zt(n.POLYGON_OFFSET_FILL),(ft!==bt||ot!==_t)&&(n.polygonOffset(bt,_t),ft=bt,ot=_t)):Ht(n.POLYGON_OFFSET_FILL)}function dt(V){V?zt(n.SCISSOR_TEST):Ht(n.SCISSOR_TEST)}function w(V){V===void 0&&(V=n.TEXTURE0+vt-1),Q!==V&&(n.activeTexture(V),Q=V)}function S(V,bt,_t){_t===void 0&&(Q===null?_t=n.TEXTURE0+vt-1:_t=Q);let xt=Pt[_t];xt===void 0&&(xt={type:void 0,texture:void 0},Pt[_t]=xt),(xt.type!==V||xt.texture!==bt)&&(Q!==_t&&(n.activeTexture(_t),Q=_t),n.bindTexture(V,bt||At[V]),xt.type=V,xt.texture=bt)}function N(){const V=Pt[Q];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function se(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(V){ie.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ie.copy(V))}function Bt(V){ye.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ye.copy(V))}function Jt(V,bt){let _t=f.get(bt);_t===void 0&&(_t=new WeakMap,f.set(bt,_t));let xt=_t.get(V);xt===void 0&&(xt=n.getUniformBlockIndex(bt,V.name),_t.set(V,xt))}function qt(V,bt){const xt=f.get(bt).get(V);u.get(bt)!==xt&&(n.uniformBlockBinding(bt,xt,V.__bindingPointIndex),u.set(bt,xt))}function ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,Pt={},d={},g=new WeakMap,m=[],x=null,M=!1,E=null,v=null,_=null,P=null,A=null,I=null,$=null,F=new Pe(0,0,0),B=0,j=!1,L=null,R=null,G=null,ft=null,ot=null,ie.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:zt,disable:Ht,bindFramebuffer:Kt,drawBuffers:re,useProgram:oe,setBlending:D,setMaterial:O,setFlipSided:J,setCullFace:tt,setLineWidth:lt,setPolygonOffset:st,setScissorTest:dt,activeTexture:w,bindTexture:S,unbindTexture:N,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:Rt,texImage3D:se,updateUBOMapping:Jt,uniformBlockBinding:qt,texStorage2D:It,texStorage3D:St,texSubImage2D:Z,texSubImage3D:Tt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Et,scissor:Yt,viewport:Bt,reset:ge}}function h_(n,t,e,i){const s=J2(i);switch(e){case b0:return n*t;case C0:return n*t;case R0:return n*t*2;case P0:return n*t/s.components*s.byteLength;case dd:return n*t/s.components*s.byteLength;case L0:return n*t*2/s.components*s.byteLength;case pd:return n*t*2/s.components*s.byteLength;case w0:return n*t*3/s.components*s.byteLength;case Fi:return n*t*4/s.components*s.byteLength;case md:return n*t*4/s.components*s.byteLength;case _c:case vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xc:case Mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dh:case mh:return Math.max(n,16)*Math.max(t,8)/4;case hh:case ph:return Math.max(n,8)*Math.max(t,8)/2;case gh:case _h:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case yh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Th:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Lh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ih:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Sc:case Dh:case Uh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case I0:case Nh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Fh:case Oh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function J2(n){switch(n){case yr:case E0:return{byteLength:1,components:1};case Ia:case T0:case Na:return{byteLength:2,components:1};case fd:case hd:return{byteLength:2,components:4};case Ns:case ud:case xr:return{byteLength:4,components:1};case A0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function j2(n,t,e,i,s,a,l){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Fe,d=new WeakMap;let g;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,S){return x?new OffscreenCanvas(w,S):Ic("canvas")}function E(w,S,N){let K=1;const et=dt(w);if((et.width>N||et.height>N)&&(K=N/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(K*et.width),Tt=Math.floor(K*et.height);g===void 0&&(g=M(Z,Tt));const pt=S?M(Z,Tt):g;return pt.width=Z,pt.height=Tt,pt.getContext("2d").drawImage(w,0,0,Z,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Tt+")."),pt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),w;return w}function v(w){return w.generateMipmaps&&w.minFilter!==Ti&&w.minFilter!==Ni}function _(w){n.generateMipmap(w)}function P(w,S,N,K,et=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=S;if(S===n.RED&&(N===n.FLOAT&&(Z=n.R32F),N===n.HALF_FLOAT&&(Z=n.R16F),N===n.UNSIGNED_BYTE&&(Z=n.R8)),S===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.R8UI),N===n.UNSIGNED_SHORT&&(Z=n.R16UI),N===n.UNSIGNED_INT&&(Z=n.R32UI),N===n.BYTE&&(Z=n.R8I),N===n.SHORT&&(Z=n.R16I),N===n.INT&&(Z=n.R32I)),S===n.RG&&(N===n.FLOAT&&(Z=n.RG32F),N===n.HALF_FLOAT&&(Z=n.RG16F),N===n.UNSIGNED_BYTE&&(Z=n.RG8)),S===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.RG8UI),N===n.UNSIGNED_SHORT&&(Z=n.RG16UI),N===n.UNSIGNED_INT&&(Z=n.RG32UI),N===n.BYTE&&(Z=n.RG8I),N===n.SHORT&&(Z=n.RG16I),N===n.INT&&(Z=n.RG32I)),S===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),S===n.RGBA){const Tt=et?Cc:Ue.getTransfer(K);N===n.FLOAT&&(Z=n.RGBA32F),N===n.HALF_FLOAT&&(Z=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Z=Tt===We?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function A(w,S){let N;return w?S===null||S===Ns||S===zo?N=n.DEPTH24_STENCIL8:S===xr?N=n.DEPTH32F_STENCIL8:S===Ia&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ns||S===zo?N=n.DEPTH_COMPONENT24:S===xr?N=n.DEPTH_COMPONENT32F:S===Ia&&(N=n.DEPTH_COMPONENT16),N}function I(w,S){return v(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ti&&w.minFilter!==Ni?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function $(w){const S=w.target;S.removeEventListener("dispose",$),B(S),S.isVideoTexture&&d.delete(S)}function F(w){const S=w.target;S.removeEventListener("dispose",F),L(S)}function B(w){const S=i.get(w);if(S.__webglInit===void 0)return;const N=w.source,K=m.get(N);if(K){const et=K[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&j(w),Object.keys(K).length===0&&m.delete(N)}i.remove(w)}function j(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const N=w.source,K=m.get(N);delete K[S.__cacheKey],l.memory.textures--}function L(w){const S=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let et=0;et<S.__webglFramebuffer[K].length;et++)n.deleteFramebuffer(S.__webglFramebuffer[K][et]);else n.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)n.deleteFramebuffer(S.__webglFramebuffer[K]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=w.textures;for(let K=0,et=N.length;K<et;K++){const Z=i.get(N[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),l.memory.textures--),i.remove(N[K])}i.remove(w)}let R=0;function G(){R=0}function ft(){const w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function ot(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function vt(w,S){const N=i.get(w);if(w.isVideoTexture&&lt(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(N,w,S);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+S)}function Mt(w,S){const N=i.get(w);if(w.version>0&&N.__version!==w.version){ye(N,w,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+S)}function ct(w,S){const N=i.get(w);if(w.version>0&&N.__version!==w.version){ye(N,w,S);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+S)}function at(w,S){const N=i.get(w);if(w.version>0&&N.__version!==w.version){ht(N,w,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+S)}const Q={[uh]:n.REPEAT,[Cs]:n.CLAMP_TO_EDGE,[fh]:n.MIRRORED_REPEAT},Pt={[Ti]:n.NEAREST,[zw]:n.NEAREST_MIPMAP_NEAREST,[zl]:n.NEAREST_MIPMAP_LINEAR,[Ni]:n.LINEAR,[Mf]:n.LINEAR_MIPMAP_NEAREST,[Rs]:n.LINEAR_MIPMAP_LINEAR},Ot={[Ww]:n.NEVER,[Zw]:n.ALWAYS,[Xw]:n.LESS,[D0]:n.LEQUAL,[qw]:n.EQUAL,[Kw]:n.GEQUAL,[Yw]:n.GREATER,[$w]:n.NOTEQUAL};function Lt(w,S){if(S.type===xr&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ni||S.magFilter===Mf||S.magFilter===zl||S.magFilter===Rs||S.minFilter===Ni||S.minFilter===Mf||S.minFilter===zl||S.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Q[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Q[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Q[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Pt[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Pt[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ot[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ti||S.minFilter!==zl&&S.minFilter!==Rs||S.type===xr&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ie(w,S){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",$));const K=S.source;let et=m.get(K);et===void 0&&(et={},m.set(K,et));const Z=ot(S);if(Z!==w.__cacheKey){et[Z]===void 0&&(et[Z]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,N=!0),et[Z].usedTimes++;const Tt=et[w.__cacheKey];Tt!==void 0&&(et[w.__cacheKey].usedTimes--,Tt.usedTimes===0&&j(S)),w.__cacheKey=Z,w.__webglTexture=et[Z].texture}return N}function ye(w,S,N){let K=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=n.TEXTURE_3D);const et=ie(w,S),Z=S.source;e.bindTexture(K,w.__webglTexture,n.TEXTURE0+N);const Tt=i.get(Z);if(Z.version!==Tt.__version||et===!0){e.activeTexture(n.TEXTURE0+N);const pt=Ue.getPrimaries(Ue.workingColorSpace),Et=S.colorSpace===kr?null:Ue.getPrimaries(S.colorSpace),It=S.colorSpace===kr||pt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let St=E(S.image,!1,s.maxTextureSize);St=st(S,St);const Rt=a.convert(S.format,S.colorSpace),se=a.convert(S.type);let Yt=P(S.internalFormat,Rt,se,S.colorSpace,S.isVideoTexture);Lt(K,S);let Bt;const Jt=S.mipmaps,qt=S.isVideoTexture!==!0,ge=Tt.__version===void 0||et===!0,V=Z.dataReady,bt=I(S,St);if(S.isDepthTexture)Yt=A(S.format===Ho,S.type),ge&&(qt?e.texStorage2D(n.TEXTURE_2D,1,Yt,St.width,St.height):e.texImage2D(n.TEXTURE_2D,0,Yt,St.width,St.height,0,Rt,se,null));else if(S.isDataTexture)if(Jt.length>0){qt&&ge&&e.texStorage2D(n.TEXTURE_2D,bt,Yt,Jt[0].width,Jt[0].height);for(let _t=0,xt=Jt.length;_t<xt;_t++)Bt=Jt[_t],qt?V&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Bt.width,Bt.height,Rt,se,Bt.data):e.texImage2D(n.TEXTURE_2D,_t,Yt,Bt.width,Bt.height,0,Rt,se,Bt.data);S.generateMipmaps=!1}else qt?(ge&&e.texStorage2D(n.TEXTURE_2D,bt,Yt,St.width,St.height),V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St.width,St.height,Rt,se,St.data)):e.texImage2D(n.TEXTURE_2D,0,Yt,St.width,St.height,0,Rt,se,St.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,Yt,Jt[0].width,Jt[0].height,St.depth);for(let _t=0,xt=Jt.length;_t<xt;_t++)if(Bt=Jt[_t],S.format!==Fi)if(Rt!==null)if(qt){if(V)if(S.layerUpdates.size>0){const Ct=h_(Bt.width,Bt.height,S.format,S.type);for(const te of S.layerUpdates){const xe=Bt.data.subarray(te*Ct/Bt.data.BYTES_PER_ELEMENT,(te+1)*Ct/Bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,te,Bt.width,Bt.height,1,Rt,xe,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,Bt.width,Bt.height,St.depth,Rt,Bt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_t,Yt,Bt.width,Bt.height,St.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,Bt.width,Bt.height,St.depth,Rt,se,Bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,_t,Yt,Bt.width,Bt.height,St.depth,0,Rt,se,Bt.data)}else{qt&&ge&&e.texStorage2D(n.TEXTURE_2D,bt,Yt,Jt[0].width,Jt[0].height);for(let _t=0,xt=Jt.length;_t<xt;_t++)Bt=Jt[_t],S.format!==Fi?Rt!==null?qt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,_t,0,0,Bt.width,Bt.height,Rt,Bt.data):e.compressedTexImage2D(n.TEXTURE_2D,_t,Yt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?V&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Bt.width,Bt.height,Rt,se,Bt.data):e.texImage2D(n.TEXTURE_2D,_t,Yt,Bt.width,Bt.height,0,Rt,se,Bt.data)}else if(S.isDataArrayTexture)if(qt){if(ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,Yt,St.width,St.height,St.depth),V)if(S.layerUpdates.size>0){const _t=h_(St.width,St.height,S.format,S.type);for(const xt of S.layerUpdates){const Ct=St.data.subarray(xt*_t/St.data.BYTES_PER_ELEMENT,(xt+1)*_t/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xt,St.width,St.height,1,Rt,se,Ct)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Rt,se,St.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Yt,St.width,St.height,St.depth,0,Rt,se,St.data);else if(S.isData3DTexture)qt?(ge&&e.texStorage3D(n.TEXTURE_3D,bt,Yt,St.width,St.height,St.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Rt,se,St.data)):e.texImage3D(n.TEXTURE_3D,0,Yt,St.width,St.height,St.depth,0,Rt,se,St.data);else if(S.isFramebufferTexture){if(ge)if(qt)e.texStorage2D(n.TEXTURE_2D,bt,Yt,St.width,St.height);else{let _t=St.width,xt=St.height;for(let Ct=0;Ct<bt;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,Yt,_t,xt,0,Rt,se,null),_t>>=1,xt>>=1}}else if(Jt.length>0){if(qt&&ge){const _t=dt(Jt[0]);e.texStorage2D(n.TEXTURE_2D,bt,Yt,_t.width,_t.height)}for(let _t=0,xt=Jt.length;_t<xt;_t++)Bt=Jt[_t],qt?V&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Rt,se,Bt):e.texImage2D(n.TEXTURE_2D,_t,Yt,Rt,se,Bt);S.generateMipmaps=!1}else if(qt){if(ge){const _t=dt(St);e.texStorage2D(n.TEXTURE_2D,bt,Yt,_t.width,_t.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Rt,se,St)}else e.texImage2D(n.TEXTURE_2D,0,Yt,Rt,se,St);v(S)&&_(K),Tt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ht(w,S,N){if(S.image.length!==6)return;const K=ie(w,S),et=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+N);const Z=i.get(et);if(et.version!==Z.__version||K===!0){e.activeTexture(n.TEXTURE0+N);const Tt=Ue.getPrimaries(Ue.workingColorSpace),pt=S.colorSpace===kr?null:Ue.getPrimaries(S.colorSpace),Et=S.colorSpace===kr||Tt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const It=S.isCompressedTexture||S.image[0].isCompressedTexture,St=S.image[0]&&S.image[0].isDataTexture,Rt=[];for(let xt=0;xt<6;xt++)!It&&!St?Rt[xt]=E(S.image[xt],!0,s.maxCubemapSize):Rt[xt]=St?S.image[xt].image:S.image[xt],Rt[xt]=st(S,Rt[xt]);const se=Rt[0],Yt=a.convert(S.format,S.colorSpace),Bt=a.convert(S.type),Jt=P(S.internalFormat,Yt,Bt,S.colorSpace),qt=S.isVideoTexture!==!0,ge=Z.__version===void 0||K===!0,V=et.dataReady;let bt=I(S,se);Lt(n.TEXTURE_CUBE_MAP,S);let _t;if(It){qt&&ge&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Jt,se.width,se.height);for(let xt=0;xt<6;xt++){_t=Rt[xt].mipmaps;for(let Ct=0;Ct<_t.length;Ct++){const te=_t[Ct];S.format!==Fi?Yt!==null?qt?V&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,te.width,te.height,Yt,te.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,Jt,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,te.width,te.height,Yt,Bt,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,Jt,te.width,te.height,0,Yt,Bt,te.data)}}}else{if(_t=S.mipmaps,qt&&ge){_t.length>0&&bt++;const xt=dt(Rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Jt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(St){qt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Rt[xt].width,Rt[xt].height,Yt,Bt,Rt[xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Jt,Rt[xt].width,Rt[xt].height,0,Yt,Bt,Rt[xt].data);for(let Ct=0;Ct<_t.length;Ct++){const xe=_t[Ct].image[xt].image;qt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,xe.width,xe.height,Yt,Bt,xe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,Jt,xe.width,xe.height,0,Yt,Bt,xe.data)}}else{qt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Yt,Bt,Rt[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Jt,Yt,Bt,Rt[xt]);for(let Ct=0;Ct<_t.length;Ct++){const te=_t[Ct];qt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,Yt,Bt,te.image[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,Jt,Yt,Bt,te.image[xt])}}}v(S)&&_(n.TEXTURE_CUBE_MAP),Z.__version=et.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function At(w,S,N,K,et,Z){const Tt=a.convert(N.format,N.colorSpace),pt=a.convert(N.type),Et=P(N.internalFormat,Tt,pt,N.colorSpace);if(!i.get(S).__hasExternalTextures){const St=Math.max(1,S.width>>Z),Rt=Math.max(1,S.height>>Z);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,Et,St,Rt,S.depth,0,Tt,pt,null):e.texImage2D(et,Z,Et,St,Rt,0,Tt,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),tt(S)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,et,i.get(N).__webglTexture,0,J(S)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,et,i.get(N).__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(w,S,N){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){const K=S.depthTexture,et=K&&K.isDepthTexture?K.type:null,Z=A(S.stencilBuffer,et),Tt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=J(S);tt(S)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,Z,S.width,S.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,Z,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Z,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,w)}else{const K=S.textures;for(let et=0;et<K.length;et++){const Z=K[et],Tt=a.convert(Z.format,Z.colorSpace),pt=a.convert(Z.type),Et=P(Z.internalFormat,Tt,pt,Z.colorSpace),It=J(S);N&&tt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,It,Et,S.width,S.height):tt(S)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It,Et,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Et,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ht(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),vt(S.depthTexture,0);const K=i.get(S.depthTexture).__webglTexture,et=J(S);if(S.depthTexture.format===Io)tt(S)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(S.depthTexture.format===Ho)tt(S)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Kt(w){const S=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ht(S.__webglFramebuffer,w)}else if(N){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]=n.createRenderbuffer(),zt(S.__webglDepthbuffer[K],w,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),zt(S.__webglDepthbuffer,w,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function re(w,S,N){const K=i.get(w);S!==void 0&&At(K.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Kt(w)}function oe(w){const S=w.texture,N=i.get(w),K=i.get(S);w.addEventListener("dispose",F);const et=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Tt=et.length>1;if(Tt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=S.version,l.memory.textures++),Z){N.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[pt]=[];for(let Et=0;Et<S.mipmaps.length;Et++)N.__webglFramebuffer[pt][Et]=n.createFramebuffer()}else N.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let pt=0;pt<S.mipmaps.length;pt++)N.__webglFramebuffer[pt]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let pt=0,Et=et.length;pt<Et;pt++){const It=i.get(et[pt]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),l.memory.textures++)}if(w.samples>0&&tt(w)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let pt=0;pt<et.length;pt++){const Et=et[pt];N.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[pt]);const It=a.convert(Et.format,Et.colorSpace),St=a.convert(Et.type),Rt=P(Et.internalFormat,It,St,Et.colorSpace,w.isXRRenderTarget===!0),se=J(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,se,Rt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,N.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),zt(N.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Lt(n.TEXTURE_CUBE_MAP,S);for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)At(N.__webglFramebuffer[pt][Et],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et);else At(N.__webglFramebuffer[pt],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);v(S)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let pt=0,Et=et.length;pt<Et;pt++){const It=et[pt],St=i.get(It);e.bindTexture(n.TEXTURE_2D,St.__webglTexture),Lt(n.TEXTURE_2D,It),At(N.__webglFramebuffer,w,It,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),v(It)&&_(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,K.__webglTexture),Lt(pt,S),S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)At(N.__webglFramebuffer[Et],w,S,n.COLOR_ATTACHMENT0,pt,Et);else At(N.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,pt,0);v(S)&&_(pt),e.unbindTexture()}w.depthBuffer&&Kt(w)}function Le(w){const S=w.textures;for(let N=0,K=S.length;N<K;N++){const et=S[N];if(v(et)){const Z=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Tt=i.get(et).__webglTexture;e.bindTexture(Z,Tt),_(Z),e.unbindTexture()}}}const z=[],D=[];function O(w){if(w.samples>0){if(tt(w)===!1){const S=w.textures,N=w.width,K=w.height;let et=n.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(w),pt=S.length>1;if(pt)for(let Et=0;Et<S.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Et=0;Et<S.length;Et++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[Et]);const It=i.get(S[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,It,0)}n.blitFramebuffer(0,0,N,K,0,0,N,K,et,n.NEAREST),f===!0&&(z.length=0,D.length=0,z.push(n.COLOR_ATTACHMENT0+Et),w.depthBuffer&&w.resolveDepthBuffer===!1&&(z.push(Z),D.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let Et=0;Et<S.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[Et]);const It=i.get(S[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,It,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&f){const S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function J(w){return Math.min(s.maxSamples,w.samples)}function tt(w){const S=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function lt(w){const S=l.render.frame;d.get(w)!==S&&(d.set(w,S),w.update())}function st(w,S){const N=w.colorSpace,K=w.format,et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==ns&&N!==kr&&(Ue.getTransfer(N)===We?(K!==Fi||et!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function dt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=ft,this.resetTextureUnits=G,this.setTexture2D=vt,this.setTexture2DArray=Mt,this.setTexture3D=ct,this.setTextureCube=at,this.rebindTextures=re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=tt}function Q2(n,t){function e(i,s=kr){let a;const l=Ue.getTransfer(s);if(i===yr)return n.UNSIGNED_BYTE;if(i===fd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===A0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===E0)return n.BYTE;if(i===T0)return n.SHORT;if(i===Ia)return n.UNSIGNED_SHORT;if(i===ud)return n.INT;if(i===Ns)return n.UNSIGNED_INT;if(i===xr)return n.FLOAT;if(i===Na)return n.HALF_FLOAT;if(i===b0)return n.ALPHA;if(i===w0)return n.RGB;if(i===Fi)return n.RGBA;if(i===C0)return n.LUMINANCE;if(i===R0)return n.LUMINANCE_ALPHA;if(i===Io)return n.DEPTH_COMPONENT;if(i===Ho)return n.DEPTH_STENCIL;if(i===P0)return n.RED;if(i===dd)return n.RED_INTEGER;if(i===L0)return n.RG;if(i===pd)return n.RG_INTEGER;if(i===md)return n.RGBA_INTEGER;if(i===_c||i===vc||i===xc||i===Mc)if(l===We)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===_c)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===_c)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hh||i===dh||i===ph||i===mh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===hh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ph)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gh||i===_h||i===vh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===gh||i===_h)return l===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===vh)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xh||i===Mh||i===Sh||i===yh||i===Eh||i===Th||i===Ah||i===bh||i===wh||i===Ch||i===Rh||i===Ph||i===Lh||i===Ih)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===xh)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mh)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sh)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yh)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Eh)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Th)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ah)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bh)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wh)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ch)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rh)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ph)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lh)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ih)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sc||i===Dh||i===Uh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Sc)return l===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===I0||i===Nh||i===Fh||i===Oh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Sc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Nh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class tI extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Sa extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eI={type:"move"};class Yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,l=null;const u=this._targetRay,f=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){l=!0;for(const E of t.hand.values()){const v=e.getJointPose(E,i),_=this._getHandJoint(h,E);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const d=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],m=d.position.distanceTo(g.position),x=.02,M=.005;h.inputState.pinching&&m>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&m<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(eI)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Sa;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const nI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iI=`
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

}`;class rI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Zn,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Jr({vertexShader:nI,fragmentShader:iI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oi(new Jc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sI extends Vo{constructor(t,e){super();const i=this;let s=null,a=1,l=null,u="local-floor",f=1,h=null,d=null,g=null,m=null,x=null,M=null;const E=new rI,v=e.getContextAttributes();let _=null,P=null;const A=[],I=[],$=new Fe;let F=null;const B=new Si;B.layers.enable(1),B.viewport=new _n;const j=new Si;j.layers.enable(2),j.viewport=new _n;const L=[B,j],R=new tI;R.layers.enable(1),R.layers.enable(2);let G=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ht){let At=A[ht];return At===void 0&&(At=new Yf,A[ht]=At),At.getTargetRaySpace()},this.getControllerGrip=function(ht){let At=A[ht];return At===void 0&&(At=new Yf,A[ht]=At),At.getGripSpace()},this.getHand=function(ht){let At=A[ht];return At===void 0&&(At=new Yf,A[ht]=At),At.getHandSpace()};function ot(ht){const At=I.indexOf(ht.inputSource);if(At===-1)return;const zt=A[At];zt!==void 0&&(zt.update(ht.inputSource,ht.frame,h||l),zt.dispatchEvent({type:ht.type,data:ht.inputSource}))}function vt(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",vt),s.removeEventListener("inputsourceschange",Mt);for(let ht=0;ht<A.length;ht++){const At=I[ht];At!==null&&(I[ht]=null,A[ht].disconnect(At))}G=null,ft=null,E.reset(),t.setRenderTarget(_),x=null,m=null,g=null,s=null,P=null,ye.stop(),i.isPresenting=!1,t.setPixelRatio(F),t.setSize($.width,$.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ht){a=ht,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ht){u=ht,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(ht){h=ht},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(ht){if(s=ht,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",vt),s.addEventListener("inputsourceschange",Mt),v.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize($),s.renderState.layers===void 0){const At={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new Fs(x.framebufferWidth,x.framebufferHeight,{format:Fi,type:yr,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let At=null,zt=null,Ht=null;v.depth&&(Ht=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=v.stencil?Ho:Io,zt=v.stencil?zo:Ns);const Kt={colorFormat:e.RGBA8,depthFormat:Ht,scaleFactor:a};g=new XRWebGLBinding(s,e),m=g.createProjectionLayer(Kt),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),P=new Fs(m.textureWidth,m.textureHeight,{format:Fi,type:yr,depthTexture:new q0(m.textureWidth,m.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await s.requestReferenceSpace(u),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function Mt(ht){for(let At=0;At<ht.removed.length;At++){const zt=ht.removed[At],Ht=I.indexOf(zt);Ht>=0&&(I[Ht]=null,A[Ht].disconnect(zt))}for(let At=0;At<ht.added.length;At++){const zt=ht.added[At];let Ht=I.indexOf(zt);if(Ht===-1){for(let re=0;re<A.length;re++)if(re>=I.length){I.push(zt),Ht=re;break}else if(I[re]===null){I[re]=zt,Ht=re;break}if(Ht===-1)break}const Kt=A[Ht];Kt&&Kt.connect(zt)}}const ct=new q,at=new q;function Q(ht,At,zt){ct.setFromMatrixPosition(At.matrixWorld),at.setFromMatrixPosition(zt.matrixWorld);const Ht=ct.distanceTo(at),Kt=At.projectionMatrix.elements,re=zt.projectionMatrix.elements,oe=Kt[14]/(Kt[10]-1),Le=Kt[14]/(Kt[10]+1),z=(Kt[9]+1)/Kt[5],D=(Kt[9]-1)/Kt[5],O=(Kt[8]-1)/Kt[0],J=(re[8]+1)/re[0],tt=oe*O,lt=oe*J,st=Ht/(-O+J),dt=st*-O;At.matrixWorld.decompose(ht.position,ht.quaternion,ht.scale),ht.translateX(dt),ht.translateZ(st),ht.matrixWorld.compose(ht.position,ht.quaternion,ht.scale),ht.matrixWorldInverse.copy(ht.matrixWorld).invert();const w=oe+st,S=Le+st,N=tt-dt,K=lt+(Ht-dt),et=z*Le/S*w,Z=D*Le/S*w;ht.projectionMatrix.makePerspective(N,K,et,Z,w,S),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert()}function Pt(ht,At){At===null?ht.matrixWorld.copy(ht.matrix):ht.matrixWorld.multiplyMatrices(At.matrixWorld,ht.matrix),ht.matrixWorldInverse.copy(ht.matrixWorld).invert()}this.updateCamera=function(ht){if(s===null)return;E.texture!==null&&(ht.near=E.depthNear,ht.far=E.depthFar),R.near=j.near=B.near=ht.near,R.far=j.far=B.far=ht.far,(G!==R.near||ft!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,ft=R.far,B.near=G,B.far=ft,j.near=G,j.far=ft,B.updateProjectionMatrix(),j.updateProjectionMatrix(),ht.updateProjectionMatrix());const At=ht.parent,zt=R.cameras;Pt(R,At);for(let Ht=0;Ht<zt.length;Ht++)Pt(zt[Ht],At);zt.length===2?Q(R,B,j):R.projectionMatrix.copy(B.projectionMatrix),Ot(ht,R,At)};function Ot(ht,At,zt){zt===null?ht.matrix.copy(At.matrixWorld):(ht.matrix.copy(zt.matrixWorld),ht.matrix.invert(),ht.matrix.multiply(At.matrixWorld)),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.updateMatrixWorld(!0),ht.projectionMatrix.copy(At.projectionMatrix),ht.projectionMatrixInverse.copy(At.projectionMatrixInverse),ht.isPerspectiveCamera&&(ht.fov=Bh*2*Math.atan(1/ht.projectionMatrix.elements[5]),ht.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(m===null&&x===null))return f},this.setFoveation=function(ht){f=ht,m!==null&&(m.fixedFoveation=ht),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ht)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let Lt=null;function ie(ht,At){if(d=At.getViewerPose(h||l),M=At,d!==null){const zt=d.views;x!==null&&(t.setRenderTargetFramebuffer(P,x.framebuffer),t.setRenderTarget(P));let Ht=!1;zt.length!==R.cameras.length&&(R.cameras.length=0,Ht=!0);for(let re=0;re<zt.length;re++){const oe=zt[re];let Le=null;if(x!==null)Le=x.getViewport(oe);else{const D=g.getViewSubImage(m,oe);Le=D.viewport,re===0&&(t.setRenderTargetTextures(P,D.colorTexture,m.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(P))}let z=L[re];z===void 0&&(z=new Si,z.layers.enable(re),z.viewport=new _n,L[re]=z),z.matrix.fromArray(oe.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(oe.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(Le.x,Le.y,Le.width,Le.height),re===0&&(R.matrix.copy(z.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ht===!0&&R.cameras.push(z)}const Kt=s.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")){const re=g.getDepthInformation(zt[0]);re&&re.isValid&&re.texture&&E.init(t,re,s.renderState)}}for(let zt=0;zt<A.length;zt++){const Ht=I[zt],Kt=A[zt];Ht!==null&&Kt!==void 0&&Kt.update(Ht,At,h||l)}Lt&&Lt(ht,At),At.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:At}),M=null}const ye=new X0;ye.setAnimationLoop(ie),this.setAnimationLoop=function(ht){Lt=ht},this.dispose=function(){}}}const Ms=new Un,oI=new nn;function aI(n,t){function e(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function i(v,_){_.color.getRGB(v.fogColor.value,G0(n)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function s(v,_,P,A,I){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(v,_):_.isMeshToonMaterial?(a(v,_),g(v,_)):_.isMeshPhongMaterial?(a(v,_),d(v,_)):_.isMeshStandardMaterial?(a(v,_),m(v,_),_.isMeshPhysicalMaterial&&x(v,_,I)):_.isMeshMatcapMaterial?(a(v,_),M(v,_)):_.isMeshDepthMaterial?a(v,_):_.isMeshDistanceMaterial?(a(v,_),E(v,_)):_.isMeshNormalMaterial?a(v,_):_.isLineBasicMaterial?(l(v,_),_.isLineDashedMaterial&&u(v,_)):_.isPointsMaterial?f(v,_,P,A):_.isSpriteMaterial?h(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,e(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Kn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,e(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Kn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,e(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,e(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const P=t.get(_),A=P.envMap,I=P.envMapRotation;A&&(v.envMap.value=A,Ms.copy(I),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),v.envMapRotation.value.setFromMatrix4(oI.makeRotationFromEuler(Ms)),v.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,v.aoMapTransform))}function l(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform))}function u(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function f(v,_,P,A){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*P,v.scale.value=A*.5,_.map&&(v.map.value=_.map,e(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function h(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,e(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,e(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function d(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function g(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function m(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function x(v,_,P){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Kn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,v.specularIntensityMapTransform))}function M(v,_){_.matcap&&(v.matcap.value=_.matcap)}function E(v,_){const P=t.get(_).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lI(n,t,e,i){let s={},a={},l=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(P,A){const I=A.program;i.uniformBlockBinding(P,I)}function h(P,A){let I=s[P.id];I===void 0&&(M(P),I=d(P),s[P.id]=I,P.addEventListener("dispose",v));const $=A.program;i.updateUBOMapping(P,$);const F=t.render.frame;a[P.id]!==F&&(m(P),a[P.id]=F)}function d(P){const A=g();P.__bindingPointIndex=A;const I=n.createBuffer(),$=P.__size,F=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,I),n.bufferData(n.UNIFORM_BUFFER,$,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,I),I}function g(){for(let P=0;P<u;P++)if(l.indexOf(P)===-1)return l.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(P){const A=s[P.id],I=P.uniforms,$=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let F=0,B=I.length;F<B;F++){const j=Array.isArray(I[F])?I[F]:[I[F]];for(let L=0,R=j.length;L<R;L++){const G=j[L];if(x(G,F,L,$)===!0){const ft=G.__offset,ot=Array.isArray(G.value)?G.value:[G.value];let vt=0;for(let Mt=0;Mt<ot.length;Mt++){const ct=ot[Mt],at=E(ct);typeof ct=="number"||typeof ct=="boolean"?(G.__data[0]=ct,n.bufferSubData(n.UNIFORM_BUFFER,ft+vt,G.__data)):ct.isMatrix3?(G.__data[0]=ct.elements[0],G.__data[1]=ct.elements[1],G.__data[2]=ct.elements[2],G.__data[3]=0,G.__data[4]=ct.elements[3],G.__data[5]=ct.elements[4],G.__data[6]=ct.elements[5],G.__data[7]=0,G.__data[8]=ct.elements[6],G.__data[9]=ct.elements[7],G.__data[10]=ct.elements[8],G.__data[11]=0):(ct.toArray(G.__data,vt),vt+=at.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ft,G.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(P,A,I,$){const F=P.value,B=A+"_"+I;if($[B]===void 0)return typeof F=="number"||typeof F=="boolean"?$[B]=F:$[B]=F.clone(),!0;{const j=$[B];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return $[B]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function M(P){const A=P.uniforms;let I=0;const $=16;for(let B=0,j=A.length;B<j;B++){const L=Array.isArray(A[B])?A[B]:[A[B]];for(let R=0,G=L.length;R<G;R++){const ft=L[R],ot=Array.isArray(ft.value)?ft.value:[ft.value];for(let vt=0,Mt=ot.length;vt<Mt;vt++){const ct=ot[vt],at=E(ct),Q=I%$,Pt=Q%at.boundary,Ot=Q+Pt;I+=Pt,Ot!==0&&$-Ot<at.storage&&(I+=$-Ot),ft.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=I,I+=at.storage}}}const F=I%$;return F>0&&(I+=$-F),P.__size=I,P.__cache={},this}function E(P){const A={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(A.boundary=4,A.storage=4):P.isVector2?(A.boundary=8,A.storage=8):P.isVector3||P.isColor?(A.boundary=16,A.storage=12):P.isVector4?(A.boundary=16,A.storage=16):P.isMatrix3?(A.boundary=48,A.storage=48):P.isMatrix4?(A.boundary=64,A.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),A}function v(P){const A=P.target;A.removeEventListener("dispose",v);const I=l.indexOf(A.__bindingPointIndex);l.splice(I,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete a[A.id]}function _(){for(const P in s)n.deleteBuffer(s[P]);l=[],s={},a={}}return{bind:f,update:h,dispose:_}}class cI{constructor(t={}){const{canvas:e=jw(),context:i=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:g=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=l;const x=new Uint32Array(4),M=new Int32Array(4);let E=null,v=null;const _=[],P=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qi,this.toneMapping=$r,this.toneMappingExposure=1;const A=this;let I=!1,$=0,F=0,B=null,j=-1,L=null;const R=new _n,G=new _n;let ft=null;const ot=new Pe(0);let vt=0,Mt=e.width,ct=e.height,at=1,Q=null,Pt=null;const Ot=new _n(0,0,Mt,ct),Lt=new _n(0,0,Mt,ct);let ie=!1;const ye=new W0;let ht=!1,At=!1;const zt=new nn,Ht=new q,Kt=new _n,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Le(){return B===null?at:1}let z=i;function D(C,W){return e.getContext(C,W)}try{const C={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cd}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),z===null){const W="webgl2";if(z=D(W,C),z===null)throw D(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let O,J,tt,lt,st,dt,w,S,N,K,et,Z,Tt,pt,Et,It,St,Rt,se,Yt,Bt,Jt,qt,ge;function V(){O=new mL(z),O.init(),Jt=new Q2(z,O),J=new lL(z,O,t,Jt),tt=new Z2(z),lt=new vL(z),st=new F2,dt=new j2(z,O,tt,st,J,Jt,lt),w=new uL(A),S=new pL(A),N=new TC(z),qt=new oL(z,N),K=new gL(z,N,lt,qt),et=new ML(z,K,N,lt),se=new xL(z,J,dt),It=new cL(st),Z=new N2(A,w,S,O,J,qt,It),Tt=new aI(A,st),pt=new B2,Et=new W2(O),Rt=new sL(A,w,S,tt,et,m,f),St=new K2(A,et,J),ge=new lI(z,lt,J,tt),Yt=new aL(z,O,lt),Bt=new _L(z,O,lt),lt.programs=Z.programs,A.capabilities=J,A.extensions=O,A.properties=st,A.renderLists=pt,A.shadowMap=St,A.state=tt,A.info=lt}V();const bt=new sI(A,z);this.xr=bt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=O.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=O.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(C){C!==void 0&&(at=C,this.setSize(Mt,ct,!1))},this.getSize=function(C){return C.set(Mt,ct)},this.setSize=function(C,W,nt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=C,ct=W,e.width=Math.floor(C*at),e.height=Math.floor(W*at),nt===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(Mt*at,ct*at).floor()},this.setDrawingBufferSize=function(C,W,nt){Mt=C,ct=W,at=nt,e.width=Math.floor(C*nt),e.height=Math.floor(W*nt),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(Ot)},this.setViewport=function(C,W,nt,it){C.isVector4?Ot.set(C.x,C.y,C.z,C.w):Ot.set(C,W,nt,it),tt.viewport(R.copy(Ot).multiplyScalar(at).round())},this.getScissor=function(C){return C.copy(Lt)},this.setScissor=function(C,W,nt,it){C.isVector4?Lt.set(C.x,C.y,C.z,C.w):Lt.set(C,W,nt,it),tt.scissor(G.copy(Lt).multiplyScalar(at).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(C){tt.setScissorTest(ie=C)},this.setOpaqueSort=function(C){Q=C},this.setTransparentSort=function(C){Pt=C},this.getClearColor=function(C){return C.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(C=!0,W=!0,nt=!0){let it=0;if(C){let Y=!1;if(B!==null){const wt=B.texture.format;Y=wt===md||wt===pd||wt===dd}if(Y){const wt=B.texture.type,Ft=wt===yr||wt===Ns||wt===Ia||wt===zo||wt===fd||wt===hd,kt=Rt.getClearColor(),Vt=Rt.getClearAlpha(),ee=kt.r,ne=kt.g,$t=kt.b;Ft?(x[0]=ee,x[1]=ne,x[2]=$t,x[3]=Vt,z.clearBufferuiv(z.COLOR,0,x)):(M[0]=ee,M[1]=ne,M[2]=$t,M[3]=Vt,z.clearBufferiv(z.COLOR,0,M))}else it|=z.COLOR_BUFFER_BIT}W&&(it|=z.DEPTH_BUFFER_BIT),nt&&(it|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),pt.dispose(),Et.dispose(),st.dispose(),w.dispose(),S.dispose(),et.dispose(),qt.dispose(),ge.dispose(),Z.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",fi),bt.removeEventListener("sessionend",Ga),bi.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const C=lt.autoReset,W=St.enabled,nt=St.autoUpdate,it=St.needsUpdate,Y=St.type;V(),lt.autoReset=C,St.enabled=W,St.autoUpdate=nt,St.needsUpdate=it,St.type=Y}function Ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function te(C){const W=C.target;W.removeEventListener("dispose",te),xe(W)}function xe(C){Ze(C),st.remove(C)}function Ze(C){const W=st.get(C).programs;W!==void 0&&(W.forEach(function(nt){Z.releaseProgram(nt)}),C.isShaderMaterial&&Z.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,nt,it,Y,wt){W===null&&(W=re);const Ft=Y.isMesh&&Y.matrixWorld.determinant()<0,kt=Qc(C,W,nt,it,Y);tt.setMaterial(it,Ft);let Vt=nt.index,ee=1;if(it.wireframe===!0){if(Vt=K.getWireframeAttribute(nt),Vt===void 0)return;ee=2}const ne=nt.drawRange,$t=nt.attributes.position;let Te=ne.start*ee,Ge=(ne.start+ne.count)*ee;wt!==null&&(Te=Math.max(Te,wt.start*ee),Ge=Math.min(Ge,(wt.start+wt.count)*ee)),Vt!==null?(Te=Math.max(Te,0),Ge=Math.min(Ge,Vt.count)):$t!=null&&(Te=Math.max(Te,0),Ge=Math.min(Ge,$t.count));const Ve=Ge-Te;if(Ve<0||Ve===1/0)return;qt.setup(Y,it,kt,nt,Vt);let Cn,Ce=Yt;if(Vt!==null&&(Cn=N.get(Vt),Ce=Bt,Ce.setIndex(Cn)),Y.isMesh)it.wireframe===!0?(tt.setLineWidth(it.wireframeLinewidth*Le()),Ce.setMode(z.LINES)):Ce.setMode(z.TRIANGLES);else if(Y.isLine){let Xt=it.linewidth;Xt===void 0&&(Xt=1),tt.setLineWidth(Xt*Le()),Y.isLineSegments?Ce.setMode(z.LINES):Y.isLineLoop?Ce.setMode(z.LINE_LOOP):Ce.setMode(z.LINE_STRIP)}else Y.isPoints?Ce.setMode(z.POINTS):Y.isSprite&&Ce.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Ce.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Xt=Y._multiDrawStarts,an=Y._multiDrawCounts,Ae=Y._multiDrawCount,Bn=Vt?N.get(Vt).bytesPerElement:1,tr=st.get(it).currentProgram.getUniforms();for(let vn=0;vn<Ae;vn++)tr.setValue(z,"_gl_DrawID",vn),Ce.render(Xt[vn]/Bn,an[vn])}else if(Y.isInstancedMesh)Ce.renderInstances(Te,Ve,Y.count);else if(nt.isInstancedBufferGeometry){const Xt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,an=Math.min(nt.instanceCount,Xt);Ce.renderInstances(Te,Ve,an)}else Ce.render(Te,Ve)};function on(C,W,nt){C.transparent===!0&&C.side===_r&&C.forceSinglePass===!1?(C.side=Kn,C.needsUpdate=!0,Gs(C,W,nt),C.side=Zr,C.needsUpdate=!0,Gs(C,W,nt),C.side=_r):Gs(C,W,nt)}this.compile=function(C,W,nt=null){nt===null&&(nt=C),v=Et.get(nt),v.init(W),P.push(v),nt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),C!==nt&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const it=new Set;return C.traverse(function(Y){const wt=Y.material;if(wt)if(Array.isArray(wt))for(let Ft=0;Ft<wt.length;Ft++){const kt=wt[Ft];on(kt,nt,Y),it.add(kt)}else on(wt,nt,Y),it.add(wt)}),P.pop(),v=null,it},this.compileAsync=function(C,W,nt=null){const it=this.compile(C,W,nt);return new Promise(Y=>{function wt(){if(it.forEach(function(Ft){st.get(Ft).currentProgram.isReady()&&it.delete(Ft)}),it.size===0){Y(C);return}setTimeout(wt,10)}O.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ee=null;function Ai(C){Ee&&Ee(C)}function fi(){bi.stop()}function Ga(){bi.start()}const bi=new X0;bi.setAnimationLoop(Ai),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(C){Ee=C,bt.setAnimationLoop(C),C===null?bi.stop():bi.start()},bt.addEventListener("sessionstart",fi),bt.addEventListener("sessionend",Ga),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(W),W=bt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,W,B),v=Et.get(C,P.length),v.init(W),P.push(v),zt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ye.setFromProjectionMatrix(zt),At=this.localClippingEnabled,ht=It.init(this.clippingPlanes,At),E=pt.get(C,_.length),E.init(),_.push(E),bt.enabled===!0&&bt.isPresenting===!0){const wt=A.xr.getDepthSensingMesh();wt!==null&&qo(wt,W,-1/0,A.sortObjects)}qo(C,W,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(Q,Pt),oe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,oe&&Rt.addToRenderList(E,C),this.info.render.frame++,ht===!0&&It.beginShadows();const nt=v.state.shadowsArray;St.render(nt,C,W),ht===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=E.opaque,Y=E.transmissive;if(v.setupLights(),W.isArrayCamera){const wt=W.cameras;if(Y.length>0)for(let Ft=0,kt=wt.length;Ft<kt;Ft++){const Vt=wt[Ft];Va(it,Y,C,Vt)}oe&&Rt.render(C);for(let Ft=0,kt=wt.length;Ft<kt;Ft++){const Vt=wt[Ft];zs(E,C,Vt,Vt.viewport)}}else Y.length>0&&Va(it,Y,C,W),oe&&Rt.render(C),zs(E,C,W);B!==null&&(dt.updateMultisampleRenderTarget(B),dt.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(A,C,W),qt.resetDefaultState(),j=-1,L=null,P.pop(),P.length>0?(v=P[P.length-1],ht===!0&&It.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,_.pop(),_.length>0?E=_[_.length-1]:E=null};function qo(C,W,nt,it){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)nt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ye.intersectsSprite(C)){it&&Kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(zt);const Ft=et.update(C),kt=C.material;kt.visible&&E.push(C,Ft,kt,nt,Kt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ye.intersectsObject(C))){const Ft=et.update(C),kt=C.material;if(it&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Kt.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Kt.copy(Ft.boundingSphere.center)),Kt.applyMatrix4(C.matrixWorld).applyMatrix4(zt)),Array.isArray(kt)){const Vt=Ft.groups;for(let ee=0,ne=Vt.length;ee<ne;ee++){const $t=Vt[ee],Te=kt[$t.materialIndex];Te&&Te.visible&&E.push(C,Ft,Te,nt,Kt.z,$t)}}else kt.visible&&E.push(C,Ft,kt,nt,Kt.z,null)}}const wt=C.children;for(let Ft=0,kt=wt.length;Ft<kt;Ft++)qo(wt[Ft],W,nt,it)}function zs(C,W,nt,it){const Y=C.opaque,wt=C.transmissive,Ft=C.transparent;v.setupLightsView(nt),ht===!0&&It.setGlobalState(A.clippingPlanes,nt),it&&tt.viewport(R.copy(it)),Y.length>0&&Hs(Y,W,nt),wt.length>0&&Hs(wt,W,nt),Ft.length>0&&Hs(Ft,W,nt),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Va(C,W,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[it.id]===void 0&&(v.state.transmissionRenderTarget[it.id]=new Fs(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?Na:yr,minFilter:Rs,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const wt=v.state.transmissionRenderTarget[it.id],Ft=it.viewport||R;wt.setSize(Ft.z,Ft.w);const kt=A.getRenderTarget();A.setRenderTarget(wt),A.getClearColor(ot),vt=A.getClearAlpha(),vt<1&&A.setClearColor(16777215,.5),A.clear(),oe&&Rt.render(nt);const Vt=A.toneMapping;A.toneMapping=$r;const ee=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),v.setupLightsView(it),ht===!0&&It.setGlobalState(A.clippingPlanes,it),Hs(C,nt,it),dt.updateMultisampleRenderTarget(wt),dt.updateRenderTargetMipmap(wt),O.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let $t=0,Te=W.length;$t<Te;$t++){const Ge=W[$t],Ve=Ge.object,Cn=Ge.geometry,Ce=Ge.material,Xt=Ge.group;if(Ce.side===_r&&Ve.layers.test(it.layers)){const an=Ce.side;Ce.side=Kn,Ce.needsUpdate=!0,ka(Ve,nt,it,Cn,Ce,Xt),Ce.side=an,Ce.needsUpdate=!0,ne=!0}}ne===!0&&(dt.updateMultisampleRenderTarget(wt),dt.updateRenderTargetMipmap(wt))}A.setRenderTarget(kt),A.setClearColor(ot,vt),ee!==void 0&&(it.viewport=ee),A.toneMapping=Vt}function Hs(C,W,nt){const it=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,wt=C.length;Y<wt;Y++){const Ft=C[Y],kt=Ft.object,Vt=Ft.geometry,ee=it===null?Ft.material:it,ne=Ft.group;kt.layers.test(nt.layers)&&ka(kt,W,nt,Vt,ee,ne)}}function ka(C,W,nt,it,Y,wt){C.onBeforeRender(A,W,nt,it,Y,wt),C.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.transparent===!0&&Y.side===_r&&Y.forceSinglePass===!1?(Y.side=Kn,Y.needsUpdate=!0,A.renderBufferDirect(nt,W,it,Y,C,wt),Y.side=Zr,Y.needsUpdate=!0,A.renderBufferDirect(nt,W,it,Y,C,wt),Y.side=_r):A.renderBufferDirect(nt,W,it,Y,C,wt),C.onAfterRender(A,W,nt,it,Y,wt)}function Gs(C,W,nt){W.isScene!==!0&&(W=re);const it=st.get(C),Y=v.state.lights,wt=v.state.shadowsArray,Ft=Y.state.version,kt=Z.getParameters(C,Y.state,wt,W,nt),Vt=Z.getProgramCacheKey(kt);let ee=it.programs;it.environment=C.isMeshStandardMaterial?W.environment:null,it.fog=W.fog,it.envMap=(C.isMeshStandardMaterial?S:w).get(C.envMap||it.environment),it.envMapRotation=it.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",te),ee=new Map,it.programs=ee);let ne=ee.get(Vt);if(ne!==void 0){if(it.currentProgram===ne&&it.lightsStateVersion===Ft)return Xa(C,kt),ne}else kt.uniforms=Z.getUniforms(C),C.onBeforeCompile(kt,A),ne=Z.acquireProgram(kt,Vt),ee.set(Vt,ne),it.uniforms=kt.uniforms;const $t=it.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($t.clippingPlanes=It.uniform),Xa(C,kt),it.needsLights=qa(C),it.lightsStateVersion=Ft,it.needsLights&&($t.ambientLightColor.value=Y.state.ambient,$t.lightProbe.value=Y.state.probe,$t.directionalLights.value=Y.state.directional,$t.directionalLightShadows.value=Y.state.directionalShadow,$t.spotLights.value=Y.state.spot,$t.spotLightShadows.value=Y.state.spotShadow,$t.rectAreaLights.value=Y.state.rectArea,$t.ltc_1.value=Y.state.rectAreaLTC1,$t.ltc_2.value=Y.state.rectAreaLTC2,$t.pointLights.value=Y.state.point,$t.pointLightShadows.value=Y.state.pointShadow,$t.hemisphereLights.value=Y.state.hemi,$t.directionalShadowMap.value=Y.state.directionalShadowMap,$t.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,$t.spotShadowMap.value=Y.state.spotShadowMap,$t.spotLightMatrix.value=Y.state.spotLightMatrix,$t.spotLightMap.value=Y.state.spotLightMap,$t.pointShadowMap.value=Y.state.pointShadowMap,$t.pointShadowMatrix.value=Y.state.pointShadowMatrix),it.currentProgram=ne,it.uniformsList=null,ne}function Wa(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=yc.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Xa(C,W){const nt=st.get(C);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function Qc(C,W,nt,it,Y){W.isScene!==!0&&(W=re),dt.resetTextureUnits();const wt=W.fog,Ft=it.isMeshStandardMaterial?W.environment:null,kt=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ns,Vt=(it.isMeshStandardMaterial?S:w).get(it.envMap||Ft),ee=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ne=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),$t=!!nt.morphAttributes.position,Te=!!nt.morphAttributes.normal,Ge=!!nt.morphAttributes.color;let Ve=$r;it.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ve=A.toneMapping);const Cn=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Ce=Cn!==void 0?Cn.length:0,Xt=st.get(it),an=v.state.lights;if(ht===!0&&(At===!0||C!==L)){const zn=C===L&&it.id===j;It.setState(it,C,zn)}let Ae=!1;it.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==an.state.version||Xt.outputColorSpace!==kt||Y.isBatchedMesh&&Xt.batching===!1||!Y.isBatchedMesh&&Xt.batching===!0||Y.isBatchedMesh&&Xt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Xt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Xt.instancing===!1||!Y.isInstancedMesh&&Xt.instancing===!0||Y.isSkinnedMesh&&Xt.skinning===!1||!Y.isSkinnedMesh&&Xt.skinning===!0||Y.isInstancedMesh&&Xt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xt.instancingMorph===!1&&Y.morphTexture!==null||Xt.envMap!==Vt||it.fog===!0&&Xt.fog!==wt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==It.numPlanes||Xt.numIntersection!==It.numIntersection)||Xt.vertexAlphas!==ee||Xt.vertexTangents!==ne||Xt.morphTargets!==$t||Xt.morphNormals!==Te||Xt.morphColors!==Ge||Xt.toneMapping!==Ve||Xt.morphTargetsCount!==Ce)&&(Ae=!0):(Ae=!0,Xt.__version=it.version);let Bn=Xt.currentProgram;Ae===!0&&(Bn=Gs(it,W,Y));let tr=!1,vn=!1,Yo=!1;const qe=Bn.getUniforms(),ei=Xt.uniforms;if(tt.useProgram(Bn.program)&&(tr=!0,vn=!0,Yo=!0),it.id!==j&&(j=it.id,vn=!0),tr||L!==C){qe.setValue(z,"projectionMatrix",C.projectionMatrix),qe.setValue(z,"viewMatrix",C.matrixWorldInverse);const zn=qe.map.cameraPosition;zn!==void 0&&zn.setValue(z,Ht.setFromMatrixPosition(C.matrixWorld)),J.logarithmicDepthBuffer&&qe.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&qe.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),L!==C&&(L=C,vn=!0,Yo=!0)}if(Y.isSkinnedMesh){qe.setOptional(z,Y,"bindMatrix"),qe.setOptional(z,Y,"bindMatrixInverse");const zn=Y.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),qe.setValue(z,"boneTexture",zn.boneTexture,dt))}Y.isBatchedMesh&&(qe.setOptional(z,Y,"batchingTexture"),qe.setValue(z,"batchingTexture",Y._matricesTexture,dt),qe.setOptional(z,Y,"batchingIdTexture"),qe.setValue(z,"batchingIdTexture",Y._indirectTexture,dt),qe.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&qe.setValue(z,"batchingColorTexture",Y._colorsTexture,dt));const Vs=nt.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0)&&se.update(Y,nt,Bn),(vn||Xt.receiveShadow!==Y.receiveShadow)&&(Xt.receiveShadow=Y.receiveShadow,qe.setValue(z,"receiveShadow",Y.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(ei.envMap.value=Vt,ei.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&W.environment!==null&&(ei.envMapIntensity.value=W.environmentIntensity),vn&&(qe.setValue(z,"toneMappingExposure",A.toneMappingExposure),Xt.needsLights&&tu(ei,Yo),wt&&it.fog===!0&&Tt.refreshFogUniforms(ei,wt),Tt.refreshMaterialUniforms(ei,it,at,ct,v.state.transmissionRenderTarget[C.id]),yc.upload(z,Wa(Xt),ei,dt)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(yc.upload(z,Wa(Xt),ei,dt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&qe.setValue(z,"center",Y.center),qe.setValue(z,"modelViewMatrix",Y.modelViewMatrix),qe.setValue(z,"normalMatrix",Y.normalMatrix),qe.setValue(z,"modelMatrix",Y.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const zn=it.uniformsGroups;for(let ks=0,Ya=zn.length;ks<Ya;ks++){const Ws=zn[ks];ge.update(Ws,Bn),ge.bind(Ws,Bn)}}return Bn}function tu(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function qa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,W,nt){st.get(C.texture).__webglTexture=W,st.get(C.depthTexture).__webglTexture=nt;const it=st.get(C);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const nt=st.get(C);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,nt=0){B=C,$=W,F=nt;let it=!0,Y=null,wt=!1,Ft=!1;if(C){const Vt=st.get(C);Vt.__useDefaultFramebuffer!==void 0?(tt.bindFramebuffer(z.FRAMEBUFFER,null),it=!1):Vt.__webglFramebuffer===void 0?dt.setupRenderTarget(C):Vt.__hasExternalTextures&&dt.rebindTextures(C,st.get(C.texture).__webglTexture,st.get(C.depthTexture).__webglTexture);const ee=C.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Ft=!0);const ne=st.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ne[W])?Y=ne[W][nt]:Y=ne[W],wt=!0):C.samples>0&&dt.useMultisampledRTT(C)===!1?Y=st.get(C).__webglMultisampledFramebuffer:Array.isArray(ne)?Y=ne[nt]:Y=ne,R.copy(C.viewport),G.copy(C.scissor),ft=C.scissorTest}else R.copy(Ot).multiplyScalar(at).floor(),G.copy(Lt).multiplyScalar(at).floor(),ft=ie;if(tt.bindFramebuffer(z.FRAMEBUFFER,Y)&&it&&tt.drawBuffers(C,Y),tt.viewport(R),tt.scissor(G),tt.setScissorTest(ft),wt){const Vt=st.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Vt.__webglTexture,nt)}else if(Ft){const Vt=st.get(C.texture),ee=W||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Vt.__webglTexture,nt||0,ee)}j=-1},this.readRenderTargetPixels=function(C,W,nt,it,Y,wt,Ft){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=st.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(kt=kt[Ft]),kt){tt.bindFramebuffer(z.FRAMEBUFFER,kt);try{const Vt=C.texture,ee=Vt.format,ne=Vt.type;if(!J.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-it&&nt>=0&&nt<=C.height-Y&&z.readPixels(W,nt,it,Y,Jt.convert(ee),Jt.convert(ne),wt)}finally{const Vt=B!==null?st.get(B).__webglFramebuffer:null;tt.bindFramebuffer(z.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(C,W,nt,it,Y,wt,Ft){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=st.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(kt=kt[Ft]),kt){tt.bindFramebuffer(z.FRAMEBUFFER,kt);try{const Vt=C.texture,ee=Vt.format,ne=Vt.type;if(!J.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-it&&nt>=0&&nt<=C.height-Y){const $t=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,$t),z.bufferData(z.PIXEL_PACK_BUFFER,wt.byteLength,z.STREAM_READ),z.readPixels(W,nt,it,Y,Jt.convert(ee),Jt.convert(ne),0),z.flush();const Te=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);await Qw(z,Te,4);try{z.bindBuffer(z.PIXEL_PACK_BUFFER,$t),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,wt)}finally{z.deleteBuffer($t),z.deleteSync(Te)}return wt}}finally{const Vt=B!==null?st.get(B).__webglFramebuffer:null;tt.bindFramebuffer(z.FRAMEBUFFER,Vt)}}},this.copyFramebufferToTexture=function(C,W=null,nt=0){C.isTexture!==!0&&(ba("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const it=Math.pow(2,-nt),Y=Math.floor(C.image.width*it),wt=Math.floor(C.image.height*it),Ft=W!==null?W.x:0,kt=W!==null?W.y:0;dt.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,nt,0,0,Ft,kt,Y,wt),tt.unbindTexture()},this.copyTextureToTexture=function(C,W,nt=null,it=null,Y=0){C.isTexture!==!0&&(ba("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,C=arguments[1],W=arguments[2],Y=arguments[3]||0,nt=null);let wt,Ft,kt,Vt,ee,ne;nt!==null?(wt=nt.max.x-nt.min.x,Ft=nt.max.y-nt.min.y,kt=nt.min.x,Vt=nt.min.y):(wt=C.image.width,Ft=C.image.height,kt=0,Vt=0),it!==null?(ee=it.x,ne=it.y):(ee=0,ne=0);const $t=Jt.convert(W.format),Te=Jt.convert(W.type);dt.setTexture2D(W,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const Ge=z.getParameter(z.UNPACK_ROW_LENGTH),Ve=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Cn=z.getParameter(z.UNPACK_SKIP_PIXELS),Ce=z.getParameter(z.UNPACK_SKIP_ROWS),Xt=z.getParameter(z.UNPACK_SKIP_IMAGES),an=C.isCompressedTexture?C.mipmaps[Y]:C.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,an.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,an.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,kt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Vt),C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Y,ee,ne,wt,Ft,$t,Te,an.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Y,ee,ne,an.width,an.height,$t,an.data):z.texSubImage2D(z.TEXTURE_2D,Y,ee,ne,wt,Ft,$t,Te,an),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ge),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ve),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Cn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ce),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xt),Y===0&&W.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),tt.unbindTexture()},this.copyTextureToTexture3D=function(C,W,nt=null,it=null,Y=0){C.isTexture!==!0&&(ba("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,it=arguments[1]||null,C=arguments[2],W=arguments[3],Y=arguments[4]||0);let wt,Ft,kt,Vt,ee,ne,$t,Te,Ge;const Ve=C.isCompressedTexture?C.mipmaps[Y]:C.image;nt!==null?(wt=nt.max.x-nt.min.x,Ft=nt.max.y-nt.min.y,kt=nt.max.z-nt.min.z,Vt=nt.min.x,ee=nt.min.y,ne=nt.min.z):(wt=Ve.width,Ft=Ve.height,kt=Ve.depth,Vt=0,ee=0,ne=0),it!==null?($t=it.x,Te=it.y,Ge=it.z):($t=0,Te=0,Ge=0);const Cn=Jt.convert(W.format),Ce=Jt.convert(W.type);let Xt;if(W.isData3DTexture)dt.setTexture3D(W,0),Xt=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)dt.setTexture2DArray(W,0),Xt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const an=z.getParameter(z.UNPACK_ROW_LENGTH),Ae=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Bn=z.getParameter(z.UNPACK_SKIP_PIXELS),tr=z.getParameter(z.UNPACK_SKIP_ROWS),vn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ve.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ve.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Vt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ne),C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Xt,Y,$t,Te,Ge,wt,Ft,kt,Cn,Ce,Ve.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(Xt,Y,$t,Te,Ge,wt,Ft,kt,Cn,Ve.data):z.texSubImage3D(Xt,Y,$t,Te,Ge,wt,Ft,kt,Cn,Ce,Ve),z.pixelStorei(z.UNPACK_ROW_LENGTH,an),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ae),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Bn),z.pixelStorei(z.UNPACK_SKIP_ROWS,tr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,vn),Y===0&&W.generateMipmaps&&z.generateMipmap(Xt),tt.unbindTexture()},this.initRenderTarget=function(C){st.get(C).__webglFramebuffer===void 0&&dt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?dt.setTextureCube(C,0):C.isData3DTexture?dt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?dt.setTexture2DArray(C,0):dt.setTexture2D(C,0),tt.unbindTexture()},this.resetState=function(){$=0,F=0,B=null,tt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===gd?"display-p3":"srgb",e.unpackColorSpace=Ue.workingColorSpace===Zc?"display-p3":"srgb"}}class uI extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class J0 extends ko{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Dc=new q,Uc=new q,d_=new nn,ga=new _d,ac=new za,$f=new q,p_=new q;class fI extends Fn{constructor(t=new ti,e=new J0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)Dc.fromBufferAttribute(e,s-1),Uc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Dc.distanceTo(Uc);t.setAttribute("lineDistance",new Jn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(s),ac.radius+=a,t.ray.intersectsSphere(ac)===!1)return;d_.copy(s).invert(),ga.copy(t.ray).applyMatrix4(d_);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,d=i.index,m=i.attributes.position;if(d!==null){const x=Math.max(0,l.start),M=Math.min(d.count,l.start+l.count);for(let E=x,v=M-1;E<v;E+=h){const _=d.getX(E),P=d.getX(E+1),A=lc(this,t,ga,f,_,P);A&&e.push(A)}if(this.isLineLoop){const E=d.getX(M-1),v=d.getX(x),_=lc(this,t,ga,f,E,v);_&&e.push(_)}}else{const x=Math.max(0,l.start),M=Math.min(m.count,l.start+l.count);for(let E=x,v=M-1;E<v;E+=h){const _=lc(this,t,ga,f,E,E+1);_&&e.push(_)}if(this.isLineLoop){const E=lc(this,t,ga,f,M-1,x);E&&e.push(E)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function lc(n,t,e,i,s,a){const l=n.geometry.attributes.position;if(Dc.fromBufferAttribute(l,s),Uc.fromBufferAttribute(l,a),e.distanceSqToSegment(Dc,Uc,$f,p_)>i)return;$f.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo($f);if(!(f<t.near||f>t.far))return{distance:f,point:p_.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const m_=new q,g_=new q;class hI extends fI{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,a=e.count;s<a;s+=2)m_.fromBufferAttribute(e,s),g_.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+m_.distanceTo(g_);t.setAttribute("lineDistance",new Jn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Md extends ko{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const __=new nn,Hh=new _d,cc=new za,uc=new q;class j0 extends Fn{constructor(t=new ti,e=new Md){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(s),cc.radius+=a,t.ray.intersectsSphere(cc)===!1)return;__.copy(s).invert(),Hh.copy(t.ray).applyMatrix4(__);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=i.index,g=i.attributes.position;if(h!==null){const m=Math.max(0,l.start),x=Math.min(h.count,l.start+l.count);for(let M=m,E=x;M<E;M++){const v=h.getX(M);uc.fromBufferAttribute(g,v),v_(uc,v,f,s,t,e,this)}}else{const m=Math.max(0,l.start),x=Math.min(g.count,l.start+l.count);for(let M=m,E=x;M<E;M++)uc.fromBufferAttribute(g,M),v_(uc,M,f,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function v_(n,t,e,i,s,a,l){const u=Hh.distanceSqToPoint(n);if(u<e){const f=new q;Hh.closestPointToPoint(n,f),f.applyMatrix4(i);const h=s.ray.origin.distanceTo(f);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:t,face:null,object:l})}}class Sd extends ti{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:l,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const f=Math.min(l+u,Math.PI);let h=0;const d=[],g=new q,m=new q,x=[],M=[],E=[],v=[];for(let _=0;_<=i;_++){const P=[],A=_/i;let I=0;_===0&&l===0?I=.5/e:_===i&&f===Math.PI&&(I=-.5/e);for(let $=0;$<=e;$++){const F=$/e;g.x=-t*Math.cos(s+F*a)*Math.sin(l+A*u),g.y=t*Math.cos(l+A*u),g.z=t*Math.sin(s+F*a)*Math.sin(l+A*u),M.push(g.x,g.y,g.z),m.copy(g).normalize(),E.push(m.x,m.y,m.z),v.push(F+I,1-A),P.push(h++)}d.push(P)}for(let _=0;_<i;_++)for(let P=0;P<e;P++){const A=d[_][P+1],I=d[_][P],$=d[_+1][P],F=d[_+1][P+1];(_!==0||l>0)&&x.push(A,I,F),(_!==i-1||f<Math.PI)&&x.push(I,$,F)}this.setIndex(x),this.setAttribute("position",new Jn(M,3)),this.setAttribute("normal",new Jn(E,3)),this.setAttribute("uv",new Jn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dI extends hI{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new ti;s.setAttribute("position",new Jn(e,3)),s.setAttribute("color",new Jn(i,3));const a=new J0({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(t,e,i){const s=new Pe,a=this.geometry.attributes.color.array;return s.set(t),s.toArray(a,0),s.toArray(a,3),s.set(e),s.toArray(a,6),s.toArray(a,9),s.set(i),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);var qn,Ps,Wr,Uo,Yi,Da,Fc,Gh,Vh;class pI{constructor(){ki(this,qn);ki(this,Ps,new Float32Array(new Array(6*2*1e3).fill(0).map(()=>.4+Math.random()*.6)));ki(this,Wr,0);ki(this,Uo);ki(this,Yi);ki(this,Da,0);ki(this,Fc,Math.PI/300);ki(this,Gh,Date.now());ki(this,Vh,new q(0,0,0));hs(this,qn,new ti);const t=new fn(De(this,Ps),3);t.setUsage(yg),De(this,qn).setAttribute("position",t),De(this,qn).setAttribute("color",t),window.fac=De(this,Yi),hs(this,Uo,new vd({vertexColors:!0})),this.mesh=new Oi(De(this,qn),De(this,Uo)),hs(this,Yi,new Array(180).fill(0).map(()=>this.createFactory())),this.n=.5}createFactory(){const t={vertices:new Float32Array,attribute:new fn(new Float32Array,3),geometry:new ti,mesh:null};return t.mesh=new Oi(t.geometry,De(this,Uo)),this.mesh.add(t.mesh),t}transformData(t){const e=De(this,Yi)[0],i=this.getPosition(t);e.vertices=new Float32Array(this.getVertices(i)),e.attribute=new fn(e.vertices,3),e.geometry.setAttribute("position",e.attribute);const s=new Float32Array(t.reduce((l,u)=>l.concat(...new Array(6*2*3).fill(0).map(f=>{const h=.2+u/255*.6159999999999999,d=.329+u/255*(.59-.329)*Math.sin(De(this,Da));return[.584+u/255*(.949-.584),h,d]})),[])),a=new fn(s,3);e.geometry.setAttribute("color",a),De(this,Yi).splice(0,1),De(this,Yi).push(e)}updataFactorys(){const t=De(this,Yi).length;De(this,Yi).forEach((e,i)=>{e.mesh.position.set(0,0,1*(i-t))})}setPosition(t){De(this,qn).setAttribute("position",new fn(new Float32Array(t),3))}addPosition(t){t.forEach(i=>{De(this,Ps)[De(this,Wr)]=i,zm(this,Wr)._++,De(this,Wr)>=De(this,Ps).length&&hs(this,Wr,0)}),De(this,qn).attributes.position.needsUpdate="true",window.index=De(this,Wr);const e=new fn(De(this,Ps),3);e.setUsage(yg),De(this,qn).setAttribute("position",e)}setColor(t){De(this,qn).setAttribute("color",new fn(new Float32Array(t),3))}addColor(t){const e=De(this,qn).attributes.color.array||[],i=new Float32Array([...t,...e]);De(this,qn).setAttribute("color",new fn(new Float32Array(i),3))}getBuffer(t,e,i){const s=[];for(let a=0;a<t.length;a++)e&&t[a].applyEuler(e),i&&t[a].add(i),s.push(...t[a]);return s}getSphereVertices(t){const e=[];for(let i=0;i<t.length-1;i++){const s=t[i].length;for(let a=0;a<s-1;a++)e.push(...t[i][a]),e.push(...t[i+1][a]),e.push(...t[i+1][a+1]),e.push(...t[i][a]),e.push(...t[i+1][a+1]),e.push(...t[i][a+1]);e.push(...t[i][s-1]),e.push(...t[i+1][s-1]),e.push(...t[i+1][0]),e.push(...t[i][s-1]),e.push(...t[i+1][0]),e.push(...t[i][0])}return e}getSpherePosition(t=100,e=100){const i=new Array,s=new Array;if(typeof Cube_WhichMakeSense<"u"){const d=[new Un(0,0,0,"XYZ"),new Un(0,Math.PI/2,0,"XYZ"),new Un(0,Math.PI,0,"XYZ"),new Un(0,-Math.PI/2,0,"XYZ"),new Un(Math.PI/2,0,0,"XYZ"),new Un(-Math.PI/2,0,0,"XYZ")],g=[new q(0,0,0),new q(t,0,0),new q(t,0,-t),new q(0,0,-t),new q(0,0,-t),new q(0,t,0)];for(let m=0;m<6;m++){const x=[];x[0]=new q(0,0,0),x[1]=new q(t,0,0),x[2]=new q(t,e,0),x[3]=new q(0,0,0),x[4]=new q(t,e,0),x[5]=new q(0,e,0),i.push(...this.getBuffer(x,d[m],g[m]));let M=[];M=[m/4,.5,.5,.2,m/8+.5,.5,.2,.5,m/8+.5],s.push(...M)}}s.push(i.map(d=>.2+Math.abs(d/100)));const a=[],l=20;for(let d=0;d<=l*2;d++){a[d]=[];const g=100,m=Math.sqrt(Math.abs(g*g*(d/l-1)))*(d>l?-1:1);for(let x=0;x<l;x++){const M=Math.sqrt(g*g-m*m),E=M*Math.cos(2*Math.PI/l*(x+.5)),v=M*Math.sin(2*Math.PI/l*(x+.5));a[d].push(new q(E,v,m))}}const u=this.getSphereVertices(a);i.push(...u),s.push(...u.map(d=>.2+Math.abs(d/100)+Math.random()*.5));const f=new Float32Array([...i]);this.setPosition(f);const h=new Float32Array([...s]);this.setColor(h)}getMusicData(t){const e=this.getPosition(t);this.getVertices(e).map((s,a)=>a%3==2?.2+s/50:.2+Math.random()*.5),window.buffer=De(this,qn).attributes.position.array.length/3}getPosition(t){const i=[];for(let l=0;l<t.length;l++){const u=t[l]/3,f=[],h=()=>f.push(new q(2*l,0,1*1)),d=()=>f.push(new q(2*(l+1),0,1*1)),g=()=>f.push(new q(2*(l+1),u,1*1)),m=()=>f.push(new q(2*l,u,1*1)),x=()=>f.push(new q(2*l,0,1*0)),M=()=>f.push(new q(2*l,u,1*0)),E=()=>f.push(new q(2*(l+1),u,1*0)),v=()=>f.push(new q(2*(l+1),0,1*0));h(),d(),g(),m(),x(),M(),E(),v(),h(),m(),M(),x(),d(),v(),E(),g(),g(),E(),M(),m(),h(),x(),v(),d(),i.push(f)}return i}getVertices(t){const e=[];for(let i=0;i<t.length;i++)for(let s=0;s<6;s++)for(let a=s*4;a<s*4+2;a++)e.push(...t[i][s*4]),e.push(...t[i][a+1]),e.push(...t[i][a+2]);return e}update(){hs(this,Da,De(this,Da)+De(this,Fc)),this.updataFactorys()}}qn=new WeakMap,Ps=new WeakMap,Wr=new WeakMap,Uo=new WeakMap,Yi=new WeakMap,Da=new WeakMap,Fc=new WeakMap,Gh=new WeakMap,Vh=new WeakMap;const Q0=new ti;Q0.setAttribute("position",new fn(new Float32Array([0,0,0]),3));function mI(n=1,t=null){return new Md({size:n,map:t,color:16777215,transparent:!0})}function gI(n,t){return new j0(Q0,mI(n,t))}function _I(n=15,t=32,e=16,i=.005,s=16776960){const a=new Sd(n,t,e),l=new Md({size:i,color:s});return new j0(a,l)}function vI(n){const t=window.AudioContext||window.webkitAudioContext,e=new t,i=e.createMediaElementSource(n),s=e.createGain(),a=e.createAnalyser();return i.connect(s),s.connect(a),a.connect(e.destination),s.gain.value=1,a.fftSize=1024,a}class tv{constructor(t=60){this.length=t,this.value=new Array(t).fill(.0167),this.index=0,this.average=.0167,this.fps=60}updateValue(t){this.value[this.index]=t,this.index=++this.index>=this.length?0:this.index}getAverage(){return this.average=1/this.length*this.value.reduce((t,e)=>t+e),this.average}getFPS(){return this.fps=1/this.getAverage(),this.fps}}const xI=function(){return new tv(60),this.firstTime=!0,this.buff=new pI,this.getAnalyser=n=>{const t=n.target;this.firstTime&&(this.analyser=vI(t)),this.firstTime=!1},this.setCanvas=n=>{this.canvas=n,this.scene=new uI,this.camera=new Si(75,n.width/n.height,.1,1e3),this.renderer=new cI({alpha:!0,canvas:n}),this.axis=new dI(300),this.scene.add(this.axis);const t=200;this.camera.position.set(t/4,t/2,t/2),this.camera.rotation.set(-.5,0,0),this.group1=new Sa,this.scene.add(this.group1),this.group1.add(_I(t,30,15,t/500),gI(10)),this.group1.add(this.buff.mesh)},this.resize=()=>{const[n,t]=[this.canvas.width,this.canvas.height];this.renderer.setSize(n,t),this.camera.aspect=n/t,this.camera.updateProjectionMatrix()},this.update=()=>{if(this.analyser){const n=this.analyser.frequencyBinCount,t=new Uint8Array(n);this.analyser.getByteFrequencyData(t);const e=[...t].splice(0,128);this.buff.transformData(e)}this.buff.update()},this.render=()=>{this.renderer.render(this.scene,this.camera)},this},Ss=new xI,MI=["width","height"],SI=["src"],yI={__name:"CanvasSectionS2",props:{myMouse:Object,max:Number,ratio:Number},setup(n,{expose:t}){const e=Be(null);es(async()=>{Ss.setCanvas(e.value),await kc(),Qi.registerAnimationCallback("updateS2",Ss.update),Qi.registerAnimationCallback("renderS2",Ss.render),window.addEventListener("resize",Ss.resize,!1)}),id(()=>{window.removeEventListener("resize",Ss.resize,!1)});const i=Be(null);return t({section:i}),Be(null),(s,a)=>(tn(),en("section",{ref_key:"section",ref:i,class:"section",id:"S2"},[Nt("canvas",{id:"canvasS2",ref_key:"canvas",ref:e,width:n.max*n.ratio,height:n.ratio*n.max*n.ratio},null,8,MI),Nt("audio",{onPlay:a[0]||(a[0]=(...l)=>Se(Ss).getAnalyser&&Se(Ss).getAnalyser(...l)),ref:"audio",controls:"",id:"myAudio"},[Nt("source",{src:Se(ew)},null,8,SI)],544)],512))}},EI=Bs(yI,[["__scopeId","data-v-e528278e"]]);class un{constructor(){this.secondColumns=[],this.sortFunction=function(){},this.isSorting=!1,this.log=document.createElement("div")}setLog(){this.log=log}start(t,e){this.secondColumns=[],this.send(t+" is processing"),this.sortFunction=this[t],this.timesEveryFrame=Math.ceil(e.length/25),this.isSorting=!0,this[t+"Setting"](e)}update(t){if(this.isSorting){for(this.times=this.timesEveryFrame;this.times--;)if(this.sortFunction(t)===!0){[this.isStoping,this.times]=[!0,0];const i=this.sortFunction.name+" is done.";this.send(i)}this.isStoping&&(this.isSorting=!1,this.isStoping=!1)}}send(t){this.log.innerText=t}static swapColumn(t,e,i){[t.path.pointX,e.path.pointX]=[e.path.pointX,t.path.pointX],[t.path.pointY,e.path.pointY]=[e.path.pointY,t.path.pointY],t.path.NewTarget(t.x,t.y,i),e.path.NewTarget(e.x,e.y,i),[t.height,e.height]=[e.height,t.height]}bubbleSortSetting(t){this.i=0,this.j=0}bubbleSort(t){const e=t.length,i=this.i,s=this.j;if(i==e-1)return!0;if(s==e-1-i)return this.j=0,this.i++,!1;const a=t[s],l=t[s+1];a.height>l.height&&un.swapColumn(a,l,30),this.j++}selectionSortSetting(){this.i=0,this.j=1,this.minIndex=0}selectionSort(t){const e=t.length,i=this.i,s=this.j,a=this.minIndex;if(i==e-1)return!0;if(s==e){if(this.i++,this.minIndex=this.i,this.j=this.i+1,i==this.minIndex)return!1;const l=t[i],u=t[a];return un.swapColumn(l,u,60),!1}t[this.minIndex].height>t[s].height&&(this.minIndex=s),this.j++}insertionSortSetting(t){this.i=1,this.key=t[1].height,this.j=0}insertionSort(t){const e=t.length,i=this.i,s=this.j;if(i<e)if(s>=0&&t[s].height>t[s+1].height){const a=t[s+1],l=t[s],u=30+Math.ceil((this.timesEveryFrame-this.times)*20/this.timesEveryFrame);un.swapColumn(a,l,u),this.j--}else{if(this.i++,this.i>=e)return!0;this.j=this.i-1}else return!0}quickSortSetting(t){this.stack=[{left:0,right:t.length-1}],this.partitionPhase="0.SetPivot",this.pivot=Math.floor(t.length-1),this.j=0}quickSort(t){const e=this.stack.length,{left:i,right:s}=this.stack[e-1],a=this.pivot,l=60;switch(this.partitionPhase){case"0.SetPivot":const u=t[Math.floor((i+s)/2)],f=t[s];un.swapColumn(u,f,l),this.leftBound=i,this.rightBound=s-1,this.pivot=s,this.partitionPhase="1.FindLeftBound",this.j=0;break;case"1.FindLeftBound":if(t[this.leftBound+this.j].height>=t[a].height){this.leftBound=this.leftBound+this.j,this.partitionPhase="2.FindRightBound",this.j=0;break}this.j++;break;case"2.FindRightBound":if(t[a].height>=t[this.rightBound-this.j].height||this.rightBound-this.j<=this.leftBound){this.rightBound=this.rightBound-this.j,this.partitionPhase="3.SwapBoth";break}this.j++;break;case"3.SwapBoth":if(this.leftBound<this.rightBound){const h=t[this.leftBound],d=t[this.rightBound];un.swapColumn(h,d,l),this.partitionPhase="1.FindLeftBound",this.j=0,this.leftBound++,this.rightBound--}else{const h=t[this.leftBound],d=t[a];un.swapColumn(h,d,l),this.partitionPhase="4.EndPartition",this.pivot=this.leftBound}break;case"4.EndPartition":if(this.stack.pop(),i<a-1&&this.stack.push({left:i,right:a-1}),a+1<s&&this.stack.push({left:a+1,right:s}),this.stack.length==0)return!0;this.partitionPhase="0.SetPivot";break}}mergeSortSetting(t){const e=t.map(i=>i.height);this.height=Math.max(...e),this.stack=[[],[]],this.stack[0][0]={left:0,right:t.length-1},this.mergePhase="0.Split",this.i=0,this.j=0}mergeSort(t){const e=this.stack[0].length,i=this.stack[1].length,{min:s,mid:a,max:l}=this.stack[1][i-1]?this.stack[1][i-1]:{},u=this.i,f=a-s+this.j,h=this.secondColumns.slice(s,l+1),d=Math.min(30+Math.floor((l-f+a-u)/(e+i)),90);switch(this.mergePhase){case"0.Split":if(e==0){this.mergePhase="1.Copy",this.timesEveryFrame=1,this.secondColumns=JSON.parse(JSON.stringify(t.slice(0,t.length+1))),this.secondColumns.forEach((M,E)=>{M.path=new Po(M.x,M.y),M.path.NewTarget(M.x,M.y-this.height,20),M.width/=3});return}const{left:g,right:m}=this.stack[0][e-1],x=Math.ceil((g+m)/2);this.stack[0].pop(),g!=m&&(this.stack[0].push({left:g,right:x-1}),this.stack[0].push({left:x,right:m}),this.stack[1].push({min:g,mid:x,max:m}));break;case"1.Copy":if(i==0)return!0;h.forEach((M,E)=>{M.height=t[s+E].height,M.width=t[s+E].width/2,M.path.NewTarget(M.x,M.y-this.height,20)}),this.mergePhase="2.Merge";break;case"2.Merge":if(h[u].height>h[f].height){const M=h[f],E=t[s+this.i+this.j];un.swapColumn(M,E,d),M.height=0,this.j++,this.j>l-a&&(this.mergePhase="3.MergeLeft")}else{const M=h[u],E=t[s+this.i+this.j];un.swapColumn(M,E,d),M.height=0,this.i++,this.i>a-s&&(this.i--,this.j++),this.i>=a-s&&(this.mergePhase="4.MergeRight")}break;case"3.MergeLeft":if(u>=a-s){if(this.i=0,this.j=0,this.stack[1].pop(),this.stack[1].length==0){this.isStoping=!0;return}this.mergePhase="1.Copy",h.forEach((M,E)=>{M.height=t[s+E].height,M.path.NewTarget(M.x,M.y-this.height,20),M.width/=3})}else{const M=h[u],E=t[s+this.i+this.j];un.swapColumn(M,E,d),M.height=0,this.i++}break;case"4.MergeRight":if(f>l-s){if(this.i=0,this.j=0,this.stack[1].pop(),this.stack[1].length==0){this.isStoping=!0;return}this.mergePhase="1.Copy",h.forEach((M,E)=>{M.height=t[s+E].height,M.path.NewTarget(M.x,M.y-this.height,20),M.width/=3})}else{const M=h[f],E=t[s+this.i+this.j];un.swapColumn(M,E,d),M.height=0,this.j++}break}}static heapify(t,e,i){let s=i;const a=2*i+1,l=2*i+2;if(a<e&&t[a].height>t[s].height&&(s=a),l<e&&t[l].height>t[s].height&&(s=l),s!==i){const u=t[i],f=t[s];return un.swapColumn(u,f,60),s}return-1}heapSortSetting(t){this.i=Math.floor(t.length/2)-1,this.j=this.i,this.heapPhase="1.build"}heapSort(t){const e=t.length,i=this.i,s=this.j;switch(this.heapPhase){case"1.build":this.j=un.heapify(t,e,s),this.j==-1&&(this.i--,this.j=this.i,this.i<0&&(this.i=e-1,this.j=0,this.heapPhase="2.swap"));break;case"2.swap":const a=t[0],l=t[i];un.swapColumn(a,l,60),this.heapPhase="3.sort";break;case"3.sort":if(this.j=un.heapify(t,i,s),this.j==-1&&(this.j=0,this.i--,this.heapPhase="2.swap",this.i<0))return!0;break}}shellSortSetting(t){this.gap=Math.floor(t.length/2),this.i=this.gap,this.j=this.i}shellSort(t){const e=t.length,i=this.gap,s=this.i,a=this.j;if(i>0)if(s<e)if(a>=i&&t[a-i].height>t[a].height){const l=t[a],u=t[a-i];un.swapColumn(l,u,60),this.j-=i}else this.i++,this.j=this.i;else this.gap=Math.floor(i/2),this.i=this.gap,this.j=this.i;else return}countingSortSetting(t){const e=t.map(i=>i.height);this.maxValue=Math.max(...e),this.count=new Array(Math.floor(this.maxValue)).fill(0),this.secondColumns=new Array(t.length),this.i=0,this.countingPhase="1.count"}countingSort(t){const e=t.length,i=this.i;switch(this.countingPhase){case"1.count":this.count[Math.round(t[i].height)]++,this.i++,this.i>=e&&(this.i=1,this.countingPhase="2.sum");break;case"2.sum":this.count[i]+=this.count[i-1],this.i++,this.i>this.maxValue&&(this.i=e-1,this.countingPhase="3.build",this.timesEveryFrame=1);break;case"3.build":const s=this.count[Math.round(t[i].height)-1];this.secondColumns[s]=JSON.parse(JSON.stringify(t[i])),this.secondColumns[s].y=t[i].y-this.height,this.secondColumns[s].width/=2,this.secondColumns[s].path=new Po(t[i].x,t[i].y),this.secondColumns[s].path.NewTarget(t[s].x,t[i].y-400,60+Math.round(i/e*60)),this.count[t[i]]--,this.i--,this.i<0&&(this.i=0,this.countingPhase="4.output");break;case"4.output":const a=this.secondColumns[i],l=t[i];if(un.swapColumn(a,l,30+Math.round(i/e*60)),a.height=0,this.i++,this.i>=e)return!0;break}}randomSortSetting(){this.i=0,this.j=0,this.timesEveryFrame=1}randomSort(t){const e=t.length,i=this.i,s=this.j;if(i>=e)return!0;if(s>=e)return this.i=this.i*this.i+1,this.j=i,!1;const a=t[s],l=t[(s*s+1)%e];un.swapColumn(a,l,60-this.timesEveryFrame*2),this.j=this.i+this.j+1}instantRandomSortSetting(){this.i=0,this.j=0,this.timesEveryFrame=30}instantRandomSort(t){return this.randomSort(t)}}class TI{constructor(t,e){this.sort=new un,this.x=t,this.y=e,this.slow=.999,this.friction=.997,this.i=0,this.j=0,this.maxValue=865*.4;const i=Math.floor(t-200),s=Math.max(Math.floor(t*2/i),.5);this.columns=new Array(i).fill().map((f,h)=>this.createColumn(t-s*i/2+s*h,e*1.8,s,(h+1)/i*this.maxValue)),this.walls=new Array(5).fill().map((f,h)=>this.createWall("arc",t,e-t/2,865/2/25*(1+h*h),3,0+Math.PI/16*(4-h),Math.PI/16*(12+h),Math.PI/15*h,865/2/25));const a=Math.min(i*2,500),l=2+Math.floor(s/3);this.balls=new Array(a).fill().map((f,h)=>{const d=Math.pow(Math.random(),.6)*865/4,g=Math.random()*2*Math.PI;return this.createBall(t+d*Math.cos(g),.5*e+d*Math.sin(g),l)}),this.rects=[{left:0,top:0,right:t*2,bottom:10},{left:0,top:e*2-10,right:t*2,bottom:e*2},{left:0,top:0,right:10,bottom:e*2},{left:t*2-10,top:0,right:t*2,bottom:e*2}];const u=Math.floor(this.x/15);this.texts={log:{text:"Welcome to Sorting Algorithm animation",fontpx:u,x:this.x,y:this.y*2-u*1}}}createColumn(t,e,i,s){const a=new Po(t,e);return{x:t,y:e,width:i,height:s,path:a}}createWall(t="arc",e,i,s,a=5,l=0,u=2*Math.PI,f=0,h){return h||(h=s/20),{type:t,centerX:e,centerY:i,x:e,y:i,thick:a,length:s,startAngle:l,endAngle:u,period:f,swing:h}}createBall(t=this.x,e=this.y,i=3){const s=Math.random()*100-50,a=Math.random()*100-50,l=0,u=9.8*10;return{x:t,y:e,r:i,vx:s,vy:a,ax:l,ay:u}}getDist(t,e){const i=t.x-e.x,s=t.y-e.y;return Math.sqrt(i*i+s*s)}isCollide(t,e){if(e.type=="arc"){const i=t.x-e.x,s=t.y-e.y,a=Math.sqrt(i*i+s*s);return a+t.r>=e.length-e.thick&&a<e.length+e.thick?a:0}return 0}handleBallCollision(t,e,i){const s=(t.x+e.x)/2,a=(t.y+e.y)/2;t.x=s+(t.x-s)/(i/2)*t.r,t.y=a+(t.y-a)/(i/2)*t.r,e.x=s+(e.x-s)/(i/2)*e.r,e.y=a+(e.y-a)/(i/2)*e.r;const l=(t.vx-e.vx)/2,u=(t.vy-e.vy)/2,f=(t.vx+e.vx)/2,h=(t.vy+e.vy)/2,d=Math.atan((t.y-a)/(t.x-s)),g=-l*Math.sin(d)+u*Math.cos(d),m=-1*(l*Math.cos(d)+u*Math.sin(d)),x=-g*Math.sin(d)+m*Math.cos(d),M=g*Math.cos(d)+m*Math.sin(d);t.vx=(f+x)*this.friction,t.vy=(h+M)*this.friction,e.vx=(f-x)*this.friction,e.vy=(h-M)*this.friction}handleWallCollision(t,e,i){const s=e.x+(t.x-e.x)/i*e.length,a=e.y+(t.y-e.y)/i*e.length,l=Math.atan((a-e.y)/(s-e.x)),u=l>0?l:l+Math.PI,f=a>e.y?u:u+Math.PI;if(f>e.endAngle||f<e.startAngle)return;const h=i<=e.length?1:-1;t.x=s+(t.x-s)/(e.length-i)*(t.r+e.thick)*h,t.y=a+(t.y-a)/(e.length-i)*(t.r+e.thick)*h;const d=Math.atan((t.y-a)/(t.x-s)),g=-t.vx*Math.sin(d)+t.vy*Math.cos(d),m=-1*(t.vx*Math.cos(d)+t.vy*Math.sin(d));t.vx=(-g*Math.sin(d)+m*Math.cos(d))*this.friction,t.vy=(g*Math.cos(d)+m*Math.sin(d))*this.friction}handleColumnCollision(t,e){const i=e.path.pointY-e.height,s=e.path.pointY,a=e.path.pointX-e.width/2,l=e.path.pointX+e.width/2;if(t.x+t.r>a&&t.x-t.r<l&&t.y+t.r>i&&t.y-t.r<s){const u=Math.min(t.x+t.r-a,l-t.x+t.r),f=Math.min(t.y+t.r-i,s-t.y+t.r);u<f?(t.vx=-t.vx*this.friction,t.x<e.path.pointX?t.x=a-t.r:t.x=l+t.r):(t.vy=-t.vy*this.friction,t.y<e.path.pointY?t.y=i-t.r:t.y=s+t.r)}}handleRectCollision(t,e){if(t.x+t.r>e.left&&t.x-t.r<e.right&&t.y+t.r>e.top&&t.y-t.r<e.bottom){const i=Math.min(t.x+t.r-e.left,e.right-t.x+t.r),s=Math.min(t.y+t.r-e.top,e.bottom-t.y+t.r);i<s?(t.vx=-t.vx*this.friction,t.x<(e.left+e.right)/2?t.x=e.left-t.r:t.x=e.right+t.r):(t.vy=-t.vy*this.friction,t.y<(e.top+e.bottom)/2?t.y=e.top-t.r:t.y=e.bottom+t.r)}}update(){this.sort.update(this.columns),this.texts.log.text=this.sort.log.innerText,this.columns.forEach(t=>{t.path!=null&&t.path.__proto__.constructor==Po&&t.path.NextFrame()}),this.sort.secondColumns.forEach((t,e)=>{if(t.path==null)return;if(t.path.__proto__.constructor!=Po)return console.warn("the path of columns[ "+e+" ] was never constructed by Path");t.path.NextFrame()}),this.walls.forEach(t=>{t.period+=.25*2*Math.PI/60,t.x=t.centerX+t.swing*Math.cos(t.period),t.y=t.centerY+t.swing*Math.sin(t.period)}),this.balls.forEach(t=>{t.x=t.x+t.vx/60,t.y=t.y+t.vy/60,t.vx=(t.vx+t.ax/60)*this.slow,t.vy=(t.vy+t.ay/60)*this.slow,this.balls.forEach((e,i)=>{if(t==e)return;const s=this.getDist(t,e);s<t.r+e.r&&this.handleBallCollision(t,e,s)}),this.walls.forEach(e=>{const i=this.isCollide(t,e);i>0&&this.handleWallCollision(t,e,i)}),this.columns.forEach(e=>{this.handleColumnCollision(t,e)}),this.sort.secondColumns.forEach(e=>{this.handleColumnCollision(t,e)}),this.rects.forEach(e=>{this.handleRectCollision(t,e)})})}getRender(t){t.fillStyle="black",t.fillRect(0,0,t.canvas.width,t.canvas.height),this.walls.forEach(i=>{t.beginPath(),t.arc(i.x,i.y,i.length,i.startAngle,i.endAngle,!1),t.strokeStyle="rgba(40, 60, 80, 1)",t.lineWidth=i.thick*2,t.stroke()});function e(i){t.beginPath(),t.moveTo(i.path.pointX,i.path.pointY),t.lineTo(i.path.pointX,i.path.pointY-i.height);const s=i.height/865*2,a=246+s*-51,l=211+s*-51,u=101+s*32;t.strokeStyle="rgba("+a+","+l+","+u+",1)",t.lineWidth=i.width,t.stroke()}this.columns.forEach(i=>{e(i)}),this.sort.secondColumns&&this.sort.secondColumns.forEach(i=>{e(i)}),this.balls.forEach(i=>{t.beginPath(),t.arc(i.x,i.y,i.r,0,2*Math.PI,!1),t.fillStyle="#FFFFFF",t.fill()}),Object.keys(this.texts).forEach(i=>{const s=this.texts[i];t.beginPath(),t.fillStyle="#FFFFFF",t.font=s.fontpx+"px IBM Plex Sans",t.fillText(s.text,s.x,s.y)})}}const AI=function(){return new tv(60),this.setCanvas=(n,t)=>{this.system=new TI(n.width/2,n.height/2),this.system.sort.log=t,this.ctx=n.getContext("2d"),this.ctx.lineCap="butt",this.ctx.textAlign="center"},this.update=()=>{this.system.update()},this.render=()=>{this.system.getRender(this.ctx)},this.start=n=>{console.log(n.target.id);const t=n.target.id;if(!this.system.sort[t]){console.warn("invalid function name. Button id "+t+" is not any of sortFunctions");return}this.system.sort.start(t,this.system.columns)},this.cancel=()=>{this.system.sort.isSorting=!1,this.system.sort.send(name+" is interrupted!")},this.stepByStep=()=>{this.system.sort.isSorting=!0,this.system.sort.isStoping=!0,this.system.sort.send(name+" is proceeding step by step. Click again!")},this.setPath=n=>{const t=n.target.id;bc[t]=n.target.value},this},be=new AI,Xo=n=>(K_("data-v-0437c610"),n=n(),Z_(),n),bI=["width","height"],wI=Xo(()=>Nt("header",null,[Nt("h3",null,"粒子系統")],-1)),CI={id:"pathConfig",class:"parameter"},RI=Xo(()=>Nt("label",null,"linear :",-1)),PI=Xo(()=>Nt("label",null,"easein :",-1)),LI=Xo(()=>Nt("label",null,"easeout :",-1)),II={ref:"controlpanel",class:"controlpanel"},DI=Xo(()=>Nt("label",null,"★",-1)),UI=Xo(()=>Nt("p",null,"碰撞模擬和重力引擎",-1)),NI=[UI],FI={__name:"CanvasSectionS3",props:{myMouse:Object,max:Number,ratio:Number},setup(n,{expose:t}){const e=Be(null);t({section:e});const i=Be(null),s=Be(null),a=Be(null);return es(async()=>{be.setCanvas(a.value,s.value),await kc(),Qi.registerAnimationCallback("updateS3",be.update),Qi.registerAnimationCallback("renderS3",be.render)}),(l,u)=>(tn(),en("section",{ref_key:"section",ref:e,class:"section",id:"S3"},[Nt("canvas",{id:"canvasS3",ref_key:"canvas",ref:a,width:n.max*n.ratio,height:n.ratio*n.max*n.ratio},null,8,bI),Nt("div",{ref_key:"menu",ref:i,class:"gamemenu"},[wI,Nt("div",CI,[RI,Nt("input",{onChange:u[0]||(u[0]=(...f)=>Se(be).setPath&&Se(be).setPath(...f)),type:"number",id:"leapLinear",value:"0"},null,32),PI,Nt("input",{onChange:u[1]||(u[1]=(...f)=>Se(be).setPath&&Se(be).setPath(...f)),type:"number",id:"leapEasein",value:"-2"},null,32),LI,Nt("input",{onChange:u[2]||(u[2]=(...f)=>Se(be).setPath&&Se(be).setPath(...f)),type:"number",id:"leapEaseout",value:"2"},null,32)]),Nt("div",II,[DI,Nt("button",{onClick:u[3]||(u[3]=(...f)=>Se(be).start&&Se(be).start(...f)),id:"bubbleSort"},"泡沫排序"),Nt("button",{onClick:u[4]||(u[4]=(...f)=>Se(be).start&&Se(be).start(...f)),id:"selectionSort"},"選擇排序"),Nt("button",{onClick:u[5]||(u[5]=(...f)=>Se(be).start&&Se(be).start(...f)),id:"insertionSort"},"插入排序"),Nt("button",{onClick:u[6]||(u[6]=(...f)=>Se(be).start&&Se(be).start(...f)),id:"quickSort"},"快速排序"),Nt("button",{onClick:u[7]||(u[7]=(...f)=>Se(be).start&&Se(be).start(...f)),id:"mergeSort"},"合併排序"),Nt("button",{onClick:u[8]||(u[8]=(...f)=>Se(be).start&&Se(be).start(...f)),id:"heapSort"},"堆排序"),Nt("button",{onClick:u[9]||(u[9]=(...f)=>Se(be).start&&Se(be).start(...f)),id:"shellSort"},"希爾排序"),Nt("button",{onClick:u[10]||(u[10]=(...f)=>Se(be).start&&Se(be).start(...f)),id:"countingSort"},"計數排序"),Nt("button",{onClick:u[11]||(u[11]=(...f)=>Se(be).start&&Se(be).start(...f)),id:"randomSort"},"打亂"),Nt("button",{onClick:u[12]||(u[12]=(...f)=>Se(be).start&&Se(be).start(...f)),id:"instantRandomSort"},"立刻打亂"),Nt("button",{onClick:u[13]||(u[13]=(...f)=>Se(be).cancel&&Se(be).cancel(...f)),id:"cancelSort"},"取消"),Nt("button",{onClick:u[14]||(u[14]=(...f)=>Se(be).stepByStep&&Se(be).stepByStep(...f)),id:"stepByStep"},"一步一步來")],512),Nt("div",{ref_key:"log",ref:s,id:"sortLog"},NI,512),Sn(x0,{menu:i.value},null,8,["menu"])],512)],512))}},OI=Bs(FI,[["__scopeId","data-v-0437c610"]]),BI={class:"pagination"},zI={class:"pagDescription"},HI=["disabled"],GI=["disabled"],VI=["disabled"],kI=["disabled"],WI={__name:"Pagination",props:{activePage:Number,count:Number,rowsPerPage:Number,totalPages:Number},emits:["update:activePage"],setup(n,{emit:t}){const e=n;Be({}),Be({order:"asc",orderBy:"id"}),Be("");const i=yi(()=>e.activePage===1?1:e.rowsPerPage*(e.activePage-1)+1),s=yi(()=>e.activePage===e.totalPages?e.count:i.value+e.rowsPerPage-1),a=yi(()=>e.activePage===1),l=yi(()=>e.activePage===e.totalPages),u=t,f=h=>{u("update:activePage",h),console.log(e.rowsPerPage,e.activePage)};return(h,d)=>(tn(),en("div",BI,[Nt("div",zI,[Nt("p",null,"Page "+$n(n.activePage)+" of "+$n(n.totalPages),1),Nt("p",null,"Rows: "+$n(i.value===s.value?s.value:i.value+"-"+s.value)+" of "+$n(n.count),1)]),Nt("button",{class:"button",disabled:a.value,style:vr({opacity:a.value?.2:1}),onClick:d[0]||(d[0]=g=>f(1))},"🢀🢀 First",12,HI),Nt("button",{class:"button",disabled:a.value,style:vr({opacity:a.value?.2:1}),onClick:d[1]||(d[1]=g=>f(n.activePage-1))},"🢀 Previous",12,GI),Nt("button",{class:"button",disabled:l.value,style:vr({opacity:l.value?.2:1}),onClick:d[2]||(d[2]=g=>f(n.activePage+1))},"Next 🢂",12,VI),Nt("button",{class:"button",disabled:l.value,style:vr({opacity:l.value?.2:1}),onClick:d[3]||(d[3]=g=>f(n.totalPages))},"Last 🢂🢂",12,kI)]))}},XI=Bs(WI,[["__scopeId","data-v-ef339997"]]);var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qI(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Nc={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Nc.exports;(function(n,t){(function(){var e,i="4.17.21",s=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",h=500,d="__lodash_placeholder__",g=1,m=2,x=4,M=1,E=2,v=1,_=2,P=4,A=8,I=16,$=32,F=64,B=128,j=256,L=512,R=30,G="...",ft=800,ot=16,vt=1,Mt=2,ct=3,at=1/0,Q=9007199254740991,Pt=17976931348623157e292,Ot=NaN,Lt=4294967295,ie=Lt-1,ye=Lt>>>1,ht=[["ary",B],["bind",v],["bindKey",_],["curry",A],["curryRight",I],["flip",L],["partial",$],["partialRight",F],["rearg",j]],At="[object Arguments]",zt="[object Array]",Ht="[object AsyncFunction]",Kt="[object Boolean]",re="[object Date]",oe="[object DOMException]",Le="[object Error]",z="[object Function]",D="[object GeneratorFunction]",O="[object Map]",J="[object Number]",tt="[object Null]",lt="[object Object]",st="[object Promise]",dt="[object Proxy]",w="[object RegExp]",S="[object Set]",N="[object String]",K="[object Symbol]",et="[object Undefined]",Z="[object WeakMap]",Tt="[object WeakSet]",pt="[object ArrayBuffer]",Et="[object DataView]",It="[object Float32Array]",St="[object Float64Array]",Rt="[object Int8Array]",se="[object Int16Array]",Yt="[object Int32Array]",Bt="[object Uint8Array]",Jt="[object Uint8ClampedArray]",qt="[object Uint16Array]",ge="[object Uint32Array]",V=/\b__p \+= '';/g,bt=/\b(__p \+=) '' \+/g,_t=/(__e\(.*?\)|\b__t\)) \+\n'';/g,xt=/&(?:amp|lt|gt|quot|#39);/g,Ct=/[&<>"']/g,te=RegExp(xt.source),xe=RegExp(Ct.source),Ze=/<%-([\s\S]+?)%>/g,on=/<%([\s\S]+?)%>/g,Ee=/<%=([\s\S]+?)%>/g,Ai=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fi=/^\w*$/,Ga=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,bi=/[\\^$.*+?()[\]{}|]/g,qo=RegExp(bi.source),zs=/^\s+/,Va=/\s/,Hs=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ka=/\{\n\/\* \[wrapped with (.+)\] \*/,Gs=/,? & /,Wa=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Xa=/[()=,{}\[\]\/\s]/,Qc=/\\(\\)?/g,tu=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,qa=/\w*$/,C=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,nt=/^\[object .+?Constructor\]$/,it=/^0o[0-7]+$/i,Y=/^(?:0|[1-9]\d*)$/,wt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ft=/($^)/,kt=/['\n\r\u2028\u2029\\]/g,Vt="\\ud800-\\udfff",ee="\\u0300-\\u036f",ne="\\ufe20-\\ufe2f",$t="\\u20d0-\\u20ff",Te=ee+ne+$t,Ge="\\u2700-\\u27bf",Ve="a-z\\xdf-\\xf6\\xf8-\\xff",Cn="\\xac\\xb1\\xd7\\xf7",Ce="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Xt="\\u2000-\\u206f",an=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ae="A-Z\\xc0-\\xd6\\xd8-\\xde",Bn="\\ufe0e\\ufe0f",tr=Cn+Ce+Xt+an,vn="['’]",Yo="["+Vt+"]",qe="["+tr+"]",ei="["+Te+"]",Vs="\\d+",zn="["+Ge+"]",ks="["+Ve+"]",Ya="[^"+Vt+tr+Vs+Ge+Ve+Ae+"]",Ws="\\ud83c[\\udffb-\\udfff]",ev="(?:"+ei+"|"+Ws+")",yd="[^"+Vt+"]",eu="(?:\\ud83c[\\udde6-\\uddff]){2}",nu="[\\ud800-\\udbff][\\udc00-\\udfff]",Xs="["+Ae+"]",Ed="\\u200d",Td="(?:"+ks+"|"+Ya+")",nv="(?:"+Xs+"|"+Ya+")",Ad="(?:"+vn+"(?:d|ll|m|re|s|t|ve))?",bd="(?:"+vn+"(?:D|LL|M|RE|S|T|VE))?",wd=ev+"?",Cd="["+Bn+"]?",iv="(?:"+Ed+"(?:"+[yd,eu,nu].join("|")+")"+Cd+wd+")*",rv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",sv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Rd=Cd+wd+iv,ov="(?:"+[zn,eu,nu].join("|")+")"+Rd,av="(?:"+[yd+ei+"?",ei,eu,nu,Yo].join("|")+")",lv=RegExp(vn,"g"),cv=RegExp(ei,"g"),iu=RegExp(Ws+"(?="+Ws+")|"+av+Rd,"g"),uv=RegExp([Xs+"?"+ks+"+"+Ad+"(?="+[qe,Xs,"$"].join("|")+")",nv+"+"+bd+"(?="+[qe,Xs+Td,"$"].join("|")+")",Xs+"?"+Td+"+"+Ad,Xs+"+"+bd,sv,rv,Vs,ov].join("|"),"g"),fv=RegExp("["+Ed+Vt+Te+Bn+"]"),hv=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,dv=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],pv=-1,ke={};ke[It]=ke[St]=ke[Rt]=ke[se]=ke[Yt]=ke[Bt]=ke[Jt]=ke[qt]=ke[ge]=!0,ke[At]=ke[zt]=ke[pt]=ke[Kt]=ke[Et]=ke[re]=ke[Le]=ke[z]=ke[O]=ke[J]=ke[lt]=ke[w]=ke[S]=ke[N]=ke[Z]=!1;var He={};He[At]=He[zt]=He[pt]=He[Et]=He[Kt]=He[re]=He[It]=He[St]=He[Rt]=He[se]=He[Yt]=He[O]=He[J]=He[lt]=He[w]=He[S]=He[N]=He[K]=He[Bt]=He[Jt]=He[qt]=He[ge]=!0,He[Le]=He[z]=He[Z]=!1;var mv={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},gv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},_v={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},vv={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},xv=parseFloat,Mv=parseInt,Pd=typeof _a=="object"&&_a&&_a.Object===Object&&_a,Sv=typeof self=="object"&&self&&self.Object===Object&&self,xn=Pd||Sv||Function("return this")(),ru=t&&!t.nodeType&&t,is=ru&&!0&&n&&!n.nodeType&&n,Ld=is&&is.exports===ru,su=Ld&&Pd.process,hi=function(){try{var k=is&&is.require&&is.require("util").types;return k||su&&su.binding&&su.binding("util")}catch{}}(),Id=hi&&hi.isArrayBuffer,Dd=hi&&hi.isDate,Ud=hi&&hi.isMap,Nd=hi&&hi.isRegExp,Fd=hi&&hi.isSet,Od=hi&&hi.isTypedArray;function ni(k,ut,rt){switch(rt.length){case 0:return k.call(ut);case 1:return k.call(ut,rt[0]);case 2:return k.call(ut,rt[0],rt[1]);case 3:return k.call(ut,rt[0],rt[1],rt[2])}return k.apply(ut,rt)}function yv(k,ut,rt,Gt){for(var ae=-1,Re=k==null?0:k.length;++ae<Re;){var ln=k[ae];ut(Gt,ln,rt(ln),k)}return Gt}function di(k,ut){for(var rt=-1,Gt=k==null?0:k.length;++rt<Gt&&ut(k[rt],rt,k)!==!1;);return k}function Ev(k,ut){for(var rt=k==null?0:k.length;rt--&&ut(k[rt],rt,k)!==!1;);return k}function Bd(k,ut){for(var rt=-1,Gt=k==null?0:k.length;++rt<Gt;)if(!ut(k[rt],rt,k))return!1;return!0}function Ar(k,ut){for(var rt=-1,Gt=k==null?0:k.length,ae=0,Re=[];++rt<Gt;){var ln=k[rt];ut(ln,rt,k)&&(Re[ae++]=ln)}return Re}function $a(k,ut){var rt=k==null?0:k.length;return!!rt&&qs(k,ut,0)>-1}function ou(k,ut,rt){for(var Gt=-1,ae=k==null?0:k.length;++Gt<ae;)if(rt(ut,k[Gt]))return!0;return!1}function Xe(k,ut){for(var rt=-1,Gt=k==null?0:k.length,ae=Array(Gt);++rt<Gt;)ae[rt]=ut(k[rt],rt,k);return ae}function br(k,ut){for(var rt=-1,Gt=ut.length,ae=k.length;++rt<Gt;)k[ae+rt]=ut[rt];return k}function au(k,ut,rt,Gt){var ae=-1,Re=k==null?0:k.length;for(Gt&&Re&&(rt=k[++ae]);++ae<Re;)rt=ut(rt,k[ae],ae,k);return rt}function Tv(k,ut,rt,Gt){var ae=k==null?0:k.length;for(Gt&&ae&&(rt=k[--ae]);ae--;)rt=ut(rt,k[ae],ae,k);return rt}function lu(k,ut){for(var rt=-1,Gt=k==null?0:k.length;++rt<Gt;)if(ut(k[rt],rt,k))return!0;return!1}var Av=cu("length");function bv(k){return k.split("")}function wv(k){return k.match(Wa)||[]}function zd(k,ut,rt){var Gt;return rt(k,function(ae,Re,ln){if(ut(ae,Re,ln))return Gt=Re,!1}),Gt}function Ka(k,ut,rt,Gt){for(var ae=k.length,Re=rt+(Gt?1:-1);Gt?Re--:++Re<ae;)if(ut(k[Re],Re,k))return Re;return-1}function qs(k,ut,rt){return ut===ut?zv(k,ut,rt):Ka(k,Hd,rt)}function Cv(k,ut,rt,Gt){for(var ae=rt-1,Re=k.length;++ae<Re;)if(Gt(k[ae],ut))return ae;return-1}function Hd(k){return k!==k}function Gd(k,ut){var rt=k==null?0:k.length;return rt?fu(k,ut)/rt:Ot}function cu(k){return function(ut){return ut==null?e:ut[k]}}function uu(k){return function(ut){return k==null?e:k[ut]}}function Vd(k,ut,rt,Gt,ae){return ae(k,function(Re,ln,ze){rt=Gt?(Gt=!1,Re):ut(rt,Re,ln,ze)}),rt}function Rv(k,ut){var rt=k.length;for(k.sort(ut);rt--;)k[rt]=k[rt].value;return k}function fu(k,ut){for(var rt,Gt=-1,ae=k.length;++Gt<ae;){var Re=ut(k[Gt]);Re!==e&&(rt=rt===e?Re:rt+Re)}return rt}function hu(k,ut){for(var rt=-1,Gt=Array(k);++rt<k;)Gt[rt]=ut(rt);return Gt}function Pv(k,ut){return Xe(ut,function(rt){return[rt,k[rt]]})}function kd(k){return k&&k.slice(0,Yd(k)+1).replace(zs,"")}function ii(k){return function(ut){return k(ut)}}function du(k,ut){return Xe(ut,function(rt){return k[rt]})}function $o(k,ut){return k.has(ut)}function Wd(k,ut){for(var rt=-1,Gt=k.length;++rt<Gt&&qs(ut,k[rt],0)>-1;);return rt}function Xd(k,ut){for(var rt=k.length;rt--&&qs(ut,k[rt],0)>-1;);return rt}function Lv(k,ut){for(var rt=k.length,Gt=0;rt--;)k[rt]===ut&&++Gt;return Gt}var Iv=uu(mv),Dv=uu(gv);function Uv(k){return"\\"+vv[k]}function Nv(k,ut){return k==null?e:k[ut]}function Ys(k){return fv.test(k)}function Fv(k){return hv.test(k)}function Ov(k){for(var ut,rt=[];!(ut=k.next()).done;)rt.push(ut.value);return rt}function pu(k){var ut=-1,rt=Array(k.size);return k.forEach(function(Gt,ae){rt[++ut]=[ae,Gt]}),rt}function qd(k,ut){return function(rt){return k(ut(rt))}}function wr(k,ut){for(var rt=-1,Gt=k.length,ae=0,Re=[];++rt<Gt;){var ln=k[rt];(ln===ut||ln===d)&&(k[rt]=d,Re[ae++]=rt)}return Re}function Za(k){var ut=-1,rt=Array(k.size);return k.forEach(function(Gt){rt[++ut]=Gt}),rt}function Bv(k){var ut=-1,rt=Array(k.size);return k.forEach(function(Gt){rt[++ut]=[Gt,Gt]}),rt}function zv(k,ut,rt){for(var Gt=rt-1,ae=k.length;++Gt<ae;)if(k[Gt]===ut)return Gt;return-1}function Hv(k,ut,rt){for(var Gt=rt+1;Gt--;)if(k[Gt]===ut)return Gt;return Gt}function $s(k){return Ys(k)?Vv(k):Av(k)}function wi(k){return Ys(k)?kv(k):bv(k)}function Yd(k){for(var ut=k.length;ut--&&Va.test(k.charAt(ut)););return ut}var Gv=uu(_v);function Vv(k){for(var ut=iu.lastIndex=0;iu.test(k);)++ut;return ut}function kv(k){return k.match(iu)||[]}function Wv(k){return k.match(uv)||[]}var Xv=function k(ut){ut=ut==null?xn:Ks.defaults(xn.Object(),ut,Ks.pick(xn,dv));var rt=ut.Array,Gt=ut.Date,ae=ut.Error,Re=ut.Function,ln=ut.Math,ze=ut.Object,mu=ut.RegExp,qv=ut.String,pi=ut.TypeError,Ja=rt.prototype,Yv=Re.prototype,Zs=ze.prototype,ja=ut["__core-js_shared__"],Qa=Yv.toString,Oe=Zs.hasOwnProperty,$v=0,$d=function(){var r=/[^.]+$/.exec(ja&&ja.keys&&ja.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),tl=Zs.toString,Kv=Qa.call(ze),Zv=xn._,Jv=mu("^"+Qa.call(Oe).replace(bi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),el=Ld?ut.Buffer:e,Cr=ut.Symbol,nl=ut.Uint8Array,Kd=el?el.allocUnsafe:e,il=qd(ze.getPrototypeOf,ze),Zd=ze.create,Jd=Zs.propertyIsEnumerable,rl=Ja.splice,jd=Cr?Cr.isConcatSpreadable:e,Ko=Cr?Cr.iterator:e,rs=Cr?Cr.toStringTag:e,sl=function(){try{var r=cs(ze,"defineProperty");return r({},"",{}),r}catch{}}(),jv=ut.clearTimeout!==xn.clearTimeout&&ut.clearTimeout,Qv=Gt&&Gt.now!==xn.Date.now&&Gt.now,tx=ut.setTimeout!==xn.setTimeout&&ut.setTimeout,ol=ln.ceil,al=ln.floor,gu=ze.getOwnPropertySymbols,ex=el?el.isBuffer:e,Qd=ut.isFinite,nx=Ja.join,ix=qd(ze.keys,ze),cn=ln.max,yn=ln.min,rx=Gt.now,sx=ut.parseInt,tp=ln.random,ox=Ja.reverse,_u=cs(ut,"DataView"),Zo=cs(ut,"Map"),vu=cs(ut,"Promise"),Js=cs(ut,"Set"),Jo=cs(ut,"WeakMap"),jo=cs(ze,"create"),ll=Jo&&new Jo,js={},ax=us(_u),lx=us(Zo),cx=us(vu),ux=us(Js),fx=us(Jo),cl=Cr?Cr.prototype:e,Qo=cl?cl.valueOf:e,ep=cl?cl.toString:e;function T(r){if(Je(r)&&!ce(r)&&!(r instanceof ve)){if(r instanceof mi)return r;if(Oe.call(r,"__wrapped__"))return nm(r)}return new mi(r)}var Qs=function(){function r(){}return function(o){if(!Ye(o))return{};if(Zd)return Zd(o);r.prototype=o;var c=new r;return r.prototype=e,c}}();function ul(){}function mi(r,o){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=e}T.templateSettings={escape:Ze,evaluate:on,interpolate:Ee,variable:"",imports:{_:T}},T.prototype=ul.prototype,T.prototype.constructor=T,mi.prototype=Qs(ul.prototype),mi.prototype.constructor=mi;function ve(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Lt,this.__views__=[]}function hx(){var r=new ve(this.__wrapped__);return r.__actions__=Hn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Hn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Hn(this.__views__),r}function dx(){if(this.__filtered__){var r=new ve(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function px(){var r=this.__wrapped__.value(),o=this.__dir__,c=ce(r),p=o<0,y=c?r.length:0,b=bM(0,y,this.__views__),U=b.start,H=b.end,X=H-U,mt=p?H:U-1,gt=this.__iteratees__,yt=gt.length,Dt=0,Wt=yn(X,this.__takeCount__);if(!c||!p&&y==X&&Wt==X)return Ap(r,this.__actions__);var jt=[];t:for(;X--&&Dt<Wt;){mt+=o;for(var fe=-1,Qt=r[mt];++fe<yt;){var _e=gt[fe],Me=_e.iteratee,oi=_e.type,Ln=Me(Qt);if(oi==Mt)Qt=Ln;else if(!Ln){if(oi==vt)continue t;break t}}jt[Dt++]=Qt}return jt}ve.prototype=Qs(ul.prototype),ve.prototype.constructor=ve;function ss(r){var o=-1,c=r==null?0:r.length;for(this.clear();++o<c;){var p=r[o];this.set(p[0],p[1])}}function mx(){this.__data__=jo?jo(null):{},this.size=0}function gx(r){var o=this.has(r)&&delete this.__data__[r];return this.size-=o?1:0,o}function _x(r){var o=this.__data__;if(jo){var c=o[r];return c===f?e:c}return Oe.call(o,r)?o[r]:e}function vx(r){var o=this.__data__;return jo?o[r]!==e:Oe.call(o,r)}function xx(r,o){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=jo&&o===e?f:o,this}ss.prototype.clear=mx,ss.prototype.delete=gx,ss.prototype.get=_x,ss.prototype.has=vx,ss.prototype.set=xx;function er(r){var o=-1,c=r==null?0:r.length;for(this.clear();++o<c;){var p=r[o];this.set(p[0],p[1])}}function Mx(){this.__data__=[],this.size=0}function Sx(r){var o=this.__data__,c=fl(o,r);if(c<0)return!1;var p=o.length-1;return c==p?o.pop():rl.call(o,c,1),--this.size,!0}function yx(r){var o=this.__data__,c=fl(o,r);return c<0?e:o[c][1]}function Ex(r){return fl(this.__data__,r)>-1}function Tx(r,o){var c=this.__data__,p=fl(c,r);return p<0?(++this.size,c.push([r,o])):c[p][1]=o,this}er.prototype.clear=Mx,er.prototype.delete=Sx,er.prototype.get=yx,er.prototype.has=Ex,er.prototype.set=Tx;function nr(r){var o=-1,c=r==null?0:r.length;for(this.clear();++o<c;){var p=r[o];this.set(p[0],p[1])}}function Ax(){this.size=0,this.__data__={hash:new ss,map:new(Zo||er),string:new ss}}function bx(r){var o=El(this,r).delete(r);return this.size-=o?1:0,o}function wx(r){return El(this,r).get(r)}function Cx(r){return El(this,r).has(r)}function Rx(r,o){var c=El(this,r),p=c.size;return c.set(r,o),this.size+=c.size==p?0:1,this}nr.prototype.clear=Ax,nr.prototype.delete=bx,nr.prototype.get=wx,nr.prototype.has=Cx,nr.prototype.set=Rx;function os(r){var o=-1,c=r==null?0:r.length;for(this.__data__=new nr;++o<c;)this.add(r[o])}function Px(r){return this.__data__.set(r,f),this}function Lx(r){return this.__data__.has(r)}os.prototype.add=os.prototype.push=Px,os.prototype.has=Lx;function Ci(r){var o=this.__data__=new er(r);this.size=o.size}function Ix(){this.__data__=new er,this.size=0}function Dx(r){var o=this.__data__,c=o.delete(r);return this.size=o.size,c}function Ux(r){return this.__data__.get(r)}function Nx(r){return this.__data__.has(r)}function Fx(r,o){var c=this.__data__;if(c instanceof er){var p=c.__data__;if(!Zo||p.length<s-1)return p.push([r,o]),this.size=++c.size,this;c=this.__data__=new nr(p)}return c.set(r,o),this.size=c.size,this}Ci.prototype.clear=Ix,Ci.prototype.delete=Dx,Ci.prototype.get=Ux,Ci.prototype.has=Nx,Ci.prototype.set=Fx;function np(r,o){var c=ce(r),p=!c&&fs(r),y=!c&&!p&&Dr(r),b=!c&&!p&&!y&&io(r),U=c||p||y||b,H=U?hu(r.length,qv):[],X=H.length;for(var mt in r)(o||Oe.call(r,mt))&&!(U&&(mt=="length"||y&&(mt=="offset"||mt=="parent")||b&&(mt=="buffer"||mt=="byteLength"||mt=="byteOffset")||or(mt,X)))&&H.push(mt);return H}function ip(r){var o=r.length;return o?r[Ru(0,o-1)]:e}function Ox(r,o){return Tl(Hn(r),as(o,0,r.length))}function Bx(r){return Tl(Hn(r))}function xu(r,o,c){(c!==e&&!Ri(r[o],c)||c===e&&!(o in r))&&ir(r,o,c)}function ta(r,o,c){var p=r[o];(!(Oe.call(r,o)&&Ri(p,c))||c===e&&!(o in r))&&ir(r,o,c)}function fl(r,o){for(var c=r.length;c--;)if(Ri(r[c][0],o))return c;return-1}function zx(r,o,c,p){return Rr(r,function(y,b,U){o(p,y,c(y),U)}),p}function rp(r,o){return r&&Hi(o,mn(o),r)}function Hx(r,o){return r&&Hi(o,Vn(o),r)}function ir(r,o,c){o=="__proto__"&&sl?sl(r,o,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[o]=c}function Mu(r,o){for(var c=-1,p=o.length,y=rt(p),b=r==null;++c<p;)y[c]=b?e:tf(r,o[c]);return y}function as(r,o,c){return r===r&&(c!==e&&(r=r<=c?r:c),o!==e&&(r=r>=o?r:o)),r}function gi(r,o,c,p,y,b){var U,H=o&g,X=o&m,mt=o&x;if(c&&(U=y?c(r,p,y,b):c(r)),U!==e)return U;if(!Ye(r))return r;var gt=ce(r);if(gt){if(U=CM(r),!H)return Hn(r,U)}else{var yt=En(r),Dt=yt==z||yt==D;if(Dr(r))return Cp(r,H);if(yt==lt||yt==At||Dt&&!y){if(U=X||Dt?{}:Yp(r),!H)return X?_M(r,Hx(U,r)):gM(r,rp(U,r))}else{if(!He[yt])return y?r:{};U=RM(r,yt,H)}}b||(b=new Ci);var Wt=b.get(r);if(Wt)return Wt;b.set(r,U),ym(r)?r.forEach(function(Qt){U.add(gi(Qt,o,c,Qt,r,b))}):Mm(r)&&r.forEach(function(Qt,_e){U.set(_e,gi(Qt,o,c,_e,r,b))});var jt=mt?X?Hu:zu:X?Vn:mn,fe=gt?e:jt(r);return di(fe||r,function(Qt,_e){fe&&(_e=Qt,Qt=r[_e]),ta(U,_e,gi(Qt,o,c,_e,r,b))}),U}function Gx(r){var o=mn(r);return function(c){return sp(c,r,o)}}function sp(r,o,c){var p=c.length;if(r==null)return!p;for(r=ze(r);p--;){var y=c[p],b=o[y],U=r[y];if(U===e&&!(y in r)||!b(U))return!1}return!0}function op(r,o,c){if(typeof r!="function")throw new pi(l);return aa(function(){r.apply(e,c)},o)}function ea(r,o,c,p){var y=-1,b=$a,U=!0,H=r.length,X=[],mt=o.length;if(!H)return X;c&&(o=Xe(o,ii(c))),p?(b=ou,U=!1):o.length>=s&&(b=$o,U=!1,o=new os(o));t:for(;++y<H;){var gt=r[y],yt=c==null?gt:c(gt);if(gt=p||gt!==0?gt:0,U&&yt===yt){for(var Dt=mt;Dt--;)if(o[Dt]===yt)continue t;X.push(gt)}else b(o,yt,p)||X.push(gt)}return X}var Rr=Dp(zi),ap=Dp(yu,!0);function Vx(r,o){var c=!0;return Rr(r,function(p,y,b){return c=!!o(p,y,b),c}),c}function hl(r,o,c){for(var p=-1,y=r.length;++p<y;){var b=r[p],U=o(b);if(U!=null&&(H===e?U===U&&!si(U):c(U,H)))var H=U,X=b}return X}function kx(r,o,c,p){var y=r.length;for(c=ue(c),c<0&&(c=-c>y?0:y+c),p=p===e||p>y?y:ue(p),p<0&&(p+=y),p=c>p?0:Tm(p);c<p;)r[c++]=o;return r}function lp(r,o){var c=[];return Rr(r,function(p,y,b){o(p,y,b)&&c.push(p)}),c}function Mn(r,o,c,p,y){var b=-1,U=r.length;for(c||(c=LM),y||(y=[]);++b<U;){var H=r[b];o>0&&c(H)?o>1?Mn(H,o-1,c,p,y):br(y,H):p||(y[y.length]=H)}return y}var Su=Up(),cp=Up(!0);function zi(r,o){return r&&Su(r,o,mn)}function yu(r,o){return r&&cp(r,o,mn)}function dl(r,o){return Ar(o,function(c){return ar(r[c])})}function ls(r,o){o=Lr(o,r);for(var c=0,p=o.length;r!=null&&c<p;)r=r[Gi(o[c++])];return c&&c==p?r:e}function up(r,o,c){var p=o(r);return ce(r)?p:br(p,c(r))}function Rn(r){return r==null?r===e?et:tt:rs&&rs in ze(r)?AM(r):BM(r)}function Eu(r,o){return r>o}function Wx(r,o){return r!=null&&Oe.call(r,o)}function Xx(r,o){return r!=null&&o in ze(r)}function qx(r,o,c){return r>=yn(o,c)&&r<cn(o,c)}function Tu(r,o,c){for(var p=c?ou:$a,y=r[0].length,b=r.length,U=b,H=rt(b),X=1/0,mt=[];U--;){var gt=r[U];U&&o&&(gt=Xe(gt,ii(o))),X=yn(gt.length,X),H[U]=!c&&(o||y>=120&&gt.length>=120)?new os(U&&gt):e}gt=r[0];var yt=-1,Dt=H[0];t:for(;++yt<y&&mt.length<X;){var Wt=gt[yt],jt=o?o(Wt):Wt;if(Wt=c||Wt!==0?Wt:0,!(Dt?$o(Dt,jt):p(mt,jt,c))){for(U=b;--U;){var fe=H[U];if(!(fe?$o(fe,jt):p(r[U],jt,c)))continue t}Dt&&Dt.push(jt),mt.push(Wt)}}return mt}function Yx(r,o,c,p){return zi(r,function(y,b,U){o(p,c(y),b,U)}),p}function na(r,o,c){o=Lr(o,r),r=Jp(r,o);var p=r==null?r:r[Gi(vi(o))];return p==null?e:ni(p,r,c)}function fp(r){return Je(r)&&Rn(r)==At}function $x(r){return Je(r)&&Rn(r)==pt}function Kx(r){return Je(r)&&Rn(r)==re}function ia(r,o,c,p,y){return r===o?!0:r==null||o==null||!Je(r)&&!Je(o)?r!==r&&o!==o:Zx(r,o,c,p,ia,y)}function Zx(r,o,c,p,y,b){var U=ce(r),H=ce(o),X=U?zt:En(r),mt=H?zt:En(o);X=X==At?lt:X,mt=mt==At?lt:mt;var gt=X==lt,yt=mt==lt,Dt=X==mt;if(Dt&&Dr(r)){if(!Dr(o))return!1;U=!0,gt=!1}if(Dt&&!gt)return b||(b=new Ci),U||io(r)?Wp(r,o,c,p,y,b):EM(r,o,X,c,p,y,b);if(!(c&M)){var Wt=gt&&Oe.call(r,"__wrapped__"),jt=yt&&Oe.call(o,"__wrapped__");if(Wt||jt){var fe=Wt?r.value():r,Qt=jt?o.value():o;return b||(b=new Ci),y(fe,Qt,c,p,b)}}return Dt?(b||(b=new Ci),TM(r,o,c,p,y,b)):!1}function Jx(r){return Je(r)&&En(r)==O}function Au(r,o,c,p){var y=c.length,b=y,U=!p;if(r==null)return!b;for(r=ze(r);y--;){var H=c[y];if(U&&H[2]?H[1]!==r[H[0]]:!(H[0]in r))return!1}for(;++y<b;){H=c[y];var X=H[0],mt=r[X],gt=H[1];if(U&&H[2]){if(mt===e&&!(X in r))return!1}else{var yt=new Ci;if(p)var Dt=p(mt,gt,X,r,o,yt);if(!(Dt===e?ia(gt,mt,M|E,p,yt):Dt))return!1}}return!0}function hp(r){if(!Ye(r)||DM(r))return!1;var o=ar(r)?Jv:nt;return o.test(us(r))}function jx(r){return Je(r)&&Rn(r)==w}function Qx(r){return Je(r)&&En(r)==S}function tM(r){return Je(r)&&Pl(r.length)&&!!ke[Rn(r)]}function dp(r){return typeof r=="function"?r:r==null?kn:typeof r=="object"?ce(r)?gp(r[0],r[1]):mp(r):Nm(r)}function bu(r){if(!oa(r))return ix(r);var o=[];for(var c in ze(r))Oe.call(r,c)&&c!="constructor"&&o.push(c);return o}function eM(r){if(!Ye(r))return OM(r);var o=oa(r),c=[];for(var p in r)p=="constructor"&&(o||!Oe.call(r,p))||c.push(p);return c}function wu(r,o){return r<o}function pp(r,o){var c=-1,p=Gn(r)?rt(r.length):[];return Rr(r,function(y,b,U){p[++c]=o(y,b,U)}),p}function mp(r){var o=Vu(r);return o.length==1&&o[0][2]?Kp(o[0][0],o[0][1]):function(c){return c===r||Au(c,r,o)}}function gp(r,o){return Wu(r)&&$p(o)?Kp(Gi(r),o):function(c){var p=tf(c,r);return p===e&&p===o?ef(c,r):ia(o,p,M|E)}}function pl(r,o,c,p,y){r!==o&&Su(o,function(b,U){if(y||(y=new Ci),Ye(b))nM(r,o,U,c,pl,p,y);else{var H=p?p(qu(r,U),b,U+"",r,o,y):e;H===e&&(H=b),xu(r,U,H)}},Vn)}function nM(r,o,c,p,y,b,U){var H=qu(r,c),X=qu(o,c),mt=U.get(X);if(mt){xu(r,c,mt);return}var gt=b?b(H,X,c+"",r,o,U):e,yt=gt===e;if(yt){var Dt=ce(X),Wt=!Dt&&Dr(X),jt=!Dt&&!Wt&&io(X);gt=X,Dt||Wt||jt?ce(H)?gt=H:je(H)?gt=Hn(H):Wt?(yt=!1,gt=Cp(X,!0)):jt?(yt=!1,gt=Rp(X,!0)):gt=[]:la(X)||fs(X)?(gt=H,fs(H)?gt=Am(H):(!Ye(H)||ar(H))&&(gt=Yp(X))):yt=!1}yt&&(U.set(X,gt),y(gt,X,p,b,U),U.delete(X)),xu(r,c,gt)}function _p(r,o){var c=r.length;if(c)return o+=o<0?c:0,or(o,c)?r[o]:e}function vp(r,o,c){o.length?o=Xe(o,function(b){return ce(b)?function(U){return ls(U,b.length===1?b[0]:b)}:b}):o=[kn];var p=-1;o=Xe(o,ii(Zt()));var y=pp(r,function(b,U,H){var X=Xe(o,function(mt){return mt(b)});return{criteria:X,index:++p,value:b}});return Rv(y,function(b,U){return mM(b,U,c)})}function iM(r,o){return xp(r,o,function(c,p){return ef(r,p)})}function xp(r,o,c){for(var p=-1,y=o.length,b={};++p<y;){var U=o[p],H=ls(r,U);c(H,U)&&ra(b,Lr(U,r),H)}return b}function rM(r){return function(o){return ls(o,r)}}function Cu(r,o,c,p){var y=p?Cv:qs,b=-1,U=o.length,H=r;for(r===o&&(o=Hn(o)),c&&(H=Xe(r,ii(c)));++b<U;)for(var X=0,mt=o[b],gt=c?c(mt):mt;(X=y(H,gt,X,p))>-1;)H!==r&&rl.call(H,X,1),rl.call(r,X,1);return r}function Mp(r,o){for(var c=r?o.length:0,p=c-1;c--;){var y=o[c];if(c==p||y!==b){var b=y;or(y)?rl.call(r,y,1):Iu(r,y)}}return r}function Ru(r,o){return r+al(tp()*(o-r+1))}function sM(r,o,c,p){for(var y=-1,b=cn(ol((o-r)/(c||1)),0),U=rt(b);b--;)U[p?b:++y]=r,r+=c;return U}function Pu(r,o){var c="";if(!r||o<1||o>Q)return c;do o%2&&(c+=r),o=al(o/2),o&&(r+=r);while(o);return c}function me(r,o){return Yu(Zp(r,o,kn),r+"")}function oM(r){return ip(ro(r))}function aM(r,o){var c=ro(r);return Tl(c,as(o,0,c.length))}function ra(r,o,c,p){if(!Ye(r))return r;o=Lr(o,r);for(var y=-1,b=o.length,U=b-1,H=r;H!=null&&++y<b;){var X=Gi(o[y]),mt=c;if(X==="__proto__"||X==="constructor"||X==="prototype")return r;if(y!=U){var gt=H[X];mt=p?p(gt,X,H):e,mt===e&&(mt=Ye(gt)?gt:or(o[y+1])?[]:{})}ta(H,X,mt),H=H[X]}return r}var Sp=ll?function(r,o){return ll.set(r,o),r}:kn,lM=sl?function(r,o){return sl(r,"toString",{configurable:!0,enumerable:!1,value:rf(o),writable:!0})}:kn;function cM(r){return Tl(ro(r))}function _i(r,o,c){var p=-1,y=r.length;o<0&&(o=-o>y?0:y+o),c=c>y?y:c,c<0&&(c+=y),y=o>c?0:c-o>>>0,o>>>=0;for(var b=rt(y);++p<y;)b[p]=r[p+o];return b}function uM(r,o){var c;return Rr(r,function(p,y,b){return c=o(p,y,b),!c}),!!c}function ml(r,o,c){var p=0,y=r==null?p:r.length;if(typeof o=="number"&&o===o&&y<=ye){for(;p<y;){var b=p+y>>>1,U=r[b];U!==null&&!si(U)&&(c?U<=o:U<o)?p=b+1:y=b}return y}return Lu(r,o,kn,c)}function Lu(r,o,c,p){var y=0,b=r==null?0:r.length;if(b===0)return 0;o=c(o);for(var U=o!==o,H=o===null,X=si(o),mt=o===e;y<b;){var gt=al((y+b)/2),yt=c(r[gt]),Dt=yt!==e,Wt=yt===null,jt=yt===yt,fe=si(yt);if(U)var Qt=p||jt;else mt?Qt=jt&&(p||Dt):H?Qt=jt&&Dt&&(p||!Wt):X?Qt=jt&&Dt&&!Wt&&(p||!fe):Wt||fe?Qt=!1:Qt=p?yt<=o:yt<o;Qt?y=gt+1:b=gt}return yn(b,ie)}function yp(r,o){for(var c=-1,p=r.length,y=0,b=[];++c<p;){var U=r[c],H=o?o(U):U;if(!c||!Ri(H,X)){var X=H;b[y++]=U===0?0:U}}return b}function Ep(r){return typeof r=="number"?r:si(r)?Ot:+r}function ri(r){if(typeof r=="string")return r;if(ce(r))return Xe(r,ri)+"";if(si(r))return ep?ep.call(r):"";var o=r+"";return o=="0"&&1/r==-at?"-0":o}function Pr(r,o,c){var p=-1,y=$a,b=r.length,U=!0,H=[],X=H;if(c)U=!1,y=ou;else if(b>=s){var mt=o?null:SM(r);if(mt)return Za(mt);U=!1,y=$o,X=new os}else X=o?[]:H;t:for(;++p<b;){var gt=r[p],yt=o?o(gt):gt;if(gt=c||gt!==0?gt:0,U&&yt===yt){for(var Dt=X.length;Dt--;)if(X[Dt]===yt)continue t;o&&X.push(yt),H.push(gt)}else y(X,yt,c)||(X!==H&&X.push(yt),H.push(gt))}return H}function Iu(r,o){return o=Lr(o,r),r=Jp(r,o),r==null||delete r[Gi(vi(o))]}function Tp(r,o,c,p){return ra(r,o,c(ls(r,o)),p)}function gl(r,o,c,p){for(var y=r.length,b=p?y:-1;(p?b--:++b<y)&&o(r[b],b,r););return c?_i(r,p?0:b,p?b+1:y):_i(r,p?b+1:0,p?y:b)}function Ap(r,o){var c=r;return c instanceof ve&&(c=c.value()),au(o,function(p,y){return y.func.apply(y.thisArg,br([p],y.args))},c)}function Du(r,o,c){var p=r.length;if(p<2)return p?Pr(r[0]):[];for(var y=-1,b=rt(p);++y<p;)for(var U=r[y],H=-1;++H<p;)H!=y&&(b[y]=ea(b[y]||U,r[H],o,c));return Pr(Mn(b,1),o,c)}function bp(r,o,c){for(var p=-1,y=r.length,b=o.length,U={};++p<y;){var H=p<b?o[p]:e;c(U,r[p],H)}return U}function Uu(r){return je(r)?r:[]}function Nu(r){return typeof r=="function"?r:kn}function Lr(r,o){return ce(r)?r:Wu(r,o)?[r]:em(Ie(r))}var fM=me;function Ir(r,o,c){var p=r.length;return c=c===e?p:c,!o&&c>=p?r:_i(r,o,c)}var wp=jv||function(r){return xn.clearTimeout(r)};function Cp(r,o){if(o)return r.slice();var c=r.length,p=Kd?Kd(c):new r.constructor(c);return r.copy(p),p}function Fu(r){var o=new r.constructor(r.byteLength);return new nl(o).set(new nl(r)),o}function hM(r,o){var c=o?Fu(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function dM(r){var o=new r.constructor(r.source,qa.exec(r));return o.lastIndex=r.lastIndex,o}function pM(r){return Qo?ze(Qo.call(r)):{}}function Rp(r,o){var c=o?Fu(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function Pp(r,o){if(r!==o){var c=r!==e,p=r===null,y=r===r,b=si(r),U=o!==e,H=o===null,X=o===o,mt=si(o);if(!H&&!mt&&!b&&r>o||b&&U&&X&&!H&&!mt||p&&U&&X||!c&&X||!y)return 1;if(!p&&!b&&!mt&&r<o||mt&&c&&y&&!p&&!b||H&&c&&y||!U&&y||!X)return-1}return 0}function mM(r,o,c){for(var p=-1,y=r.criteria,b=o.criteria,U=y.length,H=c.length;++p<U;){var X=Pp(y[p],b[p]);if(X){if(p>=H)return X;var mt=c[p];return X*(mt=="desc"?-1:1)}}return r.index-o.index}function Lp(r,o,c,p){for(var y=-1,b=r.length,U=c.length,H=-1,X=o.length,mt=cn(b-U,0),gt=rt(X+mt),yt=!p;++H<X;)gt[H]=o[H];for(;++y<U;)(yt||y<b)&&(gt[c[y]]=r[y]);for(;mt--;)gt[H++]=r[y++];return gt}function Ip(r,o,c,p){for(var y=-1,b=r.length,U=-1,H=c.length,X=-1,mt=o.length,gt=cn(b-H,0),yt=rt(gt+mt),Dt=!p;++y<gt;)yt[y]=r[y];for(var Wt=y;++X<mt;)yt[Wt+X]=o[X];for(;++U<H;)(Dt||y<b)&&(yt[Wt+c[U]]=r[y++]);return yt}function Hn(r,o){var c=-1,p=r.length;for(o||(o=rt(p));++c<p;)o[c]=r[c];return o}function Hi(r,o,c,p){var y=!c;c||(c={});for(var b=-1,U=o.length;++b<U;){var H=o[b],X=p?p(c[H],r[H],H,c,r):e;X===e&&(X=r[H]),y?ir(c,H,X):ta(c,H,X)}return c}function gM(r,o){return Hi(r,ku(r),o)}function _M(r,o){return Hi(r,Xp(r),o)}function _l(r,o){return function(c,p){var y=ce(c)?yv:zx,b=o?o():{};return y(c,r,Zt(p,2),b)}}function to(r){return me(function(o,c){var p=-1,y=c.length,b=y>1?c[y-1]:e,U=y>2?c[2]:e;for(b=r.length>3&&typeof b=="function"?(y--,b):e,U&&Pn(c[0],c[1],U)&&(b=y<3?e:b,y=1),o=ze(o);++p<y;){var H=c[p];H&&r(o,H,p,b)}return o})}function Dp(r,o){return function(c,p){if(c==null)return c;if(!Gn(c))return r(c,p);for(var y=c.length,b=o?y:-1,U=ze(c);(o?b--:++b<y)&&p(U[b],b,U)!==!1;);return c}}function Up(r){return function(o,c,p){for(var y=-1,b=ze(o),U=p(o),H=U.length;H--;){var X=U[r?H:++y];if(c(b[X],X,b)===!1)break}return o}}function vM(r,o,c){var p=o&v,y=sa(r);function b(){var U=this&&this!==xn&&this instanceof b?y:r;return U.apply(p?c:this,arguments)}return b}function Np(r){return function(o){o=Ie(o);var c=Ys(o)?wi(o):e,p=c?c[0]:o.charAt(0),y=c?Ir(c,1).join(""):o.slice(1);return p[r]()+y}}function eo(r){return function(o){return au(Dm(Im(o).replace(lv,"")),r,"")}}function sa(r){return function(){var o=arguments;switch(o.length){case 0:return new r;case 1:return new r(o[0]);case 2:return new r(o[0],o[1]);case 3:return new r(o[0],o[1],o[2]);case 4:return new r(o[0],o[1],o[2],o[3]);case 5:return new r(o[0],o[1],o[2],o[3],o[4]);case 6:return new r(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new r(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var c=Qs(r.prototype),p=r.apply(c,o);return Ye(p)?p:c}}function xM(r,o,c){var p=sa(r);function y(){for(var b=arguments.length,U=rt(b),H=b,X=no(y);H--;)U[H]=arguments[H];var mt=b<3&&U[0]!==X&&U[b-1]!==X?[]:wr(U,X);if(b-=mt.length,b<c)return Hp(r,o,vl,y.placeholder,e,U,mt,e,e,c-b);var gt=this&&this!==xn&&this instanceof y?p:r;return ni(gt,this,U)}return y}function Fp(r){return function(o,c,p){var y=ze(o);if(!Gn(o)){var b=Zt(c,3);o=mn(o),c=function(H){return b(y[H],H,y)}}var U=r(o,c,p);return U>-1?y[b?o[U]:U]:e}}function Op(r){return sr(function(o){var c=o.length,p=c,y=mi.prototype.thru;for(r&&o.reverse();p--;){var b=o[p];if(typeof b!="function")throw new pi(l);if(y&&!U&&yl(b)=="wrapper")var U=new mi([],!0)}for(p=U?p:c;++p<c;){b=o[p];var H=yl(b),X=H=="wrapper"?Gu(b):e;X&&Xu(X[0])&&X[1]==(B|A|$|j)&&!X[4].length&&X[9]==1?U=U[yl(X[0])].apply(U,X[3]):U=b.length==1&&Xu(b)?U[H]():U.thru(b)}return function(){var mt=arguments,gt=mt[0];if(U&&mt.length==1&&ce(gt))return U.plant(gt).value();for(var yt=0,Dt=c?o[yt].apply(this,mt):gt;++yt<c;)Dt=o[yt].call(this,Dt);return Dt}})}function vl(r,o,c,p,y,b,U,H,X,mt){var gt=o&B,yt=o&v,Dt=o&_,Wt=o&(A|I),jt=o&L,fe=Dt?e:sa(r);function Qt(){for(var _e=arguments.length,Me=rt(_e),oi=_e;oi--;)Me[oi]=arguments[oi];if(Wt)var Ln=no(Qt),ai=Lv(Me,Ln);if(p&&(Me=Lp(Me,p,y,Wt)),b&&(Me=Ip(Me,b,U,Wt)),_e-=ai,Wt&&_e<mt){var Qe=wr(Me,Ln);return Hp(r,o,vl,Qt.placeholder,c,Me,Qe,H,X,mt-_e)}var Pi=yt?c:this,cr=Dt?Pi[r]:r;return _e=Me.length,H?Me=zM(Me,H):jt&&_e>1&&Me.reverse(),gt&&X<_e&&(Me.length=X),this&&this!==xn&&this instanceof Qt&&(cr=fe||sa(cr)),cr.apply(Pi,Me)}return Qt}function Bp(r,o){return function(c,p){return Yx(c,r,o(p),{})}}function xl(r,o){return function(c,p){var y;if(c===e&&p===e)return o;if(c!==e&&(y=c),p!==e){if(y===e)return p;typeof c=="string"||typeof p=="string"?(c=ri(c),p=ri(p)):(c=Ep(c),p=Ep(p)),y=r(c,p)}return y}}function Ou(r){return sr(function(o){return o=Xe(o,ii(Zt())),me(function(c){var p=this;return r(o,function(y){return ni(y,p,c)})})})}function Ml(r,o){o=o===e?" ":ri(o);var c=o.length;if(c<2)return c?Pu(o,r):o;var p=Pu(o,ol(r/$s(o)));return Ys(o)?Ir(wi(p),0,r).join(""):p.slice(0,r)}function MM(r,o,c,p){var y=o&v,b=sa(r);function U(){for(var H=-1,X=arguments.length,mt=-1,gt=p.length,yt=rt(gt+X),Dt=this&&this!==xn&&this instanceof U?b:r;++mt<gt;)yt[mt]=p[mt];for(;X--;)yt[mt++]=arguments[++H];return ni(Dt,y?c:this,yt)}return U}function zp(r){return function(o,c,p){return p&&typeof p!="number"&&Pn(o,c,p)&&(c=p=e),o=lr(o),c===e?(c=o,o=0):c=lr(c),p=p===e?o<c?1:-1:lr(p),sM(o,c,p,r)}}function Sl(r){return function(o,c){return typeof o=="string"&&typeof c=="string"||(o=xi(o),c=xi(c)),r(o,c)}}function Hp(r,o,c,p,y,b,U,H,X,mt){var gt=o&A,yt=gt?U:e,Dt=gt?e:U,Wt=gt?b:e,jt=gt?e:b;o|=gt?$:F,o&=~(gt?F:$),o&P||(o&=~(v|_));var fe=[r,o,y,Wt,yt,jt,Dt,H,X,mt],Qt=c.apply(e,fe);return Xu(r)&&jp(Qt,fe),Qt.placeholder=p,Qp(Qt,r,o)}function Bu(r){var o=ln[r];return function(c,p){if(c=xi(c),p=p==null?0:yn(ue(p),292),p&&Qd(c)){var y=(Ie(c)+"e").split("e"),b=o(y[0]+"e"+(+y[1]+p));return y=(Ie(b)+"e").split("e"),+(y[0]+"e"+(+y[1]-p))}return o(c)}}var SM=Js&&1/Za(new Js([,-0]))[1]==at?function(r){return new Js(r)}:af;function Gp(r){return function(o){var c=En(o);return c==O?pu(o):c==S?Bv(o):Pv(o,r(o))}}function rr(r,o,c,p,y,b,U,H){var X=o&_;if(!X&&typeof r!="function")throw new pi(l);var mt=p?p.length:0;if(mt||(o&=~($|F),p=y=e),U=U===e?U:cn(ue(U),0),H=H===e?H:ue(H),mt-=y?y.length:0,o&F){var gt=p,yt=y;p=y=e}var Dt=X?e:Gu(r),Wt=[r,o,c,p,y,gt,yt,b,U,H];if(Dt&&FM(Wt,Dt),r=Wt[0],o=Wt[1],c=Wt[2],p=Wt[3],y=Wt[4],H=Wt[9]=Wt[9]===e?X?0:r.length:cn(Wt[9]-mt,0),!H&&o&(A|I)&&(o&=~(A|I)),!o||o==v)var jt=vM(r,o,c);else o==A||o==I?jt=xM(r,o,H):(o==$||o==(v|$))&&!y.length?jt=MM(r,o,c,p):jt=vl.apply(e,Wt);var fe=Dt?Sp:jp;return Qp(fe(jt,Wt),r,o)}function Vp(r,o,c,p){return r===e||Ri(r,Zs[c])&&!Oe.call(p,c)?o:r}function kp(r,o,c,p,y,b){return Ye(r)&&Ye(o)&&(b.set(o,r),pl(r,o,e,kp,b),b.delete(o)),r}function yM(r){return la(r)?e:r}function Wp(r,o,c,p,y,b){var U=c&M,H=r.length,X=o.length;if(H!=X&&!(U&&X>H))return!1;var mt=b.get(r),gt=b.get(o);if(mt&&gt)return mt==o&&gt==r;var yt=-1,Dt=!0,Wt=c&E?new os:e;for(b.set(r,o),b.set(o,r);++yt<H;){var jt=r[yt],fe=o[yt];if(p)var Qt=U?p(fe,jt,yt,o,r,b):p(jt,fe,yt,r,o,b);if(Qt!==e){if(Qt)continue;Dt=!1;break}if(Wt){if(!lu(o,function(_e,Me){if(!$o(Wt,Me)&&(jt===_e||y(jt,_e,c,p,b)))return Wt.push(Me)})){Dt=!1;break}}else if(!(jt===fe||y(jt,fe,c,p,b))){Dt=!1;break}}return b.delete(r),b.delete(o),Dt}function EM(r,o,c,p,y,b,U){switch(c){case Et:if(r.byteLength!=o.byteLength||r.byteOffset!=o.byteOffset)return!1;r=r.buffer,o=o.buffer;case pt:return!(r.byteLength!=o.byteLength||!b(new nl(r),new nl(o)));case Kt:case re:case J:return Ri(+r,+o);case Le:return r.name==o.name&&r.message==o.message;case w:case N:return r==o+"";case O:var H=pu;case S:var X=p&M;if(H||(H=Za),r.size!=o.size&&!X)return!1;var mt=U.get(r);if(mt)return mt==o;p|=E,U.set(r,o);var gt=Wp(H(r),H(o),p,y,b,U);return U.delete(r),gt;case K:if(Qo)return Qo.call(r)==Qo.call(o)}return!1}function TM(r,o,c,p,y,b){var U=c&M,H=zu(r),X=H.length,mt=zu(o),gt=mt.length;if(X!=gt&&!U)return!1;for(var yt=X;yt--;){var Dt=H[yt];if(!(U?Dt in o:Oe.call(o,Dt)))return!1}var Wt=b.get(r),jt=b.get(o);if(Wt&&jt)return Wt==o&&jt==r;var fe=!0;b.set(r,o),b.set(o,r);for(var Qt=U;++yt<X;){Dt=H[yt];var _e=r[Dt],Me=o[Dt];if(p)var oi=U?p(Me,_e,Dt,o,r,b):p(_e,Me,Dt,r,o,b);if(!(oi===e?_e===Me||y(_e,Me,c,p,b):oi)){fe=!1;break}Qt||(Qt=Dt=="constructor")}if(fe&&!Qt){var Ln=r.constructor,ai=o.constructor;Ln!=ai&&"constructor"in r&&"constructor"in o&&!(typeof Ln=="function"&&Ln instanceof Ln&&typeof ai=="function"&&ai instanceof ai)&&(fe=!1)}return b.delete(r),b.delete(o),fe}function sr(r){return Yu(Zp(r,e,sm),r+"")}function zu(r){return up(r,mn,ku)}function Hu(r){return up(r,Vn,Xp)}var Gu=ll?function(r){return ll.get(r)}:af;function yl(r){for(var o=r.name+"",c=js[o],p=Oe.call(js,o)?c.length:0;p--;){var y=c[p],b=y.func;if(b==null||b==r)return y.name}return o}function no(r){var o=Oe.call(T,"placeholder")?T:r;return o.placeholder}function Zt(){var r=T.iteratee||sf;return r=r===sf?dp:r,arguments.length?r(arguments[0],arguments[1]):r}function El(r,o){var c=r.__data__;return IM(o)?c[typeof o=="string"?"string":"hash"]:c.map}function Vu(r){for(var o=mn(r),c=o.length;c--;){var p=o[c],y=r[p];o[c]=[p,y,$p(y)]}return o}function cs(r,o){var c=Nv(r,o);return hp(c)?c:e}function AM(r){var o=Oe.call(r,rs),c=r[rs];try{r[rs]=e;var p=!0}catch{}var y=tl.call(r);return p&&(o?r[rs]=c:delete r[rs]),y}var ku=gu?function(r){return r==null?[]:(r=ze(r),Ar(gu(r),function(o){return Jd.call(r,o)}))}:lf,Xp=gu?function(r){for(var o=[];r;)br(o,ku(r)),r=il(r);return o}:lf,En=Rn;(_u&&En(new _u(new ArrayBuffer(1)))!=Et||Zo&&En(new Zo)!=O||vu&&En(vu.resolve())!=st||Js&&En(new Js)!=S||Jo&&En(new Jo)!=Z)&&(En=function(r){var o=Rn(r),c=o==lt?r.constructor:e,p=c?us(c):"";if(p)switch(p){case ax:return Et;case lx:return O;case cx:return st;case ux:return S;case fx:return Z}return o});function bM(r,o,c){for(var p=-1,y=c.length;++p<y;){var b=c[p],U=b.size;switch(b.type){case"drop":r+=U;break;case"dropRight":o-=U;break;case"take":o=yn(o,r+U);break;case"takeRight":r=cn(r,o-U);break}}return{start:r,end:o}}function wM(r){var o=r.match(ka);return o?o[1].split(Gs):[]}function qp(r,o,c){o=Lr(o,r);for(var p=-1,y=o.length,b=!1;++p<y;){var U=Gi(o[p]);if(!(b=r!=null&&c(r,U)))break;r=r[U]}return b||++p!=y?b:(y=r==null?0:r.length,!!y&&Pl(y)&&or(U,y)&&(ce(r)||fs(r)))}function CM(r){var o=r.length,c=new r.constructor(o);return o&&typeof r[0]=="string"&&Oe.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Yp(r){return typeof r.constructor=="function"&&!oa(r)?Qs(il(r)):{}}function RM(r,o,c){var p=r.constructor;switch(o){case pt:return Fu(r);case Kt:case re:return new p(+r);case Et:return hM(r,c);case It:case St:case Rt:case se:case Yt:case Bt:case Jt:case qt:case ge:return Rp(r,c);case O:return new p;case J:case N:return new p(r);case w:return dM(r);case S:return new p;case K:return pM(r)}}function PM(r,o){var c=o.length;if(!c)return r;var p=c-1;return o[p]=(c>1?"& ":"")+o[p],o=o.join(c>2?", ":" "),r.replace(Hs,`{
/* [wrapped with `+o+`] */
`)}function LM(r){return ce(r)||fs(r)||!!(jd&&r&&r[jd])}function or(r,o){var c=typeof r;return o=o??Q,!!o&&(c=="number"||c!="symbol"&&Y.test(r))&&r>-1&&r%1==0&&r<o}function Pn(r,o,c){if(!Ye(c))return!1;var p=typeof o;return(p=="number"?Gn(c)&&or(o,c.length):p=="string"&&o in c)?Ri(c[o],r):!1}function Wu(r,o){if(ce(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||si(r)?!0:fi.test(r)||!Ai.test(r)||o!=null&&r in ze(o)}function IM(r){var o=typeof r;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?r!=="__proto__":r===null}function Xu(r){var o=yl(r),c=T[o];if(typeof c!="function"||!(o in ve.prototype))return!1;if(r===c)return!0;var p=Gu(c);return!!p&&r===p[0]}function DM(r){return!!$d&&$d in r}var UM=ja?ar:cf;function oa(r){var o=r&&r.constructor,c=typeof o=="function"&&o.prototype||Zs;return r===c}function $p(r){return r===r&&!Ye(r)}function Kp(r,o){return function(c){return c==null?!1:c[r]===o&&(o!==e||r in ze(c))}}function NM(r){var o=Cl(r,function(p){return c.size===h&&c.clear(),p}),c=o.cache;return o}function FM(r,o){var c=r[1],p=o[1],y=c|p,b=y<(v|_|B),U=p==B&&c==A||p==B&&c==j&&r[7].length<=o[8]||p==(B|j)&&o[7].length<=o[8]&&c==A;if(!(b||U))return r;p&v&&(r[2]=o[2],y|=c&v?0:P);var H=o[3];if(H){var X=r[3];r[3]=X?Lp(X,H,o[4]):H,r[4]=X?wr(r[3],d):o[4]}return H=o[5],H&&(X=r[5],r[5]=X?Ip(X,H,o[6]):H,r[6]=X?wr(r[5],d):o[6]),H=o[7],H&&(r[7]=H),p&B&&(r[8]=r[8]==null?o[8]:yn(r[8],o[8])),r[9]==null&&(r[9]=o[9]),r[0]=o[0],r[1]=y,r}function OM(r){var o=[];if(r!=null)for(var c in ze(r))o.push(c);return o}function BM(r){return tl.call(r)}function Zp(r,o,c){return o=cn(o===e?r.length-1:o,0),function(){for(var p=arguments,y=-1,b=cn(p.length-o,0),U=rt(b);++y<b;)U[y]=p[o+y];y=-1;for(var H=rt(o+1);++y<o;)H[y]=p[y];return H[o]=c(U),ni(r,this,H)}}function Jp(r,o){return o.length<2?r:ls(r,_i(o,0,-1))}function zM(r,o){for(var c=r.length,p=yn(o.length,c),y=Hn(r);p--;){var b=o[p];r[p]=or(b,c)?y[b]:e}return r}function qu(r,o){if(!(o==="constructor"&&typeof r[o]=="function")&&o!="__proto__")return r[o]}var jp=tm(Sp),aa=tx||function(r,o){return xn.setTimeout(r,o)},Yu=tm(lM);function Qp(r,o,c){var p=o+"";return Yu(r,PM(p,HM(wM(p),c)))}function tm(r){var o=0,c=0;return function(){var p=rx(),y=ot-(p-c);if(c=p,y>0){if(++o>=ft)return arguments[0]}else o=0;return r.apply(e,arguments)}}function Tl(r,o){var c=-1,p=r.length,y=p-1;for(o=o===e?p:o;++c<o;){var b=Ru(c,y),U=r[b];r[b]=r[c],r[c]=U}return r.length=o,r}var em=NM(function(r){var o=[];return r.charCodeAt(0)===46&&o.push(""),r.replace(Ga,function(c,p,y,b){o.push(y?b.replace(Qc,"$1"):p||c)}),o});function Gi(r){if(typeof r=="string"||si(r))return r;var o=r+"";return o=="0"&&1/r==-at?"-0":o}function us(r){if(r!=null){try{return Qa.call(r)}catch{}try{return r+""}catch{}}return""}function HM(r,o){return di(ht,function(c){var p="_."+c[0];o&c[1]&&!$a(r,p)&&r.push(p)}),r.sort()}function nm(r){if(r instanceof ve)return r.clone();var o=new mi(r.__wrapped__,r.__chain__);return o.__actions__=Hn(r.__actions__),o.__index__=r.__index__,o.__values__=r.__values__,o}function GM(r,o,c){(c?Pn(r,o,c):o===e)?o=1:o=cn(ue(o),0);var p=r==null?0:r.length;if(!p||o<1)return[];for(var y=0,b=0,U=rt(ol(p/o));y<p;)U[b++]=_i(r,y,y+=o);return U}function VM(r){for(var o=-1,c=r==null?0:r.length,p=0,y=[];++o<c;){var b=r[o];b&&(y[p++]=b)}return y}function kM(){var r=arguments.length;if(!r)return[];for(var o=rt(r-1),c=arguments[0],p=r;p--;)o[p-1]=arguments[p];return br(ce(c)?Hn(c):[c],Mn(o,1))}var WM=me(function(r,o){return je(r)?ea(r,Mn(o,1,je,!0)):[]}),XM=me(function(r,o){var c=vi(o);return je(c)&&(c=e),je(r)?ea(r,Mn(o,1,je,!0),Zt(c,2)):[]}),qM=me(function(r,o){var c=vi(o);return je(c)&&(c=e),je(r)?ea(r,Mn(o,1,je,!0),e,c):[]});function YM(r,o,c){var p=r==null?0:r.length;return p?(o=c||o===e?1:ue(o),_i(r,o<0?0:o,p)):[]}function $M(r,o,c){var p=r==null?0:r.length;return p?(o=c||o===e?1:ue(o),o=p-o,_i(r,0,o<0?0:o)):[]}function KM(r,o){return r&&r.length?gl(r,Zt(o,3),!0,!0):[]}function ZM(r,o){return r&&r.length?gl(r,Zt(o,3),!0):[]}function JM(r,o,c,p){var y=r==null?0:r.length;return y?(c&&typeof c!="number"&&Pn(r,o,c)&&(c=0,p=y),kx(r,o,c,p)):[]}function im(r,o,c){var p=r==null?0:r.length;if(!p)return-1;var y=c==null?0:ue(c);return y<0&&(y=cn(p+y,0)),Ka(r,Zt(o,3),y)}function rm(r,o,c){var p=r==null?0:r.length;if(!p)return-1;var y=p-1;return c!==e&&(y=ue(c),y=c<0?cn(p+y,0):yn(y,p-1)),Ka(r,Zt(o,3),y,!0)}function sm(r){var o=r==null?0:r.length;return o?Mn(r,1):[]}function jM(r){var o=r==null?0:r.length;return o?Mn(r,at):[]}function QM(r,o){var c=r==null?0:r.length;return c?(o=o===e?1:ue(o),Mn(r,o)):[]}function tS(r){for(var o=-1,c=r==null?0:r.length,p={};++o<c;){var y=r[o];p[y[0]]=y[1]}return p}function om(r){return r&&r.length?r[0]:e}function eS(r,o,c){var p=r==null?0:r.length;if(!p)return-1;var y=c==null?0:ue(c);return y<0&&(y=cn(p+y,0)),qs(r,o,y)}function nS(r){var o=r==null?0:r.length;return o?_i(r,0,-1):[]}var iS=me(function(r){var o=Xe(r,Uu);return o.length&&o[0]===r[0]?Tu(o):[]}),rS=me(function(r){var o=vi(r),c=Xe(r,Uu);return o===vi(c)?o=e:c.pop(),c.length&&c[0]===r[0]?Tu(c,Zt(o,2)):[]}),sS=me(function(r){var o=vi(r),c=Xe(r,Uu);return o=typeof o=="function"?o:e,o&&c.pop(),c.length&&c[0]===r[0]?Tu(c,e,o):[]});function oS(r,o){return r==null?"":nx.call(r,o)}function vi(r){var o=r==null?0:r.length;return o?r[o-1]:e}function aS(r,o,c){var p=r==null?0:r.length;if(!p)return-1;var y=p;return c!==e&&(y=ue(c),y=y<0?cn(p+y,0):yn(y,p-1)),o===o?Hv(r,o,y):Ka(r,Hd,y,!0)}function lS(r,o){return r&&r.length?_p(r,ue(o)):e}var cS=me(am);function am(r,o){return r&&r.length&&o&&o.length?Cu(r,o):r}function uS(r,o,c){return r&&r.length&&o&&o.length?Cu(r,o,Zt(c,2)):r}function fS(r,o,c){return r&&r.length&&o&&o.length?Cu(r,o,e,c):r}var hS=sr(function(r,o){var c=r==null?0:r.length,p=Mu(r,o);return Mp(r,Xe(o,function(y){return or(y,c)?+y:y}).sort(Pp)),p});function dS(r,o){var c=[];if(!(r&&r.length))return c;var p=-1,y=[],b=r.length;for(o=Zt(o,3);++p<b;){var U=r[p];o(U,p,r)&&(c.push(U),y.push(p))}return Mp(r,y),c}function $u(r){return r==null?r:ox.call(r)}function pS(r,o,c){var p=r==null?0:r.length;return p?(c&&typeof c!="number"&&Pn(r,o,c)?(o=0,c=p):(o=o==null?0:ue(o),c=c===e?p:ue(c)),_i(r,o,c)):[]}function mS(r,o){return ml(r,o)}function gS(r,o,c){return Lu(r,o,Zt(c,2))}function _S(r,o){var c=r==null?0:r.length;if(c){var p=ml(r,o);if(p<c&&Ri(r[p],o))return p}return-1}function vS(r,o){return ml(r,o,!0)}function xS(r,o,c){return Lu(r,o,Zt(c,2),!0)}function MS(r,o){var c=r==null?0:r.length;if(c){var p=ml(r,o,!0)-1;if(Ri(r[p],o))return p}return-1}function SS(r){return r&&r.length?yp(r):[]}function yS(r,o){return r&&r.length?yp(r,Zt(o,2)):[]}function ES(r){var o=r==null?0:r.length;return o?_i(r,1,o):[]}function TS(r,o,c){return r&&r.length?(o=c||o===e?1:ue(o),_i(r,0,o<0?0:o)):[]}function AS(r,o,c){var p=r==null?0:r.length;return p?(o=c||o===e?1:ue(o),o=p-o,_i(r,o<0?0:o,p)):[]}function bS(r,o){return r&&r.length?gl(r,Zt(o,3),!1,!0):[]}function wS(r,o){return r&&r.length?gl(r,Zt(o,3)):[]}var CS=me(function(r){return Pr(Mn(r,1,je,!0))}),RS=me(function(r){var o=vi(r);return je(o)&&(o=e),Pr(Mn(r,1,je,!0),Zt(o,2))}),PS=me(function(r){var o=vi(r);return o=typeof o=="function"?o:e,Pr(Mn(r,1,je,!0),e,o)});function LS(r){return r&&r.length?Pr(r):[]}function IS(r,o){return r&&r.length?Pr(r,Zt(o,2)):[]}function DS(r,o){return o=typeof o=="function"?o:e,r&&r.length?Pr(r,e,o):[]}function Ku(r){if(!(r&&r.length))return[];var o=0;return r=Ar(r,function(c){if(je(c))return o=cn(c.length,o),!0}),hu(o,function(c){return Xe(r,cu(c))})}function lm(r,o){if(!(r&&r.length))return[];var c=Ku(r);return o==null?c:Xe(c,function(p){return ni(o,e,p)})}var US=me(function(r,o){return je(r)?ea(r,o):[]}),NS=me(function(r){return Du(Ar(r,je))}),FS=me(function(r){var o=vi(r);return je(o)&&(o=e),Du(Ar(r,je),Zt(o,2))}),OS=me(function(r){var o=vi(r);return o=typeof o=="function"?o:e,Du(Ar(r,je),e,o)}),BS=me(Ku);function zS(r,o){return bp(r||[],o||[],ta)}function HS(r,o){return bp(r||[],o||[],ra)}var GS=me(function(r){var o=r.length,c=o>1?r[o-1]:e;return c=typeof c=="function"?(r.pop(),c):e,lm(r,c)});function cm(r){var o=T(r);return o.__chain__=!0,o}function VS(r,o){return o(r),r}function Al(r,o){return o(r)}var kS=sr(function(r){var o=r.length,c=o?r[0]:0,p=this.__wrapped__,y=function(b){return Mu(b,r)};return o>1||this.__actions__.length||!(p instanceof ve)||!or(c)?this.thru(y):(p=p.slice(c,+c+(o?1:0)),p.__actions__.push({func:Al,args:[y],thisArg:e}),new mi(p,this.__chain__).thru(function(b){return o&&!b.length&&b.push(e),b}))});function WS(){return cm(this)}function XS(){return new mi(this.value(),this.__chain__)}function qS(){this.__values__===e&&(this.__values__=Em(this.value()));var r=this.__index__>=this.__values__.length,o=r?e:this.__values__[this.__index__++];return{done:r,value:o}}function YS(){return this}function $S(r){for(var o,c=this;c instanceof ul;){var p=nm(c);p.__index__=0,p.__values__=e,o?y.__wrapped__=p:o=p;var y=p;c=c.__wrapped__}return y.__wrapped__=r,o}function KS(){var r=this.__wrapped__;if(r instanceof ve){var o=r;return this.__actions__.length&&(o=new ve(this)),o=o.reverse(),o.__actions__.push({func:Al,args:[$u],thisArg:e}),new mi(o,this.__chain__)}return this.thru($u)}function ZS(){return Ap(this.__wrapped__,this.__actions__)}var JS=_l(function(r,o,c){Oe.call(r,c)?++r[c]:ir(r,c,1)});function jS(r,o,c){var p=ce(r)?Bd:Vx;return c&&Pn(r,o,c)&&(o=e),p(r,Zt(o,3))}function QS(r,o){var c=ce(r)?Ar:lp;return c(r,Zt(o,3))}var ty=Fp(im),ey=Fp(rm);function ny(r,o){return Mn(bl(r,o),1)}function iy(r,o){return Mn(bl(r,o),at)}function ry(r,o,c){return c=c===e?1:ue(c),Mn(bl(r,o),c)}function um(r,o){var c=ce(r)?di:Rr;return c(r,Zt(o,3))}function fm(r,o){var c=ce(r)?Ev:ap;return c(r,Zt(o,3))}var sy=_l(function(r,o,c){Oe.call(r,c)?r[c].push(o):ir(r,c,[o])});function oy(r,o,c,p){r=Gn(r)?r:ro(r),c=c&&!p?ue(c):0;var y=r.length;return c<0&&(c=cn(y+c,0)),Ll(r)?c<=y&&r.indexOf(o,c)>-1:!!y&&qs(r,o,c)>-1}var ay=me(function(r,o,c){var p=-1,y=typeof o=="function",b=Gn(r)?rt(r.length):[];return Rr(r,function(U){b[++p]=y?ni(o,U,c):na(U,o,c)}),b}),ly=_l(function(r,o,c){ir(r,c,o)});function bl(r,o){var c=ce(r)?Xe:pp;return c(r,Zt(o,3))}function cy(r,o,c,p){return r==null?[]:(ce(o)||(o=o==null?[]:[o]),c=p?e:c,ce(c)||(c=c==null?[]:[c]),vp(r,o,c))}var uy=_l(function(r,o,c){r[c?0:1].push(o)},function(){return[[],[]]});function fy(r,o,c){var p=ce(r)?au:Vd,y=arguments.length<3;return p(r,Zt(o,4),c,y,Rr)}function hy(r,o,c){var p=ce(r)?Tv:Vd,y=arguments.length<3;return p(r,Zt(o,4),c,y,ap)}function dy(r,o){var c=ce(r)?Ar:lp;return c(r,Rl(Zt(o,3)))}function py(r){var o=ce(r)?ip:oM;return o(r)}function my(r,o,c){(c?Pn(r,o,c):o===e)?o=1:o=ue(o);var p=ce(r)?Ox:aM;return p(r,o)}function gy(r){var o=ce(r)?Bx:cM;return o(r)}function _y(r){if(r==null)return 0;if(Gn(r))return Ll(r)?$s(r):r.length;var o=En(r);return o==O||o==S?r.size:bu(r).length}function vy(r,o,c){var p=ce(r)?lu:uM;return c&&Pn(r,o,c)&&(o=e),p(r,Zt(o,3))}var xy=me(function(r,o){if(r==null)return[];var c=o.length;return c>1&&Pn(r,o[0],o[1])?o=[]:c>2&&Pn(o[0],o[1],o[2])&&(o=[o[0]]),vp(r,Mn(o,1),[])}),wl=Qv||function(){return xn.Date.now()};function My(r,o){if(typeof o!="function")throw new pi(l);return r=ue(r),function(){if(--r<1)return o.apply(this,arguments)}}function hm(r,o,c){return o=c?e:o,o=r&&o==null?r.length:o,rr(r,B,e,e,e,e,o)}function dm(r,o){var c;if(typeof o!="function")throw new pi(l);return r=ue(r),function(){return--r>0&&(c=o.apply(this,arguments)),r<=1&&(o=e),c}}var Zu=me(function(r,o,c){var p=v;if(c.length){var y=wr(c,no(Zu));p|=$}return rr(r,p,o,c,y)}),pm=me(function(r,o,c){var p=v|_;if(c.length){var y=wr(c,no(pm));p|=$}return rr(o,p,r,c,y)});function mm(r,o,c){o=c?e:o;var p=rr(r,A,e,e,e,e,e,o);return p.placeholder=mm.placeholder,p}function gm(r,o,c){o=c?e:o;var p=rr(r,I,e,e,e,e,e,o);return p.placeholder=gm.placeholder,p}function _m(r,o,c){var p,y,b,U,H,X,mt=0,gt=!1,yt=!1,Dt=!0;if(typeof r!="function")throw new pi(l);o=xi(o)||0,Ye(c)&&(gt=!!c.leading,yt="maxWait"in c,b=yt?cn(xi(c.maxWait)||0,o):b,Dt="trailing"in c?!!c.trailing:Dt);function Wt(Qe){var Pi=p,cr=y;return p=y=e,mt=Qe,U=r.apply(cr,Pi),U}function jt(Qe){return mt=Qe,H=aa(_e,o),gt?Wt(Qe):U}function fe(Qe){var Pi=Qe-X,cr=Qe-mt,Fm=o-Pi;return yt?yn(Fm,b-cr):Fm}function Qt(Qe){var Pi=Qe-X,cr=Qe-mt;return X===e||Pi>=o||Pi<0||yt&&cr>=b}function _e(){var Qe=wl();if(Qt(Qe))return Me(Qe);H=aa(_e,fe(Qe))}function Me(Qe){return H=e,Dt&&p?Wt(Qe):(p=y=e,U)}function oi(){H!==e&&wp(H),mt=0,p=X=y=H=e}function Ln(){return H===e?U:Me(wl())}function ai(){var Qe=wl(),Pi=Qt(Qe);if(p=arguments,y=this,X=Qe,Pi){if(H===e)return jt(X);if(yt)return wp(H),H=aa(_e,o),Wt(X)}return H===e&&(H=aa(_e,o)),U}return ai.cancel=oi,ai.flush=Ln,ai}var Sy=me(function(r,o){return op(r,1,o)}),yy=me(function(r,o,c){return op(r,xi(o)||0,c)});function Ey(r){return rr(r,L)}function Cl(r,o){if(typeof r!="function"||o!=null&&typeof o!="function")throw new pi(l);var c=function(){var p=arguments,y=o?o.apply(this,p):p[0],b=c.cache;if(b.has(y))return b.get(y);var U=r.apply(this,p);return c.cache=b.set(y,U)||b,U};return c.cache=new(Cl.Cache||nr),c}Cl.Cache=nr;function Rl(r){if(typeof r!="function")throw new pi(l);return function(){var o=arguments;switch(o.length){case 0:return!r.call(this);case 1:return!r.call(this,o[0]);case 2:return!r.call(this,o[0],o[1]);case 3:return!r.call(this,o[0],o[1],o[2])}return!r.apply(this,o)}}function Ty(r){return dm(2,r)}var Ay=fM(function(r,o){o=o.length==1&&ce(o[0])?Xe(o[0],ii(Zt())):Xe(Mn(o,1),ii(Zt()));var c=o.length;return me(function(p){for(var y=-1,b=yn(p.length,c);++y<b;)p[y]=o[y].call(this,p[y]);return ni(r,this,p)})}),Ju=me(function(r,o){var c=wr(o,no(Ju));return rr(r,$,e,o,c)}),vm=me(function(r,o){var c=wr(o,no(vm));return rr(r,F,e,o,c)}),by=sr(function(r,o){return rr(r,j,e,e,e,o)});function wy(r,o){if(typeof r!="function")throw new pi(l);return o=o===e?o:ue(o),me(r,o)}function Cy(r,o){if(typeof r!="function")throw new pi(l);return o=o==null?0:cn(ue(o),0),me(function(c){var p=c[o],y=Ir(c,0,o);return p&&br(y,p),ni(r,this,y)})}function Ry(r,o,c){var p=!0,y=!0;if(typeof r!="function")throw new pi(l);return Ye(c)&&(p="leading"in c?!!c.leading:p,y="trailing"in c?!!c.trailing:y),_m(r,o,{leading:p,maxWait:o,trailing:y})}function Py(r){return hm(r,1)}function Ly(r,o){return Ju(Nu(o),r)}function Iy(){if(!arguments.length)return[];var r=arguments[0];return ce(r)?r:[r]}function Dy(r){return gi(r,x)}function Uy(r,o){return o=typeof o=="function"?o:e,gi(r,x,o)}function Ny(r){return gi(r,g|x)}function Fy(r,o){return o=typeof o=="function"?o:e,gi(r,g|x,o)}function Oy(r,o){return o==null||sp(r,o,mn(o))}function Ri(r,o){return r===o||r!==r&&o!==o}var By=Sl(Eu),zy=Sl(function(r,o){return r>=o}),fs=fp(function(){return arguments}())?fp:function(r){return Je(r)&&Oe.call(r,"callee")&&!Jd.call(r,"callee")},ce=rt.isArray,Hy=Id?ii(Id):$x;function Gn(r){return r!=null&&Pl(r.length)&&!ar(r)}function je(r){return Je(r)&&Gn(r)}function Gy(r){return r===!0||r===!1||Je(r)&&Rn(r)==Kt}var Dr=ex||cf,Vy=Dd?ii(Dd):Kx;function ky(r){return Je(r)&&r.nodeType===1&&!la(r)}function Wy(r){if(r==null)return!0;if(Gn(r)&&(ce(r)||typeof r=="string"||typeof r.splice=="function"||Dr(r)||io(r)||fs(r)))return!r.length;var o=En(r);if(o==O||o==S)return!r.size;if(oa(r))return!bu(r).length;for(var c in r)if(Oe.call(r,c))return!1;return!0}function Xy(r,o){return ia(r,o)}function qy(r,o,c){c=typeof c=="function"?c:e;var p=c?c(r,o):e;return p===e?ia(r,o,e,c):!!p}function ju(r){if(!Je(r))return!1;var o=Rn(r);return o==Le||o==oe||typeof r.message=="string"&&typeof r.name=="string"&&!la(r)}function Yy(r){return typeof r=="number"&&Qd(r)}function ar(r){if(!Ye(r))return!1;var o=Rn(r);return o==z||o==D||o==Ht||o==dt}function xm(r){return typeof r=="number"&&r==ue(r)}function Pl(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Q}function Ye(r){var o=typeof r;return r!=null&&(o=="object"||o=="function")}function Je(r){return r!=null&&typeof r=="object"}var Mm=Ud?ii(Ud):Jx;function $y(r,o){return r===o||Au(r,o,Vu(o))}function Ky(r,o,c){return c=typeof c=="function"?c:e,Au(r,o,Vu(o),c)}function Zy(r){return Sm(r)&&r!=+r}function Jy(r){if(UM(r))throw new ae(a);return hp(r)}function jy(r){return r===null}function Qy(r){return r==null}function Sm(r){return typeof r=="number"||Je(r)&&Rn(r)==J}function la(r){if(!Je(r)||Rn(r)!=lt)return!1;var o=il(r);if(o===null)return!0;var c=Oe.call(o,"constructor")&&o.constructor;return typeof c=="function"&&c instanceof c&&Qa.call(c)==Kv}var Qu=Nd?ii(Nd):jx;function tE(r){return xm(r)&&r>=-Q&&r<=Q}var ym=Fd?ii(Fd):Qx;function Ll(r){return typeof r=="string"||!ce(r)&&Je(r)&&Rn(r)==N}function si(r){return typeof r=="symbol"||Je(r)&&Rn(r)==K}var io=Od?ii(Od):tM;function eE(r){return r===e}function nE(r){return Je(r)&&En(r)==Z}function iE(r){return Je(r)&&Rn(r)==Tt}var rE=Sl(wu),sE=Sl(function(r,o){return r<=o});function Em(r){if(!r)return[];if(Gn(r))return Ll(r)?wi(r):Hn(r);if(Ko&&r[Ko])return Ov(r[Ko]());var o=En(r),c=o==O?pu:o==S?Za:ro;return c(r)}function lr(r){if(!r)return r===0?r:0;if(r=xi(r),r===at||r===-at){var o=r<0?-1:1;return o*Pt}return r===r?r:0}function ue(r){var o=lr(r),c=o%1;return o===o?c?o-c:o:0}function Tm(r){return r?as(ue(r),0,Lt):0}function xi(r){if(typeof r=="number")return r;if(si(r))return Ot;if(Ye(r)){var o=typeof r.valueOf=="function"?r.valueOf():r;r=Ye(o)?o+"":o}if(typeof r!="string")return r===0?r:+r;r=kd(r);var c=W.test(r);return c||it.test(r)?Mv(r.slice(2),c?2:8):C.test(r)?Ot:+r}function Am(r){return Hi(r,Vn(r))}function oE(r){return r?as(ue(r),-Q,Q):r===0?r:0}function Ie(r){return r==null?"":ri(r)}var aE=to(function(r,o){if(oa(o)||Gn(o)){Hi(o,mn(o),r);return}for(var c in o)Oe.call(o,c)&&ta(r,c,o[c])}),bm=to(function(r,o){Hi(o,Vn(o),r)}),Il=to(function(r,o,c,p){Hi(o,Vn(o),r,p)}),lE=to(function(r,o,c,p){Hi(o,mn(o),r,p)}),cE=sr(Mu);function uE(r,o){var c=Qs(r);return o==null?c:rp(c,o)}var fE=me(function(r,o){r=ze(r);var c=-1,p=o.length,y=p>2?o[2]:e;for(y&&Pn(o[0],o[1],y)&&(p=1);++c<p;)for(var b=o[c],U=Vn(b),H=-1,X=U.length;++H<X;){var mt=U[H],gt=r[mt];(gt===e||Ri(gt,Zs[mt])&&!Oe.call(r,mt))&&(r[mt]=b[mt])}return r}),hE=me(function(r){return r.push(e,kp),ni(wm,e,r)});function dE(r,o){return zd(r,Zt(o,3),zi)}function pE(r,o){return zd(r,Zt(o,3),yu)}function mE(r,o){return r==null?r:Su(r,Zt(o,3),Vn)}function gE(r,o){return r==null?r:cp(r,Zt(o,3),Vn)}function _E(r,o){return r&&zi(r,Zt(o,3))}function vE(r,o){return r&&yu(r,Zt(o,3))}function xE(r){return r==null?[]:dl(r,mn(r))}function ME(r){return r==null?[]:dl(r,Vn(r))}function tf(r,o,c){var p=r==null?e:ls(r,o);return p===e?c:p}function SE(r,o){return r!=null&&qp(r,o,Wx)}function ef(r,o){return r!=null&&qp(r,o,Xx)}var yE=Bp(function(r,o,c){o!=null&&typeof o.toString!="function"&&(o=tl.call(o)),r[o]=c},rf(kn)),EE=Bp(function(r,o,c){o!=null&&typeof o.toString!="function"&&(o=tl.call(o)),Oe.call(r,o)?r[o].push(c):r[o]=[c]},Zt),TE=me(na);function mn(r){return Gn(r)?np(r):bu(r)}function Vn(r){return Gn(r)?np(r,!0):eM(r)}function AE(r,o){var c={};return o=Zt(o,3),zi(r,function(p,y,b){ir(c,o(p,y,b),p)}),c}function bE(r,o){var c={};return o=Zt(o,3),zi(r,function(p,y,b){ir(c,y,o(p,y,b))}),c}var wE=to(function(r,o,c){pl(r,o,c)}),wm=to(function(r,o,c,p){pl(r,o,c,p)}),CE=sr(function(r,o){var c={};if(r==null)return c;var p=!1;o=Xe(o,function(b){return b=Lr(b,r),p||(p=b.length>1),b}),Hi(r,Hu(r),c),p&&(c=gi(c,g|m|x,yM));for(var y=o.length;y--;)Iu(c,o[y]);return c});function RE(r,o){return Cm(r,Rl(Zt(o)))}var PE=sr(function(r,o){return r==null?{}:iM(r,o)});function Cm(r,o){if(r==null)return{};var c=Xe(Hu(r),function(p){return[p]});return o=Zt(o),xp(r,c,function(p,y){return o(p,y[0])})}function LE(r,o,c){o=Lr(o,r);var p=-1,y=o.length;for(y||(y=1,r=e);++p<y;){var b=r==null?e:r[Gi(o[p])];b===e&&(p=y,b=c),r=ar(b)?b.call(r):b}return r}function IE(r,o,c){return r==null?r:ra(r,o,c)}function DE(r,o,c,p){return p=typeof p=="function"?p:e,r==null?r:ra(r,o,c,p)}var Rm=Gp(mn),Pm=Gp(Vn);function UE(r,o,c){var p=ce(r),y=p||Dr(r)||io(r);if(o=Zt(o,4),c==null){var b=r&&r.constructor;y?c=p?new b:[]:Ye(r)?c=ar(b)?Qs(il(r)):{}:c={}}return(y?di:zi)(r,function(U,H,X){return o(c,U,H,X)}),c}function NE(r,o){return r==null?!0:Iu(r,o)}function FE(r,o,c){return r==null?r:Tp(r,o,Nu(c))}function OE(r,o,c,p){return p=typeof p=="function"?p:e,r==null?r:Tp(r,o,Nu(c),p)}function ro(r){return r==null?[]:du(r,mn(r))}function BE(r){return r==null?[]:du(r,Vn(r))}function zE(r,o,c){return c===e&&(c=o,o=e),c!==e&&(c=xi(c),c=c===c?c:0),o!==e&&(o=xi(o),o=o===o?o:0),as(xi(r),o,c)}function HE(r,o,c){return o=lr(o),c===e?(c=o,o=0):c=lr(c),r=xi(r),qx(r,o,c)}function GE(r,o,c){if(c&&typeof c!="boolean"&&Pn(r,o,c)&&(o=c=e),c===e&&(typeof o=="boolean"?(c=o,o=e):typeof r=="boolean"&&(c=r,r=e)),r===e&&o===e?(r=0,o=1):(r=lr(r),o===e?(o=r,r=0):o=lr(o)),r>o){var p=r;r=o,o=p}if(c||r%1||o%1){var y=tp();return yn(r+y*(o-r+xv("1e-"+((y+"").length-1))),o)}return Ru(r,o)}var VE=eo(function(r,o,c){return o=o.toLowerCase(),r+(c?Lm(o):o)});function Lm(r){return nf(Ie(r).toLowerCase())}function Im(r){return r=Ie(r),r&&r.replace(wt,Iv).replace(cv,"")}function kE(r,o,c){r=Ie(r),o=ri(o);var p=r.length;c=c===e?p:as(ue(c),0,p);var y=c;return c-=o.length,c>=0&&r.slice(c,y)==o}function WE(r){return r=Ie(r),r&&xe.test(r)?r.replace(Ct,Dv):r}function XE(r){return r=Ie(r),r&&qo.test(r)?r.replace(bi,"\\$&"):r}var qE=eo(function(r,o,c){return r+(c?"-":"")+o.toLowerCase()}),YE=eo(function(r,o,c){return r+(c?" ":"")+o.toLowerCase()}),$E=Np("toLowerCase");function KE(r,o,c){r=Ie(r),o=ue(o);var p=o?$s(r):0;if(!o||p>=o)return r;var y=(o-p)/2;return Ml(al(y),c)+r+Ml(ol(y),c)}function ZE(r,o,c){r=Ie(r),o=ue(o);var p=o?$s(r):0;return o&&p<o?r+Ml(o-p,c):r}function JE(r,o,c){r=Ie(r),o=ue(o);var p=o?$s(r):0;return o&&p<o?Ml(o-p,c)+r:r}function jE(r,o,c){return c||o==null?o=0:o&&(o=+o),sx(Ie(r).replace(zs,""),o||0)}function QE(r,o,c){return(c?Pn(r,o,c):o===e)?o=1:o=ue(o),Pu(Ie(r),o)}function tT(){var r=arguments,o=Ie(r[0]);return r.length<3?o:o.replace(r[1],r[2])}var eT=eo(function(r,o,c){return r+(c?"_":"")+o.toLowerCase()});function nT(r,o,c){return c&&typeof c!="number"&&Pn(r,o,c)&&(o=c=e),c=c===e?Lt:c>>>0,c?(r=Ie(r),r&&(typeof o=="string"||o!=null&&!Qu(o))&&(o=ri(o),!o&&Ys(r))?Ir(wi(r),0,c):r.split(o,c)):[]}var iT=eo(function(r,o,c){return r+(c?" ":"")+nf(o)});function rT(r,o,c){return r=Ie(r),c=c==null?0:as(ue(c),0,r.length),o=ri(o),r.slice(c,c+o.length)==o}function sT(r,o,c){var p=T.templateSettings;c&&Pn(r,o,c)&&(o=e),r=Ie(r),o=Il({},o,p,Vp);var y=Il({},o.imports,p.imports,Vp),b=mn(y),U=du(y,b),H,X,mt=0,gt=o.interpolate||Ft,yt="__p += '",Dt=mu((o.escape||Ft).source+"|"+gt.source+"|"+(gt===Ee?tu:Ft).source+"|"+(o.evaluate||Ft).source+"|$","g"),Wt="//# sourceURL="+(Oe.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++pv+"]")+`
`;r.replace(Dt,function(Qt,_e,Me,oi,Ln,ai){return Me||(Me=oi),yt+=r.slice(mt,ai).replace(kt,Uv),_e&&(H=!0,yt+=`' +
__e(`+_e+`) +
'`),Ln&&(X=!0,yt+=`';
`+Ln+`;
__p += '`),Me&&(yt+=`' +
((__t = (`+Me+`)) == null ? '' : __t) +
'`),mt=ai+Qt.length,Qt}),yt+=`';
`;var jt=Oe.call(o,"variable")&&o.variable;if(!jt)yt=`with (obj) {
`+yt+`
}
`;else if(Xa.test(jt))throw new ae(u);yt=(X?yt.replace(V,""):yt).replace(bt,"$1").replace(_t,"$1;"),yt="function("+(jt||"obj")+`) {
`+(jt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(H?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+yt+`return __p
}`;var fe=Um(function(){return Re(b,Wt+"return "+yt).apply(e,U)});if(fe.source=yt,ju(fe))throw fe;return fe}function oT(r){return Ie(r).toLowerCase()}function aT(r){return Ie(r).toUpperCase()}function lT(r,o,c){if(r=Ie(r),r&&(c||o===e))return kd(r);if(!r||!(o=ri(o)))return r;var p=wi(r),y=wi(o),b=Wd(p,y),U=Xd(p,y)+1;return Ir(p,b,U).join("")}function cT(r,o,c){if(r=Ie(r),r&&(c||o===e))return r.slice(0,Yd(r)+1);if(!r||!(o=ri(o)))return r;var p=wi(r),y=Xd(p,wi(o))+1;return Ir(p,0,y).join("")}function uT(r,o,c){if(r=Ie(r),r&&(c||o===e))return r.replace(zs,"");if(!r||!(o=ri(o)))return r;var p=wi(r),y=Wd(p,wi(o));return Ir(p,y).join("")}function fT(r,o){var c=R,p=G;if(Ye(o)){var y="separator"in o?o.separator:y;c="length"in o?ue(o.length):c,p="omission"in o?ri(o.omission):p}r=Ie(r);var b=r.length;if(Ys(r)){var U=wi(r);b=U.length}if(c>=b)return r;var H=c-$s(p);if(H<1)return p;var X=U?Ir(U,0,H).join(""):r.slice(0,H);if(y===e)return X+p;if(U&&(H+=X.length-H),Qu(y)){if(r.slice(H).search(y)){var mt,gt=X;for(y.global||(y=mu(y.source,Ie(qa.exec(y))+"g")),y.lastIndex=0;mt=y.exec(gt);)var yt=mt.index;X=X.slice(0,yt===e?H:yt)}}else if(r.indexOf(ri(y),H)!=H){var Dt=X.lastIndexOf(y);Dt>-1&&(X=X.slice(0,Dt))}return X+p}function hT(r){return r=Ie(r),r&&te.test(r)?r.replace(xt,Gv):r}var dT=eo(function(r,o,c){return r+(c?" ":"")+o.toUpperCase()}),nf=Np("toUpperCase");function Dm(r,o,c){return r=Ie(r),o=c?e:o,o===e?Fv(r)?Wv(r):wv(r):r.match(o)||[]}var Um=me(function(r,o){try{return ni(r,e,o)}catch(c){return ju(c)?c:new ae(c)}}),pT=sr(function(r,o){return di(o,function(c){c=Gi(c),ir(r,c,Zu(r[c],r))}),r});function mT(r){var o=r==null?0:r.length,c=Zt();return r=o?Xe(r,function(p){if(typeof p[1]!="function")throw new pi(l);return[c(p[0]),p[1]]}):[],me(function(p){for(var y=-1;++y<o;){var b=r[y];if(ni(b[0],this,p))return ni(b[1],this,p)}})}function gT(r){return Gx(gi(r,g))}function rf(r){return function(){return r}}function _T(r,o){return r==null||r!==r?o:r}var vT=Op(),xT=Op(!0);function kn(r){return r}function sf(r){return dp(typeof r=="function"?r:gi(r,g))}function MT(r){return mp(gi(r,g))}function ST(r,o){return gp(r,gi(o,g))}var yT=me(function(r,o){return function(c){return na(c,r,o)}}),ET=me(function(r,o){return function(c){return na(r,c,o)}});function of(r,o,c){var p=mn(o),y=dl(o,p);c==null&&!(Ye(o)&&(y.length||!p.length))&&(c=o,o=r,r=this,y=dl(o,mn(o)));var b=!(Ye(c)&&"chain"in c)||!!c.chain,U=ar(r);return di(y,function(H){var X=o[H];r[H]=X,U&&(r.prototype[H]=function(){var mt=this.__chain__;if(b||mt){var gt=r(this.__wrapped__),yt=gt.__actions__=Hn(this.__actions__);return yt.push({func:X,args:arguments,thisArg:r}),gt.__chain__=mt,gt}return X.apply(r,br([this.value()],arguments))})}),r}function TT(){return xn._===this&&(xn._=Zv),this}function af(){}function AT(r){return r=ue(r),me(function(o){return _p(o,r)})}var bT=Ou(Xe),wT=Ou(Bd),CT=Ou(lu);function Nm(r){return Wu(r)?cu(Gi(r)):rM(r)}function RT(r){return function(o){return r==null?e:ls(r,o)}}var PT=zp(),LT=zp(!0);function lf(){return[]}function cf(){return!1}function IT(){return{}}function DT(){return""}function UT(){return!0}function NT(r,o){if(r=ue(r),r<1||r>Q)return[];var c=Lt,p=yn(r,Lt);o=Zt(o),r-=Lt;for(var y=hu(p,o);++c<r;)o(c);return y}function FT(r){return ce(r)?Xe(r,Gi):si(r)?[r]:Hn(em(Ie(r)))}function OT(r){var o=++$v;return Ie(r)+o}var BT=xl(function(r,o){return r+o},0),zT=Bu("ceil"),HT=xl(function(r,o){return r/o},1),GT=Bu("floor");function VT(r){return r&&r.length?hl(r,kn,Eu):e}function kT(r,o){return r&&r.length?hl(r,Zt(o,2),Eu):e}function WT(r){return Gd(r,kn)}function XT(r,o){return Gd(r,Zt(o,2))}function qT(r){return r&&r.length?hl(r,kn,wu):e}function YT(r,o){return r&&r.length?hl(r,Zt(o,2),wu):e}var $T=xl(function(r,o){return r*o},1),KT=Bu("round"),ZT=xl(function(r,o){return r-o},0);function JT(r){return r&&r.length?fu(r,kn):0}function jT(r,o){return r&&r.length?fu(r,Zt(o,2)):0}return T.after=My,T.ary=hm,T.assign=aE,T.assignIn=bm,T.assignInWith=Il,T.assignWith=lE,T.at=cE,T.before=dm,T.bind=Zu,T.bindAll=pT,T.bindKey=pm,T.castArray=Iy,T.chain=cm,T.chunk=GM,T.compact=VM,T.concat=kM,T.cond=mT,T.conforms=gT,T.constant=rf,T.countBy=JS,T.create=uE,T.curry=mm,T.curryRight=gm,T.debounce=_m,T.defaults=fE,T.defaultsDeep=hE,T.defer=Sy,T.delay=yy,T.difference=WM,T.differenceBy=XM,T.differenceWith=qM,T.drop=YM,T.dropRight=$M,T.dropRightWhile=KM,T.dropWhile=ZM,T.fill=JM,T.filter=QS,T.flatMap=ny,T.flatMapDeep=iy,T.flatMapDepth=ry,T.flatten=sm,T.flattenDeep=jM,T.flattenDepth=QM,T.flip=Ey,T.flow=vT,T.flowRight=xT,T.fromPairs=tS,T.functions=xE,T.functionsIn=ME,T.groupBy=sy,T.initial=nS,T.intersection=iS,T.intersectionBy=rS,T.intersectionWith=sS,T.invert=yE,T.invertBy=EE,T.invokeMap=ay,T.iteratee=sf,T.keyBy=ly,T.keys=mn,T.keysIn=Vn,T.map=bl,T.mapKeys=AE,T.mapValues=bE,T.matches=MT,T.matchesProperty=ST,T.memoize=Cl,T.merge=wE,T.mergeWith=wm,T.method=yT,T.methodOf=ET,T.mixin=of,T.negate=Rl,T.nthArg=AT,T.omit=CE,T.omitBy=RE,T.once=Ty,T.orderBy=cy,T.over=bT,T.overArgs=Ay,T.overEvery=wT,T.overSome=CT,T.partial=Ju,T.partialRight=vm,T.partition=uy,T.pick=PE,T.pickBy=Cm,T.property=Nm,T.propertyOf=RT,T.pull=cS,T.pullAll=am,T.pullAllBy=uS,T.pullAllWith=fS,T.pullAt=hS,T.range=PT,T.rangeRight=LT,T.rearg=by,T.reject=dy,T.remove=dS,T.rest=wy,T.reverse=$u,T.sampleSize=my,T.set=IE,T.setWith=DE,T.shuffle=gy,T.slice=pS,T.sortBy=xy,T.sortedUniq=SS,T.sortedUniqBy=yS,T.split=nT,T.spread=Cy,T.tail=ES,T.take=TS,T.takeRight=AS,T.takeRightWhile=bS,T.takeWhile=wS,T.tap=VS,T.throttle=Ry,T.thru=Al,T.toArray=Em,T.toPairs=Rm,T.toPairsIn=Pm,T.toPath=FT,T.toPlainObject=Am,T.transform=UE,T.unary=Py,T.union=CS,T.unionBy=RS,T.unionWith=PS,T.uniq=LS,T.uniqBy=IS,T.uniqWith=DS,T.unset=NE,T.unzip=Ku,T.unzipWith=lm,T.update=FE,T.updateWith=OE,T.values=ro,T.valuesIn=BE,T.without=US,T.words=Dm,T.wrap=Ly,T.xor=NS,T.xorBy=FS,T.xorWith=OS,T.zip=BS,T.zipObject=zS,T.zipObjectDeep=HS,T.zipWith=GS,T.entries=Rm,T.entriesIn=Pm,T.extend=bm,T.extendWith=Il,of(T,T),T.add=BT,T.attempt=Um,T.camelCase=VE,T.capitalize=Lm,T.ceil=zT,T.clamp=zE,T.clone=Dy,T.cloneDeep=Ny,T.cloneDeepWith=Fy,T.cloneWith=Uy,T.conformsTo=Oy,T.deburr=Im,T.defaultTo=_T,T.divide=HT,T.endsWith=kE,T.eq=Ri,T.escape=WE,T.escapeRegExp=XE,T.every=jS,T.find=ty,T.findIndex=im,T.findKey=dE,T.findLast=ey,T.findLastIndex=rm,T.findLastKey=pE,T.floor=GT,T.forEach=um,T.forEachRight=fm,T.forIn=mE,T.forInRight=gE,T.forOwn=_E,T.forOwnRight=vE,T.get=tf,T.gt=By,T.gte=zy,T.has=SE,T.hasIn=ef,T.head=om,T.identity=kn,T.includes=oy,T.indexOf=eS,T.inRange=HE,T.invoke=TE,T.isArguments=fs,T.isArray=ce,T.isArrayBuffer=Hy,T.isArrayLike=Gn,T.isArrayLikeObject=je,T.isBoolean=Gy,T.isBuffer=Dr,T.isDate=Vy,T.isElement=ky,T.isEmpty=Wy,T.isEqual=Xy,T.isEqualWith=qy,T.isError=ju,T.isFinite=Yy,T.isFunction=ar,T.isInteger=xm,T.isLength=Pl,T.isMap=Mm,T.isMatch=$y,T.isMatchWith=Ky,T.isNaN=Zy,T.isNative=Jy,T.isNil=Qy,T.isNull=jy,T.isNumber=Sm,T.isObject=Ye,T.isObjectLike=Je,T.isPlainObject=la,T.isRegExp=Qu,T.isSafeInteger=tE,T.isSet=ym,T.isString=Ll,T.isSymbol=si,T.isTypedArray=io,T.isUndefined=eE,T.isWeakMap=nE,T.isWeakSet=iE,T.join=oS,T.kebabCase=qE,T.last=vi,T.lastIndexOf=aS,T.lowerCase=YE,T.lowerFirst=$E,T.lt=rE,T.lte=sE,T.max=VT,T.maxBy=kT,T.mean=WT,T.meanBy=XT,T.min=qT,T.minBy=YT,T.stubArray=lf,T.stubFalse=cf,T.stubObject=IT,T.stubString=DT,T.stubTrue=UT,T.multiply=$T,T.nth=lS,T.noConflict=TT,T.noop=af,T.now=wl,T.pad=KE,T.padEnd=ZE,T.padStart=JE,T.parseInt=jE,T.random=GE,T.reduce=fy,T.reduceRight=hy,T.repeat=QE,T.replace=tT,T.result=LE,T.round=KT,T.runInContext=k,T.sample=py,T.size=_y,T.snakeCase=eT,T.some=vy,T.sortedIndex=mS,T.sortedIndexBy=gS,T.sortedIndexOf=_S,T.sortedLastIndex=vS,T.sortedLastIndexBy=xS,T.sortedLastIndexOf=MS,T.startCase=iT,T.startsWith=rT,T.subtract=ZT,T.sum=JT,T.sumBy=jT,T.template=sT,T.times=NT,T.toFinite=lr,T.toInteger=ue,T.toLength=Tm,T.toLower=oT,T.toNumber=xi,T.toSafeInteger=oE,T.toString=Ie,T.toUpper=aT,T.trim=lT,T.trimEnd=cT,T.trimStart=uT,T.truncate=fT,T.unescape=hT,T.uniqueId=OT,T.upperCase=dT,T.upperFirst=nf,T.each=um,T.eachRight=fm,T.first=om,of(T,function(){var r={};return zi(T,function(o,c){Oe.call(T.prototype,c)||(r[c]=o)}),r}(),{chain:!1}),T.VERSION=i,di(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){T[r].placeholder=T}),di(["drop","take"],function(r,o){ve.prototype[r]=function(c){c=c===e?1:cn(ue(c),0);var p=this.__filtered__&&!o?new ve(this):this.clone();return p.__filtered__?p.__takeCount__=yn(c,p.__takeCount__):p.__views__.push({size:yn(c,Lt),type:r+(p.__dir__<0?"Right":"")}),p},ve.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),di(["filter","map","takeWhile"],function(r,o){var c=o+1,p=c==vt||c==ct;ve.prototype[r]=function(y){var b=this.clone();return b.__iteratees__.push({iteratee:Zt(y,3),type:c}),b.__filtered__=b.__filtered__||p,b}}),di(["head","last"],function(r,o){var c="take"+(o?"Right":"");ve.prototype[r]=function(){return this[c](1).value()[0]}}),di(["initial","tail"],function(r,o){var c="drop"+(o?"":"Right");ve.prototype[r]=function(){return this.__filtered__?new ve(this):this[c](1)}}),ve.prototype.compact=function(){return this.filter(kn)},ve.prototype.find=function(r){return this.filter(r).head()},ve.prototype.findLast=function(r){return this.reverse().find(r)},ve.prototype.invokeMap=me(function(r,o){return typeof r=="function"?new ve(this):this.map(function(c){return na(c,r,o)})}),ve.prototype.reject=function(r){return this.filter(Rl(Zt(r)))},ve.prototype.slice=function(r,o){r=ue(r);var c=this;return c.__filtered__&&(r>0||o<0)?new ve(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),o!==e&&(o=ue(o),c=o<0?c.dropRight(-o):c.take(o-r)),c)},ve.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},ve.prototype.toArray=function(){return this.take(Lt)},zi(ve.prototype,function(r,o){var c=/^(?:filter|find|map|reject)|While$/.test(o),p=/^(?:head|last)$/.test(o),y=T[p?"take"+(o=="last"?"Right":""):o],b=p||/^find/.test(o);y&&(T.prototype[o]=function(){var U=this.__wrapped__,H=p?[1]:arguments,X=U instanceof ve,mt=H[0],gt=X||ce(U),yt=function(_e){var Me=y.apply(T,br([_e],H));return p&&Dt?Me[0]:Me};gt&&c&&typeof mt=="function"&&mt.length!=1&&(X=gt=!1);var Dt=this.__chain__,Wt=!!this.__actions__.length,jt=b&&!Dt,fe=X&&!Wt;if(!b&&gt){U=fe?U:new ve(this);var Qt=r.apply(U,H);return Qt.__actions__.push({func:Al,args:[yt],thisArg:e}),new mi(Qt,Dt)}return jt&&fe?r.apply(this,H):(Qt=this.thru(yt),jt?p?Qt.value()[0]:Qt.value():Qt)})}),di(["pop","push","shift","sort","splice","unshift"],function(r){var o=Ja[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",p=/^(?:pop|shift)$/.test(r);T.prototype[r]=function(){var y=arguments;if(p&&!this.__chain__){var b=this.value();return o.apply(ce(b)?b:[],y)}return this[c](function(U){return o.apply(ce(U)?U:[],y)})}}),zi(ve.prototype,function(r,o){var c=T[o];if(c){var p=c.name+"";Oe.call(js,p)||(js[p]=[]),js[p].push({name:o,func:c})}}),js[vl(e,_).name]=[{name:"wrapper",func:e}],ve.prototype.clone=hx,ve.prototype.reverse=dx,ve.prototype.value=px,T.prototype.at=kS,T.prototype.chain=WS,T.prototype.commit=XS,T.prototype.next=qS,T.prototype.plant=$S,T.prototype.reverse=KS,T.prototype.toJSON=T.prototype.valueOf=T.prototype.value=ZS,T.prototype.first=T.prototype.head,Ko&&(T.prototype[Ko]=YS),T},Ks=Xv();is?((is.exports=Ks)._=Ks,ru._=Ks):xn._=Ks}).call(_a)})(Nc,Nc.exports);var YI=Nc.exports;const Xi=qI(YI),$I={class:"table"},KI=["placeholder","value","onInput"],ZI=["onClick"],fc=8,JI={__name:"Table",props:{rows:Array,columns:Array},setup(n){const t=n,e=(E,v)=>Xi.isEmpty(v)?E:E.filter(_=>Object.keys(v).every(P=>{const A=_[P],I=v[P];return Xi.isString(A)?Xi.toLower(A).includes(Xi.toLower(I)):Xi.isBoolean(A)?I==="true"&&A||I==="false"&&!A||I==!0&&A||I==!1&&!A:Xi.isNumber(A)?A==I:!1})),i=(E,v)=>E.sort((_,P)=>{const{order:A,orderBy:I}=v;if(Xi.isNil(_[I]))return 1;if(Xi.isNil(P[I]))return-1;const $=_[I]+"",F=P[I]+"";return A==="asc"?$.localeCompare(F,"en",{numeric:Xi.isNumber(P[I])}):F.localeCompare($,"en",{numeric:Xi.isNumber(_[I])})}),s=Be(1),a=Be({}),l=Be({order:"asc",orderBy:"id"});Be("");const u=yi(()=>e(t.rows,a.value)),f=yi(()=>i(u.value,l.value)),h=yi(()=>f.value.slice((s.value-1)*fc,s.value*fc)),d=yi(()=>u.value.length),g=yi(()=>Math.ceil(d.value/fc)),m=(E,v)=>{if(s.value=1,E)a.value={...a.value,[v]:E};else{const{[v]:_,...P}=a.value;a.value=P}console.log(a.value)},x=E=>{s.value=1,l.value={order:l.value.order==="desc"&&l.value.orderBy===E?"asc":"desc",orderBy:E}},M=E=>{s.value=E};return(E,v)=>(tn(),en(bn,null,[Nt("table",$I,[Nt("thead",null,[Nt("tr",null,[(tn(!0),en(bn,null,va(n.columns,_=>(tn(),en("th",{key:_.accessor},$n(_.label),1))),128))]),Nt("tr",null,[(tn(!0),en(bn,null,va(n.columns,_=>(tn(),en("th",{key:_.accessor},[Nt("label",null,[(tn(),en("input",{class:"input",key:"${column.accessor}-search",type:"search",placeholder:`搜尋${_.label}`,value:a.value[_.accessor]||"",onInput:P=>m(P.target.value,_.accessor)},null,40,KI))]),Nt("button",{onClick:P=>x(_.accessor)},$n(_.accessor===l.value.orderBy?l.value.order==="asc"?"升序🟢":"降序🔴":"️排序⚪"),9,ZI)]))),128))])]),Nt("tbody",null,[(tn(!0),en(bn,null,va(h.value,_=>(tn(),en("tr",{key:_.id},[(tn(!0),en(bn,null,va(n.columns,P=>(tn(),en("td",{key:P},$n(P.format?P.format(_[P.accessor]):_[P.accessor]),1))),128))]))),128))])]),Sn(XI,{"onUpdate:activePage":M,activePage:s.value,rowsPerPage:fc,count:d.value,totalPages:g.value},null,8,["activePage","count","totalPages"])],64))}},jI=Bs(JI,[["__scopeId","data-v-d6179782"]]),QI={class:"section",id:"cookie"},tD={__name:"CookieTable",setup(n){const t=[],e=Be([]),i=[{accessor:"price",label:"售價"},{accessor:"name",label:"品名"},{accessor:"onsale",label:"在架上",format:s=>s?"✔️":"  "},{accessor:"tag",label:"標籤"},{accessor:"rate",label:"顧客評價"}];return es(()=>{const s=t.concat([{id:1,price:"50",name:"potatochip 洋芋片",onsale:!0,tag:"salty crispy delicious",rate:"⭐️⭐️⭐️⭐️"},{id:2,price:"30",name:"chocolate 巧克力",onsale:!1,tag:"sweet rich smooth",rate:"⭐️⭐️⭐️⭐️⭐️"},{id:3,price:"25",name:"biscuit 餅乾",onsale:!0,tag:"crunchy light buttery",rate:"⭐️"},{id:4,price:"60",name:"nuts 堅果",onsale:!0,tag:"healthy crunchy tasty",rate:"⭐️⭐️⭐️⭐️"},{id:5,price:"35",name:"driedfruit 果乾",onsale:!1,tag:"sweet chewy fruity",rate:"⭐️⭐️⭐️"},{id:6,price:"40",name:"candy 糖果",onsale:!0,tag:"sweet colorful chewy",rate:"⭐️⭐️⭐️⭐️"},{id:7,price:"55",name:"popcorn 爆米花",onsale:!1,tag:"salty sweet crispy",rate:"⭐️⭐️⭐️⭐️"},{id:8,price:"45",name:"beefjerky 牛肉乾",onsale:!0,tag:"savory chewy spicy",rate:"⭐️⭐️⭐️⭐️⭐️"},{id:9,price:"20",name:"jelly 果凍",onsale:!1,tag:"sweet fruity soft",rate:"⭐️⭐️⭐️"},{id:10,price:"28",name:"cracker 薄脆餅",onsale:!0,tag:"light crispy savory",rate:"⭐️⭐️⭐️"},{id:11,price:"32",name:"cookies 曲奇餅",onsale:!1,tag:"sweet buttery soft",rate:"⭐️⭐️⭐️⭐️"},{id:12,price:"38",name:"seaweed 海苔",onsale:!0,tag:"salty crispy healthy",rate:"⭐️⭐️⭐️⭐️"},{id:13,price:"22",name:"mints 薄荷糖",onsale:!1,tag:"refreshing sweet cool",rate:"⭐️⭐️"},{id:14,price:"42",name:"cerealbar 穀物棒",onsale:!0,tag:"healthy filling crunchy",rate:"⭐️⭐️⭐️⭐️"},{id:15,price:"33",name:"pudding 布丁",onsale:!1,tag:"sweet smooth creamy",rate:"⭐️⭐️⭐️"},{id:16,price:"50",name:"granola 格蘭諾拉",onsale:!0,tag:"crunchy healthy sweet",rate:"⭐️⭐️⭐️⭐️"},{id:17,price:"65",name:"trailmix 綜合果仁",onsale:!1,tag:"savory sweet healthy",rate:"⭐️⭐️⭐️⭐️"},{id:18,price:"36",name:"fruitchips 果片",onsale:!0,tag:"crunchy fruity sweet",rate:"⭐️⭐️"},{id:19,price:"58",name:"caramelpopcorn 焦糖爆米花",onsale:!1,tag:"sweet crispy rich",rate:"⭐️⭐️⭐️⭐️"},{id:20,price:"48",name:"yogurt 雪酪",onsale:!0,tag:"creamy tangy sweet",rate:"⭐️⭐️⭐️⭐️"}]);e.value=s.map((a,l)=>({url:a.url,id:l,price:a.price,name:a.name,onsale:a.onsale,tag:a.tag,rate:a.rate}))}),(s,a)=>(tn(),en("section",QI,[Sn(jI,{columns:i,rows:e.value},null,8,["rows"])]))}},eD={__name:"Playground",props:{margin:Number},setup(n){const t=n,e=992-t.margin*2,{width:i,height:s}=A1(t.margin),a=yi(()=>u(i.value,s.value)),l=yi(()=>i.value>e?1:2);function u(m,x){return m>e?m<x?m:x:m*2<x?m:x/2}function f(m){const x=m.target.getBoundingClientRect(),M=l.value*(m.pageX-x.x),E=l.value*(m.pageY-x.y);To.NewTarget(M,E,30)}const h=Be(null),d=Be(null),g=Be(null);return es(()=>{const m=[h,d,g].map(x=>{if(x.value.section)return x.value.section});Qi.addSubjectElements(m),Qi.registerAnimationCallback("validIn:S1,S2,S3",To.NextFrame)}),(m,x)=>(tn(),en("div",{id:"playground",onMousemove:f,style:vr({width:a.value+"px",height:a.value*l.value+"px",margin:n.margin+"px auto"})},[Sn(tw,{ref_key:"sectionRef1",ref:h,max:a.value,ratio:l.value},null,8,["max","ratio"]),Sn(EI,{ref_key:"sectionRef2",ref:d,max:a.value,ratio:l.value},null,8,["max","ratio"]),Sn(OI,{ref_key:"sectionRef3",ref:g,max:a.value,ratio:l.value},null,8,["max","ratio"]),Sn(tD)],36))}},nD=Bs(eD,[["__scopeId","data-v-f89f61c2"]]),iD=["href","id"],rD={__name:"NavigationBar",props:{width:Number},setup(n){const t=Be(!1),e=()=>t.value=!t.value,i=Be([]);return es(()=>{const s=document.getElementById("playground").getElementsByTagName("section");i.value=Array.from(s).map(a=>({id:a.id}))}),(s,a)=>(tn(),en("nav",{id:"nav",style:vr({left:t.value?"0":-n.width+"px"})},[(tn(!0),en(bn,null,va(i.value,l=>(tn(),en("div",{key:l.id},[Nt("a",{href:"#"+l.id,id:"to"+l.id,class:"list"},$n(l.id),9,iD)]))),128)),Nt("div",{onClick:e,id:"navSlider"},[Nt("p",null,$n(t.value?"X":"≡"),1)])],4))}},sD=Bs(rD,[["__scopeId","data-v-3feeaaa3"]]),oD={__name:"App",setup(n){return(t,e)=>(tn(),en(bn,null,[Sn(sD,{width:250}),Sn(nD,{margin:20})],64))}};y1(oD).mount("#app");
