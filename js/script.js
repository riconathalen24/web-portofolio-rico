// <!-- AOS Animation -->
    AOS.init({
      offset: 100,
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });

    // Dropdown menu script
    function openMenu() {
      document.getElementById("dropdownMenu").style.display = "block";
    }
    function closeMenu() {
      document.getElementById("dropdownMenu").style.display = "none";
    }

    const hamburg = document.getElementById("hamburg");
    const cancel = document.getElementById("cancel");
    const dropdown = document.getElementById("dropdown");

  // Saat klik bars
  hamburg.addEventListener("click", () => {
    dropdown.style.transform = "translateY(0)";
    hamburg.style.display = "none";   // sembunyikan bars
    cancel.style.display = "block";   // tampilkan X
  });

  // Saat klik X
  cancel.addEventListener("click", () => {
    dropdown.style.transform = "translateY(-500px)";
    cancel.style.display = "none";    // sembunyikan X
    hamburg.style.display = "block";  // munculkan bars
 
   if (window.innerWidth <= 768) {
    hamburg.style.display = "block";
  } else {
    hamburg.style.display = "none";
  }
});

  // Typewriter effect
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
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typewriterText.textContent = roles[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      index = (index + 1) % roles.length;
      setTimeout(type, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (roles.length) setTimeout(type, 500);
  });