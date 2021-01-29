<template>
  <div class="container">
    <div class="banner">
      <div class="banner__leftSide">
        <h1 class="pt-5 mt-5">ПОВЫШЕНИЕ ЛОЯЛЬНОСТИ - ЧАЕВЫЕ КАРТОЙ</h1>
        <div class="banner__content">
          <ul class="banner__content__list">
            <li>
              Максимум лояльности
            </li>
            <li>
              Довольный персонал
            </li>
            <li>
              Подробная аналитика
            </li>
          </ul>
          <button class="banner__content__btn" href="#" v-tilt="{speed: 1500, max: 25, reverse: true, glare: true, transition: true}">Демо версия</button>
        </div>
      </div>
      <div class="rightSide">
        <img src="../assets/bannerPhone.png" alt="" class="phone" />
      </div>
    </div>
    <div class="arrowWrap">
      <a href="#start" v-smooth-scroll="{duration: 100, offset: 3}"><img src="../assets/Polygon 3.png" alt="" id="arrowDown"></a>
      
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.container{
  background: #fbfbfc;
  width: 100%;
  height: 880px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  .arrowWrap{
    position: absolute;
    top: 850px;
    animation: moveArrow 1s infinite;
  }

}
@keyframes moveArrow {
  50%{
    top: 845px;
  }
}
.banner {
  width: 60%;
  display: flex;
  flex-direction: row;
  color: #222;
  
  &__content{

    &__list{
      font-family: Montserrat, Arial, sans-serif;
        margin-top: 35px;
        font-size: 24px;
        font-weight: 300;
        color: #333;
        font-weight: normal;

        & li{
          list-style-type: none;
          line-height: 1.5;

          &::before{
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 10px;
            margin-bottom: 3px;
            background: rgba(234, 219, 255);
          }
        }
    }
    &__btn{
        //Neon
        margin-top: 25px;
        width: 150px;
        height: 50px;
        // background: #f1f1f1;
        background: none;
        border: 2px solid #e9e7f8;
        color: #7658e0;
        border-radius: 4px;
        font-size: 20px;
        outline: none;
        // border: none;
        appearance: none;
        box-sizing: border-box;
        position: relative;
        transition: .5s;
        overflow: hidden;
        cursor: pointer;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-tap-highlight-color: transparent;

        &:hover{
          border: 2px solid #7658e0;
          color: #7658e0;
          box-shadow: 0 0 30px #832bff4d;
        }
        // &:hover{
        //   background: #832bff63;
        //   color: #fff;
        //   box-shadow: 0 0 40px #832bff88;
        // }

        // &:before{
        //   content: '';
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 10px;
        //   height: 10px;
        //   border-top: 2px solid #852bff;
        //   border-left: 2px solid #852bff;
        //   transition: .5s;
        // }
        // &:hover:before{
        //   width: 100%;
        //   height: 100%;
        // }
        // &:after{
        //   content: '';
        //   position: absolute;
        //   bottom: 0;
        //   right: 0;
        //   width: 10px;
        //   height: 10px;
        //   border-bottom: 2px solid #852bff;
        //   border-right: 2px solid #852bff;
        //   transition: .5s;
        // }
        // &:hover:after{
        //   width: 100%;
        //   height: 100%;
        // }
    }
  }

  &__leftSide{
    h1{ 
      padding-top: 100px;
      font-family: montserrat, sans-serif;
      font-weight: bold;
      letter-spacing: 1px;
      font-size: 34px;
      }
  }
}

@media screen and (max-width: 768px) {
  .banner{
    width: 100%;
    margin-top: -300px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    &__leftSide{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;

      h1{
        text-align: center;
      }

      button{
        display: block;
        margin: 50px auto;
      }
    }
    .phone{
      display: none;
    }
  }
  .arrowWrap{
    top: 650px !important;
  }
}
</style>