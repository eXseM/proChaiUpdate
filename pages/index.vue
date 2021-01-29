<template>
  <div class="containerMain" >
    <banner />
    <info-block />
    <div class="toTop" :style="arrow">
      <a href="#top" v-smooth-scroll="{duration: 100, offset: 2}"><img src="../assets/arrowUp.png" alt=""></a>
    </div>
    <attachments />
    <import />
    <export />
    <start-work />
    <contacts />
    <developers />
  </div>
</template>

<script>
import banner from "~/components/banner.vue";
import InfoBlock from '~/components/infoBlock.vue';
import Import from '~/components/import.vue';
import Attachments from '~/components/attachments.vue';
import Export from '~/components/export.vue';
import StartWork from '~/components/startWork.vue';
import Contacts from '~/components/contacts.vue';
import Developers from '~/components/developers.vue';

export default {
  components: {
    banner,
    InfoBlock,
    Import,
    Attachments,
    Export,
    StartWork,
    Contacts,
    Developers
  },
  data(){
    return{
      arrow:{
        visibility: ''
      }
    }
  },
  mounted(){
    window.addEventListener("scroll", () => {
      if (window.pageYOffset < 800) {
        this.arrow.visibility = 'hidden'
      }else{
        this.arrow.visibility = 'visible'
      }
    })
  }
};
</script>


<style lang="scss">

.toTop{

  position: fixed;
  bottom: 70px;
  right: 150px;
  animation: move 1s ease-in-out infinite;
  z-index: 999;
  img{
    width: 44px;
  }
}

@keyframes move {
  50%{
    bottom: 67px;
  }
}

</style>
