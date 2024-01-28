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

      $('form input').css('background-color', beige);
      $('form textarea').css('background-color', beige);
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

      $('form input').css('background-color', black);
      $('form textarea').css('background-color', black);
    }
}

$(document).ready(function () {
  $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      console.log(scroll);
      
      if (scroll > 5950) {
        switchColors(0);
      }
      else if (scroll > 2850) {
          switchColors(1);
      } 
      else if (scroll > 360) {
          switchColors(0);
      }
      else if (scroll > 300) {
        switchColors(1);
      }
  });
});
