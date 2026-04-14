export const initCarousel = () => {
    new Swiper('.Carousel', {
        slidesPerView: 2.5,
        centeredSlides: true, 
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        breakpoints: {
            850: { slidesPerView: 4 },
            1024: { slidesPerView: 1.5 },
        },
    });
}