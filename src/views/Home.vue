<template>





 
<section class="" aria-label="Gallery">
  <ol class="carousel__viewport">
<DrinkCard
        v-for="(drink,index) in drinks"
        :key="drink.name"
        :name="drink.name"
        :index="index"
        :NumberOfDrinks="NumberOfDrinks"
        :price="drink.price"
        :description="drink.description"
        :imageSrc="drink.imageSrc"
        :isLast="drinks.length"
      /> 
        </ol>
  
</section>

</template>

<script>
// @ is an alias to /src
import DrinkCard from "@/components/DrinkCard.vue";
import { globalDrinks } from "@/api/api.js";


//import 'vue3-carousel/dist/carousel.css';
//import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: "Home",
  components: {
   DrinkCard,
   
  },
  data: () => ({
    drinks: globalDrinks,
    
    
  }),
  props: {
   // NumberOfDrinks: {
    //  type: Number,
    //},
   
  },
  computed: {
   
  },
  methods: {
  
  
   
  },

};
</script>

<style>
/*
.drink-slider {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}

*/
@keyframes tonext {
  75% {
    left: 0%;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
}

@keyframes tostart {
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
}

@keyframes snap {
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
}

body {
  max-width: 100%;
  margin: 0 auto;
  font-family: 'Lato', sans-serif;
}

ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel {
  position: relative;
  padding-top: 50%;

}

.carousel__viewport {
  position: absolute;
  top: 200px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel__slide {

  width: 100%;
/*flex-shrink: 1!important;*/

}




.carousel__snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
}

@media (hover: hover) {
  .carousel__snapper {
    animation-name: tonext, snap;
    animation-timing-function: ease;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  .carousel__slide:last-child .carousel__snapper {
    animation-name: tostart, snap;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel__snapper {
    animation-name: none;
  }
}

.carousel:hover .carousel__snapper,
.carousel:focus-within .carousel__snapper {
  animation-name: none;
}






.carousel::before,
.carousel__prev {
  left: -1rem;
}

.carousel::after,
.carousel__next {
  right: -1rem;
}



</style>
