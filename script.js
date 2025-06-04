// script.js

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Spriječi reload stranice

  const ime = document.getElementById('ime').value.trim();
  const email = document.getElementById('email').value.trim();
  const lozinka = document.getElementById('lozinka').value.trim();
  const poruka = document.getElementById('poruka');

  if (ime && email && lozinka) {
    // Simulacija uspješne prijave
    poruka.textContent = "Prijava uspješna! Preusmjeravam...";
    poruka.style.color = "white";

    setTimeout(() => {
      window.location.href = "o_meni.html"; // Preusmjeri na glavnu stranicu
    }, 1500);
  } else {
    poruka.textContent = "Molimo ispunite sva polja.";
    poruka.style.color = "red";
  }
});
