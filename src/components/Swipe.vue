<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="(item,index) of lists" :key="index">
        <a class="js-no-follow" :href="item.clickUrl">
          <img class="goods-main-photo fadeIn" :src="item.image">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default{
    name: 'swipe',
    //props: ['lists']
    props: {
      lists: {
        type: Array,
        required: true
      },
      name: {}
    },
    created(){
//      console.log('created: ',document.querySelectorAll('.swiper-slide'));
    },
    mounted(){
//      console.log('mounted: ',document.querySelectorAll('.swiper-slide'));
      new Swiper('.swiper-container',{
        loop: true,
        pagination: '.swiper-pagination'
      })
    },
//    watch:{
//      lists(val, oldVal){
//        console.log(val, oldVal)
//        console.log('before nextTick: ',document.querySelectorAll('.swiper-slide'))
//        this.$nextTick(() => {
//          console.log('after: ',document.querySelectorAll('.swiper-slide'));
//        })
//      }
//    }
  }
</script>

<style>
  .swiper-slide img{
    height: 100%;
    width: 100%;
  }
</style>
