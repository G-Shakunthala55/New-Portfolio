// Contact button alert
function contactAlert() {
    alert("Thank you for reaching out! I will contact you soon.");
}

// Scroll reveal for sections
const sections = document.querySelectorAll('section');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.8; // 80% from top

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom) {
            section.classList.add('show'); // Add 'show' class when section is in view
        } else {
            section.classList.remove('show'); // Optional: remove when scrolled out
        }
    });
}

// Initial call
revealOnScroll();

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);
