<template>
  <div class="export">
    <div class="export__left">
      <div class="export__left__title">
        <h2>Вывести средства</h2>
        <img src="../assets/pinned.png" alt="" />
      </div>
      <div class="export__left__buttons">
        <div class="toggle" @click="activeDesc = descriptions['nazvanie1']">
          <img src="../assets/cat123.webp" alt="" />
          <p>Личный кабинет</p>
        </div>
        <div class="toggle" @click="activeDesc = descriptions['nazvanie2']">
          <img src="../assets/cat321.webp" alt="" />
          <p>Личный кабинет</p>
        </div>
        <div class="toggle" @click="activeDesc = descriptions['nazvanie3']">
          <img src="../assets/cat231.webp" alt="" />
          <p>Личный кабинет</p>
        </div>
        <div class="toggle" @click="activeDesc = descriptions['nazvanie4']">
          <img src="../assets/dog.webp" alt="" />
          <p>Личный кабинет</p>
        </div>
      </div>
      <div class="export__left__text">
        <p>{{ activeDesc }}</p>
      </div>
      <div class="attach">
        <img src="../assets/plane.png" alt="" id="plane" />
        <img src="../assets/coffee.png" alt="" />
      </div>
    </div>
    <div class="export__right"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descriptions: {
        'nazvanie1': 'Официанту достаточно зайти в личный кабинет в браузере или мобильном приложении',
        'nazvanie2': 'Авторизоваться под своим логином',
        'nazvanie3': 'Ввести сумму вывода и выбрать карту или электронный кошелек',
        'nazvanie4': 'Получить деньги на карту и радоваться жизни :)',
      },
      activeDesc: 'Официанту достаточно зайти в личный кабинет в браузере или мобильном приложении'
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.export {
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: flex-end;
  font-family: Montserrat, arial, sans-serif;

  &__left {
    width: 40%;
    height: 700px;
    border-right: 1px solid #696969;
    color: #222;

    &__title {
      font-size: 46px;
      display: flex;

      img {
        width: 64px;
        height: 64px;
        transform: rotate(45deg);
        margin-top: -40px;
      }
    }
    &__buttons {
      display: flex;
      flex-direction: row;

      .toggle {
        width: 120px;
        height: 120px;
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        cursor: pointer;

        &:hover{
          background: #f0f0f0;
        }

        p {
          text-align: center;
          font-size: 18px;
        }
      }
    }
    &__text {
      padding-top: 50px;
      width: 90%;
      font-size: 22px;
      height: 100px;
    }
    .attach {
      display: flex;
      flex-direction: row;
      margin-top: 150px;
      margin-bottom: 1px;
      justify-content: space-between;

      #plane {
        width: 64px;
        height: 64px;
        margin-top: -100px;
        margin-bottom: 1px;
        margin-left: -100px;
      }
    }
  }
  &__right {
    width: 40%;
    height: 800px;
  }
}

@media screen and (max-width: 768px) {
  .export{
    margin-top: 200px;
    &__left{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      width: 100%;
      border: none;
      text-align: center;

      &__title{
        font-size: 28px;

        img{
          display: none;
        }
      }
      &__buttons{
        display: flex;
        flex-direction: column;
      }

      .attach{
        display: none;
      }
    }

    &__right{
      display: none;
    }
  }
}
</style>