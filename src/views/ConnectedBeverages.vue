<template>
  <div>
    <div>
      <h2 class="text-center mt-4 mb-5">Alkoholické</h2>
      <ul>
        <div class="wrap">
      <div class="row">
        <button @click="openModal(i, true)" v-for="(drink, i) in alcoholic" :key="drink" class="col kanystr mx-3 text-center letterChoose">
          
            {{ drink ?? "Vybrat " }}  alko {{ i + 1}}
          
        </button>
      </div>
      </div>
      </ul>
    </div>
    <div>
      <h2 class="text-center mt-5 mb-5">Nealkoholické</h2>
      <ul>
        <div class="wrap">
        <div class="row">
          <button @click="openModal(i, false)" v-for="(drink, i) in nonAlcoholic" :key="drink" class="col kanystr mx-3 text-center letterChoose"> 
            <!-- <input v-model="name"> -->
            {{ drink ?? "Vybrat " }}  nealko {{nonAlcIndex[i]}}
          </button>
      </div>
      </div>
      </ul>
    </div>
  </div>
<div class="w-100 text-center">  
  <button @click="loadDrinks" class="btn-secondary p-4 mt-2">Načti drinky</button>
</div>
  <router-link to="/">

</router-link>

  <teleport to="body">
    <drink-modal
      :show="showModal"
      :info="modalInfo"
      @close="showModal = false"
      @drinkSelected="onDrinkSelected($event)"
    />
  </teleport>
</template>

<script>
import { getDrinks } from "@/api/api.js";
import DrinkModal from "../components/DrinkModal.vue";

export default {
  components: {
    DrinkModal,
  },
  name: "ConnectedBeverages",
  data: () => ({
    
    nonAlcIndex: ["A", "B", "C", "D"],
    showModal: false,
    modalInfo: {
      drinkIndex: 0,
      isAlcoholic: false,
    },
  //  cats:[null, null, null, null, null, null, null, null, null, null],
  }),
  //mounted() {
  // if(localStorage.name) this.name = localStorage.name;
  //},
computed: {
  alcoholic(){
    return this.$store.state.alcoholic;
  },
  nonAlcoholic(){
    return this.$store.state.nonAlcoholic;
  } 
},
  methods: {
    async loadDrinks() {
      try {
        await getDrinks();
      } catch (err) {
        alert("Nedokázal jsem se připojit, koukni do konzole");
        console.log(err.message);
      }
      this.$router.push('/home')
    },
    openModal(index, isAlcoholic) {
      (this.modalInfo.drinkIndex = index),
        (this.modalInfo.isAlcoholic = isAlcoholic),
        (this.showModal = true);
    },
    onDrinkSelected(drink) {
      if (this.modalInfo.isAlcoholic) {
        this.$store.commit("setAlcoholic", {drinkIndex:this.modalInfo.drinkIndex,
          drink: drink,
        })
       // this.alcoholic[this.modalInfo.drinkIndex] = drink;
         //this.saveLocalStorage();
      } else {
        this.$store.commit("setNonAlcoholic", {drinkIndex:this.modalInfo.drinkIndex,
          drink: drink,
        })
       // this.nonAlcoholic[this.modalInfo.drinkIndex] = drink;
         //this.saveLocalStorage(drink, this.modalInfo.drinkIndex);
      }
    },
   // saveLocalStorage(drink,index) {
   //   let parsed = JSON.stringify(drink, index);
   //   insertAt(cats, index, drink);
   //   setItem('cats', parsed);
   // }
  },
};
</script>

<style scoped>
.wrap {
  max-width: 1000px;
  margin: 0 auto;
}

.text{}

.kanystr{height: 200px;
background: grey;  }

</style>