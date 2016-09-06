// 所有模块都通过 define 来定义
define(function(require, exports, module) {

  console.log('hello, cathy!');

  // 通过 require 引入依赖
  var $ = require('jquery');
  // var $showNav = $('#showNav');
  // var $hideNav = $('#hideNav');
  // var $showAbout = $('#showAbout');
  // var $hideAbout = $('#hideAbout');

  setTimeout(function() {

  	console.log($, jQuery) //, $showAbout, $hideAbout, $showNav, $hideNav
  }, 3000);

});