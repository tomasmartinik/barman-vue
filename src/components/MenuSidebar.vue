<template>
  <transition name="slide-fade">
    <div v-if="isOpen" id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/cleaning">Cleaning</router-link>
      <router-link to="/connectedBeverages">Settings</router-link>
      <button>CLOSE MENU</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MenuSidebar",
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
  opacity: 0.8;
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

.slide-fade-enter-active,
.slide-fade-leave-active {
  transform: translateY(0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
}
</style>