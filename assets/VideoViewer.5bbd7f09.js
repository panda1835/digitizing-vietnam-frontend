import{T as d,w as a,a8 as g,j as c,ap as m,aq as h,ar as P,as as _,d7 as j,aQ as S,b$ as V}from"./index.adc9ed21.js";function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?s(Object(r),!0).forEach(function(n){R(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function R(t,e,r){return e=y(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function T(t,e,r){return e&&l(t.prototype,e),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t){var e=E(t,"string");return typeof e=="symbol"?e:String(e)}function E(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function D(t,e,r){return e=u(e),I(t,b()?Reflect.construct(e,r||[],u(t).constructor):e.apply(t,r))}function I(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return F(t)}function F(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(b=function(){return!!t})()}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},u(t)}function N(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},f(t,e)}var $=d("div")(function(){return{alignItems:"center",display:"flex",width:"100%"}}),B=d("video")(function(){return{maxHeight:"100%",width:"100%"}}),v=function(t){N(e,t);function e(){return x(this,e),D(this,e,arguments)}return T(e,[{key:"render",value:function(){var n=this.props,i=n.captions,O=n.videoOptions,w=n.videoResources;return a($,{children:g(B,p(p({},O),{},{children:[w.map(function(o){return a(c.exports.Fragment,{children:a("source",{src:o.id,type:o.getFormat()})},o.id)}),i.map(function(o){return a(c.exports.Fragment,{children:a("track",{src:o.id,label:o.getDefaultLabel(),srcLang:o.getProperty("language")})},o.id)})]}))})}}]),e}(c.exports.Component);v.defaultProps={captions:[],videoOptions:{},videoResources:[]};var C=function(e,r){var n=r.windowId;return{captions:j(e,{windowId:n})||[],videoOptions:S(e).videoOptions,videoResources:V(e,{windowId:n})||[]}},K=m(_(),P(C,null),h("VideoViewer"));const k=K(v);export{k as default};
