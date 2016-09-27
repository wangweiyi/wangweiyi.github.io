/**
 * @fileOverview 首页js
 * @author WangWeiyi
 *
 * [Change Log]
 * 2016-09-23 WangWeiyi created
 */
define(function(require, exports, module) {
  //导航栏交互
  require('common/nav');
  //最近更新交互
  require('./common/mod-list');

  //siteHeader交互
  var $ = require('jquery');
  var $win = $(window);
  var $siteHeader = $('#siteHeader'); //页面主体头部
  var $aboutBtn = $('#aboutBtn'); //siteHeader区域中的'关于我'按钮
  var $backBtn = $('#backBtn'); //关于我模块中的'返回'按钮
  $aboutBtn.click(function() {
    $siteHeader.addClass('view-about');
  });
  $backBtn.click(function() {
    $siteHeader.removeClass('view-about');
  });
  function resize() {
    //siteHeader距离屏幕底部100px, 但高度最小500, 最大780px
    var hdHeight = $(window).height() - 100;
    hdHeight = hdHeight < 500 ? 500 : (hdHeight > 780 ? 780 : hdHeight);
    $siteHeader.height(hdHeight);
  }
  resize(); //页面加载后自动校正一次尺寸
  $win.resize(resize);
});                                                                                                                                   