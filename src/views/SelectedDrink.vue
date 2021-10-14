<template>


 <div class="wrap vertical-center" style="
         justify-content: left; max-height: 416px; margin-top: 100px;padding-left:50px
         ">
        <DrinkCard
      :key="drink.name"
      :name="drink.name"
      :price="drink.price"
      :description="drink.description"
      :imageSrc="drink.imageSrc"
      :showPrice="false"
    />


         <div style="width: 50px;"></div>
         <div class="card-sc mb-4" style="width: 70%; height: 100%;position: relative;">
            <div class="card-body-sc pt-4 pb-3 w-100">
               <h4>
                  Objednávka
               </h4>
               <div class="mt-3">
                  1x {{ drink.name }} {{ drink.price }} Kč
               </div>
               <h4 class="mt-5">
                  K zaplacení
               </h4>
               <div class="mt-3">
                 {{ drink.price }} Kč
               </div>
               <div class="paydrink-btn" style="position: absolute;bottom: 20px;">
                  <button @click="payDrink()">ZAPLATIT {{ drink.price }} Kč</button>
               </div>
            </div>
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