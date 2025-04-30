window.sr = ScrollReveal({reset: true});

sr.reveal('.area-1', {
duration: 3000});

sr.reveal('.area-2', {
rotate:{x:0, y:100, z:0},
duration: 3000});

sr.reveal('.area-3', {duration: 3000});

// navbar.js
const menuToggle = document.getElementById('menu-toggle');
const menuMobile = document.getElementById('menu-mobile');

menuToggle.addEventListener('click', () => {
  menuMobile.classList.toggle('hidden');
});

// whatsapp.js
document.addEventListener('DOMContentLoaded', function() {
    const whatsappLink = document.getElementById('whatsapp-link');
    const phoneNumber = '5521975956657';
    const message = 'Olá! Seja bem-vindo(a) ao WhatsApp de Bruna Santiago. Como posso te ajudar hoje?';
    const encodedMessage = encodeURIComponent(message);
    
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    whatsappLink.setAttribute('href', url);
  });