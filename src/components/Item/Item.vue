<!-- 
  Title: components/Item.vue 
  Author: abc 
  Email: abc@gmail.com
  Description: Carousal slides.
  Date: 17 Aug 2022
  Copyright (c) BlooBloom, 2022
  Version:0.1.0
-->
<template>
  <div class="relative">
    <!-- types  -->
    <div
      class="absolute z-10 w-full flex items-center justify-center h-20 Regular gap-x-1"
    >
      <h3 class="Medium uppercase text-[18px]">{{glass.name}}</h3>
      <h3 class="Regular uppercase text-[18px]">{{item.frame_variant.colour.name}}</h3>
    </div>
    <!-- previous button  -->
    <button
      class="absolute px-5 left-0 h-full z-10 top-0 cursor-w-resize"
      @click="prev"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 xl:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <!-- slides  -->
    <Carousel ref="carousel">
      <Slide :key="slide" v-for="media in item.media">
        <div class="carousel__item">
          <img
            alt="logo"
            class="mx-auto h-full object-cover"
            :src="media.url"
          />
        </div>
      </Slide>
    </Carousel>
    <!-- next button  -->
    <button
      class="absolute px-5 right-0 z-10 top-0 h-full cursor-e-resize"
      @click="next"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 xl:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>
<script>
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
// styling css
import "./styles.css";

export default {
  name: "Item",
  props: ['glass'],
  
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: (instance) => ({
    currentSlide: 0,
    item:instance.glass.glass_variants[Math.floor(Math.random() * instance.glass.glass_variants.length)],
  }),
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>
