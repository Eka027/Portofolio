// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
      // Toggle nav list and burger class
      navLists.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
  });
};

navSlide();

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-mode");
  const body = document.body;

  // Cek apakah mode malam sudah diaktifkan sebelumnya
  if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      toggleButton.textContent = "☀️ Mode Siang";
  }

  toggleButton.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah perilaku default
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "dark");
          toggleButton.textContent = "☀️ Mode Siang";
      } else {
          localStorage.setItem("theme", "light");
          toggleButton.textContent = "🌙 Mode Malam";
      }
  });

  // Event Listener untuk tombol Resume
  document.getElementById("resume-btn").addEventListener("click", function () {
      window.open("resume.pdf", "_blank");
  });
});
