window.addEventListener('scroll', function() {
  var scrollHeight = window.scrollY || window.pageYOffset;
  var $topnav = $('.top-nav');

  if (scrollHeight > 0) {
    $topnav.addClass('fixed');
  } else {
    $topnav.removeClass('fixed');
  }
});