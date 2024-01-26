const sectionHeadingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
  });
});

const sectionHeadings = document.querySelectorAll('.section-heading');
sectionHeadings.forEach((sectionHeading) => {
  sectionHeadingObserver.observe(sectionHeading);
});

// const aboutHobbiesTextsObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//           entry.target.classList.add('show-about-hobbies-text');
//       }
//   });
// });

// const skillsObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         }
//     });
// });

// const aboutHobbiesSvg = document.querySelectorAll("#about-text path");
// aboutHobbiesSvg.forEach((element) => aboutHobbiesTextsObserver.observe(element));

// const hiddenHardSkillsElements = document.querySelectorAll('.hard-skills-list-hidden');
// hiddenHardSkillsElements.forEach((element) => skillsObserver.observe(element));

const aboutText = document.querySelectorAll('#about-text path');
const hobbiesText = document.querySelectorAll('#hobbies-text path');


// side menu
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

//contact form
const scriptURL = "https://script.google.com/macros/s/AKfycbyOeuPn9ul10ylJzCEGsm0A8YDYsi_qse82_banpcXOvNBaG7Pu6rhJ09MT4UbyklGN/exec";
const form = document.getElementById('contact-form');
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("message!")
      msg.textContent = "Message sent successfully!";
      setTimeout(function () {
        msg.textContent = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});


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
 