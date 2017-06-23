/**
 * Created by QXT on 2017/6/16.
 */
$(function () {
   $('.bm').each(function () {
      var st = -$(this).outerHeight() / 2;
      var sl = -$(this).outerWidth() / 2;
      $(this).css({marginTop: st + "px", marginLeft: sl + "px"});
   });

   tab('.rec-li', '.rec-sec');
});
