<script setup>
import top from './components/top.vue';
import rightMenu from './components/rightMenu.vue';
import { AccountBookFilled } from '@ant-design/icons-vue'
import { computed } from 'vue'
import { useStore } from 'vuex';


const store = useStore();
const tagName = computed(() => store.state.tagName);
const tagDetail = computed(() => store.state.tagDetail)


</script>

<template>

  <div style="width: 100%; display: flex; flex-direction: column ; justify-content: center; align-items: center;">
    <top style="z-index: 1000;"></top>

    <div class="tag" id="tagInfo">
      <div style="margin: 15px;">
        <AccountBookFilled style="color: white; font-size: 23px;  margin-right: 20px;" />
        <text class="titleText animate__fadeInDown">{{ tagName }}</text>
      </div>

      <text class="titleDetailText">{{ tagDetail }}</text>

    </div>
  </div>

  <div class="mainView">
    <div class="left">
      <RouterView />
    </div>
    <!-- 右边导航栏目 -->
    <rightMenu style="margin-right: 26%;" />

  </div>


</template>

<style scoped>
.tag {
  width: 57%;
  height: 110px;
  border-radius: 8px;
  background-color: coral;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  transition: background-color 0.5s ease, transform 0.5s ease;
}


.titleText {
  color: #ffffff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 550;
  font-size: 20px;
  margin-top: 15px;

}

.titleDetailText {
  color: #f1f1f1;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 450;
  font-size: 13px;
  margin-top: 0px;
}

.mainView {
  margin-top: 5%;
  margin-left: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
}

.left {
  width: 80%;
  margin-left: 17%;
  height: 100%;
}
</style>
