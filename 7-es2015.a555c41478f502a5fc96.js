(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+XIT":function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));const t="shared-modules.business-segment."},EwA9:function(n,l,e){"use strict";e.d(l,"a",(function(){return i}));var t=e("/kTj"),s=e("tFIl"),u=e("HO0R");class i{constructor(n){this.debug=n.factory(new.target.name,t.a.All)}toBusinessSegmentModel(n){let l=[];n.stores instanceof Array&&(l=n.stores.map(n=>({slno:s.c.number(n.slno),groupIndex:s.c.number(n.groupIndex),storeIndex:s.c.number(n.storeIndex),storeId:s.c.number(n.store_id)})));const e={groupIndex:s.c.number(n.groupIndex),slno:s.c.number(n.slno),name:s.c.string(n.name),stores:l};return new u.a(e)}}},Fbhx:function(n,l,e){"use strict";e.d(l,"a",(function(){return s}));var t=e("+XIT");class s{constructor(n){n.addLoaderWithPrefixedTranslations("/cabinet/shared-modules/business-segment",t.a)}}},FmVO:function(n,l,e){"use strict";function t(n){return l=>n+l[0]}e.d(l,"a",(function(){return t}))},HO0R:function(n,l,e){"use strict";e.d(l,"a",(function(){return s}));var t=e("tFIl");class s extends t.a{constructor(n={}){super(),this.fillAll(n,["groupIndex","slno","name","stores"])}}},NxlO:function(n,l,e){"use strict";e.d(l,"a",(function(){return u}));var t=e("CqXF"),s=e("lJxs");class u{constructor(n,l){this.adapter=n,this.api=l}saveSorting(n){return this.api.put("storegroups/sort",{group_ids:n.join(",")}).pipe(Object(t.a)(void 0))}getStoreGroups(){return this.api.get("storegroups").pipe(Object(s.a)(n=>n.map(n=>this.adapter.toBusinessSegmentModel(n))))}getStores(){return this.api.get("stores")}createStoreGroup(n){return this.api.post("storegroups",n)}updateStoreGroup(n,l){return this.api.put(`storegroups/${n}`,l)}deleteStoreGroup(n,l){return this.api.delete(`storegroups/${n}`,{params:{slno:l}})}}},bUbq:function(n,l,e){"use strict";e.d(l,"a",(function(){return d})),e.d(l,"b",(function(){return I}));var t=e("8Y7J"),s=e("RHbX"),u=e("Xrj0"),i=e("TSSN"),o=e("s7LF"),r=e("SVse"),a=e("oFlN"),d=(e("sFX2"),e("+2T5"),e("NxlO"),e("S+vS"),e("XpwZ"),t["\u0275crt"]({encapsulation:0,styles:["[_nghost-%COMP%] {\n      min-width: 500px;\n      min-height: 520px;\n    }"],data:{}}));function c(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-loader",[["class","modal-loader"],["type","overlay"]],[[8,"className",0]],null,null,s.b,s.a)),t["\u0275did"](1,49152,null,0,u.a,[],{type:[0,"type"]},null)],(function(n,l){n(l,1,0,"overlay")}),(function(n,l){n(l,0,0,t["\u0275nov"](l,1).cssClassByType)}))}function g(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""])),t["\u0275pid"](131072,i.i,[i.j,t.ChangeDetectorRef])],null,(function(n,l){var e=l.component;n(l,1,0,t["\u0275unv"](l,1,0,t["\u0275nov"](l,2).transform(e.i18n+"business-segment-form.create-new-group")))}))}function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.parent.context.$implicit.name)}))}function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"option",[],[[1,"data-slno",0],[1,"data-index",0]],null,null,null,null)),t["\u0275did"](1,147456,null,0,o.w,[t.ElementRef,t.Renderer2,[2,o.C]],{value:[0,"value"]},null),t["\u0275did"](2,147456,null,0,o.H,[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,g)),t["\u0275did"](4,16384,null,0,r.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,p)),t["\u0275did"](6,16384,null,0,r.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,t["\u0275inlineInterpolate"](2,"",l.context.$implicit.groupIndex,"",l.context.$implicit.slno,"")),n(l,2,0,t["\u0275inlineInterpolate"](2,"",l.context.$implicit.groupIndex,"",l.context.$implicit.slno,"")),n(l,4,0,0===l.context.$implicit.groupIndex),n(l,6,0,0!==l.context.$implicit.groupIndex)}),(function(n,l){n(l,0,0,l.context.$implicit.slno,l.context.$implicit.groupIndex)}))}function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","c_relationship-card"]],[[8,"hidden",0]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toggleStore(n.context.$implicit)&&t),t}),null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"div",[["class","card-block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),t["\u0275ted"](3,null,["",""]))],null,(function(n,l){var e=l.component;n(l,0,0,l.context.$implicit.isChecked),n(l,3,0,l.context.$implicit[e.instanceSettings.storeNameType]||"")}))}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","c_relationship-card"]],[[8,"hidden",0]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toggleStore(n.context.$implicit)&&t),t}),null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"div",[["class","card-block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),t["\u0275ted"](3,null,["",""]))],null,(function(n,l){var e=l.component;n(l,0,0,!l.context.$implicit.isChecked),n(l,3,0,l.context.$implicit[e.instanceSettings.storeNameType]||"")}))}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,11,"div",[["class","small-12 column text-right"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,8,"label",[],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,5,"input",[["class","input__text form-control"],["name","is_public"],["type","checkbox"]],[[8,"checked",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(n,l,e){var s=!0,u=n.component;return"change"===l&&(s=!1!==t["\u0275nov"](n,3).onChange(e.target.checked)&&s),"blur"===l&&(s=!1!==t["\u0275nov"](n,3).onTouched()&&s),"ngModelChange"===l&&(s=!1!==(u.bs.is_public=e)&&s),s}),null,null)),t["\u0275did"](3,16384,null,0,o.b,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,o.q,(function(n){return[n]}),[o.b]),t["\u0275did"](5,671744,null,0,o.v,[[2,o.d],[8,null],[8,null],[6,o.q]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,o.r,null,[o.v]),t["\u0275did"](7,16384,null,0,o.s,[[4,o.r]],null,null),(n()(),t["\u0275ted"](8,null,[" ",""])),t["\u0275pid"](131072,i.i,[i.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](10,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](11,0,null,null,0,"br",[],null,null,null,null,null))],(function(n,l){n(l,5,0,"is_public",l.component.bs.is_public)}),(function(n,l){var e=l.component;n(l,2,0,e.bs.slno-0==0&&e.bs.groupIndex-0!=0,t["\u0275nov"](l,7).ngClassUntouched,t["\u0275nov"](l,7).ngClassTouched,t["\u0275nov"](l,7).ngClassPristine,t["\u0275nov"](l,7).ngClassDirty,t["\u0275nov"](l,7).ngClassValid,t["\u0275nov"](l,7).ngClassInvalid,t["\u0275nov"](l,7).ngClassPending),n(l,8,0,t["\u0275unv"](l,8,0,t["\u0275nov"](l,9).transform(e.i18n+"business-segment-form.make-group-global")))}))}function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"button",[["class","btn btn--alert"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.deleteGroup()&&t),t}),null,null)),(n()(),t["\u0275ted"](1,null,["",""])),t["\u0275pid"](131072,i.i,[i.j,t.ChangeDetectorRef])],null,(function(n,l){var e=l.component;n(l,0,0,e.submitted),n(l,1,0,t["\u0275unv"](l,1,0,t["\u0275nov"](l,2).transform(e.i18n+"business-segment-form.delete-group-button")))}))}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,78,"form",[["class","business-segment-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var s=!0,u=n.component;return"submit"===l&&(s=!1!==t["\u0275nov"](n,2).onSubmit(e)&&s),"reset"===l&&(s=!1!==t["\u0275nov"](n,2).onReset()&&s),"ngSubmit"===l&&(s=!1!==u.onSubmit()&&s),s}),null,null)),t["\u0275did"](1,16384,null,0,o.I,[],null,null),t["\u0275did"](2,4210688,[["bsForm",4]],0,o.u,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,o.d,null,[o.u]),t["\u0275did"](4,16384,null,0,o.t,[[4,o.d]],null,null),(n()(),t["\u0275eld"](5,0,null,null,31,"div",[["class","row collapse"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,17,"div",[["class","form-group small-12 medium-6 column"]],null,null,null,null,null)),(n()(),t["\u0275eld"](7,0,null,null,2,"label",[],null,null,null,null,null)),(n()(),t["\u0275ted"](8,null,["",":"])),t["\u0275pid"](131072,i.i,[i.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](10,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](11,0,null,null,12,"select",[["name","groupIndex"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(n,l,e){var s=!0,u=n.component;return"change"===l&&(s=!1!==t["\u0275nov"](n,12).onChange(e.target.value)&&s),"blur"===l&&(s=!1!==t["\u0275nov"](n,12).onTouched()&&s),"ngModelChange"===l&&(s=u.bs.groupIndex+(u.bs.slno=e)!==!1&&s),"change"===l&&(s=!1!==u.setSegment(e)&&s),s}),null,null)),t["\u0275did"](12,16384,null,0,o.C,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,o.q,(function(n){return[n]}),[o.C]),t["\u0275did"](14,671744,null,0,o.v,[[2,o.d],[8,null],[8,null],[6,o.q]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,o.r,null,[o.v]),t["\u0275did"](16,16384,null,0,o.s,[[4,o.r]],null,null),(n()(),t["\u0275eld"](17,0,null,null,4,"option",[["value","0"]],[[1,"data-index",0]],null,null,null,null)),t["\u0275did"](18,147456,null,0,o.w,[t.ElementRef,t.Renderer2,[2,o.C]],{value:[0,"value"]},null),t["\u0275did"](19,147456,null,0,o.H,[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(n()(),t["\u0275ted"](20,null,["",""])),t["\u0275pid"](131072,i.i,[i.j,t.ChangeDetectorRef]),(n()(),t["\u0275and"](16777216,null,null,1,null,m)),t["\u0275did"](23,278528,null,0,r.m,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](24,0,null,null,12,"div",[["class","form-group small-12 medium-6 column"]],null,null,null,null,null)),(n()(),t["\u0275eld"](25,0,null,null,2,"label",[],null,null,null,null,null)),(n()(),t["\u0275ted"](26,null,["","*:"])),t["\u0275pid"](131072,i.i,[i.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](28,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](29,0,null,null,7,"input",[["class","input__text form-control"],["name","name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,e){var s=!0,u=n.component;return"input"===l&&(s=!1!==t["\u0275nov"](n,30)._handleInput(e.target.value)&&s),"blur"===l&&(s=!1!==t["\u0275nov"](n,30).onTouched()&&s),"compositionstart"===l&&(s=!1!==t["\u0275nov"](n,30)._compositionStart()&&s),"compositionend"===l&&(s=!1!==t["\u0275nov"](n,30)._compositionEnd(e.target.value)&&s),"ngModelChange"===l&&(s=!1!==(u.bs.name=e)&&s),s}),null,null)),t["\u0275did"](30,16384,null,0,o.e,[t.Renderer2,t.ElementRef,[2,o.a]],null,null),t["\u0275did"](31,16384,null,0,o.B,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,o.p,(function(n){return[n]}),[o.B]),t["\u0275prd"](1024,null,o.q,(function(n){return[n]}),[o.e]),t["\u0275did"](34,671744,null,0,o.v,[[2,o.d],[6,o.p],[8,null],[6,o.q]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,o.r,null,[o.v]),t["\u0275did"](36,16384,null,0,o.s,[[4,o.r]],null,null),(n()(),t["\u0275eld"](37,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275eld"](38,0,null,null,30,"div",[["class","row group-stores c_relationship"]],null,null,null,null,null)),(n()(),t["\u0275eld"](39,0,null,null,14,"div",[["class","small-6 columns c_relationship-column"]],null,null,null,null,null)),(n()(),t["\u0275eld"](40,0,null,null,2,"h4",[["class","c_relationship-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](41,null,["",""])),t["\u0275pid"](131072,i.i,[i.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](43,0,null,null,6,"input",[["class","c_relationship-filter"],["name","storesFilter"],["type","text"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,e){var s=!0,u=n.component;return"input"===l&&(s=!1!==t["\u0275nov"](n,44)._handleInput(e.target.value)&&s),"blur"===l&&(s=!1!==t["\u0275nov"](n,44).onTouched()&&s),"compositionstart"===l&&(s=!1!==t["\u0275nov"](n,44)._compositionStart()&&s),"compositionend"===l&&(s=!1!==t["\u0275nov"](n,44)._compositionEnd(e.target.value)&&s),"ngModelChange"===l&&(s=!1!==(u.storesFilter=e)&&s),s}),null,null)),t["\u0275did"](44,16384,null,0,o.e,[t.Renderer2,t.ElementRef,[2,o.a]],null,null),t["\u0275prd"](1024,null,o.q,(function(n){return[n]}),[o.e]),t["\u0275did"](46,671744,null,0,o.v,[[2,o.d],[8,null],[8,null],[6,o.q]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,o.r,null,[o.v]),t["\u0275did"](48,16384,null,0,o.s,[[4,o.r]],null,null),t["\u0275pid"](131072,i.i,[i.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](50,0,null,null,3,"div",[["class","c_relationship-list"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,2,null,h)),t["\u0275did"](52,278528,null,0,r.m,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275ppd"](53,3),(n()(),t["\u0275eld"](54,0,null,null,14,"div",[["class","small-6 columns c_relationship-column"]],null,null,null,null,null)),(n()(),t["\u0275eld"](55,0,null,null,2,"h4",[["class","c_relationship-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](56,null,["",""])),t["\u0275pid"](131072,i.i,[i.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](58,0,null,null,6,"input",[["class","c_relationship-filter"],["name","groupStoresFilter"],["type","text"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,e){var s=!0,u=n.component;return"input"===l&&(s=!1!==t["\u0275nov"](n,59)._handleInput(e.target.value)&&s),"blur"===l&&(s=!1!==t["\u0275nov"](n,59).onTouched()&&s),"compositionstart"===l&&(s=!1!==t["\u0275nov"](n,59)._compositionStart()&&s),"compositionend"===l&&(s=!1!==t["\u0275nov"](n,59)._compositionEnd(e.target.value)&&s),"ngModelChange"===l&&(s=!1!==(u.groupStoresFilter=e)&&s),s}),null,null)),t["\u0275did"](59,16384,null,0,o.e,[t.Renderer2,t.ElementRef,[2,o.a]],null,null),t["\u0275prd"](1024,null,o.q,(function(n){return[n]}),[o.e]),t["\u0275did"](61,671744,null,0,o.v,[[2,o.d],[8,null],[8,null],[6,o.q]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,o.r,null,[o.v]),t["\u0275did"](63,16384,null,0,o.s,[[4,o.r]],null,null),t["\u0275pid"](131072,i.i,[i.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](65,0,null,null,3,"div",[["class","c_relationship-list"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,2,null,b)),t["\u0275did"](67,278528,null,0,r.m,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275ppd"](68,3),(n()(),t["\u0275eld"](69,0,null,null,9,"div",[["class","submit-wrapper row collapse"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](71,16384,null,0,r.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](72,0,null,null,2,"div",[["class","small-6 column"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](74,16384,null,0,r.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](75,0,null,null,3,"div",[["class","small-6 column text-right"]],null,null,null,null,null)),(n()(),t["\u0275eld"](76,0,null,null,2,"button",[["class","btn btn--primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](77,null,["",""])),t["\u0275pid"](131072,i.i,[i.j,t.ChangeDetectorRef])],(function(n,l){var e=l.component;n(l,14,0,"groupIndex",e.bs.groupIndex+e.bs.slno),n(l,18,0,"0"),n(l,19,0,"0"),n(l,23,0,e.segments),n(l,31,0,""),n(l,34,0,"name",e.bs.is_public&&!e.auth.isAdmin(),e.bs.name),n(l,46,0,"storesFilter",e.storesFilter);var s=t["\u0275unv"](l,52,0,n(l,53,0,t["\u0275nov"](l.parent,0),e.stores,e.storesFilter,e.storesFilterBy));n(l,52,0,s),n(l,61,0,"groupStoresFilter",e.groupStoresFilter);var u=t["\u0275unv"](l,67,0,n(l,68,0,t["\u0275nov"](l.parent,0),e.stores,e.groupStoresFilter,e.storesFilterBy));n(l,67,0,u),n(l,71,0,e.auth.isAdmin()),n(l,74,0,0!=e.bs.groupIndex)}),(function(n,l){var e=l.component;n(l,0,0,t["\u0275nov"](l,4).ngClassUntouched,t["\u0275nov"](l,4).ngClassTouched,t["\u0275nov"](l,4).ngClassPristine,t["\u0275nov"](l,4).ngClassDirty,t["\u0275nov"](l,4).ngClassValid,t["\u0275nov"](l,4).ngClassInvalid,t["\u0275nov"](l,4).ngClassPending),n(l,8,0,t["\u0275unv"](l,8,0,t["\u0275nov"](l,9).transform(e.i18n+"business-segment-form.select-group"))),n(l,11,0,t["\u0275nov"](l,16).ngClassUntouched,t["\u0275nov"](l,16).ngClassTouched,t["\u0275nov"](l,16).ngClassPristine,t["\u0275nov"](l,16).ngClassDirty,t["\u0275nov"](l,16).ngClassValid,t["\u0275nov"](l,16).ngClassInvalid,t["\u0275nov"](l,16).ngClassPending),n(l,17,0,0),n(l,20,0,t["\u0275unv"](l,20,0,t["\u0275nov"](l,21).transform(e.i18n+"business-segment-form.create-new-group"))),n(l,26,0,t["\u0275unv"](l,26,0,t["\u0275nov"](l,27).transform(e.i18n+"business-segment-form.group-name"))),n(l,29,0,t["\u0275nov"](l,31).required?"":null,t["\u0275nov"](l,36).ngClassUntouched,t["\u0275nov"](l,36).ngClassTouched,t["\u0275nov"](l,36).ngClassPristine,t["\u0275nov"](l,36).ngClassDirty,t["\u0275nov"](l,36).ngClassValid,t["\u0275nov"](l,36).ngClassInvalid,t["\u0275nov"](l,36).ngClassPending),n(l,41,0,t["\u0275unv"](l,41,0,t["\u0275nov"](l,42).transform(e.i18n+"business-segment-form.store-list"))),n(l,43,0,t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](l,43,0,t["\u0275nov"](l,49).transform(e.i18n+"business-segment-form.store-list-search")),""),t["\u0275nov"](l,48).ngClassUntouched,t["\u0275nov"](l,48).ngClassTouched,t["\u0275nov"](l,48).ngClassPristine,t["\u0275nov"](l,48).ngClassDirty,t["\u0275nov"](l,48).ngClassValid,t["\u0275nov"](l,48).ngClassInvalid,t["\u0275nov"](l,48).ngClassPending),n(l,56,0,t["\u0275unv"](l,56,0,t["\u0275nov"](l,57).transform(e.i18n+"business-segment-form.group-list"))),n(l,58,0,t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](l,58,0,t["\u0275nov"](l,64).transform(e.i18n+"business-segment-form.group-list-search")),""),t["\u0275nov"](l,63).ngClassUntouched,t["\u0275nov"](l,63).ngClassTouched,t["\u0275nov"](l,63).ngClassPristine,t["\u0275nov"](l,63).ngClassDirty,t["\u0275nov"](l,63).ngClassValid,t["\u0275nov"](l,63).ngClassInvalid,t["\u0275nov"](l,63).ngClassPending),n(l,76,0,e.submitted),n(l,77,0,t["\u0275unv"](l,77,0,t["\u0275nov"](l,78).transform(e.i18n+"business-segment-form.submit-button")))}))}function I(n){return t["\u0275vid"](0,[t["\u0275pid"](0,a.a,[]),(n()(),t["\u0275and"](16777216,null,null,1,null,c)),t["\u0275did"](2,16384,null,0,r.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](4,16384,null,0,r.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,2,0,e.submitted||!e.stores),n(l,4,0,e.stores)}),null)}},cMRB:function(n,l,e){"use strict";e("Fbhx");var t=e("+XIT");e.d(l,"b",(function(){return t.a})),e("sFX2"),e("NxlO"),e("w+fh");var s=e("j+/G");e.d(l,"a",(function(){return s.a})),e("HO0R")},"j+/G":function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));class t{constructor(n,l,e=!1,t=null,s=[]){this.groupIndex=n,this.name=l,this.is_public=e,this.slno=t,this.stores=s}}},oFlN:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));class t{transform(n,l,e){return l?n.filter(n=>-1!==e.map(l=>n[l]).join(" ").toLowerCase().indexOf(l.toLowerCase())):n}}},sFX2:function(n,l,e){"use strict";e.d(l,"a",(function(){return g}));var t=e("8Y7J"),s=e("fFD9"),u=e("XpwZ"),i=e("j+/G"),o=e("w+fh"),r=e("+XIT"),a=e("FmVO");const d=Object(a.a)(r.a),c=window.amplitude;class g{constructor(n,l,e,s,o){this.auth=n,this.service=l,this.dialog=e,this.translate=s,this.instanceAppSettingsApi=o,this.loadData=!1,this.segments=[],this.i18n=r.a,this.submitted=!1,this.bs=new i.a(0,""),this.temp_bs=new i.a(0,""),this.bsCreated=new t.EventEmitter,this.bsUpdated=new t.EventEmitter,this.bsDeleted=new t.EventEmitter,this.bsChange=new t.EventEmitter,this.storesFilter="",this.groupStoresFilter="",this.instanceSettings=u.b,this.subs=[]}set sub(n){this.subs.push(n)}ngOnInit(){this.sub=this.translate.get(d`business-segment-form.new-group`).subscribe(n=>{this.bs.name=n,this.temp_bs.name=n}),this.sub=this.instanceAppSettingsApi.settings$.subscribe(n=>{this.instanceSettings=n,this.storesFilterBy=[n.storeNameType]}),this.getData()}ngOnChanges(){this.stores&&(this.stores=this.stores.map(n=>o.a.fromJson(n)).sort((n,l)=>n.position>l.position?1:l.position>n.position?-1:0))}ngOnDestroy(){this.subs.forEach(n=>n.unsubscribe())}getData(){this.loadData&&(this.sub=this.service.getStoreGroups().pipe(Object(s.a)(this.service.getStores())).subscribe(([n,l])=>{this.segments=n.map(n=>new i.a(+n.groupIndex,n.name,!1,+n.slno,n.stores)),this.stores=l.map(n=>o.a.fromJson(n))}))}onSubmit(){if(this.bs.is_public&&!this.auth.isAdmin())return void(this.sub=this.translate.get(d`business-segment-form.global-edit-alert`).subscribe(n=>this.dialog.alert(n)));this.submitted=!0;const n={stores:this.stores.filter(n=>n.isChecked).map(n=>n.StoreID).join(","),slno:this.bs.slno,groupIndex:this.bs.groupIndex,name:this.bs.name,is_public:this.bs.is_public?1:0};0==+this.bs.groupIndex?this.service.createStoreGroup(n).subscribe(l=>{if("-1"===l.toString())return this.sub=this.translate.get(d`business-segment-form.create-duplicated-alert`).subscribe(n=>this.dialog.warning(n)),void(this.submitted=!1);this.bsCreated.emit(l),c.getInstance().logEvent("BUDGET",{eventSource:this.sourceName,eventName:"CREATE",eventValue:n.name}),this.bsChange.emit({groupIndex:String(l.groupIndex),slno:l.slno,name:n.name,eventType:"create"}),this.sub=this.translate.get(d`business-segment-form.create-success-alert`).subscribe(n=>this.dialog.success(n)),this.reset()}):this.service.updateStoreGroup(this.bs.groupIndex,n).subscribe(l=>{this.bsDeleted.next([this.bs.groupIndex,this.bs.slno]),this.bsCreated.emit(l),c.getInstance().logEvent("BUDGET",{eventSource:this.sourceName,eventName:"UPDATE",eventValue:n.name}),this.bsChange.emit({groupIndex:String(l.groupIndex),prevGroupIndex:String(this.bs.groupIndex),slno:l.slno,name:n.name,stores:l.stores,eventType:"update"}),this.sub=this.translate.get(d`business-segment-form.update-success-alert`).subscribe(n=>this.dialog.success(n)),this.reset()})}deleteGroup(){!this.bs.is_public||this.auth.isAdmin()?(this.submitted=!0,0!=+this.bs.groupIndex&&this.service.deleteStoreGroup(this.bs.groupIndex,this.bs.slno).subscribe(()=>{c.getInstance().logEvent("BUDGET",{eventSource:this.sourceName,eventName:"DELETE",eventValue:this.bs.name}),this.bsDeleted.next([this.bs.groupIndex,this.bs.slno]),this.bsChange.emit({groupIndex:String(this.bs.groupIndex),eventType:"delete"}),this.sub=this.translate.get(d`business-segment-form.delete-success-alert`).subscribe(n=>this.dialog.success(n)),this.reset()})):this.sub=this.translate.get(d`business-segment-form.global-delete-alert`).subscribe(n=>this.dialog.alert(n))}setSegment(n){return this._setSegment(this.segments[n.target.selectedIndex-1]?this.segments[n.target.selectedIndex-1].groupIndex:0,this.segments[n.target.selectedIndex-1]&&this.segments[n.target.selectedIndex-1].slno),!0}_setSegment(n,l){this.segments.forEach((n,l)=>{n.groupIndex===this.temp_bs.groupIndex&&n.slno===this.temp_bs.slno&&(this.segments[l]=this.temp_bs)});let[e]=this.segments.filter(e=>+e.groupIndex==+n&&String(e.slno)===l.toString());if(0===n){this.sub=this.translate.get(d`business-segment-form.new-group`).subscribe(n=>e=new i.a(0,n));for(const n of this.stores)n.isChecked=!1}else if(this.stores&&this.stores.length)for(const t of this.stores){const[n]=e.stores.filter(n=>(+n.store_id||+n.storeId)===+t.StoreID);t.isChecked=void 0!==n}e.is_public=0==+e.slno&&0!=+e.groupIndex,this.bs=JSON.parse(JSON.stringify(e)),this.temp_bs=JSON.parse(JSON.stringify(e))}reset(){this.submitted=!1;for(const n of this.stores)n.isChecked=!1;this.sub=this.translate.get(d`business-segment-form.new-group`).subscribe(n=>{this.bs=new i.a(0,n),this.temp_bs=new i.a(0,n)})}toggleStore(n){if(this.bs.is_public&&!this.auth.isAdmin())return!1;n.isChecked=!n.isChecked}}},"w+fh":function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));class t{constructor(n={}){this.isChecked=!1,this.StoreID=n.StoreID||null,this.StoreName=n.StoreName||null,this.StoreName2=n.StoreName2||null,this.StoreAbbrev=n.StoreAbbrev||null,this.isChecked=n.isChecked||!1,this.position=n.position||0}static fromJson(n){return new t({StoreID:n.StoreID,StoreName:n.StoreName,StoreName2:n.StoreName2,StoreAbbrev:n.StoreAbbrev,isChecked:n.isChecked,position:+n.position||0})}get id(){return this.StoreID}get name(){return this.StoreName}get shortName(){return this.StoreName2}get abbreviation(){let n="";return this.StoreAbbrev?n=this.StoreAbbrev:this.name&&(n=this.name.match(/\d*(?:\.\d+)?/g).join(""),n+=this.name.replace(""===name?"_":name,"_").replace("of","").match(/\b\w/g).join("").trim()),n}}}}]);