import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import { InfiniteScroll } from 'mint-ui';
import Foot from 'components/Footer'
import Swipe from 'components/Swipe'

Vue.use(InfiniteScroll);

let app = new Vue({
  el: '#app',
  data: {
    lists: null,
    pageNum: 1,
    pageSize: 6,
    loading: false,
    allLoaded: false,
    bannerLists: null
  },
  created(){
    this.getLists()
    this.getBanner()
  },
  methods: {
    getLists(){
      if(this.allLoaded === true){
        return
      }
      this.loading = true
      let param = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      axios.post(url.hotLists, param).then( res => {
        let curLists = res.data.lists
        //判断所以数据是否加载完毕
        if(curLists.length < this.pageSize){
          this.allLoaded = true
        }
        if(this.lists){
          this.lists = this.lists.concat(curLists)
        }else{
          this.lists = curLists
        }
        this.loading = false
        this.pageNum++
      })
    },
    getBanner(){
      axios.get(url.banner).then( res => {
        this.bannerLists = res.data.lists
      })
    }
  },
  components: {
    Foot,
    Swipe
  }
})
