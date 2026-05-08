// Exemple simple de logique pour le carrousel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
});


const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche l'envoi réel pour le test
        
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validation simple
        if(email.includes('@efrei.net')) {
            feedback.textContent = "Merci ! Votre message a été envoyé avec succès.";
            feedback.style.color = "green";
            contactForm.reset();
        } else {
            feedback.textContent = "Erreur : Utilisez votre adresse mail EFREI.";
            feedback.style.color = "red";
        }
    });
}



const filterButtons = document.querySelectorAll('.filter-btn');
const profCards = document.querySelectorAll('.prof-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Gérer l'état actif des boutons
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        profCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const profCards = document.querySelectorAll('.prof-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Gérer l'apparence des boutons (le bouton cliqué devient bleu)
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Récupérer le filtre choisi
            const selectedFilter = button.getAttribute('data-filter');

            // 3. Filtrer les cartes
            profCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (selectedFilter === 'all' || cardCategory === selectedFilter) {
                    // On affiche la carte
                    card.style.display = 'block';
                    // Petit effet d'apparition
                    card.style.opacity = '0';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    // On cache la carte
                    card.style.display = 'none';
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // --- LOGIQUE DU CARROUSEL ---
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentSlide = 0;

    if (slides.length > 0) {
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

        // Auto-play optionnel (toutes les 5 secondes)
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // --- LOGIQUE DES FILTRES (TEAM PAGE) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const profCards = document.querySelectorAll('.prof-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');

            profCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });

    // --- LOGIQUE FORMULAIRE (PERMANENCES) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const feedback = document.getElementById('formFeedback');
            if (email.endsWith('@efrei.net')) {
                feedback.textContent = "Success! Message sent.";
                feedback.style.color = "green";
            } else {
                feedback.textContent = "Error: Use your @efrei.net address.";
                feedback.style.color = "red";
            }
        });
    }
});