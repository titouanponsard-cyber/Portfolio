document.addEventListener('DOMContentLoaded', function () {
  const revealItems = document.querySelectorAll('.section, .project-card, .timeline-item, .competence-card, .stats-card, .overview-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
    });

    revealItems.forEach((item) => observer.observe(item));
  }

  const forms = document.querySelectorAll('.contact-form');
  forms.forEach((form) => {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Merci pour votre message. Le formulaire reste visuel uniquement.');
    });
  });
});
