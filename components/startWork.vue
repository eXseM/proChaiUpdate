<template>
  <div class="start">
    <div class="start__left">
      <div class="start__left__slider">
        <hooper :infiniteScroll="true" class="slider" :wheelControl='false'>
          <slide class="slides"> <h2>1</h2> </slide>
          <slide class="slides"> <h2>2</h2> </slide>
          <slide class="slides"> <h2>3</h2> </slide>
          <!-- <img :src="require(`../assets/${activeSlide}.jpg`)" alt="none"> -->
          <!-- <slide v-for="(slide, idx) in slides" :key="idx" :index="idx"> {{slide}} </slide> -->
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </div>
    </div>
    <div class="start__right">
      <div class="start__right__title">
        <h2>
          Начать работать <br />
          за три шага
        </h2>
        <img src="../assets/steps.png" alt="" width="100" id="Footprint">
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data(){
      return{
        //   slides:[`../assets/${'one'}.jpg`],
        //   activeSlide:'one'
      }
  },
  computed:{
      check(){

      }
  }
};
</script>

<style lang="scss" scoped>
.start {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 200px;
  color: #333;

  &__left {
    width: 40%;
    height: 500px;

    &__slider {
      width: 90%;
      height: 400px;
      margin: auto;

      img {
        width: 100%;
        height: 400px;
      }
    }
    .slider {
      width: 100%;
      margin: auto;
      height: 400px;


    .slides{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;

        h2{
          font-size: 100px;
        }
    }
      
    }
  }
  &__right {
    width: 25%;
    height: 500px;
    // margin-top: -100px;
    font-family: Montserrat, sans-serif;

    &__title {
      font-size: 48px;
      text-align: right;
    }

    #Footprint{
      margin-right: -180px;
      margin-top: -100px;
      transform: rotate(45deg);
    }
  }
}
</style>