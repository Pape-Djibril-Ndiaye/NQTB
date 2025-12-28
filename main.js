document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom = form.querySelector('[name="nom"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!nom || !email || !message) {
      alert("⚠️ Veuillez remplir tous les champs.");
      return;
    }

    const subject = encodeURIComponent(`Message de ${nom}`);
    const body = encodeURIComponent(`Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`);

    window.location.href = `mailto:papedjibrilndiaye07@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  });
});

