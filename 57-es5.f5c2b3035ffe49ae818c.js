(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"5uTj":function(n,l,t){"use strict";t.d(l,"a",(function(){return a}));var e=t("8Y7J");class a{constructor(){this.backToClick=new e.EventEmitter}get hasBackToLink(){return!!this.backToClick.observers.length}ngOnInit(){}onBackToClick(){this.backToClick.emit()}}},FIJs:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));class e{constructor(n){n.addLoaderWithPrefixedTranslations("/cabinet/control-center","")}}},r06V:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class a{constructor(n){n.addLoaderWithPrefixedTranslations("/cabinet/crm/crm-summary","")}}var i=t("pMnS"),u=t("HOtD"),o=t("qFRm"),s=t("t68o"),d=t("zbXB"),r=t("SZ0J"),c=t("SjMl"),p=t("nEoX"),m=t("/kTj"),f=t("giT0"),g=t("xj9N"),h=t("SVse");class v{constructor(n){this.dataService=n}ngOnInit(){}onEditBudgetValue(){this.dataService.refreshData()}}var b=t("2Vo4"),C=t("XNiG"),k=t("pLZG"),x=t("q92s"),y=t("fFD9");class w{constructor(n,l){this.filterData=n,this.dataApi=l,this._trafficManagement$=new b.a(void 0),this._appointments$=new b.a(void 0),this._salesPerson$=new b.a(void 0),this._leadSources$=new b.a(void 0),this._desklogActivity$=new b.a(void 0),this.dataRefresh$=new C.a,this.subs=[],this.initInternal()}set sub(n){this.subs.push(n)}destroy(){this.subs.forEach(n=>n.unsubscribe())}init(){this.initSubscriptions()}refreshData(){this.dataRefresh$.next(void 0)}initInternal(){this.trafficManagement$=this._trafficManagement$.pipe(Object(k.a)(n=>!!n)),this.appointments$=this._appointments$.pipe(Object(k.a)(n=>!!n)),this.salesPerson$=this._salesPerson$.pipe(Object(k.a)(n=>!!n)),this.leadSources$=this._leadSources$.pipe(Object(k.a)(n=>!!n)),this.desklogActivity$=this._desklogActivity$.pipe(Object(k.a)(n=>!!n))}initSubscriptions(){this.sub=this.filterData.value$.pipe(Object(x.a)(this.dataRefresh$.pipe(Object(y.a)(this.filterData.value$,(n,l)=>l)))).subscribe(({group:n,store:l,dateIndex:t})=>this.dataApi.getSummaryData({group:n,store:l,dateIndex:t}).subscribe(n=>{this._trafficManagement$.next(n.trafficManagement),this._appointments$.next(n.appointments),this._salesPerson$.next(n.salesPerson),this._leadSources$.next(n.leadSources),this._desklogActivity$.next(n.desklogActivity)}))}}var O=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.category-key[_ngcontent-%COMP%]{font-size:14px;font-weight:500;padding:5px 13px;border-radius:15px;background-color:#e1e1e1;display:inline-block;margin-bottom:20px;text-transform:uppercase}"]],data:{}});function R(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,9,"div",[["class","progress-list"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","progress-list-item"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(n()(),e["\u0275ted"](3,null,["",""])),(n()(),e["\u0275eld"](4,0,null,null,2,"div",[["class","progress-list-item"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,1,"app-bullet-progress-bar",[],[[2,"theme-default",null],[2,"theme-small",null]],[[null,"onEditValue"]],(function(n,l,t){var e=!0;return"onEditValue"===l&&(e=!1!==n.component.onEditBudgetValue()&&e),e}),c.b,c.a)),e["\u0275did"](6,638976,null,0,p.a,[m.b],{data:[0,"data"]},{onEditValue:"onEditValue"}),(n()(),e["\u0275eld"](7,0,null,null,2,"div",[["class","progress-list-item"]],null,null,null,null,null)),(n()(),e["\u0275eld"](8,0,null,null,1,"app-growth-indicator",[],[[2,"positive",null],[2,"warning",null],[2,"negative",null]],null,null,f.b,f.a)),e["\u0275did"](9,49152,null,0,g.a,[],{value:[0,"value"]},null)],(function(n,l){n(l,6,0,l.context.$implicit.graph),n(l,9,0,l.context.$implicit.rankGrowth)}),(function(n,l){n(l,3,0,l.context.$implicit.label),n(l,5,0,e["\u0275nov"](l,6).themeDefault,e["\u0275nov"](l,6).themeSmall),n(l,8,0,e["\u0275nov"](l,9).positiveClass,e["\u0275nov"](l,9).warningClass,e["\u0275nov"](l,9).negativeClass)}))}function M(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"span",[["class","category-key"]],null,null,null,null,null)),(n()(),e["\u0275ted"](2,null,["",""])),(n()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](4,278528,null,0,h.l,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,4,0,l.context.$implicit.items)}),(function(n,l){n(l,2,0,l.context.$implicit.label)}))}function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](1,278528,null,0,h.l,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,1,0,l.component.data)}),null)}var $=t("TSSN"),P=t("MO+k");class I{constructor(n){this.elementRef=n,this.chartConfig={type:"line",data:{labels:[],datasets:[{backgroundColor:"#004E9A",borderWidth:0,pointRadius:0,data:[],fill:"start"}]},options:{responsive:!0,maintainAspectRatio:!1,spanGaps:!1,elements:{line:{tension:0}},plugins:{filler:{propagate:!1}},animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}}}}ngOnInit(){this.el=this.elementRef.nativeElement,this.canvas=this.el.querySelector("canvas"),this.chart=new P.Chart(this.canvas,this.chartConfig)}ngOnChanges(n){if(this.config){const n=this.chartConfig.data;n.labels=this.config.labels,n.datasets[0].data=this.config.data}setTimeout(()=>this.chart.update({duration:300}),10)}}var T=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;height:40px;width:200px;overflow:auto;overflow-y:hidden}.chart[_ngcontent-%COMP%]{height:100%;min-width:100%}canvas[_ngcontent-%COMP%]{width:100%;height:100%}"]],data:{}});function D(n){return e["\u0275vid"](2,[(n()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","chart"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"canvas",[],null,null,null,null,null))],null,null)}var j=t("OTv+"),V=t("eeq/");class S{constructor(){}ngOnInit(){}}var F=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.appointments-item[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:30px}.appointments-item[_ngcontent-%COMP%]:last-child{margin-bottom:0}.appointments-item-block[_ngcontent-%COMP%]:nth-of-type(1){flex:0 1 auto;font-size:14px;color:#000;padding-right:5px}.appointments-item-block[_ngcontent-%COMP%]:nth-of-type(1)   span[_ngcontent-%COMP%]{display:block;line-height:1}.appointments-item-block[_ngcontent-%COMP%]:nth-of-type(1)   span[_ngcontent-%COMP%]:first-child{margin-bottom:15px}.appointments-item-block[_ngcontent-%COMP%]:nth-of-type(2){flex:0 0 200px}.appointments-item-block[_ngcontent-%COMP%]:nth-of-type(3){flex:0 1 30px;text-align:right;padding-left:5px}.chart-value[_ngcontent-%COMP%]{font-size:26px;font-weight:600}"]],data:{}});function A(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,14,"div",[["class","appointments-item"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,4,"div",[["class","appointments-item-block"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](3,null,["",""])),(n()(),e["\u0275eld"](4,0,null,null,1,"span",[["class","fw-bold"]],null,null,null,null,null)),(n()(),e["\u0275ted"](5,null,["",""])),(n()(),e["\u0275eld"](6,0,null,null,5,"div",[["class","appointments-item-block"]],null,null,null,null,null)),(n()(),e["\u0275eld"](7,0,null,null,2,"span",[["class","chart-value"]],null,null,null,null,null)),(n()(),e["\u0275ted"](8,null,["",""])),e["\u0275ppd"](9,2),(n()(),e["\u0275eld"](10,0,null,null,1,"app-crm-line-chart",[],null,null,null,D,T)),e["\u0275did"](11,638976,null,0,I,[e.ElementRef],{config:[0,"config"]},null),(n()(),e["\u0275eld"](12,0,null,null,2,"div",[["class","appointments-item-block"]],null,null,null,null,null)),(n()(),e["\u0275eld"](13,0,null,null,1,"app-growth-indicator",[],[[2,"positive",null],[2,"warning",null],[2,"negative",null]],null,null,f.b,f.a)),e["\u0275did"](14,49152,null,0,g.a,[],{value:[0,"value"]},null)],(function(n,l){n(l,11,0,l.context.$implicit.graph),n(l,14,0,l.context.$implicit.rankGrowth)}),(function(n,l){n(l,3,0,l.context.$implicit.title1),n(l,5,0,l.context.$implicit.title2);var t=e["\u0275unv"](l,8,0,n(l,9,0,e["\u0275nov"](l.parent,0),l.context.$implicit.value,l.context.$implicit.format));n(l,8,0,t),n(l,13,0,e["\u0275nov"](l,14).positiveClass,e["\u0275nov"](l,14).warningClass,e["\u0275nov"](l,14).negativeClass)}))}function E(n){return e["\u0275vid"](0,[e["\u0275pid"](0,j.a,[V.a,m.b]),(n()(),e["\u0275and"](16777216,null,null,1,null,A)),e["\u0275did"](2,278528,null,0,h.l,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.data)}),null)}class z{constructor(n){this.dataService=n}ngOnInit(){}onEditBudgetValue(){this.dataService.refreshData()}}var L=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function B(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,9,"div",[["class","progress-list"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","progress-list-item"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](3,null,["",""])),(n()(),e["\u0275eld"](4,0,null,null,2,"div",[["class","progress-list-item"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,1,"app-bullet-progress-bar",[],[[2,"theme-default",null],[2,"theme-small",null]],[[null,"onEditValue"]],(function(n,l,t){var e=!0;return"onEditValue"===l&&(e=!1!==n.component.onEditBudgetValue()&&e),e}),c.b,c.a)),e["\u0275did"](6,638976,null,0,p.a,[m.b],{data:[0,"data"]},{onEditValue:"onEditValue"}),(n()(),e["\u0275eld"](7,0,null,null,2,"div",[["class","progress-list-item"]],null,null,null,null,null)),(n()(),e["\u0275eld"](8,0,null,null,1,"app-growth-indicator",[],[[2,"positive",null],[2,"warning",null],[2,"negative",null]],null,null,f.b,f.a)),e["\u0275did"](9,49152,null,0,g.a,[],{value:[0,"value"]},null)],(function(n,l){n(l,6,0,l.context.$implicit.graph),n(l,9,0,l.context.$implicit.rankGrowth)}),(function(n,l){n(l,3,0,l.context.$implicit.label),n(l,5,0,e["\u0275nov"](l,6).themeDefault,e["\u0275nov"](l,6).themeSmall),n(l,8,0,e["\u0275nov"](l,9).positiveClass,e["\u0275nov"](l,9).warningClass,e["\u0275nov"](l,9).negativeClass)}))}function q(n){return e["\u0275vid"](0,[(n()(),e["\u0275and"](16777216,null,null,1,null,B)),e["\u0275did"](1,278528,null,0,h.l,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,1,0,l.component.data)}),null)}class N{get positiveClass(){return 1===this.data.rankGrowth}get warningClass(){return 0===this.data.rankGrowth}get negativeClass(){return-1===this.data.rankGrowth}}var G=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:inline-block;background-color:#dcdbdc;padding:5px 15px 5px 10px;position:relative;color:#000;overflow:hidden;font-weight:500;min-width:72px}.positive[_nghost-%COMP%]{background-color:#1e8700;color:#fff}.warning[_nghost-%COMP%]{background-color:#f3c118}.negative[_nghost-%COMP%]{background-color:#c00;color:#fff}[_nghost-%COMP%]:after{content:'';display:block;position:absolute;right:0;bottom:0;background-color:#fff;width:20px;height:20px;transform:translate(50%,50%) rotate(45deg)}"]],data:{}});function J(n){return e["\u0275vid"](2,[e["\u0275pid"](0,j.a,[V.a,m.b]),(n()(),e["\u0275eld"](1,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](2,null,["",""])),e["\u0275ppd"](3,2)],null,(function(n,l){var t=l.component,a=e["\u0275unv"](l,2,0,n(l,3,0,e["\u0275nov"](l,0),t.data.value,t.data.format));n(l,2,0,a)}))}class H{constructor(){}ngOnInit(){}}var X=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;height:100%}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 50%;text-align:right;padding:15px 10px;display:flex;justify-content:flex-end;align-items:center}.label[_ngcontent-%COMP%]{vertical-align:top;padding-right:10px;color:#6e6e6e}"]],data:{}});function Q(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"span",[["class","label"]],null,null,null,null,null)),(n()(),e["\u0275ted"](2,null,["",""])),(n()(),e["\u0275eld"](3,0,null,null,1,"app-crm-card-indicator",[],[[2,"positive",null],[2,"warning",null],[2,"negative",null]],null,null,J,G)),e["\u0275did"](4,49152,null,0,N,[],{data:[0,"data"]},null)],(function(n,l){n(l,4,0,l.context.$implicit)}),(function(n,l){n(l,2,0,l.context.$implicit.label),n(l,3,0,e["\u0275nov"](l,4).positiveClass,e["\u0275nov"](l,4).warningClass,e["\u0275nov"](l,4).negativeClass)}))}function W(n){return e["\u0275vid"](0,[(n()(),e["\u0275and"](16777216,null,null,1,null,Q)),e["\u0275did"](1,278528,null,0,h.l,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,1,0,l.component.data)}),null)}var Y=t("uNm5"),Z=t("5uTj"),U=t("o2MB"),K=t("bPSY"),nn=t("nNBh"),ln=t("JA3b"),tn=t("JItt"),en=t("8HX0"),an=t("bogt"),un=t("uTUe"),on=t("+2T5");class sn{constructor(n,l,t){this.router=n,this.route=l,this.data=t}ngOnInit(){this.data.init(),this.trafficManagement$=this.data.trafficManagement$,this.appointments$=this.data.appointments$,this.salesPerson$=this.data.salesPerson$,this.leadSources$=this.data.leadSources$,this.desklogActivity$=this.data.desklogActivity$}ngOnDestroy(){this.data.destroy()}onBackToClick(){this.router.navigate(["c/operation-control-center"])}viewDetails(n){this.router.navigate(["..","details",n],{relativeTo:this.route.parent})}}var dn=t("iInd"),rn=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .progress-list{display:flex;align-items:center;justify-content:space-between;margin-bottom:40px}[_nghost-%COMP%]     .progress-list-item:nth-of-type(1){flex:0 0 100px;font-size:14px;color:#6e6e6e}[_nghost-%COMP%]     .progress-list-item:nth-of-type(2){flex:1 1 auto}[_nghost-%COMP%]     .progress-list-item:nth-of-type(3){flex:0 0 80px;text-align:right;padding-right:5px}"]],data:{}});function cn(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-crm-summary-traffic-management",[],null,null,null,_,O)),e["\u0275did"](1,114688,null,0,v,[w],{data:[0,"data"]},null)],(function(n,l){n(l,1,0,l.context.ngIf)}),null)}function pn(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""])),e["\u0275pid"](131072,$.i,[$.j,e.ChangeDetectorRef])],null,(function(n,l){n(l,1,0,e["\u0275unv"](l,1,0,e["\u0275nov"](l,2).transform("crm-summary.body.section.no-data.message")))}))}function mn(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-crm-summary-appointments",[],null,null,null,E,F)),e["\u0275did"](1,114688,null,0,S,[],{data:[0,"data"]},null)],(function(n,l){n(l,1,0,l.context.ngIf)}),null)}function fn(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""])),e["\u0275pid"](131072,$.i,[$.j,e.ChangeDetectorRef])],null,(function(n,l){n(l,1,0,e["\u0275unv"](l,1,0,e["\u0275nov"](l,2).transform("crm-summary.body.section.no-data.message")))}))}function gn(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-crm-summary-lead-sources",[],null,null,null,q,L)),e["\u0275did"](1,114688,null,0,z,[w],{data:[0,"data"]},null)],(function(n,l){n(l,1,0,l.context.ngIf)}),null)}function hn(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""])),e["\u0275pid"](131072,$.i,[$.j,e.ChangeDetectorRef])],null,(function(n,l){n(l,1,0,e["\u0275unv"](l,1,0,e["\u0275nov"](l,2).transform("crm-summary.body.section.no-data.message")))}))}function vn(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-crm-summary-desklog-activity",[],null,null,null,W,X)),e["\u0275did"](1,114688,null,0,H,[],{data:[0,"data"]},null)],(function(n,l){n(l,1,0,l.context.ngIf)}),null)}function bn(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""])),e["\u0275pid"](131072,$.i,[$.j,e.ChangeDetectorRef])],null,(function(n,l){n(l,1,0,e["\u0275unv"](l,1,0,e["\u0275nov"](l,2).transform("crm-summary.body.section.no-data.message")))}))}function Cn(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,5,"app-content-header",[],null,[[null,"backToClick"]],(function(n,l,t){var e=!0;return"backToClick"===l&&(e=!1!==n.component.onBackToClick()&&e),e}),Y.b,Y.a)),e["\u0275did"](1,114688,null,0,Z.a,[],{caption:[0,"caption"],backToLink:[1,"backToLink"]},{backToClick:"backToClick"}),e["\u0275pid"](131072,$.i,[$.j,e.ChangeDetectorRef]),e["\u0275pid"](131072,$.i,[$.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](4,0,null,0,1,"app-crm-filters-group",[],null,null,null,U.b,U.a)),e["\u0275did"](5,245760,null,0,K.a,[nn.a],null,null),(n()(),e["\u0275eld"](6,0,null,null,42,"app-content-body",[],null,null,null,ln.b,ln.a)),e["\u0275did"](7,114688,null,0,tn.a,[],null,null),(n()(),e["\u0275eld"](8,0,null,0,40,"div",[["class","layout-4-columns-unequal-height"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,9,"div",[["class","layout-4-columns-unequal-height-col"]],null,null,null,null,null)),(n()(),e["\u0275eld"](10,0,null,null,8,"app-content-panel",[],null,[[null,"detailsClick"]],(function(n,l,t){var e=!0;return"detailsClick"===l&&(e=!1!==n.component.viewDetails("traffic-management")&&e),e}),en.b,en.a)),e["\u0275did"](11,114688,null,0,an.a,[un.a,on.a],{caption:[0,"caption"]},{detailsClick:"detailsClick"}),e["\u0275pid"](131072,$.i,[$.j,e.ChangeDetectorRef]),(n()(),e["\u0275and"](16777216,null,0,2,null,cn)),e["\u0275did"](14,16384,null,0,h.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,h.b,[e.ChangeDetectorRef]),(n()(),e["\u0275and"](16777216,null,0,2,null,pn)),e["\u0275did"](17,16384,null,0,h.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,h.b,[e.ChangeDetectorRef]),(n()(),e["\u0275eld"](19,0,null,null,9,"div",[["class","layout-4-columns-unequal-height-col"]],null,null,null,null,null)),(n()(),e["\u0275eld"](20,0,null,null,8,"app-content-panel",[],null,[[null,"detailsClick"]],(function(n,l,t){var e=!0;return"detailsClick"===l&&(e=!1!==n.component.viewDetails("appointments")&&e),e}),en.b,en.a)),e["\u0275did"](21,114688,null,0,an.a,[un.a,on.a],{caption:[0,"caption"]},{detailsClick:"detailsClick"}),e["\u0275pid"](131072,$.i,[$.j,e.ChangeDetectorRef]),(n()(),e["\u0275and"](16777216,null,0,2,null,mn)),e["\u0275did"](24,16384,null,0,h.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,h.b,[e.ChangeDetectorRef]),(n()(),e["\u0275and"](16777216,null,0,2,null,fn)),e["\u0275did"](27,16384,null,0,h.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,h.b,[e.ChangeDetectorRef]),(n()(),e["\u0275eld"](29,0,null,null,9,"div",[["class","layout-4-columns-unequal-height-col"]],null,null,null,null,null)),(n()(),e["\u0275eld"](30,0,null,null,8,"app-content-panel",[],null,[[null,"detailsClick"]],(function(n,l,t){var e=!0;return"detailsClick"===l&&(e=!1!==n.component.viewDetails("lead-sources")&&e),e}),en.b,en.a)),e["\u0275did"](31,114688,null,0,an.a,[un.a,on.a],{caption:[0,"caption"]},{detailsClick:"detailsClick"}),e["\u0275pid"](131072,$.i,[$.j,e.ChangeDetectorRef]),(n()(),e["\u0275and"](16777216,null,0,2,null,gn)),e["\u0275did"](34,16384,null,0,h.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,h.b,[e.ChangeDetectorRef]),(n()(),e["\u0275and"](16777216,null,0,2,null,hn)),e["\u0275did"](37,16384,null,0,h.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,h.b,[e.ChangeDetectorRef]),(n()(),e["\u0275eld"](39,0,null,null,9,"div",[["class","layout-4-columns-unequal-height-col"]],null,null,null,null,null)),(n()(),e["\u0275eld"](40,0,null,null,8,"app-content-panel",[],null,[[null,"detailsClick"]],(function(n,l,t){var e=!0;return"detailsClick"===l&&(e=!1!==n.component.viewDetails("desklog-activity")&&e),e}),en.b,en.a)),e["\u0275did"](41,114688,null,0,an.a,[un.a,on.a],{caption:[0,"caption"]},{detailsClick:"detailsClick"}),e["\u0275pid"](131072,$.i,[$.j,e.ChangeDetectorRef]),(n()(),e["\u0275and"](16777216,null,0,2,null,vn)),e["\u0275did"](44,16384,null,0,h.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,h.b,[e.ChangeDetectorRef]),(n()(),e["\u0275and"](16777216,null,0,2,null,bn)),e["\u0275did"](47,16384,null,0,h.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,h.b,[e.ChangeDetectorRef])],(function(n,l){var t,a,i,u,o=l.component;n(l,1,0,e["\u0275unv"](l,1,0,e["\u0275nov"](l,2).transform("crm-summary.header.caption")),e["\u0275unv"](l,1,1,e["\u0275nov"](l,3).transform("crm-summary.header.back-to.link"))),n(l,5,0),n(l,7,0),n(l,11,0,e["\u0275unv"](l,11,0,e["\u0275nov"](l,12).transform("crm-summary.body.section.traffic-management.title"))),n(l,14,0,e["\u0275unv"](l,14,0,e["\u0275nov"](l,15).transform(o.trafficManagement$))),n(l,17,0,!(null!=(t=e["\u0275unv"](l,17,0,e["\u0275nov"](l,18).transform(o.trafficManagement$)))&&t.length)),n(l,21,0,e["\u0275unv"](l,21,0,e["\u0275nov"](l,22).transform("crm-summary.body.section.appointments.title"))),n(l,24,0,e["\u0275unv"](l,24,0,e["\u0275nov"](l,25).transform(o.appointments$))),n(l,27,0,!(null!=(a=e["\u0275unv"](l,27,0,e["\u0275nov"](l,28).transform(o.appointments$)))&&a.length)),n(l,31,0,e["\u0275unv"](l,31,0,e["\u0275nov"](l,32).transform("crm-summary.body.section.lead-sources.title"))),n(l,34,0,e["\u0275unv"](l,34,0,e["\u0275nov"](l,35).transform(o.leadSources$))),n(l,37,0,!(null!=(i=e["\u0275unv"](l,37,0,e["\u0275nov"](l,38).transform(o.leadSources$)))&&i.length)),n(l,41,0,e["\u0275unv"](l,41,0,e["\u0275nov"](l,42).transform("crm-summary.body.section.desklog-activity.title"))),n(l,44,0,e["\u0275unv"](l,44,0,e["\u0275nov"](l,45).transform(o.desklogActivity$))),n(l,47,0,!(null!=(u=e["\u0275unv"](l,47,0,e["\u0275nov"](l,48).transform(o.desklogActivity$)))&&u.length))}),null)}var kn=e["\u0275ccf"]("ng-component",sn,(function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,Cn,rn)),e["\u0275did"](1,245760,null,0,sn,[dn.o,dn.a,w],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),xn=t("s7LF"),yn=t("QQfA"),wn=t("IP0z"),On=t("POq0"),Rn=t("JjoW"),Mn=t("gavF"),_n=t("Xd0L"),$n=t("s6ns"),Pn=t("821u"),In=t("/HVE"),Tn=t("8CZ8"),Dn=t("I0N1"),jn=t("iTUp"),Vn=t("FFHx"),Sn=t("Ny1k"),Fn=t("aBBA"),An=t("LL2G"),En=t("mpyQ"),zn=t("fRx+"),Ln=t("FIJs"),Bn=t("gQiY"),qn=t("zMNK"),Nn=t("hOhj"),Gn=t("cUpR"),Jn=t("HsOI"),Hn=t("02hT"),Xn=t("Q+lL"),Qn=t("uMW6"),Wn=t("oapL"),Yn=t("ZwOa"),Zn=t("Fwaw"),Un=t("5GAg"),Kn=t("Xitx"),nl=t("wN6G"),ll=t("Gi4r"),tl=t("IkVo"),el=t("LH5O"),al=t("Jrk4");class il{}class ul{}t.d(l,"CrmSummaryModuleNgFactory",(function(){return ol}));var ol=e["\u0275cmf"](a,[],(function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,u.b,o.a,s.a,d.b,d.a,r.e,r.d,r.c,kn]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,h.o,h.n,[e.LOCALE_ID,[2,h.F]]),e["\u0275mpd"](4608,xn.f,xn.f,[]),e["\u0275mpd"](4608,xn.F,xn.F,[]),e["\u0275mpd"](4608,yn.c,yn.c,[yn.i,yn.e,e.ComponentFactoryResolver,yn.h,yn.f,e.Injector,e.NgZone,h.d,wn.b,[2,h.i]]),e["\u0275mpd"](5120,yn.j,yn.k,[yn.c]),e["\u0275mpd"](4608,On.c,On.c,[]),e["\u0275mpd"](5120,Rn.a,Rn.b,[yn.c]),e["\u0275mpd"](5120,Mn.c,Mn.j,[yn.c]),e["\u0275mpd"](4608,_n.b,_n.b,[]),e["\u0275mpd"](5120,$n.c,$n.d,[yn.c]),e["\u0275mpd"](135680,$n.e,$n.e,[yn.c,e.Injector,[2,h.i],[2,$n.b],$n.c,[3,$n.e],yn.e]),e["\u0275mpd"](4608,Pn.i,Pn.i,[]),e["\u0275mpd"](5120,Pn.a,Pn.b,[yn.c]),e["\u0275mpd"](4608,_n.a,_n.v,[[2,_n.f],In.a]),e["\u0275mpd"](4608,Tn.p,Tn.p,[]),e["\u0275mpd"](5120,Tn.b,Tn.c,[yn.c]),e["\u0275mpd"](4608,Tn.a,Tn.g,[[2,Tn.e],In.a]),e["\u0275mpd"](4608,w,w,[nn.a,Dn.a]),e["\u0275mpd"](1073742336,h.c,h.c,[]),e["\u0275mpd"](1073742336,dn.s,dn.s,[[2,dn.x],[2,dn.o]]),e["\u0275mpd"](1073742336,$.g,$.g,[]),e["\u0275mpd"](1073742336,jn.a,jn.a,[]),e["\u0275mpd"](1073742336,xn.E,xn.E,[]),e["\u0275mpd"](1073742336,xn.A,xn.A,[]),e["\u0275mpd"](1073742336,Vn.a,Vn.a,[]),e["\u0275mpd"](1073742336,xn.m,xn.m,[]),e["\u0275mpd"](1073742336,Sn.a,Sn.a,[Fn.a]),e["\u0275mpd"](1073742336,An.a,An.a,[[3,An.a],Fn.a]),e["\u0275mpd"](1073742336,En.a,En.a,[]),e["\u0275mpd"](1073742336,zn.a,zn.a,[]),e["\u0275mpd"](1073742336,Ln.a,Ln.a,[Fn.a]),e["\u0275mpd"](1073742336,Bn.a,Bn.a,[]),e["\u0275mpd"](1073742336,wn.a,wn.a,[]),e["\u0275mpd"](1073742336,qn.g,qn.g,[]),e["\u0275mpd"](1073742336,In.b,In.b,[]),e["\u0275mpd"](1073742336,Nn.f,Nn.f,[]),e["\u0275mpd"](1073742336,yn.g,yn.g,[]),e["\u0275mpd"](1073742336,_n.l,_n.l,[[2,_n.d],[2,Gn.f]]),e["\u0275mpd"](1073742336,_n.u,_n.u,[]),e["\u0275mpd"](1073742336,_n.s,_n.s,[]),e["\u0275mpd"](1073742336,_n.q,_n.q,[]),e["\u0275mpd"](1073742336,On.d,On.d,[]),e["\u0275mpd"](1073742336,Jn.e,Jn.e,[]),e["\u0275mpd"](1073742336,Rn.d,Rn.d,[]),e["\u0275mpd"](1073742336,_n.m,_n.m,[]),e["\u0275mpd"](1073742336,Hn.a,Hn.a,[]),e["\u0275mpd"](1073742336,Xn.a,Xn.a,[]),e["\u0275mpd"](1073742336,Mn.i,Mn.i,[]),e["\u0275mpd"](1073742336,Mn.f,Mn.f,[]),e["\u0275mpd"](1073742336,Qn.a,Qn.a,[Fn.a]),e["\u0275mpd"](1073742336,Wn.c,Wn.c,[]),e["\u0275mpd"](1073742336,Yn.c,Yn.c,[]),e["\u0275mpd"](1073742336,Zn.c,Zn.c,[]),e["\u0275mpd"](1073742336,$n.k,$n.k,[]),e["\u0275mpd"](1073742336,Un.a,Un.a,[]),e["\u0275mpd"](1073742336,Pn.j,Pn.j,[]),e["\u0275mpd"](1073742336,_n.w,_n.w,[]),e["\u0275mpd"](1073742336,_n.n,_n.n,[]),e["\u0275mpd"](1073742336,Kn.a,Kn.a,[]),e["\u0275mpd"](1073742336,Tn.q,Tn.q,[]),e["\u0275mpd"](1073742336,Tn.h,Tn.h,[]),e["\u0275mpd"](1073742336,Tn.t,Tn.t,[]),e["\u0275mpd"](1073742336,nl.a,nl.a,[]),e["\u0275mpd"](1073742336,ll.c,ll.c,[]),e["\u0275mpd"](1073742336,tl.a,tl.a,[]),e["\u0275mpd"](1073742336,el.a,el.a,[]),e["\u0275mpd"](1073742336,al.a,al.a,[]),e["\u0275mpd"](1073742336,il,il,[]),e["\u0275mpd"](1073742336,ul,ul,[]),e["\u0275mpd"](1073742336,a,a,[Fn.a]),e["\u0275mpd"](256,_n.e,_n.i,[]),e["\u0275mpd"](256,Tn.d,Tn.f,[]),e["\u0275mpd"](1024,dn.m,(function(){return[[{path:"",component:sn}]]}),[])])}))},uNm5:function(n,l,t){"use strict";var e=t("8Y7J"),a=t("TSSN"),i=t("SVse");t("5uTj"),t.d(l,"a",(function(){return u})),t.d(l,"b",(function(){return d}));var u=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;height:156px;background-color:#fff;box-shadow:1px 2px 5px 1px #c1bebe;padding:15px 20px;position:relative;z-index:1;margin:0 -20px}.content-header-size-1[_nghost-%COMP%]{height:234px;padding-bottom:49px}.content-header-size-1[_nghost-%COMP%]     .mat-tab-nav-bar{position:absolute;bottom:-1px;left:20px}.content-header-size-2[_nghost-%COMP%]{height:125px}.content-header-size-2[_nghost-%COMP%]   .heading[_ngcontent-%COMP%]{margin-bottom:12px}.content-header-size-3[_nghost-%COMP%]{height:110px}.content-header-size-3[_nghost-%COMP%]   .heading[_ngcontent-%COMP%]{margin-top:0}.content-header-custom[_nghost-%COMP%]{height:135px;margin-top:-20px}.content-header-custom[_nghost-%COMP%]   .heading[_ngcontent-%COMP%]{margin-bottom:12px}.back-link[_ngcontent-%COMP%]{font-size:14px;color:#3498db;font-weight:600;cursor:pointer}.heading[_ngcontent-%COMP%]{font-size:26px;font-weight:500;line-height:1.2;color:#404040;margin:8px 0 12px}.timestamp[_ngcontent-%COMP%]{font-size:12px;font-weight:400;display:block}"]],data:{}});function o(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","back-link"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onBackToClick()&&e),e}),null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.backToLink)}))}function s(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"span",[["class","timestamp"]],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",": ",""])),e["\u0275pid"](131072,a.i,[a.j,e.ChangeDetectorRef])],null,(function(n,l){var t=l.component;n(l,1,0,e["\u0275unv"](l,1,0,e["\u0275nov"](l,2).transform("widgets.general.lastupdate")),t.lastRefreshed)}))}function d(n){return e["\u0275vid"](2,[(n()(),e["\u0275and"](16777216,null,null,1,null,o)),e["\u0275did"](1,16384,null,0,i.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](2,0,null,null,3,"h2",[["class","heading"]],null,null,null,null,null)),(n()(),e["\u0275ted"](3,null,[""," "])),(n()(),e["\u0275and"](16777216,null,null,1,null,s)),e["\u0275did"](5,16384,null,0,i.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275ncd"](null,0)],(function(n,l){var t=l.component;n(l,1,0,t.hasBackToLink),n(l,5,0,t.lastRefreshed)}),(function(n,l){n(l,3,0,l.component.caption)}))}}}]);