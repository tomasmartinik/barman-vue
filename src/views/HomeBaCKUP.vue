<template>

 <carousel :items-to-show="3">
    <slide v-for="slide in 1" :key="slide">
     <DrinkCard
        v-for="drink in drinks"
        :key="drink.name"
        :name="drink.name"
        :price="drink.price"
        :description="drink.description"
        :imageSrc="drink.imageSrc"
      />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>



  <div class="wrap vertical-center">
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
  </div>
</template>

<script>
// @ is an alias to /src
import DrinkCard from "@/components/DrinkCard.vue";
import { globalDrinks } from "@/api/api.js";

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'



export default {
  name: "Home",
  components: {
    DrinkCard,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
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
