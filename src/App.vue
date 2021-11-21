<template>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    style="background: black; padding-left: 20px"
  >
    <button @click="expandMenu()" class="navbar-brand" href="#">
            <img src="/icons/menu_wh.png" style="height:55px;">
    </button>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>

  <menu-sidebar :isOpen="menuOpen" @click="collapseMenu()" />
  <router-view />
</template>

<script type="text/javascript">


import MenuSidebar from "./components/MenuSidebar.vue";
import { getIngredients } from "./api/api";

export default {
  name: "App",

  data: () => ({
    menuOpen: false,
  }),

  methods: {
    expandMenu() {
      this.menuOpen = true;
    },
    collapseMenu() {
      this.menuOpen = false;
    },
  },

  components: {
    MenuSidebar,
  },

  created() {
    getIngredients();
  },
};
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
}
/*

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

*/
</style>
