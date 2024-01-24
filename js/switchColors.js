function switchColors(position) {
    var black = '#0e0e0c';
    var beige = 'var(--beige-color)';
    var textColor = '#d1d1c7';

    if (position == 0) {
      $('body').css('background-color', beige);

      $('#header').css('background-color', beige);
      $('.main-section').css('background-color', beige);
      $('nav ul li a').css('color', black);

      $('nav').css('background-color', beige);

      $('nav ul li.special-background').css('background-color', black);
      $('nav ul li.special-background').css('color', beige);
      $('nav h2').css('color', black);
    }
    else {
      $('body').css('background-color', black);

      $('nav h2').css('color', textColor);

      $('#header').css('background-color', black);
      $('.main-section').css('background-color', black);

      $('nav').css('background-color', black);

      $('nav ul li a').css('color', textColor);
      $('nav ul li.special-background').css('background-color', beige);
      $('nav ul li.special-background').css('color', black);
    }
}

$(document).ready(function () {
  $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      console.log(scroll);
      if (scroll > 2574) {
        switchColors(0);
      }
      if (scroll > 2500) {
          switchColors(1);
      } else if (scroll > 600) {
          switchColors(0);
      }
      else if (scroll > 550) {
        switchColors(1);
      }
      // else if (scroll > 330) {
      //     switchColors(1);
      // } else if (scroll > 300) {
      //     switchColors(0);
      // }
  });
});
