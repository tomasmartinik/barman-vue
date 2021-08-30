<template>
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

export default {
  name: "Home",
  components: {
    DrinkCard,
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
