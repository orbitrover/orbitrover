/*!
 * modernizr v3.3.1
 * Build http://modernizr.com/download?-audio-backgroundblendmode-cors-cssanimations-flexbox-input-inputtypes-localstorage-placeholder-svg-xhr2-domprefixes-mq-prefixes-setclasses-shiv-testallprops-testprop-teststyles-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/
(function(e,t,n){function a(e,t){return typeof e===t}function f(){var e,t,n,s,u,f,l;for(var c in i)if(i.hasOwnProperty(c)){e=[],t=i[c];if(t.name){e.push(t.name.toLowerCase());if(t.options&&t.options.aliases&&t.options.aliases.length)for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase())}s=a(t.fn,"function")?t.fn():t.fn;for(u=0;u<e.length;u++)f=e[u],l=f.split("."),l.length===1?o[l[0]]=s:(o[l[0]]&&!(o[l[0]]instanceof Boolean)&&(o[l[0]]=new Boolean(o[l[0]])),o[l[0]][l[1]]=s),r.push((s?"":"no-")+l.join("-"))}}function h(e){var t=l.className,n=o._config.classPrefix||"";c&&(t=t.baseVal);if(o._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}o._config.enableClasses&&(t+=" "+n+e.join(" "+n),c?l.className.baseVal=t:l.className=t)}function m(){return typeof t.createElement!="function"?t.createElement(arguments[0]):c?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function S(){var e=t.body;return e||(e=m(c?"svg":"body"),e.fake=!0),e}function x(e,n,r,i){var s="modernizr",o,u,a,f,c=m("div"),h=S();if(parseInt(r,10))while(r--)a=m("div"),a.id=i?i[r]:s+(r+1),c.appendChild(a);return o=m("style"),o.type="text/css",o.id="s"+s,(h.fake?h:c).appendChild(o),h.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=s,h.fake&&(h.style.background="",h.style.overflow="hidden",f=l.style.overflow,l.style.overflow="hidden",l.appendChild(h)),u=n(c,e),h.fake?(h.parentNode.removeChild(h),l.style.overflow=f,l.offsetHeight):c.parentNode.removeChild(c),!!u}function k(e,t){return!!~(""+e).indexOf(t)}function L(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function O(e,t){return function(){return e.apply(t,arguments)}}function M(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],a(r,"function")?O(r,n||t):r);return!1}function P(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function H(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){while(i--)if(e.CSS.supports(P(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){var s=[];while(i--)s.push("("+P(t[i])+":"+r+")");return s=s.join(" or "),x("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return getComputedStyle(e,null).position=="absolute"})}return n}function B(e,t,r,i){function p(){o&&(delete D.style,delete D.modElem)}i=a(i,"undefined")?!1:i;if(!a(r,"undefined")){var s=H(e,r);if(!a(s,"undefined"))return s}var o,u,f,l,c,h=["modernizr","tspan"];while(!D.style)o=!0,D.modElem=m(h.shift()),D.style=D.modElem.style;f=e.length;for(u=0;u<f;u++){l=e[u],c=D.style[l],k(l,"-")&&(l=L(l));if(D.style[l]!==n){if(!!i||!!a(r,"undefined"))return p(),t=="pfx"?l:!0;try{D.style[l]=r}catch(d){}if(D.style[l]!=c)return p(),t=="pfx"?l:!0}}return p(),!1}function F(e,t,n,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+C.join(s+" ")+s).split(" ");return a(t,"string")||a(t,"undefined")?B(o,t,r,i):(o=(e+" "+v.join(s+" ")+s).split(" "),M(o,t,n))}function I(e,t,r){return F(e,n,n,t,r)}var r=[],i=[],s={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){i.push({name:e,fn:t,options:n})},addAsyncTest:function(e){i.push({name:null,fn:e})}},o=function(){};o.prototype=s,o=new o,o.addTest("cors","XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest),o.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),o.addTest("xhr2","XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest),o.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}});var u=s._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];s._prefixes=u;var l=t.documentElement,c=l.nodeName.toLowerCase()==="svg",p;c||function(e,t){function c(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function h(){var e=b.elements;return typeof e=="string"?e.split(" "):e}function p(e,t){var n=b.elements;typeof n!="string"&&(n=n.join(" ")),typeof e!="string"&&(e=e.join(" ")),b.elements=n+" "+e,y(t)}function d(e){var t=f[e[u]];return t||(t={},a++,e[u]=a,f[a]=t),t}function v(e,n,r){n||(n=t);if(l)return n.createElement(e);r||(r=d(n));var o;return r.cache[e]?o=r.cache[e].cloneNode():s.test(e)?o=(r.cache[e]=r.createElem(e)).cloneNode():o=r.createElem(e),o.canHaveChildren&&!i.test(e)&&!o.tagUrn?r.frag.appendChild(o):o}function m(e,n){e||(e=t);if(l)return e.createDocumentFragment();n=n||d(e);var r=n.frag.cloneNode(),i=0,s=h(),o=s.length;for(;i<o;i++)r.createElement(s[i]);return r}function g(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?v(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function y(e){e||(e=t);var n=d(e);return b.shivCSS&&!o&&!n.hasCSS&&(n.hasCSS=!!c(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||g(e,n),e}var n="3.7.3",r=e.html5||{},i=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,s=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,o,u="_html5shiv",a=0,f={},l;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",o="hidden"in e,l=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){o=!0,l=!0}})();var b={elements:r.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:n,shivCSS:r.shivCSS!==!1,supportsUnknownElements:l,shivMethods:r.shivMethods!==!1,type:"default",shivDocument:y,createElement:v,createDocumentFragment:m,addElements:p};e.html5=b,y(t),typeof module=="object"&&module.exports&&(module.exports=b)}(typeof e!="undefined"?e:this,t);var d="Moz O ms Webkit",v=s._config.usePrefixes?d.toLowerCase().split(" "):[];s._domPrefixes=v,o.addTest("audio",function(){var e=m("audio"),t=!1;try{if(t=!!e.canPlayType)t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(n){}return t}),o.addTest("placeholder","placeholder"in m("input")&&"placeholder"in m("textarea"));var g=m("input"),y="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),b={};o.input=function(t){for(var n=0,r=t.length;n<r;n++)b[t[n]]=t[n]in g;return b.list&&(b.list=!!m("datalist")&&!!e.HTMLDataListElement),b}(y);var w="search tel url email datetime date month week time datetime-local number range color".split(" "),E={};o.inputtypes=function(e){var r=e.length,i="1)",s,o,u;for(var a=0;a<r;a++)g.setAttribute("type",s=e[a]),u=g.type!=="text"&&"style"in g,u&&(g.value=i,g.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&g.style.WebkitAppearance!==n?(l.appendChild(g),o=t.defaultView,u=o.getComputedStyle&&o.getComputedStyle(g,null).WebkitAppearance!=="textfield"&&g.offsetHeight!==0,l.removeChild(g)):/^(search|tel)$/.test(s)||(/^(url|email)$/.test(s)?u=g.checkValidity&&g.checkValidity()===!1:u=g.value!=i)),E[e[a]]=!!u;return E}(w);var T=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return x("@media "+t+" { #modernizr { position: absolute; } }",function(t){n=(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position=="absolute"}),n}}();s.mq=T;var N=s.testStyles=x,C=s._config.usePrefixes?d.split(" "):[];s._cssomPrefixes=C;var A=function(t){var r=u.length,i=e.CSSRule,s;if(typeof i=="undefined")return n;if(!t)return!1;t=t.replace(/^@/,""),s=t.replace(/-/g,"_").toUpperCase()+"_RULE";if(s in i)return"@"+t;for(var o=0;o<r;o++){var a=u[o],f=a.toUpperCase()+"_"+s;if(f in i)return"@-"+a.toLowerCase()+"-"+t}return!1};s.atRule=A;var _={elem:m("modernizr")};o._q.push(function(){delete _.elem});var D={style:_.elem.style};o._q.unshift(function(){delete D.style});var j=s.testProp=function(e,t,r){return B([e],n,t,r)};s.testAllProps=F,s.testAllProps=I,o.addTest("cssanimations",I("animationName","a",!0)),o.addTest("flexbox",I("flexBasis","1px",!0));var q=s.prefixed=function(e,t,n){return e.indexOf("@")===0?A(e):(e.indexOf("-")!=-1&&(e=L(e)),t?F(e,t,n):F(e,"pfx"))};o.addTest("backgroundblendmode",q("backgroundBlendMode","text")),f(),h(r),delete s.addTest,delete s.addAsyncTest;for(var R=0;R<o._q.length;R++)o._q[R]();e.Modernizr=o})(window,document);