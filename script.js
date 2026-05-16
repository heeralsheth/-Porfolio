const words = [
    "Data-driven developer.", 
    "Spring Boot specialist.", 
    "Data Analyst."
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    // 1. Target the span element exactly
    const targetElement = document.getElementById("typewriter");
    if (!targetElement) return; // Prevents errors if element isn't found

    const currentWord = words[wordIndex];
    
    // 2. Determine whether to add or remove characters
    if (isDeleting) {
        targetElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        targetElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // 3. Set typing speed variables
    let typeSpeed = isDeleting ? 50 : 100;

    // 4. Logic switch points
    if (!isDeleting && charIndex === currentWord.length) {
        // Word is fully typed: pause at the end, then start deleting
        typeSpeed = 2000; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Word is fully deleted: move to the next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Loops back to the start
        typeSpeed = 500; 
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start the effect once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", typeEffect);
