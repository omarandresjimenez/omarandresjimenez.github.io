(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"+Wpr":function(e,t,s){"use strict";s.r(t);var a=s("8Y7J"),r=s("SVjw");class n{constructor(e){e.addLoaderWithPrefixedTranslations("/cabinet/schedules",r.a)}}var i=s("pMnS"),l=s("t68o"),o=s("zbXB"),d=s("SZ0J"),u=s("iInd"),p=s("SVse"),c=s("rWV4"),h=s("/HVE"),m=s("Xd0L"),g=s("5GAg"),v=s("omvX"),b=s("TSSN"),C=s("bUbq"),f=s("sFX2"),O=s("+2T5"),S=s("NxlO"),y=s("S+vS"),w=s("XpwZ"),$=s("uNm5"),D=s("5uTj"),_=s("mIlg"),x=s("W0XV");class R{constructor(e){this.filterData=e,this.sourceText="SCHEDULES",this.addBusinessSeg=new a.EventEmitter,this.subs=[]}set sub(e){this.subs.push(e)}ngOnInit(){this.setupStreams()}ngOnDestroy(){this.subs.forEach(e=>e.unsubscribe())}onFilterChange(e){this.filterData.updateFilter(e)}onAddItem(e){switch(e.name){case"group":this.addBusinessSeg.emit()}}setupStreams(){this.sub=this.filterData.filtersDef$.subscribe(e=>this.filters=e),this.sub=this.filterData.value$.subscribe(e=>this.snapshot=e)}}var A=s("VZOB"),I=a["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}"]],data:{}});function F(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"app-filters-group",[],null,[[null,"filterChange"],[null,"addItem"]],(function(e,t,s){var a=!0,r=e.component;return"filterChange"===t&&(a=!1!==r.onFilterChange(s)&&a),"addItem"===t&&(a=!1!==r.onAddItem(s)&&a),a}),_.b,_.a)),a["\u0275did"](1,638976,null,0,x.a,[O.a],{filters:[0,"filters"],snapshot:[1,"snapshot"],sourceName:[2,"sourceName"]},{filterChange:"filterChange",addItem:"addItem"})],(function(e,t){var s=t.component;e(t,1,0,s.filters,s.snapshot,s.sourceText)}),null)}var N=s("Rlre"),j=s("IP0z"),T=s("hOhj"),B=s("JA3b"),P=s("JItt"),V=s("zp2H"),U=s("v67E"),k=s("/kTj"),M=s("2v1Z"),L=s("cMRB"),E=s("wd/R"),G=s("zZFd"),Z=s("eIep");const J=window.amplitude;class Y{constructor(e,t,s){this.filterData=e,this.dataApi=t,this.router=s,this.i18n=r.a,this.i18nBs=L.b}ngOnInit(){this.sourceText="SCHEDULES",this.filterData.init(),console.log("schedules page loaded .."),J.getInstance().logEvent("schedules_page_load",{eventName:"page load",eventValue:!0}),this.dataApi.getLastRefreshedTime({reportSection:G.a.Schedules}).subscribe(e=>{if(e&&e.UpdatedTime){const t=E.utc(e.UpdatedTime,"YYYY-MM-DD hh:mm");this.lastRefreshed=t.local().format("MMM DD YYYY hh:mm A")}else this.lastRefreshed=null});let e,t=!1,s=!1;this.filterData.selectedReport$.pipe(Object(Z.a)(t=>(e=t,this.filterData.reports$))).subscribe(a=>{t=a.some(t=>+t.isAR&&t.value===e),s=a.some(t=>+t.isAP&&t.value===e),s||t?(this.tabs=["summary","details","by-store","by-age"],this.router.navigate(["c","schedules","summary"])):this.tabs=["summary","details","by-store","by-age","by-acct"]})}ngOnDestroy(){this.filterData.destroy()}openBsFormModal(){this.bsFormModal.showModal()}onBsChange(e){this.bsFormModal.closeModal(),this.filterData.onBsChange(e)}}var q=s("uenX"),z=a["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}app-content-header[_ngcontent-%COMP%]     .heading{margin-bottom:33px}.btn-open-form[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;text-transform:uppercase}"]],data:{}});function X(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,8,"a",[["class","mat-tab-link"],["mat-tab-link",""],["routerLinkActive",""]],[[1,"target",0],[8,"href",4],[1,"aria-current",0],[1,"aria-disabled",0],[1,"tabIndex",0],[2,"mat-tab-disabled",null],[2,"mat-tab-label-active",null]],[[null,"click"]],(function(e,t,s){var r=!0;return"click"===t&&(r=!1!==a["\u0275nov"](e,1).onClick(s.button,s.ctrlKey,s.metaKey,s.shiftKey)&&r),r}),null,null)),a["\u0275did"](1,671744,[[4,4]],0,u.r,[u.o,u.a,p.j],{routerLink:[0,"routerLink"]},null),a["\u0275pad"](2,1),a["\u0275did"](3,1720320,[["rla",4]],2,u.q,[u.o,a.ElementRef,a.Renderer2,[2,u.p],[2,u.r]],{routerLinkActive:[0,"routerLinkActive"]},null),a["\u0275qud"](603979776,3,{links:1}),a["\u0275qud"](603979776,4,{linksWithHrefs:1}),a["\u0275did"](6,147456,[[2,4]],0,c.j,[c.k,a.ElementRef,a.NgZone,h.a,[2,m.k],[8,null],g.h,[2,v.a]],{active:[0,"active"]},null),(e()(),a["\u0275ted"](7,null,[" "," "])),a["\u0275pid"](131072,b.i,[b.j,a.ChangeDetectorRef])],(function(e,t){var s=e(t,2,0,t.context.$implicit);e(t,1,0,s),e(t,3,0,""),e(t,6,0,a["\u0275nov"](t,3).isActive)}),(function(e,t){var s=t.component;e(t,0,0,a["\u0275nov"](t,1).target,a["\u0275nov"](t,1).href,a["\u0275nov"](t,6).active?"page":null,a["\u0275nov"](t,6).disabled,a["\u0275nov"](t,6).tabIndex,a["\u0275nov"](t,6).disabled,a["\u0275nov"](t,6).active),e(t,7,0,a["\u0275unv"](t,7,0,a["\u0275nov"](t,8).transform(s.i18n+"header.tab."+t.context.$implicit+".label")))}))}function H(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"bs-form",[],null,[[null,"bsChange"]],(function(e,t,s){var a=!0;return"bsChange"===t&&(a=!1!==e.component.onBsChange(s)&&a),a}),C.b,C.a)),a["\u0275did"](1,770048,null,0,f.a,[O.a,S.a,y.a,b.j,w.a],{loadData:[0,"loadData"],sourceName:[1,"sourceName"]},{bsChange:"bsChange"})],(function(e,t){e(t,1,0,!0,t.component.sourceText)}),null)}function K(e){return a["\u0275vid"](0,[a["\u0275qud"](402653184,1,{bsFormModal:0}),(e()(),a["\u0275eld"](1,0,null,null,12,"app-content-header",[],null,null,null,$.b,$.a)),a["\u0275prd"](512,null,p.B,p.C,[a.IterableDiffers,a.KeyValueDiffers,a.ElementRef,a.Renderer2]),a["\u0275did"](3,278528,null,0,p.l,[p.B],{ngClass:[0,"ngClass"]},null),a["\u0275pad"](4,1),a["\u0275did"](5,114688,null,0,D.a,[],{caption:[0,"caption"],lastRefreshed:[1,"lastRefreshed"]},null),a["\u0275pid"](131072,b.i,[b.j,a.ChangeDetectorRef]),(e()(),a["\u0275eld"](7,0,null,0,1,"app-schedules-filters-group",[],null,[[null,"addBusinessSeg"]],(function(e,t,s){var a=!0;return"addBusinessSeg"===t&&(a=!1!==e.component.openBsFormModal()&&a),a}),F,I)),a["\u0275did"](8,245760,null,0,R,[A.a],null,{addBusinessSeg:"addBusinessSeg"}),(e()(),a["\u0275eld"](9,0,null,0,4,"nav",[["class","mat-tab-nav-bar mat-tab-header"],["mat-tab-nav-bar",""]],[[2,"mat-tab-header-pagination-controls-enabled",null],[2,"mat-tab-header-rtl",null],[2,"mat-primary",null],[2,"mat-accent",null],[2,"mat-warn",null]],null,null,N.e,N.c)),a["\u0275did"](10,7520256,null,1,c.k,[a.ElementRef,[2,j.b],a.NgZone,a.ChangeDetectorRef,T.i,[2,h.a],[2,v.a]],null,null),a["\u0275qud"](603979776,2,{_items:1}),(e()(),a["\u0275and"](16777216,null,0,1,null,X)),a["\u0275did"](13,278528,null,0,p.m,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),a["\u0275eld"](14,0,null,null,6,"app-content-body",[],null,null,null,B.b,B.a)),a["\u0275prd"](512,null,p.B,p.C,[a.IterableDiffers,a.KeyValueDiffers,a.ElementRef,a.Renderer2]),a["\u0275did"](16,278528,null,0,p.l,[p.B],{ngClass:[0,"ngClass"]},null),a["\u0275pad"](17,1),a["\u0275did"](18,114688,null,0,P.a,[],null,null),(e()(),a["\u0275eld"](19,16777216,null,0,1,"router-outlet",[],null,null,null,null,null)),a["\u0275did"](20,212992,null,0,u.t,[u.b,a.ViewContainerRef,a.ComponentFactoryResolver,[8,null],a.ChangeDetectorRef],null,null),(e()(),a["\u0275eld"](21,0,null,null,5,"app-modal",[["class","modal-bs-form"]],null,null,null,V.b,V.a)),a["\u0275prd"](512,null,U.a,U.a,[k.b]),a["\u0275did"](23,1228800,[[1,4],["bsFormModal",4]],0,M.a,[U.a,p.d,a.ElementRef,a.Renderer2,k.b],{modalTitle:[0,"modalTitle"]},null),a["\u0275pid"](131072,b.i,[b.j,a.ChangeDetectorRef]),(e()(),a["\u0275and"](16777216,null,0,1,null,H)),a["\u0275did"](26,16384,null,0,p.n,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(e,t){var s=t.component,r=e(t,4,0,"content-header-size-1");e(t,3,0,r),e(t,5,0,a["\u0275unv"](t,5,0,a["\u0275nov"](t,6).transform(s.i18n+"header.caption")),s.lastRefreshed),e(t,8,0),e(t,13,0,s.tabs);var n=e(t,17,0,"content-body-size-1");e(t,16,0,n),e(t,18,0),e(t,20,0),e(t,23,0,a["\u0275unv"](t,23,0,a["\u0275nov"](t,24).transform(s.i18nBs+"business-segment-form.title"))),e(t,26,0,a["\u0275nov"](t,23).displayed)}),(function(e,t){e(t,9,0,a["\u0275nov"](t,10)._showPaginationControls,"rtl"==a["\u0275nov"](t,10)._getLayoutDirection(),"warn"!==a["\u0275nov"](t,10).color&&"accent"!==a["\u0275nov"](t,10).color,"accent"===a["\u0275nov"](t,10).color,"warn"===a["\u0275nov"](t,10).color)}))}var W=a["\u0275ccf"]("ng-component",Y,(function(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,K,z)),a["\u0275did"](1,245760,null,0,Y,[A.a,q.a,u.o],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]),Q=s("POq0"),ee=s("s7LF"),te=s("EwA9"),se=s("Qq/Z"),ae=s("Mc5n"),re=s("QQfA"),ne=s("JjoW"),ie=s("s6ns"),le=s("821u"),oe=s("8CZ8"),de=s("cUpR"),ue=s("zMNK"),pe=s("FIJs"),ce=s("aBBA"),he=s("gQiY"),me=s("iTUp"),ge=s("oiVm"),ve=s("Fbhx"),be=s("/Lwf"),Ce=s("yotz"),fe=s("T3zS"),Oe=s("HsOI"),Se=s("oapL"),ye=s("ZwOa"),we=s("Fwaw"),$e=s("Xitx"),De=s("wN6G"),_e=s("Gi4r"),xe=s("IkVo"),Re=s("LH5O");class Ae{}var Ie=s("ZdYK");const Fe=()=>Promise.all([s.e(1),s.e(2),s.e(5),s.e(10),s.e(13),s.e(0),s.e(53)]).then(s.bind(null,"qI7v")).then(e=>e.SummaryModuleNgFactory),Ne=()=>Promise.all([s.e(1),s.e(2),s.e(5),s.e(0),s.e(48)]).then(s.bind(null,"97SH")).then(e=>e.DetailsModuleNgFactory),je=()=>Promise.all([s.e(1),s.e(2),s.e(5),s.e(8),s.e(10),s.e(13),s.e(0),s.e(26)]).then(s.bind(null,"bftJ")).then(e=>e.ByStoreModuleNgFactory),Te={pageType:Ie.a.ByStore},Be=()=>Promise.all([s.e(1),s.e(2),s.e(5),s.e(8),s.e(10),s.e(13),s.e(0),s.e(26)]).then(s.bind(null,"bftJ")).then(e=>e.ByStoreModuleNgFactory),Pe={pageType:Ie.a.ByAge},Ve=()=>Promise.all([s.e(1),s.e(2),s.e(5),s.e(8),s.e(10),s.e(13),s.e(0),s.e(26)]).then(s.bind(null,"bftJ")).then(e=>e.ByStoreModuleNgFactory),Ue={pageType:Ie.a.ByAcct};s.d(t,"SchedulesModuleNgFactory",(function(){return ke}));var ke=a["\u0275cmf"](n,[],(function(e){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,l.a,o.b,o.a,d.e,d.d,d.c,W]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,p.p,p.o,[a.LOCALE_ID,[2,p.G]]),a["\u0275mpd"](4608,Q.c,Q.c,[]),a["\u0275mpd"](4608,ee.F,ee.F,[]),a["\u0275mpd"](4608,te.a,te.a,[k.b]),a["\u0275mpd"](4608,S.a,S.a,[te.a,se.a]),a["\u0275mpd"](4608,ae.f,ae.f,[p.d,a.NgZone,T.i,ae.h]),a["\u0275mpd"](4608,re.c,re.c,[re.i,re.e,a.ComponentFactoryResolver,re.h,re.f,a.Injector,a.NgZone,p.d,j.b,[2,p.i]]),a["\u0275mpd"](5120,re.j,re.k,[re.c]),a["\u0275mpd"](5120,ne.a,ne.b,[re.c]),a["\u0275mpd"](4608,m.b,m.b,[]),a["\u0275mpd"](5120,ie.c,ie.d,[re.c]),a["\u0275mpd"](135680,ie.e,ie.e,[re.c,a.Injector,[2,p.i],[2,ie.b],ie.c,[3,ie.e],re.e]),a["\u0275mpd"](4608,le.i,le.i,[]),a["\u0275mpd"](5120,le.a,le.b,[re.c]),a["\u0275mpd"](4608,m.a,m.v,[[2,m.f],h.a]),a["\u0275mpd"](4608,oe.p,oe.p,[]),a["\u0275mpd"](5120,oe.b,oe.c,[re.c]),a["\u0275mpd"](4608,oe.a,oe.g,[[2,oe.e],h.a]),a["\u0275mpd"](4608,q.a,q.a,[se.a]),a["\u0275mpd"](4608,A.a,A.a,[b.j,q.a,w.a]),a["\u0275mpd"](1073742336,p.c,p.c,[]),a["\u0275mpd"](1073742336,u.s,u.s,[[2,u.x],[2,u.o]]),a["\u0275mpd"](1073742336,j.a,j.a,[]),a["\u0275mpd"](1073742336,m.l,m.l,[[2,m.d],[2,de.f]]),a["\u0275mpd"](1073742336,ue.g,ue.g,[]),a["\u0275mpd"](1073742336,h.b,h.b,[]),a["\u0275mpd"](1073742336,m.u,m.u,[]),a["\u0275mpd"](1073742336,Q.d,Q.d,[]),a["\u0275mpd"](1073742336,g.a,g.a,[]),a["\u0275mpd"](1073742336,c.l,c.l,[]),a["\u0275mpd"](1073742336,b.g,b.g,[]),a["\u0275mpd"](1073742336,pe.a,pe.a,[ce.a]),a["\u0275mpd"](1073742336,he.a,he.a,[]),a["\u0275mpd"](1073742336,ee.E,ee.E,[]),a["\u0275mpd"](1073742336,ee.m,ee.m,[]),a["\u0275mpd"](1073742336,me.a,me.a,[]),a["\u0275mpd"](1073742336,ge.a,ge.a,[]),a["\u0275mpd"](1073742336,ve.a,ve.a,[ce.a]),a["\u0275mpd"](1073742336,ae.g,ae.g,[]),a["\u0275mpd"](1073742336,be.a,be.a,[]),a["\u0275mpd"](1073742336,Ce.b,Ce.b,[]),a["\u0275mpd"](1073742336,fe.a,fe.a,[]),a["\u0275mpd"](1073742336,Oe.e,Oe.e,[]),a["\u0275mpd"](1073742336,T.f,T.f,[]),a["\u0275mpd"](1073742336,re.g,re.g,[]),a["\u0275mpd"](1073742336,m.s,m.s,[]),a["\u0275mpd"](1073742336,m.q,m.q,[]),a["\u0275mpd"](1073742336,ne.d,ne.d,[]),a["\u0275mpd"](1073742336,Se.c,Se.c,[]),a["\u0275mpd"](1073742336,ye.c,ye.c,[]),a["\u0275mpd"](1073742336,we.c,we.c,[]),a["\u0275mpd"](1073742336,ie.k,ie.k,[]),a["\u0275mpd"](1073742336,le.j,le.j,[]),a["\u0275mpd"](1073742336,m.w,m.w,[]),a["\u0275mpd"](1073742336,m.n,m.n,[]),a["\u0275mpd"](1073742336,$e.a,$e.a,[]),a["\u0275mpd"](1073742336,oe.q,oe.q,[]),a["\u0275mpd"](1073742336,oe.h,oe.h,[]),a["\u0275mpd"](1073742336,oe.t,oe.t,[]),a["\u0275mpd"](1073742336,De.a,De.a,[]),a["\u0275mpd"](1073742336,_e.c,_e.c,[]),a["\u0275mpd"](1073742336,xe.a,xe.a,[]),a["\u0275mpd"](1073742336,Re.a,Re.a,[]),a["\u0275mpd"](1073742336,Ae,Ae,[]),a["\u0275mpd"](1073742336,n,n,[ce.a]),a["\u0275mpd"](256,m.e,m.i,[]),a["\u0275mpd"](256,oe.d,oe.f,[]),a["\u0275mpd"](1024,u.m,(function(){return[[{path:"",component:Y,children:[{path:"summary",loadChildren:Fe},{path:"details",loadChildren:Ne},{path:"by-store",loadChildren:je,data:Te},{path:"by-age",loadChildren:Be,data:Pe},{path:"by-acct",loadChildren:Ve,data:Ue},{path:"",redirectTo:"summary",pathMatch:"full"}]}]]}),[])])}))},SVjw:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));const a="cabinet.schedules."},VHTt:function(e,t,s){"use strict";var a=function(e){return e[e.XLS=0]="XLS",e[e.PDF=1]="PDF",e}({}),r=s("2Vo4"),n=s("PqYM"),i=s("EY2u"),l=s("lJxs"),o=s("eIep"),d=s("vkgz"),u=s("GyhO"),p=s("nYR2");class c{get decrementer(){return()=>this.decrement()}get incrementor(){return()=>this.increment()}get resetter(){return()=>this.reset()}constructor(e=0){this._value$=new r.a(e),this.value$=this._value$.asObservable(),this.is$=this._value$.pipe(Object(l.a)(e=>Boolean(e)))}increment(){this._value$.next(this._value$.getValue()+1)}decrement(){const e=this._value$.getValue();this._value$.next(e>0?e-1:0)}reset(){this._value$.next(0)}streamJoiner(e=!1){return t=>{return(e?Object(n.a)(0).pipe((s=i.a,Object(o.a)(()=>s))):i.a).pipe(Object(d.a)(()=>{},void 0,this.incrementor),function(...e){return t=>t.lift.call(Object(u.a)(t,...e))}(t),Object(p.a)(this.decrementer));var s}}}var h=s("6LW8");s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return c})),s.d(t,"c",(function(){return h.a}))},VZOB:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var a=s("2Vo4"),r=s("pLZG"),n=s("fFD9"),i=s("lJxs"),l=s("UXun"),o=s("SxV6"),d=s("vkgz"),u=s("ZdYK"),p=s("SVjw"),c=s("LL99");class h{constructor(e,t,s){this.translate=e,this.dataApi=t,this.instanceAppSettingsApi=s,this._value$=new a.a(void 0),this._filtersDef$=new a.a(void 0),this._visibleFilters$=new a.a([]),this._stores$=new a.a(void 0),this._reports$=new a.a(void 0),this._selectedGroup$=new a.a(void 0),this._selectedStore$=new a.a(void 0),this._selectedDate$=new a.a(void 0),this._selectedReport$=new a.a(void 0),this._viewTypeFilter$=new a.a(void 0),this.subs=[],this.initStreams()}set sub(e){this.subs.push(e)}init(){this.initSubscriptions()}destroy(){this.subs.forEach(e=>e.unsubscribe()),this.subs=[],this._value$.next(void 0),this._filtersDef$.next(void 0),this._stores$.next(void 0),this._reports$.next(void 0),this._selectedGroup$.next(void 0),this._selectedStore$.next(void 0),this._selectedDate$.next(void 0),this._selectedReport$.next(void 0),this._viewTypeFilter$.next(void 0)}showFilters(e){this._visibleFilters$.next(e)}updateFilter(e){switch(e.name){case"store":this.updateStore({store:e.value});break;default:this.updateValue({[e.name]:e.value})}}updateStore(e){if(!e.store){const t=this._stores$.getValue();e.store=t[0].value}this.updateValue(e)}updateValue(e){const t=this._value$.getValue(),s=t?t.clone(e):new c.c(e);this.updateStreams(t,s),this._value$.next(s)}getFiltersListItems(){return Object(c.d)(this._filtersDef$.getValue(),this._value$.getValue(),this._visibleFilters$.getValue())}setViewTypeFilter(e){this._viewTypeFilter$.next(e)}updateReport(e){const t=this._reports$.getValue(),s=t.findIndex(t=>t.value===e.value);t[s]&&(t[s].label=e.label,this._reports$.next(t))}isReportNewUsed(e){return-1!==[u.b.NewInventory,u.b.UsedInventory].indexOf(e)}isReportWithData(e){return-1!==[u.b.NewInventory,u.b.UsedInventory,u.b.VehicleRec,u.b.FinanceReserve,u.b.Cit].indexOf(e)}onBsChange(e){const t=this._filtersDef$.getValue(),s=this._selectedGroup$.getValue(),a=t.find(e=>"group"===e.name);switch(e.eventType){case"create":a.items.push({label:e.name,value:e.groupIndex});break;case"update":const t=a.items.find(t=>+t.value==+e.prevGroupIndex);t&&(t.label=e.name,t.value=e.groupIndex),+s==+e.prevGroupIndex&&this.updateValue({group:e.groupIndex});break;case"delete":a.items=a.items.filter(t=>+t.value!=+e.groupIndex),+s==+e.groupIndex&&this.updateValue({group:a.items[0]&&a.items[0].value})}this._filtersDef$.next(t)}initStreams(){this.selectedGroup$=this._selectedGroup$.pipe(Object(r.a)(e=>!!e)),this.selectedStore$=this._selectedStore$.pipe(Object(r.a)(e=>!!e)),this.selectedDate$=this._selectedDate$.pipe(Object(r.a)(e=>!!e)),this.selectedReport$=this._selectedReport$.pipe(Object(r.a)(e=>!!e)),this.viewTypeFilter$=this._viewTypeFilter$.asObservable(),this.reports$=this._reports$.pipe(Object(r.a)(e=>!!e)),this.stores$=this._stores$.pipe(Object(r.a)(e=>!!e)),this.filtersDef$=this._filtersDef$.pipe(Object(r.a)(e=>!!e),Object(n.a)(this._visibleFilters$),Object(i.a)(([e,t])=>e.filter(e=>-1!==t.indexOf(e.name))),Object(l.a)(1)),this.value$=this._value$.pipe(Object(n.a)(this.filtersDef$.pipe(Object(o.a)())),Object(r.a)(([e,t])=>!!t&&!!e),Object(i.a)(([e])=>e))}updateStreams(e,t){e?(e.group!==t.group&&this._selectedGroup$.next(t.group),e.store!==t.store&&this._selectedStore$.next(t.store),e.date!==t.date&&this._selectedDate$.next(t.date),e.report!==t.report&&this._selectedReport$.next(t.report)):(this._selectedGroup$.next(t.group),this._selectedStore$.next(t.store),this._selectedDate$.next(t.date),this._selectedReport$.next(t.report))}initSubscriptions(){this.sub=this.dataApi.getStoreGroups().pipe(Object(n.a)(this.dataApi.getStores(),this.dataApi.getAvailableDates(),this.dataApi.getReports(),this.instanceAppSettingsApi.getByType("pages.all.main"),this.translate.get(["filters-group.business-segment.label","filters-group.business-segment.item.all.label","filters-group.store.label","filters-group.store.item.all.label","filters-group.period.label","filters-group.report.label"].map(e=>p.a+e))),Object(i.a)(([e,t,s,a,r,n])=>(e.unshift({label:n[p.a+"filters-group.business-segment.item.all.label"],value:c.a}),{storeGroups:e,stores:t.map(e=>({label:e[r?r.storeNameType:"name"],value:String(e.id)})),dates:s,reports:a,t:n})),Object(d.a)(({storeGroups:e,stores:t,dates:s,reports:a})=>this.updateValue({group:e[0].value,store:t[0].value,date:s[0].value,report:a[0].value}))).subscribe(({storeGroups:e,stores:t,dates:s,reports:a,t:r})=>{this._stores$.next(t),this._reports$.next(a),this._filtersDef$.next([Object(c.f)("group",e,r[p.a+"filters-group.business-segment.label"],null,!0),Object(c.f)("store",t,r[p.a+"filters-group.store.label"],null,null,!0),Object(c.f)("date",s,r[p.a+"filters-group.period.label"]),Object(c.f)("report",a,r[p.a+"filters-group.report.label"])])})}}},ZdYK:function(e,t,s){"use strict";var a=function(e){return e.Amount="amount",e.FloorPlan="floor-plan",e.ByAgeRange="1",e.ByModel="2",e.ByMake="3",e}({}),r=function(e){return e.NewInventory="1",e.UsedInventory="2",e.VehicleRec="4",e.FinanceReserve="7",e.Cit="8",e}({}),n=function(e){return e.ByStore="By Store",e.ByAge="By Age",e.ByAcct="By Account",e}({});s.d(t,"c",(function(){return a})),s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return n}))},uenX:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var a=s("lJxs"),r=s("VHTt");class n{constructor(e){this.api=e}getStoreGroups(){return this.api.get("storegroups").pipe(Object(a.a)(e=>e.map(e=>({label:e.name,value:e.groupIndex}))))}getStores(){return this.api.get("stores").pipe(Object(a.a)(e=>e.map(e=>r.c.fromJson(e))))}getAvailableDates(){return this.api.get("schedules/getavailabledates").pipe(Object(a.a)(e=>e.data.map(e=>({label:e.reportDate,value:e.reportDate}))))}getReports(){return this.api.get("schedules/reports").pipe(Object(a.a)(e=>e.data.map(e=>({label:e.Name,value:e.Value,isAR:!!e.isAR&&e.isAR,isAP:!!e.isAP&&e.isAP}))))}getSummary(e){return this.api.get("schedules",{params:{busseg:e.group,reportid:e.report,reportDate:e.date}})}getSummaryFloorPlan(e){return this.api.get("schedules/datafloorplan",{params:{busseg:e.group,reportid:e.report}})}getReportsTrendData(e){return this.api.get("schedules/chartreporttrend",{params:{busSeg:e.group,reportDate:e.date}})}getStoreTrendData(e){return this.api.get("schedules/charttrendstore",{params:{storeid:e.store,reportid:e.report,reportDate:e.date,chartindex:e.viewType}})}getDetails(e){return this.api.get("schedules/getsummary",{params:{BusSeg:e.group,reportDate:e.date,strField:"1"}})}getByStore(e){return this.api.get("schedules/details",{params:{storeid:e.store,reportid:e.report,mindays:e.mindays,maxdays:e.maxdays,model:e.model}})}getByAge(e){return this.api.get("schedules/detailsage",{params:{storeid:e.store,reportid:e.report,mindays:e.mindays,maxdays:e.maxdays,model:e.model}})}getByAcct(e){return this.api.get("schedules/detailsacct",{params:{reportDate:e.date,storeid:e.store,reportid:e.report}})}getAcctdetailsbycontrol(e){return this.api.get("schedules/acctdetailsbycontrol",{params:{storeid:e.store,reportid:e.report,glAcct:e.glAcct}})}getDetailsByControl(e){return this.api.get("schedules/detailsbycontrol",{params:{storeid:e.store,reportid:e.report,control:e.control,serial:e.serial}})}getSetupDef(e){return this.api.get("schedules/setupdef",{params:{storeid:e.store,reportid:e.report}}).pipe(Object(a.a)(({data:e})=>e))}getSetupGl(e){return this.api.get("schedules/setupgl",{params:{storeid:e.store,reportid:e.report}}).pipe(Object(a.a)(({data:e})=>e))}getLastRefreshedTime(e){return this.api.get("nrttimestamp",{params:{reportSection:e.reportSection}})}saveTotalFields(e){return this.api.put("schedules/".concat(e.report),{reportid:e.report,type:"totalfields",values:e.fields.map(e=>({datafield:e.field,totalfield:String(+e.visible)}))})}saveSetup(e){return this.api.put("schedules/".concat(e.reportid),e)}removeSetup(e,t,s,a,r){const n=[];return n.push({id:s,reportid:e,value:a,type:r,storeid:t}),this.api.post("schedules/deletesetup",n)}}},zZFd:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var a=function(e){return e.Docs="Docs",e.Operations="Operations",e.Schedules="Schedules",e.ServiceTech="ServiceTech",e.ServiceAdvisor="ServiceAdvisor",e.CustomReports="CustomReports",e.ExpenseManagement="ExpenseManagement",e["OCC-New"]="OCC-New",e["OCC-New-Inventory"]="OCC-New-Inventory",e["OCC-New-Inventory-NewAgingAnalysis"]="OCC-New-Inventory-NewAgingAnalysis",e["OCC-New-NewContest-NewSalesContest"]="OCC-New-NewContest-NewSalesContest",e["OCC-New-NewSales"]="OCC-New-NewSales",e["OCC-New-NewSalesContest"]="OCC-New-NewSalesContest",e["OCC-New-NewSales-NewByModel"]="OCC-New-NewSales-NewByModel",e["OCC-Service&Parts"]="OCC-Service&Parts",e["OCC-Service&Parts-OpenPartTickets"]="OCC-Service&Parts-OpenPartTickets",e["OCC-Service&Parts-OpenPartTickets-OpenPartTickets"]="OCC-Service&Parts-OpenPartTickets-OpenPartTickets",e["OCC-Service&Parts-OpenROs"]="OCC-Service&Parts-OpenROs",e["OCC-Service&Parts-OpenROs-OpenROs"]="OCC-Service&Parts-OpenROs-OpenROs",e["OCC-Service&Parts-ServiceAdvisorContest"]="OCC-Service&Parts-ServiceAdvisorContest",e["OCC-Service&Parts-ServiceAdvisorContest-ServiceAdvisor"]="OCC-Service&Parts-ServiceAdvisorContest-ServiceAdvisor",e["OCC-Service&Parts-ServiceDetail"]="OCC-Service&Parts-ServiceDetail",e["OCC-Service&Parts-TechnicianContest"]="OCC-Service&Parts-TechnicianContest",e["OCC-Service&Parts-TechnicianContest-technicianContest"]="OCC-Service&Parts-TechnicianContest-technicianContest",e["OCC-Tracking Section"]="OCC-Tracking Section",e["OCC-Used"]="OCC-Used",e["OCC-Used-Inventory"]="OCC-Used-Inventory",e["OCC-Used-Inventory-UsedAgingAnalysis"]="OCC-Used-Inventory-UsedAgingAnalysis",e["OCC-Used-UsedContest-UsedSalesContest"]="OCC-Used-UsedContest-UsedSalesContest",e["OCC-Used-UsedSales"]="OCC-Used-UsedSales",e["OCC-Used-UsedSalesContest"]="OCC-Used-UsedSalesContest",e["OCC-Used-UsedSales-UsedByModel"]="OCC-Used-UsedSales-UsedByModel",e["OCC-F&I"]="OCC-F&I",e["OCC-F&I-AgingAnalysis-CIT"]="OCC-F&I-AgingAnalysis-CIT",e["OCC-F&I-F&IContest"]="OCC-F&I-F&IContest",e["OCC-F&I-F&IPerformance"]="OCC-F&I-F&IPerformance",e}({})}}]);