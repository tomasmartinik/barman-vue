<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button @click="loadDrinks">Načti drinky</button>
  </div>
</template>

<script>
import { getDrinks } from "@/api/api.js";

export default {
  methods: {
    async loadDrinks() {
      try {
        await getDrinks();
      } catch (err) {
        alert("Nedokázal jsem se připojit, koiukni do konzole");
        console.log(err.message);
      }
    },
  },
};
</script>
