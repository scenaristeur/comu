(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2386b1"],{fefb:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return null!=t.pod?o("div",[t._v(" ST "+t._s(t.pod)+" "),null!=t.pod.storage?o("div",[t._v(" Storage : "+t._s(t.pod.storage)+" ")]):o("div",[o("b-container",{attrs:{fluid:""}},[o("b-row",{staticClass:"my-1"},[o("b-col",{attrs:{sm:"5"}},[o("label",{attrs:{for:"candidate"}},[t._v("It seems that your profile don't have a "),o("code",[t._v(" solid:storage ")]),t._v(" configured,"),o("br"),t._v(" you can configure it with :")])]),o("b-col",{attrs:{sm:"7"}},[o("b-form-input",{attrs:{id:"candidate"},model:{value:t.storageCandidate,callback:function(e){t.storageCandidate=e},expression:"storageCandidate"}})],1)],1),o("b-button",{on:{click:t.configureStorage}},[t._v("Configure")])],1)],1)]):t._e()},n=[],s=(o("ac1f"),o("1276"),o("dbc7")),i={name:"Storage",data:function(){return{storageCandidate:""}},methods:{configureStorage:function(){console.log(this.storageCandidate),this.$setUrl(this.pod.webId,s["a"].storage,this.storageCandidate)}},watch:{pod:function(t){null!=t&&(this.storageCandidate=t.webId.split("profile")[0])}},computed:{action:{get:function(){return this.$store.state.app.action},set:function(){}},pod:{get:function(){return this.$store.state.session.pod},set:function(){}}}},r=i,d=o("2877"),c=Object(d["a"])(r,a,n,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2386b1.b8c20974.js.map