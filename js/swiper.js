const swiper = new Swiper('.swipers', {
    slidesPerView: 'auto',
    loop: true,
    speed: 3000,
    autoplay: {
            delay: 0, 
            stopOnLastSlide: true,
            disableOnInteraction: false
        },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    }
  });

  const swiperr = new Swiper('.swiperr', {
    slidesPerView: 1,
    loop: true,
    speed: 500,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    }
  });
