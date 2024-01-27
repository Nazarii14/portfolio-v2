const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const descriptionHeaders = document.querySelectorAll('.description-header');
descriptionHeaders.forEach((header) => observer.observe(header));

const paragraphs = document.querySelectorAll('.about-description p');
paragraphs.forEach((paragraph) => observer.observe(paragraph));





// side menu
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}


const container = document.querySelector('.education-list');
const circle = document.querySelector('.circle');

container.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  circle.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

container.addEventListener('mouseenter', () => {
  circle.style.opacity = '1';
});

container.addEventListener('mouseleave', () => {
  circle.style.opacity = '0';
});
 