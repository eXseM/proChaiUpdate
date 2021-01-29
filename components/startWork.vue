<template>
  <div class="start">
    <div class="start__left">
      <div class="start__left__sliderMob">
        <client-only>
          <swipe v-model="index" class="swiper">
            <swipe-item style="background: springgreen"> <p>Item 1</p> </swipe-item>
            <swipe-item style="background: #852BFF;"><p>Item 2</p></swipe-item>
            <swipe-item style="background: indianred;"><p>Item 3</p></swipe-item>
          </swipe>
        </client-only>
      </div>
      <div class="start__left__slider">
        <hooper :infiniteScroll="true" class="slider" :wheelControl='false'>
          <slide class="slides"> <h2>1</h2> </slide>
          <slide class="slides"> <h2>2</h2> </slide>
          <slide class="slides"> <h2>3</h2> </slide>
          <hooper-navigation slot="hooper-addons" class="arrowsSwitch"></hooper-navigation>
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
  data(){
    return{
      index: 0
    }
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation,
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
  &__sliderMob{
    display: none;
  }
    &__slider {
      width: 90%;
      height: 400px;
      margin: auto;
      appearance: none;
      outline: none;

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

    .hooper-prev{
      outline: none;
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
      margin-right: -120px;
      margin-top: -100px;
      transform: rotate(45deg);
    }
  }
}

@media screen and (max-width: 768px) {
  .start{
    width: 100%;
    display: flex;
    flex-direction: column-reverse;

    &__left{
      margin-top: -250px;
      &__sliderMob{
        display: block;
        width: 100%;
        height: 400px;
        .swiper{
          height: 400px;
          width: 80%;
          margin: auto;
        }
      }
      &__slider{
        display: none;
      }
      width: 100%;
    }
    &__right{
      width: 100%;
      margin-top: 50px;
      &__title{
        font-size: 28px;
        text-align: center;
      }
    }
    #Footprint{
      display: none;
    }
  }
}
</style>
