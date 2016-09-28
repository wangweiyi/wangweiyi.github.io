define(function(require, exports, module) {
  var $ = require('jquery');
  var $win = $(window);
  var $body = $('body');
  var $container = $('#container'); //页面主内容区容器
  var $navSwitch = $('#navSwitch'); //导航栏开关按钮
  var $mainNav = $('#mainNav'); //导航栏
  var ceilMaxWidth = $body.data('ceiling-max-width') || 0; //页面的宽度小于此值时启用吸顶效果
  var ceilScroll = $body.data('ceiling-scroll') || 0; //页面滚动的高度大于此值时启用吸顶效果, 若值为一个元素选择器，则使用此元素的高度
  var $ceilRef = $($body.data('ceiling-ref')); //页面滚动高度参考元素，当滚动值大于此元素高度时启用吸顶效果
  var constant = require("./constant");

  $navSwitch.click(function() {
    $body.toggleClass('view-nav'); //开启/关闭导航栏
  });

  //点击页面空白处关闭导航
  $(document).click(function(e) {
  	var $source = $(e.target);
  	if ( !$source.is($navSwitch) && !$source.is($mainNav) && !$source.parents('#mainNav').length ) { 
  		$body.removeClass('view-nav');
  	}
  });

  //导航栏吸顶效果
  $win.scroll(function() {
    //当指定了最大宽度时，只有页面宽度小于此宽度时才启用吸顶效果
    if (ceilMaxWidth && $win.width() > ceilMaxWidth) {
      return;
    }

    var cs = $ceilRef.outerHeight() || ceilScroll;
    if ( $win.scrollTop() > cs ) {
      $body.addClass('nav-ceiling');
    } else {
      $body.removeClass('nav-ceiling');
    }
  });
});