<template>
  <div>
    <navbar />
    <Nuxt />
  </div>
</template>

<script>

import navbar from '~/components/navbar'

export default {
  components:{
    navbar
  }
}
</script>

<style>
html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #fcfcfc;
  overflow-y: none;
  
  /* background-image: url(../assets/MaskGroup.png); */
}
::-webkit-scrollbar {
  display: none;
}
*{
  padding: 0;
  margin: 0;
}
</style>
