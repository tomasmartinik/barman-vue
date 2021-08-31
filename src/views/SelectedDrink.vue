<template>
  <div>
    <router-link to="/">zpátky na seznam drinků</router-link>
    <DrinkCard
      :key="drink.name"
      :name="drink.name"
      :price="drink.price"
      :description="drink.description"
      :imageSrc="drink.imageSrc"
      :showPrice="false"
    />
    <div>
      <div>ewiohgeiogfoiewhgoierhgioerw</div>
      <button @click="payDrink()">Pay {{ drink.price }} Kč</button>
    </div>
  </div>
</template>

<script>
import DrinkCard from "../components/DrinkCard.vue";
import { globalDrinks, selectDrink } from "../api/api";

export default {
  name: "SelectedDrink",
  data: () => ({
    drink: {
      name: "loading...",
      price: 0,
      description: "loading...",
      imageSrc: "loading...",
    },
  }),
  components: {
    DrinkCard,
  },
  methods: {
    payDrink() {
      selectDrink(this.drink.name);
    },
  },
  created() {
    const drinkName = this.$route.params.name;
    console.log("selected drink:", drinkName);
    this.drink = globalDrinks.find((d) => d.name == drinkName);
  },
};
</script>

<style>
</style>