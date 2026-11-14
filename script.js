
// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(
      this.getAttribute('href')
    );

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Active navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') ===
          '#' + entry.target.id
        );
      });
    }
  });
}, {
  threshold: 0.4
});

sections.forEach(section => {
  observer.observe(section);
});

// Project image click effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('selected');
  });
});
