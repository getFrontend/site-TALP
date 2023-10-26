import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const slider = () => {
  const swiper = new Swiper('#swiper-popular', {
    slidesPerView: 4,
    spaceBetween: 32,
    modules: [Navigation],
    navigation: {
      nextEl: '#slideNext',
      prevEl: '#slidePrev',
    },
  });
}

