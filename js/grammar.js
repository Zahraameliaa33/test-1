const carousel = document.getElementById('carousel');
const dotsContainer = document.getElementById('carousel-dots');
const items = document.querySelectorAll('.carousel-item');

// create dots
items.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('span');

// update active dot on scroll
carousel.addEventListener('scroll', () => {
  const scrollLeft = carousel.scrollLeft;
  const itemWidth = items[0].offsetWidth + 16; // item width + gap
  const index = Math.round(scrollLeft / itemWidth);
  dots.forEach(d => d.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
});
