'use strict';
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/* Botón menu */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);

/* Encabezado activo cuando se desplaza hacia abajo a 100px */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);

const moonIcon = document.getElementById('moon-icon');
const translateIcon = document.getElementById('translate-icon');

if (moonIcon) {
  moonIcon.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('dark');
    // Alternar la visibilidad del icono basado en la clase dark
    if (document.body.classList.contains('dark')) {
      moonIcon.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    } else {
      moonIcon.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
    }
  });
}

if (translateIcon) {
  translateIcon.addEventListener('click', (e) => {
    e.preventDefault();
    let message = 'Esta funcionalidad no se encuentra disponible!';
    Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 3000
    });
  });
}

/* Inicializar EmailJS */
emailjs.init({
  publicKey: "JLS0VfguCi_huv84U",
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío por defecto del formulario

  var email_address = document.getElementById('email_address').value;

  // Envía el correo al usuario
  emailjs.send('service_qkws0fb', 'template_pmyil6a', { email_address: email_address })
      .then(function(response) {
          console.log('User Email Sent:', response);
      }, function(error) {
          console.log('Error:', error);
      });

  // Envía el correo al propietario
  emailjs.send('service_qkws0fb', 'template_lgb1o5h', { email_address: email_address, message: 'A new subscriber has joined your list.' })
      .then(function(response) {
          console.log('Owner Email Sent:', response);
      }, function(error) {
          console.log('Error:', error);
      });

  // Limpieza del input
  document.getElementById('email_address').value = '';

  // Muestra una confirmación al usuario
  alert('Thank you for subscribing! You will receive a confirmation email shortly.');
});