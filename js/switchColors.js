function switchColors(position) {
    var black = '#0e0e0c';
    var beige = 'var(--beige-color)';
    var textColor = '#d1d1c7';

    if (position == 0) { // down
      $('body').css('background-color', beige);

      $('nav h2').css('color', black);

      $('#header').css('background-color', beige);
      $('.main-section').css('background-color', beige);
      $('nav').css('background-color', beige);

      $('nav ul li a:lt(3)').css('color', black);

      $('nav ul li a:last').parent().css('background-color', black);
      $('nav ul li a:last').css('color', textColor);
    }
    else { // up
      $('body').css('background-color', black);

      $('nav h2').css('color', textColor);

      $('#header').css('background-color', black);
      $('.main-section').css('background-color', black);
      $('nav').css('background-color', black);

      $('nav ul li a:lt(3)').css('color', textColor);

      $('nav ul li a:last').parent().css('background-color', textColor);
      $('nav ul li a:last').css('color', black);
    }
}

$(document).ready(function () {
  $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      console.log(scroll);
      
      if (scroll > 3774) {
        switchColors(0);
      }
      if (scroll > 3700) {
          switchColors(1);
      } else if (scroll > 400) {
          switchColors(0);
      }
      else if (scroll > 390) {
        switchColors(1);
      }
      // else if (scroll > 330) {
      //     switchColors(1);
      // } else if (scroll > 300) {
      //     switchColors(0);
      // }
  });
});
