/**
 * @fileOverview 列表项尺寸调整
 * @author WangWeiyi
 *
 * [Change Log]
 * 2016-09-23 WangWeiyi created
 */
define(function(require, exports, module) {
  var constant = require("./constant");
  var $ = require('jquery');
  var $win = $(window);
  var $listItem = $('.list-item'); //列表项
  
  function resizeItem() {
    var winWidth = $win.width();
    if (winWidth <= constant.SCREEN_PAD_MAX) { //平板 或 手机
        var contentWidth = $listItem.parents('.content').outerWidth(); //内容区容器宽度
        var itemSize = contentWidth * .475; //两列模式
        var mgr = contentWidth * .05;
        var mgb = contentWidth * .05;

        if (winWidth <= constant.SCREEN_PHONE_MAX) { //手机上显示单列模式
          var itemSize = contentWidth;
          var mgr = 'auto';
        } 

        $listItem.width(itemSize).height(itemSize).css({
          marginRight: mgr,
          marginBottom: mgb
        });
    }
  }  
  resizeItem(); //页面加载后自动校正一次尺寸

  //监听window事件
  $win.resize(resizeItem);
});