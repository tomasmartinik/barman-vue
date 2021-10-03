<template>




  <transition name="slide-fade">
    <div v-if="isOpen" id="nav">
      <router-link class="nav-item nav-link active p-4 mt-5" to="/">Home</router-link>
       <!-- <button @click="loadDrinks" class="btn-primary p-2" style="margin:0 auto">Načti drinky</button>-->

      <router-link class="nav-item nav-link active p-4" to="/cleaning">Čištění</router-link>
      <router-link class="nav-item nav-link active p-4" to="/connectedBeverages">Nastavení</router-link>
      <button class="mt-5"><i class="fa fa-close" style="color: white; font-size:40px"></i></button>
    </div>
  </transition>
</template>

<script>
//import { getDrinks } from "@/api/api.js";

export default {
  name: "MenuSidebar",
  methods: {
    expandMenu() {
      this.menuOpen = true;
    },
    collapseMenu() {
      this.menuOpen = false;
    },
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
#nav {
  z-index: 1000;
  height: 100%;
  width: 100%;
  background-color: black;
  color: rgb(146, 140, 140);
  opacity: 0.9;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
  transition: all 0.2s;
}

#nav * {
  text-align: center;
  display: block;
}

.nav-link {font-size: 50px;
color: white;
font-weight: 700;
}


.nav-link:hover {color: grey;}


.slide-fade-enter-active,
.slide-fade-leave-active {
  transform: translateY(0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
}
</style>