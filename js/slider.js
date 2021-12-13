document.addEventListener('DOMContentLoaded', () => {
    const swiperProgress = new Swiper('.progress-slider', {
        navigation: {
          nextEl: '.progress-button-next',
          prevEl: '.progress-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 40,
    })

    const swiperSpecprojects = new Swiper('.specprojects-slider', {
      navigation: {
        nextEl: '.specprojects-button-next',
        prevEl: '.specprojects-button-prev',
      },
      pagination: {
        el: '.specprojects-pagination',
        type: 'bullets',
      },
      slidesPerView: 3,
      spaceBetween: 40,
  })

  const swiperNext = new Swiper('.next-slider', {
    navigation: {
      nextEl: '.next-button-next',
      prevEl: '.next-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 40,
})
})
