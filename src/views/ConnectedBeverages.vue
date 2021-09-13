<template>
  <div>
    <span>Seznam pripojených drinků</span>
    <ul>
      <div>
        <button>{{ alcoholic.a1 ?? "Select..." }}</button>
      </div>
      <div>
        <button>{{ alcoholic.a2 ?? "Select..." }}</button>
      </div>
      <div>
        <button>{{ alcoholic.a3 ?? "Select..." }}</button>
      </div>
      <div>
        <button>{{ alcoholic.a4 ?? "Select..." }}</button>
      </div>
      <div>
        <button>{{ alcoholic.a5 ?? "Select..." }}</button>
      </div>
      <div>
        <button>{{ alcoholic.a6 ?? "Select..." }}</button>
      </div>
    </ul>
  </div>


      <button @click="loadDrinks" class="btn-primary p-2">Načti drinky</button>

</template>

<script>
import { getDrinks } from "@/api/api.js";

export default {
  name: "ConnectedBeverages",
  data: () => ({
    alcoholic: {
      a1: null,
      a2: null,
      a3: null,
      a4: null,
      a5: null,
      a6: null,
    },
    nonAlcoholic: [],
  }),
  methods: {
    async loadDrinks() {
      try {
        await getDrinks();
      } catch (err) {
        alert("Nedokázal jsem se připojit, koukni do konzole");
        console.log(err.message);
      }
    },
  }
};
</script>

<style scoped>
</style>