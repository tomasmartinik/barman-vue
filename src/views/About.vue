<template>
  <div class="about">
    <button @click="loadDrinks" class="btn-primary p-2">Načti drinky</button>
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
        alert("Nedokázal jsem se připojit, koukni do konzole");
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped="">
  .about{
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 50%;
  }


</style>
