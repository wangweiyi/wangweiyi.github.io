define(function(require, exports, module) {
  var constant = require("./constant");
  var $ = require('jquery');
  var $win = $(window);
  var $body = $('body'); 
  var $header = $('header'); 
  var $container = $('#container'); //页面主内容区容器
  var $navSwitch = $('#navSwitch'); //导航栏开关按钮  

  $navSwitch.click(function() {
    $body.toggleClass('view-nav'); //开启/关闭导航栏
  });
  //点击页面空白处关闭导航
  $(document).click(function(e) {
  	var $source = $(e.target);
  	if ( !$source.is($navSwitch) && !$source.parents('nav').length ) { 
  		$body.removeClass('view-nav');
  	}
  });

  //导航栏吸顶效果
  $win.scroll(function() {
    if ( $win.width() <= constant.SCREEN_PAD_MAX && $win.scrollTop() > $header.outerHeight() ) { 
      $container.addClass('nav-ceiling'); 
    } else {
      $container.removeClass('nav-ceiling');
    }
  });
});