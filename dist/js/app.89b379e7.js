(function(e){function t(t){for(var r,c,a=t[0],i=t[1],u=t[2],l=0,f=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function c(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"aca23631","chunk-2d0aeebb":"3a6b5fcf","chunk-2d0c22bd":"2957adbd","chunk-2d2244c3":"04ae8749","chunk-2d2386b1":"d4503102","chunk-e592fad4":"7060ed16","chunk-2d0a4809":"a4c1aeef","chunk-3883cc2c":"8f92d100","chunk-2d0c42a2":"1b35b70c","chunk-2d0a4638":"20f52174"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=c(e);var u=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",u.name="ChunkLoadError",u.type=r,u.request=s,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/comu/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},s=[],c=(n("034f"),n("2877")),a={},i=Object(c["a"])(a,o,s,!1,null,null,null),u=i.exports,l=n("9483");Object(l["a"])("".concat("/comu/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var p=n("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("Storage"),r("LoginButton"),r("LoginModal"),r("Console")],1)},d=[],h={name:"Home",components:{LoginButton:function(){return n.e("chunk-2d0aeebb").then(n.bind(null,"0bb5"))},LoginModal:function(){return n.e("chunk-2d0c22bd").then(n.bind(null,"48be"))},Storage:function(){return n.e("chunk-2d2386b1").then(n.bind(null,"fefb"))},Console:function(){return n.e("chunk-2d2244c3").then(n.bind(null,"e013"))}}},b=h,g=Object(c["a"])(b,f,d,!1,null,null,null),m=g.exports;r["default"].use(p["a"]);var v=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],w=new p["a"]({mode:"history",base:"/comu/",routes:v}),x=w,k=n("2f62"),j=function(){return{action:null,container:null}},y={},O={setAction:function(e,t){e.action=t},setContainer:function(e,t){e.container=t}},R={namespaced:!0,state:j,actions:y,mutations:O},S=function(){return{session:null,pod:null}},$={},P={setSession:function(e,t){e.session=t},setPod:function(e,t){console.log("setPod",t),e.pod=t}},C={namespaced:!0,state:S,actions:$,mutations:P};r["default"].use(k["a"]);var I=new k["a"].Store({state:{},mutations:{},actions:{},modules:{app:R,session:C}}),_=n("1da1"),A=n("668b"),E=(n("96cf"),n("8a79"),n("ac1f"),n("1276"),n("5319"),n("2ca0"),n("b0c0"),n("d81d"),n("93ef")),F=n("64a5"),T=n("e054"),N=n("60eb"),L=n("c3ef"),M=n("dbc7"),D=n("8522"),B={base:"https://scenaristeur.github.io/ipgs#",id:"https://scenaristeur.github.io/ipgs#id",label:"https://scenaristeur.github.io/ipgs#label",Node:"https://scenaristeur.github.io/ipgs#Node",Edge:"https://scenaristeur.github.io/ipgs#Edge",shape:"https://scenaristeur.github.io/ipgs#shape",backgroundColor:"https://scenaristeur.github.io/ipgs#backgroundColor",borderColor:"https://scenaristeur.github.io/ipgs#borderColor",cid:"https://scenaristeur.github.io/ipgs#cid",x:"https://scenaristeur.github.io/ipgs#x",y:"https://scenaristeur.github.io/ipgs#y",z:"https://scenaristeur.github.io/ipgs#z",properties:"https://scenaristeur.github.io/ipgs#properties",updates:"https://scenaristeur.github.io/ipgs#updates",from:"https://scenaristeur.github.io/ipgs#from",to:"https://scenaristeur.github.io/ipgs#to"},U={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;e.prototype.$explore=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.url.endsWith("/")?this.$readContainer(t):this.$readResource(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$readContainer=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var r,o,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.url,e.next=3,Object(E["d"])(r,{fetch:D["fetch"]});case 3:return o=e.sent,console.log(o),e.next=7,Object(E["b"])(o,{fetch:D["fetch"]});case 7:return s=e.sent,console.log("Resources",s),c={url:r,resources:s},n.commit("app/setContainer",c),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$readResource=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var r,o,s,c,a,i,u,l,p,f,d,h,b,g,m,v,w,x,k,j,y;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("$readResource",t),r=t.url,e.next=4,Object(E["d"])(r,{fetch:D["fetch"]});case 4:return o=e.sent,console.log("dataset",o),s=r.substring(r.lastIndexOf("/")+1).split(".ttl")[0],console.log(s),e.next=10,Object(E["h"])(o,r+"#"+s);case 10:return c=e.sent,e.next=13,Object(E["g"])(c,F["a"].content);case 13:return a=e.sent,e.next=16,Object(E["i"])(o);case 16:i=e.sent,u={nodes:[],edges:[]},l=!1,p=!1,e.prev=20,d=Object(A["a"])(i);case 22:return e.next=24,d.next();case 24:if(!(l=!(h=e.sent).done)){e.next=80;break}return b=h.value,console.log(b.url,b),e.next=29,Object(E["f"])(b,B.id);case 29:return g=e.sent,e.next=32,Object(E["j"])(b,T["a"].type);case 32:return m=e.sent,e.next=35,Object(E["f"])(b,B.label);case 35:if(v=e.sent,console.log(m),w={id:g,url:b.url,type:m,label:v},null==m||m!=B.Node){e.next=63;break}return w.color={},w.type=m.replace(B.base,""),e.next=43,Object(E["f"])(b,B.shape);case 43:return w.shape=e.sent,e.next=46,Object(E["c"])(b,B.cid);case 46:return w.cid=e.sent,e.next=49,Object(E["f"])(b,B.backgroundColor);case 49:return w.color.background=e.sent,e.next=52,Object(E["f"])(b,B.borderColor);case 52:return w.color.border=e.sent,e.next=55,Object(E["f"])(b,B.properties);case 55:return w.properties=e.sent,e.next=58,Object(E["f"])(b,B.updates);case 58:x=e.sent,w.updates=JSON.parse("".concat(x)),u.nodes.push(w),e.next=77;break;case 63:if(null==m||m!=B.Edge){e.next=76;break}return w.type=m.replace(B.base,""),e.next=67,Object(E["j"])(b,B.from);case 67:return k=e.sent,e.next=70,Object(E["j"])(b,B.to);case 70:j=e.sent,k.startsWith(r)?w.from=k.replace(r,""):w.from=k,j.startsWith(r)?w.to=j.replace(r,""):w.to=j,u.edges.push(w),e.next=77;break;case 76:console.log("type unknown",m);case 77:l=!1,e.next=22;break;case 80:e.next=86;break;case 82:e.prev=82,e.t0=e["catch"](20),p=!0,f=e.t0;case 86:if(e.prev=86,e.prev=87,!l||null==d.return){e.next=91;break}return e.next=91,d.return();case 91:if(e.prev=91,!p){e.next=94;break}throw f;case 94:return e.finish(91);case 95:return e.finish(86);case 96:console.log("network",u),y={url:r,updates:a,network:u},console.log("Game",y),n.commit("gamesync/setGame",y);case 100:case"end":return e.stop()}}),e,null,[[20,82,86,96],[87,,91,95]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$setUrl=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t,n,r){var o,s,c,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t,n,r),e.prev=1,e.next=4,Object(E["d"])(t,{fetch:D["fetch"]});case 4:return o=e.sent,console.log("DATASET",o),e.next=8,Object(E["h"])(o,t);case 8:return s=e.sent,s=Object(E["o"])(s,n,r),c=Object(E["n"])(o,s),e.next=13,Object(E["m"])(t,c,{fetch:D["fetch"]});case 13:return a=e.sent,console.log("Saved thing",a),i=D["getDefaultSession"](),this.$getPodInfosFromSession(i),e.abrupt("return",a);case 20:e.prev=20,e.t0=e["catch"](1),console.log("erreur",e.t0,t);case 23:case"end":return e.stop()}}),e,this,[[1,20]])})));return function(t,n,r){return e.apply(this,arguments)}}(),e.prototype.$login=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D["login"]({oidcIssuer:t,redirectUrl:window.location.href,clientName:"GameSync"});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),alert("$login "+e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$logout=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=D["getDefaultSession"](),console.log(t),e.next=5,r.logout();case 5:n.commit("session/setSession",r),n.commit("session/setPod",null),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert("$logout "+e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$checkSessions=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var r,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("params",t),console.log("window.location.href",window.location.href),r=D["getDefaultSession"](),console.log("session",r),D["onSessionRestore"]((function(e){console.log("restore",e);var t=e.split("?")[1];console.log("query",t),n.commit("session/setSession",r),o.$getPodInfosFromSession(r)})),e.prev=5,e.next=8,D["handleIncomingRedirect"]({restorePreviousSession:t.restore,url:window.location.href}).then((function(e){console.log(e)}));case 8:n.commit("session/setSession",r),this.$getPodInfosFromSession(r),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](5),alert("$checkSessions "+e.t0);case 15:case"end":return e.stop()}}),e,this,[[5,12]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getPodInfosFromSession=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,r={},r.logged=t.info.isLoggedIn,!r.logged){e.next=12;break}return r.webId=t.info.webId,e.next=7,this.$getPodInfos(r);case 7:r=e.sent,n.commit("session/setPod",r),r.storage,e.next=13;break;case 12:n.commit("session/setPod",null);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),alert("$getPodInfosFromSession "+e.t0);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getPodInfos=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E["d"])(t.webId,{fetch:D["fetch"]});case 3:return n=e.sent,console.log("DATASET",n),e.next=7,Object(E["h"])(n,t.webId);case 7:return r=e.sent,e.next=10,Object(E["f"])(r,N["a"].name);case 10:return t.name=e.sent,e.next=13,Object(E["k"])(r,N["a"].knows).map((function(e){return{webId:e}}));case 13:return t.friends=e.sent,e.next=16,Object(E["j"])(r,M["a"].storage);case 16:return t.storage=e.sent,e.next=19,Object(E["j"])(r,L["a"].hasPhoto);case 19:t.photo=e.sent,e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](0),console.log("erreur",e.t0,t);case 25:return e.next=27,t;case 27:return e.abrupt("return",e.sent);case 28:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$createFile=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.type&&t.type.mime||"text/turtle",r=encodeURIComponent(t.filename),e.next=5,Object(E["l"])(t.dest,new Blob([t.content||""],{type:n}),{slug:r,fetch:D["fetch"]});case 5:o=e.sent,console.log("File saved at ".concat(Object(E["e"])(o))),this.$explore({url:t.dest}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),alert(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$createFolder=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.dest+encodeURIComponent(t.foldername),e.next=4,Object(E["a"])(n,{fetch:D["fetch"]});case 4:r=e.sent,console.log("Folder saved at ".concat(Object(E["e"])(r))),this.$explore({url:t.dest}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(U);var q=U,G=n("5f5b"),H=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(q,{store:I}),r["default"].use(G["a"]),r["default"].use(H["a"]),r["default"].config.productionTip=!1,new r["default"]({router:x,store:I,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.89b379e7.js.map