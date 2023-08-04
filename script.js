// script.js
const images = ['hero-image1.jpg', 'hero-image2.jpg', 'hero-image3.jpg'];
let currentImageIndex = 0;
const heroImage = document.querySelector('.hero');

function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroImage.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

// Change hero image every 5 seconds
setInterval(changeHeroImage, 5000);
