const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {threshold: 0.1});
  
const descriptionHeaders = document.querySelectorAll('.description-header');
descriptionHeaders.forEach((header) => observer.observe(header));

const paragraphs = document.querySelectorAll('.about-description p');
paragraphs.forEach((paragraph) => observer.observe(paragraph));

const skillsDescriptions = document.querySelectorAll('.skills-description');
skillsDescriptions.forEach((skill) => observer.observe(skill));

const contactFormHeader = document.querySelectorAll('.contact-form-header');
contactFormHeader.forEach((e) => observer.observe(e));

const headers = document.querySelectorAll('.section-heading');
headers.forEach((header) => observer.observe(header));