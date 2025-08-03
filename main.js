console.log('Hello World!');
   document.getElementById("contact-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const nom = document.getElementById("nom").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const mailto = `mailto: papedjibrilndiaye@07gmail.com ?subject=Message de ${nom}&body=Nom: ${nom}%0AEmail: ${email}%0AMessage: ${message}`;
      window.location.href = mailto;
    });
