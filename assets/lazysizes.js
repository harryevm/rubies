/*!
 * lazysizes 4.1.2
 * https://github.com/aFarkas/lazysizes
 *//*! lazysizes - v4.1.7 */(function(n,l){var r=function(W){l(n.lazySizes,W),n.removeEventListener("lazyunveilread",r,!0)};l=l.bind(null,n,n.document),typeof module=="object"&&module.exports?l(require("lazysizes")):n.lazySizes?r():n.addEventListener("lazyunveilread",r,!0)})(window,function(n,l,r,W){"use strict";function d(i){var a=getComputedStyle(i,null)||{},c=a.fontFamily||"",m=c.match(t)||"",e=m&&c.match(y)||"";return e&&(e=e[1]),{fit:m&&m[1]||"",position:S[e]||e||"center"}}function I(i,a){var c,m,e=r.cfg,f=i.cloneNode(!1),w=f.style,x=function(){var u=i.currentSrc||i.src;u&&m!==u&&(m=u,w.backgroundImage="url("+(L.test(u)?JSON.stringify(u):u)+")",c||(c=!0,r.rC(f,e.loadingClass),r.aC(f,e.loadedClass)))},s=function(){r.rAF(x)};i._lazysizesParentFit=a.fit,i.addEventListener("lazyloaded",s,!0),i.addEventListener("load",s,!0),f.addEventListener("load",function(){var u=f.currentSrc||f.src;u&&u!=z&&(f.src=z,f.srcset="")}),r.rAF(function(){var u=i,C=i.parentNode;C.nodeName.toUpperCase()=="PICTURE"&&(u=C,C=C.parentNode),r.rC(f,e.loadedClass),r.rC(f,e.lazyClass),r.aC(f,e.loadingClass),r.aC(f,e.objectFitClass||"lazysizes-display-clone"),f.getAttribute(e.srcsetAttr)&&f.setAttribute(e.srcsetAttr,""),f.getAttribute(e.srcAttr)&&f.setAttribute(e.srcAttr,""),f.src=z,f.srcset="",w.backgroundRepeat="no-repeat",w.backgroundPosition=a.position,w.backgroundSize=a.fit,u.style.display="none",i.setAttribute("data-parent-fit",a.fit),i.setAttribute("data-parent-container","prev"),C.insertBefore(f,u),i._lazysizesParentFit&&delete i._lazysizesParentFit,i.complete&&x()})}var R=l.createElement("a").style,$="objectFit"in R,A=$&&"objectPosition"in R,t=/object-fit["']*\s*:\s*["']*(contain|cover)/,y=/object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,z="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",L=/\(|\)|'/,S={center:"center","50% 50%":"center"};if(!$||!A){var o=function(i){if(i.detail.instance==r){var a=i.target,c=d(a);!c.fit||$&&c.position=="center"||I(a,c)}};n.addEventListener("lazyunveilread",o,!0),W&&W.detail&&o(W)}});/*! lazysizes - v4.1.7 */(function(n,l){var r=function(){l(n.lazySizes),n.removeEventListener("lazyunveilread",r,!0)};l=l.bind(null,n,n.document),typeof module=="object"&&module.exports?l(require("lazysizes"),require("../fix-ios-sizes/fix-ios-sizes")):n.lazySizes?r():n.addEventListener("lazyunveilread",r,!0)})(window,function(n,l,r){"use strict";var W,d=r&&r.cfg||n.lazySizesConfig,I=l.createElement("img"),R="sizes"in I&&"srcset"in I,$=/\s+\d+h/g,A=function(){var t=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,y=Array.prototype.forEach;return function(){var z=l.createElement("img"),L=function(i){var a,c,m=i.getAttribute(lazySizesConfig.srcsetAttr);m&&((c=m.match(t))&&(a=c[2]=="w"?c[1]/c[3]:c[3]/c[1])&&i.setAttribute("data-aspectratio",a),i.setAttribute(lazySizesConfig.srcsetAttr,m.replace($,"")))},S=function(i){var a=i.target.parentNode;a&&a.nodeName=="PICTURE"&&y.call(a.getElementsByTagName("source"),L),L(i.target)},o=function(){z.currentSrc&&l.removeEventListener("lazybeforeunveil",S)};l.addEventListener("lazybeforeunveil",S),z.onload=o,z.onerror=o,z.srcset="data:,a 1w 1h",z.complete&&o()}}();if(d||(d={},n.lazySizesConfig=d),d.supportsType||(d.supportsType=function(t){return!t}),!n.picturefill&&!d.pf){if(n.HTMLPictureElement&&R)return l.msElementsFromPoint&&A(navigator.userAgent.match(/Edge\/(\d+)/)),void(d.pf=function(){});d.pf=function(t){var y,z;if(!n.picturefill)for(y=0,z=t.elements.length;y<z;y++)W(t.elements[y])},W=function(){var t=function(e,f){return e.w-f.w},y=/^\s*\d+\.*\d*px\s*$/,z=function(e){var f,w,x=e.length,s=e[x-1],u=0;for(u;u<x;u++)if(s=e[u],s.d=s.w/e.w,s.d>=e.d){!s.cached&&(f=e[u-1])&&f.d>e.d-.13*Math.pow(e.d,2.2)&&(w=Math.pow(f.d-.6,1.6),f.cached&&(f.d+=.15*w),f.d+(s.d-e.d)*w>e.d&&(s=f));break}return s},L=function(){var e,f=/(([^,\s].[^\s]+)\s+(\d+)w)/g,w=/\s/,x=function(s,u,C,N){e.push({c:u,u:C,w:1*N})};return function(s){return e=[],s=s.trim(),s.replace($,"").replace(f,x),e.length||!s||w.test(s)||e.push({c:s,u:s,w:99}),e}}(),S=function(){S.init||(S.init=!0,addEventListener("resize",function(){var e,f=l.getElementsByClassName("lazymatchmedia"),w=function(){var x,s;for(x=0,s=f.length;x<s;x++)W(f[x])};return function(){clearTimeout(e),e=setTimeout(w,66)}}()))},o=function(e,f){var w,x=e.getAttribute("srcset")||e.getAttribute(d.srcsetAttr);!x&&f&&(x=e._lazypolyfill?e._lazypolyfill._set:e.getAttribute(d.srcAttr)||e.getAttribute("src")),e._lazypolyfill&&e._lazypolyfill._set==x||(w=L(x||""),f&&e.parentNode&&(w.isPicture=e.parentNode.nodeName.toUpperCase()=="PICTURE",w.isPicture&&n.matchMedia&&(r.aC(e,"lazymatchmedia"),S())),w._set=x,Object.defineProperty(e,"_lazypolyfill",{value:w,writable:!0}))},i=function(e){var f=n.devicePixelRatio||1,w=r.getX&&r.getX(e);return Math.min(w||f,2.5,f)},a=function(e){return n.matchMedia?(a=function(f){return!f||(matchMedia(f)||{}).matches})(e):!e},c=function(e){var f,w,x,s,u,C,N;if(s=e,o(s,!0),u=s._lazypolyfill,u.isPicture){for(w=0,f=e.parentNode.getElementsByTagName("source"),x=f.length;w<x;w++)if(d.supportsType(f[w].getAttribute("type"),e)&&a(f[w].getAttribute("media"))){s=f[w],o(s),u=s._lazypolyfill;break}}return u.length>1?(N=s.getAttribute("sizes")||"",N=y.test(N)&&parseInt(N,10)||r.gW(e,e.parentNode),u.d=i(e),!u.src||!u.w||u.w<N?(u.w=N,C=z(u.sort(t)),u.src=C):C=u.src):C=u[0],C},m=function(e){if(!R||!e.parentNode||e.parentNode.nodeName.toUpperCase()=="PICTURE"){var f=c(e);f&&f.u&&e._lazypolyfill.cur!=f.u&&(e._lazypolyfill.cur=f.u,f.cached=!0,e.setAttribute(d.srcAttr,f.u),e.setAttribute("src",f.u))}};return m.parse=L,m}(),d.loadedClass&&d.loadingClass&&function(){var t=[];['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(y){t.push(y+d.loadedClass),t.push(y+d.loadingClass)}),d.pf({elements:l.querySelectorAll(t.join(", "))})}()}}),function(n,l){var r=function(){l(n.lazySizes),n.removeEventListener("lazyunveilread",r,!0)};l=l.bind(null,n,n.document),typeof module=="object"&&module.exports?l(require("lazysizes")):n.lazySizes?r():n.addEventListener("lazyunveilread",r,!0)}(window,function(n,l,r){"use strict";if(!!n.addEventListener){var W=/\s+/g,d=/\s*\|\s+|\s+\|\s*/g,I=/^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,R=/^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,$=/\(|\)|'/,A={contain:1,cover:1},t=function(o){var i=r.gW(o,o.parentNode);return(!o._lazysizesWidth||i>o._lazysizesWidth)&&(o._lazysizesWidth=i),o._lazysizesWidth},y=function(o){var i;return i=(getComputedStyle(o)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!A[i]&&A[o.style.backgroundSize]&&(i=o.style.backgroundSize),i},z=function(o,i){if(i){var a=i.match(R);a&&a[1]?o.setAttribute("type",a[1]):o.setAttribute("media",lazySizesConfig.customMedia[i]||i)}},L=function(o,i,a){var c=l.createElement("picture"),m=i.getAttribute(lazySizesConfig.sizesAttr),e=i.getAttribute("data-ratio"),f=i.getAttribute("data-optimumx");i._lazybgset&&i._lazybgset.parentNode==i&&i.removeChild(i._lazybgset),Object.defineProperty(a,"_lazybgset",{value:i,writable:!0}),Object.defineProperty(i,"_lazybgset",{value:c,writable:!0}),o=o.replace(W," ").split(d),c.style.display="none",a.className=lazySizesConfig.lazyClass,o.length==1&&!m&&(m="auto"),o.forEach(function(w){var x,s=l.createElement("source");m&&m!="auto"&&s.setAttribute("sizes",m),(x=w.match(I))?(s.setAttribute(lazySizesConfig.srcsetAttr,x[1]),z(s,x[2]),z(s,x[3])):s.setAttribute(lazySizesConfig.srcsetAttr,w),c.appendChild(s)}),m&&(a.setAttribute(lazySizesConfig.sizesAttr,m),i.removeAttribute(lazySizesConfig.sizesAttr),i.removeAttribute("sizes")),f&&a.setAttribute("data-optimumx",f),e&&a.setAttribute("data-ratio",e),c.appendChild(a),i.appendChild(c)},S=function(o){if(!!o.target._lazybgset){var i=o.target,a=i._lazybgset,c=i.currentSrc||i.src;if(c){var m=r.fire(a,"bgsetproxy",{src:c,useSrc:$.test(c)?JSON.stringify(c):c});m.defaultPrevented||(a.style.backgroundImage="url("+m.detail.useSrc+")")}i._lazybgsetLoading&&(r.fire(a,"_lazyloaded",{},!1,!0),delete i._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(o){var i,a,c;o.defaultPrevented||!(i=o.target.getAttribute("data-bgset"))||(c=o.target,a=l.createElement("img"),a.alt="",a._lazybgsetLoading=!0,o.detail.firesLoad=!0,L(i,c,a),setTimeout(function(){r.loader.unveil(a),r.rAF(function(){r.fire(a,"_lazyloaded",{},!0,!0),a.complete&&S({target:a})})}))}),l.addEventListener("load",S,!0),n.addEventListener("lazybeforesizes",function(o){if(o.detail.instance==r&&o.target._lazybgset&&o.detail.dataAttr){var i=o.target._lazybgset,a=y(i);A[a]&&(o.target._lazysizesParentFit=a,r.rAF(function(){o.target.setAttribute("data-parent-fit",a),o.target._lazysizesParentFit&&delete o.target._lazysizesParentFit}))}},!0),l.documentElement.addEventListener("lazybeforesizes",function(o){o.defaultPrevented||!o.target._lazybgset||o.detail.instance!=r||(o.detail.width=t(o.target._lazybgset))})}});/*! lazysizes - v4.1.7 */(function(n,l){var r=function(){l(n.lazySizes),n.removeEventListener("lazyunveilread",r,!0)};l=l.bind(null,n,n.document),typeof module=="object"&&module.exports?l(require("lazysizes")):n.lazySizes?r():n.addEventListener("lazyunveilread",r,!0)})(window,function(n,l,r){"use strict";if(n.addEventListener){var W=n.requestAnimationFrame||setTimeout,d=function(){var I,R,$,A,t=r.cfg,y={"data-bgset":1,"data-include":1,"data-poster":1,"data-bg":1,"data-script":1},z="(\\s|^)("+t.loadedClass,L=l.documentElement,S=function(i){W(function(){r.rC(i,t.loadedClass),t.unloadedClass&&r.rC(i,t.unloadedClass),r.aC(i,t.lazyClass),(i.style.display=="none"||i.parentNode&&i.parentNode.style.display=="none")&&setTimeout(function(){r.loader.unveil(i)},0)})},o=function(i){var a,c,m,e;for(a=0,c=i.length;a<c;a++)m=i[a],e=m.target,e.getAttribute(m.attributeName)&&(e.localName=="source"&&e.parentNode&&(e=e.parentNode.querySelector("img")),e&&z.test(e.className)&&S(e))};t.unloadedClass&&(z+="|"+t.unloadedClass),z+="|"+t.loadingClass+")(\\s|$)",z=new RegExp(z),y[t.srcAttr]=1,y[t.srcsetAttr]=1,n.MutationObserver?($=new MutationObserver(o),I=function(){A||(A=!0,$.observe(L,{subtree:!0,attributes:!0,attributeFilter:Object.keys(y)}))},R=function(){A&&(A=!1,$.disconnect())}):(L.addEventListener("DOMAttrModified",function(){var i,a=[],c=function(){o(a),a=[],i=!1};return function(m){A&&y[m.attrName]&&m.newValue&&(a.push({target:m.target,attributeName:m.attrName}),i||(setTimeout(c),i=!0))}}(),!0),I=function(){A=!0},R=function(){A=!1}),addEventListener("lazybeforeunveil",R,!0),addEventListener("lazybeforeunveil",I),addEventListener("lazybeforesizes",R,!0),addEventListener("lazybeforesizes",I),I(),removeEventListener("lazybeforeunveil",d)};addEventListener("lazybeforeunveil",d)}});/*! lazysizes - v4.1.7 */(function(n,l){var r=function(){l(n.lazySizes),n.removeEventListener("lazyunveilread",r,!0)};l=l.bind(null,n,n.document),typeof module=="object"&&module.exports?l(require("lazysizes")):n.lazySizes?r():n.addEventListener("lazyunveilread",r,!0)})(window,function(n,l,r){"use strict";if(n.addEventListener){var W=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,d=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,I=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,R=/^picture$/i,$=function(t){return getComputedStyle(t,null)||{}},A={getParent:function(t,y){var z=t,L=t.parentNode;return y&&y!="prev"||!L||!R.test(L.nodeName||"")||(L=L.parentNode),y!="self"&&(z=y=="prev"?t.previousElementSibling:y&&(L.closest||n.jQuery)&&(L.closest?L.closest(y):jQuery(L).closest(y)[0])||L),z},getFit:function(t){var y,z,L=$(t),S=L.content||L.fontFamily,o={fit:t._lazysizesParentFit||t.getAttribute("data-parent-fit")};return!o.fit&&S&&(y=S.match(d))&&(o.fit=y[1]),o.fit?(z=t._lazysizesParentContainer||t.getAttribute("data-parent-container"),!z&&S&&(y=S.match(I))&&(z=y[1]),o.parent=A.getParent(t,z)):o.fit=L.objectFit,o},getImageRatio:function(t){var y,z,L,S,o,i=t.parentNode,a=i&&R.test(i.nodeName||"")?i.querySelectorAll("source, img"):[t];for(y=0;y<a.length;y++)if(t=a[y],z=t.getAttribute(lazySizesConfig.srcsetAttr)||t.getAttribute("srcset")||t.getAttribute("data-pfsrcset")||t.getAttribute("data-risrcset")||"",L=t._lsMedia||t.getAttribute("media"),L=lazySizesConfig.customMedia[t.getAttribute("data-media")||L]||L,z&&(!L||(n.matchMedia&&matchMedia(L)||{}).matches)){S=parseFloat(t.getAttribute("data-aspectratio")),!S&&(o=z.match(W))&&(S=o[2]=="w"?o[1]/o[3]:o[3]/o[1]);break}return S},calculateSize:function(t,y){var z,L,S,o,i=this.getFit(t),a=i.fit,c=i.parent;return a=="width"||(a=="contain"||a=="cover")&&(S=this.getImageRatio(t))?(c?y=c.clientWidth:c=t,o=y,a=="width"?o=y:(L=c.clientHeight)>40&&(z=y/L)&&(a=="cover"&&z<S||a=="contain"&&z>S)&&(o=y*(S/z)),o):y}};r.parentFit=A,l.addEventListener("lazybeforesizes",function(t){if(!t.defaultPrevented&&t.detail.instance==r){var y=t.target;t.detail.width=A.calculateSize(y,t.detail.width)}})}});/*! lazysizes - v4.1.7 */(function(n,l){var r=function(){l(n.lazySizes),n.removeEventListener("lazyunveilread",r,!0)};l=l.bind(null,n,n.document),typeof module=="object"&&module.exports?l(require("lazysizes")):n.lazySizes?r():n.addEventListener("lazyunveilread",r,!0)})(window,function(n,l,r){"use strict";function W(s,u){var C,N,F,T,b=n.getComputedStyle(s);N=s.parentNode,T={isPicture:!(!N||!L.test(N.nodeName||""))},F=function(E,_){var P=s.getAttribute("data-"+E);if(!P){var g=b.getPropertyValue("--ls-"+E);g&&(P=g.trim())}if(P){if(P=="true")P=!0;else if(P=="false")P=!1;else if(z.test(P))P=parseFloat(P);else if(typeof t[E]=="function")P=t[E](s,P);else if(a.test(P))try{P=JSON.parse(P)}catch(v){}T[E]=P}else E in t&&typeof t[E]!="function"?T[E]=t[E]:_&&typeof t[E]=="function"&&(T[E]=t[E](s,P))};for(C in t)F(C);return u.replace(i,function(E,_){_ in T||F(_,!0)}),T}function d(s,u){var C=[],N=function(F,T){return y[typeof u[T]]?u[T]:F};return C.srcset=[],u.absUrl&&(m.setAttribute("href",s),s=m.href),s=((u.prefix||"")+s+(u.postfix||"")).replace(i,N),u.widths.forEach(function(F){var T=u.widthmap[F]||F,b=u.aspectratio||u.ratio,E=!u.aspectratio&&t.traditionalRatio,_={u:s.replace(S,T).replace(o,b?Math.round(E?F*b:F/b):""),w:F};C.push(_),C.srcset.push(_.c=_.u+" "+F+"w")}),C}function I(s,u,C){var N=0,F=0,T=C;if(s){if(u.ratio==="container"){for(N=T.scrollWidth,F=T.scrollHeight;!(N&&F||T===l);)T=T.parentNode,N=T.scrollWidth,F=T.scrollHeight;N&&F&&(u.ratio=F/N)}s=d(s,u),s.isPicture=u.isPicture,f&&C.nodeName.toUpperCase()=="IMG"?C.removeAttribute(A.srcsetAttr):C.setAttribute(A.srcsetAttr,s.srcset.join(", ")),Object.defineProperty(C,"_lazyrias",{value:s,writable:!0})}}function R(s,u){var C=W(s,u);return t.modifyOptions.call(s,{target:s,details:C,detail:C}),r.fire(s,"lazyriasmodifyoptions",C),C}function $(s){return s.getAttribute(s.getAttribute("data-srcattr")||t.srcAttr)||s.getAttribute(A.srcsetAttr)||s.getAttribute(A.srcAttr)||s.getAttribute("data-pfsrcset")||""}var A,t,y={string:1,number:1},z=/^\-*\+*\d+\.*\d*$/,L=/^picture$/i,S=/\s*\{\s*width\s*\}\s*/i,o=/\s*\{\s*height\s*\}\s*/i,i=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,a=/^\[.*\]|\{.*\}$/,c=/^(?:auto|\d+(px)?)$/,m=l.createElement("a"),e=l.createElement("img"),f="srcset"in e&&!("sizes"in e),w=!!n.HTMLPictureElement&&!f;(function(){var s,u=function(){},C={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:u,widthmap:{},ratio:!1,traditionalRatio:!1,aspectratio:!1};A=r&&r.cfg||n.lazySizesConfig,A||(A={},n.lazySizesConfig=A),A.supportsType||(A.supportsType=function(N){return!N}),A.rias||(A.rias={}),"widths"in(t=A.rias)||(t.widths=[],function(N){for(var F,T=0;!F||F<3e3;)T+=5,T>30&&(T+=1),F=36*T,N.push(F)}(t.widths));for(s in C)s in t||(t[s]=C[s])})(),addEventListener("lazybeforesizes",function(s){if(s.detail.instance==r){var u,C,N,F,T,b,E,_,P,g,v,h,j;if(u=s.target,s.detail.dataAttr&&!s.defaultPrevented&&!t.disabled&&(P=u.getAttribute(A.sizesAttr)||u.getAttribute("sizes"))&&c.test(P)){if(C=$(u),N=R(u,C),v=S.test(N.prefix)||S.test(N.postfix),N.isPicture&&(F=u.parentNode))for(T=F.getElementsByTagName("source"),b=0,E=T.length;b<E;b++)(v||S.test(_=$(T[b])))&&(I(_,N,T[b]),h=!0);v||S.test(C)?(I(C,N,u),h=!0):h&&(j=[],j.srcset=[],j.isPicture=!0,Object.defineProperty(u,"_lazyrias",{value:j,writable:!0})),h&&(w?u.removeAttribute(A.srcAttr):P!="auto"&&(g={width:parseInt(P,10)},x({target:u,detail:g})))}}},!0);var x=function(){var s=function(b,E){return b.w-E.w},u=function(b){var E,_,P=b.length,g=b[P-1],v=0;for(v;v<P;v++)if(g=b[v],g.d=g.w/b.w,g.d>=b.d){!g.cached&&(E=b[v-1])&&E.d>b.d-.13*Math.pow(b.d,2.2)&&(_=Math.pow(E.d-.6,1.6),E.cached&&(E.d+=.15*_),E.d+(g.d-b.d)*_>b.d&&(g=E));break}return g},C=function(b,E){var _;return!b._lazyrias&&r.pWS&&(_=r.pWS(b.getAttribute(A.srcsetAttr||""))).length&&(Object.defineProperty(b,"_lazyrias",{value:_,writable:!0}),E&&b.parentNode&&(_.isPicture=b.parentNode.nodeName.toUpperCase()=="PICTURE")),b._lazyrias},N=function(b){var E=n.devicePixelRatio||1,_=r.getX&&r.getX(b);return Math.min(_||E,2.4,E)},F=function(b,E){var _,P,g,v,h,j;if(h=b._lazyrias,h.isPicture&&n.matchMedia){for(P=0,_=b.parentNode.getElementsByTagName("source"),g=_.length;P<g;P++)if(C(_[P])&&!_[P].getAttribute("type")&&(!(v=_[P].getAttribute("media"))||(matchMedia(v)||{}).matches)){h=_[P]._lazyrias;break}}return(!h.w||h.w<E)&&(h.w=E,h.d=N(b),j=u(h.sort(s))),j},T=function(b){if(b.detail.instance==r){var E,_=b.target;if(!f&&(n.respimage||n.picturefill||lazySizesConfig.pf))return void l.removeEventListener("lazybeforesizes",T);("_lazyrias"in _||b.detail.dataAttr&&C(_,!0))&&(E=F(_,b.detail.width))&&E.u&&_._lazyrias.cur!=E.u&&(_._lazyrias.cur=E.u,E.cached=!0,r.rAF(function(){_.setAttribute(A.srcAttr,E.u),_.setAttribute("src",E.u)}))}};return w?T=function(){}:addEventListener("lazybeforesizes",T),T}()});/*! lazysizes - v4.1.7 */(function(n,l){var r=function(){l(n.lazySizes),n.removeEventListener("lazyunveilread",r,!0)};l=l.bind(null,n,n.document),typeof module=="object"&&module.exports?l(require("lazysizes")):n.lazySizes?r():n.addEventListener("lazyunveilread",r,!0)})(window,function(n,l,r){"use strict";function W(a,c){var m="vimeoCallback"+t,e=l.createElement("script");a+="&callback="+m,t++,n[m]=function(f){e.parentNode.removeChild(e),delete n[m],c(f)},e.src=a,l.head.appendChild(e)}function d(a,c){W(o.replace(y,a),function(m){m&&m.thumbnail_url&&(c.style.backgroundImage="url("+m.thumbnail_url+")")}),c.addEventListener("click",I)}function I(a){var c=a.currentTarget,m=c.getAttribute("data-vimeo"),e=c.getAttribute("data-vimeoparams")||"";e&&!z.test(e)&&(e="&"+e),a.preventDefault(),c.innerHTML='<iframe src="'+i.replace(y,m)+e+'" frameborder="0" allowfullscreen="" width="640" height="390"></iframe>',c.removeEventListener("click",I)}function R(a,c){c.style.backgroundImage="url("+L.replace(y,a)+")",c.addEventListener("click",$)}function $(a){var c=a.currentTarget,m=c.getAttribute("data-youtube"),e=c.getAttribute("data-ytparams")||"";e&&!z.test(e)&&(e="&"+e),a.preventDefault(),c.innerHTML='<iframe src="'+S.replace(y,m)+e+'" frameborder="0" allowfullscreen="" width="640" height="390"></iframe>',c.removeEventListener("click",$)}if(l.getElementsByClassName){var A=location.protocol=="https:"?"https:":"http:",t=Date.now(),y=/\{\{id}}/,z=/^&/,L=A+"//img.youtube.com/vi/{{id}}/sddefault.jpg",S=A+"//www.youtube.com/embed/{{id}}?autoplay=1",o=A+"//vimeo.com/api/oembed.json?url=https%3A//vimeo.com/{{id}}",i=A+"//player.vimeo.com/video/{{id}}?autoplay=1";l.addEventListener("lazybeforeunveil",function(a){if(a.detail.instance==r){var c=a.target,m=c.getAttribute("data-youtube"),e=c.getAttribute("data-vimeo");m&&c&&R(m,c),e&&c&&d(e,c)}})}});/*! lazysizes - v4.1.7 */(function(n,l){var r=l(n,n.document);n.lazySizes=r,typeof module=="object"&&module.exports&&(module.exports=r)})(window,function(l,r){"use strict";if(!!r.getElementsByClassName){var W,d,I=r.documentElement,R=l.Date,$=l.HTMLPictureElement,A="addEventListener",t="getAttribute",y=l[A],z=l.setTimeout,L=l.requestAnimationFrame||z,S=l.requestIdleCallback,o=/^picture$/i,i=["load","error","lazyincluded","_lazyloaded"],a={},c=Array.prototype.forEach,m=function(g,v){return a[v]||(a[v]=new RegExp("(\\s|^)"+v+"(\\s|$)")),a[v].test(g[t]("class")||"")&&a[v]},e=function(g,v){m(g,v)||g.setAttribute("class",(g[t]("class")||"").trim()+" "+v)},f=function(g,v){var h;(h=m(g,v))&&g.setAttribute("class",(g[t]("class")||"").replace(h," "))},w=function(g,v,h){var j=h?A:"removeEventListener";h&&w(g,v),i.forEach(function(q){g[j](q,v)})},x=function(g,v,h,j,q){var k=r.createEvent("Event");return h||(h={}),h.instance=W,k.initEvent(v,!j,!q),k.detail=h,g.dispatchEvent(k),k},s=function(g,v){var h;!$&&(h=l.picturefill||d.pf)?(v&&v.src&&!g[t]("srcset")&&g.setAttribute("srcset",v.src),h({reevaluate:!0,elements:[g]})):v&&v.src&&(g.src=v.src)},u=function(g,v){return(getComputedStyle(g,null)||{})[v]},C=function(g,v,h){for(h=h||g.offsetWidth;h<d.minSize&&v&&!g._lazysizesWidth;)h=v.offsetWidth,v=v.parentNode;return h},N=function(){var g,v,h=[],j=[],q=h,k=function(){var B=q;for(q=h.length?j:h,g=!0,v=!1;B.length;)B.shift()();g=!1},U=function(B,O){g&&!O?B.apply(this,arguments):(q.push(B),v||(v=!0,(r.hidden?z:L)(k)))};return U._lsFlush=k,U}(),F=function(g,v){return v?function(){N(g)}:function(){var h=this,j=arguments;N(function(){g.apply(h,j)})}},T=function(g){var v,h=0,j=d.throttleDelay,q=d.ricTimeout,k=function(){v=!1,h=R.now(),g()},U=S&&q>49?function(){S(k,{timeout:q}),q!==d.ricTimeout&&(q=d.ricTimeout)}:F(function(){z(k)},!0);return function(B){var O;(B=B===!0)&&(q=33),!v&&(v=!0,O=j-(R.now()-h),O<0&&(O=0),B||O<9?U():z(U,O))}},b=function(g){var v,h,j=99,q=function(){v=null,g()},k=function(){var U=R.now()-h;U<j?z(k,j-U):(S||q)(q)};return function(){h=R.now(),v||(v=z(k,j))}};(function(){var g,v={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=l.lazySizesConfig||l.lazysizesConfig||{};for(g in v)g in d||(d[g]=v[g]);l.lazySizesConfig=d,z(function(){d.init&&P()})})();var E=function(){var g,v,h,j,q,k,U,B,O,J,K,ie,pe=/^img$/i,ye=/^iframe$/i,ze="onscroll"in l&&!/(gle|ing)bot/.test(navigator.userAgent),me=0,se=0,Y=0,ne=-1,de=function(p){Y--,(!p||Y<0||!p.target)&&(Y=0)},ce=function(p){return ie==null&&(ie=u(r.body,"visibility")=="hidden"),ie||u(p.parentNode,"visibility")!="hidden"&&u(p,"visibility")!="hidden"},he=function(p,M){var H,D=p,V=ce(p);for(B-=M,K+=M,O-=M,J+=M;V&&(D=D.offsetParent)&&D!=r.body&&D!=I;)V=(u(D,"opacity")||1)>0,V&&u(D,"overflow")!="visible"&&(H=D.getBoundingClientRect(),V=J>H.left&&O<H.right&&K>H.top-1&&B<H.bottom+1);return V},fe=function(){var p,M,H,D,V,X,Z,ee,te,re,ae,ue,G=W.elements;if((j=d.loadMode)&&Y<8&&(p=G.length)){for(M=0,ne++,re=!d.expand||d.expand<1?I.clientHeight>500&&I.clientWidth>500?500:370:d.expand,W._defEx=re,ae=re*d.expFactor,ue=d.hFac,ie=null,se<ae&&Y<1&&ne>2&&j>2&&!r.hidden?(se=ae,ne=0):j>1&&ne>1&&Y<6?se=re:se=me;M<p;M++)if(!(!G[M]||G[M]._lazyRace)){if(!ze){oe(G[M]);continue}if((!(ee=G[M][t]("data-expand"))||!(X=ee*1))&&(X=se),te!==X&&(k=innerWidth+X*ue,U=innerHeight+X,Z=X*-1,te=X),H=G[M].getBoundingClientRect(),(K=H.bottom)>=Z&&(B=H.top)<=U&&(J=H.right)>=Z*ue&&(O=H.left)<=k&&(K||J||O||B)&&(d.loadHidden||ce(G[M]))&&(v&&Y<3&&!ee&&(j<3||ne<4)||he(G[M],X))){if(oe(G[M]),V=!0,Y>9)break}else!V&&v&&!D&&Y<4&&ne<4&&j>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!ee&&(K||J||O||B||G[M][t](d.sizesAttr)!="auto"))&&(D=g[0]||G[M])}D&&!V&&oe(D)}},Q=T(fe),ve=function(p){var M=p.target;if(M._lazyCache){delete M._lazyCache;return}de(p),e(M,d.loadedClass),f(M,d.loadingClass),w(M,ge),x(M,"lazyloaded")},Ae=F(ve),ge=function(p){Ae({target:p.target})},Ee=function(p,M){try{p.contentWindow.location.replace(M)}catch(H){p.src=M}},Ce=function(p){var M,H=p[t](d.srcsetAttr);(M=d.customMedia[p[t]("data-media")||p[t]("media")])&&p.setAttribute("media",M),H&&p.setAttribute("srcset",H)},be=F(function(p,M,H,D,V){var X,Z,ee,te,re,ae;(re=x(p,"lazybeforeunveil",M)).defaultPrevented||(D&&(H?e(p,d.autosizesClass):p.setAttribute("sizes",D)),Z=p[t](d.srcsetAttr),X=p[t](d.srcAttr),V&&(ee=p.parentNode,te=ee&&o.test(ee.nodeName||"")),ae=M.firesLoad||"src"in p&&(Z||X||te),re={target:p},e(p,d.loadingClass),ae&&(clearTimeout(h),h=z(de,2500),w(p,ge,!0)),te&&c.call(ee.getElementsByTagName("source"),Ce),Z?p.setAttribute("srcset",Z):X&&!te&&(ye.test(p.nodeName)?Ee(p,X):p.src=X),V&&(Z||te)&&s(p,{src:X})),p._lazyRace&&delete p._lazyRace,f(p,d.lazyClass),N(function(){(!ae||p.complete&&p.naturalWidth>1)&&(ve(re),p._lazyCache=!0,z(function(){"_lazyCache"in p&&delete p._lazyCache},9))},!0)}),oe=function(p){var M,H=pe.test(p.nodeName),D=H&&(p[t](d.sizesAttr)||p[t]("sizes")),V=D=="auto";(V||!v)&&H&&(p[t]("src")||p.srcset)&&!p.complete&&!m(p,d.errorClass)&&m(p,d.lazyClass)||(M=x(p,"lazyunveilread").detail,V&&_.updateElem(p,!0,p.offsetWidth),p._lazyRace=!0,Y++,be(p,M,V,D,H))},le=function(){if(!v){if(R.now()-q<999){z(le,999);return}var p=b(function(){d.loadMode=3,Q()});v=!0,d.loadMode=3,Q(),y("scroll",function(){d.loadMode==3&&(d.loadMode=2),p()},!0)}};return{_:function(){q=R.now(),W.elements=r.getElementsByClassName(d.lazyClass),g=r.getElementsByClassName(d.lazyClass+" "+d.preloadClass),y("scroll",Q,!0),y("resize",Q,!0),l.MutationObserver?new MutationObserver(Q).observe(I,{childList:!0,subtree:!0,attributes:!0}):(I[A]("DOMNodeInserted",Q,!0),I[A]("DOMAttrModified",Q,!0),setInterval(Q,999)),y("hashchange",Q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(p){r[A](p,Q,!0)}),/d$|^c/.test(r.readyState)?le():(y("load",le),r[A]("DOMContentLoaded",Q),z(le,2e4)),W.elements.length?(fe(),N._lsFlush()):Q()},checkElems:Q,unveil:oe}}(),_=function(){var g,v=F(function(k,U,B,O){var J,K,ie;if(k._lazysizesWidth=O,O+="px",k.setAttribute("sizes",O),o.test(U.nodeName||""))for(J=U.getElementsByTagName("source"),K=0,ie=J.length;K<ie;K++)J[K].setAttribute("sizes",O);B.detail.dataAttr||s(k,B.detail)}),h=function(k,U,B){var O,J=k.parentNode;J&&(B=C(k,J,B),O=x(k,"lazybeforesizes",{width:B,dataAttr:!!U}),O.defaultPrevented||(B=O.detail.width,B&&B!==k._lazysizesWidth&&v(k,J,O,B)))},j=function(){var k,U=g.length;if(U)for(k=0;k<U;k++)h(g[k])},q=b(j);return{_:function(){g=r.getElementsByClassName(d.autosizesClass),y("resize",q)},checkElems:q,updateElem:h}}(),P=function(){P.i||(P.i=!0,_._(),E._())};return W={cfg:d,autoSizer:_,loader:E,init:P,uP:s,aC:e,rC:f,hC:m,fire:x,gW:C,rAF:N},W}});
//# sourceMappingURL=/s/files/1/0255/9636/2837/t/10/assets/lazysizes.js.map?v=1634053598
