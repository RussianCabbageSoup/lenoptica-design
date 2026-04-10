export const initCarousel = () => {
    new Swiper('.Carousel', {
        slidesPerView: 5,   
        spaceBetween: 40,   
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
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 5 }
        }
    });
}