const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
const slides = document.querySelectorAll('.face__carousel-slide');
const totalSlides = slides.length;
let slidesToShow = 5;
let slidesArray = [];

function cloneSlides() {
    carousel.innerHTML = '';

    slidesArray = Array.from(slides);
}

function updateCarousel() {
    // Скрываем/показываем слайды
    slides.forEach((slide, index) => {
        if (index >= currentIndex && index < currentIndex + slidesToShow) {
            slide.style.display = ''; // Показываем
            slide.style.opacity = '1';
        } else {
            slide.style.display = 'none'; // Скрываем
            slide.style.opacity = '0';
        }
    });
}

// Инициализация
if (totalSlides > slidesToShow) {
    updateCarousel();
    
    // Кнопка "Вперед"
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides - slidesToShow) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Кнопка "Назад"
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
} else {
    // Если слайдов меньше 5, показываем все
    slides.forEach(slide => slide.style.display = '');
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
}