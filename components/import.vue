<template>
  <div class="import">
    <div class="import__left">
      <div class="import__left__title">
        <h2>КАК ЗАЧИСЛИТЬ ЧАЕВЫЕ</h2>
      </div>
      <div class="import__left__btn">
        <RadioToggleButtons
          v-model="currentValue"
          :values="values"
          color="#852BFF"
          textColor="#000"
          selectedTextColor="#fff"
          class="toggleBtn"
        />
      </div>
      <div class="import__left__text">
        <p class="text_value">{{ currentValue }}</p>
      </div>
    </div>
    <div class="import__right">
      <div class="import__right__air">
        <img src="../assets/air2.png" alt="" id="air" />
      </div>
      <div class="import__right__phone">
        <img src="../assets/cell.png" alt="" id="phone" />
      </div>
    </div>
  </div>
</template>

<script>
import VueRadioToggleButtons from "vue-radio-toggle-buttons";
import "vue-radio-toggle-buttons/dist/vue-radio-toggle-buttons.css";
import { gsap } from "gsap";

export default {
  component: {
    VueRadioToggleButtons,
  },
  data() {
    return {
      values: [
        {
          label: "1",
          value:
            "Гость может отсканировать QR с любой поверхности, будь то чек, бейджик, или экран планшета",
        },
        {
          label: "2",
          value: "Push-сообщение, SMS, e-mail",
        },
        {
          label: "3",
          value: "Через мобильное приложение",
        },
      ],
      currentValue:
        "Гость может отсканировать QR с любой поверхности, будь то чек, бейджик, или экран планшета",
    };
  },
  mounted() {
    this.startAnimations();
  },
  methods: {
    startAnimations() {
      var tl = new TimelineMax({ onUpdate: updatePercentage });

      tl.to("#air", 4, { left: "530px", top: "100px"}, 1);
      tl.to('#phone', 2, {top: '100px'}, 1)

      const scene = this.$scrollmagic.scene({
          triggerElement: ".import__right",
          triggerHook: 0.1,
          duration: 600,
          // offset: 100
        })
        .setPin(".import__right")
        .setTween(tl)

      this.$scrollmagic.addScene(scene);

      function updatePercentage() {
        tl.progress();
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.import {
  widows: 100%;
  height: 650px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: #222;

  font-family: Montserrat, sans-serif;

  &__left {
    width: 30%;

    &__title {
      font-size: 55px;
      font-weight: 700;
      line-height: 0.95;
    }

    &__btn {
      padding-top: 50px;
    }
    &__text {
      font-size: 24px;
      padding-top: 50px;
      margin-top: 1px;
    }
  }
  &__right {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;
    // background: coral;

    &__air {
      margin-top: 150px;
      position: relative;
      #air {
        position: absolute;
        top: 0;
        left: -50px;
      }
    }

    &__phone {
      margin-left: 10px;
      position: relative;

      img {
        position: absolute;
        left: 280px;
        top: 0;
        width: 330px;
        height: 666px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .import__right{
    display: none;
    width: 0;
  }
  .import{
    width: 60%;
    margin-top: -200px;
    
    &__left{
      margin-left: -50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      justify-content: center;
      text-align: center;
      &__title{
        font-size: 28px;
      }
    }
  }
}
</style>


<!-- Second variant -->
<!-- <div class="import">
    <div class="import__air">
      <img src="../assets/air.png" alt="" />
    </div>
    <div class="import__left">
      <div class="import__left__title">
        <h1>КАК ЗАЧИСЛИТЬ ЧАЕВЫЕ?</h1>
      </div>
      <div class="import__left__btn">
        <RadioToggleButtons
          v-model="currentValue"
          :values="values"
          color="#852BFF"
          textColor="#000"
          selectedTextColor="#fff"
          class="toggleBtn"
        />
      </div>
      <div class="import__left__text">
        <p class="import__left__value">{{ currentValue }}</p>
      </div>
    </div>
    <div class="import__right">
      <img src="../assets/cell.png" alt="" class="phone" />
      <img src="../assets/brger.png" alt="" class="brg" />
    </div>
    <div class="import__cat">
      <div class="cat__meow">
        <img src="../assets/meow.png" alt="" class="meow" />
      </div>
      <div class="cat__tom">
        <img src="../assets/Cat.png" alt="" class="cat" />
      </div>
    </div>
  </div> -->

<!-- First variant -->
<!-- <div class="import">
    <div class="import__left">
      <img src="../assets/cell.png" alt="" />
    </div>
    <div class="import__right">
      <div class="import__right__title">
        <h1>КАК ЗАЧИСЛИТЬ ЧАЕВЫЕ?</h1>
      </div>
      <div class="import__right__btn">
        <RadioToggleButtons
          v-model="currentValue"
          :values="values"
          color="#852BFF"
          textColor="#000"
          selectedTextColor="#fff"
          class="toggleBtn"
        />
      </div>
      <div class="import__right__text">
        <p class="import__right__value">{{ currentValue }}</p>
      </div>
    </div>
    <div class="import__cat">
      <div class="cat__meow">
        <img src="../assets/meow.png" alt="" class="meow" />
      </div>
      <div class="cat__tom">
        <img src="../assets/Cat.png" alt="" class="cat" />
      </div>
    </div>
  </div> -->



  //First and sec variant .import
  // width: 100%;
  // height: 950px;
  // margin-top: 50px;
  // display: flex;
  // flex-direction: row;
  // align-content: center;
  // justify-content: center;

  // font-family: Montserrat, sans-serif;









  // First Variant
  //   &__left {
  //     width: 40%;
  //     display: flex;
  //     justify-content: flex-end;
  //     margin-top: -50px;

  //     img {
  //       width: 60%;
  //       height: 70%;
  //       transform: rotate(15deg);
  //     }
  //   }
  //   &__right {
  //     padding-left: 100px;
  //     width: 40%;
  //     display: flex;
  //     flex-direction: column;

  //     &__title {
  //       font-weight: bold;
  //       padding-bottom: 50px;
  //     }
  //     &__text {
  //       padding-top: 50px;
  //       font-size: 24px;
  //       padding-bottom: 150px;
  //     }
  //   }
  //   &__cat {
  //     width: 20%;
  //     margin-top: -20%;
  //     display: flex;
  //     flex-direction: column;
  //     .cat__tom {
  //       display: flex;
  //       flex-direction: row;
  //       align-items: center;
  //       justify-content: flex-end;

  //       margin-top: -50px;
  //     }
  //     .cat__meow {
  //       display: flex;
  //       flex-direction: column;
  //       align-items: center;
  //     }
  //   }






// Second variant

  // &__air {
  //   width: 20.83%;
  //   margin-top: 150px;
  //   height: 615px;
  //   display: flex;
  //   justify-content: flex-end;
  //   align-content: center;
  //   align-items: flex-start;
  //   padding-top: 50px;
  //   img {
  //     min-width: 335px;
  //     max-width: 335px;
  //     min-height: 250px;
  //     max-height: 250px;
  //   }
  // }
  // &__left {
  //   width: 39.06%;
  //   margin-top: 150px;
  //   height: 615px;
  //   display: flex;
  //   flex-direction: column;
  //   align-content: center;

  //   &__title {
  //     padding-left: 40px;
  //     padding-top: 45px;
  //   }
  //   &__btn {
  //     padding-top: 45px;
  //     padding-left: 40px;
  //   }

  //   &__text {
  //     padding-left: 45px;
  //     padding-top: 90px;
  //     font-size: 24px;
  //     width: 90.67%;
  //   }
  // }
  // &__right {
  //   width: 26.04%;
  //   height: 840px;
  //   margin-top: 34px;
  //   display: flex;
  //   flex-direction: row;
  //   .phone {
  //     margin-top: 122px;
  //     min-width: 294px;
  //     min-height: 591px;
  //     max-width: 294px;
  //     max-height: 591px;
  //     margin-right: -70px;
  //   }
  //   .brg {
  //     width: 200px;
  //     height: 228px;
  //     // margin-left: -60px;
  //     // margin-top: -10px;
  //   }
  // }
  // &__cat {
  //   width: 10.06%;
  //   margin-left: -30px;
  //   margin-top: -450px;
  // }








// Mobile for second variant
  .import {
  //   display: flex;
  //   height: 600px;
  //   flex-direction: column;
  //   align-content: center;
  //   align-items: center;
  //   justify-content: center;
  //   width: 100%;
  //   margin-top: -100px;

  //   &__air {
  //     display: none;
  //     margin: unset;
  //     padding: unset;
  //   }
  //   &__left {
  //     flex-direction: column;
  //     // align-items: center;
  //     align-content: center;
  //     justify-content: center;
  //     margin-left: -50px;
  //     margin-top: unset;
  //     width: 90%;
  //     text-align: center;

  //     &__title {
  //       padding-top: unset;
  //     }
  //     &__btn {
  //       padding-top: 50px;
  //     }
  //     &__text {
  //       padding-top: 50px;
  //       margin-top: 10px;
  //       height: 200px;
  //     }
  //   }
  //   &__right {
  //     margin: unset;
  //     padding: unset;

  //     .brg {
  //       padding: unset;
  //       display: none;
  //       margin: unset;
  //     }
  //     .phone {
  //       display: none;
  //       margin: unset;
  //     }
  //   }
  //   &__cat {
  //     display: none;
  //     margin-left: -200px;
  //   }
  // }







  // &__left {
    //   display: none;
    // }
    // &__right {
    //   width: 80%;
    //   margin-left: -50px;
    // }
    // &__cat {
    //   display: none;
    // }