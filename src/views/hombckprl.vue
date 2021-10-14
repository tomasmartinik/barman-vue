<template>

  <div class="wrap vertical-center">
  <carousel :items-to-show="5">
    <slide v-for="drink in drinks" :key="drink.name">
      <DrinkCard
        
        :name="drink.name"
        :price="drink.price"
        :description="drink.description"
        :imageSrc="drink.imageSrc"
      /> {{ slide }}
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  </div>





    <div class="glide drink-slider">
      <!-- <div class="home"> -->
      <DrinkCard
        v-for="drink in drinks"
        :key="drink.name"
        :name="drink.name"
        :price="drink.price"
        :description="drink.description"
        :imageSrc="drink.imageSrc"
      />
      <!--  </div> -->
    </div>

</template>

<script>
// @ is an alias to /src
import DrinkCard from "@/components/DrinkCard.vue";
import { globalDrinks } from "@/api/api.js";

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: "Home",
  components: {
    DrinkCard,
     Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data: () => ({
    drinks: globalDrinks,
  }),
  props: {},
  computed: {},

};
</script>

<style scoped>
.drink-slider {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}
</style>
