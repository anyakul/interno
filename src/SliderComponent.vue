<template>
  <section class="slider section">
    <div class="slider-container container"> 
      <swiper
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <img src="./assets/img/photo-1.png" width="1201" height="799">
          <button class="slider-item-button"></button>
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/img/photo-2.png" width="1201" height="799">
          <button class="slider-item-button"></button>
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/img/photo-3.png" width="1201" height="799">
          <button class="slider-item-button"></button>
        </swiper-slide>
        <swiper-pagination></swiper-pagination>
        ...
      </swiper>
    </div>
  </section>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>
