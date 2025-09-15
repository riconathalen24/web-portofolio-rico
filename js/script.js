// Initialization for AOS (Animate On Scroll) library
// This needs the AOS library to be linked in your HTML file
AOS.init({
  offset: 100,
  duration: 1200,
  easing: 'ease-in-out',
  once: true,
});

// --- Hamburger Menu Script ---
const hamburg = document.getElementById("hamburg");
const cancel = document.getElementById("cancel");
const dropdown = document.getElementById("dropdown");

// Event listener for the hamburger icon
if (hamburg) {
  hamburg.addEventListener("click", () => {
    dropdown.style.transform = "translateY(0)";
    hamburg.style.display = "none";
    cancel.style.display = "block";
  });
}

// Event listener for the cancel (X) icon
if (cancel) {
  cancel.addEventListener("click", () => {
    dropdown.style.transform = "translateY(-500px)";
    cancel.style.display = "none";
    // Tampilkan hamburger kembali, namun sesuaikan dengan ukuran layar
    // The previous logic for this part was a bit off,
    // so I've simplified it to always show the hamburger when the menu is closed.
    hamburg.style.display = "block";
  });
}

// --- Typewriter Effect ---
const roles = ["Staff", "Student"];
let index = 0;
let charIndex = 0;
const typewriterText = document.querySelector(".typewriter-text");

function type() {
  if (charIndex < roles[index].length) {
    typewriterText.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000); // Wait 2 seconds before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterText.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 500); // Wait 0.5 seconds before typing the next role
  }
}

// Start the typewriter effect when the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  if (typewriterText) {
    if (roles.length) setTimeout(type, 500);
  }
});