webpackJsonp([45],{aQRm:function(t,e){},uRgp:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{scroll:"",list:[{name:"第一条",backgroundcolor:"#90B2A3"},{name:"第二条",backgroundcolor:"#A593B2"},{name:"第三条",backgroundcolor:"#A7B293"},{name:"第四条",backgroundcolor:"#0F2798"},{name:"第五条",backgroundcolor:"#0A464D"}],navList:[1,2,3,4,5],box:""}},watch:{scroll:function(){this.loadSroll()}},mounted:function(){var t=this;this.box=this.$refs.a,this.box.addEventListener("scroll",function(){t.dataScroll()},!1)},destroyed:function(){},methods:{handleScroll:function(){window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,document.getElementsByClassName("section")},dataScroll:function(){this.scroll=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop},jump:function(t){var e=document.getElementsByClassName("section"),o=e[t].offsetTop;document.body.scrollTop=o,document.documentElement.scrollTop=o,window.pageYOffset=o},loadSroll:function(){for(var t=$(".nav1"),e=document.getElementsByClassName("section"),o=e.length-1;o>=0;o--)if(this.scroll>=e[o].offsetTop-100){t.eq(o).addClass("current").siblings().removeClass("current");break}}}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{ref:"a",staticClass:"box"},[o("div",{staticClass:"wrapper"},t._l(t.list,function(e,n){return o("div",{key:n,staticClass:"section",staticStyle:{height:"500px",width:"100%"},style:{height:0===n?"1000px":"500px"}},[o("div",{staticStyle:{width:"100%",height:"100%","font-size":"30px","text-align":"center","font-weight":"bold",color:"#fff"},style:{background:e.backgroundcolor}},[t._v(t._s(e.name))])])})),t._v(" "),o("div",{staticStyle:{height:"500px"},attrs:{id:"nac"}}),t._v(" "),o("nav",{staticStyle:{position:"fixed",right:"30px",top:"300px"}},t._l(t.navList,function(e,n){return o("a",{key:n,staticClass:"nav1",class:0===n?"current":"",on:{click:function(e){t.jump(n)}}},[t._v(t._s(e))])}))])])},staticRenderFns:[]};var c=o("VU/8")(n,s,!1,function(t){o("aQRm")},null,null);e.default=c.exports}});