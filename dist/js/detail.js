/**
 * @fileOverview 详情页js
 * @author WangWeiyi
 *
 * [Change Log]
 * 2016-09-23 WangWeiyi created
 */
define(function(require, exports, module) {
  //主导航栏交互
  require("./common/nav");

  //快速导航定位
  var $win = $(window);
  var $quickNav = $('#quickNav'); //快速导航
  var $content = $('#container .content'); //页面内容主体
  (function reposition() {
  	var space = ($win.width() - $content.outerWidth()) / 2;
  	$quickNav.css({
  		right: space > 0 ? space : 0
  	});
  })();
});