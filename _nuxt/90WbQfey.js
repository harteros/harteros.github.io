const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DD0RpwH6.js","./COHrig3R.js","./entry.BvxQDzai.css","./DGXk8f-b.js"])))=>i.map(i=>d[i]);
var K=e=>{throw TypeError(e)};var fe=(e,a,n)=>a.has(e)||K("Cannot "+n);var O=(e,a,n)=>(fe(e,a,"read from private field"),n?n.call(e):a.get(e)),Y=(e,a,n)=>a.has(e)?K("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,n);import ge from"./L3vUZ5HL.js";import{j as G,d as E,E as w,e as m,W as R,ab as D,w as W,G as I,I as z,O as pe,h as he,ac as be,V as ye,y as ve,H as g,ad as T,J as ne,ae as me,af as ke,$ as X,a7 as $e,o as ae,b as Se,a0 as se,N as M,f as U,n as L,c as oe,t as we,K as xe,L as Oe,M as P,ag as Ce,ah as Ie,_ as je,r as Ae,ai as ze}from"./COHrig3R.js";import{_ as Be}from"./U546MU39.js";import{t as Ne}from"./DGXk8f-b.js";const J={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},Ee=e=>Object.keys(J).reduce((n,t)=>(e[t]!==void 0&&(n[t]=e[t]),n),{}),_e=E({props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1,default:null}}});function qe(e,a,n,t,i,r){const s=ge;return m(),w(s,R(D(e.$props)),null,16)}const le=Object.assign(G(_e,[["render",qe]]),{__name:"UIcon"});function F(e){return typeof e=="string"?`'${e}'`:new Te().serialize(e)}const Te=function(){var a;class e{constructor(){Y(this,a,new Map)}compare(t,i){const r=typeof t,s=typeof i;return r==="string"&&s==="string"?t.localeCompare(i):r==="number"&&s==="number"?t-i:String.prototype.localeCompare.call(this.serialize(t,!0),this.serialize(i,!0))}serialize(t,i){if(t===null)return"null";switch(typeof t){case"string":return i?t:`'${t}'`;case"bigint":return`${t}n`;case"object":return this.$object(t);case"function":return this.$function(t)}return String(t)}serializeObject(t){const i=Object.prototype.toString.call(t);if(i!=="[object Object]")return this.serializeBuiltInType(i.length<10?`unknown:${i}`:i.slice(8,-1),t);const r=t.constructor,s=r===Object||r===void 0?"":r.name;if(s!==""&&globalThis[s]===r)return this.serializeBuiltInType(s,t);if(typeof t.toJSON=="function"){const o=t.toJSON();return s+(o!==null&&typeof o=="object"?this.$object(o):`(${this.serialize(o)})`)}return this.serializeObjectEntries(s,Object.entries(t))}serializeBuiltInType(t,i){const r=this["$"+t];if(r)return r.call(this,i);if(typeof(i==null?void 0:i.entries)=="function")return this.serializeObjectEntries(t,i.entries());throw new Error(`Cannot serialize ${t}`)}serializeObjectEntries(t,i){const r=Array.from(i).sort((o,l)=>this.compare(o[0],l[0]));let s=`${t}{`;for(let o=0;o<r.length;o++){const[l,d]=r[o];s+=`${this.serialize(l,!0)}:${this.serialize(d)}`,o<r.length-1&&(s+=",")}return s+"}"}$object(t){let i=O(this,a).get(t);return i===void 0&&(O(this,a).set(t,`#${O(this,a).size}`),i=this.serializeObject(t),O(this,a).set(t,i)),i}$function(t){const i=Function.prototype.toString.call(t);return i.slice(-15)==="[native code] }"?`${t.name||""}()[native]`:`${t.name}(${t.length})${i.replace(/\s*\n\s*/g,"")}`}$Array(t){let i="[";for(let r=0;r<t.length;r++)i+=this.serialize(t[r]),r<t.length-1&&(i+=",");return i+"]"}$Date(t){try{return`Date(${t.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(t){return`ArrayBuffer[${new Uint8Array(t).join(",")}]`}$Set(t){return`Set${this.$Array(Array.from(t).sort((i,r)=>this.compare(i,r)))}`}$Map(t){return this.serializeObjectEntries("Map",t.entries())}}a=new WeakMap;for(const n of["Error","RegExp","URL"])e.prototype["$"+n]=function(t){return`${n}(${t})`};for(const n of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])e.prototype["$"+n]=function(t){return`${n}[${t.join(",")}]`};for(const n of["BigInt64Array","BigUint64Array"])e.prototype["$"+n]=function(t){return`${n}[${t.join("n,")}${t.length>0?"n":""}]`};return e}();function Z(e,a){return e===a||F(e)===F(a)}function Ue(e,a){const n=V(e),t=V(a);return ue(n,t)}function ue(e,a){var i,r;const n=[],t=new Set([...Object.keys(e.props||{}),...Object.keys(a.props||{})]);if(e.props&&a.props)for(const s of t){const o=e.props[s],l=a.props[s];o&&l?n.push(...ue((i=e.props)==null?void 0:i[s],(r=a.props)==null?void 0:r[s])):(o||l)&&n.push(new ee((l||o).key,o?"removed":"added",l,o))}return t.size===0&&e.hash!==a.hash&&n.push(new ee((a||e).key,"changed",a,e)),n}function V(e,a=""){if(e&&typeof e!="object")return new te(a,e,F(e));const n={},t=[];for(const i in e)n[i]=V(e[i],a?`${a}.${i}`:i),t.push(n[i].hash);return new te(a,e,`{${t.join(":")}}`,n)}class ee{constructor(a,n,t,i){this.key=a,this.type=n,this.newValue=t,this.oldValue=i}toString(){return this.toJSON()}toJSON(){var a;switch(this.type){case"added":return`Added   \`${this.key}\``;case"removed":return`Removed \`${this.key}\``;case"changed":return`Changed \`${this.key}\` from \`${((a=this.oldValue)==null?void 0:a.toString())||"-"}\` to \`${this.newValue.toString()}\``}}}class te{constructor(a,n,t,i){this.key=a,this.value=n,this.hash=t,this.props=i}toString(){return this.props?`{${Object.keys(this.props).join(",")}}`:JSON.stringify(this.value)}toJSON(){const a=this.key||".";return this.props?`${a}({${Object.keys(this.props).join(",")}})`:`${a}(${this.value})`}}const Le=E({inheritAttrs:!1,props:{...J,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:[Boolean,String],default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function a(t,i){const r=Ue(t,i).reduce((l,d)=>(d.type==="added"&&l.add(d.key),l),new Set),s=Object.fromEntries(Object.entries(t).filter(([l])=>!r.has(l))),o=Object.fromEntries(Object.entries(i).filter(([l])=>!r.has(l)));return Z(s,o)}function n(t,i,{isActive:r,isExactActive:s}){if(e.exactQuery==="partial"){if(!a(t.query,i.query))return e.inactiveClass}else if(e.exactQuery===!0&&!Z(t.query,i.query))return e.inactiveClass;return e.exactHash&&t.hash!==i.hash?e.inactiveClass:e.exact&&s||!e.exact&&r?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),Pe=["href","aria-disabled","role","rel","target","tabindex","onClick"];function Re(e,a,n,t,i,r){const s=Be;return e.to?(m(),w(s,z({key:1},e.$props,{custom:""}),{default:W(({route:o,href:l,target:d,rel:u,navigate:f,isActive:p,isExactActive:b,isExternal:k})=>[he("a",z(e.$attrs,{href:e.disabled?void 0:l,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:u,target:d,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(o,e._.provides[be]||e.$route,{isActive:p,isExactActive:b}),tabindex:e.disabled?-1:void 0,onClick:v=>!k&&!e.disabled&&f(v)}),[I(e.$slots,"default",R(D({isActive:e.active!==void 0?e.active:e.exact?b:p})))],16,Pe)]),_:3},16)):(m(),w(pe(e.as),z({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:W(()=>[I(e.$slots,"default",R(D({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const de=Object.assign(G(Le,[["render",Re]]),{__name:"ULink"}),De=(e,a,n,t,i=!1)=>{const r=ye(),s=ve(),o=g(()=>{var p;const d=T(a),u=T(n),f=T(t);return ne((d==null?void 0:d.strategy)||((p=s.ui)==null?void 0:p.strategy),f?{wrapper:f}:{},d||{},i?me(s.ui,e,{}):{},u||{})}),l=g(()=>ke(r,["class"]));return{ui:o,attrs:l}};function We({ui:e,props:a}){const n=$e();if(se("ButtonGroupContextConsumer",!0),X("ButtonGroupContextConsumer",!1))return{size:g(()=>a.size),rounded:g(()=>e.value.rounded)};let i=n.parent,r;for(;i&&!r;){if(i.type.name==="ButtonGroup"){r=X(`group-${i.uid}`);break}i=i.parent}const s=g(()=>r==null?void 0:r.value.children.indexOf(n));return ae(()=>{r==null||r.value.register(n)}),Se(()=>{r==null||r.value.unregister(n)}),{size:g(()=>r!=null&&r.value?(r==null?void 0:r.value.size)??e.value.default.size:a.size),rounded:g(()=>!r||s.value===-1?e.value.rounded:r.value.children.length===1?r.value.ui.rounded:s.value===0?r.value.rounded.start:s.value===r.value.children.length-1?r.value.rounded.end:"rounded-none")}}const Me={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},Fe={option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}}};({...Fe.option});const y=ne(M.ui.strategy,M.ui.button,Me),Ve=E({components:{UIcon:le,ULink:de},inheritAttrs:!1,props:{...J,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>y.default.size,validator(e){return Object.keys(y.size).includes(e)}},color:{type:String,default:()=>y.default.color,validator(e){return[...M.ui.colors,...Object.keys(y.color)].includes(e)}},variant:{type:String,default:()=>y.default.variant,validator(e){return[...Object.keys(y.variant),...Object.values(y.color).flatMap(a=>Object.keys(a))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>y.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:a}){const{ui:n,attrs:t}=De("button",xe(e,"ui"),y),{size:i,rounded:r}=We({ui:n,props:e}),s=g(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),o=g(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),l=g(()=>e.square||!a.default&&!e.label),d=g(()=>{var h,x;const v=((x=(h=n.value.color)==null?void 0:h[e.color])==null?void 0:x[e.variant])||n.value.variant[e.variant];return Oe(P(n.value.base,n.value.font,r.value,n.value.size[i.value],n.value.gap[i.value],e.padded&&n.value[l.value?"square":"padding"][i.value],v==null?void 0:v.replaceAll("{color}",e.color),e.block?n.value.block:n.value.inline),e.class)}),u=g(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),f=g(()=>e.loading&&!s.value?e.loadingIcon:e.trailingIcon||e.icon),p=g(()=>P(n.value.icon.base,n.value.icon.size[i.value],e.loading&&n.value.icon.loading)),b=g(()=>P(n.value.icon.base,n.value.icon.size[i.value],e.loading&&!s.value&&n.value.icon.loading)),k=g(()=>Ee(e));return{ui:n,attrs:t,isLeading:s,isTrailing:o,isSquare:l,buttonClass:d,leadingIconName:u,trailingIconName:f,leadingIconClass:p,trailingIconClass:b,linkProps:k}}});function Ge(e,a,n,t,i,r){const s=le,o=de;return m(),w(o,z({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:W(()=>[I(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(m(),w(s,{key:0,name:e.leadingIconName,class:L(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):U("",!0)]),I(e.$slots,"default",{},()=>[e.label?(m(),oe("span",{key:0,class:L([e.truncate?e.ui.truncate:""])},we(e.label),3)):U("",!0)]),I(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(m(),w(s,{key:0,name:e.trailingIconName,class:L(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):U("",!0)])]),_:3},16,["type","disabled","class"])}const ft=Object.assign(G(Ve,[["render",Ge]]),{__name:"UButton"}),B=(e,a)=>{const n=e._conditions;return n.length>0?`(${n.join(` ${a} `)})`:""},N=e=>{const a=[],n={_conditions:a,where(t,i,r){let s;switch(i.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(r)){const o=r.map(l=>C(l)).join(", ");s=`"${String(t)}" ${i.toUpperCase()} (${o})`}else throw new TypeError(`Value for ${i} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(r)&&r.length===2)s=`"${String(t)}" ${i.toUpperCase()} ${C(r[0])} AND ${C(r[1])}`;else throw new Error(`Value for ${i} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":s=`"${String(t)}" ${i.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":s=`"${String(t)}" ${i.toUpperCase()} ${C(r)}`;break;default:s=`"${String(t)}" ${i} ${C(typeof r=="boolean"?Number(r):r)}`}return a.push(`${s}`),n},andWhere(t){const i=t(N());return a.push(B(i,"AND")),n},orWhere(t){const i=t(N());return a.push(B(i,"OR")),n}};return n},Je=(e,a)=>{const n={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},t={__params:n,andWhere(r){const s=r(N());return n.conditions.push(B(s,"AND")),t},orWhere(r){const s=r(N());return n.conditions.push(B(s,"OR")),t},path(r){return t.where("path","=",Ce(r))},skip(r){return n.offset=r,t},where(r,s,o){return t.andWhere(l=>l.where(String(r),s,o)),t},limit(r){return n.limit=r,t},select(...r){return r.length&&n.selectedFields.push(...r),t},order(r,s){return n.orderBy.push(`"${String(r)}" ${s}`),t},async all(){return a(e,i()).then(r=>r||[])},async first(){return a(e,i({limit:1})).then(r=>r[0]||null)},async count(r="*",s=!1){return a(e,i({count:{field:String(r),distinct:s}})).then(o=>o[0].count)}};function i(r={}){let s="SELECT ";if(r!=null&&r.count)s+=`COUNT(${r.count.distinct?"DISTINCT ":""}${r.count.field}) as count`;else{const l=Array.from(new Set(n.selectedFields));s+=l.length>0?l.map(d=>`"${String(d)}"`).join(", "):"*"}s+=` FROM ${Ne[String(e)]}`,n.conditions.length>0&&(s+=` WHERE ${n.conditions.join(" AND ")}`),n.orderBy.length>0?s+=` ORDER BY ${n.orderBy.join(", ")}`:s+=" ORDER BY stem ASC";const o=(r==null?void 0:r.limit)||n.limit;return o>0&&(n.offset>0?s+=` LIMIT ${o} OFFSET ${n.offset}`:s+=` LIMIT ${o}`),s}return t};function C(e){return`'${String(e).replace(/'/g,"''")}'`}const Qe=/\d/,He=["-","_","/","."];function Ke(e=""){if(!Qe.test(e))return e!==e.toLowerCase()}function Ye(e,a){const n=He,t=[];if(!e||typeof e!="string")return t;let i="",r,s;for(const o of e){const l=n.includes(o);if(l===!0){t.push(i),i="",r=void 0;continue}const d=Ke(o);if(s===!1){if(r===!1&&d===!0){t.push(i),i=o,r=d;continue}if(r===!0&&d===!1&&i.length>1){const u=i.at(-1);t.push(i.slice(0,Math.max(0,i.length-1))),i=u+o,r=d;continue}}i+=o,r=d,s=l}return t.push(i),t}function Xe(e){return e?e[0].toUpperCase()+e.slice(1):""}function Ze(e,a){return e?(Array.isArray(e)?e:Ye(e)).map(n=>Xe(a!=null&&a.normalize?n.toLowerCase():n)).join(""):""}async function et(e,a=[]){var d;const n=e.__params;(d=n==null?void 0:n.orderBy)!=null&&d.length||(e=e.order("stem","ASC"));const t=await e.orWhere(u=>u.where("navigation","<>","false").where("navigation","IS NULL")).select("navigation","stem","path","title","meta",...a||[]).all(),{contents:i,configs:r}=t.reduce((u,f)=>{var p;if(String(f.stem).split("/").pop()===".navigation"){f.title=((p=f.title)==null?void 0:p.toLowerCase())==="navigation"?"":f.title;const b=f.path.split("/").slice(0,-1).join("/")||"/";u.configs[b]={...f,...f.body}}else u.contents.push(f);return u},{configs:{},contents:[]}),s=u=>({...re(["title",...a])(u),...u.meta,...ie(u==null?void 0:u.navigation)?u.navigation:{}}),o=u=>({...re(["title",...a])(u),...ie(u==null?void 0:u.navigation)?u.navigation:{}}),l=i.reduce((u,f)=>{var Q;const p=f.path.substring(1).split("/"),b=f.stem.split("/"),k=!!((Q=b[b.length-1])!=null&&Q.match(/([1-9]\d*\.)?index/g)),v=c=>({title:c.title,path:c.path,stem:c.stem,children:[],...o(c)}),h=v(f);if(k){const c=r[h.path];if(typeof(c==null?void 0:c.navigation)<"u"&&(c==null?void 0:c.navigation)===!1)return u;if(f.path!=="/"){const $=v(f);h.children.push($)}c&&Object.assign(h,s(c))}if(p.length===1){const c=u.find($=>$.path===h.path&&$.page===!1);return k&&c?Object.assign(c,{page:void 0,children:[...h.children,...c.children]}):u.push(h),u}const x=p.slice(0,-1).reduce((c,$,H)=>{const q="/"+p.slice(0,H+1).join("/"),S=r[q];if(typeof(S==null?void 0:S.navigation)<"u"&&S.navigation===!1)return[];let j=c.find(A=>A.path===q);if(!j){const A=S?s(S):{};j={...A,title:A.title||tt($),path:q,stem:b.slice(0,H+1).join("/"),children:[],page:!1},c.push(j)}return j.children},u),_=x.find(c=>c.path===h.path&&c.page===!1);return _?Object.assign(_,{...h,page:void 0,children:[...h.children,..._.children]}):x.push(h),u},[]);return ce(l)}function ce(e){var n;const a=e;for(const t of a)(n=t.children)!=null&&n.length?ce(t.children):delete t.children;return e}function re(e){return a=>(a=a||{},e&&e.length?e.filter(n=>typeof a[n]<"u").reduce((n,t)=>Object.assign(n,{[t]:a[t]}),{}):a)}function ie(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}const tt=e=>e.split(/[\s-]/g).map(Ze).join(" "),rt=e=>{var n,t;const a=(t=(n=Ie())==null?void 0:n.ssrContext)==null?void 0:t.event;return Je(e,(i,r)=>it(a,i,r))};function gt(e,a){return at(e,n=>et(n,a))}async function it(e,a,n){return nt(a,n)}async function nt(e,a){return await je(()=>import("./DD0RpwH6.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.loadDatabaseAdapter(e)).then(t=>t.all(a))}function at(e,a){const n=rt(e),t={where(i,r,s){return n.where(String(i),r,s),t},andWhere(i){return n.andWhere(i),t},orWhere(i){return n.orWhere(i),t},order(i,r){return n.order(String(i),r),t},then(i,r){return a(n).then(i,r)},catch(i){return this.then(void 0,i)},finally(i){return this.then(void 0,void 0).finally(i)},get[Symbol.toStringTag](){return"Promise"}};return t}const st=Symbol.for("nuxt:client-only"),pt=E({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:a,attrs:n}){const t=Ae(!1);return ae(()=>{t.value=!0}),se(st,!0),i=>{var l;if(t.value)return(l=a.default)==null?void 0:l.call(a);const r=a.fallback||a.placeholder;if(r)return r();const s=i.fallback||i.placeholder||"",o=i.fallbackTag||i.placeholderTag||"span";return oe(o,n,s)}}}),ht=()=>ze("color-mode").value;export{le as _,ft as a,pt as b,De as c,We as d,de as e,gt as f,rt as q,ht as u};
