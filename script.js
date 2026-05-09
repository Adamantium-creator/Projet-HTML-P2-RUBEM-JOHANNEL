document.addEventListener('DOMContentLoaded', () => {
  // --- CAROUSEL ---
  const slides = document.querySelectorAll('.carousel-slide');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  let currentSlide = 0;

  if (slides.length > 0 && nextBtn && prevBtn) {
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  }

  // --- FILTERS FOR TEACHERS PAGE ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const profCards = document.querySelectorAll('.prof-card');

  if (filterButtons.length > 0 && profCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        profCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
            card.style.opacity = '1';
          } else {
            card.style.display = 'none';
            card.style.opacity = '0';
          }
        });
      });
    });
  }

  // --- CONTACT FORM ---
  const contactForm = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (contactForm && feedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();

      if (email.endsWith('@efrei.net')) {
        feedback.textContent = 'Success! Message sent.';
        feedback.style.color = 'green';
        contactForm.reset();
      } else {
        feedback.textContent = 'Error: Use your @efrei.net address.';
        feedback.style.color = 'red';
      }
    });
  }
});