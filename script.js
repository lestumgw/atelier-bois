
 document.getElementById('annee').textContent=new Date().getFullYear();
const menuToggle = document.getElementById("menuToggle");
const menuMobile = document.getElementById("menuMobile");

menuToggle.addEventListener("click", function() {
  menuMobile.classList.toggle("ouvert");

  if (menuMobile.classList.contains("ouvert")) {
    menuToggle.textContent = "✕";
  } else {
    menuToggle.textContent = "☰";
  }
});
const formulaireContact = document.getElementById("contactForm");
formulaireContact.addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("confirmationContact").style.display = "block";
  formulaireContact.reset();
});
