import{av as w,aw as _,ax as b,w as i,a8 as g,a1 as P,an as j,j as O,ap as I,aq as S,ar as z,as as C,bz as D,bX as H}from"./index.adc9ed21.js";import{G as s}from"./WorkspaceArea.51544a8e.js";var f={},T=_.exports;Object.defineProperty(f,"__esModule",{value:!0});var h=f.default=void 0,x=T(w()),R=b;h=f.default=(0,x.default)((0,R.jsx)("path",{d:"M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7zm-4 6h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"}),"ListSharp");function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,E(o.key),o)}}function q(t,e,n){return e&&p(t.prototype,e),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function E(t){var e=M(t,"string");return typeof e=="symbol"?e:String(e)}function M(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function V(t,e,n){return e=a(e),$(t,v()?Reflect.construct(e,n||[],a(t).constructor):e.apply(t,n))}function $(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function v(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(v=function(){return!!t})()}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},a(t)}function d(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,r){return o.__proto__=r,o},u(t,e)}var y=function(t){B(e,t);function e(n){var o;return k(this,e),o=V(this,e,[n]),o.openCollectionDialog=o.openCollectionDialog.bind(d(o)),o}return q(e,[{key:"openCollectionDialog",value:function(){var o=this.props,r=o.collectionPath,l=o.manifestId,c=o.showCollectionDialog,m=o.windowId;c(l,r.slice(0,-1),m)}},{key:"render",value:function(){var o=this.props.t;return i(s,{container:!0,justifyContent:"center",alignItems:"center",children:g(s,{container:!0,direction:"column",alignItems:"center",children:[i(P,{variant:"h4",paragraph:!0,children:i("em",{children:o("noItemSelected")})}),i(j,{"aria-label":"show collection",color:"primary",variant:"contained",onClick:this.openCollectionDialog,startIcon:i(h,{}),children:o("showCollection")})]})})}}]),e}(O.exports.Component);y.defaultProps={collectionPath:[],manifestId:null,t:function(){},windowId:null};var N=function(e,n){var o=n.windowId,r=D(e,{windowId:o})||{},l=r.collectionPath,c=r.manifestId;return{collectionPath:l,manifestId:c}},G={showCollectionDialog:H},L=I(C(),z(N,G),S("SelectCollection"));const X=L(y);export{X as default};
