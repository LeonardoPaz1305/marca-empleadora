var MyApp={bannerEvo:function(){$(".banner-hero .modal").modal(),$(".banner-hero .modal .btn--primary").on("click",function(){$self=$(this).parent().parent(),$(".formulario .input--field-check input").prop("checked",!0),$self.modal("close")});var p,u,f,_,m,h,v=".slider .slider__item:not(.slick-cloned) ",e=$(v+"input[name=gqcw_doc]"),t=$(v+"#gqcw_doc_error"),i=$(v+"input[name=gqcw_movil]"),n=$(v+"#gqcw_movil_error"),s=$(v+"select[name=gqcw_hour]");i.on("input",function(){this.value=this.value.replace(/[^0-9]/g,"")}),i.on("focus",function(){$(this).removeClass("alert--danger"),n.addClass("hide")}),n.on("click",function(){i.removeClass("alert--danger"),$(this).addClass("hide")}),i.on("keypress",function(e){var t=this.value.length;if(key=e.keyCode||e.which,0==t){var i,t=String.fromCharCode(key),n=[8,9,37,39,46,6],s=!1;for(i in n)if(key==n[i]){s=!0;break}if(-1=="9".indexOf(t)&&!s)return!1}return 47<key&&key<58}),e.on("input",function(){this.value=this.value.replace(/[^0-9]/g,"")}),e.on("focus",function(){$(this).removeClass("alert--danger"),t.addClass("hide")}),t.on("click",function(){e.removeClass("alert--danger"),$(this).addClass("hide")}),s.on("focus",function(){$(this).removeClass("alert--danger")}),$(v+".formulario").submit(function(e){e.preventDefault();var t,i,n,s,o=$(v+"input[name=gqcw_doc]"),a=$(v+"#gqcw_doc_error"),r=$(v+"input[name=gqcw_movil]"),l=$(v+"#gqcw_movil_error"),d=$(v+"#gqcw_cont"),c=$(v+"select[name=gqcw_hour]"),e=!1;0===o.val().length||8!==o.val().length&&11!==o.val().length||!jQuery.isNumeric(o.val())?(e=!0,o.addClass("alert--danger"),a.removeClass("hide")):(o.removeClass("alert--danger"),a.addClass("hide")),0!==r.val().length&&9===r.val().length&&jQuery.isNumeric(r.val())?(r.removeClass("alert--danger"),l.addClass("hide")):(e=!0,r.addClass("alert--danger"),l.removeClass("hide")),d.hasClass("container__formulario--full")&&null===c.val()?(e=!0,c.addClass("alert--danger")):c.removeClass("alert--danger"),e||(t=$(v+".progress-inner"),i=$(v+".progress-button"),t.removeClass("notransition"),i.addClass("state-loading"),n=0,s=setInterval(function(){n=Math.min(n+.1*Math.random(),1),t.css({width:100*n+"%",opacity:1}),$(v+".input--field-control").attr("disabled",!0),$(v+".input--field-check input").attr("disabled",!0),$(v+".input--field-check span a").css("pointer-events","none"),1===n&&(i.removeClass("state-loading"),i.addClass("state-success"),t.addClass("notransition"),t.css({width:0,opacity:1}),clearInterval(s),$(v+".input--field-control").val(""),setTimeout(function(){return!h&&(h=!0,p=$(v+".formulario"),(u=$(v+".container__message")).show(),p.animate({opacity:0},{step:function(e,t){m=1-.2*(1-e),f=50*e+"%",_=1-e,p.css({transform:"scale("+m+")",position:"absolute"}),u.css({left:f,opacity:_})},duration:800,complete:function(){p.hide(),h=!1},easing:"easeInOutBack"}),$(v+".input--field-control").removeAttr("disabled"),$(v+".input--field-check input").removeAttr("disabled"),$(v+".input--field-check span a").removeAttr("style"),void i.removeClass("state-success"))},1e3),$(v+"#returnForm").on("click",function(){return!h&&(h=!0,p=$(v+".container__message"),previous_fs=$(v+".formulario"),previous_fs.show(),void p.animate({opacity:0},{step:function(e,t){m=.8+.2*(1-e),f=50*(1-e)+"%",_=1-e,p.css({left:f}),previous_fs.css({transform:"scale("+m+")",opacity:_})},duration:800,complete:function(){p.hide(),h=!1},easing:"easeInOutBack"}))}))},200))})},bannerEvo2:function(){1<$(".nat-bannerEvo .slider__item").length&&(new Swiper(".nat-bannerEvo .swiper-container",{loop:!0,loopFillGroupWithBlank:!0,autoplay:{delay:5e3,disableOnInteraction:!0},keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0}}),$(".nat-bannerEvo .swiper-container").on("mouseover",function(){this.swiper.autoplay.stop()}),$(".nat-bannerEvo .swiper-container").on("mouseout",function(){this.swiper.autoplay.start()})),$(".nat-bannerEvo .slider__anchor .anchor").click(function(e){e.preventDefault();e=$(this).attr("href");$("html,body").animate({scrollTop:$(e).offset().top},500)})},carruselPlanes:function(){$(".plan__footer .btn-flat").bind("click",function(){$(".plan__item").toggleClass("item--open"),$(".benefit__list--compress").slideToggle(),$(".benefit__list--complete").slideToggle()}),$(".plans .plans__list").slick({slidesToShow:4,slidesToScroll:1,dots:!1,arrows:!0,responsive:[{breakpoint:1350,settings:{slidesToShow:3,slidesToScroll:1,dots:!1}},{breakpoint:1199,settings:{slidesToShow:3,slidesToScroll:1,dots:!0,arrows:!1}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1,dots:!0,arrows:!1}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]})},contactanos:function(){function e(){var e="22:00".split(":"),t="06:00".split(":"),i=parseInt(e[0]),n=parseInt(e[1]),s=parseInt(t[0]),o=parseInt(t[1]);0<i+n&&0<s+o&&(e=!0,(t=new Date).getHours()<=i&&t.getHours()>=s&&(t.getHours()!=i&&t.getHours()!=s||t.getHours()==i&&t.getMinutes()<n||t.getHours()==s&&t.getMinutes()>=o)&&(e=!1),e?($("#hour").parent().parent().removeClass("disabled"),d()):((e=$("#hour")).prop("selectedIndex",0),e.material_select(),d(),$("#hour").parent().parent().addClass("disabled")))}$(".contact__modal select").material_select(),e(),setInterval(e,500),$(".field__select input[type=text]").blur(function(){$(".icon-drop_down").removeClass("active")}),$(".field__select input[type=text]").on("click",function(){$(this).hasClass("active")?$(".icon-drop_down").addClass("active"):$(".icon-drop_down").removeClass("active")}),$(".field__select .dropdown-content li").on("click",function(){$(".icon-drop_down").removeClass("active")}),$("#termsCondition").on("click",function(){$(".field__checkbox").prop("checked",!0)}),$("#hour").on("change",function(e){var t=$(".dropdown-content li.active").text();$(".description--hour").text(t)}),$("#formContact").modal({dismissible:!1,ending_top:"10%"}),$("#movil").modal({dismissible:!1,ending_top:"10%"}),$("#message").modal({dismissible:!1,complete:function(e,t){$("#message >.container").addClass("hide")}}),$("#protectClause").modal({dismissible:!1,ready:function(e,t){new Swiper("#protectClause .swiper-container",{direction:"vertical",slidesPerView:"auto",freeMode:!0,scrollbar:{el:".swiper-scrollbar",dragSize:"35px",draggable:!0,snapOnRelease:!1},mousewheel:!0})}});var t=$(".contact__modal  #document");$(".contact__modal  #phone").on("keypress",function(e){var t=this.value.length;if(key=e.keyCode||e.which,0==t){var i,t=String.fromCharCode(key),n=[8,9,37,39,46,6],s=!1;for(i in n)if(key==n[i]){s=!0;break}if(-1=="9".indexOf(t)&&!s)return!1}return 47<key&&key<58}),t.on("input",function(){this.value=this.value.replace(/[^0-9]/g,"")}),$(".contact__item").on("click",function(){var e=$(this).find(".container .description").text(),t=e.toLowerCase().split(" ").join("-").normalize("NFD").replace(/[\u0300-\u036f]/g,"");$(".contact__modal .modal__title strong").text(e),$("#formContact").attr("data-modal",t)}),$("#movil .modal__btn").on("click",function(){var e=$(this).text().toLowerCase().split(" ").join("-").normalize("NFD").replace(/[\u0300-\u036f]/g,"");$("#formContact").attr("data-modal",e)}),$(".field__btn").attr("disabled",!0);var o=0,a=0,r=0,l=0;function d(e,t){1===e&&(o=t),2===e&&(a=t),3===e&&(r=t),4===e&&(l=t),$("#treatment").hasClass("required")?$(".field__group").hasClass("disabled")?3===parseInt(o)+parseInt(a)+parseInt(l)?$(".field__btn").attr("disabled",!1):$(".field__btn").attr("disabled",!0):4===parseInt(o)+parseInt(a)+parseInt(r)+parseInt(l)?$(".field__btn").attr("disabled",!1):$(".field__btn").attr("disabled",!0):$(".field__group").hasClass("disabled")?2===parseInt(o)+parseInt(a)?$(".field__btn").attr("disabled",!1):$(".field__btn").attr("disabled",!0):3===parseInt(o)+parseInt(a)+parseInt(r)?$(".field__btn").attr("disabled",!1):$(".field__btn").attr("disabled",!0)}$(".contact__modal form").on("submit",function(e){e.preventDefault(),$(".field__btn").attr("disabled",!0),l=r=a=o=0;var t=$(".progress-inner"),i=$(".progress-button");t.removeClass("notransition"),i.addClass("state-loading");var n=0,s=setInterval(function(){n=Math.min(n+.1*Math.random(),1),t.css({width:100*n+"%",opacity:1}),$(".field__input").attr("disabled",!0),$(".field__checkbox").attr("disabled",!0),$(".select-dropdown").attr("disabled",!0),$(".modal-action.modal-close").attr("disabled",!0),$(".modal__footer .link").attr("disabled",!0),1===n&&(i.removeClass("state-loading"),i.addClass("state-success"),t.addClass("notransition"),t.css({width:0,opacity:1}),clearInterval(s),$("#document").val(""),$("#phone").val(""),$("#hour").prop("selectedIndex",0).material_select(),$("#treatment").prop("checked",!1),$(".field__input").removeAttr("disabled"),$(".field__checkbox").removeAttr("disabled"),$(".select-dropdown").removeAttr("disabled"),$(".modal-action.modal-close").removeAttr("disabled"),$(".modal__footer .link").removeAttr("disabled"),setTimeout(function(){i.removeClass("state-success"),$("#formContact").modal("close"),$("#message").modal("open"),($(".field__group").hasClass("disabled")?$(".message--2"):$(".message--3")).removeClass("hide")},1e3))},200)}),$("#document").on("keyup",function(){var e=1;$(this).parent().removeClass("field__invalid"),$(this).val().length<8&&(e=0,$(this).parent().addClass("field__invalid")),setTimeout(function(){d(1,e)},5)}),$("#phone").bind("keyup",function(){var e=1;$(this).parent().removeClass("field__invalid"),$(this).val().length<9&&(e=0,$(this).parent().addClass("field__invalid")),setTimeout(function(){d(2,e)},5)}),$("#hour").on("change",function(e){var e=e.target.value,t=1;$(this).parent().removeClass("field__invalid"),0==e&&(t=0,$(this).parent().addClass("field__invalid")),setTimeout(function(){d(3,t)},5)}),$("#treatment, #termsCondition").on("click",function(){var e=1;0==$(this).prop("checked")&&(e=0),setTimeout(function(){d(4,e)},5)}),d()},servicio:function(){$(".service__list").each(function(){var e=$(this),t=e.find(".service__item");4<e.children().length&&e.addClass("service__slick"),t.each(function(e){3<e&&$(this).addClass("itemToggle")})});var e=$(".service__slick").slick({autoplay:!1,dots:!0,arrows:!0,infinite:!1,speed:300,slidesToShow:3,slidesToScroll:3,focusOnSelect:!1,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]});$(window).on("resize",function(){$(".service__list").hasClass("unslick__mobile")&&$(window).outerWidth()<=600?(e.slick("unslick"),$(".unslick__mobile").parentsUntil("section").find(".service__footer").fadeIn()):(e.slick("refresh"),$(".unslick__mobile").parentsUntil("section").find(".service__footer").fadeOut())}),$(window).resize(),$(".service__btn").bind("click",function(){var e=$(this).parent().parent().parent().find(".itemToggle");$(e).slideToggle(),$(this).toggleClass("displayOn")}),$("a.service--anchor").click(function(){var e=$(this).attr("href");window.location.hash=e,$("html, body").animate({scrollTop:$("section[data-anchor="+e+"]").offset().top},500)})},equipos:function(){new Swiper(".equipment--carousel .swiper-container",{effect:"coverflow",slidesPerView:3,spaceBetween:-90,centeredSlides:!0,loop:!0,coverflowEffect:{rotate:-80,stretch:-80,depth:160,modifier:1,slideShadows:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{992:{spaceBetween:5,coverflowEffect:{rotate:-30,stretch:5}}}}),new Swiper(".equipment--block .swiper-container",{centeredSlides:!0,slidesPerView:1,spaceBetween:5,pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})},video:function(){function e(){var e=$(".display__item").outerHeight();$(".thumbs__list").css("max-height",e)}$("video").bind("webkitfullscreenchange mozfullscreenchange fullscreenchange",function(e){document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen?$(".thumbs__list").fadeOut():$(".thumbs__list").fadeIn()}),$(document).on("click","video",function(){this.paused&&($(this).parent().find(".item__poster").fadeOut(),$(this).parent().find(".item__icon").fadeOut())}),$(".display__list").on("init",function(e,t){t.$slides.each(function(t){var s,o,a,r=$(this),l=r.find(".item__video"),e=l.find("source"),i=e.data("src");e.attr("src",i),e.parent().on("loadeddata",function(){var e;a=l.get(0).duration,s=Math.floor(a/3600),o=Math.floor(a%3600/60),a=Math.round(a%60),o=o<10?"0"+o:o,a=a<10?"0"+a:a,e=0===s&&0==o?o+":"+a+" seg":0===s&&0<o?o+":"+a+" min":s+":"+o+" min",r.find(".item__poster .poster__information .time__video").text(e),r.data("duration",e);var i=t,n=r.data("duration");$(".natVideo__gallery .thumbs__item:not(.slick-cloned)").each(function(e){var t=$(this);i==e&&t.find(".caption__information .time").text(n)})})})}).slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,fade:!0,infinite:!0,asNavFor:".thumbs__list",responsive:[{breakpoint:992,settings:{fade:!1,centerMode:!0,slidesToShow:1,variableWidth:!0,swipe:!0,touchMove:!0,swipeToSlide:!0,focusOnSelect:!0}}]}).on("beforeChange",function(e,t,i,n){$(t.$slides[i]).find(".item__video").get(0).pause()}),$(".thumbs__list").slick({arrows:!0,vertical:!0,verticalSwiping:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,asNavFor:".display__list",dots:!1,centerMode:!0,centerPadding:"0",focusOnSelect:!0}),$(".display__list .item__icon").on("click",function(){var e=$(this),t=e.parent();e.fadeOut(),t.find(".item__poster").fadeOut(),t.find(".item__video").get(0).play()}),$(window).on("load",function(){$(".item__video").attr("disablePictureInPicture","true").attr("controlsList","nodownload"),e(),$(".natVideo__gallery >.container").css({opacity:1},500)}),$(window).on("resize",function(){e()}),window.addEventListener("orientationchange",function(){90==screen.orientation.angle?$(".slider-nav").slick("refresh"):$(".slider-nav").slick("unslick")})},pasos:function(){$(".natSteps .steps__slider").slick({slidesToShow:1,slidesToScroll:1,mobileFirst:!0,arrows:!1,dots:!0,infinite:!1,responsive:[{breakpoint:992,settings:"unslick"}]}),$(window).on("resize",function(){$(".natSteps .steps__slider").slick("resize")})},buttonAction:function(){$(".btn__borderless").bind("click",function(){var e=$(this).parentsUntil("section").find(".itemToggle");$(e).slideToggle(),$(this).toggleClass("displayOn")})},carouselCard:function(){$(".natCard__blur .btn__borderless").on("click",function(){$(this).parent().parent().toggleClass("active")}),$(".carouselCard__list").slick({slidesToShow:4,slidesToScroll:1,arrows:!0,dots:!1,infinite:!0,centerPadding:"0",responsive:[{breakpoint:1280,settings:{slidesToShow:3,centerMode:!0}},{breakpoint:992,settings:{slidesToShow:1,centerMode:!0,variableWidth:!0}}]}).on("beforeChange",function(e,t,i,n){$(t.$slides[i]).find(".natCard").removeClass("active")})},TabRefresh:function(){$(".natTabs .tabs").tabs({onShow:function(){$(this).parentsUntil("section").find(".slick-slider").slick("refresh")}})},paso_a_paso:function(){$(".natStepbyStep__list").slick({centerPadding:"0",slidesToShow:3,slidesToScroll:1,infinite:!1,arrows:!0,dots:!0,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1,centerMode:!0,variableWidth:!0}}]})},banner_destacado:function(){$(".natFeatBanner__list").slick({arrows:!1,dots:!0,infinite:!0,speed:300,slidesToShow:1})},impulso_app:function(){var e=navigator.userAgent||navigator.vendor||window.opera;/android/i.test(e)&&(console.log("Android"),$(".btn__app--ios").parent().remove()),/iPad|iPhone|iPod/.test(e)&&!window.MSStream&&(console.log("Ios"),$(".btn__app--android").parent().remove())}};$(function(){MyApp.bannerEvo(),MyApp.bannerEvo2(),MyApp.contactanos(),MyApp.servicio(),MyApp.equipos(),MyApp.video(),MyApp.pasos(),MyApp.buttonAction(),MyApp.carouselCard(),MyApp.TabRefresh(),MyApp.paso_a_paso(),MyApp.banner_destacado(),MyApp.impulso_app()});
//# sourceMappingURL=main.js.map
