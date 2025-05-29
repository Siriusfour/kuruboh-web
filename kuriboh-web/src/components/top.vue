<script setup>
import { ref } from 'vue'
import { SearchOutlined, CaretDownOutlined, BellOutlined, SoundFilled } from '@ant-design/icons-vue'
const onClick = ({ key }) => {
  console.log(`Click on item ${key}`);
};

const Avatar = ref("https://discuss.flarum.org.cn/assets/avatars/cagTyDK8nojaKIsu.png")
const nickName = ref("susi")
</script>

<template>
  <div
    style="width: 100%; height: 80px; background-color: rgb(62, 102, 177); position: fixed; top: 0; left: 0; display: flex; flex-direction: row; justify-content: start; align-items: center;">

    <img src="https://bokanghy.com/oss/2024-07-26/778648dd59ba6eea4150b40fdd144edb.png" height="auto" width="200px"
      style="margin-left: 250px;">
    <text class="titleText">首页</text>
    <text class="titleText">文档</text>
    <text class="titleText">客服</text>
    <text class="titleText">更多</text>

    <div style="  margin-left: 300px;">
      <SearchOutlined class="searchIcon" />
      <input class="searchInput" placeholder="输入搜索内容" />
    </div>

    <div
      style="position: absolute; left: 1200px; display: flex; flex-direction: row; justify-content: start; align-items: center;">

      <a-dropdown>
        <a @click.prevent style="margin-left: 30px;" class="titleText">
          中文
          <CaretDownOutlined style="color: white; margin-right: 20px;" />
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu @click="onClick">
            <a-menu-item key="1">中文</a-menu-item>
            <a-menu-item key="2">English</a-menu-item>
            <a-menu-item key="3">3rd menu item</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>

      <div style="margin-left: 20px;">
        <text class="titleText" style="margin-right: 5px;">通知</text>
        <SoundFilled style="color: white;" />
      </div>



      <a-dropdown>
        <a @click.prevent style="margin-left: 30px;">
          <div class="UserInfoBox">
            <img :src="Avatar" style="width: 40px;border-radius: 50%; ">
            <text class="titleText" style="margin-left: 10px;">{{ nickName }}</text>
          </div>

          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu @click="onClick">
            <a-menu-item key="1">个人主页</a-menu-item>
            <a-menu-item key="2">我的订单</a-menu-item>

          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>

</template>

<style scoped>
.titleText {
  color: #d4d4d4;
  margin-left: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 550;
  font-size: 15px;
}

.searchInput {
  position: relative;
  /* 为绝对定位的伪元素提供参考 */
  background-color: rgb(32, 67, 133);
  border: none;
  outline: none;
  width: 400px;
  /* 正常状态下的宽度 */
  height: 40px;
  border-radius: 8px;
  margin-left: 10px;
  color: #eeeeee;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 550;
  font-size: 15px;
  right: 200px;
  /* 初始向右偏移200px，留出空间 */

  box-sizing: border-box;
  /* 确保padding不影响总宽度 */
  transition: all 0.3s ease;
  /* 添加平滑过渡效果 */
}

.searchInput:placeholder-shown {
  width: 200px;
  /* 占位符显示时的宽度 */
  right: 0;
  /* 取消偏移 */
  padding-left: 10px;
  /* 恢复原始padding */
}

.searchIcon {
  color: white;
  font-weight: 700;
}

.UserInfoBox {
  left: 40px;
  border-radius: 10px;
  background-color: rgb(62, 102, 177);
  width: 100px
}

.UserInfoBox:hover {
  background-color: rgb(32, 67, 133);
  left: 40px;
  border-radius: 10px;
  width: 100px;

}
</style>
