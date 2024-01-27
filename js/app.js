const sectionHeadingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      animateChars(entry.target);
      sectionHeadingObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0 }); 

const sectionHeadings = document.querySelectorAll('.section-heading');
sectionHeadings.forEach((sectionHeading) => sectionHeadingObserver.observe(sectionHeading));

function animateChars(target) {
  const chars = target.querySelectorAll('.char');
  gsap.to(chars, {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 0.1,
  });
}



// side menu
// var sidemenu = document.getElementById("sidemenu");

// function openmenu() {
//   sidemenu.style.right = "0";
// }

// function closemenu() {
//   sidemenu.style.right = "-200px";
// }


// container.addEventListener('mousemove', (e) => {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;

//   circle.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
// });

// container.addEventListener('mouseenter', () => {
//   circle.style.opacity = '1';
// });

// container.addEventListener('mouseleave', () => {
//   circle.style.opacity = '0';
// });
 