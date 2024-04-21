const scriptURL = "https://script.google.com/macros/s/AKfycbyOeuPn9ul10ylJzCEGsm0A8YDYsi_qse82_banpcXOvNBaG7Pu6rhJ09MT4UbyklGN/exec";
const form = document.getElementById('contact-form');
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      alert("Message sent successfully!")
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
