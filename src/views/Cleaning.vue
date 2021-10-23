<template>

  <div class="cleaning">
    <h2 class="text-center pt-5" style="font-weight: 700">
      Vyber nádoby, které chceš vyčistit
    </h2>

    <div class="wrap mt-5 pt-5" style="">
      <div class="container mt-5">
        <div class="row pb-3">
          <div 
            class="col kanystr mx-3"
            @click="chooseContainer('A')"
            :class="{ selected: cleanA }"
          >
            <div class="text-center mt-5 pt-4 letterKanystr">A</div>
          </div>
          <div 
            class="col kanystr mx-3"
            @click="chooseContainer('B')"
            :class="{ selected: cleanB }"
          >
            <div class="text-center mt-5 pt-4 letterKanystr">B</div>
          </div>
          <div 
            class="col kanystr mx-3"
            @click="chooseContainer('C')"
            :class="{ selected: cleanC }"
          >
            <div class="text-center mt-5 pt-4 letterKanystr">C</div>
          </div>
          <div 
            class="col kanystr mx-3"
            @click="chooseContainer('D')"
            :class="{ selected: cleanD }"
          >
            <div class="text-center mt-5 pt-4 letterKanystr">D</div>
          </div>
        </div>
      </div>

    </div>

    

  </div>
  <!--
  <div class="text-center">
      <button @click="cleanContainer()" class="btn-secondary p-4 mt-5" style="">Spustit čištění</button>
  </div>
-->
</template>

<script>
import { startCleaning } from "../api/api";


export default {
  name: "Cleaning",

  data: () => ({
    cleanA: false,
    cleanB: false,
    cleanC: false,
    cleanD: false,
  }),
  methods: {


    chooseContainer(kanystr) {
    const cleanArray = [];

      if (kanystr == "A") {
         cleanArray.push("A");
        this.cleanB = false;
        this.cleanC = false;
        this.cleanD = false;
        startCleaning(cleanArray);

      }
      if (kanystr == "B") {
         cleanArray.push("B");
        this.cleanA = false;
        this.cleanC = false;
        this.cleanD = false;
        startCleaning(cleanArray);

      }
      if (kanystr == "C") {
         cleanArray.push("C");
        this.cleanA = false;
        this.cleanB = false;
        this.cleanD = false;
        startCleaning(cleanArray);

      }
      if (kanystr == "D") {
         cleanArray.push("D");
        this.cleanA = false;
        this.cleanC = false;
        this.cleanB = false;
        startCleaning(cleanArray);

      }

    

  }
}
}
</script>

<style>
button,
input[type="submit"],
input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.kanystr {
  height: 250px;
  background: grey;
}

.selected {
  background: black;
}

.kanystr:hover {
  background: black !important;
}

.letterKanystr {
  font-size: 70px;
  color: white;
  font-weight: 700;
}

.choose-btn {
  width: 100%;
  background: #c0c0c0;
  color: white !important;
  font-weight: 600;
  font-size: 20px;
  padding: 13px 8px 13px 8px;
  border: none;
  text-align: center;
  border-radius: 10px;
}

.choose-btn:hover {
  background: black;
  transition: 0.3s;
}
</style>
