/**
 * @fileOverview 首页js
 * @author WangWeiyi
 *
 * [Change Log]
 * 2016-09-23 WangWeiyi created
 */
define(function(require, exports, module) {
  var $ = require('jquery');
  var $win = $(window); //导航栏
  var $siteHeader = $('site-header'); //页面主体头部
  var $aboutBtn = $('#aboutBtn'); //siteHeader区域中的'关于我'按钮
  var $backBtn = $('#backBtn'); //关于我模块中的'返回'按钮

  //导航栏交互
  require("./units/nav");

  //最近更新交互
  require("./units/list-item");

  //siteHeader交互
  $aboutBtn.click(function() {
    $siteHeader.addClass('view-about');
  });
  $backBtn.click(function() {
    $siteHeader.removeClass('view-about');
  });
  function resizesiteHeader() {
    //siteHeader距离屏幕底部100px, 但高度最小500, 最大780px
    var hdHeight = $(window).height() - 100;
    hdHeight = hdHeight < 500 ? 500 : (hdHeight > 780 ? 780 : hdHeight);
    $siteHeader.height(hdHeight);
  }
  resizesiteHeader(); //页面加载后自动校正一次尺寸
  $win.resize(resizesiteHeader);
});