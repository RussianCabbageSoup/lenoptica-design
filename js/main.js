import { initCarousel } from "./carousel.js";

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});

function replaceImage() {
    const img = document.querySelector('.about__images-img img');
    if (window.innerWidth <= 750) {
        img.src = 'images/png/header-img.png';
    } else {
        img.src = 'images/png/about.png';
    }
}

window.addEventListener('resize', replaceImage);
window.addEventListener('load', replaceImage);