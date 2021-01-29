<template>
  <div class="dev">
    <p>Связь с разработчиками</p>
    <div class="links">

      <a href="https://telegram.im/@eXseM" target="_blank"><img src="../assets/tele2.png" alt="" style="width: 52px;"></a>
      <a href="https://github.com/eXseM" target="_blank"><img src="../assets/gith.png" alt=""></a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shoxieshox88@gmail.com" target="_blank"><img src="../assets/dogMail.png" alt=""></a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .dev{
    height: 50px;
    background: #ececec;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    font-family: Montserrat, sans-serif;
    p{
      font-size: 18px;
    }
    .links{
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      img{
        padding-top: 10px;
        width: 44px;
        padding-right: 10px;
        padding-left: 10px;
      }
    }
  }
</style>
