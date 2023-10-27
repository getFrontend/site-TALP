import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const sliderTestimonials = () => {
  const swiper = new Swiper('#testimonials-col-1', {
    direction: 'vertical',
    // slidesPerView: 4,
    slidesPerView: 'auto',
    spaceBetween: 32,
    grabCursor: true,
    a11y: false,
    freeMode: true,
    speed: 5500,
    loop: true,
    autoplay: {
      delay: 0.0,
      disableOnInteraction: false,
    },
  });

  const swiper2 = new Swiper('#testimonials-col-2', {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 32,
    grabCursor: true,
    a11y: false,
    freeMode: true,
    speed: 6100,
    loop: true,
    autoplay: {
      delay: 0.0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  });

  const swiper3 = new Swiper('#testimonials-col-3', {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 32,
    grabCursor: true,
    a11y: false,
    freeMode: true,
    speed: 5800,
    loop: true,
    autoplay: {
      delay: 0.0,
      disableOnInteraction: false,
    },
  });
}