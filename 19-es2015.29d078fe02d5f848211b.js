(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{dMWl:function(t,n,e){"use strict";e.r(n),e.d(n,"CaribeanRegionModule",function(){return f});var o=e("ofXK"),i=e("wSAv"),s=e("tyNb"),r=e("fXoL"),a=e("jxQ0"),c=e("cKcw");const g=["stories"];function p(t,n){if(1&t&&(r.Pb(0,"div",2),r.Lb(1,"hr",41),r.Pb(2,"div",42),r.Pb(3,"div",43),r.Lb(4,"div",44),r.Ob(),r.Ob(),r.Pb(5,"div",45),r.Lb(6,"p",44),r.Ob(),r.Pb(7,"div",46),r.Lb(8,"p",44),r.Ob(),r.Ob()),2&t){const t=n.$implicit;r.zb(4),r.fc("innerHTML",null==t?null:t.summary,r.nc),r.zb(2),r.fc("innerHTML",null==t?null:t.description,r.nc),r.zb(2),r.fc("innerHTML",null==t?null:t.contact,r.nc)}}const l=[{path:"",component:(()=>{class t{constructor(t,n,e){this.document=t,this.cdr=n,this.service=e,this.regionId=3}ngOnInit(){this.swiperConfig(),this.regionIniciatives$=this.service.getRegionIniciatives(this.regionId)}ngAfterViewInit(){this.service.getRegionStories(this.regionId).subscribe(t=>{t.map(t=>{const n=this.document.createElement("div");n.className="swiper-slide",n.innerHTML=null==t?void 0:t.content,this.swiperStories.swiper.appendSlide(n)}),t.length&&this.swiperStories.swiper.removeSlide(0),this.cdr.markForCheck()})}swiperConfig(){this.config={pagination:{el:".swiper-pagination",clickable:!0},autoHeight:!0,allowTouchMove:!0,slidesPerView:"auto",spaceBetween:0,freeMode:!0,autoplay:{delay:6e3,disableOnInteraction:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0}}}return t.\u0275fac=function(n){return new(n||t)(r.Kb(o.e),r.Kb(r.h),r.Kb(a.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["ng-component"]],viewQuery:function(t,n){if(1&t&&r.Bc(g,!0),2&t){let t;r.jc(t=r.Xb())&&(n.swiperStories=t.first)}},decls:100,vars:6,consts:[[1,"intro-department","big-pic"],[1,"container"],[1,"row"],[1,"col-lg-5","text-center"],[1,"img-department"],["src","assets/imgs/regions/caribe.png","alt",""],[1,"col-lg-7"],["routerLink","/virtual-map",1,"btn-gastro"],[1,"title-section"],[1,"divider-paper-white"],[1,"imgs-department"],[1,"swiper-container","imgsdepartment"],[3,"config"],[1,"swiper-wrapper"],[1,"swiper-slide"],["src","assets/imgs/caribe/caribe1.png","alt",""],["src","assets/imgs/caribe/caribe2.png","alt",""],["src","assets/imgs/caribe/caribe3.png","alt",""],["src","assets/imgs/caribe/caribe4.png","alt",""],["src","assets/imgs/caribe/caribe5.png","alt",""],["src","assets/imgs/caribe/caribe6.png","alt",""],["src","assets/imgs/caribe/caribe7.png","alt",""],["src","assets/imgs/caribe/caribe8.png","alt",""],["src","assets/imgs/caribe/caribe9.png","alt",""],["src","assets/imgs/caribe/caribe10.png","alt",""],[1,"swiper-pagination"],[1,"swiper-button-prev","imgs"],[1,"swiper-button-next","imgs"],[1,"about-department"],[1,"col-lg-12"],[1,"title"],[1,"col-lg-6"],[1,"slider-stories"],[1,"swiper-container","storiesdepartment"],["stories",""],[1,"swiper-button-prev","region"],[1,"swiper-button-next","region"],[1,"travel-iniciative"],["class","row",4,"ngFor","ngForOf"],[1,"recepies-department","bg"],[3,"regionId"],[2,"width","100%"],[1,"col-lg-3"],[1,"title-iniciative"],[3,"innerHTML"],[1,"col-lg-5"],[1,"col-lg-4"]],template:function(t,n){1&t&&(r.Pb(0,"section",0),r.Pb(1,"div",1),r.Pb(2,"div",2),r.Pb(3,"div",3),r.Pb(4,"div",4),r.Lb(5,"img",5),r.Ob(),r.Ob(),r.Pb(6,"div",6),r.Pb(7,"a",7),r.wc(8,"Volver"),r.Ob(),r.Pb(9,"div",8),r.Pb(10,"h2"),r.wc(11," Bienvenido a la magia de la "),r.Pb(12,"span"),r.wc(13,"Regi\xf3n Caribe"),r.Ob(),r.Ob(),r.Pb(14,"p"),r.wc(15," Las cocinas tradicionales de la Costa Caribe son producto de la ubicaci\xf3n geogr\xe1fica de esta regi\xf3n y de sus climas y ecosistemas diversos. As\xed como su historia en d\xf3nde se destaca una influencia, \xe1rabe, espa\xf1ola e ind\xedgena que perdura en la actualidad. "),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Lb(16,"div",9),r.Pb(17,"section",10),r.Pb(18,"div",11),r.Pb(19,"swiper",12),r.Pb(20,"div",13),r.Pb(21,"div",14),r.Lb(22,"img",15),r.Ob(),r.Pb(23,"div",14),r.Lb(24,"img",16),r.Ob(),r.Pb(25,"div",14),r.Lb(26,"img",17),r.Ob(),r.Pb(27,"div",14),r.Lb(28,"img",18),r.Ob(),r.Pb(29,"div",14),r.Lb(30,"img",19),r.Ob(),r.Pb(31,"div",14),r.Lb(32,"img",20),r.Ob(),r.Pb(33,"div",14),r.Lb(34,"img",21),r.Ob(),r.Pb(35,"div",14),r.Lb(36,"img",22),r.Ob(),r.Pb(37,"div",14),r.Lb(38,"img",23),r.Ob(),r.Pb(39,"div",14),r.Lb(40,"img",24),r.Ob(),r.Ob(),r.Lb(41,"div",25),r.Lb(42,"div",26),r.Lb(43,"div",27),r.Ob(),r.Ob(),r.Ob(),r.Pb(44,"section",28),r.Pb(45,"div",1),r.Pb(46,"div",2),r.Pb(47,"div",29),r.Pb(48,"h3",30),r.wc(49,"Acerca de"),r.Ob(),r.Ob(),r.Ob(),r.Pb(50,"div",2),r.Pb(51,"div",31),r.Pb(52,"p"),r.wc(53," El Caribe es uno de los puertos m\xe1s importantes en Colombia para la entrada de diversas culturas culinarias provenientes del exterior, por lo tanto en la historia de su poblaci\xf3n es recurrente encontrar sabores \xe1rabes, mestizos, espa\xf1oles, ind\xedgenas y afro descendientes, Las adaptaciones al medio natural de sabana, manglar, monta\xf1a, nevado y mar han hecho de la Regi\xf3n Caribe un lugar que se desataca en su patrimonio culinario por la cocina de mar, los fritos, los sabores dulces de las frutas, las bebidas refrescantes y adicional los elementos que surgen de sus sistemas culinarios alrededor de la vida social de sus portadores: los espacios de las cocinas tanto interiores como exteriores, los utensilios, las t\xe9cnicas de "),r.Ob(),r.Ob(),r.Pb(54,"div",31),r.Pb(55,"p"),r.wc(56," cocci\xf3n aprendidas desde la intimidad de la familia, los sistemas de producci\xf3n agr\xedcola en sus diferentes ecosistemas, todos ellos se han mantenido al margen de las din\xe1micas de la regi\xf3n."),r.Lb(57,"br"),r.Lb(58,"br"),r.wc(59,"Algunos de los platos de la Regi\xf3n Caribe son: el sancocho de pescado, el sancocho de guand\xfa, el mondongo, el guarapo, el mote de queso, los jugos de bebidas de mango y jengibre, las butifarras, arroz con coco, arepa de huevo, el arroz de lisa, los amasijos (bollos) a base de yuca y las carima\xf1olas. Las bebidas como el jugo de corozo, de guayaba agr\xeda y de n\xedspero. "),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Lb(60,"div",9),r.Pb(61,"section",32),r.Pb(62,"div",1),r.Pb(63,"div",2),r.Pb(64,"div",29),r.Pb(65,"div",8),r.Pb(66,"h2"),r.wc(67," La regi\xf3n y"),r.Pb(68,"span"),r.wc(69,"sus historias"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(70,"div",33),r.Pb(71,"swiper",12,34),r.Pb(73,"div",13),r.Lb(74,"div",14),r.Ob(),r.Lb(75,"div",25),r.Lb(76,"div",35),r.Lb(77,"div",36),r.Ob(),r.Ob(),r.Ob(),r.Pb(78,"section",37),r.Pb(79,"div",1),r.Pb(80,"div",2),r.Pb(81,"div",29),r.Pb(82,"div",8),r.Pb(83,"h2"),r.wc(84," Iniciativas de turismo cultural"),r.Pb(85,"span"),r.wc(86,"en cocinas tradicionales"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.vc(87,p,9,3,"div",38),r.bc(88,"async"),r.Ob(),r.Ob(),r.Pb(89,"section",39),r.Pb(90,"div",1),r.Pb(91,"div",2),r.Pb(92,"div",29),r.Pb(93,"div",8),r.Pb(94,"h2"),r.wc(95," Recetas de"),r.Pb(96,"span"),r.wc(97,"la regi\xf3n"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(98,"div",2),r.Lb(99,"app-catalog",40),r.Ob(),r.Ob(),r.Ob()),2&t&&(r.zb(19),r.fc("config",n.config),r.zb(52),r.fc("config",n.config),r.zb(16),r.fc("ngForOf",r.cc(88,4,n.regionIniciatives$)),r.zb(12),r.fc("regionId",n.regionId))},directives:[s.e,i.b,o.s,c.a],pipes:[o.b],styles:['@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");.card[_ngcontent-%COMP%]{margin-bottom:24px;border:none!important;position:relative}.btn-card[_ngcontent-%COMP%]{margin:40px auto;font-weight:900;font-size:16px;padding:15px 30px}.hover-card[_ngcontent-%COMP%]{background-color:#07e8ff;opacity:0;position:absolute;width:100%;height:100%;transition:all .2s ease-in-out}.bg[_ngcontent-%COMP%]{background:url(/assets/imgs/bg-landing.jpg) top no-repeat;background-size:cover;padding:0;height:100%}.btn-gastro[_ngcontent-%COMP%]{font-family:Ubuntu,sans-serif;font-weight:bolder;font-size:16px;background-color:#ffc107;border-radius:100px;color:#000!important;padding:10px 30px!important;display:table}.btn-gastro[_ngcontent-%COMP%]:hover{text-decoration:none}.card[_ngcontent-%COMP%]:hover   .hover-card[_ngcontent-%COMP%]{opacity:.3}section.services[_ngcontent-%COMP%]{margin-top:40px}section.stories[_ngcontent-%COMP%]{padding:120px 0 200px}section.stories[_ngcontent-%COMP%]   .title-stories[_ngcontent-%COMP%]{width:261.65px;height:94.49px;margin:auto;background:url(/assets/imgs/title-nuevashistorias.png) 50% no-repeat;background-size:contain;text-indent:-9999px;display:block}section.stories[_ngcontent-%COMP%]   .stories-content[_ngcontent-%COMP%]{margin-bottom:40px}footer[_ngcontent-%COMP%]{padding:120px 0;background-color:rgba(0,0,0,.4);color:#fff}footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px;color:#fff}footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#ffc107}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:20px;max-width:300px;font-size:11px;letter-spacing:2px;margin:auto;font-weight:300;line-height:25px;opacity:.4}footer[_ngcontent-%COMP%]   .logo-footer[_ngcontent-%COMP%]{padding:10px 0 40px}.travel-iniciative[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{max-height:400px;overflow:auto}.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{color:#fff!important}.divider-paper-white[_ngcontent-%COMP%]{width:100%;position:relative;height:80px;background:url(/assets/imgs/divider-paper.png) no-repeat 50%;background-size:100% 100%;margin-top:-45px;margin-bottom:-35px;z-index:2}section.intro-department[_ngcontent-%COMP%]{padding:120px 30px;background-color:#fff;color:#393d5e}section.intro-department.big-pic[_ngcontent-%COMP%]   .img-department[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;position:relative;top:-40px}section.intro-department[_ngcontent-%COMP%]   .btn-gastro[_ngcontent-%COMP%]{margin:30px auto 20px;background-color:#5959d2;color:#fff!important}section.intro-department[_ngcontent-%COMP%]   .btn-gastro[_ngcontent-%COMP%]:before{font-family:Font Awesome\\ 5 Free;font-weight:900;content:"\uf053";padding-right:10px}#us-map[_ngcontent-%COMP%]{display:block;position:relative;top:0;left:0;width:600px;height:auto}path[_ngcontent-%COMP%]{fill:#fff!important}circle[_ngcontent-%COMP%]:hover, path[_ngcontent-%COMP%], path[_ngcontent-%COMP%]:hover{stroke:#393d5e!important;stroke-width:2px;stroke-linejoin:round}circle[_ngcontent-%COMP%]:hover, path[_ngcontent-%COMP%]:hover{fill:#ffdf00!important;cursor:pointer}#path67[_ngcontent-%COMP%]{fill:none!important;stroke:#a9a9a9!important;cursor:default}#info-box[_ngcontent-%COMP%]{display:block;position:absolute;top:0;left:0;z-index:1;background-color:#403470;color:#fff;border:none;border-radius:5px;padding:5px 20px;font-family:Ubuntu,sans-serif;font-size:18px;font-weight:bolder}#info-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before{font-family:Font Awesome\\ 5 Free;font-weight:900;content:"\uf3c5";padding-right:10px}.title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:auto auto 15px;max-width:400px;font-family:Ubuntu,sans-serif;font-weight:700;font-size:42.4586px}.title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-style:normal;line-height:107%;text-align:center}.title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Caveat Brush,sans-serif;font-weight:400;font-size:65px;letter-spacing:-.015em;transform:rotate(-2deg);position:relative;top:-10px}.title-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;margin:auto;max-width:350px;font-family:Ubuntu,sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:31px;text-align:center}section.intro-department[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:100%}section.intro-department[_ngcontent-%COMP%]   .img-department[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70%;height:auto;position:relative;top:-40px}section.imgs-department[_ngcontent-%COMP%]{padding:0}section.imgs-department[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]{width:100%;height:100%}section.imgs-department[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{text-align:center;font-size:18px;width:auto;display:flex;justify-content:center;align-items:center}section.about-department[_ngcontent-%COMP%]{padding:120px 30px;background-color:#d95357;color:#fff}section.about-department[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Ubuntu;font-style:normal;font-weight:700;font-size:42.4586px;line-height:107%;margin-bottom:20px;color:#fff}section.about-department[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Ubuntu,sans-serif;font-style:normal;font-weight:700;font-size:16px;line-height:31px;text-align:justify;color:#fff}section.slider-stories[_ngcontent-%COMP%]{padding:120px 30px;background-color:#5959d2}section.slider-stories[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]{color:#fff;margin-bottom:30px}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]{max-width:800px;height:600px;margin:auto;position:relative}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-pic[_ngcontent-%COMP%]{position:absolute;width:304.22px;height:454.94px;left:30px;top:0;z-index:1}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]{position:absolute;z-index:3;color:#fff;bottom:180px;left:-20px}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]   .region-text[_ngcontent-%COMP%]{position:absolute;bottom:-38px;right:-120px;z-index:6;background:#ffdf00;border-radius:3.70881px;transform:rotate(-2.21deg);padding:15px;font-family:Ubuntu,sans-serif;font-style:normal;font-weight:800;font-size:26.7034px;line-height:18px;text-align:center;letter-spacing:-.04em;color:#2c2f47}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Ubuntu,sans-serif;font-style:normal;font-weight:700;font-size:54.7533px;line-height:72%;text-align:center;letter-spacing:-.04em;color:#fff;text-shadow:0 4.40405px 52.8486px #000}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .sp1[_ngcontent-%COMP%]{position:relative;left:-25px}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .sp2[_ngcontent-%COMP%]{position:relative;top:-5px;font-family:Ubuntu,sans-serif;font-style:normal;font-weight:400;font-size:30.7987px;line-height:57%;text-align:center;letter-spacing:-.04em}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .sp3[_ngcontent-%COMP%]{position:relative;left:45px}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-bg[_ngcontent-%COMP%]{position:absolute;width:375.28px;height:268.91px;left:0;top:111.27px;background:url(/assets/imgs/stories-components/bg-author.png)}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .video-bg[_ngcontent-%COMP%]{position:absolute;width:647.25px;height:383.23px;left:200.06px;top:11.11px;background:url(/assets/imgs/stories-components/video-bg.png)}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   iframe.video-story[_ngcontent-%COMP%]{position:absolute;z-index:2;width:420px;height:252px;left:280.06px;top:123px}section.recepies-department[_ngcontent-%COMP%]{padding:20px 30px;height:auto}section.recepies-department[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]{color:#fff;margin-bottom:10px}section.travel-iniciative[_ngcontent-%COMP%]{background-color:#fff;padding:100px 20px}section.travel-iniciative[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:100%;max-width:100%;text-align:left;font-size:28px;line-height:55px}section.travel-iniciative[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Ubuntu,sans-serif;transform:none;text-align:left;font-size:28px;font-weight:bolder}.title-iniciative[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:before{font-family:Font Awesome\\ 5 Free;font-weight:900;padding-right:10px}.title-iniciative[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{opacity:.5}.title-iniciative[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:before{font-family:Font Awesome\\ 5 Free;content:"\uf072";font-weight:900;padding-right:10px}@media (max-width:1000px){.section-map[_ngcontent-%COMP%]{padding:60px 0 120px}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]{max-width:800px;height:800px;margin:auto;position:relative}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-pic[_ngcontent-%COMP%]{position:absolute;width:304.22px;height:454.94px;left:0;top:0;z-index:1}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]{position:absolute;z-index:3;color:#fff;bottom:0;top:120px;right:-80px}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]   .region-text[_ngcontent-%COMP%]{position:absolute;display:table;top:120px;bottom:inherit;right:inherit;left:40%;z-index:6;background:#ffdf00;border-radius:3.70881px;transform:rotate(-2.21deg);padding:15px;font-family:Ubuntu,sans-serif;font-style:normal;font-weight:800;font-size:26.7034px;line-height:18px;text-align:center;letter-spacing:-.04em;color:#2c2f47}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Ubuntu,sans-serif;font-style:normal;font-weight:700;font-size:54.7533px;line-height:72%;text-align:center;letter-spacing:-.04em;color:#fff;text-shadow:0 4.40405px 52.8486px #000}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .sp1[_ngcontent-%COMP%]{position:relative;left:-25px}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .sp2[_ngcontent-%COMP%]{position:relative;top:-5px;font-family:Ubuntu,sans-serif;font-style:normal;font-weight:400;font-size:30.7987px;line-height:57%;text-align:center;letter-spacing:-.04em}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .sp3[_ngcontent-%COMP%]{position:relative;left:45px}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .author-bg[_ngcontent-%COMP%]{position:absolute;width:375.28px;height:268.91px;left:0;top:111.27px;background:url(/assets/imgs/stories-components/bg-author.png)}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   .video-bg[_ngcontent-%COMP%]{position:absolute;width:647.25px;height:383.23px;left:0;top:21.11px;background:url(/assets/imgs/stories-components/video-bg.png)}section.slider-stories[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]   iframe.video-story[_ngcontent-%COMP%]{position:absolute;z-index:2;width:100%;height:252px;left:0;top:323px}}'],changeDetection:0}),t})()}];let d=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(n){return new(n||t)},imports:[[s.f.forChild(l)],s.f]}),t})();var b=e("8OG6");let f=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(n){return new(n||t)},providers:[],imports:[[o.c,d,i.a,b.a]]}),t})()}}]);