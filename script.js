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