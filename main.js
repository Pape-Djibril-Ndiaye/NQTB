console.log("QUANTUMBYTE prêt 🚀");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom = form.querySelector('input[name="nom"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!nom || !email || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const subject = encodeURIComponent(`Message de ${nom}`);
    const body = encodeURIComponent(
      `Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`
    );

    const mailto = `mailto:papedjibrilndiaye07@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    form.reset();
  });
});

