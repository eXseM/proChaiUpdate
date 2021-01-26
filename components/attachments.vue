<template>
    <div class="attach">
        <div class="map"><img src="../assets/maps.webp" alt="" v-tilt="{
          speed: 1500,
          max: 25,
          reverse: true,
          glare: true,
          transition: true,
        }"></div>
        <div class="ficus"><img src="../assets/ficus.webp" alt="" v-tilt="{
          speed: 1500,
          max: 25,
          reverse: true,
          glare: true,
          transition: true,
        }"></div>
        <div class="burger"><img src="../assets/burg.webp" alt="" v-tilt="{
          speed: 1500,
          max: 25,
          reverse: true,
          glare: true,
          transition: true,
        }"></div>
        <div class="cat"><img src="../assets/Cat.png" alt="" width="170" ></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .attach{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: auto;
        margin-top: -200px;
        position: relative;

        .map{
            margin-left: 100px;
            padding-right: 200px;
            filter: drop-shadow(0 0 3px);
        }
        .ficus{
            margin-left: -100px;
            margin-top: 50px;
            transform: rotate(45deg);
            filter: drop-shadow(0 0 3px);
        }
        .burger{
            margin-left: 100px;
            margin-top: -100px;
            transform: rotate(-45deg);
            filter: drop-shadow(0 0 3px);
        }
        .cat{
            position: absolute;
            right: 0;
            top: -50px;
            
        }
    }

    @media screen and (max-width: 768px) {
        .attach{
            display: none;
        }
    }
</style>