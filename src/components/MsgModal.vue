<template>
  <div style="background:red; height:200px; width:100%">ddddddd</div>
</template>

<script>
import { alcoholicDrinks, nonAlcoholicDrinks } from "../data/drink-lists";

export default {
  name: "MsgModal",
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
    emitDrinkSelected(drink) {
      this.$emit("drinkSelected", drink);
      this.$emit("close");
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