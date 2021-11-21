<template>
<div v-if="chyba != 'none'" style="background-color: rgba(0,0,0,0.5);; height:100%; width:100%; position:absolute; left:0;top:0">
<div class="mt-5" style="position:absolute;left:30%; top:20%;" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="exampleModalLongTitle">Upozornění</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div v-if="chyba == 'sklenice'" class="modal-body">
        Barman nemá k dospozici sklenici pro přípravu koktejlu. Prosím zvolte, zda je sklenice připravena na ploše a chcete pokračovat nebo zda chcete zrušit přípravu koktejlu.
      </div>
      <div v-if="chyba == 'davkovac'" class="modal-body">
        V dávkovači není kapalina. Zvolte, zda problém odstraníte a chcete pokračovat nebo zda chcete zrušit přípravu koktejlu.
      </div>
      <div class="mb-3 mt-3">
        <button @click="$emit('close'); msgBoxAnswer(1) " type="button" class="btn btn-black mx-3" data-dismiss="modal">Pokračovat</button>
        <button @click="$emit('close'); msgBoxAnswer(2) " type="button" class="btn btn-danger">Zrušit</button>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script>
import { alcoholicDrinks, nonAlcoholicDrinks } from "../data/drink-lists";
import { ModalAnswer } from "../api/api";

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
    chyba:{
      type: String,
      require: true,
    },
    pokracovat:{
      type: Boolean,
    }
    

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
    msgBoxAnswer(pokracovat){
      const chybaArray = [];
      chybaArray.push(this.chyba+pokracovat);
      //alert(chybaArray)
      ModalAnswer(chybaArray); 
    }
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

.modal-body{font-size: 21px;}

.btn-black{background: black;
color: white;}

.btn{
  font-size: 21px;
  padding: 10px 20px;
}
</style>