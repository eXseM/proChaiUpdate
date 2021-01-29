<template>
  <div class="cont">
    <div class="cont__left">
      <div class="cont__left__org">
        <p>ООО ПРО-ЧАЙ (с)</p>
      </div>
      <div class="cont__left__links">
        <a href="#"> Договор оферты </a>
        <a href="#"> Политика конфиденциальности</a>
      </div>
    </div>
    <div class="cont__right">
      <div class="cont__right__social">
        <a href="https://telegram.im/@eXseM" target="_blank"><img src="../assets/tele2.png" alt="" /></a>
        <a href="#"><img src="../assets/wapp1.png" alt=""/></a>
        <a href="tel: +79186275537">+7 (918) 627-55-37</a>
      </div>
      <div class="cont__right__btn">
        <a href="#">Демо версия</a>
        <a href="#">Начать</a>
        <a href="#">Зарегистрироваться</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cont {
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 100px;
  height: 200px;

  background: #ececec;

  font-size: 18px;
  font-weight: 500;
  font-family: Montserrat, sans-serif;
  color: #000;
  &__left {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__links {
      display: flex;
      padding-top: 20px;
      flex-direction: column;
      justify-content: flex-start;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          cursor: pointer;
          color: #652bff;
        }
      }
    }
  }
  &__right {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__social {
      display: flex;
      flex-direction: row;

      justify-content: flex-end;
      align-items: center;
      align-content: center;

      img {
        width: 52px;
        cursor: pointer;
      }

      a {

        padding-left: 20px;
        text-decoration: none;
        cursor: pointer;
        color: #333;

        &:hover {
          color: #652bff;
        }
      }
    }
    &__btn {
      display: flex;
      justify-content: flex-end;
      align-content: center;
      align-items: center;
      padding-top: 20px;

      a {
        padding-left: 20px;
        text-decoration: none;
        color: #333;

        &:hover {
          color: #652bff;
        }
      }
    }
  }
}

@media screen and (max-width: 768px){
  .cont{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    height: 300px;
    width: 100%;

    &__left{
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;

      &__links{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;

        a{
          padding-top: 10px;
        }
      }
    }
    &__right{
      width: 100%;
      padding-top: 10px;


      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;

      &__social{
        display: flex;
      }
      &__btn{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding-bottom: 40px;
      }
    }
  }
}
</style>
