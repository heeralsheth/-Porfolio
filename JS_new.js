const textElement = document.getElementById("typewriter");

const phrases = [
    "Java Developer",
    "Data Analyst",
    "Healthcare Professional",
    "Cloud Engineer"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        textElement.textContent =
            currentPhrase.substring(0, charIndex--);
    } else {
        textElement.textContent =
            currentPhrase.substring(0, charIndex++);
    }

    let speed = isDeleting ? 70 : 120;

    if (!isDeleting && charIndex === currentPhrase.length + 1) {
        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
ScrollReveal().reveal('.toolkit-card', {
    distance: '40px',
    duration: 1200,
    interval: 150,
    origin: 'bottom'
});

ScrollReveal().reveal('.section-title', {
    delay: 200,
    duration: 1000
});
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* =========================
   THEME TOGGLE
========================= */

const themeToggle =
    document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon =
        themeToggle.querySelector("i");

    if (
        document.body.classList.contains("light-mode")
    ) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
                .includes(current)
        ) {
            link.classList.add("active");
        }
    });
});