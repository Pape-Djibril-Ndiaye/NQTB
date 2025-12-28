console.log("QUANTUMBYTE prêt 🚀");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const button = form?.querySelector("button");

  if (!form || !button) return;

  // Message dynamique
  const feedback = document.createElement("p");
  feedback.style.marginTop = "15px";
  feedback.style.fontWeight = "500";
  form.appendChild(feedback);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom = form.querySelector('input[name="nom"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!nom || !email || !message) {
      feedback.textContent = "⚠️ Veuillez remplir tous les champs.";
      feedback.style.color = "#ff4d4d";
      return;
    }

    // Animation bouton
    button.disabled = true;
    const originalText = button.textContent;
    button.textContent = "Envoi en cours... ⏳";

    feedback.textContent = "📨 Préparation du message...";
    feedback.style.color = "#00c6ff";

    const subject = encodeURIComponent(`Message de ${nom}`);
    const body = encodeURIComponent(
      `Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`
    );

    const mailto = `mailto:papedjibrilndiaye07@gmail.com?subject=${subject}&body=${body}`;

    // Petite pause pour effet dynamique
    setTimeout(() => {
      window.location.href = mailto;

      feedback.textContent = "✅ Message prêt à être envoyé !";
      feedback.style.color = "#00ff99";

      form.reset();
      button.disabled = false;
      button.textContent = originalText;
    }, 800);
  });
});
