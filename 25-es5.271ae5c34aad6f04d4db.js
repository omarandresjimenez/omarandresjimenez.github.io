(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{JA3b:function(n,l,t){"use strict";var e=t("8Y7J");t("JItt"),t.d(l,"a",(function(){return i})),t.d(l,"b",(function(){return a}));var i=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;height:calc(100vh - 156px - 48px);background-color:#f5f5f5;padding:20px;margin:0 -20px}.content-body-size-1[_nghost-%COMP%]{height:calc(100vh - 234px - 48px)}.content-body-size-2[_nghost-%COMP%]{height:calc(100vh - 125px - 48px)}.content-body-size-3[_nghost-%COMP%]{height:calc(100vh - 110px - 48px)}.content-body-without-header[_nghost-%COMP%]{height:calc(100vh - 48px)}.content-body-custom[_nghost-%COMP%]{height:calc(100vh - 135px - 48px)}"]],data:{}});function a(n){return e["\u0275vid"](2,[e["\u0275ncd"](null,0)],null,null)}},JItt:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));class e{constructor(){}ngOnInit(){}}},Jrk4:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));class e{}},LH5O:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));class e{}},W0XV:function(n,l,t){"use strict";t.d(l,"a",(function(){return a}));var e=t("8Y7J");const i=window.amplitude;class a{constructor(n){this.authService=n,this.filterChange=new e.EventEmitter,this.addItem=new e.EventEmitter,this.filterText={},this.isHAG=!1}set snapshot(n){n&&(this.snapshotVal=n,sessionStorage.getItem("opsfilter_Ops")&&"undefined"!==sessionStorage.getItem("opsfilter_Ops")?this.snapshotVal.opsfilter=sessionStorage.getItem("opsfilter_Ops"):this.isHAG?(sessionStorage.setItem("opsfilter_Ops","1"),this.snapshotVal.opsfilter="1"):(sessionStorage.setItem("opsfilter_Ops","2"),this.snapshotVal.opsfilter="2"))}filterItems(n,l){return n.filter(n=>!this.filterText[l]||n.label.toLowerCase().indexOf(this.filterText[l].toLowerCase())>=0)}ngOnChanges(){this.filters&&this.filters.map(n=>this.filterText[n.name]="")}ngOnInit(){this.currentUser=this.authService.getCurrentUser(),this.isHAG=this.currentUser.instance_name.indexOf("HAG")>=0,this.isHAG?sessionStorage.setItem("opsfilter_Ops","1"):sessionStorage.setItem("opsfilter_Ops","2")}onFilterChange(n,l,t){if(this.filterChange.emit({name:n,value:t}),l.items){const n=l.items.find(n=>n.value===t);i.getInstance().logEvent("BUDGET",{eventSource:this.sourceName,eventName:"SELECT",eventValue:n.label})}"opsfilter"===n&&(this.isHAG?sessionStorage.setItem("opsfilter_Ops","1"):sessionStorage.setItem("opsfilter_Ops",t))}onToggleFilterChange(n,l){n.checked!==l&&(n.checked=l,this.filterChange.emit({name:n.name,value:l?n.value2:n.value}))}onAddItem(n){this.addItem.emit(n)}}},bPSY:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));class e{constructor(n){this.filterData=n,this.subs=[]}set sub(n){this.subs.push(n)}ngOnInit(){this.setupStreams()}ngOnDestroy(){this.subs.forEach(n=>n.unsubscribe())}onFilterChange(n){this.filterData.updateFilter(n)}setupStreams(){this.sub=this.filterData.filtersDef$.subscribe(n=>this.filters=n),this.sub=this.filterData.value$.subscribe(n=>this.snapshot=n)}}},gQiY:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));class e{}},mIlg:function(n,l,t){"use strict";var e=t("8Y7J"),i=t("E5Rw"),a=t("H/aV"),o=t("JjoW"),r=t("s7LF"),u=t("MlvX"),c=t("Xd0L"),d=t("dJrM"),s=t("HsOI"),p=t("IP0z"),f=t("/HVE"),m=t("omvX"),g=t("Azqq"),h=t("hOhj"),v=t("5GAg"),b=t("SVse"),x=t("mN15"),C=t("fgD+"),_=t("ZCrk"),I=t("+2T5"),w=t("2F3X"),O=t("8CZ8"),$=t("bQ1K");t("W0XV"),t.d(l,"a",(function(){return y})),t.d(l,"b",(function(){return A}));var y=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .mat-form-field-infix{width:150px}.mat-form-field[_ngcontent-%COMP%], app-datepicker-month[_ngcontent-%COMP%], app-datepicker-range[_ngcontent-%COMP%]{margin-right:20px}.mat-form-field-with-button[_ngcontent-%COMP%]{position:relative;padding-right:30px}.mat-form-field-with-button[_ngcontent-%COMP%]   .add-item-btn[_ngcontent-%COMP%]{position:absolute;right:15px;top:50%;transform:translate(200%,-50%)}.add-item-btn[_ngcontent-%COMP%]{display:inline-block;height:18px;width:18px;border-radius:50%;border:2px solid #3498db;background-color:#3498db;cursor:pointer;position:relative}.add-item-btn[_ngcontent-%COMP%]:before{content:'\\002B';color:#fff;font-family:\"Material Icons\";font-size:18px;font-weight:600;position:absolute;top:20%;left:50%;transform:translate(-50%,-50%)}.tab[_ngcontent-%COMP%]{display:inline-block;height:34px;line-height:34px;border-radius:17px;padding-left:10px;padding-right:10px;margin-right:12px;color:#404040;font-size:14px;font-weight:500;background-color:#e5e5e5;cursor:pointer}.tab.active[_ngcontent-%COMP%]{color:#3498db;background-color:#e2eff8}.tab[_ngcontent-%COMP%]:not(:last-of-type){margin-right:10px}"]],data:{}});function k(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,5,"mat-select-search",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],(function(n,l,t){var e=!0;return"ngModelChange"===l&&(e=!1!==(n.component.filterText[n.parent.parent.context.$implicit.name]=t)&&e),e}),i.b,i.a)),e["\u0275did"](1,4440064,null,0,a.a,[o.c,e.ChangeDetectorRef],null,null),e["\u0275prd"](1024,null,r.q,(function(n){return[n]}),[a.a]),e["\u0275did"](3,671744,null,0,r.v,[[8,null],[8,null],[8,null],[6,r.q]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,r.r,null,[r.v]),e["\u0275did"](5,16384,null,0,r.s,[[4,r.r]],null,null)],(function(n,l){var t=l.component;n(l,1,0),n(l,3,0,t.filterText[l.parent.parent.context.$implicit.name])}),(function(n,l){n(l,0,0,e["\u0275nov"](l,5).ngClassUntouched,e["\u0275nov"](l,5).ngClassTouched,e["\u0275nov"](l,5).ngClassPristine,e["\u0275nov"](l,5).ngClassDirty,e["\u0275nov"](l,5).ngClassValid,e["\u0275nov"](l,5).ngClassInvalid,e["\u0275nov"](l,5).ngClassPending)}))}function S(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e["\u0275nov"](n,1)._selectViaInteraction()&&i),"keydown"===l&&(i=!1!==e["\u0275nov"](n,1)._handleKeydown(t)&&i),i}),u.b,u.a)),e["\u0275did"](1,8568832,[[10,4]],0,c.p,[e.ElementRef,e.ChangeDetectorRef,[2,c.j],[2,c.o]],{value:[0,"value"]},null),(n()(),e["\u0275ted"](2,0,[" "," "]))],(function(n,l){n(l,1,0,l.context.$implicit.value)}),(function(n,l){n(l,0,0,e["\u0275nov"](l,1)._getTabIndex(),e["\u0275nov"](l,1).selected,e["\u0275nov"](l,1).multiple,e["\u0275nov"](l,1).active,e["\u0275nov"](l,1).id,e["\u0275nov"](l,1)._getAriaSelected(),e["\u0275nov"](l,1).disabled.toString(),e["\u0275nov"](l,1).disabled),n(l,2,0,l.context.$implicit.label)}))}function M(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,0,"button",[["class","add-item-btn"],["type","button"]],null,[[null,"click"]],(function(n,l,t){var e=!0,i=n.component;return"click"===l&&(t.stopPropagation(),e=!1!==i.onAddItem(n.parent.parent.context.$implicit)&&e),e}),null,null))],null,null)}function P(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,26,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-with-button",null],[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,d.b,d.a)),e["\u0275did"](1,7520256,null,9,s.c,[e.ElementRef,e.ChangeDetectorRef,[2,c.h],[2,p.b],[2,s.a],f.a,e.NgZone,[2,m.a]],null,null),e["\u0275qud"](603979776,1,{_controlNonStatic:0}),e["\u0275qud"](335544320,2,{_controlStatic:0}),e["\u0275qud"](603979776,3,{_labelChildNonStatic:0}),e["\u0275qud"](335544320,4,{_labelChildStatic:0}),e["\u0275qud"](603979776,5,{_placeholderChild:0}),e["\u0275qud"](603979776,6,{_errorChildren:1}),e["\u0275qud"](603979776,7,{_hintChildren:1}),e["\u0275qud"](603979776,8,{_prefixChildren:1}),e["\u0275qud"](603979776,9,{_suffixChildren:1}),(n()(),e["\u0275eld"](11,0,null,1,13,"mat-select",[["class","mat-select"],["role","listbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"ngModelChange"],[null,"keydown"],[null,"focus"],[null,"blur"]],(function(n,l,t){var i=!0,a=n.component;return"keydown"===l&&(i=!1!==e["\u0275nov"](n,16)._handleKeydown(t)&&i),"focus"===l&&(i=!1!==e["\u0275nov"](n,16)._onFocus()&&i),"blur"===l&&(i=!1!==e["\u0275nov"](n,16)._onBlur()&&i),"ngModelChange"===l&&(i=!1!==a.onFilterChange(n.parent.context.$implicit.name,n.parent.context.$implicit,t)&&i),i}),g.b,g.a)),e["\u0275prd"](6144,null,c.j,null,[o.c]),e["\u0275did"](13,671744,null,0,r.v,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,r.r,null,[r.v]),e["\u0275did"](15,16384,null,0,r.s,[[4,r.r]],null,null),e["\u0275did"](16,2080768,null,3,o.c,[h.i,e.ChangeDetectorRef,e.NgZone,c.b,e.ElementRef,[2,p.b],[2,r.u],[2,r.k],[2,s.c],[6,r.r],[8,null],o.a,v.j],{placeholder:[0,"placeholder"]},null),e["\u0275qud"](603979776,10,{options:1}),e["\u0275qud"](603979776,11,{optionGroups:1}),e["\u0275qud"](603979776,12,{customTrigger:0}),e["\u0275prd"](2048,[[1,4],[2,4]],s.d,null,[o.c]),(n()(),e["\u0275and"](16777216,null,1,1,null,k)),e["\u0275did"](22,16384,null,0,b.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,1,1,null,S)),e["\u0275did"](24,278528,null,0,b.l,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275and"](16777216,null,1,1,null,M)),e["\u0275did"](26,16384,null,0,b.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,13,0,t.snapshotVal[l.parent.context.$implicit.name]),n(l,16,0,l.parent.context.$implicit.label),n(l,22,0,l.parent.context.$implicit.allowSearch),n(l,24,0,t.filterItems(l.parent.context.$implicit.items,l.parent.context.$implicit.name)),n(l,26,0,l.parent.context.$implicit.canAddItem)}),(function(n,l){n(l,0,1,[l.parent.context.$implicit.canAddItem,"standard"==e["\u0275nov"](l,1).appearance,"fill"==e["\u0275nov"](l,1).appearance,"outline"==e["\u0275nov"](l,1).appearance,"legacy"==e["\u0275nov"](l,1).appearance,e["\u0275nov"](l,1)._control.errorState,e["\u0275nov"](l,1)._canLabelFloat,e["\u0275nov"](l,1)._shouldLabelFloat(),e["\u0275nov"](l,1)._hasFloatingLabel(),e["\u0275nov"](l,1)._hideControlPlaceholder(),e["\u0275nov"](l,1)._control.disabled,e["\u0275nov"](l,1)._control.autofilled,e["\u0275nov"](l,1)._control.focused,"accent"==e["\u0275nov"](l,1).color,"warn"==e["\u0275nov"](l,1).color,e["\u0275nov"](l,1)._shouldForward("untouched"),e["\u0275nov"](l,1)._shouldForward("touched"),e["\u0275nov"](l,1)._shouldForward("pristine"),e["\u0275nov"](l,1)._shouldForward("dirty"),e["\u0275nov"](l,1)._shouldForward("valid"),e["\u0275nov"](l,1)._shouldForward("invalid"),e["\u0275nov"](l,1)._shouldForward("pending"),!e["\u0275nov"](l,1)._animationsEnabled]),n(l,11,1,[e["\u0275nov"](l,15).ngClassUntouched,e["\u0275nov"](l,15).ngClassTouched,e["\u0275nov"](l,15).ngClassPristine,e["\u0275nov"](l,15).ngClassDirty,e["\u0275nov"](l,15).ngClassValid,e["\u0275nov"](l,15).ngClassInvalid,e["\u0275nov"](l,15).ngClassPending,e["\u0275nov"](l,16).id,e["\u0275nov"](l,16).tabIndex,e["\u0275nov"](l,16)._getAriaLabel(),e["\u0275nov"](l,16)._getAriaLabelledby(),e["\u0275nov"](l,16).required.toString(),e["\u0275nov"](l,16).disabled.toString(),e["\u0275nov"](l,16).errorState,e["\u0275nov"](l,16).panelOpen?e["\u0275nov"](l,16)._optionIds:null,e["\u0275nov"](l,16).multiple,e["\u0275nov"](l,16)._ariaDescribedby||null,e["\u0275nov"](l,16)._getAriaActiveDescendant(),e["\u0275nov"](l,16).disabled,e["\u0275nov"](l,16).errorState,e["\u0275nov"](l,16).required,e["\u0275nov"](l,16).empty])}))}function F(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,3,"app-datepicker-month",[],null,[[null,"dateChange"]],(function(n,l,t){var e=!0;return"dateChange"===l&&(e=!1!==n.component.onFilterChange(n.parent.context.$implicit.name,n.parent.context.$implicit,t)&&e),e}),x.b,x.a)),e["\u0275prd"](512,null,c.a,C.a,[c.f]),e["\u0275did"](2,245760,null,0,_.a,[c.a,I.a],{placeholder:[0,"placeholder"],value:[1,"value"],min:[2,"min"],max:[3,"max"]},{dateChange:"dateChange"}),e["\u0275prd"](256,null,c.e,_.b,[])],(function(n,l){n(l,2,0,l.parent.context.$implicit.label,l.component.snapshotVal[l.parent.context.$implicit.name],l.parent.context.$implicit.min,l.parent.context.$implicit.max)}),null)}function V(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,3,"app-datepicker-range",[],null,[[null,"dateChange"]],(function(n,l,t){var e=!0;return"dateChange"===l&&(e=!1!==n.component.onFilterChange(n.parent.context.$implicit.name,n.parent.context.$implicit,t)&&e),e}),w.b,w.a)),e["\u0275prd"](4608,null,O.a,C.a,[O.e]),e["\u0275did"](2,114688,null,0,$.a,[],{placeholder:[0,"placeholder"],value:[1,"value"],min:[2,"min"],max:[3,"max"]},{dateChange:"dateChange"}),e["\u0275prd"](256,null,O.d,$.b,[])],(function(n,l){n(l,2,0,l.parent.context.$implicit.label,l.component.snapshotVal[l.parent.context.$implicit.name],l.parent.context.$implicit.min,l.parent.context.$implicit.max)}),null)}function R(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"span",[["class","tab"]],[[2,"active",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onToggleFilterChange(n.parent.context.$implicit,!1)&&e),e}),null,null)),(n()(),e["\u0275ted"](2,null,["",""])),(n()(),e["\u0275eld"](3,0,null,null,1,"span",[["class","tab"]],[[2,"active",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onToggleFilterChange(n.parent.context.$implicit,!0)&&e),e}),null,null)),(n()(),e["\u0275ted"](4,null,["",""]))],null,(function(n,l){n(l,1,0,!l.parent.context.$implicit.checked),n(l,2,0,l.parent.context.$implicit.label),n(l,3,0,l.parent.context.$implicit.checked),n(l,4,0,l.parent.context.$implicit.label2)}))}function T(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,8,null,null,null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](2,16384,null,0,b.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,F)),e["\u0275did"](4,16384,null,0,b.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,V)),e["\u0275did"](6,16384,null,0,b.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](8,16384,null,0,b.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](0,null,null,0))],(function(n,l){n(l,2,0,"list"===l.context.$implicit.type&&!l.context.$implicit.hidden&&l.context.$implicit.items.length),n(l,4,0,"date-month"===l.context.$implicit.type&&!l.context.$implicit.hidden),n(l,6,0,"date-range"===l.context.$implicit.type&&!l.context.$implicit.hidden),n(l,8,0,"toggle"===l.context.$implicit.type&&!l.context.$implicit.hidden)}),null)}function q(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,T)),e["\u0275did"](2,278528,null,0,b.l,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275and"](0,null,null,0))],(function(n,l){n(l,2,0,l.component.filters)}),null)}function A(n){return e["\u0275vid"](2,[(n()(),e["\u0275and"](16777216,null,null,1,null,q)),e["\u0275did"](1,16384,null,0,b.m,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,1,0,t.snapshotVal&&t.filters)}),null)}},o2MB:function(n,l,t){"use strict";var e=t("8Y7J"),i=t("mIlg"),a=t("W0XV"),o=t("+2T5");t("bPSY"),t("nNBh"),t.d(l,"a",(function(){return r})),t.d(l,"b",(function(){return u}));var r=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function u(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-filters-group",[],null,[[null,"filterChange"]],(function(n,l,t){var e=!0;return"filterChange"===l&&(e=!1!==n.component.onFilterChange(t)&&e),e}),i.b,i.a)),e["\u0275did"](1,638976,null,0,a.a,[o.a],{filters:[0,"filters"],snapshot:[1,"snapshot"]},{filterChange:"filterChange"})],(function(n,l){var t=l.component;n(l,1,0,t.filters,t.snapshot)}),null)}}}]);