import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      count: 0,
      tagName:"下单",
      tagColor:"red",
      tagDetail:"此处用于下单"
    }
  },
  mutations: {
    changeTagInfo(state,tagInfo) {
      state.tagName = tagInfo.tagName
      state.tagColor = tagInfo.tagColor
      state.tagDetail = tagInfo.tagDetail
    }
  }
})

createApp(App).use(Antd).use(store).mount('#app')

