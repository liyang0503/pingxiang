/**
 * Created by QXT on 2017/5/17.
 * 作用域：首页
 */

$(function () {
//   tab切换调用
   tab('.rt-li', '.rt-ul');
   tab('.rt-li2', '.rt-ul2');

//   右侧切换部分的宽度（手机）
   if (w < 767) {
      $('.rt-new-top').each(function () {
         var rt_top = this;
         $(rt_top).find('div').css({width: $(rt_top).outerWidth() - $(rt_top).find('span').outerWidth() - 8});
      });
   }
});
