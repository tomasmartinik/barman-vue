<template>


 <div class="wrap vertical-center" style="
         justify-content: ; max-height: 416px; margin-top: 150px;
         ">
       


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
               
                  <button @click="payDrink()"><div class="paydrink-btn" style="position: absolute;bottom: 20px;">PŘIPRAVIT</div></button>
               
            </div>
         </div>
      </div>


 <teleport to="body">
    <MsgModal
      v-if="showModal"
      @close="showModal = false"
      :chyba="chyba"
    />
  </teleport>


</template>

<script>
import DrinkCard from "../components/DrinkCard.vue";
import { globalDrinks, selectDrink } from "../api/api";
import MsgModal from "../components/MsgModal.vue";
import { globalChyba } from "@/api/api.js";


export default {
  name: "SelectedDrink",
  props:{
    //chyba:{
      //type: String,
      //default: "0",
    //}
  },
  data: () => ({
    chyba: globalChyba,
    showModal: true,
    drink: {
      name: "loading...",
      price: 0,
      description: "loading...",
      imageSrc: "loading...",
    },
  }),
  components: {
    DrinkCard,
    MsgModal
  },
  methods: {
    payDrink() {
      selectDrink(this.drink.name);
      this.$router.push('/home')
    },
  },
  created() {
    const drinkName = this.$route.params.name;
    console.log("selected drink:", drinkName);
    this.drink = globalDrinks.find((d) => d.name == drinkName);
  },
    openModal() {
      (this.showModal = true);
    },
};
</script>
 
<style>

</style>