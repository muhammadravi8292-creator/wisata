const heroTitle = document.querySelector(".hero-title");
const heroDescription = document.querySelector(".hero-description")
const heroButton = document.querySelector(".hero-button");
heroButton.addEventListener("click", function() {
    heroTitle.textContent = "Ayo Jelajahi Wisata Indonesia!";
    heroDescription.textContent = "Temukan Pantai, Gunung, dan destinasi wisata menarik di Indonesia!";
    if (heroTitle.classList.contains("judul-highlight")) {
        heroTitle.classList.remove("judul-highlight");
        heroTitle.textContent = "SIWA"
        heroDescription.textContent = "Temukan destinasi wisata terbaik dengan informasi lengkap, mudah, dan t"
        heroButton.textContent = "Jelajahi Sekarang";
    }else{
        heroTitle.classList.add("judul-highlight");
        heroButton.textContent = "Nonaktifkan Highlight";
    }
});

const destinationCards = document.querySelectorAll(".destination-card");
destinationCards.forEach(function(card) {
    card.addEventListener("mouseover", function (){
        card.classList.add("card-active");
    });
    card.addEventListener("mouseout", function (){
        card.classList.remove("card-active");
    });
});

const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.getElementById(targetId.substring(1));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});
