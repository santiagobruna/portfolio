window.sr = ScrollReveal({reset: true});

sr.reveal('.area-1', {
    duration: 3000});

sr.reveal('.area-2', {
    rotate:{x:0, y:100, z:0},
    duration: 3000});


sr.reveal('.area-3', {duration: 3000});

const carouselItem = document.querySelectorAll('.carousel-item');

carouselItem.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('.ver-mais-btn').classList.add('mostrar');
  });

  item.addEventListener('mouseleave', () => {
    item.querySelector('.ver-mais-btn').classList.remove('mostrar');
  });
});