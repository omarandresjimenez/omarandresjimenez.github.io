(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{wyEc:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{constructor(l){l.addLoaderWithPrefixedTranslations("/cabinet/custom-reports/fixed-ops-adj-net","")}}var i=e("pMnS"),o=e("t68o"),s=e("zbXB"),r=e("HOtD"),a=e("bZzr"),d=e("646r"),c=e("19u4"),p=e("vNrE"),h=e("RHbX"),m=e("Xrj0"),f=e("SVse"),g=e("TSSN"),v=e("iInd"),b=e("jqm9"),w=e("/kTj"),k=e("Asqg"),x=e("1Elx"),O=e("zeHk"),_=e("+bil"),T=e("S+vS"),R=e("ChPW"),D=e("M5gX"),N=e("hfps"),C=e("eeq/"),y=e("mvzq"),M=e("t1ag"),F=e("K5C0"),I=e("+2T5"),j=e("/Mbv"),S=e("98QR"),Y=e("V4Wx"),A=e("zp2H"),V=e("v67E"),E=e("2v1Z"),G=e("bUbq"),$=e("sFX2"),U=e("NxlO"),P=e("XpwZ"),L=e("EwA9"),B=e("Qq/Z"),q=e("cMRB"),z=e("itXk"),X=e("Cfvw"),H=e("SxV6"),W=e("wd/R"),K=(e("pFkP"),e("OrbI"),e("8Gnb"),e("w+fh")),Z=e("aR35");class Q{constructor(l,n,e,t,u,i,o,s,r,a,d,c){this.FixedOpsAdjNetReportApi=l,this.coreCache=n,this.route=e,this.router=t,this.dialog=u,this.session=i,this.format=o,this.window=s,this.agGridPdf=r,this.excel=a,this.tracking=d,this.translate=c,this.loading=!1,this.reportTitle="Daily Doc",this.dateUrl="",this.storegroups=[],this.mainData=null,this.colsgrid=[],this.selectedMonth=null,this.selectedYear=0,this.monthpickerOpened=!1,this.monthpickerYears=[],this.stores=[],this.yearsMap=[],this.storegroupsWithoutAll=[],this.monthpickerValue=(new Date).getTime().toString(),this.dropdownStoregroupOpened=!1,this.selectedStoregroup={groupIndex:0,name:"All",slno:"",stores:[]},this.viewTrend=!1,this.subs=[]}set sub(l){this.subs.push(l)}get cabinetUrl(){return Z.a.cabinetUrl}ngOnInit(){this.currentUser=this.session.getCurrentUser(),isNaN(parseInt(this.monthpickerValue,10))&&(this.monthpickerValue="0");const l=this;this.sub=Object(z.b)(Object(X.a)(this.FixedOpsAdjNetReportApi.getStores()),this.coreCache.storesById$).subscribe(([l,n])=>{this.storesIndex=n,this.stores=l.map(l=>K.a.fromJson(l))}),this.sub=this.route.params.subscribe(n=>{let e=n.date;e||(e=""),this.dateUrl=e,this.FixedOpsAdjNetReportApi.getCalendar().then(n=>{const t=[],u=[];n.forEach(l=>{const n=new Date(l.date_from),e=n.getFullYear();void 0===t[e]&&(t[e]={title:e.toString(),months:[]}),l.url=W(n).format("MM_YYYY"),t[e].months.unshift(l)});for(const l of Object.keys(t))t[l].months.length&&u.push(t[l]);if(l.monthpickerYears=u,this.yearsMap=u.map(l=>l.title),""!==this.dateUrl){const[l,n]=this.dateUrl.split("_"),e=this.yearsMap.indexOf(n);this.selectedYear=-1!==e?e:u.length-1}else this.selectedYear=u.length-1;const i=t.length-1,o=i>=0?t[i].months.length-1:null;let s;if(null!==o&&(s=t[i].months[o]),!e){this.dateUrl=s.date_from;const l=new Date(this.dateUrl);this.selectedYear=this.selectedYear;const n=`${this.cabinetUrl}/custom-reports/fixed-ops-adj-net/`+`${W(l).format("MM_YYYY")}`;return this.router.navigate([n])}if(this.selectedMonth=this.checkDate(e,t),this.dateUrl=e,null===this.selectedMonth)return this.selectedMonth=s,this.dateUrl=this.selectedMonth.date_from,this.router.navigate([`${this.cabinetUrl}/custom-reports/fixed-ops-adj-net/`+this.selectedMonth.url]);if(t.forEach(l=>{l.months.forEach(l=>{const n=new Date(l.date_from),t=W(n).format("MM_YYYY");l.url=`${this.cabinetUrl}/custom-reports/fixed-ops-adj-net/`+`${W(n).format("MM_YYYY")}`,t===e&&(this.selectedMonth=l)})}),""!==e){const[l,n]=e.split("_");this.monthpickerValue=new Date(`${l}/01/${n}`).getTime().toString()}else this.monthpickerValue=(new Date).getTime().toString();this.setTopLinks(),this.loadPage(),this.FixedOpsAdjNetReportApi.getStoreGroups().then(l=>(this.storegroups=l,this.sub=this.translate.get("business-segment-filter.all").subscribe(l=>this.storegroups.unshift(new q.a(0,l))),l))})})}windowClick(l){this.dropdownStoregroupOpened&&!l.target.closest(".storegroup-select-box")&&(this.dropdownStoregroupOpened=!1),this.monthpickerOpened&&!l.target.closest(".monthpicker-wrapper")&&(this.monthpickerOpened=!1)}viewTrendToggle(l){this.viewTrend=l.target.checked,this.loadPage()}checkDate(l,n){let e=null;return n.forEach(n=>{n.months.forEach(n=>{n.url.indexOf(l)>-1&&!e&&(e=n)})}),e}toggleStoregroupDropdown(){this.dropdownStoregroupOpened=!this.dropdownStoregroupOpened}setTopLinks(){if(""!==this.dateUrl){const[l,n]=this.dateUrl.split("_");this.monthpickerValue=new Date(`${l}/01/${n}`).getTime().toString()}else this.monthpickerValue=(new Date).getTime().toString()}setStoregroup(l){this.selectedStoregroup=l,this.dropdownStoregroupOpened=!1,this.loadPage()}setMonth(l){this.selectedMonth=l,this.monthpickerOpened=!1;const n=new Date(this.selectedMonth.date_from);this.dateUrl=String((n.getMonth()+1).toString().replace(/^([0-9])$/,"0$1")+"_"+n.getFullYear())}toggleMonthpicker(){this.monthpickerOpened=!this.monthpickerOpened}prevYear(){this.selectedYear--}nextYear(){this.selectedYear++}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}onExcelExport(){this.sub=this.translate.get("header.report-title").subscribe(l=>{this.maingrid.exportDataAsXls(l)})}onPDFExport(){console.log("PDF export")}onBsFormInit(l){this.bsForm=l}openBsForm(){this.dropdownStoregroupOpened=!1,this.bsForm.showModal()}closeBsForm(){this.bsForm1._setSegment(0,null)}setChildrenCols(l,n){this.sub=this.translate.get(["header-col1.line_description"]).subscribe(e=>{if(this.colsgrid.push({text:e["header-col1.line_description"],field:"ld",children:[]}),this.colsgrid.push(this.selectedStoregroup.groupIndex<999?{text:"Total",children:[{headerName:"MTD",field:"tMTD",decimalNumber:!0,numberOfDecimals:0,width:100,sign:"$"},{headerName:"YTD",field:"tYTD",decimalNumber:!0,numberOfDecimals:0,width:100,sign:"$"},{headerName:"AVG",field:"tAVG",decimalNumber:!0,numberOfDecimals:0,width:100,sign:"$"},{headerName:"GP",field:"tGP",decimalNumber:!0,numberOfDecimals:0,width:100,sign:"%"}]}:{text:"Total",decimalNumber:!0,field:"sTot",width:100,sign:"$"}),l.stores)for(const t of Object.keys(l.stores)){const e=n.get(+l.stores[t].st);this.colsgrid.push({text:e.name,children:[{headerName:"MTD",field:"s"+e.id+"MTD",decimalNumber:!0,numberOfDecimals:0,width:100,sign:"$"},{headerName:"YTD",field:"s"+e.id+"YTD",decimalNumber:!0,numberOfDecimals:0,width:100,sign:"$"},{headerName:"AVG",field:"s"+e.id+"AVG",decimalNumber:!0,numberOfDecimals:0,width:100,sign:"$"},{headerName:"GP",field:"s"+e.id+"GP",decimalNumber:!0,numberOfDecimals:0,width:100,sign:"%"}]})}this.colsgrid[0].decimalNumber=!1,this.colsgrid[0].supressMove=!0,this.colsgrid[0].pinned=!0})}mainView(){this.loading=!0,this.mainData=[];const l=this.FixedOpsAdjNetReportApi.getReport(this.selectedStoregroup.groupIndex,parseInt(this.selectedMonth.dateindex,10));Object(z.b)(Object(X.a)(l),this.coreCache.storesById$.pipe(Object(H.a)())).subscribe(([l,n])=>{this.colsgrid=[],this.setChildrenCols(l,n);let e=[];for(const t of l.data){for(const l of Object.keys(t)){const n={isnumber:!1,value:"",field:l,bold:!1};"title"===t.lt?n.value="ld"===l?t[l]:"":t[l]&&!isNaN(t[l])&&t[l].indexOf(".")>0?(n.isnumber=!0,n.value=this.formatNumber(parseFloat(t[l].toString().replace(/,/g,""))*(l.indexOf("GP")>=0?100:1))):!isNaN(t[l])&&t[l]&&"0"!==t[l].substring(0,1)?(n.isnumber=!0,n.value=t[l]*(l.indexOf("GP")>=0?100:1)):(n.isnumber=!1,n.value=t[l]),n.field=l,n.bold="bold"===t.font||"title"===t.lt,e.push(n)}e.push({field:"sign",value:this.getSignFormat(t.lf)}),this.mainData.push(e),e=[]}this.loading=!1},l=>{this.loading=!1,this.dialog.alert(l.message)})}showViewTrend(){this.loading=!0,this.mainData=[];const l=this.FixedOpsAdjNetReportApi.getViewTrend(parseInt(this.selectedMonth.dateindex,10));Object(X.a)(l).subscribe(l=>{this.colsgrid=[],this.sub=this.translate.get(["header-col1.line_description","header-col1.target","header-col1.total"]).subscribe(n=>{this.colsgrid.push({text:n["header-col1.line_description"],field:"ld"});for(const e of Object.keys(l.labels))this.colsgrid.push({field:e,text:l.labels[e],pinned:!1,decimalNumber:!0,numberOfDecimals:0});this.colsgrid[0].decimalNumber=!1,this.colsgrid[0].supressMove=!0,this.colsgrid[0].pinned=!0});let n=[];for(const e of l.data){for(const l of Object.keys(e)){const t={isnumber:!1,value:"",field:l,bold:!1};"title"===e.lt?t.value="ld"!==l?"":e[l]:e[l]&&!isNaN(e[l])&&e[l].indexOf(".")>0?(t.isnumber=!0,t.value=this.formatNumber(parseFloat(e[l].toString().replace(/,/g,""))*(l.indexOf("GP")>=0?100:1))):!isNaN(e[l])&&e[l]&&"0"!==e[l].substring(0,1)?(t.isnumber=!0,t.value=e[l]):(t.isnumber=!1,t.value=e[l]*(l.indexOf("GP")>=0?100:1)),t.field=l,t.bold="bold"===e.font||"title"===e.lt,n.push(t)}n.push({field:"sign",value:this.getSignFormat(e.lf)}),this.mainData.push(n),n=[]}this.loading=!1},l=>{this.loading=!1,this.dialog.alert(l.message)})}loadPage(){this.viewTrend?this.showViewTrend():this.mainView()}formatNumber(l){return isNaN(l)||(l=parseFloat(l)),this.format.transform(l,0,1)}getSignFormat(l){switch(l){case"per":return"%";case"amt":return"$";default:return""}}}var J=e("f2Qm");class ll extends J.a{constructor(l){super(l),this.api=l}getStoreGroups(){return this.api.call("GET","/storegroups").then(l=>l).catch(this.handleError)}getCalendar(){return this.api.call("GET","/kpi/month").then(l=>l).catch(this.handleError)}getReport(l,n){const e=[];return e.push({key:"busseg",value:l}),e.push({key:"dateid",value:n}),this.api.call("GET","/fixedopsadjnet",e).then(l=>l).catch(this.handleError)}getStores(){return this.api.call("GET","/stores").then(l=>l).catch(this.handleError)}getViewTrend(l){const n=[];return n.push({key:"dateid",value:l}),this.api.call("GET","/fixedopsadjnet/viewtrend",n).then(l=>l).catch(this.handleError)}handleError(l){return Promise.reject(l)}}var nl=e("yK5/"),el=e("Ntwu"),tl=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function ul(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","dropdown-loader"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"app-loader",[],[[8,"className",0]],null,null,h.b,h.a)),t["\u0275did"](2,49152,null,0,m.a,[],null,null)],null,(function(l,n){l(n,1,0,t["\u0275nov"](n,2).cssClassByType)}))}function il(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","dropdown-menu-item"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"span",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.setStoregroup(l.context.$implicit)&&t),t}),null,null)),(l()(),t["\u0275ted"](2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.name)}))}function ol(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,9,"div",[["class","c_dropdown-std_menu"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,8,"div",[["style","height: auto; max-height: 20pc; overflow-y: auto;"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,ul)),t["\u0275did"](3,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,il)),t["\u0275did"](5,278528,null,0,f.m,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](6,0,null,null,3,"div",[["class","dropdown-menu-item dropdown-menu-actions"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,2,"button",[["class","btn btn--empty btn--color-primary btn--small"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.openBsForm()&&t),t}),null,null)),(l()(),t["\u0275ted"](8,null,[""," "])),t["\u0275pid"](131072,g.i,[g.j,t.ChangeDetectorRef])],(function(l,n){var e=n.component;l(n,3,0,!e.storegroups.length),l(n,5,0,e.storegroups)}),(function(l,n){l(n,8,0,t["\u0275unv"](n,8,0,t["\u0275nov"](n,9).transform("business-segment-filter.add-new")))}))}function sl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","c_dropdown-std less-border storegroup-select-box"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","c_dropdown-std_value"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.toggleStoregroupDropdown()&&t),t}),null,null)),(l()(),t["\u0275eld"](2,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](3,null,["",": ",""])),t["\u0275pid"](131072,g.i,[g.j,t.ChangeDetectorRef]),(l()(),t["\u0275eld"](5,0,null,null,0,"span",[["class","icon-arrow-s-down"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,ol)),t["\u0275did"](7,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,7,0,n.component.dropdownStoregroupOpened)}),(function(l,n){var e=n.component;l(n,3,0,t["\u0275unv"](n,3,0,t["\u0275nov"](n,4).transform("business-segment-filter.label")),null==e.selectedStoregroup?null:e.selectedStoregroup.name)}))}function rl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","monthpicker-loader"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"app-loader",[],[[8,"className",0]],null,null,h.b,h.a)),t["\u0275did"](2,49152,null,0,m.a,[],null,null)],null,(function(l,n){l(n,1,0,t["\u0275nov"](n,2).cssClassByType)}))}function al(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,9,"div",[["class","monthpicker-month-item"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,8,"a",[["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,e){var u=!0,i=l.component;return"click"===n&&(u=!1!==t["\u0275nov"](l,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),"click"===n&&(u=!1!==i.setMonth(l.context.$implicit)&&u),u}),null,null)),t["\u0275did"](2,671744,[[4,4]],0,v.r,[v.o,v.a,f.k],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](3,1),t["\u0275did"](4,1720320,null,2,v.q,[v.o,t.ElementRef,t.Renderer2,[2,v.p],[2,v.r]],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),t["\u0275qud"](603979776,3,{links:1}),t["\u0275qud"](603979776,4,{linksWithHrefs:1}),t["\u0275pod"](7,{exact:0}),(l()(),t["\u0275ted"](8,null,["",""])),t["\u0275ppd"](9,2)],(function(l,n){var e=l(n,3,0,n.context.$implicit.url);l(n,2,0,e);var t=l(n,7,0,!0);l(n,4,0,t,"active")}),(function(l,n){l(n,1,0,t["\u0275nov"](n,2).target,t["\u0275nov"](n,2).href);var e=t["\u0275unv"](n,8,0,l(n,9,0,t["\u0275nov"](n.parent.parent.parent,0),n.context.$implicit.date_from,"MMM"));l(n,8,0,e)}))}function dl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"div",[["class","monthpicker-year"]],[[8,"hidden",0]],null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,6,"div",[["class","monthpicker-year-header"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"button",[["class","prev-year"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.prevYear()&&t),t}),null,null)),(l()(),t["\u0275eld"](3,0,null,null,0,"span",[["class","icon-arrow-s-left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,1,"span",[["class","year-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["",""])),(l()(),t["\u0275eld"](6,0,null,null,1,"button",[["class","next-year"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.nextYear()&&t),t}),null,null)),(l()(),t["\u0275eld"](7,0,null,null,0,"span",[["class","icon-arrow-s-right"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,2,"div",[["class","monthpicker-year-months"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,al)),t["\u0275did"](10,278528,null,0,f.m,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,10,0,n.context.$implicit.months)}),(function(l,n){var e=n.component;l(n,0,0,n.context.index!=e.selectedYear),l(n,2,0,0===e.selectedYear),l(n,5,0,n.context.$implicit.title),l(n,6,0,e.selectedYear==e.monthpickerYears.length-1)}))}function cl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","c_dropdown-std_menu monthpicker"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,rl)),t["\u0275did"](2,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,dl)),t["\u0275did"](4,278528,null,0,f.m,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,2,0,!e.monthpickerYears.length),l(n,4,0,e.monthpickerYears)}),null)}function pl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"button",[["class","right"]],[[8,"hidden",0]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onExcelExport()&&t),t}),null,null)),(l()(),t["\u0275eld"](1,16777216,null,null,2,"i",[["class","material-icons"],["tooltipTheme","dark-auto"]],null,[[null,"focusin"],[null,"mouseenter"],[null,"focusout"],[null,"mouseleave"]],(function(l,n,e){var u=!0;return"focusin"===n&&(u=!1!==t["\u0275nov"](l,2).show()&&u),"mouseenter"===n&&(u=!1!==t["\u0275nov"](l,2).show()&&u),"focusout"===n&&(u=!1!==t["\u0275nov"](l,2).hide()&&u),"mouseleave"===n&&(u=!1!==t["\u0275nov"](l,2).hide()&&u),u}),null,null)),t["\u0275did"](2,147456,null,0,b.a,[t.ViewContainerRef,t.ComponentFactoryResolver,t.ChangeDetectorRef,w.b],{content:[0,"content"],tooltipTheme:[1,"tooltipTheme"]},null),(l()(),t["\u0275ted"](-1,null,["file_download"]))],(function(l,n){l(n,2,0,t["\u0275nov"](n.parent,37),"dark-auto")}),(function(l,n){l(n,0,0,n.component.loading)}))}function hl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","c__table-row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"div",[["class","c__table-cell c__table-loading"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"app-loader",[],[[8,"className",0]],null,null,h.b,h.a)),t["\u0275did"](3,49152,null,0,m.a,[],null,null)],null,(function(l,n){l(n,2,0,t["\u0275nov"](n,3).cssClassByType)}))}function ml(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"ag-grid",[["style","height:100%"]],null,[["window","resize"]],(function(l,n,e){var u=!0;return"window:resize"===n&&(u=!1!==t["\u0275nov"](l,5).onResize()&&u),u}),k.b,k.a)),t["\u0275prd"](512,null,f.f,f.f,[t.LOCALE_ID]),t["\u0275prd"](512,null,x.a,x.a,[]),t["\u0275prd"](512,null,O.a,O.a,[_.a,T.a,R.a,g.j]),t["\u0275prd"](512,null,D.a,D.a,[]),t["\u0275did"](5,770048,[[1,4],["maingrid",4]],0,N.a,[f.d,f.f,x.a,C.a,O.a,y.a,D.a,M.b,g.j,F.a,w.b,I.a],{data:[0,"data"],headers:[1,"headers"],showTotal:[2,"showTotal"],showCount:[3,"showCount"],allowSort:[4,"allowSort"],formattedValues:[5,"formattedValues"],autoFitColumns:[6,"autoFitColumns"],idGrid:[7,"idGrid"]},null)],(function(l,n){var e=n.component;l(n,5,0,e.mainData,e.colsgrid,!1,!1,!1,!1,!1,"maingridp")}),null)}function fl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","content__section_body"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"div",[["class","c__table"],["style","height: calc(100vh - 216px);"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,ml)),t["\u0275did"](3,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,!n.component.loading)}),null)}function gl(l){return t["\u0275vid"](0,[t["\u0275pid"](0,f.e,[t.LOCALE_ID]),t["\u0275qud"](671088640,1,{maingrid:0}),t["\u0275qud"](402653184,2,{bsForm1:0}),(l()(),t["\u0275eld"](3,0,null,null,23,"div",[["class","page__actions_bar page__actions_bar--aligned"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,0,"div",[["class","align-left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,21,"div",[["class","align-right"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,6,"label",[["class","c_checkbox by-store-checkbox"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,2,"div",[["class","c_checkbox-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,["",""])),t["\u0275pid"](131072,g.i,[g.j,t.ChangeDetectorRef]),(l()(),t["\u0275eld"](10,0,null,null,2,"div",[["class","c_checkbox-toggle"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,0,"input",[["type","checkbox"]],[[8,"checked",0]],[[null,"change"]],(function(l,n,e){var t=!0;return"change"===n&&(t=!1!==l.component.viewTrendToggle(e)&&t),t}),null,null)),(l()(),t["\u0275eld"](12,0,null,null,0,"div",[["class","c_checkbox-toggle-view"]],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,13,"div",[["class","content__section-header__actions"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,sl)),t["\u0275did"](15,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](16,0,null,null,10,"div",[["class","c_dropdown-std monthpicker-wrapper less-border"]],null,null,null,null,null)),(l()(),t["\u0275eld"](17,0,null,null,7,"div",[["class","c_dropdown-std_value"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.toggleMonthpicker()&&t),t}),null,null)),(l()(),t["\u0275eld"](18,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](19,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](20,null,["",""])),t["\u0275ppd"](21,2),(l()(),t["\u0275ted"](22,null,[" "," "])),t["\u0275ppd"](23,2),(l()(),t["\u0275eld"](24,0,null,null,0,"span",[["class","icon-arrow-s-down"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,cl)),t["\u0275did"](26,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](27,0,null,null,12,"div",[["class","content__section"]],null,null,null,null,null)),(l()(),t["\u0275eld"](28,0,null,null,11,"div",[["class","content__section-header content__section-header"]],null,null,null,null,null)),(l()(),t["\u0275eld"](29,0,null,null,3,"h3",[["class","content__section-heading"],["style","float: left;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](30,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),t["\u0275ted"](31,null,[""," "])),t["\u0275pid"](131072,g.i,[g.j,t.ChangeDetectorRef]),(l()(),t["\u0275and"](16777216,null,null,1,null,pl)),t["\u0275did"](34,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](35,0,null,null,4,"app-tooltip-content",[["style","width:75px"]],[[1,"role",0],[8,"className",0],[2,"tooltip--with-header",null],[4,"top","px"],[4,"left","px"],[2,"in",null],[2,"fade",null]],[[null,"focusin"],[null,"mouseenter"],[null,"focusout"],[null,"mouseleave"]],(function(l,n,e){var u=!0;return"focusin"===n&&(u=!1!==t["\u0275nov"](l,37).mouseIn()&&u),"mouseenter"===n&&(u=!1!==t["\u0275nov"](l,37).mouseIn()&&u),"focusout"===n&&(u=!1!==t["\u0275nov"](l,37).mouseOut()&&u),"mouseleave"===n&&(u=!1!==t["\u0275nov"](l,37).mouseOut()&&u),u}),r.c,r.a)),t["\u0275prd"](512,null,j.a,j.a,[w.b]),t["\u0275did"](37,4440064,[["tooltipUnits",4]],0,S.a,[t.ElementRef,j.a,Y.a,f.d,t.Renderer2,t.ChangeDetectorRef,w.b],null,null),(l()(),t["\u0275ted"](38,1,[" "," "])),t["\u0275pid"](131072,g.i,[g.j,t.ChangeDetectorRef]),(l()(),t["\u0275eld"](40,0,null,null,2,"div",[["class","c__table"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,hl)),t["\u0275did"](42,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,fl)),t["\u0275did"](44,16384,null,0,f.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](45,0,null,null,5,"app-modal",[["class","modal-bs-form"]],null,[[null,"onInit"],[null,"close"]],(function(l,n,e){var t=!0,u=l.component;return"onInit"===n&&(t=!1!==u.onBsFormInit(e)&&t),"close"===n&&(t=!1!==u.closeBsForm()&&t),t}),A.b,A.a)),t["\u0275prd"](512,null,V.a,V.a,[w.b]),t["\u0275did"](47,1228800,null,0,E.a,[V.a,f.d,t.ElementRef,t.Renderer2,w.b],{modalTitle:[0,"modalTitle"]},{close:"close",onInit:"onInit"}),t["\u0275pid"](131072,g.i,[g.j,t.ChangeDetectorRef]),(l()(),t["\u0275eld"](49,0,null,0,1,"bs-form",[],null,null,null,G.b,G.a)),t["\u0275did"](50,770048,[[2,4]],0,$.a,[I.a,U.a,T.a,g.j,P.a],{stores:[0,"stores"],segments:[1,"segments"]},null)],(function(l,n){var e=n.component;l(n,15,0,!e.viewTrend),l(n,26,0,e.monthpickerOpened),l(n,34,0,null==e.currentUser?null:e.currentUser.isExportExcelAvailable),l(n,37,0),l(n,42,0,e.loading),l(n,44,0,!e.loading),l(n,47,0,t["\u0275inlineInterpolate"](1,"",t["\u0275unv"](n,47,0,t["\u0275nov"](n,48).transform("business-segment-form.title")),"")),l(n,50,0,e.stores,e.storegroupsWithoutAll)}),(function(l,n){var e=n.component;l(n,8,0,t["\u0275unv"](n,8,0,t["\u0275nov"](n,9).transform("filters.view-trend"))),l(n,11,0,e.viewTrend);var u=t["\u0275unv"](n,20,0,l(n,21,0,t["\u0275nov"](n,0),e.monthpickerValue,"MMMM"));l(n,20,0,u);var i=t["\u0275unv"](n,22,0,l(n,23,0,t["\u0275nov"](n,0),e.monthpickerValue,"y"));l(n,22,0,i),l(n,31,0,t["\u0275unv"](n,31,0,t["\u0275nov"](n,32).transform("header.report-title"))),l(n,35,0,t["\u0275nov"](n,37).role,t["\u0275nov"](n,37).hostClass,t["\u0275nov"](n,37).withHeader,t["\u0275nov"](n,37).top,t["\u0275nov"](n,37).left,t["\u0275nov"](n,37).isIn,t["\u0275nov"](n,37).isFade),l(n,38,0,t["\u0275unv"](n,38,0,t["\u0275nov"](n,39).transform("header-icons.download-excel")))}))}function vl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"ng-component",[],null,[["window","click"]],(function(l,n,e){var u=!0;return"window:click"===n&&(u=!1!==t["\u0275nov"](l,5).windowClick(e)&&u),u}),gl,tl)),t["\u0275prd"](135680,null,E.a,E.a,[V.a,f.d,t.ElementRef,t.Renderer2,w.b]),t["\u0275prd"](4608,null,U.a,U.a,[L.a,B.a]),t["\u0275prd"](512,null,x.a,x.a,[]),t["\u0275prd"](512,null,O.a,O.a,[_.a,T.a,R.a,g.j]),t["\u0275did"](5,245760,null,0,Q,[ll,nl.a,v.a,v.o,T.a,I.a,x.a,el.a,O.a,y.a,R.a,g.j],null,null)],(function(l,n){l(n,5,0)}),null)}var bl=t["\u0275ccf"]("ng-component",Q,vl,{},{},[]),wl=e("s7LF"),kl=e("QQfA"),xl=e("IP0z"),Ol=e("s6ns"),_l=e("POq0"),Tl=e("821u"),Rl=e("Xd0L"),Dl=e("/HVE"),Nl=e("Mc5n"),Cl=e("hOhj"),yl=e("butG"),Ml=e("iTUp"),Fl=e("oiVm"),Il=e("Fbhx"),jl=e("aBBA"),Sl=e("cUpR"),Yl=e("Fwaw"),Al=e("zMNK"),Vl=e("5GAg"),El=e("SXLW"),Gl=e("FFHx"),$l=e("l/h6"),Ul=e("/Lwf"),Pl=e("yotz"),Ll=e("T3zS");e.d(n,"FixedOpsAdjNetModuleNgFactory",(function(){return Bl}));var Bl=t["\u0275cmf"](u,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,o.a,s.b,s.a,r.b,a.a,d.a,c.a,p.a,bl]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,f.p,f.o,[t.LOCALE_ID,[2,f.G]]),t["\u0275mpd"](4608,wl.F,wl.F,[]),t["\u0275mpd"](4608,wl.f,wl.f,[]),t["\u0275mpd"](4608,L.a,L.a,[w.b]),t["\u0275mpd"](4608,U.a,U.a,[L.a,B.a]),t["\u0275mpd"](4608,kl.c,kl.c,[kl.i,kl.e,t.ComponentFactoryResolver,kl.h,kl.f,t.Injector,t.NgZone,f.d,xl.b,[2,f.j]]),t["\u0275mpd"](5120,kl.j,kl.k,[kl.c]),t["\u0275mpd"](5120,Ol.c,Ol.d,[kl.c]),t["\u0275mpd"](135680,Ol.e,Ol.e,[kl.c,t.Injector,[2,f.j],[2,Ol.b],Ol.c,[3,Ol.e],kl.e]),t["\u0275mpd"](4608,_l.c,_l.c,[]),t["\u0275mpd"](4608,Tl.i,Tl.i,[]),t["\u0275mpd"](5120,Tl.a,Tl.b,[kl.c]),t["\u0275mpd"](4608,Rl.a,Rl.v,[[2,Rl.f],Dl.a]),t["\u0275mpd"](4608,Nl.f,Nl.f,[f.d,t.NgZone,Cl.i,Nl.h]),t["\u0275mpd"](4608,ll,ll,[yl.a]),t["\u0275mpd"](1073742336,f.c,f.c,[]),t["\u0275mpd"](1073742336,v.s,v.s,[[2,v.x],[2,v.o]]),t["\u0275mpd"](1073742336,wl.E,wl.E,[]),t["\u0275mpd"](1073742336,wl.m,wl.m,[]),t["\u0275mpd"](1073742336,wl.A,wl.A,[]),t["\u0275mpd"](1073742336,g.g,g.g,[]),t["\u0275mpd"](1073742336,Ml.a,Ml.a,[]),t["\u0275mpd"](1073742336,Fl.a,Fl.a,[]),t["\u0275mpd"](1073742336,Il.a,Il.a,[jl.a]),t["\u0275mpd"](1073742336,xl.a,xl.a,[]),t["\u0275mpd"](1073742336,Rl.l,Rl.l,[[2,Rl.d],[2,Sl.f]]),t["\u0275mpd"](1073742336,Dl.b,Dl.b,[]),t["\u0275mpd"](1073742336,Rl.u,Rl.u,[]),t["\u0275mpd"](1073742336,Yl.c,Yl.c,[]),t["\u0275mpd"](1073742336,Al.g,Al.g,[]),t["\u0275mpd"](1073742336,Cl.f,Cl.f,[]),t["\u0275mpd"](1073742336,kl.g,kl.g,[]),t["\u0275mpd"](1073742336,Ol.k,Ol.k,[]),t["\u0275mpd"](1073742336,_l.d,_l.d,[]),t["\u0275mpd"](1073742336,Vl.a,Vl.a,[]),t["\u0275mpd"](1073742336,Tl.j,Tl.j,[]),t["\u0275mpd"](1073742336,Rl.w,Rl.w,[]),t["\u0275mpd"](1073742336,Rl.n,Rl.n,[]),t["\u0275mpd"](1073742336,El.AgGridModule,El.AgGridModule,[]),t["\u0275mpd"](1073742336,Gl.a,Gl.a,[]),t["\u0275mpd"](1073742336,$l.a,$l.a,[jl.a]),t["\u0275mpd"](1073742336,Nl.g,Nl.g,[]),t["\u0275mpd"](1073742336,Ul.a,Ul.a,[]),t["\u0275mpd"](1073742336,Pl.b,Pl.b,[]),t["\u0275mpd"](1073742336,Ll.a,Ll.a,[]),t["\u0275mpd"](1073742336,u,u,[jl.a]),t["\u0275mpd"](256,Rl.e,Rl.i,[]),t["\u0275mpd"](1024,v.m,(function(){return[[{path:"",pathMatch:"full",component:Q},{path:":date",component:Q}]]}),[])])}))}}]);