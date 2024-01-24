const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
  });
});

const aboutHobbiesTextsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show-about-hobbies-text');
      }
  });
});

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const blobObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show-blob');
        }
    });
});


const aboutCards = document.querySelectorAll('.about-card');
aboutCards.forEach((element) => aboutObserver.observe(element));

const aboutHobbiesSvg = document.querySelectorAll("#about-text path");
aboutHobbiesSvg.forEach((element) => aboutHobbiesTextsObserver.observe(element));

const hiddenHardSkillsElements = document.querySelectorAll('.hard-skills-list-hidden');
hiddenHardSkillsElements.forEach((element) => skillsObserver.observe(element));

const hiddenSoftSkillsElements = document.querySelectorAll('.soft-skills-list-hidden');
hiddenSoftSkillsElements.forEach((element) => skillsObserver.observe(element));

const hiddenBlobs = document.querySelectorAll('.my-skills-blob');
hiddenBlobs.forEach((element) => blobObserver.observe(element));

const aboutText = document.querySelectorAll('#about-text path')
const hobbiesText = document.querySelectorAll('#hobbies-text path')


VanillaTilt.init(document.querySelector(".data-tilt"), {
  scale: 1.05,
  max: 25,
  speed: 5000
});

VanillaTilt.init(document.querySelector(".education-lyceum"), {
  scale: 1.05,
  max: 10,
  speed: 1000
});

VanillaTilt.init(document.querySelector(".education-university"), {
  scale: 1.05,
  max: 10,
  speed: 1000
});

VanillaTilt.init(document.querySelector(".btn.btn2"), {
  scale: 1.15,
  max: 25,
  speed: 5000
});

VanillaTilt.init(document.querySelector(".to-top"), {
  scale: 1.15,
  max: 25,
  speed: 1000
});



// to top button
const toTopButton = document.querySelector(".to-top");

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    toTopButton.classList.add("active")
  }
  else {
    toTopButton.classList.remove("active")
  }
})



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
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
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
 