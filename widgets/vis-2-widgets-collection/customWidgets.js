var vis2CollectionWidget;(()=>{"use strict";var e={6201:(e,_,s)=>{var t={"./StateCollectionWidget":()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-5c98e6"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),s.e("src_components_CollectionDivider_jsx"),s.e("src_StateCollectionWidget_StateCollectionWidget_jsx")]).then((()=>()=>s(7963))),"./SliderCollectionWidget":()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-5c98e6"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),s.e("src_components_CollectionDivider_jsx")]).then((()=>()=>s(8998))),"./ButtonGroupCollectionWidget":()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-5c98e6"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),s.e("src_components_CollectionDivider_jsx"),s.e("src_ButtonGroupCollectionWidget_ButtonGroupCollectionWidget_jsx")]).then((()=>()=>s(9379))),"./translations":()=>s.e("src_translations_js").then((()=>()=>s(5850))),"./SwitchCollectionWidget":()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-5c98e6"),s.e("vendors-node_modules_mui_material_Switch_Switch_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),s.e("src_components_CollectionDivider_jsx"),s.e("src_SwitchCollectionWidget_SwitchCollectionWidget_jsx")]).then((()=>()=>s(6018)))},o=(e,_)=>(s.R=_,_=s.o(t,e)?t[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),s.R=void 0,_),r=(e,_)=>{if(s.S){var t="default",o=s.S[t];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return s.S[t]=e,s.I(t,_)}};s.d(_,{get:()=>o,init:()=>r})}},_={};function s(t){var o=_[t];if(void 0!==o)return o.exports;var r=_[t]={exports:{}};return e[t].call(r.exports,r,r.exports,s),r.exports}s.m=e,s.c=_,s.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return s.d(_,{a:_}),_},s.d=(e,_)=>{for(var t in _)s.o(_,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:_[t]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((_,t)=>(s.f[t](e,_),_)),[])),s.u=e=>"static/js/"+e+"."+{"vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987":"d3b1496e","vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js":"4b9b1db2","vendors-node_modules_mui_system_esm_RtlProvider_index_js-node_modules_mui_system_esm_Unstable-9da0e4":"116e9fa1","vendors-node_modules_mui_material_Switch_Switch_js":"928081a1","vendors-node_modules_mui_material_index_js":"8ba01614","vendors-node_modules_mui_system_esm_index_js":"b8618c63","node_modules_prop-types_index_js":"7f922324","vendors-node_modules_react-dom_index_js":"190f0c6e",node_modules_react_index_js:"a5285de4","vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-5c98e6":"b06a9988",src_components_CollectionDivider_jsx:"52dabada",src_StateCollectionWidget_StateCollectionWidget_jsx:"8f08cf70",src_ButtonGroupCollectionWidget_ButtonGroupCollectionWidget_jsx:"67455a14",src_translations_js:"03973390",src_SwitchCollectionWidget_SwitchCollectionWidget_jsx:"3e0b8a2d"}[e]+".chunk.js",s.miniCssF=e=>{},s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),s.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),(()=>{var e={},_="iobroker.vis-widgets-react-collection:";s.l=(t,o,r,n)=>{if(e[t])e[t].push(o);else{var i,d;if(void 0!==r)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var u=a[l];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==_+r){i=u;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",_+r),i.src=t),e[t]=[o];var m=(_,s)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(s))),_)return _(s)},c=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),d&&document.head.appendChild(i)}}})(),s.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{s.S={};var e={},_={};s.I=(t,o)=>{o||(o=[]);var r=_[t];if(r||(r=_[t]={}),!(o.indexOf(r)>=0)){if(o.push(r),e[t])return e[t];s.o(s.S,t)||(s.S[t]={});var n=s.S[t],i="iobroker.vis-widgets-react-collection",d=(e,_,s,t)=>{var o=n[e]=n[e]||{},r=o[_];(!r||!r.loaded&&(!t!=!r.eager?t:i>r.from))&&(o[_]={get:s,from:i,eager:!!t})},a=[];if("default"===t)d("@mui/material","*",(()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_system_esm_RtlProvider_index_js-node_modules_mui_system_esm_Unstable-9da0e4"),s.e("vendors-node_modules_mui_material_Switch_Switch_js"),s.e("vendors-node_modules_mui_material_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4")]).then((()=>()=>s(4999))))),d("@mui/system","*",(()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_system_esm_RtlProvider_index_js-node_modules_mui_system_esm_Unstable-9da0e4"),s.e("vendors-node_modules_mui_system_esm_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types")]).then((()=>()=>s(1200))))),d("prop-types","*",(()=>s.e("node_modules_prop-types_index_js").then((()=>()=>s(5173))))),d("react-dom","*",(()=>Promise.all([s.e("vendors-node_modules_react-dom_index_js"),s.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>s(7950))))),d("react","*",(()=>s.e("node_modules_react_index_js").then((()=>()=>s(5043)))));return a.length?e[t]=Promise.all(a).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var _=s.g.document;if(!e&&_&&(_.currentScript&&"SCRIPT"===_.currentScript.tagName.toUpperCase()&&(e=_.currentScript.src),!e)){var t=_.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e=e=>{var _=e=>e.split(".").map((e=>+e==e?+e:e)),s=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),t=s[1]?_(s[1]):[];return s[2]&&(t.length++,t.push.apply(t,_(s[2]))),s[3]&&(t.push([]),t.push.apply(t,_(s[3]))),t},_=(_,s)=>{_=e(_),s=e(s);for(var t=0;;){if(t>=_.length)return t<s.length&&"u"!=(typeof s[t])[0];var o=_[t],r=(typeof o)[0];if(t>=s.length)return"u"==r;var n=s[t],i=(typeof n)[0];if(r!=i)return"o"==r&&"n"==i||"s"==i||"u"==r;if("o"!=r&&"u"!=r&&o!=n)return o<n;t++}},t=e=>{var _=e[0],s="";if(1===e.length)return"*";if(_+.5){s+=0==_?">=":-1==_?"<":1==_?"^":2==_?"~":_>0?"=":"!=";for(var o=1,r=1;r<e.length;r++)o--,s+="u"==(typeof(i=e[r]))[0]?"-":(o>0?".":"")+(o=2,i);return s}var n=[];for(r=1;r<e.length;r++){var i=e[r];n.push(0===i?"not("+d()+")":1===i?"("+d()+" || "+d()+")":2===i?n.pop()+" "+n.pop():t(i))}return d();function d(){return n.pop().replace(/^\((.+)\)$/,"$1")}},o=(_,s)=>{if(0 in _){s=e(s);var t=_[0],r=t<0;r&&(t=-t-1);for(var n=0,i=1,d=!0;;i++,n++){var a,l,u=i<_.length?(typeof _[i])[0]:"";if(n>=s.length||"o"==(l=(typeof(a=s[n]))[0]))return!d||("u"==u?i>t&&!r:""==u!=r);if("u"==l){if(!d||"u"!=u)return!1}else if(d)if(u==l)if(i<=t){if(a!=_[i])return!1}else{if(r?a>_[i]:a<_[i])return!1;a!=_[i]&&(d=!1)}else if("s"!=u&&"n"!=u){if(r||i<=t)return!1;d=!1,i--}else{if(i<=t||l<u!=r)return!1;d=!1}else"s"!=u&&"n"!=u&&(d=!1,i--)}}var m=[],c=m.pop.bind(m);for(n=1;n<_.length;n++){var p=_[n];m.push(1==p?c()|c():2==p?c()&c():p?o(p,s):!c())}return!!c()},r=(e,_)=>e&&s.o(e,_),n=e=>(e.loaded=1,e.get()),i=e=>Object.keys(e).reduce(((_,s)=>(e[s].eager&&(_[s]=e[s]),_)),{}),d=(e,s,t)=>{var o=t?i(e[s]):e[s];return Object.keys(o).reduce(((e,s)=>!e||!o[e].loaded&&_(e,s)?s:e),0)},a=(e,_,s,o)=>"Unsatisfied version "+s+" from "+(s&&e[_][s].from)+" of shared singleton module "+_+" (required "+t(o)+")",l=e=>{throw new Error(e)},u=e=>{"undefined"!==typeof console&&console.warn&&console.warn(e)},m=e=>function(_,t,o,r,n){var i=s.I(_);return i&&i.then&&!o?i.then(e.bind(e,_,s.S[_],t,!1,r,n)):e(_,s.S[_],t,o,r,n)},c=(e,_,s)=>s?s():((e,_)=>l("Shared module "+_+" doesn't exist in shared scope "+e))(e,_),p=m(((e,_,s,t,i,l)=>{if(!r(_,s))return c(e,s,l);var m=d(_,s,t);return o(i,m)||u(a(_,s,m,i)),n(_[s][m])})),f={},h={8437:()=>p("default","react",!1,[0],(()=>s.e("node_modules_react_index_js").then((()=>()=>s(5043))))),5973:()=>p("default","prop-types",!1,[0],(()=>s.e("node_modules_prop-types_index_js").then((()=>()=>s(5173))))),8565:()=>p("default","@mui/system",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_mui_system_esm_RtlProvider_index_js-node_modules_mui_system_esm_Unstable-9da0e4"),s.e("vendors-node_modules_mui_system_esm_index_js")]).then((()=>()=>s(1200))))),3479:()=>p("default","react-dom",!1,[0],(()=>s.e("vendors-node_modules_react-dom_index_js").then((()=>()=>s(7950))))),7085:()=>p("default","@mui/material",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_mui_system_esm_RtlProvider_index_js-node_modules_mui_system_esm_Unstable-9da0e4"),s.e("vendors-node_modules_mui_material_Switch_Switch_js"),s.e("vendors-node_modules_mui_material_index_js")]).then((()=>()=>s(4999)))))},v={webpack_sharing_consume_default_react_react:[8437],"webpack_sharing_consume_default_prop-types_prop-types":[5973],"webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4":[8565,3479],src_components_CollectionDivider_jsx:[7085]},g={};s.f.consumes=(e,_)=>{s.o(v,e)&&v[e].forEach((e=>{if(s.o(f,e))return _.push(f[e]);if(!g[e]){var t=_=>{f[e]=0,s.m[e]=t=>{delete s.c[e],t.exports=_()}};g[e]=!0;var o=_=>{delete f[e],s.m[e]=t=>{throw delete s.c[e],_}};try{var r=h[e]();r.then?_.push(f[e]=r.then(t).catch(o)):t(r)}catch(n){o(n)}}}))}})(),(()=>{var e={vis2CollectionWidget:0};s.f.j=(_,t)=>{var o=s.o(e,_)?e[_]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^webpack_sharing_consume_default_(mui_system_mui_system\-webpack_sharing_consume_default_react\-d\-dde2d4|prop\-types_prop\-types|react_react)$/.test(_))e[_]=0;else{var r=new Promise(((s,t)=>o=e[_]=[s,t]));t.push(o[2]=r);var n=s.p+s.u(_),i=new Error;s.l(n,(t=>{if(s.o(e,_)&&(0!==(o=e[_])&&(e[_]=void 0),o)){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+_+" failed.\n("+r+": "+n+")",i.name="ChunkLoadError",i.type=r,i.request=n,o[1](i)}}),"chunk-"+_,_)}};var _=(_,t)=>{var o,r,n=t[0],i=t[1],d=t[2],a=0;if(n.some((_=>0!==e[_]))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(d)d(s)}for(_&&_(t);a<n.length;a++)r=n[a],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0},t=self.webpackChunkiobroker_vis_widgets_react_collection=self.webpackChunkiobroker_vis_widgets_react_collection||[];t.forEach(_.bind(null,0)),t.push=_.bind(null,t.push.bind(t))})();var t=s(6201);vis2CollectionWidget=t})();
//# sourceMappingURL=customWidgets.js.map