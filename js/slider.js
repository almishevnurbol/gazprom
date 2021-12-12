document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.progress-slider', {
        navigation: {
          nextEl: '.progress-button-next',
          prevEl: '.progress-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 40,
    })
})