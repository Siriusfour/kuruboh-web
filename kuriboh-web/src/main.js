import { createApp } from 'vue'
import './style.css'
import './global.css'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import { createStore } from 'vuex'
import './assets/iconfont/iconfont.css'
import 'animate.css';
import { state } from './components/purchase/purchase';


const store = createStore({
  state () {
    return {
      count: 0,
      tagName:"下单",
      tagColor:"red",
      tagDetail:"此处用于下单",
      shoppingCat:[]
    }
  },
  mutations: {
    changeTagInfo(state,tagInfo) {
      state.tagName = tagInfo.tagName
      state.tagColor = tagInfo.tagColor
      state.tagDetail = tagInfo.tagDetail
    },

    addshoppingCat(state,item){
      console.log(state.shoppingCat);
      
      state.shoppingCat.unshift(item)
    }
  }
})

createApp(App).use(Antd).use(store).mount('#app')

