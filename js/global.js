/**
 * Created by QXT on 2017/6/15.
 */
var w = $(window).width();
$(function () {
   //手机导航
   if (w < 768) {
      var sum = 0;
      $('nav li').each(function () {
         sum += $(this).outerWidth();
      });
      $('nav ul').css({width: (sum + 2) + "px"});
   }

//   手机搜索
   $('.a-xy').click(function () {
      $('.sj-list').slideToggle('fast');
   });
   $('.sj-list li').click(function () {
      var txt = $(this).text();
      $('.a-xy').find('span.s1').text(txt);
      $(this).parent().slideUp('fast');
   });

   $('a').click(function () {
      msg();
   });
});

//tab切换
function tab(cli, sec) {
   function se() {
      $(sec).each(function () {
         $(this).hide();
         if ($(this).hasClass('active')) {
            $(this).show();
         }
      });
      setTimeout(se);
   }

   se();

   $(cli).each(function (index) {
      $(this).click(function () {
         $(sec).removeClass('active');
         $(cli).removeClass('active');
         $(this).addClass('active');
         $($(sec)[index]).addClass('active');
      });
   });
}

function msg() {
   layer.msg('功能正在开发中');
}