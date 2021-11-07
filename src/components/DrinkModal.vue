<template>
  <div v-if="show" class="barmanmodal">
    <div class="barmaninner-modal">
            <button @click="$emit('close')"><button class="m-3">
            <img src="/icons/close.png" style="height:30px;margin:0 auto">
      </button>
    </button>

      <div style="width:90%; margin:0 auto">

      <h3 class="text-center mb-5">
        Vyberte {{ info.isAlcoholic ? "alko" : "nealko" }} drink na pozici
        {{ info.drinkIndex }}
      </h3>
      <input type="text" placeholder="Vyhledat..." v-model="search" class="w-100 mb-3" />
      <br />
      <div v-if="info.isAlcoholic">
        <div class="my-2 text-alc" 
          v-for="drink in filteredAlcoholicDrinks"
          :key="drink"
          @click="emitDrinkSelected(drink, info.drinkIndex + 1)"
        >
          {{ drink }}
        </div>
      </div>
      <div v-if="!info.isAlcoholic">
        <div class="my-2 text-alc" 
          v-for="drink in filteredNonAlcoholicDrinks"
          :key="drink"
          @click="emitDrinkSelected(drink, info.drinkIndex + 7)"
        >
          {{ drink }}
        </div>
      </div>
      <br />
      <br />
    </div>
  </div>
  </div>
</template>

<script>
import { alcoholicDrinks, nonAlcoholicDrinks } from "../data/drink-lists";
import {  selectIngredient, globalSelectedIngredients } from "../api/api";

export default {
  name: "DrinkModal",
  emits: ["close", "drinkSelected"],
  props: {
    show: {
      type: Boolean,
      require: true,
    },
    info: {
      type: Object,
      require: true,
    },
  },
  data: () => ({
    search: "",
    alcoholicDrinks,
    nonAlcoholicDrinks,
  }),
  computed: {
    filteredAlcoholicDrinks() {
      return alcoholicDrinks.filter((d) => d.includes(this.search));
    },
    filteredNonAlcoholicDrinks() {
      return nonAlcoholicDrinks.filter((d) => d.includes(this.search));
    },
  },
  methods: {
    emitDrinkSelected(drink, index) {
      this.$emit("drinkSelected", drink, index);
      this.$emit("close");
      selectIngredient(drink, index);
      globalSelectedIngredients.push(drink);
    },
  },
};
</script>

<style scoped>
.barmanmodal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.barmaninner-modal {
  background-color: white;
  width: 50%;
  height: 80%;
}

.text-alc{font-size: 20px;}
</style>