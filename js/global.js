/**
 * Created by QXT on 2017/6/15.
 */
var w = $(window).width();
var wh = $(window).height();
$(function () {
   function top() {
      if ($('body').outerHeight() < wh) {
         $('body').css({paddingBottom: $('footer').outerHeight(), height: wh});
         $('section').css({minHeight: wh - $('footer').outerHeight() - $('header').outerHeight() - $('nav').outerHeight()});
         if (w > 993) {
            $('footer').css({
               position: 'absolute',
               left: 0,
               bottom: 0
            });
         }
      }
      setTimeout(top, 0);
   }

   top();

   // 内页导航
   $('.info-top .a1').each(function (index) {
      if (w >= 1000) {
         $(this).css({left: -(index + 1) * 9 + "px"});
      }
   });

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
      if ($(this).attr('href') == 'javascript:') {
         msg();
      }
   });

//  手机二级导航
   $('.s2-ico').click(function () {
      $(this).next('.ls').slideToggle('fast');
   });

});

//tab切换
function tab(cli, sec) {
   /*function se() {
      $(sec).each(function () {
         $(this).hide();
         if ($(this).hasClass('active')) {
            $(this).show();
         }
      });
      setTimeout(se);

   }

   se();*/

   $(cli).each(function (index) {
      $(this).click(function () {
         $(sec).removeClass('active');
         $(cli).removeClass('active');
         $(this).addClass('active');
         $($(sec)[index]).addClass('active');
      });
   });
}

//左对齐
function mar(ma, num) {
   $(ma).parent().each(function () {
      $(this).children(ma).each(function (index) {
         if (index % num == 0) {
            $(this).css('margin-left', '0px');
         }
      });
   });
}

function msg() {
   layer.msg('功能正在开发中');
}