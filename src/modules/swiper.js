import Swiper from "swiper";
import { Navigation, Pagination, A11y } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, A11y],
  direction: 'horizontal',
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  a11y: {
    prevSlideMessage: 'prev slide',
    nextSlideMessage: 'next slide',
  },
  navigation: {
    nextEl: '.intro-next-image',
    prevEl: '.intro-prev-image'
  }
});

export default swiper;