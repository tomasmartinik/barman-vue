<template>


<li :id="'carousel__slide' + (index+1) "
        tabindex="0"
        class="carousel__slide">

<div class="carleft">

        <a :href="'#carousel__slide' + index" v-if="index >= 1"
           class=""><i class="fa fa-arrow-left" style="color: black; font-size:40px"></i>
         </a>

         <a :href="'#carousel__slide' + isLast" v-else
           class=""><i class="fa fa-arrow-left" style="color: black; font-size:40px"></i>
         </a>


</div>
  <div class="carright">
        <a :href="'#carousel__slide' + (index+2)" v-if="index < (isLast - 1)"
           class=""><i class="fa fa-arrow-right" style="color: black; font-size:40px;"></i>
         </a>

         <a :href="'#carousel__slide1'" v-if="index == (isLast - 1)"
           class=""><i class="fa fa-arrow-right" style="color: black; font-size:40px;"></i>
         </a>
     
    </div>


<div class="card-sc mb-4" style="margin: 0 auto">
      <div class="card-header-sc">
        <img :src="'/drink-images/' + imageSrc" alt="rover" />
      </div>
      <div class="card-body-sc pt-4 pb-3">


        <h4>
          {{ name }}
        </h4>
      
        <div>
          {{ description }}
        </div>
        <router-link :to="`/drink/${name}`">
          <div v-if="showPrice" class="choosedrink-btn mt-5">
            <button>{{ price }} Kč</button>
          </div>
        </router-link>
      </div>
    </div>

      
    </li>
</template>
<script>

//import { Carousel, Slide } from 'vue-carousel';
export default {
  name: "DrinkCard",
   components: {
    },
  props: {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    imageSrc: {
      type: String,
    },
    showPrice: {
      type: Boolean,
      default: true,
    },
    index:{
      type: Number
    },
    isLast:{
      type: Number,
    }

  },
  
  data: () => ({

  }),


};
</script>


<style>

.carright{position: absolute;
right: 0px;
top: 15%;
}

.carleft{position: absolute;
left: 0px;
top: 15%;
}

.fa-arrow-left,.fa-arrow-right{
  padding: 100px 100px 100px 100px;
}



.carousel__slide{display: block!important;}

li {
  list-style: none;
}
/*
   .wrap {
  max-width: 900px;
  margin: 0 auto;
}

.glide__slide {
 


  margin: 0;
  text-align: center;
 padding-left:10px ;
  padding-right:10px ;
 transform: scale(0.9);
}



.card-sc {
 
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: ;
  width: 100%;
  text-align: left;
}
.card-header-sc img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body-sc {

  padding: 20px;

}

.tag-sc {
  background: #cccccc;
  border-radius: 5px;
  font-size: 12px;
  margin: 0;
  color: #fff;

  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body-sc p {
  font-size: 13px;

}
.user {
  display: flex;
  margin-top: auto;
}

.user-sc img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}
*/
</style>