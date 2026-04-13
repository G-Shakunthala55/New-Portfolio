// Contact button alert
function contactAlert() {
    alert("Thank you for reaching out! I will contact you soon.");
}

// Scroll reveal for sections
const sections = document.querySelectorAll("section");

// Reveal function
function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
    });
}

// Run on page load
window.addEventListener("load", revealOnScroll);

// Run on scroll
window.addEventListener("scroll", revealOnScroll);
