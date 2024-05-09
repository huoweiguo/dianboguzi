<template>
<div class="swiper-warp">
  <Swiper
    :modules="[Autoplay, Pagination, EffectCards, EffectFade, Grid]"
    :slides-per-view="1"
    :space-between="50"
    :loop="true"
    :autoplay="{
      delay: 100000
    }"
    :pagination="{ clickable: true}"
  >
    <SwiperSlide v-for="slide in 4" :key="slide">
      <img src="../public/slider.png" style="width: 100%"/>
      <!-- <strong>{{ slide }}</strong> -->
    </SwiperSlide>
  </Swiper>
</div>
</template>

<script lang="ts" setup>
import { Autoplay, Pagination, EffectCards, EffectFade, Grid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>

<style>
.swiper-pagination-bullet-active {
  width: 0.68rem !important;
  background-color: #B5A8E5;
  border-radius: 0.1rem;
}

</style>
<style lang="scss" scoped>
  .swiper-warp {
    width: 100%;
  }
</style>