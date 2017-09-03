import 'css/common.css'
import './search.css'

import  Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import mixin from 'js/mixin'

let {keyword, id} = qs.parse(location.search.substr(1))

new Vue({
  el: '.container',
  data: {
    searchList: null,
    keyword,
    isShow: false
  },
  created(){
    this.getSearchList()
  },
  methods:{
    getSearchList(){
      axios.post(url.searchList, {keyword, id}).then(res => {
        this.searchList = res.data.lists
      })
    },
    move(){
      this.isShow = document.body.scrollTop > 100;
    },
    goToTop(){

    }
  },
  mixins: [mixin]
})
