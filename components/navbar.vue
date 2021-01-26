<template>
  <div class="nav">
    <div class="mob-nav">
      <div class="mob-nav__btn" @click="burger" :style="hideBtn">
        <img src="../assets/burg.png" alt=""  width="50x" height="40px"/>
      </div>
      <div class="mob-nav__slider" :style="burgerMenu">
        <span @click="closeBurger">&#10008;</span>
        <div class="mob-nav__slider__content">
          <a href="tel: +79186275537" class="navbar__phone__num">
            8 (918) 627-55-37
          </a>
          <a href="#"> Войти </a>
        </div>
      </div>
    </div>
    <div class="nav__logo-wrapper">
      <img
        src="../assets/logo232.png"
        alt=""
        class="nav__logo"
        v-tilt="{
          speed: 1500,
          max: 25,
          reverse: true,
          glare: true,
          transition: true,
        }"
      />
    </div>
    <div class="nav__links-wrapper">
      <a href="#">8 (918) 627-55-37</a>
      <button
        class="nav__btn"
        v-tilt="{
          speed: 1500,
          max: 25,
          reverse: true,
          glare: true,
          transition: true,
        }"
      >
        Войти
      </button>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      burgerMenu: {
        display: "",
      },
      hideBtn: {
        display: "",
      },
      sticky: {
        position: "",
        display: "",
        visibility: "",
      },
    };
  },
  methods: {
    burger() {
      this.burgerMenu.display = "block";
      this.hideBtn.display = "none";
    },
    closeBurger() {
      this.burgerMenu.display = "none";
      this.hideBtn.display = "block";
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      // console.log(window.pageYOffset);
      if (window.pageYOffset == 0) {
        this.sticky.visibility = "visible";
      } else if (window.pageYOffset > 0 && window.pageYOffset < 500) {
        this.sticky.visibility = "collapse";
      } else {
        this.sticky.position = "sticky";
        this.sticky.visibility = "visible";
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.mob-nav {
  display: none;
}
.nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #fbfbfc;
  z-index: 33;
  top: 0;
  transition: 1s, ease-in-out;
  font-family: Roboto, sans-serif;

  &__logo-wrapper {
    width: 50%;
    display: flex;

    justify-content: center;
    align-content: center;
    align-items: center;
  }
  &__links-wrapper {
    width: 50%;
    display: flex;

    justify-content: center;
    align-content: center;
    align-items: center;

    a {
      text-decoration: none;
      color: #333;
      font-size: 18px;
      margin-right: 50px;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
  &__logo {
  }

  &__btn {
    //Neon
    width: 150px;
    height: 50px;
    background: none;
    color: #852bff;
    border-radius: 4px;
    font-size: 20px;
    outline: none;
    border: none;
    appearance: none;
    box-sizing: border-box;
    position: relative;
    transition: 0.5s;
    overflow: hidden;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: #832bff63;
      color: #fff;
      box-shadow: 0 0 40px #832bff88;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-top: 2px solid #852bff;
      border-left: 2px solid #852bff;
      transition: 0.5s;
    }
    &:hover:before {
      width: 100%;
      height: 100%;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #852bff;
      border-right: 2px solid #852bff;
      transition: 0.5s;
    }
    &:hover:after {
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and (max-width: 768px) {
  .nav {
    padding-top: 0;
    padding-bottom: 0;
    position: sticky;
    background: rgba(255,255,255,.7);

    &__logo-wrapper{
      display: none;
    }
    &__links-wrapper{
      display: none;
    }
  }
  .mob-nav {
    width: 100%;
    display: block;
    margin-top: unset;

    &__btn{
      padding:10px;
    }

    &__slider {
      display: none;
      position: absolute;
      width: 100%;
      height: 150px;
      top: 0;
      left: 0;
      background: rgba(112, 112, 112, 0.5);

      span {
          font-size: 50px;
          position: absolute;
          top: 0;
          right: 10px;
          color: #fff;
          z-index: 999;
        }

      &__content {
        width: 70%;
        height: 150px;
        margin: auto;
        background: #5f5f5f;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        position: sticky;

        
        a {
          font-size: 24px;
          color: #fff;
          text-decoration: none;
        }
      }
    } 
  }
}
</style>