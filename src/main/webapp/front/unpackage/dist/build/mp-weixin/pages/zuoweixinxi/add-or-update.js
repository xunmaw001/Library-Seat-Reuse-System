(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zuoweixinxi/add-or-update"],{"0202":function(e,n,t){"use strict";t.r(n);var r=t("b187"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},"299e":function(e,n,t){},3559:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"3a0d":function(e,n,t){"use strict";(function(e){t("e3bc");r(t("66fd"));var n=r(t("b669"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},8573:function(e,n,t){"use strict";var r=t("299e"),a=t.n(r);a.a},b187:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,u){try{var o=e[i](u),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function o(e){i(u,r,a,o,c,"next",e)}function c(e){i(u,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("f777"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{cross:"",ruleForm:{zixishimingcheng:"",zuoweihao:"",fengmian:"",zuoweizhuangtai:"空",didian:"",fuzeren:"",beizhu:""},zuoweizhuangtaiOptions:[],zuoweizhuangtaiIndex:0,user:{},ro:{zixishimingcheng:!1,zuoweihao:!1,fengmian:!1,zuoweizhuangtai:!1,didian:!1,fuzeren:!1,beizhu:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return u(r.default.mark((function a(){var i,u,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,t.$api.session(i);case 3:if(u=a.sent,t.user=u.data,t.ro.zuoweizhuangtai=!0,t.zuoweizhuangtaiOptions="已被预定,空".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=15;break}return t.ruleForm.id=n.id,a.next=13,t.$api.info("zuoweixinxi",t.ruleForm.id);case 13:u=a.sent,t.ruleForm=u.data;case 15:if(t.cross=n.cross,!n.cross){a.next=51;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 19:if((a.t1=a.t0()).done){a.next=51;break}if(c=a.t1.value,"zixishimingcheng"!=c){a.next=25;break}return t.ruleForm.zixishimingcheng=o[c],t.ro.zixishimingcheng=!0,a.abrupt("continue",19);case 25:if("zuoweihao"!=c){a.next=29;break}return t.ruleForm.zuoweihao=o[c],t.ro.zuoweihao=!0,a.abrupt("continue",19);case 29:if("fengmian"!=c){a.next=33;break}return t.ruleForm.fengmian=o[c],t.ro.fengmian=!0,a.abrupt("continue",19);case 33:if("zuoweizhuangtai"!=c){a.next=37;break}return t.ruleForm.zuoweizhuangtai=o[c],t.ro.zuoweizhuangtai=!0,a.abrupt("continue",19);case 37:if("didian"!=c){a.next=41;break}return t.ruleForm.didian=o[c],t.ro.didian=!0,a.abrupt("continue",19);case 41:if("fuzeren"!=c){a.next=45;break}return t.ruleForm.fuzeren=o[c],t.ro.fuzeren=!0,a.abrupt("continue",19);case 45:if("beizhu"!=c){a.next=49;break}return t.ruleForm.beizhu=o[c],t.ro.beizhu=!0,a.abrupt("continue",19);case 49:a.next=19;break;case 51:t.styleChange();case 52:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},zuoweizhuangtaiChange:function(e){this.zuoweizhuangtaiIndex=e.target.value,this.ruleForm.zuoweizhuangtai=this.zuoweizhuangtaiOptions[this.zuoweizhuangtaiIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function t(){var a,i,u,o,c,s,f,l,d,g;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.zuoweizhuangtai){t.next=3;break}return n.$utils.msg("座位状态不能为空"),t.abrupt("return");case 3:if(!n.cross){t.next=19;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){t.next=19;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=15;break}for(f in s)f==o&&(s[f]=c);return l=e.getStorageSync("crossTable"),t.next=13,n.$api.update("".concat(l),s);case 13:t.next=19;break;case 15:a=Number(e.getStorageSync("userid")),i=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 19:if(!i||!a){t.next=41;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=i,d={page:1,limit:10,crossuserid:a,crossrefid:i},t.next=25,n.$api.list("zuoweixinxi",d);case 25:if(g=t.sent,!(g.data.total>=u)){t.next=31;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 31:if(!n.ruleForm.id){t.next=36;break}return t.next=34,n.$api.update("zuoweixinxi",n.ruleForm);case 34:t.next=38;break;case 36:return t.next=38,n.$api.add("zuoweixinxi",n.ruleForm);case 38:n.$utils.msgBack("提交成功");case 39:t.next=49;break;case 41:if(!n.ruleForm.id){t.next=46;break}return t.next=44,n.$api.update("zuoweixinxi",n.ruleForm);case 44:t.next=48;break;case 46:return t.next=48,n.$api.add("zuoweixinxi",n.ruleForm);case 48:n.$utils.msgBack("提交成功");case 49:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},b669:function(e,n,t){"use strict";t.r(n);var r=t("3559"),a=t("0202");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("8573");var u,o=t("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"12d33616",null,!1,r["a"],u);n["default"]=c.exports}},[["3a0d","common/runtime","common/vendor"]]]);