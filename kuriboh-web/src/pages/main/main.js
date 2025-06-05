import { createApp } from 'vue'

import App from '../../App.vue'
import Antd from 'ant-design-vue';
import { createStore } from 'vuex'
import {router} from '../../config/router'
import 'ant-design-vue/dist/reset.css';
import '../../style.css'
import '../../global.css'
import '../../assets/iconfont/iconfont.css'
import 'animate.css';



const store = createStore({
  state () {
    return {
      count: 0,
      tagName:"下单",
      tagColor:"red",
      tagDetail:"此处用于下单",
      shoppingCatList:[]
    }
  },
  mutations: {
    changeTagInfo(state,tagInfo) {
      state.tagName = tagInfo.tagName
      state.tagColor = tagInfo.tagColor
      state.tagDetail = tagInfo.tagDetail
    },

    addshoppingCat(state,item){
      console.log(state.shoppingCatList);
      
      state.shoppingCatList.unshift(item)
    }
  }
})

createApp(App).use(Antd).use(store).use(router).mount('#app')

