webpackJsonp([3],{"/eZ2":function(A,t,o){"use strict";var e=o("mvHQ"),a=o.n(e),i=o("fZjL"),c=o.n(i),B=o("Au9i");o.n(B);t.a={computed:{count:function(){return""==this.$store.state.detail.count&&this.$store.commit("CHANGE_COUNT"),this.$store.state.detail.count},productDatasView:function(){return this.$store.state.detail.proData.PRO},colSelected:function(){return this.$store.state.detail.colSelected},sizeSelected:function(){return this.$store.state.detail.sizeSelected}},mounted:function(){this.$parent.$on("addToCart",function(A){this.$store.state.detail.proData.PRO.PRICE="",this.$store.state.detail.proData.PRO.HUI_DIAN="",this.$store.state.detail.proData.PRO.POINT="",this.addIntoCar("",A)}.bind(this))},methods:{addIntoCar:function(){var A=!!arguments[1]&&arguments[1],t=!0;c()(this.$store.state.detail.selectType).forEach(function(e){(!this.$store.state.detail.selectType[e]||parseInt(this.$store.state.detail.selectType[e])<=0)&&(A||o.i(B.Toast)({message:"请选择完整的产品属性"}),t=!1)}.bind(this));var e=0,i=!0;if(t&&0==this.$isEmptyObject(this.$store.state.detail.proData.GUIGE)&&(c()(this.$store.state.detail.proData.TYPE).forEach(function(A){var t=this.$store.state.detail.proData.TYPE[A].GUI_GE_JSON;t=JSON.parse(t),i=!0;for(var o in t)i=i&&t[o]==this.$store.state.detail.selectType[o];1==i&&(e=this.$store.state.detail.proData.TYPE[A])}.bind(this)),0==e))return void(A||o.i(B.Toast)({message:"该产品属性无价格设置"}));if(0==this.$store.state.detail.proData.GUIGE.length&&(e=this.$store.state.detail.proData.TYPE[0]),A)return this.$store.state.detail.proData.PRO.PRICE=e.PRICE,this.$store.state.detail.proData.PRO.HUI_DIAN=e.HUI_DIAN,void(this.$store.state.detail.proData.PRO.POINT=e.POINT);var s=[{title:this.productDatasView.NAME,price:this.productDatasView.PRICE,id:this.productDatasView.ID,count:1,yunfei:this.$store.state.detail.proData.YUN_FEI,type:JSON.parse(a()(e)),imgPath:this.$conf.domain+"/"+this.$store.state.detail.proData.PRO.PIC,choseBool:!0}];t&&(0==e.length?o.i(B.Toast)({message:"产品属性错误",duration:2e3}):(this.$store.dispatch("addCarList",s),this.$store.dispatch("setLocalCount",!0),o.i(B.Toast)({message:"添加成功",duration:2e3})))}}}},"/hfh":function(A,t,o){"use strict";var e=o("YOb2"),a=o("ePeb"),i=o("vHvc"),c=o("624t"),B=o("6Q/n");t.a={components:{"v-swiper":e.a,"v-chose":a.a,"v-content":i.a,"v-footer":c.a,"v-baseline":B.a},beforeCreate:function(){this.$dopost("/sysapi/pro/detail/",{id:this.$route.query.id},function(A){A.data&&void 0!==A.data.error&&0===A.data.error?(this.$store.state.detail.selectType={},this.$store.commit("SET_DATAS",A.data.data)):Toast(A.data&&A.data.mess?A.data.mess:"接口错误")}.bind(this))}}},"/pee":function(A,t,o){"use strict";function e(A){o("rXYj")}Object.defineProperty(t,"__esModule",{value:!0});var a=o("/hfh"),i=o("ZRKK"),c=o("VU/8"),B=e,s=c(a.a,i.a,!1,B,"data-v-a2b5787e",null);t.default=s.exports},"36Ui":function(A,t,o){var e=o("RlKh");"string"==typeof e&&(e=[[A.i,e,""]]),e.locals&&(A.exports=e.locals);o("rjj0")("1eceb669",e,!0,{})},"3tKG":function(A,t,o){var e=o("kxFB");t=A.exports=o("FZ+f")(!1),t.push([A.i,"@font-face{font-family:index;src:url("+e(o("tKvB"))+");src:url("+e(o("tKvB"))+'#iefix) format("embedded-opentype"),url('+e(o("KqOx"))+') format("truetype"),url('+e(o("y/SM"))+') format("woff"),url('+e(o("h+vP"))+'#icomoon) format("svg");font-weight:400;font-style:normal}[class*=" icon-"],[class^=icon-]{font-family:index!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-car:before{content:"\\E90C";color:#4d4d4d}.icon-category:before{content:"\\E90D";color:#707070}.icon-ok:before{content:"\\E90B";color:#ea545d}.icon-index:before{content:"\\E903";color:#515151}.icon-right:before{content:"\\E904";color:#515151}.icon-search:before{content:"\\E905";color:#515151}.icon-user:before{content:"\\E90A";color:#515151}.icon-go:before{content:"\\E900";color:#bfbfbf}.icon-less .path1:before{content:"\\E906";color:#f2bb0a}.icon-less .path2:before{content:"\\E907";margin-left:-1em;color:#fff2d9}.icon-less .path3:before{content:"\\E908";margin-left:-1em;color:#fff}.icon-less .path4:before{content:"\\E909";margin-left:-1em;color:#f2bb0a}.icon-com:before{content:"\\E902"}.icon-set:before{content:"\\E901"}',""])},"4RDa":function(A,t,o){"use strict";var e=function(){var A=this,t=A.$createElement;return(A._self._c||t)("div",[A._v("人家是有底线的 -.-")])},a=[],i={render:e,staticRenderFns:a};t.a=i},"5uIW":function(A,t,o){"use strict";var e=function(){var A=this,t=A.$createElement,o=A._self._c||t;return o("div",{staticClass:"swiper"},[o("mt-swipe",{attrs:{auto:4e3}},A._l(A.swiper,function(t){return o("mt-swipe-item",{key:t},[o("img",{attrs:{src:A.checkPic(t)}})])})),A._v(" "),o("div",{staticClass:"back",on:{click:function(t){A.$router.go(-1)}}},[o("span",{staticClass:"icon-go"})])],1)},a=[],i={render:e,staticRenderFns:a};t.a=i},"624t":function(A,t,o){"use strict";function e(A){o("8Tqa")}var a=o("/eZ2"),i=o("7G2u"),c=o("VU/8"),B=e,s=c(a.a,i.a,!1,B,"data-v-a45381c6",null);t.a=s.exports},"6Q/n":function(A,t,o){"use strict";function e(A){o("V8wi")}var a=o("bkTF"),i=o("4RDa"),c=o("VU/8"),B=e,s=c(a.a,i.a,!1,B,"data-v-55ca0448",null);t.a=s.exports},"7G2u":function(A,t,o){"use strict";var e=function(){var A=this,t=A.$createElement,o=A._self._c||t;return o("footer",{staticClass:"footer"},[o("router-link",{staticClass:"footer-index",attrs:{to:{path:"/"}}},[o("i",{staticClass:"icon-index"})]),A._v(" "),o("router-link",{staticClass:"footer-gocar",attrs:{to:{path:"/car"}}},[o("i",{staticClass:"icon-car"}),A._v(" "),A.count?o("span",[A._v(A._s(A.count))]):A._e()]),A._v(" "),o("span",{staticClass:"footer-addcar",on:{click:A.addIntoCar}},[A._v("\n    加入购物车\n  ")])],1)},a=[],i={render:e,staticRenderFns:a};t.a=i},"8Tqa":function(A,t,o){var e=o("UffQ");"string"==typeof e&&(e=[[A.i,e,""]]),e.locals&&(A.exports=e.locals);o("rjj0")("42447914",e,!0,{})},Dcp6:function(A,t,o){"use strict";var e=function(){var A=this,t=A.$createElement,o=A._self._c||t;return A.view?o("section",{staticClass:"chose"},[o("div",{staticClass:"chose-view"},[o("h1",{staticClass:"chose-view-title"},[A._v("\n      "+A._s(A.view.NAME)+"\n    ")]),A._v(" "),o("span",{staticStyle:{color:"#f23030"}},[A._v(A._s(A.view.PRICE)+"元\n      "),A.view.HUI_DIAN?o("span",[A._v(",可积分抵扣:"+A._s(A.view.HUI_DIAN))]):A._e()]),A._v(" "),o("div",{staticStyle:{"font-size":"14px"}},[A._v("购买此产品可获得 "+A._s(A.view.POINT)+" 积分")]),A._v(" "),A.yunfei?o("div",{staticStyle:{"font-size":"14px"}},[A._v("运费: "+A._s(A.yunfei[0].NAME))]):A._e()]),A._v(" "),o("div",{staticClass:"chose-mychosed",attrs:{ontouchstart:""}},[A._l(A.guige,function(t,e){return[o("div",{staticClass:"changeType"},[o("div",[A._v(A._s(t.NAME)+":")]),o("br"),A._v(" "),A._l(t.SUB,function(e,a){return o("span",{class:{active:A.$isEmpty(A.selectType,t.ID+"",0)==e.ID},on:{click:function(o){A.changeType(t.ID,e.ID)}}},[A._v(A._s(e.NAME))])})],2)]})],2)]):A._e()},a=[],i={render:e,staticRenderFns:a};t.a=i},EQgq:function(A,t,o){"use strict";t.a={computed:{swiper:function(){return this.$isEmpty(this.$store.state.detail.proData,"PICS",[])}},methods:{checkPic:function(A){return this.$conf.domain+"/"+A}}}},Gcnn:function(A,t,o){t=A.exports=o("FZ+f")(!1),t.push([A.i,".detail[data-v-a2b5787e]{width:100%;padding-bottom:14vw}",""])},KqHz:function(A,t,o){"use strict";t.a={computed:{content:function(){return this.$store.state.detail.proData.PRO.MESS}}}},KqOx:function(A,t){A.exports="data:application/x-font-ttf;base64,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"},MqE6:function(A,t,o){var e=o("zw5r");"string"==typeof e&&(e=[[A.i,e,""]]),e.locals&&(A.exports=e.locals);o("rjj0")("9ea731be",e,!0,{})},RlKh:function(A,t,o){t=A.exports=o("FZ+f")(!1),t.push([A.i,".content{width:98%;margin-top:10px;margin-left:1vw;margin-right:1vw;border-top:20px solid #f8fcff;font-size:18px;letter-spacing:3px;line-height:26px}.content img{width:100%;height:100%}",""])},UffQ:function(A,t,o){t=A.exports=o("FZ+f")(!1),t.i(o("3tKG"),""),t.push([A.i,'.footer[data-v-a45381c6]{width:100%;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;height:14vw;position:fixed;bottom:0;left:0;background-color:#fff;-moz-user-select:none;-webkit-user-select:none;border-top-color:hsla(0,0%,73%,.14);border-top-style:solid;border-top-width:1px}[data-dpr="2"] .footer[data-v-a45381c6],[data-dpr="2.5"] .footer[data-v-a45381c6],[data-dpr="2.75"] .footer[data-v-a45381c6]{border-top-width:1px}[data-dpr="3"] .footer[data-v-a45381c6],[data-dpr="4"] .footer[data-v-a45381c6]{border-top-width:2px}.footer .footer-addcar[data-v-a45381c6],.footer .footer-gocar[data-v-a45381c6],.footer .footer-index[data-v-a45381c6]{text-align:center}.footer .footer-index[data-v-a45381c6]{-ms-flex:3;-webkit-box-flex:3;flex:3;line-height:14vw;height:14vw;padding-top:1.5vw;border-right-color:#f7f7f7;border-right-style:solid;border-right-width:1px}[data-dpr="2"] .footer .footer-index[data-v-a45381c6],[data-dpr="2.5"] .footer .footer-index[data-v-a45381c6],[data-dpr="2.75"] .footer .footer-index[data-v-a45381c6]{border-right-width:1px}[data-dpr="3"] .footer .footer-index[data-v-a45381c6],[data-dpr="4"] .footer .footer-index[data-v-a45381c6]{border-right-width:2px}.footer .footer-index i[data-v-a45381c6]{font-size:23px}[data-dpr="2"] .footer .footer-index i[data-v-a45381c6]{font-size:45px}[data-dpr="2.5"] .footer .footer-index i[data-v-a45381c6]{font-size:56px}[data-dpr="2.75"] .footer .footer-index i[data-v-a45381c6]{font-size:62px}[data-dpr="3"] .footer .footer-index i[data-v-a45381c6]{font-size:68px}[data-dpr="4"] .footer .footer-index i[data-v-a45381c6]{font-size:90px}.footer .footer-index[data-v-a45381c6]:active{background-color:#f1f1f1}.footer .footer-gocar[data-v-a45381c6]{position:relative;-ms-flex:3;-webkit-box-flex:3;flex:3;height:14vw;line-height:14vw;padding-top:1.6vw}.footer .footer-gocar span[data-v-a45381c6]{height:5.5vw;width:5.5vw;line-height:5.5vw;position:absolute;top:.5vw;right:5.5vw;background-color:#f23030;border-radius:50%;color:#fff;font-size:12px}[data-dpr="2"] .footer .footer-gocar span[data-v-a45381c6]{font-size:24px}[data-dpr="2.5"] .footer .footer-gocar span[data-v-a45381c6]{font-size:30px}[data-dpr="2.75"] .footer .footer-gocar span[data-v-a45381c6]{font-size:33px}[data-dpr="3"] .footer .footer-gocar span[data-v-a45381c6]{font-size:36px}[data-dpr="4"] .footer .footer-gocar span[data-v-a45381c6]{font-size:48px}.footer .footer-gocar[data-v-a45381c6]:active{background-color:#f1f1f1}.footer .footer-gocar i[data-v-a45381c6]{font-size:24px}[data-dpr="2"] .footer .footer-gocar i[data-v-a45381c6]{font-size:48px}[data-dpr="2.5"] .footer .footer-gocar i[data-v-a45381c6]{font-size:60px}[data-dpr="2.75"] .footer .footer-gocar i[data-v-a45381c6]{font-size:66px}[data-dpr="3"] .footer .footer-gocar i[data-v-a45381c6]{font-size:72px}[data-dpr="4"] .footer .footer-gocar i[data-v-a45381c6]{font-size:96px}.footer .footer-addcar[data-v-a45381c6]{-ms-flex:6;-webkit-box-flex:6;flex:6;line-height:14vw;height:14vw;color:#fff;background-color:#f23030;letter-spacing:.2vw}.footer .footer-addcar[data-v-a45381c6]:active{background-color:#ff7d00}',""])},UlMO:function(A,t,o){t=A.exports=o("FZ+f")(!1),t.i(o("3tKG"),""),t.push([A.i,'.swiper[data-v-005a9dd9]{width:100%;position:relative}.swiper .mint-swipe[data-v-005a9dd9]{width:100%;height:100vw}.swiper .mint-swipe img[data-v-005a9dd9]{display:block;width:100%;height:100%}.swiper .back[data-v-005a9dd9]{width:7vw;height:7vw;position:absolute;left:4vw;top:2vw;background-color:rgba(0,0,0,.4);border-radius:50%;text-align:center}.swiper .back span[data-v-005a9dd9]{display:inline-block;line-height:7vw;font-size:20px;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}[data-dpr="2"] .swiper .back span[data-v-005a9dd9]{font-size:40px}[data-dpr="2.5"] .swiper .back span[data-v-005a9dd9]{font-size:50px}[data-dpr="2.75"] .swiper .back span[data-v-005a9dd9]{font-size:55px}[data-dpr="3"] .swiper .back span[data-v-005a9dd9]{font-size:60px}[data-dpr="4"] .swiper .back span[data-v-005a9dd9]{font-size:80px}.swiper .back span[data-v-005a9dd9]:before{color:#fff}.swiper .back[data-v-005a9dd9]:active{-webkit-transform:scale(1.3);transform:scale(1.3)}',""])},Urso:function(A,t,o){t=A.exports=o("FZ+f")(!1),t.push([A.i,"div[data-v-55ca0448]{padding:8vw 0;text-align:center;letter-spacing:.2vw;color:#9e9e9e;font-family:Lato,Microsoft Jhenghei,Hiragino Sans GB,Microsoft YaHei,sans-serif;font-weight:600;font-size:14px}",""])},V8wi:function(A,t,o){var e=o("Urso");"string"==typeof e&&(e=[[A.i,e,""]]),e.locals&&(A.exports=e.locals);o("rjj0")("85e3524a",e,!0,{})},YOb2:function(A,t,o){"use strict";function e(A){o("icp2")}var a=o("EQgq"),i=o("5uIW"),c=o("VU/8"),B=e,s=c(a.a,i.a,!1,B,"data-v-005a9dd9",null);t.a=s.exports},ZRKK:function(A,t,o){"use strict";var e=function(){var A=this,t=A.$createElement,o=A._self._c||t;return o("div",{staticClass:"detail"},[o("v-swiper"),A._v(" "),o("v-chose"),A._v(" "),o("v-content"),A._v(" "),o("v-baseline"),A._v(" "),o("v-footer")],1)},a=[],i={render:e,staticRenderFns:a};t.a=i},bFc6:function(A,t,o){"use strict";var e=o("Au9i"),a=(o.n(e),o("NYxO"));t.a={computed:o.i(a.a)({view:function(A){return A.detail.proData.PRO},yunfei:function(A){return A.detail.proData.YUN_FEI},guige:function(A){return A.detail.proData.GUIGE},selectType:function(A){return A.detail.selectType}}),data:function(){return{}},boforeCreate:function(){},methods:{changeType:function(A,t){this.$store.commit("CHANGE_COL_SELECTED",[A,t]),this.$parent.$emit("addToCart",!0),this.$forceUpdate()},getTypeSelected:function(A){return this.$isEmpty(this.selectType,A+"",0)}}}},bkTF:function(A,t,o){"use strict";t.a={}},ePeb:function(A,t,o){"use strict";function e(A){o("MqE6")}var a=o("bFc6"),i=o("Dcp6"),c=o("VU/8"),B=e,s=c(a.a,i.a,!1,B,"data-v-03cf8671",null);t.a=s.exports},"h+vP":function(A,t,o){A.exports=o.p+"static/img/icomoon.18e8503.svg"},icp2:function(A,t,o){var e=o("UlMO");"string"==typeof e&&(e=[[A.i,e,""]]),e.locals&&(A.exports=e.locals);o("rjj0")("14e2e8f6",e,!0,{})},kxFB:function(A,t){A.exports=function(A){return"string"!=typeof A?A:(/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),/["'() \t\n]/.test(A)?'"'+A.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':A)}},rXYj:function(A,t,o){var e=o("Gcnn");"string"==typeof e&&(e=[[A.i,e,""]]),e.locals&&(A.exports=e.locals);o("rjj0")("79d02463",e,!0,{})},tKvB:function(A,t){A.exports="data:application/vnd.ms-fontobject;base64,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"},vHvc:function(A,t,o){"use strict";function e(A){o("36Ui")}var a=o("KqHz"),i=o("x2wD"),c=o("VU/8"),B=e,s=c(a.a,i.a,!1,B,null,null);t.a=s.exports},x2wD:function(A,t,o){"use strict";var e=function(){var A=this,t=A.$createElement;return(A._self._c||t)("div",{staticClass:"content",domProps:{innerHTML:A._s(A.content)}})},a=[],i={render:e,staticRenderFns:a};t.a=i},"y/SM":function(A,t){A.exports="data:application/font-woff;base64,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"},zw5r:function(A,t,o){t=A.exports=o("FZ+f")(!1),t.push([A.i,'.chose[data-v-03cf8671]{padding:3vw}.chose .chose-view>h1[data-v-03cf8671]{font-size:18px;color:#2c3e50}[data-dpr="2"] .chose .chose-view>h1[data-v-03cf8671]{font-size:36px}[data-dpr="2.5"] .chose .chose-view>h1[data-v-03cf8671]{font-size:45px}[data-dpr="2.75"] .chose .chose-view>h1[data-v-03cf8671]{font-size:50px}[data-dpr="3"] .chose .chose-view>h1[data-v-03cf8671]{font-size:54px}[data-dpr="4"] .chose .chose-view>h1[data-v-03cf8671]{font-size:72px}.chose .chose-view>h1>span[data-v-03cf8671]{color:#ee7150}.chose .chose-view>span[data-v-03cf8671]{line-height:10vw;color:#f23030;font-size:17px;font-weight:600}[data-dpr="2"] .chose .chose-view>span[data-v-03cf8671]{font-size:34px}[data-dpr="2.5"] .chose .chose-view>span[data-v-03cf8671]{font-size:43px}[data-dpr="2.75"] .chose .chose-view>span[data-v-03cf8671]{font-size:47px}[data-dpr="3"] .chose .chose-view>span[data-v-03cf8671]{font-size:51px}[data-dpr="4"] .chose .chose-view>span[data-v-03cf8671]{font-size:68px}.chose .chose-mychosed[data-v-03cf8671]{background-color:#fff}.chose .chose-mychosed>div[data-v-03cf8671]{padding-top:20px}.chose .chose-mychosed>div span[data-v-03cf8671]{font-size:13px;padding:6px 10px;border-radius:5px;border:1px solid #6f6f6f;margin-right:3vw;color:#6f6f6f}[data-dpr="2"] .chose .chose-mychosed>div span[data-v-03cf8671]{font-size:26px}[data-dpr="2.5"] .chose .chose-mychosed>div span[data-v-03cf8671]{font-size:33px}[data-dpr="2.75"] .chose .chose-mychosed>div span[data-v-03cf8671]{font-size:36px}[data-dpr="3"] .chose .chose-mychosed>div span[data-v-03cf8671]{font-size:39px}[data-dpr="4"] .chose .chose-mychosed>div span[data-v-03cf8671]{font-size:52px}.chose .chose-mychosed>div span.active[data-v-03cf8671],.chose .chose-mychosed>div span[data-v-03cf8671]:active{color:#f23030;border-color:#f23030}.chose .footer[data-v-03cf8671]{width:100%;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;height:14vw;position:fixed;bottom:0;left:0;background-color:#fff;-moz-user-select:none;-webkit-user-select:none;border-top-color:hsla(0,0%,73%,.14);border-top-style:solid;border-top-width:1px}[data-dpr="2"] .chose .footer[data-v-03cf8671],[data-dpr="2.5"] .chose .footer[data-v-03cf8671],[data-dpr="2.75"] .chose .footer[data-v-03cf8671]{border-top-width:1px}[data-dpr="3"] .chose .footer[data-v-03cf8671],[data-dpr="4"] .chose .footer[data-v-03cf8671]{border-top-width:2px}.chose .footer .footer-addcar[data-v-03cf8671],.chose .footer .footer-gocar[data-v-03cf8671],.chose .footer .footer-index[data-v-03cf8671]{text-align:center}.chose .footer .footer-index[data-v-03cf8671]{-ms-flex:3;-webkit-box-flex:3;flex:3;line-height:14vw;height:14vw;padding-top:1.5vw;border-right-color:#f7f7f7;border-right-style:solid;border-right-width:1px}[data-dpr="2"] .chose .footer .footer-index[data-v-03cf8671],[data-dpr="2.5"] .chose .footer .footer-index[data-v-03cf8671],[data-dpr="2.75"] .chose .footer .footer-index[data-v-03cf8671]{border-right-width:1px}[data-dpr="3"] .chose .footer .footer-index[data-v-03cf8671],[data-dpr="4"] .chose .footer .footer-index[data-v-03cf8671]{border-right-width:2px}.chose .footer .footer-index i[data-v-03cf8671]{font-size:23px}[data-dpr="2"] .chose .footer .footer-index i[data-v-03cf8671]{font-size:45px}[data-dpr="2.5"] .chose .footer .footer-index i[data-v-03cf8671]{font-size:56px}[data-dpr="2.75"] .chose .footer .footer-index i[data-v-03cf8671]{font-size:62px}[data-dpr="3"] .chose .footer .footer-index i[data-v-03cf8671]{font-size:68px}[data-dpr="4"] .chose .footer .footer-index i[data-v-03cf8671]{font-size:90px}.chose .footer .footer-index[data-v-03cf8671]:active{background-color:#f1f1f1}.chose .footer .footer-gocar[data-v-03cf8671]{position:relative;-ms-flex:3;-webkit-box-flex:3;flex:3;height:14vw;line-height:14vw;padding-top:1.6vw}.chose .footer .footer-gocar span[data-v-03cf8671]{height:5.5vw;width:5.5vw;line-height:5.5vw;position:absolute;top:.5vw;right:5.5vw;background-color:#f23030;border-radius:50%;color:#fff;font-size:12px}[data-dpr="2"] .chose .footer .footer-gocar span[data-v-03cf8671]{font-size:24px}[data-dpr="2.5"] .chose .footer .footer-gocar span[data-v-03cf8671]{font-size:30px}[data-dpr="2.75"] .chose .footer .footer-gocar span[data-v-03cf8671]{font-size:33px}[data-dpr="3"] .chose .footer .footer-gocar span[data-v-03cf8671]{font-size:36px}[data-dpr="4"] .chose .footer .footer-gocar span[data-v-03cf8671]{font-size:48px}.chose .footer .footer-gocar[data-v-03cf8671]:active{background-color:#f1f1f1}.chose .footer .footer-gocar i[data-v-03cf8671]{font-size:24px}[data-dpr="2"] .chose .footer .footer-gocar i[data-v-03cf8671]{font-size:48px}[data-dpr="2.5"] .chose .footer .footer-gocar i[data-v-03cf8671]{font-size:60px}[data-dpr="2.75"] .chose .footer .footer-gocar i[data-v-03cf8671]{font-size:66px}[data-dpr="3"] .chose .footer .footer-gocar i[data-v-03cf8671]{font-size:72px}[data-dpr="4"] .chose .footer .footer-gocar i[data-v-03cf8671]{font-size:96px}.chose .footer .footer-addcar[data-v-03cf8671]{-ms-flex:6;-webkit-box-flex:6;flex:6;line-height:14vw;height:14vw;color:#fff;background-color:#f23030;letter-spacing:.2vw}.chose .footer .footer-addcar[data-v-03cf8671]:active{background-color:#ff7d00}',""])}});