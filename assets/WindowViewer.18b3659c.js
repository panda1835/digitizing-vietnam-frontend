import{T as b,c as f,di as ye,j as p,Y as be,_ as we,w as i,x as me,z as ge,dj as _e,av as W,aw as Z,ax as A,aL as Oe,a8 as h,aE as y,ap as w,aq as m,ar as x,as as B,bG as Pe,dk as je,b8 as L,b9 as s,a1 as N,bx as $e,dl as Ce,da as xe,dm as Ie,dn as Se,dp as Ne,dh as Re,dq as Te,dr as ke,X as De,aM as Ee,cU as Ve,aT as ze,ds as We,aV as Ze,aA as Ae,bZ as Be}from"./index.0d271a03.js";import{S as Le}from"./WorkspaceArea.9002da75.js";const Me=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],qe=t=>{const{absolute:e,children:n,classes:r,flexItem:o,light:c,orientation:a,textAlign:u,variant:v}=t;return ge({root:["root",e&&"absolute",v,c&&"light",a==="vertical"&&"vertical",o&&"flexItem",n&&"withChildren",n&&a==="vertical"&&"withChildrenVertical",u==="right"&&a!=="vertical"&&"textAlignRight",u==="left"&&a!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",a==="vertical"&&"wrapperVertical"]},_e,r)},Ke=b("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.absolute&&e.absolute,e[n.variant],n.light&&e.light,n.orientation==="vertical"&&e.vertical,n.flexItem&&e.flexItem,n.children&&e.withChildren,n.children&&n.orientation==="vertical"&&e.withChildrenVertical,n.textAlign==="right"&&n.orientation!=="vertical"&&e.textAlignRight,n.textAlign==="left"&&n.orientation!=="vertical"&&e.textAlignLeft]}})(({theme:t,ownerState:e})=>f({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:ye(t.palette.divider,.08)},e.variant==="inset"&&{marginLeft:72},e.variant==="middle"&&e.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},e.variant==="middle"&&e.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},e.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>f({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:e})=>f({},e.children&&e.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:e})=>f({},e.children&&e.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>f({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),He=b("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.wrapper,n.orientation==="vertical"&&e.wrapperVertical]}})(({theme:t,ownerState:e})=>f({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},e.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),re=p.exports.forwardRef(function(e,n){const r=be({props:e,name:"MuiDivider"}),{absolute:o=!1,children:c,className:a,component:u=c?"div":"hr",flexItem:v=!1,light:g=!1,orientation:_="horizontal",role:l=u!=="hr"?"separator":void 0,textAlign:d="center",variant:I="fullWidth"}=r,he=we(r,Me),S=f({},r,{absolute:o,component:u,flexItem:v,light:g,orientation:_,role:l,textAlign:d,variant:I}),H=qe(S);return i(Ke,f({as:u,className:me(H.root,a),role:l,ref:n,ownerState:S},he,{children:c?i(He,{className:H.wrapper,ownerState:S,children:c}):null}))});re.muiSkipListHighlight=!0;const Ge=re;var M={},Ue=Z.exports;Object.defineProperty(M,"__esModule",{value:!0});var ne=M.default=void 0,Fe=Ue(W()),Xe=A;ne=M.default=(0,Fe.default)((0,Xe.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"AddCircleOutlineSharp");var q={},Ye=Z.exports;Object.defineProperty(q,"__esModule",{value:!0});var oe=q.default=void 0,Je=Ye(W()),Qe=A;oe=q.default=(0,Je.default)((0,Qe.jsx)("path",{d:"M7 11v2h10v-2zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"RemoveCircleOutlineSharp");function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?G(Object(n),!0).forEach(function(r){et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function et(t,e,n){return e=tt(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tt(t){var e=rt(t,"string");return typeof e=="symbol"?e:String(e)}function rt(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function nt(t){return i(Oe,U(U({},t),{},{children:h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[i("path",{d:"M6,15H9v3h2V13H6Zm9-6V6H13v5h5V9Z"}),i("path",{d:"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8,8,8,0,0,1-8,8Z"})]})}))}function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,at(r.key),r)}}function it(t,e,n){return e&&F(t.prototype,e),n&&F(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function at(t){var e=ct(t,"string");return typeof e=="symbol"?e:String(e)}function ct(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ut(t,e,n){return e=O(e),lt(t,ie()?Reflect.construct(e,n||[],O(t).constructor):e.apply(t,n))}function lt(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return R(t)}function ie(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ie=function(){return!!t})()}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},O(t)}function R(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ft(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},T(t,e)}var st=b("div")({display:"flex",flexDirection:"row",justifyContent:"center"}),ae=function(t){ft(e,t);function e(n){var r;return ot(this,e),r=ut(this,e,[n]),r.handleZoomInClick=r.handleZoomInClick.bind(R(r)),r.handleZoomOutClick=r.handleZoomOutClick.bind(R(r)),r}return it(e,[{key:"handleZoomInClick",value:function(){var r=this.props,o=r.windowId,c=r.updateViewport,a=r.viewer;c(o,{zoom:a.zoom*2})}},{key:"handleZoomOutClick",value:function(){var r=this.props,o=r.windowId,c=r.updateViewport,a=r.viewer;c(o,{zoom:a.zoom/2})}},{key:"render",value:function(){var r=this.props,o=r.t,c=r.zoomToWorld;return h(st,{children:[i(y,{"aria-label":o("zoomIn"),onClick:this.handleZoomInClick,children:i(ne,{})}),i(y,{"aria-label":o("zoomOut"),onClick:this.handleZoomOutClick,children:i(oe,{})}),i(y,{"aria-label":o("zoomReset"),onClick:function(){return c(!1)},children:i(nt,{})})]})}}]),e}(p.exports.Component);ae.defaultProps={t:function(e){return e},updateViewport:function(){},viewer:{},windowId:""};var pt=function(e,n){var r=n.windowId;return{viewer:Pe(e,{windowId:r})}},dt={updateViewport:je},vt=w(B(),x(pt,dt),m("ZoomControls"));const ht=vt(ae);function yt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function X(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,wt(r.key),r)}}function bt(t,e,n){return e&&X(t.prototype,e),n&&X(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function wt(t){var e=mt(t,"string");return typeof e=="symbol"?e:String(e)}function mt(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function gt(t,e,n){return e=P(e),_t(t,ce()?Reflect.construct(e,n||[],P(t).constructor):e.apply(t,n))}function _t(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ot(t)}function Ot(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ce(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ce=function(){return!!t})()}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},P(t)}function Pt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},k(t,e)}var jt=b("div")(function(){return{overflow:"hidden",paddingBottom:.5,textOverflow:"ellipsis",unicodeBidi:"plaintext",whiteSpace:"nowrap",width:"100%"}}),ue=function(t){Pt(e,t);function e(){return yt(this,e),gt(this,e,arguments)}return bt(e,[{key:"render",value:function(){var r=this.props,o=r.canvasCount,c=r.canvasIndex,a=r.canvasLabel,u=r.t;return h(jt,{className:L(s("osd-info")),children:[i(N,{display:"inline",variant:"caption",className:s("canvas-count"),children:u("pagination",{current:c+1,total:o})}),i(N,{display:"inline",variant:"caption",className:s("canvas-label"),children:a&&" \u2022 ".concat(a)})]})}}]),e}(p.exports.Component);ue.defaultProps={canvasLabel:void 0,t:function(){}};var $t=function(e,n){var r=n.windowId,o=$e(e,{windowId:r}),c=Ce(e,{windowId:r}),a=(xe(e,{windowId:r})||{}).id;return{canvasCount:o.length,canvasIndex:c,canvasLabel:Ie(e,{canvasId:a,windowId:r})}},Ct=w(B(),x($t,null),m("ViewerInfo"));const Y=Ct(ue);var K={},xt=Z.exports;Object.defineProperty(K,"__esModule",{value:!0});var D=K.default=void 0,It=xt(W()),St=A;D=K.default=(0,It.default)((0,St.jsx)("path",{d:"m10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"PlayCircleOutlineSharp");function Nt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Tt(r.key),r)}}function Rt(t,e,n){return e&&J(t.prototype,e),n&&J(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Tt(t){var e=kt(t,"string");return typeof e=="symbol"?e:String(e)}function kt(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Dt(t,e,n){return e=j(e),Et(t,le()?Reflect.construct(e,n||[],j(t).constructor):e.apply(t,n))}function Et(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Vt(t)}function Vt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function le(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(le=function(){return!!t})()}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},j(t)}function zt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},E(t,e)}var fe=function(t){zt(e,t);function e(){return Nt(this,e),Dt(this,e,arguments)}return Rt(e,[{key:"render",value:function(){var r=this.props,o=r.hasNextCanvas,c=r.hasPreviousCanvas,a=r.setNextCanvas,u=r.setPreviousCanvas,v=r.t,g=r.viewingDirection,_="ltr",l={},d={};switch(g){case"top-to-bottom":l={transform:"rotate(270deg)"},d={transform:"rotate(90deg)"};break;case"bottom-to-top":l={transform:"rotate(90deg)"},d={transform:"rotate(270deg)"};break;case"right-to-left":_="rtl",l={},d={transform:"rotate(180deg)"};break;default:l={transform:"rotate(180deg)"},d={}}return h("div",{className:L(s("osd-navigation")),dir:_,children:[i(y,{"aria-label":v("previousCanvas"),className:s("previous-canvas-button"),disabled:!c,onClick:function(){c&&u()},children:i(D,{style:l})}),i(y,{"aria-label":v("nextCanvas"),className:s("next-canvas-button"),disabled:!o,onClick:function(){o&&a()},children:i(D,{style:d})})]})}}]),e}(p.exports.Component);fe.defaultProps={hasNextCanvas:!1,hasPreviousCanvas:!1,setNextCanvas:function(){},setPreviousCanvas:function(){},viewingDirection:""};var Wt=function(e,n){var r=n.windowId;return{hasNextCanvas:!!Se(e,{windowId:r}),hasPreviousCanvas:!!Ne(e,{windowId:r}),viewingDirection:Re(e,{windowId:r})}},Zt=function(e,n){var r=n.windowId;return{setNextCanvas:function(){return e(Te(r))},setPreviousCanvas:function(){return e(ke(r))}}},At=w(B(),x(Wt,Zt),m("ViewerNavigation"));const Bt=At(fe);function Q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Lt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Q(Object(n),!0).forEach(function(r){Mt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Mt(t,e,n){return e=se(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ee(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,se(r.key),r)}}function Kt(t,e,n){return e&&ee(t.prototype,e),n&&ee(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function se(t){var e=Ht(t,"string");return typeof e=="symbol"?e:String(e)}function Ht(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Gt(t,e,n){return e=$(e),Ut(t,pe()?Reflect.construct(e,n||[],$(t).constructor):e.apply(t,n))}function Ut(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ft(t)}function Ft(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function pe(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(pe=function(){return!!t})()}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},$(t)}function Xt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&V(t,e)}function V(t,e){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},V(t,e)}var Yt=b(De,{name:"WindowCanvasNavigationControls",slot:"root"})(function(t){var e=t.theme;return{alignItems:"center",backgroundColor:Ee(e.palette.background.paper,.5),bottom:0,cursor:"default",display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center",position:"absolute",textAlign:"center",width:"100%",zIndex:50}}),de=function(t){Xt(e,t);function e(){return qt(this,e),Gt(this,e,arguments)}return Kt(e,[{key:"canvasNavControlsAreStacked",value:function(){var r=this.props.size;return r&&r.width&&r.width<=253}},{key:"render",value:function(){var r=this.props,o=r.showZoomControls,c=r.visible,a=r.windowId,u=r.zoomToWorld;return c?h(Yt,{square:!0,className:L(s("canvas-nav"),this.canvasNavControlsAreStacked()?s("canvas-nav-stacked"):null),elevation:0,children:[h(Le,{direction:this.canvasNavControlsAreStacked()?"column":"row",divider:i(Ge,{orientation:this.canvasNavControlsAreStacked()?"horizontal":"vertical",variant:"middle",flexItem:!0}),spacing:0,children:[o&&i(ht,{windowId:a,zoomToWorld:u}),i(Bt,{windowId:a})]}),i(Y,{windowId:a}),i(ze,Lt({},this.props))]}):i(N,{style:Ve,component:"div",children:i(Y,{windowId:a})})}}]),e}(p.exports.Component);de.defaultProps={showZoomControls:!1,visible:!0};var Jt=function(e,n){var r=n.windowId;return{showZoomControls:Ze(e),visible:Ae(e).focusedWindowId===r}},Qt=w(x(Jt),We.withSize(),m("WindowCanvasNavigationControls"));const er=Qt(de);function tr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function te(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,nr(r.key),r)}}function rr(t,e,n){return e&&te(t.prototype,e),n&&te(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function nr(t){var e=or(t,"string");return typeof e=="symbol"?e:String(e)}function or(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ir(t,e,n){return e=C(e),ar(t,ve()?Reflect.construct(e,n||[],C(t).constructor):e.apply(t,n))}function ar(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return cr(t)}function cr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ve(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ve=function(){return!!t})()}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},C(t)}function ur(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&z(t,e)}function z(t,e){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},z(t,e)}var lr=p.exports.lazy(function(){return Be(()=>import("./OpenSeadragonViewer.11a64a96.js"),["assets/OpenSeadragonViewer.11a64a96.js","assets/index.0d271a03.js","assets/index.a7e00ba8.css","assets/WorkspaceArea.9002da75.js"])}),fr=function(t){ur(e,t);function e(n){var r;return tr(this,e),r=ir(this,e,[n]),r.state={},r}return rr(e,[{key:"render",value:function(){var r=this.props.windowId,o=this.state.hasError;return o?null:i(p.exports.Suspense,{fallback:i("div",{}),children:i(lr,{windowId:r,children:i(er,{windowId:r})})})}}],[{key:"getDerivedStateFromError",value:function(r){return{hasError:!0}}}]),e}(p.exports.Component),sr=w(m("WindowViewer"));const vr=sr(fr);export{vr as default};
