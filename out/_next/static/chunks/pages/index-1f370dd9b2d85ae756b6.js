(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),a=n(6860),o=n(379),i=n(8206);e.exports=function(e){return r(e)||a(e)||o(e)||i()}},2167:function(e,t,n){"use strict";var r=n(3038),a=n(862);t.default=void 0;var o=a(n(7294)),i=n(9414),c=n(4651),s=n(7426),u={};function l(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=(0,c.useRouter)(),f=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,v=e.shallow,y=e.scroll,_=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var x=(t=o.Children.only(h))&&"object"===typeof t&&t.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),b=r(g,2),j=b[0],M=b[1],w=o.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);(0,o.useEffect)((function(){var e=M&&n&&(0,i.isLocalURL)(d),t="undefined"!==typeof _?_:a&&a.locale,r=u[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(a,d,p,{locale:t})}),[p,d,M,_,n,a]);var O={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:c}))}(e,a,d,p,m,v,y,_)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof _?_:a&&a.locale,C=a&&a.isLocaleDomain&&(0,i.getDomainLocale)(p,k,a&&a.locales,a&&a.domainLocales);O.href=C||(0,i.addBasePath)((0,i.addLocale)(p,k,a&&a.defaultLocale))}return o.default.cloneElement(t,O)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=(0,a.useRef)(),u=(0,a.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=n(7294),o=n(3447),i="undefined"!==typeof IntersectionObserver;var c=new Map},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},2775:function(e,t,n){"use strict";var r=n(9713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(o=n(3244))&&o.__esModule?o:{default:o},s=n(3398),u=n(1165),l=n(6393);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=h.length;s<u;s++){var l=h[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],d=r[l]||new Set;"name"===l&&i||!d.has(f)?(d.add(f),r[l]=d):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,n=(0,i.useContext)(s.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};t.default=v},3244:function(e,t,n){"use strict";var r=n(319),a=n(4575),o=n(3913),i=(n(1506),n(2205)),c=n(8585),s=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),f=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},6124:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),a=n(9008),o=n(1664),i=n(5323),c=n.n(i);function s(){return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:c().main,children:[(0,r.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,r.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,r.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,r.jsx)("code",{className:c().code,children:"pages/index.js"})]}),(0,r.jsxs)("div",{className:c().grid,children:[(0,r.jsx)(o.default,{href:"/about",children:(0,r.jsx)("p",{children:"Find in-depth information about Next.js features and API."})}),(0,r.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,r.jsx)("h2",{children:"Learn \u2192"}),(0,r.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,r.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:c().card,children:[(0,r.jsx)("h2",{children:"Examples \u2192"}),(0,r.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,r.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:c().card,children:[(0,r.jsx)("h2",{children:"Deploy \u2192"}),(0,r.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,r.jsx)("footer",{className:c().footer,children:(0,r.jsx)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer"})})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6124)}])},5323:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},9008:function(e,t,n){e.exports=n(2775)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);