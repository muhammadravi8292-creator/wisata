const heroButton = document.querySelector(".hero-button");
const heroTitle = document.querySelector(".hero-title");
const heroDescription = document.querySelector(".hero-description")


heroButton.addEventListener("click", function() {
    heroTitle.textContent = "Ayo Jelajahi Wisata Indonesia!";
    heroDescription.textContent = "Temukan Pantai, Gunung, dan destinasi wisata menarik di Indonesia!";
    heroTitle.classList.toggle("judul-highlight");
});