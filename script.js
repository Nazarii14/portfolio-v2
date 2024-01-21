const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`,
    }, { duration: 300, fill: "forwards" });
});

function switchColors(position) {
    var black = '#0e0e0c';
    if (position == 0){
        $('body').css('background-color', 'white');
        $('#header').css('background-color', 'white');
        $('.main-section').css('background-color', 'white');
        $('nav ul li a').css('color', black);
        $('nav ul li.special-background').css('background-color', black);
        $('nav ul li.special-background').css('color', 'var(--text-color)');
        $('nav h2').css('color', black);
    }
    else {
        $('body').css('background-color', black);
        $('#header').css('background-color', black);
        $('.main-section').css('background-color', black);
        $('nav ul li a').css('color', 'var(--text-color)');
        $('nav ul li.special-background').css('background-color', 'white');
        $('nav ul li.special-background').css('color', 'white');
        $('nav h2').css('color', 'var(--text-color)');
    }
}


$(document).ready(function () {
    $(window).scroll(function () {
       var scroll = $(window).scrollTop();
 
       if (scroll > 330) {
        
        switchColors(0);
       } else {

        switchColors(1);          
       }
    });
 });
 


