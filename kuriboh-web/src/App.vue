<script setup>
import top from './components/top.vue';
import rightMenu from './components/rightMenu.vue';
import { AccountBookFilled } from '@ant-design/icons-vue'
</script>

<template>
  <top></top>
  <div
    style="display: flex; flex-direction: row; justify-content: center; align-items: start; width: 100%; height: 100%;">
    <div class="tag" id="tagInfo">
      <div style="margin: 15px;">
        <AccountBookFilled  style="color: white; font-size: 23px;  margin-right: 20px;"/>
        <text class="titleText">下单</text>
      </div>

      <text class="titleDetailText">对于 Flarum 在设计上、功能上有什么好的建议呢？如果您需要技术支援，请在 “求助” 节点寻求帮助。</text>
    </div>

    <!-- 右边导航栏目 -->
     <rightMenu class="rightMenu"/>
  </div>
</template>

<style scoped>
.tag {
  width: 60%;
  height: 12%;
  border-radius: 8px;
  background-color: coral;
  margin-top: 90px;
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

.rightMenu{
  margin-top:15%;
  margin-left: 5%;
}
</style>
