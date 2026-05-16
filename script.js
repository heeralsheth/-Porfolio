
const typewriterElement = document.querySelector('#typewriter');
const phrases = [
    "Java Developer.",
    "Data Analyst.",
    "Healthcare Professional.",
    "SQL Developer."


];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const currentPhrase = phrases[phraseIndex];
const words = ["Data-driven developer", "Spring Boot specialist", "Data Analyst"];
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 75;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at the end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

 // Example logic check
if (charIndex === currentWord.length) {
    // Pause at the end of the word, then start deleting
    setTimeout(() => isDeleting = true, 2000);
}

// Initialize the effect
document.addEventListener('DOMContentLoaded', type);
