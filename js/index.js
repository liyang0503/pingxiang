/**
 * Created by QXT on 2017/5/17.
 * 作用域：首页
 */

$(function () {
//   手机首页轮播
   /*$('.banner').backstretch([
    "images/pxiang-banner.jpg",
    "images/pxiang-banner-1.png",
    "images/pxiang-banner-2.png"
    ], {
    fade: 900,
    duration: 4000
    });*/

//   PC首页轮播
   $(".le_se").slide({
      titCell: "",
      mainCell: ".bd ul",
      autoPage: true,
      effect: "left",
      autoPlay: true,
      scroll: 1,
      vis: 2,
      trigger: "click"
   });
   $('.ban-text').hover(function () {
      $(this).children('.text').css({bottom: 0, opacity: 1});
   }, function () {
      $(this).children('.text').css({bottom: "-100%", opacity: 0});
   });

//   tab切换调用
   tab('.rt-li', '.rt-ul');
   tab('.rt-li2', '.rt-ul2');
   tab('.list1-li', '.list1-sec');
   tab('.list2-li', '.list2-sec');

//   右侧切换部分的宽度（手机）
   if (w < 767) {
      $('.rt-new-top').each(function () {
         var rt_top = this;
         $(rt_top).find('div').css({width: $(rt_top).outerWidth() - $(rt_top).find('span').outerWidth() - 8});
      });
   }

   ff();
});

jQuery.fn.size = function () {
   return this.length;
};

//判断浏览器是否为火狐
function ff() {
   var explorer = navigator.userAgent;
   if (explorer.indexOf("Firefox") >= 0) {
      $('.foot-ul').perfectScrollbar();
   }
}