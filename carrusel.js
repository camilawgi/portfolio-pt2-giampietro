let current = 2;
const slides = document.querySelectorAll('.slide');

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
  });
  if (slides[current]) {
    slides[current].classList.add('active');
  }
}

function moveSlide(direction) {
  current += direction;
  if (current < 0) current = slides.length - 1;
  if (current >= slides.length) current = 0;
  updateSlides();
}

updateSlides();
