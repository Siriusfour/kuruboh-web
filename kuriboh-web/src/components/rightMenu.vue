<script setup>

import { useStore } from 'vuex';
import { AccountBookFilled, NotificationFilled, PieChartFilled, CustomerServiceFilled, ToolFilled, ContainerFilled, HddFilled, QuestionCircleFilled } from '@ant-design/icons-vue'
const tagColorList = [
    { tagColor: "red", tagName: "公告", tagDetail: "博康海洋下单站点的公告以及版务人员有序的组织和安排一些社区事件。" },
    { tagColor: "darkblue", tagName: "下单", tagDetail: "购买本公司的产品" },
    { tagColor: "red", tagName: "服务", tagDetail: "向我们提交申请以获得售后服务/技术支持" },
    { tagColor: "", tagName: "报表", tagDetail: "" },
    { tagColor: "", tagName: "我的订单", tagDetail: "" },
    { tagColor: "", tagName: "我的申请", tagDetail: "" },
    { tagColor: "", tagName: "常见问题", tagDetail: "" },
    { tagColor: "", tagName: "联系我们", tagDetail: "" },
]
const store = useStore();

function selectTag(index) {
    const el = document.getElementById('tagInfo');
    el.style.backgroundColor = tagColorList[index].tagColor
    el.classList.toggle('changeTab');

    //修改state
    store.commit('changeTagInfo', tagColorList[index]);

}

</script>


<template>



    <div class="Menu">
        <div class="menuItem" @click="selectTag(0)">
            <NotificationFilled style="margin-right: 13px; margin-left: 20px; color: darkblue;" />
            <text class="titleText"> 公告</text>
        </div>
        <RouterLink to="/" class="menuItem">
            <div  @click="selectTag(1)">
                <AccountBookFilled style="margin-right: 13px; margin-left: 20px; color: red;" />
                <text class="titleText"> 下单</text>
            </div>
        </RouterLink>

        <RouterLink to="/apply" class="menuItem">
            <div  @click="selectTag(2)">
                <ToolFilled style="margin-right: 13px; margin-left: 20px; color: chocolate;" />
                <text class="titleText"> 服务</text>
            </div>
        </RouterLink>

        <div class="menuItem" @click="selectTag(3)">
            <PieChartFilled style="margin-right: 13px; margin-left: 20px; color: darkgreen;" />
            <text class="titleText"> 报表</text>
        </div>

        <div class="menuItem" @click="selectTag(4)">
            <ContainerFilled style="margin-right: 13px; margin-left: 20px; color:brown; " />
            <text class="titleText"> 我的订单</text>
        </div>

        <div class="menuItem" @click="selectTag(5)">
            <HddFilled style="margin-right: 13px; margin-left: 20px; color: blueviolet;" />
            <text class="titleText"> 我的申请</text>
        </div>

        <div class="menuItem" @click="selectTag(6)">
            <QuestionCircleFilled style="margin-right: 13px; margin-left: 20px; color: blue;" />
            <text class="titleText"> 常见问题</text>
        </div>

        <div class="menuItem" @click="selectTag(7)">
            <CustomerServiceFilled style="margin-right: 13px; margin-left: 20px; " />
            <text class="titleText"> 联系我们</text>
        </div>
    </div>

</template>

<style scoped>
.Menu {
    box-shadow: rgba(161, 157, 194, 0.1) 0px 1px 1px 0px inset, rgba(66, 66, 219, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    width: 15%;
    height: 60%;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.titleText {
    color: #314188;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 15px;
}

.menuItem {
    transition: background-color 0.5s, color 0.5s;
    background-color: rgb(255, 254, 254);
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-self: start;
    align-items: center;
    border-radius: 7px;

}

.menuItem:hover {
    background-color: rgb(231, 231, 231);
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-self: start;
    align-items: center;
    border-radius: 7px;
}

.changeTab {
    transform: scale(1.2);
}
</style>