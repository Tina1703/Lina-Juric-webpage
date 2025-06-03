

  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const ime = document.getElementById("ime").value.trim();
    const email = document.getElementById("email").value.trim();
    const lozinka = document.getElementById("lozinka").value;
  
    const poruka = document.getElementById("poruka");
  
    if (ime === "Lina Jurić" && email === "linajuric@gmail.com" && lozinka === "123456") {
      poruka.style.color = "green";
      poruka.textContent = "Uspješna prijava! Dobrodošla, Lina 💖";

    
    setTimeout(function() {
        window.location.href = "o_meni.html";
      }, 2000);
    } else {
      poruka.style.color = "red";
      poruka.textContent = "Podaci nisu točni. Pokušaj ponovno.";
    }
  });
