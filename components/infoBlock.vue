<template>
  <div class="info"  id="start">
    <div class="info__left">
      <img src="../assets/pizza.png" alt="" />
    </div>
    <div class="info__right">
      <div class="info__right__lb">
        <div class="lb__top">
          <img src="../assets/heart.png" alt="" />
          <p>
            Ваши гости всегда смогут
            отблагодарить ваших
            сотрудников
          </p>
        </div>
        <div class="lb__btm">
          <img src="../assets/online.png" alt="" />
          <p>Полная отчётность по работе официантов</p>
        </div>
      </div>
      <div class="info__right__rb">
        <div class="rb__top">
          <img src="../assets/gift.png" alt="" />
          <p>Чаевые это подарок, а значит мы порадуем бухгалтера!</p>
        </div>
        <div class="rb__btm">
          <img src="../assets/config.png" alt="" />
          <p>Мы бесплатно подключаем и настраиваем всю систему</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info {
  width: 100%;
  height: 900px;
  color: #222;

  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;

  font-family: montserrat, sans-serif;

  background: #fff;

  &__left {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;
    img{
      width: 90%;
      margin-right: -100px;
      // height: 80%;
    }
  }

  &__right {
    width: 70%;
    display: flex;
    margin-top: -200px;
    align-items: center;
    align-content: center;

    &__lb {
      display: flex;
      flex-direction: column;
      width: 30%;

      margin-right: 50px;
      margin-left: 50px;

      .lb__top {
        margin-top: 10px;
        display: flex;
        align-content: center;
        align-items: center;
        padding-bottom: 20px;
        margin-bottom: 20px;
        p {
          font-size: 18px;
        }
        img {
          width: 42px;
          height: 42px;
          padding-right: 20px;
        }
      }
      .lb__btm {
        display: flex;
        align-items: center;
        align-content: center;
        padding-top: 20px;
        p {
          font-size: 18px;
        }
        img {
          width: 42px;
          height: 42px;
          padding-right: 20px;
        }
      }
    }

    &__rb {
      width: 30%;
      display: flex;
      flex-direction: column;

      .rb__top {
        display: flex;
        align-content: center;
        align-items: center;
        padding-bottom: 20px;
        margin-top: -10px;
        p {
          font-size: 18px;
        }
        img {
          width: 42px;
          height: 42px;
          padding-right: 20px;
        }
      }
      .rb__btm {
        display: flex;
        padding-top: 30px;
        align-content: center;
        align-items: center;
        margin-bottom: -20px;
        p {
          font-size: 18px;
        }
        img {
          width: 42px;
          height: 42px;
          padding-right: 20px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .info{
    margin-top: -150px;
    &__left{
      display: none;
    }
    &__right{
      width: 100%;
      display: flex;
      flex-direction: column;

      &__lb{
        width: 80%;
        margin: auto;
        padding-bottom: 20px;
      }
      &__rb{
        padding-top: 20px;
        margin: auto;
        width: 80%;
      }
    }
  }
}
</style>
