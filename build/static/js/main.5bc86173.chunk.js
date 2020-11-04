(this.webpackJsonpreflist=this.webpackJsonpreflist||[]).push([[0],{55:function(e,n,t){e.exports=t(72)},71:function(e,n,t){},72:function(e,n,t){"use strict";t.r(n),t.d(n,"history",(function(){return xn}));var r,a=t(0),o=t.n(a),c=t(27),i=t.n(c),u=t(15),l=t(16),d=t(11),s=t(38),f=t(29),p=t(53),b=t(23),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(b.a)([]),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_CATEGORIES":return e;case"ADD_CATEGORIES":return n.categories.forEach((function(n){e=e.push(n)})),e;default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(b.a)([]),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_PRODUCTS":return e;case"ADD_PRODUCTS":return n.products.forEach((function(n){e=e.push(n)})),e;default:return e}},v=t(24),g=t(54),O=t(52);!function(e){e[e.notLoaded=0]="notLoaded",e[e.loaded=1]="loaded",e[e.errorServer=2]="errorServer"}(r||(r={}));var j={status:r.notLoaded,head_description:"",head_subtitle:"",head_title:"",head_logo:null},w=function(e){Object(g.a)(t,e);var n=Object(O.a)(t);function t(){return Object(v.a)(this,t),n.apply(this,arguments)}return t}(Object(b.b)(j)),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new w,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_ALL":return e;case"ADD_MAIN":return n.main;case"SET_STATUS":return e.set("status",n.status);default:return e}},E=function(e){return Object(u.c)({router:Object(f.b)(e),main:x,categories:m,products:h})},_=t(20),y=t.n(_),S=t(40),L=t(21),k=t(17),A=y.a.mark(T),D=y.a.mark(C);function T(e,n){var t;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(k.b)(e.container.ApiAll.loadAll);case 3:return(t=n.sent).products.sort((function(e,n){return new Date(n.created_at).getTime()-new Date(e.created_at).getTime()})),t.categories.sort((function(e,n){return e.sort-n.sort})),n.next=8,Object(k.c)({type:"ADD_CATEGORIES",categories:t.categories});case 8:return n.next=10,Object(k.c)({type:"ADD_PRODUCTS",products:t.products});case 10:return n.next=12,Object(k.c)({type:"ADD_MAIN",main:Object(L.a)(Object(L.a)({},t.main),{},{status:r.loaded})});case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(0),n.next=18,Object(k.c)({type:"SET_STATUS",status:r.errorServer});case 18:case"end":return n.stop()}}),A,null,[[0,14]])}function C(e){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(k.d)("LOAD_ALL",T,e);case 2:case"end":return n.stop()}}),D)}var R=t(41),z=new(t.n(R).a),I=z;z.service("Http",(function e(){Object(v.a)(this,e),this.getFetch=function(e){return fetch("/api/graphql",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(e)}).then((function(e){return e.json()}))}})),z.service("ApiAll",(function e(n){var t=this;Object(v.a)(this,e),this.http=n,this.loadAll=function(){return t.http.getFetch({query:"{\n            main {\n                head_title\n                head_subtitle\n                head_description\n                head_logo\n                    {url}\n                }\n            categories {\n                id\n                sort\n                url\n                name\n                img {url}\n            }\n            products {\n                id\n                created_at            \n                category\n                    {id url}\n                name\n                link\n                img_webp_150\n                    {url}\n                img_webp_300\n                    {url}\n                img_webp_600\n                    {url}\n                img_jpeg_150\n                    {url} \n                img_jpeg_300\n                    {url}\n                img_jpeg_600\n                    {url}\n            }\n        }",variables:{}}).then((function(e){return e.data}))}}),"Http");Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=t(7),F=t(4),N=t(3);function P(e,n){return Object(l.e)((function(t){return e(t,n)}))}var U=t(35),H=function(e){return e.main},M=function(e){return e.categories},G=Object(U.a)(H,(function(e){return e.status})),J=Object(U.a)((function(e){return e.products}),(function(e,n){return n}),(function(e,n){return e.filter((function(e){return!n||e.category&&e.category.url===n}))})),q=t(48),B=t(45);function X(){var e=Object(F.a)(["\n    color: #ff0000;\n"]);return X=function(){return e},e}function V(){var e=Object(F.a)(["\n    animation: rotate 2s linear infinite;\n    color: #2196f3;\n\n    @keyframes rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"]);return V=function(){return e},e}function Y(){var e=Object(F.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 50% 0;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 28px;\n    color: #4a4a4a;\n"]);return Y=function(){return e},e}function $(e){return o.a.createElement(Q,null,"preload"===e.type&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Z,{size:"28"})," ",e.text),"warning"===e.type&&o.a.createElement(o.a.Fragment,null,o.a.createElement(ee,{size:"28"})," ",e.text))}var K,Q=N.b.div(Y()),Z=Object(N.b)(B.a)(V()),ee=Object(N.b)(q.a)(X()),ne=t(25);function te(){var e=Object(F.a)(["\n    background: ",";\n"]);return te=function(){return e},e}function re(e){var n,t=Object(a.useState)(K.notLoaded),r=Object(ne.a)(t,2),c=r[0],i=r[1],u=o.a.createElement(ce,{className:e.className,src:ae(e.url,c),alt:e.alt,status:c,onLoad:function(){return i(c===K.errorServer?K.errorServer:K.loaded)},onError:function(){return i(K.errorServer)}});return o.a.createElement(o.a.Fragment,null,(null===(n=e.sources)||void 0===n?void 0:n.length)?o.a.createElement("picture",null,e.sources.map((function(e,n){return e.srcSet&&o.a.createElement("source",{srcSet:e.srcSet,type:e.type,media:e.media,key:n})})),u):u)}!function(e){e[e.notLoaded=0]="notLoaded",e[e.loaded=1]="loaded",e[e.errorServer=2]="errorServer"}(K||(K={}));var ae=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K.loaded;return e&&e.length&&n!==K.errorServer?"/api"+e:"/notfound.svg"},oe=function(e,n){var t=[];return e&&t.push(ae(e)+" 1x"),n&&t.push(ae(n)+" 2x"),t.length?t.join(", "):void 0},ce=N.b.img(te(),(function(e){switch(e.status){case K.notLoaded:return"url(preloader.svg) no-repeat center";case K.loaded:case K.errorServer:default:return"#ffffff"}}));function ie(){var e=Object(F.a)(["\n    a {\n        color: #25578e;\n        text-decoration: none;\n        font-weight: bold;\n    }\n"]);return ie=function(){return e},e}function ue(){var e=Object(F.a)(["\n    font-weight: bold;\n"]);return ue=function(){return e},e}function le(){var e=Object(F.a)(["\n    font-size: 16px;\n    line-height: 30px;\n"]);return le=function(){return e},e}function de(){var e=Object(F.a)([""]);return de=function(){return e},e}function se(){var e=Object(F.a)(["\n    display: block;\n    width: 120px;\n    height: 120px;\n    border-radius: 60px;\n    border: 1px solid #ccc;\n\n    @media (max-width: ","px) {\n        width: 60px;\n        height: 60px;\n        border-radius: 30px;\n    }\n"]);return se=function(){return e},e}function fe(){var e=Object(F.a)(["\n    padding: 30px 100px 30px 70px;\n\n    @media (max-width: ","px) {\n        padding: 10px;\n    }\n"]);return fe=function(){return e},e}function pe(){var e=Object(F.a)(["\n    display: flex;\n    align-items: center;\n    padding: 10px 0;\n    width: 100%;\n"]);return pe=function(){return e},e}function be(){var e,n=P(H);return o.a.createElement(me,null,o.a.createElement(he,null,o.a.createElement(ve,{url:null===(e=n.head_logo)||void 0===e?void 0:e.url,alt:"Logo"})),o.a.createElement(ge,null,o.a.createElement(Oe,null,n.head_title),o.a.createElement(je,null,n.head_subtitle),o.a.createElement(we,{dangerouslySetInnerHTML:{__html:n.head_description}})))}var me=N.b.header(pe()),he=N.b.div(fe(),(function(e){return e.theme.media_mobile})),ve=Object(N.b)(re)(se(),(function(e){return e.theme.media_mobile})),ge=N.b.div(de()),Oe=N.b.h1(le()),je=N.b.h2(ue()),we=N.b.div(ie());function xe(e,n,t){var r=Object(a.useRef)();Object(a.useEffect)((function(){r.current=n}),[n]),Object(a.useEffect)((function(){var n=(null===t||void 0===t?void 0:t.current)||window;if(n&&n.addEventListener){var a=function(e){r.current&&r.current(e)};return n.addEventListener(e,a),function(){n.removeEventListener(e,a)}}}),[e,t])}var Ee=t(49),_e=t(50);t(69);function ye(){var e=Object(F.a)(["\n    color: #aaa;\n    background-color: #fff;\n    border-radius: 50%;\n"]);return ye=function(){return e},e}function Se(){var e=Object(F.a)(["\n    color: #aaa;\n    background-color: #fff;\n    border-radius: 50%;\n"]);return Se=function(){return e},e}function Le(){var e=Object(F.a)(["\n    right: 0;\n"]);return Le=function(){return e},e}function ke(){var e=Object(F.a)([""]);return ke=function(){return e},e}function Ae(){var e=Object(F.a)(["\n    display: block;\n    position: absolute;\n    top: 53px;\n    padding: 10px;\n    cursor: pointer;\n    border: none;\n    background: unset;\n    z-index: 10;\n\n    &:focus:not(.focus-visible) {\n        outline: none;\n    }\n"]);return Ae=function(){return e},e}function De(e){return o.a.createElement(o.a.Fragment,null,"left"===e.type?o.a.createElement(Ce,null,o.a.createElement(ze,{size:"20",onClick:function(){return e.handleScroll(e.scrollWidth)}})):o.a.createElement(Re,null,o.a.createElement(Ie,{size:"20",onClick:function(){return e.handleScroll(e.scrollWidth)}})))}var Te=N.b.button(Ae()),Ce=Object(N.b)(Te)(ke()),Re=Object(N.b)(Te)(Le()),ze=Object(N.b)(Ee.a)(Se()),Ie=Object(N.b)(_e.a)(ye()),We=t(51);function Fe(){var e=Object(F.a)(["\n    text-overflow: ellipsis;\n    text-align: center;\n    line-height: 25px;\n    white-space: nowrap;\n    overflow: hidden;\n"]);return Fe=function(){return e},e}function Ne(){var e=Object(F.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: calc(100% - 6px);\n    height: calc(100% - 6px);\n    border: 3px solid #ffffff;\n    border-radius: 50%;\n"]);return Ne=function(){return e},e}function Pe(){var e=Object(F.a)(["\n    display: block;\n    position: relative;\n    overflow: hidden;\n    height: 0;\n    padding: 50%;\n    background-color: #fff;\n    border: 1px solid ",";\n    border-radius: 50%;\n"]);return Pe=function(){return e},e}function Ue(){var e=Object(F.a)(["\n    display: block;\n    color: #000;\n    text-decoration: none;\n"]);return Ue=function(){return e},e}function He(){var e=Object(F.a)(["\n    flex: 0 0 auto;\n    width: 82px;\n    padding: 30px 23px;\n\n    @media (max-width: ","px) {\n        width: 64px;\n        padding: 5px;\n    }\n"]);return He=function(){return e},e}function Me(e){var n,t=Object(W.f)().urlCategory;return o.a.createElement(Ge,null,o.a.createElement(Je,{to:e.category.url===t?"/":"/category/"+e.category.url},o.a.createElement(qe,{selected:e.category.url===t},o.a.createElement(Be,{url:null===(n=e.category.img)||void 0===n?void 0:n.url,alt:e.category.name})),o.a.createElement(Xe,null,e.category.name)))}var Ge=N.b.div(He(),(function(e){return e.theme.media_mobile})),Je=Object(N.b)(We.a)(Ue()),qe=N.b.div(Pe(),(function(e){return e.selected?"#ff0000":"#cccccc"})),Be=Object(N.b)(re)(Ne()),Xe=N.b.div(Fe());function Ve(){var e=Object(F.a)(["\n    display: flex;\n    flex-wrap: nowrap;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    ::-webkit-scrollbar {\n        display: none;\n    }\n"]);return Ve=function(){return e},e}function Ye(){var e=Object(F.a)(["\n    display: flex;\n    align-items: center;\n    user-select: none;\n    flex-wrap: wrap;\n    position: relative;\n"]);return Ye=function(){return e},e}function $e(){var e=P(M),n=Object(a.useRef)(null),t=Object(a.useReducer)(Ke,{left:!1,right:!1}),r=Object(ne.a)(t,2),c=r[0],i=r[1],u=window.matchMedia("(pointer:fine)").matches,l=Object(a.useCallback)((function(){n.current&&u?(i(Qe.setLeft(n.current.scrollLeft>0)),i(Qe.setRight(n.current.scrollWidth-n.current.offsetWidth>n.current.scrollLeft))):(i(Qe.setLeft(!1)),i(Qe.setRight(!1)))}),[u]),d=Object(a.useCallback)((function(e){n.current&&n.current.scrollTo({left:n.current.scrollLeft+e,behavior:"smooth"})}),[]);return xe("resize",l),Object(a.useEffect)((function(){l()}),[]),o.a.createElement(Ze,{onScroll:l},c.left&&o.a.createElement(De,{type:"left",handleScroll:d,scrollWidth:-536}),o.a.createElement(en,{ref:n},e.map((function(e){return o.a.createElement(Me,{category:e,key:e.id})}))),c.right&&o.a.createElement(De,{type:"right",handleScroll:d,scrollWidth:536}))}var Ke=function(e,n){switch(n.type){case"setLeft":return e.left!==n.value?Object(L.a)(Object(L.a)({},e),{},{left:n.value}):e;case"setRight":return e.right!==n.value?Object(L.a)(Object(L.a)({},e),{},{right:n.value}):e;default:throw new Error}},Qe={setLeft:function(e){return{type:"setLeft",value:e}},setRight:function(e){return{type:"setRight",value:e}}},Ze=N.b.div(Ye()),en=N.b.div(Ve());function nn(){var e=Object(F.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n"]);return nn=function(){return e},e}function tn(){var e=Object(F.a)(["\n    display: block;\n    overflow: hidden;\n    height: 0;\n    padding: 50%;\n    position: relative;\n"]);return tn=function(){return e},e}function rn(){var e=Object(F.a)(["\n    width: calc((100% - ","px) / ",");\n    margin-right: ","px;\n    margin-bottom: ","px;\n\n    &:nth-child(","n) {\n        margin-right: 0;\n    }\n\n    &:nth-last-child(-n + ",") {\n        margin-bottom: 0;\n    }\n\n    @media (max-width: ","px) {\n        width: calc((100% - ","px) / ",");\n        margin-right: ","px;\n        margin-bottom: ","px;\n    }\n"]);return rn=function(){return e},e}function an(e){var n;return o.a.createElement(dn,null,o.a.createElement(sn,{href:e.product.link},o.a.createElement(fn,{url:null===(n=e.product.img_jpeg_300)||void 0===n?void 0:n.url,sources:on(e.product),alt:e.product.name})))}var on=function(e){var n,t,r,a,o,c,i,u;return[{srcSet:oe(null===(n=e.img_webp_150)||void 0===n?void 0:n.url,null===(t=e.img_webp_300)||void 0===t?void 0:t.url),type:"image/webp",media:"(max-width: 456px)"},{srcSet:oe(null===(r=e.img_jpeg_150)||void 0===r?void 0:r.url,null===(a=e.img_jpeg_300)||void 0===a?void 0:a.url),type:"image/jpeg",media:"(max-width: 456px)"},{srcSet:oe(null===(o=e.img_webp_300)||void 0===o?void 0:o.url,null===(c=e.img_webp_600)||void 0===c?void 0:c.url),type:"image/webp"},{srcSet:oe(null===(i=e.img_jpeg_300)||void 0===i?void 0:i.url,null===(u=e.img_jpeg_600)||void 0===u?void 0:u.url),type:"image/jpeg"}].filter((function(e){return e.srcSet}))},cn=3,un=17,ln=3,dn=N.b.div(rn(),un*(cn-1),cn,un,un,cn,cn,(function(e){return e.theme.media_mobile}),ln*(cn-1),cn,ln,ln),sn=N.b.a(tn()),fn=Object(N.b)(re)(nn());function pn(){var e=Object(F.a)(["\n    display: flex;\n    flex-flow: row wrap;\n    width: 100%;\n"]);return pn=function(){return e},e}function bn(){var e=Object(W.f)().urlCategory,n=P(J,e),t=Object(a.useState)(30),r=Object(ne.a)(t,2),c=r[0],i=r[1],u=n.slice(0,c);return xe("scroll",(function(){window.scrollY+window.innerHeight+500>=document.documentElement.scrollHeight&&c<n.size&&i(c+30)})),o.a.createElement(mn,null,u.map((function(e){return o.a.createElement(an,{product:e,key:e.id})})))}var mn=N.b.div(pn());function hn(){var e=Object(F.a)(["\n    max-width: 935px;\n    margin: 0 auto;\n    font-size: 16px;\n    background-color: #fafafa;\n\n    @media (max-width: ","px) {\n        font-size: 14px;\n    }\n"]);return hn=function(){return e},e}function vn(){var e=P(G),n=Object(l.d)();return Object(a.useEffect)((function(){n({type:"LOAD_ALL"})}),[]),o.a.createElement(N.a,{theme:On},o.a.createElement(jn,null,e===r.notLoaded&&o.a.createElement($,{type:"preload",text:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),e===r.errorServer&&o.a.createElement($,{type:"warning",text:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"}),e===r.loaded&&o.a.createElement(o.a.Fragment,null,o.a.createElement(be,null),o.a.createElement("main",null,o.a.createElement($e,null),o.a.createElement(bn,null)))))}var gn,On={media_mobile:736},jn=N.b.div(hn(),(function(e){return e.theme.media_mobile})),wn=function(){return o.a.createElement(W.c,null,o.a.createElement(W.a,{exact:!0,path:"/",component:vn}),o.a.createElement(W.a,{exact:!0,path:"/category/:urlCategory",component:vn}))},xn=(t(70),t(71),Object(d.a)({basename:"/"})),En=Object(p.a)(),_n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,yn=Object(u.e)(E(xn),_n(Object(u.a)(En,Object(s.a)(xn))));En.run((gn=I,y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)([C(gn)]);case 2:case"end":return e.stop()}}),e)})))),i.a.render(o.a.createElement(l.a,{store:yn},o.a.createElement(f.a,{history:xn},o.a.createElement(wn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.5bc86173.chunk.js.map