webpackJsonp([50],{WVRo:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("vue-fabric",{ref:"canvas",attrs:{width:600,height:600}})],1)},staticRenderFns:[]};var r=a("VU/8")({name:"",data:function(){return{msg:"Welcome to Your Vue.js App"}},mounted:function(){this.createImage()},methods:{createImage:function(){this.$refs.canvas.createImage("http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg",{id:1e4}),this.$refs.canvas.createTriangle({x:0,y:0,x1:10,y1:10,x2:20,y2:20,left:100,top:100,color:"#B2B2B2",drawWidth:2,fillColor:"rgba(255, 255, 255, 0)",id:"triangle"}),this.$refs.canvas.createTextbox("helloworld",{width:30,left:50,top:60,fontSize:14,id:10001,fillColor:"#ff0000"})}}},i,!1,function(e){a("iSdY")},"data-v-4024a1ae",null);t.default=r.exports},iSdY:function(e,t){}});