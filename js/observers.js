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
